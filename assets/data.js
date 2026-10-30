const UPDATE_TIME = "2026-10-30 02:22";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": -0.86,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -1.62,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续319天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "芬太尼",
    "rise": 1.5,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885805"
  },
  {
    "name": "机器人概念",
    "rise": -1.17,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "创新药",
    "rise": 0.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": -0.38,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续142天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -1.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续272天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "高股息精选",
    "rise": 0.12,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "红利低波ETF",
    "code": "886072"
  },
  {
    "name": "冰雪产业",
    "rise": -0.34,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "白酒概念",
    "rise": 1.98,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 2,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "培育钻石",
    "rise": 0.25,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "减速器",
    "rise": -1.55,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "AI应用",
    "rise": -1.68,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": -0.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": -1.41,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续148天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886084"
  },
  {
    "name": "ST板块",
    "rise": 0.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "军工",
    "rise": -1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": -2,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "猪肉",
    "rise": -0.22,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "短剧游戏",
    "rise": -2.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886060"
  }
];
const THS_EVENTS = [
  {
    "title": "摒弃短期让利换量 白酒行业修复新路径",
    "desc": "",
    "heat": 469621,
    "direction": "白酒",
    "themes": [
      "一线酒企",
      "二线酒企",
      "三线酒企",
      "白酒"
    ],
    "stocks": [
      {
        "name": "皇台酒业",
        "code": "000995",
        "chg": 10.007758
      }
    ]
  },
  {
    "title": "从Token到Worken，智元提出物理AI“度量衡”",
    "desc": "",
    "heat": 113896,
    "direction": "物理AI",
    "themes": [
      "仿真训练",
      "多模态感知硬件",
      "算力底座",
      "物理AI",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "必易微",
        "code": "688045",
        "chg": 19.996121
      }
    ]
  },
  {
    "title": "日活1.68亿超四大长视频之和，红果成为国内第四大App",
    "desc": "",
    "heat": 84346,
    "direction": "短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "文化传媒"
    ],
    "stocks": [
      {
        "name": "智度股份",
        "code": "000676",
        "chg": 9.983361
      }
    ]
  },
  {
    "title": "国星宇航通过港交所聆讯 在从事卫星相关业务的中国民营商业航天企业中排名第七",
    "desc": "",
    "heat": 57076,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "邵阳液压",
        "code": "301079",
        "chg": 14.970588
      }
    ]
  },
  {
    "title": "礼来Q3业绩超预期，上调全年营收指引至910亿–920亿美元",
    "desc": "",
    "heat": 42225,
    "direction": "减肥药",
    "themes": [
      "GLP-1制剂",
      "API/CDMO",
      "原料耗材",
      "减肥药"
    ],
    "stocks": [
      {
        "name": "皓元医药",
        "code": "688131",
        "chg": 7.495188
      }
    ]
  },
  {
    "title": "上海拟推动自动驾驶在出租车应用",
    "desc": "",
    "heat": 7553,
    "direction": "无人驾驶",
    "themes": [
      "激光雷达",
      "车载摄像头",
      "HUD抬头显示",
      "线控系统",
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "满坤科技",
        "code": "301132",
        "chg": 15.322063
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白酒",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天津自贸区",
    "change": "+2.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "葡萄酒",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+1.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+1.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+1.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "粘胶短纤",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+1.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+1.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+1.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 90,
    "stock_cnt": 5877,
    "price": "4.09",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "5460366600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "LED",
        "change_pct": -0.59
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.57
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 9,
    "hot_rank_chg": 40,
    "stock_cnt": 5877,
    "price": "2.83",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "4474148700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.72
      },
      {
        "name": "体外诊断",
        "change_pct": 0.54
      },
      {
        "name": "医疗器械",
        "change_pct": -0.06
      },
      {
        "name": "强势人气股",
        "change_pct": -2.19
      },
      {
        "name": "基因测序",
        "change_pct": -0.11
      },
      {
        "name": "预制菜",
        "change_pct": 0.53
      },
      {
        "name": "低价股",
        "change_pct": 0.4
      },
      {
        "name": "水产养殖",
        "change_pct": 1.88
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.14
      },
      {
        "name": "海洋经济",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 11,
    "hot_rank_chg": 102,
    "stock_cnt": 5877,
    "price": "11.95",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4959036300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "卫星通信终端",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.31
      },
      {
        "name": "5G",
        "change_pct": -1.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.47
      },
      {
        "name": "LED",
        "change_pct": -0.59
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.57
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 14,
    "hot_rank_chg": -5,
    "stock_cnt": 5877,
    "price": "7.74",
    "change": "-5.95",
    "market_id": "33",
    "circulate_market_value": "4644903500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.36
      },
      {
        "name": "边缘计算",
        "change_pct": -1.61
      },
      {
        "name": "核电",
        "change_pct": -0.82
      },
      {
        "name": "海工装备",
        "change_pct": -1.27
      },
      {
        "name": "强势人气股",
        "change_pct": -2.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.47
      },
      {
        "name": "冷链",
        "change_pct": -0.41
      },
      {
        "name": "地热",
        "change_pct": -0.74
      },
      {
        "name": "储能",
        "change_pct": -0.95
      },
      {
        "name": "碳中和",
        "change_pct": -0.63
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.1
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.02
      },
      {
        "name": "热泵",
        "change_pct": -1.59
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.51
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.7
      },
      {
        "name": "海洋经济",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 15,
    "hot_rank_chg": 15,
    "stock_cnt": 5877,
    "price": "5.50",
    "change": "2.42",
    "market_id": "33",
    "circulate_market_value": "4208274000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.85
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.17
      },
      {
        "name": "强势人气股",
        "change_pct": -2.19
      },
      {
        "name": "医药商业",
        "change_pct": 0.91
      },
      {
        "name": "保健品",
        "change_pct": 0.67
      },
      {
        "name": "民营医院",
        "change_pct": 0.46
      },
      {
        "name": "医药",
        "change_pct": 0.53
      },
      {
        "name": "食品",
        "change_pct": 0.44
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.08
      },
      {
        "name": "口腔",
        "change_pct": 0.28
      },
      {
        "name": "医美",
        "change_pct": 0.75
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 19,
    "hot_rank_chg": -9,
    "stock_cnt": 5877,
    "price": "12.28",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "4922830700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.51
      },
      {
        "name": "新零售",
        "change_pct": -0.56
      },
      {
        "name": "强势人气股",
        "change_pct": -2.19
      },
      {
        "name": "物业管理",
        "change_pct": -0.49
      },
      {
        "name": "国企改革",
        "change_pct": -0.43
      },
      {
        "name": "地摊经济",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 21,
    "hot_rank_chg": -9,
    "stock_cnt": 5877,
    "price": "7.38",
    "change": "-9.89",
    "market_id": "33",
    "circulate_market_value": "13818546000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -1.33
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.47
      },
      {
        "name": "军民融合",
        "change_pct": -1.06
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.75
      },
      {
        "name": "风电",
        "change_pct": -0.88
      },
      {
        "name": "军工",
        "change_pct": -1.1
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.04
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.62
      },
      {
        "name": "轮边电机",
        "change_pct": -2.96
      },
      {
        "name": "人形机器人",
        "change_pct": -1.84
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 23,
    "hot_rank_chg": 9,
    "stock_cnt": 5877,
    "price": "2.05",
    "change": "-9.69",
    "market_id": "17",
    "circulate_market_value": "5867863100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.55
      },
      {
        "name": "强势人气股",
        "change_pct": -2.19
      },
      {
        "name": "游戏",
        "change_pct": -3.85
      },
      {
        "name": "影视",
        "change_pct": -3.71
      },
      {
        "name": "低价股",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -0.43
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.27
      },
      {
        "name": "AI视频",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 24,
    "hot_rank_chg": 21,
    "stock_cnt": 5877,
    "price": "6.03",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "3748348000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.82
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "冷链",
        "change_pct": -0.57
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.94
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "白色家电",
        "change_pct": -1.14
      },
      {
        "name": "家电",
        "change_pct": -1.01
      },
      {
        "name": "拼多多概念股",
        "change_pct": -1.97
      },
      {
        "name": "人形机器人",
        "change_pct": -2.09
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 26,
    "hot_rank_chg": -9,
    "stock_cnt": 5877,
    "price": "11.49",
    "change": "-6.88",
    "market_id": "33",
    "circulate_market_value": "3843977600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.5
      },
      {
        "name": "饲料",
        "change_pct": -0.3
      },
      {
        "name": "一带一路",
        "change_pct": -0.46
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "保健品",
        "change_pct": 0.68
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.73
      },
      {
        "name": "污水处理",
        "change_pct": -0.27
      },
      {
        "name": "环保",
        "change_pct": -0.25
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "预制菜",
        "change_pct": 0.31
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "水产养殖",
        "change_pct": 1.53
      },
      {
        "name": "广西概念",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 27,
    "hot_rank_chg": 2,
    "stock_cnt": 5877,
    "price": "8.37",
    "change": "-6.69",
    "market_id": "33",
    "circulate_market_value": "3964704000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.72
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "VR&AR",
        "change_pct": -1.71
      },
      {
        "name": "游戏",
        "change_pct": -4.03
      },
      {
        "name": "影视",
        "change_pct": -3.77
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.99
      },
      {
        "name": "动漫",
        "change_pct": -4.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.91
      },
      {
        "name": "传媒",
        "change_pct": -2.92
      },
      {
        "name": "元宇宙",
        "change_pct": -2.29
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.27
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.1
      }
    ]
  },
  {
    "code": "002526",
    "name": "山东矿机",
    "hot_rank": 29,
    "hot_rank_chg": 28,
    "stock_cnt": 5877,
    "price": "3.00",
    "change": "-8.23",
    "market_id": "33",
    "circulate_market_value": "5331415700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "机械",
        "change_pct": -0.24
      },
      {
        "name": "游戏",
        "change_pct": -4.03
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "无人机",
        "change_pct": -1.21
      },
      {
        "name": "低空经济",
        "change_pct": -1.5
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 32,
    "hot_rank_chg": -7,
    "stock_cnt": 5877,
    "price": "12.64",
    "change": "-7.06",
    "market_id": "17",
    "circulate_market_value": "8418240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 34,
    "hot_rank_chg": -1,
    "stock_cnt": 5877,
    "price": "11.31",
    "change": "-1.65",
    "market_id": "17",
    "circulate_market_value": "14525191000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -1.14
      },
      {
        "name": "工业互联网",
        "change_pct": -1.24
      },
      {
        "name": "培育钻石",
        "change_pct": 0.56
      },
      {
        "name": "金刚线",
        "change_pct": -0.64
      },
      {
        "name": "国资入股",
        "change_pct": 0.16
      },
      {
        "name": "深地经济",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 41,
    "hot_rank_chg": 43,
    "stock_cnt": 5877,
    "price": "8.44",
    "change": "3.93",
    "market_id": "33",
    "circulate_market_value": "8967220800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.13
      },
      {
        "name": "电子烟",
        "change_pct": -1.28
      },
      {
        "name": "一带一路",
        "change_pct": -0.46
      },
      {
        "name": "造纸",
        "change_pct": -0.41
      },
      {
        "name": "包装印刷",
        "change_pct": -0.76
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.79
      },
      {
        "name": "太空算力",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 42,
    "hot_rank_chg": 100,
    "stock_cnt": 5877,
    "price": "8.02",
    "change": "1.26",
    "market_id": "33",
    "circulate_market_value": "5792780300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.98
      },
      {
        "name": "充电桩",
        "change_pct": -1.5
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.94
      },
      {
        "name": "军民融合",
        "change_pct": -1.24
      },
      {
        "name": "光伏",
        "change_pct": -0.83
      },
      {
        "name": "风电",
        "change_pct": -1.04
      },
      {
        "name": "军工",
        "change_pct": -1.28
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.21
      },
      {
        "name": "特高压",
        "change_pct": -0.85
      },
      {
        "name": "自贸区",
        "change_pct": -0.13
      },
      {
        "name": "海洋经济",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 43,
    "hot_rank_chg": 140,
    "stock_cnt": 5877,
    "price": "9.96",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "2833436800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.89
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.52
      },
      {
        "name": "教育",
        "change_pct": -1.19
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.84
      },
      {
        "name": "职业教育",
        "change_pct": -0.5
      },
      {
        "name": "在线教育",
        "change_pct": -0.02
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.29
      },
      {
        "name": "华为产业链",
        "change_pct": -1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.27
      },
      {
        "name": "智谱AI",
        "change_pct": -2.09
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 48,
    "hot_rank_chg": -25,
    "stock_cnt": 5877,
    "price": "7.75",
    "change": "-7.30",
    "market_id": "33",
    "circulate_market_value": "12609201800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.82
      },
      {
        "name": "电竞",
        "change_pct": -2.68
      },
      {
        "name": "手游",
        "change_pct": -3.72
      },
      {
        "name": "人工智能",
        "change_pct": -1.64
      },
      {
        "name": "游戏",
        "change_pct": -4.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.74
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.91
      },
      {
        "name": "传媒",
        "change_pct": -2.92
      },
      {
        "name": "快手概念股",
        "change_pct": -3.2
      },
      {
        "name": "元宇宙",
        "change_pct": -2.29
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.59
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.78
      },
      {
        "name": "web3.0",
        "change_pct": -2.6
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.56
      },
      {
        "name": "数据要素",
        "change_pct": -2.0
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.56
      },
      {
        "name": "AI营销",
        "change_pct": -3.2
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.56
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.65
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.75
      },
      {
        "name": "人形机器人",
        "change_pct": -2.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.27
      },
      {
        "name": "多模态",
        "change_pct": -2.83
      },
      {
        "name": "AI视频",
        "change_pct": -3.56
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.1
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.04
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 50,
    "hot_rank_chg": 76,
    "stock_cnt": 5877,
    "price": "3.32",
    "change": "-5.14",
    "market_id": "17",
    "circulate_market_value": "4334160100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高速公路",
        "change_pct": 0.27
      },
      {
        "name": "破净股",
        "change_pct": -0.07
      },
      {
        "name": "振兴东北",
        "change_pct": 0.21
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.83
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 54,
    "hot_rank_chg": -36,
    "stock_cnt": 5877,
    "price": "8.67",
    "change": "-1.25",
    "market_id": "17",
    "circulate_market_value": "2337537900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.62
      },
      {
        "name": "高股息",
        "change_pct": -0.26
      },
      {
        "name": "银行",
        "change_pct": -0.34
      },
      {
        "name": "白马股",
        "change_pct": -0.32
      },
      {
        "name": "破净股",
        "change_pct": -0.07
      },
      {
        "name": "大金融",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 56,
    "hot_rank_chg": -36,
    "stock_cnt": 5877,
    "price": "12.29",
    "change": "-5.61",
    "market_id": "33",
    "circulate_market_value": "40889802000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.89
      },
      {
        "name": "半导体",
        "change_pct": -1.39
      },
      {
        "name": "锂电池",
        "change_pct": -0.8
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.94
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.21
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "智能制造",
        "change_pct": -1.14
      },
      {
        "name": "工业互联网",
        "change_pct": -1.24
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.83
      },
      {
        "name": "固态电池",
        "change_pct": -0.52
      },
      {
        "name": "MCU概念",
        "change_pct": -0.6
      },
      {
        "name": "人形机器人",
        "change_pct": -2.09
      },
      {
        "name": "小米汽车",
        "change_pct": -1.53
      },
      {
        "name": "低空经济",
        "change_pct": -1.5
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 59,
    "hot_rank_chg": 923,
    "stock_cnt": 5877,
    "price": "9.42",
    "change": "0.85",
    "market_id": "33",
    "circulate_market_value": "5735948300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.49
      },
      {
        "name": "一带一路",
        "change_pct": -0.46
      },
      {
        "name": "金融科技",
        "change_pct": -1.82
      },
      {
        "name": "移动支付",
        "change_pct": -1.48
      },
      {
        "name": "物联网",
        "change_pct": -1.28
      },
      {
        "name": "数字经济",
        "change_pct": -1.74
      },
      {
        "name": "电子身份证",
        "change_pct": -1.87
      },
      {
        "name": "ETC",
        "change_pct": -0.95
      },
      {
        "name": "数字人民币",
        "change_pct": -1.54
      },
      {
        "name": "智慧政务",
        "change_pct": -1.67
      },
      {
        "name": "eSIM",
        "change_pct": -1.73
      },
      {
        "name": "华为产业链",
        "change_pct": -1.45
      },
      {
        "name": "区块链",
        "change_pct": -1.28
      },
      {
        "name": "RWA",
        "change_pct": -1.48
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 62,
    "hot_rank_chg": -14,
    "stock_cnt": 5877,
    "price": "7.18",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "5068578300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.49
      },
      {
        "name": "国产软件",
        "change_pct": -1.82
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.83
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "人工智能",
        "change_pct": -1.64
      },
      {
        "name": "充电桩",
        "change_pct": -1.5
      },
      {
        "name": "北斗导航",
        "change_pct": -1.21
      },
      {
        "name": "智慧停车",
        "change_pct": -1.43
      },
      {
        "name": "物联网",
        "change_pct": -1.28
      },
      {
        "name": "教育",
        "change_pct": -1.19
      },
      {
        "name": "智慧城市",
        "change_pct": -1.42
      },
      {
        "name": "光伏",
        "change_pct": -0.83
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.21
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "机器视觉",
        "change_pct": -2.11
      },
      {
        "name": "智慧安防",
        "change_pct": -1.25
      },
      {
        "name": "智能制造",
        "change_pct": -1.14
      },
      {
        "name": "国产芯片",
        "change_pct": -1.51
      },
      {
        "name": "华为昇腾",
        "change_pct": -1.96
      },
      {
        "name": "职业教育",
        "change_pct": -0.5
      },
      {
        "name": "在线教育",
        "change_pct": -0.02
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.66
      },
      {
        "name": "华为产业链",
        "change_pct": -1.45
      },
      {
        "name": "汽车检测",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 69,
    "hot_rank_chg": -14,
    "stock_cnt": 5877,
    "price": "9.99",
    "change": "2.99",
    "market_id": "33",
    "circulate_market_value": "9500839300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.71
      },
      {
        "name": "大飞机",
        "change_pct": -1.07
      },
      {
        "name": "北斗导航",
        "change_pct": -1.21
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.93
      },
      {
        "name": "军民融合",
        "change_pct": -1.24
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.87
      },
      {
        "name": "军工",
        "change_pct": -1.28
      },
      {
        "name": "碳纤维",
        "change_pct": -0.75
      },
      {
        "name": "无人机",
        "change_pct": -1.21
      },
      {
        "name": "智能制造",
        "change_pct": -1.14
      },
      {
        "name": "3D打印",
        "change_pct": -0.99
      },
      {
        "name": "航天",
        "change_pct": -0.8
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.79
      },
      {
        "name": "国资入股",
        "change_pct": 0.16
      },
      {
        "name": "低空经济",
        "change_pct": -1.5
      },
      {
        "name": "海洋经济",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 75,
    "hot_rank_chg": 64,
    "stock_cnt": 5877,
    "price": "10.65",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4607974400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报减亏",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -2.38
      },
      {
        "name": "光伏",
        "change_pct": -0.83
      },
      {
        "name": "无线耳机",
        "change_pct": -1.16
      },
      {
        "name": "华为产业链",
        "change_pct": -1.45
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 79,
    "hot_rank_chg": 48,
    "stock_cnt": 5877,
    "price": "9.78",
    "change": "-5.78",
    "market_id": "33",
    "circulate_market_value": "11095772900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.63
      },
      {
        "name": "足球",
        "change_pct": -1.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.74
      },
      {
        "name": "传媒",
        "change_pct": -2.92
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.56
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.56
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.63
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.27
      },
      {
        "name": "AI视频",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 86,
    "hot_rank_chg": 233,
    "stock_cnt": 5877,
    "price": "8.39",
    "change": "2.82",
    "market_id": "33",
    "circulate_market_value": "5582756000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.47
      },
      {
        "name": "破净股",
        "change_pct": -0.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 92,
    "hot_rank_chg": 37,
    "stock_cnt": 5877,
    "price": "11.52",
    "change": "-8.58",
    "market_id": "17",
    "circulate_market_value": "3635822400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.77
      },
      {
        "name": "冷链",
        "change_pct": -0.57
      },
      {
        "name": "宁夏概念",
        "change_pct": -0.95
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.1
      },
      {
        "name": "首发经济",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 93,
    "hot_rank_chg": -23,
    "stock_cnt": 5877,
    "price": "8.42",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "2387619000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": -1.82
      },
      {
        "name": "光伏",
        "change_pct": -0.83
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "干细胞",
        "change_pct": 1.28
      },
      {
        "name": "人形机器人",
        "change_pct": -2.09
      },
      {
        "name": "海洋经济",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "000701",
    "name": "厦门信达",
    "hot_rank": 96,
    "hot_rank_chg": 189,
    "stock_cnt": 5877,
    "price": "5.68",
    "change": "1.07",
    "market_id": "33",
    "circulate_market_value": "3792800900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -1.13
      },
      {
        "name": "应急产业",
        "change_pct": -1.64
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.49
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.94
      },
      {
        "name": "电子车牌",
        "change_pct": -1.1
      },
      {
        "name": "物联网",
        "change_pct": -1.28
      },
      {
        "name": "智慧城市",
        "change_pct": -1.42
      },
      {
        "name": "LED",
        "change_pct": -0.72
      },
      {
        "name": "智慧安防",
        "change_pct": -1.25
      },
      {
        "name": "小米概念股",
        "change_pct": -1.18
      },
      {
        "name": "汽车销售",
        "change_pct": -0.72
      },
      {
        "name": "食品安全",
        "change_pct": -0.68
      },
      {
        "name": "web3.0",
        "change_pct": -2.6
      },
      {
        "name": "国企改革",
        "change_pct": -0.55
      },
      {
        "name": "MiniLED",
        "change_pct": -0.99
      },
      {
        "name": "自贸区",
        "change_pct": -0.13
      },
      {
        "name": "小米汽车",
        "change_pct": -1.53
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.1
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 97,
    "hot_rank_chg": 11,
    "stock_cnt": 5877,
    "price": "8.67",
    "change": "-0.46",
    "market_id": "17",
    "circulate_market_value": "7533820600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.82
      },
      {
        "name": "快递物流",
        "change_pct": -0.13
      },
      {
        "name": "新零售",
        "change_pct": -0.77
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.94
      },
      {
        "name": "旅游",
        "change_pct": 0.57
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.84
      },
      {
        "name": "物业管理",
        "change_pct": -0.72
      },
      {
        "name": "免税店概念",
        "change_pct": 0.01
      },
      {
        "name": "自贸区",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 98,
    "hot_rank_chg": -33,
    "stock_cnt": 5877,
    "price": "6.55",
    "change": "-2.82",
    "market_id": "33",
    "circulate_market_value": "12543855500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.94
      },
      {
        "name": "林业",
        "change_pct": -1.19
      },
      {
        "name": "碳中和",
        "change_pct": -0.78
      },
      {
        "name": "自贸区",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 99,
    "hot_rank_chg": 11,
    "stock_cnt": 5877,
    "price": "3.19",
    "change": "-5.34",
    "market_id": "33",
    "circulate_market_value": "6495475300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -1.86
      },
      {
        "name": "数字孪生",
        "change_pct": -2.48
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.95
      },
      {
        "name": "人工智能",
        "change_pct": -1.64
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.09
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.61
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.93
      },
      {
        "name": "人脸识别",
        "change_pct": -1.91
      },
      {
        "name": "智慧停车",
        "change_pct": -1.43
      },
      {
        "name": "物联网",
        "change_pct": -1.28
      },
      {
        "name": "大数据",
        "change_pct": -1.64
      },
      {
        "name": "智慧城市",
        "change_pct": -1.42
      },
      {
        "name": "雄安新区",
        "change_pct": -0.43
      },
      {
        "name": "机器人",
        "change_pct": -1.76
      },
      {
        "name": "数字经济",
        "change_pct": -1.74
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.84
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.91
      },
      {
        "name": "建筑节能",
        "change_pct": -0.46
      },
      {
        "name": "旧改",
        "change_pct": -0.39
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.65
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.08
      },
      {
        "name": "华为产业链",
        "change_pct": -1.45
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.75
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 0.23
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.63
      },
      {
        "name": "区块链",
        "change_pct": -1.28
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "300502", "name": "新易盛", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5877, "price": "211.55", "change": "-7.38", "market_id": "33", "circulate_market_value": "265436810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 2, "hot_rank_chg": 12, "stock_cnt": 5877, "price": "18.46", "change": "3.24", "market_id": "17", "circulate_market_value": "6308878400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 3, "hot_rank_chg": 10, "stock_cnt": 5877, "price": "13.80", "change": "1.92", "market_id": "33", "circulate_market_value": "7817400400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5877, "price": "579.05", "change": "-0.52", "market_id": "33", "circulate_market_value": "642709020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5877, "price": "17.83", "change": "-4.91", "market_id": "33", "circulate_market_value": "8194878300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 90, "stock_cnt": 5877, "price": "4.09", "change": "9.95", "market_id": "17", "circulate_market_value": "5460366600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "LED", "change_pct": -0.59}, {"name": "卫星互联网", "change_pct": -0.57}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5877, "price": "13.36", "change": "-9.97", "market_id": "17", "circulate_market_value": "13959702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5877, "price": "22.00", "change": "-4.35", "market_id": "33", "circulate_market_value": "16758844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 9, "hot_rank_chg": 40, "stock_cnt": 5877, "price": "2.83", "change": "10.12", "market_id": "33", "circulate_market_value": "4474148700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.72}, {"name": "体外诊断", "change_pct": 0.54}, {"name": "医疗器械", "change_pct": -0.06}, {"name": "强势人气股", "change_pct": -2.19}, {"name": "基因测序", "change_pct": -0.11}, {"name": "预制菜", "change_pct": 0.53}, {"name": "低价股", "change_pct": 0.4}, {"name": "水产养殖", "change_pct": 1.88}, {"name": "新冠病毒防治", "change_pct": 0.14}, {"name": "海洋经济", "change_pct": 0.0}]}, {"code": "603131", "name": "上海沪工", "hot_rank": 10, "hot_rank_chg": 43, "stock_cnt": 5877, "price": "17.55", "change": "10.03", "market_id": "17", "circulate_market_value": "5912721700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "三季报扭亏"}, {"code": "603703", "name": "盛洋科技", "hot_rank": 11, "hot_rank_chg": 102, "stock_cnt": 5877, "price": "11.95", "change": "10.04", "market_id": "17", "circulate_market_value": "4959036300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.31}, {"name": "5G", "change_pct": -1.37}, {"name": "云计算数据中心", "change_pct": -1.47}, {"name": "LED", "change_pct": -0.59}, {"name": "卫星互联网", "change_pct": -0.57}, {"name": "铜缆高速连接器", "change_pct": -1.63}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5877, "price": "18.75", "change": "-9.94", "market_id": "33", "circulate_market_value": "9560665400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5877, "price": "154.66", "change": "-4.29", "market_id": "33", "circulate_market_value": "168330100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5877, "price": "7.74", "change": "-5.95", "market_id": "33", "circulate_market_value": "4644903500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.36}, {"name": "边缘计算", "change_pct": -1.61}, {"name": "核电", "change_pct": -0.82}, {"name": "海工装备", "change_pct": -1.27}, {"name": "强势人气股", "change_pct": -2.19}, {"name": "云计算数据中心", "change_pct": -1.47}, {"name": "冷链", "change_pct": -0.41}, {"name": "地热", "change_pct": -0.74}, {"name": "储能", "change_pct": -0.95}, {"name": "碳中和", "change_pct": -0.63}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.1}, {"name": "汽车热管理", "change_pct": -1.02}, {"name": "热泵", "change_pct": -1.59}, {"name": "液冷服务器", "change_pct": -1.51}, {"name": "蜜雪冰城概念股", "change_pct": -0.7}, {"name": "海洋经济", "change_pct": 0.0}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 15, "hot_rank_chg": 15, "stock_cnt": 5877, "price": "5.50", "change": "2.42", "market_id": "33", "circulate_market_value": "4208274000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.85}, {"name": "优化生育（三孩）", "change_pct": -0.17}, {"name": "强势人气股", "change_pct": -2.19}, {"name": "医药商业", "change_pct": 0.91}, {"name": "保健品", "change_pct": 0.67}, {"name": "民营医院", "change_pct": 0.46}, {"name": "医药", "change_pct": 0.53}, {"name": "食品", "change_pct": 0.44}, {"name": "辅助生殖", "change_pct": 0.08}, {"name": "口腔", "change_pct": 0.28}, {"name": "医美", "change_pct": 0.75}, {"name": "新冠病毒防治", "change_pct": 0.14}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 16, "hot_rank_chg": 21, "stock_cnt": 5877, "price": "145.07", "change": "-9.55", "market_id": "33", "circulate_market_value": "125513831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": -2, "stock_cnt": 5877, "price": "90.76", "change": "-3.52", "market_id": "33", "circulate_market_value": "125919602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 18, "hot_rank_chg": -16, "stock_cnt": 5877, "price": "636.01", "change": "-3.98", "market_id": "17", "circulate_market_value": "19136091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 19, "hot_rank_chg": -9, "stock_cnt": 5877, "price": "12.28", "change": "-9.90", "market_id": "17", "circulate_market_value": "4922830700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.51}, {"name": "新零售", "change_pct": -0.56}, {"name": "强势人气股", "change_pct": -2.19}, {"name": "物业管理", "change_pct": -0.49}, {"name": "国企改革", "change_pct": -0.43}, {"name": "地摊经济", "change_pct": -0.94}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 20, "hot_rank_chg": 26, "stock_cnt": 5877, "price": "19.94", "change": "9.98", "market_id": "33", "circulate_market_value": "3792538200.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "青啤拟入主"}, {"code": "002249", "name": "大洋电机", "hot_rank": 21, "hot_rank_chg": -9, "stock_cnt": 5877, "price": "7.38", "change": "-9.89", "market_id": "33", "circulate_market_value": "13818546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -1.33}, {"name": "云计算数据中心", "change_pct": -1.47}, {"name": "军民融合", "change_pct": -1.06}, {"name": "氢能源/燃料电池", "change_pct": -0.75}, {"name": "风电", "change_pct": -0.88}, {"name": "军工", "change_pct": -1.1}, {"name": "新能源汽车", "change_pct": -1.04}, {"name": "新能源车零部件", "change_pct": -1.62}, {"name": "轮边电机", "change_pct": -2.96}, {"name": "人形机器人", "change_pct": -1.84}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5877, "price": "270.58", "change": "-1.96", "market_id": "17", "circulate_market_value": "181482960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 23, "hot_rank_chg": 9, "stock_cnt": 5877, "price": "2.05", "change": "-9.69", "market_id": "17", "circulate_market_value": "5867863100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.55}, {"name": "强势人气股", "change_pct": -2.19}, {"name": "游戏", "change_pct": -3.85}, {"name": "影视", "change_pct": -3.71}, {"name": "低价股", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -0.43}, {"name": "短剧/互动影游", "change_pct": -3.27}, {"name": "AI视频", "change_pct": -3.56}]}, {"code": "601956", "name": "东贝集团", "hot_rank": 24, "hot_rank_chg": 21, "stock_cnt": 5877, "price": "6.03", "change": "-10.00", "market_id": "17", "circulate_market_value": "3748348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.82}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "冷链", "change_pct": -0.57}, {"name": "汽车零部件", "change_pct": -1.94}, {"name": "机器人", "change_pct": -1.76}, {"name": "白色家电", "change_pct": -1.14}, {"name": "家电", "change_pct": -1.01}, {"name": "拼多多概念股", "change_pct": -1.97}, {"name": "人形机器人", "change_pct": -2.09}, {"name": "蜜雪冰城概念股", "change_pct": -0.95}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 25, "hot_rank_chg": -6, "stock_cnt": 5877, "price": "57.39", "change": "2.67", "market_id": "17", "circulate_market_value": "67863051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5877, "price": "11.49", "change": "-6.88", "market_id": "33", "circulate_market_value": "3843977600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.5}, {"name": "饲料", "change_pct": -0.3}, {"name": "一带一路", "change_pct": -0.46}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "保健品", "change_pct": 0.68}, {"name": "山东国企改革", "change_pct": -0.73}, {"name": "污水处理", "change_pct": -0.27}, {"name": "环保", "change_pct": -0.25}, {"name": "食品", "change_pct": 0.31}, {"name": "预制菜", "change_pct": 0.31}, {"name": "国企改革", "change_pct": -0.55}, {"name": "水产养殖", "change_pct": 1.53}, {"name": "广西概念", "change_pct": -0.08}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5877, "price": "8.37", "change": "-6.69", "market_id": "33", "circulate_market_value": "3964704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.72}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "VR&AR", "change_pct": -1.71}, {"name": "游戏", "change_pct": -4.03}, {"name": "影视", "change_pct": -3.77}, {"name": "直播/短视频", "change_pct": -1.99}, {"name": "动漫", "change_pct": -4.79}, {"name": "腾讯概念股", "change_pct": -1.91}, {"name": "传媒", "change_pct": -2.92}, {"name": "元宇宙", "change_pct": -2.29}, {"name": "短剧/互动影游", "change_pct": -3.27}, {"name": "IP经济/谷子经济", "change_pct": -2.1}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 28, "hot_rank_chg": -6, "stock_cnt": 5877, "price": "63.68", "change": "10.00", "market_id": "33", "circulate_market_value": "46183064000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": ""}, {"code": "002526", "name": "山东矿机", "hot_rank": 29, "hot_rank_chg": 28, "stock_cnt": 5877, "price": "3.00", "change": "-8.23", "market_id": "33", "circulate_market_value": "5331415700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.38}, {"name": "机械", "change_pct": -0.24}, {"name": "游戏", "change_pct": -4.03}, {"name": "机器人", "change_pct": -1.76}, {"name": "无人机", "change_pct": -1.21}, {"name": "低空经济", "change_pct": -1.5}]}, {"code": "600522", "name": "中天科技", "hot_rank": 30, "hot_rank_chg": 65, "stock_cnt": 5877, "price": "24.05", "change": "-4.41", "market_id": "17", "circulate_market_value": "82115569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600592", "name": "龙溪股份", "hot_rank": 31, "hot_rank_chg": 100, "stock_cnt": 5877, "price": "15.90", "change": "-8.67", "market_id": "17", "circulate_market_value": "6352901800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5877, "price": "12.64", "change": "-7.06", "market_id": "17", "circulate_market_value": "8418240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.77}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5877, "price": "43.96", "change": "-1.44", "market_id": "17", "circulate_market_value": "107862289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5877, "price": "11.31", "change": "-1.65", "market_id": "17", "circulate_market_value": "14525191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -1.14}, {"name": "工业互联网", "change_pct": -1.24}, {"name": "培育钻石", "change_pct": 0.56}, {"name": "金刚线", "change_pct": -0.64}, {"name": "国资入股", "change_pct": 0.16}, {"name": "深地经济", "change_pct": -0.69}]}, {"code": "001309", "name": "德明利", "hot_rank": 35, "hot_rank_chg": -1, "stock_cnt": 5877, "price": "219.88", "change": "2.14", "market_id": "33", "circulate_market_value": "51134303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 36, "hot_rank_chg": -20, "stock_cnt": 5877, "price": "15.52", "change": "2.31", "market_id": "33", "circulate_market_value": "51619932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301079", "name": "邵阳液压", "hot_rank": 37, "hot_rank_chg": 39, "stock_cnt": 5877, "price": "39.01", "change": "14.73", "market_id": "33", "circulate_market_value": "3001172400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 38, "hot_rank_chg": -27, "stock_cnt": 5877, "price": "43.23", "change": "0.86", "market_id": "17", "circulate_market_value": "194711410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 39, "hot_rank_chg": 73, "stock_cnt": 5877, "price": "39.21", "change": "1.58", "market_id": "33", "circulate_market_value": "8976665600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002009", "name": "天奇股份", "hot_rank": 40, "hot_rank_chg": 252, "stock_cnt": 5877, "price": "17.43", "change": "5.00", "market_id": "33", "circulate_market_value": "6174251900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 41, "hot_rank_chg": 43, "stock_cnt": 5877, "price": "8.44", "change": "3.93", "market_id": "33", "circulate_market_value": "8967220800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.13}, {"name": "电子烟", "change_pct": -1.28}, {"name": "一带一路", "change_pct": -0.46}, {"name": "造纸", "change_pct": -0.41}, {"name": "包装印刷", "change_pct": -0.76}, {"name": "卫星互联网", "change_pct": -0.79}, {"name": "太空算力", "change_pct": 1.09}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 42, "hot_rank_chg": 100, "stock_cnt": 5877, "price": "8.02", "change": "1.26", "market_id": "33", "circulate_market_value": "5792780300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -0.98}, {"name": "充电桩", "change_pct": -1.5}, {"name": "福建自贸/海西概念", "change_pct": -0.94}, {"name": "军民融合", "change_pct": -1.24}, {"name": "光伏", "change_pct": -0.83}, {"name": "风电", "change_pct": -1.04}, {"name": "军工", "change_pct": -1.28}, {"name": "新能源汽车", "change_pct": -1.21}, {"name": "特高压", "change_pct": -0.85}, {"name": "自贸区", "change_pct": -0.13}, {"name": "海洋经济", "change_pct": -0.16}]}, {"code": "003032", "name": "传智教育", "hot_rank": 43, "hot_rank_chg": 140, "stock_cnt": 5877, "price": "9.96", "change": "10.05", "market_id": "33", "circulate_market_value": "2833436800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.89}, {"name": "ST摘帽", "change_pct": -0.52}, {"name": "教育", "change_pct": -1.19}, {"name": "阿里巴巴概念股", "change_pct": -1.84}, {"name": "职业教育", "change_pct": -0.5}, {"name": "在线教育", "change_pct": -0.02}, {"name": "华为鸿蒙", "change_pct": -1.29}, {"name": "华为产业链", "change_pct": -1.45}, {"name": "短剧/互动影游", "change_pct": -3.27}, {"name": "智谱AI", "change_pct": -2.09}]}, {"code": "600030", "name": "中信证券", "hot_rank": 44, "hot_rank_chg": 81, "stock_cnt": 5877, "price": "24.25", "change": "-1.02", "market_id": "17", "circulate_market_value": "295281360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 45, "hot_rank_chg": 5, "stock_cnt": 5877, "price": "22.01", "change": "-7.40", "market_id": "17", "circulate_market_value": "8826010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 46, "hot_rank_chg": -3, "stock_cnt": 5877, "price": "91.20", "change": "-3.00", "market_id": "33", "circulate_market_value": "175919800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 47, "hot_rank_chg": -7, "stock_cnt": 5877, "price": "45.80", "change": "1.26", "market_id": "17", "circulate_market_value": "908660990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 48, "hot_rank_chg": -25, "stock_cnt": 5877, "price": "7.75", "change": "-7.30", "market_id": "33", "circulate_market_value": "12609201800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.82}, {"name": "电竞", "change_pct": -2.68}, {"name": "手游", "change_pct": -3.72}, {"name": "人工智能", "change_pct": -1.64}, {"name": "游戏", "change_pct": -4.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.74}, {"name": "腾讯概念股", "change_pct": -1.91}, {"name": "传媒", "change_pct": -2.92}, {"name": "快手概念股", "change_pct": -3.2}, {"name": "元宇宙", "change_pct": -2.29}, {"name": "虚拟数字人", "change_pct": -2.59}, {"name": "东数西算/算力", "change_pct": -1.78}, {"name": "web3.0", "change_pct": -2.6}, {"name": "AIGC概念", "change_pct": -2.56}, {"name": "数据要素", "change_pct": -2.0}, {"name": "字节跳动概念股", "change_pct": -2.56}, {"name": "AI营销", "change_pct": -3.2}, {"name": "ChatGPT", "change_pct": -2.56}, {"name": "智能眼镜/MR头显", "change_pct": -1.65}, {"name": "AI大模型/智能体", "change_pct": -1.75}, {"name": "人形机器人", "change_pct": -2.09}, {"name": "短剧/互动影游", "change_pct": -3.27}, {"name": "多模态", "change_pct": -2.83}, {"name": "AI视频", "change_pct": -3.56}, {"name": "IP经济/谷子经济", "change_pct": -2.1}, {"name": "小红书概念股", "change_pct": -3.04}]}, {"code": "600584", "name": "长电科技", "hot_rank": 49, "hot_rank_chg": 5, "stock_cnt": 5877, "price": "51.55", "change": "-0.56", "market_id": "17", "circulate_market_value": "92298004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 50, "hot_rank_chg": 76, "stock_cnt": 5877, "price": "3.32", "change": "-5.14", "market_id": "17", "circulate_market_value": "4334160100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高速公路", "change_pct": 0.27}, {"name": "破净股", "change_pct": -0.07}, {"name": "振兴东北", "change_pct": 0.21}, {"name": "黑龙江自贸区", "change_pct": -0.83}]}, {"code": "600501", "name": "航天晨光", "hot_rank": 51, "hot_rank_chg": 101, "stock_cnt": 5877, "price": "16.76", "change": "-0.77", "market_id": "17", "circulate_market_value": "7170333600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 52, "hot_rank_chg": 465, "stock_cnt": 5877, "price": "14.10", "change": "9.98", "market_id": "17", "circulate_market_value": "15990507000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 53, "hot_rank_chg": -15, "stock_cnt": 5877, "price": "13.51", "change": "-1.96", "market_id": "17", "circulate_market_value": "28277650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 54, "hot_rank_chg": -36, "stock_cnt": 5877, "price": "8.67", "change": "-1.25", "market_id": "17", "circulate_market_value": "2337537900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.62}, {"name": "高股息", "change_pct": -0.26}, {"name": "银行", "change_pct": -0.34}, {"name": "白马股", "change_pct": -0.32}, {"name": "破净股", "change_pct": -0.07}, {"name": "大金融", "change_pct": -0.77}]}, {"code": "002149", "name": "西部材料", "hot_rank": 55, "hot_rank_chg": 7, "stock_cnt": 5877, "price": "35.54", "change": "10.00", "market_id": "33", "circulate_market_value": "17348464000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "第三季度增长"}, {"code": "000559", "name": "万向钱潮", "hot_rank": 56, "hot_rank_chg": -36, "stock_cnt": 5877, "price": "12.29", "change": "-5.61", "market_id": "33", "circulate_market_value": "40889802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.89}, {"name": "半导体", "change_pct": -1.39}, {"name": "锂电池", "change_pct": -0.8}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "汽车零部件", "change_pct": -1.94}, {"name": "新能源汽车", "change_pct": -1.21}, {"name": "机器人", "change_pct": -1.76}, {"name": "智能制造", "change_pct": -1.14}, {"name": "工业互联网", "change_pct": -1.24}, {"name": "新能源车零部件", "change_pct": -1.83}, {"name": "固态电池", "change_pct": -0.52}, {"name": "MCU概念", "change_pct": -0.6}, {"name": "人形机器人", "change_pct": -2.09}, {"name": "小米汽车", "change_pct": -1.53}, {"name": "低空经济", "change_pct": -1.5}]}, {"code": "001317", "name": "三羊马", "hot_rank": 57, "hot_rank_chg": -22, "stock_cnt": 5877, "price": "56.14", "change": "-3.34", "market_id": "33", "circulate_market_value": "4800111300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 58, "hot_rank_chg": 21, "stock_cnt": 5877, "price": "156.40", "change": "6.13", "market_id": "17", "circulate_market_value": "24522037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 59, "hot_rank_chg": 923, "stock_cnt": 5877, "price": "9.42", "change": "0.85", "market_id": "33", "circulate_market_value": "5735948300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.49}, {"name": "一带一路", "change_pct": -0.46}, {"name": "金融科技", "change_pct": -1.82}, {"name": "移动支付", "change_pct": -1.48}, {"name": "物联网", "change_pct": -1.28}, {"name": "数字经济", "change_pct": -1.74}, {"name": "电子身份证", "change_pct": -1.87}, {"name": "ETC", "change_pct": -0.95}, {"name": "数字人民币", "change_pct": -1.54}, {"name": "智慧政务", "change_pct": -1.67}, {"name": "eSIM", "change_pct": -1.73}, {"name": "华为产业链", "change_pct": -1.45}, {"name": "区块链", "change_pct": -1.28}, {"name": "RWA", "change_pct": -1.48}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 60, "hot_rank_chg": 27, "stock_cnt": 5877, "price": "23.55", "change": "-3.64", "market_id": "17", "circulate_market_value": "16281896000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 61, "hot_rank_chg": -17, "stock_cnt": 5877, "price": "13.58", "change": "-0.73", "market_id": "17", "circulate_market_value": "2200521000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603528", "name": "多伦科技", "hot_rank": 62, "hot_rank_chg": -14, "stock_cnt": 5877, "price": "7.18", "change": "-10.03", "market_id": "17", "circulate_market_value": "5068578300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.49}, {"name": "国产软件", "change_pct": -1.82}, {"name": "无人驾驶", "change_pct": -1.83}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "人工智能", "change_pct": -1.64}, {"name": "充电桩", "change_pct": -1.5}, {"name": "北斗导航", "change_pct": -1.21}, {"name": "智慧停车", "change_pct": -1.43}, {"name": "物联网", "change_pct": -1.28}, {"name": "教育", "change_pct": -1.19}, {"name": "智慧城市", "change_pct": -1.42}, {"name": "光伏", "change_pct": -0.83}, {"name": "新能源汽车", "change_pct": -1.21}, {"name": "机器人", "change_pct": -1.76}, {"name": "机器视觉", "change_pct": -2.11}, {"name": "智慧安防", "change_pct": -1.25}, {"name": "智能制造", "change_pct": -1.14}, {"name": "国产芯片", "change_pct": -1.51}, {"name": "华为昇腾", "change_pct": -1.96}, {"name": "职业教育", "change_pct": -0.5}, {"name": "在线教育", "change_pct": -0.02}, {"name": "华为云·鲲鹏", "change_pct": -1.66}, {"name": "华为产业链", "change_pct": -1.45}, {"name": "汽车检测", "change_pct": -1.58}]}, {"code": "603259", "name": "药明康德", "hot_rank": 63, "hot_rank_chg": 20, "stock_cnt": 5877, "price": "143.76", "change": "0.61", "market_id": "17", "circulate_market_value": "355558770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 64, "hot_rank_chg": 69, "stock_cnt": 5877, "price": "22.90", "change": "-3.00", "market_id": "17", "circulate_market_value": "33508921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 65, "hot_rank_chg": 7, "stock_cnt": 5877, "price": "91.11", "change": "-3.20", "market_id": "17", "circulate_market_value": "219734440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002862", "name": "实丰文化", "hot_rank": 66, "hot_rank_chg": 178, "stock_cnt": 5877, "price": "15.23", "change": "-9.99", "market_id": "33", "circulate_market_value": "1958222600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 67, "hot_rank_chg": -43, "stock_cnt": 5877, "price": "232.90", "change": "1.67", "market_id": "33", "circulate_market_value": "992297720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 68, "hot_rank_chg": 97, "stock_cnt": 5877, "price": "98.82", "change": "-1.78", "market_id": "33", "circulate_market_value": "44320487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 69, "hot_rank_chg": -14, "stock_cnt": 5877, "price": "9.99", "change": "2.99", "market_id": "33", "circulate_market_value": "9500839300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.71}, {"name": "大飞机", "change_pct": -1.07}, {"name": "北斗导航", "change_pct": -1.21}, {"name": "高铁轨交", "change_pct": -0.93}, {"name": "军民融合", "change_pct": -1.24}, {"name": "磁悬浮", "change_pct": -0.87}, {"name": "军工", "change_pct": -1.28}, {"name": "碳纤维", "change_pct": -0.75}, {"name": "无人机", "change_pct": -1.21}, {"name": "智能制造", "change_pct": -1.14}, {"name": "3D打印", "change_pct": -0.99}, {"name": "航天", "change_pct": -0.8}, {"name": "卫星互联网", "change_pct": -0.79}, {"name": "国资入股", "change_pct": 0.16}, {"name": "低空经济", "change_pct": -1.5}, {"name": "海洋经济", "change_pct": -0.16}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 70, "hot_rank_chg": -29, "stock_cnt": 5877, "price": "17.24", "change": "-4.17", "market_id": "33", "circulate_market_value": "8271323500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 71, "hot_rank_chg": 89, "stock_cnt": 5877, "price": "262.51", "change": "-4.03", "market_id": "17", "circulate_market_value": "106692251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 72, "hot_rank_chg": 127, "stock_cnt": 5877, "price": "67.57", "change": "-2.61", "market_id": "17", "circulate_market_value": "24384902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002878", "name": "元隆雅图", "hot_rank": 74, "hot_rank_chg": 340, "stock_cnt": 5877, "price": "13.71", "change": "-3.72", "market_id": "33", "circulate_market_value": "3236977700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 75, "hot_rank_chg": 64, "stock_cnt": 5877, "price": "10.65", "change": "10.02", "market_id": "17", "circulate_market_value": "4607974400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报减亏", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -2.38}, {"name": "光伏", "change_pct": -0.83}, {"name": "无线耳机", "change_pct": -1.16}, {"name": "华为产业链", "change_pct": -1.45}, {"name": "光伏胶膜", "change_pct": -0.06}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 76, "hot_rank_chg": -29, "stock_cnt": 5877, "price": "14.12", "change": "0.35", "market_id": "33", "circulate_market_value": "9320988900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 77, "hot_rank_chg": -11, "stock_cnt": 5877, "price": "13.01", "change": "0.85", "market_id": "33", "circulate_market_value": "20674465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 78, "hot_rank_chg": -47, "stock_cnt": 5877, "price": "61.26", "change": "-5.49", "market_id": "33", "circulate_market_value": "4819570200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 79, "hot_rank_chg": 48, "stock_cnt": 5877, "price": "9.78", "change": "-5.78", "market_id": "33", "circulate_market_value": "11095772900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.63}, {"name": "足球", "change_pct": -1.03}, {"name": "粤港澳大湾区", "change_pct": -0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.74}, {"name": "传媒", "change_pct": -2.92}, {"name": "AIGC概念", "change_pct": -2.56}, {"name": "字节跳动概念股", "change_pct": -2.56}, {"name": "国企改革", "change_pct": -0.55}, {"name": "网红/MCN", "change_pct": -1.63}, {"name": "短剧/互动影游", "change_pct": -3.27}, {"name": "AI视频", "change_pct": -3.56}]}, {"code": "603667", "name": "五洲新春", "hot_rank": 80, "hot_rank_chg": -53, "stock_cnt": 5877, "price": "50.50", "change": "-4.91", "market_id": "17", "circulate_market_value": "19349172000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 81, "hot_rank_chg": 97, "stock_cnt": 5877, "price": "128.81", "change": "-1.40", "market_id": "17", "circulate_market_value": "35498538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 82, "hot_rank_chg": -54, "stock_cnt": 5877, "price": "137.62", "change": "-0.35", "market_id": "17", "circulate_market_value": "65453724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 83, "hot_rank_chg": 5, "stock_cnt": 5877, "price": "33.10", "change": "-1.55", "market_id": "17", "circulate_market_value": "28020915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 84, "hot_rank_chg": 16, "stock_cnt": 5877, "price": "14.14", "change": "4.12", "market_id": "33", "circulate_market_value": "3999639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 85, "hot_rank_chg": 30, "stock_cnt": 5877, "price": "33.86", "change": "-2.62", "market_id": "33", "circulate_market_value": "38854010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002029", "name": "七匹狼", "hot_rank": 86, "hot_rank_chg": 233, "stock_cnt": 5877, "price": "8.39", "change": "2.82", "market_id": "33", "circulate_market_value": "5582756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.47}, {"name": "破净股", "change_pct": -0.07}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 87, "hot_rank_chg": -7, "stock_cnt": 5877, "price": "18.23", "change": "-1.19", "market_id": "33", "circulate_market_value": "4499823900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 88, "hot_rank_chg": 9, "stock_cnt": 5877, "price": "908.04", "change": "-0.54", "market_id": "17", "circulate_market_value": "571024590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 89, "hot_rank_chg": 108, "stock_cnt": 5877, "price": "16.46", "change": "-3.18", "market_id": "17", "circulate_market_value": "13034738200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 90, "hot_rank_chg": 9, "stock_cnt": 5877, "price": "48.86", "change": "0.47", "market_id": "17", "circulate_market_value": "311614260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 91, "hot_rank_chg": -13, "stock_cnt": 5877, "price": "28.64", "change": "-2.29", "market_id": "17", "circulate_market_value": "113785968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 92, "hot_rank_chg": 37, "stock_cnt": 5877, "price": "11.52", "change": "-8.58", "market_id": "17", "circulate_market_value": "3635822400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.77}, {"name": "冷链", "change_pct": -0.57}, {"name": "宁夏概念", "change_pct": -0.95}, {"name": "IP经济/谷子经济", "change_pct": -2.1}, {"name": "首发经济", "change_pct": -0.49}]}, {"code": "603028", "name": "赛福天", "hot_rank": 93, "hot_rank_chg": -23, "stock_cnt": 5877, "price": "8.42", "change": "-10.04", "market_id": "17", "circulate_market_value": "2387619000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电梯", "change_pct": -1.82}, {"name": "光伏", "change_pct": -0.83}, {"name": "机器人", "change_pct": -1.76}, {"name": "干细胞", "change_pct": 1.28}, {"name": "人形机器人", "change_pct": -2.09}, {"name": "海洋经济", "change_pct": -0.16}]}, {"code": "601995", "name": "中金公司", "hot_rank": 94, "hot_rank_chg": -58, "stock_cnt": 5877, "price": "26.92", "change": "-0.74", "market_id": "17", "circulate_market_value": "109291553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 95, "hot_rank_chg": -36, "stock_cnt": 5877, "price": "30.30", "change": "6.90", "market_id": "33", "circulate_market_value": "23812743000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000701", "name": "厦门信达", "hot_rank": 96, "hot_rank_chg": 189, "stock_cnt": 5877, "price": "5.68", "change": "1.07", "market_id": "33", "circulate_market_value": "3792800900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -1.13}, {"name": "应急产业", "change_pct": -1.64}, {"name": "车联网/车路云", "change_pct": -1.49}, {"name": "福建自贸/海西概念", "change_pct": -0.94}, {"name": "电子车牌", "change_pct": -1.1}, {"name": "物联网", "change_pct": -1.28}, {"name": "智慧城市", "change_pct": -1.42}, {"name": "LED", "change_pct": -0.72}, {"name": "智慧安防", "change_pct": -1.25}, {"name": "小米概念股", "change_pct": -1.18}, {"name": "汽车销售", "change_pct": -0.72}, {"name": "食品安全", "change_pct": -0.68}, {"name": "web3.0", "change_pct": -2.6}, {"name": "国企改革", "change_pct": -0.55}, {"name": "MiniLED", "change_pct": -0.99}, {"name": "自贸区", "change_pct": -0.13}, {"name": "小米汽车", "change_pct": -1.53}, {"name": "IP经济/谷子经济", "change_pct": -2.1}]}, {"code": "600693", "name": "东百集团", "hot_rank": 97, "hot_rank_chg": 11, "stock_cnt": 5877, "price": "8.67", "change": "-0.46", "market_id": "17", "circulate_market_value": "7533820600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.82}, {"name": "快递物流", "change_pct": -0.13}, {"name": "新零售", "change_pct": -0.77}, {"name": "福建自贸/海西概念", "change_pct": -0.94}, {"name": "旅游", "change_pct": 0.57}, {"name": "阿里巴巴概念股", "change_pct": -1.84}, {"name": "物业管理", "change_pct": -0.72}, {"name": "免税店概念", "change_pct": 0.01}, {"name": "自贸区", "change_pct": -0.13}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 98, "hot_rank_chg": -33, "stock_cnt": 5877, "price": "6.55", "change": "-2.82", "market_id": "33", "circulate_market_value": "12543855500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.94}, {"name": "林业", "change_pct": -1.19}, {"name": "碳中和", "change_pct": -0.78}, {"name": "自贸区", "change_pct": -0.13}]}, {"code": "002421", "name": "达实智能", "hot_rank": 99, "hot_rank_chg": 11, "stock_cnt": 5877, "price": "3.19", "change": "-5.34", "market_id": "33", "circulate_market_value": "6495475300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -1.86}, {"name": "数字孪生", "change_pct": -2.48}, {"name": "深圳本地股", "change_pct": -0.95}, {"name": "人工智能", "change_pct": -1.64}, {"name": "互联网医疗", "change_pct": 0.09}, {"name": "云计算数据中心", "change_pct": -1.61}, {"name": "高铁轨交", "change_pct": -0.93}, {"name": "人脸识别", "change_pct": -1.91}, {"name": "智慧停车", "change_pct": -1.43}, {"name": "物联网", "change_pct": -1.28}, {"name": "大数据", "change_pct": -1.64}, {"name": "智慧城市", "change_pct": -1.42}, {"name": "雄安新区", "change_pct": -0.43}, {"name": "机器人", "change_pct": -1.76}, {"name": "数字经济", "change_pct": -1.74}, {"name": "阿里巴巴概念股", "change_pct": -1.84}, {"name": "腾讯概念股", "change_pct": -1.91}, {"name": "建筑节能", "change_pct": -0.46}, {"name": "旧改", "change_pct": -0.39}, {"name": "医疗信息化", "change_pct": -0.65}, {"name": "新冠病毒防治", "change_pct": 0.08}, {"name": "华为产业链", "change_pct": -1.45}, {"name": "AI大模型/智能体", "change_pct": -1.75}, {"name": "医疗耗材供应链SPD", "change_pct": 0.23}, {"name": "液冷服务器", "change_pct": -1.63}, {"name": "区块链", "change_pct": -1.28}]}, {"code": "001287", "name": "中电港", "hot_rank": 100, "hot_rank_chg": 856, "stock_cnt": 5877, "price": "20.24", "change": "10.00", "market_id": "33", "circulate_market_value": "15380378000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增"}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "600745": "ST/风险警示股"};