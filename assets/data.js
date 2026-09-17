const UPDATE_TIME = "2026-09-17 10:51";
const THS_HOT = [
  {
    "name": "粮食概念",
    "rise": 2.85,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "PCB概念",
    "rise": -1.22,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.63,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续294天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "CRO概念",
    "rise": 2.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "创新药",
    "rise": 0.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "转基因",
    "rise": 4.04,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "农牧ETF",
    "code": "885877"
  },
  {
    "name": "风电",
    "rise": -0.44,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885641"
  },
  {
    "name": "玉米",
    "rise": 3.74,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "培育钻石",
    "rise": -0.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光纤概念",
    "rise": -0.53,
    "rate": 0,
    "tag": "",
    "hotTag": "连续123天上榜",
    "rankChg": 0,
    "etfName": "科创银华LOF",
    "code": "886084"
  },
  {
    "name": "MLCC概念",
    "rise": -1.72,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续34天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "存储芯片",
    "rise": -0.82,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续247天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "液冷服务器",
    "rise": 0.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光刻胶",
    "rise": -0.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "人形机器人",
    "rise": 0.42,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "玻璃基板",
    "rise": 0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "AI应用",
    "rise": 0.21,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续52天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "算力租赁",
    "rise": 0.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续158天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "农业种植",
    "rise": 1.82,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "猪肉",
    "rise": 0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "超强厄尔尼诺威力大 多重因素牵动“粮食概念股”",
    "desc": "",
    "heat": 315502,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 15.942029
      }
    ]
  },
  {
    "title": "CRO概念持续走强，行业进入复苏阶段",
    "desc": "",
    "heat": 246435,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "实验猴"
    ],
    "stocks": [
      {
        "name": "金石亚药",
        "code": "300434",
        "chg": 19.980788
      }
    ]
  },
  {
    "title": "芒果首部AI纪录片《台湾岛纪》9月17日播出",
    "desc": "",
    "heat": 143176,
    "direction": "AI视频",
    "themes": [
      "AI漫剧",
      "AI视频"
    ],
    "stocks": [
      {
        "name": "龙版传媒",
        "code": "605577",
        "chg": 9.970674
      }
    ]
  },
  {
    "title": "英特尔CEO：CPU需求极其旺盛 英特尔仅能满足50%客户需求",
    "desc": "",
    "heat": 80830,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "沐曦股份-U",
        "code": "688802",
        "chg": 14.435882
      }
    ]
  },
  {
    "title": "高盛大幅上调高速光模块需求预测",
    "desc": "",
    "heat": 76134,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "F5G概念"
    ],
    "stocks": [
      {
        "name": "克来机电",
        "code": "603960",
        "chg": 10.032362
      }
    ]
  },
  {
    "title": "文化和旅游发展“十五五”规划发布",
    "desc": "",
    "heat": 54193,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "大连圣亚",
        "code": "600593",
        "chg": 10.00762
      }
    ]
  },
  {
    "title": "AI 持续“耗电”，集邦咨询预计今年全球数据中心用电需求同比增长 31%",
    "desc": "",
    "heat": 40175,
    "direction": "电力电网",
    "themes": [
      "电力",
      "电网设备",
      "柔性直流输电",
      "特高压",
      "智能电网"
    ],
    "stocks": [
      {
        "name": "经纬股份",
        "code": "301390",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "华为预测：到2035年，全球年度Token消耗量将增长10万倍",
    "desc": "",
    "heat": 34905,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "沐曦股份-U",
        "code": "688802",
        "chg": 14.435882
      }
    ]
  },
  {
    "title": "“豆包手机”努比亚NaviX Ultra上市开售，售价5499元起",
    "desc": "",
    "heat": 16260,
    "direction": "豆包手机",
    "themes": [
      "豆包手机",
      "AI手机"
    ],
    "stocks": [
      {
        "name": "长盈精密",
        "code": "300115",
        "chg": 6.471096
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+7.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+4.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+2.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+2.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+2.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "密集调研",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "烟草",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "自动刹车",
    "change": "+1.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+1.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+1.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "骨科材料",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 3,
    "hot_rank_chg": 31,
    "stock_cnt": 5767,
    "price": "5.75",
    "change": "5.50",
    "market_id": "33",
    "circulate_market_value": "203361020000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.17
      },
      {
        "name": "手机产业链",
        "change_pct": -0.02
      },
      {
        "name": "超高清视频",
        "change_pct": 0.49
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.37
      },
      {
        "name": "电竞",
        "change_pct": 0.5
      },
      {
        "name": "半导体",
        "change_pct": -0.41
      },
      {
        "name": "人工智能",
        "change_pct": 0.38
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.05
      },
      {
        "name": "VR&AR",
        "change_pct": 0.13
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "京津冀",
        "change_pct": 0.16
      },
      {
        "name": "物联网",
        "change_pct": -0.0
      },
      {
        "name": "指纹识别",
        "change_pct": 0.91
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.55
      },
      {
        "name": "白马股",
        "change_pct": -0.26
      },
      {
        "name": "智能制造",
        "change_pct": 0.12
      },
      {
        "name": "小米概念股",
        "change_pct": 0.02
      },
      {
        "name": "国产芯片",
        "change_pct": -0.26
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.09
      },
      {
        "name": "全息概念",
        "change_pct": 0.22
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.16
      },
      {
        "name": "MicroLED",
        "change_pct": 0.17
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.16
      },
      {
        "name": "智能手表",
        "change_pct": 0.59
      },
      {
        "name": "MiniLED",
        "change_pct": 0.38
      },
      {
        "name": "传感器",
        "change_pct": 0.29
      },
      {
        "name": "大硅片",
        "change_pct": -0.33
      },
      {
        "name": "AI PC",
        "change_pct": -0.09
      },
      {
        "name": "华为产业链",
        "change_pct": -0.17
      },
      {
        "name": "回购",
        "change_pct": 0.12
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.13
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.19
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 4,
    "hot_rank_chg": 20,
    "stock_cnt": 5767,
    "price": "3.01",
    "change": "9.85",
    "market_id": "33",
    "circulate_market_value": "28635202000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "哪吒重整关联",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.41
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.2
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.55
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.92
      },
      {
        "name": "减速器",
        "change_pct": 1.37
      },
      {
        "name": "华为汽车",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 6,
    "hot_rank_chg": 54,
    "stock_cnt": 5767,
    "price": "9.52",
    "change": "-0.31",
    "market_id": "33",
    "circulate_market_value": "4580446500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.26
      },
      {
        "name": "医疗器械",
        "change_pct": 0.67
      },
      {
        "name": "锂电池",
        "change_pct": -0.66
      },
      {
        "name": "基因测序",
        "change_pct": 1.34
      },
      {
        "name": "PCB板",
        "change_pct": -1.76
      },
      {
        "name": "医药",
        "change_pct": 0.93
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "化学原料药",
        "change_pct": 1.01
      },
      {
        "name": "食品安全",
        "change_pct": 0.14
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.68
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.35
      },
      {
        "name": "异丙醇",
        "change_pct": -0.2
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.58
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 10,
    "hot_rank_chg": 28,
    "stock_cnt": 5767,
    "price": "7.97",
    "change": "-9.33",
    "market_id": "33",
    "circulate_market_value": "3730928900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "旅游",
        "change_pct": 0.92
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "广西概念",
        "change_pct": -0.44
      },
      {
        "name": "低空经济",
        "change_pct": -0.33
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 14,
    "hot_rank_chg": 27,
    "stock_cnt": 5767,
    "price": "7.42",
    "change": "0.81",
    "market_id": "17",
    "circulate_market_value": "18687343000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.83
      },
      {
        "name": "工业大麻",
        "change_pct": -0.12
      },
      {
        "name": "中药",
        "change_pct": 0.74
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "保健品",
        "change_pct": 0.66
      },
      {
        "name": "民营医院",
        "change_pct": 0.55
      },
      {
        "name": "医药",
        "change_pct": 0.93
      },
      {
        "name": "化学原料药",
        "change_pct": 1.01
      },
      {
        "name": "流感",
        "change_pct": 1.13
      },
      {
        "name": "振兴东北",
        "change_pct": 1.11
      },
      {
        "name": "食品",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 15,
    "hot_rank_chg": -7,
    "stock_cnt": 5767,
    "price": "8.37",
    "change": "-3.90",
    "market_id": "33",
    "circulate_market_value": "16029324000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.86
      },
      {
        "name": "林业",
        "change_pct": -1.99
      },
      {
        "name": "碳中和",
        "change_pct": -0.88
      },
      {
        "name": "自贸区",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 18,
    "hot_rank_chg": 240,
    "stock_cnt": 5767,
    "price": "11.87",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "4564580400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.11
      },
      {
        "name": "股权转让",
        "change_pct": 0.05
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "新疆概念",
        "change_pct": -0.06
      },
      {
        "name": "医药",
        "change_pct": 0.93
      },
      {
        "name": "流感",
        "change_pct": 1.13
      },
      {
        "name": "国资入股",
        "change_pct": 0.19
      },
      {
        "name": "减肥药",
        "change_pct": 1.16
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 28,
    "hot_rank_chg": 46,
    "stock_cnt": 5767,
    "price": "10.04",
    "change": "-0.99",
    "market_id": "33",
    "circulate_market_value": "7379458400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.66
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "炭黑",
        "change_pct": 0.35
      },
      {
        "name": "固态电池",
        "change_pct": -0.8
      },
      {
        "name": "PVDF概念",
        "change_pct": -0.39
      },
      {
        "name": "碳基材料",
        "change_pct": -0.78
      },
      {
        "name": "超级电容",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 33,
    "hot_rank_chg": 37,
    "stock_cnt": 5767,
    "price": "2.37",
    "change": "10.23",
    "market_id": "33",
    "circulate_market_value": "11950691400.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "汽车整车",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "新能源整车",
        "change_pct": 1.77
      },
      {
        "name": "汽车整车",
        "change_pct": 2.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "低价股",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 40,
    "hot_rank_chg": 116,
    "stock_cnt": 5767,
    "price": "9.24",
    "change": "1.32",
    "market_id": "17",
    "circulate_market_value": "33150068000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.56
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.29
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.46
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 45,
    "hot_rank_chg": -10,
    "stock_cnt": 5767,
    "price": "12.61",
    "change": "-2.10",
    "market_id": "17",
    "circulate_market_value": "22561034000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.61
      },
      {
        "name": "纯碱",
        "change_pct": 0.3
      },
      {
        "name": "食品",
        "change_pct": 0.61
      },
      {
        "name": "土壤修复",
        "change_pct": -0.31
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.08
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.01
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 46,
    "hot_rank_chg": 40,
    "stock_cnt": 5767,
    "price": "7.14",
    "change": "2.15",
    "market_id": "33",
    "circulate_market_value": "8331303200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.05
      },
      {
        "name": "国产软件",
        "change_pct": -0.25
      },
      {
        "name": "一带一路",
        "change_pct": 0.03
      },
      {
        "name": "量子通信",
        "change_pct": -0.48
      },
      {
        "name": "人工智能",
        "change_pct": 0.38
      },
      {
        "name": "网络安全",
        "change_pct": -0.55
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.21
      },
      {
        "name": "物联网",
        "change_pct": -0.0
      },
      {
        "name": "大数据",
        "change_pct": -0.19
      },
      {
        "name": "破净股",
        "change_pct": -0.11
      },
      {
        "name": "数字经济",
        "change_pct": 0.04
      },
      {
        "name": "国产芯片",
        "change_pct": -0.26
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.2
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.33
      },
      {
        "name": "信创",
        "change_pct": -0.44
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.2
      },
      {
        "name": "跨境支付",
        "change_pct": -0.22
      },
      {
        "name": "web3.0",
        "change_pct": 0.3
      },
      {
        "name": "数字人民币",
        "change_pct": -0.19
      },
      {
        "name": "智慧政务",
        "change_pct": -0.19
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.08
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.22
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.11
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": -0.17
      },
      {
        "name": "回购",
        "change_pct": 0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.02
      },
      {
        "name": "智能电网",
        "change_pct": -0.42
      },
      {
        "name": "低空经济",
        "change_pct": -0.33
      },
      {
        "name": "量子计算",
        "change_pct": -0.48
      },
      {
        "name": "财税改革",
        "change_pct": -0.44
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 47,
    "hot_rank_chg": 373,
    "stock_cnt": 5767,
    "price": "8.54",
    "change": "4.15",
    "market_id": "17",
    "circulate_market_value": "4093392600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.74
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "医药商业",
        "change_pct": 0.19
      },
      {
        "name": "医药",
        "change_pct": 0.93
      },
      {
        "name": "流感",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 48,
    "hot_rank_chg": 13,
    "stock_cnt": 5767,
    "price": "6.90",
    "change": "-1.71",
    "market_id": "33",
    "circulate_market_value": "12955590500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.41
      },
      {
        "name": "光伏",
        "change_pct": -0.56
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.92
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.47
      },
      {
        "name": "碳化硅",
        "change_pct": -0.24
      },
      {
        "name": "地摊经济",
        "change_pct": 0.22
      },
      {
        "name": "人形机器人",
        "change_pct": 0.76
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -0.63
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 51,
    "hot_rank_chg": -32,
    "stock_cnt": 5767,
    "price": "11.69",
    "change": "-3.94",
    "market_id": "33",
    "circulate_market_value": "10364258000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -2.09
      },
      {
        "name": "手机产业链",
        "change_pct": -0.02
      },
      {
        "name": "超高清视频",
        "change_pct": 0.49
      },
      {
        "name": "锂电池",
        "change_pct": -0.66
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "包装印刷",
        "change_pct": 0.03
      },
      {
        "name": "光伏",
        "change_pct": -0.56
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "小米概念股",
        "change_pct": 0.02
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.09
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.66
      },
      {
        "name": "华为产业链",
        "change_pct": -0.17
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "002137",
    "name": "实益达",
    "hot_rank": 59,
    "hot_rank_chg": 170,
    "stock_cnt": 5767,
    "price": "8.55",
    "change": "4.27",
    "market_id": "33",
    "circulate_market_value": "3389724100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.41
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.59
      },
      {
        "name": "光伏",
        "change_pct": -0.56
      },
      {
        "name": "LED",
        "change_pct": 0.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.04
      },
      {
        "name": "无线耳机",
        "change_pct": 0.42
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.98
      },
      {
        "name": "华为产业链",
        "change_pct": -0.17
      },
      {
        "name": "微信小店",
        "change_pct": 1.31
      },
      {
        "name": "区块链",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 73,
    "hot_rank_chg": 110,
    "stock_cnt": 5767,
    "price": "9.75",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5146070300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玉米种业",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 2.04
      },
      {
        "name": "农业种植",
        "change_pct": 3.62
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "转基因",
        "change_pct": 4.83
      },
      {
        "name": "棉花",
        "change_pct": 1.69
      },
      {
        "name": "大农业",
        "change_pct": 0.92
      },
      {
        "name": "供销社",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 75,
    "hot_rank_chg": 79,
    "stock_cnt": 5767,
    "price": "5.03",
    "change": "-1.57",
    "market_id": "33",
    "circulate_market_value": "3848657900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.74
      },
      {
        "name": "股权转让",
        "change_pct": 0.05
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.82
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "医药商业",
        "change_pct": 0.19
      },
      {
        "name": "保健品",
        "change_pct": 0.66
      },
      {
        "name": "民营医院",
        "change_pct": 0.55
      },
      {
        "name": "医药",
        "change_pct": 0.93
      },
      {
        "name": "食品",
        "change_pct": 0.61
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.68
      },
      {
        "name": "口腔",
        "change_pct": 0.5
      },
      {
        "name": "医美",
        "change_pct": 0.7
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 84,
    "hot_rank_chg": -35,
    "stock_cnt": 5767,
    "price": "11.87",
    "change": "-2.62",
    "market_id": "17",
    "circulate_market_value": "20596598000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.66
      },
      {
        "name": "核电",
        "change_pct": -0.49
      },
      {
        "name": "锂电池",
        "change_pct": -0.66
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.67
      },
      {
        "name": "PCB板",
        "change_pct": -1.76
      },
      {
        "name": "中科院系",
        "change_pct": -0.37
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.17
      },
      {
        "name": "固态电池",
        "change_pct": -0.8
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 88,
    "hot_rank_chg": -40,
    "stock_cnt": 5767,
    "price": "3.55",
    "change": "-3.79",
    "market_id": "17",
    "circulate_market_value": "7853768100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.65
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.21
      },
      {
        "name": "光通信",
        "change_pct": -0.12
      },
      {
        "name": "林业",
        "change_pct": -1.99
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "军工",
        "change_pct": -0.74
      },
      {
        "name": "人造肉",
        "change_pct": 1.68
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 96,
    "hot_rank_chg": -15,
    "stock_cnt": 5767,
    "price": "6.40",
    "change": "2.07",
    "market_id": "33",
    "circulate_market_value": "4196518600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.83
      },
      {
        "name": "新零售",
        "change_pct": 0.37
      },
      {
        "name": "农业种植",
        "change_pct": 3.62
      },
      {
        "name": "冷链",
        "change_pct": 0.61
      },
      {
        "name": "大农业",
        "change_pct": 0.92
      },
      {
        "name": "预制菜",
        "change_pct": 0.67
      },
      {
        "name": "国企改革",
        "change_pct": -0.09
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.66
      },
      {
        "name": "免税店概念",
        "change_pct": -0.03
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 99,
    "hot_rank_chg": 70,
    "stock_cnt": 5767,
    "price": "10.02",
    "change": "-2.62",
    "market_id": "17",
    "circulate_market_value": "11446256500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.83
      },
      {
        "name": "核电",
        "change_pct": -0.49
      },
      {
        "name": "大飞机",
        "change_pct": -0.5
      },
      {
        "name": "大气治理",
        "change_pct": 0.21
      },
      {
        "name": "玻纤",
        "change_pct": 0.31
      },
      {
        "name": "环保",
        "change_pct": -0.09
      },
      {
        "name": "核污染防治",
        "change_pct": -0.06
      },
      {
        "name": "航天",
        "change_pct": -0.81
      },
      {
        "name": "生物安全",
        "change_pct": 0.68
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -0.11
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600176", "name": "中国巨石", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5767, "price": "47.15", "change": "-0.51", "market_id": "17", "circulate_market_value": "187260330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5767, "price": "17.97", "change": "-2.76", "market_id": "33", "circulate_market_value": "8229387600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 3, "hot_rank_chg": 31, "stock_cnt": 5767, "price": "5.75", "change": "5.50", "market_id": "33", "circulate_market_value": "203361020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.17}, {"name": "手机产业链", "change_pct": -0.02}, {"name": "超高清视频", "change_pct": 0.49}, {"name": "苹果产业链", "change_pct": 0.37}, {"name": "电竞", "change_pct": 0.5}, {"name": "半导体", "change_pct": -0.41}, {"name": "人工智能", "change_pct": 0.38}, {"name": "互联网医疗", "change_pct": -0.05}, {"name": "VR&AR", "change_pct": 0.13}, {"name": "OLED", "change_pct": 0.17}, {"name": "京津冀", "change_pct": 0.16}, {"name": "物联网", "change_pct": -0.0}, {"name": "指纹识别", "change_pct": 0.91}, {"name": "汽车零部件", "change_pct": 1.55}, {"name": "白马股", "change_pct": -0.26}, {"name": "智能制造", "change_pct": 0.12}, {"name": "小米概念股", "change_pct": 0.02}, {"name": "国产芯片", "change_pct": -0.26}, {"name": "液晶面板/LCD", "change_pct": 0.09}, {"name": "全息概念", "change_pct": 0.22}, {"name": "理想汽车概念股", "change_pct": 1.16}, {"name": "MicroLED", "change_pct": 0.17}, {"name": "钙钛矿电池", "change_pct": 0.16}, {"name": "智能手表", "change_pct": 0.59}, {"name": "MiniLED", "change_pct": 0.38}, {"name": "传感器", "change_pct": 0.29}, {"name": "大硅片", "change_pct": -0.33}, {"name": "AI PC", "change_pct": -0.09}, {"name": "华为产业链", "change_pct": -0.17}, {"name": "回购", "change_pct": 0.12}, {"name": "光电共封装CPO", "change_pct": 0.13}, {"name": "智能眼镜/MR头显", "change_pct": 0.19}, {"name": "玻璃基板封装", "change_pct": -0.29}]}, {"code": "000981", "name": "山子高科", "hot_rank": 4, "hot_rank_chg": 20, "stock_cnt": 5767, "price": "3.01", "change": "9.85", "market_id": "33", "circulate_market_value": "28635202000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "哪吒重整关联", "xgb_concepts": [{"name": "半导体", "change_pct": -0.41}, {"name": "无人驾驶", "change_pct": 0.2}, {"name": "汽车零部件", "change_pct": 1.55}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "新能源车零部件", "change_pct": 0.92}, {"name": "减速器", "change_pct": 1.37}, {"name": "华为汽车", "change_pct": 1.24}]}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5767, "price": "20.57", "change": "1.68", "market_id": "17", "circulate_market_value": "43023023000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 6, "hot_rank_chg": 54, "stock_cnt": 5767, "price": "9.52", "change": "-0.31", "market_id": "33", "circulate_market_value": "4580446500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.26}, {"name": "医疗器械", "change_pct": 0.67}, {"name": "锂电池", "change_pct": -0.66}, {"name": "基因测序", "change_pct": 1.34}, {"name": "PCB板", "change_pct": -1.76}, {"name": "医药", "change_pct": 0.93}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "化学原料药", "change_pct": 1.01}, {"name": "食品安全", "change_pct": 0.14}, {"name": "辅助生殖", "change_pct": 0.68}, {"name": "光刻机（胶）", "change_pct": -0.35}, {"name": "异丙醇", "change_pct": -0.2}, {"name": "新冠病毒防治", "change_pct": 0.58}, {"name": "磷酸铁锂", "change_pct": -0.67}]}, {"code": "600127", "name": "金健米业", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5767, "price": "13.02", "change": "9.97", "market_id": "17", "circulate_market_value": "8356017500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮油食品"}, {"code": "600206", "name": "有研新材", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5767, "price": "50.55", "change": "-2.09", "market_id": "17", "circulate_market_value": "42793271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5767, "price": "45.14", "change": "-0.18", "market_id": "17", "circulate_market_value": "65994445000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 10, "hot_rank_chg": 28, "stock_cnt": 5767, "price": "7.97", "change": "-9.33", "market_id": "33", "circulate_market_value": "3730928900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.65}, {"name": "旅游", "change_pct": 0.92}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "广西概念", "change_pct": -0.44}, {"name": "低空经济", "change_pct": -0.33}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5767, "price": "14.60", "change": "0.21", "market_id": "17", "circulate_market_value": "9723600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5767, "price": "68.49", "change": "4.72", "market_id": "17", "circulate_market_value": "168050230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 13, "hot_rank_chg": -12, "stock_cnt": 5767, "price": "23.67", "change": "-3.19", "market_id": "33", "circulate_market_value": "27847016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 14, "hot_rank_chg": 27, "stock_cnt": 5767, "price": "7.42", "change": "0.81", "market_id": "17", "circulate_market_value": "18687343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.83}, {"name": "工业大麻", "change_pct": -0.12}, {"name": "中药", "change_pct": 0.74}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "保健品", "change_pct": 0.66}, {"name": "民营医院", "change_pct": 0.55}, {"name": "医药", "change_pct": 0.93}, {"name": "化学原料药", "change_pct": 1.01}, {"name": "流感", "change_pct": 1.13}, {"name": "振兴东北", "change_pct": 1.11}, {"name": "食品", "change_pct": 0.61}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 15, "hot_rank_chg": -7, "stock_cnt": 5767, "price": "8.37", "change": "-3.90", "market_id": "33", "circulate_market_value": "16029324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.86}, {"name": "林业", "change_pct": -1.99}, {"name": "碳中和", "change_pct": -0.88}, {"name": "自贸区", "change_pct": 0.2}]}, {"code": "000636", "name": "风华高科", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5767, "price": "56.65", "change": "-3.29", "market_id": "33", "circulate_market_value": "65005307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 18, "hot_rank_chg": 240, "stock_cnt": 5767, "price": "11.87", "change": "10.01", "market_id": "17", "circulate_market_value": "4564580400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 1.11}, {"name": "股权转让", "change_pct": 0.05}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "新疆概念", "change_pct": -0.06}, {"name": "医药", "change_pct": 0.93}, {"name": "流感", "change_pct": 1.13}, {"name": "国资入股", "change_pct": 0.19}, {"name": "减肥药", "change_pct": 1.16}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 19, "hot_rank_chg": 63, "stock_cnt": 5767, "price": "15.00", "change": "9.97", "market_id": "17", "circulate_market_value": "6666666700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "600869", "name": "远东股份", "hot_rank": 20, "hot_rank_chg": -15, "stock_cnt": 5767, "price": "21.30", "change": "-2.56", "market_id": "17", "circulate_market_value": "47272213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5767, "price": "36.39", "change": "3.41", "market_id": "17", "circulate_market_value": "124197238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 22, "hot_rank_chg": 44, "stock_cnt": 5767, "price": "113.85", "change": "3.90", "market_id": "17", "circulate_market_value": "41068359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5767, "price": "191.22", "change": "3.25", "market_id": "33", "circulate_market_value": "150304610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 24, "hot_rank_chg": 48, "stock_cnt": 5767, "price": "32.16", "change": "0.34", "market_id": "33", "circulate_market_value": "45165276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 25, "hot_rank_chg": 1, "stock_cnt": 5767, "price": "38.63", "change": "-4.07", "market_id": "17", "circulate_market_value": "26707840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5767, "price": "24.22", "change": "-3.58", "market_id": "33", "circulate_market_value": "14409257000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 27, "hot_rank_chg": 29, "stock_cnt": 5767, "price": "48.76", "change": "9.99", "market_id": "17", "circulate_market_value": "6969028900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "PCB"}, {"code": "002068", "name": "黑猫股份", "hot_rank": 28, "hot_rank_chg": 46, "stock_cnt": 5767, "price": "10.04", "change": "-0.99", "market_id": "33", "circulate_market_value": "7379458400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.66}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "炭黑", "change_pct": 0.35}, {"name": "固态电池", "change_pct": -0.8}, {"name": "PVDF概念", "change_pct": -0.39}, {"name": "碳基材料", "change_pct": -0.78}, {"name": "超级电容", "change_pct": -1.04}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 29, "hot_rank_chg": 2, "stock_cnt": 5767, "price": "92.94", "change": "-1.74", "market_id": "33", "circulate_market_value": "60690517000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 30, "hot_rank_chg": 91, "stock_cnt": 5767, "price": "17.44", "change": "1.87", "market_id": "17", "circulate_market_value": "11398806700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 31, "hot_rank_chg": 78, "stock_cnt": 5767, "price": "58.69", "change": "5.03", "market_id": "33", "circulate_market_value": "98489073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5767, "price": "16.06", "change": "-3.54", "market_id": "17", "circulate_market_value": "20625514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 33, "hot_rank_chg": 37, "stock_cnt": 5767, "price": "2.37", "change": "10.23", "market_id": "33", "circulate_market_value": "11950691400.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "汽车整车", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.65}, {"name": "新能源整车", "change_pct": 1.77}, {"name": "汽车整车", "change_pct": 2.05}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "低价股", "change_pct": 0.27}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5767, "price": "38.20", "change": "-1.62", "market_id": "33", "circulate_market_value": "28933257000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 35, "hot_rank_chg": 1111, "stock_cnt": 5767, "price": "20.80", "change": "373.80", "market_id": "17", "circulate_market_value": "4392194200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 36, "hot_rank_chg": -6, "stock_cnt": 5767, "price": "79.40", "change": "-3.66", "market_id": "33", "circulate_market_value": "57583783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 37, "hot_rank_chg": 0, "stock_cnt": 5767, "price": "43.42", "change": "2.70", "market_id": "17", "circulate_market_value": "55213804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 38, "hot_rank_chg": 37, "stock_cnt": 5767, "price": "16.28", "change": "3.10", "market_id": "17", "circulate_market_value": "17850933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 39, "hot_rank_chg": -22, "stock_cnt": 5767, "price": "20.48", "change": "4.22", "market_id": "33", "circulate_market_value": "11948815500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 40, "hot_rank_chg": 116, "stock_cnt": 5767, "price": "9.24", "change": "1.32", "market_id": "17", "circulate_market_value": "33150068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.56}, {"name": "OLED", "change_pct": 0.17}, {"name": "液晶面板/LCD", "change_pct": 0.09}, {"name": "国企改革", "change_pct": -0.09}, {"name": "玻璃基板封装", "change_pct": -0.29}, {"name": "陕西国企改革", "change_pct": -0.46}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 41, "hot_rank_chg": -21, "stock_cnt": 5767, "price": "896.00", "change": "-1.30", "market_id": "33", "circulate_market_value": "994503550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 42, "hot_rank_chg": 281, "stock_cnt": 5767, "price": "75.03", "change": "10.00", "market_id": "33", "circulate_market_value": "2453364200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 43, "hot_rank_chg": 28, "stock_cnt": 5767, "price": "37.00", "change": "9.99", "market_id": "33", "circulate_market_value": "5333952600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半导体硅片"}, {"code": "601208", "name": "东材科技", "hot_rank": 44, "hot_rank_chg": -33, "stock_cnt": 5767, "price": "52.30", "change": "-3.70", "market_id": "17", "circulate_market_value": "52832568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 45, "hot_rank_chg": -10, "stock_cnt": 5767, "price": "12.61", "change": "-2.10", "market_id": "17", "circulate_market_value": "22561034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.61}, {"name": "纯碱", "change_pct": 0.3}, {"name": "食品", "change_pct": 0.61}, {"name": "土壤修复", "change_pct": -0.31}, {"name": "东数西算/算力", "change_pct": -0.08}, {"name": "OpenClaw概念", "change_pct": -0.01}, {"name": "DeepSeek概念股", "change_pct": -0.19}]}, {"code": "002212", "name": "天融信", "hot_rank": 46, "hot_rank_chg": 40, "stock_cnt": 5767, "price": "7.14", "change": "2.15", "market_id": "33", "circulate_market_value": "8331303200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.05}, {"name": "国产软件", "change_pct": -0.25}, {"name": "一带一路", "change_pct": 0.03}, {"name": "量子通信", "change_pct": -0.48}, {"name": "人工智能", "change_pct": 0.38}, {"name": "网络安全", "change_pct": -0.55}, {"name": "云计算数据中心", "change_pct": -0.21}, {"name": "物联网", "change_pct": -0.0}, {"name": "大数据", "change_pct": -0.19}, {"name": "破净股", "change_pct": -0.11}, {"name": "数字经济", "change_pct": 0.04}, {"name": "国产芯片", "change_pct": -0.26}, {"name": "阿里巴巴概念股", "change_pct": 0.2}, {"name": "腾讯概念股", "change_pct": 0.33}, {"name": "信创", "change_pct": -0.44}, {"name": "华为昇腾", "change_pct": 0.2}, {"name": "跨境支付", "change_pct": -0.22}, {"name": "web3.0", "change_pct": 0.3}, {"name": "数字人民币", "change_pct": -0.19}, {"name": "智慧政务", "change_pct": -0.19}, {"name": "华为鸿蒙", "change_pct": -0.08}, {"name": "华为云·鲲鹏", "change_pct": -0.22}, {"name": "卫星互联网", "change_pct": -1.11}, {"name": "智慧灯杆", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": -0.17}, {"name": "回购", "change_pct": 0.12}, {"name": "AI大模型/智能体", "change_pct": 0.02}, {"name": "智能电网", "change_pct": -0.42}, {"name": "低空经济", "change_pct": -0.33}, {"name": "量子计算", "change_pct": -0.48}, {"name": "财税改革", "change_pct": -0.44}, {"name": "DeepSeek概念股", "change_pct": -0.19}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 47, "hot_rank_chg": 373, "stock_cnt": 5767, "price": "8.54", "change": "4.15", "market_id": "17", "circulate_market_value": "4093392600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.74}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "医药商业", "change_pct": 0.19}, {"name": "医药", "change_pct": 0.93}, {"name": "流感", "change_pct": 1.13}]}, {"code": "002617", "name": "露笑科技", "hot_rank": 48, "hot_rank_chg": 13, "stock_cnt": 5767, "price": "6.90", "change": "-1.71", "market_id": "33", "circulate_market_value": "12955590500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.41}, {"name": "光伏", "change_pct": -0.56}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "新能源车零部件", "change_pct": 0.92}, {"name": "第三代半导体", "change_pct": -0.47}, {"name": "碳化硅", "change_pct": -0.24}, {"name": "地摊经济", "change_pct": 0.22}, {"name": "人形机器人", "change_pct": 0.76}, {"name": "铜缆高速连接器", "change_pct": -0.63}]}, {"code": "002815", "name": "崇达技术", "hot_rank": 49, "hot_rank_chg": -10, "stock_cnt": 5767, "price": "23.77", "change": "1.67", "market_id": "33", "circulate_market_value": "18472571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 50, "hot_rank_chg": -22, "stock_cnt": 5767, "price": "503.26", "change": "6.11", "market_id": "17", "circulate_market_value": "15141946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 51, "hot_rank_chg": -32, "stock_cnt": 5767, "price": "11.69", "change": "-3.94", "market_id": "33", "circulate_market_value": "10364258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -2.09}, {"name": "手机产业链", "change_pct": -0.02}, {"name": "超高清视频", "change_pct": 0.49}, {"name": "锂电池", "change_pct": -0.66}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "OLED", "change_pct": 0.17}, {"name": "包装印刷", "change_pct": 0.03}, {"name": "光伏", "change_pct": -0.56}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "小米概念股", "change_pct": 0.02}, {"name": "液晶面板/LCD", "change_pct": 0.09}, {"name": "可降解塑料", "change_pct": 0.66}, {"name": "华为产业链", "change_pct": -0.17}, {"name": "PET复合铜箔", "change_pct": -1.67}]}, {"code": "600460", "name": "士兰微", "hot_rank": 52, "hot_rank_chg": 6, "stock_cnt": 5767, "price": "31.99", "change": "2.07", "market_id": "17", "circulate_market_value": "53233658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 53, "hot_rank_chg": -26, "stock_cnt": 5767, "price": "16.39", "change": "-2.73", "market_id": "33", "circulate_market_value": "54513575000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 54, "hot_rank_chg": -31, "stock_cnt": 5767, "price": "146.03", "change": "-5.47", "market_id": "17", "circulate_market_value": "352187690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 55, "hot_rank_chg": 9, "stock_cnt": 5767, "price": "277.65", "change": "3.41", "market_id": "33", "circulate_market_value": "302190940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 56, "hot_rank_chg": -40, "stock_cnt": 5767, "price": "193.53", "change": "0.80", "market_id": "33", "circulate_market_value": "268294840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 57, "hot_rank_chg": 34, "stock_cnt": 5767, "price": "36.80", "change": "10.02", "market_id": "17", "circulate_market_value": "34247181000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体材料"}, {"code": "600584", "name": "长电科技", "hot_rank": 58, "hot_rank_chg": -33, "stock_cnt": 5767, "price": "67.75", "change": "-2.59", "market_id": "17", "circulate_market_value": "121232837000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002137", "name": "实益达", "hot_rank": 59, "hot_rank_chg": 170, "stock_cnt": 5767, "price": "8.55", "change": "4.27", "market_id": "33", "circulate_market_value": "3389724100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.41}, {"name": "直播/短视频", "change_pct": 1.59}, {"name": "光伏", "change_pct": -0.56}, {"name": "LED", "change_pct": 0.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.04}, {"name": "无线耳机", "change_pct": 0.42}, {"name": "网红/MCN", "change_pct": 0.98}, {"name": "华为产业链", "change_pct": -0.17}, {"name": "微信小店", "change_pct": 1.31}, {"name": "区块链", "change_pct": -0.2}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 60, "hot_rank_chg": -16, "stock_cnt": 5767, "price": "467.03", "change": "1.31", "market_id": "17", "circulate_market_value": "189772180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 61, "hot_rank_chg": 16, "stock_cnt": 5767, "price": "19.22", "change": "-0.83", "market_id": "17", "circulate_market_value": "21796989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 62, "hot_rank_chg": -49, "stock_cnt": 5767, "price": "304.30", "change": "-0.39", "market_id": "33", "circulate_market_value": "1296501170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 63, "hot_rank_chg": -12, "stock_cnt": 5767, "price": "55.00", "change": "1.74", "market_id": "17", "circulate_market_value": "68766602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 64, "hot_rank_chg": 31, "stock_cnt": 5767, "price": "145.18", "change": "1.33", "market_id": "17", "circulate_market_value": "131327860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600088", "name": "中视传媒", "hot_rank": 65, "hot_rank_chg": 83, "stock_cnt": 5767, "price": "16.20", "change": "7.64", "market_id": "17", "circulate_market_value": "6442843700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 66, "hot_rank_chg": 19, "stock_cnt": 5767, "price": "15.64", "change": "9.99", "market_id": "17", "circulate_market_value": "4575919900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "玉米种业"}, {"code": "300413", "name": "芒果超媒", "hot_rank": 67, "hot_rank_chg": 310, "stock_cnt": 5767, "price": "18.14", "change": "6.58", "market_id": "33", "circulate_market_value": "18533637000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 68, "hot_rank_chg": 120, "stock_cnt": 5767, "price": "160.49", "change": "1.76", "market_id": "17", "circulate_market_value": "396936750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 69, "hot_rank_chg": 39, "stock_cnt": 5767, "price": "19.88", "change": "10.02", "market_id": "33", "circulate_market_value": "4907103600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "氧化锆粉体"}, {"code": "002436", "name": "兴森科技", "hot_rank": 70, "hot_rank_chg": -18, "stock_cnt": 5767, "price": "41.20", "change": "-3.74", "market_id": "33", "circulate_market_value": "62538657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 71, "hot_rank_chg": -18, "stock_cnt": 5767, "price": "32.80", "change": "-3.47", "market_id": "33", "circulate_market_value": "93810384000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 72, "hot_rank_chg": 1, "stock_cnt": 5767, "price": "13.11", "change": "-3.25", "market_id": "17", "circulate_market_value": "19307186000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 73, "hot_rank_chg": 110, "stock_cnt": 5767, "price": "9.75", "change": "10.04", "market_id": "17", "circulate_market_value": "5146070300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米种业", "xgb_concepts": [{"name": "密集调研", "change_pct": 2.04}, {"name": "农业种植", "change_pct": 3.62}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "转基因", "change_pct": 4.83}, {"name": "棉花", "change_pct": 1.69}, {"name": "大农业", "change_pct": 0.92}, {"name": "供销社", "change_pct": 0.73}]}, {"code": "603626", "name": "科森科技", "hot_rank": 74, "hot_rank_chg": 354, "stock_cnt": 5767, "price": "21.29", "change": "10.03", "market_id": "17", "circulate_market_value": "11813388600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人结构件"}, {"code": "002172", "name": "澳洋健康", "hot_rank": 75, "hot_rank_chg": 79, "stock_cnt": 5767, "price": "5.03", "change": "-1.57", "market_id": "33", "circulate_market_value": "3848657900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.74}, {"name": "股权转让", "change_pct": 0.05}, {"name": "优化生育（三孩）", "change_pct": 0.82}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "医药商业", "change_pct": 0.19}, {"name": "保健品", "change_pct": 0.66}, {"name": "民营医院", "change_pct": 0.55}, {"name": "医药", "change_pct": 0.93}, {"name": "食品", "change_pct": 0.61}, {"name": "辅助生殖", "change_pct": 0.68}, {"name": "口腔", "change_pct": 0.5}, {"name": "医美", "change_pct": 0.7}, {"name": "新冠病毒防治", "change_pct": 0.58}]}, {"code": "000021", "name": "深科技", "hot_rank": 76, "hot_rank_chg": -30, "stock_cnt": 5767, "price": "35.51", "change": "-1.91", "market_id": "33", "circulate_market_value": "56268676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 77, "hot_rank_chg": -27, "stock_cnt": 5767, "price": "41.21", "change": "5.24", "market_id": "33", "circulate_market_value": "26000224000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 78, "hot_rank_chg": -23, "stock_cnt": 5767, "price": "60.90", "change": "-1.84", "market_id": "33", "circulate_market_value": "88515227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 79, "hot_rank_chg": -36, "stock_cnt": 5767, "price": "53.47", "change": "-2.96", "market_id": "17", "circulate_market_value": "240777490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 80, "hot_rank_chg": 22, "stock_cnt": 5767, "price": "30.90", "change": "-3.95", "market_id": "17", "circulate_market_value": "636595410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 81, "hot_rank_chg": -52, "stock_cnt": 5767, "price": "424.34", "change": "0.15", "market_id": "33", "circulate_market_value": "532429480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 82, "hot_rank_chg": -25, "stock_cnt": 5767, "price": "32.59", "change": "-1.00", "market_id": "33", "circulate_market_value": "35227127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 83, "hot_rank_chg": -47, "stock_cnt": 5767, "price": "230.00", "change": "-9.45", "market_id": "17", "circulate_market_value": "36061819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 84, "hot_rank_chg": -35, "stock_cnt": 5767, "price": "11.87", "change": "-2.62", "market_id": "17", "circulate_market_value": "20596598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.66}, {"name": "核电", "change_pct": -0.49}, {"name": "锂电池", "change_pct": -0.66}, {"name": "铜箔/覆铜板", "change_pct": -2.67}, {"name": "PCB板", "change_pct": -1.76}, {"name": "中科院系", "change_pct": -0.37}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "宁德时代概念股", "change_pct": -0.17}, {"name": "固态电池", "change_pct": -0.8}, {"name": "PET复合铜箔", "change_pct": -1.67}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 85, "hot_rank_chg": -40, "stock_cnt": 5767, "price": "47.12", "change": "3.52", "market_id": "17", "circulate_market_value": "73375424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 86, "hot_rank_chg": -44, "stock_cnt": 5767, "price": "369.88", "change": "-0.87", "market_id": "17", "circulate_market_value": "248085290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 87, "hot_rank_chg": -40, "stock_cnt": 5767, "price": "219.03", "change": "-2.06", "market_id": "17", "circulate_market_value": "60362121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 88, "hot_rank_chg": -40, "stock_cnt": 5767, "price": "3.55", "change": "-3.79", "market_id": "17", "circulate_market_value": "7853768100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.65}, {"name": "云计算数据中心", "change_pct": -0.21}, {"name": "光通信", "change_pct": -0.12}, {"name": "林业", "change_pct": -1.99}, {"name": "军民融合", "change_pct": -0.69}, {"name": "军工", "change_pct": -0.74}, {"name": "人造肉", "change_pct": 1.68}]}, {"code": "603650", "name": "彤程新材", "hot_rank": 89, "hot_rank_chg": 9, "stock_cnt": 5767, "price": "72.25", "change": "4.24", "market_id": "17", "circulate_market_value": "44509104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300207", "name": "欣旺达", "hot_rank": 90, "hot_rank_chg": -69, "stock_cnt": 5767, "price": "20.23", "change": "2.12", "market_id": "33", "circulate_market_value": "34672718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 91, "hot_rank_chg": -37, "stock_cnt": 5767, "price": "69.81", "change": "-1.88", "market_id": "33", "circulate_market_value": "102405383000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 92, "hot_rank_chg": 12, "stock_cnt": 5767, "price": "29.85", "change": "5.37", "market_id": "17", "circulate_market_value": "14311983000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688795", "name": "摩尔线程", "hot_rank": 93, "hot_rank_chg": 156, "stock_cnt": 5767, "price": "395.58", "change": "8.68", "market_id": "17", "circulate_market_value": "22152480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 94, "hot_rank_chg": -54, "stock_cnt": 5767, "price": "105.78", "change": "-0.19", "market_id": "33", "circulate_market_value": "106307383000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 95, "hot_rank_chg": -28, "stock_cnt": 5767, "price": "29.66", "change": "-3.86", "market_id": "17", "circulate_market_value": "36583665000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 96, "hot_rank_chg": -15, "stock_cnt": 5767, "price": "6.40", "change": "2.07", "market_id": "33", "circulate_market_value": "4196518600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.83}, {"name": "新零售", "change_pct": 0.37}, {"name": "农业种植", "change_pct": 3.62}, {"name": "冷链", "change_pct": 0.61}, {"name": "大农业", "change_pct": 0.92}, {"name": "预制菜", "change_pct": 0.67}, {"name": "国企改革", "change_pct": -0.09}, {"name": "可降解塑料", "change_pct": 0.66}, {"name": "免税店概念", "change_pct": -0.03}, {"name": "湖北国企改革", "change_pct": 0.65}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 97, "hot_rank_chg": 107, "stock_cnt": 5767, "price": "14.75", "change": "3.29", "market_id": "17", "circulate_market_value": "31548011000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 98, "hot_rank_chg": -19, "stock_cnt": 5767, "price": "18.22", "change": "-0.06", "market_id": "33", "circulate_market_value": "61283063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603601", "name": "再升科技", "hot_rank": 99, "hot_rank_chg": 70, "stock_cnt": 5767, "price": "10.02", "change": "-2.62", "market_id": "17", "circulate_market_value": "11446256500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.83}, {"name": "核电", "change_pct": -0.49}, {"name": "大飞机", "change_pct": -0.5}, {"name": "大气治理", "change_pct": 0.21}, {"name": "玻纤", "change_pct": 0.31}, {"name": "环保", "change_pct": -0.09}, {"name": "核污染防治", "change_pct": -0.06}, {"name": "航天", "change_pct": -0.81}, {"name": "生物安全", "change_pct": 0.68}, {"name": "中芯国际概念股", "change_pct": -0.11}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 100, "hot_rank_chg": -10, "stock_cnt": 5767, "price": "15.92", "change": "-0.69", "market_id": "17", "circulate_market_value": "10830689200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600641", "name": "先导基电", "price": 36.8, "change_pct": 10.01, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.11, "first_limit_up": 1789621989, "break_limit_up_times": 0}, {"code": "600792", "name": "云煤能源", "price": 5.34, "change_pct": 10.1, "reason": "云南省大型的焦炭生产与焦化工企业之一；旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.23, "first_limit_up": 1789623895, "break_limit_up_times": 0}, {"code": "002321", "name": "华英农业", "price": 2.18, "change_pct": 10.1, "reason": "公司控股股东将变更为信阳产投", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 2.5, "first_limit_up": 1789615206, "break_limit_up_times": 0}, {"code": "603626", "name": "科森科技", "price": 21.29, "change_pct": 10.03, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.23, "first_limit_up": 1789609184, "break_limit_up_times": 1}, {"code": "001216", "name": "华瓷股份", "price": 19.88, "change_pct": 10.02, "reason": "公司氧化锆粉体纯度最高可达99.995%，可适配新能源研磨、齿科陶瓷、MLCC等领域，向潮州三环供应的MLCC相关粉体仍处于小量验证阶段", "plates": ["其他"], "limit_up_days": 3, "turnover_ratio": 11.37, "first_limit_up": 1789608636, "break_limit_up_times": 0}, {"code": "002528", "name": "*ST英飞", "price": 7.18, "change_pct": 9.95, "reason": "公司及全资子公司拟申请预重整及重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.98, "first_limit_up": 1789621251, "break_limit_up_times": 5}, {"code": "002285", "name": "世联行", "price": 2.63, "change_pct": 10.04, "reason": "公司专注房地产服务，旗下拥有“红璞公寓”、 “世联空间”、“小样社区”等多个品牌", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.52, "first_limit_up": 1789608624, "break_limit_up_times": 10}, {"code": "002339", "name": "积成电子", "price": 8.23, "change_pct": 10.03, "reason": "1、国内为数不多的智能充换电一站式解决方案服务商；已推出基于平台化、模块化、组件化设计技术特色的新一代智能充换电设备、充换电站综合监控系统、充换电运营管理平台等系列产品；\n2、控股子公司卓识网安在网络安全方面的业务主要包括网络安全等级保护测评、工控系统风险评估、渗透测试、产品检测和商用密码评估等", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 11.64, "first_limit_up": 1789608903, "break_limit_up_times": 1}, {"code": "603838", "name": "*ST四通", "price": 13.53, "change_pct": 10.0, "reason": "新型家居生活陶瓷供应商，外贸收入占比近8成", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.44, "first_limit_up": 1789622153, "break_limit_up_times": 1}, {"code": "000920", "name": "沃顿科技", "price": 12.63, "change_pct": 10.02, "reason": "1、公司的超纯水系列膜产品是较为成熟的系列产品，已应用于半导体芯片等对水质要求极高的高端制造领域；\n2、公司膜产品在盐湖提锂领域已实现了成熟的应用，并承接了多个液体物料浓缩分离纯化的工程项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1789609245, "break_limit_up_times": 0}, {"code": "605162", "name": "新中港", "price": 12.2, "change_pct": 10.01, "reason": "公司专业从事热电联产业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 12.53, "first_limit_up": 1789623122, "break_limit_up_times": 0}, {"code": "000981", "name": "山子高科", "price": 3.01, "change_pct": 9.85, "reason": "太乙圣莲欲拟出资30亿元入主哪吒汽车，工商登记信息显示，“太乙圣莲”注册成立于2026年4月，由浙江山子控股有限公司和浙江山子玉虚科技有限公司两家公司合伙组建，前者实控人为深交所上市公司山子高科董事长叶骥，后者实控人为山子高科董办负责人虞舒心", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1789609695, "break_limit_up_times": 1}, {"code": "600354", "name": "敦煌种业", "price": 9.75, "change_pct": 10.05, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 26.16, "first_limit_up": 1789611999, "break_limit_up_times": 2}, {"code": "002655", "name": "共达电声", "price": 40.77, "change_pct": 10.01, "reason": "1、公司拟以自有资金2000万元参与对合肥硅臻芯片的增资,布局光量子芯片领域；\n2、公司上半年设立全资子公司共达智算，聚焦“AI算力基础设施”，通过联合AIDC共建、算力租赁服务等构建AI算力生态闭环，布局训练服务器、推理服务器等产品，成为公司第二增长曲线；\n3、公司主营的微型麦克风、扬声器等声学器件可应用于AI手机，为AI手机的语音交互、音频播放等功能提供声学硬件支持", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 10.1, "first_limit_up": 1789612107, "break_limit_up_times": 0}, {"code": "600822", "name": "上海物贸", "price": 9.38, "change_pct": 9.96, "reason": "实控人为上海市国资委；公司主要从事汽车贸易、金属贸易与平台交易服务、化工等生产资料的批发与零售业务和仓储物流业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1789611313, "break_limit_up_times": 2}, {"code": "600630", "name": "龙头股份", "price": 7.54, "change_pct": 10.07, "reason": "上海纺织集团旗下，公司主营进出口业务，拥有优质品牌三枪，境外收入占比近半", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.48, "first_limit_up": 1789612981, "break_limit_up_times": 1}, {"code": "003026", "name": "中晶科技", "price": 37, "change_pct": 9.99, "reason": "半导体硅材料制造商，主要产品为半导体硅片及半导体硅棒，8英寸抛光片项目正按照整体规划在加速推进中", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 10.54, "first_limit_up": 1789608300, "break_limit_up_times": 3}, {"code": "605058", "name": "澳弘电子", "price": 48.76, "change_pct": 9.99, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 5, "turnover_ratio": 15.81, "first_limit_up": 1789608661, "break_limit_up_times": 39}, {"code": "600356", "name": "恒丰纸业", "price": 10.19, "change_pct": 10.04, "reason": "国内卷烟辅料龙头，五大卷烟辅料供应商之一；公司主要业务为特种纸、纸浆的生产和销售", "plates": ["烟草"], "limit_up_days": 1, "turnover_ratio": 7.78, "first_limit_up": 1789624452, "break_limit_up_times": 2}, {"code": "601218", "name": "吉鑫科技", "price": 5.74, "change_pct": 9.96, "reason": "国内起步最早的生产大型风电铸件的企业，表示更大兆瓦级的海上风机也正在开发中", "plates": ["风电"], "limit_up_days": 1, "turnover_ratio": 27.91, "first_limit_up": 1789624827, "break_limit_up_times": 4}, {"code": "300741", "name": "华宝股份", "price": 27.17, "change_pct": 20.01, "reason": "公司为国内香精龙头，旗下拥有“喜登”等品牌，下游客户包括调味品、烟草中烟等", "plates": ["烟草"], "limit_up_days": 1, "turnover_ratio": 5.16, "first_limit_up": 1789621566, "break_limit_up_times": 3}, {"code": "600721", "name": "百花医药", "price": 11.87, "change_pct": 10.01, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 23.45, "first_limit_up": 1789609662, "break_limit_up_times": 0}, {"code": "002836", "name": "新宏泽", "price": 10.84, "change_pct": 10.05, "reason": "公司主营业务为烟标的设计、生产及销售", "plates": ["烟草"], "limit_up_days": 1, "turnover_ratio": 3.2, "first_limit_up": 1789609668, "break_limit_up_times": 0}, {"code": "600609", "name": "金杯汽车", "price": 3.58, "change_pct": 10.15, "reason": "公司具备领先的座椅、门内饰板、内饰件、塑料件、橡胶件的设计开发能力，客户包括华晨宝马（供应内饰）、华晨中华等", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 6.33, "first_limit_up": 1789613905, "break_limit_up_times": 1}, {"code": "603248", "name": "锡华科技", "price": 22.34, "change_pct": 10.0, "reason": "公司主要从事大型高端装备专用部件的研发、制造与销售，产品结构以风电齿轮箱专用部件为主、注塑机厚大专用部件为辅，是全球行业领先、质量可靠、技术卓越的大型高端装备专用部件制造商", "plates": ["风电"], "limit_up_days": 3, "turnover_ratio": 33.89, "first_limit_up": 1789624977, "break_limit_up_times": 0}, {"code": "001365", "name": "天海电子", "price": 37.51, "change_pct": 10.0, "reason": "公司与上海它石智航技术有限公司签署长期战略合作框架协议，围绕人形机器人、具身大模型、汽车线束智能制造多领域开展深度协同", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.99, "first_limit_up": 1789612737, "break_limit_up_times": 0}, {"code": "600699", "name": "均胜电子", "price": 19.87, "change_pct": 10.02, "reason": "1、公司与智元等国内外机器人头部客户合作，定制化主控板等产品已实现批量交付；\n2、子公司近期新获两家头部品牌主机厂客户项目定点通知，公司将为上述客户在全球范围内开发并提供一系列汽车智能化产品，包括CCU、智能网联等产品，根据客户规划，上述项目预计全生命周期订单总金额约人民币150亿元，计划从2027年开始量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.93, "first_limit_up": 1789622258, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 15, "change_pct": 9.97, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 11.87, "first_limit_up": 1789627560, "break_limit_up_times": 1}, {"code": "601872", "name": "招商轮船", "price": 21.85, "change_pct": 10.02, "reason": "招商局集团旗下，主要从事国际原油、国际与国内干散货、国内滚装等海运业务", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1789621451, "break_limit_up_times": 1}, {"code": "603230", "name": "内蒙新华", "price": 12.25, "change_pct": 9.96, "reason": "公司是内蒙古规模最大的出版物发行企业，明确以教育服务、文化消费、现代物流为核心，向综合文化服务商转型，提供阅读空间设计、阅读活动策划及阅读课程开发等服务", "plates": ["传媒"], "limit_up_days": 2, "turnover_ratio": 1.68, "first_limit_up": 1789608300, "break_limit_up_times": 0}, {"code": "603009", "name": "北特科技", "price": 47.37, "change_pct": 10.01, "reason": "1、公司根据客户需求，配合推进人形机器人用丝杠产品的样件研发工作；\n2、公司目前通过Tier one客户间接向华为问界系列车型配套供应转向器齿条、齿轮等产品，向特斯拉配套相应底盘零部件产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.51, "first_limit_up": 1789611932, "break_limit_up_times": 1}, {"code": "301390", "name": "经纬股份", "price": 45, "change_pct": 20.0, "reason": "公司控股股东将变更为中软西安", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 1.21, "first_limit_up": 1789608300, "break_limit_up_times": 0}, {"code": "605088", "name": "冠盛股份", "price": 24.17, "change_pct": 10.01, "reason": "公司联合上海人工智能研究院等发布洁净环境机器人产品，已获授权发明专利6项，智能仿生关节臂仍处于研发迭代阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.33, "first_limit_up": 1789614522, "break_limit_up_times": 1}, {"code": "600929", "name": "雪天盐业", "price": 5.94, "change_pct": 10.0, "reason": "公司筹划购买坤天新能源控制权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.18, "first_limit_up": 1789621461, "break_limit_up_times": 4}, {"code": "000980", "name": "众泰汽车", "price": 2.37, "change_pct": 10.23, "reason": "公司全新A0级车型进入批量试制阶段", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 12.72, "first_limit_up": 1789613496, "break_limit_up_times": 3}, {"code": "600127", "name": "金健米业", "price": 13.02, "change_pct": 9.97, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 30.02, "first_limit_up": 1789611452, "break_limit_up_times": 0}, {"code": "603960", "name": "克来机电", "price": 17, "change_pct": 10.03, "reason": "1、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar；\n2、公司为柔性自动化装备与工业机器人系统应用供应商；产品主要应用在汽车电子、汽车内饰等领域；此前研发并制造特斯拉Model3车型的座椅驱动电机装配测试生产线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.84, "first_limit_up": 1789625868, "break_limit_up_times": 0}, {"code": "300434", "name": "金石亚药", "price": 12.49, "change_pct": 19.98, "reason": "公司拥有国内感冒药一线品牌“快克”和“小快克”，多潘立酮片完成集采接续采购，双氯芬酸钠缓释片中选第十二批国家集采，公司表示集采有助于产能提升和渠道拓展，综合影响可控且正向", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.14, "first_limit_up": 1789608834, "break_limit_up_times": 1}, {"code": "600371", "name": "万向德农", "price": 15.64, "change_pct": 9.99, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 27.29, "first_limit_up": 1789621365, "break_limit_up_times": 11}, {"code": "003001", "name": "中岩大地", "price": 20.32, "change_pct": 10.02, "reason": "公司拟跨界并购PCB刀具企业深圳市鑫寰宇精工科技", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 31.79, "first_limit_up": 1789609389, "break_limit_up_times": 25}, {"code": "000868", "name": "安凯客车", "price": 4.06, "change_pct": 10.03, "reason": "公司是国内新能源客车产品线种类、新能源客车运营城市数量和纯电动客车单车运营里程等均具有一定领先优势的客车企业", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 5.66, "first_limit_up": 1789609671, "break_limit_up_times": 0}, {"code": "600448", "name": "华纺股份", "price": 3.22, "change_pct": 9.9, "reason": "国内纺织印染行业销售十强之一，旗下有“华纺”、“蓝铂”、“霄霓”、“衣诺德”、“纺卫”等品牌", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.46, "first_limit_up": 1789610791, "break_limit_up_times": 2}, {"code": "002453", "name": "华软科技", "price": 4.85, "change_pct": 9.98, "reason": "公司光刻胶基材产品业务目前正处于客户接洽阶段，已有少量试订单；25年业绩同比减亏", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.52, "first_limit_up": 1789622235, "break_limit_up_times": 0}, {"code": "000504", "name": "南华生物", "price": 9.1, "change_pct": 10.04, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1789610556, "break_limit_up_times": 1}, {"code": "605288", "name": "凯迪股份", "price": 67.25, "change_pct": 9.99, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.61, "first_limit_up": 1789612794, "break_limit_up_times": 0}, {"code": "002796", "name": "世嘉科技", "price": 32.54, "change_pct": 10.01, "reason": "1、公司拟通过增资扩股方式取得光彩芯辰浙江科技有限公司不超过20%股权，布局光通信细分赛道；\n2、公司通过精密箱体系统业务为储能行业下游客户江苏阿诗特能源科技有限公司供应储能柜，在储能领域有产品供应和业务合作", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.47, "first_limit_up": 1789611018, "break_limit_up_times": 1}, {"code": "600593", "name": "大连圣亚", "price": 43.31, "change_pct": 10.01, "reason": "公司景区项目为大连景区和哈尔滨景区，包括圣亚海洋世界、圣亚极地世界、圣亚珊瑚世界、银河星海等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.9, "first_limit_up": 1789612235, "break_limit_up_times": 0}, {"code": "002640", "name": "跨境通", "price": 3.77, "change_pct": 9.91, "reason": "跨境电商龙头；公司主营跨境出口电商业务和跨境进口电商业务，通过全资收购环球易购等公司进入跨境电商行业，旗下品牌 ZAFUL 在欧美有忠实消费群体，业务覆盖全球 200 多个国家与地区，产品涵盖服饰家居、电子产品和母婴用品等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 19.29, "first_limit_up": 1789621308, "break_limit_up_times": 0}, {"code": "600293", "name": "三峡新材", "price": 3.4, "change_pct": 10.03, "reason": "公司正加速向汽车玻璃、电子玻璃等高附加值领域拓展", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1789609449, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};