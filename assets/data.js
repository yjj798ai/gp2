const UPDATE_TIME = "2026-09-14 03:00";
const THS_HOT = [
  {
    "name": "网络安全",
    "rise": 1.47,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "MLCC概念",
    "rise": 3.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "PCB概念",
    "rise": 1.95,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续114天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.06,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续291天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 2.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续121天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "培育钻石",
    "rise": 4.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI应用",
    "rise": 0.74,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续49天上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "粮食概念",
    "rise": -1.76,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "兵装重组概念",
    "rise": -3.29,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "存储芯片",
    "rise": 0.68,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续244天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "数据安全",
    "rise": 1.48,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885942"
  },
  {
    "name": "光纤概念",
    "rise": -0.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续120天上榜",
    "rankChg": 0,
    "etfName": "科创国寿LOF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": 0.63,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续155天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "数字货币",
    "rise": 0.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "EDR概念",
    "rise": 2.72,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885943"
  },
  {
    "name": "液冷服务器",
    "rise": 0.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "电子身份证",
    "rise": 1.08,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885975"
  },
  {
    "name": "猪肉",
    "rise": -1.54,
    "rate": 0,
    "tag": "",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "军工",
    "rise": 0.13,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "商业航天",
    "rise": 0.38,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续220天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  }
];
const THS_EVENTS = [
  {
    "title": "AI算力革命拓展应用边界 培育钻石概念异动拉升",
    "desc": "",
    "heat": 505932,
    "direction": "培育钻石",
    "themes": [
      "金刚石散热",
      "培育钻石"
    ],
    "stocks": [
      {
        "name": "英诺激光",
        "code": "301021",
        "chg": 14.255034
      }
    ]
  },
  {
    "title": "MLCC龙头停产部分产品",
    "desc": "",
    "heat": 345434,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "双星新材",
        "code": "002585",
        "chg": 10.040161
      }
    ]
  },
  {
    "title": "Anthropic CEO呼吁放缓AI，马斯克奥尔特曼赞同",
    "desc": "",
    "heat": 219793,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "网络安全"
    ],
    "stocks": [
      {
        "name": "永信至诚",
        "code": "688244",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "机器人开始“拼皮肤”相关企业订单爆发 机构聚焦新赛道",
    "desc": "",
    "heat": 207074,
    "direction": "机器人皮肤",
    "themes": [
      "机器人皮肤",
      "人形机器人",
      "机器人概念"
    ],
    "stocks": [
      {
        "name": "满坤科技",
        "code": "301132",
        "chg": 20.004112
      }
    ]
  },
  {
    "title": "美股三大指数集体收涨 戴尔科技大涨11%",
    "desc": "",
    "heat": 187274,
    "direction": "戴尔科技",
    "themes": [
      "戴尔科技"
    ],
    "stocks": [
      {
        "name": "晶华新材",
        "code": "603683",
        "chg": 6.591212
      }
    ]
  },
  {
    "title": "第二十七届中国国际光电博览会在深圳开幕 AI和国产化双轮驱动 光通信全产业链持续高景气",
    "desc": "",
    "heat": 185457,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "满坤科技",
        "code": "301132",
        "chg": 20.004112
      }
    ]
  },
  {
    "title": "国常会部署算力网建设：多层次布局与算电协同并进",
    "desc": "",
    "heat": 157431,
    "direction": "算力网",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "莲花控股",
        "code": "600186",
        "chg": 10.016694
      }
    ]
  },
  {
    "title": "中国电信研究院预计 2026年我国词元消耗量将达10亿亿",
    "desc": "",
    "heat": 151652,
    "direction": "词元经济",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "莲花控股",
        "code": "600186",
        "chg": 10.016694
      }
    ]
  },
  {
    "title": "三部门发布数字乡村高质量发展行动计划",
    "desc": "",
    "heat": 20598,
    "direction": "数字乡村",
    "themes": [
      "数字乡村"
    ],
    "stocks": [
      {
        "name": "天亿马",
        "code": "301178",
        "chg": 5.834502
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "陶瓷基板",
    "change": "+4.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+3.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+3.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+2.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "口含烟",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "两轮车",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "+2.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车整车",
    "change": "+2.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+2.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 1,
    "hot_rank_chg": 5,
    "stock_cnt": 5841,
    "price": "2.85",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "27113065000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "哪吒重整",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.85
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.74
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.05
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.2
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.05
      },
      {
        "name": "低价股",
        "change_pct": 0.23
      },
      {
        "name": "减速器",
        "change_pct": 1.19
      },
      {
        "name": "华为汽车",
        "change_pct": 1.46
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5841,
    "price": "10.96",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "9717046000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "MLCC离型膜",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.76
      },
      {
        "name": "手机产业链",
        "change_pct": 1.26
      },
      {
        "name": "超高清视频",
        "change_pct": 1.01
      },
      {
        "name": "锂电池",
        "change_pct": 1.36
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "OLED",
        "change_pct": 1.86
      },
      {
        "name": "包装印刷",
        "change_pct": 0.93
      },
      {
        "name": "光伏",
        "change_pct": 0.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.2
      },
      {
        "name": "小米概念股",
        "change_pct": 1.3
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.97
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.63
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.84
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 11,
    "hot_rank_chg": 10,
    "stock_cnt": 5841,
    "price": "10.86",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "5083800200.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "5",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": -0.59
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "广西概念",
        "change_pct": -0.29
      },
      {
        "name": "低空经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 12,
    "hot_rank_chg": 14,
    "stock_cnt": 5841,
    "price": "7.92",
    "change": "-2.58",
    "market_id": "33",
    "circulate_market_value": "5193191700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.25
      },
      {
        "name": "新零售",
        "change_pct": 0.42
      },
      {
        "name": "农业种植",
        "change_pct": -3.22
      },
      {
        "name": "冷链",
        "change_pct": 0.41
      },
      {
        "name": "大农业",
        "change_pct": -0.61
      },
      {
        "name": "预制菜",
        "change_pct": -0.46
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.63
      },
      {
        "name": "免税店概念",
        "change_pct": -0.64
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 14,
    "hot_rank_chg": 55,
    "stock_cnt": 5841,
    "price": "7.40",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "8634684000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.9
      },
      {
        "name": "国产软件",
        "change_pct": 1.13
      },
      {
        "name": "一带一路",
        "change_pct": 0.2
      },
      {
        "name": "量子通信",
        "change_pct": 0.91
      },
      {
        "name": "人工智能",
        "change_pct": 0.7
      },
      {
        "name": "网络安全",
        "change_pct": 1.99
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.6
      },
      {
        "name": "物联网",
        "change_pct": 0.68
      },
      {
        "name": "大数据",
        "change_pct": 0.55
      },
      {
        "name": "破净股",
        "change_pct": 0.35
      },
      {
        "name": "数字经济",
        "change_pct": 0.58
      },
      {
        "name": "国产芯片",
        "change_pct": 0.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.47
      },
      {
        "name": "信创",
        "change_pct": 1.25
      },
      {
        "name": "华为昇腾",
        "change_pct": 1.31
      },
      {
        "name": "跨境支付",
        "change_pct": 0.8
      },
      {
        "name": "web3.0",
        "change_pct": 0.33
      },
      {
        "name": "数字人民币",
        "change_pct": 0.85
      },
      {
        "name": "智慧政务",
        "change_pct": 0.78
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.71
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.21
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.26
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.17
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "回购",
        "change_pct": 0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.81
      },
      {
        "name": "智能电网",
        "change_pct": 0.58
      },
      {
        "name": "低空经济",
        "change_pct": 0.13
      },
      {
        "name": "量子计算",
        "change_pct": 1.16
      },
      {
        "name": "财税改革",
        "change_pct": 1.78
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 15,
    "hot_rank_chg": 0,
    "stock_cnt": 5841,
    "price": "2.33",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "11748992000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "A0车型",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": 2.43
      },
      {
        "name": "汽车整车",
        "change_pct": 2.52
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.2
      },
      {
        "name": "低价股",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 25,
    "hot_rank_chg": 0,
    "stock_cnt": 5841,
    "price": "12.97",
    "change": "-2.26",
    "market_id": "17",
    "circulate_market_value": "7714925500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.44
      },
      {
        "name": "VR&AR",
        "change_pct": 0.45
      },
      {
        "name": "装修装饰",
        "change_pct": 0.38
      },
      {
        "name": "数字经济",
        "change_pct": 0.58
      },
      {
        "name": "百度概念股",
        "change_pct": 0.21
      },
      {
        "name": "全息概念",
        "change_pct": 0.18
      },
      {
        "name": "NFT",
        "change_pct": -0.75
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.06
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.06
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.87
      },
      {
        "name": "多模态",
        "change_pct": 0.56
      },
      {
        "name": "AI视频",
        "change_pct": -0.43
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 28,
    "hot_rank_chg": 26,
    "stock_cnt": 5841,
    "price": "4.31",
    "change": "-8.88",
    "market_id": "17",
    "circulate_market_value": "8391204200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.25
      },
      {
        "name": "农业种植",
        "change_pct": -3.22
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "土地流转",
        "change_pct": -1.55
      },
      {
        "name": "农垦",
        "change_pct": -2.88
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.88
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -1.87
      },
      {
        "name": "大农业",
        "change_pct": -0.61
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "601360",
    "name": "三六零",
    "hot_rank": 31,
    "hot_rank_chg": 93,
    "stock_cnt": 5841,
    "price": "9.06",
    "change": "3.66",
    "market_id": "17",
    "circulate_market_value": "63415994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.9
      },
      {
        "name": "国产软件",
        "change_pct": 1.13
      },
      {
        "name": "手游",
        "change_pct": -0.49
      },
      {
        "name": "人工智能",
        "change_pct": 0.7
      },
      {
        "name": "网络安全",
        "change_pct": 1.99
      },
      {
        "name": "物联网",
        "change_pct": 0.68
      },
      {
        "name": "大数据",
        "change_pct": 0.55
      },
      {
        "name": "智慧城市",
        "change_pct": 0.52
      },
      {
        "name": "智慧安防",
        "change_pct": 0.39
      },
      {
        "name": "国产操作系统",
        "change_pct": 1.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.65
      },
      {
        "name": "华为海思",
        "change_pct": 0.66
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.71
      },
      {
        "name": "AI营销",
        "change_pct": -0.57
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.91
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.58
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.81
      },
      {
        "name": "多模态",
        "change_pct": 0.56
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.35
      },
      {
        "name": "区块链",
        "change_pct": 0.45
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 32,
    "hot_rank_chg": 70,
    "stock_cnt": 5841,
    "price": "9.87",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "5209406500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -3.22
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "棉花",
        "change_pct": -2.7
      },
      {
        "name": "大农业",
        "change_pct": -0.61
      },
      {
        "name": "供销社",
        "change_pct": -1.22
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 33,
    "hot_rank_chg": 27,
    "stock_cnt": 5841,
    "price": "12.57",
    "change": "-4.55",
    "market_id": "17",
    "circulate_market_value": "4729340800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "物业管理",
        "change_pct": 0.09
      },
      {
        "name": "免税店概念",
        "change_pct": -0.64
      },
      {
        "name": "地摊经济",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "002161",
    "name": "远望谷",
    "hot_rank": 34,
    "hot_rank_chg": 14,
    "stock_cnt": 5841,
    "price": "7.24",
    "change": "-9.95",
    "market_id": "33",
    "circulate_market_value": "5354771700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.37
      },
      {
        "name": "车联网/车路云",
        "change_pct": 0.9
      },
      {
        "name": "新零售",
        "change_pct": 0.42
      },
      {
        "name": "光通信",
        "change_pct": -0.24
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.1
      },
      {
        "name": "电子车牌",
        "change_pct": -0.64
      },
      {
        "name": "物联网",
        "change_pct": 0.68
      },
      {
        "name": "智慧城市",
        "change_pct": 0.52
      },
      {
        "name": "智慧物流",
        "change_pct": 0.18
      },
      {
        "name": "智能制造",
        "change_pct": 1.0
      },
      {
        "name": "国产芯片",
        "change_pct": 0.21
      },
      {
        "name": "食品安全",
        "change_pct": 0.64
      },
      {
        "name": "电子身份证",
        "change_pct": 0.54
      },
      {
        "name": "烟草",
        "change_pct": 1.19
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.81
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "002201",
    "name": "九鼎新材",
    "hot_rank": 35,
    "hot_rank_chg": -24,
    "stock_cnt": 5841,
    "price": "11.34",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "6820925300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.32
      },
      {
        "name": "风电",
        "change_pct": 0.36
      },
      {
        "name": "玻纤",
        "change_pct": 1.13
      },
      {
        "name": "航天",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "002790",
    "name": "瑞尔特",
    "hot_rank": 37,
    "hot_rank_chg": 7,
    "stock_cnt": 5841,
    "price": "8.44",
    "change": "-9.35",
    "market_id": "33",
    "circulate_market_value": "2200286900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": 1.12
      },
      {
        "name": "家电",
        "change_pct": 0.63
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.0
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 38,
    "hot_rank_chg": 272,
    "stock_cnt": 5841,
    "price": "11.64",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "7972263900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.47
      },
      {
        "name": "核电",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "充电桩",
        "change_pct": 0.68
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.6
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.2
      },
      {
        "name": "储能",
        "change_pct": 0.78
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "智能电网",
        "change_pct": 0.58
      },
      {
        "name": "核聚变",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002560",
    "name": "通达股份",
    "hot_rank": 42,
    "hot_rank_chg": -11,
    "stock_cnt": 5841,
    "price": "7.57",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4794429100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.32
      },
      {
        "name": "医疗器械",
        "change_pct": 1.34
      },
      {
        "name": "通用航空",
        "change_pct": -1.08
      },
      {
        "name": "一带一路",
        "change_pct": 0.2
      },
      {
        "name": "充电桩",
        "change_pct": 0.68
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.6
      },
      {
        "name": "大飞机",
        "change_pct": -0.43
      },
      {
        "name": "军民融合",
        "change_pct": -0.08
      },
      {
        "name": "光伏",
        "change_pct": 0.81
      },
      {
        "name": "有色金属",
        "change_pct": 0.36
      },
      {
        "name": "军工",
        "change_pct": -0.38
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.2
      },
      {
        "name": "特高压",
        "change_pct": 0.27
      },
      {
        "name": "呼吸机",
        "change_pct": 0.95
      },
      {
        "name": "智能电网",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 43,
    "hot_rank_chg": 35,
    "stock_cnt": 5841,
    "price": "7.29",
    "change": "4.29",
    "market_id": "17",
    "circulate_market_value": "18359937000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.25
      },
      {
        "name": "工业大麻",
        "change_pct": 0.77
      },
      {
        "name": "中药",
        "change_pct": 1.63
      },
      {
        "name": "强势人气股",
        "change_pct": 0.42
      },
      {
        "name": "保健品",
        "change_pct": 1.31
      },
      {
        "name": "民营医院",
        "change_pct": 1.35
      },
      {
        "name": "医药",
        "change_pct": 2.2
      },
      {
        "name": "化学原料药",
        "change_pct": 1.88
      },
      {
        "name": "流感",
        "change_pct": 1.71
      },
      {
        "name": "振兴东北",
        "change_pct": 0.42
      },
      {
        "name": "食品",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600876",
    "name": "凯盛新能",
    "hot_rank": 44,
    "hot_rank_chg": 8,
    "stock_cnt": 5841,
    "price": "9.57",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3786609400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "光伏玻璃",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.08
      },
      {
        "name": "玻璃",
        "change_pct": 0.32
      },
      {
        "name": "光伏",
        "change_pct": 0.81
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 48,
    "hot_rank_chg": 23,
    "stock_cnt": 5841,
    "price": "5.01",
    "change": "-2.72",
    "market_id": "17",
    "circulate_market_value": "5560717200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.34
      },
      {
        "name": "甲醇",
        "change_pct": -0.55
      },
      {
        "name": "煤化工",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 49,
    "hot_rank_chg": 39,
    "stock_cnt": 5841,
    "price": "3.66",
    "change": "-8.73",
    "market_id": "33",
    "circulate_market_value": "6569034100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": -0.68
      },
      {
        "name": "调味品",
        "change_pct": -0.28
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.08
      },
      {
        "name": "白糖",
        "change_pct": -5.93
      },
      {
        "name": "食品",
        "change_pct": 0.25
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -1.87
      },
      {
        "name": "物业管理",
        "change_pct": 0.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "饮料",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 50,
    "hot_rank_chg": 42,
    "stock_cnt": 5841,
    "price": "7.04",
    "change": "-0.28",
    "market_id": "17",
    "circulate_market_value": "14299115000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.08
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.75
      },
      {
        "name": "火电",
        "change_pct": 0.54
      },
      {
        "name": "风电",
        "change_pct": 0.36
      },
      {
        "name": "储能",
        "change_pct": 0.78
      },
      {
        "name": "碳中和",
        "change_pct": 0.63
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "000839",
    "name": "国安股份",
    "hot_rank": 51,
    "hot_rank_chg": 176,
    "stock_cnt": 5841,
    "price": "3.11",
    "change": "9.89",
    "market_id": "33",
    "circulate_market_value": "12190660000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "内容审核",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 0.66
      },
      {
        "name": "央企改革",
        "change_pct": -0.08
      },
      {
        "name": "金融科技",
        "change_pct": 0.41
      },
      {
        "name": "人工智能",
        "change_pct": 0.7
      },
      {
        "name": "低价股",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.81
      }
    ]
  },
  {
    "code": "600359",
    "name": "新农开发",
    "hot_rank": 56,
    "hot_rank_chg": 35,
    "stock_cnt": 5841,
    "price": "8.75",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "3338237200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -3.22
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.13
      },
      {
        "name": "农垦",
        "change_pct": -2.88
      },
      {
        "name": "棉花",
        "change_pct": -2.7
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "大农业",
        "change_pct": -0.61
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 57,
    "hot_rank_chg": -25,
    "stock_cnt": 5841,
    "price": "10.52",
    "change": "-2.50",
    "market_id": "17",
    "circulate_market_value": "12017427000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.64
      },
      {
        "name": "核电",
        "change_pct": 0.16
      },
      {
        "name": "大飞机",
        "change_pct": -0.43
      },
      {
        "name": "大气治理",
        "change_pct": 0.65
      },
      {
        "name": "玻纤",
        "change_pct": 1.13
      },
      {
        "name": "环保",
        "change_pct": 0.7
      },
      {
        "name": "核污染防治",
        "change_pct": 0.59
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "生物安全",
        "change_pct": 0.47
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 58,
    "hot_rank_chg": 349,
    "stock_cnt": 5841,
    "price": "10.25",
    "change": "0.69",
    "market_id": "33",
    "circulate_market_value": "5977908600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.21
      },
      {
        "name": "一带一路",
        "change_pct": 0.2
      },
      {
        "name": "天然气",
        "change_pct": 0.39
      },
      {
        "name": "油气改革",
        "change_pct": 0.16
      },
      {
        "name": "页岩气",
        "change_pct": 0.28
      },
      {
        "name": "深地经济",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 59,
    "hot_rank_chg": -3,
    "stock_cnt": 5841,
    "price": "7.68",
    "change": "-0.90",
    "market_id": "33",
    "circulate_market_value": "14727061000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.06
      },
      {
        "name": "林业",
        "change_pct": 0.06
      },
      {
        "name": "碳中和",
        "change_pct": 0.63
      },
      {
        "name": "自贸区",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "600929",
    "name": "雪天盐业",
    "hot_rank": 61,
    "hot_rank_chg": 115,
    "stock_cnt": 5841,
    "price": "6.18",
    "change": "2.32",
    "market_id": "17",
    "circulate_market_value": "10135899900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.4
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.03
      },
      {
        "name": "调味品",
        "change_pct": -0.28
      },
      {
        "name": "纯碱",
        "change_pct": 0.49
      },
      {
        "name": "烧碱",
        "change_pct": 0.56
      },
      {
        "name": "复牌股",
        "change_pct": 1.14
      },
      {
        "name": "石墨电极",
        "change_pct": 0.63
      },
      {
        "name": "储能",
        "change_pct": 0.77
      },
      {
        "name": "食品",
        "change_pct": 0.23
      },
      {
        "name": "钠电池",
        "change_pct": 1.54
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "双氧水",
        "change_pct": 0.27
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 65,
    "hot_rank_chg": 70,
    "stock_cnt": 5841,
    "price": "5.30",
    "change": "-6.69",
    "market_id": "33",
    "circulate_market_value": "5249084200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.09
      },
      {
        "name": "旅游",
        "change_pct": -0.62
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 73,
    "hot_rank_chg": 10,
    "stock_cnt": 5841,
    "price": "5.32",
    "change": "-0.19",
    "market_id": "33",
    "circulate_market_value": "188153150000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.8
      },
      {
        "name": "手机产业链",
        "change_pct": 1.24
      },
      {
        "name": "超高清视频",
        "change_pct": 0.99
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.37
      },
      {
        "name": "电竞",
        "change_pct": -0.3
      },
      {
        "name": "半导体",
        "change_pct": 0.82
      },
      {
        "name": "人工智能",
        "change_pct": 0.72
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.04
      },
      {
        "name": "VR&AR",
        "change_pct": 0.45
      },
      {
        "name": "OLED",
        "change_pct": 1.81
      },
      {
        "name": "京津冀",
        "change_pct": 0.4
      },
      {
        "name": "物联网",
        "change_pct": 0.69
      },
      {
        "name": "指纹识别",
        "change_pct": 1.3
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.04
      },
      {
        "name": "白马股",
        "change_pct": -0.11
      },
      {
        "name": "智能制造",
        "change_pct": 1.0
      },
      {
        "name": "小米概念股",
        "change_pct": 1.29
      },
      {
        "name": "国产芯片",
        "change_pct": 0.19
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.93
      },
      {
        "name": "全息概念",
        "change_pct": 0.17
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.9
      },
      {
        "name": "MicroLED",
        "change_pct": 2.46
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.56
      },
      {
        "name": "智能手表",
        "change_pct": 0.72
      },
      {
        "name": "MiniLED",
        "change_pct": 2.21
      },
      {
        "name": "传感器",
        "change_pct": 1.31
      },
      {
        "name": "大硅片",
        "change_pct": 0.04
      },
      {
        "name": "AI PC",
        "change_pct": 1.21
      },
      {
        "name": "华为产业链",
        "change_pct": 0.79
      },
      {
        "name": "回购",
        "change_pct": 0.7
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.16
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.85
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.47
      }
    ]
  },
  {
    "code": "605069",
    "name": "正和生态",
    "hot_rank": 77,
    "hot_rank_chg": 18,
    "stock_cnt": 5841,
    "price": "12.65",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "2677976900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "智谱AI",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.08
      },
      {
        "name": "京津冀",
        "change_pct": 0.4
      },
      {
        "name": "园林",
        "change_pct": 0.45
      },
      {
        "name": "污水处理",
        "change_pct": 0.61
      },
      {
        "name": "环保",
        "change_pct": 0.68
      },
      {
        "name": "数字经济",
        "change_pct": 0.62
      },
      {
        "name": "土壤修复",
        "change_pct": 0.67
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.37
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.83
      },
      {
        "name": "智谱AI",
        "change_pct": 0.57
      },
      {
        "name": "海洋经济",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 87,
    "hot_rank_chg": 153,
    "stock_cnt": 5841,
    "price": "9.72",
    "change": "-2.12",
    "market_id": "17",
    "circulate_market_value": "8446221000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.27
      },
      {
        "name": "快递物流",
        "change_pct": 0.35
      },
      {
        "name": "新零售",
        "change_pct": 0.46
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.06
      },
      {
        "name": "旅游",
        "change_pct": -0.62
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.42
      },
      {
        "name": "物业管理",
        "change_pct": 0.12
      },
      {
        "name": "免税店概念",
        "change_pct": -0.56
      },
      {
        "name": "自贸区",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "601949",
    "name": "中国出版",
    "hot_rank": 88,
    "hot_rank_chg": 74,
    "stock_cnt": 5841,
    "price": "5.74",
    "change": "-8.31",
    "market_id": "17",
    "circulate_market_value": "10947816300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.09
      },
      {
        "name": "中字头",
        "change_pct": -0.33
      },
      {
        "name": "数字经济",
        "change_pct": 0.62
      },
      {
        "name": "知识产权",
        "change_pct": -0.11
      },
      {
        "name": "传媒",
        "change_pct": -0.76
      },
      {
        "name": "NFT",
        "change_pct": -0.77
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      },
      {
        "name": "知识付费",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 90,
    "hot_rank_chg": 42,
    "stock_cnt": 5841,
    "price": "6.87",
    "change": "-1.86",
    "market_id": "33",
    "circulate_market_value": "22855089000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 0.51
      },
      {
        "name": "核电",
        "change_pct": 0.13
      },
      {
        "name": "5G",
        "change_pct": -0.04
      },
      {
        "name": "一带一路",
        "change_pct": 0.2
      },
      {
        "name": "充电桩",
        "change_pct": 0.69
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.83
      },
      {
        "name": "风电",
        "change_pct": 0.36
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.19
      },
      {
        "name": "储能",
        "change_pct": 0.77
      },
      {
        "name": "特高压",
        "change_pct": 0.27
      },
      {
        "name": "智能电网",
        "change_pct": 0.6
      },
      {
        "name": "海洋经济",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 97,
    "hot_rank_chg": 33,
    "stock_cnt": 5841,
    "price": "11.40",
    "change": "-0.44",
    "market_id": "33",
    "circulate_market_value": "10630533100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.45
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.13
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "光伏",
        "change_pct": 0.8
      },
      {
        "name": "风电",
        "change_pct": 0.36
      },
      {
        "name": "储能",
        "change_pct": 0.77
      },
      {
        "name": "国企改革",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "002519",
    "name": "银河电子",
    "hot_rank": 98,
    "hot_rank_chg": -52,
    "stock_cnt": 5841,
    "price": "6.28",
    "change": "-0.47",
    "market_id": "33",
    "circulate_market_value": "7055230300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 0.62
      },
      {
        "name": "超高清视频",
        "change_pct": 0.99
      },
      {
        "name": "特斯拉",
        "change_pct": 0.98
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.72
      },
      {
        "name": "锂电池",
        "change_pct": 1.35
      },
      {
        "name": "人工智能",
        "change_pct": 0.72
      },
      {
        "name": "军民融合",
        "change_pct": -0.07
      },
      {
        "name": "军工",
        "change_pct": -0.38
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.19
      },
      {
        "name": "黑色家电",
        "change_pct": 0.34
      },
      {
        "name": "家电",
        "change_pct": 0.61
      },
      {
        "name": "储能",
        "change_pct": 0.77
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.9
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.05
      },
      {
        "name": "虚拟电厂",
        "change_pct": 0.25
      },
      {
        "name": "航天",
        "change_pct": -0.01
      },
      {
        "name": "华为海思",
        "change_pct": 0.66
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.25
      },
      {
        "name": "智能电网",
        "change_pct": 0.6
      },
      {
        "name": "军工信息化",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 99,
    "hot_rank_chg": 69,
    "stock_cnt": 5841,
    "price": "11.35",
    "change": "4.03",
    "market_id": "17",
    "circulate_market_value": "4368461100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 2.54
      },
      {
        "name": "股权转让",
        "change_pct": 0.32
      },
      {
        "name": "强势人气股",
        "change_pct": 0.45
      },
      {
        "name": "新疆概念",
        "change_pct": -0.16
      },
      {
        "name": "医药",
        "change_pct": 2.18
      },
      {
        "name": "流感",
        "change_pct": 1.69
      },
      {
        "name": "国资入股",
        "change_pct": 0.78
      },
      {
        "name": "减肥药",
        "change_pct": 2.22
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000981", "name": "山子高科", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5841, "price": "2.85", "change": "10.04", "market_id": "33", "circulate_market_value": "27113065000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "哪吒重整", "xgb_concepts": [{"name": "半导体", "change_pct": 0.85}, {"name": "无人驾驶", "change_pct": 0.74}, {"name": "汽车零部件", "change_pct": 1.05}, {"name": "新能源汽车", "change_pct": 1.2}, {"name": "新能源车零部件", "change_pct": 1.05}, {"name": "低价股", "change_pct": 0.23}, {"name": "减速器", "change_pct": 1.19}, {"name": "华为汽车", "change_pct": 1.46}]}, {"code": "000636", "name": "风华高科", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5841, "price": "59.18", "change": "5.70", "market_id": "33", "circulate_market_value": "67828132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5841, "price": "17.51", "change": "7.09", "market_id": "17", "circulate_market_value": "11661660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 4, "hot_rank_chg": 19, "stock_cnt": 5841, "price": "16.80", "change": "-10.02", "market_id": "17", "circulate_market_value": "7466666700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5841, "price": "15.27", "change": "10.01", "market_id": "33", "circulate_market_value": "6992918700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "清洁能源"}, {"code": "000823", "name": "超声电子", "hot_rank": 6, "hot_rank_chg": -5, "stock_cnt": 5841, "price": "22.63", "change": "10.02", "market_id": "33", "circulate_market_value": "13463315000.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "PCB"}, {"code": "600410", "name": "华胜天成", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5841, "price": "15.74", "change": "2.08", "market_id": "17", "circulate_market_value": "17258826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5841, "price": "10.96", "change": "10.04", "market_id": "33", "circulate_market_value": "9717046000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "MLCC离型膜", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.76}, {"name": "手机产业链", "change_pct": 1.26}, {"name": "超高清视频", "change_pct": 1.01}, {"name": "锂电池", "change_pct": 1.36}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "OLED", "change_pct": 1.86}, {"name": "包装印刷", "change_pct": 0.93}, {"name": "光伏", "change_pct": 0.81}, {"name": "新能源汽车", "change_pct": 1.2}, {"name": "小米概念股", "change_pct": 1.3}, {"name": "液晶面板/LCD", "change_pct": 1.97}, {"name": "可降解塑料", "change_pct": 0.63}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "PET复合铜箔", "change_pct": 1.84}]}, {"code": "600127", "name": "金健米业", "hot_rank": 9, "hot_rank_chg": 7, "stock_cnt": 5841, "price": "13.55", "change": "0.00", "market_id": "17", "circulate_market_value": "8696162600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5841, "price": "25.08", "change": "-1.06", "market_id": "17", "circulate_market_value": "55594786000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 11, "hot_rank_chg": 10, "stock_cnt": 5841, "price": "10.86", "change": "10.03", "market_id": "33", "circulate_market_value": "5083800200.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "", "xgb_concepts": [{"name": "旅游", "change_pct": -0.59}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "广西概念", "change_pct": -0.29}, {"name": "低空经济", "change_pct": 0.13}]}, {"code": "000759", "name": "中百集团", "hot_rank": 12, "hot_rank_chg": 14, "stock_cnt": 5841, "price": "7.92", "change": "-2.58", "market_id": "33", "circulate_market_value": "5193191700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.25}, {"name": "新零售", "change_pct": 0.42}, {"name": "农业种植", "change_pct": -3.22}, {"name": "冷链", "change_pct": 0.41}, {"name": "大农业", "change_pct": -0.61}, {"name": "预制菜", "change_pct": -0.46}, {"name": "国企改革", "change_pct": 0.05}, {"name": "可降解塑料", "change_pct": 0.63}, {"name": "免税店概念", "change_pct": -0.64}, {"name": "湖北国企改革", "change_pct": -0.06}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 13, "hot_rank_chg": -9, "stock_cnt": 5841, "price": "82.89", "change": "0.53", "market_id": "33", "circulate_market_value": "60122111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 14, "hot_rank_chg": 55, "stock_cnt": 5841, "price": "7.40", "change": "9.96", "market_id": "33", "circulate_market_value": "8634684000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.9}, {"name": "国产软件", "change_pct": 1.13}, {"name": "一带一路", "change_pct": 0.2}, {"name": "量子通信", "change_pct": 0.91}, {"name": "人工智能", "change_pct": 0.7}, {"name": "网络安全", "change_pct": 1.99}, {"name": "云计算数据中心", "change_pct": 0.6}, {"name": "物联网", "change_pct": 0.68}, {"name": "大数据", "change_pct": 0.55}, {"name": "破净股", "change_pct": 0.35}, {"name": "数字经济", "change_pct": 0.58}, {"name": "国产芯片", "change_pct": 0.21}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "腾讯概念股", "change_pct": 0.47}, {"name": "信创", "change_pct": 1.25}, {"name": "华为昇腾", "change_pct": 1.31}, {"name": "跨境支付", "change_pct": 0.8}, {"name": "web3.0", "change_pct": 0.33}, {"name": "数字人民币", "change_pct": 0.85}, {"name": "智慧政务", "change_pct": 0.78}, {"name": "华为鸿蒙", "change_pct": 0.71}, {"name": "华为云·鲲鹏", "change_pct": 1.21}, {"name": "卫星互联网", "change_pct": 0.26}, {"name": "智慧灯杆", "change_pct": 0.17}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "回购", "change_pct": 0.72}, {"name": "AI大模型/智能体", "change_pct": 0.81}, {"name": "智能电网", "change_pct": 0.58}, {"name": "低空经济", "change_pct": 0.13}, {"name": "量子计算", "change_pct": 1.16}, {"name": "财税改革", "change_pct": 1.78}, {"name": "DeepSeek概念股", "change_pct": 1.35}]}, {"code": "000980", "name": "众泰汽车", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5841, "price": "2.33", "change": "9.91", "market_id": "33", "circulate_market_value": "11748992000.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "A0车型", "xgb_concepts": [{"name": "新能源整车", "change_pct": 2.43}, {"name": "汽车整车", "change_pct": 2.52}, {"name": "新能源汽车", "change_pct": 1.2}, {"name": "低价股", "change_pct": 0.23}]}, {"code": "600967", "name": "内蒙一机", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5841, "price": "14.44", "change": "-3.60", "market_id": "17", "circulate_market_value": "24573915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 17, "hot_rank_chg": 7, "stock_cnt": 5841, "price": "18.71", "change": "-4.05", "market_id": "17", "circulate_market_value": "39132754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002912", "name": "中新赛克", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5841, "price": "25.86", "change": "10.00", "market_id": "33", "circulate_market_value": "4195082500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI安全"}, {"code": "600722", "name": "金牛化工", "hot_rank": 19, "hot_rank_chg": 42, "stock_cnt": 5841, "price": "17.44", "change": "2.71", "market_id": "17", "circulate_market_value": "11864775100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 20, "hot_rank_chg": 2, "stock_cnt": 5841, "price": "50.11", "change": "1.11", "market_id": "17", "circulate_market_value": "19173314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 21, "hot_rank_chg": 12, "stock_cnt": 5841, "price": "879.53", "change": "-5.02", "market_id": "33", "circulate_market_value": "975090760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 22, "hot_rank_chg": 14, "stock_cnt": 5841, "price": "14.76", "change": "1.10", "market_id": "17", "circulate_market_value": "21737153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 23, "hot_rank_chg": 20, "stock_cnt": 5841, "price": "471.11", "change": "-1.26", "market_id": "17", "circulate_market_value": "14174626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5841, "price": "63.72", "change": "-2.33", "market_id": "17", "circulate_market_value": "156346340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5841, "price": "12.97", "change": "-2.26", "market_id": "17", "circulate_market_value": "7714925500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.44}, {"name": "VR&AR", "change_pct": 0.45}, {"name": "装修装饰", "change_pct": 0.38}, {"name": "数字经济", "change_pct": 0.58}, {"name": "百度概念股", "change_pct": 0.21}, {"name": "全息概念", "change_pct": 0.18}, {"name": "NFT", "change_pct": -0.75}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "虚拟数字人", "change_pct": -0.06}, {"name": "网红/MCN", "change_pct": -0.06}, {"name": "ChatGPT", "change_pct": 0.58}, {"name": "智能眼镜/MR头显", "change_pct": 0.87}, {"name": "多模态", "change_pct": 0.56}, {"name": "AI视频", "change_pct": -0.43}]}, {"code": "603629", "name": "利通电子", "hot_rank": 26, "hot_rank_chg": 97, "stock_cnt": 5841, "price": "107.21", "change": "1.83", "market_id": "17", "circulate_market_value": "38673156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 27, "hot_rank_chg": -9, "stock_cnt": 5841, "price": "456.33", "change": "-3.73", "market_id": "17", "circulate_market_value": "185485310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 28, "hot_rank_chg": 26, "stock_cnt": 5841, "price": "4.31", "change": "-8.88", "market_id": "17", "circulate_market_value": "8391204200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.25}, {"name": "农业种植", "change_pct": -3.22}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "土地流转", "change_pct": -1.55}, {"name": "农垦", "change_pct": -2.88}, {"name": "乡村振兴", "change_pct": -0.88}, {"name": "食品", "change_pct": 0.25}, {"name": "甜味剂/代糖", "change_pct": -1.87}, {"name": "大农业", "change_pct": -0.61}, {"name": "蜜雪冰城概念股", "change_pct": 0.25}]}, {"code": "688432", "name": "有研硅", "hot_rank": 29, "hot_rank_chg": 110, "stock_cnt": 5841, "price": "46.56", "change": "2.96", "market_id": "17", "circulate_market_value": "58214055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 30, "hot_rank_chg": -1, "stock_cnt": 5841, "price": "39.09", "change": "-3.98", "market_id": "17", "circulate_market_value": "27032787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601360", "name": "三六零", "hot_rank": 31, "hot_rank_chg": 93, "stock_cnt": 5841, "price": "9.06", "change": "3.66", "market_id": "17", "circulate_market_value": "63415994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.9}, {"name": "国产软件", "change_pct": 1.13}, {"name": "手游", "change_pct": -0.49}, {"name": "人工智能", "change_pct": 0.7}, {"name": "网络安全", "change_pct": 1.99}, {"name": "物联网", "change_pct": 0.68}, {"name": "大数据", "change_pct": 0.55}, {"name": "智慧城市", "change_pct": 0.52}, {"name": "智慧安防", "change_pct": 0.39}, {"name": "国产操作系统", "change_pct": 1.46}, {"name": "东数西算/算力", "change_pct": 0.65}, {"name": "华为海思", "change_pct": 0.66}, {"name": "华为鸿蒙", "change_pct": 0.71}, {"name": "AI营销", "change_pct": -0.57}, {"name": "词元概念/Token", "change_pct": 0.91}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "ChatGPT", "change_pct": 0.58}, {"name": "AI大模型/智能体", "change_pct": 0.81}, {"name": "多模态", "change_pct": 0.56}, {"name": "DeepSeek概念股", "change_pct": 1.35}, {"name": "区块链", "change_pct": 0.45}]}, {"code": "600354", "name": "敦煌种业", "hot_rank": 32, "hot_rank_chg": 70, "stock_cnt": 5841, "price": "9.87", "change": "-10.03", "market_id": "17", "circulate_market_value": "5209406500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -3.22}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "棉花", "change_pct": -2.7}, {"name": "大农业", "change_pct": -0.61}, {"name": "供销社", "change_pct": -1.22}]}, {"code": "600865", "name": "百大集团", "hot_rank": 33, "hot_rank_chg": 27, "stock_cnt": 5841, "price": "12.57", "change": "-4.55", "market_id": "17", "circulate_market_value": "4729340800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.42}, {"name": "物业管理", "change_pct": 0.09}, {"name": "免税店概念", "change_pct": -0.64}, {"name": "地摊经济", "change_pct": -0.17}]}, {"code": "002161", "name": "远望谷", "hot_rank": 34, "hot_rank_chg": 14, "stock_cnt": 5841, "price": "7.24", "change": "-9.95", "market_id": "33", "circulate_market_value": "5354771700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.37}, {"name": "车联网/车路云", "change_pct": 0.9}, {"name": "新零售", "change_pct": 0.42}, {"name": "光通信", "change_pct": -0.24}, {"name": "高铁轨交", "change_pct": 0.1}, {"name": "电子车牌", "change_pct": -0.64}, {"name": "物联网", "change_pct": 0.68}, {"name": "智慧城市", "change_pct": 0.52}, {"name": "智慧物流", "change_pct": 0.18}, {"name": "智能制造", "change_pct": 1.0}, {"name": "国产芯片", "change_pct": 0.21}, {"name": "食品安全", "change_pct": 0.64}, {"name": "电子身份证", "change_pct": 0.54}, {"name": "烟草", "change_pct": 1.19}, {"name": "AI大模型/智能体", "change_pct": 0.81}, {"name": "IP经济/谷子经济", "change_pct": -0.22}]}, {"code": "002201", "name": "九鼎新材", "hot_rank": 35, "hot_rank_chg": -24, "stock_cnt": 5841, "price": "11.34", "change": "2.25", "market_id": "33", "circulate_market_value": "6820925300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.32}, {"name": "风电", "change_pct": 0.36}, {"name": "玻纤", "change_pct": 1.13}, {"name": "航天", "change_pct": -0.01}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 36, "hot_rank_chg": -23, "stock_cnt": 5841, "price": "45.50", "change": "1.88", "market_id": "17", "circulate_market_value": "180707210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002790", "name": "瑞尔特", "hot_rank": 37, "hot_rank_chg": 7, "stock_cnt": 5841, "price": "8.44", "change": "-9.35", "market_id": "33", "circulate_market_value": "2200286900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "家具家居", "change_pct": 1.12}, {"name": "家电", "change_pct": 0.63}, {"name": "厨卫家电", "change_pct": 0.0}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 38, "hot_rank_chg": 272, "stock_cnt": 5841, "price": "11.64", "change": "0.00", "market_id": "33", "circulate_market_value": "7972263900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.47}, {"name": "核电", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "充电桩", "change_pct": 0.68}, {"name": "云计算数据中心", "change_pct": 0.6}, {"name": "新能源汽车", "change_pct": 1.2}, {"name": "储能", "change_pct": 0.78}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "智能电网", "change_pct": 0.58}, {"name": "核聚变", "change_pct": -0.18}]}, {"code": "600371", "name": "万向德农", "hot_rank": 39, "hot_rank_chg": 12, "stock_cnt": 5841, "price": "13.72", "change": "-7.17", "market_id": "17", "circulate_market_value": "4014170200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 40, "hot_rank_chg": -20, "stock_cnt": 5841, "price": "22.79", "change": "-3.15", "market_id": "33", "circulate_market_value": "13061058800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 41, "hot_rank_chg": -13, "stock_cnt": 5841, "price": "18.79", "change": "10.01", "market_id": "33", "circulate_market_value": "10962804800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高阶HDI"}, {"code": "002560", "name": "通达股份", "hot_rank": 42, "hot_rank_chg": -11, "stock_cnt": 5841, "price": "7.57", "change": "10.03", "market_id": "33", "circulate_market_value": "4794429100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "特高压", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.32}, {"name": "医疗器械", "change_pct": 1.34}, {"name": "通用航空", "change_pct": -1.08}, {"name": "一带一路", "change_pct": 0.2}, {"name": "充电桩", "change_pct": 0.68}, {"name": "云计算数据中心", "change_pct": 0.6}, {"name": "大飞机", "change_pct": -0.43}, {"name": "军民融合", "change_pct": -0.08}, {"name": "光伏", "change_pct": 0.81}, {"name": "有色金属", "change_pct": 0.36}, {"name": "军工", "change_pct": -0.38}, {"name": "新能源汽车", "change_pct": 1.2}, {"name": "特高压", "change_pct": 0.27}, {"name": "呼吸机", "change_pct": 0.95}, {"name": "智能电网", "change_pct": 0.58}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 43, "hot_rank_chg": 35, "stock_cnt": 5841, "price": "7.29", "change": "4.29", "market_id": "17", "circulate_market_value": "18359937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.25}, {"name": "工业大麻", "change_pct": 0.77}, {"name": "中药", "change_pct": 1.63}, {"name": "强势人气股", "change_pct": 0.42}, {"name": "保健品", "change_pct": 1.31}, {"name": "民营医院", "change_pct": 1.35}, {"name": "医药", "change_pct": 2.2}, {"name": "化学原料药", "change_pct": 1.88}, {"name": "流感", "change_pct": 1.71}, {"name": "振兴东北", "change_pct": 0.42}, {"name": "食品", "change_pct": 0.25}]}, {"code": "600876", "name": "凯盛新能", "hot_rank": 44, "hot_rank_chg": 8, "stock_cnt": 5841, "price": "9.57", "change": "10.00", "market_id": "17", "circulate_market_value": "3786609400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏玻璃", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.08}, {"name": "玻璃", "change_pct": 0.32}, {"name": "光伏", "change_pct": 0.81}, {"name": "国企改革", "change_pct": 0.05}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 45, "hot_rank_chg": -3, "stock_cnt": 5841, "price": "68.77", "change": "-2.51", "market_id": "33", "circulate_market_value": "100879790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603936", "name": "博敏电子", "hot_rank": 47, "hot_rank_chg": -37, "stock_cnt": 5841, "price": "22.19", "change": "6.27", "market_id": "17", "circulate_market_value": "13988532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 48, "hot_rank_chg": 23, "stock_cnt": 5841, "price": "5.01", "change": "-2.72", "market_id": "17", "circulate_market_value": "5560717200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.34}, {"name": "甲醇", "change_pct": -0.55}, {"name": "煤化工", "change_pct": -0.68}]}, {"code": "000523", "name": "红棉股份", "hot_rank": 49, "hot_rank_chg": 39, "stock_cnt": 5841, "price": "3.66", "change": "-8.73", "market_id": "33", "circulate_market_value": "6569034100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": -0.68}, {"name": "调味品", "change_pct": -0.28}, {"name": "粤港澳大湾区", "change_pct": -0.08}, {"name": "白糖", "change_pct": -5.93}, {"name": "食品", "change_pct": 0.25}, {"name": "甜味剂/代糖", "change_pct": -1.87}, {"name": "物业管理", "change_pct": 0.09}, {"name": "国企改革", "change_pct": 0.05}, {"name": "饮料", "change_pct": 0.19}]}, {"code": "600744", "name": "华银电力", "hot_rank": 50, "hot_rank_chg": 42, "stock_cnt": 5841, "price": "7.04", "change": "-0.28", "market_id": "17", "circulate_market_value": "14299115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.08}, {"name": "电力体制改革", "change_pct": 0.75}, {"name": "火电", "change_pct": 0.54}, {"name": "风电", "change_pct": 0.36}, {"name": "储能", "change_pct": 0.78}, {"name": "碳中和", "change_pct": 0.63}, {"name": "国企改革", "change_pct": 0.05}]}, {"code": "000839", "name": "国安股份", "hot_rank": 51, "hot_rank_chg": 176, "stock_cnt": 5841, "price": "3.11", "change": "9.89", "market_id": "33", "circulate_market_value": "12190660000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "内容审核", "xgb_concepts": [{"name": "广电", "change_pct": 0.66}, {"name": "央企改革", "change_pct": -0.08}, {"name": "金融科技", "change_pct": 0.41}, {"name": "人工智能", "change_pct": 0.7}, {"name": "低价股", "change_pct": 0.23}, {"name": "国企改革", "change_pct": 0.05}, {"name": "AI大模型/智能体", "change_pct": 0.81}]}, {"code": "002384", "name": "东山精密", "hot_rank": 52, "hot_rank_chg": 11, "stock_cnt": 5841, "price": "187.51", "change": "-3.57", "market_id": "33", "circulate_market_value": "259907600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 53, "hot_rank_chg": 55, "stock_cnt": 5841, "price": "362.21", "change": "-2.48", "market_id": "17", "circulate_market_value": "242672600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 54, "hot_rank_chg": 22, "stock_cnt": 5841, "price": "16.53", "change": "9.98", "market_id": "17", "circulate_market_value": "21229125000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 55, "hot_rank_chg": -18, "stock_cnt": 5841, "price": "33.95", "change": "-1.57", "market_id": "17", "circulate_market_value": "115869641000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600359", "name": "新农开发", "hot_rank": 56, "hot_rank_chg": 35, "stock_cnt": 5841, "price": "8.75", "change": "-9.98", "market_id": "17", "circulate_market_value": "3338237200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -3.22}, {"name": "新疆国企改革", "change_pct": -1.13}, {"name": "农垦", "change_pct": -2.88}, {"name": "棉花", "change_pct": -2.7}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "大农业", "change_pct": -0.61}, {"name": "国企改革", "change_pct": 0.05}, {"name": "新冠病毒防治", "change_pct": 1.1}]}, {"code": "603601", "name": "再升科技", "hot_rank": 57, "hot_rank_chg": -25, "stock_cnt": 5841, "price": "10.52", "change": "-2.50", "market_id": "17", "circulate_market_value": "12017427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.64}, {"name": "核电", "change_pct": 0.16}, {"name": "大飞机", "change_pct": -0.43}, {"name": "大气治理", "change_pct": 0.65}, {"name": "玻纤", "change_pct": 1.13}, {"name": "环保", "change_pct": 0.7}, {"name": "核污染防治", "change_pct": 0.59}, {"name": "航天", "change_pct": -0.01}, {"name": "生物安全", "change_pct": 0.47}, {"name": "中芯国际概念股", "change_pct": 0.49}]}, {"code": "300164", "name": "通源石油", "hot_rank": 58, "hot_rank_chg": 349, "stock_cnt": 5841, "price": "10.25", "change": "0.69", "market_id": "33", "circulate_market_value": "5977908600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.21}, {"name": "一带一路", "change_pct": 0.2}, {"name": "天然气", "change_pct": 0.39}, {"name": "油气改革", "change_pct": 0.16}, {"name": "页岩气", "change_pct": 0.28}, {"name": "深地经济", "change_pct": 0.83}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 59, "hot_rank_chg": -3, "stock_cnt": 5841, "price": "7.68", "change": "-0.90", "market_id": "33", "circulate_market_value": "14727061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.06}, {"name": "林业", "change_pct": 0.06}, {"name": "碳中和", "change_pct": 0.63}, {"name": "自贸区", "change_pct": 0.15}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 60, "hot_rank_chg": -33, "stock_cnt": 5841, "price": "41.19", "change": "-2.39", "market_id": "17", "circulate_market_value": "60219566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600929", "name": "雪天盐业", "hot_rank": 61, "hot_rank_chg": 115, "stock_cnt": 5841, "price": "6.18", "change": "2.32", "market_id": "17", "circulate_market_value": "10135899900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.4}, {"name": "湖南国企改革", "change_pct": 0.03}, {"name": "调味品", "change_pct": -0.28}, {"name": "纯碱", "change_pct": 0.49}, {"name": "烧碱", "change_pct": 0.56}, {"name": "复牌股", "change_pct": 1.14}, {"name": "石墨电极", "change_pct": 0.63}, {"name": "储能", "change_pct": 0.77}, {"name": "食品", "change_pct": 0.23}, {"name": "钠电池", "change_pct": 1.54}, {"name": "国企改革", "change_pct": 0.05}, {"name": "双氧水", "change_pct": 0.27}, {"name": "AI大模型/智能体", "change_pct": 0.83}]}, {"code": "600088", "name": "中视传媒", "hot_rank": 62, "hot_rank_chg": 43, "stock_cnt": 5841, "price": "13.34", "change": "-0.45", "market_id": "17", "circulate_market_value": "5305403400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002902", "name": "铭普光磁", "hot_rank": 63, "hot_rank_chg": -28, "stock_cnt": 5841, "price": "30.28", "change": "-1.88", "market_id": "33", "circulate_market_value": "5646337200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 64, "hot_rank_chg": 18, "stock_cnt": 5841, "price": "16.70", "change": "-4.35", "market_id": "33", "circulate_market_value": "7629399300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 65, "hot_rank_chg": 70, "stock_cnt": 5841, "price": "5.30", "change": "-6.69", "market_id": "33", "circulate_market_value": "5249084200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.09}, {"name": "旅游", "change_pct": -0.62}, {"name": "虚拟数字人", "change_pct": -0.06}, {"name": "国企改革", "change_pct": 0.05}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 66, "hot_rank_chg": 44, "stock_cnt": 5841, "price": "15.15", "change": "-6.54", "market_id": "17", "circulate_market_value": "32403551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 67, "hot_rank_chg": -29, "stock_cnt": 5841, "price": "18.15", "change": "-1.73", "market_id": "17", "circulate_market_value": "11862863700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 68, "hot_rank_chg": 33, "stock_cnt": 5841, "price": "54.96", "change": "-3.10", "market_id": "17", "circulate_market_value": "247306900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 69, "hot_rank_chg": -24, "stock_cnt": 5841, "price": "13.18", "change": "10.02", "market_id": "17", "circulate_market_value": "23580843000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "601606", "name": "长城军工", "hot_rank": 70, "hot_rank_chg": -30, "stock_cnt": 5841, "price": "34.01", "change": "-5.84", "market_id": "17", "circulate_market_value": "24631008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605011", "name": "杭州热电", "hot_rank": 71, "hot_rank_chg": -5, "stock_cnt": 5841, "price": "20.36", "change": "6.99", "market_id": "17", "circulate_market_value": "8146036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002439", "name": "启明星辰", "hot_rank": 72, "hot_rank_chg": 74, "stock_cnt": 5841, "price": "13.80", "change": "3.76", "market_id": "33", "circulate_market_value": "10054109100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 73, "hot_rank_chg": 10, "stock_cnt": 5841, "price": "5.32", "change": "-0.19", "market_id": "33", "circulate_market_value": "188153150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.8}, {"name": "手机产业链", "change_pct": 1.24}, {"name": "超高清视频", "change_pct": 0.99}, {"name": "苹果产业链", "change_pct": 1.37}, {"name": "电竞", "change_pct": -0.3}, {"name": "半导体", "change_pct": 0.82}, {"name": "人工智能", "change_pct": 0.72}, {"name": "互联网医疗", "change_pct": 1.04}, {"name": "VR&AR", "change_pct": 0.45}, {"name": "OLED", "change_pct": 1.81}, {"name": "京津冀", "change_pct": 0.4}, {"name": "物联网", "change_pct": 0.69}, {"name": "指纹识别", "change_pct": 1.3}, {"name": "汽车零部件", "change_pct": 1.04}, {"name": "白马股", "change_pct": -0.11}, {"name": "智能制造", "change_pct": 1.0}, {"name": "小米概念股", "change_pct": 1.29}, {"name": "国产芯片", "change_pct": 0.19}, {"name": "液晶面板/LCD", "change_pct": 1.93}, {"name": "全息概念", "change_pct": 0.17}, {"name": "理想汽车概念股", "change_pct": 0.9}, {"name": "MicroLED", "change_pct": 2.46}, {"name": "钙钛矿电池", "change_pct": 0.56}, {"name": "智能手表", "change_pct": 0.72}, {"name": "MiniLED", "change_pct": 2.21}, {"name": "传感器", "change_pct": 1.31}, {"name": "大硅片", "change_pct": 0.04}, {"name": "AI PC", "change_pct": 1.21}, {"name": "华为产业链", "change_pct": 0.79}, {"name": "回购", "change_pct": 0.7}, {"name": "光电共封装CPO", "change_pct": -1.16}, {"name": "智能眼镜/MR头显", "change_pct": 0.85}, {"name": "玻璃基板封装", "change_pct": 1.47}]}, {"code": "002600", "name": "领益智造", "hot_rank": 74, "hot_rank_chg": -33, "stock_cnt": 5841, "price": "13.29", "change": "1.45", "market_id": "33", "circulate_market_value": "95688009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 75, "hot_rank_chg": 2, "stock_cnt": 5841, "price": "218.19", "change": "-2.79", "market_id": "17", "circulate_market_value": "60127871000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300454", "name": "深信服", "hot_rank": 76, "hot_rank_chg": 81, "stock_cnt": 5841, "price": "134.67", "change": "5.29", "market_id": "33", "circulate_market_value": "38785154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605069", "name": "正和生态", "hot_rank": 77, "hot_rank_chg": 18, "stock_cnt": 5841, "price": "12.65", "change": "10.00", "market_id": "17", "circulate_market_value": "2677976900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "智谱AI", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.08}, {"name": "京津冀", "change_pct": 0.4}, {"name": "园林", "change_pct": 0.45}, {"name": "污水处理", "change_pct": 0.61}, {"name": "环保", "change_pct": 0.68}, {"name": "数字经济", "change_pct": 0.62}, {"name": "土壤修复", "change_pct": 0.67}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "新型城镇化", "change_pct": 0.37}, {"name": "AI大模型/智能体", "change_pct": 0.83}, {"name": "智谱AI", "change_pct": 0.57}, {"name": "海洋经济", "change_pct": 0.07}]}, {"code": "002202", "name": "金风科技", "hot_rank": 78, "hot_rank_chg": -20, "stock_cnt": 5841, "price": "18.45", "change": "-0.81", "market_id": "33", "circulate_market_value": "62090304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000722", "name": "湖南发展", "hot_rank": 79, "hot_rank_chg": 37, "stock_cnt": 5841, "price": "15.15", "change": "-0.40", "market_id": "33", "circulate_market_value": "7027356400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 80, "hot_rank_chg": -10, "stock_cnt": 5841, "price": "20.40", "change": "-3.87", "market_id": "33", "circulate_market_value": "23964669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 81, "hot_rank_chg": -32, "stock_cnt": 5841, "price": "148.40", "change": "-0.02", "market_id": "17", "circulate_market_value": "357903530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 82, "hot_rank_chg": -68, "stock_cnt": 5841, "price": "20.82", "change": "3.69", "market_id": "33", "circulate_market_value": "16172243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 83, "hot_rank_chg": 15, "stock_cnt": 5841, "price": "46.88", "change": "2.92", "market_id": "17", "circulate_market_value": "39686420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 84, "hot_rank_chg": 138, "stock_cnt": 5841, "price": "27.02", "change": "0.97", "market_id": "17", "circulate_market_value": "6546135400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 85, "hot_rank_chg": 15, "stock_cnt": 5841, "price": "404.41", "change": "-4.39", "market_id": "33", "circulate_market_value": "507228470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 86, "hot_rank_chg": 0, "stock_cnt": 5841, "price": "32.83", "change": "-0.06", "market_id": "33", "circulate_market_value": "93867585000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 87, "hot_rank_chg": 153, "stock_cnt": 5841, "price": "9.72", "change": "-2.12", "market_id": "17", "circulate_market_value": "8446221000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.27}, {"name": "快递物流", "change_pct": 0.35}, {"name": "新零售", "change_pct": 0.46}, {"name": "福建自贸/海西概念", "change_pct": -0.06}, {"name": "旅游", "change_pct": -0.62}, {"name": "阿里巴巴概念股", "change_pct": 0.42}, {"name": "物业管理", "change_pct": 0.12}, {"name": "免税店概念", "change_pct": -0.56}, {"name": "自贸区", "change_pct": 0.15}]}, {"code": "601949", "name": "中国出版", "hot_rank": 88, "hot_rank_chg": 74, "stock_cnt": 5841, "price": "5.74", "change": "-8.31", "market_id": "17", "circulate_market_value": "10947816300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.09}, {"name": "中字头", "change_pct": -0.33}, {"name": "数字经济", "change_pct": 0.62}, {"name": "知识产权", "change_pct": -0.11}, {"name": "传媒", "change_pct": -0.76}, {"name": "NFT", "change_pct": -0.77}, {"name": "国企改革", "change_pct": 0.05}, {"name": "知识付费", "change_pct": -0.97}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 89, "hot_rank_chg": 67, "stock_cnt": 5841, "price": "85.26", "change": "1.02", "market_id": "33", "circulate_market_value": "135336650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 90, "hot_rank_chg": 42, "stock_cnt": 5841, "price": "6.87", "change": "-1.86", "market_id": "33", "circulate_market_value": "22855089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 0.51}, {"name": "核电", "change_pct": 0.13}, {"name": "5G", "change_pct": -0.04}, {"name": "一带一路", "change_pct": 0.2}, {"name": "充电桩", "change_pct": 0.69}, {"name": "氢能源/燃料电池", "change_pct": 0.83}, {"name": "风电", "change_pct": 0.36}, {"name": "新能源汽车", "change_pct": 1.19}, {"name": "储能", "change_pct": 0.77}, {"name": "特高压", "change_pct": 0.27}, {"name": "智能电网", "change_pct": 0.6}, {"name": "海洋经济", "change_pct": 0.07}]}, {"code": "301526", "name": "国际复材", "hot_rank": 91, "hot_rank_chg": -1, "stock_cnt": 5841, "price": "31.48", "change": "2.57", "market_id": "33", "circulate_market_value": "44210289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603619", "name": "中曼石油", "hot_rank": 92, "hot_rank_chg": 254, "stock_cnt": 5841, "price": "22.98", "change": "-1.12", "market_id": "17", "circulate_market_value": "10624537800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600184", "name": "光电股份", "hot_rank": 93, "hot_rank_chg": -54, "stock_cnt": 5841, "price": "20.61", "change": "3.15", "market_id": "17", "circulate_market_value": "12021667700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002848", "name": "高斯贝尔", "hot_rank": 94, "hot_rank_chg": -19, "stock_cnt": 5841, "price": "15.84", "change": "3.94", "market_id": "33", "circulate_market_value": "2620266400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 95, "hot_rank_chg": -31, "stock_cnt": 5841, "price": "40.34", "change": "-1.01", "market_id": "17", "circulate_market_value": "51297210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605258", "name": "协和电子", "hot_rank": 96, "hot_rank_chg": -43, "stock_cnt": 5841, "price": "35.03", "change": "0.75", "market_id": "17", "circulate_market_value": "3082640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 97, "hot_rank_chg": 33, "stock_cnt": 5841, "price": "11.40", "change": "-0.44", "market_id": "33", "circulate_market_value": "10630533100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.45}, {"name": "新疆国企改革", "change_pct": -1.13}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "光伏", "change_pct": 0.8}, {"name": "风电", "change_pct": 0.36}, {"name": "储能", "change_pct": 0.77}, {"name": "国企改革", "change_pct": 0.05}]}, {"code": "002519", "name": "银河电子", "hot_rank": 98, "hot_rank_chg": -52, "stock_cnt": 5841, "price": "6.28", "change": "-0.47", "market_id": "33", "circulate_market_value": "7055230300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 0.62}, {"name": "超高清视频", "change_pct": 0.99}, {"name": "特斯拉", "change_pct": 0.98}, {"name": "无人驾驶", "change_pct": 0.72}, {"name": "锂电池", "change_pct": 1.35}, {"name": "人工智能", "change_pct": 0.72}, {"name": "军民融合", "change_pct": -0.07}, {"name": "军工", "change_pct": -0.38}, {"name": "新能源汽车", "change_pct": 1.19}, {"name": "黑色家电", "change_pct": 0.34}, {"name": "家电", "change_pct": 0.61}, {"name": "储能", "change_pct": 0.77}, {"name": "宁德时代概念股", "change_pct": 1.9}, {"name": "新能源车零部件", "change_pct": 1.05}, {"name": "虚拟电厂", "change_pct": 0.25}, {"name": "航天", "change_pct": -0.01}, {"name": "华为海思", "change_pct": 0.66}, {"name": "卫星互联网", "change_pct": 0.25}, {"name": "智能电网", "change_pct": 0.6}, {"name": "军工信息化", "change_pct": -0.04}]}, {"code": "600721", "name": "百花医药", "hot_rank": 99, "hot_rank_chg": 69, "stock_cnt": 5841, "price": "11.35", "change": "4.03", "market_id": "17", "circulate_market_value": "4368461100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 2.54}, {"name": "股权转让", "change_pct": 0.32}, {"name": "强势人气股", "change_pct": 0.45}, {"name": "新疆概念", "change_pct": -0.16}, {"name": "医药", "change_pct": 2.18}, {"name": "流感", "change_pct": 1.69}, {"name": "国资入股", "change_pct": 0.78}, {"name": "减肥药", "change_pct": 2.22}]}, {"code": "603186", "name": "华正新材", "hot_rank": 100, "hot_rank_chg": -66, "stock_cnt": 5841, "price": "232.24", "change": "1.94", "market_id": "17", "circulate_market_value": "36400487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};