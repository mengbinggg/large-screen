<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-25 15:30:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-04 09:45:51
 * @FilePath: /large-screen/src/views/talentService.vue
 * @Description: 人才服务
-->
<template>
  <div class="wrapper">
    <div class="header" @click="fullScreen">
      <div class="title">成都人才服务情况分析</div>
    </div>
    <div class="content">
      <div class="content-l">
        <div class="content-lt">
          <div class="panel">
            <div class="panel-title">人才服务总量</div>
            <div class="panel-body">
              <ul class="service-total">
                <li v-for="item in serviceTotal" :key="item.talentCategories">
                  <img v-if="item.talentCategories == '申报量'" class="icon" src="../assets/talent/icon_decalre.png"
                    alt="icon">
                  <img v-else class="icon" src="../assets/talent/icon_complete.png" alt="icon">

                  <div class="info">
                    <div class="label">{{ item.talentCategories }}</div>
                    <div class="val">
                      <CountTo class="num" :end-val="item.talentCount"></CountTo>条
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="content-lc">
          <div class="panel">
            <div class="panel-title">人才服务业务情况</div>
            <div class="panel-body">
              <ServiceBusPie :data="serviceBus"></ServiceBusPie>
            </div>
          </div>
        </div>
        <div class="content-lb">
          <div class="panel">
            <div class="panel-title">服务部门TOP10</div>
            <div class="panel-body">
              <ServiceRankBar :data="serviceRank"></ServiceRankBar>
            </div>
          </div>
        </div>
      </div>
      <div class="content-c">
        <BusinessGraph></BusinessGraph>
      </div>
      <div class="content-r">
        <div class="content-rt">
          <div class="panel">
            <div class="panel-title">人才服务需求情况</div>
            <div class="panel-body">
              <div class="service-total">
                <div class="label">服务总量：</div>
                <div class="val">
                  <CountTo class="num" :end-val="serviceDemandTotal"></CountTo>
                  <span class="unit">人</span>
                </div>
              </div>

              <ServiceBar :data="serviceDemand"></ServiceBar>
            </div>
          </div>
        </div>
        <div class="content-rc">
          <div class="panel">
            <div class="panel-title">人才情况（按月）</div>
            <div class="panel-body">
              <PostBar :data="post"></PostBar>
            </div>
          </div>
        </div>
        <div class="content-rb">
          <div class="panel">
            <div class="panel-title">区县服务情况</div>
            <div class="panel-body">
              <BusinessMap :data="serviceByArea"></BusinessMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
import '../css/base.css'
import mixin from '../js/scalePageMixins'
import BusinessGraph from '../components/talentService/businessGraph.vue'
import ServiceBusPie from '../components/talentService/serviceBusPie.vue'
import PostBar from '../components/talentService/postBar.vue'
import ServiceBar from '../components/talentService/serviceBar.vue'
import ServiceRankBar from '../components/talentService/serviceRankBar.vue'
import BusinessMap from '../components/talentService/businessMap.vue'
import $api from '../api/talentServiceApi'

export default {
  mixins: [mixin],
  components: { CountTo, BusinessGraph, ServiceBusPie, PostBar, ServiceBar, ServiceRankBar, BusinessMap },
  data() {
    return {
      serviceTotal: {},
      serviceBus: [],
      serviceRank: [],
      serviceDemand: [],
      serviceDemandTotal: 0,
      post: [],
      serviceByArea: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.getAllService()
      this.getServiceBusiness()
      this.getServiceDepartment()
      this.getServiceDemand()
      this.getServiceByMonth()
      this.getServiceArea()
    },
    // 人才服务总量
    getAllService() {
      $api.getAllService().then(res => {
        this.serviceTotal = res.data
      })
    },
    // 人才服务业务情况
    getServiceBusiness() {
      $api.getServiceBusiness().then(res => {
        this.serviceBus = res.data
      })
    },
    // 服务部门排名
    getServiceDepartment() {
      $api.getServiceDepartment().then(res => {
        if (res.data) {
          this.serviceRank = res.data.slice(0, 10)
        }
      })
    },
    // 人才服务需求情况
    getServiceDemand() {
      $api.getServiceDemand().then(res => {
        if (res.data) {
          this.serviceDemand = res.data
          this.serviceDemandTotal = res.data.reduce((p, c) => p + c.talentCount, 0)
        }
      })
    },
    // 人才情况
    getServiceByMonth() {
      $api.getServiceByMonth().then(res => {
        this.post = res.data
      })
    },
    // 区县服务情况
    getServiceArea() {
      $api.getServiceArea().then(res => {
        this.serviceByArea = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../assets/talent/bg2.jpg);
  background-size: 100% 100%;

  .header {
    height: 65px;
    line-height: 60px;
    background-image: url(../assets/talent/header_bg.png);
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;

    .title {
      font-family: PingFang-SC-Bold;
      font-size: 24px;
      color: #fefeff;
      text-align: center;
    }
  }

  .content {
    height: calc(100% - 65px);
    padding: 15px 30px;
    display: flex;
    overflow: hidden;

    .content-l {
      width: 500px;
      margin-top: 20px;

      .content-lt {
        height: 325px;

        .service-total {
          margin-left: -20px;
          margin-right: 20px;

          &>li {
            padding: 0 50px 10px;
            height: 125px;
            background-image: url(../assets/talent/calc_bg.png);
            background-repeat: no-repeat;
            display: flex;
            align-items: center;

            .icon {
              width: 80px;
              height: 72px;
              margin-right: 40px;
            }

            .info {
              .label {
                font-family: SourceHanSansSC-Medium;
                font-size: 16px;
                color: #ffffff;
                background: linear-gradient(to bottom, #ffffff 0, #99ccff 70%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .val {
                font-family: SourceHanSansSC-Normal;
                font-size: 14px;
                color: #b5ddff;

                .num {
                  font-family: Impact;
                  font-size: 28px;
                  color: #ffffff;
                  margin-right: 4px;
                  background: linear-gradient(to bottom, #fff04a 0, #ffab28 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }
            }

            &:last-child {
              .info {
                .val {
                  .num {
                    background: linear-gradient(to bottom, #4ae7ff 0, #2879ff 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }
            }
          }
        }
      }

      .content-lc {
        height: 350px;
      }
    }

    .content-c {
      flex: 1;
      flex-shrink: 0;
    }

    .content-r {
      width: 500px;
      margin-top: 20px;

      .content-rt {
        height: 325px;

        .service-total {
          margin-bottom: 10px;

          .label {
            font-family: SourceHanSansSC-Medium;
            font-size: 16px;
            color: #ffffff;
            background: linear-gradient(to bottom, #ffffff 0, #99ccff 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .val {
            margin-top: 2px;

            .num {
              font-family: Impact;
              font-size: 28px;
              color: #ffffff;
              background: linear-gradient(to top, #2879ff 0, #4ae7ff 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .unit {
              margin-left: 4px;
              font-family: SourceHanSansSC-Normal;
              font-size: 14px;
              color: #b5ddff;
            }
          }
        }
      }

      .content-rc {
        height: 350px;
      }
    }
  }
}
</style>