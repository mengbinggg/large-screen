<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-02 17:27:50
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentIdentification/talentTypeBar.vue
 * @Description: 人才类别情况
-->
<template>
  <div class="chart" id="talentType"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      myChart: ''
    }
  },
  computed: {
    handledData() {
      return this.data.map(item => {
        return {
          name: item.talentCategories.slice(0, 2),
          value: item.talentCount
        }
      })
    }
  },
  watch: {
    handledData() {
      var option = this.getOption();
      this.myChart.setOption(option)
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById('talentType'))

      var option = this.getOption();
      this.myChart.setOption(option)
    },
    getOption() {
      let dataY = this.handledData.map(item => item.value)
      let dataX = this.handledData.map(item => item.name)

      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          containLabel: true,
          top: '15%',
          bottom: '5%',
          left: '2%',
          right: '0'
        },
        legend: {
          right: 8,
          top: 10,
          textStyle: {
            fontFamily: "AdobeHeitiStd-Regular",
            fontSize: 14,
            color: "#fff"
          },
          itemWidth: 8,
          itemHeight: 8,
          borderRadius: 2
        },
        xAxis: [
          {
            type: 'category',
            data: dataX,
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: '#00b2ff',
              },
            },
            axisLabel: {
              margin: 14,
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 14,
                color: "#33b6ff"
              },
            },
          },
        ],
        yAxis: [
          {
            name: '单位：人',
            nameGap: 22,
            nameTextStyle: {
              fontFamily: "SourceHanSansSC-Regular",
              fontSize: 14,
              color: "#f8f8f8"
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // formatter: function (value) {
              //   if (value == 0) return 0

              //   return (value / 10000).toFixed(1)
              // },
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 14,
                color: "#f8f8f8"
              },
            },
            axisLine: {
              lineStyle: {
                width: 2,
                color: '#00b2ff',
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            name: '人数',
            data: dataY,
            barWidth: '12',
            itemStyle: {
              barBorderRadius: 2,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#36ffe8',
                  },
                  {
                    offset: 1,
                    color: '#007dfc',
                  },
                ],
                false
              )
            },
            label: {
              show: true,
              formatter: '{c}',
              position: 'top',
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 12,
                color: "#f8f8f8"
              },
            },
          },
        ],
      }
    }
  }
}
</script>

<style lang="less" scoped>
.chart {
  width: 433px;
  height: 326px;
}
</style>