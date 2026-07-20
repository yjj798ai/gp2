const UPDATE_TIME = "2026-07-20 09:55";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -6.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": -7.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续204天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -7.65,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "算力租赁",
    "rise": -1.16,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续115天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": -3.81,
    "rate": 0,
    "tag": "",
    "hotTag": "连续180天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -4.25,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续415天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "白酒概念",
    "rise": 0.88,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "煤炭概念",
    "rise": 2.72,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "煤炭ETF",
    "code": "885914"
  },
  {
    "name": "ST板块",
    "rise": -4.99,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -5.78,
    "rate": 0,
    "tag": "",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "国家大基金持股",
    "rise": -6.04,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "猪肉",
    "rise": -1.05,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "绿色电力",
    "rise": 0.34,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "电力ETF",
    "code": "885936"
  },
  {
    "name": "AI应用",
    "rise": -0.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "先进封装",
    "rise": -7.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续44天上榜",
    "rankChg": -2,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "同花顺中特估100",
    "rise": 2.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "基建ETF",
    "code": "886045"
  },
  {
    "name": "人工智能",
    "rise": -1.74,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "芯片概念",
    "rise": -5.29,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "液冷服务器",
    "rise": -4.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "证监会今开座谈会 促进市场稳定健康发展 资深业内人士认为，应理性看待近期市场调整，相信中国资产的内在价值与支撑力",
    "desc": "",
    "heat": 198254,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "中国太保",
        "code": "601601",
        "chg": 6.319328
      }
    ]
  },
  {
    "title": "茅台调价背后：市场化改革持续深化 消费需求支撑价格体系",
    "desc": "",
    "heat": 179378,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "威龙股份",
        "code": "603779",
        "chg": 10.012674
      }
    ]
  },
  {
    "title": "“工业维生素”价格暴涨，钼铁一天跳涨1500元",
    "desc": "",
    "heat": 130426,
    "direction": "钼铁",
    "themes": [
      "金属钼"
    ],
    "stocks": [
      {
        "name": "兖矿能源",
        "code": "600188",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "月之暗面Kimi称算力紧缺：暂停C端新用户订阅 将已有算力全部投入于服务已订阅用户",
    "desc": "",
    "heat": 123831,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "三七互娱",
        "code": "002555",
        "chg": 4.966887
      }
    ]
  },
  {
    "title": "10倍、20倍！长飞光纤预判，保偏光纤需求狂飙",
    "desc": "",
    "heat": 27884,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "长飞光纤",
        "code": "601869",
        "chg": 5.650358
      }
    ]
  },
  {
    "title": "上海“星枢计划”首发星座发布",
    "desc": "",
    "heat": 19896,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "阿特斯",
        "code": "688472",
        "chg": 4.988914
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "水电",
    "change": "+6.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+6.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+5.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+5.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+5.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+4.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+4.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山西国企改革",
    "change": "+3.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+2.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中字头",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "油气改革",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白马股",
    "change": "+2.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 2,
    "hot_rank_chg": 23,
    "stock_cnt": 5835,
    "price": "6.38",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "79087048000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "超超临界火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "核电",
        "change_pct": -2.14
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "水电",
        "change_pct": 6.06
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "光伏",
        "change_pct": -2.97
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "算电协同",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -5,
    "stock_cnt": 5835,
    "price": "5.31",
    "change": "-0.38",
    "market_id": "17",
    "circulate_market_value": "13373287400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.16
      },
      {
        "name": "工业大麻",
        "change_pct": -1.92
      },
      {
        "name": "中药",
        "change_pct": -0.26
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "保健品",
        "change_pct": -0.36
      },
      {
        "name": "民营医院",
        "change_pct": -0.1
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "化学原料药",
        "change_pct": -0.37
      },
      {
        "name": "流感",
        "change_pct": -1.11
      },
      {
        "name": "振兴东北",
        "change_pct": 0.0
      },
      {
        "name": "食品",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 10,
    "hot_rank_chg": 72,
    "stock_cnt": 5835,
    "price": "12.82",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "18880101000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "绿色电力",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.23
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5835,
    "price": "5.79",
    "change": "-4.61",
    "market_id": "33",
    "circulate_market_value": "204775710000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -3.45
      },
      {
        "name": "折叠屏",
        "change_pct": -7.31
      },
      {
        "name": "手机产业链",
        "change_pct": -5.95
      },
      {
        "name": "超高清视频",
        "change_pct": -2.33
      },
      {
        "name": "苹果产业链",
        "change_pct": -6.58
      },
      {
        "name": "电竞",
        "change_pct": -1.25
      },
      {
        "name": "半导体",
        "change_pct": -7.01
      },
      {
        "name": "人工智能",
        "change_pct": -1.7
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.26
      },
      {
        "name": "VR&AR",
        "change_pct": -3.94
      },
      {
        "name": "OLED",
        "change_pct": -6.57
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "物联网",
        "change_pct": -2.52
      },
      {
        "name": "指纹识别",
        "change_pct": -4.17
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.46
      },
      {
        "name": "白马股",
        "change_pct": 2.14
      },
      {
        "name": "智能制造",
        "change_pct": -3.97
      },
      {
        "name": "小米概念股",
        "change_pct": -4.72
      },
      {
        "name": "国产芯片",
        "change_pct": -5.29
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -6.21
      },
      {
        "name": "全息概念",
        "change_pct": -3.36
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -3.41
      },
      {
        "name": "MicroLED",
        "change_pct": -6.44
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -3.21
      },
      {
        "name": "智能手表",
        "change_pct": -4.72
      },
      {
        "name": "MiniLED",
        "change_pct": -5.57
      },
      {
        "name": "传感器",
        "change_pct": -5.05
      },
      {
        "name": "大硅片",
        "change_pct": -4.69
      },
      {
        "name": "AI PC",
        "change_pct": -5.16
      },
      {
        "name": "华为产业链",
        "change_pct": -3.2
      },
      {
        "name": "回购",
        "change_pct": -0.44
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -5.26
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -7.74
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 17,
    "hot_rank_chg": 3,
    "stock_cnt": 5835,
    "price": "3.37",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "4305511300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.26
      },
      {
        "name": "甲醇",
        "change_pct": 4.23
      },
      {
        "name": "化肥",
        "change_pct": 1.13
      },
      {
        "name": "保健品",
        "change_pct": -0.36
      },
      {
        "name": "民营医院",
        "change_pct": -0.1
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "煤化工",
        "change_pct": 4.45
      },
      {
        "name": "食品",
        "change_pct": -1.0
      },
      {
        "name": "大农业",
        "change_pct": -1.11
      },
      {
        "name": "干细胞",
        "change_pct": 0.24
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 18,
    "hot_rank_chg": -3,
    "stock_cnt": 5835,
    "price": "9.10",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8493244600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": 0.2
      },
      {
        "name": "新疆概念",
        "change_pct": -0.56
      },
      {
        "name": "光伏",
        "change_pct": -2.97
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "储能",
        "change_pct": -2.13
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 21,
    "hot_rank_chg": 3,
    "stock_cnt": 5835,
    "price": "6.56",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "13324175200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "储能",
        "change_pct": -2.13
      },
      {
        "name": "碳中和",
        "change_pct": 0.53
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "300534",
    "name": "陇神戎发",
    "hot_rank": 36,
    "hot_rank_chg": 318,
    "stock_cnt": 5835,
    "price": "12.04",
    "change": "20.04",
    "market_id": "33",
    "circulate_market_value": "3636699900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中药独家品种",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.26
      },
      {
        "name": "保健品",
        "change_pct": -0.36
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "化学原料药",
        "change_pct": -0.37
      },
      {
        "name": "食品",
        "change_pct": -1.0
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 38,
    "hot_rank_chg": 29,
    "stock_cnt": 5835,
    "price": "12.20",
    "change": "16.41",
    "market_id": "33",
    "circulate_market_value": "7115171500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.4
      },
      {
        "name": "一带一路",
        "change_pct": -0.81
      },
      {
        "name": "天然气",
        "change_pct": 1.21
      },
      {
        "name": "油气改革",
        "change_pct": 2.26
      },
      {
        "name": "页岩气",
        "change_pct": 1.06
      },
      {
        "name": "深地经济",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 44,
    "hot_rank_chg": -22,
    "stock_cnt": 5835,
    "price": "9.38",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "6381398600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 4.23
      },
      {
        "name": "雄安新区",
        "change_pct": -1.26
      },
      {
        "name": "煤化工",
        "change_pct": 4.45
      }
    ]
  },
  {
    "code": "600863",
    "name": "华能蒙电",
    "hot_rank": 45,
    "hot_rank_chg": 485,
    "stock_cnt": 5835,
    "price": "5.02",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "32764977000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 5.05
      },
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "内蒙古概念",
        "change_pct": 0.74
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "西部大开发",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "601600",
    "name": "中国铝业",
    "hot_rank": 49,
    "hot_rank_chg": 196,
    "stock_cnt": 5835,
    "price": "9.17",
    "change": "8.65",
    "market_id": "17",
    "circulate_market_value": "121074627000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.73
      },
      {
        "name": "稀土磁材",
        "change_pct": -4.35
      },
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "有色金属",
        "change_pct": -2.92
      },
      {
        "name": "白马股",
        "change_pct": 2.14
      },
      {
        "name": "中字头",
        "change_pct": 2.37
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 54,
    "hot_rank_chg": -36,
    "stock_cnt": 5835,
    "price": "2.75",
    "change": "-10.13",
    "market_id": "17",
    "circulate_market_value": "8988204800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "养老产业",
        "change_pct": -0.11
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.6
      },
      {
        "name": "民营医院",
        "change_pct": -0.1
      },
      {
        "name": "低价股",
        "change_pct": -1.4
      },
      {
        "name": "地摊经济",
        "change_pct": -1.89
      }
    ]
  },
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 56,
    "hot_rank_chg": 162,
    "stock_cnt": 5835,
    "price": "12.33",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "9901881100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.61
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.27
      },
      {
        "name": "房地产",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.57
      },
      {
        "name": "住房租赁",
        "change_pct": 0.06
      },
      {
        "name": "物业管理",
        "change_pct": -0.95
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "旧改",
        "change_pct": -2.3
      }
    ]
  },
  {
    "code": "000037",
    "name": "深南电A",
    "hot_rank": 58,
    "hot_rank_chg": -11,
    "stock_cnt": 5835,
    "price": "10.12",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3429750500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -1.63
      },
      {
        "name": "核电",
        "change_pct": -2.14
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "固废处理",
        "change_pct": -1.25
      },
      {
        "name": "环保",
        "change_pct": -2.69
      },
      {
        "name": "储能",
        "change_pct": -2.13
      },
      {
        "name": "虚拟电厂",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 61,
    "hot_rank_chg": 17,
    "stock_cnt": 5835,
    "price": "11.01",
    "change": "7.00",
    "market_id": "17",
    "circulate_market_value": "1782762100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 2.43
      },
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "一带一路",
        "change_pct": -0.81
      },
      {
        "name": "石油化工",
        "change_pct": 0.46
      },
      {
        "name": "天然气",
        "change_pct": 1.21
      },
      {
        "name": "油气改革",
        "change_pct": 2.26
      },
      {
        "name": "可燃冰",
        "change_pct": 2.1
      },
      {
        "name": "中字头",
        "change_pct": 2.37
      },
      {
        "name": "页岩气",
        "change_pct": 1.06
      },
      {
        "name": "丁辛醇",
        "change_pct": 2.75
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 62,
    "hot_rank_chg": -28,
    "stock_cnt": 5835,
    "price": "9.91",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "5731159300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "水电",
        "change_pct": 6.06
      },
      {
        "name": "天然气",
        "change_pct": 1.21
      },
      {
        "name": "光伏",
        "change_pct": -2.97
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 66,
    "hot_rank_chg": -23,
    "stock_cnt": 5835,
    "price": "7.22",
    "change": "3.44",
    "market_id": "33",
    "circulate_market_value": "4734197500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.16
      },
      {
        "name": "新零售",
        "change_pct": -1.32
      },
      {
        "name": "农业种植",
        "change_pct": -0.56
      },
      {
        "name": "冷链",
        "change_pct": -2.13
      },
      {
        "name": "大农业",
        "change_pct": -1.11
      },
      {
        "name": "预制菜",
        "change_pct": -1.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "可降解塑料",
        "change_pct": -3.25
      },
      {
        "name": "免税店概念",
        "change_pct": 0.17
      },
      {
        "name": "湖北国企改革",
        "change_pct": -1.37
      }
    ]
  },
  {
    "code": "300040",
    "name": "九洲集团",
    "hot_rank": 67,
    "hot_rank_chg": 252,
    "stock_cnt": 5835,
    "price": "6.83",
    "change": "18.17",
    "market_id": "33",
    "circulate_market_value": "3864211400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.23
      },
      {
        "name": "充电桩",
        "change_pct": -3.5
      },
      {
        "name": "光伏",
        "change_pct": -2.97
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.69
      },
      {
        "name": "储能",
        "change_pct": -2.13
      },
      {
        "name": "碳中和",
        "change_pct": 0.53
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.57
      },
      {
        "name": "虚拟电厂",
        "change_pct": -0.09
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.47
      },
      {
        "name": "智能电网",
        "change_pct": -2.04
      }
    ]
  },
  {
    "code": "600126",
    "name": "杭钢股份",
    "hot_rank": 70,
    "hot_rank_chg": 687,
    "stock_cnt": 5835,
    "price": "6.23",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "21039888000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.01
      },
      {
        "name": "钢铁",
        "change_pct": 0.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.02
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.0
      },
      {
        "name": "数字经济",
        "change_pct": -0.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.87
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.26
      },
      {
        "name": "国资云",
        "change_pct": 1.83
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 72,
    "hot_rank_chg": 330,
    "stock_cnt": 5835,
    "price": "6.24",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "12276107700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "回购",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -3.0
      },
      {
        "name": "天津国企改革",
        "change_pct": -0.72
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "光伏",
        "change_pct": -2.97
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "储能",
        "change_pct": -2.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "算电协同",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 73,
    "hot_rank_chg": 44,
    "stock_cnt": 5835,
    "price": "11.60",
    "change": "-6.83",
    "market_id": "17",
    "circulate_market_value": "57872617000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -2.38
      },
      {
        "name": "半导体",
        "change_pct": -7.01
      },
      {
        "name": "5G",
        "change_pct": -4.57
      },
      {
        "name": "VR&AR",
        "change_pct": -3.94
      },
      {
        "name": "光通信",
        "change_pct": -6.01
      },
      {
        "name": "3D感应",
        "change_pct": -4.89
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.46
      },
      {
        "name": "LED",
        "change_pct": -4.85
      },
      {
        "name": "国产芯片",
        "change_pct": -5.29
      },
      {
        "name": "MicroLED",
        "change_pct": -6.44
      },
      {
        "name": "第三代半导体",
        "change_pct": -6.27
      },
      {
        "name": "激光雷达",
        "change_pct": -5.53
      },
      {
        "name": "华为汽车",
        "change_pct": -2.74
      },
      {
        "name": "MiniLED",
        "change_pct": -5.57
      },
      {
        "name": "氮化镓",
        "change_pct": -5.99
      },
      {
        "name": "大基金概念",
        "change_pct": -6.51
      },
      {
        "name": "碳化硅",
        "change_pct": -6.3
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -6.64
      }
    ]
  },
  {
    "code": "300368",
    "name": "汇金股份",
    "hot_rank": 79,
    "hot_rank_chg": 467,
    "stock_cnt": 5835,
    "price": "9.41",
    "change": "20.03",
    "market_id": "33",
    "circulate_market_value": "4977358100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "金融机具",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 0.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.02
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "国资云",
        "change_pct": 1.83
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.18
      },
      {
        "name": "数字人民币",
        "change_pct": 0.33
      },
      {
        "name": "华为产业链",
        "change_pct": -3.2
      },
      {
        "name": "征信概念",
        "change_pct": 3.19
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 82,
    "hot_rank_chg": 438,
    "stock_cnt": 5835,
    "price": "5.83",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "43581210000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "热电联产",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 5.05
      },
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "振兴东北",
        "change_pct": 0.0
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "600236",
    "name": "桂冠电力",
    "hot_rank": 84,
    "hot_rank_chg": -40,
    "stock_cnt": 5835,
    "price": "11.68",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "92066173000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "水电高增",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "举牌",
        "change_pct": -1.2
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "水电",
        "change_pct": 6.06
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "广西概念",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 85,
    "hot_rank_chg": 145,
    "stock_cnt": 5835,
    "price": "7.80",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4225431600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "油气装备",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.4
      },
      {
        "name": "油气管网",
        "change_pct": 1.74
      },
      {
        "name": "海工装备",
        "change_pct": 0.02
      },
      {
        "name": "举牌",
        "change_pct": -1.2
      },
      {
        "name": "天然气",
        "change_pct": 1.21
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.91
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "页岩气",
        "change_pct": 1.06
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      },
      {
        "name": "深地经济",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 88,
    "hot_rank_chg": 504,
    "stock_cnt": 5835,
    "price": "5.72",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "38293232000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "定增",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.27
      },
      {
        "name": "强势人气股",
        "change_pct": -6.11
      },
      {
        "name": "电力体制改革",
        "change_pct": 6.05
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "火电",
        "change_pct": 5.82
      },
      {
        "name": "风电",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "601016",
    "name": "节能风电",
    "hot_rank": 95,
    "hot_rank_chg": -4,
    "stock_cnt": 5835,
    "price": "3.79",
    "change": "8.29",
    "market_id": "17",
    "circulate_market_value": "22884994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.71
      },
      {
        "name": "京津冀",
        "change_pct": -0.04
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.06
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001309", "name": "德明利", "hot_rank": 1, "hot_rank_chg": 4, "stock_cnt": 5835, "price": "482.89", "change": "-10.00", "market_id": "33", "circulate_market_value": "79709691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 2, "hot_rank_chg": 23, "stock_cnt": 5835, "price": "6.38", "change": "10.00", "market_id": "17", "circulate_market_value": "79087048000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超超临界火电", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.71}, {"name": "核电", "change_pct": -2.14}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "水电", "change_pct": 6.06}, {"name": "火电", "change_pct": 5.82}, {"name": "光伏", "change_pct": -2.97}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.06}, {"name": "算电协同", "change_pct": 0.3}]}, {"code": "002384", "name": "东山精密", "hot_rank": 3, "hot_rank_chg": 14, "stock_cnt": 5835, "price": "217.73", "change": "-10.00", "market_id": "33", "circulate_market_value": "301843830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5835, "price": "16.85", "change": "-9.99", "market_id": "33", "circulate_market_value": "55986682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "37.69", "change": "7.29", "market_id": "33", "circulate_market_value": "107796139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": 10, "stock_cnt": 5835, "price": "432.30", "change": "-6.66", "market_id": "17", "circulate_market_value": "288989060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "76.99", "change": "-9.94", "market_id": "17", "circulate_market_value": "137767030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 8, "hot_rank_chg": 56, "stock_cnt": 5835, "price": "77.20", "change": "10.00", "market_id": "17", "circulate_market_value": "32143587000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶颜料"}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5835, "price": "5.31", "change": "-0.38", "market_id": "17", "circulate_market_value": "13373287400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.16}, {"name": "工业大麻", "change_pct": -1.92}, {"name": "中药", "change_pct": -0.26}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "保健品", "change_pct": -0.36}, {"name": "民营医院", "change_pct": -0.1}, {"name": "医药", "change_pct": -0.15}, {"name": "化学原料药", "change_pct": -0.37}, {"name": "流感", "change_pct": -1.11}, {"name": "振兴东北", "change_pct": 0.0}, {"name": "食品", "change_pct": -1.0}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 10, "hot_rank_chg": 72, "stock_cnt": 5835, "price": "12.82", "change": "10.04", "market_id": "17", "circulate_market_value": "18880101000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "绿色电力", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.71}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "火电", "change_pct": 5.82}, {"name": "氢能源/燃料电池", "change_pct": -2.23}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "603118", "name": "共进股份", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "13.57", "change": "-9.23", "market_id": "17", "circulate_market_value": "10683340800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5835, "price": "5.79", "change": "-4.61", "market_id": "33", "circulate_market_value": "204775710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -3.45}, {"name": "折叠屏", "change_pct": -7.31}, {"name": "手机产业链", "change_pct": -5.95}, {"name": "超高清视频", "change_pct": -2.33}, {"name": "苹果产业链", "change_pct": -6.58}, {"name": "电竞", "change_pct": -1.25}, {"name": "半导体", "change_pct": -7.01}, {"name": "人工智能", "change_pct": -1.7}, {"name": "互联网医疗", "change_pct": 0.26}, {"name": "VR&AR", "change_pct": -3.94}, {"name": "OLED", "change_pct": -6.57}, {"name": "京津冀", "change_pct": -0.04}, {"name": "物联网", "change_pct": -2.52}, {"name": "指纹识别", "change_pct": -4.17}, {"name": "汽车零部件", "change_pct": -3.46}, {"name": "白马股", "change_pct": 2.14}, {"name": "智能制造", "change_pct": -3.97}, {"name": "小米概念股", "change_pct": -4.72}, {"name": "国产芯片", "change_pct": -5.29}, {"name": "液晶面板/LCD", "change_pct": -6.21}, {"name": "全息概念", "change_pct": -3.36}, {"name": "理想汽车概念股", "change_pct": -3.41}, {"name": "MicroLED", "change_pct": -6.44}, {"name": "钙钛矿电池", "change_pct": -3.21}, {"name": "智能手表", "change_pct": -4.72}, {"name": "MiniLED", "change_pct": -5.57}, {"name": "传感器", "change_pct": -5.05}, {"name": "大硅片", "change_pct": -4.69}, {"name": "AI PC", "change_pct": -5.16}, {"name": "华为产业链", "change_pct": -3.2}, {"name": "回购", "change_pct": -0.44}, {"name": "智能眼镜/MR头显", "change_pct": -5.26}, {"name": "玻璃基板封装", "change_pct": -7.74}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 13, "hot_rank_chg": -12, "stock_cnt": 5835, "price": "72.50", "change": "-8.46", "market_id": "33", "circulate_market_value": "33732243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 14, "hot_rank_chg": 54, "stock_cnt": 5835, "price": "25.97", "change": "-9.98", "market_id": "17", "circulate_market_value": "4750778700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603698", "name": "航天工程", "hot_rank": 15, "hot_rank_chg": 83, "stock_cnt": 5835, "price": "23.48", "change": "-9.83", "market_id": "17", "circulate_market_value": "12585045200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 16, "hot_rank_chg": 13, "stock_cnt": 5835, "price": "40.43", "change": "-10.00", "market_id": "17", "circulate_market_value": "5283117500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 17, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "3.37", "change": "10.13", "market_id": "17", "circulate_market_value": "4305511300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.26}, {"name": "甲醇", "change_pct": 4.23}, {"name": "化肥", "change_pct": 1.13}, {"name": "保健品", "change_pct": -0.36}, {"name": "民营医院", "change_pct": -0.1}, {"name": "医药", "change_pct": -0.15}, {"name": "煤化工", "change_pct": 4.45}, {"name": "食品", "change_pct": -1.0}, {"name": "大农业", "change_pct": -1.11}, {"name": "干细胞", "change_pct": 0.24}, {"name": "阿尔茨海默病", "change_pct": 0.77}]}, {"code": "001258", "name": "立新能源", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5835, "price": "9.10", "change": "10.04", "market_id": "33", "circulate_market_value": "8493244600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "风电光伏", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 0.2}, {"name": "新疆概念", "change_pct": -0.56}, {"name": "光伏", "change_pct": -2.97}, {"name": "风电", "change_pct": -0.48}, {"name": "储能", "change_pct": -2.13}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5835, "price": "56.56", "change": "-3.13", "market_id": "17", "circulate_market_value": "138778230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 20, "hot_rank_chg": -18, "stock_cnt": 5835, "price": "510.00", "change": "5.62", "market_id": "33", "circulate_market_value": "639664010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5835, "price": "6.56", "change": "10.07", "market_id": "17", "circulate_market_value": "13324175200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.71}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "火电", "change_pct": 5.82}, {"name": "风电", "change_pct": -0.48}, {"name": "储能", "change_pct": -2.13}, {"name": "碳中和", "change_pct": 0.53}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 22, "hot_rank_chg": -12, "stock_cnt": 5835, "price": "1004.00", "change": "2.51", "market_id": "33", "circulate_market_value": "1114379540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000722", "name": "湖南发展", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5835, "price": "15.21", "change": "9.98", "market_id": "33", "circulate_market_value": "7059847500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "水力发电"}, {"code": "600519", "name": "贵州茅台", "hot_rank": 24, "hot_rank_chg": 45, "stock_cnt": 5835, "price": "1327.50", "change": "5.95", "market_id": "17", "circulate_market_value": "1659483300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 25, "hot_rank_chg": 37, "stock_cnt": 5835, "price": "28.12", "change": "-9.99", "market_id": "33", "circulate_market_value": "30334938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 26, "hot_rank_chg": -14, "stock_cnt": 5835, "price": "28.74", "change": "-4.04", "market_id": "33", "circulate_market_value": "21768110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5835, "price": "81.29", "change": "5.03", "market_id": "33", "circulate_market_value": "119238757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 28, "hot_rank_chg": 33, "stock_cnt": 5835, "price": "15.17", "change": "-10.02", "market_id": "17", "circulate_market_value": "31728695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 29, "hot_rank_chg": 24, "stock_cnt": 5835, "price": "35.14", "change": "-9.92", "market_id": "33", "circulate_market_value": "55315827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 30, "hot_rank_chg": 12, "stock_cnt": 5835, "price": "382.00", "change": "5.65", "market_id": "17", "circulate_market_value": "155221240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 31, "hot_rank_chg": 42, "stock_cnt": 5835, "price": "115.02", "change": "-10.00", "market_id": "33", "circulate_market_value": "221161660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 32, "hot_rank_chg": -26, "stock_cnt": 5835, "price": "103.24", "change": "-20.00", "market_id": "33", "circulate_market_value": "85587565000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 33, "hot_rank_chg": 18, "stock_cnt": 5835, "price": "97.80", "change": "7.72", "market_id": "17", "circulate_market_value": "35278749000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 34, "hot_rank_chg": 11, "stock_cnt": 5835, "price": "31.07", "change": "-9.99", "market_id": "17", "circulate_market_value": "10468102900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5835, "price": "33.73", "change": "-6.31", "market_id": "33", "circulate_market_value": "135851660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 36, "hot_rank_chg": 318, "stock_cnt": 5835, "price": "12.04", "change": "20.04", "market_id": "33", "circulate_market_value": "3636699900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药独家品种", "xgb_concepts": [{"name": "中药", "change_pct": -0.26}, {"name": "保健品", "change_pct": -0.36}, {"name": "医药", "change_pct": -0.15}, {"name": "化学原料药", "change_pct": -0.37}, {"name": "食品", "change_pct": -1.0}, {"name": "阿尔茨海默病", "change_pct": 0.77}]}, {"code": "002156", "name": "通富微电", "hot_rank": 37, "hot_rank_chg": -7, "stock_cnt": 5835, "price": "63.00", "change": "-7.84", "market_id": "33", "circulate_market_value": "95599490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 38, "hot_rank_chg": 29, "stock_cnt": 5835, "price": "12.20", "change": "16.41", "market_id": "33", "circulate_market_value": "7115171500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.4}, {"name": "一带一路", "change_pct": -0.81}, {"name": "天然气", "change_pct": 1.21}, {"name": "油气改革", "change_pct": 2.26}, {"name": "页岩气", "change_pct": 1.06}, {"name": "深地经济", "change_pct": 0.74}]}, {"code": "000988", "name": "华工科技", "hot_rank": 39, "hot_rank_chg": 42, "stock_cnt": 5835, "price": "105.86", "change": "-10.00", "market_id": "33", "circulate_market_value": "106387782000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 40, "hot_rank_chg": 99, "stock_cnt": 5835, "price": "36.12", "change": "-9.13", "market_id": "33", "circulate_market_value": "133073215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 41, "hot_rank_chg": 34, "stock_cnt": 5835, "price": "35.87", "change": "-9.99", "market_id": "17", "circulate_market_value": "30365868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5835, "price": "34.37", "change": "-10.00", "market_id": "33", "circulate_market_value": "26891247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 43, "hot_rank_chg": -6, "stock_cnt": 5835, "price": "32.22", "change": "-4.25", "market_id": "17", "circulate_market_value": "109965238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 44, "hot_rank_chg": -22, "stock_cnt": 5835, "price": "9.38", "change": "9.96", "market_id": "17", "circulate_market_value": "6381398600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.23}, {"name": "雄安新区", "change_pct": -1.26}, {"name": "煤化工", "change_pct": 4.45}]}, {"code": "600863", "name": "华能蒙电", "hot_rank": 45, "hot_rank_chg": 485, "stock_cnt": 5835, "price": "5.02", "change": "10.09", "market_id": "17", "circulate_market_value": "32764977000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电力", "xgb_concepts": [{"name": "煤炭", "change_pct": 5.05}, {"name": "央企改革", "change_pct": 0.71}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "火电", "change_pct": 5.82}, {"name": "内蒙古概念", "change_pct": 0.74}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.06}, {"name": "西部大开发", "change_pct": -1.46}]}, {"code": "600900", "name": "长江电力", "hot_rank": 46, "hot_rank_chg": -20, "stock_cnt": 5835, "price": "28.98", "change": "3.54", "market_id": "17", "circulate_market_value": "709088950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 47, "hot_rank_chg": 13, "stock_cnt": 5835, "price": "14.82", "change": "6.16", "market_id": "33", "circulate_market_value": "22612079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 48, "hot_rank_chg": 65, "stock_cnt": 5835, "price": "39.44", "change": "-9.95", "market_id": "17", "circulate_market_value": "156639390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601600", "name": "中国铝业", "hot_rank": 49, "hot_rank_chg": 196, "stock_cnt": 5835, "price": "9.17", "change": "8.65", "market_id": "17", "circulate_market_value": "121074627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.73}, {"name": "稀土磁材", "change_pct": -4.35}, {"name": "央企改革", "change_pct": 0.71}, {"name": "有色金属", "change_pct": -2.92}, {"name": "白马股", "change_pct": 2.14}, {"name": "中字头", "change_pct": 2.37}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 50, "hot_rank_chg": 91, "stock_cnt": 5835, "price": "42.29", "change": "-10.00", "market_id": "33", "circulate_market_value": "62408368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600021", "name": "上海电力", "hot_rank": 51, "hot_rank_chg": 56, "stock_cnt": 5835, "price": "16.35", "change": "9.66", "market_id": "17", "circulate_market_value": "46137669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 52, "hot_rank_chg": 11, "stock_cnt": 5835, "price": "170.51", "change": "-10.00", "market_id": "33", "circulate_market_value": "133082774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600938", "name": "中国海油", "hot_rank": 53, "hot_rank_chg": 175, "stock_cnt": 5835, "price": "31.87", "change": "10.01", "market_id": "17", "circulate_market_value": "95291300000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油价上涨"}, {"code": "600162", "name": "香江控股", "hot_rank": 54, "hot_rank_chg": -36, "stock_cnt": 5835, "price": "2.75", "change": "-10.13", "market_id": "17", "circulate_market_value": "8988204800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "养老产业", "change_pct": -0.11}, {"name": "粤港澳大湾区", "change_pct": -0.6}, {"name": "民营医院", "change_pct": -0.1}, {"name": "低价股", "change_pct": -1.4}, {"name": "地摊经济", "change_pct": -1.89}]}, {"code": "000815", "name": "美利云", "hot_rank": 55, "hot_rank_chg": 275, "stock_cnt": 5835, "price": "13.33", "change": "9.98", "market_id": "33", "circulate_market_value": "9267856300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002208", "name": "合肥城建", "hot_rank": 56, "hot_rank_chg": 162, "stock_cnt": 5835, "price": "12.33", "change": "-10.00", "market_id": "33", "circulate_market_value": "9901881100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.61}, {"name": "蚂蚁集团概念股", "change_pct": 1.27}, {"name": "房地产", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "安徽国企改革", "change_pct": -0.57}, {"name": "住房租赁", "change_pct": 0.06}, {"name": "物业管理", "change_pct": -0.95}, {"name": "国企改革", "change_pct": 0.06}, {"name": "旧改", "change_pct": -2.3}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 57, "hot_rank_chg": 39, "stock_cnt": 5835, "price": "29.35", "change": "3.49", "market_id": "17", "circulate_market_value": "604662630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000037", "name": "深南电A", "hot_rank": 58, "hot_rank_chg": -11, "stock_cnt": 5835, "price": "10.12", "change": "10.00", "market_id": "33", "circulate_market_value": "3429750500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电力", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -1.63}, {"name": "核电", "change_pct": -2.14}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "火电", "change_pct": 5.82}, {"name": "固废处理", "change_pct": -1.25}, {"name": "环保", "change_pct": -2.69}, {"name": "储能", "change_pct": -2.13}, {"name": "虚拟电厂", "change_pct": -0.09}]}, {"code": "000858", "name": "五粮液", "hot_rank": 59, "hot_rank_chg": 46, "stock_cnt": 5835, "price": "76.24", "change": "4.78", "market_id": "33", "circulate_market_value": "295926580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 60, "hot_rank_chg": -14, "stock_cnt": 5835, "price": "19.27", "change": "4.56", "market_id": "17", "circulate_market_value": "20701819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 61, "hot_rank_chg": 17, "stock_cnt": 5835, "price": "11.01", "change": "7.00", "market_id": "17", "circulate_market_value": "1782762100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": 2.43}, {"name": "央企改革", "change_pct": 0.71}, {"name": "一带一路", "change_pct": -0.81}, {"name": "石油化工", "change_pct": 0.46}, {"name": "天然气", "change_pct": 1.21}, {"name": "油气改革", "change_pct": 2.26}, {"name": "可燃冰", "change_pct": 2.1}, {"name": "中字头", "change_pct": 2.37}, {"name": "页岩气", "change_pct": 1.06}, {"name": "丁辛醇", "change_pct": 2.75}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "600644", "name": "乐山电力", "hot_rank": 62, "hot_rank_chg": -28, "stock_cnt": 5835, "price": "9.91", "change": "9.99", "market_id": "17", "circulate_market_value": "5731159300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "电力", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 6.05}, {"name": "水电", "change_pct": 6.06}, {"name": "天然气", "change_pct": 1.21}, {"name": "光伏", "change_pct": -2.97}]}, {"code": "600879", "name": "航天电子", "hot_rank": 63, "hot_rank_chg": 144, "stock_cnt": 5835, "price": "14.65", "change": "-10.01", "market_id": "17", "circulate_market_value": "48334735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 64, "hot_rank_chg": 24, "stock_cnt": 5835, "price": "41.88", "change": "-9.99", "market_id": "33", "circulate_market_value": "48455709000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 65, "hot_rank_chg": 28, "stock_cnt": 5835, "price": "53.30", "change": "-19.99", "market_id": "33", "circulate_market_value": "1742827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 66, "hot_rank_chg": -23, "stock_cnt": 5835, "price": "7.22", "change": "3.44", "market_id": "33", "circulate_market_value": "4734197500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.16}, {"name": "新零售", "change_pct": -1.32}, {"name": "农业种植", "change_pct": -0.56}, {"name": "冷链", "change_pct": -2.13}, {"name": "大农业", "change_pct": -1.11}, {"name": "预制菜", "change_pct": -1.21}, {"name": "国企改革", "change_pct": 0.06}, {"name": "可降解塑料", "change_pct": -3.25}, {"name": "免税店概念", "change_pct": 0.17}, {"name": "湖北国企改革", "change_pct": -1.37}]}, {"code": "300040", "name": "九洲集团", "hot_rank": 67, "hot_rank_chg": 252, "stock_cnt": 5835, "price": "6.83", "change": "18.17", "market_id": "33", "circulate_market_value": "3864211400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.23}, {"name": "充电桩", "change_pct": -3.5}, {"name": "光伏", "change_pct": -2.97}, {"name": "风电", "change_pct": -0.48}, {"name": "新能源汽车", "change_pct": -3.69}, {"name": "储能", "change_pct": -2.13}, {"name": "碳中和", "change_pct": 0.53}, {"name": "乡村振兴", "change_pct": -0.57}, {"name": "虚拟电厂", "change_pct": -0.09}, {"name": "BIPV概念", "change_pct": -1.47}, {"name": "智能电网", "change_pct": -2.04}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 68, "hot_rank_chg": -35, "stock_cnt": 5835, "price": "91.04", "change": "3.58", "market_id": "17", "circulate_market_value": "133196467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 69, "hot_rank_chg": 69, "stock_cnt": 5835, "price": "36.07", "change": "-10.01", "market_id": "17", "circulate_market_value": "52734153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600126", "name": "杭钢股份", "hot_rank": 70, "hot_rank_chg": 687, "stock_cnt": 5835, "price": "6.23", "change": "10.07", "market_id": "17", "circulate_market_value": "21039888000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.01}, {"name": "钢铁", "change_pct": 0.21}, {"name": "云计算数据中心", "change_pct": -1.02}, {"name": "浙江国企改革", "change_pct": -0.0}, {"name": "数字经济", "change_pct": -0.94}, {"name": "阿里巴巴概念股", "change_pct": -0.87}, {"name": "汽车拆解", "change_pct": 0.26}, {"name": "国资云", "change_pct": 1.83}, {"name": "东数西算/算力", "change_pct": -1.18}, {"name": "国企改革", "change_pct": 0.06}, {"name": "DeepSeek概念股", "change_pct": -0.22}]}, {"code": "603127", "name": "昭衍新药", "hot_rank": 71, "hot_rank_chg": -31, "stock_cnt": 5835, "price": "47.00", "change": "-1.94", "market_id": "17", "circulate_market_value": "29626592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600821", "name": "金开新能", "hot_rank": 72, "hot_rank_chg": 330, "stock_cnt": 5835, "price": "6.24", "change": "10.05", "market_id": "17", "circulate_market_value": "12276107700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购", "xgb_concepts": [{"name": "股权转让", "change_pct": -3.0}, {"name": "天津国企改革", "change_pct": -0.72}, {"name": "京津冀", "change_pct": -0.04}, {"name": "光伏", "change_pct": -2.97}, {"name": "风电", "change_pct": -0.48}, {"name": "储能", "change_pct": -2.13}, {"name": "东数西算/算力", "change_pct": -1.18}, {"name": "国企改革", "change_pct": 0.06}, {"name": "算电协同", "change_pct": 0.3}]}, {"code": "600703", "name": "三安光电", "hot_rank": 73, "hot_rank_chg": 44, "stock_cnt": 5835, "price": "11.60", "change": "-6.83", "market_id": "17", "circulate_market_value": "57872617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -2.38}, {"name": "半导体", "change_pct": -7.01}, {"name": "5G", "change_pct": -4.57}, {"name": "VR&AR", "change_pct": -3.94}, {"name": "光通信", "change_pct": -6.01}, {"name": "3D感应", "change_pct": -4.89}, {"name": "汽车零部件", "change_pct": -3.46}, {"name": "LED", "change_pct": -4.85}, {"name": "国产芯片", "change_pct": -5.29}, {"name": "MicroLED", "change_pct": -6.44}, {"name": "第三代半导体", "change_pct": -6.27}, {"name": "激光雷达", "change_pct": -5.53}, {"name": "华为汽车", "change_pct": -2.74}, {"name": "MiniLED", "change_pct": -5.57}, {"name": "氮化镓", "change_pct": -5.99}, {"name": "大基金概念", "change_pct": -6.51}, {"name": "碳化硅", "change_pct": -6.3}, {"name": "光电共封装CPO", "change_pct": -6.64}]}, {"code": "603259", "name": "药明康德", "hot_rank": 74, "hot_rank_chg": 5, "stock_cnt": 5835, "price": "124.22", "change": "5.37", "market_id": "17", "circulate_market_value": "307230870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 75, "hot_rank_chg": 106, "stock_cnt": 5835, "price": "200.80", "change": "-20.00", "market_id": "17", "circulate_market_value": "29110145000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 76, "hot_rank_chg": -21, "stock_cnt": 5835, "price": "56.50", "change": "-1.89", "market_id": "17", "circulate_market_value": "1121191210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000596", "name": "古井贡酒", "hot_rank": 77, "hot_rank_chg": 585, "stock_cnt": 5835, "price": "93.83", "change": "10.00", "market_id": "33", "circulate_market_value": "38338938000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "300368", "name": "汇金股份", "hot_rank": 79, "hot_rank_chg": 467, "stock_cnt": 5835, "price": "9.41", "change": "20.03", "market_id": "33", "circulate_market_value": "4977358100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金融机具", "xgb_concepts": [{"name": "金融科技", "change_pct": 0.87}, {"name": "云计算数据中心", "change_pct": -1.02}, {"name": "京津冀", "change_pct": -0.04}, {"name": "国资云", "change_pct": 1.83}, {"name": "东数西算/算力", "change_pct": -1.18}, {"name": "数字人民币", "change_pct": 0.33}, {"name": "华为产业链", "change_pct": -3.2}, {"name": "征信概念", "change_pct": 3.19}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 80, "hot_rank_chg": 140, "stock_cnt": 5835, "price": "19.69", "change": "10.00", "market_id": "17", "circulate_market_value": "8641878700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "此前炒作Kimi"}, {"code": "688008", "name": "澜起科技", "hot_rank": 81, "hot_rank_chg": 4, "stock_cnt": 5835, "price": "189.94", "change": "3.45", "market_id": "17", "circulate_market_value": "217436570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 82, "hot_rank_chg": 438, "stock_cnt": 5835, "price": "5.83", "change": "10.00", "market_id": "17", "circulate_market_value": "43581210000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "热电联产", "xgb_concepts": [{"name": "煤炭", "change_pct": 5.05}, {"name": "央企改革", "change_pct": 0.71}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "火电", "change_pct": 5.82}, {"name": "振兴东北", "change_pct": 0.0}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 83, "hot_rank_chg": 43, "stock_cnt": 5835, "price": "376.43", "change": "4.56", "market_id": "33", "circulate_market_value": "1602476000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600236", "name": "桂冠电力", "hot_rank": 84, "hot_rank_chg": -40, "stock_cnt": 5835, "price": "11.68", "change": "9.98", "market_id": "17", "circulate_market_value": "92066173000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "水电高增", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.71}, {"name": "举牌", "change_pct": -1.2}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "水电", "change_pct": 6.06}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.06}, {"name": "广西概念", "change_pct": -1.06}]}, {"code": "002490", "name": "山东墨龙", "hot_rank": 85, "hot_rank_chg": 145, "stock_cnt": 5835, "price": "7.80", "change": "10.01", "market_id": "33", "circulate_market_value": "4225431600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油气装备", "xgb_concepts": [{"name": "油服", "change_pct": 1.4}, {"name": "油气管网", "change_pct": 1.74}, {"name": "海工装备", "change_pct": 0.02}, {"name": "举牌", "change_pct": -1.2}, {"name": "天然气", "change_pct": 1.21}, {"name": "山东国企改革", "change_pct": -0.91}, {"name": "风电", "change_pct": -0.48}, {"name": "页岩气", "change_pct": 1.06}, {"name": "国企改革", "change_pct": 0.06}, {"name": "深地经济", "change_pct": 0.74}]}, {"code": "301308", "name": "江波龙", "hot_rank": 86, "hot_rank_chg": -29, "stock_cnt": 5835, "price": "376.49", "change": "-4.93", "market_id": "33", "circulate_market_value": "106114419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600536", "name": "中国软件", "hot_rank": 87, "hot_rank_chg": -13, "stock_cnt": 5835, "price": "34.43", "change": "5.45", "market_id": "17", "circulate_market_value": "29047072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600578", "name": "京能电力", "hot_rank": 88, "hot_rank_chg": 504, "stock_cnt": 5835, "price": "5.72", "change": "10.00", "market_id": "17", "circulate_market_value": "38293232000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "定增", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": 1.27}, {"name": "强势人气股", "change_pct": -6.11}, {"name": "电力体制改革", "change_pct": 6.05}, {"name": "京津冀", "change_pct": -0.04}, {"name": "火电", "change_pct": 5.82}, {"name": "风电", "change_pct": -0.48}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 89, "hot_rank_chg": -66, "stock_cnt": 5835, "price": "213.54", "change": "1.03", "market_id": "33", "circulate_market_value": "232414380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 90, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "244.00", "change": "-3.50", "market_id": "17", "circulate_market_value": "115062264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 91, "hot_rank_chg": 85, "stock_cnt": 5835, "price": "29.88", "change": "-9.76", "market_id": "17", "circulate_market_value": "49722467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 92, "hot_rank_chg": 2, "stock_cnt": 5835, "price": "59.48", "change": "-4.60", "market_id": "17", "circulate_market_value": "70334454000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 93, "hot_rank_chg": 10, "stock_cnt": 5835, "price": "53.23", "change": "4.99", "market_id": "17", "circulate_market_value": "567435260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5835, "price": "123.34", "change": "-6.76", "market_id": "17", "circulate_market_value": "295337820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601016", "name": "节能风电", "hot_rank": 95, "hot_rank_chg": -4, "stock_cnt": 5835, "price": "3.79", "change": "8.29", "market_id": "17", "circulate_market_value": "22884994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.71}, {"name": "京津冀", "change_pct": -0.04}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.06}]}, {"code": "002714", "name": "牧原股份", "hot_rank": 96, "hot_rank_chg": 4, "stock_cnt": 5835, "price": "40.61", "change": "1.96", "market_id": "33", "circulate_market_value": "133221075000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600406", "name": "国电南瑞", "hot_rank": 97, "hot_rank_chg": 97, "stock_cnt": 5835, "price": "23.56", "change": "6.17", "market_id": "17", "circulate_market_value": "188672630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 98, "hot_rank_chg": 58, "stock_cnt": 5835, "price": "18.71", "change": "5.05", "market_id": "33", "circulate_market_value": "7874384700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001388", "name": "信通电子", "hot_rank": 99, "hot_rank_chg": -67, "stock_cnt": 5835, "price": "26.72", "change": "8.00", "market_id": "33", "circulate_market_value": "3343168200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 100, "hot_rank_chg": 144, "stock_cnt": 5835, "price": "110.22", "change": "-18.96", "market_id": "33", "circulate_market_value": "3398233900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600126", "name": "杭钢股份", "price": 6.23, "change_pct": 10.07, "reason": "公司与阿里云合作，共同投资158亿元建设浙江云计算数据中心", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.21, "first_limit_up": 1784511530, "break_limit_up_times": 2}, {"code": "002440", "name": "闰土股份", "price": 11.78, "change_pct": 9.99, "reason": "公司染料产品占有率稳居国内染料市场份额第二位，参股的浙江巍华新材料拥有三氟甲苯产能", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 10.6, "first_limit_up": 1784517462, "break_limit_up_times": 2}, {"code": "603610", "name": "麒盛科技", "price": 13.75, "change_pct": 10.0, "reason": "公司对外投资睡眠产业相关的技术与平台，包括双向脑机交互技术，该技术能够应用于智能家居领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1784515650, "break_limit_up_times": 2}, {"code": "600267", "name": "海正药业", "price": 12.45, "change_pct": 9.98, "reason": "中国最大的抗生素、抗肿瘤药物生产商之一；自主研发的心血管创新药海博麦布片，此前是国内近年心血管领域唯一1类新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.52, "first_limit_up": 1784512432, "break_limit_up_times": 4}, {"code": "600396", "name": "华电辽能", "price": 12.82, "change_pct": 10.04, "reason": "辽宁省重要电力和热力供应商", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 19.15, "first_limit_up": 1784529758, "break_limit_up_times": 0}, {"code": "603727", "name": "博迈科", "price": 16.6, "change_pct": 10.01, "reason": "国内最早从事海洋油气开发装备模块化制造的企业之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 1.27, "first_limit_up": 1784513048, "break_limit_up_times": 0}, {"code": "600644", "name": "乐山电力", "price": 9.91, "change_pct": 9.99, "reason": "公司目前主要有电力、天然气、自来水、综合能源、宾馆等五大业务；参股子公司四川晟天新能源发展有限公司主营业务为太阳能光伏电站，项目包括牧光互补、渔光互补、农光互补等光伏复合电站以及分布式光伏电站等多种类型", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 11.97, "first_limit_up": 1784511165, "break_limit_up_times": 2}, {"code": "000037", "name": "深南电A", "price": 10.12, "change_pct": 10.0, "reason": "公司主营生产经营供电供热、从事发电厂（站）的相关技术咨询和技术服务，拥有3家全资或控股燃机发电厂", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 22.61, "first_limit_up": 1784529948, "break_limit_up_times": 4}, {"code": "300368", "name": "汇金股份", "price": 9.41, "change_pct": 20.03, "reason": "我国银行业金融机具核心供应商与服务商，业务涉及军工配套设备", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 9.74, "first_limit_up": 1784511549, "break_limit_up_times": 0}, {"code": "601991", "name": "大唐发电", "price": 6.38, "change_pct": 10.0, "reason": "全资子公司西藏大唐国际怒江水电位于西藏自治区拉萨市，主要业务为水力发电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.9, "first_limit_up": 1784529764, "break_limit_up_times": 0}, {"code": "601026", "name": "道生天合", "price": 14.54, "change_pct": 9.98, "reason": "1、公司是全球风电叶片用材料领域龙头供应商，其风电叶片用环氧树脂、风电叶片用结构胶的产销量行业领先；\n2、公司参股上海道宜半导体8.12%的股份", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.31, "first_limit_up": 1784515367, "break_limit_up_times": 4}, {"code": "002866", "name": "传艺科技", "price": 14.85, "change_pct": 10.0, "reason": "1、消费电子零组件行业头部企业之一，拟定增募资不超8.71亿元，加码智能化产线升级；\n2、公司专注于柔性线路板（FPC）的设计、研发、制造和销售，为客户提供定制化解决方案；\n3、公司在钠电池正负极材料、电解液等关键环节进行一体化布局并实现量产交付，产品可应用于A00级车、小动力车、电动工具及储能等领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1784511000, "break_limit_up_times": 0}, {"code": "300534", "name": "陇神戎发", "price": 12.04, "change_pct": 20.04, "reason": "公司主打产品元胡止痛滴丸为国家中药二级保护品种，具有镇痛、镇静、催眠等作用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 37.4, "first_limit_up": 1784515845, "break_limit_up_times": 1}, {"code": "600756", "name": "浪潮软件", "price": 14.05, "change_pct": 10.02, "reason": "国内领先的数字政府方案与服务提供商；公司重点参与建设地方电子政务云平台和行业电子政务云平台", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.78, "first_limit_up": 1784511818, "break_limit_up_times": 14}, {"code": "000722", "name": "湖南发展", "price": 15.21, "change_pct": 9.98, "reason": "公司预计上半年净利润同比增长318.91%-391.77%，报告期内业绩变化的主要原因是公司实施重大资产重组，高电公司、铜电公司、清电公司、筱电公司相关股权已全部登记至公司名下，上述四家公司成为公司的控股子公司，公司所属水电装机规模较上年同期大幅增长。本报告期内，公司所属水电站上游来水偏丰，水电业务板块发电量较上年同期大幅增长", "plates": ["智能电网", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 16.23, "first_limit_up": 1784529873, "break_limit_up_times": 8}, {"code": "603823", "name": "百合花", "price": 77.2, "change_pct": 10.0, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.89, "first_limit_up": 1784530141, "break_limit_up_times": 0}, {"code": "000767", "name": "晋控电力", "price": 3.76, "change_pct": 9.94, "reason": "山西省最大发电公司，控股股东大同煤炭集团是山西最大煤炭企业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 11.36, "first_limit_up": 1784512950, "break_limit_up_times": 2}, {"code": "002992", "name": "宝明科技", "price": 35.86, "change_pct": 10.0, "reason": "控股子公司深圳新材料从事新能源锂电池材料的研产销，主要产品为锂电复合铜箔", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 0.88, "first_limit_up": 1784511198, "break_limit_up_times": 0}, {"code": "301190", "name": "善水科技", "price": 17.42, "change_pct": 19.97, "reason": "公司主要经营染料中间体、农药和医药中间体的研产销，上半年净利润同比预增61.17%—98.84%，报告期内，募投项目氯代吡啶系列产品产能有序释放，产量稳步增长，相较上年同期，销量有所增长；同时随着规模效应逐步显现，单位成本逐步降低，进而带动了毛利率的显著提高，综合成本竞争力进一步提升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.85, "first_limit_up": 1784524653, "break_limit_up_times": 0}, {"code": "600821", "name": "金开新能", "price": 6.24, "change_pct": 10.05, "reason": "国内风光发电领域重要运营商；新疆哈密智算中心是旗下公司探索绿电结合算力领域打造的大型数据中心，总占地 9,504 平方米，总算力80000P以上", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1784512535, "break_limit_up_times": 1}, {"code": "000815", "name": "美利云", "price": 13.33, "change_pct": 9.98, "reason": "公司表示数据中心项目建设按规划有序推进中", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1784510700, "break_limit_up_times": 0}, {"code": "600744", "name": "华银电力", "price": 6.56, "change_pct": 10.07, "reason": "湖南省火电龙头", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 8.59, "first_limit_up": 1784511300, "break_limit_up_times": 1}, {"code": "002542", "name": "*ST中岩", "price": 1.45, "change_pct": 9.85, "reason": "公司的强夯机与盾构机等专用设备制造、地基处理、基坑支护、 地下连续墙、盾构掘进、矩形顶管等施工工艺技术保持国内领先国际先进水平", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.5, "first_limit_up": 1784510700, "break_limit_up_times": 0}, {"code": "688057", "name": "金达莱", "price": 16.81, "change_pct": 19.99, "reason": "公司此前拟以3000万元增资医疗机器人企业中科鸿泰，该公司自主研发的全球首款多通道全程辅助血管介入手术机器人已完成注册临床试验首例入组", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.1, "first_limit_up": 1784511346, "break_limit_up_times": 0}, {"code": "600726", "name": "华电能源", "price": 5.83, "change_pct": 10.0, "reason": "中国华电集团旗下，黑龙江最大发电及集中供热运营商；公司主营发电、供热及煤炭生产销售", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.68, "first_limit_up": 1784512528, "break_limit_up_times": 0}, {"code": "600032", "name": "浙江新能", "price": 7.78, "change_pct": 10.04, "reason": "1、浙能集团境内水电、风电及光电开发与投资的唯一平台；\n2、公司控股子公司浙江浙能航天氢能技术有限公司主营业务为氢能科技研发、涉氢工程设计、储氢设施销售等", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1784530520, "break_limit_up_times": 0}, {"code": "601001", "name": "晋控煤业", "price": 19.28, "change_pct": 9.98, "reason": "公司是山西省最大的动力煤企业，在华北市场占有率较高", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.43, "first_limit_up": 1784529837, "break_limit_up_times": 0}, {"code": "601898", "name": "中煤能源", "price": 13.79, "change_pct": 9.97, "reason": "集煤炭生产和贸易、煤化工、煤矿装备制造及相关服务、坑口发电等业务于一体的大型能源企业；控股股东拟增持5000万元至1亿元A股", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1784514805, "break_limit_up_times": 6}, {"code": "002490", "name": "山东墨龙", "price": 7.8, "change_pct": 10.01, "reason": "公司产品主要有石油钻采机械装备、石油天然气输送装备、油气开采装备等，中海油是公司油田类产品国内销售市场中主要客户之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 10.08, "first_limit_up": 1784511072, "break_limit_up_times": 6}, {"code": "600746", "name": "江苏索普", "price": 6.64, "change_pct": 9.93, "reason": "公司是拥有完整产业链的醋酸龙头企业，拥有硫酸产能30万吨/年；上半年净利同比预增115.96%—145.41%，报告期内，公司主要产品价格同比上升\n", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.97, "first_limit_up": 1784515387, "break_limit_up_times": 1}, {"code": "600938", "name": "中国海油", "price": 31.87, "change_pct": 10.01, "reason": "公司为全球最大的独立油气勘探及生产集团之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 3.22, "first_limit_up": 1784518162, "break_limit_up_times": 2}, {"code": "000889", "name": "中嘉博创", "price": 3.45, "change_pct": 9.87, "reason": "1、公司上半年业绩同比扭亏，主要系“持续实施降本增效举措，优化人员配置，削减租赁开支，有效降低期间费用，推动利润较去年同期小幅增长”；\n2、公司申请名称一种通过插片式安装的光通信无源器件专利，全资子公司海南博创云天经营范围包含算力销售", "plates": ["云计算数据中心", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.88, "first_limit_up": 1784511327, "break_limit_up_times": 0}, {"code": "600403", "name": "大有能源", "price": 5.28, "change_pct": 10.0, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.97, "first_limit_up": 1784511468, "break_limit_up_times": 0}, {"code": "600236", "name": "桂冠电力", "price": 11.68, "change_pct": 9.98, "reason": "公司主要投资建设，经营管理以电力生产为主的能源项目，包含水电，火电和风电等，主要发电资产位于广西", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 0.94, "first_limit_up": 1784516455, "break_limit_up_times": 13}, {"code": "001211", "name": "双枪科技", "price": 20.19, "change_pct": 10.03, "reason": "公司主营日用餐厨具产品，目前儿童餐具主要有稻壳餐具系列、学习筷系列等，主要材质有稻壳PP复合材料、PPS、不锈钢等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.53, "first_limit_up": 1784516466, "break_limit_up_times": 0}, {"code": "001258", "name": "立新能源", "price": 9.1, "change_pct": 10.04, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 8.8, "first_limit_up": 1784511117, "break_limit_up_times": 2}, {"code": "603779", "name": "威龙股份", "price": 8.68, "change_pct": 10.01, "reason": "中国大型葡萄酒生产企业之一，实控人变更为淄博市财政局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 14.62, "first_limit_up": 1784511784, "break_limit_up_times": 3}, {"code": "603619", "name": "中曼石油", "price": 19.51, "change_pct": 9.98, "reason": "公司业务涵盖勘探开发、油服工程、石油装备制造，已形成成熟完备的钻采一体化服务能力，油气装备涵盖从钻机整机到顶驱、泥浆泵、自动猫道等关键部件一系列产品体系", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1784511561, "break_limit_up_times": 0}, {"code": "600578", "name": "京能电力", "price": 5.72, "change_pct": 10.0, "reason": "北京地区最大的火力发电企业；主营业务以燃煤火力发电和供热为主，主要向京津唐电网、蒙西电网、山西电网、豫北电网供电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1784524683, "break_limit_up_times": 1}, {"code": "002857", "name": "三晖电气", "price": 15.82, "change_pct": 10.01, "reason": "公司主要从事电能计量仪器仪表，近两年来公司储能业务快速发展，在手订单充足", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1784517036, "break_limit_up_times": 0}, {"code": "002036", "name": "联创电子", "price": 6.55, "change_pct": 10.08, "reason": "1、公司的微棱镜、模造玻璃透镜阵列、硅透镜阵列等光模块光学器件正在送样评测阶段；\n2、公司车载镜头（车内监控、前视ADAS、盲区监控）已获得特斯拉的认证通过，已有正式订单", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.86, "first_limit_up": 1784512986, "break_limit_up_times": 0}, {"code": "001288", "name": "运机集团", "price": 22.97, "change_pct": 10.01, "reason": "公司专注于输送机械装备领域，具有减速器相关产品：圆锥圆柱齿轮减速器和ZJ轴装式减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.81, "first_limit_up": 1784512674, "break_limit_up_times": 7}, {"code": "000600", "name": "建投能源", "price": 8.98, "change_pct": 10.05, "reason": "建投集团旗下河北省最大的独立发电公司，年报净利润18.79亿，同比增长253.66%", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 8.14, "first_limit_up": 1784524974, "break_limit_up_times": 2}, {"code": "600797", "name": "浙大网新", "price": 6.85, "change_pct": 9.95, "reason": "全资子公司与阿里巴巴合作建设的ZH12数据中心项目已全部完工并投入运营，双方已完成第3个模块的正式商务合同签署，合同服务期限10年，预计该模块服务期内总收入为4.48亿元", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.11, "first_limit_up": 1784511838, "break_limit_up_times": 6}, {"code": "600722", "name": "金牛化工", "price": 9.38, "change_pct": 9.96, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 7.22, "first_limit_up": 1784511346, "break_limit_up_times": 0}, {"code": "000539", "name": "粤电力Ａ", "price": 5.84, "change_pct": 9.98, "reason": "1、广东省最大的电力上市公司，拥有大型燃煤发电、LNG发电、风力发电和水力发电等多种能源项；\n2、公司拟60亿元投资开发120万千瓦光伏发电项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1784513511, "break_limit_up_times": 3}, {"code": "603533", "name": "掌阅科技", "price": 19.69, "change_pct": 10.0, "reason": "字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi", "plates": ["Kimi概念"], "limit_up_days": 1, "turnover_ratio": 9.0, "first_limit_up": 1784511097, "break_limit_up_times": 3}, {"code": "600985", "name": "淮北矿业", "price": 15.62, "change_pct": 10.0, "reason": "公司是安徽四大煤企之一的淮矿集团控股的煤炭上市平台，是华东地区品种最齐全、规模最大的焦煤企业，拥有生产矿井16对，资源储量为37.09亿吨，可采储量达16.60亿吨", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.13, "first_limit_up": 1784527372, "break_limit_up_times": 2}, {"code": "600863", "name": "华能蒙电", "price": 5.02, "change_pct": 10.09, "reason": "中国华能集团旗下，主营以火力发电、供热为主，兼顾部分风力发电及煤炭业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.09, "first_limit_up": 1784524427, "break_limit_up_times": 4}, {"code": "600188", "name": "兖矿能源", "price": 20.79, "change_pct": 10.0, "reason": "华东地区最大的煤炭生产商和中国最大的煤炭出口企业之一，上半年净利润同比预增53%，报告期内煤炭、煤化工产品价格上涨，公司经营业绩改善；公开挂牌转让内蒙古鑫泰煤炭有限公司100%股权，产生较高投资收益", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.24, "first_limit_up": 1784524218, "break_limit_up_times": 4}, {"code": "600121", "name": "郑州煤电", "price": 3.76, "change_pct": 9.94, "reason": "1、实控人河南省国资委；公司是郑州煤炭龙头，拥有部分火电业务，参股公司复晟铝业（持股40%）拥有氧化铝粉产能；\n2、两大煤矿有望注入公司，未来或新增可采储量16.2亿吨", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 5.01, "first_limit_up": 1784512127, "break_limit_up_times": 1}, {"code": "000596", "name": "古井贡酒", "price": 93.83, "change_pct": 10.0, "reason": "安徽地区白酒龙头", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1784512485, "break_limit_up_times": 4}, {"code": "600452", "name": "涪陵电力", "price": 10, "change_pct": 10.01, "reason": "公司主要从事涪陵区的配电和国网区域的配电网节能业务，国网旗下配电和节能的上市平台", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.5, "first_limit_up": 1784512199, "break_limit_up_times": 5}, {"code": "300515", "name": "三德科技", "price": 14.86, "change_pct": 20.03, "reason": "公司上半年净利润预增30%-50%，报告期内，受益于无人化智能装备产品交付量的同比大幅增加，公司营业收入同比增长，公司报告期内归属于上市公司股东的净利润同比上升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1784511000, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》"};