const UPDATE_TIME = "2026-11-26 01:28";
const THS_HOT = [
  {
    "name": "流感",
    "rise": 0.15,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885879"
  },
  {
    "name": "6G概念",
    "rise": 2.42,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "商业航天",
    "rise": 1.87,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续267天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.42,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 1.23,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.03,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续338天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 0.3,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续168天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 1.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续161天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": -0.04,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续31天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "脑机接口",
    "rise": 1.39,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "冰雪产业",
    "rise": 0.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续33天上榜",
    "rankChg": 1,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "算力租赁",
    "rise": 1.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": -1,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "人工智能",
    "rise": 1.02,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续45天上榜",
    "rankChg": 1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "黄金概念",
    "rise": 1.26,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "军工",
    "rise": 1.52,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "存储芯片",
    "rise": 1.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续291天上榜",
    "rankChg": -1,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "青蒿素",
    "rise": 0.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "ST板块",
    "rise": -0.45,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光刻胶",
    "rise": 1.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "AI应用",
    "rise": 0.94,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续96天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  }
];
const THS_EVENTS = [
  {
    "title": "美国 FCC 批准 SpaceX 在太空部署 100 万颗数据中心卫星",
    "desc": "",
    "heat": 324598,
    "direction": "太空算力",
    "themes": [
      "太空算力",
      "太空光伏"
    ],
    "stocks": [
      {
        "name": "顺灏股份",
        "code": "002565",
        "chg": 10.052219
      }
    ]
  },
  {
    "title": "高端PCB排单延至2028年 算力赛道带动产业链扩产",
    "desc": "",
    "heat": 215343,
    "direction": "PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB",
      "元件"
    ],
    "stocks": [
      {
        "name": "胜宏科技",
        "code": "300476",
        "chg": 4.823442
      }
    ]
  },
  {
    "title": "小鹏机器人将于2027年1月正式量产",
    "desc": "",
    "heat": 209881,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "信维通信",
        "code": "300136",
        "chg": 15.37415
      }
    ]
  },
  {
    "title": "马斯克旗下脑机接口公司有新成果",
    "desc": "",
    "heat": 200952,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "爱朋医疗",
        "code": "300753",
        "chg": 6.716886
      }
    ]
  },
  {
    "title": "国产EDA大突破！华为攒了个“韬EDA”的局",
    "desc": "",
    "heat": 140771,
    "direction": "韬 (τ) EDA",
    "themes": [
      "先进封装",
      "晶圆代工",
      "EDA",
      "混合键合",
      "华为概念"
    ],
    "stocks": [
      {
        "name": "信维通信",
        "code": "300136",
        "chg": 15.37415
      }
    ]
  },
  {
    "title": "爆单！冰雪经济升温，造雪机订单排到2029年",
    "desc": "",
    "heat": 60320,
    "direction": "冰雪产业",
    "themes": [
      "冰雪装备",
      "冰雪场地",
      "冰雪旅游",
      "冰雪赛事培训",
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "福瑞达",
        "code": "600223",
        "chg": 8.925319
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "SpaceX概念股",
    "change": "+6.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+4.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+3.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "卫星互联网",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "6G",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+2.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+2.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+2.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航天",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "UWB超宽带",
    "change": "+2.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "筹码集中",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "WiFi",
    "change": "+2.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 3,
    "hot_rank_chg": 12,
    "stock_cnt": 5874,
    "price": "3.83",
    "change": "1.32",
    "market_id": "17",
    "circulate_market_value": "8473220300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.11
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "光通信",
        "change_pct": 1.94
      },
      {
        "name": "林业",
        "change_pct": 0.88
      },
      {
        "name": "军民融合",
        "change_pct": 1.51
      },
      {
        "name": "军工",
        "change_pct": 1.5
      },
      {
        "name": "人造肉",
        "change_pct": 0.4
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 5,
    "hot_rank_chg": 2,
    "stock_cnt": 5874,
    "price": "8.09",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "8151397600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.83
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "工业自动化",
        "change_pct": 1.47
      },
      {
        "name": "机械",
        "change_pct": 0.53
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "信创",
        "change_pct": 0.96
      },
      {
        "name": "AI算力芯片",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 6,
    "hot_rank_chg": 16,
    "stock_cnt": 5874,
    "price": "3.78",
    "change": "5.00",
    "market_id": "17",
    "circulate_market_value": "5522558500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "冷链",
        "change_pct": 0.52
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "食品安全",
        "change_pct": 0.34
      },
      {
        "name": "预制菜",
        "change_pct": 0.48
      },
      {
        "name": "水产养殖",
        "change_pct": 1.49
      },
      {
        "name": "海洋经济",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "600814",
    "name": "杭州解百",
    "hot_rank": 9,
    "hot_rank_chg": 34,
    "stock_cnt": 5874,
    "price": "9.19",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6755372300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.67
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "医美",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 10,
    "hot_rank_chg": -1,
    "stock_cnt": 5874,
    "price": "4.45",
    "change": "2.54",
    "market_id": "33",
    "circulate_market_value": "7035322200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.45
      },
      {
        "name": "体外诊断",
        "change_pct": 0.41
      },
      {
        "name": "医疗器械",
        "change_pct": 0.55
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "基因测序",
        "change_pct": 0.54
      },
      {
        "name": "预制菜",
        "change_pct": 0.48
      },
      {
        "name": "水产养殖",
        "change_pct": 1.49
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "海洋经济",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 12,
    "hot_rank_chg": -1,
    "stock_cnt": 5874,
    "price": "9.24",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "4167485900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.15
      },
      {
        "name": "手游",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "游戏",
        "change_pct": 0.67
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "机器人",
        "change_pct": 1.42
      },
      {
        "name": "无人机",
        "change_pct": 1.51
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.86
      },
      {
        "name": "低空经济",
        "change_pct": 1.32
      },
      {
        "name": "无人物流车",
        "change_pct": 0.68
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 14,
    "hot_rank_chg": 11,
    "stock_cnt": 5874,
    "price": "5.17",
    "change": "3.19",
    "market_id": "33",
    "circulate_market_value": "4159117600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 0.37
      },
      {
        "name": "养猪",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "大农业",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "600185",
    "name": "珠免集团",
    "hot_rank": 15,
    "hot_rank_chg": 1183,
    "stock_cnt": 5874,
    "price": "4.71",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "8878377300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.72
      },
      {
        "name": "房地产",
        "change_pct": 0.52
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.77
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.58
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.67
      },
      {
        "name": "横琴新区",
        "change_pct": 1.43
      },
      {
        "name": "免税店概念",
        "change_pct": 0.73
      },
      {
        "name": "自贸区",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 16,
    "hot_rank_chg": 13,
    "stock_cnt": 5874,
    "price": "2.72",
    "change": "4.21",
    "market_id": "17",
    "circulate_market_value": "3582059200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.72
      },
      {
        "name": "长三角一体化",
        "change_pct": 0.56
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "装修装饰",
        "change_pct": 0.96
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.86
      },
      {
        "name": "建筑节能",
        "change_pct": 0.65
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.88
      },
      {
        "name": "低价股",
        "change_pct": 0.19
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.28
      },
      {
        "name": "旧改",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "002122",
    "name": "汇洲智能",
    "hot_rank": 17,
    "hot_rank_chg": 34,
    "stock_cnt": 5874,
    "price": "3.80",
    "change": "5.85",
    "market_id": "33",
    "circulate_market_value": "7549921800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 1.29
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "智慧停车",
        "change_pct": 0.95
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "风电",
        "change_pct": 0.95
      },
      {
        "name": "复牌股",
        "change_pct": -0.82
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "工业母机",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 19,
    "hot_rank_chg": -7,
    "stock_cnt": 5874,
    "price": "2.81",
    "change": "-0.71",
    "market_id": "17",
    "circulate_market_value": "8043266000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "游戏",
        "change_pct": 0.67
      },
      {
        "name": "影视",
        "change_pct": 0.51
      },
      {
        "name": "低价股",
        "change_pct": 0.19
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.76
      },
      {
        "name": "AI视频",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "002872",
    "name": "天圣制药",
    "hot_rank": 22,
    "hot_rank_chg": 104,
    "stock_cnt": 5874,
    "price": "7.81",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "1678510600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.45
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.29
      },
      {
        "name": "复牌股",
        "change_pct": -0.82
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002728",
    "name": "特一药业",
    "hot_rank": 24,
    "hot_rank_chg": 156,
    "stock_cnt": 5874,
    "price": "9.19",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4607028900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "流感",
        "change_pct": 0.21
      },
      {
        "name": "长寿药NMN",
        "change_pct": 1.22
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      },
      {
        "name": "医美",
        "change_pct": 0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 25,
    "hot_rank_chg": 2,
    "stock_cnt": 5874,
    "price": "8.17",
    "change": "-4.33",
    "market_id": "33",
    "circulate_market_value": "5405111200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.15
      },
      {
        "name": "边缘计算",
        "change_pct": 1.17
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 0.92
      },
      {
        "name": "数字孪生",
        "change_pct": 0.95
      },
      {
        "name": "精准医疗",
        "change_pct": 0.45
      },
      {
        "name": "国产软件",
        "change_pct": 1.09
      },
      {
        "name": "金融科技",
        "change_pct": 0.98
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "网络安全",
        "change_pct": 1.12
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "基因测序",
        "change_pct": 0.54
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.74
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "智慧城市",
        "change_pct": 0.98
      },
      {
        "name": "智慧物流",
        "change_pct": 0.79
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "工业互联网",
        "change_pct": 1.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.04
      },
      {
        "name": "信创",
        "change_pct": 0.96
      },
      {
        "name": "国资云",
        "change_pct": 0.73
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.05
      },
      {
        "name": "数字乡村",
        "change_pct": 0.78
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "智慧政务",
        "change_pct": 0.87
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "远程办公",
        "change_pct": 0.76
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "算力租赁",
        "change_pct": 0.93
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.97
      },
      {
        "name": "星闪概念",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 29,
    "hot_rank_chg": 116,
    "stock_cnt": 5874,
    "price": "7.05",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "3764700100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 1.09
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.76
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.29
      },
      {
        "name": "金融科技",
        "change_pct": 0.98
      },
      {
        "name": "网络安全",
        "change_pct": 1.12
      },
      {
        "name": "充电桩",
        "change_pct": 1.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "移动支付",
        "change_pct": 1.49
      },
      {
        "name": "教育",
        "change_pct": 0.28
      },
      {
        "name": "智慧城市",
        "change_pct": 0.98
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.77
      },
      {
        "name": "LED",
        "change_pct": 1.21
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "机器人",
        "change_pct": 1.42
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.03
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.04
      },
      {
        "name": "信创",
        "change_pct": 0.96
      },
      {
        "name": "NFT",
        "change_pct": 0.75
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.05
      },
      {
        "name": "数字乡村",
        "change_pct": 0.78
      },
      {
        "name": "教育信息化",
        "change_pct": 0.63
      },
      {
        "name": "数字人民币",
        "change_pct": 1.05
      },
      {
        "name": "智慧政务",
        "change_pct": 0.87
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.67
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.18
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.15
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.36
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "算力租赁",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "002651",
    "name": "利君股份",
    "hot_rank": 33,
    "hot_rank_chg": 53,
    "stock_cnt": 5874,
    "price": "8.69",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4913879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "业绩爆雷",
        "change_pct": 1.93
      },
      {
        "name": "通用航空",
        "change_pct": 1.66
      },
      {
        "name": "大飞机",
        "change_pct": 1.65
      },
      {
        "name": "军工",
        "change_pct": 1.5
      },
      {
        "name": "无人机",
        "change_pct": 1.51
      },
      {
        "name": "航天",
        "change_pct": 2.28
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 34,
    "hot_rank_chg": 40,
    "stock_cnt": 5874,
    "price": "10.81",
    "change": "0.56",
    "market_id": "17",
    "circulate_market_value": "7199460000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "600280",
    "name": "中央商场",
    "hot_rank": 36,
    "hot_rank_chg": 141,
    "stock_cnt": 5874,
    "price": "3.10",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "3497837800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "低价股",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 37,
    "hot_rank_chg": 224,
    "stock_cnt": 5874,
    "price": "8.43",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "8935422100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 0.84
      },
      {
        "name": "电子烟",
        "change_pct": 1.61
      },
      {
        "name": "一带一路",
        "change_pct": 0.83
      },
      {
        "name": "造纸",
        "change_pct": 1.11
      },
      {
        "name": "包装印刷",
        "change_pct": 1.37
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.69
      },
      {
        "name": "太空算力",
        "change_pct": 4.57
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 38,
    "hot_rank_chg": 4,
    "stock_cnt": 5874,
    "price": "4.40",
    "change": "-2.65",
    "market_id": "33",
    "circulate_market_value": "10370865400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.94
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.29
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "固废处理",
        "change_pct": 0.64
      },
      {
        "name": "智慧城市",
        "change_pct": 0.98
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.81
      },
      {
        "name": "有色金属",
        "change_pct": 1.26
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 0.74
      },
      {
        "name": "土壤修复",
        "change_pct": 0.49
      },
      {
        "name": "磷化铟",
        "change_pct": 2.38
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 39,
    "hot_rank_chg": -13,
    "stock_cnt": 5874,
    "price": "4.28",
    "change": "-2.06",
    "market_id": "17",
    "circulate_market_value": "5714026700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.03
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "LED",
        "change_pct": 1.21
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.69
      }
    ]
  },
  {
    "code": "603708",
    "name": "家家悦",
    "hot_rank": 40,
    "hot_rank_chg": 366,
    "stock_cnt": 5874,
    "price": "10.10",
    "change": "4.34",
    "market_id": "17",
    "circulate_market_value": "6252995200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "社区团购",
        "change_pct": 0.55
      },
      {
        "name": "大消费",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 42,
    "hot_rank_chg": 147,
    "stock_cnt": 5874,
    "price": "8.50",
    "change": "0.24",
    "market_id": "17",
    "circulate_market_value": "5117250100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.03
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.05
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "算力租赁",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 43,
    "hot_rank_chg": -9,
    "stock_cnt": 5874,
    "price": "8.63",
    "change": "-1.82",
    "market_id": "33",
    "circulate_market_value": "4152232500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 0.41
      },
      {
        "name": "医疗器械",
        "change_pct": 0.55
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "基因测序",
        "change_pct": 0.54
      },
      {
        "name": "PCB板",
        "change_pct": 1.82
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "食品安全",
        "change_pct": 0.34
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.41
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.28
      },
      {
        "name": "异丙醇",
        "change_pct": 0.74
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 0.9
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 46,
    "hot_rank_chg": 67,
    "stock_cnt": 5874,
    "price": "3.14",
    "change": "-2.79",
    "market_id": "17",
    "circulate_market_value": "4011663400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.07
      },
      {
        "name": "化肥",
        "change_pct": 0.43
      },
      {
        "name": "保健品",
        "change_pct": 0.1
      },
      {
        "name": "民营医院",
        "change_pct": 0.36
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "煤化工",
        "change_pct": 0.02
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "大农业",
        "change_pct": 0.39
      },
      {
        "name": "干细胞",
        "change_pct": -0.03
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "603122",
    "name": "合富中国",
    "hot_rank": 48,
    "hot_rank_chg": 57,
    "stock_cnt": 5874,
    "price": "9.72",
    "change": "-3.67",
    "market_id": "17",
    "circulate_market_value": "3869071600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 0.41
      },
      {
        "name": "医疗器械",
        "change_pct": 0.55
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "医药商业",
        "change_pct": 0.03
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.79
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "猴痘概念",
        "change_pct": 0.32
      },
      {
        "name": "自贸区",
        "change_pct": 0.53
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 0.27
      },
      {
        "name": "AI医疗",
        "change_pct": 0.55
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 49,
    "hot_rank_chg": -14,
    "stock_cnt": 5874,
    "price": "8.97",
    "change": "-3.75",
    "market_id": "17",
    "circulate_market_value": "3606933000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.72
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "纺织服装",
        "change_pct": 0.44
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.65
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.89
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.05
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.34
      }
    ]
  },
  {
    "code": "605018",
    "name": "长华集团",
    "hot_rank": 50,
    "hot_rank_chg": -5,
    "stock_cnt": 5874,
    "price": "12.11",
    "change": "-7.06",
    "market_id": "17",
    "circulate_market_value": "5692496800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.09
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.2
      },
      {
        "name": "人形机器人",
        "change_pct": 1.52
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 1.23
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 53,
    "hot_rank_chg": -3,
    "stock_cnt": 5874,
    "price": "4.18",
    "change": "-0.71",
    "market_id": "17",
    "circulate_market_value": "5456864200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "高速公路",
        "change_pct": 0.18
      },
      {
        "name": "振兴东北",
        "change_pct": 0.49
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "000756",
    "name": "新华制药",
    "hot_rank": 54,
    "hot_rank_chg": 86,
    "stock_cnt": 5874,
    "price": "11.97",
    "change": "-1.56",
    "market_id": "33",
    "circulate_market_value": "5971508700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.18
      },
      {
        "name": "动物保健",
        "change_pct": 0.65
      },
      {
        "name": "维生素",
        "change_pct": 0.54
      },
      {
        "name": "保健品",
        "change_pct": 0.1
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.74
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      },
      {
        "name": "宠物经济",
        "change_pct": 0.54
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "医美",
        "change_pct": 0.62
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.42
      },
      {
        "name": "生物安全",
        "change_pct": 0.94
      },
      {
        "name": "合成生物",
        "change_pct": 0.53
      }
    ]
  },
  {
    "code": "300086",
    "name": "康芝药业",
    "hot_rank": 55,
    "hot_rank_chg": 42,
    "stock_cnt": 5874,
    "price": "5.17",
    "change": "6.60",
    "market_id": "33",
    "circulate_market_value": "2278328600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.45
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "海南概念",
        "change_pct": 1.07
      },
      {
        "name": "流感",
        "change_pct": 0.21
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.58
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.67
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "自贸区",
        "change_pct": 0.53
      },
      {
        "name": "驱蚊概念",
        "change_pct": 0.86
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 56,
    "hot_rank_chg": -36,
    "stock_cnt": 5874,
    "price": "9.10",
    "change": "-1.09",
    "market_id": "17",
    "circulate_market_value": "2453471100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 0.83
      },
      {
        "name": "高股息",
        "change_pct": 0.08
      },
      {
        "name": "银行",
        "change_pct": -0.24
      },
      {
        "name": "白马股",
        "change_pct": 0.33
      },
      {
        "name": "破净股",
        "change_pct": 0.41
      },
      {
        "name": "大金融",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 57,
    "hot_rank_chg": -17,
    "stock_cnt": 5874,
    "price": "9.46",
    "change": "-0.84",
    "market_id": "33",
    "circulate_market_value": "5365070100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.1
      },
      {
        "name": "军民融合",
        "change_pct": 1.51
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "LED",
        "change_pct": 1.21
      },
      {
        "name": "军工",
        "change_pct": 1.5
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.36
      },
      {
        "name": "海洋经济",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 60,
    "hot_rank_chg": 5,
    "stock_cnt": 5874,
    "price": "11.70",
    "change": "-0.43",
    "market_id": "17",
    "circulate_market_value": "12225187800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.94
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 0.69
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "603360",
    "name": "百傲化学",
    "hot_rank": 63,
    "hot_rank_chg": 139,
    "stock_cnt": 5874,
    "price": "10.32",
    "change": "-2.27",
    "market_id": "17",
    "circulate_market_value": "7288228100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 1.7
      },
      {
        "name": "农药",
        "change_pct": 0.39
      },
      {
        "name": "大农业",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 65,
    "hot_rank_chg": -13,
    "stock_cnt": 5874,
    "price": "8.55",
    "change": "-0.70",
    "market_id": "17",
    "circulate_market_value": "15297132000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.45
      },
      {
        "name": "纯碱",
        "change_pct": 0.8
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "土壤修复",
        "change_pct": 0.49
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.05
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.94
      },
      {
        "name": "算力租赁",
        "change_pct": 0.93
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "600223",
    "name": "福瑞达",
    "hot_rank": 66,
    "hot_rank_chg": 344,
    "stock_cnt": 5874,
    "price": "5.98",
    "change": "8.93",
    "market_id": "17",
    "circulate_market_value": "6079081300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "养老产业",
        "change_pct": 0.76
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.74
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.04
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "眼科",
        "change_pct": 0.57
      },
      {
        "name": "医美",
        "change_pct": 0.62
      },
      {
        "name": "化妆品",
        "change_pct": 0.92
      },
      {
        "name": "麦角硫因",
        "change_pct": 0.31
      },
      {
        "name": "合成生物",
        "change_pct": 0.53
      },
      {
        "name": "微信小店",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 67,
    "hot_rank_chg": -19,
    "stock_cnt": 5874,
    "price": "5.62",
    "change": "-2.26",
    "market_id": "17",
    "circulate_market_value": "25936068000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 1.08
      },
      {
        "name": "国产软件",
        "change_pct": 1.09
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "养老产业",
        "change_pct": 0.76
      },
      {
        "name": "大飞机",
        "change_pct": 1.65
      },
      {
        "name": "军民融合",
        "change_pct": 1.51
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "智慧城市",
        "change_pct": 0.98
      },
      {
        "name": "军工",
        "change_pct": 1.5
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "机器人",
        "change_pct": 1.42
      },
      {
        "name": "黑色家电",
        "change_pct": 1.1
      },
      {
        "name": "家电",
        "change_pct": 0.68
      },
      {
        "name": "储能",
        "change_pct": 1.11
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "工业互联网",
        "change_pct": 1.06
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "百度概念股",
        "change_pct": 0.91
      },
      {
        "name": "NFT",
        "change_pct": 0.75
      },
      {
        "name": "跨境支付",
        "change_pct": 0.96
      },
      {
        "name": "华为海思",
        "change_pct": 1.4
      },
      {
        "name": "云游戏",
        "change_pct": 1.13
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.72
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.94
      },
      {
        "name": "服务器",
        "change_pct": 1.23
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.97
      },
      {
        "name": "星闪概念",
        "change_pct": 1.55
      },
      {
        "name": "低空经济",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 68,
    "hot_rank_chg": -5,
    "stock_cnt": 5874,
    "price": "6.80",
    "change": "-2.16",
    "market_id": "33",
    "circulate_market_value": "4948804700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.52
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.86
      },
      {
        "name": "风电",
        "change_pct": 0.95
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.54
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.52
      },
      {
        "name": "建筑节能",
        "change_pct": 0.65
      },
      {
        "name": "旧改",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "000158",
    "name": "常山北明",
    "hot_rank": 69,
    "hot_rank_chg": -38,
    "stock_cnt": 5874,
    "price": "12.85",
    "change": "1.82",
    "market_id": "33",
    "circulate_market_value": "20439771000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.15
      },
      {
        "name": "国产软件",
        "change_pct": 1.09
      },
      {
        "name": "金融科技",
        "change_pct": 0.98
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "网络安全",
        "change_pct": 1.12
      },
      {
        "name": "充电桩",
        "change_pct": 1.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "京津冀",
        "change_pct": 0.74
      },
      {
        "name": "冷链",
        "change_pct": 0.52
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "智慧城市",
        "change_pct": 0.98
      },
      {
        "name": "雄安新区",
        "change_pct": 0.53
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "工业互联网",
        "change_pct": 1.06
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.03
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.04
      },
      {
        "name": "信创",
        "change_pct": 0.96
      },
      {
        "name": "NFT",
        "change_pct": 0.75
      },
      {
        "name": "华为昇腾",
        "change_pct": 1.26
      },
      {
        "name": "国资云",
        "change_pct": 0.73
      },
      {
        "name": "数字乡村",
        "change_pct": 0.78
      },
      {
        "name": "智慧政务",
        "change_pct": 0.87
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.18
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.15
      },
      {
        "name": "华为HMS",
        "change_pct": 1.49
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "算力租赁",
        "change_pct": 0.93
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.97
      },
      {
        "name": "智谱AI",
        "change_pct": 1.05
      },
      {
        "name": "区块链",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 70,
    "hot_rank_chg": 61,
    "stock_cnt": 5874,
    "price": "8.21",
    "change": "-2.15",
    "market_id": "17",
    "circulate_market_value": "4760885400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": 0.03
      },
      {
        "name": "民营医院",
        "change_pct": 0.36
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "振兴东北",
        "change_pct": 0.49
      },
      {
        "name": "宠物经济",
        "change_pct": 0.54
      },
      {
        "name": "眼科",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 71,
    "hot_rank_chg": -35,
    "stock_cnt": 5874,
    "price": "9.54",
    "change": "-1.04",
    "market_id": "17",
    "circulate_market_value": "7756478900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "充电桩",
        "change_pct": 1.06
      },
      {
        "name": "光伏",
        "change_pct": 1.44
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "家电",
        "change_pct": 0.68
      },
      {
        "name": "储能",
        "change_pct": 1.11
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.83
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.18
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.62
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 72,
    "hot_rank_chg": -23,
    "stock_cnt": 5874,
    "price": "4.46",
    "change": "0.68",
    "market_id": "33",
    "circulate_market_value": "156886300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.67
      },
      {
        "name": "手机产业链",
        "change_pct": 1.51
      },
      {
        "name": "超高清视频",
        "change_pct": 1.08
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.8
      },
      {
        "name": "电竞",
        "change_pct": 0.89
      },
      {
        "name": "半导体",
        "change_pct": 1.7
      },
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.32
      },
      {
        "name": "VR&AR",
        "change_pct": 1.45
      },
      {
        "name": "OLED",
        "change_pct": 1.41
      },
      {
        "name": "京津冀",
        "change_pct": 0.74
      },
      {
        "name": "物联网",
        "change_pct": 1.15
      },
      {
        "name": "指纹识别",
        "change_pct": 1.24
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.09
      },
      {
        "name": "白马股",
        "change_pct": 0.33
      },
      {
        "name": "智能制造",
        "change_pct": 1.25
      },
      {
        "name": "小米概念股",
        "change_pct": 1.36
      },
      {
        "name": "国产芯片",
        "change_pct": 1.66
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.27
      },
      {
        "name": "全息概念",
        "change_pct": 1.03
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.1
      },
      {
        "name": "MicroLED",
        "change_pct": 1.66
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.83
      },
      {
        "name": "智能手表",
        "change_pct": 1.19
      },
      {
        "name": "MiniLED",
        "change_pct": 1.64
      },
      {
        "name": "传感器",
        "change_pct": 1.68
      },
      {
        "name": "大硅片",
        "change_pct": 1.31
      },
      {
        "name": "AI PC",
        "change_pct": 1.51
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.99
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.59
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "605136",
    "name": "丽人丽妆",
    "hot_rank": 74,
    "hot_rank_chg": 304,
    "stock_cnt": 5874,
    "price": "7.97",
    "change": "1.53",
    "market_id": "17",
    "circulate_market_value": "3191654200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.72
      },
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.45
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.03
      },
      {
        "name": "预制菜",
        "change_pct": 0.48
      },
      {
        "name": "化妆品",
        "change_pct": 0.92
      },
      {
        "name": "麦角硫因",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 76,
    "hot_rank_chg": 257,
    "stock_cnt": 5874,
    "price": "9.28",
    "change": "5.21",
    "market_id": "33",
    "circulate_market_value": "4775925600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 1.51
      },
      {
        "name": "5G",
        "change_pct": 1.84
      },
      {
        "name": "光通信",
        "change_pct": 1.94
      },
      {
        "name": "教育",
        "change_pct": 0.28
      },
      {
        "name": "毫米波通信",
        "change_pct": 3.47
      },
      {
        "name": "6G",
        "change_pct": 2.4
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.69
      },
      {
        "name": "华为产业链",
        "change_pct": 1.25
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.94
      },
      {
        "name": "5.5G概念",
        "change_pct": 2.55
      }
    ]
  },
  {
    "code": "002038",
    "name": "双鹭药业",
    "hot_rank": 78,
    "hot_rank_chg": 177,
    "stock_cnt": 5874,
    "price": "4.92",
    "change": "0.41",
    "market_id": "33",
    "circulate_market_value": "4192798300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 0.84
      },
      {
        "name": "创新药",
        "change_pct": 0.18
      },
      {
        "name": "基因测序",
        "change_pct": 0.54
      },
      {
        "name": "民营医院",
        "change_pct": 0.36
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "疫苗",
        "change_pct": -0.21
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "流感",
        "change_pct": 0.21
      },
      {
        "name": "长寿药NMN",
        "change_pct": 1.22
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.41
      },
      {
        "name": "肝素",
        "change_pct": 0.0
      },
      {
        "name": "基因编辑",
        "change_pct": 0.27
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      },
      {
        "name": "医美",
        "change_pct": 0.62
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.42
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -0.01
      },
      {
        "name": "减肥药",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 81,
    "hot_rank_chg": 7,
    "stock_cnt": 5874,
    "price": "5.95",
    "change": "-2.46",
    "market_id": "33",
    "circulate_market_value": "4170323100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.77
      },
      {
        "name": "物业管理",
        "change_pct": 0.61
      },
      {
        "name": "预制菜",
        "change_pct": 0.48
      },
      {
        "name": "地摊经济",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "600567",
    "name": "山鹰国际",
    "hot_rank": 84,
    "hot_rank_chg": 666,
    "stock_cnt": 5874,
    "price": "1.01",
    "change": "9.78",
    "market_id": "17",
    "circulate_market_value": "6267512700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.32
      },
      {
        "name": "造纸",
        "change_pct": 1.11
      },
      {
        "name": "包装印刷",
        "change_pct": 1.37
      },
      {
        "name": "固废处理",
        "change_pct": 0.64
      },
      {
        "name": "环保",
        "change_pct": 0.74
      },
      {
        "name": "人民币升值受益",
        "change_pct": 0.89
      },
      {
        "name": "破净股",
        "change_pct": 0.41
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "低价股",
        "change_pct": 0.19
      },
      {
        "name": "回购增持再贷款",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 85,
    "hot_rank_chg": -24,
    "stock_cnt": 5874,
    "price": "4.76",
    "change": "-0.21",
    "market_id": "17",
    "circulate_market_value": "4211550500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.77
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.45
      },
      {
        "name": "强势人气股",
        "change_pct": -0.1
      },
      {
        "name": "信托",
        "change_pct": 0.16
      },
      {
        "name": "民营医院",
        "change_pct": 0.36
      },
      {
        "name": "汽车销售",
        "change_pct": 0.64
      },
      {
        "name": "社区团购",
        "change_pct": 0.55
      },
      {
        "name": "大金融",
        "change_pct": 0.05
      },
      {
        "name": "餐饮",
        "change_pct": 0.13
      },
      {
        "name": "首发经济",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 86,
    "hot_rank_chg": -22,
    "stock_cnt": 5874,
    "price": "8.53",
    "change": "-0.23",
    "market_id": "17",
    "circulate_market_value": "5474410800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.2
      },
      {
        "name": "农业种植",
        "change_pct": 0.45
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.65
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.52
      },
      {
        "name": "休闲食品",
        "change_pct": 0.12
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "食品安全",
        "change_pct": 0.34
      },
      {
        "name": "社区团购",
        "change_pct": 0.55
      },
      {
        "name": "大农业",
        "change_pct": 0.39
      },
      {
        "name": "预制菜",
        "change_pct": 0.48
      },
      {
        "name": "人造肉",
        "change_pct": 0.4
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "002145",
    "name": "钛能化学",
    "hot_rank": 88,
    "hot_rank_chg": 191,
    "stock_cnt": 5874,
    "price": "3.68",
    "change": "-1.07",
    "market_id": "33",
    "circulate_market_value": "14007825000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "磷化工",
        "change_pct": 0.97
      },
      {
        "name": "锂电池",
        "change_pct": 1.3
      },
      {
        "name": "钛白粉",
        "change_pct": 0.49
      },
      {
        "name": "有色 · 钛",
        "change_pct": 1.3
      },
      {
        "name": "有色金属",
        "change_pct": 1.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.14
      },
      {
        "name": "储能",
        "change_pct": 1.11
      },
      {
        "name": "钒电池",
        "change_pct": 0.48
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 0.9
      },
      {
        "name": "回购",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 89,
    "hot_rank_chg": -22,
    "stock_cnt": 5874,
    "price": "3.80",
    "change": "1.06",
    "market_id": "17",
    "circulate_market_value": "4410061300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.44
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.67
      },
      {
        "name": "影视",
        "change_pct": 0.51
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 91,
    "hot_rank_chg": 21,
    "stock_cnt": 5874,
    "price": "4.71",
    "change": "0.64",
    "market_id": "17",
    "circulate_market_value": "11862181500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.72
      },
      {
        "name": "工业大麻",
        "change_pct": 0.84
      },
      {
        "name": "中药",
        "change_pct": 0.39
      },
      {
        "name": "保健品",
        "change_pct": 0.1
      },
      {
        "name": "民营医院",
        "change_pct": 0.36
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "流感",
        "change_pct": 0.21
      },
      {
        "name": "振兴东北",
        "change_pct": 0.49
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "301066",
    "name": "万事利",
    "hot_rank": 92,
    "hot_rank_chg": 144,
    "stock_cnt": 5874,
    "price": "12.36",
    "change": "-2.98",
    "market_id": "33",
    "circulate_market_value": "2881191400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.07
      },
      {
        "name": "纺织服装",
        "change_pct": 0.44
      },
      {
        "name": "流感",
        "change_pct": 0.21
      },
      {
        "name": "数字经济",
        "change_pct": 0.95
      },
      {
        "name": "NFT",
        "change_pct": 0.75
      },
      {
        "name": "化妆品",
        "change_pct": 0.92
      },
      {
        "name": "回购",
        "change_pct": 1.42
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.97
      }
    ]
  },
  {
    "code": "301211",
    "name": "亨迪药业",
    "hot_rank": 94,
    "hot_rank_chg": 63,
    "stock_cnt": 5874,
    "price": "11.00",
    "change": "-0.99",
    "market_id": "33",
    "circulate_market_value": "4593560400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": 0.54
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "流感",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "002900",
    "name": "哈三联",
    "hot_rank": 95,
    "hot_rank_chg": 245,
    "stock_cnt": 5874,
    "price": "9.83",
    "change": "1.55",
    "market_id": "33",
    "circulate_market_value": "1945781700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.18
      },
      {
        "name": "医药",
        "change_pct": 0.3
      },
      {
        "name": "化学原料药",
        "change_pct": 0.4
      },
      {
        "name": "医美",
        "change_pct": 0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.54
      },
      {
        "name": "化妆品",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "600088",
    "name": "中视传媒",
    "hot_rank": 99,
    "hot_rank_chg": 204,
    "stock_cnt": 5874,
    "price": "12.26",
    "change": "-3.01",
    "market_id": "17",
    "circulate_market_value": "4875880500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 1.08
      },
      {
        "name": "央企改革",
        "change_pct": 0.74
      },
      {
        "name": "影视",
        "change_pct": 0.51
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.79
      },
      {
        "name": "旅游",
        "change_pct": 0.31
      },
      {
        "name": "传媒",
        "change_pct": 0.69
      },
      {
        "name": "NFT",
        "change_pct": 0.75
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.01
      },
      {
        "name": "国企改革",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.76
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "38.56", "change": "0.00", "market_id": "33", "circulate_market_value": "29373683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5874, "price": "17.95", "change": "0.73", "market_id": "33", "circulate_market_value": "10472716700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 3, "hot_rank_chg": 12, "stock_cnt": 5874, "price": "3.83", "change": "1.32", "market_id": "17", "circulate_market_value": "8473220300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 1.11}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "光通信", "change_pct": 1.94}, {"name": "林业", "change_pct": 0.88}, {"name": "军民融合", "change_pct": 1.51}, {"name": "军工", "change_pct": 1.5}, {"name": "人造肉", "change_pct": 0.4}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "14.56", "change": "-0.95", "market_id": "33", "circulate_market_value": "8737699500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5874, "price": "8.09", "change": "-10.01", "market_id": "33", "circulate_market_value": "8151397600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.83}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "工业自动化", "change_pct": 1.47}, {"name": "机械", "change_pct": 0.53}, {"name": "智能制造", "change_pct": 1.25}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "信创", "change_pct": 0.96}, {"name": "AI算力芯片", "change_pct": 1.55}]}, {"code": "600467", "name": "好当家", "hot_rank": 6, "hot_rank_chg": 16, "stock_cnt": 5874, "price": "3.78", "change": "5.00", "market_id": "17", "circulate_market_value": "5522558500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.39}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "冷链", "change_pct": 0.52}, {"name": "医药", "change_pct": 0.3}, {"name": "食品", "change_pct": 0.33}, {"name": "食品安全", "change_pct": 0.34}, {"name": "预制菜", "change_pct": 0.48}, {"name": "水产养殖", "change_pct": 1.49}, {"name": "海洋经济", "change_pct": 1.2}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "17.60", "change": "-1.79", "market_id": "17", "circulate_market_value": "19298306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 8, "hot_rank_chg": 9, "stock_cnt": 5874, "price": "13.00", "change": "-1.14", "market_id": "17", "circulate_market_value": "8844155800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600814", "name": "杭州解百", "hot_rank": 9, "hot_rank_chg": 34, "stock_cnt": 5874, "price": "9.19", "change": "10.06", "market_id": "17", "circulate_market_value": "6755372300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "浙江国企改革", "change_pct": 0.67}, {"name": "国企改革", "change_pct": 0.65}, {"name": "医美", "change_pct": 0.62}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "4.45", "change": "2.54", "market_id": "33", "circulate_market_value": "7035322200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.45}, {"name": "体外诊断", "change_pct": 0.41}, {"name": "医疗器械", "change_pct": 0.55}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "基因测序", "change_pct": 0.54}, {"name": "预制菜", "change_pct": 0.48}, {"name": "水产养殖", "change_pct": 1.49}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "海洋经济", "change_pct": 1.2}]}, {"code": "002771", "name": "真视通", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "17.65", "change": "-5.77", "market_id": "33", "circulate_market_value": "3187455100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5874, "price": "9.24", "change": "-10.03", "market_id": "33", "circulate_market_value": "4167485900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.15}, {"name": "手游", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "游戏", "change_pct": 0.67}, {"name": "物联网", "change_pct": 1.15}, {"name": "机器人", "change_pct": 1.42}, {"name": "无人机", "change_pct": 1.51}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "5G消息/RCS", "change_pct": 0.86}, {"name": "低空经济", "change_pct": 1.32}, {"name": "无人物流车", "change_pct": 0.68}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 13, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "417.94", "change": "2.19", "market_id": "33", "circulate_market_value": "463887070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 14, "hot_rank_chg": 11, "stock_cnt": 5874, "price": "5.17", "change": "3.19", "market_id": "33", "circulate_market_value": "4159117600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 0.37}, {"name": "养猪", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "大农业", "change_pct": 0.39}]}, {"code": "600185", "name": "珠免集团", "hot_rank": 15, "hot_rank_chg": 1183, "stock_cnt": 5874, "price": "4.71", "change": "10.05", "market_id": "17", "circulate_market_value": "8878377300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.72}, {"name": "房地产", "change_pct": 0.52}, {"name": "粤港澳大湾区", "change_pct": 0.77}, {"name": "自由贸易港", "change_pct": 0.58}, {"name": "海南自由贸易港", "change_pct": 0.67}, {"name": "横琴新区", "change_pct": 1.43}, {"name": "免税店概念", "change_pct": 0.73}, {"name": "自贸区", "change_pct": 0.53}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 16, "hot_rank_chg": 13, "stock_cnt": 5874, "price": "2.72", "change": "4.21", "market_id": "17", "circulate_market_value": "3582059200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.72}, {"name": "长三角一体化", "change_pct": 0.56}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "装修装饰", "change_pct": 0.96}, {"name": "装配式建筑", "change_pct": 0.86}, {"name": "建筑节能", "change_pct": 0.65}, {"name": "新型城镇化", "change_pct": 0.88}, {"name": "低价股", "change_pct": 0.19}, {"name": "光刻机（胶）", "change_pct": 1.28}, {"name": "旧改", "change_pct": 0.84}]}, {"code": "002122", "name": "汇洲智能", "hot_rank": 17, "hot_rank_chg": 34, "stock_cnt": 5874, "price": "3.80", "change": "5.85", "market_id": "33", "circulate_market_value": "7549921800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 1.29}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "人工智能", "change_pct": 1.07}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "智慧停车", "change_pct": 0.95}, {"name": "大数据", "change_pct": 0.95}, {"name": "风电", "change_pct": 0.95}, {"name": "复牌股", "change_pct": -0.82}, {"name": "智能制造", "change_pct": 1.25}, {"name": "工业母机", "change_pct": 1.75}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 18, "hot_rank_chg": 3, "stock_cnt": 5874, "price": "32.27", "change": "0.00", "market_id": "17", "circulate_market_value": "4707496600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 19, "hot_rank_chg": -7, "stock_cnt": 5874, "price": "2.81", "change": "-0.71", "market_id": "17", "circulate_market_value": "8043266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "游戏", "change_pct": 0.67}, {"name": "影视", "change_pct": 0.51}, {"name": "低价股", "change_pct": 0.19}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 0.76}, {"name": "AI视频", "change_pct": 0.95}]}, {"code": "603960", "name": "克来机电", "hot_rank": 20, "hot_rank_chg": 3, "stock_cnt": 5874, "price": "20.20", "change": "8.60", "market_id": "17", "circulate_market_value": "5296397600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5874, "price": "19.59", "change": "-1.85", "market_id": "33", "circulate_market_value": "9003795100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002872", "name": "天圣制药", "hot_rank": 22, "hot_rank_chg": 104, "stock_cnt": 5874, "price": "7.81", "change": "10.00", "market_id": "33", "circulate_market_value": "1678510600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.39}, {"name": "优化生育（三孩）", "change_pct": 0.45}, {"name": "ST摘帽", "change_pct": 1.29}, {"name": "复牌股", "change_pct": -0.82}, {"name": "医药", "change_pct": 0.3}, {"name": "肝炎概念", "change_pct": 0.34}, {"name": "新冠病毒防治", "change_pct": 0.54}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5874, "price": "208.42", "change": "0.00", "market_id": "33", "circulate_market_value": "887997810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002728", "name": "特一药业", "hot_rank": 24, "hot_rank_chg": 156, "stock_cnt": 5874, "price": "9.19", "change": "10.06", "market_id": "33", "circulate_market_value": "4607028900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.39}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "流感", "change_pct": 0.21}, {"name": "长寿药NMN", "change_pct": 1.22}, {"name": "肝炎概念", "change_pct": 0.34}, {"name": "医美", "change_pct": 0.62}, {"name": "新冠病毒防治", "change_pct": 0.54}]}, {"code": "002642", "name": "荣联科技", "hot_rank": 25, "hot_rank_chg": 2, "stock_cnt": 5874, "price": "8.17", "change": "-4.33", "market_id": "33", "circulate_market_value": "5405111200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.15}, {"name": "边缘计算", "change_pct": 1.17}, {"name": "泛在电力物联网", "change_pct": 0.92}, {"name": "数字孪生", "change_pct": 0.95}, {"name": "精准医疗", "change_pct": 0.45}, {"name": "国产软件", "change_pct": 1.09}, {"name": "金融科技", "change_pct": 0.98}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "人工智能", "change_pct": 1.07}, {"name": "网络安全", "change_pct": 1.12}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "基因测序", "change_pct": 0.54}, {"name": "物联网", "change_pct": 1.15}, {"name": "山东国企改革", "change_pct": 0.74}, {"name": "大数据", "change_pct": 0.95}, {"name": "智慧城市", "change_pct": 0.98}, {"name": "智慧物流", "change_pct": 0.79}, {"name": "智能制造", "change_pct": 1.25}, {"name": "工业互联网", "change_pct": 1.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.95}, {"name": "腾讯概念股", "change_pct": 1.04}, {"name": "信创", "change_pct": 0.96}, {"name": "国资云", "change_pct": 0.73}, {"name": "东数西算/算力", "change_pct": 1.05}, {"name": "数字乡村", "change_pct": 0.78}, {"name": "国企改革", "change_pct": 0.65}, {"name": "智慧政务", "change_pct": 0.87}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "远程办公", "change_pct": 0.76}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "算力租赁", "change_pct": 0.93}, {"name": "AI大模型/智能体", "change_pct": 0.97}, {"name": "星闪概念", "change_pct": 1.55}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 26, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "19.10", "change": "-4.64", "market_id": "17", "circulate_market_value": "8488888900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 27, "hot_rank_chg": -11, "stock_cnt": 5874, "price": "71.99", "change": "3.14", "market_id": "33", "circulate_market_value": "99801301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 28, "hot_rank_chg": -23, "stock_cnt": 5874, "price": "132.00", "change": "0.86", "market_id": "33", "circulate_market_value": "143667220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002197", "name": "证通电子", "hot_rank": 29, "hot_rank_chg": 116, "stock_cnt": 5874, "price": "7.05", "change": "9.98", "market_id": "33", "circulate_market_value": "3764700100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 1.09}, {"name": "深圳本地股", "change_pct": 0.76}, {"name": "ST摘帽", "change_pct": 1.29}, {"name": "金融科技", "change_pct": 0.98}, {"name": "网络安全", "change_pct": 1.12}, {"name": "充电桩", "change_pct": 1.06}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "移动支付", "change_pct": 1.49}, {"name": "教育", "change_pct": 0.28}, {"name": "智慧城市", "change_pct": 0.98}, {"name": "粤港澳大湾区", "change_pct": 0.77}, {"name": "LED", "change_pct": 1.21}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "机器人", "change_pct": 1.42}, {"name": "数字经济", "change_pct": 0.95}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "阿里巴巴概念股", "change_pct": 1.03}, {"name": "腾讯概念股", "change_pct": 1.04}, {"name": "信创", "change_pct": 0.96}, {"name": "NFT", "change_pct": 0.75}, {"name": "东数西算/算力", "change_pct": 1.05}, {"name": "数字乡村", "change_pct": 0.78}, {"name": "教育信息化", "change_pct": 0.63}, {"name": "数字人民币", "change_pct": 1.05}, {"name": "智慧政务", "change_pct": 0.87}, {"name": "医疗信息化", "change_pct": 0.67}, {"name": "华为鸿蒙", "change_pct": 1.18}, {"name": "华为云·鲲鹏", "change_pct": 1.15}, {"name": "智慧灯杆", "change_pct": 1.36}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "算力租赁", "change_pct": 0.93}]}, {"code": "000823", "name": "超声电子", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5874, "price": "19.11", "change": "-1.09", "market_id": "33", "circulate_market_value": "11369153700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 31, "hot_rank_chg": 10, "stock_cnt": 5874, "price": "22.16", "change": "2.12", "market_id": "33", "circulate_market_value": "10631817200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 32, "hot_rank_chg": -24, "stock_cnt": 5874, "price": "185.99", "change": "2.59", "market_id": "33", "circulate_market_value": "233366070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002651", "name": "利君股份", "hot_rank": 33, "hot_rank_chg": 53, "stock_cnt": 5874, "price": "8.69", "change": "10.00", "market_id": "33", "circulate_market_value": "4913879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "业绩爆雷", "change_pct": 1.93}, {"name": "通用航空", "change_pct": 1.66}, {"name": "大飞机", "change_pct": 1.65}, {"name": "军工", "change_pct": 1.5}, {"name": "无人机", "change_pct": 1.51}, {"name": "航天", "change_pct": 2.28}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 34, "hot_rank_chg": 40, "stock_cnt": 5874, "price": "10.81", "change": "0.56", "market_id": "17", "circulate_market_value": "7199460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}]}, {"code": "300703", "name": "创源股份", "hot_rank": 35, "hot_rank_chg": 35, "stock_cnt": 5874, "price": "16.13", "change": "-9.38", "market_id": "33", "circulate_market_value": "2736641300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600280", "name": "中央商场", "hot_rank": 36, "hot_rank_chg": 141, "stock_cnt": 5874, "price": "3.10", "change": "9.93", "market_id": "17", "circulate_market_value": "3497837800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}, {"name": "低价股", "change_pct": 0.19}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 37, "hot_rank_chg": 224, "stock_cnt": 5874, "price": "8.43", "change": "10.05", "market_id": "33", "circulate_market_value": "8935422100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 0.84}, {"name": "电子烟", "change_pct": 1.61}, {"name": "一带一路", "change_pct": 0.83}, {"name": "造纸", "change_pct": 1.11}, {"name": "包装印刷", "change_pct": 1.37}, {"name": "卫星互联网", "change_pct": 2.69}, {"name": "太空算力", "change_pct": 4.57}]}, {"code": "000711", "name": "京蓝科技", "hot_rank": 38, "hot_rank_chg": 4, "stock_cnt": 5874, "price": "4.40", "change": "-2.65", "market_id": "33", "circulate_market_value": "10370865400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.94}, {"name": "ST摘帽", "change_pct": 1.29}, {"name": "物联网", "change_pct": 1.15}, {"name": "大数据", "change_pct": 0.95}, {"name": "固废处理", "change_pct": 0.64}, {"name": "智慧城市", "change_pct": 0.98}, {"name": "有色 · 锌", "change_pct": 1.81}, {"name": "有色金属", "change_pct": 1.26}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 0.74}, {"name": "土壤修复", "change_pct": 0.49}, {"name": "磷化铟", "change_pct": 2.38}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 39, "hot_rank_chg": -13, "stock_cnt": 5874, "price": "4.28", "change": "-2.06", "market_id": "17", "circulate_market_value": "5714026700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": 1.03}, {"name": "物联网", "change_pct": 1.15}, {"name": "LED", "change_pct": 1.21}, {"name": "卫星互联网", "change_pct": 2.69}]}, {"code": "603708", "name": "家家悦", "hot_rank": 40, "hot_rank_chg": 366, "stock_cnt": 5874, "price": "10.10", "change": "4.34", "market_id": "17", "circulate_market_value": "6252995200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}, {"name": "社区团购", "change_pct": 0.55}, {"name": "大消费", "change_pct": 0.15}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 41, "hot_rank_chg": -22, "stock_cnt": 5874, "price": "34.14", "change": "1.61", "market_id": "17", "circulate_market_value": "153733750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 42, "hot_rank_chg": 147, "stock_cnt": 5874, "price": "8.50", "change": "0.24", "market_id": "17", "circulate_market_value": "5117250100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 1.34}, {"name": "阿里巴巴概念股", "change_pct": 1.03}, {"name": "腾讯概念股", "change_pct": 1.04}, {"name": "东数西算/算力", "change_pct": 1.05}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "算力租赁", "change_pct": 0.93}]}, {"code": "002584", "name": "西陇科学", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5874, "price": "8.63", "change": "-1.82", "market_id": "33", "circulate_market_value": "4152232500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 0.41}, {"name": "医疗器械", "change_pct": 0.55}, {"name": "锂电池", "change_pct": 1.3}, {"name": "基因测序", "change_pct": 0.54}, {"name": "PCB板", "change_pct": 1.82}, {"name": "医药", "change_pct": 0.3}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "食品安全", "change_pct": 0.34}, {"name": "辅助生殖", "change_pct": 0.41}, {"name": "光刻机（胶）", "change_pct": 1.28}, {"name": "异丙醇", "change_pct": 0.74}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "磷酸铁锂", "change_pct": 0.9}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 44, "hot_rank_chg": -11, "stock_cnt": 5874, "price": "202.00", "change": "1.88", "market_id": "17", "circulate_market_value": "135485100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 45, "hot_rank_chg": -27, "stock_cnt": 5874, "price": "706.00", "change": "2.62", "market_id": "17", "circulate_market_value": "21241930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 46, "hot_rank_chg": 67, "stock_cnt": 5874, "price": "3.14", "change": "-2.79", "market_id": "17", "circulate_market_value": "4011663400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.07}, {"name": "化肥", "change_pct": 0.43}, {"name": "保健品", "change_pct": 0.1}, {"name": "民营医院", "change_pct": 0.36}, {"name": "医药", "change_pct": 0.3}, {"name": "煤化工", "change_pct": 0.02}, {"name": "食品", "change_pct": 0.33}, {"name": "大农业", "change_pct": 0.39}, {"name": "干细胞", "change_pct": -0.03}, {"name": "阿尔茨海默病", "change_pct": 0.42}]}, {"code": "002275", "name": "桂林三金", "hot_rank": 47, "hot_rank_chg": 82, "stock_cnt": 5874, "price": "13.40", "change": "-3.04", "market_id": "33", "circulate_market_value": "7567667500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603122", "name": "合富中国", "hot_rank": 48, "hot_rank_chg": 57, "stock_cnt": 5874, "price": "9.72", "change": "-3.67", "market_id": "17", "circulate_market_value": "3869071600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 0.41}, {"name": "医疗器械", "change_pct": 0.55}, {"name": "人工智能", "change_pct": 1.07}, {"name": "医药商业", "change_pct": 0.03}, {"name": "福建自贸/海西概念", "change_pct": 0.79}, {"name": "医药", "change_pct": 0.3}, {"name": "猴痘概念", "change_pct": 0.32}, {"name": "自贸区", "change_pct": 0.53}, {"name": "医疗耗材供应链SPD", "change_pct": 0.27}, {"name": "AI医疗", "change_pct": 0.55}]}, {"code": "600156", "name": "华升股份", "hot_rank": 49, "hot_rank_chg": -14, "stock_cnt": 5874, "price": "8.97", "change": "-3.75", "market_id": "17", "circulate_market_value": "3606933000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.72}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "纺织服装", "change_pct": 0.44}, {"name": "湖南国企改革", "change_pct": 0.65}, {"name": "外贸受益概念", "change_pct": 0.89}, {"name": "东数西算/算力", "change_pct": 1.05}, {"name": "国企改革", "change_pct": 0.65}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "液冷服务器", "change_pct": 1.34}]}, {"code": "605018", "name": "长华集团", "hot_rank": 50, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "12.11", "change": "-7.06", "market_id": "17", "circulate_market_value": "5692496800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.1}, {"name": "汽车零部件", "change_pct": 1.09}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "新能源车零部件", "change_pct": 1.2}, {"name": "人形机器人", "change_pct": 1.52}, {"name": "飞行汽车/eVTOL", "change_pct": 1.23}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 51, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "22.76", "change": "-0.17", "market_id": "33", "circulate_market_value": "11599186800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 52, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "52.00", "change": "4.82", "market_id": "17", "circulate_market_value": "15520890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 53, "hot_rank_chg": -3, "stock_cnt": 5874, "price": "4.18", "change": "-0.71", "market_id": "17", "circulate_market_value": "5456864200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.1}, {"name": "高速公路", "change_pct": 0.18}, {"name": "振兴东北", "change_pct": 0.49}, {"name": "黑龙江自贸区", "change_pct": -0.23}]}, {"code": "000756", "name": "新华制药", "hot_rank": 54, "hot_rank_chg": 86, "stock_cnt": 5874, "price": "11.97", "change": "-1.56", "market_id": "33", "circulate_market_value": "5971508700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.18}, {"name": "动物保健", "change_pct": 0.65}, {"name": "维生素", "change_pct": 0.54}, {"name": "保健品", "change_pct": 0.1}, {"name": "山东国企改革", "change_pct": 0.74}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "食品", "change_pct": 0.33}, {"name": "肝炎概念", "change_pct": 0.34}, {"name": "宠物经济", "change_pct": 0.54}, {"name": "国企改革", "change_pct": 0.65}, {"name": "医美", "change_pct": 0.62}, {"name": "阿尔茨海默病", "change_pct": 0.42}, {"name": "生物安全", "change_pct": 0.94}, {"name": "合成生物", "change_pct": 0.53}]}, {"code": "300086", "name": "康芝药业", "hot_rank": 55, "hot_rank_chg": 42, "stock_cnt": 5874, "price": "5.17", "change": "6.60", "market_id": "33", "circulate_market_value": "2278328600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.39}, {"name": "优化生育（三孩）", "change_pct": 0.45}, {"name": "医药", "change_pct": 0.3}, {"name": "海南概念", "change_pct": 1.07}, {"name": "流感", "change_pct": 0.21}, {"name": "自由贸易港", "change_pct": 0.58}, {"name": "海南自由贸易港", "change_pct": 0.67}, {"name": "肝炎概念", "change_pct": 0.34}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "自贸区", "change_pct": 0.53}, {"name": "驱蚊概念", "change_pct": 0.86}]}, {"code": "601398", "name": "工商银行", "hot_rank": 56, "hot_rank_chg": -36, "stock_cnt": 5874, "price": "9.10", "change": "-1.09", "market_id": "17", "circulate_market_value": "2453471100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 0.83}, {"name": "高股息", "change_pct": 0.08}, {"name": "银行", "change_pct": -0.24}, {"name": "白马股", "change_pct": 0.33}, {"name": "破净股", "change_pct": 0.41}, {"name": "大金融", "change_pct": 0.05}]}, {"code": "002724", "name": "海洋王", "hot_rank": 57, "hot_rank_chg": -17, "stock_cnt": 5874, "price": "9.46", "change": "-0.84", "market_id": "33", "circulate_market_value": "5365070100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.1}, {"name": "军民融合", "change_pct": 1.51}, {"name": "物联网", "change_pct": 1.15}, {"name": "LED", "change_pct": 1.21}, {"name": "军工", "change_pct": 1.5}, {"name": "智慧灯杆", "change_pct": 1.36}, {"name": "海洋经济", "change_pct": 1.2}]}, {"code": "601138", "name": "工业富联", "hot_rank": 58, "hot_rank_chg": -30, "stock_cnt": 5874, "price": "40.41", "change": "2.02", "market_id": "17", "circulate_market_value": "801899770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 59, "hot_rank_chg": -27, "stock_cnt": 5874, "price": "38.39", "change": "1.05", "market_id": "17", "circulate_market_value": "32499182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 60, "hot_rank_chg": 5, "stock_cnt": 5874, "price": "11.70", "change": "-0.43", "market_id": "17", "circulate_market_value": "12225187800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.94}, {"name": "上海国企改革", "change_pct": 0.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 0.69}, {"name": "国企改革", "change_pct": 0.65}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 61, "hot_rank_chg": 8, "stock_cnt": 5874, "price": "23.33", "change": "1.57", "market_id": "17", "circulate_market_value": "480639830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 62, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "19.50", "change": "-2.21", "market_id": "33", "circulate_market_value": "3708851300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603360", "name": "百傲化学", "hot_rank": 63, "hot_rank_chg": 139, "stock_cnt": 5874, "price": "10.32", "change": "-2.27", "market_id": "17", "circulate_market_value": "7288228100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 1.7}, {"name": "农药", "change_pct": 0.39}, {"name": "大农业", "change_pct": 0.39}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 65, "hot_rank_chg": -13, "stock_cnt": 5874, "price": "8.55", "change": "-0.70", "market_id": "17", "circulate_market_value": "15297132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.45}, {"name": "纯碱", "change_pct": 0.8}, {"name": "食品", "change_pct": 0.33}, {"name": "土壤修复", "change_pct": 0.49}, {"name": "东数西算/算力", "change_pct": 1.05}, {"name": "OpenClaw概念", "change_pct": 0.94}, {"name": "算力租赁", "change_pct": 0.93}, {"name": "DeepSeek概念股", "change_pct": 1.09}]}, {"code": "600223", "name": "福瑞达", "hot_rank": 66, "hot_rank_chg": 344, "stock_cnt": 5874, "price": "5.98", "change": "8.93", "market_id": "17", "circulate_market_value": "6079081300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.39}, {"name": "养老产业", "change_pct": 0.76}, {"name": "山东国企改革", "change_pct": 0.74}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "腾讯概念股", "change_pct": 1.04}, {"name": "国企改革", "change_pct": 0.65}, {"name": "眼科", "change_pct": 0.57}, {"name": "医美", "change_pct": 0.62}, {"name": "化妆品", "change_pct": 0.92}, {"name": "麦角硫因", "change_pct": 0.31}, {"name": "合成生物", "change_pct": 0.53}, {"name": "微信小店", "change_pct": 0.65}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 67, "hot_rank_chg": -19, "stock_cnt": 5874, "price": "5.62", "change": "-2.26", "market_id": "17", "circulate_market_value": "25936068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 1.08}, {"name": "国产软件", "change_pct": 1.09}, {"name": "锂电池", "change_pct": 1.3}, {"name": "人工智能", "change_pct": 1.07}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "养老产业", "change_pct": 0.76}, {"name": "大飞机", "change_pct": 1.65}, {"name": "军民融合", "change_pct": 1.51}, {"name": "物联网", "change_pct": 1.15}, {"name": "大数据", "change_pct": 0.95}, {"name": "智慧城市", "change_pct": 0.98}, {"name": "军工", "change_pct": 1.5}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "机器人", "change_pct": 1.42}, {"name": "黑色家电", "change_pct": 1.1}, {"name": "家电", "change_pct": 0.68}, {"name": "储能", "change_pct": 1.11}, {"name": "智能制造", "change_pct": 1.25}, {"name": "工业互联网", "change_pct": 1.06}, {"name": "数字经济", "change_pct": 0.95}, {"name": "百度概念股", "change_pct": 0.91}, {"name": "NFT", "change_pct": 0.75}, {"name": "跨境支付", "change_pct": 0.96}, {"name": "华为海思", "change_pct": 1.4}, {"name": "云游戏", "change_pct": 1.13}, {"name": "网红/MCN", "change_pct": 0.72}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "毫米波雷达", "change_pct": 1.94}, {"name": "服务器", "change_pct": 1.23}, {"name": "AI大模型/智能体", "change_pct": 0.97}, {"name": "星闪概念", "change_pct": 1.55}, {"name": "低空经济", "change_pct": 1.32}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5874, "price": "6.80", "change": "-2.16", "market_id": "33", "circulate_market_value": "4948804700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.52}, {"name": "装配式建筑", "change_pct": 0.86}, {"name": "风电", "change_pct": 0.95}, {"name": "环氧丙烷", "change_pct": 0.54}, {"name": "乡村振兴", "change_pct": 0.52}, {"name": "建筑节能", "change_pct": 0.65}, {"name": "旧改", "change_pct": 0.84}]}, {"code": "000158", "name": "常山北明", "hot_rank": 69, "hot_rank_chg": -38, "stock_cnt": 5874, "price": "12.85", "change": "1.82", "market_id": "33", "circulate_market_value": "20439771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.15}, {"name": "国产软件", "change_pct": 1.09}, {"name": "金融科技", "change_pct": 0.98}, {"name": "人工智能", "change_pct": 1.07}, {"name": "网络安全", "change_pct": 1.12}, {"name": "充电桩", "change_pct": 1.06}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "京津冀", "change_pct": 0.74}, {"name": "冷链", "change_pct": 0.52}, {"name": "大数据", "change_pct": 0.95}, {"name": "智慧城市", "change_pct": 0.98}, {"name": "雄安新区", "change_pct": 0.53}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "智能制造", "change_pct": 1.25}, {"name": "工业互联网", "change_pct": 1.06}, {"name": "数字经济", "change_pct": 0.95}, {"name": "阿里巴巴概念股", "change_pct": 1.03}, {"name": "腾讯概念股", "change_pct": 1.04}, {"name": "信创", "change_pct": 0.96}, {"name": "NFT", "change_pct": 0.75}, {"name": "华为昇腾", "change_pct": 1.26}, {"name": "国资云", "change_pct": 0.73}, {"name": "数字乡村", "change_pct": 0.78}, {"name": "智慧政务", "change_pct": 0.87}, {"name": "华为鸿蒙", "change_pct": 1.18}, {"name": "华为云·鲲鹏", "change_pct": 1.15}, {"name": "华为HMS", "change_pct": 1.49}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "算力租赁", "change_pct": 0.93}, {"name": "AI大模型/智能体", "change_pct": 0.97}, {"name": "智谱AI", "change_pct": 1.05}, {"name": "区块链", "change_pct": 0.84}]}, {"code": "600829", "name": "人民同泰", "hot_rank": 70, "hot_rank_chg": 61, "stock_cnt": 5874, "price": "8.21", "change": "-2.15", "market_id": "17", "circulate_market_value": "4760885400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": 0.03}, {"name": "民营医院", "change_pct": 0.36}, {"name": "医药", "change_pct": 0.3}, {"name": "振兴东北", "change_pct": 0.49}, {"name": "宠物经济", "change_pct": 0.54}, {"name": "眼科", "change_pct": 0.57}]}, {"code": "603366", "name": "日出东方", "hot_rank": 71, "hot_rank_chg": -35, "stock_cnt": 5874, "price": "9.54", "change": "-1.04", "market_id": "17", "circulate_market_value": "7756478900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.1}, {"name": "充电桩", "change_pct": 1.06}, {"name": "光伏", "change_pct": 1.44}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "家电", "change_pct": 0.68}, {"name": "储能", "change_pct": 1.11}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.83}, {"name": "华为鸿蒙", "change_pct": 1.18}, {"name": "厨卫家电", "change_pct": 0.62}, {"name": "华为产业链", "change_pct": 1.25}]}, {"code": "000725", "name": "京东方A", "hot_rank": 72, "hot_rank_chg": -23, "stock_cnt": 5874, "price": "4.46", "change": "0.68", "market_id": "33", "circulate_market_value": "156886300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.67}, {"name": "手机产业链", "change_pct": 1.51}, {"name": "超高清视频", "change_pct": 1.08}, {"name": "苹果产业链", "change_pct": 1.8}, {"name": "电竞", "change_pct": 0.89}, {"name": "半导体", "change_pct": 1.7}, {"name": "人工智能", "change_pct": 1.07}, {"name": "互联网医疗", "change_pct": 0.32}, {"name": "VR&AR", "change_pct": 1.45}, {"name": "OLED", "change_pct": 1.41}, {"name": "京津冀", "change_pct": 0.74}, {"name": "物联网", "change_pct": 1.15}, {"name": "指纹识别", "change_pct": 1.24}, {"name": "汽车零部件", "change_pct": 1.09}, {"name": "白马股", "change_pct": 0.33}, {"name": "智能制造", "change_pct": 1.25}, {"name": "小米概念股", "change_pct": 1.36}, {"name": "国产芯片", "change_pct": 1.66}, {"name": "液晶面板/LCD", "change_pct": 1.27}, {"name": "全息概念", "change_pct": 1.03}, {"name": "理想汽车概念股", "change_pct": 1.1}, {"name": "MicroLED", "change_pct": 1.66}, {"name": "钙钛矿电池", "change_pct": 1.83}, {"name": "智能手表", "change_pct": 1.19}, {"name": "MiniLED", "change_pct": 1.64}, {"name": "传感器", "change_pct": 1.68}, {"name": "大硅片", "change_pct": 1.31}, {"name": "AI PC", "change_pct": 1.51}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "光电共封装CPO", "change_pct": 1.99}, {"name": "智能眼镜/MR头显", "change_pct": 1.59}, {"name": "玻璃基板封装", "change_pct": 1.69}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 73, "hot_rank_chg": -15, "stock_cnt": 5874, "price": "34.79", "change": "1.73", "market_id": "17", "circulate_market_value": "85362353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605136", "name": "丽人丽妆", "hot_rank": 74, "hot_rank_chg": 304, "stock_cnt": 5874, "price": "7.97", "change": "1.53", "market_id": "17", "circulate_market_value": "3191654200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.72}, {"name": "新零售", "change_pct": 0.77}, {"name": "优化生育（三孩）", "change_pct": 0.45}, {"name": "阿里巴巴概念股", "change_pct": 1.03}, {"name": "预制菜", "change_pct": 0.48}, {"name": "化妆品", "change_pct": 0.92}, {"name": "麦角硫因", "change_pct": 0.31}]}, {"code": "001358", "name": "兴欣新材", "hot_rank": 75, "hot_rank_chg": 8, "stock_cnt": 5874, "price": "33.28", "change": "-0.78", "market_id": "33", "circulate_market_value": "1696491500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 76, "hot_rank_chg": 257, "stock_cnt": 5874, "price": "9.28", "change": "5.21", "market_id": "33", "circulate_market_value": "4775925600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": 1.51}, {"name": "5G", "change_pct": 1.84}, {"name": "光通信", "change_pct": 1.94}, {"name": "教育", "change_pct": 0.28}, {"name": "毫米波通信", "change_pct": 3.47}, {"name": "6G", "change_pct": 2.4}, {"name": "卫星互联网", "change_pct": 2.69}, {"name": "华为产业链", "change_pct": 1.25}, {"name": "毫米波雷达", "change_pct": 1.94}, {"name": "5.5G概念", "change_pct": 2.55}]}, {"code": "603466", "name": "风语筑", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5874, "price": "15.16", "change": "-0.26", "market_id": "17", "circulate_market_value": "9017652600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002038", "name": "双鹭药业", "hot_rank": 78, "hot_rank_chg": 177, "stock_cnt": 5874, "price": "4.92", "change": "0.41", "market_id": "33", "circulate_market_value": "4192798300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 0.84}, {"name": "创新药", "change_pct": 0.18}, {"name": "基因测序", "change_pct": 0.54}, {"name": "民营医院", "change_pct": 0.36}, {"name": "医药", "change_pct": 0.3}, {"name": "疫苗", "change_pct": -0.21}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "流感", "change_pct": 0.21}, {"name": "长寿药NMN", "change_pct": 1.22}, {"name": "辅助生殖", "change_pct": 0.41}, {"name": "肝素", "change_pct": 0.0}, {"name": "基因编辑", "change_pct": 0.27}, {"name": "肝炎概念", "change_pct": 0.34}, {"name": "医美", "change_pct": 0.62}, {"name": "阿尔茨海默病", "change_pct": 0.42}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "肿瘤疫苗", "change_pct": -0.01}, {"name": "减肥药", "change_pct": 0.33}]}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 79, "hot_rank_chg": 30, "stock_cnt": 5874, "price": "13.72", "change": "-8.17", "market_id": "33", "circulate_market_value": "5021795900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 80, "hot_rank_chg": -43, "stock_cnt": 5874, "price": "78.86", "change": "-1.79", "market_id": "33", "circulate_market_value": "6204232800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 81, "hot_rank_chg": 7, "stock_cnt": 5874, "price": "5.95", "change": "-2.46", "market_id": "33", "circulate_market_value": "4170323100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "粤港澳大湾区", "change_pct": 0.77}, {"name": "物业管理", "change_pct": 0.61}, {"name": "预制菜", "change_pct": 0.48}, {"name": "地摊经济", "change_pct": 0.59}]}, {"code": "603926", "name": "铁流股份", "hot_rank": 82, "hot_rank_chg": 159, "stock_cnt": 5874, "price": "17.50", "change": "-2.62", "market_id": "17", "circulate_market_value": "4039675700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 83, "hot_rank_chg": -17, "stock_cnt": 5874, "price": "31.94", "change": "-0.06", "market_id": "17", "circulate_market_value": "781514870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600567", "name": "山鹰国际", "hot_rank": 84, "hot_rank_chg": 666, "stock_cnt": 5874, "price": "1.01", "change": "9.78", "market_id": "17", "circulate_market_value": "6267512700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.32}, {"name": "造纸", "change_pct": 1.11}, {"name": "包装印刷", "change_pct": 1.37}, {"name": "固废处理", "change_pct": 0.64}, {"name": "环保", "change_pct": 0.74}, {"name": "人民币升值受益", "change_pct": 0.89}, {"name": "破净股", "change_pct": 0.41}, {"name": "数字经济", "change_pct": 0.95}, {"name": "低价股", "change_pct": 0.19}, {"name": "回购增持再贷款", "change_pct": 1.31}]}, {"code": "600327", "name": "大东方", "hot_rank": 85, "hot_rank_chg": -24, "stock_cnt": 5874, "price": "4.76", "change": "-0.21", "market_id": "17", "circulate_market_value": "4211550500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.77}, {"name": "优化生育（三孩）", "change_pct": 0.45}, {"name": "强势人气股", "change_pct": -0.1}, {"name": "信托", "change_pct": 0.16}, {"name": "民营医院", "change_pct": 0.36}, {"name": "汽车销售", "change_pct": 0.64}, {"name": "社区团购", "change_pct": 0.55}, {"name": "大金融", "change_pct": 0.05}, {"name": "餐饮", "change_pct": 0.13}, {"name": "首发经济", "change_pct": 0.49}]}, {"code": "600127", "name": "金健米业", "hot_rank": 86, "hot_rank_chg": -22, "stock_cnt": 5874, "price": "8.53", "change": "-0.23", "market_id": "17", "circulate_market_value": "5474410800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.2}, {"name": "农业种植", "change_pct": 0.45}, {"name": "湖南国企改革", "change_pct": 0.65}, {"name": "乡村振兴", "change_pct": 0.52}, {"name": "休闲食品", "change_pct": 0.12}, {"name": "食品", "change_pct": 0.33}, {"name": "食品安全", "change_pct": 0.34}, {"name": "社区团购", "change_pct": 0.55}, {"name": "大农业", "change_pct": 0.39}, {"name": "预制菜", "change_pct": 0.48}, {"name": "人造肉", "change_pct": 0.4}, {"name": "国企改革", "change_pct": 0.65}]}, {"code": "000815", "name": "美利云", "hot_rank": 87, "hot_rank_chg": -15, "stock_cnt": 5874, "price": "14.01", "change": "-0.92", "market_id": "33", "circulate_market_value": "9740635100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002145", "name": "钛能化学", "hot_rank": 88, "hot_rank_chg": 191, "stock_cnt": 5874, "price": "3.68", "change": "-1.07", "market_id": "33", "circulate_market_value": "14007825000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "磷化工", "change_pct": 0.97}, {"name": "锂电池", "change_pct": 1.3}, {"name": "钛白粉", "change_pct": 0.49}, {"name": "有色 · 钛", "change_pct": 1.3}, {"name": "有色金属", "change_pct": 1.26}, {"name": "新能源汽车", "change_pct": 1.14}, {"name": "储能", "change_pct": 1.11}, {"name": "钒电池", "change_pct": 0.48}, {"name": "磷酸铁锂", "change_pct": 0.9}, {"name": "回购", "change_pct": 1.42}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 89, "hot_rank_chg": -22, "stock_cnt": 5874, "price": "3.80", "change": "1.06", "market_id": "17", "circulate_market_value": "4410061300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.44}, {"name": "浙江国企改革", "change_pct": 0.67}, {"name": "影视", "change_pct": 0.51}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 0.76}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 90, "hot_rank_chg": 3, "stock_cnt": 5874, "price": "97.74", "change": "1.81", "market_id": "17", "circulate_market_value": "26936008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 91, "hot_rank_chg": 21, "stock_cnt": 5874, "price": "4.71", "change": "0.64", "market_id": "17", "circulate_market_value": "11862181500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.72}, {"name": "工业大麻", "change_pct": 0.84}, {"name": "中药", "change_pct": 0.39}, {"name": "保健品", "change_pct": 0.1}, {"name": "民营医院", "change_pct": 0.36}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "流感", "change_pct": 0.21}, {"name": "振兴东北", "change_pct": 0.49}, {"name": "食品", "change_pct": 0.33}, {"name": "肝炎概念", "change_pct": 0.34}]}, {"code": "301066", "name": "万事利", "hot_rank": 92, "hot_rank_chg": 144, "stock_cnt": 5874, "price": "12.36", "change": "-2.98", "market_id": "33", "circulate_market_value": "2881191400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.07}, {"name": "纺织服装", "change_pct": 0.44}, {"name": "流感", "change_pct": 0.21}, {"name": "数字经济", "change_pct": 0.95}, {"name": "NFT", "change_pct": 0.75}, {"name": "化妆品", "change_pct": 0.92}, {"name": "回购", "change_pct": 1.42}, {"name": "AI大模型/智能体", "change_pct": 0.97}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 93, "hot_rank_chg": 50, "stock_cnt": 5874, "price": "48.20", "change": "5.63", "market_id": "17", "circulate_market_value": "56995976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301211", "name": "亨迪药业", "hot_rank": 94, "hot_rank_chg": 63, "stock_cnt": 5874, "price": "11.00", "change": "-0.99", "market_id": "33", "circulate_market_value": "4593560400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": 0.54}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "流感", "change_pct": 0.21}]}, {"code": "002900", "name": "哈三联", "hot_rank": 95, "hot_rank_chg": 245, "stock_cnt": 5874, "price": "9.83", "change": "1.55", "market_id": "33", "circulate_market_value": "1945781700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.18}, {"name": "医药", "change_pct": 0.3}, {"name": "化学原料药", "change_pct": 0.4}, {"name": "医美", "change_pct": 0.62}, {"name": "新冠病毒防治", "change_pct": 0.54}, {"name": "化妆品", "change_pct": 0.92}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 96, "hot_rank_chg": -37, "stock_cnt": 5874, "price": "81.82", "change": "2.93", "market_id": "33", "circulate_market_value": "158124430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 97, "hot_rank_chg": 138, "stock_cnt": 5874, "price": "14.63", "change": "4.42", "market_id": "33", "circulate_market_value": "6157255400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 98, "hot_rank_chg": 226, "stock_cnt": 5874, "price": "27.86", "change": "9.99", "market_id": "33", "circulate_market_value": "13599556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600088", "name": "中视传媒", "hot_rank": 99, "hot_rank_chg": 204, "stock_cnt": 5874, "price": "12.26", "change": "-3.01", "market_id": "17", "circulate_market_value": "4875880500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 1.08}, {"name": "央企改革", "change_pct": 0.74}, {"name": "影视", "change_pct": 0.51}, {"name": "直播/短视频", "change_pct": 0.79}, {"name": "旅游", "change_pct": 0.31}, {"name": "传媒", "change_pct": 0.69}, {"name": "NFT", "change_pct": 0.75}, {"name": "虚拟数字人", "change_pct": 1.01}, {"name": "国企改革", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 0.76}]}, {"code": "600584", "name": "长电科技", "hot_rank": 100, "hot_rank_chg": -43, "stock_cnt": 5874, "price": "48.00", "change": "1.72", "market_id": "17", "circulate_market_value": "85891899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};