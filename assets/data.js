const UPDATE_TIME = "2026-09-08 07:45";
const THS_HOT = [
  {
    "name": "粮食概念",
    "rise": 3.47,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "代糖概念",
    "rise": 5.18,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885904"
  },
  {
    "name": "创新药",
    "rise": 1.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续117天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续287天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "玉米",
    "rise": 4.42,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "PCB概念",
    "rise": -0.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续110天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "液冷服务器",
    "rise": -0.82,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续13天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "存储芯片",
    "rise": -0.16,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续240天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886042"
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
    "name": "AI应用",
    "rise": 0.55,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续45天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "培育钻石",
    "rise": 1.84,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "草甘膦",
    "rise": 4.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "化工ETF",
    "code": "885640"
  },
  {
    "name": "光纤概念",
    "rise": 0.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续116天上榜",
    "rankChg": -1,
    "etfName": "红土创新精选LOF",
    "code": "886084"
  },
  {
    "name": "农业种植",
    "rise": 3.12,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "猪肉",
    "rise": 0.18,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "数字货币",
    "rise": -0.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "AI视频",
    "rise": 0.77,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "CRO概念",
    "rise": 2.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "算力租赁",
    "rise": -0.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续151天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "黄金概念",
    "rise": 1.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  }
];
const THS_EVENTS = [
  {
    "title": "泰国糖产大降 全球糖市供应趋紧",
    "desc": "",
    "heat": 573900,
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
    "title": "全球食品价格8月继续上涨，极端天气与地缘紧张推高成本",
    "desc": "",
    "heat": 556631,
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
    "title": "商务部：原产于日本的进口二氯二氢硅存在倾销",
    "desc": "",
    "heat": 545301,
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
    "heat": 502393,
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
    "heat": 264389,
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
    "heat": 254635,
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
    "heat": 78170,
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
    "heat": 17246,
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 9,
    "hot_rank_chg": 24,
    "stock_cnt": 5763,
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
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 10,
    "hot_rank_chg": -4,
    "stock_cnt": 5763,
    "price": "5.28",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "10279711700.00",
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 11,
    "hot_rank_chg": -4,
    "stock_cnt": 5763,
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
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 13,
    "hot_rank_chg": 8,
    "stock_cnt": 5763,
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
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 18,
    "hot_rank_chg": 11,
    "stock_cnt": 5763,
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
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 22,
    "hot_rank_chg": -13,
    "stock_cnt": 5763,
    "price": "4.05",
    "change": "3.58",
    "market_id": "17",
    "circulate_market_value": "8959932500.00",
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 24,
    "hot_rank_chg": -10,
    "stock_cnt": 5763,
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
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 25,
    "hot_rank_chg": 14,
    "stock_cnt": 5763,
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
    "code": "002909",
    "name": "集泰股份",
    "hot_rank": 26,
    "hot_rank_chg": 14,
    "stock_cnt": 5763,
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
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 28,
    "hot_rank_chg": 53,
    "stock_cnt": 5763,
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
    "code": "002702",
    "name": "海欣食品",
    "hot_rank": 31,
    "hot_rank_chg": 19,
    "stock_cnt": 5763,
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
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 32,
    "hot_rank_chg": 44,
    "stock_cnt": 5763,
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 34,
    "hot_rank_chg": -24,
    "stock_cnt": 5763,
    "price": "12.39",
    "change": "-1.27",
    "market_id": "17",
    "circulate_market_value": "22167424000.00",
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 39,
    "hot_rank_chg": -2,
    "stock_cnt": 5763,
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
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 41,
    "hot_rank_chg": 2,
    "stock_cnt": 5763,
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
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 46,
    "hot_rank_chg": -28,
    "stock_cnt": 5763,
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
    "code": "601949",
    "name": "中国出版",
    "hot_rank": 49,
    "hot_rank_chg": -3,
    "stock_cnt": 5763,
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
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 50,
    "hot_rank_chg": 70,
    "stock_cnt": 5763,
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
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 51,
    "hot_rank_chg": 12,
    "stock_cnt": 5763,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 59,
    "hot_rank_chg": -6,
    "stock_cnt": 5763,
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
        "change_pct": -0.73
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
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 60,
    "hot_rank_chg": 13,
    "stock_cnt": 5763,
    "price": "7.68",
    "change": "-0.52",
    "market_id": "33",
    "circulate_market_value": "6806403300.00",
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
        "name": "土地流转",
        "change_pct": 2.62
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
        "name": "水产养殖",
        "change_pct": 2.02
      },
      {
        "name": "自贸区",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 61,
    "hot_rank_chg": 19,
    "stock_cnt": 5763,
    "price": "10.27",
    "change": "-0.87",
    "market_id": "33",
    "circulate_market_value": "8673251000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.14
      },
      {
        "name": "大飞机",
        "change_pct": 0.72
      },
      {
        "name": "北斗导航",
        "change_pct": 0.67
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.52
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.0
      },
      {
        "name": "军工",
        "change_pct": 0.65
      },
      {
        "name": "碳纤维",
        "change_pct": 0.65
      },
      {
        "name": "无人机",
        "change_pct": 0.5
      },
      {
        "name": "航天",
        "change_pct": 0.49
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.55
      },
      {
        "name": "低空经济",
        "change_pct": 0.48
      },
      {
        "name": "海洋经济",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 62,
    "hot_rank_chg": -32,
    "stock_cnt": 5763,
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
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 63,
    "hot_rank_chg": -5,
    "stock_cnt": 5763,
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
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 76,
    "hot_rank_chg": -49,
    "stock_cnt": 5763,
    "price": "6.12",
    "change": "-3.62",
    "market_id": "33",
    "circulate_market_value": "7116625600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.64
      },
      {
        "name": "新疆概念",
        "change_pct": 1.4
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
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 89,
    "hot_rank_chg": -25,
    "stock_cnt": 5763,
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
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 91,
    "hot_rank_chg": 67,
    "stock_cnt": 5763,
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
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 93,
    "hot_rank_chg": 210,
    "stock_cnt": 5763,
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
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 95,
    "hot_rank_chg": 676,
    "stock_cnt": 5763,
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
    "hot_rank": 97,
    "hot_rank_chg": -29,
    "stock_cnt": 5763,
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
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 99,
    "hot_rank_chg": -40,
    "stock_cnt": 5763,
    "price": "6.80",
    "change": "-6.21",
    "market_id": "33",
    "circulate_market_value": "4383514200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
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
        "name": "装修装饰",
        "change_pct": 0.75
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.92
      },
      {
        "name": "家具家居",
        "change_pct": 0.53
      },
      {
        "name": "智能制造",
        "change_pct": -0.15
      },
      {
        "name": "3D打印",
        "change_pct": -0.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.15
      },
      {
        "name": "旧改",
        "change_pct": 1.14
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "14.79", "change": "9.31", "market_id": "17", "circulate_market_value": "9491973800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "14.95", "change": "7.40", "market_id": "17", "circulate_market_value": "9956700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5763, "price": "18.67", "change": "9.12", "market_id": "17", "circulate_market_value": "8297777900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 4, "hot_rank_chg": 16, "stock_cnt": 5763, "price": "222.30", "change": "7.33", "market_id": "17", "circulate_market_value": "61263295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 5, "hot_rank_chg": 39, "stock_cnt": 5763, "price": "18.16", "change": "9.99", "market_id": "17", "circulate_market_value": "38841483000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "食糖全产业链"}, {"code": "002579", "name": "中京电子", "hot_rank": 6, "hot_rank_chg": 16, "stock_cnt": 5763, "price": "17.06", "change": "9.99", "market_id": "33", "circulate_market_value": "9953456700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高阶HDI"}, {"code": "600869", "name": "远东股份", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5763, "price": "22.66", "change": "8.53", "market_id": "17", "circulate_market_value": "50290532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 8, "hot_rank_chg": 24, "stock_cnt": 5763, "price": "40.12", "change": "9.17", "market_id": "33", "circulate_market_value": "60899294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 9, "hot_rank_chg": 24, "stock_cnt": 5763, "price": "3.44", "change": "9.90", "market_id": "33", "circulate_market_value": "8058847100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": 1.17}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "人工智能", "change_pct": 0.27}, {"name": "VR&AR", "change_pct": -0.22}, {"name": "京津冀", "change_pct": 1.39}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "住房租赁", "change_pct": 2.85}, {"name": "破净股", "change_pct": 1.46}, {"name": "数字经济", "change_pct": 0.41}, {"name": "房产经纪", "change_pct": 5.09}, {"name": "物业管理", "change_pct": 2.28}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "AI大模型/智能体", "change_pct": 0.46}]}, {"code": "600108", "name": "亚盛集团", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5763, "price": "5.28", "change": "10.00", "market_id": "17", "circulate_market_value": "10279711700.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "玉米制种", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "农业种植", "change_pct": 4.35}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "土地流转", "change_pct": 2.62}, {"name": "农垦", "change_pct": 3.13}, {"name": "乡村振兴", "change_pct": 2.29}, {"name": "食品", "change_pct": 1.95}, {"name": "甜味剂/代糖", "change_pct": 6.75}, {"name": "大农业", "change_pct": 2.57}, {"name": "蜜雪冰城概念股", "change_pct": 3.66}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5763, "price": "7.90", "change": "0.38", "market_id": "33", "circulate_market_value": "15129230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.32}, {"name": "林业", "change_pct": 1.71}, {"name": "碳中和", "change_pct": 1.0}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5763, "price": "22.25", "change": "-3.05", "market_id": "33", "circulate_market_value": "10164918200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 13, "hot_rank_chg": 8, "stock_cnt": 5763, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "5048936400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "新零售", "change_pct": 1.17}, {"name": "农业种植", "change_pct": 4.35}, {"name": "冷链", "change_pct": 1.07}, {"name": "大农业", "change_pct": 2.57}, {"name": "预制菜", "change_pct": 1.4}, {"name": "国企改革", "change_pct": 1.41}, {"name": "可降解塑料", "change_pct": 1.15}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "湖北国企改革", "change_pct": 2.19}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 14, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "16.50", "change": "3.84", "market_id": "17", "circulate_market_value": "21190597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": -10, "stock_cnt": 5763, "price": "902.37", "change": "0.43", "market_id": "33", "circulate_market_value": "1001573850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688795", "name": "摩尔线程", "hot_rank": 16, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "400.11", "change": "-3.70", "market_id": "17", "circulate_market_value": "22406160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 17, "hot_rank_chg": 19, "stock_cnt": 5763, "price": "40.11", "change": "8.52", "market_id": "17", "circulate_market_value": "27731076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 18, "hot_rank_chg": 11, "stock_cnt": 5763, "price": "10.48", "change": "9.97", "market_id": "17", "circulate_market_value": "5531365800.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "棉花", "change_pct": 1.93}, {"name": "大农业", "change_pct": 2.57}, {"name": "供销社", "change_pct": 3.44}]}, {"code": "600865", "name": "百大集团", "hot_rank": 19, "hot_rank_chg": -8, "stock_cnt": 5763, "price": "13.74", "change": "10.01", "market_id": "17", "circulate_market_value": "5169542000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商业零售"}, {"code": "600371", "name": "万向德农", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5763, "price": "15.83", "change": "5.04", "market_id": "17", "circulate_market_value": "4631509700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "19.77", "change": "10.02", "market_id": "17", "circulate_market_value": "13449920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇"}, {"code": "600103", "name": "青山纸业", "hot_rank": 22, "hot_rank_chg": -13, "stock_cnt": 5763, "price": "4.05", "change": "3.58", "market_id": "17", "circulate_market_value": "8959932500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.22}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "云计算数据中心", "change_pct": -0.31}, {"name": "光通信", "change_pct": -0.42}, {"name": "林业", "change_pct": 1.71}, {"name": "军民融合", "change_pct": 0.37}, {"name": "军工", "change_pct": 0.65}, {"name": "人造肉", "change_pct": 2.73}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "63.11", "change": "-1.39", "market_id": "17", "circulate_market_value": "154849620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 24, "hot_rank_chg": -10, "stock_cnt": 5763, "price": "7.75", "change": "-3.12", "market_id": "17", "circulate_market_value": "19518452000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "工业大麻", "change_pct": 1.08}, {"name": "中药", "change_pct": 1.67}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.63}, {"name": "医药", "change_pct": 1.8}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "流感", "change_pct": 1.52}, {"name": "振兴东北", "change_pct": 2.2}, {"name": "食品", "change_pct": 1.95}]}, {"code": "600693", "name": "东百集团", "hot_rank": 25, "hot_rank_chg": 14, "stock_cnt": 5763, "price": "11.52", "change": "0.26", "market_id": "17", "circulate_market_value": "10010336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "快递物流", "change_pct": 1.05}, {"name": "新零售", "change_pct": 1.17}, {"name": "福建自贸/海西概念", "change_pct": 1.32}, {"name": "旅游", "change_pct": 1.3}, {"name": "阿里巴巴概念股", "change_pct": 0.06}, {"name": "物业管理", "change_pct": 2.28}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "002909", "name": "集泰股份", "hot_rank": 26, "hot_rank_chg": 14, "stock_cnt": 5763, "price": "8.72", "change": "9.96", "market_id": "33", "circulate_market_value": "3317326800.00", "change_type": "1", "change_section": "7", "change_days": "6", "change_reason": "液冷硅油", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.03}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "有机硅", "change_pct": 2.0}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "光伏", "change_pct": 0.16}, {"name": "船舶", "change_pct": 0.74}, {"name": "固态电池", "change_pct": -0.13}, {"name": "新型城镇化", "change_pct": 1.04}, {"name": "旧改", "change_pct": 1.14}, {"name": "飞行汽车/eVTOL", "change_pct": 0.05}, {"name": "液冷服务器", "change_pct": -0.97}]}, {"code": "603823", "name": "百合花", "hot_rank": 27, "hot_rank_chg": 39, "stock_cnt": 5763, "price": "63.84", "change": "9.99", "market_id": "17", "circulate_market_value": "26580914000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶"}, {"code": "600227", "name": "赤天化", "hot_rank": 28, "hot_rank_chg": 53, "stock_cnt": 5763, "price": "4.96", "change": "9.98", "market_id": "17", "circulate_market_value": "6336895000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 4.78}, {"name": "化肥", "change_pct": 4.97}, {"name": "保健品", "change_pct": 1.12}, {"name": "民营医院", "change_pct": 1.63}, {"name": "医药", "change_pct": 1.8}, {"name": "煤化工", "change_pct": 4.87}, {"name": "食品", "change_pct": 1.95}, {"name": "大农业", "change_pct": 2.57}, {"name": "干细胞", "change_pct": 3.08}, {"name": "阿尔茨海默病", "change_pct": 1.87}]}, {"code": "603118", "name": "共进股份", "hot_rank": 29, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "18.04", "change": "0.84", "market_id": "17", "circulate_market_value": "14202466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002702", "name": "海欣食品", "hot_rank": 31, "hot_rank_chg": 19, "stock_cnt": 5763, "price": "6.79", "change": "10.05", "market_id": "33", "circulate_market_value": "3114870100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "速冻食品", "xgb_concepts": [{"name": "食品", "change_pct": 1.95}, {"name": "预制菜", "change_pct": 1.4}, {"name": "人造肉", "change_pct": 2.73}, {"name": "地摊经济", "change_pct": 1.57}]}, {"code": "601118", "name": "海南橡胶", "hot_rank": 32, "hot_rank_chg": 44, "stock_cnt": 5763, "price": "7.87", "change": "9.31", "market_id": "17", "circulate_market_value": "33679097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "橡胶", "change_pct": 4.24}, {"name": "土地流转", "change_pct": 2.62}, {"name": "农垦", "change_pct": 3.13}, {"name": "海南概念", "change_pct": 1.27}, {"name": "自由贸易港", "change_pct": 1.23}, {"name": "海南自由贸易港", "change_pct": 1.23}, {"name": "大农业", "change_pct": 2.57}, {"name": "可降解塑料", "change_pct": 1.15}, {"name": "大消费", "change_pct": 0.71}, {"name": "免税店概念", "change_pct": 1.02}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 33, "hot_rank_chg": -8, "stock_cnt": 5763, "price": "124.90", "change": "1.83", "market_id": "33", "circulate_market_value": "240164180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 34, "hot_rank_chg": -24, "stock_cnt": 5763, "price": "12.39", "change": "-1.27", "market_id": "17", "circulate_market_value": "22167424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 2.59}, {"name": "纯碱", "change_pct": 3.04}, {"name": "食品", "change_pct": 1.95}, {"name": "土壤修复", "change_pct": 1.09}, {"name": "东数西算/算力", "change_pct": -0.24}, {"name": "OpenClaw概念", "change_pct": -1.21}, {"name": "DeepSeek概念股", "change_pct": -0.02}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 35, "hot_rank_chg": -22, "stock_cnt": 5763, "price": "523.68", "change": "-2.36", "market_id": "17", "circulate_market_value": "15756337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 36, "hot_rank_chg": 51, "stock_cnt": 5763, "price": "16.53", "change": "3.70", "market_id": "33", "circulate_market_value": "9834228700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 37, "hot_rank_chg": -18, "stock_cnt": 5763, "price": "72.32", "change": "-3.24", "market_id": "33", "circulate_market_value": "106087341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 38, "hot_rank_chg": 14, "stock_cnt": 5763, "price": "18.59", "change": "3.51", "market_id": "17", "circulate_market_value": "38881769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 39, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "5.56", "change": "4.32", "market_id": "33", "circulate_market_value": "14748181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.97}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "航天", "change_pct": 0.49}, {"name": "旧改", "change_pct": 1.14}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 40, "hot_rank_chg": 11, "stock_cnt": 5763, "price": "37.33", "change": "-2.12", "market_id": "33", "circulate_market_value": "28274306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000735", "name": "罗牛山", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "6.81", "change": "1.04", "market_id": "33", "circulate_market_value": "7837612100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "养鸡", "change_pct": 0.71}, {"name": "养猪", "change_pct": 0.42}, {"name": "农垦", "change_pct": 3.13}, {"name": "冷链", "change_pct": 1.07}, {"name": "大数据", "change_pct": 0.37}, {"name": "教育", "change_pct": 1.92}, {"name": "海南概念", "change_pct": 1.27}, {"name": "自由贸易港", "change_pct": 1.23}, {"name": "海南自由贸易港", "change_pct": 1.23}, {"name": "赛马", "change_pct": 0.73}, {"name": "大农业", "change_pct": 2.57}, {"name": "职业教育", "change_pct": 1.6}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "002403", "name": "爱仕达", "hot_rank": 42, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "13.65", "change": "9.99", "market_id": "33", "circulate_market_value": "4056253800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "600206", "name": "有研新材", "hot_rank": 43, "hot_rank_chg": 54, "stock_cnt": 5763, "price": "46.85", "change": "0.43", "market_id": "17", "circulate_market_value": "39661024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 44, "hot_rank_chg": -9, "stock_cnt": 5763, "price": "64.15", "change": "-9.71", "market_id": "33", "circulate_market_value": "17705328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 45, "hot_rank_chg": 26, "stock_cnt": 5763, "price": "30.08", "change": "4.12", "market_id": "17", "circulate_market_value": "37101707000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 46, "hot_rank_chg": -28, "stock_cnt": 5763, "price": "5.58", "change": "-4.78", "market_id": "33", "circulate_market_value": "3966257300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.27}, {"name": "影视", "change_pct": 1.64}, {"name": "旅游", "change_pct": 1.3}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "AI营销", "change_pct": 0.68}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "短剧/互动影游", "change_pct": 1.16}, {"name": "IP经济/谷子经济", "change_pct": 1.25}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 47, "hot_rank_chg": -30, "stock_cnt": 5763, "price": "58.39", "change": "-0.14", "market_id": "17", "circulate_market_value": "262932450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 48, "hot_rank_chg": 44, "stock_cnt": 5763, "price": "48.53", "change": "5.45", "market_id": "17", "circulate_market_value": "100711756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601949", "name": "中国出版", "hot_rank": 49, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "7.05", "change": "9.98", "market_id": "17", "circulate_market_value": "13422975000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "AI应用", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "中字头", "change_pct": 0.9}, {"name": "数字经济", "change_pct": 0.41}, {"name": "知识产权", "change_pct": 3.01}, {"name": "传媒", "change_pct": 2.66}, {"name": "NFT", "change_pct": 1.78}, {"name": "国企改革", "change_pct": 1.41}, {"name": "知识付费", "change_pct": 3.76}]}, {"code": "600162", "name": "香江控股", "hot_rank": 50, "hot_rank_chg": 70, "stock_cnt": 5763, "price": "5.50", "change": "10.00", "market_id": "17", "circulate_market_value": "17976410000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力服务", "xgb_concepts": [{"name": "房地产", "change_pct": 2.21}, {"name": "养老产业", "change_pct": 1.12}, {"name": "粤港澳大湾区", "change_pct": 1.6}, {"name": "民营医院", "change_pct": 1.63}, {"name": "地摊经济", "change_pct": 1.57}]}, {"code": "000798", "name": "中水渔业", "hot_rank": 51, "hot_rank_chg": 12, "stock_cnt": 5763, "price": "11.52", "change": "3.32", "market_id": "33", "circulate_market_value": "4214433200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "人工智能", "change_pct": 0.27}, {"name": "社区团购", "change_pct": 1.9}, {"name": "预制菜", "change_pct": 1.4}, {"name": "国企改革", "change_pct": 1.41}, {"name": "水产养殖", "change_pct": 2.02}, {"name": "海洋经济", "change_pct": 1.01}]}, {"code": "002384", "name": "东山精密", "hot_rank": 52, "hot_rank_chg": -10, "stock_cnt": 5763, "price": "186.42", "change": "-2.17", "market_id": "33", "circulate_market_value": "258438100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 53, "hot_rank_chg": -12, "stock_cnt": 5763, "price": "20.62", "change": "-6.70", "market_id": "33", "circulate_market_value": "21067453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5763, "price": "146.28", "change": "-1.26", "market_id": "17", "circulate_market_value": "352790630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603696", "name": "安记食品", "hot_rank": 55, "hot_rank_chg": 12, "stock_cnt": 5763, "price": "17.70", "change": "6.37", "market_id": "17", "circulate_market_value": "4163040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 56, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "41.39", "change": "-0.74", "market_id": "17", "circulate_market_value": "164383990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 57, "hot_rank_chg": 4, "stock_cnt": 5763, "price": "33.89", "change": "-4.18", "market_id": "33", "circulate_market_value": "96927863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 58, "hot_rank_chg": -27, "stock_cnt": 5763, "price": "106.97", "change": "0.94", "market_id": "17", "circulate_market_value": "105045679000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 59, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "5.56", "change": "-2.11", "market_id": "33", "circulate_market_value": "196641270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.37}, {"name": "手机产业链", "change_pct": -0.99}, {"name": "超高清视频", "change_pct": 0.04}, {"name": "苹果产业链", "change_pct": -0.78}, {"name": "电竞", "change_pct": 0.6}, {"name": "半导体", "change_pct": -0.73}, {"name": "人工智能", "change_pct": 0.27}, {"name": "互联网医疗", "change_pct": 1.28}, {"name": "VR&AR", "change_pct": -0.22}, {"name": "OLED", "change_pct": -0.6}, {"name": "京津冀", "change_pct": 1.39}, {"name": "物联网", "change_pct": 0.1}, {"name": "指纹识别", "change_pct": -0.24}, {"name": "汽车零部件", "change_pct": -0.11}, {"name": "白马股", "change_pct": -0.05}, {"name": "智能制造", "change_pct": -0.15}, {"name": "小米概念股", "change_pct": -0.77}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "液晶面板/LCD", "change_pct": -0.51}, {"name": "全息概念", "change_pct": 0.15}, {"name": "理想汽车概念股", "change_pct": -0.04}, {"name": "MicroLED", "change_pct": -0.61}, {"name": "钙钛矿电池", "change_pct": 0.06}, {"name": "智能手表", "change_pct": -1.47}, {"name": "MiniLED", "change_pct": -0.14}, {"name": "传感器", "change_pct": -0.67}, {"name": "大硅片", "change_pct": -1.08}, {"name": "AI PC", "change_pct": -0.65}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "回购", "change_pct": 0.34}, {"name": "光电共封装CPO", "change_pct": -1.14}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "玻璃基板封装", "change_pct": -0.85}]}, {"code": "300189", "name": "神农种业", "hot_rank": 60, "hot_rank_chg": 13, "stock_cnt": 5763, "price": "7.68", "change": "-0.52", "market_id": "33", "circulate_market_value": "6806403300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 4.35}, {"name": "土地流转", "change_pct": 2.62}, {"name": "海南概念", "change_pct": 1.27}, {"name": "自由贸易港", "change_pct": 1.23}, {"name": "海南自由贸易港", "change_pct": 1.23}, {"name": "大农业", "change_pct": 2.57}, {"name": "水产养殖", "change_pct": 2.02}, {"name": "自贸区", "change_pct": 1.19}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 61, "hot_rank_chg": 19, "stock_cnt": 5763, "price": "10.27", "change": "-0.87", "market_id": "33", "circulate_market_value": "8673251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.14}, {"name": "大飞机", "change_pct": 0.72}, {"name": "北斗导航", "change_pct": 0.67}, {"name": "高铁轨交", "change_pct": 0.52}, {"name": "军民融合", "change_pct": 0.37}, {"name": "磁悬浮", "change_pct": 0.0}, {"name": "军工", "change_pct": 0.65}, {"name": "碳纤维", "change_pct": 0.65}, {"name": "无人机", "change_pct": 0.5}, {"name": "航天", "change_pct": 0.49}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "低空经济", "change_pct": 0.48}, {"name": "海洋经济", "change_pct": 1.01}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 62, "hot_rank_chg": -32, "stock_cnt": 5763, "price": "8.26", "change": "-2.02", "market_id": "33", "circulate_market_value": "13438969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.66}, {"name": "电竞", "change_pct": 0.6}, {"name": "手游", "change_pct": 1.02}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "人工智能", "change_pct": 0.27}, {"name": "游戏", "change_pct": 0.92}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.41}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "快手概念股", "change_pct": 0.64}, {"name": "元宇宙", "change_pct": 0.53}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "东数西算/算力", "change_pct": -0.24}, {"name": "web3.0", "change_pct": 0.08}, {"name": "AIGC概念", "change_pct": 0.66}, {"name": "数据要素", "change_pct": 0.37}, {"name": "字节跳动概念股", "change_pct": 0.51}, {"name": "AI营销", "change_pct": 0.68}, {"name": "ChatGPT", "change_pct": 0.02}, {"name": "智能眼镜/MR头显", "change_pct": -1.02}, {"name": "AI大模型/智能体", "change_pct": 0.46}, {"name": "人形机器人", "change_pct": -0.56}, {"name": "短剧/互动影游", "change_pct": 1.16}, {"name": "多模态", "change_pct": 0.0}, {"name": "AI视频", "change_pct": 1.06}, {"name": "IP经济/谷子经济", "change_pct": 1.25}, {"name": "小红书概念股", "change_pct": 0.92}]}, {"code": "002059", "name": "云南旅游", "hot_rank": 63, "hot_rank_chg": -5, "stock_cnt": 5763, "price": "6.28", "change": "3.46", "market_id": "33", "circulate_market_value": "6219669600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.4}, {"name": "旅游", "change_pct": 1.3}, {"name": "虚拟数字人", "change_pct": 0.98}, {"name": "国企改革", "change_pct": 1.41}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 64, "hot_rank_chg": 15, "stock_cnt": 5763, "price": "21.45", "change": "1.66", "market_id": "33", "circulate_market_value": "25235256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 65, "hot_rank_chg": 7, "stock_cnt": 5763, "price": "385.96", "change": "0.14", "market_id": "17", "circulate_market_value": "258870450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 66, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "68.60", "change": "-0.58", "market_id": "17", "circulate_market_value": "122753842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 67, "hot_rank_chg": 365, "stock_cnt": 5763, "price": "31.64", "change": "5.26", "market_id": "33", "circulate_market_value": "10725783700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 68, "hot_rank_chg": -13, "stock_cnt": 5763, "price": "13.28", "change": "-1.85", "market_id": "33", "circulate_market_value": "8069215500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 69, "hot_rank_chg": -20, "stock_cnt": 5763, "price": "49.83", "change": "-1.23", "market_id": "33", "circulate_market_value": "57179425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 70, "hot_rank_chg": 30, "stock_cnt": 5763, "price": "416.85", "change": "4.08", "market_id": "17", "circulate_market_value": "169382120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 71, "hot_rank_chg": 130, "stock_cnt": 5763, "price": "44.43", "change": "10.00", "market_id": "17", "circulate_market_value": "17000007000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "二氯二氢硅反倾销"}, {"code": "603629", "name": "利通电子", "hot_rank": 72, "hot_rank_chg": 24, "stock_cnt": 5763, "price": "108.99", "change": "-2.15", "market_id": "17", "circulate_market_value": "39315243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 73, "hot_rank_chg": 124, "stock_cnt": 5763, "price": "40.24", "change": "3.21", "market_id": "17", "circulate_market_value": "51170048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 74, "hot_rank_chg": 16, "stock_cnt": 5763, "price": "33.52", "change": "0.66", "market_id": "33", "circulate_market_value": "36232381000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 75, "hot_rank_chg": 26, "stock_cnt": 5763, "price": "33.86", "change": "3.01", "market_id": "17", "circulate_market_value": "697576710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 76, "hot_rank_chg": -49, "stock_cnt": 5763, "price": "6.12", "change": "-3.62", "market_id": "33", "circulate_market_value": "7116625600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 1.64}, {"name": "新疆概念", "change_pct": 1.4}, {"name": "阿里巴巴概念股", "change_pct": 0.06}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "短剧/互动影游", "change_pct": 1.16}, {"name": "IP经济/谷子经济", "change_pct": 1.25}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 77, "hot_rank_chg": 38, "stock_cnt": 5763, "price": "68.64", "change": "0.87", "market_id": "33", "circulate_market_value": "49780238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603626", "name": "科森科技", "hot_rank": 78, "hot_rank_chg": 55, "stock_cnt": 5763, "price": "21.69", "change": "9.99", "market_id": "17", "circulate_market_value": "12035340500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002017", "name": "东信和平", "hot_rank": 79, "hot_rank_chg": 274, "stock_cnt": 5763, "price": "17.12", "change": "4.71", "market_id": "33", "circulate_market_value": "9932551300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 80, "hot_rank_chg": 19, "stock_cnt": 5763, "price": "192.78", "change": "3.60", "market_id": "17", "circulate_market_value": "30226076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 81, "hot_rank_chg": -24, "stock_cnt": 5763, "price": "64.75", "change": "-2.73", "market_id": "17", "circulate_market_value": "1284904960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000737", "name": "北方铜业", "hot_rank": 82, "hot_rank_chg": 186, "stock_cnt": 5763, "price": "15.71", "change": "9.63", "market_id": "33", "circulate_market_value": "29920364000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 83, "hot_rank_chg": 24, "stock_cnt": 5763, "price": "39.11", "change": "0.31", "market_id": "17", "circulate_market_value": "57178617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 84, "hot_rank_chg": -50, "stock_cnt": 5763, "price": "179.92", "change": "-2.47", "market_id": "33", "circulate_market_value": "141422470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 85, "hot_rank_chg": 21, "stock_cnt": 5763, "price": "14.48", "change": "3.65", "market_id": "17", "circulate_market_value": "60385847000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 86, "hot_rank_chg": 16, "stock_cnt": 5763, "price": "32.51", "change": "-0.64", "market_id": "17", "circulate_market_value": "110954995000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 87, "hot_rank_chg": -49, "stock_cnt": 5763, "price": "88.23", "change": "-15.46", "market_id": "33", "circulate_market_value": "18049668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 88, "hot_rank_chg": 97, "stock_cnt": 5763, "price": "18.94", "change": "3.10", "market_id": "17", "circulate_market_value": "330708350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603123", "name": "翠微股份", "hot_rank": 89, "hot_rank_chg": -25, "stock_cnt": 5763, "price": "12.28", "change": "4.42", "market_id": "17", "circulate_market_value": "8009948700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.43}, {"name": "蚂蚁集团概念股", "change_pct": 0.19}, {"name": "无人驾驶", "change_pct": -0.19}, {"name": "新零售", "change_pct": 1.17}, {"name": "移动支付", "change_pct": -0.18}, {"name": "京津冀", "change_pct": 1.39}, {"name": "北京城市规划", "change_pct": 1.59}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "阿里巴巴概念股", "change_pct": 0.06}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "物业管理", "change_pct": 2.28}, {"name": "字节跳动概念股", "change_pct": 0.51}, {"name": "国企改革", "change_pct": 1.41}, {"name": "数字人民币", "change_pct": 0.02}, {"name": "AI大模型/智能体", "change_pct": 0.46}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 90, "hot_rank_chg": -20, "stock_cnt": 5763, "price": "13.98", "change": "-1.83", "market_id": "33", "circulate_market_value": "48621465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 91, "hot_rank_chg": 67, "stock_cnt": 5763, "price": "8.01", "change": "10.03", "market_id": "33", "circulate_market_value": "3749653700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI文旅", "xgb_concepts": [{"name": "旅游", "change_pct": 1.3}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "广西概念", "change_pct": 2.08}, {"name": "低空经济", "change_pct": 0.48}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 92, "hot_rank_chg": -38, "stock_cnt": 5763, "price": "28.30", "change": "3.17", "market_id": "17", "circulate_market_value": "11348300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000523", "name": "红棉股份", "hot_rank": 93, "hot_rank_chg": 210, "stock_cnt": 5763, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "7107479500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "食糖业务", "xgb_concepts": [{"name": "啤酒", "change_pct": 2.08}, {"name": "调味品", "change_pct": 2.59}, {"name": "粤港澳大湾区", "change_pct": 1.6}, {"name": "白糖", "change_pct": 9.05}, {"name": "食品", "change_pct": 1.95}, {"name": "甜味剂/代糖", "change_pct": 6.75}, {"name": "物业管理", "change_pct": 2.28}, {"name": "国企改革", "change_pct": 1.41}, {"name": "饮料", "change_pct": 1.7}]}, {"code": "002980", "name": "华盛昌", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5763, "price": "129.91", "change": "10.00", "market_id": "33", "circulate_market_value": "13158170700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "光通信测试"}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 95, "hot_rank_chg": 676, "stock_cnt": 5763, "price": "11.08", "change": "10.03", "market_id": "33", "circulate_market_value": "5702290400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": -0.99}, {"name": "5G", "change_pct": -0.03}, {"name": "光通信", "change_pct": -0.42}, {"name": "教育", "change_pct": 1.92}, {"name": "毫米波通信", "change_pct": 0.87}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "华为产业链", "change_pct": -0.08}, {"name": "毫米波雷达", "change_pct": -0.09}, {"name": "5.5G概念", "change_pct": 0.5}]}, {"code": "600150", "name": "中国船舶", "hot_rank": 96, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "39.08", "change": "1.82", "market_id": "17", "circulate_market_value": "294101280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 97, "hot_rank_chg": -29, "stock_cnt": 5763, "price": "9.40", "change": "4.56", "market_id": "33", "circulate_market_value": "4143726300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.17}, {"name": "锂电池", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "新能源汽车", "change_pct": 0.0}, {"name": "两轮车", "change_pct": 0.05}, {"name": "珠宝饰品", "change_pct": 1.12}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 99, "hot_rank_chg": -40, "stock_cnt": 5763, "price": "6.80", "change": "-6.21", "market_id": "33", "circulate_market_value": "4383514200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.03}, {"name": "强势人气股", "change_pct": 0.97}, {"name": "装修装饰", "change_pct": 0.75}, {"name": "装配式建筑", "change_pct": 0.92}, {"name": "家具家居", "change_pct": 0.53}, {"name": "智能制造", "change_pct": -0.15}, {"name": "3D打印", "change_pct": -0.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.15}, {"name": "旧改", "change_pct": 1.14}]}, {"code": "300502", "name": "新易盛", "hot_rank": 100, "hot_rank_chg": -23, "stock_cnt": 5763, "price": "416.40", "change": "-0.19", "market_id": "33", "circulate_market_value": "522266850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};