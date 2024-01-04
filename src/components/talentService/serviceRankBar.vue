<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-02 15:33:40
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentService/serviceRankBar.vue
 * @Description: 服务部门TOP10
-->
<template>
  <div class="chart" id="serviceRank"></div>
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
          name: item.talentCategories,
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
      this.myChart = echarts.init(document.getElementById('serviceRank'))

      var option = this.getOption();
      this.myChart.setOption(option)
    },
    getOption() {
      let valueArr = this.handledData.map(item => item.value)
      let nameArr = this.handledData.map(item => item.name)
      let total = valueArr.reduce((p, c) => p + c, 0)

      let totalArr = new Array(valueArr.length).fill(total)
      let borderColorArr = ['#3d270e', '#003887']
      let colorArr = [
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#ffe930' },
          { offset: .62, color: '#f3c418' },
          { offset: 1, color: '#e79e00' },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#3096ff' },
          { offset: .62, color: '#1976eb' },
          { offset: 1, color: '#0156d6' },
        ])
      ];

      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value
          }
        },
        grid: {
          containLabel: true,
          top: '0',
          bottom: '0',
          left: 100,
          right: '0'
        },
        xAxis: {
          show: false,
          type: 'value',
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: nameArr,
          },
          {
            type: 'category',
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              formatter: value => {
                return '{a|' + value + '}' + ' 次'
              },
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 14,
                color: "#ffffff",
                rich: {
                  a: {
                    fontFamily: "SourceHanSansSC-Regular",
                    fontSize: 14,
                    color: '#2de4ff'
                  }
                }
              }
            },
            data: valueArr
          },
        ],
        series: [
          {
            name: '服务次数',
            type: 'bar',
            zlevel: 1,
            label: {
              show: true,
              position: [-100, 0],
              offset: [0, -2],
              formatter: params => {
                let rank = params.dataIndex + 1
                let label = params.name.substr(0, 5)
                if (rank > 3) {
                  return '{a|' + rank + '}' + '{b|' + label + '}'
                }
                return '{a' + rank + '|' + rank + '}' + '{b|' + label + '}'
              },
              rich: {
                a: {
                  width: 13,
                  padding: [0, 8, 0, 0],
                  align: 'center',
                  fontFamily: "Impact",
                  fontSize: 14,
                  color: '#b5ddff'
                },
                a1: {
                  width: 13,
                  padding: [0, 8, 0, 0],
                  align: 'center',
                  fontFamily: "Impact",
                  fontSize: 14,
                  color: '#fee82c'
                },
                a2: {
                  width: 13,
                  padding: [0, 8, 0, 0],
                  align: 'center',
                  fontFamily: "Impact",
                  fontSize: 14,
                  color: '#1ee175'
                },
                a3: {
                  width: 13,
                  padding: [0, 8, 0, 0],
                  align: 'center',
                  fontFamily: "Impact",
                  fontSize: 14,
                  color: '#2de4ff'
                },
                b: {
                  align: 'right',
                  fontFamily: "SourceHanSansSC-Regular",
                  fontSize: 14,
                  color: '#fff',
                }
              }
            },
            itemStyle: {
              barBorderRadius: 5,
              color: function (item) {
                let index = item.dataIndex
                return index > 2 ? colorArr[1] : colorArr[0]
              }
            },
            barWidth: 10,
            data: valueArr,
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 14,
            barGap: '-120%',
            data: totalArr.map((item, i) => {
              return {
                value: item,
                itemStyle: {
                  color: 'transparent',
                  barBorderColor: i > 3 ? borderColorArr[1] : borderColorArr[0],
                  barBorderWidth: 1,
                  barBorderRadius: 7
                }
              }
            })
          }
        ],
      }
    }
  }
}
</script>

<style lang="less" scoped>
.chart {
  width: 450px;
  height: 230px;
}
</style>