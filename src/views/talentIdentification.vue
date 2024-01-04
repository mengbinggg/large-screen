<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-25 15:30:43
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-04 09:45:26
 * @FilePath: /large-screen/src/views/talentIdentification.vue
 * @Description: 人才认定
-->
<template>
  <div class="wrapper">
    <div class="header" @click="fullScreen">
      <div class="title-box">
        <img class="logo" src="../assets/talent/logo.png" alt="logo">
        <div class="title">智慧人社--人才认定主题</div>
      </div>
      <div class="header-r">{{ nowDate }}</div>
    </div>
    <div class="content">
      <div class="content-l">
        <div class="content-lt">
          <div class="panel">
            <div class="panel-title">人才类别情况</div>
            <div class="panel-body">
              <div class="type-box">
                <TalentTypeBar :data="talentType"></TalentTypeBar>
              </div>
            </div>
          </div>
        </div>
        <div class="content-lb">
          <div class="panel">
            <div class="panel-title">年龄分布</div>
            <div class="panel-body">
              <ul class="sex-box">
                <li v-for="item in sexNum" :key="item.talentCategories">
                  <img class="icon" v-if="item.talentCategories == '男性人数'" src="../assets/talent/icon_male.png"
                    alt="icon">
                  <img class="icon" v-else src="../assets/talent/icon_female.png" alt="icon">

                  <div class="info">
                    <div class="label">{{ item.talentCategories }}：</div>
                    <div class="val">
                      <CountTo class="num" :end-val="item.talentCount"></CountTo>人
                    </div>
                  </div>
                </li>
              </ul>
              <div class="age-box">
                <AgePie :data="ageNum"></AgePie>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-c">
        <div class="content-ct">
          <div class="talent-total">
            <div class="label">人才总人数</div>
            <div class="val">
              <CountTo class="num" :end-val="talentTotal"></CountTo>
              <span class="unit">人</span>
            </div>
          </div>
          <ul class="talent-classify">
            <li v-for="item in talentType" :key="item.talentCategories">
              <div class="num">
                <CountTo :end-val="item.talentCount"></CountTo>人
              </div>
              <img class="img" :src="require('../assets/talent/letter_' + item.talentCategories.slice(0, 1) + '.png')"
                alt="icon">
            </li>
          </ul>
        </div>
        <div class="content-cb">
          <div class="talent-num-rank">
            <div class="title">人才数量排名</div>
            <TalentRankTable :data="talentNum"></TalentRankTable>
          </div>
        </div>
      </div>
      <div class="content-r">
        <div class="content-rt">
          <div class="panel">
            <div class="panel-title">学历分布</div>
            <div class="panel-body">
              <div class="education-box">
                <EducationBar :data="educationNum"></EducationBar>
              </div>
            </div>
          </div>
        </div>
        <div class="content-rb">
          <div class="panel">
            <div class="panel-title">地域分布</div>
            <div class="panel-body">
              <div class="area-rank">
                <div class="label">地域分布人才数前三位：</div>
                <ul class="rank-list">
                  <li v-for="(item, index) in areaNum" :key="item.talentCategories">
                    <template v-if="index < 3">
                      <span class="rank">NO.{{ index + 1 }}</span>
                      <span class="name">{{ item.talentCategories }}：</span>
                      <span class="num">
                        <CountTo :end-val="item.talentCount"></CountTo>人
                      </span>
                    </template>
                  </li>
                </ul>
              </div>

              <AreaMap :data="areaNum"></AreaMap>
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

import TalentRankTable from '../components/talentIdentification/talentRankTable.vue'
import TalentTypeBar from '../components/talentIdentification/talentTypeBar.vue'
import AgePie from '../components/talentIdentification/agePie.vue'
import EducationBar from '../components/talentIdentification/educationBar.vue'
import AreaMap from '../components/talentIdentification/areaMap.vue'

