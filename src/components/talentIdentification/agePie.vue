<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-02 17:17:40
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentIdentification/agePie.vue
 * @Description: 年龄分布
-->
<template>
  <div class="chart" id="age"></div>
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
      this.myChart = echarts.init(document.getElementById('age'))

      var option = this.getOption();
      this.myChart.setOption(option)
    },
    getOption() {
      return {
        color: ["#37d191", "#f2f229", "#db901e", "#cf3d0a", "#6712f5", "#3490ef"],
        grid: {
          containLabel: true,
          top: '20%',
          bottom: 0,
          left: 0,
          right: 0
        },
        tooltip: {
          trigger: 'item',
          formatter: (item) => {
            if (item.seriesName == '人数') {
              return item.seriesName + "<br/>" + item.name + " : " + item.value + '人'
            }
          }
        },
        legend: {
          orient: "vertical",
          top: "center",
          right: '5%',
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 20,
          borderRadius: 2,
          formatter: name => {
            let data = this.handledData
            let total = 0;
            let tarValue;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            let p = ((tarValue / total) * 100).toFixed();
            return '{a|' + name + '}' + p + "%";
          },
          textStyle: {
            fontFamily: "SourceHanSansSC-Regular",
            fontSize: 14,
            color: '#ffffff',
            rich: {
              a: {
                color: '#2de4ff',
                width: 60
              }
            }
          }
        },
        polar: {
          center: ['30%', '50%'],
        },
        angleAxis: {
          interval: 1,
          type: 'category',
          data: [],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#ff0",
              width: 1,
              type: "solid"
            },
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: "#f0f",
            margin: 8,
            fontSize: 16
          },
        },
        radiusAxis: {
          min: 40,
          max: 100,
          interval: 10,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: "#1b3b75",
              width: 2,
              type: "dashed"
            }
          }
        },
        series: [
          {
            type: 'pie',
            center: ['30%', '50%'],
            radius: ["20%", "25%"],
            color: ['rgba(0, 0, 0, .2)'],
            hoverAnimation: false,
            labelLine: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false
              }
            },
            data: [{
              name: '',
              value: 0
            }],
            zlevel: 20
          },
          {
            name: '人数',
            type: 'pie',
            radius: [30, 100],
            center: ['30%', '50%'],
            roseType: 'radius',
            label: {
              show: false,
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              shadowBlur: 40,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            data: this.handledData
          }
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.chart {
  width: 450px;
  height: 300px;
}
</style>