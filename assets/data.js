const UPDATE_TIME = "2026-09-08 20:37";
const THS_HOT = [
  {
    "name": "代糖概念",
    "rise": 5.18,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885904"
  },
  {
    "name": "创新药",
    "rise": 1.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续118天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 3.47,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "化肥",
    "rise": 4.26,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885967"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续288天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "玉米",
    "rise": 4.42,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885811"
  },
  {
    "name": "农业种植",
    "rise": 3.12,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "AI应用",
    "rise": 0.55,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": -0.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "液冷服务器",
    "rise": -0.82,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "草甘膦",
    "rise": 4.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885640"
  },
  {
    "name": "存储芯片",
    "rise": -0.16,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续241天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": 0.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "科创红土LOF",
    "code": "886084"
  },
  {
    "name": "猪肉",
    "rise": 0.18,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "金属铜",
    "rise": 1.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885973"
  },
  {
    "name": "军工",
    "rise": 0.47,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "CRO概念",
    "rise": 2.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "黄金概念",
    "rise": 1.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "煤化工概念",
    "rise": 2.92,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885398"
  },
  {
    "name": "算力租赁",
    "rise": -0.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续152天上榜",
    "rankChg": 2,
    "etfName": "云计算ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "全球食品价格8月继续上涨，极端天气与地缘紧张推高成本",
    "desc": "",
    "heat": 598151,
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
        "name": "骑士乳业",
        "code": "920786",
        "chg": 11.967779
      }
    ]
  },
  {
    "title": "泰国糖产大降 全球糖市供应趋紧",
    "desc": "",
    "heat": 582400,
    "direction": "代糖概念",
    "themes": [
      "代糖概念"
    ],
    "stocks": [
      {
        "name": "三元生物",
        "code": "301206",
        "chg": 14.261532
      }
    ]
  },
  {
    "title": "商务部：原产于日本的进口二氯二氢硅存在倾销",
    "desc": "",
    "heat": 505946,
    "direction": "二氯二氢硅",
    "themes": [
      "二氯二氢硅"
    ],
    "stocks": [
      {
        "name": "新安股份",
        "code": "600596",
        "chg": 10.018215
      }
    ]
  },
  {
    "title": "华为Mate XT 2首发搭载麒麟9050 Pro芯片 售价19999元起",
    "desc": "",
    "heat": 318428,
    "direction": "华为概念",
    "themes": [
      "华为概念",
      "华为手机"
    ],
    "stocks": [
      {
        "name": "ST荣科",
        "code": "300290",
        "chg": 13.678373
      }
    ]
  },
  {
    "title": "LME铜价创历史新高",
    "desc": "",
    "heat": 287299,
    "direction": "铜价",
    "themes": [
      "金属铜"
    ],
    "stocks": [
      {
        "name": "精艺股份",
        "code": "002295",
        "chg": 10.031348
      }
    ]
  },
  {
    "title": "国家版权局印发《版权工作“十五五”规划》",
    "desc": "",
    "heat": 255495,
    "direction": "出版传媒",
    "themes": [
      "文化传媒概念",
      "文化传媒",
      "出版传媒"
    ],
    "stocks": [
      {
        "name": "中信出版",
        "code": "300788",
        "chg": 19.992441
      }
    ]
  },
  {
    "title": "信息通信行业发展“十五五”规划发布 到2030年我国将全面建成新一代通信网",
    "desc": "",
    "heat": 50220,
    "direction": "通信网",
    "themes": [
      "卫星互联网",
      "6G概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "武汉凡谷",
        "code": "002194",
        "chg": 10.029791
      }
    ]
  },
  {
    "title": "全球首款 AI 智能体手机努比亚 NaviX Ultra 定档 9 月 16 日发布",
    "desc": "",
    "heat": 19081,
    "direction": "AI手机",
    "themes": [
      "AI手机"
    ],
    "stocks": [
      {
        "name": "中京电子",
        "code": "002579",
        "chg": 9.993553
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白糖",
    "change": "+8.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甜味剂/代糖",
    "change": "+6.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+6.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+5.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草铵膦",
    "change": "+5.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化肥",
    "change": "+4.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化工",
    "change": "+4.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+4.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+4.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+4.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+4.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+4.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虫害防治",
    "change": "+3.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+3.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+3.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农药",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "蜜雪冰城概念股",
    "change": "+3.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果期货",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 6,
    "hot_rank_chg": 2,
    "stock_cnt": 5880,
    "price": "5.28",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "10279711800.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "玉米制种",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "土地流转",
        "change_pct": 2.62
      },
      {
        "name": "农垦",
        "change_pct": 3.13
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.29
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 6.75
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "002470",
    "name": "金正大",
    "hot_rank": 10,
    "hot_rank_chg": 12,
    "stock_cnt": 5880,
    "price": "2.53",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8312936500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "复合肥",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": 4.93
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.21
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "低价股",
        "change_pct": 2.2
      },
      {
        "name": "数字乡村",
        "change_pct": 1.29
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 11,
    "hot_rank_chg": 5,
    "stock_cnt": 5880,
    "price": "3.44",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "8058847100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.17
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "VR&AR",
        "change_pct": -0.22
      },
      {
        "name": "京津冀",
        "change_pct": 1.39
      },
      {
        "name": "装修装饰",
        "change_pct": 0.75
      },
      {
        "name": "住房租赁",
        "change_pct": 2.85
      },
      {
        "name": "破净股",
        "change_pct": 1.46
      },
      {
        "name": "数字经济",
        "change_pct": 0.41
      },
      {
        "name": "房产经纪",
        "change_pct": 5.09
      },
      {
        "name": "物业管理",
        "change_pct": 2.28
      },
      {
        "name": "华为产业链",
        "change_pct": -0.08
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 12,
    "hot_rank_chg": 5,
    "stock_cnt": 5880,
    "price": "7.87",
    "change": "9.31",
    "market_id": "17",
    "circulate_market_value": "33679097000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "橡胶",
        "change_pct": 4.24
      },
      {
        "name": "土地流转",
        "change_pct": 2.62
      },
      {
        "name": "农垦",
        "change_pct": 3.13
      },
      {
        "name": "海南概念",
        "change_pct": 1.27
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.23
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.23
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.15
      },
      {
        "name": "大消费",
        "change_pct": 0.71
      },
      {
        "name": "免税店概念",
        "change_pct": 1.02
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 13,
    "hot_rank_chg": 23,
    "stock_cnt": 5880,
    "price": "3.96",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7107479500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "食糖业务",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": 2.08
      },
      {
        "name": "调味品",
        "change_pct": 2.59
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.6
      },
      {
        "name": "白糖",
        "change_pct": 9.05
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 6.75
      },
      {
        "name": "物业管理",
        "change_pct": 2.28
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "饮料",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 15,
    "hot_rank_chg": 12,
    "stock_cnt": 5880,
    "price": "10.48",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "5531365800.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "棉花",
        "change_pct": 1.93
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "供销社",
        "change_pct": 3.44
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 17,
    "hot_rank_chg": -4,
    "stock_cnt": 5880,
    "price": "4.96",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6336895000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 4.78
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "保健品",
        "change_pct": 1.12
      },
      {
        "name": "民营医院",
        "change_pct": 1.63
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "煤化工",
        "change_pct": 4.87
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "干细胞",
        "change_pct": 3.08
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 21,
    "hot_rank_chg": -6,
    "stock_cnt": 5880,
    "price": "7.75",
    "change": "-3.12",
    "market_id": "17",
    "circulate_market_value": "19518452000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "工业大麻",
        "change_pct": 1.08
      },
      {
        "name": "中药",
        "change_pct": 1.67
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "保健品",
        "change_pct": 1.12
      },
      {
        "name": "民营医院",
        "change_pct": 1.63
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "流感",
        "change_pct": 1.52
      },
      {
        "name": "振兴东北",
        "change_pct": 2.2
      },
      {
        "name": "食品",
        "change_pct": 1.95
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 22,
    "hot_rank_chg": 10,
    "stock_cnt": 5880,
    "price": "7.70",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5048936400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "新零售",
        "change_pct": 1.17
      },
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "冷链",
        "change_pct": 1.07
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "预制菜",
        "change_pct": 1.4
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.15
      },
      {
        "name": "免税店概念",
        "change_pct": 1.02
      },
      {
        "name": "湖北国企改革",
        "change_pct": 2.19
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 25,
    "hot_rank_chg": 15,
    "stock_cnt": 5880,
    "price": "5.09",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "3894566300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.67
      },
      {
        "name": "股权转让",
        "change_pct": 0.73
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.22
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "医药商业",
        "change_pct": 1.44
      },
      {
        "name": "保健品",
        "change_pct": 1.12
      },
      {
        "name": "民营医院",
        "change_pct": 1.63
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.76
      },
      {
        "name": "口腔",
        "change_pct": 1.05
      },
      {
        "name": "医美",
        "change_pct": 1.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 27,
    "hot_rank_chg": 6,
    "stock_cnt": 5880,
    "price": "8.72",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "3317326800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "6",
    "change_reason": "液冷硅油",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.03
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "有机硅",
        "change_pct": 2.0
      },
      {
        "name": "装修装饰",
        "change_pct": 0.75
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "光伏",
        "change_pct": 0.16
      },
      {
        "name": "船舶",
        "change_pct": 0.74
      },
      {
        "name": "固态电池",
        "change_pct": -0.13
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.04
      },
      {
        "name": "旧改",
        "change_pct": 1.14
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.05
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 29,
    "hot_rank_chg": -3,
    "stock_cnt": 5880,
    "price": "5.56",
    "change": "4.32",
    "market_id": "33",
    "circulate_market_value": "14748181000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "装修装饰",
        "change_pct": 0.75
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "航天",
        "change_pct": 0.49
      },
      {
        "name": "旧改",
        "change_pct": 1.14
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 34,
    "hot_rank_chg": 7,
    "stock_cnt": 5880,
    "price": "3.32",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "15510206000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储芯片",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.66
      },
      {
        "name": "股权转让",
        "change_pct": 0.73
      },
      {
        "name": "房地产",
        "change_pct": 2.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.31
      },
      {
        "name": "京津冀",
        "change_pct": 1.39
      },
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "国产芯片",
        "change_pct": -0.84
      },
      {
        "name": "内存",
        "change_pct": 0.43
      },
      {
        "name": "闪存",
        "change_pct": 0.43
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 37,
    "hot_rank_chg": -2,
    "stock_cnt": 5880,
    "price": "7.90",
    "change": "0.38",
    "market_id": "33",
    "circulate_market_value": "15129230000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.32
      },
      {
        "name": "林业",
        "change_pct": 1.71
      },
      {
        "name": "碳中和",
        "change_pct": 1.0
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "601949",
    "name": "中国出版",
    "hot_rank": 38,
    "hot_rank_chg": 1,
    "stock_cnt": 5880,
    "price": "7.05",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "13422975000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.4
      },
      {
        "name": "中字头",
        "change_pct": 0.9
      },
      {
        "name": "数字经济",
        "change_pct": 0.41
      },
      {
        "name": "知识产权",
        "change_pct": 3.01
      },
      {
        "name": "传媒",
        "change_pct": 2.66
      },
      {
        "name": "NFT",
        "change_pct": 1.78
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "知识付费",
        "change_pct": 3.76
      }
    ]
  },
  {
    "code": "002702",
    "name": "海欣食品",
    "hot_rank": 41,
    "hot_rank_chg": 14,
    "stock_cnt": 5880,
    "price": "6.79",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "3114870100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "速冻食品",
    "xgb_concepts": [
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "预制菜",
        "change_pct": 1.4
      },
      {
        "name": "人造肉",
        "change_pct": 2.73
      },
      {
        "name": "地摊经济",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "000930",
    "name": "中粮科技",
    "hot_rank": 42,
    "hot_rank_chg": 23,
    "stock_cnt": 5880,
    "price": "5.83",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "10822246300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "功能糖",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.4
      },
      {
        "name": "饲料",
        "change_pct": 2.19
      },
      {
        "name": "白酒",
        "change_pct": 0.33
      },
      {
        "name": "燃料乙醇",
        "change_pct": 6.0
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 6.75
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.15
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 3.66
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 44,
    "hot_rank_chg": 6,
    "stock_cnt": 5880,
    "price": "6.28",
    "change": "3.46",
    "market_id": "33",
    "circulate_market_value": "6219669600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.4
      },
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.98
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 45,
    "hot_rank_chg": -11,
    "stock_cnt": 5880,
    "price": "4.05",
    "change": "3.58",
    "market_id": "17",
    "circulate_market_value": "8959932600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.22
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.31
      },
      {
        "name": "光通信",
        "change_pct": -0.42
      },
      {
        "name": "林业",
        "change_pct": 1.71
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "军工",
        "change_pct": 0.65
      },
      {
        "name": "人造肉",
        "change_pct": 2.73
      }
    ]
  },
  {
    "code": "600596",
    "name": "新安股份",
    "hot_rank": 47,
    "hot_rank_chg": 26,
    "stock_cnt": 5880,
    "price": "12.08",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "16303132000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "农化",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 0.26
      },
      {
        "name": "草甘膦",
        "change_pct": 6.27
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "转基因",
        "change_pct": 4.45
      },
      {
        "name": "有机硅",
        "change_pct": 2.0
      },
      {
        "name": "草铵膦",
        "change_pct": 5.3
      },
      {
        "name": "农药",
        "change_pct": 3.72
      },
      {
        "name": "光伏",
        "change_pct": 0.16
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "无人机",
        "change_pct": 0.5
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "光纤概念",
        "change_pct": 0.44
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 50,
    "hot_rank_chg": 6,
    "stock_cnt": 5880,
    "price": "8.01",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3749653700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI文旅",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "广西概念",
        "change_pct": 2.08
      },
      {
        "name": "低空经济",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 51,
    "hot_rank_chg": 28,
    "stock_cnt": 5880,
    "price": "9.10",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6688553000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "超级电容",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "炭黑",
        "change_pct": 3.73
      },
      {
        "name": "固态电池",
        "change_pct": -0.13
      },
      {
        "name": "PVDF概念",
        "change_pct": 0.53
      },
      {
        "name": "碳基材料",
        "change_pct": 0.94
      },
      {
        "name": "超级电容",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 53,
    "hot_rank_chg": -1,
    "stock_cnt": 5880,
    "price": "5.56",
    "change": "-2.11",
    "market_id": "33",
    "circulate_market_value": "196641270000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.37
      },
      {
        "name": "手机产业链",
        "change_pct": -0.99
      },
      {
        "name": "超高清视频",
        "change_pct": 0.04
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.78
      },
      {
        "name": "电竞",
        "change_pct": 0.6
      },
      {
        "name": "半导体",
        "change_pct": -0.74
      },
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.28
      },
      {
        "name": "VR&AR",
        "change_pct": -0.22
      },
      {
        "name": "OLED",
        "change_pct": -0.6
      },
      {
        "name": "京津冀",
        "change_pct": 1.39
      },
      {
        "name": "物联网",
        "change_pct": 0.1
      },
      {
        "name": "指纹识别",
        "change_pct": -0.24
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.11
      },
      {
        "name": "白马股",
        "change_pct": -0.05
      },
      {
        "name": "智能制造",
        "change_pct": -0.15
      },
      {
        "name": "小米概念股",
        "change_pct": -0.77
      },
      {
        "name": "国产芯片",
        "change_pct": -0.84
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.51
      },
      {
        "name": "全息概念",
        "change_pct": 0.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.04
      },
      {
        "name": "MicroLED",
        "change_pct": -0.61
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.06
      },
      {
        "name": "智能手表",
        "change_pct": -1.47
      },
      {
        "name": "MiniLED",
        "change_pct": -0.14
      },
      {
        "name": "传感器",
        "change_pct": -0.67
      },
      {
        "name": "大硅片",
        "change_pct": -1.08
      },
      {
        "name": "AI PC",
        "change_pct": -0.65
      },
      {
        "name": "华为产业链",
        "change_pct": -0.08
      },
      {
        "name": "回购",
        "change_pct": 0.34
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.02
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 54,
    "hot_rank_chg": -12,
    "stock_cnt": 5880,
    "price": "12.39",
    "change": "-1.27",
    "market_id": "17",
    "circulate_market_value": "22167423000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 2.59
      },
      {
        "name": "纯碱",
        "change_pct": 3.04
      },
      {
        "name": "食品",
        "change_pct": 1.95
      },
      {
        "name": "土壤修复",
        "change_pct": 1.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.24
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.21
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 57,
    "hot_rank_chg": -11,
    "stock_cnt": 5880,
    "price": "9.91",
    "change": "5.31",
    "market_id": "17",
    "circulate_market_value": "4750061000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.67
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "医药商业",
        "change_pct": 1.44
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "流感",
        "change_pct": 1.52
      }
    ]
  },
  {
    "code": "002312",
    "name": "川发龙蟒",
    "hot_rank": 60,
    "hot_rank_chg": 33,
    "stock_cnt": 5880,
    "price": "9.34",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "17602503000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "磷化工",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": 4.93
      },
      {
        "name": "饲料",
        "change_pct": 2.19
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "有色 · 钒",
        "change_pct": 2.26
      },
      {
        "name": "有色 · 钛",
        "change_pct": 0.64
      },
      {
        "name": "铁矿石",
        "change_pct": 3.37
      },
      {
        "name": "有色金属",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.01
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 61,
    "hot_rank_chg": 20,
    "stock_cnt": 5880,
    "price": "11.52",
    "change": "3.32",
    "market_id": "33",
    "circulate_market_value": "4214433200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.4
      },
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "社区团购",
        "change_pct": 1.9
      },
      {
        "name": "预制菜",
        "change_pct": 1.4
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "水产养殖",
        "change_pct": 2.02
      },
      {
        "name": "海洋经济",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "000912",
    "name": "泸天化",
    "hot_rank": 62,
    "hot_rank_chg": 27,
    "stock_cnt": 5880,
    "price": "4.73",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "7416640000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "尿素出口",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 4.78
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "煤化工",
        "change_pct": 4.87
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 63,
    "hot_rank_chg": -3,
    "stock_cnt": 5880,
    "price": "5.50",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "17976410000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力服务",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 2.21
      },
      {
        "name": "养老产业",
        "change_pct": 1.12
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.6
      },
      {
        "name": "民营医院",
        "change_pct": 1.63
      },
      {
        "name": "地摊经济",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 68,
    "hot_rank_chg": 12,
    "stock_cnt": 5880,
    "price": "6.54",
    "change": "2.51",
    "market_id": "33",
    "circulate_market_value": "72875231000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -0.28
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.88
      },
      {
        "name": "有色 · 铜",
        "change_pct": 2.12
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.43
      },
      {
        "name": "有色金属",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "人民币升值受益",
        "change_pct": 1.6
      },
      {
        "name": "硫酸",
        "change_pct": 3.38
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "白银",
        "change_pct": 0.95
      },
      {
        "name": "有色 · 镍",
        "change_pct": 1.22
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 71,
    "hot_rank_chg": -3,
    "stock_cnt": 5880,
    "price": "5.58",
    "change": "-4.78",
    "market_id": "33",
    "circulate_market_value": "3966257300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "影视",
        "change_pct": 1.64
      },
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.98
      },
      {
        "name": "AI营销",
        "change_pct": 0.68
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 73,
    "hot_rank_chg": -7,
    "stock_cnt": 5880,
    "price": "8.26",
    "change": "-2.02",
    "market_id": "33",
    "circulate_market_value": "13438969000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "电竞",
        "change_pct": 0.6
      },
      {
        "name": "手游",
        "change_pct": 1.02
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "游戏",
        "change_pct": 0.92
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "快手概念股",
        "change_pct": 0.64
      },
      {
        "name": "元宇宙",
        "change_pct": 0.53
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.98
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.24
      },
      {
        "name": "web3.0",
        "change_pct": 0.08
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.66
      },
      {
        "name": "数据要素",
        "change_pct": 0.37
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.51
      },
      {
        "name": "AI营销",
        "change_pct": 0.68
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.02
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.02
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      },
      {
        "name": "人形机器人",
        "change_pct": -0.56
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.16
      },
      {
        "name": "多模态",
        "change_pct": 0.0
      },
      {
        "name": "AI视频",
        "change_pct": 1.06
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.25
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "603999",
    "name": "读者传媒",
    "hot_rank": 74,
    "hot_rank_chg": 28,
    "stock_cnt": 5880,
    "price": "7.29",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "4199040000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AIGC出版",
    "xgb_concepts": [
      {
        "name": "知识产权",
        "change_pct": 3.01
      },
      {
        "name": "传媒",
        "change_pct": 2.66
      },
      {
        "name": "NFT",
        "change_pct": 1.78
      },
      {
        "name": "在线教育",
        "change_pct": 0.57
      },
      {
        "name": "知识付费",
        "change_pct": 3.76
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 75,
    "hot_rank_chg": 24,
    "stock_cnt": 5880,
    "price": "11.08",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "5702290400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "6G预研",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -0.99
      },
      {
        "name": "5G",
        "change_pct": -0.03
      },
      {
        "name": "光通信",
        "change_pct": -0.42
      },
      {
        "name": "教育",
        "change_pct": 1.92
      },
      {
        "name": "毫米波通信",
        "change_pct": 0.87
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.55
      },
      {
        "name": "华为产业链",
        "change_pct": -0.08
      },
      {
        "name": "毫米波雷达",
        "change_pct": -0.09
      },
      {
        "name": "5.5G概念",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 76,
    "hot_rank_chg": 31,
    "stock_cnt": 5880,
    "price": "9.40",
    "change": "4.56",
    "market_id": "33",
    "circulate_market_value": "4143726300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.17
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "两轮车",
        "change_pct": 0.05
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002295",
    "name": "精艺股份",
    "hot_rank": 77,
    "hot_rank_chg": 60,
    "stock_cnt": 5880,
    "price": "10.53",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "2636995500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "铜板采购",
    "xgb_concepts": [
      {
        "name": "有色 · 铜",
        "change_pct": 2.12
      },
      {
        "name": "有色金属",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 78,
    "hot_rank_chg": -17,
    "stock_cnt": 5880,
    "price": "12.28",
    "change": "2.16",
    "market_id": "17",
    "circulate_market_value": "4722245000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.6
      },
      {
        "name": "股权转让",
        "change_pct": 0.73
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "新疆概念",
        "change_pct": 1.4
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "流感",
        "change_pct": 1.52
      },
      {
        "name": "国资入股",
        "change_pct": 1.13
      },
      {
        "name": "减肥药",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "600691",
    "name": "潞化科技",
    "hot_rank": 80,
    "hot_rank_chg": 18,
    "stock_cnt": 5880,
    "price": "3.36",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "7981968800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "尿素化肥",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 4.78
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "山西国企改革",
        "change_pct": 2.64
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.5
      },
      {
        "name": "烧碱",
        "change_pct": 2.34
      },
      {
        "name": "PVC",
        "change_pct": 2.29
      },
      {
        "name": "煤化工",
        "change_pct": 4.87
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "丁辛醇",
        "change_pct": 4.11
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 83,
    "hot_rank_chg": 4,
    "stock_cnt": 5880,
    "price": "6.55",
    "change": "-2.53",
    "market_id": "17",
    "circulate_market_value": "3808019100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 4.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.97
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.08
      },
      {
        "name": "农垦",
        "change_pct": 3.13
      },
      {
        "name": "棉花",
        "change_pct": 1.93
      },
      {
        "name": "新疆概念",
        "change_pct": 1.4
      },
      {
        "name": "风电",
        "change_pct": 0.58
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "002349",
    "name": "精华制药",
    "hot_rank": 84,
    "hot_rank_chg": 45,
    "stock_cnt": 5880,
    "price": "8.42",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "6855403200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.67
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "养老产业",
        "change_pct": 1.12
      },
      {
        "name": "江苏国企改革",
        "change_pct": 1.6
      },
      {
        "name": "医药",
        "change_pct": 1.8
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.04
      },
      {
        "name": "流感",
        "change_pct": 1.52
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 86,
    "hot_rank_chg": -4,
    "stock_cnt": 5880,
    "price": "12.28",
    "change": "4.42",
    "market_id": "17",
    "circulate_market_value": "8009948700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.43
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.19
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.19
      },
      {
        "name": "新零售",
        "change_pct": 1.17
      },
      {
        "name": "移动支付",
        "change_pct": -0.18
      },
      {
        "name": "京津冀",
        "change_pct": 1.39
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.59
      },
      {
        "name": "国产芯片",
        "change_pct": -0.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "物业管理",
        "change_pct": 2.28
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.51
      },
      {
        "name": "国企改革",
        "change_pct": 1.41
      },
      {
        "name": "数字人民币",
        "change_pct": 0.02
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      }
    ]
  },
  {
    "code": "603077",
    "name": "和邦生物",
    "hot_rank": 88,
    "hot_rank_chg": 35,
    "stock_cnt": 5880,
    "price": "2.53",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "22344221000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "磷矿",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.06
      },
      {
        "name": "磷化工",
        "change_pct": 4.93
      },
      {
        "name": "草甘膦",
        "change_pct": 6.27
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "一带一路",
        "change_pct": 1.03
      },
      {
        "name": "化肥",
        "change_pct": 4.97
      },
      {
        "name": "有色 · 铜",
        "change_pct": 2.12
      },
      {
        "name": "玻璃",
        "change_pct": 0.43
      },
      {
        "name": "农药",
        "change_pct": 3.72
      },
      {
        "name": "光伏",
        "change_pct": 0.16
      },
      {
        "name": "纯碱",
        "change_pct": 3.04
      },
      {
        "name": "有色金属",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "低价股",
        "change_pct": 2.2
      },
      {
        "name": "回购",
        "change_pct": 0.34
      },
      {
        "name": "有色 · 锡",
        "change_pct": 2.03
      }
    ]
  },
  {
    "code": "601212",
    "name": "白银有色",
    "hot_rank": 89,
    "hot_rank_chg": -12,
    "stock_cnt": 5880,
    "price": "7.11",
    "change": "1.57",
    "market_id": "17",
    "circulate_market_value": "52647947000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -0.28
      },
      {
        "name": "锂电池",
        "change_pct": 0.1
      },
      {
        "name": "有色 · 铜",
        "change_pct": 2.12
      },
      {
        "name": "有色 · 钼",
        "change_pct": 0.82
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.08
      },
      {
        "name": "有色金属",
        "change_pct": 0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "白银",
        "change_pct": 0.95
      },
      {
        "name": "超导概念",
        "change_pct": 0.02
      },
      {
        "name": "核聚变",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 90,
    "hot_rank_chg": 11,
    "stock_cnt": 5880,
    "price": "4.78",
    "change": "-0.21",
    "market_id": "33",
    "circulate_market_value": "27985929000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.27
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.31
      },
      {
        "name": "水利",
        "change_pct": 1.12
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.85
      },
      {
        "name": "大数据",
        "change_pct": 0.37
      },
      {
        "name": "园林",
        "change_pct": 1.17
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.77
      },
      {
        "name": "数字经济",
        "change_pct": 0.41
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.04
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.97
      },
      {
        "name": "快手概念股",
        "change_pct": 0.64
      },
      {
        "name": "IGBT",
        "change_pct": -0.88
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.98
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.66
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.51
      },
      {
        "name": "氮化镓",
        "change_pct": -0.92
      },
      {
        "name": "AI营销",
        "change_pct": 0.68
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.46
      },
      {
        "name": "多模态",
        "change_pct": 0.0
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.97
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.92
      },
      {
        "name": "区块链",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 91,
    "hot_rank_chg": 34,
    "stock_cnt": 5880,
    "price": "1.84",
    "change": "10.18",
    "market_id": "33",
    "circulate_market_value": "9278173900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "自研车型",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": 1.39
      },
      {
        "name": "汽车整车",
        "change_pct": 1.11
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.0
      },
      {
        "name": "低价股",
        "change_pct": 2.2
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 96,
    "hot_rank_chg": -29,
    "stock_cnt": 5880,
    "price": "11.52",
    "change": "0.26",
    "market_id": "17",
    "circulate_market_value": "10010336000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.66
      },
      {
        "name": "快递物流",
        "change_pct": 1.05
      },
      {
        "name": "新零售",
        "change_pct": 1.17
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.32
      },
      {
        "name": "旅游",
        "change_pct": 1.3
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.06
      },
      {
        "name": "物业管理",
        "change_pct": 2.28
      },
      {
        "name": "免税店概念",
        "change_pct": 1.02
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 97,
    "hot_rank_chg": -11,
    "stock_cnt": 5880,
    "price": "6.81",
    "change": "1.04",
    "market_id": "33",
    "circulate_market_value": "7837612100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 0.71
      },
      {
        "name": "养猪",
        "change_pct": 0.42
      },
      {
        "name": "农垦",
        "change_pct": 3.13
      },
      {
        "name": "冷链",
        "change_pct": 1.07
      },
      {
        "name": "大数据",
        "change_pct": 0.37
      },
      {
        "name": "教育",
        "change_pct": 1.92
      },
      {
        "name": "海南概念",
        "change_pct": 1.27
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.23
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.23
      },
      {
        "name": "赛马",
        "change_pct": 0.73
      },
      {
        "name": "大农业",
        "change_pct": 2.57
      },
      {
        "name": "职业教育",
        "change_pct": 1.6
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5880, "price": "14.79", "change": "9.31", "market_id": "17", "circulate_market_value": "9491973800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5880, "price": "18.67", "change": "9.12", "market_id": "17", "circulate_market_value": "8297777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "19.77", "change": "10.02", "market_id": "17", "circulate_market_value": "13449920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇"}, {"code": "600869", "name": "远东股份", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5880, "price": "22.66", "change": "8.53", "market_id": "17", "circulate_market_value": "50290533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5880, "price": "18.16", "change": "9.99", "market_id": "17", "circulate_market_value": "38841484000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "食糖全产业链"}, {"code": "600108", "name": "亚盛集团", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "5.28", "change": "10.00", "market_id": "17", "circulate_market_value": "10279711800.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "农业种植", "change_pct": 4.35}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "土地流转", "change_pct": 2.62}, {"name": "农垦", "change_pct": 3.13}, {"name": "乡村振兴", "change_pct": 2.29}, {"name": "食品", "change_pct": 1.95}, {"name": "甜味剂/代糖", "change_pct": 6.75}, {"name": "大农业", "change_pct": 2.57}, {"name": "蜜雪冰城概念股", "change_pct": 3.66}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5880, "price": "14.95", "change": "7.40", "market_id": "17", "circulate_market_value": "9956700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "40.11", "change": "8.52", "market_id": "17", "circulate_market_value": "27731076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "17.06", "change": "9.99", "market_id": "33", "circulate_market_value": "9953456700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高阶HDI"}, {"code": "002470", "name": "金正大", "hot_rank": 10, "hot_rank_chg": 12, "stock_cnt": 5880, "price": "2.53", "change": "10.00", "market_id": "33", "circulate_market_value": "8312936500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "复合肥", "xgb_concepts": [{"name": "磷化工", "change_pct": 4.93}, {"name": "锂电池", "change_pct": 0.1}, {"name": "化肥", "change_pct": 4.97}, {"name": "山东国企改革", "change_pct": 1.21}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "大农业", "change_pct": 2.57}, {"name": "低价股", "change_pct": 2.2}, {"name": "数字乡村", "change_pct": 1.29}, {"name": "国企改革", "change_pct": 1.41}, {"name": "磷酸铁锂", "change_pct": -0.01}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5880, "price": "3.44", "change": "9.90", "market_id": "33", "circulate_market_value": "8058847100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": 1.17}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "人工智能", "change_pct": 0.27}, {"name": "VR&AR", "change_pct": -0.22}, {"name": "京津冀", "change_pct": 1.39}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "住房租赁", "change_pct": 2.85}, {"name": "破净股", "change_pct": 1.46}, {"name": "数字经济", "change_pct": 0.41}, {"name": "房产经纪", "change_pct": 5.09}, {"name": "物业管理", "change_pct": 2.28}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "AI大模型/智能体", "change_pct": 0.46}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 12, "hot_rank_chg": 5, "stock_cnt": 5880, "price": "7.87", "change": "9.31", "market_id": "17", "circulate_market_value": "33679097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "橡胶", "change_pct": 4.24}, {"name": "土地流转", "change_pct": 2.62}, {"name": "农垦", "change_pct": 3.13}, {"name": "海南概念", "change_pct": 1.27}, {"name": "自由贸易港", "change_pct": 1.23}, {"name": "海南自由贸易港", "change_pct": 1.23}, {"name": "大农业", "change_pct": 2.57}, {"name": "可降解塑料", "change_pct": 1.15}, {"name": "大消费", "change_pct": 0.71}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "000523", "name": "红棉股份", "hot_rank": 13, "hot_rank_chg": 23, "stock_cnt": 5880, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "7107479500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "食糖业务", "xgb_concepts": [{"name": "啤酒", "change_pct": 2.08}, {"name": "调味品", "change_pct": 2.59}, {"name": "粤港澳大湾区", "change_pct": 1.6}, {"name": "白糖", "change_pct": 9.05}, {"name": "食品", "change_pct": 1.95}, {"name": "甜味剂/代糖", "change_pct": 6.75}, {"name": "物业管理", "change_pct": 2.28}, {"name": "国企改革", "change_pct": 1.41}, {"name": "饮料", "change_pct": 1.7}]}, {"code": "600362", "name": "江西铜业", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "48.53", "change": "5.45", "market_id": "17", "circulate_market_value": "100711757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 15, "hot_rank_chg": 12, "stock_cnt": 5880, "price": "10.48", "change": "9.97", "market_id": "17", "circulate_market_value": "5531365800.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "棉花", "change_pct": 1.93}, {"name": "大农业", "change_pct": 2.57}, {"name": "供销社", "change_pct": 3.44}]}, {"code": "600371", "name": "万向德农", "hot_rank": 16, "hot_rank_chg": 8, "stock_cnt": 5880, "price": "15.83", "change": "5.04", "market_id": "17", "circulate_market_value": "4631509700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "4.96", "change": "9.98", "market_id": "17", "circulate_market_value": "6336895000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.78}, {"name": "化肥", "change_pct": 4.97}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.63}, {"name": "医药", "change_pct": 1.8}, {"name": "煤化工", "change_pct": 4.87}, {"name": "食品", "change_pct": 1.95}, {"name": "大农业", "change_pct": 2.57}, {"name": "干细胞", "change_pct": 3.08}, {"name": "阿尔茨海默病", "change_pct": 1.87}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 18, "hot_rank_chg": -9, "stock_cnt": 5880, "price": "16.50", "change": "3.84", "market_id": "17", "circulate_market_value": "21190597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600865", "name": "百大集团", "hot_rank": 19, "hot_rank_chg": 12, "stock_cnt": 5880, "price": "13.74", "change": "10.01", "market_id": "17", "circulate_market_value": "5169541900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商业零售"}, {"code": "688836", "name": "宇树科技", "hot_rank": 20, "hot_rank_chg": -2, "stock_cnt": 5880, "price": "523.68", "change": "-2.36", "market_id": "17", "circulate_market_value": "15756337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5880, "price": "7.75", "change": "-3.12", "market_id": "17", "circulate_market_value": "19518452000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "工业大麻", "change_pct": 1.08}, {"name": "中药", "change_pct": 1.67}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.63}, {"name": "医药", "change_pct": 1.8}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "流感", "change_pct": 1.52}, {"name": "振兴东北", "change_pct": 2.2}, {"name": "食品", "change_pct": 1.95}]}, {"code": "000759", "name": "中百集团", "hot_rank": 22, "hot_rank_chg": 10, "stock_cnt": 5880, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "5048936400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "新零售", "change_pct": 1.17}, {"name": "农业种植", "change_pct": 4.35}, {"name": "冷链", "change_pct": 1.07}, {"name": "大农业", "change_pct": 2.57}, {"name": "预制菜", "change_pct": 1.4}, {"name": "国企改革", "change_pct": 1.41}, {"name": "可降解塑料", "change_pct": 1.15}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "湖北国企改革", "change_pct": 2.19}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 23, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "22.25", "change": "-3.05", "market_id": "33", "circulate_market_value": "10164918200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000737", "name": "北方铜业", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "15.71", "change": "9.63", "market_id": "33", "circulate_market_value": "29920364000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 25, "hot_rank_chg": 15, "stock_cnt": 5880, "price": "5.09", "change": "9.94", "market_id": "33", "circulate_market_value": "3894566300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": 1.67}, {"name": "股权转让", "change_pct": 0.73}, {"name": "优化生育（三孩）", "change_pct": 1.22}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "医药商业", "change_pct": 1.44}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.63}, {"name": "医药", "change_pct": 1.8}, {"name": "食品", "change_pct": 1.95}, {"name": "辅助生殖", "change_pct": 1.76}, {"name": "口腔", "change_pct": 1.05}, {"name": "医美", "change_pct": 1.32}, {"name": "新冠病毒防治", "change_pct": 1.15}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "63.11", "change": "-1.39", "market_id": "17", "circulate_market_value": "154849620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002909", "name": "集泰股份", "hot_rank": 27, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "8.72", "change": "9.96", "market_id": "33", "circulate_market_value": "3317326800.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.03}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "有机硅", "change_pct": 2.0}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "光伏", "change_pct": 0.16}, {"name": "船舶", "change_pct": 0.74}, {"name": "固态电池", "change_pct": -0.13}, {"name": "新型城镇化", "change_pct": 1.04}, {"name": "旧改", "change_pct": 1.14}, {"name": "飞行汽车/eVTOL", "change_pct": 0.05}, {"name": "液冷服务器", "change_pct": -0.97}]}, {"code": "600667", "name": "太极实业", "hot_rank": 28, "hot_rank_chg": -18, "stock_cnt": 5880, "price": "18.59", "change": "3.51", "market_id": "17", "circulate_market_value": "38881769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 29, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "5.56", "change": "4.32", "market_id": "33", "circulate_market_value": "14748181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.97}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "航天", "change_pct": 0.49}, {"name": "旧改", "change_pct": 1.14}]}, {"code": "000833", "name": "粤桂股份", "hot_rank": 30, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "22.83", "change": "10.02", "market_id": "33", "circulate_market_value": "10358122900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "硫铁矿"}, {"code": "300308", "name": "中际旭创", "hot_rank": 31, "hot_rank_chg": -17, "stock_cnt": 5880, "price": "902.37", "change": "0.43", "market_id": "33", "circulate_market_value": "1001573850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 32, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "22.32", "change": "7.10", "market_id": "33", "circulate_market_value": "12791699600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 33, "hot_rank_chg": -21, "stock_cnt": 5880, "price": "222.30", "change": "7.33", "market_id": "17", "circulate_market_value": "61263295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 34, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "3.32", "change": "9.93", "market_id": "33", "circulate_market_value": "15510206000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.66}, {"name": "股权转让", "change_pct": 0.73}, {"name": "房地产", "change_pct": 2.21}, {"name": "云计算数据中心", "change_pct": -0.31}, {"name": "京津冀", "change_pct": 1.39}, {"name": "旅游", "change_pct": 1.3}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "内存", "change_pct": 0.43}, {"name": "闪存", "change_pct": 0.43}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "IP经济/谷子经济", "change_pct": 1.25}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 35, "hot_rank_chg": -15, "stock_cnt": 5880, "price": "40.12", "change": "9.17", "market_id": "33", "circulate_market_value": "60899294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 36, "hot_rank_chg": -8, "stock_cnt": 5880, "price": "14.81", "change": "6.85", "market_id": "17", "circulate_market_value": "6198090400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5880, "price": "7.90", "change": "0.38", "market_id": "33", "circulate_market_value": "15129230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.32}, {"name": "林业", "change_pct": 1.71}, {"name": "碳中和", "change_pct": 1.0}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "601949", "name": "中国出版", "hot_rank": 38, "hot_rank_chg": 1, "stock_cnt": 5880, "price": "7.05", "change": "9.98", "market_id": "17", "circulate_market_value": "13422975000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "中字头", "change_pct": 0.9}, {"name": "数字经济", "change_pct": 0.41}, {"name": "知识产权", "change_pct": 3.01}, {"name": "传媒", "change_pct": 2.66}, {"name": "NFT", "change_pct": 1.78}, {"name": "国企改革", "change_pct": 1.41}, {"name": "知识付费", "change_pct": 3.76}]}, {"code": "603823", "name": "百合花", "hot_rank": 39, "hot_rank_chg": 12, "stock_cnt": 5880, "price": "63.84", "change": "9.99", "market_id": "17", "circulate_market_value": "26580914000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶"}, {"code": "688795", "name": "摩尔线程", "hot_rank": 40, "hot_rank_chg": -15, "stock_cnt": 5880, "price": "400.11", "change": "-3.70", "market_id": "17", "circulate_market_value": "22406160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002702", "name": "海欣食品", "hot_rank": 41, "hot_rank_chg": 14, "stock_cnt": 5880, "price": "6.79", "change": "10.05", "market_id": "33", "circulate_market_value": "3114870100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "速冻食品", "xgb_concepts": [{"name": "食品", "change_pct": 1.95}, {"name": "预制菜", "change_pct": 1.4}, {"name": "人造肉", "change_pct": 2.73}, {"name": "地摊经济", "change_pct": 1.57}]}, {"code": "000930", "name": "中粮科技", "hot_rank": 42, "hot_rank_chg": 23, "stock_cnt": 5880, "price": "5.83", "change": "10.00", "market_id": "33", "circulate_market_value": "10822246300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "功能糖", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "饲料", "change_pct": 2.19}, {"name": "白酒", "change_pct": 0.33}, {"name": "燃料乙醇", "change_pct": 6.0}, {"name": "食品", "change_pct": 1.95}, {"name": "甜味剂/代糖", "change_pct": 6.75}, {"name": "大农业", "change_pct": 2.57}, {"name": "国企改革", "change_pct": 1.41}, {"name": "可降解塑料", "change_pct": 1.15}, {"name": "新冠病毒防治", "change_pct": 1.15}, {"name": "蜜雪冰城概念股", "change_pct": 3.66}]}, {"code": "002403", "name": "爱仕达", "hot_rank": 43, "hot_rank_chg": 5, "stock_cnt": 5880, "price": "13.65", "change": "9.99", "market_id": "33", "circulate_market_value": "4056253800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "002059", "name": "云南旅游", "hot_rank": 44, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "6.28", "change": "3.46", "market_id": "33", "circulate_market_value": "6219669600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "旅游", "change_pct": 1.3}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "国企改革", "change_pct": 1.41}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 45, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "4.05", "change": "3.58", "market_id": "17", "circulate_market_value": "8959932600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.22}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "云计算数据中心", "change_pct": -0.31}, {"name": "光通信", "change_pct": -0.42}, {"name": "林业", "change_pct": 1.71}, {"name": "军民融合", "change_pct": 0.37}, {"name": "军工", "change_pct": 0.65}, {"name": "人造肉", "change_pct": 2.73}]}, {"code": "002980", "name": "华盛昌", "hot_rank": 46, "hot_rank_chg": 7, "stock_cnt": 5880, "price": "129.91", "change": "10.00", "market_id": "33", "circulate_market_value": "13158170700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "光通信测试"}, {"code": "600596", "name": "新安股份", "hot_rank": 47, "hot_rank_chg": 26, "stock_cnt": 5880, "price": "12.08", "change": "10.02", "market_id": "17", "circulate_market_value": "16303132000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "农化", "xgb_concepts": [{"name": "电子特气", "change_pct": 0.26}, {"name": "草甘膦", "change_pct": 6.27}, {"name": "锂电池", "change_pct": 0.1}, {"name": "农业种植", "change_pct": 4.35}, {"name": "转基因", "change_pct": 4.45}, {"name": "有机硅", "change_pct": 2.0}, {"name": "草铵膦", "change_pct": 5.3}, {"name": "农药", "change_pct": 3.72}, {"name": "光伏", "change_pct": 0.16}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "无人机", "change_pct": 0.5}, {"name": "大农业", "change_pct": 2.57}, {"name": "光纤概念", "change_pct": 0.44}, {"name": "液冷服务器", "change_pct": -0.97}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 48, "hot_rank_chg": -5, "stock_cnt": 5880, "price": "335.49", "change": "-3.65", "market_id": "33", "circulate_market_value": "1429253300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 49, "hot_rank_chg": -20, "stock_cnt": 5880, "price": "14.78", "change": "5.57", "market_id": "33", "circulate_market_value": "9756352700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 50, "hot_rank_chg": 6, "stock_cnt": 5880, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "3749653700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI文旅", "xgb_concepts": [{"name": "旅游", "change_pct": 1.3}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "广西概念", "change_pct": 2.08}, {"name": "低空经济", "change_pct": 0.48}]}, {"code": "002068", "name": "黑猫股份", "hot_rank": 51, "hot_rank_chg": 28, "stock_cnt": 5880, "price": "9.10", "change": "10.04", "market_id": "33", "circulate_market_value": "6688553000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超级电容", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.1}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "炭黑", "change_pct": 3.73}, {"name": "固态电池", "change_pct": -0.13}, {"name": "PVDF概念", "change_pct": 0.53}, {"name": "碳基材料", "change_pct": 0.94}, {"name": "超级电容", "change_pct": 0.55}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 52, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "416.85", "change": "4.08", "market_id": "17", "circulate_market_value": "169382130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 53, "hot_rank_chg": -1, "stock_cnt": 5880, "price": "5.56", "change": "-2.11", "market_id": "33", "circulate_market_value": "196641270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.37}, {"name": "手机产业链", "change_pct": -0.99}, {"name": "超高清视频", "change_pct": 0.04}, {"name": "苹果产业链", "change_pct": -0.78}, {"name": "电竞", "change_pct": 0.6}, {"name": "半导体", "change_pct": -0.74}, {"name": "人工智能", "change_pct": 0.27}, {"name": "互联网医疗", "change_pct": 1.28}, {"name": "VR&AR", "change_pct": -0.22}, {"name": "OLED", "change_pct": -0.6}, {"name": "京津冀", "change_pct": 1.39}, {"name": "物联网", "change_pct": 0.1}, {"name": "指纹识别", "change_pct": -0.24}, {"name": "汽车零部件", "change_pct": -0.11}, {"name": "白马股", "change_pct": -0.05}, {"name": "智能制造", "change_pct": -0.15}, {"name": "小米概念股", "change_pct": -0.77}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "液晶面板/LCD", "change_pct": -0.51}, {"name": "全息概念", "change_pct": 0.15}, {"name": "理想汽车概念股", "change_pct": -0.04}, {"name": "MicroLED", "change_pct": -0.61}, {"name": "钙钛矿电池", "change_pct": 0.06}, {"name": "智能手表", "change_pct": -1.47}, {"name": "MiniLED", "change_pct": -0.14}, {"name": "传感器", "change_pct": -0.67}, {"name": "大硅片", "change_pct": -1.08}, {"name": "AI PC", "change_pct": -0.65}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "回购", "change_pct": 0.34}, {"name": "光电共封装CPO", "change_pct": -1.14}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "玻璃基板封装", "change_pct": -0.85}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 54, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "12.39", "change": "-1.27", "market_id": "17", "circulate_market_value": "22167423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.59}, {"name": "纯碱", "change_pct": 3.04}, {"name": "食品", "change_pct": 1.95}, {"name": "土壤修复", "change_pct": 1.09}, {"name": "东数西算/算力", "change_pct": -0.24}, {"name": "OpenClaw概念", "change_pct": -1.21}, {"name": "DeepSeek概念股", "change_pct": -0.02}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 55, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "58.39", "change": "-0.14", "market_id": "17", "circulate_market_value": "262932450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5880, "price": "72.32", "change": "-3.24", "market_id": "33", "circulate_market_value": "106087341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 57, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "9.91", "change": "5.31", "market_id": "17", "circulate_market_value": "4750061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.67}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "医药商业", "change_pct": 1.44}, {"name": "医药", "change_pct": 1.8}, {"name": "流感", "change_pct": 1.52}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 58, "hot_rank_chg": -13, "stock_cnt": 5880, "price": "21.45", "change": "1.66", "market_id": "33", "circulate_market_value": "25235256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 59, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "33.89", "change": "-4.18", "market_id": "33", "circulate_market_value": "96927863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002312", "name": "川发龙蟒", "hot_rank": 60, "hot_rank_chg": 33, "stock_cnt": 5880, "price": "9.34", "change": "10.01", "market_id": "33", "circulate_market_value": "17602503000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化工", "xgb_concepts": [{"name": "磷化工", "change_pct": 4.93}, {"name": "饲料", "change_pct": 2.19}, {"name": "锂电池", "change_pct": 0.1}, {"name": "化肥", "change_pct": 4.97}, {"name": "有色 · 钒", "change_pct": 2.26}, {"name": "有色 · 钛", "change_pct": 0.64}, {"name": "铁矿石", "change_pct": 3.37}, {"name": "有色金属", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "大农业", "change_pct": 2.57}, {"name": "磷酸铁锂", "change_pct": -0.01}, {"name": "锂矿/碳酸锂", "change_pct": 0.9}]}, {"code": "000798", "name": "中水渔业", "hot_rank": 61, "hot_rank_chg": 20, "stock_cnt": 5880, "price": "11.52", "change": "3.32", "market_id": "33", "circulate_market_value": "4214433200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "人工智能", "change_pct": 0.27}, {"name": "社区团购", "change_pct": 1.9}, {"name": "预制菜", "change_pct": 1.4}, {"name": "国企改革", "change_pct": 1.41}, {"name": "水产养殖", "change_pct": 2.02}, {"name": "海洋经济", "change_pct": 1.01}]}, {"code": "000912", "name": "泸天化", "hot_rank": 62, "hot_rank_chg": 27, "stock_cnt": 5880, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "7416640000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "尿素出口", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.78}, {"name": "化肥", "change_pct": 4.97}, {"name": "煤化工", "change_pct": 4.87}, {"name": "大农业", "change_pct": 2.57}]}, {"code": "600162", "name": "香江控股", "hot_rank": 63, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "5.50", "change": "10.00", "market_id": "17", "circulate_market_value": "17976410000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力服务", "xgb_concepts": [{"name": "房地产", "change_pct": 2.21}, {"name": "养老产业", "change_pct": 1.12}, {"name": "粤港澳大湾区", "change_pct": 1.6}, {"name": "民营医院", "change_pct": 1.63}, {"name": "地摊经济", "change_pct": 1.57}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 64, "hot_rank_chg": 11, "stock_cnt": 5880, "price": "64.15", "change": "-9.71", "market_id": "33", "circulate_market_value": "17705328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 65, "hot_rank_chg": -8, "stock_cnt": 5880, "price": "90.05", "change": "-2.12", "market_id": "33", "circulate_market_value": "58803325000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 66, "hot_rank_chg": 48, "stock_cnt": 5880, "price": "44.43", "change": "10.00", "market_id": "17", "circulate_market_value": "17000006000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "二氯二氢硅反倾销"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 67, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "33.86", "change": "3.01", "market_id": "17", "circulate_market_value": "697576720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 68, "hot_rank_chg": 12, "stock_cnt": 5880, "price": "6.54", "change": "2.51", "market_id": "33", "circulate_market_value": "72875231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -0.28}, {"name": "锂电池", "change_pct": 0.1}, {"name": "安徽国企改革", "change_pct": 0.88}, {"name": "有色 · 铜", "change_pct": 2.12}, {"name": "铜箔/覆铜板", "change_pct": 0.43}, {"name": "有色金属", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "人民币升值受益", "change_pct": 1.6}, {"name": "硫酸", "change_pct": 3.38}, {"name": "国企改革", "change_pct": 1.41}, {"name": "白银", "change_pct": 0.95}, {"name": "有色 · 镍", "change_pct": 1.22}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 69, "hot_rank_chg": 28, "stock_cnt": 5880, "price": "73.99", "change": "10.01", "market_id": "17", "circulate_market_value": "9668510100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "轻型输送带"}, {"code": "601606", "name": "长城军工", "hot_rank": 70, "hot_rank_chg": 21, "stock_cnt": 5880, "price": "35.20", "change": "3.80", "market_id": "17", "circulate_market_value": "25492840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 71, "hot_rank_chg": -3, "stock_cnt": 5880, "price": "5.58", "change": "-4.78", "market_id": "33", "circulate_market_value": "3966257300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.27}, {"name": "影视", "change_pct": 1.64}, {"name": "旅游", "change_pct": 1.3}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "AI营销", "change_pct": 0.68}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "短剧/互动影游", "change_pct": 1.16}, {"name": "IP经济/谷子经济", "change_pct": 1.25}]}, {"code": "603042", "name": "华脉科技", "hot_rank": 72, "hot_rank_chg": 22, "stock_cnt": 5880, "price": "16.97", "change": "9.98", "market_id": "17", "circulate_market_value": "3542772500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光纤光缆"}, {"code": "002354", "name": "天娱数科", "hot_rank": 73, "hot_rank_chg": -7, "stock_cnt": 5880, "price": "8.26", "change": "-2.02", "market_id": "33", "circulate_market_value": "13438969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "电竞", "change_pct": 0.6}, {"name": "手游", "change_pct": 1.02}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "人工智能", "change_pct": 0.27}, {"name": "游戏", "change_pct": 0.92}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.41}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "快手概念股", "change_pct": 0.64}, {"name": "元宇宙", "change_pct": 0.53}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "东数西算/算力", "change_pct": -0.24}, {"name": "web3.0", "change_pct": 0.08}, {"name": "AIGC概念", "change_pct": 0.66}, {"name": "数据要素", "change_pct": 0.37}, {"name": "字节跳动概念股", "change_pct": 0.51}, {"name": "AI营销", "change_pct": 0.68}, {"name": "ChatGPT", "change_pct": 0.02}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "人形机器人", "change_pct": -0.56}, {"name": "短剧/互动影游", "change_pct": 1.16}, {"name": "多模态", "change_pct": 0.0}, {"name": "AI视频", "change_pct": 1.06}, {"name": "IP经济/谷子经济", "change_pct": 1.25}, {"name": "小红书概念股", "change_pct": 0.92}]}, {"code": "603999", "name": "读者传媒", "hot_rank": 74, "hot_rank_chg": 28, "stock_cnt": 5880, "price": "7.29", "change": "9.96", "market_id": "17", "circulate_market_value": "4199040000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AIGC出版", "xgb_concepts": [{"name": "知识产权", "change_pct": 3.01}, {"name": "传媒", "change_pct": 2.66}, {"name": "NFT", "change_pct": 1.78}, {"name": "在线教育", "change_pct": 0.57}, {"name": "知识付费", "change_pct": 3.76}]}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 75, "hot_rank_chg": 24, "stock_cnt": 5880, "price": "11.08", "change": "10.03", "market_id": "33", "circulate_market_value": "5702290400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": -0.99}, {"name": "5G", "change_pct": -0.03}, {"name": "光通信", "change_pct": -0.42}, {"name": "教育", "change_pct": 1.92}, {"name": "毫米波通信", "change_pct": 0.87}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "毫米波雷达", "change_pct": -0.09}, {"name": "5.5G概念", "change_pct": 0.5}]}, {"code": "000017", "name": "深中华A", "hot_rank": 76, "hot_rank_chg": 31, "stock_cnt": 5880, "price": "9.40", "change": "4.56", "market_id": "33", "circulate_market_value": "4143726300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.17}, {"name": "锂电池", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "两轮车", "change_pct": 0.05}, {"name": "珠宝饰品", "change_pct": 1.12}]}, {"code": "002295", "name": "精艺股份", "hot_rank": 77, "hot_rank_chg": 60, "stock_cnt": 5880, "price": "10.53", "change": "10.03", "market_id": "33", "circulate_market_value": "2636995500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铜板采购", "xgb_concepts": [{"name": "有色 · 铜", "change_pct": 2.12}, {"name": "有色金属", "change_pct": 0.82}]}, {"code": "600721", "name": "百花医药", "hot_rank": 78, "hot_rank_chg": -17, "stock_cnt": 5880, "price": "12.28", "change": "2.16", "market_id": "17", "circulate_market_value": "4722245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 1.6}, {"name": "股权转让", "change_pct": 0.73}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "新疆概念", "change_pct": 1.4}, {"name": "医药", "change_pct": 1.8}, {"name": "流感", "change_pct": 1.52}, {"name": "国资入股", "change_pct": 1.13}, {"name": "减肥药", "change_pct": 1.31}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 79, "hot_rank_chg": -10, "stock_cnt": 5880, "price": "21.12", "change": "-6.05", "market_id": "33", "circulate_market_value": "9553395500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600691", "name": "潞化科技", "hot_rank": 80, "hot_rank_chg": 18, "stock_cnt": 5880, "price": "3.36", "change": "10.16", "market_id": "17", "circulate_market_value": "7981968800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "尿素化肥", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.78}, {"name": "化肥", "change_pct": 4.97}, {"name": "山西国企改革", "change_pct": 2.64}, {"name": "氢能源/燃料电池", "change_pct": 0.5}, {"name": "烧碱", "change_pct": 2.34}, {"name": "PVC", "change_pct": 2.29}, {"name": "煤化工", "change_pct": 4.87}, {"name": "大农业", "change_pct": 2.57}, {"name": "丁辛醇", "change_pct": 4.11}, {"name": "国企改革", "change_pct": 1.41}]}, {"code": "600967", "name": "内蒙一机", "hot_rank": 81, "hot_rank_chg": 28, "stock_cnt": 5880, "price": "13.87", "change": "3.97", "market_id": "17", "circulate_market_value": "23603892000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 82, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "46.85", "change": "0.43", "market_id": "17", "circulate_market_value": "39661024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 83, "hot_rank_chg": 4, "stock_cnt": 5880, "price": "6.55", "change": "-2.53", "market_id": "17", "circulate_market_value": "3808019100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "新疆国企改革", "change_pct": 1.08}, {"name": "农垦", "change_pct": 3.13}, {"name": "棉花", "change_pct": 1.93}, {"name": "新疆概念", "change_pct": 1.4}, {"name": "风电", "change_pct": 0.58}, {"name": "大农业", "change_pct": 2.57}, {"name": "国企改革", "change_pct": 1.41}]}, {"code": "002349", "name": "精华制药", "hot_rank": 84, "hot_rank_chg": 45, "stock_cnt": 5880, "price": "8.42", "change": "10.06", "market_id": "33", "circulate_market_value": "6855403200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 1.67}, {"name": "锂电池", "change_pct": 0.1}, {"name": "养老产业", "change_pct": 1.12}, {"name": "江苏国企改革", "change_pct": 1.6}, {"name": "医药", "change_pct": 1.8}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "PD-1抑制剂", "change_pct": 1.04}, {"name": "流感", "change_pct": 1.52}, {"name": "国企改革", "change_pct": 1.41}, {"name": "新冠病毒防治", "change_pct": 1.15}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 85, "hot_rank_chg": 36, "stock_cnt": 5880, "price": "13.96", "change": "1.31", "market_id": "17", "circulate_market_value": "20558987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 86, "hot_rank_chg": -4, "stock_cnt": 5880, "price": "12.28", "change": "4.42", "market_id": "17", "circulate_market_value": "8009948700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.43}, {"name": "蚂蚁集团概念股", "change_pct": 0.19}, {"name": "无人驾驶", "change_pct": -0.19}, {"name": "新零售", "change_pct": 1.17}, {"name": "移动支付", "change_pct": -0.18}, {"name": "京津冀", "change_pct": 1.39}, {"name": "北京城市规划", "change_pct": 1.59}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "阿里巴巴概念股", "change_pct": 0.06}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "物业管理", "change_pct": 2.28}, {"name": "字节跳动概念股", "change_pct": 0.51}, {"name": "国企改革", "change_pct": 1.41}, {"name": "数字人民币", "change_pct": 0.02}, {"name": "AI大模型/智能体", "change_pct": 0.46}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 87, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "179.92", "change": "-2.47", "market_id": "33", "circulate_market_value": "141422470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603077", "name": "和邦生物", "hot_rank": 88, "hot_rank_chg": 35, "stock_cnt": 5880, "price": "2.53", "change": "10.00", "market_id": "17", "circulate_market_value": "22344221000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷矿", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.06}, {"name": "磷化工", "change_pct": 4.93}, {"name": "草甘膦", "change_pct": 6.27}, {"name": "锂电池", "change_pct": 0.1}, {"name": "一带一路", "change_pct": 1.03}, {"name": "化肥", "change_pct": 4.97}, {"name": "有色 · 铜", "change_pct": 2.12}, {"name": "玻璃", "change_pct": 0.43}, {"name": "农药", "change_pct": 3.72}, {"name": "光伏", "change_pct": 0.16}, {"name": "纯碱", "change_pct": 3.04}, {"name": "有色金属", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "大农业", "change_pct": 2.57}, {"name": "低价股", "change_pct": 2.2}, {"name": "回购", "change_pct": 0.34}, {"name": "有色 · 锡", "change_pct": 2.03}]}, {"code": "601212", "name": "白银有色", "hot_rank": 89, "hot_rank_chg": -12, "stock_cnt": 5880, "price": "7.11", "change": "1.57", "market_id": "17", "circulate_market_value": "52647947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -0.28}, {"name": "锂电池", "change_pct": 0.1}, {"name": "有色 · 铜", "change_pct": 2.12}, {"name": "有色 · 钼", "change_pct": 0.82}, {"name": "有色 · 锌", "change_pct": 2.08}, {"name": "有色金属", "change_pct": 0.82}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "白银", "change_pct": 0.95}, {"name": "超导概念", "change_pct": 0.02}, {"name": "核聚变", "change_pct": 0.19}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 90, "hot_rank_chg": 11, "stock_cnt": 5880, "price": "4.78", "change": "-0.21", "market_id": "33", "circulate_market_value": "27985929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.01}, {"name": "人工智能", "change_pct": 0.27}, {"name": "云计算数据中心", "change_pct": -0.31}, {"name": "水利", "change_pct": 1.12}, {"name": "直播/短视频", "change_pct": 0.85}, {"name": "大数据", "change_pct": 0.37}, {"name": "园林", "change_pct": 1.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.77}, {"name": "数字经济", "change_pct": 0.41}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "理想汽车概念股", "change_pct": -0.04}, {"name": "第三代半导体", "change_pct": -0.97}, {"name": "快手概念股", "change_pct": 0.64}, {"name": "IGBT", "change_pct": -0.88}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "AIGC概念", "change_pct": 0.66}, {"name": "字节跳动概念股", "change_pct": 0.51}, {"name": "氮化镓", "change_pct": -0.92}, {"name": "AI营销", "change_pct": 0.68}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "多模态", "change_pct": 0.0}, {"name": "液冷服务器", "change_pct": -0.97}, {"name": "小红书概念股", "change_pct": 0.92}, {"name": "区块链", "change_pct": 0.48}]}, {"code": "000980", "name": "众泰汽车", "hot_rank": 91, "hot_rank_chg": 34, "stock_cnt": 5880, "price": "1.84", "change": "10.18", "market_id": "33", "circulate_market_value": "9278173900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "自研车型", "xgb_concepts": [{"name": "新能源整车", "change_pct": 1.39}, {"name": "汽车整车", "change_pct": 1.11}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "低价股", "change_pct": 2.2}]}, {"code": "002536", "name": "飞龙股份", "hot_rank": 92, "hot_rank_chg": -29, "stock_cnt": 5880, "price": "58.59", "change": "2.13", "market_id": "33", "circulate_market_value": "31950455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 93, "hot_rank_chg": -34, "stock_cnt": 5880, "price": "385.96", "change": "0.14", "market_id": "17", "circulate_market_value": "258870450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 94, "hot_rank_chg": 2, "stock_cnt": 5880, "price": "28.30", "change": "3.17", "market_id": "17", "circulate_market_value": "11348300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000878", "name": "云南铜业", "hot_rank": 95, "hot_rank_chg": 16, "stock_cnt": 5880, "price": "18.32", "change": "5.05", "market_id": "33", "circulate_market_value": "36706333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 96, "hot_rank_chg": -29, "stock_cnt": 5880, "price": "11.52", "change": "0.26", "market_id": "17", "circulate_market_value": "10010336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "快递物流", "change_pct": 1.05}, {"name": "新零售", "change_pct": 1.17}, {"name": "福建自贸/海西概念", "change_pct": 1.32}, {"name": "旅游", "change_pct": 1.3}, {"name": "阿里巴巴概念股", "change_pct": 0.06}, {"name": "物业管理", "change_pct": 2.28}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "000735", "name": "罗牛山", "hot_rank": 97, "hot_rank_chg": -11, "stock_cnt": 5880, "price": "6.81", "change": "1.04", "market_id": "33", "circulate_market_value": "7837612100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "养鸡", "change_pct": 0.71}, {"name": "养猪", "change_pct": 0.42}, {"name": "农垦", "change_pct": 3.13}, {"name": "冷链", "change_pct": 1.07}, {"name": "大数据", "change_pct": 0.37}, {"name": "教育", "change_pct": 1.92}, {"name": "海南概念", "change_pct": 1.27}, {"name": "自由贸易港", "change_pct": 1.23}, {"name": "海南自由贸易港", "change_pct": 1.23}, {"name": "赛马", "change_pct": 0.73}, {"name": "大农业", "change_pct": 2.57}, {"name": "职业教育", "change_pct": 1.6}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "600584", "name": "长电科技", "hot_rank": 98, "hot_rank_chg": -24, "stock_cnt": 5880, "price": "68.60", "change": "-0.58", "market_id": "17", "circulate_market_value": "122753840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 99, "hot_rank_chg": -41, "stock_cnt": 5880, "price": "186.42", "change": "-2.17", "market_id": "33", "circulate_market_value": "258438100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 100, "hot_rank_chg": -22, "stock_cnt": 5880, "price": "41.39", "change": "-0.74", "market_id": "17", "circulate_market_value": "164383990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002068", "name": "黑猫股份", "price": 9.1, "change_pct": 10.04, "reason": "国内炭黑行业龙头；公司介孔碳产品已进入中试阶段，目前中试产品已送客户试样推广，主要用于硅碳负极材料及电容炭领域", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 7.34, "first_limit_up": 1788833301, "break_limit_up_times": 0}, {"code": "000560", "name": "我爱我家", "price": 3.44, "change_pct": 9.9, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 27.65, "first_limit_up": 1788831093, "break_limit_up_times": 4}, {"code": "600354", "name": "敦煌种业", "price": 10.48, "change_pct": 9.97, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 9.32, "first_limit_up": 1788831063, "break_limit_up_times": 4}, {"code": "000930", "name": "中粮科技", "price": 5.83, "change_pct": 10.0, "reason": "中粮集团旗下，控股子公司中粮黑龙江酿酒有限公司设计产能5000吨/年，共有“东方春”、“老古”、“忠良工匠”、“百战”、“东北大粮仓”，5个系列共25款白酒产品在全国近18个省均有销售", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1788831078, "break_limit_up_times": 0}, {"code": "688293", "name": "奥浦迈", "price": 68.29, "change_pct": 20.0, "reason": "公司专门从事细胞培养产品与服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.29, "first_limit_up": 1788847048, "break_limit_up_times": 1}, {"code": "002295", "name": "精艺股份", "price": 10.53, "change_pct": 10.03, "reason": "公司签订阴极铜采购合同，累计金额达21.86亿元", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1788831030, "break_limit_up_times": 1}, {"code": "603353", "name": "和顺石油", "price": 37.96, "change_pct": 10.0, "reason": "中南地区知名的加油站连锁经营品牌；子公司奎芯科技在UCIe领域已开展相关IP研发与技术储备，聚焦高速互连与Chiplet生态，助力客户实现高带宽、低延迟及可扩展的系统设计", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1788833980, "break_limit_up_times": 2}, {"code": "000978", "name": "桂林旅游", "price": 8.01, "change_pct": 10.03, "reason": "公司主营为游船客运、景区旅游业务", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.46, "first_limit_up": 1788831000, "break_limit_up_times": 0}, {"code": "601949", "name": "中国出版", "price": 7.05, "change_pct": 9.98, "reason": "公司旗下中华书局打造先贤数字人智能体及先贤智能阅读空间", "plates": ["AI大模型/智能体"], "limit_up_days": 3, "turnover_ratio": 2.86, "first_limit_up": 1788831042, "break_limit_up_times": 0}, {"code": "002274", "name": "华昌化工", "price": 6.69, "change_pct": 10.03, "reason": "江苏省化肥行业龙头，控股股东将变更为苏州宣力", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1788835905, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 17.06, "change_pct": 9.99, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.47, "first_limit_up": 1788831036, "break_limit_up_times": 0}, {"code": "000911", "name": "*ST广糖", "price": 6.66, "change_pct": 10.08, "reason": "公司是国内糖业龙头之一，是海天味业、加多宝、娃哈哈等供应商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1788831012, "break_limit_up_times": 2}, {"code": "002095", "name": "生 意 宝", "price": 16.31, "change_pct": 9.98, "reason": "国内最大行业电子商务运营商和领先的综合B2B运营商之一；公司利用生意社价格大数据与Deepseek大模型开发PriceSeek，布局大宗商品领域AI智能体应用", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 5.67, "first_limit_up": 1788832230, "break_limit_up_times": 4}, {"code": "002264", "name": "新 华 都", "price": 7.71, "change_pct": 9.99, "reason": "公司为白酒电商龙头，福建公司，电商代运营服务的品牌有金佰利、伊利、美加净、芳芯、碧缇丝、家安等，进行全渠道销售代理的品牌有泸州老窖、汾酒、五粮液、郎酒、水井坊、古井贡酒、青岛啤酒等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1788831564, "break_limit_up_times": 1}, {"code": "002702", "name": "海欣食品", "price": 6.79, "change_pct": 10.05, "reason": "公司位于福建省福州市，为国内鱼丸龙头，主营速冻鱼糜，速冻肉制品", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 19.39, "first_limit_up": 1788830700, "break_limit_up_times": 3}, {"code": "600792", "name": "云煤能源", "price": 4.47, "change_pct": 10.1, "reason": "云南省大型的焦炭生产与焦化工企业之一；旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1788833673, "break_limit_up_times": 0}, {"code": "601999", "name": "出版传媒", "price": 8.02, "change_pct": 10.01, "reason": "辽宁省教材教辅出版企业；公司积极推动数智出版融合发展，应用AI图书数字人，采用“一书一模型”为纸质书配置专属AI助手，提供内容答疑、伴读与知识拓展服务，已在《数学周报》《尖子生题库》等产品落地应用", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 14.39, "first_limit_up": 1788844137, "break_limit_up_times": 2}, {"code": "002357", "name": "富临运业", "price": 12.6, "change_pct": 10.04, "reason": "四川省客运业龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1788837774, "break_limit_up_times": 20}, {"code": "002909", "name": "集泰股份", "price": 8.72, "change_pct": 9.96, "reason": "公司当前研发的液冷导热硅油，其应用主要聚焦于数据中心及储能领域的热管理解决方案", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 35.75, "first_limit_up": 1788834498, "break_limit_up_times": 12}, {"code": "600691", "name": "潞化科技", "price": 3.36, "change_pct": 10.16, "reason": "华北地区重要的煤制尿素代表企业；公司化肥板块主要产品为以无烟煤为原料的纯煤制尿素，具备132万吨/年的尿素生产能力，甲醇设计产能40万吨", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 7.33, "first_limit_up": 1788836377, "break_limit_up_times": 0}, {"code": "600162", "name": "香江控股", "price": 5.5, "change_pct": 10.0, "reason": "广州市综合性房地产开发商；公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.59, "first_limit_up": 1788833728, "break_limit_up_times": 0}, {"code": "002093", "name": "国脉科技", "price": 7.69, "change_pct": 10.01, "reason": "1、公司注册地位于福建省福州市，已在开展6G关键技术的跟踪研究和人才培养；\n2、公司主要从事物联网技术服务、物联网咨询与设计服务，与主流大模型服务商合作，构建深耕于社区养老以及居家养老场景的 AI Agent", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 2.71, "first_limit_up": 1788831696, "break_limit_up_times": 1}, {"code": "603999", "name": "读者传媒", "price": 7.29, "change_pct": 9.95, "reason": "公司期刊出版发行方面长期处于行业领先地位，拥有优质IP资源，已尝试通过人工智能生成文章、创作杂志封面并开发AI应用产品", "plates": ["AI大模型/智能体"], "limit_up_days": 2, "turnover_ratio": 1.65, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "002349", "name": "精华制药", "price": 8.42, "change_pct": 10.07, "reason": "公司正柴胡饮颗粒近期被国家中医药管理局中医疫病防治专家委员会纳入《新冠病毒感染者居家中医药干预指南》", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.21, "first_limit_up": 1788837759, "break_limit_up_times": 1}, {"code": "000679", "name": "大连友谊", "price": 7.21, "change_pct": 10.08, "reason": "公司零售业主要集中在大连地区，以百货店（友谊商城）为主，持续通过第三方直播平台等新媒体营销手段来拉动销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.47, "first_limit_up": 1788848046, "break_limit_up_times": 0}, {"code": "000928", "name": "中钢国际", "price": 5.96, "change_pct": 9.96, "reason": ";中钢集团旗下，冶金工程领域最早走出去的中国企业之一；主营以工程总承包为核心的工业工程、技术开发和工业服务，先后承建了150个多个海外项目，已在16个“一带一路”沿线国家落地国际工程承包商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 6.27, "first_limit_up": 1788836562, "break_limit_up_times": 11}, {"code": "603580", "name": "艾艾精工", "price": 73.99, "change_pct": 10.01, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.41, "first_limit_up": 1788844618, "break_limit_up_times": 1}, {"code": "603938", "name": "三孚股份", "price": 44.43, "change_pct": 10.0, "reason": "1、商务部对原产于日本的进口二氯二氢硅实施临时反倾销措施，唐山三孚电子材料曾代表国内产业提起调查申请；\n2、公司电子特气产品应用于存储芯片等领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.08, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "002286", "name": "保龄宝", "price": 9.25, "change_pct": 9.99, "reason": "国内功能糖龙头之一，全球5家赤藓糖醇生产商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 14.23, "first_limit_up": 1788836853, "break_limit_up_times": 2}, {"code": "600227", "name": "赤天化", "price": 4.96, "change_pct": 9.98, "reason": "贵州最大的甲醇生产企业；公司化工业务涵盖尿素、甲醇及复合肥的生产和销售，具备年产52万吨尿素、10万吨复合肥、5万吨车用尿素的生产能力", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 22.43, "first_limit_up": 1788833028, "break_limit_up_times": 0}, {"code": "000011", "name": "深物业A", "price": 9.49, "change_pct": 9.97, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1788831825, "break_limit_up_times": 1}, {"code": "601595", "name": "上海电影", "price": 22.69, "change_pct": 9.99, "reason": "公司拥有“专业发行+综合院线+高端影院”完整电影发行放映产业链，控股股东上海电影集团已于前期在上海影视乐园启动真人互动剧游项目，相关剧本策划、演员统筹、投资测算正在积极推进中；旗下的大IP开发主体上影元与互影科技、阅文集团等联合出品了首个双人互动影游项目《谍影成双》", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 10.38, "first_limit_up": 1788833782, "break_limit_up_times": 1}, {"code": "002365", "name": "永安药业", "price": 16.08, "change_pct": 9.99, "reason": "公司是牛磺酸行业龙头", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 18.95, "first_limit_up": 1788835320, "break_limit_up_times": 0}, {"code": "600769", "name": "祥龙电业", "price": 16.91, "change_pct": 10.02, "reason": "公司实控人武汉东湖新技术开发区管理委员会，与长江储存同一实控人", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1788837597, "break_limit_up_times": 0}, {"code": "600865", "name": "百大集团", "price": 13.74, "change_pct": 10.01, "reason": "公司主要从事百货零售、酒店服务、物业管理业务", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 1.14, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "300788", "name": "中信出版", "price": 31.75, "change_pct": 19.99, "reason": "公司主营图书出版与发行业务，“夸父AI”平台已覆盖17类出版场景、构建122个AI助理，书稿翻译周期缩短90%，部分图书出版周期缩至原1/3，2025年已启动出版级AI翻译平台、图书智能体等产品研发", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 8.04, "first_limit_up": 1788831351, "break_limit_up_times": 0}, {"code": "002470", "name": "金正大", "price": 2.53, "change_pct": 10.0, "reason": "1、老牌肥料企业；公司的主营业务为常规复合肥、新型肥料、磷肥以及土壤调理剂等植物所需全系列产品的研产销；\n2、公司拟6亿元投建年产10万吨磷酸铁电池正极前驱体材料项目，形成磷矿—磷酸—磷化工产品—新能源材料综合利用的磷化工全产业链", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 10.12, "first_limit_up": 1788832323, "break_limit_up_times": 0}, {"code": "603823", "name": "百合花", "price": 63.84, "change_pct": 9.99, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 1.62, "first_limit_up": 1788831055, "break_limit_up_times": 0}, {"code": "002285", "name": "世联行", "price": 2.6, "change_pct": 10.17, "reason": "公司专注房地产服务，旗下拥有“红璞公寓”、 “世联空间”、“小样社区”等多个品牌", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1788836862, "break_limit_up_times": 1}, {"code": "002383", "name": "合众思壮", "price": 7.81, "change_pct": 10.0, "reason": "1、北斗导航行业龙头企业之一，拥有完整军工资质；公司产品覆盖农机导航自动驾驶系统、变量作业系统、无人化作业解决方案、智能农机监控信息化平台以及智慧农业信息化系统等精准农业全链路；\n2、在无人驾驶领域，公司目前主要聚焦非道路工程机械无人驾驶技术的研究，并在农机自动驾驶系统领域已经实现规模化应用", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.98, "first_limit_up": 1788845070, "break_limit_up_times": 3}, {"code": "605177", "name": "东亚药业", "price": 22.06, "change_pct": 10.02, "reason": "公司主营医药及中间体，产品主要涵盖抗细菌类药物(β-内酰胺类和喹诺酮类)、皮肤用抗真菌药物等领域", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.69, "first_limit_up": 1788834371, "break_limit_up_times": 0}, {"code": "002343", "name": "慈文传媒", "price": 6.19, "change_pct": 9.95, "reason": "公司核心影视业务主要包括影视剧的投资、制作及发行业务，推动《武林外史》《圆月弯刀》《多情剑客无情剑》等五部微短剧开发制作；互动剧方面，公司已与互影科技签署了战略框架合作协议，双方将利用AI联合研发改编经典IP衍生互动剧", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 9.85, "first_limit_up": 1788832425, "break_limit_up_times": 0}, {"code": "601952", "name": "苏垦农发", "price": 10.59, "change_pct": 9.97, "reason": "公司是国内一体化种植龙头，拥有耕地119万亩，一季度净利润同比增加16.66%", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1788832294, "break_limit_up_times": 1}, {"code": "603042", "name": "华脉科技", "price": 16.97, "change_pct": 9.98, "reason": "信息通信网络基础设施解决方案提供商；公司主要产品覆盖了从局端OLT到用户端ONU的全系列ODN及无线通信网络建设产品，包括ODN物理连接及保护设备、光无源器件、光缆等光通信产品及微波无源器件、POI多路接入等无线通信网络建设产品", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 3.18, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "002194", "name": "武汉凡谷", "price": 11.08, "change_pct": 10.03, "reason": "公司微波器件产品（如微波双工器、微波滤波器）是卫星中继通信和微波点对点通信的核心部件", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 10.2, "first_limit_up": 1788831543, "break_limit_up_times": 0}, {"code": "600108", "name": "亚盛集团", "price": 5.28, "change_pct": 10.0, "reason": "我国当前最大规模的农艺种植基地；公司主营啤酒花、苜蓿牧草、马铃薯、制种玉米、大麦、食葵、果蔬等作物规模化种植", "plates": ["大农业"], "limit_up_days": 4, "turnover_ratio": 0.87, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "002790", "name": "瑞尔特", "price": 6.99, "change_pct": 10.08, "reason": "公司注册地位于福建厦门海沧区，专注于卫浴配件产品和智能卫浴产品", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1788836250, "break_limit_up_times": 1}, {"code": "000759", "name": "中百集团", "price": 7.7, "change_pct": 10.0, "reason": "以商业零售为主业的大型连锁企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 9.02, "first_limit_up": 1788831006, "break_limit_up_times": 2}, {"code": "000890", "name": "法尔胜", "price": 9.16, "change_pct": 9.96, "reason": "1、参股的普天法尔胜光通信有限公司主要产品为光纤预制棒、光纤、光缆，上述产品可以应用于在运营商基础网络通信及广播电视通信领域；\n2、公司成功推出了性能优良的熊猫型保偏光纤，产品成功应用于神州七号和天宫一号等国家重大特大型号任务中；\n3、公司深度参与特种电缆及电力基础设施建设，在“算电协同”及智能电网升级背景下，其电力传输与配套特种金属材料是储能电站及数据中心电力传输等底层刚需环节", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.53, "first_limit_up": 1788835278, "break_limit_up_times": 1}, {"code": "600737", "name": "中粮糖业", "price": 18.16, "change_pct": 9.99, "reason": "国内糖业巨头，覆盖糖全产业链，糖总经营量300万吨，占全国糖总消费量的20%", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.55, "first_limit_up": 1788831012, "break_limit_up_times": 1}, {"code": "603075", "name": "热威股份", "price": 20.93, "change_pct": 9.98, "reason": "公司主营电热元器件，包括民用电器、商用电器、工业装备和新能源汽车等行业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.85, "first_limit_up": 1788831422, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 5.09, "change_pct": 9.94, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 22.23, "first_limit_up": 1788846222, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 19.77, "change_pct": 10.02, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 23.16, "first_limit_up": 1788849541, "break_limit_up_times": 0}, {"code": "600880", "name": "博瑞传播", "price": 4.58, "change_pct": 10.1, "reason": "公司旗下每经科技2026年重点推广新增的AI舆情和GEO服务等产品线，核心产品雨燕智宣已接入通义千问大模型并入驻阿里云百炼平台，客户覆盖金融、政府、上市公司及媒体领域", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 1.35, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "000523", "name": "红棉股份", "price": 3.96, "change_pct": 10.0, "reason": "全资子公司华糖食品已建立“红棉” 、 “广氏” 、 “双喜” 等食品饮料品牌体系", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.99, "first_limit_up": 1788830700, "break_limit_up_times": 0}, {"code": "002312", "name": "川发龙蟒", "price": 9.34, "change_pct": 10.01, "reason": "国内基础磷肥行业的主要生产企业之一；公司主营磷肥、复合肥、饲料添加剂等化工产品的研产销，现有各类磷复肥和复合肥产能约225万吨", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 2.45, "first_limit_up": 1788832305, "break_limit_up_times": 0}, {"code": "000980", "name": "众泰汽车", "price": 1.84, "change_pct": 10.18, "reason": "汽车整车制造企业，拥有众泰、江南、君马等自主品牌", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.01, "first_limit_up": 1788831228, "break_limit_up_times": 4}, {"code": "603077", "name": "和邦生物", "price": 2.53, "change_pct": 10.0, "reason": "公司化肥产品主要为通过联碱法生产的氯化铵，设计年产能为125万吨/年", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.72, "first_limit_up": 1788835921, "break_limit_up_times": 1}, {"code": "600881", "name": "亚泰集团", "price": 2.07, "change_pct": 10.11, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.93, "first_limit_up": 1788834302, "break_limit_up_times": 1}, {"code": "603619", "name": "中曼石油", "price": 24.9, "change_pct": 9.98, "reason": "公司业务涵盖勘探开发、油服工程、石油装备制造，已形成成熟完备的钻采一体化服务能力，油气装备涵盖从钻机整机到顶驱、泥浆泵、自动猫道等关键部件一系列产品体系", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 10.26, "first_limit_up": 1788847359, "break_limit_up_times": 3}, {"code": "002403", "name": "爱仕达", "price": 13.65, "change_pct": 9.99, "reason": "公司与智元机器人签署战略合作协议", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 14.69, "first_limit_up": 1788830700, "break_limit_up_times": 1}, {"code": "000912", "name": "泸天化", "price": 4.73, "change_pct": 10.0, "reason": "公司主营业务包括尿素、复合肥等化肥类产品；甲醇装置处于同行业先进水平，子公司绿源醇从事甲醇业务，拥有甲醇产能70万吨/年", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1788831291, "break_limit_up_times": 0}, {"code": "603679", "name": "华体科技", "price": 26.15, "change_pct": 10.01, "reason": "智慧路灯龙头；公司已有部分智慧路灯搭载了5G基站，投资5.4亿元构建全国首个以智慧城市为主题的卫星星座“天座”", "plates": ["6G"], "limit_up_days": 2, "turnover_ratio": 5.54, "first_limit_up": 1788831352, "break_limit_up_times": 0}, {"code": "605077", "name": "华康股份", "price": 12.53, "change_pct": 10.01, "reason": "公司拟购买豫鑫糖醇100%股权，表示标的为行业内木糖醇生产能力与工艺水平均处于领先地位、市场竞争力较强的两家企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.77, "first_limit_up": 1788836688, "break_limit_up_times": 0}, {"code": "002999", "name": "天禾股份", "price": 7.37, "change_pct": 10.0, "reason": "公司目前已在试点地区开展农业植保无人机代理销售，未来将视市场情况在省内部分种植核心区代理农业植保无人机的销售工作", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 14.41, "first_limit_up": 1788836913, "break_limit_up_times": 3}, {"code": "002980", "name": "华盛昌", "price": 129.91, "change_pct": 10.0, "reason": "公司收购伽蓝特100%股权，后者专注光通信模块和光芯片测试", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 17.61, "first_limit_up": 1788832482, "break_limit_up_times": 41}, {"code": "000620", "name": "盈新发展", "price": 3.32, "change_pct": 9.93, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.08, "first_limit_up": 1788834237, "break_limit_up_times": 10}, {"code": "000059", "name": "华锦股份", "price": 6.15, "change_pct": 10.02, "reason": "公司偏三甲苯产能2.8万吨", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 5.53, "first_limit_up": 1788849492, "break_limit_up_times": 0}, {"code": "600596", "name": "新安股份", "price": 12.08, "change_pct": 10.02, "reason": "1、国内除草剂草甘膦和有机硅单体生产龙头企业；\n2、参股子公司浙江亚格新安电子新材料有限公司现有四氯化硅产能4万吨，具备高纯和超纯四氯化硅生产能力，可用于光纤等行业，产能预计于今年6月正式投用；同时，公司有机硅产品D4是光纤预制棒包层主流核心原料，已与国内外头部光纤企业多年稳定合作；\n3、公司与浙江人形机器人创新中心共建联合实验室，已向机器人客户批量交付10余款硅基新材料，用于末端执行器、仿生皮肤及柔性传感", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 9.83, "first_limit_up": 1788836734, "break_limit_up_times": 3}, {"code": "600903", "name": "贵州燃气", "price": 7.25, "change_pct": 10.02, "reason": "公司拟发行股份购买贵州页岩气勘探开发有限责任公司100%股权，标的公司实现高纯气体生产领域零的突破，高纯氦气日均产出超200立方米", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1788832194, "break_limit_up_times": 0}, {"code": "603163", "name": "圣晖集成", "price": 85.61, "change_pct": 10.0, "reason": "1、公司中标8.58亿元电子厂房内装及固资项目；\n2、公司提供英诺赛科（苏州）半导体禅额眼帘洁净室工程服务，核心技术覆盖气流管理、微分子污染控制等领域，已实现量产配套", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1788843974, "break_limit_up_times": 0}, {"code": "000020", "name": "深华发Ａ", "price": 13.7, "change_pct": 10.04, "reason": "1、公司地处深圳，在深圳市福田区华强北商圈及光明新区公明街道均拥有数万平方米的大型物业；\n2、公司主营精密注塑件及液晶显示器，现有新型生产流水线，拥有自动化设备自动涂胶机器人、注塑机等十多台", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1788833340, "break_limit_up_times": 0}, {"code": "000833", "name": "粤桂股份", "price": 22.83, "change_pct": 10.02, "reason": "1、公司以硫化工产业为依托，投资建设广东省内唯一优质工业磷酸生产项目-10万吨/年湿法精制硫酸项目，实现与新能源材料产业对接；子公司云硫矿业主要产品是硫精矿、铁矿粉、硫酸和磷肥；\n2、孙公司华晶科技银粉项目一期已投产并实现销售，二期计划2025年投产，切入光伏银粉赛道；\n3、公司机制糖业务行业知名度高，子公司贵糖集团位列广西十大糖业集团，制糖生产能力为日榨甘蔗1.2万吨，年甘蔗入榨需求量为130万吨", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1788832422, "break_limit_up_times": 0}];
const RISK_STOCKS = {};