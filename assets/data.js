const UPDATE_TIME = "2026-10-27 17:18";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": -2.76,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": -2.95,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "存储芯片",
    "rise": -4.2,
    "rate": 0,
    "tag": "",
    "hotTag": "连续270天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.95,
    "rate": 0,
    "tag": "",
    "hotTag": "连续317天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -3.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续140天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "人工智能",
    "rise": -3.59,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 1,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "创新药",
    "rise": -3.58,
    "rate": 0,
    "tag": "",
    "hotTag": "连续147天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AI应用",
    "rise": -3.73,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": -3.65,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续246天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "冰雪产业",
    "rise": -0.96,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "黄金概念",
    "rise": -1.71,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "锂电池概念",
    "rise": -2.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "885710"
  },
  {
    "name": "先进封装",
    "rise": -4.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "赛马概念",
    "rise": 1.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885792"
  },
  {
    "name": "免税店",
    "rise": 0.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885898"
  },
  {
    "name": "固态电池",
    "rise": -3.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "军工",
    "rise": -3.55,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "猪肉",
    "rise": -0.93,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "减速器",
    "rise": -1.26,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 2,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "芯片概念",
    "rise": -3.72,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": -1,
    "etfName": "集成电路ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "智元发布安规级重载具身机器人精灵G2 Max 载重与精细作业兼得",
    "desc": "",
    "heat": 225916,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "电机",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "宏明电子",
        "code": "301682",
        "chg": 20.004701
      }
    ]
  },
  {
    "title": "腾讯绿泡泡短剧小程序月活过亿，10月首周周活环比增长44.1%",
    "desc": "",
    "heat": 95846,
    "direction": "短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "文化传媒"
    ],
    "stocks": [
      {
        "name": "文投控股",
        "code": "600715",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "国家数据集团完成工商注册，股东公示",
    "desc": "",
    "heat": 48636,
    "direction": "数据要素",
    "themes": [
      "数据要素",
      "数据安全",
      "数据确权"
    ],
    "stocks": [
      {
        "name": "多伦科技",
        "code": "603528",
        "chg": 10.055866
      }
    ]
  },
  {
    "title": "Anthropic(ANT.US)计划在11月16日当周进行IPO",
    "desc": "",
    "heat": 31271,
    "direction": "AI大模型",
    "themes": [
      "多模态AI",
      "Kimi",
      "DeepSeek概念",
      "AIGC模型",
      "视频生成模型"
    ],
    "stocks": [
      {
        "name": "多伦科技",
        "code": "603528",
        "chg": 10.055866
      }
    ]
  },
  {
    "title": "消息称相关部门已在推动车辆安装蜂窝车联网 C-V2X 强标制定工作",
    "desc": "",
    "heat": 24428,
    "direction": "车联网",
    "themes": [
      "车联网(车路协同)"
    ],
    "stocks": [
      {
        "name": "多伦科技",
        "code": "603528",
        "chg": 10.055866
      }
    ]
  },
  {
    "title": "大学老师工资将通过数字人民币钱包发放，江苏多所高校收到通知",
    "desc": "",
    "heat": 5225,
    "direction": "数字货币",
    "themes": [
      "数字货币"
    ],
    "stocks": [
      {
        "name": "新北洋",
        "code": "002376",
        "chg": 3.947368
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "轮边电机",
    "change": "+1.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "线控底盘",
    "change": "+0.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "0.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "-0.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "-0.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "-0.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "-0.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "-0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新零售",
    "change": "-0.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "-0.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "-0.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "-0.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "粘胶短纤",
    "change": "-0.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "-0.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "上海自由贸易港",
    "change": "-0.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "免税店概念",
    "change": "-0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "新能源整车",
    "change": "-0.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山西国企改革",
    "change": "-0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5879,
    "price": "7.70",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "14417724000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人关节",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -3.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.81
      },
      {
        "name": "军民融合",
        "change_pct": -3.8
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.38
      },
      {
        "name": "风电",
        "change_pct": -2.29
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      },
      {
        "name": "轮边电机",
        "change_pct": 1.87
      },
      {
        "name": "人形机器人",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5879,
    "price": "9.85",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6953411800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "交通机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.53
      },
      {
        "name": "国产软件",
        "change_pct": -4.63
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.75
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "人工智能",
        "change_pct": -3.89
      },
      {
        "name": "充电桩",
        "change_pct": -3.07
      },
      {
        "name": "北斗导航",
        "change_pct": -4.41
      },
      {
        "name": "智慧停车",
        "change_pct": -3.22
      },
      {
        "name": "物联网",
        "change_pct": -3.77
      },
      {
        "name": "教育",
        "change_pct": -2.88
      },
      {
        "name": "智慧城市",
        "change_pct": -3.64
      },
      {
        "name": "光伏",
        "change_pct": -2.52
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "机器视觉",
        "change_pct": -2.83
      },
      {
        "name": "智慧安防",
        "change_pct": -3.87
      },
      {
        "name": "智能制造",
        "change_pct": -3.1
      },
      {
        "name": "国产芯片",
        "change_pct": -4.02
      },
      {
        "name": "华为昇腾",
        "change_pct": -4.38
      },
      {
        "name": "职业教育",
        "change_pct": -2.49
      },
      {
        "name": "在线教育",
        "change_pct": -3.64
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -4.35
      },
      {
        "name": "华为产业链",
        "change_pct": -3.42
      },
      {
        "name": "汽车检测",
        "change_pct": -2.91
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 11,
    "hot_rank_chg": 2,
    "stock_cnt": 5879,
    "price": "12.62",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "8404920000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "连锁零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 15,
    "hot_rank_chg": -5,
    "stock_cnt": 5879,
    "price": "8.82",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "4177860100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.58
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "VR&AR",
        "change_pct": -3.58
      },
      {
        "name": "游戏",
        "change_pct": -2.82
      },
      {
        "name": "影视",
        "change_pct": -1.77
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.87
      },
      {
        "name": "动漫",
        "change_pct": -2.87
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.49
      },
      {
        "name": "传媒",
        "change_pct": -2.47
      },
      {
        "name": "元宇宙",
        "change_pct": -3.13
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.44
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.25
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 18,
    "hot_rank_chg": 5,
    "stock_cnt": 5879,
    "price": "10.33",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "2929228500.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "机器人钢丝绳",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": -1.59
      },
      {
        "name": "光伏",
        "change_pct": -2.52
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "干细胞",
        "change_pct": -3.18
      },
      {
        "name": "海洋经济",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 20,
    "hot_rank_chg": -4,
    "stock_cnt": 5879,
    "price": "10.70",
    "change": "-5.14",
    "market_id": "33",
    "circulate_market_value": "3576570400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -3.91
      },
      {
        "name": "饲料",
        "change_pct": -2.97
      },
      {
        "name": "一带一路",
        "change_pct": -2.22
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "保健品",
        "change_pct": -2.52
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.97
      },
      {
        "name": "污水处理",
        "change_pct": -2.51
      },
      {
        "name": "环保",
        "change_pct": -2.61
      },
      {
        "name": "食品",
        "change_pct": -2.16
      },
      {
        "name": "预制菜",
        "change_pct": -1.78
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "水产养殖",
        "change_pct": -2.0
      },
      {
        "name": "广西概念",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 22,
    "hot_rank_chg": -11,
    "stock_cnt": 5879,
    "price": "8.20",
    "change": "-4.43",
    "market_id": "33",
    "circulate_market_value": "4920957100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -3.03
      },
      {
        "name": "体育产业",
        "change_pct": -2.42
      },
      {
        "name": "边缘计算",
        "change_pct": -4.25
      },
      {
        "name": "核电",
        "change_pct": -2.91
      },
      {
        "name": "海工装备",
        "change_pct": -2.48
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.81
      },
      {
        "name": "冷链",
        "change_pct": -1.77
      },
      {
        "name": "地热",
        "change_pct": -2.39
      },
      {
        "name": "储能",
        "change_pct": -2.89
      },
      {
        "name": "碳中和",
        "change_pct": -2.36
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.89
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.17
      },
      {
        "name": "热泵",
        "change_pct": -2.44
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.36
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.81
      },
      {
        "name": "海洋经济",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 25,
    "hot_rank_chg": -11,
    "stock_cnt": 5879,
    "price": "8.24",
    "change": "1.10",
    "market_id": "33",
    "circulate_market_value": "13406428700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.54
      },
      {
        "name": "电竞",
        "change_pct": -3.11
      },
      {
        "name": "手游",
        "change_pct": -2.58
      },
      {
        "name": "人工智能",
        "change_pct": -3.89
      },
      {
        "name": "游戏",
        "change_pct": -2.82
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.76
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.49
      },
      {
        "name": "传媒",
        "change_pct": -2.47
      },
      {
        "name": "快手概念股",
        "change_pct": -3.24
      },
      {
        "name": "元宇宙",
        "change_pct": -3.13
      },
      {
        "name": "虚拟数字人",
        "change_pct": -3.08
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.84
      },
      {
        "name": "web3.0",
        "change_pct": -3.68
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.24
      },
      {
        "name": "数据要素",
        "change_pct": -4.2
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.32
      },
      {
        "name": "AI营销",
        "change_pct": -3.58
      },
      {
        "name": "ChatGPT",
        "change_pct": -4.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.4
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.72
      },
      {
        "name": "人形机器人",
        "change_pct": -2.35
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.44
      },
      {
        "name": "多模态",
        "change_pct": -3.87
      },
      {
        "name": "AI视频",
        "change_pct": -2.93
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.25
      },
      {
        "name": "小红书概念股",
        "change_pct": -3.38
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 26,
    "hot_rank_chg": 10,
    "stock_cnt": 5879,
    "price": "10.32",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5930255400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "羊毛羊绒",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.77
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.25
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 27,
    "hot_rank_chg": 5,
    "stock_cnt": 5879,
    "price": "12.62",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "4748152800.00",
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
        "name": "物业管理",
        "change_pct": -1.97
      },
      {
        "name": "免税店概念",
        "change_pct": -0.53
      },
      {
        "name": "地摊经济",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "002820",
    "name": "桂发祥",
    "hot_rank": 28,
    "hot_rank_chg": 2,
    "stock_cnt": 5879,
    "price": "11.21",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "2251733600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "休闲食品",
    "xgb_concepts": [
      {
        "name": "天津国企改革",
        "change_pct": -1.41
      },
      {
        "name": "休闲食品",
        "change_pct": -1.24
      },
      {
        "name": "食品",
        "change_pct": -2.16
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      }
    ]
  },
  {
    "code": "600558",
    "name": "大西洋",
    "hot_rank": 30,
    "hot_rank_chg": 9,
    "stock_cnt": 5879,
    "price": "5.72",
    "change": "2.88",
    "market_id": "17",
    "circulate_market_value": "5134299600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -2.91
      },
      {
        "name": "军民融合",
        "change_pct": -3.8
      },
      {
        "name": "有色 · 钛",
        "change_pct": -3.05
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.97
      },
      {
        "name": "有色金属",
        "change_pct": -2.29
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "超超临界发电",
        "change_pct": -1.85
      },
      {
        "name": "核聚变",
        "change_pct": -3.12
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 31,
    "hot_rank_chg": 3,
    "stock_cnt": 5879,
    "price": "9.71",
    "change": "7.65",
    "market_id": "17",
    "circulate_market_value": "8437531500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.54
      },
      {
        "name": "快递物流",
        "change_pct": -1.31
      },
      {
        "name": "新零售",
        "change_pct": -0.17
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "旅游",
        "change_pct": -0.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -3.79
      },
      {
        "name": "物业管理",
        "change_pct": -1.97
      },
      {
        "name": "免税店概念",
        "change_pct": -0.53
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 32,
    "hot_rank_chg": 9,
    "stock_cnt": 5879,
    "price": "2.39",
    "change": "3.91",
    "market_id": "33",
    "circulate_market_value": "3778521300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -3.68
      },
      {
        "name": "体外诊断",
        "change_pct": -3.47
      },
      {
        "name": "医疗器械",
        "change_pct": -3.62
      },
      {
        "name": "基因测序",
        "change_pct": -3.55
      },
      {
        "name": "预制菜",
        "change_pct": -1.78
      },
      {
        "name": "低价股",
        "change_pct": -1.9
      },
      {
        "name": "水产养殖",
        "change_pct": -2.0
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.0
      },
      {
        "name": "海洋经济",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002093",
    "name": "国脉科技",
    "hot_rank": 33,
    "hot_rank_chg": 5,
    "stock_cnt": 5879,
    "price": "7.93",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "7989475000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.53
      },
      {
        "name": "精准医疗",
        "change_pct": -3.68
      },
      {
        "name": "5G",
        "change_pct": -3.7
      },
      {
        "name": "云计算数据中心",
        "change_pct": -3.81
      },
      {
        "name": "养老产业",
        "change_pct": -3.09
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "物联网",
        "change_pct": -3.77
      },
      {
        "name": "教育",
        "change_pct": -2.88
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": -3.32
      },
      {
        "name": "数字经济",
        "change_pct": -3.76
      },
      {
        "name": "职业教育",
        "change_pct": -2.49
      },
      {
        "name": "智慧政务",
        "change_pct": -4.01
      },
      {
        "name": "6G",
        "change_pct": -4.13
      },
      {
        "name": "IPv6",
        "change_pct": -2.75
      },
      {
        "name": "华为产业链",
        "change_pct": -3.42
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.72
      },
      {
        "name": "区块链",
        "change_pct": -3.51
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 40,
    "hot_rank_chg": 3,
    "stock_cnt": 5879,
    "price": "10.38",
    "change": "-6.99",
    "market_id": "17",
    "circulate_market_value": "6661709800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.44
      },
      {
        "name": "农业种植",
        "change_pct": -2.87
      },
      {
        "name": "湖南国企改革",
        "change_pct": -2.34
      },
      {
        "name": "乡村振兴",
        "change_pct": -2.63
      },
      {
        "name": "休闲食品",
        "change_pct": -1.24
      },
      {
        "name": "食品",
        "change_pct": -2.16
      },
      {
        "name": "食品安全",
        "change_pct": -3.52
      },
      {
        "name": "社区团购",
        "change_pct": -1.64
      },
      {
        "name": "大农业",
        "change_pct": -2.31
      },
      {
        "name": "预制菜",
        "change_pct": -1.78
      },
      {
        "name": "人造肉",
        "change_pct": -2.77
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      }
    ]
  },
  {
    "code": "000058",
    "name": "深赛格",
    "hot_rank": 43,
    "hot_rank_chg": 7,
    "stock_cnt": 5879,
    "price": "7.87",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "7749898100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "布局半导体检测",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.53
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.81
      },
      {
        "name": "玻璃",
        "change_pct": -1.73
      },
      {
        "name": "光伏",
        "change_pct": -2.52
      },
      {
        "name": "物业管理",
        "change_pct": -1.97
      },
      {
        "name": "BIPV概念",
        "change_pct": -2.57
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "华为产业链",
        "change_pct": -3.42
      }
    ]
  },
  {
    "code": "600828",
    "name": "茂业商业",
    "hot_rank": 44,
    "hot_rank_chg": 7,
    "stock_cnt": 5879,
    "price": "4.47",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "7739180000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.17
      },
      {
        "name": "信托",
        "change_pct": -1.66
      },
      {
        "name": "大金融",
        "change_pct": 0.04
      },
      {
        "name": "免税店概念",
        "change_pct": -0.53
      },
      {
        "name": "地摊经济",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 46,
    "hot_rank_chg": 28,
    "stock_cnt": 5879,
    "price": "5.54",
    "change": "9.92",
    "market_id": "17",
    "circulate_market_value": "3443755900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "汽车零部件",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.54
      },
      {
        "name": "冷链",
        "change_pct": -1.77
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.59
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "白色家电",
        "change_pct": -2.3
      },
      {
        "name": "家电",
        "change_pct": -2.6
      },
      {
        "name": "拼多多概念股",
        "change_pct": -2.8
      },
      {
        "name": "人形机器人",
        "change_pct": -2.35
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.81
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 47,
    "hot_rank_chg": 10,
    "stock_cnt": 5879,
    "price": "5.92",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4149296200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.17
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.26
      },
      {
        "name": "物业管理",
        "change_pct": -1.97
      },
      {
        "name": "预制菜",
        "change_pct": -1.78
      },
      {
        "name": "地摊经济",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "002181",
    "name": "粤传媒",
    "hot_rank": 49,
    "hot_rank_chg": -9,
    "stock_cnt": 5879,
    "price": "10.40",
    "change": "6.56",
    "market_id": "33",
    "circulate_market_value": "11799185900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.42
      },
      {
        "name": "足球",
        "change_pct": -1.97
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -2.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.76
      },
      {
        "name": "传媒",
        "change_pct": -2.47
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.32
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.31
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.44
      },
      {
        "name": "AI视频",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "600601",
    "name": "方正科技",
    "hot_rank": 53,
    "hot_rank_chg": 16,
    "stock_cnt": 5879,
    "price": "9.38",
    "change": "-3.10",
    "market_id": "17",
    "circulate_market_value": "39117351000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "定增破发",
        "change_pct": -2.71
      },
      {
        "name": "长三角一体化",
        "change_pct": -1.68
      },
      {
        "name": "光通信",
        "change_pct": -3.68
      },
      {
        "name": "PCB板",
        "change_pct": -4.3
      },
      {
        "name": "智慧城市",
        "change_pct": -3.64
      },
      {
        "name": "电子发票",
        "change_pct": -4.84
      },
      {
        "name": "华为产业链",
        "change_pct": -3.42
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 54,
    "hot_rank_chg": 23,
    "stock_cnt": 5879,
    "price": "9.69",
    "change": "3.86",
    "market_id": "17",
    "circulate_market_value": "2851787500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -2.73
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "中日韩自贸区",
        "change_pct": -0.82
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "振兴东北",
        "change_pct": -1.65
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      }
    ]
  },
  {
    "code": "002196",
    "name": "方正电机",
    "hot_rank": 56,
    "hot_rank_chg": -4,
    "stock_cnt": 5879,
    "price": "10.97",
    "change": "9.05",
    "market_id": "33",
    "circulate_market_value": "5377266000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -1.22
      },
      {
        "name": "特斯拉",
        "change_pct": -2.13
      },
      {
        "name": "浙江国企改革",
        "change_pct": -2.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.85
      },
      {
        "name": "轮边电机",
        "change_pct": 1.87
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 58,
    "hot_rank_chg": -14,
    "stock_cnt": 5879,
    "price": "8.62",
    "change": "0.47",
    "market_id": "17",
    "circulate_market_value": "2324057300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -2.25
      },
      {
        "name": "高股息",
        "change_pct": 0.15
      },
      {
        "name": "银行",
        "change_pct": 1.34
      },
      {
        "name": "白马股",
        "change_pct": -1.14
      },
      {
        "name": "破净股",
        "change_pct": -1.58
      },
      {
        "name": "大金融",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600826",
    "name": "兰生股份",
    "hot_rank": 60,
    "hot_rank_chg": 10,
    "stock_cnt": 5879,
    "price": "9.04",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6546619500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -2.42
      },
      {
        "name": "上海国企改革",
        "change_pct": -1.19
      },
      {
        "name": "人工智能",
        "change_pct": -3.89
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -0.43
      },
      {
        "name": "进口博览会",
        "change_pct": -0.88
      },
      {
        "name": "自由贸易港",
        "change_pct": -1.53
      },
      {
        "name": "宠物经济",
        "change_pct": -4.29
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -3.72
      },
      {
        "name": "首发经济",
        "change_pct": -0.78
      }
    ]
  },
  {
    "code": "002376",
    "name": "新北洋",
    "hot_rank": 61,
    "hot_rank_chg": -3,
    "stock_cnt": 5879,
    "price": "7.90",
    "change": "3.95",
    "market_id": "33",
    "circulate_market_value": "6220970000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "彩票",
        "change_pct": -2.43
      },
      {
        "name": "锂电池",
        "change_pct": -2.73
      },
      {
        "name": "新零售",
        "change_pct": -0.17
      },
      {
        "name": "人工智能",
        "change_pct": -3.89
      },
      {
        "name": "高铁轨交",
        "change_pct": -2.66
      },
      {
        "name": "人脸识别",
        "change_pct": -3.42
      },
      {
        "name": "物联网",
        "change_pct": -3.77
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "智慧物流",
        "change_pct": -2.57
      },
      {
        "name": "机器视觉",
        "change_pct": -2.83
      },
      {
        "name": "智能制造",
        "change_pct": -3.1
      },
      {
        "name": "换电概念",
        "change_pct": -2.83
      },
      {
        "name": "信创",
        "change_pct": -4.61
      },
      {
        "name": "数字人民币",
        "change_pct": -4.5
      },
      {
        "name": "盲盒",
        "change_pct": -2.3
      },
      {
        "name": "打印机",
        "change_pct": -2.01
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 62,
    "hot_rank_chg": -2,
    "stock_cnt": 5879,
    "price": "4.27",
    "change": "-3.39",
    "market_id": "17",
    "circulate_market_value": "4953819300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.97
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "玻璃",
        "change_pct": -1.73
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "湖北国企改革",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 64,
    "hot_rank_chg": 14,
    "stock_cnt": 5879,
    "price": "1.87",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5352636100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.58
      },
      {
        "name": "游戏",
        "change_pct": -2.82
      },
      {
        "name": "影视",
        "change_pct": -1.77
      },
      {
        "name": "低价股",
        "change_pct": -1.9
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.44
      },
      {
        "name": "AI视频",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "000888",
    "name": "峨眉山A",
    "hot_rank": 65,
    "hot_rank_chg": 8,
    "stock_cnt": 5879,
    "price": "10.10",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "5321822300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "景区索道",
    "xgb_concepts": [
      {
        "name": "旅游",
        "change_pct": -0.94
      },
      {
        "name": "大数据",
        "change_pct": -4.0
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.89
      },
      {
        "name": "全息概念",
        "change_pct": -2.89
      },
      {
        "name": "NFT",
        "change_pct": -2.36
      },
      {
        "name": "智慧政务",
        "change_pct": -4.01
      },
      {
        "name": "低空经济",
        "change_pct": -3.49
      }
    ]
  },
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 71,
    "hot_rank_chg": -18,
    "stock_cnt": 5879,
    "price": "11.98",
    "change": "-5.74",
    "market_id": "33",
    "circulate_market_value": "39858407000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.45
      },
      {
        "name": "锂电池",
        "change_pct": -2.73
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.59
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "机器人",
        "change_pct": -3.0
      },
      {
        "name": "智能制造",
        "change_pct": -3.1
      },
      {
        "name": "工业互联网",
        "change_pct": -3.36
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      },
      {
        "name": "固态电池",
        "change_pct": -3.41
      },
      {
        "name": "MCU概念",
        "change_pct": -4.06
      },
      {
        "name": "人形机器人",
        "change_pct": -2.35
      },
      {
        "name": "小米汽车",
        "change_pct": -2.08
      },
      {
        "name": "低空经济",
        "change_pct": -3.49
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 75,
    "hot_rank_chg": 1,
    "stock_cnt": 5879,
    "price": "6.69",
    "change": "-0.30",
    "market_id": "33",
    "circulate_market_value": "12811968500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "林业",
        "change_pct": -1.58
      },
      {
        "name": "碳中和",
        "change_pct": -2.36
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      }
    ]
  },
  {
    "code": "002284",
    "name": "亚太股份",
    "hot_rank": 79,
    "hot_rank_chg": 7,
    "stock_cnt": 5879,
    "price": "9.67",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "7080261300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "股权受让",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -3.53
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.75
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.59
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      },
      {
        "name": "轮边电机",
        "change_pct": 1.87
      },
      {
        "name": "华为汽车",
        "change_pct": -2.04
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -4.32
      },
      {
        "name": "胎压监测",
        "change_pct": -0.68
      },
      {
        "name": "自动刹车",
        "change_pct": -1.39
      },
      {
        "name": "传感器",
        "change_pct": -2.92
      },
      {
        "name": "毫米波雷达",
        "change_pct": -3.55
      },
      {
        "name": "线控底盘",
        "change_pct": 0.86
      },
      {
        "name": "无人物流车",
        "change_pct": -2.46
      }
    ]
  },
  {
    "code": "603758",
    "name": "秦安股份",
    "hot_rank": 83,
    "hot_rank_chg": 2,
    "stock_cnt": 5879,
    "price": "10.73",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "4647335200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "柔性压力传感器",
    "xgb_concepts": [
      {
        "name": "汽车零部件",
        "change_pct": -1.59
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.85
      },
      {
        "name": "传感器",
        "change_pct": -2.92
      },
      {
        "name": "人形机器人",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 84,
    "hot_rank_chg": 25,
    "stock_cnt": 5879,
    "price": "7.49",
    "change": "6.85",
    "market_id": "33",
    "circulate_market_value": "5409965700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -2.91
      },
      {
        "name": "充电桩",
        "change_pct": -3.07
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.67
      },
      {
        "name": "军民融合",
        "change_pct": -3.8
      },
      {
        "name": "光伏",
        "change_pct": -2.52
      },
      {
        "name": "风电",
        "change_pct": -2.29
      },
      {
        "name": "军工",
        "change_pct": -3.75
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "特高压",
        "change_pct": -2.64
      },
      {
        "name": "自贸区",
        "change_pct": -1.44
      },
      {
        "name": "海洋经济",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 87,
    "hot_rank_chg": 7,
    "stock_cnt": 5879,
    "price": "6.33",
    "change": "5.68",
    "market_id": "33",
    "circulate_market_value": "4150619100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.54
      },
      {
        "name": "新零售",
        "change_pct": -0.17
      },
      {
        "name": "农业种植",
        "change_pct": -2.87
      },
      {
        "name": "冷链",
        "change_pct": -1.77
      },
      {
        "name": "大农业",
        "change_pct": -2.31
      },
      {
        "name": "预制菜",
        "change_pct": -1.78
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "可降解塑料",
        "change_pct": -2.53
      },
      {
        "name": "免税店概念",
        "change_pct": -0.53
      },
      {
        "name": "湖北国企改革",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "002205",
    "name": "国统股份",
    "hot_rank": 89,
    "hot_rank_chg": 9,
    "stock_cnt": 5879,
    "price": "11.40",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "2118612800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "PCCP管道",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.28
      },
      {
        "name": "水利",
        "change_pct": -2.75
      },
      {
        "name": "海绵城市",
        "change_pct": -3.01
      },
      {
        "name": "新疆概念",
        "change_pct": -1.89
      },
      {
        "name": "风电",
        "change_pct": -2.29
      },
      {
        "name": "地下管廊",
        "change_pct": -2.67
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": -1.97
      },
      {
        "name": "西部大开发",
        "change_pct": -1.4
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 90,
    "hot_rank_chg": -6,
    "stock_cnt": 5879,
    "price": "9.65",
    "change": "0.52",
    "market_id": "17",
    "circulate_market_value": "4175300700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -2.79
      },
      {
        "name": "强势人气股",
        "change_pct": -1.45
      },
      {
        "name": "光伏",
        "change_pct": -2.52
      },
      {
        "name": "无线耳机",
        "change_pct": -3.87
      },
      {
        "name": "华为产业链",
        "change_pct": -3.42
      },
      {
        "name": "光伏胶膜",
        "change_pct": -2.25
      }
    ]
  },
  {
    "code": "600303",
    "name": "曙光股份",
    "hot_rank": 92,
    "hot_rank_chg": 9,
    "stock_cnt": 5879,
    "price": "3.11",
    "change": "9.89",
    "market_id": "17",
    "circulate_market_value": "2107063000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "汽车车桥",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": -0.56
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.38
      },
      {
        "name": "汽车整车",
        "change_pct": -0.63
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.59
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.48
      },
      {
        "name": "振兴东北",
        "change_pct": -1.65
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.98
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002724", "name": "海洋王", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "13.09", "change": "10.00", "market_id": "33", "circulate_market_value": "7415200800.00", "change_type": "1", "change_section": "8", "change_days": "7", "change_reason": "三季报增长"}, {"code": "600838", "name": "上海九百", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5879, "price": "13.31", "change": "10.00", "market_id": "17", "circulate_market_value": "5335739200.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "商贸零售"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5879, "price": "16.01", "change": "10.03", "market_id": "33", "circulate_market_value": "7358384900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "机器人轴承"}, {"code": "002249", "name": "大洋电机", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "14417724000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人关节", "xgb_concepts": [{"name": "充电桩", "change_pct": -3.07}, {"name": "云计算数据中心", "change_pct": -3.81}, {"name": "军民融合", "change_pct": -3.8}, {"name": "氢能源/燃料电池", "change_pct": -2.38}, {"name": "风电", "change_pct": -2.29}, {"name": "军工", "change_pct": -3.75}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "新能源车零部件", "change_pct": -1.98}, {"name": "轮边电机", "change_pct": 1.87}, {"name": "人形机器人", "change_pct": -2.35}]}, {"code": "603528", "name": "多伦科技", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "9.85", "change": "10.06", "market_id": "17", "circulate_market_value": "6953411800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "交通机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.53}, {"name": "国产软件", "change_pct": -4.63}, {"name": "无人驾驶", "change_pct": -2.75}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "人工智能", "change_pct": -3.89}, {"name": "充电桩", "change_pct": -3.07}, {"name": "北斗导航", "change_pct": -4.41}, {"name": "智慧停车", "change_pct": -3.22}, {"name": "物联网", "change_pct": -3.77}, {"name": "教育", "change_pct": -2.88}, {"name": "智慧城市", "change_pct": -3.64}, {"name": "光伏", "change_pct": -2.52}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "机器人", "change_pct": -3.0}, {"name": "机器视觉", "change_pct": -2.83}, {"name": "智慧安防", "change_pct": -3.87}, {"name": "智能制造", "change_pct": -3.1}, {"name": "国产芯片", "change_pct": -4.02}, {"name": "华为昇腾", "change_pct": -4.38}, {"name": "职业教育", "change_pct": -2.49}, {"name": "在线教育", "change_pct": -3.64}, {"name": "华为云·鲲鹏", "change_pct": -4.35}, {"name": "华为产业链", "change_pct": -3.42}, {"name": "汽车检测", "change_pct": -2.91}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5879, "price": "21.34", "change": "-0.84", "market_id": "33", "circulate_market_value": "16256078000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5879, "price": "17.40", "change": "0.87", "market_id": "17", "circulate_market_value": "5946613400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 8, "hot_rank_chg": 4, "stock_cnt": 5879, "price": "15.39", "change": "3.15", "market_id": "33", "circulate_market_value": "51187548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "14.58", "change": "-6.00", "market_id": "17", "circulate_market_value": "15234465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5879, "price": "639.96", "change": "-4.77", "market_id": "17", "circulate_market_value": "19254937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "12.62", "change": "10.03", "market_id": "17", "circulate_market_value": "8404920000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "连锁零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.17}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "53.26", "change": "-2.10", "market_id": "33", "circulate_market_value": "38626099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 13, "hot_rank_chg": 5, "stock_cnt": 5879, "price": "17.22", "change": "10.03", "market_id": "33", "circulate_market_value": "8775834600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "001219", "name": "青岛食品", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "14.98", "change": "9.98", "market_id": "33", "circulate_market_value": "2849158600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长"}, {"code": "002343", "name": "慈文传媒", "hot_rank": 15, "hot_rank_chg": -5, "stock_cnt": 5879, "price": "8.82", "change": "-10.00", "market_id": "33", "circulate_market_value": "4177860100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.58}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "VR&AR", "change_pct": -3.58}, {"name": "游戏", "change_pct": -2.82}, {"name": "影视", "change_pct": -1.77}, {"name": "直播/短视频", "change_pct": -2.87}, {"name": "动漫", "change_pct": -2.87}, {"name": "腾讯概念股", "change_pct": -3.49}, {"name": "传媒", "change_pct": -2.47}, {"name": "元宇宙", "change_pct": -3.13}, {"name": "短剧/互动影游", "change_pct": -2.44}, {"name": "IP经济/谷子经济", "change_pct": -2.25}]}, {"code": "600785", "name": "新华百货", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5879, "price": "13.90", "change": "9.97", "market_id": "17", "circulate_market_value": "4390784700.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "零售促销"}, {"code": "601208", "name": "东材科技", "hot_rank": 17, "hot_rank_chg": 12, "stock_cnt": 5879, "price": "34.71", "change": "-3.58", "market_id": "17", "circulate_market_value": "35063450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603028", "name": "赛福天", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5879, "price": "10.33", "change": "10.01", "market_id": "17", "circulate_market_value": "2929228500.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "机器人钢丝绳", "xgb_concepts": [{"name": "电梯", "change_pct": -1.59}, {"name": "光伏", "change_pct": -2.52}, {"name": "机器人", "change_pct": -3.0}, {"name": "干细胞", "change_pct": -3.18}, {"name": "海洋经济", "change_pct": -2.74}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5879, "price": "577.00", "change": "-2.94", "market_id": "33", "circulate_market_value": "640433650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "10.70", "change": "-5.14", "market_id": "33", "circulate_market_value": "3576570400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -3.91}, {"name": "饲料", "change_pct": -2.97}, {"name": "一带一路", "change_pct": -2.22}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "保健品", "change_pct": -2.52}, {"name": "山东国企改革", "change_pct": -1.97}, {"name": "污水处理", "change_pct": -2.51}, {"name": "环保", "change_pct": -2.61}, {"name": "食品", "change_pct": -2.16}, {"name": "预制菜", "change_pct": -1.78}, {"name": "国企改革", "change_pct": -1.97}, {"name": "水产养殖", "change_pct": -2.0}, {"name": "广西概念", "change_pct": -1.87}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5879, "price": "13.31", "change": "10.00", "market_id": "33", "circulate_market_value": "3762204600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "乳制品"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 22, "hot_rank_chg": -11, "stock_cnt": 5879, "price": "8.20", "change": "-4.43", "market_id": "33", "circulate_market_value": "4920957100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -3.03}, {"name": "体育产业", "change_pct": -2.42}, {"name": "边缘计算", "change_pct": -4.25}, {"name": "核电", "change_pct": -2.91}, {"name": "海工装备", "change_pct": -2.48}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "云计算数据中心", "change_pct": -3.81}, {"name": "冷链", "change_pct": -1.77}, {"name": "地热", "change_pct": -2.39}, {"name": "储能", "change_pct": -2.89}, {"name": "碳中和", "change_pct": -2.36}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -0.89}, {"name": "汽车热管理", "change_pct": -2.17}, {"name": "热泵", "change_pct": -2.44}, {"name": "液冷服务器", "change_pct": -3.36}, {"name": "蜜雪冰城概念股", "change_pct": -1.81}, {"name": "海洋经济", "change_pct": -2.74}]}, {"code": "603186", "name": "华正新材", "hot_rank": 23, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "163.34", "change": "-10.00", "market_id": "17", "circulate_market_value": "25610163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 24, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "224.00", "change": "-7.64", "market_id": "33", "circulate_market_value": "52061651000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 25, "hot_rank_chg": -11, "stock_cnt": 5879, "price": "8.24", "change": "1.10", "market_id": "33", "circulate_market_value": "13406428700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.54}, {"name": "电竞", "change_pct": -3.11}, {"name": "手游", "change_pct": -2.58}, {"name": "人工智能", "change_pct": -3.89}, {"name": "游戏", "change_pct": -2.82}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.76}, {"name": "腾讯概念股", "change_pct": -3.49}, {"name": "传媒", "change_pct": -2.47}, {"name": "快手概念股", "change_pct": -3.24}, {"name": "元宇宙", "change_pct": -3.13}, {"name": "虚拟数字人", "change_pct": -3.08}, {"name": "东数西算/算力", "change_pct": -3.84}, {"name": "web3.0", "change_pct": -3.68}, {"name": "AIGC概念", "change_pct": -3.24}, {"name": "数据要素", "change_pct": -4.2}, {"name": "字节跳动概念股", "change_pct": -3.32}, {"name": "AI营销", "change_pct": -3.58}, {"name": "ChatGPT", "change_pct": -4.14}, {"name": "智能眼镜/MR头显", "change_pct": -3.4}, {"name": "AI大模型/智能体", "change_pct": -3.72}, {"name": "人形机器人", "change_pct": -2.35}, {"name": "短剧/互动影游", "change_pct": -2.44}, {"name": "多模态", "change_pct": -3.87}, {"name": "AI视频", "change_pct": -2.93}, {"name": "IP经济/谷子经济", "change_pct": -2.25}, {"name": "小红书概念股", "change_pct": -3.38}]}, {"code": "601566", "name": "九牧王", "hot_rank": 26, "hot_rank_chg": 10, "stock_cnt": 5879, "price": "10.32", "change": "10.02", "market_id": "17", "circulate_market_value": "5930255400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "羊毛羊绒", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.77}, {"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "自贸区", "change_pct": -1.44}, {"name": "IP经济/谷子经济", "change_pct": -2.25}]}, {"code": "600865", "name": "百大集团", "hot_rank": 27, "hot_rank_chg": 5, "stock_cnt": 5879, "price": "12.62", "change": "10.03", "market_id": "17", "circulate_market_value": "4748152800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.45}, {"name": "物业管理", "change_pct": -1.97}, {"name": "免税店概念", "change_pct": -0.53}, {"name": "地摊经济", "change_pct": -1.31}]}, {"code": "002820", "name": "桂发祥", "hot_rank": 28, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "2251733600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "休闲食品", "xgb_concepts": [{"name": "天津国企改革", "change_pct": -1.41}, {"name": "休闲食品", "change_pct": -1.24}, {"name": "食品", "change_pct": -2.16}, {"name": "国企改革", "change_pct": -1.97}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "43.00", "change": "0.80", "market_id": "17", "circulate_market_value": "193630680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600558", "name": "大西洋", "hot_rank": 30, "hot_rank_chg": 9, "stock_cnt": 5879, "price": "5.72", "change": "2.88", "market_id": "17", "circulate_market_value": "5134299600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -2.91}, {"name": "军民融合", "change_pct": -3.8}, {"name": "有色 · 钛", "change_pct": -3.05}, {"name": "装配式建筑", "change_pct": -2.97}, {"name": "有色金属", "change_pct": -2.29}, {"name": "军工", "change_pct": -3.75}, {"name": "超超临界发电", "change_pct": -1.85}, {"name": "核聚变", "change_pct": -3.12}]}, {"code": "600693", "name": "东百集团", "hot_rank": 31, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "9.71", "change": "7.65", "market_id": "17", "circulate_market_value": "8437531500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.54}, {"name": "快递物流", "change_pct": -1.31}, {"name": "新零售", "change_pct": -0.17}, {"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "旅游", "change_pct": -0.94}, {"name": "阿里巴巴概念股", "change_pct": -3.79}, {"name": "物业管理", "change_pct": -1.97}, {"name": "免税店概念", "change_pct": -0.53}, {"name": "自贸区", "change_pct": -1.44}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 32, "hot_rank_chg": 9, "stock_cnt": 5879, "price": "2.39", "change": "3.91", "market_id": "33", "circulate_market_value": "3778521300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -3.68}, {"name": "体外诊断", "change_pct": -3.47}, {"name": "医疗器械", "change_pct": -3.62}, {"name": "基因测序", "change_pct": -3.55}, {"name": "预制菜", "change_pct": -1.78}, {"name": "低价股", "change_pct": -1.9}, {"name": "水产养殖", "change_pct": -2.0}, {"name": "新冠病毒防治", "change_pct": -3.0}, {"name": "海洋经济", "change_pct": -2.74}]}, {"code": "002093", "name": "国脉科技", "hot_rank": 33, "hot_rank_chg": 5, "stock_cnt": 5879, "price": "7.93", "change": "9.99", "market_id": "33", "circulate_market_value": "7989475000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI应用", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.53}, {"name": "精准医疗", "change_pct": -3.68}, {"name": "5G", "change_pct": -3.7}, {"name": "云计算数据中心", "change_pct": -3.81}, {"name": "养老产业", "change_pct": -3.09}, {"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "物联网", "change_pct": -3.77}, {"name": "教育", "change_pct": -2.88}, {"name": "脑科学/脑机接口", "change_pct": -3.32}, {"name": "数字经济", "change_pct": -3.76}, {"name": "职业教育", "change_pct": -2.49}, {"name": "智慧政务", "change_pct": -4.01}, {"name": "6G", "change_pct": -4.13}, {"name": "IPv6", "change_pct": -2.75}, {"name": "华为产业链", "change_pct": -3.42}, {"name": "自贸区", "change_pct": -1.44}, {"name": "AI大模型/智能体", "change_pct": -3.72}, {"name": "区块链", "change_pct": -3.51}]}, {"code": "301488", "name": "豪恩汽电", "hot_rank": 34, "hot_rank_chg": -6, "stock_cnt": 5879, "price": "81.56", "change": "-15.91", "market_id": "33", "circulate_market_value": "3412856300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 35, "hot_rank_chg": -11, "stock_cnt": 5879, "price": "101.09", "change": "-4.12", "market_id": "33", "circulate_market_value": "140143260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600506", "name": "统一股份", "hot_rank": 36, "hot_rank_chg": 23, "stock_cnt": 5879, "price": "18.09", "change": "2.38", "market_id": "17", "circulate_market_value": "4515709300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5879, "price": "237.59", "change": "-5.60", "market_id": "33", "circulate_market_value": "298109820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 38, "hot_rank_chg": -5, "stock_cnt": 5879, "price": "13.20", "change": "-1.34", "market_id": "17", "circulate_market_value": "2137371400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 39, "hot_rank_chg": -12, "stock_cnt": 5879, "price": "14.27", "change": "5.24", "market_id": "33", "circulate_market_value": "9420007900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "10.38", "change": "-6.99", "market_id": "17", "circulate_market_value": "6661709800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.44}, {"name": "农业种植", "change_pct": -2.87}, {"name": "湖南国企改革", "change_pct": -2.34}, {"name": "乡村振兴", "change_pct": -2.63}, {"name": "休闲食品", "change_pct": -1.24}, {"name": "食品", "change_pct": -2.16}, {"name": "食品安全", "change_pct": -3.52}, {"name": "社区团购", "change_pct": -1.64}, {"name": "大农业", "change_pct": -2.31}, {"name": "预制菜", "change_pct": -1.78}, {"name": "人造肉", "change_pct": -2.77}, {"name": "国企改革", "change_pct": -1.97}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 41, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "233.00", "change": "-2.10", "market_id": "33", "circulate_market_value": "992723780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 42, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "268.98", "change": "-2.70", "market_id": "17", "circulate_market_value": "180409820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000058", "name": "深赛格", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "7.87", "change": "10.07", "market_id": "33", "circulate_market_value": "7749898100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "布局半导体检测", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.53}, {"name": "深圳本地股", "change_pct": -2.81}, {"name": "玻璃", "change_pct": -1.73}, {"name": "光伏", "change_pct": -2.52}, {"name": "物业管理", "change_pct": -1.97}, {"name": "BIPV概念", "change_pct": -2.57}, {"name": "国企改革", "change_pct": -1.97}, {"name": "华为产业链", "change_pct": -3.42}]}, {"code": "600828", "name": "茂业商业", "hot_rank": 44, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "4.47", "change": "10.10", "market_id": "17", "circulate_market_value": "7739180000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.17}, {"name": "信托", "change_pct": -1.66}, {"name": "大金融", "change_pct": 0.04}, {"name": "免税店概念", "change_pct": -0.53}, {"name": "地摊经济", "change_pct": -1.31}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 45, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "99.20", "change": "0.30", "market_id": "33", "circulate_market_value": "191162720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601956", "name": "东贝集团", "hot_rank": 46, "hot_rank_chg": 28, "stock_cnt": 5879, "price": "5.54", "change": "9.92", "market_id": "17", "circulate_market_value": "3443755900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "汽车零部件", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.54}, {"name": "冷链", "change_pct": -1.77}, {"name": "汽车零部件", "change_pct": -1.59}, {"name": "机器人", "change_pct": -3.0}, {"name": "白色家电", "change_pct": -2.3}, {"name": "家电", "change_pct": -2.6}, {"name": "拼多多概念股", "change_pct": -2.8}, {"name": "人形机器人", "change_pct": -2.35}, {"name": "蜜雪冰城概念股", "change_pct": -1.81}]}, {"code": "002187", "name": "广百股份", "hot_rank": 47, "hot_rank_chg": 10, "stock_cnt": 5879, "price": "5.92", "change": "10.04", "market_id": "33", "circulate_market_value": "4149296200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.17}, {"name": "粤港澳大湾区", "change_pct": -2.26}, {"name": "物业管理", "change_pct": -1.97}, {"name": "预制菜", "change_pct": -1.78}, {"name": "地摊经济", "change_pct": -1.31}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 48, "hot_rank_chg": -2, "stock_cnt": 5879, "price": "46.53", "change": "-3.18", "market_id": "17", "circulate_market_value": "114168160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002181", "name": "粤传媒", "hot_rank": 49, "hot_rank_chg": -9, "stock_cnt": 5879, "price": "10.40", "change": "6.56", "market_id": "33", "circulate_market_value": "11799185900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.42}, {"name": "足球", "change_pct": -1.97}, {"name": "粤港澳大湾区", "change_pct": -2.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.76}, {"name": "传媒", "change_pct": -2.47}, {"name": "AIGC概念", "change_pct": -3.24}, {"name": "字节跳动概念股", "change_pct": -3.32}, {"name": "国企改革", "change_pct": -1.97}, {"name": "网红/MCN", "change_pct": -2.31}, {"name": "短剧/互动影游", "change_pct": -2.44}, {"name": "AI视频", "change_pct": -2.93}]}, {"code": "000858", "name": "五粮液", "hot_rank": 50, "hot_rank_chg": -2, "stock_cnt": 5879, "price": "75.38", "change": "-0.33", "market_id": "33", "circulate_market_value": "292588480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 51, "hot_rank_chg": -6, "stock_cnt": 5879, "price": "44.19", "change": "5.29", "market_id": "17", "circulate_market_value": "13189771500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000651", "name": "格力电器", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5879, "price": "36.60", "change": "-1.56", "market_id": "33", "circulate_market_value": "201771880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 53, "hot_rank_chg": 16, "stock_cnt": 5879, "price": "9.38", "change": "-3.10", "market_id": "17", "circulate_market_value": "39117351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "定增破发", "change_pct": -2.71}, {"name": "长三角一体化", "change_pct": -1.68}, {"name": "光通信", "change_pct": -3.68}, {"name": "PCB板", "change_pct": -4.3}, {"name": "智慧城市", "change_pct": -3.64}, {"name": "电子发票", "change_pct": -4.84}, {"name": "华为产业链", "change_pct": -3.42}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 54, "hot_rank_chg": 23, "stock_cnt": 5879, "price": "9.69", "change": "3.86", "market_id": "17", "circulate_market_value": "2851787500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -2.73}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "中日韩自贸区", "change_pct": -0.82}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "振兴东北", "change_pct": -1.65}, {"name": "国企改革", "change_pct": -1.97}, {"name": "自贸区", "change_pct": -1.44}]}, {"code": "300223", "name": "君正股份", "hot_rank": 55, "hot_rank_chg": -20, "stock_cnt": 5879, "price": "94.60", "change": "-4.59", "market_id": "33", "circulate_market_value": "40003830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002196", "name": "方正电机", "hot_rank": 56, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "10.97", "change": "9.05", "market_id": "33", "circulate_market_value": "5377266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -1.22}, {"name": "特斯拉", "change_pct": -2.13}, {"name": "浙江国企改革", "change_pct": -2.39}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "机器人", "change_pct": -3.0}, {"name": "新能源车零部件", "change_pct": -1.98}, {"name": "理想汽车概念股", "change_pct": -1.85}, {"name": "轮边电机", "change_pct": 1.87}, {"name": "国企改革", "change_pct": -1.97}]}, {"code": "605333", "name": "沪光股份", "hot_rank": 57, "hot_rank_chg": 6, "stock_cnt": 5879, "price": "19.91", "change": "10.00", "market_id": "17", "circulate_market_value": "9239044500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "具身智能"}, {"code": "601398", "name": "工商银行", "hot_rank": 58, "hot_rank_chg": -14, "stock_cnt": 5879, "price": "8.62", "change": "0.47", "market_id": "17", "circulate_market_value": "2324057300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -2.25}, {"name": "高股息", "change_pct": 0.15}, {"name": "银行", "change_pct": 1.34}, {"name": "白马股", "change_pct": -1.14}, {"name": "破净股", "change_pct": -1.58}, {"name": "大金融", "change_pct": 0.04}]}, {"code": "600206", "name": "有研新材", "hot_rank": 59, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "35.69", "change": "-7.73", "market_id": "17", "circulate_market_value": "30213488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600826", "name": "兰生股份", "hot_rank": 60, "hot_rank_chg": 10, "stock_cnt": 5879, "price": "9.04", "change": "9.98", "market_id": "17", "circulate_market_value": "6546619500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -2.42}, {"name": "上海国企改革", "change_pct": -1.19}, {"name": "人工智能", "change_pct": -3.89}, {"name": "上海自由贸易港", "change_pct": -0.43}, {"name": "进口博览会", "change_pct": -0.88}, {"name": "自由贸易港", "change_pct": -1.53}, {"name": "宠物经济", "change_pct": -4.29}, {"name": "国企改革", "change_pct": -1.97}, {"name": "自贸区", "change_pct": -1.44}, {"name": "AI大模型/智能体", "change_pct": -3.72}, {"name": "首发经济", "change_pct": -0.78}]}, {"code": "002376", "name": "新北洋", "hot_rank": 61, "hot_rank_chg": -3, "stock_cnt": 5879, "price": "7.90", "change": "3.95", "market_id": "33", "circulate_market_value": "6220970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "彩票", "change_pct": -2.43}, {"name": "锂电池", "change_pct": -2.73}, {"name": "新零售", "change_pct": -0.17}, {"name": "人工智能", "change_pct": -3.89}, {"name": "高铁轨交", "change_pct": -2.66}, {"name": "人脸识别", "change_pct": -3.42}, {"name": "物联网", "change_pct": -3.77}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "机器人", "change_pct": -3.0}, {"name": "智慧物流", "change_pct": -2.57}, {"name": "机器视觉", "change_pct": -2.83}, {"name": "智能制造", "change_pct": -3.1}, {"name": "换电概念", "change_pct": -2.83}, {"name": "信创", "change_pct": -4.61}, {"name": "数字人民币", "change_pct": -4.5}, {"name": "盲盒", "change_pct": -2.3}, {"name": "打印机", "change_pct": -2.01}]}, {"code": "600293", "name": "三峡新材", "hot_rank": 62, "hot_rank_chg": -2, "stock_cnt": 5879, "price": "4.27", "change": "-3.39", "market_id": "17", "circulate_market_value": "4953819300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.97}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "玻璃", "change_pct": -1.73}, {"name": "国企改革", "change_pct": -1.97}, {"name": "湖北国企改革", "change_pct": -1.1}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 63, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "14.28", "change": "6.81", "market_id": "33", "circulate_market_value": "2533386200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 64, "hot_rank_chg": 14, "stock_cnt": 5879, "price": "1.87", "change": "10.00", "market_id": "17", "circulate_market_value": "5352636100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -2.58}, {"name": "游戏", "change_pct": -2.82}, {"name": "影视", "change_pct": -1.77}, {"name": "低价股", "change_pct": -1.9}, {"name": "国企改革", "change_pct": -1.97}, {"name": "短剧/互动影游", "change_pct": -2.44}, {"name": "AI视频", "change_pct": -2.93}]}, {"code": "000888", "name": "峨眉山A", "hot_rank": 65, "hot_rank_chg": 8, "stock_cnt": 5879, "price": "10.10", "change": "10.02", "market_id": "33", "circulate_market_value": "5321822300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "景区索道", "xgb_concepts": [{"name": "旅游", "change_pct": -0.94}, {"name": "大数据", "change_pct": -4.0}, {"name": "冰雪产业", "change_pct": -0.89}, {"name": "全息概念", "change_pct": -2.89}, {"name": "NFT", "change_pct": -2.36}, {"name": "智慧政务", "change_pct": -4.01}, {"name": "低空经济", "change_pct": -3.49}]}, {"code": "001317", "name": "三羊马", "hot_rank": 66, "hot_rank_chg": -11, "stock_cnt": 5879, "price": "54.71", "change": "1.92", "market_id": "33", "circulate_market_value": "4677842700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002929", "name": "润建股份", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "54.04", "change": "4.37", "market_id": "33", "circulate_market_value": "11706576300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 68, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "1355.90", "change": "0.44", "market_id": "17", "circulate_market_value": "1694985600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 69, "hot_rank_chg": -5, "stock_cnt": 5879, "price": "64.40", "change": "-5.08", "market_id": "33", "circulate_market_value": "5066606600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 70, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "22.78", "change": "-10.00", "market_id": "33", "circulate_market_value": "5622928600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000559", "name": "万向钱潮", "hot_rank": 71, "hot_rank_chg": -18, "stock_cnt": 5879, "price": "11.98", "change": "-5.74", "market_id": "33", "circulate_market_value": "39858407000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.45}, {"name": "锂电池", "change_pct": -2.73}, {"name": "汽车零部件", "change_pct": -1.59}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "机器人", "change_pct": -3.0}, {"name": "智能制造", "change_pct": -3.1}, {"name": "工业互联网", "change_pct": -3.36}, {"name": "新能源车零部件", "change_pct": -1.98}, {"name": "固态电池", "change_pct": -3.41}, {"name": "MCU概念", "change_pct": -4.06}, {"name": "人形机器人", "change_pct": -2.35}, {"name": "小米汽车", "change_pct": -2.08}, {"name": "低空经济", "change_pct": -3.49}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 72, "hot_rank_chg": -10, "stock_cnt": 5879, "price": "27.85", "change": "1.38", "market_id": "17", "circulate_market_value": "573759940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 73, "hot_rank_chg": -1, "stock_cnt": 5879, "price": "53.29", "change": "-3.29", "market_id": "17", "circulate_market_value": "95357902000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 74, "hot_rank_chg": -18, "stock_cnt": 5879, "price": "28.45", "change": "-7.00", "market_id": "33", "circulate_market_value": "22314642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5879, "price": "6.69", "change": "-0.30", "market_id": "33", "circulate_market_value": "12811968500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "林业", "change_pct": -1.58}, {"name": "碳中和", "change_pct": -2.36}, {"name": "自贸区", "change_pct": -1.44}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 76, "hot_rank_chg": -8, "stock_cnt": 5879, "price": "22.49", "change": "8.39", "market_id": "17", "circulate_market_value": "9018490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 77, "hot_rank_chg": -23, "stock_cnt": 5879, "price": "141.48", "change": "-3.10", "market_id": "17", "circulate_market_value": "349919690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301682", "name": "宏明电子", "hot_rank": 78, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "102.10", "change": "20.00", "market_id": "33", "circulate_market_value": "3102547400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "精密零组件"}, {"code": "002284", "name": "亚太股份", "hot_rank": 79, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "9.67", "change": "10.01", "market_id": "33", "circulate_market_value": "7080261300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "股权受让", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -3.53}, {"name": "无人驾驶", "change_pct": -2.75}, {"name": "汽车零部件", "change_pct": -1.59}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "新能源车零部件", "change_pct": -1.98}, {"name": "轮边电机", "change_pct": 1.87}, {"name": "华为汽车", "change_pct": -2.04}, {"name": "华为鸿蒙", "change_pct": -4.32}, {"name": "胎压监测", "change_pct": -0.68}, {"name": "自动刹车", "change_pct": -1.39}, {"name": "传感器", "change_pct": -2.92}, {"name": "毫米波雷达", "change_pct": -3.55}, {"name": "线控底盘", "change_pct": 0.86}, {"name": "无人物流车", "change_pct": -2.46}]}, {"code": "001331", "name": "胜通能源", "hot_rank": 80, "hot_rank_chg": 3, "stock_cnt": 5879, "price": "38.52", "change": "9.99", "market_id": "33", "circulate_market_value": "11010331500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "工业机器人"}, {"code": "002428", "name": "云南锗业", "hot_rank": 81, "hot_rank_chg": 15, "stock_cnt": 5879, "price": "73.89", "change": "-3.86", "market_id": "33", "circulate_market_value": "48250724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 83, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "10.73", "change": "10.05", "market_id": "17", "circulate_market_value": "4647335200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "柔性压力传感器", "xgb_concepts": [{"name": "汽车零部件", "change_pct": -1.59}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "新能源车零部件", "change_pct": -1.98}, {"name": "理想汽车概念股", "change_pct": -1.85}, {"name": "传感器", "change_pct": -2.92}, {"name": "人形机器人", "change_pct": -2.35}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 84, "hot_rank_chg": 25, "stock_cnt": 5879, "price": "7.49", "change": "6.85", "market_id": "33", "circulate_market_value": "5409965700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": -2.91}, {"name": "充电桩", "change_pct": -3.07}, {"name": "福建自贸/海西概念", "change_pct": -1.67}, {"name": "军民融合", "change_pct": -3.8}, {"name": "光伏", "change_pct": -2.52}, {"name": "风电", "change_pct": -2.29}, {"name": "军工", "change_pct": -3.75}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "特高压", "change_pct": -2.64}, {"name": "自贸区", "change_pct": -1.44}, {"name": "海洋经济", "change_pct": -2.74}]}, {"code": "002703", "name": "浙江世宝", "hot_rank": 85, "hot_rank_chg": -3, "stock_cnt": 5879, "price": "15.32", "change": "5.87", "market_id": "33", "circulate_market_value": "8978256500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 86, "hot_rank_chg": 2, "stock_cnt": 5879, "price": "13.03", "change": "3.08", "market_id": "17", "circulate_market_value": "5791111100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 87, "hot_rank_chg": 7, "stock_cnt": 5879, "price": "6.33", "change": "5.68", "market_id": "33", "circulate_market_value": "4150619100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.54}, {"name": "新零售", "change_pct": -0.17}, {"name": "农业种植", "change_pct": -2.87}, {"name": "冷链", "change_pct": -1.77}, {"name": "大农业", "change_pct": -2.31}, {"name": "预制菜", "change_pct": -1.78}, {"name": "国企改革", "change_pct": -1.97}, {"name": "可降解塑料", "change_pct": -2.53}, {"name": "免税店概念", "change_pct": -0.53}, {"name": "湖北国企改革", "change_pct": -1.1}]}, {"code": "600667", "name": "太极实业", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5879, "price": "13.28", "change": "-4.67", "market_id": "17", "circulate_market_value": "27775680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002205", "name": "国统股份", "hot_rank": 89, "hot_rank_chg": 9, "stock_cnt": 5879, "price": "11.40", "change": "10.04", "market_id": "33", "circulate_market_value": "2118612800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCCP管道", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.28}, {"name": "水利", "change_pct": -2.75}, {"name": "海绵城市", "change_pct": -3.01}, {"name": "新疆概念", "change_pct": -1.89}, {"name": "风电", "change_pct": -2.29}, {"name": "地下管廊", "change_pct": -2.67}, {"name": "PPP", "change_pct": -0.9}, {"name": "国企改革", "change_pct": -1.97}, {"name": "西部大开发", "change_pct": -1.4}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 90, "hot_rank_chg": -6, "stock_cnt": 5879, "price": "9.65", "change": "0.52", "market_id": "17", "circulate_market_value": "4175300700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -2.79}, {"name": "强势人气股", "change_pct": -1.45}, {"name": "光伏", "change_pct": -2.52}, {"name": "无线耳机", "change_pct": -3.87}, {"name": "华为产业链", "change_pct": -3.42}, {"name": "光伏胶膜", "change_pct": -2.25}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 91, "hot_rank_chg": -4, "stock_cnt": 5879, "price": "17.78", "change": "-5.78", "market_id": "17", "circulate_market_value": "14080051000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600303", "name": "曙光股份", "hot_rank": 92, "hot_rank_chg": 9, "stock_cnt": 5879, "price": "3.11", "change": "9.89", "market_id": "17", "circulate_market_value": "2107063000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "汽车车桥", "xgb_concepts": [{"name": "新能源整车", "change_pct": -0.56}, {"name": "氢能源/燃料电池", "change_pct": -2.38}, {"name": "汽车整车", "change_pct": -0.63}, {"name": "汽车零部件", "change_pct": -1.59}, {"name": "新能源汽车", "change_pct": -2.48}, {"name": "振兴东北", "change_pct": -1.65}, {"name": "新能源车零部件", "change_pct": -1.98}]}, {"code": "603370", "name": "华新精科", "hot_rank": 93, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "30.81", "change": "10.00", "market_id": "17", "circulate_market_value": "2602018600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002823", "name": "凯中精密", "hot_rank": 94, "hot_rank_chg": 5, "stock_cnt": 5879, "price": "13.49", "change": "10.03", "market_id": "33", "circulate_market_value": "3008805700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "精密零组件"}, {"code": "600900", "name": "长江电力", "hot_rank": 95, "hot_rank_chg": 0, "stock_cnt": 5879, "price": "29.83", "change": "-0.10", "market_id": "17", "circulate_market_value": "729886930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 96, "hot_rank_chg": -6, "stock_cnt": 5879, "price": "49.28", "change": "-8.67", "market_id": "17", "circulate_market_value": "7043541700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301314", "name": "科瑞思", "hot_rank": 97, "hot_rank_chg": -8, "stock_cnt": 5879, "price": "67.37", "change": "20.00", "market_id": "33", "circulate_market_value": "2016583000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重大重组"}, {"code": "600418", "name": "江淮汽车", "hot_rank": 98, "hot_rank_chg": -18, "stock_cnt": 5879, "price": "19.80", "change": "-1.83", "market_id": "17", "circulate_market_value": "44632728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003029", "name": "吉大正元", "hot_rank": 99, "hot_rank_chg": -2, "stock_cnt": 5879, "price": "18.81", "change": "-9.35", "market_id": "33", "circulate_market_value": "3302716900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300539", "name": "横河精密", "hot_rank": 100, "hot_rank_chg": 6, "stock_cnt": 5879, "price": "19.68", "change": "20.00", "market_id": "33", "circulate_market_value": "4298190500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减速器"}];
const LIMIT_UP_POOL = [{"code": "001219", "name": "青岛食品", "price": 14.98, "change_pct": 9.99, "reason": "公司主要从事饼干与花生酱等休闲食品的研产销，第三季度净利润同比增长31.17%", "plates": ["大消费", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 7.77, "first_limit_up": 1793064300, "break_limit_up_times": 1}, {"code": "603037", "name": "凯众股份", "price": 11.87, "change_pct": 10.01, "reason": "公司已组建研发团队，探索聚氨酯材料技术在机器人领域的应用机会", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.18, "first_limit_up": 1793077307, "break_limit_up_times": 0}, {"code": "301479", "name": "弘景光电", "price": 56.15, "change_pct": 20.0, "reason": "公司机器视觉产品已启动户外作业、家庭陪伴及具身人形机器人等应用相关在研项目并送样", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 19.17, "first_limit_up": 1793066226, "break_limit_up_times": 9}, {"code": "600828", "name": "茂业商业", "price": 4.47, "change_pct": 10.1, "reason": "呼和浩特零售市场龙头，旗下深圳地区的所有门店和成都地区的人东店、光华店为离境退税店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1793065242, "break_limit_up_times": 0}, {"code": "600785", "name": "新华百货", "price": 13.9, "change_pct": 9.97, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 19.86, "first_limit_up": 1793083856, "break_limit_up_times": 1}, {"code": "603370", "name": "华新精科", "price": 30.81, "change_pct": 10.0, "reason": "公司铁芯产品已送样机器人关节电机，积极拓展机器人新兴应用领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.71, "first_limit_up": 1793069508, "break_limit_up_times": 1}, {"code": "600626", "name": "申达股份", "price": 3.94, "change_pct": 10.06, "reason": "上海市国资委旗下，纺织贸易业务供应链集成商，拟通过全资子公司申达投资、申达UK逐级对Auria Solutions Ltd.及其子公司增资2亿美元", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1793078669, "break_limit_up_times": 6}, {"code": "301314", "name": "科瑞思", "price": 67.37, "change_pct": 20.0, "reason": "1、公司拟收购宏钢光电，切入光电子封装壳体赛道；\n2、公司小型磁环线圈重点应用于5G基站、WiFi6路由器、机顶盒及数据中心的交换机和服务器；\n3、公司参与的电感业务包括电感绕线、电感成品和相关自动化生产设备", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 30.24, "first_limit_up": 1793080008, "break_limit_up_times": 1}, {"code": "300504", "name": "天邑股份", "price": 17.69, "change_pct": 20.01, "reason": "公司主营PON智能网关、光纤连接器等光通信设备，前三季度业绩同比扭亏", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.95, "first_limit_up": 1793070738, "break_limit_up_times": 0}, {"code": "002724", "name": "海洋王", "price": 13.09, "change_pct": 10.0, "reason": "公司是深海特种照明设备供应商，旗下专设军品事业部，销售舰艇用各类专业照明设备，产品应用于 “神六”“神七” 等航天项目，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 28.85, "first_limit_up": 1793066862, "break_limit_up_times": 6}, {"code": "605333", "name": "沪光股份", "price": 19.91, "change_pct": 10.0, "reason": "国际领先的汽车线束供应商，人形机器人项目首套样线此前下线", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 4.18, "first_limit_up": 1793067687, "break_limit_up_times": 3}, {"code": "001331", "name": "胜通能源", "price": 38.52, "change_pct": 9.99, "reason": "公司控股股东将变更为七腾机器人", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.69, "first_limit_up": 1793065158, "break_limit_up_times": 3}, {"code": "603758", "name": "秦安股份", "price": 10.73, "change_pct": 10.05, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1793064795, "break_limit_up_times": 1}, {"code": "000058", "name": "深 赛 格", "price": 7.87, "change_pct": 10.07, "reason": "深圳国资委控股的赛格集团旗下；公司主营业务包括以通信市场、电子专业市场为核心的电子市场流通业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 0.76, "first_limit_up": 1793064300, "break_limit_up_times": 0}, {"code": "002249", "name": "大洋电机", "price": 7.7, "change_pct": 10.0, "reason": "1、公司已完成机器人关节模组方案设计；\n2、公司开发氢燃料电池关键零部件，可用于SOFC。", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.16, "first_limit_up": 1793066217, "break_limit_up_times": 1}, {"code": "000888", "name": "峨眉山Ａ", "price": 10.1, "change_pct": 10.02, "reason": "公司称持有公司500股股票即免景区和索道门票，还可享免费温泉、滑雪，住酒店打折等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.88, "first_limit_up": 1793068146, "break_limit_up_times": 1}, {"code": "002284", "name": "亚太股份", "price": 9.67, "change_pct": 10.01, "reason": "1、国内第一家拥有整套ADAS自主技术并率先实现量产的企业；公司以汽车主动安全技术为基础，布局汽车智能网联产业和新能源汽车产业，打造智能汽车环境感知+主动安全控制+移动互联的无人驾驶产业链；\n2、公司在今年北京车展上首次展出一款高度集成化的机器人模组，由48V电源、电机、传动机构、控制器及制动系统组成，其技术逻辑与公司EMB控制系统一致，均为机电一体化产品，可模块化设计适配汽车及机器人领域应用需求", "plates": ["车联网/车路云"], "limit_up_days": 1, "turnover_ratio": 6.79, "first_limit_up": 1793064606, "break_limit_up_times": 5}, {"code": "002823", "name": "凯中精密", "price": 13.49, "change_pct": 10.03, "reason": "公司正积极布局人形机器人、AI数据中心等战略新兴领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.28, "first_limit_up": 1793070333, "break_limit_up_times": 1}, {"code": "301682", "name": "宏明电子", "price": 102.1, "change_pct": 20.0, "reason": "1、公司间接供应的无框力矩电机最终用于人形机器人关节，已实现小批量应用配套；\n2、公司主要从事以阻容元器件为主的新型电子元器件的研产销，积极布局算力服务器领域，相关结构件产品已在国内头部产业链客户完成验证，并实现小批量供货", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 23.66, "first_limit_up": 1793066124, "break_limit_up_times": 2}, {"code": "601086", "name": "国芳集团", "price": 12.62, "change_pct": 10.03, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 14.9, "first_limit_up": 1793083926, "break_limit_up_times": 0}, {"code": "603376", "name": "大明电子", "price": 26.3, "change_pct": 10.0, "reason": "公司专注于汽车电子零部件配套领域，驾驶辅助系统产品包括方向盘控制总成、电子驻车总成等，已进入长安UNI系列、AITO问界系列等新能源车型供应链，主要配套长安汽车、比亚迪等整车厂商\n", "plates": ["车联网/车路云"], "limit_up_days": 1, "turnover_ratio": 11.04, "first_limit_up": 1793065681, "break_limit_up_times": 2}, {"code": "603843", "name": "*ST正平", "price": 4.97, "change_pct": 9.96, "reason": "青海路桥工程施工企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1793068092, "break_limit_up_times": 8}, {"code": "600715", "name": "文投控股", "price": 1.87, "change_pct": 10.0, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.88, "first_limit_up": 1793065285, "break_limit_up_times": 6}, {"code": "300539", "name": "横河精密", "price": 19.68, "change_pct": 20.0, "reason": "公司产品包括应用于扫地机器人的高精度齿轮箱及驱动系统", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.44, "first_limit_up": 1793066691, "break_limit_up_times": 0}, {"code": "002205", "name": "国统股份", "price": 11.4, "change_pct": 10.04, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.33, "first_limit_up": 1793069397, "break_limit_up_times": 0}, {"code": "603565", "name": "中谷物流", "price": 12.58, "change_pct": 9.97, "reason": "公司为国内排名前列的集装箱物流企业，第三季度净利润同比增长149.41%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.49, "first_limit_up": 1793064675, "break_limit_up_times": 2}, {"code": "601956", "name": "东贝集团", "price": 5.54, "change_pct": 9.92, "reason": "公司在洗衣机电机、空调电机、机器人关节电机等领域均有相关技术研发储备，人形机器人关节电机目前还处于研发测试阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.15, "first_limit_up": 1793064838, "break_limit_up_times": 1}, {"code": "603813", "name": "原尚股份", "price": 24.2, "change_pct": 10.0, "reason": "公司提供汽车零部件供应链物流服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1793068454, "break_limit_up_times": 0}, {"code": "600303", "name": "曙光股份", "price": 3.11, "change_pct": 9.89, "reason": "公司主营汽车整车及车桥零部件", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.08, "first_limit_up": 1793064762, "break_limit_up_times": 1}, {"code": "002708", "name": "光洋股份", "price": 17.22, "change_pct": 10.03, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.87, "first_limit_up": 1793064603, "break_limit_up_times": 0}, {"code": "603528", "name": "多伦科技", "price": 9.85, "change_pct": 10.06, "reason": "1、公司已取得具身机器人产品销售、租赁及批量定制需求，智能交通指挥机器人已在多地试点；\n2、公司多多驾驶舱、多多教练接入DeepSeek，推动驾培产品智能化升级，并将AI应用于多项业务；\n3、公司积极探索无人驾驶领域车辆安全员及无人机飞手培训技术，并推出机场围界无人化智能防控产品", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 11.65, "first_limit_up": 1793064300, "break_limit_up_times": 1}, {"code": "002187", "name": "广百股份", "price": 5.92, "change_pct": 10.04, "reason": "1、公司是广州地区最大百货连锁零售企业，积极开发钻石DIY等定制商品，推出品牌IP盲盒；\n2、公司通过旗下广州商贸产业基金间接参股中科宇航", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.12, "first_limit_up": 1793065410, "break_limit_up_times": 2}, {"code": "000678", "name": "襄阳轴承", "price": 16.01, "change_pct": 10.03, "reason": "1、公司部分精密轴承产品可应用于谐波减速器等，目前已经完成产品试制并送样；\n2、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 20.57, "first_limit_up": 1793064849, "break_limit_up_times": 1}, {"code": "002820", "name": "桂发祥", "price": 11.21, "change_pct": 10.01, "reason": "中国麻花行业龙头", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 17.86, "first_limit_up": 1793067114, "break_limit_up_times": 0}, {"code": "002623", "name": "亚玛顿", "price": 18.78, "change_pct": 10.02, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，率先量产1.6mm超薄光伏玻璃并获评工信部制造业单项冠军，在轻量化、高透光特种光伏玻璃领域技术优势突出", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.72, "first_limit_up": 1793078358, "break_limit_up_times": 0}, {"code": "600838", "name": "上海九百", "price": 13.31, "change_pct": 10.0, "reason": "上海九百集团旗下，有位于上海市中心的静安寺珠宝古玩城，位于航华地区的九百家居和位于大华社区的九百购物中心", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 7.49, "first_limit_up": 1793064626, "break_limit_up_times": 0}, {"code": "002093", "name": "国脉科技", "price": 7.93, "change_pct": 9.99, "reason": "1、公司主要从事物联网技术服务、物联网咨询与设计服务，与主流大模型服务商合作，构建深耕于社区养老以及居家养老场景的 AI Agent；\n2、公司注册地位于福建省福州市，已在开展6G关键技术的跟踪研究和人才培养；全资子公司福州理工学院“数字福建车联网实验室”是数字福建物联网领域首批省重点实验室", "plates": ["车联网/车路云"], "limit_up_days": 2, "turnover_ratio": 6.63, "first_limit_up": 1793064651, "break_limit_up_times": 2}, {"code": "001400", "name": "江顺科技", "price": 80.28, "change_pct": 10.0, "reason": "1、公司的相关模具产品可以用于航空航天方向，参股20%公司昆山汇云在低空领域还在初期探索阶段；\n2、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1793064918, "break_limit_up_times": 0}, {"code": "002011", "name": "盾安环境", "price": 11.37, "change_pct": 9.96, "reason": "公司液冷机组产品此前主要面向储能应用场景，第三季度净利润同比增长11.94%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1793064606, "break_limit_up_times": 1}, {"code": "601566", "name": "九牧王", "price": 10.32, "change_pct": 10.02, "reason": "公司位于福建厦门市，是国内男裤龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.08, "first_limit_up": 1793064687, "break_limit_up_times": 1}, {"code": "001318", "name": "阳光乳业", "price": 13.31, "change_pct": 10.0, "reason": "公司主营业务为液态乳，包括儿童调制乳、A2牛奶", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 15.54, "first_limit_up": 1793067114, "break_limit_up_times": 6}, {"code": "603028", "name": "赛福天", "price": 10.33, "change_pct": 10.01, "reason": "1、公司已开发机器人腱绳测试样品并向多家机器人企业送测；\n2、公司是国内唯一通过太空级T疲劳测试的机器人腱绳供应商，掌握微米级钢-塑复合工艺，已获上海交大、卓益得超1200万订单", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 10.31, "first_limit_up": 1793064300, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};