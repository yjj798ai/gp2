const UPDATE_TIME = "2026-08-14 16:49";
const THS_HOT = [
  {
    "name": "共封装光学(CPO)",
    "rise": 2.95,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续270天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": -0.27,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 0.69,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续134天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": 2.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续223天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": 2.45,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "PCB概念",
    "rise": 2.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续93天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": -0.31,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": 1.61,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "液冷服务器",
    "rise": 1.65,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.78,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "人形机器人",
    "rise": 0.6,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续434天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "商业航天",
    "rise": 0.8,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续199天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "稀土永磁",
    "rise": 2.07,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "CRO概念",
    "rise": 0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "机器人概念",
    "rise": 0.48,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.79,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "芯片概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": 2.12,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光刻机",
    "rise": 2.42,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "猪肉",
    "rise": -1.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "商务部：对原产于印度的进口单模光纤继续征收反倾销税",
    "desc": "",
    "heat": 328999,
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
        "chg": 20.006658
      }
    ]
  },
  {
    "title": "2056台机器人同台竞技！第二届世界人形机器人运动会最新发布",
    "desc": "",
    "heat": 320379,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "减速器"
    ],
    "stocks": [
      {
        "name": "敏芯股份",
        "code": "688286",
        "chg": 20.008963
      }
    ]
  },
  {
    "title": "三分之二产能提前锁定、80%毛利锚定，闪迪给存储赛道画了三年增长曲线",
    "desc": "",
    "heat": 301274,
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
    "title": "国际金价再上4400美元 金饰涨价催生消费轻量化",
    "desc": "",
    "heat": 288458,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "金诚信",
        "code": "603979",
        "chg": 5.972625
      }
    ]
  },
  {
    "title": "DeepSeek Harness开发者预览版上线",
    "desc": "",
    "heat": 183261,
    "direction": "DeepSeek",
    "themes": [
      "DeepSeek概念"
    ],
    "stocks": [
      {
        "name": "网宿科技",
        "code": "300017",
        "chg": 20.01385
      }
    ]
  },
  {
    "title": "利好来了！细胞治疗，北京出台新政（附概念股）",
    "desc": "",
    "heat": 105421,
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
    "title": "算力金属身价飙升，算力金属大涨价",
    "desc": "",
    "heat": 100942,
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
  },
  {
    "title": "五粮液，出手稳价",
    "desc": "",
    "heat": 27098,
    "direction": "白酒",
    "themes": [
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "会稽山",
        "code": "601579",
        "chg": 7.048711
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "镨钕",
    "change": "+4.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+3.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "稀土磁材",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+3.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液态金属",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+3.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "5.5G概念",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+2.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太赫兹",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+2.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 4,
    "hot_rank_chg": 3,
    "stock_cnt": 5850,
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
        "change_pct": 0.26
      },
      {
        "name": "装修装饰",
        "change_pct": -0.09
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.16
      },
      {
        "name": "航天",
        "change_pct": 0.89
      },
      {
        "name": "旧改",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
    "price": "8.91",
    "change": "0.56",
    "market_id": "17",
    "circulate_market_value": "22439923000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.77
      },
      {
        "name": "工业大麻",
        "change_pct": -0.79
      },
      {
        "name": "中药",
        "change_pct": -0.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "保健品",
        "change_pct": -0.64
      },
      {
        "name": "民营医院",
        "change_pct": -0.17
      },
      {
        "name": "医药",
        "change_pct": -0.06
      },
      {
        "name": "化学原料药",
        "change_pct": -0.18
      },
      {
        "name": "流感",
        "change_pct": -0.2
      },
      {
        "name": "振兴东北",
        "change_pct": -0.81
      },
      {
        "name": "食品",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 12,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
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
        "change_pct": -0.38
      },
      {
        "name": "纯碱",
        "change_pct": -0.29
      },
      {
        "name": "食品",
        "change_pct": -0.82
      },
      {
        "name": "土壤修复",
        "change_pct": -0.25
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 1.36
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 14,
    "hot_rank_chg": 1,
    "stock_cnt": 5850,
    "price": "6.48",
    "change": "-6.36",
    "market_id": "17",
    "circulate_market_value": "80326657000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.28
      },
      {
        "name": "核电",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.77
      },
      {
        "name": "水电",
        "change_pct": -3.22
      },
      {
        "name": "火电",
        "change_pct": -2.95
      },
      {
        "name": "光伏",
        "change_pct": 0.11
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      },
      {
        "name": "算电协同",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 30,
    "hot_rank_chg": 2,
    "stock_cnt": 5850,
    "price": "4.53",
    "change": "6.59",
    "market_id": "33",
    "circulate_market_value": "9513696900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.06
      },
      {
        "name": "维生素",
        "change_pct": -0.14
      },
      {
        "name": "基因测序",
        "change_pct": 0.26
      },
      {
        "name": "民营医院",
        "change_pct": -0.17
      },
      {
        "name": "医药",
        "change_pct": -0.06
      },
      {
        "name": "化学原料药",
        "change_pct": -0.18
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 32,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "5.33",
    "change": "-4.14",
    "market_id": "33",
    "circulate_market_value": "31206076000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.06
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "水利",
        "change_pct": -0.51
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.53
      },
      {
        "name": "大数据",
        "change_pct": 0.03
      },
      {
        "name": "园林",
        "change_pct": -1.33
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.31
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.09
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.58
      },
      {
        "name": "第三代半导体",
        "change_pct": 1.45
      },
      {
        "name": "快手概念股",
        "change_pct": -0.99
      },
      {
        "name": "IGBT",
        "change_pct": 0.36
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.36
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.1
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.23
      },
      {
        "name": "氮化镓",
        "change_pct": 1.41
      },
      {
        "name": "AI营销",
        "change_pct": -0.8
      },
      {
        "name": "多模态",
        "change_pct": -0.15
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.63
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.94
      },
      {
        "name": "区块链",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 34,
    "hot_rank_chg": 4,
    "stock_cnt": 5850,
    "price": "12.26",
    "change": "5.51",
    "market_id": "33",
    "circulate_market_value": "3487744500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.16
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.73
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "教育",
        "change_pct": -0.59
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.06
      },
      {
        "name": "职业教育",
        "change_pct": -0.82
      },
      {
        "name": "在线教育",
        "change_pct": -0.14
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.33
      },
      {
        "name": "华为产业链",
        "change_pct": 0.83
      },
      {
        "name": "智谱AI",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 39,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
    "price": "5.81",
    "change": "-0.85",
    "market_id": "33",
    "circulate_market_value": "205483050000.00",
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
        "change_pct": 1.8
      },
      {
        "name": "超高清视频",
        "change_pct": 0.53
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.8
      },
      {
        "name": "电竞",
        "change_pct": 0.28
      },
      {
        "name": "半导体",
        "change_pct": 1.88
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.39
      },
      {
        "name": "VR&AR",
        "change_pct": 1.1
      },
      {
        "name": "OLED",
        "change_pct": 1.68
      },
      {
        "name": "京津冀",
        "change_pct": -0.47
      },
      {
        "name": "物联网",
        "change_pct": 0.77
      },
      {
        "name": "指纹识别",
        "change_pct": 1.77
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.32
      },
      {
        "name": "白马股",
        "change_pct": -0.34
      },
      {
        "name": "智能制造",
        "change_pct": 0.69
      },
      {
        "name": "小米概念股",
        "change_pct": 1.31
      },
      {
        "name": "国产芯片",
        "change_pct": 1.4
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.08
      },
      {
        "name": "全息概念",
        "change_pct": 0.71
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.58
      },
      {
        "name": "MicroLED",
        "change_pct": 1.55
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.74
      },
      {
        "name": "智能手表",
        "change_pct": 0.71
      },
      {
        "name": "MiniLED",
        "change_pct": 1.38
      },
      {
        "name": "传感器",
        "change_pct": 1.26
      },
      {
        "name": "大硅片",
        "change_pct": 0.65
      },
      {
        "name": "AI PC",
        "change_pct": 1.52
      },
      {
        "name": "华为产业链",
        "change_pct": 0.83
      },
      {
        "name": "回购",
        "change_pct": -0.02
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.23
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.33
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 44,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "5.92",
    "change": "-5.43",
    "market_id": "33",
    "circulate_market_value": "4236020500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -2.18
      },
      {
        "name": "旅游",
        "change_pct": -0.63
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 46,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "11.92",
    "change": "-4.56",
    "market_id": "17",
    "circulate_market_value": "7176190700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 0.73
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.06
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.09
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "国资入股",
        "change_pct": -0.1
      },
      {
        "name": "华为产业链",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 47,
    "hot_rank_chg": 2,
    "stock_cnt": 5850,
    "price": "11.64",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "8622651200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.13
      },
      {
        "name": "光通信",
        "change_pct": 3.07
      },
      {
        "name": "京津冀",
        "change_pct": -0.47
      },
      {
        "name": "土地流转",
        "change_pct": -1.15
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.75
      },
      {
        "name": "物业管理",
        "change_pct": -1.38
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 58,
    "hot_rank_chg": 2,
    "stock_cnt": 5850,
    "price": "10.68",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4620954600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "CPO",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.15
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "光伏",
        "change_pct": 0.11
      },
      {
        "name": "无线耳机",
        "change_pct": 1.35
      },
      {
        "name": "华为产业链",
        "change_pct": 0.83
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 59,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "12.56",
    "change": "-7.99",
    "market_id": "33",
    "circulate_market_value": "6194041400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.29
      },
      {
        "name": "彩票",
        "change_pct": 0.18
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "包装印刷",
        "change_pct": -0.2
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.1
      },
      {
        "name": "ETC",
        "change_pct": -0.12
      },
      {
        "name": "词元概念/Token",
        "change_pct": 2.15
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.43
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.12
      },
      {
        "name": "英伟达概念",
        "change_pct": 1.34
      },
      {
        "name": "区块链",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 60,
    "hot_rank_chg": 8,
    "stock_cnt": 5850,
    "price": "3.03",
    "change": "10.18",
    "market_id": "33",
    "circulate_market_value": "14155399000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储芯片",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.29
      },
      {
        "name": "股权转让",
        "change_pct": 0.15
      },
      {
        "name": "房地产",
        "change_pct": -1.13
      },
      {
        "name": "京津冀",
        "change_pct": -0.47
      },
      {
        "name": "旅游",
        "change_pct": -0.63
      },
      {
        "name": "国产芯片",
        "change_pct": 1.4
      },
      {
        "name": "内存",
        "change_pct": 2.17
      },
      {
        "name": "闪存",
        "change_pct": 2.33
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 61,
    "hot_rank_chg": -3,
    "stock_cnt": 5850,
    "price": "4.27",
    "change": "-7.58",
    "market_id": "33",
    "circulate_market_value": "2782301800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.77
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": -3.07
      },
      {
        "name": "股权转让",
        "change_pct": 0.15
      },
      {
        "name": "一带一路",
        "change_pct": 0.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.42
      },
      {
        "name": "智慧城市",
        "change_pct": 0.14
      },
      {
        "name": "食品",
        "change_pct": -0.82
      },
      {
        "name": "基因编辑",
        "change_pct": -0.79
      },
      {
        "name": "社区团购",
        "change_pct": -1.83
      },
      {
        "name": "大农业",
        "change_pct": -0.8
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.34
      },
      {
        "name": "广西概念",
        "change_pct": -1.26
      },
      {
        "name": "饮料",
        "change_pct": -2.0
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 62,
    "hot_rank_chg": 2,
    "stock_cnt": 5850,
    "price": "9.66",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "4489707200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.73
      },
      {
        "name": "水利",
        "change_pct": -0.51
      },
      {
        "name": "大数据",
        "change_pct": 0.03
      },
      {
        "name": "海绵城市",
        "change_pct": -0.94
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.11
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "大基建",
        "change_pct": -0.33
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.62
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      },
      {
        "name": "旧改",
        "change_pct": -0.1
      },
      {
        "name": "西部大开发",
        "change_pct": -0.53
      },
      {
        "name": "低空经济",
        "change_pct": 0.63
      },
      {
        "name": "房屋检测",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "000936",
    "name": "华西股份",
    "hot_rank": 65,
    "hot_rank_chg": 4,
    "stock_cnt": 5850,
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
        "change_pct": 1.88
      },
      {
        "name": "共享经济",
        "change_pct": -0.48
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "光通信",
        "change_pct": 3.07
      },
      {
        "name": "涤纶",
        "change_pct": 1.2
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": 1.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 3.23
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 68,
    "hot_rank_chg": 21,
    "stock_cnt": 5850,
    "price": "11.83",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "6860082100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医药商业",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": 0.91
      },
      {
        "name": "民营医院",
        "change_pct": -0.17
      },
      {
        "name": "医药",
        "change_pct": -0.06
      },
      {
        "name": "振兴东北",
        "change_pct": -0.81
      },
      {
        "name": "宠物经济",
        "change_pct": -0.57
      },
      {
        "name": "眼科",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 70,
    "hot_rank_chg": 2,
    "stock_cnt": 5850,
    "price": "8.14",
    "change": "-2.52",
    "market_id": "33",
    "circulate_market_value": "13233147400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.77
      },
      {
        "name": "电竞",
        "change_pct": 0.28
      },
      {
        "name": "手游",
        "change_pct": 0.62
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "游戏",
        "change_pct": 0.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.09
      },
      {
        "name": "快手概念股",
        "change_pct": -0.99
      },
      {
        "name": "元宇宙",
        "change_pct": 0.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.36
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "web3.0",
        "change_pct": -0.02
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.1
      },
      {
        "name": "数据要素",
        "change_pct": 0.03
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.23
      },
      {
        "name": "AI营销",
        "change_pct": -0.8
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.43
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.33
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.12
      },
      {
        "name": "人形机器人",
        "change_pct": 0.36
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.33
      },
      {
        "name": "多模态",
        "change_pct": -0.15
      },
      {
        "name": "AI视频",
        "change_pct": -0.39
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.41
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.94
      }
    ]
  },
  {
    "code": "600126",
    "name": "杭钢股份",
    "hot_rank": 76,
    "hot_rank_chg": 15,
    "stock_cnt": 5850,
    "price": "7.38",
    "change": "5.88",
    "market_id": "17",
    "circulate_market_value": "24923655000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.06
      },
      {
        "name": "钢铁",
        "change_pct": 0.44
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.73
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.57
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.06
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.74
      },
      {
        "name": "国资云",
        "change_pct": 0.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.86
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 81,
    "hot_rank_chg": 42,
    "stock_cnt": 5850,
    "price": "7.28",
    "change": "3.26",
    "market_id": "17",
    "circulate_market_value": "33596899000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 0.53
      },
      {
        "name": "国产软件",
        "change_pct": -0.02
      },
      {
        "name": "锂电池",
        "change_pct": 0.99
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "养老产业",
        "change_pct": -0.1
      },
      {
        "name": "大飞机",
        "change_pct": 0.93
      },
      {
        "name": "军民融合",
        "change_pct": 0.89
      },
      {
        "name": "物联网",
        "change_pct": 0.77
      },
      {
        "name": "大数据",
        "change_pct": 0.03
      },
      {
        "name": "智慧城市",
        "change_pct": 0.14
      },
      {
        "name": "军工",
        "change_pct": 0.74
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.45
      },
      {
        "name": "机器人",
        "change_pct": 0.37
      },
      {
        "name": "黑色家电",
        "change_pct": 0.38
      },
      {
        "name": "家电",
        "change_pct": -0.32
      },
      {
        "name": "储能",
        "change_pct": -0.25
      },
      {
        "name": "智能制造",
        "change_pct": 0.69
      },
      {
        "name": "工业互联网",
        "change_pct": 0.43
      },
      {
        "name": "数字经济",
        "change_pct": -0.01
      },
      {
        "name": "百度概念股",
        "change_pct": -0.64
      },
      {
        "name": "NFT",
        "change_pct": -0.35
      },
      {
        "name": "跨境支付",
        "change_pct": -0.68
      },
      {
        "name": "华为海思",
        "change_pct": 1.02
      },
      {
        "name": "云游戏",
        "change_pct": 1.23
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.84
      },
      {
        "name": "华为产业链",
        "change_pct": 0.83
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.62
      },
      {
        "name": "服务器",
        "change_pct": 1.28
      },
      {
        "name": "星闪概念",
        "change_pct": 0.29
      },
      {
        "name": "低空经济",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 83,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "4.70",
    "change": "2.85",
    "market_id": "17",
    "circulate_market_value": "15361659000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -1.13
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "养老产业",
        "change_pct": -0.1
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.83
      },
      {
        "name": "民营医院",
        "change_pct": -0.17
      },
      {
        "name": "地摊经济",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 84,
    "hot_rank_chg": -9,
    "stock_cnt": 5850,
    "price": "2.18",
    "change": "-3.96",
    "market_id": "17",
    "circulate_market_value": "7046089200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.29
      },
      {
        "name": "中药",
        "change_pct": -0.06
      },
      {
        "name": "创新药",
        "change_pct": -0.28
      },
      {
        "name": "股权转让",
        "change_pct": 0.15
      },
      {
        "name": "水泥",
        "change_pct": -0.72
      },
      {
        "name": "保健品",
        "change_pct": -0.64
      },
      {
        "name": "医药",
        "change_pct": -0.06
      },
      {
        "name": "疫苗",
        "change_pct": -0.4
      },
      {
        "name": "振兴东北",
        "change_pct": -0.81
      },
      {
        "name": "食品",
        "change_pct": -0.82
      },
      {
        "name": "物业管理",
        "change_pct": -1.38
      },
      {
        "name": "低价股",
        "change_pct": -0.96
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "002400",
    "name": "省广集团",
    "hot_rank": 88,
    "hot_rank_chg": -9,
    "stock_cnt": 5850,
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
        "change_pct": -0.77
      },
      {
        "name": "人工智能",
        "change_pct": 0.3
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.73
      },
      {
        "name": "大数据",
        "change_pct": 0.03
      },
      {
        "name": "百度概念股",
        "change_pct": -0.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.09
      },
      {
        "name": "传媒",
        "change_pct": -1.09
      },
      {
        "name": "快手概念股",
        "change_pct": -0.99
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.23
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      },
      {
        "name": "横琴新区",
        "change_pct": -1.48
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.84
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.34
      },
      {
        "name": "AI营销",
        "change_pct": -0.8
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.33
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.94
      },
      {
        "name": "区块链",
        "change_pct": -0.3
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 89,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
    "price": "11.28",
    "change": "-9.90",
    "market_id": "17",
    "circulate_market_value": "7674005900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.09
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "雄安新区",
        "change_pct": -0.6
      },
      {
        "name": "煤化工",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 90,
    "hot_rank_chg": 0,
    "stock_cnt": 5850,
    "price": "7.03",
    "change": "-9.87",
    "market_id": "17",
    "circulate_market_value": "14278804000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.28
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.77
      },
      {
        "name": "火电",
        "change_pct": -2.95
      },
      {
        "name": "风电",
        "change_pct": -0.48
      },
      {
        "name": "储能",
        "change_pct": -0.25
      },
      {
        "name": "碳中和",
        "change_pct": -1.0
      },
      {
        "name": "国企改革",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 94,
    "hot_rank_chg": 4,
    "stock_cnt": 5850,
    "price": "12.40",
    "change": "2.65",
    "market_id": "17",
    "circulate_market_value": "15911663000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.06
      },
      {
        "name": "强势人气股",
        "change_pct": 0.26
      },
      {
        "name": "智能制造",
        "change_pct": 0.69
      },
      {
        "name": "工业互联网",
        "change_pct": 0.43
      },
      {
        "name": "培育钻石",
        "change_pct": 0.98
      },
      {
        "name": "金刚线",
        "change_pct": 1.83
      },
      {
        "name": "国资入股",
        "change_pct": -0.1
      },
      {
        "name": "深地经济",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 97,
    "hot_rank_chg": 9,
    "stock_cnt": 5850,
    "price": "6.78",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3849515200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "照明",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 2.19
      },
      {
        "name": "军民融合",
        "change_pct": 0.89
      },
      {
        "name": "物联网",
        "change_pct": 0.77
      },
      {
        "name": "LED",
        "change_pct": 0.87
      },
      {
        "name": "军工",
        "change_pct": 0.74
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.84
      },
      {
        "name": "海洋经济",
        "change_pct": 0.53
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600487", "name": "亨通光电", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "62.98", "change": "10.01", "market_id": "17", "circulate_market_value": "154530640000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光纤光缆"}, {"code": "603629", "name": "利通电子", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "137.50", "change": "10.00", "market_id": "17", "circulate_market_value": "49599468000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "22.95", "change": "-3.49", "market_id": "17", "circulate_market_value": "48000893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "5.29", "change": "9.98", "market_id": "33", "circulate_market_value": "13988047000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.26}, {"name": "装修装饰", "change_pct": -0.09}, {"name": "装配式建筑", "change_pct": -0.16}, {"name": "航天", "change_pct": 0.89}, {"name": "旧改", "change_pct": -0.1}]}, {"code": "600522", "name": "中天科技", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "35.55", "change": "8.05", "market_id": "17", "circulate_market_value": "121330360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "8.91", "change": "0.56", "market_id": "17", "circulate_market_value": "22439923000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.77}, {"name": "工业大麻", "change_pct": -0.79}, {"name": "中药", "change_pct": -0.06}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "保健品", "change_pct": -0.64}, {"name": "民营医院", "change_pct": -0.17}, {"name": "医药", "change_pct": -0.06}, {"name": "化学原料药", "change_pct": -0.18}, {"name": "流感", "change_pct": -0.2}, {"name": "振兴东北", "change_pct": -0.81}, {"name": "食品", "change_pct": -0.82}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 7, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "16.99", "change": "-9.29", "market_id": "17", "circulate_market_value": "25021289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "62.73", "change": "1.15", "market_id": "33", "circulate_market_value": "72579410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "55.18", "change": "4.35", "market_id": "17", "circulate_market_value": "248477690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "39.16", "change": "0.49", "market_id": "33", "circulate_market_value": "42244529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "39.95", "change": "0.88", "market_id": "33", "circulate_market_value": "114259903000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "12.02", "change": "9.97", "market_id": "17", "circulate_market_value": "21505442000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "调味品", "change_pct": -0.38}, {"name": "纯碱", "change_pct": -0.29}, {"name": "食品", "change_pct": -0.82}, {"name": "土壤修复", "change_pct": -0.25}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "OpenClaw概念", "change_pct": 1.36}, {"name": "DeepSeek概念股", "change_pct": 0.44}]}, {"code": "300017", "name": "网宿科技", "hot_rank": 13, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "17.33", "change": "20.01", "market_id": "33", "circulate_market_value": "41010918000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CDN涨价"}, {"code": "601991", "name": "大唐发电", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "6.48", "change": "-6.36", "market_id": "17", "circulate_market_value": "80326657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.28}, {"name": "核电", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "电力体制改革", "change_pct": -2.77}, {"name": "水电", "change_pct": -3.22}, {"name": "火电", "change_pct": -2.95}, {"name": "光伏", "change_pct": 0.11}, {"name": "风电", "change_pct": -0.48}, {"name": "国企改革", "change_pct": -0.36}, {"name": "算电协同", "change_pct": -1.23}]}, {"code": "600721", "name": "百花医药", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "13.81", "change": "-4.76", "market_id": "17", "circulate_market_value": "5310602800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "44.39", "change": "5.94", "market_id": "17", "circulate_market_value": "176298750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "31.91", "change": "-4.55", "market_id": "17", "circulate_market_value": "12795910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 18, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "13.75", "change": "-9.95", "market_id": "33", "circulate_market_value": "12833172100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "29.04", "change": "10.00", "market_id": "17", "circulate_market_value": "25034002000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "002491", "name": "通鼎互联", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "19.65", "change": "3.75", "market_id": "33", "circulate_market_value": "23117613000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "18.97", "change": "3.32", "market_id": "33", "circulate_market_value": "13189139800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 22, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "417.48", "change": "3.21", "market_id": "17", "circulate_market_value": "279082010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 23, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "267.71", "change": "4.10", "market_id": "33", "circulate_market_value": "291372360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "78.71", "change": "1.14", "market_id": "17", "circulate_market_value": "140844820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "17.56", "change": "10.03", "market_id": "17", "circulate_market_value": "13824574000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "603618", "name": "杭电股份", "hot_rank": 26, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "29.87", "change": "10.02", "market_id": "17", "circulate_market_value": "20651390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光纤光缆"}, {"code": "000831", "name": "中国稀土", "hot_rank": 27, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "60.95", "change": "10.00", "market_id": "33", "circulate_market_value": "64681408000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "稀土"}, {"code": "600519", "name": "贵州茅台", "hot_rank": 28, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "1341.99", "change": "-0.98", "market_id": "17", "circulate_market_value": "1677597000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 29, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "185.90", "change": "10.00", "market_id": "17", "circulate_market_value": "51231879000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块"}, {"code": "002437", "name": "誉衡药业", "hot_rank": 30, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "4.53", "change": "6.59", "market_id": "33", "circulate_market_value": "9513696900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.06}, {"name": "维生素", "change_pct": -0.14}, {"name": "基因测序", "change_pct": 0.26}, {"name": "民营医院", "change_pct": -0.17}, {"name": "医药", "change_pct": -0.06}, {"name": "化学原料药", "change_pct": -0.18}, {"name": "PD-1抑制剂", "change_pct": -0.34}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 31, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "41.33", "change": "1.40", "market_id": "17", "circulate_market_value": "60424245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 32, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "5.33", "change": "-4.14", "market_id": "33", "circulate_market_value": "31206076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.06}, {"name": "人工智能", "change_pct": 0.3}, {"name": "水利", "change_pct": -0.51}, {"name": "直播/短视频", "change_pct": -0.53}, {"name": "大数据", "change_pct": 0.03}, {"name": "园林", "change_pct": -1.33}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.31}, {"name": "数字经济", "change_pct": -0.01}, {"name": "腾讯概念股", "change_pct": 0.09}, {"name": "理想汽车概念股", "change_pct": -0.58}, {"name": "第三代半导体", "change_pct": 1.45}, {"name": "快手概念股", "change_pct": -0.99}, {"name": "IGBT", "change_pct": 0.36}, {"name": "虚拟数字人", "change_pct": -0.36}, {"name": "AIGC概念", "change_pct": -0.1}, {"name": "字节跳动概念股", "change_pct": -0.23}, {"name": "氮化镓", "change_pct": 1.41}, {"name": "AI营销", "change_pct": -0.8}, {"name": "多模态", "change_pct": -0.15}, {"name": "液冷服务器", "change_pct": 1.63}, {"name": "小红书概念股", "change_pct": -0.94}, {"name": "区块链", "change_pct": -0.3}]}, {"code": "003032", "name": "传智教育", "hot_rank": 34, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "12.26", "change": "5.51", "market_id": "33", "circulate_market_value": "3487744500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.16}, {"name": "ST摘帽", "change_pct": -0.73}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "教育", "change_pct": -0.59}, {"name": "阿里巴巴概念股", "change_pct": -0.06}, {"name": "职业教育", "change_pct": -0.82}, {"name": "在线教育", "change_pct": -0.14}, {"name": "华为鸿蒙", "change_pct": 0.33}, {"name": "华为产业链", "change_pct": 0.83}, {"name": "智谱AI", "change_pct": 0.7}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 35, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "943.00", "change": "2.38", "market_id": "33", "circulate_market_value": "1046673210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 36, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "22.28", "change": "0.81", "market_id": "33", "circulate_market_value": "10078108500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 37, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "101.59", "change": "1.38", "market_id": "33", "circulate_market_value": "66341889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 38, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "205.19", "change": "1.52", "market_id": "33", "circulate_market_value": "284459350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 39, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "5.81", "change": "-0.85", "market_id": "33", "circulate_market_value": "205483050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.07}, {"name": "手机产业链", "change_pct": 1.8}, {"name": "超高清视频", "change_pct": 0.53}, {"name": "苹果产业链", "change_pct": 1.8}, {"name": "电竞", "change_pct": 0.28}, {"name": "半导体", "change_pct": 1.88}, {"name": "人工智能", "change_pct": 0.3}, {"name": "互联网医疗", "change_pct": -0.39}, {"name": "VR&AR", "change_pct": 1.1}, {"name": "OLED", "change_pct": 1.68}, {"name": "京津冀", "change_pct": -0.47}, {"name": "物联网", "change_pct": 0.77}, {"name": "指纹识别", "change_pct": 1.77}, {"name": "汽车零部件", "change_pct": 0.32}, {"name": "白马股", "change_pct": -0.34}, {"name": "智能制造", "change_pct": 0.69}, {"name": "小米概念股", "change_pct": 1.31}, {"name": "国产芯片", "change_pct": 1.4}, {"name": "液晶面板/LCD", "change_pct": 2.08}, {"name": "全息概念", "change_pct": 0.71}, {"name": "理想汽车概念股", "change_pct": -0.58}, {"name": "MicroLED", "change_pct": 1.55}, {"name": "钙钛矿电池", "change_pct": 0.74}, {"name": "智能手表", "change_pct": 0.71}, {"name": "MiniLED", "change_pct": 1.38}, {"name": "传感器", "change_pct": 1.26}, {"name": "大硅片", "change_pct": 0.65}, {"name": "AI PC", "change_pct": 1.52}, {"name": "华为产业链", "change_pct": 0.83}, {"name": "回购", "change_pct": -0.02}, {"name": "光电共封装CPO", "change_pct": 3.23}, {"name": "智能眼镜/MR头显", "change_pct": 1.33}, {"name": "玻璃基板封装", "change_pct": 2.09}]}, {"code": "600183", "name": "生益科技", "hot_rank": 40, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "143.21", "change": "1.04", "market_id": "17", "circulate_market_value": "345386550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "17.98", "change": "0.56", "market_id": "33", "circulate_market_value": "59741279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600602", "name": "云赛智联", "hot_rank": 42, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "20.56", "change": "6.20", "market_id": "17", "circulate_market_value": "22087669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 43, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "355.18", "change": "5.24", "market_id": "17", "circulate_market_value": "144323240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 44, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "5.92", "change": "-5.43", "market_id": "33", "circulate_market_value": "4236020500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -2.18}, {"name": "旅游", "change_pct": -0.63}, {"name": "IP经济/谷子经济", "change_pct": -0.41}]}, {"code": "600206", "name": "有研新材", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "50.78", "change": "1.14", "market_id": "17", "circulate_market_value": "42987978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603887", "name": "城地香江", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "11.92", "change": "-4.56", "market_id": "17", "circulate_market_value": "7176190700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 0.73}, {"name": "阿里巴巴概念股", "change_pct": -0.06}, {"name": "腾讯概念股", "change_pct": 0.09}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "国资入股", "change_pct": -0.1}, {"name": "华为产业链", "change_pct": 0.83}]}, {"code": "600683", "name": "京投发展", "hot_rank": 47, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "11.64", "change": "-9.98", "market_id": "17", "circulate_market_value": "8622651200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.13}, {"name": "光通信", "change_pct": 3.07}, {"name": "京津冀", "change_pct": -0.47}, {"name": "土地流转", "change_pct": -1.15}, {"name": "北京城市规划", "change_pct": -1.75}, {"name": "物业管理", "change_pct": -1.38}, {"name": "国企改革", "change_pct": -0.36}]}, {"code": "603890", "name": "春秋电子", "hot_rank": 48, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "22.09", "change": "8.02", "market_id": "17", "circulate_market_value": "9870511400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 49, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "17.60", "change": "10.00", "market_id": "17", "circulate_market_value": "2816000000.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "SPD"}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 50, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "60.65", "change": "3.39", "market_id": "33", "circulate_market_value": "22349724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 51, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "32.67", "change": "0.90", "market_id": "33", "circulate_market_value": "24744752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 52, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "66.19", "change": "1.47", "market_id": "17", "circulate_market_value": "1313480470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 53, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "406.19", "change": "2.44", "market_id": "33", "circulate_market_value": "67033151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 54, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "47.29", "change": "20.00", "market_id": "33", "circulate_market_value": "7163063900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购岚创科技"}, {"code": "300502", "name": "新易盛", "hot_rank": 55, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "448.08", "change": "4.23", "market_id": "33", "circulate_market_value": "562001270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 56, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "159.24", "change": "-1.90", "market_id": "17", "circulate_market_value": "393845150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 57, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "67.36", "change": "20.01", "market_id": "33", "circulate_market_value": "13780184000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中际旭创入股"}, {"code": "603330", "name": "天洋新材", "hot_rank": 58, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "10.68", "change": "9.99", "market_id": "17", "circulate_market_value": "4620954600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "CPO", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.15}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "光伏", "change_pct": 0.11}, {"name": "无线耳机", "change_pct": 1.35}, {"name": "华为产业链", "change_pct": 0.83}, {"name": "光伏胶膜", "change_pct": 0.78}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 59, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "12.56", "change": "-7.99", "market_id": "33", "circulate_market_value": "6194041400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.29}, {"name": "彩票", "change_pct": 0.18}, {"name": "人工智能", "change_pct": 0.3}, {"name": "包装印刷", "change_pct": -0.2}, {"name": "数字经济", "change_pct": -0.01}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "AIGC概念", "change_pct": -0.1}, {"name": "ETC", "change_pct": -0.12}, {"name": "词元概念/Token", "change_pct": 2.15}, {"name": "ChatGPT", "change_pct": 0.43}, {"name": "人工智能大模型", "change_pct": -0.12}, {"name": "英伟达概念", "change_pct": 1.34}, {"name": "区块链", "change_pct": -0.3}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 60, "hot_rank_chg": 8, "stock_cnt": 5850, "price": "3.03", "change": "10.18", "market_id": "33", "circulate_market_value": "14155399000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.29}, {"name": "股权转让", "change_pct": 0.15}, {"name": "房地产", "change_pct": -1.13}, {"name": "京津冀", "change_pct": -0.47}, {"name": "旅游", "change_pct": -0.63}, {"name": "国产芯片", "change_pct": 1.4}, {"name": "内存", "change_pct": 2.17}, {"name": "闪存", "change_pct": 2.33}, {"name": "IP经济/谷子经济", "change_pct": -0.41}]}, {"code": "002329", "name": "皇氏集团", "hot_rank": 61, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "4.27", "change": "-7.58", "market_id": "33", "circulate_market_value": "2782301800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.77}, {"name": "乳业（奶粉）", "change_pct": -3.07}, {"name": "股权转让", "change_pct": 0.15}, {"name": "一带一路", "change_pct": 0.07}, {"name": "优化生育（三孩）", "change_pct": -0.42}, {"name": "智慧城市", "change_pct": 0.14}, {"name": "食品", "change_pct": -0.82}, {"name": "基因编辑", "change_pct": -0.79}, {"name": "社区团购", "change_pct": -1.83}, {"name": "大农业", "change_pct": -0.8}, {"name": "5G消息/RCS", "change_pct": 0.34}, {"name": "广西概念", "change_pct": -1.26}, {"name": "饮料", "change_pct": -2.0}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 62, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "9.66", "change": "-9.97", "market_id": "33", "circulate_market_value": "4489707200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.07}, {"name": "云计算数据中心", "change_pct": 0.73}, {"name": "水利", "change_pct": -0.51}, {"name": "大数据", "change_pct": 0.03}, {"name": "海绵城市", "change_pct": -0.94}, {"name": "风电", "change_pct": -0.48}, {"name": "乡村振兴", "change_pct": -1.11}, {"name": "数字经济", "change_pct": -0.01}, {"name": "大基建", "change_pct": -0.33}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "新型城镇化", "change_pct": -0.62}, {"name": "国企改革", "change_pct": -0.36}, {"name": "旧改", "change_pct": -0.1}, {"name": "西部大开发", "change_pct": -0.53}, {"name": "低空经济", "change_pct": 0.63}, {"name": "房屋检测", "change_pct": -0.7}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 63, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "78.80", "change": "-0.83", "market_id": "33", "circulate_market_value": "115586346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301396", "name": "宏景科技", "hot_rank": 64, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "221.86", "change": "8.59", "market_id": "33", "circulate_market_value": "31394698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000936", "name": "华西股份", "hot_rank": 65, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "6174634700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "间接参股光芯片", "xgb_concepts": [{"name": "半导体", "change_pct": 1.88}, {"name": "共享经济", "change_pct": -0.48}, {"name": "人工智能", "change_pct": 0.3}, {"name": "光通信", "change_pct": 3.07}, {"name": "涤纶", "change_pct": 1.2}, {"name": "江苏国企改革", "change_pct": -0.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": 1.4}, {"name": "国企改革", "change_pct": -0.36}, {"name": "光电共封装CPO", "change_pct": 3.23}]}, {"code": "002792", "name": "通宇通讯", "hot_rank": 66, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "36.34", "change": "-5.93", "market_id": "33", "circulate_market_value": "12276541700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 67, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "191.52", "change": "3.61", "market_id": "33", "circulate_market_value": "150598010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600829", "name": "人民同泰", "hot_rank": 68, "hot_rank_chg": 21, "stock_cnt": 5850, "price": "11.83", "change": "10.05", "market_id": "17", "circulate_market_value": "6860082100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药商业", "xgb_concepts": [{"name": "医药商业", "change_pct": 0.91}, {"name": "民营医院", "change_pct": -0.17}, {"name": "医药", "change_pct": -0.06}, {"name": "振兴东北", "change_pct": -0.81}, {"name": "宠物经济", "change_pct": -0.57}, {"name": "眼科", "change_pct": -0.34}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 69, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "15.10", "change": "-0.98", "market_id": "33", "circulate_market_value": "52516747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 70, "hot_rank_chg": 2, "stock_cnt": 5850, "price": "8.14", "change": "-2.52", "market_id": "33", "circulate_market_value": "13233147400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.77}, {"name": "电竞", "change_pct": 0.28}, {"name": "手游", "change_pct": 0.62}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "人工智能", "change_pct": 0.3}, {"name": "游戏", "change_pct": 0.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.01}, {"name": "腾讯概念股", "change_pct": 0.09}, {"name": "快手概念股", "change_pct": -0.99}, {"name": "元宇宙", "change_pct": 0.28}, {"name": "虚拟数字人", "change_pct": -0.36}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "web3.0", "change_pct": -0.02}, {"name": "AIGC概念", "change_pct": -0.1}, {"name": "数据要素", "change_pct": 0.03}, {"name": "字节跳动概念股", "change_pct": -0.23}, {"name": "AI营销", "change_pct": -0.8}, {"name": "ChatGPT", "change_pct": 0.43}, {"name": "智能眼镜/MR头显", "change_pct": 1.33}, {"name": "人工智能大模型", "change_pct": -0.12}, {"name": "人形机器人", "change_pct": 0.36}, {"name": "短剧/互动影游", "change_pct": -1.33}, {"name": "多模态", "change_pct": -0.15}, {"name": "AI视频", "change_pct": -0.39}, {"name": "IP经济/谷子经济", "change_pct": -0.41}, {"name": "小红书概念股", "change_pct": -0.94}]}, {"code": "000021", "name": "深科技", "hot_rank": 71, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "40.23", "change": "1.72", "market_id": "33", "circulate_market_value": "63328279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 72, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "167.55", "change": "10.00", "market_id": "17", "circulate_market_value": "26270251000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板"}, {"code": "002156", "name": "通富微电", "hot_rank": 73, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "62.96", "change": "1.19", "market_id": "33", "circulate_market_value": "95538792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600111", "name": "北方稀土", "hot_rank": 74, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "42.66", "change": "4.00", "market_id": "17", "circulate_market_value": "154218710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 75, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "40.90", "change": "4.68", "market_id": "17", "circulate_market_value": "52009318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600126", "name": "杭钢股份", "hot_rank": 76, "hot_rank_chg": 15, "stock_cnt": 5850, "price": "7.38", "change": "5.88", "market_id": "17", "circulate_market_value": "24923655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.06}, {"name": "钢铁", "change_pct": 0.44}, {"name": "云计算数据中心", "change_pct": 0.73}, {"name": "浙江国企改革", "change_pct": -0.57}, {"name": "数字经济", "change_pct": -0.01}, {"name": "阿里巴巴概念股", "change_pct": -0.06}, {"name": "汽车拆解", "change_pct": 0.74}, {"name": "国资云", "change_pct": 0.72}, {"name": "东数西算/算力", "change_pct": 0.86}, {"name": "国企改革", "change_pct": -0.36}, {"name": "DeepSeek概念股", "change_pct": 0.44}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 77, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "68.29", "change": "2.38", "market_id": "33", "circulate_market_value": "99256238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 78, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "30.21", "change": "-7.25", "market_id": "17", "circulate_market_value": "10178351700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 79, "hot_rank_chg": -3, "stock_cnt": 5850, "price": "123.05", "change": "3.20", "market_id": "33", "circulate_market_value": "102010363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 80, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "143.90", "change": "0.42", "market_id": "33", "circulate_market_value": "160252270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 81, "hot_rank_chg": 42, "stock_cnt": 5850, "price": "7.28", "change": "3.26", "market_id": "17", "circulate_market_value": "33596899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 0.53}, {"name": "国产软件", "change_pct": -0.02}, {"name": "锂电池", "change_pct": 0.99}, {"name": "人工智能", "change_pct": 0.3}, {"name": "养老产业", "change_pct": -0.1}, {"name": "大飞机", "change_pct": 0.93}, {"name": "军民融合", "change_pct": 0.89}, {"name": "物联网", "change_pct": 0.77}, {"name": "大数据", "change_pct": 0.03}, {"name": "智慧城市", "change_pct": 0.14}, {"name": "军工", "change_pct": 0.74}, {"name": "新能源汽车", "change_pct": 0.45}, {"name": "机器人", "change_pct": 0.37}, {"name": "黑色家电", "change_pct": 0.38}, {"name": "家电", "change_pct": -0.32}, {"name": "储能", "change_pct": -0.25}, {"name": "智能制造", "change_pct": 0.69}, {"name": "工业互联网", "change_pct": 0.43}, {"name": "数字经济", "change_pct": -0.01}, {"name": "百度概念股", "change_pct": -0.64}, {"name": "NFT", "change_pct": -0.35}, {"name": "跨境支付", "change_pct": -0.68}, {"name": "华为海思", "change_pct": 1.02}, {"name": "云游戏", "change_pct": 1.23}, {"name": "网红/MCN", "change_pct": -0.84}, {"name": "华为产业链", "change_pct": 0.83}, {"name": "毫米波雷达", "change_pct": 1.62}, {"name": "服务器", "change_pct": 1.28}, {"name": "星闪概念", "change_pct": 0.29}, {"name": "低空经济", "change_pct": 0.63}]}, {"code": "600353", "name": "旭光电子", "hot_rank": 82, "hot_rank_chg": 10, "stock_cnt": 5850, "price": "31.03", "change": "10.00", "market_id": "17", "circulate_market_value": "25718010000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "氮化铝"}, {"code": "600162", "name": "香江控股", "hot_rank": 83, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "4.70", "change": "2.85", "market_id": "17", "circulate_market_value": "15361659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -1.13}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "养老产业", "change_pct": -0.1}, {"name": "粤港澳大湾区", "change_pct": -0.83}, {"name": "民营医院", "change_pct": -0.17}, {"name": "地摊经济", "change_pct": -1.16}]}, {"code": "600881", "name": "亚泰集团", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "2.18", "change": "-3.96", "market_id": "17", "circulate_market_value": "7046089200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.29}, {"name": "中药", "change_pct": -0.06}, {"name": "创新药", "change_pct": -0.28}, {"name": "股权转让", "change_pct": 0.15}, {"name": "水泥", "change_pct": -0.72}, {"name": "保健品", "change_pct": -0.64}, {"name": "医药", "change_pct": -0.06}, {"name": "疫苗", "change_pct": -0.4}, {"name": "振兴东北", "change_pct": -0.81}, {"name": "食品", "change_pct": -0.82}, {"name": "物业管理", "change_pct": -1.38}, {"name": "低价股", "change_pct": -0.96}, {"name": "国企改革", "change_pct": -0.36}]}, {"code": "002364", "name": "中恒电气", "hot_rank": 85, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "45.00", "change": "4.65", "market_id": "33", "circulate_market_value": "25114669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 86, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "32.53", "change": "0.99", "market_id": "17", "circulate_market_value": "670176330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003031", "name": "中瓷电子", "hot_rank": 87, "hot_rank_chg": 14, "stock_cnt": 5850, "price": "130.08", "change": "10.00", "market_id": "33", "circulate_market_value": "44247583000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子陶瓷"}, {"code": "002400", "name": "省广集团", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "7.16", "change": "-9.94", "market_id": "33", "circulate_market_value": "12359338700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.77}, {"name": "人工智能", "change_pct": 0.3}, {"name": "云计算数据中心", "change_pct": 0.73}, {"name": "大数据", "change_pct": 0.03}, {"name": "百度概念股", "change_pct": -0.64}, {"name": "腾讯概念股", "change_pct": 0.09}, {"name": "传媒", "change_pct": -1.09}, {"name": "快手概念股", "change_pct": -0.99}, {"name": "字节跳动概念股", "change_pct": -0.23}, {"name": "国企改革", "change_pct": -0.36}, {"name": "横琴新区", "change_pct": -1.48}, {"name": "网红/MCN", "change_pct": -0.84}, {"name": "5G消息/RCS", "change_pct": 0.34}, {"name": "AI营销", "change_pct": -0.8}, {"name": "短剧/互动影游", "change_pct": -1.33}, {"name": "小红书概念股", "change_pct": -0.94}, {"name": "区块链", "change_pct": -0.3}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 89, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "11.28", "change": "-9.90", "market_id": "17", "circulate_market_value": "7674005900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.09}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "雄安新区", "change_pct": -0.6}, {"name": "煤化工", "change_pct": -0.04}]}, {"code": "600744", "name": "华银电力", "hot_rank": 90, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "7.03", "change": "-9.87", "market_id": "17", "circulate_market_value": "14278804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.28}, {"name": "电力体制改革", "change_pct": -2.77}, {"name": "火电", "change_pct": -2.95}, {"name": "风电", "change_pct": -0.48}, {"name": "储能", "change_pct": -0.25}, {"name": "碳中和", "change_pct": -1.0}, {"name": "国企改革", "change_pct": -0.36}]}, {"code": "002827", "name": "高争民爆", "hot_rank": 91, "hot_rank_chg": 6, "stock_cnt": 5850, "price": "56.74", "change": "2.98", "market_id": "33", "circulate_market_value": "15660176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 92, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "67.79", "change": "3.37", "market_id": "33", "circulate_market_value": "49101342000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 93, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "89.36", "change": "-0.30", "market_id": "17", "circulate_market_value": "130738536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 94, "hot_rank_chg": 4, "stock_cnt": 5850, "price": "12.40", "change": "2.65", "market_id": "17", "circulate_market_value": "15911663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.06}, {"name": "强势人气股", "change_pct": 0.26}, {"name": "智能制造", "change_pct": 0.69}, {"name": "工业互联网", "change_pct": 0.43}, {"name": "培育钻石", "change_pct": 0.98}, {"name": "金刚线", "change_pct": 1.83}, {"name": "国资入股", "change_pct": -0.1}, {"name": "深地经济", "change_pct": 0.75}]}, {"code": "603115", "name": "海星股份", "hot_rank": 95, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "85.45", "change": "10.00", "market_id": "17", "circulate_market_value": "20899583000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI服务器"}, {"code": "603228", "name": "景旺电子", "hot_rank": 96, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "98.01", "change": "0.83", "market_id": "17", "circulate_market_value": "96237344000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 97, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "6.78", "change": "10.06", "market_id": "33", "circulate_market_value": "3849515200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "照明", "xgb_concepts": [{"name": "石墨烯", "change_pct": 2.19}, {"name": "军民融合", "change_pct": 0.89}, {"name": "物联网", "change_pct": 0.77}, {"name": "LED", "change_pct": 0.87}, {"name": "军工", "change_pct": 0.74}, {"name": "智慧灯杆", "change_pct": 0.84}, {"name": "海洋经济", "change_pct": 0.53}]}, {"code": "603823", "name": "百合花", "hot_rank": 98, "hot_rank_chg": 11, "stock_cnt": 5850, "price": "70.99", "change": "-6.59", "market_id": "17", "circulate_market_value": "29557943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 99, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "70.96", "change": "0.42", "market_id": "33", "circulate_market_value": "60534059000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 100, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "109.79", "change": "2.57", "market_id": "33", "circulate_market_value": "110337375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603186", "name": "华正新材", "price": 167.55, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.02, "first_limit_up": 1786671450, "break_limit_up_times": 0}, {"code": "600769", "name": "祥龙电业", "price": 16.51, "change_pct": 9.99, "reason": "公司实控人武汉东湖新技术开发区管理委员会，与长江储存同一实控人", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.26, "first_limit_up": 1786686698, "break_limit_up_times": 0}, {"code": "603118", "name": "共进股份", "price": 17.56, "change_pct": 10.03, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 14.31, "first_limit_up": 1786671164, "break_limit_up_times": 12}, {"code": "600645", "name": "中源协和", "price": 22.33, "change_pct": 10.0, "reason": "公司在细胞新药申报方面取得突破，公司全资子公司及参股公司已有1项CAR-T药物获批上市，2项处于Ⅱ期临床试验的干细胞药物，5项获得药物临床试验批准的干细胞药物，根据CDE数据统计，公司干细胞药物获得药物临床试验批准的数量为国内第一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.66, "first_limit_up": 1786671004, "break_limit_up_times": 2}, {"code": "600288", "name": "大恒科技", "price": 13.22, "change_pct": 9.98, "reason": "1、公司机器视觉产品包括工业数字摄像机、图像采集卡、图像处理软件和智能摄像机等机器视觉系统中核心零部件，与工业机器人企业有该类产品方面的合作；\n2、控股公司中科大洋的“大洋千机大模型平台”开发了多种垂直场景智能化应用，例如智能内容管理、视频理解摘要、智能写稿创作、文生图/视频、文字场记快剪、文稿一键成片、虚拟数智人播报等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.26, "first_limit_up": 1786671695, "break_limit_up_times": 1}, {"code": "300120", "name": "经纬辉开", "price": 9.26, "change_pct": 19.95, "reason": "子公司中兴系统参股的铱加科技聚焦光芯片及高中低速光模块研发制造，已入选深圳市科创局1.6T光芯片重大专项，其光模块产品已在轨道交通、数据中心智算等领域应用", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 20.49, "first_limit_up": 1786690434, "break_limit_up_times": 1}, {"code": "002726", "name": "ST龙大", "price": 2.33, "change_pct": 9.91, "reason": "肉食品屠宰与深加工行业的龙头企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.01, "first_limit_up": 1786689492, "break_limit_up_times": 2}, {"code": "000620", "name": "盈新发展", "price": 3.03, "change_pct": 10.18, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.62, "first_limit_up": 1786685640, "break_limit_up_times": 0}, {"code": "600487", "name": "亨通光电", "price": 62.98, "change_pct": 10.01, "reason": "公司收购J-Fiber，部署特种光纤和数据中心多模光纤产能。公司空芯光纤也在2025年供应链博览会和联通合作伙伴大会展出，性能达到业内领先水平", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 12.97, "first_limit_up": 1786687146, "break_limit_up_times": 1}, {"code": "603115", "name": "海星股份", "price": 85.45, "change_pct": 10.0, "reason": "公司已切入AI服务器/数据中心用铝电解电容器市场，800V DC高压架构带动AI电极箔需求增长，公司主营产品电极箔是铝电解电容器的核心原材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 6.82, "first_limit_up": 1786688807, "break_limit_up_times": 0}, {"code": "000936", "name": "华西股份", "price": 6.97, "change_pct": 9.94, "reason": "公司参股熹联光芯微电子、纵慧芯光等公司，标的主营硅光、CPO等业务", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 15.45, "first_limit_up": 1786670700, "break_limit_up_times": 7}, {"code": "301419", "name": "阿莱德", "price": 37.62, "change_pct": 20.0, "reason": "公司主营通信设备零部件， 为5G应用开发的零部件产品拥有业内领先的性能，提供的产品包括射频与透波防护器件、 EMI及IP防护器件和电子导热散热器件等，可应用于光模块", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 12.31, "first_limit_up": 1786674702, "break_limit_up_times": 0}, {"code": "002907", "name": "华森制药", "price": 15.26, "change_pct": 10.02, "reason": "子公司磷酸ORIC-1327滴眼液获国家药监局临床试验批准通知书", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.61, "first_limit_up": 1786670700, "break_limit_up_times": 0}, {"code": "600186", "name": "莲花控股", "price": 12.02, "change_pct": 9.97, "reason": "1、国内在产味精生产商历史最悠久的企业，一季度净利润增长42%；\n2、公司将以莲花科创为项目实施主体，积极引入行业实力战略合作伙伴，开展智能计算中心项目合作，在国内主要的算力节点，建设智算中心，高效推动算力租赁业务落地", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.88, "first_limit_up": 1786672976, "break_limit_up_times": 2}, {"code": "603083", "name": "剑桥科技", "price": 185.9, "change_pct": 10.0, "reason": "公司已向微软供应高速光模块产品，800G光模块产品已实现小批量发货，1.6T光模块产品在给客户送样测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 14.44, "first_limit_up": 1786675271, "break_limit_up_times": 1}, {"code": "603989", "name": "艾华集团", "price": 32.99, "change_pct": 10.0, "reason": "国内铝电解电容器行业龙头；公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 10.68, "first_limit_up": 1786671330, "break_limit_up_times": 4}, {"code": "603725", "name": "天安新材", "price": 12.23, "change_pct": 9.98, "reason": "公司参股若铂机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.38, "first_limit_up": 1786671292, "break_limit_up_times": 1}, {"code": "603177", "name": "德创环保", "price": 10.23, "change_pct": 10.0, "reason": "1、公司危废治理业务包括废盐资源化处置、危废填埋和危废集中收集；\n2、公司钠离子电池项目定位为第二业绩增长曲线，环卫车领域已实现应用", "plates": ["环保"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1786676517, "break_limit_up_times": 0}, {"code": "002724", "name": "海洋王", "price": 6.78, "change_pct": 10.06, "reason": "公司是深海特种照明设备供应商，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["军工"], "limit_up_days": 2, "turnover_ratio": 3.47, "first_limit_up": 1786671000, "break_limit_up_times": 0}, {"code": "002418", "name": "康盛股份", "price": 4.07, "change_pct": 10.0, "reason": "公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.11, "first_limit_up": 1786671060, "break_limit_up_times": 1}, {"code": "600272", "name": "开开实业", "price": 17.6, "change_pct": 10.0, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 28.15, "first_limit_up": 1786671840, "break_limit_up_times": 1}, {"code": "002172", "name": "澳洋健康", "price": 4.54, "change_pct": 9.93, "reason": "子公司江苏澳洋医药物流有限公司具体经营内容包括中药材配送、销售业务", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 2.5, "first_limit_up": 1786670700, "break_limit_up_times": 0}, {"code": "601609", "name": "金田股份", "price": 10.95, "change_pct": 10.05, "reason": "1、国内铜及铜合金材料生产的龙头企业；公司自主研发的铜热管、液冷铜管等产品已成功导入多家头部企业算力服务器产品中；\n2、公司PEEK线产品目前已具备产品竞争优势及进口替代能力，已取得部分高端新能源汽车厂商的定点", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1786672051, "break_limit_up_times": 1}, {"code": "002766", "name": "索菱股份", "price": 4.5, "change_pct": 10.02, "reason": "车载终端市场绝对龙头，车联网“软件+硬件+运营平台”供应商，智能驾驶舱已进入供货状态", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.48, "first_limit_up": 1786684578, "break_limit_up_times": 0}, {"code": "688286", "name": "敏芯股份", "price": 53.56, "change_pct": 20.01, "reason": "公司为国内领先的MEMS传感器设计企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.57, "first_limit_up": 1786686699, "break_limit_up_times": 0}, {"code": "600815", "name": "厦工股份", "price": 3.98, "change_pct": 9.94, "reason": "实控人厦门国资委，中国最大的工程机械制造基地之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.42, "first_limit_up": 1786688419, "break_limit_up_times": 0}, {"code": "301130", "name": "西点药业", "price": 30.85, "change_pct": 19.99, "reason": "公司生产的阿昔洛韦片是治疗天花和水痘的药物", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 17.98, "first_limit_up": 1786672548, "break_limit_up_times": 11}, {"code": "003031", "name": "中瓷电子", "price": 130.08, "change_pct": 10.0, "reason": "公司为电子陶瓷龙头，上半年高端光模块外壳和基板逐步实现放量，目前公司已可以设计开发1.6T光通信器件外壳和基板，与国外同类产品技术水平相当。", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1786688790, "break_limit_up_times": 0}, {"code": "000950", "name": "重药控股", "price": 6.29, "change_pct": 9.97, "reason": "公司参与投资的企业润生药业有限公司申报的核心产品“沙美特罗替卡松吸入粉雾剂”正式获得美国食品药品监督管理局（FDA）批准上市。", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.51, "first_limit_up": 1786671990, "break_limit_up_times": 0}, {"code": "002811", "name": "郑中设计", "price": 11.3, "change_pct": 10.03, "reason": "室内设计领域的国际领先企业之一；公司表示致力于将设计与AI深度融合，子公司深圳市犀照网络科技有限公司自主研发的“IDEAFUSION兆材云库数字化平台”与“TRANSFUSIONAI”共同构建从创意到落地的数字化解决方案", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1786674147, "break_limit_up_times": 0}, {"code": "300684", "name": "中石科技", "price": 67.36, "change_pct": 20.01, "reason": "1、中际旭创拟以55.70元/股受让公司控股股东10.47%股份，交易总价17.47亿元，成为公司持股5%以上股东；\n2、公司宜兴子公司主营产品包括液冷模组等，建立相关技术储备和产品线，为国内外多家服务器企业提供液冷等全方位的管理综合解决方案；\n3、公司VC产品在高速光模块中的市场化应用加速落地", "plates": ["光通信", "股权转让"], "limit_up_days": 1, "turnover_ratio": 2.08, "first_limit_up": 1786670700, "break_limit_up_times": 0}, {"code": "002628", "name": "成都路桥", "price": 5.56, "change_pct": 10.1, "reason": "成都优质基建企业；2025年7月，公司与深圳市优必选、中国民航正式签署战略合作框架协议，就具身智能机器人及人工智能技术在民航和泛交通行业落地应用进行深入合作探索，全资子公司四川成路智汇科技和优必选等联合成立锦程智行(成都)，锦程智行已获取订单并投入机场使用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.27, "first_limit_up": 1786688469, "break_limit_up_times": 0}, {"code": "603629", "name": "利通电子", "price": 137.5, "change_pct": 10.0, "reason": "公司直接运营的AI算力云规模已达38000P", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 18.83, "first_limit_up": 1786688383, "break_limit_up_times": 1}, {"code": "300862", "name": "蓝盾光电", "price": 47.29, "change_pct": 19.99, "reason": "公司拟购岚创科技控股权，押注光学元件", "plates": ["资产重组"], "limit_up_days": 5, "turnover_ratio": 51.69, "first_limit_up": 1786673637, "break_limit_up_times": 5}, {"code": "600198", "name": "大唐电信", "price": 7.84, "change_pct": 9.96, "reason": "1、中国信息通信科技集团旗下，聚焦集成电路设计和特种通信领域；公司是国内最早从事安全芯片设计的企业之一，二代身份证芯片、社保卡芯片、金融支付芯片等产品已广泛应用，与金融、社保、政府等行业客户形成良好合作关系；\n2、公司已布局低轨卫星通信领域，产品包括卫星通信终端、相控阵天线，成功进入卫星通信市场", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.13, "first_limit_up": 1786671383, "break_limit_up_times": 1}, {"code": "001260", "name": "坤泰股份", "price": 23.13, "change_pct": 9.99, "reason": "公司主营业务为汽车内饰件材料，主要产品包括汽车地毯和汽车脚垫两大类", "plates": ["其他"], "limit_up_days": 3, "turnover_ratio": 2.25, "first_limit_up": 1786670700, "break_limit_up_times": 0}, {"code": "000831", "name": "中国稀土", "price": 60.95, "change_pct": 10.0, "reason": "六大稀土集团之一中国五矿的唯一稀土上市平台", "plates": ["稀土磁材"], "limit_up_days": 1, "turnover_ratio": 8.54, "first_limit_up": 1786672401, "break_limit_up_times": 1}, {"code": "002820", "name": "桂发祥", "price": 10.14, "change_pct": 9.98, "reason": "中国麻花行业龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.88, "first_limit_up": 1786676844, "break_limit_up_times": 0}, {"code": "600613", "name": "神奇制药", "price": 6.41, "change_pct": 9.95, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 2.61, "first_limit_up": 1786670700, "break_limit_up_times": 0}, {"code": "002322", "name": "理工能科", "price": 13.05, "change_pct": 10.03, "reason": "1、公司上半年净利润同比增长9.6%，报告期内持续深耕于能源和环保领域，尤其是在数字化、智能化、绿色化发展方面加快了进程，软件与信息化业务的营业收入同比增长了13.44%；\n公司是国内电力信创龙头企业，是麒麟软件在电力系统唯一合作伙伴，基于麒麟软件深度开发电力系统国产软件，市占率超过80%；\n2、全国领先的地表水水质监测设备和运维厂商；公司自主研发的有机物污染土壤热脱附修复技术和重金属污染土壤固化稳定和修复技术，打造高效、精准的土壤治理整体解决方案", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 7.15, "first_limit_up": 1786671090, "break_limit_up_times": 2}, {"code": "603618", "name": "杭电股份", "price": 29.87, "change_pct": 10.02, "reason": "公司地处杭州，是国网杭州供电公司重要的电缆供应商和技术合作伙伴，具备光通信“光棒—光纤—光缆”一体化产业链，光缆产品通过参与电信运营商招投标实现销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 16.37, "first_limit_up": 1786674942, "break_limit_up_times": 3}, {"code": "600353", "name": "旭光电子", "price": 31.03, "change_pct": 10.0, "reason": "1）参股子公司储翰科技是一家专注于接入网光模块和光组件生产及销售的高新技术企业，拥有从芯片封装到光电器件到光电模块的垂直整合产品线；\n2）子公司成都旭瓷具备商用氮化铝全产业链的量产能力，产品涵盖氮化铝粉体(原粉，造粒粉，填料粉)、氮化铝基板、氮化铝结构件、氮化铝高温共烧陶瓷(HTCC)及高端功能器件(陶瓷管壳、加热器、光通信器件、TR组件)，产品被广泛应用于新能源汽车、半导体装备、大功率电力电子模块等高端制造领域，以及低轨卫星、船舶导航等国家战略场景", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.37, "first_limit_up": 1786685992, "break_limit_up_times": 0}, {"code": "603881", "name": "数据港", "price": 29.04, "change_pct": 10.0, "reason": "数据中心行业龙头企业，为客户提供完整的数据中心基础设施解决方案，是国内唯一一家同时服务于阿里巴巴、腾讯、百度和网易四大世界级互联网公司的数据中心运营商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 11.83, "first_limit_up": 1786686260, "break_limit_up_times": 0}, {"code": "603089", "name": "正裕工业", "price": 9.75, "change_pct": 10.05, "reason": "中国汽车零部件减震器行业龙头；公司丝杠产品研发中，设备全进口且与丝杠高度重合，有能力做丝杠", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.58, "first_limit_up": 1786673702, "break_limit_up_times": 2}, {"code": "002951", "name": "金时科技", "price": 18.14, "change_pct": 10.01, "reason": "1、公司通过智芯一号股权基金（持股99%）间接投资了苏州易缆微半导体技术有限公司；易缆微半导体是一家光纤通信产品研发生产商，致力于光纤通信系统、光网络系统、光电传感系统、物联网系统技术研究和试验发展及进出口业务；\n2、公司主营储能系统设备、混合储能系列、超级电容炭及储能消防装置，开发新型号产品(如3000F低内阻超级电容器)保持技术领先", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.06, "first_limit_up": 1786671210, "break_limit_up_times": 3}, {"code": "603330", "name": "天洋新材", "price": 10.68, "change_pct": 9.99, "reason": "公司电子胶板块光模块透镜固定用胶、底填胶等产品已经进入半导体及汽车电子领域小批量供货", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 5.87, "first_limit_up": 1786671047, "break_limit_up_times": 0}, {"code": "300404", "name": "博济医药", "price": 17.34, "change_pct": 20.0, "reason": "公司与深圳埃格林医药有限公司签订战略合作协议，未来将利用人工智能（AI）在临床试验领域展开战略合作，共同探索利用AI技术解决临床阶段高不确定性创新靶点的临床研究策略等方面的问题", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 27.53, "first_limit_up": 1786671318, "break_limit_up_times": 8}, {"code": "002989", "name": "中天精装", "price": 25.36, "change_pct": 10.02, "reason": "公司布局半导体行业的高端载板、存储封测及智能存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1786686990, "break_limit_up_times": 0}, {"code": "300017", "name": "网宿科技", "price": 17.33, "change_pct": 20.01, "reason": "1、子公司绿色云图自主研发的液冷技术，能够为企业提供更节能、高效的液冷数据中心建设及改造方案；\n2、公司为国内CDN标准牵头制定方，国内边缘计算龙头，正开发面向边缘计算的支撑平台", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 20.3, "first_limit_up": 1786688094, "break_limit_up_times": 0}, {"code": "300929", "name": "华骐环保", "price": 16.82, "change_pct": 19.97, "reason": "公司主要从事水环境治理业务，涵盖城镇污水和工业废水处理设施的新建及提标改造、村镇污水处理、黑臭水体治理等领域", "plates": ["环保"], "limit_up_days": 1, "turnover_ratio": 10.33, "first_limit_up": 1786684347, "break_limit_up_times": 0}, {"code": "002774", "name": "快意电梯", "price": 17.55, "change_pct": 10.03, "reason": "公司拥有乘客电梯、载货电梯、自动扶梯等全系列产品，产品行销全球60多个国家和地区", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1786671507, "break_limit_up_times": 0}, {"code": "002988", "name": "豪美新材", "price": 23.3, "change_pct": 10.01, "reason": "华南地区最具规模的汽车轻量化铝基新材料企业，前瞻布局人形机器人、低空飞行器、液冷散热器等新兴赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1786689249, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 11.83, "change_pct": 10.05, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.79, "first_limit_up": 1786689724, "break_limit_up_times": 0}, {"code": "002658", "name": "雪迪龙", "price": 8.23, "change_pct": 10.03, "reason": "1、国内环境监测和分析仪器龙头；公司拥有电力物联网全品类IoT数据采集设备，当前无线传感网络节点已达到8000万个；\n2、公司工业色谱仪已用于航天领域，检测液氢等火箭燃料杂质，服务商业航天", "plates": ["环保"], "limit_up_days": 1, "turnover_ratio": 6.41, "first_limit_up": 1786674273, "break_limit_up_times": 0}, {"code": "688485", "name": "九州一轨", "price": 72.1, "change_pct": 20.01, "reason": "1、轨道交通减振降噪行业龙头；公司收购苏州晶禧半导体100%股权事项已完成工商变更登记，依托其激光隐形切割技术向光纤及配套半导体器件加工领域延伸，核心业务包括激光隐形切割与AOI检测、分选等，已成功导入800G/1.6T光模块产线；\n2、公司成立通创九州金刚石提前布局契合国家战略的功能性金刚石蓝海市场", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 12.25, "first_limit_up": 1786675557, "break_limit_up_times": 2}, {"code": "002651", "name": "利君股份", "price": 8.39, "change_pct": 9.96, "reason": "全资子公司成都德坤航空设备制造有限公司主营航空航天零部件制造业务，德坤航空参与的长征系列火箭产品及朱雀系列火箭产品应用于商业航天领域", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1786671900, "break_limit_up_times": 0}, {"code": "603095", "name": "越剑智能", "price": 14.94, "change_pct": 10.01, "reason": "公司AI智能验布机深度融合华为ESIE算法模型与昇腾AI算力，验布速度可达60米/分钟，瑕疵检出率超90%，能精准识别针织、梭织等多场景面料瑕疵，还可通过边缘计算与云端协同实现质量追溯", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1786671342, "break_limit_up_times": 0}, {"code": "603382", "name": "海阳科技", "price": 20.94, "change_pct": 9.98, "reason": "国内尼龙6系列主要生产企业之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.05, "first_limit_up": 1786671878, "break_limit_up_times": 0}, {"code": "002645", "name": "华宏科技", "price": 21.48, "change_pct": 9.98, "reason": "公司生产的高性能磁材产品已经应用于新能源汽车电机、工业机器人电机、3C电子等高科技领域", "plates": ["稀土磁材"], "limit_up_days": 1, "turnover_ratio": 7.4, "first_limit_up": 1786687008, "break_limit_up_times": 0}, {"code": "688662", "name": "富信科技", "price": 98.4, "change_pct": 20.0, "reason": "在AI智算数据中心市场的驱动下，公司积极关注CPO新型封装技术的发展动态，已与光模块厂商就TEC在上述技术中的应用展开对接合作", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 15.52, "first_limit_up": 1786673746, "break_limit_up_times": 1}, {"code": "002081", "name": "金 螳 螂", "price": 5.29, "change_pct": 9.98, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 19.72, "first_limit_up": 1786673808, "break_limit_up_times": 1}, {"code": "603079", "name": "圣达生物", "price": 13.41, "change_pct": 10.01, "reason": "公司主要维生素产品生物素和叶酸", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1786675441, "break_limit_up_times": 1}, {"code": "603025", "name": "大豪科技", "price": 15.18, "change_pct": 10.0, "reason": "国内缝制、针织设备电控领域龙头，上半年净利润同比增长33.45%，报告期内，市场行情向好，缝制针纺电控收入都有不同程度的增加", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1786671044, "break_limit_up_times": 2}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};