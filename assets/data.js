const UPDATE_TIME = "2026-11-19 03:58";
const THS_HOT = [
  {
    "name": "光刻胶",
    "rise": 1.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "算力租赁",
    "rise": -2.94,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.9,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续333天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": -1.67,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光刻机",
    "rise": 0.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "东数西算(算力)",
    "rise": -2.37,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "机器人概念",
    "rise": -1.68,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "创新药",
    "rise": -1.19,
    "rate": 0,
    "tag": "",
    "hotTag": "连续163天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 0.44,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续286天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -0.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续156天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -1.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续262天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "短剧游戏",
    "rise": -3.74,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "芯片概念",
    "rise": -0.73,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "华为昇腾",
    "rise": -2.74,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886058"
  },
  {
    "name": "冰雪产业",
    "rise": -2.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "AI应用",
    "rise": -2.49,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "国家大基金持股",
    "rise": 1.25,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "芬太尼",
    "rise": 0.67,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "",
    "code": "885805"
  },
  {
    "name": "猪肉",
    "rise": -2.41,
    "rate": 0,
    "tag": "",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "ST板块",
    "rise": -1.25,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "Anthropic IPO定价83美元高于指导区间上限 今晚登陆纳斯达克",
    "desc": "",
    "heat": 336056,
    "direction": "人工智能",
    "themes": [
      "AI智能体",
      "AI应用",
      "人工智能",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "蓝箭电子",
        "code": "301348",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "Palo Alto Networks第一财季业绩超预期并上调全年指引",
    "desc": "",
    "heat": 22346,
    "direction": "网络安全",
    "themes": [
      "网络安全"
    ],
    "stocks": [
      {
        "name": "任子行",
        "code": "300311",
        "chg": 10.859729
      }
    ]
  },
  {
    "title": "“浪已经杀过来了”，腾讯前三季度资本开支1661.53亿元",
    "desc": "",
    "heat": 20310,
    "direction": "腾讯算力",
    "themes": [
      "腾讯系算力",
      "腾讯概念"
    ],
    "stocks": [
      {
        "name": "中嘉博创",
        "code": "000889",
        "chg": 10.059172
      }
    ]
  },
  {
    "title": "美国民主党筹备数据中心电力改革方案 运营商10年内或需多付350亿美元",
    "desc": "",
    "heat": 10225,
    "direction": "电力电网",
    "themes": [
      "电力",
      "电网设备",
      "柔性直流输电",
      "特高压",
      "智能电网"
    ],
    "stocks": [
      {
        "name": "广电电气",
        "code": "601616",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "APEC工商领导人峰会，外宾都在寻找哪些深圳机遇？",
    "desc": "",
    "heat": 9410,
    "direction": "深圳APEC",
    "themes": [
      "APEC",
      "深圳"
    ],
    "stocks": [
      {
        "name": "卡莱特",
        "code": "301391",
        "chg": 17.616802
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "科创50",
    "change": "+1.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+1.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+1.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "+0.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+0.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "第三代半导体",
    "change": "+0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氮化镓",
    "change": "+0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+0.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧丙烷",
    "change": "+0.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+0.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "出海龙头",
    "change": "+0.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车芯片",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+0.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+0.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 3,
    "hot_rank_chg": 8,
    "stock_cnt": 5826,
    "price": "7.56",
    "change": "2.58",
    "market_id": "33",
    "circulate_market_value": "7617375200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "工业自动化",
        "change_pct": -1.69
      },
      {
        "name": "机械",
        "change_pct": -0.93
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "信创",
        "change_pct": -2.65
      },
      {
        "name": "AI算力芯片",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5826,
    "price": "11.51",
    "change": "-7.25",
    "market_id": "33",
    "circulate_market_value": "6907343500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.07
      },
      {
        "name": "边缘计算",
        "change_pct": -2.86
      },
      {
        "name": "核电",
        "change_pct": -1.59
      },
      {
        "name": "海工装备",
        "change_pct": -0.94
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "冷链",
        "change_pct": -1.14
      },
      {
        "name": "地热",
        "change_pct": -2.07
      },
      {
        "name": "储能",
        "change_pct": -1.49
      },
      {
        "name": "碳中和",
        "change_pct": -1.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -3.66
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.42
      },
      {
        "name": "热泵",
        "change_pct": -1.45
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.82
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.64
      },
      {
        "name": "海洋经济",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 7,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "9.28",
    "change": "4.04",
    "market_id": "33",
    "circulate_market_value": "4185527000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -2.02
      },
      {
        "name": "手游",
        "change_pct": -3.26
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "游戏",
        "change_pct": -3.6
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "机器人",
        "change_pct": -1.8
      },
      {
        "name": "无人机",
        "change_pct": -1.67
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.96
      },
      {
        "name": "低空经济",
        "change_pct": -1.67
      },
      {
        "name": "无人物流车",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 9,
    "hot_rank_chg": 1,
    "stock_cnt": 5826,
    "price": "2.73",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "7814276200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.26
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "游戏",
        "change_pct": -3.6
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.87
      },
      {
        "name": "AI视频",
        "change_pct": -3.48
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 10,
    "hot_rank_chg": 20,
    "stock_cnt": 5826,
    "price": "5.87",
    "change": "3.35",
    "market_id": "17",
    "circulate_market_value": "27089807000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -1.56
      },
      {
        "name": "国产软件",
        "change_pct": -2.43
      },
      {
        "name": "锂电池",
        "change_pct": -1.36
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "养老产业",
        "change_pct": -1.75
      },
      {
        "name": "大飞机",
        "change_pct": -1.3
      },
      {
        "name": "军民融合",
        "change_pct": -1.77
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "大数据",
        "change_pct": -2.53
      },
      {
        "name": "智慧城市",
        "change_pct": -2.34
      },
      {
        "name": "军工",
        "change_pct": -1.6
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "机器人",
        "change_pct": -1.8
      },
      {
        "name": "黑色家电",
        "change_pct": -0.98
      },
      {
        "name": "家电",
        "change_pct": -1.83
      },
      {
        "name": "储能",
        "change_pct": -1.49
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "工业互联网",
        "change_pct": -1.84
      },
      {
        "name": "数字经济",
        "change_pct": -2.72
      },
      {
        "name": "百度概念股",
        "change_pct": -2.56
      },
      {
        "name": "NFT",
        "change_pct": -2.8
      },
      {
        "name": "跨境支付",
        "change_pct": -2.17
      },
      {
        "name": "华为海思",
        "change_pct": -1.57
      },
      {
        "name": "云游戏",
        "change_pct": -3.08
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.42
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.09
      },
      {
        "name": "服务器",
        "change_pct": -2.44
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.37
      },
      {
        "name": "星闪概念",
        "change_pct": -1.71
      },
      {
        "name": "低空经济",
        "change_pct": -1.67
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 11,
    "hot_rank_chg": 79,
    "stock_cnt": 5826,
    "price": "8.90",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3578785200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.77
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "纺织服装",
        "change_pct": -1.3
      },
      {
        "name": "湖南国企改革",
        "change_pct": -2.0
      },
      {
        "name": "外贸受益概念",
        "change_pct": -1.1
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.28
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 13,
    "hot_rank_chg": -6,
    "stock_cnt": 5826,
    "price": "4.57",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "5965997500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "高速公路",
        "change_pct": -1.12
      },
      {
        "name": "振兴东北",
        "change_pct": -2.36
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 14,
    "hot_rank_chg": -1,
    "stock_cnt": 5826,
    "price": "3.44",
    "change": "-7.78",
    "market_id": "33",
    "circulate_market_value": "5438541200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.75
      },
      {
        "name": "体外诊断",
        "change_pct": -1.17
      },
      {
        "name": "医疗器械",
        "change_pct": -1.26
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "基因测序",
        "change_pct": -1.58
      },
      {
        "name": "预制菜",
        "change_pct": -1.67
      },
      {
        "name": "水产养殖",
        "change_pct": -3.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.28
      },
      {
        "name": "海洋经济",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 15,
    "hot_rank_chg": 169,
    "stock_cnt": 5826,
    "price": "3.72",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3235654000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力销售",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": -2.27
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.96
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "Kimi概念",
        "change_pct": -2.31
      },
      {
        "name": "智谱AI",
        "change_pct": -3.55
      },
      {
        "name": "区块链",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 18,
    "hot_rank_chg": -4,
    "stock_cnt": 5826,
    "price": "4.62",
    "change": "-9.94",
    "market_id": "17",
    "circulate_market_value": "6167944700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.44
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "LED",
        "change_pct": -1.22
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 21,
    "hot_rank_chg": 10,
    "stock_cnt": 5826,
    "price": "9.14",
    "change": "-9.77",
    "market_id": "17",
    "circulate_market_value": "7431259600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "充电桩",
        "change_pct": -1.52
      },
      {
        "name": "光伏",
        "change_pct": -1.66
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "家电",
        "change_pct": -1.83
      },
      {
        "name": "储能",
        "change_pct": -1.49
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -1.45
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.29
      },
      {
        "name": "厨卫家电",
        "change_pct": -2.62
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 22,
    "hot_rank_chg": 14,
    "stock_cnt": 5826,
    "price": "9.09",
    "change": "1.23",
    "market_id": "17",
    "circulate_market_value": "16263267000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.24
      },
      {
        "name": "纯碱",
        "change_pct": -2.12
      },
      {
        "name": "食品",
        "change_pct": -0.66
      },
      {
        "name": "土壤修复",
        "change_pct": -1.9
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.44
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -3.08
      }
    ]
  },
  {
    "code": "002575",
    "name": "群兴玩具",
    "hot_rank": 23,
    "hot_rank_chg": 865,
    "stock_cnt": 5826,
    "price": "4.91",
    "change": "-0.20",
    "market_id": "33",
    "circulate_market_value": "2869038200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "物业管理",
        "change_pct": -1.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 24,
    "hot_rank_chg": 145,
    "stock_cnt": 5826,
    "price": "2.34",
    "change": "9.86",
    "market_id": "17",
    "circulate_market_value": "3081624400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "边缘AI算力",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.77
      },
      {
        "name": "长三角一体化",
        "change_pct": -0.47
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "装修装饰",
        "change_pct": -1.6
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.61
      },
      {
        "name": "建筑节能",
        "change_pct": -1.63
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.09
      },
      {
        "name": "低价股",
        "change_pct": -1.46
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.12
      },
      {
        "name": "旧改",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 26,
    "hot_rank_chg": -6,
    "stock_cnt": 5826,
    "price": "3.77",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "3469100900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.26
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "VR&AR",
        "change_pct": -1.73
      },
      {
        "name": "游戏",
        "change_pct": -3.6
      },
      {
        "name": "动漫",
        "change_pct": -3.37
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "快手概念股",
        "change_pct": -3.82
      },
      {
        "name": "NFT",
        "change_pct": -2.8
      },
      {
        "name": "元宇宙",
        "change_pct": -3.01
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.88
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.37
      },
      {
        "name": "云游戏",
        "change_pct": -3.08
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 28,
    "hot_rank_chg": 50,
    "stock_cnt": 5826,
    "price": "4.53",
    "change": "-3.82",
    "market_id": "17",
    "circulate_market_value": "4008051200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.22
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "信托",
        "change_pct": -0.27
      },
      {
        "name": "民营医院",
        "change_pct": -1.78
      },
      {
        "name": "汽车销售",
        "change_pct": -2.88
      },
      {
        "name": "社区团购",
        "change_pct": -1.77
      },
      {
        "name": "大金融",
        "change_pct": -0.63
      },
      {
        "name": "餐饮",
        "change_pct": -1.75
      },
      {
        "name": "首发经济",
        "change_pct": -1.52
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 30,
    "hot_rank_chg": 51,
    "stock_cnt": 5826,
    "price": "8.70",
    "change": "-8.32",
    "market_id": "33",
    "circulate_market_value": "4928361100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "石墨烯",
        "change_pct": -1.52
      },
      {
        "name": "军民融合",
        "change_pct": -1.77
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "LED",
        "change_pct": -1.22
      },
      {
        "name": "军工",
        "change_pct": -1.6
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.59
      },
      {
        "name": "海洋经济",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 31,
    "hot_rank_chg": 211,
    "stock_cnt": 5826,
    "price": "6.05",
    "change": "-0.98",
    "market_id": "33",
    "circulate_market_value": "3230700100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": -2.43
      },
      {
        "name": "深圳本地股",
        "change_pct": -1.63
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "金融科技",
        "change_pct": -2.27
      },
      {
        "name": "网络安全",
        "change_pct": -2.58
      },
      {
        "name": "充电桩",
        "change_pct": -1.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "移动支付",
        "change_pct": -1.89
      },
      {
        "name": "教育",
        "change_pct": -2.34
      },
      {
        "name": "智慧城市",
        "change_pct": -2.34
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.35
      },
      {
        "name": "LED",
        "change_pct": -1.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "机器人",
        "change_pct": -1.8
      },
      {
        "name": "数字经济",
        "change_pct": -2.72
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "信创",
        "change_pct": -2.65
      },
      {
        "name": "NFT",
        "change_pct": -2.8
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "数字乡村",
        "change_pct": -2.46
      },
      {
        "name": "教育信息化",
        "change_pct": -2.22
      },
      {
        "name": "数字人民币",
        "change_pct": -2.4
      },
      {
        "name": "智慧政务",
        "change_pct": -2.9
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.78
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.29
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -2.47
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.59
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 32,
    "hot_rank_chg": 115,
    "stock_cnt": 5826,
    "price": "11.02",
    "change": "-1.87",
    "market_id": "17",
    "circulate_market_value": "3766188500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "轮胎",
        "change_pct": -0.56
      },
      {
        "name": "风电",
        "change_pct": -1.22
      },
      {
        "name": "航天",
        "change_pct": -1.59
      },
      {
        "name": "人形机器人",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 33,
    "hot_rank_chg": -14,
    "stock_cnt": 5826,
    "price": "9.67",
    "change": "-9.20",
    "market_id": "33",
    "circulate_market_value": "6623006200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.79
      },
      {
        "name": "核电",
        "change_pct": -1.59
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "充电桩",
        "change_pct": -1.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "储能",
        "change_pct": -1.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.62
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 1.01
      },
      {
        "name": "智能电网",
        "change_pct": -1.85
      },
      {
        "name": "核聚变",
        "change_pct": -1.34
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 34,
    "hot_rank_chg": 16,
    "stock_cnt": 5826,
    "price": "6.56",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "4597868800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.22
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.35
      },
      {
        "name": "物业管理",
        "change_pct": -1.62
      },
      {
        "name": "预制菜",
        "change_pct": -1.67
      },
      {
        "name": "地摊经济",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 35,
    "hot_rank_chg": 26,
    "stock_cnt": 5826,
    "price": "3.94",
    "change": "-0.76",
    "market_id": "33",
    "circulate_market_value": "3392980500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.73
      },
      {
        "name": "一带一路",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.69
      },
      {
        "name": "光伏",
        "change_pct": -1.66
      },
      {
        "name": "有色金属",
        "change_pct": -1.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.54
      },
      {
        "name": "自贸区",
        "change_pct": -1.73
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.82
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 36,
    "hot_rank_chg": 50,
    "stock_cnt": 5826,
    "price": "7.38",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "3495760500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.26
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "VR&AR",
        "change_pct": -1.73
      },
      {
        "name": "游戏",
        "change_pct": -3.6
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.98
      },
      {
        "name": "动漫",
        "change_pct": -3.37
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "传媒",
        "change_pct": -3.01
      },
      {
        "name": "元宇宙",
        "change_pct": -3.01
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.87
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 37,
    "hot_rank_chg": 64,
    "stock_cnt": 5826,
    "price": "3.69",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "4282401700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "纺织服装",
        "change_pct": -1.3
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.76
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.87
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 40,
    "hot_rank_chg": -12,
    "stock_cnt": 5826,
    "price": "11.23",
    "change": "2.09",
    "market_id": "17",
    "circulate_market_value": "11734090600.00",
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
        "name": "上海国企改革",
        "change_pct": -0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -3.01
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 44,
    "hot_rank_chg": -19,
    "stock_cnt": 5826,
    "price": "8.09",
    "change": "3.32",
    "market_id": "33",
    "circulate_market_value": "3892417200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.17
      },
      {
        "name": "医疗器械",
        "change_pct": -1.26
      },
      {
        "name": "锂电池",
        "change_pct": -1.36
      },
      {
        "name": "基因测序",
        "change_pct": -1.58
      },
      {
        "name": "PCB板",
        "change_pct": -0.42
      },
      {
        "name": "医药",
        "change_pct": -1.26
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "化学原料药",
        "change_pct": -1.16
      },
      {
        "name": "食品安全",
        "change_pct": -1.67
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.87
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.12
      },
      {
        "name": "异丙醇",
        "change_pct": -0.11
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.28
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.29
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 45,
    "hot_rank_chg": 39,
    "stock_cnt": 5826,
    "price": "8.91",
    "change": "-4.30",
    "market_id": "33",
    "circulate_market_value": "4585506100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -1.46
      },
      {
        "name": "5G",
        "change_pct": -1.97
      },
      {
        "name": "光通信",
        "change_pct": -1.38
      },
      {
        "name": "教育",
        "change_pct": -2.34
      },
      {
        "name": "毫米波通信",
        "change_pct": -2.28
      },
      {
        "name": "6G",
        "change_pct": -1.67
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.95
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "毫米波雷达",
        "change_pct": -1.09
      },
      {
        "name": "5.5G概念",
        "change_pct": -2.31
      }
    ]
  },
  {
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 46,
    "hot_rank_chg": -6,
    "stock_cnt": 5826,
    "price": "4.24",
    "change": "-4.50",
    "market_id": "33",
    "circulate_market_value": "7250329400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.79
      },
      {
        "name": "数字孪生",
        "change_pct": -2.88
      },
      {
        "name": "半导体",
        "change_pct": 0.47
      },
      {
        "name": "国产软件",
        "change_pct": -2.43
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "网络安全",
        "change_pct": -2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "大飞机",
        "change_pct": -1.3
      },
      {
        "name": "北斗导航",
        "change_pct": -1.98
      },
      {
        "name": "军民融合",
        "change_pct": -1.77
      },
      {
        "name": "京津冀",
        "change_pct": -1.75
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "大数据",
        "change_pct": -2.53
      },
      {
        "name": "智慧城市",
        "change_pct": -2.34
      },
      {
        "name": "电子发票",
        "change_pct": -2.39
      },
      {
        "name": "军工",
        "change_pct": -1.6
      },
      {
        "name": "无人机",
        "change_pct": -1.67
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "工业互联网",
        "change_pct": -1.84
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.72
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "信创",
        "change_pct": -2.65
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.65
      },
      {
        "name": "航天",
        "change_pct": -1.59
      },
      {
        "name": "数字人民币",
        "change_pct": -2.4
      },
      {
        "name": "智慧政务",
        "change_pct": -2.9
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.78
      },
      {
        "name": "云游戏",
        "change_pct": -3.08
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "物理AI",
        "change_pct": -2.1
      },
      {
        "name": "时空大数据",
        "change_pct": -2.3
      },
      {
        "name": "AI算力芯片",
        "change_pct": -1.61
      },
      {
        "name": "军工信息化",
        "change_pct": -2.73
      },
      {
        "name": "财税改革",
        "change_pct": -2.39
      },
      {
        "name": "区块链",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 47,
    "hot_rank_chg": -21,
    "stock_cnt": 5826,
    "price": "4.50",
    "change": "-4.46",
    "market_id": "33",
    "circulate_market_value": "3938799900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.26
      },
      {
        "name": "一带一路",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "冷链",
        "change_pct": -1.14
      },
      {
        "name": "小家电",
        "change_pct": -2.2
      },
      {
        "name": "白色家电",
        "change_pct": -1.29
      },
      {
        "name": "家电",
        "change_pct": -1.83
      },
      {
        "name": "破净股",
        "change_pct": -1.11
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "工业互联网",
        "change_pct": -1.84
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -1.45
      },
      {
        "name": "垃圾分类",
        "change_pct": -1.87
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.28
      },
      {
        "name": "C2M",
        "change_pct": -2.08
      },
      {
        "name": "生物安全",
        "change_pct": -0.81
      },
      {
        "name": "出海龙头",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "600405",
    "name": "动力源",
    "hot_rank": 49,
    "hot_rank_chg": 268,
    "stock_cnt": 5826,
    "price": "4.48",
    "change": "-3.03",
    "market_id": "17",
    "circulate_market_value": "2745476600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.79
      },
      {
        "name": "5G",
        "change_pct": -1.97
      },
      {
        "name": "充电桩",
        "change_pct": -1.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.44
      },
      {
        "name": "光伏",
        "change_pct": -1.66
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.48
      },
      {
        "name": "储能",
        "change_pct": -1.49
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.54
      },
      {
        "name": "换电概念",
        "change_pct": -1.49
      },
      {
        "name": "BIPV概念",
        "change_pct": -1.65
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 53,
    "hot_rank_chg": 72,
    "stock_cnt": 5826,
    "price": "4.51",
    "change": "-8.71",
    "market_id": "17",
    "circulate_market_value": "2522531100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.26
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "游戏",
        "change_pct": -3.6
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.87
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 56,
    "hot_rank_chg": 106,
    "stock_cnt": 5826,
    "price": "7.05",
    "change": "-7.96",
    "market_id": "33",
    "circulate_market_value": "2356525400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.68
      },
      {
        "name": "饲料",
        "change_pct": -2.04
      },
      {
        "name": "一带一路",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "保健品",
        "change_pct": -0.35
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.4
      },
      {
        "name": "污水处理",
        "change_pct": -1.8
      },
      {
        "name": "环保",
        "change_pct": -1.56
      },
      {
        "name": "食品",
        "change_pct": -0.66
      },
      {
        "name": "预制菜",
        "change_pct": -1.67
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "水产养殖",
        "change_pct": -3.95
      },
      {
        "name": "广西概念",
        "change_pct": -2.0
      }
    ]
  },
  {
    "code": "000707",
    "name": "双环科技",
    "hot_rank": 57,
    "hot_rank_chg": 59,
    "stock_cnt": 5826,
    "price": "4.55",
    "change": "-9.90",
    "market_id": "33",
    "circulate_market_value": "2505701300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "纯碱",
        "change_pct": -2.12
      },
      {
        "name": "烧碱",
        "change_pct": -1.02
      },
      {
        "name": "钠电池",
        "change_pct": -1.4
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "湖北国企改革",
        "change_pct": -2.04
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 59,
    "hot_rank_chg": 318,
    "stock_cnt": 5826,
    "price": "8.79",
    "change": "2.21",
    "market_id": "33",
    "circulate_market_value": "7200088400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.43
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.02
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -1.79
      },
      {
        "name": "国产软件",
        "change_pct": -2.43
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "网络安全",
        "change_pct": -2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "工业互联网",
        "change_pct": -1.84
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": -2.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "信创",
        "change_pct": -2.65
      },
      {
        "name": "数据要素",
        "change_pct": -2.84
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -2.47
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.37
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 62,
    "hot_rank_chg": 133,
    "stock_cnt": 5826,
    "price": "3.12",
    "change": "-5.17",
    "market_id": "17",
    "circulate_market_value": "10197526900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.38
      },
      {
        "name": "养老产业",
        "change_pct": -1.75
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.35
      },
      {
        "name": "民营医院",
        "change_pct": -1.78
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "地摊经济",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 65,
    "hot_rank_chg": 65,
    "stock_cnt": 5826,
    "price": "4.71",
    "change": "-4.46",
    "market_id": "33",
    "circulate_market_value": "3603812800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.27
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.33
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "医药商业",
        "change_pct": -1.63
      },
      {
        "name": "保健品",
        "change_pct": -0.35
      },
      {
        "name": "民营医院",
        "change_pct": -1.78
      },
      {
        "name": "医药",
        "change_pct": -1.26
      },
      {
        "name": "食品",
        "change_pct": -0.66
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.87
      },
      {
        "name": "口腔",
        "change_pct": -0.64
      },
      {
        "name": "医美",
        "change_pct": -0.8
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.28
      }
    ]
  },
  {
    "code": "002042",
    "name": "华孚时尚",
    "hot_rank": 67,
    "hot_rank_chg": 73,
    "stock_cnt": 5826,
    "price": "3.73",
    "change": "-5.81",
    "market_id": "33",
    "circulate_market_value": "6343541500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": -1.91
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "纺织服装",
        "change_pct": -1.3
      },
      {
        "name": "棉花",
        "change_pct": -2.75
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.35
      },
      {
        "name": "大农业",
        "change_pct": -1.73
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "供销社",
        "change_pct": -2.21
      },
      {
        "name": "职业教育",
        "change_pct": -2.43
      },
      {
        "name": "C2M",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 70,
    "hot_rank_chg": -11,
    "stock_cnt": 5826,
    "price": "2.27",
    "change": "-8.47",
    "market_id": "17",
    "circulate_market_value": "7921819100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -3.07
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.02
      },
      {
        "name": "超高清视频",
        "change_pct": -1.56
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "影视",
        "change_pct": -4.58
      },
      {
        "name": "智慧城市",
        "change_pct": -2.34
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "振兴东北",
        "change_pct": -2.36
      },
      {
        "name": "传媒",
        "change_pct": -3.01
      },
      {
        "name": "低价股",
        "change_pct": -1.46
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "在线教育",
        "change_pct": -2.12
      },
      {
        "name": "医疗信息化",
        "change_pct": -2.78
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -3.87
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.71
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 72,
    "hot_rank_chg": 41,
    "stock_cnt": 5826,
    "price": "5.20",
    "change": "-7.96",
    "market_id": "17",
    "circulate_market_value": "2382891700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -1.5
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.69
      },
      {
        "name": "自贸区",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 74,
    "hot_rank_chg": -12,
    "stock_cnt": 5826,
    "price": "2.58",
    "change": "-6.86",
    "market_id": "17",
    "circulate_market_value": "3769365300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.27
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "冷链",
        "change_pct": -1.14
      },
      {
        "name": "医药",
        "change_pct": -1.26
      },
      {
        "name": "食品",
        "change_pct": -0.66
      },
      {
        "name": "食品安全",
        "change_pct": -1.67
      },
      {
        "name": "预制菜",
        "change_pct": -1.67
      },
      {
        "name": "低价股",
        "change_pct": -1.46
      },
      {
        "name": "水产养殖",
        "change_pct": -3.95
      },
      {
        "name": "海洋经济",
        "change_pct": -1.76
      }
    ]
  },
  {
    "code": "000656",
    "name": "金科股份",
    "hot_rank": 80,
    "hot_rank_chg": 80,
    "stock_cnt": 5826,
    "price": "1.02",
    "change": "9.68",
    "market_id": "33",
    "circulate_market_value": "9573070400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "股份回购",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.38
      },
      {
        "name": "房地产",
        "change_pct": -1.38
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "物业管理",
        "change_pct": -1.62
      },
      {
        "name": "低价股",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 81,
    "hot_rank_chg": -35,
    "stock_cnt": 5826,
    "price": "9.03",
    "change": "-0.33",
    "market_id": "17",
    "circulate_market_value": "2434598300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.43
      },
      {
        "name": "高股息",
        "change_pct": -0.5
      },
      {
        "name": "银行",
        "change_pct": -0.71
      },
      {
        "name": "白马股",
        "change_pct": -0.27
      },
      {
        "name": "破净股",
        "change_pct": -1.11
      },
      {
        "name": "大金融",
        "change_pct": -0.63
      }
    ]
  },
  {
    "code": "002403",
    "name": "爱仕达",
    "hot_rank": 83,
    "hot_rank_chg": 139,
    "stock_cnt": 5826,
    "price": "10.23",
    "change": "-9.95",
    "market_id": "33",
    "circulate_market_value": "3039961700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -1.79
      },
      {
        "name": "工业自动化",
        "change_pct": -1.69
      },
      {
        "name": "小家电",
        "change_pct": -2.2
      },
      {
        "name": "机器人",
        "change_pct": -1.8
      },
      {
        "name": "家电",
        "change_pct": -1.83
      },
      {
        "name": "智慧物流",
        "change_pct": -1.56
      },
      {
        "name": "机器视觉",
        "change_pct": -1.56
      },
      {
        "name": "智能制造",
        "change_pct": -1.64
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "减速器",
        "change_pct": -1.99
      },
      {
        "name": "C2M",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 85,
    "hot_rank_chg": 239,
    "stock_cnt": 5826,
    "price": "3.58",
    "change": "2.87",
    "market_id": "33",
    "circulate_market_value": "8438113200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -2.12
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "大数据",
        "change_pct": -2.53
      },
      {
        "name": "固废处理",
        "change_pct": -1.5
      },
      {
        "name": "智慧城市",
        "change_pct": -2.34
      },
      {
        "name": "有色 · 锌",
        "change_pct": -1.66
      },
      {
        "name": "有色金属",
        "change_pct": -1.46
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.56
      },
      {
        "name": "土壤修复",
        "change_pct": -1.9
      },
      {
        "name": "磷化铟",
        "change_pct": -1.03
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 88,
    "hot_rank_chg": 70,
    "stock_cnt": 5826,
    "price": "8.24",
    "change": "-6.58",
    "market_id": "17",
    "circulate_market_value": "3303267500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.94
      },
      {
        "name": "新零售",
        "change_pct": -2.22
      },
      {
        "name": "强势人气股",
        "change_pct": -3.52
      },
      {
        "name": "物业管理",
        "change_pct": -1.62
      },
      {
        "name": "国企改革",
        "change_pct": -1.23
      },
      {
        "name": "地摊经济",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 89,
    "hot_rank_chg": -6,
    "stock_cnt": 5826,
    "price": "10.11",
    "change": "-6.21",
    "market_id": "33",
    "circulate_market_value": "4985891100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.07
      },
      {
        "name": "彩票",
        "change_pct": -2.44
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "包装印刷",
        "change_pct": -1.96
      },
      {
        "name": "数字经济",
        "change_pct": -2.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.04
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.13
      },
      {
        "name": "ETC",
        "change_pct": -1.81
      },
      {
        "name": "词元概念/Token",
        "change_pct": -3.97
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.04
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.37
      },
      {
        "name": "英伟达概念",
        "change_pct": -2.05
      },
      {
        "name": "区块链",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 94,
    "hot_rank_chg": 827,
    "stock_cnt": 5826,
    "price": "5.47",
    "change": "-0.55",
    "market_id": "33",
    "circulate_market_value": "6382665000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -2.02
      },
      {
        "name": "国产软件",
        "change_pct": -2.43
      },
      {
        "name": "一带一路",
        "change_pct": -1.56
      },
      {
        "name": "量子通信",
        "change_pct": -2.02
      },
      {
        "name": "人工智能",
        "change_pct": -2.36
      },
      {
        "name": "网络安全",
        "change_pct": -2.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "物联网",
        "change_pct": -2.1
      },
      {
        "name": "大数据",
        "change_pct": -2.53
      },
      {
        "name": "破净股",
        "change_pct": -1.11
      },
      {
        "name": "数字经济",
        "change_pct": -2.72
      },
      {
        "name": "国产芯片",
        "change_pct": -0.17
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.62
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.87
      },
      {
        "name": "信创",
        "change_pct": -2.65
      },
      {
        "name": "华为昇腾",
        "change_pct": -2.55
      },
      {
        "name": "跨境支付",
        "change_pct": -2.17
      },
      {
        "name": "web3.0",
        "change_pct": -3.11
      },
      {
        "name": "数字人民币",
        "change_pct": -2.4
      },
      {
        "name": "智慧政务",
        "change_pct": -2.9
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -2.29
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -2.47
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.95
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.59
      },
      {
        "name": "华为产业链",
        "change_pct": -1.78
      },
      {
        "name": "回购",
        "change_pct": -0.82
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.37
      },
      {
        "name": "智能电网",
        "change_pct": -1.85
      },
      {
        "name": "低空经济",
        "change_pct": -1.67
      },
      {
        "name": "量子计算",
        "change_pct": -1.51
      },
      {
        "name": "财税改革",
        "change_pct": -2.39
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -3.08
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 95,
    "hot_rank_chg": -4,
    "stock_cnt": 5826,
    "price": "3.28",
    "change": "4.46",
    "market_id": "17",
    "circulate_market_value": "7256439300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -1.33
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.25
      },
      {
        "name": "光通信",
        "change_pct": -1.38
      },
      {
        "name": "林业",
        "change_pct": -1.9
      },
      {
        "name": "军民融合",
        "change_pct": -1.77
      },
      {
        "name": "军工",
        "change_pct": -1.6
      },
      {
        "name": "人造肉",
        "change_pct": -0.94
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "30.36", "change": "7.01", "market_id": "33", "circulate_market_value": "23127204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "17.48", "change": "3.92", "market_id": "17", "circulate_market_value": "19166727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5826, "price": "7.56", "change": "2.58", "market_id": "33", "circulate_market_value": "7617375200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "工业自动化", "change_pct": -1.69}, {"name": "机械", "change_pct": -0.93}, {"name": "智能制造", "change_pct": -1.64}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "信创", "change_pct": -2.65}, {"name": "AI算力芯片", "change_pct": -1.61}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "11.51", "change": "-7.25", "market_id": "33", "circulate_market_value": "6907343500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.07}, {"name": "边缘计算", "change_pct": -2.86}, {"name": "核电", "change_pct": -1.59}, {"name": "海工装备", "change_pct": -0.94}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "冷链", "change_pct": -1.14}, {"name": "地热", "change_pct": -2.07}, {"name": "储能", "change_pct": -1.49}, {"name": "碳中和", "change_pct": -1.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -3.66}, {"name": "汽车热管理", "change_pct": -1.42}, {"name": "热泵", "change_pct": -1.45}, {"name": "液冷服务器", "change_pct": -1.82}, {"name": "蜜雪冰城概念股", "change_pct": -1.64}, {"name": "海洋经济", "change_pct": -1.76}]}, {"code": "000158", "name": "常山北明", "hot_rank": 5, "hot_rank_chg": 24, "stock_cnt": 5826, "price": "13.08", "change": "5.23", "market_id": "33", "circulate_market_value": "20805619000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 6, "hot_rank_chg": 21, "stock_cnt": 5826, "price": "63.74", "change": "4.61", "market_id": "17", "circulate_market_value": "22992510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "9.28", "change": "4.04", "market_id": "33", "circulate_market_value": "4185527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -2.02}, {"name": "手游", "change_pct": -3.26}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "游戏", "change_pct": -3.6}, {"name": "物联网", "change_pct": -2.1}, {"name": "机器人", "change_pct": -1.8}, {"name": "无人机", "change_pct": -1.67}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "5G消息/RCS", "change_pct": -1.96}, {"name": "低空经济", "change_pct": -1.67}, {"name": "无人物流车", "change_pct": -1.95}]}, {"code": "002771", "name": "真视通", "hot_rank": 8, "hot_rank_chg": 46, "stock_cnt": 5826, "price": "14.38", "change": "10.02", "market_id": "33", "circulate_market_value": "2596918100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "液冷算力"}, {"code": "600715", "name": "文投控股", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "2.73", "change": "-9.90", "market_id": "17", "circulate_market_value": "7814276200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.26}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "游戏", "change_pct": -3.6}, {"name": "影视", "change_pct": -4.58}, {"name": "国企改革", "change_pct": -1.23}, {"name": "短剧/互动影游", "change_pct": -3.87}, {"name": "AI视频", "change_pct": -3.48}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 10, "hot_rank_chg": 20, "stock_cnt": 5826, "price": "5.87", "change": "3.35", "market_id": "17", "circulate_market_value": "27089807000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -1.56}, {"name": "国产软件", "change_pct": -2.43}, {"name": "锂电池", "change_pct": -1.36}, {"name": "人工智能", "change_pct": -2.36}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "养老产业", "change_pct": -1.75}, {"name": "大飞机", "change_pct": -1.3}, {"name": "军民融合", "change_pct": -1.77}, {"name": "物联网", "change_pct": -2.1}, {"name": "大数据", "change_pct": -2.53}, {"name": "智慧城市", "change_pct": -2.34}, {"name": "军工", "change_pct": -1.6}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "机器人", "change_pct": -1.8}, {"name": "黑色家电", "change_pct": -0.98}, {"name": "家电", "change_pct": -1.83}, {"name": "储能", "change_pct": -1.49}, {"name": "智能制造", "change_pct": -1.64}, {"name": "工业互联网", "change_pct": -1.84}, {"name": "数字经济", "change_pct": -2.72}, {"name": "百度概念股", "change_pct": -2.56}, {"name": "NFT", "change_pct": -2.8}, {"name": "跨境支付", "change_pct": -2.17}, {"name": "华为海思", "change_pct": -1.57}, {"name": "云游戏", "change_pct": -3.08}, {"name": "网红/MCN", "change_pct": -2.42}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "毫米波雷达", "change_pct": -1.09}, {"name": "服务器", "change_pct": -2.44}, {"name": "AI大模型/智能体", "change_pct": -2.37}, {"name": "星闪概念", "change_pct": -1.71}, {"name": "低空经济", "change_pct": -1.67}]}, {"code": "600156", "name": "华升股份", "hot_rank": 11, "hot_rank_chg": 79, "stock_cnt": 5826, "price": "8.90", "change": "10.01", "market_id": "17", "circulate_market_value": "3578785200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.77}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "纺织服装", "change_pct": -1.3}, {"name": "湖南国企改革", "change_pct": -2.0}, {"name": "外贸受益概念", "change_pct": -1.1}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "国企改革", "change_pct": -1.23}, {"name": "新冠病毒防治", "change_pct": -1.28}, {"name": "液冷服务器", "change_pct": -1.82}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 12, "hot_rank_chg": -9, "stock_cnt": 5826, "price": "399.76", "change": "0.87", "market_id": "33", "circulate_market_value": "443708420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 13, "hot_rank_chg": -6, "stock_cnt": 5826, "price": "4.57", "change": "-10.04", "market_id": "17", "circulate_market_value": "5965997500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "高速公路", "change_pct": -1.12}, {"name": "振兴东北", "change_pct": -2.36}, {"name": "黑龙江自贸区", "change_pct": -3.56}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "3.44", "change": "-7.78", "market_id": "33", "circulate_market_value": "5438541200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.75}, {"name": "体外诊断", "change_pct": -1.17}, {"name": "医疗器械", "change_pct": -1.26}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "基因测序", "change_pct": -1.58}, {"name": "预制菜", "change_pct": -1.67}, {"name": "水产养殖", "change_pct": -3.95}, {"name": "新冠病毒防治", "change_pct": -1.28}, {"name": "海洋经济", "change_pct": -1.76}]}, {"code": "000889", "name": "中嘉博创", "hot_rank": 15, "hot_rank_chg": 169, "stock_cnt": 5826, "price": "3.72", "change": "10.06", "market_id": "33", "circulate_market_value": "3235654000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力销售", "xgb_concepts": [{"name": "金融科技", "change_pct": -2.27}, {"name": "5G消息/RCS", "change_pct": -1.96}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "Kimi概念", "change_pct": -2.31}, {"name": "智谱AI", "change_pct": -3.55}, {"name": "区块链", "change_pct": -2.45}]}, {"code": "000815", "name": "美利云", "hot_rank": 16, "hot_rank_chg": 29, "stock_cnt": 5826, "price": "14.22", "change": "-0.63", "market_id": "33", "circulate_market_value": "9886640400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 17, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "14.70", "change": "-6.96", "market_id": "17", "circulate_market_value": "11572963200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 18, "hot_rank_chg": -4, "stock_cnt": 5826, "price": "4.62", "change": "-9.94", "market_id": "17", "circulate_market_value": "6167944700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "氢能源/燃料电池", "change_pct": -1.44}, {"name": "物联网", "change_pct": -2.1}, {"name": "LED", "change_pct": -1.22}, {"name": "卫星互联网", "change_pct": -1.95}]}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": -13, "stock_cnt": 5826, "price": "70.71", "change": "-1.52", "market_id": "33", "circulate_market_value": "98026809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 20, "hot_rank_chg": -15, "stock_cnt": 5826, "price": "40.58", "change": "-2.50", "market_id": "17", "circulate_market_value": "34353134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5826, "price": "9.14", "change": "-9.77", "market_id": "17", "circulate_market_value": "7431259600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "充电桩", "change_pct": -1.52}, {"name": "光伏", "change_pct": -1.66}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "家电", "change_pct": -1.83}, {"name": "储能", "change_pct": -1.49}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -1.45}, {"name": "华为鸿蒙", "change_pct": -2.29}, {"name": "厨卫家电", "change_pct": -2.62}, {"name": "华为产业链", "change_pct": -1.78}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 22, "hot_rank_chg": 14, "stock_cnt": 5826, "price": "9.09", "change": "1.23", "market_id": "17", "circulate_market_value": "16263267000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.24}, {"name": "纯碱", "change_pct": -2.12}, {"name": "食品", "change_pct": -0.66}, {"name": "土壤修复", "change_pct": -1.9}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "OpenClaw概念", "change_pct": -3.44}, {"name": "DeepSeek概念股", "change_pct": -3.08}]}, {"code": "002575", "name": "群兴玩具", "hot_rank": 23, "hot_rank_chg": 865, "stock_cnt": 5826, "price": "4.91", "change": "-0.20", "market_id": "33", "circulate_market_value": "2869038200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "腾讯概念股", "change_pct": -2.87}, {"name": "物业管理", "change_pct": -1.62}, {"name": "东数西算/算力", "change_pct": -3.04}]}, {"code": "603030", "name": "全筑股份", "hot_rank": 24, "hot_rank_chg": 145, "stock_cnt": 5826, "price": "2.34", "change": "9.86", "market_id": "17", "circulate_market_value": "3081624400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.77}, {"name": "长三角一体化", "change_pct": -0.47}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "装修装饰", "change_pct": -1.6}, {"name": "装配式建筑", "change_pct": -1.61}, {"name": "建筑节能", "change_pct": -1.63}, {"name": "新型城镇化", "change_pct": -2.09}, {"name": "低价股", "change_pct": -1.46}, {"name": "光刻机（胶）", "change_pct": 1.12}, {"name": "旧改", "change_pct": -1.54}]}, {"code": "300502", "name": "新易盛", "hot_rank": 25, "hot_rank_chg": -16, "stock_cnt": 5826, "price": "161.68", "change": "2.19", "market_id": "33", "circulate_market_value": "202863740000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5826, "price": "3.77", "change": "-10.02", "market_id": "33", "circulate_market_value": "3469100900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.26}, {"name": "ST摘帽", "change_pct": -2.12}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "人工智能", "change_pct": -2.36}, {"name": "VR&AR", "change_pct": -1.73}, {"name": "游戏", "change_pct": -3.6}, {"name": "动漫", "change_pct": -3.37}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "快手概念股", "change_pct": -3.82}, {"name": "NFT", "change_pct": -2.8}, {"name": "元宇宙", "change_pct": -3.01}, {"name": "虚拟数字人", "change_pct": -2.88}, {"name": "字节跳动概念股", "change_pct": -3.37}, {"name": "云游戏", "change_pct": -3.08}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "IP经济/谷子经济", "change_pct": -2.71}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 27, "hot_rank_chg": -3, "stock_cnt": 5826, "price": "16.32", "change": "7.23", "market_id": "33", "circulate_market_value": "7500864500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 28, "hot_rank_chg": 50, "stock_cnt": 5826, "price": "4.53", "change": "-3.82", "market_id": "17", "circulate_market_value": "4008051200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.22}, {"name": "优化生育（三孩）", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "信托", "change_pct": -0.27}, {"name": "民营医院", "change_pct": -1.78}, {"name": "汽车销售", "change_pct": -2.88}, {"name": "社区团购", "change_pct": -1.77}, {"name": "大金融", "change_pct": -0.63}, {"name": "餐饮", "change_pct": -1.75}, {"name": "首发经济", "change_pct": -1.52}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5826, "price": "23.51", "change": "-4.43", "market_id": "33", "circulate_market_value": "26944940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 30, "hot_rank_chg": 51, "stock_cnt": 5826, "price": "8.70", "change": "-8.32", "market_id": "33", "circulate_market_value": "4928361100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "石墨烯", "change_pct": -1.52}, {"name": "军民融合", "change_pct": -1.77}, {"name": "物联网", "change_pct": -2.1}, {"name": "LED", "change_pct": -1.22}, {"name": "军工", "change_pct": -1.6}, {"name": "智慧灯杆", "change_pct": -1.59}, {"name": "海洋经济", "change_pct": -1.76}]}, {"code": "002197", "name": "证通电子", "hot_rank": 31, "hot_rank_chg": 211, "stock_cnt": 5826, "price": "6.05", "change": "-0.98", "market_id": "33", "circulate_market_value": "3230700100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": -2.43}, {"name": "深圳本地股", "change_pct": -1.63}, {"name": "ST摘帽", "change_pct": -2.12}, {"name": "金融科技", "change_pct": -2.27}, {"name": "网络安全", "change_pct": -2.58}, {"name": "充电桩", "change_pct": -1.52}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "移动支付", "change_pct": -1.89}, {"name": "教育", "change_pct": -2.34}, {"name": "智慧城市", "change_pct": -2.34}, {"name": "粤港澳大湾区", "change_pct": -1.35}, {"name": "LED", "change_pct": -1.22}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "机器人", "change_pct": -1.8}, {"name": "数字经济", "change_pct": -2.72}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "阿里巴巴概念股", "change_pct": -2.62}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "信创", "change_pct": -2.65}, {"name": "NFT", "change_pct": -2.8}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "数字乡村", "change_pct": -2.46}, {"name": "教育信息化", "change_pct": -2.22}, {"name": "数字人民币", "change_pct": -2.4}, {"name": "智慧政务", "change_pct": -2.9}, {"name": "医疗信息化", "change_pct": -2.78}, {"name": "华为鸿蒙", "change_pct": -2.29}, {"name": "华为云·鲲鹏", "change_pct": -2.47}, {"name": "智慧灯杆", "change_pct": -1.59}, {"name": "华为产业链", "change_pct": -1.78}]}, {"code": "603278", "name": "大业股份", "hot_rank": 32, "hot_rank_chg": 115, "stock_cnt": 5826, "price": "11.02", "change": "-1.87", "market_id": "17", "circulate_market_value": "3766188500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "轮胎", "change_pct": -0.56}, {"name": "风电", "change_pct": -1.22}, {"name": "航天", "change_pct": -1.59}, {"name": "人形机器人", "change_pct": -1.76}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 33, "hot_rank_chg": -14, "stock_cnt": 5826, "price": "9.67", "change": "-9.20", "market_id": "33", "circulate_market_value": "6623006200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.79}, {"name": "核电", "change_pct": -1.59}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "充电桩", "change_pct": -1.52}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "储能", "change_pct": -1.49}, {"name": "阿里巴巴概念股", "change_pct": -2.62}, {"name": "中芯国际概念股", "change_pct": 1.01}, {"name": "智能电网", "change_pct": -1.85}, {"name": "核聚变", "change_pct": -1.34}]}, {"code": "002187", "name": "广百股份", "hot_rank": 34, "hot_rank_chg": 16, "stock_cnt": 5826, "price": "6.56", "change": "-10.01", "market_id": "33", "circulate_market_value": "4597868800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.22}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "粤港澳大湾区", "change_pct": -1.35}, {"name": "物业管理", "change_pct": -1.62}, {"name": "预制菜", "change_pct": -1.67}, {"name": "地摊经济", "change_pct": -2.15}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 35, "hot_rank_chg": 26, "stock_cnt": 5826, "price": "3.94", "change": "-0.76", "market_id": "33", "circulate_market_value": "3392980500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.73}, {"name": "一带一路", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "福建自贸/海西概念", "change_pct": -2.69}, {"name": "光伏", "change_pct": -1.66}, {"name": "有色金属", "change_pct": -1.46}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "新能源车零部件", "change_pct": -1.54}, {"name": "自贸区", "change_pct": -1.73}, {"name": "液冷服务器", "change_pct": -1.82}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 36, "hot_rank_chg": 50, "stock_cnt": 5826, "price": "7.38", "change": "-10.00", "market_id": "33", "circulate_market_value": "3495760500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.26}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "VR&AR", "change_pct": -1.73}, {"name": "游戏", "change_pct": -3.6}, {"name": "影视", "change_pct": -4.58}, {"name": "直播/短视频", "change_pct": -2.98}, {"name": "动漫", "change_pct": -3.37}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "传媒", "change_pct": -3.01}, {"name": "元宇宙", "change_pct": -3.01}, {"name": "短剧/互动影游", "change_pct": -3.87}, {"name": "IP经济/谷子经济", "change_pct": -2.71}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 37, "hot_rank_chg": 64, "stock_cnt": 5826, "price": "3.69", "change": "-10.00", "market_id": "17", "circulate_market_value": "4282401700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "纺织服装", "change_pct": -1.3}, {"name": "浙江国企改革", "change_pct": -1.76}, {"name": "影视", "change_pct": -4.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -1.23}, {"name": "短剧/互动影游", "change_pct": -3.87}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 38, "hot_rank_chg": -26, "stock_cnt": 5826, "price": "80.91", "change": "0.90", "market_id": "33", "circulate_market_value": "156365770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002959", "name": "小熊电器", "hot_rank": 39, "hot_rank_chg": -17, "stock_cnt": 5826, "price": "37.93", "change": "-8.65", "market_id": "33", "circulate_market_value": "5302401200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 40, "hot_rank_chg": -12, "stock_cnt": 5826, "price": "11.23", "change": "2.09", "market_id": "17", "circulate_market_value": "11734090600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.32}, {"name": "上海国企改革", "change_pct": -0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -3.01}, {"name": "国企改革", "change_pct": -1.23}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 41, "hot_rank_chg": -25, "stock_cnt": 5826, "price": "606.97", "change": "-0.22", "market_id": "17", "circulate_market_value": "18262343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5826, "price": "50.93", "change": "-5.26", "market_id": "33", "circulate_market_value": "11032863200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002843", "name": "泰嘉股份", "hot_rank": 43, "hot_rank_chg": 22, "stock_cnt": 5826, "price": "15.97", "change": "-7.90", "market_id": "33", "circulate_market_value": "3999388900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 44, "hot_rank_chg": -19, "stock_cnt": 5826, "price": "8.09", "change": "3.32", "market_id": "33", "circulate_market_value": "3892417200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.17}, {"name": "医疗器械", "change_pct": -1.26}, {"name": "锂电池", "change_pct": -1.36}, {"name": "基因测序", "change_pct": -1.58}, {"name": "PCB板", "change_pct": -0.42}, {"name": "医药", "change_pct": -1.26}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "化学原料药", "change_pct": -1.16}, {"name": "食品安全", "change_pct": -1.67}, {"name": "辅助生殖", "change_pct": -1.87}, {"name": "光刻机（胶）", "change_pct": 1.12}, {"name": "异丙醇", "change_pct": -0.11}, {"name": "新冠病毒防治", "change_pct": -1.28}, {"name": "磷酸铁锂", "change_pct": -1.29}]}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 45, "hot_rank_chg": 39, "stock_cnt": 5826, "price": "8.91", "change": "-4.30", "market_id": "33", "circulate_market_value": "4585506100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": -1.46}, {"name": "5G", "change_pct": -1.97}, {"name": "光通信", "change_pct": -1.38}, {"name": "教育", "change_pct": -2.34}, {"name": "毫米波通信", "change_pct": -2.28}, {"name": "6G", "change_pct": -1.67}, {"name": "卫星互联网", "change_pct": -1.95}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "毫米波雷达", "change_pct": -1.09}, {"name": "5.5G概念", "change_pct": -2.31}]}, {"code": "300324", "name": "旋极信息", "hot_rank": 46, "hot_rank_chg": -6, "stock_cnt": 5826, "price": "4.24", "change": "-4.50", "market_id": "33", "circulate_market_value": "7250329400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.79}, {"name": "数字孪生", "change_pct": -2.88}, {"name": "半导体", "change_pct": 0.47}, {"name": "国产软件", "change_pct": -2.43}, {"name": "人工智能", "change_pct": -2.36}, {"name": "网络安全", "change_pct": -2.58}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "大飞机", "change_pct": -1.3}, {"name": "北斗导航", "change_pct": -1.98}, {"name": "军民融合", "change_pct": -1.77}, {"name": "京津冀", "change_pct": -1.75}, {"name": "物联网", "change_pct": -2.1}, {"name": "大数据", "change_pct": -2.53}, {"name": "智慧城市", "change_pct": -2.34}, {"name": "电子发票", "change_pct": -2.39}, {"name": "军工", "change_pct": -1.6}, {"name": "无人机", "change_pct": -1.67}, {"name": "智能制造", "change_pct": -1.64}, {"name": "工业互联网", "change_pct": -1.84}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.72}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "信创", "change_pct": -2.65}, {"name": "BIPV概念", "change_pct": -1.65}, {"name": "航天", "change_pct": -1.59}, {"name": "数字人民币", "change_pct": -2.4}, {"name": "智慧政务", "change_pct": -2.9}, {"name": "医疗信息化", "change_pct": -2.78}, {"name": "云游戏", "change_pct": -3.08}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "物理AI", "change_pct": -2.1}, {"name": "时空大数据", "change_pct": -2.3}, {"name": "AI算力芯片", "change_pct": -1.61}, {"name": "军工信息化", "change_pct": -2.73}, {"name": "财税改革", "change_pct": -2.39}, {"name": "区块链", "change_pct": -2.45}]}, {"code": "000521", "name": "长虹美菱", "hot_rank": 47, "hot_rank_chg": -21, "stock_cnt": 5826, "price": "4.50", "change": "-4.46", "market_id": "33", "circulate_market_value": "3938799900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.26}, {"name": "一带一路", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "人工智能", "change_pct": -2.36}, {"name": "冷链", "change_pct": -1.14}, {"name": "小家电", "change_pct": -2.2}, {"name": "白色家电", "change_pct": -1.29}, {"name": "家电", "change_pct": -1.83}, {"name": "破净股", "change_pct": -1.11}, {"name": "智能制造", "change_pct": -1.64}, {"name": "工业互联网", "change_pct": -1.84}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -1.45}, {"name": "垃圾分类", "change_pct": -1.87}, {"name": "新冠病毒防治", "change_pct": -1.28}, {"name": "C2M", "change_pct": -2.08}, {"name": "生物安全", "change_pct": -0.81}, {"name": "出海龙头", "change_pct": 0.3}]}, {"code": "301391", "name": "卡莱特", "hot_rank": 48, "hot_rank_chg": 46, "stock_cnt": 5826, "price": "54.88", "change": "17.62", "market_id": "33", "circulate_market_value": "5094810600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600405", "name": "动力源", "hot_rank": 49, "hot_rank_chg": 268, "stock_cnt": 5826, "price": "4.48", "change": "-3.03", "market_id": "17", "circulate_market_value": "2745476600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.79}, {"name": "5G", "change_pct": -1.97}, {"name": "充电桩", "change_pct": -1.52}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "氢能源/燃料电池", "change_pct": -1.44}, {"name": "光伏", "change_pct": -1.66}, {"name": "新能源汽车", "change_pct": -1.48}, {"name": "储能", "change_pct": -1.49}, {"name": "宁德时代概念股", "change_pct": -1.36}, {"name": "阿里巴巴概念股", "change_pct": -2.62}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "新能源车零部件", "change_pct": -1.54}, {"name": "换电概念", "change_pct": -1.49}, {"name": "BIPV概念", "change_pct": -1.65}, {"name": "华为产业链", "change_pct": -1.78}]}, {"code": "603220", "name": "中贝通信", "hot_rank": 50, "hot_rank_chg": 49, "stock_cnt": 5826, "price": "15.54", "change": "-0.51", "market_id": "17", "circulate_market_value": "8335013300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 51, "hot_rank_chg": -19, "stock_cnt": 5826, "price": "23.35", "change": "-4.77", "market_id": "17", "circulate_market_value": "481051870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000831", "name": "中国稀土", "hot_rank": 52, "hot_rank_chg": -15, "stock_cnt": 5826, "price": "41.11", "change": "1.91", "market_id": "33", "circulate_market_value": "43626787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 53, "hot_rank_chg": 72, "stock_cnt": 5826, "price": "4.51", "change": "-8.71", "market_id": "17", "circulate_market_value": "2522531100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.26}, {"name": "ST摘帽", "change_pct": -2.12}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "游戏", "change_pct": -3.6}, {"name": "影视", "change_pct": -4.58}, {"name": "短剧/互动影游", "change_pct": -3.87}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 54, "hot_rank_chg": 9, "stock_cnt": 5826, "price": "14.44", "change": "-9.75", "market_id": "33", "circulate_market_value": "2561771500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605255", "name": "天普股份", "hot_rank": 55, "hot_rank_chg": 453, "stock_cnt": 5826, "price": "66.44", "change": "-10.00", "market_id": "17", "circulate_market_value": "8908275200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 56, "hot_rank_chg": 106, "stock_cnt": 5826, "price": "7.05", "change": "-7.96", "market_id": "33", "circulate_market_value": "2356525400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.68}, {"name": "饲料", "change_pct": -2.04}, {"name": "一带一路", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "保健品", "change_pct": -0.35}, {"name": "山东国企改革", "change_pct": -1.4}, {"name": "污水处理", "change_pct": -1.8}, {"name": "环保", "change_pct": -1.56}, {"name": "食品", "change_pct": -0.66}, {"name": "预制菜", "change_pct": -1.67}, {"name": "国企改革", "change_pct": -1.23}, {"name": "水产养殖", "change_pct": -3.95}, {"name": "广西概念", "change_pct": -2.0}]}, {"code": "000707", "name": "双环科技", "hot_rank": 57, "hot_rank_chg": 59, "stock_cnt": 5826, "price": "4.55", "change": "-9.90", "market_id": "33", "circulate_market_value": "2505701300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -3.52}, {"name": "纯碱", "change_pct": -2.12}, {"name": "烧碱", "change_pct": -1.02}, {"name": "钠电池", "change_pct": -1.4}, {"name": "国企改革", "change_pct": -1.23}, {"name": "湖北国企改革", "change_pct": -2.04}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 58, "hot_rank_chg": 95, "stock_cnt": 5826, "price": "25.19", "change": "10.00", "market_id": "17", "circulate_market_value": "3674677400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光刻胶"}, {"code": "300369", "name": "绿盟科技", "hot_rank": 59, "hot_rank_chg": 318, "stock_cnt": 5826, "price": "8.79", "change": "2.21", "market_id": "33", "circulate_market_value": "7200088400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.43}, {"name": "车联网/车路云", "change_pct": -2.02}, {"name": "泛在电力物联网", "change_pct": -1.79}, {"name": "国产软件", "change_pct": -2.43}, {"name": "人工智能", "change_pct": -2.36}, {"name": "网络安全", "change_pct": -2.58}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "智能制造", "change_pct": -1.64}, {"name": "工业互联网", "change_pct": -1.84}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": -2.58}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "信创", "change_pct": -2.65}, {"name": "数据要素", "change_pct": -2.84}, {"name": "华为云·鲲鹏", "change_pct": -2.47}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "AI大模型/智能体", "change_pct": -2.37}]}, {"code": "601138", "name": "工业富联", "hot_rank": 60, "hot_rank_chg": -39, "stock_cnt": 5826, "price": "37.48", "change": "-1.21", "market_id": "17", "circulate_market_value": "743756580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 61, "hot_rank_chg": -9, "stock_cnt": 5826, "price": "113.95", "change": "-0.57", "market_id": "33", "circulate_market_value": "16124699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 62, "hot_rank_chg": 133, "stock_cnt": 5826, "price": "3.12", "change": "-5.17", "market_id": "17", "circulate_market_value": "10197526900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.38}, {"name": "养老产业", "change_pct": -1.75}, {"name": "粤港澳大湾区", "change_pct": -1.35}, {"name": "民营医院", "change_pct": -1.78}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "地摊经济", "change_pct": -2.15}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 63, "hot_rank_chg": -48, "stock_cnt": 5826, "price": "37.75", "change": "2.28", "market_id": "17", "circulate_market_value": "169989720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 64, "hot_rank_chg": -26, "stock_cnt": 5826, "price": "217.50", "change": "-0.94", "market_id": "17", "circulate_market_value": "145881240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 65, "hot_rank_chg": 65, "stock_cnt": 5826, "price": "4.71", "change": "-4.46", "market_id": "33", "circulate_market_value": "3603812800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.27}, {"name": "优化生育（三孩）", "change_pct": -1.33}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "医药商业", "change_pct": -1.63}, {"name": "保健品", "change_pct": -0.35}, {"name": "民营医院", "change_pct": -1.78}, {"name": "医药", "change_pct": -1.26}, {"name": "食品", "change_pct": -0.66}, {"name": "辅助生殖", "change_pct": -1.87}, {"name": "口腔", "change_pct": -0.64}, {"name": "医美", "change_pct": -0.8}, {"name": "新冠病毒防治", "change_pct": -1.28}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 66, "hot_rank_chg": -11, "stock_cnt": 5826, "price": "13.32", "change": "-8.27", "market_id": "33", "circulate_market_value": "8792887600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002042", "name": "华孚时尚", "hot_rank": 67, "hot_rank_chg": 73, "stock_cnt": 5826, "price": "3.73", "change": "-5.81", "market_id": "33", "circulate_market_value": "6343541500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": -1.91}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "纺织服装", "change_pct": -1.3}, {"name": "棉花", "change_pct": -2.75}, {"name": "粤港澳大湾区", "change_pct": -1.35}, {"name": "大农业", "change_pct": -1.73}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "供销社", "change_pct": -2.21}, {"name": "职业教育", "change_pct": -2.43}, {"name": "C2M", "change_pct": -2.08}]}, {"code": "688347", "name": "华虹宏力", "hot_rank": 68, "hot_rank_chg": -4, "stock_cnt": 5826, "price": "204.64", "change": "10.63", "market_id": "17", "circulate_market_value": "83441960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 69, "hot_rank_chg": -13, "stock_cnt": 5826, "price": "54.76", "change": "3.40", "market_id": "17", "circulate_market_value": "97988342000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 70, "hot_rank_chg": -11, "stock_cnt": 5826, "price": "2.27", "change": "-8.47", "market_id": "17", "circulate_market_value": "7921819100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -3.07}, {"name": "车联网/车路云", "change_pct": -2.02}, {"name": "超高清视频", "change_pct": -1.56}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "人工智能", "change_pct": -2.36}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "影视", "change_pct": -4.58}, {"name": "智慧城市", "change_pct": -2.34}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "振兴东北", "change_pct": -2.36}, {"name": "传媒", "change_pct": -3.01}, {"name": "低价股", "change_pct": -1.46}, {"name": "国企改革", "change_pct": -1.23}, {"name": "在线教育", "change_pct": -2.12}, {"name": "医疗信息化", "change_pct": -2.78}, {"name": "AI大模型/智能体", "change_pct": -2.37}, {"name": "短剧/互动影游", "change_pct": -3.87}, {"name": "IP经济/谷子经济", "change_pct": -2.71}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 71, "hot_rank_chg": 0, "stock_cnt": 5826, "price": "121.40", "change": "5.47", "market_id": "17", "circulate_market_value": "242872100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 72, "hot_rank_chg": 41, "stock_cnt": 5826, "price": "5.20", "change": "-7.96", "market_id": "17", "circulate_market_value": "2382891700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -1.5}, {"name": "福建自贸/海西概念", "change_pct": -2.69}, {"name": "自贸区", "change_pct": -1.73}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 73, "hot_rank_chg": 1, "stock_cnt": 5826, "price": "102.45", "change": "-4.25", "market_id": "17", "circulate_market_value": "28234029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 74, "hot_rank_chg": -12, "stock_cnt": 5826, "price": "2.58", "change": "-6.86", "market_id": "17", "circulate_market_value": "3769365300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.27}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "冷链", "change_pct": -1.14}, {"name": "医药", "change_pct": -1.26}, {"name": "食品", "change_pct": -0.66}, {"name": "食品安全", "change_pct": -1.67}, {"name": "预制菜", "change_pct": -1.67}, {"name": "低价股", "change_pct": -1.46}, {"name": "水产养殖", "change_pct": -3.95}, {"name": "海洋经济", "change_pct": -1.76}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 75, "hot_rank_chg": -52, "stock_cnt": 5826, "price": "108.44", "change": "-0.90", "market_id": "33", "circulate_market_value": "118024800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 76, "hot_rank_chg": -27, "stock_cnt": 5826, "price": "17.08", "change": "-3.23", "market_id": "33", "circulate_market_value": "10161441400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 77, "hot_rank_chg": -35, "stock_cnt": 5826, "price": "59.74", "change": "-1.91", "market_id": "17", "circulate_market_value": "144077880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 78, "hot_rank_chg": -43, "stock_cnt": 5826, "price": "63.13", "change": "-5.24", "market_id": "33", "circulate_market_value": "63444745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 79, "hot_rank_chg": -35, "stock_cnt": 5826, "price": "68.47", "change": "-2.88", "market_id": "33", "circulate_market_value": "44711424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000656", "name": "金科股份", "hot_rank": 80, "hot_rank_chg": 80, "stock_cnt": 5826, "price": "1.02", "change": "9.68", "market_id": "33", "circulate_market_value": "9573070400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "股份回购", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.38}, {"name": "房地产", "change_pct": -1.38}, {"name": "ST摘帽", "change_pct": -2.12}, {"name": "物业管理", "change_pct": -1.62}, {"name": "低价股", "change_pct": -1.46}]}, {"code": "601398", "name": "工商银行", "hot_rank": 81, "hot_rank_chg": -35, "stock_cnt": 5826, "price": "9.03", "change": "-0.33", "market_id": "17", "circulate_market_value": "2434598300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.43}, {"name": "高股息", "change_pct": -0.5}, {"name": "银行", "change_pct": -0.71}, {"name": "白马股", "change_pct": -0.27}, {"name": "破净股", "change_pct": -1.11}, {"name": "大金融", "change_pct": -0.63}]}, {"code": "001309", "name": "德明利", "hot_rank": 82, "hot_rank_chg": -49, "stock_cnt": 5826, "price": "184.01", "change": "-1.86", "market_id": "33", "circulate_market_value": "42767252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002403", "name": "爱仕达", "hot_rank": 83, "hot_rank_chg": 139, "stock_cnt": 5826, "price": "10.23", "change": "-9.95", "market_id": "33", "circulate_market_value": "3039961700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -1.79}, {"name": "工业自动化", "change_pct": -1.69}, {"name": "小家电", "change_pct": -2.2}, {"name": "机器人", "change_pct": -1.8}, {"name": "家电", "change_pct": -1.83}, {"name": "智慧物流", "change_pct": -1.56}, {"name": "机器视觉", "change_pct": -1.56}, {"name": "智能制造", "change_pct": -1.64}, {"name": "独角兽", "change_pct": 0.85}, {"name": "减速器", "change_pct": -1.99}, {"name": "C2M", "change_pct": -2.08}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 84, "hot_rank_chg": -50, "stock_cnt": 5826, "price": "933.57", "change": "-1.63", "market_id": "17", "circulate_market_value": "587079240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000711", "name": "京蓝科技", "hot_rank": 85, "hot_rank_chg": 239, "stock_cnt": 5826, "price": "3.58", "change": "2.87", "market_id": "33", "circulate_market_value": "8438113200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -2.12}, {"name": "物联网", "change_pct": -2.1}, {"name": "大数据", "change_pct": -2.53}, {"name": "固废处理", "change_pct": -1.5}, {"name": "智慧城市", "change_pct": -2.34}, {"name": "有色 · 锌", "change_pct": -1.66}, {"name": "有色金属", "change_pct": -1.46}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.56}, {"name": "土壤修复", "change_pct": -1.9}, {"name": "磷化铟", "change_pct": -1.03}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 86, "hot_rank_chg": -35, "stock_cnt": 5826, "price": "37.97", "change": "-1.61", "market_id": "17", "circulate_market_value": "93164948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 88, "hot_rank_chg": 70, "stock_cnt": 5826, "price": "8.24", "change": "-6.58", "market_id": "17", "circulate_market_value": "3303267500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.94}, {"name": "新零售", "change_pct": -2.22}, {"name": "强势人气股", "change_pct": -3.52}, {"name": "物业管理", "change_pct": -1.62}, {"name": "国企改革", "change_pct": -1.23}, {"name": "地摊经济", "change_pct": -2.15}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 89, "hot_rank_chg": -6, "stock_cnt": 5826, "price": "10.11", "change": "-6.21", "market_id": "33", "circulate_market_value": "4985891100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.07}, {"name": "彩票", "change_pct": -2.44}, {"name": "人工智能", "change_pct": -2.36}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "包装印刷", "change_pct": -1.96}, {"name": "数字经济", "change_pct": -2.72}, {"name": "东数西算/算力", "change_pct": -3.04}, {"name": "AIGC概念", "change_pct": -3.13}, {"name": "ETC", "change_pct": -1.81}, {"name": "词元概念/Token", "change_pct": -3.97}, {"name": "ChatGPT", "change_pct": -3.04}, {"name": "AI大模型/智能体", "change_pct": -2.37}, {"name": "英伟达概念", "change_pct": -2.05}, {"name": "区块链", "change_pct": -2.45}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 90, "hot_rank_chg": -14, "stock_cnt": 5826, "price": "22.55", "change": "-10.02", "market_id": "33", "circulate_market_value": "17079711000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300857", "name": "协创数据", "hot_rank": 91, "hot_rank_chg": -52, "stock_cnt": 5826, "price": "129.99", "change": "-6.81", "market_id": "33", "circulate_market_value": "63031068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 92, "hot_rank_chg": 4, "stock_cnt": 5826, "price": "21.57", "change": "-5.23", "market_id": "33", "circulate_market_value": "10992726700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301052", "name": "果麦文化", "hot_rank": 93, "hot_rank_chg": -24, "stock_cnt": 5826, "price": "33.76", "change": "-8.78", "market_id": "33", "circulate_market_value": "2707616700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 94, "hot_rank_chg": 827, "stock_cnt": 5826, "price": "5.47", "change": "-0.55", "market_id": "33", "circulate_market_value": "6382665000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -2.02}, {"name": "国产软件", "change_pct": -2.43}, {"name": "一带一路", "change_pct": -1.56}, {"name": "量子通信", "change_pct": -2.02}, {"name": "人工智能", "change_pct": -2.36}, {"name": "网络安全", "change_pct": -2.58}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "物联网", "change_pct": -2.1}, {"name": "大数据", "change_pct": -2.53}, {"name": "破净股", "change_pct": -1.11}, {"name": "数字经济", "change_pct": -2.72}, {"name": "国产芯片", "change_pct": -0.17}, {"name": "阿里巴巴概念股", "change_pct": -2.62}, {"name": "腾讯概念股", "change_pct": -2.87}, {"name": "信创", "change_pct": -2.65}, {"name": "华为昇腾", "change_pct": -2.55}, {"name": "跨境支付", "change_pct": -2.17}, {"name": "web3.0", "change_pct": -3.11}, {"name": "数字人民币", "change_pct": -2.4}, {"name": "智慧政务", "change_pct": -2.9}, {"name": "华为鸿蒙", "change_pct": -2.29}, {"name": "华为云·鲲鹏", "change_pct": -2.47}, {"name": "卫星互联网", "change_pct": -1.95}, {"name": "智慧灯杆", "change_pct": -1.59}, {"name": "华为产业链", "change_pct": -1.78}, {"name": "回购", "change_pct": -0.82}, {"name": "AI大模型/智能体", "change_pct": -2.37}, {"name": "智能电网", "change_pct": -1.85}, {"name": "低空经济", "change_pct": -1.67}, {"name": "量子计算", "change_pct": -1.51}, {"name": "财税改革", "change_pct": -2.39}, {"name": "DeepSeek概念股", "change_pct": -3.08}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 95, "hot_rank_chg": -4, "stock_cnt": 5826, "price": "3.28", "change": "4.46", "market_id": "17", "circulate_market_value": "7256439300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.33}, {"name": "云计算数据中心", "change_pct": -2.25}, {"name": "光通信", "change_pct": -1.38}, {"name": "林业", "change_pct": -1.9}, {"name": "军民融合", "change_pct": -1.77}, {"name": "军工", "change_pct": -1.6}, {"name": "人造肉", "change_pct": -0.94}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 96, "hot_rank_chg": -14, "stock_cnt": 5826, "price": "50.85", "change": "-3.51", "market_id": "33", "circulate_market_value": "36878279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603258", "name": "电魂网络", "hot_rank": 97, "hot_rank_chg": 211, "stock_cnt": 5826, "price": "13.33", "change": "-9.44", "market_id": "17", "circulate_market_value": "3217080200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 98, "hot_rank_chg": -40, "stock_cnt": 5826, "price": "27.25", "change": "-3.37", "market_id": "33", "circulate_market_value": "27841324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 99, "hot_rank_chg": -33, "stock_cnt": 5826, "price": "14.81", "change": "4.15", "market_id": "33", "circulate_market_value": "49318306000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 100, "hot_rank_chg": 39, "stock_cnt": 5826, "price": "17.52", "change": "4.10", "market_id": "33", "circulate_market_value": "3332260200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};