import $api from '../api/talentIdentificationApi'
export default {
  mixins: [mixin],
  components: { CountTo, TalentRankTable, TalentTypeBar, AgePie, EducationBar, AreaMap },
  data() {
    return {
      nowDate: '',
      talentTotal: 0,
      talentType: [],
      sexNum: [],
      ageNum: [],
      educationNum: [],
      areaNum: [],
      talentNum: []
    }
  },
  mounted() {
    this.getNowDate()
    this.getData()
  },
  methods: {
    getNowDate() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let time = now.toLocaleTimeString()
      let week = now.getDay()
      let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

      this.nowDate = year + '年' + month + '月' + day + '日 ' + time + ' ' + weekday[week]
    },
    getData() {
      this.getStatistics()
      this.getSexCounts()
      this.getAgeCounts()
      this.getTypeCounts()
      this.getEducationCounts()
      this.getAreaCounts()
    },
    // 人才类别情况
    getStatistics() {
      $api.getStatistics().then(res => {
        if (res.data) {
          let data = res.data.filter(item => item.talentCategories != '总人数')

          this.talentType = data
          this.talentTotal = data.reduce((p, c) => p + c.talentCount, 0)
        }
      })
    },
    // 性别分布
    getSexCounts() {
      $api.getSexCounts().then(res => {
        this.sexNum = res.data
      })
    },
    // 年龄分布
    getAgeCounts() {
      $api.getAgeCounts().then(res => {
        this.ageNum = res.data
      })
    },
    // 人才数量排名
    getTypeCounts() {
      $api.getTypeCounts().then(res => {
        this.talentNum = res.data
      })
    },
    // 学历分布
    getEducationCounts() {
      $api.getEducationCounts().then(res => {
        this.educationNum = res.data
      })
    },
    // 地域分布
    getAreaCounts() {
      $api.getAreaCounts().then(res => {
        this.areaNum = res.data
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
  background-image: url(../assets/talent/bg1.jpg);
  background-size: 100% 100%;

  .header {
    height: 65px;
    background-image: url(../assets/talent/header_bg.png);
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;

    .title-box {
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      .logo {
        width: 47px;
        height: 47px;
        margin-right: 12px;
      }

      .title {
        font-family: PingFang-SC-Bold;
        font-size: 24px;
        color: #fefeff;
      }
    }

    .header-r {
      position: absolute;
      bottom: 0;
      right: 30px;
      font-size: 14px;
      color: #c2e3ff;
    }
  }

  .content {
    padding: 30px 30px 0;
    display: flex;
    overflow: hidden;

    .content-l {
      width: 500px;

      .content-lt {
        height: 480px;

        .type-box {
          margin: 30px 0 40px;
        }
      }

      .content-lb {
        .sex-box {
          margin: 30px 15px 0 0;
          padding: 0;
          display: flex;
          justify-content: space-between;

          &>li {
            display: flex;

            .icon {
              width: 79px;
              height: 67px;
              margin-right: 21px;
            }

            .info {
              display: flex;
              flex-direction: column;

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
                  margin-right: 8px;
                  font-family: Impact;
                  font-size: 28px;
                  color: #ffffff;
                  background: linear-gradient(to bottom, #4ae7ff 0, #2879ff 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              }
            }

            &:last-child {
              .info {
                .val {
                  .num {
                    background: linear-gradient(to bottom, #fff04a 0, #ffab28 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }
            }
          }
        }

        .age-box {
          margin-top: 20px;
        }
      }
    }

    .content-c {
      flex: 1;

      .content-ct {
        height: 230px;
        background-image: url(../assets/talent/banner_bg.png);
        background-size: 100% 94px;
        background-position: left bottom;
        background-repeat: no-repeat;

        .talent-total {
          text-align: center;

          .label {
            font-family: SourceHanSansSC-Medium;
            font-size: 20px;
            color: #ffffff;
            background: linear-gradient(to bottom, #ffffff 0, #99ccff 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .val {
            margin-top: 2px;

            .num {
              font-family: Impact;
              font-size: 36px;
              color: #ffffff;
              background: linear-gradient(to bottom, #ffffff 0, #a5f3ff 45%, #4ae7ff 73%, #2879ff 100%);
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

        .talent-classify {
          margin-top: 15px;
          padding: 0px 140px;
          display: flex;
          justify-content: space-between;

          &>li {
            display: flex;
            flex-direction: column;
            align-items: center;

            .num {
              width: 70px;
              height: 34px;
              line-height: 34px;
              text-align: center;
              background-image: url(../assets/talent/num_bg.png);
              background-size: 100% 100%;
              font-family: SourceHanSansSC-Medium;
              font-size: 14px;
              color: #ffffff;

            }

            .img {
              margin-top: 13px;
              height: 48px;
            }
          }
        }
      }

      .content-cb {
        margin-top: 24px;

        .talent-num-rank {
          margin: 0 auto;
          width: 728px;
          height: 488px;
          background-image: url(../assets/talent/table_bg.png);
          background-size: 100% 100%;

          .title {
            height: 55px;
            line-height: 55px;
            margin-left: 32px;
            font-family: SourceHanSansSC-Medium;
            font-size: 18px;
            color: #ffffff;
          }
        }
      }
    }

    .content-r {
      width: 500px;

      .content-rt {
        height: 480px;

        .education-box {
          margin: 30px 0 40px;
        }
      }

      .content-rb {
        .area-rank {
          margin: 20px 0 50px;

          .label {
            font-family: SourceHanSansSC-Medium;
            font-size: 16px;
            color: #ffffff;
            background: linear-gradient(to bottom, #ffffff 0, #99ccff 70%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .rank-list {
            display: flex;
            align-items: center;
            margin-top: 15px;

            &>li {
              margin-right: 20px;
              display: flex;
              align-items: center;
              flex-shrink: 0;

              &:nth-child(1) {
                .rank {
                  color: #fee82c;
                }
              }

              &:nth-child(2) {
                .rank {
                  color: #1ee175;
                }
              }

              .rank {
                font-family: Impact;
                font-size: 14px;
                color: #65faff;
                margin-right: 5px;
              }

              .name {
                font-family: SourceHanSansSC-Regular;
                font-size: 14px;
                color: #ffffff;
              }

              .num {
                font-family: SourceHanSansSC-Regular;
                font-size: 14px;
                color: #65faff;
              }
            }
          }
        }
      }
    }
  }
}
</style>