/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2023-02-21 16:06:50
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2024-01-04 10:17:39
 * @Descripttion:
 */

export default {
  /**
   * 人才类别情况
   */
  getStatistics() {
    let data = [
      {
        "talentCategories": "A类人才",
        "talentCount": 114
      },
      {
        "talentCategories": "B类人才",
        "talentCount": 61
      },
      {
        "talentCategories": "C类人才",
        "talentCount": 56
      },
      {
        "talentCategories": "D类人才",
        "talentCount": 233
      },
      {
        "talentCategories": "E类人才",
        "talentCount": 1393
      },
      {
        "talentCategories": "F类人才",
        "talentCount": 501
      },
      {
        "talentCategories": "总人数",
        "talentCount": 2258
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 性别分布
   */
  getSexCounts() {
    let data = [
      {
        "talentCategories": "男性人数",
        "talentCount": 1292
      },
      {
        "talentCategories": "女性人数",
        "talentCount": 873
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 年龄分布
   */
  getAgeCounts() {
    let data = [
      {
        "talentCategories": "30岁以下",
        "talentCount": 1075
      },
      {
        "talentCategories": "30~35岁",
        "talentCount": 674
      },
      {
        "talentCategories": "36~40岁",
        "talentCount": 479
      },
      {
        "talentCategories": "41~45岁",
        "talentCount": 734
      },
      {
        "talentCategories": "46~50岁",
        "talentCount": 433
      },
      {
        "talentCategories": "50岁以上",
        "talentCount": 329
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 人才数量排名
   */
  getTypeCounts() {
    let data = [
      {
        "talentCategories": "金牛区",
        "talentCount": 6,
        "talentGrades": [
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 2
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 2
          },
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 2
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "锦江区",
        "talentCount": 5,
        "talentGrades": [
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 2
          },
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 2
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 1
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "青羊区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "青白江区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "都江堰市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "崇州市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "武侯区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "温江区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "金堂县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "新津区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "郫都区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "龙泉驿区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "新都区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "成华区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "蒲江县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "成都市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "彭州市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "东部新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "高新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "天府新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "大邑县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "简阳市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "双流区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "邛崃市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "在蓉自主创业人员",
            "gradeNumber": 0
          },
          {
            "grade": "军人或者涉军人员",
            "gradeNumber": 0
          },
          {
            "grade": "企业自主认定人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉灵活就业人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉在职工作人员",
            "gradeNumber": 0
          },
          {
            "grade": "在蓉离退休人员",
            "gradeNumber": 0
          }
        ]
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 学历分布
   */
  getEducationCounts() {
    let data = [
      {
        "talentCategories": "博士研究生",
        "talentCount": 20
      },
      {
        "talentCategories": "硕士研究生",
        "talentCount": 36
      },
      {
        "talentCategories": "本科",
        "talentCount": 42
      },
      {
        "talentCategories": "大专及以下",
        "talentCount": 10
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
  /**
   * 地域分布
   */
  getAreaCounts() {
    let data = [
      {
        "talentCategories": "金牛区",
        "talentCount": 6,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 6
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "锦江区",
        "talentCount": 5,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 1
          },
          {
            "grade": "B类人才",
            "gradeNumber": 2
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 1
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 1
          }
        ]
      },
      {
        "talentCategories": "青羊区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "青白江区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "都江堰市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "崇州市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "武侯区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "温江区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "金堂县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "新津区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "郫都区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "龙泉驿区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "新都区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "成华区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "蒲江县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "成都市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "彭州市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "东部新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "高新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "天府新区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "大邑县",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "简阳市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "双流区",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      },
      {
        "talentCategories": "邛崃市",
        "talentCount": 0,
        "talentGrades": [
          {
            "grade": "A类人才",
            "gradeNumber": 0
          },
          {
            "grade": "B类人才",
            "gradeNumber": 0
          },
          {
            "grade": "C类人才",
            "gradeNumber": 0
          },
          {
            "grade": "D类人才",
            "gradeNumber": 0
          },
          {
            "grade": "E类人才",
            "gradeNumber": 0
          },
          {
            "grade": "F类人才",
            "gradeNumber": 0
          }
        ]
      }
    ]

    return new Promise((resolve) => {
      resolve({
        data
      })
    })
  },
}
