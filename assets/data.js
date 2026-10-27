const UPDATE_TIME = "2026-10-27 00:12";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": -0.79,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": -0.71,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": 0.2,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "数据要素",
    "rise": 0.16,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "886041"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.85,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续316天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人工智能",
    "rise": -0.17,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "创新药",
    "rise": 0.3,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续146天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -3.62,
    "rate": 0,
    "tag": "",
    "hotTag": "连续269天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "网络安全",
    "rise": -0.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885459"
  },
  {
    "name": "PCB概念",
    "rise": -3.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "数字货币",
    "rise": -0.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "乳业",
    "rise": 2.13,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885462"
  },
  {
    "name": "芯片概念",
    "rise": -2.23,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "固态电池",
    "rise": -0.92,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "商业航天",
    "rise": -1.62,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续245天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "军工",
    "rise": -1.5,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "算力租赁",
    "rise": -0.4,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "短剧游戏",
    "rise": 0.37,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "无人驾驶",
    "rise": -0.83,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "智能汽车ETF",
    "code": "885736"
  },
  {
    "name": "白酒概念",
    "rise": 1.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "消费ETF",
    "code": "885525"
  }
];
const THS_EVENTS = [
  {
    "title": "9月209款游戏版号获批，8月中国游戏产业延续稳健增长态势",
    "desc": "",
    "heat": 445291,
    "direction": "游戏",
    "themes": [
      "游戏",
      "网络游戏",
      "手机游戏",
      "电子竞技"
    ],
    "stocks": [
      {
        "name": "盛天网络",
        "code": "300494",
        "chg": 14.617169
      }
    ]
  },
  {
    "title": "AI赋能 基层医疗数字化提速",
    "desc": "",
    "heat": 183529,
    "direction": "医药商业",
    "themes": [
      "医药商业",
      "DRG/DIP",
      "家庭医生",
      "医疗器械"
    ],
    "stocks": [
      {
        "name": "山外山",
        "code": "688410",
        "chg": 12.487899
      }
    ]
  },
  {
    "title": "中信证券：GPT-6 Astra进入机器人控制 物理AI迎来重大拐点",
    "desc": "",
    "heat": 122131,
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
        "chg": 10.432943
      }
    ]
  },
  {
    "title": "国常会：要加快建设生育友好型社会，优化面向家庭的财税、社保、住房等支持举措",
    "desc": "",
    "heat": 104919,
    "direction": "生育婴童",
    "themes": [
      "三胎概念"
    ],
    "stocks": [
      {
        "name": "奥雅股份",
        "code": "300949",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "显卡一日一价：英伟达停产传闻搅动华强北，RTX 5090 被炒至 6 万元",
    "desc": "",
    "heat": 40000,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "达瑞电子",
        "code": "300976",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "《国家信息化“十五五”规划》：加快6G技术研发、标准研制和应用验证",
    "desc": "",
    "heat": 38424,
    "direction": "6G概念",
    "themes": [
      "6G概念"
    ],
    "stocks": [
      {
        "name": "国脉科技",
        "code": "002093",
        "chg": 10.076336
      }
    ]
  },
  {
    "title": "美国能源部将氦气认定为关键材料",
    "desc": "",
    "heat": 10239,
    "direction": "氦气",
    "themes": [
      "氦气生产",
      "电子特气"
    ],
    "stocks": [
      {
        "name": "水发燃气",
        "code": "603318",
        "chg": 1.769912
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "进口博览会",
    "change": "+2.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+2.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手游",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "首发经济",
    "change": "+2.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+2.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+2.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电竞",
    "change": "+2.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "上海自由贸易港",
    "change": "+2.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "眼科",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "REITs",
    "change": "+1.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无人物流车",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 4,
    "hot_rank_chg": 8,
    "stock_cnt": 5834,
    "price": "12.71",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "42287175000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -3.32
      },
      {
        "name": "锂电池",
        "change_pct": -1.16
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.07
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "智能制造",
        "change_pct": -0.82
      },
      {
        "name": "工业互联网",
        "change_pct": -0.87
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.1
      },
      {
        "name": "固态电池",
        "change_pct": -0.44
      },
      {
        "name": "MCU概念",
        "change_pct": -2.35
      },
      {
        "name": "人形机器人",
        "change_pct": -0.68
      },
      {
        "name": "小米汽车",
        "change_pct": -0.43
      },
      {
        "name": "低空经济",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 5,
    "hot_rank_chg": 8,
    "stock_cnt": 5834,
    "price": "8.95",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "6318074700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.13
      },
      {
        "name": "国产软件",
        "change_pct": 0.04
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.65
      },
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "充电桩",
        "change_pct": -1.68
      },
      {
        "name": "北斗导航",
        "change_pct": -1.19
      },
      {
        "name": "智慧停车",
        "change_pct": 0.06
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.07
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "机器视觉",
        "change_pct": -0.76
      },
      {
        "name": "智慧安防",
        "change_pct": -0.37
      },
      {
        "name": "智能制造",
        "change_pct": -0.82
      },
      {
        "name": "国产芯片",
        "change_pct": -2.94
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.01
      },
      {
        "name": "职业教育",
        "change_pct": 1.4
      },
      {
        "name": "在线教育",
        "change_pct": -0.37
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.03
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "汽车检测",
        "change_pct": -0.33
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 6,
    "hot_rank_chg": 5,
    "stock_cnt": 5834,
    "price": "12.10",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4850672000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "商贸零售",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 1.27
      },
      {
        "name": "新零售",
        "change_pct": 1.11
      },
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "物业管理",
        "change_pct": 1.53
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      },
      {
        "name": "地摊经济",
        "change_pct": 1.0
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 7,
    "hot_rank_chg": -4,
    "stock_cnt": 5834,
    "price": "11.90",
    "change": "-3.49",
    "market_id": "33",
    "circulate_market_value": "6741091600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "石墨烯",
        "change_pct": -1.13
      },
      {
        "name": "军民融合",
        "change_pct": -1.64
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "LED",
        "change_pct": -2.29
      },
      {
        "name": "军工",
        "change_pct": -1.4
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.8
      },
      {
        "name": "海洋经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 8,
    "hot_rank_chg": -2,
    "stock_cnt": 5834,
    "price": "11.28",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "3770440600.00",
    "change_type": "1",
    "change_section": "12",
    "change_days": "8",
    "change_reason": "水产加工",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.36
      },
      {
        "name": "饲料",
        "change_pct": -0.37
      },
      {
        "name": "一带一路",
        "change_pct": -0.25
      },
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "保健品",
        "change_pct": 0.49
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.33
      },
      {
        "name": "污水处理",
        "change_pct": -0.18
      },
      {
        "name": "环保",
        "change_pct": -0.55
      },
      {
        "name": "食品",
        "change_pct": 0.91
      },
      {
        "name": "预制菜",
        "change_pct": 0.41
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      },
      {
        "name": "水产养殖",
        "change_pct": 2.13
      },
      {
        "name": "广西概念",
        "change_pct": -0.33
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 10,
    "hot_rank_chg": -5,
    "stock_cnt": 5834,
    "price": "8.15",
    "change": "1.49",
    "market_id": "33",
    "circulate_market_value": "13259999300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.82
      },
      {
        "name": "电竞",
        "change_pct": 2.36
      },
      {
        "name": "手游",
        "change_pct": 2.69
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "游戏",
        "change_pct": 1.95
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.1
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "快手概念股",
        "change_pct": -0.14
      },
      {
        "name": "元宇宙",
        "change_pct": 0.38
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "web3.0",
        "change_pct": 0.03
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.43
      },
      {
        "name": "数据要素",
        "change_pct": 0.34
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.05
      },
      {
        "name": "AI营销",
        "change_pct": 0.03
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.61
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.89
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "人形机器人",
        "change_pct": -0.68
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.4
      },
      {
        "name": "多模态",
        "change_pct": 0.18
      },
      {
        "name": "AI视频",
        "change_pct": 0.32
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.67
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 14,
    "hot_rank_chg": -4,
    "stock_cnt": 5834,
    "price": "8.58",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "5149001500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.77
      },
      {
        "name": "体育产业",
        "change_pct": 0.16
      },
      {
        "name": "边缘计算",
        "change_pct": -0.93
      },
      {
        "name": "核电",
        "change_pct": -1.47
      },
      {
        "name": "海工装备",
        "change_pct": -0.75
      },
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "冷链",
        "change_pct": -0.47
      },
      {
        "name": "地热",
        "change_pct": -1.76
      },
      {
        "name": "储能",
        "change_pct": -0.94
      },
      {
        "name": "碳中和",
        "change_pct": 0.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.86
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.06
      },
      {
        "name": "热泵",
        "change_pct": -2.27
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.88
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.61
      },
      {
        "name": "海洋经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 15,
    "hot_rank_chg": 10,
    "stock_cnt": 5834,
    "price": "9.39",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "2662677200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "机器人腱绳",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": -0.33
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "干细胞",
        "change_pct": 1.12
      },
      {
        "name": "海洋经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 18,
    "hot_rank_chg": 5,
    "stock_cnt": 5834,
    "price": "2.30",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "3636233900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "质谱诊断",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": 0.62
      },
      {
        "name": "体外诊断",
        "change_pct": 1.5
      },
      {
        "name": "医疗器械",
        "change_pct": 1.06
      },
      {
        "name": "基因测序",
        "change_pct": 0.73
      },
      {
        "name": "预制菜",
        "change_pct": 0.41
      },
      {
        "name": "低价股",
        "change_pct": 0.08
      },
      {
        "name": "水产养殖",
        "change_pct": 2.13
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.12
      },
      {
        "name": "海洋经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "000810",
    "name": "创维数字",
    "hot_rank": 19,
    "hot_rank_chg": 14,
    "stock_cnt": 5834,
    "price": "11.02",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "12322101400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "具身智能数据采集",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 0.23
      },
      {
        "name": "折叠屏",
        "change_pct": -1.97
      },
      {
        "name": "超高清视频",
        "change_pct": -1.28
      },
      {
        "name": "半导体",
        "change_pct": -3.32
      },
      {
        "name": "5G",
        "change_pct": -2.56
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "VR&AR",
        "change_pct": -1.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "光通信",
        "change_pct": -3.49
      },
      {
        "name": "OLED",
        "change_pct": -2.54
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.46
      },
      {
        "name": "智能音箱",
        "change_pct": -0.98
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "黑色家电",
        "change_pct": -1.02
      },
      {
        "name": "家电",
        "change_pct": -0.6
      },
      {
        "name": "WiFi",
        "change_pct": -2.63
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "百度概念股",
        "change_pct": 0.73
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.13
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.1
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.34
      },
      {
        "name": "全息概念",
        "change_pct": 1.26
      },
      {
        "name": "元宇宙",
        "change_pct": 0.38
      },
      {
        "name": "F5G",
        "change_pct": -2.29
      },
      {
        "name": "电子后视镜",
        "change_pct": -0.2
      },
      {
        "name": "华为海思",
        "change_pct": -1.83
      },
      {
        "name": "教育信息化",
        "change_pct": -0.6
      },
      {
        "name": "在线教育",
        "change_pct": -0.37
      },
      {
        "name": "云游戏",
        "change_pct": 1.47
      },
      {
        "name": "MiniLED",
        "change_pct": -2.55
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.89
      },
      {
        "name": "星闪概念",
        "change_pct": -1.1
      },
      {
        "name": "智能座舱",
        "change_pct": -0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.4
      },
      {
        "name": "多模态",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "600558",
    "name": "大西洋",
    "hot_rank": 22,
    "hot_rank_chg": 20,
    "stock_cnt": 5834,
    "price": "5.56",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "4990682900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "高端焊材",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": -1.47
      },
      {
        "name": "军民融合",
        "change_pct": -1.64
      },
      {
        "name": "有色 · 钛",
        "change_pct": -1.26
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.36
      },
      {
        "name": "有色金属",
        "change_pct": -1.78
      },
      {
        "name": "军工",
        "change_pct": -1.4
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.32
      },
      {
        "name": "核聚变",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 23,
    "hot_rank_chg": -9,
    "stock_cnt": 5834,
    "price": "9.80",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "4642066800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 2.69
      },
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "VR&AR",
        "change_pct": -1.31
      },
      {
        "name": "游戏",
        "change_pct": 1.95
      },
      {
        "name": "影视",
        "change_pct": -0.71
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.44
      },
      {
        "name": "动漫",
        "change_pct": -1.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.1
      },
      {
        "name": "传媒",
        "change_pct": 0.36
      },
      {
        "name": "元宇宙",
        "change_pct": 0.38
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.4
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "002178",
    "name": "延华智能",
    "hot_rank": 29,
    "hot_rank_chg": 25,
    "stock_cnt": 5834,
    "price": "5.34",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "3801177200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI医疗",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.74
      },
      {
        "name": "国产软件",
        "change_pct": 0.04
      },
      {
        "name": "体外诊断",
        "change_pct": 1.5
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "养老产业",
        "change_pct": 0.77
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "智慧政务",
        "change_pct": -0.12
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.41
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.17
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 43,
    "hot_rank_chg": -7,
    "stock_cnt": 5834,
    "price": "7.00",
    "change": "-7.65",
    "market_id": "33",
    "circulate_market_value": "13107022100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -1.68
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "军民融合",
        "change_pct": -1.64
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.64
      },
      {
        "name": "风电",
        "change_pct": -1.27
      },
      {
        "name": "军工",
        "change_pct": -1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.07
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.1
      },
      {
        "name": "轮边电机",
        "change_pct": -1.79
      },
      {
        "name": "人形机器人",
        "change_pct": -0.68
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 45,
    "hot_rank_chg": -13,
    "stock_cnt": 5834,
    "price": "9.02",
    "change": "7.77",
    "market_id": "17",
    "circulate_market_value": "7837954100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.82
      },
      {
        "name": "快递物流",
        "change_pct": 1.44
      },
      {
        "name": "新零售",
        "change_pct": 1.11
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.49
      },
      {
        "name": "旅游",
        "change_pct": 0.16
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.29
      },
      {
        "name": "物业管理",
        "change_pct": 1.53
      },
      {
        "name": "免税店概念",
        "change_pct": 1.5
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 47,
    "hot_rank_chg": -8,
    "stock_cnt": 5834,
    "price": "4.42",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "5127841100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.61
      },
      {
        "name": "玻璃",
        "change_pct": -0.77
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      },
      {
        "name": "湖北国企改革",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "001318",
    "name": "阳光乳业",
    "hot_rank": 48,
    "hot_rank_chg": -7,
    "stock_cnt": 5834,
    "price": "12.10",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3420186000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "乳制品",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.17
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.88
      },
      {
        "name": "食品",
        "change_pct": 0.91
      },
      {
        "name": "大农业",
        "change_pct": -0.82
      },
      {
        "name": "饮料",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "002421",
    "name": "达实智能",
    "hot_rank": 50,
    "hot_rank_chg": 5,
    "stock_cnt": 5834,
    "price": "3.42",
    "change": "-0.29",
    "market_id": "33",
    "circulate_market_value": "6963801100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.93
      },
      {
        "name": "数字孪生",
        "change_pct": 0.74
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.33
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.62
      },
      {
        "name": "人脸识别",
        "change_pct": -0.88
      },
      {
        "name": "智慧停车",
        "change_pct": 0.06
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "大数据",
        "change_pct": 0.14
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "雄安新区",
        "change_pct": -0.12
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.29
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.1
      },
      {
        "name": "建筑节能",
        "change_pct": -1.25
      },
      {
        "name": "旧改",
        "change_pct": -0.11
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.41
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.12
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 1.96
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.88
      },
      {
        "name": "区块链",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "603901",
    "name": "永创智能",
    "hot_rank": 53,
    "hot_rank_chg": 43,
    "stock_cnt": 5834,
    "price": "10.63",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "6047398000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -0.99
      },
      {
        "name": "包装印刷",
        "change_pct": -0.59
      },
      {
        "name": "机器人",
        "change_pct": -0.61
      },
      {
        "name": "机器视觉",
        "change_pct": -0.76
      },
      {
        "name": "智能制造",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 56,
    "hot_rank_chg": -7,
    "stock_cnt": 5834,
    "price": "8.58",
    "change": "3.12",
    "market_id": "17",
    "circulate_market_value": "2313272800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.31
      },
      {
        "name": "高股息",
        "change_pct": 1.27
      },
      {
        "name": "银行",
        "change_pct": 1.52
      },
      {
        "name": "白马股",
        "change_pct": 0.82
      },
      {
        "name": "破净股",
        "change_pct": 0.61
      },
      {
        "name": "大金融",
        "change_pct": 1.09
      }
    ]
  },
  {
    "code": "600826",
    "name": "兰生股份",
    "hot_rank": 57,
    "hot_rank_chg": 43,
    "stock_cnt": 5834,
    "price": "8.22",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "5952788900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "机器人展区",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.16
      },
      {
        "name": "上海国企改革",
        "change_pct": 1.27
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "上海自由贸易港",
        "change_pct": 2.01
      },
      {
        "name": "进口博览会",
        "change_pct": 2.81
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.11
      },
      {
        "name": "宠物经济",
        "change_pct": 1.08
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "首发经济",
        "change_pct": 2.24
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 60,
    "hot_rank_chg": -12,
    "stock_cnt": 5834,
    "price": "11.16",
    "change": "-2.62",
    "market_id": "17",
    "circulate_market_value": "7162300700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.17
      },
      {
        "name": "农业种植",
        "change_pct": -2.16
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.9
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.39
      },
      {
        "name": "休闲食品",
        "change_pct": 2.62
      },
      {
        "name": "食品",
        "change_pct": 0.91
      },
      {
        "name": "食品安全",
        "change_pct": -0.31
      },
      {
        "name": "社区团购",
        "change_pct": 0.71
      },
      {
        "name": "大农业",
        "change_pct": -0.82
      },
      {
        "name": "预制菜",
        "change_pct": 0.41
      },
      {
        "name": "人造肉",
        "change_pct": -0.54
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 62,
    "hot_rank_chg": 260,
    "stock_cnt": 5834,
    "price": "9.38",
    "change": "1.96",
    "market_id": "17",
    "circulate_market_value": "5390096500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.2
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.49
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "300296",
    "name": "利亚德",
    "hot_rank": 63,
    "hot_rank_chg": 3,
    "stock_cnt": 5834,
    "price": "6.78",
    "change": "-7.38",
    "market_id": "33",
    "circulate_market_value": "15736357000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.16
      },
      {
        "name": "超高清视频",
        "change_pct": -1.28
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.09
      },
      {
        "name": "无人驾驶",
        "change_pct": -0.65
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "VR&AR",
        "change_pct": -1.31
      },
      {
        "name": "OLED",
        "change_pct": -2.54
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "LED",
        "change_pct": -2.29
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.1
      },
      {
        "name": "全息概念",
        "change_pct": 1.26
      },
      {
        "name": "MicroLED",
        "change_pct": -3.17
      },
      {
        "name": "第三代半导体",
        "change_pct": -2.86
      },
      {
        "name": "元宇宙",
        "change_pct": 0.38
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.53
      },
      {
        "name": "教育信息化",
        "change_pct": -0.6
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.25
      },
      {
        "name": "MiniLED",
        "change_pct": -2.55
      },
      {
        "name": "远程办公",
        "change_pct": -0.74
      },
      {
        "name": "氮化镓",
        "change_pct": -3.11
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.8
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "物理AI",
        "change_pct": -0.06
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.89
      },
      {
        "name": "人形机器人",
        "change_pct": -0.68
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "002093",
    "name": "国脉科技",
    "hot_rank": 68,
    "hot_rank_chg": 63,
    "stock_cnt": 5834,
    "price": "7.21",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "7264075000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.13
      },
      {
        "name": "精准医疗",
        "change_pct": 0.62
      },
      {
        "name": "5G",
        "change_pct": -2.56
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.75
      },
      {
        "name": "养老产业",
        "change_pct": 0.77
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.49
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 1.25
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "职业教育",
        "change_pct": 1.4
      },
      {
        "name": "智慧政务",
        "change_pct": -0.12
      },
      {
        "name": "6G",
        "change_pct": -3.13
      },
      {
        "name": "IPv6",
        "change_pct": -0.52
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "区块链",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "600094",
    "name": "大名城",
    "hot_rank": 71,
    "hot_rank_chg": 28,
    "stock_cnt": 5834,
    "price": "4.83",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "10269690900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房地产开发",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.71
      },
      {
        "name": "物业管理",
        "change_pct": 1.53
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "旧改",
        "change_pct": -0.11
      },
      {
        "name": "6G",
        "change_pct": -3.13
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 76,
    "hot_rank_chg": 30,
    "stock_cnt": 5834,
    "price": "8.85",
    "change": "13.17",
    "market_id": "33",
    "circulate_market_value": "9344014900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.22
      },
      {
        "name": "医疗器械",
        "change_pct": 1.06
      },
      {
        "name": "医药",
        "change_pct": 0.27
      },
      {
        "name": "疫苗",
        "change_pct": 1.23
      },
      {
        "name": "化学原料药",
        "change_pct": -0.01
      },
      {
        "name": "肝炎概念",
        "change_pct": 0.72
      },
      {
        "name": "干细胞",
        "change_pct": 1.12
      },
      {
        "name": "眼科",
        "change_pct": 1.97
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 84,
    "hot_rank_chg": -2,
    "stock_cnt": 5834,
    "price": "3.04",
    "change": "6.67",
    "market_id": "33",
    "circulate_market_value": "7121771900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.11
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "VR&AR",
        "change_pct": -1.31
      },
      {
        "name": "京津冀",
        "change_pct": -0.19
      },
      {
        "name": "装修装饰",
        "change_pct": -0.95
      },
      {
        "name": "住房租赁",
        "change_pct": 2.22
      },
      {
        "name": "破净股",
        "change_pct": 0.61
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "房产经纪",
        "change_pct": 2.11
      },
      {
        "name": "物业管理",
        "change_pct": 1.53
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 86,
    "hot_rank_chg": 12,
    "stock_cnt": 5834,
    "price": "8.89",
    "change": "4.10",
    "market_id": "17",
    "circulate_market_value": "5159405000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.93
      },
      {
        "name": "国产软件",
        "change_pct": 0.04
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.31
      },
      {
        "name": "共享经济",
        "change_pct": 0.31
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "网络安全",
        "change_pct": -0.75
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.49
      },
      {
        "name": "游戏",
        "change_pct": 1.95
      },
      {
        "name": "智慧停车",
        "change_pct": 0.06
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "大数据",
        "change_pct": 0.14
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "储能",
        "change_pct": -0.94
      },
      {
        "name": "智慧安防",
        "change_pct": -0.37
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.29
      },
      {
        "name": "信创",
        "change_pct": -0.08
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "电子身份证",
        "change_pct": -0.29
      },
      {
        "name": "数据要素",
        "change_pct": 0.34
      },
      {
        "name": "数字乡村",
        "change_pct": 0.11
      },
      {
        "name": "智慧政务",
        "change_pct": -0.12
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.03
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.8
      },
      {
        "name": "算电协同",
        "change_pct": -1.56
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.4
      },
      {
        "name": "智谱AI",
        "change_pct": 0.19
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.17
      },
      {
        "name": "AI医疗",
        "change_pct": 0.56
      },
      {
        "name": "算力一体机",
        "change_pct": -0.75
      },
      {
        "name": "区块链",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "002820",
    "name": "桂发祥",
    "hot_rank": 91,
    "hot_rank_chg": 24,
    "stock_cnt": 5834,
    "price": "10.19",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "2046847900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "休闲食品",
    "xgb_concepts": [
      {
        "name": "天津国企改革",
        "change_pct": 0.62
      },
      {
        "name": "休闲食品",
        "change_pct": 2.62
      },
      {
        "name": "食品",
        "change_pct": 0.91
      },
      {
        "name": "国企改革",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 93,
    "hot_rank_chg": 115,
    "stock_cnt": 5834,
    "price": "9.55",
    "change": "-2.25",
    "market_id": "17",
    "circulate_market_value": "17086271000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.26
      },
      {
        "name": "纯碱",
        "change_pct": -0.36
      },
      {
        "name": "食品",
        "change_pct": 0.91
      },
      {
        "name": "土壤修复",
        "change_pct": -0.05
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.54
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.19
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002474",
    "name": "榕基软件",
    "hot_rank": 96,
    "hot_rank_chg": -36,
    "stock_cnt": 5834,
    "price": "7.01",
    "change": "-1.41",
    "market_id": "33",
    "circulate_market_value": "3765950300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -1.53
      },
      {
        "name": "国产软件",
        "change_pct": 0.04
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "VR&AR",
        "change_pct": -1.31
      },
      {
        "name": "网络安全",
        "change_pct": -0.75
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.49
      },
      {
        "name": "物联网",
        "change_pct": -0.77
      },
      {
        "name": "教育",
        "change_pct": 0.26
      },
      {
        "name": "水务",
        "change_pct": 0.15
      },
      {
        "name": "智慧城市",
        "change_pct": -0.31
      },
      {
        "name": "智慧安防",
        "change_pct": -0.37
      },
      {
        "name": "数字经济",
        "change_pct": -0.04
      },
      {
        "name": "信创",
        "change_pct": -0.08
      },
      {
        "name": "核污染防治",
        "change_pct": -2.19
      },
      {
        "name": "教育信息化",
        "change_pct": -0.6
      },
      {
        "name": "智慧政务",
        "change_pct": -0.12
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.17
      },
      {
        "name": "传感器",
        "change_pct": -1.63
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.03
      },
      {
        "name": "远程办公",
        "change_pct": -0.74
      },
      {
        "name": "华为产业链",
        "change_pct": -1.05
      },
      {
        "name": "自贸区",
        "change_pct": 0.39
      },
      {
        "name": "智能电网",
        "change_pct": -1.72
      },
      {
        "name": "区块链",
        "change_pct": 0.06
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5834, "price": "672.00", "change": "7.69", "market_id": "17", "circulate_market_value": "20218948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5834, "price": "14.55", "change": "9.98", "market_id": "33", "circulate_market_value": "6687351600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人轴承"}, {"code": "603278", "name": "大业股份", "hot_rank": 3, "hot_rank_chg": -1, "stock_cnt": 5834, "price": "17.25", "change": "8.08", "market_id": "17", "circulate_market_value": "5895349500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000559", "name": "万向钱潮", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5834, "price": "12.71", "change": "10.04", "market_id": "33", "circulate_market_value": "42287175000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "半导体", "change_pct": -3.32}, {"name": "锂电池", "change_pct": -1.16}, {"name": "汽车零部件", "change_pct": -0.46}, {"name": "新能源汽车", "change_pct": -1.07}, {"name": "机器人", "change_pct": -0.61}, {"name": "智能制造", "change_pct": -0.82}, {"name": "工业互联网", "change_pct": -0.87}, {"name": "新能源车零部件", "change_pct": -1.1}, {"name": "固态电池", "change_pct": -0.44}, {"name": "MCU概念", "change_pct": -2.35}, {"name": "人形机器人", "change_pct": -0.68}, {"name": "小米汽车", "change_pct": -0.43}, {"name": "低空经济", "change_pct": -1.11}]}, {"code": "603528", "name": "多伦科技", "hot_rank": 5, "hot_rank_chg": 8, "stock_cnt": 5834, "price": "8.95", "change": "9.95", "market_id": "17", "circulate_market_value": "6318074700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "人形机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.13}, {"name": "国产软件", "change_pct": 0.04}, {"name": "无人驾驶", "change_pct": -0.65}, {"name": "强势人气股", "change_pct": -1.61}, {"name": "人工智能", "change_pct": -0.16}, {"name": "充电桩", "change_pct": -1.68}, {"name": "北斗导航", "change_pct": -1.19}, {"name": "智慧停车", "change_pct": 0.06}, {"name": "物联网", "change_pct": -0.77}, {"name": "教育", "change_pct": 0.26}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "光伏", "change_pct": -1.07}, {"name": "新能源汽车", "change_pct": -1.07}, {"name": "机器人", "change_pct": -0.61}, {"name": "机器视觉", "change_pct": -0.76}, {"name": "智慧安防", "change_pct": -0.37}, {"name": "智能制造", "change_pct": -0.82}, {"name": "国产芯片", "change_pct": -2.94}, {"name": "华为昇腾", "change_pct": -0.01}, {"name": "职业教育", "change_pct": 1.4}, {"name": "在线教育", "change_pct": -0.37}, {"name": "华为云·鲲鹏", "change_pct": 0.03}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "汽车检测", "change_pct": -0.33}]}, {"code": "600838", "name": "上海九百", "hot_rank": 6, "hot_rank_chg": 5, "stock_cnt": 5834, "price": "12.10", "change": "10.00", "market_id": "17", "circulate_market_value": "4850672000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "商贸零售", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 1.27}, {"name": "新零售", "change_pct": 1.11}, {"name": "强势人气股", "change_pct": -1.61}, {"name": "物业管理", "change_pct": 1.53}, {"name": "国企改革", "change_pct": 0.04}, {"name": "地摊经济", "change_pct": 1.0}]}, {"code": "002724", "name": "海洋王", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5834, "price": "11.90", "change": "-3.49", "market_id": "33", "circulate_market_value": "6741091600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.61}, {"name": "石墨烯", "change_pct": -1.13}, {"name": "军民融合", "change_pct": -1.64}, {"name": "物联网", "change_pct": -0.77}, {"name": "LED", "change_pct": -2.29}, {"name": "军工", "change_pct": -1.4}, {"name": "智慧灯杆", "change_pct": -0.8}, {"name": "海洋经济", "change_pct": -0.91}]}, {"code": "002696", "name": "百洋股份", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5834, "price": "11.28", "change": "10.05", "market_id": "33", "circulate_market_value": "3770440600.00", "change_type": "1", "change_section": "12", "change_days": "8", "change_reason": "水产加工", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.36}, {"name": "饲料", "change_pct": -0.37}, {"name": "一带一路", "change_pct": -0.25}, {"name": "强势人气股", "change_pct": -1.61}, {"name": "保健品", "change_pct": 0.49}, {"name": "山东国企改革", "change_pct": -0.33}, {"name": "污水处理", "change_pct": -0.18}, {"name": "环保", "change_pct": -0.55}, {"name": "食品", "change_pct": 0.91}, {"name": "预制菜", "change_pct": 0.41}, {"name": "国企改革", "change_pct": 0.04}, {"name": "水产养殖", "change_pct": 2.13}, {"name": "广西概念", "change_pct": -0.33}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5834, "price": "21.52", "change": "-0.05", "market_id": "33", "circulate_market_value": "16393196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5834, "price": "8.15", "change": "1.49", "market_id": "33", "circulate_market_value": "13259999300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.82}, {"name": "电竞", "change_pct": 2.36}, {"name": "手游", "change_pct": 2.69}, {"name": "人工智能", "change_pct": -0.16}, {"name": "游戏", "change_pct": 1.95}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.04}, {"name": "腾讯概念股", "change_pct": 0.1}, {"name": "传媒", "change_pct": 0.36}, {"name": "快手概念股", "change_pct": -0.14}, {"name": "元宇宙", "change_pct": 0.38}, {"name": "虚拟数字人", "change_pct": 0.53}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "web3.0", "change_pct": 0.03}, {"name": "AIGC概念", "change_pct": 0.43}, {"name": "数据要素", "change_pct": 0.34}, {"name": "字节跳动概念股", "change_pct": -0.05}, {"name": "AI营销", "change_pct": 0.03}, {"name": "ChatGPT", "change_pct": 0.61}, {"name": "智能眼镜/MR头显", "change_pct": -1.89}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "人形机器人", "change_pct": -0.68}, {"name": "短剧/互动影游", "change_pct": 0.4}, {"name": "多模态", "change_pct": 0.18}, {"name": "AI视频", "change_pct": 0.32}, {"name": "IP经济/谷子经济", "change_pct": 0.67}, {"name": "小红书概念股", "change_pct": -0.3}]}, {"code": "000651", "name": "格力电器", "hot_rank": 11, "hot_rank_chg": 32, "stock_cnt": 5834, "price": "37.18", "change": "-0.13", "market_id": "33", "circulate_market_value": "204969360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5834, "price": "15.51", "change": "2.17", "market_id": "17", "circulate_market_value": "16206211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 13, "hot_rank_chg": 8, "stock_cnt": 5834, "price": "13.38", "change": "4.94", "market_id": "17", "circulate_market_value": "2166517400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5834, "price": "8.58", "change": "-9.97", "market_id": "33", "circulate_market_value": "5149001500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.77}, {"name": "体育产业", "change_pct": 0.16}, {"name": "边缘计算", "change_pct": -0.93}, {"name": "核电", "change_pct": -1.47}, {"name": "海工装备", "change_pct": -0.75}, {"name": "强势人气股", "change_pct": -1.61}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "冷链", "change_pct": -0.47}, {"name": "地热", "change_pct": -1.76}, {"name": "储能", "change_pct": -0.94}, {"name": "碳中和", "change_pct": 0.15}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.86}, {"name": "汽车热管理", "change_pct": -1.06}, {"name": "热泵", "change_pct": -2.27}, {"name": "液冷服务器", "change_pct": -1.88}, {"name": "蜜雪冰城概念股", "change_pct": -1.61}, {"name": "海洋经济", "change_pct": -0.91}]}, {"code": "603028", "name": "赛福天", "hot_rank": 15, "hot_rank_chg": 10, "stock_cnt": 5834, "price": "9.39", "change": "9.95", "market_id": "17", "circulate_market_value": "2662677200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人腱绳", "xgb_concepts": [{"name": "电梯", "change_pct": -0.33}, {"name": "光伏", "change_pct": -1.07}, {"name": "机器人", "change_pct": -0.61}, {"name": "干细胞", "change_pct": 1.12}, {"name": "海洋经济", "change_pct": -0.91}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 16, "hot_rank_chg": 6, "stock_cnt": 5834, "price": "41.97", "change": "10.01", "market_id": "17", "circulate_market_value": "12527148900.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "数据采集手套"}, {"code": "603259", "name": "药明康德", "hot_rank": 17, "hot_rank_chg": 13, "stock_cnt": 5834, "price": "146.00", "change": "0.89", "market_id": "17", "circulate_market_value": "361098910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 18, "hot_rank_chg": 5, "stock_cnt": 5834, "price": "2.30", "change": "10.05", "market_id": "33", "circulate_market_value": "3636233900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "质谱诊断", "xgb_concepts": [{"name": "精准医疗", "change_pct": 0.62}, {"name": "体外诊断", "change_pct": 1.5}, {"name": "医疗器械", "change_pct": 1.06}, {"name": "基因测序", "change_pct": 0.73}, {"name": "预制菜", "change_pct": 0.41}, {"name": "低价股", "change_pct": 0.08}, {"name": "水产养殖", "change_pct": 2.13}, {"name": "新冠病毒防治", "change_pct": 0.12}, {"name": "海洋经济", "change_pct": -0.91}]}, {"code": "000810", "name": "创维数字", "hot_rank": 19, "hot_rank_chg": 14, "stock_cnt": 5834, "price": "11.02", "change": "9.98", "market_id": "33", "circulate_market_value": "12322101400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "具身智能数据采集", "xgb_concepts": [{"name": "广电", "change_pct": 0.23}, {"name": "折叠屏", "change_pct": -1.97}, {"name": "超高清视频", "change_pct": -1.28}, {"name": "半导体", "change_pct": -3.32}, {"name": "5G", "change_pct": -2.56}, {"name": "人工智能", "change_pct": -0.16}, {"name": "VR&AR", "change_pct": -1.31}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "光通信", "change_pct": -3.49}, {"name": "OLED", "change_pct": -2.54}, {"name": "教育", "change_pct": 0.26}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "汽车零部件", "change_pct": -0.46}, {"name": "智能音箱", "change_pct": -0.98}, {"name": "机器人", "change_pct": -0.61}, {"name": "黑色家电", "change_pct": -1.02}, {"name": "家电", "change_pct": -0.6}, {"name": "WiFi", "change_pct": -2.63}, {"name": "数字经济", "change_pct": -0.04}, {"name": "百度概念股", "change_pct": 0.73}, {"name": "国产操作系统", "change_pct": -0.13}, {"name": "腾讯概念股", "change_pct": 0.1}, {"name": "液晶面板/LCD", "change_pct": -2.34}, {"name": "全息概念", "change_pct": 1.26}, {"name": "元宇宙", "change_pct": 0.38}, {"name": "F5G", "change_pct": -2.29}, {"name": "电子后视镜", "change_pct": -0.2}, {"name": "华为海思", "change_pct": -1.83}, {"name": "教育信息化", "change_pct": -0.6}, {"name": "在线教育", "change_pct": -0.37}, {"name": "云游戏", "change_pct": 1.47}, {"name": "MiniLED", "change_pct": -2.55}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "智能眼镜/MR头显", "change_pct": -1.89}, {"name": "星闪概念", "change_pct": -1.1}, {"name": "智能座舱", "change_pct": -0.65}, {"name": "短剧/互动影游", "change_pct": 0.4}, {"name": "多模态", "change_pct": 0.18}]}, {"code": "002747", "name": "埃斯顿", "hot_rank": 20, "hot_rank_chg": -5, "stock_cnt": 5834, "price": "30.59", "change": "4.83", "market_id": "33", "circulate_market_value": "23993143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5834, "price": "67.85", "change": "10.43", "market_id": "33", "circulate_market_value": "5340576300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600558", "name": "大西洋", "hot_rank": 22, "hot_rank_chg": 20, "stock_cnt": 5834, "price": "5.56", "change": "10.10", "market_id": "17", "circulate_market_value": "4990682900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高端焊材", "xgb_concepts": [{"name": "核电", "change_pct": -1.47}, {"name": "军民融合", "change_pct": -1.64}, {"name": "有色 · 钛", "change_pct": -1.26}, {"name": "装配式建筑", "change_pct": -0.36}, {"name": "有色金属", "change_pct": -1.78}, {"name": "军工", "change_pct": -1.4}, {"name": "超超临界发电", "change_pct": -0.32}, {"name": "核聚变", "change_pct": -1.58}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5834, "price": "9.80", "change": "-10.01", "market_id": "33", "circulate_market_value": "4642066800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 2.69}, {"name": "强势人气股", "change_pct": -1.61}, {"name": "VR&AR", "change_pct": -1.31}, {"name": "游戏", "change_pct": 1.95}, {"name": "影视", "change_pct": -0.71}, {"name": "直播/短视频", "change_pct": -0.44}, {"name": "动漫", "change_pct": -1.05}, {"name": "腾讯概念股", "change_pct": 0.1}, {"name": "传媒", "change_pct": 0.36}, {"name": "元宇宙", "change_pct": 0.38}, {"name": "短剧/互动影游", "change_pct": 0.4}, {"name": "IP经济/谷子经济", "change_pct": 0.67}]}, {"code": "001309", "name": "德明利", "hot_rank": 25, "hot_rank_chg": -17, "stock_cnt": 5834, "price": "242.52", "change": "-3.38", "market_id": "33", "circulate_market_value": "56366034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603138", "name": "海量数据", "hot_rank": 26, "hot_rank_chg": 0, "stock_cnt": 5834, "price": "17.00", "change": "10.03", "market_id": "17", "circulate_market_value": "4901828500.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "数据库"}, {"code": "001317", "name": "三羊马", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5834, "price": "53.68", "change": "10.00", "market_id": "33", "circulate_market_value": "4589775100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈"}, {"code": "002185", "name": "华天科技", "hot_rank": 28, "hot_rank_chg": -10, "stock_cnt": 5834, "price": "14.92", "change": "-7.84", "market_id": "33", "circulate_market_value": "49624316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002178", "name": "延华智能", "hot_rank": 29, "hot_rank_chg": 25, "stock_cnt": 5834, "price": "5.34", "change": "10.10", "market_id": "33", "circulate_market_value": "3801177200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI医疗", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.74}, {"name": "国产软件", "change_pct": 0.04}, {"name": "体外诊断", "change_pct": 1.5}, {"name": "互联网医疗", "change_pct": 1.05}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "养老产业", "change_pct": 0.77}, {"name": "物联网", "change_pct": -0.77}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "数字经济", "change_pct": -0.04}, {"name": "智慧政务", "change_pct": -0.12}, {"name": "医疗信息化", "change_pct": 0.41}, {"name": "华为鸿蒙", "change_pct": 0.17}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "AI大模型/智能体", "change_pct": 0.22}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 30, "hot_rank_chg": -10, "stock_cnt": 5834, "price": "48.06", "change": "-8.14", "market_id": "17", "circulate_market_value": "117922241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 31, "hot_rank_chg": -7, "stock_cnt": 5834, "price": "42.66", "change": "-0.44", "market_id": "17", "circulate_market_value": "192099640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301502", "name": "华阳智能", "hot_rank": 32, "hot_rank_chg": 13, "stock_cnt": 5834, "price": "77.76", "change": "20.00", "market_id": "33", "circulate_market_value": "1840639500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人关节模组"}, {"code": "000700", "name": "模塑科技", "hot_rank": 33, "hot_rank_chg": 23, "stock_cnt": 5834, "price": "13.07", "change": "10.02", "market_id": "33", "circulate_market_value": "11998461100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "002384", "name": "东山精密", "hot_rank": 34, "hot_rank_chg": -17, "stock_cnt": 5834, "price": "105.43", "change": "-7.70", "market_id": "33", "circulate_market_value": "146159900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 35, "hot_rank_chg": -19, "stock_cnt": 5834, "price": "594.50", "change": "-2.96", "market_id": "33", "circulate_market_value": "659857550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603089", "name": "正裕工业", "hot_rank": 36, "hot_rank_chg": 10, "stock_cnt": 5834, "price": "13.08", "change": "10.01", "market_id": "17", "circulate_market_value": "3606407500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "机器人零部件"}, {"code": "002708", "name": "光洋股份", "hot_rank": 37, "hot_rank_chg": 22, "stock_cnt": 5834, "price": "15.65", "change": "9.98", "market_id": "33", "circulate_market_value": "7975715000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "002931", "name": "锋龙股份", "hot_rank": 38, "hot_rank_chg": 12, "stock_cnt": 5834, "price": "42.37", "change": "9.99", "market_id": "33", "circulate_market_value": "8583139100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人概念"}, {"code": "600506", "name": "统一股份", "hot_rank": 39, "hot_rank_chg": 8, "stock_cnt": 5834, "price": "17.67", "change": "4.99", "market_id": "17", "circulate_market_value": "4410866900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 40, "hot_rank_chg": 11, "stock_cnt": 5834, "price": "13.93", "change": "-7.63", "market_id": "17", "circulate_market_value": "29135183000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 41, "hot_rank_chg": -14, "stock_cnt": 5834, "price": "238.00", "change": "0.17", "market_id": "33", "circulate_market_value": "1014026870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 42, "hot_rank_chg": 30, "stock_cnt": 5834, "price": "50.41", "change": "9.99", "market_id": "17", "circulate_market_value": "8845951800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "002249", "name": "大洋电机", "hot_rank": 43, "hot_rank_chg": -7, "stock_cnt": 5834, "price": "7.00", "change": "-7.65", "market_id": "33", "circulate_market_value": "13107022100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -1.68}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "军民融合", "change_pct": -1.64}, {"name": "氢能源/燃料电池", "change_pct": -0.64}, {"name": "风电", "change_pct": -1.27}, {"name": "军工", "change_pct": -1.4}, {"name": "新能源汽车", "change_pct": -1.07}, {"name": "新能源车零部件", "change_pct": -1.1}, {"name": "轮边电机", "change_pct": -1.79}, {"name": "人形机器人", "change_pct": -0.68}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 44, "hot_rank_chg": -6, "stock_cnt": 5834, "price": "76.86", "change": "-9.23", "market_id": "33", "circulate_market_value": "50190156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 45, "hot_rank_chg": -13, "stock_cnt": 5834, "price": "9.02", "change": "7.77", "market_id": "17", "circulate_market_value": "7837954100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.82}, {"name": "快递物流", "change_pct": 1.44}, {"name": "新零售", "change_pct": 1.11}, {"name": "福建自贸/海西概念", "change_pct": -0.49}, {"name": "旅游", "change_pct": 0.16}, {"name": "阿里巴巴概念股", "change_pct": -0.29}, {"name": "物业管理", "change_pct": 1.53}, {"name": "免税店概念", "change_pct": 1.5}, {"name": "自贸区", "change_pct": 0.39}]}, {"code": "600206", "name": "有研新材", "hot_rank": 46, "hot_rank_chg": -11, "stock_cnt": 5834, "price": "38.68", "change": "-8.30", "market_id": "17", "circulate_market_value": "32744683000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600293", "name": "三峡新材", "hot_rank": 47, "hot_rank_chg": -8, "stock_cnt": 5834, "price": "4.42", "change": "-9.98", "market_id": "17", "circulate_market_value": "5127841100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.61}, {"name": "玻璃", "change_pct": -0.77}, {"name": "国企改革", "change_pct": 0.04}, {"name": "湖北国企改革", "change_pct": -0.59}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 48, "hot_rank_chg": -7, "stock_cnt": 5834, "price": "12.10", "change": "10.00", "market_id": "33", "circulate_market_value": "3420186000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "乳制品", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.17}, {"name": "优化生育（三孩）", "change_pct": 0.88}, {"name": "食品", "change_pct": 0.91}, {"name": "大农业", "change_pct": -0.82}, {"name": "饮料", "change_pct": 0.61}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 49, "hot_rank_chg": -15, "stock_cnt": 5834, "price": "13.37", "change": "10.04", "market_id": "33", "circulate_market_value": "2371945000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "002421", "name": "达实智能", "hot_rank": 50, "hot_rank_chg": 5, "stock_cnt": 5834, "price": "3.42", "change": "-0.29", "market_id": "33", "circulate_market_value": "6963801100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.93}, {"name": "数字孪生", "change_pct": 0.74}, {"name": "深圳本地股", "change_pct": -0.33}, {"name": "人工智能", "change_pct": -0.16}, {"name": "互联网医疗", "change_pct": 1.05}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "高铁轨交", "change_pct": -0.62}, {"name": "人脸识别", "change_pct": -0.88}, {"name": "智慧停车", "change_pct": 0.06}, {"name": "物联网", "change_pct": -0.77}, {"name": "大数据", "change_pct": 0.14}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "雄安新区", "change_pct": -0.12}, {"name": "机器人", "change_pct": -0.61}, {"name": "数字经济", "change_pct": -0.04}, {"name": "阿里巴巴概念股", "change_pct": -0.29}, {"name": "腾讯概念股", "change_pct": 0.1}, {"name": "建筑节能", "change_pct": -1.25}, {"name": "旧改", "change_pct": -0.11}, {"name": "医疗信息化", "change_pct": 0.41}, {"name": "新冠病毒防治", "change_pct": 0.12}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "医疗耗材供应链SPD", "change_pct": 1.96}, {"name": "液冷服务器", "change_pct": -1.88}, {"name": "区块链", "change_pct": 0.06}]}, {"code": "600584", "name": "长电科技", "hot_rank": 51, "hot_rank_chg": 1, "stock_cnt": 5834, "price": "55.10", "change": "-7.83", "market_id": "17", "circulate_market_value": "98596744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 52, "hot_rank_chg": -15, "stock_cnt": 5834, "price": "181.49", "change": "-10.00", "market_id": "17", "circulate_market_value": "28455911000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603901", "name": "永创智能", "hot_rank": 53, "hot_rank_chg": 43, "stock_cnt": 5834, "price": "10.63", "change": "10.04", "market_id": "17", "circulate_market_value": "6047398000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "工业自动化", "change_pct": -0.99}, {"name": "包装印刷", "change_pct": -0.59}, {"name": "机器人", "change_pct": -0.61}, {"name": "机器视觉", "change_pct": -0.76}, {"name": "智能制造", "change_pct": -0.82}]}, {"code": "603683", "name": "晶华新材", "hot_rank": 54, "hot_rank_chg": 56, "stock_cnt": 5834, "price": "17.16", "change": "10.00", "market_id": "17", "circulate_market_value": "4949512700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "人形机器人"}, {"code": "603173", "name": "福斯达", "hot_rank": 55, "hot_rank_chg": 767, "stock_cnt": 5834, "price": "32.98", "change": "6.15", "market_id": "17", "circulate_market_value": "5276800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5834, "price": "8.58", "change": "3.12", "market_id": "17", "circulate_market_value": "2313272800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.31}, {"name": "高股息", "change_pct": 1.27}, {"name": "银行", "change_pct": 1.52}, {"name": "白马股", "change_pct": 0.82}, {"name": "破净股", "change_pct": 0.61}, {"name": "大金融", "change_pct": 1.09}]}, {"code": "600826", "name": "兰生股份", "hot_rank": 57, "hot_rank_chg": 43, "stock_cnt": 5834, "price": "8.22", "change": "10.04", "market_id": "17", "circulate_market_value": "5952788900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人展区", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.16}, {"name": "上海国企改革", "change_pct": 1.27}, {"name": "人工智能", "change_pct": -0.16}, {"name": "上海自由贸易港", "change_pct": 2.01}, {"name": "进口博览会", "change_pct": 2.81}, {"name": "自由贸易港", "change_pct": 1.11}, {"name": "宠物经济", "change_pct": 1.08}, {"name": "国企改革", "change_pct": 0.04}, {"name": "自贸区", "change_pct": 0.39}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "首发经济", "change_pct": 2.24}]}, {"code": "300502", "name": "新易盛", "hot_rank": 58, "hot_rank_chg": -30, "stock_cnt": 5834, "price": "251.69", "change": "-3.57", "market_id": "33", "circulate_market_value": "315801420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 59, "hot_rank_chg": -6, "stock_cnt": 5834, "price": "14.73", "change": "0.27", "market_id": "17", "circulate_market_value": "8761874800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 60, "hot_rank_chg": -12, "stock_cnt": 5834, "price": "11.16", "change": "-2.62", "market_id": "17", "circulate_market_value": "7162300700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.17}, {"name": "农业种植", "change_pct": -2.16}, {"name": "湖南国企改革", "change_pct": -0.9}, {"name": "乡村振兴", "change_pct": -0.39}, {"name": "休闲食品", "change_pct": 2.62}, {"name": "食品", "change_pct": 0.91}, {"name": "食品安全", "change_pct": -0.31}, {"name": "社区团购", "change_pct": 0.71}, {"name": "大农业", "change_pct": -0.82}, {"name": "预制菜", "change_pct": 0.41}, {"name": "人造肉", "change_pct": -0.54}, {"name": "国企改革", "change_pct": 0.04}]}, {"code": "003021", "name": "兆威机电", "hot_rank": 61, "hot_rank_chg": 0, "stock_cnt": 5834, "price": "96.26", "change": "4.94", "market_id": "33", "circulate_market_value": "20042508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 62, "hot_rank_chg": 260, "stock_cnt": 5834, "price": "9.38", "change": "1.96", "market_id": "17", "circulate_market_value": "5390096500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.2}, {"name": "福建自贸/海西概念", "change_pct": -0.49}, {"name": "自贸区", "change_pct": 0.39}, {"name": "IP经济/谷子经济", "change_pct": 0.67}]}, {"code": "300296", "name": "利亚德", "hot_rank": 63, "hot_rank_chg": 3, "stock_cnt": 5834, "price": "6.78", "change": "-7.38", "market_id": "33", "circulate_market_value": "15736357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.16}, {"name": "超高清视频", "change_pct": -1.28}, {"name": "苹果产业链", "change_pct": -2.09}, {"name": "无人驾驶", "change_pct": -0.65}, {"name": "人工智能", "change_pct": -0.16}, {"name": "VR&AR", "change_pct": -1.31}, {"name": "OLED", "change_pct": -2.54}, {"name": "教育", "change_pct": 0.26}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "LED", "change_pct": -2.29}, {"name": "腾讯概念股", "change_pct": 0.1}, {"name": "全息概念", "change_pct": 1.26}, {"name": "MicroLED", "change_pct": -3.17}, {"name": "第三代半导体", "change_pct": -2.86}, {"name": "元宇宙", "change_pct": 0.38}, {"name": "虚拟数字人", "change_pct": 0.53}, {"name": "教育信息化", "change_pct": -0.6}, {"name": "阿尔茨海默病", "change_pct": 1.25}, {"name": "MiniLED", "change_pct": -2.55}, {"name": "远程办公", "change_pct": -0.74}, {"name": "氮化镓", "change_pct": -3.11}, {"name": "智慧灯杆", "change_pct": -0.8}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "物理AI", "change_pct": -0.06}, {"name": "智能眼镜/MR头显", "change_pct": -1.89}, {"name": "人形机器人", "change_pct": -0.68}, {"name": "小红书概念股", "change_pct": -0.3}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 64, "hot_rank_chg": -24, "stock_cnt": 5834, "price": "276.45", "change": "-5.33", "market_id": "17", "circulate_market_value": "185420080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 65, "hot_rank_chg": -21, "stock_cnt": 5834, "price": "27.47", "change": "-4.58", "market_id": "17", "circulate_market_value": "565931250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601900", "name": "南方传媒", "hot_rank": 66, "hot_rank_chg": 54, "stock_cnt": 5834, "price": "14.28", "change": "10.02", "market_id": "17", "circulate_market_value": "12594532900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "603716", "name": "塞力医疗", "hot_rank": 67, "hot_rank_chg": 11, "stock_cnt": 5834, "price": "16.06", "change": "10.00", "market_id": "17", "circulate_market_value": "3626199800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高血压疫苗"}, {"code": "002093", "name": "国脉科技", "hot_rank": 68, "hot_rank_chg": 63, "stock_cnt": 5834, "price": "7.21", "change": "10.08", "market_id": "33", "circulate_market_value": "7264075000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.13}, {"name": "精准医疗", "change_pct": 0.62}, {"name": "5G", "change_pct": -2.56}, {"name": "云计算数据中心", "change_pct": -1.75}, {"name": "养老产业", "change_pct": 0.77}, {"name": "福建自贸/海西概念", "change_pct": -0.49}, {"name": "物联网", "change_pct": -0.77}, {"name": "教育", "change_pct": 0.26}, {"name": "脑科学/脑机接口", "change_pct": 1.25}, {"name": "数字经济", "change_pct": -0.04}, {"name": "职业教育", "change_pct": 1.4}, {"name": "智慧政务", "change_pct": -0.12}, {"name": "6G", "change_pct": -3.13}, {"name": "IPv6", "change_pct": -0.52}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "自贸区", "change_pct": 0.39}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "区块链", "change_pct": 0.06}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 69, "hot_rank_chg": 39, "stock_cnt": 5834, "price": "13.62", "change": "10.02", "market_id": "33", "circulate_market_value": "2590490000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "饼干食品"}, {"code": "603258", "name": "电魂网络", "hot_rank": 70, "hot_rank_chg": 63, "stock_cnt": 5834, "price": "15.30", "change": "9.99", "market_id": "17", "circulate_market_value": "3692522700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI游戏"}, {"code": "600094", "name": "大名城", "hot_rank": 71, "hot_rank_chg": 28, "stock_cnt": 5834, "price": "4.83", "change": "10.02", "market_id": "17", "circulate_market_value": "10269690900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房地产开发", "xgb_concepts": [{"name": "房地产", "change_pct": 0.71}, {"name": "物业管理", "change_pct": 1.53}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "旧改", "change_pct": -0.11}, {"name": "6G", "change_pct": -3.13}]}, {"code": "688585", "name": "上纬新材", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5834, "price": "151.57", "change": "20.00", "market_id": "17", "circulate_market_value": "61137537000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能"}, {"code": "002095", "name": "生意宝", "hot_rank": 73, "hot_rank_chg": 74, "stock_cnt": 5834, "price": "16.48", "change": "10.01", "market_id": "33", "circulate_market_value": "4148154700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大宗电商"}, {"code": "003029", "name": "吉大正元", "hot_rank": 74, "hot_rank_chg": -10, "stock_cnt": 5834, "price": "20.75", "change": "-9.98", "market_id": "33", "circulate_market_value": "3643348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5834, "price": "30.85", "change": "-6.23", "market_id": "17", "circulate_market_value": "122523459000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 76, "hot_rank_chg": 30, "stock_cnt": 5834, "price": "8.85", "change": "13.17", "market_id": "33", "circulate_market_value": "9344014900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.22}, {"name": "医疗器械", "change_pct": 1.06}, {"name": "医药", "change_pct": 0.27}, {"name": "疫苗", "change_pct": 1.23}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "肝炎概念", "change_pct": 0.72}, {"name": "干细胞", "change_pct": 1.12}, {"name": "眼科", "change_pct": 1.97}, {"name": "肿瘤疫苗", "change_pct": 1.38}]}, {"code": "002241", "name": "歌尔股份", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5834, "price": "23.52", "change": "1.77", "market_id": "33", "circulate_market_value": "74389649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688787", "name": "海天瑞声", "hot_rank": 78, "hot_rank_chg": 107, "stock_cnt": 5834, "price": "145.33", "change": "3.07", "market_id": "17", "circulate_market_value": "8767058400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002009", "name": "天奇股份", "hot_rank": 79, "hot_rank_chg": -22, "stock_cnt": 5834, "price": "17.17", "change": "-0.75", "market_id": "33", "circulate_market_value": "6082151700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603337", "name": "杰克科技", "hot_rank": 80, "hot_rank_chg": 34, "stock_cnt": 5834, "price": "43.19", "change": "10.01", "market_id": "17", "circulate_market_value": "20181490000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 81, "hot_rank_chg": -10, "stock_cnt": 5834, "price": "19.01", "change": "-7.67", "market_id": "17", "circulate_market_value": "4014212100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 82, "hot_rank_chg": 22, "stock_cnt": 5834, "price": "29.86", "change": "1.39", "market_id": "17", "circulate_market_value": "730620990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 83, "hot_rank_chg": 20, "stock_cnt": 5834, "price": "968.00", "change": "3.84", "market_id": "17", "circulate_market_value": "608730680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 84, "hot_rank_chg": -2, "stock_cnt": 5834, "price": "3.04", "change": "6.67", "market_id": "33", "circulate_market_value": "7121771900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.11}, {"name": "人工智能", "change_pct": -0.16}, {"name": "VR&AR", "change_pct": -1.31}, {"name": "京津冀", "change_pct": -0.19}, {"name": "装修装饰", "change_pct": -0.95}, {"name": "住房租赁", "change_pct": 2.22}, {"name": "破净股", "change_pct": 0.61}, {"name": "数字经济", "change_pct": -0.04}, {"name": "房产经纪", "change_pct": 2.11}, {"name": "物业管理", "change_pct": 1.53}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "AI大模型/智能体", "change_pct": 0.22}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 85, "hot_rank_chg": -27, "stock_cnt": 5834, "price": "25.31", "change": "-9.99", "market_id": "33", "circulate_market_value": "6247424200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603636", "name": "南威软件", "hot_rank": 86, "hot_rank_chg": 12, "stock_cnt": 5834, "price": "8.89", "change": "4.10", "market_id": "17", "circulate_market_value": "5159405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.93}, {"name": "国产软件", "change_pct": 0.04}, {"name": "蚂蚁集团概念股", "change_pct": 0.31}, {"name": "共享经济", "change_pct": 0.31}, {"name": "人工智能", "change_pct": -0.16}, {"name": "网络安全", "change_pct": -0.75}, {"name": "福建自贸/海西概念", "change_pct": -0.49}, {"name": "游戏", "change_pct": 1.95}, {"name": "智慧停车", "change_pct": 0.06}, {"name": "物联网", "change_pct": -0.77}, {"name": "大数据", "change_pct": 0.14}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "储能", "change_pct": -0.94}, {"name": "智慧安防", "change_pct": -0.37}, {"name": "数字经济", "change_pct": -0.04}, {"name": "阿里巴巴概念股", "change_pct": -0.29}, {"name": "信创", "change_pct": -0.08}, {"name": "华为昇腾", "change_pct": -0.01}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "电子身份证", "change_pct": -0.29}, {"name": "数据要素", "change_pct": 0.34}, {"name": "数字乡村", "change_pct": 0.11}, {"name": "智慧政务", "change_pct": -0.12}, {"name": "华为云·鲲鹏", "change_pct": 0.03}, {"name": "智慧灯杆", "change_pct": -0.8}, {"name": "算电协同", "change_pct": -1.56}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "自贸区", "change_pct": 0.39}, {"name": "AI大模型/智能体", "change_pct": 0.22}, {"name": "短剧/互动影游", "change_pct": 0.4}, {"name": "智谱AI", "change_pct": 0.19}, {"name": "DeepSeek概念股", "change_pct": 0.17}, {"name": "AI医疗", "change_pct": 0.56}, {"name": "算力一体机", "change_pct": -0.75}, {"name": "区块链", "change_pct": 0.06}]}, {"code": "002050", "name": "三花智控", "hot_rank": 87, "hot_rank_chg": 3, "stock_cnt": 5834, "price": "34.41", "change": "-1.91", "market_id": "33", "circulate_market_value": "127008858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002869", "name": "金溢科技", "hot_rank": 88, "hot_rank_chg": 66, "stock_cnt": 5834, "price": "20.04", "change": "9.99", "market_id": "33", "circulate_market_value": "3175443800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "车路协同"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 89, "hot_rank_chg": -16, "stock_cnt": 5834, "price": "53.96", "change": "-10.01", "market_id": "17", "circulate_market_value": "7712449400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 90, "hot_rank_chg": -27, "stock_cnt": 5834, "price": "20.17", "change": "2.39", "market_id": "17", "circulate_market_value": "45466774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002820", "name": "桂发祥", "hot_rank": 91, "hot_rank_chg": 24, "stock_cnt": 5834, "price": "10.19", "change": "10.04", "market_id": "33", "circulate_market_value": "2046847900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "休闲食品", "xgb_concepts": [{"name": "天津国企改革", "change_pct": 0.62}, {"name": "休闲食品", "change_pct": 2.62}, {"name": "食品", "change_pct": 0.91}, {"name": "国企改革", "change_pct": 0.04}]}, {"code": "000823", "name": "超声电子", "hot_rank": 92, "hot_rank_chg": -23, "stock_cnt": 5834, "price": "18.70", "change": "-9.40", "market_id": "33", "circulate_market_value": "11125231500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 93, "hot_rank_chg": 115, "stock_cnt": 5834, "price": "9.55", "change": "-2.25", "market_id": "17", "circulate_market_value": "17086271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.26}, {"name": "纯碱", "change_pct": -0.36}, {"name": "食品", "change_pct": 0.91}, {"name": "土壤修复", "change_pct": -0.05}, {"name": "东数西算/算力", "change_pct": -0.54}, {"name": "OpenClaw概念", "change_pct": 0.19}, {"name": "DeepSeek概念股", "change_pct": 0.17}]}, {"code": "000858", "name": "五粮液", "hot_rank": 94, "hot_rank_chg": 11, "stock_cnt": 5834, "price": "75.63", "change": "2.40", "market_id": "33", "circulate_market_value": "293558860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 95, "hot_rank_chg": -33, "stock_cnt": 5834, "price": "100.26", "change": "-9.52", "market_id": "17", "circulate_market_value": "241801940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002474", "name": "榕基软件", "hot_rank": 96, "hot_rank_chg": -36, "stock_cnt": 5834, "price": "7.01", "change": "-1.41", "market_id": "33", "circulate_market_value": "3765950300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -1.53}, {"name": "国产软件", "change_pct": 0.04}, {"name": "人工智能", "change_pct": -0.16}, {"name": "VR&AR", "change_pct": -1.31}, {"name": "网络安全", "change_pct": -0.75}, {"name": "福建自贸/海西概念", "change_pct": -0.49}, {"name": "物联网", "change_pct": -0.77}, {"name": "教育", "change_pct": 0.26}, {"name": "水务", "change_pct": 0.15}, {"name": "智慧城市", "change_pct": -0.31}, {"name": "智慧安防", "change_pct": -0.37}, {"name": "数字经济", "change_pct": -0.04}, {"name": "信创", "change_pct": -0.08}, {"name": "核污染防治", "change_pct": -2.19}, {"name": "教育信息化", "change_pct": -0.6}, {"name": "智慧政务", "change_pct": -0.12}, {"name": "华为鸿蒙", "change_pct": 0.17}, {"name": "传感器", "change_pct": -1.63}, {"name": "华为云·鲲鹏", "change_pct": 0.03}, {"name": "远程办公", "change_pct": -0.74}, {"name": "华为产业链", "change_pct": -1.05}, {"name": "自贸区", "change_pct": 0.39}, {"name": "智能电网", "change_pct": -1.72}, {"name": "区块链", "change_pct": 0.06}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 97, "hot_rank_chg": -29, "stock_cnt": 5834, "price": "13.56", "change": "-8.56", "market_id": "33", "circulate_market_value": "8951318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 98, "hot_rank_chg": -5, "stock_cnt": 5834, "price": "46.73", "change": "-4.34", "market_id": "17", "circulate_market_value": "927314420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301428", "name": "世纪恒通", "hot_rank": 99, "hot_rank_chg": 28, "stock_cnt": 5834, "price": "38.43", "change": "17.74", "market_id": "33", "circulate_market_value": "2675783100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 100, "hot_rank_chg": 18, "stock_cnt": 5834, "price": "1349.98", "change": "1.12", "market_id": "17", "circulate_market_value": "1687585200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};