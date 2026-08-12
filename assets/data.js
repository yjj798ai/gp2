const UPDATE_TIME = "2026-08-12 11:52";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 2.98,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续268天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 0.37,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续98天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 1.55,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 1.32,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续432天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "AI应用",
    "rise": 1.01,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": 0.45,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": 3.29,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续97天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "存储芯片",
    "rise": 2.38,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续221天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": 2.0,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "青蒿素",
    "rise": 3.7,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "商业航天",
    "rise": 1.64,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续197天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "脑机接口",
    "rise": 1.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "机器人概念",
    "rise": 1.27,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "芯片概念",
    "rise": 1.89,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "东数西算(算力)",
    "rise": 1.47,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "先进封装",
    "rise": 2.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "白酒概念",
    "rise": 1.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "黄金概念",
    "rise": 1.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "猪肉",
    "rise": 0.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "光刻机",
    "rise": 2.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886054"
  }
];
const THS_EVENTS = [
  {
    "title": "高盛称AI投资重点正转向人形机器人，2027年至2029年或迎规模化部署",
    "desc": "",
    "heat": 425076,
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
    "heat": 420966,
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
    "heat": 404291,
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
    "heat": 322699,
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
    "heat": 301059,
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
    "heat": 279006,
    "direction": "算力期货",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "长进光子",
        "code": "688635",
        "chg": 19.9984
      }
    ]
  },
  {
    "title": "光刻机产业链国产化进程提速",
    "desc": "",
    "heat": 263595,
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
    "title": "官方公众号落地，DeepSeek的智能体工具团队来了！",
    "desc": "",
    "heat": 229675,
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
    "title": "绿电装机激增 传统网架承压 能源升级需提质 新型电网重“改”更重“智”",
    "desc": "",
    "heat": 203921,
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
    "heat": 190077,
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
    "change": "+10.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+3.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+3.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房地产",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+2.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "彩票",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "北京城市规划",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光雷达",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "首发经济",
    "change": "+2.65%",
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
    "stock_cnt": 5777,
    "price": "8.81",
    "change": "6.53",
    "market_id": "17",
    "circulate_market_value": "22188072000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.21
      },
      {
        "name": "工业大麻",
        "change_pct": 0.78
      },
      {
        "name": "中药",
        "change_pct": 0.57
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "保健品",
        "change_pct": 1.36
      },
      {
        "name": "民营医院",
        "change_pct": 1.47
      },
      {
        "name": "医药",
        "change_pct": 0.48
      },
      {
        "name": "化学原料药",
        "change_pct": 0.69
      },
      {
        "name": "流感",
        "change_pct": 0.69
      },
      {
        "name": "振兴东北",
        "change_pct": 1.31
      },
      {
        "name": "食品",
        "change_pct": 1.14
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 6,
    "hot_rank_chg": 21,
    "stock_cnt": 5777,
    "price": "8.53",
    "change": "2.52",
    "market_id": "33",
    "circulate_market_value": "13867168000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.21
      },
      {
        "name": "电竞",
        "change_pct": 0.94
      },
      {
        "name": "手游",
        "change_pct": 0.67
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "游戏",
        "change_pct": 1.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.07
      },
      {
        "name": "快手概念股",
        "change_pct": 1.89
      },
      {
        "name": "元宇宙",
        "change_pct": 1.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.5
      },
      {
        "name": "web3.0",
        "change_pct": 1.87
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.13
      },
      {
        "name": "数据要素",
        "change_pct": 1.03
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.55
      },
      {
        "name": "AI营销",
        "change_pct": 1.57
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.82
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.86
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.58
      },
      {
        "name": "人形机器人",
        "change_pct": 1.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.68
      },
      {
        "name": "多模态",
        "change_pct": 1.18
      },
      {
        "name": "AI视频",
        "change_pct": 1.47
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.33
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 7,
    "hot_rank_chg": 17,
    "stock_cnt": 5777,
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
        "change_pct": 1.19
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.8
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "教育",
        "change_pct": 1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "职业教育",
        "change_pct": 2.11
      },
      {
        "name": "在线教育",
        "change_pct": 1.57
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.74
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "智谱AI",
        "change_pct": 1.34
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 11,
    "hot_rank_chg": 32,
    "stock_cnt": 5777,
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
        "change_pct": 1.59
      },
      {
        "name": "轮胎",
        "change_pct": 0.75
      },
      {
        "name": "冷链",
        "change_pct": 1.29
      },
      {
        "name": "机器人",
        "change_pct": 1.28
      },
      {
        "name": "智能制造",
        "change_pct": 1.33
      },
      {
        "name": "工业母机",
        "change_pct": 1.83
      },
      {
        "name": "减速器",
        "change_pct": 1.12
      },
      {
        "name": "头盔",
        "change_pct": 0.99
      },
      {
        "name": "人形机器人",
        "change_pct": 1.37
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 13,
    "hot_rank_chg": 71,
    "stock_cnt": 5777,
    "price": "5.52",
    "change": "4.15",
    "market_id": "33",
    "circulate_market_value": "32318487000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.29
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "水利",
        "change_pct": 1.1
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.67
      },
      {
        "name": "大数据",
        "change_pct": 1.07
      },
      {
        "name": "园林",
        "change_pct": 2.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.44
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.07
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.47
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.16
      },
      {
        "name": "快手概念股",
        "change_pct": 1.89
      },
      {
        "name": "IGBT",
        "change_pct": 1.41
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.13
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.55
      },
      {
        "name": "氮化镓",
        "change_pct": 1.94
      },
      {
        "name": "AI营销",
        "change_pct": 1.57
      },
      {
        "name": "多模态",
        "change_pct": 1.18
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.86
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.82
      },
      {
        "name": "区块链",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 19,
    "hot_rank_chg": -13,
    "stock_cnt": 5777,
    "price": "11.92",
    "change": "-6.36",
    "market_id": "33",
    "circulate_market_value": "5540094200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.91
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "水利",
        "change_pct": 1.1
      },
      {
        "name": "大数据",
        "change_pct": 1.07
      },
      {
        "name": "海绵城市",
        "change_pct": 1.3
      },
      {
        "name": "风电",
        "change_pct": 1.09
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.07
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "大基建",
        "change_pct": 0.63
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.5
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.45
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "旧改",
        "change_pct": 1.7
      },
      {
        "name": "西部大开发",
        "change_pct": -0.03
      },
      {
        "name": "低空经济",
        "change_pct": 1.21
      },
      {
        "name": "房屋检测",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 23,
    "hot_rank_chg": 2,
    "stock_cnt": 5777,
    "price": "11.10",
    "change": "5.51",
    "market_id": "33",
    "circulate_market_value": "9842999700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 0.93
      },
      {
        "name": "手机产业链",
        "change_pct": 1.62
      },
      {
        "name": "超高清视频",
        "change_pct": 1.41
      },
      {
        "name": "锂电池",
        "change_pct": 1.25
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "OLED",
        "change_pct": 1.86
      },
      {
        "name": "包装印刷",
        "change_pct": 1.58
      },
      {
        "name": "光伏",
        "change_pct": 1.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "小米概念股",
        "change_pct": 1.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.71
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.58
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 2.65
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 29,
    "hot_rank_chg": -12,
    "stock_cnt": 5777,
    "price": "10.78",
    "change": "6.52",
    "market_id": "33",
    "circulate_market_value": "22443980000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 1.44
      },
      {
        "name": "足球",
        "change_pct": 1.45
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.17
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.62
      },
      {
        "name": "大消费",
        "change_pct": 0.42
      },
      {
        "name": "盲盒",
        "change_pct": 1.06
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.68
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.33
      },
      {
        "name": "首发经济",
        "change_pct": 2.65
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.82
      },
      {
        "name": "服务消费",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 30,
    "hot_rank_chg": -4,
    "stock_cnt": 5777,
    "price": "5.93",
    "change": "0.34",
    "market_id": "33",
    "circulate_market_value": "209727110000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.07
      },
      {
        "name": "手机产业链",
        "change_pct": 1.62
      },
      {
        "name": "超高清视频",
        "change_pct": 1.41
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.78
      },
      {
        "name": "电竞",
        "change_pct": 0.94
      },
      {
        "name": "半导体",
        "change_pct": 2.04
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.84
      },
      {
        "name": "VR&AR",
        "change_pct": 1.59
      },
      {
        "name": "OLED",
        "change_pct": 1.86
      },
      {
        "name": "京津冀",
        "change_pct": 1.17
      },
      {
        "name": "物联网",
        "change_pct": 1.05
      },
      {
        "name": "指纹识别",
        "change_pct": 2.03
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.23
      },
      {
        "name": "白马股",
        "change_pct": -0.08
      },
      {
        "name": "智能制造",
        "change_pct": 1.33
      },
      {
        "name": "小米概念股",
        "change_pct": 1.44
      },
      {
        "name": "国产芯片",
        "change_pct": 1.85
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.71
      },
      {
        "name": "全息概念",
        "change_pct": 2.03
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.47
      },
      {
        "name": "MicroLED",
        "change_pct": 2.34
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.21
      },
      {
        "name": "智能手表",
        "change_pct": 1.07
      },
      {
        "name": "MiniLED",
        "change_pct": 2.24
      },
      {
        "name": "传感器",
        "change_pct": 1.73
      },
      {
        "name": "大硅片",
        "change_pct": 2.6
      },
      {
        "name": "AI PC",
        "change_pct": 0.89
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "回购",
        "change_pct": 0.65
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.4
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.86
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 39,
    "hot_rank_chg": 8,
    "stock_cnt": 5777,
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
        "change_pct": 3.16
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "养老产业",
        "change_pct": 1.21
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.33
      },
      {
        "name": "民营医院",
        "change_pct": 1.47
      },
      {
        "name": "地摊经济",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 43,
    "hot_rank_chg": 55,
    "stock_cnt": 5777,
    "price": "7.59",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "8643167900.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "6",
    "change_reason": "特高压",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.91
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "光伏",
        "change_pct": 1.82
      },
      {
        "name": "特高压",
        "change_pct": 1.42
      },
      {
        "name": "智能电网",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 44,
    "hot_rank_chg": 57,
    "stock_cnt": 5777,
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
        "change_pct": 0.63
      },
      {
        "name": "核电",
        "change_pct": 1.41
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.01
      },
      {
        "name": "水电",
        "change_pct": -0.45
      },
      {
        "name": "火电",
        "change_pct": -0.32
      },
      {
        "name": "光伏",
        "change_pct": 1.82
      },
      {
        "name": "风电",
        "change_pct": 1.09
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "算电协同",
        "change_pct": 1.37
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 50,
    "hot_rank_chg": 767,
    "stock_cnt": 5777,
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
        "change_pct": 1.21
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "大数据",
        "change_pct": 1.07
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.07
      },
      {
        "name": "传媒",
        "change_pct": 1.31
      },
      {
        "name": "快手概念股",
        "change_pct": 1.89
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.55
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "横琴新区",
        "change_pct": 2.41
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.62
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.55
      },
      {
        "name": "AI营销",
        "change_pct": 1.57
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 1.68
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.82
      },
      {
        "name": "区块链",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 51,
    "hot_rank_chg": 103,
    "stock_cnt": 5777,
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
        "change_pct": 1.25
      },
      {
        "name": "数字孪生",
        "change_pct": 1.12
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.59
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.84
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.25
      },
      {
        "name": "人脸识别",
        "change_pct": 0.94
      },
      {
        "name": "智慧停车",
        "change_pct": 1.22
      },
      {
        "name": "物联网",
        "change_pct": 1.05
      },
      {
        "name": "大数据",
        "change_pct": 1.07
      },
      {
        "name": "智慧城市",
        "change_pct": 1.48
      },
      {
        "name": "雄安新区",
        "change_pct": 1.54
      },
      {
        "name": "机器人",
        "change_pct": 1.28
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.07
      },
      {
        "name": "建筑节能",
        "change_pct": 1.5
      },
      {
        "name": "旧改",
        "change_pct": 1.7
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.33
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.88
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.94
      },
      {
        "name": "区块链",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 52,
    "hot_rank_chg": -21,
    "stock_cnt": 5777,
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
        "change_pct": 1.44
      },
      {
        "name": "旅游",
        "change_pct": 0.82
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.33
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 53,
    "hot_rank_chg": 1,
    "stock_cnt": 5777,
    "price": "11.45",
    "change": "7.92",
    "market_id": "17",
    "circulate_market_value": "20485633000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.84
      },
      {
        "name": "纯碱",
        "change_pct": 0.36
      },
      {
        "name": "食品",
        "change_pct": 1.14
      },
      {
        "name": "土壤修复",
        "change_pct": 1.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.5
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.63
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 56,
    "hot_rank_chg": 4,
    "stock_cnt": 5777,
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
        "change_pct": 1.33
      },
      {
        "name": "彩票",
        "change_pct": 2.94
      },
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "包装印刷",
        "change_pct": 1.58
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.5
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.13
      },
      {
        "name": "ETC",
        "change_pct": 1.0
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.85
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.82
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.58
      },
      {
        "name": "英伟达概念",
        "change_pct": 1.71
      },
      {
        "name": "区块链",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "002248",
    "name": "华东数控",
    "hot_rank": 59,
    "hot_rank_chg": 6,
    "stock_cnt": 5777,
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
        "change_pct": 1.25
      },
      {
        "name": "智能制造",
        "change_pct": 1.33
      },
      {
        "name": "工业母机",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 65,
    "hot_rank_chg": 49,
    "stock_cnt": 5777,
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
        "change_pct": 0.57
      },
      {
        "name": "维生素",
        "change_pct": 2.69
      },
      {
        "name": "基因测序",
        "change_pct": 0.05
      },
      {
        "name": "民营医院",
        "change_pct": 1.47
      },
      {
        "name": "医药",
        "change_pct": 0.48
      },
      {
        "name": "化学原料药",
        "change_pct": 0.69
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 68,
    "hot_rank_chg": -29,
    "stock_cnt": 5777,
    "price": "6.98",
    "change": "1.45",
    "market_id": "33",
    "circulate_market_value": "7209891900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.05
      },
      {
        "name": "锂电池",
        "change_pct": 1.25
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.69
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.41
      }
    ]
  },
  {
    "code": "000859",
    "name": "国风新材",
    "hot_rank": 74,
    "hot_rank_chg": -56,
    "stock_cnt": 5777,
    "price": "10.20",
    "change": "-2.67",
    "market_id": "33",
    "circulate_market_value": "9138437800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.07
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.74
      },
      {
        "name": "装修装饰",
        "change_pct": 1.8
      },
      {
        "name": "碳基材料",
        "change_pct": 1.31
      },
      {
        "name": "建筑节能",
        "change_pct": 1.5
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.3
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 76,
    "hot_rank_chg": 515,
    "stock_cnt": 5777,
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
        "change_pct": 2.17
      },
      {
        "name": "装修装饰",
        "change_pct": 1.8
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.8
      },
      {
        "name": "破净股",
        "change_pct": 0.8
      },
      {
        "name": "航天",
        "change_pct": 1.57
      },
      {
        "name": "旧改",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 79,
    "hot_rank_chg": -30,
    "stock_cnt": 5777,
    "price": "12.68",
    "change": "-1.48",
    "market_id": "33",
    "circulate_market_value": "8684562400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 1.21
      },
      {
        "name": "核电",
        "change_pct": 1.41
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "充电桩",
        "change_pct": 1.39
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.22
      },
      {
        "name": "储能",
        "change_pct": 1.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "智能电网",
        "change_pct": 1.27
      },
      {
        "name": "核聚变",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 81,
    "hot_rank_chg": 8,
    "stock_cnt": 5777,
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
        "change_pct": 1.21
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.33
      },
      {
        "name": "股权转让",
        "change_pct": 1.49
      },
      {
        "name": "一带一路",
        "change_pct": 0.91
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.93
      },
      {
        "name": "智慧城市",
        "change_pct": 1.48
      },
      {
        "name": "食品",
        "change_pct": 1.14
      },
      {
        "name": "基因编辑",
        "change_pct": 0.35
      },
      {
        "name": "社区团购",
        "change_pct": 1.66
      },
      {
        "name": "大农业",
        "change_pct": 0.82
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 1.55
      },
      {
        "name": "广西概念",
        "change_pct": 0.98
      },
      {
        "name": "饮料",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "600126",
    "name": "杭钢股份",
    "hot_rank": 83,
    "hot_rank_chg": -37,
    "stock_cnt": 5777,
    "price": "7.18",
    "change": "-2.58",
    "market_id": "17",
    "circulate_market_value": "24248218000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 1.13
      },
      {
        "name": "钢铁",
        "change_pct": 0.78
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.54
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.45
      },
      {
        "name": "国资云",
        "change_pct": 0.67
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.84
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 84,
    "hot_rank_chg": 2,
    "stock_cnt": 5777,
    "price": "12.11",
    "change": "2.28",
    "market_id": "33",
    "circulate_market_value": "9797220000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.71
      },
      {
        "name": "大飞机",
        "change_pct": 1.15
      },
      {
        "name": "北斗导航",
        "change_pct": 1.67
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.25
      },
      {
        "name": "军民融合",
        "change_pct": 1.5
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.71
      },
      {
        "name": "军工",
        "change_pct": 1.29
      },
      {
        "name": "碳纤维",
        "change_pct": 1.09
      },
      {
        "name": "无人机",
        "change_pct": 1.56
      },
      {
        "name": "航天",
        "change_pct": 1.57
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.71
      },
      {
        "name": "低空经济",
        "change_pct": 1.21
      },
      {
        "name": "海洋经济",
        "change_pct": 0.99
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 89,
    "hot_rank_chg": -54,
    "stock_cnt": 5777,
    "price": "5.25",
    "change": "4.58",
    "market_id": "17",
    "circulate_market_value": "8207410900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.37
      },
      {
        "name": "共享经济",
        "change_pct": 1.38
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.34
      },
      {
        "name": "旅游",
        "change_pct": 0.82
      },
      {
        "name": "物业管理",
        "change_pct": 2.74
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 92,
    "hot_rank_chg": -25,
    "stock_cnt": 5777,
    "price": "11.03",
    "change": "0.27",
    "market_id": "33",
    "circulate_market_value": "5634993700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 1.62
      },
      {
        "name": "5G",
        "change_pct": 2.11
      },
      {
        "name": "光通信",
        "change_pct": 3.87
      },
      {
        "name": "教育",
        "change_pct": 1.36
      },
      {
        "name": "毫米波通信",
        "change_pct": 1.97
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.71
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "毫米波雷达",
        "change_pct": 2.08
      },
      {
        "name": "5.5G概念",
        "change_pct": 2.95
      }
    ]
  },
  {
    "code": "300063",
    "name": "天龙集团",
    "hot_rank": 94,
    "hot_rank_chg": 1284,
    "stock_cnt": 5777,
    "price": "10.18",
    "change": "8.88",
    "market_id": "33",
    "circulate_market_value": "6377942500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.11
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.67
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.99
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.07
      },
      {
        "name": "传媒",
        "change_pct": 1.31
      },
      {
        "name": "快手概念股",
        "change_pct": 1.89
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.44
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.13
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.55
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.74
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.62
      },
      {
        "name": "AI营销",
        "change_pct": 1.57
      },
      {
        "name": "华为产业链",
        "change_pct": 1.6
      },
      {
        "name": "AI视频",
        "change_pct": 1.47
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 95,
    "hot_rank_chg": 13,
    "stock_cnt": 5777,
    "price": "12.47",
    "change": "1.05",
    "market_id": "17",
    "circulate_market_value": "16001487000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.29
      },
      {
        "name": "强势人气股",
        "change_pct": 2.17
      },
      {
        "name": "智能制造",
        "change_pct": 1.33
      },
      {
        "name": "工业互联网",
        "change_pct": 0.92
      },
      {
        "name": "培育钻石",
        "change_pct": 1.65
      },
      {
        "name": "金刚线",
        "change_pct": 1.99
      },
      {
        "name": "国资入股",
        "change_pct": 1.48
      },
      {
        "name": "深地经济",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 100,
    "hot_rank_chg": 396,
    "stock_cnt": 5777,
    "price": "12.47",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "7417511300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 1.12
      },
      {
        "name": "VR&AR",
        "change_pct": 1.59
      },
      {
        "name": "装修装饰",
        "change_pct": 1.8
      },
      {
        "name": "数字经济",
        "change_pct": 1.15
      },
      {
        "name": "百度概念股",
        "change_pct": 1.27
      },
      {
        "name": "全息概念",
        "change_pct": 2.03
      },
      {
        "name": "NFT",
        "change_pct": 1.17
      },
      {
        "name": "元宇宙",
        "change_pct": 1.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.44
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.62
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.82
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.86
      },
      {
        "name": "多模态",
        "change_pct": 1.18
      },
      {
        "name": "AI视频",
        "change_pct": 1.47
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600664", "name": "哈药股份", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "8.81", "change": "6.53", "market_id": "17", "circulate_market_value": "22188072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.21}, {"name": "工业大麻", "change_pct": 0.78}, {"name": "中药", "change_pct": 0.57}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "保健品", "change_pct": 1.36}, {"name": "民营医院", "change_pct": 1.47}, {"name": "医药", "change_pct": 0.48}, {"name": "化学原料药", "change_pct": 0.69}, {"name": "流感", "change_pct": 0.69}, {"name": "振兴东北", "change_pct": 1.31}, {"name": "食品", "change_pct": 1.14}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "22.71", "change": "7.12", "market_id": "17", "circulate_market_value": "47498923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "14.03", "change": "10.04", "market_id": "17", "circulate_market_value": "5395203300.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "CRO"}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5777, "price": "66.51", "change": "1.00", "market_id": "33", "circulate_market_value": "76952919000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5777, "price": "105.98", "change": "5.68", "market_id": "33", "circulate_market_value": "69208716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 6, "hot_rank_chg": 21, "stock_cnt": 5777, "price": "8.53", "change": "2.52", "market_id": "33", "circulate_market_value": "13867168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.21}, {"name": "电竞", "change_pct": 0.94}, {"name": "手游", "change_pct": 0.67}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "人工智能", "change_pct": 1.11}, {"name": "游戏", "change_pct": 1.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.15}, {"name": "腾讯概念股", "change_pct": 1.07}, {"name": "快手概念股", "change_pct": 1.89}, {"name": "元宇宙", "change_pct": 1.16}, {"name": "虚拟数字人", "change_pct": 1.44}, {"name": "东数西算/算力", "change_pct": 1.5}, {"name": "web3.0", "change_pct": 1.87}, {"name": "AIGC概念", "change_pct": 1.13}, {"name": "数据要素", "change_pct": 1.03}, {"name": "字节跳动概念股", "change_pct": 1.55}, {"name": "AI营销", "change_pct": 1.57}, {"name": "ChatGPT", "change_pct": 0.82}, {"name": "智能眼镜/MR头显", "change_pct": 1.86}, {"name": "人工智能大模型", "change_pct": 0.58}, {"name": "人形机器人", "change_pct": 1.37}, {"name": "短剧/互动影游", "change_pct": 1.68}, {"name": "多模态", "change_pct": 1.18}, {"name": "AI视频", "change_pct": 1.47}, {"name": "IP经济/谷子经济", "change_pct": 1.33}, {"name": "小红书概念股", "change_pct": 1.82}]}, {"code": "003032", "name": "传智教育", "hot_rank": 7, "hot_rank_chg": 17, "stock_cnt": 5777, "price": "12.91", "change": "9.97", "market_id": "33", "circulate_market_value": "3672657600.00", "change_type": "1", "change_section": "13", "change_days": "9", "change_reason": "具身智能", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.19}, {"name": "ST摘帽", "change_pct": 1.8}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "教育", "change_pct": 1.36}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "职业教育", "change_pct": 2.11}, {"name": "在线教育", "change_pct": 1.57}, {"name": "华为鸿蒙", "change_pct": 0.74}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "智谱AI", "change_pct": 1.34}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 8, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "53.52", "change": "6.19", "market_id": "17", "circulate_market_value": "241002650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "30.39", "change": "9.99", "market_id": "17", "circulate_market_value": "12186390000.00", "change_type": "1", "change_section": "12", "change_days": "8", "change_reason": "乳业"}, {"code": "001258", "name": "立新能源", "hot_rank": 10, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "15.46", "change": "-2.95", "market_id": "33", "circulate_market_value": "14429152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 11, "hot_rank_chg": 32, "stock_cnt": 5777, "price": "6.42", "change": "9.93", "market_id": "33", "circulate_market_value": "14120072000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "工业自动化", "change_pct": 1.59}, {"name": "轮胎", "change_pct": 0.75}, {"name": "冷链", "change_pct": 1.29}, {"name": "机器人", "change_pct": 1.28}, {"name": "智能制造", "change_pct": 1.33}, {"name": "工业母机", "change_pct": 1.83}, {"name": "减速器", "change_pct": 1.12}, {"name": "头盔", "change_pct": 0.99}, {"name": "人形机器人", "change_pct": 1.37}]}, {"code": "603538", "name": "美诺华", "hot_rank": 12, "hot_rank_chg": 51, "stock_cnt": 5777, "price": "33.33", "change": "10.00", "market_id": "17", "circulate_market_value": "11229542000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "002131", "name": "利欧股份", "hot_rank": 13, "hot_rank_chg": 71, "stock_cnt": 5777, "price": "5.52", "change": "4.15", "market_id": "33", "circulate_market_value": "32318487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.29}, {"name": "人工智能", "change_pct": 1.11}, {"name": "水利", "change_pct": 1.1}, {"name": "直播/短视频", "change_pct": 1.67}, {"name": "大数据", "change_pct": 1.07}, {"name": "园林", "change_pct": 2.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.44}, {"name": "数字经济", "change_pct": 1.15}, {"name": "腾讯概念股", "change_pct": 1.07}, {"name": "理想汽车概念股", "change_pct": 1.47}, {"name": "第三代半导体", "change_pct": 2.16}, {"name": "快手概念股", "change_pct": 1.89}, {"name": "IGBT", "change_pct": 1.41}, {"name": "虚拟数字人", "change_pct": 1.44}, {"name": "AIGC概念", "change_pct": 1.13}, {"name": "字节跳动概念股", "change_pct": 1.55}, {"name": "氮化镓", "change_pct": 1.94}, {"name": "AI营销", "change_pct": 1.57}, {"name": "多模态", "change_pct": 1.18}, {"name": "液冷服务器", "change_pct": 1.86}, {"name": "小红书概念股", "change_pct": 1.82}, {"name": "区块链", "change_pct": 1.12}]}, {"code": "002407", "name": "多氟多", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "37.40", "change": "0.32", "market_id": "33", "circulate_market_value": "40345899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5777, "price": "52.95", "change": "0.57", "market_id": "17", "circulate_market_value": "44824999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5777, "price": "18.73", "change": "-0.80", "market_id": "33", "circulate_market_value": "13022276600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 17, "hot_rank_chg": 41, "stock_cnt": 5777, "price": "15.89", "change": "1.86", "market_id": "33", "circulate_market_value": "55264312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 18, "hot_rank_chg": 26, "stock_cnt": 5777, "price": "119.36", "change": "0.96", "market_id": "17", "circulate_market_value": "43055945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 19, "hot_rank_chg": -13, "stock_cnt": 5777, "price": "11.92", "change": "-6.36", "market_id": "33", "circulate_market_value": "5540094200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.91}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "水利", "change_pct": 1.1}, {"name": "大数据", "change_pct": 1.07}, {"name": "海绵城市", "change_pct": 1.3}, {"name": "风电", "change_pct": 1.09}, {"name": "乡村振兴", "change_pct": 1.07}, {"name": "数字经济", "change_pct": 1.15}, {"name": "大基建", "change_pct": 0.63}, {"name": "东数西算/算力", "change_pct": 1.5}, {"name": "新型城镇化", "change_pct": 1.45}, {"name": "国企改革", "change_pct": 0.84}, {"name": "旧改", "change_pct": 1.7}, {"name": "西部大开发", "change_pct": -0.03}, {"name": "低空经济", "change_pct": 1.21}, {"name": "房屋检测", "change_pct": 0.82}]}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -8, "stock_cnt": 5777, "price": "200.19", "change": "3.26", "market_id": "33", "circulate_market_value": "277527750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "59.30", "change": "2.92", "market_id": "17", "circulate_market_value": "145501220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 22, "hot_rank_chg": 16, "stock_cnt": 5777, "price": "70.43", "change": "3.35", "market_id": "33", "circulate_market_value": "102366625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 23, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "11.10", "change": "5.51", "market_id": "33", "circulate_market_value": "9842999700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 0.93}, {"name": "手机产业链", "change_pct": 1.62}, {"name": "超高清视频", "change_pct": 1.41}, {"name": "锂电池", "change_pct": 1.25}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "OLED", "change_pct": 1.86}, {"name": "包装印刷", "change_pct": 1.58}, {"name": "光伏", "change_pct": 1.82}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "小米概念股", "change_pct": 1.44}, {"name": "液晶面板/LCD", "change_pct": 1.71}, {"name": "可降解塑料", "change_pct": 0.58}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "PET复合铜箔", "change_pct": 2.65}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 24, "hot_rank_chg": -9, "stock_cnt": 5777, "price": "17.18", "change": "2.26", "market_id": "17", "circulate_market_value": "25301103000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5777, "price": "921.00", "change": "3.84", "market_id": "33", "circulate_market_value": "1022254540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "78.18", "change": "0.66", "market_id": "17", "circulate_market_value": "139896430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 27, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "413.17", "change": "2.71", "market_id": "17", "circulate_market_value": "276200810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 28, "hot_rank_chg": 4, "stock_cnt": 5777, "price": "43.31", "change": "1.45", "market_id": "17", "circulate_market_value": "172009430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5777, "price": "10.78", "change": "6.52", "market_id": "33", "circulate_market_value": "22443980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 1.44}, {"name": "足球", "change_pct": 1.45}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "拼多多概念股", "change_pct": 1.17}, {"name": "网红/MCN", "change_pct": 1.62}, {"name": "大消费", "change_pct": 0.42}, {"name": "盲盒", "change_pct": 1.06}, {"name": "短剧/互动影游", "change_pct": 1.68}, {"name": "IP经济/谷子经济", "change_pct": 1.33}, {"name": "首发经济", "change_pct": 2.65}, {"name": "小红书概念股", "change_pct": 1.82}, {"name": "服务消费", "change_pct": 1.43}]}, {"code": "000725", "name": "京东方A", "hot_rank": 30, "hot_rank_chg": -4, "stock_cnt": 5777, "price": "5.93", "change": "0.34", "market_id": "33", "circulate_market_value": "209727110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.07}, {"name": "手机产业链", "change_pct": 1.62}, {"name": "超高清视频", "change_pct": 1.41}, {"name": "苹果产业链", "change_pct": 1.78}, {"name": "电竞", "change_pct": 0.94}, {"name": "半导体", "change_pct": 2.04}, {"name": "人工智能", "change_pct": 1.11}, {"name": "互联网医疗", "change_pct": 0.84}, {"name": "VR&AR", "change_pct": 1.59}, {"name": "OLED", "change_pct": 1.86}, {"name": "京津冀", "change_pct": 1.17}, {"name": "物联网", "change_pct": 1.05}, {"name": "指纹识别", "change_pct": 2.03}, {"name": "汽车零部件", "change_pct": 1.23}, {"name": "白马股", "change_pct": -0.08}, {"name": "智能制造", "change_pct": 1.33}, {"name": "小米概念股", "change_pct": 1.44}, {"name": "国产芯片", "change_pct": 1.85}, {"name": "液晶面板/LCD", "change_pct": 1.71}, {"name": "全息概念", "change_pct": 2.03}, {"name": "理想汽车概念股", "change_pct": 1.47}, {"name": "MicroLED", "change_pct": 2.34}, {"name": "钙钛矿电池", "change_pct": 2.21}, {"name": "智能手表", "change_pct": 1.07}, {"name": "MiniLED", "change_pct": 2.24}, {"name": "传感器", "change_pct": 1.73}, {"name": "大硅片", "change_pct": 2.6}, {"name": "AI PC", "change_pct": 0.89}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "回购", "change_pct": 0.65}, {"name": "光电共封装CPO", "change_pct": 4.4}, {"name": "智能眼镜/MR头显", "change_pct": 1.86}, {"name": "玻璃基板封装", "change_pct": 1.87}]}, {"code": "002185", "name": "华天科技", "hot_rank": 31, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "18.30", "change": "2.06", "market_id": "33", "circulate_market_value": "60804527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 32, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "37.00", "change": "-1.04", "market_id": "33", "circulate_market_value": "105822689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 33, "hot_rank_chg": 114, "stock_cnt": 5777, "price": "18.74", "change": "9.98", "market_id": "17", "circulate_market_value": "18551848000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "钨钽铌资产注入"}, {"code": "300285", "name": "国瓷材料", "hot_rank": 34, "hot_rank_chg": -20, "stock_cnt": 5777, "price": "74.00", "change": "1.54", "market_id": "33", "circulate_market_value": "63127401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 35, "hot_rank_chg": -19, "stock_cnt": 5777, "price": "159.04", "change": "-0.73", "market_id": "17", "circulate_market_value": "393350490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 36, "hot_rank_chg": 191, "stock_cnt": 5777, "price": "18.84", "change": "9.98", "market_id": "33", "circulate_market_value": "22164674000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光纤光缆"}, {"code": "600602", "name": "云赛智联", "hot_rank": 37, "hot_rank_chg": 82, "stock_cnt": 5777, "price": "20.25", "change": "9.99", "market_id": "17", "circulate_market_value": "21754636000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "智算中心"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 38, "hot_rank_chg": 67, "stock_cnt": 5777, "price": "41.21", "change": "10.01", "market_id": "17", "circulate_market_value": "60248806000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片订单"}, {"code": "600162", "name": "香江控股", "hot_rank": 39, "hot_rank_chg": 8, "stock_cnt": 5777, "price": "4.72", "change": "10.02", "market_id": "17", "circulate_market_value": "15427028000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力", "xgb_concepts": [{"name": "房地产", "change_pct": 3.16}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "养老产业", "change_pct": 1.21}, {"name": "粤港澳大湾区", "change_pct": 1.33}, {"name": "民营医院", "change_pct": 1.47}, {"name": "地摊经济", "change_pct": 1.78}]}, {"code": "600272", "name": "开开实业", "hot_rank": 40, "hot_rank_chg": 0, "stock_cnt": 5777, "price": "17.27", "change": "10.00", "market_id": "17", "circulate_market_value": "2763200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 41, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "21.23", "change": "1.24", "market_id": "33", "circulate_market_value": "9603152700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "33.58", "change": "1.21", "market_id": "17", "circulate_market_value": "691808210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 43, "hot_rank_chg": 55, "stock_cnt": 5777, "price": "7.59", "change": "10.00", "market_id": "17", "circulate_market_value": "8643167900.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "特高压", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.91}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "光伏", "change_pct": 1.82}, {"name": "特高压", "change_pct": 1.42}, {"name": "智能电网", "change_pct": 1.27}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 44, "hot_rank_chg": 57, "stock_cnt": 5777, "price": "6.29", "change": "0.32", "market_id": "17", "circulate_market_value": "77971400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.63}, {"name": "核电", "change_pct": 1.41}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "电力体制改革", "change_pct": 0.01}, {"name": "水电", "change_pct": -0.45}, {"name": "火电", "change_pct": -0.32}, {"name": "光伏", "change_pct": 1.82}, {"name": "风电", "change_pct": 1.09}, {"name": "国企改革", "change_pct": 0.84}, {"name": "算电协同", "change_pct": 1.37}]}, {"code": "601138", "name": "工业富联", "hot_rank": 45, "hot_rank_chg": -24, "stock_cnt": 5777, "price": "65.60", "change": "-0.62", "market_id": "17", "circulate_market_value": "1301772450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 46, "hot_rank_chg": -9, "stock_cnt": 5777, "price": "60.07", "change": "10.00", "market_id": "33", "circulate_market_value": "22135993000.00", "change_type": "1", "change_section": "9", "change_days": "7", "change_reason": "覆铜板"}, {"code": "603399", "name": "永杉锂业", "hot_rank": 47, "hot_rank_chg": 213, "stock_cnt": 5777, "price": "16.81", "change": "6.93", "market_id": "17", "circulate_market_value": "8611605800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 49, "hot_rank_chg": 54, "stock_cnt": 5777, "price": "33.55", "change": "3.74", "market_id": "17", "circulate_market_value": "114504461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 50, "hot_rank_chg": 767, "stock_cnt": 5777, "price": "7.33", "change": "6.08", "market_id": "33", "circulate_market_value": "12652786600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.21}, {"name": "人工智能", "change_pct": 1.11}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "大数据", "change_pct": 1.07}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "腾讯概念股", "change_pct": 1.07}, {"name": "传媒", "change_pct": 1.31}, {"name": "快手概念股", "change_pct": 1.89}, {"name": "字节跳动概念股", "change_pct": 1.55}, {"name": "国企改革", "change_pct": 0.84}, {"name": "横琴新区", "change_pct": 2.41}, {"name": "网红/MCN", "change_pct": 1.62}, {"name": "5G消息/RCS", "change_pct": 1.55}, {"name": "AI营销", "change_pct": 1.57}, {"name": "短剧/互动影游", "change_pct": 1.68}, {"name": "小红书概念股", "change_pct": 1.82}, {"name": "区块链", "change_pct": 1.12}]}, {"code": "002421", "name": "达实智能", "hot_rank": 51, "hot_rank_chg": 103, "stock_cnt": 5777, "price": "3.88", "change": "9.91", "market_id": "33", "circulate_market_value": "7773103500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI智能体", "xgb_concepts": [{"name": "边缘计算", "change_pct": 1.25}, {"name": "数字孪生", "change_pct": 1.12}, {"name": "深圳本地股", "change_pct": 1.59}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "人工智能", "change_pct": 1.11}, {"name": "互联网医疗", "change_pct": 0.84}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "高铁轨交", "change_pct": 1.25}, {"name": "人脸识别", "change_pct": 0.94}, {"name": "智慧停车", "change_pct": 1.22}, {"name": "物联网", "change_pct": 1.05}, {"name": "大数据", "change_pct": 1.07}, {"name": "智慧城市", "change_pct": 1.48}, {"name": "雄安新区", "change_pct": 1.54}, {"name": "机器人", "change_pct": 1.28}, {"name": "数字经济", "change_pct": 1.15}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "腾讯概念股", "change_pct": 1.07}, {"name": "建筑节能", "change_pct": 1.5}, {"name": "旧改", "change_pct": 1.7}, {"name": "医疗信息化", "change_pct": 1.33}, {"name": "新冠病毒防治", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "医疗耗材供应链SPD", "change_pct": 1.94}, {"name": "区块链", "change_pct": 1.12}]}, {"code": "000802", "name": "北京文化", "hot_rank": 52, "hot_rank_chg": -21, "stock_cnt": 5777, "price": "5.69", "change": "10.06", "market_id": "33", "circulate_market_value": "4071445400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "《欢迎来龙餐馆》上映", "xgb_concepts": [{"name": "影视", "change_pct": 1.44}, {"name": "旅游", "change_pct": 0.82}, {"name": "IP经济/谷子经济", "change_pct": 1.33}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 53, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "11.45", "change": "7.92", "market_id": "17", "circulate_market_value": "20485633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.84}, {"name": "纯碱", "change_pct": 0.36}, {"name": "食品", "change_pct": 1.14}, {"name": "土壤修复", "change_pct": 1.62}, {"name": "东数西算/算力", "change_pct": 1.5}, {"name": "OpenClaw概念", "change_pct": 0.63}, {"name": "DeepSeek概念股", "change_pct": 0.7}]}, {"code": "300502", "name": "新易盛", "hot_rank": 54, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "428.20", "change": "3.11", "market_id": "33", "circulate_market_value": "537066920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5777, "price": "407.58", "change": "1.64", "market_id": "33", "circulate_market_value": "67262542000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 56, "hot_rank_chg": 4, "stock_cnt": 5777, "price": "12.91", "change": "9.97", "market_id": "33", "circulate_market_value": "6366646100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "算力租赁", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.33}, {"name": "彩票", "change_pct": 2.94}, {"name": "人工智能", "change_pct": 1.11}, {"name": "包装印刷", "change_pct": 1.58}, {"name": "数字经济", "change_pct": 1.15}, {"name": "东数西算/算力", "change_pct": 1.5}, {"name": "AIGC概念", "change_pct": 1.13}, {"name": "ETC", "change_pct": 1.0}, {"name": "词元概念/Token", "change_pct": 0.85}, {"name": "ChatGPT", "change_pct": 0.82}, {"name": "人工智能大模型", "change_pct": 0.58}, {"name": "英伟达概念", "change_pct": 1.71}, {"name": "区块链", "change_pct": 1.12}]}, {"code": "603823", "name": "百合花", "hot_rank": 57, "hot_rank_chg": -27, "stock_cnt": 5777, "price": "77.70", "change": "3.30", "market_id": "17", "circulate_market_value": "32351771000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 58, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "34.71", "change": "-3.90", "market_id": "33", "circulate_market_value": "27158324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002248", "name": "华东数控", "hot_rank": 59, "hot_rank_chg": 6, "stock_cnt": 5777, "price": "12.17", "change": "10.04", "market_id": "33", "circulate_market_value": "3742221500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "工业母机", "xgb_concepts": [{"name": "高铁轨交", "change_pct": 1.25}, {"name": "智能制造", "change_pct": 1.33}, {"name": "工业母机", "change_pct": 1.83}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 60, "hot_rank_chg": 117, "stock_cnt": 5777, "price": "240.05", "change": "7.89", "market_id": "33", "circulate_market_value": "261267550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 61, "hot_rank_chg": 29, "stock_cnt": 5777, "price": "26.88", "change": "2.28", "market_id": "17", "circulate_market_value": "23171968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 62, "hot_rank_chg": -43, "stock_cnt": 5777, "price": "414.30", "change": "-0.77", "market_id": "33", "circulate_market_value": "116771239000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 63, "hot_rank_chg": 20, "stock_cnt": 5777, "price": "143.23", "change": "5.86", "market_id": "17", "circulate_market_value": "345434790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 64, "hot_rank_chg": 9, "stock_cnt": 5777, "price": "40.35", "change": "1.36", "market_id": "33", "circulate_market_value": "63517178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 65, "hot_rank_chg": 49, "stock_cnt": 5777, "price": "3.86", "change": "9.97", "market_id": "33", "circulate_market_value": "8106593900.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.57}, {"name": "维生素", "change_pct": 2.69}, {"name": "基因测序", "change_pct": 0.05}, {"name": "民营医院", "change_pct": 1.47}, {"name": "医药", "change_pct": 0.48}, {"name": "化学原料药", "change_pct": 0.69}, {"name": "PD-1抑制剂", "change_pct": 0.34}]}, {"code": "301526", "name": "国际复材", "hot_rank": 66, "hot_rank_chg": 4, "stock_cnt": 5777, "price": "38.75", "change": "-1.62", "market_id": "33", "circulate_market_value": "54420226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 67, "hot_rank_chg": 35, "stock_cnt": 5777, "price": "155.19", "change": "3.26", "market_id": "33", "circulate_market_value": "49431545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 68, "hot_rank_chg": -29, "stock_cnt": 5777, "price": "6.98", "change": "1.45", "market_id": "33", "circulate_market_value": "7209891900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.05}, {"name": "锂电池", "change_pct": 1.25}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "铜箔/覆铜板", "change_pct": 2.69}, {"name": "粤港澳大湾区", "change_pct": 1.33}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.41}]}, {"code": "301520", "name": "万邦医药", "hot_rank": 69, "hot_rank_chg": -14, "stock_cnt": 5777, "price": "73.90", "change": "4.99", "market_id": "33", "circulate_market_value": "2416414900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 70, "hot_rank_chg": -25, "stock_cnt": 5777, "price": "31.20", "change": "2.83", "market_id": "17", "circulate_market_value": "5707520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 71, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "62.86", "change": "1.29", "market_id": "33", "circulate_market_value": "95387047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 72, "hot_rank_chg": -8, "stock_cnt": 5777, "price": "61.22", "change": "4.45", "market_id": "33", "circulate_market_value": "16896642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 73, "hot_rank_chg": 7, "stock_cnt": 5777, "price": "68.47", "change": "0.69", "market_id": "33", "circulate_market_value": "49593877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000859", "name": "国风新材", "hot_rank": 74, "hot_rank_chg": -56, "stock_cnt": 5777, "price": "10.20", "change": "-2.67", "market_id": "33", "circulate_market_value": "9138437800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.07}, {"name": "安徽国企改革", "change_pct": 0.74}, {"name": "装修装饰", "change_pct": 1.8}, {"name": "碳基材料", "change_pct": 1.31}, {"name": "建筑节能", "change_pct": 1.5}, {"name": "光刻机（胶）", "change_pct": 2.3}, {"name": "国企改革", "change_pct": 0.84}]}, {"code": "603690", "name": "至纯科技", "hot_rank": 75, "hot_rank_chg": 328, "stock_cnt": 5777, "price": "27.30", "change": "9.99", "market_id": "17", "circulate_market_value": "10454924000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体设备"}, {"code": "002081", "name": "金螳螂", "hot_rank": 76, "hot_rank_chg": 515, "stock_cnt": 5777, "price": "4.37", "change": "10.08", "market_id": "33", "circulate_market_value": "11555343500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.17}, {"name": "装修装饰", "change_pct": 1.8}, {"name": "装配式建筑", "change_pct": 1.8}, {"name": "破净股", "change_pct": 0.8}, {"name": "航天", "change_pct": 1.57}, {"name": "旧改", "change_pct": 1.7}]}, {"code": "603011", "name": "合锻智能", "hot_rank": 77, "hot_rank_chg": 53, "stock_cnt": 5777, "price": "25.01", "change": "3.99", "market_id": "17", "circulate_market_value": "12365305100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301171", "name": "易点天下", "hot_rank": 78, "hot_rank_chg": 82, "stock_cnt": 5777, "price": "37.87", "change": "-0.40", "market_id": "33", "circulate_market_value": "19006372000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 79, "hot_rank_chg": -30, "stock_cnt": 5777, "price": "12.68", "change": "-1.48", "market_id": "33", "circulate_market_value": "8684562400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 1.21}, {"name": "核电", "change_pct": 1.41}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "充电桩", "change_pct": 1.39}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "新能源汽车", "change_pct": 1.22}, {"name": "储能", "change_pct": 1.47}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "智能电网", "change_pct": 1.27}, {"name": "核聚变", "change_pct": 1.74}]}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 80, "hot_rank_chg": 38, "stock_cnt": 5777, "price": "41.75", "change": "3.75", "market_id": "33", "circulate_market_value": "11208303500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 81, "hot_rank_chg": 8, "stock_cnt": 5777, "price": "4.20", "change": "9.95", "market_id": "33", "circulate_market_value": "2736690300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "乳业", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.21}, {"name": "乳业（奶粉）", "change_pct": 2.33}, {"name": "股权转让", "change_pct": 1.49}, {"name": "一带一路", "change_pct": 0.91}, {"name": "优化生育（三孩）", "change_pct": 0.93}, {"name": "智慧城市", "change_pct": 1.48}, {"name": "食品", "change_pct": 1.14}, {"name": "基因编辑", "change_pct": 0.35}, {"name": "社区团购", "change_pct": 1.66}, {"name": "大农业", "change_pct": 0.82}, {"name": "5G消息/RCS", "change_pct": 1.55}, {"name": "广西概念", "change_pct": 0.98}, {"name": "饮料", "change_pct": 1.39}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 82, "hot_rank_chg": -13, "stock_cnt": 5777, "price": "185.03", "change": "0.52", "market_id": "33", "circulate_market_value": "145494720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600126", "name": "杭钢股份", "hot_rank": 83, "hot_rank_chg": -37, "stock_cnt": 5777, "price": "7.18", "change": "-2.58", "market_id": "17", "circulate_market_value": "24248218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 1.13}, {"name": "钢铁", "change_pct": 0.78}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "浙江国企改革", "change_pct": 0.54}, {"name": "数字经济", "change_pct": 1.15}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "汽车拆解", "change_pct": 0.45}, {"name": "国资云", "change_pct": 0.67}, {"name": "东数西算/算力", "change_pct": 1.5}, {"name": "国企改革", "change_pct": 0.84}, {"name": "DeepSeek概念股", "change_pct": 0.7}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 84, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "12.11", "change": "2.28", "market_id": "33", "circulate_market_value": "9797220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.71}, {"name": "大飞机", "change_pct": 1.15}, {"name": "北斗导航", "change_pct": 1.67}, {"name": "高铁轨交", "change_pct": 1.25}, {"name": "军民融合", "change_pct": 1.5}, {"name": "磁悬浮", "change_pct": 0.71}, {"name": "军工", "change_pct": 1.29}, {"name": "碳纤维", "change_pct": 1.09}, {"name": "无人机", "change_pct": 1.56}, {"name": "航天", "change_pct": 1.57}, {"name": "卫星互联网", "change_pct": 1.71}, {"name": "低空经济", "change_pct": 1.21}, {"name": "海洋经济", "change_pct": 0.99}]}, {"code": "002379", "name": "宏桥控股", "hot_rank": 85, "hot_rank_chg": 252, "stock_cnt": 5777, "price": "21.34", "change": "10.00", "market_id": "33", "circulate_market_value": "24250216000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铝全产业链"}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 86, "hot_rank_chg": 6, "stock_cnt": 5777, "price": "101.00", "change": "4.48", "market_id": "33", "circulate_market_value": "233393450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 87, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "120.51", "change": "-0.40", "market_id": "33", "circulate_market_value": "99904663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002859", "name": "洁美科技", "hot_rank": 88, "hot_rank_chg": -36, "stock_cnt": 5777, "price": "80.00", "change": "-1.62", "market_id": "33", "circulate_market_value": "34265216000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 89, "hot_rank_chg": -54, "stock_cnt": 5777, "price": "5.25", "change": "4.58", "market_id": "17", "circulate_market_value": "8207410900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.37}, {"name": "共享经济", "change_pct": 1.38}, {"name": "云计算数据中心", "change_pct": 1.34}, {"name": "旅游", "change_pct": 0.82}, {"name": "物业管理", "change_pct": 2.74}]}, {"code": "600641", "name": "先导基电", "hot_rank": 90, "hot_rank_chg": 50, "stock_cnt": 5777, "price": "35.72", "change": "10.01", "market_id": "17", "circulate_market_value": "33242101000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "铟"}, {"code": "002202", "name": "金风科技", "hot_rank": 91, "hot_rank_chg": -29, "stock_cnt": 5777, "price": "20.44", "change": "2.61", "market_id": "33", "circulate_market_value": "68750044000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 92, "hot_rank_chg": -25, "stock_cnt": 5777, "price": "11.03", "change": "0.27", "market_id": "33", "circulate_market_value": "5634993700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": 1.62}, {"name": "5G", "change_pct": 2.11}, {"name": "光通信", "change_pct": 3.87}, {"name": "教育", "change_pct": 1.36}, {"name": "毫米波通信", "change_pct": 1.97}, {"name": "卫星互联网", "change_pct": 1.71}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "毫米波雷达", "change_pct": 2.08}, {"name": "5.5G概念", "change_pct": 2.95}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 93, "hot_rank_chg": -19, "stock_cnt": 5777, "price": "19.06", "change": "0.90", "market_id": "33", "circulate_market_value": "17701155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300063", "name": "天龙集团", "hot_rank": 94, "hot_rank_chg": 1284, "stock_cnt": 5777, "price": "10.18", "change": "8.88", "market_id": "33", "circulate_market_value": "6377942500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.11}, {"name": "直播/短视频", "change_pct": 1.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "阿里巴巴概念股", "change_pct": 0.99}, {"name": "腾讯概念股", "change_pct": 1.07}, {"name": "传媒", "change_pct": 1.31}, {"name": "快手概念股", "change_pct": 1.89}, {"name": "虚拟数字人", "change_pct": 1.44}, {"name": "AIGC概念", "change_pct": 1.13}, {"name": "字节跳动概念股", "change_pct": 1.55}, {"name": "光刻机（胶）", "change_pct": 2.3}, {"name": "华为鸿蒙", "change_pct": 0.74}, {"name": "网红/MCN", "change_pct": 1.62}, {"name": "AI营销", "change_pct": 1.57}, {"name": "华为产业链", "change_pct": 1.6}, {"name": "AI视频", "change_pct": 1.47}, {"name": "小红书概念股", "change_pct": 1.82}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 95, "hot_rank_chg": 13, "stock_cnt": 5777, "price": "12.47", "change": "1.05", "market_id": "17", "circulate_market_value": "16001487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.29}, {"name": "强势人气股", "change_pct": 2.17}, {"name": "智能制造", "change_pct": 1.33}, {"name": "工业互联网", "change_pct": 0.92}, {"name": "培育钻石", "change_pct": 1.65}, {"name": "金刚线", "change_pct": 1.99}, {"name": "国资入股", "change_pct": 1.48}, {"name": "深地经济", "change_pct": -0.14}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 96, "hot_rank_chg": 38, "stock_cnt": 5777, "price": "345.79", "change": "2.94", "market_id": "17", "circulate_market_value": "140507730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 98, "hot_rank_chg": -2, "stock_cnt": 5777, "price": "279.39", "change": "1.77", "market_id": "33", "circulate_market_value": "241726820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 99, "hot_rank_chg": -4, "stock_cnt": 5777, "price": "35.86", "change": "-2.16", "market_id": "17", "circulate_market_value": "55856702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 100, "hot_rank_chg": 396, "stock_cnt": 5777, "price": "12.47", "change": "9.96", "market_id": "17", "circulate_market_value": "7417511300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能", "xgb_concepts": [{"name": "数字孪生", "change_pct": 1.12}, {"name": "VR&AR", "change_pct": 1.59}, {"name": "装修装饰", "change_pct": 1.8}, {"name": "数字经济", "change_pct": 1.15}, {"name": "百度概念股", "change_pct": 1.27}, {"name": "全息概念", "change_pct": 2.03}, {"name": "NFT", "change_pct": 1.17}, {"name": "元宇宙", "change_pct": 1.16}, {"name": "虚拟数字人", "change_pct": 1.44}, {"name": "网红/MCN", "change_pct": 1.62}, {"name": "ChatGPT", "change_pct": 0.82}, {"name": "智能眼镜/MR头显", "change_pct": 1.86}, {"name": "多模态", "change_pct": 1.18}, {"name": "AI视频", "change_pct": 1.47}]}];
const LIMIT_UP_POOL = [{"code": "600266", "name": "城建发展", "price": 4.6, "change_pct": 10.05, "reason": "1、实控人为北京国资委，主营房地产以及拆迁项目；\n2、公司直接持有二十一世纪空间技术应用股份有限公司部分股权，该公司官网显示其是面向中国及全球客户的空间遥感大数据服务商，是中国商业航天卫星遥感的开拓者", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1786513521, "break_limit_up_times": 1}, {"code": "301315", "name": "威士顿", "price": 46.16, "change_pct": 19.99, "reason": "公司“威士顿工业AI智能体软件”已获软件产品证书并应用于实际科创项目，入选上海市“AI+制造”专业服务商目录", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 6.68, "first_limit_up": 1786498917, "break_limit_up_times": 0}, {"code": "600683", "name": "京投发展", "price": 11.75, "change_pct": 10.02, "reason": "1、公司拟将房地产开发业务相关资产及负债转让至控股股东北京市基础设施投资有限公司，目前正开展审计、评估等工作；\n2、公司筹划收购西安奇芯光电股权，标的从事光电子器件制造", "plates": ["房地产"], "limit_up_days": 3, "turnover_ratio": 0.31, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "603758", "name": "秦安股份", "price": 13.95, "change_pct": 10.02, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 4, "turnover_ratio": 0.6, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "002146", "name": "荣盛发展", "price": 1.27, "change_pct": 10.43, "reason": "河北省房地产龙头；公司持有中冀投资股份有限公司52.2152%股份，旗下子公司中冀投资连续两轮参与蓝箭航天融资", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 10.27, "first_limit_up": 1786498725, "break_limit_up_times": 3}, {"code": "600857", "name": "宁波中百", "price": 19.73, "change_pct": 9.98, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1786499471, "break_limit_up_times": 4}, {"code": "002582", "name": "好想你", "price": 11.15, "change_pct": 9.96, "reason": "红枣行业龙头，通过持有深圳龙珠股权投资基金合伙企业（有限合伙）基金份额间接参与投资了蜜雪冰城股份有限公司。", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.46, "first_limit_up": 1786513242, "break_limit_up_times": 0}, {"code": "001313", "name": "粤海饲料", "price": 8, "change_pct": 10.04, "reason": "全资子公司湛江粤海水产有限公司经营有条冻、淡晒金鲳鱼、黄花鱼等水产品及水产品预制菜", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1786512222, "break_limit_up_times": 0}, {"code": "002047", "name": "宝鹰股份", "price": 3.92, "change_pct": 10.11, "reason": "公司正推进高端光耦合器产业投资，产品可应用于新能源、智能电网等领域", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 2.53, "first_limit_up": 1786498329, "break_limit_up_times": 0}, {"code": "301602", "name": "超研股份", "price": 18.38, "change_pct": 19.97, "reason": "1、公司开发并安装在便携式超声和拟安装在便携式DR设备中的“宏云”系统依托5G网络可实现远程传输图像、报告及远程交互等功能；依托公司开发的“麦粒医生”平台可随时随地获得高水平医生的在线诊断指导，提供产品的使用咨询培训和产品维护等远程服务；\n2、公司配合美国纳斯达克一家上市公司开发了超声影像引导下手术机器人系统", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.1, "first_limit_up": 1786498707, "break_limit_up_times": 1}, {"code": "000802", "name": "北京文化", "price": 5.69, "change_pct": 10.06, "reason": "公司参与《欢迎来龙餐馆》项目投资", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 16.28, "first_limit_up": 1786497900, "break_limit_up_times": 1}, {"code": "002379", "name": "宏桥控股", "price": 21.34, "change_pct": 10.0, "reason": "大型综合性铝加工企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.27, "first_limit_up": 1786499742, "break_limit_up_times": 0}, {"code": "603191", "name": "望变电气", "price": 15.4, "change_pct": 10.0, "reason": "公司220 kV及以下变压器订单饱和、储备6个月，产品已获美国德克萨斯州、南美洲、阿曼等地数据中心项目订单", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.45, "first_limit_up": 1786498437, "break_limit_up_times": 1}, {"code": "000665", "name": "湖北广电", "price": 4.42, "change_pct": 9.95, "reason": "1、公司以全资子公司湖北广电网络数字科技此前作为平台与载体与武汉华鑫信股权投资集团有限公司共同投资建设光谷智算中心，计划基建投资规模为25亿元，部署算力规模不少于25000P。\n2、公司与华为在光传输、数据通信、光纤接入等ICT基础网络领域有合作。", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.96, "first_limit_up": 1786498401, "break_limit_up_times": 1}, {"code": "000720", "name": "新能泰山", "price": 4.04, "change_pct": 10.08, "reason": "控股子公司曲阜电缆主要从事电线电缆、光纤光缆、电力光缆等产品的研发、制造与销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.6, "first_limit_up": 1786512504, "break_limit_up_times": 1}, {"code": "603615", "name": "茶花股份", "price": 17.94, "change_pct": 9.99, "reason": "公司通过并购达迈智能及达迈香港100%股权切入电子元器件分销，已与新思、锐石等原厂建立合作，产品线覆盖存储、射频器件、无线连接", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.9, "first_limit_up": 1786514347, "break_limit_up_times": 0}, {"code": "001696", "name": "宗申动力", "price": 17.29, "change_pct": 9.99, "reason": "控股子公司宗申航发是国内首批以民营为主体，成功自主研发航空发动机的创新型企业之一；具备军工资质，主要产品400HP以下航空活塞发动机广泛应用于国内外军、民用无人机及轻型通航飞机市场", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.75, "first_limit_up": 1786504836, "break_limit_up_times": 1}, {"code": "600602", "name": "云赛智联", "price": 20.25, "change_pct": 9.99, "reason": "上海百千万智算集群工程正式启动；公司以云服务大数据、行业解决方案、智能化产品为核心业务，此前与阶跃星辰共同投资设立上海智能算力公司，其中阶跃星辰持股10%，云赛智联直接持股11%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "600397", "name": "江钨装备", "price": 18.74, "change_pct": 9.98, "reason": "公司拟定增募资不超过19亿元，用于收购控股股东旗下江钨硬质合金、华茂钨材料及九江有色金属冶炼三家公司100%股权，拟注入钨制品及钽铌制品领域优质资产", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 9.77, "first_limit_up": 1786500314, "break_limit_up_times": 0}, {"code": "600881", "name": "亚泰集团", "price": 2.06, "change_pct": 10.16, "reason": "吉林长春国资委旗下，主营水泥建材、医药、地产等；公司医药集团所属的亚泰制药、龙鑫药业、东北亚药业、亚泰永安堂药业均以生产中成药品种为主", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 11.9, "first_limit_up": 1786511145, "break_limit_up_times": 0}, {"code": "600234", "name": "科新发展", "price": 23.39, "change_pct": 10.02, "reason": "公司主营建筑工程业务，控股子公司已增资开展算力租赁业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1786515305, "break_limit_up_times": 0}, {"code": "600162", "name": "香江控股", "price": 4.72, "change_pct": 10.02, "reason": "公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 5.21, "first_limit_up": 1786498420, "break_limit_up_times": 2}, {"code": "603696", "name": "安记食品", "price": 15.41, "change_pct": 9.99, "reason": "公司位于福建泉州市，系复合调味品小龙头，主要产品包括复合调味粉、天然提取物调味料、香辛料、酱类、风味清汤等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 12.61, "first_limit_up": 1786512603, "break_limit_up_times": 0}, {"code": "603369", "name": "今世缘", "price": 30.72, "change_pct": 9.99, "reason": "江苏优质白酒企业，现有“国缘”、“今世缘”和“高沟”三大白酒品牌", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1786513974, "break_limit_up_times": 2}, {"code": "002421", "name": "达实智能", "price": 3.88, "change_pct": 9.92, "reason": "公司在6月3日举办的生态伙伴大会上展示了AI Agent 2.0的演进成果，仅用两个月从“1个超级智能体+5个场景智能体”快速迭代至“1个超级智能体+15个场景智能体”，全方位呈现了在“AI+物联网平台”领域的技术实力", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 9.05, "first_limit_up": 1786498830, "break_limit_up_times": 0}, {"code": "603076", "name": "乐惠国际", "price": 23.06, "change_pct": 10.02, "reason": "国内啤酒设备龙头，发力精酿啤酒业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.37, "first_limit_up": 1786498694, "break_limit_up_times": 1}, {"code": "002870", "name": "香山股份", "price": 47.49, "change_pct": 10.01, "reason": "公司旗下均胜群英参与了贾维斯JARVIS的人形机器人智能表面、执行器方面的研发、生产工作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.88, "first_limit_up": 1786499358, "break_limit_up_times": 6}, {"code": "600216", "name": "浙江医药", "price": 13.77, "change_pct": 9.98, "reason": "公司为维生素A、E龙头之一", "plates": ["维生素"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1786501530, "break_limit_up_times": 0}, {"code": "603538", "name": "美诺华", "price": 33.33, "change_pct": 10.0, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.07, "first_limit_up": 1786498415, "break_limit_up_times": 1}, {"code": "000736", "name": "中交发展", "price": 4.95, "change_pct": 10.0, "reason": "中交房地产集团控股的上市平台，当前主营业务聚焦 “物业管理 + 资产管理与运营” 双轮驱动", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1786513779, "break_limit_up_times": 0}, {"code": "000936", "name": "华西股份", "price": 5.76, "change_pct": 9.92, "reason": "公司参股熹联光芯微电子、纵慧芯光等公司，标的主营硅光、CPO等业务", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.33, "first_limit_up": 1786502697, "break_limit_up_times": 1}, {"code": "600376", "name": "首开股份", "price": 4.42, "change_pct": 9.95, "reason": "公司通过金石投资间接投资宇树机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.66, "first_limit_up": 1786515976, "break_limit_up_times": 0}, {"code": "002164", "name": "宁波东力", "price": 13.09, "change_pct": 10.0, "reason": "公司的产品包括行星减速器等，杭州湾电机、减速器部分车间已投入生产；同时拟实施年产52万台电机及减速机项目", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.32, "first_limit_up": 1786503009, "break_limit_up_times": 1}, {"code": "002562", "name": "兄弟科技", "price": 5.05, "change_pct": 10.02, "reason": "全球专业的维生素供应商；公司产品对苯二酚是合成聚醚醚酮（PEEK）的核心原材料之一", "plates": ["维生素"], "limit_up_days": 1, "turnover_ratio": 6.34, "first_limit_up": 1786501638, "break_limit_up_times": 0}, {"code": "601155", "name": "新城控股", "price": 12.17, "change_pct": 10.04, "reason": "江苏省地产龙头", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1786514684, "break_limit_up_times": 0}, {"code": "603102", "name": "百合股份", "price": 42.05, "change_pct": 9.99, "reason": "公司主要从事营养保健食品的研产销，主要分为骨骼健康、基础营养（维生素、矿物质、蛋白质）、男性健康、女性健康、心脑血管、婴幼/儿童/青少年健康、 中老年健康等类别", "plates": ["维生素"], "limit_up_days": 1, "turnover_ratio": 8.02, "first_limit_up": 1786498355, "break_limit_up_times": 2}, {"code": "002031", "name": "巨轮智能", "price": 6.42, "change_pct": 9.93, "reason": "国内液压式硫化机的骨干生产企业，此前在机器人核心部件的高精度RV减速器技术取得突破", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 11.08, "first_limit_up": 1786498230, "break_limit_up_times": 1}, {"code": "002357", "name": "富临运业", "price": 9.99, "change_pct": 10.02, "reason": "四川省客运业龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1786498767, "break_limit_up_times": 0}, {"code": "300197", "name": "节能铁汉", "price": 2.3, "change_pct": 19.79, "reason": "公司拟出售除保留资产负债以外的公司其他资产及负债，资产出售交易对方为中国节能集团或其他市场主体，同时拟以支付现金方式向关联方购买股权类资产，购买的标的公司属于节能环保及设备制造行业。", "plates": ["环保"], "limit_up_days": 1, "turnover_ratio": 9.97, "first_limit_up": 1786516047, "break_limit_up_times": 0}, {"code": "003032", "name": "传智教育", "price": 12.91, "change_pct": 9.97, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 22.92, "first_limit_up": 1786499610, "break_limit_up_times": 1}, {"code": "300862", "name": "蓝盾光电", "price": 32.84, "change_pct": 19.99, "reason": "公司拟购岚创科技控股权，押注光学元件", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 1.37, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "605179", "name": "一鸣食品", "price": 30.39, "change_pct": 9.99, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 7.08, "first_limit_up": 1786500051, "break_limit_up_times": 1}, {"code": "600379", "name": "宝光股份", "price": 14.8, "change_pct": 10.04, "reason": "1、公司作为真空灭弧室行业龙头，产品广泛用于电力等行业配电系统，市场占有率常年第一；\n2、公司控股子公司宝光联悦拓展电子特气领域，核心产品5N级纯度的高纯氢气，已在高端半导体行业实现批量应用，用于晶圆退火、外延生长等关键工艺", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 8.74, "first_limit_up": 1786500754, "break_limit_up_times": 1}, {"code": "601700", "name": "风范股份", "price": 7.59, "change_pct": 10.0, "reason": "公司中标2.9亿元南方电网特高压直流输电工程项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 14.37, "first_limit_up": 1786502033, "break_limit_up_times": 0}, {"code": "000692", "name": "惠天热电", "price": 4.44, "change_pct": 9.9, "reason": "沈阳地区规模最大的国有专业化供热公司；沈阳市发改委确定公司为70万千瓦风电项目业主", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.77, "first_limit_up": 1786499979, "break_limit_up_times": 5}, {"code": "002244", "name": "滨江集团", "price": 9.53, "change_pct": 10.05, "reason": "杭州、上海、深圳区域高端地产商，操刀滨江楼盘", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.15, "first_limit_up": 1786514286, "break_limit_up_times": 0}, {"code": "002491", "name": "通鼎互联", "price": 18.84, "change_pct": 9.98, "reason": "通信线缆全产业链企业；公司聚焦光通信产业的发展，建成了涵盖光纤预制棒、光纤、光缆、通信电缆、通信设备等多个业务类别较为完整的产业链，可为客户提供一揽子的产品和解决方案", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.93, "first_limit_up": 1786500615, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 2.88, "change_pct": 9.92, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.75, "first_limit_up": 1786503987, "break_limit_up_times": 0}, {"code": "002329", "name": "皇氏集团", "price": 4.2, "change_pct": 9.95, "reason": "国内水牛奶龙头企业，在中国西南片区享有盛名", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 19.42, "first_limit_up": 1786498503, "break_limit_up_times": 5}, {"code": "603887", "name": "城地香江", "price": 11.35, "change_pct": 9.98, "reason": "1、公司为上海电信客户字节提供定制化数据中心服务，合计实现计费销售18兆瓦；\n2、子公司香江科技主营IDC相关设备和解决方案、IDC系统集成以及IDC运营管理和增值服务业务，与华为签署全面合作协议。\n3、实际控制人将由谢晓东及其一致行动人卢静芳变更为国务院国有资产监督管理委员会", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 1.19, "first_limit_up": 1786497901, "break_limit_up_times": 0}, {"code": "000887", "name": "中鼎股份", "price": 21.54, "change_pct": 10.01, "reason": "1、公司设立全资子公司安徽睿思博机器人科技有限公司，推动机器人部件产品的生产配套；\n2、子公司中鼎流体及中鼎智能目前已推出系列化储能液冷机组、超算中心浸没式液冷机组、热管理控制器、温压一体传感器、冷媒流道板等产品", "plates": ["机器人", "液冷服务器"], "limit_up_days": 1, "turnover_ratio": 4.27, "first_limit_up": 1786498443, "break_limit_up_times": 4}, {"code": "002437", "name": "誉衡药业", "price": 3.86, "change_pct": 9.97, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 25.73, "first_limit_up": 1786498590, "break_limit_up_times": 8}, {"code": "000715", "name": "中兴商业", "price": 5.42, "change_pct": 9.94, "reason": "公司主营商场主要分布于沈阳市核心商圈", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.71, "first_limit_up": 1786512240, "break_limit_up_times": 0}, {"code": "000048", "name": "京基智农", "price": 24.13, "change_pct": 9.98, "reason": "1、公司全资设立深圳市子夏智算科技有限公司，并合资成立深圳市子夏北方智算算力网络有限公司，实质性推进算力实体落地，业务涵盖人工智能基础与应用软件开发、云计算设备销售等，积极拓展算力业务打造新增长曲线；\n2、公司主营业务包括生猪养殖与销售、饲料生产与销售、种鸡与肉鸡养殖与销售等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.77, "first_limit_up": 1786498602, "break_limit_up_times": 5}, {"code": "002483", "name": "润邦股份", "price": 5.75, "change_pct": 9.94, "reason": "子公司签订6艘活鱼运输船销售合同，总金额约28亿元至33亿元", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 0.83, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "000669", "name": "ST金鸿", "price": 3.89, "change_pct": 9.89, "reason": "公司燃气特许经营权，目前主要集中在湖南省衡阳市", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1786500579, "break_limit_up_times": 0}, {"code": "600105", "name": "永鼎股份", "price": 41.21, "change_pct": 10.01, "reason": "1、公司已经实现了从光芯片-光器件-光模块-系统集成的全产业链布局；\n2、公司高温超导带材已应用于超导感应加热、超导磁拉单晶、可控核聚变磁体、超导电力装备等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.94, "first_limit_up": 1786502679, "break_limit_up_times": 7}, {"code": "600491", "name": "ST龙元", "price": 1.36, "change_pct": 9.68, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.12, "first_limit_up": 1786502568, "break_limit_up_times": 14}, {"code": "688635", "name": "长进光子", "price": 300.02, "change_pct": 20.0, "reason": "公司掺铒光纤主要应用于光通信领域；公司生产的超宽带L波段掺铒光纤波长达到1627nm，主要性能指标达到国际先进水平，助力我国400G光传输网实现规模化商用，与光迅科技、德科立、昂纳科技等国内知名通信厂商建立了稳定的合作关系\n", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 25.39, "first_limit_up": 1786516111, "break_limit_up_times": 0}, {"code": "002792", "name": "通宇通讯", "price": 37.11, "change_pct": 9.99, "reason": "佳贤通信与英伟达合作开发6G AI-RAN基站，公司拟入股25%股权", "plates": ["6G"], "limit_up_days": 1, "turnover_ratio": 27.19, "first_limit_up": 1786503099, "break_limit_up_times": 4}, {"code": "603232", "name": "格尔软件", "price": 18, "change_pct": 10.02, "reason": "1、公司“格尔AI大模型应用安全护栏系统”成为首个通过中国信通院大模型安全围栏能力评估的系统，并前瞻性地为AI智能体构建“数字身份与信任体系”；\n2、公司已加入上海鲲鹏生态联盟，投资的上海泓格后量子科技有限公司致力于抗量子密码领域技术研究、标准制定、产品研发，在政务、金融、军队等领域开展试点、和应用推广工作", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 8.97, "first_limit_up": 1786498750, "break_limit_up_times": 0}, {"code": "002081", "name": "金 螳 螂", "price": 4.37, "change_pct": 10.08, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1786498494, "break_limit_up_times": 0}, {"code": "000410", "name": "沈阳机床", "price": 5.76, "change_pct": 9.92, "reason": "数控机床龙头", "plates": ["工业母机"], "limit_up_days": 1, "turnover_ratio": 1.98, "first_limit_up": 1786498356, "break_limit_up_times": 1}, {"code": "600572", "name": "康恩贝", "price": 4.75, "change_pct": 9.95, "reason": "公司布洛芬片即将上市", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.82, "first_limit_up": 1786516408, "break_limit_up_times": 1}, {"code": "002229", "name": "鸿博股份", "price": 12.91, "change_pct": 9.97, "reason": "1、全资子公司英博数科是北京·AI创新赋能中心的唯一指定运营方，公司与英伟达在包括智算中心、通用技术创新赋能公共服务平台、AI创新孵化加速器等十大领域进行合作；\n2、当地时间3月7日，OpenClaw 创始人在平台X上分享龙虾基准测试排行榜。MiniMax M2.1，成功率93.6%，位居第二；公司全资子公司英博数科近期与AI多模态大模型公司MiniMax达成协议，英博数科为MiniMax提供一定规模的英伟达智算服务器所有的算力和资源以及配套软件、应用以及技术服务", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 5.25, "first_limit_up": 1786498200, "break_limit_up_times": 0}, {"code": "600604", "name": "市北高新", "price": 5.01, "change_pct": 10.11, "reason": "公司为央视融媒体产业投资基金有限合伙人，占基金2.69%份额，央视融媒体基金于2023年11月投资江苏天兵航天科技股份有限公司、于2023年12月投资长江存储控股股份有限公司、于2024年1月投资上海垣信卫星科技有限公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.64, "first_limit_up": 1786498563, "break_limit_up_times": 0}, {"code": "603466", "name": "风语筑", "price": 12.47, "change_pct": 9.96, "reason": "公司联手宇树科技共同打造杭州市具身智能展示与应用推广中心，深度参与国家级中试基地配套建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1786499437, "break_limit_up_times": 1}, {"code": "601886", "name": "江河集团", "price": 10.48, "change_pct": 9.97, "reason": "全球高端幕墙龙头之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.51, "first_limit_up": 1786498252, "break_limit_up_times": 4}, {"code": "002589", "name": "瑞康医药", "price": 3.55, "change_pct": 9.91, "reason": "中医药全产业链精准服务型企业，拥有种植、中药饮片加工业务，控股子公司马鞍山井泉中药主要从事中药饮片生产和销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 17.87, "first_limit_up": 1786511652, "break_limit_up_times": 2}, {"code": "603330", "name": "天洋新材", "price": 8.83, "change_pct": 9.96, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.16, "first_limit_up": 1786501351, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 35.72, "change_pct": 10.01, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 8.07, "first_limit_up": 1786501739, "break_limit_up_times": 0}, {"code": "603277", "name": "银都股份", "price": 11.64, "change_pct": 10.02, "reason": "公司为商用餐饮制冷设备龙头，境外子公司累计收到美国关税退税约1160万美元", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 0.82, "first_limit_up": 1786498917, "break_limit_up_times": 1}, {"code": "603922", "name": "ST金鸿顺", "price": 12.03, "change_pct": 9.96, "reason": "公司主营汽车车身和底盘冲压零部件及其相关模具，拟购买新思考电机95.79%股权，标的是微特电机行业下属微型驱动马达领域头部企业，为国内主流智能手机品牌的摄像头马达核心供应商，并积极拓宽汽车电子行业应用，探索智能驾驶、人形机器人等新兴行业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.97, "first_limit_up": 1786516952, "break_limit_up_times": 0}, {"code": "000593", "name": "德龙汇能", "price": 25.27, "change_pct": 10.01, "reason": "公司主营城市管道燃气和零售商业，知名游资刘鑫举牌，持股比例增至5.01%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.02, "first_limit_up": 1786498857, "break_limit_up_times": 0}, {"code": "603052", "name": "可川科技", "price": 58.47, "change_pct": 10.01, "reason": "1、知名牛散屠文斌家族举牌公司。\n2、子公司可川光子致力于高速硅光芯片和硅光模块的研发和生产，目前首条400G/800G高速光模块生产线已正式投产启用。", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1786504104, "break_limit_up_times": 0}, {"code": "603690", "name": "至纯科技", "price": 27.3, "change_pct": 9.99, "reason": "公司为国内领先的核心工艺设备及系统专业供应商，与深圳新凯来多年保持合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.57, "first_limit_up": 1786499188, "break_limit_up_times": 0}, {"code": "002178", "name": "延华智能", "price": 5.09, "change_pct": 9.94, "reason": "公司医疗板块AI助手“星仔”已融合人工智能技术，落地智能导诊、报告解读、辅助诊断等场景，实现医疗服务智能化升级", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1786498878, "break_limit_up_times": 0}, {"code": "605286", "name": "同力天启", "price": 30.99, "change_pct": 10.01, "reason": "公司此前与天启鸿源一起同甘肃省庆阳市人民政府成功签署战略合作框架协议，项目建成后， 储能电站将为庆阳“东数西算”产业园区的数据中心直供绿色电力，实现“算电协同”，并在保证供电可靠性的前提下，实现部分备用电源的功用，提高算力中心绿电占比，进一步降低算力中心能耗成本", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 1.54, "first_limit_up": 1786497900, "break_limit_up_times": 0}, {"code": "605289", "name": "罗曼股份", "price": 109.29, "change_pct": 10.01, "reason": "公司拟收购武桐高新39.23%的股权，标的主要从事AIDC算力服务器与集群综合解决方案服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.43, "first_limit_up": 1786503673, "break_limit_up_times": 0}, {"code": "002573", "name": "清新环境", "price": 3.58, "change_pct": 10.15, "reason": "公司是综合烟气治理龙头，脱硫技术领域保持绝对领先地位", "plates": ["环保"], "limit_up_days": 1, "turnover_ratio": 2.77, "first_limit_up": 1786515069, "break_limit_up_times": 2}, {"code": "002005", "name": "德豪润达", "price": 2.51, "change_pct": 10.09, "reason": "公司主营以智能咖啡机为主的厨房小家电业务，拥有自有品牌北美电器（ACA）", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1786499559, "break_limit_up_times": 0}, {"code": "603897", "name": "长城科技", "price": 32.05, "change_pct": 9.99, "reason": "公司是国内电磁线种类最齐全的企业之一，主营业务为电磁线的研发产销；据机构研究，假设特斯拉人形机器人本体线束成本占BOM表总成本的5%，伺服电机线束价值量占单个伺服电机的12%，当特斯拉人形机器人出货量达到100万台时，有望带来90亿元增量市场", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 16.59, "first_limit_up": 1786517026, "break_limit_up_times": 1}, {"code": "603228", "name": "景旺电子", "price": 98.21, "change_pct": 10.0, "reason": "国内少数产品类型覆盖RPCB、FPC和MPCB的厂商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.77, "first_limit_up": 1786516986, "break_limit_up_times": 0}, {"code": "001260", "name": "坤泰股份", "price": 19.12, "change_pct": 10.01, "reason": "公司主营业务为汽车内饰件材料，主要产品包括汽车地毯和汽车脚垫两大类", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.19, "first_limit_up": 1786499343, "break_limit_up_times": 0}, {"code": "603289", "name": "泰瑞机器", "price": 9.34, "change_pct": 10.01, "reason": "公司为注塑机行业龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.92, "first_limit_up": 1786499363, "break_limit_up_times": 0}, {"code": "603269", "name": "海鸥股份", "price": 17.56, "change_pct": 10.03, "reason": "公司冷却塔已应用于数据算力中心", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 9.36, "first_limit_up": 1786512162, "break_limit_up_times": 1}, {"code": "002248", "name": "华东数控", "price": 12.17, "change_pct": 10.04, "reason": "公司HLC500、630等系列卧式加工中心多款产品可广泛适用于工程机械、汽车、航空航天等行业", "plates": ["工业母机"], "limit_up_days": 3, "turnover_ratio": 23.23, "first_limit_up": 1786498221, "break_limit_up_times": 7}, {"code": "002552", "name": "宝鼎科技", "price": 60.07, "change_pct": 10.0, "reason": "公司控股子公司金宝电子专业从事电子铜箔、覆铜板设计、研发、生产及销售，是国内能提供设计至生产一体化全流程服务的少数企业之一；产品广泛应用于 5G 通讯、汽车电子等领域，其中电子铜箔有 HTE 箔、LP 箔等多种类型，覆铜板涵盖玻纤布基、复合基、铝基等，是 PCB 产业链中的重要供应商", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.88, "first_limit_up": 1786502835, "break_limit_up_times": 0}, {"code": "603396", "name": "金辰股份", "price": 27.54, "change_pct": 9.98, "reason": "公司为全球光伏组件设备龙头；表示与印度能源巨头Adani集团旗下太阳能光伏制造公司AdaniSolar签署2GW光伏组件高效自动化生产线合作协议", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 4.29, "first_limit_up": 1786501208, "break_limit_up_times": 1}, {"code": "002520", "name": "日发精机", "price": 6.59, "change_pct": 10.02, "reason": "1、公司拥有桁架机械手直角坐标机器人方面的专利，并已大量应用到自动化连线设备；一季度扭亏为盈；\n2、公司产品涵盖了数控车床、高端磨床及柔性化生产线等，公司数控机床产品数控化率100%，行业排名第一", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.82, "first_limit_up": 1786498584, "break_limit_up_times": 1}, {"code": "002682", "name": "龙洲股份", "price": 5.03, "change_pct": 10.07, "reason": "公司与宁德时代签署战略合作协议", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.92, "first_limit_up": 1786497900, "break_limit_up_times": 1}, {"code": "600721", "name": "百花医药", "price": 14.03, "change_pct": 10.04, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 7, "turnover_ratio": 34.43, "first_limit_up": 1786498425, "break_limit_up_times": 19}, {"code": "002172", "name": "澳洋健康", "price": 3.75, "change_pct": 9.97, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1786504089, "break_limit_up_times": 4}, {"code": "688167", "name": "炬光科技", "price": 245.52, "change_pct": 20.0, "reason": "公司的产品广泛应用于光通信模块、硅光模块，如光发射模块（TOSA）、光接收模块（ROSA）、光子集成电路（PIC）、共封装光学器件（CPO）等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.62, "first_limit_up": 1786499443, "break_limit_up_times": 0}, {"code": "603095", "name": "越剑智能", "price": 14.45, "change_pct": 9.97, "reason": "公司AI智能验布机深度融合华为ESIE算法模型与昇腾AI算力，验布速度可达60米/分钟，瑕疵检出率超90%，能精准识别针织、梭织等多场景面料瑕疵，还可通过边缘计算与云端协同实现质量追溯", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.74, "first_limit_up": 1786515328, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};