<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-02 15:45:54
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentService/serviceBar.vue
 * @Description: 人才服务需求情况
-->
<template>
  <div class="chart" id="serviceDemand"></div>
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
      this.myChart = echarts.init(document.getElementById('serviceDemand'))

      var option = this.getOption();
      this.myChart.setOption(option)
    },
    getOption() {
      let valueArr = this.handledData.map(item => item.value)
      let nameArr = this.handledData.map(item => item.name)
      let total = valueArr.reduce((p, c) => p + c, 0)

      let totalArr = new Array(valueArr.length).fill(total)
      let borderColorArr = ['#3d270e', '#354e18', '#003887']
      let colorArr = [
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#ffe930' },
          { offset: .62, color: '#f3c418' },
          { offset: 1, color: '#e79e00' },
        ]),
        new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#94df33' },
          { offset: .62, color: '#71ab1d' },
          { offset: 1, color: '#4e7707' },
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
          left: 60,
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
                return ((value / total) * 100).toFixed() + '%';
              },
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 14,
                color: "#48abff"
              }
            },
            data: valueArr
          },
        ],
        series: [
          {
            name: '服务数量',
            type: 'bar',
            zlevel: 1,
            silent: false,
            label: {
              show: true,
              position: [-60, -2],
              textStyle: {
                fontFamily: "SourceHanSansSC-Regular",
                fontSize: 14,
                color: '#fff'
              },
              formatter: a => {
                return a.name;
              },
            },
            itemStyle: {
              barBorderRadius: 5,
              color: function (item) {
                let index = item.dataIndex
                return index > 2 ? colorArr[2] : colorArr[index]
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
                  barBorderColor: i > 2 ? borderColorArr[2] : borderColorArr[i],
                  barBorderWidth: 1,
                  barBorderRadius: 7
                }
              }
            })
          }
        ],
      };
    }
  }
}
</script>

<style lang="less" scoped>
.chart {
  width: 450px;
  height: 180px;
}
</style>