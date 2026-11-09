const UPDATE_TIME = "2026-11-09 04:15";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": 1.96,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续254天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.59,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "短剧游戏",
    "rise": 0.04,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.5,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续325天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "光伏概念",
    "rise": 0.34,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "光伏龙头ETF",
    "code": "885531"
  },
  {
    "name": "AI应用",
    "rise": -0.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "机器人概念",
    "rise": 0.94,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI视频",
    "rise": 0.35,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886068"
  },
  {
    "name": "PCB概念",
    "rise": 2.0,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续148天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "创新药",
    "rise": 0.04,
    "rate": 0,
    "tag": "",
    "hotTag": "连续155天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "减速器",
    "rise": 1.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "冰雪产业",
    "rise": 1.3,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "卫星导航",
    "rise": 2.17,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "885574"
  },
  {
    "name": "6G概念",
    "rise": 2.98,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电信ETF",
    "code": "886037"
  },
  {
    "name": "存储芯片",
    "rise": 1.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续278天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": 0.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "军工",
    "rise": 1.23,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "885700"
  },
  {
    "name": "算力租赁",
    "rise": 0.37,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 2.22,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "财通科创LOF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": 1.12,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 3,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "AI巨头亲自下场抢电！Anthropic斥资34亿美元，买下1.7GW燃气发电机",
    "desc": "",
    "heat": 396850,
    "direction": "燃气",
    "themes": [
      "燃气",
      "煤炭开采加工"
    ],
    "stocks": [
      {
        "name": "东方环宇",
        "code": "603706",
        "chg": 10.027248
      }
    ]
  },
  {
    "title": "SpaceX(SPCX.US)掘金通信与AI，Rocket Lab(RKLB.US)迈向百次发射! 股价震荡之下，商业航天酝酿新一轮上行?",
    "desc": "",
    "heat": 374975,
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
        "name": "信维通信",
        "code": "300136",
        "chg": 15.271868
      }
    ]
  },
  {
    "title": "苹果研究团队披露机器人“大脑”进展 单项任务测试平均成功率为91%",
    "desc": "",
    "heat": 239551,
    "direction": "机器人大脑",
    "themes": [
      "机器人大脑",
      "物理AI",
      "电机",
      "减速器",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "祥明智能",
        "code": "301226",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "一体建强通信网、算力网、智能网 中国移动明年采购投资总额将超5000亿元",
    "desc": "",
    "heat": 230477,
    "direction": "国产算力",
    "themes": [
      "国资云",
      "算力租赁",
      "东数西算(算力)",
      "6G概念"
    ],
    "stocks": [
      {
        "name": "通则康威",
        "code": "301718",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "微短剧进入精品化新周期",
    "desc": "",
    "heat": 38730,
    "direction": "AI短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "短剧游戏",
      "AI视频",
      "影视院线"
    ],
    "stocks": [
      {
        "name": "文投控股",
        "code": "600715",
        "chg": 10.212766
      }
    ]
  },
  {
    "title": "国务院常务会议提出 完善资本市场稳市机制",
    "desc": "",
    "heat": 30997,
    "direction": "大金融",
    "themes": [
      "互联网金融",
      "银行",
      "证券",
      "保险"
    ],
    "stocks": [
      {
        "name": "东方嘉盛",
        "code": "002889",
        "chg": 9.993293
      }
    ]
  },
  {
    "title": "普京确认俄美乌三方会谈将于11月10日在阿布扎比举行",
    "desc": "",
    "heat": 0,
    "direction": "俄乌重建",
    "themes": [
      "国际工程承包",
      "工程机械出口"
    ],
    "stocks": [
      {
        "name": "北新路桥",
        "code": "002307",
        "chg": 3.448276
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "SpaceX概念股",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+3.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+3.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "卫星互联网",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+3.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+2.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "6G",
    "change": "+2.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+2.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "冰雪产业",
    "change": "+2.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+2.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+2.53%",
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
    "hot_rank_chg": 0,
    "stock_cnt": 5825,
    "price": "4.32",
    "change": "8.82",
    "market_id": "33",
    "circulate_market_value": "6829795900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.7
      },
      {
        "name": "体外诊断",
        "change_pct": 0.15
      },
      {
        "name": "医疗器械",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "基因测序",
        "change_pct": 0.9
      },
      {
        "name": "预制菜",
        "change_pct": 0.23
      },
      {
        "name": "水产养殖",
        "change_pct": 0.8
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.15
      },
      {
        "name": "海洋经济",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 2,
    "hot_rank_chg": 19,
    "stock_cnt": 5825,
    "price": "9.57",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5743117100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.02
      },
      {
        "name": "边缘计算",
        "change_pct": 0.29
      },
      {
        "name": "核电",
        "change_pct": 0.83
      },
      {
        "name": "海工装备",
        "change_pct": 0.32
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.8
      },
      {
        "name": "冷链",
        "change_pct": 0.57
      },
      {
        "name": "地热",
        "change_pct": 1.27
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "碳中和",
        "change_pct": -0.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 2.57
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.62
      },
      {
        "name": "热泵",
        "change_pct": 1.64
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.5
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.62
      },
      {
        "name": "海洋经济",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5825,
    "price": "5.66",
    "change": "4.82",
    "market_id": "17",
    "circulate_market_value": "7556399800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "LED",
        "change_pct": 0.79
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.05
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 4,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "9.89",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "8041045700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "家电",
        "change_pct": 0.69
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.64
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.32
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.99
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 5,
    "hot_rank_chg": 7,
    "stock_cnt": 5825,
    "price": "11.02",
    "change": "7.30",
    "market_id": "33",
    "circulate_market_value": "10210245800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 6.63
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.44
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.36
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.26
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5825,
    "price": "5.08",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "5895555700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "纺织服装",
        "change_pct": 0.14
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.2
      },
      {
        "name": "影视",
        "change_pct": 0.72
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 11,
    "hot_rank_chg": -5,
    "stock_cnt": 5825,
    "price": "2.55",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "11217474100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.82
      },
      {
        "name": "京津冀",
        "change_pct": -0.17
      },
      {
        "name": "旅游",
        "change_pct": -0.27
      },
      {
        "name": "园林",
        "change_pct": -0.05
      },
      {
        "name": "海绵城市",
        "change_pct": -0.47
      },
      {
        "name": "固废处理",
        "change_pct": 0.03
      },
      {
        "name": "雄安新区",
        "change_pct": 0.06
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.15
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": 0.06
      },
      {
        "name": "碳中和",
        "change_pct": -0.05
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.25
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.62
      },
      {
        "name": "土壤修复",
        "change_pct": 0.0
      },
      {
        "name": "核污染防治",
        "change_pct": 1.04
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.06
      },
      {
        "name": "低价股",
        "change_pct": 0.05
      },
      {
        "name": "西部大开发",
        "change_pct": 0.56
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 12,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
    "price": "5.40",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "4777809400.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.8
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.3
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "信托",
        "change_pct": 0.16
      },
      {
        "name": "民营医院",
        "change_pct": -0.1
      },
      {
        "name": "社区团购",
        "change_pct": 0.82
      },
      {
        "name": "大金融",
        "change_pct": 0.34
      },
      {
        "name": "餐饮",
        "change_pct": -0.7
      },
      {
        "name": "首发经济",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 16,
    "hot_rank_chg": 31,
    "stock_cnt": 5825,
    "price": "10.54",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "11171927500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "太空算力",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.27
      },
      {
        "name": "电子烟",
        "change_pct": 1.12
      },
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "造纸",
        "change_pct": -0.09
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "包装印刷",
        "change_pct": -0.21
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.05
      },
      {
        "name": "太空算力",
        "change_pct": 3.81
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 18,
    "hot_rank_chg": -5,
    "stock_cnt": 5825,
    "price": "5.51",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "4745005700.00",
    "change_type": "1",
    "change_section": "11",
    "change_days": "7",
    "change_reason": "光伏边框",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.66
      },
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.79
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "有色金属",
        "change_pct": 0.79
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.97
      },
      {
        "name": "自贸区",
        "change_pct": 0.44
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 19,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "4.19",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "5469918900.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "高速公路",
        "change_pct": 1.16
      },
      {
        "name": "振兴东北",
        "change_pct": 1.2
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 3.04
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 21,
    "hot_rank_chg": 9,
    "stock_cnt": 5825,
    "price": "2.59",
    "change": "10.21",
    "market_id": "17",
    "circulate_market_value": "7413544100.00",
    "change_type": "1",
    "change_section": "10",
    "change_days": "6",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "游戏",
        "change_pct": -0.19
      },
      {
        "name": "影视",
        "change_pct": 0.72
      },
      {
        "name": "低价股",
        "change_pct": 0.05
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.11
      },
      {
        "name": "AI视频",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 24,
    "hot_rank_chg": -2,
    "stock_cnt": 5825,
    "price": "10.92",
    "change": "-2.41",
    "market_id": "17",
    "circulate_market_value": "7008272700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.07
      },
      {
        "name": "农业种植",
        "change_pct": 0.27
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.55
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.25
      },
      {
        "name": "休闲食品",
        "change_pct": 0.55
      },
      {
        "name": "食品",
        "change_pct": -0.05
      },
      {
        "name": "食品安全",
        "change_pct": 0.53
      },
      {
        "name": "社区团购",
        "change_pct": 0.82
      },
      {
        "name": "大农业",
        "change_pct": -0.07
      },
      {
        "name": "预制菜",
        "change_pct": 0.23
      },
      {
        "name": "人造肉",
        "change_pct": 0.08
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 31,
    "hot_rank_chg": -4,
    "stock_cnt": 5825,
    "price": "9.95",
    "change": "3.97",
    "market_id": "33",
    "circulate_market_value": "9286550000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": 0.74
      },
      {
        "name": "新疆概念",
        "change_pct": 0.7
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "风电",
        "change_pct": 0.29
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 32,
    "hot_rank_chg": 136,
    "stock_cnt": 5825,
    "price": "9.89",
    "change": "4.11",
    "market_id": "33",
    "circulate_market_value": "9405735800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.84
      },
      {
        "name": "大飞机",
        "change_pct": 1.39
      },
      {
        "name": "北斗导航",
        "change_pct": 1.61
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.25
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.02
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "碳纤维",
        "change_pct": 0.56
      },
      {
        "name": "无人机",
        "change_pct": 1.04
      },
      {
        "name": "智能制造",
        "change_pct": 0.71
      },
      {
        "name": "3D打印",
        "change_pct": 1.15
      },
      {
        "name": "航天",
        "change_pct": 2.38
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.05
      },
      {
        "name": "国资入股",
        "change_pct": 0.45
      },
      {
        "name": "低空经济",
        "change_pct": 1.11
      },
      {
        "name": "海洋经济",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 35,
    "hot_rank_chg": 547,
    "stock_cnt": 5825,
    "price": "8.70",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "9938366400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 6.63
      },
      {
        "name": "核电",
        "change_pct": 0.83
      },
      {
        "name": "大飞机",
        "change_pct": 1.39
      },
      {
        "name": "大气治理",
        "change_pct": 0.33
      },
      {
        "name": "玻纤",
        "change_pct": 2.6
      },
      {
        "name": "环保",
        "change_pct": 0.06
      },
      {
        "name": "核污染防治",
        "change_pct": 1.04
      },
      {
        "name": "航天",
        "change_pct": 2.38
      },
      {
        "name": "生物安全",
        "change_pct": 0.75
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 36,
    "hot_rank_chg": 25,
    "stock_cnt": 5825,
    "price": "6.18",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4728569700.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "5",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.25
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.3
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "医药商业",
        "change_pct": -0.38
      },
      {
        "name": "保健品",
        "change_pct": -0.1
      },
      {
        "name": "民营医院",
        "change_pct": -0.1
      },
      {
        "name": "医药",
        "change_pct": 0.04
      },
      {
        "name": "食品",
        "change_pct": -0.05
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.26
      },
      {
        "name": "口腔",
        "change_pct": -0.55
      },
      {
        "name": "医美",
        "change_pct": -0.25
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 37,
    "hot_rank_chg": -21,
    "stock_cnt": 5825,
    "price": "10.75",
    "change": "-3.07",
    "market_id": "33",
    "circulate_market_value": "5439119800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.24
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "大气治理",
        "change_pct": 0.33
      },
      {
        "name": "雄安新区",
        "change_pct": 0.06
      },
      {
        "name": "耐火材料",
        "change_pct": 0.06
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "环保",
        "change_pct": 0.06
      },
      {
        "name": "船舶",
        "change_pct": 0.34
      },
      {
        "name": "建筑节能",
        "change_pct": 0.42
      },
      {
        "name": "气凝胶",
        "change_pct": -0.27
      },
      {
        "name": "旧改",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 39,
    "hot_rank_chg": 95,
    "stock_cnt": 5825,
    "price": "11.10",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "4606301500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "卫星通信终端",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.62
      },
      {
        "name": "5G",
        "change_pct": 1.81
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.8
      },
      {
        "name": "LED",
        "change_pct": 0.79
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.05
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 2.53
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 47,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
    "price": "5.55",
    "change": "3.16",
    "market_id": "33",
    "circulate_market_value": "6319542800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 0.69
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.25
      },
      {
        "name": "航母",
        "change_pct": 0.79
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "风电",
        "change_pct": 0.29
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 48,
    "hot_rank_chg": 49,
    "stock_cnt": 5825,
    "price": "10.11",
    "change": "0.30",
    "market_id": "17",
    "circulate_market_value": "14889066000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.23
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.16
      },
      {
        "name": "火电",
        "change_pct": 0.08
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.2
      },
      {
        "name": "风电",
        "change_pct": 0.29
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 49,
    "hot_rank_chg": 2,
    "stock_cnt": 5825,
    "price": "8.41",
    "change": "-1.98",
    "market_id": "33",
    "circulate_market_value": "3983651200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "VR&AR",
        "change_pct": 1.14
      },
      {
        "name": "游戏",
        "change_pct": -0.19
      },
      {
        "name": "影视",
        "change_pct": 0.72
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.45
      },
      {
        "name": "动漫",
        "change_pct": -0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.18
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.11
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "600278",
    "name": "东方创业",
    "hot_rank": 51,
    "hot_rank_chg": -23,
    "stock_cnt": 5825,
    "price": "7.83",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "6737861100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.18
      },
      {
        "name": "快递物流",
        "change_pct": 0.09
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.18
      },
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "破净股",
        "change_pct": -0.13
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 0.82
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.43
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "自贸区",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 52,
    "hot_rank_chg": -32,
    "stock_cnt": 5825,
    "price": "5.32",
    "change": "5.98",
    "market_id": "33",
    "circulate_market_value": "5914563200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "草铵膦",
        "change_pct": 0.28
      },
      {
        "name": "农药",
        "change_pct": -0.49
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.09
      },
      {
        "name": "大农业",
        "change_pct": -0.07
      },
      {
        "name": "虫害防治",
        "change_pct": -0.39
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 53,
    "hot_rank_chg": -17,
    "stock_cnt": 5825,
    "price": "12.25",
    "change": "2.34",
    "market_id": "33",
    "circulate_market_value": "6939359000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "石墨烯",
        "change_pct": 0.84
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "物联网",
        "change_pct": 0.46
      },
      {
        "name": "LED",
        "change_pct": 0.79
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.46
      },
      {
        "name": "海洋经济",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 57,
    "hot_rank_chg": 3,
    "stock_cnt": 5825,
    "price": "4.54",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "12042579600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "装修装饰",
        "change_pct": 0.2
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.28
      },
      {
        "name": "破净股",
        "change_pct": -0.13
      },
      {
        "name": "航天",
        "change_pct": 2.38
      },
      {
        "name": "旧改",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 58,
    "hot_rank_chg": -35,
    "stock_cnt": 5825,
    "price": "7.34",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3715680500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "电解液",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 0.8
      },
      {
        "name": "资产重组",
        "change_pct": 0.82
      },
      {
        "name": "仪器仪表",
        "change_pct": 0.68
      },
      {
        "name": "锂电池",
        "change_pct": -0.24
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.69
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "有机硅",
        "change_pct": -0.07
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "供应链金融",
        "change_pct": 0.07
      },
      {
        "name": "服务器",
        "change_pct": 1.97
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 59,
    "hot_rank_chg": -33,
    "stock_cnt": 5825,
    "price": "12.90",
    "change": "4.12",
    "market_id": "17",
    "circulate_market_value": "3774256200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 0.27
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "转基因",
        "change_pct": -0.47
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.25
      },
      {
        "name": "大农业",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 60,
    "hot_rank_chg": -29,
    "stock_cnt": 5825,
    "price": "8.42",
    "change": "4.21",
    "market_id": "17",
    "circulate_market_value": "28307196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.13
      },
      {
        "name": "高管增持",
        "change_pct": 0.63
      },
      {
        "name": "超高清视频",
        "change_pct": 0.34
      },
      {
        "name": "电竞",
        "change_pct": -0.17
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.18
      },
      {
        "name": "游戏",
        "change_pct": -0.19
      },
      {
        "name": "物联网",
        "change_pct": 0.46
      },
      {
        "name": "教育",
        "change_pct": -0.45
      },
      {
        "name": "智慧城市",
        "change_pct": 0.27
      },
      {
        "name": "破净股",
        "change_pct": -0.13
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.46
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "在线教育",
        "change_pct": 0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.06
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 69,
    "hot_rank_chg": -4,
    "stock_cnt": 5825,
    "price": "2.50",
    "change": "-3.10",
    "market_id": "33",
    "circulate_market_value": "14611105000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.31
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.25
      },
      {
        "name": "颗粒硅",
        "change_pct": -1.49
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.44
      },
      {
        "name": "低价股",
        "change_pct": 0.05
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.36
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.26
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 75,
    "hot_rank_chg": 15,
    "stock_cnt": 5825,
    "price": "8.14",
    "change": "0.25",
    "market_id": "33",
    "circulate_market_value": "13243729400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.05
      },
      {
        "name": "电竞",
        "change_pct": -0.17
      },
      {
        "name": "手游",
        "change_pct": -0.29
      },
      {
        "name": "人工智能",
        "change_pct": 0.32
      },
      {
        "name": "游戏",
        "change_pct": -0.19
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.18
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "快手概念股",
        "change_pct": -0.84
      },
      {
        "name": "元宇宙",
        "change_pct": 0.06
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.26
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.46
      },
      {
        "name": "web3.0",
        "change_pct": 0.17
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.09
      },
      {
        "name": "数据要素",
        "change_pct": -0.34
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.5
      },
      {
        "name": "AI营销",
        "change_pct": -0.75
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.13
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.44
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.06
      },
      {
        "name": "人形机器人",
        "change_pct": 1.9
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.11
      },
      {
        "name": "多模态",
        "change_pct": 0.62
      },
      {
        "name": "AI视频",
        "change_pct": -0.03
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.2
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.71
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 76,
    "hot_rank_chg": 22,
    "stock_cnt": 5825,
    "price": "4.19",
    "change": "-1.64",
    "market_id": "33",
    "circulate_market_value": "24531599000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.8
      },
      {
        "name": "水利",
        "change_pct": 0.14
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.45
      },
      {
        "name": "大数据",
        "change_pct": -0.06
      },
      {
        "name": "园林",
        "change_pct": -0.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.86
      },
      {
        "name": "数字经济",
        "change_pct": -0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.18
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.9
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.54
      },
      {
        "name": "快手概念股",
        "change_pct": -0.84
      },
      {
        "name": "IGBT",
        "change_pct": 0.07
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.26
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.09
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.5
      },
      {
        "name": "氮化镓",
        "change_pct": 0.69
      },
      {
        "name": "AI营销",
        "change_pct": -0.75
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.06
      },
      {
        "name": "多模态",
        "change_pct": 0.62
      },
      {
        "name": "AI视频",
        "change_pct": -0.03
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.5
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.71
      },
      {
        "name": "区块链",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 77,
    "hot_rank_chg": 234,
    "stock_cnt": 5825,
    "price": "11.23",
    "change": "3.12",
    "market_id": "17",
    "circulate_market_value": "14422922000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": 0.71
      },
      {
        "name": "工业互联网",
        "change_pct": 0.48
      },
      {
        "name": "培育钻石",
        "change_pct": 1.4
      },
      {
        "name": "金刚线",
        "change_pct": 1.12
      },
      {
        "name": "国资入股",
        "change_pct": 0.45
      },
      {
        "name": "深地经济",
        "change_pct": 0.45
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 79,
    "hot_rank_chg": 13,
    "stock_cnt": 5825,
    "price": "9.10",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "6055194200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "纺织服装",
        "change_pct": 0.14
      },
      {
        "name": "破净股",
        "change_pct": -0.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 81,
    "hot_rank_chg": -3,
    "stock_cnt": 5825,
    "price": "10.98",
    "change": "5.07",
    "market_id": "17",
    "circulate_market_value": "4401684200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.18
      },
      {
        "name": "新零售",
        "change_pct": 0.8
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "物业管理",
        "change_pct": -0.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "地摊经济",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 85,
    "hot_rank_chg": -36,
    "stock_cnt": 5825,
    "price": "11.18",
    "change": "1.08",
    "market_id": "33",
    "circulate_market_value": "3737014700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.2
      },
      {
        "name": "饲料",
        "change_pct": -0.48
      },
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "保健品",
        "change_pct": -0.1
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.21
      },
      {
        "name": "污水处理",
        "change_pct": -0.08
      },
      {
        "name": "环保",
        "change_pct": 0.06
      },
      {
        "name": "食品",
        "change_pct": -0.05
      },
      {
        "name": "预制菜",
        "change_pct": 0.23
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "水产养殖",
        "change_pct": 0.8
      },
      {
        "name": "广西概念",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 90,
    "hot_rank_chg": -8,
    "stock_cnt": 5825,
    "price": "4.51",
    "change": "1.12",
    "market_id": "33",
    "circulate_market_value": "159505770000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.71
      },
      {
        "name": "手机产业链",
        "change_pct": 1.4
      },
      {
        "name": "超高清视频",
        "change_pct": 0.34
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.68
      },
      {
        "name": "电竞",
        "change_pct": -0.17
      },
      {
        "name": "半导体",
        "change_pct": 0.85
      },
      {
        "name": "人工智能",
        "change_pct": 0.32
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.74
      },
      {
        "name": "VR&AR",
        "change_pct": 1.14
      },
      {
        "name": "OLED",
        "change_pct": 0.81
      },
      {
        "name": "京津冀",
        "change_pct": -0.17
      },
      {
        "name": "物联网",
        "change_pct": 0.46
      },
      {
        "name": "指纹识别",
        "change_pct": 0.98
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.96
      },
      {
        "name": "白马股",
        "change_pct": -0.29
      },
      {
        "name": "智能制造",
        "change_pct": 0.71
      },
      {
        "name": "小米概念股",
        "change_pct": 0.86
      },
      {
        "name": "国产芯片",
        "change_pct": 0.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.75
      },
      {
        "name": "全息概念",
        "change_pct": 0.75
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.9
      },
      {
        "name": "MicroLED",
        "change_pct": 0.82
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.36
      },
      {
        "name": "智能手表",
        "change_pct": 1.01
      },
      {
        "name": "MiniLED",
        "change_pct": 1.84
      },
      {
        "name": "传感器",
        "change_pct": 1.28
      },
      {
        "name": "大硅片",
        "change_pct": -0.37
      },
      {
        "name": "AI PC",
        "change_pct": 1.78
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "回购",
        "change_pct": 0.55
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 2.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.44
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "600410",
    "name": "华胜天成",
    "hot_rank": 92,
    "hot_rank_chg": -40,
    "stock_cnt": 5825,
    "price": "12.47",
    "change": "-1.66",
    "market_id": "17",
    "circulate_market_value": "13673289000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "应急产业",
        "change_pct": 1.39
      },
      {
        "name": "国产软件",
        "change_pct": -0.15
      },
      {
        "name": "人工智能",
        "change_pct": 0.32
      },
      {
        "name": "网络安全",
        "change_pct": 0.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.8
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "京津冀",
        "change_pct": -0.17
      },
      {
        "name": "冷链",
        "change_pct": 0.57
      },
      {
        "name": "物联网",
        "change_pct": 0.46
      },
      {
        "name": "大数据",
        "change_pct": -0.06
      },
      {
        "name": "智慧城市",
        "change_pct": 0.27
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "智能制造",
        "change_pct": 0.71
      },
      {
        "name": "工业互联网",
        "change_pct": 0.48
      },
      {
        "name": "数字经济",
        "change_pct": -0.06
      },
      {
        "name": "国产芯片",
        "change_pct": 0.99
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.18
      },
      {
        "name": "信创",
        "change_pct": -0.06
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.34
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.46
      },
      {
        "name": "数据要素",
        "change_pct": -0.34
      },
      {
        "name": "无线耳机",
        "change_pct": 1.31
      },
      {
        "name": "智慧政务",
        "change_pct": -0.19
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.13
      },
      {
        "name": "华为产业链",
        "change_pct": 0.63
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.06
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "600207",
    "name": "安彩高科",
    "hot_rank": 93,
    "hot_rank_chg": -36,
    "stock_cnt": 5825,
    "price": "4.93",
    "change": "1.02",
    "market_id": "17",
    "circulate_market_value": "5370310900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.31
      },
      {
        "name": "天然气",
        "change_pct": 1.15
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "光热发电",
        "change_pct": -0.21
      },
      {
        "name": "国企改革",
        "change_pct": 0.26
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 94,
    "hot_rank_chg": 49,
    "stock_cnt": 5825,
    "price": "7.47",
    "change": "1.36",
    "market_id": "33",
    "circulate_market_value": "13932169000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.8
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.2
      },
      {
        "name": "风电",
        "change_pct": 0.29
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.97
      },
      {
        "name": "轮边电机",
        "change_pct": 0.81
      },
      {
        "name": "人形机器人",
        "change_pct": 1.9
      }
    ]
  },
  {
    "code": "002309",
    "name": "中利集团",
    "hot_rank": 97,
    "hot_rank_chg": 29,
    "stock_cnt": 5825,
    "price": "2.77",
    "change": "-0.36",
    "market_id": "33",
    "circulate_market_value": "6664986500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.24
      },
      {
        "name": "5G",
        "change_pct": 1.81
      },
      {
        "name": "一带一路",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 2.78
      },
      {
        "name": "光通信",
        "change_pct": 2.54
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "光伏",
        "change_pct": -0.11
      },
      {
        "name": "军工",
        "change_pct": 1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.2
      },
      {
        "name": "储能",
        "change_pct": -0.26
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.44
      },
      {
        "name": "低价股",
        "change_pct": 0.05
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.36
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.26
      },
      {
        "name": "智能电网",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 99,
    "hot_rank_chg": -8,
    "stock_cnt": 5825,
    "price": "11.44",
    "change": "1.15",
    "market_id": "17",
    "circulate_market_value": "6573849000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.14
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.79
      },
      {
        "name": "自贸区",
        "change_pct": 0.44
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.2
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5825, "price": "4.32", "change": "8.82", "market_id": "33", "circulate_market_value": "6829795900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.7}, {"name": "体外诊断", "change_pct": 0.15}, {"name": "医疗器械", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "基因测序", "change_pct": 0.9}, {"name": "预制菜", "change_pct": 0.23}, {"name": "水产养殖", "change_pct": 0.8}, {"name": "新冠病毒防治", "change_pct": 0.15}, {"name": "海洋经济", "change_pct": 1.03}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 2, "hot_rank_chg": 19, "stock_cnt": 5825, "price": "9.57", "change": "10.00", "market_id": "33", "circulate_market_value": "5743117100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.02}, {"name": "边缘计算", "change_pct": 0.29}, {"name": "核电", "change_pct": 0.83}, {"name": "海工装备", "change_pct": 0.32}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "云计算数据中心", "change_pct": 0.8}, {"name": "冷链", "change_pct": 0.57}, {"name": "地热", "change_pct": 1.27}, {"name": "储能", "change_pct": -0.26}, {"name": "碳中和", "change_pct": -0.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 2.57}, {"name": "汽车热管理", "change_pct": 1.62}, {"name": "热泵", "change_pct": 1.64}, {"name": "液冷服务器", "change_pct": 1.5}, {"name": "蜜雪冰城概念股", "change_pct": 0.62}, {"name": "海洋经济", "change_pct": 1.03}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5825, "price": "5.66", "change": "4.82", "market_id": "17", "circulate_market_value": "7556399800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "LED", "change_pct": 0.79}, {"name": "卫星互联网", "change_pct": 3.05}]}, {"code": "603366", "name": "日出东方", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "9.89", "change": "10.01", "market_id": "17", "circulate_market_value": "8041045700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "光伏", "change_pct": -0.11}, {"name": "家电", "change_pct": 0.69}, {"name": "储能", "change_pct": -0.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.64}, {"name": "华为鸿蒙", "change_pct": -0.32}, {"name": "厨卫家电", "change_pct": 0.99}, {"name": "华为产业链", "change_pct": 0.63}]}, {"code": "300118", "name": "东方日升", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5825, "price": "11.02", "change": "7.30", "market_id": "33", "circulate_market_value": "10210245800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 6.63}, {"name": "光伏", "change_pct": -0.11}, {"name": "储能", "change_pct": -0.26}, {"name": "BIPV概念", "change_pct": -0.44}, {"name": "钙钛矿电池", "change_pct": 0.36}, {"name": "异质结电池HJT", "change_pct": 0.26}, {"name": "光伏胶膜", "change_pct": 0.16}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 6, "hot_rank_chg": 5, "stock_cnt": 5825, "price": "17.93", "change": "0.90", "market_id": "33", "circulate_market_value": "8240839500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 7, "hot_rank_chg": 36, "stock_cnt": 5825, "price": "713.41", "change": "8.65", "market_id": "17", "circulate_market_value": "21464880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "5.08", "change": "0.00", "market_id": "17", "circulate_market_value": "5895555700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "纺织服装", "change_pct": 0.14}, {"name": "浙江国企改革", "change_pct": -0.2}, {"name": "影视", "change_pct": 0.72}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": 0.11}]}, {"code": "002384", "name": "东山精密", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "82.80", "change": "3.25", "market_id": "33", "circulate_market_value": "114787439000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5825, "price": "462.64", "change": "3.27", "market_id": "33", "circulate_market_value": "513501260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 11, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "2.55", "change": "9.91", "market_id": "33", "circulate_market_value": "11217474100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.82}, {"name": "京津冀", "change_pct": -0.17}, {"name": "旅游", "change_pct": -0.27}, {"name": "园林", "change_pct": -0.05}, {"name": "海绵城市", "change_pct": -0.47}, {"name": "固废处理", "change_pct": 0.03}, {"name": "雄安新区", "change_pct": 0.06}, {"name": "北京城市规划", "change_pct": -0.15}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": 0.06}, {"name": "碳中和", "change_pct": -0.05}, {"name": "乡村振兴", "change_pct": -0.25}, {"name": "汽车拆解", "change_pct": 0.62}, {"name": "土壤修复", "change_pct": 0.0}, {"name": "核污染防治", "change_pct": 1.04}, {"name": "新型城镇化", "change_pct": 0.06}, {"name": "低价股", "change_pct": 0.05}, {"name": "西部大开发", "change_pct": 0.56}]}, {"code": "600327", "name": "大东方", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "4777809400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "“东方”", "xgb_concepts": [{"name": "新零售", "change_pct": 0.8}, {"name": "优化生育（三孩）", "change_pct": -0.3}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "信托", "change_pct": 0.16}, {"name": "民营医院", "change_pct": -0.1}, {"name": "社区团购", "change_pct": 0.82}, {"name": "大金融", "change_pct": 0.34}, {"name": "餐饮", "change_pct": -0.7}, {"name": "首发经济", "change_pct": 0.47}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5825, "price": "40.25", "change": "-0.40", "market_id": "17", "circulate_market_value": "181247320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 14, "hot_rank_chg": 32, "stock_cnt": 5825, "price": "41.51", "change": "9.99", "market_id": "33", "circulate_market_value": "20262655000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002865", "name": "钧达股份", "hot_rank": 15, "hot_rank_chg": 26, "stock_cnt": 5825, "price": "49.05", "change": "10.00", "market_id": "33", "circulate_market_value": "11223692200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "太空光伏"}, {"code": "002565", "name": "顺灏股份", "hot_rank": 16, "hot_rank_chg": 31, "stock_cnt": 5825, "price": "10.54", "change": "10.02", "market_id": "33", "circulate_market_value": "11171927500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.27}, {"name": "电子烟", "change_pct": 1.12}, {"name": "一带一路", "change_pct": 0.26}, {"name": "造纸", "change_pct": -0.09}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "包装印刷", "change_pct": -0.21}, {"name": "卫星互联网", "change_pct": 3.05}, {"name": "太空算力", "change_pct": 3.81}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 17, "hot_rank_chg": -13, "stock_cnt": 5825, "price": "25.87", "change": "3.07", "market_id": "33", "circulate_market_value": "19706877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "5.51", "change": "9.98", "market_id": "33", "circulate_market_value": "4745005700.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.66}, {"name": "一带一路", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "福建自贸/海西概念", "change_pct": 0.79}, {"name": "光伏", "change_pct": -0.11}, {"name": "有色金属", "change_pct": 0.79}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "新能源车零部件", "change_pct": 0.97}, {"name": "自贸区", "change_pct": 0.44}, {"name": "液冷服务器", "change_pct": 1.5}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "5469918900.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "高速公路", "change_pct": 1.16}, {"name": "振兴东北", "change_pct": 1.2}, {"name": "黑龙江自贸区", "change_pct": 3.04}]}, {"code": "600118", "name": "中国卫星", "hot_rank": 20, "hot_rank_chg": 91, "stock_cnt": 5825, "price": "60.50", "change": "10.00", "market_id": "17", "circulate_market_value": "71540593000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "600715", "name": "文投控股", "hot_rank": 21, "hot_rank_chg": 9, "stock_cnt": 5825, "price": "2.59", "change": "10.21", "market_id": "17", "circulate_market_value": "7413544100.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "游戏", "change_pct": -0.19}, {"name": "影视", "change_pct": 0.72}, {"name": "低价股", "change_pct": 0.05}, {"name": "国企改革", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": 0.11}, {"name": "AI视频", "change_pct": -0.03}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 22, "hot_rank_chg": 34, "stock_cnt": 5825, "price": "52.24", "change": "6.81", "market_id": "17", "circulate_market_value": "15592525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 23, "hot_rank_chg": -5, "stock_cnt": 5825, "price": "16.40", "change": "9.99", "market_id": "33", "circulate_market_value": "4121066700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”"}, {"code": "600127", "name": "金健米业", "hot_rank": 24, "hot_rank_chg": -2, "stock_cnt": 5825, "price": "10.92", "change": "-2.41", "market_id": "17", "circulate_market_value": "7008272700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.07}, {"name": "农业种植", "change_pct": 0.27}, {"name": "湖南国企改革", "change_pct": 0.55}, {"name": "乡村振兴", "change_pct": -0.25}, {"name": "休闲食品", "change_pct": 0.55}, {"name": "食品", "change_pct": -0.05}, {"name": "食品安全", "change_pct": 0.53}, {"name": "社区团购", "change_pct": 0.82}, {"name": "大农业", "change_pct": -0.07}, {"name": "预制菜", "change_pct": 0.23}, {"name": "人造肉", "change_pct": 0.08}, {"name": "国企改革", "change_pct": 0.26}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 25, "hot_rank_chg": 94, "stock_cnt": 5825, "price": "21.97", "change": "10.02", "market_id": "33", "circulate_market_value": "11196578800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人关节"}, {"code": "300136", "name": "信维通信", "hot_rank": 26, "hot_rank_chg": 331, "stock_cnt": 5825, "price": "48.76", "change": "15.27", "market_id": "33", "circulate_market_value": "40232983000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 27, "hot_rank_chg": -12, "stock_cnt": 5825, "price": "61.48", "change": "-2.58", "market_id": "33", "circulate_market_value": "13318288500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 28, "hot_rank_chg": -14, "stock_cnt": 5825, "price": "33.96", "change": "-2.50", "market_id": "33", "circulate_market_value": "34696931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 29, "hot_rank_chg": -10, "stock_cnt": 5825, "price": "179.15", "change": "4.10", "market_id": "33", "circulate_market_value": "224783760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 30, "hot_rank_chg": 38, "stock_cnt": 5825, "price": "72.36", "change": "6.60", "market_id": "33", "circulate_market_value": "5692851700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 31, "hot_rank_chg": -4, "stock_cnt": 5825, "price": "9.95", "change": "3.97", "market_id": "33", "circulate_market_value": "9286550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": 0.74}, {"name": "新疆概念", "change_pct": 0.7}, {"name": "光伏", "change_pct": -0.11}, {"name": "风电", "change_pct": 0.29}, {"name": "储能", "change_pct": -0.26}, {"name": "国企改革", "change_pct": 0.26}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 32, "hot_rank_chg": 136, "stock_cnt": 5825, "price": "9.89", "change": "4.11", "market_id": "33", "circulate_market_value": "9405735800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.84}, {"name": "大飞机", "change_pct": 1.39}, {"name": "北斗导航", "change_pct": 1.61}, {"name": "高铁轨交", "change_pct": 0.25}, {"name": "军民融合", "change_pct": 1.24}, {"name": "磁悬浮", "change_pct": -0.02}, {"name": "军工", "change_pct": 1.17}, {"name": "碳纤维", "change_pct": 0.56}, {"name": "无人机", "change_pct": 1.04}, {"name": "智能制造", "change_pct": 0.71}, {"name": "3D打印", "change_pct": 1.15}, {"name": "航天", "change_pct": 2.38}, {"name": "卫星互联网", "change_pct": 3.05}, {"name": "国资入股", "change_pct": 0.45}, {"name": "低空经济", "change_pct": 1.11}, {"name": "海洋经济", "change_pct": 1.03}]}, {"code": "600206", "name": "有研新材", "hot_rank": 33, "hot_rank_chg": 17, "stock_cnt": 5825, "price": "38.54", "change": "0.65", "market_id": "17", "circulate_market_value": "32626165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 34, "hot_rank_chg": 72, "stock_cnt": 5825, "price": "15.57", "change": "7.38", "market_id": "33", "circulate_market_value": "10278172600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603601", "name": "再升科技", "hot_rank": 35, "hot_rank_chg": 547, "stock_cnt": 5825, "price": "8.70", "change": "9.99", "market_id": "17", "circulate_market_value": "9938366400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 6.63}, {"name": "核电", "change_pct": 0.83}, {"name": "大飞机", "change_pct": 1.39}, {"name": "大气治理", "change_pct": 0.33}, {"name": "玻纤", "change_pct": 2.6}, {"name": "环保", "change_pct": 0.06}, {"name": "核污染防治", "change_pct": 1.04}, {"name": "航天", "change_pct": 2.38}, {"name": "生物安全", "change_pct": 0.75}, {"name": "中芯国际概念股", "change_pct": 0.58}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 36, "hot_rank_chg": 25, "stock_cnt": 5825, "price": "6.18", "change": "9.96", "market_id": "33", "circulate_market_value": "4728569700.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -0.25}, {"name": "优化生育（三孩）", "change_pct": -0.3}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "医药商业", "change_pct": -0.38}, {"name": "保健品", "change_pct": -0.1}, {"name": "民营医院", "change_pct": -0.1}, {"name": "医药", "change_pct": 0.04}, {"name": "食品", "change_pct": -0.05}, {"name": "辅助生殖", "change_pct": 0.26}, {"name": "口腔", "change_pct": -0.55}, {"name": "医美", "change_pct": -0.25}, {"name": "新冠病毒防治", "change_pct": 0.15}]}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 37, "hot_rank_chg": -21, "stock_cnt": 5825, "price": "10.75", "change": "-3.07", "market_id": "33", "circulate_market_value": "5439119800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.24}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "大气治理", "change_pct": 0.33}, {"name": "雄安新区", "change_pct": 0.06}, {"name": "耐火材料", "change_pct": 0.06}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "环保", "change_pct": 0.06}, {"name": "船舶", "change_pct": 0.34}, {"name": "建筑节能", "change_pct": 0.42}, {"name": "气凝胶", "change_pct": -0.27}, {"name": "旧改", "change_pct": -0.24}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 38, "hot_rank_chg": 34, "stock_cnt": 5825, "price": "42.91", "change": "4.91", "market_id": "17", "circulate_market_value": "105285961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 39, "hot_rank_chg": 95, "stock_cnt": 5825, "price": "11.10", "change": "10.01", "market_id": "17", "circulate_market_value": "4606301500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.62}, {"name": "5G", "change_pct": 1.81}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "云计算数据中心", "change_pct": 0.8}, {"name": "LED", "change_pct": 0.79}, {"name": "卫星互联网", "change_pct": 3.05}, {"name": "铜缆高速连接器", "change_pct": 2.53}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 40, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "23.79", "change": "5.78", "market_id": "33", "circulate_market_value": "4524798500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 41, "hot_rank_chg": 7, "stock_cnt": 5825, "price": "16.66", "change": "1.40", "market_id": "33", "circulate_market_value": "2955617300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 42, "hot_rank_chg": -9, "stock_cnt": 5825, "price": "13.10", "change": "1.24", "market_id": "17", "circulate_market_value": "13688031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5825, "price": "13.68", "change": "0.81", "market_id": "17", "circulate_market_value": "4675268500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603381", "name": "永臻股份", "hot_rank": 44, "hot_rank_chg": -20, "stock_cnt": 5825, "price": "21.31", "change": "2.75", "market_id": "17", "circulate_market_value": "3028954100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 45, "hot_rank_chg": 17, "stock_cnt": 5825, "price": "67.48", "change": "2.32", "market_id": "33", "circulate_market_value": "48938963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 46, "hot_rank_chg": -6, "stock_cnt": 5825, "price": "75.20", "change": "3.82", "market_id": "33", "circulate_market_value": "49106164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000595", "name": "新能股份", "hot_rank": 47, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "5.55", "change": "3.16", "market_id": "33", "circulate_market_value": "6319542800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 0.69}, {"name": "高铁轨交", "change_pct": 0.25}, {"name": "航母", "change_pct": 0.79}, {"name": "光伏", "change_pct": -0.11}, {"name": "风电", "change_pct": 0.29}, {"name": "军工", "change_pct": 1.17}, {"name": "储能", "change_pct": -0.26}, {"name": "国企改革", "change_pct": 0.26}, {"name": "宁夏概念", "change_pct": 0.25}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 48, "hot_rank_chg": 49, "stock_cnt": 5825, "price": "10.11", "change": "0.30", "market_id": "17", "circulate_market_value": "14889066000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.23}, {"name": "电力体制改革", "change_pct": -0.16}, {"name": "火电", "change_pct": 0.08}, {"name": "氢能源/燃料电池", "change_pct": 0.2}, {"name": "风电", "change_pct": 0.29}, {"name": "国企改革", "change_pct": 0.26}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 49, "hot_rank_chg": 2, "stock_cnt": 5825, "price": "8.41", "change": "-1.98", "market_id": "33", "circulate_market_value": "3983651200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "VR&AR", "change_pct": 1.14}, {"name": "游戏", "change_pct": -0.19}, {"name": "影视", "change_pct": 0.72}, {"name": "直播/短视频", "change_pct": -0.45}, {"name": "动漫", "change_pct": -0.06}, {"name": "腾讯概念股", "change_pct": -0.18}, {"name": "传媒", "change_pct": -0.74}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "短剧/互动影游", "change_pct": 0.11}, {"name": "IP经济/谷子经济", "change_pct": -0.2}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 50, "hot_rank_chg": -21, "stock_cnt": 5825, "price": "78.50", "change": "-4.23", "market_id": "33", "circulate_market_value": "124615583000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600278", "name": "东方创业", "hot_rank": 51, "hot_rank_chg": -23, "stock_cnt": 5825, "price": "7.83", "change": "9.97", "market_id": "17", "circulate_market_value": "6737861100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.18}, {"name": "快递物流", "change_pct": 0.09}, {"name": "上海国企改革", "change_pct": 0.18}, {"name": "一带一路", "change_pct": 0.26}, {"name": "破净股", "change_pct": -0.13}, {"name": "上海自由贸易港", "change_pct": 0.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 0.82}, {"name": "自由贸易港", "change_pct": 0.43}, {"name": "国企改革", "change_pct": 0.26}, {"name": "自贸区", "change_pct": 0.44}]}, {"code": "000525", "name": "红太阳", "hot_rank": 52, "hot_rank_chg": -32, "stock_cnt": 5825, "price": "5.32", "change": "5.98", "market_id": "33", "circulate_market_value": "5914563200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "草铵膦", "change_pct": 0.28}, {"name": "农药", "change_pct": -0.49}, {"name": "长寿药NMN", "change_pct": -0.09}, {"name": "大农业", "change_pct": -0.07}, {"name": "虫害防治", "change_pct": -0.39}]}, {"code": "002724", "name": "海洋王", "hot_rank": 53, "hot_rank_chg": -17, "stock_cnt": 5825, "price": "12.25", "change": "2.34", "market_id": "33", "circulate_market_value": "6939359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "石墨烯", "change_pct": 0.84}, {"name": "军民融合", "change_pct": 1.24}, {"name": "物联网", "change_pct": 0.46}, {"name": "LED", "change_pct": 0.79}, {"name": "军工", "change_pct": 1.17}, {"name": "智慧灯杆", "change_pct": 0.46}, {"name": "海洋经济", "change_pct": 1.03}]}, {"code": "001381", "name": "皇冠新材", "hot_rank": 54, "hot_rank_chg": 41, "stock_cnt": 5825, "price": "47.59", "change": "0.55", "market_id": "33", "circulate_market_value": "2098587700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 55, "hot_rank_chg": 75, "stock_cnt": 5825, "price": "13.00", "change": "3.26", "market_id": "33", "circulate_market_value": "20658574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 56, "hot_rank_chg": 7, "stock_cnt": 5825, "price": "33.50", "change": "6.69", "market_id": "17", "circulate_market_value": "31176102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 57, "hot_rank_chg": 3, "stock_cnt": 5825, "price": "4.54", "change": "2.25", "market_id": "33", "circulate_market_value": "12042579600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "装修装饰", "change_pct": 0.2}, {"name": "装配式建筑", "change_pct": 0.28}, {"name": "破净股", "change_pct": -0.13}, {"name": "航天", "change_pct": 2.38}, {"name": "旧改", "change_pct": -0.24}]}, {"code": "002388", "name": "新亚制程", "hot_rank": 58, "hot_rank_chg": -35, "stock_cnt": 5825, "price": "7.34", "change": "10.04", "market_id": "33", "circulate_market_value": "3715680500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "电解液", "xgb_concepts": [{"name": "电子特气", "change_pct": 0.8}, {"name": "资产重组", "change_pct": 0.82}, {"name": "仪器仪表", "change_pct": 0.68}, {"name": "锂电池", "change_pct": -0.24}, {"name": "ST摘帽", "change_pct": 0.69}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "有机硅", "change_pct": -0.07}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "供应链金融", "change_pct": 0.07}, {"name": "服务器", "change_pct": 1.97}]}, {"code": "600371", "name": "万向德农", "hot_rank": 59, "hot_rank_chg": -33, "stock_cnt": 5825, "price": "12.90", "change": "4.12", "market_id": "17", "circulate_market_value": "3774256200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 0.27}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "转基因", "change_pct": -0.47}, {"name": "乡村振兴", "change_pct": -0.25}, {"name": "大农业", "change_pct": -0.07}]}, {"code": "600637", "name": "东方明珠", "hot_rank": 60, "hot_rank_chg": -29, "stock_cnt": 5825, "price": "8.42", "change": "4.21", "market_id": "17", "circulate_market_value": "28307196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.13}, {"name": "高管增持", "change_pct": 0.63}, {"name": "超高清视频", "change_pct": 0.34}, {"name": "电竞", "change_pct": -0.17}, {"name": "上海国企改革", "change_pct": 0.18}, {"name": "游戏", "change_pct": -0.19}, {"name": "物联网", "change_pct": 0.46}, {"name": "教育", "change_pct": -0.45}, {"name": "智慧城市", "change_pct": 0.27}, {"name": "破净股", "change_pct": -0.13}, {"name": "传媒", "change_pct": -0.74}, {"name": "东数西算/算力", "change_pct": 0.46}, {"name": "国企改革", "change_pct": 0.26}, {"name": "在线教育", "change_pct": 0.12}, {"name": "AI大模型/智能体", "change_pct": -0.06}, {"name": "短剧/互动影游", "change_pct": 0.11}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 61, "hot_rank_chg": -22, "stock_cnt": 5825, "price": "248.42", "change": "-2.28", "market_id": "33", "circulate_market_value": "1058422500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 62, "hot_rank_chg": 53, "stock_cnt": 5825, "price": "72.44", "change": "2.77", "market_id": "17", "circulate_market_value": "174707090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 63, "hot_rank_chg": 11, "stock_cnt": 5825, "price": "43.29", "change": "6.34", "market_id": "17", "circulate_market_value": "859050750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 64, "hot_rank_chg": -27, "stock_cnt": 5825, "price": "243.10", "change": "1.51", "market_id": "17", "circulate_market_value": "163051630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 65, "hot_rank_chg": -1, "stock_cnt": 5825, "price": "17.12", "change": "-5.93", "market_id": "33", "circulate_market_value": "9668542300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 66, "hot_rank_chg": 93, "stock_cnt": 5825, "price": "135.56", "change": "9.05", "market_id": "33", "circulate_market_value": "117285827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 67, "hot_rank_chg": 47, "stock_cnt": 5825, "price": "17.38", "change": "7.62", "market_id": "17", "circulate_market_value": "5855447500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002611", "name": "东方精工", "hot_rank": 68, "hot_rank_chg": -23, "stock_cnt": 5825, "price": "14.61", "change": "5.03", "market_id": "33", "circulate_market_value": "14667891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5825, "price": "2.50", "change": "-3.10", "market_id": "33", "circulate_market_value": "14611105000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.31}, {"name": "光伏", "change_pct": -0.11}, {"name": "储能", "change_pct": -0.26}, {"name": "乡村振兴", "change_pct": -0.25}, {"name": "颗粒硅", "change_pct": -1.49}, {"name": "BIPV概念", "change_pct": -0.44}, {"name": "低价股", "change_pct": 0.05}, {"name": "钙钛矿电池", "change_pct": 0.36}, {"name": "异质结电池HJT", "change_pct": 0.26}, {"name": "华为产业链", "change_pct": 0.63}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 70, "hot_rank_chg": 100, "stock_cnt": 5825, "price": "29.17", "change": "2.50", "market_id": "33", "circulate_market_value": "22879371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 71, "hot_rank_chg": 45, "stock_cnt": 5825, "price": "13.47", "change": "5.98", "market_id": "17", "circulate_market_value": "8971020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 72, "hot_rank_chg": 15, "stock_cnt": 5825, "price": "124.83", "change": "2.32", "market_id": "33", "circulate_market_value": "135863480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 73, "hot_rank_chg": -31, "stock_cnt": 5825, "price": "38.64", "change": "8.05", "market_id": "17", "circulate_market_value": "17318448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 74, "hot_rank_chg": 29, "stock_cnt": 5825, "price": "14.52", "change": "0.83", "market_id": "33", "circulate_market_value": "48352587000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 75, "hot_rank_chg": 15, "stock_cnt": 5825, "price": "8.14", "change": "0.25", "market_id": "33", "circulate_market_value": "13243729400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.05}, {"name": "电竞", "change_pct": -0.17}, {"name": "手游", "change_pct": -0.29}, {"name": "人工智能", "change_pct": 0.32}, {"name": "游戏", "change_pct": -0.19}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.06}, {"name": "腾讯概念股", "change_pct": -0.18}, {"name": "传媒", "change_pct": -0.74}, {"name": "快手概念股", "change_pct": -0.84}, {"name": "元宇宙", "change_pct": 0.06}, {"name": "虚拟数字人", "change_pct": -0.26}, {"name": "东数西算/算力", "change_pct": 0.46}, {"name": "web3.0", "change_pct": 0.17}, {"name": "AIGC概念", "change_pct": -0.09}, {"name": "数据要素", "change_pct": -0.34}, {"name": "字节跳动概念股", "change_pct": -0.5}, {"name": "AI营销", "change_pct": -0.75}, {"name": "ChatGPT", "change_pct": 0.13}, {"name": "智能眼镜/MR头显", "change_pct": 1.44}, {"name": "AI大模型/智能体", "change_pct": -0.06}, {"name": "人形机器人", "change_pct": 1.9}, {"name": "短剧/互动影游", "change_pct": 0.11}, {"name": "多模态", "change_pct": 0.62}, {"name": "AI视频", "change_pct": -0.03}, {"name": "IP经济/谷子经济", "change_pct": -0.2}, {"name": "小红书概念股", "change_pct": -0.71}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 76, "hot_rank_chg": 22, "stock_cnt": 5825, "price": "4.19", "change": "-1.64", "market_id": "33", "circulate_market_value": "24531599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.32}, {"name": "云计算数据中心", "change_pct": 0.8}, {"name": "水利", "change_pct": 0.14}, {"name": "直播/短视频", "change_pct": -0.45}, {"name": "大数据", "change_pct": -0.06}, {"name": "园林", "change_pct": -0.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.86}, {"name": "数字经济", "change_pct": -0.06}, {"name": "腾讯概念股", "change_pct": -0.18}, {"name": "传媒", "change_pct": -0.74}, {"name": "理想汽车概念股", "change_pct": 0.9}, {"name": "第三代半导体", "change_pct": 0.54}, {"name": "快手概念股", "change_pct": -0.84}, {"name": "IGBT", "change_pct": 0.07}, {"name": "虚拟数字人", "change_pct": -0.26}, {"name": "AIGC概念", "change_pct": -0.09}, {"name": "字节跳动概念股", "change_pct": -0.5}, {"name": "氮化镓", "change_pct": 0.69}, {"name": "AI营销", "change_pct": -0.75}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "AI大模型/智能体", "change_pct": -0.06}, {"name": "多模态", "change_pct": 0.62}, {"name": "AI视频", "change_pct": -0.03}, {"name": "液冷服务器", "change_pct": 1.5}, {"name": "小红书概念股", "change_pct": -0.71}, {"name": "区块链", "change_pct": -0.38}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 77, "hot_rank_chg": 234, "stock_cnt": 5825, "price": "11.23", "change": "3.12", "market_id": "17", "circulate_market_value": "14422922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": 0.71}, {"name": "工业互联网", "change_pct": 0.48}, {"name": "培育钻石", "change_pct": 1.4}, {"name": "金刚线", "change_pct": 1.12}, {"name": "国资入股", "change_pct": 0.45}, {"name": "深地经济", "change_pct": 0.45}]}, {"code": "300102", "name": "乾照光电", "hot_rank": 78, "hot_rank_chg": 22, "stock_cnt": 5825, "price": "17.13", "change": "4.45", "market_id": "33", "circulate_market_value": "15686073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002029", "name": "七匹狼", "hot_rank": 79, "hot_rank_chg": 13, "stock_cnt": 5825, "price": "9.10", "change": "2.25", "market_id": "33", "circulate_market_value": "6055194200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.78}, {"name": "纺织服装", "change_pct": 0.14}, {"name": "破净股", "change_pct": -0.13}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "600584", "name": "长电科技", "hot_rank": 80, "hot_rank_chg": 29, "stock_cnt": 5825, "price": "52.61", "change": "0.19", "market_id": "17", "circulate_market_value": "94141101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 81, "hot_rank_chg": -3, "stock_cnt": 5825, "price": "10.98", "change": "5.07", "market_id": "17", "circulate_market_value": "4401684200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.18}, {"name": "新零售", "change_pct": 0.8}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "物业管理", "change_pct": -0.31}, {"name": "国企改革", "change_pct": 0.26}, {"name": "地摊经济", "change_pct": 0.48}]}, {"code": "002202", "name": "金风科技", "hot_rank": 82, "hot_rank_chg": 163, "stock_cnt": 5825, "price": "15.40", "change": "1.78", "market_id": "33", "circulate_market_value": "51799518000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 83, "hot_rank_chg": 91, "stock_cnt": 5825, "price": "19.25", "change": "3.05", "market_id": "33", "circulate_market_value": "9235671500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 84, "hot_rank_chg": 68, "stock_cnt": 5825, "price": "43.69", "change": "-0.59", "market_id": "33", "circulate_market_value": "66297488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 85, "hot_rank_chg": -36, "stock_cnt": 5825, "price": "11.18", "change": "1.08", "market_id": "33", "circulate_market_value": "3737014700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.2}, {"name": "饲料", "change_pct": -0.48}, {"name": "一带一路", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "保健品", "change_pct": -0.1}, {"name": "山东国企改革", "change_pct": 0.21}, {"name": "污水处理", "change_pct": -0.08}, {"name": "环保", "change_pct": 0.06}, {"name": "食品", "change_pct": -0.05}, {"name": "预制菜", "change_pct": 0.23}, {"name": "国企改革", "change_pct": 0.26}, {"name": "水产养殖", "change_pct": 0.8}, {"name": "广西概念", "change_pct": -0.24}]}, {"code": "600879", "name": "航天电子", "hot_rank": 86, "hot_rank_chg": 246, "stock_cnt": 5825, "price": "13.73", "change": "5.62", "market_id": "17", "circulate_market_value": "45299380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 87, "hot_rank_chg": 33, "stock_cnt": 5825, "price": "18.11", "change": "0.00", "market_id": "33", "circulate_market_value": "8191855700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 88, "hot_rank_chg": -29, "stock_cnt": 5825, "price": "27.20", "change": "3.82", "market_id": "33", "circulate_market_value": "17981530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 89, "hot_rank_chg": -18, "stock_cnt": 5825, "price": "29.85", "change": "-0.83", "market_id": "17", "circulate_market_value": "13101070500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 90, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "4.51", "change": "1.12", "market_id": "33", "circulate_market_value": "159505770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.71}, {"name": "手机产业链", "change_pct": 1.4}, {"name": "超高清视频", "change_pct": 0.34}, {"name": "苹果产业链", "change_pct": 1.68}, {"name": "电竞", "change_pct": -0.17}, {"name": "半导体", "change_pct": 0.85}, {"name": "人工智能", "change_pct": 0.32}, {"name": "互联网医疗", "change_pct": -0.74}, {"name": "VR&AR", "change_pct": 1.14}, {"name": "OLED", "change_pct": 0.81}, {"name": "京津冀", "change_pct": -0.17}, {"name": "物联网", "change_pct": 0.46}, {"name": "指纹识别", "change_pct": 0.98}, {"name": "汽车零部件", "change_pct": 0.96}, {"name": "白马股", "change_pct": -0.29}, {"name": "智能制造", "change_pct": 0.71}, {"name": "小米概念股", "change_pct": 0.86}, {"name": "国产芯片", "change_pct": 0.99}, {"name": "液晶面板/LCD", "change_pct": 0.75}, {"name": "全息概念", "change_pct": 0.75}, {"name": "理想汽车概念股", "change_pct": 0.9}, {"name": "MicroLED", "change_pct": 0.82}, {"name": "钙钛矿电池", "change_pct": 0.36}, {"name": "智能手表", "change_pct": 1.01}, {"name": "MiniLED", "change_pct": 1.84}, {"name": "传感器", "change_pct": 1.28}, {"name": "大硅片", "change_pct": -0.37}, {"name": "AI PC", "change_pct": 1.78}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "回购", "change_pct": 0.55}, {"name": "光电共封装CPO", "change_pct": 2.58}, {"name": "智能眼镜/MR头显", "change_pct": 1.44}, {"name": "玻璃基板封装", "change_pct": 1.39}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 91, "hot_rank_chg": 21, "stock_cnt": 5825, "price": "13.13", "change": "0.54", "market_id": "33", "circulate_market_value": "45665225000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 92, "hot_rank_chg": -40, "stock_cnt": 5825, "price": "12.47", "change": "-1.66", "market_id": "17", "circulate_market_value": "13673289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "应急产业", "change_pct": 1.39}, {"name": "国产软件", "change_pct": -0.15}, {"name": "人工智能", "change_pct": 0.32}, {"name": "网络安全", "change_pct": 0.05}, {"name": "云计算数据中心", "change_pct": 0.8}, {"name": "军民融合", "change_pct": 1.24}, {"name": "京津冀", "change_pct": -0.17}, {"name": "冷链", "change_pct": 0.57}, {"name": "物联网", "change_pct": 0.46}, {"name": "大数据", "change_pct": -0.06}, {"name": "智慧城市", "change_pct": 0.27}, {"name": "军工", "change_pct": 1.17}, {"name": "智能制造", "change_pct": 0.71}, {"name": "工业互联网", "change_pct": 0.48}, {"name": "数字经济", "change_pct": -0.06}, {"name": "国产芯片", "change_pct": 0.99}, {"name": "阿里巴巴概念股", "change_pct": -0.05}, {"name": "腾讯概念股", "change_pct": -0.18}, {"name": "信创", "change_pct": -0.06}, {"name": "华为昇腾", "change_pct": 0.34}, {"name": "东数西算/算力", "change_pct": 0.46}, {"name": "数据要素", "change_pct": -0.34}, {"name": "无线耳机", "change_pct": 1.31}, {"name": "智慧政务", "change_pct": -0.19}, {"name": "华为云·鲲鹏", "change_pct": 0.13}, {"name": "华为产业链", "change_pct": 0.63}, {"name": "AI大模型/智能体", "change_pct": -0.06}, {"name": "DeepSeek概念股", "change_pct": -0.05}]}, {"code": "600207", "name": "安彩高科", "hot_rank": 93, "hot_rank_chg": -36, "stock_cnt": 5825, "price": "4.93", "change": "1.02", "market_id": "17", "circulate_market_value": "5370310900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.31}, {"name": "天然气", "change_pct": 1.15}, {"name": "光伏", "change_pct": -0.11}, {"name": "储能", "change_pct": -0.26}, {"name": "光热发电", "change_pct": -0.21}, {"name": "国企改革", "change_pct": 0.26}, {"name": "河南国企改革", "change_pct": 0.76}]}, {"code": "002249", "name": "大洋电机", "hot_rank": 94, "hot_rank_chg": 49, "stock_cnt": 5825, "price": "7.47", "change": "1.36", "market_id": "33", "circulate_market_value": "13932169000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -0.23}, {"name": "云计算数据中心", "change_pct": 0.8}, {"name": "军民融合", "change_pct": 1.24}, {"name": "氢能源/燃料电池", "change_pct": 0.2}, {"name": "风电", "change_pct": 0.29}, {"name": "军工", "change_pct": 1.17}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "新能源车零部件", "change_pct": 0.97}, {"name": "轮边电机", "change_pct": 0.81}, {"name": "人形机器人", "change_pct": 1.9}]}, {"code": "688585", "name": "上纬新材", "hot_rank": 95, "hot_rank_chg": 108, "stock_cnt": 5825, "price": "211.78", "change": "17.64", "market_id": "17", "circulate_market_value": "85423947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 96, "hot_rank_chg": 253, "stock_cnt": 5825, "price": "29.70", "change": "10.00", "market_id": "17", "circulate_market_value": "37767157000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002309", "name": "中利集团", "hot_rank": 97, "hot_rank_chg": 29, "stock_cnt": 5825, "price": "2.77", "change": "-0.36", "market_id": "33", "circulate_market_value": "6664986500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.24}, {"name": "5G", "change_pct": 1.81}, {"name": "一带一路", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 2.78}, {"name": "光通信", "change_pct": 2.54}, {"name": "军民融合", "change_pct": 1.24}, {"name": "光伏", "change_pct": -0.11}, {"name": "军工", "change_pct": 1.17}, {"name": "新能源汽车", "change_pct": 0.2}, {"name": "储能", "change_pct": -0.26}, {"name": "BIPV概念", "change_pct": -0.44}, {"name": "低价股", "change_pct": 0.05}, {"name": "钙钛矿电池", "change_pct": 0.36}, {"name": "异质结电池HJT", "change_pct": 0.26}, {"name": "智能电网", "change_pct": -0.01}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 98, "hot_rank_chg": 55, "stock_cnt": 5825, "price": "51.34", "change": "2.23", "market_id": "17", "circulate_market_value": "7337975500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 99, "hot_rank_chg": -8, "stock_cnt": 5825, "price": "11.44", "change": "1.15", "market_id": "17", "circulate_market_value": "6573849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.14}, {"name": "福建自贸/海西概念", "change_pct": 0.79}, {"name": "自贸区", "change_pct": 0.44}, {"name": "IP经济/谷子经济", "change_pct": -0.2}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 100, "hot_rank_chg": 8, "stock_cnt": 5825, "price": "78.98", "change": "7.88", "market_id": "33", "circulate_market_value": "152197900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};