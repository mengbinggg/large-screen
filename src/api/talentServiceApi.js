/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-02-21 16:06:50
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-04 10:16:39
 * @Descripttion:
 */
export default {
  /**
   * 人才服务总量
   */
  getAllService() {
    let data = [
      {
        "talentCategories": "申报量",
        "talentCount": 160
      },
      {
        "talentCategories": "办结量",
        "talentCount": 34
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 人才服务业务情况
   */
  getServiceBusiness() {
    let data = [
      {
        "talentCategories": "政务办理",
        "talentCount": 15
      },
      {
        "talentCategories": "人才落户",
        "talentCount": 12
      },
      {
        "talentCategories": "出入境和停居留便利",
        "talentCount": 9
      },
      {
        "talentCategories": "人才安居",
        "talentCount": 8
      },
      {
        "talentCategories": "子女入学",
        "talentCount": 17
      },
      {
        "talentCategories": "卫生医疗",
        "talentCount": 19
      },
      {
        "talentCategories": "金融贷款扶持",
        "talentCount": 12
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 服务部门排名
   */
  getServiceDepartment() {
    let data = [
      {
        "talentCategories": "组织部门",
        "talentCount": 188
      },
      {
        "talentCategories": "人社部门",
        "talentCount": 100
      },
      {
        "talentCategories": "教育部门",
        "talentCount": 98
      },
      {
        "talentCategories": "宣传部门",
        "talentCount": 89
      },
      {
        "talentCategories": "科技部门",
        "talentCount": 88
      },
      {
        "talentCategories": "体育局",
        "talentCount": 80
      },
      {
        "talentCategories": "文联",
        "talentCount": 76
      },
      {
        "talentCategories": "科协",
        "talentCount": 65
      },
      {
        "talentCategories": "发改部门",
        "talentCount": 44
      },
      {
        "talentCategories": "金融局",
        "talentCount": 43
      },
      {
        "talentCategories": "工会",
        "talentCount": 31
      },
      {
        "talentCategories": "投促局",
        "talentCount": 5
      },
      {
        "talentCategories": "市场监管局",
        "talentCount": 3
      },
      {
        "talentCategories": "民政局",
        "talentCount": 2
      },
      {
        "talentCategories": "文广旅局",
        "talentCount": 2
      },
      {
        "talentCategories": "税务局",
        "talentCount": 1
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 人才服务需求情况
   */
  getServiceDemand() {
    let data = [
      {
        "talentCategories": "A类人才",
        "talentCount": 63
      },
      {
        "talentCategories": "D类人才",
        "talentCount": 14
      },
      {
        "talentCategories": "E类人才",
        "talentCount": 18
      },
      {
        "talentCategories": "F类人才",
        "talentCount": 27
      },
      {
        "talentCategories": "C类人才",
        "talentCount": 15
      },
      {
        "talentCategories": "B类人才",
        "talentCount": 23
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 人才情况
   */
  getServiceByMonth() {
    let data = [
      {
        "talentCategories": "1月",
        "talentCount": 20
      },
      {
        "talentCategories": "2月",
        "talentCount": 43
      },
      {
        "talentCategories": "3月",
        "talentCount": 32
      },
      {
        "talentCategories": "4月",
        "talentCount": 13
      },
      {
        "talentCategories": "5月",
        "talentCount": 25
      },
      {
        "talentCategories": "6月",
        "talentCount": 43
      },
      {
        "talentCategories": "7月",
        "talentCount": 32
      },
      {
        "talentCategories": "8月",
        "talentCount": 34
      },
      {
        "talentCategories": "9月",
        "talentCount": 23
      },
      {
        "talentCategories": "10月",
        "talentCount": 6
      },
      {
        "talentCategories": "11月",
        "talentCount": 10
      },
      {
        "talentCategories": "12月",
        "talentCount": 18
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 区县服务情况
   */
  getServiceArea() {
    let data = [
      {
        "talentCategories": "金牛区",
        "talentCount": 65
      },
      {
        "talentCategories": "锦江区",
        "talentCount": 60
      },
      {
        "talentCategories": "青羊区",
        "talentCount": 13
      },
      {
        "talentCategories": "郫都区",
        "talentCount": 3
      },
      {
        "talentCategories": "成华区",
        "talentCount": 3
      },
      {
        "talentCategories": "武侯区",
        "talentCount": 2
      },
      {
        "talentCategories": "金堂县",
        "talentCount": 2
      },
      {
        "talentCategories": "崇州市",
        "talentCount": 2
      },
      {
        "talentCategories": "双流区",
        "talentCount": 1
      },
      {
        "talentCategories": "大邑县",
        "talentCount": 1
      },
      {
        "talentCategories": "东部新区",
        "talentCount": 1
      },
      {
        "talentCategories": "成都市",
        "talentCount": 1
      },
      {
        "talentCategories": "彭州市",
        "talentCount": 1
      },
      {
        "talentCategories": "新都区",
        "talentCount": 1
      },
      {
        "talentCategories": "天府新区",
        "talentCount": 1
      },
      {
        "talentCategories": "青白江区",
        "talentCount": 1
      },
      {
        "talentCategories": "温江区",
        "talentCount": 1
      },
      {
        "talentCategories": "新津区",
        "talentCount": 1
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
}
