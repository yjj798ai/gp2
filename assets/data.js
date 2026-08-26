const UPDATE_TIME = "2026-08-26 12:41";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "黄金概念",
    "rise": 1.64,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续278天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "数字货币",
    "rise": 0.98,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "液冷服务器",
    "rise": -0.29,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "PCB概念",
    "rise": -0.16,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -0.09,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续231天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "光纤概念",
    "rise": 0.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "互联网金融",
    "rise": 1.03,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "金融科技ETF",
    "code": "885456"
  },
  {
    "name": "金属铜",
    "rise": 2.24,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "有色ETF",
    "code": "885973"
  },
  {
    "name": "可控核聚变",
    "rise": 0.95,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电网设备ETF",
    "code": "886065"
  },
  {
    "name": "算力租赁",
    "rise": 0.27,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续142天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "商业航天",
    "rise": 0.01,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续207天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "粮食概念",
    "rise": 0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "AI应用",
    "rise": -0.11,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "ST板块",
    "rise": 0.87,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "人形机器人",
    "rise": -0.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续442天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": -0.77,
    "rate": 0,
    "tag": "",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "绿色电力",
    "rise": 0.75,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "绿色电力ETF",
    "code": "885936"
  },
  {
    "name": "金属锌",
    "rise": 2.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "工业有色ETF",
    "code": "885970"
  }
];
const THS_EVENTS = [
  {
    "title": "有色金属强势爆发，发生了什么？",
    "desc": "",
    "heat": 328266,
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
        "name": "精艺股份",
        "code": "002295",
        "chg": 10.032715
      }
    ]
  },
  {
    "title": "券商观点：味之素或将削减30%ABF膜供货量，国产替代有望加速",
    "desc": "",
    "heat": 215297,
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
    "title": "《全国农产品产地市场体系发展“十五五”规划》印发",
    "desc": "",
    "heat": 210163,
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
    "title": "中国聚变等9家企业将协同攻关高温超导强场托卡马克磁体研制",
    "desc": "",
    "heat": 153025,
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
    "title": "碳酸锂价格触底反弹 7股上半年净利翻倍",
    "desc": "",
    "heat": 145010,
    "direction": "碳酸锂",
    "themes": [
      "锂电池概念"
    ],
    "stocks": [
      {
        "name": "超频三",
        "code": "300647",
        "chg": 16.323024
      }
    ]
  },
  {
    "title": "多部门研究完善“六张网”多元化投融资模式",
    "desc": "",
    "heat": 109948,
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
        "name": "艾可蓝",
        "code": "300816",
        "chg": 11.179056
      }
    ]
  },
  {
    "title": "康希诺与德普世生物达成mRNA治疗型肿瘤疫苗战略合作",
    "desc": "",
    "heat": 72200,
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
    "title": "自动驾驶入法！道交法修订草案设置“自动驾驶汽车的特别规定”专章",
    "desc": "",
    "heat": 54408,
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
    "title": "国家药监局：支持仿制药高质量发展 强化特殊人群用药保障",
    "desc": "",
    "heat": 36512,
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
    "title": "集邦咨询：存储器合约价持续飙升，预估2027年占主要CSP资本支出比重将达68%",
    "desc": "",
    "heat": 35296,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "凯瑞德",
        "code": "002072",
        "chg": 10.068027
      }
    ]
  },
  {
    "title": "苹果折叠屏手机面世在即 相关概念股提前异动",
    "desc": "",
    "heat": 2715,
    "direction": "苹果折叠屏手机",
    "themes": [
      "苹果概念",
      "柔性屏(折叠屏)"
    ],
    "stocks": [
      {
        "name": "宜安科技",
        "code": "300328",
        "chg": 8.042394
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "疫苗",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+3.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+3.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "期货概念",
    "change": "+3.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "+2.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钒",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超导概念",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钼",
    "change": "+2.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+2.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镍",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+2.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黑龙江自贸区",
    "change": "+1.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+1.79%",
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
    "hot_rank": 7,
    "hot_rank_chg": 0,
    "stock_cnt": 5798,
    "price": "5.66",
    "change": "2.91",
    "market_id": "33",
    "circulate_market_value": "15013436000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.03
      },
      {
        "name": "装修装饰",
        "change_pct": 0.54
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.61
      },
      {
        "name": "航天",
        "change_pct": -0.26
      },
      {
        "name": "旧改",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 8,
    "hot_rank_chg": 19,
    "stock_cnt": 5798,
    "price": "11.32",
    "change": "5.11",
    "market_id": "33",
    "circulate_market_value": "26290425000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -1.11
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.1
      },
      {
        "name": "有色 · 锑",
        "change_pct": 2.23
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.7
      },
      {
        "name": "有色 · 锌",
        "change_pct": 3.15
      },
      {
        "name": "有色金属",
        "change_pct": 1.51
      },
      {
        "name": "国企改革",
        "change_pct": 0.74
      },
      {
        "name": "白银",
        "change_pct": 3.01
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 10,
    "hot_rank_chg": -5,
    "stock_cnt": 5798,
    "price": "9.80",
    "change": "5.26",
    "market_id": "17",
    "circulate_market_value": "6289475500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.36
      },
      {
        "name": "农业种植",
        "change_pct": 0.72
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.7
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.76
      },
      {
        "name": "休闲食品",
        "change_pct": 0.56
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "食品安全",
        "change_pct": 0.57
      },
      {
        "name": "社区团购",
        "change_pct": 0.42
      },
      {
        "name": "大农业",
        "change_pct": 0.81
      },
      {
        "name": "预制菜",
        "change_pct": 0.05
      },
      {
        "name": "人造肉",
        "change_pct": 0.69
      },
      {
        "name": "国企改革",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 17,
    "hot_rank_chg": -9,
    "stock_cnt": 5798,
    "price": "8.18",
    "change": "-0.36",
    "market_id": "17",
    "circulate_market_value": "20601411000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.11
      },
      {
        "name": "工业大麻",
        "change_pct": 0.79
      },
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "保健品",
        "change_pct": 0.37
      },
      {
        "name": "民营医院",
        "change_pct": 0.37
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "化学原料药",
        "change_pct": 0.07
      },
      {
        "name": "流感",
        "change_pct": 0.5
      },
      {
        "name": "振兴东北",
        "change_pct": 0.86
      },
      {
        "name": "食品",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 20,
    "hot_rank_chg": 14,
    "stock_cnt": 5798,
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
        "change_pct": 0.86
      },
      {
        "name": "锂电池",
        "change_pct": 0.59
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.29
      },
      {
        "name": "两轮车",
        "change_pct": -0.17
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.71
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 24,
    "hot_rank_chg": 22,
    "stock_cnt": 5798,
    "price": "11.66",
    "change": "3.64",
    "market_id": "17",
    "circulate_market_value": "20232210000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.01
      },
      {
        "name": "核电",
        "change_pct": 0.75
      },
      {
        "name": "锂电池",
        "change_pct": 0.59
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.56
      },
      {
        "name": "PCB板",
        "change_pct": -0.19
      },
      {
        "name": "中科院系",
        "change_pct": -0.31
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.29
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.26
      },
      {
        "name": "固态电池",
        "change_pct": 0.73
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 29,
    "hot_rank_chg": -16,
    "stock_cnt": 5798,
    "price": "10.55",
    "change": "2.73",
    "market_id": "17",
    "circulate_market_value": "5056825800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "医药商业",
        "change_pct": 0.0
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "流感",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 32,
    "hot_rank_chg": 125,
    "stock_cnt": 5798,
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
        "change_pct": 0.71
      },
      {
        "name": "化肥",
        "change_pct": 1.65
      },
      {
        "name": "保健品",
        "change_pct": 0.37
      },
      {
        "name": "民营医院",
        "change_pct": 0.37
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "煤化工",
        "change_pct": 0.37
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "大农业",
        "change_pct": 0.81
      },
      {
        "name": "干细胞",
        "change_pct": -0.21
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 36,
    "hot_rank_chg": -10,
    "stock_cnt": 5798,
    "price": "5.72",
    "change": "-0.35",
    "market_id": "33",
    "circulate_market_value": "202300010000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.49
      },
      {
        "name": "手机产业链",
        "change_pct": -0.43
      },
      {
        "name": "超高清视频",
        "change_pct": -0.04
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.34
      },
      {
        "name": "电竞",
        "change_pct": 0.06
      },
      {
        "name": "半导体",
        "change_pct": -0.17
      },
      {
        "name": "人工智能",
        "change_pct": -0.14
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.3
      },
      {
        "name": "VR&AR",
        "change_pct": -0.4
      },
      {
        "name": "OLED",
        "change_pct": -0.2
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "物联网",
        "change_pct": -0.06
      },
      {
        "name": "指纹识别",
        "change_pct": -0.18
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.1
      },
      {
        "name": "白马股",
        "change_pct": 0.59
      },
      {
        "name": "智能制造",
        "change_pct": -0.1
      },
      {
        "name": "小米概念股",
        "change_pct": -0.27
      },
      {
        "name": "国产芯片",
        "change_pct": -0.28
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.12
      },
      {
        "name": "全息概念",
        "change_pct": -0.01
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.07
      },
      {
        "name": "MicroLED",
        "change_pct": -0.38
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.67
      },
      {
        "name": "智能手表",
        "change_pct": 0.58
      },
      {
        "name": "MiniLED",
        "change_pct": -0.13
      },
      {
        "name": "传感器",
        "change_pct": -0.21
      },
      {
        "name": "大硅片",
        "change_pct": -0.6
      },
      {
        "name": "AI PC",
        "change_pct": -0.24
      },
      {
        "name": "华为产业链",
        "change_pct": -0.09
      },
      {
        "name": "回购",
        "change_pct": 0.57
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.23
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.5
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 37,
    "hot_rank_chg": -18,
    "stock_cnt": 5798,
    "price": "4.14",
    "change": "-3.72",
    "market_id": "33",
    "circulate_market_value": "8705080000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "维生素",
        "change_pct": 0.36
      },
      {
        "name": "基因测序",
        "change_pct": 0.03
      },
      {
        "name": "民营医院",
        "change_pct": 0.37
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "化学原料药",
        "change_pct": 0.07
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 41,
    "hot_rank_chg": 12,
    "stock_cnt": 5798,
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
        "change_pct": 1.29
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.03
      },
      {
        "name": "光通信",
        "change_pct": -0.31
      },
      {
        "name": "林业",
        "change_pct": 0.06
      },
      {
        "name": "军民融合",
        "change_pct": -0.16
      },
      {
        "name": "军工",
        "change_pct": -0.02
      },
      {
        "name": "人造肉",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 43,
    "hot_rank_chg": 21,
    "stock_cnt": 5798,
    "price": "4.74",
    "change": "2.60",
    "market_id": "33",
    "circulate_market_value": "3626767100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "股权转让",
        "change_pct": 0.16
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.0
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "医药商业",
        "change_pct": 0.0
      },
      {
        "name": "保健品",
        "change_pct": 0.37
      },
      {
        "name": "民营医院",
        "change_pct": 0.37
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.57
      },
      {
        "name": "口腔",
        "change_pct": 0.81
      },
      {
        "name": "医美",
        "change_pct": 0.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "002445",
    "name": "中南文化",
    "hot_rank": 57,
    "hot_rank_chg": 13,
    "stock_cnt": 5798,
    "price": "3.60",
    "change": "-2.96",
    "market_id": "33",
    "circulate_market_value": "8518515200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": -0.14
      },
      {
        "name": "VR&AR",
        "change_pct": -0.4
      },
      {
        "name": "影视",
        "change_pct": 0.76
      },
      {
        "name": "光伏",
        "change_pct": 0.66
      },
      {
        "name": "复牌股",
        "change_pct": -1.42
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.65
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": -0.87
      },
      {
        "name": "国企改革",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 58,
    "hot_rank_chg": 170,
    "stock_cnt": 5798,
    "price": "6.75",
    "change": "4.98",
    "market_id": "33",
    "circulate_market_value": "75215180000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -1.11
      },
      {
        "name": "锂电池",
        "change_pct": 0.59
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.54
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.1
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.56
      },
      {
        "name": "有色金属",
        "change_pct": 1.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.29
      },
      {
        "name": "人民币升值受益",
        "change_pct": 1.64
      },
      {
        "name": "硫酸",
        "change_pct": 1.62
      },
      {
        "name": "国企改革",
        "change_pct": 0.74
      },
      {
        "name": "白银",
        "change_pct": 3.01
      },
      {
        "name": "有色 · 镍",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 61,
    "hot_rank_chg": 676,
    "stock_cnt": 5798,
    "price": "9.75",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "8733407700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "证券业务",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.16
      },
      {
        "name": "期货概念",
        "change_pct": 3.02
      },
      {
        "name": "券商",
        "change_pct": 2.99
      },
      {
        "name": "大金融",
        "change_pct": 1.62
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 63,
    "hot_rank_chg": -4,
    "stock_cnt": 5798,
    "price": "11.35",
    "change": "-1.73",
    "market_id": "17",
    "circulate_market_value": "20306720000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.09
      },
      {
        "name": "纯碱",
        "change_pct": 0.63
      },
      {
        "name": "食品",
        "change_pct": 0.19
      },
      {
        "name": "土壤修复",
        "change_pct": 0.58
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.05
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.1
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.14
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 67,
    "hot_rank_chg": 20,
    "stock_cnt": 5798,
    "price": "9.24",
    "change": "5.72",
    "market_id": "17",
    "circulate_market_value": "6548634800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 74,
    "hot_rank_chg": 37,
    "stock_cnt": 5798,
    "price": "5.43",
    "change": "4.02",
    "market_id": "33",
    "circulate_market_value": "4078090400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.52
      },
      {
        "name": "创新药",
        "change_pct": -0.12
      },
      {
        "name": "养老产业",
        "change_pct": 0.31
      },
      {
        "name": "医药",
        "change_pct": 0.16
      },
      {
        "name": "化学原料药",
        "change_pct": 0.07
      },
      {
        "name": "口腔",
        "change_pct": 0.81
      }
    ]
  },
  {
    "code": "002721",
    "name": "金一文化",
    "hot_rank": 75,
    "hot_rank_chg": 233,
    "stock_cnt": 5798,
    "price": "3.08",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8190886100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.44
      },
      {
        "name": "金融科技",
        "change_pct": 1.15
      },
      {
        "name": "人工智能",
        "change_pct": -0.14
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.71
      },
      {
        "name": "数字人民币",
        "change_pct": 1.07
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 78,
    "hot_rank_chg": 5,
    "stock_cnt": 5798,
    "price": "11.18",
    "change": "2.19",
    "market_id": "17",
    "circulate_market_value": "4837291400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "光伏",
        "change_pct": 0.66
      },
      {
        "name": "无线耳机",
        "change_pct": 0.17
      },
      {
        "name": "华为产业链",
        "change_pct": -0.09
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 83,
    "hot_rank_chg": 9,
    "stock_cnt": 5798,
    "price": "7.45",
    "change": "-4.49",
    "market_id": "33",
    "circulate_market_value": "5420502300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.14
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.61
      },
      {
        "name": "风电",
        "change_pct": 0.57
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.47
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.76
      },
      {
        "name": "建筑节能",
        "change_pct": 0.38
      },
      {
        "name": "旧改",
        "change_pct": 0.7
      }
    ]
  },
  {
    "code": "600095",
    "name": "湘财股份",
    "hot_rank": 87,
    "hot_rank_chg": 1774,
    "stock_cnt": 5798,
    "price": "8.67",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "24789158000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "证券",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.42
      },
      {
        "name": "券商",
        "change_pct": 2.99
      },
      {
        "name": "金融科技",
        "change_pct": 1.15
      },
      {
        "name": "大金融",
        "change_pct": 1.62
      },
      {
        "name": "人造肉",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 88,
    "hot_rank_chg": -34,
    "stock_cnt": 5798,
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
        "change_pct": 0.15
      },
      {
        "name": "锂电池",
        "change_pct": 0.59
      },
      {
        "name": "石墨烯",
        "change_pct": 0.46
      },
      {
        "name": "新能源整车",
        "change_pct": 0.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.03
      },
      {
        "name": "汽车整车",
        "change_pct": 0.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.29
      },
      {
        "name": "白色家电",
        "change_pct": -0.26
      },
      {
        "name": "家电",
        "change_pct": -0.06
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.25
      },
      {
        "name": "热泵",
        "change_pct": -0.2
      },
      {
        "name": "轮边电机",
        "change_pct": 0.29
      },
      {
        "name": "超级电容",
        "change_pct": 0.6
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 95,
    "hot_rank_chg": -32,
    "stock_cnt": 5798,
    "price": "7.70",
    "change": "2.53",
    "market_id": "17",
    "circulate_market_value": "8768431200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.5
      },
      {
        "name": "强势人气股",
        "change_pct": 0.74
      },
      {
        "name": "光伏",
        "change_pct": 0.66
      },
      {
        "name": "特高压",
        "change_pct": 0.56
      },
      {
        "name": "智能电网",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 96,
    "hot_rank_chg": 22,
    "stock_cnt": 5798,
    "price": "5.94",
    "change": "2.24",
    "market_id": "17",
    "circulate_market_value": "73632769000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.65
      },
      {
        "name": "核电",
        "change_pct": 0.75
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.36
      },
      {
        "name": "水电",
        "change_pct": 1.16
      },
      {
        "name": "火电",
        "change_pct": 1.37
      },
      {
        "name": "光伏",
        "change_pct": 0.66
      },
      {
        "name": "风电",
        "change_pct": 0.57
      },
      {
        "name": "国企改革",
        "change_pct": 0.74
      },
      {
        "name": "算电协同",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "002094",
    "name": "青岛金王",
    "hot_rank": 98,
    "hot_rank_chg": 57,
    "stock_cnt": 5798,
    "price": "5.65",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "3901062600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "CIPS",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.11
      },
      {
        "name": "债转股 · AMC",
        "change_pct": 1.48
      },
      {
        "name": "新零售",
        "change_pct": 0.08
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.18
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.07
      },
      {
        "name": "医美",
        "change_pct": 0.21
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.14
      },
      {
        "name": "C2M",
        "change_pct": 0.57
      },
      {
        "name": "化妆品",
        "change_pct": 0.63
      },
      {
        "name": "自贸区",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 99,
    "hot_rank_chg": -57,
    "stock_cnt": 5798,
    "price": "3.36",
    "change": "-3.17",
    "market_id": "33",
    "circulate_market_value": "15697076000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.28
      },
      {
        "name": "体育产业",
        "change_pct": 0.44
      },
      {
        "name": "股权转让",
        "change_pct": 0.16
      },
      {
        "name": "房地产",
        "change_pct": 0.98
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.03
      },
      {
        "name": "京津冀",
        "change_pct": 0.6
      },
      {
        "name": "旅游",
        "change_pct": 0.87
      },
      {
        "name": "国产芯片",
        "change_pct": -0.28
      },
      {
        "name": "内存",
        "change_pct": -0.66
      },
      {
        "name": "闪存",
        "change_pct": -0.8
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.02
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "591.53", "change": "-1.87", "market_id": "17", "circulate_market_value": "17797789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5798, "price": "17.03", "change": "10.01", "market_id": "33", "circulate_market_value": "7780159900.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "数字人民币"}, {"code": "600487", "name": "亨通光电", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "64.83", "change": "0.36", "market_id": "17", "circulate_market_value": "159069890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5798, "price": "13.09", "change": "6.16", "market_id": "33", "circulate_market_value": "6516791100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "31.92", "change": "9.99", "market_id": "17", "circulate_market_value": "22068710000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报高增"}, {"code": "002081", "name": "金螳螂", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5798, "price": "5.66", "change": "2.91", "market_id": "33", "circulate_market_value": "15013436000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.74}, {"name": "云计算数据中心", "change_pct": -0.03}, {"name": "装修装饰", "change_pct": 0.54}, {"name": "装配式建筑", "change_pct": 0.61}, {"name": "航天", "change_pct": -0.26}, {"name": "旧改", "change_pct": 0.7}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 8, "hot_rank_chg": 19, "stock_cnt": 5798, "price": "11.32", "change": "5.11", "market_id": "33", "circulate_market_value": "26290425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -1.11}, {"name": "有色 · 铜", "change_pct": 3.1}, {"name": "有色 · 锑", "change_pct": 2.23}, {"name": "湖南国企改革", "change_pct": 1.7}, {"name": "有色 · 锌", "change_pct": 3.15}, {"name": "有色金属", "change_pct": 1.51}, {"name": "国企改革", "change_pct": 0.74}, {"name": "白银", "change_pct": 3.01}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 9, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "14.14", "change": "0.86", "market_id": "17", "circulate_market_value": "9619720200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5798, "price": "9.80", "change": "5.26", "market_id": "17", "circulate_market_value": "6289475500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.36}, {"name": "农业种植", "change_pct": 0.72}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "湖南国企改革", "change_pct": 1.7}, {"name": "乡村振兴", "change_pct": 0.76}, {"name": "休闲食品", "change_pct": 0.56}, {"name": "食品", "change_pct": 0.19}, {"name": "食品安全", "change_pct": 0.57}, {"name": "社区团购", "change_pct": 0.42}, {"name": "大农业", "change_pct": 0.81}, {"name": "预制菜", "change_pct": 0.05}, {"name": "人造肉", "change_pct": 0.69}, {"name": "国企改革", "change_pct": 0.74}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "22.48", "change": "5.05", "market_id": "33", "circulate_market_value": "26447019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5798, "price": "17.14", "change": "7.93", "market_id": "33", "circulate_market_value": "27823784000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5798, "price": "62.07", "change": "3.06", "market_id": "33", "circulate_market_value": "70340213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "15.16", "change": "1.34", "market_id": "17", "circulate_market_value": "5829742100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 15, "hot_rank_chg": 129, "stock_cnt": 5798, "price": "48.57", "change": "10.01", "market_id": "17", "circulate_market_value": "100794766000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "388.02", "change": "-1.64", "market_id": "17", "circulate_market_value": "157667390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 17, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "8.18", "change": "-0.36", "market_id": "17", "circulate_market_value": "20601411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.11}, {"name": "工业大麻", "change_pct": 0.79}, {"name": "中药", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "保健品", "change_pct": 0.37}, {"name": "民营医院", "change_pct": 0.37}, {"name": "医药", "change_pct": 0.16}, {"name": "化学原料药", "change_pct": 0.07}, {"name": "流感", "change_pct": 0.5}, {"name": "振兴东北", "change_pct": 0.86}, {"name": "食品", "change_pct": 0.19}]}, {"code": "600869", "name": "远东股份", "hot_rank": 18, "hot_rank_chg": 10, "stock_cnt": 5798, "price": "17.32", "change": "6.91", "market_id": "17", "circulate_market_value": "38439190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 19, "hot_rank_chg": 39, "stock_cnt": 5798, "price": "34.47", "change": "2.35", "market_id": "17", "circulate_market_value": "710143810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 20, "hot_rank_chg": 14, "stock_cnt": 5798, "price": "9.46", "change": "10.00", "market_id": "33", "circulate_market_value": "4170175700.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.86}, {"name": "锂电池", "change_pct": 0.59}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "新能源汽车", "change_pct": 0.29}, {"name": "两轮车", "change_pct": -0.17}, {"name": "珠宝饰品", "change_pct": 0.71}]}, {"code": "600272", "name": "开开实业", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "21.10", "change": "10.01", "market_id": "17", "circulate_market_value": "3376000000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "SPD"}, {"code": "300308", "name": "中际旭创", "hot_rank": 22, "hot_rank_chg": -6, "stock_cnt": 5798, "price": "850.90", "change": "0.58", "market_id": "33", "circulate_market_value": "944446480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 23, "hot_rank_chg": 107, "stock_cnt": 5798, "price": "19.59", "change": "6.35", "market_id": "17", "circulate_market_value": "342057900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 24, "hot_rank_chg": 22, "stock_cnt": 5798, "price": "11.66", "change": "3.64", "market_id": "17", "circulate_market_value": "20232210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.01}, {"name": "核电", "change_pct": 0.75}, {"name": "锂电池", "change_pct": 0.59}, {"name": "铜箔/覆铜板", "change_pct": 0.56}, {"name": "PCB板", "change_pct": -0.19}, {"name": "中科院系", "change_pct": -0.31}, {"name": "新能源汽车", "change_pct": 0.29}, {"name": "宁德时代概念股", "change_pct": 0.26}, {"name": "固态电池", "change_pct": 0.73}, {"name": "PET复合铜箔", "change_pct": -0.14}]}, {"code": "600460", "name": "士兰微", "hot_rank": 25, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "33.07", "change": "-3.64", "market_id": "17", "circulate_market_value": "55030856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 26, "hot_rank_chg": 31, "stock_cnt": 5798, "price": "37.16", "change": "2.45", "market_id": "33", "circulate_market_value": "24775180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 27, "hot_rank_chg": -12, "stock_cnt": 5798, "price": "56.10", "change": "-0.71", "market_id": "17", "circulate_market_value": "252620490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 28, "hot_rank_chg": 1, "stock_cnt": 5798, "price": "21.63", "change": "1.88", "market_id": "33", "circulate_market_value": "9784088200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 29, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "10.55", "change": "2.73", "market_id": "17", "circulate_market_value": "5056825800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "医药商业", "change_pct": 0.0}, {"name": "医药", "change_pct": 0.16}, {"name": "流感", "change_pct": 0.5}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 30, "hot_rank_chg": -13, "stock_cnt": 5798, "price": "392.50", "change": "-0.76", "market_id": "17", "circulate_market_value": "262383080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 31, "hot_rank_chg": -6, "stock_cnt": 5798, "price": "31.40", "change": "4.88", "market_id": "17", "circulate_market_value": "12591400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 32, "hot_rank_chg": 125, "stock_cnt": 5798, "price": "4.19", "change": "9.97", "market_id": "17", "circulate_market_value": "5353143200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.71}, {"name": "化肥", "change_pct": 1.65}, {"name": "保健品", "change_pct": 0.37}, {"name": "民营医院", "change_pct": 0.37}, {"name": "医药", "change_pct": 0.16}, {"name": "煤化工", "change_pct": 0.37}, {"name": "食品", "change_pct": 0.19}, {"name": "大农业", "change_pct": 0.81}, {"name": "干细胞", "change_pct": -0.21}, {"name": "阿尔茨海默病", "change_pct": 0.09}]}, {"code": "600667", "name": "太极实业", "hot_rank": 33, "hot_rank_chg": 3, "stock_cnt": 5798, "price": "19.63", "change": "-1.55", "market_id": "17", "circulate_market_value": "41056973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 34, "hot_rank_chg": 10, "stock_cnt": 5798, "price": "194.36", "change": "1.84", "market_id": "33", "circulate_market_value": "269445490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 35, "hot_rank_chg": 26, "stock_cnt": 5798, "price": "119.22", "change": "4.31", "market_id": "33", "circulate_market_value": "229242380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 36, "hot_rank_chg": -10, "stock_cnt": 5798, "price": "5.72", "change": "-0.35", "market_id": "33", "circulate_market_value": "202300010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.49}, {"name": "手机产业链", "change_pct": -0.43}, {"name": "超高清视频", "change_pct": -0.04}, {"name": "苹果产业链", "change_pct": -0.34}, {"name": "电竞", "change_pct": 0.06}, {"name": "半导体", "change_pct": -0.17}, {"name": "人工智能", "change_pct": -0.14}, {"name": "互联网医疗", "change_pct": -0.3}, {"name": "VR&AR", "change_pct": -0.4}, {"name": "OLED", "change_pct": -0.2}, {"name": "京津冀", "change_pct": 0.6}, {"name": "物联网", "change_pct": -0.06}, {"name": "指纹识别", "change_pct": -0.18}, {"name": "汽车零部件", "change_pct": -0.1}, {"name": "白马股", "change_pct": 0.59}, {"name": "智能制造", "change_pct": -0.1}, {"name": "小米概念股", "change_pct": -0.27}, {"name": "国产芯片", "change_pct": -0.28}, {"name": "液晶面板/LCD", "change_pct": -0.12}, {"name": "全息概念", "change_pct": -0.01}, {"name": "理想汽车概念股", "change_pct": -0.07}, {"name": "MicroLED", "change_pct": -0.38}, {"name": "钙钛矿电池", "change_pct": 0.67}, {"name": "智能手表", "change_pct": 0.58}, {"name": "MiniLED", "change_pct": -0.13}, {"name": "传感器", "change_pct": -0.21}, {"name": "大硅片", "change_pct": -0.6}, {"name": "AI PC", "change_pct": -0.24}, {"name": "华为产业链", "change_pct": -0.09}, {"name": "回购", "change_pct": 0.57}, {"name": "光电共封装CPO", "change_pct": -0.23}, {"name": "智能眼镜/MR头显", "change_pct": -0.5}, {"name": "玻璃基板封装", "change_pct": -0.97}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 37, "hot_rank_chg": -18, "stock_cnt": 5798, "price": "4.14", "change": "-3.72", "market_id": "33", "circulate_market_value": "8705080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "维生素", "change_pct": 0.36}, {"name": "基因测序", "change_pct": 0.03}, {"name": "民营医院", "change_pct": 0.37}, {"name": "医药", "change_pct": 0.16}, {"name": "化学原料药", "change_pct": 0.07}, {"name": "PD-1抑制剂", "change_pct": 0.27}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 38, "hot_rank_chg": -24, "stock_cnt": 5798, "price": "13.90", "change": "-0.64", "market_id": "17", "circulate_market_value": "17836461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 39, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "50.33", "change": "-1.60", "market_id": "17", "circulate_market_value": "42607029000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "33.41", "change": "-1.42", "market_id": "17", "circulate_market_value": "114026648000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 41, "hot_rank_chg": 12, "stock_cnt": 5798, "price": "3.47", "change": "10.16", "market_id": "17", "circulate_market_value": "7676781800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光模块", "xgb_concepts": [{"name": "造纸", "change_pct": 1.29}, {"name": "云计算数据中心", "change_pct": -0.03}, {"name": "光通信", "change_pct": -0.31}, {"name": "林业", "change_pct": 0.06}, {"name": "军民融合", "change_pct": -0.16}, {"name": "军工", "change_pct": -0.02}, {"name": "人造肉", "change_pct": 0.69}]}, {"code": "300059", "name": "东方财富", "hot_rank": 42, "hot_rank_chg": 235, "stock_cnt": 5798, "price": "19.36", "change": "2.27", "market_id": "33", "circulate_market_value": "259276200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 43, "hot_rank_chg": 21, "stock_cnt": 5798, "price": "4.74", "change": "2.60", "market_id": "33", "circulate_market_value": "3626767100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.52}, {"name": "股权转让", "change_pct": 0.16}, {"name": "优化生育（三孩）", "change_pct": 0.0}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "医药商业", "change_pct": 0.0}, {"name": "保健品", "change_pct": 0.37}, {"name": "民营医院", "change_pct": 0.37}, {"name": "医药", "change_pct": 0.16}, {"name": "食品", "change_pct": 0.19}, {"name": "辅助生殖", "change_pct": -0.57}, {"name": "口腔", "change_pct": 0.81}, {"name": "医美", "change_pct": 0.21}, {"name": "新冠病毒防治", "change_pct": 0.16}]}, {"code": "002407", "name": "多氟多", "hot_rank": 44, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "34.05", "change": "0.50", "market_id": "33", "circulate_market_value": "36805268000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 45, "hot_rank_chg": 200, "stock_cnt": 5798, "price": "190.85", "change": "10.00", "market_id": "17", "circulate_market_value": "52596041000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高速光模块"}, {"code": "002703", "name": "浙江世宝", "hot_rank": 46, "hot_rank_chg": -13, "stock_cnt": 5798, "price": "17.46", "change": "10.02", "market_id": "33", "circulate_market_value": "10232399400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "无人驾驶"}, {"code": "000636", "name": "风华高科", "hot_rank": 47, "hot_rank_chg": -9, "stock_cnt": 5798, "price": "51.01", "change": "-0.62", "market_id": "33", "circulate_market_value": "58533463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 48, "hot_rank_chg": 46, "stock_cnt": 5798, "price": "20.21", "change": "-1.94", "market_id": "33", "circulate_market_value": "18769168000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 49, "hot_rank_chg": -6, "stock_cnt": 5798, "price": "39.50", "change": "-0.73", "market_id": "17", "circulate_market_value": "156877690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 50, "hot_rank_chg": 17, "stock_cnt": 5798, "price": "398.78", "change": "-0.52", "market_id": "33", "circulate_market_value": "500167090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 51, "hot_rank_chg": 76, "stock_cnt": 5798, "price": "54.24", "change": "-1.42", "market_id": "33", "circulate_market_value": "12673676400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 52, "hot_rank_chg": 55, "stock_cnt": 5798, "price": "17.88", "change": "10.03", "market_id": "17", "circulate_market_value": "14076502000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 53, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "39.14", "change": "1.72", "market_id": "17", "circulate_market_value": "57222477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 54, "hot_rank_chg": -17, "stock_cnt": 5798, "price": "73.62", "change": "-0.58", "market_id": "17", "circulate_market_value": "131736701000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 55, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "93.47", "change": "-0.81", "market_id": "33", "circulate_market_value": "61039240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300142", "name": "沃森生物", "hot_rank": 56, "hot_rank_chg": 30, "stock_cnt": 5798, "price": "15.26", "change": "5.83", "market_id": "33", "circulate_market_value": "24063808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002445", "name": "中南文化", "hot_rank": 57, "hot_rank_chg": 13, "stock_cnt": 5798, "price": "3.60", "change": "-2.96", "market_id": "33", "circulate_market_value": "8518515200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": -0.14}, {"name": "VR&AR", "change_pct": -0.4}, {"name": "影视", "change_pct": 0.76}, {"name": "光伏", "change_pct": 0.66}, {"name": "复牌股", "change_pct": -1.42}, {"name": "江苏国企改革", "change_pct": 0.65}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": -0.87}, {"name": "国企改革", "change_pct": 0.74}]}, {"code": "000630", "name": "铜陵有色", "hot_rank": 58, "hot_rank_chg": 170, "stock_cnt": 5798, "price": "6.75", "change": "4.98", "market_id": "33", "circulate_market_value": "75215180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -1.11}, {"name": "锂电池", "change_pct": 0.59}, {"name": "安徽国企改革", "change_pct": 0.54}, {"name": "有色 · 铜", "change_pct": 3.1}, {"name": "铜箔/覆铜板", "change_pct": 0.56}, {"name": "有色金属", "change_pct": 1.51}, {"name": "新能源汽车", "change_pct": 0.29}, {"name": "人民币升值受益", "change_pct": 1.64}, {"name": "硫酸", "change_pct": 1.62}, {"name": "国企改革", "change_pct": 0.74}, {"name": "白银", "change_pct": 3.01}, {"name": "有色 · 镍", "change_pct": 2.3}]}, {"code": "603629", "name": "利通电子", "hot_rank": 59, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "117.57", "change": "-1.45", "market_id": "17", "circulate_market_value": "42410250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 60, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "14.97", "change": "5.87", "market_id": "17", "circulate_market_value": "22046421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 61, "hot_rank_chg": 676, "stock_cnt": 5798, "price": "9.75", "change": "10.04", "market_id": "33", "circulate_market_value": "8733407700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "证券业务", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.16}, {"name": "期货概念", "change_pct": 3.02}, {"name": "券商", "change_pct": 2.99}, {"name": "大金融", "change_pct": 1.62}, {"name": "东数西算/算力", "change_pct": -0.05}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 62, "hot_rank_chg": 18, "stock_cnt": 5798, "price": "51.90", "change": "-6.66", "market_id": "33", "circulate_market_value": "19125321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 63, "hot_rank_chg": -4, "stock_cnt": 5798, "price": "11.35", "change": "-1.73", "market_id": "17", "circulate_market_value": "20306720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.09}, {"name": "纯碱", "change_pct": 0.63}, {"name": "食品", "change_pct": 0.19}, {"name": "土壤修复", "change_pct": 0.58}, {"name": "东数西算/算力", "change_pct": -0.05}, {"name": "OpenClaw概念", "change_pct": -0.1}, {"name": "DeepSeek概念股", "change_pct": -0.14}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 64, "hot_rank_chg": 12, "stock_cnt": 5798, "price": "63.01", "change": "-1.25", "market_id": "33", "circulate_market_value": "91582011000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 65, "hot_rank_chg": 73, "stock_cnt": 5798, "price": "39.02", "change": "2.96", "market_id": "33", "circulate_market_value": "193819720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300033", "name": "同花顺", "hot_rank": 66, "hot_rank_chg": 325, "stock_cnt": 5798, "price": "223.09", "change": "3.53", "market_id": "33", "circulate_market_value": "97804873000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 67, "hot_rank_chg": 20, "stock_cnt": 5798, "price": "9.24", "change": "5.72", "market_id": "17", "circulate_market_value": "6548634800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600183", "name": "生益科技", "hot_rank": 68, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "130.01", "change": "0.78", "market_id": "17", "circulate_market_value": "313551470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 69, "hot_rank_chg": -37, "stock_cnt": 5798, "price": "159.25", "change": "-1.09", "market_id": "17", "circulate_market_value": "393869880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 70, "hot_rank_chg": -22, "stock_cnt": 5798, "price": "34.90", "change": "-0.57", "market_id": "33", "circulate_market_value": "99816536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000737", "name": "北方铜业", "hot_rank": 71, "hot_rank_chg": 313, "stock_cnt": 5798, "price": "15.44", "change": "6.26", "market_id": "33", "circulate_market_value": "29406138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 72, "hot_rank_chg": 19, "stock_cnt": 5798, "price": "61.25", "change": "0.57", "market_id": "33", "circulate_market_value": "92943949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 73, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "16.66", "change": "-1.07", "market_id": "33", "circulate_market_value": "55411602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000931", "name": "中关村", "hot_rank": 74, "hot_rank_chg": 37, "stock_cnt": 5798, "price": "5.43", "change": "4.02", "market_id": "33", "circulate_market_value": "4078090400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.52}, {"name": "创新药", "change_pct": -0.12}, {"name": "养老产业", "change_pct": 0.31}, {"name": "医药", "change_pct": 0.16}, {"name": "化学原料药", "change_pct": 0.07}, {"name": "口腔", "change_pct": 0.81}]}, {"code": "002721", "name": "金一文化", "hot_rank": 75, "hot_rank_chg": 233, "stock_cnt": 5798, "price": "3.08", "change": "10.00", "market_id": "33", "circulate_market_value": "8190886100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.44}, {"name": "金融科技", "change_pct": 1.15}, {"name": "人工智能", "change_pct": -0.14}, {"name": "珠宝饰品", "change_pct": 0.71}, {"name": "数字人民币", "change_pct": 1.07}]}, {"code": "300122", "name": "智飞生物", "hot_rank": 76, "hot_rank_chg": 352, "stock_cnt": 5798, "price": "14.17", "change": "8.67", "market_id": "33", "circulate_market_value": "20040720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 77, "hot_rank_chg": 2, "stock_cnt": 5798, "price": "253.58", "change": "-1.37", "market_id": "33", "circulate_market_value": "275993440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 78, "hot_rank_chg": 5, "stock_cnt": 5798, "price": "11.18", "change": "2.19", "market_id": "17", "circulate_market_value": "4837291400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "光伏", "change_pct": 0.66}, {"name": "无线耳机", "change_pct": 0.17}, {"name": "华为产业链", "change_pct": -0.09}, {"name": "光伏胶膜", "change_pct": 0.12}]}, {"code": "002017", "name": "东信和平", "hot_rank": 79, "hot_rank_chg": -38, "stock_cnt": 5798, "price": "16.48", "change": "-2.77", "market_id": "33", "circulate_market_value": "9561241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 80, "hot_rank_chg": -33, "stock_cnt": 5798, "price": "39.17", "change": "2.35", "market_id": "17", "circulate_market_value": "12611689500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600030", "name": "中信证券", "hot_rank": 81, "hot_rank_chg": 255, "stock_cnt": 5798, "price": "27.77", "change": "2.28", "market_id": "17", "circulate_market_value": "338142820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 82, "hot_rank_chg": 203, "stock_cnt": 5798, "price": "42.69", "change": "10.00", "market_id": "17", "circulate_market_value": "7491245600.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "固态电池"}, {"code": "002165", "name": "红宝丽", "hot_rank": 83, "hot_rank_chg": 9, "stock_cnt": 5798, "price": "7.45", "change": "-4.49", "market_id": "33", "circulate_market_value": "5420502300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.14}, {"name": "装配式建筑", "change_pct": 0.61}, {"name": "风电", "change_pct": 0.57}, {"name": "环氧丙烷", "change_pct": 0.47}, {"name": "乡村振兴", "change_pct": 0.76}, {"name": "建筑节能", "change_pct": 0.38}, {"name": "旧改", "change_pct": 0.7}]}, {"code": "600353", "name": "旭光电子", "hot_rank": 84, "hot_rank_chg": 18, "stock_cnt": 5798, "price": "34.55", "change": "-2.15", "market_id": "17", "circulate_market_value": "28635426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 85, "hot_rank_chg": -19, "stock_cnt": 5798, "price": "39.57", "change": "-2.68", "market_id": "17", "circulate_market_value": "50318061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 86, "hot_rank_chg": 13, "stock_cnt": 5798, "price": "18.61", "change": "0.81", "market_id": "33", "circulate_market_value": "62594830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600095", "name": "湘财股份", "hot_rank": 87, "hot_rank_chg": 1774, "stock_cnt": 5798, "price": "8.67", "change": "10.03", "market_id": "17", "circulate_market_value": "24789158000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "证券", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.42}, {"name": "券商", "change_pct": 2.99}, {"name": "金融科技", "change_pct": 1.15}, {"name": "大金融", "change_pct": 1.62}, {"name": "人造肉", "change_pct": 0.69}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 88, "hot_rank_chg": -34, "stock_cnt": 5798, "price": "4.46", "change": "10.12", "market_id": "33", "circulate_market_value": "5068344000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "液冷", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.15}, {"name": "锂电池", "change_pct": 0.59}, {"name": "石墨烯", "change_pct": 0.46}, {"name": "新能源整车", "change_pct": 0.93}, {"name": "云计算数据中心", "change_pct": -0.03}, {"name": "汽车整车", "change_pct": 0.51}, {"name": "新能源汽车", "change_pct": 0.29}, {"name": "白色家电", "change_pct": -0.26}, {"name": "家电", "change_pct": -0.06}, {"name": "汽车热管理", "change_pct": -0.25}, {"name": "热泵", "change_pct": -0.2}, {"name": "轮边电机", "change_pct": 0.29}, {"name": "超级电容", "change_pct": 0.6}, {"name": "液冷服务器", "change_pct": -0.5}]}, {"code": "002907", "name": "华森制药", "hot_rank": 89, "hot_rank_chg": 17, "stock_cnt": 5798, "price": "16.20", "change": "2.92", "market_id": "33", "circulate_market_value": "5492539500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 90, "hot_rank_chg": -2, "stock_cnt": 5798, "price": "66.06", "change": "-1.33", "market_id": "17", "circulate_market_value": "27505251000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 91, "hot_rank_chg": -13, "stock_cnt": 5798, "price": "60.57", "change": "0.70", "market_id": "17", "circulate_market_value": "1201956670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 92, "hot_rank_chg": -42, "stock_cnt": 5798, "price": "23.67", "change": "6.33", "market_id": "17", "circulate_market_value": "5192251200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 94, "hot_rank_chg": 85, "stock_cnt": 5798, "price": "64.12", "change": "1.39", "market_id": "33", "circulate_market_value": "54699040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 95, "hot_rank_chg": -32, "stock_cnt": 5798, "price": "7.70", "change": "2.53", "market_id": "17", "circulate_market_value": "8768431200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.5}, {"name": "强势人气股", "change_pct": 0.74}, {"name": "光伏", "change_pct": 0.66}, {"name": "特高压", "change_pct": 0.56}, {"name": "智能电网", "change_pct": 0.18}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 96, "hot_rank_chg": 22, "stock_cnt": 5798, "price": "5.94", "change": "2.24", "market_id": "17", "circulate_market_value": "73632769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.65}, {"name": "核电", "change_pct": 0.75}, {"name": "电力体制改革", "change_pct": 1.36}, {"name": "水电", "change_pct": 1.16}, {"name": "火电", "change_pct": 1.37}, {"name": "光伏", "change_pct": 0.66}, {"name": "风电", "change_pct": 0.57}, {"name": "国企改革", "change_pct": 0.74}, {"name": "算电协同", "change_pct": 0.61}]}, {"code": "001309", "name": "德明利", "hot_rank": 97, "hot_rank_chg": -16, "stock_cnt": 5798, "price": "390.69", "change": "-1.60", "market_id": "33", "circulate_market_value": "64475201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002094", "name": "青岛金王", "hot_rank": 98, "hot_rank_chg": 57, "stock_cnt": 5798, "price": "5.65", "change": "9.92", "market_id": "33", "circulate_market_value": "3901062600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "CIPS", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.11}, {"name": "债转股 · AMC", "change_pct": 1.48}, {"name": "新零售", "change_pct": 0.08}, {"name": "中日韩自贸区", "change_pct": 0.18}, {"name": "腾讯概念股", "change_pct": 0.07}, {"name": "医美", "change_pct": 0.21}, {"name": "网红/MCN", "change_pct": -0.14}, {"name": "C2M", "change_pct": 0.57}, {"name": "化妆品", "change_pct": 0.63}, {"name": "自贸区", "change_pct": 0.74}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 99, "hot_rank_chg": -57, "stock_cnt": 5798, "price": "3.36", "change": "-3.17", "market_id": "33", "circulate_market_value": "15697076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.28}, {"name": "体育产业", "change_pct": 0.44}, {"name": "股权转让", "change_pct": 0.16}, {"name": "房地产", "change_pct": 0.98}, {"name": "云计算数据中心", "change_pct": -0.03}, {"name": "京津冀", "change_pct": 0.6}, {"name": "旅游", "change_pct": 0.87}, {"name": "国产芯片", "change_pct": -0.28}, {"name": "内存", "change_pct": -0.66}, {"name": "闪存", "change_pct": -0.8}, {"name": "IP经济/谷子经济", "change_pct": 0.02}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 100, "hot_rank_chg": -7, "stock_cnt": 5798, "price": "73.20", "change": "-1.90", "market_id": "17", "circulate_market_value": "9565278200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "601212", "name": "白银有色", "price": 7.24, "change_pct": 10.03, "reason": "公司是我国多品种有色金属综合生产基地，具有年产白银500吨的生产能力，有年产金15吨的生产能力", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 7.88, "first_limit_up": 1787710941, "break_limit_up_times": 0}, {"code": "000533", "name": "顺钠股份", "price": 11.61, "change_pct": 10.05, "reason": "1、公司是国内干式变压器领域的市场开拓者，尤其在核电等高端特种应用领域较具优势，可为核电站提供安全级干式变压器，累计取得了超过30个核电项目的供货订单\n2、全资子公司顺特电气设备有限公司产品广泛用于智能电网建设，干式变压器、开关柜等产品应用于数据中心基础设施建设等领域", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 11.52, "first_limit_up": 1787713422, "break_limit_up_times": 0}, {"code": "600468", "name": "百利电气", "price": 6.57, "change_pct": 10.05, "reason": "1、控股子公司辽宁荣信兴业电力技术有限公司参与了位于法国的国际热核聚变试验堆（ITER）项目电力系统中无功补偿以及滤波设备的设计制造；\n2、公司多家控股子公司涉及智能电网领域，如电气开关元件，无功补偿设备等", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 4.13, "first_limit_up": 1787707846, "break_limit_up_times": 1}, {"code": "002855", "name": "捷荣技术", "price": 12.1, "change_pct": 10.0, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["折叠屏"], "limit_up_days": 2, "turnover_ratio": 0.92, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "603106", "name": "恒银科技", "price": 8.2, "change_pct": 10.07, "reason": "国内领先的以金融智能终端为核心的智慧银行解决方案提供商；公司接入阿里千问、蚂蚁“灵光”，深入探索“AI+金融”新范式", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 10.02, "first_limit_up": 1787711917, "break_limit_up_times": 3}, {"code": "002418", "name": "康盛股份", "price": 4.46, "change_pct": 10.12, "reason": "公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 10.45, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "002295", "name": "精艺股份", "price": 10.09, "change_pct": 10.03, "reason": "公司以铜加工+贸易双为主业，是国内重要的有色金属加工制造基地", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 2.67, "first_limit_up": 1787708724, "break_limit_up_times": 1}, {"code": "603615", "name": "茶花股份", "price": 18.61, "change_pct": 9.99, "reason": "公司通过并购达迈智能及达迈香港100%股权切入电子元器件分销，已与新思、锐石等原厂建立合作，产品线覆盖存储、射频器件、无线连接", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1787721526, "break_limit_up_times": 0}, {"code": "603392", "name": "万泰生物", "price": 30.91, "change_pct": 10.0, "reason": "公司九价人乳头瘤病毒疫苗(大肠埃希菌)首次获得批签发证明", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 0.64, "first_limit_up": 1787708270, "break_limit_up_times": 1}, {"code": "000428", "name": "华天酒店", "price": 4.75, "change_pct": 9.95, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 4.55, "first_limit_up": 1787708346, "break_limit_up_times": 0}, {"code": "601038", "name": "一拖股份", "price": 14.33, "change_pct": 9.98, "reason": "公司为国内拖拉机龙头，上半年扣非净利润同比增长23.39%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1787708201, "break_limit_up_times": 3}, {"code": "603200", "name": "上海洗霸", "price": 42.69, "change_pct": 10.0, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.19, "first_limit_up": 1787709330, "break_limit_up_times": 1}, {"code": "600272", "name": "开开实业", "price": 21.1, "change_pct": 10.01, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 34.56, "first_limit_up": 1787708448, "break_limit_up_times": 9}, {"code": "002942", "name": "新农股份", "price": 17.28, "change_pct": 9.99, "reason": "农药全产业链生产企业；主营化学农药原药、制剂及精细化工中间体，主要产品为噻唑锌、吡唑醚菌酯、毒死蜱、三唑磷等原药及制剂，中间体有乙基氯化物等；噻唑锌为创制农药，毒死蜱原药市场占有率居国内前列", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.22, "first_limit_up": 1787708376, "break_limit_up_times": 0}, {"code": "605169", "name": "洪通燃气", "price": 12.41, "change_pct": 10.02, "reason": "新疆天然气专业运营商，上半年净利润同比增长35.77%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1787707879, "break_limit_up_times": 1}, {"code": "000997", "name": "新 大 陆", "price": 20.69, "change_pct": 9.99, "reason": "1、公司目前正加速海外牌照及账户体系布局，在香港及美国设立子公司香港星驿支付公司及NovaPay，已成功获批MSB牌照，并筹备MSO牌照申请；\n2、公司与阿里云共建支付专属大模型，单日token调用近6亿，跻身泛金融AI应用规模全国前十，已发布30余款智能体并嵌入支付、营销、风控等核心流程", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 8.97, "first_limit_up": 1787709033, "break_limit_up_times": 5}, {"code": "600362", "name": "江西铜业", "price": 48.57, "change_pct": 10.01, "reason": "公司为国内最大铜精矿和铜加工厂商", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1787709058, "break_limit_up_times": 1}, {"code": "002742", "name": "冀衡医药", "price": 5.15, "change_pct": 10.04, "reason": "公司摘星脱帽后正式更名，全资子公司辽源百康主要生产化学原料药，涵盖解热镇痛、抗菌、抗过敏、局部麻醉等大类", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 2.46, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "000890", "name": "法尔胜", "price": 7.98, "change_pct": 10.07, "reason": "1、参股的普天法尔胜光通信有限公司主要产品为光纤预制棒、光纤、光缆，上述产品可以应用于在运营商基础网络通信及广播电视通信领域；\n2、公司成功推出了性能优良的熊猫型保偏光纤，产品成功应用于神州七号和天宫一号等国家重大特大型号任务中；\n3、公司深度参与特种电缆及电力基础设施建设，在“算电协同”及智能电网升级背景下，其电力传输与配套特种金属材料是储能电站及数据中心电力传输等底层刚需环节", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.33, "first_limit_up": 1787708181, "break_limit_up_times": 0}, {"code": "000712", "name": "锦龙股份", "price": 9.75, "change_pct": 10.05, "reason": "公司主要经营业务为证券公司业务，持有中山证券67.78%股权", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 5.94, "first_limit_up": 1787708754, "break_limit_up_times": 1}, {"code": "001258", "name": "立新能源", "price": 13.52, "change_pct": 10.01, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 13.54, "first_limit_up": 1787721291, "break_limit_up_times": 0}, {"code": "600969", "name": "郴电国际", "price": 9.5, "change_pct": 9.95, "reason": "公司为唐山中邦控股股东，消息称后者氩气报价大涨", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 4.43, "first_limit_up": 1787713259, "break_limit_up_times": 0}, {"code": "000536", "name": "华映科技", "price": 3.59, "change_pct": 10.12, "reason": "公司地处福州，主要从事LCD显示面板、液晶模组的研产销，已成功进入传音、联想、三星、 vivo、 HMD(诺基亚)、中兴、华为、荣耀等世界知名品牌的供应商体系", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1787708016, "break_limit_up_times": 1}, {"code": "002963", "name": "豪尔赛", "price": 22.35, "change_pct": 9.99, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 6.94, "first_limit_up": 1787707905, "break_limit_up_times": 2}, {"code": "603083", "name": "剑桥科技", "price": 190.85, "change_pct": 10.0, "reason": "公司已向微软供应高速光模块产品，800G光模块产品已实现小批量发货，1.6T光模块产品在给客户送样测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 9.79, "first_limit_up": 1787712224, "break_limit_up_times": 0}, {"code": "600604", "name": "市北高新", "price": 5.1, "change_pct": 9.91, "reason": "公司为央视融媒体产业投资基金有限合伙人，占基金2.69%份额，央视融媒体基金于2023年11月投资江苏天兵航天科技股份有限公司、于2023年12月投资长江存储控股股份有限公司、于2024年1月投资上海垣信卫星科技有限公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1787708080, "break_limit_up_times": 5}, {"code": "002703", "name": "浙江世宝", "price": 17.46, "change_pct": 10.02, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 12.54, "first_limit_up": 1787707872, "break_limit_up_times": 4}, {"code": "002047", "name": "宝鹰股份", "price": 3.63, "change_pct": 10.0, "reason": "公司正推进高端光耦合器产业投资，产品可应用于新能源、智能电网等领域", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.45, "first_limit_up": 1787708277, "break_limit_up_times": 1}, {"code": "003040", "name": "楚天龙", "price": 17.03, "change_pct": 10.01, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["大金融"], "limit_up_days": 4, "turnover_ratio": 23.8, "first_limit_up": 1787711175, "break_limit_up_times": 13}, {"code": "600103", "name": "青山纸业", "price": 3.47, "change_pct": 10.16, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 10.18, "first_limit_up": 1787708144, "break_limit_up_times": 1}, {"code": "000677", "name": "ST海龙", "price": 1.89, "change_pct": 9.88, "reason": "全资子公司拟收购群健航空不少于40%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.92, "first_limit_up": 1787712804, "break_limit_up_times": 0}, {"code": "002094", "name": "青岛金王", "price": 5.65, "change_pct": 9.92, "reason": "亚洲第一、全球排名居前的蜡烛制品生产商；公司是首批接入兴业银行CIPS标准收发器企业，提高了公司进出口业务结算效率，增加了进出口业务结算方式", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 14.99, "first_limit_up": 1787711259, "break_limit_up_times": 0}, {"code": "688185", "name": "康希诺", "price": 85.62, "change_pct": 20.0, "reason": "国内创新疫苗研发先进企业，与德普世生物达成mRNA治疗型肿瘤疫苗战略合作", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.82, "first_limit_up": 1787707853, "break_limit_up_times": 0}, {"code": "301177", "name": "迪阿股份", "price": 28.73, "change_pct": 20.01, "reason": "公司主要从事珠宝首饰的品牌运营、定制销售和研发设计", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1787710569, "break_limit_up_times": 0}, {"code": "603618", "name": "杭电股份", "price": 31.92, "change_pct": 9.99, "reason": "公司地处杭州，是国网杭州供电公司重要的电缆供应商和技术合作伙伴，具备光通信“光棒—光纤—光缆”一体化产业链，光缆产品通过参与电信运营商招投标实现销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.49, "first_limit_up": 1787707948, "break_limit_up_times": 3}, {"code": "603396", "name": "金辰股份", "price": 28.44, "change_pct": 10.02, "reason": "公司为全球光伏组件设备龙头，拟投资约10亿元建设半导体装备研发及制造项目，布局TGV玻璃基封装等设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.93, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 4.19, "change_pct": 9.97, "reason": "贵州最大的甲醇生产企业；公司化工业务涵盖尿素、甲醇及复合肥的生产和销售，具备年产52万吨尿素、10万吨复合肥、5万吨车用尿素的生产能力", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 21.01, "first_limit_up": 1787708702, "break_limit_up_times": 2}, {"code": "605277", "name": "新亚电子", "price": 16.69, "change_pct": 10.02, "reason": "公司高频高速铜缆连接线已通过安费诺进入戴尔、惠普、谷歌、亚马逊、微软、Meta、浪潮、新华三、中科曙光等知名服务器制造商供应链，主要应用于AI人工智能、服务器和液冷服务器、数据中心等场景；上半年净利润同比增长30.01%", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 2.73, "first_limit_up": 1787707801, "break_limit_up_times": 0}, {"code": "600371", "name": "万向德农", "price": 9.54, "change_pct": 10.03, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 16.52, "first_limit_up": 1787708112, "break_limit_up_times": 5}, {"code": "000017", "name": "深中华A", "price": 9.46, "change_pct": 10.0, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 5, "turnover_ratio": 24.11, "first_limit_up": 1787709624, "break_limit_up_times": 2}, {"code": "002949", "name": "华阳国际", "price": 13.68, "change_pct": 9.97, "reason": "1、公司是国家高新技术企业、建筑设计行业“国家住宅产业化基地”、首批“装配式建筑产业基地”、首批“全过程工程咨询试点单位”；\n2、公司涉及到低空经济的业务主要是关于航空小镇的相关规划设计", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 14.39, "first_limit_up": 1787708196, "break_limit_up_times": 5}, {"code": "603838", "name": "*ST四通", "price": 12.83, "change_pct": 10.03, "reason": "新型家居生活陶瓷供应商，外贸收入占比近8成", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.68, "first_limit_up": 1787723933, "break_limit_up_times": 0}, {"code": "603118", "name": "共进股份", "price": 17.88, "change_pct": 10.03, "reason": "1、公司深耕以太网交换机领域多年，产品覆盖园区、SMB 场景及 100G/400G/800G 等规格数据中心交换机，同时布局工业与白盒交换机赛道，作为 Arista Networks 核心代工厂间接供应英伟达、微软等头部客户；\n2、参股孙公司山东华云光电技术有限公司致力于光模块等产品的研发、生产及销售", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 16.06, "first_limit_up": 1787714071, "break_limit_up_times": 0}, {"code": "301630", "name": "同宇新材", "price": 196.81, "change_pct": 20.0, "reason": "公司专注于电子树脂的研产销，产品主要应用于覆铜板的生产；上半年净利润同比增长79.57%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 27.34, "first_limit_up": 1787707800, "break_limit_up_times": 13}, {"code": "603121", "name": "华培动力", "price": 13.83, "change_pct": 10.02, "reason": "1、公司积极关注以人工智能AI的快速发展带来的人形机器人等新兴市场带来的传感器需求；\n2、公司通过设立全资子公司盛美芯，公司具备了部分核心车规级芯片的自主设计、封装测试的能力，团队具备车规级MEMS压力传感器芯片的研发、生产和销售经验", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.31, "first_limit_up": 1787709052, "break_limit_up_times": 1}, {"code": "002084", "name": "海鸥住工", "price": 4.79, "change_pct": 10.11, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 3, "turnover_ratio": 0.52, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "603979", "name": "金诚信", "price": 80.71, "change_pct": 10.0, "reason": "国际化矿业龙头，“矿服 + 资源” 双轮驱动；公司收购刚果（金）Dikulushi铜银矿并认购了艾芬豪旗下加拿大上市公司Cordoba公司股权，参与其在哥伦比亚的San Matias铜金银矿项目", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 1.04, "first_limit_up": 1787708854, "break_limit_up_times": 0}, {"code": "605162", "name": "新中港", "price": 9.9, "change_pct": 10.0, "reason": "公司专业从事热电联产业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.14, "first_limit_up": 1787708259, "break_limit_up_times": 0}, {"code": "002719", "name": "ST麦趣", "price": 6.77, "change_pct": 10.08, "reason": "新疆第四大乳品企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.3, "first_limit_up": 1787712462, "break_limit_up_times": 0}, {"code": "001268", "name": "联合精密", "price": 24.55, "change_pct": 9.99, "reason": "1、公司主营精密机械零部件业务，正在建设年产3万吨空调压缩机零部件、汽车零部件、机器人零部件、光刻机零部件铸件项目；\n2、公司已完成收购成都迈特航空51%股权，迈特航空为中航工业旗下成飞、沈飞等主机厂供应商，正式切入航空精密零部件领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.18, "first_limit_up": 1787720451, "break_limit_up_times": 0}, {"code": "600095", "name": "湘财股份", "price": 8.67, "change_pct": 10.03, "reason": "公司上半年净利润同比预增217.76%—344.86%，报告期内，国内资本市场稳步上行，市场成交量迭创新高，公司全资子公司湘财证券积极把握市场机会，优化资产配置，其中经纪、信用、投顾等财富管理及自营业务业绩增长显著，带动公司净利润较上年同期实现大幅增长", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 2.86, "first_limit_up": 1787710726, "break_limit_up_times": 1}, {"code": "000632", "name": "ST三木", "price": 4, "change_pct": 9.89, "reason": "旗下控股子公司福建融达通供应链管理有限公司，是福州跨境电商公共服务平台、跨境电商保税监管物流中心主要运营方 ，为跨境电商提供一站式平台对接方案", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.61, "first_limit_up": 1787707500, "break_limit_up_times": 0}, {"code": "002072", "name": "凯瑞德", "price": 8.09, "change_pct": 10.07, "reason": "公司以1.15亿元增资收购龙武矿业并获51%表决权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 8.14, "first_limit_up": 1787714856, "break_limit_up_times": 1}, {"code": "600479", "name": "千金药业", "price": 11.02, "change_pct": 9.98, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.33, "first_limit_up": 1787707802, "break_limit_up_times": 0}, {"code": "002366", "name": "融发核电", "price": 6.24, "change_pct": 10.05, "reason": "核岛装备材料研制的先行者；公司建立了完善的核电装备材料研发和生产制造体系，在核岛主管道设备、核后处理装备这一细分市场，处于国内外领先地位", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 4.33, "first_limit_up": 1787707500, "break_limit_up_times": 1}, {"code": "002721", "name": "金一文化", "price": 3.08, "change_pct": 10.0, "reason": "公司主营业务为贵金属工艺品及黄金珠宝首饰的研发设计及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 6.85, "first_limit_up": 1787709378, "break_limit_up_times": 2}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};