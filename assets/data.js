const UPDATE_TIME = "2026-10-24 00:12";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 4.46,
    "rate": 0,
    "tag": "27家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 3.43,
    "rate": 0,
    "tag": "45家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "人工智能",
    "rise": 3.03,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "AI应用",
    "rise": 3.47,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "MLOps概念",
    "rise": 6.51,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886040"
  },
  {
    "name": "网络安全",
    "rise": 3.43,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885459"
  },
  {
    "name": "创新药",
    "rise": 1.68,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续144天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": 2.1,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续243天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "存储芯片",
    "rise": 2.59,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续267天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续314天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "减速器",
    "rise": 4.62,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "PCB概念",
    "rise": 1.73,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续137天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "芯片概念",
    "rise": 2.76,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "军工",
    "rise": 2.1,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "数据要素",
    "rise": 3.01,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "886041"
  },
  {
    "name": "固态电池",
    "rise": 2.53,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "MLCC概念",
    "rise": 3.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续54天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "猪肉",
    "rise": 0.62,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 2,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "华为欧拉",
    "rise": 5.25,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "885982"
  },
  {
    "name": "中国AI 50",
    "rise": 4.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "科创创业人工智能ETF",
    "code": "886102"
  }
];
const THS_EVENTS = [
  {
    "title": "宇树“功夫传奇”亮相，行业寻找商业化破局点",
    "desc": "",
    "heat": 860089,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "电机",
      "自动化设备",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "众诚科技",
        "code": "920207",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "2026世界物理AI大会现场，宇树科技王兴兴展示基于GPT-6模型的测试视频",
    "desc": "",
    "heat": 831761,
    "direction": "物理AI",
    "themes": [
      "仿真训练",
      "多模态感知硬件",
      "算力底座",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "凡拓数创",
        "code": "301313",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "产业基础能力提升“十五五”规划发布 打造产业集聚高地，引导资源向新赛道集中",
    "desc": "",
    "heat": 534972,
    "direction": "新型工业化",
    "themes": [
      "新型工业化"
    ],
    "stocks": [
      {
        "name": "慈星股份",
        "code": "300307",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "DeepSeek拟在最新一轮融资中筹得约1000亿元人民币",
    "desc": "",
    "heat": 498693,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "众诚科技",
        "code": "920207",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "PHP漏洞冲击全球网站，全球七成网站或受威胁",
    "desc": "",
    "heat": 452190,
    "direction": "网络安全",
    "themes": [
      "网络安全"
    ],
    "stocks": [
      {
        "name": "众诚科技",
        "code": "920207",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "西藏巴青7.0级地震共记录到余震413次 最大余震4.3级",
    "desc": "",
    "heat": 225375,
    "direction": "西藏基建",
    "themes": [
      "西藏基建"
    ],
    "stocks": [
      {
        "name": "西藏天路",
        "code": "600326",
        "chg": 5.03937
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "物理AI",
    "change": "+7.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+6.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+5.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+5.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ChatGPT",
    "change": "+5.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "征信概念",
    "change": "+5.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+5.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+5.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虚拟数字人",
    "change": "+5.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MCU概念",
    "change": "+4.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+4.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "元宇宙",
    "change": "+4.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手势识别",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+4.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机器视觉",
    "change": "+4.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D感应",
    "change": "+4.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无线耳机",
    "change": "+4.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5820,
    "price": "12.33",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "6984677300.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "6",
    "change_reason": "专业照明",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "石墨烯",
        "change_pct": 1.78
      },
      {
        "name": "军民融合",
        "change_pct": 2.11
      },
      {
        "name": "物联网",
        "change_pct": 3.03
      },
      {
        "name": "LED",
        "change_pct": 2.12
      },
      {
        "name": "军工",
        "change_pct": 1.88
      },
      {
        "name": "智慧灯杆",
        "change_pct": 2.55
      },
      {
        "name": "海洋经济",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "300296",
    "name": "利亚德",
    "hot_rank": 4,
    "hot_rank_chg": 22,
    "stock_cnt": 5820,
    "price": "7.32",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "16989695000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.07
      },
      {
        "name": "超高清视频",
        "change_pct": 3.37
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.42
      },
      {
        "name": "无人驾驶",
        "change_pct": 3.12
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "VR&AR",
        "change_pct": 3.9
      },
      {
        "name": "OLED",
        "change_pct": 1.94
      },
      {
        "name": "教育",
        "change_pct": 1.48
      },
      {
        "name": "智慧城市",
        "change_pct": 2.55
      },
      {
        "name": "LED",
        "change_pct": 2.12
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.39
      },
      {
        "name": "全息概念",
        "change_pct": 4.28
      },
      {
        "name": "MicroLED",
        "change_pct": 2.88
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.53
      },
      {
        "name": "元宇宙",
        "change_pct": 4.73
      },
      {
        "name": "虚拟数字人",
        "change_pct": 5.06
      },
      {
        "name": "教育信息化",
        "change_pct": 2.55
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.47
      },
      {
        "name": "MiniLED",
        "change_pct": 2.32
      },
      {
        "name": "远程办公",
        "change_pct": 3.86
      },
      {
        "name": "氮化镓",
        "change_pct": 2.67
      },
      {
        "name": "智慧灯杆",
        "change_pct": 2.55
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "物理AI",
        "change_pct": 7.82
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.87
      },
      {
        "name": "人形机器人",
        "change_pct": 5.35
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.33
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 5,
    "hot_rank_chg": 4,
    "stock_cnt": 5820,
    "price": "8.03",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "13064760000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.09
      },
      {
        "name": "电竞",
        "change_pct": 3.87
      },
      {
        "name": "手游",
        "change_pct": 3.52
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "游戏",
        "change_pct": 3.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 2.92
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.39
      },
      {
        "name": "传媒",
        "change_pct": 2.0
      },
      {
        "name": "快手概念股",
        "change_pct": 3.59
      },
      {
        "name": "元宇宙",
        "change_pct": 4.73
      },
      {
        "name": "虚拟数字人",
        "change_pct": 5.06
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.92
      },
      {
        "name": "web3.0",
        "change_pct": 4.32
      },
      {
        "name": "AIGC概念",
        "change_pct": 4.07
      },
      {
        "name": "数据要素",
        "change_pct": 3.42
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 3.64
      },
      {
        "name": "AI营销",
        "change_pct": 4.43
      },
      {
        "name": "ChatGPT",
        "change_pct": 5.55
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.87
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.32
      },
      {
        "name": "人形机器人",
        "change_pct": 5.35
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.09
      },
      {
        "name": "多模态",
        "change_pct": 4.52
      },
      {
        "name": "AI视频",
        "change_pct": 4.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.5
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.33
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 13,
    "hot_rank_chg": -3,
    "stock_cnt": 5820,
    "price": "10.89",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5158378300.00",
    "change_type": "1",
    "change_section": "11",
    "change_days": "7",
    "change_reason": "影视剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 3.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "VR&AR",
        "change_pct": 3.9
      },
      {
        "name": "游戏",
        "change_pct": 3.54
      },
      {
        "name": "影视",
        "change_pct": 3.34
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.5
      },
      {
        "name": "动漫",
        "change_pct": 4.69
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.39
      },
      {
        "name": "传媒",
        "change_pct": 2.0
      },
      {
        "name": "元宇宙",
        "change_pct": 4.73
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.09
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.5
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 16,
    "hot_rank_chg": -4,
    "stock_cnt": 5820,
    "price": "9.53",
    "change": "0.42",
    "market_id": "33",
    "circulate_market_value": "5719112400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 2.07
      },
      {
        "name": "边缘计算",
        "change_pct": 3.97
      },
      {
        "name": "核电",
        "change_pct": 1.4
      },
      {
        "name": "海工装备",
        "change_pct": 1.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "冷链",
        "change_pct": 0.95
      },
      {
        "name": "地热",
        "change_pct": 0.73
      },
      {
        "name": "储能",
        "change_pct": 2.05
      },
      {
        "name": "碳中和",
        "change_pct": 0.86
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.58
      },
      {
        "name": "汽车热管理",
        "change_pct": 2.8
      },
      {
        "name": "热泵",
        "change_pct": 1.47
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.13
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.89
      },
      {
        "name": "海洋经济",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 18,
    "hot_rank_chg": -5,
    "stock_cnt": 5820,
    "price": "4.91",
    "change": "-6.12",
    "market_id": "17",
    "circulate_market_value": "5696312200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.55
      },
      {
        "name": "复牌股",
        "change_pct": -9.0
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 22,
    "hot_rank_chg": -2,
    "stock_cnt": 5820,
    "price": "7.58",
    "change": "7.37",
    "market_id": "33",
    "circulate_market_value": "14193032000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": 2.15
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "军民融合",
        "change_pct": 2.11
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.85
      },
      {
        "name": "风电",
        "change_pct": 1.58
      },
      {
        "name": "军工",
        "change_pct": 1.88
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.94
      },
      {
        "name": "轮边电机",
        "change_pct": 3.63
      },
      {
        "name": "人形机器人",
        "change_pct": 5.35
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 24,
    "hot_rank_chg": 23,
    "stock_cnt": 5820,
    "price": "8.14",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "5746271300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 2.98
      },
      {
        "name": "国产软件",
        "change_pct": 4.17
      },
      {
        "name": "无人驾驶",
        "change_pct": 3.12
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "充电桩",
        "change_pct": 2.15
      },
      {
        "name": "北斗导航",
        "change_pct": 2.06
      },
      {
        "name": "智慧停车",
        "change_pct": 3.06
      },
      {
        "name": "物联网",
        "change_pct": 3.03
      },
      {
        "name": "教育",
        "change_pct": 1.48
      },
      {
        "name": "智慧城市",
        "change_pct": 2.55
      },
      {
        "name": "光伏",
        "change_pct": 1.18
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "机器人",
        "change_pct": 4.36
      },
      {
        "name": "机器视觉",
        "change_pct": 4.49
      },
      {
        "name": "智慧安防",
        "change_pct": 2.8
      },
      {
        "name": "智能制造",
        "change_pct": 3.3
      },
      {
        "name": "国产芯片",
        "change_pct": 3.43
      },
      {
        "name": "华为昇腾",
        "change_pct": 3.37
      },
      {
        "name": "职业教育",
        "change_pct": 2.48
      },
      {
        "name": "在线教育",
        "change_pct": 1.97
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 3.81
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "汽车检测",
        "change_pct": 2.08
      }
    ]
  },
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 28,
    "hot_rank_chg": 59,
    "stock_cnt": 5820,
    "price": "11.55",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "38427763000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.17
      },
      {
        "name": "锂电池",
        "change_pct": 2.93
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "机器人",
        "change_pct": 4.36
      },
      {
        "name": "智能制造",
        "change_pct": 3.3
      },
      {
        "name": "工业互联网",
        "change_pct": 3.58
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.94
      },
      {
        "name": "固态电池",
        "change_pct": 3.19
      },
      {
        "name": "MCU概念",
        "change_pct": 4.95
      },
      {
        "name": "人形机器人",
        "change_pct": 5.35
      },
      {
        "name": "小米汽车",
        "change_pct": 3.0
      },
      {
        "name": "低空经济",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 31,
    "hot_rank_chg": 0,
    "stock_cnt": 5820,
    "price": "11.00",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4409701800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "商贸零售",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 1.54
      },
      {
        "name": "新零售",
        "change_pct": 2.49
      },
      {
        "name": "物业管理",
        "change_pct": 1.53
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      },
      {
        "name": "地摊经济",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 33,
    "hot_rank_chg": -5,
    "stock_cnt": 5820,
    "price": "11.46",
    "change": "-6.45",
    "market_id": "17",
    "circulate_market_value": "7354835700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.0
      },
      {
        "name": "农业种植",
        "change_pct": -0.02
      },
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.3
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.67
      },
      {
        "name": "休闲食品",
        "change_pct": 1.24
      },
      {
        "name": "食品",
        "change_pct": 1.04
      },
      {
        "name": "食品安全",
        "change_pct": 2.47
      },
      {
        "name": "社区团购",
        "change_pct": 1.07
      },
      {
        "name": "大农业",
        "change_pct": 0.89
      },
      {
        "name": "预制菜",
        "change_pct": 0.82
      },
      {
        "name": "人造肉",
        "change_pct": 0.54
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 36,
    "hot_rank_chg": 14,
    "stock_cnt": 5820,
    "price": "8.54",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "2421646800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "机器人腱绳",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": 2.24
      },
      {
        "name": "光伏",
        "change_pct": 1.18
      },
      {
        "name": "机器人",
        "change_pct": 4.36
      },
      {
        "name": "干细胞",
        "change_pct": -0.11
      },
      {
        "name": "海洋经济",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 37,
    "hot_rank_chg": 66,
    "stock_cnt": 5820,
    "price": "10.10",
    "change": "2.43",
    "market_id": "17",
    "circulate_market_value": "50389089000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.17
      },
      {
        "name": "5G",
        "change_pct": 2.14
      },
      {
        "name": "VR&AR",
        "change_pct": 3.9
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "光通信",
        "change_pct": 1.82
      },
      {
        "name": "3D感应",
        "change_pct": 4.46
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "LED",
        "change_pct": 2.12
      },
      {
        "name": "国产芯片",
        "change_pct": 3.43
      },
      {
        "name": "MicroLED",
        "change_pct": 2.88
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.53
      },
      {
        "name": "激光雷达",
        "change_pct": 2.92
      },
      {
        "name": "华为汽车",
        "change_pct": 2.91
      },
      {
        "name": "MiniLED",
        "change_pct": 2.32
      },
      {
        "name": "氮化镓",
        "change_pct": 2.67
      },
      {
        "name": "大基金概念",
        "change_pct": 2.83
      },
      {
        "name": "碳化硅",
        "change_pct": 2.13
      },
      {
        "name": "磷化铟",
        "change_pct": 2.81
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.9
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.87
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 39,
    "hot_rank_chg": -9,
    "stock_cnt": 5820,
    "price": "3.43",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "6984163100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AIoT",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 3.97
      },
      {
        "name": "数字孪生",
        "change_pct": 3.47
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.52
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.14
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.38
      },
      {
        "name": "人脸识别",
        "change_pct": 4.28
      },
      {
        "name": "智慧停车",
        "change_pct": 3.06
      },
      {
        "name": "物联网",
        "change_pct": 3.03
      },
      {
        "name": "大数据",
        "change_pct": 3.27
      },
      {
        "name": "智慧城市",
        "change_pct": 2.55
      },
      {
        "name": "雄安新区",
        "change_pct": 1.42
      },
      {
        "name": "机器人",
        "change_pct": 4.36
      },
      {
        "name": "数字经济",
        "change_pct": 2.92
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 3.29
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.39
      },
      {
        "name": "建筑节能",
        "change_pct": 0.89
      },
      {
        "name": "旧改",
        "change_pct": 1.11
      },
      {
        "name": "医疗信息化",
        "change_pct": 2.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.56
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.32
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.49
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.13
      },
      {
        "name": "区块链",
        "change_pct": 3.08
      }
    ]
  },
  {
    "code": "300369",
    "name": "绿盟科技",
    "hot_rank": 47,
    "hot_rank_chg": 45,
    "stock_cnt": 5820,
    "price": "11.71",
    "change": "19.98",
    "market_id": "33",
    "circulate_market_value": "9591926700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 2.98
      },
      {
        "name": "泛在电力物联网",
        "change_pct": 2.29
      },
      {
        "name": "国产软件",
        "change_pct": 4.17
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "网络安全",
        "change_pct": 3.35
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "智能制造",
        "change_pct": 3.3
      },
      {
        "name": "工业互联网",
        "change_pct": 3.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产操作系统",
        "change_pct": 3.85
      },
      {
        "name": "腾讯概念股",
        "change_pct": 3.39
      },
      {
        "name": "信创",
        "change_pct": 3.8
      },
      {
        "name": "数据要素",
        "change_pct": 3.42
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 3.81
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 3.32
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 51,
    "hot_rank_chg": -24,
    "stock_cnt": 5820,
    "price": "10.25",
    "change": "4.49",
    "market_id": "33",
    "circulate_market_value": "3426153900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.29
      },
      {
        "name": "饲料",
        "change_pct": 0.6
      },
      {
        "name": "一带一路",
        "change_pct": 1.07
      },
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "保健品",
        "change_pct": 1.14
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.4
      },
      {
        "name": "污水处理",
        "change_pct": 1.1
      },
      {
        "name": "环保",
        "change_pct": 1.01
      },
      {
        "name": "食品",
        "change_pct": 1.04
      },
      {
        "name": "预制菜",
        "change_pct": 0.82
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      },
      {
        "name": "水产养殖",
        "change_pct": -0.71
      },
      {
        "name": "广西概念",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "603089",
    "name": "正裕工业",
    "hot_rank": 61,
    "hot_rank_chg": 41,
    "stock_cnt": 5820,
    "price": "11.89",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "3278301700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "机器人零部件",
    "xgb_concepts": [
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.35
      },
      {
        "name": "机器人",
        "change_pct": 4.36
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 62,
    "hot_rank_chg": -26,
    "stock_cnt": 5820,
    "price": "8.32",
    "change": "-3.14",
    "market_id": "17",
    "circulate_market_value": "2243173600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 2.06
      },
      {
        "name": "高股息",
        "change_pct": -0.06
      },
      {
        "name": "银行",
        "change_pct": -0.54
      },
      {
        "name": "白马股",
        "change_pct": 1.82
      },
      {
        "name": "破净股",
        "change_pct": 0.41
      },
      {
        "name": "大金融",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "002474",
    "name": "榕基软件",
    "hot_rank": 64,
    "hot_rank_chg": 30,
    "stock_cnt": 5820,
    "price": "7.11",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3819672800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI政务",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.29
      },
      {
        "name": "国产软件",
        "change_pct": 4.17
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "VR&AR",
        "change_pct": 3.9
      },
      {
        "name": "网络安全",
        "change_pct": 3.35
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.89
      },
      {
        "name": "物联网",
        "change_pct": 3.03
      },
      {
        "name": "教育",
        "change_pct": 1.48
      },
      {
        "name": "水务",
        "change_pct": 1.1
      },
      {
        "name": "智慧城市",
        "change_pct": 2.55
      },
      {
        "name": "智慧安防",
        "change_pct": 2.8
      },
      {
        "name": "数字经济",
        "change_pct": 2.92
      },
      {
        "name": "信创",
        "change_pct": 3.8
      },
      {
        "name": "核污染防治",
        "change_pct": 1.61
      },
      {
        "name": "教育信息化",
        "change_pct": 2.55
      },
      {
        "name": "智慧政务",
        "change_pct": 2.87
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 3.43
      },
      {
        "name": "传感器",
        "change_pct": 3.9
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 3.81
      },
      {
        "name": "远程办公",
        "change_pct": 3.86
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "自贸区",
        "change_pct": 1.0
      },
      {
        "name": "智能电网",
        "change_pct": 2.17
      },
      {
        "name": "区块链",
        "change_pct": 3.08
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 68,
    "hot_rank_chg": -28,
    "stock_cnt": 5820,
    "price": "7.00",
    "change": "3.55",
    "market_id": "33",
    "circulate_market_value": "13405647100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.89
      },
      {
        "name": "林业",
        "change_pct": 0.85
      },
      {
        "name": "碳中和",
        "change_pct": 0.86
      },
      {
        "name": "自贸区",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "600178",
    "name": "东安动力",
    "hot_rank": 70,
    "hot_rank_chg": -24,
    "stock_cnt": 5820,
    "price": "11.54",
    "change": "-6.10",
    "market_id": "17",
    "circulate_market_value": "5383134900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.94
      },
      {
        "name": "股权转让",
        "change_pct": 1.62
      },
      {
        "name": "军工集团",
        "change_pct": 1.3
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "军工",
        "change_pct": 1.88
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "振兴东北",
        "change_pct": 0.38
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.94
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.12
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "低空经济",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 75,
    "hot_rank_chg": -22,
    "stock_cnt": 5820,
    "price": "10.40",
    "change": "-6.31",
    "market_id": "17",
    "circulate_market_value": "4499805900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.62
      },
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "光伏",
        "change_pct": 1.18
      },
      {
        "name": "无线耳机",
        "change_pct": 4.43
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.26
      }
    ]
  },
  {
    "code": "000993",
    "name": "闽东电力",
    "hot_rank": 76,
    "hot_rank_chg": -24,
    "stock_cnt": 5820,
    "price": "12.71",
    "change": "-7.76",
    "market_id": "33",
    "circulate_market_value": "5820563000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.45
      },
      {
        "name": "水电",
        "change_pct": -0.76
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.89
      },
      {
        "name": "有色 · 钼",
        "change_pct": 1.75
      },
      {
        "name": "光伏",
        "change_pct": 1.18
      },
      {
        "name": "风电",
        "change_pct": 1.58
      },
      {
        "name": "有色金属",
        "change_pct": 1.48
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 3.19
      },
      {
        "name": "船舶",
        "change_pct": 1.63
      },
      {
        "name": "自贸区",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "002076",
    "name": "星光股份",
    "hot_rank": 81,
    "hot_rank_chg": -24,
    "stock_cnt": 5820,
    "price": "2.49",
    "change": "-7.78",
    "market_id": "33",
    "circulate_market_value": "2596308600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.65
      },
      {
        "name": "锂电池",
        "change_pct": 2.93
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.41
      },
      {
        "name": "量子通信",
        "change_pct": 1.97
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.47
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "LED",
        "change_pct": 2.12
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 3.19
      },
      {
        "name": "低价股",
        "change_pct": 0.84
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.56
      },
      {
        "name": "驱蚊概念",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 82,
    "hot_rank_chg": -19,
    "stock_cnt": 5820,
    "price": "10.15",
    "change": "-7.98",
    "market_id": "17",
    "circulate_market_value": "2987166500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 2.93
      },
      {
        "name": "强势人气股",
        "change_pct": 0.2
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.6
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "振兴东北",
        "change_pct": 0.38
      },
      {
        "name": "国企改革",
        "change_pct": 1.06
      },
      {
        "name": "自贸区",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 90,
    "hot_rank_chg": -5,
    "stock_cnt": 5820,
    "price": "7.37",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "3730867200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "仪器仪表",
        "change_pct": 2.95
      },
      {
        "name": "锂电池",
        "change_pct": 2.93
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.41
      },
      {
        "name": "有机硅",
        "change_pct": 0.35
      },
      {
        "name": "复牌股",
        "change_pct": -9.0
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.69
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "供应链金融",
        "change_pct": 2.77
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 95,
    "hot_rank_chg": -23,
    "stock_cnt": 5820,
    "price": "4.93",
    "change": "1.44",
    "market_id": "33",
    "circulate_market_value": "174359970000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.82
      },
      {
        "name": "手机产业链",
        "change_pct": 3.01
      },
      {
        "name": "超高清视频",
        "change_pct": 3.37
      },
      {
        "name": "苹果产业链",
        "change_pct": 3.42
      },
      {
        "name": "电竞",
        "change_pct": 3.87
      },
      {
        "name": "半导体",
        "change_pct": 3.17
      },
      {
        "name": "人工智能",
        "change_pct": 3.49
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.14
      },
      {
        "name": "VR&AR",
        "change_pct": 3.9
      },
      {
        "name": "OLED",
        "change_pct": 1.94
      },
      {
        "name": "京津冀",
        "change_pct": 1.44
      },
      {
        "name": "物联网",
        "change_pct": 3.03
      },
      {
        "name": "指纹识别",
        "change_pct": 3.37
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.82
      },
      {
        "name": "白马股",
        "change_pct": 1.82
      },
      {
        "name": "智能制造",
        "change_pct": 3.3
      },
      {
        "name": "小米概念股",
        "change_pct": 3.39
      },
      {
        "name": "国产芯片",
        "change_pct": 3.43
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.88
      },
      {
        "name": "全息概念",
        "change_pct": 4.28
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 3.12
      },
      {
        "name": "MicroLED",
        "change_pct": 2.88
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.59
      },
      {
        "name": "智能手表",
        "change_pct": 4.56
      },
      {
        "name": "MiniLED",
        "change_pct": 2.32
      },
      {
        "name": "传感器",
        "change_pct": 3.9
      },
      {
        "name": "大硅片",
        "change_pct": 1.98
      },
      {
        "name": "AI PC",
        "change_pct": 3.9
      },
      {
        "name": "华为产业链",
        "change_pct": 2.81
      },
      {
        "name": "回购",
        "change_pct": 2.34
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.9
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 3.87
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.9
      }
    ]
  },
  {
    "code": "601519",
    "name": "大智慧",
    "hot_rank": 97,
    "hot_rank_chg": 10,
    "stock_cnt": 5820,
    "price": "9.25",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "18399730000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "互联网金融",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 2.22
      },
      {
        "name": "国产软件",
        "change_pct": 4.17
      },
      {
        "name": "金融科技",
        "change_pct": 4.22
      },
      {
        "name": "直播/短视频",
        "change_pct": 3.5
      },
      {
        "name": "大数据",
        "change_pct": 3.27
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5820, "price": "624.00", "change": "20.00", "market_id": "17", "circulate_market_value": "18774737000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "603278", "name": "大业股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "15.96", "change": "9.99", "market_id": "17", "circulate_market_value": "5454479900.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "人形机器人"}, {"code": "002724", "name": "海洋王", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5820, "price": "12.33", "change": "9.99", "market_id": "33", "circulate_market_value": "6984677300.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "专业照明", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.2}, {"name": "石墨烯", "change_pct": 1.78}, {"name": "军民融合", "change_pct": 2.11}, {"name": "物联网", "change_pct": 3.03}, {"name": "LED", "change_pct": 2.12}, {"name": "军工", "change_pct": 1.88}, {"name": "智慧灯杆", "change_pct": 2.55}, {"name": "海洋经济", "change_pct": 1.44}]}, {"code": "300296", "name": "利亚德", "hot_rank": 4, "hot_rank_chg": 22, "stock_cnt": 5820, "price": "7.32", "change": "20.00", "market_id": "33", "circulate_market_value": "16989695000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "具身智能", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.07}, {"name": "超高清视频", "change_pct": 3.37}, {"name": "苹果产业链", "change_pct": 3.42}, {"name": "无人驾驶", "change_pct": 3.12}, {"name": "人工智能", "change_pct": 3.49}, {"name": "VR&AR", "change_pct": 3.9}, {"name": "OLED", "change_pct": 1.94}, {"name": "教育", "change_pct": 1.48}, {"name": "智慧城市", "change_pct": 2.55}, {"name": "LED", "change_pct": 2.12}, {"name": "腾讯概念股", "change_pct": 3.39}, {"name": "全息概念", "change_pct": 4.28}, {"name": "MicroLED", "change_pct": 2.88}, {"name": "第三代半导体", "change_pct": 2.53}, {"name": "元宇宙", "change_pct": 4.73}, {"name": "虚拟数字人", "change_pct": 5.06}, {"name": "教育信息化", "change_pct": 2.55}, {"name": "阿尔茨海默病", "change_pct": 1.47}, {"name": "MiniLED", "change_pct": 2.32}, {"name": "远程办公", "change_pct": 3.86}, {"name": "氮化镓", "change_pct": 2.67}, {"name": "智慧灯杆", "change_pct": 2.55}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "物理AI", "change_pct": 7.82}, {"name": "智能眼镜/MR头显", "change_pct": 3.87}, {"name": "人形机器人", "change_pct": 5.35}, {"name": "小红书概念股", "change_pct": 3.33}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5820, "price": "8.03", "change": "10.00", "market_id": "33", "circulate_market_value": "13064760000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.09}, {"name": "电竞", "change_pct": 3.87}, {"name": "手游", "change_pct": 3.52}, {"name": "人工智能", "change_pct": 3.49}, {"name": "游戏", "change_pct": 3.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 2.92}, {"name": "腾讯概念股", "change_pct": 3.39}, {"name": "传媒", "change_pct": 2.0}, {"name": "快手概念股", "change_pct": 3.59}, {"name": "元宇宙", "change_pct": 4.73}, {"name": "虚拟数字人", "change_pct": 5.06}, {"name": "东数西算/算力", "change_pct": 2.92}, {"name": "web3.0", "change_pct": 4.32}, {"name": "AIGC概念", "change_pct": 4.07}, {"name": "数据要素", "change_pct": 3.42}, {"name": "字节跳动概念股", "change_pct": 3.64}, {"name": "AI营销", "change_pct": 4.43}, {"name": "ChatGPT", "change_pct": 5.55}, {"name": "智能眼镜/MR头显", "change_pct": 3.87}, {"name": "AI大模型/智能体", "change_pct": 3.32}, {"name": "人形机器人", "change_pct": 5.35}, {"name": "短剧/互动影游", "change_pct": 3.09}, {"name": "多模态", "change_pct": 4.52}, {"name": "AI视频", "change_pct": 4.28}, {"name": "IP经济/谷子经济", "change_pct": 2.5}, {"name": "小红书概念股", "change_pct": 3.33}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 6, "hot_rank_chg": 23, "stock_cnt": 5820, "price": "61.44", "change": "20.00", "market_id": "33", "circulate_market_value": "4836035500.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "物理AI"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5820, "price": "13.23", "change": "9.97", "market_id": "33", "circulate_market_value": "6080664100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人轴承"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 8, "hot_rank_chg": 8, "stock_cnt": 5820, "price": "42.85", "change": "7.93", "market_id": "17", "circulate_market_value": "192955220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5820, "price": "21.53", "change": "-0.83", "market_id": "33", "circulate_market_value": "16400814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5820, "price": "237.60", "change": "7.80", "market_id": "33", "circulate_market_value": "1012322620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5820, "price": "15.18", "change": "4.33", "market_id": "17", "circulate_market_value": "15861398000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 12, "hot_rank_chg": 25, "stock_cnt": 5820, "price": "29.18", "change": "9.99", "market_id": "33", "circulate_market_value": "22887215000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "工业机器人"}, {"code": "002343", "name": "慈文传媒", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5820, "price": "10.89", "change": "10.00", "market_id": "33", "circulate_market_value": "5158378300.00", "change_type": "1", "change_section": "11", "change_days": "7", "change_reason": "影视剧", "xgb_concepts": [{"name": "手游", "change_pct": 3.52}, {"name": "强势人气股", "change_pct": 0.2}, {"name": "VR&AR", "change_pct": 3.9}, {"name": "游戏", "change_pct": 3.54}, {"name": "影视", "change_pct": 3.34}, {"name": "直播/短视频", "change_pct": 3.5}, {"name": "动漫", "change_pct": 4.69}, {"name": "腾讯概念股", "change_pct": 3.39}, {"name": "传媒", "change_pct": 2.0}, {"name": "元宇宙", "change_pct": 4.73}, {"name": "短剧/互动影游", "change_pct": 3.09}, {"name": "IP经济/谷子经济", "change_pct": 2.5}]}, {"code": "002185", "name": "华天科技", "hot_rank": 14, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "16.19", "change": "4.12", "market_id": "33", "circulate_market_value": "53848370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "612.63", "change": "3.82", "market_id": "33", "circulate_market_value": "679980710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5820, "price": "9.53", "change": "0.42", "market_id": "33", "circulate_market_value": "5719112400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 2.07}, {"name": "边缘计算", "change_pct": 3.97}, {"name": "核电", "change_pct": 1.4}, {"name": "海工装备", "change_pct": 1.93}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "冷链", "change_pct": 0.95}, {"name": "地热", "change_pct": 0.73}, {"name": "储能", "change_pct": 2.05}, {"name": "碳中和", "change_pct": 0.86}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.58}, {"name": "汽车热管理", "change_pct": 2.8}, {"name": "热泵", "change_pct": 1.47}, {"name": "液冷服务器", "change_pct": 2.13}, {"name": "蜜雪冰城概念股", "change_pct": 0.89}, {"name": "海洋经济", "change_pct": 1.44}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 17, "hot_rank_chg": 34, "stock_cnt": 5820, "price": "23.11", "change": "9.99", "market_id": "33", "circulate_market_value": "73092891000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人"}, {"code": "600293", "name": "三峡新材", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5820, "price": "4.91", "change": "-6.12", "market_id": "17", "circulate_market_value": "5696312200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.55}, {"name": "复牌股", "change_pct": -9.0}, {"name": "国企改革", "change_pct": 1.06}, {"name": "湖北国企改革", "change_pct": 0.5}]}, {"code": "003021", "name": "兆威机电", "hot_rank": 19, "hot_rank_chg": 5, "stock_cnt": 5820, "price": "91.73", "change": "10.00", "market_id": "33", "circulate_market_value": "19099306000.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "人形机器人"}, {"code": "603466", "name": "风语筑", "hot_rank": 20, "hot_rank_chg": 44, "stock_cnt": 5820, "price": "14.69", "change": "10.04", "market_id": "17", "circulate_market_value": "8738081600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "物理AI"}, {"code": "001216", "name": "华瓷股份", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5820, "price": "28.12", "change": "10.02", "market_id": "33", "circulate_market_value": "6941033900.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "MLCC粉体"}, {"code": "002249", "name": "大洋电机", "hot_rank": 22, "hot_rank_chg": -2, "stock_cnt": 5820, "price": "7.58", "change": "7.37", "market_id": "33", "circulate_market_value": "14193032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": 2.15}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "军民融合", "change_pct": 2.11}, {"name": "氢能源/燃料电池", "change_pct": 1.85}, {"name": "风电", "change_pct": 1.58}, {"name": "军工", "change_pct": 1.88}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "新能源车零部件", "change_pct": 2.94}, {"name": "轮边电机", "change_pct": 3.63}, {"name": "人形机器人", "change_pct": 5.35}]}, {"code": "001309", "name": "德明利", "hot_rank": 23, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "251.00", "change": "3.22", "market_id": "33", "circulate_market_value": "58336940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603528", "name": "多伦科技", "hot_rank": 24, "hot_rank_chg": 23, "stock_cnt": 5820, "price": "8.14", "change": "10.00", "market_id": "17", "circulate_market_value": "5746271300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 2.98}, {"name": "国产软件", "change_pct": 4.17}, {"name": "无人驾驶", "change_pct": 3.12}, {"name": "人工智能", "change_pct": 3.49}, {"name": "充电桩", "change_pct": 2.15}, {"name": "北斗导航", "change_pct": 2.06}, {"name": "智慧停车", "change_pct": 3.06}, {"name": "物联网", "change_pct": 3.03}, {"name": "教育", "change_pct": 1.48}, {"name": "智慧城市", "change_pct": 2.55}, {"name": "光伏", "change_pct": 1.18}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "机器人", "change_pct": 4.36}, {"name": "机器视觉", "change_pct": 4.49}, {"name": "智慧安防", "change_pct": 2.8}, {"name": "智能制造", "change_pct": 3.3}, {"name": "国产芯片", "change_pct": 3.43}, {"name": "华为昇腾", "change_pct": 3.37}, {"name": "职业教育", "change_pct": 2.48}, {"name": "在线教育", "change_pct": 1.97}, {"name": "华为云·鲲鹏", "change_pct": 3.81}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "汽车检测", "change_pct": 2.08}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 25, "hot_rank_chg": 24, "stock_cnt": 5820, "price": "932.20", "change": "5.46", "market_id": "17", "circulate_market_value": "586217710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5820, "price": "52.32", "change": "1.75", "market_id": "17", "circulate_market_value": "128374772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 27, "hot_rank_chg": -2, "stock_cnt": 5820, "price": "292.00", "change": "5.51", "market_id": "17", "circulate_market_value": "195849750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000559", "name": "万向钱潮", "hot_rank": 28, "hot_rank_chg": 59, "stock_cnt": 5820, "price": "11.55", "change": "10.00", "market_id": "33", "circulate_market_value": "38427763000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人", "xgb_concepts": [{"name": "半导体", "change_pct": 3.17}, {"name": "锂电池", "change_pct": 2.93}, {"name": "汽车零部件", "change_pct": 2.82}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "机器人", "change_pct": 4.36}, {"name": "智能制造", "change_pct": 3.3}, {"name": "工业互联网", "change_pct": 3.58}, {"name": "新能源车零部件", "change_pct": 2.94}, {"name": "固态电池", "change_pct": 3.19}, {"name": "MCU概念", "change_pct": 4.95}, {"name": "人形机器人", "change_pct": 5.35}, {"name": "小米汽车", "change_pct": 3.0}, {"name": "低空经济", "change_pct": 2.09}]}, {"code": "000636", "name": "风华高科", "hot_rank": 29, "hot_rank_chg": 13, "stock_cnt": 5820, "price": "40.15", "change": "1.44", "market_id": "33", "circulate_market_value": "46071722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 30, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "261.00", "change": "1.16", "market_id": "33", "circulate_market_value": "327482900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 31, "hot_rank_chg": 0, "stock_cnt": 5820, "price": "11.00", "change": "10.00", "market_id": "17", "circulate_market_value": "4409701800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "商贸零售", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 1.54}, {"name": "新零售", "change_pct": 2.49}, {"name": "物业管理", "change_pct": 1.53}, {"name": "国企改革", "change_pct": 1.06}, {"name": "地摊经济", "change_pct": 1.83}]}, {"code": "002050", "name": "三花智控", "hot_rank": 32, "hot_rank_chg": 28, "stock_cnt": 5820, "price": "35.08", "change": "6.66", "market_id": "33", "circulate_market_value": "129481858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5820, "price": "11.46", "change": "-6.45", "market_id": "17", "circulate_market_value": "7354835700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.0}, {"name": "农业种植", "change_pct": -0.02}, {"name": "强势人气股", "change_pct": 0.2}, {"name": "湖南国企改革", "change_pct": 1.3}, {"name": "乡村振兴", "change_pct": 0.67}, {"name": "休闲食品", "change_pct": 1.24}, {"name": "食品", "change_pct": 1.04}, {"name": "食品安全", "change_pct": 2.47}, {"name": "社区团购", "change_pct": 1.07}, {"name": "大农业", "change_pct": 0.89}, {"name": "预制菜", "change_pct": 0.82}, {"name": "人造肉", "change_pct": 0.54}, {"name": "国企改革", "change_pct": 1.06}]}, {"code": "300115", "name": "长盈精密", "hot_rank": 34, "hot_rank_chg": 32, "stock_cnt": 5820, "price": "29.60", "change": "14.82", "market_id": "33", "circulate_market_value": "40178958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 35, "hot_rank_chg": 33, "stock_cnt": 5820, "price": "17.78", "change": "7.11", "market_id": "33", "circulate_market_value": "8530402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603028", "name": "赛福天", "hot_rank": 36, "hot_rank_chg": 14, "stock_cnt": 5820, "price": "8.54", "change": "10.05", "market_id": "17", "circulate_market_value": "2421646800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人腱绳", "xgb_concepts": [{"name": "电梯", "change_pct": 2.24}, {"name": "光伏", "change_pct": 1.18}, {"name": "机器人", "change_pct": 4.36}, {"name": "干细胞", "change_pct": -0.11}, {"name": "海洋经济", "change_pct": 1.44}]}, {"code": "600703", "name": "三安光电", "hot_rank": 37, "hot_rank_chg": 66, "stock_cnt": 5820, "price": "10.10", "change": "2.43", "market_id": "17", "circulate_market_value": "50389089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.17}, {"name": "5G", "change_pct": 2.14}, {"name": "VR&AR", "change_pct": 3.9}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "光通信", "change_pct": 1.82}, {"name": "3D感应", "change_pct": 4.46}, {"name": "汽车零部件", "change_pct": 2.82}, {"name": "LED", "change_pct": 2.12}, {"name": "国产芯片", "change_pct": 3.43}, {"name": "MicroLED", "change_pct": 2.88}, {"name": "第三代半导体", "change_pct": 2.53}, {"name": "激光雷达", "change_pct": 2.92}, {"name": "华为汽车", "change_pct": 2.91}, {"name": "MiniLED", "change_pct": 2.32}, {"name": "氮化镓", "change_pct": 2.67}, {"name": "大基金概念", "change_pct": 2.83}, {"name": "碳化硅", "change_pct": 2.13}, {"name": "磷化铟", "change_pct": 2.81}, {"name": "光电共封装CPO", "change_pct": 1.9}, {"name": "智能眼镜/MR头显", "change_pct": 3.87}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 38, "hot_rank_chg": -21, "stock_cnt": 5820, "price": "33.64", "change": "20.01", "market_id": "33", "circulate_market_value": "8200915300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "晶圆代工"}, {"code": "002421", "name": "达实智能", "hot_rank": 39, "hot_rank_chg": -9, "stock_cnt": 5820, "price": "3.43", "change": "9.94", "market_id": "33", "circulate_market_value": "6984163100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AIoT", "xgb_concepts": [{"name": "边缘计算", "change_pct": 3.97}, {"name": "数字孪生", "change_pct": 3.47}, {"name": "深圳本地股", "change_pct": 1.52}, {"name": "人工智能", "change_pct": 3.49}, {"name": "互联网医疗", "change_pct": 2.14}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "高铁轨交", "change_pct": 1.38}, {"name": "人脸识别", "change_pct": 4.28}, {"name": "智慧停车", "change_pct": 3.06}, {"name": "物联网", "change_pct": 3.03}, {"name": "大数据", "change_pct": 3.27}, {"name": "智慧城市", "change_pct": 2.55}, {"name": "雄安新区", "change_pct": 1.42}, {"name": "机器人", "change_pct": 4.36}, {"name": "数字经济", "change_pct": 2.92}, {"name": "阿里巴巴概念股", "change_pct": 3.29}, {"name": "腾讯概念股", "change_pct": 3.39}, {"name": "建筑节能", "change_pct": 0.89}, {"name": "旧改", "change_pct": 1.11}, {"name": "医疗信息化", "change_pct": 2.58}, {"name": "新冠病毒防治", "change_pct": 1.56}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "AI大模型/智能体", "change_pct": 3.32}, {"name": "医疗耗材供应链SPD", "change_pct": 1.49}, {"name": "液冷服务器", "change_pct": 2.13}, {"name": "区块链", "change_pct": 3.08}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 40, "hot_rank_chg": 34, "stock_cnt": 5820, "price": "38.15", "change": "10.01", "market_id": "17", "circulate_market_value": "11386960500.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "机器人触觉"}, {"code": "003029", "name": "吉大正元", "hot_rank": 41, "hot_rank_chg": -22, "stock_cnt": 5820, "price": "23.05", "change": "-2.74", "market_id": "33", "circulate_market_value": "4047189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 42, "hot_rank_chg": 112, "stock_cnt": 5820, "price": "48.39", "change": "8.35", "market_id": "17", "circulate_market_value": "17720552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 43, "hot_rank_chg": -11, "stock_cnt": 5820, "price": "20.59", "change": "-4.59", "market_id": "17", "circulate_market_value": "4347849900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603859", "name": "能科科技", "hot_rank": 44, "hot_rank_chg": 33, "stock_cnt": 5820, "price": "43.56", "change": "10.00", "market_id": "17", "circulate_market_value": "10659031900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能"}, {"code": "300033", "name": "同花顺", "hot_rank": 45, "hot_rank_chg": 17, "stock_cnt": 5820, "price": "213.85", "change": "12.39", "market_id": "33", "circulate_market_value": "93753965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 46, "hot_rank_chg": -1, "stock_cnt": 5820, "price": "28.79", "change": "3.41", "market_id": "17", "circulate_market_value": "593125620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300369", "name": "绿盟科技", "hot_rank": 47, "hot_rank_chg": 45, "stock_cnt": 5820, "price": "11.71", "change": "19.98", "market_id": "33", "circulate_market_value": "9591926700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 2.98}, {"name": "泛在电力物联网", "change_pct": 2.29}, {"name": "国产软件", "change_pct": 4.17}, {"name": "人工智能", "change_pct": 3.49}, {"name": "网络安全", "change_pct": 3.35}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "智能制造", "change_pct": 3.3}, {"name": "工业互联网", "change_pct": 3.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产操作系统", "change_pct": 3.85}, {"name": "腾讯概念股", "change_pct": 3.39}, {"name": "信创", "change_pct": 3.8}, {"name": "数据要素", "change_pct": 3.42}, {"name": "华为云·鲲鹏", "change_pct": 3.81}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "AI大模型/智能体", "change_pct": 3.32}]}, {"code": "603186", "name": "华正新材", "hot_rank": 48, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "201.65", "change": "6.19", "market_id": "17", "circulate_market_value": "31616808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603933", "name": "睿能科技", "hot_rank": 49, "hot_rank_chg": 41, "stock_cnt": 5820, "price": "20.94", "change": "9.98", "market_id": "17", "circulate_market_value": "4345983400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002475", "name": "立讯精密", "hot_rank": 50, "hot_rank_chg": 39, "stock_cnt": 5820, "price": "50.42", "change": "7.25", "market_id": "33", "circulate_market_value": "369600160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 51, "hot_rank_chg": -24, "stock_cnt": 5820, "price": "10.25", "change": "4.49", "market_id": "33", "circulate_market_value": "3426153900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.29}, {"name": "饲料", "change_pct": 0.6}, {"name": "一带一路", "change_pct": 1.07}, {"name": "强势人气股", "change_pct": 0.2}, {"name": "保健品", "change_pct": 1.14}, {"name": "山东国企改革", "change_pct": 1.4}, {"name": "污水处理", "change_pct": 1.1}, {"name": "环保", "change_pct": 1.01}, {"name": "食品", "change_pct": 1.04}, {"name": "预制菜", "change_pct": 0.82}, {"name": "国企改革", "change_pct": 1.06}, {"name": "水产养殖", "change_pct": -0.71}, {"name": "广西概念", "change_pct": 0.59}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 52, "hot_rank_chg": -13, "stock_cnt": 5820, "price": "84.68", "change": "5.82", "market_id": "33", "circulate_market_value": "55296675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688322", "name": "奥比中光", "hot_rank": 53, "hot_rank_chg": 118, "stock_cnt": 5820, "price": "108.00", "change": "18.97", "market_id": "17", "circulate_market_value": "34588490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 54, "hot_rank_chg": -20, "stock_cnt": 5820, "price": "59.78", "change": "1.32", "market_id": "17", "circulate_market_value": "106971203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688017", "name": "绿的谐波", "hot_rank": 55, "hot_rank_chg": 91, "stock_cnt": 5820, "price": "290.00", "change": "12.05", "market_id": "17", "circulate_market_value": "53165736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 56, "hot_rank_chg": -34, "stock_cnt": 5820, "price": "42.18", "change": "2.01", "market_id": "17", "circulate_market_value": "35707620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002009", "name": "天奇股份", "hot_rank": 57, "hot_rank_chg": -1, "stock_cnt": 5820, "price": "17.30", "change": "9.98", "market_id": "33", "circulate_market_value": "6128201800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能"}, {"code": "688507", "name": "索辰科技", "hot_rank": 58, "hot_rank_chg": 120, "stock_cnt": 5820, "price": "183.08", "change": "14.01", "market_id": "17", "circulate_market_value": "9014077400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 59, "hot_rank_chg": -21, "stock_cnt": 5820, "price": "20.45", "change": "-4.22", "market_id": "17", "circulate_market_value": "16194435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603089", "name": "正裕工业", "hot_rank": 61, "hot_rank_chg": 41, "stock_cnt": 5820, "price": "11.89", "change": "9.99", "market_id": "17", "circulate_market_value": "3278301700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人零部件", "xgb_concepts": [{"name": "汽车零部件", "change_pct": 2.82}, {"name": "外贸受益概念", "change_pct": 2.35}, {"name": "机器人", "change_pct": 4.36}]}, {"code": "601398", "name": "工商银行", "hot_rank": 62, "hot_rank_chg": -26, "stock_cnt": 5820, "price": "8.32", "change": "-3.14", "market_id": "17", "circulate_market_value": "2243173600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 2.06}, {"name": "高股息", "change_pct": -0.06}, {"name": "银行", "change_pct": -0.54}, {"name": "白马股", "change_pct": 1.82}, {"name": "破净股", "change_pct": 0.41}, {"name": "大金融", "change_pct": 0.43}]}, {"code": "002474", "name": "榕基软件", "hot_rank": 64, "hot_rank_chg": 30, "stock_cnt": 5820, "price": "7.11", "change": "10.06", "market_id": "33", "circulate_market_value": "3819672800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI政务", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.29}, {"name": "国产软件", "change_pct": 4.17}, {"name": "人工智能", "change_pct": 3.49}, {"name": "VR&AR", "change_pct": 3.9}, {"name": "网络安全", "change_pct": 3.35}, {"name": "福建自贸/海西概念", "change_pct": 0.89}, {"name": "物联网", "change_pct": 3.03}, {"name": "教育", "change_pct": 1.48}, {"name": "水务", "change_pct": 1.1}, {"name": "智慧城市", "change_pct": 2.55}, {"name": "智慧安防", "change_pct": 2.8}, {"name": "数字经济", "change_pct": 2.92}, {"name": "信创", "change_pct": 3.8}, {"name": "核污染防治", "change_pct": 1.61}, {"name": "教育信息化", "change_pct": 2.55}, {"name": "智慧政务", "change_pct": 2.87}, {"name": "华为鸿蒙", "change_pct": 3.43}, {"name": "传感器", "change_pct": 3.9}, {"name": "华为云·鲲鹏", "change_pct": 3.81}, {"name": "远程办公", "change_pct": 3.86}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "自贸区", "change_pct": 1.0}, {"name": "智能电网", "change_pct": 2.17}, {"name": "区块链", "change_pct": 3.08}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 65, "hot_rank_chg": 79, "stock_cnt": 5820, "price": "16.22", "change": "3.58", "market_id": "33", "circulate_market_value": "19460606000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301502", "name": "华阳智能", "hot_rank": 66, "hot_rank_chg": 16, "stock_cnt": 5820, "price": "64.80", "change": "20.00", "market_id": "33", "circulate_market_value": "1533866200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人关节模组"}, {"code": "002077", "name": "大港股份", "hot_rank": 67, "hot_rank_chg": -9, "stock_cnt": 5820, "price": "13.08", "change": "10.01", "market_id": "33", "circulate_market_value": "7590958600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "集成电路测试"}, {"code": "000592", "name": "平潭发展", "hot_rank": 68, "hot_rank_chg": -28, "stock_cnt": 5820, "price": "7.00", "change": "3.55", "market_id": "33", "circulate_market_value": "13405647100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.89}, {"name": "林业", "change_pct": 0.85}, {"name": "碳中和", "change_pct": 0.86}, {"name": "自贸区", "change_pct": 1.0}]}, {"code": "603721", "name": "中广天择", "hot_rank": 69, "hot_rank_chg": 73, "stock_cnt": 5820, "price": "21.77", "change": "10.01", "market_id": "17", "circulate_market_value": "2830100000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI语料"}, {"code": "600178", "name": "东安动力", "hot_rank": 70, "hot_rank_chg": -24, "stock_cnt": 5820, "price": "11.54", "change": "-6.10", "market_id": "17", "circulate_market_value": "5383134900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.94}, {"name": "股权转让", "change_pct": 1.62}, {"name": "军工集团", "change_pct": 1.3}, {"name": "汽车零部件", "change_pct": 2.82}, {"name": "军工", "change_pct": 1.88}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "振兴东北", "change_pct": 0.38}, {"name": "新能源车零部件", "change_pct": 2.94}, {"name": "理想汽车概念股", "change_pct": 3.12}, {"name": "国企改革", "change_pct": 1.06}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "低空经济", "change_pct": 2.09}]}, {"code": "002384", "name": "东山精密", "hot_rank": 71, "hot_rank_chg": -30, "stock_cnt": 5820, "price": "114.22", "change": "0.63", "market_id": "33", "circulate_market_value": "158345670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603728", "name": "鸣志电器", "hot_rank": 72, "hot_rank_chg": 57, "stock_cnt": 5820, "price": "59.90", "change": "9.97", "market_id": "17", "circulate_market_value": "25091062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 73, "hot_rank_chg": -12, "stock_cnt": 5820, "price": "27.92", "change": "0.14", "market_id": "17", "circulate_market_value": "40818895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603280", "name": "南方路机", "hot_rank": 74, "hot_rank_chg": 2, "stock_cnt": 5820, "price": "31.97", "change": "10.01", "market_id": "17", "circulate_market_value": "3465761100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "分拣机器人"}, {"code": "603330", "name": "天洋新材", "hot_rank": 75, "hot_rank_chg": -22, "stock_cnt": 5820, "price": "10.40", "change": "-6.31", "market_id": "17", "circulate_market_value": "4499805900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.62}, {"name": "强势人气股", "change_pct": 0.2}, {"name": "光伏", "change_pct": 1.18}, {"name": "无线耳机", "change_pct": 4.43}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "光伏胶膜", "change_pct": 1.26}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 76, "hot_rank_chg": -24, "stock_cnt": 5820, "price": "12.71", "change": "-7.76", "market_id": "33", "circulate_market_value": "5820563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.2}, {"name": "电力体制改革", "change_pct": -0.45}, {"name": "水电", "change_pct": -0.76}, {"name": "福建自贸/海西概念", "change_pct": 0.89}, {"name": "有色 · 钼", "change_pct": 1.75}, {"name": "光伏", "change_pct": 1.18}, {"name": "风电", "change_pct": 1.58}, {"name": "有色金属", "change_pct": 1.48}, {"name": "宁德时代概念股", "change_pct": 3.19}, {"name": "船舶", "change_pct": 1.63}, {"name": "自贸区", "change_pct": 1.0}]}, {"code": "300059", "name": "东方财富", "hot_rank": 77, "hot_rank_chg": -22, "stock_cnt": 5820, "price": "18.55", "change": "4.33", "market_id": "33", "circulate_market_value": "250602630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 78, "hot_rank_chg": 46, "stock_cnt": 5820, "price": "26.36", "change": "6.16", "market_id": "17", "circulate_market_value": "41059193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002439", "name": "启明星辰", "hot_rank": 79, "hot_rank_chg": 98, "stock_cnt": 5820, "price": "15.05", "change": "10.02", "market_id": "33", "circulate_market_value": "10964807400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 80, "hot_rank_chg": -32, "stock_cnt": 5820, "price": "59.96", "change": "-8.18", "market_id": "17", "circulate_market_value": "8570023600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002076", "name": "星光股份", "hot_rank": 81, "hot_rank_chg": -24, "stock_cnt": 5820, "price": "2.49", "change": "-7.78", "market_id": "33", "circulate_market_value": "2596308600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.65}, {"name": "锂电池", "change_pct": 2.93}, {"name": "ST摘帽", "change_pct": 1.41}, {"name": "量子通信", "change_pct": 1.97}, {"name": "云计算数据中心", "change_pct": 2.47}, {"name": "汽车零部件", "change_pct": 2.82}, {"name": "LED", "change_pct": 2.12}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "宁德时代概念股", "change_pct": 3.19}, {"name": "低价股", "change_pct": 0.84}, {"name": "新冠病毒防治", "change_pct": 1.56}, {"name": "驱蚊概念", "change_pct": 1.06}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 82, "hot_rank_chg": -19, "stock_cnt": 5820, "price": "10.15", "change": "-7.98", "market_id": "17", "circulate_market_value": "2987166500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 2.93}, {"name": "强势人气股", "change_pct": 0.2}, {"name": "中日韩自贸区", "change_pct": 0.6}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "振兴东北", "change_pct": 0.38}, {"name": "国企改革", "change_pct": 1.06}, {"name": "自贸区", "change_pct": 1.0}]}, {"code": "300024", "name": "机器人", "hot_rank": 83, "hot_rank_chg": 91, "stock_cnt": 5820, "price": "13.71", "change": "6.44", "market_id": "33", "circulate_market_value": "21458545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 84, "hot_rank_chg": 29, "stock_cnt": 5820, "price": "214.04", "change": "8.76", "market_id": "17", "circulate_market_value": "90613566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 85, "hot_rank_chg": -14, "stock_cnt": 5820, "price": "32.90", "change": "1.04", "market_id": "17", "circulate_market_value": "130665213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 86, "hot_rank_chg": -32, "stock_cnt": 5820, "price": "20.64", "change": "-6.31", "market_id": "33", "circulate_market_value": "12279399900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 87, "hot_rank_chg": 14, "stock_cnt": 5820, "price": "29.45", "change": "-1.24", "market_id": "17", "circulate_market_value": "720589010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 88, "hot_rank_chg": -45, "stock_cnt": 5820, "price": "15.08", "change": "-1.37", "market_id": "17", "circulate_market_value": "31540456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 89, "hot_rank_chg": -16, "stock_cnt": 5820, "price": "19.70", "change": "0.72", "market_id": "17", "circulate_market_value": "44407310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 90, "hot_rank_chg": -5, "stock_cnt": 5820, "price": "7.37", "change": "-10.01", "market_id": "33", "circulate_market_value": "3730867200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "仪器仪表", "change_pct": 2.95}, {"name": "锂电池", "change_pct": 2.93}, {"name": "ST摘帽", "change_pct": 1.41}, {"name": "有机硅", "change_pct": 0.35}, {"name": "复牌股", "change_pct": -9.0}, {"name": "新能源汽车", "change_pct": 2.69}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "供应链金融", "change_pct": 2.77}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 91, "hot_rank_chg": -47, "stock_cnt": 5820, "price": "14.83", "change": "-1.13", "market_id": "33", "circulate_market_value": "9789678900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 92, "hot_rank_chg": -4, "stock_cnt": 5820, "price": "200.81", "change": "1.93", "market_id": "33", "circulate_market_value": "218559200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301666", "name": "大普微", "hot_rank": 93, "hot_rank_chg": -60, "stock_cnt": 5820, "price": "390.30", "change": "9.63", "market_id": "33", "circulate_market_value": "13620420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 94, "hot_rank_chg": -35, "stock_cnt": 5820, "price": "15.60", "change": "-1.45", "market_id": "17", "circulate_market_value": "34621903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 95, "hot_rank_chg": -23, "stock_cnt": 5820, "price": "4.93", "change": "1.44", "market_id": "33", "circulate_market_value": "174359970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.82}, {"name": "手机产业链", "change_pct": 3.01}, {"name": "超高清视频", "change_pct": 3.37}, {"name": "苹果产业链", "change_pct": 3.42}, {"name": "电竞", "change_pct": 3.87}, {"name": "半导体", "change_pct": 3.17}, {"name": "人工智能", "change_pct": 3.49}, {"name": "互联网医疗", "change_pct": 2.14}, {"name": "VR&AR", "change_pct": 3.9}, {"name": "OLED", "change_pct": 1.94}, {"name": "京津冀", "change_pct": 1.44}, {"name": "物联网", "change_pct": 3.03}, {"name": "指纹识别", "change_pct": 3.37}, {"name": "汽车零部件", "change_pct": 2.82}, {"name": "白马股", "change_pct": 1.82}, {"name": "智能制造", "change_pct": 3.3}, {"name": "小米概念股", "change_pct": 3.39}, {"name": "国产芯片", "change_pct": 3.43}, {"name": "液晶面板/LCD", "change_pct": 1.88}, {"name": "全息概念", "change_pct": 4.28}, {"name": "理想汽车概念股", "change_pct": 3.12}, {"name": "MicroLED", "change_pct": 2.88}, {"name": "钙钛矿电池", "change_pct": 1.59}, {"name": "智能手表", "change_pct": 4.56}, {"name": "MiniLED", "change_pct": 2.32}, {"name": "传感器", "change_pct": 3.9}, {"name": "大硅片", "change_pct": 1.98}, {"name": "AI PC", "change_pct": 3.9}, {"name": "华为产业链", "change_pct": 2.81}, {"name": "回购", "change_pct": 2.34}, {"name": "光电共封装CPO", "change_pct": 1.9}, {"name": "智能眼镜/MR头显", "change_pct": 3.87}, {"name": "玻璃基板封装", "change_pct": 2.9}]}, {"code": "002812", "name": "恩捷股份", "hot_rank": 96, "hot_rank_chg": 53, "stock_cnt": 5820, "price": "46.92", "change": "10.01", "market_id": "33", "circulate_market_value": "38611677000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "锂电池隔膜"}, {"code": "601519", "name": "大智慧", "hot_rank": 97, "hot_rank_chg": 10, "stock_cnt": 5820, "price": "9.25", "change": "9.99", "market_id": "17", "circulate_market_value": "18399730000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "互联网金融", "xgb_concepts": [{"name": "资产重组", "change_pct": 2.22}, {"name": "国产软件", "change_pct": 4.17}, {"name": "金融科技", "change_pct": 4.22}, {"name": "直播/短视频", "change_pct": 3.5}, {"name": "大数据", "change_pct": 3.27}]}, {"code": "601138", "name": "工业富联", "hot_rank": 98, "hot_rank_chg": -14, "stock_cnt": 5820, "price": "48.85", "change": "1.96", "market_id": "17", "circulate_market_value": "969383910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301699", "name": "洛轴股份", "hot_rank": 99, "hot_rank_chg": 70, "stock_cnt": 5820, "price": "33.42", "change": "20.00", "market_id": "33", "circulate_market_value": "2337109000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人轴承"}, {"code": "600699", "name": "均胜电子", "hot_rank": 100, "hot_rank_chg": 11, "stock_cnt": 5820, "price": "22.23", "change": "7.13", "market_id": "17", "circulate_market_value": "31025757000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "600745": "ST/风险警示股"};