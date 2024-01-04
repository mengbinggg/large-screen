<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-03 11:23:55
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentIdentification/areaMap.vue
 * @Description: 地域分布
-->
<template>
  <div class="chart" id="areaMap"></div>
</template>

<script>
import echarts from 'echarts'
import chengduJSON from '../../json/chengdu.json'
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
          value: item.talentCount,
          grades: item.talentGrades
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
      this.myChart = echarts.init(document.getElementById('areaMap'))
      echarts.registerMap('chengdu', chengduJSON)

      var option = this.getOption();
      this.myChart.setOption(option)
    },
    getOption() {
      return {
        tooltip: {
          backgroundColor: 'rgba(0, 6, 41, .7)',
          borderWidth: 2,
          borderColor: '#0029A9',
          extraCssText: 'box-shadow: inset 0px 0px 30px #0019A1;',
          padding: [10, 20],
          formatter: (params) => {
            let item = this.handledData.filter(i => i.name == params.name)[0]

            let gradesHtml = item.grades.reduce((prev, curr) => {
              return prev + `<li style="width:50%;font-family: SourceHanSansSC-Regular;font-size: 14px;color: #ffffff;">
                                ${curr.grade}：<span style="color: #65faff;">${curr.gradeNumber}人</span>
                              </li>`
            }, '')

            return `<div style="color: #ffffff;margin-bottom:5px;">
                        <span
                          style="font-family: SourceHanSansCN-Bold;font-size: 16px;background: linear-gradient(to bottom, #ffffff 0, #99ccff 70%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">${params.name}：</span>
                        <span style="font-family: Impact;font-size: 18px;color: #65faff;">${params.value || 0}</span>
                        <span style="font-family: AdobeHeitiStd-Regular;font-size: 14px;margin-left: 8px;">人</span>
                      </div>
                      <ul style="display: flex;flex-wrap: wrap;width: 200px;">${gradesHtml}</ul>`;
          },
          textStyle: {
            fontFamily: "SourceHanSansSC-Regular",
            fontSize: 14,
            color: "#fff",
          }
        },
        geo: [{
          type: 'map',
          map: 'chengdu',
          zlevel: -1,
          roam: false,
          silent: true,
          aspectScale: 1.3,
          layoutCenter: ['50%', '46%'],
          layoutSize: 400,
          itemStyle: {
            normal: {
              borderColor: '#023EBD',
              borderWidth: 5,
            },
          },
        }, {
          type: 'map',
          map: 'chengdu',
          zlevel: -2,
          roam: false,
          silent: true,
          aspectScale: 1.3,
          layoutCenter: ['50%', '48%'],
          layoutSize: 400,
          itemStyle: {
            normal: {
              borderColor: '#0822A6',
              borderWidth: 5,
            },
          },
        }, {
          type: 'map',
          map: 'chengdu',
          zlevel: -3,
          roam: false,
          silent: true,
          aspectScale: 1.3,
          layoutCenter: ['50%', '50%'],
          layoutSize: 400,
          itemStyle: {
            normal: {
              borderColor: '#00137C',
              borderWidth: 5,
              shadowColor: '#0062CA',
              shadowOffsetY: 5,
              shadowBlur: 15,
            },
          },
        },],
        series: [
          {
            name: '成都地图',
            type: 'map',
            map: 'chengdu',
            aspectScale: 1.3,
            layoutCenter: ['50%', '45%'],
            layoutSize: 400,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontFamily: "SourceHanSansSC-Regular",
                  color: '#fff',
                  fontSize: 12,
                },
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontFamily: "SourceHanSansSC-Regular",
                  color: '#fff',
                  fontSize: 12,
                },
              }
            },
            itemStyle: {
              normal: { //未选中状态
                borderColor: '#123EBC',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: '#3398F0' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#3375E7' // 100% 处的颜色
                  }],
                },
                shadowColor: '#5BF0F6',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 5
              },
              emphasis: { // 移动样式
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: '#FED60F' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#FE900A' // 100% 处的颜色
                  }],
                }
              }
            },
            data: this.handledData
          },
        ]
      }
    }
  }
}
</script>
<style>
.tipbox {
  background-color: red;
}
</style>
<style lang="less" scoped>
.chart {
  width: 450px;
  height: 260px;
}
</style>