const UPDATE_TIME = "2026-11-04 04:32";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 0.72,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "短剧游戏",
    "rise": 1.01,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "商业航天",
    "rise": -0.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续251天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续322天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "机器人概念",
    "rise": -0.08,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "创新药",
    "rise": 0.0,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续152天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "注册制次新股",
    "rise": 2.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创增强ETF",
    "code": "885905"
  },
  {
    "name": "科创次新股",
    "rise": 2.76,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创增强ETF",
    "code": "885907"
  },
  {
    "name": "PCB概念",
    "rise": -0.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续145天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": 0.8,
    "rate": 0,
    "tag": "",
    "hotTag": "连续275天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "AI视频",
    "rise": 0.95,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "固态电池",
    "rise": -0.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "冰雪产业",
    "rise": -0.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "AI应用",
    "rise": -0.45,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "粮食概念",
    "rise": 0.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "国家大基金持股",
    "rise": 1.77,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "新股与次新股",
    "rise": 1.35,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "白酒概念",
    "rise": -0.58,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "芯片概念",
    "rise": 0.11,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续32天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "文化传媒概念",
    "rise": 0.42,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "885418"
  }
];
const THS_EVENTS = [
  {
    "title": "红果免费短剧用户量超越豆包，成为抖音集团第二大应用",
    "desc": "",
    "heat": 145145,
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
        "chg": 12.222222
      }
    ]
  },
  {
    "title": "外交部回应“英伟达要求其合作伙伴必须将至少51％的服务提供给非中国企业”有关报道",
    "desc": "",
    "heat": 60389,
    "direction": "数据中心",
    "themes": [
      "数据中心(AIDC)"
    ],
    "stocks": [
      {
        "name": "广聚能源",
        "code": "000096",
        "chg": 10.013004
      }
    ]
  },
  {
    "title": "中国商业航天迎来首个星座出海 首批规模达20颗卫星",
    "desc": "",
    "heat": 57058,
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
    "title": "广东出台37条措施扩大消费 培育壮大消费新业态新模式新场景",
    "desc": "",
    "heat": 52756,
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
        "name": "大东方",
        "code": "600327",
        "chg": 10.114943
      }
    ]
  },
  {
    "title": "国务院金融工作报告：进一步加快自主可控的人民币跨境支付体系建设和发展",
    "desc": "",
    "heat": 7056,
    "direction": "跨境支付（CIPS）",
    "themes": [
      "跨境支付(CIPS)"
    ],
    "stocks": [
      {
        "name": "易点天下",
        "code": "301171",
        "chg": 4.537335
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "次新股",
    "change": "+2.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "破发次新",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+1.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能音箱",
    "change": "+1.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+1.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+1.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+1.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "星闪概念",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MCU概念",
    "change": "+1.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 1,
    "hot_rank_chg": 5,
    "stock_cnt": 5785,
    "price": "3.22",
    "change": "-5.85",
    "market_id": "33",
    "circulate_market_value": "5090727500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.16
      },
      {
        "name": "体外诊断",
        "change_pct": -1.16
      },
      {
        "name": "医疗器械",
        "change_pct": -1.08
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "基因测序",
        "change_pct": -1.38
      },
      {
        "name": "预制菜",
        "change_pct": -1.37
      },
      {
        "name": "水产养殖",
        "change_pct": -3.98
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.77
      },
      {
        "name": "海洋经济",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 2,
    "hot_rank_chg": 16,
    "stock_cnt": 5785,
    "price": "9.59",
    "change": "-7.16",
    "market_id": "33",
    "circulate_market_value": "6381243100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "纺织服装",
        "change_pct": -1.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 4,
    "hot_rank_chg": 8,
    "stock_cnt": 5785,
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
        "change_pct": -0.67
      },
      {
        "name": "LED",
        "change_pct": -0.97
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 6,
    "hot_rank_chg": 40,
    "stock_cnt": 5785,
    "price": "11.68",
    "change": "1.13",
    "market_id": "17",
    "circulate_market_value": "6711761900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.24
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.9
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 10,
    "hot_rank_chg": 1,
    "stock_cnt": 5785,
    "price": "9.22",
    "change": "7.21",
    "market_id": "33",
    "circulate_market_value": "5533076200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.74
      },
      {
        "name": "边缘计算",
        "change_pct": 0.0
      },
      {
        "name": "核电",
        "change_pct": -0.61
      },
      {
        "name": "海工装备",
        "change_pct": -0.46
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.87
      },
      {
        "name": "冷链",
        "change_pct": -0.45
      },
      {
        "name": "地热",
        "change_pct": -0.26
      },
      {
        "name": "储能",
        "change_pct": -0.62
      },
      {
        "name": "碳中和",
        "change_pct": -0.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.08
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.02
      },
      {
        "name": "热泵",
        "change_pct": -0.5
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.37
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.36
      },
      {
        "name": "海洋经济",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 11,
    "hot_rank_chg": -9,
    "stock_cnt": 5785,
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
        "change_pct": -0.5
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.07
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "医药商业",
        "change_pct": -1.23
      },
      {
        "name": "保健品",
        "change_pct": -0.19
      },
      {
        "name": "民营医院",
        "change_pct": -0.53
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "食品",
        "change_pct": -0.88
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.78
      },
      {
        "name": "口腔",
        "change_pct": -0.92
      },
      {
        "name": "医美",
        "change_pct": -1.28
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 12,
    "hot_rank_chg": 66,
    "stock_cnt": 5785,
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
        "change_pct": 0.92
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.3
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "游戏",
        "change_pct": 0.75
      },
      {
        "name": "影视",
        "change_pct": 1.73
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 14,
    "hot_rank_chg": -7,
    "stock_cnt": 5785,
    "price": "12.06",
    "change": "-5.49",
    "market_id": "33",
    "circulate_market_value": "6831728200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "石墨烯",
        "change_pct": -1.03
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "物联网",
        "change_pct": -0.41
      },
      {
        "name": "LED",
        "change_pct": -0.97
      },
      {
        "name": "军工",
        "change_pct": -0.54
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.17
      },
      {
        "name": "海洋经济",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 16,
    "hot_rank_chg": 1,
    "stock_cnt": 5785,
    "price": "2.62",
    "change": "6.50",
    "market_id": "17",
    "circulate_market_value": "7499415300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "游戏",
        "change_pct": 0.75
      },
      {
        "name": "影视",
        "change_pct": 1.73
      },
      {
        "name": "低价股",
        "change_pct": -0.86
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "AI视频",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 18,
    "hot_rank_chg": 350,
    "stock_cnt": 5785,
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
        "change_pct": -1.12
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.02
      },
      {
        "name": "破净股",
        "change_pct": -0.52
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "旧改",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 20,
    "hot_rank_chg": 12,
    "stock_cnt": 5785,
    "price": "11.82",
    "change": "-5.82",
    "market_id": "17",
    "circulate_market_value": "4738425000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.98
      },
      {
        "name": "新零售",
        "change_pct": -0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "物业管理",
        "change_pct": -1.61
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "地摊经济",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 22,
    "hot_rank_chg": 116,
    "stock_cnt": 5785,
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
        "change_pct": -0.67
      },
      {
        "name": "纺织服装",
        "change_pct": -1.24
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.46
      },
      {
        "name": "影视",
        "change_pct": 1.73
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 23,
    "hot_rank_chg": 12,
    "stock_cnt": 5785,
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
        "change_pct": -1.04
      },
      {
        "name": "饲料",
        "change_pct": -1.2
      },
      {
        "name": "一带一路",
        "change_pct": -0.71
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "保健品",
        "change_pct": -0.19
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.66
      },
      {
        "name": "污水处理",
        "change_pct": -0.91
      },
      {
        "name": "环保",
        "change_pct": -0.8
      },
      {
        "name": "食品",
        "change_pct": -0.88
      },
      {
        "name": "预制菜",
        "change_pct": -1.37
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "水产养殖",
        "change_pct": -3.98
      },
      {
        "name": "广西概念",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 26,
    "hot_rank_chg": 48,
    "stock_cnt": 5785,
    "price": "3.82",
    "change": "-4.50",
    "market_id": "17",
    "circulate_market_value": "4431754100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.79
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "玻璃",
        "change_pct": -1.07
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 28,
    "hot_rank_chg": 48,
    "stock_cnt": 5785,
    "price": "8.11",
    "change": "-7.00",
    "market_id": "33",
    "circulate_market_value": "5857786600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.61
      },
      {
        "name": "充电桩",
        "change_pct": -0.77
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.9
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "光伏",
        "change_pct": -0.46
      },
      {
        "name": "风电",
        "change_pct": -0.57
      },
      {
        "name": "军工",
        "change_pct": -0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.32
      },
      {
        "name": "特高压",
        "change_pct": -0.87
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      },
      {
        "name": "海洋经济",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 29,
    "hot_rank_chg": 217,
    "stock_cnt": 5785,
    "price": "4.79",
    "change": "10.12",
    "market_id": "17",
    "circulate_market_value": "4238093900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.53
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.07
      },
      {
        "name": "信托",
        "change_pct": -0.57
      },
      {
        "name": "民营医院",
        "change_pct": -0.53
      },
      {
        "name": "社区团购",
        "change_pct": -0.58
      },
      {
        "name": "大金融",
        "change_pct": -0.18
      },
      {
        "name": "餐饮",
        "change_pct": -1.31
      },
      {
        "name": "首发经济",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 31,
    "hot_rank_chg": -4,
    "stock_cnt": 5785,
    "price": "7.56",
    "change": "-3.94",
    "market_id": "33",
    "circulate_market_value": "14155584000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -0.77
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.87
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.49
      },
      {
        "name": "风电",
        "change_pct": -0.57
      },
      {
        "name": "军工",
        "change_pct": -0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.06
      },
      {
        "name": "轮边电机",
        "change_pct": 1.2
      },
      {
        "name": "人形机器人",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 32,
    "hot_rank_chg": -9,
    "stock_cnt": 5785,
    "price": "12.19",
    "change": "-0.97",
    "market_id": "17",
    "circulate_market_value": "12737182900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.79
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.98
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "600558",
    "name": "大西洋",
    "hot_rank": 35,
    "hot_rank_chg": 54,
    "stock_cnt": 5785,
    "price": "5.72",
    "change": "-8.33",
    "market_id": "17",
    "circulate_market_value": "5134299600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.61
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "有色 · 钛",
        "change_pct": -0.86
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.02
      },
      {
        "name": "有色金属",
        "change_pct": -0.53
      },
      {
        "name": "军工",
        "change_pct": -0.54
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.54
      },
      {
        "name": "核聚变",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "002292",
    "name": "奥飞娱乐",
    "hot_rank": 36,
    "hot_rank_chg": 41,
    "stock_cnt": 5785,
    "price": "9.10",
    "change": "-5.01",
    "market_id": "33",
    "circulate_market_value": "9262739700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 0.05
      },
      {
        "name": "手游",
        "change_pct": 0.92
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.07
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "人工智能",
        "change_pct": -0.39
      },
      {
        "name": "VR&AR",
        "change_pct": 0.1
      },
      {
        "name": "影视",
        "change_pct": 1.73
      },
      {
        "name": "动漫",
        "change_pct": 0.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.52
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "全息概念",
        "change_pct": -0.52
      },
      {
        "name": "NFT",
        "change_pct": 0.29
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.15
      },
      {
        "name": "玩具",
        "change_pct": -0.87
      },
      {
        "name": "大消费",
        "change_pct": -0.38
      },
      {
        "name": "盲盒",
        "change_pct": -1.18
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 40,
    "hot_rank_chg": -4,
    "stock_cnt": 5785,
    "price": "8.31",
    "change": "0.12",
    "market_id": "33",
    "circulate_market_value": "3936283200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.92
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "VR&AR",
        "change_pct": 0.1
      },
      {
        "name": "游戏",
        "change_pct": 0.75
      },
      {
        "name": "影视",
        "change_pct": 1.73
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.5
      },
      {
        "name": "动漫",
        "change_pct": 0.52
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.52
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 43,
    "hot_rank_chg": 13,
    "stock_cnt": 5785,
    "price": "4.52",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "5025155200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "草铵膦",
        "change_pct": -1.04
      },
      {
        "name": "农药",
        "change_pct": -0.97
      },
      {
        "name": "长寿药NMN",
        "change_pct": 0.2
      },
      {
        "name": "大农业",
        "change_pct": -0.94
      },
      {
        "name": "虫害防治",
        "change_pct": -1.19
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 46,
    "hot_rank_chg": 161,
    "stock_cnt": 5785,
    "price": "9.37",
    "change": "4.23",
    "market_id": "33",
    "circulate_market_value": "2665592700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -1.3
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "教育",
        "change_pct": -0.76
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.35
      },
      {
        "name": "职业教育",
        "change_pct": -0.5
      },
      {
        "name": "在线教育",
        "change_pct": -1.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.5
      },
      {
        "name": "华为产业链",
        "change_pct": -0.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "智谱AI",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "000679",
    "name": "大连友谊",
    "hot_rank": 50,
    "hot_rank_chg": 600,
    "stock_cnt": 5785,
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
        "change_pct": -0.53
      },
      {
        "name": "房地产",
        "change_pct": -1.64
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 52,
    "hot_rank_chg": 265,
    "stock_cnt": 5785,
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
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "大气治理",
        "change_pct": -0.4
      },
      {
        "name": "雄安新区",
        "change_pct": -0.64
      },
      {
        "name": "耐火材料",
        "change_pct": 0.88
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.32
      },
      {
        "name": "环保",
        "change_pct": -0.8
      },
      {
        "name": "船舶",
        "change_pct": -0.27
      },
      {
        "name": "建筑节能",
        "change_pct": -0.89
      },
      {
        "name": "气凝胶",
        "change_pct": -0.72
      },
      {
        "name": "旧改",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "600189",
    "name": "泉阳泉",
    "hot_rank": 57,
    "hot_rank_chg": -15,
    "stock_cnt": 5785,
    "price": "8.59",
    "change": "-8.62",
    "market_id": "17",
    "circulate_market_value": "6143549200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "园林",
        "change_pct": -0.96
      },
      {
        "name": "碳中和",
        "change_pct": -0.66
      },
      {
        "name": "振兴东北",
        "change_pct": -0.4
      },
      {
        "name": "饮料",
        "change_pct": -2.61
      },
      {
        "name": "林业碳汇",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 58,
    "hot_rank_chg": 57,
    "stock_cnt": 5785,
    "price": "7.56",
    "change": "0.67",
    "market_id": "17",
    "circulate_market_value": "3464357900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.25
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.9
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 61,
    "hot_rank_chg": 2,
    "stock_cnt": 5785,
    "price": "9.81",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "4244528500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.88
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "光伏",
        "change_pct": -0.46
      },
      {
        "name": "无线耳机",
        "change_pct": 0.98
      },
      {
        "name": "华为产业链",
        "change_pct": -0.4
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 62,
    "hot_rank_chg": -12,
    "stock_cnt": 5785,
    "price": "10.52",
    "change": "4.16",
    "market_id": "17",
    "circulate_market_value": "6751559500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -3.33
      },
      {
        "name": "农业种植",
        "change_pct": 0.63
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.25
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.27
      },
      {
        "name": "休闲食品",
        "change_pct": -0.96
      },
      {
        "name": "食品",
        "change_pct": -0.88
      },
      {
        "name": "食品安全",
        "change_pct": -1.27
      },
      {
        "name": "社区团购",
        "change_pct": -0.58
      },
      {
        "name": "大农业",
        "change_pct": -0.94
      },
      {
        "name": "预制菜",
        "change_pct": -1.37
      },
      {
        "name": "人造肉",
        "change_pct": 0.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 65,
    "hot_rank_chg": 29,
    "stock_cnt": 5785,
    "price": "3.64",
    "change": "-1.62",
    "market_id": "17",
    "circulate_market_value": "4751910500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "高速公路",
        "change_pct": 0.21
      },
      {
        "name": "振兴东北",
        "change_pct": -0.4
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "000417",
    "name": "合百集团",
    "hot_rank": 68,
    "hot_rank_chg": 11,
    "stock_cnt": 5785,
    "price": "6.02",
    "change": "1.01",
    "market_id": "33",
    "circulate_market_value": "4689745300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.08
      },
      {
        "name": "新零售",
        "change_pct": -0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "人工智能",
        "change_pct": -0.39
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.22
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.5
      },
      {
        "name": "冷链",
        "change_pct": -0.45
      },
      {
        "name": "破净股",
        "change_pct": -0.52
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "地摊经济",
        "change_pct": -1.13
      },
      {
        "name": "首发经济",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "000591",
    "name": "太阳能",
    "hot_rank": 69,
    "hot_rank_chg": 57,
    "stock_cnt": 5785,
    "price": "4.33",
    "change": "-5.67",
    "market_id": "33",
    "circulate_market_value": "16901203000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.29
      },
      {
        "name": "光伏",
        "change_pct": -0.46
      },
      {
        "name": "储能",
        "change_pct": -0.62
      },
      {
        "name": "破净股",
        "change_pct": -0.52
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.98
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.04
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "601366",
    "name": "利群股份",
    "hot_rank": 70,
    "hot_rank_chg": 400,
    "stock_cnt": 5785,
    "price": "3.78",
    "change": "-4.55",
    "market_id": "17",
    "circulate_market_value": "3627821400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.08
      },
      {
        "name": "新零售",
        "change_pct": -0.53
      },
      {
        "name": "智慧物流",
        "change_pct": -0.56
      },
      {
        "name": "破净股",
        "change_pct": -0.52
      },
      {
        "name": "智能制造",
        "change_pct": -0.17
      },
      {
        "name": "社区团购",
        "change_pct": -0.58
      },
      {
        "name": "华为产业链",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 71,
    "hot_rank_chg": -17,
    "stock_cnt": 5785,
    "price": "10.30",
    "change": "-7.95",
    "market_id": "17",
    "circulate_market_value": "4274315800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.39
      },
      {
        "name": "5G",
        "change_pct": -0.79
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.87
      },
      {
        "name": "LED",
        "change_pct": -0.97
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.16
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -0.9
      }
    ]
  },
  {
    "code": "000599",
    "name": "青岛双星",
    "hot_rank": 73,
    "hot_rank_chg": 102,
    "stock_cnt": 5785,
    "price": "4.18",
    "change": "-7.11",
    "market_id": "33",
    "circulate_market_value": "3413982000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.79
      },
      {
        "name": "一带一路",
        "change_pct": -0.71
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "石墨烯",
        "change_pct": -1.03
      },
      {
        "name": "军民融合",
        "change_pct": -0.69
      },
      {
        "name": "轮胎",
        "change_pct": -0.59
      },
      {
        "name": "物联网",
        "change_pct": -0.41
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.66
      },
      {
        "name": "中日韩自贸区",
        "change_pct": -2.49
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.7
      },
      {
        "name": "军工",
        "change_pct": -0.54
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "篮球",
        "change_pct": -2.93
      },
      {
        "name": "华为产业链",
        "change_pct": -0.4
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 74,
    "hot_rank_chg": 31,
    "stock_cnt": 5785,
    "price": "5.40",
    "change": "-1.46",
    "market_id": "17",
    "circulate_market_value": "13599953000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.08
      },
      {
        "name": "工业大麻",
        "change_pct": 0.98
      },
      {
        "name": "中药",
        "change_pct": -0.5
      },
      {
        "name": "保健品",
        "change_pct": -0.19
      },
      {
        "name": "民营医院",
        "change_pct": -0.53
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "化学原料药",
        "change_pct": -0.06
      },
      {
        "name": "流感",
        "change_pct": -0.73
      },
      {
        "name": "振兴东北",
        "change_pct": -0.4
      },
      {
        "name": "食品",
        "change_pct": -0.88
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000410",
    "name": "沈阳机床",
    "hot_rank": 75,
    "hot_rank_chg": -22,
    "stock_cnt": 5785,
    "price": "5.38",
    "change": "-7.72",
    "market_id": "33",
    "circulate_market_value": "10604078600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": -0.67
      },
      {
        "name": "工业自动化",
        "change_pct": -0.07
      },
      {
        "name": "智能制造",
        "change_pct": -0.17
      },
      {
        "name": "工业互联网",
        "change_pct": -0.22
      },
      {
        "name": "振兴东北",
        "change_pct": -0.4
      },
      {
        "name": "工业母机",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 79,
    "hot_rank_chg": 17,
    "stock_cnt": 5785,
    "price": "11.95",
    "change": "-0.83",
    "market_id": "17",
    "circulate_market_value": "24993929000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.64
      },
      {
        "name": "半导体",
        "change_pct": 1.08
      },
      {
        "name": "光伏",
        "change_pct": -0.46
      },
      {
        "name": "风电",
        "change_pct": -0.57
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.78
      },
      {
        "name": "国产芯片",
        "change_pct": 1.02
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.98
      },
      {
        "name": "内存",
        "change_pct": 0.3
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "闪存",
        "change_pct": 0.23
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 80,
    "hot_rank_chg": 50,
    "stock_cnt": 5785,
    "price": "8.64",
    "change": "-5.26",
    "market_id": "17",
    "circulate_market_value": "2542770300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.39
      },
      {
        "name": "中日韩自贸区",
        "change_pct": -2.49
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.32
      },
      {
        "name": "振兴东北",
        "change_pct": -0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 82,
    "hot_rank_chg": -56,
    "stock_cnt": 5785,
    "price": "8.48",
    "change": "-1.28",
    "market_id": "17",
    "circulate_market_value": "2286311600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.38
      },
      {
        "name": "高股息",
        "change_pct": 0.1
      },
      {
        "name": "银行",
        "change_pct": 0.29
      },
      {
        "name": "白马股",
        "change_pct": 0.04
      },
      {
        "name": "破净股",
        "change_pct": -0.52
      },
      {
        "name": "大金融",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 86,
    "hot_rank_chg": -3,
    "stock_cnt": 5785,
    "price": "9.39",
    "change": "2.85",
    "market_id": "33",
    "circulate_market_value": "9914158200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.45
      },
      {
        "name": "医疗器械",
        "change_pct": -1.08
      },
      {
        "name": "医药",
        "change_pct": -0.15
      },
      {
        "name": "疫苗",
        "change_pct": -0.43
      },
      {
        "name": "化学原料药",
        "change_pct": -0.06
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.47
      },
      {
        "name": "干细胞",
        "change_pct": -0.44
      },
      {
        "name": "眼科",
        "change_pct": -0.47
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 89,
    "hot_rank_chg": 178,
    "stock_cnt": 5785,
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
        "change_pct": 0.98
      },
      {
        "name": "电子烟",
        "change_pct": 0.37
      },
      {
        "name": "一带一路",
        "change_pct": -0.71
      },
      {
        "name": "造纸",
        "change_pct": -1.11
      },
      {
        "name": "包装印刷",
        "change_pct": -0.97
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.16
      },
      {
        "name": "太空算力",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 90,
    "hot_rank_chg": -19,
    "stock_cnt": 5785,
    "price": "6.69",
    "change": "1.21",
    "market_id": "33",
    "circulate_market_value": "12811968500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.9
      },
      {
        "name": "林业",
        "change_pct": -1.18
      },
      {
        "name": "碳中和",
        "change_pct": -0.66
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 92,
    "hot_rank_chg": -31,
    "stock_cnt": 5785,
    "price": "8.03",
    "change": "4.56",
    "market_id": "33",
    "circulate_market_value": "13064760000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.08
      },
      {
        "name": "电竞",
        "change_pct": 0.2
      },
      {
        "name": "手游",
        "change_pct": 0.92
      },
      {
        "name": "人工智能",
        "change_pct": -0.39
      },
      {
        "name": "游戏",
        "change_pct": 0.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.96
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.52
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "快手概念股",
        "change_pct": 0.18
      },
      {
        "name": "元宇宙",
        "change_pct": -0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.9
      },
      {
        "name": "web3.0",
        "change_pct": -0.83
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.05
      },
      {
        "name": "数据要素",
        "change_pct": -0.86
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.04
      },
      {
        "name": "AI营销",
        "change_pct": 0.6
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.2
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.7
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.57
      },
      {
        "name": "人形机器人",
        "change_pct": 1.07
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.2
      },
      {
        "name": "多模态",
        "change_pct": 0.05
      },
      {
        "name": "AI视频",
        "change_pct": 0.74
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.14
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "000096",
    "name": "广聚能源",
    "hot_rank": 95,
    "hot_rank_chg": 3910,
    "stock_cnt": 5785,
    "price": "8.46",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "4321774100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "成品油",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -1.14
      },
      {
        "name": "石油化工",
        "change_pct": -1.28
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.87
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.75
      },
      {
        "name": "油气改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "002094",
    "name": "青岛金王",
    "hot_rank": 99,
    "hot_rank_chg": 51,
    "stock_cnt": 5785,
    "price": "4.56",
    "change": "-5.39",
    "market_id": "33",
    "circulate_market_value": "3148468200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.08
      },
      {
        "name": "债转股 · AMC",
        "change_pct": -1.38
      },
      {
        "name": "新零售",
        "change_pct": -0.53
      },
      {
        "name": "中日韩自贸区",
        "change_pct": -2.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.52
      },
      {
        "name": "医美",
        "change_pct": -1.28
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.34
      },
      {
        "name": "C2M",
        "change_pct": -0.63
      },
      {
        "name": "化妆品",
        "change_pct": -1.51
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "603778",
    "name": "国晟科技",
    "hot_rank": 100,
    "hot_rank_chg": 389,
    "stock_cnt": 5785,
    "price": "6.42",
    "change": "-7.63",
    "market_id": "17",
    "circulate_market_value": "4127142900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "园林",
        "change_pct": -0.96
      },
      {
        "name": "光伏",
        "change_pct": -0.46
      },
      {
        "name": "固态电池",
        "change_pct": -0.89
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.1
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5785, "price": "3.22", "change": "-5.85", "market_id": "33", "circulate_market_value": "5090727500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.16}, {"name": "体外诊断", "change_pct": -1.16}, {"name": "医疗器械", "change_pct": -1.08}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "基因测序", "change_pct": -1.38}, {"name": "预制菜", "change_pct": -1.37}, {"name": "水产养殖", "change_pct": -3.98}, {"name": "新冠病毒防治", "change_pct": -0.77}, {"name": "海洋经济", "change_pct": -0.82}]}, {"code": "002029", "name": "七匹狼", "hot_rank": 2, "hot_rank_chg": 16, "stock_cnt": 5785, "price": "9.59", "change": "-7.16", "market_id": "33", "circulate_market_value": "6381243100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "纺织服装", "change_pct": -1.24}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 3, "hot_rank_chg": 26, "stock_cnt": 5785, "price": "19.36", "change": "3.70", "market_id": "33", "circulate_market_value": "8757279200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5785, "price": "4.46", "change": "-9.90", "market_id": "17", "circulate_market_value": "5954336200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "LED", "change_pct": -0.97}, {"name": "卫星互联网", "change_pct": -0.16}]}, {"code": "001381", "name": "皇冠新材", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "69.89", "change": "-17.34", "market_id": "33", "circulate_market_value": "3081956200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 6, "hot_rank_chg": 40, "stock_cnt": 5785, "price": "11.68", "change": "1.13", "market_id": "17", "circulate_market_value": "6711761900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.24}, {"name": "福建自贸/海西概念", "change_pct": -0.9}, {"name": "自贸区", "change_pct": -0.94}, {"name": "IP经济/谷子经济", "change_pct": 0.14}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 7, "hot_rank_chg": 74, "stock_cnt": 5785, "price": "73.73", "change": "7.59", "market_id": "33", "circulate_market_value": "48146243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 8, "hot_rank_chg": 17, "stock_cnt": 5785, "price": "18.88", "change": "10.02", "market_id": "33", "circulate_market_value": "3349463000.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "白酒"}, {"code": "300308", "name": "中际旭创", "hot_rank": 9, "hot_rank_chg": -8, "stock_cnt": 5785, "price": "475.40", "change": "-1.00", "market_id": "33", "circulate_market_value": "527664050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "9.22", "change": "7.21", "market_id": "33", "circulate_market_value": "5533076200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.74}, {"name": "边缘计算", "change_pct": 0.0}, {"name": "核电", "change_pct": -0.61}, {"name": "海工装备", "change_pct": -0.46}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "云计算数据中心", "change_pct": -0.87}, {"name": "冷链", "change_pct": -0.45}, {"name": "地热", "change_pct": -0.26}, {"name": "储能", "change_pct": -0.62}, {"name": "碳中和", "change_pct": -0.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.08}, {"name": "汽车热管理", "change_pct": 0.02}, {"name": "热泵", "change_pct": -0.5}, {"name": "液冷服务器", "change_pct": -0.37}, {"name": "蜜雪冰城概念股", "change_pct": -0.36}, {"name": "海洋经济", "change_pct": -0.82}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "6.12", "change": "-10.00", "market_id": "33", "circulate_market_value": "4682661300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.5}, {"name": "优化生育（三孩）", "change_pct": -1.07}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "医药商业", "change_pct": -1.23}, {"name": "保健品", "change_pct": -0.19}, {"name": "民营医院", "change_pct": -0.53}, {"name": "医药", "change_pct": -0.15}, {"name": "食品", "change_pct": -0.88}, {"name": "辅助生殖", "change_pct": -0.78}, {"name": "口腔", "change_pct": -0.92}, {"name": "医美", "change_pct": -1.28}, {"name": "新冠病毒防治", "change_pct": -0.77}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 12, "hot_rank_chg": 66, "stock_cnt": 5785, "price": "5.29", "change": "9.98", "market_id": "17", "circulate_market_value": "2958800300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": 0.92}, {"name": "ST摘帽", "change_pct": -1.3}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "游戏", "change_pct": 0.75}, {"name": "影视", "change_pct": 1.73}, {"name": "短剧/互动影游", "change_pct": 1.2}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5785, "price": "18.36", "change": "-9.38", "market_id": "33", "circulate_market_value": "8438472600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 14, "hot_rank_chg": -7, "stock_cnt": 5785, "price": "12.06", "change": "-5.49", "market_id": "33", "circulate_market_value": "6831728200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "石墨烯", "change_pct": -1.03}, {"name": "军民融合", "change_pct": -0.69}, {"name": "物联网", "change_pct": -0.41}, {"name": "LED", "change_pct": -0.97}, {"name": "军工", "change_pct": -0.54}, {"name": "智慧灯杆", "change_pct": -1.17}, {"name": "海洋经济", "change_pct": -0.82}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 15, "hot_rank_chg": 32, "stock_cnt": 5785, "price": "15.73", "change": "10.00", "market_id": "17", "circulate_market_value": "6991111100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI漫剧"}, {"code": "600715", "name": "文投控股", "hot_rank": 16, "hot_rank_chg": 1, "stock_cnt": 5785, "price": "2.62", "change": "6.50", "market_id": "17", "circulate_market_value": "7499415300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "游戏", "change_pct": 0.75}, {"name": "影视", "change_pct": 1.73}, {"name": "低价股", "change_pct": -0.86}, {"name": "国企改革", "change_pct": -0.52}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "AI视频", "change_pct": 0.74}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5785, "price": "22.67", "change": "-0.92", "market_id": "33", "circulate_market_value": "17269227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 18, "hot_rank_chg": 350, "stock_cnt": 5785, "price": "4.30", "change": "9.97", "market_id": "33", "circulate_market_value": "11405967500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "装修装饰", "change_pct": -1.12}, {"name": "装配式建筑", "change_pct": -1.02}, {"name": "破净股", "change_pct": -0.52}, {"name": "航天", "change_pct": -0.01}, {"name": "旧改", "change_pct": -0.76}]}, {"code": "603278", "name": "大业股份", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5785, "price": "15.14", "change": "-4.24", "market_id": "17", "circulate_market_value": "5174237200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 20, "hot_rank_chg": 12, "stock_cnt": 5785, "price": "11.82", "change": "-5.82", "market_id": "17", "circulate_market_value": "4738425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.98}, {"name": "新零售", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "物业管理", "change_pct": -1.61}, {"name": "国企改革", "change_pct": -0.52}, {"name": "地摊经济", "change_pct": -1.13}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 21, "hot_rank_chg": 95, "stock_cnt": 5785, "price": "68.95", "change": "10.00", "market_id": "33", "circulate_market_value": "19030122000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "重组复牌"}, {"code": "601599", "name": "浙文影业", "hot_rank": 22, "hot_rank_chg": 116, "stock_cnt": 5785, "price": "4.20", "change": "9.95", "market_id": "17", "circulate_market_value": "4874278300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "纺织服装", "change_pct": -1.24}, {"name": "浙江国企改革", "change_pct": -0.46}, {"name": "影视", "change_pct": 1.73}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.52}, {"name": "短剧/互动影游", "change_pct": 1.2}]}, {"code": "002696", "name": "百洋股份", "hot_rank": 23, "hot_rank_chg": 12, "stock_cnt": 5785, "price": "11.12", "change": "-10.03", "market_id": "33", "circulate_market_value": "3716959200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.04}, {"name": "饲料", "change_pct": -1.2}, {"name": "一带一路", "change_pct": -0.71}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "保健品", "change_pct": -0.19}, {"name": "山东国企改革", "change_pct": -0.66}, {"name": "污水处理", "change_pct": -0.91}, {"name": "环保", "change_pct": -0.8}, {"name": "食品", "change_pct": -0.88}, {"name": "预制菜", "change_pct": -1.37}, {"name": "国企改革", "change_pct": -0.52}, {"name": "水产养殖", "change_pct": -3.98}, {"name": "广西概念", "change_pct": -1.25}]}, {"code": "300502", "name": "新易盛", "hot_rank": 24, "hot_rank_chg": -21, "stock_cnt": 5785, "price": "175.81", "change": "1.41", "market_id": "33", "circulate_market_value": "220592980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 25, "hot_rank_chg": -16, "stock_cnt": 5785, "price": "39.68", "change": "2.27", "market_id": "17", "circulate_market_value": "178680590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 26, "hot_rank_chg": 48, "stock_cnt": 5785, "price": "3.82", "change": "-4.50", "market_id": "17", "circulate_market_value": "4431754100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.79}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "玻璃", "change_pct": -1.07}, {"name": "国企改革", "change_pct": -0.52}, {"name": "湖北国企改革", "change_pct": -0.94}]}, {"code": "601123", "name": "马矿股份", "hot_rank": 27, "hot_rank_chg": 521, "stock_cnt": 5785, "price": "16.58", "change": "10.02", "market_id": "17", "circulate_market_value": "1588832500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "铁精粉"}, {"code": "002300", "name": "太阳电缆", "hot_rank": 28, "hot_rank_chg": 48, "stock_cnt": 5785, "price": "8.11", "change": "-7.00", "market_id": "33", "circulate_market_value": "5857786600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -0.61}, {"name": "充电桩", "change_pct": -0.77}, {"name": "福建自贸/海西概念", "change_pct": -0.9}, {"name": "军民融合", "change_pct": -0.69}, {"name": "光伏", "change_pct": -0.46}, {"name": "风电", "change_pct": -0.57}, {"name": "军工", "change_pct": -0.54}, {"name": "新能源汽车", "change_pct": -0.32}, {"name": "特高压", "change_pct": -0.87}, {"name": "自贸区", "change_pct": -0.94}, {"name": "海洋经济", "change_pct": -0.82}]}, {"code": "600327", "name": "大东方", "hot_rank": 29, "hot_rank_chg": 217, "stock_cnt": 5785, "price": "4.79", "change": "10.12", "market_id": "17", "circulate_market_value": "4238093900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.53}, {"name": "优化生育（三孩）", "change_pct": -1.07}, {"name": "信托", "change_pct": -0.57}, {"name": "民营医院", "change_pct": -0.53}, {"name": "社区团购", "change_pct": -0.58}, {"name": "大金融", "change_pct": -0.18}, {"name": "餐饮", "change_pct": -1.31}, {"name": "首发经济", "change_pct": -0.2}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 30, "hot_rank_chg": 126, "stock_cnt": 5785, "price": "20.94", "change": "-0.90", "market_id": "33", "circulate_market_value": "3002080500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 31, "hot_rank_chg": -4, "stock_cnt": 5785, "price": "7.56", "change": "-3.94", "market_id": "33", "circulate_market_value": "14155584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -0.77}, {"name": "云计算数据中心", "change_pct": -0.87}, {"name": "军民融合", "change_pct": -0.69}, {"name": "氢能源/燃料电池", "change_pct": -0.49}, {"name": "风电", "change_pct": -0.57}, {"name": "军工", "change_pct": -0.54}, {"name": "新能源汽车", "change_pct": -0.32}, {"name": "新能源车零部件", "change_pct": 0.06}, {"name": "轮边电机", "change_pct": 1.2}, {"name": "人形机器人", "change_pct": 1.07}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 32, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "12.19", "change": "-0.97", "market_id": "17", "circulate_market_value": "12737182900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.79}, {"name": "上海国企改革", "change_pct": -0.98}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 0.36}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "002384", "name": "东山精密", "hot_rank": 33, "hot_rank_chg": -19, "stock_cnt": 5785, "price": "83.42", "change": "-5.34", "market_id": "33", "circulate_market_value": "115646958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 34, "hot_rank_chg": -12, "stock_cnt": 5785, "price": "21.75", "change": "-0.96", "market_id": "33", "circulate_market_value": "4136795600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600558", "name": "大西洋", "hot_rank": 35, "hot_rank_chg": 54, "stock_cnt": 5785, "price": "5.72", "change": "-8.33", "market_id": "17", "circulate_market_value": "5134299600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -0.61}, {"name": "军民融合", "change_pct": -0.69}, {"name": "有色 · 钛", "change_pct": -0.86}, {"name": "装配式建筑", "change_pct": -1.02}, {"name": "有色金属", "change_pct": -0.53}, {"name": "军工", "change_pct": -0.54}, {"name": "超超临界发电", "change_pct": -0.54}, {"name": "核聚变", "change_pct": -0.49}]}, {"code": "002292", "name": "奥飞娱乐", "hot_rank": 36, "hot_rank_chg": 41, "stock_cnt": 5785, "price": "9.10", "change": "-5.01", "market_id": "33", "circulate_market_value": "9262739700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 0.05}, {"name": "手游", "change_pct": 0.92}, {"name": "优化生育（三孩）", "change_pct": -1.07}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "人工智能", "change_pct": -0.39}, {"name": "VR&AR", "change_pct": 0.1}, {"name": "影视", "change_pct": 1.73}, {"name": "动漫", "change_pct": 0.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "腾讯概念股", "change_pct": -0.52}, {"name": "传媒", "change_pct": 0.36}, {"name": "全息概念", "change_pct": -0.52}, {"name": "NFT", "change_pct": 0.29}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "虚拟数字人", "change_pct": 0.15}, {"name": "玩具", "change_pct": -0.87}, {"name": "大消费", "change_pct": -0.38}, {"name": "盲盒", "change_pct": -1.18}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "IP经济/谷子经济", "change_pct": 0.14}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 37, "hot_rank_chg": 6, "stock_cnt": 5785, "price": "13.78", "change": "-1.57", "market_id": "17", "circulate_market_value": "9177480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 38, "hot_rank_chg": -30, "stock_cnt": 5785, "price": "643.83", "change": "3.08", "market_id": "17", "circulate_market_value": "19371377000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 39, "hot_rank_chg": -29, "stock_cnt": 5785, "price": "248.21", "change": "-0.45", "market_id": "33", "circulate_market_value": "1057527770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 40, "hot_rank_chg": -4, "stock_cnt": 5785, "price": "8.31", "change": "0.12", "market_id": "33", "circulate_market_value": "3936283200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.92}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "VR&AR", "change_pct": 0.1}, {"name": "游戏", "change_pct": 0.75}, {"name": "影视", "change_pct": 1.73}, {"name": "直播/短视频", "change_pct": 0.5}, {"name": "动漫", "change_pct": 0.52}, {"name": "腾讯概念股", "change_pct": -0.52}, {"name": "传媒", "change_pct": 0.36}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "IP经济/谷子经济", "change_pct": 0.14}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 41, "hot_rank_chg": -26, "stock_cnt": 5785, "price": "121.34", "change": "-1.84", "market_id": "33", "circulate_market_value": "132065006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 42, "hot_rank_chg": -5, "stock_cnt": 5785, "price": "57.03", "change": "-2.60", "market_id": "33", "circulate_market_value": "41360241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000525", "name": "红太阳", "hot_rank": 43, "hot_rank_chg": 13, "stock_cnt": 5785, "price": "4.52", "change": "-9.96", "market_id": "33", "circulate_market_value": "5025155200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "草铵膦", "change_pct": -1.04}, {"name": "农药", "change_pct": -0.97}, {"name": "长寿药NMN", "change_pct": 0.2}, {"name": "大农业", "change_pct": -0.94}, {"name": "虫害防治", "change_pct": -1.19}]}, {"code": "600183", "name": "生益科技", "hot_rank": 44, "hot_rank_chg": -6, "stock_cnt": 5785, "price": "72.26", "change": "-2.18", "market_id": "17", "circulate_market_value": "174272970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 45, "hot_rank_chg": 4, "stock_cnt": 5785, "price": "18.06", "change": "0.28", "market_id": "17", "circulate_market_value": "3813607100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 46, "hot_rank_chg": 161, "stock_cnt": 5785, "price": "9.37", "change": "4.23", "market_id": "33", "circulate_market_value": "2665592700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -1.3}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "教育", "change_pct": -0.76}, {"name": "阿里巴巴概念股", "change_pct": -0.35}, {"name": "职业教育", "change_pct": -0.5}, {"name": "在线教育", "change_pct": -1.3}, {"name": "华为鸿蒙", "change_pct": -0.5}, {"name": "华为产业链", "change_pct": -0.4}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "智谱AI", "change_pct": -0.3}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 47, "hot_rank_chg": -7, "stock_cnt": 5785, "price": "14.26", "change": "-9.97", "market_id": "33", "circulate_market_value": "4030731600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 48, "hot_rank_chg": -18, "stock_cnt": 5785, "price": "29.31", "change": "2.05", "market_id": "17", "circulate_market_value": "12864066200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 49, "hot_rank_chg": -21, "stock_cnt": 5785, "price": "250.24", "change": "0.03", "market_id": "17", "circulate_market_value": "167840550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000679", "name": "大连友谊", "hot_rank": 50, "hot_rank_chg": 600, "stock_cnt": 5785, "price": "7.28", "change": "9.97", "market_id": "33", "circulate_market_value": "2594592000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "新零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.53}, {"name": "房地产", "change_pct": -1.64}]}, {"code": "603200", "name": "上海洗霸", "hot_rank": 51, "hot_rank_chg": 18, "stock_cnt": 5785, "price": "52.57", "change": "-1.92", "market_id": "17", "circulate_market_value": "9224989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 52, "hot_rank_chg": 265, "stock_cnt": 5785, "price": "9.16", "change": "9.96", "market_id": "33", "circulate_market_value": "4634636000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "陶瓷纤维", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "大气治理", "change_pct": -0.4}, {"name": "雄安新区", "change_pct": -0.64}, {"name": "耐火材料", "change_pct": 0.88}, {"name": "新能源汽车", "change_pct": -0.32}, {"name": "环保", "change_pct": -0.8}, {"name": "船舶", "change_pct": -0.27}, {"name": "建筑节能", "change_pct": -0.89}, {"name": "气凝胶", "change_pct": -0.72}, {"name": "旧改", "change_pct": -0.76}]}, {"code": "002185", "name": "华天科技", "hot_rank": 53, "hot_rank_chg": -14, "stock_cnt": 5785, "price": "14.02", "change": "1.01", "market_id": "33", "circulate_market_value": "46687553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 54, "hot_rank_chg": -35, "stock_cnt": 5785, "price": "76.29", "change": "0.75", "market_id": "33", "circulate_market_value": "121107298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 55, "hot_rank_chg": 69, "stock_cnt": 5785, "price": "40.20", "change": "4.47", "market_id": "33", "circulate_market_value": "61001579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 56, "hot_rank_chg": -25, "stock_cnt": 5785, "price": "184.00", "change": "-1.60", "market_id": "33", "circulate_market_value": "42764928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600189", "name": "泉阳泉", "hot_rank": 57, "hot_rank_chg": -15, "stock_cnt": 5785, "price": "8.59", "change": "-8.62", "market_id": "17", "circulate_market_value": "6143549200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "园林", "change_pct": -0.96}, {"name": "碳中和", "change_pct": -0.66}, {"name": "振兴东北", "change_pct": -0.4}, {"name": "饮料", "change_pct": -2.61}, {"name": "林业碳汇", "change_pct": -1.38}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 58, "hot_rank_chg": 57, "stock_cnt": 5785, "price": "7.56", "change": "0.67", "market_id": "17", "circulate_market_value": "3464357900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.25}, {"name": "福建自贸/海西概念", "change_pct": -0.9}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 59, "hot_rank_chg": -25, "stock_cnt": 5785, "price": "39.43", "change": "-2.52", "market_id": "17", "circulate_market_value": "96747272000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 60, "hot_rank_chg": -39, "stock_cnt": 5785, "price": "1471.87", "change": "-0.55", "market_id": "17", "circulate_market_value": "1839957600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 61, "hot_rank_chg": 2, "stock_cnt": 5785, "price": "9.81", "change": "-10.00", "market_id": "17", "circulate_market_value": "4244528500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.88}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "光伏", "change_pct": -0.46}, {"name": "无线耳机", "change_pct": 0.98}, {"name": "华为产业链", "change_pct": -0.4}, {"name": "光伏胶膜", "change_pct": -1.35}]}, {"code": "600127", "name": "金健米业", "hot_rank": 62, "hot_rank_chg": -12, "stock_cnt": 5785, "price": "10.52", "change": "4.16", "market_id": "17", "circulate_market_value": "6751559500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -3.33}, {"name": "农业种植", "change_pct": 0.63}, {"name": "湖南国企改革", "change_pct": -0.25}, {"name": "乡村振兴", "change_pct": -0.27}, {"name": "休闲食品", "change_pct": -0.96}, {"name": "食品", "change_pct": -0.88}, {"name": "食品安全", "change_pct": -1.27}, {"name": "社区团购", "change_pct": -0.58}, {"name": "大农业", "change_pct": -0.94}, {"name": "预制菜", "change_pct": -1.37}, {"name": "人造肉", "change_pct": 0.15}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 63, "hot_rank_chg": -4, "stock_cnt": 5785, "price": "14.74", "change": "3.95", "market_id": "33", "circulate_market_value": "9730267500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600506", "name": "统一股份", "hot_rank": 64, "hot_rank_chg": -12, "stock_cnt": 5785, "price": "18.46", "change": "-5.43", "market_id": "17", "circulate_market_value": "4608070400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 65, "hot_rank_chg": 29, "stock_cnt": 5785, "price": "3.64", "change": "-1.62", "market_id": "17", "circulate_market_value": "4751910500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.67}, {"name": "高速公路", "change_pct": 0.21}, {"name": "振兴东北", "change_pct": -0.4}, {"name": "黑龙江自贸区", "change_pct": -0.59}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 66, "hot_rank_chg": -21, "stock_cnt": 5785, "price": "17.93", "change": "-5.03", "market_id": "33", "circulate_market_value": "9137672200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 67, "hot_rank_chg": -47, "stock_cnt": 5785, "price": "28.91", "change": "3.99", "market_id": "33", "circulate_market_value": "29537346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000417", "name": "合百集团", "hot_rank": 68, "hot_rank_chg": 11, "stock_cnt": 5785, "price": "6.02", "change": "1.01", "market_id": "33", "circulate_market_value": "4689745300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.08}, {"name": "新零售", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "人工智能", "change_pct": -0.39}, {"name": "安徽国企改革", "change_pct": -0.22}, {"name": "直播/短视频", "change_pct": 0.5}, {"name": "冷链", "change_pct": -0.45}, {"name": "破净股", "change_pct": -0.52}, {"name": "国企改革", "change_pct": -0.52}, {"name": "地摊经济", "change_pct": -1.13}, {"name": "首发经济", "change_pct": -0.2}]}, {"code": "000591", "name": "太阳能", "hot_rank": 69, "hot_rank_chg": 57, "stock_cnt": 5785, "price": "4.33", "change": "-5.67", "market_id": "33", "circulate_market_value": "16901203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.29}, {"name": "光伏", "change_pct": -0.46}, {"name": "储能", "change_pct": -0.62}, {"name": "破净股", "change_pct": -0.52}, {"name": "BIPV概念", "change_pct": -0.98}, {"name": "钙钛矿电池", "change_pct": 0.04}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "601366", "name": "利群股份", "hot_rank": 70, "hot_rank_chg": 400, "stock_cnt": 5785, "price": "3.78", "change": "-4.55", "market_id": "17", "circulate_market_value": "3627821400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.08}, {"name": "新零售", "change_pct": -0.53}, {"name": "智慧物流", "change_pct": -0.56}, {"name": "破净股", "change_pct": -0.52}, {"name": "智能制造", "change_pct": -0.17}, {"name": "社区团购", "change_pct": -0.58}, {"name": "华为产业链", "change_pct": -0.4}]}, {"code": "603703", "name": "盛洋科技", "hot_rank": 71, "hot_rank_chg": -17, "stock_cnt": 5785, "price": "10.30", "change": "-7.95", "market_id": "17", "circulate_market_value": "4274315800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.39}, {"name": "5G", "change_pct": -0.79}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "云计算数据中心", "change_pct": -0.87}, {"name": "LED", "change_pct": -0.97}, {"name": "卫星互联网", "change_pct": -0.16}, {"name": "铜缆高速连接器", "change_pct": -0.9}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 72, "hot_rank_chg": -15, "stock_cnt": 5785, "price": "53.73", "change": "-4.77", "market_id": "17", "circulate_market_value": "7679575800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000599", "name": "青岛双星", "hot_rank": 73, "hot_rank_chg": 102, "stock_cnt": 5785, "price": "4.18", "change": "-7.11", "market_id": "33", "circulate_market_value": "3413982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.79}, {"name": "一带一路", "change_pct": -0.71}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "石墨烯", "change_pct": -1.03}, {"name": "军民融合", "change_pct": -0.69}, {"name": "轮胎", "change_pct": -0.59}, {"name": "物联网", "change_pct": -0.41}, {"name": "山东国企改革", "change_pct": -0.66}, {"name": "中日韩自贸区", "change_pct": -2.49}, {"name": "外贸受益概念", "change_pct": -0.7}, {"name": "军工", "change_pct": -0.54}, {"name": "国企改革", "change_pct": -0.52}, {"name": "篮球", "change_pct": -2.93}, {"name": "华为产业链", "change_pct": -0.4}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 74, "hot_rank_chg": 31, "stock_cnt": 5785, "price": "5.40", "change": "-1.46", "market_id": "17", "circulate_market_value": "13599953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.08}, {"name": "工业大麻", "change_pct": 0.98}, {"name": "中药", "change_pct": -0.5}, {"name": "保健品", "change_pct": -0.19}, {"name": "民营医院", "change_pct": -0.53}, {"name": "医药", "change_pct": -0.15}, {"name": "化学原料药", "change_pct": -0.06}, {"name": "流感", "change_pct": -0.73}, {"name": "振兴东北", "change_pct": -0.4}, {"name": "食品", "change_pct": -0.88}, {"name": "肝炎概念", "change_pct": -0.47}]}, {"code": "000410", "name": "沈阳机床", "hot_rank": 75, "hot_rank_chg": -22, "stock_cnt": 5785, "price": "5.38", "change": "-7.72", "market_id": "33", "circulate_market_value": "10604078600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": -0.67}, {"name": "工业自动化", "change_pct": -0.07}, {"name": "智能制造", "change_pct": -0.17}, {"name": "工业互联网", "change_pct": -0.22}, {"name": "振兴东北", "change_pct": -0.4}, {"name": "工业母机", "change_pct": -0.08}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "603131", "name": "上海沪工", "hot_rank": 76, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "17.13", "change": "10.02", "market_id": "17", "circulate_market_value": "5771220700.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "商业航天"}, {"code": "603258", "name": "电魂网络", "hot_rank": 77, "hot_rank_chg": 37, "stock_cnt": 5785, "price": "15.68", "change": "-6.05", "market_id": "17", "circulate_market_value": "3784232400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002949", "name": "华阳国际", "hot_rank": 78, "hot_rank_chg": 65, "stock_cnt": 5785, "price": "13.81", "change": "-9.97", "market_id": "33", "circulate_market_value": "2098093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 79, "hot_rank_chg": 17, "stock_cnt": 5785, "price": "11.95", "change": "-0.83", "market_id": "17", "circulate_market_value": "24993929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.64}, {"name": "半导体", "change_pct": 1.08}, {"name": "光伏", "change_pct": -0.46}, {"name": "风电", "change_pct": -0.57}, {"name": "江苏国企改革", "change_pct": -0.78}, {"name": "国产芯片", "change_pct": 1.02}, {"name": "BIPV概念", "change_pct": -0.98}, {"name": "内存", "change_pct": 0.3}, {"name": "国企改革", "change_pct": -0.52}, {"name": "闪存", "change_pct": 0.23}, {"name": "中芯国际概念股", "change_pct": 1.86}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 80, "hot_rank_chg": 50, "stock_cnt": 5785, "price": "8.64", "change": "-5.26", "market_id": "17", "circulate_market_value": "2542770300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.39}, {"name": "中日韩自贸区", "change_pct": -2.49}, {"name": "新能源汽车", "change_pct": -0.32}, {"name": "振兴东北", "change_pct": -0.4}, {"name": "国企改革", "change_pct": -0.52}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "001317", "name": "三羊马", "hot_rank": 81, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "50.21", "change": "-8.29", "market_id": "33", "circulate_market_value": "4293081400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 82, "hot_rank_chg": -56, "stock_cnt": 5785, "price": "8.48", "change": "-1.28", "market_id": "17", "circulate_market_value": "2286311600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.38}, {"name": "高股息", "change_pct": 0.1}, {"name": "银行", "change_pct": 0.29}, {"name": "白马股", "change_pct": 0.04}, {"name": "破净股", "change_pct": -0.52}, {"name": "大金融", "change_pct": -0.18}]}, {"code": "603598", "name": "引力传媒", "hot_rank": 83, "hot_rank_chg": 165, "stock_cnt": 5785, "price": "19.69", "change": "10.00", "market_id": "17", "circulate_market_value": "5320499900.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI短剧"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5785, "price": "27.48", "change": "0.11", "market_id": "17", "circulate_market_value": "566137280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 85, "hot_rank_chg": 10, "stock_cnt": 5785, "price": "17.38", "change": "10.00", "market_id": "33", "circulate_market_value": "9815377700.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "创新药"}, {"code": "300006", "name": "莱美药业", "hot_rank": 86, "hot_rank_chg": -3, "stock_cnt": 5785, "price": "9.39", "change": "2.85", "market_id": "33", "circulate_market_value": "9914158200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.45}, {"name": "医疗器械", "change_pct": -1.08}, {"name": "医药", "change_pct": -0.15}, {"name": "疫苗", "change_pct": -0.43}, {"name": "化学原料药", "change_pct": -0.06}, {"name": "肝炎概念", "change_pct": -0.47}, {"name": "干细胞", "change_pct": -0.44}, {"name": "眼科", "change_pct": -0.47}, {"name": "肿瘤疫苗", "change_pct": -0.18}]}, {"code": "603259", "name": "药明康德", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5785, "price": "141.61", "change": "4.68", "market_id": "17", "circulate_market_value": "350241220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 88, "hot_rank_chg": -55, "stock_cnt": 5785, "price": "766.20", "change": "-0.23", "market_id": "17", "circulate_market_value": "481827940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 89, "hot_rank_chg": 178, "stock_cnt": 5785, "price": "8.93", "change": "9.97", "market_id": "33", "circulate_market_value": "9465399700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": 0.98}, {"name": "电子烟", "change_pct": 0.37}, {"name": "一带一路", "change_pct": -0.71}, {"name": "造纸", "change_pct": -1.11}, {"name": "包装印刷", "change_pct": -0.97}, {"name": "卫星互联网", "change_pct": -0.16}, {"name": "太空算力", "change_pct": 1.82}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 90, "hot_rank_chg": -19, "stock_cnt": 5785, "price": "6.69", "change": "1.21", "market_id": "33", "circulate_market_value": "12811968500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.9}, {"name": "林业", "change_pct": -1.18}, {"name": "碳中和", "change_pct": -0.66}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "601138", "name": "工业富联", "hot_rank": 91, "hot_rank_chg": -36, "stock_cnt": 5785, "price": "41.97", "change": "0.05", "market_id": "17", "circulate_market_value": "832856550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 92, "hot_rank_chg": -31, "stock_cnt": 5785, "price": "8.03", "change": "4.56", "market_id": "33", "circulate_market_value": "13064760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.08}, {"name": "电竞", "change_pct": 0.2}, {"name": "手游", "change_pct": 0.92}, {"name": "人工智能", "change_pct": -0.39}, {"name": "游戏", "change_pct": 0.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.96}, {"name": "腾讯概念股", "change_pct": -0.52}, {"name": "传媒", "change_pct": 0.36}, {"name": "快手概念股", "change_pct": 0.18}, {"name": "元宇宙", "change_pct": -0.06}, {"name": "虚拟数字人", "change_pct": 0.15}, {"name": "东数西算/算力", "change_pct": -0.9}, {"name": "web3.0", "change_pct": -0.83}, {"name": "AIGC概念", "change_pct": 0.05}, {"name": "数据要素", "change_pct": -0.86}, {"name": "字节跳动概念股", "change_pct": 0.04}, {"name": "AI营销", "change_pct": 0.6}, {"name": "ChatGPT", "change_pct": -0.2}, {"name": "智能眼镜/MR头显", "change_pct": 0.7}, {"name": "AI大模型/智能体", "change_pct": -0.57}, {"name": "人形机器人", "change_pct": 1.07}, {"name": "短剧/互动影游", "change_pct": 1.2}, {"name": "多模态", "change_pct": 0.05}, {"name": "AI视频", "change_pct": 0.74}, {"name": "IP经济/谷子经济", "change_pct": 0.14}, {"name": "小红书概念股", "change_pct": 0.05}]}, {"code": "300085", "name": "银之杰", "hot_rank": 93, "hot_rank_chg": -69, "stock_cnt": 5785, "price": "28.94", "change": "0.28", "market_id": "33", "circulate_market_value": "17268704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 94, "hot_rank_chg": -32, "stock_cnt": 5785, "price": "120.84", "change": "-1.52", "market_id": "33", "circulate_market_value": "104550157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000096", "name": "广聚能源", "hot_rank": 95, "hot_rank_chg": 3910, "stock_cnt": 5785, "price": "8.46", "change": "10.01", "market_id": "33", "circulate_market_value": "4321774100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "成品油", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -1.14}, {"name": "石油化工", "change_pct": -1.28}, {"name": "云计算数据中心", "change_pct": -0.87}, {"name": "粤港澳大湾区", "change_pct": -0.75}, {"name": "油气改革", "change_pct": -0.8}]}, {"code": "600206", "name": "有研新材", "hot_rank": 96, "hot_rank_chg": 24, "stock_cnt": 5785, "price": "32.51", "change": "2.46", "market_id": "17", "circulate_market_value": "27521449000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 97, "hot_rank_chg": -11, "stock_cnt": 5785, "price": "88.41", "change": "-4.11", "market_id": "33", "circulate_market_value": "69492890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 98, "hot_rank_chg": 53, "stock_cnt": 5785, "price": "44.79", "change": "9.99", "market_id": "17", "circulate_market_value": "13368858700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据采集手套"}, {"code": "002094", "name": "青岛金王", "hot_rank": 99, "hot_rank_chg": 51, "stock_cnt": 5785, "price": "4.56", "change": "-5.39", "market_id": "33", "circulate_market_value": "3148468200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.08}, {"name": "债转股 · AMC", "change_pct": -1.38}, {"name": "新零售", "change_pct": -0.53}, {"name": "中日韩自贸区", "change_pct": -2.49}, {"name": "腾讯概念股", "change_pct": -0.52}, {"name": "医美", "change_pct": -1.28}, {"name": "网红/MCN", "change_pct": -0.34}, {"name": "C2M", "change_pct": -0.63}, {"name": "化妆品", "change_pct": -1.51}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "603778", "name": "国晟科技", "hot_rank": 100, "hot_rank_chg": 389, "stock_cnt": 5785, "price": "6.42", "change": "-7.63", "market_id": "17", "circulate_market_value": "4127142900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "园林", "change_pct": -0.96}, {"name": "光伏", "change_pct": -0.46}, {"name": "固态电池", "change_pct": -0.89}, {"name": "异质结电池HJT", "change_pct": -0.1}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};