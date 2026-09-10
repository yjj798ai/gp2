const UPDATE_TIME = "2026-09-10 18:01";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": -0.36,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续113天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.64,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续290天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "粮食概念",
    "rise": -2.91,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "创新药",
    "rise": -2.08,
    "rate": 0,
    "tag": "",
    "hotTag": "连续120天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -0.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "ST板块",
    "rise": 0.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "中船系",
    "rise": 1.18,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885860"
  },
  {
    "name": "绿色电力",
    "rise": -0.47,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "电力ETF",
    "code": "885936"
  },
  {
    "name": "商业航天",
    "rise": -1.06,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续219天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "培育钻石",
    "rise": -2.71,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "军工",
    "rise": -1.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "液冷服务器",
    "rise": -1.92,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": -1.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续48天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "代糖概念",
    "rise": -3.19,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885904"
  },
  {
    "name": "农业种植",
    "rise": -2.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "猪肉",
    "rise": -2.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "光纤概念",
    "rise": -1.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续119天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "黄金概念",
    "rise": -1.3,
    "rate": 0,
    "tag": "",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "互联网金融",
    "rise": -0.71,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "MLCC概念",
    "rise": -0.33,
    "rate": 0,
    "tag": "",
    "hotTag": "连续30天上榜",
    "rankChg": -1,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  }
];
const THS_EVENTS = [
  {
    "title": "超强厄尔尼诺概率超90% 农产品涨价主线全面扩散",
    "desc": "",
    "heat": 218592,
    "direction": "农业",
    "themes": [
      "渔业",
      "农业种植",
      "生态农业",
      "磷化工",
      "粮食概念"
    ],
    "stocks": [
      {
        "name": "新农开发",
        "code": "600359",
        "chg": 10.045662
      }
    ]
  },
  {
    "title": "知情人士证实DeepSeek备战科创板IPO，中信已入场尽调",
    "desc": "",
    "heat": 146866,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "ST荣科",
        "code": "300290",
        "chg": 18.314425
      }
    ]
  },
  {
    "title": "电子布涨价落地 头部企业积极扩产",
    "desc": "",
    "heat": 120030,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "逸豪新材",
        "code": "301176",
        "chg": 15.285714
      }
    ]
  },
  {
    "title": "顶配26499元！苹果折叠屏iPhone发布！A股供应商回应",
    "desc": "",
    "heat": 88961,
    "direction": "苹果折叠屏",
    "themes": [
      "柔性屏(折叠屏)",
      "苹果概念"
    ],
    "stocks": [
      {
        "name": "环旭电子",
        "code": "601231",
        "chg": 10.00788
      }
    ]
  },
  {
    "title": "美股三大指数集体收跌 存储等板块走高",
    "desc": "",
    "heat": 45041,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "太极实业",
        "code": "600667",
        "chg": 10.022026
      }
    ]
  },
  {
    "title": "一则消息引爆，Meta盘前大涨",
    "desc": "",
    "heat": 43471,
    "direction": "AI智能体",
    "themes": [
      "AI智能体",
      "AI应用"
    ],
    "stocks": [
      {
        "name": "ST荣科",
        "code": "300290",
        "chg": 18.314425
      }
    ]
  },
  {
    "title": "9月10日15:00国新办就金融领域贯彻落实“十五五”规划、推动金融强国建设有关情况举行新闻发布会",
    "desc": "",
    "heat": 35366,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险",
      "互联网金融",
      "银行"
    ],
    "stocks": [
      {
        "name": "国创高新",
        "code": "002377",
        "chg": 10.15873
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+1.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "期货概念",
    "change": "+1.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "船舶",
    "change": "+1.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电力体制改革",
    "change": "+1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+1.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "厨卫家电",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "+0.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+0.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ST股",
    "change": "+0.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+0.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "海工装备",
    "change": "+0.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+0.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5882,
    "price": "8.69",
    "change": "2.60",
    "market_id": "33",
    "circulate_market_value": "5698085400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.17
      },
      {
        "name": "新零售",
        "change_pct": -1.88
      },
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "冷链",
        "change_pct": -1.16
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "预制菜",
        "change_pct": -2.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.44
      },
      {
        "name": "免税店概念",
        "change_pct": -1.17
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 9,
    "hot_rank_chg": 1,
    "stock_cnt": 5882,
    "price": "9.69",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "4536097900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "AI文旅",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": -0.29
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.16
      },
      {
        "name": "广西概念",
        "change_pct": -0.78
      },
      {
        "name": "低空经济",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 10,
    "hot_rank_chg": -2,
    "stock_cnt": 5882,
    "price": "5.25",
    "change": "-8.06",
    "market_id": "17",
    "circulate_market_value": "10221304400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.17
      },
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "土地流转",
        "change_pct": -2.79
      },
      {
        "name": "农垦",
        "change_pct": -3.97
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.23
      },
      {
        "name": "食品",
        "change_pct": -2.32
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -2.79
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "000993",
    "name": "闽东电力",
    "hot_rank": 11,
    "hot_rank_chg": 11,
    "stock_cnt": 5882,
    "price": "12.62",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "5779347400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "清洁能源",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "水电",
        "change_pct": 1.92
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.7
      },
      {
        "name": "有色 · 钼",
        "change_pct": -1.22
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "有色金属",
        "change_pct": -1.34
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.24
      },
      {
        "name": "船舶",
        "change_pct": 1.31
      },
      {
        "name": "自贸区",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600318",
    "name": "新力金融",
    "hot_rank": 12,
    "hot_rank_chg": 52,
    "stock_cnt": 5882,
    "price": "8.09",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "4147966500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "多元金融",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.22
      },
      {
        "name": "金融科技",
        "change_pct": -0.89
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.04
      },
      {
        "name": "数字经济",
        "change_pct": -0.97
      },
      {
        "name": "供销社",
        "change_pct": -0.8
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 13,
    "hot_rank_chg": 1,
    "stock_cnt": 5882,
    "price": "4.46",
    "change": "2.29",
    "market_id": "33",
    "circulate_market_value": "8004888500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": -1.48
      },
      {
        "name": "调味品",
        "change_pct": -2.27
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.89
      },
      {
        "name": "白糖",
        "change_pct": -5.59
      },
      {
        "name": "食品",
        "change_pct": -2.32
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -2.79
      },
      {
        "name": "物业管理",
        "change_pct": -1.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "饮料",
        "change_pct": -2.04
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 15,
    "hot_rank_chg": 5,
    "stock_cnt": 5882,
    "price": "7.00",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "14217870000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "火电",
        "change_pct": 0.82
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "储能",
        "change_pct": -1.03
      },
      {
        "name": "碳中和",
        "change_pct": -0.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 20,
    "hot_rank_chg": -7,
    "stock_cnt": 5882,
    "price": "8.27",
    "change": "2.61",
    "market_id": "33",
    "circulate_market_value": "15837815000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.7
      },
      {
        "name": "林业",
        "change_pct": -0.72
      },
      {
        "name": "碳中和",
        "change_pct": -0.06
      },
      {
        "name": "自贸区",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 22,
    "hot_rank_chg": 8,
    "stock_cnt": 5882,
    "price": "5.41",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "6004686700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "焦炭主业",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.05
      },
      {
        "name": "甲醇",
        "change_pct": -2.86
      },
      {
        "name": "煤化工",
        "change_pct": -1.9
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 23,
    "hot_rank_chg": 3,
    "stock_cnt": 5882,
    "price": "9.96",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "11377716100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "石英纤维",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 0.12
      },
      {
        "name": "核电",
        "change_pct": -0.77
      },
      {
        "name": "大飞机",
        "change_pct": -1.1
      },
      {
        "name": "大气治理",
        "change_pct": -0.67
      },
      {
        "name": "玻纤",
        "change_pct": 4.4
      },
      {
        "name": "环保",
        "change_pct": -0.94
      },
      {
        "name": "核污染防治",
        "change_pct": -1.06
      },
      {
        "name": "航天",
        "change_pct": -0.84
      },
      {
        "name": "生物安全",
        "change_pct": -0.79
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 24,
    "hot_rank_chg": 5,
    "stock_cnt": 5882,
    "price": "7.13",
    "change": "-6.55",
    "market_id": "17",
    "circulate_market_value": "17956975000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.17
      },
      {
        "name": "工业大麻",
        "change_pct": -1.2
      },
      {
        "name": "中药",
        "change_pct": -2.01
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "保健品",
        "change_pct": -2.19
      },
      {
        "name": "民营医院",
        "change_pct": -1.83
      },
      {
        "name": "医药",
        "change_pct": -2.04
      },
      {
        "name": "化学原料药",
        "change_pct": -1.91
      },
      {
        "name": "流感",
        "change_pct": -1.97
      },
      {
        "name": "振兴东北",
        "change_pct": -0.33
      },
      {
        "name": "食品",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "600359",
    "name": "新农开发",
    "hot_rank": 25,
    "hot_rank_chg": 28,
    "stock_cnt": 5882,
    "price": "9.64",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "3677783600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "棉花种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.51
      },
      {
        "name": "农垦",
        "change_pct": -3.97
      },
      {
        "name": "棉花",
        "change_pct": -1.83
      },
      {
        "name": "新疆概念",
        "change_pct": -1.66
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.53
      }
    ]
  },
  {
    "code": "002600",
    "name": "领益智造",
    "hot_rank": 26,
    "hot_rank_chg": 23,
    "stock_cnt": 5882,
    "price": "12.84",
    "change": "3.21",
    "market_id": "33",
    "circulate_market_value": "92448009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.69
      },
      {
        "name": "手机产业链",
        "change_pct": -1.26
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.47
      },
      {
        "name": "无线充电",
        "change_pct": -1.44
      },
      {
        "name": "稀土磁材",
        "change_pct": -1.55
      },
      {
        "name": "5G",
        "change_pct": -0.89
      },
      {
        "name": "VR&AR",
        "change_pct": -1.43
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "机器人",
        "change_pct": -1.61
      },
      {
        "name": "小米概念股",
        "change_pct": -1.48
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.05
      },
      {
        "name": "激光雷达",
        "change_pct": -0.9
      },
      {
        "name": "减速器",
        "change_pct": -2.38
      },
      {
        "name": "无线耳机",
        "change_pct": -1.19
      },
      {
        "name": "氮化镓",
        "change_pct": -1.05
      },
      {
        "name": "AI PC",
        "change_pct": -1.34
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "回购",
        "change_pct": -1.21
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.46
      },
      {
        "name": "人形机器人",
        "change_pct": -2.01
      },
      {
        "name": "AI手机",
        "change_pct": -1.29
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.2
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 27,
    "hot_rank_chg": 1,
    "stock_cnt": 5882,
    "price": "6.02",
    "change": "3.26",
    "market_id": "17",
    "circulate_market_value": "74624456000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "核电",
        "change_pct": -0.77
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "水电",
        "change_pct": 1.92
      },
      {
        "name": "火电",
        "change_pct": 0.82
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "算电协同",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 30,
    "hot_rank_chg": -13,
    "stock_cnt": 5882,
    "price": "11.45",
    "change": "4.28",
    "market_id": "17",
    "circulate_market_value": "6043333800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "棉花",
        "change_pct": -1.83
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "供销社",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 31,
    "hot_rank_chg": 16,
    "stock_cnt": 5882,
    "price": "5.90",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "6442131400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "甾体激素",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": -2.04
      },
      {
        "name": "化学原料药",
        "change_pct": -1.91
      },
      {
        "name": "数字经济",
        "change_pct": -0.97
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.17
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.53
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 37,
    "hot_rank_chg": -4,
    "stock_cnt": 5882,
    "price": "10.30",
    "change": "2.90",
    "market_id": "33",
    "circulate_market_value": "7570560000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -1.35
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "炭黑",
        "change_pct": -1.91
      },
      {
        "name": "固态电池",
        "change_pct": -1.2
      },
      {
        "name": "PVDF概念",
        "change_pct": -0.88
      },
      {
        "name": "碳基材料",
        "change_pct": -1.27
      },
      {
        "name": "超级电容",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "000930",
    "name": "中粮科技",
    "hot_rank": 39,
    "hot_rank_chg": -1,
    "stock_cnt": 5882,
    "price": "6.50",
    "change": "1.40",
    "market_id": "33",
    "circulate_market_value": "12065969300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "饲料",
        "change_pct": -2.86
      },
      {
        "name": "白酒",
        "change_pct": -2.61
      },
      {
        "name": "燃料乙醇",
        "change_pct": 1.14
      },
      {
        "name": "食品",
        "change_pct": -2.32
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": -2.79
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.44
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.53
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 40,
    "hot_rank_chg": -13,
    "stock_cnt": 5882,
    "price": "6.31",
    "change": "4.99",
    "market_id": "33",
    "circulate_market_value": "6249381400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "旅游",
        "change_pct": -0.29
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.43
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "600192",
    "name": "长城电工",
    "hot_rank": 42,
    "hot_rank_chg": 25,
    "stock_cnt": 5882,
    "price": "8.68",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3834372600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "输变电设备",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -0.77
      },
      {
        "name": "充电桩",
        "change_pct": -1.0
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.2
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "苹果期货",
        "change_pct": -3.29
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "智能电网",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 46,
    "hot_rank_chg": 13,
    "stock_cnt": 5882,
    "price": "10.35",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4751384100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "氦气",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": -1.13
      },
      {
        "name": "电子特气",
        "change_pct": -0.43
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "天然气",
        "change_pct": -0.65
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "氦气",
        "change_pct": 0.46
      }
    ]
  },
  {
    "code": "002201",
    "name": "九鼎新材",
    "hot_rank": 47,
    "hot_rank_chg": 11,
    "stock_cnt": 5882,
    "price": "10.08",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "6068396100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "特种玻纤",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -1.13
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "玻纤",
        "change_pct": 4.4
      },
      {
        "name": "航天",
        "change_pct": -0.84
      }
    ]
  },
  {
    "code": "002377",
    "name": "国创高新",
    "hot_rank": 48,
    "hot_rank_chg": 43,
    "stock_cnt": 5882,
    "price": "3.47",
    "change": "10.16",
    "market_id": "33",
    "circulate_market_value": "3027394300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "改性沥青",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.12
      },
      {
        "name": "石油化工",
        "change_pct": -1.68
      }
    ]
  },
  {
    "code": "600712",
    "name": "南宁百货",
    "hot_rank": 50,
    "hot_rank_chg": 53,
    "stock_cnt": 5882,
    "price": "6.83",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "3678968400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.17
      },
      {
        "name": "新零售",
        "change_pct": -1.88
      },
      {
        "name": "职业教育",
        "change_pct": -1.22
      },
      {
        "name": "免税店概念",
        "change_pct": -1.17
      },
      {
        "name": "地摊经济",
        "change_pct": -1.58
      },
      {
        "name": "广西概念",
        "change_pct": -0.78
      }
    ]
  },
  {
    "code": "002470",
    "name": "金正大",
    "hot_rank": 52,
    "hot_rank_chg": -7,
    "stock_cnt": 5882,
    "price": "2.51",
    "change": "-9.71",
    "market_id": "33",
    "circulate_market_value": "8247221600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": -2.64
      },
      {
        "name": "锂电池",
        "change_pct": -1.35
      },
      {
        "name": "化肥",
        "change_pct": -3.49
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "低价股",
        "change_pct": -0.62
      },
      {
        "name": "数字乡村",
        "change_pct": -1.51
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.0
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 54,
    "hot_rank_chg": -6,
    "stock_cnt": 5882,
    "price": "7.78",
    "change": "4.01",
    "market_id": "17",
    "circulate_market_value": "18600520000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.05
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 55,
    "hot_rank_chg": 15,
    "stock_cnt": 5882,
    "price": "10.12",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5852606700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电力",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "水电",
        "change_pct": 1.92
      },
      {
        "name": "天然气",
        "change_pct": -0.65
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "000565",
    "name": "渝三峡A",
    "hot_rank": 56,
    "hot_rank_chg": 41,
    "stock_cnt": 5882,
    "price": "7.91",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "3429714500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "辐射制冷",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.48
      },
      {
        "name": "重庆国企改革",
        "change_pct": 0.03
      },
      {
        "name": "成渝城市群",
        "change_pct": 0.02
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "601949",
    "name": "中国出版",
    "hot_rank": 57,
    "hot_rank_chg": -5,
    "stock_cnt": 5882,
    "price": "6.95",
    "change": "4.04",
    "market_id": "17",
    "circulate_market_value": "13232578000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "中字头",
        "change_pct": -0.34
      },
      {
        "name": "数字经济",
        "change_pct": -0.97
      },
      {
        "name": "知识产权",
        "change_pct": -0.74
      },
      {
        "name": "传媒",
        "change_pct": -1.39
      },
      {
        "name": "NFT",
        "change_pct": -1.63
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "知识付费",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "000532",
    "name": "华金资本",
    "hot_rank": 58,
    "hot_rank_chg": 125,
    "stock_cnt": 5882,
    "price": "12.43",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4270323300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创投",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.12
      },
      {
        "name": "锂电池",
        "change_pct": -1.35
      },
      {
        "name": "污水处理",
        "change_pct": -1.01
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.89
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "环保",
        "change_pct": -0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.25
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.3
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 61,
    "hot_rank_chg": -7,
    "stock_cnt": 5882,
    "price": "7.34",
    "change": "-9.94",
    "market_id": "17",
    "circulate_market_value": "31411000000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "橡胶",
        "change_pct": -3.72
      },
      {
        "name": "土地流转",
        "change_pct": -2.79
      },
      {
        "name": "农垦",
        "change_pct": -3.97
      },
      {
        "name": "海南概念",
        "change_pct": -1.49
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.08
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -1.35
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "可降解塑料",
        "change_pct": -1.44
      },
      {
        "name": "大消费",
        "change_pct": -1.76
      },
      {
        "name": "免税店概念",
        "change_pct": -1.17
      },
      {
        "name": "自贸区",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 62,
    "hot_rank_chg": 49,
    "stock_cnt": 5882,
    "price": "5.18",
    "change": "7.92",
    "market_id": "17",
    "circulate_market_value": "8887483300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": -2.37
      },
      {
        "name": "雄安新区",
        "change_pct": -0.39
      },
      {
        "name": "医药",
        "change_pct": -2.04
      },
      {
        "name": "疫苗",
        "change_pct": -2.24
      },
      {
        "name": "化学原料药",
        "change_pct": -1.91
      },
      {
        "name": "流感",
        "change_pct": -1.97
      },
      {
        "name": "肝素",
        "change_pct": -1.06
      },
      {
        "name": "眼科",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 63,
    "hot_rank_chg": -23,
    "stock_cnt": 5882,
    "price": "5.58",
    "change": "-2.10",
    "market_id": "17",
    "circulate_market_value": "6798739200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.87
      },
      {
        "name": "煤炭",
        "change_pct": -1.05
      },
      {
        "name": "有色金属",
        "change_pct": -1.34
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 64,
    "hot_rank_chg": -1,
    "stock_cnt": 5882,
    "price": "12.45",
    "change": "2.89",
    "market_id": "33",
    "circulate_market_value": "11619854000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.51
      },
      {
        "name": "新疆概念",
        "change_pct": -1.66
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "储能",
        "change_pct": -1.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "603123",
    "name": "翠微股份",
    "hot_rank": 65,
    "hot_rank_chg": 25,
    "stock_cnt": 5882,
    "price": "11.47",
    "change": "3.80",
    "market_id": "17",
    "circulate_market_value": "7481605100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.95
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.95
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.37
      },
      {
        "name": "新零售",
        "change_pct": -1.88
      },
      {
        "name": "移动支付",
        "change_pct": -1.23
      },
      {
        "name": "京津冀",
        "change_pct": -1.06
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.29
      },
      {
        "name": "国产芯片",
        "change_pct": -0.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.16
      },
      {
        "name": "物业管理",
        "change_pct": -1.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "数字人民币",
        "change_pct": -1.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.07
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 67,
    "hot_rank_chg": -7,
    "stock_cnt": 5882,
    "price": "5.46",
    "change": "-1.62",
    "market_id": "33",
    "circulate_market_value": "193104550000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.69
      },
      {
        "name": "手机产业链",
        "change_pct": -1.26
      },
      {
        "name": "超高清视频",
        "change_pct": -1.13
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.47
      },
      {
        "name": "电竞",
        "change_pct": -0.77
      },
      {
        "name": "半导体",
        "change_pct": -0.92
      },
      {
        "name": "人工智能",
        "change_pct": -1.14
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.97
      },
      {
        "name": "VR&AR",
        "change_pct": -1.43
      },
      {
        "name": "OLED",
        "change_pct": -0.9
      },
      {
        "name": "京津冀",
        "change_pct": -1.06
      },
      {
        "name": "物联网",
        "change_pct": -1.12
      },
      {
        "name": "指纹识别",
        "change_pct": -0.86
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.91
      },
      {
        "name": "白马股",
        "change_pct": -0.9
      },
      {
        "name": "智能制造",
        "change_pct": -1.45
      },
      {
        "name": "小米概念股",
        "change_pct": -1.48
      },
      {
        "name": "国产芯片",
        "change_pct": -0.84
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.76
      },
      {
        "name": "全息概念",
        "change_pct": -1.0
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.73
      },
      {
        "name": "MicroLED",
        "change_pct": -1.34
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.63
      },
      {
        "name": "智能手表",
        "change_pct": -1.84
      },
      {
        "name": "MiniLED",
        "change_pct": -1.01
      },
      {
        "name": "传感器",
        "change_pct": -1.35
      },
      {
        "name": "大硅片",
        "change_pct": -0.85
      },
      {
        "name": "AI PC",
        "change_pct": -1.34
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "回购",
        "change_pct": -1.21
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.46
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "600479",
    "name": "千金药业",
    "hot_rank": 70,
    "hot_rank_chg": 8,
    "stock_cnt": 5882,
    "price": "12.71",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "5319225500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.31
      },
      {
        "name": "中药",
        "change_pct": -2.01
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.84
      },
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "人工智能",
        "change_pct": -1.14
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.74
      },
      {
        "name": "医药",
        "change_pct": -2.04
      },
      {
        "name": "流感",
        "change_pct": -1.97
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "001896",
    "name": "豫能控股",
    "hot_rank": 73,
    "hot_rank_chg": 8,
    "stock_cnt": 5882,
    "price": "12.43",
    "change": "5.70",
    "market_id": "33",
    "circulate_market_value": "18965462000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -1.14
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "充电桩",
        "change_pct": -1.0
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.15
      },
      {
        "name": "火电",
        "change_pct": 0.82
      },
      {
        "name": "光伏",
        "change_pct": -0.58
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "地热",
        "change_pct": -0.68
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.45
      },
      {
        "name": "储能",
        "change_pct": -1.03
      },
      {
        "name": "碳中和",
        "change_pct": -0.06
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "002204",
    "name": "大连重工",
    "hot_rank": 74,
    "hot_rank_chg": 39,
    "stock_cnt": 5882,
    "price": "5.89",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "11375769500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "港口机械",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -1.37
      },
      {
        "name": "核电",
        "change_pct": -0.77
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "海工装备",
        "change_pct": 0.32
      },
      {
        "name": "机械",
        "change_pct": -1.07
      },
      {
        "name": "信托",
        "change_pct": 0.72
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "军工",
        "change_pct": -0.93
      },
      {
        "name": "机器人",
        "change_pct": -1.61
      },
      {
        "name": "智能制造",
        "change_pct": -1.45
      },
      {
        "name": "振兴东北",
        "change_pct": -0.33
      },
      {
        "name": "大金融",
        "change_pct": 1.14
      },
      {
        "name": "工业母机",
        "change_pct": -1.93
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.46
      },
      {
        "name": "航天",
        "change_pct": -0.84
      },
      {
        "name": "海洋经济",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "002790",
    "name": "瑞尔特",
    "hot_rank": 77,
    "hot_rank_chg": 59,
    "stock_cnt": 5882,
    "price": "8.46",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "2205500900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "智能卫浴",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": -1.08
      },
      {
        "name": "家电",
        "change_pct": -0.69
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "000798",
    "name": "中水渔业",
    "hot_rank": 82,
    "hot_rank_chg": 4,
    "stock_cnt": 5882,
    "price": "11.52",
    "change": "-9.08",
    "market_id": "33",
    "circulate_market_value": "4214433200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "人工智能",
        "change_pct": -1.14
      },
      {
        "name": "社区团购",
        "change_pct": -2.5
      },
      {
        "name": "预制菜",
        "change_pct": -2.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "水产养殖",
        "change_pct": -4.29
      },
      {
        "name": "海洋经济",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 83,
    "hot_rank_chg": -3,
    "stock_cnt": 5882,
    "price": "2.93",
    "change": "-6.09",
    "market_id": "33",
    "circulate_market_value": "6864076200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.88
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "人工智能",
        "change_pct": -1.14
      },
      {
        "name": "VR&AR",
        "change_pct": -1.43
      },
      {
        "name": "京津冀",
        "change_pct": -1.06
      },
      {
        "name": "装修装饰",
        "change_pct": -1.0
      },
      {
        "name": "住房租赁",
        "change_pct": -0.59
      },
      {
        "name": "破净股",
        "change_pct": -0.44
      },
      {
        "name": "数字经济",
        "change_pct": -0.97
      },
      {
        "name": "房产经纪",
        "change_pct": -2.56
      },
      {
        "name": "物业管理",
        "change_pct": -1.08
      },
      {
        "name": "低价股",
        "change_pct": -0.62
      },
      {
        "name": "华为产业链",
        "change_pct": -1.07
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.07
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 84,
    "hot_rank_chg": -18,
    "stock_cnt": 5882,
    "price": "11.40",
    "change": "-1.30",
    "market_id": "17",
    "circulate_market_value": "4383843000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -2.17
      },
      {
        "name": "股权转让",
        "change_pct": -1.13
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "新疆概念",
        "change_pct": -1.66
      },
      {
        "name": "医药",
        "change_pct": -2.04
      },
      {
        "name": "流感",
        "change_pct": -1.97
      },
      {
        "name": "国资入股",
        "change_pct": -1.1
      },
      {
        "name": "减肥药",
        "change_pct": -2.27
      }
    ]
  },
  {
    "code": "002040",
    "name": "南京港",
    "hot_rank": 85,
    "hot_rank_chg": 3,
    "stock_cnt": 5882,
    "price": "10.26",
    "change": "2.81",
    "market_id": "33",
    "circulate_market_value": "4987134100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "港口",
        "change_pct": 0.2
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.76
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      },
      {
        "name": "江苏自贸区",
        "change_pct": -0.64
      },
      {
        "name": "自贸区",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 86,
    "hot_rank_chg": -2,
    "stock_cnt": 5882,
    "price": "5.82",
    "change": "5.82",
    "market_id": "17",
    "circulate_market_value": "43506457000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.05
      },
      {
        "name": "央企改革",
        "change_pct": -0.55
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.21
      },
      {
        "name": "火电",
        "change_pct": 0.82
      },
      {
        "name": "振兴东北",
        "change_pct": -0.33
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 88,
    "hot_rank_chg": -1,
    "stock_cnt": 5882,
    "price": "6.56",
    "change": "-9.02",
    "market_id": "17",
    "circulate_market_value": "3813832900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -4.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.51
      },
      {
        "name": "农垦",
        "change_pct": -3.97
      },
      {
        "name": "棉花",
        "change_pct": -1.83
      },
      {
        "name": "新疆概念",
        "change_pct": -1.66
      },
      {
        "name": "风电",
        "change_pct": -0.22
      },
      {
        "name": "大农业",
        "change_pct": -2.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.8
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 91,
    "hot_rank_chg": 80,
    "stock_cnt": 5882,
    "price": "10.64",
    "change": "-3.80",
    "market_id": "33",
    "circulate_market_value": "6205360700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -1.94
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "天然气",
        "change_pct": -0.65
      },
      {
        "name": "油气改革",
        "change_pct": -1.24
      },
      {
        "name": "页岩气",
        "change_pct": -1.59
      },
      {
        "name": "深地经济",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 92,
    "hot_rank_chg": -10,
    "stock_cnt": 5882,
    "price": "5.02",
    "change": "-3.09",
    "market_id": "33",
    "circulate_market_value": "13315803900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.79
      },
      {
        "name": "装修装饰",
        "change_pct": -1.0
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.73
      },
      {
        "name": "破净股",
        "change_pct": -0.44
      },
      {
        "name": "航天",
        "change_pct": -0.84
      },
      {
        "name": "旧改",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 100,
    "hot_rank_chg": -39,
    "stock_cnt": 5882,
    "price": "11.79",
    "change": "-2.00",
    "market_id": "17",
    "circulate_market_value": "21093940000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -2.27
      },
      {
        "name": "纯碱",
        "change_pct": -1.95
      },
      {
        "name": "食品",
        "change_pct": -2.32
      },
      {
        "name": "土壤修复",
        "change_pct": -1.2
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.02
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.0
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.3
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600869", "name": "远东股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5882, "price": "24.10", "change": "-3.33", "market_id": "17", "circulate_market_value": "53486401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5882, "price": "8.69", "change": "2.60", "market_id": "33", "circulate_market_value": "5698085400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.17}, {"name": "新零售", "change_pct": -1.88}, {"name": "农业种植", "change_pct": -4.16}, {"name": "冷链", "change_pct": -1.16}, {"name": "大农业", "change_pct": -2.71}, {"name": "预制菜", "change_pct": -2.46}, {"name": "国企改革", "change_pct": -0.8}, {"name": "可降解塑料", "change_pct": -1.44}, {"name": "免税店概念", "change_pct": -1.17}, {"name": "湖北国企改革", "change_pct": -0.82}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 3, "hot_rank_chg": 4, "stock_cnt": 5882, "price": "15.11", "change": "1.55", "market_id": "17", "circulate_market_value": "10063260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "19.98", "change": "10.02", "market_id": "17", "circulate_market_value": "41789013000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "SK海力士"}, {"code": "600396", "name": "华电辽能", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "15.51", "change": "5.15", "market_id": "17", "circulate_market_value": "22841683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "14.00", "change": "-2.30", "market_id": "17", "circulate_market_value": "8984965100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5882, "price": "498.55", "change": "-2.99", "market_id": "17", "circulate_market_value": "15000233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5882, "price": "76.45", "change": "10.00", "market_id": "33", "circulate_market_value": "55444335000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "000978", "name": "桂林旅游", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5882, "price": "9.69", "change": "9.99", "market_id": "33", "circulate_market_value": "4536097900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "AI文旅", "xgb_concepts": [{"name": "旅游", "change_pct": -0.29}, {"name": "腾讯概念股", "change_pct": -1.16}, {"name": "广西概念", "change_pct": -0.78}, {"name": "低空经济", "change_pct": -1.11}]}, {"code": "600108", "name": "亚盛集团", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5882, "price": "5.25", "change": "-8.06", "market_id": "17", "circulate_market_value": "10221304400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.17}, {"name": "农业种植", "change_pct": -4.16}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "土地流转", "change_pct": -2.79}, {"name": "农垦", "change_pct": -3.97}, {"name": "乡村振兴", "change_pct": -2.23}, {"name": "食品", "change_pct": -2.32}, {"name": "甜味剂/代糖", "change_pct": -2.79}, {"name": "大农业", "change_pct": -2.71}, {"name": "蜜雪冰城概念股", "change_pct": -2.37}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5882, "price": "12.62", "change": "10.03", "market_id": "33", "circulate_market_value": "5779347400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "清洁能源", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.21}, {"name": "水电", "change_pct": 1.92}, {"name": "福建自贸/海西概念", "change_pct": -0.7}, {"name": "有色 · 钼", "change_pct": -1.22}, {"name": "光伏", "change_pct": -0.58}, {"name": "风电", "change_pct": -0.22}, {"name": "有色金属", "change_pct": -1.34}, {"name": "宁德时代概念股", "change_pct": -1.24}, {"name": "船舶", "change_pct": 1.31}, {"name": "自贸区", "change_pct": -0.67}]}, {"code": "600318", "name": "新力金融", "hot_rank": 12, "hot_rank_chg": 52, "stock_cnt": 5882, "price": "8.09", "change": "10.07", "market_id": "17", "circulate_market_value": "4147966500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "多元金融", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.22}, {"name": "金融科技", "change_pct": -0.89}, {"name": "安徽国企改革", "change_pct": -1.04}, {"name": "数字经济", "change_pct": -0.97}, {"name": "供销社", "change_pct": -0.8}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "000523", "name": "红棉股份", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5882, "price": "4.46", "change": "2.29", "market_id": "33", "circulate_market_value": "8004888500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": -1.48}, {"name": "调味品", "change_pct": -2.27}, {"name": "粤港澳大湾区", "change_pct": -0.89}, {"name": "白糖", "change_pct": -5.59}, {"name": "食品", "change_pct": -2.32}, {"name": "甜味剂/代糖", "change_pct": -2.79}, {"name": "物业管理", "change_pct": -1.08}, {"name": "国企改革", "change_pct": -0.8}, {"name": "饮料", "change_pct": -2.04}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5882, "price": "234.43", "change": "7.05", "market_id": "17", "circulate_market_value": "64606182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5882, "price": "7.00", "change": "10.06", "market_id": "17", "circulate_market_value": "14217870000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电力", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "电力体制改革", "change_pct": 1.21}, {"name": "火电", "change_pct": 0.82}, {"name": "风电", "change_pct": -0.22}, {"name": "储能", "change_pct": -1.03}, {"name": "碳中和", "change_pct": -0.06}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5882, "price": "18.31", "change": "-8.45", "market_id": "17", "circulate_market_value": "12456653300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 17, "hot_rank_chg": -5, "stock_cnt": 5882, "price": "15.36", "change": "-9.27", "market_id": "17", "circulate_market_value": "19726519000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 18, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "17.82", "change": "-10.00", "market_id": "17", "circulate_market_value": "38114275000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 19, "hot_rank_chg": 0, "stock_cnt": 5882, "price": "18.70", "change": "10.00", "market_id": "33", "circulate_market_value": "11125231500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "000592", "name": "平潭发展", "hot_rank": 20, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "8.27", "change": "2.61", "market_id": "33", "circulate_market_value": "15837815000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.7}, {"name": "林业", "change_pct": -0.72}, {"name": "碳中和", "change_pct": -0.06}, {"name": "自贸区", "change_pct": -0.67}]}, {"code": "600865", "name": "百大集团", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5882, "price": "14.65", "change": "-3.04", "market_id": "17", "circulate_market_value": "5511920600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5882, "price": "5.41", "change": "9.96", "market_id": "17", "circulate_market_value": "6004686700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "焦炭主业", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.05}, {"name": "甲醇", "change_pct": -2.86}, {"name": "煤化工", "change_pct": -1.9}]}, {"code": "603601", "name": "再升科技", "hot_rank": 23, "hot_rank_chg": 3, "stock_cnt": 5882, "price": "9.96", "change": "10.05", "market_id": "17", "circulate_market_value": "11377716100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "石英纤维", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 0.12}, {"name": "核电", "change_pct": -0.77}, {"name": "大飞机", "change_pct": -1.1}, {"name": "大气治理", "change_pct": -0.67}, {"name": "玻纤", "change_pct": 4.4}, {"name": "环保", "change_pct": -0.94}, {"name": "核污染防治", "change_pct": -1.06}, {"name": "航天", "change_pct": -0.84}, {"name": "生物安全", "change_pct": -0.79}, {"name": "中芯国际概念股", "change_pct": 0.09}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 24, "hot_rank_chg": 5, "stock_cnt": 5882, "price": "7.13", "change": "-6.55", "market_id": "17", "circulate_market_value": "17956975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.17}, {"name": "工业大麻", "change_pct": -1.2}, {"name": "中药", "change_pct": -2.01}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "保健品", "change_pct": -2.19}, {"name": "民营医院", "change_pct": -1.83}, {"name": "医药", "change_pct": -2.04}, {"name": "化学原料药", "change_pct": -1.91}, {"name": "流感", "change_pct": -1.97}, {"name": "振兴东北", "change_pct": -0.33}, {"name": "食品", "change_pct": -2.32}]}, {"code": "600359", "name": "新农开发", "hot_rank": 25, "hot_rank_chg": 28, "stock_cnt": 5882, "price": "9.64", "change": "10.05", "market_id": "17", "circulate_market_value": "3677783600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "棉花种业", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.16}, {"name": "新疆国企改革", "change_pct": -1.51}, {"name": "农垦", "change_pct": -3.97}, {"name": "棉花", "change_pct": -1.83}, {"name": "新疆概念", "change_pct": -1.66}, {"name": "大农业", "change_pct": -2.71}, {"name": "国企改革", "change_pct": -0.8}, {"name": "新冠病毒防治", "change_pct": -1.53}]}, {"code": "002600", "name": "领益智造", "hot_rank": 26, "hot_rank_chg": 23, "stock_cnt": 5882, "price": "12.84", "change": "3.21", "market_id": "33", "circulate_market_value": "92448009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.69}, {"name": "手机产业链", "change_pct": -1.26}, {"name": "苹果产业链", "change_pct": -1.47}, {"name": "无线充电", "change_pct": -1.44}, {"name": "稀土磁材", "change_pct": -1.55}, {"name": "5G", "change_pct": -0.89}, {"name": "VR&AR", "change_pct": -1.43}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "机器人", "change_pct": -1.61}, {"name": "小米概念股", "change_pct": -1.48}, {"name": "第三代半导体", "change_pct": -1.05}, {"name": "激光雷达", "change_pct": -0.9}, {"name": "减速器", "change_pct": -2.38}, {"name": "无线耳机", "change_pct": -1.19}, {"name": "氮化镓", "change_pct": -1.05}, {"name": "AI PC", "change_pct": -1.34}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "回购", "change_pct": -1.21}, {"name": "智能眼镜/MR头显", "change_pct": -1.46}, {"name": "人形机器人", "change_pct": -2.01}, {"name": "AI手机", "change_pct": -1.29}, {"name": "液冷服务器", "change_pct": -2.2}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5882, "price": "6.02", "change": "3.26", "market_id": "17", "circulate_market_value": "74624456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "核电", "change_pct": -0.77}, {"name": "电力体制改革", "change_pct": 1.21}, {"name": "水电", "change_pct": 1.92}, {"name": "火电", "change_pct": 0.82}, {"name": "光伏", "change_pct": -0.58}, {"name": "风电", "change_pct": -0.22}, {"name": "国企改革", "change_pct": -0.8}, {"name": "算电协同", "change_pct": -0.02}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 28, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "39.30", "change": "-5.48", "market_id": "17", "circulate_market_value": "27171062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 29, "hot_rank_chg": 2, "stock_cnt": 5882, "price": "18.90", "change": "-10.00", "market_id": "33", "circulate_market_value": "8634469900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5882, "price": "11.45", "change": "4.28", "market_id": "17", "circulate_market_value": "6043333800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.16}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "棉花", "change_pct": -1.83}, {"name": "大农业", "change_pct": -2.71}, {"name": "供销社", "change_pct": -0.8}]}, {"code": "600488", "name": "津药药业", "hot_rank": 31, "hot_rank_chg": 16, "stock_cnt": 5882, "price": "5.90", "change": "10.07", "market_id": "17", "circulate_market_value": "6442131400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甾体激素", "xgb_concepts": [{"name": "医药", "change_pct": -2.04}, {"name": "化学原料药", "change_pct": -1.91}, {"name": "数字经济", "change_pct": -0.97}, {"name": "辅助生殖", "change_pct": -1.17}, {"name": "新冠病毒防治", "change_pct": -1.53}]}, {"code": "000636", "name": "风华高科", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "50.90", "change": "2.42", "market_id": "33", "circulate_market_value": "58407239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 33, "hot_rank_chg": -10, "stock_cnt": 5882, "price": "43.46", "change": "1.85", "market_id": "17", "circulate_market_value": "172605170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5882, "price": "63.91", "change": "-4.07", "market_id": "17", "circulate_market_value": "156812530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 35, "hot_rank_chg": -3, "stock_cnt": 5882, "price": "36.50", "change": "4.32", "market_id": "33", "circulate_market_value": "57837417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 36, "hot_rank_chg": 14, "stock_cnt": 5882, "price": "890.10", "change": "-2.07", "market_id": "33", "circulate_market_value": "987954930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002068", "name": "黑猫股份", "hot_rank": 37, "hot_rank_chg": -4, "stock_cnt": 5882, "price": "10.30", "change": "2.90", "market_id": "33", "circulate_market_value": "7570560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -1.35}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "炭黑", "change_pct": -1.91}, {"name": "固态电池", "change_pct": -1.2}, {"name": "PVDF概念", "change_pct": -0.88}, {"name": "碳基材料", "change_pct": -1.27}, {"name": "超级电容", "change_pct": -0.97}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 38, "hot_rank_chg": 4, "stock_cnt": 5882, "price": "17.18", "change": "4.57", "market_id": "33", "circulate_market_value": "27888717000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000930", "name": "中粮科技", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "6.50", "change": "1.40", "market_id": "33", "circulate_market_value": "12065969300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "饲料", "change_pct": -2.86}, {"name": "白酒", "change_pct": -2.61}, {"name": "燃料乙醇", "change_pct": 1.14}, {"name": "食品", "change_pct": -2.32}, {"name": "甜味剂/代糖", "change_pct": -2.79}, {"name": "大农业", "change_pct": -2.71}, {"name": "国企改革", "change_pct": -0.8}, {"name": "可降解塑料", "change_pct": -1.44}, {"name": "新冠病毒防治", "change_pct": -1.53}, {"name": "蜜雪冰城概念股", "change_pct": -2.37}]}, {"code": "002059", "name": "云南旅游", "hot_rank": 40, "hot_rank_chg": -13, "stock_cnt": 5882, "price": "6.31", "change": "4.99", "market_id": "33", "circulate_market_value": "6249381400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "旅游", "change_pct": -0.29}, {"name": "虚拟数字人", "change_pct": -1.43}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "600192", "name": "长城电工", "hot_rank": 42, "hot_rank_chg": 25, "stock_cnt": 5882, "price": "8.68", "change": "10.01", "market_id": "17", "circulate_market_value": "3834372600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "输变电设备", "xgb_concepts": [{"name": "核电", "change_pct": -0.77}, {"name": "充电桩", "change_pct": -1.0}, {"name": "氢能源/燃料电池", "change_pct": -1.2}, {"name": "光伏", "change_pct": -0.58}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "苹果期货", "change_pct": -3.29}, {"name": "国企改革", "change_pct": -0.8}, {"name": "智能电网", "change_pct": -0.95}]}, {"code": "600150", "name": "中国船舶", "hot_rank": 43, "hot_rank_chg": -8, "stock_cnt": 5882, "price": "40.82", "change": "3.26", "market_id": "17", "circulate_market_value": "307195860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 45, "hot_rank_chg": -8, "stock_cnt": 5882, "price": "57.20", "change": "0.58", "market_id": "17", "circulate_market_value": "257573830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 46, "hot_rank_chg": 13, "stock_cnt": 5882, "price": "10.35", "change": "9.99", "market_id": "17", "circulate_market_value": "4751384100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氦气", "xgb_concepts": [{"name": "燃气轮机", "change_pct": -1.13}, {"name": "电子特气", "change_pct": -0.43}, {"name": "一带一路", "change_pct": -1.04}, {"name": "天然气", "change_pct": -0.65}, {"name": "山东国企改革", "change_pct": -1.22}, {"name": "国企改革", "change_pct": -0.8}, {"name": "氦气", "change_pct": 0.46}]}, {"code": "002201", "name": "九鼎新材", "hot_rank": 47, "hot_rank_chg": 11, "stock_cnt": 5882, "price": "10.08", "change": "10.04", "market_id": "33", "circulate_market_value": "6068396100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "特种玻纤", "xgb_concepts": [{"name": "股权转让", "change_pct": -1.13}, {"name": "风电", "change_pct": -0.22}, {"name": "玻纤", "change_pct": 4.4}, {"name": "航天", "change_pct": -0.84}]}, {"code": "002377", "name": "国创高新", "hot_rank": 48, "hot_rank_chg": 43, "stock_cnt": 5882, "price": "3.47", "change": "10.16", "market_id": "33", "circulate_market_value": "3027394300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "改性沥青", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.12}, {"name": "石油化工", "change_pct": -1.68}]}, {"code": "000722", "name": "湖南发展", "hot_rank": 49, "hot_rank_chg": 25, "stock_cnt": 5882, "price": "14.74", "change": "10.00", "market_id": "33", "circulate_market_value": "6841693100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "水力发电"}, {"code": "600712", "name": "南宁百货", "hot_rank": 50, "hot_rank_chg": 53, "stock_cnt": 5882, "price": "6.83", "change": "9.98", "market_id": "17", "circulate_market_value": "3678968400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百货零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.17}, {"name": "新零售", "change_pct": -1.88}, {"name": "职业教育", "change_pct": -1.22}, {"name": "免税店概念", "change_pct": -1.17}, {"name": "地摊经济", "change_pct": -1.58}, {"name": "广西概念", "change_pct": -0.78}]}, {"code": "603162", "name": "海通发展", "hot_rank": 51, "hot_rank_chg": -12, "stock_cnt": 5882, "price": "15.52", "change": "0.58", "market_id": "17", "circulate_market_value": "6556209400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002470", "name": "金正大", "hot_rank": 52, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "2.51", "change": "-9.71", "market_id": "33", "circulate_market_value": "8247221600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "磷化工", "change_pct": -2.64}, {"name": "锂电池", "change_pct": -1.35}, {"name": "化肥", "change_pct": -3.49}, {"name": "山东国企改革", "change_pct": -1.22}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "大农业", "change_pct": -2.71}, {"name": "低价股", "change_pct": -0.62}, {"name": "数字乡村", "change_pct": -1.51}, {"name": "国企改革", "change_pct": -0.8}, {"name": "磷酸铁锂", "change_pct": -1.0}]}, {"code": "603186", "name": "华正新材", "hot_rank": 53, "hot_rank_chg": -17, "stock_cnt": 5882, "price": "217.99", "change": "2.80", "market_id": "17", "circulate_market_value": "34178765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5882, "price": "7.78", "change": "4.01", "market_id": "17", "circulate_market_value": "18600520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.05}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "国企改革", "change_pct": -0.8}, {"name": "河南国企改革", "change_pct": 0.25}]}, {"code": "600644", "name": "乐山电力", "hot_rank": 55, "hot_rank_chg": 15, "stock_cnt": 5882, "price": "10.12", "change": "10.00", "market_id": "17", "circulate_market_value": "5852606700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电力", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.21}, {"name": "水电", "change_pct": 1.92}, {"name": "天然气", "change_pct": -0.65}, {"name": "光伏", "change_pct": -0.58}]}, {"code": "000565", "name": "渝三峡A", "hot_rank": 56, "hot_rank_chg": 41, "stock_cnt": 5882, "price": "7.91", "change": "10.01", "market_id": "33", "circulate_market_value": "3429714500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "辐射制冷", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.48}, {"name": "重庆国企改革", "change_pct": 0.03}, {"name": "成渝城市群", "change_pct": 0.02}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "601949", "name": "中国出版", "hot_rank": 57, "hot_rank_chg": -5, "stock_cnt": 5882, "price": "6.95", "change": "4.04", "market_id": "17", "circulate_market_value": "13232578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "中字头", "change_pct": -0.34}, {"name": "数字经济", "change_pct": -0.97}, {"name": "知识产权", "change_pct": -0.74}, {"name": "传媒", "change_pct": -1.39}, {"name": "NFT", "change_pct": -1.63}, {"name": "国企改革", "change_pct": -0.8}, {"name": "知识付费", "change_pct": -0.52}]}, {"code": "000532", "name": "华金资本", "hot_rank": 58, "hot_rank_chg": 125, "stock_cnt": 5882, "price": "12.43", "change": "10.00", "market_id": "33", "circulate_market_value": "4270323300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创投", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.12}, {"name": "锂电池", "change_pct": -1.35}, {"name": "污水处理", "change_pct": -1.01}, {"name": "粤港澳大湾区", "change_pct": -0.89}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "环保", "change_pct": -0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.25}, {"name": "DeepSeek概念股", "change_pct": -1.3}]}, {"code": "002579", "name": "中京电子", "hot_rank": 59, "hot_rank_chg": -18, "stock_cnt": 5882, "price": "16.73", "change": "-0.48", "market_id": "33", "circulate_market_value": "9760922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 60, "hot_rank_chg": -26, "stock_cnt": 5882, "price": "17.32", "change": "6.00", "market_id": "17", "circulate_market_value": "11320374600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 61, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "7.34", "change": "-9.94", "market_id": "17", "circulate_market_value": "31411000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.16}, {"name": "橡胶", "change_pct": -3.72}, {"name": "土地流转", "change_pct": -2.79}, {"name": "农垦", "change_pct": -3.97}, {"name": "海南概念", "change_pct": -1.49}, {"name": "自由贸易港", "change_pct": -1.08}, {"name": "海南自由贸易港", "change_pct": -1.35}, {"name": "大农业", "change_pct": -2.71}, {"name": "可降解塑料", "change_pct": -1.44}, {"name": "大消费", "change_pct": -1.76}, {"name": "免税店概念", "change_pct": -1.17}, {"name": "自贸区", "change_pct": -0.67}]}, {"code": "600812", "name": "华北制药", "hot_rank": 62, "hot_rank_chg": 49, "stock_cnt": 5882, "price": "5.18", "change": "7.92", "market_id": "17", "circulate_market_value": "8887483300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": -2.37}, {"name": "雄安新区", "change_pct": -0.39}, {"name": "医药", "change_pct": -2.04}, {"name": "疫苗", "change_pct": -2.24}, {"name": "化学原料药", "change_pct": -1.91}, {"name": "流感", "change_pct": -1.97}, {"name": "肝素", "change_pct": -1.06}, {"name": "眼科", "change_pct": -1.25}]}, {"code": "600121", "name": "郑州煤电", "hot_rank": 63, "hot_rank_chg": -23, "stock_cnt": 5882, "price": "5.58", "change": "-2.10", "market_id": "17", "circulate_market_value": "6798739200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.87}, {"name": "煤炭", "change_pct": -1.05}, {"name": "有色金属", "change_pct": -1.34}, {"name": "国企改革", "change_pct": -0.8}, {"name": "河南国企改革", "change_pct": 0.25}]}, {"code": "001258", "name": "立新能源", "hot_rank": 64, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "12.45", "change": "2.89", "market_id": "33", "circulate_market_value": "11619854000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.79}, {"name": "新疆国企改革", "change_pct": -1.51}, {"name": "新疆概念", "change_pct": -1.66}, {"name": "光伏", "change_pct": -0.58}, {"name": "风电", "change_pct": -0.22}, {"name": "储能", "change_pct": -1.03}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "603123", "name": "翠微股份", "hot_rank": 65, "hot_rank_chg": 25, "stock_cnt": 5882, "price": "11.47", "change": "3.80", "market_id": "17", "circulate_market_value": "7481605100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.95}, {"name": "蚂蚁集团概念股", "change_pct": -0.95}, {"name": "无人驾驶", "change_pct": -1.37}, {"name": "新零售", "change_pct": -1.88}, {"name": "移动支付", "change_pct": -1.23}, {"name": "京津冀", "change_pct": -1.06}, {"name": "北京城市规划", "change_pct": -0.29}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "阿里巴巴概念股", "change_pct": -1.14}, {"name": "腾讯概念股", "change_pct": -1.16}, {"name": "物业管理", "change_pct": -1.08}, {"name": "字节跳动概念股", "change_pct": -1.4}, {"name": "国企改革", "change_pct": -0.8}, {"name": "数字人民币", "change_pct": -1.04}, {"name": "AI大模型/智能体", "change_pct": -1.07}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 66, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "39.71", "change": "0.66", "market_id": "33", "circulate_market_value": "60276943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 67, "hot_rank_chg": -7, "stock_cnt": 5882, "price": "5.46", "change": "-1.62", "market_id": "33", "circulate_market_value": "193104550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.69}, {"name": "手机产业链", "change_pct": -1.26}, {"name": "超高清视频", "change_pct": -1.13}, {"name": "苹果产业链", "change_pct": -1.47}, {"name": "电竞", "change_pct": -0.77}, {"name": "半导体", "change_pct": -0.92}, {"name": "人工智能", "change_pct": -1.14}, {"name": "互联网医疗", "change_pct": -0.97}, {"name": "VR&AR", "change_pct": -1.43}, {"name": "OLED", "change_pct": -0.9}, {"name": "京津冀", "change_pct": -1.06}, {"name": "物联网", "change_pct": -1.12}, {"name": "指纹识别", "change_pct": -0.86}, {"name": "汽车零部件", "change_pct": -1.91}, {"name": "白马股", "change_pct": -0.9}, {"name": "智能制造", "change_pct": -1.45}, {"name": "小米概念股", "change_pct": -1.48}, {"name": "国产芯片", "change_pct": -0.84}, {"name": "液晶面板/LCD", "change_pct": -0.76}, {"name": "全息概念", "change_pct": -1.0}, {"name": "理想汽车概念股", "change_pct": -1.73}, {"name": "MicroLED", "change_pct": -1.34}, {"name": "钙钛矿电池", "change_pct": -0.63}, {"name": "智能手表", "change_pct": -1.84}, {"name": "MiniLED", "change_pct": -1.01}, {"name": "传感器", "change_pct": -1.35}, {"name": "大硅片", "change_pct": -0.85}, {"name": "AI PC", "change_pct": -1.34}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "回购", "change_pct": -1.21}, {"name": "光电共封装CPO", "change_pct": 0.17}, {"name": "智能眼镜/MR头显", "change_pct": -1.46}, {"name": "玻璃基板封装", "change_pct": -1.23}]}, {"code": "002384", "name": "东山精密", "hot_rank": 68, "hot_rank_chg": -24, "stock_cnt": 5882, "price": "193.74", "change": "-1.18", "market_id": "33", "circulate_market_value": "268585970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 69, "hot_rank_chg": -14, "stock_cnt": 5882, "price": "21.02", "change": "-5.40", "market_id": "33", "circulate_market_value": "24729374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 70, "hot_rank_chg": 8, "stock_cnt": 5882, "price": "12.71", "change": "-9.99", "market_id": "17", "circulate_market_value": "5319225500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.31}, {"name": "中药", "change_pct": -2.01}, {"name": "优化生育（三孩）", "change_pct": -1.84}, {"name": "农业种植", "change_pct": -4.16}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "人工智能", "change_pct": -1.14}, {"name": "湖南国企改革", "change_pct": -1.74}, {"name": "医药", "change_pct": -2.04}, {"name": "流感", "change_pct": -1.97}, {"name": "大农业", "change_pct": -2.71}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 71, "hot_rank_chg": -20, "stock_cnt": 5882, "price": "269.00", "change": "4.25", "market_id": "33", "circulate_market_value": "292776390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 72, "hot_rank_chg": -15, "stock_cnt": 5882, "price": "16.38", "change": "1.30", "market_id": "33", "circulate_market_value": "54480315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 73, "hot_rank_chg": 8, "stock_cnt": 5882, "price": "12.43", "change": "5.70", "market_id": "33", "circulate_market_value": "18965462000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -1.14}, {"name": "电力体制改革", "change_pct": 1.21}, {"name": "充电桩", "change_pct": -1.0}, {"name": "云计算数据中心", "change_pct": -1.15}, {"name": "火电", "change_pct": 0.82}, {"name": "光伏", "change_pct": -0.58}, {"name": "风电", "change_pct": -0.22}, {"name": "地热", "change_pct": -0.68}, {"name": "新能源汽车", "change_pct": -1.45}, {"name": "储能", "change_pct": -1.03}, {"name": "碳中和", "change_pct": -0.06}, {"name": "超超临界发电", "change_pct": -0.46}, {"name": "国企改革", "change_pct": -0.8}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "河南国企改革", "change_pct": 0.25}]}, {"code": "002204", "name": "大连重工", "hot_rank": 74, "hot_rank_chg": 39, "stock_cnt": 5882, "price": "5.89", "change": "10.09", "market_id": "33", "circulate_market_value": "11375769500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "港口机械", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -1.37}, {"name": "核电", "change_pct": -0.77}, {"name": "一带一路", "change_pct": -1.04}, {"name": "海工装备", "change_pct": 0.32}, {"name": "机械", "change_pct": -1.07}, {"name": "信托", "change_pct": 0.72}, {"name": "风电", "change_pct": -0.22}, {"name": "军工", "change_pct": -0.93}, {"name": "机器人", "change_pct": -1.61}, {"name": "智能制造", "change_pct": -1.45}, {"name": "振兴东北", "change_pct": -0.33}, {"name": "大金融", "change_pct": 1.14}, {"name": "工业母机", "change_pct": -1.93}, {"name": "超超临界发电", "change_pct": -0.46}, {"name": "航天", "change_pct": -0.84}, {"name": "海洋经济", "change_pct": -0.99}]}, {"code": "688795", "name": "摩尔线程", "hot_rank": 75, "hot_rank_chg": 17, "stock_cnt": 5882, "price": "364.05", "change": "-5.97", "market_id": "17", "circulate_market_value": "20386800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 76, "hot_rank_chg": 26, "stock_cnt": 5882, "price": "18.14", "change": "1.62", "market_id": "33", "circulate_market_value": "61013982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002790", "name": "瑞尔特", "hot_rank": 77, "hot_rank_chg": 59, "stock_cnt": 5882, "price": "8.46", "change": "10.01", "market_id": "33", "circulate_market_value": "2205500900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "智能卫浴", "xgb_concepts": [{"name": "家具家居", "change_pct": -1.08}, {"name": "家电", "change_pct": -0.69}, {"name": "厨卫家电", "change_pct": 0.82}]}, {"code": "600371", "name": "万向德农", "hot_rank": 78, "hot_rank_chg": 11, "stock_cnt": 5882, "price": "14.15", "change": "-8.12", "market_id": "17", "circulate_market_value": "4139978700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 79, "hot_rank_chg": -4, "stock_cnt": 5882, "price": "14.02", "change": "-1.41", "market_id": "17", "circulate_market_value": "15372855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 80, "hot_rank_chg": -34, "stock_cnt": 5882, "price": "50.35", "change": "5.96", "market_id": "33", "circulate_market_value": "18554141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002297", "name": "博云新材", "hot_rank": 81, "hot_rank_chg": -38, "stock_cnt": 5882, "price": "21.90", "change": "-2.67", "market_id": "33", "circulate_market_value": "12550995500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000798", "name": "中水渔业", "hot_rank": 82, "hot_rank_chg": 4, "stock_cnt": 5882, "price": "11.52", "change": "-9.08", "market_id": "33", "circulate_market_value": "4214433200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.55}, {"name": "人工智能", "change_pct": -1.14}, {"name": "社区团购", "change_pct": -2.5}, {"name": "预制菜", "change_pct": -2.46}, {"name": "国企改革", "change_pct": -0.8}, {"name": "水产养殖", "change_pct": -4.29}, {"name": "海洋经济", "change_pct": -0.99}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 83, "hot_rank_chg": -3, "stock_cnt": 5882, "price": "2.93", "change": "-6.09", "market_id": "33", "circulate_market_value": "6864076200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.88}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "人工智能", "change_pct": -1.14}, {"name": "VR&AR", "change_pct": -1.43}, {"name": "京津冀", "change_pct": -1.06}, {"name": "装修装饰", "change_pct": -1.0}, {"name": "住房租赁", "change_pct": -0.59}, {"name": "破净股", "change_pct": -0.44}, {"name": "数字经济", "change_pct": -0.97}, {"name": "房产经纪", "change_pct": -2.56}, {"name": "物业管理", "change_pct": -1.08}, {"name": "低价股", "change_pct": -0.62}, {"name": "华为产业链", "change_pct": -1.07}, {"name": "AI大模型/智能体", "change_pct": -1.07}]}, {"code": "600721", "name": "百花医药", "hot_rank": 84, "hot_rank_chg": -18, "stock_cnt": 5882, "price": "11.40", "change": "-1.30", "market_id": "17", "circulate_market_value": "4383843000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -2.17}, {"name": "股权转让", "change_pct": -1.13}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "新疆概念", "change_pct": -1.66}, {"name": "医药", "change_pct": -2.04}, {"name": "流感", "change_pct": -1.97}, {"name": "国资入股", "change_pct": -1.1}, {"name": "减肥药", "change_pct": -2.27}]}, {"code": "002040", "name": "南京港", "hot_rank": 85, "hot_rank_chg": 3, "stock_cnt": 5882, "price": "10.26", "change": "2.81", "market_id": "33", "circulate_market_value": "4987134100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "港口", "change_pct": 0.2}, {"name": "江苏国企改革", "change_pct": -0.76}, {"name": "国企改革", "change_pct": -0.8}, {"name": "江苏自贸区", "change_pct": -0.64}, {"name": "自贸区", "change_pct": -0.67}]}, {"code": "600726", "name": "华电能源", "hot_rank": 86, "hot_rank_chg": -2, "stock_cnt": 5882, "price": "5.82", "change": "5.82", "market_id": "17", "circulate_market_value": "43506457000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.05}, {"name": "央企改革", "change_pct": -0.55}, {"name": "电力体制改革", "change_pct": 1.21}, {"name": "火电", "change_pct": 0.82}, {"name": "振兴东北", "change_pct": -0.33}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 87, "hot_rank_chg": -16, "stock_cnt": 5882, "price": "380.64", "change": "-0.32", "market_id": "17", "circulate_market_value": "255302220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 88, "hot_rank_chg": -1, "stock_cnt": 5882, "price": "6.56", "change": "-9.02", "market_id": "17", "circulate_market_value": "3813832900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -4.16}, {"name": "强势人气股", "change_pct": -1.79}, {"name": "新疆国企改革", "change_pct": -1.51}, {"name": "农垦", "change_pct": -3.97}, {"name": "棉花", "change_pct": -1.83}, {"name": "新疆概念", "change_pct": -1.66}, {"name": "风电", "change_pct": -0.22}, {"name": "大农业", "change_pct": -2.71}, {"name": "国企改革", "change_pct": -0.8}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 89, "hot_rank_chg": -4, "stock_cnt": 5882, "price": "33.10", "change": "-1.40", "market_id": "33", "circulate_market_value": "94668406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 90, "hot_rank_chg": -28, "stock_cnt": 5882, "price": "146.96", "change": "-0.81", "market_id": "17", "circulate_market_value": "354430610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 91, "hot_rank_chg": 80, "stock_cnt": 5882, "price": "10.64", "change": "-3.80", "market_id": "33", "circulate_market_value": "6205360700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -1.94}, {"name": "一带一路", "change_pct": -1.04}, {"name": "天然气", "change_pct": -0.65}, {"name": "油气改革", "change_pct": -1.24}, {"name": "页岩气", "change_pct": -1.59}, {"name": "深地经济", "change_pct": -1.46}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 92, "hot_rank_chg": -10, "stock_cnt": 5882, "price": "5.02", "change": "-3.09", "market_id": "33", "circulate_market_value": "13315803900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.79}, {"name": "装修装饰", "change_pct": -1.0}, {"name": "装配式建筑", "change_pct": -0.73}, {"name": "破净股", "change_pct": -0.44}, {"name": "航天", "change_pct": -0.84}, {"name": "旧改", "change_pct": -0.97}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 93, "hot_rank_chg": -17, "stock_cnt": 5882, "price": "70.43", "change": "-1.33", "market_id": "33", "circulate_market_value": "103314870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603619", "name": "中曼石油", "hot_rank": 94, "hot_rank_chg": 90, "stock_cnt": 5882, "price": "24.14", "change": "-2.46", "market_id": "17", "circulate_market_value": "11160850400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 95, "hot_rank_chg": -16, "stock_cnt": 5882, "price": "49.64", "change": "0.14", "market_id": "17", "circulate_market_value": "103015281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 96, "hot_rank_chg": -23, "stock_cnt": 5882, "price": "418.22", "change": "2.09", "market_id": "33", "circulate_market_value": "69099837000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301689", "name": "电科思仪", "hot_rank": 97, "hot_rank_chg": 19, "stock_cnt": 5882, "price": "54.00", "change": "237.50", "market_id": "33", "circulate_market_value": "3108318400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 98, "hot_rank_chg": -29, "stock_cnt": 5882, "price": "46.79", "change": "0.80", "market_id": "17", "circulate_market_value": "39610230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 100, "hot_rank_chg": -39, "stock_cnt": 5882, "price": "11.79", "change": "-2.00", "market_id": "17", "circulate_market_value": "21093940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -2.27}, {"name": "纯碱", "change_pct": -1.95}, {"name": "食品", "change_pct": -2.32}, {"name": "土壤修复", "change_pct": -1.2}, {"name": "东数西算/算力", "change_pct": -1.02}, {"name": "OpenClaw概念", "change_pct": -1.0}, {"name": "DeepSeek概念股", "change_pct": -1.3}]}];
const LIMIT_UP_POOL = [{"code": "600491", "name": "ST龙元", "price": 1.73, "change_pct": 10.19, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.73, "first_limit_up": 1789005665, "break_limit_up_times": 0}, {"code": "000532", "name": "华金资本", "price": 12.43, "change_pct": 10.0, "reason": "1、实控人珠海国资委，珠海金控旗下唯一控股的上市平台，参股优必选等人工智能独角兽公司；\n2、控股子公司华冠电容主营铝电解电容器的研产销，核心产品有片式、导电高分子等多种类型铝电解电容器", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1789022823, "break_limit_up_times": 0}, {"code": "000565", "name": "渝三峡Ａ", "price": 7.91, "change_pct": 10.01, "reason": "1、重庆国资委旗下，我国涂料行业龙头；\n2、公司重防腐涂料打破外资垄断，曾为天宫一号、神舟九号、长征二号F火箭等军工航天工程提供配套，获国家航天科工集团授牌", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 7.47, "first_limit_up": 1789004499, "break_limit_up_times": 0}, {"code": "002790", "name": "瑞尔特", "price": 8.46, "change_pct": 10.01, "reason": "公司注册地位于福建厦门海沧区，专注于卫浴配件产品和智能卫浴产品", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 2.98, "first_limit_up": 1789003500, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.69, "change_pct": 9.74, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1789009620, "break_limit_up_times": 2}, {"code": "002377", "name": "国创高新", "price": 3.47, "change_pct": 10.16, "reason": "公司主要从事路面改性沥青系列产品", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 7.03, "first_limit_up": 1789003800, "break_limit_up_times": 0}, {"code": "600359", "name": "新农开发", "price": 9.64, "change_pct": 10.05, "reason": "新疆生产建设兵团农一师旗下；主营产品涉及棉花（包括长绒棉、陆地棉、彩色棉、抗虫棉），皮棉销量1.35万吨、棉种销量5306吨", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 10.48, "first_limit_up": 1789003500, "break_limit_up_times": 1}, {"code": "600735", "name": "ST新华锦", "price": 6.51, "change_pct": 9.97, "reason": "公司5年资金占用发生额合计超30亿元，多名责任人合计被罚1780万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1789020221, "break_limit_up_times": 6}, {"code": "600712", "name": "南宁百货", "price": 6.83, "change_pct": 9.98, "reason": "南宁百货品牌，此前向广西壮族自治区及南宁市政府相关部门递交了关于免税品经营资质申报的请示", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.24, "first_limit_up": 1789016891, "break_limit_up_times": 0}, {"code": "001299", "name": "美能能源", "price": 11.83, "change_pct": 10.05, "reason": "公司主营城镇燃气输配与运营", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 13.93, "first_limit_up": 1789004943, "break_limit_up_times": 9}, {"code": "002661", "name": "克明食品", "price": 9.6, "change_pct": 9.97, "reason": "公司是中国最大的挂面制造企业之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.39, "first_limit_up": 1789004457, "break_limit_up_times": 4}, {"code": "603318", "name": "水发燃气", "price": 10.35, "change_pct": 9.99, "reason": "1、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务；\n2、公司依托西北天然气产区布局LNG-BOG提氦业务，现有5N高纯氦产能并持续扩产；\n3、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 23.96, "first_limit_up": 1789004322, "break_limit_up_times": 3}, {"code": "603105", "name": "芯能科技", "price": 8.38, "change_pct": 9.97, "reason": "工业屋顶分布式光伏开发领域龙头，公司表示参与国家电力改革和电力市场化交易，探寻分布式光伏发电实现隔墙售电将带来的发展新机遇", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.19, "first_limit_up": 1789004899, "break_limit_up_times": 3}, {"code": "600876", "name": "凯盛新能", "price": 7.91, "change_pct": 10.01, "reason": "1、国内著名的玻璃生产制造商之一；公司超薄电子玻璃产品结构优势明显,具备批量生产0.12mm-2.0mm系列浮法玻璃生产能力，玻璃板块主导产品为超薄电子玻璃基板；\n2、公司主营产品包括双玻组件玻璃、AR光伏镀膜玻璃、高透光伏玻璃钢化片等太阳能装备用光伏电池封装材料，在产光伏玻璃原片产能4650吨/日", "plates": ["玻纤"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1789004784, "break_limit_up_times": 1}, {"code": "601231", "name": "环旭电子", "price": 27.92, "change_pct": 10.01, "reason": "公司7月底发布新一代1.6T光模块并自建测试实验室，未来将与控股股东合作拓展CPO光器件及系统组装业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.59, "first_limit_up": 1789004886, "break_limit_up_times": 0}, {"code": "600644", "name": "乐山电力", "price": 10.12, "change_pct": 10.0, "reason": "公司目前主要有电力、天然气、自来水、综合能源、宾馆等五大业务；参股子公司四川晟天新能源发展有限公司主营业务为太阳能光伏电站，项目包括牧光互补、渔光互补、农光互补等光伏复合电站以及分布式光伏电站等多种类型", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 13.56, "first_limit_up": 1789017462, "break_limit_up_times": 0}, {"code": "000978", "name": "桂林旅游", "price": 9.69, "change_pct": 9.99, "reason": "公司主营为游船客运、景区旅游业务", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 17.27, "first_limit_up": 1789003500, "break_limit_up_times": 1}, {"code": "000993", "name": "闽东电力", "price": 12.62, "change_pct": 10.03, "reason": "1、福建省最大的电力股份制企业；公司主营业务为电力生产与开发，主要以水电、风电、光伏为主；\n2、持股海交所7.4%，海交所提供不良资产处置服务", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 12.12, "first_limit_up": 1789004031, "break_limit_up_times": 1}, {"code": "000823", "name": "超声电子", "price": 18.7, "change_pct": 10.0, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 25.93, "first_limit_up": 1789007334, "break_limit_up_times": 1}, {"code": "603601", "name": "再升科技", "price": 9.96, "change_pct": 10.06, "reason": "国内微玻璃纤维滤纸行业龙头，为SpaceX出口超高温绝热材料", "plates": ["玻纤"], "limit_up_days": 1, "turnover_ratio": 17.7, "first_limit_up": 1789007835, "break_limit_up_times": 1}, {"code": "002531", "name": "天顺风能", "price": 6.91, "change_pct": 10.03, "reason": "1、全球最具规模的风力发电塔架制造商之一；\n2、公司复材事业部中标中国船舶科学研究中心目标无人地效翼船结构建造及总装联调项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1789016583, "break_limit_up_times": 0}, {"code": "002912", "name": "中新赛克", "price": 21.37, "change_pct": 9.98, "reason": "深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.1, "first_limit_up": 1789004061, "break_limit_up_times": 4}, {"code": "603316", "name": "诚邦股份", "price": 15.72, "change_pct": 10.01, "reason": "公司拟定增1.29亿元加码半导体存储业务", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.11, "first_limit_up": 1789004509, "break_limit_up_times": 2}, {"code": "002636", "name": "金安国纪", "price": 76.45, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.96, "first_limit_up": 1789006431, "break_limit_up_times": 2}, {"code": "600792", "name": "云煤能源", "price": 5.41, "change_pct": 9.96, "reason": "云南省大型的焦炭生产与焦化工企业之一；旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["其他"], "limit_up_days": 3, "turnover_ratio": 14.17, "first_limit_up": 1789003841, "break_limit_up_times": 1}, {"code": "600488", "name": "津药药业", "price": 5.9, "change_pct": 10.07, "reason": "公司创新研究院JYSW003银屑病创新药项目正按合同推进，前期药效与安全性表现良好", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 17.35, "first_limit_up": 1789003500, "break_limit_up_times": 7}, {"code": "002174", "name": "游族网络", "price": 13.64, "change_pct": 10.0, "reason": "1、公司与康盈半导体、曦望Sunrise达成合作，将于无锡高新区共同落地“2.5D/3D先进封装中心”，面向算力芯片、存储芯片等领域客户提供量产封装服务；\n2、公司旗下知名游戏产品有《少年三国志》系列、《女神联盟》系列、《盗墓笔记》等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1789016463, "break_limit_up_times": 3}, {"code": "002201", "name": "九鼎新材", "price": 10.08, "change_pct": 10.04, "reason": "1、全球较大的玻纤制砂轮增强片供应商，国家航空航天特种玻纤布定点企业；\n2、公司的主要产品类别玻璃纤维复合材料就有应用于风力发电领域的风电机舱罩和叶片", "plates": ["玻纤"], "limit_up_days": 1, "turnover_ratio": 9.85, "first_limit_up": 1789004316, "break_limit_up_times": 3}, {"code": "002204", "name": "大连重工", "price": 5.89, "change_pct": 10.09, "reason": "1、业界首批研发兆瓦级风电核心部件的企业；公司是风电核心零部件供应商，主要包括增速机、机舱框架、电控系统、箱变、环网柜、主机架、轮毂、底座、塔筒、风电热处理件等产品；\n2、长征五号运载火箭发射任务的发射移动平台——脐带塔及行走装置是公司自主研制的产品，是火箭燃料注入、测试、调节温度和发射的基础性设施，也是发射前连接火箭与地面设备的重要纽带", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1789006698, "break_limit_up_times": 0}, {"code": "600318", "name": "新力金融", "price": 8.09, "change_pct": 10.07, "reason": "公司控股股东拟变更为辉隆投资，实控人仍为安徽省供销合作社联合社；公司拥有地方AMC、小贷、租赁、担保、典当多牌照金融子公司", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 22.46, "first_limit_up": 1789003500, "break_limit_up_times": 7}, {"code": "600192", "name": "长城电工", "price": 8.68, "change_pct": 10.01, "reason": "1.公司目前具备核电开关设备IE级的设计及制造资质，部分产品已应用漳州核电厂；\n2、西部地区电力设备龙头企业，主要包括低压开关成套设备、高中低压电器元件及关键零部件、智能低压成套配电装置及母线槽等电工电器类产品", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 11.04, "first_limit_up": 1789003845, "break_limit_up_times": 3}, {"code": "600744", "name": "华银电力", "price": 7, "change_pct": 10.06, "reason": "湖南省火电龙头", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.69, "first_limit_up": 1789006187, "break_limit_up_times": 0}, {"code": "603421", "name": "鼎信通讯", "price": 7.29, "change_pct": 9.95, "reason": "公司深耕智能电网，拥有电能计量、配电自动化、中低压数字化全矩阵产品，参与国标制定，具备芯片-方案-系统垂直整合能力", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 7.03, "first_limit_up": 1789004496, "break_limit_up_times": 0}, {"code": "002543", "name": "万和电气", "price": 7.9, "change_pct": 10.03, "reason": "厨卫电器及热水热能系统整体解决方案供应商；公司产品涉及太阳能、空气源热泵等低碳热源装置", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.14, "first_limit_up": 1789005408, "break_limit_up_times": 0}, {"code": "000722", "name": "湖南发展", "price": 14.74, "change_pct": 10.0, "reason": "公司运营管理湖南境内的株洲航电、蟒塘溪、鸟儿巢三座水电站以及南洲产业园、果子熟了等四个分布式光伏电站，可控总装机容量为24.447万千瓦；拟收购位于湘西水电基地的铜湾水电、清水塘水电、筱溪水电和高滩水电", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.88, "first_limit_up": 1789005048, "break_limit_up_times": 1}, {"code": "600667", "name": "太极实业", "price": 19.98, "change_pct": 10.02, "reason": "DRAM封装龙头；子公司海太半导体的封测业务主要是为SK海力士的DRAM产品提供后工序服务，对12英寸1Z纳米级晶圆进行集成电路封装，海太半导体由公司和SK海力士共同投资组建，公司持有海太半导体55%股权，SK海力士持有海太半导体45%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.13, "first_limit_up": 1789004182, "break_limit_up_times": 0}, {"code": "000048", "name": "京基智农", "price": 23.2, "change_pct": 10.0, "reason": "1、公司全资设立深圳市子夏智算科技有限公司，并合资成立深圳市子夏北方智算算力网络有限公司，实质性推进算力实体落地，业务涵盖人工智能基础与应用软件开发、云计算设备销售等，积极拓展算力业务打造新增长曲线；\n2、公司主营业务包括生猪养殖与销售、饲料生产与销售、种鸡与肉鸡养殖与销售等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1789021245, "break_limit_up_times": 3}, {"code": "002514", "name": "*ST宝馨", "price": 2.41, "change_pct": 10.05, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.37, "first_limit_up": 1789008228, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 23.43, "change_pct": 10.0, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.84, "first_limit_up": 1789018236, "break_limit_up_times": 3}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "300010": "ST/风险警示股"};