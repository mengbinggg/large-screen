<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-28 11:08:36
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-03 17:26:01
 * @FilePath: /large-screen/src/components/talentService/businessGraph.vue
 * @Description: 
-->
<template>
  <div class="page-wrapper">
    <div class="business-box" :style="{ transform: 'rotate(' + angle + 'deg)' }">
      <div class="business" id="business" :style="{ transform: 'rotate(' + -angle + 'deg)' }"></div>
    </div>

    <!-- 表格 -->
    <div class="table-box" v-show="showTable">
      <div class="table-box-header">
        <div class="title">人才安居</div>
        <div class="close-btn" @click="handleCloseTable"></div>
      </div>
      <div class="table-box-content">
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>办理业务</th>
              <th>姓名</th>
              <th>办理部门</th>
              <th>办理人</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td>{{ index + 1 }}</td>
              <td class="area">{{ item.blyw }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.blr }}</td>
              <td>{{ item.blbm }}</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="page prev">
            <img class="icon" src="../../assets/talent/icon_arrow.png" alt="icon">
          </div>
          <div class="page">1</div>
          <div class="page">2</div>
          <div class="page">3</div>
          <div class="page">4</div>
          <div class="page next">
            <img class="icon" src="../../assets/talent/icon_arrow.png" alt="icon">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
let timer = null
export default {
  data() {
    return {
      angle: 45,
      showTable: false,
      data: [{
        icon: 'zwbl',
        name: '政务办理'
      }, {
        icon: 'jrdkfc',
        name: '金融贷款扶持'
      }, {
        icon: 'wsyl',
        name: '卫生医疗'
      }, {
        icon: 'zvrx',
        name: '子女入学'
      }, {
        icon: 'crjhtjlbl',
        name: '出入境和停居留便利'
      }, {
        icon: 'rclh',
        name: '人才落户'
      }, {
        icon: 'rcaj',
        name: '人才安居'
      }],
      tableData: [{
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }, {
        blyw: '入住人才公寓',
        name: '李玉湖',
        blbm: '成都住建局',
        blr: '张有一'
      }],
    }
  },
  created() {
    timer = setInterval(() => {
      this.angle += 5
    }, 100)
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (timer) clearInterval(timer)
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById('business'), '', { renderer: 'svg' })
      let data = this.data.map(item => {
        return {
          name: item.name,
          symbol: 'image://' + require('../../assets/talent/icon_' + item.icon + '.png')
        }
      })

      var option = {
        series: [
          {
            type: 'graph',
            layout: 'circular',
            with: '72%',
            height: '72%',
            symbolSize: 122,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: params => {
                    let name = params.name
                    if (name.length > 6) {
                      return name.substr(0, 4) + '\n' + name.substr(4)
                    }
                    return name
                  },
                  position: 'bottom',
                  distance: 10,
                  fontFamily: "SourceHanSansSC-Bold",
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 26,
                  color: '#72d7fc'
                }
              },
              emphasis: {
                label: {
                  show: true,
                  formatter: params => {
                    let name = params.name
                    if (name.length > 6) {
                      return name.substr(0, 4) + '\n' + name.substr(4)
                    }
                    return name
                  },
                  position: 'bottom',
                  distance: 10,
                  fontFamily: "SourceHanSansSC-Bold",
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: 26,
                  color: '#68ebf7'
                }
              },
            },
            data,
          }
        ],
      };

      // 添加点击事件
      this.myChart.on("click", (param) => {
        console.log(param)

        this.showTable = true
      })

      this.myChart.setOption(option)
    },
    handleCloseTable() {
      this.showTable = false
    },
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-select-selection {
  background-color: #020d44;
  box-shadow: inset 0px 0px 30px #0019A1;
  border: 1px solid #0019A1;
  width: 133px;
  font-family: SourceHanSansCN-Medium;
  font-size: 14px;
  color: #c2e3ff;
}

/deep/ .ant-select-dropdown {
  top: 36px !important;
  left: unset !important;
  right: 0 !important;
}

/deep/ .ant-select-arrow {
  color: #1fedff;
}

.page-wrapper {
  position: relative;

  .business-box {
    width: 876px;
    height: 876px;
    background-image: url(../../assets/talent/circle_bg.png);
    background-size: 100% 100%;

    .business {
      width: 100%;
      height: 100%;
    }
  }

  .table-box {
    position: absolute;
    top: -5px;
    left: -518px;
    width: 630px;
    height: 1000px;
    background-image: url(../../assets/talent/table_bg1.png);
    background-size: 100% 100%;

    .table-box-header {
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title {
        font-family: SourceHanSansSC-Medium;
        font-size: 22px;
        color: #ffffff;
        margin-left: 78px;
        background: linear-gradient(to top, #a6e1ff 0, #ffffff 70%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .close-btn {
        width: 28px;
        height: 28px;
        margin-right: 70px;
        cursor: pointer;
      }
    }

    .table-box-content {
      height: calc(100% - 78px);
      padding: 10px 90px 75px 55px;
      display: flex;
      flex-direction: column;
      align-items: center;

      table {
        width: 100%;

        thead {
          height: 36px;
          background-image: linear-gradient(0deg,
              #030B35 0%,
              #1A32AD 100%);
          border-bottom: 1px solid #3b97ff;

          th {
            font-family: SourceHanSansSC-Regular;
            font-size: 14px;
            color: #b5ddff;
            text-align: center;
          }
        }

        tbody {
          tr {
            height: 51px;
            background-color: #041648;
            font-family: SourceHanSansSC-Regular;
            font-size: 14px;
            color: #b5ddff;
            text-align: center;

            &:nth-child(odd) {
              background-color: #061F5E;
            }

            .area {
              color: #ffffff;
            }
          }
        }
      }

      .pagination {
        position: absolute;
        left: 50%;
        bottom: 70px;
        transform: translateX(-50%);
        display: flex;
        align-items: center;

        .page {
          width: 29px;
          height: 28px;
          background-color: #011451;
          border-radius: 2px;
          border: solid 1px #0f4471;
          font-family: SourceHanSansSC-Regular;
          font-size: 14px;
          color: #b5ddff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          &.prev {
            .icon {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
}
</style>