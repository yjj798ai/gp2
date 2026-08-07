const UPDATE_TIME = "2026-08-07 19:49";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 4.86,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 4.73,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.9,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续265天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": -0.22,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "存储芯片",
    "rise": 3.59,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续218天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "CRO概念",
    "rise": 8.05,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "商业航天",
    "rise": 1.36,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续194天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.25,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续429天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "黄金概念",
    "rise": 1.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "MLCC概念",
    "rise": 1.83,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "算力租赁",
    "rise": -0.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续129天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "PET铜箔",
    "rise": 5.55,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "机器人概念",
    "rise": 0.87,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续96天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "稀土永磁",
    "rise": 2.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "稀土ETF",
    "code": "885343"
  },
  {
    "name": "先进封装",
    "rise": 3.83,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "6G概念",
    "rise": 2.62,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886037"
  },
  {
    "name": "减肥药",
    "rise": 6.62,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886051"
  },
  {
    "name": "光纤概念",
    "rise": 2.74,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "5GETF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": 2.16,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "小金属概念",
    "rise": 2.13,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "工业有色ETF",
    "code": "885552"
  }
];
const THS_EVENTS = [
  {
    "title": "中信建投：CXO板块Beta稳中向好 26年国内CRO/CDMO新签订单及业绩会加速增长",
    "desc": "",
    "heat": 838518,
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
        "name": "博腾股份",
        "code": "300363",
        "chg": 20.023488
      }
    ]
  },
  {
    "title": "高盛大幅上调AI服务器PCB和CCL预测 港股PCB概念股继续反弹",
    "desc": "",
    "heat": 756476,
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
        "name": "劲拓股份",
        "code": "300400",
        "chg": 17.759877
      }
    ]
  },
  {
    "title": "黄金跳涨，沉寂格局被谁打破？",
    "desc": "",
    "heat": 664773,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "招金黄金",
        "code": "000506",
        "chg": 10.012136
      }
    ]
  },
  {
    "title": "缺口超70%！磷化铟概念再度大涨，多家上市公司紧急提醒",
    "desc": "",
    "heat": 416899,
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
    "heat": 363485,
    "direction": "6G概念",
    "themes": [
      "6G概念"
    ],
    "stocks": [
      {
        "name": "慈星股份",
        "code": "300307",
        "chg": 11.271676
      }
    ]
  },
  {
    "title": "刚果（金）严控铜钴出口重塑全球供给格局：现货紧张难缓解 Q3钴价上行窗口打开(附概念股)",
    "desc": "",
    "heat": 299066,
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
        "name": "招金黄金",
        "code": "000506",
        "chg": 10.012136
      }
    ]
  },
  {
    "title": "工信部印发《民用爆炸物品行业安全发展“十五五”规划》",
    "desc": "",
    "heat": 181637,
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
    "heat": 142829,
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
    "title": "DeepSeek预告全面上调API价格且涨幅较大",
    "desc": "",
    "heat": 117903,
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
  },
  {
    "title": "网络安全审查办公室对派拓公司在华销售产品启动网络安全审查",
    "desc": "",
    "heat": 33901,
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
  }
];
const XGT_HOT = [
  {
    "name": "基因编辑",
    "change": "+7.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+6.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+6.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+6.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+6.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+6.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+6.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+6.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+5.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PET复合铜箔",
    "change": "+5.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+5.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+5.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+4.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+4.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+4.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+4.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+4.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+4.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+4.41%",
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
    "hot_rank_chg": 2,
    "stock_cnt": 5872,
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
        "change_pct": -0.37
      },
      {
        "name": "工业大麻",
        "change_pct": 2.19
      },
      {
        "name": "中药",
        "change_pct": 2.65
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "保健品",
        "change_pct": 2.25
      },
      {
        "name": "民营医院",
        "change_pct": 1.78
      },
      {
        "name": "医药",
        "change_pct": 4.49
      },
      {
        "name": "化学原料药",
        "change_pct": 4.41
      },
      {
        "name": "流感",
        "change_pct": 3.32
      },
      {
        "name": "振兴东北",
        "change_pct": 0.02
      },
      {
        "name": "食品",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 12,
    "hot_rank_chg": 28,
    "stock_cnt": 5872,
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
        "change_pct": 6.31
      },
      {
        "name": "股权转让",
        "change_pct": 0.54
      },
      {
        "name": "新疆概念",
        "change_pct": 0.1
      },
      {
        "name": "医药",
        "change_pct": 4.49
      },
      {
        "name": "流感",
        "change_pct": 3.32
      },
      {
        "name": "国资入股",
        "change_pct": 0.79
      },
      {
        "name": "减肥药",
        "change_pct": 6.63
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 16,
    "hot_rank_chg": -5,
    "stock_cnt": 5872,
    "price": "6.07",
    "change": "1.85",
    "market_id": "33",
    "circulate_market_value": "214678500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 3.44
      },
      {
        "name": "折叠屏",
        "change_pct": 2.65
      },
      {
        "name": "手机产业链",
        "change_pct": 2.24
      },
      {
        "name": "超高清视频",
        "change_pct": 0.6
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.83
      },
      {
        "name": "电竞",
        "change_pct": -0.51
      },
      {
        "name": "半导体",
        "change_pct": 3.32
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.8
      },
      {
        "name": "VR&AR",
        "change_pct": 1.1
      },
      {
        "name": "OLED",
        "change_pct": 2.54
      },
      {
        "name": "京津冀",
        "change_pct": -0.31
      },
      {
        "name": "物联网",
        "change_pct": 0.06
      },
      {
        "name": "指纹识别",
        "change_pct": 1.78
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.23
      },
      {
        "name": "白马股",
        "change_pct": 0.34
      },
      {
        "name": "智能制造",
        "change_pct": 0.81
      },
      {
        "name": "小米概念股",
        "change_pct": 1.6
      },
      {
        "name": "国产芯片",
        "change_pct": 2.48
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.28
      },
      {
        "name": "全息概念",
        "change_pct": -0.03
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.77
      },
      {
        "name": "MicroLED",
        "change_pct": 2.7
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.25
      },
      {
        "name": "智能手表",
        "change_pct": 1.19
      },
      {
        "name": "MiniLED",
        "change_pct": 2.84
      },
      {
        "name": "传感器",
        "change_pct": 1.84
      },
      {
        "name": "大硅片",
        "change_pct": 3.09
      },
      {
        "name": "AI PC",
        "change_pct": 2.03
      },
      {
        "name": "华为产业链",
        "change_pct": 0.69
      },
      {
        "name": "回购",
        "change_pct": 1.21
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.91
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.7
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 28,
    "hot_rank_chg": 64,
    "stock_cnt": 5872,
    "price": "7.88",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "16005259000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "火电",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.16
      },
      {
        "name": "火电",
        "change_pct": 0.35
      },
      {
        "name": "风电",
        "change_pct": 0.76
      },
      {
        "name": "储能",
        "change_pct": 0.78
      },
      {
        "name": "碳中和",
        "change_pct": 0.13
      },
      {
        "name": "国企改革",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 33,
    "hot_rank_chg": -12,
    "stock_cnt": 5872,
    "price": "11.50",
    "change": "5.02",
    "market_id": "33",
    "circulate_market_value": "3271538500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": -0.06
      },
      {
        "name": "密集调研",
        "change_pct": 3.44
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.33
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "教育",
        "change_pct": -0.74
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.22
      },
      {
        "name": "职业教育",
        "change_pct": -0.23
      },
      {
        "name": "在线教育",
        "change_pct": -0.42
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.39
      },
      {
        "name": "华为产业链",
        "change_pct": 0.69
      },
      {
        "name": "智谱AI",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 42,
    "hot_rank_chg": -9,
    "stock_cnt": 5872,
    "price": "5.46",
    "change": "-0.36",
    "market_id": "33",
    "circulate_market_value": "31967200000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.77
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "水利",
        "change_pct": -0.16
      },
      {
        "name": "直播/短视频",
        "change_pct": -0.45
      },
      {
        "name": "大数据",
        "change_pct": -0.92
      },
      {
        "name": "园林",
        "change_pct": 1.11
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.6
      },
      {
        "name": "数字经济",
        "change_pct": -0.93
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.45
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.77
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.12
      },
      {
        "name": "快手概念股",
        "change_pct": -0.19
      },
      {
        "name": "IGBT",
        "change_pct": 2.31
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.72
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.58
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.41
      },
      {
        "name": "氮化镓",
        "change_pct": 2.62
      },
      {
        "name": "AI营销",
        "change_pct": -0.34
      },
      {
        "name": "多模态",
        "change_pct": 0.02
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.3
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.04
      },
      {
        "name": "区块链",
        "change_pct": -1.13
      }
    ]
  },
  {
    "code": "600601",
    "name": "方正科技",
    "hot_rank": 43,
    "hot_rank_chg": -7,
    "stock_cnt": 5872,
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
        "change_pct": -0.07
      },
      {
        "name": "光通信",
        "change_pct": 2.92
      },
      {
        "name": "PCB板",
        "change_pct": 6.33
      },
      {
        "name": "智慧城市",
        "change_pct": -0.28
      },
      {
        "name": "电子发票",
        "change_pct": -1.74
      },
      {
        "name": "华为产业链",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 49,
    "hot_rank_chg": 33,
    "stock_cnt": 5872,
    "price": "6.11",
    "change": "6.63",
    "market_id": "33",
    "circulate_market_value": "6311237700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.17
      },
      {
        "name": "锂电池",
        "change_pct": 1.69
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.84
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.27
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.29
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 56,
    "hot_rank_chg": -8,
    "stock_cnt": 5872,
    "price": "8.03",
    "change": "-0.86",
    "market_id": "33",
    "circulate_market_value": "13054321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.37
      },
      {
        "name": "电竞",
        "change_pct": -0.51
      },
      {
        "name": "手游",
        "change_pct": -1.21
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "游戏",
        "change_pct": -0.89
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.93
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.45
      },
      {
        "name": "快手概念股",
        "change_pct": -0.19
      },
      {
        "name": "元宇宙",
        "change_pct": -0.54
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.72
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.02
      },
      {
        "name": "web3.0",
        "change_pct": -0.64
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.58
      },
      {
        "name": "数据要素",
        "change_pct": -1.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.41
      },
      {
        "name": "AI营销",
        "change_pct": -0.34
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.97
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.91
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.69
      },
      {
        "name": "人形机器人",
        "change_pct": 1.37
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.67
      },
      {
        "name": "多模态",
        "change_pct": 0.02
      },
      {
        "name": "AI视频",
        "change_pct": -0.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.33
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.04
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 59,
    "hot_rank_chg": 22,
    "stock_cnt": 5872,
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
        "change_pct": 0.13
      },
      {
        "name": "光伏",
        "change_pct": 1.26
      },
      {
        "name": "特高压",
        "change_pct": 0.53
      },
      {
        "name": "智能电网",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 64,
    "hot_rank_chg": -4,
    "stock_cnt": 5872,
    "price": "6.96",
    "change": "5.94",
    "market_id": "33",
    "circulate_market_value": "77555208000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 3.46
      },
      {
        "name": "锂电池",
        "change_pct": 1.69
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.81
      },
      {
        "name": "有色 · 铜",
        "change_pct": 4.22
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.84
      },
      {
        "name": "有色金属",
        "change_pct": 2.23
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "人民币升值受益",
        "change_pct": 0.16
      },
      {
        "name": "硫酸",
        "change_pct": 1.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.07
      },
      {
        "name": "白银",
        "change_pct": 4.2
      },
      {
        "name": "有色 · 镍",
        "change_pct": 2.86
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 70,
    "hot_rank_chg": -19,
    "stock_cnt": 5872,
    "price": "10.46",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "18149993000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "铜箔",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.06
      },
      {
        "name": "核电",
        "change_pct": 0.55
      },
      {
        "name": "锂电池",
        "change_pct": 1.69
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.84
      },
      {
        "name": "PCB板",
        "change_pct": 6.33
      },
      {
        "name": "中科院系",
        "change_pct": 0.73
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 1.59
      },
      {
        "name": "固态电池",
        "change_pct": 1.39
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 5.91
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 75,
    "hot_rank_chg": 8,
    "stock_cnt": 5872,
    "price": "6.39",
    "change": "2.24",
    "market_id": "17",
    "circulate_market_value": "79211009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "核电",
        "change_pct": 0.55
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.16
      },
      {
        "name": "水电",
        "change_pct": -0.13
      },
      {
        "name": "火电",
        "change_pct": 0.35
      },
      {
        "name": "光伏",
        "change_pct": 1.26
      },
      {
        "name": "风电",
        "change_pct": 0.76
      },
      {
        "name": "国企改革",
        "change_pct": -0.07
      },
      {
        "name": "算电协同",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "002194",
    "name": "武汉凡谷",
    "hot_rank": 77,
    "hot_rank_chg": 41,
    "stock_cnt": 5872,
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
        "change_pct": 2.24
      },
      {
        "name": "5G",
        "change_pct": 1.84
      },
      {
        "name": "光通信",
        "change_pct": 2.92
      },
      {
        "name": "教育",
        "change_pct": -0.74
      },
      {
        "name": "毫米波通信",
        "change_pct": 3.05
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.42
      },
      {
        "name": "华为产业链",
        "change_pct": 0.69
      },
      {
        "name": "毫米波雷达",
        "change_pct": 2.23
      },
      {
        "name": "5.5G概念",
        "change_pct": 1.93
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 78,
    "hot_rank_chg": 6,
    "stock_cnt": 5872,
    "price": "3.08",
    "change": "4.76",
    "market_id": "33",
    "circulate_market_value": "8190886100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.26
      },
      {
        "name": "金融科技",
        "change_pct": -1.87
      },
      {
        "name": "人工智能",
        "change_pct": 0.31
      },
      {
        "name": "珠宝饰品",
        "change_pct": -0.29
      },
      {
        "name": "数字人民币",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 83,
    "hot_rank_chg": -10,
    "stock_cnt": 5872,
    "price": "11.96",
    "change": "2.22",
    "market_id": "33",
    "circulate_market_value": "9675867100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 2.16
      },
      {
        "name": "大飞机",
        "change_pct": 0.74
      },
      {
        "name": "北斗导航",
        "change_pct": 1.05
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.21
      },
      {
        "name": "军民融合",
        "change_pct": 0.93
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.29
      },
      {
        "name": "军工",
        "change_pct": 0.73
      },
      {
        "name": "碳纤维",
        "change_pct": 1.34
      },
      {
        "name": "无人机",
        "change_pct": 0.83
      },
      {
        "name": "航天",
        "change_pct": 1.76
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.42
      },
      {
        "name": "低空经济",
        "change_pct": 0.54
      },
      {
        "name": "海洋经济",
        "change_pct": 0.44
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 95,
    "hot_rank_chg": -43,
    "stock_cnt": 5872,
    "price": "5.99",
    "change": "2.39",
    "market_id": "33",
    "circulate_market_value": "7767446400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.65
      },
      {
        "name": "创新药",
        "change_pct": 6.31
      },
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "医疗器械",
        "change_pct": 2.89
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.8
      },
      {
        "name": "保健品",
        "change_pct": 2.25
      },
      {
        "name": "民营医院",
        "change_pct": 1.78
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 6.41
      },
      {
        "name": "医药",
        "change_pct": 4.49
      },
      {
        "name": "化学原料药",
        "change_pct": 4.41
      },
      {
        "name": "海南概念",
        "change_pct": 0.34
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 2.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.58
      },
      {
        "name": "海南自由贸易港",
        "change_pct": -0.33
      },
      {
        "name": "食品",
        "change_pct": 0.63
      },
      {
        "name": "国企改革",
        "change_pct": -0.07
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.14
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.09
      },
      {
        "name": "自贸区",
        "change_pct": -0.49
      },
      {
        "name": "合成生物",
        "change_pct": 3.6
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 99,
    "hot_rank_chg": -36,
    "stock_cnt": 5872,
    "price": "12.18",
    "change": "3.75",
    "market_id": "17",
    "circulate_market_value": "15629359000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.77
      },
      {
        "name": "强势人气股",
        "change_pct": 1.74
      },
      {
        "name": "智能制造",
        "change_pct": 0.81
      },
      {
        "name": "工业互联网",
        "change_pct": -0.2
      },
      {
        "name": "培育钻石",
        "change_pct": 2.7
      },
      {
        "name": "金刚线",
        "change_pct": 4.34
      },
      {
        "name": "国资入股",
        "change_pct": 0.79
      },
      {
        "name": "深地经济",
        "change_pct": 0.58
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002428", "name": "云南锗业", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "100.08", "change": "10.00", "market_id": "33", "circulate_market_value": "65355805000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "磷化铟"}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "6.84", "change": "9.97", "market_id": "17", "circulate_market_value": "17226608000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.37}, {"name": "工业大麻", "change_pct": 2.19}, {"name": "中药", "change_pct": 2.65}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "保健品", "change_pct": 2.25}, {"name": "民营医院", "change_pct": 1.78}, {"name": "医药", "change_pct": 4.49}, {"name": "化学原料药", "change_pct": 4.41}, {"name": "流感", "change_pct": 3.32}, {"name": "振兴东北", "change_pct": 0.02}, {"name": "食品", "change_pct": 0.63}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "919.87", "change": "-3.68", "market_id": "33", "circulate_market_value": "1021000300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 4, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "154.82", "change": "8.49", "market_id": "17", "circulate_market_value": "382913250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "36.54", "change": "1.25", "market_id": "33", "circulate_market_value": "39418159000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "58.29", "change": "0.02", "market_id": "33", "circulate_market_value": "67442274000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "48.17", "change": "10.00", "market_id": "17", "circulate_market_value": "40778474000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "半年报增长"}, {"code": "603986", "name": "兆易创新", "hot_rank": 8, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "417.05", "change": "8.32", "market_id": "17", "circulate_market_value": "278794560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "52.48", "change": "1.00", "market_id": "17", "circulate_market_value": "236319490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 10, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "59.52", "change": "6.00", "market_id": "17", "circulate_market_value": "146041030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 11, "hot_rank_chg": 90, "stock_cnt": 5872, "price": "1199.93", "change": "2.72", "market_id": "17", "circulate_market_value": "753907580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 12, "hot_rank_chg": 28, "stock_cnt": 5872, "price": "10.54", "change": "10.02", "market_id": "17", "circulate_market_value": "4053132100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "CRO", "xgb_concepts": [{"name": "创新药", "change_pct": 6.31}, {"name": "股权转让", "change_pct": 0.54}, {"name": "新疆概念", "change_pct": 0.1}, {"name": "医药", "change_pct": 4.49}, {"name": "流感", "change_pct": 3.32}, {"name": "国资入股", "change_pct": 0.79}, {"name": "减肥药", "change_pct": 6.63}]}, {"code": "600584", "name": "长电科技", "hot_rank": 13, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "77.75", "change": "2.48", "market_id": "17", "circulate_market_value": "139126980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 14, "hot_rank_chg": 12, "stock_cnt": 5872, "price": "280.20", "change": "12.01", "market_id": "33", "circulate_market_value": "242427620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "44.38", "change": "8.83", "market_id": "17", "circulate_market_value": "176259030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "6.07", "change": "1.85", "market_id": "33", "circulate_market_value": "214678500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 3.44}, {"name": "折叠屏", "change_pct": 2.65}, {"name": "手机产业链", "change_pct": 2.24}, {"name": "超高清视频", "change_pct": 0.6}, {"name": "苹果产业链", "change_pct": 2.83}, {"name": "电竞", "change_pct": -0.51}, {"name": "半导体", "change_pct": 3.32}, {"name": "人工智能", "change_pct": 0.31}, {"name": "互联网医疗", "change_pct": 0.8}, {"name": "VR&AR", "change_pct": 1.1}, {"name": "OLED", "change_pct": 2.54}, {"name": "京津冀", "change_pct": -0.31}, {"name": "物联网", "change_pct": 0.06}, {"name": "指纹识别", "change_pct": 1.78}, {"name": "汽车零部件", "change_pct": 0.23}, {"name": "白马股", "change_pct": 0.34}, {"name": "智能制造", "change_pct": 0.81}, {"name": "小米概念股", "change_pct": 1.6}, {"name": "国产芯片", "change_pct": 2.48}, {"name": "液晶面板/LCD", "change_pct": 2.28}, {"name": "全息概念", "change_pct": -0.03}, {"name": "理想汽车概念股", "change_pct": 0.77}, {"name": "MicroLED", "change_pct": 2.7}, {"name": "钙钛矿电池", "change_pct": 1.25}, {"name": "智能手表", "change_pct": 1.19}, {"name": "MiniLED", "change_pct": 2.84}, {"name": "传感器", "change_pct": 1.84}, {"name": "大硅片", "change_pct": 3.09}, {"name": "AI PC", "change_pct": 2.03}, {"name": "华为产业链", "change_pct": 0.69}, {"name": "回购", "change_pct": 1.21}, {"name": "智能眼镜/MR头显", "change_pct": 1.91}, {"name": "玻璃基板封装", "change_pct": 3.7}]}, {"code": "001258", "name": "立新能源", "hot_rank": 17, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "13.16", "change": "7.96", "market_id": "33", "circulate_market_value": "12282538400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5872, "price": "139.98", "change": "10.00", "market_id": "17", "circulate_market_value": "337596610000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI覆铜板"}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": -5, "stock_cnt": 5872, "price": "195.27", "change": "4.04", "market_id": "33", "circulate_market_value": "270707040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000831", "name": "中国稀土", "hot_rank": 20, "hot_rank_chg": 25, "stock_cnt": 5872, "price": "57.19", "change": "10.00", "market_id": "33", "circulate_market_value": "60691218000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "稀土"}, {"code": "600396", "name": "华电辽能", "hot_rank": 21, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "17.73", "change": "2.19", "market_id": "17", "circulate_market_value": "26111092000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 22, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "14.40", "change": "5.03", "market_id": "17", "circulate_market_value": "71841870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 23, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "24.82", "change": "0.12", "market_id": "17", "circulate_market_value": "6013141400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 24, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "19.53", "change": "1.88", "market_id": "17", "circulate_market_value": "40847819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 25, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "404.16", "change": "4.10", "market_id": "33", "circulate_market_value": "66698425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "38.00", "change": "0.16", "market_id": "33", "circulate_market_value": "108682762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "193.04", "change": "10.00", "market_id": "33", "circulate_market_value": "151793230000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块"}, {"code": "600744", "name": "华银电力", "hot_rank": 28, "hot_rank_chg": 64, "stock_cnt": 5872, "price": "7.88", "change": "10.06", "market_id": "17", "circulate_market_value": "16005259000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火电", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "电力体制改革", "change_pct": -0.16}, {"name": "火电", "change_pct": 0.35}, {"name": "风电", "change_pct": 0.76}, {"name": "储能", "change_pct": 0.78}, {"name": "碳中和", "change_pct": 0.13}, {"name": "国企改革", "change_pct": -0.07}]}, {"code": "002185", "name": "华天科技", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "17.98", "change": "4.17", "market_id": "33", "circulate_market_value": "59741279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 30, "hot_rank_chg": 7, "stock_cnt": 5872, "price": "35.15", "change": "1.88", "market_id": "17", "circulate_market_value": "724153030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 31, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "37.19", "change": "10.00", "market_id": "33", "circulate_market_value": "12563692500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "拟入股佳贤通信"}, {"code": "000603", "name": "盛达资源", "hot_rank": 32, "hot_rank_chg": 29, "stock_cnt": 5872, "price": "34.43", "change": "10.00", "market_id": "33", "circulate_market_value": "22955044000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "白银龙头"}, {"code": "003032", "name": "传智教育", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5872, "price": "11.50", "change": "5.02", "market_id": "33", "circulate_market_value": "3271538500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": -0.06}, {"name": "密集调研", "change_pct": 3.44}, {"name": "ST摘帽", "change_pct": -0.33}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "教育", "change_pct": -0.74}, {"name": "阿里巴巴概念股", "change_pct": -0.22}, {"name": "职业教育", "change_pct": -0.23}, {"name": "在线教育", "change_pct": -0.42}, {"name": "华为鸿蒙", "change_pct": -1.39}, {"name": "华为产业链", "change_pct": 0.69}, {"name": "智谱AI", "change_pct": -0.59}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "67.01", "change": "7.22", "market_id": "33", "circulate_market_value": "97395819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 35, "hot_rank_chg": 27, "stock_cnt": 5872, "price": "47.60", "change": "10.01", "market_id": "33", "circulate_market_value": "17540757000.00", "change_type": "1", "change_section": "6", "change_days": "5", "change_reason": "覆铜板"}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 36, "hot_rank_chg": -20, "stock_cnt": 5872, "price": "115.81", "change": "16.98", "market_id": "33", "circulate_market_value": "96008290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002827", "name": "高争民爆", "hot_rank": 37, "hot_rank_chg": 33, "stock_cnt": 5872, "price": "54.16", "change": "9.99", "market_id": "33", "circulate_market_value": "14948091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 39, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "127.40", "change": "3.98", "market_id": "17", "circulate_market_value": "45956161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 40, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "64.72", "change": "6.17", "market_id": "33", "circulate_market_value": "98209508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 41, "hot_rank_chg": 17, "stock_cnt": 5872, "price": "94.95", "change": "10.00", "market_id": "17", "circulate_market_value": "93232689000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI算力PCB"}, {"code": "002131", "name": "利欧股份", "hot_rank": 42, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "5.46", "change": "-0.36", "market_id": "33", "circulate_market_value": "31967200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.77}, {"name": "人工智能", "change_pct": 0.31}, {"name": "水利", "change_pct": -0.16}, {"name": "直播/短视频", "change_pct": -0.45}, {"name": "大数据", "change_pct": -0.92}, {"name": "园林", "change_pct": 1.11}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.6}, {"name": "数字经济", "change_pct": -0.93}, {"name": "腾讯概念股", "change_pct": -0.45}, {"name": "理想汽车概念股", "change_pct": 0.77}, {"name": "第三代半导体", "change_pct": 3.12}, {"name": "快手概念股", "change_pct": -0.19}, {"name": "IGBT", "change_pct": 2.31}, {"name": "虚拟数字人", "change_pct": -0.72}, {"name": "AIGC概念", "change_pct": -0.58}, {"name": "字节跳动概念股", "change_pct": -0.41}, {"name": "氮化镓", "change_pct": 2.62}, {"name": "AI营销", "change_pct": -0.34}, {"name": "多模态", "change_pct": 0.02}, {"name": "液冷服务器", "change_pct": 2.3}, {"name": "小红书概念股", "change_pct": -0.04}, {"name": "区块链", "change_pct": -1.13}]}, {"code": "600601", "name": "方正科技", "hot_rank": 43, "hot_rank_chg": -7, "stock_cnt": 5872, "price": "12.87", "change": "10.00", "market_id": "17", "circulate_market_value": "53671675000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.07}, {"name": "光通信", "change_pct": 2.92}, {"name": "PCB板", "change_pct": 6.33}, {"name": "智慧城市", "change_pct": -0.28}, {"name": "电子发票", "change_pct": -1.74}, {"name": "华为产业链", "change_pct": 0.69}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 44, "hot_rank_chg": -15, "stock_cnt": 5872, "price": "15.88", "change": "3.52", "market_id": "33", "circulate_market_value": "55229533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 45, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "33.67", "change": "4.27", "market_id": "17", "circulate_market_value": "114914015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 46, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "15.15", "change": "8.76", "market_id": "33", "circulate_market_value": "8838690200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 47, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "420.95", "change": "-0.22", "market_id": "33", "circulate_market_value": "527973660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 48, "hot_rank_chg": 28, "stock_cnt": 5872, "price": "50.89", "change": "10.01", "market_id": "17", "circulate_market_value": "31944504000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "实验猴涨价"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 49, "hot_rank_chg": 33, "stock_cnt": 5872, "price": "6.11", "change": "6.63", "market_id": "33", "circulate_market_value": "6311237700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.17}, {"name": "锂电池", "change_pct": 1.69}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "铜箔/覆铜板", "change_pct": 6.84}, {"name": "粤港澳大湾区", "change_pct": -0.27}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.29}]}, {"code": "601138", "name": "工业富联", "hot_rank": 50, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "68.18", "change": "-0.13", "market_id": "17", "circulate_market_value": "1352970200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 51, "hot_rank_chg": 76, "stock_cnt": 5872, "price": "18.13", "change": "10.01", "market_id": "33", "circulate_market_value": "16837457000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金"}, {"code": "002463", "name": "沪电股份", "hot_rank": 52, "hot_rank_chg": -2, "stock_cnt": 5872, "price": "125.87", "change": "7.40", "market_id": "33", "circulate_market_value": "242024160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001232", "name": "嘉立创", "hot_rank": 53, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "198.29", "change": "12.15", "market_id": "33", "circulate_market_value": "8765716600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 54, "hot_rank_chg": 17, "stock_cnt": 5872, "price": "45.94", "change": "10.01", "market_id": "17", "circulate_market_value": "46407804000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "高速电子树脂"}, {"code": "603459", "name": "红板科技", "hot_rank": 55, "hot_rank_chg": 9, "stock_cnt": 5872, "price": "105.58", "change": "10.00", "market_id": "17", "circulate_market_value": "8346295200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HDI技改扩产"}, {"code": "002354", "name": "天娱数科", "hot_rank": 56, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "8.03", "change": "-0.86", "market_id": "33", "circulate_market_value": "13054321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.37}, {"name": "电竞", "change_pct": -0.51}, {"name": "手游", "change_pct": -1.21}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "人工智能", "change_pct": 0.31}, {"name": "游戏", "change_pct": -0.89}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.93}, {"name": "腾讯概念股", "change_pct": -0.45}, {"name": "快手概念股", "change_pct": -0.19}, {"name": "元宇宙", "change_pct": -0.54}, {"name": "虚拟数字人", "change_pct": -0.72}, {"name": "东数西算/算力", "change_pct": -0.02}, {"name": "web3.0", "change_pct": -0.64}, {"name": "AIGC概念", "change_pct": -0.58}, {"name": "数据要素", "change_pct": -1.02}, {"name": "字节跳动概念股", "change_pct": -0.41}, {"name": "AI营销", "change_pct": -0.34}, {"name": "ChatGPT", "change_pct": -0.97}, {"name": "智能眼镜/MR头显", "change_pct": 1.91}, {"name": "人工智能大模型", "change_pct": -0.69}, {"name": "人形机器人", "change_pct": 1.37}, {"name": "短剧/互动影游", "change_pct": -0.67}, {"name": "多模态", "change_pct": 0.02}, {"name": "AI视频", "change_pct": -0.55}, {"name": "IP经济/谷子经济", "change_pct": -0.33}, {"name": "小红书概念股", "change_pct": -0.04}]}, {"code": "002202", "name": "金风科技", "hot_rank": 57, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "21.80", "change": "6.03", "market_id": "33", "circulate_market_value": "73324411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600111", "name": "北方稀土", "hot_rank": 58, "hot_rank_chg": -17, "stock_cnt": 5872, "price": "44.06", "change": "5.13", "market_id": "17", "circulate_market_value": "159279800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 59, "hot_rank_chg": 22, "stock_cnt": 5872, "price": "6.44", "change": "-10.06", "market_id": "17", "circulate_market_value": "7333597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.13}, {"name": "光伏", "change_pct": 1.26}, {"name": "特高压", "change_pct": 0.53}, {"name": "智能电网", "change_pct": -0.05}]}, {"code": "600397", "name": "江钨装备", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "18.41", "change": "9.00", "market_id": "17", "circulate_market_value": "18225161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 61, "hot_rank_chg": 48, "stock_cnt": 5872, "price": "68.68", "change": "5.13", "market_id": "17", "circulate_market_value": "81213354000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 62, "hot_rank_chg": 3, "stock_cnt": 5872, "price": "65.90", "change": "-1.35", "market_id": "17", "circulate_market_value": "27438632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 63, "hot_rank_chg": 30, "stock_cnt": 5872, "price": "54.62", "change": "4.82", "market_id": "17", "circulate_market_value": "348421100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 64, "hot_rank_chg": -4, "stock_cnt": 5872, "price": "6.96", "change": "5.94", "market_id": "33", "circulate_market_value": "77555208000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 3.46}, {"name": "锂电池", "change_pct": 1.69}, {"name": "安徽国企改革", "change_pct": 0.81}, {"name": "有色 · 铜", "change_pct": 4.22}, {"name": "铜箔/覆铜板", "change_pct": 6.84}, {"name": "有色金属", "change_pct": 2.23}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "人民币升值受益", "change_pct": 0.16}, {"name": "硫酸", "change_pct": 1.4}, {"name": "国企改革", "change_pct": -0.07}, {"name": "白银", "change_pct": 4.2}, {"name": "有色 · 镍", "change_pct": 2.86}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 65, "hot_rank_chg": -22, "stock_cnt": 5872, "price": "39.00", "change": "1.61", "market_id": "17", "circulate_market_value": "57017797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 66, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "49.58", "change": "7.20", "market_id": "17", "circulate_market_value": "102890766000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 67, "hot_rank_chg": -32, "stock_cnt": 5872, "price": "65.40", "change": "9.02", "market_id": "33", "circulate_market_value": "47370228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 68, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "40.85", "change": "2.35", "market_id": "33", "circulate_market_value": "64304255000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603011", "name": "合锻智能", "hot_rank": 69, "hot_rank_chg": 83, "stock_cnt": 5872, "price": "22.68", "change": "9.99", "market_id": "17", "circulate_market_value": "11213319400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB层压机"}, {"code": "600110", "name": "诺德股份", "hot_rank": 70, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "10.46", "change": "9.99", "market_id": "17", "circulate_market_value": "18149993000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铜箔", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.06}, {"name": "核电", "change_pct": 0.55}, {"name": "锂电池", "change_pct": 1.69}, {"name": "铜箔/覆铜板", "change_pct": 6.84}, {"name": "PCB板", "change_pct": 6.33}, {"name": "中科院系", "change_pct": 0.73}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "宁德时代概念股", "change_pct": 1.59}, {"name": "固态电池", "change_pct": 1.39}, {"name": "PET复合铜箔", "change_pct": 5.91}]}, {"code": "001267", "name": "汇绿生态", "hot_rank": 71, "hot_rank_chg": 39, "stock_cnt": 5872, "price": "42.69", "change": "10.00", "market_id": "33", "circulate_market_value": "25979279000.00", "change_type": "1", "change_section": "10", "change_days": "6", "change_reason": "光模块"}, {"code": "301526", "name": "国际复材", "hot_rank": 72, "hot_rank_chg": -42, "stock_cnt": 5872, "price": "38.32", "change": "8.86", "market_id": "33", "circulate_market_value": "53816337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 74, "hot_rank_chg": 5, "stock_cnt": 5872, "price": "18.03", "change": "-1.53", "market_id": "33", "circulate_market_value": "12535592500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 75, "hot_rank_chg": 8, "stock_cnt": 5872, "price": "6.39", "change": "2.24", "market_id": "17", "circulate_market_value": "79211009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "核电", "change_pct": 0.55}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "电力体制改革", "change_pct": -0.16}, {"name": "水电", "change_pct": -0.13}, {"name": "火电", "change_pct": 0.35}, {"name": "光伏", "change_pct": 1.26}, {"name": "风电", "change_pct": 0.76}, {"name": "国企改革", "change_pct": -0.07}, {"name": "算电协同", "change_pct": 0.51}]}, {"code": "603799", "name": "华友钴业", "hot_rank": 76, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "44.01", "change": "6.30", "market_id": "17", "circulate_market_value": "83073593000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002194", "name": "武汉凡谷", "hot_rank": 77, "hot_rank_chg": 41, "stock_cnt": 5872, "price": "11.10", "change": "10.01", "market_id": "33", "circulate_market_value": "5670755200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "6G预研", "xgb_concepts": [{"name": "手机产业链", "change_pct": 2.24}, {"name": "5G", "change_pct": 1.84}, {"name": "光通信", "change_pct": 2.92}, {"name": "教育", "change_pct": -0.74}, {"name": "毫米波通信", "change_pct": 3.05}, {"name": "卫星互联网", "change_pct": 1.42}, {"name": "华为产业链", "change_pct": 0.69}, {"name": "毫米波雷达", "change_pct": 2.23}, {"name": "5.5G概念", "change_pct": 1.93}]}, {"code": "002721", "name": "金一文化", "hot_rank": 78, "hot_rank_chg": 6, "stock_cnt": 5872, "price": "3.08", "change": "4.76", "market_id": "33", "circulate_market_value": "8190886100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.26}, {"name": "金融科技", "change_pct": -1.87}, {"name": "人工智能", "change_pct": 0.31}, {"name": "珠宝饰品", "change_pct": -0.29}, {"name": "数字人民币", "change_pct": -1.87}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 79, "hot_rank_chg": -13, "stock_cnt": 5872, "price": "230.68", "change": "2.40", "market_id": "33", "circulate_market_value": "251069360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5872, "price": "36.64", "change": "1.13", "market_id": "17", "circulate_market_value": "57071655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 81, "hot_rank_chg": -6, "stock_cnt": 5872, "price": "45.28", "change": "14.34", "market_id": "33", "circulate_market_value": "64299047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 82, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "20.83", "change": "2.26", "market_id": "17", "circulate_market_value": "363709340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 83, "hot_rank_chg": -10, "stock_cnt": 5872, "price": "11.96", "change": "2.22", "market_id": "33", "circulate_market_value": "9675867100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 2.16}, {"name": "大飞机", "change_pct": 0.74}, {"name": "北斗导航", "change_pct": 1.05}, {"name": "高铁轨交", "change_pct": 0.21}, {"name": "军民融合", "change_pct": 0.93}, {"name": "磁悬浮", "change_pct": 0.29}, {"name": "军工", "change_pct": 0.73}, {"name": "碳纤维", "change_pct": 1.34}, {"name": "无人机", "change_pct": 0.83}, {"name": "航天", "change_pct": 1.76}, {"name": "卫星互联网", "change_pct": 1.42}, {"name": "低空经济", "change_pct": 0.54}, {"name": "海洋经济", "change_pct": 0.44}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 84, "hot_rank_chg": 60, "stock_cnt": 5872, "price": "114.16", "change": "6.99", "market_id": "33", "circulate_market_value": "181232050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600363", "name": "联创光电", "hot_rank": 85, "hot_rank_chg": 47, "stock_cnt": 5872, "price": "22.80", "change": "2.79", "market_id": "17", "circulate_market_value": "10280256700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000960", "name": "锡业股份", "hot_rank": 86, "hot_rank_chg": 114, "stock_cnt": 5872, "price": "40.34", "change": "2.78", "market_id": "33", "circulate_market_value": "66376725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 87, "hot_rank_chg": -20, "stock_cnt": 5872, "price": "22.84", "change": "5.45", "market_id": "17", "circulate_market_value": "9158840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 88, "hot_rank_chg": -8, "stock_cnt": 5872, "price": "338.69", "change": "3.18", "market_id": "17", "circulate_market_value": "137622720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 89, "hot_rank_chg": 1, "stock_cnt": 5872, "price": "386.60", "change": "5.53", "market_id": "33", "circulate_market_value": "108963941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 90, "hot_rank_chg": -1, "stock_cnt": 5872, "price": "158.80", "change": "6.76", "market_id": "17", "circulate_market_value": "139700730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 91, "hot_rank_chg": -19, "stock_cnt": 5872, "price": "106.60", "change": "3.48", "market_id": "33", "circulate_market_value": "107131471000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600961", "name": "株冶集团", "hot_rank": 92, "hot_rank_chg": 67, "stock_cnt": 5872, "price": "29.40", "change": "9.01", "market_id": "17", "circulate_market_value": "22103285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 93, "hot_rank_chg": -39, "stock_cnt": 5872, "price": "70.88", "change": "1.94", "market_id": "33", "circulate_market_value": "60465813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 94, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "29.20", "change": "6.61", "market_id": "17", "circulate_market_value": "9838062600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 95, "hot_rank_chg": -43, "stock_cnt": 5872, "price": "5.99", "change": "2.39", "market_id": "33", "circulate_market_value": "7767446400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.65}, {"name": "创新药", "change_pct": 6.31}, {"name": "央企改革", "change_pct": 0.04}, {"name": "医疗器械", "change_pct": 2.89}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "互联网医疗", "change_pct": 0.8}, {"name": "保健品", "change_pct": 2.25}, {"name": "民营医院", "change_pct": 1.78}, {"name": "CAR-T疗法", "change_pct": 6.41}, {"name": "医药", "change_pct": 4.49}, {"name": "化学原料药", "change_pct": 4.41}, {"name": "海南概念", "change_pct": 0.34}, {"name": "脑科学/脑机接口", "change_pct": 2.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": -0.58}, {"name": "海南自由贸易港", "change_pct": -0.33}, {"name": "食品", "change_pct": 0.63}, {"name": "国企改革", "change_pct": -0.07}, {"name": "医疗信息化", "change_pct": -0.14}, {"name": "新冠病毒防治", "change_pct": 2.09}, {"name": "自贸区", "change_pct": -0.49}, {"name": "合成生物", "change_pct": 3.6}]}, {"code": "002900", "name": "哈三联", "hot_rank": 96, "hot_rank_chg": 37, "stock_cnt": 5872, "price": "13.48", "change": "10.04", "market_id": "33", "circulate_market_value": "2171930000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 97, "hot_rank_chg": -9, "stock_cnt": 5872, "price": "35.13", "change": "0.92", "market_id": "33", "circulate_market_value": "27485875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002971", "name": "和远气体", "hot_rank": 98, "hot_rank_chg": 38, "stock_cnt": 5872, "price": "45.38", "change": "10.01", "market_id": "33", "circulate_market_value": "7306386300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "电子特气"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 99, "hot_rank_chg": -36, "stock_cnt": 5872, "price": "12.18", "change": "3.75", "market_id": "17", "circulate_market_value": "15629359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.77}, {"name": "强势人气股", "change_pct": 1.74}, {"name": "智能制造", "change_pct": 0.81}, {"name": "工业互联网", "change_pct": -0.2}, {"name": "培育钻石", "change_pct": 2.7}, {"name": "金刚线", "change_pct": 4.34}, {"name": "国资入股", "change_pct": 0.79}, {"name": "深地经济", "change_pct": 0.58}]}, {"code": "002821", "name": "凯莱英", "hot_rank": 100, "hot_rank_chg": 2, "stock_cnt": 5872, "price": "172.26", "change": "10.00", "market_id": "33", "circulate_market_value": "54613975000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}];
const LIMIT_UP_POOL = [{"code": "600500", "name": "中化国际", "price": 5.51, "change_pct": 9.98, "reason": "1、公司拟收购南通星辰100%股权，标的核心业务为环氧树脂和工程塑料，主营产品包括双酚A、环氧树脂、聚苯醚（PPE）、聚对苯二甲酸丁二酯（PBT）及系列改性工程塑料；\n2、目前公司对位芳纶总产能8000吨/年，已实现光纤光缆领域全球TOP5客户稳定供货", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1786069917, "break_limit_up_times": 1}, {"code": "688419", "name": "耐科装备", "price": 49.67, "change_pct": 20.0, "reason": "公司生产的半导体全自动封装设备已成功应用QFN和DFN等先进封装", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.83, "first_limit_up": 1786078948, "break_limit_up_times": 2}, {"code": "688137", "name": "近岸蛋白", "price": 46.72, "change_pct": 20.01, "reason": "国内重组蛋白解决方案专家、领先的mRNA应用服务商；公司整合AlphaFold等AI工具与自研机器学习系统，用于蛋白质设计、改造及表达，推动AI在生命科学领域的应用", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.62, "first_limit_up": 1786073214, "break_limit_up_times": 0}, {"code": "002792", "name": "通宇通讯", "price": 37.19, "change_pct": 10.0, "reason": "佳贤通信与英伟达合作开发6G AI-RAN基站，公司拟入股25%股权", "plates": ["6G"], "limit_up_days": 2, "turnover_ratio": 2.45, "first_limit_up": 1786065900, "break_limit_up_times": 0}, {"code": "601208", "name": "东材科技", "price": 45.94, "change_pct": 10.01, "reason": "1、公司业务聚焦于电子级树脂材料，如双马树脂、活性酯等，是制造高频高速PCB的核心原材料；2025年净利同比预增65.73%；\n2、电子级树脂材料专家；公司与Chemax、种亿化学成立成都东凯芯半导体材料公司，重点开展高端光刻胶项目", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 11.1, "first_limit_up": 1786079866, "break_limit_up_times": 3}, {"code": "000739", "name": "普洛药业", "price": 23.41, "change_pct": 10.01, "reason": "全球特色原料药标杆企业；公司原料药中间体业务包括头孢系列、青霉素系列、精神类系列、心脑血管类系列和兽药原料药中间体系列", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.63, "first_limit_up": 1786072941, "break_limit_up_times": 0}, {"code": "002589", "name": "瑞康医药", "price": 3.04, "change_pct": 10.14, "reason": "中医药全产业链精准服务型企业，拥有种植、中药饮片加工业务，控股子公司马鞍山井泉中药主要从事中药饮片生产和销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.69, "first_limit_up": 1786067490, "break_limit_up_times": 2}, {"code": "301047", "name": "义翘神州", "price": 107.88, "change_pct": 20.0, "reason": "公司携手Ainnocence搭建AI驱动抗体亲和力成熟平台，结合公司高通量重组抗体表达生产平台，提升抗体开发CRO服务能力", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.6, "first_limit_up": 1786078935, "break_limit_up_times": 3}, {"code": "603127", "name": "昭衍新药", "price": 50.89, "change_pct": 10.01, "reason": "国内创新药龙头，预计上半年净利润同比增长884.9%-1377.4%，报告期内，生物资产市场价格上涨叠加自身自然生长增值，双重因素驱动其公允价值正向变动，为公司业绩做出积极贡献", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.48, "first_limit_up": 1786082849, "break_limit_up_times": 0}, {"code": "603567", "name": "珍宝岛", "price": 7.08, "change_pct": 9.94, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 14.1, "first_limit_up": 1786066923, "break_limit_up_times": 1}, {"code": "603757", "name": "大元泵业", "price": 65.01, "change_pct": 10.0, "reason": "公司表示已完成在储能及数据机房液冷领域的产品储备，已开始小批量接受客户订单，公司与华为、中兴在IDC温控领域推进屏蔽齿轮泵项目", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1786066543, "break_limit_up_times": 1}, {"code": "002762", "name": "金发拉比", "price": 10.41, "change_pct": 10.04, "reason": "国内知名母婴消费品品牌运营商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.88, "first_limit_up": 1786068543, "break_limit_up_times": 1}, {"code": "002437", "name": "誉衡药业", "price": 3.12, "change_pct": 9.86, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品；2025年净利润预计增长50.37%~80.44%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.91, "first_limit_up": 1786066866, "break_limit_up_times": 1}, {"code": "688693", "name": "锴威特", "price": 93.38, "change_pct": 19.99, "reason": "公司16.5亿元并购晶艺半导体， 完善功率半导体产品布局", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 1.87, "first_limit_up": 1786065900, "break_limit_up_times": 0}, {"code": "300363", "name": "博腾股份", "price": 20.44, "change_pct": 20.02, "reason": "CDMO服务提供商；公司的原料药CDMO业务主要为客户提供化学药开发及上市过程中的一系列定制研发及生产服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 14.77, "first_limit_up": 1786080171, "break_limit_up_times": 2}, {"code": "002194", "name": "武汉凡谷", "price": 11.1, "change_pct": 10.01, "reason": "公司微波器件产品（如微波双工器、微波滤波器）是卫星中继通信和微波点对点通信的核心部件", "plates": ["6G"], "limit_up_days": 2, "turnover_ratio": 12.05, "first_limit_up": 1786066326, "break_limit_up_times": 2}, {"code": "001232", "name": "C嘉立创", "price": 198.29, "change_pct": 12.15, "reason": "", "plates": [], "limit_up_days": 1, "turnover_ratio": 54.79, "first_limit_up": 1786079118, "break_limit_up_times": 2}, {"code": "600601", "name": "方正科技", "price": 12.87, "change_pct": 10.0, "reason": "公司PCB业务产品主要包括高密度互连板、多层板、系统板、大型背板、金手指板和车载板等，在服务存储和光模块领域均有应用，华为是公司PCB业务的主要客户之一", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 10.1, "first_limit_up": 1786069222, "break_limit_up_times": 21}, {"code": "688020", "name": "方邦股份", "price": 146.16, "change_pct": 20.0, "reason": "公司的相关铜箔产品应用于PCB，如可剥铜可用于芯片载板，RTF铜箔可用于高频高速柔性线路板等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.68, "first_limit_up": 1786068693, "break_limit_up_times": 1}, {"code": "603758", "name": "秦安股份", "price": 10.48, "change_pct": 9.97, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.95, "first_limit_up": 1786067113, "break_limit_up_times": 0}, {"code": "000506", "name": "招金黄金", "price": 18.13, "change_pct": 10.01, "reason": "公司主要业务包括以黄金为主要品种的矿业开采", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 10.29, "first_limit_up": 1786081845, "break_limit_up_times": 0}, {"code": "603936", "name": "博敏电子", "price": 15.93, "change_pct": 10.01, "reason": "公司为国内PCB细分HDI板龙头，现已为多家客户批量提供400G、800G光模块产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.89, "first_limit_up": 1786068965, "break_limit_up_times": 0}, {"code": "688073", "name": "毕得医药", "price": 61.6, "change_pct": 20.01, "reason": "公司聚焦于新药研发产业链前端，能够为新药研发机构提供药物分子砌块及科学试剂等产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.12, "first_limit_up": 1786070941, "break_limit_up_times": 0}, {"code": "601865", "name": "福莱特", "price": 11.75, "change_pct": 10.02, "reason": "公司为光伏玻璃龙头", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 2.58, "first_limit_up": 1786067857, "break_limit_up_times": 0}, {"code": "600272", "name": "开开实业", "price": 12.97, "change_pct": 10.01, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 9.83, "first_limit_up": 1786066756, "break_limit_up_times": 1}, {"code": "002443", "name": "金洲管道", "price": 9.33, "change_pct": 10.02, "reason": "1、全资子公司金洲智慧液冷技术上海有限公司主营液冷业务面向数据中心服务器液冷场景，主要产品覆盖冷板、内外分水器、CDU核心部件、液冷管路等；\n2、金洲天创特种具身智能总部基地正式落地南京江北新区，金洲天创机器人科技（南京）有限公司，注册资本5000万元，金洲管道持股60%，天创机器人持股40%，合资双方将重点建设“特种具身智能总部基地”，分阶段构建具身智能数据采集、智能机器人研发制造、人形机器人整机测试、机器人应用场景开拓等核心功能板块", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.41, "first_limit_up": 1786066341, "break_limit_up_times": 0}, {"code": "603660", "name": "苏州科达", "price": 11.99, "change_pct": 10.0, "reason": "1、公司自研的“开端大模型”已形成多模态、行业语言及AIGC三大模型矩阵，深度融入安防摄像机和各类平台软件中，并在警情分析等十多个行业应用场景落地；\n2、公司与华东师范大学共建“卫星应用技术联合实验室”，首颗技术验证星预计2026年5月左右发射，实现高光谱遥感数据星上AI实时处理", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.9, "first_limit_up": 1786068768, "break_limit_up_times": 0}, {"code": "603011", "name": "合锻智能", "price": 22.68, "change_pct": 9.99, "reason": "1、公司是PCB/CCL层压设备的国产龙头，核心产品是真空热压机/冷压机及自动化生产线；\n2、参股公司合肥汇智专注于粉末注射成形技术（PIM）的研发及应用，其中涉及的光模块业务，目前正在合作的企业有新易盛、联特科技等；\n3、公司高端成形机床已成熟应用于航空航天、军工领域并取得业务收入；\n4、公司与中国核工业二三建设有限公司合作，已承接核聚变真空室构件的研制工作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 21.13, "first_limit_up": 1786079024, "break_limit_up_times": 2}, {"code": "600664", "name": "哈药股份", "price": 6.84, "change_pct": 9.97, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 10.71, "first_limit_up": 1786066408, "break_limit_up_times": 0}, {"code": "603773", "name": "沃格光电", "price": 95.07, "change_pct": 10.0, "reason": "公司光模块/CPO玻璃基封装载板已批量送样，与北极雄芯战略合作开发AI芯片玻璃基先进封装", "plates": ["光通信"], "limit_up_days": 4, "turnover_ratio": 9.74, "first_limit_up": 1786066270, "break_limit_up_times": 3}, {"code": "600267", "name": "海正药业", "price": 13.11, "change_pct": 9.98, "reason": "中国最大的抗生素、抗肿瘤药物生产商之一；自主研发的心血管创新药海博麦布片，此前是国内近年心血管领域唯一1类新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.82, "first_limit_up": 1786066668, "break_limit_up_times": 3}, {"code": "603124", "name": "江南新材", "price": 141.66, "change_pct": 10.0, "reason": "公司铜基新材料产品广泛应用于PCB制造及服务器液冷散热领域，高精密铜基散热片已应用于服务器液冷散热", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 12.52, "first_limit_up": 1786078988, "break_limit_up_times": 10}, {"code": "603228", "name": "景旺电子", "price": 94.95, "change_pct": 10.0, "reason": "国内少数产品类型覆盖RPCB、FPC和MPCB的厂商", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 3.48, "first_limit_up": 1786066266, "break_limit_up_times": 2}, {"code": "002428", "name": "云南锗业", "price": 100.08, "change_pct": 10.0, "reason": "1、公司作为磷化铟衬底龙头，产能为15万片/年（2—4英寸）；\n2、公司“空间太阳能电池用锗晶片建设项目”2025年末将形成年产125万片产能，最终达250万片，锗晶片主要用于空间卫星、空间站等深空设备的空间卫星电池，直接配套商业航天需求", "plates": ["磷化铟"], "limit_up_days": 4, "turnover_ratio": 18.27, "first_limit_up": 1786068657, "break_limit_up_times": 1}, {"code": "600206", "name": "有研新材", "price": 48.17, "change_pct": 10.0, "reason": "控股子公司为长江存储、长鑫存储靶材供应商，子公司有研亿金量产12英寸晶圆制造高纯靶材，为国内大硅片下游晶圆厂提供配套耗材", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 10.83, "first_limit_up": 1786068037, "break_limit_up_times": 0}, {"code": "002913", "name": "奥士康", "price": 55.42, "change_pct": 10.0, "reason": "公司表示有通过供应体系向英伟达提供PCB系列产品，目前正在积极参与英伟达R系列产品的打样和测试工作，主要为GPU相关产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 2.22, "first_limit_up": 1786070946, "break_limit_up_times": 0}, {"code": "600183", "name": "生益科技", "price": 139.98, "change_pct": 10.0, "reason": "1、中国大陆最大的覆铜板制造商；预计上半年净利润同比增长117%-131%，在报告期内，覆铜板板块，面对原材料价格上涨、高端产品市场需求持续高速增长等影响，公司积极调整优化产品销售结构，并推动扩产产能及时释放，从而带动覆铜板销量上升，覆铜板产品营业收入及毛利增加，推动盈利水平提升；\n2、公司与银河航天签署战略合作协议，切入商业航天赛道", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1786069235, "break_limit_up_times": 6}, {"code": "301234", "name": "五洲医疗", "price": 83.62, "change_pct": 20.01, "reason": "公司拟收购旋智科技100%股权，切入电机控制芯片赛道", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 18.44, "first_limit_up": 1786085793, "break_limit_up_times": 0}, {"code": "300916", "name": "朗特智能", "price": 26.4, "change_pct": 20.0, "reason": "公司在机器人领域主要的技术储备包括步进电机控制和直流无刷马达控制技术等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 18.15, "first_limit_up": 1786080483, "break_limit_up_times": 4}, {"code": "002900", "name": "哈三联", "price": 13.48, "change_pct": 10.04, "reason": "1、公司旗下礼德生物作为创新药研发平台，聚焦抗肿瘤领域和免疫制剂研发 ，公司拥有包括创新药等在内的 40 余项在研项目，持续加大研发投入；\n2、公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 19.65, "first_limit_up": 1786067334, "break_limit_up_times": 0}, {"code": "688265", "name": "南模生物", "price": 42.9, "change_pct": 20.0, "reason": "基因修饰动物模型产品提供商；为客户提供定制化模型、标准化模型等基因修饰动物模型，以及模型繁育、药效评价及表型分析、饲养服务等相关技术服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1786071434, "break_limit_up_times": 0}, {"code": "002037", "name": "保利联合", "price": 7.69, "change_pct": 10.01, "reason": "公司作为国内电子雷管龙头，产能占全国 20%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1786066440, "break_limit_up_times": 1}, {"code": "600110", "name": "诺德股份", "price": 10.46, "change_pct": 9.99, "reason": "公司主营电解铜箔，新一代HVLP铜箔通过认证", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.0, "first_limit_up": 1786068551, "break_limit_up_times": 0}, {"code": "002971", "name": "和远气体", "price": 45.38, "change_pct": 10.01, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 3, "turnover_ratio": 9.27, "first_limit_up": 1786066263, "break_limit_up_times": 1}, {"code": "300986", "name": "志特新材", "price": 14.8, "change_pct": 20.03, "reason": "公司设立控股子公司志特小临智能科技有限公司，主营化学机器人平台及AI for Science新材料研发，切入机器人赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 14.18, "first_limit_up": 1786072437, "break_limit_up_times": 1}, {"code": "600641", "name": "先导基电", "price": 31.28, "change_pct": 9.99, "reason": "公司拟增资控股先导微电子", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.58, "first_limit_up": 1786071032, "break_limit_up_times": 1}, {"code": "600744", "name": "华银电力", "price": 7.88, "change_pct": 10.06, "reason": "湖南省火电龙头", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.99, "first_limit_up": 1786085235, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 10.54, "change_pct": 10.02, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 15.62, "first_limit_up": 1786066260, "break_limit_up_times": 1}, {"code": "600449", "name": "宁夏建材", "price": 15.5, "change_pct": 10.01, "reason": "公司数据中心已入驻30家单位、上云系统118个，计算能力超5.5万核VCPU，110KV变电站项目在建，为数字服务扩容提供硬件支撑", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.9, "first_limit_up": 1786084008, "break_limit_up_times": 0}, {"code": "002281", "name": "光迅科技", "price": 193.04, "change_pct": 10.0, "reason": "1、光模块龙头之一，字节跳动是公司重要客户；此前联合思科推出1.6T硅光模块，发布OCS全光交换机；\n2、公司是浸没液冷智算产业发展联盟会员单位，是相关标准、工艺研究和实践的重要参与者之一，目前已有相关产品发布，可以提供全套的液冷光模块产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 8.9, "first_limit_up": 1786068447, "break_limit_up_times": 4}, {"code": "002821", "name": "凯莱英", "price": 172.26, "change_pct": 10.0, "reason": "国内CMO行业龙头之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1786069086, "break_limit_up_times": 0}, {"code": "002742", "name": "冀衡医药", "price": 4.13, "change_pct": 10.13, "reason": "公司摘星脱帽后正式更名，全资子公司辽源百康主要生产化学原料药，涵盖解热镇痛、抗菌、抗过敏、局部麻醉等大类", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.44, "first_limit_up": 1786066425, "break_limit_up_times": 1}, {"code": "603328", "name": "依顿电子", "price": 10.85, "change_pct": 10.04, "reason": "1、印制电路板行业内的重要品牌之一；公司的印制电路板具有高精度、高密度、高可靠性的特点，已广泛应用于汽车电子、新能源及电源、计算机与通讯、工控医疗、多媒体与显示等领域；\n2、公司是苹果的间接供应商，目前进入苹果产业链的产品主要用于电源系统及模块，键盘使用，数据线连接器等", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 1.38, "first_limit_up": 1786066250, "break_limit_up_times": 0}, {"code": "301080", "name": "百普赛斯", "price": 64.75, "change_pct": 20.0, "reason": "公司专业提供重组蛋白等关键生物试剂产品及技术服务，应用于肿瘤、自身免疫疾病、心血管病、传染病等疾病的药物早期发现及验证、药物筛选及优化等环节", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.74, "first_limit_up": 1786070202, "break_limit_up_times": 1}, {"code": "605289", "name": "罗曼股份", "price": 104.49, "change_pct": 10.0, "reason": "公司拟收购武桐高新39.23%的股权，标的主要从事AIDC算力服务器与集群综合解决方案服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.24, "first_limit_up": 1786084304, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 27.5, "change_pct": 10.0, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 13.56, "first_limit_up": 1786066561, "break_limit_up_times": 2}, {"code": "603102", "name": "百合股份", "price": 37.51, "change_pct": 10.0, "reason": "公司主要从事营养保健食品的研产销，根据外贸客户提供的食品标准或配方生产NMN产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.35, "first_limit_up": 1786081482, "break_limit_up_times": 1}, {"code": "000603", "name": "盛达资源", "price": 34.43, "change_pct": 10.0, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 16.92, "first_limit_up": 1786085706, "break_limit_up_times": 0}, {"code": "002552", "name": "宝鼎科技", "price": 47.6, "change_pct": 10.01, "reason": "1、公司预计2026年半年度净利润同比增长468.71%-559.71%，因“子公司金宝电子覆铜板及电子铜箔业务扭亏为盈，产品销量及销售价格持续上升”；\n2、公司控股子公司金宝电子专业从事电子铜箔、覆铜板设计、研发、生产及销售，是国内能提供设计至生产一体化全流程服务的少数企业之一；产品广泛应用于 5G 通讯、汽车电子等领域，其中电子铜箔有 HTE 箔、LP 箔等多种类型，覆铜板涵盖玻纤布基、复合基、铝基等，是 PCB 产业链中的重要供应商", "plates": ["PCB板"], "limit_up_days": 4, "turnover_ratio": 1.21, "first_limit_up": 1786066200, "break_limit_up_times": 0}, {"code": "001296", "name": "长江材料", "price": 19.94, "change_pct": 9.98, "reason": "公司生产的3D打印砂应用于3D打印砂型铸造，采购公司3D打印砂的客户中有航天领域的供应商", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.01, "first_limit_up": 1786071726, "break_limit_up_times": 2}, {"code": "603186", "name": "华正新材", "price": 143, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景；上半年净利同比预增263.26%—380.44%，报告期内，覆铜板行业需求持续提升，公司积极开拓市场，适时产能扩张实现量价齐升；积极有效应对供应链供需持续偏紧的格局，并通过实现高速产品销售增长、持续改善产品结构等，提升产品毛利率，提高盈利水平", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.85, "first_limit_up": 1786068973, "break_limit_up_times": 1}, {"code": "301366", "name": "一博科技", "price": 53.33, "change_pct": 20.0, "reason": "公司光模块PCBA业务已进入量产阶段，PCB生产预计年底具备量产能力，跟英伟达、英特尔有合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 17.26, "first_limit_up": 1786067868, "break_limit_up_times": 0}, {"code": "603655", "name": "朗博科技", "price": 30.04, "change_pct": 10.0, "reason": "车用橡胶零部件制造商；主要产品有车用O型圈及垫圈、轮毂组件、油封、轴封等产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.33, "first_limit_up": 1786066994, "break_limit_up_times": 0}, {"code": "301230", "name": "泓博医药", "price": 32.42, "change_pct": 19.99, "reason": "公司AIDD（AI药物设计技术）部门专注于利用人工智能（AI）技术革新药物研发流程，自研的 DiOrion AI 药物设计平台（含九大核心模块、获国家软著），融合 AI 算法与海量数据，覆盖药物研发全流程，已服务 95 个新药项目（7 个进入临床）、45 家客户", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.65, "first_limit_up": 1786084527, "break_limit_up_times": 0}, {"code": "002943", "name": "宇晶股份", "price": 35.96, "change_pct": 10.0, "reason": "公司6-8英寸碳化硅切磨抛设备已批量销售，系碳化硅衬底加工核心供应商，并推进12英寸硅片切割设备研发", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.39, "first_limit_up": 1786080756, "break_limit_up_times": 0}, {"code": "002741", "name": "光华科技", "price": 26.3, "change_pct": 10.0, "reason": "1、国内PCB化学品的领先厂商；公司主要产品包括PCB化学品，PCB化学品的功能主要应用于集成电路互连技术；\n2、消息称公司在硫化锂的生产上选择了固态和固相合成的干法路线，已在下游固态电池客户中处于领先地位", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.09, "first_limit_up": 1786078866, "break_limit_up_times": 0}, {"code": "603459", "name": "红板科技", "price": 105.58, "change_pct": 10.0, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 24.12, "first_limit_up": 1786066758, "break_limit_up_times": 1}, {"code": "600651", "name": "飞乐音响", "price": 6.4, "change_pct": 9.97, "reason": "公司的主要产品是汽车电子电器、汽车照明、模块封装及芯片测试服务、智能制造系统集成、检验检测、精密零件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.72, "first_limit_up": 1786070913, "break_limit_up_times": 1}, {"code": "002631", "name": "德尔未来", "price": 8.68, "change_pct": 10.01, "reason": "控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.0, "first_limit_up": 1786072668, "break_limit_up_times": 0}, {"code": "000831", "name": "中国稀土", "price": 57.19, "change_pct": 10.0, "reason": "六大稀土集团之一中国五矿的唯一稀土上市平台", "plates": ["稀土磁材"], "limit_up_days": 1, "turnover_ratio": 5.73, "first_limit_up": 1786067739, "break_limit_up_times": 0}, {"code": "688046", "name": "药康生物", "price": 33.31, "change_pct": 19.99, "reason": "公司是一家专业从事实验动物小鼠模型研产销的高新技术企业，上半年净利润预增46.67%至60.78%，报告期内，公司锚定国际化和创新的核心战略，一方面加快海外市场销售网络的布局和完善，另一方面持续加大研发资源投入，技术与产品的行业领先优势得到进一步巩固强化。公司依托成熟的通用底层技术体系，前瞻布局全人源抗体平台、菌群研创平台等新兴技术平台，加快推动研发成果落地转化，为公司中长期可持续增长构筑新的增长点", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.87, "first_limit_up": 1786068336, "break_limit_up_times": 2}, {"code": "605287", "name": "德才股份", "price": 40.93, "change_pct": 10.0, "reason": "1、公司主营业务涵盖内装装饰工程、建筑幕墙工程、智能化工程、古建筑工程等；\n2、控股孙公司奇想无限作为漫剧制作以及提出AIGC领域智能体一站式解决方案的团队，受邀参与火山引擎大模型游戏+漫剧 AI 工坊”广州企业沙龙。", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 6.9, "first_limit_up": 1786084958, "break_limit_up_times": 0}, {"code": "301008", "name": "宏昌科技", "price": 41.41, "change_pct": 19.99, "reason": "公司拟7.2亿元控股两家金刚石材料公司", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1786065900, "break_limit_up_times": 0}, {"code": "001267", "name": "汇绿生态", "price": 42.69, "change_pct": 10.0, "reason": "公司拟不超1.95亿元收购武汉钧恒30%股权，武汉钧恒对高速光模块技术持续投入，当前已经具备单波400G高速链路仿真能力，um级高精度光学微组装能力，及各种高速控制算法能力；基于上述能力积累，当前武汉钧恒1.6T模块相关产品已经开发出来，具备送样能力，3.2T模块单点技术已经验证完成，预计年底启动项目开发", "plates": ["光通信"], "limit_up_days": 4, "turnover_ratio": 11.85, "first_limit_up": 1786073235, "break_limit_up_times": 13}, {"code": "001223", "name": "欧克科技", "price": 41.17, "change_pct": 9.99, "reason": "1、公司控股深圳飞仕达切入PCB设备领域，产品包括蚀刻机、显影机等，并与有泽新材PI膜及FCCL业务联动，打造“设备+材料”一体化解决方案；\n2、公司机器人目前主要产品为码垛机器人、协作机器人；\n3、控股子公司江西有泽新材料生产的PI薄膜可用于固态电池，其高电绝缘、耐高温特性可提升电池安全性，有研究表明相关固态电池能量密度可达300Wh/kg，CPI薄膜可用于电池封装环节", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1786066449, "break_limit_up_times": 1}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于公司立案调查进展暨风险提示公告暨收到深圳证券交易所《关于对公司的", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告"};