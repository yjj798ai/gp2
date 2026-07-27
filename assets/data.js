const UPDATE_TIME = "2026-07-27 06:25";
const THS_HOT = [];
const THS_EVENTS = [
  {
    "title": "脑机接口迎重大突破：视网膜芯片获准在欧上市 可帮助患者恢复视力",
    "desc": "",
    "heat": 604027,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "爱朋医疗",
        "code": "300753",
        "chg": 19.989047
      }
    ]
  },
  {
    "title": "宁德时代：587Ah 储能大电芯已实现规模化交付，今明年储能市场仍将保持较快速增长",
    "desc": "",
    "heat": 514185,
    "direction": "宁德时代",
    "themes": [
      "宁德时代概念",
      "电池"
    ],
    "stocks": [
      {
        "name": "紫建电子",
        "code": "301121",
        "chg": 19.985826
      }
    ]
  },
  {
    "title": "中国已建成全球规模最大医疗服务体系 累计在研创新药数量超4000款",
    "desc": "",
    "heat": 469302,
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
        "name": "陇神戎发",
        "code": "300534",
        "chg": 20.035778
      }
    ]
  },
  {
    "title": "2026年暑期档电影票房突破55亿元",
    "desc": "",
    "heat": 429565,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": 10.070922
      }
    ]
  },
  {
    "title": "“巨无霸”来了！长鑫科技今日登陆科创板",
    "desc": "",
    "heat": 412025,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片",
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "N长鑫",
        "code": "688825",
        "chg": 473.672055
      }
    ]
  },
  {
    "title": "被罚没51.79亿元！携程回应：坚决服从",
    "desc": "",
    "heat": 390356,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "陕西旅游",
        "code": "603402",
        "chg": 10.003312
      }
    ]
  },
  {
    "title": "成立仅三年，营收暴涨至10亿元，智元机器人将赴港IPO",
    "desc": "",
    "heat": 240356,
    "direction": "智元机器人",
    "themes": [
      "智元"
    ],
    "stocks": [
      {
        "name": "汉威科技",
        "code": "300007",
        "chg": 7.601351
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+6.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+6.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "脑科学",
    "change": "+5.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+5.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+4.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+4.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+4.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "量子计算",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "拼多多概念股",
    "change": "+4.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+4.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "驱蚊概念",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "旅游",
    "change": "+4.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+4.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+4.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "盲盒",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": 10,
    "stock_cnt": 5745,
    "price": "5.59",
    "change": "3.52",
    "market_id": "17",
    "circulate_market_value": "14078470000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 3.22
      },
      {
        "name": "工业大麻",
        "change_pct": 2.89
      },
      {
        "name": "中药",
        "change_pct": 3.48
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "保健品",
        "change_pct": 2.77
      },
      {
        "name": "民营医院",
        "change_pct": 3.58
      },
      {
        "name": "医药",
        "change_pct": 3.2
      },
      {
        "name": "化学原料药",
        "change_pct": 3.42
      },
      {
        "name": "流感",
        "change_pct": 3.25
      },
      {
        "name": "振兴东北",
        "change_pct": 2.3
      },
      {
        "name": "食品",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 13,
    "hot_rank_chg": 0,
    "stock_cnt": 5745,
    "price": "11.83",
    "change": "2.60",
    "market_id": "33",
    "circulate_market_value": "11198739500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 2.84
      },
      {
        "name": "锂电池",
        "change_pct": 3.46
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 3.55
      },
      {
        "name": "举牌",
        "change_pct": 1.9
      },
      {
        "name": "纺织服装",
        "change_pct": 3.14
      },
      {
        "name": "山东国企改革",
        "change_pct": 2.29
      },
      {
        "name": "教育",
        "change_pct": 2.65
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.61
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "抗菌面料",
        "change_pct": 3.31
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.11
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 16,
    "hot_rank_chg": 2,
    "stock_cnt": 5745,
    "price": "10.51",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "7198324200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "数据中心",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.84
      },
      {
        "name": "核电",
        "change_pct": 2.49
      },
      {
        "name": "充电桩",
        "change_pct": 2.73
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.35
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.91
      },
      {
        "name": "智能电网",
        "change_pct": 2.88
      },
      {
        "name": "核聚变",
        "change_pct": 2.98
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 17,
    "hot_rank_chg": 20,
    "stock_cnt": 5745,
    "price": "6.30",
    "change": "0.16",
    "market_id": "17",
    "circulate_market_value": "78095361000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "核电",
        "change_pct": 2.49
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.67
      },
      {
        "name": "水电",
        "change_pct": 1.16
      },
      {
        "name": "火电",
        "change_pct": 1.36
      },
      {
        "name": "光伏",
        "change_pct": 2.73
      },
      {
        "name": "风电",
        "change_pct": 3.26
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      },
      {
        "name": "算电协同",
        "change_pct": 3.25
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 18,
    "hot_rank_chg": 38,
    "stock_cnt": 5745,
    "price": "7.62",
    "change": "1.20",
    "market_id": "17",
    "circulate_market_value": "15477167000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.67
      },
      {
        "name": "火电",
        "change_pct": 1.36
      },
      {
        "name": "风电",
        "change_pct": 3.26
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "碳中和",
        "change_pct": 2.08
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 22,
    "hot_rank_chg": -10,
    "stock_cnt": 5745,
    "price": "12.98",
    "change": "-4.56",
    "market_id": "33",
    "circulate_market_value": "10423878000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 2.03
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 2.12
      },
      {
        "name": "房地产",
        "change_pct": 2.45
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "安徽国企改革",
        "change_pct": 1.28
      },
      {
        "name": "住房租赁",
        "change_pct": 1.84
      },
      {
        "name": "物业管理",
        "change_pct": 2.47
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      },
      {
        "name": "旧改",
        "change_pct": 2.48
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 23,
    "hot_rank_chg": -1,
    "stock_cnt": 5745,
    "price": "5.90",
    "change": "1.90",
    "market_id": "33",
    "circulate_market_value": "208666090000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.59
      },
      {
        "name": "手机产业链",
        "change_pct": 2.35
      },
      {
        "name": "超高清视频",
        "change_pct": 2.02
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.6
      },
      {
        "name": "电竞",
        "change_pct": 3.89
      },
      {
        "name": "半导体",
        "change_pct": 1.27
      },
      {
        "name": "人工智能",
        "change_pct": 2.91
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.59
      },
      {
        "name": "VR&AR",
        "change_pct": 2.35
      },
      {
        "name": "OLED",
        "change_pct": 2.17
      },
      {
        "name": "京津冀",
        "change_pct": 2.39
      },
      {
        "name": "物联网",
        "change_pct": 2.61
      },
      {
        "name": "指纹识别",
        "change_pct": 1.58
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.64
      },
      {
        "name": "白马股",
        "change_pct": 0.6
      },
      {
        "name": "智能制造",
        "change_pct": 2.73
      },
      {
        "name": "小米概念股",
        "change_pct": 2.38
      },
      {
        "name": "国产芯片",
        "change_pct": 1.37
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.33
      },
      {
        "name": "全息概念",
        "change_pct": 2.64
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.65
      },
      {
        "name": "MicroLED",
        "change_pct": 2.27
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.61
      },
      {
        "name": "智能手表",
        "change_pct": 2.55
      },
      {
        "name": "MiniLED",
        "change_pct": 2.41
      },
      {
        "name": "传感器",
        "change_pct": 2.08
      },
      {
        "name": "大硅片",
        "change_pct": 1.57
      },
      {
        "name": "AI PC",
        "change_pct": 2.03
      },
      {
        "name": "华为产业链",
        "change_pct": 2.82
      },
      {
        "name": "回购",
        "change_pct": 2.05
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.65
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 31,
    "hot_rank_chg": -10,
    "stock_cnt": 5745,
    "price": "6.97",
    "change": "7.23",
    "market_id": "33",
    "circulate_market_value": "23187768000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.84
      },
      {
        "name": "核电",
        "change_pct": 2.49
      },
      {
        "name": "5G",
        "change_pct": 2.49
      },
      {
        "name": "一带一路",
        "change_pct": 2.09
      },
      {
        "name": "充电桩",
        "change_pct": 2.73
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.72
      },
      {
        "name": "风电",
        "change_pct": 3.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "特高压",
        "change_pct": 2.92
      },
      {
        "name": "智能电网",
        "change_pct": 2.88
      },
      {
        "name": "海洋经济",
        "change_pct": 2.15
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 39,
    "hot_rank_chg": 174,
    "stock_cnt": 5745,
    "price": "5.30",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6872698900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 3.48
      },
      {
        "name": "创新药",
        "change_pct": 2.87
      },
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "医疗器械",
        "change_pct": 3.51
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.59
      },
      {
        "name": "保健品",
        "change_pct": 2.77
      },
      {
        "name": "民营医院",
        "change_pct": 3.58
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 2.75
      },
      {
        "name": "医药",
        "change_pct": 3.2
      },
      {
        "name": "化学原料药",
        "change_pct": 3.42
      },
      {
        "name": "海南概念",
        "change_pct": 3.1
      },
      {
        "name": "脑科学",
        "change_pct": 5.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 2.4
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.85
      },
      {
        "name": "食品",
        "change_pct": 2.3
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      },
      {
        "name": "医疗信息化",
        "change_pct": 3.69
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 3.11
      },
      {
        "name": "自贸区",
        "change_pct": 2.39
      },
      {
        "name": "合成生物",
        "change_pct": 3.32
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 40,
    "hot_rank_chg": -10,
    "stock_cnt": 5745,
    "price": "10.29",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "7000489500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.7
      },
      {
        "name": "雄安新区",
        "change_pct": 2.21
      },
      {
        "name": "煤化工",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 45,
    "hot_rank_chg": -10,
    "stock_cnt": 5745,
    "price": "6.96",
    "change": "6.42",
    "market_id": "17",
    "circulate_market_value": "14221620000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 3.46
      },
      {
        "name": "军民融合",
        "change_pct": 2.86
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.72
      },
      {
        "name": "烧碱",
        "change_pct": 2.0
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "环氧丙烷",
        "change_pct": 2.4
      },
      {
        "name": "氟化工",
        "change_pct": 2.92
      },
      {
        "name": "双氧水",
        "change_pct": 2.39
      },
      {
        "name": "液氯",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 47,
    "hot_rank_chg": -30,
    "stock_cnt": 5745,
    "price": "8.45",
    "change": "4.20",
    "market_id": "33",
    "circulate_market_value": "5583396500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.84
      },
      {
        "name": "国产软件",
        "change_pct": 2.76
      },
      {
        "name": "人工智能",
        "change_pct": 2.91
      },
      {
        "name": "充电桩",
        "change_pct": 2.73
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.35
      },
      {
        "name": "军民融合",
        "change_pct": 2.86
      },
      {
        "name": "磁悬浮",
        "change_pct": 3.28
      },
      {
        "name": "人脸识别",
        "change_pct": 3.15
      },
      {
        "name": "水利",
        "change_pct": 2.54
      },
      {
        "name": "物联网",
        "change_pct": 2.61
      },
      {
        "name": "大数据",
        "change_pct": 2.77
      },
      {
        "name": "智慧城市",
        "change_pct": 2.87
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "智慧安防",
        "change_pct": 2.87
      },
      {
        "name": "无人机",
        "change_pct": 2.43
      },
      {
        "name": "虚拟电厂",
        "change_pct": 2.85
      },
      {
        "name": "信创",
        "change_pct": 2.61
      },
      {
        "name": "元宇宙",
        "change_pct": 3.05
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.56
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.61
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.51
      },
      {
        "name": "数字乡村",
        "change_pct": 2.86
      },
      {
        "name": "华为海思",
        "change_pct": 2.3
      },
      {
        "name": "闪存",
        "change_pct": 0.65
      },
      {
        "name": "UWB超宽带",
        "change_pct": 2.68
      },
      {
        "name": "智慧政务",
        "change_pct": 3.18
      },
      {
        "name": "特高压",
        "change_pct": 2.92
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.92
      },
      {
        "name": "华为产业链",
        "change_pct": 2.82
      },
      {
        "name": "时空大数据",
        "change_pct": 3.44
      },
      {
        "name": "服务器",
        "change_pct": 1.23
      },
      {
        "name": "智能电网",
        "change_pct": 2.88
      },
      {
        "name": "磁电存储",
        "change_pct": 2.29
      },
      {
        "name": "军工信息化",
        "change_pct": 3.55
      },
      {
        "name": "光纤概念",
        "change_pct": 2.62
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.71
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 50,
    "hot_rank_chg": 68,
    "stock_cnt": 5745,
    "price": "6.42",
    "change": "2.23",
    "market_id": "17",
    "circulate_market_value": "47991658000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.02
      },
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.67
      },
      {
        "name": "火电",
        "change_pct": 1.36
      },
      {
        "name": "振兴东北",
        "change_pct": 2.3
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 51,
    "hot_rank_chg": 132,
    "stock_cnt": 5745,
    "price": "10.50",
    "change": "-12.14",
    "market_id": "33",
    "circulate_market_value": "6123713200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.01
      },
      {
        "name": "一带一路",
        "change_pct": 2.09
      },
      {
        "name": "天然气",
        "change_pct": 0.68
      },
      {
        "name": "油气改革",
        "change_pct": 0.67
      },
      {
        "name": "页岩气",
        "change_pct": 0.8
      },
      {
        "name": "深地经济",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 55,
    "hot_rank_chg": -14,
    "stock_cnt": 5745,
    "price": "7.33",
    "change": "3.38",
    "market_id": "33",
    "circulate_market_value": "5294422400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 2.49
      },
      {
        "name": "充电桩",
        "change_pct": 2.73
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.88
      },
      {
        "name": "军民融合",
        "change_pct": 2.86
      },
      {
        "name": "光伏",
        "change_pct": 2.73
      },
      {
        "name": "风电",
        "change_pct": 3.26
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "特高压",
        "change_pct": 2.92
      },
      {
        "name": "自贸区",
        "change_pct": 2.39
      },
      {
        "name": "海洋经济",
        "change_pct": 2.15
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 56,
    "hot_rank_chg": -31,
    "stock_cnt": 5745,
    "price": "5.94",
    "change": "-2.14",
    "market_id": "33",
    "circulate_market_value": "6763618800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 2.78
      },
      {
        "name": "高铁轨交",
        "change_pct": 2.61
      },
      {
        "name": "航母",
        "change_pct": 1.85
      },
      {
        "name": "光伏",
        "change_pct": 2.73
      },
      {
        "name": "风电",
        "change_pct": 3.26
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "机器人",
        "change_pct": 2.75
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      },
      {
        "name": "宁夏概念",
        "change_pct": 2.64
      }
    ]
  },
  {
    "code": "600698",
    "name": "湖南天雁",
    "hot_rank": 59,
    "hot_rank_chg": -12,
    "stock_cnt": 5745,
    "price": "7.05",
    "change": "3.07",
    "market_id": "17",
    "circulate_market_value": "5854684800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "军工集团",
        "change_pct": 2.44
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.64
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 61,
    "hot_rank_chg": 4,
    "stock_cnt": 5745,
    "price": "3.73",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6622774200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "天然气",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": 1.73
      },
      {
        "name": "天然气",
        "change_pct": 0.68
      },
      {
        "name": "油气改革",
        "change_pct": 0.67
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 68,
    "hot_rank_chg": 181,
    "stock_cnt": 5745,
    "price": "3.06",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "7362764900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 3.46
      },
      {
        "name": "5G",
        "change_pct": 2.49
      },
      {
        "name": "一带一路",
        "change_pct": 2.09
      },
      {
        "name": "光通信",
        "change_pct": 2.59
      },
      {
        "name": "军民融合",
        "change_pct": 2.86
      },
      {
        "name": "光伏",
        "change_pct": 2.73
      },
      {
        "name": "军工",
        "change_pct": 2.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "储能",
        "change_pct": 2.94
      },
      {
        "name": "BIPV概念",
        "change_pct": 3.02
      },
      {
        "name": "低价股",
        "change_pct": 2.52
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.61
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 2.76
      },
      {
        "name": "华为产业链",
        "change_pct": 2.82
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 78,
    "hot_rank_chg": -24,
    "stock_cnt": 5745,
    "price": "10.91",
    "change": "-1.09",
    "market_id": "17",
    "circulate_market_value": "1766569900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 0.9
      },
      {
        "name": "央企改革",
        "change_pct": 2.01
      },
      {
        "name": "一带一路",
        "change_pct": 2.09
      },
      {
        "name": "石油化工",
        "change_pct": 1.26
      },
      {
        "name": "天然气",
        "change_pct": 0.68
      },
      {
        "name": "油气改革",
        "change_pct": 0.67
      },
      {
        "name": "可燃冰",
        "change_pct": 0.41
      },
      {
        "name": "中字头",
        "change_pct": 0.93
      },
      {
        "name": "页岩气",
        "change_pct": 0.8
      },
      {
        "name": "丁辛醇",
        "change_pct": 1.0
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 89,
    "hot_rank_chg": -50,
    "stock_cnt": 5745,
    "price": "6.95",
    "change": "9.62",
    "market_id": "33",
    "circulate_market_value": "5771628000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 3.72
      },
      {
        "name": "资产重组",
        "change_pct": 2.6
      },
      {
        "name": "半导体",
        "change_pct": 1.27
      },
      {
        "name": "小米概念股",
        "change_pct": 2.38
      },
      {
        "name": "国产芯片",
        "change_pct": 1.37
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 92,
    "hot_rank_chg": 47,
    "stock_cnt": 5745,
    "price": "5.73",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5918722100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.72
      },
      {
        "name": "锂电池",
        "change_pct": 3.46
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 3.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.46
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.94
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 93,
    "hot_rank_chg": 136,
    "stock_cnt": 5745,
    "price": "8.17",
    "change": "-9.32",
    "market_id": "17",
    "circulate_market_value": "41047790000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.6
      },
      {
        "name": "期货概念",
        "change_pct": 1.77
      },
      {
        "name": "券商",
        "change_pct": 0.6
      },
      {
        "name": "安徽国企改革",
        "change_pct": 1.28
      },
      {
        "name": "大金融",
        "change_pct": 0.7
      },
      {
        "name": "国企改革",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 94,
    "hot_rank_chg": -17,
    "stock_cnt": 5745,
    "price": "5.04",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "101379500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.59
      },
      {
        "name": "手机产业链",
        "change_pct": 2.35
      },
      {
        "name": "超高清视频",
        "change_pct": 2.02
      },
      {
        "name": "电竞",
        "change_pct": 3.89
      },
      {
        "name": "半导体",
        "change_pct": 1.27
      },
      {
        "name": "OLED",
        "change_pct": 2.17
      },
      {
        "name": "光伏",
        "change_pct": 2.73
      },
      {
        "name": "黑色家电",
        "change_pct": 2.38
      },
      {
        "name": "家电",
        "change_pct": 2.59
      },
      {
        "name": "智能制造",
        "change_pct": 2.73
      },
      {
        "name": "工业互联网",
        "change_pct": 2.41
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 2.38
      },
      {
        "name": "国产芯片",
        "change_pct": 1.37
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.11
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.33
      },
      {
        "name": "MicroLED",
        "change_pct": 2.27
      },
      {
        "name": "MiniLED",
        "change_pct": 2.41
      },
      {
        "name": "华为产业链",
        "change_pct": 2.82
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "603928",
    "name": "兴业股份",
    "hot_rank": 97,
    "hot_rank_chg": 121,
    "stock_cnt": 5745,
    "price": "11.04",
    "change": "2.22",
    "market_id": "17",
    "circulate_market_value": "3761372200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.8
      },
      {
        "name": "锂电池",
        "change_pct": 3.46
      },
      {
        "name": "强势人气股",
        "change_pct": 2.85
      },
      {
        "name": "大飞机",
        "change_pct": 2.62
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.88
      },
      {
        "name": "智能制造",
        "change_pct": 2.73
      },
      {
        "name": "3D打印",
        "change_pct": 3.36
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.1
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "49.69", "change": "473.79", "market_id": "17", "circulate_market_value": "223756010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5745, "price": "14.33", "change": "9.98", "market_id": "33", "circulate_market_value": "13374527000.00", "change_type": "1", "change_section": "8", "change_days": "7", "change_reason": "风电光伏"}, {"code": "601606", "name": "长城军工", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5745, "price": "35.26", "change": "10.02", "market_id": "17", "circulate_market_value": "25536293000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "军工"}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5745, "price": "40.42", "change": "-2.48", "market_id": "33", "circulate_market_value": "115604137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "73.70", "change": "-3.80", "market_id": "33", "circulate_market_value": "111836229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 10, "stock_cnt": 5745, "price": "425.86", "change": "-6.81", "market_id": "17", "circulate_market_value": "284683980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 7, "hot_rank_chg": 19, "stock_cnt": 5745, "price": "15.76", "change": "6.77", "market_id": "17", "circulate_market_value": "23209859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "398.98", "change": "4.12", "market_id": "33", "circulate_market_value": "1699687100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": 10, "stock_cnt": 5745, "price": "5.59", "change": "3.52", "market_id": "17", "circulate_market_value": "14078470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 3.22}, {"name": "工业大麻", "change_pct": 2.89}, {"name": "中药", "change_pct": 3.48}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "保健品", "change_pct": 2.77}, {"name": "民营医院", "change_pct": 3.58}, {"name": "医药", "change_pct": 3.2}, {"name": "化学原料药", "change_pct": 3.42}, {"name": "流感", "change_pct": 3.25}, {"name": "振兴东北", "change_pct": 2.3}, {"name": "食品", "change_pct": 2.3}]}, {"code": "001309", "name": "德明利", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "391.70", "change": "-2.06", "market_id": "33", "circulate_market_value": "64657140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "18.26", "change": "-1.77", "market_id": "33", "circulate_market_value": "60671621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "81.30", "change": "-1.95", "market_id": "17", "circulate_market_value": "145479400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 13, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "11.83", "change": "2.60", "market_id": "33", "circulate_market_value": "11198739500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 2.84}, {"name": "锂电池", "change_pct": 3.46}, {"name": "优化生育（三孩）", "change_pct": 3.55}, {"name": "举牌", "change_pct": 1.9}, {"name": "纺织服装", "change_pct": 3.14}, {"name": "山东国企改革", "change_pct": 2.29}, {"name": "教育", "change_pct": 2.65}, {"name": "外贸受益概念", "change_pct": 2.61}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "抗菌面料", "change_pct": 3.31}, {"name": "国企改革", "change_pct": 2.14}, {"name": "新冠病毒防治", "change_pct": 3.11}]}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5745, "price": "41.95", "change": "-0.12", "market_id": "33", "circulate_market_value": "66035827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 15, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "17.92", "change": "10.01", "market_id": "17", "circulate_market_value": "37480436000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "000533", "name": "顺钠股份", "hot_rank": 16, "hot_rank_chg": 2, "stock_cnt": 5745, "price": "10.51", "change": "10.05", "market_id": "33", "circulate_market_value": "7198324200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数据中心", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.84}, {"name": "核电", "change_pct": 2.49}, {"name": "充电桩", "change_pct": 2.73}, {"name": "云计算数据中心", "change_pct": 2.35}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "储能", "change_pct": 2.94}, {"name": "阿里巴巴概念股", "change_pct": 2.91}, {"name": "智能电网", "change_pct": 2.88}, {"name": "核聚变", "change_pct": 2.98}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 17, "hot_rank_chg": 20, "stock_cnt": 5745, "price": "6.30", "change": "0.16", "market_id": "17", "circulate_market_value": "78095361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.01}, {"name": "核电", "change_pct": 2.49}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "电力体制改革", "change_pct": 1.67}, {"name": "水电", "change_pct": 1.16}, {"name": "火电", "change_pct": 1.36}, {"name": "光伏", "change_pct": 2.73}, {"name": "风电", "change_pct": 3.26}, {"name": "国企改革", "change_pct": 2.14}, {"name": "算电协同", "change_pct": 3.25}]}, {"code": "600744", "name": "华银电力", "hot_rank": 18, "hot_rank_chg": 38, "stock_cnt": 5745, "price": "7.62", "change": "1.20", "market_id": "17", "circulate_market_value": "15477167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.01}, {"name": "电力体制改革", "change_pct": 1.67}, {"name": "火电", "change_pct": 1.36}, {"name": "风电", "change_pct": 3.26}, {"name": "储能", "change_pct": 2.94}, {"name": "碳中和", "change_pct": 2.08}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 19, "hot_rank_chg": 65, "stock_cnt": 5745, "price": "20.69", "change": "9.99", "market_id": "33", "circulate_market_value": "8707697500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "脑机接口"}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": 8, "stock_cnt": 5745, "price": "204.02", "change": "2.42", "market_id": "33", "circulate_market_value": "282837360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 21, "hot_rank_chg": 223, "stock_cnt": 5745, "price": "16.87", "change": "9.97", "market_id": "33", "circulate_market_value": "7630955600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "002208", "name": "合肥城建", "hot_rank": 22, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "12.98", "change": "-4.56", "market_id": "33", "circulate_market_value": "10423878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 2.03}, {"name": "蚂蚁集团概念股", "change_pct": 2.12}, {"name": "房地产", "change_pct": 2.45}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "安徽国企改革", "change_pct": 1.28}, {"name": "住房租赁", "change_pct": 1.84}, {"name": "物业管理", "change_pct": 2.47}, {"name": "国企改革", "change_pct": 2.14}, {"name": "旧改", "change_pct": 2.48}]}, {"code": "000725", "name": "京东方A", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5745, "price": "5.90", "change": "1.90", "market_id": "33", "circulate_market_value": "208666090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.59}, {"name": "手机产业链", "change_pct": 2.35}, {"name": "超高清视频", "change_pct": 2.02}, {"name": "苹果产业链", "change_pct": 2.6}, {"name": "电竞", "change_pct": 3.89}, {"name": "半导体", "change_pct": 1.27}, {"name": "人工智能", "change_pct": 2.91}, {"name": "互联网医疗", "change_pct": 3.59}, {"name": "VR&AR", "change_pct": 2.35}, {"name": "OLED", "change_pct": 2.17}, {"name": "京津冀", "change_pct": 2.39}, {"name": "物联网", "change_pct": 2.61}, {"name": "指纹识别", "change_pct": 1.58}, {"name": "汽车零部件", "change_pct": 2.64}, {"name": "白马股", "change_pct": 0.6}, {"name": "智能制造", "change_pct": 2.73}, {"name": "小米概念股", "change_pct": 2.38}, {"name": "国产芯片", "change_pct": 1.37}, {"name": "液晶面板/LCD", "change_pct": 2.33}, {"name": "全息概念", "change_pct": 2.64}, {"name": "理想汽车概念股", "change_pct": 2.65}, {"name": "MicroLED", "change_pct": 2.27}, {"name": "钙钛矿电池", "change_pct": 2.61}, {"name": "智能手表", "change_pct": 2.55}, {"name": "MiniLED", "change_pct": 2.41}, {"name": "传感器", "change_pct": 2.08}, {"name": "大硅片", "change_pct": 1.57}, {"name": "AI PC", "change_pct": 2.03}, {"name": "华为产业链", "change_pct": 2.82}, {"name": "回购", "change_pct": 2.05}, {"name": "智能眼镜/MR头显", "change_pct": 2.65}, {"name": "玻璃基板封装", "change_pct": 1.64}]}, {"code": "002879", "name": "长缆科技", "hot_rank": 24, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "19.86", "change": "10.03", "market_id": "33", "circulate_market_value": "2723581000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "回购增持"}, {"code": "601179", "name": "中国西电", "hot_rank": 25, "hot_rank_chg": 21, "stock_cnt": 5745, "price": "14.05", "change": "3.69", "market_id": "17", "circulate_market_value": "72018647000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 26, "hot_rank_chg": -15, "stock_cnt": 5745, "price": "46.21", "change": "5.02", "market_id": "17", "circulate_market_value": "39119229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 27, "hot_rank_chg": -12, "stock_cnt": 5745, "price": "24.88", "change": "9.99", "market_id": "17", "circulate_market_value": "9528150500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "存储芯片"}, {"code": "300308", "name": "中际旭创", "hot_rank": 28, "hot_rank_chg": 1, "stock_cnt": 5745, "price": "1047.00", "change": "0.06", "market_id": "33", "circulate_market_value": "1162217940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 29, "hot_rank_chg": 9, "stock_cnt": 5745, "price": "32.16", "change": "5.21", "market_id": "33", "circulate_market_value": "34650007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 30, "hot_rank_chg": 4, "stock_cnt": 5745, "price": "16.18", "change": "-0.06", "market_id": "33", "circulate_market_value": "11249355900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 31, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "6.97", "change": "7.23", "market_id": "33", "circulate_market_value": "23187768000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.84}, {"name": "核电", "change_pct": 2.49}, {"name": "5G", "change_pct": 2.49}, {"name": "一带一路", "change_pct": 2.09}, {"name": "充电桩", "change_pct": 2.73}, {"name": "氢能源/燃料电池", "change_pct": 2.72}, {"name": "风电", "change_pct": 3.26}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "储能", "change_pct": 2.94}, {"name": "特高压", "change_pct": 2.92}, {"name": "智能电网", "change_pct": 2.88}, {"name": "海洋经济", "change_pct": 2.15}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 32, "hot_rank_chg": -12, "stock_cnt": 5745, "price": "169.35", "change": "10.00", "market_id": "33", "circulate_market_value": "53941827000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HBM前驱体"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 33, "hot_rank_chg": -2, "stock_cnt": 5745, "price": "30.78", "change": "-6.50", "market_id": "33", "circulate_market_value": "23313237000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600539", "name": "狮头股份", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "17.58", "change": "-5.02", "market_id": "17", "circulate_market_value": "4043400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 35, "hot_rank_chg": 9, "stock_cnt": 5745, "price": "31.58", "change": "0.16", "market_id": "17", "circulate_market_value": "650604630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "83.81", "change": "-1.77", "market_id": "33", "circulate_market_value": "122935173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002415", "name": "海康威视", "hot_rank": 37, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "36.76", "change": "3.52", "market_id": "33", "circulate_market_value": "332443940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 38, "hot_rank_chg": 7, "stock_cnt": 5745, "price": "54.21", "change": "3.40", "market_id": "17", "circulate_market_value": "133012164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 39, "hot_rank_chg": 174, "stock_cnt": 5745, "price": "5.30", "change": "9.96", "market_id": "33", "circulate_market_value": "6872698900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 3.48}, {"name": "创新药", "change_pct": 2.87}, {"name": "央企改革", "change_pct": 2.01}, {"name": "医疗器械", "change_pct": 3.51}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "互联网医疗", "change_pct": 3.59}, {"name": "保健品", "change_pct": 2.77}, {"name": "民营医院", "change_pct": 3.58}, {"name": "CAR-T疗法", "change_pct": 2.75}, {"name": "医药", "change_pct": 3.2}, {"name": "化学原料药", "change_pct": 3.42}, {"name": "海南概念", "change_pct": 3.1}, {"name": "脑科学", "change_pct": 5.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 2.4}, {"name": "海南自由贸易港", "change_pct": 2.85}, {"name": "食品", "change_pct": 2.3}, {"name": "国企改革", "change_pct": 2.14}, {"name": "医疗信息化", "change_pct": 3.69}, {"name": "新冠病毒防治", "change_pct": 3.11}, {"name": "自贸区", "change_pct": 2.39}, {"name": "合成生物", "change_pct": 3.32}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 40, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "10.29", "change": "-9.97", "market_id": "17", "circulate_market_value": "7000489500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.7}, {"name": "雄安新区", "change_pct": 2.21}, {"name": "煤化工", "change_pct": 1.18}]}, {"code": "603118", "name": "共进股份", "hot_rank": 41, "hot_rank_chg": 22, "stock_cnt": 5745, "price": "15.73", "change": "-0.19", "market_id": "17", "circulate_market_value": "12383857900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 42, "hot_rank_chg": 36, "stock_cnt": 5745, "price": "481.96", "change": "1.24", "market_id": "33", "circulate_market_value": "604495030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5745, "price": "77.27", "change": "-1.04", "market_id": "33", "circulate_market_value": "50460063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301234", "name": "五洲医疗", "hot_rank": 44, "hot_rank_chg": 42, "stock_cnt": 5745, "price": "70.50", "change": "20.00", "market_id": "33", "circulate_market_value": "2832028200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "跨界并购"}, {"code": "601678", "name": "滨化股份", "hot_rank": 45, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "6.96", "change": "6.42", "market_id": "17", "circulate_market_value": "14221620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 3.46}, {"name": "军民融合", "change_pct": 2.86}, {"name": "氢能源/燃料电池", "change_pct": 2.72}, {"name": "烧碱", "change_pct": 2.0}, {"name": "军工", "change_pct": 2.75}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "环氧丙烷", "change_pct": 2.4}, {"name": "氟化工", "change_pct": 2.92}, {"name": "双氧水", "change_pct": 2.39}, {"name": "液氯", "change_pct": 2.16}]}, {"code": "000636", "name": "风华高科", "hot_rank": 46, "hot_rank_chg": 22, "stock_cnt": 5745, "price": "44.24", "change": "9.99", "market_id": "33", "circulate_market_value": "51186245000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 47, "hot_rank_chg": -30, "stock_cnt": 5745, "price": "8.45", "change": "4.20", "market_id": "33", "circulate_market_value": "5583396500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.84}, {"name": "国产软件", "change_pct": 2.76}, {"name": "人工智能", "change_pct": 2.91}, {"name": "充电桩", "change_pct": 2.73}, {"name": "云计算数据中心", "change_pct": 2.35}, {"name": "军民融合", "change_pct": 2.86}, {"name": "磁悬浮", "change_pct": 3.28}, {"name": "人脸识别", "change_pct": 3.15}, {"name": "水利", "change_pct": 2.54}, {"name": "物联网", "change_pct": 2.61}, {"name": "大数据", "change_pct": 2.77}, {"name": "智慧城市", "change_pct": 2.87}, {"name": "军工", "change_pct": 2.75}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "储能", "change_pct": 2.94}, {"name": "智慧安防", "change_pct": 2.87}, {"name": "无人机", "change_pct": 2.43}, {"name": "虚拟电厂", "change_pct": 2.85}, {"name": "信创", "change_pct": 2.61}, {"name": "元宇宙", "change_pct": 3.05}, {"name": "东数西算/算力", "change_pct": 2.56}, {"name": "新型城镇化", "change_pct": 2.61}, {"name": "AIGC概念", "change_pct": 3.51}, {"name": "数字乡村", "change_pct": 2.86}, {"name": "华为海思", "change_pct": 2.3}, {"name": "闪存", "change_pct": 0.65}, {"name": "UWB超宽带", "change_pct": 2.68}, {"name": "智慧政务", "change_pct": 3.18}, {"name": "特高压", "change_pct": 2.92}, {"name": "华为云·鲲鹏", "change_pct": 2.92}, {"name": "华为产业链", "change_pct": 2.82}, {"name": "时空大数据", "change_pct": 3.44}, {"name": "服务器", "change_pct": 1.23}, {"name": "智能电网", "change_pct": 2.88}, {"name": "磁电存储", "change_pct": 2.29}, {"name": "军工信息化", "change_pct": 3.55}, {"name": "光纤概念", "change_pct": 2.62}, {"name": "雅江电站概念股", "change_pct": 1.71}]}, {"code": "603629", "name": "利通电子", "hot_rank": 48, "hot_rank_chg": 4, "stock_cnt": 5745, "price": "106.20", "change": "-2.24", "market_id": "17", "circulate_market_value": "38308825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 49, "hot_rank_chg": -9, "stock_cnt": 5745, "price": "36.08", "change": "-3.30", "market_id": "33", "circulate_market_value": "179306780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 50, "hot_rank_chg": 68, "stock_cnt": 5745, "price": "6.42", "change": "2.23", "market_id": "17", "circulate_market_value": "47991658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.02}, {"name": "央企改革", "change_pct": 2.01}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "电力体制改革", "change_pct": 1.67}, {"name": "火电", "change_pct": 1.36}, {"name": "振兴东北", "change_pct": 2.3}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "300164", "name": "通源石油", "hot_rank": 51, "hot_rank_chg": 132, "stock_cnt": 5745, "price": "10.50", "change": "-12.14", "market_id": "33", "circulate_market_value": "6123713200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.01}, {"name": "一带一路", "change_pct": 2.09}, {"name": "天然气", "change_pct": 0.68}, {"name": "油气改革", "change_pct": 0.67}, {"name": "页岩气", "change_pct": 0.8}, {"name": "深地经济", "change_pct": 0.16}]}, {"code": "001896", "name": "豫能控股", "hot_rank": 52, "hot_rank_chg": 47, "stock_cnt": 5745, "price": "14.40", "change": "0.07", "market_id": "33", "circulate_market_value": "21971251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 53, "hot_rank_chg": -26, "stock_cnt": 5745, "price": "169.50", "change": "-2.54", "market_id": "33", "circulate_market_value": "5225917700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 54, "hot_rank_chg": 105, "stock_cnt": 5745, "price": "48.71", "change": "7.56", "market_id": "17", "circulate_market_value": "30576081000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5745, "price": "7.33", "change": "3.38", "market_id": "33", "circulate_market_value": "5294422400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": 2.49}, {"name": "充电桩", "change_pct": 2.73}, {"name": "福建自贸/海西概念", "change_pct": 2.88}, {"name": "军民融合", "change_pct": 2.86}, {"name": "光伏", "change_pct": 2.73}, {"name": "风电", "change_pct": 3.26}, {"name": "军工", "change_pct": 2.75}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "特高压", "change_pct": 2.92}, {"name": "自贸区", "change_pct": 2.39}, {"name": "海洋经济", "change_pct": 2.15}]}, {"code": "000595", "name": "新能股份", "hot_rank": 56, "hot_rank_chg": -31, "stock_cnt": 5745, "price": "5.94", "change": "-2.14", "market_id": "33", "circulate_market_value": "6763618800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 2.78}, {"name": "高铁轨交", "change_pct": 2.61}, {"name": "航母", "change_pct": 1.85}, {"name": "光伏", "change_pct": 2.73}, {"name": "风电", "change_pct": 3.26}, {"name": "军工", "change_pct": 2.75}, {"name": "机器人", "change_pct": 2.75}, {"name": "储能", "change_pct": 2.94}, {"name": "国企改革", "change_pct": 2.14}, {"name": "宁夏概念", "change_pct": 2.64}]}, {"code": "603538", "name": "美诺华", "hot_rank": 57, "hot_rank_chg": 93, "stock_cnt": 5745, "price": "27.38", "change": "4.62", "market_id": "17", "circulate_market_value": "9224868300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 58, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "225.54", "change": "-3.48", "market_id": "17", "circulate_market_value": "258190190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600698", "name": "湖南天雁", "hot_rank": 59, "hot_rank_chg": -12, "stock_cnt": 5745, "price": "7.05", "change": "3.07", "market_id": "17", "circulate_market_value": "5854684800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.01}, {"name": "军工集团", "change_pct": 2.44}, {"name": "汽车零部件", "change_pct": 2.64}, {"name": "军工", "change_pct": 2.75}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "601138", "name": "工业富联", "hot_rank": 60, "hot_rank_chg": 12, "stock_cnt": 5745, "price": "60.83", "change": "0.96", "market_id": "17", "circulate_market_value": "1207116130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600617", "name": "国新能源", "hot_rank": 61, "hot_rank_chg": 4, "stock_cnt": 5745, "price": "3.73", "change": "10.03", "market_id": "17", "circulate_market_value": "6622774200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "天然气", "xgb_concepts": [{"name": "山西国企改革", "change_pct": 1.73}, {"name": "天然气", "change_pct": 0.68}, {"name": "油气改革", "change_pct": 0.67}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 62, "hot_rank_chg": -2, "stock_cnt": 5745, "price": "15.40", "change": "10.00", "market_id": "17", "circulate_market_value": "3730958000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购欧康诺"}, {"code": "600522", "name": "中天科技", "hot_rank": 63, "hot_rank_chg": 22, "stock_cnt": 5745, "price": "32.08", "change": "2.20", "market_id": "17", "circulate_market_value": "109487425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002265", "name": "建设工业", "hot_rank": 64, "hot_rank_chg": -16, "stock_cnt": 5745, "price": "19.65", "change": "1.60", "market_id": "33", "circulate_market_value": "20299244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 65, "hot_rank_chg": -14, "stock_cnt": 5745, "price": "68.32", "change": "-10.00", "market_id": "17", "circulate_market_value": "28446242000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 66, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "95.70", "change": "-1.89", "market_id": "17", "circulate_market_value": "140014300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 67, "hot_rank_chg": -35, "stock_cnt": 5745, "price": "140.82", "change": "-2.05", "market_id": "17", "circulate_market_value": "281578400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002309", "name": "中利集团", "hot_rank": 68, "hot_rank_chg": 181, "stock_cnt": 5745, "price": "3.06", "change": "10.07", "market_id": "33", "circulate_market_value": "7362764900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "锂电池", "change_pct": 3.46}, {"name": "5G", "change_pct": 2.49}, {"name": "一带一路", "change_pct": 2.09}, {"name": "光通信", "change_pct": 2.59}, {"name": "军民融合", "change_pct": 2.86}, {"name": "光伏", "change_pct": 2.73}, {"name": "军工", "change_pct": 2.75}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "储能", "change_pct": 2.94}, {"name": "BIPV概念", "change_pct": 3.02}, {"name": "低价股", "change_pct": 2.52}, {"name": "钙钛矿电池", "change_pct": 2.61}, {"name": "异质结电池HJT", "change_pct": 2.76}, {"name": "华为产业链", "change_pct": 2.82}]}, {"code": "301308", "name": "江波龙", "hot_rank": 69, "hot_rank_chg": 44, "stock_cnt": 5745, "price": "368.59", "change": "-0.38", "market_id": "33", "circulate_market_value": "103887789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 70, "hot_rank_chg": 9, "stock_cnt": 5745, "price": "71.42", "change": "5.67", "market_id": "33", "circulate_market_value": "33229749000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 71, "hot_rank_chg": 75, "stock_cnt": 5745, "price": "19.24", "change": "1.05", "market_id": "17", "circulate_market_value": "335946600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 72, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "37.92", "change": "2.93", "market_id": "33", "circulate_market_value": "57206608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 73, "hot_rank_chg": 218, "stock_cnt": 5745, "price": "16.21", "change": "3.12", "market_id": "33", "circulate_market_value": "19070560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 74, "hot_rank_chg": 0, "stock_cnt": 5745, "price": "276.69", "change": "12.63", "market_id": "17", "circulate_market_value": "40111982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600089", "name": "特变电工", "hot_rank": 75, "hot_rank_chg": 36, "stock_cnt": 5745, "price": "20.66", "change": "1.32", "market_id": "17", "circulate_market_value": "104390695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 76, "hot_rank_chg": -15, "stock_cnt": 5745, "price": "39.75", "change": "6.40", "market_id": "17", "circulate_market_value": "157870580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300458", "name": "全志科技", "hot_rank": 77, "hot_rank_chg": 14, "stock_cnt": 5745, "price": "40.50", "change": "-1.22", "market_id": "33", "circulate_market_value": "32967267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 78, "hot_rank_chg": -24, "stock_cnt": 5745, "price": "10.91", "change": "-1.09", "market_id": "17", "circulate_market_value": "1766569900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": 0.9}, {"name": "央企改革", "change_pct": 2.01}, {"name": "一带一路", "change_pct": 2.09}, {"name": "石油化工", "change_pct": 1.26}, {"name": "天然气", "change_pct": 0.68}, {"name": "油气改革", "change_pct": 0.67}, {"name": "可燃冰", "change_pct": 0.41}, {"name": "中字头", "change_pct": 0.93}, {"name": "页岩气", "change_pct": 0.8}, {"name": "丁辛醇", "change_pct": 1.0}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 79, "hot_rank_chg": 88, "stock_cnt": 5745, "price": "61.37", "change": "14.20", "market_id": "33", "circulate_market_value": "2006703400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5745, "price": "19.22", "change": "6.96", "market_id": "33", "circulate_market_value": "15540198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 81, "hot_rank_chg": 14, "stock_cnt": 5745, "price": "34.80", "change": "-0.63", "market_id": "33", "circulate_market_value": "140161220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 82, "hot_rank_chg": 19, "stock_cnt": 5745, "price": "123.80", "change": "-0.97", "market_id": "17", "circulate_market_value": "306192090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603399", "name": "永杉锂业", "hot_rank": 83, "hot_rank_chg": 59, "stock_cnt": 5745, "price": "14.30", "change": "5.54", "market_id": "17", "circulate_market_value": "7325756300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 84, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "24.57", "change": "-1.01", "market_id": "33", "circulate_market_value": "16381221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 85, "hot_rank_chg": 226, "stock_cnt": 5745, "price": "13.42", "change": "20.04", "market_id": "33", "circulate_market_value": "4053531000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中医药"}, {"code": "301165", "name": "锐捷网络", "hot_rank": 86, "hot_rank_chg": -28, "stock_cnt": 5745, "price": "124.98", "change": "-5.32", "market_id": "33", "circulate_market_value": "139182270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 87, "hot_rank_chg": -25, "stock_cnt": 5745, "price": "27.27", "change": "2.87", "market_id": "17", "circulate_market_value": "4988592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920176", "name": "维琪科技", "hot_rank": 88, "hot_rank_chg": 3098, "stock_cnt": 5745, "price": "163.20", "change": "636.46", "market_id": "151", "circulate_market_value": "1296950400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000670", "name": "盈方微", "hot_rank": 89, "hot_rank_chg": -50, "stock_cnt": 5745, "price": "6.95", "change": "9.62", "market_id": "33", "circulate_market_value": "5771628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 3.72}, {"name": "资产重组", "change_pct": 2.6}, {"name": "半导体", "change_pct": 1.27}, {"name": "小米概念股", "change_pct": 2.38}, {"name": "国产芯片", "change_pct": 1.37}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 90, "hot_rank_chg": 31, "stock_cnt": 5745, "price": "45.03", "change": "2.64", "market_id": "33", "circulate_market_value": "66451851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603619", "name": "中曼石油", "hot_rank": 91, "hot_rank_chg": 35, "stock_cnt": 5745, "price": "20.43", "change": "-10.00", "market_id": "17", "circulate_market_value": "9445574800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 92, "hot_rank_chg": 47, "stock_cnt": 5745, "price": "5.73", "change": "9.98", "market_id": "33", "circulate_market_value": "5918722100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.72}, {"name": "锂电池", "change_pct": 3.46}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "铜箔/覆铜板", "change_pct": 3.39}, {"name": "粤港澳大湾区", "change_pct": 2.46}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.94}]}, {"code": "600909", "name": "华安证券", "hot_rank": 93, "hot_rank_chg": 136, "stock_cnt": 5745, "price": "8.17", "change": "-9.32", "market_id": "17", "circulate_market_value": "41047790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.6}, {"name": "期货概念", "change_pct": 1.77}, {"name": "券商", "change_pct": 0.6}, {"name": "安徽国企改革", "change_pct": 1.28}, {"name": "大金融", "change_pct": 0.7}, {"name": "国企改革", "change_pct": 2.14}]}, {"code": "000100", "name": "TCL科技", "hot_rank": 94, "hot_rank_chg": -17, "stock_cnt": 5745, "price": "5.04", "change": "0.00", "market_id": "33", "circulate_market_value": "101379500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.59}, {"name": "手机产业链", "change_pct": 2.35}, {"name": "超高清视频", "change_pct": 2.02}, {"name": "电竞", "change_pct": 3.89}, {"name": "半导体", "change_pct": 1.27}, {"name": "OLED", "change_pct": 2.17}, {"name": "光伏", "change_pct": 2.73}, {"name": "黑色家电", "change_pct": 2.38}, {"name": "家电", "change_pct": 2.59}, {"name": "智能制造", "change_pct": 2.73}, {"name": "工业互联网", "change_pct": 2.41}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 2.38}, {"name": "国产芯片", "change_pct": 1.37}, {"name": "腾讯概念股", "change_pct": 3.11}, {"name": "液晶面板/LCD", "change_pct": 2.33}, {"name": "MicroLED", "change_pct": 2.27}, {"name": "MiniLED", "change_pct": 2.41}, {"name": "华为产业链", "change_pct": 2.82}, {"name": "玻璃基板封装", "change_pct": 1.64}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 95, "hot_rank_chg": 97, "stock_cnt": 5745, "price": "17.95", "change": "6.09", "market_id": "33", "circulate_market_value": "30764967000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 96, "hot_rank_chg": 13, "stock_cnt": 5745, "price": "189.39", "change": "1.43", "market_id": "33", "circulate_market_value": "147716650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 97, "hot_rank_chg": 121, "stock_cnt": 5745, "price": "11.04", "change": "2.22", "market_id": "17", "circulate_market_value": "3761372200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.8}, {"name": "锂电池", "change_pct": 3.46}, {"name": "强势人气股", "change_pct": 2.85}, {"name": "大飞机", "change_pct": 2.62}, {"name": "新能源汽车", "change_pct": 2.88}, {"name": "智能制造", "change_pct": 2.73}, {"name": "3D打印", "change_pct": 3.36}, {"name": "光刻机（胶）", "change_pct": 2.1}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 98, "hot_rank_chg": 2, "stock_cnt": 5745, "price": "13.97", "change": "10.00", "market_id": "33", "circulate_market_value": "14841781000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "新股"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 99, "hot_rank_chg": 23, "stock_cnt": 5745, "price": "31.12", "change": "3.66", "market_id": "33", "circulate_market_value": "24348432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 100, "hot_rank_chg": 91, "stock_cnt": 5745, "price": "34.77", "change": "3.60", "market_id": "17", "circulate_market_value": "50833559000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};