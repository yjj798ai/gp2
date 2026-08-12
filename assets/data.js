const UPDATE_TIME = "2026-08-12 06:10";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续268天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "算力租赁",
    "rise": 1.24,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": 0.87,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "人形机器人",
    "rise": 1.04,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续432天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": -0.35,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": 2.88,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "5GETF",
    "code": "886084"
  },
  {
    "name": "存储芯片",
    "rise": 1.67,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续221天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 1.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "青蒿素",
    "rise": 3.72,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "商业航天",
    "rise": 1.31,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续197天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": 1.02,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "脑机接口",
    "rise": 1.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "光刻机",
    "rise": 1.96,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "芯片概念",
    "rise": 1.41,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "黄金概念",
    "rise": 0.7,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "东数西算(算力)",
    "rise": 1.13,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "CRO概念",
    "rise": 0.53,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "先进封装",
    "rise": 1.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "猪肉",
    "rise": 0.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "高盛称AI投资重点正转向人形机器人，2027年至2029年或迎规模化部署",
    "desc": "",
    "heat": 377972,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "浩淼科技",
        "code": "920856",
        "chg": 29.939077
      }
    ]
  },
  {
    "title": "谷歌(GOOGL.US)“抢滩”拉美数字经济！新增三套海底光缆系统连接智利、巴拿马等国",
    "desc": "",
    "heat": 369761,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "炬光科技",
        "code": "688167",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "Lumentum营收翻倍，光通信还能布局吗？",
    "desc": "",
    "heat": 314630,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "炬光科技",
        "code": "688167",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "出台软件和信息服务业发展“十五五”规划 上海：实施“百千万”智算集群工程",
    "desc": "",
    "heat": 292839,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能"
    ],
    "stocks": [
      {
        "name": "威士顿",
        "code": "301315",
        "chg": 19.989602
      }
    ]
  },
  {
    "title": "SK海力士重启大连二号闪存工厂，中韩两地分工布局NAND产能",
    "desc": "",
    "heat": 235352,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "炬光科技",
        "code": "688167",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "芝商所将在纽约商品交易所上市H100和B200租赁指数期货",
    "desc": "",
    "heat": 229020,
    "direction": "算力期货",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "长进光子",
        "code": "688635",
        "chg": 18.790497
      }
    ]
  },
  {
    "title": "官方公众号落地，DeepSeek的智能体工具团队来了！",
    "desc": "",
    "heat": 226125,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "威士顿",
        "code": "301315",
        "chg": 19.989602
      }
    ]
  },
  {
    "title": "光刻机产业链国产化进程提速",
    "desc": "",
    "heat": 218792,
    "direction": "光刻机",
    "themes": [
      "光刻机"
    ],
    "stocks": [
      {
        "name": "炬光科技",
        "code": "688167",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "绿电装机激增 传统网架承压 能源升级需提质 新型电网重“改”更重“智”",
    "desc": "",
    "heat": 176443,
    "direction": "绿色电力",
    "themes": [
      "绿色电力",
      "电力",
      "碳中和"
    ],
    "stocks": [
      {
        "name": "蓝盾光电",
        "code": "300862",
        "chg": 19.985385
      }
    ]
  },
  {
    "title": "云需求持续井喷，AI算力CoreWeave积压订单突破1040亿美元、上调全年指引",
    "desc": "",
    "heat": 168593,
    "direction": "云计算",
    "themes": [
      "云计算",
      "SaaS"
    ],
    "stocks": [
      {
        "name": "格尔软件",
        "code": "603232",
        "chg": 10.02445
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+10.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+4.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+3.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房地产",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "彩票",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "首发经济",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "北京城市规划",
    "change": "+2.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+2.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "REITs",
    "change": "+2.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "横琴新区",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5745,
    "price": "8.74",
    "change": "5.68",
    "market_id": "17",
    "circulate_market_value": "22011776000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.22
      },
      {
        "name": "工业大麻",
        "change_pct": 0.43
      },
      {
        "name": "中药",
        "change_pct": 0.65
      },
      {
        "name": "强势人气股",
        "change_pct": 1.84
      },
      {
        "name": "保健品",
        "change_pct": 1.2
      },
      {
        "name": "民营医院",
        "change_pct": 1.67
      },
      {
        "name": "医药",
        "change_pct": 0.57
      },
      {
        "name": "化学原料药",
        "change_pct": 0.77
      },
      {
        "name": "流感",
        "change_pct": 0.68
      },
      {
        "name": "振兴东北",
        "change_pct": 1.31
      },
      {
        "name": "食品",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 5,
    "hot_rank_chg": 38,
    "stock_cnt": 5745,
    "price": "6.42",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "14120072000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 1.26
      },
      {
        "name": "轮胎",
        "change_pct": 0.76
      },
      {
        "name": "冷链",
        "change_pct": 1.29
      },
      {
        "name": "机器人",
        "change_pct": 1.04
      },
      {
        "name": "智能制造",
        "change_pct": 1.08
      },
      {
        "name": "工业母机",
        "change_pct": 1.53
      },
      {
        "name": "减速器",
        "change_pct": 0.94
      },
      {
        "name": "头盔",
        "change_pct": 0.85
      },
      {
        "name": "人形机器人",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 11,
    "hot_rank_chg": 16,
    "stock_cnt": 5745,
    "price": "8.47",
    "change": "1.80",
    "market_id": "33",
    "circulate_market_value": "13769626000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.22
      },
      {
        "name": "电竞",
        "change_pct": 0.94
      },
      {
        "name": "手游",
        "change_pct": 0.59
      },
      {
        "name": "强势人气股",
        "change_pct": 1.84
      },
      {
        "name": "人工智能",
        "change_pct": 0.96
      },
      {
        "name": "游戏",
        "change_pct": 0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.02
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.84
      },
      {
        "name": "快手概念股",
        "change_pct": 1.73
      },
      {
        "name": "元宇宙",
        "change_pct": 1.01
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.14
      },
      {
        "name": "web3.0",
        "change_pct": 1.7
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.04
      },
      {
        "name": "数据要素",
        "change_pct": 0.94
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.35
      },
      {
        "name": "AI营销",
        "change_pct": 1.57
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.71
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.44
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.52
      },
      {
        "name": "人形机器人",
        "change_pct": 1.07
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.83
      },
      {
        "name": "多模态",
        "change_pct": 1.06
      },
      {
        "name": "AI视频",
        "change_pct": 1.43
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.44
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 13,
    "hot_rank_chg": 12,
    "stock_cnt": 5745,
    "price": "11.04",
    "change": "4.85",
    "market_id": "33",
    "circulate_market_value": "9780926800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.03
      },
      {
        "name": "手机产业链",
        "change_pct": 1.14
      },
      {
        "name": "超高清视频",
        "change_pct": 1.27
      },
      {
        "name": "锂电池",
        "change_pct": 0.91
      },
      {
        "name": "强势人气股",
        "change_pct": 1.84
      },
      {
        "name": "OLED",
        "change_pct": 1.41
      },
      {
        "name": "包装印刷",
        "change_pct": 1.46
      },
      {
        "name": "光伏",
        "change_pct": 1.62
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.96
      },
      {
        "name": "小米概念股",
        "change_pct": 1.02
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.31
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.53
      },
      {
        "name": "华为产业链",
        "change_pct": 1.31
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 14,
    "hot_rank_chg": -8,
    "stock_cnt": 5745,
    "price": "12.11",
    "change": "-4.95",
    "market_id": "33",
    "circulate_market_value": "5623753400.00",
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
        "name": "云计算数据中心",
        "change_pct": 1.04
      },
      {
        "name": "水利",
        "change_pct": 0.9
      },
      {
        "name": "大数据",
        "change_pct": 0.95
      },
      {
        "name": "海绵城市",
        "change_pct": 0.96
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.9
      },
      {
        "name": "数字经济",
        "change_pct": 1.02
      },
      {
        "name": "大基建",
        "change_pct": 0.75
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.14
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.36
      },
      {
        "name": "国企改革",
        "change_pct": 0.83
      },
      {
        "name": "旧改",
        "change_pct": 1.8
      },
      {
        "name": "西部大开发",
        "change_pct": 0.03
      },
      {
        "name": "低空经济",
        "change_pct": 0.98
      },
      {
        "name": "房屋检测",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 19,
    "hot_rank_chg": 5,
    "stock_cnt": 5745,
    "price": "12.91",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3672657600.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "9",
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.05
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": 1.84
      },
      {
        "name": "教育",
        "change_pct": 1.28
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.91
      },
      {
        "name": "职业教育",
        "change_pct": 2.03
      },
      {
        "name": "在线教育",
        "change_pct": 1.47
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.62
      },
      {
        "name": "华为产业链",
        "change_pct": 1.31
      },
      {
        "name": "智谱AI",
        "change_pct": 1.04
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 21,
    "hot_rank_chg": -4,
    "stock_cnt": 5745,
    "price": "10.99",
    "change": "8.60",
    "market_id": "33",
    "circulate_market_value": "22881200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.68
      },
      {
        "name": "足球",
        "change_pct": 1.56
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.87
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.89
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.53
      },
      {
        "name": "大消费",
        "change_pct": 0.65
      },
      {
        "name": "盲盒",
        "change_pct": 1.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.72
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.37
      },
      {
        "name": "首发经济",
        "change_pct": 2.68
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.66
      },
      {
        "name": "服务消费",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 22,
    "hot_rank_chg": 38,
    "stock_cnt": 5745,
    "price": "12.91",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "6366646100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.35
      },
      {
        "name": "彩票",
        "change_pct": 2.76
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "包装印刷",
        "change_pct": 1.42
      },
      {
        "name": "数字经济",
        "change_pct": 0.99
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.12
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.01
      },
      {
        "name": "ETC",
        "change_pct": 0.85
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.69
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.67
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.48
      },
      {
        "name": "英伟达概念",
        "change_pct": 1.21
      },
      {
        "name": "区块链",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 23,
    "hot_rank_chg": 61,
    "stock_cnt": 5745,
    "price": "5.49",
    "change": "3.40",
    "market_id": "33",
    "circulate_market_value": "32084296000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.13
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "水利",
        "change_pct": 0.89
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.55
      },
      {
        "name": "大数据",
        "change_pct": 0.92
      },
      {
        "name": "园林",
        "change_pct": 1.98
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.02
      },
      {
        "name": "数字经济",
        "change_pct": 0.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.8
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.19
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.68
      },
      {
        "name": "快手概念股",
        "change_pct": 1.69
      },
      {
        "name": "IGBT",
        "change_pct": 0.92
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.32
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.31
      },
      {
        "name": "氮化镓",
        "change_pct": 1.56
      },
      {
        "name": "AI营销",
        "change_pct": 1.5
      },
      {
        "name": "多模态",
        "change_pct": 1.03
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.34
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.66
      },
      {
        "name": "区块链",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 28,
    "hot_rank_chg": 3,
    "stock_cnt": 5745,
    "price": "5.69",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4071445400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "《欢迎来龙餐馆》上映",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.68
      },
      {
        "name": "旅游",
        "change_pct": 0.94
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.37
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 29,
    "hot_rank_chg": 18,
    "stock_cnt": 5745,
    "price": "4.72",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "15427028000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "算力",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 3.27
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "养老产业",
        "change_pct": 1.22
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.23
      },
      {
        "name": "民营医院",
        "change_pct": 1.6
      },
      {
        "name": "地摊经济",
        "change_pct": 1.76
      }
    ]
  },
  {
    "code": "002248",
    "name": "华东数控",
    "hot_rank": 33,
    "hot_rank_chg": 32,
    "stock_cnt": 5745,
    "price": "12.17",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3742221500.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "工业母机",
    "xgb_concepts": [
      {
        "name": "高铁轨交",
        "change_pct": 1.05
      },
      {
        "name": "智能制造",
        "change_pct": 1.06
      },
      {
        "name": "工业母机",
        "change_pct": 1.51
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 41,
    "hot_rank_chg": -15,
    "stock_cnt": 5745,
    "price": "5.90",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "209019760000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.51
      },
      {
        "name": "手机产业链",
        "change_pct": 1.11
      },
      {
        "name": "超高清视频",
        "change_pct": 1.24
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.24
      },
      {
        "name": "电竞",
        "change_pct": 0.92
      },
      {
        "name": "半导体",
        "change_pct": 1.47
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.91
      },
      {
        "name": "VR&AR",
        "change_pct": 1.24
      },
      {
        "name": "OLED",
        "change_pct": 1.38
      },
      {
        "name": "京津冀",
        "change_pct": 1.04
      },
      {
        "name": "物联网",
        "change_pct": 0.82
      },
      {
        "name": "指纹识别",
        "change_pct": 1.54
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.04
      },
      {
        "name": "白马股",
        "change_pct": -0.06
      },
      {
        "name": "智能制造",
        "change_pct": 1.06
      },
      {
        "name": "小米概念股",
        "change_pct": 1.02
      },
      {
        "name": "国产芯片",
        "change_pct": 1.38
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.28
      },
      {
        "name": "全息概念",
        "change_pct": 1.89
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.19
      },
      {
        "name": "MicroLED",
        "change_pct": 1.82
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.99
      },
      {
        "name": "智能手表",
        "change_pct": 0.67
      },
      {
        "name": "MiniLED",
        "change_pct": 1.65
      },
      {
        "name": "传感器",
        "change_pct": 1.42
      },
      {
        "name": "大硅片",
        "change_pct": 1.74
      },
      {
        "name": "AI PC",
        "change_pct": 0.38
      },
      {
        "name": "华为产业链",
        "change_pct": 1.3
      },
      {
        "name": "回购",
        "change_pct": 0.58
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.71
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.44
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 42,
    "hot_rank_chg": 12,
    "stock_cnt": 5745,
    "price": "11.13",
    "change": "4.90",
    "market_id": "17",
    "circulate_market_value": "19913109000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.8
      },
      {
        "name": "纯碱",
        "change_pct": 0.32
      },
      {
        "name": "食品",
        "change_pct": 1.06
      },
      {
        "name": "土壤修复",
        "change_pct": 1.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.12
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.29
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 45,
    "hot_rank_chg": 109,
    "stock_cnt": 5745,
    "price": "3.88",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "7773103500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI智能体",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 1.05
      },
      {
        "name": "数字孪生",
        "change_pct": 1.03
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.4
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.91
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.05
      },
      {
        "name": "人脸识别",
        "change_pct": 0.7
      },
      {
        "name": "智慧停车",
        "change_pct": 0.99
      },
      {
        "name": "物联网",
        "change_pct": 0.82
      },
      {
        "name": "大数据",
        "change_pct": 0.92
      },
      {
        "name": "智慧城市",
        "change_pct": 1.24
      },
      {
        "name": "雄安新区",
        "change_pct": 1.32
      },
      {
        "name": "机器人",
        "change_pct": 1.02
      },
      {
        "name": "数字经济",
        "change_pct": 0.99
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.87
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.8
      },
      {
        "name": "建筑节能",
        "change_pct": 1.38
      },
      {
        "name": "旧改",
        "change_pct": 1.76
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.86
      },
      {
        "name": "华为产业链",
        "change_pct": 1.3
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.86
      },
      {
        "name": "区块链",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 49,
    "hot_rank_chg": 52,
    "stock_cnt": 5745,
    "price": "6.29",
    "change": "0.32",
    "market_id": "17",
    "circulate_market_value": "77971400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.59
      },
      {
        "name": "核电",
        "change_pct": 1.19
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.07
      },
      {
        "name": "水电",
        "change_pct": -0.46
      },
      {
        "name": "火电",
        "change_pct": -0.23
      },
      {
        "name": "光伏",
        "change_pct": 1.6
      },
      {
        "name": "风电",
        "change_pct": 0.99
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "算电协同",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 50,
    "hot_rank_chg": -11,
    "stock_cnt": 5745,
    "price": "6.88",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "7106598300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.1
      },
      {
        "name": "锂电池",
        "change_pct": 0.87
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.53
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.19
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 57,
    "hot_rank_chg": 66,
    "stock_cnt": 5745,
    "price": "11.35",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6833033900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "模块化数据中心",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.87
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.8
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.12
      },
      {
        "name": "国资入股",
        "change_pct": 1.22
      },
      {
        "name": "华为产业链",
        "change_pct": 1.3
      }
    ]
  },
  {
    "code": "000859",
    "name": "国风新材",
    "hot_rank": 60,
    "hot_rank_chg": -42,
    "stock_cnt": 5745,
    "price": "10.19",
    "change": "-2.77",
    "market_id": "33",
    "circulate_market_value": "9129478500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.51
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.69
      },
      {
        "name": "装修装饰",
        "change_pct": 1.79
      },
      {
        "name": "碳基材料",
        "change_pct": 1.09
      },
      {
        "name": "建筑节能",
        "change_pct": 1.38
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.81
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 61,
    "hot_rank_chg": 53,
    "stock_cnt": 5745,
    "price": "3.86",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "8106593900.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.61
      },
      {
        "name": "维生素",
        "change_pct": 2.7
      },
      {
        "name": "基因测序",
        "change_pct": 0.18
      },
      {
        "name": "民营医院",
        "change_pct": 1.6
      },
      {
        "name": "医药",
        "change_pct": 0.55
      },
      {
        "name": "化学原料药",
        "change_pct": 0.75
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 62,
    "hot_rank_chg": -27,
    "stock_cnt": 5745,
    "price": "5.13",
    "change": "2.19",
    "market_id": "17",
    "circulate_market_value": "8019812900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.11
      },
      {
        "name": "共享经济",
        "change_pct": 1.15
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "旅游",
        "change_pct": 0.94
      },
      {
        "name": "物业管理",
        "change_pct": 2.8
      }
    ]
  },
  {
    "code": "600126",
    "name": "杭钢股份",
    "hot_rank": 63,
    "hot_rank_chg": -17,
    "stock_cnt": 5745,
    "price": "7.14",
    "change": "-3.12",
    "market_id": "17",
    "circulate_market_value": "24113130000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.02
      },
      {
        "name": "钢铁",
        "change_pct": 0.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.42
      },
      {
        "name": "数字经济",
        "change_pct": 0.99
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.87
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.22
      },
      {
        "name": "国资云",
        "change_pct": 0.57
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.12
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 65,
    "hot_rank_chg": 24,
    "stock_cnt": 5745,
    "price": "4.20",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "2736690300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "乳业",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.19
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.27
      },
      {
        "name": "股权转让",
        "change_pct": 1.37
      },
      {
        "name": "一带一路",
        "change_pct": 0.8
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.01
      },
      {
        "name": "智慧城市",
        "change_pct": 1.24
      },
      {
        "name": "食品",
        "change_pct": 1.06
      },
      {
        "name": "基因编辑",
        "change_pct": 0.39
      },
      {
        "name": "社区团购",
        "change_pct": 1.75
      },
      {
        "name": "大农业",
        "change_pct": 0.8
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.33
      },
      {
        "name": "广西概念",
        "change_pct": 0.82
      },
      {
        "name": "饮料",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 79,
    "hot_rank_chg": 512,
    "stock_cnt": 5745,
    "price": "4.37",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "11555343500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "装修装饰",
        "change_pct": 1.79
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.74
      },
      {
        "name": "破净股",
        "change_pct": 0.9
      },
      {
        "name": "航天",
        "change_pct": 1.26
      },
      {
        "name": "旧改",
        "change_pct": 1.76
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 82,
    "hot_rank_chg": -33,
    "stock_cnt": 5745,
    "price": "12.79",
    "change": "-0.62",
    "market_id": "33",
    "circulate_market_value": "8759901700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.04
      },
      {
        "name": "核电",
        "change_pct": 1.19
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "充电桩",
        "change_pct": 1.17
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.93
      },
      {
        "name": "储能",
        "change_pct": 1.28
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.87
      },
      {
        "name": "智能电网",
        "change_pct": 1.08
      },
      {
        "name": "核聚变",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 83,
    "hot_rank_chg": 3,
    "stock_cnt": 5745,
    "price": "12.09",
    "change": "2.11",
    "market_id": "33",
    "circulate_market_value": "9781039600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.4
      },
      {
        "name": "大飞机",
        "change_pct": 0.98
      },
      {
        "name": "北斗导航",
        "change_pct": 1.42
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.05
      },
      {
        "name": "军民融合",
        "change_pct": 1.24
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.55
      },
      {
        "name": "军工",
        "change_pct": 1.08
      },
      {
        "name": "碳纤维",
        "change_pct": 0.91
      },
      {
        "name": "无人机",
        "change_pct": 1.3
      },
      {
        "name": "航天",
        "change_pct": 1.26
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.37
      },
      {
        "name": "低空经济",
        "change_pct": 0.97
      },
      {
        "name": "海洋经济",
        "change_pct": 0.86
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 88,
    "hot_rank_chg": 20,
    "stock_cnt": 5745,
    "price": "12.34",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "15834671000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.13
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "智能制造",
        "change_pct": 1.06
      },
      {
        "name": "工业互联网",
        "change_pct": 0.74
      },
      {
        "name": "培育钻石",
        "change_pct": 1.25
      },
      {
        "name": "金刚线",
        "change_pct": 1.54
      },
      {
        "name": "国资入股",
        "change_pct": 1.22
      },
      {
        "name": "深地经济",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 95,
    "hot_rank_chg": 722,
    "stock_cnt": 5745,
    "price": "7.33",
    "change": "6.08",
    "market_id": "33",
    "circulate_market_value": "12652786600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.19
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.02
      },
      {
        "name": "大数据",
        "change_pct": 0.92
      },
      {
        "name": "百度概念股",
        "change_pct": 1.16
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.8
      },
      {
        "name": "传媒",
        "change_pct": 1.27
      },
      {
        "name": "快手概念股",
        "change_pct": 1.69
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "横琴新区",
        "change_pct": 2.19
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.53
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.33
      },
      {
        "name": "AI营销",
        "change_pct": 1.5
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.72
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.66
      },
      {
        "name": "区块链",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 96,
    "hot_rank_chg": 24,
    "stock_cnt": 5745,
    "price": "5.85",
    "change": "-0.17",
    "market_id": "33",
    "circulate_market_value": "7585903500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.61
      },
      {
        "name": "创新药",
        "change_pct": 0.22
      },
      {
        "name": "央企改革",
        "change_pct": 0.59
      },
      {
        "name": "医疗器械",
        "change_pct": 0.91
      },
      {
        "name": "强势人气股",
        "change_pct": 1.82
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.91
      },
      {
        "name": "保健品",
        "change_pct": 1.19
      },
      {
        "name": "民营医院",
        "change_pct": 1.6
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.38
      },
      {
        "name": "医药",
        "change_pct": 0.55
      },
      {
        "name": "化学原料药",
        "change_pct": 0.75
      },
      {
        "name": "海南概念",
        "change_pct": 0.9
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 1.28
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.29
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.21
      },
      {
        "name": "食品",
        "change_pct": 1.06
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.86
      },
      {
        "name": "自贸区",
        "change_pct": 1.26
      },
      {
        "name": "合成生物",
        "change_pct": 0.64
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 97,
    "hot_rank_chg": -46,
    "stock_cnt": 5745,
    "price": "3.01",
    "change": "-1.31",
    "market_id": "33",
    "circulate_market_value": "8004729600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.35
      },
      {
        "name": "金融科技",
        "change_pct": 0.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.94
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.25
      },
      {
        "name": "数字人民币",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 99,
    "hot_rank_chg": 17,
    "stock_cnt": 5745,
    "price": "11.75",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "8704136800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 3.27
      },
      {
        "name": "光通信",
        "change_pct": 3.17
      },
      {
        "name": "京津冀",
        "change_pct": 1.04
      },
      {
        "name": "土地流转",
        "change_pct": 1.58
      },
      {
        "name": "北京城市规划",
        "change_pct": 2.51
      },
      {
        "name": "物业管理",
        "change_pct": 2.8
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600664", "name": "哈药股份", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5745, "price": "8.74", "change": "5.68", "market_id": "17", "circulate_market_value": "22011776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.22}, {"name": "工业大麻", "change_pct": 0.43}, {"name": "中药", "change_pct": 0.65}, {"name": "强势人气股", "change_pct": 1.84}, {"name": "保健品", "change_pct": 1.2}, {"name": "民营医院", "change_pct": 1.67}, {"name": "医药", "change_pct": 0.57}, {"name": "化学原料药", "change_pct": 0.77}, {"name": "流感", "change_pct": 0.68}, {"name": "振兴东北", "change_pct": 1.31}, {"name": "食品", "change_pct": 1.08}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5745, "price": "21.65", "change": "2.12", "market_id": "17", "circulate_market_value": "45281888000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5745, "price": "14.03", "change": "10.04", "market_id": "17", "circulate_market_value": "5395203300.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "CRO"}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "65.42", "change": "-0.68", "market_id": "33", "circulate_market_value": "75668635000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 5, "hot_rank_chg": 38, "stock_cnt": 5745, "price": "6.42", "change": "9.93", "market_id": "33", "circulate_market_value": "14120072000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "工业自动化", "change_pct": 1.26}, {"name": "轮胎", "change_pct": 0.76}, {"name": "冷链", "change_pct": 1.29}, {"name": "机器人", "change_pct": 1.04}, {"name": "智能制造", "change_pct": 1.08}, {"name": "工业母机", "change_pct": 1.53}, {"name": "减速器", "change_pct": 0.94}, {"name": "头盔", "change_pct": 0.85}, {"name": "人形机器人", "change_pct": 1.07}]}, {"code": "603629", "name": "利通电子", "hot_rank": 6, "hot_rank_chg": 38, "stock_cnt": 5745, "price": "117.94", "change": "-0.24", "market_id": "17", "circulate_market_value": "42543718000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5745, "price": "104.32", "change": "4.08", "market_id": "33", "circulate_market_value": "68157328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 8, "hot_rank_chg": 5, "stock_cnt": 5745, "price": "53.39", "change": "5.93", "market_id": "17", "circulate_market_value": "240417250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 9, "hot_rank_chg": 54, "stock_cnt": 5745, "price": "33.33", "change": "10.00", "market_id": "17", "circulate_market_value": "11229542000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "000815", "name": "美利云", "hot_rank": 10, "hot_rank_chg": 12, "stock_cnt": 5745, "price": "18.72", "change": "-0.85", "market_id": "33", "circulate_market_value": "13015324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 11, "hot_rank_chg": 16, "stock_cnt": 5745, "price": "8.47", "change": "1.80", "market_id": "33", "circulate_market_value": "13769626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.22}, {"name": "电竞", "change_pct": 0.94}, {"name": "手游", "change_pct": 0.59}, {"name": "强势人气股", "change_pct": 1.84}, {"name": "人工智能", "change_pct": 0.96}, {"name": "游戏", "change_pct": 0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.02}, {"name": "腾讯概念股", "change_pct": 0.84}, {"name": "快手概念股", "change_pct": 1.73}, {"name": "元宇宙", "change_pct": 1.01}, {"name": "虚拟数字人", "change_pct": 1.35}, {"name": "东数西算/算力", "change_pct": 1.14}, {"name": "web3.0", "change_pct": 1.7}, {"name": "AIGC概念", "change_pct": 1.04}, {"name": "数据要素", "change_pct": 0.94}, {"name": "字节跳动概念股", "change_pct": 1.35}, {"name": "AI营销", "change_pct": 1.57}, {"name": "ChatGPT", "change_pct": 0.71}, {"name": "智能眼镜/MR头显", "change_pct": 1.44}, {"name": "人工智能大模型", "change_pct": 0.52}, {"name": "人形机器人", "change_pct": 1.07}, {"name": "短剧/互动影游", "change_pct": 1.83}, {"name": "多模态", "change_pct": 1.06}, {"name": "AI视频", "change_pct": 1.43}, {"name": "IP经济/谷子经济", "change_pct": 1.44}, {"name": "小红书概念股", "change_pct": 1.74}]}, {"code": "001258", "name": "立新能源", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5745, "price": "16.38", "change": "2.89", "market_id": "33", "circulate_market_value": "15297141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 13, "hot_rank_chg": 12, "stock_cnt": 5745, "price": "11.04", "change": "4.85", "market_id": "33", "circulate_market_value": "9780926800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.03}, {"name": "手机产业链", "change_pct": 1.14}, {"name": "超高清视频", "change_pct": 1.27}, {"name": "锂电池", "change_pct": 0.91}, {"name": "强势人气股", "change_pct": 1.84}, {"name": "OLED", "change_pct": 1.41}, {"name": "包装印刷", "change_pct": 1.46}, {"name": "光伏", "change_pct": 1.62}, {"name": "新能源汽车", "change_pct": 0.96}, {"name": "小米概念股", "change_pct": 1.02}, {"name": "液晶面板/LCD", "change_pct": 1.31}, {"name": "可降解塑料", "change_pct": 0.53}, {"name": "华为产业链", "change_pct": 1.31}, {"name": "PET复合铜箔", "change_pct": 1.87}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 14, "hot_rank_chg": -8, "stock_cnt": 5745, "price": "12.11", "change": "-4.95", "market_id": "33", "circulate_market_value": "5623753400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.83}, {"name": "云计算数据中心", "change_pct": 1.04}, {"name": "水利", "change_pct": 0.9}, {"name": "大数据", "change_pct": 0.95}, {"name": "海绵城市", "change_pct": 0.96}, {"name": "风电", "change_pct": 1.05}, {"name": "乡村振兴", "change_pct": 0.9}, {"name": "数字经济", "change_pct": 1.02}, {"name": "大基建", "change_pct": 0.75}, {"name": "东数西算/算力", "change_pct": 1.14}, {"name": "新型城镇化", "change_pct": 1.36}, {"name": "国企改革", "change_pct": 0.83}, {"name": "旧改", "change_pct": 1.8}, {"name": "西部大开发", "change_pct": 0.03}, {"name": "低空经济", "change_pct": 0.98}, {"name": "房屋检测", "change_pct": 0.89}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 15, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "30.39", "change": "9.99", "market_id": "17", "circulate_market_value": "12186390000.00", "change_type": "1", "change_section": "12", "change_days": "8", "change_reason": "乳业"}, {"code": "600602", "name": "云赛智联", "hot_rank": 16, "hot_rank_chg": 103, "stock_cnt": 5745, "price": "20.25", "change": "9.99", "market_id": "17", "circulate_market_value": "21754636000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "智算中心"}, {"code": "600206", "name": "有研新材", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "52.48", "change": "-0.32", "market_id": "17", "circulate_market_value": "44427119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "37.20", "change": "-0.21", "market_id": "33", "circulate_market_value": "40130145000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 19, "hot_rank_chg": 5, "stock_cnt": 5745, "price": "12.91", "change": "9.97", "market_id": "33", "circulate_market_value": "3672657600.00", "change_type": "1", "change_section": "13", "change_days": "9", "change_reason": "具身智能", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.05}, {"name": "ST摘帽", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": 1.84}, {"name": "教育", "change_pct": 1.28}, {"name": "阿里巴巴概念股", "change_pct": 0.91}, {"name": "职业教育", "change_pct": 2.03}, {"name": "在线教育", "change_pct": 1.47}, {"name": "华为鸿蒙", "change_pct": 0.62}, {"name": "华为产业链", "change_pct": 1.31}, {"name": "智谱AI", "change_pct": 1.04}]}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -8, "stock_cnt": 5745, "price": "200.14", "change": "3.25", "market_id": "33", "circulate_market_value": "277500020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 21, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "10.99", "change": "8.60", "market_id": "33", "circulate_market_value": "22881200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 1.68}, {"name": "足球", "change_pct": 1.56}, {"name": "阿里巴巴概念股", "change_pct": 0.87}, {"name": "拼多多概念股", "change_pct": 0.89}, {"name": "网红/MCN", "change_pct": 1.53}, {"name": "大消费", "change_pct": 0.65}, {"name": "盲盒", "change_pct": 1.02}, {"name": "短剧/互动影游", "change_pct": 1.72}, {"name": "IP经济/谷子经济", "change_pct": 1.37}, {"name": "首发经济", "change_pct": 2.68}, {"name": "小红书概念股", "change_pct": 1.66}, {"name": "服务消费", "change_pct": 1.55}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 22, "hot_rank_chg": 38, "stock_cnt": 5745, "price": "12.91", "change": "9.97", "market_id": "33", "circulate_market_value": "6366646100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.35}, {"name": "彩票", "change_pct": 2.76}, {"name": "人工智能", "change_pct": 0.94}, {"name": "包装印刷", "change_pct": 1.42}, {"name": "数字经济", "change_pct": 0.99}, {"name": "东数西算/算力", "change_pct": 1.12}, {"name": "AIGC概念", "change_pct": 1.01}, {"name": "ETC", "change_pct": 0.85}, {"name": "词元概念/Token", "change_pct": 0.69}, {"name": "ChatGPT", "change_pct": 0.67}, {"name": "人工智能大模型", "change_pct": 0.48}, {"name": "英伟达概念", "change_pct": 1.21}, {"name": "区块链", "change_pct": 1.06}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 23, "hot_rank_chg": 61, "stock_cnt": 5745, "price": "5.49", "change": "3.40", "market_id": "33", "circulate_market_value": "32084296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.13}, {"name": "人工智能", "change_pct": 0.94}, {"name": "水利", "change_pct": 0.89}, {"name": "直播/短视频", "change_pct": 1.55}, {"name": "大数据", "change_pct": 0.92}, {"name": "园林", "change_pct": 1.98}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.02}, {"name": "数字经济", "change_pct": 0.99}, {"name": "腾讯概念股", "change_pct": 0.8}, {"name": "理想汽车概念股", "change_pct": 1.19}, {"name": "第三代半导体", "change_pct": 1.68}, {"name": "快手概念股", "change_pct": 1.69}, {"name": "IGBT", "change_pct": 0.92}, {"name": "虚拟数字人", "change_pct": 1.32}, {"name": "AIGC概念", "change_pct": 1.01}, {"name": "字节跳动概念股", "change_pct": 1.31}, {"name": "氮化镓", "change_pct": 1.56}, {"name": "AI营销", "change_pct": 1.5}, {"name": "多模态", "change_pct": 1.03}, {"name": "液冷服务器", "change_pct": 1.34}, {"name": "小红书概念股", "change_pct": 1.66}, {"name": "区块链", "change_pct": 1.06}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5745, "price": "918.02", "change": "3.50", "market_id": "33", "circulate_market_value": "1018946910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "58.88", "change": "2.19", "market_id": "17", "circulate_market_value": "144470690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 27, "hot_rank_chg": -12, "stock_cnt": 5745, "price": "17.54", "change": "4.41", "market_id": "17", "circulate_market_value": "25831278000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5745, "price": "5.69", "change": "10.06", "market_id": "33", "circulate_market_value": "4071445400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "《欢迎来龙餐馆》上映", "xgb_concepts": [{"name": "影视", "change_pct": 1.68}, {"name": "旅游", "change_pct": 0.94}, {"name": "IP经济/谷子经济", "change_pct": 1.37}]}, {"code": "600162", "name": "香江控股", "hot_rank": 29, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "4.72", "change": "10.02", "market_id": "17", "circulate_market_value": "15427028000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力", "xgb_concepts": [{"name": "房地产", "change_pct": 3.27}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "养老产业", "change_pct": 1.22}, {"name": "粤港澳大湾区", "change_pct": 1.23}, {"name": "民营医院", "change_pct": 1.6}, {"name": "地摊经济", "change_pct": 1.76}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 30, "hot_rank_chg": 28, "stock_cnt": 5745, "price": "15.88", "change": "1.79", "market_id": "33", "circulate_market_value": "55229533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 31, "hot_rank_chg": -11, "stock_cnt": 5745, "price": "77.65", "change": "-0.03", "market_id": "17", "circulate_market_value": "138948040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 32, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "411.88", "change": "2.38", "market_id": "17", "circulate_market_value": "275338460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002248", "name": "华东数控", "hot_rank": 33, "hot_rank_chg": 32, "stock_cnt": 5745, "price": "12.17", "change": "10.04", "market_id": "33", "circulate_market_value": "3742221500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "工业母机", "xgb_concepts": [{"name": "高铁轨交", "change_pct": 1.05}, {"name": "智能制造", "change_pct": 1.06}, {"name": "工业母机", "change_pct": 1.51}]}, {"code": "603259", "name": "药明康德", "hot_rank": 34, "hot_rank_chg": -18, "stock_cnt": 5745, "price": "158.69", "change": "-0.95", "market_id": "17", "circulate_market_value": "392484840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 35, "hot_rank_chg": 5, "stock_cnt": 5745, "price": "16.67", "change": "6.18", "market_id": "17", "circulate_market_value": "2667200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "36.64", "change": "-2.03", "market_id": "33", "circulate_market_value": "104764462000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 37, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "18.03", "change": "0.56", "market_id": "33", "circulate_market_value": "59907411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 38, "hot_rank_chg": 52, "stock_cnt": 5745, "price": "26.78", "change": "1.90", "market_id": "17", "circulate_market_value": "23085763000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 39, "hot_rank_chg": -25, "stock_cnt": 5745, "price": "72.26", "change": "-0.85", "market_id": "33", "circulate_market_value": "61643054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 40, "hot_rank_chg": -2, "stock_cnt": 5745, "price": "70.18", "change": "2.99", "market_id": "33", "circulate_market_value": "102017796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5745, "price": "5.90", "change": "0.00", "market_id": "33", "circulate_market_value": "209019760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.51}, {"name": "手机产业链", "change_pct": 1.11}, {"name": "超高清视频", "change_pct": 1.24}, {"name": "苹果产业链", "change_pct": 1.24}, {"name": "电竞", "change_pct": 0.92}, {"name": "半导体", "change_pct": 1.47}, {"name": "人工智能", "change_pct": 0.94}, {"name": "互联网医疗", "change_pct": 0.91}, {"name": "VR&AR", "change_pct": 1.24}, {"name": "OLED", "change_pct": 1.38}, {"name": "京津冀", "change_pct": 1.04}, {"name": "物联网", "change_pct": 0.82}, {"name": "指纹识别", "change_pct": 1.54}, {"name": "汽车零部件", "change_pct": 1.04}, {"name": "白马股", "change_pct": -0.06}, {"name": "智能制造", "change_pct": 1.06}, {"name": "小米概念股", "change_pct": 1.02}, {"name": "国产芯片", "change_pct": 1.38}, {"name": "液晶面板/LCD", "change_pct": 1.28}, {"name": "全息概念", "change_pct": 1.89}, {"name": "理想汽车概念股", "change_pct": 1.19}, {"name": "MicroLED", "change_pct": 1.82}, {"name": "钙钛矿电池", "change_pct": 1.99}, {"name": "智能手表", "change_pct": 0.67}, {"name": "MiniLED", "change_pct": 1.65}, {"name": "传感器", "change_pct": 1.42}, {"name": "大硅片", "change_pct": 1.74}, {"name": "AI PC", "change_pct": 0.38}, {"name": "华为产业链", "change_pct": 1.3}, {"name": "回购", "change_pct": 0.58}, {"name": "光电共封装CPO", "change_pct": 3.71}, {"name": "智能眼镜/MR头显", "change_pct": 1.44}, {"name": "玻璃基板封装", "change_pct": 1.26}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 42, "hot_rank_chg": 12, "stock_cnt": 5745, "price": "11.13", "change": "4.90", "market_id": "17", "circulate_market_value": "19913109000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.8}, {"name": "纯碱", "change_pct": 0.32}, {"name": "食品", "change_pct": 1.06}, {"name": "土壤修复", "change_pct": 1.01}, {"name": "东数西算/算力", "change_pct": 1.12}, {"name": "OpenClaw概念", "change_pct": 0.29}, {"name": "DeepSeek概念股", "change_pct": 0.38}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 43, "hot_rank_chg": -11, "stock_cnt": 5745, "price": "42.88", "change": "0.45", "market_id": "17", "circulate_market_value": "170301650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 44, "hot_rank_chg": -23, "stock_cnt": 5745, "price": "65.07", "change": "-1.42", "market_id": "17", "circulate_market_value": "1291255080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002421", "name": "达实智能", "hot_rank": 45, "hot_rank_chg": 109, "stock_cnt": 5745, "price": "3.88", "change": "9.91", "market_id": "33", "circulate_market_value": "7773103500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI智能体", "xgb_concepts": [{"name": "边缘计算", "change_pct": 1.05}, {"name": "数字孪生", "change_pct": 1.03}, {"name": "深圳本地股", "change_pct": 1.4}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "人工智能", "change_pct": 0.94}, {"name": "互联网医疗", "change_pct": 0.91}, {"name": "云计算数据中心", "change_pct": 1.02}, {"name": "高铁轨交", "change_pct": 1.05}, {"name": "人脸识别", "change_pct": 0.7}, {"name": "智慧停车", "change_pct": 0.99}, {"name": "物联网", "change_pct": 0.82}, {"name": "大数据", "change_pct": 0.92}, {"name": "智慧城市", "change_pct": 1.24}, {"name": "雄安新区", "change_pct": 1.32}, {"name": "机器人", "change_pct": 1.02}, {"name": "数字经济", "change_pct": 0.99}, {"name": "阿里巴巴概念股", "change_pct": 0.87}, {"name": "腾讯概念股", "change_pct": 0.8}, {"name": "建筑节能", "change_pct": 1.38}, {"name": "旧改", "change_pct": 1.76}, {"name": "医疗信息化", "change_pct": 1.21}, {"name": "新冠病毒防治", "change_pct": 0.86}, {"name": "华为产业链", "change_pct": 1.3}, {"name": "医疗耗材供应链SPD", "change_pct": 1.86}, {"name": "区块链", "change_pct": 1.06}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 46, "hot_rank_chg": -10, "stock_cnt": 5745, "price": "33.42", "change": "0.72", "market_id": "17", "circulate_market_value": "688511930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 47, "hot_rank_chg": 55, "stock_cnt": 5745, "price": "154.01", "change": "2.48", "market_id": "33", "circulate_market_value": "49055688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 48, "hot_rank_chg": 7, "stock_cnt": 5745, "price": "73.08", "change": "3.82", "market_id": "33", "circulate_market_value": "2389602200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 49, "hot_rank_chg": 52, "stock_cnt": 5745, "price": "6.29", "change": "0.32", "market_id": "17", "circulate_market_value": "77971400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.59}, {"name": "核电", "change_pct": 1.19}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "电力体制改革", "change_pct": 0.07}, {"name": "水电", "change_pct": -0.46}, {"name": "火电", "change_pct": -0.23}, {"name": "光伏", "change_pct": 1.6}, {"name": "风电", "change_pct": 0.99}, {"name": "国企改革", "change_pct": 0.79}, {"name": "算电协同", "change_pct": 1.13}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 50, "hot_rank_chg": -11, "stock_cnt": 5745, "price": "6.88", "change": "0.00", "market_id": "33", "circulate_market_value": "7106598300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.1}, {"name": "锂电池", "change_pct": 0.87}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "铜箔/覆铜板", "change_pct": 1.53}, {"name": "粤港澳大湾区", "change_pct": 1.23}, {"name": "新能源汽车", "change_pct": 0.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.19}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 51, "hot_rank_chg": 8, "stock_cnt": 5745, "price": "34.72", "change": "-3.88", "market_id": "33", "circulate_market_value": "27166149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 52, "hot_rank_chg": -33, "stock_cnt": 5745, "price": "412.60", "change": "-1.17", "market_id": "33", "circulate_market_value": "116292091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 53, "hot_rank_chg": -12, "stock_cnt": 5745, "price": "405.90", "change": "1.24", "market_id": "33", "circulate_market_value": "66993544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 54, "hot_rank_chg": 3, "stock_cnt": 5745, "price": "425.06", "change": "2.35", "market_id": "33", "circulate_market_value": "533128600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 55, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "40.11", "change": "0.78", "market_id": "33", "circulate_market_value": "63155122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 56, "hot_rank_chg": -26, "stock_cnt": 5745, "price": "77.25", "change": "2.70", "market_id": "17", "circulate_market_value": "32164405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 57, "hot_rank_chg": 66, "stock_cnt": 5745, "price": "11.35", "change": "9.98", "market_id": "17", "circulate_market_value": "6833033900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "模块化数据中心", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 1.02}, {"name": "阿里巴巴概念股", "change_pct": 0.87}, {"name": "腾讯概念股", "change_pct": 0.8}, {"name": "东数西算/算力", "change_pct": 1.12}, {"name": "国资入股", "change_pct": 1.22}, {"name": "华为产业链", "change_pct": 1.3}]}, {"code": "002156", "name": "通富微电", "hot_rank": 58, "hot_rank_chg": 18, "stock_cnt": 5745, "price": "62.64", "change": "0.94", "market_id": "33", "circulate_market_value": "95053207000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 59, "hot_rank_chg": -17, "stock_cnt": 5745, "price": "21.39", "change": "2.00", "market_id": "33", "circulate_market_value": "9675526900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000859", "name": "国风新材", "hot_rank": 60, "hot_rank_chg": -42, "stock_cnt": 5745, "price": "10.19", "change": "-2.77", "market_id": "33", "circulate_market_value": "9129478500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.51}, {"name": "安徽国企改革", "change_pct": 0.69}, {"name": "装修装饰", "change_pct": 1.79}, {"name": "碳基材料", "change_pct": 1.09}, {"name": "建筑节能", "change_pct": 1.38}, {"name": "光刻机（胶）", "change_pct": 1.81}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 61, "hot_rank_chg": 53, "stock_cnt": 5745, "price": "3.86", "change": "9.97", "market_id": "33", "circulate_market_value": "8106593900.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.61}, {"name": "维生素", "change_pct": 2.7}, {"name": "基因测序", "change_pct": 0.18}, {"name": "民营医院", "change_pct": 1.6}, {"name": "医药", "change_pct": 0.55}, {"name": "化学原料药", "change_pct": 0.75}, {"name": "PD-1抑制剂", "change_pct": 0.34}]}, {"code": "600611", "name": "大众交通", "hot_rank": 62, "hot_rank_chg": -27, "stock_cnt": 5745, "price": "5.13", "change": "2.19", "market_id": "17", "circulate_market_value": "8019812900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.11}, {"name": "共享经济", "change_pct": 1.15}, {"name": "云计算数据中心", "change_pct": 1.02}, {"name": "旅游", "change_pct": 0.94}, {"name": "物业管理", "change_pct": 2.8}]}, {"code": "600126", "name": "杭钢股份", "hot_rank": 63, "hot_rank_chg": -17, "stock_cnt": 5745, "price": "7.14", "change": "-3.12", "market_id": "17", "circulate_market_value": "24113130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.02}, {"name": "钢铁", "change_pct": 0.87}, {"name": "云计算数据中心", "change_pct": 1.02}, {"name": "浙江国企改革", "change_pct": 0.42}, {"name": "数字经济", "change_pct": 0.99}, {"name": "阿里巴巴概念股", "change_pct": 0.87}, {"name": "汽车拆解", "change_pct": 0.22}, {"name": "国资云", "change_pct": 0.57}, {"name": "东数西算/算力", "change_pct": 1.12}, {"name": "国企改革", "change_pct": 0.79}, {"name": "DeepSeek概念股", "change_pct": 0.38}]}, {"code": "600183", "name": "生益科技", "hot_rank": 64, "hot_rank_chg": 19, "stock_cnt": 5745, "price": "139.00", "change": "2.73", "market_id": "17", "circulate_market_value": "335233090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 65, "hot_rank_chg": 24, "stock_cnt": 5745, "price": "4.20", "change": "9.95", "market_id": "33", "circulate_market_value": "2736690300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "乳业", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.19}, {"name": "乳业（奶粉）", "change_pct": 2.27}, {"name": "股权转让", "change_pct": 1.37}, {"name": "一带一路", "change_pct": 0.8}, {"name": "优化生育（三孩）", "change_pct": 1.01}, {"name": "智慧城市", "change_pct": 1.24}, {"name": "食品", "change_pct": 1.06}, {"name": "基因编辑", "change_pct": 0.39}, {"name": "社区团购", "change_pct": 1.75}, {"name": "大农业", "change_pct": 0.8}, {"name": "5G消息/RCS", "change_pct": 1.33}, {"name": "广西概念", "change_pct": 0.82}, {"name": "饮料", "change_pct": 1.4}]}, {"code": "301526", "name": "国际复材", "hot_rank": 66, "hot_rank_chg": 4, "stock_cnt": 5745, "price": "38.71", "change": "-1.73", "market_id": "33", "circulate_market_value": "54364050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 67, "hot_rank_chg": -22, "stock_cnt": 5745, "price": "31.28", "change": "3.10", "market_id": "17", "circulate_market_value": "5722154700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 68, "hot_rank_chg": -15, "stock_cnt": 5745, "price": "13.95", "change": "10.02", "market_id": "17", "circulate_market_value": "6041968900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "人形机器人"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 69, "hot_rank_chg": 36, "stock_cnt": 5745, "price": "41.21", "change": "10.01", "market_id": "17", "circulate_market_value": "60248806000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片订单"}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 70, "hot_rank_chg": 22, "stock_cnt": 5745, "price": "100.17", "change": "3.69", "market_id": "33", "circulate_market_value": "231637220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 71, "hot_rank_chg": 9, "stock_cnt": 5745, "price": "67.83", "change": "-0.27", "market_id": "33", "circulate_market_value": "49123072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 72, "hot_rank_chg": 2, "stock_cnt": 5745, "price": "18.91", "change": "0.11", "market_id": "33", "circulate_market_value": "17561849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603011", "name": "合锻智能", "hot_rank": 73, "hot_rank_chg": 57, "stock_cnt": 5745, "price": "24.75", "change": "2.91", "market_id": "17", "circulate_market_value": "12236757300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 74, "hot_rank_chg": 144, "stock_cnt": 5745, "price": "15.92", "change": "1.40", "market_id": "33", "circulate_market_value": "4808659700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 75, "hot_rank_chg": 46, "stock_cnt": 5745, "price": "25.27", "change": "10.01", "market_id": "33", "circulate_market_value": "9058869700.00", "change_type": "1", "change_section": "9", "change_days": "5", "change_reason": "举牌"}, {"code": "600522", "name": "中天科技", "hot_rank": 76, "hot_rank_chg": 27, "stock_cnt": 5745, "price": "33.26", "change": "2.85", "market_id": "17", "circulate_market_value": "113514705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 77, "hot_rank_chg": -13, "stock_cnt": 5745, "price": "61.06", "change": "4.16", "market_id": "33", "circulate_market_value": "16849722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 78, "hot_rank_chg": -41, "stock_cnt": 5745, "price": "60.07", "change": "10.00", "market_id": "33", "circulate_market_value": "22135993000.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "覆铜板"}, {"code": "002081", "name": "金螳螂", "hot_rank": 79, "hot_rank_chg": 512, "stock_cnt": 5745, "price": "4.37", "change": "10.08", "market_id": "33", "circulate_market_value": "11555343500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.82}, {"name": "装修装饰", "change_pct": 1.79}, {"name": "装配式建筑", "change_pct": 1.74}, {"name": "破净股", "change_pct": 0.9}, {"name": "航天", "change_pct": 1.26}, {"name": "旧改", "change_pct": 1.76}]}, {"code": "603087", "name": "甘李药业", "hot_rank": 80, "hot_rank_chg": -32, "stock_cnt": 5745, "price": "77.33", "change": "3.84", "market_id": "17", "circulate_market_value": "43394291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 81, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "33.89", "change": "-1.91", "market_id": "33", "circulate_market_value": "22595017000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 82, "hot_rank_chg": -33, "stock_cnt": 5745, "price": "12.79", "change": "-0.62", "market_id": "33", "circulate_market_value": "8759901700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.04}, {"name": "核电", "change_pct": 1.19}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "充电桩", "change_pct": 1.17}, {"name": "云计算数据中心", "change_pct": 1.02}, {"name": "新能源汽车", "change_pct": 0.93}, {"name": "储能", "change_pct": 1.28}, {"name": "阿里巴巴概念股", "change_pct": 0.87}, {"name": "智能电网", "change_pct": 1.08}, {"name": "核聚变", "change_pct": 1.48}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 83, "hot_rank_chg": 3, "stock_cnt": 5745, "price": "12.09", "change": "2.11", "market_id": "33", "circulate_market_value": "9781039600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.4}, {"name": "大飞机", "change_pct": 0.98}, {"name": "北斗导航", "change_pct": 1.42}, {"name": "高铁轨交", "change_pct": 1.05}, {"name": "军民融合", "change_pct": 1.24}, {"name": "磁悬浮", "change_pct": 0.55}, {"name": "军工", "change_pct": 1.08}, {"name": "碳纤维", "change_pct": 0.91}, {"name": "无人机", "change_pct": 1.3}, {"name": "航天", "change_pct": 1.26}, {"name": "卫星互联网", "change_pct": 1.37}, {"name": "低空经济", "change_pct": 0.97}, {"name": "海洋经济", "change_pct": 0.86}]}, {"code": "301396", "name": "宏景科技", "hot_rank": 84, "hot_rank_chg": 219, "stock_cnt": 5745, "price": "193.13", "change": "0.40", "market_id": "33", "circulate_market_value": "27329207000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 85, "hot_rank_chg": 10, "stock_cnt": 5745, "price": "36.01", "change": "-1.75", "market_id": "17", "circulate_market_value": "56090347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 86, "hot_rank_chg": -24, "stock_cnt": 5745, "price": "20.37", "change": "2.26", "market_id": "33", "circulate_market_value": "68514598000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603232", "name": "格尔软件", "hot_rank": 87, "hot_rank_chg": 515, "stock_cnt": 5745, "price": "18.00", "change": "10.02", "market_id": "17", "circulate_market_value": "4163399900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "抗量子密码"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 88, "hot_rank_chg": 20, "stock_cnt": 5745, "price": "12.34", "change": "0.00", "market_id": "17", "circulate_market_value": "15834671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.13}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "智能制造", "change_pct": 1.06}, {"name": "工业互联网", "change_pct": 0.74}, {"name": "培育钻石", "change_pct": 1.25}, {"name": "金刚线", "change_pct": 1.54}, {"name": "国资入股", "change_pct": 1.22}, {"name": "深地经济", "change_pct": -0.34}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 89, "hot_rank_chg": -8, "stock_cnt": 5745, "price": "119.41", "change": "-1.31", "market_id": "33", "circulate_market_value": "98992746000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 91, "hot_rank_chg": -4, "stock_cnt": 5745, "price": "35.80", "change": "0.51", "market_id": "17", "circulate_market_value": "25927377000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603039", "name": "泛微网络", "hot_rank": 92, "hot_rank_chg": 65, "stock_cnt": 5745, "price": "45.90", "change": "2.62", "market_id": "17", "circulate_market_value": "14120637000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002859", "name": "洁美科技", "hot_rank": 93, "hot_rank_chg": -41, "stock_cnt": 5745, "price": "77.26", "change": "-4.99", "market_id": "33", "circulate_market_value": "33091632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 94, "hot_rank_chg": -3, "stock_cnt": 5745, "price": "39.15", "change": "-1.39", "market_id": "33", "circulate_market_value": "144504410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 95, "hot_rank_chg": 722, "stock_cnt": 5745, "price": "7.33", "change": "6.08", "market_id": "33", "circulate_market_value": "12652786600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.19}, {"name": "人工智能", "change_pct": 0.94}, {"name": "云计算数据中心", "change_pct": 1.02}, {"name": "大数据", "change_pct": 0.92}, {"name": "百度概念股", "change_pct": 1.16}, {"name": "腾讯概念股", "change_pct": 0.8}, {"name": "传媒", "change_pct": 1.27}, {"name": "快手概念股", "change_pct": 1.69}, {"name": "字节跳动概念股", "change_pct": 1.31}, {"name": "国企改革", "change_pct": 0.79}, {"name": "横琴新区", "change_pct": 2.19}, {"name": "网红/MCN", "change_pct": 1.53}, {"name": "5G消息/RCS", "change_pct": 1.33}, {"name": "AI营销", "change_pct": 1.5}, {"name": "短剧/互动影游", "change_pct": 1.72}, {"name": "小红书概念股", "change_pct": 1.66}, {"name": "区块链", "change_pct": 1.06}]}, {"code": "000566", "name": "海南海药", "hot_rank": 96, "hot_rank_chg": 24, "stock_cnt": 5745, "price": "5.85", "change": "-0.17", "market_id": "33", "circulate_market_value": "7585903500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.61}, {"name": "创新药", "change_pct": 0.22}, {"name": "央企改革", "change_pct": 0.59}, {"name": "医疗器械", "change_pct": 0.91}, {"name": "强势人气股", "change_pct": 1.82}, {"name": "互联网医疗", "change_pct": 0.91}, {"name": "保健品", "change_pct": 1.19}, {"name": "民营医院", "change_pct": 1.6}, {"name": "CAR-T疗法", "change_pct": -0.38}, {"name": "医药", "change_pct": 0.55}, {"name": "化学原料药", "change_pct": 0.75}, {"name": "海南概念", "change_pct": 0.9}, {"name": "脑科学/脑机接口", "change_pct": 1.28}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.29}, {"name": "海南自由贸易港", "change_pct": 1.21}, {"name": "食品", "change_pct": 1.06}, {"name": "国企改革", "change_pct": 0.79}, {"name": "医疗信息化", "change_pct": 1.21}, {"name": "新冠病毒防治", "change_pct": 0.86}, {"name": "自贸区", "change_pct": 1.26}, {"name": "合成生物", "change_pct": 0.64}]}, {"code": "002721", "name": "金一文化", "hot_rank": 97, "hot_rank_chg": -46, "stock_cnt": 5745, "price": "3.01", "change": "-1.31", "market_id": "33", "circulate_market_value": "8004729600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.35}, {"name": "金融科技", "change_pct": 0.55}, {"name": "人工智能", "change_pct": 0.94}, {"name": "珠宝饰品", "change_pct": 0.25}, {"name": "数字人民币", "change_pct": 0.11}]}, {"code": "301717", "name": "超纯应材", "hot_rank": 98, "hot_rank_chg": -69, "stock_cnt": 5745, "price": "501.10", "change": "-0.38", "market_id": "33", "circulate_market_value": "8732352000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 99, "hot_rank_chg": 17, "stock_cnt": 5745, "price": "11.75", "change": "10.02", "market_id": "17", "circulate_market_value": "8704136800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "资产重组", "xgb_concepts": [{"name": "房地产", "change_pct": 3.27}, {"name": "光通信", "change_pct": 3.17}, {"name": "京津冀", "change_pct": 1.04}, {"name": "土地流转", "change_pct": 1.58}, {"name": "北京城市规划", "change_pct": 2.51}, {"name": "物业管理", "change_pct": 2.8}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 100, "hot_rank_chg": -31, "stock_cnt": 5745, "price": "184.03", "change": "-0.02", "market_id": "33", "circulate_market_value": "144716260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};