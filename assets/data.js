const UPDATE_TIME = "2026-09-02 10:28";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": 0.13,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "兵装重组概念",
    "rise": 4.52,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "创新药",
    "rise": -1.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "培育钻石",
    "rise": 0.47,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "算力租赁",
    "rise": -0.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续147天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "粮食概念",
    "rise": -4.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.0,
    "rate": 0,
    "tag": "",
    "hotTag": "连续283天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -0.6,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": -1.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "军工",
    "rise": 0.27,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "光纤概念",
    "rise": -0.36,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新未来LOF",
    "code": "886084"
  },
  {
    "name": "存储芯片",
    "rise": -1.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续236天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "数字货币",
    "rise": -0.65,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "商业航天",
    "rise": -0.22,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续212天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "新股与次新股",
    "rise": 1.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "黄金概念",
    "rise": -1.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI视频",
    "rise": -1.31,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "MLCC概念",
    "rise": -1.61,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.51,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "农业种植",
    "rise": -2.86,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  }
];
const THS_EVENTS = [
  {
    "title": "《国家基本药物目录（2026版）》施行，794种药品新增116种",
    "desc": "",
    "heat": 232440,
    "direction": "医药",
    "themes": [
      "生物疫苗",
      "医药医疗",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "奥精医疗",
        "code": "688613",
        "chg": 6.722151
      }
    ]
  },
  {
    "title": "美国中央司令部：完成对伊朗境内革命卫队目标的打击",
    "desc": "",
    "heat": 212068,
    "direction": "军工",
    "themes": [
      "兵装重组概念",
      "军工装备",
      "军工",
      "军工信息化",
      "军工电子"
    ],
    "stocks": [
      {
        "name": "晟楠科技",
        "code": "920006",
        "chg": 29.95904
      }
    ]
  },
  {
    "title": "PTFE：当\"塑料王\"站上AI背板",
    "desc": "",
    "heat": 100407,
    "direction": "PTFE材料",
    "themes": [
      "PTFE"
    ],
    "stocks": [
      {
        "name": "沃特股份",
        "code": "002886",
        "chg": 9.985735
      }
    ]
  },
  {
    "title": "政策红利与产业景气共振 农业板块迎来反弹",
    "desc": "",
    "heat": 95819,
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
        "name": "天禾股份",
        "code": "002999",
        "chg": 10.06006
      }
    ]
  },
  {
    "title": "Fervo据报与谷歌签署近400兆瓦地热供电协议，股价盘前涨15%",
    "desc": "",
    "heat": 90504,
    "direction": "地热发电",
    "themes": [
      "地热发电",
      "空气能热泵"
    ],
    "stocks": [
      {
        "name": "京能热力",
        "code": "002893",
        "chg": 10.049261
      }
    ]
  },
  {
    "title": "美伊凌晨开打！美军打击6个半小时，伊朗一婚礼遭袭",
    "desc": "",
    "heat": 31046,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "长江能科",
        "code": "920158",
        "chg": 12.121212
      }
    ]
  },
  {
    "title": "华为、小米、荣耀，多款手机涨价",
    "desc": "",
    "heat": 12955,
    "direction": "手机涨价",
    "themes": [
      "手机涨价"
    ],
    "stocks": [
      {
        "name": "领益智造",
        "code": "002600",
        "chg": 1.357827
      }
    ]
  },
  {
    "title": "“豆包手机”，9月将上市",
    "desc": "",
    "heat": 6536,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "美芯晟",
        "code": "688458",
        "chg": 4.752419
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+1.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+1.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁悬浮压缩机",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "热泵",
    "change": "+1.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁电存储",
    "change": "+1.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTFE概念",
    "change": "+1.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "地热",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "气凝胶",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+0.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航母",
    "change": "+0.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳纤维",
    "change": "+0.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "生物柴油/生物航煤",
    "change": "+0.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工集团",
    "change": "+0.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "通用航空",
    "change": "+0.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工信息化",
    "change": "+0.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "冰雪产业",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "深地经济",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+0.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民爆",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5783,
    "price": "12.40",
    "change": "-6.34",
    "market_id": "17",
    "circulate_market_value": "7958111900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.38
      },
      {
        "name": "农业种植",
        "change_pct": -5.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.9
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.55
      },
      {
        "name": "休闲食品",
        "change_pct": -1.82
      },
      {
        "name": "食品",
        "change_pct": -1.79
      },
      {
        "name": "食品安全",
        "change_pct": -1.37
      },
      {
        "name": "社区团购",
        "change_pct": -2.27
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "预制菜",
        "change_pct": -1.79
      },
      {
        "name": "人造肉",
        "change_pct": -3.33
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 13,
    "hot_rank_chg": 55,
    "stock_cnt": 5783,
    "price": "4.53",
    "change": "4.14",
    "market_id": "33",
    "circulate_market_value": "9525123700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "维生素",
        "change_pct": -1.92
      },
      {
        "name": "基因测序",
        "change_pct": -1.5
      },
      {
        "name": "民营医院",
        "change_pct": -1.36
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "化学原料药",
        "change_pct": -1.46
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.77
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 14,
    "hot_rank_chg": -5,
    "stock_cnt": 5783,
    "price": "10.04",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "4812372600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "医药商业",
        "change_pct": -1.7
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "流感",
        "change_pct": -1.33
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 15,
    "hot_rank_chg": -5,
    "stock_cnt": 5783,
    "price": "9.24",
    "change": "-2.63",
    "market_id": "17",
    "circulate_market_value": "23271031000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "工业大麻",
        "change_pct": -1.21
      },
      {
        "name": "中药",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "保健品",
        "change_pct": -1.56
      },
      {
        "name": "民营医院",
        "change_pct": -1.36
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "化学原料药",
        "change_pct": -1.46
      },
      {
        "name": "流感",
        "change_pct": -1.33
      },
      {
        "name": "振兴东北",
        "change_pct": -0.91
      },
      {
        "name": "食品",
        "change_pct": -1.79
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 18,
    "hot_rank_chg": -13,
    "stock_cnt": 5783,
    "price": "3.18",
    "change": "-0.31",
    "market_id": "33",
    "circulate_market_value": "7449748200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.84
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "VR&AR",
        "change_pct": -0.87
      },
      {
        "name": "京津冀",
        "change_pct": -0.92
      },
      {
        "name": "装修装饰",
        "change_pct": -0.59
      },
      {
        "name": "住房租赁",
        "change_pct": -0.82
      },
      {
        "name": "破净股",
        "change_pct": -1.13
      },
      {
        "name": "数字经济",
        "change_pct": -0.8
      },
      {
        "name": "房产经纪",
        "change_pct": -1.14
      },
      {
        "name": "物业管理",
        "change_pct": -0.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 21,
    "hot_rank_chg": -13,
    "stock_cnt": 5783,
    "price": "3.93",
    "change": "-6.21",
    "market_id": "17",
    "circulate_market_value": "8694453200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -1.0
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "光通信",
        "change_pct": -1.03
      },
      {
        "name": "林业",
        "change_pct": -1.35
      },
      {
        "name": "军民融合",
        "change_pct": 0.07
      },
      {
        "name": "军工",
        "change_pct": 0.14
      },
      {
        "name": "人造肉",
        "change_pct": -3.33
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 23,
    "hot_rank_chg": -5,
    "stock_cnt": 5783,
    "price": "4.91",
    "change": "-5.03",
    "market_id": "17",
    "circulate_market_value": "6273015000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -1.86
      },
      {
        "name": "化肥",
        "change_pct": -2.62
      },
      {
        "name": "保健品",
        "change_pct": -1.56
      },
      {
        "name": "民营医院",
        "change_pct": -1.36
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "煤化工",
        "change_pct": -2.48
      },
      {
        "name": "食品",
        "change_pct": -1.79
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "干细胞",
        "change_pct": -1.16
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "600479",
    "name": "千金药业",
    "hot_rank": 25,
    "hot_rank_chg": 22,
    "stock_cnt": 5783,
    "price": "12.96",
    "change": "-3.07",
    "market_id": "17",
    "circulate_market_value": "5423852200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.0
      },
      {
        "name": "中药",
        "change_pct": -1.44
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.97
      },
      {
        "name": "农业种植",
        "change_pct": -5.16
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.9
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "流感",
        "change_pct": -1.33
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 26,
    "hot_rank_chg": 11,
    "stock_cnt": 5783,
    "price": "5.30",
    "change": "-1.85",
    "market_id": "17",
    "circulate_market_value": "6457583800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.04
      },
      {
        "name": "煤炭",
        "change_pct": -2.92
      },
      {
        "name": "有色金属",
        "change_pct": -1.43
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.17
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 27,
    "hot_rank_chg": -4,
    "stock_cnt": 5783,
    "price": "5.81",
    "change": "2.29",
    "market_id": "33",
    "circulate_market_value": "6602484000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.71
      },
      {
        "name": "锂电池",
        "change_pct": -1.31
      },
      {
        "name": "石墨烯",
        "change_pct": -0.19
      },
      {
        "name": "新能源整车",
        "change_pct": -1.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "汽车整车",
        "change_pct": -1.9
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.75
      },
      {
        "name": "白色家电",
        "change_pct": 0.0
      },
      {
        "name": "家电",
        "change_pct": -0.31
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.1
      },
      {
        "name": "热泵",
        "change_pct": 1.15
      },
      {
        "name": "轮边电机",
        "change_pct": -0.56
      },
      {
        "name": "超级电容",
        "change_pct": -1.2
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 28,
    "hot_rank_chg": -11,
    "stock_cnt": 5783,
    "price": "11.10",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "7392600000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "连锁零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 30,
    "hot_rank_chg": -18,
    "stock_cnt": 5783,
    "price": "5.34",
    "change": "-6.15",
    "market_id": "33",
    "circulate_market_value": "14164620000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "装修装饰",
        "change_pct": -0.59
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.96
      },
      {
        "name": "航天",
        "change_pct": 0.05
      },
      {
        "name": "旧改",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 31,
    "hot_rank_chg": -6,
    "stock_cnt": 5783,
    "price": "7.12",
    "change": "1.43",
    "market_id": "33",
    "circulate_market_value": "4589797200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.89
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "装修装饰",
        "change_pct": -0.59
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.96
      },
      {
        "name": "家具家居",
        "change_pct": -0.33
      },
      {
        "name": "智能制造",
        "change_pct": -0.82
      },
      {
        "name": "3D打印",
        "change_pct": -0.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.15
      },
      {
        "name": "旧改",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 32,
    "hot_rank_chg": -19,
    "stock_cnt": 5783,
    "price": "8.01",
    "change": "-4.19",
    "market_id": "33",
    "circulate_market_value": "13032220200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "电竞",
        "change_pct": -1.15
      },
      {
        "name": "手游",
        "change_pct": -1.54
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "游戏",
        "change_pct": -1.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.21
      },
      {
        "name": "快手概念股",
        "change_pct": -1.99
      },
      {
        "name": "元宇宙",
        "change_pct": -1.27
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.52
      },
      {
        "name": "web3.0",
        "change_pct": -1.38
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.49
      },
      {
        "name": "数据要素",
        "change_pct": -1.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.35
      },
      {
        "name": "AI营销",
        "change_pct": -1.93
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.6
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.9
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.16
      },
      {
        "name": "人形机器人",
        "change_pct": -0.67
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.46
      },
      {
        "name": "多模态",
        "change_pct": -1.74
      },
      {
        "name": "AI视频",
        "change_pct": -1.97
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.25
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 34,
    "hot_rank_chg": 11,
    "stock_cnt": 5783,
    "price": "6.73",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "3912666900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.16
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.93
      },
      {
        "name": "农垦",
        "change_pct": -3.66
      },
      {
        "name": "棉花",
        "change_pct": -2.07
      },
      {
        "name": "新疆概念",
        "change_pct": -1.69
      },
      {
        "name": "风电",
        "change_pct": -0.74
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 35,
    "hot_rank_chg": -28,
    "stock_cnt": 5783,
    "price": "4.79",
    "change": "-6.08",
    "market_id": "33",
    "circulate_market_value": "28044477000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.74
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.69
      },
      {
        "name": "水利",
        "change_pct": -0.63
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.54
      },
      {
        "name": "大数据",
        "change_pct": -1.2
      },
      {
        "name": "园林",
        "change_pct": -0.61
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.03
      },
      {
        "name": "数字经济",
        "change_pct": -0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.21
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.0
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.09
      },
      {
        "name": "快手概念股",
        "change_pct": -1.99
      },
      {
        "name": "IGBT",
        "change_pct": -1.36
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.48
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.49
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.35
      },
      {
        "name": "氮化镓",
        "change_pct": -0.88
      },
      {
        "name": "AI营销",
        "change_pct": -1.93
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.16
      },
      {
        "name": "多模态",
        "change_pct": -1.74
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.2
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.58
      },
      {
        "name": "区块链",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 37,
    "hot_rank_chg": -13,
    "stock_cnt": 5783,
    "price": "12.86",
    "change": "-2.50",
    "market_id": "17",
    "circulate_market_value": "4945282600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.03
      },
      {
        "name": "股权转让",
        "change_pct": -0.61
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "新疆概念",
        "change_pct": -1.69
      },
      {
        "name": "医药",
        "change_pct": -1.35
      },
      {
        "name": "流感",
        "change_pct": -1.33
      },
      {
        "name": "国资入股",
        "change_pct": -0.86
      },
      {
        "name": "减肥药",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 41,
    "hot_rank_chg": 8,
    "stock_cnt": 5783,
    "price": "10.04",
    "change": "-1.95",
    "market_id": "17",
    "circulate_market_value": "8724285900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "快递物流",
        "change_pct": -1.12
      },
      {
        "name": "新零售",
        "change_pct": -0.84
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.33
      },
      {
        "name": "旅游",
        "change_pct": 0.23
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.25
      },
      {
        "name": "物业管理",
        "change_pct": -0.69
      },
      {
        "name": "免税店概念",
        "change_pct": -1.06
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 42,
    "hot_rank_chg": -6,
    "stock_cnt": 5783,
    "price": "11.65",
    "change": "-2.18",
    "market_id": "17",
    "circulate_market_value": "20214858000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.86
      },
      {
        "name": "核电",
        "change_pct": -0.23
      },
      {
        "name": "锂电池",
        "change_pct": -1.31
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.94
      },
      {
        "name": "PCB板",
        "change_pct": -0.99
      },
      {
        "name": "中科院系",
        "change_pct": -1.45
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.75
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.14
      },
      {
        "name": "固态电池",
        "change_pct": -1.3
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 45,
    "hot_rank_chg": -11,
    "stock_cnt": 5783,
    "price": "8.39",
    "change": "-7.90",
    "market_id": "33",
    "circulate_market_value": "6105951700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -1.16
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.96
      },
      {
        "name": "风电",
        "change_pct": -0.74
      },
      {
        "name": "环氧丙烷",
        "change_pct": -2.65
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.55
      },
      {
        "name": "建筑节能",
        "change_pct": -0.81
      },
      {
        "name": "旧改",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 47,
    "hot_rank_chg": 387,
    "stock_cnt": 5783,
    "price": "8.69",
    "change": "3.95",
    "market_id": "33",
    "circulate_market_value": "4707564200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.02
      },
      {
        "name": "油气管网",
        "change_pct": -0.11
      },
      {
        "name": "海工装备",
        "change_pct": -0.75
      },
      {
        "name": "天然气",
        "change_pct": -0.27
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.89
      },
      {
        "name": "风电",
        "change_pct": -0.74
      },
      {
        "name": "页岩气",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      },
      {
        "name": "深地经济",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 51,
    "hot_rank_chg": 32,
    "stock_cnt": 5783,
    "price": "7.17",
    "change": "-4.40",
    "market_id": "17",
    "circulate_market_value": "17142125000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.92
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.17
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 54,
    "hot_rank_chg": -35,
    "stock_cnt": 5783,
    "price": "6.69",
    "change": "-11.39",
    "market_id": "33",
    "circulate_market_value": "5929015300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.16
      },
      {
        "name": "土地流转",
        "change_pct": -3.33
      },
      {
        "name": "海南概念",
        "change_pct": -1.76
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.41
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.52
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "水产养殖",
        "change_pct": -2.91
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "000564",
    "name": "供销大集",
    "hot_rank": 55,
    "hot_rank_chg": 10,
    "stock_cnt": 5783,
    "price": "1.63",
    "change": "-1.81",
    "market_id": "33",
    "circulate_market_value": "24604654000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.09
      },
      {
        "name": "新零售",
        "change_pct": -0.84
      },
      {
        "name": "冷链",
        "change_pct": -1.16
      },
      {
        "name": "社区团购",
        "change_pct": -2.27
      },
      {
        "name": "物业管理",
        "change_pct": -0.69
      },
      {
        "name": "低价股",
        "change_pct": -1.13
      },
      {
        "name": "供销社",
        "change_pct": -1.78
      },
      {
        "name": "数字乡村",
        "change_pct": -1.16
      },
      {
        "name": "免税店概念",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 57,
    "hot_rank_chg": -6,
    "stock_cnt": 5783,
    "price": "12.52",
    "change": "-9.28",
    "market_id": "33",
    "circulate_market_value": "11685186500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.93
      },
      {
        "name": "新疆概念",
        "change_pct": -1.69
      },
      {
        "name": "光伏",
        "change_pct": -0.91
      },
      {
        "name": "风电",
        "change_pct": -0.74
      },
      {
        "name": "储能",
        "change_pct": -0.77
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 59,
    "hot_rank_chg": 5,
    "stock_cnt": 5783,
    "price": "5.79",
    "change": "-2.03",
    "market_id": "33",
    "circulate_market_value": "204775710000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.08
      },
      {
        "name": "手机产业链",
        "change_pct": -0.78
      },
      {
        "name": "超高清视频",
        "change_pct": -1.32
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.8
      },
      {
        "name": "电竞",
        "change_pct": -1.15
      },
      {
        "name": "半导体",
        "change_pct": -1.25
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.33
      },
      {
        "name": "VR&AR",
        "change_pct": -0.87
      },
      {
        "name": "OLED",
        "change_pct": -1.63
      },
      {
        "name": "京津冀",
        "change_pct": -0.92
      },
      {
        "name": "物联网",
        "change_pct": -0.64
      },
      {
        "name": "指纹识别",
        "change_pct": -1.32
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.0
      },
      {
        "name": "白马股",
        "change_pct": -1.23
      },
      {
        "name": "智能制造",
        "change_pct": -0.82
      },
      {
        "name": "小米概念股",
        "change_pct": -1.03
      },
      {
        "name": "国产芯片",
        "change_pct": -1.19
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.38
      },
      {
        "name": "全息概念",
        "change_pct": -0.55
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.0
      },
      {
        "name": "MicroLED",
        "change_pct": -1.29
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.26
      },
      {
        "name": "智能手表",
        "change_pct": -0.45
      },
      {
        "name": "MiniLED",
        "change_pct": -1.18
      },
      {
        "name": "传感器",
        "change_pct": -0.77
      },
      {
        "name": "大硅片",
        "change_pct": -1.36
      },
      {
        "name": "AI PC",
        "change_pct": -0.81
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "回购",
        "change_pct": -1.25
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.56
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.9
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 60,
    "hot_rank_chg": 0,
    "stock_cnt": 5783,
    "price": "11.86",
    "change": "1.98",
    "market_id": "17",
    "circulate_market_value": "21219180000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.4
      },
      {
        "name": "纯碱",
        "change_pct": -1.1
      },
      {
        "name": "食品",
        "change_pct": -1.79
      },
      {
        "name": "土壤修复",
        "change_pct": -1.02
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.52
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.23
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 61,
    "hot_rank_chg": -18,
    "stock_cnt": 5783,
    "price": "8.25",
    "change": "-1.79",
    "market_id": "17",
    "circulate_market_value": "9394747700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.89
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "光伏",
        "change_pct": -0.91
      },
      {
        "name": "特高压",
        "change_pct": -0.31
      },
      {
        "name": "智能电网",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 69,
    "hot_rank_chg": 159,
    "stock_cnt": 5783,
    "price": "10.14",
    "change": "2.63",
    "market_id": "17",
    "circulate_market_value": "4654979200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -0.5
      },
      {
        "name": "电子特气",
        "change_pct": -1.37
      },
      {
        "name": "一带一路",
        "change_pct": -0.89
      },
      {
        "name": "天然气",
        "change_pct": -0.27
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.89
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      },
      {
        "name": "氦气",
        "change_pct": -1.24
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 70,
    "hot_rank_chg": 97,
    "stock_cnt": 5783,
    "price": "11.04",
    "change": "3.96",
    "market_id": "33",
    "circulate_market_value": "9323533700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.19
      },
      {
        "name": "大飞机",
        "change_pct": -0.04
      },
      {
        "name": "北斗导航",
        "change_pct": 0.07
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.39
      },
      {
        "name": "军民融合",
        "change_pct": 0.07
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.23
      },
      {
        "name": "军工",
        "change_pct": 0.14
      },
      {
        "name": "碳纤维",
        "change_pct": 0.59
      },
      {
        "name": "无人机",
        "change_pct": 0.12
      },
      {
        "name": "航天",
        "change_pct": 0.05
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.34
      },
      {
        "name": "低空经济",
        "change_pct": -0.39
      },
      {
        "name": "海洋经济",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 72,
    "hot_rank_chg": -28,
    "stock_cnt": 5783,
    "price": "5.20",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "3696153800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AIGC影视",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "影视",
        "change_pct": -1.87
      },
      {
        "name": "旅游",
        "change_pct": 0.23
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.48
      },
      {
        "name": "AI营销",
        "change_pct": -1.93
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.16
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "600698",
    "name": "湖南天雁",
    "hot_rank": 73,
    "hot_rank_chg": 443,
    "stock_cnt": 5783,
    "price": "7.68",
    "change": "4.21",
    "market_id": "17",
    "circulate_market_value": "6377869400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.79
      },
      {
        "name": "军工集团",
        "change_pct": 0.52
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.0
      },
      {
        "name": "军工",
        "change_pct": 0.14
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 79,
    "hot_rank_chg": -6,
    "stock_cnt": 5783,
    "price": "6.92",
    "change": "-0.72",
    "market_id": "33",
    "circulate_market_value": "13252439700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.33
      },
      {
        "name": "林业",
        "change_pct": -1.35
      },
      {
        "name": "碳中和",
        "change_pct": -0.65
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 82,
    "hot_rank_chg": 7,
    "stock_cnt": 5783,
    "price": "9.81",
    "change": "2.40",
    "market_id": "33",
    "circulate_market_value": "11129809000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.0
      },
      {
        "name": "足球",
        "change_pct": -0.4
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.8
      },
      {
        "name": "传媒",
        "change_pct": -1.74
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.49
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.35
      },
      {
        "name": "国企改革",
        "change_pct": -0.98
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.24
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 84,
    "hot_rank_chg": -44,
    "stock_cnt": 5783,
    "price": "8.21",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "4333255100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.16
      },
      {
        "name": "棉花",
        "change_pct": -2.07
      },
      {
        "name": "大农业",
        "change_pct": -2.13
      },
      {
        "name": "供销社",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 85,
    "hot_rank_chg": 313,
    "stock_cnt": 5783,
    "price": "10.75",
    "change": "1.13",
    "market_id": "33",
    "circulate_market_value": "6269513900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.02
      },
      {
        "name": "一带一路",
        "change_pct": -0.89
      },
      {
        "name": "天然气",
        "change_pct": -0.27
      },
      {
        "name": "油气改革",
        "change_pct": -0.55
      },
      {
        "name": "页岩气",
        "change_pct": -0.26
      },
      {
        "name": "深地经济",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "600203",
    "name": "福日电子",
    "hot_rank": 89,
    "hot_rank_chg": 232,
    "stock_cnt": 5783,
    "price": "11.01",
    "change": "-1.87",
    "market_id": "17",
    "circulate_market_value": "6528798800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.08
      },
      {
        "name": "手机产业链",
        "change_pct": -0.78
      },
      {
        "name": "LED",
        "change_pct": -0.78
      },
      {
        "name": "机器人",
        "change_pct": -0.62
      },
      {
        "name": "无人机",
        "change_pct": 0.12
      },
      {
        "name": "MiniLED",
        "change_pct": -1.18
      },
      {
        "name": "eSIM",
        "change_pct": 1.0
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.74
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "智能座舱",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 92,
    "hot_rank_chg": 80,
    "stock_cnt": 5783,
    "price": "11.49",
    "change": "2.59",
    "market_id": "17",
    "circulate_market_value": "4971420200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.61
      },
      {
        "name": "强势人气股",
        "change_pct": -1.09
      },
      {
        "name": "光伏",
        "change_pct": -0.91
      },
      {
        "name": "无线耳机",
        "change_pct": -0.45
      },
      {
        "name": "华为产业链",
        "change_pct": -0.91
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "002679",
    "name": "福建金森",
    "hot_rank": 98,
    "hot_rank_chg": 8,
    "stock_cnt": 5783,
    "price": "12.24",
    "change": "-5.19",
    "market_id": "33",
    "circulate_market_value": "2885653400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.33
      },
      {
        "name": "林业",
        "change_pct": -1.35
      },
      {
        "name": "碳中和",
        "change_pct": -0.65
      },
      {
        "name": "自贸区",
        "change_pct": -0.94
      },
      {
        "name": "林业碳汇",
        "change_pct": -1.11
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600722", "name": "金牛化工", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5783, "price": "19.26", "change": "6.64", "market_id": "17", "circulate_market_value": "13102957000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5783, "price": "12.40", "change": "-6.34", "market_id": "17", "circulate_market_value": "7958111900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.38}, {"name": "农业种植", "change_pct": -5.16}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "湖南国企改革", "change_pct": -0.9}, {"name": "乡村振兴", "change_pct": -2.55}, {"name": "休闲食品", "change_pct": -1.82}, {"name": "食品", "change_pct": -1.79}, {"name": "食品安全", "change_pct": -1.37}, {"name": "社区团购", "change_pct": -2.27}, {"name": "大农业", "change_pct": -2.13}, {"name": "预制菜", "change_pct": -1.79}, {"name": "人造肉", "change_pct": -3.33}, {"name": "国企改革", "change_pct": -0.98}]}, {"code": "600869", "name": "远东股份", "hot_rank": 3, "hot_rank_chg": 23, "stock_cnt": 5783, "price": "19.50", "change": "9.98", "market_id": "17", "circulate_market_value": "43277379000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力AI订单"}, {"code": "003040", "name": "楚天龙", "hot_rank": 4, "hot_rank_chg": 2, "stock_cnt": 5783, "price": "21.12", "change": "7.87", "market_id": "33", "circulate_market_value": "9648677400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 5, "hot_rank_chg": 109, "stock_cnt": 5783, "price": "36.62", "change": "10.00", "market_id": "17", "circulate_market_value": "26521244000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "弹药装备"}, {"code": "603618", "name": "杭电股份", "hot_rank": 6, "hot_rank_chg": 70, "stock_cnt": 5783, "price": "37.22", "change": "9.99", "market_id": "17", "circulate_market_value": "25733000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报高增"}, {"code": "600176", "name": "中国巨石", "hot_rank": 7, "hot_rank_chg": 7, "stock_cnt": 5783, "price": "44.13", "change": "2.58", "market_id": "17", "circulate_market_value": "175266140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5783, "price": "14.42", "change": "3.29", "market_id": "17", "circulate_market_value": "4218974800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 9, "hot_rank_chg": 39, "stock_cnt": 5783, "price": "14.75", "change": "0.75", "market_id": "17", "circulate_market_value": "18943109000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 10, "hot_rank_chg": -8, "stock_cnt": 5783, "price": "546.02", "change": "-4.39", "market_id": "17", "circulate_market_value": "16428497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 11, "hot_rank_chg": 48, "stock_cnt": 5783, "price": "50.44", "change": "3.23", "market_id": "17", "circulate_market_value": "54100197000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": 8, "stock_cnt": 5783, "price": "66.90", "change": "-0.65", "market_id": "17", "circulate_market_value": "164148930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 13, "hot_rank_chg": 55, "stock_cnt": 5783, "price": "4.53", "change": "4.14", "market_id": "33", "circulate_market_value": "9525123700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "维生素", "change_pct": -1.92}, {"name": "基因测序", "change_pct": -1.5}, {"name": "民营医院", "change_pct": -1.36}, {"name": "医药", "change_pct": -1.35}, {"name": "化学原料药", "change_pct": -1.46}, {"name": "PD-1抑制剂", "change_pct": -0.77}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5783, "price": "10.04", "change": "-10.04", "market_id": "17", "circulate_market_value": "4812372600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "医药商业", "change_pct": -1.7}, {"name": "医药", "change_pct": -1.35}, {"name": "流感", "change_pct": -1.33}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5783, "price": "9.24", "change": "-2.63", "market_id": "17", "circulate_market_value": "23271031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "工业大麻", "change_pct": -1.21}, {"name": "中药", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "保健品", "change_pct": -1.56}, {"name": "民营医院", "change_pct": -1.36}, {"name": "医药", "change_pct": -1.35}, {"name": "化学原料药", "change_pct": -1.46}, {"name": "流感", "change_pct": -1.33}, {"name": "振兴东北", "change_pct": -0.91}, {"name": "食品", "change_pct": -1.79}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 17, "hot_rank_chg": -14, "stock_cnt": 5783, "price": "31.20", "change": "-10.01", "market_id": "17", "circulate_market_value": "12511200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 18, "hot_rank_chg": -13, "stock_cnt": 5783, "price": "3.18", "change": "-0.31", "market_id": "33", "circulate_market_value": "7449748200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.84}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "人工智能", "change_pct": -0.92}, {"name": "VR&AR", "change_pct": -0.87}, {"name": "京津冀", "change_pct": -0.92}, {"name": "装修装饰", "change_pct": -0.59}, {"name": "住房租赁", "change_pct": -0.82}, {"name": "破净股", "change_pct": -1.13}, {"name": "数字经济", "change_pct": -0.8}, {"name": "房产经纪", "change_pct": -1.14}, {"name": "物业管理", "change_pct": -0.69}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "AI大模型/智能体", "change_pct": -1.16}]}, {"code": "002886", "name": "沃特股份", "hot_rank": 19, "hot_rank_chg": 63, "stock_cnt": 5783, "price": "30.84", "change": "9.99", "market_id": "33", "circulate_market_value": "6447970600.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "PTFE薄膜"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 20, "hot_rank_chg": 2, "stock_cnt": 5783, "price": "33.37", "change": "9.23", "market_id": "17", "circulate_market_value": "8084549900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 21, "hot_rank_chg": -13, "stock_cnt": 5783, "price": "3.93", "change": "-6.21", "market_id": "17", "circulate_market_value": "8694453200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.0}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "光通信", "change_pct": -1.03}, {"name": "林业", "change_pct": -1.35}, {"name": "军民融合", "change_pct": 0.07}, {"name": "军工", "change_pct": 0.14}, {"name": "人造肉", "change_pct": -3.33}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5783, "price": "20.52", "change": "0.69", "market_id": "33", "circulate_market_value": "20965283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5783, "price": "4.91", "change": "-5.03", "market_id": "17", "circulate_market_value": "6273015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -1.86}, {"name": "化肥", "change_pct": -2.62}, {"name": "保健品", "change_pct": -1.56}, {"name": "民营医院", "change_pct": -1.36}, {"name": "医药", "change_pct": -1.35}, {"name": "煤化工", "change_pct": -2.48}, {"name": "食品", "change_pct": -1.79}, {"name": "大农业", "change_pct": -2.13}, {"name": "干细胞", "change_pct": -1.16}, {"name": "阿尔茨海默病", "change_pct": -1.41}]}, {"code": "600183", "name": "生益科技", "hot_rank": 24, "hot_rank_chg": 33, "stock_cnt": 5783, "price": "144.98", "change": "0.39", "market_id": "17", "circulate_market_value": "349655350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 25, "hot_rank_chg": 22, "stock_cnt": 5783, "price": "12.96", "change": "-3.07", "market_id": "17", "circulate_market_value": "5423852200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.0}, {"name": "中药", "change_pct": -1.44}, {"name": "优化生育（三孩）", "change_pct": -0.97}, {"name": "农业种植", "change_pct": -5.16}, {"name": "人工智能", "change_pct": -0.92}, {"name": "湖南国企改革", "change_pct": -0.9}, {"name": "医药", "change_pct": -1.35}, {"name": "流感", "change_pct": -1.33}, {"name": "大农业", "change_pct": -2.13}, {"name": "国企改革", "change_pct": -0.98}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 26, "hot_rank_chg": 11, "stock_cnt": 5783, "price": "5.30", "change": "-1.85", "market_id": "17", "circulate_market_value": "6457583800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.04}, {"name": "煤炭", "change_pct": -2.92}, {"name": "有色金属", "change_pct": -1.43}, {"name": "国企改革", "change_pct": -0.98}, {"name": "河南国企改革", "change_pct": -1.17}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5783, "price": "5.81", "change": "2.29", "market_id": "33", "circulate_market_value": "6602484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.71}, {"name": "锂电池", "change_pct": -1.31}, {"name": "石墨烯", "change_pct": -0.19}, {"name": "新能源整车", "change_pct": -1.58}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "汽车整车", "change_pct": -1.9}, {"name": "新能源汽车", "change_pct": -0.75}, {"name": "白色家电", "change_pct": 0.0}, {"name": "家电", "change_pct": -0.31}, {"name": "汽车热管理", "change_pct": -0.1}, {"name": "热泵", "change_pct": 1.15}, {"name": "轮边电机", "change_pct": -0.56}, {"name": "超级电容", "change_pct": -1.2}, {"name": "液冷服务器", "change_pct": 0.2}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 28, "hot_rank_chg": -11, "stock_cnt": 5783, "price": "11.10", "change": "10.01", "market_id": "17", "circulate_market_value": "7392600000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.84}]}, {"code": "002837", "name": "英维克", "hot_rank": 29, "hot_rank_chg": 48, "stock_cnt": 5783, "price": "66.23", "change": "0.50", "market_id": "33", "circulate_market_value": "75054491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 30, "hot_rank_chg": -18, "stock_cnt": 5783, "price": "5.34", "change": "-6.15", "market_id": "33", "circulate_market_value": "14164620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.09}, {"name": "装修装饰", "change_pct": -0.59}, {"name": "装配式建筑", "change_pct": -0.96}, {"name": "航天", "change_pct": 0.05}, {"name": "旧改", "change_pct": -0.67}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 31, "hot_rank_chg": -6, "stock_cnt": 5783, "price": "7.12", "change": "1.43", "market_id": "33", "circulate_market_value": "4589797200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.89}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "装修装饰", "change_pct": -0.59}, {"name": "装配式建筑", "change_pct": -0.96}, {"name": "家具家居", "change_pct": -0.33}, {"name": "智能制造", "change_pct": -0.82}, {"name": "3D打印", "change_pct": -0.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.15}, {"name": "旧改", "change_pct": -0.67}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 32, "hot_rank_chg": -19, "stock_cnt": 5783, "price": "8.01", "change": "-4.19", "market_id": "33", "circulate_market_value": "13032220200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "电竞", "change_pct": -1.15}, {"name": "手游", "change_pct": -1.54}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "人工智能", "change_pct": -0.92}, {"name": "游戏", "change_pct": -1.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.8}, {"name": "腾讯概念股", "change_pct": -1.21}, {"name": "快手概念股", "change_pct": -1.99}, {"name": "元宇宙", "change_pct": -1.27}, {"name": "虚拟数字人", "change_pct": -1.48}, {"name": "东数西算/算力", "change_pct": -0.52}, {"name": "web3.0", "change_pct": -1.38}, {"name": "AIGC概念", "change_pct": -1.49}, {"name": "数据要素", "change_pct": -1.24}, {"name": "字节跳动概念股", "change_pct": -1.35}, {"name": "AI营销", "change_pct": -1.93}, {"name": "ChatGPT", "change_pct": -1.6}, {"name": "智能眼镜/MR头显", "change_pct": -0.9}, {"name": "AI大模型/智能体", "change_pct": -1.16}, {"name": "人形机器人", "change_pct": -0.67}, {"name": "短剧/互动影游", "change_pct": -1.46}, {"name": "多模态", "change_pct": -1.74}, {"name": "AI视频", "change_pct": -1.97}, {"name": "IP经济/谷子经济", "change_pct": -1.25}, {"name": "小红书概念股", "change_pct": -1.58}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 33, "hot_rank_chg": 39, "stock_cnt": 5783, "price": "21.46", "change": "1.47", "market_id": "33", "circulate_market_value": "25247020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 34, "hot_rank_chg": 11, "stock_cnt": 5783, "price": "6.73", "change": "9.97", "market_id": "17", "circulate_market_value": "3912666900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.16}, {"name": "新疆国企改革", "change_pct": -1.93}, {"name": "农垦", "change_pct": -3.66}, {"name": "棉花", "change_pct": -2.07}, {"name": "新疆概念", "change_pct": -1.69}, {"name": "风电", "change_pct": -0.74}, {"name": "大农业", "change_pct": -2.13}, {"name": "国企改革", "change_pct": -0.98}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 35, "hot_rank_chg": -28, "stock_cnt": 5783, "price": "4.79", "change": "-6.08", "market_id": "33", "circulate_market_value": "28044477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.74}, {"name": "人工智能", "change_pct": -0.92}, {"name": "云计算数据中心", "change_pct": -0.69}, {"name": "水利", "change_pct": -0.63}, {"name": "直播/短视频", "change_pct": -1.54}, {"name": "大数据", "change_pct": -1.2}, {"name": "园林", "change_pct": -0.61}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.03}, {"name": "数字经济", "change_pct": -0.8}, {"name": "腾讯概念股", "change_pct": -1.21}, {"name": "理想汽车概念股", "change_pct": -0.0}, {"name": "第三代半导体", "change_pct": -1.09}, {"name": "快手概念股", "change_pct": -1.99}, {"name": "IGBT", "change_pct": -1.36}, {"name": "虚拟数字人", "change_pct": -1.48}, {"name": "AIGC概念", "change_pct": -1.49}, {"name": "字节跳动概念股", "change_pct": -1.35}, {"name": "氮化镓", "change_pct": -0.88}, {"name": "AI营销", "change_pct": -1.93}, {"name": "AI大模型/智能体", "change_pct": -1.16}, {"name": "多模态", "change_pct": -1.74}, {"name": "液冷服务器", "change_pct": 0.2}, {"name": "小红书概念股", "change_pct": -1.58}, {"name": "区块链", "change_pct": -1.02}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 36, "hot_rank_chg": 3, "stock_cnt": 5783, "price": "822.40", "change": "-4.29", "market_id": "33", "circulate_market_value": "912812190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 37, "hot_rank_chg": -13, "stock_cnt": 5783, "price": "12.86", "change": "-2.50", "market_id": "17", "circulate_market_value": "4945282600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.03}, {"name": "股权转让", "change_pct": -0.61}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "新疆概念", "change_pct": -1.69}, {"name": "医药", "change_pct": -1.35}, {"name": "流感", "change_pct": -1.33}, {"name": "国资入股", "change_pct": -0.86}, {"name": "减肥药", "change_pct": -1.35}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 38, "hot_rank_chg": -3, "stock_cnt": 5783, "price": "54.32", "change": "-3.86", "market_id": "17", "circulate_market_value": "244605080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 39, "hot_rank_chg": 572, "stock_cnt": 5783, "price": "13.27", "change": "10.03", "market_id": "33", "circulate_market_value": "8759594100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷服务器"}, {"code": "600967", "name": "内蒙一机", "hot_rank": 40, "hot_rank_chg": 104, "stock_cnt": 5783, "price": "13.41", "change": "10.01", "market_id": "17", "circulate_market_value": "22821066000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "军工装备"}, {"code": "600693", "name": "东百集团", "hot_rank": 41, "hot_rank_chg": 8, "stock_cnt": 5783, "price": "10.04", "change": "-1.95", "market_id": "17", "circulate_market_value": "8724285900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "快递物流", "change_pct": -1.12}, {"name": "新零售", "change_pct": -0.84}, {"name": "福建自贸/海西概念", "change_pct": -0.33}, {"name": "旅游", "change_pct": 0.23}, {"name": "阿里巴巴概念股", "change_pct": -1.25}, {"name": "物业管理", "change_pct": -0.69}, {"name": "免税店概念", "change_pct": -1.06}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5783, "price": "11.65", "change": "-2.18", "market_id": "17", "circulate_market_value": "20214858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.86}, {"name": "核电", "change_pct": -0.23}, {"name": "锂电池", "change_pct": -1.31}, {"name": "铜箔/覆铜板", "change_pct": -0.94}, {"name": "PCB板", "change_pct": -0.99}, {"name": "中科院系", "change_pct": -1.45}, {"name": "新能源汽车", "change_pct": -0.75}, {"name": "宁德时代概念股", "change_pct": -1.14}, {"name": "固态电池", "change_pct": -1.3}, {"name": "PET复合铜箔", "change_pct": -1.31}]}, {"code": "000636", "name": "风华高科", "hot_rank": 43, "hot_rank_chg": -16, "stock_cnt": 5783, "price": "49.78", "change": "-4.03", "market_id": "33", "circulate_market_value": "57122051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 44, "hot_rank_chg": -3, "stock_cnt": 5783, "price": "85.69", "change": "0.10", "market_id": "33", "circulate_market_value": "125700003000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 45, "hot_rank_chg": -11, "stock_cnt": 5783, "price": "8.39", "change": "-7.90", "market_id": "33", "circulate_market_value": "6105951700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -1.16}, {"name": "装配式建筑", "change_pct": -0.96}, {"name": "风电", "change_pct": -0.74}, {"name": "环氧丙烷", "change_pct": -2.65}, {"name": "乡村振兴", "change_pct": -2.55}, {"name": "建筑节能", "change_pct": -0.81}, {"name": "旧改", "change_pct": -0.67}]}, {"code": "002855", "name": "捷荣技术", "hot_rank": 46, "hot_rank_chg": -18, "stock_cnt": 5783, "price": "19.01", "change": "7.34", "market_id": "33", "circulate_market_value": "4680779700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 47, "hot_rank_chg": 387, "stock_cnt": 5783, "price": "8.69", "change": "3.95", "market_id": "33", "circulate_market_value": "4707564200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.02}, {"name": "油气管网", "change_pct": -0.11}, {"name": "海工装备", "change_pct": -0.75}, {"name": "天然气", "change_pct": -0.27}, {"name": "山东国企改革", "change_pct": -0.89}, {"name": "风电", "change_pct": -0.74}, {"name": "页岩气", "change_pct": -0.26}, {"name": "国企改革", "change_pct": -0.98}, {"name": "深地经济", "change_pct": 0.29}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 48, "hot_rank_chg": -32, "stock_cnt": 5783, "price": "17.05", "change": "-2.12", "market_id": "33", "circulate_market_value": "27677685000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 49, "hot_rank_chg": 6, "stock_cnt": 5783, "price": "33.70", "change": "-3.33", "market_id": "33", "circulate_market_value": "36426947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 50, "hot_rank_chg": -29, "stock_cnt": 5783, "price": "39.83", "change": "0.20", "market_id": "33", "circulate_market_value": "30167844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 51, "hot_rank_chg": 32, "stock_cnt": 5783, "price": "7.17", "change": "-4.40", "market_id": "17", "circulate_market_value": "17142125000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.92}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "国企改革", "change_pct": -0.98}, {"name": "河南国企改革", "change_pct": -1.17}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 52, "hot_rank_chg": 23, "stock_cnt": 5783, "price": "388.86", "change": "-1.05", "market_id": "17", "circulate_market_value": "260815530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 53, "hot_rank_chg": 254, "stock_cnt": 5783, "price": "15.96", "change": "9.99", "market_id": "17", "circulate_market_value": "10431476800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻纤纱"}, {"code": "300189", "name": "神农种业", "hot_rank": 54, "hot_rank_chg": -35, "stock_cnt": 5783, "price": "6.69", "change": "-11.39", "market_id": "33", "circulate_market_value": "5929015300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.16}, {"name": "土地流转", "change_pct": -3.33}, {"name": "海南概念", "change_pct": -1.76}, {"name": "自由贸易港", "change_pct": -1.41}, {"name": "海南自由贸易港", "change_pct": -1.52}, {"name": "大农业", "change_pct": -2.13}, {"name": "水产养殖", "change_pct": -2.91}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "000564", "name": "供销大集", "hot_rank": 55, "hot_rank_chg": 10, "stock_cnt": 5783, "price": "1.63", "change": "-1.81", "market_id": "33", "circulate_market_value": "24604654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.09}, {"name": "新零售", "change_pct": -0.84}, {"name": "冷链", "change_pct": -1.16}, {"name": "社区团购", "change_pct": -2.27}, {"name": "物业管理", "change_pct": -0.69}, {"name": "低价股", "change_pct": -1.13}, {"name": "供销社", "change_pct": -1.78}, {"name": "数字乡村", "change_pct": -1.16}, {"name": "免税店概念", "change_pct": -1.06}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 56, "hot_rank_chg": 0, "stock_cnt": 5783, "price": "37.99", "change": "-0.86", "market_id": "33", "circulate_market_value": "108654161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 57, "hot_rank_chg": -6, "stock_cnt": 5783, "price": "12.52", "change": "-9.28", "market_id": "33", "circulate_market_value": "11685186500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.09}, {"name": "新疆国企改革", "change_pct": -1.93}, {"name": "新疆概念", "change_pct": -1.69}, {"name": "光伏", "change_pct": -0.91}, {"name": "风电", "change_pct": -0.74}, {"name": "储能", "change_pct": -0.77}, {"name": "国企改革", "change_pct": -0.98}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 58, "hot_rank_chg": -16, "stock_cnt": 5783, "price": "24.15", "change": "-2.82", "market_id": "17", "circulate_market_value": "10599358600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 59, "hot_rank_chg": 5, "stock_cnt": 5783, "price": "5.79", "change": "-2.03", "market_id": "33", "circulate_market_value": "204775710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.08}, {"name": "手机产业链", "change_pct": -0.78}, {"name": "超高清视频", "change_pct": -1.32}, {"name": "苹果产业链", "change_pct": -0.8}, {"name": "电竞", "change_pct": -1.15}, {"name": "半导体", "change_pct": -1.25}, {"name": "人工智能", "change_pct": -0.92}, {"name": "互联网医疗", "change_pct": -1.33}, {"name": "VR&AR", "change_pct": -0.87}, {"name": "OLED", "change_pct": -1.63}, {"name": "京津冀", "change_pct": -0.92}, {"name": "物联网", "change_pct": -0.64}, {"name": "指纹识别", "change_pct": -1.32}, {"name": "汽车零部件", "change_pct": 0.0}, {"name": "白马股", "change_pct": -1.23}, {"name": "智能制造", "change_pct": -0.82}, {"name": "小米概念股", "change_pct": -1.03}, {"name": "国产芯片", "change_pct": -1.19}, {"name": "液晶面板/LCD", "change_pct": -1.38}, {"name": "全息概念", "change_pct": -0.55}, {"name": "理想汽车概念股", "change_pct": -0.0}, {"name": "MicroLED", "change_pct": -1.29}, {"name": "钙钛矿电池", "change_pct": -1.26}, {"name": "智能手表", "change_pct": -0.45}, {"name": "MiniLED", "change_pct": -1.18}, {"name": "传感器", "change_pct": -0.77}, {"name": "大硅片", "change_pct": -1.36}, {"name": "AI PC", "change_pct": -0.81}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "回购", "change_pct": -1.25}, {"name": "光电共封装CPO", "change_pct": -1.56}, {"name": "智能眼镜/MR头显", "change_pct": -0.9}, {"name": "玻璃基板封装", "change_pct": -1.34}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 60, "hot_rank_chg": 0, "stock_cnt": 5783, "price": "11.86", "change": "1.98", "market_id": "17", "circulate_market_value": "21219180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.4}, {"name": "纯碱", "change_pct": -1.1}, {"name": "食品", "change_pct": -1.79}, {"name": "土壤修复", "change_pct": -1.02}, {"name": "东数西算/算力", "change_pct": -0.52}, {"name": "OpenClaw概念", "change_pct": -1.23}, {"name": "DeepSeek概念股", "change_pct": -1.11}]}, {"code": "601700", "name": "风范股份", "hot_rank": 61, "hot_rank_chg": -18, "stock_cnt": 5783, "price": "8.25", "change": "-1.79", "market_id": "17", "circulate_market_value": "9394747700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.89}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "光伏", "change_pct": -0.91}, {"name": "特高压", "change_pct": -0.31}, {"name": "智能电网", "change_pct": -0.52}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 62, "hot_rank_chg": -29, "stock_cnt": 5783, "price": "13.16", "change": "-2.52", "market_id": "33", "circulate_market_value": "11787861100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002265", "name": "建设工业", "hot_rank": 63, "hot_rank_chg": 620, "stock_cnt": 5783, "price": "21.44", "change": "10.01", "market_id": "33", "circulate_market_value": "22148386000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "兵装重组"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 64, "hot_rank_chg": 56, "stock_cnt": 5783, "price": "407.80", "change": "1.94", "market_id": "17", "circulate_market_value": "165704760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 65, "hot_rank_chg": 9, "stock_cnt": 5783, "price": "13.51", "change": "10.02", "market_id": "33", "circulate_market_value": "8208968400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数字人民币"}, {"code": "002384", "name": "东山精密", "hot_rank": 66, "hot_rank_chg": 0, "stock_cnt": 5783, "price": "183.43", "change": "-2.79", "market_id": "33", "circulate_market_value": "254292990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 67, "hot_rank_chg": -9, "stock_cnt": 5783, "price": "27.41", "change": "8.17", "market_id": "17", "circulate_market_value": "11839625900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000158", "name": "常山北明", "hot_rank": 68, "hot_rank_chg": -15, "stock_cnt": 5783, "price": "13.81", "change": "-0.50", "market_id": "33", "circulate_market_value": "21966789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 69, "hot_rank_chg": 159, "stock_cnt": 5783, "price": "10.14", "change": "2.63", "market_id": "17", "circulate_market_value": "4654979200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -0.5}, {"name": "电子特气", "change_pct": -1.37}, {"name": "一带一路", "change_pct": -0.89}, {"name": "天然气", "change_pct": -0.27}, {"name": "山东国企改革", "change_pct": -0.89}, {"name": "国企改革", "change_pct": -0.98}, {"name": "氦气", "change_pct": -1.24}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 70, "hot_rank_chg": 97, "stock_cnt": 5783, "price": "11.04", "change": "3.96", "market_id": "33", "circulate_market_value": "9323533700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.19}, {"name": "大飞机", "change_pct": -0.04}, {"name": "北斗导航", "change_pct": 0.07}, {"name": "高铁轨交", "change_pct": -0.39}, {"name": "军民融合", "change_pct": 0.07}, {"name": "磁悬浮", "change_pct": -0.23}, {"name": "军工", "change_pct": 0.14}, {"name": "碳纤维", "change_pct": 0.59}, {"name": "无人机", "change_pct": 0.12}, {"name": "航天", "change_pct": 0.05}, {"name": "卫星互联网", "change_pct": -0.34}, {"name": "低空经济", "change_pct": -0.39}, {"name": "海洋经济", "change_pct": -0.28}]}, {"code": "600367", "name": "红星发展", "hot_rank": 71, "hot_rank_chg": 32, "stock_cnt": 5783, "price": "38.39", "change": "1.13", "market_id": "17", "circulate_market_value": "12360550500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 72, "hot_rank_chg": -28, "stock_cnt": 5783, "price": "5.20", "change": "9.94", "market_id": "33", "circulate_market_value": "3696153800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.92}, {"name": "影视", "change_pct": -1.87}, {"name": "旅游", "change_pct": 0.23}, {"name": "虚拟数字人", "change_pct": -1.48}, {"name": "AI营销", "change_pct": -1.93}, {"name": "AI大模型/智能体", "change_pct": -1.16}, {"name": "短剧/互动影游", "change_pct": -1.46}, {"name": "IP经济/谷子经济", "change_pct": -1.25}]}, {"code": "600698", "name": "湖南天雁", "hot_rank": 73, "hot_rank_chg": 443, "stock_cnt": 5783, "price": "7.68", "change": "4.21", "market_id": "17", "circulate_market_value": "6377869400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.79}, {"name": "军工集团", "change_pct": 0.52}, {"name": "汽车零部件", "change_pct": 0.0}, {"name": "军工", "change_pct": 0.14}, {"name": "国企改革", "change_pct": -0.98}]}, {"code": "601123", "name": "马矿股份", "hot_rank": 75, "hot_rank_chg": -45, "stock_cnt": 5783, "price": "20.02", "change": "-23.00", "market_id": "17", "circulate_market_value": "1918481700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301357", "name": "北方长龙", "hot_rank": 76, "hot_rank_chg": 578, "stock_cnt": 5783, "price": "106.30", "change": "13.90", "market_id": "33", "circulate_market_value": "6609468300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 77, "hot_rank_chg": 2, "stock_cnt": 5783, "price": "18.23", "change": "-1.57", "market_id": "17", "circulate_market_value": "38128814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 78, "hot_rank_chg": 0, "stock_cnt": 5783, "price": "115.01", "change": "1.26", "market_id": "17", "circulate_market_value": "41486798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 79, "hot_rank_chg": -6, "stock_cnt": 5783, "price": "6.92", "change": "-0.72", "market_id": "33", "circulate_market_value": "13252439700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.33}, {"name": "林业", "change_pct": -1.35}, {"name": "碳中和", "change_pct": -0.65}, {"name": "自贸区", "change_pct": -0.94}]}, {"code": "605188", "name": "国光连锁", "hot_rank": 80, "hot_rank_chg": 14, "stock_cnt": 5783, "price": "15.17", "change": "1.27", "market_id": "17", "circulate_market_value": "7702514400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 81, "hot_rank_chg": 53, "stock_cnt": 5783, "price": "386.70", "change": "-4.00", "market_id": "33", "circulate_market_value": "485015830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 82, "hot_rank_chg": 7, "stock_cnt": 5783, "price": "9.81", "change": "2.40", "market_id": "33", "circulate_market_value": "11129809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.0}, {"name": "足球", "change_pct": -0.4}, {"name": "粤港澳大湾区", "change_pct": -1.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.8}, {"name": "传媒", "change_pct": -1.74}, {"name": "AIGC概念", "change_pct": -1.49}, {"name": "字节跳动概念股", "change_pct": -1.35}, {"name": "国企改革", "change_pct": -0.98}, {"name": "网红/MCN", "change_pct": -1.24}, {"name": "短剧/互动影游", "change_pct": -1.46}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 83, "hot_rank_chg": -20, "stock_cnt": 5783, "price": "13.55", "change": "-3.42", "market_id": "33", "circulate_market_value": "47125955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 84, "hot_rank_chg": -44, "stock_cnt": 5783, "price": "8.21", "change": "-9.98", "market_id": "17", "circulate_market_value": "4333255100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.16}, {"name": "棉花", "change_pct": -2.07}, {"name": "大农业", "change_pct": -2.13}, {"name": "供销社", "change_pct": -1.78}]}, {"code": "300164", "name": "通源石油", "hot_rank": 85, "hot_rank_chg": 313, "stock_cnt": 5783, "price": "10.75", "change": "1.13", "market_id": "33", "circulate_market_value": "6269513900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.02}, {"name": "一带一路", "change_pct": -0.89}, {"name": "天然气", "change_pct": -0.27}, {"name": "油气改革", "change_pct": -0.55}, {"name": "页岩气", "change_pct": -0.26}, {"name": "深地经济", "change_pct": 0.29}]}, {"code": "600522", "name": "中天科技", "hot_rank": 86, "hot_rank_chg": 6, "stock_cnt": 5783, "price": "33.64", "change": "-1.09", "market_id": "17", "circulate_market_value": "114811626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 87, "hot_rank_chg": -1, "stock_cnt": 5783, "price": "48.26", "change": "-1.25", "market_id": "17", "circulate_market_value": "40854664000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 88, "hot_rank_chg": -56, "stock_cnt": 5783, "price": "17.62", "change": "-3.40", "market_id": "33", "circulate_market_value": "10326167100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600203", "name": "福日电子", "hot_rank": 89, "hot_rank_chg": 232, "stock_cnt": 5783, "price": "11.01", "change": "-1.87", "market_id": "17", "circulate_market_value": "6528798800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.08}, {"name": "手机产业链", "change_pct": -0.78}, {"name": "LED", "change_pct": -0.78}, {"name": "机器人", "change_pct": -0.62}, {"name": "无人机", "change_pct": 0.12}, {"name": "MiniLED", "change_pct": -1.18}, {"name": "eSIM", "change_pct": 1.0}, {"name": "智慧灯杆", "change_pct": -0.74}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "智能座舱", "change_pct": -0.55}]}, {"code": "003005", "name": "竞业达", "hot_rank": 90, "hot_rank_chg": -59, "stock_cnt": 5783, "price": "20.00", "change": "10.01", "market_id": "33", "circulate_market_value": "2683893500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI教育"}, {"code": "603186", "name": "华正新材", "hot_rank": 91, "hot_rank_chg": 162, "stock_cnt": 5783, "price": "181.31", "change": "5.99", "market_id": "17", "circulate_market_value": "28427689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 92, "hot_rank_chg": 80, "stock_cnt": 5783, "price": "11.49", "change": "2.59", "market_id": "17", "circulate_market_value": "4971420200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.61}, {"name": "强势人气股", "change_pct": -1.09}, {"name": "光伏", "change_pct": -0.91}, {"name": "无线耳机", "change_pct": -0.45}, {"name": "华为产业链", "change_pct": -0.91}, {"name": "光伏胶膜", "change_pct": -0.69}]}, {"code": "600584", "name": "长电科技", "hot_rank": 93, "hot_rank_chg": 3, "stock_cnt": 5783, "price": "71.31", "change": "-2.70", "market_id": "17", "circulate_market_value": "127603153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603721", "name": "中广天择", "hot_rank": 94, "hot_rank_chg": 21, "stock_cnt": 5783, "price": "21.49", "change": "2.29", "market_id": "17", "circulate_market_value": "2793700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 95, "hot_rank_chg": -57, "stock_cnt": 5783, "price": "26.28", "change": "-7.17", "market_id": "33", "circulate_market_value": "17373331000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 96, "hot_rank_chg": 8, "stock_cnt": 5783, "price": "32.95", "change": "-2.31", "market_id": "17", "circulate_market_value": "678829080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 97, "hot_rank_chg": 2, "stock_cnt": 5783, "price": "31.00", "change": "-4.17", "market_id": "17", "circulate_market_value": "51586227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002679", "name": "福建金森", "hot_rank": 98, "hot_rank_chg": 8, "stock_cnt": 5783, "price": "12.24", "change": "-5.19", "market_id": "33", "circulate_market_value": "2885653400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.33}, {"name": "林业", "change_pct": -1.35}, {"name": "碳中和", "change_pct": -0.65}, {"name": "自贸区", "change_pct": -0.94}, {"name": "林业碳汇", "change_pct": -1.11}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 99, "hot_rank_chg": -70, "stock_cnt": 5783, "price": "14.68", "change": "-3.55", "market_id": "17", "circulate_market_value": "16096542000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 100, "hot_rank_chg": 1, "stock_cnt": 5783, "price": "57.08", "change": "0.28", "market_id": "33", "circulate_market_value": "418115440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600830", "name": "香溢融通", "price": 10.15, "change_pct": 9.97, "reason": "公司实际控制人为中国烟草总公司浙江分公司，主营典当、担保等业务", "plates": ["大金融"], "limit_up_days": 2, "turnover_ratio": 8.37, "first_limit_up": 1788312692, "break_limit_up_times": 1}, {"code": "603595", "name": "ST东尼", "price": 30.24, "change_pct": 10.0, "reason": "无线充电材料及器件领先厂商，主要包括超微细电子线材、无线充电隔磁材料", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.12, "first_limit_up": 1788330574, "break_limit_up_times": 0}, {"code": "000635", "name": "英 力 特", "price": 7.94, "change_pct": 9.97, "reason": "公司从事PVC（聚氯乙烯）和烧碱的生产，控股股东拟公开征集转让39.41%股份，转让底价不低于6.27元/股，控制权或变更", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 2.81, "first_limit_up": 1788312300, "break_limit_up_times": 0}, {"code": "603270", "name": "金帝股份", "price": 31.77, "change_pct": 10.01, "reason": "1、公司拟投资建设液冷关键换热部件及高效散热模组总成、液冷关键部件及集成式散热模组总成项目，投资额分别为2.10亿元、2.16亿元；\n2、公司在减速器领域主要有谐波减速机保持架、谐波减速机带齿保持架两类产品，谐波减速机保持架是针对机器人手指关节设计的一款保持架产品\n", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 22.46, "first_limit_up": 1788325323, "break_limit_up_times": 2}, {"code": "600967", "name": "内蒙一机", "price": 13.41, "change_pct": 10.01, "reason": "1、公司为兵器工业集团旗下企业，是我国唯一主战坦克及中重型轮式装甲车公司\n2、公司研制的两栖无人查险机器人系列产品是公司承担的国家应急管理部揭榜攻关项目，目前已完成研制，正在试验中", "plates": ["军工"], "limit_up_days": 2, "turnover_ratio": 3.82, "first_limit_up": 1788312885, "break_limit_up_times": 0}, {"code": "002708", "name": "光洋股份", "price": 14.16, "change_pct": 10.02, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.23, "first_limit_up": 1788317274, "break_limit_up_times": 1}, {"code": "000892", "name": "欢瑞世纪", "price": 5.2, "change_pct": 9.94, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 3.06, "first_limit_up": 1788312300, "break_limit_up_times": 0}, {"code": "600589", "name": "大位科技", "price": 8.68, "change_pct": 10.01, "reason": "公司为国内AIDC（人工智能数据中心）服务商，已拥有北京核心区域优质的数据中心资源，正投建张北、太仆寺旗大型智算中心，绑定互联网头部客户", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.04, "first_limit_up": 1788328332, "break_limit_up_times": 0}, {"code": "600903", "name": "贵州燃气", "price": 7.07, "change_pct": 9.95, "reason": "公司拟发行股份购买贵州页岩气勘探开发有限责任公司100%股权，标的公司实现高纯气体生产领域零的突破，高纯氦气日均产出超200立方米", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 6.46, "first_limit_up": 1788313452, "break_limit_up_times": 0}, {"code": "002999", "name": "天禾股份", "price": 7.33, "change_pct": 10.06, "reason": "公司目前已在试点地区开展农业植保无人机代理销售，未来将视市场情况在省内部分种植核心区代理农业植保无人机的销售工作", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 15.44, "first_limit_up": 1788312876, "break_limit_up_times": 3}, {"code": "002274", "name": "华昌化工", "price": 7.12, "change_pct": 10.05, "reason": "江苏省化肥行业龙头，控股股东将变更为苏州宣力", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 9.9, "first_limit_up": 1788312300, "break_limit_up_times": 2}, {"code": "002639", "name": "雪人集团", "price": 13.27, "change_pct": 10.03, "reason": "1、公司制冷压缩机与机组可作为液冷服务器的配套冷源；\n2、公司旗下雪人股份为中科院的 “人造太阳” 项目（如 EAST、中国环流三号）等核聚变项目提供氦气压缩机，并参与国家重大科研装备项目 “液氦到超流氦温区大型低温制冷系统” 研制，其生产的 “兆瓦级” 氦气压缩机设备技术达到国际领先水平，可创造核聚变实验所需的低温环境；\n3、公司位于福建省福州市，专注于冰雪场地温控设施的建设以及制冰造雪设备的供应；已为国家雪车雪橇中心、张家口崇礼长城岭滑雪场等冬奥场馆提供制冷装备;", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 10.15, "first_limit_up": 1788314031, "break_limit_up_times": 0}, {"code": "002201", "name": "九鼎新材", "price": 9.22, "change_pct": 10.02, "reason": "1、全球较大的玻纤制砂轮增强片供应商，国家航空航天特种玻纤布定点企业；\n2、公司的主要产品类别玻璃纤维复合材料就有应用于风力发电领域的风电机舱罩和叶片", "plates": ["玻纤"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1788313569, "break_limit_up_times": 3}, {"code": "603665", "name": "康隆达", "price": 22.56, "change_pct": 10.0, "reason": "消息称特斯拉灵巧手驱控方案要用到腱绳，腱绳材料主要以超高分子量聚乙烯与PBO纤维为主；公司超高分子聚乙烯具备1000吨产能", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.44, "first_limit_up": 1788328211, "break_limit_up_times": 0}, {"code": "000628", "name": "高新发展", "price": 54.79, "change_pct": 10.0, "reason": "公司此前称将持续推动对华鲲振宇公司股权收购工作", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.08, "first_limit_up": 1788316992, "break_limit_up_times": 0}, {"code": "002893", "name": "京能热力", "price": 11.17, "change_pct": 10.05, "reason": "控股股东为北京国资委，公司主营电力、热力生产供应", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 22.09, "first_limit_up": 1788313719, "break_limit_up_times": 3}, {"code": "002909", "name": "集泰股份", "price": 7.28, "change_pct": 9.97, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 3, "turnover_ratio": 6.94, "first_limit_up": 1788312300, "break_limit_up_times": 0}, {"code": "600828", "name": "茂业商业", "price": 4.81, "change_pct": 10.07, "reason": "呼和浩特零售市场龙头，旗下深圳地区的所有门店和成都地区的人东店、光华店为离境退税店", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 2.66, "first_limit_up": 1788312300, "break_limit_up_times": 1}, {"code": "002514", "name": "*ST宝馨", "price": 2.27, "change_pct": 10.19, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 12.43, "first_limit_up": 1788313467, "break_limit_up_times": 2}, {"code": "002536", "name": "飞龙股份", "price": 58.07, "change_pct": 10.0, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 10.6, "first_limit_up": 1788314184, "break_limit_up_times": 2}, {"code": "601566", "name": "九牧王", "price": 10.36, "change_pct": 9.98, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 8.5, "first_limit_up": 1788312847, "break_limit_up_times": 2}, {"code": "605577", "name": "龙版传媒", "price": 12.85, "change_pct": 10.02, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 6.0, "first_limit_up": 1788313085, "break_limit_up_times": 0}, {"code": "603530", "name": "神马电力", "price": 50.39, "change_pct": 10.0, "reason": "1、线路复合绝缘子龙头企业，在国内特高压交流和各电压等级直流输电线路工程中，中标量位居前列；上半年净利润同比增长177.52%；\n2、公司420KV T型复合横担塔有应用于英国欣克利核电站送出工程，电站复合绝缘子和密封件产品亦可用于核电项目工程配套变电站中的电气设备", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1788316931, "break_limit_up_times": 0}, {"code": "001326", "name": "联域股份", "price": 73.4, "change_pct": 10.0, "reason": "公司已完成对洛阳奥维特18%股权投资，切入机器人核心零部件赛道，奥维特薄壁交叉滚子轴承用于谐波减速器、行星减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.7, "first_limit_up": 1788325971, "break_limit_up_times": 0}, {"code": "600869", "name": "远东股份", "price": 19.5, "change_pct": 9.98, "reason": "1、公司一季报净利润同比增长110.36%，拟定增募资不超20亿元加码AIDC光纤预制棒项目；\n2、公司为环首都太行山能源信息技术产业基地项目、“全国一体化算力网络”和林格尔数据中心集群绿色能源供给示范项目、阿里巴巴张北云计算数据中心工程等提供高效、节能、安全、环保的创新解决方案；\n3、公司人形机器人线缆已应用于优必选产品，并送样智元机器人，采用高柔韧性材料，具备抗弯折和扭转性能", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.12, "first_limit_up": 1788313153, "break_limit_up_times": 1}, {"code": "603978", "name": "深圳新星", "price": 22.61, "change_pct": 10.02, "reason": "公司自身是全球头部铝晶粒细化剂制造商，全资子公司松岩新能源建设有5800吨/年的六氟磷酸锂生产产能，投资设立全资子公司赣州市松辉氟新材料有限公司，主要从事氟化锂、PVDF等新能源材料研产销", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 8.87, "first_limit_up": 1788313064, "break_limit_up_times": 1}, {"code": "002297", "name": "博云新材", "price": 20, "change_pct": 10.01, "reason": "1、公司主要从事航空机轮刹车系统及刹车材料、航天用碳 / 碳复合材料等产品；\n2、公司高性能硬质合金产品营收占总营收比重为64.34%，为核心主营业务；子公司博云东方生产的超细/纳米硬质合金棒材可提供给客户用于制作切削刀具等", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 12.02, "first_limit_up": 1788318597, "break_limit_up_times": 0}, {"code": "603778", "name": "国晟科技", "price": 10.75, "change_pct": 10.03, "reason": "全球前三大异质结产品制造商；上半年亏损同比收窄", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.55, "first_limit_up": 1788314979, "break_limit_up_times": 1}, {"code": "603701", "name": "德宏股份", "price": 21.23, "change_pct": 10.0, "reason": "公司主营车用交流发电机，处于国内商用车配套发电机行业领先地位，客户包括江铃汽车、福田康明斯、潍柴动力等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.34, "first_limit_up": 1788327318, "break_limit_up_times": 0}, {"code": "601606", "name": "长城军工", "price": 36.62, "change_pct": 10.0, "reason": "安徽省国资委旗下，公司为老牌弹药供应商", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 8.2, "first_limit_up": 1788312957, "break_limit_up_times": 1}, {"code": "603618", "name": "杭电股份", "price": 37.22, "change_pct": 9.99, "reason": "公司地处杭州，是国网杭州供电公司重要的电缆供应商和技术合作伙伴，具备光通信“光棒—光纤—光缆”一体化产业链，光缆产品通过参与电信运营商招投标实现销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 19.13, "first_limit_up": 1788319185, "break_limit_up_times": 0}, {"code": "603216", "name": "梦天家居", "price": 24.09, "change_pct": 10.0, "reason": "公司在家具行业特别是木门领域具有领导地位，此前以7000万元增资重庆凌芯微电子并持股35%，切入功率半导体晶圆代工赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.07, "first_limit_up": 1788315040, "break_limit_up_times": 1}, {"code": "000852", "name": "石化机械", "price": 6.06, "change_pct": 9.98, "reason": "公司主导产品涵盖钻采装备、钻完井工具、集输装备三大领域，覆盖陆地和海洋油气田，具体包括钻头钻具、钻井装备等", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1788312741, "break_limit_up_times": 1}, {"code": "600892", "name": "大晟文化", "price": 5.35, "change_pct": 10.08, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 2.01, "first_limit_up": 1788312301, "break_limit_up_times": 0}, {"code": "002632", "name": "道明光学", "price": 9.88, "change_pct": 10.02, "reason": "全资子公司浙江道明超导科技有限公司专注于石墨烯散热膜的研发和生产，石墨烯散热膜极佳的柔韧性使其被应用于折叠手机弯折处，公司石墨烯散热膜已应用于OPPO Find N3 Flip折叠屏手机", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.37, "first_limit_up": 1788312615, "break_limit_up_times": 1}, {"code": "603207", "name": "小方制药", "price": 27.94, "change_pct": 10.0, "reason": "外用药生产商，产品以消化类、皮肤类为主\n", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 24.16, "first_limit_up": 1788312644, "break_limit_up_times": 1}, {"code": "001278", "name": "一彬科技", "price": 18.22, "change_pct": 10.02, "reason": "公司通过参股共青城民生创新智能投资合伙企业（有限合伙）间接投资法奥意威（苏州）机器人系统有限公司，持股比例为1.28%", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.14, "first_limit_up": 1788326340, "break_limit_up_times": 0}, {"code": "002300", "name": "太阳电缆", "price": 7.63, "change_pct": 9.94, "reason": "福建升级扩容“福淡”“厦金”海底光缆，推进“福州—深圳短路径光缆”项目建设；公司产品有海底电力电缆、海底光电复合电缆、柔性直流海底电缆", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.86, "first_limit_up": 1788313587, "break_limit_up_times": 2}, {"code": "601086", "name": "国芳集团", "price": 11.1, "change_pct": 10.01, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 0.87, "first_limit_up": 1788312300, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 23.85, "change_pct": 10.01, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.88, "first_limit_up": 1788329377, "break_limit_up_times": 0}, {"code": "003005", "name": "竞业达", "price": 20, "change_pct": 10.01, "reason": "1、公司通过子公司元宇动力在河北怀来建设大型算力中心，提供算力调度、云服务及咨询运营；\n2、公司“星空教育大模型”通过国家网信办备案，累计完成文生文、文生图、文生视频等7项深度合成算法备案，形成教育垂类大模型+深度合成算法+应用落地的完整AI服务体系", "plates": ["云计算数据中心"], "limit_up_days": 4, "turnover_ratio": 3.27, "first_limit_up": 1788312300, "break_limit_up_times": 0}, {"code": "605006", "name": "山东玻纤", "price": 15.96, "change_pct": 9.99, "reason": "公司玻纤产能位居全国第四，玻纤纱为电子级玻璃纤维布的生产的原材料", "plates": ["玻纤"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1788313350, "break_limit_up_times": 2}, {"code": "001366", "name": "播恩集团", "price": 14.5, "change_pct": 10.02, "reason": "公司的主要产品为猪用饲料，拟1.25亿元收购3家饲料公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.4, "first_limit_up": 1788325734, "break_limit_up_times": 0}, {"code": "002059", "name": "云南旅游", "price": 5.25, "change_pct": 10.06, "reason": "云南省为数不多的综合性旅游上市公司", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.17, "first_limit_up": 1788313827, "break_limit_up_times": 1}, {"code": "002886", "name": "沃特股份", "price": 30.84, "change_pct": 9.99, "reason": "1、公司已有PCB用聚四氟乙烯（PTFE）材料、散热用液晶高分子（LCP）和聚醚醚酮（PEEK）材料、数据连接用LCP和高温尼龙（PPA）材料等方案；\n2、公司的聚芳醚酮产线正在建设中，其中包含PEEK产线", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 18.78, "first_limit_up": 1788313110, "break_limit_up_times": 0}, {"code": "003039", "name": "顺控发展", "price": 13.77, "change_pct": 9.98, "reason": "公司拥有供水服务全产业链，包括取水、制水、输水到终端，并拥有顺德区供水特许经营权，供水特许经营区域范围为佛山市顺德区辖区内所有镇街，现投资运营自来水厂8间，设计日供水能力160.8万立方米，服务人口超320万", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.22, "first_limit_up": 1788326046, "break_limit_up_times": 0}, {"code": "002265", "name": "建设工业", "price": 21.44, "change_pct": 10.01, "reason": "中国兵器装备集团旗下，国内领先的轻型武器装备研发制造企业", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 1.73, "first_limit_up": 1788312762, "break_limit_up_times": 1}, {"code": "605118", "name": "力鼎光电", "price": 34.44, "change_pct": 10.0, "reason": "1、公司镜头产品在AI或机器人领域的作用主要是为其提供更加清晰、完整、高效的视觉捕捉和视觉识别，已沉淀了多年机器视觉应用领域的开发和生产技术；\n2、公司参股20%上海理鑫光学，后者主要产品包括激光超短焦投影镜头、增强现实眼镜核心元器件、AR/VR镜头等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.4, "first_limit_up": 1788326944, "break_limit_up_times": 1}, {"code": "600657", "name": "信达地产", "price": 3.05, "change_pct": 10.11, "reason": "公司主要从事房地产开发，配有商业运营、物业服务、房地产专业服务，是中国信达的房地产开发业务运作平台", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.36, "first_limit_up": 1788317157, "break_limit_up_times": 1}, {"code": "002104", "name": "恒宝股份", "price": 13.51, "change_pct": 10.02, "reason": "1、首批参与中国人民银行数字货币研究所“数字人民币试点”工作的金融科技公司之一；\n2、公司重点攻关量子加密在金融场景的抗量子计算破译能力，为移动支付、跨境结算提供 “三位一体” 安全解决方案，量子加密模组获东南亚多国央行订单", "plates": ["大金融"], "limit_up_days": 2, "turnover_ratio": 22.99, "first_limit_up": 1788315582, "break_limit_up_times": 1}, {"code": "603375", "name": "盛景微", "price": 43.33, "change_pct": 10.0, "reason": "公司是一家具备高性能、超低功耗芯片设计能力的企业，依托自研数模混合芯片开发电子控制模块，其子公司上海先积集成电路在精密放大器等芯片领域有技术突破，产品应用于汽车、扫地机器人等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.58, "first_limit_up": 1788317210, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};