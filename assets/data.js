const UPDATE_TIME = "2026-11-12 14:31";
const THS_HOT = [
  {
    "name": "兵装重组概念",
    "rise": 2.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "人形机器人",
    "rise": -3.15,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": -2.09,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续257天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "海峡两岸",
    "rise": -1.21,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续328天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "机器人概念",
    "rise": -2.42,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光伏概念",
    "rise": -1.86,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "创新药",
    "rise": -0.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续158天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": -2.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "短剧游戏",
    "rise": -3.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "军工",
    "rise": -1.72,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "预制菜",
    "rise": 0.37,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885951"
  },
  {
    "name": "黄金概念",
    "rise": -2.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "芯片概念",
    "rise": -1.62,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续38天上榜",
    "rankChg": 2,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "冰雪产业",
    "rise": -1.28,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": -1,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "存储芯片",
    "rise": -1.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续281天上榜",
    "rankChg": -1,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": -2.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "英伟达概念",
    "rise": -2.96,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 4,
    "etfName": "创业板人工智能ETF",
    "code": "886048"
  },
  {
    "name": "白酒概念",
    "rise": 0.24,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "AI视频",
    "rise": -3.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": -1,
    "etfName": "传媒ETF",
    "code": "886068"
  }
];
const THS_EVENTS = [
  {
    "title": "SpaceX马斯克下单100GW HJT产线",
    "desc": "",
    "heat": 157778,
    "direction": "光伏概念",
    "themes": [
      "光伏概念",
      "HJT电池",
      "光伏设备"
    ],
    "stocks": [
      {
        "name": "日出东方",
        "code": "603366",
        "chg": 10.025063
      }
    ]
  },
  {
    "title": "北京发布具身智能机器人产业高质量发展行动方案",
    "desc": "",
    "heat": 78681,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "高凯技术",
        "code": "688835",
        "chg": 9.668743
      }
    ]
  },
  {
    "title": "存储涨价拖累利润 消费电子产业链发力新增长极",
    "desc": "",
    "heat": 46186,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片",
      "半导体",
      "光刻机"
    ],
    "stocks": [
      {
        "name": "燧原科技-U",
        "code": "688801",
        "chg": 13.133603
      }
    ]
  },
  {
    "title": "字节跳动发力智能体赛道，计划推出类似Muse的AI助手",
    "desc": "",
    "heat": 35485,
    "direction": "AI助手",
    "themes": [
      "AI智能体",
      "字节系算力",
      "抖音概念(字节概念)"
    ],
    "stocks": [
      {
        "name": "蓝色光标",
        "code": "300058",
        "chg": 10.894065
      }
    ]
  },
  {
    "title": "中国移动光传输技术试验实现新突破",
    "desc": "",
    "heat": 31499,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念"
    ],
    "stocks": [
      {
        "name": "福晶科技",
        "code": "002222",
        "chg": 2.890405
      }
    ]
  },
  {
    "title": "Anthropic CEO预言：癌症、心脏病等或在10年内成为历史",
    "desc": "",
    "heat": 0,
    "direction": "AI+医药医疗",
    "themes": [
      "AI制药"
    ],
    "stocks": [
      {
        "name": "九洲药业",
        "code": "603456",
        "chg": 2.888087
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "水产养殖",
    "change": "+3.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+0.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "+0.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "预制菜",
    "change": "+0.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+0.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "福建自贸/海西概念",
    "change": "+0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+0.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "篮球",
    "change": "+0.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "社区团购",
    "change": "+0.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新零售",
    "change": "+0.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+0.05%",
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
    "stock_cnt": 5797,
    "price": "5.16",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "8157811800.00",
    "change_type": "1",
    "change_section": "17",
    "change_days": "9",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -0.19
      },
      {
        "name": "体外诊断",
        "change_pct": -0.52
      },
      {
        "name": "医疗器械",
        "change_pct": -0.92
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "基因测序",
        "change_pct": -0.35
      },
      {
        "name": "预制菜",
        "change_pct": 0.44
      },
      {
        "name": "水产养殖",
        "change_pct": 3.65
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.23
      },
      {
        "name": "海洋经济",
        "change_pct": -1.89
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 6,
    "hot_rank_chg": 2,
    "stock_cnt": 5797,
    "price": "3.09",
    "change": "-1.59",
    "market_id": "17",
    "circulate_market_value": "8844730200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.93
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "游戏",
        "change_pct": -3.94
      },
      {
        "name": "影视",
        "change_pct": -3.51
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      },
      {
        "name": "AI视频",
        "change_pct": -3.79
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 7,
    "hot_rank_chg": 8,
    "stock_cnt": 5797,
    "price": "7.18",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "6352716900.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "6",
    "change_reason": "“东方系”",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.1
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "信托",
        "change_pct": -1.51
      },
      {
        "name": "民营医院",
        "change_pct": -0.64
      },
      {
        "name": "社区团购",
        "change_pct": 0.11
      },
      {
        "name": "大金融",
        "change_pct": -0.53
      },
      {
        "name": "餐饮",
        "change_pct": -0.93
      },
      {
        "name": "首发经济",
        "change_pct": -1.18
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 9,
    "hot_rank_chg": -5,
    "stock_cnt": 5797,
    "price": "10.95",
    "change": "-2.93",
    "market_id": "33",
    "circulate_market_value": "6571278100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.01
      },
      {
        "name": "边缘计算",
        "change_pct": -2.79
      },
      {
        "name": "核电",
        "change_pct": -1.78
      },
      {
        "name": "海工装备",
        "change_pct": -1.84
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "冷链",
        "change_pct": -1.03
      },
      {
        "name": "地热",
        "change_pct": -1.45
      },
      {
        "name": "储能",
        "change_pct": -2.1
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.95
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.68
      },
      {
        "name": "热泵",
        "change_pct": -1.57
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.98
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.35
      },
      {
        "name": "海洋经济",
        "change_pct": -1.89
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 11,
    "hot_rank_chg": 2,
    "stock_cnt": 5797,
    "price": "3.03",
    "change": "2.71",
    "market_id": "33",
    "circulate_market_value": "13328998600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.32
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "京津冀",
        "change_pct": -1.33
      },
      {
        "name": "旅游",
        "change_pct": -1.33
      },
      {
        "name": "园林",
        "change_pct": -1.48
      },
      {
        "name": "海绵城市",
        "change_pct": -0.75
      },
      {
        "name": "固废处理",
        "change_pct": -1.3
      },
      {
        "name": "光伏",
        "change_pct": -1.58
      },
      {
        "name": "风电",
        "change_pct": -1.97
      },
      {
        "name": "雄安新区",
        "change_pct": -1.47
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.55
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.37
      },
      {
        "name": "储能",
        "change_pct": -2.1
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.01
      },
      {
        "name": "汽车拆解",
        "change_pct": -0.98
      },
      {
        "name": "土壤修复",
        "change_pct": -1.0
      },
      {
        "name": "核污染防治",
        "change_pct": -1.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.33
      },
      {
        "name": "新型城镇化",
        "change_pct": -1.14
      },
      {
        "name": "西部大开发",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 12,
    "hot_rank_chg": 10,
    "stock_cnt": 5797,
    "price": "4.72",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "6161818000.00",
    "change_type": "1",
    "change_section": "11",
    "change_days": "6",
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "高速公路",
        "change_pct": 0.42
      },
      {
        "name": "振兴东北",
        "change_pct": -0.45
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.18
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 16,
    "hot_rank_chg": -6,
    "stock_cnt": 5797,
    "price": "6.37",
    "change": "1.92",
    "market_id": "17",
    "circulate_market_value": "8504287400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "物联网",
        "change_pct": -2.26
      },
      {
        "name": "LED",
        "change_pct": -1.97
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.55
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 19,
    "hot_rank_chg": 70,
    "stock_cnt": 5797,
    "price": "6.66",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "5095837300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "医药商业",
        "change_pct": -0.11
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "民营医院",
        "change_pct": -0.64
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "食品",
        "change_pct": -0.26
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.05
      },
      {
        "name": "口腔",
        "change_pct": -0.19
      },
      {
        "name": "医美",
        "change_pct": -0.98
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 20,
    "hot_rank_chg": -1,
    "stock_cnt": 5797,
    "price": "10.04",
    "change": "3.50",
    "market_id": "33",
    "circulate_market_value": "4755750100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.93
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "VR&AR",
        "change_pct": -2.8
      },
      {
        "name": "游戏",
        "change_pct": -3.94
      },
      {
        "name": "影视",
        "change_pct": -3.51
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.47
      },
      {
        "name": "动漫",
        "change_pct": -4.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.36
      },
      {
        "name": "传媒",
        "change_pct": -2.29
      },
      {
        "name": "元宇宙",
        "change_pct": -3.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.59
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 23,
    "hot_rank_chg": 74,
    "stock_cnt": 5797,
    "price": "4.68",
    "change": "3.77",
    "market_id": "33",
    "circulate_market_value": "12413936700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "装修装饰",
        "change_pct": -1.11
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.54
      },
      {
        "name": "破净股",
        "change_pct": -1.0
      },
      {
        "name": "航天",
        "change_pct": -2.22
      },
      {
        "name": "旧改",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 29,
    "hot_rank_chg": -12,
    "stock_cnt": 5797,
    "price": "5.40",
    "change": "-2.70",
    "market_id": "17",
    "circulate_market_value": "6266929200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "纺织服装",
        "change_pct": -1.02
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.11
      },
      {
        "name": "影视",
        "change_pct": -3.51
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 32,
    "hot_rank_chg": 25,
    "stock_cnt": 5797,
    "price": "10.89",
    "change": "2.74",
    "market_id": "17",
    "circulate_market_value": "6989019200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.08
      },
      {
        "name": "农业种植",
        "change_pct": -1.33
      },
      {
        "name": "湖南国企改革",
        "change_pct": -1.87
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.01
      },
      {
        "name": "休闲食品",
        "change_pct": -0.66
      },
      {
        "name": "食品",
        "change_pct": -0.26
      },
      {
        "name": "食品安全",
        "change_pct": -0.93
      },
      {
        "name": "社区团购",
        "change_pct": 0.11
      },
      {
        "name": "大农业",
        "change_pct": -1.12
      },
      {
        "name": "预制菜",
        "change_pct": 0.44
      },
      {
        "name": "人造肉",
        "change_pct": -0.35
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 33,
    "hot_rank_chg": 22,
    "stock_cnt": 5797,
    "price": "12.91",
    "change": "-1.07",
    "market_id": "33",
    "circulate_market_value": "7313234700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "石墨烯",
        "change_pct": -2.74
      },
      {
        "name": "军民融合",
        "change_pct": -1.89
      },
      {
        "name": "物联网",
        "change_pct": -2.26
      },
      {
        "name": "LED",
        "change_pct": -1.97
      },
      {
        "name": "军工",
        "change_pct": -1.5
      },
      {
        "name": "智慧灯杆",
        "change_pct": -2.42
      },
      {
        "name": "海洋经济",
        "change_pct": -1.89
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 35,
    "hot_rank_chg": -24,
    "stock_cnt": 5797,
    "price": "6.04",
    "change": "-0.66",
    "market_id": "33",
    "circulate_market_value": "5201421900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.17
      },
      {
        "name": "一带一路",
        "change_pct": -1.48
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.27
      },
      {
        "name": "光伏",
        "change_pct": -1.58
      },
      {
        "name": "有色金属",
        "change_pct": -2.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.18
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.72
      },
      {
        "name": "自贸区",
        "change_pct": -0.58
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 44,
    "hot_rank_chg": 137,
    "stock_cnt": 5797,
    "price": "2.61",
    "change": "6.97",
    "market_id": "33",
    "circulate_market_value": "15253994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -2.26
      },
      {
        "name": "光伏",
        "change_pct": -1.58
      },
      {
        "name": "储能",
        "change_pct": -2.1
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.01
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.59
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.12
      },
      {
        "name": "低价股",
        "change_pct": -0.95
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.87
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.55
      },
      {
        "name": "华为产业链",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 45,
    "hot_rank_chg": 45,
    "stock_cnt": 5797,
    "price": "3.33",
    "change": "1.52",
    "market_id": "17",
    "circulate_market_value": "7367055700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.88
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "光通信",
        "change_pct": -1.97
      },
      {
        "name": "林业",
        "change_pct": 0.3
      },
      {
        "name": "军民融合",
        "change_pct": -1.89
      },
      {
        "name": "军工",
        "change_pct": -1.5
      },
      {
        "name": "人造肉",
        "change_pct": -0.35
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 52,
    "hot_rank_chg": 49,
    "stock_cnt": 5797,
    "price": "11.68",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "3904144200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.77
      },
      {
        "name": "饲料",
        "change_pct": -0.37
      },
      {
        "name": "一带一路",
        "change_pct": -1.48
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "保健品",
        "change_pct": -0.17
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.32
      },
      {
        "name": "污水处理",
        "change_pct": -1.34
      },
      {
        "name": "环保",
        "change_pct": -1.37
      },
      {
        "name": "食品",
        "change_pct": -0.26
      },
      {
        "name": "预制菜",
        "change_pct": 0.44
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "水产养殖",
        "change_pct": 3.65
      },
      {
        "name": "广西概念",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 54,
    "hot_rank_chg": -23,
    "stock_cnt": 5797,
    "price": "5.45",
    "change": "-6.20",
    "market_id": "17",
    "circulate_market_value": "3048291500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.93
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.38
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "游戏",
        "change_pct": -3.94
      },
      {
        "name": "影视",
        "change_pct": -3.51
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 57,
    "hot_rank_chg": -27,
    "stock_cnt": 5797,
    "price": "9.99",
    "change": "-5.75",
    "market_id": "33",
    "circulate_market_value": "10588952200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.32
      },
      {
        "name": "电子烟",
        "change_pct": -2.59
      },
      {
        "name": "一带一路",
        "change_pct": -1.48
      },
      {
        "name": "造纸",
        "change_pct": -0.88
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "包装印刷",
        "change_pct": -1.34
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.55
      },
      {
        "name": "太空算力",
        "change_pct": -3.35
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 59,
    "hot_rank_chg": 96,
    "stock_cnt": 5797,
    "price": "4.28",
    "change": "0.47",
    "market_id": "33",
    "circulate_market_value": "25058531000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "水利",
        "change_pct": -1.0
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.47
      },
      {
        "name": "大数据",
        "change_pct": -2.53
      },
      {
        "name": "园林",
        "change_pct": -1.48
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.27
      },
      {
        "name": "数字经济",
        "change_pct": -2.35
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.36
      },
      {
        "name": "传媒",
        "change_pct": -2.29
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -3.12
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.5
      },
      {
        "name": "快手概念股",
        "change_pct": -2.57
      },
      {
        "name": "IGBT",
        "change_pct": -1.07
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.81
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.99
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.56
      },
      {
        "name": "氮化镓",
        "change_pct": -1.36
      },
      {
        "name": "AI营销",
        "change_pct": -2.5
      },
      {
        "name": "华为产业链",
        "change_pct": -2.32
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.44
      },
      {
        "name": "多模态",
        "change_pct": -3.39
      },
      {
        "name": "AI视频",
        "change_pct": -3.79
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.98
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      },
      {
        "name": "区块链",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 60,
    "hot_rank_chg": 44,
    "stock_cnt": 5797,
    "price": "10.35",
    "change": "-1.71",
    "market_id": "17",
    "circulate_market_value": "4478172300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.05
      },
      {
        "name": "股权转让",
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "光伏",
        "change_pct": -1.58
      },
      {
        "name": "无线耳机",
        "change_pct": -2.24
      },
      {
        "name": "华为产业链",
        "change_pct": -2.32
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "002313",
    "name": "日海智能",
    "hot_rank": 61,
    "hot_rank_chg": 53,
    "stock_cnt": 5797,
    "price": "9.61",
    "change": "-5.41",
    "market_id": "33",
    "circulate_market_value": "3597785100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -2.5
      },
      {
        "name": "边缘计算",
        "change_pct": -2.79
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.53
      },
      {
        "name": "5G",
        "change_pct": -2.35
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "人工智能",
        "change_pct": -2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "北斗导航",
        "change_pct": -2.49
      },
      {
        "name": "物联网",
        "change_pct": -2.26
      },
      {
        "name": "智慧城市",
        "change_pct": -2.3
      },
      {
        "name": "智能制造",
        "change_pct": -2.37
      },
      {
        "name": "工业互联网",
        "change_pct": -2.71
      },
      {
        "name": "小米概念股",
        "change_pct": -2.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.42
      },
      {
        "name": "华为海思",
        "change_pct": -2.33
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "低空经济",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 62,
    "hot_rank_chg": 53,
    "stock_cnt": 5797,
    "price": "4.23",
    "change": "-1.86",
    "market_id": "17",
    "circulate_market_value": "4907413500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.32
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "玻璃",
        "change_pct": -1.78
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "湖北国企改革",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 63,
    "hot_rank_chg": 188,
    "stock_cnt": 5797,
    "price": "2.81",
    "change": "10.20",
    "market_id": "17",
    "circulate_market_value": "9806304800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI微短剧",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -2.89
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.5
      },
      {
        "name": "超高清视频",
        "change_pct": -2.63
      },
      {
        "name": "人工智能",
        "change_pct": -2.49
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "影视",
        "change_pct": -3.51
      },
      {
        "name": "智慧城市",
        "change_pct": -2.3
      },
      {
        "name": "国产芯片",
        "change_pct": -1.46
      },
      {
        "name": "振兴东北",
        "change_pct": -0.45
      },
      {
        "name": "传媒",
        "change_pct": -2.29
      },
      {
        "name": "低价股",
        "change_pct": -0.95
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "在线教育",
        "change_pct": -2.88
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.92
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.44
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.59
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 68,
    "hot_rank_chg": -16,
    "stock_cnt": 5797,
    "price": "11.71",
    "change": "-3.38",
    "market_id": "17",
    "circulate_market_value": "15039396000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -2.37
      },
      {
        "name": "工业互联网",
        "change_pct": -2.71
      },
      {
        "name": "培育钻石",
        "change_pct": -2.17
      },
      {
        "name": "金刚线",
        "change_pct": -2.58
      },
      {
        "name": "国资入股",
        "change_pct": -0.97
      },
      {
        "name": "深地经济",
        "change_pct": -1.42
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 73,
    "hot_rank_chg": -41,
    "stock_cnt": 5797,
    "price": "9.74",
    "change": "-9.90",
    "market_id": "33",
    "circulate_market_value": "9024300700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -4.87
      },
      {
        "name": "光伏",
        "change_pct": -1.58
      },
      {
        "name": "储能",
        "change_pct": -2.1
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.12
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.87
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.55
      },
      {
        "name": "光伏胶膜",
        "change_pct": -1.63
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 76,
    "hot_rank_chg": 2,
    "stock_cnt": 5797,
    "price": "12.19",
    "change": "0.08",
    "market_id": "17",
    "circulate_market_value": "4886751300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -1.09
      },
      {
        "name": "新零售",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "物业管理",
        "change_pct": -1.12
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "地摊经济",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 78,
    "hot_rank_chg": 45,
    "stock_cnt": 5797,
    "price": "5.38",
    "change": "3.66",
    "market_id": "33",
    "circulate_market_value": "5981268800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "草铵膦",
        "change_pct": -0.7
      },
      {
        "name": "农药",
        "change_pct": -1.31
      },
      {
        "name": "长寿药NMN",
        "change_pct": -0.6
      },
      {
        "name": "大农业",
        "change_pct": -1.12
      },
      {
        "name": "虫害防治",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 81,
    "hot_rank_chg": -30,
    "stock_cnt": 5797,
    "price": "8.20",
    "change": "-4.43",
    "market_id": "33",
    "circulate_market_value": "13341349000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.14
      },
      {
        "name": "电竞",
        "change_pct": -3.56
      },
      {
        "name": "手游",
        "change_pct": -3.93
      },
      {
        "name": "人工智能",
        "change_pct": -2.49
      },
      {
        "name": "游戏",
        "change_pct": -3.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.35
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.36
      },
      {
        "name": "传媒",
        "change_pct": -2.29
      },
      {
        "name": "快手概念股",
        "change_pct": -2.57
      },
      {
        "name": "元宇宙",
        "change_pct": -3.4
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.81
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.33
      },
      {
        "name": "web3.0",
        "change_pct": -2.82
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.99
      },
      {
        "name": "数据要素",
        "change_pct": -2.96
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.56
      },
      {
        "name": "AI营销",
        "change_pct": -2.5
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.88
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.44
      },
      {
        "name": "人形机器人",
        "change_pct": -3.74
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      },
      {
        "name": "多模态",
        "change_pct": -3.39
      },
      {
        "name": "AI视频",
        "change_pct": -3.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.59
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "600776",
    "name": "东方通信",
    "hot_rank": 91,
    "hot_rank_chg": -26,
    "stock_cnt": 5797,
    "price": "12.59",
    "change": "-7.77",
    "market_id": "17",
    "circulate_market_value": "12036040800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.99
      },
      {
        "name": "5G",
        "change_pct": -2.35
      },
      {
        "name": "强势人气股",
        "change_pct": -0.91
      },
      {
        "name": "网络安全",
        "change_pct": -2.65
      },
      {
        "name": "军工集团",
        "change_pct": -0.34
      },
      {
        "name": "军工",
        "change_pct": -1.5
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -2.78
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.55
      },
      {
        "name": "华为产业链",
        "change_pct": -2.32
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.44
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 92,
    "hot_rank_chg": 3,
    "stock_cnt": 5797,
    "price": "11.30",
    "change": "-3.91",
    "market_id": "33",
    "circulate_market_value": "12820269300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.01
      },
      {
        "name": "足球",
        "change_pct": -2.06
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.95
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.35
      },
      {
        "name": "传媒",
        "change_pct": -2.29
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.99
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.56
      },
      {
        "name": "国企改革",
        "change_pct": -1.14
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.46
      },
      {
        "name": "AI视频",
        "change_pct": -3.79
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 94,
    "hot_rank_chg": 51,
    "stock_cnt": 5797,
    "price": "7.00",
    "change": "-3.58",
    "market_id": "33",
    "circulate_market_value": "4937262200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": -1.4
      },
      {
        "name": "工业自动化",
        "change_pct": -2.63
      },
      {
        "name": "大飞机",
        "change_pct": -1.71
      },
      {
        "name": "军民融合",
        "change_pct": -1.89
      },
      {
        "name": "风电",
        "change_pct": -1.97
      },
      {
        "name": "军工",
        "change_pct": -1.5
      },
      {
        "name": "机器人",
        "change_pct": -2.78
      },
      {
        "name": "智能制造",
        "change_pct": -2.37
      },
      {
        "name": "工业母机",
        "change_pct": -2.88
      },
      {
        "name": "减速器",
        "change_pct": -3.7
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 95,
    "hot_rank_chg": 26,
    "stock_cnt": 5797,
    "price": "7.30",
    "change": "5.95",
    "market_id": "33",
    "circulate_market_value": "13980175000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.27
      },
      {
        "name": "林业",
        "change_pct": 0.3
      },
      {
        "name": "碳中和",
        "change_pct": -0.93
      },
      {
        "name": "自贸区",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 97,
    "hot_rank_chg": 1,
    "stock_cnt": 5797,
    "price": "7.66",
    "change": "-3.28",
    "market_id": "33",
    "circulate_market_value": "14286535000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -1.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.05
      },
      {
        "name": "军民融合",
        "change_pct": -1.89
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.15
      },
      {
        "name": "风电",
        "change_pct": -1.97
      },
      {
        "name": "军工",
        "change_pct": -1.5
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.18
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.72
      },
      {
        "name": "轮边电机",
        "change_pct": -2.96
      },
      {
        "name": "人形机器人",
        "change_pct": -3.74
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "5.16", "change": "10.02", "market_id": "33", "circulate_market_value": "8157811800.00", "change_type": "1", "change_section": "17", "change_days": "9", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -0.19}, {"name": "体外诊断", "change_pct": -0.52}, {"name": "医疗器械", "change_pct": -0.92}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "基因测序", "change_pct": -0.35}, {"name": "预制菜", "change_pct": 0.44}, {"name": "水产养殖", "change_pct": 3.65}, {"name": "新冠病毒防治", "change_pct": -1.23}, {"name": "海洋经济", "change_pct": -1.89}]}, {"code": "002384", "name": "东山精密", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5797, "price": "93.69", "change": "1.77", "market_id": "33", "circulate_market_value": "129884482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5797, "price": "13.17", "change": "10.03", "market_id": "17", "circulate_market_value": "10707843500.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "“东方系”"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "21.94", "change": "3.54", "market_id": "33", "circulate_market_value": "10083882800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 5, "hot_rank_chg": 67, "stock_cnt": 5797, "price": "14.76", "change": "10.89", "market_id": "33", "circulate_market_value": "51334251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5797, "price": "3.09", "change": "-1.59", "market_id": "17", "circulate_market_value": "8844730200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.93}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "游戏", "change_pct": -3.94}, {"name": "影视", "change_pct": -3.51}, {"name": "国企改革", "change_pct": -1.14}, {"name": "短剧/互动影游", "change_pct": -3.46}, {"name": "AI视频", "change_pct": -3.79}]}, {"code": "600327", "name": "大东方", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5797, "price": "7.18", "change": "9.95", "market_id": "17", "circulate_market_value": "6352716900.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "“东方系”", "xgb_concepts": [{"name": "新零售", "change_pct": 0.1}, {"name": "优化生育（三孩）", "change_pct": -0.95}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "信托", "change_pct": -1.51}, {"name": "民营医院", "change_pct": -0.64}, {"name": "社区团购", "change_pct": 0.11}, {"name": "大金融", "change_pct": -0.53}, {"name": "餐饮", "change_pct": -0.93}, {"name": "首发经济", "change_pct": -1.18}]}, {"code": "002156", "name": "通富微电", "hot_rank": 8, "hot_rank_chg": 75, "stock_cnt": 5797, "price": "48.36", "change": "5.36", "market_id": "33", "circulate_market_value": "73383989000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5797, "price": "10.95", "change": "-2.93", "market_id": "33", "circulate_market_value": "6571278100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.01}, {"name": "边缘计算", "change_pct": -2.79}, {"name": "核电", "change_pct": -1.78}, {"name": "海工装备", "change_pct": -1.84}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "冷链", "change_pct": -1.03}, {"name": "地热", "change_pct": -1.45}, {"name": "储能", "change_pct": -2.1}, {"name": "碳中和", "change_pct": -0.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.95}, {"name": "汽车热管理", "change_pct": -2.68}, {"name": "热泵", "change_pct": -1.57}, {"name": "液冷服务器", "change_pct": -1.98}, {"name": "蜜雪冰城概念股", "change_pct": -0.35}, {"name": "海洋经济", "change_pct": -1.89}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -9, "stock_cnt": 5797, "price": "508.90", "change": "-6.11", "market_id": "33", "circulate_market_value": "564846940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5797, "price": "3.03", "change": "2.71", "market_id": "33", "circulate_market_value": "13328998600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.32}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "京津冀", "change_pct": -1.33}, {"name": "旅游", "change_pct": -1.33}, {"name": "园林", "change_pct": -1.48}, {"name": "海绵城市", "change_pct": -0.75}, {"name": "固废处理", "change_pct": -1.3}, {"name": "光伏", "change_pct": -1.58}, {"name": "风电", "change_pct": -1.97}, {"name": "雄安新区", "change_pct": -1.47}, {"name": "北京城市规划", "change_pct": -0.55}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.37}, {"name": "储能", "change_pct": -2.1}, {"name": "碳中和", "change_pct": -0.93}, {"name": "乡村振兴", "change_pct": -1.01}, {"name": "汽车拆解", "change_pct": -0.98}, {"name": "土壤修复", "change_pct": -1.0}, {"name": "核污染防治", "change_pct": -1.6}, {"name": "东数西算/算力", "change_pct": -2.33}, {"name": "新型城镇化", "change_pct": -1.14}, {"name": "西部大开发", "change_pct": -0.41}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5797, "price": "4.72", "change": "10.02", "market_id": "17", "circulate_market_value": "6161818000.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "高速公路", "change_pct": 0.42}, {"name": "振兴东北", "change_pct": -0.45}, {"name": "黑龙江自贸区", "change_pct": 2.18}]}, {"code": "600641", "name": "先导基电", "hot_rank": 13, "hot_rank_chg": 43, "stock_cnt": 5797, "price": "36.66", "change": "2.06", "market_id": "17", "circulate_market_value": "34116893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 14, "hot_rank_chg": -12, "stock_cnt": 5797, "price": "205.58", "change": "-4.38", "market_id": "33", "circulate_market_value": "257946110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 15, "hot_rank_chg": 22, "stock_cnt": 5797, "price": "122.85", "change": "5.04", "market_id": "17", "circulate_market_value": "33856032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 16, "hot_rank_chg": -6, "stock_cnt": 5797, "price": "6.37", "change": "1.92", "market_id": "17", "circulate_market_value": "8504287400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "物联网", "change_pct": -2.26}, {"name": "LED", "change_pct": -1.97}, {"name": "卫星互联网", "change_pct": -2.55}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5797, "price": "700.90", "change": "-8.38", "market_id": "17", "circulate_market_value": "21088483000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 18, "hot_rank_chg": 31, "stock_cnt": 5797, "price": "56.60", "change": "6.63", "market_id": "33", "circulate_market_value": "11465793600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 19, "hot_rank_chg": 70, "stock_cnt": 5797, "price": "6.66", "change": "10.08", "market_id": "33", "circulate_market_value": "5095837300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "中药", "change_pct": -0.33}, {"name": "优化生育（三孩）", "change_pct": -0.95}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "医药商业", "change_pct": -0.11}, {"name": "保健品", "change_pct": -0.17}, {"name": "民营医院", "change_pct": -0.64}, {"name": "医药", "change_pct": -0.48}, {"name": "食品", "change_pct": -0.26}, {"name": "辅助生殖", "change_pct": 0.05}, {"name": "口腔", "change_pct": -0.19}, {"name": "医美", "change_pct": -0.98}, {"name": "新冠病毒防治", "change_pct": -1.23}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "10.04", "change": "3.50", "market_id": "33", "circulate_market_value": "4755750100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.93}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "VR&AR", "change_pct": -2.8}, {"name": "游戏", "change_pct": -3.94}, {"name": "影视", "change_pct": -3.51}, {"name": "直播/短视频", "change_pct": -2.47}, {"name": "动漫", "change_pct": -4.98}, {"name": "腾讯概念股", "change_pct": -2.36}, {"name": "传媒", "change_pct": -2.29}, {"name": "元宇宙", "change_pct": -3.4}, {"name": "短剧/互动影游", "change_pct": -3.46}, {"name": "IP经济/谷子经济", "change_pct": -2.59}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "26.65", "change": "0.23", "market_id": "33", "circulate_market_value": "20301054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 22, "hot_rank_chg": 17, "stock_cnt": 5797, "price": "38.60", "change": "-3.93", "market_id": "17", "circulate_market_value": "32676959000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 23, "hot_rank_chg": 74, "stock_cnt": 5797, "price": "4.68", "change": "3.77", "market_id": "33", "circulate_market_value": "12413936700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "装修装饰", "change_pct": -1.11}, {"name": "装配式建筑", "change_pct": -0.54}, {"name": "破净股", "change_pct": -1.0}, {"name": "航天", "change_pct": -2.22}, {"name": "旧改", "change_pct": -1.23}]}, {"code": "603466", "name": "风语筑", "hot_rank": 24, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "16.03", "change": "-4.92", "market_id": "17", "circulate_market_value": "9535156400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 25, "hot_rank_chg": -9, "stock_cnt": 5797, "price": "25.10", "change": "-5.60", "market_id": "33", "circulate_market_value": "12791721800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 26, "hot_rank_chg": 55, "stock_cnt": 5797, "price": "54.45", "change": "0.09", "market_id": "17", "circulate_market_value": "97433623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 27, "hot_rank_chg": 66, "stock_cnt": 5797, "price": "973.00", "change": "8.11", "market_id": "17", "circulate_market_value": "611874950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 28, "hot_rank_chg": 34, "stock_cnt": 5797, "price": "14.79", "change": "-1.07", "market_id": "33", "circulate_market_value": "49251705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5797, "price": "5.40", "change": "-2.70", "market_id": "17", "circulate_market_value": "6266929200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "纺织服装", "change_pct": -1.02}, {"name": "浙江国企改革", "change_pct": -1.11}, {"name": "影视", "change_pct": -3.51}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -1.14}, {"name": "短剧/互动影游", "change_pct": -3.46}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "91.33", "change": "2.12", "market_id": "33", "circulate_market_value": "176503350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "43.89", "change": "-3.67", "market_id": "17", "circulate_market_value": "107690534000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 32, "hot_rank_chg": 25, "stock_cnt": 5797, "price": "10.89", "change": "2.74", "market_id": "17", "circulate_market_value": "6989019200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.08}, {"name": "农业种植", "change_pct": -1.33}, {"name": "湖南国企改革", "change_pct": -1.87}, {"name": "乡村振兴", "change_pct": -1.01}, {"name": "休闲食品", "change_pct": -0.66}, {"name": "食品", "change_pct": -0.26}, {"name": "食品安全", "change_pct": -0.93}, {"name": "社区团购", "change_pct": 0.11}, {"name": "大农业", "change_pct": -1.12}, {"name": "预制菜", "change_pct": 0.44}, {"name": "人造肉", "change_pct": -0.35}, {"name": "国企改革", "change_pct": -1.14}]}, {"code": "002724", "name": "海洋王", "hot_rank": 33, "hot_rank_chg": 22, "stock_cnt": 5797, "price": "12.91", "change": "-1.07", "market_id": "33", "circulate_market_value": "7313234700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "石墨烯", "change_pct": -2.74}, {"name": "军民融合", "change_pct": -1.89}, {"name": "物联网", "change_pct": -2.26}, {"name": "LED", "change_pct": -1.97}, {"name": "军工", "change_pct": -1.5}, {"name": "智慧灯杆", "change_pct": -2.42}, {"name": "海洋经济", "change_pct": -1.89}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 34, "hot_rank_chg": 8, "stock_cnt": 5797, "price": "23.11", "change": "2.21", "market_id": "33", "circulate_market_value": "4395464200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 35, "hot_rank_chg": -24, "stock_cnt": 5797, "price": "6.04", "change": "-0.66", "market_id": "33", "circulate_market_value": "5201421900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.17}, {"name": "一带一路", "change_pct": -1.48}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "福建自贸/海西概念", "change_pct": 0.27}, {"name": "光伏", "change_pct": -1.58}, {"name": "有色金属", "change_pct": -2.16}, {"name": "新能源汽车", "change_pct": -2.18}, {"name": "新能源车零部件", "change_pct": -2.72}, {"name": "自贸区", "change_pct": -0.58}, {"name": "液冷服务器", "change_pct": -1.98}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 36, "hot_rank_chg": -22, "stock_cnt": 5797, "price": "40.97", "change": "-2.62", "market_id": "17", "circulate_market_value": "184489510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 37, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "65.18", "change": "-5.50", "market_id": "33", "circulate_market_value": "47270919000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 38, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "258.85", "change": "-0.30", "market_id": "17", "circulate_market_value": "173615440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 39, "hot_rank_chg": 1, "stock_cnt": 5797, "price": "75.71", "change": "-1.52", "market_id": "17", "circulate_market_value": "182593510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 40, "hot_rank_chg": 79, "stock_cnt": 5797, "price": "66.87", "change": "3.74", "market_id": "17", "circulate_market_value": "65672655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 41, "hot_rank_chg": 26, "stock_cnt": 5797, "price": "23.52", "change": "7.35", "market_id": "33", "circulate_market_value": "11284311400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 42, "hot_rank_chg": 312, "stock_cnt": 5797, "price": "25.47", "change": "4.13", "market_id": "33", "circulate_market_value": "19291363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 43, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "14.57", "change": "2.90", "market_id": "17", "circulate_market_value": "15224016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002506", "name": "协鑫集成", "hot_rank": 44, "hot_rank_chg": 137, "stock_cnt": 5797, "price": "2.61", "change": "6.97", "market_id": "33", "circulate_market_value": "15253994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -2.26}, {"name": "光伏", "change_pct": -1.58}, {"name": "储能", "change_pct": -2.1}, {"name": "乡村振兴", "change_pct": -1.01}, {"name": "颗粒硅", "change_pct": 0.59}, {"name": "BIPV概念", "change_pct": -1.12}, {"name": "低价股", "change_pct": -0.95}, {"name": "钙钛矿电池", "change_pct": -1.87}, {"name": "异质结电池HJT", "change_pct": -1.55}, {"name": "华为产业链", "change_pct": -2.32}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 45, "hot_rank_chg": 45, "stock_cnt": 5797, "price": "3.33", "change": "1.52", "market_id": "17", "circulate_market_value": "7367055700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.88}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "光通信", "change_pct": -1.97}, {"name": "林业", "change_pct": 0.3}, {"name": "军民融合", "change_pct": -1.89}, {"name": "军工", "change_pct": -1.5}, {"name": "人造肉", "change_pct": -0.35}]}, {"code": "603278", "name": "大业股份", "hot_rank": 46, "hot_rank_chg": -18, "stock_cnt": 5797, "price": "15.38", "change": "-3.15", "market_id": "17", "circulate_market_value": "5256259400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 47, "hot_rank_chg": -18, "stock_cnt": 5797, "price": "76.72", "change": "-1.62", "market_id": "33", "circulate_market_value": "50098735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 48, "hot_rank_chg": -36, "stock_cnt": 5797, "price": "33.10", "change": "-9.54", "market_id": "33", "circulate_market_value": "33818269000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 49, "hot_rank_chg": -28, "stock_cnt": 5797, "price": "56.73", "change": "-9.99", "market_id": "17", "circulate_market_value": "16932694000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 50, "hot_rank_chg": -24, "stock_cnt": 5797, "price": "42.15", "change": "-9.99", "market_id": "17", "circulate_market_value": "18891630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301171", "name": "易点天下", "hot_rank": 51, "hot_rank_chg": 76, "stock_cnt": 5797, "price": "35.13", "change": "1.30", "market_id": "33", "circulate_market_value": "17652872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 52, "hot_rank_chg": 49, "stock_cnt": 5797, "price": "11.68", "change": "9.98", "market_id": "33", "circulate_market_value": "3904144200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.77}, {"name": "饲料", "change_pct": -0.37}, {"name": "一带一路", "change_pct": -1.48}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "保健品", "change_pct": -0.17}, {"name": "山东国企改革", "change_pct": -1.32}, {"name": "污水处理", "change_pct": -1.34}, {"name": "环保", "change_pct": -1.37}, {"name": "食品", "change_pct": -0.26}, {"name": "预制菜", "change_pct": 0.44}, {"name": "国企改革", "change_pct": -1.14}, {"name": "水产养殖", "change_pct": 3.65}, {"name": "广西概念", "change_pct": -1.09}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 53, "hot_rank_chg": 23, "stock_cnt": 5797, "price": "29.41", "change": "-1.24", "market_id": "17", "circulate_market_value": "116804374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 54, "hot_rank_chg": -23, "stock_cnt": 5797, "price": "5.45", "change": "-6.20", "market_id": "17", "circulate_market_value": "3048291500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.93}, {"name": "ST摘帽", "change_pct": -1.38}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "游戏", "change_pct": -3.94}, {"name": "影视", "change_pct": -3.51}, {"name": "短剧/互动影游", "change_pct": -3.46}]}, {"code": "600667", "name": "太极实业", "hot_rank": 55, "hot_rank_chg": 77, "stock_cnt": 5797, "price": "13.16", "change": "-1.64", "market_id": "17", "circulate_market_value": "27524695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 56, "hot_rank_chg": -15, "stock_cnt": 5797, "price": "15.23", "change": "-2.31", "market_id": "33", "circulate_market_value": "10053729500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 57, "hot_rank_chg": -27, "stock_cnt": 5797, "price": "9.99", "change": "-5.75", "market_id": "33", "circulate_market_value": "10588952200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.32}, {"name": "电子烟", "change_pct": -2.59}, {"name": "一带一路", "change_pct": -1.48}, {"name": "造纸", "change_pct": -0.88}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "包装印刷", "change_pct": -1.34}, {"name": "卫星互联网", "change_pct": -2.55}, {"name": "太空算力", "change_pct": -3.35}]}, {"code": "000823", "name": "超声电子", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5797, "price": "19.04", "change": "0.21", "market_id": "33", "circulate_market_value": "11327508500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 59, "hot_rank_chg": 96, "stock_cnt": 5797, "price": "4.28", "change": "0.47", "market_id": "33", "circulate_market_value": "25058531000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -2.49}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "水利", "change_pct": -1.0}, {"name": "直播/短视频", "change_pct": -2.47}, {"name": "大数据", "change_pct": -2.53}, {"name": "园林", "change_pct": -1.48}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.27}, {"name": "数字经济", "change_pct": -2.35}, {"name": "腾讯概念股", "change_pct": -2.36}, {"name": "传媒", "change_pct": -2.29}, {"name": "理想汽车概念股", "change_pct": -3.12}, {"name": "第三代半导体", "change_pct": -1.5}, {"name": "快手概念股", "change_pct": -2.57}, {"name": "IGBT", "change_pct": -1.07}, {"name": "虚拟数字人", "change_pct": -3.81}, {"name": "AIGC概念", "change_pct": -2.99}, {"name": "字节跳动概念股", "change_pct": -2.56}, {"name": "氮化镓", "change_pct": -1.36}, {"name": "AI营销", "change_pct": -2.5}, {"name": "华为产业链", "change_pct": -2.32}, {"name": "AI大模型/智能体", "change_pct": -2.44}, {"name": "多模态", "change_pct": -3.39}, {"name": "AI视频", "change_pct": -3.79}, {"name": "液冷服务器", "change_pct": -1.98}, {"name": "小红书概念股", "change_pct": -1.96}, {"name": "区块链", "change_pct": -2.37}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 60, "hot_rank_chg": 44, "stock_cnt": 5797, "price": "10.35", "change": "-1.71", "market_id": "17", "circulate_market_value": "4478172300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.05}, {"name": "股权转让", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "光伏", "change_pct": -1.58}, {"name": "无线耳机", "change_pct": -2.24}, {"name": "华为产业链", "change_pct": -2.32}, {"name": "光伏胶膜", "change_pct": -1.63}]}, {"code": "002313", "name": "日海智能", "hot_rank": 61, "hot_rank_chg": 53, "stock_cnt": 5797, "price": "9.61", "change": "-5.41", "market_id": "33", "circulate_market_value": "3597785100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -2.5}, {"name": "边缘计算", "change_pct": -2.79}, {"name": "无人驾驶", "change_pct": -2.53}, {"name": "5G", "change_pct": -2.35}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "人工智能", "change_pct": -2.49}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "北斗导航", "change_pct": -2.49}, {"name": "物联网", "change_pct": -2.26}, {"name": "智慧城市", "change_pct": -2.3}, {"name": "智能制造", "change_pct": -2.37}, {"name": "工业互联网", "change_pct": -2.71}, {"name": "小米概念股", "change_pct": -2.27}, {"name": "阿里巴巴概念股", "change_pct": -2.42}, {"name": "华为海思", "change_pct": -2.33}, {"name": "国企改革", "change_pct": -1.14}, {"name": "低空经济", "change_pct": -1.96}]}, {"code": "600293", "name": "三峡新材", "hot_rank": 62, "hot_rank_chg": 53, "stock_cnt": 5797, "price": "4.23", "change": "-1.86", "market_id": "17", "circulate_market_value": "4907413500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.32}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "玻璃", "change_pct": -1.78}, {"name": "国企改革", "change_pct": -1.14}, {"name": "湖北国企改革", "change_pct": -1.36}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 63, "hot_rank_chg": 188, "stock_cnt": 5797, "price": "2.81", "change": "10.20", "market_id": "17", "circulate_market_value": "9806304800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI微短剧", "xgb_concepts": [{"name": "广电", "change_pct": -2.89}, {"name": "车联网/车路云", "change_pct": -2.5}, {"name": "超高清视频", "change_pct": -2.63}, {"name": "人工智能", "change_pct": -2.49}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "影视", "change_pct": -3.51}, {"name": "智慧城市", "change_pct": -2.3}, {"name": "国产芯片", "change_pct": -1.46}, {"name": "振兴东北", "change_pct": -0.45}, {"name": "传媒", "change_pct": -2.29}, {"name": "低价股", "change_pct": -0.95}, {"name": "国企改革", "change_pct": -1.14}, {"name": "在线教育", "change_pct": -2.88}, {"name": "医疗信息化", "change_pct": -1.92}, {"name": "AI大模型/智能体", "change_pct": -2.44}, {"name": "短剧/互动影游", "change_pct": -3.46}, {"name": "IP经济/谷子经济", "change_pct": -2.59}]}, {"code": "001309", "name": "德明利", "hot_rank": 64, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "203.10", "change": "-1.10", "market_id": "33", "circulate_market_value": "47204113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 65, "hot_rank_chg": 106, "stock_cnt": 5797, "price": "66.22", "change": "-2.04", "market_id": "17", "circulate_market_value": "23887104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 66, "hot_rank_chg": -48, "stock_cnt": 5797, "price": "140.34", "change": "-2.58", "market_id": "33", "circulate_market_value": "152744380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 67, "hot_rank_chg": 171, "stock_cnt": 5797, "price": "14.77", "change": "4.83", "market_id": "33", "circulate_market_value": "4174888200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 68, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "11.71", "change": "-3.38", "market_id": "17", "circulate_market_value": "15039396000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -2.37}, {"name": "工业互联网", "change_pct": -2.71}, {"name": "培育钻石", "change_pct": -2.17}, {"name": "金刚线", "change_pct": -2.58}, {"name": "国资入股", "change_pct": -0.97}, {"name": "深地经济", "change_pct": -1.42}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 69, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "103.28", "change": "-0.62", "market_id": "33", "circulate_market_value": "81181153000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 70, "hot_rank_chg": -36, "stock_cnt": 5797, "price": "27.13", "change": "-7.69", "market_id": "33", "circulate_market_value": "17935254000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 71, "hot_rank_chg": -28, "stock_cnt": 5797, "price": "39.25", "change": "-8.74", "market_id": "33", "circulate_market_value": "19159461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603706", "name": "东方环宇", "hot_rank": 72, "hot_rank_chg": 16, "stock_cnt": 5797, "price": "26.87", "change": "9.99", "market_id": "17", "circulate_market_value": "5088713500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "“东方系”"}, {"code": "300118", "name": "东方日升", "hot_rank": 73, "hot_rank_chg": -41, "stock_cnt": 5797, "price": "9.74", "change": "-9.90", "market_id": "33", "circulate_market_value": "9024300700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -4.87}, {"name": "光伏", "change_pct": -1.58}, {"name": "储能", "change_pct": -2.1}, {"name": "BIPV概念", "change_pct": -1.12}, {"name": "钙钛矿电池", "change_pct": -1.87}, {"name": "异质结电池HJT", "change_pct": -1.55}, {"name": "光伏胶膜", "change_pct": -1.63}]}, {"code": "601138", "name": "工业富联", "hot_rank": 74, "hot_rank_chg": -29, "stock_cnt": 5797, "price": "43.35", "change": "-4.85", "market_id": "17", "circulate_market_value": "860241400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 75, "hot_rank_chg": 107, "stock_cnt": 5797, "price": "25.23", "change": "-0.36", "market_id": "33", "circulate_market_value": "72159634000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 76, "hot_rank_chg": 2, "stock_cnt": 5797, "price": "12.19", "change": "0.08", "market_id": "17", "circulate_market_value": "4886751300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -1.09}, {"name": "新零售", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "物业管理", "change_pct": -1.12}, {"name": "国企改革", "change_pct": -1.14}, {"name": "地摊经济", "change_pct": -0.87}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 77, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "23.76", "change": "-2.66", "market_id": "17", "circulate_market_value": "34736996000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000525", "name": "红太阳", "hot_rank": 78, "hot_rank_chg": 45, "stock_cnt": 5797, "price": "5.38", "change": "3.66", "market_id": "33", "circulate_market_value": "5981268800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.91}, {"name": "草铵膦", "change_pct": -0.7}, {"name": "农药", "change_pct": -1.31}, {"name": "长寿药NMN", "change_pct": -0.6}, {"name": "大农业", "change_pct": -1.12}, {"name": "虫害防治", "change_pct": -0.99}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 79, "hot_rank_chg": 60, "stock_cnt": 5797, "price": "13.60", "change": "0.44", "market_id": "17", "circulate_market_value": "9057600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 80, "hot_rank_chg": 25, "stock_cnt": 5797, "price": "56.50", "change": "-5.91", "market_id": "33", "circulate_market_value": "12239481100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 81, "hot_rank_chg": -30, "stock_cnt": 5797, "price": "8.20", "change": "-4.43", "market_id": "33", "circulate_market_value": "13341349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.14}, {"name": "电竞", "change_pct": -3.56}, {"name": "手游", "change_pct": -3.93}, {"name": "人工智能", "change_pct": -2.49}, {"name": "游戏", "change_pct": -3.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.35}, {"name": "腾讯概念股", "change_pct": -2.36}, {"name": "传媒", "change_pct": -2.29}, {"name": "快手概念股", "change_pct": -2.57}, {"name": "元宇宙", "change_pct": -3.4}, {"name": "虚拟数字人", "change_pct": -3.81}, {"name": "东数西算/算力", "change_pct": -2.33}, {"name": "web3.0", "change_pct": -2.82}, {"name": "AIGC概念", "change_pct": -2.99}, {"name": "数据要素", "change_pct": -2.96}, {"name": "字节跳动概念股", "change_pct": -2.56}, {"name": "AI营销", "change_pct": -2.5}, {"name": "ChatGPT", "change_pct": -3.88}, {"name": "智能眼镜/MR头显", "change_pct": -2.72}, {"name": "AI大模型/智能体", "change_pct": -2.44}, {"name": "人形机器人", "change_pct": -3.74}, {"name": "短剧/互动影游", "change_pct": -3.46}, {"name": "多模态", "change_pct": -3.39}, {"name": "AI视频", "change_pct": -3.79}, {"name": "IP经济/谷子经济", "change_pct": -2.59}, {"name": "小红书概念股", "change_pct": -1.96}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 82, "hot_rank_chg": 12, "stock_cnt": 5797, "price": "18.32", "change": "10.03", "market_id": "33", "circulate_market_value": "3250114600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "603536", "name": "惠发食品", "hot_rank": 83, "hot_rank_chg": 70, "stock_cnt": 5797, "price": "13.04", "change": "10.04", "market_id": "17", "circulate_market_value": "3136540700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "预制菜"}, {"code": "002865", "name": "钧达股份", "hot_rank": 84, "hot_rank_chg": -34, "stock_cnt": 5797, "price": "43.88", "change": "-7.49", "market_id": "33", "circulate_market_value": "10040685300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 85, "hot_rank_chg": 37, "stock_cnt": 5797, "price": "32.59", "change": "-3.41", "market_id": "33", "circulate_market_value": "37396698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 86, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "29.95", "change": "-4.37", "market_id": "33", "circulate_market_value": "23491763000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 87, "hot_rank_chg": 23, "stock_cnt": 5797, "price": "29.50", "change": "-0.74", "market_id": "33", "circulate_market_value": "44778892000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 88, "hot_rank_chg": -44, "stock_cnt": 5797, "price": "29.55", "change": "-6.40", "market_id": "17", "circulate_market_value": "12969401500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 89, "hot_rank_chg": 133, "stock_cnt": 5797, "price": "13.00", "change": "4.00", "market_id": "17", "circulate_market_value": "14254431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 90, "hot_rank_chg": -42, "stock_cnt": 5797, "price": "240.00", "change": "-2.70", "market_id": "33", "circulate_market_value": "1022548100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600776", "name": "东方通信", "hot_rank": 91, "hot_rank_chg": -26, "stock_cnt": 5797, "price": "12.59", "change": "-7.77", "market_id": "17", "circulate_market_value": "12036040800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.99}, {"name": "5G", "change_pct": -2.35}, {"name": "强势人气股", "change_pct": -0.91}, {"name": "网络安全", "change_pct": -2.65}, {"name": "军工集团", "change_pct": -0.34}, {"name": "军工", "change_pct": -1.5}, {"name": "国企改革", "change_pct": -1.14}, {"name": "华为云·鲲鹏", "change_pct": -2.78}, {"name": "卫星互联网", "change_pct": -2.55}, {"name": "华为产业链", "change_pct": -2.32}, {"name": "AI大模型/智能体", "change_pct": -2.44}]}, {"code": "002181", "name": "粤传媒", "hot_rank": 92, "hot_rank_chg": 3, "stock_cnt": 5797, "price": "11.30", "change": "-3.91", "market_id": "33", "circulate_market_value": "12820269300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.01}, {"name": "足球", "change_pct": -2.06}, {"name": "粤港澳大湾区", "change_pct": -0.95}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.35}, {"name": "传媒", "change_pct": -2.29}, {"name": "AIGC概念", "change_pct": -2.99}, {"name": "字节跳动概念股", "change_pct": -2.56}, {"name": "国企改革", "change_pct": -1.14}, {"name": "网红/MCN", "change_pct": -2.02}, {"name": "短剧/互动影游", "change_pct": -3.46}, {"name": "AI视频", "change_pct": -3.79}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 93, "hot_rank_chg": -29, "stock_cnt": 5797, "price": "268.62", "change": "-3.22", "market_id": "17", "circulate_market_value": "109150598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 94, "hot_rank_chg": 51, "stock_cnt": 5797, "price": "7.00", "change": "-3.58", "market_id": "33", "circulate_market_value": "4937262200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": -1.4}, {"name": "工业自动化", "change_pct": -2.63}, {"name": "大飞机", "change_pct": -1.71}, {"name": "军民融合", "change_pct": -1.89}, {"name": "风电", "change_pct": -1.97}, {"name": "军工", "change_pct": -1.5}, {"name": "机器人", "change_pct": -2.78}, {"name": "智能制造", "change_pct": -2.37}, {"name": "工业母机", "change_pct": -2.88}, {"name": "减速器", "change_pct": -3.7}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 95, "hot_rank_chg": 26, "stock_cnt": 5797, "price": "7.30", "change": "5.95", "market_id": "33", "circulate_market_value": "13980175000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.27}, {"name": "林业", "change_pct": 0.3}, {"name": "碳中和", "change_pct": -0.93}, {"name": "自贸区", "change_pct": -0.58}]}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 96, "hot_rank_chg": -21, "stock_cnt": 5797, "price": "16.10", "change": "1.39", "market_id": "33", "circulate_market_value": "4045681300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 97, "hot_rank_chg": 1, "stock_cnt": 5797, "price": "7.66", "change": "-3.28", "market_id": "33", "circulate_market_value": "14286535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -1.96}, {"name": "云计算数据中心", "change_pct": -2.05}, {"name": "军民融合", "change_pct": -1.89}, {"name": "氢能源/燃料电池", "change_pct": -2.15}, {"name": "风电", "change_pct": -1.97}, {"name": "军工", "change_pct": -1.5}, {"name": "新能源汽车", "change_pct": -2.18}, {"name": "新能源车零部件", "change_pct": -2.72}, {"name": "轮边电机", "change_pct": -2.96}, {"name": "人形机器人", "change_pct": -3.74}]}, {"code": "688146", "name": "中船特气", "hot_rank": 98, "hot_rank_chg": 418, "stock_cnt": 5797, "price": "164.16", "change": "9.37", "market_id": "17", "circulate_market_value": "86908235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 99, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "16.22", "change": "-2.05", "market_id": "33", "circulate_market_value": "9505699800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 100, "hot_rank_chg": 25, "stock_cnt": 5797, "price": "14.39", "change": "-2.17", "market_id": "33", "circulate_market_value": "16929386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603175", "name": "超颖电子", "price": 99.54, "change_pct": 10.0, "reason": "公司间接控股股东定颖投控为中国台湾上市公司，主要产品为印制电路板，按照层数可分为双面板和多层板", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1794447506, "break_limit_up_times": 1}, {"code": "002086", "name": "东方海洋", "price": 5.16, "change_pct": 10.02, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 35.14, "first_limit_up": 1794446700, "break_limit_up_times": 39}, {"code": "601188", "name": "龙江交通", "price": 4.72, "change_pct": 10.02, "reason": "公司所辖哈大分公司圆满完成冰雪旅游季等关键时期保畅任务", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 26.41, "first_limit_up": 1794451099, "break_limit_up_times": 2}, {"code": "600853", "name": "龙建股份", "price": 4.21, "change_pct": 9.92, "reason": "1、黑龙江省国资委下唯一上市公司，东北地区最具实力、最具规模的大型综合建筑集团之一，先后在7个“一带一路”沿线国家获得项目；\n2、子公司峰悦文化在漠河观音山景区引入冰上龙舟、雪地摩托、冰上自行车、冰上爬犁、雪地滑梯、泼水成冰等系列冰雪活动", "plates": ["冰雪产业"], "limit_up_days": 1, "turnover_ratio": 9.81, "first_limit_up": 1794448355, "break_limit_up_times": 0}, {"code": "002696", "name": "百洋股份", "price": 11.68, "change_pct": 9.98, "reason": "公司为全球加工规模最大、国内领先的罗非鱼食品综合提供商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 36.51, "first_limit_up": 1794447054, "break_limit_up_times": 12}, {"code": "001358", "name": "兴欣新材", "price": 24.22, "change_pct": 9.99, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.63, "first_limit_up": 1794448509, "break_limit_up_times": 0}, {"code": "601929", "name": "吉视传媒", "price": 2.81, "change_pct": 10.2, "reason": "1、吉林有线网络运营商，公司旗下影院公司开有影城，基于吉林台海量广播电视媒资资源及来画公司布局AI视频和可视化AI智能体；\n2、公司一直在开展和谋划数据服务业务，例如为政企客户提供机柜租赁服务、大数据云计算服务，政府云（吉林祥云）及多个行业云平台都部署在公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 20.26, "first_limit_up": 1794449350, "break_limit_up_times": 3}, {"code": "601606", "name": "长城军工", "price": 32.62, "change_pct": 10.02, "reason": "安徽省国资委旗下，公司为老牌弹药供应商", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 9.51, "first_limit_up": 1794462774, "break_limit_up_times": 2}, {"code": "600569", "name": "安阳钢铁", "price": 2, "change_pct": 9.89, "reason": "河南国资委旗下，集炼焦、烧结、冶炼、轧材及科研开发为一体的大型钢铁联合企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.48, "first_limit_up": 1794448647, "break_limit_up_times": 1}, {"code": "600857", "name": "宁波中百", "price": 15, "change_pct": 9.97, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1794448881, "break_limit_up_times": 0}, {"code": "600467", "name": "好当家", "price": 2.48, "change_pct": 10.22, "reason": "公司为海参养殖龙头，拥有国内面积最大、投资最多、产量最高的海参产业基地", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1794453810, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 18.38, "change_pct": 9.99, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1794451988, "break_limit_up_times": 1}, {"code": "600327", "name": "大东方", "price": 7.18, "change_pct": 9.95, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 38.62, "first_limit_up": 1794466607, "break_limit_up_times": 0}, {"code": "603366", "name": "日出东方", "price": 13.17, "change_pct": 10.03, "reason": "公司光伏业务主要为分布式户用光伏业务和分布式工商业光伏业务，空气能热泵领域技术领先", "plates": ["光伏"], "limit_up_days": 5, "turnover_ratio": 19.86, "first_limit_up": 1794447018, "break_limit_up_times": 7}, {"code": "002021", "name": "中捷资源", "price": 2.63, "change_pct": 10.04, "reason": "公司主要从事中、高档工业缝制机械，全资子公司浙江中捷缝纫科技与复旦大学合作机器人等技术", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.63, "first_limit_up": 1794453102, "break_limit_up_times": 0}, {"code": "603725", "name": "天安新材", "price": 13.16, "change_pct": 10.03, "reason": "公司拟收购嘉万光62.5%股权，标的主营无源光器件及电信光缆、机箱等产品", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 5.96, "first_limit_up": 1794446700, "break_limit_up_times": 1}, {"code": "600558", "name": "大西洋", "price": 5.96, "change_pct": 9.96, "reason": "1、机器人配套设备的制造可以使用公司的焊接材料；\n2、公司焊接材料成功运用于秦山核电、福清核电、防城港核电等核电项目的装备制造中", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 19.09, "first_limit_up": 1794447099, "break_limit_up_times": 5}, {"code": "002205", "name": "国统股份", "price": 11.75, "change_pct": 10.02, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1794447906, "break_limit_up_times": 1}, {"code": "605169", "name": "洪通燃气", "price": 13.55, "change_pct": 9.98, "reason": "新疆天然气专业运营商", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 3.22, "first_limit_up": 1794448040, "break_limit_up_times": 1}, {"code": "603536", "name": "惠发食品", "price": 13.04, "change_pct": 10.04, "reason": "公司主要从事速冻类预制菜的丸类制品、肠类制品、油炸类制品、串类制品、菜肴制品等速冻食品的研发、生产和销售以及供应链业务的推广运营", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 24.03, "first_limit_up": 1794447011, "break_limit_up_times": 1}, {"code": "603135", "name": "中重科技", "price": 10.18, "change_pct": 10.05, "reason": "公司主要产品为智能装备及生产线，产线中包含了智能打包机器人、智能标识机器人、拆辊机器人、码垛机器人等机器人", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 11.24, "first_limit_up": 1794453166, "break_limit_up_times": 1}, {"code": "605222", "name": "起帆电缆", "price": 20.55, "change_pct": 10.01, "reason": "1、公司人形机器人用电缆已开展3D动态扭转、反复曲挠、拖链试验等疲劳试验，寿命达8000多万次，远超用户使用预期；\n2、公司产品成功应用于 FAST 望远镜工程、C919大飞机工程、太原卫星发射中心、上海轨道交通等重点工程中；\n3、公司可用于核电领域的产品有核电站用防火电力及信号组合电缆、核电站用铝合金导体组合电缆等系列，风电领域有风电用橡皮绝缘系列耐寒耐扭曲等电缆产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.82, "first_limit_up": 1794453630, "break_limit_up_times": 1}, {"code": "603706", "name": "东方环宇", "price": 26.87, "change_pct": 9.99, "reason": "公司地处新疆，业务包括CNG汽车加气、居民生活用气、工商业客户用气", "plates": ["天然气"], "limit_up_days": 4, "turnover_ratio": 8.81, "first_limit_up": 1794452446, "break_limit_up_times": 0}, {"code": "000573", "name": "粤宏远Ａ", "price": 4.35, "change_pct": 10.13, "reason": "1、公司拟不超5.5亿元收购金旺达100%股权，标的公司专注于精密传动功能部件领域生产制造，核心产品包括精密直线导轨、精密滚珠丝杠等，广泛应用于新能源、3C电子、LCD/LED面板、汽车制造装备、医疗等高端自动化领域；\n2、东莞市场多年经营的房地产企业，广东省合法产能最大的再生铅企业", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 0.98, "first_limit_up": 1794446700, "break_limit_up_times": 0}, {"code": "605255", "name": "天普股份", "price": 67.11, "change_pct": 10.0, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 1.44, "first_limit_up": 1794447662, "break_limit_up_times": 2}, {"code": "000995", "name": "皇台酒业", "price": 18.32, "change_pct": 10.03, "reason": "甘肃小型白酒企业；公司白酒产业拥有“皇台”和“凉州皇台”两大品牌，目前拥有“窖底原浆”、“皇台经典”等系列产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 38.2, "first_limit_up": 1794460059, "break_limit_up_times": 6}, {"code": "002623", "name": "亚玛顿", "price": 25.66, "change_pct": 9.99, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，控股股东拟向骑形网络转让公司20%股份", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 0.79, "first_limit_up": 1794446700, "break_limit_up_times": 0}, {"code": "002187", "name": "广百股份", "price": 6.34, "change_pct": 10.07, "reason": "1、公司是广州地区最大百货连锁零售企业，积极开发钻石DIY等定制商品，推出品牌IP盲盒；\n2、公司通过旗下广州商贸产业基金间接参股中科宇航", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.46, "first_limit_up": 1794448503, "break_limit_up_times": 0}, {"code": "002693", "name": "双成药业", "price": 8.73, "change_pct": 9.95, "reason": "公司主营多肽药业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.82, "first_limit_up": 1794451782, "break_limit_up_times": 4}, {"code": "601091", "name": "沈鼓集团", "price": 20.92, "change_pct": 9.99, "reason": "沈阳铁西区国资局旗下，离心压缩机国家级制造业单项冠军，我国核主泵中屏蔽主泵的唯一国产自主供应商，在天然气领域开发了天然气管道输送用20MW级变频电驱管线压缩机组、40MPa天然气储气库压缩机组及离心式低温天然气压缩机组，并实现燃驱及大功率电驱天然气离心压缩机组国产化突破", "plates": ["天然气"], "limit_up_days": 1, "turnover_ratio": 32.92, "first_limit_up": 1794461366, "break_limit_up_times": 2}, {"code": "002628", "name": "成都路桥", "price": 4.74, "change_pct": 9.98, "reason": "成都优质基建企业；2025年7月，公司与深圳市优必选、中国民航正式签署战略合作框架协议，就具身智能机器人及人工智能技术在民航和泛交通行业落地应用进行深入合作探索，全资子公司四川成路智汇科技和优必选等联合成立锦程智行(成都)，锦程智行已获取订单并投入机场使用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1794447120, "break_limit_up_times": 1}, {"code": "603396", "name": "金辰股份", "price": 32.11, "change_pct": 10.0, "reason": "公司为全球光伏组件设备龙头，与Singulus T此前成立合资企业\"Singulus Solar\"", "plates": ["光伏"], "limit_up_days": 2, "turnover_ratio": 0.89, "first_limit_up": 1794446700, "break_limit_up_times": 0}, {"code": "601566", "name": "九牧王", "price": 12.47, "change_pct": 9.96, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 12.94, "first_limit_up": 1794465058, "break_limit_up_times": 4}, {"code": "002148", "name": "北纬科技", "price": 7.23, "change_pct": 10.05, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 30.01, "first_limit_up": 1794446700, "break_limit_up_times": 7}, {"code": "002593", "name": "日上集团", "price": 5.23, "change_pct": 10.11, "reason": "公司位于厦门，国内商用车钢轮最大的出口商，焊接机器人已应用于车轮及钢结构生产线，用于改善焊接效率并收集生产数据", "plates": ["福建自贸/海西概念"], "limit_up_days": 2, "turnover_ratio": 31.26, "first_limit_up": 1794447024, "break_limit_up_times": 4}, {"code": "600802", "name": "福建水泥", "price": 8.59, "change_pct": 9.99, "reason": "公司是福建地区产能规模最大的水泥制造企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 43.75, "first_limit_up": 1794459602, "break_limit_up_times": 19}, {"code": "002172", "name": "澳洋健康", "price": 6.66, "change_pct": 10.08, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 29.27, "first_limit_up": 1794447771, "break_limit_up_times": 4}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};