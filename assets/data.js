const UPDATE_TIME = "2026-09-02 05:23";
const THS_HOT = [
  {
    "name": "兵装重组概念",
    "rise": 4.66,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "液冷服务器",
    "rise": 0.28,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "创新药",
    "rise": -1.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": -4.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": -0.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "培育钻石",
    "rise": 1.13,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "PCB概念",
    "rise": -0.52,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续283天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "军工",
    "rise": 0.43,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "数字货币",
    "rise": -0.41,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "存储芯片",
    "rise": -1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续236天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": -0.43,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "易方达科顺定开",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": -0.06,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续212天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": -0.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续147天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "新股与次新股",
    "rise": 1.85,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "AI视频",
    "rise": -1.04,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "农业种植",
    "rise": -2.7,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "可燃冰",
    "rise": 0.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "油气ETF",
    "code": "885748"
  },
  {
    "name": "MLCC概念",
    "rise": -1.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "煤化工概念",
    "rise": -1.76,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "石化ETF",
    "code": "885398"
  }
];
const THS_EVENTS = [
  {
    "title": "《国家基本药物目录（2026版）》施行，794种药品新增116种",
    "desc": "",
    "heat": 205175,
    "direction": "医药",
    "themes": [
      "生物疫苗",
      "医药医疗",
      "医药商业"
    ],
    "stocks": [
      {
        "name": "浩欧博",
        "code": "688656",
        "chg": 6.332375
      }
    ]
  },
  {
    "title": "美国中央司令部：完成对伊朗境内革命卫队目标的打击",
    "desc": "",
    "heat": 163504,
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
    "title": "Fervo据报与谷歌签署近400兆瓦地热供电协议，股价盘前涨15%",
    "desc": "",
    "heat": 108805,
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
    "title": "政策红利与产业景气共振 农业板块迎来反弹",
    "desc": "",
    "heat": 96524,
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
    "title": "美伊凌晨开打！美军打击6个半小时，伊朗一婚礼遭袭",
    "desc": "",
    "heat": 30876,
    "direction": "美伊战争",
    "themes": [
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁",
      "天然气"
    ],
    "stocks": [
      {
        "name": "悦龙科技",
        "code": "920188",
        "chg": 14.479026
      }
    ]
  },
  {
    "title": "华为、小米、荣耀，多款手机涨价",
    "desc": "",
    "heat": 8115,
    "direction": "手机涨价",
    "themes": [
      "手机涨价"
    ],
    "stocks": [
      {
        "name": "歌尔股份",
        "code": "002241",
        "chg": 1.462599
      }
    ]
  },
  {
    "title": "“豆包手机”，9月将上市",
    "desc": "",
    "heat": 4396,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "铂力特",
        "code": "688333",
        "chg": 3.017699
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁悬浮压缩机",
    "change": "+1.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+1.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "热泵",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "eSIM",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "地热",
    "change": "+1.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTFE概念",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工集团",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航母",
    "change": "+0.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁电存储",
    "change": "+0.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳纤维",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "船舶",
    "change": "+0.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "通用航空",
    "change": "+0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "生物柴油/生物航煤",
    "change": "+0.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工信息化",
    "change": "+0.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "深地经济",
    "change": "+0.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+0.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "气凝胶",
    "change": "+0.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宁夏概念",
    "change": "+0.33%",
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
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5798,
    "price": "12.58",
    "change": "-4.99",
    "market_id": "17",
    "circulate_market_value": "8073632900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.4
      },
      {
        "name": "农业种植",
        "change_pct": -5.27
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.68
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.65
      },
      {
        "name": "休闲食品",
        "change_pct": -1.87
      },
      {
        "name": "食品",
        "change_pct": -1.76
      },
      {
        "name": "食品安全",
        "change_pct": -1.2
      },
      {
        "name": "社区团购",
        "change_pct": -2.15
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "预制菜",
        "change_pct": -1.96
      },
      {
        "name": "人造肉",
        "change_pct": -3.38
      },
      {
        "name": "国企改革",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 7,
    "hot_rank_chg": 10,
    "stock_cnt": 5798,
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
        "change_pct": -0.83
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 9,
    "hot_rank_chg": 0,
    "stock_cnt": 5798,
    "price": "10.16",
    "change": "-8.96",
    "market_id": "17",
    "circulate_market_value": "4869891000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "医药商业",
        "change_pct": -1.54
      },
      {
        "name": "医药",
        "change_pct": -1.41
      },
      {
        "name": "流感",
        "change_pct": -1.35
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 10,
    "hot_rank_chg": 27,
    "stock_cnt": 5798,
    "price": "5.29",
    "change": "-2.04",
    "market_id": "17",
    "circulate_market_value": "6445399700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.33
      },
      {
        "name": "煤炭",
        "change_pct": -2.71
      },
      {
        "name": "有色金属",
        "change_pct": -1.79
      },
      {
        "name": "国企改革",
        "change_pct": -1.02
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 13,
    "hot_rank_chg": -8,
    "stock_cnt": 5798,
    "price": "2.99",
    "change": "-6.27",
    "market_id": "33",
    "circulate_market_value": "7004637500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.83
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.84
      },
      {
        "name": "VR&AR",
        "change_pct": -0.93
      },
      {
        "name": "京津冀",
        "change_pct": -1.01
      },
      {
        "name": "装修装饰",
        "change_pct": -0.81
      },
      {
        "name": "住房租赁",
        "change_pct": -2.02
      },
      {
        "name": "破净股",
        "change_pct": -1.26
      },
      {
        "name": "数字经济",
        "change_pct": -0.7
      },
      {
        "name": "房产经纪",
        "change_pct": -2.99
      },
      {
        "name": "物业管理",
        "change_pct": -1.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.05
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 14,
    "hot_rank_chg": -4,
    "stock_cnt": 5798,
    "price": "9.30",
    "change": "-2.00",
    "market_id": "17",
    "circulate_market_value": "23422142000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.01
      },
      {
        "name": "工业大麻",
        "change_pct": -1.09
      },
      {
        "name": "中药",
        "change_pct": -1.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "保健品",
        "change_pct": -1.52
      },
      {
        "name": "民营医院",
        "change_pct": -1.44
      },
      {
        "name": "医药",
        "change_pct": -1.41
      },
      {
        "name": "化学原料药",
        "change_pct": -1.54
      },
      {
        "name": "流感",
        "change_pct": -1.35
      },
      {
        "name": "振兴东北",
        "change_pct": -0.98
      },
      {
        "name": "食品",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 15,
    "hot_rank_chg": -7,
    "stock_cnt": 5798,
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
        "change_pct": -1.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.62
      },
      {
        "name": "光通信",
        "change_pct": -1.1
      },
      {
        "name": "林业",
        "change_pct": -1.85
      },
      {
        "name": "军民融合",
        "change_pct": 0.12
      },
      {
        "name": "军工",
        "change_pct": 0.24
      },
      {
        "name": "人造肉",
        "change_pct": -3.38
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 17,
    "hot_rank_chg": 28,
    "stock_cnt": 5798,
    "price": "6.50",
    "change": "6.21",
    "market_id": "17",
    "circulate_market_value": "3778950200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.27
      },
      {
        "name": "新疆国企改革",
        "change_pct": -2.27
      },
      {
        "name": "农垦",
        "change_pct": -3.85
      },
      {
        "name": "棉花",
        "change_pct": -2.51
      },
      {
        "name": "新疆概念",
        "change_pct": -1.89
      },
      {
        "name": "风电",
        "change_pct": -0.62
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "国企改革",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 18,
    "hot_rank_chg": 50,
    "stock_cnt": 5798,
    "price": "4.51",
    "change": "3.91",
    "market_id": "33",
    "circulate_market_value": "9504097000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.47
      },
      {
        "name": "维生素",
        "change_pct": -2.02
      },
      {
        "name": "基因测序",
        "change_pct": -1.59
      },
      {
        "name": "民营医院",
        "change_pct": -1.44
      },
      {
        "name": "医药",
        "change_pct": -1.41
      },
      {
        "name": "化学原料药",
        "change_pct": -1.54
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.64
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 19,
    "hot_rank_chg": -1,
    "stock_cnt": 5798,
    "price": "4.70",
    "change": "-9.09",
    "market_id": "17",
    "circulate_market_value": "6004719100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -2.49
      },
      {
        "name": "化肥",
        "change_pct": -2.88
      },
      {
        "name": "保健品",
        "change_pct": -1.55
      },
      {
        "name": "民营医院",
        "change_pct": -1.42
      },
      {
        "name": "医药",
        "change_pct": -1.43
      },
      {
        "name": "煤化工",
        "change_pct": -2.76
      },
      {
        "name": "食品",
        "change_pct": -1.76
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "干细胞",
        "change_pct": -1.36
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -1.56
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 22,
    "hot_rank_chg": 3,
    "stock_cnt": 5798,
    "price": "7.05",
    "change": "0.43",
    "market_id": "33",
    "circulate_market_value": "4544672800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.88
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "装修装饰",
        "change_pct": -0.8
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.08
      },
      {
        "name": "家具家居",
        "change_pct": -0.3
      },
      {
        "name": "智能制造",
        "change_pct": -0.79
      },
      {
        "name": "3D打印",
        "change_pct": -0.44
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.2
      },
      {
        "name": "旧改",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 26,
    "hot_rank_chg": 57,
    "stock_cnt": 5798,
    "price": "7.18",
    "change": "-4.27",
    "market_id": "17",
    "circulate_market_value": "17166033000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.63
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "河南国企改革",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 27,
    "hot_rank_chg": 407,
    "stock_cnt": 5798,
    "price": "8.64",
    "change": "3.35",
    "market_id": "33",
    "circulate_market_value": "4680478100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.2
      },
      {
        "name": "油气管网",
        "change_pct": -0.25
      },
      {
        "name": "海工装备",
        "change_pct": -0.52
      },
      {
        "name": "天然气",
        "change_pct": -0.13
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.91
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "页岩气",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "深地经济",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 28,
    "hot_rank_chg": 16,
    "stock_cnt": 5798,
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
        "change_pct": -0.84
      },
      {
        "name": "影视",
        "change_pct": -1.45
      },
      {
        "name": "旅游",
        "change_pct": 0.21
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.16
      },
      {
        "name": "AI营销",
        "change_pct": -1.57
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.03
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 29,
    "hot_rank_chg": -17,
    "stock_cnt": 5798,
    "price": "5.31",
    "change": "-6.68",
    "market_id": "33",
    "circulate_market_value": "14085044000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "装修装饰",
        "change_pct": -0.8
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.08
      },
      {
        "name": "航天",
        "change_pct": 0.12
      },
      {
        "name": "旧改",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 30,
    "hot_rank_chg": -17,
    "stock_cnt": 5798,
    "price": "8.06",
    "change": "-3.59",
    "market_id": "33",
    "circulate_market_value": "13113569900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "电竞",
        "change_pct": -1.01
      },
      {
        "name": "手游",
        "change_pct": -1.43
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "人工智能",
        "change_pct": -0.84
      },
      {
        "name": "游戏",
        "change_pct": -1.41
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.69
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.06
      },
      {
        "name": "快手概念股",
        "change_pct": -1.89
      },
      {
        "name": "元宇宙",
        "change_pct": -1.09
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "web3.0",
        "change_pct": -1.21
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.32
      },
      {
        "name": "数据要素",
        "change_pct": -1.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.25
      },
      {
        "name": "AI营销",
        "change_pct": -1.57
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.38
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.99
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.05
      },
      {
        "name": "人形机器人",
        "change_pct": -0.63
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.03
      },
      {
        "name": "多模态",
        "change_pct": -1.4
      },
      {
        "name": "AI视频",
        "change_pct": -1.7
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.25
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.5
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 32,
    "hot_rank_chg": 17,
    "stock_cnt": 5798,
    "price": "10.19",
    "change": "-0.49",
    "market_id": "17",
    "circulate_market_value": "8854628800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "快递物流",
        "change_pct": -1.19
      },
      {
        "name": "新零售",
        "change_pct": -0.82
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.55
      },
      {
        "name": "旅游",
        "change_pct": 0.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.09
      },
      {
        "name": "物业管理",
        "change_pct": -1.52
      },
      {
        "name": "免税店概念",
        "change_pct": -1.03
      },
      {
        "name": "自贸区",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 34,
    "hot_rank_chg": -27,
    "stock_cnt": 5798,
    "price": "4.80",
    "change": "-5.88",
    "market_id": "33",
    "circulate_market_value": "28103025000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.76
      },
      {
        "name": "人工智能",
        "change_pct": -0.84
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.65
      },
      {
        "name": "水利",
        "change_pct": -0.69
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.14
      },
      {
        "name": "大数据",
        "change_pct": -1.1
      },
      {
        "name": "园林",
        "change_pct": -0.56
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.15
      },
      {
        "name": "数字经济",
        "change_pct": -0.69
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.06
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.26
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.23
      },
      {
        "name": "快手概念股",
        "change_pct": -1.89
      },
      {
        "name": "IGBT",
        "change_pct": -1.23
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.16
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.32
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.25
      },
      {
        "name": "氮化镓",
        "change_pct": -1.03
      },
      {
        "name": "AI营销",
        "change_pct": -1.57
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.05
      },
      {
        "name": "多模态",
        "change_pct": -1.4
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.22
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.5
      },
      {
        "name": "区块链",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 38,
    "hot_rank_chg": -19,
    "stock_cnt": 5798,
    "price": "6.81",
    "change": "-9.80",
    "market_id": "33",
    "circulate_market_value": "6035365400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.3
      },
      {
        "name": "土地流转",
        "change_pct": -3.1
      },
      {
        "name": "海南概念",
        "change_pct": -1.73
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.48
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.48
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "水产养殖",
        "change_pct": -4.35
      },
      {
        "name": "自贸区",
        "change_pct": -1.06
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 39,
    "hot_rank_chg": -16,
    "stock_cnt": 5798,
    "price": "5.97",
    "change": "4.93",
    "market_id": "33",
    "circulate_market_value": "6772944000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.73
      },
      {
        "name": "锂电池",
        "change_pct": -1.47
      },
      {
        "name": "石墨烯",
        "change_pct": -0.11
      },
      {
        "name": "新能源整车",
        "change_pct": -1.37
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.65
      },
      {
        "name": "汽车整车",
        "change_pct": -1.78
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.84
      },
      {
        "name": "白色家电",
        "change_pct": -0.03
      },
      {
        "name": "家电",
        "change_pct": -0.4
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.06
      },
      {
        "name": "热泵",
        "change_pct": 1.2
      },
      {
        "name": "轮边电机",
        "change_pct": -0.57
      },
      {
        "name": "超级电容",
        "change_pct": -1.12
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 42,
    "hot_rank_chg": 49,
    "stock_cnt": 5798,
    "price": "7.10",
    "change": "-8.27",
    "market_id": "33",
    "circulate_market_value": "4700024300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -0.74
      },
      {
        "name": "京津冀",
        "change_pct": -0.99
      },
      {
        "name": "调味品",
        "change_pct": -1.26
      },
      {
        "name": "海南概念",
        "change_pct": -1.73
      },
      {
        "name": "休闲食品",
        "change_pct": -1.84
      },
      {
        "name": "食品",
        "change_pct": -1.76
      },
      {
        "name": "人造肉",
        "change_pct": -3.35
      }
    ]
  },
  {
    "code": "000564",
    "name": "供销大集",
    "hot_rank": 44,
    "hot_rank_chg": 21,
    "stock_cnt": 5798,
    "price": "1.64",
    "change": "-1.21",
    "market_id": "33",
    "circulate_market_value": "24755602000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "新零售",
        "change_pct": -0.82
      },
      {
        "name": "冷链",
        "change_pct": -1.07
      },
      {
        "name": "社区团购",
        "change_pct": -2.13
      },
      {
        "name": "物业管理",
        "change_pct": -1.52
      },
      {
        "name": "低价股",
        "change_pct": -1.22
      },
      {
        "name": "供销社",
        "change_pct": -1.76
      },
      {
        "name": "数字乡村",
        "change_pct": -1.05
      },
      {
        "name": "免税店概念",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 45,
    "hot_rank_chg": -21,
    "stock_cnt": 5798,
    "price": "12.30",
    "change": "-6.75",
    "market_id": "17",
    "circulate_market_value": "4729935900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -1.14
      },
      {
        "name": "股权转让",
        "change_pct": -0.77
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "新疆概念",
        "change_pct": -1.9
      },
      {
        "name": "医药",
        "change_pct": -1.43
      },
      {
        "name": "流感",
        "change_pct": -1.36
      },
      {
        "name": "国资入股",
        "change_pct": -0.89
      },
      {
        "name": "减肥药",
        "change_pct": -1.53
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 47,
    "hot_rank_chg": 351,
    "stock_cnt": 5798,
    "price": "10.94",
    "change": "2.92",
    "market_id": "33",
    "circulate_market_value": "6380323900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 0.2
      },
      {
        "name": "一带一路",
        "change_pct": -0.88
      },
      {
        "name": "天然气",
        "change_pct": -0.13
      },
      {
        "name": "油气改革",
        "change_pct": -0.42
      },
      {
        "name": "页岩气",
        "change_pct": -0.15
      },
      {
        "name": "深地经济",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 50,
    "hot_rank_chg": -16,
    "stock_cnt": 5798,
    "price": "8.49",
    "change": "-6.81",
    "market_id": "33",
    "circulate_market_value": "6178728200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -1.07
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.08
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "环氧丙烷",
        "change_pct": -2.57
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.63
      },
      {
        "name": "建筑节能",
        "change_pct": -1.04
      },
      {
        "name": "旧改",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 52,
    "hot_rank_chg": -16,
    "stock_cnt": 5798,
    "price": "11.75",
    "change": "-1.34",
    "market_id": "17",
    "circulate_market_value": "20388376000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.9
      },
      {
        "name": "核电",
        "change_pct": -0.27
      },
      {
        "name": "锂电池",
        "change_pct": -1.47
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.98
      },
      {
        "name": "PCB板",
        "change_pct": -1.05
      },
      {
        "name": "中科院系",
        "change_pct": -1.31
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.84
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.24
      },
      {
        "name": "固态电池",
        "change_pct": -1.35
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 53,
    "hot_rank_chg": -2,
    "stock_cnt": 5798,
    "price": "12.83",
    "change": "-7.03",
    "market_id": "33",
    "circulate_market_value": "11974516200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "新疆国企改革",
        "change_pct": -2.29
      },
      {
        "name": "新疆概念",
        "change_pct": -1.9
      },
      {
        "name": "光伏",
        "change_pct": -0.94
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "储能",
        "change_pct": -0.8
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 61,
    "hot_rank_chg": 3,
    "stock_cnt": 5798,
    "price": "5.81",
    "change": "-1.69",
    "market_id": "33",
    "circulate_market_value": "205483050000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.3
      },
      {
        "name": "手机产业链",
        "change_pct": -1.01
      },
      {
        "name": "超高清视频",
        "change_pct": -1.21
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.97
      },
      {
        "name": "电竞",
        "change_pct": -1.01
      },
      {
        "name": "半导体",
        "change_pct": -1.5
      },
      {
        "name": "人工智能",
        "change_pct": -0.84
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.2
      },
      {
        "name": "VR&AR",
        "change_pct": -0.93
      },
      {
        "name": "OLED",
        "change_pct": -1.78
      },
      {
        "name": "京津冀",
        "change_pct": -0.99
      },
      {
        "name": "物联网",
        "change_pct": -0.62
      },
      {
        "name": "指纹识别",
        "change_pct": -1.34
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.07
      },
      {
        "name": "白马股",
        "change_pct": -1.02
      },
      {
        "name": "智能制造",
        "change_pct": -0.79
      },
      {
        "name": "小米概念股",
        "change_pct": -1.15
      },
      {
        "name": "国产芯片",
        "change_pct": -1.31
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.61
      },
      {
        "name": "全息概念",
        "change_pct": -0.51
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.26
      },
      {
        "name": "MicroLED",
        "change_pct": -1.5
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.22
      },
      {
        "name": "智能手表",
        "change_pct": -0.69
      },
      {
        "name": "MiniLED",
        "change_pct": -1.3
      },
      {
        "name": "传感器",
        "change_pct": -0.9
      },
      {
        "name": "大硅片",
        "change_pct": -1.4
      },
      {
        "name": "AI PC",
        "change_pct": -0.81
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "回购",
        "change_pct": -1.19
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.7
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.99
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.52
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 67,
    "hot_rank_chg": -7,
    "stock_cnt": 5798,
    "price": "12.02",
    "change": "3.35",
    "market_id": "17",
    "circulate_market_value": "21505442000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -1.26
      },
      {
        "name": "纯碱",
        "change_pct": -1.29
      },
      {
        "name": "食品",
        "change_pct": -1.76
      },
      {
        "name": "土壤修复",
        "change_pct": -1.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.93
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 69,
    "hot_rank_chg": 20,
    "stock_cnt": 5798,
    "price": "10.00",
    "change": "4.38",
    "market_id": "33",
    "circulate_market_value": "11345371000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.06
      },
      {
        "name": "足球",
        "change_pct": -0.23
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.69
      },
      {
        "name": "传媒",
        "change_pct": -1.5
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.32
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.25
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.1
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600828",
    "name": "茂业商业",
    "hot_rank": 71,
    "hot_rank_chg": 81,
    "stock_cnt": 5798,
    "price": "4.81",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "8327842500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.82
      },
      {
        "name": "信托",
        "change_pct": -1.8
      },
      {
        "name": "大金融",
        "change_pct": -0.78
      },
      {
        "name": "免税店概念",
        "change_pct": -1.03
      },
      {
        "name": "地摊经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 72,
    "hot_rank_chg": -5,
    "stock_cnt": 5798,
    "price": "11.94",
    "change": "-5.69",
    "market_id": "17",
    "circulate_market_value": "3771652500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.82
      },
      {
        "name": "冷链",
        "change_pct": -1.07
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.25
      },
      {
        "name": "首发经济",
        "change_pct": -1.65
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 75,
    "hot_rank_chg": 58,
    "stock_cnt": 5798,
    "price": "5.35",
    "change": "10.08",
    "market_id": "17",
    "circulate_market_value": "2992359500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.43
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.92
      },
      {
        "name": "游戏",
        "change_pct": -1.41
      },
      {
        "name": "影视",
        "change_pct": -1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 77,
    "hot_rank_chg": 151,
    "stock_cnt": 5798,
    "price": "10.05",
    "change": "1.72",
    "market_id": "17",
    "circulate_market_value": "4613662800.00",
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
        "change_pct": -1.56
      },
      {
        "name": "一带一路",
        "change_pct": -0.88
      },
      {
        "name": "天然气",
        "change_pct": -0.13
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.91
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "氦气",
        "change_pct": -1.22
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 78,
    "hot_rank_chg": 152,
    "stock_cnt": 5798,
    "price": "4.24",
    "change": "-4.07",
    "market_id": "17",
    "circulate_market_value": "4706076100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.63
      },
      {
        "name": "甲醇",
        "change_pct": -2.49
      },
      {
        "name": "煤化工",
        "change_pct": -2.76
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 79,
    "hot_rank_chg": -36,
    "stock_cnt": 5798,
    "price": "8.21",
    "change": "-2.26",
    "market_id": "17",
    "circulate_market_value": "9349197400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.88
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "光伏",
        "change_pct": -0.94
      },
      {
        "name": "特高压",
        "change_pct": -0.18
      },
      {
        "name": "智能电网",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 81,
    "hot_rank_chg": -41,
    "stock_cnt": 5798,
    "price": "8.22",
    "change": "-9.87",
    "market_id": "17",
    "circulate_market_value": "4338533100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -5.3
      },
      {
        "name": "棉花",
        "change_pct": -2.53
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "供销社",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "600203",
    "name": "福日电子",
    "hot_rank": 83,
    "hot_rank_chg": 238,
    "stock_cnt": 5798,
    "price": "11.11",
    "change": "-0.98",
    "market_id": "17",
    "circulate_market_value": "6588097600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.3
      },
      {
        "name": "手机产业链",
        "change_pct": -1.01
      },
      {
        "name": "LED",
        "change_pct": -0.8
      },
      {
        "name": "机器人",
        "change_pct": -0.54
      },
      {
        "name": "无人机",
        "change_pct": 0.17
      },
      {
        "name": "MiniLED",
        "change_pct": -1.3
      },
      {
        "name": "eSIM",
        "change_pct": 1.1
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      },
      {
        "name": "智能座舱",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 86,
    "hot_rank_chg": -17,
    "stock_cnt": 5798,
    "price": "4.79",
    "change": "-2.64",
    "market_id": "17",
    "circulate_market_value": "15655819000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.3
      },
      {
        "name": "养老产业",
        "change_pct": -1.39
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.24
      },
      {
        "name": "民营医院",
        "change_pct": -1.42
      },
      {
        "name": "地摊经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "600551",
    "name": "时代出版",
    "hot_rank": 90,
    "hot_rank_chg": -44,
    "stock_cnt": 5798,
    "price": "8.68",
    "change": "-4.41",
    "market_id": "17",
    "circulate_market_value": "5885519500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.95
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.55
      },
      {
        "name": "教育",
        "change_pct": -0.64
      },
      {
        "name": "破净股",
        "change_pct": -1.25
      },
      {
        "name": "传媒",
        "change_pct": -1.5
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "在线教育",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002632",
    "name": "道明光学",
    "hot_rank": 91,
    "hot_rank_chg": 344,
    "stock_cnt": 5798,
    "price": "9.88",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5676193500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "努比亚AI手机",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.3
      },
      {
        "name": "手机产业链",
        "change_pct": -1.01
      },
      {
        "name": "锂电池",
        "change_pct": -1.47
      },
      {
        "name": "石墨烯",
        "change_pct": -0.11
      },
      {
        "name": "VR&AR",
        "change_pct": -0.93
      },
      {
        "name": "光伏",
        "change_pct": -0.94
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.84
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.61
      },
      {
        "name": "固态电池",
        "change_pct": -1.35
      },
      {
        "name": "华为产业链",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "002679",
    "name": "福建金森",
    "hot_rank": 92,
    "hot_rank_chg": 14,
    "stock_cnt": 5798,
    "price": "12.13",
    "change": "-6.04",
    "market_id": "33",
    "circulate_market_value": "2859720300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.55
      },
      {
        "name": "林业",
        "change_pct": -1.82
      },
      {
        "name": "碳中和",
        "change_pct": -0.76
      },
      {
        "name": "自贸区",
        "change_pct": -1.06
      },
      {
        "name": "林业碳汇",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 93,
    "hot_rank_chg": -43,
    "stock_cnt": 5798,
    "price": "7.21",
    "change": "-8.73",
    "market_id": "17",
    "circulate_market_value": "7802652400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.75
      },
      {
        "name": "农业种植",
        "change_pct": -5.3
      },
      {
        "name": "化肥",
        "change_pct": -2.88
      },
      {
        "name": "转基因",
        "change_pct": -6.2
      },
      {
        "name": "土地流转",
        "change_pct": -3.1
      },
      {
        "name": "农垦",
        "change_pct": -3.87
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.63
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "大豆",
        "change_pct": -5.78
      }
    ]
  },
  {
    "code": "600508",
    "name": "上海能源",
    "hot_rank": 94,
    "hot_rank_chg": 53,
    "stock_cnt": 5798,
    "price": "11.17",
    "change": "-8.22",
    "market_id": "17",
    "circulate_market_value": "11301864100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -2.63
      },
      {
        "name": "央企改革",
        "change_pct": -0.75
      },
      {
        "name": "破净股",
        "change_pct": -1.25
      },
      {
        "name": "超超临界发电",
        "change_pct": -1.38
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "605577",
    "name": "龙版传媒",
    "hot_rank": 97,
    "hot_rank_chg": 42,
    "stock_cnt": 5798,
    "price": "12.85",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5711111100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "直播/短视频",
        "change_pct": -1.14
      },
      {
        "name": "振兴东北",
        "change_pct": -0.99
      },
      {
        "name": "传媒",
        "change_pct": -1.5
      },
      {
        "name": "中俄贸易",
        "change_pct": -0.15
      },
      {
        "name": "国企改革",
        "change_pct": -1.01
      },
      {
        "name": "在线教育",
        "change_pct": -0.32
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "002274",
    "name": "华昌化工",
    "hot_rank": 98,
    "hot_rank_chg": 522,
    "stock_cnt": 5798,
    "price": "7.12",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "6677485800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "控制权变更",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -2.49
      },
      {
        "name": "化肥",
        "change_pct": -2.88
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.45
      },
      {
        "name": "纯碱",
        "change_pct": -1.29
      },
      {
        "name": "复牌股",
        "change_pct": 1.39
      },
      {
        "name": "煤化工",
        "change_pct": -2.76
      },
      {
        "name": "大农业",
        "change_pct": -2.29
      },
      {
        "name": "丁辛醇",
        "change_pct": -1.55
      },
      {
        "name": "气凝胶",
        "change_pct": 0.3
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.14
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "12.58", "change": "-4.99", "market_id": "17", "circulate_market_value": "8073632900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.4}, {"name": "农业种植", "change_pct": -5.27}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "湖南国企改革", "change_pct": -0.68}, {"name": "乡村振兴", "change_pct": -2.65}, {"name": "休闲食品", "change_pct": -1.87}, {"name": "食品", "change_pct": -1.76}, {"name": "食品安全", "change_pct": -1.2}, {"name": "社区团购", "change_pct": -2.15}, {"name": "大农业", "change_pct": -2.29}, {"name": "预制菜", "change_pct": -1.96}, {"name": "人造肉", "change_pct": -3.38}, {"name": "国企改革", "change_pct": -1.02}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "18.11", "change": "0.28", "market_id": "17", "circulate_market_value": "12320589300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 3, "hot_rank_chg": 23, "stock_cnt": 5798, "price": "19.50", "change": "9.98", "market_id": "17", "circulate_market_value": "43277379000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力AI订单"}, {"code": "600371", "name": "万向德农", "hot_rank": 4, "hot_rank_chg": 7, "stock_cnt": 5798, "price": "14.09", "change": "0.93", "market_id": "17", "circulate_market_value": "4122424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "20.85", "change": "6.49", "market_id": "33", "circulate_market_value": "9525327900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "31.20", "change": "-10.01", "market_id": "17", "circulate_market_value": "12511200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 7, "hot_rank_chg": 10, "stock_cnt": 5798, "price": "11.10", "change": "10.01", "market_id": "17", "circulate_market_value": "7392600000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.83}]}, {"code": "601606", "name": "长城军工", "hot_rank": 8, "hot_rank_chg": 106, "stock_cnt": 5798, "price": "36.62", "change": "10.00", "market_id": "17", "circulate_market_value": "26521244000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "弹药装备"}, {"code": "600613", "name": "神奇制药", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "10.16", "change": "-8.96", "market_id": "17", "circulate_market_value": "4869891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.5}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "医药商业", "change_pct": -1.54}, {"name": "医药", "change_pct": -1.41}, {"name": "流感", "change_pct": -1.35}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 10, "hot_rank_chg": 27, "stock_cnt": 5798, "price": "5.29", "change": "-2.04", "market_id": "17", "circulate_market_value": "6445399700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.33}, {"name": "煤炭", "change_pct": -2.71}, {"name": "有色金属", "change_pct": -1.79}, {"name": "国企改革", "change_pct": -1.02}, {"name": "河南国企改革", "change_pct": -1.32}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "549.61", "change": "-3.76", "market_id": "17", "circulate_market_value": "16536512000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "21.11", "change": "3.58", "market_id": "33", "circulate_market_value": "21568086000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "2.99", "change": "-6.27", "market_id": "33", "circulate_market_value": "7004637500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.83}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "人工智能", "change_pct": -0.84}, {"name": "VR&AR", "change_pct": -0.93}, {"name": "京津冀", "change_pct": -1.01}, {"name": "装修装饰", "change_pct": -0.81}, {"name": "住房租赁", "change_pct": -2.02}, {"name": "破净股", "change_pct": -1.26}, {"name": "数字经济", "change_pct": -0.7}, {"name": "房产经纪", "change_pct": -2.99}, {"name": "物业管理", "change_pct": -1.69}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "AI大模型/智能体", "change_pct": -1.05}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "9.30", "change": "-2.00", "market_id": "17", "circulate_market_value": "23422142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.01}, {"name": "工业大麻", "change_pct": -1.09}, {"name": "中药", "change_pct": -1.5}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "保健品", "change_pct": -1.52}, {"name": "民营医院", "change_pct": -1.44}, {"name": "医药", "change_pct": -1.41}, {"name": "化学原料药", "change_pct": -1.54}, {"name": "流感", "change_pct": -1.35}, {"name": "振兴东北", "change_pct": -0.98}, {"name": "食品", "change_pct": -1.76}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 15, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "3.93", "change": "-6.21", "market_id": "17", "circulate_market_value": "8694453200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.03}, {"name": "云计算数据中心", "change_pct": -0.62}, {"name": "光通信", "change_pct": -1.1}, {"name": "林业", "change_pct": -1.85}, {"name": "军民融合", "change_pct": 0.12}, {"name": "军工", "change_pct": 0.24}, {"name": "人造肉", "change_pct": -3.38}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5798, "price": "32.97", "change": "7.92", "market_id": "17", "circulate_market_value": "7987641900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 17, "hot_rank_chg": 28, "stock_cnt": 5798, "price": "6.50", "change": "6.21", "market_id": "17", "circulate_market_value": "3778950200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.27}, {"name": "新疆国企改革", "change_pct": -2.27}, {"name": "农垦", "change_pct": -3.85}, {"name": "棉花", "change_pct": -2.51}, {"name": "新疆概念", "change_pct": -1.89}, {"name": "风电", "change_pct": -0.62}, {"name": "大农业", "change_pct": -2.29}, {"name": "国企改革", "change_pct": -1.02}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 18, "hot_rank_chg": 50, "stock_cnt": 5798, "price": "4.51", "change": "3.91", "market_id": "33", "circulate_market_value": "9504097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.5}, {"name": "强势人气股", "change_pct": -1.47}, {"name": "维生素", "change_pct": -2.02}, {"name": "基因测序", "change_pct": -1.59}, {"name": "民营医院", "change_pct": -1.44}, {"name": "医药", "change_pct": -1.41}, {"name": "化学原料药", "change_pct": -1.54}, {"name": "PD-1抑制剂", "change_pct": -0.64}]}, {"code": "600227", "name": "赤天化", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "4.70", "change": "-9.09", "market_id": "17", "circulate_market_value": "6004719100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -2.49}, {"name": "化肥", "change_pct": -2.88}, {"name": "保健品", "change_pct": -1.55}, {"name": "民营医院", "change_pct": -1.42}, {"name": "医药", "change_pct": -1.43}, {"name": "煤化工", "change_pct": -2.76}, {"name": "食品", "change_pct": -1.76}, {"name": "大农业", "change_pct": -2.29}, {"name": "干细胞", "change_pct": -1.36}, {"name": "阿尔茨海默病", "change_pct": -1.56}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "67.98", "change": "0.95", "market_id": "17", "circulate_market_value": "166798870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 21, "hot_rank_chg": 38, "stock_cnt": 5798, "price": "49.94", "change": "2.21", "market_id": "17", "circulate_market_value": "53563914000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "7.05", "change": "0.43", "market_id": "33", "circulate_market_value": "4544672800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.88}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "装修装饰", "change_pct": -0.8}, {"name": "装配式建筑", "change_pct": -1.08}, {"name": "家具家居", "change_pct": -0.3}, {"name": "智能制造", "change_pct": -0.79}, {"name": "3D打印", "change_pct": -0.44}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.2}, {"name": "旧改", "change_pct": -0.96}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 23, "hot_rank_chg": 53, "stock_cnt": 5798, "price": "37.22", "change": "9.99", "market_id": "17", "circulate_market_value": "25733000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报高增"}, {"code": "002886", "name": "沃特股份", "hot_rank": 24, "hot_rank_chg": 58, "stock_cnt": 5798, "price": "30.84", "change": "9.99", "market_id": "33", "circulate_market_value": "6447970600.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "PTFE薄膜"}, {"code": "600176", "name": "中国巨石", "hot_rank": 25, "hot_rank_chg": -11, "stock_cnt": 5798, "price": "44.01", "change": "2.30", "market_id": "17", "circulate_market_value": "174789550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 26, "hot_rank_chg": 57, "stock_cnt": 5798, "price": "7.18", "change": "-4.27", "market_id": "17", "circulate_market_value": "17166033000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.63}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "国企改革", "change_pct": -1.01}, {"name": "河南国企改革", "change_pct": -1.3}]}, {"code": "002490", "name": "山东墨龙", "hot_rank": 27, "hot_rank_chg": 407, "stock_cnt": 5798, "price": "8.64", "change": "3.35", "market_id": "33", "circulate_market_value": "4680478100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.2}, {"name": "油气管网", "change_pct": -0.25}, {"name": "海工装备", "change_pct": -0.52}, {"name": "天然气", "change_pct": -0.13}, {"name": "山东国企改革", "change_pct": -0.91}, {"name": "风电", "change_pct": -0.63}, {"name": "页岩气", "change_pct": -0.15}, {"name": "国企改革", "change_pct": -1.01}, {"name": "深地经济", "change_pct": 0.47}]}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 28, "hot_rank_chg": 16, "stock_cnt": 5798, "price": "5.20", "change": "9.94", "market_id": "33", "circulate_market_value": "3696153800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AIGC影视", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.84}, {"name": "影视", "change_pct": -1.45}, {"name": "旅游", "change_pct": 0.21}, {"name": "虚拟数字人", "change_pct": -1.16}, {"name": "AI营销", "change_pct": -1.57}, {"name": "AI大模型/智能体", "change_pct": -1.05}, {"name": "短剧/互动影游", "change_pct": -1.03}, {"name": "IP经济/谷子经济", "change_pct": -1.25}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 29, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "5.31", "change": "-6.68", "market_id": "33", "circulate_market_value": "14085044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.45}, {"name": "装修装饰", "change_pct": -0.8}, {"name": "装配式建筑", "change_pct": -1.08}, {"name": "航天", "change_pct": 0.12}, {"name": "旧改", "change_pct": -0.96}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 30, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "8.06", "change": "-3.59", "market_id": "33", "circulate_market_value": "13113569900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "电竞", "change_pct": -1.01}, {"name": "手游", "change_pct": -1.43}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "人工智能", "change_pct": -0.84}, {"name": "游戏", "change_pct": -1.41}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.69}, {"name": "腾讯概念股", "change_pct": -1.06}, {"name": "快手概念股", "change_pct": -1.89}, {"name": "元宇宙", "change_pct": -1.09}, {"name": "虚拟数字人", "change_pct": -1.16}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "web3.0", "change_pct": -1.21}, {"name": "AIGC概念", "change_pct": -1.32}, {"name": "数据要素", "change_pct": -1.08}, {"name": "字节跳动概念股", "change_pct": -1.25}, {"name": "AI营销", "change_pct": -1.57}, {"name": "ChatGPT", "change_pct": -1.38}, {"name": "智能眼镜/MR头显", "change_pct": -0.99}, {"name": "AI大模型/智能体", "change_pct": -1.05}, {"name": "人形机器人", "change_pct": -0.63}, {"name": "短剧/互动影游", "change_pct": -1.03}, {"name": "多模态", "change_pct": -1.4}, {"name": "AI视频", "change_pct": -1.7}, {"name": "IP经济/谷子经济", "change_pct": -1.25}, {"name": "小红书概念股", "change_pct": -1.5}]}, {"code": "600967", "name": "内蒙一机", "hot_rank": 31, "hot_rank_chg": 113, "stock_cnt": 5798, "price": "13.41", "change": "10.01", "market_id": "17", "circulate_market_value": "22821066000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "军工装备"}, {"code": "600693", "name": "东百集团", "hot_rank": 32, "hot_rank_chg": 17, "stock_cnt": 5798, "price": "10.19", "change": "-0.49", "market_id": "17", "circulate_market_value": "8854628800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "快递物流", "change_pct": -1.19}, {"name": "新零售", "change_pct": -0.82}, {"name": "福建自贸/海西概念", "change_pct": -0.55}, {"name": "旅游", "change_pct": 0.21}, {"name": "阿里巴巴概念股", "change_pct": -1.09}, {"name": "物业管理", "change_pct": -1.52}, {"name": "免税店概念", "change_pct": -1.03}, {"name": "自贸区", "change_pct": -1.06}]}, {"code": "600479", "name": "千金药业", "hot_rank": 33, "hot_rank_chg": 14, "stock_cnt": 5798, "price": "13.63", "change": "1.95", "market_id": "17", "circulate_market_value": "5704252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 34, "hot_rank_chg": -27, "stock_cnt": 5798, "price": "4.80", "change": "-5.88", "market_id": "33", "circulate_market_value": "28103025000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.76}, {"name": "人工智能", "change_pct": -0.84}, {"name": "云计算数据中心", "change_pct": -0.65}, {"name": "水利", "change_pct": -0.69}, {"name": "直播/短视频", "change_pct": -1.14}, {"name": "大数据", "change_pct": -1.1}, {"name": "园林", "change_pct": -0.56}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.15}, {"name": "数字经济", "change_pct": -0.69}, {"name": "腾讯概念股", "change_pct": -1.06}, {"name": "理想汽车概念股", "change_pct": -0.26}, {"name": "第三代半导体", "change_pct": -1.23}, {"name": "快手概念股", "change_pct": -1.89}, {"name": "IGBT", "change_pct": -1.23}, {"name": "虚拟数字人", "change_pct": -1.16}, {"name": "AIGC概念", "change_pct": -1.32}, {"name": "字节跳动概念股", "change_pct": -1.25}, {"name": "氮化镓", "change_pct": -1.03}, {"name": "AI营销", "change_pct": -1.57}, {"name": "AI大模型/智能体", "change_pct": -1.05}, {"name": "多模态", "change_pct": -1.4}, {"name": "液冷服务器", "change_pct": 0.22}, {"name": "小红书概念股", "change_pct": -1.5}, {"name": "区块链", "change_pct": -0.87}]}, {"code": "003005", "name": "竞业达", "hot_rank": 35, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "20.00", "change": "10.01", "market_id": "33", "circulate_market_value": "2683893500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI教育"}, {"code": "600183", "name": "生益科技", "hot_rank": 36, "hot_rank_chg": 21, "stock_cnt": 5798, "price": "145.74", "change": "0.91", "market_id": "17", "circulate_market_value": "351488280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 37, "hot_rank_chg": 35, "stock_cnt": 5798, "price": "21.77", "change": "2.93", "market_id": "33", "circulate_market_value": "25611726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 38, "hot_rank_chg": -19, "stock_cnt": 5798, "price": "6.81", "change": "-9.80", "market_id": "33", "circulate_market_value": "6035365400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.3}, {"name": "土地流转", "change_pct": -3.1}, {"name": "海南概念", "change_pct": -1.73}, {"name": "自由贸易港", "change_pct": -1.48}, {"name": "海南自由贸易港", "change_pct": -1.48}, {"name": "大农业", "change_pct": -2.29}, {"name": "水产养殖", "change_pct": -4.35}, {"name": "自贸区", "change_pct": -1.06}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 39, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "5.97", "change": "4.93", "market_id": "33", "circulate_market_value": "6772944000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.73}, {"name": "锂电池", "change_pct": -1.47}, {"name": "石墨烯", "change_pct": -0.11}, {"name": "新能源整车", "change_pct": -1.37}, {"name": "云计算数据中心", "change_pct": -0.65}, {"name": "汽车整车", "change_pct": -1.78}, {"name": "新能源汽车", "change_pct": -0.84}, {"name": "白色家电", "change_pct": -0.03}, {"name": "家电", "change_pct": -0.4}, {"name": "汽车热管理", "change_pct": -0.06}, {"name": "热泵", "change_pct": 1.2}, {"name": "轮边电机", "change_pct": -0.57}, {"name": "超级电容", "change_pct": -1.12}, {"name": "液冷服务器", "change_pct": 0.22}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "55.21", "change": "-2.28", "market_id": "17", "circulate_market_value": "248612780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "825.01", "change": "-3.99", "market_id": "33", "circulate_market_value": "915709130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 42, "hot_rank_chg": 49, "stock_cnt": 5798, "price": "7.10", "change": "-8.27", "market_id": "33", "circulate_market_value": "4700024300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -0.74}, {"name": "京津冀", "change_pct": -0.99}, {"name": "调味品", "change_pct": -1.26}, {"name": "海南概念", "change_pct": -1.73}, {"name": "休闲食品", "change_pct": -1.84}, {"name": "食品", "change_pct": -1.76}, {"name": "人造肉", "change_pct": -3.35}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 43, "hot_rank_chg": -27, "stock_cnt": 5798, "price": "17.11", "change": "-1.78", "market_id": "33", "circulate_market_value": "27775084000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000564", "name": "供销大集", "hot_rank": 44, "hot_rank_chg": 21, "stock_cnt": 5798, "price": "1.64", "change": "-1.21", "market_id": "33", "circulate_market_value": "24755602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "新零售", "change_pct": -0.82}, {"name": "冷链", "change_pct": -1.07}, {"name": "社区团购", "change_pct": -2.13}, {"name": "物业管理", "change_pct": -1.52}, {"name": "低价股", "change_pct": -1.22}, {"name": "供销社", "change_pct": -1.76}, {"name": "数字乡村", "change_pct": -1.05}, {"name": "免税店概念", "change_pct": -1.03}]}, {"code": "600721", "name": "百花医药", "hot_rank": 45, "hot_rank_chg": -21, "stock_cnt": 5798, "price": "12.30", "change": "-6.75", "market_id": "17", "circulate_market_value": "4729935900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -1.14}, {"name": "股权转让", "change_pct": -0.77}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "新疆概念", "change_pct": -1.9}, {"name": "医药", "change_pct": -1.43}, {"name": "流感", "change_pct": -1.36}, {"name": "国资入股", "change_pct": -0.89}, {"name": "减肥药", "change_pct": -1.53}]}, {"code": "000636", "name": "风华高科", "hot_rank": 46, "hot_rank_chg": -19, "stock_cnt": 5798, "price": "49.51", "change": "-4.55", "market_id": "33", "circulate_market_value": "56812228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 47, "hot_rank_chg": 351, "stock_cnt": 5798, "price": "10.94", "change": "2.92", "market_id": "33", "circulate_market_value": "6380323900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 0.2}, {"name": "一带一路", "change_pct": -0.88}, {"name": "天然气", "change_pct": -0.13}, {"name": "油气改革", "change_pct": -0.42}, {"name": "页岩气", "change_pct": -0.15}, {"name": "深地经济", "change_pct": 0.47}]}, {"code": "605188", "name": "国光连锁", "hot_rank": 48, "hot_rank_chg": 46, "stock_cnt": 5798, "price": "15.43", "change": "3.00", "market_id": "17", "circulate_market_value": "7834528500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 49, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "86.04", "change": "0.51", "market_id": "33", "circulate_market_value": "126213424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 50, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "8.49", "change": "-6.81", "market_id": "33", "circulate_market_value": "6178728200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -1.07}, {"name": "装配式建筑", "change_pct": -1.08}, {"name": "风电", "change_pct": -0.63}, {"name": "环氧丙烷", "change_pct": -2.57}, {"name": "乡村振兴", "change_pct": -2.63}, {"name": "建筑节能", "change_pct": -1.04}, {"name": "旧改", "change_pct": -0.96}]}, {"code": "002407", "name": "多氟多", "hot_rank": 51, "hot_rank_chg": 4, "stock_cnt": 5798, "price": "33.99", "change": "-2.50", "market_id": "33", "circulate_market_value": "36740413000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 52, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "11.75", "change": "-1.34", "market_id": "17", "circulate_market_value": "20388376000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.9}, {"name": "核电", "change_pct": -0.27}, {"name": "锂电池", "change_pct": -1.47}, {"name": "铜箔/覆铜板", "change_pct": -0.98}, {"name": "PCB板", "change_pct": -1.05}, {"name": "中科院系", "change_pct": -1.31}, {"name": "新能源汽车", "change_pct": -0.84}, {"name": "宁德时代概念股", "change_pct": -1.24}, {"name": "固态电池", "change_pct": -1.35}, {"name": "PET复合铜箔", "change_pct": -1.45}]}, {"code": "001258", "name": "立新能源", "hot_rank": 53, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "12.83", "change": "-7.03", "market_id": "33", "circulate_market_value": "11974516200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.45}, {"name": "新疆国企改革", "change_pct": -2.29}, {"name": "新疆概念", "change_pct": -1.9}, {"name": "光伏", "change_pct": -0.94}, {"name": "风电", "change_pct": -0.63}, {"name": "储能", "change_pct": -0.8}, {"name": "国企改革", "change_pct": -1.01}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 54, "hot_rank_chg": -33, "stock_cnt": 5798, "price": "40.94", "change": "3.15", "market_id": "33", "circulate_market_value": "31054019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 55, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "15.36", "change": "4.92", "market_id": "17", "circulate_market_value": "19726519000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000158", "name": "常山北明", "hot_rank": 56, "hot_rank_chg": -3, "stock_cnt": 5798, "price": "13.92", "change": "0.29", "market_id": "33", "circulate_market_value": "22141760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 57, "hot_rank_chg": 18, "stock_cnt": 5798, "price": "390.72", "change": "-0.58", "market_id": "17", "circulate_market_value": "262063060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 58, "hot_rank_chg": -30, "stock_cnt": 5798, "price": "18.71", "change": "5.70", "market_id": "33", "circulate_market_value": "4609373800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 59, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "24.43", "change": "-1.69", "market_id": "17", "circulate_market_value": "10722249700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 61, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "5.81", "change": "-1.69", "market_id": "33", "circulate_market_value": "205483050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.3}, {"name": "手机产业链", "change_pct": -1.01}, {"name": "超高清视频", "change_pct": -1.21}, {"name": "苹果产业链", "change_pct": -0.97}, {"name": "电竞", "change_pct": -1.01}, {"name": "半导体", "change_pct": -1.5}, {"name": "人工智能", "change_pct": -0.84}, {"name": "互联网医疗", "change_pct": -1.2}, {"name": "VR&AR", "change_pct": -0.93}, {"name": "OLED", "change_pct": -1.78}, {"name": "京津冀", "change_pct": -0.99}, {"name": "物联网", "change_pct": -0.62}, {"name": "指纹识别", "change_pct": -1.34}, {"name": "汽车零部件", "change_pct": -0.07}, {"name": "白马股", "change_pct": -1.02}, {"name": "智能制造", "change_pct": -0.79}, {"name": "小米概念股", "change_pct": -1.15}, {"name": "国产芯片", "change_pct": -1.31}, {"name": "液晶面板/LCD", "change_pct": -1.61}, {"name": "全息概念", "change_pct": -0.51}, {"name": "理想汽车概念股", "change_pct": -0.26}, {"name": "MicroLED", "change_pct": -1.5}, {"name": "钙钛矿电池", "change_pct": -1.22}, {"name": "智能手表", "change_pct": -0.69}, {"name": "MiniLED", "change_pct": -1.3}, {"name": "传感器", "change_pct": -0.9}, {"name": "大硅片", "change_pct": -1.4}, {"name": "AI PC", "change_pct": -0.81}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "回购", "change_pct": -1.19}, {"name": "光电共封装CPO", "change_pct": -1.7}, {"name": "智能眼镜/MR头显", "change_pct": -0.99}, {"name": "玻璃基板封装", "change_pct": -1.52}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 62, "hot_rank_chg": -30, "stock_cnt": 5798, "price": "17.67", "change": "-3.12", "market_id": "33", "circulate_market_value": "10355469500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601123", "name": "马矿股份", "hot_rank": 63, "hot_rank_chg": -33, "stock_cnt": 5798, "price": "20.34", "change": "-21.77", "market_id": "17", "circulate_market_value": "1949146800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 64, "hot_rank_chg": -35, "stock_cnt": 5798, "price": "14.74", "change": "-3.15", "market_id": "17", "circulate_market_value": "16162332000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 65, "hot_rank_chg": -32, "stock_cnt": 5798, "price": "13.01", "change": "-3.63", "market_id": "33", "circulate_market_value": "11653501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301688", "name": "格林生物", "hot_rank": 66, "hot_rank_chg": 1506, "stock_cnt": 5798, "price": "55.90", "change": "112.31", "market_id": "33", "circulate_market_value": "1452558900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 67, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "12.02", "change": "3.35", "market_id": "17", "circulate_market_value": "21505442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -1.26}, {"name": "纯碱", "change_pct": -1.29}, {"name": "食品", "change_pct": -1.76}, {"name": "土壤修复", "change_pct": -1.09}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "OpenClaw概念", "change_pct": -0.93}, {"name": "DeepSeek概念股", "change_pct": -0.97}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 68, "hot_rank_chg": -12, "stock_cnt": 5798, "price": "38.30", "change": "-0.05", "market_id": "33", "circulate_market_value": "109540783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 69, "hot_rank_chg": 20, "stock_cnt": 5798, "price": "10.00", "change": "4.38", "market_id": "33", "circulate_market_value": "11345371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.06}, {"name": "足球", "change_pct": -0.23}, {"name": "粤港澳大湾区", "change_pct": -1.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.69}, {"name": "传媒", "change_pct": -1.5}, {"name": "AIGC概念", "change_pct": -1.32}, {"name": "字节跳动概念股", "change_pct": -1.25}, {"name": "国企改革", "change_pct": -1.01}, {"name": "网红/MCN", "change_pct": -1.1}, {"name": "短剧/互动影游", "change_pct": -1.03}]}, {"code": "002384", "name": "东山精密", "hot_rank": 70, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "183.05", "change": "-2.97", "market_id": "33", "circulate_market_value": "253821640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600828", "name": "茂业商业", "hot_rank": 71, "hot_rank_chg": 81, "stock_cnt": 5798, "price": "4.81", "change": "10.07", "market_id": "17", "circulate_market_value": "8327842500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.82}, {"name": "信托", "change_pct": -1.8}, {"name": "大金融", "change_pct": -0.78}, {"name": "免税店概念", "change_pct": -1.03}, {"name": "地摊经济", "change_pct": -1.54}]}, {"code": "600785", "name": "新华百货", "hot_rank": 72, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "11.94", "change": "-5.69", "market_id": "17", "circulate_market_value": "3771652500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.82}, {"name": "冷链", "change_pct": -1.07}, {"name": "宁夏概念", "change_pct": 0.28}, {"name": "IP经济/谷子经济", "change_pct": -1.25}, {"name": "首发经济", "change_pct": -1.65}]}, {"code": "002104", "name": "恒宝股份", "hot_rank": 74, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "13.51", "change": "10.02", "market_id": "33", "circulate_market_value": "8208968400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数字人民币"}, {"code": "600892", "name": "大晟文化", "hot_rank": 75, "hot_rank_chg": 58, "stock_cnt": 5798, "price": "5.35", "change": "10.08", "market_id": "17", "circulate_market_value": "2992359500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": -1.43}, {"name": "ST摘帽", "change_pct": -0.92}, {"name": "游戏", "change_pct": -1.41}, {"name": "影视", "change_pct": -1.45}, {"name": "短剧/互动影游", "change_pct": -1.03}]}, {"code": "002837", "name": "英维克", "hot_rank": 76, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "66.56", "change": "1.06", "market_id": "33", "circulate_market_value": "75473790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 77, "hot_rank_chg": 151, "stock_cnt": 5798, "price": "10.05", "change": "1.72", "market_id": "17", "circulate_market_value": "4613662800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -0.5}, {"name": "电子特气", "change_pct": -1.56}, {"name": "一带一路", "change_pct": -0.88}, {"name": "天然气", "change_pct": -0.13}, {"name": "山东国企改革", "change_pct": -0.91}, {"name": "国企改革", "change_pct": -1.01}, {"name": "氦气", "change_pct": -1.22}]}, {"code": "600792", "name": "云煤能源", "hot_rank": 78, "hot_rank_chg": 152, "stock_cnt": 5798, "price": "4.24", "change": "-4.07", "market_id": "17", "circulate_market_value": "4706076100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.63}, {"name": "甲醇", "change_pct": -2.49}, {"name": "煤化工", "change_pct": -2.76}]}, {"code": "601700", "name": "风范股份", "hot_rank": 79, "hot_rank_chg": -36, "stock_cnt": 5798, "price": "8.21", "change": "-2.26", "market_id": "17", "circulate_market_value": "9349197400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.88}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "光伏", "change_pct": -0.94}, {"name": "特高压", "change_pct": -0.18}, {"name": "智能电网", "change_pct": -0.5}]}, {"code": "002265", "name": "建设工业", "hot_rank": 80, "hot_rank_chg": 603, "stock_cnt": 5798, "price": "21.44", "change": "10.01", "market_id": "33", "circulate_market_value": "22148386000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "兵装重组"}, {"code": "600354", "name": "敦煌种业", "hot_rank": 81, "hot_rank_chg": -41, "stock_cnt": 5798, "price": "8.22", "change": "-9.87", "market_id": "17", "circulate_market_value": "4338533100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -5.3}, {"name": "棉花", "change_pct": -2.53}, {"name": "大农业", "change_pct": -2.29}, {"name": "供销社", "change_pct": -1.76}]}, {"code": "300364", "name": "中文在线", "hot_rank": 82, "hot_rank_chg": -44, "stock_cnt": 5798, "price": "26.44", "change": "-6.61", "market_id": "33", "circulate_market_value": "17479105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600203", "name": "福日电子", "hot_rank": 83, "hot_rank_chg": 238, "stock_cnt": 5798, "price": "11.11", "change": "-0.98", "market_id": "17", "circulate_market_value": "6588097600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.3}, {"name": "手机产业链", "change_pct": -1.01}, {"name": "LED", "change_pct": -0.8}, {"name": "机器人", "change_pct": -0.54}, {"name": "无人机", "change_pct": 0.17}, {"name": "MiniLED", "change_pct": -1.3}, {"name": "eSIM", "change_pct": 1.1}, {"name": "智慧灯杆", "change_pct": -0.69}, {"name": "华为产业链", "change_pct": -0.89}, {"name": "智能座舱", "change_pct": -0.62}]}, {"code": "603721", "name": "中广天择", "hot_rank": 84, "hot_rank_chg": 31, "stock_cnt": 5798, "price": "21.65", "change": "3.05", "market_id": "17", "circulate_market_value": "2814500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 85, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "112.44", "change": "-1.00", "market_id": "17", "circulate_market_value": "40559739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 86, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "4.79", "change": "-2.64", "market_id": "17", "circulate_market_value": "15655819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.3}, {"name": "养老产业", "change_pct": -1.39}, {"name": "粤港澳大湾区", "change_pct": -1.24}, {"name": "民营医院", "change_pct": -1.42}, {"name": "地摊经济", "change_pct": -1.54}]}, {"code": "600667", "name": "太极实业", "hot_rank": 87, "hot_rank_chg": -8, "stock_cnt": 5798, "price": "18.17", "change": "-1.89", "market_id": "17", "circulate_market_value": "38003321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 88, "hot_rank_chg": 15, "stock_cnt": 5798, "price": "38.77", "change": "2.13", "market_id": "17", "circulate_market_value": "12482900300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 89, "hot_rank_chg": 164, "stock_cnt": 5798, "price": "182.00", "change": "6.39", "market_id": "17", "circulate_market_value": "28535874000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600551", "name": "时代出版", "hot_rank": 90, "hot_rank_chg": -44, "stock_cnt": 5798, "price": "8.68", "change": "-4.41", "market_id": "17", "circulate_market_value": "5885519500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -0.95}, {"name": "安徽国企改革", "change_pct": -1.55}, {"name": "教育", "change_pct": -0.64}, {"name": "破净股", "change_pct": -1.25}, {"name": "传媒", "change_pct": -1.5}, {"name": "国企改革", "change_pct": -1.01}, {"name": "在线教育", "change_pct": -0.32}]}, {"code": "002632", "name": "道明光学", "hot_rank": 91, "hot_rank_chg": 344, "stock_cnt": 5798, "price": "9.88", "change": "10.02", "market_id": "33", "circulate_market_value": "5676193500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "努比亚AI手机", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.3}, {"name": "手机产业链", "change_pct": -1.01}, {"name": "锂电池", "change_pct": -1.47}, {"name": "石墨烯", "change_pct": -0.11}, {"name": "VR&AR", "change_pct": -0.93}, {"name": "光伏", "change_pct": -0.94}, {"name": "新能源汽车", "change_pct": -0.84}, {"name": "液晶面板/LCD", "change_pct": -1.61}, {"name": "固态电池", "change_pct": -1.35}, {"name": "华为产业链", "change_pct": -0.89}]}, {"code": "002679", "name": "福建金森", "hot_rank": 92, "hot_rank_chg": 14, "stock_cnt": 5798, "price": "12.13", "change": "-6.04", "market_id": "33", "circulate_market_value": "2859720300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.55}, {"name": "林业", "change_pct": -1.82}, {"name": "碳中和", "change_pct": -0.76}, {"name": "自贸区", "change_pct": -1.06}, {"name": "林业碳汇", "change_pct": -0.87}]}, {"code": "600313", "name": "农发种业", "hot_rank": 93, "hot_rank_chg": -43, "stock_cnt": 5798, "price": "7.21", "change": "-8.73", "market_id": "17", "circulate_market_value": "7802652400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.75}, {"name": "农业种植", "change_pct": -5.3}, {"name": "化肥", "change_pct": -2.88}, {"name": "转基因", "change_pct": -6.2}, {"name": "土地流转", "change_pct": -3.1}, {"name": "农垦", "change_pct": -3.87}, {"name": "乡村振兴", "change_pct": -2.63}, {"name": "大农业", "change_pct": -2.29}, {"name": "国企改革", "change_pct": -1.01}, {"name": "大豆", "change_pct": -5.78}]}, {"code": "600508", "name": "上海能源", "hot_rank": 94, "hot_rank_chg": 53, "stock_cnt": 5798, "price": "11.17", "change": "-8.22", "market_id": "17", "circulate_market_value": "11301864100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -2.63}, {"name": "央企改革", "change_pct": -0.75}, {"name": "破净股", "change_pct": -1.25}, {"name": "超超临界发电", "change_pct": -1.38}, {"name": "国企改革", "change_pct": -1.01}]}, {"code": "600584", "name": "长电科技", "hot_rank": 95, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "71.45", "change": "-2.51", "market_id": "17", "circulate_market_value": "127853671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 96, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "33.78", "change": "-0.68", "market_id": "17", "circulate_market_value": "115289439000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 97, "hot_rank_chg": 42, "stock_cnt": 5798, "price": "12.85", "change": "10.02", "market_id": "17", "circulate_market_value": "5711111100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "直播/短视频", "change_pct": -1.14}, {"name": "振兴东北", "change_pct": -0.99}, {"name": "传媒", "change_pct": -1.5}, {"name": "中俄贸易", "change_pct": -0.15}, {"name": "国企改革", "change_pct": -1.01}, {"name": "在线教育", "change_pct": -0.32}, {"name": "短剧/互动影游", "change_pct": -1.03}]}, {"code": "002274", "name": "华昌化工", "hot_rank": 98, "hot_rank_chg": 522, "stock_cnt": 5798, "price": "7.12", "change": "10.05", "market_id": "33", "circulate_market_value": "6677485800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权变更", "xgb_concepts": [{"name": "甲醇", "change_pct": -2.49}, {"name": "化肥", "change_pct": -2.88}, {"name": "氢能源/燃料电池", "change_pct": -0.45}, {"name": "纯碱", "change_pct": -1.29}, {"name": "复牌股", "change_pct": 1.39}, {"name": "煤化工", "change_pct": -2.76}, {"name": "大农业", "change_pct": -2.29}, {"name": "丁辛醇", "change_pct": -1.55}, {"name": "气凝胶", "change_pct": 0.3}, {"name": "新冠病毒防治", "change_pct": -1.14}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 99, "hot_rank_chg": -36, "stock_cnt": 5798, "price": "13.59", "change": "-3.14", "market_id": "33", "circulate_market_value": "47265073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 100, "hot_rank_chg": -14, "stock_cnt": 5798, "price": "48.43", "change": "-0.90", "market_id": "17", "circulate_market_value": "40998578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};