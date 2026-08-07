const UPDATE_TIME = "2026-08-07 03:46";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 3.21,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 3.55,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.98,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续265天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": -0.5,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "存储芯片",
    "rise": 2.25,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续218天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "6G概念",
    "rise": 1.65,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电信ETF",
    "code": "886037"
  },
  {
    "name": "稀土永磁",
    "rise": 1.87,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "PET铜箔",
    "rise": 4.67,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "商业航天",
    "rise": 0.64,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续194天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": -0.49,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续129天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 0.68,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续429天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 0.66,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "青蒿素",
    "rise": 3.17,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "CRO概念",
    "rise": 5.31,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "先进封装",
    "rise": 2.65,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886009"
  },
  {
    "name": "机器人概念",
    "rise": 0.35,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续96天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "光纤概念",
    "rise": 1.91,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新未来LOF",
    "code": "886084"
  },
  {
    "name": "国家大基金持股",
    "rise": 2.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "黄金概念",
    "rise": 0.84,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "芯片概念",
    "rise": 1.24,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "高盛大幅上调AI服务器PCB和CCL预测 港股PCB概念股继续反弹",
    "desc": "",
    "heat": 605943,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "德福科技",
        "code": "301511",
        "chg": 15.571465
      }
    ]
  },
  {
    "title": "黄金跳涨，沉寂格局被谁打破？",
    "desc": "",
    "heat": 556057,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "宝鼎科技",
        "code": "002552",
        "chg": 10.006933
      }
    ]
  },
  {
    "title": "中信建投：CXO板块Beta稳中向好 26年国内CRO/CDMO新签订单及业绩会加速增长",
    "desc": "",
    "heat": 511775,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗",
      "实验猴"
    ],
    "stocks": [
      {
        "name": "近岸蛋白",
        "code": "688137",
        "chg": 20.010275
      }
    ]
  },
  {
    "title": "缺口超70%！磷化铟概念再度大涨，多家上市公司紧急提醒",
    "desc": "",
    "heat": 348398,
    "direction": "磷化铟",
    "themes": [
      "磷化铟",
      "金属铟"
    ],
    "stocks": [
      {
        "name": "云南锗业",
        "code": "002428",
        "chg": 10.002198
      }
    ]
  },
  {
    "title": "6G概念大涨！英伟达进入电信运营商市场？",
    "desc": "",
    "heat": 288663,
    "direction": "6G概念",
    "themes": [
      "6G概念"
    ],
    "stocks": [
      {
        "name": "博敏电子",
        "code": "603936",
        "chg": 10.013812
      }
    ]
  },
  {
    "title": "刚果（金）严控铜钴出口重塑全球供给格局：现货紧张难缓解 Q3钴价上行窗口打开(附概念股)",
    "desc": "",
    "heat": 181822,
    "direction": "有色金属",
    "themes": [
      "金属钼",
      "金属锌",
      "金属铜",
      "金属钴",
      "金属镍"
    ],
    "stocks": [
      {
        "name": "寒锐钴业",
        "code": "300618",
        "chg": 8.79056
      }
    ]
  },
  {
    "title": "工信部印发《民用爆炸物品行业安全发展“十五五”规划》",
    "desc": "",
    "heat": 151127,
    "direction": "民爆",
    "themes": [
      "民爆概念"
    ],
    "stocks": [
      {
        "name": "保利联合",
        "code": "002037",
        "chg": 10.014306
      }
    ]
  },
  {
    "title": "宇树科技发行价定了，150.8元/股，申购时间8月10日",
    "desc": "",
    "heat": 98740,
    "direction": "宇树机器人",
    "themes": [
      "宇树科技",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "一博科技",
        "code": "301366",
        "chg": 20.0045
      }
    ]
  },
  {
    "title": "网络安全审查办公室对派拓公司在华销售产品启动网络安全审查",
    "desc": "",
    "heat": 68651,
    "direction": "网络安全",
    "themes": [
      "网络安全"
    ],
    "stocks": [
      {
        "name": "飞乐音响",
        "code": "600651",
        "chg": 9.965636
      }
    ]
  },
  {
    "title": "DeepSeek预告全面上调API价格且涨幅较大",
    "desc": "",
    "heat": 57631,
    "direction": "算力租赁",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "一博科技",
        "code": "301366",
        "chg": 20.0045
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "铜箔/覆铜板",
    "change": "+5.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+5.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+5.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+4.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+4.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+4.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+4.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+4.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+4.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+3.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+3.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "金刚线",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+3.0%",
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
    "hot_rank": 2,
    "hot_rank_chg": 5,
    "stock_cnt": 5863,
    "price": "6.84",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "17226608000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.7
      },
      {
        "name": "工业大麻",
        "change_pct": 1.5
      },
      {
        "name": "中药",
        "change_pct": 1.72
      },
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "保健品",
        "change_pct": 1.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.98
      },
      {
        "name": "医药",
        "change_pct": 2.96
      },
      {
        "name": "化学原料药",
        "change_pct": 2.97
      },
      {
        "name": "流感",
        "change_pct": 2.0
      },
      {
        "name": "振兴东北",
        "change_pct": -0.37
      },
      {
        "name": "食品",
        "change_pct": 0.24
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 8,
    "hot_rank_chg": 6,
    "stock_cnt": 5863,
    "price": "11.42",
    "change": "4.29",
    "market_id": "33",
    "circulate_market_value": "3248780000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.27
      },
      {
        "name": "密集调研",
        "change_pct": 2.45
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.45
      },
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "教育",
        "change_pct": -0.93
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.58
      },
      {
        "name": "职业教育",
        "change_pct": -0.79
      },
      {
        "name": "在线教育",
        "change_pct": -0.49
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.42
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      },
      {
        "name": "智谱AI",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 13,
    "hot_rank_chg": 75,
    "stock_cnt": 5863,
    "price": "6.90",
    "change": "-6.25",
    "market_id": "33",
    "circulate_market_value": "8051223100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.96
      },
      {
        "name": "国产软件",
        "change_pct": -1.3
      },
      {
        "name": "一带一路",
        "change_pct": -0.09
      },
      {
        "name": "量子通信",
        "change_pct": 0.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "网络安全",
        "change_pct": -1.5
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.58
      },
      {
        "name": "物联网",
        "change_pct": -0.44
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "破净股",
        "change_pct": -0.87
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "国产芯片",
        "change_pct": 1.33
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.71
      },
      {
        "name": "信创",
        "change_pct": -1.33
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.72
      },
      {
        "name": "跨境支付",
        "change_pct": -2.54
      },
      {
        "name": "web3.0",
        "change_pct": -0.83
      },
      {
        "name": "数字人民币",
        "change_pct": -1.97
      },
      {
        "name": "智慧政务",
        "change_pct": -1.21
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.42
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -1.55
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.55
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.4
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      },
      {
        "name": "回购",
        "change_pct": 0.58
      },
      {
        "name": "智能电网",
        "change_pct": -0.5
      },
      {
        "name": "低空经济",
        "change_pct": -0.02
      },
      {
        "name": "量子计算",
        "change_pct": 0.4
      },
      {
        "name": "财税改革",
        "change_pct": -2.47
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.87
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 15,
    "hot_rank_chg": 32,
    "stock_cnt": 5863,
    "price": "10.54",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4053132100.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "CRO",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 4.31
      },
      {
        "name": "股权转让",
        "change_pct": 0.1
      },
      {
        "name": "新疆概念",
        "change_pct": 0.02
      },
      {
        "name": "医药",
        "change_pct": 2.96
      },
      {
        "name": "流感",
        "change_pct": 2.0
      },
      {
        "name": "国资入股",
        "change_pct": 0.4
      },
      {
        "name": "减肥药",
        "change_pct": 4.87
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 21,
    "hot_rank_chg": 1,
    "stock_cnt": 5863,
    "price": "12.79",
    "change": "4.92",
    "market_id": "33",
    "circulate_market_value": "11937208600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.21
      },
      {
        "name": "新疆概念",
        "change_pct": 0.02
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "风电",
        "change_pct": 0.34
      },
      {
        "name": "储能",
        "change_pct": 0.15
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 23,
    "hot_rank_chg": 11,
    "stock_cnt": 5863,
    "price": "6.44",
    "change": "-10.06",
    "market_id": "17",
    "circulate_market_value": "7333597000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.09
      },
      {
        "name": "光伏",
        "change_pct": 0.69
      },
      {
        "name": "特高压",
        "change_pct": -0.1
      },
      {
        "name": "智能电网",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 25,
    "hot_rank_chg": 73,
    "stock_cnt": 5863,
    "price": "3.23",
    "change": "9.86",
    "market_id": "33",
    "circulate_market_value": "8589792900.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.44
      },
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.59
      },
      {
        "name": "低价股",
        "change_pct": -0.86
      },
      {
        "name": "数字人民币",
        "change_pct": -1.97
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 32,
    "hot_rank_chg": -13,
    "stock_cnt": 5863,
    "price": "6.06",
    "change": "1.68",
    "market_id": "33",
    "circulate_market_value": "214324830000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 2.45
      },
      {
        "name": "折叠屏",
        "change_pct": 1.83
      },
      {
        "name": "手机产业链",
        "change_pct": 1.42
      },
      {
        "name": "超高清视频",
        "change_pct": 0.1
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.87
      },
      {
        "name": "电竞",
        "change_pct": -0.48
      },
      {
        "name": "半导体",
        "change_pct": 1.92
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.27
      },
      {
        "name": "VR&AR",
        "change_pct": 0.39
      },
      {
        "name": "OLED",
        "change_pct": 1.5
      },
      {
        "name": "京津冀",
        "change_pct": -0.63
      },
      {
        "name": "物联网",
        "change_pct": -0.44
      },
      {
        "name": "指纹识别",
        "change_pct": 1.04
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.11
      },
      {
        "name": "白马股",
        "change_pct": 0.11
      },
      {
        "name": "智能制造",
        "change_pct": 0.26
      },
      {
        "name": "小米概念股",
        "change_pct": 0.88
      },
      {
        "name": "国产芯片",
        "change_pct": 1.33
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.45
      },
      {
        "name": "全息概念",
        "change_pct": -0.1
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.27
      },
      {
        "name": "MicroLED",
        "change_pct": 1.89
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.95
      },
      {
        "name": "智能手表",
        "change_pct": 0.76
      },
      {
        "name": "MiniLED",
        "change_pct": 2.15
      },
      {
        "name": "传感器",
        "change_pct": 1.05
      },
      {
        "name": "大硅片",
        "change_pct": 1.67
      },
      {
        "name": "AI PC",
        "change_pct": 1.01
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      },
      {
        "name": "回购",
        "change_pct": 0.58
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.18
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.79
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 33,
    "hot_rank_chg": -5,
    "stock_cnt": 5863,
    "price": "8.04",
    "change": "-0.74",
    "market_id": "33",
    "circulate_market_value": "13070578000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.7
      },
      {
        "name": "电竞",
        "change_pct": -0.48
      },
      {
        "name": "手游",
        "change_pct": -1.11
      },
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "游戏",
        "change_pct": -1.0
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.71
      },
      {
        "name": "快手概念股",
        "change_pct": -0.6
      },
      {
        "name": "元宇宙",
        "change_pct": -0.62
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.95
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.38
      },
      {
        "name": "web3.0",
        "change_pct": -0.83
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.88
      },
      {
        "name": "数据要素",
        "change_pct": -1.16
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.61
      },
      {
        "name": "AI营销",
        "change_pct": -0.38
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.8
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.18
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.85
      },
      {
        "name": "人形机器人",
        "change_pct": 0.84
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.11
      },
      {
        "name": "多模态",
        "change_pct": -0.27
      },
      {
        "name": "AI视频",
        "change_pct": -0.72
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.72
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 35,
    "hot_rank_chg": 84,
    "stock_cnt": 5863,
    "price": "11.10",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "5670755200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "6G预研",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": 1.42
      },
      {
        "name": "5G",
        "change_pct": 1.27
      },
      {
        "name": "光通信",
        "change_pct": 2.16
      },
      {
        "name": "教育",
        "change_pct": -0.93
      },
      {
        "name": "毫米波通信",
        "change_pct": 2.04
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.55
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.55
      },
      {
        "name": "5.5G概念",
        "change_pct": 1.14
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 45,
    "hot_rank_chg": -21,
    "stock_cnt": 5863,
    "price": "5.40",
    "change": "-1.46",
    "market_id": "33",
    "circulate_market_value": "31615912000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.08
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "水利",
        "change_pct": -0.51
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.65
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "园林",
        "change_pct": 0.55
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 0.88
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.71
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.27
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.01
      },
      {
        "name": "快手概念股",
        "change_pct": -0.6
      },
      {
        "name": "IGBT",
        "change_pct": 1.33
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.95
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.88
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.61
      },
      {
        "name": "氮化镓",
        "change_pct": 1.63
      },
      {
        "name": "AI营销",
        "change_pct": -0.38
      },
      {
        "name": "多模态",
        "change_pct": -0.27
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.47
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.02
      },
      {
        "name": "区块链",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 46,
    "hot_rank_chg": 21,
    "stock_cnt": 5863,
    "price": "3.54",
    "change": "-7.33",
    "market_id": "33",
    "circulate_market_value": "3257458200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -1.11
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.45
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "VR&AR",
        "change_pct": 0.39
      },
      {
        "name": "游戏",
        "change_pct": -1.0
      },
      {
        "name": "动漫",
        "change_pct": -1.57
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.71
      },
      {
        "name": "快手概念股",
        "change_pct": -0.6
      },
      {
        "name": "NFT",
        "change_pct": -0.79
      },
      {
        "name": "元宇宙",
        "change_pct": -0.62
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.95
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.61
      },
      {
        "name": "云游戏",
        "change_pct": -0.51
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "002649",
    "name": "博彦科技",
    "hot_rank": 49,
    "hot_rank_chg": 54,
    "stock_cnt": 5863,
    "price": "10.48",
    "change": "-7.17",
    "market_id": "33",
    "circulate_market_value": "5621105900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.7
      },
      {
        "name": "国产软件",
        "change_pct": -1.3
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.13
      },
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "物联网",
        "change_pct": -0.44
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "智慧城市",
        "change_pct": -0.56
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "百度概念股",
        "change_pct": -0.79
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.71
      },
      {
        "name": "信创",
        "change_pct": -1.33
      },
      {
        "name": "跨境支付",
        "change_pct": -2.54
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.88
      },
      {
        "name": "数据要素",
        "change_pct": -1.16
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.61
      },
      {
        "name": "数字人民币",
        "change_pct": -1.97
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.42
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.8
      },
      {
        "name": "智谱AI",
        "change_pct": -0.85
      },
      {
        "name": "区块链",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "603106",
    "name": "恒银科技",
    "hot_rank": 57,
    "hot_rank_chg": -19,
    "stock_cnt": 5863,
    "price": "9.04",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "4705500800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "人脸识别",
        "change_pct": -0.77
      },
      {
        "name": "智慧停车",
        "change_pct": -0.5
      },
      {
        "name": "雄安新区",
        "change_pct": -0.41
      },
      {
        "name": "信创",
        "change_pct": -1.33
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.95
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.88
      },
      {
        "name": "智慧政务",
        "change_pct": -1.21
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 65,
    "hot_rank_chg": 40,
    "stock_cnt": 5863,
    "price": "11.00",
    "change": "-6.46",
    "market_id": "33",
    "circulate_market_value": "6596810000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.09
      },
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "移动支付",
        "change_pct": -1.85
      },
      {
        "name": "物联网",
        "change_pct": -0.44
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "电子身份证",
        "change_pct": -1.69
      },
      {
        "name": "ETC",
        "change_pct": -0.92
      },
      {
        "name": "数字人民币",
        "change_pct": -1.97
      },
      {
        "name": "智慧政务",
        "change_pct": -1.21
      },
      {
        "name": "eSIM",
        "change_pct": -1.62
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      },
      {
        "name": "区块链",
        "change_pct": -1.31
      },
      {
        "name": "RWA",
        "change_pct": -1.81
      }
    ]
  },
  {
    "code": "000839",
    "name": "国安股份",
    "hot_rank": 66,
    "hot_rank_chg": 49,
    "stock_cnt": 5863,
    "price": "2.94",
    "change": "-6.37",
    "market_id": "33",
    "circulate_market_value": "11524289500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -1.21
      },
      {
        "name": "央企改革",
        "change_pct": -0.32
      },
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 68,
    "hot_rank_chg": 45,
    "stock_cnt": 5863,
    "price": "6.37",
    "change": "-0.62",
    "market_id": "17",
    "circulate_market_value": "15229475000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.99
      },
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "国企改革",
        "change_pct": -0.38
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "600326",
    "name": "西藏天路",
    "hot_rank": 74,
    "hot_rank_chg": 175,
    "stock_cnt": 5863,
    "price": "7.52",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "10245732500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.09
      },
      {
        "name": "水泥",
        "change_pct": -0.51
      },
      {
        "name": "西藏概念",
        "change_pct": 0.97
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.12
      },
      {
        "name": "有色 · 钼",
        "change_pct": 1.92
      },
      {
        "name": "有色金属",
        "change_pct": 1.6
      },
      {
        "name": "大基建",
        "change_pct": -0.68
      },
      {
        "name": "西部大开发",
        "change_pct": -0.19
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 81,
    "hot_rank_chg": -32,
    "stock_cnt": 5863,
    "price": "11.85",
    "change": "1.28",
    "market_id": "33",
    "circulate_market_value": "9586875000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.71
      },
      {
        "name": "大飞机",
        "change_pct": 0.17
      },
      {
        "name": "北斗导航",
        "change_pct": 0.14
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.07
      },
      {
        "name": "军民融合",
        "change_pct": 0.26
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.05
      },
      {
        "name": "军工",
        "change_pct": 0.07
      },
      {
        "name": "碳纤维",
        "change_pct": 0.48
      },
      {
        "name": "无人机",
        "change_pct": 0.11
      },
      {
        "name": "航天",
        "change_pct": 0.88
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.55
      },
      {
        "name": "低空经济",
        "change_pct": -0.02
      },
      {
        "name": "海洋经济",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 82,
    "hot_rank_chg": -25,
    "stock_cnt": 5863,
    "price": "12.07",
    "change": "2.81",
    "market_id": "17",
    "circulate_market_value": "15488207000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.08
      },
      {
        "name": "强势人气股",
        "change_pct": 1.18
      },
      {
        "name": "智能制造",
        "change_pct": 0.26
      },
      {
        "name": "工业互联网",
        "change_pct": -0.49
      },
      {
        "name": "培育钻石",
        "change_pct": 1.67
      },
      {
        "name": "金刚线",
        "change_pct": 3.06
      },
      {
        "name": "国资入股",
        "change_pct": 0.4
      },
      {
        "name": "深地经济",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "003040",
    "name": "楚天龙",
    "hot_rank": 85,
    "hot_rank_chg": 104,
    "stock_cnt": 5863,
    "price": "12.67",
    "change": "1.69",
    "market_id": "33",
    "circulate_market_value": "5788292800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.96
      },
      {
        "name": "金融科技",
        "change_pct": -1.96
      },
      {
        "name": "人工智能",
        "change_pct": -0.16
      },
      {
        "name": "物联网",
        "change_pct": -0.44
      },
      {
        "name": "数字经济",
        "change_pct": -1.08
      },
      {
        "name": "国产操作系统",
        "change_pct": -1.35
      },
      {
        "name": "电子身份证",
        "change_pct": -1.69
      },
      {
        "name": "数字人民币",
        "change_pct": -1.97
      },
      {
        "name": "智慧政务",
        "change_pct": -1.21
      },
      {
        "name": "eSIM",
        "change_pct": -1.62
      },
      {
        "name": "区块链",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 89,
    "hot_rank_chg": -8,
    "stock_cnt": 5863,
    "price": "4.12",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "2304396500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.27
      },
      {
        "name": "手游",
        "change_pct": -1.11
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.45
      },
      {
        "name": "游戏",
        "change_pct": -1.0
      },
      {
        "name": "影视",
        "change_pct": -1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "600601",
    "name": "方正科技",
    "hot_rank": 91,
    "hot_rank_chg": -29,
    "stock_cnt": 5863,
    "price": "12.87",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "53671675000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "PCB",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.32
      },
      {
        "name": "光通信",
        "change_pct": 2.16
      },
      {
        "name": "PCB板",
        "change_pct": 5.25
      },
      {
        "name": "智慧城市",
        "change_pct": -0.56
      },
      {
        "name": "电子发票",
        "change_pct": -1.47
      },
      {
        "name": "华为产业链",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "600611",
    "name": "大众交通",
    "hot_rank": 96,
    "hot_rank_chg": -13,
    "stock_cnt": 5863,
    "price": "4.60",
    "change": "-5.93",
    "market_id": "17",
    "circulate_market_value": "7191255300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.13
      },
      {
        "name": "共享经济",
        "change_pct": -0.92
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.58
      },
      {
        "name": "旅游",
        "change_pct": -0.49
      },
      {
        "name": "物业管理",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 100,
    "hot_rank_chg": -26,
    "stock_cnt": 5863,
    "price": "7.23",
    "change": "-0.69",
    "market_id": "17",
    "circulate_market_value": "14773321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.89
      },
      {
        "name": "军民融合",
        "change_pct": 0.26
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.43
      },
      {
        "name": "烧碱",
        "change_pct": -0.02
      },
      {
        "name": "军工",
        "change_pct": 0.07
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.28
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.73
      },
      {
        "name": "氟化工",
        "change_pct": -0.05
      },
      {
        "name": "双氧水",
        "change_pct": -0.13
      },
      {
        "name": "液氯",
        "change_pct": -0.74
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002428", "name": "云南锗业", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "100.08", "change": "10.00", "market_id": "33", "circulate_market_value": "65355805000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "磷化铟"}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "6.84", "change": "9.97", "market_id": "17", "circulate_market_value": "17226608000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.7}, {"name": "工业大麻", "change_pct": 1.5}, {"name": "中药", "change_pct": 1.72}, {"name": "强势人气股", "change_pct": 1.18}, {"name": "保健品", "change_pct": 1.14}, {"name": "民营医院", "change_pct": 0.98}, {"name": "医药", "change_pct": 2.96}, {"name": "化学原料药", "change_pct": 2.97}, {"name": "流感", "change_pct": 2.0}, {"name": "振兴东北", "change_pct": -0.37}, {"name": "食品", "change_pct": 0.24}]}, {"code": "002792", "name": "通宇通讯", "hot_rank": 3, "hot_rank_chg": 17, "stock_cnt": 5863, "price": "37.19", "change": "10.00", "market_id": "33", "circulate_market_value": "12563692500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "拟入股佳贤通信"}, {"code": "002407", "name": "多氟多", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "36.26", "change": "0.47", "market_id": "33", "circulate_market_value": "39116104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5863, "price": "24.34", "change": "-1.81", "market_id": "17", "circulate_market_value": "5896851800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 6, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "76.77", "change": "1.19", "market_id": "17", "circulate_market_value": "137373360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "48.17", "change": "10.00", "market_id": "17", "circulate_market_value": "40778474000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半年报增长"}, {"code": "003032", "name": "传智教育", "hot_rank": 8, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "11.42", "change": "4.29", "market_id": "33", "circulate_market_value": "3248780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.27}, {"name": "密集调研", "change_pct": 2.45}, {"name": "ST摘帽", "change_pct": -0.45}, {"name": "强势人气股", "change_pct": 1.18}, {"name": "教育", "change_pct": -0.93}, {"name": "阿里巴巴概念股", "change_pct": -0.58}, {"name": "职业教育", "change_pct": -0.79}, {"name": "在线教育", "change_pct": -0.49}, {"name": "华为鸿蒙", "change_pct": -1.42}, {"name": "华为产业链", "change_pct": 0.22}, {"name": "智谱AI", "change_pct": -0.85}]}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "57.25", "change": "-1.77", "market_id": "33", "circulate_market_value": "66238981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "977.45", "change": "2.35", "market_id": "33", "circulate_market_value": "1084910640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 11, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "51.93", "change": "-0.06", "market_id": "17", "circulate_market_value": "233842810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603799", "name": "华友钴业", "hot_rank": 12, "hot_rank_chg": 137, "stock_cnt": 5863, "price": "43.66", "change": "5.46", "market_id": "17", "circulate_market_value": "82412930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 13, "hot_rank_chg": 75, "stock_cnt": 5863, "price": "6.90", "change": "-6.25", "market_id": "33", "circulate_market_value": "8051223100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.96}, {"name": "国产软件", "change_pct": -1.3}, {"name": "一带一路", "change_pct": -0.09}, {"name": "量子通信", "change_pct": 0.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "网络安全", "change_pct": -1.5}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "物联网", "change_pct": -0.44}, {"name": "大数据", "change_pct": -1.14}, {"name": "破净股", "change_pct": -0.87}, {"name": "数字经济", "change_pct": -1.08}, {"name": "国产芯片", "change_pct": 1.33}, {"name": "阿里巴巴概念股", "change_pct": -0.58}, {"name": "腾讯概念股", "change_pct": -0.71}, {"name": "信创", "change_pct": -1.33}, {"name": "华为昇腾", "change_pct": -0.72}, {"name": "跨境支付", "change_pct": -2.54}, {"name": "web3.0", "change_pct": -0.83}, {"name": "数字人民币", "change_pct": -1.97}, {"name": "智慧政务", "change_pct": -1.21}, {"name": "华为鸿蒙", "change_pct": -1.42}, {"name": "华为云·鲲鹏", "change_pct": -1.55}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "智慧灯杆", "change_pct": -0.4}, {"name": "华为产业链", "change_pct": 0.22}, {"name": "回购", "change_pct": 0.58}, {"name": "智能电网", "change_pct": -0.5}, {"name": "低空经济", "change_pct": -0.02}, {"name": "量子计算", "change_pct": 0.4}, {"name": "财税改革", "change_pct": -2.47}, {"name": "DeepSeek概念股", "change_pct": -0.87}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 14, "hot_rank_chg": 34, "stock_cnt": 5863, "price": "94.95", "change": "10.00", "market_id": "17", "circulate_market_value": "93232689000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI算力PCB"}, {"code": "600721", "name": "百花医药", "hot_rank": 15, "hot_rank_chg": 32, "stock_cnt": 5863, "price": "10.54", "change": "10.02", "market_id": "17", "circulate_market_value": "4053132100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 4.31}, {"name": "股权转让", "change_pct": 0.1}, {"name": "新疆概念", "change_pct": 0.02}, {"name": "医药", "change_pct": 2.96}, {"name": "流感", "change_pct": 2.0}, {"name": "国资入股", "change_pct": 0.4}, {"name": "减肥药", "change_pct": 4.87}]}, {"code": "600397", "name": "江钨装备", "hot_rank": 16, "hot_rank_chg": 20, "stock_cnt": 5863, "price": "18.05", "change": "6.87", "market_id": "17", "circulate_market_value": "17868776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 17, "hot_rank_chg": 39, "stock_cnt": 5863, "price": "53.18", "change": "8.00", "market_id": "33", "circulate_market_value": "14677612000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 18, "hot_rank_chg": -1, "stock_cnt": 5863, "price": "17.69", "change": "2.49", "market_id": "33", "circulate_market_value": "58777710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5863, "price": "410.81", "change": "6.70", "market_id": "17", "circulate_market_value": "274623170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 20, "hot_rank_chg": 26, "stock_cnt": 5863, "price": "95.07", "change": "10.00", "market_id": "17", "circulate_market_value": "21360198000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "TGV玻璃基板"}, {"code": "001258", "name": "立新能源", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5863, "price": "12.79", "change": "4.92", "market_id": "33", "circulate_market_value": "11937208600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.18}, {"name": "新疆国企改革", "change_pct": -0.21}, {"name": "新疆概念", "change_pct": 0.02}, {"name": "光伏", "change_pct": 0.69}, {"name": "风电", "change_pct": 0.34}, {"name": "储能", "change_pct": 0.15}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "603823", "name": "百合花", "hot_rank": 22, "hot_rank_chg": 10, "stock_cnt": 5863, "price": "65.09", "change": "-2.56", "market_id": "17", "circulate_market_value": "27101374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 23, "hot_rank_chg": 11, "stock_cnt": 5863, "price": "6.44", "change": "-10.06", "market_id": "17", "circulate_market_value": "7333597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.09}, {"name": "光伏", "change_pct": 0.69}, {"name": "特高压", "change_pct": -0.1}, {"name": "智能电网", "change_pct": -0.5}]}, {"code": "600667", "name": "太极实业", "hot_rank": 24, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "19.49", "change": "1.67", "market_id": "17", "circulate_market_value": "40764157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002721", "name": "金一文化", "hot_rank": 25, "hot_rank_chg": 73, "stock_cnt": 5863, "price": "3.23", "change": "9.86", "market_id": "33", "circulate_market_value": "8589792900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.44}, {"name": "金融科技", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "珠宝饰品", "change_pct": -0.59}, {"name": "低价股", "change_pct": -0.86}, {"name": "数字人民币", "change_pct": -1.97}]}, {"code": "002384", "name": "东山精密", "hot_rank": 26, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "196.96", "change": "4.95", "market_id": "33", "circulate_market_value": "273049930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 27, "hot_rank_chg": -11, "stock_cnt": 5863, "price": "65.53", "change": "4.85", "market_id": "33", "circulate_market_value": "95244710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 28, "hot_rank_chg": -17, "stock_cnt": 5863, "price": "59.34", "change": "5.68", "market_id": "17", "circulate_market_value": "145599370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 29, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "37.57", "change": "-0.97", "market_id": "33", "circulate_market_value": "107452930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 30, "hot_rank_chg": 54, "stock_cnt": 5863, "price": "47.60", "change": "10.01", "market_id": "33", "circulate_market_value": "17540757000.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "覆铜板"}, {"code": "002703", "name": "浙江世宝", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5863, "price": "15.27", "change": "-6.61", "market_id": "33", "circulate_market_value": "8948954100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 32, "hot_rank_chg": -13, "stock_cnt": 5863, "price": "6.06", "change": "1.68", "market_id": "33", "circulate_market_value": "214324830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 2.45}, {"name": "折叠屏", "change_pct": 1.83}, {"name": "手机产业链", "change_pct": 1.42}, {"name": "超高清视频", "change_pct": 0.1}, {"name": "苹果产业链", "change_pct": 1.87}, {"name": "电竞", "change_pct": -0.48}, {"name": "半导体", "change_pct": 1.92}, {"name": "人工智能", "change_pct": -0.16}, {"name": "互联网医疗", "change_pct": 0.27}, {"name": "VR&AR", "change_pct": 0.39}, {"name": "OLED", "change_pct": 1.5}, {"name": "京津冀", "change_pct": -0.63}, {"name": "物联网", "change_pct": -0.44}, {"name": "指纹识别", "change_pct": 1.04}, {"name": "汽车零部件", "change_pct": -0.11}, {"name": "白马股", "change_pct": 0.11}, {"name": "智能制造", "change_pct": 0.26}, {"name": "小米概念股", "change_pct": 0.88}, {"name": "国产芯片", "change_pct": 1.33}, {"name": "液晶面板/LCD", "change_pct": 1.45}, {"name": "全息概念", "change_pct": -0.1}, {"name": "理想汽车概念股", "change_pct": 0.27}, {"name": "MicroLED", "change_pct": 1.89}, {"name": "钙钛矿电池", "change_pct": 0.95}, {"name": "智能手表", "change_pct": 0.76}, {"name": "MiniLED", "change_pct": 2.15}, {"name": "传感器", "change_pct": 1.05}, {"name": "大硅片", "change_pct": 1.67}, {"name": "AI PC", "change_pct": 1.01}, {"name": "华为产业链", "change_pct": 0.22}, {"name": "回购", "change_pct": 0.58}, {"name": "智能眼镜/MR头显", "change_pct": 1.18}, {"name": "玻璃基板封装", "change_pct": 2.79}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5863, "price": "8.04", "change": "-0.74", "market_id": "33", "circulate_market_value": "13070578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.7}, {"name": "电竞", "change_pct": -0.48}, {"name": "手游", "change_pct": -1.11}, {"name": "强势人气股", "change_pct": 1.18}, {"name": "人工智能", "change_pct": -0.16}, {"name": "游戏", "change_pct": -1.0}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.08}, {"name": "腾讯概念股", "change_pct": -0.71}, {"name": "快手概念股", "change_pct": -0.6}, {"name": "元宇宙", "change_pct": -0.62}, {"name": "虚拟数字人", "change_pct": -0.95}, {"name": "东数西算/算力", "change_pct": -0.38}, {"name": "web3.0", "change_pct": -0.83}, {"name": "AIGC概念", "change_pct": -0.88}, {"name": "数据要素", "change_pct": -1.16}, {"name": "字节跳动概念股", "change_pct": -0.61}, {"name": "AI营销", "change_pct": -0.38}, {"name": "ChatGPT", "change_pct": -0.8}, {"name": "智能眼镜/MR头显", "change_pct": 1.18}, {"name": "人工智能大模型", "change_pct": -0.85}, {"name": "人形机器人", "change_pct": 0.84}, {"name": "短剧/互动影游", "change_pct": -1.11}, {"name": "多模态", "change_pct": -0.27}, {"name": "AI视频", "change_pct": -0.72}, {"name": "IP经济/谷子经济", "change_pct": -0.72}, {"name": "小红书概念股", "change_pct": -0.02}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5863, "price": "43.36", "change": "6.33", "market_id": "17", "circulate_market_value": "172208010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 35, "hot_rank_chg": 84, "stock_cnt": 5863, "price": "11.10", "change": "10.01", "market_id": "33", "circulate_market_value": "5670755200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": 1.42}, {"name": "5G", "change_pct": 1.27}, {"name": "光通信", "change_pct": 2.16}, {"name": "教育", "change_pct": -0.93}, {"name": "毫米波通信", "change_pct": 2.04}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "华为产业链", "change_pct": 0.22}, {"name": "毫米波雷达", "change_pct": 1.55}, {"name": "5.5G概念", "change_pct": 1.14}]}, {"code": "002971", "name": "和远气体", "hot_rank": 36, "hot_rank_chg": 55, "stock_cnt": 5863, "price": "45.38", "change": "10.01", "market_id": "33", "circulate_market_value": "7306386300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "电子特气"}, {"code": "603629", "name": "利通电子", "hot_rank": 37, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "125.99", "change": "2.83", "market_id": "17", "circulate_market_value": "45447541000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 38, "hot_rank_chg": -17, "stock_cnt": 5863, "price": "17.63", "change": "1.61", "market_id": "17", "circulate_market_value": "25963821000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 39, "hot_rank_chg": 24, "stock_cnt": 5863, "price": "139.98", "change": "10.00", "market_id": "17", "circulate_market_value": "337596610000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI覆铜板"}, {"code": "300502", "name": "新易盛", "hot_rank": 40, "hot_rank_chg": 5, "stock_cnt": 5863, "price": "440.23", "change": "4.35", "market_id": "33", "circulate_market_value": "552155470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 41, "hot_rank_chg": -15, "stock_cnt": 5863, "price": "68.42", "change": "0.22", "market_id": "17", "circulate_market_value": "1357732800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 42, "hot_rank_chg": -19, "stock_cnt": 5863, "price": "400.80", "change": "3.23", "market_id": "33", "circulate_market_value": "66143925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 43, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "34.93", "change": "1.25", "market_id": "17", "circulate_market_value": "719620630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 44, "hot_rank_chg": -7, "stock_cnt": 5863, "price": "151.28", "change": "6.01", "market_id": "17", "circulate_market_value": "374157840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 45, "hot_rank_chg": -21, "stock_cnt": 5863, "price": "5.40", "change": "-1.46", "market_id": "33", "circulate_market_value": "31615912000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.08}, {"name": "人工智能", "change_pct": -0.16}, {"name": "水利", "change_pct": -0.51}, {"name": "直播/短视频", "change_pct": -0.65}, {"name": "大数据", "change_pct": -1.14}, {"name": "园林", "change_pct": 0.55}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 0.88}, {"name": "数字经济", "change_pct": -1.08}, {"name": "腾讯概念股", "change_pct": -0.71}, {"name": "理想汽车概念股", "change_pct": 0.27}, {"name": "第三代半导体", "change_pct": 2.01}, {"name": "快手概念股", "change_pct": -0.6}, {"name": "IGBT", "change_pct": 1.33}, {"name": "虚拟数字人", "change_pct": -0.95}, {"name": "AIGC概念", "change_pct": -0.88}, {"name": "字节跳动概念股", "change_pct": -0.61}, {"name": "氮化镓", "change_pct": 1.63}, {"name": "AI营销", "change_pct": -0.38}, {"name": "多模态", "change_pct": -0.27}, {"name": "液冷服务器", "change_pct": 1.47}, {"name": "小红书概念股", "change_pct": -0.02}, {"name": "区块链", "change_pct": -1.31}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 46, "hot_rank_chg": 21, "stock_cnt": 5863, "price": "3.54", "change": "-7.33", "market_id": "33", "circulate_market_value": "3257458200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -1.11}, {"name": "ST摘帽", "change_pct": -0.45}, {"name": "人工智能", "change_pct": -0.16}, {"name": "VR&AR", "change_pct": 0.39}, {"name": "游戏", "change_pct": -1.0}, {"name": "动漫", "change_pct": -1.57}, {"name": "腾讯概念股", "change_pct": -0.71}, {"name": "快手概念股", "change_pct": -0.6}, {"name": "NFT", "change_pct": -0.79}, {"name": "元宇宙", "change_pct": -0.62}, {"name": "虚拟数字人", "change_pct": -0.95}, {"name": "字节跳动概念股", "change_pct": -0.61}, {"name": "云游戏", "change_pct": -0.51}, {"name": "IP经济/谷子经济", "change_pct": -0.72}]}, {"code": "002156", "name": "通富微电", "hot_rank": 47, "hot_rank_chg": -22, "stock_cnt": 5863, "price": "61.80", "change": "1.38", "market_id": "33", "circulate_market_value": "93778547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 48, "hot_rank_chg": -18, "stock_cnt": 5863, "price": "39.18", "change": "2.08", "market_id": "17", "circulate_market_value": "57280956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002649", "name": "博彦科技", "hot_rank": 49, "hot_rank_chg": 54, "stock_cnt": 5863, "price": "10.48", "change": "-7.17", "market_id": "33", "circulate_market_value": "5621105900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.7}, {"name": "国产软件", "change_pct": -1.3}, {"name": "无人驾驶", "change_pct": 0.13}, {"name": "金融科技", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "物联网", "change_pct": -0.44}, {"name": "大数据", "change_pct": -1.14}, {"name": "智慧城市", "change_pct": -0.56}, {"name": "数字经济", "change_pct": -1.08}, {"name": "百度概念股", "change_pct": -0.79}, {"name": "阿里巴巴概念股", "change_pct": -0.58}, {"name": "腾讯概念股", "change_pct": -0.71}, {"name": "信创", "change_pct": -1.33}, {"name": "跨境支付", "change_pct": -2.54}, {"name": "AIGC概念", "change_pct": -0.88}, {"name": "数据要素", "change_pct": -1.16}, {"name": "字节跳动概念股", "change_pct": -0.61}, {"name": "数字人民币", "change_pct": -1.97}, {"name": "华为鸿蒙", "change_pct": -1.42}, {"name": "ChatGPT", "change_pct": -0.8}, {"name": "智谱AI", "change_pct": -0.85}, {"name": "区块链", "change_pct": -1.31}]}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 50, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "36.29", "change": "0.17", "market_id": "17", "circulate_market_value": "56526484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 51, "hot_rank_chg": 18, "stock_cnt": 5863, "price": "193.04", "change": "10.00", "market_id": "33", "circulate_market_value": "151793230000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块"}, {"code": "300017", "name": "网宿科技", "hot_rank": 52, "hot_rank_chg": 338, "stock_cnt": 5863, "price": "15.38", "change": "4.41", "market_id": "33", "circulate_market_value": "36396302000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 53, "hot_rank_chg": 17, "stock_cnt": 5863, "price": "20.72", "change": "1.72", "market_id": "17", "circulate_market_value": "361788650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 54, "hot_rank_chg": 14, "stock_cnt": 5863, "price": "35.16", "change": "2.84", "market_id": "17", "circulate_market_value": "13559006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600363", "name": "联创光电", "hot_rank": 55, "hot_rank_chg": 57, "stock_cnt": 5863, "price": "22.47", "change": "1.31", "market_id": "17", "circulate_market_value": "10131463500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 56, "hot_rank_chg": -23, "stock_cnt": 5863, "price": "279.69", "change": "11.81", "market_id": "33", "circulate_market_value": "241986370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603106", "name": "恒银科技", "hot_rank": 57, "hot_rank_chg": -19, "stock_cnt": 5863, "price": "9.04", "change": "-9.96", "market_id": "17", "circulate_market_value": "4705500800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "人脸识别", "change_pct": -0.77}, {"name": "智慧停车", "change_pct": -0.5}, {"name": "雄安新区", "change_pct": -0.41}, {"name": "信创", "change_pct": -1.33}, {"name": "虚拟数字人", "change_pct": -0.95}, {"name": "AIGC概念", "change_pct": -0.88}, {"name": "智慧政务", "change_pct": -1.21}, {"name": "医疗信息化", "change_pct": -0.4}]}, {"code": "000815", "name": "美利云", "hot_rank": 58, "hot_rank_chg": -27, "stock_cnt": 5863, "price": "18.03", "change": "-1.53", "market_id": "33", "circulate_market_value": "12535592500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301008", "name": "宏昌科技", "hot_rank": 59, "hot_rank_chg": 313, "stock_cnt": 5863, "price": "41.41", "change": "19.99", "market_id": "33", "circulate_market_value": "4788682800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "拟收购半导体"}, {"code": "300394", "name": "天孚通信", "hot_rank": 60, "hot_rank_chg": 6, "stock_cnt": 5863, "price": "233.87", "change": "3.81", "market_id": "33", "circulate_market_value": "254541310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 61, "hot_rank_chg": 50, "stock_cnt": 5863, "price": "49.10", "change": "6.16", "market_id": "17", "circulate_market_value": "101894648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002975", "name": "博杰股份", "hot_rank": 62, "hot_rank_chg": 18, "stock_cnt": 5863, "price": "97.26", "change": "4.50", "market_id": "33", "circulate_market_value": "13359053800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 63, "hot_rank_chg": -23, "stock_cnt": 5863, "price": "15.67", "change": "2.15", "market_id": "33", "circulate_market_value": "54499168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 64, "hot_rank_chg": 23, "stock_cnt": 5863, "price": "125.85", "change": "7.38", "market_id": "33", "circulate_market_value": "241985700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 65, "hot_rank_chg": 40, "stock_cnt": 5863, "price": "11.00", "change": "-6.46", "market_id": "33", "circulate_market_value": "6596810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.09}, {"name": "金融科技", "change_pct": -1.96}, {"name": "移动支付", "change_pct": -1.85}, {"name": "物联网", "change_pct": -0.44}, {"name": "数字经济", "change_pct": -1.08}, {"name": "电子身份证", "change_pct": -1.69}, {"name": "ETC", "change_pct": -0.92}, {"name": "数字人民币", "change_pct": -1.97}, {"name": "智慧政务", "change_pct": -1.21}, {"name": "eSIM", "change_pct": -1.62}, {"name": "华为产业链", "change_pct": 0.22}, {"name": "区块链", "change_pct": -1.31}, {"name": "RWA", "change_pct": -1.81}]}, {"code": "000839", "name": "国安股份", "hot_rank": 66, "hot_rank_chg": 49, "stock_cnt": 5863, "price": "2.94", "change": "-6.37", "market_id": "33", "circulate_market_value": "11524289500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -1.21}, {"name": "央企改革", "change_pct": -0.32}, {"name": "金融科技", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "国企改革", "change_pct": -0.38}]}, {"code": "601101", "name": "昊华能源", "hot_rank": 67, "hot_rank_chg": 75, "stock_cnt": 5863, "price": "13.27", "change": "4.32", "market_id": "17", "circulate_market_value": "19108772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 68, "hot_rank_chg": 45, "stock_cnt": 5863, "price": "6.37", "change": "-0.62", "market_id": "17", "circulate_market_value": "15229475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.99}, {"name": "强势人气股", "change_pct": 1.18}, {"name": "国企改革", "change_pct": -0.38}, {"name": "河南国企改革", "change_pct": -0.17}]}, {"code": "301707", "name": "展芯股份", "hot_rank": 69, "hot_rank_chg": 809, "stock_cnt": 5863, "price": "118.02", "change": "403.28", "market_id": "33", "circulate_market_value": "3192743600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603738", "name": "泰晶科技", "hot_rank": 70, "hot_rank_chg": 2, "stock_cnt": 5863, "price": "36.47", "change": "0.00", "market_id": "17", "circulate_market_value": "14073317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 71, "hot_rank_chg": -11, "stock_cnt": 5863, "price": "34.80", "change": "-0.03", "market_id": "33", "circulate_market_value": "27227681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001267", "name": "汇绿生态", "hot_rank": 72, "hot_rank_chg": 24, "stock_cnt": 5863, "price": "42.69", "change": "10.00", "market_id": "33", "circulate_market_value": "25979279000.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "光模块"}, {"code": "000603", "name": "盛达资源", "hot_rank": 73, "hot_rank_chg": -32, "stock_cnt": 5863, "price": "32.68", "change": "4.41", "market_id": "33", "circulate_market_value": "21788291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600326", "name": "西藏天路", "hot_rank": 74, "hot_rank_chg": 175, "stock_cnt": 5863, "price": "7.52", "change": "0.00", "market_id": "17", "circulate_market_value": "10245732500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.09}, {"name": "水泥", "change_pct": -0.51}, {"name": "西藏概念", "change_pct": 0.97}, {"name": "有色 · 铜", "change_pct": 3.12}, {"name": "有色 · 钼", "change_pct": 1.92}, {"name": "有色金属", "change_pct": 1.6}, {"name": "大基建", "change_pct": -0.68}, {"name": "西部大开发", "change_pct": -0.19}, {"name": "雅江电站概念股", "change_pct": 0.3}]}, {"code": "600438", "name": "通威股份", "hot_rank": 75, "hot_rank_chg": 250, "stock_cnt": 5863, "price": "13.12", "change": "6.58", "market_id": "17", "circulate_market_value": "59066121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603039", "name": "泛微网络", "hot_rank": 77, "hot_rank_chg": -24, "stock_cnt": 5863, "price": "45.57", "change": "-7.19", "market_id": "17", "circulate_market_value": "14019116000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 78, "hot_rank_chg": -36, "stock_cnt": 5863, "price": "14.38", "change": "3.23", "market_id": "33", "circulate_market_value": "8389463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001232", "name": "嘉立创", "hot_rank": 79, "hot_rank_chg": -29, "stock_cnt": 5863, "price": "190.24", "change": "7.60", "market_id": "33", "circulate_market_value": "8409853900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002180", "name": "奔图科技", "hot_rank": 80, "hot_rank_chg": 72, "stock_cnt": 5863, "price": "19.04", "change": "-3.30", "market_id": "33", "circulate_market_value": "25899874000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 81, "hot_rank_chg": -32, "stock_cnt": 5863, "price": "11.85", "change": "1.28", "market_id": "33", "circulate_market_value": "9586875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.71}, {"name": "大飞机", "change_pct": 0.17}, {"name": "北斗导航", "change_pct": 0.14}, {"name": "高铁轨交", "change_pct": -0.07}, {"name": "军民融合", "change_pct": 0.26}, {"name": "磁悬浮", "change_pct": -0.05}, {"name": "军工", "change_pct": 0.07}, {"name": "碳纤维", "change_pct": 0.48}, {"name": "无人机", "change_pct": 0.11}, {"name": "航天", "change_pct": 0.88}, {"name": "卫星互联网", "change_pct": 0.55}, {"name": "低空经济", "change_pct": -0.02}, {"name": "海洋经济", "change_pct": 0.01}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 82, "hot_rank_chg": -25, "stock_cnt": 5863, "price": "12.07", "change": "2.81", "market_id": "17", "circulate_market_value": "15488207000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.08}, {"name": "强势人气股", "change_pct": 1.18}, {"name": "智能制造", "change_pct": 0.26}, {"name": "工业互联网", "change_pct": -0.49}, {"name": "培育钻石", "change_pct": 1.67}, {"name": "金刚线", "change_pct": 3.06}, {"name": "国资入股", "change_pct": 0.4}, {"name": "深地经济", "change_pct": -0.04}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 83, "hot_rank_chg": -32, "stock_cnt": 5863, "price": "338.00", "change": "2.97", "market_id": "17", "circulate_market_value": "137342350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002963", "name": "豪尔赛", "hot_rank": 84, "hot_rank_chg": 32, "stock_cnt": 5863, "price": "18.25", "change": "-5.68", "market_id": "33", "circulate_market_value": "2244641400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 85, "hot_rank_chg": 104, "stock_cnt": 5863, "price": "12.67", "change": "1.69", "market_id": "33", "circulate_market_value": "5788292800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.96}, {"name": "金融科技", "change_pct": -1.96}, {"name": "人工智能", "change_pct": -0.16}, {"name": "物联网", "change_pct": -0.44}, {"name": "数字经济", "change_pct": -1.08}, {"name": "国产操作系统", "change_pct": -1.35}, {"name": "电子身份证", "change_pct": -1.69}, {"name": "数字人民币", "change_pct": -1.97}, {"name": "智慧政务", "change_pct": -1.21}, {"name": "eSIM", "change_pct": -1.62}, {"name": "区块链", "change_pct": -1.31}]}, {"code": "000021", "name": "深科技", "hot_rank": 86, "hot_rank_chg": -47, "stock_cnt": 5863, "price": "40.49", "change": "1.45", "market_id": "33", "circulate_market_value": "63737559000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 87, "hot_rank_chg": -14, "stock_cnt": 5863, "price": "37.75", "change": "7.24", "market_id": "33", "circulate_market_value": "53015833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 88, "hot_rank_chg": -29, "stock_cnt": 5863, "price": "14.48", "change": "5.62", "market_id": "17", "circulate_market_value": "72240991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 89, "hot_rank_chg": -8, "stock_cnt": 5863, "price": "4.12", "change": "-10.04", "market_id": "17", "circulate_market_value": "2304396500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.27}, {"name": "手游", "change_pct": -1.11}, {"name": "ST摘帽", "change_pct": -0.45}, {"name": "游戏", "change_pct": -1.0}, {"name": "影视", "change_pct": -1.45}, {"name": "短剧/互动影游", "change_pct": -1.11}]}, {"code": "603468", "name": "津富士达", "hot_rank": 90, "hot_rank_chg": 28, "stock_cnt": 5863, "price": "31.40", "change": "-16.24", "market_id": "17", "circulate_market_value": "1255641220.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600601", "name": "方正科技", "hot_rank": 91, "hot_rank_chg": -29, "stock_cnt": 5863, "price": "12.87", "change": "10.00", "market_id": "17", "circulate_market_value": "53671675000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.32}, {"name": "光通信", "change_pct": 2.16}, {"name": "PCB板", "change_pct": 5.25}, {"name": "智慧城市", "change_pct": -0.56}, {"name": "电子发票", "change_pct": -1.47}, {"name": "华为产业链", "change_pct": 0.22}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 92, "hot_rank_chg": -37, "stock_cnt": 5863, "price": "48.26", "change": "0.00", "market_id": "17", "circulate_market_value": "51762004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 93, "hot_rank_chg": -50, "stock_cnt": 5863, "price": "33.32", "change": "3.19", "market_id": "17", "circulate_market_value": "113719482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 94, "hot_rank_chg": -2, "stock_cnt": 5863, "price": "28.04", "change": "-2.13", "market_id": "33", "circulate_market_value": "8203484800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 95, "hot_rank_chg": -51, "stock_cnt": 5863, "price": "70.03", "change": "0.72", "market_id": "33", "circulate_market_value": "59740701000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600611", "name": "大众交通", "hot_rank": 96, "hot_rank_chg": -13, "stock_cnt": 5863, "price": "4.60", "change": "-5.93", "market_id": "17", "circulate_market_value": "7191255300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.13}, {"name": "共享经济", "change_pct": -0.92}, {"name": "云计算数据中心", "change_pct": -0.58}, {"name": "旅游", "change_pct": -0.49}, {"name": "物业管理", "change_pct": -1.08}]}, {"code": "600549", "name": "厦门钨业", "hot_rank": 97, "hot_rank_chg": -43, "stock_cnt": 5863, "price": "56.52", "change": "-1.65", "market_id": "17", "circulate_market_value": "87828236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 98, "hot_rank_chg": -40, "stock_cnt": 5863, "price": "22.98", "change": "6.09", "market_id": "17", "circulate_market_value": "9214980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 99, "hot_rank_chg": -34, "stock_cnt": 5863, "price": "21.67", "change": "5.40", "market_id": "33", "circulate_market_value": "72887155000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 100, "hot_rank_chg": -26, "stock_cnt": 5863, "price": "7.23", "change": "-0.69", "market_id": "17", "circulate_market_value": "14773321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.89}, {"name": "军民融合", "change_pct": 0.26}, {"name": "氢能源/燃料电池", "change_pct": -0.43}, {"name": "烧碱", "change_pct": -0.02}, {"name": "军工", "change_pct": 0.07}, {"name": "新能源汽车", "change_pct": 0.28}, {"name": "环氧丙烷", "change_pct": 0.73}, {"name": "氟化工", "change_pct": -0.05}, {"name": "双氧水", "change_pct": -0.13}, {"name": "液氯", "change_pct": -0.74}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于公司立案调查进展暨风险提示公告暨收到深圳证券交易所《关于对公司的", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告"};