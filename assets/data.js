const UPDATE_TIME = "2026-08-14 04:03";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.67,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.77,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续270天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "存储芯片",
    "rise": 1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续223天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": -0.79,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续134天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": -1.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": 1.06,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "MLCC概念",
    "rise": 0.82,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "光纤概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "CRO概念",
    "rise": -0.74,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "人形机器人",
    "rise": -0.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续434天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 0.12,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "稀土永磁",
    "rise": 1.3,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "液冷服务器",
    "rise": 0.78,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "东数西算(算力)",
    "rise": -0.3,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "先进封装",
    "rise": 1.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "超级电容",
    "rise": 1.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电网设备ETF",
    "code": "885886"
  },
  {
    "name": "机器人概念",
    "rise": -0.1,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "猪肉",
    "rise": -1.38,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "芯片概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": -0.48,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  }
];
const THS_EVENTS = [
  {
    "title": "国际金价再上4400美元 金饰涨价催生消费轻量化",
    "desc": "",
    "heat": 334588,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "中创环保",
        "code": "300056",
        "chg": 4.05562
      }
    ]
  },
  {
    "title": "2056台机器人同台竞技！第二届世界人形机器人运动会最新发布",
    "desc": "",
    "heat": 227996,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "阿莱德",
        "code": "301419",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "商务部：对原产于印度的进口单模光纤继续征收反倾销税",
    "desc": "",
    "heat": 222616,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "九州一轨",
        "code": "688485",
        "chg": 17.842876
      }
    ]
  },
  {
    "title": "DeepSeek Harness开发者预览版上线",
    "desc": "",
    "heat": 213456,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "三分之二产能提前锁定、80%毛利锚定，闪迪给存储赛道画了三年增长曲线",
    "desc": "",
    "heat": 177994,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "阿莱德",
        "code": "301419",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "利好来了！细胞治疗，北京出台新政（附概念股）",
    "desc": "",
    "heat": 41508,
    "direction": "CAR-T细胞疗法",
    "themes": [
      "制备设备与试剂耗材",
      "创新药CAR-T研发",
      "CXO/CDMO服务",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "博济医药",
        "code": "300404",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "五粮液，出手稳价",
    "desc": "",
    "heat": 32658,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "会稽山",
        "code": "601579",
        "chg": 6.532951
      }
    ]
  },
  {
    "title": "算力金属身价飙升，算力金属大涨价",
    "desc": "",
    "heat": 27549,
    "direction": "算力金属",
    "themes": [
      "金属钨",
      "金属钼",
      "金属铟",
      "金属铜",
      "金属锡",
      "金属锗",
      "金属镓",
      "金属锆"
    ],
    "stocks": [
      {
        "name": "金田股份",
        "code": "601609",
        "chg": 10.050251
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+6.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+3.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+2.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+2.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+2.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+1.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+1.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+1.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+1.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+1.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太赫兹",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无线充电",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5869,
    "price": "6.57",
    "change": "-5.06",
    "market_id": "17",
    "circulate_market_value": "81442305000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.41
      },
      {
        "name": "核电",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.46
      },
      {
        "name": "水电",
        "change_pct": -2.9
      },
      {
        "name": "火电",
        "change_pct": -2.49
      },
      {
        "name": "光伏",
        "change_pct": -0.48
      },
      {
        "name": "风电",
        "change_pct": -0.83
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "算电协同",
        "change_pct": -1.42
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -2,
    "stock_cnt": 5869,
    "price": "8.67",
    "change": "-2.15",
    "market_id": "17",
    "circulate_market_value": "21835481000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "工业大麻",
        "change_pct": -0.9
      },
      {
        "name": "中药",
        "change_pct": -0.24
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "保健品",
        "change_pct": -0.69
      },
      {
        "name": "民营医院",
        "change_pct": -0.73
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "化学原料药",
        "change_pct": -0.48
      },
      {
        "name": "流感",
        "change_pct": -0.45
      },
      {
        "name": "振兴东北",
        "change_pct": -0.63
      },
      {
        "name": "食品",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 11,
    "hot_rank_chg": -2,
    "stock_cnt": 5869,
    "price": "5.26",
    "change": "-5.40",
    "market_id": "33",
    "circulate_market_value": "30796240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.37
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "水利",
        "change_pct": -0.62
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.3
      },
      {
        "name": "大数据",
        "change_pct": -1.0
      },
      {
        "name": "园林",
        "change_pct": -1.5
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.6
      },
      {
        "name": "数字经济",
        "change_pct": -0.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.02
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.52
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.48
      },
      {
        "name": "快手概念股",
        "change_pct": -2.24
      },
      {
        "name": "IGBT",
        "change_pct": -0.29
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.33
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.16
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.36
      },
      {
        "name": "氮化镓",
        "change_pct": 0.53
      },
      {
        "name": "AI营销",
        "change_pct": -1.95
      },
      {
        "name": "多模态",
        "change_pct": -1.42
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.07
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      },
      {
        "name": "区块链",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 13,
    "hot_rank_chg": 9,
    "stock_cnt": 5869,
    "price": "5.29",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "13988047000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "装修装饰",
        "change_pct": -0.61
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.52
      },
      {
        "name": "航天",
        "change_pct": 0.17
      },
      {
        "name": "旧改",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 16,
    "hot_rank_chg": 15,
    "stock_cnt": 5869,
    "price": "4.60",
    "change": "8.23",
    "market_id": "33",
    "circulate_market_value": "9660707700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.24
      },
      {
        "name": "维生素",
        "change_pct": -0.03
      },
      {
        "name": "基因测序",
        "change_pct": -0.21
      },
      {
        "name": "民营医院",
        "change_pct": -0.73
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "化学原料药",
        "change_pct": -0.48
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.39
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 22,
    "hot_rank_chg": 4,
    "stock_cnt": 5869,
    "price": "12.61",
    "change": "-7.62",
    "market_id": "33",
    "circulate_market_value": "6218699200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.49
      },
      {
        "name": "彩票",
        "change_pct": -0.14
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "包装印刷",
        "change_pct": -0.38
      },
      {
        "name": "数字经济",
        "change_pct": -0.9
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.16
      },
      {
        "name": "ETC",
        "change_pct": -0.56
      },
      {
        "name": "词元概念/Token",
        "change_pct": -0.45
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.95
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.05
      },
      {
        "name": "英伟达概念",
        "change_pct": 0.31
      },
      {
        "name": "区块链",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "600821",
    "name": "金开新能",
    "hot_rank": 23,
    "hot_rank_chg": 34,
    "stock_cnt": 5869,
    "price": "7.03",
    "change": "-1.68",
    "market_id": "17",
    "circulate_market_value": "13830294000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "天津国企改革",
        "change_pct": 0.21
      },
      {
        "name": "京津冀",
        "change_pct": -0.77
      },
      {
        "name": "光伏",
        "change_pct": -0.48
      },
      {
        "name": "风电",
        "change_pct": -0.83
      },
      {
        "name": "储能",
        "change_pct": -0.43
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "算电协同",
        "change_pct": -1.42
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 24,
    "hot_rank_chg": 19,
    "stock_cnt": 5869,
    "price": "2.26",
    "change": "-0.44",
    "market_id": "17",
    "circulate_market_value": "7304661200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.49
      },
      {
        "name": "中药",
        "change_pct": -0.24
      },
      {
        "name": "创新药",
        "change_pct": -0.72
      },
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "水泥",
        "change_pct": -0.65
      },
      {
        "name": "保健品",
        "change_pct": -0.69
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "疫苗",
        "change_pct": -0.68
      },
      {
        "name": "振兴东北",
        "change_pct": -0.63
      },
      {
        "name": "食品",
        "change_pct": -0.73
      },
      {
        "name": "物业管理",
        "change_pct": -1.39
      },
      {
        "name": "低价股",
        "change_pct": -1.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 30,
    "hot_rank_chg": 9,
    "stock_cnt": 5869,
    "price": "6.18",
    "change": "-1.28",
    "market_id": "33",
    "circulate_market_value": "4422062000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -2.61
      },
      {
        "name": "旅游",
        "change_pct": -0.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.91
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 32,
    "hot_rank_chg": 0,
    "stock_cnt": 5869,
    "price": "11.89",
    "change": "2.32",
    "market_id": "33",
    "circulate_market_value": "3382486300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.9
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "教育",
        "change_pct": -1.19
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.12
      },
      {
        "name": "职业教育",
        "change_pct": -1.27
      },
      {
        "name": "在线教育",
        "change_pct": -0.96
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.61
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "智谱AI",
        "change_pct": -0.61
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 33,
    "hot_rank_chg": 18,
    "stock_cnt": 5869,
    "price": "6.54",
    "change": "-3.82",
    "market_id": "17",
    "circulate_market_value": "48888699000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.81
      },
      {
        "name": "央企改革",
        "change_pct": -0.41
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.46
      },
      {
        "name": "火电",
        "change_pct": -2.49
      },
      {
        "name": "振兴东北",
        "change_pct": -0.63
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "600578",
    "name": "京能电力",
    "hot_rank": 38,
    "hot_rank_chg": 7,
    "stock_cnt": 5869,
    "price": "6.10",
    "change": "-7.44",
    "market_id": "17",
    "circulate_market_value": "40837188000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.46
      },
      {
        "name": "京津冀",
        "change_pct": -0.77
      },
      {
        "name": "火电",
        "change_pct": -2.49
      },
      {
        "name": "风电",
        "change_pct": -0.83
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 39,
    "hot_rank_chg": 15,
    "stock_cnt": 5869,
    "price": "12.71",
    "change": "-7.36",
    "market_id": "17",
    "circulate_market_value": "7560270100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": -0.63
      },
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "装修装饰",
        "change_pct": -0.61
      },
      {
        "name": "数字经济",
        "change_pct": -0.9
      },
      {
        "name": "百度概念股",
        "change_pct": -1.51
      },
      {
        "name": "全息概念",
        "change_pct": 0.05
      },
      {
        "name": "NFT",
        "change_pct": -1.29
      },
      {
        "name": "元宇宙",
        "change_pct": -0.79
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.33
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.41
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.95
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.55
      },
      {
        "name": "多模态",
        "change_pct": -1.42
      },
      {
        "name": "AI视频",
        "change_pct": -1.36
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 41,
    "hot_rank_chg": -1,
    "stock_cnt": 5869,
    "price": "5.79",
    "change": "-1.20",
    "market_id": "33",
    "circulate_market_value": "204775710000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.06
      },
      {
        "name": "手机产业链",
        "change_pct": 0.96
      },
      {
        "name": "超高清视频",
        "change_pct": -0.3
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.83
      },
      {
        "name": "电竞",
        "change_pct": -0.74
      },
      {
        "name": "半导体",
        "change_pct": 0.84
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.92
      },
      {
        "name": "VR&AR",
        "change_pct": 0.14
      },
      {
        "name": "OLED",
        "change_pct": 0.81
      },
      {
        "name": "京津冀",
        "change_pct": -0.77
      },
      {
        "name": "物联网",
        "change_pct": -0.02
      },
      {
        "name": "指纹识别",
        "change_pct": 1.03
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.05
      },
      {
        "name": "白马股",
        "change_pct": -0.42
      },
      {
        "name": "智能制造",
        "change_pct": -0.06
      },
      {
        "name": "小米概念股",
        "change_pct": 0.6
      },
      {
        "name": "国产芯片",
        "change_pct": 0.43
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.03
      },
      {
        "name": "全息概念",
        "change_pct": 0.05
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.52
      },
      {
        "name": "MicroLED",
        "change_pct": 0.39
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.28
      },
      {
        "name": "智能手表",
        "change_pct": -0.02
      },
      {
        "name": "MiniLED",
        "change_pct": 0.35
      },
      {
        "name": "传感器",
        "change_pct": 0.55
      },
      {
        "name": "大硅片",
        "change_pct": 0.05
      },
      {
        "name": "AI PC",
        "change_pct": 0.6
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "回购",
        "change_pct": -0.35
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.97
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.55
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 42,
    "hot_rank_chg": 21,
    "stock_cnt": 5869,
    "price": "11.24",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "6766810700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": -0.49
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.12
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.02
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "国资入股",
        "change_pct": -0.38
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 47,
    "hot_rank_chg": 9,
    "stock_cnt": 5869,
    "price": "4.34",
    "change": "-6.06",
    "market_id": "33",
    "circulate_market_value": "2827913300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.81
      },
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "一带一路",
        "change_pct": -0.21
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.55
      },
      {
        "name": "智慧城市",
        "change_pct": -0.63
      },
      {
        "name": "食品",
        "change_pct": -0.73
      },
      {
        "name": "基因编辑",
        "change_pct": -1.34
      },
      {
        "name": "社区团购",
        "change_pct": -1.61
      },
      {
        "name": "大农业",
        "change_pct": -0.82
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.6
      },
      {
        "name": "广西概念",
        "change_pct": -1.28
      },
      {
        "name": "饮料",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 48,
    "hot_rank_chg": 12,
    "stock_cnt": 5869,
    "price": "11.67",
    "change": "-6.79",
    "market_id": "17",
    "circulate_market_value": "7939330600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.95
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "雄安新区",
        "change_pct": -0.95
      },
      {
        "name": "煤化工",
        "change_pct": -0.89
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 51,
    "hot_rank_chg": -10,
    "stock_cnt": 5869,
    "price": "8.12",
    "change": "-2.75",
    "market_id": "33",
    "circulate_market_value": "13200633500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "电竞",
        "change_pct": -0.74
      },
      {
        "name": "手游",
        "change_pct": -1.05
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "游戏",
        "change_pct": -1.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.9
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.02
      },
      {
        "name": "快手概念股",
        "change_pct": -2.24
      },
      {
        "name": "元宇宙",
        "change_pct": -0.79
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.33
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "web3.0",
        "change_pct": -1.02
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.16
      },
      {
        "name": "数据要素",
        "change_pct": -0.98
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.36
      },
      {
        "name": "AI营销",
        "change_pct": -1.95
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.95
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.55
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.05
      },
      {
        "name": "人形机器人",
        "change_pct": -0.27
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.61
      },
      {
        "name": "多模态",
        "change_pct": -1.42
      },
      {
        "name": "AI视频",
        "change_pct": -1.36
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.91
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 52,
    "hot_rank_chg": -27,
    "stock_cnt": 5869,
    "price": "12.02",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "21505442000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.25
      },
      {
        "name": "纯碱",
        "change_pct": -0.37
      },
      {
        "name": "食品",
        "change_pct": -0.73
      },
      {
        "name": "土壤修复",
        "change_pct": -0.5
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.76
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 64,
    "hot_rank_chg": -18,
    "stock_cnt": 5869,
    "price": "5.91",
    "change": "-5.74",
    "market_id": "33",
    "circulate_market_value": "12998384100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 0.02
      },
      {
        "name": "轮胎",
        "change_pct": -0.48
      },
      {
        "name": "冷链",
        "change_pct": -0.38
      },
      {
        "name": "机器人",
        "change_pct": -0.21
      },
      {
        "name": "智能制造",
        "change_pct": -0.06
      },
      {
        "name": "工业母机",
        "change_pct": 0.03
      },
      {
        "name": "减速器",
        "change_pct": -0.55
      },
      {
        "name": "头盔",
        "change_pct": -0.33
      },
      {
        "name": "人形机器人",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 66,
    "hot_rank_chg": -11,
    "stock_cnt": 5869,
    "price": "7.16",
    "change": "-9.94",
    "market_id": "33",
    "circulate_market_value": "12359338700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.99
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.49
      },
      {
        "name": "大数据",
        "change_pct": -1.0
      },
      {
        "name": "百度概念股",
        "change_pct": -1.51
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.02
      },
      {
        "name": "传媒",
        "change_pct": -1.74
      },
      {
        "name": "快手概念股",
        "change_pct": -2.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.36
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "横琴新区",
        "change_pct": -1.64
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.41
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.6
      },
      {
        "name": "AI营销",
        "change_pct": -1.95
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.61
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      },
      {
        "name": "区块链",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002219",
    "name": "新里程",
    "hot_rank": 67,
    "hot_rank_chg": 37,
    "stock_cnt": 5869,
    "price": "2.44",
    "change": "-2.40",
    "market_id": "33",
    "circulate_market_value": "7983366300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.24
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.92
      },
      {
        "name": "养老产业",
        "change_pct": -0.5
      },
      {
        "name": "民营医院",
        "change_pct": -0.73
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "低价股",
        "change_pct": -1.15
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.25
      },
      {
        "name": "AI医疗",
        "change_pct": -0.9
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 70,
    "hot_rank_chg": -21,
    "stock_cnt": 5869,
    "price": "10.05",
    "change": "-6.34",
    "market_id": "33",
    "circulate_market_value": "4670968700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.21
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.49
      },
      {
        "name": "水利",
        "change_pct": -0.62
      },
      {
        "name": "大数据",
        "change_pct": -1.0
      },
      {
        "name": "海绵城市",
        "change_pct": -1.02
      },
      {
        "name": "风电",
        "change_pct": -0.83
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.18
      },
      {
        "name": "数字经济",
        "change_pct": -0.9
      },
      {
        "name": "大基建",
        "change_pct": -0.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.89
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "旧改",
        "change_pct": -0.51
      },
      {
        "name": "西部大开发",
        "change_pct": -0.9
      },
      {
        "name": "低空经济",
        "change_pct": -0.05
      },
      {
        "name": "房屋检测",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "000936",
    "name": "华西股份",
    "hot_rank": 74,
    "hot_rank_chg": 32,
    "stock_cnt": 5869,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "6174634700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "间接参股光芯片",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.84
      },
      {
        "name": "共享经济",
        "change_pct": -0.57
      },
      {
        "name": "人工智能",
        "change_pct": -0.59
      },
      {
        "name": "光通信",
        "change_pct": 1.47
      },
      {
        "name": "涤纶",
        "change_pct": 1.04
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": 0.43
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.97
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 77,
    "hot_rank_chg": 2,
    "stock_cnt": 5869,
    "price": "7.19",
    "change": "-7.82",
    "market_id": "17",
    "circulate_market_value": "14603784000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.41
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.46
      },
      {
        "name": "火电",
        "change_pct": -2.49
      },
      {
        "name": "风电",
        "change_pct": -0.83
      },
      {
        "name": "储能",
        "change_pct": -0.43
      },
      {
        "name": "碳中和",
        "change_pct": -1.04
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 79,
    "hot_rank_chg": -32,
    "stock_cnt": 5869,
    "price": "10.87",
    "change": "-3.81",
    "market_id": "33",
    "circulate_market_value": "9639045700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 1.91
      },
      {
        "name": "手机产业链",
        "change_pct": 0.96
      },
      {
        "name": "超高清视频",
        "change_pct": -0.3
      },
      {
        "name": "锂电池",
        "change_pct": 0.58
      },
      {
        "name": "强势人气股",
        "change_pct": -0.47
      },
      {
        "name": "OLED",
        "change_pct": 0.81
      },
      {
        "name": "包装印刷",
        "change_pct": -0.38
      },
      {
        "name": "光伏",
        "change_pct": -0.48
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.07
      },
      {
        "name": "小米概念股",
        "change_pct": 0.6
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.03
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.21
      },
      {
        "name": "华为产业链",
        "change_pct": -0.03
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 90,
    "hot_rank_chg": 18,
    "stock_cnt": 5869,
    "price": "11.83",
    "change": "-8.51",
    "market_id": "17",
    "circulate_market_value": "8763399000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.44
      },
      {
        "name": "光通信",
        "change_pct": 1.47
      },
      {
        "name": "京津冀",
        "change_pct": -0.77
      },
      {
        "name": "土地流转",
        "change_pct": -1.3
      },
      {
        "name": "北京城市规划",
        "change_pct": -2.06
      },
      {
        "name": "物业管理",
        "change_pct": -1.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 92,
    "hot_rank_chg": 15,
    "stock_cnt": 5869,
    "price": "4.54",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "3473738900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.24
      },
      {
        "name": "股权转让",
        "change_pct": -0.34
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.55
      },
      {
        "name": "医药商业",
        "change_pct": 0.37
      },
      {
        "name": "保健品",
        "change_pct": -0.69
      },
      {
        "name": "民营医院",
        "change_pct": -0.73
      },
      {
        "name": "医药",
        "change_pct": -0.48
      },
      {
        "name": "食品",
        "change_pct": -0.73
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.34
      },
      {
        "name": "口腔",
        "change_pct": -0.67
      },
      {
        "name": "医美",
        "change_pct": -0.13
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "002575",
    "name": "群兴玩具",
    "hot_rank": 93,
    "hot_rank_chg": 38,
    "stock_cnt": 5869,
    "price": "5.56",
    "change": "-8.55",
    "market_id": "33",
    "circulate_market_value": "3248849800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "腾讯概念股",
        "change_pct": -1.02
      },
      {
        "name": "物业管理",
        "change_pct": -1.39
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.66
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 98,
    "hot_rank_chg": -27,
    "stock_cnt": 5869,
    "price": "9.62",
    "change": "-5.96",
    "market_id": "33",
    "circulate_market_value": "20028858000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -2.61
      },
      {
        "name": "足球",
        "change_pct": -0.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.12
      },
      {
        "name": "拼多多概念股",
        "change_pct": -0.81
      },
      {
        "name": "网红/MCN",
        "change_pct": -1.41
      },
      {
        "name": "大消费",
        "change_pct": -1.15
      },
      {
        "name": "盲盒",
        "change_pct": -0.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.61
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.91
      },
      {
        "name": "首发经济",
        "change_pct": -1.13
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.96
      },
      {
        "name": "服务消费",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "000692",
    "name": "惠天热电",
    "hot_rank": 99,
    "hot_rank_chg": 29,
    "stock_cnt": 5869,
    "price": "5.24",
    "change": "7.38",
    "market_id": "33",
    "circulate_market_value": "2792044800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "振兴东北",
        "change_pct": -0.63
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600667", "name": "太极实业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "23.05", "change": "-3.07", "market_id": "17", "circulate_market_value": "48210047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5869, "price": "17.87", "change": "-4.59", "market_id": "17", "circulate_market_value": "26317271000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5869, "price": "6.57", "change": "-5.06", "market_id": "17", "circulate_market_value": "81442305000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.41}, {"name": "核电", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "电力体制改革", "change_pct": -2.46}, {"name": "水电", "change_pct": -2.9}, {"name": "火电", "change_pct": -2.49}, {"name": "光伏", "change_pct": -0.48}, {"name": "风电", "change_pct": -0.83}, {"name": "国企改革", "change_pct": -0.52}, {"name": "算电协同", "change_pct": -1.42}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "39.52", "change": "-0.20", "market_id": "33", "circulate_market_value": "113030072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5869, "price": "54.96", "change": "3.93", "market_id": "17", "circulate_market_value": "247487020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "62.26", "change": "0.39", "market_id": "33", "circulate_market_value": "72035614000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 7, "hot_rank_chg": 4, "stock_cnt": 5869, "price": "38.70", "change": "-0.69", "market_id": "33", "circulate_market_value": "41748296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "13.70", "change": "-5.52", "market_id": "17", "circulate_market_value": "5268302600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "8.67", "change": "-2.15", "market_id": "17", "circulate_market_value": "21835481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "工业大麻", "change_pct": -0.9}, {"name": "中药", "change_pct": -0.24}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "保健品", "change_pct": -0.69}, {"name": "民营医院", "change_pct": -0.73}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.48}, {"name": "流感", "change_pct": -0.45}, {"name": "振兴东北", "change_pct": -0.63}, {"name": "食品", "change_pct": -0.73}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "32.16", "change": "-3.80", "market_id": "17", "circulate_market_value": "12896160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "5.26", "change": "-5.40", "market_id": "33", "circulate_market_value": "30796240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.37}, {"name": "人工智能", "change_pct": -0.59}, {"name": "水利", "change_pct": -0.62}, {"name": "直播/短视频", "change_pct": -1.3}, {"name": "大数据", "change_pct": -1.0}, {"name": "园林", "change_pct": -1.5}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.6}, {"name": "数字经济", "change_pct": -0.9}, {"name": "腾讯概念股", "change_pct": -1.02}, {"name": "理想汽车概念股", "change_pct": -0.52}, {"name": "第三代半导体", "change_pct": 0.48}, {"name": "快手概念股", "change_pct": -2.24}, {"name": "IGBT", "change_pct": -0.29}, {"name": "虚拟数字人", "change_pct": -1.33}, {"name": "AIGC概念", "change_pct": -1.16}, {"name": "字节跳动概念股", "change_pct": -1.36}, {"name": "氮化镓", "change_pct": 0.53}, {"name": "AI营销", "change_pct": -1.95}, {"name": "多模态", "change_pct": -1.42}, {"name": "液冷服务器", "change_pct": 1.07}, {"name": "小红书概念股", "change_pct": -1.96}, {"name": "区块链", "change_pct": -1.12}]}, {"code": "603629", "name": "利通电子", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "131.00", "change": "4.80", "market_id": "17", "circulate_market_value": "47254765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5869, "price": "5.29", "change": "9.98", "market_id": "33", "circulate_market_value": "13988047000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.47}, {"name": "装修装饰", "change_pct": -0.61}, {"name": "装配式建筑", "change_pct": -0.52}, {"name": "航天", "change_pct": 0.17}, {"name": "旧改", "change_pct": -0.51}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 14, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "412.12", "change": "1.88", "market_id": "17", "circulate_market_value": "275498900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5869, "price": "77.71", "change": "-2.20", "market_id": "33", "circulate_market_value": "113987499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 16, "hot_rank_chg": 15, "stock_cnt": 5869, "price": "4.60", "change": "8.23", "market_id": "33", "circulate_market_value": "9660707700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.24}, {"name": "维生素", "change_pct": -0.03}, {"name": "基因测序", "change_pct": -0.21}, {"name": "民营医院", "change_pct": -0.73}, {"name": "医药", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.48}, {"name": "PD-1抑制剂", "change_pct": -0.39}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "32.28", "change": "-0.31", "market_id": "33", "circulate_market_value": "24449360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5869, "price": "14.25", "change": "-6.68", "market_id": "33", "circulate_market_value": "13299832900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5869, "price": "77.25", "change": "-0.73", "market_id": "17", "circulate_market_value": "138232280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "158.95", "change": "-2.08", "market_id": "17", "circulate_market_value": "393127900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5869, "price": "60.13", "change": "5.03", "market_id": "17", "circulate_market_value": "147537750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5869, "price": "12.61", "change": "-7.62", "market_id": "33", "circulate_market_value": "6218699200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.49}, {"name": "彩票", "change_pct": -0.14}, {"name": "人工智能", "change_pct": -0.59}, {"name": "包装印刷", "change_pct": -0.38}, {"name": "数字经济", "change_pct": -0.9}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "AIGC概念", "change_pct": -1.16}, {"name": "ETC", "change_pct": -0.56}, {"name": "词元概念/Token", "change_pct": -0.45}, {"name": "ChatGPT", "change_pct": -0.95}, {"name": "人工智能大模型", "change_pct": -1.05}, {"name": "英伟达概念", "change_pct": 0.31}, {"name": "区块链", "change_pct": -1.12}]}, {"code": "600821", "name": "金开新能", "hot_rank": 23, "hot_rank_chg": 34, "stock_cnt": 5869, "price": "7.03", "change": "-1.68", "market_id": "17", "circulate_market_value": "13830294000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.34}, {"name": "天津国企改革", "change_pct": 0.21}, {"name": "京津冀", "change_pct": -0.77}, {"name": "光伏", "change_pct": -0.48}, {"name": "风电", "change_pct": -0.83}, {"name": "储能", "change_pct": -0.43}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "国企改革", "change_pct": -0.52}, {"name": "算电协同", "change_pct": -1.42}]}, {"code": "600881", "name": "亚泰集团", "hot_rank": 24, "hot_rank_chg": 19, "stock_cnt": 5869, "price": "2.26", "change": "-0.44", "market_id": "17", "circulate_market_value": "7304661200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.49}, {"name": "中药", "change_pct": -0.24}, {"name": "创新药", "change_pct": -0.72}, {"name": "股权转让", "change_pct": -0.34}, {"name": "水泥", "change_pct": -0.65}, {"name": "保健品", "change_pct": -0.69}, {"name": "医药", "change_pct": -0.48}, {"name": "疫苗", "change_pct": -0.68}, {"name": "振兴东北", "change_pct": -0.63}, {"name": "食品", "change_pct": -0.73}, {"name": "物业管理", "change_pct": -1.39}, {"name": "低价股", "change_pct": -1.15}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "603118", "name": "共进股份", "hot_rank": 25, "hot_rank_chg": 25, "stock_cnt": 5869, "price": "17.56", "change": "10.03", "market_id": "17", "circulate_market_value": "13824574000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "002792", "name": "通宇通讯", "hot_rank": 26, "hot_rank_chg": 2, "stock_cnt": 5869, "price": "36.05", "change": "-6.68", "market_id": "33", "circulate_market_value": "12178572600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 27, "hot_rank_chg": 65, "stock_cnt": 5869, "price": "67.36", "change": "20.01", "market_id": "33", "circulate_market_value": "13780184000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中际旭创入股"}, {"code": "002185", "name": "华天科技", "hot_rank": 28, "hot_rank_chg": 7, "stock_cnt": 5869, "price": "17.76", "change": "-0.67", "market_id": "33", "circulate_market_value": "59010295000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 29, "hot_rank_chg": -2, "stock_cnt": 5869, "price": "22.85", "change": "3.39", "market_id": "33", "circulate_market_value": "10335941600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 30, "hot_rank_chg": 9, "stock_cnt": 5869, "price": "6.18", "change": "-1.28", "market_id": "33", "circulate_market_value": "4422062000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -2.61}, {"name": "旅游", "change_pct": -0.55}, {"name": "IP经济/谷子经济", "change_pct": -0.91}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5869, "price": "100.65", "change": "0.44", "market_id": "33", "circulate_market_value": "65728036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 32, "hot_rank_chg": 0, "stock_cnt": 5869, "price": "11.89", "change": "2.32", "market_id": "33", "circulate_market_value": "3382486300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.9}, {"name": "ST摘帽", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "教育", "change_pct": -1.19}, {"name": "阿里巴巴概念股", "change_pct": -1.12}, {"name": "职业教育", "change_pct": -1.27}, {"name": "在线教育", "change_pct": -0.96}, {"name": "华为鸿蒙", "change_pct": -0.61}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "智谱AI", "change_pct": -0.61}]}, {"code": "600726", "name": "华电能源", "hot_rank": 33, "hot_rank_chg": 18, "stock_cnt": 5869, "price": "6.54", "change": "-3.82", "market_id": "17", "circulate_market_value": "48888699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.81}, {"name": "央企改革", "change_pct": -0.41}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "电力体制改革", "change_pct": -2.46}, {"name": "火电", "change_pct": -2.49}, {"name": "振兴东北", "change_pct": -0.63}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5869, "price": "937.22", "change": "1.76", "market_id": "33", "circulate_market_value": "1040257760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 35, "hot_rank_chg": -16, "stock_cnt": 5869, "price": "19.06", "change": "0.63", "market_id": "33", "circulate_market_value": "22423497000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 36, "hot_rank_chg": 8, "stock_cnt": 5869, "price": "404.88", "change": "2.11", "market_id": "33", "circulate_market_value": "66816963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 37, "hot_rank_chg": 15, "stock_cnt": 5869, "price": "88.76", "change": "-0.97", "market_id": "17", "circulate_market_value": "129860704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600578", "name": "京能电力", "hot_rank": 38, "hot_rank_chg": 7, "stock_cnt": 5869, "price": "6.10", "change": "-7.44", "market_id": "17", "circulate_market_value": "40837188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.95}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "电力体制改革", "change_pct": -2.46}, {"name": "京津冀", "change_pct": -0.77}, {"name": "火电", "change_pct": -2.49}, {"name": "风电", "change_pct": -0.83}]}, {"code": "603466", "name": "风语筑", "hot_rank": 39, "hot_rank_chg": 15, "stock_cnt": 5869, "price": "12.71", "change": "-7.36", "market_id": "17", "circulate_market_value": "7560270100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": -0.63}, {"name": "VR&AR", "change_pct": 0.14}, {"name": "装修装饰", "change_pct": -0.61}, {"name": "数字经济", "change_pct": -0.9}, {"name": "百度概念股", "change_pct": -1.51}, {"name": "全息概念", "change_pct": 0.05}, {"name": "NFT", "change_pct": -1.29}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -1.33}, {"name": "网红/MCN", "change_pct": -1.41}, {"name": "ChatGPT", "change_pct": -0.95}, {"name": "智能眼镜/MR头显", "change_pct": 0.55}, {"name": "多模态", "change_pct": -1.42}, {"name": "AI视频", "change_pct": -1.36}]}, {"code": "600206", "name": "有研新材", "hot_rank": 40, "hot_rank_chg": -3, "stock_cnt": 5869, "price": "49.97", "change": "-0.48", "market_id": "17", "circulate_market_value": "42302270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5869, "price": "5.79", "change": "-1.20", "market_id": "33", "circulate_market_value": "204775710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.06}, {"name": "手机产业链", "change_pct": 0.96}, {"name": "超高清视频", "change_pct": -0.3}, {"name": "苹果产业链", "change_pct": 0.83}, {"name": "电竞", "change_pct": -0.74}, {"name": "半导体", "change_pct": 0.84}, {"name": "人工智能", "change_pct": -0.59}, {"name": "互联网医疗", "change_pct": -0.92}, {"name": "VR&AR", "change_pct": 0.14}, {"name": "OLED", "change_pct": 0.81}, {"name": "京津冀", "change_pct": -0.77}, {"name": "物联网", "change_pct": -0.02}, {"name": "指纹识别", "change_pct": 1.03}, {"name": "汽车零部件", "change_pct": 0.05}, {"name": "白马股", "change_pct": -0.42}, {"name": "智能制造", "change_pct": -0.06}, {"name": "小米概念股", "change_pct": 0.6}, {"name": "国产芯片", "change_pct": 0.43}, {"name": "液晶面板/LCD", "change_pct": 1.03}, {"name": "全息概念", "change_pct": 0.05}, {"name": "理想汽车概念股", "change_pct": -0.52}, {"name": "MicroLED", "change_pct": 0.39}, {"name": "钙钛矿电池", "change_pct": -0.28}, {"name": "智能手表", "change_pct": -0.02}, {"name": "MiniLED", "change_pct": 0.35}, {"name": "传感器", "change_pct": 0.55}, {"name": "大硅片", "change_pct": 0.05}, {"name": "AI PC", "change_pct": 0.6}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "回购", "change_pct": -0.35}, {"name": "光电共封装CPO", "change_pct": 1.97}, {"name": "智能眼镜/MR头显", "change_pct": 0.55}, {"name": "玻璃基板封装", "change_pct": 0.73}]}, {"code": "603887", "name": "城地香江", "hot_rank": 42, "hot_rank_chg": 21, "stock_cnt": 5869, "price": "11.24", "change": "-10.01", "market_id": "17", "circulate_market_value": "6766810700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": -0.49}, {"name": "阿里巴巴概念股", "change_pct": -1.12}, {"name": "腾讯概念股", "change_pct": -1.02}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "国资入股", "change_pct": -0.38}, {"name": "华为产业链", "change_pct": -0.03}]}, {"code": "002384", "name": "东山精密", "hot_rank": 43, "hot_rank_chg": -22, "stock_cnt": 5869, "price": "204.17", "change": "1.02", "market_id": "33", "circulate_market_value": "283045310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 44, "hot_rank_chg": 24, "stock_cnt": 5869, "price": "130.78", "change": "1.03", "market_id": "17", "circulate_market_value": "261502790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 45, "hot_rank_chg": -16, "stock_cnt": 5869, "price": "82.51", "change": "-6.96", "market_id": "33", "circulate_market_value": "2697948500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 46, "hot_rank_chg": 2, "stock_cnt": 5869, "price": "141.59", "change": "-1.19", "market_id": "33", "circulate_market_value": "157679770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 47, "hot_rank_chg": 9, "stock_cnt": 5869, "price": "4.34", "change": "-6.06", "market_id": "33", "circulate_market_value": "2827913300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "乳业（奶粉）", "change_pct": -2.81}, {"name": "股权转让", "change_pct": -0.34}, {"name": "一带一路", "change_pct": -0.21}, {"name": "优化生育（三孩）", "change_pct": -0.55}, {"name": "智慧城市", "change_pct": -0.63}, {"name": "食品", "change_pct": -0.73}, {"name": "基因编辑", "change_pct": -1.34}, {"name": "社区团购", "change_pct": -1.61}, {"name": "大农业", "change_pct": -0.82}, {"name": "5G消息/RCS", "change_pct": -0.6}, {"name": "广西概念", "change_pct": -1.28}, {"name": "饮料", "change_pct": -1.69}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 48, "hot_rank_chg": 12, "stock_cnt": 5869, "price": "11.67", "change": "-6.79", "market_id": "17", "circulate_market_value": "7939330600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.95}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "雄安新区", "change_pct": -0.95}, {"name": "煤化工", "change_pct": -0.89}]}, {"code": "000887", "name": "中鼎股份", "hot_rank": 49, "hot_rank_chg": 25, "stock_cnt": 5869, "price": "21.76", "change": "-8.15", "market_id": "33", "circulate_market_value": "28600704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 50, "hot_rank_chg": -8, "stock_cnt": 5869, "price": "43.78", "change": "4.49", "market_id": "17", "circulate_market_value": "173876080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 51, "hot_rank_chg": -10, "stock_cnt": 5869, "price": "8.12", "change": "-2.75", "market_id": "33", "circulate_market_value": "13200633500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "电竞", "change_pct": -0.74}, {"name": "手游", "change_pct": -1.05}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "人工智能", "change_pct": -0.59}, {"name": "游戏", "change_pct": -1.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.9}, {"name": "腾讯概念股", "change_pct": -1.02}, {"name": "快手概念股", "change_pct": -2.24}, {"name": "元宇宙", "change_pct": -0.79}, {"name": "虚拟数字人", "change_pct": -1.33}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "web3.0", "change_pct": -1.02}, {"name": "AIGC概念", "change_pct": -1.16}, {"name": "数据要素", "change_pct": -0.98}, {"name": "字节跳动概念股", "change_pct": -1.36}, {"name": "AI营销", "change_pct": -1.95}, {"name": "ChatGPT", "change_pct": -0.95}, {"name": "智能眼镜/MR头显", "change_pct": 0.55}, {"name": "人工智能大模型", "change_pct": -1.05}, {"name": "人形机器人", "change_pct": -0.27}, {"name": "短剧/互动影游", "change_pct": -2.61}, {"name": "多模态", "change_pct": -1.42}, {"name": "AI视频", "change_pct": -1.36}, {"name": "IP经济/谷子经济", "change_pct": -0.91}, {"name": "小红书概念股", "change_pct": -1.96}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 52, "hot_rank_chg": -27, "stock_cnt": 5869, "price": "12.02", "change": "9.97", "market_id": "17", "circulate_market_value": "21505442000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": -0.25}, {"name": "纯碱", "change_pct": -0.37}, {"name": "食品", "change_pct": -0.73}, {"name": "土壤修复", "change_pct": -0.5}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "OpenClaw概念", "change_pct": -0.76}, {"name": "DeepSeek概念股", "change_pct": -0.99}]}, {"code": "603256", "name": "宏和科技", "hot_rank": 53, "hot_rank_chg": 33, "stock_cnt": 5869, "price": "153.82", "change": "1.41", "market_id": "17", "circulate_market_value": "135319680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 54, "hot_rank_chg": -21, "stock_cnt": 5869, "price": "40.87", "change": "0.27", "market_id": "17", "circulate_market_value": "59751728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 55, "hot_rank_chg": -25, "stock_cnt": 5869, "price": "14.91", "change": "-2.23", "market_id": "33", "circulate_market_value": "51855941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 56, "hot_rank_chg": 14, "stock_cnt": 5869, "price": "403.65", "change": "1.68", "market_id": "33", "circulate_market_value": "113769516000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603758", "name": "秦安股份", "hot_rank": 57, "hot_rank_chg": 24, "stock_cnt": 5869, "price": "13.82", "change": "-9.97", "market_id": "17", "circulate_market_value": "5985663800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 58, "hot_rank_chg": -24, "stock_cnt": 5869, "price": "17.85", "change": "-2.78", "market_id": "33", "circulate_market_value": "12410445200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002484", "name": "江海股份", "hot_rank": 59, "hot_rank_chg": 29, "stock_cnt": 5869, "price": "70.13", "change": "5.29", "market_id": "33", "circulate_market_value": "57539720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 60, "hot_rank_chg": -22, "stock_cnt": 5869, "price": "29.92", "change": "-8.14", "market_id": "17", "circulate_market_value": "10080644900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 61, "hot_rank_chg": 12, "stock_cnt": 5869, "price": "57.29", "change": "3.98", "market_id": "33", "circulate_market_value": "15811976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 62, "hot_rank_chg": 3, "stock_cnt": 5869, "price": "39.75", "change": "0.51", "market_id": "33", "circulate_market_value": "62572684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5869, "price": "15.54", "change": "-5.47", "market_id": "33", "circulate_market_value": "25226465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 64, "hot_rank_chg": -18, "stock_cnt": 5869, "price": "5.91", "change": "-5.74", "market_id": "33", "circulate_market_value": "12998384100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 0.02}, {"name": "轮胎", "change_pct": -0.48}, {"name": "冷链", "change_pct": -0.38}, {"name": "机器人", "change_pct": -0.21}, {"name": "智能制造", "change_pct": -0.06}, {"name": "工业母机", "change_pct": 0.03}, {"name": "减速器", "change_pct": -0.55}, {"name": "头盔", "change_pct": -0.33}, {"name": "人形机器人", "change_pct": -0.27}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 65, "hot_rank_chg": -29, "stock_cnt": 5869, "price": "264.14", "change": "2.71", "market_id": "33", "circulate_market_value": "287486820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002400", "name": "省广集团", "hot_rank": 66, "hot_rank_chg": -11, "stock_cnt": 5869, "price": "7.16", "change": "-9.94", "market_id": "33", "circulate_market_value": "12359338700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.99}, {"name": "人工智能", "change_pct": -0.59}, {"name": "云计算数据中心", "change_pct": -0.49}, {"name": "大数据", "change_pct": -1.0}, {"name": "百度概念股", "change_pct": -1.51}, {"name": "腾讯概念股", "change_pct": -1.02}, {"name": "传媒", "change_pct": -1.74}, {"name": "快手概念股", "change_pct": -2.24}, {"name": "字节跳动概念股", "change_pct": -1.36}, {"name": "国企改革", "change_pct": -0.52}, {"name": "横琴新区", "change_pct": -1.64}, {"name": "网红/MCN", "change_pct": -1.41}, {"name": "5G消息/RCS", "change_pct": -0.6}, {"name": "AI营销", "change_pct": -1.95}, {"name": "短剧/互动影游", "change_pct": -2.61}, {"name": "小红书概念股", "change_pct": -1.96}, {"name": "区块链", "change_pct": -1.12}]}, {"code": "002219", "name": "新里程", "hot_rank": 67, "hot_rank_chg": 37, "stock_cnt": 5869, "price": "2.44", "change": "-2.40", "market_id": "33", "circulate_market_value": "7983366300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.24}, {"name": "互联网医疗", "change_pct": -0.92}, {"name": "养老产业", "change_pct": -0.5}, {"name": "民营医院", "change_pct": -0.73}, {"name": "医药", "change_pct": -0.48}, {"name": "低价股", "change_pct": -1.15}, {"name": "医疗信息化", "change_pct": -1.25}, {"name": "AI医疗", "change_pct": -0.9}]}, {"code": "605286", "name": "同力天启", "hot_rank": 68, "hot_rank_chg": 31, "stock_cnt": 5869, "price": "31.56", "change": "-7.42", "market_id": "17", "circulate_market_value": "5302080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000593", "name": "德龙汇能", "hot_rank": 69, "hot_rank_chg": 7, "stock_cnt": 5869, "price": "25.03", "change": "-9.96", "market_id": "33", "circulate_market_value": "8972833700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 70, "hot_rank_chg": -21, "stock_cnt": 5869, "price": "10.05", "change": "-6.34", "market_id": "33", "circulate_market_value": "4670968700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.21}, {"name": "云计算数据中心", "change_pct": -0.49}, {"name": "水利", "change_pct": -0.62}, {"name": "大数据", "change_pct": -1.0}, {"name": "海绵城市", "change_pct": -1.02}, {"name": "风电", "change_pct": -0.83}, {"name": "乡村振兴", "change_pct": -1.18}, {"name": "数字经济", "change_pct": -0.9}, {"name": "大基建", "change_pct": -0.48}, {"name": "东数西算/算力", "change_pct": -0.66}, {"name": "新型城镇化", "change_pct": -0.89}, {"name": "国企改革", "change_pct": -0.52}, {"name": "旧改", "change_pct": -0.51}, {"name": "西部大开发", "change_pct": -0.9}, {"name": "低空经济", "change_pct": -0.05}, {"name": "房屋检测", "change_pct": -0.67}]}, {"code": "300534", "name": "陇神戎发", "hot_rank": 71, "hot_rank_chg": -9, "stock_cnt": 5869, "price": "18.27", "change": "-3.44", "market_id": "33", "circulate_market_value": "5518480700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 72, "hot_rank_chg": -19, "stock_cnt": 5869, "price": "58.50", "change": "-0.27", "market_id": "33", "circulate_market_value": "21557442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603890", "name": "春秋电子", "hot_rank": 73, "hot_rank_chg": 24, "stock_cnt": 5869, "price": "21.22", "change": "3.77", "market_id": "17", "circulate_market_value": "9481767900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000936", "name": "华西股份", "hot_rank": 74, "hot_rank_chg": 32, "stock_cnt": 5869, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "6174634700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "间接参股光芯片", "xgb_concepts": [{"name": "半导体", "change_pct": 0.84}, {"name": "共享经济", "change_pct": -0.57}, {"name": "人工智能", "change_pct": -0.59}, {"name": "光通信", "change_pct": 1.47}, {"name": "涤纶", "change_pct": 1.04}, {"name": "江苏国企改革", "change_pct": -0.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": 0.43}, {"name": "国企改革", "change_pct": -0.52}, {"name": "光电共封装CPO", "change_pct": 1.97}]}, {"code": "300404", "name": "博济医药", "hot_rank": 75, "hot_rank_chg": 28, "stock_cnt": 5869, "price": "17.34", "change": "20.00", "market_id": "33", "circulate_market_value": "4950840700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中药创新药"}, {"code": "601138", "name": "工业富联", "hot_rank": 76, "hot_rank_chg": -15, "stock_cnt": 5869, "price": "65.78", "change": "0.84", "market_id": "17", "circulate_market_value": "1305344390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 77, "hot_rank_chg": 2, "stock_cnt": 5869, "price": "7.19", "change": "-7.82", "market_id": "17", "circulate_market_value": "14603784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.41}, {"name": "电力体制改革", "change_pct": -2.46}, {"name": "火电", "change_pct": -2.49}, {"name": "风电", "change_pct": -0.83}, {"name": "储能", "change_pct": -0.43}, {"name": "碳中和", "change_pct": -1.04}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "600522", "name": "中天科技", "hot_rank": 78, "hot_rank_chg": -20, "stock_cnt": 5869, "price": "34.44", "change": "4.68", "market_id": "17", "circulate_market_value": "117541986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 79, "hot_rank_chg": -32, "stock_cnt": 5869, "price": "10.87", "change": "-3.81", "market_id": "33", "circulate_market_value": "9639045700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 1.91}, {"name": "手机产业链", "change_pct": 0.96}, {"name": "超高清视频", "change_pct": -0.3}, {"name": "锂电池", "change_pct": 0.58}, {"name": "强势人气股", "change_pct": -0.47}, {"name": "OLED", "change_pct": 0.81}, {"name": "包装印刷", "change_pct": -0.38}, {"name": "光伏", "change_pct": -0.48}, {"name": "新能源汽车", "change_pct": 0.07}, {"name": "小米概念股", "change_pct": 0.6}, {"name": "液晶面板/LCD", "change_pct": 1.03}, {"name": "可降解塑料", "change_pct": 0.21}, {"name": "华为产业链", "change_pct": -0.03}, {"name": "PET复合铜箔", "change_pct": 0.82}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 80, "hot_rank_chg": -16, "stock_cnt": 5869, "price": "32.41", "change": "0.62", "market_id": "17", "circulate_market_value": "667704120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603989", "name": "艾华集团", "hot_rank": 81, "hot_rank_chg": 33, "stock_cnt": 5869, "price": "32.99", "change": "10.00", "market_id": "17", "circulate_market_value": "13155747600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLPC"}, {"code": "603191", "name": "望变电气", "hot_rank": 82, "hot_rank_chg": 33, "stock_cnt": 5869, "price": "16.24", "change": "-4.13", "market_id": "17", "circulate_market_value": "5358625700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 83, "hot_rank_chg": -24, "stock_cnt": 5869, "price": "67.41", "change": "1.06", "market_id": "33", "circulate_market_value": "97977200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 85, "hot_rank_chg": -8, "stock_cnt": 5869, "price": "62.16", "change": "-0.10", "market_id": "33", "circulate_market_value": "94324830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 86, "hot_rank_chg": -8, "stock_cnt": 5869, "price": "34.88", "change": "-0.57", "market_id": "33", "circulate_market_value": "140483430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 87, "hot_rank_chg": -20, "stock_cnt": 5869, "price": "19.77", "change": "2.12", "market_id": "17", "circulate_market_value": "21238970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 88, "hot_rank_chg": 25, "stock_cnt": 5869, "price": "47.29", "change": "20.00", "market_id": "33", "circulate_market_value": "7163063900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购岚创科技"}, {"code": "603341", "name": "龙旗科技", "hot_rank": 89, "hot_rank_chg": 84, "stock_cnt": 5869, "price": "38.79", "change": "-5.16", "market_id": "17", "circulate_market_value": "10372536400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 90, "hot_rank_chg": 18, "stock_cnt": 5869, "price": "11.83", "change": "-8.51", "market_id": "17", "circulate_market_value": "8763399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.44}, {"name": "光通信", "change_pct": 1.47}, {"name": "京津冀", "change_pct": -0.77}, {"name": "土地流转", "change_pct": -1.3}, {"name": "北京城市规划", "change_pct": -2.06}, {"name": "物业管理", "change_pct": -1.39}, {"name": "国企改革", "change_pct": -0.52}]}, {"code": "600183", "name": "生益科技", "hot_rank": 91, "hot_rank_chg": -25, "stock_cnt": 5869, "price": "142.74", "change": "0.71", "market_id": "17", "circulate_market_value": "344253030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 92, "hot_rank_chg": 15, "stock_cnt": 5869, "price": "4.54", "change": "9.93", "market_id": "33", "circulate_market_value": "3473738900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -0.24}, {"name": "股权转让", "change_pct": -0.34}, {"name": "优化生育（三孩）", "change_pct": -0.55}, {"name": "医药商业", "change_pct": 0.37}, {"name": "保健品", "change_pct": -0.69}, {"name": "民营医院", "change_pct": -0.73}, {"name": "医药", "change_pct": -0.48}, {"name": "食品", "change_pct": -0.73}, {"name": "辅助生殖", "change_pct": 0.34}, {"name": "口腔", "change_pct": -0.67}, {"name": "医美", "change_pct": -0.13}, {"name": "新冠病毒防治", "change_pct": -0.49}]}, {"code": "002575", "name": "群兴玩具", "hot_rank": 93, "hot_rank_chg": 38, "stock_cnt": 5869, "price": "5.56", "change": "-8.55", "market_id": "33", "circulate_market_value": "3248849800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "腾讯概念股", "change_pct": -1.02}, {"name": "物业管理", "change_pct": -1.39}, {"name": "东数西算/算力", "change_pct": -0.66}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5869, "price": "181.97", "change": "7.67", "market_id": "17", "circulate_market_value": "50148816000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 95, "hot_rank_chg": -20, "stock_cnt": 5869, "price": "70.65", "change": "-0.01", "market_id": "33", "circulate_market_value": "60269606000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 96, "hot_rank_chg": -27, "stock_cnt": 5869, "price": "96.10", "change": "-1.13", "market_id": "17", "circulate_market_value": "94361889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 97, "hot_rank_chg": -13, "stock_cnt": 5869, "price": "14.71", "change": "-2.71", "market_id": "33", "circulate_market_value": "47448427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 98, "hot_rank_chg": -27, "stock_cnt": 5869, "price": "9.62", "change": "-5.96", "market_id": "33", "circulate_market_value": "20028858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -2.61}, {"name": "足球", "change_pct": -0.36}, {"name": "阿里巴巴概念股", "change_pct": -1.12}, {"name": "拼多多概念股", "change_pct": -0.81}, {"name": "网红/MCN", "change_pct": -1.41}, {"name": "大消费", "change_pct": -1.15}, {"name": "盲盒", "change_pct": -0.28}, {"name": "短剧/互动影游", "change_pct": -2.61}, {"name": "IP经济/谷子经济", "change_pct": -0.91}, {"name": "首发经济", "change_pct": -1.13}, {"name": "小红书概念股", "change_pct": -1.96}, {"name": "服务消费", "change_pct": -1.16}]}, {"code": "000692", "name": "惠天热电", "hot_rank": 99, "hot_rank_chg": 29, "stock_cnt": 5869, "price": "5.24", "change": "7.38", "market_id": "33", "circulate_market_value": "2792044800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "振兴东北", "change_pct": -0.63}]}, {"code": "600272", "name": "开开实业", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5869, "price": "17.60", "change": "10.00", "market_id": "17", "circulate_market_value": "2816000000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "SPD"}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};