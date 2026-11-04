const UPDATE_TIME = "2026-11-04 20:13";
const THS_HOT = [
  {
    "name": "光伏概念",
    "rise": 4.08,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "光伏龙头ETF",
    "code": "885531"
  },
  {
    "name": "存储芯片",
    "rise": 9.24,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续276天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": 2.89,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续153天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": 2.6,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续81天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "人形机器人",
    "rise": 4.78,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "黄金概念",
    "rise": 4.51,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "短剧游戏",
    "rise": 2.75,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "商业航天",
    "rise": 4.09,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续252天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 7.54,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续323天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "国家大基金持股",
    "rise": 10.74,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "PCB概念",
    "rise": 6.41,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续146天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人工智能",
    "rise": 3.03,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 1,
    "etfName": "人工智能ETF",
    "code": "885728"
  },
  {
    "name": "机器人概念",
    "rise": 3.59,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": -2,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": 6.23,
    "rate": 0,
    "tag": "47家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "储能",
    "rise": 3.32,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885921"
  },
  {
    "name": "固态电池",
    "rise": 3.96,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "先进封装",
    "rise": 8.32,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "集成电路ETF",
    "code": "886009"
  },
  {
    "name": "AI视频",
    "rise": 3.45,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "科创次新股",
    "rise": 11.43,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创综指ETF",
    "code": "885907"
  },
  {
    "name": "CRO概念",
    "rise": 5.16,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  }
];
const THS_EVENTS = [
  {
    "title": "本土需求牵引产业链协同 科创板半导体产业逐步走出“独立叙事”",
    "desc": "",
    "heat": 1529603,
    "direction": "半导体",
    "themes": [
      "半导体",
      "存储芯片",
      "第三代半导体",
      "汽车芯片",
      "中芯国际概念"
    ],
    "stocks": [
      {
        "name": "京仪装备",
        "code": "688652",
        "chg": 20.00255
      }
    ]
  },
  {
    "title": "产业资本多方下注，快手系3D芯片公司完成10亿元B轮融资",
    "desc": "",
    "heat": 1090735,
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
        "name": "光智科技",
        "code": "300489",
        "chg": 20.002522
      }
    ]
  },
  {
    "title": "中信建投：CPO/NPO驱动FAU量价双升 厂商受益传统光模块需求扩容与下一代CPO/NPO架构",
    "desc": "",
    "heat": 958618,
    "direction": "光模块/CPO",
    "themes": [
      "光芯片",
      "光器件",
      "光模块",
      "光模块设备",
      "CPO封装"
    ],
    "stocks": [
      {
        "name": "蘅东光",
        "code": "920045",
        "chg": 21.797005
      }
    ]
  },
  {
    "title": "美国中期选举进行中，影响白银程度或甚于黄金",
    "desc": "",
    "heat": 663870,
    "direction": "贵金属",
    "themes": [
      "贵金属",
      "黄金概念",
      "白银"
    ],
    "stocks": [
      {
        "name": "晓程科技",
        "code": "300139",
        "chg": 19.993723
      }
    ]
  },
  {
    "title": "外交部回应“英伟达要求其合作伙伴必须将至少51％的服务提供给非中国企业”有关报道",
    "desc": "",
    "heat": 653096,
    "direction": "数据中心",
    "themes": [
      "数据中心(AIDC)"
    ],
    "stocks": [
      {
        "name": "蘅东光",
        "code": "920045",
        "chg": 21.797005
      }
    ]
  },
  {
    "title": "中国商业航天迎来首个星座出海 首批规模达20颗卫星",
    "desc": "",
    "heat": 486286,
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
        "name": "索辰科技",
        "code": "688507",
        "chg": 20.002804
      }
    ]
  },
  {
    "title": "红果免费短剧用户量超越豆包，成为抖音集团第二大应用",
    "desc": "",
    "heat": 315830,
    "direction": "AI短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "短剧游戏"
    ],
    "stocks": [
      {
        "name": "华智数媒",
        "code": "300426",
        "chg": 15.0
      }
    ]
  },
  {
    "title": "广东出台37条措施扩大消费 培育壮大消费新业态新模式新场景",
    "desc": "",
    "heat": 158030,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "白酒概念",
      "啤酒概念",
      "乳业"
    ],
    "stocks": [
      {
        "name": "石药创新",
        "code": "300765",
        "chg": 16.246216
      }
    ]
  },
  {
    "title": "国务院金融工作报告：进一步加快自主可控的人民币跨境支付体系建设和发展",
    "desc": "",
    "heat": 144531,
    "direction": "跨境支付（CIPS）",
    "themes": [
      "跨境支付(CIPS)"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 9.682029
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "高带宽存储器HBM",
    "change": "+12.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+10.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+10.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+10.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+10.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+9.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+9.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+9.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+9.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+9.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+9.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+8.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+8.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+8.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+8.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+8.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+8.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+8.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高价股",
    "change": "+8.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+8.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 1,
    "hot_rank_chg": 8,
    "stock_cnt": 5878,
    "price": "9.46",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5677104200.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.8
      },
      {
        "name": "边缘计算",
        "change_pct": 4.04
      },
      {
        "name": "核电",
        "change_pct": 3.01
      },
      {
        "name": "海工装备",
        "change_pct": 2.38
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "云计算数据中心",
        "change_pct": 4.43
      },
      {
        "name": "冷链",
        "change_pct": 1.86
      },
      {
        "name": "地热",
        "change_pct": 3.69
      },
      {
        "name": "储能",
        "change_pct": 3.38
      },
      {
        "name": "碳中和",
        "change_pct": 1.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.73
      },
      {
        "name": "汽车热管理",
        "change_pct": 3.64
      },
      {
        "name": "热泵",
        "change_pct": 3.17
      },
      {
        "name": "液冷服务器",
        "change_pct": 5.37
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.58
      },
      {
        "name": "海洋经济",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 3,
    "hot_rank_chg": 49,
    "stock_cnt": 5878,
    "price": "4.30",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "11405967500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "装修装饰",
        "change_pct": 2.1
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.37
      },
      {
        "name": "破净股",
        "change_pct": 0.5
      },
      {
        "name": "航天",
        "change_pct": 4.46
      },
      {
        "name": "旧改",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 4,
    "hot_rank_chg": 2,
    "stock_cnt": 5878,
    "price": "3.28",
    "change": "-4.09",
    "market_id": "33",
    "circulate_market_value": "5185585800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 2.27
      },
      {
        "name": "体外诊断",
        "change_pct": 1.87
      },
      {
        "name": "医疗器械",
        "change_pct": 2.07
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "基因测序",
        "change_pct": 2.15
      },
      {
        "name": "预制菜",
        "change_pct": -0.4
      },
      {
        "name": "水产养殖",
        "change_pct": -2.25
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.03
      },
      {
        "name": "海洋经济",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 10,
    "hot_rank_chg": -5,
    "stock_cnt": 5878,
    "price": "9.30",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "6188275400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "纺织服装",
        "change_pct": 0.47
      },
      {
        "name": "破净股",
        "change_pct": 0.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 13,
    "hot_rank_chg": 55,
    "stock_cnt": 5878,
    "price": "4.20",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "4874278300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "纺织服装",
        "change_pct": 0.47
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.37
      },
      {
        "name": "影视",
        "change_pct": 2.77
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.05
      }
    ]
  },
  {
    "code": "002652",
    "name": "扬子新材",
    "hot_rank": 14,
    "hot_rank_chg": 163,
    "stock_cnt": 5878,
    "price": "4.59",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "2350373800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "高洁净板",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "装修装饰",
        "change_pct": 2.1
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 17,
    "hot_rank_chg": -3,
    "stock_cnt": 5878,
    "price": "4.46",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "5954336200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "LED",
        "change_pct": 3.18
      },
      {
        "name": "卫星互联网",
        "change_pct": 4.07
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 19,
    "hot_rank_chg": 190,
    "stock_cnt": 5878,
    "price": "4.14",
    "change": "10.11",
    "market_id": "33",
    "circulate_market_value": "3565213000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 2.92
      },
      {
        "name": "一带一路",
        "change_pct": 1.83
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.2
      },
      {
        "name": "光伏",
        "change_pct": 4.43
      },
      {
        "name": "有色金属",
        "change_pct": 4.08
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.58
      },
      {
        "name": "新能源车零部件",
        "change_pct": 3.6
      },
      {
        "name": "自贸区",
        "change_pct": 0.7
      },
      {
        "name": "液冷服务器",
        "change_pct": 5.37
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 26,
    "hot_rank_chg": -6,
    "stock_cnt": 5878,
    "price": "2.47",
    "change": "0.41",
    "market_id": "17",
    "circulate_market_value": "7070059400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.37
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "影视",
        "change_pct": 2.77
      },
      {
        "name": "低价股",
        "change_pct": 0.94
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.05
      },
      {
        "name": "AI视频",
        "change_pct": 3.42
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 27,
    "hot_rank_chg": 1,
    "stock_cnt": 5878,
    "price": "11.66",
    "change": "-8.62",
    "market_id": "33",
    "circulate_market_value": "6605136800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "石墨烯",
        "change_pct": 3.61
      },
      {
        "name": "军民融合",
        "change_pct": 3.28
      },
      {
        "name": "物联网",
        "change_pct": 3.24
      },
      {
        "name": "LED",
        "change_pct": 3.18
      },
      {
        "name": "军工",
        "change_pct": 3.14
      },
      {
        "name": "智慧灯杆",
        "change_pct": 2.48
      },
      {
        "name": "海洋经济",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 28,
    "hot_rank_chg": 43,
    "stock_cnt": 5878,
    "price": "5.29",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "2958800300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.37
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.2
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "影视",
        "change_pct": 2.77
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.05
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 29,
    "hot_rank_chg": -5,
    "stock_cnt": 5878,
    "price": "6.12",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "4682661300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.18
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.7
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "医药商业",
        "change_pct": -0.07
      },
      {
        "name": "保健品",
        "change_pct": 1.37
      },
      {
        "name": "民营医院",
        "change_pct": 0.87
      },
      {
        "name": "医药",
        "change_pct": 2.79
      },
      {
        "name": "食品",
        "change_pct": 0.16
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.03
      },
      {
        "name": "口腔",
        "change_pct": 1.14
      },
      {
        "name": "医美",
        "change_pct": 0.24
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.03
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 36,
    "hot_rank_chg": -3,
    "stock_cnt": 5878,
    "price": "12.13",
    "change": "-1.46",
    "market_id": "17",
    "circulate_market_value": "12674489600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 4.15
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 2.16
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 37,
    "hot_rank_chg": -1,
    "stock_cnt": 5878,
    "price": "10.50",
    "change": "3.96",
    "market_id": "17",
    "circulate_market_value": "6738723800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.49
      },
      {
        "name": "农业种植",
        "change_pct": 1.78
      },
      {
        "name": "湖南国企改革",
        "change_pct": 2.3
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.58
      },
      {
        "name": "休闲食品",
        "change_pct": -0.58
      },
      {
        "name": "食品",
        "change_pct": 0.16
      },
      {
        "name": "食品安全",
        "change_pct": 1.5
      },
      {
        "name": "社区团购",
        "change_pct": 0.05
      },
      {
        "name": "大农业",
        "change_pct": 0.75
      },
      {
        "name": "预制菜",
        "change_pct": -0.4
      },
      {
        "name": "人造肉",
        "change_pct": 1.81
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 39,
    "hot_rank_chg": 163,
    "stock_cnt": 5878,
    "price": "7.60",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "17650815000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "白银",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 10.22
      },
      {
        "name": "有色 · 铜",
        "change_pct": 5.39
      },
      {
        "name": "有色 · 锑",
        "change_pct": 7.2
      },
      {
        "name": "湖南国企改革",
        "change_pct": 2.3
      },
      {
        "name": "有色 · 锌",
        "change_pct": 5.73
      },
      {
        "name": "有色金属",
        "change_pct": 4.08
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "白银",
        "change_pct": 8.5
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 44,
    "hot_rank_chg": 68,
    "stock_cnt": 5878,
    "price": "12.00",
    "change": "2.04",
    "market_id": "17",
    "circulate_market_value": "90936747000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.6
      },
      {
        "name": "光伏",
        "change_pct": 4.43
      },
      {
        "name": "白马股",
        "change_pct": 1.0
      },
      {
        "name": "碳中和",
        "change_pct": 1.54
      },
      {
        "name": "颗粒硅",
        "change_pct": 2.23
      },
      {
        "name": "BIPV概念",
        "change_pct": 2.22
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 5.27
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 6.76
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 48,
    "hot_rank_chg": 9,
    "stock_cnt": 5878,
    "price": "11.12",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "3716959200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.09
      },
      {
        "name": "饲料",
        "change_pct": 0.17
      },
      {
        "name": "一带一路",
        "change_pct": 1.83
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "保健品",
        "change_pct": 1.37
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.72
      },
      {
        "name": "污水处理",
        "change_pct": 1.93
      },
      {
        "name": "环保",
        "change_pct": 2.23
      },
      {
        "name": "食品",
        "change_pct": 0.16
      },
      {
        "name": "预制菜",
        "change_pct": -0.4
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "水产养殖",
        "change_pct": -2.25
      },
      {
        "name": "广西概念",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 51,
    "hot_rank_chg": -16,
    "stock_cnt": 5878,
    "price": "8.19",
    "change": "6.64",
    "market_id": "33",
    "circulate_market_value": "13325079100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.24
      },
      {
        "name": "电竞",
        "change_pct": 1.94
      },
      {
        "name": "手游",
        "change_pct": 2.37
      },
      {
        "name": "人工智能",
        "change_pct": 3.28
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.07
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "传媒",
        "change_pct": 2.16
      },
      {
        "name": "快手概念股",
        "change_pct": 3.06
      },
      {
        "name": "元宇宙",
        "change_pct": 2.74
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.68
      },
      {
        "name": "东数西算/算力",
        "change_pct": 3.48
      },
      {
        "name": "web3.0",
        "change_pct": 2.4
      },
      {
        "name": "AIGC概念",
        "change_pct": 3.22
      },
      {
        "name": "数据要素",
        "change_pct": 2.31
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.03
      },
      {
        "name": "AI营销",
        "change_pct": 3.35
      },
      {
        "name": "ChatGPT",
        "change_pct": 3.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 6.2
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 2.58
      },
      {
        "name": "人形机器人",
        "change_pct": 5.09
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.05
      },
      {
        "name": "多模态",
        "change_pct": 3.55
      },
      {
        "name": "AI视频",
        "change_pct": 3.42
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.91
      },
      {
        "name": "小红书概念股",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 53,
    "hot_rank_chg": -2,
    "stock_cnt": 5878,
    "price": "11.30",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "4529966400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.5
      },
      {
        "name": "新零售",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "物业管理",
        "change_pct": 0.6
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "地摊经济",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 55,
    "hot_rank_chg": -5,
    "stock_cnt": 5878,
    "price": "4.63",
    "change": "5.23",
    "market_id": "33",
    "circulate_market_value": "163749830000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 3.09
      },
      {
        "name": "折叠屏",
        "change_pct": 6.42
      },
      {
        "name": "手机产业链",
        "change_pct": 6.06
      },
      {
        "name": "超高清视频",
        "change_pct": 3.92
      },
      {
        "name": "苹果产业链",
        "change_pct": 6.69
      },
      {
        "name": "电竞",
        "change_pct": 1.94
      },
      {
        "name": "半导体",
        "change_pct": 9.2
      },
      {
        "name": "人工智能",
        "change_pct": 3.28
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.28
      },
      {
        "name": "VR&AR",
        "change_pct": 4.58
      },
      {
        "name": "OLED",
        "change_pct": 6.74
      },
      {
        "name": "京津冀",
        "change_pct": 1.69
      },
      {
        "name": "物联网",
        "change_pct": 3.24
      },
      {
        "name": "指纹识别",
        "change_pct": 5.9
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.86
      },
      {
        "name": "白马股",
        "change_pct": 1.0
      },
      {
        "name": "智能制造",
        "change_pct": 3.88
      },
      {
        "name": "小米概念股",
        "change_pct": 5.68
      },
      {
        "name": "国产芯片",
        "change_pct": 7.83
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 5.93
      },
      {
        "name": "全息概念",
        "change_pct": 2.8
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.23
      },
      {
        "name": "MicroLED",
        "change_pct": 5.84
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 5.27
      },
      {
        "name": "智能手表",
        "change_pct": 6.42
      },
      {
        "name": "MiniLED",
        "change_pct": 5.18
      },
      {
        "name": "传感器",
        "change_pct": 5.49
      },
      {
        "name": "大硅片",
        "change_pct": 10.46
      },
      {
        "name": "AI PC",
        "change_pct": 5.7
      },
      {
        "name": "华为产业链",
        "change_pct": 3.85
      },
      {
        "name": "回购",
        "change_pct": 5.02
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 8.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 6.2
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 7.56
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 56,
    "hot_rank_chg": 17,
    "stock_cnt": 5878,
    "price": "8.93",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "9465399700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "太空算力",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 3.09
      },
      {
        "name": "电子烟",
        "change_pct": 4.58
      },
      {
        "name": "一带一路",
        "change_pct": 1.83
      },
      {
        "name": "造纸",
        "change_pct": 0.83
      },
      {
        "name": "包装印刷",
        "change_pct": 2.1
      },
      {
        "name": "卫星互联网",
        "change_pct": 4.07
      },
      {
        "name": "太空算力",
        "change_pct": 5.42
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 57,
    "hot_rank_chg": 108,
    "stock_cnt": 5878,
    "price": "9.16",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4634636000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "陶瓷纤维",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 4.2
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "大气治理",
        "change_pct": 3.2
      },
      {
        "name": "雄安新区",
        "change_pct": 1.69
      },
      {
        "name": "耐火材料",
        "change_pct": 3.56
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.58
      },
      {
        "name": "环保",
        "change_pct": 2.23
      },
      {
        "name": "船舶",
        "change_pct": 2.3
      },
      {
        "name": "建筑节能",
        "change_pct": 1.95
      },
      {
        "name": "气凝胶",
        "change_pct": 2.21
      },
      {
        "name": "旧改",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 60,
    "hot_rank_chg": 198,
    "stock_cnt": 5878,
    "price": "5.51",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "2789291500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "锂电材料",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 7.63
      },
      {
        "name": "资产重组",
        "change_pct": 4.15
      },
      {
        "name": "仪器仪表",
        "change_pct": 4.97
      },
      {
        "name": "锂电池",
        "change_pct": 4.2
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.2
      },
      {
        "name": "有机硅",
        "change_pct": 3.83
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.58
      },
      {
        "name": "华为产业链",
        "change_pct": 3.85
      },
      {
        "name": "供应链金融",
        "change_pct": 1.38
      },
      {
        "name": "服务器",
        "change_pct": 5.59
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 64,
    "hot_rank_chg": 47,
    "stock_cnt": 5878,
    "price": "5.74",
    "change": "4.75",
    "market_id": "17",
    "circulate_market_value": "14456247000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.24
      },
      {
        "name": "工业大麻",
        "change_pct": 3.09
      },
      {
        "name": "中药",
        "change_pct": 1.18
      },
      {
        "name": "保健品",
        "change_pct": 1.37
      },
      {
        "name": "民营医院",
        "change_pct": 0.87
      },
      {
        "name": "医药",
        "change_pct": 2.79
      },
      {
        "name": "化学原料药",
        "change_pct": 2.84
      },
      {
        "name": "流感",
        "change_pct": 2.0
      },
      {
        "name": "振兴东北",
        "change_pct": 1.26
      },
      {
        "name": "食品",
        "change_pct": 0.16
      },
      {
        "name": "肝炎概念",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 65,
    "hot_rank_chg": 14,
    "stock_cnt": 5878,
    "price": "8.08",
    "change": "-2.65",
    "market_id": "33",
    "circulate_market_value": "3827336700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.37
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "VR&AR",
        "change_pct": 4.58
      },
      {
        "name": "游戏",
        "change_pct": 2.23
      },
      {
        "name": "影视",
        "change_pct": 2.77
      },
      {
        "name": "直播/短视频",
        "change_pct": 2.9
      },
      {
        "name": "动漫",
        "change_pct": 1.89
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.92
      },
      {
        "name": "传媒",
        "change_pct": 2.16
      },
      {
        "name": "元宇宙",
        "change_pct": 2.74
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 68,
    "hot_rank_chg": 60,
    "stock_cnt": 5878,
    "price": "10.85",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "3174471300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玉米种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.78
      },
      {
        "name": "转基因",
        "change_pct": 2.94
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.58
      },
      {
        "name": "大农业",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 72,
    "hot_rank_chg": -55,
    "stock_cnt": 5878,
    "price": "10.95",
    "change": "-5.20",
    "market_id": "17",
    "circulate_market_value": "6292276800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.47
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.2
      },
      {
        "name": "自贸区",
        "change_pct": 0.7
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 78,
    "hot_rank_chg": 318,
    "stock_cnt": 5878,
    "price": "2.65",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6376250600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光伏储能",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 4.2
      },
      {
        "name": "5G",
        "change_pct": 5.4
      },
      {
        "name": "一带一路",
        "change_pct": 1.83
      },
      {
        "name": "光通信",
        "change_pct": 7.48
      },
      {
        "name": "军民融合",
        "change_pct": 3.28
      },
      {
        "name": "光伏",
        "change_pct": 4.43
      },
      {
        "name": "军工",
        "change_pct": 3.14
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.58
      },
      {
        "name": "储能",
        "change_pct": 3.38
      },
      {
        "name": "BIPV概念",
        "change_pct": 2.22
      },
      {
        "name": "低价股",
        "change_pct": 0.94
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 5.27
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 6.76
      },
      {
        "name": "智能电网",
        "change_pct": 3.19
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 81,
    "hot_rank_chg": 7,
    "stock_cnt": 5878,
    "price": "11.53",
    "change": "8.88",
    "market_id": "17",
    "circulate_market_value": "14807732000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": 3.88
      },
      {
        "name": "工业互联网",
        "change_pct": 3.13
      },
      {
        "name": "培育钻石",
        "change_pct": 5.12
      },
      {
        "name": "金刚线",
        "change_pct": 5.08
      },
      {
        "name": "国资入股",
        "change_pct": 1.21
      },
      {
        "name": "深地经济",
        "change_pct": 1.93
      }
    ]
  },
  {
    "code": "000679",
    "name": "大连友谊",
    "hot_rank": 85,
    "hot_rank_chg": 217,
    "stock_cnt": 5878,
    "price": "7.28",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "2594592000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "新零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.35
      },
      {
        "name": "房地产",
        "change_pct": 0.4
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 92,
    "hot_rank_chg": 413,
    "stock_cnt": 5878,
    "price": "6.38",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "2812444000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 2.41
      },
      {
        "name": "锂电池",
        "change_pct": 4.2
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.58
      },
      {
        "name": "两轮车",
        "change_pct": 1.93
      },
      {
        "name": "珠宝饰品",
        "change_pct": 2.46
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 97,
    "hot_rank_chg": 6,
    "stock_cnt": 5878,
    "price": "3.93",
    "change": "-1.75",
    "market_id": "17",
    "circulate_market_value": "4559370000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 4.15
      },
      {
        "name": "强势人气股",
        "change_pct": 2.42
      },
      {
        "name": "玻璃",
        "change_pct": 2.13
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "000919",
    "name": "金陵药业",
    "hot_rank": 100,
    "hot_rank_chg": 278,
    "stock_cnt": 5878,
    "price": "6.67",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "4146858900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医康养护",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.18
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.28
      },
      {
        "name": "养老产业",
        "change_pct": 0.93
      },
      {
        "name": "民营医院",
        "change_pct": 0.87
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.81
      },
      {
        "name": "医药",
        "change_pct": 2.79
      },
      {
        "name": "化学原料药",
        "change_pct": 2.84
      },
      {
        "name": "国企改革",
        "change_pct": 1.38
      },
      {
        "name": "医美",
        "change_pct": 0.24
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000530", "name": "冰山冷热", "hot_rank": 1, "hot_rank_chg": 8, "stock_cnt": 5878, "price": "9.46", "change": "10.00", "market_id": "33", "circulate_market_value": "5677104200.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.8}, {"name": "边缘计算", "change_pct": 4.04}, {"name": "核电", "change_pct": 3.01}, {"name": "海工装备", "change_pct": 2.38}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "云计算数据中心", "change_pct": 4.43}, {"name": "冷链", "change_pct": 1.86}, {"name": "地热", "change_pct": 3.69}, {"name": "储能", "change_pct": 3.38}, {"name": "碳中和", "change_pct": 1.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 1.73}, {"name": "汽车热管理", "change_pct": 3.64}, {"name": "热泵", "change_pct": 3.17}, {"name": "液冷服务器", "change_pct": 5.37}, {"name": "蜜雪冰城概念股", "change_pct": 1.58}, {"name": "海洋经济", "change_pct": 2.21}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 2, "hot_rank_chg": 8, "stock_cnt": 5878, "price": "75.38", "change": "10.00", "market_id": "33", "circulate_market_value": "49223705000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "与AOI签订长期供货协议"}, {"code": "002081", "name": "金螳螂", "hot_rank": 3, "hot_rank_chg": 49, "stock_cnt": 5878, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "11405967500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "装修装饰", "change_pct": 2.1}, {"name": "装配式建筑", "change_pct": 1.37}, {"name": "破净股", "change_pct": 0.5}, {"name": "航天", "change_pct": 4.46}, {"name": "旧改", "change_pct": 1.62}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5878, "price": "3.28", "change": "-4.09", "market_id": "33", "circulate_market_value": "5185585800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 2.27}, {"name": "体外诊断", "change_pct": 1.87}, {"name": "医疗器械", "change_pct": 2.07}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "基因测序", "change_pct": 2.15}, {"name": "预制菜", "change_pct": -0.4}, {"name": "水产养殖", "change_pct": -2.25}, {"name": "新冠病毒防治", "change_pct": 2.03}, {"name": "海洋经济", "change_pct": 2.21}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "44.09", "change": "13.63", "market_id": "17", "circulate_market_value": "198538990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5878, "price": "19.48", "change": "-3.85", "market_id": "33", "circulate_market_value": "8953237800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5878, "price": "23.68", "change": "3.50", "market_id": "33", "circulate_market_value": "18038610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001381", "name": "皇冠新材", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5878, "price": "66.91", "change": "-20.86", "market_id": "33", "circulate_market_value": "2950546400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 9, "hot_rank_chg": -8, "stock_cnt": 5878, "price": "533.38", "change": "11.07", "market_id": "33", "circulate_market_value": "592018200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002029", "name": "七匹狼", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5878, "price": "9.30", "change": "-9.97", "market_id": "33", "circulate_market_value": "6188275400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.42}, {"name": "纺织服装", "change_pct": 0.47}, {"name": "破净股", "change_pct": 0.5}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 11, "hot_rank_chg": 10, "stock_cnt": 5878, "price": "81.17", "change": "7.20", "market_id": "33", "circulate_market_value": "128854101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5878, "price": "64.41", "change": "10.01", "market_id": "33", "circulate_market_value": "46712487000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "601599", "name": "浙文影业", "hot_rank": 13, "hot_rank_chg": 55, "stock_cnt": 5878, "price": "4.20", "change": "9.95", "market_id": "17", "circulate_market_value": "4874278300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.42}, {"name": "纺织服装", "change_pct": 0.47}, {"name": "浙江国企改革", "change_pct": 1.37}, {"name": "影视", "change_pct": 2.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 1.38}, {"name": "短剧/互动影游", "change_pct": 3.05}]}, {"code": "002652", "name": "扬子新材", "hot_rank": 14, "hot_rank_chg": 163, "stock_cnt": 5878, "price": "4.59", "change": "10.07", "market_id": "33", "circulate_market_value": "2350373800.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "高洁净板", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.42}, {"name": "装修装饰", "change_pct": 2.1}]}, {"code": "002384", "name": "东山精密", "hot_rank": 15, "hot_rank_chg": -4, "stock_cnt": 5878, "price": "94.33", "change": "7.04", "market_id": "33", "circulate_market_value": "130771728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "16.36", "change": "-4.66", "market_id": "33", "circulate_market_value": "2902394900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 17, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "4.46", "change": "-9.90", "market_id": "17", "circulate_market_value": "5954336200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.42}, {"name": "LED", "change_pct": 3.18}, {"name": "卫星互联网", "change_pct": 4.07}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 18, "hot_rank_chg": -11, "stock_cnt": 5878, "price": "652.10", "change": "4.41", "market_id": "17", "circulate_market_value": "19620202000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 19, "hot_rank_chg": 190, "stock_cnt": 5878, "price": "4.14", "change": "10.11", "market_id": "33", "circulate_market_value": "3565213000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 2.92}, {"name": "一带一路", "change_pct": 1.83}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "福建自贸/海西概念", "change_pct": 1.2}, {"name": "光伏", "change_pct": 4.43}, {"name": "有色金属", "change_pct": 4.08}, {"name": "新能源汽车", "change_pct": 3.58}, {"name": "新能源车零部件", "change_pct": 3.6}, {"name": "自贸区", "change_pct": 0.7}, {"name": "液冷服务器", "change_pct": 5.37}]}, {"code": "603259", "name": "药明康德", "hot_rank": 20, "hot_rank_chg": 10, "stock_cnt": 5878, "price": "148.81", "change": "10.00", "market_id": "17", "circulate_market_value": "368048830000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CXO龙头"}, {"code": "600584", "name": "长电科技", "hot_rank": 21, "hot_rank_chg": 8, "stock_cnt": 5878, "price": "51.74", "change": "9.99", "market_id": "17", "circulate_market_value": "92584310000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 22, "hot_rank_chg": -10, "stock_cnt": 5878, "price": "19.05", "change": "2.04", "market_id": "33", "circulate_market_value": "8617054100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 23, "hot_rank_chg": 15, "stock_cnt": 5878, "price": "34.90", "change": "9.99", "market_id": "17", "circulate_market_value": "29544711000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 24, "hot_rank_chg": 17, "stock_cnt": 5878, "price": "15.73", "change": "10.00", "market_id": "17", "circulate_market_value": "6991111100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI漫剧"}, {"code": "600715", "name": "文投控股", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5878, "price": "2.47", "change": "0.41", "market_id": "17", "circulate_market_value": "7070059400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 2.37}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "游戏", "change_pct": 2.23}, {"name": "影视", "change_pct": 2.77}, {"name": "低价股", "change_pct": 0.94}, {"name": "国企改革", "change_pct": 1.38}, {"name": "短剧/互动影游", "change_pct": 3.05}, {"name": "AI视频", "change_pct": 3.42}]}, {"code": "002724", "name": "海洋王", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5878, "price": "11.66", "change": "-8.62", "market_id": "33", "circulate_market_value": "6605136800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.42}, {"name": "石墨烯", "change_pct": 3.61}, {"name": "军民融合", "change_pct": 3.28}, {"name": "物联网", "change_pct": 3.24}, {"name": "LED", "change_pct": 3.18}, {"name": "军工", "change_pct": 3.14}, {"name": "智慧灯杆", "change_pct": 2.48}, {"name": "海洋经济", "change_pct": 2.21}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 28, "hot_rank_chg": 43, "stock_cnt": 5878, "price": "5.29", "change": "9.98", "market_id": "17", "circulate_market_value": "2958800300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": 2.37}, {"name": "ST摘帽", "change_pct": 2.2}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "游戏", "change_pct": 2.23}, {"name": "影视", "change_pct": 2.77}, {"name": "短剧/互动影游", "change_pct": 3.05}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 29, "hot_rank_chg": -5, "stock_cnt": 5878, "price": "6.12", "change": "-10.00", "market_id": "33", "circulate_market_value": "4682661300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.18}, {"name": "优化生育（三孩）", "change_pct": 0.7}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "医药商业", "change_pct": -0.07}, {"name": "保健品", "change_pct": 1.37}, {"name": "民营医院", "change_pct": 0.87}, {"name": "医药", "change_pct": 2.79}, {"name": "食品", "change_pct": 0.16}, {"name": "辅助生殖", "change_pct": 2.03}, {"name": "口腔", "change_pct": 1.14}, {"name": "医美", "change_pct": 0.24}, {"name": "新冠病毒防治", "change_pct": 2.03}]}, {"code": "603381", "name": "永臻股份", "hot_rank": 30, "hot_rank_chg": 177, "stock_cnt": 5878, "price": "17.14", "change": "10.01", "market_id": "17", "circulate_market_value": "2436239900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光伏"}, {"code": "600487", "name": "亨通光电", "hot_rank": 31, "hot_rank_chg": -5, "stock_cnt": 5878, "price": "43.52", "change": "7.59", "market_id": "17", "circulate_market_value": "106782685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": -29, "stock_cnt": 5878, "price": "196.50", "change": "13.35", "market_id": "33", "circulate_market_value": "246553220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 33, "hot_rank_chg": 29, "stock_cnt": 5878, "price": "23.24", "change": "9.99", "market_id": "33", "circulate_market_value": "3331821900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "固态电池"}, {"code": "603278", "name": "大业股份", "hot_rank": 34, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "14.52", "change": "-8.16", "market_id": "17", "circulate_market_value": "4962346400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "42.33", "change": "10.01", "market_id": "33", "circulate_market_value": "64233753000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "600825", "name": "新华传媒", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5878, "price": "12.13", "change": "-1.46", "market_id": "17", "circulate_market_value": "12674489600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 4.15}, {"name": "上海国企改革", "change_pct": 0.5}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 2.16}, {"name": "国企改革", "change_pct": 1.38}]}, {"code": "600127", "name": "金健米业", "hot_rank": 37, "hot_rank_chg": -1, "stock_cnt": 5878, "price": "10.50", "change": "3.96", "market_id": "17", "circulate_market_value": "6738723800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.49}, {"name": "农业种植", "change_pct": 1.78}, {"name": "湖南国企改革", "change_pct": 2.3}, {"name": "乡村振兴", "change_pct": 1.58}, {"name": "休闲食品", "change_pct": -0.58}, {"name": "食品", "change_pct": 0.16}, {"name": "食品安全", "change_pct": 1.5}, {"name": "社区团购", "change_pct": 0.05}, {"name": "大农业", "change_pct": 0.75}, {"name": "预制菜", "change_pct": -0.4}, {"name": "人造肉", "change_pct": 1.81}, {"name": "国企改革", "change_pct": 1.38}]}, {"code": "002275", "name": "桂林三金", "hot_rank": 38, "hot_rank_chg": 63, "stock_cnt": 5878, "price": "17.38", "change": "10.00", "market_id": "33", "circulate_market_value": "9815377700.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "创新药"}, {"code": "002716", "name": "湖南白银", "hot_rank": 39, "hot_rank_chg": 163, "stock_cnt": 5878, "price": "7.60", "change": "9.99", "market_id": "33", "circulate_market_value": "17650815000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白银", "xgb_concepts": [{"name": "黄金", "change_pct": 10.22}, {"name": "有色 · 铜", "change_pct": 5.39}, {"name": "有色 · 锑", "change_pct": 7.2}, {"name": "湖南国企改革", "change_pct": 2.3}, {"name": "有色 · 锌", "change_pct": 5.73}, {"name": "有色金属", "change_pct": 4.08}, {"name": "国企改革", "change_pct": 1.38}, {"name": "白银", "change_pct": 8.5}]}, {"code": "002185", "name": "华天科技", "hot_rank": 40, "hot_rank_chg": -15, "stock_cnt": 5878, "price": "14.98", "change": "7.92", "market_id": "33", "circulate_market_value": "49884418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 41, "hot_rank_chg": 56, "stock_cnt": 5878, "price": "68.95", "change": "10.00", "market_id": "33", "circulate_market_value": "19030122000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "重组复牌"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 42, "hot_rank_chg": 2, "stock_cnt": 5878, "price": "29.25", "change": "6.56", "market_id": "17", "circulate_market_value": "602602450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5878, "price": "200.09", "change": "7.00", "market_id": "33", "circulate_market_value": "46504535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601012", "name": "隆基绿能", "hot_rank": 44, "hot_rank_chg": 68, "stock_cnt": 5878, "price": "12.00", "change": "2.04", "market_id": "17", "circulate_market_value": "90936747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": 2.6}, {"name": "光伏", "change_pct": 4.43}, {"name": "白马股", "change_pct": 1.0}, {"name": "碳中和", "change_pct": 1.54}, {"name": "颗粒硅", "change_pct": 2.23}, {"name": "BIPV概念", "change_pct": 2.22}, {"name": "钙钛矿电池", "change_pct": 5.27}, {"name": "异质结电池HJT", "change_pct": 6.76}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 45, "hot_rank_chg": -22, "stock_cnt": 5878, "price": "271.38", "change": "8.48", "market_id": "17", "circulate_market_value": "182019540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 46, "hot_rank_chg": -1, "stock_cnt": 5878, "price": "21.90", "change": "-0.27", "market_id": "33", "circulate_market_value": "4165325300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 47, "hot_rank_chg": -28, "stock_cnt": 5878, "price": "252.88", "change": "1.43", "market_id": "33", "circulate_market_value": "1077424850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 48, "hot_rank_chg": 9, "stock_cnt": 5878, "price": "11.12", "change": "-10.03", "market_id": "33", "circulate_market_value": "3716959200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.09}, {"name": "饲料", "change_pct": 0.17}, {"name": "一带一路", "change_pct": 1.83}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "保健品", "change_pct": 1.37}, {"name": "山东国企改革", "change_pct": 1.72}, {"name": "污水处理", "change_pct": 1.93}, {"name": "环保", "change_pct": 2.23}, {"name": "食品", "change_pct": 0.16}, {"name": "预制菜", "change_pct": -0.4}, {"name": "国企改革", "change_pct": 1.38}, {"name": "水产养殖", "change_pct": -2.25}, {"name": "广西概念", "change_pct": 0.5}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 49, "hot_rank_chg": 9, "stock_cnt": 5878, "price": "30.14", "change": "4.94", "market_id": "17", "circulate_market_value": "13228350600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 50, "hot_rank_chg": -23, "stock_cnt": 5878, "price": "30.00", "change": "7.91", "market_id": "33", "circulate_market_value": "30650999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 51, "hot_rank_chg": -16, "stock_cnt": 5878, "price": "8.19", "change": "6.64", "market_id": "33", "circulate_market_value": "13325079100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.24}, {"name": "电竞", "change_pct": 1.94}, {"name": "手游", "change_pct": 2.37}, {"name": "人工智能", "change_pct": 3.28}, {"name": "游戏", "change_pct": 2.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.07}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "传媒", "change_pct": 2.16}, {"name": "快手概念股", "change_pct": 3.06}, {"name": "元宇宙", "change_pct": 2.74}, {"name": "虚拟数字人", "change_pct": 2.68}, {"name": "东数西算/算力", "change_pct": 3.48}, {"name": "web3.0", "change_pct": 2.4}, {"name": "AIGC概念", "change_pct": 3.22}, {"name": "数据要素", "change_pct": 2.31}, {"name": "字节跳动概念股", "change_pct": 3.03}, {"name": "AI营销", "change_pct": 3.35}, {"name": "ChatGPT", "change_pct": 3.42}, {"name": "智能眼镜/MR头显", "change_pct": 6.2}, {"name": "AI大模型/智能体", "change_pct": 2.58}, {"name": "人形机器人", "change_pct": 5.09}, {"name": "短剧/互动影游", "change_pct": 3.05}, {"name": "多模态", "change_pct": 3.55}, {"name": "AI视频", "change_pct": 3.42}, {"name": "IP经济/谷子经济", "change_pct": 1.91}, {"name": "小红书概念股", "change_pct": 2.86}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 52, "hot_rank_chg": 7, "stock_cnt": 5878, "price": "38.23", "change": "19.99", "market_id": "33", "circulate_market_value": "8932792200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "600838", "name": "上海九百", "hot_rank": 53, "hot_rank_chg": -2, "stock_cnt": 5878, "price": "11.30", "change": "-9.96", "market_id": "17", "circulate_market_value": "4529966400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.5}, {"name": "新零售", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "物业管理", "change_pct": 0.6}, {"name": "国企改革", "change_pct": 1.38}, {"name": "地摊经济", "change_pct": 0.8}]}, {"code": "002155", "name": "湖南黄金", "hot_rank": 54, "hot_rank_chg": 176, "stock_cnt": 5878, "price": "19.32", "change": "10.02", "market_id": "33", "circulate_market_value": "30187479000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "000725", "name": "京东方A", "hot_rank": 55, "hot_rank_chg": -5, "stock_cnt": 5878, "price": "4.63", "change": "5.23", "market_id": "33", "circulate_market_value": "163749830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 3.09}, {"name": "折叠屏", "change_pct": 6.42}, {"name": "手机产业链", "change_pct": 6.06}, {"name": "超高清视频", "change_pct": 3.92}, {"name": "苹果产业链", "change_pct": 6.69}, {"name": "电竞", "change_pct": 1.94}, {"name": "半导体", "change_pct": 9.2}, {"name": "人工智能", "change_pct": 3.28}, {"name": "互联网医疗", "change_pct": 1.28}, {"name": "VR&AR", "change_pct": 4.58}, {"name": "OLED", "change_pct": 6.74}, {"name": "京津冀", "change_pct": 1.69}, {"name": "物联网", "change_pct": 3.24}, {"name": "指纹识别", "change_pct": 5.9}, {"name": "汽车零部件", "change_pct": 2.86}, {"name": "白马股", "change_pct": 1.0}, {"name": "智能制造", "change_pct": 3.88}, {"name": "小米概念股", "change_pct": 5.68}, {"name": "国产芯片", "change_pct": 7.83}, {"name": "液晶面板/LCD", "change_pct": 5.93}, {"name": "全息概念", "change_pct": 2.8}, {"name": "理想汽车概念股", "change_pct": 3.23}, {"name": "MicroLED", "change_pct": 5.84}, {"name": "钙钛矿电池", "change_pct": 5.27}, {"name": "智能手表", "change_pct": 6.42}, {"name": "MiniLED", "change_pct": 5.18}, {"name": "传感器", "change_pct": 5.49}, {"name": "大硅片", "change_pct": 10.46}, {"name": "AI PC", "change_pct": 5.7}, {"name": "华为产业链", "change_pct": 3.85}, {"name": "回购", "change_pct": 5.02}, {"name": "光电共封装CPO", "change_pct": 8.58}, {"name": "智能眼镜/MR头显", "change_pct": 6.2}, {"name": "玻璃基板封装", "change_pct": 7.56}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 56, "hot_rank_chg": 17, "stock_cnt": 5878, "price": "8.93", "change": "9.97", "market_id": "33", "circulate_market_value": "9465399700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": 3.09}, {"name": "电子烟", "change_pct": 4.58}, {"name": "一带一路", "change_pct": 1.83}, {"name": "造纸", "change_pct": 0.83}, {"name": "包装印刷", "change_pct": 2.1}, {"name": "卫星互联网", "change_pct": 4.07}, {"name": "太空算力", "change_pct": 5.42}]}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 57, "hot_rank_chg": 108, "stock_cnt": 5878, "price": "9.16", "change": "9.96", "market_id": "33", "circulate_market_value": "4634636000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "陶瓷纤维", "xgb_concepts": [{"name": "锂电池", "change_pct": 4.2}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "大气治理", "change_pct": 3.2}, {"name": "雄安新区", "change_pct": 1.69}, {"name": "耐火材料", "change_pct": 3.56}, {"name": "新能源汽车", "change_pct": 3.58}, {"name": "环保", "change_pct": 2.23}, {"name": "船舶", "change_pct": 2.3}, {"name": "建筑节能", "change_pct": 1.95}, {"name": "气凝胶", "change_pct": 2.21}, {"name": "旧改", "change_pct": 1.62}]}, {"code": "601138", "name": "工业富联", "hot_rank": 58, "hot_rank_chg": -11, "stock_cnt": 5878, "price": "45.25", "change": "7.87", "market_id": "17", "circulate_market_value": "897945180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 59, "hot_rank_chg": 78, "stock_cnt": 5878, "price": "25.51", "change": "10.00", "market_id": "17", "circulate_market_value": "92204450000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "002388", "name": "新亚制程", "hot_rank": 60, "hot_rank_chg": 198, "stock_cnt": 5878, "price": "5.51", "change": "9.98", "market_id": "33", "circulate_market_value": "2789291500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电材料", "xgb_concepts": [{"name": "电子特气", "change_pct": 7.63}, {"name": "资产重组", "change_pct": 4.15}, {"name": "仪器仪表", "change_pct": 4.97}, {"name": "锂电池", "change_pct": 4.2}, {"name": "ST摘帽", "change_pct": 2.2}, {"name": "有机硅", "change_pct": 3.83}, {"name": "新能源汽车", "change_pct": 3.58}, {"name": "华为产业链", "change_pct": 3.85}, {"name": "供应链金融", "change_pct": 1.38}, {"name": "服务器", "change_pct": 5.59}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 61, "hot_rank_chg": -24, "stock_cnt": 5878, "price": "1446.44", "change": "-2.27", "market_id": "17", "circulate_market_value": "1808168000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603598", "name": "引力传媒", "hot_rank": 62, "hot_rank_chg": 54, "stock_cnt": 5878, "price": "19.69", "change": "10.00", "market_id": "17", "circulate_market_value": "5320499900.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI短剧"}, {"code": "300666", "name": "江丰电子", "hot_rank": 63, "hot_rank_chg": -9, "stock_cnt": 5878, "price": "185.53", "change": "20.00", "market_id": "33", "circulate_market_value": "41084439000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "600664", "name": "哈药股份", "hot_rank": 64, "hot_rank_chg": 47, "stock_cnt": 5878, "price": "5.74", "change": "4.75", "market_id": "17", "circulate_market_value": "14456247000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.24}, {"name": "工业大麻", "change_pct": 3.09}, {"name": "中药", "change_pct": 1.18}, {"name": "保健品", "change_pct": 1.37}, {"name": "民营医院", "change_pct": 0.87}, {"name": "医药", "change_pct": 2.79}, {"name": "化学原料药", "change_pct": 2.84}, {"name": "流感", "change_pct": 2.0}, {"name": "振兴东北", "change_pct": 1.26}, {"name": "食品", "change_pct": 0.16}, {"name": "肝炎概念", "change_pct": 2.09}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 65, "hot_rank_chg": 14, "stock_cnt": 5878, "price": "8.08", "change": "-2.65", "market_id": "33", "circulate_market_value": "3827336700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 2.37}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "VR&AR", "change_pct": 4.58}, {"name": "游戏", "change_pct": 2.23}, {"name": "影视", "change_pct": 2.77}, {"name": "直播/短视频", "change_pct": 2.9}, {"name": "动漫", "change_pct": 1.89}, {"name": "腾讯概念股", "change_pct": 2.92}, {"name": "传媒", "change_pct": 2.16}, {"name": "元宇宙", "change_pct": 2.74}, {"name": "短剧/互动影游", "change_pct": 3.05}, {"name": "IP经济/谷子经济", "change_pct": 1.91}]}, {"code": "601123", "name": "马矿股份", "hot_rank": 66, "hot_rank_chg": 108, "stock_cnt": 5878, "price": "16.58", "change": "10.02", "market_id": "17", "circulate_market_value": "1588832500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "铁精粉"}, {"code": "000657", "name": "中钨高新", "hot_rank": 67, "hot_rank_chg": 56, "stock_cnt": 5878, "price": "39.23", "change": "10.01", "market_id": "33", "circulate_market_value": "57018922000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI PCB微钻"}, {"code": "600371", "name": "万向德农", "hot_rank": 68, "hot_rank_chg": 60, "stock_cnt": 5878, "price": "10.85", "change": "10.04", "market_id": "17", "circulate_market_value": "3174471300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玉米种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.78}, {"name": "转基因", "change_pct": 2.94}, {"name": "乡村振兴", "change_pct": 1.58}, {"name": "大农业", "change_pct": 0.75}]}, {"code": "300085", "name": "银之杰", "hot_rank": 69, "hot_rank_chg": -51, "stock_cnt": 5878, "price": "32.36", "change": "12.13", "market_id": "33", "circulate_market_value": "19309443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 70, "hot_rank_chg": 2, "stock_cnt": 5878, "price": "44.79", "change": "9.99", "market_id": "17", "circulate_market_value": "13368858700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据采集手套"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 71, "hot_rank_chg": -2, "stock_cnt": 5878, "price": "60.40", "change": "7.05", "market_id": "17", "circulate_market_value": "8632912300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 72, "hot_rank_chg": -55, "stock_cnt": 5878, "price": "10.95", "change": "-5.20", "market_id": "17", "circulate_market_value": "6292276800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.47}, {"name": "福建自贸/海西概念", "change_pct": 1.2}, {"name": "自贸区", "change_pct": 0.7}, {"name": "IP经济/谷子经济", "change_pct": 1.91}]}, {"code": "002371", "name": "北方华创", "hot_rank": 73, "hot_rank_chg": 16, "stock_cnt": 5878, "price": "535.50", "change": "10.00", "market_id": "33", "circulate_market_value": "389496080000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "000603", "name": "盛达资源", "hot_rank": 74, "hot_rank_chg": 234, "stock_cnt": 5878, "price": "23.68", "change": "9.99", "market_id": "33", "circulate_market_value": "15787843000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白银采选"}, {"code": "300223", "name": "君正股份", "hot_rank": 75, "hot_rank_chg": -36, "stock_cnt": 5878, "price": "117.21", "change": "17.80", "market_id": "33", "circulate_market_value": "49564999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 76, "hot_rank_chg": 108, "stock_cnt": 5878, "price": "34.54", "change": "10.00", "market_id": "17", "circulate_market_value": "57471499000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "002463", "name": "沪电股份", "hot_rank": 77, "hot_rank_chg": -13, "stock_cnt": 5878, "price": "85.95", "change": "9.99", "market_id": "33", "circulate_market_value": "165629390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "印制电路板"}, {"code": "002309", "name": "中利集团", "hot_rank": 78, "hot_rank_chg": 318, "stock_cnt": 5878, "price": "2.65", "change": "9.96", "market_id": "33", "circulate_market_value": "6376250600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光伏储能", "xgb_concepts": [{"name": "锂电池", "change_pct": 4.2}, {"name": "5G", "change_pct": 5.4}, {"name": "一带一路", "change_pct": 1.83}, {"name": "光通信", "change_pct": 7.48}, {"name": "军民融合", "change_pct": 3.28}, {"name": "光伏", "change_pct": 4.43}, {"name": "军工", "change_pct": 3.14}, {"name": "新能源汽车", "change_pct": 3.58}, {"name": "储能", "change_pct": 3.38}, {"name": "BIPV概念", "change_pct": 2.22}, {"name": "低价股", "change_pct": 0.94}, {"name": "钙钛矿电池", "change_pct": 5.27}, {"name": "异质结电池HJT", "change_pct": 6.76}, {"name": "智能电网", "change_pct": 3.19}]}, {"code": "000636", "name": "风华高科", "hot_rank": 79, "hot_rank_chg": -2, "stock_cnt": 5878, "price": "33.10", "change": "9.57", "market_id": "33", "circulate_market_value": "37981918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 80, "hot_rank_chg": 199, "stock_cnt": 5878, "price": "13.41", "change": "10.01", "market_id": "33", "circulate_market_value": "12453960300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 81, "hot_rank_chg": 7, "stock_cnt": 5878, "price": "11.53", "change": "8.88", "market_id": "17", "circulate_market_value": "14807732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": 3.88}, {"name": "工业互联网", "change_pct": 3.13}, {"name": "培育钻石", "change_pct": 5.12}, {"name": "金刚线", "change_pct": 5.08}, {"name": "国资入股", "change_pct": 1.21}, {"name": "深地经济", "change_pct": 1.93}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 82, "hot_rank_chg": -6, "stock_cnt": 5878, "price": "13.53", "change": "-3.36", "market_id": "17", "circulate_market_value": "9010980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 83, "hot_rank_chg": -43, "stock_cnt": 5878, "price": "14.86", "change": "4.80", "market_id": "33", "circulate_market_value": "9809482700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 84, "hot_rank_chg": -42, "stock_cnt": 5878, "price": "80.88", "change": "9.49", "market_id": "17", "circulate_market_value": "195062250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000679", "name": "大连友谊", "hot_rank": 85, "hot_rank_chg": 217, "stock_cnt": 5878, "price": "7.28", "change": "9.97", "market_id": "33", "circulate_market_value": "2594592000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "新零售", "xgb_concepts": [{"name": "新零售", "change_pct": 0.35}, {"name": "房地产", "change_pct": 0.4}, {"name": "强势人气股", "change_pct": 2.42}]}, {"code": "002008", "name": "大族激光", "hot_rank": 86, "hot_rank_chg": 59, "stock_cnt": 5878, "price": "52.67", "change": "10.00", "market_id": "33", "circulate_market_value": "50390964000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购"}, {"code": "002436", "name": "兴森科技", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5878, "price": "27.98", "change": "9.98", "market_id": "33", "circulate_market_value": "42471641000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超跌修复"}, {"code": "600506", "name": "统一股份", "hot_rank": 88, "hot_rank_chg": 78, "stock_cnt": 5878, "price": "18.18", "change": "-6.87", "market_id": "17", "circulate_market_value": "4538175500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 89, "hot_rank_chg": -41, "stock_cnt": 5878, "price": "16.56", "change": "6.36", "market_id": "17", "circulate_market_value": "5579183600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 90, "hot_rank_chg": -29, "stock_cnt": 5878, "price": "13.10", "change": "8.71", "market_id": "17", "circulate_market_value": "27399203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 91, "hot_rank_chg": -31, "stock_cnt": 5878, "price": "847.66", "change": "10.38", "market_id": "17", "circulate_market_value": "533054390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 92, "hot_rank_chg": 413, "stock_cnt": 5878, "price": "6.38", "change": "10.00", "market_id": "33", "circulate_market_value": "2812444000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 2.41}, {"name": "锂电池", "change_pct": 4.2}, {"name": "新能源汽车", "change_pct": 3.58}, {"name": "两轮车", "change_pct": 1.93}, {"name": "珠宝饰品", "change_pct": 2.46}]}, {"code": "601857", "name": "中国石油", "hot_rank": 93, "hot_rank_chg": 34, "stock_cnt": 5878, "price": "13.62", "change": "-2.71", "market_id": "17", "circulate_market_value": "2205378700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 94, "hot_rank_chg": -24, "stock_cnt": 5878, "price": "49.51", "change": "8.93", "market_id": "33", "circulate_market_value": "362935250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301697", "name": "贝特利", "hot_rank": 95, "hot_rank_chg": 99, "stock_cnt": 5878, "price": "25.42", "change": "20.02", "market_id": "33", "circulate_market_value": "1118252080.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "次新股"}, {"code": "002708", "name": "光洋股份", "hot_rank": 96, "hot_rank_chg": -31, "stock_cnt": 5878, "price": "19.54", "change": "3.50", "market_id": "33", "circulate_market_value": "9958177100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 97, "hot_rank_chg": 6, "stock_cnt": 5878, "price": "3.93", "change": "-1.75", "market_id": "17", "circulate_market_value": "4559370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 4.15}, {"name": "强势人气股", "change_pct": 2.42}, {"name": "玻璃", "change_pct": 2.13}, {"name": "国企改革", "change_pct": 1.38}, {"name": "湖北国企改革", "change_pct": 0.9}]}, {"code": "600641", "name": "先导基电", "hot_rank": 98, "hot_rank_chg": 105, "stock_cnt": 5878, "price": "28.20", "change": "9.98", "market_id": "17", "circulate_market_value": "26243764000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铟"}, {"code": "001318", "name": "阳光乳业", "hot_rank": 99, "hot_rank_chg": 8, "stock_cnt": 5878, "price": "14.26", "change": "-9.97", "market_id": "33", "circulate_market_value": "4030731600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000919", "name": "金陵药业", "hot_rank": 100, "hot_rank_chg": 278, "stock_cnt": 5878, "price": "6.67", "change": "10.07", "market_id": "33", "circulate_market_value": "4146858900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医康养护", "xgb_concepts": [{"name": "中药", "change_pct": 1.18}, {"name": "互联网医疗", "change_pct": 1.28}, {"name": "养老产业", "change_pct": 0.93}, {"name": "民营医院", "change_pct": 0.87}, {"name": "江苏国企改革", "change_pct": 0.81}, {"name": "医药", "change_pct": 2.79}, {"name": "化学原料药", "change_pct": 2.84}, {"name": "国企改革", "change_pct": 1.38}, {"name": "医美", "change_pct": 0.24}]}];
const LIMIT_UP_POOL = [{"code": "002317", "name": "众生药业", "price": 24.44, "change_pct": 9.99, "reason": "公司自研MASH新药ZSP1601片IIb期临床试验初步结果积极", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.64, "first_limit_up": 1793771883, "break_limit_up_times": 0}, {"code": "688809", "name": "强一股份", "price": 223.91, "change_pct": 20.0, "reason": "公司聚焦晶圆测试核心硬件探针卡\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.76, "first_limit_up": 1793772233, "break_limit_up_times": 8}, {"code": "001360", "name": "南矿集团", "price": 17.25, "change_pct": 10.01, "reason": "1、国内技术领先的中高端矿机装备供应服务商之一；公司凭借在砂石骨料和金属矿山破碎、筛分设备领域的技术优势，在俄罗斯、南非、津巴布韦、马来西亚等沿线国家和地区开展诸多合作项目，产品与服务助力当地矿产资源开发；\n2、公司境外子公司与Sucpass Gold签订合作协议，负责津巴布韦Brownhill金矿地表氧化矿的开采与堆浸处理，合作方式为黄金成品销售收入分成，黄金成品概算销售收入3640万美元，子公司按75%比例分成", "plates": ["一带一路"], "limit_up_days": 1, "turnover_ratio": 9.72, "first_limit_up": 1793771553, "break_limit_up_times": 1}, {"code": "002529", "name": "海源复材", "price": 6.11, "change_pct": 10.09, "reason": "1、公司在光伏电镀铜技术已取得突破，中试效果良好，且工艺趋于稳定，有望成为行业内首家应用电镀铜工艺的光伏企业，2023具备产业化可能性\n2、公司通过并购赛维电源进军光伏行业，主要生产制造和销售光伏组件，首期375MW光伏组件生产线项目已投产", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1793768649, "break_limit_up_times": 0}, {"code": "002916", "name": "深南电路", "price": 225.6, "change_pct": 10.0, "reason": "国内IC载板龙头，已成为全球领先的无线基站射频功放PCB供应商、亚太地区主要的航空航天用PCB供应商、国内领先的处理器芯片封装基板供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1793773629, "break_limit_up_times": 0}, {"code": "600206", "name": "有研新材", "price": 34.9, "change_pct": 9.99, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1793771389, "break_limit_up_times": 0}, {"code": "301697", "name": "贝特利", "price": 25.42, "change_pct": 20.02, "reason": "公司四甲基环四硅氧烷可作为半导体上游原材料，LED封装胶已规模化销售，Mini-LED封装胶已量产并开始小批量销售", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 38.62, "first_limit_up": 1793756070, "break_limit_up_times": 3}, {"code": "002565", "name": "顺灏股份", "price": 8.93, "change_pct": 9.98, "reason": "公司参股北京轨道辰光布局太空算力，其第一代试验星“辰光一号”正在开展在轨测试", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 18.08, "first_limit_up": 1793758725, "break_limit_up_times": 3}, {"code": "002353", "name": "杰瑞股份", "price": 90, "change_pct": 10.0, "reason": "公司签署近百亿元燃气轮机发电机组供应合同", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.21, "first_limit_up": 1793772219, "break_limit_up_times": 0}, {"code": "603256", "name": "宏和科技", "price": 77.94, "change_pct": 10.01, "reason": "公司是全球高端电子级玻璃纤维布龙头，极薄布、低介电、低CTE特种电子布技术国际领先，为AI服务器PCB核心上游材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.5, "first_limit_up": 1793774155, "break_limit_up_times": 5}, {"code": "002155", "name": "湖南黄金", "price": 19.32, "change_pct": 10.02, "reason": "公司拟购买黄金天岳及中南冶炼100%股权", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 5.42, "first_limit_up": 1793773743, "break_limit_up_times": 3}, {"code": "605288", "name": "凯迪股份", "price": 72.7, "change_pct": 10.0, "reason": "公司已完成具身机器人产品送样，报告期内机器人、智能产品实现核心技术突破", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.02, "first_limit_up": 1793758701, "break_limit_up_times": 0}, {"code": "002827", "name": "高争民爆", "price": 68.95, "change_pct": 10.0, "reason": "西藏民爆行业龙头；公司拟购买紫源铜业51%股权和晟源矿业100%股权", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 0.2, "first_limit_up": 1793755500, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 15.73, "change_pct": 10.0, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 10.33, "first_limit_up": 1793755865, "break_limit_up_times": 4}, {"code": "603186", "name": "华正新材", "price": 145.22, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 14.97, "first_limit_up": 1793772445, "break_limit_up_times": 1}, {"code": "605111", "name": "新洁能", "price": 38.64, "change_pct": 9.99, "reason": "功率半导体龙头，国内最早专门从事MOSFET、IGBT研发设计的企业之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.37, "first_limit_up": 1793757091, "break_limit_up_times": 3}, {"code": "603595", "name": "ST东尼", "price": 26.48, "change_pct": 10.01, "reason": "无线充电材料及器件领先厂商，前三季净利润同比增长854.56%", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.14, "first_limit_up": 1793758926, "break_limit_up_times": 8}, {"code": "603127", "name": "昭衍新药", "price": 44.1, "change_pct": 10.0, "reason": "国内创新药龙头；公司核心业务为药物的非临床评价服务，是新药研发链条中非临床安全性评价的关键环节，主要为创新药客户提供药物非临床药理毒理学评价，受益于国内创新药融资与BD授权交易回暖带来的行业需求增长", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.75, "first_limit_up": 1793772536, "break_limit_up_times": 10}, {"code": "002636", "name": "金安国纪", "price": 64.41, "change_pct": 10.01, "reason": "国内覆铜板龙头，同时生产电子级玻纤布，第三季净利暴增超1000%", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.32, "first_limit_up": 1793771226, "break_limit_up_times": 1}, {"code": "600371", "name": "万向德农", "price": 10.85, "change_pct": 10.04, "reason": "公司主要从事玉米杂交种子的研产销，单倍体育种技术领先", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 14.91, "first_limit_up": 1793757158, "break_limit_up_times": 1}, {"code": "000962", "name": "东方钽业", "price": 38.75, "change_pct": 9.99, "reason": "1、国内最大的钽、铌产品生产基地；AI服务器对钽电容需求的爆发式增长，25H2至今全球钽电容龙头Kemet已经宣布了三次涨价，公司电容器级钽粉全球市占率25%，电容器用钽丝全球市占率50%+，4月以来公司已针对下游钽电容客户涨价50%+，涨价已经逐渐传递至公司端；\n2、公司涂层材料已配套商业航天火箭喷管，超导铌材及铌超导腔用于可控核聚变等国家大科学装置", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1793772126, "break_limit_up_times": 1}, {"code": "600699", "name": "均胜电子", "price": 21.32, "change_pct": 10.01, "reason": "1、公司与智元等国内外机器人头部客户合作，定制化主控板等产品已实现批量交付；\n2、子公司近期新获两家头部品牌主机厂客户项目定点通知，公司将为上述客户在全球范围内开发并提供一系列汽车智能化产品，包括CCU、智能网联等产品，根据客户规划，上述项目预计全生命周期订单总金额约人民币150亿元，计划从2027年开始量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.61, "first_limit_up": 1793772082, "break_limit_up_times": 5}, {"code": "002058", "name": "紫竹高科", "price": 23.24, "change_pct": 9.99, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 3, "turnover_ratio": 20.77, "first_limit_up": 1793756226, "break_limit_up_times": 2}, {"code": "603777", "name": "来伊份", "price": 14.5, "change_pct": 10.02, "reason": "公司为休闲食品连锁行业龙头企业，控股股东及一致行动人拟转让10%股份", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.67, "first_limit_up": 1793761603, "break_limit_up_times": 1}, {"code": "600537", "name": "*ST亿晶", "price": 1.69, "change_pct": 9.74, "reason": "公司预重整投资安排生变，中润光能拟入主", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 1.88, "first_limit_up": 1793755500, "break_limit_up_times": 0}, {"code": "000975", "name": "山金国际", "price": 23.08, "change_pct": 10.01, "reason": "公司矿产金产量在中国黄金上市企业中排名第五，拥有的玉龙矿业是目前国内矿产银（含量银）最大的单体矿山之一", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1793770422, "break_limit_up_times": 2}, {"code": "000506", "name": "招金黄金", "price": 13.41, "change_pct": 10.01, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 8.67, "first_limit_up": 1793770383, "break_limit_up_times": 5}, {"code": "002463", "name": "沪电股份", "price": 85.95, "change_pct": 9.99, "reason": "国内规模最大、技术实力最强的PCB制造商之一", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.99, "first_limit_up": 1793774103, "break_limit_up_times": 0}, {"code": "688596", "name": "正帆科技", "price": 50.64, "change_pct": 20.0, "reason": "公司完成收购汉京半导体62.23%股权，新增石英、碳化硅陶瓷等半导体设备核心零组件，产品矩阵延伸至高端耗材；前三季度净利润同比增长281.11%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 12.75, "first_limit_up": 1793774084, "break_limit_up_times": 0}, {"code": "603203", "name": "快克智能", "price": 31.57, "change_pct": 10.0, "reason": "1、公司高速高精固晶机已批量供货成都先进等头部功率半导体企业，芯片封装AOI与光模块AOI设备在800G及以上光模块头部客户小批量应用；\n2、在服务器液冷领域，公司可为液冷装置核心零部件提供精密组装自动化产线，已为飞龙股份交付多条散热水泵自动化生产线，该水泵用于英伟达服务器液冷系统", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.75, "first_limit_up": 1793772481, "break_limit_up_times": 1}, {"code": "601069", "name": "西部黄金", "price": 23.42, "change_pct": 10.0, "reason": "西北地区最大的黄金采选冶企业", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 3.95, "first_limit_up": 1793771715, "break_limit_up_times": 2}, {"code": "688507", "name": "索辰科技", "price": 171.16, "change_pct": 20.0, "reason": "公司推出物理AI开发及应用平台全场景解决方案，对标英伟达Omniverse，针对机器人场景目前发布了机器人设计优化软件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 13.11, "first_limit_up": 1793758258, "break_limit_up_times": 3}, {"code": "688361", "name": "中科飞测", "price": 246.74, "change_pct": 20.0, "reason": "公司目前的产品可以满足HBM技术领域对于量检测设备的需求，其中图形晶圆缺陷检测设备、三维形貌量测设备等多个系列产品已成功通过国内多家HBM客户产线验证，实现了批量出货\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.08, "first_limit_up": 1793772053, "break_limit_up_times": 2}, {"code": "600988", "name": "赤峰黄金", "price": 34.54, "change_pct": 10.0, "reason": "公司位于内蒙古赤峰境内，是国内矿产品位最高的金矿之一", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1793770217, "break_limit_up_times": 4}, {"code": "001339", "name": "智微智能", "price": 57.1, "change_pct": 10.0, "reason": "子公司腾云智算算力设备销售保持强劲增长，维保业务实现翻倍增长，已发布GPU算力租赁平台HAT，支持整机与切卡租赁，首批种子用户落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.59, "first_limit_up": 1793772042, "break_limit_up_times": 16}, {"code": "603773", "name": "沃格光电", "price": 57.15, "change_pct": 10.01, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 8.25, "first_limit_up": 1793774089, "break_limit_up_times": 5}, {"code": "603955", "name": "大千生态", "price": 28.91, "change_pct": 10.01, "reason": "1、公司宠物业务已覆盖零售及服务、智能硬件、互动体验等场景，形成“消费+服务+产品”的全业务链布局；\n2、子公司浙江深辰凯动科技的羽毛球机器人正从实验原型阶段迈向产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.03, "first_limit_up": 1793759149, "break_limit_up_times": 7}, {"code": "600892", "name": "大晟文化", "price": 5.29, "change_pct": 9.98, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 2.35, "first_limit_up": 1793755500, "break_limit_up_times": 0}, {"code": "603767", "name": "中马传动", "price": 15.61, "change_pct": 10.01, "reason": "公司减速器应用于新能源汽车，表示目前未涉足机器人行业", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.75, "first_limit_up": 1793759307, "break_limit_up_times": 0}, {"code": "300666", "name": "江丰电子", "price": 185.53, "change_pct": 20.0, "reason": "公司拟收购凯德石英控制权，标的专注于石英仪器、石英管道、石英舟等石英玻璃制品的研发、生产和销售", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.06, "first_limit_up": 1793772387, "break_limit_up_times": 2}, {"code": "002578", "name": "闽发铝业", "price": 4.14, "change_pct": 10.11, "reason": "1、公司位于福建省南安市，为海西板块的铝型材龙头企业，表示将重点拓展机器人等工业铝型材及高端装备铝型材赛道；\n2、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n3、光伏支架和边框等配套产品是公司的主要工业材产品之一", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 12.5, "first_limit_up": 1793768631, "break_limit_up_times": 0}, {"code": "002081", "name": "金 螳 螂", "price": 4.3, "change_pct": 9.97, "reason": "1、公司及下属公司8月中标天津海信广场裙楼、芜湖梦溪科创走廊酒店改造及越南S4区W塔室内精装修工程，合计金额约5.16亿元；\n2、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n3、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.25, "first_limit_up": 1793755806, "break_limit_up_times": 0}, {"code": "603381", "name": "永臻股份", "price": 17.14, "change_pct": 10.01, "reason": "光伏铝边框绝对龙头，全球市占率超 18%；公司主营光伏边框、BIPV 产品、光伏支架等绿色能源结构材料研发生产，配套隆基、天合光能等国内外头部组件厂商", "plates": ["光伏"], "limit_up_days": 2, "turnover_ratio": 13.11, "first_limit_up": 1793757632, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.03, "change_pct": 9.57, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.86, "first_limit_up": 1793769338, "break_limit_up_times": 0}, {"code": "688037", "name": "芯源微", "price": 211.37, "change_pct": 20.0, "reason": "公司是国内唯一可提供量产型前道涂胶显影机的厂商，其光刻工序涂胶显影设备和单片式湿法设备等产品是半导体芯片制造过程中的关键设备，已成功打破国外厂商垄断，广泛应用于集成电路制造前道晶圆加工及后道先进封装等环节", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1793771885, "break_limit_up_times": 0}, {"code": "001337", "name": "四川黄金", "price": 37.18, "change_pct": 10.0, "reason": "公司主要从事金矿采选及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1793770428, "break_limit_up_times": 1}, {"code": "002436", "name": "兴森科技", "price": 27.98, "change_pct": 9.98, "reason": "国内本土IC封装基板行业的先行者之一；公司生产的FCBGA封装基板可用于HBM存储的封装", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.27, "first_limit_up": 1793775600, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 28.2, "change_pct": 9.98, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.05, "first_limit_up": 1793770697, "break_limit_up_times": 0}, {"code": "000657", "name": "中钨高新", "price": 39.23, "change_pct": 10.01, "reason": "公司旗下子公司金洲公司是PCB微钻领域龙头，具备极小径钻头精磨等核心技术", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1793772438, "break_limit_up_times": 1}, {"code": "002741", "name": "光华科技", "price": 19.29, "change_pct": 9.98, "reason": "1、国内PCB化学品的领先厂商；公司主要产品包括PCB化学品，PCB化学品的功能主要应用于集成电路互连技术；\n2、消息称公司在硫化锂的生产上选择了固态和固相合成的干法路线，已在下游固态电池客户中处于领先地位", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.9, "first_limit_up": 1793773287, "break_limit_up_times": 6}, {"code": "603061", "name": "金海通", "price": 228.69, "change_pct": 10.0, "reason": "公司主营半导体芯片测试设备，深耕集成电路测试分选机领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.3, "first_limit_up": 1793771783, "break_limit_up_times": 1}, {"code": "603283", "name": "赛腾股份", "price": 35.86, "change_pct": 10.0, "reason": "公司通过收购日本 Optima 掌握晶圆缺陷检测等核心技术，是国内唯一能量产 HBM 量测设备的企业，且半导体设备产品线丰富，涵盖晶圆字符检测机、激光开槽机等，为国产芯片生产提供关键设备支持", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.91, "first_limit_up": 1793773742, "break_limit_up_times": 4}, {"code": "688652", "name": "京仪装备", "price": 94.13, "change_pct": 20.0, "reason": "公司主要从事半导体专用设备的研产销，主营产品包括半导体专用温控设备（Chiller）、半导体专用工艺废气处理设备（Local Scrubber）和晶圆传片设备（Sorter）\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.84, "first_limit_up": 1793771034, "break_limit_up_times": 0}, {"code": "688835", "name": "高凯技术", "price": 297.28, "change_pct": 20.0, "reason": "公司形成流量控制、点胶封装、精密涂胶三大产品板块，覆盖半导体、新能源及消费电子头部客户供应链", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.89, "first_limit_up": 1793774293, "break_limit_up_times": 0}, {"code": "300489", "name": "光智科技", "price": 190.3, "change_pct": 20.0, "reason": "1、公司磷化铟衬底已实现批量交付，客户包括国内外光通信芯片及器件厂商，海外已向光通信龙头批量出货，6英寸产品获某全球头部客户订单；\n2、核级高性能铝合金材料主要供应商之一；公司为核燃料加工专用设备提供高性能铝合金材料，研发的新一代高性能铝合金材料符合新型核燃料加工设备所需铝合金材料的技术标准；\n3、公司表示生产的锗可用于卫星太阳翼", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 9.84, "first_limit_up": 1793772000, "break_limit_up_times": 0}, {"code": "002222", "name": "福晶科技", "price": 46.87, "change_pct": 10.0, "reason": "公司具有磁光晶体到法拉第旋光片全制程能力，主要应用于光纤通信、光信息处理系统和精密光学测量系统中；第三季度净利润同比增59.9%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.89, "first_limit_up": 1793773398, "break_limit_up_times": 12}, {"code": "300943", "name": "春晖智控", "price": 25.78, "change_pct": 20.02, "reason": "1、公司通过参股并拟全资收购的春晖仪表供应卫星电磁解除装置、航天级温度传感器等，已小批量供货星网、银河航天等；\n2、公司研发的氢气电磁阀、调压阀等产品，能够精确控制氢气的流量和压力，确保氢燃料电池汽车供氢系统的稳定运行", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 15.87, "first_limit_up": 1793775096, "break_limit_up_times": 0}, {"code": "603259", "name": "药明康德", "price": 148.81, "change_pct": 10.0, "reason": "全球领先的\"一体化、端到端\"的新药研发服务平台\n", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1793772320, "break_limit_up_times": 5}, {"code": "003021", "name": "兆威机电", "price": 92.9, "change_pct": 10.01, "reason": "1、公司产品应用于机器人领域，持续推动微型传动及驱动系统在灵巧手、机器人关节等场景应用，灵巧手产品商业化进程持续推进；\n2、公司的微型传动系统可以应用于AR/VR领域，如磁感应系统、瞳距调节驱动系统、头部自动松紧装置、智能眼镜隐藏式微型扬声器等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.23, "first_limit_up": 1793758110, "break_limit_up_times": 2}, {"code": "000919", "name": "金陵药业", "price": 6.67, "change_pct": 10.07, "reason": "公司拥有香菊感冒颗粒批文", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1793756673, "break_limit_up_times": 1}, {"code": "000017", "name": "深中华A", "price": 6.38, "change_pct": 10.0, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 6.6, "first_limit_up": 1793770257, "break_limit_up_times": 0}, {"code": "002992", "name": "宝明科技", "price": 33.4, "change_pct": 10.01, "reason": "1、公司成功开发出新一代锂电复合铜箔产品，具有低面阻、免辊焊的特点，在硅碳负极及固态电池应用上具有更好的性能优势，并已获得市场高度认可；\n2、公司HVLP4/5铜箔主要技术指标已完成厂内验证，正布局向客户送样", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 5.04, "first_limit_up": 1793772117, "break_limit_up_times": 0}, {"code": "002371", "name": "北方华创", "price": 535.5, "change_pct": 10.0, "reason": "国产半导体设备龙头", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.68, "first_limit_up": 1793771223, "break_limit_up_times": 0}, {"code": "603248", "name": "锡华科技", "price": 18, "change_pct": 10.02, "reason": "公司主要从事大型高端装备专用部件的研发、制造与销售，产品结构以风电齿轮箱专用部件为主、注塑机厚大专用部件为辅，是全球行业领先、质量可靠、技术卓越的大型高端装备专用部件制造商", "plates": ["风电", "次新股"], "limit_up_days": 1, "turnover_ratio": 9.46, "first_limit_up": 1793768532, "break_limit_up_times": 0}, {"code": "002652", "name": "扬子新材", "price": 4.59, "change_pct": 10.07, "reason": "公司有多款产品可满足于半导体洁净室的不同需求，前三季度净利润同比增长61.68%", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 16.98, "first_limit_up": 1793771100, "break_limit_up_times": 0}, {"code": "688536", "name": "思瑞浦", "price": 269.24, "change_pct": 20.0, "reason": "公司主要产品为高性能模拟芯片，包括运算放大器、比较器、模拟开关、数据转换芯片、DC/DC转换器、马达驱动及电池管理芯片等；前三季度净利润同比增长384.33%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1793773663, "break_limit_up_times": 0}, {"code": "003033", "name": "征和工业", "price": 77.35, "change_pct": 10.0, "reason": "1、公司研发的微型链系统项目，重点攻关机器人灵巧手传动技术；\n2、公司是张雪机车链传动系统的核心供应商，双方更在赛事级链系统产品上展开联合研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1793757642, "break_limit_up_times": 0}, {"code": "688517", "name": "金冠电气", "price": 21.46, "change_pct": 20.02, "reason": "公司自主研发的交直流充电桩、直流快速充电堆实现批量生产，功率范围覆盖7kW到480kW", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 12.58, "first_limit_up": 1793771389, "break_limit_up_times": 5}, {"code": "000096", "name": "广聚能源", "price": 8.46, "change_pct": 10.01, "reason": "深圳市和珠江三角洲地区成品油主要经销者之一；公司主要业务包括成品油批发零售及仓储，具有成品油、危险化学品特许经营资质，以及广东省内高速公路建设经营加油站的资质，在广东省内拥有12座加油站", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 1.82, "first_limit_up": 1793755500, "break_limit_up_times": 0}, {"code": "601599", "name": "浙文影业", "price": 4.2, "change_pct": 9.95, "reason": "公司出品的文旅微短剧《九龙湖之有间客栈》已于2025年度播出，竖屏微短剧《江南机动队》杀青待播，并将继续布局微短剧业务矩阵", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 9.67, "first_limit_up": 1793755820, "break_limit_up_times": 0}, {"code": "000679", "name": "大连友谊", "price": 7.28, "change_pct": 9.97, "reason": "公司零售业主要集中在大连地区，以百货店（友谊商城）为主，持续通过第三方直播平台等新媒体营销手段来拉动销售", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.6, "first_limit_up": 1793755500, "break_limit_up_times": 0}, {"code": "301583", "name": "托伦斯", "price": 96.19, "change_pct": 20.0, "reason": "公司产品包括静电卡盘基体、多管式加热反射罩、气体分布盘等高端半导体设备金属零部件", "plates": ["国产芯片", "次新股"], "limit_up_days": 1, "turnover_ratio": 37.83, "first_limit_up": 1793757174, "break_limit_up_times": 2}, {"code": "002309", "name": "中利集团", "price": 2.65, "change_pct": 9.96, "reason": "1、公司上半年业绩扭亏，主要系本期确认大额债务重组收益；\n2、公司主要线缆产品涵盖阻燃耐火软电缆、舰船用电缆、高铁及铁路信号线缆、新能源汽车及充电桩线缆、液冷电缆、数据通信线缆、海洋工程平台用电缆、光电复合缆、光纤预制棒及光纤等；\n3、全球领先的组件供应商、光伏电站开发与EPC服务商", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1793768445, "break_limit_up_times": 0}, {"code": "002388", "name": "新亚制程", "price": 5.51, "change_pct": 9.98, "reason": "公司产品已批量用于人型机器人主板，与多家客户建立合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1793756040, "break_limit_up_times": 0}, {"code": "000530", "name": "冰山冷热", "price": 9.46, "change_pct": 10.0, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 48.69, "first_limit_up": 1793759256, "break_limit_up_times": 5}, {"code": "601123", "name": "马矿股份", "price": 16.58, "change_pct": 10.02, "reason": "公司主营铁矿石的开采、选矿及综合利用，拥有全国知名马坑铁矿采矿权，铁矿石保有资源储量约3.25亿吨，主要产品为TFe65%造球铁精粉，面向福建省及周边省份大型钢铁企业销售，是福建省规模最大的铁矿采选企业，属于铁矿石产业链上游资源开采与加工环节", "plates": ["次新股"], "limit_up_days": 2, "turnover_ratio": 32.01, "first_limit_up": 1793755500, "break_limit_up_times": 4}, {"code": "688200", "name": "华峰测控", "price": 218.53, "change_pct": 20.0, "reason": "公司为国内半导体测试机龙头，现已成为国内前三大半导体封测厂商模拟测试领域的主力供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1793771537, "break_limit_up_times": 0}, {"code": "002821", "name": "凯莱英", "price": 148.84, "change_pct": 10.0, "reason": "国内CMO行业龙头之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.91, "first_limit_up": 1793770326, "break_limit_up_times": 0}, {"code": "605287", "name": "德才股份", "price": 50.52, "change_pct": 9.99, "reason": "1、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙；\n2、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 7.14, "first_limit_up": 1793756794, "break_limit_up_times": 1}, {"code": "301070", "name": "开勒股份", "price": 44.46, "change_pct": 20.0, "reason": "公司拟控股威泰思光电，深化AI硬件全产业链布局，标的专注于精密光学元器件，核心产品覆盖光学棱镜、偏振片、透镜、滤光片、分束器及镜头组件等，广泛应用于光通信、机器视觉、工业激光、生物医学等高成长领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 7.05, "first_limit_up": 1793771535, "break_limit_up_times": 0}, {"code": "601212", "name": "白银有色", "price": 5.08, "change_pct": 9.96, "reason": "公司是我国多品种有色金属综合生产基地，具有年产白银500吨的生产能力，有年产金15吨的生产能力", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1793774235, "break_limit_up_times": 2}, {"code": "300139", "name": "晓程科技", "price": 38.23, "change_pct": 19.99, "reason": "公司以黄金矿产资源开发利用为主，拥有三座金矿", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 22.86, "first_limit_up": 1793770545, "break_limit_up_times": 1}, {"code": "688409", "name": "富创精密", "price": 121.2, "change_pct": 20.0, "reason": "公司结构零部件（基板、冷却板等）多种产品应用于光刻机、涂胶显影设备，主要客户有上海微电子、芯源微", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1793773687, "break_limit_up_times": 1}, {"code": "001282", "name": "三联锻造", "price": 17, "change_pct": 10.03, "reason": "1、公司仿生连杆相关业务或用在人形机器人上；\n2、公司主要从事汽车锻造零部件，向问界m7供货拉杆产品；\n3、公司已进入小米等知名整车厂商新能源汽车零部件的定点开发项目\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.27, "first_limit_up": 1793760951, "break_limit_up_times": 0}, {"code": "001359", "name": "平安电工", "price": 69.62, "change_pct": 10.0, "reason": "公司薄型电子级玻纤布已经批量供应国内头部覆铜板厂商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.62, "first_limit_up": 1793771211, "break_limit_up_times": 2}, {"code": "002409", "name": "雅克科技", "price": 83.66, "change_pct": 10.01, "reason": "1、公司子公司成都科美特专注于含氟类特种气体的研产销，主要产品为六氟化硫和四氟化碳，目前为合肥长鑫供应含氟类特种气体；\n2、公司向SK海力士、三星电子等提供逻辑芯片，海力士占全球HBM市场80%份额", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.07, "first_limit_up": 1793770893, "break_limit_up_times": 0}, {"code": "002876", "name": "三利谱", "price": 28.06, "change_pct": 10.0, "reason": "国内偏光片行业龙头企业之一，国内少数具备TFT-LCD用偏光片生产能力的企业之一，是华为等全球著名终端品牌显示屏材料供应商", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1793771013, "break_limit_up_times": 0}, {"code": "600391", "name": "航发科技", "price": 42.35, "change_pct": 10.0, "reason": "中国航发集团旗下发动机零部件平台，主营业务为航空发动机及燃气轮机及零部件的研产销", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1793770730, "break_limit_up_times": 0}, {"code": "000603", "name": "盛达资源", "price": 23.68, "change_pct": 9.99, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 6.44, "first_limit_up": 1793769879, "break_limit_up_times": 1}, {"code": "603662", "name": "柯力传感", "price": 54.54, "change_pct": 10.0, "reason": "公司六维力传感器给华为送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.7, "first_limit_up": 1793760002, "break_limit_up_times": 5}, {"code": "001233", "name": "海安集团", "price": 61.75, "change_pct": 9.99, "reason": "我国全钢巨胎行业的龙头企业，全钢巨胎产量国内第一", "plates": ["次新股"], "limit_up_days": 1, "turnover_ratio": 15.24, "first_limit_up": 1793768472, "break_limit_up_times": 0}, {"code": "002275", "name": "桂林三金", "price": 17.38, "change_pct": 10.0, "reason": "公司拥有国家中药保护品种21种，核心产品三金片、西瓜霜等产品为全国知名品牌，作用有清热泻火，消肿止痛、治疗咽炎等；第三季度净利润同比增长15.52%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.29, "first_limit_up": 1793756562, "break_limit_up_times": 1}, {"code": "002971", "name": "和远气体", "price": 34.53, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.82, "first_limit_up": 1793771778, "break_limit_up_times": 0}, {"code": "002980", "name": "华盛昌", "price": 71.27, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.7, "first_limit_up": 1793772207, "break_limit_up_times": 0}, {"code": "603950", "name": "长源东谷", "price": 37.31, "change_pct": 9.99, "reason": "公司拟收购康豪机电，标的终端应用覆盖数据中心、发电及储能等场景，主要客户包括康明斯集团、卡特彼勒、MTU、广西玉柴、潍柴动力等国内外知名动力系统制造商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1793773335, "break_limit_up_times": 3}, {"code": "600584", "name": "长电科技", "price": 51.74, "change_pct": 9.99, "reason": "国内封测龙头，拟投资78亿元在上海临港建设高端先进封测工厂", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.8, "first_limit_up": 1793772464, "break_limit_up_times": 9}, {"code": "605376", "name": "博迁新材", "price": 74.57, "change_pct": 10.0, "reason": "公司是全球领先、国内唯一的小粒径纳米镍粉生产商、国内MLCC镍粉市场领军企业，银包铜粉已批量用于光伏HJT电池低温浆料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 5.09, "first_limit_up": 1793774065, "break_limit_up_times": 1}, {"code": "688072", "name": "拓荆科技", "price": 487.79, "change_pct": 20.0, "reason": "公司拟定增募资46亿投入高端半导体设备产业化基地建设等项目。在披露定增预案的同时，还宣布向控股子公司拓荆键科增资，后者还将引入多家外部投资者，其中包括实控人为大基金三期的国投集新基金，这也是大基金三期成立至今首度出手半导体产业项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.79, "first_limit_up": 1793774006, "break_limit_up_times": 0}, {"code": "000426", "name": "兴业银锡", "price": 24.04, "change_pct": 10.02, "reason": "1、公司主营业务为有色金属及贵金属采选与冶炼，产品有银、锡、锌、铅等有色金属；\n2、公司旗下西藏黄金拥有金矿资源，主营产品为金精粉", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1793772033, "break_limit_up_times": 0}, {"code": "001389", "name": "广合科技", "price": 90.23, "change_pct": 10.0, "reason": "公司拥有CPU PCB产品，在国内算力服务器CPU主板PCB制造商中排名第一，在全球同类厂商中排名第三（全球市场份额 12.4%），已应用于 Intel发布的Purley、Whitley、Eagle stream、Birch Stream 等各世代芯片平台的服务器，在AMD发布的各世代芯片平台也有对应的PCB产品向服务器厂商供应", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.26, "first_limit_up": 1793773770, "break_limit_up_times": 0}, {"code": "603598", "name": "引力传媒", "price": 19.69, "change_pct": 10.0, "reason": "1、领先的数字营销服务公司，字节跳动巨量引擎核心代理商；公司形成独具特色的短剧业务体系，为客户提供短剧营销投前、投中到投后的全方位服务；\n2、公司内部自研上线“核力 AI”的 1.0 版本、已具备“营销文案 生成”、“图片识别与生成”及“数字分身复刻及驱动”等功能应用", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 8.15, "first_limit_up": 1793755918, "break_limit_up_times": 1}, {"code": "002975", "name": "博杰股份", "price": 77.33, "change_pct": 10.0, "reason": "1、公司拿下鼎泰芯源控股权，鼎泰芯源由中科院半导体所Ⅲ-V族化合物半导体技术团队创立，目前的核心产品为磷化铟衬底，是国内少数几家掌握磷化铟衬底材料核心技术并实现国产化量产的企业；\n2、公司披露人形机器人测试业务覆盖IMU传感器、摄像头、力传感器及麦克风检测；\n3、公司聚焦液冷服务器制造与检测环节，核心提供液冷板精密焊接设备、液冷系统密封性检测设备及自动化产线解决方案", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 9.29, "first_limit_up": 1793771901, "break_limit_up_times": 0}, {"code": "002811", "name": "郑中设计", "price": 20.37, "change_pct": 9.99, "reason": "室内设计领域的国际领先企业之一；公司已完成对深迪半导体的战略入股并成为第一大股东，切入MEMS陀螺仪芯片及惯性测量单元IMU的研发与设计赛道，布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.03, "first_limit_up": 1793768640, "break_limit_up_times": 1}, {"code": "002008", "name": "大族激光", "price": 52.67, "change_pct": 10.0, "reason": "全球领先的智能制造装备整体解决方案服务商，控股子公司大族数控研发、生产并销售PCB专用设备", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.09, "first_limit_up": 1793772240, "break_limit_up_times": 3}, {"code": "601208", "name": "东材科技", "price": 33.31, "change_pct": 10.01, "reason": "公司双马来酰亚胺树脂、活性酯树脂、碳氢树脂、聚苯醚树脂等已通过国内外一线覆铜板厂商，配套应用于英伟达、华为、苹果、英特尔等主流服务器体系", "plates": ["电子树脂"], "limit_up_days": 1, "turnover_ratio": 7.62, "first_limit_up": 1793773362, "break_limit_up_times": 2}, {"code": "603657", "name": "春光科技", "price": 28, "change_pct": 10.02, "reason": "公司主营吸尘器、洗地机、扫地机器人、布衣清洗机等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1793773669, "break_limit_up_times": 2}, {"code": "002088", "name": "鲁阳节能", "price": 9.16, "change_pct": 9.96, "reason": "中国陶瓷纤维龙头，间接控股股东筹划破产重组，公司实控人拟发生变更", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.68, "first_limit_up": 1793755812, "break_limit_up_times": 2}, {"code": "002364", "name": "中恒电气", "price": 24.68, "change_pct": 9.98, "reason": "宁德时代拟以41亿元认购控股股东中恒科技投资新增注册资本", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1793774442, "break_limit_up_times": 3}, {"code": "603048", "name": "浙江黎明", "price": 21.98, "change_pct": 10.01, "reason": "1、公司精锻件多以冷锻工艺为主，也有部分热锻工艺，公司的冷镦工艺主要采用国外进口设备，冷锻工艺一人形机器人滚珠丝杆技术；\n2、汽车发动机总成关键零部件制造商，比亚迪为公司的合作伙伴；公司具备多种工艺技术路线，冷锻工艺属于其中主要的一种", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.46, "first_limit_up": 1793772079, "break_limit_up_times": 0}, {"code": "300788", "name": "中信出版", "price": 36.06, "change_pct": 20.0, "reason": "公司主营图书出版与发行业务，已上线画布式AI视频工具并完成AI视频创作工作流搭建，AI短视频内容用于图书营销、IP推广；据2026年8月25日半年报，夸父AI数智出版平台升级为“智能体+Skills”模式", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 9.21, "first_limit_up": 1793768658, "break_limit_up_times": 1}, {"code": "002536", "name": "飞龙股份", "price": 30.05, "change_pct": 9.99, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 10.16, "first_limit_up": 1793775210, "break_limit_up_times": 0}, {"code": "002716", "name": "湖南白银", "price": 7.6, "change_pct": 9.99, "reason": "公司主营业务以白银冶炼和深加工为主，并综合回收黄金等有价金属", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 9.16, "first_limit_up": 1793773410, "break_limit_up_times": 3}, {"code": "605488", "name": "福莱新材", "price": 44.79, "change_pct": 10.0, "reason": "公司向全球灵巧手领军企业灵心巧手累计交付超3万套触觉传感器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.37, "first_limit_up": 1793757671, "break_limit_up_times": 2}, {"code": "002156", "name": "通富微电", "price": 42.33, "change_pct": 10.01, "reason": "公司是国内第二、全球第四的封测巨头，掌握多种先进封测技术，为 AMD 等国际巨头及华为海思、寒武纪等国内芯片企业提供封测服务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.76, "first_limit_up": 1793771244, "break_limit_up_times": 0}, {"code": "603115", "name": "海星股份", "price": 45.05, "change_pct": 10.01, "reason": "公司已切入AI服务器/数据中心用铝电解电容器市场，800V DC高压架构带动AI电极箔需求增长，公司主营产品电极箔是铝电解电容器的核心原材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.61, "first_limit_up": 1793773401, "break_limit_up_times": 1}, {"code": "002674", "name": "兴业科技", "price": 18.33, "change_pct": 10.02, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 4.48, "first_limit_up": 1793772111, "break_limit_up_times": 0}, {"code": "603893", "name": "瑞芯微", "price": 198.01, "change_pct": 10.0, "reason": "公司RK182X协处理器顺利量产，已有数百个客户、几十个行业在深化研发中，应用场景覆盖各类机器人、车载AI BOX等领域，首批客户已进入量产阶段，将在下半年放量", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.7, "first_limit_up": 1793772082, "break_limit_up_times": 0}, {"code": "002428", "name": "云南锗业", "price": 75.38, "change_pct": 10.0, "reason": "1、公司作为磷化铟衬底龙头，控股子公司签下N型磷化铟衬底长单，五年预计供货总量达90万片；\n2、公司“空间太阳能电池用锗晶片建设项目”2025年末将形成年产125万片产能，最终达250万片，锗晶片主要用于空间卫星、空间站等深空设备的空间卫星电池，直接配套商业航天需求", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 13.15, "first_limit_up": 1793755953, "break_limit_up_times": 3}, {"code": "600547", "name": "山东黄金", "price": 25.51, "change_pct": 10.0, "reason": "黄金矿产龙头，上半年净利润同比增长26.17%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.47, "first_limit_up": 1793773444, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};