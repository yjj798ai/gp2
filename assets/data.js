const UPDATE_TIME = "2026-08-26 03:50";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.11,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 2.48,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续278天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": 0.24,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "数字货币",
    "rise": 1.39,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "粮食概念",
    "rise": 0.06,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "生物疫苗",
    "rise": 1.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885845"
  },
  {
    "name": "PCB概念",
    "rise": 0.42,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": 0.69,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续231天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": 0.58,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "通信ETF",
    "code": "886084"
  },
  {
    "name": "互联网金融",
    "rise": 1.42,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "算力租赁",
    "rise": 0.55,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续142天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "金属铜",
    "rise": 2.88,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885973"
  },
  {
    "name": "可控核聚变",
    "rise": 1.51,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电网设备ETF",
    "code": "886065"
  },
  {
    "name": "金属铅",
    "rise": 3.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "工业有色ETF",
    "code": "885971"
  },
  {
    "name": "AI应用",
    "rise": 0.33,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": 0.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续207天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "MLCC概念",
    "rise": -0.03,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "人形机器人",
    "rise": 0.25,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续442天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "金属锌",
    "rise": 3.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "有色ETF",
    "code": "885970"
  }
];
const THS_EVENTS = [
  {
    "title": "券商观点：味之素或将削减30%ABF膜供货量，国产替代有望加速",
    "desc": "",
    "heat": 277538,
    "direction": "ABF薄膜",
    "themes": [
      "ABF薄膜"
    ],
    "stocks": [
      {
        "name": "同宇新材",
        "code": "301630",
        "chg": 19.998781
      }
    ]
  },
  {
    "title": "碳酸锂价格触底反弹 7股上半年净利翻倍",
    "desc": "",
    "heat": 227141,
    "direction": "碳酸锂",
    "themes": [
      "锂电池概念"
    ],
    "stocks": [
      {
        "name": "宏裕包材",
        "code": "920274",
        "chg": 13.203883
      }
    ]
  },
  {
    "title": "中国聚变等9家企业将协同攻关高温超导强场托卡马克磁体研制",
    "desc": "",
    "heat": 202315,
    "direction": "可控核聚变",
    "themes": [
      "可控核聚变"
    ],
    "stocks": [
      {
        "name": "融发核电",
        "code": "002366",
        "chg": 10.05291
      }
    ]
  },
  {
    "title": "《全国农产品产地市场体系发展“十五五”规划》印发",
    "desc": "",
    "heat": 196517,
    "direction": "农产品",
    "themes": [
      "农业种植"
    ],
    "stocks": [
      {
        "name": "万向德农",
        "code": "600371",
        "chg": 10.034602
      }
    ]
  },
  {
    "title": "多部门研究完善“六张网”多元化投融资模式",
    "desc": "",
    "heat": 142938,
    "direction": "六张网",
    "themes": [
      "智能电网",
      "算力租赁",
      "地下管网",
      "智能物流",
      "卫星互联网"
    ],
    "stocks": [
      {
        "name": "康盛股份",
        "code": "002418",
        "chg": 10.123457
      }
    ]
  },
  {
    "title": "集邦咨询：存储器合约价持续飙升，预估2027年占主要CSP资本支出比重将达68%",
    "desc": "",
    "heat": 108614,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "频准激光",
        "code": "688826",
        "chg": 11.770833
      }
    ]
  },
  {
    "title": "自动驾驶入法！道交法修订草案设置“自动驾驶汽车的特别规定”专章",
    "desc": "",
    "heat": 95544,
    "direction": "无人驾驶",
    "themes": [
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "康盛股份",
        "code": "002418",
        "chg": 10.123457
      }
    ]
  },
  {
    "title": "康希诺与德普世生物达成mRNA治疗型肿瘤疫苗战略合作",
    "desc": "",
    "heat": 75785,
    "direction": "抗癌疫苗",
    "themes": [
      "肿瘤疫苗",
      "生物疫苗",
      "重组蛋白",
      "生物制品",
      "基因测序"
    ],
    "stocks": [
      {
        "name": "康希诺",
        "code": "688185",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "国家药监局：支持仿制药高质量发展 强化特殊人群用药保障",
    "desc": "",
    "heat": 38311,
    "direction": "仿制药",
    "themes": [
      "仿制药一致性评价",
      "CRO概念"
    ],
    "stocks": [
      {
        "name": "康希诺",
        "code": "688185",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "苹果折叠屏手机面世在即 相关概念股提前异动",
    "desc": "",
    "heat": 8583,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "罗博特科",
        "code": "300757",
        "chg": 8.357718
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "期货概念",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+3.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+3.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+3.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超导概念",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+3.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+3.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钒",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镍",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钴",
    "change": "+2.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+2.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+2.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "粘胶短纤",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色金属",
    "change": "+1.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 2,
    "hot_rank_chg": 3,
    "stock_cnt": 5813,
    "price": "9.55",
    "change": "2.58",
    "market_id": "17",
    "circulate_market_value": "6129029700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.54
      },
      {
        "name": "农业种植",
        "change_pct": 0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.77
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.86
      },
      {
        "name": "休闲食品",
        "change_pct": 0.61
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "食品安全",
        "change_pct": 0.83
      },
      {
        "name": "社区团购",
        "change_pct": 0.59
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      },
      {
        "name": "预制菜",
        "change_pct": 0.39
      },
      {
        "name": "人造肉",
        "change_pct": 0.7
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 3,
    "hot_rank_chg": 1,
    "stock_cnt": 5813,
    "price": "12.95",
    "change": "5.03",
    "market_id": "33",
    "circulate_market_value": "6447092800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.2
      },
      {
        "name": "农业种植",
        "change_pct": 0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "流感",
        "change_pct": 0.51
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 4,
    "hot_rank_chg": 3,
    "stock_cnt": 5813,
    "price": "5.77",
    "change": "4.91",
    "market_id": "33",
    "circulate_market_value": "15305217000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "装修装饰",
        "change_pct": 1.04
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.0
      },
      {
        "name": "航天",
        "change_pct": 0.38
      },
      {
        "name": "旧改",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 8,
    "hot_rank_chg": 45,
    "stock_cnt": 5813,
    "price": "3.47",
    "change": "10.16",
    "market_id": "17",
    "circulate_market_value": "7676781800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "光模块",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 1.66
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "光通信",
        "change_pct": 0.24
      },
      {
        "name": "林业",
        "change_pct": 0.09
      },
      {
        "name": "军民融合",
        "change_pct": 0.38
      },
      {
        "name": "军工",
        "change_pct": 0.54
      },
      {
        "name": "人造肉",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -1,
    "stock_cnt": 5813,
    "price": "8.20",
    "change": "-0.12",
    "market_id": "17",
    "circulate_market_value": "20651781000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.44
      },
      {
        "name": "工业大麻",
        "change_pct": 1.2
      },
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "保健品",
        "change_pct": 0.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.69
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "化学原料药",
        "change_pct": -0.05
      },
      {
        "name": "流感",
        "change_pct": 0.51
      },
      {
        "name": "振兴东北",
        "change_pct": 0.98
      },
      {
        "name": "食品",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 17,
    "hot_rank_chg": 47,
    "stock_cnt": 5813,
    "price": "4.84",
    "change": "4.76",
    "market_id": "33",
    "circulate_market_value": "3703281100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "股权转让",
        "change_pct": 0.61
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "医药商业",
        "change_pct": -0.03
      },
      {
        "name": "保健品",
        "change_pct": 0.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.69
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.33
      },
      {
        "name": "口腔",
        "change_pct": 0.67
      },
      {
        "name": "医美",
        "change_pct": 0.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 19,
    "hot_rank_chg": -6,
    "stock_cnt": 5813,
    "price": "10.18",
    "change": "-0.88",
    "market_id": "17",
    "circulate_market_value": "4879477400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "医药商业",
        "change_pct": -0.03
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "流感",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "002445",
    "name": "中南文化",
    "hot_rank": 25,
    "hot_rank_chg": 45,
    "stock_cnt": 5813,
    "price": "3.76",
    "change": "1.35",
    "market_id": "33",
    "circulate_market_value": "8897115900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": 0.15
      },
      {
        "name": "VR&AR",
        "change_pct": 0.02
      },
      {
        "name": "影视",
        "change_pct": 0.95
      },
      {
        "name": "光伏",
        "change_pct": 1.24
      },
      {
        "name": "复牌股",
        "change_pct": -0.48
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.77
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": -0.55
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 27,
    "hot_rank_chg": -8,
    "stock_cnt": 5813,
    "price": "4.13",
    "change": "-3.95",
    "market_id": "33",
    "circulate_market_value": "8673635400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "维生素",
        "change_pct": 0.23
      },
      {
        "name": "基因测序",
        "change_pct": 0.13
      },
      {
        "name": "民营医院",
        "change_pct": 0.69
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "化学原料药",
        "change_pct": -0.05
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 29,
    "hot_rank_chg": 25,
    "stock_cnt": 5813,
    "price": "4.46",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "5068344000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "液冷",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.59
      },
      {
        "name": "锂电池",
        "change_pct": 1.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "石墨烯",
        "change_pct": 1.03
      },
      {
        "name": "新能源整车",
        "change_pct": 1.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "汽车整车",
        "change_pct": 0.86
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "白色家电",
        "change_pct": 0.28
      },
      {
        "name": "家电",
        "change_pct": 0.28
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.2
      },
      {
        "name": "热泵",
        "change_pct": 0.28
      },
      {
        "name": "轮边电机",
        "change_pct": 0.92
      },
      {
        "name": "超级电容",
        "change_pct": 1.27
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 32,
    "hot_rank_chg": 125,
    "stock_cnt": 5813,
    "price": "4.19",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "5353143200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.85
      },
      {
        "name": "化肥",
        "change_pct": 1.53
      },
      {
        "name": "保健品",
        "change_pct": 0.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.69
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "煤化工",
        "change_pct": 0.5
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      },
      {
        "name": "干细胞",
        "change_pct": -0.25
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.03
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 34,
    "hot_rank_chg": 0,
    "stock_cnt": 5813,
    "price": "9.46",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4170175700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.05
      },
      {
        "name": "锂电池",
        "change_pct": 1.19
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "两轮车",
        "change_pct": 0.02
      },
      {
        "name": "珠宝饰品",
        "change_pct": 1.45
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 37,
    "hot_rank_chg": -10,
    "stock_cnt": 5813,
    "price": "11.43",
    "change": "6.13",
    "market_id": "33",
    "circulate_market_value": "26545897000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 0.32
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.95
      },
      {
        "name": "有色 · 锑",
        "change_pct": 3.09
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.77
      },
      {
        "name": "有色 · 锌",
        "change_pct": 3.92
      },
      {
        "name": "有色金属",
        "change_pct": 1.99
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "白银",
        "change_pct": 3.84
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 40,
    "hot_rank_chg": -14,
    "stock_cnt": 5813,
    "price": "5.76",
    "change": "0.35",
    "market_id": "33",
    "circulate_market_value": "203714690000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.08
      },
      {
        "name": "手机产业链",
        "change_pct": -0.1
      },
      {
        "name": "超高清视频",
        "change_pct": 0.3
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.04
      },
      {
        "name": "电竞",
        "change_pct": 0.16
      },
      {
        "name": "半导体",
        "change_pct": 0.62
      },
      {
        "name": "人工智能",
        "change_pct": 0.28
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "VR&AR",
        "change_pct": 0.02
      },
      {
        "name": "OLED",
        "change_pct": 0.51
      },
      {
        "name": "京津冀",
        "change_pct": 0.89
      },
      {
        "name": "物联网",
        "change_pct": 0.39
      },
      {
        "name": "指纹识别",
        "change_pct": 0.35
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.27
      },
      {
        "name": "白马股",
        "change_pct": 0.61
      },
      {
        "name": "智能制造",
        "change_pct": 0.36
      },
      {
        "name": "小米概念股",
        "change_pct": 0.12
      },
      {
        "name": "国产芯片",
        "change_pct": 0.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.56
      },
      {
        "name": "全息概念",
        "change_pct": 0.21
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.25
      },
      {
        "name": "MicroLED",
        "change_pct": 0.32
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.38
      },
      {
        "name": "智能手表",
        "change_pct": 0.74
      },
      {
        "name": "MiniLED",
        "change_pct": 0.45
      },
      {
        "name": "传感器",
        "change_pct": 0.42
      },
      {
        "name": "大硅片",
        "change_pct": 0.56
      },
      {
        "name": "AI PC",
        "change_pct": 0.0
      },
      {
        "name": "华为产业链",
        "change_pct": 0.37
      },
      {
        "name": "回购",
        "change_pct": 0.81
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.5
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.11
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "002366",
    "name": "融发核电",
    "hot_rank": 44,
    "hot_rank_chg": 590,
    "stock_cnt": 5813,
    "price": "6.24",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "11546607700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "核电中标",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 1.14
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.41
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "核聚变",
        "change_pct": 1.98
      }
    ]
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 47,
    "hot_rank_chg": 64,
    "stock_cnt": 5813,
    "price": "5.45",
    "change": "4.41",
    "market_id": "33",
    "circulate_market_value": "4093110900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "创新药",
        "change_pct": -0.25
      },
      {
        "name": "养老产业",
        "change_pct": 0.4
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "化学原料药",
        "change_pct": -0.05
      },
      {
        "name": "口腔",
        "change_pct": 0.67
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 52,
    "hot_rank_chg": 81,
    "stock_cnt": 5813,
    "price": "9.54",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "2791194100.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "转基因玉米",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 0.2
      },
      {
        "name": "转基因",
        "change_pct": 0.02
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.86
      },
      {
        "name": "大农业",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 54,
    "hot_rank_chg": 5,
    "stock_cnt": 5813,
    "price": "11.43",
    "change": "-1.04",
    "market_id": "17",
    "circulate_market_value": "20449851000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.42
      },
      {
        "name": "纯碱",
        "change_pct": 0.9
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "土壤修复",
        "change_pct": 0.98
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.37
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.43
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 60,
    "hot_rank_chg": -14,
    "stock_cnt": 5813,
    "price": "11.77",
    "change": "4.62",
    "market_id": "17",
    "circulate_market_value": "20423080000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.37
      },
      {
        "name": "核电",
        "change_pct": 1.14
      },
      {
        "name": "锂电池",
        "change_pct": 1.19
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.22
      },
      {
        "name": "PCB板",
        "change_pct": 0.4
      },
      {
        "name": "中科院系",
        "change_pct": 0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.7
      },
      {
        "name": "固态电池",
        "change_pct": 1.39
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "002686",
    "name": "亿利达",
    "hot_rank": 61,
    "hot_rank_chg": 70,
    "stock_cnt": 5813,
    "price": "7.22",
    "change": "5.87",
    "market_id": "33",
    "circulate_market_value": "3774102400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 1.73
      },
      {
        "name": "股权转让",
        "change_pct": 0.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.0
      },
      {
        "name": "军民融合",
        "change_pct": 0.38
      },
      {
        "name": "冷链",
        "change_pct": 0.61
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.27
      },
      {
        "name": "军工",
        "change_pct": 0.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.81
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.39
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.38
      },
      {
        "name": "海洋经济",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 66,
    "hot_rank_chg": 17,
    "stock_cnt": 5813,
    "price": "11.05",
    "change": "1.01",
    "market_id": "17",
    "circulate_market_value": "4781043800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.61
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "光伏",
        "change_pct": 1.24
      },
      {
        "name": "无线耳机",
        "change_pct": 0.33
      },
      {
        "name": "华为产业链",
        "change_pct": 0.37
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.58
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 71,
    "hot_rank_chg": 21,
    "stock_cnt": 5813,
    "price": "7.49",
    "change": "-3.97",
    "market_id": "33",
    "circulate_market_value": "5449605600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.61
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.0
      },
      {
        "name": "风电",
        "change_pct": 0.93
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.71
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.86
      },
      {
        "name": "建筑节能",
        "change_pct": 0.73
      },
      {
        "name": "旧改",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 73,
    "hot_rank_chg": 9,
    "stock_cnt": 5813,
    "price": "5.08",
    "change": "2.21",
    "market_id": "33",
    "circulate_market_value": "6587417000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.35
      },
      {
        "name": "创新药",
        "change_pct": -0.25
      },
      {
        "name": "央企改革",
        "change_pct": 0.87
      },
      {
        "name": "医疗器械",
        "change_pct": 0.27
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.22
      },
      {
        "name": "保健品",
        "change_pct": 0.14
      },
      {
        "name": "民营医院",
        "change_pct": 0.69
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.64
      },
      {
        "name": "医药",
        "change_pct": 0.05
      },
      {
        "name": "化学原料药",
        "change_pct": -0.05
      },
      {
        "name": "海南概念",
        "change_pct": 0.87
      },
      {
        "name": "脑科学/脑机接口",
        "change_pct": 0.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.97
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.01
      },
      {
        "name": "食品",
        "change_pct": 0.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.38
      },
      {
        "name": "自贸区",
        "change_pct": 0.91
      },
      {
        "name": "合成生物",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600984",
    "name": "建设机械",
    "hot_rank": 80,
    "hot_rank_chg": 59,
    "stock_cnt": 5813,
    "price": "4.70",
    "change": "-4.86",
    "market_id": "17",
    "circulate_market_value": "5908106400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.76
      },
      {
        "name": "机械",
        "change_pct": -0.1
      },
      {
        "name": "复牌股",
        "change_pct": -0.48
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "陕西国企改革",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 84,
    "hot_rank_chg": 3,
    "stock_cnt": 5813,
    "price": "9.01",
    "change": "3.09",
    "market_id": "17",
    "circulate_market_value": "6385627600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 85,
    "hot_rank_chg": 33,
    "stock_cnt": 5813,
    "price": "5.85",
    "change": "0.69",
    "market_id": "17",
    "circulate_market_value": "72517121000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.87
      },
      {
        "name": "核电",
        "change_pct": 1.14
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.05
      },
      {
        "name": "水电",
        "change_pct": 1.1
      },
      {
        "name": "火电",
        "change_pct": 0.81
      },
      {
        "name": "光伏",
        "change_pct": 1.24
      },
      {
        "name": "风电",
        "change_pct": 0.93
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "算电协同",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 87,
    "hot_rank_chg": -52,
    "stock_cnt": 5813,
    "price": "11.39",
    "change": "-3.31",
    "market_id": "17",
    "circulate_market_value": "3597916400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.36
      },
      {
        "name": "冷链",
        "change_pct": 0.61
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.15
      },
      {
        "name": "首发经济",
        "change_pct": 0.52
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 90,
    "hot_rank_chg": -48,
    "stock_cnt": 5813,
    "price": "3.40",
    "change": "-2.02",
    "market_id": "33",
    "circulate_market_value": "15883946000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.63
      },
      {
        "name": "体育产业",
        "change_pct": 0.72
      },
      {
        "name": "股权转让",
        "change_pct": 0.61
      },
      {
        "name": "房地产",
        "change_pct": 1.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "京津冀",
        "change_pct": 0.89
      },
      {
        "name": "旅游",
        "change_pct": 0.77
      },
      {
        "name": "国产芯片",
        "change_pct": 0.44
      },
      {
        "name": "内存",
        "change_pct": 0.07
      },
      {
        "name": "闪存",
        "change_pct": 0.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.15
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 93,
    "hot_rank_chg": 12,
    "stock_cnt": 5813,
    "price": "4.79",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "3087799000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.76
      },
      {
        "name": "装修装饰",
        "change_pct": 1.04
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.0
      },
      {
        "name": "家具家居",
        "change_pct": 0.79
      },
      {
        "name": "复牌股",
        "change_pct": -0.48
      },
      {
        "name": "智能制造",
        "change_pct": 0.36
      },
      {
        "name": "3D打印",
        "change_pct": 0.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.28
      },
      {
        "name": "旧改",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 94,
    "hot_rank_chg": -31,
    "stock_cnt": 5813,
    "price": "7.76",
    "change": "3.33",
    "market_id": "17",
    "circulate_market_value": "8836756600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.76
      },
      {
        "name": "强势人气股",
        "change_pct": 0.76
      },
      {
        "name": "光伏",
        "change_pct": 1.24
      },
      {
        "name": "特高压",
        "change_pct": 1.1
      },
      {
        "name": "智能电网",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 95,
    "hot_rank_chg": -40,
    "stock_cnt": 5813,
    "price": "9.85",
    "change": "-1.60",
    "market_id": "33",
    "circulate_market_value": "4578080000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.76
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.48
      },
      {
        "name": "水利",
        "change_pct": 0.92
      },
      {
        "name": "大数据",
        "change_pct": 0.39
      },
      {
        "name": "海绵城市",
        "change_pct": 0.84
      },
      {
        "name": "风电",
        "change_pct": 0.93
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.86
      },
      {
        "name": "数字经济",
        "change_pct": 0.45
      },
      {
        "name": "大基建",
        "change_pct": 0.84
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.37
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.78
      },
      {
        "name": "国企改革",
        "change_pct": 0.91
      },
      {
        "name": "旧改",
        "change_pct": 1.02
      },
      {
        "name": "西部大开发",
        "change_pct": 0.88
      },
      {
        "name": "低空经济",
        "change_pct": 0.26
      },
      {
        "name": "房屋检测",
        "change_pct": 0.63
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "603618", "name": "杭电股份", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "31.92", "change": "9.99", "market_id": "17", "circulate_market_value": "22068710000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报高增"}, {"code": "600127", "name": "金健米业", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "9.55", "change": "2.58", "market_id": "17", "circulate_market_value": "6129029700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.54}, {"name": "农业种植", "change_pct": 0.2}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "湖南国企改革", "change_pct": 1.77}, {"name": "乡村振兴", "change_pct": 0.86}, {"name": "休闲食品", "change_pct": 0.61}, {"name": "食品", "change_pct": 0.31}, {"name": "食品安全", "change_pct": 0.83}, {"name": "社区团购", "change_pct": 0.59}, {"name": "大农业", "change_pct": 0.79}, {"name": "预制菜", "change_pct": 0.39}, {"name": "人造肉", "change_pct": 0.7}, {"name": "国企改革", "change_pct": 0.91}]}, {"code": "002412", "name": "汉森制药", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5813, "price": "12.95", "change": "5.03", "market_id": "33", "circulate_market_value": "6447092800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "优化生育（三孩）", "change_pct": 0.2}, {"name": "农业种植", "change_pct": 0.2}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "医药", "change_pct": 0.05}, {"name": "流感", "change_pct": 0.51}, {"name": "大农业", "change_pct": 0.79}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "5.77", "change": "4.91", "market_id": "33", "circulate_market_value": "15305217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.76}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "装修装饰", "change_pct": 1.04}, {"name": "装配式建筑", "change_pct": 1.0}, {"name": "航天", "change_pct": 0.38}, {"name": "旧改", "change_pct": 1.02}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5813, "price": "611.00", "change": "1.36", "market_id": "17", "circulate_market_value": "18383597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "62.37", "change": "3.55", "market_id": "33", "circulate_market_value": "70680185000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "65.59", "change": "1.53", "market_id": "17", "circulate_market_value": "160934660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 8, "hot_rank_chg": 45, "stock_cnt": 5813, "price": "3.47", "change": "10.16", "market_id": "17", "circulate_market_value": "7676781800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 1.66}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "光通信", "change_pct": 0.24}, {"name": "林业", "change_pct": 0.09}, {"name": "军民融合", "change_pct": 0.38}, {"name": "军工", "change_pct": 0.54}, {"name": "人造肉", "change_pct": 0.7}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "8.20", "change": "-0.12", "market_id": "17", "circulate_market_value": "20651781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.44}, {"name": "工业大麻", "change_pct": 1.2}, {"name": "中药", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "保健品", "change_pct": 0.14}, {"name": "民营医院", "change_pct": 0.69}, {"name": "医药", "change_pct": 0.05}, {"name": "化学原料药", "change_pct": -0.05}, {"name": "流感", "change_pct": 0.51}, {"name": "振兴东北", "change_pct": 0.98}, {"name": "食品", "change_pct": 0.31}]}, {"code": "600721", "name": "百花医药", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "14.67", "change": "-1.94", "market_id": "17", "circulate_market_value": "5641313800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 11, "hot_rank_chg": 17, "stock_cnt": 5813, "price": "17.51", "change": "8.09", "market_id": "17", "circulate_market_value": "38860867000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "17.03", "change": "10.01", "market_id": "33", "circulate_market_value": "7780159900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "数字人民币"}, {"code": "600722", "name": "金牛化工", "hot_rank": 13, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "14.14", "change": "0.86", "market_id": "17", "circulate_market_value": "9619720200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "21.18", "change": "-1.03", "market_id": "33", "circulate_market_value": "24917609000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 15, "hot_rank_chg": 18, "stock_cnt": 5813, "price": "17.46", "change": "10.02", "market_id": "33", "circulate_market_value": "10232399400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "无人驾驶"}, {"code": "600272", "name": "开开实业", "hot_rank": 16, "hot_rank_chg": 7, "stock_cnt": 5813, "price": "20.50", "change": "6.88", "market_id": "17", "circulate_market_value": "3280000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 17, "hot_rank_chg": 47, "stock_cnt": 5813, "price": "4.84", "change": "4.76", "market_id": "33", "circulate_market_value": "3703281100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "股权转让", "change_pct": 0.61}, {"name": "优化生育（三孩）", "change_pct": 0.2}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "医药商业", "change_pct": -0.03}, {"name": "保健品", "change_pct": 0.14}, {"name": "民营医院", "change_pct": 0.69}, {"name": "医药", "change_pct": 0.05}, {"name": "食品", "change_pct": 0.31}, {"name": "辅助生殖", "change_pct": -0.33}, {"name": "口腔", "change_pct": 0.67}, {"name": "医美", "change_pct": 0.58}, {"name": "新冠病毒防治", "change_pct": 0.38}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5813, "price": "10.18", "change": "-0.88", "market_id": "17", "circulate_market_value": "4879477400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "医药商业", "change_pct": -0.03}, {"name": "医药", "change_pct": 0.05}, {"name": "流感", "change_pct": 0.51}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 20, "hot_rank_chg": -8, "stock_cnt": 5813, "price": "407.86", "change": "3.39", "market_id": "17", "circulate_market_value": "165729140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "14.00", "change": "0.07", "market_id": "17", "circulate_market_value": "17964781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 22, "hot_rank_chg": 85, "stock_cnt": 5813, "price": "17.88", "change": "10.03", "market_id": "17", "circulate_market_value": "14076502000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "300142", "name": "沃森生物", "hot_rank": 23, "hot_rank_chg": 63, "stock_cnt": 5813, "price": "15.28", "change": "5.96", "market_id": "33", "circulate_market_value": "24095346000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 24, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "33.40", "change": "-2.68", "market_id": "17", "circulate_market_value": "55580000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002445", "name": "中南文化", "hot_rank": 25, "hot_rank_chg": 45, "stock_cnt": 5813, "price": "3.76", "change": "1.35", "market_id": "33", "circulate_market_value": "8897115900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": 0.15}, {"name": "VR&AR", "change_pct": 0.02}, {"name": "影视", "change_pct": 0.95}, {"name": "光伏", "change_pct": 1.24}, {"name": "复牌股", "change_pct": -0.48}, {"name": "江苏国企改革", "change_pct": 0.77}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": -0.55}, {"name": "国企改革", "change_pct": 0.91}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 26, "hot_rank_chg": 36, "stock_cnt": 5813, "price": "39.29", "change": "2.10", "market_id": "17", "circulate_market_value": "57441776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 27, "hot_rank_chg": -8, "stock_cnt": 5813, "price": "4.13", "change": "-3.95", "market_id": "33", "circulate_market_value": "8673635400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "维生素", "change_pct": 0.23}, {"name": "基因测序", "change_pct": 0.13}, {"name": "民营医院", "change_pct": 0.69}, {"name": "医药", "change_pct": 0.05}, {"name": "化学原料药", "change_pct": -0.05}, {"name": "PD-1抑制剂", "change_pct": 0.13}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 28, "hot_rank_chg": -12, "stock_cnt": 5813, "price": "860.99", "change": "1.77", "market_id": "33", "circulate_market_value": "955645760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 29, "hot_rank_chg": 25, "stock_cnt": 5813, "price": "4.46", "change": "10.12", "market_id": "33", "circulate_market_value": "5068344000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.59}, {"name": "锂电池", "change_pct": 1.19}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "石墨烯", "change_pct": 1.03}, {"name": "新能源整车", "change_pct": 1.26}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "汽车整车", "change_pct": 0.86}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "白色家电", "change_pct": 0.28}, {"name": "家电", "change_pct": 0.28}, {"name": "汽车热管理", "change_pct": 0.2}, {"name": "热泵", "change_pct": 0.28}, {"name": "轮边电机", "change_pct": 0.92}, {"name": "超级电容", "change_pct": 1.27}, {"name": "液冷服务器", "change_pct": -0.12}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5813, "price": "396.00", "change": "0.12", "market_id": "17", "circulate_market_value": "264722810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 31, "hot_rank_chg": -16, "stock_cnt": 5813, "price": "56.61", "change": "0.20", "market_id": "17", "circulate_market_value": "254917040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 32, "hot_rank_chg": 125, "stock_cnt": 5813, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "5353143200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.85}, {"name": "化肥", "change_pct": 1.53}, {"name": "保健品", "change_pct": 0.14}, {"name": "民营医院", "change_pct": 0.69}, {"name": "医药", "change_pct": 0.05}, {"name": "煤化工", "change_pct": 0.5}, {"name": "食品", "change_pct": 0.31}, {"name": "大农业", "change_pct": 0.79}, {"name": "干细胞", "change_pct": -0.25}, {"name": "阿尔茨海默病", "change_pct": 0.03}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 33, "hot_rank_chg": -11, "stock_cnt": 5813, "price": "16.79", "change": "5.73", "market_id": "33", "circulate_market_value": "27255620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 34, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "9.46", "change": "10.00", "market_id": "33", "circulate_market_value": "4170175700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.05}, {"name": "锂电池", "change_pct": 1.19}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "两轮车", "change_pct": 0.02}, {"name": "珠宝饰品", "change_pct": 1.45}]}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "51.02", "change": "-0.25", "market_id": "17", "circulate_market_value": "43191151000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 36, "hot_rank_chg": 7, "stock_cnt": 5813, "price": "40.00", "change": "0.53", "market_id": "17", "circulate_market_value": "158863480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 37, "hot_rank_chg": -10, "stock_cnt": 5813, "price": "11.43", "change": "6.13", "market_id": "33", "circulate_market_value": "26545897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 0.32}, {"name": "有色 · 铜", "change_pct": 3.95}, {"name": "有色 · 锑", "change_pct": 3.09}, {"name": "湖南国企改革", "change_pct": 1.77}, {"name": "有色 · 锌", "change_pct": 3.92}, {"name": "有色金属", "change_pct": 1.99}, {"name": "国企改革", "change_pct": 0.91}, {"name": "白银", "change_pct": 3.84}]}, {"code": "603958", "name": "哈森股份", "hot_rank": 38, "hot_rank_chg": 12, "stock_cnt": 5813, "price": "22.24", "change": "-0.09", "market_id": "17", "circulate_market_value": "4878566400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 39, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "30.69", "change": "2.50", "market_id": "17", "circulate_market_value": "12306690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 40, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "5.76", "change": "0.35", "market_id": "33", "circulate_market_value": "203714690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.08}, {"name": "手机产业链", "change_pct": -0.1}, {"name": "超高清视频", "change_pct": 0.3}, {"name": "苹果产业链", "change_pct": 0.04}, {"name": "电竞", "change_pct": 0.16}, {"name": "半导体", "change_pct": 0.62}, {"name": "人工智能", "change_pct": 0.28}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "VR&AR", "change_pct": 0.02}, {"name": "OLED", "change_pct": 0.51}, {"name": "京津冀", "change_pct": 0.89}, {"name": "物联网", "change_pct": 0.39}, {"name": "指纹识别", "change_pct": 0.35}, {"name": "汽车零部件", "change_pct": 0.27}, {"name": "白马股", "change_pct": 0.61}, {"name": "智能制造", "change_pct": 0.36}, {"name": "小米概念股", "change_pct": 0.12}, {"name": "国产芯片", "change_pct": 0.44}, {"name": "液晶面板/LCD", "change_pct": 0.56}, {"name": "全息概念", "change_pct": 0.21}, {"name": "理想汽车概念股", "change_pct": 0.25}, {"name": "MicroLED", "change_pct": 0.32}, {"name": "钙钛矿电池", "change_pct": 1.38}, {"name": "智能手表", "change_pct": 0.74}, {"name": "MiniLED", "change_pct": 0.45}, {"name": "传感器", "change_pct": 0.42}, {"name": "大硅片", "change_pct": 0.56}, {"name": "AI PC", "change_pct": 0.0}, {"name": "华为产业链", "change_pct": 0.37}, {"name": "回购", "change_pct": 0.81}, {"name": "光电共封装CPO", "change_pct": 0.5}, {"name": "智能眼镜/MR头显", "change_pct": -0.11}, {"name": "玻璃基板封装", "change_pct": -0.38}]}, {"code": "600667", "name": "太极实业", "hot_rank": 41, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "19.73", "change": "-1.05", "market_id": "17", "circulate_market_value": "41266127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 42, "hot_rank_chg": 10, "stock_cnt": 5813, "price": "118.52", "change": "-0.65", "market_id": "17", "circulate_market_value": "42752937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 43, "hot_rank_chg": 18, "stock_cnt": 5813, "price": "120.30", "change": "5.26", "market_id": "33", "circulate_market_value": "231319060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002366", "name": "融发核电", "hot_rank": 44, "hot_rank_chg": 590, "stock_cnt": 5813, "price": "6.24", "change": "10.05", "market_id": "33", "circulate_market_value": "11546607700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "核电中标", "xgb_concepts": [{"name": "核电", "change_pct": 1.14}, {"name": "山东国企改革", "change_pct": 0.41}, {"name": "国企改革", "change_pct": 0.91}, {"name": "核聚变", "change_pct": 1.98}]}, {"code": "600522", "name": "中天科技", "hot_rank": 45, "hot_rank_chg": -21, "stock_cnt": 5813, "price": "33.83", "change": "-0.18", "market_id": "17", "circulate_market_value": "115460087000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000931", "name": "中关村", "hot_rank": 47, "hot_rank_chg": 64, "stock_cnt": 5813, "price": "5.45", "change": "4.41", "market_id": "33", "circulate_market_value": "4093110900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "创新药", "change_pct": -0.25}, {"name": "养老产业", "change_pct": 0.4}, {"name": "医药", "change_pct": 0.05}, {"name": "化学原料药", "change_pct": -0.05}, {"name": "口腔", "change_pct": 0.67}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 48, "hot_rank_chg": 197, "stock_cnt": 5813, "price": "190.85", "change": "10.00", "market_id": "17", "circulate_market_value": "52596041000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块"}, {"code": "600584", "name": "长电科技", "hot_rank": 49, "hot_rank_chg": -12, "stock_cnt": 5813, "price": "74.50", "change": "0.61", "market_id": "17", "circulate_market_value": "133311385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 50, "hot_rank_chg": -6, "stock_cnt": 5813, "price": "197.01", "change": "3.23", "market_id": "33", "circulate_market_value": "273119240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 51, "hot_rank_chg": -13, "stock_cnt": 5813, "price": "51.34", "change": "0.02", "market_id": "33", "circulate_market_value": "58912135000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 52, "hot_rank_chg": 81, "stock_cnt": 5813, "price": "9.54", "change": "10.04", "market_id": "17", "circulate_market_value": "2791194100.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": 0.2}, {"name": "转基因", "change_pct": 0.02}, {"name": "乡村振兴", "change_pct": 0.86}, {"name": "大农业", "change_pct": 0.79}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 53, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "34.98", "change": "3.86", "market_id": "17", "circulate_market_value": "720650720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 54, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "11.43", "change": "-1.04", "market_id": "17", "circulate_market_value": "20449851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.42}, {"name": "纯碱", "change_pct": 0.9}, {"name": "食品", "change_pct": 0.31}, {"name": "土壤修复", "change_pct": 0.98}, {"name": "东数西算/算力", "change_pct": 0.37}, {"name": "OpenClaw概念", "change_pct": 0.43}, {"name": "DeepSeek概念股", "change_pct": 0.35}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 55, "hot_rank_chg": 38, "stock_cnt": 5813, "price": "75.16", "change": "0.72", "market_id": "17", "circulate_market_value": "9821397700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "34.25", "change": "1.09", "market_id": "33", "circulate_market_value": "37021452000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 57, "hot_rank_chg": -28, "stock_cnt": 5813, "price": "21.78", "change": "2.59", "market_id": "33", "circulate_market_value": "9851939100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300122", "name": "智飞生物", "hot_rank": 58, "hot_rank_chg": 370, "stock_cnt": 5813, "price": "14.37", "change": "10.20", "market_id": "33", "circulate_market_value": "20323581000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 59, "hot_rank_chg": -8, "stock_cnt": 5813, "price": "94.18", "change": "-0.05", "market_id": "33", "circulate_market_value": "61502895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 60, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "11.77", "change": "4.62", "market_id": "17", "circulate_market_value": "20423080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.37}, {"name": "核电", "change_pct": 1.14}, {"name": "锂电池", "change_pct": 1.19}, {"name": "铜箔/覆铜板", "change_pct": 1.22}, {"name": "PCB板", "change_pct": 0.4}, {"name": "中科院系", "change_pct": 0.1}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "宁德时代概念股", "change_pct": 0.7}, {"name": "固态电池", "change_pct": 1.39}, {"name": "PET复合铜箔", "change_pct": 0.61}]}, {"code": "002686", "name": "亿利达", "hot_rank": 61, "hot_rank_chg": 70, "stock_cnt": 5813, "price": "7.22", "change": "5.87", "market_id": "33", "circulate_market_value": "3774102400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 1.73}, {"name": "股权转让", "change_pct": 0.61}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "浙江国企改革", "change_pct": 1.0}, {"name": "军民融合", "change_pct": 0.38}, {"name": "冷链", "change_pct": 0.61}, {"name": "汽车零部件", "change_pct": 0.27}, {"name": "军工", "change_pct": 0.54}, {"name": "新能源汽车", "change_pct": 0.81}, {"name": "新能源车零部件", "change_pct": 0.39}, {"name": "国企改革", "change_pct": 0.91}, {"name": "新冠病毒防治", "change_pct": 0.38}, {"name": "海洋经济", "change_pct": 0.48}]}, {"code": "000070", "name": "特发信息", "hot_rank": 62, "hot_rank_chg": -22, "stock_cnt": 5813, "price": "15.97", "change": "-0.62", "market_id": "33", "circulate_market_value": "13681931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 63, "hot_rank_chg": 28, "stock_cnt": 5813, "price": "62.13", "change": "2.02", "market_id": "33", "circulate_market_value": "94279307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 64, "hot_rank_chg": -32, "stock_cnt": 5813, "price": "159.21", "change": "-1.11", "market_id": "17", "circulate_market_value": "393770950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 65, "hot_rank_chg": 2, "stock_cnt": 5813, "price": "405.27", "change": "1.10", "market_id": "33", "circulate_market_value": "508307120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 66, "hot_rank_chg": 17, "stock_cnt": 5813, "price": "11.05", "change": "1.01", "market_id": "17", "circulate_market_value": "4781043800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.61}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "光伏", "change_pct": 1.24}, {"name": "无线耳机", "change_pct": 0.33}, {"name": "华为产业链", "change_pct": 0.37}, {"name": "光伏胶膜", "change_pct": 0.58}]}, {"code": "600367", "name": "红星发展", "hot_rank": 67, "hot_rank_chg": -20, "stock_cnt": 5813, "price": "39.09", "change": "2.14", "market_id": "17", "circulate_market_value": "12585931700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 68, "hot_rank_chg": 31, "stock_cnt": 5813, "price": "18.87", "change": "2.22", "market_id": "33", "circulate_market_value": "63469341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5813, "price": "14.07", "change": "-0.49", "market_id": "17", "circulate_market_value": "20720985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 70, "hot_rank_chg": 18, "stock_cnt": 5813, "price": "64.23", "change": "-4.06", "market_id": "17", "circulate_market_value": "26743298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 71, "hot_rank_chg": 21, "stock_cnt": 5813, "price": "7.49", "change": "-3.97", "market_id": "33", "circulate_market_value": "5449605600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.61}, {"name": "装配式建筑", "change_pct": 1.0}, {"name": "风电", "change_pct": 0.93}, {"name": "环氧丙烷", "change_pct": 0.71}, {"name": "乡村振兴", "change_pct": 0.86}, {"name": "建筑节能", "change_pct": 0.73}, {"name": "旧改", "change_pct": 1.02}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 72, "hot_rank_chg": -24, "stock_cnt": 5813, "price": "35.43", "change": "0.94", "market_id": "33", "circulate_market_value": "101332375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 73, "hot_rank_chg": 9, "stock_cnt": 5813, "price": "5.08", "change": "2.21", "market_id": "33", "circulate_market_value": "6587417000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.35}, {"name": "创新药", "change_pct": -0.25}, {"name": "央企改革", "change_pct": 0.87}, {"name": "医疗器械", "change_pct": 0.27}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "互联网医疗", "change_pct": -0.22}, {"name": "保健品", "change_pct": 0.14}, {"name": "民营医院", "change_pct": 0.69}, {"name": "CAR-T疗法", "change_pct": -0.64}, {"name": "医药", "change_pct": 0.05}, {"name": "化学原料药", "change_pct": -0.05}, {"name": "海南概念", "change_pct": 0.87}, {"name": "脑科学/脑机接口", "change_pct": 0.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.97}, {"name": "海南自由贸易港", "change_pct": 1.01}, {"name": "食品", "change_pct": 0.31}, {"name": "国企改革", "change_pct": 0.91}, {"name": "医疗信息化", "change_pct": 0.21}, {"name": "新冠病毒防治", "change_pct": 0.38}, {"name": "自贸区", "change_pct": 0.91}, {"name": "合成生物", "change_pct": 0.04}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 74, "hot_rank_chg": 6, "stock_cnt": 5813, "price": "53.12", "change": "-4.46", "market_id": "33", "circulate_market_value": "19574895000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 75, "hot_rank_chg": -2, "stock_cnt": 5813, "price": "129.16", "change": "0.12", "market_id": "17", "circulate_market_value": "311501480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688185", "name": "康希诺", "hot_rank": 76, "hot_rank_chg": 275, "stock_cnt": 5813, "price": "85.62", "change": "20.00", "market_id": "17", "circulate_market_value": "9792607800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "mRNA肿瘤疫苗"}, {"code": "002185", "name": "华天科技", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5813, "price": "16.83", "change": "-0.06", "market_id": "33", "circulate_market_value": "55977027000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 78, "hot_rank_chg": 66, "stock_cnt": 5813, "price": "48.57", "change": "10.01", "market_id": "17", "circulate_market_value": "100794766000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "600984", "name": "建设机械", "hot_rank": 80, "hot_rank_chg": 59, "stock_cnt": 5813, "price": "4.70", "change": "-4.86", "market_id": "17", "circulate_market_value": "5908106400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.76}, {"name": "机械", "change_pct": -0.1}, {"name": "复牌股", "change_pct": -0.48}, {"name": "国企改革", "change_pct": 0.91}, {"name": "陕西国企改革", "change_pct": 0.77}]}, {"code": "002017", "name": "东信和平", "hot_rank": 81, "hot_rank_chg": -40, "stock_cnt": 5813, "price": "16.55", "change": "-2.36", "market_id": "33", "circulate_market_value": "9601853000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 82, "hot_rank_chg": -10, "stock_cnt": 5813, "price": "26.33", "change": "-2.19", "market_id": "17", "circulate_market_value": "6378969100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002907", "name": "华森制药", "hot_rank": 83, "hot_rank_chg": 23, "stock_cnt": 5813, "price": "16.19", "change": "2.86", "market_id": "33", "circulate_market_value": "5489149100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 84, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "9.01", "change": "3.09", "market_id": "17", "circulate_market_value": "6385627600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601991", "name": "大唐发电", "hot_rank": 85, "hot_rank_chg": 33, "stock_cnt": 5813, "price": "5.85", "change": "0.69", "market_id": "17", "circulate_market_value": "72517121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.87}, {"name": "核电", "change_pct": 1.14}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "电力体制改革", "change_pct": 1.05}, {"name": "水电", "change_pct": 1.1}, {"name": "火电", "change_pct": 0.81}, {"name": "光伏", "change_pct": 1.24}, {"name": "风电", "change_pct": 0.93}, {"name": "国企改革", "change_pct": 0.91}, {"name": "算电协同", "change_pct": 0.76}]}, {"code": "000603", "name": "盛达资源", "hot_rank": 86, "hot_rank_chg": -29, "stock_cnt": 5813, "price": "37.70", "change": "3.94", "market_id": "33", "circulate_market_value": "25135207000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 87, "hot_rank_chg": -52, "stock_cnt": 5813, "price": "11.39", "change": "-3.31", "market_id": "17", "circulate_market_value": "3597916400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.36}, {"name": "冷链", "change_pct": 0.61}, {"name": "宁夏概念", "change_pct": 0.55}, {"name": "IP经济/谷子经济", "change_pct": 0.15}, {"name": "首发经济", "change_pct": 0.52}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 88, "hot_rank_chg": -28, "stock_cnt": 5813, "price": "63.56", "change": "-0.78", "market_id": "33", "circulate_market_value": "46037488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5813, "price": "255.01", "change": "-0.81", "market_id": "33", "circulate_market_value": "277549840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 90, "hot_rank_chg": -48, "stock_cnt": 5813, "price": "3.40", "change": "-2.02", "market_id": "33", "circulate_market_value": "15883946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.63}, {"name": "体育产业", "change_pct": 0.72}, {"name": "股权转让", "change_pct": 0.61}, {"name": "房地产", "change_pct": 1.23}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "京津冀", "change_pct": 0.89}, {"name": "旅游", "change_pct": 0.77}, {"name": "国产芯片", "change_pct": 0.44}, {"name": "内存", "change_pct": 0.07}, {"name": "闪存", "change_pct": 0.02}, {"name": "IP经济/谷子经济", "change_pct": 0.15}]}, {"code": "300534", "name": "陇神戎发", "hot_rank": 91, "hot_rank_chg": 150, "stock_cnt": 5813, "price": "16.16", "change": "-3.64", "market_id": "33", "circulate_market_value": "4881283800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 92, "hot_rank_chg": -26, "stock_cnt": 5813, "price": "40.07", "change": "-1.45", "market_id": "17", "circulate_market_value": "50953872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 93, "hot_rank_chg": 12, "stock_cnt": 5813, "price": "4.79", "change": "10.12", "market_id": "33", "circulate_market_value": "3087799000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.76}, {"name": "装修装饰", "change_pct": 1.04}, {"name": "装配式建筑", "change_pct": 1.0}, {"name": "家具家居", "change_pct": 0.79}, {"name": "复牌股", "change_pct": -0.48}, {"name": "智能制造", "change_pct": 0.36}, {"name": "3D打印", "change_pct": 0.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.28}, {"name": "旧改", "change_pct": 1.02}]}, {"code": "601700", "name": "风范股份", "hot_rank": 94, "hot_rank_chg": -31, "stock_cnt": 5813, "price": "7.76", "change": "3.33", "market_id": "17", "circulate_market_value": "8836756600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.76}, {"name": "强势人气股", "change_pct": 0.76}, {"name": "光伏", "change_pct": 1.24}, {"name": "特高压", "change_pct": 1.1}, {"name": "智能电网", "change_pct": 0.69}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 95, "hot_rank_chg": -40, "stock_cnt": 5813, "price": "9.85", "change": "-1.60", "market_id": "33", "circulate_market_value": "4578080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.76}, {"name": "云计算数据中心", "change_pct": 0.48}, {"name": "水利", "change_pct": 0.92}, {"name": "大数据", "change_pct": 0.39}, {"name": "海绵城市", "change_pct": 0.84}, {"name": "风电", "change_pct": 0.93}, {"name": "乡村振兴", "change_pct": 0.86}, {"name": "数字经济", "change_pct": 0.45}, {"name": "大基建", "change_pct": 0.84}, {"name": "东数西算/算力", "change_pct": 0.37}, {"name": "新型城镇化", "change_pct": 0.78}, {"name": "国企改革", "change_pct": 0.91}, {"name": "旧改", "change_pct": 1.02}, {"name": "西部大开发", "change_pct": 0.88}, {"name": "低空经济", "change_pct": 0.26}, {"name": "房屋检测", "change_pct": 0.63}]}, {"code": "300433", "name": "蓝思科技", "hot_rank": 96, "hot_rank_chg": 42, "stock_cnt": 5813, "price": "39.37", "change": "3.88", "market_id": "33", "circulate_market_value": "195558230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 97, "hot_rank_chg": 100, "stock_cnt": 5813, "price": "250.04", "change": "2.06", "market_id": "33", "circulate_market_value": "216333340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 98, "hot_rank_chg": -29, "stock_cnt": 5813, "price": "173.70", "change": "0.85", "market_id": "33", "circulate_market_value": "55070518000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 99, "hot_rank_chg": -23, "stock_cnt": 5813, "price": "64.03", "change": "0.34", "market_id": "33", "circulate_market_value": "93064532000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5813, "price": "20.99", "change": "1.84", "market_id": "33", "circulate_market_value": "19493559000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600745": "ST/风险警示股"};