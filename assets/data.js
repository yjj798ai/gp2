const UPDATE_TIME = "2026-10-28 19:16";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 4.13,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "存储芯片",
    "rise": 3.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续271天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "机器人概念",
    "rise": 3.14,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 4.02,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续318天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "减速器",
    "rise": 4.72,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "商业航天",
    "rise": 2.76,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续247天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": 1.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续148天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "液冷服务器",
    "rise": 3.2,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "芯片概念",
    "rise": 3.3,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 2,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "人工智能",
    "rise": 1.89,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": -1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "PCB概念",
    "rise": 3.93,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续141天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": 1.51,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "黄金概念",
    "rise": 0.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "光刻机",
    "rise": 5.2,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "短剧游戏",
    "rise": 2.91,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "军工",
    "rise": 2.33,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "科创次新股",
    "rise": 5.32,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 2,
    "etfName": "",
    "code": "885907"
  },
  {
    "name": "基因测序",
    "rise": 3.33,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "生物医药ETF",
    "code": "885578"
  },
  {
    "name": "固态电池",
    "rise": 2.25,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": -1,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "工业母机",
    "rise": 4.46,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885930"
  }
];
const THS_EVENTS = [
  {
    "title": "上海发布新一代智能制造行动方案",
    "desc": "",
    "heat": 732538,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "朗信电气",
        "code": "920220",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "苹果首款触屏MacBook Pro爆料：定价外观散热全都大改",
    "desc": "",
    "heat": 558424,
    "direction": "苹果概念",
    "themes": [
      "苹果概念",
      "同花顺果指数",
      "富士康概念"
    ],
    "stocks": [
      {
        "name": "斯迪克",
        "code": "300806",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "马斯克最新预测，机器人内存需求超乎想象",
    "desc": "",
    "heat": 446972,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "君正股份",
        "code": "300223",
        "chg": 18.372093
      }
    ]
  },
  {
    "title": "需求旺盛、产能吃紧！台积电据传拟将先进封装价格最高上调20%",
    "desc": "",
    "heat": 428536,
    "direction": "先进封装",
    "themes": [
      "先进封装封测",
      "先进封装设备",
      "先进封装材料",
      "2.5D/3D封装",
      "扇出型封装"
    ],
    "stocks": [
      {
        "name": "新益昌",
        "code": "688383",
        "chg": 11.821487
      }
    ]
  },
  {
    "title": "Anthropic与百时美施贵宝等六机构启动AI药物发现项目",
    "desc": "",
    "heat": 371855,
    "direction": "医疗服务",
    "themes": [
      "医疗服务",
      "CRO概念",
      "细胞免疫治疗",
      "AI4S"
    ],
    "stocks": [
      {
        "name": "近岸蛋白",
        "code": "688137",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "抖音集团副总裁李亮谈腾讯短剧：增速远远超过抖音和红果",
    "desc": "",
    "heat": 323704,
    "direction": "短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "文化传媒"
    ],
    "stocks": [
      {
        "name": "果麦文化",
        "code": "301052",
        "chg": 17.195686
      }
    ]
  },
  {
    "title": "上海“星枢计划”目标 2032 年完成千星部署，百万级 TOPS 算力上天",
    "desc": "",
    "heat": 323673,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "西子洁能",
        "code": "002534",
        "chg": 10.0
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子鼻",
    "change": "+7.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+6.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+5.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+5.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+5.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+5.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PEEK材料",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+4.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+4.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+4.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+4.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业母机",
    "change": "+4.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+4.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+4.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果产业链",
    "change": "+4.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+4.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 4,
    "hot_rank_chg": 8,
    "stock_cnt": 5845,
    "price": "11.77",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3934227500.00",
    "change_type": "1",
    "change_section": "14",
    "change_days": "9",
    "change_reason": "水产加工",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.8
      },
      {
        "name": "饲料",
        "change_pct": 0.06
      },
      {
        "name": "一带一路",
        "change_pct": 1.33
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "保健品",
        "change_pct": 0.4
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.48
      },
      {
        "name": "污水处理",
        "change_pct": 1.51
      },
      {
        "name": "环保",
        "change_pct": 1.56
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "预制菜",
        "change_pct": -0.22
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      },
      {
        "name": "水产养殖",
        "change_pct": 0.62
      },
      {
        "name": "广西概念",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 10,
    "hot_rank_chg": -5,
    "stock_cnt": 5845,
    "price": "8.02",
    "change": "4.16",
    "market_id": "33",
    "circulate_market_value": "15016902000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": 1.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.25
      },
      {
        "name": "军民融合",
        "change_pct": 2.67
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.75
      },
      {
        "name": "风电",
        "change_pct": 1.94
      },
      {
        "name": "军工",
        "change_pct": 2.31
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.4
      },
      {
        "name": "新能源车零部件",
        "change_pct": 3.39
      },
      {
        "name": "轮边电机",
        "change_pct": 1.59
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 11,
    "hot_rank_chg": 13,
    "stock_cnt": 5845,
    "price": "4.88",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "3733886800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.04
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.41
      },
      {
        "name": "医药商业",
        "change_pct": 0.38
      },
      {
        "name": "保健品",
        "change_pct": 0.4
      },
      {
        "name": "民营医院",
        "change_pct": 0.82
      },
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.5
      },
      {
        "name": "口腔",
        "change_pct": 2.14
      },
      {
        "name": "医美",
        "change_pct": 0.71
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 14,
    "hot_rank_chg": 7,
    "stock_cnt": 5845,
    "price": "6.09",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "3785645000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "机器人电机",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.97
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "冷链",
        "change_pct": 1.46
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.34
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "白色家电",
        "change_pct": 2.7
      },
      {
        "name": "家电",
        "change_pct": 2.35
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.54
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 21,
    "hot_rank_chg": -5,
    "stock_cnt": 5845,
    "price": "7.48",
    "change": "-8.78",
    "market_id": "33",
    "circulate_market_value": "4488873100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.75
      },
      {
        "name": "边缘计算",
        "change_pct": 2.12
      },
      {
        "name": "核电",
        "change_pct": 1.68
      },
      {
        "name": "海工装备",
        "change_pct": 1.44
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.25
      },
      {
        "name": "冷链",
        "change_pct": 1.46
      },
      {
        "name": "地热",
        "change_pct": 1.69
      },
      {
        "name": "储能",
        "change_pct": 1.88
      },
      {
        "name": "碳中和",
        "change_pct": 1.04
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.03
      },
      {
        "name": "汽车热管理",
        "change_pct": 3.94
      },
      {
        "name": "热泵",
        "change_pct": 2.97
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.27
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.3
      },
      {
        "name": "海洋经济",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 22,
    "hot_rank_chg": -2,
    "stock_cnt": 5845,
    "price": "8.87",
    "change": "-9.95",
    "market_id": "17",
    "circulate_market_value": "6261600300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.3
      },
      {
        "name": "国产软件",
        "change_pct": 1.0
      },
      {
        "name": "无人驾驶",
        "change_pct": 2.6
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "人工智能",
        "change_pct": 2.14
      },
      {
        "name": "充电桩",
        "change_pct": 1.93
      },
      {
        "name": "北斗导航",
        "change_pct": 2.13
      },
      {
        "name": "智慧停车",
        "change_pct": 0.94
      },
      {
        "name": "物联网",
        "change_pct": 2.04
      },
      {
        "name": "教育",
        "change_pct": 0.64
      },
      {
        "name": "智慧城市",
        "change_pct": 1.37
      },
      {
        "name": "光伏",
        "change_pct": 1.68
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.4
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "机器视觉",
        "change_pct": 2.59
      },
      {
        "name": "智慧安防",
        "change_pct": 1.81
      },
      {
        "name": "智能制造",
        "change_pct": 2.98
      },
      {
        "name": "国产芯片",
        "change_pct": 3.88
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.7
      },
      {
        "name": "职业教育",
        "change_pct": 1.1
      },
      {
        "name": "在线教育",
        "change_pct": 1.17
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.5
      },
      {
        "name": "华为产业链",
        "change_pct": 2.26
      },
      {
        "name": "汽车检测",
        "change_pct": 2.07
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 24,
    "hot_rank_chg": 11,
    "stock_cnt": 5845,
    "price": "2.06",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "5896486800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.56
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "游戏",
        "change_pct": 3.05
      },
      {
        "name": "影视",
        "change_pct": 3.3
      },
      {
        "name": "低价股",
        "change_pct": 0.36
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.11
      },
      {
        "name": "AI视频",
        "change_pct": 2.6
      }
    ]
  },
  {
    "code": "600828",
    "name": "茂业商业",
    "hot_rank": 25,
    "hot_rank_chg": 7,
    "stock_cnt": 5845,
    "price": "4.92",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "8518292100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.36
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "信托",
        "change_pct": -0.01
      },
      {
        "name": "大金融",
        "change_pct": -0.42
      },
      {
        "name": "免税店概念",
        "change_pct": -0.51
      },
      {
        "name": "地摊经济",
        "change_pct": 0.56
      }
    ]
  },
  {
    "code": "600601",
    "name": "方正科技",
    "hot_rank": 28,
    "hot_rank_chg": -3,
    "stock_cnt": 5845,
    "price": "10.32",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "43037427000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCB",
    "xgb_concepts": [
      {
        "name": "定增破发",
        "change_pct": 3.14
      },
      {
        "name": "长三角一体化",
        "change_pct": 0.62
      },
      {
        "name": "光通信",
        "change_pct": 3.98
      },
      {
        "name": "PCB板",
        "change_pct": 4.43
      },
      {
        "name": "智慧城市",
        "change_pct": 1.37
      },
      {
        "name": "电子发票",
        "change_pct": 1.02
      },
      {
        "name": "华为产业链",
        "change_pct": 2.26
      }
    ]
  },
  {
    "code": "002526",
    "name": "山东矿机",
    "hot_rank": 30,
    "hot_rank_chg": 15,
    "stock_cnt": 5845,
    "price": "2.98",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "5278278600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭机械",
    "xgb_concepts": [
      {
        "name": "机械",
        "change_pct": 2.52
      },
      {
        "name": "游戏",
        "change_pct": 3.05
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "无人机",
        "change_pct": 2.47
      },
      {
        "name": "低价股",
        "change_pct": 0.36
      },
      {
        "name": "低空经济",
        "change_pct": 2.29
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 33,
    "hot_rank_chg": -2,
    "stock_cnt": 5845,
    "price": "8.18",
    "change": "-0.73",
    "market_id": "33",
    "circulate_market_value": "13308809100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.97
      },
      {
        "name": "电竞",
        "change_pct": 2.46
      },
      {
        "name": "手游",
        "change_pct": 2.56
      },
      {
        "name": "人工智能",
        "change_pct": 2.14
      },
      {
        "name": "游戏",
        "change_pct": 3.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.22
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.77
      },
      {
        "name": "传媒",
        "change_pct": 1.97
      },
      {
        "name": "快手概念股",
        "change_pct": 1.64
      },
      {
        "name": "元宇宙",
        "change_pct": 1.83
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.88
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.86
      },
      {
        "name": "web3.0",
        "change_pct": 1.51
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.85
      },
      {
        "name": "数据要素",
        "change_pct": 1.57
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.0
      },
      {
        "name": "AI营销",
        "change_pct": 1.33
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.18
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.5
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.43
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.11
      },
      {
        "name": "多模态",
        "change_pct": 1.84
      },
      {
        "name": "AI视频",
        "change_pct": 2.6
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.09
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 37,
    "hot_rank_chg": 6,
    "stock_cnt": 5845,
    "price": "7.08",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "5876187300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季度增长",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 3.87
      },
      {
        "name": "资产重组",
        "change_pct": 2.77
      },
      {
        "name": "半导体",
        "change_pct": 4.46
      },
      {
        "name": "小米概念股",
        "change_pct": 3.26
      },
      {
        "name": "国产芯片",
        "change_pct": 3.88
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 38,
    "hot_rank_chg": -5,
    "stock_cnt": 5845,
    "price": "8.71",
    "change": "-1.25",
    "market_id": "33",
    "circulate_market_value": "4125755300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.56
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "VR&AR",
        "change_pct": 2.91
      },
      {
        "name": "游戏",
        "change_pct": 3.05
      },
      {
        "name": "影视",
        "change_pct": 3.3
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.33
      },
      {
        "name": "动漫",
        "change_pct": 4.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.77
      },
      {
        "name": "传媒",
        "change_pct": 1.97
      },
      {
        "name": "元宇宙",
        "change_pct": 1.83
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 39,
    "hot_rank_chg": -17,
    "stock_cnt": 5845,
    "price": "10.40",
    "change": "0.68",
    "market_id": "17",
    "circulate_market_value": "2949078100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": 2.0
      },
      {
        "name": "光伏",
        "change_pct": 1.68
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "干细胞",
        "change_pct": 4.24
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      },
      {
        "name": "海洋经济",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "603081",
    "name": "大丰实业",
    "hot_rank": 44,
    "hot_rank_chg": 8,
    "stock_cnt": 5845,
    "price": "11.31",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4778465400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.75
      },
      {
        "name": "电竞",
        "change_pct": 2.46
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "人工智能",
        "change_pct": 2.14
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.9
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "传媒",
        "change_pct": 1.97
      },
      {
        "name": "全息概念",
        "change_pct": 1.95
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.09
      },
      {
        "name": "首发经济",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 46,
    "hot_rank_chg": 13,
    "stock_cnt": 5845,
    "price": "2.34",
    "change": "-2.09",
    "market_id": "33",
    "circulate_market_value": "3699472800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 3.4
      },
      {
        "name": "体外诊断",
        "change_pct": 2.48
      },
      {
        "name": "医疗器械",
        "change_pct": 2.38
      },
      {
        "name": "基因测序",
        "change_pct": 4.14
      },
      {
        "name": "预制菜",
        "change_pct": -0.22
      },
      {
        "name": "低价股",
        "change_pct": 0.36
      },
      {
        "name": "水产养殖",
        "change_pct": 0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.53
      },
      {
        "name": "海洋经济",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 51,
    "hot_rank_chg": 6,
    "stock_cnt": 5845,
    "price": "3.85",
    "change": "-9.84",
    "market_id": "17",
    "circulate_market_value": "4466558400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 2.77
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "玻璃",
        "change_pct": 0.64
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 52,
    "hot_rank_chg": 24,
    "stock_cnt": 5845,
    "price": "6.70",
    "change": "0.15",
    "market_id": "33",
    "circulate_market_value": "12831119400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.18
      },
      {
        "name": "林业",
        "change_pct": 0.62
      },
      {
        "name": "碳中和",
        "change_pct": 1.04
      },
      {
        "name": "自贸区",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 56,
    "hot_rank_chg": -3,
    "stock_cnt": 5845,
    "price": "9.12",
    "change": "-6.08",
    "market_id": "17",
    "circulate_market_value": "7924849400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.97
      },
      {
        "name": "快递物流",
        "change_pct": 0.84
      },
      {
        "name": "新零售",
        "change_pct": 0.36
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.18
      },
      {
        "name": "旅游",
        "change_pct": -0.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.42
      },
      {
        "name": "物业管理",
        "change_pct": 0.81
      },
      {
        "name": "免税店概念",
        "change_pct": -0.51
      },
      {
        "name": "自贸区",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 58,
    "hot_rank_chg": -4,
    "stock_cnt": 5845,
    "price": "9.92",
    "change": "19.95",
    "market_id": "33",
    "circulate_market_value": "10473743300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "纳米炭铁",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 2.18
      },
      {
        "name": "医疗器械",
        "change_pct": 2.38
      },
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "疫苗",
        "change_pct": 0.17
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "肝炎概念",
        "change_pct": 1.46
      },
      {
        "name": "干细胞",
        "change_pct": 4.24
      },
      {
        "name": "眼科",
        "change_pct": 0.76
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 6.2
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 64,
    "hot_rank_chg": -4,
    "stock_cnt": 5845,
    "price": "10.30",
    "change": "-0.77",
    "market_id": "17",
    "circulate_market_value": "6610367100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.22
      },
      {
        "name": "农业种植",
        "change_pct": -0.36
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.12
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.72
      },
      {
        "name": "休闲食品",
        "change_pct": 0.6
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "食品安全",
        "change_pct": 0.96
      },
      {
        "name": "社区团购",
        "change_pct": 0.91
      },
      {
        "name": "大农业",
        "change_pct": 0.53
      },
      {
        "name": "预制菜",
        "change_pct": -0.22
      },
      {
        "name": "人造肉",
        "change_pct": 0.42
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 69,
    "hot_rank_chg": 22,
    "stock_cnt": 5845,
    "price": "7.26",
    "change": "6.30",
    "market_id": "17",
    "circulate_market_value": "3326883400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 0.67
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.18
      },
      {
        "name": "自贸区",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 80,
    "hot_rank_chg": 22,
    "stock_cnt": 5845,
    "price": "5.45",
    "change": "2.83",
    "market_id": "17",
    "circulate_market_value": "13725879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.97
      },
      {
        "name": "工业大麻",
        "change_pct": 0.99
      },
      {
        "name": "中药",
        "change_pct": 1.04
      },
      {
        "name": "保健品",
        "change_pct": 0.4
      },
      {
        "name": "民营医院",
        "change_pct": 0.82
      },
      {
        "name": "医药",
        "change_pct": 1.73
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "流感",
        "change_pct": 1.46
      },
      {
        "name": "振兴东北",
        "change_pct": 0.04
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "肝炎概念",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "600173",
    "name": "卧龙新能",
    "hot_rank": 81,
    "hot_rank_chg": 47,
    "stock_cnt": 5845,
    "price": "5.45",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "3817268500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "储能并网",
    "xgb_concepts": [
      {
        "name": "稀土磁材",
        "change_pct": 3.01
      },
      {
        "name": "手游",
        "change_pct": 2.56
      },
      {
        "name": "房地产",
        "change_pct": 0.31
      },
      {
        "name": "游戏",
        "change_pct": 3.05
      },
      {
        "name": "环杭州湾大湾区",
        "change_pct": 1.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "002376",
    "name": "新北洋",
    "hot_rank": 86,
    "hot_rank_chg": 15,
    "stock_cnt": 5845,
    "price": "7.58",
    "change": "-4.05",
    "market_id": "33",
    "circulate_market_value": "5968981300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "彩票",
        "change_pct": 0.28
      },
      {
        "name": "锂电池",
        "change_pct": 2.14
      },
      {
        "name": "新零售",
        "change_pct": 0.36
      },
      {
        "name": "人工智能",
        "change_pct": 2.14
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.9
      },
      {
        "name": "人脸识别",
        "change_pct": 1.76
      },
      {
        "name": "物联网",
        "change_pct": 2.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.4
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "智慧物流",
        "change_pct": 1.91
      },
      {
        "name": "机器视觉",
        "change_pct": 2.59
      },
      {
        "name": "智能制造",
        "change_pct": 2.98
      },
      {
        "name": "换电概念",
        "change_pct": 1.55
      },
      {
        "name": "信创",
        "change_pct": 1.21
      },
      {
        "name": "数字人民币",
        "change_pct": 0.67
      },
      {
        "name": "盲盒",
        "change_pct": 1.07
      },
      {
        "name": "打印机",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 90,
    "hot_rank_chg": -9,
    "stock_cnt": 5845,
    "price": "10.77",
    "change": "3.56",
    "market_id": "33",
    "circulate_market_value": "12218964600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.75
      },
      {
        "name": "足球",
        "change_pct": 1.75
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.89
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.22
      },
      {
        "name": "传媒",
        "change_pct": 1.97
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.85
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.0
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.11
      },
      {
        "name": "AI视频",
        "change_pct": 2.6
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 91,
    "hot_rank_chg": 13,
    "stock_cnt": 5845,
    "price": "8.74",
    "change": "-9.80",
    "market_id": "17",
    "circulate_market_value": "2572200500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 2.14
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.07
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.4
      },
      {
        "name": "振兴东北",
        "change_pct": 0.04
      },
      {
        "name": "国企改革",
        "change_pct": 0.69
      },
      {
        "name": "自贸区",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 94,
    "hot_rank_chg": 13,
    "stock_cnt": 5845,
    "price": "9.58",
    "change": "-0.72",
    "market_id": "17",
    "circulate_market_value": "4145013600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.68
      },
      {
        "name": "强势人气股",
        "change_pct": 2.02
      },
      {
        "name": "光伏",
        "change_pct": 1.68
      },
      {
        "name": "无线耳机",
        "change_pct": 3.17
      },
      {
        "name": "华为产业链",
        "change_pct": 2.26
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002434",
    "name": "万里扬",
    "hot_rank": 99,
    "hot_rank_chg": 32,
    "stock_cnt": 5845,
    "price": "6.79",
    "change": "6.26",
    "market_id": "33",
    "circulate_market_value": "8904005700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": 2.74
      },
      {
        "name": "重卡",
        "change_pct": 1.72
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.34
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.4
      },
      {
        "name": "机器人",
        "change_pct": 3.79
      },
      {
        "name": "储能",
        "change_pct": 1.88
      },
      {
        "name": "新能源车零部件",
        "change_pct": 3.39
      },
      {
        "name": "虚拟电厂",
        "change_pct": 1.08
      },
      {
        "name": "大农业",
        "change_pct": 0.53
      },
      {
        "name": "减速器",
        "change_pct": 5.71
      },
      {
        "name": "人形机器人",
        "change_pct": 4.83
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000678", "name": "襄阳轴承", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "17.61", "change": "9.99", "market_id": "33", "circulate_market_value": "8093763700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "机器人轴承"}, {"code": "688836", "name": "宇树科技", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "695.90", "change": "8.74", "market_id": "17", "circulate_market_value": "20938044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5845, "price": "22.38", "change": "4.87", "market_id": "33", "circulate_market_value": "17048315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5845, "price": "11.77", "change": "10.00", "market_id": "33", "circulate_market_value": "3934227500.00", "change_type": "1", "change_section": "14", "change_days": "9", "change_reason": "水产加工", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.8}, {"name": "饲料", "change_pct": 0.06}, {"name": "一带一路", "change_pct": 1.33}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "保健品", "change_pct": 0.4}, {"name": "山东国企改革", "change_pct": 1.48}, {"name": "污水处理", "change_pct": 1.51}, {"name": "环保", "change_pct": 1.56}, {"name": "食品", "change_pct": 0.25}, {"name": "预制菜", "change_pct": -0.22}, {"name": "国企改革", "change_pct": 0.69}, {"name": "水产养殖", "change_pct": 0.62}, {"name": "广西概念", "change_pct": 1.23}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5845, "price": "18.94", "change": "9.99", "market_id": "33", "circulate_market_value": "9652398800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人形机器人"}, {"code": "000559", "name": "万向钱潮", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5845, "price": "13.18", "change": "10.02", "market_id": "33", "circulate_market_value": "43850902000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "人形机器人"}, {"code": "603278", "name": "大业股份", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "17.92", "change": "2.99", "market_id": "17", "circulate_market_value": "6124328300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "13.40", "change": "2.37", "market_id": "33", "circulate_market_value": "7590809100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 9, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "13.99", "change": "5.11", "market_id": "17", "circulate_market_value": "5608338900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5845, "price": "8.02", "change": "4.16", "market_id": "33", "circulate_market_value": "15016902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": 1.93}, {"name": "云计算数据中心", "change_pct": 2.25}, {"name": "军民融合", "change_pct": 2.67}, {"name": "氢能源/燃料电池", "change_pct": 1.75}, {"name": "风电", "change_pct": 1.94}, {"name": "军工", "change_pct": 2.31}, {"name": "新能源汽车", "change_pct": 2.4}, {"name": "新能源车零部件", "change_pct": 3.39}, {"name": "轮边电机", "change_pct": 1.59}, {"name": "人形机器人", "change_pct": 4.83}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 11, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "4.88", "change": "9.91", "market_id": "33", "circulate_market_value": "3733886800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": 1.04}, {"name": "优化生育（三孩）", "change_pct": 1.41}, {"name": "医药商业", "change_pct": 0.38}, {"name": "保健品", "change_pct": 0.4}, {"name": "民营医院", "change_pct": 0.82}, {"name": "医药", "change_pct": 1.73}, {"name": "食品", "change_pct": 0.25}, {"name": "辅助生殖", "change_pct": 2.5}, {"name": "口腔", "change_pct": 2.14}, {"name": "医美", "change_pct": 0.71}, {"name": "新冠病毒防治", "change_pct": 1.53}]}, {"code": "002185", "name": "华天科技", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "16.28", "change": "5.78", "market_id": "33", "circulate_market_value": "54147712000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5845, "price": "14.81", "change": "1.58", "market_id": "17", "circulate_market_value": "15474789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601956", "name": "东贝集团", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "6.09", "change": "9.93", "market_id": "17", "circulate_market_value": "3785645000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人电机", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.97}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "冷链", "change_pct": 1.46}, {"name": "汽车零部件", "change_pct": 3.34}, {"name": "机器人", "change_pct": 3.79}, {"name": "白色家电", "change_pct": 2.7}, {"name": "家电", "change_pct": 2.35}, {"name": "拼多多概念股", "change_pct": 1.54}, {"name": "人形机器人", "change_pct": 4.83}, {"name": "蜜雪冰城概念股", "change_pct": 1.3}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "636.30", "change": "10.28", "market_id": "33", "circulate_market_value": "706252920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "58.59", "change": "10.01", "market_id": "33", "circulate_market_value": "42491610000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "44.36", "change": "3.16", "market_id": "17", "circulate_market_value": "199754810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "289.88", "change": "7.77", "market_id": "17", "circulate_market_value": "194427830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5845, "price": "48.61", "change": "10.00", "market_id": "17", "circulate_market_value": "14509047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "49.98", "change": "9.99", "market_id": "17", "circulate_market_value": "19149933000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报业绩"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 21, "hot_rank_chg": -5, "stock_cnt": 5845, "price": "7.48", "change": "-8.78", "market_id": "33", "circulate_market_value": "4488873100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.75}, {"name": "边缘计算", "change_pct": 2.12}, {"name": "核电", "change_pct": 1.68}, {"name": "海工装备", "change_pct": 1.44}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "云计算数据中心", "change_pct": 2.25}, {"name": "冷链", "change_pct": 1.46}, {"name": "地热", "change_pct": 1.69}, {"name": "储能", "change_pct": 1.88}, {"name": "碳中和", "change_pct": 1.04}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.03}, {"name": "汽车热管理", "change_pct": 3.94}, {"name": "热泵", "change_pct": 2.97}, {"name": "液冷服务器", "change_pct": 3.27}, {"name": "蜜雪冰城概念股", "change_pct": 1.3}, {"name": "海洋经济", "change_pct": 1.32}]}, {"code": "603528", "name": "多伦科技", "hot_rank": 22, "hot_rank_chg": -2, "stock_cnt": 5845, "price": "8.87", "change": "-9.95", "market_id": "17", "circulate_market_value": "6261600300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.3}, {"name": "国产软件", "change_pct": 1.0}, {"name": "无人驾驶", "change_pct": 2.6}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "人工智能", "change_pct": 2.14}, {"name": "充电桩", "change_pct": 1.93}, {"name": "北斗导航", "change_pct": 2.13}, {"name": "智慧停车", "change_pct": 0.94}, {"name": "物联网", "change_pct": 2.04}, {"name": "教育", "change_pct": 0.64}, {"name": "智慧城市", "change_pct": 1.37}, {"name": "光伏", "change_pct": 1.68}, {"name": "新能源汽车", "change_pct": 2.4}, {"name": "机器人", "change_pct": 3.79}, {"name": "机器视觉", "change_pct": 2.59}, {"name": "智慧安防", "change_pct": 1.81}, {"name": "智能制造", "change_pct": 2.98}, {"name": "国产芯片", "change_pct": 3.88}, {"name": "华为昇腾", "change_pct": 0.7}, {"name": "职业教育", "change_pct": 1.1}, {"name": "在线教育", "change_pct": 1.17}, {"name": "华为云·鲲鹏", "change_pct": 0.5}, {"name": "华为产业链", "change_pct": 2.26}, {"name": "汽车检测", "change_pct": 2.07}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5845, "price": "16.48", "change": "10.01", "market_id": "33", "circulate_market_value": "3134454800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "股权转让"}, {"code": "600715", "name": "文投控股", "hot_rank": 24, "hot_rank_chg": 11, "stock_cnt": 5845, "price": "2.06", "change": "10.16", "market_id": "17", "circulate_market_value": "5896486800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": 2.56}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "游戏", "change_pct": 3.05}, {"name": "影视", "change_pct": 3.3}, {"name": "低价股", "change_pct": 0.36}, {"name": "国企改革", "change_pct": 0.69}, {"name": "短剧/互动影游", "change_pct": 3.11}, {"name": "AI视频", "change_pct": 2.6}]}, {"code": "600828", "name": "茂业商业", "hot_rank": 25, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "4.92", "change": "10.07", "market_id": "17", "circulate_market_value": "8518292100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 0.36}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "信托", "change_pct": -0.01}, {"name": "大金融", "change_pct": -0.42}, {"name": "免税店概念", "change_pct": -0.51}, {"name": "地摊经济", "change_pct": 0.56}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "48.47", "change": "4.17", "market_id": "17", "circulate_market_value": "118928234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5845, "price": "16.90", "change": "10.03", "market_id": "33", "circulate_market_value": "8108199900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "600601", "name": "方正科技", "hot_rank": 28, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "10.32", "change": "10.02", "market_id": "17", "circulate_market_value": "43037427000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB", "xgb_concepts": [{"name": "定增破发", "change_pct": 3.14}, {"name": "长三角一体化", "change_pct": 0.62}, {"name": "光通信", "change_pct": 3.98}, {"name": "PCB板", "change_pct": 4.43}, {"name": "智慧城市", "change_pct": 1.37}, {"name": "电子发票", "change_pct": 1.02}, {"name": "华为产业链", "change_pct": 2.26}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 29, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "13.15", "change": "4.20", "market_id": "17", "circulate_market_value": "8757900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002526", "name": "山东矿机", "hot_rank": 30, "hot_rank_chg": 15, "stock_cnt": 5845, "price": "2.98", "change": "9.96", "market_id": "33", "circulate_market_value": "5278278600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭机械", "xgb_concepts": [{"name": "机械", "change_pct": 2.52}, {"name": "游戏", "change_pct": 3.05}, {"name": "机器人", "change_pct": 3.79}, {"name": "无人机", "change_pct": 2.47}, {"name": "低价股", "change_pct": 0.36}, {"name": "低空经济", "change_pct": 2.29}]}, {"code": "600667", "name": "太极实业", "hot_rank": 31, "hot_rank_chg": 9, "stock_cnt": 5845, "price": "13.71", "change": "3.24", "market_id": "17", "circulate_market_value": "28675043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 32, "hot_rank_chg": 12, "stock_cnt": 5845, "price": "15.44", "change": "9.97", "market_id": "33", "circulate_market_value": "3879833500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体供应链"}, {"code": "002354", "name": "天娱数科", "hot_rank": 33, "hot_rank_chg": -2, "stock_cnt": 5845, "price": "8.18", "change": "-0.73", "market_id": "33", "circulate_market_value": "13308809100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.97}, {"name": "电竞", "change_pct": 2.46}, {"name": "手游", "change_pct": 2.56}, {"name": "人工智能", "change_pct": 2.14}, {"name": "游戏", "change_pct": 3.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.22}, {"name": "腾讯概念股", "change_pct": 1.77}, {"name": "传媒", "change_pct": 1.97}, {"name": "快手概念股", "change_pct": 1.64}, {"name": "元宇宙", "change_pct": 1.83}, {"name": "虚拟数字人", "change_pct": 1.88}, {"name": "东数西算/算力", "change_pct": 1.86}, {"name": "web3.0", "change_pct": 1.51}, {"name": "AIGC概念", "change_pct": 1.85}, {"name": "数据要素", "change_pct": 1.57}, {"name": "字节跳动概念股", "change_pct": 2.0}, {"name": "AI营销", "change_pct": 1.33}, {"name": "ChatGPT", "change_pct": 1.18}, {"name": "智能眼镜/MR头显", "change_pct": 3.5}, {"name": "AI大模型/智能体", "change_pct": 1.43}, {"name": "人形机器人", "change_pct": 4.83}, {"name": "短剧/互动影游", "change_pct": 3.11}, {"name": "多模态", "change_pct": 1.84}, {"name": "AI视频", "change_pct": 2.6}, {"name": "IP经济/谷子经济", "change_pct": 2.09}, {"name": "小红书概念股", "change_pct": 1.48}]}, {"code": "001309", "name": "德明利", "hot_rank": 34, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "230.56", "change": "2.93", "market_id": "33", "circulate_market_value": "53586314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "君正股份", "hot_rank": 35, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "111.98", "change": "18.37", "market_id": "33", "circulate_market_value": "47353371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "28.03", "change": "10.01", "market_id": "17", "circulate_market_value": "12302278300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧"}, {"code": "000670", "name": "盈方微", "hot_rank": 37, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "7.08", "change": "9.94", "market_id": "33", "circulate_market_value": "5876187300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季度增长", "xgb_concepts": [{"name": "被动元件", "change_pct": 3.87}, {"name": "资产重组", "change_pct": 2.77}, {"name": "半导体", "change_pct": 4.46}, {"name": "小米概念股", "change_pct": 3.26}, {"name": "国产芯片", "change_pct": 3.88}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 38, "hot_rank_chg": -5, "stock_cnt": 5845, "price": "8.71", "change": "-1.25", "market_id": "33", "circulate_market_value": "4125755300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 2.56}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "VR&AR", "change_pct": 2.91}, {"name": "游戏", "change_pct": 3.05}, {"name": "影视", "change_pct": 3.3}, {"name": "直播/短视频", "change_pct": 1.33}, {"name": "动漫", "change_pct": 4.01}, {"name": "腾讯概念股", "change_pct": 1.77}, {"name": "传媒", "change_pct": 1.97}, {"name": "元宇宙", "change_pct": 1.83}, {"name": "短剧/互动影游", "change_pct": 3.11}, {"name": "IP经济/谷子经济", "change_pct": 2.09}]}, {"code": "603028", "name": "赛福天", "hot_rank": 39, "hot_rank_chg": -17, "stock_cnt": 5845, "price": "10.40", "change": "0.68", "market_id": "17", "circulate_market_value": "2949078100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电梯", "change_pct": 2.0}, {"name": "光伏", "change_pct": 1.68}, {"name": "机器人", "change_pct": 3.79}, {"name": "干细胞", "change_pct": 4.24}, {"name": "人形机器人", "change_pct": 4.83}, {"name": "海洋经济", "change_pct": 1.32}]}, {"code": "600506", "name": "统一股份", "hot_rank": 40, "hot_rank_chg": 23, "stock_cnt": 5845, "price": "18.30", "change": "1.16", "market_id": "17", "circulate_market_value": "4568130400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603037", "name": "凯众股份", "hot_rank": 41, "hot_rank_chg": 9, "stock_cnt": 5845, "price": "13.06", "change": "10.03", "market_id": "17", "circulate_market_value": "3475920000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人零部件"}, {"code": "001216", "name": "华瓷股份", "hot_rank": 42, "hot_rank_chg": -5, "stock_cnt": 5845, "price": "20.50", "change": "-10.01", "market_id": "33", "circulate_market_value": "5060142100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 43, "hot_rank_chg": -5, "stock_cnt": 5845, "price": "164.00", "change": "8.36", "market_id": "17", "circulate_market_value": "78000368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603081", "name": "大丰实业", "hot_rank": 44, "hot_rank_chg": 8, "stock_cnt": 5845, "price": "11.31", "change": "10.02", "market_id": "17", "circulate_market_value": "4778465400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.75}, {"name": "电竞", "change_pct": 2.46}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "人工智能", "change_pct": 2.14}, {"name": "高铁轨交", "change_pct": 1.9}, {"name": "PPP", "change_pct": -0.9}, {"name": "传媒", "change_pct": 1.97}, {"name": "全息概念", "change_pct": 1.95}, {"name": "人形机器人", "change_pct": 4.83}, {"name": "IP经济/谷子经济", "change_pct": 2.09}, {"name": "首发经济", "change_pct": 0.44}]}, {"code": "300502", "name": "新易盛", "hot_rank": 45, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "256.79", "change": "8.08", "market_id": "33", "circulate_market_value": "322200510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 46, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "2.34", "change": "-2.09", "market_id": "33", "circulate_market_value": "3699472800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 3.4}, {"name": "体外诊断", "change_pct": 2.48}, {"name": "医疗器械", "change_pct": 2.38}, {"name": "基因测序", "change_pct": 4.14}, {"name": "预制菜", "change_pct": -0.22}, {"name": "低价股", "change_pct": 0.36}, {"name": "水产养殖", "change_pct": 0.62}, {"name": "新冠病毒防治", "change_pct": 1.53}, {"name": "海洋经济", "change_pct": 1.32}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 47, "hot_rank_chg": -17, "stock_cnt": 5845, "price": "30.14", "change": "5.94", "market_id": "33", "circulate_market_value": "23640187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001400", "name": "江顺科技", "hot_rank": 48, "hot_rank_chg": 31, "stock_cnt": 5845, "price": "88.31", "change": "10.00", "market_id": "33", "circulate_market_value": "2844818300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长"}, {"code": "002384", "name": "东山精密", "hot_rank": 49, "hot_rank_chg": -7, "stock_cnt": 5845, "price": "104.60", "change": "3.47", "market_id": "33", "circulate_market_value": "145009250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 50, "hot_rank_chg": 24, "stock_cnt": 5845, "price": "48.64", "change": "5.92", "market_id": "17", "circulate_market_value": "965216650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 51, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "3.85", "change": "-9.84", "market_id": "17", "circulate_market_value": "4466558400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 2.77}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "玻璃", "change_pct": 0.64}, {"name": "国企改革", "change_pct": 0.69}, {"name": "湖北国企改革", "change_pct": -0.42}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 52, "hot_rank_chg": 24, "stock_cnt": 5845, "price": "6.70", "change": "0.15", "market_id": "33", "circulate_market_value": "12831119400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.18}, {"name": "林业", "change_pct": 0.62}, {"name": "碳中和", "change_pct": 1.04}, {"name": "自贸区", "change_pct": 0.05}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 54, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "27.15", "change": "5.19", "market_id": "17", "circulate_market_value": "18770848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 55, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "229.14", "change": "-1.66", "market_id": "33", "circulate_market_value": "976277800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 56, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "9.12", "change": "-6.08", "market_id": "17", "circulate_market_value": "7924849400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.97}, {"name": "快递物流", "change_pct": 0.84}, {"name": "新零售", "change_pct": 0.36}, {"name": "福建自贸/海西概念", "change_pct": -0.18}, {"name": "旅游", "change_pct": -0.08}, {"name": "阿里巴巴概念股", "change_pct": 1.42}, {"name": "物业管理", "change_pct": 0.81}, {"name": "免税店概念", "change_pct": -0.51}, {"name": "自贸区", "change_pct": 0.05}]}, {"code": "601208", "name": "东材科技", "hot_rank": 57, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "37.59", "change": "8.30", "market_id": "17", "circulate_market_value": "37972777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 58, "hot_rank_chg": -4, "stock_cnt": 5845, "price": "9.92", "change": "19.95", "market_id": "33", "circulate_market_value": "10473743300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "纳米炭铁", "xgb_concepts": [{"name": "创新药", "change_pct": 2.18}, {"name": "医疗器械", "change_pct": 2.38}, {"name": "医药", "change_pct": 1.73}, {"name": "疫苗", "change_pct": 0.17}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "肝炎概念", "change_pct": 1.46}, {"name": "干细胞", "change_pct": 4.24}, {"name": "眼科", "change_pct": 0.76}, {"name": "肿瘤疫苗", "change_pct": 6.2}]}, {"code": "600584", "name": "长电科技", "hot_rank": 59, "hot_rank_chg": 10, "stock_cnt": 5845, "price": "55.41", "change": "3.98", "market_id": "17", "circulate_market_value": "99151461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 60, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "14.59", "change": "5.04", "market_id": "17", "circulate_market_value": "32380357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 61, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "13.26", "change": "0.46", "market_id": "17", "circulate_market_value": "2147086800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 62, "hot_rank_chg": -16, "stock_cnt": 5845, "price": "63.00", "change": "-2.17", "market_id": "33", "circulate_market_value": "4956462900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 63, "hot_rank_chg": 26, "stock_cnt": 5845, "price": "55.35", "change": "1.17", "market_id": "33", "circulate_market_value": "4732564300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 64, "hot_rank_chg": -4, "stock_cnt": 5845, "price": "10.30", "change": "-0.77", "market_id": "17", "circulate_market_value": "6610367100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.22}, {"name": "农业种植", "change_pct": -0.36}, {"name": "湖南国企改革", "change_pct": 1.12}, {"name": "乡村振兴", "change_pct": 0.72}, {"name": "休闲食品", "change_pct": 0.6}, {"name": "食品", "change_pct": 0.25}, {"name": "食品安全", "change_pct": 0.96}, {"name": "社区团购", "change_pct": 0.91}, {"name": "大农业", "change_pct": 0.53}, {"name": "预制菜", "change_pct": -0.22}, {"name": "人造肉", "change_pct": 0.42}, {"name": "国企改革", "change_pct": 0.69}]}, {"code": "002741", "name": "光华科技", "hot_rank": 65, "hot_rank_chg": 23, "stock_cnt": 5845, "price": "20.25", "change": "9.99", "market_id": "33", "circulate_market_value": "8708038500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB化学品"}, {"code": "603626", "name": "科森科技", "hot_rank": 66, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "27.83", "change": "10.00", "market_id": "17", "circulate_market_value": "15442302000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人结构件"}, {"code": "002428", "name": "云南锗业", "hot_rank": 67, "hot_rank_chg": 17, "stock_cnt": 5845, "price": "74.65", "change": "1.03", "market_id": "33", "circulate_market_value": "48747010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300613", "name": "富瀚微", "hot_rank": 68, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "72.48", "change": "20.00", "market_id": "33", "circulate_market_value": "15928957000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报高增"}, {"code": "600802", "name": "福建水泥", "hot_rank": 69, "hot_rank_chg": 22, "stock_cnt": 5845, "price": "7.26", "change": "6.30", "market_id": "17", "circulate_market_value": "3326883400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": 0.67}, {"name": "福建自贸/海西概念", "change_pct": -0.18}, {"name": "自贸区", "change_pct": 0.05}]}, {"code": "002975", "name": "博杰股份", "hot_rank": 70, "hot_rank_chg": 42, "stock_cnt": 5845, "price": "85.12", "change": "10.00", "market_id": "33", "circulate_market_value": "11766578700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人测试"}, {"code": "001318", "name": "阳光乳业", "hot_rank": 71, "hot_rank_chg": 7, "stock_cnt": 5845, "price": "13.31", "change": "0.00", "market_id": "33", "circulate_market_value": "3762204600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603337", "name": "杰克科技", "hot_rank": 72, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "48.83", "change": "10.00", "market_id": "17", "circulate_market_value": "22816906000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "人形机器人"}, {"code": "002050", "name": "三花智控", "hot_rank": 73, "hot_rank_chg": -32, "stock_cnt": 5845, "price": "35.64", "change": "4.64", "market_id": "33", "circulate_market_value": "131548844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 74, "hot_rank_chg": 25, "stock_cnt": 5845, "price": "17.86", "change": "0.45", "market_id": "17", "circulate_market_value": "14143404000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 75, "hot_rank_chg": -10, "stock_cnt": 5845, "price": "33.68", "change": "8.61", "market_id": "33", "circulate_market_value": "51123834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 76, "hot_rank_chg": 35, "stock_cnt": 5845, "price": "14.50", "change": "10.02", "market_id": "17", "circulate_market_value": "4885154700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报扭亏"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 77, "hot_rank_chg": 17, "stock_cnt": 5845, "price": "13.77", "change": "5.68", "market_id": "17", "circulate_market_value": "6120000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 78, "hot_rank_chg": -22, "stock_cnt": 5845, "price": "201.43", "change": "6.79", "market_id": "33", "circulate_market_value": "219234000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 79, "hot_rank_chg": -32, "stock_cnt": 5845, "price": "13.99", "change": "0.65", "market_id": "17", "circulate_market_value": "4419214300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 80, "hot_rank_chg": 22, "stock_cnt": 5845, "price": "5.45", "change": "2.83", "market_id": "17", "circulate_market_value": "13725879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.97}, {"name": "工业大麻", "change_pct": 0.99}, {"name": "中药", "change_pct": 1.04}, {"name": "保健品", "change_pct": 0.4}, {"name": "民营医院", "change_pct": 0.82}, {"name": "医药", "change_pct": 1.73}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "流感", "change_pct": 1.46}, {"name": "振兴东北", "change_pct": 0.04}, {"name": "食品", "change_pct": 0.25}, {"name": "肝炎概念", "change_pct": 1.46}]}, {"code": "600173", "name": "卧龙新能", "hot_rank": 81, "hot_rank_chg": 47, "stock_cnt": 5845, "price": "5.45", "change": "10.10", "market_id": "17", "circulate_market_value": "3817268500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "储能并网", "xgb_concepts": [{"name": "稀土磁材", "change_pct": 3.01}, {"name": "手游", "change_pct": 2.56}, {"name": "房地产", "change_pct": 0.31}, {"name": "游戏", "change_pct": 3.05}, {"name": "环杭州湾大湾区", "change_pct": 1.16}, {"name": "IP经济/谷子经济", "change_pct": 2.09}]}, {"code": "000858", "name": "五粮液", "hot_rank": 82, "hot_rank_chg": -34, "stock_cnt": 5845, "price": "72.40", "change": "-3.95", "market_id": "33", "circulate_market_value": "281021570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 83, "hot_rank_chg": -19, "stock_cnt": 5845, "price": "163.74", "change": "0.24", "market_id": "17", "circulate_market_value": "25672879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 84, "hot_rank_chg": -12, "stock_cnt": 5845, "price": "52.31", "change": "-0.57", "market_id": "17", "circulate_market_value": "557628000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301488", "name": "豪恩汽电", "hot_rank": 85, "hot_rank_chg": -27, "stock_cnt": 5845, "price": "97.87", "change": "20.00", "market_id": "33", "circulate_market_value": "4095343800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "前一交易日竞价波动"}, {"code": "002376", "name": "新北洋", "hot_rank": 86, "hot_rank_chg": 15, "stock_cnt": 5845, "price": "7.58", "change": "-4.05", "market_id": "33", "circulate_market_value": "5968981300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "彩票", "change_pct": 0.28}, {"name": "锂电池", "change_pct": 2.14}, {"name": "新零售", "change_pct": 0.36}, {"name": "人工智能", "change_pct": 2.14}, {"name": "高铁轨交", "change_pct": 1.9}, {"name": "人脸识别", "change_pct": 1.76}, {"name": "物联网", "change_pct": 2.04}, {"name": "新能源汽车", "change_pct": 2.4}, {"name": "机器人", "change_pct": 3.79}, {"name": "智慧物流", "change_pct": 1.91}, {"name": "机器视觉", "change_pct": 2.59}, {"name": "智能制造", "change_pct": 2.98}, {"name": "换电概念", "change_pct": 1.55}, {"name": "信创", "change_pct": 1.21}, {"name": "数字人民币", "change_pct": 0.67}, {"name": "盲盒", "change_pct": 1.07}, {"name": "打印机", "change_pct": 1.74}]}, {"code": "002265", "name": "建设工业", "hot_rank": 87, "hot_rank_chg": -4, "stock_cnt": 5845, "price": "20.92", "change": "9.99", "market_id": "33", "circulate_market_value": "21611205000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人装备"}, {"code": "603466", "name": "风语筑", "hot_rank": 88, "hot_rank_chg": -33, "stock_cnt": 5845, "price": "14.39", "change": "4.12", "market_id": "17", "circulate_market_value": "8559632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003021", "name": "兆威机电", "hot_rank": 89, "hot_rank_chg": -19, "stock_cnt": 5845, "price": "97.41", "change": "5.31", "market_id": "33", "circulate_market_value": "20281952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 90, "hot_rank_chg": -9, "stock_cnt": 5845, "price": "10.77", "change": "3.56", "market_id": "33", "circulate_market_value": "12218964600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.75}, {"name": "足球", "change_pct": 1.75}, {"name": "粤港澳大湾区", "change_pct": 0.89}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.22}, {"name": "传媒", "change_pct": 1.97}, {"name": "AIGC概念", "change_pct": 1.85}, {"name": "字节跳动概念股", "change_pct": 2.0}, {"name": "国企改革", "change_pct": 0.69}, {"name": "网红/MCN", "change_pct": 1.52}, {"name": "短剧/互动影游", "change_pct": 3.11}, {"name": "AI视频", "change_pct": 2.6}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 91, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "8.74", "change": "-9.80", "market_id": "17", "circulate_market_value": "2572200500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 2.14}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "中日韩自贸区", "change_pct": 0.07}, {"name": "新能源汽车", "change_pct": 2.4}, {"name": "振兴东北", "change_pct": 0.04}, {"name": "国企改革", "change_pct": 0.69}, {"name": "自贸区", "change_pct": 0.05}]}, {"code": "600206", "name": "有研新材", "hot_rank": 92, "hot_rank_chg": -10, "stock_cnt": 5845, "price": "36.37", "change": "1.91", "market_id": "17", "circulate_market_value": "30789145000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 93, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "104.57", "change": "5.41", "market_id": "33", "circulate_market_value": "201510940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 94, "hot_rank_chg": 13, "stock_cnt": 5845, "price": "9.58", "change": "-0.72", "market_id": "17", "circulate_market_value": "4145013600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.68}, {"name": "强势人气股", "change_pct": 2.02}, {"name": "光伏", "change_pct": 1.68}, {"name": "无线耳机", "change_pct": 3.17}, {"name": "华为产业链", "change_pct": 2.26}, {"name": "光伏胶膜", "change_pct": 1.12}]}, {"code": "003028", "name": "振邦智能", "hot_rank": 95, "hot_rank_chg": 39, "stock_cnt": 5845, "price": "25.91", "change": "10.02", "market_id": "33", "circulate_market_value": "1831672300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报"}, {"code": "002639", "name": "雪人集团", "hot_rank": 96, "hot_rank_chg": -25, "stock_cnt": 5845, "price": "13.94", "change": "-2.31", "market_id": "33", "circulate_market_value": "9202166100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 97, "hot_rank_chg": 29, "stock_cnt": 5845, "price": "29.40", "change": "-1.44", "market_id": "17", "circulate_market_value": "719365600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 98, "hot_rank_chg": 21, "stock_cnt": 5845, "price": "127.20", "change": "20.00", "market_id": "17", "circulate_market_value": "8893500000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA原料酶"}, {"code": "002434", "name": "万里扬", "hot_rank": 99, "hot_rank_chg": 32, "stock_cnt": 5845, "price": "6.79", "change": "6.26", "market_id": "33", "circulate_market_value": "8904005700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": 2.74}, {"name": "重卡", "change_pct": 1.72}, {"name": "汽车零部件", "change_pct": 3.34}, {"name": "新能源汽车", "change_pct": 2.4}, {"name": "机器人", "change_pct": 3.79}, {"name": "储能", "change_pct": 1.88}, {"name": "新能源车零部件", "change_pct": 3.39}, {"name": "虚拟电厂", "change_pct": 1.08}, {"name": "大农业", "change_pct": 0.53}, {"name": "减速器", "change_pct": 5.71}, {"name": "人形机器人", "change_pct": 4.83}]}, {"code": "000021", "name": "深科技", "hot_rank": 100, "hot_rank_chg": 61, "stock_cnt": 5845, "price": "28.62", "change": "3.25", "market_id": "33", "circulate_market_value": "45350873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "301261", "name": "恒工精密", "price": 62.89, "change_pct": 20.0, "reason": "公司连续铸铁及精密机加工件可应用于机器人减速器RV谐波核心部件，并设立恒工伟创具身智能科技公司布局人形机器人；第三季度净利润同比增长146.32%", "plates": ["业绩增长", "机器人"], "limit_up_days": 1, "turnover_ratio": 8.46, "first_limit_up": 1793152125, "break_limit_up_times": 0}, {"code": "605060", "name": "联德股份", "price": 32.16, "change_pct": 9.99, "reason": "公司燃气轮机零部件产品已向数据中心客户小批量供货", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 2.12, "first_limit_up": 1793157589, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 17.61, "change_pct": 9.99, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 5, "turnover_ratio": 10.38, "first_limit_up": 1793151135, "break_limit_up_times": 0}, {"code": "002708", "name": "光洋股份", "price": 18.94, "change_pct": 9.99, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 3.71, "first_limit_up": 1793151000, "break_limit_up_times": 0}, {"code": "003028", "name": "振邦智能", "price": 25.91, "change_pct": 10.02, "reason": "汽车智能控制器制造商；公司在家用机器人方向有布局，主要应用到清洁机器人和割草机等领域，均可用于家庭", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1793151075, "break_limit_up_times": 1}, {"code": "603633", "name": "徕木股份", "price": 6.36, "change_pct": 10.03, "reason": "公司与湖南大学合作的TSN时间敏感网络项目取得阶段性成果，技术将用于智能驾驶及机器人通信", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.14, "first_limit_up": 1793151502, "break_limit_up_times": 2}, {"code": "300613", "name": "富瀚微", "price": 72.48, "change_pct": 20.0, "reason": "公司是国内领先的视频处理芯片设计企业，专注于安防视频监控、汽车电子等领域，其自研的智能安防与物联网 SoC 芯片、车规级 ISP 芯片等产品；前三季度净利润同比增长845.02%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.79, "first_limit_up": 1793151159, "break_limit_up_times": 2}, {"code": "603303", "name": "得邦照明", "price": 29.76, "change_pct": 10.02, "reason": "公司主要从事绿色照明产品的研产销，已形成了节能灯、LED灯泡和LED室内应用灯具等四大类绿色照明产品", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.51, "first_limit_up": 1793164940, "break_limit_up_times": 4}, {"code": "600173", "name": "卧龙新能", "price": 5.45, "change_pct": 10.1, "reason": "公司持股44.9%的浙江龙能电力自主研发的光伏清扫机器人已于广西、安徽等地电站完成首批安装调试", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.07, "first_limit_up": 1793151269, "break_limit_up_times": 0}, {"code": "300006", "name": "莱美药业", "price": 9.92, "change_pct": 19.95, "reason": "四川大学华西医院联合恩施州中心医院把全球首个铁死亡诱导剂“纳米炭铁”的人体I期临床数据，发在了顶级期刊上，标志着我国在前沿抗癌疗法领域实现全球性首创突破，率先完成铁死亡抗癌理念的临床概念性验证；公司控股子公司四川瀛瑞医药是纳米炭铁混悬注射液的研发主体，纳米炭铁在公司原有纳米炭注射液基础上开发，依靠二价铁调控肿瘤铁死亡通路，本次华西医院发布的 I 期临床数据就是该药物，当前已经推进至联合放疗的 II 期临床试验，适应症针对晚期实体瘤，属于全球首个铁死亡诱导抗癌药物", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 26.23, "first_limit_up": 1793157711, "break_limit_up_times": 15}, {"code": "002889", "name": "东方嘉盛", "price": 15.44, "change_pct": 9.97, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务。\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务。", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.52, "first_limit_up": 1793165124, "break_limit_up_times": 0}, {"code": "605288", "name": "凯迪股份", "price": 65.4, "change_pct": 10.01, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.11, "first_limit_up": 1793152286, "break_limit_up_times": 0}, {"code": "002975", "name": "博杰股份", "price": 85.12, "change_pct": 10.0, "reason": "1、公司拿下鼎泰芯源控股权，鼎泰芯源由中科院半导体所Ⅲ-V族化合物半导体技术团队创立，目前的核心产品为磷化铟衬底，是国内少数几家掌握磷化铟衬底材料核心技术并实现国产化量产的企业；\n2、公司聚焦液冷服务器制造与检测环节，核心提供液冷板精密焊接设备、液冷系统密封性检测设备及自动化产线解决方案", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 7.51, "first_limit_up": 1793169117, "break_limit_up_times": 0}, {"code": "603037", "name": "凯众股份", "price": 13.06, "change_pct": 10.03, "reason": "公司已组建研发团队，探索聚氨酯材料技术在机器人领域的应用机会", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 11.0, "first_limit_up": 1793153649, "break_limit_up_times": 0}, {"code": "000559", "name": "万向钱潮", "price": 13.18, "change_pct": 10.02, "reason": "机器人业务为公司第三大战略业务板块，产品覆盖机器人全系列关节万向节、精密减速器及各类关节专用轴承等，已具备10万套滚柱丝杠、1000万套关节万向节产能，2026年计划建成机器人专用轴承产能120万套，海外重点推进泰国生产基地建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.21, "first_limit_up": 1793151879, "break_limit_up_times": 0}, {"code": "002534", "name": "西子洁能", "price": 15.4, "change_pct": 10.0, "reason": "1、公司熔盐储能可应用于数据中心，通过移峰填谷及储热温控实现“电—热—算”协同，并推进算力中心储能模式创新\n2、公司及子公司以承接太阳能光伏总承包项目为主，部分分布式光伏项目自持；公司在熔盐储能、电化学储能等领域有深厚技术积累和众多专利，参与建设多个储能项目，为火电厂灵活性调峰、电网侧储能调峰、用户侧储能等提供设备及解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1793168823, "break_limit_up_times": 0}, {"code": "603680", "name": "今创集团", "price": 11.33, "change_pct": 10.0, "reason": "国内轨交车辆配套产品领域龙头，新设常州今创航空航天产业投资有限公司，拟布局商业航天产业链，目前处于筹备初期", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1793164968, "break_limit_up_times": 7}, {"code": "002636", "name": "金安国纪", "price": 58.59, "change_pct": 10.01, "reason": "国内覆铜板龙头，同时生产电子级玻纤布，第三季净利暴增超1000%", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1793150700, "break_limit_up_times": 1}, {"code": "603992", "name": "松霖科技", "price": 22.67, "change_pct": 10.0, "reason": "公司以松霖机器人科技有限公司为平台，构建护理服务机器人、后勤服务机器人、AI陪伴机器人、人形机器人等产品体系，并与达闼公司联合研发设计人形机器人，拓展机器人业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.94, "first_limit_up": 1793153113, "break_limit_up_times": 0}, {"code": "301359", "name": "东南电子", "price": 19.08, "change_pct": 20.0, "reason": "公司主营微动开关产品的研产销，可应用于家用电器、汽车（含新能源汽车）、充电枪、充电桩等领域；第三季度净利润同比增长100.18%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1793151135, "break_limit_up_times": 1}, {"code": "002915", "name": "中欣氟材", "price": 16.02, "change_pct": 10.03, "reason": "国内氟化工精细化学品行业龙头；拥有基础配套原料萤石、氢氟酸、氟制冷剂、含氟精细化学品等在内的完整的氟化工产业链", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 4.02, "first_limit_up": 1793154168, "break_limit_up_times": 1}, {"code": "002265", "name": "建设工业", "price": 20.92, "change_pct": 9.99, "reason": "中国兵器装备集团旗下，国内领先的轻型武器装备研发制造企业", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1793153373, "break_limit_up_times": 3}, {"code": "603533", "name": "掌阅科技", "price": 28.03, "change_pct": 10.01, "reason": "1、字节跳动参股，数字阅读行业龙头；公司已接入国内AI创业公司月之暗面旗下AI对话助手产品Kimi；\n2、公司推出海外短剧平台iDrama，现已上线数千部短剧作品，英语、日语、韩语、西班牙语、葡萄牙语等多语种版本", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 11.52, "first_limit_up": 1793155779, "break_limit_up_times": 0}, {"code": "603926", "name": "铁流股份", "price": 17.06, "change_pct": 9.99, "reason": "公司空心电机轴处在客户产品开发阶段，子公司广东中配互联网科技公司在云计算、BI分析、智能机器人等方面已进行投入", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.15, "first_limit_up": 1793156527, "break_limit_up_times": 1}, {"code": "002526", "name": "山东矿机", "price": 2.98, "change_pct": 9.96, "reason": "公司目前构建了“煤机整机+核心配件+智能输送+智能控制”业务格局；第三季度净利润同比增长55.05%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.24, "first_limit_up": 1793151234, "break_limit_up_times": 0}, {"code": "301525", "name": "儒竞科技", "price": 47.53, "change_pct": 19.99, "reason": "公司专注于提供具备变频节能与智能控制特点的综合产品的应用解决方案，已与行业头部客户开展机器人业务联合研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.88, "first_limit_up": 1793163669, "break_limit_up_times": 23}, {"code": "603612", "name": "索通发展", "price": 15.88, "change_pct": 9.97, "reason": "控股子公司欣源股份主营业务为锂离子电池负极材料产品等的研产销；第三季度净利润同比增长91.93%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.36, "first_limit_up": 1793151017, "break_limit_up_times": 3}, {"code": "688137", "name": "近岸蛋白", "price": 127.2, "change_pct": 20.0, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.5, "first_limit_up": 1793164451, "break_limit_up_times": 3}, {"code": "301080", "name": "百普赛斯", "price": 101.24, "change_pct": 20.0, "reason": "公司专业提供重组蛋白等关键生物试剂产品及技术服务，应用于肿瘤、自身免疫疾病、心血管病、传染病等疾病的药物早期发现及验证、药物筛选及优化等环节；第三季度净利润同比增长30.04%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 12.94, "first_limit_up": 1793164350, "break_limit_up_times": 0}, {"code": "002943", "name": "宇晶股份", "price": 25.11, "change_pct": 9.99, "reason": "公司6-8英寸碳化硅切磨抛设备已批量销售，系碳化硅衬底加工核心供应商，并推进12英寸硅片切割设备研发", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.64, "first_limit_up": 1793163798, "break_limit_up_times": 0}, {"code": "002962", "name": "五方光电", "price": 12.83, "change_pct": 10.03, "reason": "公司表示拓展TGV技术在光学领域的应用，第三季度净利润同比增长160.42%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.74, "first_limit_up": 1793157885, "break_limit_up_times": 0}, {"code": "603135", "name": "中重科技", "price": 8.64, "change_pct": 10.06, "reason": "公司主要产品为智能装备及生产线，产线中包含了智能打包机器人、智能标识机器人、拆辊机器人、码垛机器人等机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.03, "first_limit_up": 1793163698, "break_limit_up_times": 1}, {"code": "603868", "name": "飞科电器", "price": 34.22, "change_pct": 10.0, "reason": "国内剃须刀龙头，新产品有新加湿器和空气净化器；第三季度净利润同比增长26.9%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.65, "first_limit_up": 1793151454, "break_limit_up_times": 0}, {"code": "300806", "name": "斯迪克", "price": 43.92, "change_pct": 20.0, "reason": "公司生产的感光干膜主要应用于PCB制造过程中电路设计的图形转移", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.72, "first_limit_up": 1793169129, "break_limit_up_times": 0}, {"code": "002879", "name": "长缆科技", "price": 14.95, "change_pct": 10.01, "reason": "1、公司材料、箱柜、连接器、机电等产品已导入商业航天并实现导入；\n2、国内电缆附件领域的重要企业；公司产品覆盖高压超高压、中低压电缆附件等多个板块；\n3、公司核电产品已应用于大型核电工程项目建设，如秦山核电站、大亚湾核电站、岭澳核电站二期等", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.27, "first_limit_up": 1793165046, "break_limit_up_times": 0}, {"code": "600078", "name": "澄星股份", "price": 9.42, "change_pct": 10.05, "reason": "1、国内磷酸龙头，第三季度净利润同比增长1472%；\n2、全固态电池关键原料五硫化二磷需由超纯黄磷+硫磺合成，1GW固态电池需450吨黄磷（135吨超纯黄磷），用量为硫化锂的150%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.81, "first_limit_up": 1793151093, "break_limit_up_times": 4}, {"code": "001400", "name": "江顺科技", "price": 88.31, "change_pct": 10.0, "reason": "1、公司的相关模具产品可以用于航空航天方向，参股20%公司昆山汇云在低空领域还在初期探索阶段；\n2、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 19.99, "first_limit_up": 1793156739, "break_limit_up_times": 1}, {"code": "002862", "name": "实丰文化", "price": 15.38, "change_pct": 10.01, "reason": "公司表示将根据疯狂动物城IP的独特属性、目标受众需求及市场趋势，开发合适的IP潮流产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.29, "first_limit_up": 1793156958, "break_limit_up_times": 0}, {"code": "000670", "name": "盈方微", "price": 7.08, "change_pct": 9.94, "reason": "公司依托2024年底取得的长江存储代理权，2025年存储芯片及综合类芯片分销收入同比增16.17%，成为分销业务核心驱动力；第三季度净利润同比增206.33%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.18, "first_limit_up": 1793151435, "break_limit_up_times": 3}, {"code": "688045", "name": "必易微", "price": 55.87, "change_pct": 20.0, "reason": "公司主营电源管理芯片和电机驱动控制芯片，拟2.95亿元收购兴感半导体100%股权，标的是高性能传感器芯片设计公司，以电流传感器为核心，产品应用于光伏逆变器、储能系统等场景", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.67, "first_limit_up": 1793156660, "break_limit_up_times": 2}, {"code": "600601", "name": "方正科技", "price": 10.32, "change_pct": 10.02, "reason": "公司PCB业务产品主要包括高密度互连板、多层板、系统板、大型背板、金手指板和车载板等，在服务存储和光模块领域均有应用，华为是公司PCB业务的主要客户之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.35, "first_limit_up": 1793152102, "break_limit_up_times": 1}, {"code": "001296", "name": "长江材料", "price": 20.23, "change_pct": 10.01, "reason": "公司生产的3D打印砂应用于3D打印砂型铸造，采购公司3D打印砂的客户中有航天领域的供应商", "plates": ["3D打印"], "limit_up_days": 1, "turnover_ratio": 8.33, "first_limit_up": 1793157762, "break_limit_up_times": 0}, {"code": "600828", "name": "茂业商业", "price": 4.92, "change_pct": 10.07, "reason": "呼和浩特零售市场龙头，旗下深圳地区的所有门店和成都地区的人东店、光华店为离境退税店", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 6.51, "first_limit_up": 1793152608, "break_limit_up_times": 1}, {"code": "002816", "name": "*ST和科", "price": 17.94, "change_pct": 9.99, "reason": "公司25年业绩同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1793157567, "break_limit_up_times": 0}, {"code": "002741", "name": "光华科技", "price": 20.25, "change_pct": 9.99, "reason": "1、国内PCB化学品的领先厂商；公司主要产品包括PCB化学品，PCB化学品的功能主要应用于集成电路互连技术；\n2、消息称公司在硫化锂的生产上选择了固态和固相合成的干法路线，已在下游固态电池客户中处于领先地位", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.9, "first_limit_up": 1793152110, "break_limit_up_times": 1}, {"code": "603061", "name": "金海通", "price": 260.15, "change_pct": 10.0, "reason": "公司主营半导体芯片测试设备，深耕集成电路测试分选机领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.31, "first_limit_up": 1793164426, "break_limit_up_times": 0}, {"code": "000554", "name": "泰山石油", "price": 6.63, "change_pct": 9.95, "reason": "公司从事成品油批发零售业务，是山东省泰安市成品油最大经销商，控股股东为中国石化；第三季度净利润同比增长62.33%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 15.18, "first_limit_up": 1793155470, "break_limit_up_times": 10}, {"code": "600715", "name": "文投控股", "price": 2.06, "change_pct": 10.16, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 7.96, "first_limit_up": 1793155973, "break_limit_up_times": 0}, {"code": "301488", "name": "豪恩汽电", "price": 97.87, "change_pct": 20.0, "reason": "1、公司正在积极关注并研发L3级别的自动驾驶产品；\n2、公司机器人产品已覆盖感知端超声波雷达、视觉系统与决策端基于英伟达Jetson系列芯片的高算力域控", "plates": ["无人驾驶"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1793151000, "break_limit_up_times": 1}, {"code": "603626", "name": "科森科技", "price": 27.83, "change_pct": 10.0, "reason": "1、公司为某品牌家用机器人提供相关结构件；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.23, "first_limit_up": 1793152039, "break_limit_up_times": 2}, {"code": "603920", "name": "世运电路", "price": 37.85, "change_pct": 10.0, "reason": "特斯拉汽车、人形机器人PCB供货商，产品包括高精密互连HDI，软板（FPC）等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.64, "first_limit_up": 1793154863, "break_limit_up_times": 4}, {"code": "603131", "name": "上海沪工", "price": 14.5, "change_pct": 10.02, "reason": "公司的航天业务板块由两部分构成，华宇科技为航天装备制造平台、沪航卫星科技为卫星业务平台；公司具备专业的商业卫星AIT生产能力，可同时在线装配多颗50KG以下的商业卫星；一季度净利润同比增长39.52%", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.14, "first_limit_up": 1793156642, "break_limit_up_times": 1}, {"code": "603337", "name": "杰克科技", "price": 48.83, "change_pct": 10.0, "reason": "公司为工业缝制机龙头，计划于近期正式发布上市人形机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.21, "first_limit_up": 1793153928, "break_limit_up_times": 3}, {"code": "002696", "name": "百洋股份", "price": 11.77, "change_pct": 10.0, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 33.65, "first_limit_up": 1793170173, "break_limit_up_times": 0}, {"code": "603226", "name": "菲林格尔", "price": 24.26, "change_pct": 10.02, "reason": "公司主要产品包括强化复合地板、多层实木复合地板、三层实木地板、纯实木地板以及全屋定制家居", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1793155033, "break_limit_up_times": 0}, {"code": "300291", "name": "百纳千成", "price": 6.24, "change_pct": 20.0, "reason": " “内容 + 实业” 双向赋能的 IP 全产业链运营商；公司主要从事多格式影视业务、文旅业务、营销业务及IP运营业务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 18.86, "first_limit_up": 1793166318, "break_limit_up_times": 6}, {"code": "001219", "name": "青岛食品", "price": 16.48, "change_pct": 10.01, "reason": "公司主要从事饼干与花生酱等休闲食品的研产销，第三季度净利润同比增长31.17%", "plates": ["大消费", "业绩增长"], "limit_up_days": 3, "turnover_ratio": 1.76, "first_limit_up": 1793150700, "break_limit_up_times": 0}, {"code": "603667", "name": "五洲新春", "price": 49.98, "change_pct": 9.99, "reason": "公司在机器人减速器轴承领域研发成功RV减速器轴承和谐波减速器柔性轴承，其中RV减速器轴承和谐波减速器轴承分别为国内知名机器人减速器企业南高齿、来福谐波等客户送样；第三季度净利润同比增长3875.18%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.72, "first_limit_up": 1793151234, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 4.88, "change_pct": 9.91, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 22.01, "first_limit_up": 1793165370, "break_limit_up_times": 1}, {"code": "605366", "name": "宏柏新材", "price": 7.74, "change_pct": 9.94, "reason": "1、公司重点布局2万吨光纤级高纯四氯化硅和5000吨电子级正硅酸乙酯项目，以满足AI算力及半导体产业需求，具备高纯硅烷产品的生产工艺技术，能较快实现量产落地；\n2、国内功能性硅烷行业龙头企业；公司具备完整的“硅块-三氯氢硅-中间体-功能性硅烷-气相白炭黑”绿色循环产业链，相关产品和技术适用于液体硅胶", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.98, "first_limit_up": 1793156275, "break_limit_up_times": 0}, {"code": "605566", "name": "福莱蒽特", "price": 28.6, "change_pct": 10.0, "reason": "1、公司拟出资300万元与钛深科技共设双曲线智能机器人公司，持股30%，切入机器人皮肤及柔性触觉传感赛道；\n2、控股子公司福莱蒽特新能源产品包括POE、EVA太阳能电池封装胶膜；\n3、公司主营业务为分散染料及其滤饼的研产销，主要产品为分散染料，用于涤纶及其混纺织物的染色", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1793154599, "break_limit_up_times": 0}, {"code": "001270", "name": "铖昌科技", "price": 80, "change_pct": 10.0, "reason": "公司主营微波毫米波模拟相控阵T/R芯片", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1793165223, "break_limit_up_times": 9}, {"code": "603219", "name": "富佳股份", "price": 13.21, "change_pct": 9.99, "reason": "公司为乐聚机器人硬件供应商；第三季度净利润同比上升16.9%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.75, "first_limit_up": 1793152177, "break_limit_up_times": 0}, {"code": "002164", "name": "宁波东力", "price": 16.9, "change_pct": 10.03, "reason": "公司重点布局谐波减速器与精密行星减速器，相关产品已实现批量试样及供货，配套业务进入产业化落地推进阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1793151099, "break_limit_up_times": 0}, {"code": "603081", "name": "大丰实业", "price": 11.31, "change_pct": 10.02, "reason": "公司与上海智元新创签订《战略合作协议》，共同探索相关产品在文娱旅体商场景的创新应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1793151257, "break_limit_up_times": 2}, {"code": "601956", "name": "东贝集团", "price": 6.09, "change_pct": 9.93, "reason": "公司在洗衣机电机、空调电机、机器人关节电机等领域均有相关技术研发储备，人形机器人关节电机目前还处于研发测试阶段", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 5.3, "first_limit_up": 1793151016, "break_limit_up_times": 0}, {"code": "603418", "name": "友升股份", "price": 44.99, "change_pct": 10.0, "reason": "公司积极推动具身智能业务落地，以智能割草机器人为首发载体推进相关业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1793158025, "break_limit_up_times": 1}, {"code": "603006", "name": "联明股份", "price": 10.74, "change_pct": 10.04, "reason": "公司通过尚成一号产业基金(持股0.71%)间接投资逐际动力，后者为具身智能机器人初创公司，战略投资者包括阿里巴巴；第三季度净利润同比增长97.50%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1793151001, "break_limit_up_times": 0}, {"code": "603109", "name": "神驰机电", "price": 17.93, "change_pct": 10.0, "reason": "公司拥有多种功率段的柴油发电机组，可应用于数据中心", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.28, "first_limit_up": 1793151328, "break_limit_up_times": 7}, {"code": "603897", "name": "长城科技", "price": 26.43, "change_pct": 9.99, "reason": "公司是国内电磁线种类最齐全的企业之一，主营业务为电磁线的研发产销；第三季度净利润同比增长52.38%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1793151005, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};