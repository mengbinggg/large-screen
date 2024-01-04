<!--
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-12-26 14:18:51
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-03 11:05:39
 * @FilePath: /yhtalent-face/src/scopes/project/rsrc/base/views/largeScreen/components/talentIdentification/talentRankTable.vue
 * @Description: 人才数量排名
-->
<template>
  <div class="table-box">
    <div class="table-header">
      <table>
        <thead>
          <tr>
            <th>
              <div class="label seq">排名</div>
            </th>
            <th>
              <div class="label">行政区划</div>
            </th>
            <th>
              <div class="label">企业自主认定人员</div>
            </th>
            <th>
              <div class="label">在蓉在职工作人员</div>
            </th>
            <th>
              <div class="label">在蓉离退休人员</div>
            </th>
            <th>
              <div class="label">在蓉灵活就业人员</div>
            </th>
            <th>
              <div class="label">在蓉自主创业人员</div>
            </th>
            <th>
              <div class="label">军人或者涉军人员</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-body">
      <table>
        <tbody>
          <tr v-for="(item, index) in handledData" :key="index">
            <td class="seq">{{ index + 1 }}</td>
            <td class="area">{{ item.area }}</td>
            <td>{{ item['企业自主认定人员'] }}</td>
            <td>{{ item['在蓉在职工作人员'] }}</td>
            <td>{{ item['在蓉离退休人员'] }}</td>
            <td>{{ item['在蓉灵活就业人员'] }}</td>
            <td>{{ item['在蓉自主创业人员'] }}</td>
            <td>{{ item['军人或者涉军人员'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  computed: {
    handledData() {
      return this.data.map(item => {
        let grades = {}
        item.talentGrades.forEach(item => {
          grades[item.grade] = item.gradeNumber
        })

        return {
          area: item.talentCategories,
          ...grades
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.table-box {
  margin: 10px 25px 20px;

  .table-header {
    margin-right: 16px;

    table {
      width: 100%;

      thead {
        height: 54px;
        background-image: linear-gradient(0deg,
            #030B35 0%,
            #1A32AD 100%);
        border-bottom: 1px solid #3b97ff;

        .label {
          margin: 0 auto;
          width: 64px;
          font-family: SourceHanSansSC-Regular;
          font-size: 14px;
          color: #b5ddff;
          text-align: center;

          &.seq {
            width: 32px;
          }
        }
      }
    }
  }

  .table-body {
    padding-right: 6px;
    height: 325px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #163872;
      border-radius: 5px;
    }

    table {
      width: 100%;
      table-layout: fixed;

      tbody {
        tr {
          height: 48px;
          background-color: #041648;
          font-family: SourceHanSansSC-Regular;
          font-size: 14px;
          color: #b5ddff;
          text-align: center;

          td {
            width: 64px;

            &.seq {
              font-family: Impact;
              font-size: 16px;
              color: #b5ddff;
              width: 32px;
            }

            &.area {
              color: #ffffff;
            }
          }

          &:nth-child(odd) {
            background-color: #061F5E;
          }

          &:nth-child(1) {
            .seq {
              color: #fee82c;
            }
          }

          &:nth-child(2) {
            .seq {
              color: #1ee175;
            }
          }

          &:nth-child(3) {
            .seq {
              color: #2de4ff;
            }
          }
        }
      }
    }
  }
}
</style>