const UPDATE_TIME = "2026-07-30 02:39";
const THS_HOT = [
  {
    "name": "AI应用",
    "rise": 0.35,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 1,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -1.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "乳业",
    "rise": 1.64,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -2,
    "etfName": "食品ETF",
    "code": "885462"
  },
  {
    "name": "存储芯片",
    "rise": -5.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续212天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.66,
    "rate": 0,
    "tag": "",
    "hotTag": "连续259天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "白酒概念",
    "rise": 2.69,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "脑机接口",
    "rise": -0.69,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "PCB概念",
    "rise": -4.47,
    "rate": 0,
    "tag": "",
    "hotTag": "连续82天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "锂电池概念",
    "rise": -1.31,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "黄金概念",
    "rise": 0.67,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "人形机器人",
    "rise": -2.05,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续423天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "算力租赁",
    "rise": -1.25,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续123天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光刻机",
    "rise": -5.18,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "商业航天",
    "rise": -1.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续188天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -2.14,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "猪肉",
    "rise": 1.4,
    "rate": 0,
    "tag": "",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "ST板块",
    "rise": -0.45,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": -4.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续88天上榜",
    "rankChg": 1,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "机器人概念",
    "rise": -1.51,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续90天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": -3.61,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "机构同步释放积极信号！白酒概念震荡走强，舍得酒业涨停",
    "desc": "",
    "heat": 319066,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "均瑶健康",
        "code": "605388",
        "chg": 10.071942
      }
    ]
  },
  {
    "title": "月之暗面Kimi完成35亿美元F轮融资 Pre IPO轮已提前开启",
    "desc": "",
    "heat": 240772,
    "direction": "Kimi",
    "themes": [
      "Kimi"
    ],
    "stocks": [
      {
        "name": "返利科技",
        "code": "600228",
        "chg": 10.06006
      }
    ]
  },
  {
    "title": "三部门联合发布《邮政业发展“十五五”规划》",
    "desc": "",
    "heat": 213795,
    "direction": "物流",
    "themes": [
      "物流",
      "冷链物流",
      "智能物流",
      "低空物流"
    ],
    "stocks": [
      {
        "name": "一鸣食品",
        "code": "605179",
        "chg": 9.993754
      }
    ]
  },
  {
    "title": "超预期！三星Q2净利同比飙升近13倍，半导体业务营利超89万亿韩元，预计需求持续强劲",
    "desc": "",
    "heat": 50346,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "德明利",
        "code": "001309",
        "chg": 1.280388
      }
    ]
  },
  {
    "title": "SpaceX获得美国太空军16亿美元的合同",
    "desc": "",
    "heat": 45600,
    "direction": "SpaceX",
    "themes": [
      "商业航天"
    ],
    "stocks": [
      {
        "name": "苏州科达",
        "code": "603660",
        "chg": 9.96264
      }
    ]
  },
  {
    "title": "ChinaJoy开幕在即，游戏板块估值修复一触即发？",
    "desc": "",
    "heat": 43760,
    "direction": "网络游戏",
    "themes": [
      "网络游戏",
      "游戏"
    ],
    "stocks": [
      {
        "name": "佳云科技",
        "code": "300242",
        "chg": 7.356322
      }
    ]
  },
  {
    "title": "突发！美军对伊朗发动攻击，国际油价单日暴涨超6%",
    "desc": "",
    "heat": 2266,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "中远海能",
        "code": "600026",
        "chg": 6.141439
      }
    ]
  },
  {
    "title": "两大MLCC原厂开启新一轮涨价",
    "desc": "",
    "heat": 1280,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "风华高科",
        "code": "000636",
        "chg": 2.273206
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+9.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+4.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+3.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草铵膦",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "财税改革",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农药",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虫害防治",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "旅游",
    "change": "+2.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "调味品",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+2.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "预制菜",
    "change": "+1.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 7,
    "hot_rank_chg": -1,
    "stock_cnt": 5837,
    "price": "12.19",
    "change": "5.00",
    "market_id": "33",
    "circulate_market_value": "11377214500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.05
      },
      {
        "name": "新疆概念",
        "change_pct": 0.35
      },
      {
        "name": "光伏",
        "change_pct": -1.15
      },
      {
        "name": "风电",
        "change_pct": -0.42
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 9,
    "hot_rank_chg": 17,
    "stock_cnt": 5837,
    "price": "10.71",
    "change": "5.10",
    "market_id": "17",
    "circulate_market_value": "7286223700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.82
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "雄安新区",
        "change_pct": 0.09
      },
      {
        "name": "煤化工",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 13,
    "hot_rank_chg": -1,
    "stock_cnt": 5837,
    "price": "10.97",
    "change": "-9.56",
    "market_id": "33",
    "circulate_market_value": "7513379300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.14
      },
      {
        "name": "核电",
        "change_pct": -1.32
      },
      {
        "name": "充电桩",
        "change_pct": -1.46
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.26
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.05
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "智能电网",
        "change_pct": -1.45
      },
      {
        "name": "核聚变",
        "change_pct": -1.94
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 15,
    "hot_rank_chg": 3,
    "stock_cnt": 5837,
    "price": "9.73",
    "change": "2.75",
    "market_id": "17",
    "circulate_market_value": "8454910600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.55
      },
      {
        "name": "快递物流",
        "change_pct": 0.59
      },
      {
        "name": "新零售",
        "change_pct": 1.82
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.41
      },
      {
        "name": "旅游",
        "change_pct": 2.23
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "物业管理",
        "change_pct": 1.45
      },
      {
        "name": "免税店概念",
        "change_pct": 1.59
      },
      {
        "name": "自贸区",
        "change_pct": 0.91
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 16,
    "hot_rank_chg": 4,
    "stock_cnt": 5837,
    "price": "5.68",
    "change": "-9.84",
    "market_id": "33",
    "circulate_market_value": "5867075300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.16
      },
      {
        "name": "锂电池",
        "change_pct": -1.31
      },
      {
        "name": "强势人气股",
        "change_pct": -2.36
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -5.0
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.69
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 17,
    "hot_rank_chg": 13,
    "stock_cnt": 5837,
    "price": "8.79",
    "change": "0.23",
    "market_id": "33",
    "circulate_market_value": "5808053900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.14
      },
      {
        "name": "国产软件",
        "change_pct": 0.57
      },
      {
        "name": "人工智能",
        "change_pct": -0.55
      },
      {
        "name": "充电桩",
        "change_pct": -1.46
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.26
      },
      {
        "name": "军民融合",
        "change_pct": -1.32
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.43
      },
      {
        "name": "人脸识别",
        "change_pct": -0.24
      },
      {
        "name": "水利",
        "change_pct": -0.14
      },
      {
        "name": "物联网",
        "change_pct": -1.3
      },
      {
        "name": "大数据",
        "change_pct": 0.39
      },
      {
        "name": "智慧城市",
        "change_pct": -0.59
      },
      {
        "name": "军工",
        "change_pct": -1.13
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.05
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "智慧安防",
        "change_pct": -0.99
      },
      {
        "name": "无人机",
        "change_pct": -1.47
      },
      {
        "name": "虚拟电厂",
        "change_pct": -0.72
      },
      {
        "name": "信创",
        "change_pct": 0.24
      },
      {
        "name": "元宇宙",
        "change_pct": 0.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.76
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.04
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.57
      },
      {
        "name": "数字乡村",
        "change_pct": 0.79
      },
      {
        "name": "华为海思",
        "change_pct": -2.6
      },
      {
        "name": "闪存",
        "change_pct": -4.71
      },
      {
        "name": "UWB超宽带",
        "change_pct": -1.39
      },
      {
        "name": "智慧政务",
        "change_pct": 0.19
      },
      {
        "name": "特高压",
        "change_pct": -1.7
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.64
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      },
      {
        "name": "时空大数据",
        "change_pct": 0.25
      },
      {
        "name": "服务器",
        "change_pct": -3.76
      },
      {
        "name": "智能电网",
        "change_pct": -1.45
      },
      {
        "name": "磁电存储",
        "change_pct": 0.2
      },
      {
        "name": "军工信息化",
        "change_pct": -0.91
      },
      {
        "name": "光纤概念",
        "change_pct": -5.12
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 0.03
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 22,
    "hot_rank_chg": 9,
    "stock_cnt": 5837,
    "price": "4.44",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "4524031400.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "酒店",
    "xgb_concepts": [
      {
        "name": "湖南国企改革",
        "change_pct": 0.44
      },
      {
        "name": "旅游",
        "change_pct": 2.23
      },
      {
        "name": "物业管理",
        "change_pct": 1.45
      },
      {
        "name": "预制菜",
        "change_pct": 1.95
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "餐饮",
        "change_pct": 3.55
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 23,
    "hot_rank_chg": -2,
    "stock_cnt": 5837,
    "price": "7.01",
    "change": "-2.50",
    "market_id": "33",
    "circulate_market_value": "23320840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.18
      },
      {
        "name": "核电",
        "change_pct": -1.33
      },
      {
        "name": "5G",
        "change_pct": -4.03
      },
      {
        "name": "一带一路",
        "change_pct": -0.03
      },
      {
        "name": "充电桩",
        "change_pct": -1.48
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.7
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "特高压",
        "change_pct": -1.72
      },
      {
        "name": "智能电网",
        "change_pct": -1.48
      },
      {
        "name": "海洋经济",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 32,
    "hot_rank_chg": -7,
    "stock_cnt": 5837,
    "price": "5.47",
    "change": "2.05",
    "market_id": "17",
    "circulate_market_value": "13751064000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.55
      },
      {
        "name": "工业大麻",
        "change_pct": -0.56
      },
      {
        "name": "中药",
        "change_pct": -0.13
      },
      {
        "name": "强势人气股",
        "change_pct": -2.42
      },
      {
        "name": "保健品",
        "change_pct": 0.24
      },
      {
        "name": "民营医院",
        "change_pct": 0.49
      },
      {
        "name": "医药",
        "change_pct": -0.82
      },
      {
        "name": "化学原料药",
        "change_pct": -0.83
      },
      {
        "name": "流感",
        "change_pct": -0.57
      },
      {
        "name": "振兴东北",
        "change_pct": 0.78
      },
      {
        "name": "食品",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 35,
    "hot_rank_chg": 18,
    "stock_cnt": 5837,
    "price": "8.01",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2278697700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "AI教育",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.21
      },
      {
        "name": "密集调研",
        "change_pct": -1.8
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.88
      },
      {
        "name": "教育",
        "change_pct": 1.05
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "职业教育",
        "change_pct": 1.53
      },
      {
        "name": "在线教育",
        "change_pct": 1.87
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.52
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      },
      {
        "name": "智谱AI",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 36,
    "hot_rank_chg": -23,
    "stock_cnt": 5837,
    "price": "5.41",
    "change": "-5.25",
    "market_id": "33",
    "circulate_market_value": "191336200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.9
      },
      {
        "name": "手机产业链",
        "change_pct": -3.59
      },
      {
        "name": "超高清视频",
        "change_pct": -1.45
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.13
      },
      {
        "name": "电竞",
        "change_pct": 0.29
      },
      {
        "name": "半导体",
        "change_pct": -5.6
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.31
      },
      {
        "name": "VR&AR",
        "change_pct": -2.83
      },
      {
        "name": "OLED",
        "change_pct": -3.74
      },
      {
        "name": "京津冀",
        "change_pct": -0.26
      },
      {
        "name": "物联网",
        "change_pct": -1.32
      },
      {
        "name": "指纹识别",
        "change_pct": -2.76
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.54
      },
      {
        "name": "白马股",
        "change_pct": 0.25
      },
      {
        "name": "智能制造",
        "change_pct": -1.79
      },
      {
        "name": "小米概念股",
        "change_pct": -3.06
      },
      {
        "name": "国产芯片",
        "change_pct": -4.6
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.37
      },
      {
        "name": "全息概念",
        "change_pct": -0.95
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.14
      },
      {
        "name": "MicroLED",
        "change_pct": -3.92
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.54
      },
      {
        "name": "智能手表",
        "change_pct": -3.74
      },
      {
        "name": "MiniLED",
        "change_pct": -3.71
      },
      {
        "name": "传感器",
        "change_pct": -2.89
      },
      {
        "name": "大硅片",
        "change_pct": -6.94
      },
      {
        "name": "AI PC",
        "change_pct": -3.18
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      },
      {
        "name": "回购",
        "change_pct": -0.56
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.88
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -5.54
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 38,
    "hot_rank_chg": 10,
    "stock_cnt": 5837,
    "price": "6.44",
    "change": "-2.42",
    "market_id": "33",
    "circulate_market_value": "7514474900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.84
      },
      {
        "name": "国产软件",
        "change_pct": 0.57
      },
      {
        "name": "一带一路",
        "change_pct": -0.03
      },
      {
        "name": "量子通信",
        "change_pct": -1.92
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "网络安全",
        "change_pct": -0.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.27
      },
      {
        "name": "物联网",
        "change_pct": -1.32
      },
      {
        "name": "大数据",
        "change_pct": 0.38
      },
      {
        "name": "破净股",
        "change_pct": 0.89
      },
      {
        "name": "数字经济",
        "change_pct": 0.28
      },
      {
        "name": "国产芯片",
        "change_pct": -4.6
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.4
      },
      {
        "name": "信创",
        "change_pct": 0.24
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.22
      },
      {
        "name": "跨境支付",
        "change_pct": 1.77
      },
      {
        "name": "web3.0",
        "change_pct": 0.85
      },
      {
        "name": "数字人民币",
        "change_pct": 0.91
      },
      {
        "name": "智慧政务",
        "change_pct": 0.21
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.52
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.65
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.43
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.66
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      },
      {
        "name": "回购",
        "change_pct": -0.56
      },
      {
        "name": "智能电网",
        "change_pct": -1.48
      },
      {
        "name": "低空经济",
        "change_pct": -1.22
      },
      {
        "name": "量子计算",
        "change_pct": -1.72
      },
      {
        "name": "财税改革",
        "change_pct": 2.95
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.64
      }
    ]
  },
  {
    "code": "002036",
    "name": "联创电子",
    "hot_rank": 39,
    "hot_rank_chg": 236,
    "stock_cnt": 5837,
    "price": "7.38",
    "change": "2.08",
    "market_id": "33",
    "circulate_market_value": "7789352200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 0.57
      },
      {
        "name": "折叠屏",
        "change_pct": -3.9
      },
      {
        "name": "手机产业链",
        "change_pct": -3.59
      },
      {
        "name": "超高清视频",
        "change_pct": -1.45
      },
      {
        "name": "无线充电",
        "change_pct": -3.33
      },
      {
        "name": "特斯拉",
        "change_pct": -1.29
      },
      {
        "name": "股权转让",
        "change_pct": -1.14
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.59
      },
      {
        "name": "VR&AR",
        "change_pct": -2.83
      },
      {
        "name": "OLED",
        "change_pct": -3.74
      },
      {
        "name": "3D感应",
        "change_pct": -3.09
      },
      {
        "name": "人脸识别",
        "change_pct": -0.24
      },
      {
        "name": "3D玻璃",
        "change_pct": -2.45
      },
      {
        "name": "指纹识别",
        "change_pct": -2.76
      },
      {
        "name": "手势识别",
        "change_pct": -1.77
      },
      {
        "name": "虹膜识别",
        "change_pct": -1.65
      },
      {
        "name": "复牌股",
        "change_pct": 9.68
      },
      {
        "name": "机器视觉",
        "change_pct": -2.73
      },
      {
        "name": "无人机",
        "change_pct": -1.48
      },
      {
        "name": "智能制造",
        "change_pct": -1.79
      },
      {
        "name": "国产芯片",
        "change_pct": -4.6
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.37
      },
      {
        "name": "激光雷达",
        "change_pct": -4.61
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "电子后视镜",
        "change_pct": -1.71
      },
      {
        "name": "无线耳机",
        "change_pct": -3.61
      },
      {
        "name": "云游戏",
        "change_pct": 0.04
      },
      {
        "name": "AI PC",
        "change_pct": -3.18
      },
      {
        "name": "国资入股",
        "change_pct": -0.15
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      },
      {
        "name": "毫米波雷达",
        "change_pct": -3.36
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.88
      },
      {
        "name": "英伟达概念",
        "change_pct": -4.38
      },
      {
        "name": "人形机器人",
        "change_pct": -2.43
      },
      {
        "name": "智能座舱",
        "change_pct": -2.1
      },
      {
        "name": "AI手机",
        "change_pct": -3.18
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 42,
    "hot_rank_chg": 10,
    "stock_cnt": 5837,
    "price": "5.87",
    "change": "-1.34",
    "market_id": "17",
    "circulate_market_value": "39297425000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -2.42
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.74
      },
      {
        "name": "京津冀",
        "change_pct": -0.26
      },
      {
        "name": "火电",
        "change_pct": -1.02
      },
      {
        "name": "风电",
        "change_pct": -0.44
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 43,
    "hot_rank_chg": 39,
    "stock_cnt": 5837,
    "price": "11.27",
    "change": "4.35",
    "market_id": "33",
    "circulate_market_value": "6578617600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.33
      },
      {
        "name": "一带一路",
        "change_pct": -0.03
      },
      {
        "name": "天然气",
        "change_pct": -0.24
      },
      {
        "name": "油气改革",
        "change_pct": 0.33
      },
      {
        "name": "页岩气",
        "change_pct": 0.01
      },
      {
        "name": "深地经济",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 49,
    "hot_rank_chg": 11,
    "stock_cnt": 5837,
    "price": "3.48",
    "change": "2.96",
    "market_id": "17",
    "circulate_market_value": "4446047300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.13
      },
      {
        "name": "甲醇",
        "change_pct": 0.83
      },
      {
        "name": "化肥",
        "change_pct": 1.56
      },
      {
        "name": "保健品",
        "change_pct": 0.24
      },
      {
        "name": "民营医院",
        "change_pct": 0.49
      },
      {
        "name": "医药",
        "change_pct": -0.82
      },
      {
        "name": "煤化工",
        "change_pct": 1.06
      },
      {
        "name": "食品",
        "change_pct": 1.23
      },
      {
        "name": "大农业",
        "change_pct": 1.24
      },
      {
        "name": "干细胞",
        "change_pct": -0.75
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 51,
    "hot_rank_chg": -22,
    "stock_cnt": 5837,
    "price": "5.98",
    "change": "-3.08",
    "market_id": "17",
    "circulate_market_value": "74128613000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.01
      },
      {
        "name": "核电",
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -2.42
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.74
      },
      {
        "name": "水电",
        "change_pct": -0.27
      },
      {
        "name": "火电",
        "change_pct": -1.02
      },
      {
        "name": "光伏",
        "change_pct": -1.21
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "算电协同",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 59,
    "hot_rank_chg": -23,
    "stock_cnt": 5837,
    "price": "11.58",
    "change": "-2.52",
    "market_id": "33",
    "circulate_market_value": "10962079800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.14
      },
      {
        "name": "锂电池",
        "change_pct": -1.37
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.32
      },
      {
        "name": "举牌",
        "change_pct": 0.47
      },
      {
        "name": "纺织服装",
        "change_pct": 0.37
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.38
      },
      {
        "name": "教育",
        "change_pct": 1.05
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "抗菌面料",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "002607",
    "name": "中公教育",
    "hot_rank": 61,
    "hot_rank_chg": -16,
    "stock_cnt": 5837,
    "price": "2.09",
    "change": "0.48",
    "market_id": "33",
    "circulate_market_value": "11585790000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "教育",
        "change_pct": 1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "低价股",
        "change_pct": 0.24
      },
      {
        "name": "职业教育",
        "change_pct": 1.53
      },
      {
        "name": "在线教育",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 63,
    "hot_rank_chg": -14,
    "stock_cnt": 5837,
    "price": "6.77",
    "change": "1.20",
    "market_id": "33",
    "circulate_market_value": "38019192000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 0.57
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.59
      },
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "网络安全",
        "change_pct": -0.61
      },
      {
        "name": "游戏",
        "change_pct": 0.82
      },
      {
        "name": "大数据",
        "change_pct": 0.38
      },
      {
        "name": "脑科学",
        "change_pct": -1.48
      },
      {
        "name": "百度概念股",
        "change_pct": 1.17
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.45
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.4
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.13
      },
      {
        "name": "自动刹车",
        "change_pct": 0.07
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.55
      },
      {
        "name": "AI医疗",
        "change_pct": -0.59
      },
      {
        "name": "区块链",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 69,
    "hot_rank_chg": 74,
    "stock_cnt": 5837,
    "price": "3.42",
    "change": "-2.56",
    "market_id": "33",
    "circulate_market_value": "2431060700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.57
      },
      {
        "name": "影视",
        "change_pct": 0.17
      },
      {
        "name": "旅游",
        "change_pct": 2.2
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.75
      },
      {
        "name": "AI营销",
        "change_pct": 1.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 72,
    "hot_rank_chg": 50,
    "stock_cnt": 5837,
    "price": "7.63",
    "change": "3.25",
    "market_id": "33",
    "circulate_market_value": "4133338900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.33
      },
      {
        "name": "油气管网",
        "change_pct": 0.9
      },
      {
        "name": "海工装备",
        "change_pct": -0.5
      },
      {
        "name": "举牌",
        "change_pct": 0.47
      },
      {
        "name": "天然气",
        "change_pct": -0.24
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.38
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "页岩气",
        "change_pct": 0.01
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "深地经济",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "605388",
    "name": "均瑶健康",
    "hot_rank": 76,
    "hot_rank_chg": 71,
    "stock_cnt": 5837,
    "price": "6.12",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3674962100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "乳业",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.8
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.32
      },
      {
        "name": "食品",
        "change_pct": 1.23
      },
      {
        "name": "大农业",
        "change_pct": 1.24
      },
      {
        "name": "植物奶",
        "change_pct": 2.24
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 0.02
      },
      {
        "name": "饮料",
        "change_pct": 1.79
      }
    ]
  },
  {
    "code": "002969",
    "name": "嘉美包装",
    "hot_rank": 78,
    "hot_rank_chg": -14,
    "stock_cnt": 5837,
    "price": "12.34",
    "change": "-6.09",
    "market_id": "33",
    "circulate_market_value": "13462498000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "包装印刷",
        "change_pct": -0.49
      },
      {
        "name": "啤酒",
        "change_pct": 2.14
      },
      {
        "name": "植物奶",
        "change_pct": 2.24
      },
      {
        "name": "饮料",
        "change_pct": 1.79
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 82,
    "hot_rank_chg": -3,
    "stock_cnt": 5837,
    "price": "6.86",
    "change": "-3.92",
    "market_id": "33",
    "circulate_market_value": "4504700400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.55
      },
      {
        "name": "新零售",
        "change_pct": 1.82
      },
      {
        "name": "农业种植",
        "change_pct": 1.09
      },
      {
        "name": "冷链",
        "change_pct": 0.04
      },
      {
        "name": "大农业",
        "change_pct": 1.24
      },
      {
        "name": "预制菜",
        "change_pct": 1.9
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.35
      },
      {
        "name": "免税店概念",
        "change_pct": 1.61
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 93,
    "hot_rank_chg": -3,
    "stock_cnt": 5837,
    "price": "6.76",
    "change": "-4.92",
    "market_id": "17",
    "circulate_market_value": "13710089000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.01
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.74
      },
      {
        "name": "火电",
        "change_pct": -1.02
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "碳中和",
        "change_pct": -0.11
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "002045",
    "name": "国光电器",
    "hot_rank": 94,
    "hot_rank_chg": 68,
    "stock_cnt": 5837,
    "price": "8.31",
    "change": "-2.00",
    "market_id": "33",
    "circulate_market_value": "4667933800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -3.59
      },
      {
        "name": "电子烟",
        "change_pct": -1.95
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.13
      },
      {
        "name": "锂电池",
        "change_pct": -1.37
      },
      {
        "name": "VR&AR",
        "change_pct": -2.83
      },
      {
        "name": "智能音箱",
        "change_pct": -3.55
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "黑色家电",
        "change_pct": -1.03
      },
      {
        "name": "家电",
        "change_pct": -0.28
      },
      {
        "name": "固态电池",
        "change_pct": -1.08
      },
      {
        "name": "NFT",
        "change_pct": 0.89
      },
      {
        "name": "元宇宙",
        "change_pct": 0.09
      },
      {
        "name": "无线耳机",
        "change_pct": -3.61
      },
      {
        "name": "智能手表",
        "change_pct": -3.74
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.52
      },
      {
        "name": "华为产业链",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "002451",
    "name": "摩恩电气",
    "hot_rank": 100,
    "hot_rank_chg": 1313,
    "stock_cnt": 5837,
    "price": "7.06",
    "change": "0.14",
    "market_id": "33",
    "circulate_market_value": "3100391900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 0.67
      },
      {
        "name": "5G",
        "change_pct": -4.03
      },
      {
        "name": "举牌",
        "change_pct": 0.47
      },
      {
        "name": "充电桩",
        "change_pct": -1.48
      },
      {
        "name": "光伏",
        "change_pct": -1.21
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.06
      },
      {
        "name": "供应链金融",
        "change_pct": 0.62
      },
      {
        "name": "智能电网",
        "change_pct": -1.48
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000636", "name": "风华高科", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5837, "price": "48.48", "change": "2.04", "market_id": "33", "circulate_market_value": "56057268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5837, "price": "50.75", "change": "-4.16", "market_id": "17", "circulate_market_value": "228529230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5837, "price": "33.60", "change": "-9.99", "market_id": "33", "circulate_market_value": "96098442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 4, "hot_rank_chg": 15, "stock_cnt": 5837, "price": "17.61", "change": "9.99", "market_id": "17", "circulate_market_value": "7061610000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "原奶周期"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 5, "hot_rank_chg": 45, "stock_cnt": 5837, "price": "31.88", "change": "3.81", "market_id": "17", "circulate_market_value": "46608394000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5837, "price": "349.35", "change": "-4.03", "market_id": "17", "circulate_market_value": "233577770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5837, "price": "12.19", "change": "5.00", "market_id": "33", "circulate_market_value": "11377214500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.36}, {"name": "新疆国企改革", "change_pct": 1.05}, {"name": "新疆概念", "change_pct": 0.35}, {"name": "光伏", "change_pct": -1.15}, {"name": "风电", "change_pct": -0.42}, {"name": "储能", "change_pct": -1.22}, {"name": "国企改革", "change_pct": 0.26}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5837, "price": "826.11", "change": "-13.13", "market_id": "33", "circulate_market_value": "917465120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 9, "hot_rank_chg": 17, "stock_cnt": 5837, "price": "10.71", "change": "5.10", "market_id": "17", "circulate_market_value": "7286223700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.82}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "雄安新区", "change_pct": 0.09}, {"name": "煤化工", "change_pct": 1.06}]}, {"code": "002156", "name": "通富微电", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5837, "price": "55.89", "change": "-10.00", "market_id": "33", "circulate_market_value": "84810405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5837, "price": "358.85", "change": "1.20", "market_id": "33", "circulate_market_value": "59220927000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 54, "stock_cnt": 5837, "price": "90.33", "change": "-6.83", "market_id": "17", "circulate_market_value": "32519215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 13, "hot_rank_chg": -1, "stock_cnt": 5837, "price": "10.97", "change": "-9.56", "market_id": "33", "circulate_market_value": "7513379300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.14}, {"name": "核电", "change_pct": -1.32}, {"name": "充电桩", "change_pct": -1.46}, {"name": "云计算数据中心", "change_pct": -1.26}, {"name": "新能源汽车", "change_pct": -1.05}, {"name": "储能", "change_pct": -1.22}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "智能电网", "change_pct": -1.45}, {"name": "核聚变", "change_pct": -1.94}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 14, "hot_rank_chg": -7, "stock_cnt": 5837, "price": "15.51", "change": "-4.02", "market_id": "17", "circulate_market_value": "22841683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5837, "price": "9.73", "change": "2.75", "market_id": "17", "circulate_market_value": "8454910600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.55}, {"name": "快递物流", "change_pct": 0.59}, {"name": "新零售", "change_pct": 1.82}, {"name": "福建自贸/海西概念", "change_pct": 0.41}, {"name": "旅游", "change_pct": 2.23}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "物业管理", "change_pct": 1.45}, {"name": "免税店概念", "change_pct": 1.59}, {"name": "自贸区", "change_pct": 0.91}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 16, "hot_rank_chg": 4, "stock_cnt": 5837, "price": "5.68", "change": "-9.84", "market_id": "33", "circulate_market_value": "5867075300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.16}, {"name": "锂电池", "change_pct": -1.31}, {"name": "强势人气股", "change_pct": -2.36}, {"name": "铜箔/覆铜板", "change_pct": -5.0}, {"name": "粤港澳大湾区", "change_pct": 0.69}, {"name": "新能源汽车", "change_pct": -1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.11}]}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 17, "hot_rank_chg": 13, "stock_cnt": 5837, "price": "8.79", "change": "0.23", "market_id": "33", "circulate_market_value": "5808053900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.14}, {"name": "国产软件", "change_pct": 0.57}, {"name": "人工智能", "change_pct": -0.55}, {"name": "充电桩", "change_pct": -1.46}, {"name": "云计算数据中心", "change_pct": -1.26}, {"name": "军民融合", "change_pct": -1.32}, {"name": "磁悬浮", "change_pct": -0.43}, {"name": "人脸识别", "change_pct": -0.24}, {"name": "水利", "change_pct": -0.14}, {"name": "物联网", "change_pct": -1.3}, {"name": "大数据", "change_pct": 0.39}, {"name": "智慧城市", "change_pct": -0.59}, {"name": "军工", "change_pct": -1.13}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": -1.05}, {"name": "储能", "change_pct": -1.22}, {"name": "智慧安防", "change_pct": -0.99}, {"name": "无人机", "change_pct": -1.47}, {"name": "虚拟电厂", "change_pct": -0.72}, {"name": "信创", "change_pct": 0.24}, {"name": "元宇宙", "change_pct": 0.1}, {"name": "东数西算/算力", "change_pct": -1.76}, {"name": "新型城镇化", "change_pct": -0.04}, {"name": "AIGC概念", "change_pct": 0.57}, {"name": "数字乡村", "change_pct": 0.79}, {"name": "华为海思", "change_pct": -2.6}, {"name": "闪存", "change_pct": -4.71}, {"name": "UWB超宽带", "change_pct": -1.39}, {"name": "智慧政务", "change_pct": 0.19}, {"name": "特高压", "change_pct": -1.7}, {"name": "华为云·鲲鹏", "change_pct": 0.64}, {"name": "华为产业链", "change_pct": -1.7}, {"name": "时空大数据", "change_pct": 0.25}, {"name": "服务器", "change_pct": -3.76}, {"name": "智能电网", "change_pct": -1.45}, {"name": "磁电存储", "change_pct": 0.2}, {"name": "军工信息化", "change_pct": -0.91}, {"name": "光纤概念", "change_pct": -5.12}, {"name": "雅江电站概念股", "change_pct": 0.03}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5837, "price": "58.69", "change": "1.24", "market_id": "17", "circulate_market_value": "7669210100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5837, "price": "15.78", "change": "-9.31", "market_id": "17", "circulate_market_value": "33004536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 20, "hot_rank_chg": -6, "stock_cnt": 5837, "price": "19.10", "change": "2.63", "market_id": "33", "circulate_market_value": "8639671100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 21, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "161.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "224306850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000428", "name": "华天酒店", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5837, "price": "4.44", "change": "9.90", "market_id": "33", "circulate_market_value": "4524031400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "酒店", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 0.44}, {"name": "旅游", "change_pct": 2.23}, {"name": "物业管理", "change_pct": 1.45}, {"name": "预制菜", "change_pct": 1.95}, {"name": "国企改革", "change_pct": 0.26}, {"name": "餐饮", "change_pct": 3.55}]}, {"code": "002498", "name": "汉缆股份", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5837, "price": "7.01", "change": "-2.50", "market_id": "33", "circulate_market_value": "23320840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.18}, {"name": "核电", "change_pct": -1.33}, {"name": "5G", "change_pct": -4.03}, {"name": "一带一路", "change_pct": -0.03}, {"name": "充电桩", "change_pct": -1.48}, {"name": "氢能源/燃料电池", "change_pct": -0.7}, {"name": "风电", "change_pct": -0.44}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "储能", "change_pct": -1.24}, {"name": "特高压", "change_pct": -1.72}, {"name": "智能电网", "change_pct": -1.48}, {"name": "海洋经济", "change_pct": -0.84}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 24, "hot_rank_chg": 4, "stock_cnt": 5837, "price": "19.90", "change": "-2.83", "market_id": "33", "circulate_market_value": "8375214100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 25, "hot_rank_chg": 16, "stock_cnt": 5837, "price": "20.49", "change": "9.98", "market_id": "17", "circulate_market_value": "4964112300.00", "change_type": "1", "change_section": "8", "change_days": "8", "change_reason": "拟收购欧康诺"}, {"code": "600895", "name": "张江高科", "hot_rank": 26, "hot_rank_chg": 11, "stock_cnt": 5837, "price": "32.56", "change": "3.86", "market_id": "17", "circulate_market_value": "50425332000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 27, "hot_rank_chg": -16, "stock_cnt": 5837, "price": "31.63", "change": "-1.12", "market_id": "33", "circulate_market_value": "34121411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 28, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "65.13", "change": "-9.14", "market_id": "17", "circulate_market_value": "116544571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 29, "hot_rank_chg": 5, "stock_cnt": 5837, "price": "35.91", "change": "-9.91", "market_id": "17", "circulate_market_value": "30408196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 30, "hot_rank_chg": 24, "stock_cnt": 5837, "price": "70.07", "change": "-6.50", "market_id": "33", "circulate_market_value": "102839578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 31, "hot_rank_chg": -9, "stock_cnt": 5837, "price": "47.17", "change": "-5.19", "market_id": "17", "circulate_market_value": "115836640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5837, "price": "5.47", "change": "2.05", "market_id": "17", "circulate_market_value": "13751064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.55}, {"name": "工业大麻", "change_pct": -0.56}, {"name": "中药", "change_pct": -0.13}, {"name": "强势人气股", "change_pct": -2.42}, {"name": "保健品", "change_pct": 0.24}, {"name": "民营医院", "change_pct": 0.49}, {"name": "医药", "change_pct": -0.82}, {"name": "化学原料药", "change_pct": -0.83}, {"name": "流感", "change_pct": -0.57}, {"name": "振兴东北", "change_pct": 0.78}, {"name": "食品", "change_pct": 1.23}]}, {"code": "002185", "name": "华天科技", "hot_rank": 33, "hot_rank_chg": -9, "stock_cnt": 5837, "price": "15.25", "change": "-7.97", "market_id": "33", "circulate_market_value": "50670439000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 34, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "36.77", "change": "-8.42", "market_id": "33", "circulate_market_value": "57897442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 35, "hot_rank_chg": 18, "stock_cnt": 5837, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "2278697700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI教育", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.21}, {"name": "密集调研", "change_pct": -1.8}, {"name": "ST摘帽", "change_pct": -0.88}, {"name": "教育", "change_pct": 1.05}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "职业教育", "change_pct": 1.53}, {"name": "在线教育", "change_pct": 1.87}, {"name": "华为鸿蒙", "change_pct": 0.52}, {"name": "华为产业链", "change_pct": -1.7}, {"name": "智谱AI", "change_pct": 0.51}]}, {"code": "000725", "name": "京东方A", "hot_rank": 36, "hot_rank_chg": -23, "stock_cnt": 5837, "price": "5.41", "change": "-5.25", "market_id": "33", "circulate_market_value": "191336200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.9}, {"name": "手机产业链", "change_pct": -3.59}, {"name": "超高清视频", "change_pct": -1.45}, {"name": "苹果产业链", "change_pct": -4.13}, {"name": "电竞", "change_pct": 0.29}, {"name": "半导体", "change_pct": -5.6}, {"name": "人工智能", "change_pct": -0.57}, {"name": "互联网医疗", "change_pct": 0.31}, {"name": "VR&AR", "change_pct": -2.83}, {"name": "OLED", "change_pct": -3.74}, {"name": "京津冀", "change_pct": -0.26}, {"name": "物联网", "change_pct": -1.32}, {"name": "指纹识别", "change_pct": -2.76}, {"name": "汽车零部件", "change_pct": -0.54}, {"name": "白马股", "change_pct": 0.25}, {"name": "智能制造", "change_pct": -1.79}, {"name": "小米概念股", "change_pct": -3.06}, {"name": "国产芯片", "change_pct": -4.6}, {"name": "液晶面板/LCD", "change_pct": -3.37}, {"name": "全息概念", "change_pct": -0.95}, {"name": "理想汽车概念股", "change_pct": 0.14}, {"name": "MicroLED", "change_pct": -3.92}, {"name": "钙钛矿电池", "change_pct": -1.54}, {"name": "智能手表", "change_pct": -3.74}, {"name": "MiniLED", "change_pct": -3.71}, {"name": "传感器", "change_pct": -2.89}, {"name": "大硅片", "change_pct": -6.94}, {"name": "AI PC", "change_pct": -3.18}, {"name": "华为产业链", "change_pct": -1.7}, {"name": "回购", "change_pct": -0.56}, {"name": "智能眼镜/MR头显", "change_pct": -3.88}, {"name": "玻璃基板封装", "change_pct": -5.54}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 37, "hot_rank_chg": 48, "stock_cnt": 5837, "price": "63.27", "change": "-5.30", "market_id": "33", "circulate_market_value": "29437780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 38, "hot_rank_chg": 10, "stock_cnt": 5837, "price": "6.44", "change": "-2.42", "market_id": "33", "circulate_market_value": "7514474900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.84}, {"name": "国产软件", "change_pct": 0.57}, {"name": "一带一路", "change_pct": -0.03}, {"name": "量子通信", "change_pct": -1.92}, {"name": "人工智能", "change_pct": -0.57}, {"name": "网络安全", "change_pct": -0.61}, {"name": "云计算数据中心", "change_pct": -1.27}, {"name": "物联网", "change_pct": -1.32}, {"name": "大数据", "change_pct": 0.38}, {"name": "破净股", "change_pct": 0.89}, {"name": "数字经济", "change_pct": 0.28}, {"name": "国产芯片", "change_pct": -4.6}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "腾讯概念股", "change_pct": -0.4}, {"name": "信创", "change_pct": 0.24}, {"name": "华为昇腾", "change_pct": -0.22}, {"name": "跨境支付", "change_pct": 1.77}, {"name": "web3.0", "change_pct": 0.85}, {"name": "数字人民币", "change_pct": 0.91}, {"name": "智慧政务", "change_pct": 0.21}, {"name": "华为鸿蒙", "change_pct": 0.52}, {"name": "华为云·鲲鹏", "change_pct": 0.65}, {"name": "卫星互联网", "change_pct": -2.43}, {"name": "智慧灯杆", "change_pct": -1.66}, {"name": "华为产业链", "change_pct": -1.7}, {"name": "回购", "change_pct": -0.56}, {"name": "智能电网", "change_pct": -1.48}, {"name": "低空经济", "change_pct": -1.22}, {"name": "量子计算", "change_pct": -1.72}, {"name": "财税改革", "change_pct": 2.95}, {"name": "DeepSeek概念股", "change_pct": -0.64}]}, {"code": "002036", "name": "联创电子", "hot_rank": 39, "hot_rank_chg": 236, "stock_cnt": 5837, "price": "7.38", "change": "2.08", "market_id": "33", "circulate_market_value": "7789352200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 0.57}, {"name": "折叠屏", "change_pct": -3.9}, {"name": "手机产业链", "change_pct": -3.59}, {"name": "超高清视频", "change_pct": -1.45}, {"name": "无线充电", "change_pct": -3.33}, {"name": "特斯拉", "change_pct": -1.29}, {"name": "股权转让", "change_pct": -1.14}, {"name": "无人驾驶", "change_pct": -1.59}, {"name": "VR&AR", "change_pct": -2.83}, {"name": "OLED", "change_pct": -3.74}, {"name": "3D感应", "change_pct": -3.09}, {"name": "人脸识别", "change_pct": -0.24}, {"name": "3D玻璃", "change_pct": -2.45}, {"name": "指纹识别", "change_pct": -2.76}, {"name": "手势识别", "change_pct": -1.77}, {"name": "虹膜识别", "change_pct": -1.65}, {"name": "复牌股", "change_pct": 9.68}, {"name": "机器视觉", "change_pct": -2.73}, {"name": "无人机", "change_pct": -1.48}, {"name": "智能制造", "change_pct": -1.79}, {"name": "国产芯片", "change_pct": -4.6}, {"name": "液晶面板/LCD", "change_pct": -3.37}, {"name": "激光雷达", "change_pct": -4.61}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "电子后视镜", "change_pct": -1.71}, {"name": "无线耳机", "change_pct": -3.61}, {"name": "云游戏", "change_pct": 0.04}, {"name": "AI PC", "change_pct": -3.18}, {"name": "国资入股", "change_pct": -0.15}, {"name": "华为产业链", "change_pct": -1.7}, {"name": "毫米波雷达", "change_pct": -3.36}, {"name": "智能眼镜/MR头显", "change_pct": -3.88}, {"name": "英伟达概念", "change_pct": -4.38}, {"name": "人形机器人", "change_pct": -2.43}, {"name": "智能座舱", "change_pct": -2.1}, {"name": "AI手机", "change_pct": -3.18}]}, {"code": "603823", "name": "百合花", "hot_rank": 40, "hot_rank_chg": 6, "stock_cnt": 5837, "price": "49.81", "change": "-9.99", "market_id": "17", "circulate_market_value": "20739275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 41, "hot_rank_chg": 152, "stock_cnt": 5837, "price": "102.90", "change": "-2.00", "market_id": "33", "circulate_market_value": "114593182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600578", "name": "京能电力", "hot_rank": 42, "hot_rank_chg": 10, "stock_cnt": 5837, "price": "5.87", "change": "-1.34", "market_id": "17", "circulate_market_value": "39297425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": 0.95}, {"name": "强势人气股", "change_pct": -2.42}, {"name": "电力体制改革", "change_pct": -0.74}, {"name": "京津冀", "change_pct": -0.26}, {"name": "火电", "change_pct": -1.02}, {"name": "风电", "change_pct": -0.44}]}, {"code": "300164", "name": "通源石油", "hot_rank": 43, "hot_rank_chg": 39, "stock_cnt": 5837, "price": "11.27", "change": "4.35", "market_id": "33", "circulate_market_value": "6578617600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.33}, {"name": "一带一路", "change_pct": -0.03}, {"name": "天然气", "change_pct": -0.24}, {"name": "油气改革", "change_pct": 0.33}, {"name": "页岩气", "change_pct": 0.01}, {"name": "深地经济", "change_pct": -0.19}]}, {"code": "300502", "name": "新易盛", "hot_rank": 44, "hot_rank_chg": -12, "stock_cnt": 5837, "price": "359.37", "change": "-14.68", "market_id": "33", "circulate_market_value": "450787530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5837, "price": "14.98", "change": "-9.98", "market_id": "17", "circulate_market_value": "11793400600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 46, "hot_rank_chg": -19, "stock_cnt": 5837, "price": "37.26", "change": "-2.94", "market_id": "17", "circulate_market_value": "147941620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301677", "name": "欣兴工具", "hot_rank": 47, "hot_rank_chg": 929, "stock_cnt": 5837, "price": "101.77", "change": "203.07", "market_id": "33", "circulate_market_value": "2181950600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 48, "hot_rank_chg": -15, "stock_cnt": 5837, "price": "136.96", "change": "-10.00", "market_id": "33", "circulate_market_value": "43624875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 49, "hot_rank_chg": 11, "stock_cnt": 5837, "price": "3.48", "change": "2.96", "market_id": "17", "circulate_market_value": "4446047300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.13}, {"name": "甲醇", "change_pct": 0.83}, {"name": "化肥", "change_pct": 1.56}, {"name": "保健品", "change_pct": 0.24}, {"name": "民营医院", "change_pct": 0.49}, {"name": "医药", "change_pct": -0.82}, {"name": "煤化工", "change_pct": 1.06}, {"name": "食品", "change_pct": 1.23}, {"name": "大农业", "change_pct": 1.24}, {"name": "干细胞", "change_pct": -0.75}, {"name": "阿尔茨海默病", "change_pct": -0.8}]}, {"code": "603619", "name": "中曼石油", "hot_rank": 50, "hot_rank_chg": 56, "stock_cnt": 5837, "price": "21.66", "change": "1.59", "market_id": "17", "circulate_market_value": "10018874400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 51, "hot_rank_chg": -22, "stock_cnt": 5837, "price": "5.98", "change": "-3.08", "market_id": "17", "circulate_market_value": "74128613000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.01}, {"name": "核电", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -2.42}, {"name": "电力体制改革", "change_pct": -0.74}, {"name": "水电", "change_pct": -0.27}, {"name": "火电", "change_pct": -1.02}, {"name": "光伏", "change_pct": -1.21}, {"name": "风电", "change_pct": -0.44}, {"name": "国企改革", "change_pct": 0.26}, {"name": "算电协同", "change_pct": -1.66}]}, {"code": "002558", "name": "巨人网络", "hot_rank": 52, "hot_rank_chg": -17, "stock_cnt": 5837, "price": "28.33", "change": "5.00", "market_id": "33", "circulate_market_value": "53823915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 53, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "35.75", "change": "7.26", "market_id": "17", "circulate_market_value": "25891165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5837, "price": "32.58", "change": "1.34", "market_id": "17", "circulate_market_value": "671412440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 55, "hot_rank_chg": 0, "stock_cnt": 5837, "price": "101.75", "change": "-6.56", "market_id": "33", "circulate_market_value": "190290180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5837, "price": "179.50", "change": "-7.39", "market_id": "33", "circulate_market_value": "5534231500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 57, "hot_rank_chg": 4, "stock_cnt": 5837, "price": "27.83", "change": "-5.15", "market_id": "17", "circulate_market_value": "94982389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 58, "hot_rank_chg": -2, "stock_cnt": 5837, "price": "28.11", "change": "-9.50", "market_id": "33", "circulate_market_value": "21985570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002083", "name": "孚日股份", "hot_rank": 59, "hot_rank_chg": -23, "stock_cnt": 5837, "price": "11.58", "change": "-2.52", "market_id": "33", "circulate_market_value": "10962079800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.14}, {"name": "锂电池", "change_pct": -1.37}, {"name": "优化生育（三孩）", "change_pct": 0.32}, {"name": "举牌", "change_pct": 0.47}, {"name": "纺织服装", "change_pct": 0.37}, {"name": "山东国企改革", "change_pct": -0.38}, {"name": "教育", "change_pct": 1.05}, {"name": "外贸受益概念", "change_pct": -0.19}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "抗菌面料", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.26}, {"name": "新冠病毒防治", "change_pct": -0.56}]}, {"code": "002882", "name": "金龙羽", "hot_rank": 60, "hot_rank_chg": 66, "stock_cnt": 5837, "price": "21.62", "change": "10.03", "market_id": "33", "circulate_market_value": "5335438700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池"}, {"code": "002607", "name": "中公教育", "hot_rank": 61, "hot_rank_chg": -16, "stock_cnt": 5837, "price": "2.09", "change": "0.48", "market_id": "33", "circulate_market_value": "11585790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.57}, {"name": "教育", "change_pct": 1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "低价股", "change_pct": 0.24}, {"name": "职业教育", "change_pct": 1.53}, {"name": "在线教育", "change_pct": 1.87}]}, {"code": "002440", "name": "闰土股份", "hot_rank": 62, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "13.70", "change": "0.44", "market_id": "33", "circulate_market_value": "12974587800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 63, "hot_rank_chg": -14, "stock_cnt": 5837, "price": "6.77", "change": "1.20", "market_id": "33", "circulate_market_value": "38019192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 0.57}, {"name": "无人驾驶", "change_pct": -1.59}, {"name": "人工智能", "change_pct": -0.57}, {"name": "网络安全", "change_pct": -0.61}, {"name": "游戏", "change_pct": 0.82}, {"name": "大数据", "change_pct": 0.38}, {"name": "脑科学", "change_pct": -1.48}, {"name": "百度概念股", "change_pct": 1.17}, {"name": "阿里巴巴概念股", "change_pct": -0.45}, {"name": "腾讯概念股", "change_pct": -0.4}, {"name": "字节跳动概念股", "change_pct": 0.13}, {"name": "自动刹车", "change_pct": 0.07}, {"name": "人工智能大模型", "change_pct": 0.58}, {"name": "短剧/互动影游", "change_pct": 0.55}, {"name": "AI医疗", "change_pct": -0.59}, {"name": "区块链", "change_pct": 0.59}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 64, "hot_rank_chg": -6, "stock_cnt": 5837, "price": "58.95", "change": "-0.29", "market_id": "33", "circulate_market_value": "50323766000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 65, "hot_rank_chg": 67, "stock_cnt": 5837, "price": "26.21", "change": "9.99", "market_id": "17", "circulate_market_value": "4794682700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "跨界存储"}, {"code": "001358", "name": "兴欣新材", "hot_rank": 66, "hot_rank_chg": 22, "stock_cnt": 5837, "price": "27.31", "change": "1.22", "market_id": "33", "circulate_market_value": "1392163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 68, "hot_rank_chg": -9, "stock_cnt": 5837, "price": "30.81", "change": "2.02", "market_id": "33", "circulate_market_value": "43269346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 69, "hot_rank_chg": 74, "stock_cnt": 5837, "price": "3.42", "change": "-2.56", "market_id": "33", "circulate_market_value": "2431060700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.57}, {"name": "影视", "change_pct": 0.17}, {"name": "旅游", "change_pct": 2.2}, {"name": "虚拟数字人", "change_pct": 0.75}, {"name": "AI营销", "change_pct": 1.09}, {"name": "短剧/互动影游", "change_pct": 0.55}, {"name": "IP经济/谷子经济", "change_pct": 0.55}]}, {"code": "688146", "name": "中船特气", "hot_rank": 70, "hot_rank_chg": -31, "stock_cnt": 5837, "price": "269.18", "change": "-10.62", "market_id": "17", "circulate_market_value": "39023251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000792", "name": "盐湖股份", "hot_rank": 71, "hot_rank_chg": 436, "stock_cnt": 5837, "price": "27.76", "change": "0.51", "market_id": "33", "circulate_market_value": "146839830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 72, "hot_rank_chg": 50, "stock_cnt": 5837, "price": "7.63", "change": "3.25", "market_id": "33", "circulate_market_value": "4133338900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.33}, {"name": "油气管网", "change_pct": 0.9}, {"name": "海工装备", "change_pct": -0.5}, {"name": "举牌", "change_pct": 0.47}, {"name": "天然气", "change_pct": -0.24}, {"name": "山东国企改革", "change_pct": -0.38}, {"name": "风电", "change_pct": -0.44}, {"name": "页岩气", "change_pct": 0.01}, {"name": "国企改革", "change_pct": 0.26}, {"name": "深地经济", "change_pct": -0.19}]}, {"code": "601138", "name": "工业富联", "hot_rank": 73, "hot_rank_chg": -11, "stock_cnt": 5837, "price": "53.54", "change": "-7.29", "market_id": "17", "circulate_market_value": "1062452700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002258", "name": "利尔化学", "hot_rank": 74, "hot_rank_chg": 389, "stock_cnt": 5837, "price": "16.18", "change": "9.99", "market_id": "33", "circulate_market_value": "12930222600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "华润双鹤拟入主"}, {"code": "603399", "name": "永杉锂业", "hot_rank": 75, "hot_rank_chg": -37, "stock_cnt": 5837, "price": "15.24", "change": "-3.60", "market_id": "17", "circulate_market_value": "7807309500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605388", "name": "均瑶健康", "hot_rank": 76, "hot_rank_chg": 71, "stock_cnt": 5837, "price": "6.12", "change": "10.07", "market_id": "17", "circulate_market_value": "3674962100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "乳业", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.8}, {"name": "优化生育（三孩）", "change_pct": 0.32}, {"name": "食品", "change_pct": 1.23}, {"name": "大农业", "change_pct": 1.24}, {"name": "植物奶", "change_pct": 2.24}, {"name": "幽门螺杆菌概念", "change_pct": 0.02}, {"name": "饮料", "change_pct": 1.79}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 77, "hot_rank_chg": 34, "stock_cnt": 5837, "price": "152.33", "change": "-10.00", "market_id": "33", "circulate_market_value": "118811330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002969", "name": "嘉美包装", "hot_rank": 78, "hot_rank_chg": -14, "stock_cnt": 5837, "price": "12.34", "change": "-6.09", "market_id": "33", "circulate_market_value": "13462498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "包装印刷", "change_pct": -0.49}, {"name": "啤酒", "change_pct": 2.14}, {"name": "植物奶", "change_pct": 2.24}, {"name": "饮料", "change_pct": 1.79}]}, {"code": "300260", "name": "新莱应材", "hot_rank": 79, "hot_rank_chg": 227, "stock_cnt": 5837, "price": "45.10", "change": "-8.87", "market_id": "33", "circulate_market_value": "12963797100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 80, "hot_rank_chg": -12, "stock_cnt": 5837, "price": "263.49", "change": "-6.46", "market_id": "17", "circulate_market_value": "107066082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603407", "name": "长裕集团", "hot_rank": 81, "hot_rank_chg": 135, "stock_cnt": 5837, "price": "58.27", "change": "-7.23", "market_id": "17", "circulate_market_value": "2093669100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 82, "hot_rank_chg": -3, "stock_cnt": 5837, "price": "6.86", "change": "-3.92", "market_id": "33", "circulate_market_value": "4504700400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.55}, {"name": "新零售", "change_pct": 1.82}, {"name": "农业种植", "change_pct": 1.09}, {"name": "冷链", "change_pct": 0.04}, {"name": "大农业", "change_pct": 1.24}, {"name": "预制菜", "change_pct": 1.9}, {"name": "国企改革", "change_pct": 0.26}, {"name": "可降解塑料", "change_pct": -0.35}, {"name": "免税店概念", "change_pct": 1.61}, {"name": "湖北国企改革", "change_pct": -0.19}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 83, "hot_rank_chg": -16, "stock_cnt": 5837, "price": "13.32", "change": "-4.45", "market_id": "33", "circulate_market_value": "14151218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002879", "name": "长缆科技", "hot_rank": 84, "hot_rank_chg": 10, "stock_cnt": 5837, "price": "16.87", "change": "-5.97", "market_id": "33", "circulate_market_value": "2312163900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 85, "hot_rank_chg": -4, "stock_cnt": 5837, "price": "24.80", "change": "-5.78", "market_id": "33", "circulate_market_value": "18783895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 86, "hot_rank_chg": 127, "stock_cnt": 5837, "price": "31.45", "change": "10.00", "market_id": "33", "circulate_market_value": "8680159900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控股股东拟变更"}, {"code": "601179", "name": "中国西电", "hot_rank": 87, "hot_rank_chg": -24, "stock_cnt": 5837, "price": "13.23", "change": "-3.22", "market_id": "17", "circulate_market_value": "67764165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 88, "hot_rank_chg": -23, "stock_cnt": 5837, "price": "85.25", "change": "-9.85", "market_id": "17", "circulate_market_value": "6739170900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 89, "hot_rank_chg": -6, "stock_cnt": 5837, "price": "14.07", "change": "-6.20", "market_id": "33", "circulate_market_value": "9782350900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 90, "hot_rank_chg": 60, "stock_cnt": 5837, "price": "13.33", "change": "-7.75", "market_id": "17", "circulate_market_value": "5584837700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 91, "hot_rank_chg": 195, "stock_cnt": 5837, "price": "38.86", "change": "2.64", "market_id": "17", "circulate_market_value": "64659596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002112", "name": "三变科技", "hot_rank": 92, "hot_rank_chg": -16, "stock_cnt": 5837, "price": "16.21", "change": "0.12", "market_id": "33", "circulate_market_value": "4248316800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 93, "hot_rank_chg": -3, "stock_cnt": 5837, "price": "6.76", "change": "-4.92", "market_id": "17", "circulate_market_value": "13710089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.01}, {"name": "电力体制改革", "change_pct": -0.74}, {"name": "火电", "change_pct": -1.02}, {"name": "风电", "change_pct": -0.44}, {"name": "储能", "change_pct": -1.24}, {"name": "碳中和", "change_pct": -0.11}, {"name": "国企改革", "change_pct": 0.26}]}, {"code": "002045", "name": "国光电器", "hot_rank": 94, "hot_rank_chg": 68, "stock_cnt": 5837, "price": "8.31", "change": "-2.00", "market_id": "33", "circulate_market_value": "4667933800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": -3.59}, {"name": "电子烟", "change_pct": -1.95}, {"name": "苹果产业链", "change_pct": -4.13}, {"name": "锂电池", "change_pct": -1.37}, {"name": "VR&AR", "change_pct": -2.83}, {"name": "智能音箱", "change_pct": -3.55}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "黑色家电", "change_pct": -1.03}, {"name": "家电", "change_pct": -0.28}, {"name": "固态电池", "change_pct": -1.08}, {"name": "NFT", "change_pct": 0.89}, {"name": "元宇宙", "change_pct": 0.09}, {"name": "无线耳机", "change_pct": -3.61}, {"name": "智能手表", "change_pct": -3.74}, {"name": "华为鸿蒙", "change_pct": 0.52}, {"name": "华为产业链", "change_pct": -1.7}]}, {"code": "603690", "name": "至纯科技", "hot_rank": 95, "hot_rank_chg": 3, "stock_cnt": 5837, "price": "22.29", "change": "-10.01", "market_id": "17", "circulate_market_value": "8536273100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605068", "name": "明新旭腾", "hot_rank": 96, "hot_rank_chg": 22, "stock_cnt": 5837, "price": "20.59", "change": "9.99", "market_id": "17", "circulate_market_value": "3339667000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "300996", "name": "普联软件", "hot_rank": 97, "hot_rank_chg": 797, "stock_cnt": 5837, "price": "15.52", "change": "20.03", "market_id": "33", "circulate_market_value": "5170368600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "明略科技入主"}, {"code": "301308", "name": "江波龙", "hot_rank": 98, "hot_rank_chg": -29, "stock_cnt": 5837, "price": "320.57", "change": "-2.75", "market_id": "33", "circulate_market_value": "90353261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 99, "hot_rank_chg": 614, "stock_cnt": 5837, "price": "29.15", "change": "-3.76", "market_id": "33", "circulate_market_value": "7812254600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002451", "name": "摩恩电气", "hot_rank": 100, "hot_rank_chg": 1313, "stock_cnt": 5837, "price": "7.06", "change": "0.14", "market_id": "33", "circulate_market_value": "3100391900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 0.67}, {"name": "5G", "change_pct": -4.03}, {"name": "举牌", "change_pct": 0.47}, {"name": "充电桩", "change_pct": -1.48}, {"name": "光伏", "change_pct": -1.21}, {"name": "风电", "change_pct": -0.44}, {"name": "新能源汽车", "change_pct": -1.06}, {"name": "供应链金融", "change_pct": 0.62}, {"name": "智能电网", "change_pct": -1.48}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公"};