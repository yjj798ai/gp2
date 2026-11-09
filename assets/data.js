const UPDATE_TIME = "2026-11-09 23:15";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": 1.39,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续255天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.58,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续326天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": 1.6,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "冰雪产业",
    "rise": 1.49,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "芯片概念",
    "rise": 0.67,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "机器人概念",
    "rise": 0.82,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "PCB概念",
    "rise": 1.11,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "光伏概念",
    "rise": -0.15,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "创新药",
    "rise": -0.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续156天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 0.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续279天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": -0.44,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "短剧游戏",
    "rise": 0.02,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "人工智能",
    "rise": -0.04,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "英伟达概念",
    "rise": 1.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "智能驾驶ETF",
    "code": "886048"
  },
  {
    "name": "黄金概念",
    "rise": 0.19,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "猪肉",
    "rise": 0.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "核电",
    "rise": 0.36,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885571"
  },
  {
    "name": "6G概念",
    "rise": 2.12,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "减速器",
    "rise": 1.93,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "卫星导航",
    "rise": 1.59,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "885574"
  }
];
const THS_EVENTS = [
  {
    "title": "AI巨头亲自下场抢电！Anthropic斥资34亿美元，买下1.7GW燃气发电机",
    "desc": "",
    "heat": 481328,
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
    "heat": 297691,
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
        "chg": 12.765957
      }
    ]
  },
  {
    "title": "苹果研究团队披露机器人“大脑”进展 单项任务测试平均成功率为91%",
    "desc": "",
    "heat": 238141,
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
    "heat": 182933,
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
    "heat": 34641,
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
    "heat": 21186,
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
        "chg": 3.16092
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "SpaceX概念股",
    "change": "+5.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "冰雪产业",
    "change": "+3.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "矢量网络分析仪VNA",
    "change": "+2.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波通信",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+2.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "卫星互联网",
    "change": "+2.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "6G",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光雷达",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "毫米波雷达",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+1.82%",
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
    "stock_cnt": 5820,
    "price": "4.37",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "6908844400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.16
      },
      {
        "name": "体外诊断",
        "change_pct": -0.38
      },
      {
        "name": "医疗器械",
        "change_pct": -0.24
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "基因测序",
        "change_pct": 0.22
      },
      {
        "name": "预制菜",
        "change_pct": -0.16
      },
      {
        "name": "水产养殖",
        "change_pct": 0.53
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.23
      },
      {
        "name": "海洋经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5820,
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
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "光伏",
        "change_pct": -0.93
      },
      {
        "name": "家电",
        "change_pct": 0.73
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.81
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.61
      },
      {
        "name": "厨卫家电",
        "change_pct": 1.25
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": 9,
    "stock_cnt": 5820,
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
        "change_pct": 0.05
      },
      {
        "name": "边缘计算",
        "change_pct": -0.06
      },
      {
        "name": "核电",
        "change_pct": 0.46
      },
      {
        "name": "海工装备",
        "change_pct": -0.4
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.28
      },
      {
        "name": "冷链",
        "change_pct": 0.48
      },
      {
        "name": "地热",
        "change_pct": 0.98
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "碳中和",
        "change_pct": -0.4
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 3.02
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.7
      },
      {
        "name": "热泵",
        "change_pct": 1.81
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.18
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.33
      },
      {
        "name": "海洋经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 5,
    "hot_rank_chg": 28,
    "stock_cnt": 5820,
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
        "change_pct": -0.56
      },
      {
        "name": "电子烟",
        "change_pct": 1.17
      },
      {
        "name": "一带一路",
        "change_pct": -0.07
      },
      {
        "name": "造纸",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "包装印刷",
        "change_pct": -0.34
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.16
      },
      {
        "name": "太空算力",
        "change_pct": 2.73
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 6,
    "hot_rank_chg": 13,
    "stock_cnt": 5820,
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
        "change_pct": 0.45
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "京津冀",
        "change_pct": -0.43
      },
      {
        "name": "旅游",
        "change_pct": -0.22
      },
      {
        "name": "园林",
        "change_pct": 0.3
      },
      {
        "name": "海绵城市",
        "change_pct": -0.72
      },
      {
        "name": "固废处理",
        "change_pct": -0.1
      },
      {
        "name": "雄安新区",
        "change_pct": -0.15
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.3
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.13
      },
      {
        "name": "碳中和",
        "change_pct": -0.4
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.17
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.46
      },
      {
        "name": "土壤修复",
        "change_pct": -0.3
      },
      {
        "name": "核污染防治",
        "change_pct": 0.52
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.07
      },
      {
        "name": "低价股",
        "change_pct": -0.24
      },
      {
        "name": "西部大开发",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 7,
    "hot_rank_chg": 11,
    "stock_cnt": 5820,
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
        "change_pct": 0.56
      },
      {
        "name": "一带一路",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.53
      },
      {
        "name": "光伏",
        "change_pct": -0.93
      },
      {
        "name": "有色金属",
        "change_pct": 0.28
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.19
      },
      {
        "name": "自贸区",
        "change_pct": 0.14
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 8,
    "hot_rank_chg": -4,
    "stock_cnt": 5820,
    "price": "5.32",
    "change": "-1.48",
    "market_id": "17",
    "circulate_market_value": "7102481800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "LED",
        "change_pct": 0.44
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 9,
    "hot_rank_chg": 31,
    "stock_cnt": 5820,
    "price": "5.52",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6136915200.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "草铵膦",
        "change_pct": 0.28
      },
      {
        "name": "农药",
        "change_pct": -0.75
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.05
      },
      {
        "name": "大农业",
        "change_pct": -0.29
      },
      {
        "name": "虫害防治",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 11,
    "hot_rank_chg": 33,
    "stock_cnt": 5820,
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
        "change_pct": 3.2
      },
      {
        "name": "高速公路",
        "change_pct": 1.05
      },
      {
        "name": "振兴东北",
        "change_pct": 1.05
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 3.29
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 12,
    "hot_rank_chg": -4,
    "stock_cnt": 5820,
    "price": "5.38",
    "change": "5.91",
    "market_id": "17",
    "circulate_market_value": "6243718400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "纺织服装",
        "change_pct": -0.16
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.23
      },
      {
        "name": "影视",
        "change_pct": 1.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 13,
    "hot_rank_chg": 7,
    "stock_cnt": 5820,
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
        "change_pct": 0.72
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.5
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "信托",
        "change_pct": -0.29
      },
      {
        "name": "民营医院",
        "change_pct": -0.53
      },
      {
        "name": "社区团购",
        "change_pct": 0.74
      },
      {
        "name": "大金融",
        "change_pct": 0.4
      },
      {
        "name": "餐饮",
        "change_pct": -0.93
      },
      {
        "name": "首发经济",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 18,
    "hot_rank_chg": 16,
    "stock_cnt": 5820,
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
        "change_pct": -0.46
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "游戏",
        "change_pct": -0.3
      },
      {
        "name": "影视",
        "change_pct": 1.08
      },
      {
        "name": "低价股",
        "change_pct": -0.24
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.13
      },
      {
        "name": "AI视频",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 22,
    "hot_rank_chg": -13,
    "stock_cnt": 5820,
    "price": "10.85",
    "change": "5.65",
    "market_id": "33",
    "circulate_market_value": "10052737400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 5.32
      },
      {
        "name": "光伏",
        "change_pct": -0.93
      },
      {
        "name": "储能",
        "change_pct": -0.68
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.84
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.53
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.38
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "600776",
    "name": "东方通信",
    "hot_rank": 23,
    "hot_rank_chg": 61,
    "stock_cnt": 5820,
    "price": "12.22",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "11682320800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“东方”",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.1
      },
      {
        "name": "5G",
        "change_pct": 1.1
      },
      {
        "name": "网络安全",
        "change_pct": -0.29
      },
      {
        "name": "军工集团",
        "change_pct": 0.64
      },
      {
        "name": "军工",
        "change_pct": 0.81
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.23
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.16
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "600278",
    "name": "东方创业",
    "hot_rank": 29,
    "hot_rank_chg": 38,
    "stock_cnt": 5820,
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
        "change_pct": -0.1
      },
      {
        "name": "快递物流",
        "change_pct": -0.12
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.07
      },
      {
        "name": "一带一路",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 0.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "进口博览会",
        "change_pct": 0.47
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "自贸区",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 31,
    "hot_rank_chg": 41,
    "stock_cnt": 5820,
    "price": "4.73",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5763088900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭涨价",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.56
      },
      {
        "name": "煤炭",
        "change_pct": 2.83
      },
      {
        "name": "有色金属",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 32,
    "hot_rank_chg": 85,
    "stock_cnt": 5820,
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
        "change_pct": 0.41
      },
      {
        "name": "5G",
        "change_pct": 1.1
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.28
      },
      {
        "name": "LED",
        "change_pct": 0.44
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.16
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": 1.84
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 33,
    "hot_rank_chg": 5,
    "stock_cnt": 5820,
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
        "change_pct": -0.39
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.5
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "医药商业",
        "change_pct": -0.81
      },
      {
        "name": "保健品",
        "change_pct": -0.13
      },
      {
        "name": "民营医院",
        "change_pct": -0.53
      },
      {
        "name": "医药",
        "change_pct": -0.4
      },
      {
        "name": "食品",
        "change_pct": -0.31
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.36
      },
      {
        "name": "口腔",
        "change_pct": -1.25
      },
      {
        "name": "医美",
        "change_pct": -0.74
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.23
      }
    ]
  },
  {
    "code": "002124",
    "name": "天邦食品",
    "hot_rank": 34,
    "hot_rank_chg": 185,
    "stock_cnt": 5820,
    "price": "2.20",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4339226400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -0.95
      },
      {
        "name": "养猪",
        "change_pct": 0.61
      },
      {
        "name": "社区团购",
        "change_pct": 0.74
      },
      {
        "name": "大农业",
        "change_pct": -0.29
      },
      {
        "name": "预制菜",
        "change_pct": -0.16
      },
      {
        "name": "元宇宙",
        "change_pct": -0.03
      },
      {
        "name": "低价股",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 37,
    "hot_rank_chg": -11,
    "stock_cnt": 5820,
    "price": "12.90",
    "change": "7.77",
    "market_id": "33",
    "circulate_market_value": "7307569900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "石墨烯",
        "change_pct": 0.23
      },
      {
        "name": "军民融合",
        "change_pct": 0.88
      },
      {
        "name": "物联网",
        "change_pct": 0.25
      },
      {
        "name": "LED",
        "change_pct": 0.44
      },
      {
        "name": "军工",
        "change_pct": 0.81
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.29
      },
      {
        "name": "海洋经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 39,
    "hot_rank_chg": 18,
    "stock_cnt": 5820,
    "price": "11.50",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "4610142800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商贸零售",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.07
      },
      {
        "name": "新零售",
        "change_pct": 0.72
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "物业管理",
        "change_pct": -0.45
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "地摊经济",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "002347",
    "name": "泰尔股份",
    "hot_rank": 41,
    "hot_rank_chg": 140,
    "stock_cnt": 5820,
    "price": "7.00",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3453680300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "工业机器人",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.77
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "工业自动化",
        "change_pct": 1.04
      },
      {
        "name": "风电",
        "change_pct": -0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "机器人",
        "change_pct": 1.3
      },
      {
        "name": "激光",
        "change_pct": 0.86
      },
      {
        "name": "机器视觉",
        "change_pct": 0.76
      },
      {
        "name": "智能制造",
        "change_pct": 0.54
      },
      {
        "name": "3D打印",
        "change_pct": 0.71
      },
      {
        "name": "工业互联网",
        "change_pct": 0.3
      },
      {
        "name": "数字经济",
        "change_pct": -0.27
      },
      {
        "name": "动力电池回收",
        "change_pct": -0.9
      },
      {
        "name": "超级电容",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 42,
    "hot_rank_chg": 24,
    "stock_cnt": 5820,
    "price": "5.09",
    "change": "9.94",
    "market_id": "17",
    "circulate_market_value": "2846936400.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "4",
    "change_reason": "短剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.46
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "游戏",
        "change_pct": -0.3
      },
      {
        "name": "影视",
        "change_pct": 1.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 47,
    "hot_rank_chg": 16,
    "stock_cnt": 5820,
    "price": "8.64",
    "change": "6.93",
    "market_id": "17",
    "circulate_market_value": "29046814000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.2
      },
      {
        "name": "高管增持",
        "change_pct": 0.4
      },
      {
        "name": "超高清视频",
        "change_pct": 0.11
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.07
      },
      {
        "name": "游戏",
        "change_pct": -0.3
      },
      {
        "name": "物联网",
        "change_pct": 0.25
      },
      {
        "name": "教育",
        "change_pct": -0.93
      },
      {
        "name": "智慧城市",
        "change_pct": 0.04
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "在线教育",
        "change_pct": -0.32
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 50,
    "hot_rank_chg": -18,
    "stock_cnt": 5820,
    "price": "10.90",
    "change": "-2.59",
    "market_id": "17",
    "circulate_market_value": "6995437100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.21
      },
      {
        "name": "农业种植",
        "change_pct": -0.02
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.12
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.17
      },
      {
        "name": "休闲食品",
        "change_pct": 0.14
      },
      {
        "name": "食品",
        "change_pct": -0.31
      },
      {
        "name": "食品安全",
        "change_pct": 0.29
      },
      {
        "name": "社区团购",
        "change_pct": 0.74
      },
      {
        "name": "大农业",
        "change_pct": -0.29
      },
      {
        "name": "预制菜",
        "change_pct": -0.16
      },
      {
        "name": "人造肉",
        "change_pct": -0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 56,
    "hot_rank_chg": 185,
    "stock_cnt": 5820,
    "price": "3.85",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3902762400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪经济",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.07
      },
      {
        "name": "水利",
        "change_pct": 0.05
      },
      {
        "name": "智慧城市",
        "change_pct": 0.04
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": 3.02
      },
      {
        "name": "振兴东北",
        "change_pct": 1.05
      },
      {
        "name": "大基建",
        "change_pct": -0.34
      },
      {
        "name": "中俄贸易",
        "change_pct": 0.09
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.07
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 3.29
      },
      {
        "name": "旧改",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "002088",
    "name": "鲁阳节能",
    "hot_rank": 57,
    "hot_rank_chg": -33,
    "stock_cnt": 5820,
    "price": "11.08",
    "change": "-0.09",
    "market_id": "33",
    "circulate_market_value": "5606088100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.77
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "大气治理",
        "change_pct": -0.06
      },
      {
        "name": "雄安新区",
        "change_pct": -0.15
      },
      {
        "name": "耐火材料",
        "change_pct": 0.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "环保",
        "change_pct": -0.13
      },
      {
        "name": "船舶",
        "change_pct": -0.28
      },
      {
        "name": "建筑节能",
        "change_pct": 0.25
      },
      {
        "name": "气凝胶",
        "change_pct": -0.43
      },
      {
        "name": "旧改",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 60,
    "hot_rank_chg": -12,
    "stock_cnt": 5820,
    "price": "11.16",
    "change": "14.34",
    "market_id": "33",
    "circulate_market_value": "11782961200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.27
      },
      {
        "name": "医疗器械",
        "change_pct": -0.24
      },
      {
        "name": "医药",
        "change_pct": -0.4
      },
      {
        "name": "疫苗",
        "change_pct": -1.18
      },
      {
        "name": "化学原料药",
        "change_pct": -0.41
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.33
      },
      {
        "name": "干细胞",
        "change_pct": 0.53
      },
      {
        "name": "眼科",
        "change_pct": -0.65
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 63,
    "hot_rank_chg": 38,
    "stock_cnt": 5820,
    "price": "8.91",
    "change": "4.46",
    "market_id": "33",
    "circulate_market_value": "6435620000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 0.46
      },
      {
        "name": "充电桩",
        "change_pct": -0.45
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.53
      },
      {
        "name": "军民融合",
        "change_pct": 0.88
      },
      {
        "name": "光伏",
        "change_pct": -0.93
      },
      {
        "name": "风电",
        "change_pct": -0.1
      },
      {
        "name": "军工",
        "change_pct": 0.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "特高压",
        "change_pct": -0.19
      },
      {
        "name": "自贸区",
        "change_pct": 0.14
      },
      {
        "name": "海洋经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 64,
    "hot_rank_chg": -18,
    "stock_cnt": 5820,
    "price": "6.82",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "3452444200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 0.06
      },
      {
        "name": "资产重组",
        "change_pct": 0.45
      },
      {
        "name": "仪器仪表",
        "change_pct": 0.5
      },
      {
        "name": "锂电池",
        "change_pct": -0.77
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.26
      },
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "有机硅",
        "change_pct": -0.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "供应链金融",
        "change_pct": -0.05
      },
      {
        "name": "服务器",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 66,
    "hot_rank_chg": 125,
    "stock_cnt": 5820,
    "price": "3.32",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "3342576000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "煤炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.83
      },
      {
        "name": "钢铁",
        "change_pct": -0.54
      },
      {
        "name": "煤化工",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 68,
    "hot_rank_chg": 9,
    "stock_cnt": 5820,
    "price": "4.48",
    "change": "0.90",
    "market_id": "33",
    "circulate_market_value": "11883426600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.2
      },
      {
        "name": "装修装饰",
        "change_pct": -0.01
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.03
      },
      {
        "name": "破净股",
        "change_pct": -0.35
      },
      {
        "name": "航天",
        "change_pct": 1.67
      },
      {
        "name": "旧改",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 75,
    "hot_rank_chg": 19,
    "stock_cnt": 5820,
    "price": "8.20",
    "change": "3.67",
    "market_id": "17",
    "circulate_market_value": "9367196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": 5.32
      },
      {
        "name": "核电",
        "change_pct": 0.46
      },
      {
        "name": "大飞机",
        "change_pct": 1.18
      },
      {
        "name": "大气治理",
        "change_pct": -0.06
      },
      {
        "name": "玻纤",
        "change_pct": 0.85
      },
      {
        "name": "环保",
        "change_pct": -0.13
      },
      {
        "name": "核污染防治",
        "change_pct": 0.52
      },
      {
        "name": "航天",
        "change_pct": 1.67
      },
      {
        "name": "生物安全",
        "change_pct": -0.07
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 80,
    "hot_rank_chg": 181,
    "stock_cnt": 5820,
    "price": "4.20",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "4661679100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "焦炭",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 2.83
      },
      {
        "name": "甲醇",
        "change_pct": 1.64
      },
      {
        "name": "煤化工",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 83,
    "hot_rank_chg": 0,
    "stock_cnt": 5820,
    "price": "9.69",
    "change": "2.00",
    "market_id": "33",
    "circulate_market_value": "9215528800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.23
      },
      {
        "name": "大飞机",
        "change_pct": 1.18
      },
      {
        "name": "北斗导航",
        "change_pct": 0.96
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.19
      },
      {
        "name": "军民融合",
        "change_pct": 0.88
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.26
      },
      {
        "name": "军工",
        "change_pct": 0.81
      },
      {
        "name": "碳纤维",
        "change_pct": 0.18
      },
      {
        "name": "无人机",
        "change_pct": 0.79
      },
      {
        "name": "智能制造",
        "change_pct": 0.54
      },
      {
        "name": "3D打印",
        "change_pct": 0.71
      },
      {
        "name": "航天",
        "change_pct": 1.67
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.16
      },
      {
        "name": "国资入股",
        "change_pct": 0.12
      },
      {
        "name": "低空经济",
        "change_pct": 0.76
      },
      {
        "name": "海洋经济",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002712",
    "name": "思美传媒",
    "hot_rank": 86,
    "hot_rank_chg": -28,
    "stock_cnt": 5820,
    "price": "5.87",
    "change": "-1.51",
    "market_id": "33",
    "circulate_market_value": "3175084600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "影视",
        "change_pct": 1.08
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.75
      },
      {
        "name": "知识产权",
        "change_pct": -0.42
      },
      {
        "name": "百度概念股",
        "change_pct": -0.34
      },
      {
        "name": "传媒",
        "change_pct": -0.74
      },
      {
        "name": "快手概念股",
        "change_pct": -1.02
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.34
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.68
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.11
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.13
      },
      {
        "name": "AI视频",
        "change_pct": -0.17
      },
      {
        "name": "智谱AI",
        "change_pct": -0.7
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.22
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.93
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 94,
    "hot_rank_chg": -7,
    "stock_cnt": 5820,
    "price": "4.46",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "157737420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.43
      },
      {
        "name": "手机产业链",
        "change_pct": 0.99
      },
      {
        "name": "超高清视频",
        "change_pct": 0.11
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.24
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "半导体",
        "change_pct": 0.45
      },
      {
        "name": "人工智能",
        "change_pct": 0.04
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.24
      },
      {
        "name": "VR&AR",
        "change_pct": 0.84
      },
      {
        "name": "OLED",
        "change_pct": 0.36
      },
      {
        "name": "京津冀",
        "change_pct": -0.43
      },
      {
        "name": "物联网",
        "change_pct": 0.25
      },
      {
        "name": "指纹识别",
        "change_pct": 0.39
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.32
      },
      {
        "name": "白马股",
        "change_pct": -0.37
      },
      {
        "name": "智能制造",
        "change_pct": 0.54
      },
      {
        "name": "小米概念股",
        "change_pct": 0.67
      },
      {
        "name": "国产芯片",
        "change_pct": 0.65
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.38
      },
      {
        "name": "全息概念",
        "change_pct": 0.59
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.09
      },
      {
        "name": "MicroLED",
        "change_pct": 0.29
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.53
      },
      {
        "name": "智能手表",
        "change_pct": 1.07
      },
      {
        "name": "MiniLED",
        "change_pct": 1.25
      },
      {
        "name": "传感器",
        "change_pct": 0.94
      },
      {
        "name": "大硅片",
        "change_pct": -0.55
      },
      {
        "name": "AI PC",
        "change_pct": 1.44
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "回购",
        "change_pct": 0.17
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.52
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.22
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "002488",
    "name": "金固股份",
    "hot_rank": 95,
    "hot_rank_chg": 239,
    "stock_cnt": 5820,
    "price": "7.48",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6882228300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.4
      },
      {
        "name": "特斯拉",
        "change_pct": 0.72
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "机器人",
        "change_pct": 1.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.28
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.19
      },
      {
        "name": "数字人民币",
        "change_pct": -0.65
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 99,
    "hot_rank_chg": 9,
    "stock_cnt": 5820,
    "price": "7.58",
    "change": "2.85",
    "market_id": "33",
    "circulate_market_value": "14137328000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -0.45
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.28
      },
      {
        "name": "军民融合",
        "change_pct": 0.88
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.13
      },
      {
        "name": "风电",
        "change_pct": -0.1
      },
      {
        "name": "军工",
        "change_pct": 0.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.01
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.19
      },
      {
        "name": "轮边电机",
        "change_pct": 1.29
      },
      {
        "name": "人形机器人",
        "change_pct": 2.24
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "4.37", "change": "10.08", "market_id": "33", "circulate_market_value": "6908844400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.16}, {"name": "体外诊断", "change_pct": -0.38}, {"name": "医疗器械", "change_pct": -0.24}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "基因测序", "change_pct": 0.22}, {"name": "预制菜", "change_pct": -0.16}, {"name": "水产养殖", "change_pct": 0.53}, {"name": "新冠病毒防治", "change_pct": -0.23}, {"name": "海洋经济", "change_pct": 0.58}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 2, "hot_rank_chg": 12, "stock_cnt": 5820, "price": "15.95", "change": "10.00", "market_id": "33", "circulate_market_value": "10529020800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪产业"}, {"code": "603366", "name": "日出东方", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5820, "price": "9.89", "change": "10.01", "market_id": "17", "circulate_market_value": "8041045700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "光伏", "change_pct": -0.93}, {"name": "家电", "change_pct": 0.73}, {"name": "储能", "change_pct": -0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.81}, {"name": "华为鸿蒙", "change_pct": -0.61}, {"name": "厨卫家电", "change_pct": 1.25}, {"name": "华为产业链", "change_pct": 0.28}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5820, "price": "9.57", "change": "10.00", "market_id": "33", "circulate_market_value": "5743117100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.05}, {"name": "边缘计算", "change_pct": -0.06}, {"name": "核电", "change_pct": 0.46}, {"name": "海工装备", "change_pct": -0.4}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "云计算数据中心", "change_pct": 0.28}, {"name": "冷链", "change_pct": 0.48}, {"name": "地热", "change_pct": 0.98}, {"name": "储能", "change_pct": -0.68}, {"name": "碳中和", "change_pct": -0.4}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 3.02}, {"name": "汽车热管理", "change_pct": 1.7}, {"name": "热泵", "change_pct": 1.81}, {"name": "液冷服务器", "change_pct": 1.18}, {"name": "蜜雪冰城概念股", "change_pct": 0.33}, {"name": "海洋经济", "change_pct": 0.58}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 5, "hot_rank_chg": 28, "stock_cnt": 5820, "price": "10.54", "change": "10.02", "market_id": "33", "circulate_market_value": "11171927500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.56}, {"name": "电子烟", "change_pct": 1.17}, {"name": "一带一路", "change_pct": -0.07}, {"name": "造纸", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "包装印刷", "change_pct": -0.34}, {"name": "卫星互联网", "change_pct": 2.16}, {"name": "太空算力", "change_pct": 2.73}]}, {"code": "002310", "name": "东方新能", "hot_rank": 6, "hot_rank_chg": 13, "stock_cnt": 5820, "price": "2.55", "change": "9.91", "market_id": "33", "circulate_market_value": "11217474100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.45}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "京津冀", "change_pct": -0.43}, {"name": "旅游", "change_pct": -0.22}, {"name": "园林", "change_pct": 0.3}, {"name": "海绵城市", "change_pct": -0.72}, {"name": "固废处理", "change_pct": -0.1}, {"name": "雄安新区", "change_pct": -0.15}, {"name": "北京城市规划", "change_pct": -0.3}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.13}, {"name": "碳中和", "change_pct": -0.4}, {"name": "乡村振兴", "change_pct": -0.17}, {"name": "汽车拆解", "change_pct": 0.46}, {"name": "土壤修复", "change_pct": -0.3}, {"name": "核污染防治", "change_pct": 0.52}, {"name": "新型城镇化", "change_pct": -0.07}, {"name": "低价股", "change_pct": -0.24}, {"name": "西部大开发", "change_pct": 0.44}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 7, "hot_rank_chg": 11, "stock_cnt": 5820, "price": "5.51", "change": "9.98", "market_id": "33", "circulate_market_value": "4745005700.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "光伏边框", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.56}, {"name": "一带一路", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "福建自贸/海西概念", "change_pct": 0.53}, {"name": "光伏", "change_pct": -0.93}, {"name": "有色金属", "change_pct": 0.28}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "新能源车零部件", "change_pct": 1.19}, {"name": "自贸区", "change_pct": 0.14}, {"name": "液冷服务器", "change_pct": 1.18}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5820, "price": "5.32", "change": "-1.48", "market_id": "17", "circulate_market_value": "7102481800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "LED", "change_pct": 0.44}, {"name": "卫星互联网", "change_pct": 2.16}]}, {"code": "000525", "name": "红太阳", "hot_rank": 9, "hot_rank_chg": 31, "stock_cnt": 5820, "price": "5.52", "change": "9.96", "market_id": "33", "circulate_market_value": "6136915200.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "草铵膦", "change_pct": 0.28}, {"name": "农药", "change_pct": -0.75}, {"name": "长寿药NMN", "change_pct": -0.05}, {"name": "大农业", "change_pct": -0.29}, {"name": "虫害防治", "change_pct": -0.14}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5820, "price": "26.10", "change": "3.98", "market_id": "33", "circulate_market_value": "19882083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 11, "hot_rank_chg": 33, "stock_cnt": 5820, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "5469918900.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "高速公路", "change_pct": 1.05}, {"name": "振兴东北", "change_pct": 1.05}, {"name": "黑龙江自贸区", "change_pct": 3.29}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5820, "price": "5.38", "change": "5.91", "market_id": "17", "circulate_market_value": "6243718400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "纺织服装", "change_pct": -0.16}, {"name": "浙江国企改革", "change_pct": -0.23}, {"name": "影视", "change_pct": 1.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.01}, {"name": "短剧/互动影游", "change_pct": 0.13}]}, {"code": "600327", "name": "大东方", "hot_rank": 13, "hot_rank_chg": 7, "stock_cnt": 5820, "price": "5.40", "change": "9.98", "market_id": "17", "circulate_market_value": "4777809400.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "“东方”", "xgb_concepts": [{"name": "新零售", "change_pct": 0.72}, {"name": "优化生育（三孩）", "change_pct": -0.5}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "信托", "change_pct": -0.29}, {"name": "民营医院", "change_pct": -0.53}, {"name": "社区团购", "change_pct": 0.74}, {"name": "大金融", "change_pct": 0.4}, {"name": "餐饮", "change_pct": -0.93}, {"name": "首发经济", "change_pct": 0.78}]}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 14, "hot_rank_chg": 22, "stock_cnt": 5820, "price": "16.40", "change": "9.99", "market_id": "33", "circulate_market_value": "4121066700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”"}, {"code": "002149", "name": "西部材料", "hot_rank": 15, "hot_rank_chg": 14, "stock_cnt": 5820, "price": "41.51", "change": "9.99", "market_id": "33", "circulate_market_value": "20262655000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "000823", "name": "超声电子", "hot_rank": 16, "hot_rank_chg": 40, "stock_cnt": 5820, "price": "17.86", "change": "9.97", "market_id": "33", "circulate_market_value": "10625488500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "印制电路板"}, {"code": "688836", "name": "宇树科技", "hot_rank": 17, "hot_rank_chg": -15, "stock_cnt": 5820, "price": "716.00", "change": "9.04", "market_id": "17", "circulate_market_value": "21542808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 18, "hot_rank_chg": 16, "stock_cnt": 5820, "price": "2.59", "change": "10.21", "market_id": "17", "circulate_market_value": "7413544100.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.46}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "游戏", "change_pct": -0.3}, {"name": "影视", "change_pct": 1.08}, {"name": "低价股", "change_pct": -0.24}, {"name": "国企改革", "change_pct": -0.01}, {"name": "短剧/互动影游", "change_pct": 0.13}, {"name": "AI视频", "change_pct": -0.17}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 19, "hot_rank_chg": -16, "stock_cnt": 5820, "price": "452.03", "change": "0.90", "market_id": "33", "circulate_market_value": "501724820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "81.49", "change": "1.62", "market_id": "33", "circulate_market_value": "112971357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5820, "price": "57.50", "change": "4.55", "market_id": "17", "circulate_market_value": "67993125000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 22, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "10.85", "change": "5.65", "market_id": "33", "circulate_market_value": "10052737400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 5.32}, {"name": "光伏", "change_pct": -0.93}, {"name": "储能", "change_pct": -0.68}, {"name": "BIPV概念", "change_pct": -0.84}, {"name": "钙钛矿电池", "change_pct": -0.53}, {"name": "异质结电池HJT", "change_pct": -0.38}, {"name": "光伏胶膜", "change_pct": -0.5}]}, {"code": "600776", "name": "东方通信", "hot_rank": 23, "hot_rank_chg": 61, "stock_cnt": 5820, "price": "12.22", "change": "9.99", "market_id": "17", "circulate_market_value": "11682320800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.1}, {"name": "5G", "change_pct": 1.1}, {"name": "网络安全", "change_pct": -0.29}, {"name": "军工集团", "change_pct": 0.64}, {"name": "军工", "change_pct": 0.81}, {"name": "国企改革", "change_pct": -0.01}, {"name": "华为云·鲲鹏", "change_pct": -0.23}, {"name": "卫星互联网", "change_pct": 2.16}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "AI大模型/智能体", "change_pct": -0.4}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 24, "hot_rank_chg": -18, "stock_cnt": 5820, "price": "39.99", "change": "-1.04", "market_id": "17", "circulate_market_value": "180076530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 25, "hot_rank_chg": 26, "stock_cnt": 5820, "price": "77.10", "change": "5.31", "market_id": "33", "circulate_market_value": "149002610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300567", "name": "精测电子", "hot_rank": 26, "hot_rank_chg": 657, "stock_cnt": 5820, "price": "113.27", "change": "-1.07", "market_id": "33", "circulate_market_value": "25717956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 27, "hot_rank_chg": 25, "stock_cnt": 5820, "price": "21.97", "change": "10.02", "market_id": "33", "circulate_market_value": "11196578800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人关节"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 28, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "17.51", "change": "-1.46", "market_id": "33", "circulate_market_value": "8047802600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600278", "name": "东方创业", "hot_rank": 29, "hot_rank_chg": 38, "stock_cnt": 5820, "price": "7.83", "change": "9.97", "market_id": "17", "circulate_market_value": "6737861100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“东方”", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.1}, {"name": "快递物流", "change_pct": -0.12}, {"name": "上海国企改革", "change_pct": 0.07}, {"name": "一带一路", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "破净股", "change_pct": -0.35}, {"name": "上海自由贸易港", "change_pct": 0.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "进口博览会", "change_pct": 0.47}, {"name": "自由贸易港", "change_pct": 0.15}, {"name": "国企改革", "change_pct": -0.01}, {"name": "自贸区", "change_pct": 0.14}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 30, "hot_rank_chg": 11, "stock_cnt": 5820, "price": "66.03", "change": "0.12", "market_id": "33", "circulate_market_value": "47887370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 31, "hot_rank_chg": 41, "stock_cnt": 5820, "price": "4.73", "change": "10.00", "market_id": "17", "circulate_market_value": "5763088900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭涨价", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.56}, {"name": "煤炭", "change_pct": 2.83}, {"name": "有色金属", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -0.01}, {"name": "河南国企改革", "change_pct": 0.8}]}, {"code": "603703", "name": "盛洋科技", "hot_rank": 32, "hot_rank_chg": 85, "stock_cnt": 5820, "price": "11.10", "change": "10.01", "market_id": "17", "circulate_market_value": "4606301500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.41}, {"name": "5G", "change_pct": 1.1}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "云计算数据中心", "change_pct": 0.28}, {"name": "LED", "change_pct": 0.44}, {"name": "卫星互联网", "change_pct": 2.16}, {"name": "铜缆高速连接器", "change_pct": 1.84}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 33, "hot_rank_chg": 5, "stock_cnt": 5820, "price": "6.18", "change": "9.96", "market_id": "33", "circulate_market_value": "4728569700.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -0.39}, {"name": "优化生育（三孩）", "change_pct": -0.5}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "医药商业", "change_pct": -0.81}, {"name": "保健品", "change_pct": -0.13}, {"name": "民营医院", "change_pct": -0.53}, {"name": "医药", "change_pct": -0.4}, {"name": "食品", "change_pct": -0.31}, {"name": "辅助生殖", "change_pct": -0.36}, {"name": "口腔", "change_pct": -1.25}, {"name": "医美", "change_pct": -0.74}, {"name": "新冠病毒防治", "change_pct": -0.23}]}, {"code": "002124", "name": "天邦食品", "hot_rank": 34, "hot_rank_chg": 185, "stock_cnt": 5820, "price": "2.20", "change": "10.00", "market_id": "33", "circulate_market_value": "4339226400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "生猪养殖", "xgb_concepts": [{"name": "饲料", "change_pct": -0.95}, {"name": "养猪", "change_pct": 0.61}, {"name": "社区团购", "change_pct": 0.74}, {"name": "大农业", "change_pct": -0.29}, {"name": "预制菜", "change_pct": -0.16}, {"name": "元宇宙", "change_pct": -0.03}, {"name": "低价股", "change_pct": -0.24}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 35, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "13.65", "change": "5.49", "market_id": "17", "circulate_market_value": "14262719000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 36, "hot_rank_chg": -24, "stock_cnt": 5820, "price": "176.00", "change": "2.27", "market_id": "33", "circulate_market_value": "220831380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 37, "hot_rank_chg": -11, "stock_cnt": 5820, "price": "12.90", "change": "7.77", "market_id": "33", "circulate_market_value": "7307569900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "石墨烯", "change_pct": 0.23}, {"name": "军民融合", "change_pct": 0.88}, {"name": "物联网", "change_pct": 0.25}, {"name": "LED", "change_pct": 0.44}, {"name": "军工", "change_pct": 0.81}, {"name": "智慧灯杆", "change_pct": 0.29}, {"name": "海洋经济", "change_pct": 0.58}]}, {"code": "688585", "name": "上纬新材", "hot_rank": 38, "hot_rank_chg": 16, "stock_cnt": 5820, "price": "216.02", "change": "20.00", "market_id": "17", "circulate_market_value": "87134200000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "600838", "name": "上海九百", "hot_rank": 39, "hot_rank_chg": 18, "stock_cnt": 5820, "price": "11.50", "change": "10.05", "market_id": "17", "circulate_market_value": "4610142800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商贸零售", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.07}, {"name": "新零售", "change_pct": 0.72}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "物业管理", "change_pct": -0.45}, {"name": "国企改革", "change_pct": -0.01}, {"name": "地摊经济", "change_pct": 0.2}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 40, "hot_rank_chg": -30, "stock_cnt": 5820, "price": "35.80", "change": "2.79", "market_id": "33", "circulate_market_value": "36576858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002347", "name": "泰尔股份", "hot_rank": 41, "hot_rank_chg": 140, "stock_cnt": 5820, "price": "7.00", "change": "10.06", "market_id": "33", "circulate_market_value": "3453680300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "工业机器人", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.77}, {"name": "人工智能", "change_pct": 0.04}, {"name": "工业自动化", "change_pct": 1.04}, {"name": "风电", "change_pct": -0.1}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "机器人", "change_pct": 1.3}, {"name": "激光", "change_pct": 0.86}, {"name": "机器视觉", "change_pct": 0.76}, {"name": "智能制造", "change_pct": 0.54}, {"name": "3D打印", "change_pct": 0.71}, {"name": "工业互联网", "change_pct": 0.3}, {"name": "数字经济", "change_pct": -0.27}, {"name": "动力电池回收", "change_pct": -0.9}, {"name": "超级电容", "change_pct": 0.35}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 42, "hot_rank_chg": 24, "stock_cnt": 5820, "price": "5.09", "change": "9.94", "market_id": "17", "circulate_market_value": "2846936400.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "短剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.46}, {"name": "ST摘帽", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "游戏", "change_pct": -0.3}, {"name": "影视", "change_pct": 1.08}, {"name": "短剧/互动影游", "change_pct": 0.13}]}, {"code": "300136", "name": "信维通信", "hot_rank": 43, "hot_rank_chg": -27, "stock_cnt": 5820, "price": "47.70", "change": "12.77", "market_id": "33", "circulate_market_value": "39358353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 44, "hot_rank_chg": -19, "stock_cnt": 5820, "price": "44.45", "change": "-0.31", "market_id": "33", "circulate_market_value": "10171113500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 45, "hot_rank_chg": -15, "stock_cnt": 5820, "price": "24.06", "change": "6.98", "market_id": "33", "circulate_market_value": "4576151900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 46, "hot_rank_chg": 1, "stock_cnt": 5820, "price": "38.30", "change": "0.03", "market_id": "17", "circulate_market_value": "32422993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600637", "name": "东方明珠", "hot_rank": 47, "hot_rank_chg": 16, "stock_cnt": 5820, "price": "8.64", "change": "6.93", "market_id": "17", "circulate_market_value": "29046814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.2}, {"name": "高管增持", "change_pct": 0.4}, {"name": "超高清视频", "change_pct": 0.11}, {"name": "电竞", "change_pct": -0.13}, {"name": "上海国企改革", "change_pct": 0.07}, {"name": "游戏", "change_pct": -0.3}, {"name": "物联网", "change_pct": 0.25}, {"name": "教育", "change_pct": -0.93}, {"name": "智慧城市", "change_pct": 0.04}, {"name": "破净股", "change_pct": -0.35}, {"name": "传媒", "change_pct": -0.74}, {"name": "东数西算/算力", "change_pct": 0.08}, {"name": "国企改革", "change_pct": -0.01}, {"name": "在线教育", "change_pct": -0.32}, {"name": "AI大模型/智能体", "change_pct": -0.4}, {"name": "短剧/互动影游", "change_pct": 0.13}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 48, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "42.21", "change": "3.20", "market_id": "17", "circulate_market_value": "103568409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603706", "name": "东方环宇", "hot_rank": 49, "hot_rank_chg": 153, "stock_cnt": 5820, "price": "20.19", "change": "10.03", "market_id": "17", "circulate_market_value": "3823637000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“东方”"}, {"code": "600127", "name": "金健米业", "hot_rank": 50, "hot_rank_chg": -18, "stock_cnt": 5820, "price": "10.90", "change": "-2.59", "market_id": "17", "circulate_market_value": "6995437100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.21}, {"name": "农业种植", "change_pct": -0.02}, {"name": "湖南国企改革", "change_pct": 0.12}, {"name": "乡村振兴", "change_pct": -0.17}, {"name": "休闲食品", "change_pct": 0.14}, {"name": "食品", "change_pct": -0.31}, {"name": "食品安全", "change_pct": 0.29}, {"name": "社区团购", "change_pct": 0.74}, {"name": "大农业", "change_pct": -0.29}, {"name": "预制菜", "change_pct": -0.16}, {"name": "人造肉", "change_pct": -0.4}, {"name": "国企改革", "change_pct": -0.01}]}, {"code": "600641", "name": "先导基电", "hot_rank": 51, "hot_rank_chg": -6, "stock_cnt": 5820, "price": "32.72", "change": "4.20", "market_id": "17", "circulate_market_value": "30450211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002611", "name": "东方精工", "hot_rank": 52, "hot_rank_chg": 28, "stock_cnt": 5820, "price": "14.73", "change": "5.89", "market_id": "33", "circulate_market_value": "14788366000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 53, "hot_rank_chg": -26, "stock_cnt": 5820, "price": "42.57", "change": "4.57", "market_id": "17", "circulate_market_value": "844763010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 54, "hot_rank_chg": -17, "stock_cnt": 5820, "price": "13.51", "change": "9.04", "market_id": "17", "circulate_market_value": "3952728800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 55, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "74.37", "change": "2.68", "market_id": "33", "circulate_market_value": "48564168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 56, "hot_rank_chg": 185, "stock_cnt": 5820, "price": "3.85", "change": "10.00", "market_id": "17", "circulate_market_value": "3902762400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪经济", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.07}, {"name": "水利", "change_pct": 0.05}, {"name": "智慧城市", "change_pct": 0.04}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": 3.02}, {"name": "振兴东北", "change_pct": 1.05}, {"name": "大基建", "change_pct": -0.34}, {"name": "中俄贸易", "change_pct": 0.09}, {"name": "新型城镇化", "change_pct": -0.07}, {"name": "黑龙江自贸区", "change_pct": 3.29}, {"name": "旧改", "change_pct": -0.41}]}, {"code": "002088", "name": "鲁阳节能", "hot_rank": 57, "hot_rank_chg": -33, "stock_cnt": 5820, "price": "11.08", "change": "-0.09", "market_id": "33", "circulate_market_value": "5606088100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.77}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "大气治理", "change_pct": -0.06}, {"name": "雄安新区", "change_pct": -0.15}, {"name": "耐火材料", "change_pct": 0.33}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "环保", "change_pct": -0.13}, {"name": "船舶", "change_pct": -0.28}, {"name": "建筑节能", "change_pct": 0.25}, {"name": "气凝胶", "change_pct": -0.43}, {"name": "旧改", "change_pct": -0.41}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 58, "hot_rank_chg": -9, "stock_cnt": 5820, "price": "238.41", "change": "-0.45", "market_id": "17", "circulate_market_value": "159905960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 59, "hot_rank_chg": -20, "stock_cnt": 5820, "price": "52.09", "change": "6.50", "market_id": "17", "circulate_market_value": "15547753000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 60, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "11.16", "change": "14.34", "market_id": "33", "circulate_market_value": "11782961200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.27}, {"name": "医疗器械", "change_pct": -0.24}, {"name": "医药", "change_pct": -0.4}, {"name": "疫苗", "change_pct": -1.18}, {"name": "化学原料药", "change_pct": -0.41}, {"name": "肝炎概念", "change_pct": -0.33}, {"name": "干细胞", "change_pct": 0.53}, {"name": "眼科", "change_pct": -0.65}, {"name": "肿瘤疫苗", "change_pct": 1.27}]}, {"code": "301010", "name": "晶雪节能", "hot_rank": 61, "hot_rank_chg": 24, "stock_cnt": 5820, "price": "26.21", "change": "20.01", "market_id": "33", "circulate_market_value": "2830680000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪经济"}, {"code": "002929", "name": "润建股份", "hot_rank": 62, "hot_rank_chg": -20, "stock_cnt": 5820, "price": "59.00", "change": "-6.51", "market_id": "33", "circulate_market_value": "12781051100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002300", "name": "太阳电缆", "hot_rank": 63, "hot_rank_chg": 38, "stock_cnt": 5820, "price": "8.91", "change": "4.46", "market_id": "33", "circulate_market_value": "6435620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": 0.46}, {"name": "充电桩", "change_pct": -0.45}, {"name": "福建自贸/海西概念", "change_pct": 0.53}, {"name": "军民融合", "change_pct": 0.88}, {"name": "光伏", "change_pct": -0.93}, {"name": "风电", "change_pct": -0.1}, {"name": "军工", "change_pct": 0.81}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "特高压", "change_pct": -0.19}, {"name": "自贸区", "change_pct": 0.14}, {"name": "海洋经济", "change_pct": 0.58}]}, {"code": "002388", "name": "新亚制程", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5820, "price": "6.82", "change": "2.25", "market_id": "33", "circulate_market_value": "3452444200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电子特气", "change_pct": 0.06}, {"name": "资产重组", "change_pct": 0.45}, {"name": "仪器仪表", "change_pct": 0.5}, {"name": "锂电池", "change_pct": -0.77}, {"name": "ST摘帽", "change_pct": 0.26}, {"name": "强势人气股", "change_pct": 3.2}, {"name": "有机硅", "change_pct": -0.81}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "供应链金融", "change_pct": -0.05}, {"name": "服务器", "change_pct": 1.48}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 65, "hot_rank_chg": -10, "stock_cnt": 5820, "price": "122.82", "change": "0.67", "market_id": "33", "circulate_market_value": "133675820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600408", "name": "安泰集团", "hot_rank": 66, "hot_rank_chg": 125, "stock_cnt": 5820, "price": "3.32", "change": "9.93", "market_id": "17", "circulate_market_value": "3342576000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "煤炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.83}, {"name": "钢铁", "change_pct": -0.54}, {"name": "煤化工", "change_pct": 1.82}]}, {"code": "002156", "name": "通富微电", "hot_rank": 67, "hot_rank_chg": 39, "stock_cnt": 5820, "price": "43.21", "change": "-1.68", "market_id": "33", "circulate_market_value": "65569111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 68, "hot_rank_chg": 9, "stock_cnt": 5820, "price": "4.48", "change": "0.90", "market_id": "33", "circulate_market_value": "11883426600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.2}, {"name": "装修装饰", "change_pct": -0.01}, {"name": "装配式建筑", "change_pct": 0.03}, {"name": "破净股", "change_pct": -0.35}, {"name": "航天", "change_pct": 1.67}, {"name": "旧改", "change_pct": -0.41}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 69, "hot_rank_chg": -46, "stock_cnt": 5820, "price": "77.85", "change": "-5.03", "market_id": "33", "circulate_market_value": "123583735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 70, "hot_rank_chg": -11, "stock_cnt": 5820, "price": "28.83", "change": "6.78", "market_id": "17", "circulate_market_value": "36660847000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 71, "hot_rank_chg": 8, "stock_cnt": 5820, "price": "14.36", "change": "-0.28", "market_id": "33", "circulate_market_value": "47819776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 72, "hot_rank_chg": 108, "stock_cnt": 5820, "price": "43.86", "change": "10.01", "market_id": "33", "circulate_market_value": "8884977100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人"}, {"code": "603381", "name": "永臻股份", "hot_rank": 73, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "19.90", "change": "-4.05", "market_id": "17", "circulate_market_value": "2828540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001316", "name": "润贝航科", "hot_rank": 74, "hot_rank_chg": 158, "stock_cnt": 5820, "price": "30.60", "change": "9.99", "market_id": "33", "circulate_market_value": "4622827500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "航材国产化"}, {"code": "603601", "name": "再升科技", "hot_rank": 75, "hot_rank_chg": 19, "stock_cnt": 5820, "price": "8.20", "change": "3.67", "market_id": "17", "circulate_market_value": "9367196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": 5.32}, {"name": "核电", "change_pct": 0.46}, {"name": "大飞机", "change_pct": 1.18}, {"name": "大气治理", "change_pct": -0.06}, {"name": "玻纤", "change_pct": 0.85}, {"name": "环保", "change_pct": -0.13}, {"name": "核污染防治", "change_pct": 0.52}, {"name": "航天", "change_pct": 1.67}, {"name": "生物安全", "change_pct": -0.07}, {"name": "中芯国际概念股", "change_pct": -0.04}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 76, "hot_rank_chg": -55, "stock_cnt": 5820, "price": "69.77", "change": "2.78", "market_id": "33", "circulate_market_value": "5489086000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 77, "hot_rank_chg": 18, "stock_cnt": 5820, "price": "150.29", "change": "2.24", "market_id": "17", "circulate_market_value": "371709290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 78, "hot_rank_chg": -10, "stock_cnt": 5820, "price": "13.73", "change": "1.18", "market_id": "17", "circulate_market_value": "4692356500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 79, "hot_rank_chg": 3, "stock_cnt": 5820, "price": "16.91", "change": "4.71", "market_id": "17", "circulate_market_value": "5697101100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 80, "hot_rank_chg": 181, "stock_cnt": 5820, "price": "4.20", "change": "9.95", "market_id": "17", "circulate_market_value": "4661679100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "焦炭", "xgb_concepts": [{"name": "煤炭", "change_pct": 2.83}, {"name": "甲醇", "change_pct": 1.64}, {"name": "煤化工", "change_pct": 1.82}]}, {"code": "600879", "name": "航天电子", "hot_rank": 81, "hot_rank_chg": 39, "stock_cnt": 5820, "price": "13.56", "change": "4.31", "market_id": "17", "circulate_market_value": "44738499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 82, "hot_rank_chg": -20, "stock_cnt": 5820, "price": "16.70", "change": "1.64", "market_id": "33", "circulate_market_value": "2962713600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 83, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "9.69", "change": "2.00", "market_id": "33", "circulate_market_value": "9215528800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.23}, {"name": "大飞机", "change_pct": 1.18}, {"name": "北斗导航", "change_pct": 0.96}, {"name": "高铁轨交", "change_pct": 0.19}, {"name": "军民融合", "change_pct": 0.88}, {"name": "磁悬浮", "change_pct": -0.26}, {"name": "军工", "change_pct": 0.81}, {"name": "碳纤维", "change_pct": 0.18}, {"name": "无人机", "change_pct": 0.79}, {"name": "智能制造", "change_pct": 0.54}, {"name": "3D打印", "change_pct": 0.71}, {"name": "航天", "change_pct": 1.67}, {"name": "卫星互联网", "change_pct": 2.16}, {"name": "国资入股", "change_pct": 0.12}, {"name": "低空经济", "change_pct": 0.76}, {"name": "海洋经济", "change_pct": 0.58}]}, {"code": "601595", "name": "上海电影", "hot_rank": 84, "hot_rank_chg": -11, "stock_cnt": 5820, "price": "38.70", "change": "8.22", "market_id": "17", "circulate_market_value": "17345340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301718", "name": "通则康威", "hot_rank": 85, "hot_rank_chg": 49, "stock_cnt": 5820, "price": "57.48", "change": "20.00", "market_id": "33", "circulate_market_value": "1986884400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信"}, {"code": "002712", "name": "思美传媒", "hot_rank": 86, "hot_rank_chg": -28, "stock_cnt": 5820, "price": "5.87", "change": "-1.51", "market_id": "33", "circulate_market_value": "3175084600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.04}, {"name": "影视", "change_pct": 1.08}, {"name": "直播/短视频", "change_pct": -0.75}, {"name": "知识产权", "change_pct": -0.42}, {"name": "百度概念股", "change_pct": -0.34}, {"name": "传媒", "change_pct": -0.74}, {"name": "快手概念股", "change_pct": -1.02}, {"name": "虚拟数字人", "change_pct": -0.34}, {"name": "字节跳动概念股", "change_pct": -0.68}, {"name": "网红/MCN", "change_pct": -0.11}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "短剧/互动影游", "change_pct": 0.13}, {"name": "AI视频", "change_pct": -0.17}, {"name": "智谱AI", "change_pct": -0.7}, {"name": "IP经济/谷子经济", "change_pct": -0.22}, {"name": "小红书概念股", "change_pct": -0.93}]}, {"code": "002811", "name": "郑中设计", "hot_rank": 87, "hot_rank_chg": 193, "stock_cnt": 5820, "price": "22.59", "change": "9.98", "market_id": "33", "circulate_market_value": "6394399700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "入股深迪半导体"}, {"code": "001309", "name": "德明利", "hot_rank": 88, "hot_rank_chg": 9, "stock_cnt": 5820, "price": "187.37", "change": "0.76", "market_id": "33", "circulate_market_value": "43548177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002864", "name": "盘龙药业", "hot_rank": 89, "hot_rank_chg": 240, "stock_cnt": 5820, "price": "22.21", "change": "10.01", "market_id": "33", "circulate_market_value": "2189833300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中药创新药"}, {"code": "300750", "name": "宁德时代", "hot_rank": 90, "hot_rank_chg": -59, "stock_cnt": 5820, "price": "248.64", "change": "-2.19", "market_id": "33", "circulate_market_value": "1059359830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000026", "name": "飞亚达", "hot_rank": 91, "hot_rank_chg": 383, "stock_cnt": 5820, "price": "20.19", "change": "10.03", "market_id": "33", "circulate_market_value": "7357999600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "精密减速器"}, {"code": "600584", "name": "长电科技", "hot_rank": 92, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "52.03", "change": "-0.91", "market_id": "17", "circulate_market_value": "93103240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600875", "name": "东方电气", "hot_rank": 93, "hot_rank_chg": 56, "stock_cnt": 5820, "price": "22.54", "change": "-0.66", "market_id": "17", "circulate_market_value": "51016283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 94, "hot_rank_chg": -7, "stock_cnt": 5820, "price": "4.46", "change": "0.00", "market_id": "33", "circulate_market_value": "157737420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.43}, {"name": "手机产业链", "change_pct": 0.99}, {"name": "超高清视频", "change_pct": 0.11}, {"name": "苹果产业链", "change_pct": 1.24}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 0.45}, {"name": "人工智能", "change_pct": 0.04}, {"name": "互联网医疗", "change_pct": -1.24}, {"name": "VR&AR", "change_pct": 0.84}, {"name": "OLED", "change_pct": 0.36}, {"name": "京津冀", "change_pct": -0.43}, {"name": "物联网", "change_pct": 0.25}, {"name": "指纹识别", "change_pct": 0.39}, {"name": "汽车零部件", "change_pct": 1.32}, {"name": "白马股", "change_pct": -0.37}, {"name": "智能制造", "change_pct": 0.54}, {"name": "小米概念股", "change_pct": 0.67}, {"name": "国产芯片", "change_pct": 0.65}, {"name": "液晶面板/LCD", "change_pct": 0.38}, {"name": "全息概念", "change_pct": 0.59}, {"name": "理想汽车概念股", "change_pct": 1.09}, {"name": "MicroLED", "change_pct": 0.29}, {"name": "钙钛矿电池", "change_pct": -0.53}, {"name": "智能手表", "change_pct": 1.07}, {"name": "MiniLED", "change_pct": 1.25}, {"name": "传感器", "change_pct": 0.94}, {"name": "大硅片", "change_pct": -0.55}, {"name": "AI PC", "change_pct": 1.44}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "回购", "change_pct": 0.17}, {"name": "光电共封装CPO", "change_pct": 1.52}, {"name": "智能眼镜/MR头显", "change_pct": 1.22}, {"name": "玻璃基板封装", "change_pct": 0.64}]}, {"code": "002488", "name": "金固股份", "hot_rank": 95, "hot_rank_chg": 239, "stock_cnt": 5820, "price": "7.48", "change": "10.00", "market_id": "33", "circulate_market_value": "6882228300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.4}, {"name": "特斯拉", "change_pct": 0.72}, {"name": "汽车零部件", "change_pct": 1.32}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "机器人", "change_pct": 1.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "阿里巴巴概念股", "change_pct": -0.28}, {"name": "新能源车零部件", "change_pct": 1.19}, {"name": "数字人民币", "change_pct": -0.65}]}, {"code": "603920", "name": "世运电路", "hot_rank": 96, "hot_rank_chg": 113, "stock_cnt": 5820, "price": "33.58", "change": "9.99", "market_id": "17", "circulate_market_value": "24197490000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "回购"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 97, "hot_rank_chg": -16, "stock_cnt": 5820, "price": "254.00", "change": "5.83", "market_id": "17", "circulate_market_value": "103209932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 98, "hot_rank_chg": -33, "stock_cnt": 5820, "price": "851.21", "change": "6.02", "market_id": "17", "circulate_market_value": "535286820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 99, "hot_rank_chg": 9, "stock_cnt": 5820, "price": "7.58", "change": "2.85", "market_id": "33", "circulate_market_value": "14137328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -0.45}, {"name": "云计算数据中心", "change_pct": 0.28}, {"name": "军民融合", "change_pct": 0.88}, {"name": "氢能源/燃料电池", "change_pct": 0.13}, {"name": "风电", "change_pct": -0.1}, {"name": "军工", "change_pct": 0.81}, {"name": "新能源汽车", "change_pct": 0.01}, {"name": "新能源车零部件", "change_pct": 1.19}, {"name": "轮边电机", "change_pct": 1.29}, {"name": "人形机器人", "change_pct": 2.24}]}, {"code": "603683", "name": "晶华新材", "hot_rank": 100, "hot_rank_chg": 147, "stock_cnt": 5820, "price": "18.13", "change": "10.01", "market_id": "17", "circulate_market_value": "5229292900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人触觉"}];
const LIMIT_UP_POOL = [{"code": "603683", "name": "晶华新材", "price": 18.13, "change_pct": 10.01, "reason": "1、公司柔性触觉传感器适配人形机器人灵巧手等场景，相关产品已实现小批量量产，并与多家具身智能、灵巧手领域头部企业开展合作；\n2、公司为电池组装过程提供各类胶带，已成熟运用于软包电池、半固态电池；\n3、公司已实现在折叠屏手机应用场景上的产品突破并实现量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.99, "first_limit_up": 1794188293, "break_limit_up_times": 1}, {"code": "603660", "name": "苏州科达", "price": 9.26, "change_pct": 9.98, "reason": "1、公司与华东师范大学共建“卫星应用技术联合实验室”，首颗技术验证星发射，实现高光谱遥感数据星上AI实时处理；\n2、公司自研的“开端大模型”已形成多模态、行业语言及AIGC三大模型矩阵，深度融入安防摄像机和各类平台软件中，并在警情分析等十多个行业应用场景落地", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 1.66, "first_limit_up": 1794187834, "break_limit_up_times": 0}, {"code": "002931", "name": "锋龙股份", "price": 43.86, "change_pct": 10.01, "reason": "优必选受让控股股东所持29.99%股份", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.77, "first_limit_up": 1794188484, "break_limit_up_times": 1}, {"code": "002638", "name": "勤上股份", "price": 4.33, "change_pct": 9.9, "reason": "公司深耕大功率LED照明二十余年，产品覆盖道路、隧道、景观等场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.54, "first_limit_up": 1794192225, "break_limit_up_times": 0}, {"code": "603286", "name": "日盈电子", "price": 55.36, "change_pct": 9.99, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.33, "first_limit_up": 1794188072, "break_limit_up_times": 0}, {"code": "002149", "name": "西部材料", "price": 41.51, "change_pct": 9.99, "reason": "公司生产航空发动机用材料，子公司天力公司生产卫星过渡接头及航空用材料，超级牛散章建平新进成为公司第四大流通股东", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1794187800, "break_limit_up_times": 0}, {"code": "002811", "name": "郑中设计", "price": 22.59, "change_pct": 9.98, "reason": "室内设计领域的国际领先企业之一；公司已完成对深迪半导体的战略入股并成为第一大股东，切入MEMS陀螺仪芯片及惯性测量单元IMU的研发与设计赛道，布局第二增长曲线", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1794187977, "break_limit_up_times": 0}, {"code": "002639", "name": "雪人集团", "price": 15.95, "change_pct": 10.0, "reason": "1、公司位于福建省福州市，专注于冰雪场地温控设施的建设以及制冰造雪设备的供应；已为国家雪车雪橇中心、张家口崇礼长城岭滑雪场等冬奥场馆提供制冷装备；\n2、公司旗下雪人股份为中科院的 “人造太阳” 项目（如 EAST、中国环流三号）等核聚变项目提供氦气压缩机，并参与国家重大科研装备项目 “液氦到超流氦温区大型低温制冷系统” 研制，其生产的 “兆瓦级” 氦气压缩机设备技术达到国际领先水平，可创造核聚变实验所需的低温环境；\n3、公司制冷压缩机与机组可作为液冷服务器的配套冷源", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 26.76, "first_limit_up": 1794200997, "break_limit_up_times": 4}, {"code": "600609", "name": "金杯汽车", "price": 3.48, "change_pct": 10.13, "reason": "公司出资900万元持股60%设立金智变量机器人科技沈阳有限公司，与自变量机器人科技深圳有限公司合作在汽车行业开展垂类模型开发及数据采集，主要业务为机器人销售、数据类业务等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1794191658, "break_limit_up_times": 1}, {"code": "600715", "name": "文投控股", "price": 2.59, "change_pct": 10.21, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 14.94, "first_limit_up": 1794188142, "break_limit_up_times": 2}, {"code": "001331", "name": "胜通能源", "price": 31.35, "change_pct": 10.0, "reason": "中国LNG贸易企业前五，控股股东变更为七腾机器人", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1794188493, "break_limit_up_times": 0}, {"code": "600327", "name": "大东方", "price": 5.4, "change_pct": 9.98, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 19.72, "first_limit_up": 1794187805, "break_limit_up_times": 4}, {"code": "001390", "name": "古麒绒材", "price": 17.39, "change_pct": 9.99, "reason": "公司主营业务聚焦于高规格羽绒产品的研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1794189651, "break_limit_up_times": 4}, {"code": "002172", "name": "澳洋健康", "price": 6.18, "change_pct": 9.96, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 23.99, "first_limit_up": 1794188262, "break_limit_up_times": 2}, {"code": "001379", "name": "腾达科技", "price": 15.85, "change_pct": 9.99, "reason": "1、公司产品以不锈钢紧固件为主，其中高温合金、特种合金紧固件产品被应用于航天工程；\n2、在核电领域， 公司成功取得中核集团、 中广核集团核电设备用紧固件合格供应商、 核能行业合格供应商认证", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.34, "first_limit_up": 1794187971, "break_limit_up_times": 0}, {"code": "600776", "name": "东方通信", "price": 12.22, "change_pct": 9.99, "reason": "公司开拓了星网卫星互联网网络维护项目，承接低轨卫星星座建设催生的地面站维护需求", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1794188900, "break_limit_up_times": 0}, {"code": "603843", "name": "*ST正平", "price": 4.92, "change_pct": 10.07, "reason": "青海路桥工程施工企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.02, "first_limit_up": 1794203590, "break_limit_up_times": 11}, {"code": "301010", "name": "晶雪节能", "price": 26.21, "change_pct": 20.01, "reason": "1、公司聚焦冰雪场馆围护系统核心需求，以金属面节能隔热保温夹芯板为核心产品，产品广泛应用于室内滑雪场、冰雪大世界的墙体与屋顶建设；\n2、公司参与了阿里飞天云数据中心等项目", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 20.91, "first_limit_up": 1794201015, "break_limit_up_times": 2}, {"code": "000669", "name": "ST金鸿", "price": 3.66, "change_pct": 9.91, "reason": "公司燃气特许经营权，目前主要集中在湖南省衡阳市", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1794200874, "break_limit_up_times": 3}, {"code": "001316", "name": "润贝航科", "price": 30.6, "change_pct": 9.99, "reason": "控股子公司杭州轻云将主要负责航空、航天先进复合材料的研发、生产", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 5.49, "first_limit_up": 1794188499, "break_limit_up_times": 0}, {"code": "002864", "name": "盘龙药业", "price": 22.21, "change_pct": 10.0, "reason": "集药材GAP种植、药品研产销和医药物流为一体的现代中药企业；公司冠状病毒3CL蛋白酶PROTACs获美国2项专利授权", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.82, "first_limit_up": 1794200754, "break_limit_up_times": 1}, {"code": "002565", "name": "顺灏股份", "price": 10.54, "change_pct": 10.02, "reason": "公司参股北京轨道辰光布局太空算力，其第一代试验星“辰光一号”正在开展在轨测试", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.66, "first_limit_up": 1794187806, "break_limit_up_times": 0}, {"code": "603121", "name": "华培动力", "price": 11.98, "change_pct": 10.01, "reason": "1、公司积极关注以人工智能AI的快速发展带来的人形机器人等新兴市场带来的传感器需求；\n2、公司通过设立全资子公司盛美芯，公司具备了部分核心车规级芯片的自主设计、封装测试的能力，团队具备车规级MEMS压力传感器芯片的研发、生产和销售经验", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.85, "first_limit_up": 1794187961, "break_limit_up_times": 0}, {"code": "603389", "name": "亚振家居", "price": 53.44, "change_pct": 10.0, "reason": "公司主要从事中高端海派艺术家具产品的生产，参股子公司亚振钻石（持股30%）主要从事CVD大尺寸金刚石制造销售，最终产品包括金刚石衬底基片、光学透镜和大颗粒培育钻石", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.27, "first_limit_up": 1794194425, "break_limit_up_times": 2}, {"code": "000823", "name": "超声电子", "price": 17.86, "change_pct": 9.98, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 14.81, "first_limit_up": 1794189918, "break_limit_up_times": 1}, {"code": "603706", "name": "东方环宇", "price": 20.19, "change_pct": 10.03, "reason": "公司地处新疆，业务包括CNG汽车加气、居民生活用气、工商业客户用气", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 5.26, "first_limit_up": 1794189338, "break_limit_up_times": 2}, {"code": "600838", "name": "上海九百", "price": 11.5, "change_pct": 10.05, "reason": "上海九百集团旗下，有位于上海市中心的静安寺珠宝古玩城，位于航华地区的九百家居和位于大华社区的九百购物中心", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 24.58, "first_limit_up": 1794204262, "break_limit_up_times": 0}, {"code": "002124", "name": "天邦食品", "price": 2.2, "change_pct": 10.0, "reason": "公司养猪采用公司+家庭农场养殖模式，同时也是国内规模最大膨化水产饲料企业之一", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.27, "first_limit_up": 1794189048, "break_limit_up_times": 0}, {"code": "000525", "name": "红太阳", "price": 5.52, "change_pct": 9.96, "reason": "绿色农药全产业链公司，拥有行业内最完整、规模最大的吡啶碱产业链", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 20.16, "first_limit_up": 1794203808, "break_limit_up_times": 11}, {"code": "603703", "name": "盛洋科技", "price": 11.1, "change_pct": 10.01, "reason": "公司是DVB-NIP软硬件唯一提供商，软件已获欧洲某头部卫星运营商认可", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 10.56, "first_limit_up": 1794188041, "break_limit_up_times": 1}, {"code": "600278", "name": "东方创业", "price": 7.83, "change_pct": 9.97, "reason": "公司拥有多家全资控股的物流和航运公司", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.98, "first_limit_up": 1794189477, "break_limit_up_times": 9}, {"code": "002037", "name": "保利联合", "price": 7.23, "change_pct": 10.05, "reason": "公司作为国内电子雷管龙头，产能占全国 20%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 0.72, "first_limit_up": 1794187500, "break_limit_up_times": 0}, {"code": "603920", "name": "世运电路", "price": 33.58, "change_pct": 9.99, "reason": "特斯拉汽车、人形机器人PCB供货商，产品包括高精密互连HDI，软板（FPC）等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1794188632, "break_limit_up_times": 0}, {"code": "002347", "name": "泰尔股份", "price": 7, "change_pct": 10.06, "reason": "公司工业机器人已覆盖包装、焊挂牌、取样贴标、拆带等机型，并明确布局军工、航空航天、船舶、核电、风电、有色等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.94, "first_limit_up": 1794188025, "break_limit_up_times": 0}, {"code": "000530", "name": "冰山冷热", "price": 9.57, "change_pct": 10.0, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 14.8, "first_limit_up": 1794187941, "break_limit_up_times": 0}, {"code": "001388", "name": "信通电子", "price": 23.29, "change_pct": 10.01, "reason": "1、防冰治冰机器人以及智能巡检四足机器人是公司结合电力智能运维数字化和智能化转型需求，推出的新一代机器人产品，是公司空天地立体化协同巡检系统方案的重要组成部分；\n2、公司拟1.6亿元投资阜时科技，标的公司为国家级专精特新“小巨人”，专注物理AI空间感知SPAD-SoC芯片研发；\n3、公司通过自建与租赁并行模式构建算力体系，能够满足大规模模型训练需求，租赁算力可弹性扩展；\n4、公司专注于电力智能化改造相关业务的拓展，公司输电线路智能巡检系统、变电站智能辅控系统等产品凭借高性能和高可靠性，已广泛应用于国家电网", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.28, "first_limit_up": 1794188139, "break_limit_up_times": 2}, {"code": "003004", "name": "声迅股份", "price": 50.89, "change_pct": 10.01, "reason": "公司拟2.51亿元收购中科锐择51%股权，快速切入特种光电赛道", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1794189801, "break_limit_up_times": 0}, {"code": "301718", "name": "通则康威", "price": 57.48, "change_pct": 20.0, "reason": "公司目前涉及光通信产品，主要包括光传输终端（ONT）、PON等有线宽带接入产品，主要应用于家庭上网、政企办公等场景", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 46.49, "first_limit_up": 1794189999, "break_limit_up_times": 4}, {"code": "002323", "name": "*ST雅博", "price": 1.19, "change_pct": 10.19, "reason": "公司主营业务包括金属屋面围护系统、分布式光伏发电系统，此前与巴彦淖尔市签约，拟35亿元打造HJT全产业链", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.67, "first_limit_up": 1794203532, "break_limit_up_times": 5}, {"code": "600853", "name": "龙建股份", "price": 3.85, "change_pct": 10.0, "reason": "1、黑龙江省国资委下唯一上市公司，东北地区最具实力、最具规模的大型综合建筑集团之一，先后在7个“一带一路”沿线国家获得项目；\n2、子公司峰悦文化在漠河观音山景区引入冰上龙舟、雪地摩托、冰上自行车、冰上爬犁、雪地滑梯、泼水成冰等系列冰雪活动", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1794189317, "break_limit_up_times": 1}, {"code": "600408", "name": "安泰集团", "price": 3.32, "change_pct": 9.93, "reason": "山西省焦化行业龙头企业之一，H型钢与焦炭双主业", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 9.67, "first_limit_up": 1794188226, "break_limit_up_times": 0}, {"code": "002913", "name": "奥士康", "price": 58.42, "change_pct": 10.0, "reason": "公司表示有通过供应体系向英伟达提供PCB系列产品，目前正在积极参与英伟达R系列产品的打样和测试工作，主要为GPU相关产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1794193455, "break_limit_up_times": 0}, {"code": "002578", "name": "闽发铝业", "price": 5.51, "change_pct": 9.98, "reason": "1、光伏边框、储能托架类铝型材均为公司工业型材板块的成熟产品；\n2、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n3、公司位于福建省南安市，为海西板块的铝型材龙头企业，表示将重点拓展机器人等工业铝型材及高端装备铝型材赛道", "plates": ["光伏"], "limit_up_days": 6, "turnover_ratio": 14.94, "first_limit_up": 1794187500, "break_limit_up_times": 1}, {"code": "601188", "name": "龙江交通", "price": 4.19, "change_pct": 9.97, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 2, "turnover_ratio": 8.85, "first_limit_up": 1794187804, "break_limit_up_times": 1}, {"code": "301226", "name": "祥明智能", "price": 33.06, "change_pct": 20.0, "reason": "1、公司电机有应用到功能型机器人产品，如泳池清洁机器人；公司有机器人关节电机的研发计划，目前没有市场应用；\n2、公司主营电机、风机，下游覆盖HVACR、交通车辆、通信系统、医疗健康、风电等领域；\n3、公司与华为在通信基站与数据中心等项目有合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1794188388, "break_limit_up_times": 0}, {"code": "002310", "name": "东方新能", "price": 2.55, "change_pct": 9.91, "reason": "公司主营业务为新能源电站的开发、投资、建设及运营，重点聚焦陆上风电与分布式光伏等核心领域，并全面探索布局储能业务", "plates": ["光伏"], "limit_up_days": 2, "turnover_ratio": 1.85, "first_limit_up": 1794187500, "break_limit_up_times": 0}, {"code": "600792", "name": "云煤能源", "price": 4.2, "change_pct": 9.95, "reason": "云南省大型的焦炭生产与焦化工企业之一，旗下拥有焦炉气制甲醇，产能10万吨/年", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 12.06, "first_limit_up": 1794192799, "break_limit_up_times": 1}, {"code": "000026", "name": "飞亚达", "price": 20.19, "change_pct": 10.03, "reason": "中国航空工业集团旗下，国产腕表龙头，拟收购长空齿轮全部或部分控股权，后者主要产品为精密齿轮、精密减速器，相关产品的下游市场应用场景广阔，包括航空航天、电子、机器人等高端装备领域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1794191565, "break_limit_up_times": 1}, {"code": "002708", "name": "光洋股份", "price": 21.97, "change_pct": 10.02, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.66, "first_limit_up": 1794188055, "break_limit_up_times": 7}, {"code": "600121", "name": "郑州煤电", "price": 4.73, "change_pct": 10.0, "reason": "1、实控人河南省国资委；公司是郑州煤炭龙头，拥有部分火电业务，参股公司复晟铝业（持股40%）拥有氧化铝粉产能；\n2、两大煤矿有望注入公司，未来或新增可采储量16.2亿吨", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 12.18, "first_limit_up": 1794189215, "break_limit_up_times": 2}, {"code": "002889", "name": "东方嘉盛", "price": 16.4, "change_pct": 9.99, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务；\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务。", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 3.79, "first_limit_up": 1794187800, "break_limit_up_times": 0}, {"code": "002596", "name": "海南瑞泽", "price": 3.48, "change_pct": 10.13, "reason": "公司主营商品混凝土与市政环卫，选举王建锋为董事长，其2026年9月至今任深圳瑞泽智算科技有限公司董事、2026年8月至今任通辽双林智算能源科技有限公司董事", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.16, "first_limit_up": 1794190614, "break_limit_up_times": 1}, {"code": "002488", "name": "金固股份", "price": 7.48, "change_pct": 10.0, "reason": "公司已为智元机器人提供基于阿凡达铌微合金材料的结构件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.76, "first_limit_up": 1794188706, "break_limit_up_times": 1}, {"code": "600892", "name": "大晟文化", "price": 5.09, "change_pct": 9.94, "reason": "1、公司游戏影视双驱动，主营业务包括短剧制作、发行业务；\n2、公司游戏业务主要由全资子公司淘乐网络开发运营，专注于回合制端游与手游，代表作为《桃花源记》", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 35.18, "first_limit_up": 1794190052, "break_limit_up_times": 3}, {"code": "001226", "name": "拓山重工", "price": 38.01, "change_pct": 10.01, "reason": "公司的主要产品包括链轨节、销套、支重轮、销轴、制动装置系列等，主要应用于工程机械领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.1, "first_limit_up": 1794201558, "break_limit_up_times": 0}, {"code": "603366", "name": "日出东方", "price": 9.89, "change_pct": 10.01, "reason": "公司光伏业务主要为分布式户用光伏业务和分布式工商业光伏业务，空气能热泵领域技术领先", "plates": ["光伏"], "limit_up_days": 2, "turnover_ratio": 0.73, "first_limit_up": 1794187500, "break_limit_up_times": 0}, {"code": "688585", "name": "上纬新材", "price": 216.02, "change_pct": 20.0, "reason": "公司消费级具身智能机器人“启元Q1”和“启元T1”下线10000台", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1794188542, "break_limit_up_times": 4}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};