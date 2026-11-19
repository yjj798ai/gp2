const UPDATE_TIME = "2026-11-19 21:08";
const THS_HOT = [
  {
    "name": "光刻胶",
    "rise": 0.03,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.26,
    "rate": 0,
    "tag": "",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "算力租赁",
    "rise": -3.92,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": -0.64,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续287天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "芯片概念",
    "rise": -1.92,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续44天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": -0.6,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "高股息精选",
    "rise": -0.68,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "高股息ETF",
    "code": "886072"
  },
  {
    "name": "创新药",
    "rise": -2.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续164天上榜",
    "rankChg": 1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.96,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续334天上榜",
    "rankChg": -1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "ST板块",
    "rise": -2.09,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光刻机",
    "rise": -1.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "人形机器人",
    "rise": -3.08,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "人工智能",
    "rise": -3.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "超级品牌",
    "rise": -0.0,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885761"
  },
  {
    "name": "机器人概念",
    "rise": -2.92,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": -3.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "商业航天",
    "rise": -2.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "AI应用",
    "rise": -3.69,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "短剧游戏",
    "rise": -5.07,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "东数西算(算力)",
    "rise": -3.38,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  }
];
const THS_EVENTS = [
  {
    "title": "Anthropic IPO定价83美元高于指导区间上限 今晚登陆纳斯达克",
    "desc": "",
    "heat": 340311,
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
    "heat": 28556,
    "direction": "网络安全",
    "themes": [
      "网络安全"
    ],
    "stocks": [
      {
        "name": "任子行",
        "code": "300311",
        "chg": 9.954751
      }
    ]
  },
  {
    "title": "美国民主党筹备数据中心电力改革方案 运营商10年内或需多付350亿美元",
    "desc": "",
    "heat": 10010,
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
    "title": "“浪已经杀过来了”，腾讯前三季度资本开支1661.53亿元",
    "desc": "",
    "heat": 10000,
    "direction": "腾讯算力",
    "themes": [
      "腾讯系算力",
      "腾讯概念"
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
    "heat": 850,
    "direction": "深圳APEC",
    "themes": [
      "APEC",
      "深圳"
    ],
    "stocks": [
      {
        "name": "卡莱特",
        "code": "301391",
        "chg": 19.974282
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "科创50",
    "change": "+1.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+0.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+0.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+0.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "出海龙头",
    "change": "+0.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧丙烷",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白马股",
    "change": "+0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "-0.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "-0.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "-0.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "-0.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "-0.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "-0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "-0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "-0.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "-0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钒",
    "change": "-0.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IGBT",
    "change": "-0.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "-0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "-0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 2,
    "hot_rank_chg": 4,
    "stock_cnt": 5797,
    "price": "11.17",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "6703303800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -3.16
      },
      {
        "name": "边缘计算",
        "change_pct": -4.18
      },
      {
        "name": "核电",
        "change_pct": -2.45
      },
      {
        "name": "海工装备",
        "change_pct": -1.49
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "冷链",
        "change_pct": -1.87
      },
      {
        "name": "地热",
        "change_pct": -2.85
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "碳中和",
        "change_pct": -1.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -4.62
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.68
      },
      {
        "name": "热泵",
        "change_pct": -2.15
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.93
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.63
      },
      {
        "name": "海洋经济",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 3,
    "hot_rank_chg": 1,
    "stock_cnt": 5797,
    "price": "7.67",
    "change": "4.07",
    "market_id": "33",
    "circulate_market_value": "7728210100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -2.18
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "工业自动化",
        "change_pct": -3.1
      },
      {
        "name": "机械",
        "change_pct": -1.73
      },
      {
        "name": "智能制造",
        "change_pct": -2.87
      },
      {
        "name": "国产芯片",
        "change_pct": -1.3
      },
      {
        "name": "信创",
        "change_pct": -3.64
      },
      {
        "name": "AI算力芯片",
        "change_pct": -2.39
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 6,
    "hot_rank_chg": 5,
    "stock_cnt": 5797,
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
        "change_pct": -4.39
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "游戏",
        "change_pct": -4.82
      },
      {
        "name": "影视",
        "change_pct": -5.74
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.3
      },
      {
        "name": "AI视频",
        "change_pct": -5.01
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 8,
    "hot_rank_chg": 23,
    "stock_cnt": 5797,
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
        "change_pct": -2.66
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "纺织服装",
        "change_pct": -2.39
      },
      {
        "name": "湖南国企改革",
        "change_pct": -2.99
      },
      {
        "name": "外贸受益概念",
        "change_pct": -1.99
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.0
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.19
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 9,
    "hot_rank_chg": -1,
    "stock_cnt": 5797,
    "price": "9.30",
    "change": "4.26",
    "market_id": "33",
    "circulate_market_value": "4194547500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.11
      },
      {
        "name": "手游",
        "change_pct": -4.39
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "游戏",
        "change_pct": -4.82
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "机器人",
        "change_pct": -3.2
      },
      {
        "name": "无人机",
        "change_pct": -2.87
      },
      {
        "name": "国产芯片",
        "change_pct": -1.3
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -3.34
      },
      {
        "name": "低空经济",
        "change_pct": -2.79
      },
      {
        "name": "无人物流车",
        "change_pct": -3.22
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 10,
    "hot_rank_chg": 0,
    "stock_cnt": 5797,
    "price": "3.41",
    "change": "-8.58",
    "market_id": "33",
    "circulate_market_value": "5391112000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -2.82
      },
      {
        "name": "体外诊断",
        "change_pct": -2.23
      },
      {
        "name": "医疗器械",
        "change_pct": -2.29
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "基因测序",
        "change_pct": -2.67
      },
      {
        "name": "预制菜",
        "change_pct": -2.46
      },
      {
        "name": "水产养殖",
        "change_pct": -4.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.19
      },
      {
        "name": "海洋经济",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "002579",
    "name": "中京电子",
    "hot_rank": 18,
    "hot_rank_chg": 23,
    "stock_cnt": 5797,
    "price": "12.17",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "7100443600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "高阶HDI",
    "xgb_concepts": [
      {
        "name": "定增破发",
        "change_pct": -2.18
      },
      {
        "name": "折叠屏",
        "change_pct": -2.34
      },
      {
        "name": "手机产业链",
        "change_pct": -2.71
      },
      {
        "name": "电子烟",
        "change_pct": -3.69
      },
      {
        "name": "半导体",
        "change_pct": -0.84
      },
      {
        "name": "5G",
        "change_pct": -2.96
      },
      {
        "name": "VR&AR",
        "change_pct": -3.18
      },
      {
        "name": "光通信",
        "change_pct": -2.1
      },
      {
        "name": "OLED",
        "change_pct": -1.12
      },
      {
        "name": "PCB板",
        "change_pct": -1.46
      },
      {
        "name": "智能音箱",
        "change_pct": -3.37
      },
      {
        "name": "WiFi",
        "change_pct": -3.25
      },
      {
        "name": "小米概念股",
        "change_pct": -2.45
      },
      {
        "name": "6G",
        "change_pct": -2.67
      },
      {
        "name": "MiniLED",
        "change_pct": -1.96
      },
      {
        "name": "AI PC",
        "change_pct": -3.0
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.45
      },
      {
        "name": "毫米波雷达",
        "change_pct": -2.25
      },
      {
        "name": "交换机",
        "change_pct": -3.71
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.87
      },
      {
        "name": "人形机器人",
        "change_pct": -3.32
      },
      {
        "name": "AI手机",
        "change_pct": -2.28
      },
      {
        "name": "AI医疗",
        "change_pct": -3.36
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 20,
    "hot_rank_chg": 83,
    "stock_cnt": 5797,
    "price": "3.83",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "9027366900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "7N高纯铟",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -2.99
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "大数据",
        "change_pct": -3.54
      },
      {
        "name": "固废处理",
        "change_pct": -2.28
      },
      {
        "name": "智慧城市",
        "change_pct": -3.45
      },
      {
        "name": "有色 · 锌",
        "change_pct": -1.41
      },
      {
        "name": "有色金属",
        "change_pct": -1.92
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -2.4
      },
      {
        "name": "土壤修复",
        "change_pct": -2.54
      },
      {
        "name": "磷化铟",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 21,
    "hot_rank_chg": 5,
    "stock_cnt": 5797,
    "price": "3.36",
    "change": "7.01",
    "market_id": "17",
    "circulate_market_value": "7433425600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -2.24
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "光通信",
        "change_pct": -2.1
      },
      {
        "name": "林业",
        "change_pct": -2.57
      },
      {
        "name": "军民融合",
        "change_pct": -2.93
      },
      {
        "name": "军工",
        "change_pct": -2.69
      },
      {
        "name": "人造肉",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "603030",
    "name": "全筑股份",
    "hot_rank": 24,
    "hot_rank_chg": 71,
    "stock_cnt": 5797,
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
        "change_pct": -2.66
      },
      {
        "name": "长三角一体化",
        "change_pct": -0.83
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "装修装饰",
        "change_pct": -2.56
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.3
      },
      {
        "name": "建筑节能",
        "change_pct": -2.58
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.89
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.13
      },
      {
        "name": "旧改",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 25,
    "hot_rank_chg": 66,
    "stock_cnt": 5797,
    "price": "6.30",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "4584922000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "环氧丙烷",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -1.87
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.3
      },
      {
        "name": "风电",
        "change_pct": -2.13
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.24
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.21
      },
      {
        "name": "建筑节能",
        "change_pct": -2.58
      },
      {
        "name": "旧改",
        "change_pct": -2.24
      }
    ]
  },
  {
    "code": "002077",
    "name": "大港股份",
    "hot_rank": 27,
    "hot_rank_chg": 62,
    "stock_cnt": 5797,
    "price": "12.11",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "7028020500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "集成电路测试",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -2.71
      },
      {
        "name": "半导体",
        "change_pct": -0.84
      },
      {
        "name": "股权转让",
        "change_pct": -2.7
      },
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "固废处理",
        "change_pct": -2.28
      },
      {
        "name": "江苏国企改革",
        "change_pct": -1.55
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "环保",
        "change_pct": -2.4
      },
      {
        "name": "国产芯片",
        "change_pct": -1.3
      },
      {
        "name": "汽车芯片",
        "change_pct": -1.2
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 28,
    "hot_rank_chg": -4,
    "stock_cnt": 5797,
    "price": "9.12",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "7414998700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "光伏",
        "change_pct": -2.55
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "家电",
        "change_pct": -2.68
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -2.15
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -3.47
      },
      {
        "name": "厨卫家电",
        "change_pct": -3.12
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      }
    ]
  },
  {
    "code": "603928",
    "name": "兴业股份",
    "hot_rank": 29,
    "hot_rank_chg": 71,
    "stock_cnt": 5797,
    "price": "12.38",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4217915500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光刻胶树脂",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "大飞机",
        "change_pct": -2.21
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "智能制造",
        "change_pct": -2.87
      },
      {
        "name": "3D打印",
        "change_pct": -2.45
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 32,
    "hot_rank_chg": 102,
    "stock_cnt": 5797,
    "price": "4.02",
    "change": "10.14",
    "market_id": "33",
    "circulate_market_value": "4568328000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "液冷",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -2.76
      },
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "石墨烯",
        "change_pct": -2.4
      },
      {
        "name": "新能源整车",
        "change_pct": -0.97
      },
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "汽车整车",
        "change_pct": -1.63
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "白色家电",
        "change_pct": -1.97
      },
      {
        "name": "家电",
        "change_pct": -2.68
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.68
      },
      {
        "name": "热泵",
        "change_pct": -2.15
      },
      {
        "name": "轮边电机",
        "change_pct": -3.16
      },
      {
        "name": "超级电容",
        "change_pct": -1.76
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 33,
    "hot_rank_chg": 2,
    "stock_cnt": 5797,
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
        "change_pct": -4.04
      },
      {
        "name": "高速公路",
        "change_pct": -1.57
      },
      {
        "name": "振兴东北",
        "change_pct": -3.19
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -3.26
      }
    ]
  },
  {
    "code": "000656",
    "name": "金科股份",
    "hot_rank": 35,
    "hot_rank_chg": 51,
    "stock_cnt": 5797,
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
        "change_pct": -2.12
      },
      {
        "name": "房地产",
        "change_pct": -1.97
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.99
      },
      {
        "name": "物业管理",
        "change_pct": -2.23
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 37,
    "hot_rank_chg": -22,
    "stock_cnt": 5797,
    "price": "5.76",
    "change": "1.41",
    "market_id": "17",
    "circulate_market_value": "26582162000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -2.87
      },
      {
        "name": "国产软件",
        "change_pct": -3.51
      },
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "人工智能",
        "change_pct": -3.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "养老产业",
        "change_pct": -2.65
      },
      {
        "name": "大飞机",
        "change_pct": -2.21
      },
      {
        "name": "军民融合",
        "change_pct": -2.93
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "大数据",
        "change_pct": -3.54
      },
      {
        "name": "智慧城市",
        "change_pct": -3.45
      },
      {
        "name": "军工",
        "change_pct": -2.69
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "机器人",
        "change_pct": -3.2
      },
      {
        "name": "黑色家电",
        "change_pct": -2.23
      },
      {
        "name": "家电",
        "change_pct": -2.68
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "智能制造",
        "change_pct": -2.87
      },
      {
        "name": "工业互联网",
        "change_pct": -2.95
      },
      {
        "name": "数字经济",
        "change_pct": -3.87
      },
      {
        "name": "百度概念股",
        "change_pct": -3.68
      },
      {
        "name": "NFT",
        "change_pct": -4.36
      },
      {
        "name": "跨境支付",
        "change_pct": -3.05
      },
      {
        "name": "华为海思",
        "change_pct": -2.75
      },
      {
        "name": "云游戏",
        "change_pct": -4.49
      },
      {
        "name": "网红/MCN",
        "change_pct": -3.69
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "毫米波雷达",
        "change_pct": -2.25
      },
      {
        "name": "服务器",
        "change_pct": -3.61
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.48
      },
      {
        "name": "星闪概念",
        "change_pct": -3.23
      },
      {
        "name": "低空经济",
        "change_pct": -2.79
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 40,
    "hot_rank_chg": 9,
    "stock_cnt": 5797,
    "price": "4.39",
    "change": "-6.79",
    "market_id": "17",
    "circulate_market_value": "3884182100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -3.29
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -2.27
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "信托",
        "change_pct": -0.48
      },
      {
        "name": "民营医院",
        "change_pct": -2.6
      },
      {
        "name": "汽车销售",
        "change_pct": -3.72
      },
      {
        "name": "社区团购",
        "change_pct": -2.81
      },
      {
        "name": "大金融",
        "change_pct": -0.71
      },
      {
        "name": "餐饮",
        "change_pct": -2.61
      },
      {
        "name": "首发经济",
        "change_pct": -2.8
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 41,
    "hot_rank_chg": -14,
    "stock_cnt": 5797,
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
        "change_pct": -4.04
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.29
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "LED",
        "change_pct": -2.36
      },
      {
        "name": "卫星互联网",
        "change_pct": -3.15
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 43,
    "hot_rank_chg": 64,
    "stock_cnt": 5797,
    "price": "5.09",
    "change": "-9.91",
    "market_id": "17",
    "circulate_market_value": "2332484400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -2.36
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.77
      },
      {
        "name": "自贸区",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 44,
    "hot_rank_chg": 0,
    "stock_cnt": 5797,
    "price": "9.10",
    "change": "0.44",
    "market_id": "17",
    "circulate_market_value": "2453471100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.17
      },
      {
        "name": "高股息",
        "change_pct": -0.54
      },
      {
        "name": "银行",
        "change_pct": -0.62
      },
      {
        "name": "白马股",
        "change_pct": 0.04
      },
      {
        "name": "破净股",
        "change_pct": -1.65
      },
      {
        "name": "大金融",
        "change_pct": -0.71
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 46,
    "hot_rank_chg": -4,
    "stock_cnt": 5797,
    "price": "8.22",
    "change": "4.98",
    "market_id": "33",
    "circulate_market_value": "3954965400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -2.23
      },
      {
        "name": "医疗器械",
        "change_pct": -2.29
      },
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "基因测序",
        "change_pct": -2.67
      },
      {
        "name": "PCB板",
        "change_pct": -1.46
      },
      {
        "name": "医药",
        "change_pct": -2.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "化学原料药",
        "change_pct": -2.11
      },
      {
        "name": "食品安全",
        "change_pct": -2.67
      },
      {
        "name": "辅助生殖",
        "change_pct": -2.83
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -0.13
      },
      {
        "name": "异丙醇",
        "change_pct": -0.68
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.19
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -2.13
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 52,
    "hot_rank_chg": 27,
    "stock_cnt": 5797,
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
        "change_pct": -3.29
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.03
      },
      {
        "name": "物业管理",
        "change_pct": -2.23
      },
      {
        "name": "预制菜",
        "change_pct": -2.46
      },
      {
        "name": "地摊经济",
        "change_pct": -3.0
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 54,
    "hot_rank_chg": -8,
    "stock_cnt": 5797,
    "price": "8.56",
    "change": "-9.80",
    "market_id": "33",
    "circulate_market_value": "4849054200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "石墨烯",
        "change_pct": -2.4
      },
      {
        "name": "军民融合",
        "change_pct": -2.93
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "LED",
        "change_pct": -2.36
      },
      {
        "name": "军工",
        "change_pct": -2.69
      },
      {
        "name": "智慧灯杆",
        "change_pct": -2.67
      },
      {
        "name": "海洋经济",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 55,
    "hot_rank_chg": -16,
    "stock_cnt": 5797,
    "price": "11.12",
    "change": "1.09",
    "market_id": "17",
    "circulate_market_value": "11619152900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.15
      },
      {
        "name": "上海国企改革",
        "change_pct": -1.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -4.31
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 57,
    "hot_rank_chg": -14,
    "stock_cnt": 5797,
    "price": "3.58",
    "change": "5.92",
    "market_id": "33",
    "circulate_market_value": "3113882000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": -3.44
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -3.34
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "Kimi概念",
        "change_pct": -3.81
      },
      {
        "name": "智谱AI",
        "change_pct": -4.85
      },
      {
        "name": "区块链",
        "change_pct": -3.6
      }
    ]
  },
  {
    "code": "601616",
    "name": "广电电气",
    "hot_rank": 59,
    "hot_rank_chg": 221,
    "stock_cnt": 5797,
    "price": "3.74",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "3192745700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "数据中心配电",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -2.79
      },
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "回购",
        "change_pct": -1.52
      },
      {
        "name": "智能电网",
        "change_pct": -2.89
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 67,
    "hot_rank_chg": -16,
    "stock_cnt": 5797,
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
        "change_pct": -4.39
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.99
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "人工智能",
        "change_pct": -3.57
      },
      {
        "name": "VR&AR",
        "change_pct": -3.18
      },
      {
        "name": "游戏",
        "change_pct": -4.82
      },
      {
        "name": "动漫",
        "change_pct": -4.82
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.06
      },
      {
        "name": "快手概念股",
        "change_pct": -5.3
      },
      {
        "name": "NFT",
        "change_pct": -4.36
      },
      {
        "name": "元宇宙",
        "change_pct": -4.46
      },
      {
        "name": "虚拟数字人",
        "change_pct": -4.49
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -4.77
      },
      {
        "name": "云游戏",
        "change_pct": -4.49
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.88
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 68,
    "hot_rank_chg": -30,
    "stock_cnt": 5797,
    "price": "9.01",
    "change": "0.33",
    "market_id": "17",
    "circulate_market_value": "16120136000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.82
      },
      {
        "name": "纯碱",
        "change_pct": -2.7
      },
      {
        "name": "食品",
        "change_pct": -1.38
      },
      {
        "name": "土壤修复",
        "change_pct": -2.54
      },
      {
        "name": "东数西算/算力",
        "change_pct": -4.0
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -4.76
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -4.11
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 73,
    "hot_rank_chg": 19,
    "stock_cnt": 5797,
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
        "change_pct": -4.39
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "VR&AR",
        "change_pct": -3.18
      },
      {
        "name": "游戏",
        "change_pct": -4.82
      },
      {
        "name": "影视",
        "change_pct": -5.74
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.42
      },
      {
        "name": "动漫",
        "change_pct": -4.82
      },
      {
        "name": "腾讯概念股",
        "change_pct": -4.06
      },
      {
        "name": "传媒",
        "change_pct": -4.31
      },
      {
        "name": "元宇宙",
        "change_pct": -4.46
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.3
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.88
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 74,
    "hot_rank_chg": -8,
    "stock_cnt": 5797,
    "price": "4.75",
    "change": "0.85",
    "market_id": "33",
    "circulate_market_value": "4157622100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -2.29
      },
      {
        "name": "一带一路",
        "change_pct": -2.18
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "人工智能",
        "change_pct": -3.57
      },
      {
        "name": "冷链",
        "change_pct": -1.87
      },
      {
        "name": "小家电",
        "change_pct": -2.67
      },
      {
        "name": "白色家电",
        "change_pct": -1.97
      },
      {
        "name": "家电",
        "change_pct": -2.68
      },
      {
        "name": "破净股",
        "change_pct": -1.65
      },
      {
        "name": "智能制造",
        "change_pct": -2.87
      },
      {
        "name": "工业互联网",
        "change_pct": -2.95
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -2.15
      },
      {
        "name": "垃圾分类",
        "change_pct": -2.54
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.19
      },
      {
        "name": "C2M",
        "change_pct": -3.17
      },
      {
        "name": "生物安全",
        "change_pct": -1.61
      },
      {
        "name": "出海龙头",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 76,
    "hot_rank_chg": -6,
    "stock_cnt": 5797,
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
        "change_pct": -4.04
      },
      {
        "name": "纺织服装",
        "change_pct": -2.39
      },
      {
        "name": "浙江国企改革",
        "change_pct": -2.64
      },
      {
        "name": "影视",
        "change_pct": -5.74
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.3
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 79,
    "hot_rank_chg": -15,
    "stock_cnt": 5797,
    "price": "9.59",
    "change": "-9.95",
    "market_id": "33",
    "circulate_market_value": "6568214000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -2.79
      },
      {
        "name": "核电",
        "change_pct": -2.45
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.8
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.17
      },
      {
        "name": "智能电网",
        "change_pct": -2.89
      },
      {
        "name": "核聚变",
        "change_pct": -2.12
      }
    ]
  },
  {
    "code": "002420",
    "name": "毅昌科技",
    "hot_rank": 80,
    "hot_rank_chg": 232,
    "stock_cnt": 5797,
    "price": "6.42",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "2592830600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人结构件",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -2.29
      },
      {
        "name": "锂电池",
        "change_pct": -2.3
      },
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "光伏",
        "change_pct": -2.55
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.22
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "机器人",
        "change_pct": -3.2
      },
      {
        "name": "白色家电",
        "change_pct": -1.97
      },
      {
        "name": "家电",
        "change_pct": -2.68
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.83
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.68
      },
      {
        "name": "华为汽车",
        "change_pct": -2.71
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "人形机器人",
        "change_pct": -3.32
      }
    ]
  },
  {
    "code": "600863",
    "name": "华能蒙电",
    "hot_rank": 82,
    "hot_rank_chg": 14,
    "stock_cnt": 5797,
    "price": "5.66",
    "change": "4.82",
    "market_id": "17",
    "circulate_market_value": "39978420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.86
      },
      {
        "name": "央企改革",
        "change_pct": -1.44
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.13
      },
      {
        "name": "火电",
        "change_pct": -1.02
      },
      {
        "name": "内蒙古概念",
        "change_pct": -1.54
      },
      {
        "name": "风电",
        "change_pct": -2.13
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      },
      {
        "name": "西部大开发",
        "change_pct": -2.47
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 83,
    "hot_rank_chg": 31,
    "stock_cnt": 5797,
    "price": "5.55",
    "change": "-7.50",
    "market_id": "33",
    "circulate_market_value": "10628763100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.77
      },
      {
        "name": "林业",
        "change_pct": -2.57
      },
      {
        "name": "碳中和",
        "change_pct": -1.65
      },
      {
        "name": "自贸区",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 84,
    "hot_rank_chg": -10,
    "stock_cnt": 5797,
    "price": "8.71",
    "change": "5.07",
    "market_id": "33",
    "circulate_market_value": "8129231200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -2.56
      },
      {
        "name": "新疆国企改革",
        "change_pct": -2.18
      },
      {
        "name": "新疆概念",
        "change_pct": -2.65
      },
      {
        "name": "光伏",
        "change_pct": -2.55
      },
      {
        "name": "风电",
        "change_pct": -2.13
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "储能",
        "change_pct": -2.46
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 86,
    "hot_rank_chg": 24,
    "stock_cnt": 5797,
    "price": "2.23",
    "change": "-10.08",
    "market_id": "17",
    "circulate_market_value": "7782227600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -4.29
      },
      {
        "name": "车联网/车路云",
        "change_pct": -3.11
      },
      {
        "name": "超高清视频",
        "change_pct": -2.87
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "人工智能",
        "change_pct": -3.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.19
      },
      {
        "name": "影视",
        "change_pct": -5.74
      },
      {
        "name": "智慧城市",
        "change_pct": -3.45
      },
      {
        "name": "国产芯片",
        "change_pct": -1.3
      },
      {
        "name": "振兴东北",
        "change_pct": -3.19
      },
      {
        "name": "传媒",
        "change_pct": -4.31
      },
      {
        "name": "低价股",
        "change_pct": -2.26
      },
      {
        "name": "国企改革",
        "change_pct": -1.87
      },
      {
        "name": "在线教育",
        "change_pct": -3.4
      },
      {
        "name": "医疗信息化",
        "change_pct": -3.96
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.48
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.3
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.88
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 95,
    "hot_rank_chg": -17,
    "stock_cnt": 5797,
    "price": "3.92",
    "change": "-1.26",
    "market_id": "33",
    "circulate_market_value": "3375757200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.37
      },
      {
        "name": "一带一路",
        "change_pct": -2.18
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.77
      },
      {
        "name": "光伏",
        "change_pct": -2.55
      },
      {
        "name": "有色金属",
        "change_pct": -1.92
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.54
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.83
      },
      {
        "name": "自贸区",
        "change_pct": -2.52
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 98,
    "hot_rank_chg": 32,
    "stock_cnt": 5797,
    "price": "4.45",
    "change": "-9.92",
    "market_id": "17",
    "circulate_market_value": "2488971900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -4.39
      },
      {
        "name": "ST摘帽",
        "change_pct": -2.99
      },
      {
        "name": "强势人气股",
        "change_pct": -4.04
      },
      {
        "name": "游戏",
        "change_pct": -4.82
      },
      {
        "name": "影视",
        "change_pct": -5.74
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -5.3
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 100,
    "hot_rank_chg": 5,
    "stock_cnt": 5797,
    "price": "4.33",
    "change": "0.23",
    "market_id": "33",
    "circulate_market_value": "152313380000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.34
      },
      {
        "name": "手机产业链",
        "change_pct": -2.71
      },
      {
        "name": "超高清视频",
        "change_pct": -2.87
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.91
      },
      {
        "name": "电竞",
        "change_pct": -3.88
      },
      {
        "name": "半导体",
        "change_pct": -0.84
      },
      {
        "name": "人工智能",
        "change_pct": -3.57
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.04
      },
      {
        "name": "VR&AR",
        "change_pct": -3.18
      },
      {
        "name": "OLED",
        "change_pct": -1.12
      },
      {
        "name": "京津冀",
        "change_pct": -2.47
      },
      {
        "name": "物联网",
        "change_pct": -3.28
      },
      {
        "name": "指纹识别",
        "change_pct": -2.6
      },
      {
        "name": "汽车零部件",
        "change_pct": -3.22
      },
      {
        "name": "白马股",
        "change_pct": 0.04
      },
      {
        "name": "智能制造",
        "change_pct": -2.87
      },
      {
        "name": "小米概念股",
        "change_pct": -2.45
      },
      {
        "name": "国产芯片",
        "change_pct": -1.3
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -1.68
      },
      {
        "name": "全息概念",
        "change_pct": -3.58
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.57
      },
      {
        "name": "MicroLED",
        "change_pct": -1.28
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.73
      },
      {
        "name": "智能手表",
        "change_pct": -3.45
      },
      {
        "name": "MiniLED",
        "change_pct": -1.96
      },
      {
        "name": "传感器",
        "change_pct": -2.48
      },
      {
        "name": "大硅片",
        "change_pct": 0.74
      },
      {
        "name": "AI PC",
        "change_pct": -3.0
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "回购",
        "change_pct": -1.52
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.45
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.87
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.49
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "31.21", "change": "10.01", "market_id": "33", "circulate_market_value": "23774705000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "厨房小家电"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 2, "hot_rank_chg": 4, "stock_cnt": 5797, "price": "11.17", "change": "-9.99", "market_id": "33", "circulate_market_value": "6703303800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -3.16}, {"name": "边缘计算", "change_pct": -4.18}, {"name": "核电", "change_pct": -2.45}, {"name": "海工装备", "change_pct": -1.49}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "冷链", "change_pct": -1.87}, {"name": "地热", "change_pct": -2.85}, {"name": "储能", "change_pct": -2.46}, {"name": "碳中和", "change_pct": -1.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -4.62}, {"name": "汽车热管理", "change_pct": -2.68}, {"name": "热泵", "change_pct": -2.15}, {"name": "液冷服务器", "change_pct": -2.93}, {"name": "蜜雪冰城概念股", "change_pct": -2.63}, {"name": "海洋经济", "change_pct": -2.65}]}, {"code": "002685", "name": "华东重机", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5797, "price": "7.67", "change": "4.07", "market_id": "33", "circulate_market_value": "7728210100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -2.18}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "工业自动化", "change_pct": -3.1}, {"name": "机械", "change_pct": -1.73}, {"name": "智能制造", "change_pct": -2.87}, {"name": "国产芯片", "change_pct": -1.3}, {"name": "信创", "change_pct": -3.64}, {"name": "AI算力芯片", "change_pct": -2.39}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5797, "price": "16.74", "change": "9.99", "market_id": "33", "circulate_market_value": "7693901500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人轴承"}, {"code": "600410", "name": "华胜天成", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "16.70", "change": "-0.71", "market_id": "17", "circulate_market_value": "18311461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 6, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "2.73", "change": "-9.90", "market_id": "17", "circulate_market_value": "7814276200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.39}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "游戏", "change_pct": -4.82}, {"name": "影视", "change_pct": -5.74}, {"name": "低价股", "change_pct": -2.26}, {"name": "国企改革", "change_pct": -1.87}, {"name": "短剧/互动影游", "change_pct": -5.3}, {"name": "AI视频", "change_pct": -5.01}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "408.40", "change": "3.05", "market_id": "33", "circulate_market_value": "453298270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600156", "name": "华升股份", "hot_rank": 8, "hot_rank_chg": 23, "stock_cnt": 5797, "price": "8.90", "change": "10.01", "market_id": "17", "circulate_market_value": "3578785200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.66}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "纺织服装", "change_pct": -2.39}, {"name": "湖南国企改革", "change_pct": -2.99}, {"name": "外贸受益概念", "change_pct": -1.99}, {"name": "东数西算/算力", "change_pct": -4.0}, {"name": "国企改革", "change_pct": -1.87}, {"name": "新冠病毒防治", "change_pct": -2.19}, {"name": "液冷服务器", "change_pct": -2.93}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "9.30", "change": "4.26", "market_id": "33", "circulate_market_value": "4194547500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.11}, {"name": "手游", "change_pct": -4.39}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "游戏", "change_pct": -4.82}, {"name": "物联网", "change_pct": -3.28}, {"name": "机器人", "change_pct": -3.2}, {"name": "无人机", "change_pct": -2.87}, {"name": "国产芯片", "change_pct": -1.3}, {"name": "5G消息/RCS", "change_pct": -3.34}, {"name": "低空经济", "change_pct": -2.79}, {"name": "无人物流车", "change_pct": -3.22}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "3.41", "change": "-8.58", "market_id": "33", "circulate_market_value": "5391112000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -2.82}, {"name": "体外诊断", "change_pct": -2.23}, {"name": "医疗器械", "change_pct": -2.29}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "基因测序", "change_pct": -2.67}, {"name": "预制菜", "change_pct": -2.46}, {"name": "水产养殖", "change_pct": -4.15}, {"name": "新冠病毒防治", "change_pct": -2.19}, {"name": "海洋经济", "change_pct": -2.65}]}, {"code": "002771", "name": "真视通", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5797, "price": "14.38", "change": "10.02", "market_id": "33", "circulate_market_value": "2596918100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "液冷算力"}, {"code": "603324", "name": "盛剑科技", "hot_rank": 12, "hot_rank_chg": 44, "stock_cnt": 5797, "price": "25.19", "change": "10.00", "market_id": "17", "circulate_market_value": "3674677400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光刻胶"}, {"code": "300502", "name": "新易盛", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "167.06", "change": "5.59", "market_id": "33", "circulate_market_value": "209614150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 14, "hot_rank_chg": 14, "stock_cnt": 5797, "price": "15.07", "change": "10.00", "market_id": "17", "circulate_market_value": "11892864200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光刻机冷却"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5797, "price": "37.50", "change": "1.60", "market_id": "17", "circulate_market_value": "168863960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000158", "name": "常山北明", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "13.03", "change": "4.83", "market_id": "33", "circulate_market_value": "20726087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 17, "hot_rank_chg": -5, "stock_cnt": 5797, "price": "71.70", "change": "-0.14", "market_id": "33", "circulate_market_value": "99399268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 18, "hot_rank_chg": 23, "stock_cnt": 5797, "price": "12.17", "change": "10.04", "market_id": "33", "circulate_market_value": "7100443600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高阶HDI", "xgb_concepts": [{"name": "定增破发", "change_pct": -2.18}, {"name": "折叠屏", "change_pct": -2.34}, {"name": "手机产业链", "change_pct": -2.71}, {"name": "电子烟", "change_pct": -3.69}, {"name": "半导体", "change_pct": -0.84}, {"name": "5G", "change_pct": -2.96}, {"name": "VR&AR", "change_pct": -3.18}, {"name": "光通信", "change_pct": -2.1}, {"name": "OLED", "change_pct": -1.12}, {"name": "PCB板", "change_pct": -1.46}, {"name": "智能音箱", "change_pct": -3.37}, {"name": "WiFi", "change_pct": -3.25}, {"name": "小米概念股", "change_pct": -2.45}, {"name": "6G", "change_pct": -2.67}, {"name": "MiniLED", "change_pct": -1.96}, {"name": "AI PC", "change_pct": -3.0}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "光电共封装CPO", "change_pct": -1.45}, {"name": "毫米波雷达", "change_pct": -2.25}, {"name": "交换机", "change_pct": -3.71}, {"name": "智能眼镜/MR头显", "change_pct": -2.87}, {"name": "人形机器人", "change_pct": -3.32}, {"name": "AI手机", "change_pct": -2.28}, {"name": "AI医疗", "change_pct": -3.36}]}, {"code": "603078", "name": "江化微", "hot_rank": 19, "hot_rank_chg": 31, "stock_cnt": 5797, "price": "26.86", "change": "9.99", "market_id": "17", "circulate_market_value": "10358216500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "湿电子化学品"}, {"code": "000711", "name": "京蓝科技", "hot_rank": 20, "hot_rank_chg": 83, "stock_cnt": 5797, "price": "3.83", "change": "10.06", "market_id": "33", "circulate_market_value": "9027366900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "7N高纯铟", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -2.99}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "物联网", "change_pct": -3.28}, {"name": "大数据", "change_pct": -3.54}, {"name": "固废处理", "change_pct": -2.28}, {"name": "智慧城市", "change_pct": -3.45}, {"name": "有色 · 锌", "change_pct": -1.41}, {"name": "有色金属", "change_pct": -1.92}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -2.4}, {"name": "土壤修复", "change_pct": -2.54}, {"name": "磷化铟", "change_pct": -0.67}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 21, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "3.36", "change": "7.01", "market_id": "17", "circulate_market_value": "7433425600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -2.24}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "光通信", "change_pct": -2.1}, {"name": "林业", "change_pct": -2.57}, {"name": "军民融合", "change_pct": -2.93}, {"name": "军工", "change_pct": -2.69}, {"name": "人造肉", "change_pct": -1.61}]}, {"code": "600584", "name": "长电科技", "hot_rank": 22, "hot_rank_chg": -5, "stock_cnt": 5797, "price": "55.47", "change": "4.74", "market_id": "17", "circulate_market_value": "99258826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 23, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "596.00", "change": "-2.02", "market_id": "17", "circulate_market_value": "17932281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603030", "name": "全筑股份", "hot_rank": 24, "hot_rank_chg": 71, "stock_cnt": 5797, "price": "2.34", "change": "9.86", "market_id": "17", "circulate_market_value": "3081624400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "边缘AI算力", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.66}, {"name": "长三角一体化", "change_pct": -0.83}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "装修装饰", "change_pct": -2.56}, {"name": "装配式建筑", "change_pct": -2.3}, {"name": "建筑节能", "change_pct": -2.58}, {"name": "新型城镇化", "change_pct": -2.89}, {"name": "低价股", "change_pct": -2.26}, {"name": "光刻机（胶）", "change_pct": -0.13}, {"name": "旧改", "change_pct": -2.24}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 25, "hot_rank_chg": 66, "stock_cnt": 5797, "price": "6.30", "change": "9.95", "market_id": "33", "circulate_market_value": "4584922000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "环氧丙烷", "xgb_concepts": [{"name": "冷链", "change_pct": -1.87}, {"name": "装配式建筑", "change_pct": -2.3}, {"name": "风电", "change_pct": -2.13}, {"name": "环氧丙烷", "change_pct": 0.24}, {"name": "乡村振兴", "change_pct": -2.21}, {"name": "建筑节能", "change_pct": -2.58}, {"name": "旧改", "change_pct": -2.24}]}, {"code": "002185", "name": "华天科技", "hot_rank": 26, "hot_rank_chg": -5, "stock_cnt": 5797, "price": "14.73", "change": "3.59", "market_id": "33", "circulate_market_value": "49051901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002077", "name": "大港股份", "hot_rank": 27, "hot_rank_chg": 62, "stock_cnt": 5797, "price": "12.11", "change": "9.99", "market_id": "33", "circulate_market_value": "7028020500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "集成电路测试", "xgb_concepts": [{"name": "手机产业链", "change_pct": -2.71}, {"name": "半导体", "change_pct": -0.84}, {"name": "股权转让", "change_pct": -2.7}, {"name": "锂电池", "change_pct": -2.3}, {"name": "固废处理", "change_pct": -2.28}, {"name": "江苏国企改革", "change_pct": -1.55}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "环保", "change_pct": -2.4}, {"name": "国产芯片", "change_pct": -1.3}, {"name": "汽车芯片", "change_pct": -1.2}, {"name": "国企改革", "change_pct": -1.87}]}, {"code": "603366", "name": "日出东方", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "9.12", "change": "-9.97", "market_id": "17", "circulate_market_value": "7414998700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.04}, {"name": "充电桩", "change_pct": -2.56}, {"name": "光伏", "change_pct": -2.55}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "家电", "change_pct": -2.68}, {"name": "储能", "change_pct": -2.46}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -2.15}, {"name": "华为鸿蒙", "change_pct": -3.47}, {"name": "厨卫家电", "change_pct": -3.12}, {"name": "华为产业链", "change_pct": -2.92}]}, {"code": "603928", "name": "兴业股份", "hot_rank": 29, "hot_rank_chg": 71, "stock_cnt": 5797, "price": "12.38", "change": "10.04", "market_id": "17", "circulate_market_value": "4217915500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶树脂", "xgb_concepts": [{"name": "锂电池", "change_pct": -2.3}, {"name": "大飞机", "change_pct": -2.21}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "智能制造", "change_pct": -2.87}, {"name": "3D打印", "change_pct": -2.45}, {"name": "光刻机（胶）", "change_pct": -0.13}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "23.88", "change": "-2.61", "market_id": "17", "circulate_market_value": "491970820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301348", "name": "蓝箭电子", "hot_rank": 31, "hot_rank_chg": 31, "stock_cnt": 5797, "price": "21.66", "change": "20.00", "market_id": "33", "circulate_market_value": "4190746100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体封测"}, {"code": "002418", "name": "康盛股份", "hot_rank": 32, "hot_rank_chg": 102, "stock_cnt": 5797, "price": "4.02", "change": "10.14", "market_id": "33", "circulate_market_value": "4568328000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -2.76}, {"name": "锂电池", "change_pct": -2.3}, {"name": "石墨烯", "change_pct": -2.4}, {"name": "新能源整车", "change_pct": -0.97}, {"name": "充电桩", "change_pct": -2.56}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "汽车整车", "change_pct": -1.63}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "白色家电", "change_pct": -1.97}, {"name": "家电", "change_pct": -2.68}, {"name": "汽车热管理", "change_pct": -2.68}, {"name": "热泵", "change_pct": -2.15}, {"name": "轮边电机", "change_pct": -3.16}, {"name": "超级电容", "change_pct": -1.76}, {"name": "液冷服务器", "change_pct": -2.93}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 33, "hot_rank_chg": 2, "stock_cnt": 5797, "price": "4.57", "change": "-10.04", "market_id": "17", "circulate_market_value": "5965997500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.04}, {"name": "高速公路", "change_pct": -1.57}, {"name": "振兴东北", "change_pct": -3.19}, {"name": "黑龙江自贸区", "change_pct": -3.26}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 34, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "122.25", "change": "6.21", "market_id": "17", "circulate_market_value": "244572610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000656", "name": "金科股份", "hot_rank": 35, "hot_rank_chg": 51, "stock_cnt": 5797, "price": "1.02", "change": "9.68", "market_id": "33", "circulate_market_value": "9573070400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "股份回购", "xgb_concepts": [{"name": "高管增持", "change_pct": -2.12}, {"name": "房地产", "change_pct": -1.97}, {"name": "ST摘帽", "change_pct": -2.99}, {"name": "物业管理", "change_pct": -2.23}, {"name": "低价股", "change_pct": -2.26}]}, {"code": "603629", "name": "利通电子", "hot_rank": 36, "hot_rank_chg": -22, "stock_cnt": 5797, "price": "63.42", "change": "4.09", "market_id": "17", "circulate_market_value": "22877078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 37, "hot_rank_chg": -22, "stock_cnt": 5797, "price": "5.76", "change": "1.41", "market_id": "17", "circulate_market_value": "26582162000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -2.87}, {"name": "国产软件", "change_pct": -3.51}, {"name": "锂电池", "change_pct": -2.3}, {"name": "人工智能", "change_pct": -3.57}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "养老产业", "change_pct": -2.65}, {"name": "大飞机", "change_pct": -2.21}, {"name": "军民融合", "change_pct": -2.93}, {"name": "物联网", "change_pct": -3.28}, {"name": "大数据", "change_pct": -3.54}, {"name": "智慧城市", "change_pct": -3.45}, {"name": "军工", "change_pct": -2.69}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "机器人", "change_pct": -3.2}, {"name": "黑色家电", "change_pct": -2.23}, {"name": "家电", "change_pct": -2.68}, {"name": "储能", "change_pct": -2.46}, {"name": "智能制造", "change_pct": -2.87}, {"name": "工业互联网", "change_pct": -2.95}, {"name": "数字经济", "change_pct": -3.87}, {"name": "百度概念股", "change_pct": -3.68}, {"name": "NFT", "change_pct": -4.36}, {"name": "跨境支付", "change_pct": -3.05}, {"name": "华为海思", "change_pct": -2.75}, {"name": "云游戏", "change_pct": -4.49}, {"name": "网红/MCN", "change_pct": -3.69}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "毫米波雷达", "change_pct": -2.25}, {"name": "服务器", "change_pct": -3.61}, {"name": "AI大模型/智能体", "change_pct": -3.48}, {"name": "星闪概念", "change_pct": -3.23}, {"name": "低空经济", "change_pct": -2.79}]}, {"code": "600206", "name": "有研新材", "hot_rank": 38, "hot_rank_chg": -19, "stock_cnt": 5797, "price": "39.76", "change": "-4.47", "market_id": "17", "circulate_market_value": "33658960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603931", "name": "格林达", "hot_rank": 39, "hot_rank_chg": 98, "stock_cnt": 5797, "price": "29.15", "change": "10.00", "market_id": "17", "circulate_market_value": "5817126800.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "湿电子化学品"}, {"code": "600327", "name": "大东方", "hot_rank": 40, "hot_rank_chg": 9, "stock_cnt": 5797, "price": "4.39", "change": "-6.79", "market_id": "17", "circulate_market_value": "3884182100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -3.29}, {"name": "优化生育（三孩）", "change_pct": -2.27}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "信托", "change_pct": -0.48}, {"name": "民营医院", "change_pct": -2.6}, {"name": "汽车销售", "change_pct": -3.72}, {"name": "社区团购", "change_pct": -2.81}, {"name": "大金融", "change_pct": -0.71}, {"name": "餐饮", "change_pct": -2.61}, {"name": "首发经济", "change_pct": -2.8}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 41, "hot_rank_chg": -14, "stock_cnt": 5797, "price": "4.62", "change": "-9.94", "market_id": "17", "circulate_market_value": "6167944700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.04}, {"name": "氢能源/燃料电池", "change_pct": -2.29}, {"name": "物联网", "change_pct": -3.28}, {"name": "LED", "change_pct": -2.36}, {"name": "卫星互联网", "change_pct": -3.15}]}, {"code": "688041", "name": "海光信息", "hot_rank": 42, "hot_rank_chg": -22, "stock_cnt": 5797, "price": "180.00", "change": "-4.81", "market_id": "17", "circulate_market_value": "418287230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 43, "hot_rank_chg": 64, "stock_cnt": 5797, "price": "5.09", "change": "-9.91", "market_id": "17", "circulate_market_value": "2332484400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -2.36}, {"name": "福建自贸/海西概念", "change_pct": -3.77}, {"name": "自贸区", "change_pct": -2.52}]}, {"code": "601398", "name": "工商银行", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "9.10", "change": "0.44", "market_id": "17", "circulate_market_value": "2453471100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.17}, {"name": "高股息", "change_pct": -0.54}, {"name": "银行", "change_pct": -0.62}, {"name": "白马股", "change_pct": 0.04}, {"name": "破净股", "change_pct": -1.65}, {"name": "大金融", "change_pct": -0.71}]}, {"code": "001358", "name": "兴欣新材", "hot_rank": 45, "hot_rank_chg": 84, "stock_cnt": 5797, "price": "28.55", "change": "10.02", "market_id": "33", "circulate_market_value": "1455373600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶剥离液"}, {"code": "002584", "name": "西陇科学", "hot_rank": 46, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "8.22", "change": "4.98", "market_id": "33", "circulate_market_value": "3954965400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -2.23}, {"name": "医疗器械", "change_pct": -2.29}, {"name": "锂电池", "change_pct": -2.3}, {"name": "基因测序", "change_pct": -2.67}, {"name": "PCB板", "change_pct": -1.46}, {"name": "医药", "change_pct": -2.22}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "化学原料药", "change_pct": -2.11}, {"name": "食品安全", "change_pct": -2.67}, {"name": "辅助生殖", "change_pct": -2.83}, {"name": "光刻机（胶）", "change_pct": -0.13}, {"name": "异丙醇", "change_pct": -0.68}, {"name": "新冠病毒防治", "change_pct": -2.19}, {"name": "磷酸铁锂", "change_pct": -2.13}]}, {"code": "600900", "name": "长江电力", "hot_rank": 47, "hot_rank_chg": 62, "stock_cnt": 5797, "price": "30.88", "change": "0.65", "market_id": "17", "circulate_market_value": "755578560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 48, "hot_rank_chg": -15, "stock_cnt": 5797, "price": "81.10", "change": "1.14", "market_id": "33", "circulate_market_value": "156732960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 49, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "234.58", "change": "-2.67", "market_id": "33", "circulate_market_value": "999455560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 50, "hot_rank_chg": 11, "stock_cnt": 5797, "price": "18.07", "change": "7.37", "market_id": "33", "circulate_market_value": "3436868800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000333", "name": "美的集团", "hot_rank": 51, "hot_rank_chg": 47, "stock_cnt": 5797, "price": "95.01", "change": "1.45", "market_id": "33", "circulate_market_value": "654339030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002187", "name": "广百股份", "hot_rank": 52, "hot_rank_chg": 27, "stock_cnt": 5797, "price": "6.56", "change": "-10.01", "market_id": "33", "circulate_market_value": "4597868800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -3.29}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "粤港澳大湾区", "change_pct": -2.03}, {"name": "物业管理", "change_pct": -2.23}, {"name": "预制菜", "change_pct": -2.46}, {"name": "地摊经济", "change_pct": -3.0}]}, {"code": "688347", "name": "华虹宏力", "hot_rank": 53, "hot_rank_chg": -30, "stock_cnt": 5797, "price": "199.86", "change": "8.05", "market_id": "17", "circulate_market_value": "81492915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 54, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "8.56", "change": "-9.80", "market_id": "33", "circulate_market_value": "4849054200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.04}, {"name": "石墨烯", "change_pct": -2.4}, {"name": "军民融合", "change_pct": -2.93}, {"name": "物联网", "change_pct": -3.28}, {"name": "LED", "change_pct": -2.36}, {"name": "军工", "change_pct": -2.69}, {"name": "智慧灯杆", "change_pct": -2.67}, {"name": "海洋经济", "change_pct": -2.65}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 55, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "11.12", "change": "1.09", "market_id": "17", "circulate_market_value": "11619152900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.15}, {"name": "上海国企改革", "change_pct": -1.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -4.31}, {"name": "国企改革", "change_pct": -1.87}]}, {"code": "301391", "name": "卡莱特", "hot_rank": 56, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "55.98", "change": "19.97", "market_id": "33", "circulate_market_value": "5196929700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 57, "hot_rank_chg": -14, "stock_cnt": 5797, "price": "3.58", "change": "5.92", "market_id": "33", "circulate_market_value": "3113882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": -3.44}, {"name": "5G消息/RCS", "change_pct": -3.34}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "Kimi概念", "change_pct": -3.81}, {"name": "智谱AI", "change_pct": -4.85}, {"name": "区块链", "change_pct": -3.6}]}, {"code": "002156", "name": "通富微电", "hot_rank": 58, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "44.08", "change": "1.01", "market_id": "33", "circulate_market_value": "66889294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601616", "name": "广电电气", "hot_rank": 59, "hot_rank_chg": 221, "stock_cnt": 5797, "price": "3.74", "change": "10.00", "market_id": "17", "circulate_market_value": "3192745700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心配电", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -2.79}, {"name": "充电桩", "change_pct": -2.56}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "回购", "change_pct": -1.52}, {"name": "智能电网", "change_pct": -2.89}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 60, "hot_rank_chg": 12, "stock_cnt": 5797, "price": "1460.21", "change": "1.22", "market_id": "17", "circulate_market_value": "1825381700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 61, "hot_rank_chg": -32, "stock_cnt": 5797, "price": "14.22", "change": "-10.00", "market_id": "17", "circulate_market_value": "11195070500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600520", "name": "三佳科技", "hot_rank": 62, "hot_rank_chg": 216, "stock_cnt": 5797, "price": "22.17", "change": "10.03", "market_id": "17", "circulate_market_value": "3512393100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "先进封装"}, {"code": "688256", "name": "寒武纪", "hot_rank": 63, "hot_rank_chg": -26, "stock_cnt": 5797, "price": "934.00", "change": "-1.58", "market_id": "17", "circulate_market_value": "587349640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 64, "hot_rank_chg": -17, "stock_cnt": 5797, "price": "218.81", "change": "-0.34", "market_id": "17", "circulate_market_value": "146759880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 65, "hot_rank_chg": -33, "stock_cnt": 5797, "price": "22.30", "change": "-9.35", "market_id": "33", "circulate_market_value": "25558152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 66, "hot_rank_chg": -14, "stock_cnt": 5797, "price": "37.71", "change": "-0.61", "market_id": "17", "circulate_market_value": "748320720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 67, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "3.77", "change": "-10.02", "market_id": "33", "circulate_market_value": "3469100900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.39}, {"name": "ST摘帽", "change_pct": -2.99}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "人工智能", "change_pct": -3.57}, {"name": "VR&AR", "change_pct": -3.18}, {"name": "游戏", "change_pct": -4.82}, {"name": "动漫", "change_pct": -4.82}, {"name": "腾讯概念股", "change_pct": -4.06}, {"name": "快手概念股", "change_pct": -5.3}, {"name": "NFT", "change_pct": -4.36}, {"name": "元宇宙", "change_pct": -4.46}, {"name": "虚拟数字人", "change_pct": -4.49}, {"name": "字节跳动概念股", "change_pct": -4.77}, {"name": "云游戏", "change_pct": -4.49}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "IP经济/谷子经济", "change_pct": -3.88}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 68, "hot_rank_chg": -30, "stock_cnt": 5797, "price": "9.01", "change": "0.33", "market_id": "17", "circulate_market_value": "16120136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.82}, {"name": "纯碱", "change_pct": -2.7}, {"name": "食品", "change_pct": -1.38}, {"name": "土壤修复", "change_pct": -2.54}, {"name": "东数西算/算力", "change_pct": -4.0}, {"name": "OpenClaw概念", "change_pct": -4.76}, {"name": "DeepSeek概念股", "change_pct": -4.11}]}, {"code": "001309", "name": "德明利", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "181.60", "change": "-3.14", "market_id": "33", "circulate_market_value": "42207125000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 70, "hot_rank_chg": -10, "stock_cnt": 5797, "price": "47.04", "change": "-8.25", "market_id": "33", "circulate_market_value": "69003713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 71, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "14.72", "change": "3.81", "market_id": "17", "circulate_market_value": "6542222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 72, "hot_rank_chg": -47, "stock_cnt": 5797, "price": "30.02", "change": "7.06", "market_id": "33", "circulate_market_value": "7318414900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 73, "hot_rank_chg": 19, "stock_cnt": 5797, "price": "7.38", "change": "-10.00", "market_id": "33", "circulate_market_value": "3495760500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.39}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "VR&AR", "change_pct": -3.18}, {"name": "游戏", "change_pct": -4.82}, {"name": "影视", "change_pct": -5.74}, {"name": "直播/短视频", "change_pct": -4.42}, {"name": "动漫", "change_pct": -4.82}, {"name": "腾讯概念股", "change_pct": -4.06}, {"name": "传媒", "change_pct": -4.31}, {"name": "元宇宙", "change_pct": -4.46}, {"name": "短剧/互动影游", "change_pct": -5.3}, {"name": "IP经济/谷子经济", "change_pct": -3.88}]}, {"code": "000521", "name": "长虹美菱", "hot_rank": 74, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "4.75", "change": "0.85", "market_id": "33", "circulate_market_value": "4157622100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医疗器械", "change_pct": -2.29}, {"name": "一带一路", "change_pct": -2.18}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "人工智能", "change_pct": -3.57}, {"name": "冷链", "change_pct": -1.87}, {"name": "小家电", "change_pct": -2.67}, {"name": "白色家电", "change_pct": -1.97}, {"name": "家电", "change_pct": -2.68}, {"name": "破净股", "change_pct": -1.65}, {"name": "智能制造", "change_pct": -2.87}, {"name": "工业互联网", "change_pct": -2.95}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -2.15}, {"name": "垃圾分类", "change_pct": -2.54}, {"name": "新冠病毒防治", "change_pct": -2.19}, {"name": "C2M", "change_pct": -3.17}, {"name": "生物安全", "change_pct": -1.61}, {"name": "出海龙头", "change_pct": 0.34}]}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 75, "hot_rank_chg": 91, "stock_cnt": 5797, "price": "13.23", "change": "5.50", "market_id": "33", "circulate_market_value": "4842446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 76, "hot_rank_chg": -6, "stock_cnt": 5797, "price": "3.69", "change": "-10.00", "market_id": "17", "circulate_market_value": "4282401700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.04}, {"name": "纺织服装", "change_pct": -2.39}, {"name": "浙江国企改革", "change_pct": -2.64}, {"name": "影视", "change_pct": -5.74}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -1.87}, {"name": "短剧/互动影游", "change_pct": -5.3}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 77, "hot_rank_chg": -9, "stock_cnt": 5797, "price": "38.10", "change": "-1.27", "market_id": "17", "circulate_market_value": "93483922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 78, "hot_rank_chg": -44, "stock_cnt": 5797, "price": "14.19", "change": "-0.84", "market_id": "33", "circulate_market_value": "9865782500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 79, "hot_rank_chg": -15, "stock_cnt": 5797, "price": "9.59", "change": "-9.95", "market_id": "33", "circulate_market_value": "6568214000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -2.79}, {"name": "核电", "change_pct": -2.45}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "充电桩", "change_pct": -2.56}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "储能", "change_pct": -2.46}, {"name": "阿里巴巴概念股", "change_pct": -3.8}, {"name": "中芯国际概念股", "change_pct": 0.17}, {"name": "智能电网", "change_pct": -2.89}, {"name": "核聚变", "change_pct": -2.12}]}, {"code": "002420", "name": "毅昌科技", "hot_rank": 80, "hot_rank_chg": 232, "stock_cnt": 5797, "price": "6.42", "change": "9.93", "market_id": "33", "circulate_market_value": "2592830600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人结构件", "xgb_concepts": [{"name": "医疗器械", "change_pct": -2.29}, {"name": "锂电池", "change_pct": -2.3}, {"name": "充电桩", "change_pct": -2.56}, {"name": "光伏", "change_pct": -2.55}, {"name": "汽车零部件", "change_pct": -3.22}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "机器人", "change_pct": -3.2}, {"name": "白色家电", "change_pct": -1.97}, {"name": "家电", "change_pct": -2.68}, {"name": "储能", "change_pct": -2.46}, {"name": "新能源车零部件", "change_pct": -2.83}, {"name": "汽车热管理", "change_pct": -2.68}, {"name": "华为汽车", "change_pct": -2.71}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "人形机器人", "change_pct": -3.32}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 81, "hot_rank_chg": -45, "stock_cnt": 5797, "price": "109.68", "change": "0.24", "market_id": "33", "circulate_market_value": "119374401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600863", "name": "华能蒙电", "hot_rank": 82, "hot_rank_chg": 14, "stock_cnt": 5797, "price": "5.66", "change": "4.82", "market_id": "17", "circulate_market_value": "39978420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.86}, {"name": "央企改革", "change_pct": -1.44}, {"name": "电力体制改革", "change_pct": -1.13}, {"name": "火电", "change_pct": -1.02}, {"name": "内蒙古概念", "change_pct": -1.54}, {"name": "风电", "change_pct": -2.13}, {"name": "国企改革", "change_pct": -1.87}, {"name": "西部大开发", "change_pct": -2.47}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 83, "hot_rank_chg": 31, "stock_cnt": 5797, "price": "5.55", "change": "-7.50", "market_id": "33", "circulate_market_value": "10628763100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -3.77}, {"name": "林业", "change_pct": -2.57}, {"name": "碳中和", "change_pct": -1.65}, {"name": "自贸区", "change_pct": -2.52}]}, {"code": "001258", "name": "立新能源", "hot_rank": 84, "hot_rank_chg": -10, "stock_cnt": 5797, "price": "8.71", "change": "5.07", "market_id": "33", "circulate_market_value": "8129231200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -2.56}, {"name": "新疆国企改革", "change_pct": -2.18}, {"name": "新疆概念", "change_pct": -2.65}, {"name": "光伏", "change_pct": -2.55}, {"name": "风电", "change_pct": -2.13}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "储能", "change_pct": -2.46}, {"name": "国企改革", "change_pct": -1.87}]}, {"code": "002916", "name": "深南电路", "hot_rank": 85, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "211.24", "change": "5.00", "market_id": "33", "circulate_market_value": "140440830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 86, "hot_rank_chg": 24, "stock_cnt": 5797, "price": "2.23", "change": "-10.08", "market_id": "17", "circulate_market_value": "7782227600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -4.29}, {"name": "车联网/车路云", "change_pct": -3.11}, {"name": "超高清视频", "change_pct": -2.87}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "人工智能", "change_pct": -3.57}, {"name": "云计算数据中心", "change_pct": -3.19}, {"name": "影视", "change_pct": -5.74}, {"name": "智慧城市", "change_pct": -3.45}, {"name": "国产芯片", "change_pct": -1.3}, {"name": "振兴东北", "change_pct": -3.19}, {"name": "传媒", "change_pct": -4.31}, {"name": "低价股", "change_pct": -2.26}, {"name": "国企改革", "change_pct": -1.87}, {"name": "在线教育", "change_pct": -3.4}, {"name": "医疗信息化", "change_pct": -3.96}, {"name": "AI大模型/智能体", "change_pct": -3.48}, {"name": "短剧/互动影游", "change_pct": -5.3}, {"name": "IP经济/谷子经济", "change_pct": -3.88}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 87, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "14.40", "change": "-10.00", "market_id": "33", "circulate_market_value": "2554675200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 88, "hot_rank_chg": 287, "stock_cnt": 5797, "price": "30.29", "change": "-0.79", "market_id": "33", "circulate_market_value": "50830363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002371", "name": "北方华创", "hot_rank": 89, "hot_rank_chg": -12, "stock_cnt": 5797, "price": "592.02", "change": "3.13", "market_id": "33", "circulate_market_value": "430605910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002959", "name": "小熊电器", "hot_rank": 90, "hot_rank_chg": -31, "stock_cnt": 5797, "price": "37.37", "change": "-9.99", "market_id": "33", "circulate_market_value": "5224116400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 91, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "26.90", "change": "1.51", "market_id": "17", "circulate_market_value": "106835691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 92, "hot_rank_chg": -37, "stock_cnt": 5797, "price": "43.87", "change": "4.78", "market_id": "33", "circulate_market_value": "29041761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600887", "name": "伊利股份", "hot_rank": 93, "hot_rank_chg": 47, "stock_cnt": 5797, "price": "32.91", "change": "1.60", "market_id": "17", "circulate_market_value": "207133230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 94, "hot_rank_chg": -23, "stock_cnt": 5797, "price": "13.07", "change": "-9.99", "market_id": "33", "circulate_market_value": "8627855900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 95, "hot_rank_chg": -17, "stock_cnt": 5797, "price": "3.92", "change": "-1.26", "market_id": "33", "circulate_market_value": "3375757200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.37}, {"name": "一带一路", "change_pct": -2.18}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "福建自贸/海西概念", "change_pct": -3.77}, {"name": "光伏", "change_pct": -2.55}, {"name": "有色金属", "change_pct": -1.92}, {"name": "新能源汽车", "change_pct": -2.54}, {"name": "新能源车零部件", "change_pct": -2.83}, {"name": "自贸区", "change_pct": -2.52}, {"name": "液冷服务器", "change_pct": -2.93}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 96, "hot_rank_chg": 27, "stock_cnt": 5797, "price": "16.12", "change": "-5.23", "market_id": "17", "circulate_market_value": "3403950500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000651", "name": "格力电器", "hot_rank": 97, "hot_rank_chg": 65, "stock_cnt": 5797, "price": "40.98", "change": "0.56", "market_id": "33", "circulate_market_value": "225918350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 98, "hot_rank_chg": 32, "stock_cnt": 5797, "price": "4.45", "change": "-9.92", "market_id": "17", "circulate_market_value": "2488971900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.39}, {"name": "ST摘帽", "change_pct": -2.99}, {"name": "强势人气股", "change_pct": -4.04}, {"name": "游戏", "change_pct": -4.82}, {"name": "影视", "change_pct": -5.74}, {"name": "短剧/互动影游", "change_pct": -5.3}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 99, "hot_rank_chg": -41, "stock_cnt": 5797, "price": "23.25", "change": "-7.41", "market_id": "33", "circulate_market_value": "66496690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 100, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "4.33", "change": "0.23", "market_id": "33", "circulate_market_value": "152313380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.34}, {"name": "手机产业链", "change_pct": -2.71}, {"name": "超高清视频", "change_pct": -2.87}, {"name": "苹果产业链", "change_pct": -2.91}, {"name": "电竞", "change_pct": -3.88}, {"name": "半导体", "change_pct": -0.84}, {"name": "人工智能", "change_pct": -3.57}, {"name": "互联网医疗", "change_pct": -3.04}, {"name": "VR&AR", "change_pct": -3.18}, {"name": "OLED", "change_pct": -1.12}, {"name": "京津冀", "change_pct": -2.47}, {"name": "物联网", "change_pct": -3.28}, {"name": "指纹识别", "change_pct": -2.6}, {"name": "汽车零部件", "change_pct": -3.22}, {"name": "白马股", "change_pct": 0.04}, {"name": "智能制造", "change_pct": -2.87}, {"name": "小米概念股", "change_pct": -2.45}, {"name": "国产芯片", "change_pct": -1.3}, {"name": "液晶面板/LCD", "change_pct": -1.68}, {"name": "全息概念", "change_pct": -3.58}, {"name": "理想汽车概念股", "change_pct": -2.57}, {"name": "MicroLED", "change_pct": -1.28}, {"name": "钙钛矿电池", "change_pct": -2.73}, {"name": "智能手表", "change_pct": -3.45}, {"name": "MiniLED", "change_pct": -1.96}, {"name": "传感器", "change_pct": -2.48}, {"name": "大硅片", "change_pct": 0.74}, {"name": "AI PC", "change_pct": -3.0}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "回购", "change_pct": -1.52}, {"name": "光电共封装CPO", "change_pct": -1.45}, {"name": "智能眼镜/MR头显", "change_pct": -2.87}, {"name": "玻璃基板封装", "change_pct": -1.49}]}];
const LIMIT_UP_POOL = [{"code": "001358", "name": "兴欣新材", "price": 28.55, "change_pct": 10.02, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 30.61, "first_limit_up": 1795064835, "break_limit_up_times": 1}, {"code": "600156", "name": "华升股份", "price": 8.9, "change_pct": 10.01, "reason": "公司拟6.62亿元购买易信科技97.40%股份，标的公司深耕AIDC领域，业务涉及智算中心双冷源阶梯冷却技术；一季报业绩同比减亏", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 16.79, "first_limit_up": 1795051809, "break_limit_up_times": 3}, {"code": "601616", "name": "广电电气", "price": 3.74, "change_pct": 10.0, "reason": "公司聚焦40.5kV及以下电压等级智能输配电成套设备研发，子公司安奕极电气荣获腾讯A级供应商，安奕极产品广泛应用于数据中心领域", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.75, "first_limit_up": 1795053147, "break_limit_up_times": 0}, {"code": "002165", "name": "红 宝 丽", "price": 6.3, "change_pct": 9.95, "reason": "公司主要从事环氧丙烷衍生品，一异丙醇胺可用于电子化学品之光刻胶清洗剂，也是近年来公司在国内市场重点拓展的应用领域之一", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 6.79, "first_limit_up": 1795051935, "break_limit_up_times": 0}, {"code": "002771", "name": "真视通", "price": 14.38, "change_pct": 10.02, "reason": "公司数据中心业务主要为用户提供数据中心基础环境建设、基础设施建设等系统建设服务，与航源光热、广电五舟联合研发了两相液冷高效散热服务器等", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 2.36, "first_limit_up": 1795051500, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 12.38, "change_pct": 10.04, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 15.5, "first_limit_up": 1795065945, "break_limit_up_times": 3}, {"code": "603931", "name": "格林达", "price": 29.15, "change_pct": 10.0, "reason": "1、国内湿电子化学品主要生产厂商之一；公司产品主要有显影液、蚀刻液、稀释液、清洗液等，核心产品TMAH显影液系LCD、OLED显示面板生产过程中的关键材料之一；\n2、TMA价格持续上涨，据网络截图显示，查询到公司也在生产和销售偏苯三酸酐", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 3.12, "first_limit_up": 1795051877, "break_limit_up_times": 1}, {"code": "603030", "name": "全筑股份", "price": 2.34, "change_pct": 9.86, "reason": "1、公司与华芯极光在上海合资成立华芯全筑，华芯全筑致力于极紫外光源核心精密测量设备的研发与制造，同时为传统化光源路径攻关以及创新型光源技术落地提供支撑；\n2、公司成立云阙智算苏州物联科技有限公司，基于分布式数字与AI原生服务平台，聚焦数据产生端，推动分布式边缘AI算力服务及应用，目前业务尚处于早期试点培育阶段；\n3、公司主营建筑装饰工程，表示研发智能建筑装饰施工机器人；\n", "plates": ["光刻机（胶）"], "limit_up_days": 3, "turnover_ratio": 2.44, "first_limit_up": 1795051500, "break_limit_up_times": 0}, {"code": "603324", "name": "盛剑科技", "price": 25.19, "change_pct": 10.0, "reason": "1、公司持续推进电子化学品材料研发、制备生产、客户验证等工作；电子化学品材料（主要为光刻胶剥离液）已经实现生产销售，光刻胶显影液（TMAH）回收技术在客户端测试验证成功；\n2、公司为华为武汉研发生产项目-海思光工厂洁净室提供工艺废气治理系统", "plates": ["光刻机（胶）"], "limit_up_days": 3, "turnover_ratio": 7.04, "first_limit_up": 1795052260, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 12.17, "change_pct": 10.04, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.33, "first_limit_up": 1795055241, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 16.74, "change_pct": 9.99, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 32.73, "first_limit_up": 1795052598, "break_limit_up_times": 13}, {"code": "000711", "name": "京蓝科技", "price": 3.83, "change_pct": 10.06, "reason": "近日，京蓝科技禄丰产业园区勤丰片区铟靶新材二期生产线成功试产出7N级高纯铟产品，依托国内首次产业化落地的高纯铟提纯新技术，此次试产出的7N级高纯铟产品纯度达到99.99999%，杂质总含量不超过千万分之一", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 11.29, "first_limit_up": 1795065945, "break_limit_up_times": 1}, {"code": "002077", "name": "大港股份", "price": 12.11, "change_pct": 9.99, "reason": "全资子公司上海旻艾定位于中高端IC测试，主打12英寸、8英寸的CP服务以及QFP、BGA、DIP、SOP、QFN等封装芯片测试，产品类型包括存储芯片等多个类型", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.75, "first_limit_up": 1795052415, "break_limit_up_times": 3}, {"code": "605178", "name": "时空科技", "price": 53.25, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.17, "first_limit_up": 1795057000, "break_limit_up_times": 0}, {"code": "002242", "name": "九阳股份", "price": 31.21, "change_pct": 10.01, "reason": "国内小家电行业领导品牌、豆浆机龙头", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 23.74, "first_limit_up": 1795055073, "break_limit_up_times": 17}, {"code": "000610", "name": "*ST西旅", "price": 7.33, "change_pct": 10.06, "reason": "公司签署预重整投资协议补充协议，新增自有资金占比承诺", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.69, "first_limit_up": 1795065093, "break_limit_up_times": 2}, {"code": "301348", "name": "蓝箭电子", "price": 21.66, "change_pct": 20.0, "reason": "公司拟以3.36亿元收购成都芯翼60%股权，标的构建了覆盖芯片设计、流片管理、产品测试及应用支持的全流程研发和产业化体系，产品主要聚焦于计算机处理、感知与导控、雷达通信对抗等三大应用场景，重点研发产品包括通信接口芯片，模拟信号链芯片等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 19.41, "first_limit_up": 1795054587, "break_limit_up_times": 1}, {"code": "002420", "name": "毅昌科技", "price": 6.42, "change_pct": 9.93, "reason": "1、公司在家电行业有白电结构件等业务，主要客户包括海尔等；\n2、公司以轻量化功能结构件与外观覆盖件为切入点，与头部人形机器人企业建立深度合作关系，产品线聚焦人形机器人与四足机器人，已进入量产交付前的最后准备阶段", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 1.84, "first_limit_up": 1795051500, "break_limit_up_times": 0}, {"code": "603078", "name": "江化微", "price": 26.86, "change_pct": 9.99, "reason": "公司是国内湿电子化学品行业的领先企业之一，生产的光刻胶配套试剂主要用于下游半导体和平板显示领域", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 12.79, "first_limit_up": 1795064806, "break_limit_up_times": 0}, {"code": "600619", "name": "海立股份", "price": 15.07, "change_pct": 10.0, "reason": "公司为上海微电子装备集团的封装光刻机提供冷却系统配套", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 14.3, "first_limit_up": 1795056496, "break_limit_up_times": 2}, {"code": "002418", "name": "康盛股份", "price": 4.02, "change_pct": 10.14, "reason": "1、公司长期深耕家电制冷管路制造，客户覆盖海尔、海信、格力、美菱、西门子等国内外家电企业；\n2、公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 5.28, "first_limit_up": 1795052118, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 1.2, "change_pct": 10.09, "reason": "公司携手产业投资人签约两江新区，拟布局2万吨高值资源循环基地", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.81, "first_limit_up": 1795051500, "break_limit_up_times": 0}, {"code": "603813", "name": "原尚股份", "price": 22.9, "change_pct": 9.99, "reason": "公司提供汽车零部件供应链物流服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1795054666, "break_limit_up_times": 0}, {"code": "600520", "name": "三佳科技", "price": 22.17, "change_pct": 10.02, "reason": "公司主营半导体封装装备，产品覆盖全自动塑封系统、切筋成型设备及塑封模具，应用于集成电路、功率器件和分立器件封装，完成对众合半导体控制权收购，众合半导体为国内少数具备180T/200T全自动塑封机、Auto精密模具量产能力的本土厂商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1795052534, "break_limit_up_times": 0}, {"code": "000656", "name": "金科股份", "price": 1.02, "change_pct": 9.68, "reason": "公司以房地产开发为核心，聚焦 “保交房”，开发类型以住宅为主，配套商业及产业地产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.51, "first_limit_up": 1795054983, "break_limit_up_times": 2}, {"code": "301030", "name": "*ST仕净", "price": 2.88, "change_pct": 20.0, "reason": "公司为光伏制程污染防控设备龙头", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.45, "first_limit_up": 1795052088, "break_limit_up_times": 1}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};