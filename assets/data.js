const UPDATE_TIME = "2026-10-08 14:23";
const THS_HOT = [
  {
    "name": "固态电池",
    "rise": 0.8,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "钠离子电池",
    "rise": 1.97,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885928"
  },
  {
    "name": "创新药",
    "rise": -2.16,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续133天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.17,
    "rate": 0,
    "tag": "",
    "hotTag": "连续303天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -1.84,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续126天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "天然气",
    "rise": 1.35,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "石油ETF",
    "code": "885430"
  },
  {
    "name": "锂电池概念",
    "rise": 0.01,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "商业航天",
    "rise": -1.61,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续232天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "风电",
    "rise": -0.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "电力ETF",
    "code": "885641"
  },
  {
    "name": "煤化工概念",
    "rise": 1.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885398"
  },
  {
    "name": "存储芯片",
    "rise": -3.48,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续256天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "染料",
    "rise": 1.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "化工ETF",
    "code": "885633"
  },
  {
    "name": "AI应用",
    "rise": -2.05,
    "rate": 0,
    "tag": "",
    "hotTag": "连续61天上榜",
    "rankChg": -1,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "CRO概念",
    "rise": -2.77,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "MLCC概念",
    "rise": -1.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "粮食概念",
    "rise": 0.01,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "航运概念",
    "rise": 1.32,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "交运ETF",
    "code": "885733"
  },
  {
    "name": "人形机器人",
    "rise": -2.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "猪肉",
    "rise": -1.61,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 5,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "机器人概念",
    "rise": -1.68,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "年年喊“元年”，钠电池这次有何不一样？",
    "desc": "",
    "heat": 270548,
    "direction": "钠离子电池",
    "themes": [
      "钠电池",
      "钠电电解液",
      "钠电正极",
      "钠电负极",
      "钠离子电池"
    ],
    "stocks": [
      {
        "name": "领湃科技",
        "code": "300530",
        "chg": 19.98007
      }
    ]
  },
  {
    "title": "联合国：全球食品价格再度上涨 小麦价格升至2023年8月以来最高水平",
    "desc": "",
    "heat": 234086,
    "direction": "农业",
    "themes": [
      "渔业",
      "中药材种植",
      "食用菌种植",
      "农作物种业",
      "经济作物种植",
      "果蔬种植",
      "生态农业",
      "小麦产业",
      "水稻产业",
      "稀有糖",
      "天然甜味剂",
      "功能性糖醇",
      "磷酸铁锂",
      "磷矿",
      "黄磷",
      "农业种植",
      "粮食概念",
      "代糖概念",
      "磷化工"
    ],
    "stocks": [
      {
        "name": "海新能科",
        "code": "300072",
        "chg": 11.370262
      }
    ]
  },
  {
    "title": "国务院印发《关于发展体育赛事激发消费活力的意见》",
    "desc": "",
    "heat": 209714,
    "direction": "体育",
    "themes": [
      "体育产业",
      "足球概念"
    ],
    "stocks": [
      {
        "name": "三柏硕",
        "code": "001300",
        "chg": 10.016287
      }
    ]
  },
  {
    "title": "航运板块走强 中远海能等多股涨停",
    "desc": "",
    "heat": 162611,
    "direction": "航运",
    "themes": [
      "航运概念",
      "港口航运",
      "机场航运"
    ],
    "stocks": [
      {
        "name": "中远海能",
        "code": "600026",
        "chg": 10.019455
      }
    ]
  },
  {
    "title": "原糖期货创近两年新高 全球供应趋紧担忧升温",
    "desc": "",
    "heat": 58700,
    "direction": "代糖概念",
    "themes": [
      "功能性糖醇",
      "稀有糖",
      "天然甜味剂",
      "代糖概念"
    ],
    "stocks": [
      {
        "name": "醋化股份",
        "code": "603968",
        "chg": 6.956522
      }
    ]
  },
  {
    "title": "华为徐直军：昇腾中国市场份额已超英伟达",
    "desc": "",
    "heat": 50821,
    "direction": "华为昇腾",
    "themes": [
      "华为昇腾",
      "华为概念"
    ],
    "stocks": [
      {
        "name": "贝特利",
        "code": "301697",
        "chg": 19.992384
      }
    ]
  },
  {
    "title": "俄研究员疑感染鼠疫死亡，美方发外交照会",
    "desc": "",
    "heat": 49138,
    "direction": "鼠疫",
    "themes": [
      "鼠疫",
      "禽流感",
      "动物疫苗",
      "生物疫苗"
    ],
    "stocks": [
      {
        "name": "华北制药",
        "code": "600812",
        "chg": 10.040161
      }
    ]
  },
  {
    "title": "Truist：Meta的Muse在AI智能体竞争中先占分发优势，但OpenAI和谷歌推理能力更强",
    "desc": "",
    "heat": 31101,
    "direction": "AI智能体",
    "themes": [
      "OpenClaw",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "*ST网达",
        "code": "603189",
        "chg": 10.032362
      }
    ]
  },
  {
    "title": "三星电机接连拿下AI服务器MLCC长协，MLCC板块早盘走强",
    "desc": "",
    "heat": 30610,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "先导智能",
        "code": "300450",
        "chg": 7.58443
      }
    ]
  },
  {
    "title": "艾博生物与诺华达成77.75亿美元mRNA授权协议",
    "desc": "",
    "heat": 10050,
    "direction": "mRNA药物",
    "themes": [
      "mRNA疫苗",
      "肿瘤疫苗",
      "生物疫苗"
    ],
    "stocks": [
      {
        "name": "华北制药",
        "code": "600812",
        "chg": 10.040161
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "生物柴油/生物航煤",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "环氧树脂",
    "change": "+2.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+2.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+2.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "气凝胶",
    "change": "+2.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+2.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天然气",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水电",
    "change": "+2.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+2.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+2.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "钠电池",
    "change": "+1.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+1.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "石油化工",
    "change": "+1.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 5,
    "hot_rank_chg": -2,
    "stock_cnt": 5828,
    "price": "12.24",
    "change": "-5.04",
    "market_id": "33",
    "circulate_market_value": "5625648400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": -0.58
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.38
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.48
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.59
      },
      {
        "name": "大农业",
        "change_pct": -0.24
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 7,
    "hot_rank_chg": 5,
    "stock_cnt": 5828,
    "price": "7.24",
    "change": "-2.16",
    "market_id": "17",
    "circulate_market_value": "18234012000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.13
      },
      {
        "name": "工业大麻",
        "change_pct": -0.41
      },
      {
        "name": "中药",
        "change_pct": -1.16
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "保健品",
        "change_pct": -0.62
      },
      {
        "name": "民营医院",
        "change_pct": -0.98
      },
      {
        "name": "医药",
        "change_pct": -1.8
      },
      {
        "name": "化学原料药",
        "change_pct": -1.44
      },
      {
        "name": "流感",
        "change_pct": -0.76
      },
      {
        "name": "振兴东北",
        "change_pct": -0.47
      },
      {
        "name": "食品",
        "change_pct": 0.2
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 9,
    "hot_rank_chg": -2,
    "stock_cnt": 5828,
    "price": "11.39",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "11901272600.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "8",
    "change_reason": "拟收购界面财联社",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.79
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -2.2
      },
      {
        "name": "国企改革",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 12,
    "hot_rank_chg": -2,
    "stock_cnt": 5828,
    "price": "4.06",
    "change": "-4.70",
    "market_id": "33",
    "circulate_market_value": "39443359000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.47
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.39
      },
      {
        "name": "股权转让",
        "change_pct": -1.07
      },
      {
        "name": "房地产",
        "change_pct": -1.19
      },
      {
        "name": "养老产业",
        "change_pct": -0.82
      },
      {
        "name": "冷链",
        "change_pct": -0.08
      },
      {
        "name": "住房租赁",
        "change_pct": -1.18
      },
      {
        "name": "破净股",
        "change_pct": -0.14
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.04
      },
      {
        "name": "物业管理",
        "change_pct": -0.9
      },
      {
        "name": "旧改",
        "change_pct": -0.34
      },
      {
        "name": "REITs",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 13,
    "hot_rank_chg": 17,
    "stock_cnt": 5828,
    "price": "3.65",
    "change": "-1.35",
    "market_id": "33",
    "circulate_market_value": "8550811600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.16
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "人工智能",
        "change_pct": -2.05
      },
      {
        "name": "VR&AR",
        "change_pct": -2.81
      },
      {
        "name": "京津冀",
        "change_pct": -0.59
      },
      {
        "name": "装修装饰",
        "change_pct": -0.78
      },
      {
        "name": "住房租赁",
        "change_pct": -1.18
      },
      {
        "name": "破净股",
        "change_pct": -0.14
      },
      {
        "name": "数字经济",
        "change_pct": -1.72
      },
      {
        "name": "房产经纪",
        "change_pct": 0.56
      },
      {
        "name": "物业管理",
        "change_pct": -0.9
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.02
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 19,
    "hot_rank_chg": -1,
    "stock_cnt": 5828,
    "price": "12.12",
    "change": "-0.98",
    "market_id": "33",
    "circulate_market_value": "6380883600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": -0.39
      },
      {
        "name": "房地产",
        "change_pct": -1.19
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.09
      },
      {
        "name": "住房租赁",
        "change_pct": -1.18
      },
      {
        "name": "物业管理",
        "change_pct": -0.9
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.48
      },
      {
        "name": "旧改",
        "change_pct": -0.34
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 29,
    "hot_rank_chg": 15,
    "stock_cnt": 5828,
    "price": "8.08",
    "change": "-5.28",
    "market_id": "33",
    "circulate_market_value": "15473947000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.74
      },
      {
        "name": "林业",
        "change_pct": -1.31
      },
      {
        "name": "碳中和",
        "change_pct": 0.38
      },
      {
        "name": "自贸区",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 35,
    "hot_rank_chg": 307,
    "stock_cnt": 5828,
    "price": "10.10",
    "change": "5.43",
    "market_id": "33",
    "circulate_market_value": "8529682100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.45
      },
      {
        "name": "大飞机",
        "change_pct": -0.95
      },
      {
        "name": "北斗导航",
        "change_pct": -1.1
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.25
      },
      {
        "name": "军民融合",
        "change_pct": -1.33
      },
      {
        "name": "磁悬浮",
        "change_pct": -0.24
      },
      {
        "name": "军工",
        "change_pct": -1.21
      },
      {
        "name": "碳纤维",
        "change_pct": -0.89
      },
      {
        "name": "无人机",
        "change_pct": -0.97
      },
      {
        "name": "智能制造",
        "change_pct": -1.78
      },
      {
        "name": "3D打印",
        "change_pct": -1.76
      },
      {
        "name": "航天",
        "change_pct": -1.39
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.51
      },
      {
        "name": "低空经济",
        "change_pct": -1.33
      },
      {
        "name": "海洋经济",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 39,
    "hot_rank_chg": 93,
    "stock_cnt": 5828,
    "price": "11.46",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "20503525000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.03
      },
      {
        "name": "纯碱",
        "change_pct": 0.39
      },
      {
        "name": "食品",
        "change_pct": 0.2
      },
      {
        "name": "土壤修复",
        "change_pct": -0.52
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.23
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -2.86
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.53
      }
    ]
  },
  {
    "code": "600241",
    "name": "时代万恒",
    "hot_rank": 41,
    "hot_rank_chg": -28,
    "stock_cnt": 5828,
    "price": "10.69",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "3146089600.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "新能源电池",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 0.46
      },
      {
        "name": "中日韩自贸区",
        "change_pct": 0.23
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.48
      },
      {
        "name": "振兴东北",
        "change_pct": -0.47
      },
      {
        "name": "国企改革",
        "change_pct": -0.21
      },
      {
        "name": "自贸区",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 46,
    "hot_rank_chg": 45,
    "stock_cnt": 5828,
    "price": "11.88",
    "change": "3.48",
    "market_id": "17",
    "circulate_market_value": "59269542000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.18
      },
      {
        "name": "5G",
        "change_pct": -2.56
      },
      {
        "name": "VR&AR",
        "change_pct": -2.81
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.41
      },
      {
        "name": "光通信",
        "change_pct": -5.09
      },
      {
        "name": "3D感应",
        "change_pct": -3.55
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.38
      },
      {
        "name": "LED",
        "change_pct": -1.65
      },
      {
        "name": "国产芯片",
        "change_pct": -3.93
      },
      {
        "name": "MicroLED",
        "change_pct": -3.7
      },
      {
        "name": "第三代半导体",
        "change_pct": -3.48
      },
      {
        "name": "激光雷达",
        "change_pct": -4.78
      },
      {
        "name": "华为汽车",
        "change_pct": -1.49
      },
      {
        "name": "MiniLED",
        "change_pct": -2.66
      },
      {
        "name": "氮化镓",
        "change_pct": -3.63
      },
      {
        "name": "大基金概念",
        "change_pct": -3.7
      },
      {
        "name": "碳化硅",
        "change_pct": -3.19
      },
      {
        "name": "磷化铟",
        "change_pct": -1.13
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -5.54
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.57
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 47,
    "hot_rank_chg": 243,
    "stock_cnt": 5828,
    "price": "9.28",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "9836384000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "太空算力",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.41
      },
      {
        "name": "电子烟",
        "change_pct": -1.79
      },
      {
        "name": "一带一路",
        "change_pct": -0.02
      },
      {
        "name": "造纸",
        "change_pct": -0.03
      },
      {
        "name": "包装印刷",
        "change_pct": -0.57
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.51
      },
      {
        "name": "回购",
        "change_pct": -1.61
      },
      {
        "name": "太空算力",
        "change_pct": -0.39
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 51,
    "hot_rank_chg": 3,
    "stock_cnt": 5828,
    "price": "5.50",
    "change": "-3.85",
    "market_id": "33",
    "circulate_market_value": "194519240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -3.4
      },
      {
        "name": "手机产业链",
        "change_pct": -3.07
      },
      {
        "name": "超高清视频",
        "change_pct": -2.44
      },
      {
        "name": "苹果产业链",
        "change_pct": -3.18
      },
      {
        "name": "电竞",
        "change_pct": -1.64
      },
      {
        "name": "半导体",
        "change_pct": -4.18
      },
      {
        "name": "人工智能",
        "change_pct": -2.05
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.31
      },
      {
        "name": "VR&AR",
        "change_pct": -2.81
      },
      {
        "name": "OLED",
        "change_pct": -3.16
      },
      {
        "name": "京津冀",
        "change_pct": -0.59
      },
      {
        "name": "物联网",
        "change_pct": -1.65
      },
      {
        "name": "指纹识别",
        "change_pct": -3.84
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.38
      },
      {
        "name": "白马股",
        "change_pct": -0.68
      },
      {
        "name": "智能制造",
        "change_pct": -1.78
      },
      {
        "name": "小米概念股",
        "change_pct": -2.76
      },
      {
        "name": "国产芯片",
        "change_pct": -3.93
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.49
      },
      {
        "name": "全息概念",
        "change_pct": -2.21
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.13
      },
      {
        "name": "MicroLED",
        "change_pct": -3.7
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -2.21
      },
      {
        "name": "智能手表",
        "change_pct": -3.49
      },
      {
        "name": "MiniLED",
        "change_pct": -2.66
      },
      {
        "name": "传感器",
        "change_pct": -2.58
      },
      {
        "name": "大硅片",
        "change_pct": -4.25
      },
      {
        "name": "AI PC",
        "change_pct": -3.49
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      },
      {
        "name": "回购",
        "change_pct": -1.61
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -5.54
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.57
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.17
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 59,
    "hot_rank_chg": 152,
    "stock_cnt": 5828,
    "price": "11.09",
    "change": "2.02",
    "market_id": "17",
    "circulate_market_value": "19243157000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -1.67
      },
      {
        "name": "核电",
        "change_pct": -0.08
      },
      {
        "name": "锂电池",
        "change_pct": 0.46
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -1.15
      },
      {
        "name": "PCB板",
        "change_pct": -1.98
      },
      {
        "name": "中科院系",
        "change_pct": -1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.48
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.17
      },
      {
        "name": "固态电池",
        "change_pct": 1.17
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 67,
    "hot_rank_chg": 151,
    "stock_cnt": 5828,
    "price": "3.21",
    "change": "6.29",
    "market_id": "33",
    "circulate_market_value": "6352620100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.74
      },
      {
        "name": "深圳本地股",
        "change_pct": -0.39
      },
      {
        "name": "共享经济",
        "change_pct": -0.15
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "养老产业",
        "change_pct": -0.82
      },
      {
        "name": "住房租赁",
        "change_pct": -1.18
      },
      {
        "name": "房产经纪",
        "change_pct": 0.56
      },
      {
        "name": "第三代半导体",
        "change_pct": -3.48
      },
      {
        "name": "物业管理",
        "change_pct": -0.9
      },
      {
        "name": "旧改",
        "change_pct": -0.34
      },
      {
        "name": "横琴新区",
        "change_pct": -1.51
      },
      {
        "name": "氮化镓",
        "change_pct": -3.63
      },
      {
        "name": "REITs",
        "change_pct": -1.1
      },
      {
        "name": "华为产业链",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 71,
    "hot_rank_chg": -32,
    "stock_cnt": 5828,
    "price": "12.58",
    "change": "-4.04",
    "market_id": "17",
    "circulate_market_value": "4837609200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -2.98
      },
      {
        "name": "股权转让",
        "change_pct": -1.07
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "新疆概念",
        "change_pct": -0.06
      },
      {
        "name": "医药",
        "change_pct": -1.8
      },
      {
        "name": "流感",
        "change_pct": -0.76
      },
      {
        "name": "国资入股",
        "change_pct": -0.49
      },
      {
        "name": "减肥药",
        "change_pct": -2.93
      }
    ]
  },
  {
    "code": "605366",
    "name": "宏柏新材",
    "hot_rank": 73,
    "hot_rank_chg": -33,
    "stock_cnt": 5828,
    "price": "11.04",
    "change": "6.05",
    "market_id": "17",
    "circulate_market_value": "8532017800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有机硅",
        "change_pct": 0.83
      },
      {
        "name": "气凝胶",
        "change_pct": 2.22
      },
      {
        "name": "光纤概念",
        "change_pct": -3.54
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 74,
    "hot_rank_chg": -40,
    "stock_cnt": 5828,
    "price": "9.15",
    "change": "-9.23",
    "market_id": "17",
    "circulate_market_value": "32827178000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -2.17
      },
      {
        "name": "OLED",
        "change_pct": -3.16
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -2.49
      },
      {
        "name": "国企改革",
        "change_pct": -0.21
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -4.17
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "000710",
    "name": "贝瑞基因",
    "hot_rank": 75,
    "hot_rank_chg": -58,
    "stock_cnt": 5828,
    "price": "10.27",
    "change": "-5.52",
    "market_id": "33",
    "circulate_market_value": "3445866000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -2.86
      },
      {
        "name": "体外诊断",
        "change_pct": -1.73
      },
      {
        "name": "医疗器械",
        "change_pct": -1.81
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.08
      },
      {
        "name": "人工智能",
        "change_pct": -2.05
      },
      {
        "name": "基因测序",
        "change_pct": -2.39
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.45
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.81
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -2.02
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -2.53
      },
      {
        "name": "AI医疗",
        "change_pct": -2.17
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 76,
    "hot_rank_chg": 184,
    "stock_cnt": 5828,
    "price": "3.50",
    "change": "6.06",
    "market_id": "33",
    "circulate_market_value": "6281863200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": 1.09
      },
      {
        "name": "调味品",
        "change_pct": 1.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.09
      },
      {
        "name": "白糖",
        "change_pct": 4.13
      },
      {
        "name": "食品",
        "change_pct": 0.2
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 1.67
      },
      {
        "name": "物业管理",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": -0.21
      },
      {
        "name": "饮料",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "603601",
    "name": "再升科技",
    "hot_rank": 78,
    "hot_rank_chg": 131,
    "stock_cnt": 5828,
    "price": "9.81",
    "change": "3.26",
    "market_id": "17",
    "circulate_market_value": "11206364900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.45
      },
      {
        "name": "核电",
        "change_pct": -0.08
      },
      {
        "name": "大飞机",
        "change_pct": -0.95
      },
      {
        "name": "大气治理",
        "change_pct": -0.52
      },
      {
        "name": "玻纤",
        "change_pct": -0.87
      },
      {
        "name": "环保",
        "change_pct": -0.09
      },
      {
        "name": "核污染防治",
        "change_pct": -1.2
      },
      {
        "name": "航天",
        "change_pct": -1.39
      },
      {
        "name": "生物安全",
        "change_pct": -0.87
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -3.85
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 82,
    "hot_rank_chg": 14,
    "stock_cnt": 5828,
    "price": "5.66",
    "change": "4.24",
    "market_id": "33",
    "circulate_market_value": "4330696500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.16
      },
      {
        "name": "股权转让",
        "change_pct": -1.07
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.08
      },
      {
        "name": "强势人气股",
        "change_pct": -0.72
      },
      {
        "name": "医药商业",
        "change_pct": -0.22
      },
      {
        "name": "保健品",
        "change_pct": -0.62
      },
      {
        "name": "民营医院",
        "change_pct": -0.98
      },
      {
        "name": "医药",
        "change_pct": -1.8
      },
      {
        "name": "食品",
        "change_pct": 0.2
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.45
      },
      {
        "name": "口腔",
        "change_pct": -1.83
      },
      {
        "name": "医美",
        "change_pct": -0.95
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.81
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 83,
    "hot_rank_chg": 11,
    "stock_cnt": 5828,
    "price": "7.14",
    "change": "-1.38",
    "market_id": "17",
    "circulate_market_value": "3271893600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.46
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.74
      },
      {
        "name": "自贸区",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 90,
    "hot_rank_chg": 131,
    "stock_cnt": 5828,
    "price": "5.65",
    "change": "5.80",
    "market_id": "17",
    "circulate_market_value": "6884028000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.0
      },
      {
        "name": "煤炭",
        "change_pct": 2.04
      },
      {
        "name": "有色金属",
        "change_pct": -0.67
      },
      {
        "name": "国企改革",
        "change_pct": -0.21
      },
      {
        "name": "河南国企改革",
        "change_pct": -0.35
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 95,
    "hot_rank_chg": -57,
    "stock_cnt": 5828,
    "price": "8.35",
    "change": "4.64",
    "market_id": "33",
    "circulate_market_value": "14920353000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": 0.26
      },
      {
        "name": "风电",
        "change_pct": -0.12
      },
      {
        "name": "船舶",
        "change_pct": 0.38
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 96,
    "hot_rank_chg": -14,
    "stock_cnt": 5828,
    "price": "5.95",
    "change": "-2.14",
    "market_id": "17",
    "circulate_market_value": "5765749400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.12
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002384", "name": "东山精密", "hot_rank": 1, "hot_rank_chg": 101, "stock_cnt": 5828, "price": "150.66", "change": "-10.00", "market_id": "33", "circulate_market_value": "208863230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001246", "name": "力勤资源", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5828, "price": "53.55", "change": "-17.73", "market_id": "33", "circulate_market_value": "8424838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 18, "stock_cnt": 5828, "price": "13.80", "change": "5.02", "market_id": "17", "circulate_market_value": "8856608400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5828, "price": "48.61", "change": "5.01", "market_id": "33", "circulate_market_value": "30669034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 5, "hot_rank_chg": -2, "stock_cnt": 5828, "price": "12.24", "change": "-5.04", "market_id": "33", "circulate_market_value": "5625648400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": -0.58}, {"name": "汽车零部件", "change_pct": -1.38}, {"name": "新能源汽车", "change_pct": -0.48}, {"name": "新能源车零部件", "change_pct": -1.59}, {"name": "大农业", "change_pct": -0.24}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 6, "hot_rank_chg": 27, "stock_cnt": 5828, "price": "21.36", "change": "9.43", "market_id": "33", "circulate_market_value": "9661956800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 7, "hot_rank_chg": 5, "stock_cnt": 5828, "price": "7.24", "change": "-2.16", "market_id": "17", "circulate_market_value": "18234012000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.13}, {"name": "工业大麻", "change_pct": -0.41}, {"name": "中药", "change_pct": -1.16}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "保健品", "change_pct": -0.62}, {"name": "民营医院", "change_pct": -0.98}, {"name": "医药", "change_pct": -1.8}, {"name": "化学原料药", "change_pct": -1.44}, {"name": "流感", "change_pct": -0.76}, {"name": "振兴东北", "change_pct": -0.47}, {"name": "食品", "change_pct": 0.2}]}, {"code": "002074", "name": "国轩高科", "hot_rank": 8, "hot_rank_chg": 16, "stock_cnt": 5828, "price": "31.30", "change": "6.10", "market_id": "33", "circulate_market_value": "54357386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5828, "price": "11.39", "change": "10.05", "market_id": "17", "circulate_market_value": "11901272600.00", "change_type": "1", "change_section": "8", "change_days": "8", "change_reason": "拟收购界面财联社", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.79}, {"name": "上海国企改革", "change_pct": -0.04}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -2.2}, {"name": "国企改革", "change_pct": -0.21}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 10, "hot_rank_chg": 12, "stock_cnt": 5828, "price": "24.20", "change": "4.54", "market_id": "17", "circulate_market_value": "5110149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 11, "hot_rank_chg": 4, "stock_cnt": 5828, "price": "24.72", "change": "-10.01", "market_id": "17", "circulate_market_value": "55723285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000002", "name": "万科A", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5828, "price": "4.06", "change": "-4.70", "market_id": "33", "circulate_market_value": "39443359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.47}, {"name": "深圳本地股", "change_pct": -0.39}, {"name": "股权转让", "change_pct": -1.07}, {"name": "房地产", "change_pct": -1.19}, {"name": "养老产业", "change_pct": -0.82}, {"name": "冷链", "change_pct": -0.08}, {"name": "住房租赁", "change_pct": -1.18}, {"name": "破净股", "change_pct": -0.14}, {"name": "冰雪产业", "change_pct": 0.04}, {"name": "物业管理", "change_pct": -0.9}, {"name": "旧改", "change_pct": -0.34}, {"name": "REITs", "change_pct": -1.1}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 13, "hot_rank_chg": 17, "stock_cnt": 5828, "price": "3.65", "change": "-1.35", "market_id": "33", "circulate_market_value": "8550811600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.16}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "人工智能", "change_pct": -2.05}, {"name": "VR&AR", "change_pct": -2.81}, {"name": "京津冀", "change_pct": -0.59}, {"name": "装修装饰", "change_pct": -0.78}, {"name": "住房租赁", "change_pct": -1.18}, {"name": "破净股", "change_pct": -0.14}, {"name": "数字经济", "change_pct": -1.72}, {"name": "房产经纪", "change_pct": 0.56}, {"name": "物业管理", "change_pct": -0.9}, {"name": "华为产业链", "change_pct": -1.99}, {"name": "AI大模型/智能体", "change_pct": -2.02}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 14, "hot_rank_chg": -10, "stock_cnt": 5828, "price": "13.75", "change": "10.00", "market_id": "33", "circulate_market_value": "10474277300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "厨房小家电"}, {"code": "601127", "name": "赛力斯", "hot_rank": 15, "hot_rank_chg": 22, "stock_cnt": 5828, "price": "47.97", "change": "2.19", "market_id": "17", "circulate_market_value": "74699047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 16, "hot_rank_chg": 138, "stock_cnt": 5828, "price": "16.19", "change": "9.99", "market_id": "17", "circulate_market_value": "11014375600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇"}, {"code": "603200", "name": "上海洗霸", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5828, "price": "49.21", "change": "9.99", "market_id": "17", "circulate_market_value": "8635375900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "固态电池"}, {"code": "688498", "name": "源杰科技", "hot_rank": 18, "hot_rank_chg": 456, "stock_cnt": 5828, "price": "1290.40", "change": "-20.00", "market_id": "17", "circulate_market_value": "158580020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5828, "price": "12.12", "change": "-0.98", "market_id": "33", "circulate_market_value": "6380883600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": -0.39}, {"name": "房地产", "change_pct": -1.19}, {"name": "粤港澳大湾区", "change_pct": -0.09}, {"name": "住房租赁", "change_pct": -1.18}, {"name": "物业管理", "change_pct": -0.9}, {"name": "新型城镇化", "change_pct": -0.48}, {"name": "旧改", "change_pct": -0.34}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 20, "hot_rank_chg": 23, "stock_cnt": 5828, "price": "52.70", "change": "-3.94", "market_id": "17", "circulate_market_value": "129307158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 21, "hot_rank_chg": 185, "stock_cnt": 5828, "price": "50.92", "change": "5.60", "market_id": "17", "circulate_market_value": "51438515000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 22, "hot_rank_chg": 38, "stock_cnt": 5828, "price": "39.60", "change": "6.17", "market_id": "17", "circulate_market_value": "18986751000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 23, "hot_rank_chg": 119, "stock_cnt": 5828, "price": "131.86", "change": "1.46", "market_id": "17", "circulate_market_value": "318013200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 24, "hot_rank_chg": 18, "stock_cnt": 5828, "price": "783.00", "change": "-3.15", "market_id": "33", "circulate_market_value": "869080670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002866", "name": "传艺科技", "hot_rank": 25, "hot_rank_chg": -11, "stock_cnt": 5828, "price": "18.59", "change": "10.00", "market_id": "33", "circulate_market_value": "3416263700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "固态电池"}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": 58, "stock_cnt": 5828, "price": "50.40", "change": "1.59", "market_id": "33", "circulate_market_value": "57833494000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 27, "hot_rank_chg": 125, "stock_cnt": 5828, "price": "46.59", "change": "9.86", "market_id": "17", "circulate_market_value": "19398571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300450", "name": "先导智能", "hot_rank": 28, "hot_rank_chg": 37, "stock_cnt": 5828, "price": "37.59", "change": "7.58", "market_id": "33", "circulate_market_value": "58618369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 29, "hot_rank_chg": 15, "stock_cnt": 5828, "price": "8.08", "change": "-5.28", "market_id": "33", "circulate_market_value": "15473947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -0.74}, {"name": "林业", "change_pct": -1.31}, {"name": "碳中和", "change_pct": 0.38}, {"name": "自贸区", "change_pct": -0.18}]}, {"code": "300207", "name": "欣旺达", "hot_rank": 30, "hot_rank_chg": 47, "stock_cnt": 5828, "price": "21.50", "change": "-2.27", "market_id": "33", "circulate_market_value": "36849403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 31, "hot_rank_chg": -23, "stock_cnt": 5828, "price": "52.06", "change": "5.60", "market_id": "17", "circulate_market_value": "32678932000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 32, "hot_rank_chg": -9, "stock_cnt": 5828, "price": "19.01", "change": "-9.99", "market_id": "17", "circulate_market_value": "15054093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 33, "hot_rank_chg": 43, "stock_cnt": 5828, "price": "39.55", "change": "0.35", "market_id": "17", "circulate_market_value": "157076270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 34, "hot_rank_chg": 40, "stock_cnt": 5828, "price": "50.52", "change": "-7.79", "market_id": "17", "circulate_market_value": "227493530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 35, "hot_rank_chg": 307, "stock_cnt": 5828, "price": "10.10", "change": "5.43", "market_id": "33", "circulate_market_value": "8529682100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.45}, {"name": "大飞机", "change_pct": -0.95}, {"name": "北斗导航", "change_pct": -1.1}, {"name": "高铁轨交", "change_pct": -0.25}, {"name": "军民融合", "change_pct": -1.33}, {"name": "磁悬浮", "change_pct": -0.24}, {"name": "军工", "change_pct": -1.21}, {"name": "碳纤维", "change_pct": -0.89}, {"name": "无人机", "change_pct": -0.97}, {"name": "智能制造", "change_pct": -1.78}, {"name": "3D打印", "change_pct": -1.76}, {"name": "航天", "change_pct": -1.39}, {"name": "卫星互联网", "change_pct": -1.51}, {"name": "低空经济", "change_pct": -1.33}, {"name": "海洋经济", "change_pct": 0.05}]}, {"code": "000993", "name": "闽东电力", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5828, "price": "17.74", "change": "3.80", "market_id": "33", "circulate_market_value": "8124058800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 37, "hot_rank_chg": -26, "stock_cnt": 5828, "price": "29.46", "change": "3.04", "market_id": "17", "circulate_market_value": "9925661800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603906", "name": "龙蟠科技", "hot_rank": 38, "hot_rank_chg": -7, "stock_cnt": 5828, "price": "20.94", "change": "9.98", "market_id": "17", "circulate_market_value": "11789146800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷酸铁锂"}, {"code": "600186", "name": "莲花控股", "hot_rank": 39, "hot_rank_chg": 93, "stock_cnt": 5828, "price": "11.46", "change": "0.00", "market_id": "17", "circulate_market_value": "20503525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.03}, {"name": "纯碱", "change_pct": 0.39}, {"name": "食品", "change_pct": 0.2}, {"name": "土壤修复", "change_pct": -0.52}, {"name": "东数西算/算力", "change_pct": -2.23}, {"name": "OpenClaw概念", "change_pct": -2.86}, {"name": "DeepSeek概念股", "change_pct": -2.53}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 40, "hot_rank_chg": 45, "stock_cnt": 5828, "price": "427.80", "change": "-5.02", "market_id": "17", "circulate_market_value": "12871526600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 41, "hot_rank_chg": -28, "stock_cnt": 5828, "price": "10.69", "change": "9.98", "market_id": "17", "circulate_market_value": "3146089600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "新能源电池", "xgb_concepts": [{"name": "锂电池", "change_pct": 0.46}, {"name": "中日韩自贸区", "change_pct": 0.23}, {"name": "新能源汽车", "change_pct": -0.48}, {"name": "振兴东北", "change_pct": -0.47}, {"name": "国企改革", "change_pct": -0.21}, {"name": "自贸区", "change_pct": -0.18}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 42, "hot_rank_chg": 29, "stock_cnt": 5828, "price": "13.58", "change": "1.88", "market_id": "17", "circulate_market_value": "9044280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002882", "name": "金龙羽", "hot_rank": 43, "hot_rank_chg": 63, "stock_cnt": 5828, "price": "26.95", "change": "7.89", "market_id": "33", "circulate_market_value": "6656381500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 44, "hot_rank_chg": 13, "stock_cnt": 5828, "price": "44.64", "change": "-4.25", "market_id": "17", "circulate_market_value": "37790141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 45, "hot_rank_chg": 34, "stock_cnt": 5828, "price": "79.63", "change": "0.23", "market_id": "33", "circulate_market_value": "57750588000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 46, "hot_rank_chg": 45, "stock_cnt": 5828, "price": "11.88", "change": "3.48", "market_id": "17", "circulate_market_value": "59269542000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.18}, {"name": "5G", "change_pct": -2.56}, {"name": "VR&AR", "change_pct": -2.81}, {"name": "云计算数据中心", "change_pct": -2.41}, {"name": "光通信", "change_pct": -5.09}, {"name": "3D感应", "change_pct": -3.55}, {"name": "汽车零部件", "change_pct": -1.38}, {"name": "LED", "change_pct": -1.65}, {"name": "国产芯片", "change_pct": -3.93}, {"name": "MicroLED", "change_pct": -3.7}, {"name": "第三代半导体", "change_pct": -3.48}, {"name": "激光雷达", "change_pct": -4.78}, {"name": "华为汽车", "change_pct": -1.49}, {"name": "MiniLED", "change_pct": -2.66}, {"name": "氮化镓", "change_pct": -3.63}, {"name": "大基金概念", "change_pct": -3.7}, {"name": "碳化硅", "change_pct": -3.19}, {"name": "磷化铟", "change_pct": -1.13}, {"name": "光电共封装CPO", "change_pct": -5.54}, {"name": "智能眼镜/MR头显", "change_pct": -3.57}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 47, "hot_rank_chg": 243, "stock_cnt": 5828, "price": "9.28", "change": "9.95", "market_id": "33", "circulate_market_value": "9836384000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "太空算力", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.41}, {"name": "电子烟", "change_pct": -1.79}, {"name": "一带一路", "change_pct": -0.02}, {"name": "造纸", "change_pct": -0.03}, {"name": "包装印刷", "change_pct": -0.57}, {"name": "卫星互联网", "change_pct": -1.51}, {"name": "回购", "change_pct": -1.61}, {"name": "太空算力", "change_pct": -0.39}]}, {"code": "002407", "name": "多氟多", "hot_rank": 48, "hot_rank_chg": 126, "stock_cnt": 5828, "price": "30.05", "change": "1.90", "market_id": "33", "circulate_market_value": "32481595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 49, "hot_rank_chg": 104, "stock_cnt": 5828, "price": "33.56", "change": "-7.45", "market_id": "17", "circulate_market_value": "49064546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 50, "hot_rank_chg": 116, "stock_cnt": 5828, "price": "378.50", "change": "-2.70", "market_id": "33", "circulate_market_value": "474912940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 51, "hot_rank_chg": 3, "stock_cnt": 5828, "price": "5.50", "change": "-3.85", "market_id": "33", "circulate_market_value": "194519240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -3.4}, {"name": "手机产业链", "change_pct": -3.07}, {"name": "超高清视频", "change_pct": -2.44}, {"name": "苹果产业链", "change_pct": -3.18}, {"name": "电竞", "change_pct": -1.64}, {"name": "半导体", "change_pct": -4.18}, {"name": "人工智能", "change_pct": -2.05}, {"name": "互联网医疗", "change_pct": -1.31}, {"name": "VR&AR", "change_pct": -2.81}, {"name": "OLED", "change_pct": -3.16}, {"name": "京津冀", "change_pct": -0.59}, {"name": "物联网", "change_pct": -1.65}, {"name": "指纹识别", "change_pct": -3.84}, {"name": "汽车零部件", "change_pct": -1.38}, {"name": "白马股", "change_pct": -0.68}, {"name": "智能制造", "change_pct": -1.78}, {"name": "小米概念股", "change_pct": -2.76}, {"name": "国产芯片", "change_pct": -3.93}, {"name": "液晶面板/LCD", "change_pct": -2.49}, {"name": "全息概念", "change_pct": -2.21}, {"name": "理想汽车概念股", "change_pct": -2.13}, {"name": "MicroLED", "change_pct": -3.7}, {"name": "钙钛矿电池", "change_pct": -2.21}, {"name": "智能手表", "change_pct": -3.49}, {"name": "MiniLED", "change_pct": -2.66}, {"name": "传感器", "change_pct": -2.58}, {"name": "大硅片", "change_pct": -4.25}, {"name": "AI PC", "change_pct": -3.49}, {"name": "华为产业链", "change_pct": -1.99}, {"name": "回购", "change_pct": -1.61}, {"name": "光电共封装CPO", "change_pct": -5.54}, {"name": "智能眼镜/MR头显", "change_pct": -3.57}, {"name": "玻璃基板封装", "change_pct": -4.17}]}, {"code": "002709", "name": "天赐材料", "hot_rank": 52, "hot_rank_chg": 155, "stock_cnt": 5828, "price": "32.69", "change": "4.78", "market_id": "33", "circulate_market_value": "49329570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 53, "hot_rank_chg": 66, "stock_cnt": 5828, "price": "224.25", "change": "5.45", "market_id": "17", "circulate_market_value": "35160274000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 54, "hot_rank_chg": 49, "stock_cnt": 5828, "price": "13.50", "change": "-4.39", "market_id": "17", "circulate_market_value": "17337761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 55, "hot_rank_chg": 158, "stock_cnt": 5828, "price": "14.06", "change": "3.46", "market_id": "33", "circulate_market_value": "9281077100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601872", "name": "招商轮船", "hot_rank": 56, "hot_rank_chg": 247, "stock_cnt": 5828, "price": "22.03", "change": "9.33", "market_id": "17", "circulate_market_value": "177882080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 57, "hot_rank_chg": 115, "stock_cnt": 5828, "price": "40.41", "change": "-1.29", "market_id": "33", "circulate_market_value": "61339493000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 58, "hot_rank_chg": -22, "stock_cnt": 5828, "price": "23.56", "change": "-10.01", "market_id": "33", "circulate_market_value": "5815460800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 59, "hot_rank_chg": 152, "stock_cnt": 5828, "price": "11.09", "change": "2.02", "market_id": "17", "circulate_market_value": "19243157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -1.67}, {"name": "核电", "change_pct": -0.08}, {"name": "锂电池", "change_pct": 0.46}, {"name": "铜箔/覆铜板", "change_pct": -1.15}, {"name": "PCB板", "change_pct": -1.98}, {"name": "中科院系", "change_pct": -1.33}, {"name": "新能源汽车", "change_pct": -0.48}, {"name": "宁德时代概念股", "change_pct": -0.17}, {"name": "固态电池", "change_pct": 1.17}, {"name": "PET复合铜箔", "change_pct": -1.98}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 60, "hot_rank_chg": 1, "stock_cnt": 5828, "price": "334.40", "change": "-5.51", "market_id": "17", "circulate_market_value": "224288210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 61, "hot_rank_chg": 20, "stock_cnt": 5828, "price": "16.03", "change": "-2.61", "market_id": "33", "circulate_market_value": "53316205000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 62, "hot_rank_chg": 66, "stock_cnt": 5828, "price": "19.78", "change": "-1.30", "market_id": "33", "circulate_market_value": "23270553000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5828, "price": "286.75", "change": "-1.50", "market_id": "33", "circulate_market_value": "1221731950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 64, "hot_rank_chg": 2, "stock_cnt": 5828, "price": "16.55", "change": "-4.28", "market_id": "17", "circulate_market_value": "34615023000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 65, "hot_rank_chg": 90, "stock_cnt": 5828, "price": "66.28", "change": "7.16", "market_id": "33", "circulate_market_value": "5667106800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 66, "hot_rank_chg": 296, "stock_cnt": 5828, "price": "18.69", "change": "7.79", "market_id": "17", "circulate_market_value": "21195927000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 67, "hot_rank_chg": 151, "stock_cnt": 5828, "price": "3.21", "change": "6.29", "market_id": "33", "circulate_market_value": "6352620100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.74}, {"name": "深圳本地股", "change_pct": -0.39}, {"name": "共享经济", "change_pct": -0.15}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "养老产业", "change_pct": -0.82}, {"name": "住房租赁", "change_pct": -1.18}, {"name": "房产经纪", "change_pct": 0.56}, {"name": "第三代半导体", "change_pct": -3.48}, {"name": "物业管理", "change_pct": -0.9}, {"name": "旧改", "change_pct": -0.34}, {"name": "横琴新区", "change_pct": -1.51}, {"name": "氮化镓", "change_pct": -3.63}, {"name": "REITs", "change_pct": -1.1}, {"name": "华为产业链", "change_pct": -1.99}]}, {"code": "002119", "name": "康强电子", "hot_rank": 68, "hot_rank_chg": -1, "stock_cnt": 5828, "price": "25.07", "change": "-2.83", "market_id": "33", "circulate_market_value": "9408369900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 69, "hot_rank_chg": -60, "stock_cnt": 5828, "price": "162.00", "change": "-3.19", "market_id": "17", "circulate_market_value": "400671400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 70, "hot_rank_chg": 115, "stock_cnt": 5828, "price": "115.88", "change": "-0.04", "market_id": "33", "circulate_market_value": "222820060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 71, "hot_rank_chg": -32, "stock_cnt": 5828, "price": "12.58", "change": "-4.04", "market_id": "17", "circulate_market_value": "4837609200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -2.98}, {"name": "股权转让", "change_pct": -1.07}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "新疆概念", "change_pct": -0.06}, {"name": "医药", "change_pct": -1.8}, {"name": "流感", "change_pct": -0.76}, {"name": "国资入股", "change_pct": -0.49}, {"name": "减肥药", "change_pct": -2.93}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 72, "hot_rank_chg": 147, "stock_cnt": 5828, "price": "235.07", "change": "-9.86", "market_id": "33", "circulate_market_value": "255847380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605366", "name": "宏柏新材", "hot_rank": 73, "hot_rank_chg": -33, "stock_cnt": 5828, "price": "11.04", "change": "6.05", "market_id": "17", "circulate_market_value": "8532017800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有机硅", "change_pct": 0.83}, {"name": "气凝胶", "change_pct": 2.22}, {"name": "光纤概念", "change_pct": -3.54}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 74, "hot_rank_chg": -40, "stock_cnt": 5828, "price": "9.15", "change": "-9.23", "market_id": "17", "circulate_market_value": "32827178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -2.17}, {"name": "OLED", "change_pct": -3.16}, {"name": "液晶面板/LCD", "change_pct": -2.49}, {"name": "国企改革", "change_pct": -0.21}, {"name": "玻璃基板封装", "change_pct": -4.17}, {"name": "陕西国企改革", "change_pct": -0.54}]}, {"code": "000710", "name": "贝瑞基因", "hot_rank": 75, "hot_rank_chg": -58, "stock_cnt": 5828, "price": "10.27", "change": "-5.52", "market_id": "33", "circulate_market_value": "3445866000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -2.86}, {"name": "体外诊断", "change_pct": -1.73}, {"name": "医疗器械", "change_pct": -1.81}, {"name": "优化生育（三孩）", "change_pct": -1.08}, {"name": "人工智能", "change_pct": -2.05}, {"name": "基因测序", "change_pct": -2.39}, {"name": "辅助生殖", "change_pct": -1.45}, {"name": "新冠病毒防治", "change_pct": -0.81}, {"name": "AI大模型/智能体", "change_pct": -2.02}, {"name": "DeepSeek概念股", "change_pct": -2.53}, {"name": "AI医疗", "change_pct": -2.17}]}, {"code": "000523", "name": "红棉股份", "hot_rank": 76, "hot_rank_chg": 184, "stock_cnt": 5828, "price": "3.50", "change": "6.06", "market_id": "33", "circulate_market_value": "6281863200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": 1.09}, {"name": "调味品", "change_pct": 1.03}, {"name": "粤港澳大湾区", "change_pct": -0.09}, {"name": "白糖", "change_pct": 4.13}, {"name": "食品", "change_pct": 0.2}, {"name": "甜味剂/代糖", "change_pct": 1.67}, {"name": "物业管理", "change_pct": -0.9}, {"name": "国企改革", "change_pct": -0.21}, {"name": "饮料", "change_pct": -0.28}]}, {"code": "600584", "name": "长电科技", "hot_rank": 77, "hot_rank_chg": 31, "stock_cnt": 5828, "price": "62.60", "change": "-2.61", "market_id": "17", "circulate_market_value": "112017352000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603601", "name": "再升科技", "hot_rank": 78, "hot_rank_chg": 131, "stock_cnt": 5828, "price": "9.81", "change": "3.26", "market_id": "17", "circulate_market_value": "11206364900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.45}, {"name": "核电", "change_pct": -0.08}, {"name": "大飞机", "change_pct": -0.95}, {"name": "大气治理", "change_pct": -0.52}, {"name": "玻纤", "change_pct": -0.87}, {"name": "环保", "change_pct": -0.09}, {"name": "核污染防治", "change_pct": -1.2}, {"name": "航天", "change_pct": -1.39}, {"name": "生物安全", "change_pct": -0.87}, {"name": "中芯国际概念股", "change_pct": -3.85}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 79, "hot_rank_chg": 46, "stock_cnt": 5828, "price": "85.71", "change": "-1.33", "market_id": "33", "circulate_market_value": "55969273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 80, "hot_rank_chg": -21, "stock_cnt": 5828, "price": "21.11", "change": "-10.02", "market_id": "17", "circulate_market_value": "29462606000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 81, "hot_rank_chg": -55, "stock_cnt": 5828, "price": "14.73", "change": "-9.52", "market_id": "17", "circulate_market_value": "6546666700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 82, "hot_rank_chg": 14, "stock_cnt": 5828, "price": "5.66", "change": "4.24", "market_id": "33", "circulate_market_value": "4330696500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.16}, {"name": "股权转让", "change_pct": -1.07}, {"name": "优化生育（三孩）", "change_pct": -1.08}, {"name": "强势人气股", "change_pct": -0.72}, {"name": "医药商业", "change_pct": -0.22}, {"name": "保健品", "change_pct": -0.62}, {"name": "民营医院", "change_pct": -0.98}, {"name": "医药", "change_pct": -1.8}, {"name": "食品", "change_pct": 0.2}, {"name": "辅助生殖", "change_pct": -1.45}, {"name": "口腔", "change_pct": -1.83}, {"name": "医美", "change_pct": -0.95}, {"name": "新冠病毒防治", "change_pct": -0.81}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 83, "hot_rank_chg": 11, "stock_cnt": 5828, "price": "7.14", "change": "-1.38", "market_id": "17", "circulate_market_value": "3271893600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.46}, {"name": "福建自贸/海西概念", "change_pct": -0.74}, {"name": "自贸区", "change_pct": -0.18}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 84, "hot_rank_chg": -33, "stock_cnt": 5828, "price": "48.50", "change": "-9.58", "market_id": "17", "circulate_market_value": "6932057100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 85, "hot_rank_chg": 279, "stock_cnt": 5828, "price": "33.62", "change": "8.45", "market_id": "33", "circulate_market_value": "16411237000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 87, "hot_rank_chg": -12, "stock_cnt": 5828, "price": "14.38", "change": "10.02", "market_id": "17", "circulate_market_value": "4899323500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶树脂"}, {"code": "600522", "name": "中天科技", "hot_rank": 88, "hot_rank_chg": 35, "stock_cnt": 5828, "price": "30.49", "change": "-2.06", "market_id": "17", "circulate_market_value": "104060835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 89, "hot_rank_chg": -2, "stock_cnt": 5828, "price": "33.12", "change": "0.88", "market_id": "33", "circulate_market_value": "52481514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 90, "hot_rank_chg": 131, "stock_cnt": 5828, "price": "5.65", "change": "5.80", "market_id": "17", "circulate_market_value": "6884028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.0}, {"name": "煤炭", "change_pct": 2.04}, {"name": "有色金属", "change_pct": -0.67}, {"name": "国企改革", "change_pct": -0.21}, {"name": "河南国企改革", "change_pct": -0.35}]}, {"code": "600150", "name": "中国船舶", "hot_rank": 91, "hot_rank_chg": 92, "stock_cnt": 5828, "price": "39.81", "change": "1.82", "market_id": "17", "circulate_market_value": "299594980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 92, "hot_rank_chg": -19, "stock_cnt": 5828, "price": "22.71", "change": "-2.45", "market_id": "33", "circulate_market_value": "13510910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 93, "hot_rank_chg": 156, "stock_cnt": 5828, "price": "152.01", "change": "-7.81", "market_id": "33", "circulate_market_value": "119484383000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 94, "hot_rank_chg": 7, "stock_cnt": 5828, "price": "17.11", "change": "-3.06", "market_id": "17", "circulate_market_value": "37973125000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 95, "hot_rank_chg": -57, "stock_cnt": 5828, "price": "8.35", "change": "4.64", "market_id": "33", "circulate_market_value": "14920353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": 0.26}, {"name": "风电", "change_pct": -0.12}, {"name": "船舶", "change_pct": 0.38}]}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 96, "hot_rank_chg": -14, "stock_cnt": 5828, "price": "5.95", "change": "-2.14", "market_id": "17", "circulate_market_value": "5765749400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.12}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 98, "hot_rank_chg": -78, "stock_cnt": 5828, "price": "22.22", "change": "10.00", "market_id": "33", "circulate_market_value": "3185588800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "固态电池"}, {"code": "603083", "name": "剑桥科技", "hot_rank": 99, "hot_rank_chg": 18, "stock_cnt": 5828, "price": "193.10", "change": "-6.01", "market_id": "17", "circulate_market_value": "53216115000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002669", "name": "康达新材", "hot_rank": 100, "hot_rank_chg": 208, "stock_cnt": 5828, "price": "14.70", "change": "7.07", "market_id": "33", "circulate_market_value": "4449951700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603928", "name": "兴业股份", "price": 14.38, "change_pct": 10.02, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["电子树脂"], "limit_up_days": 2, "turnover_ratio": 7.56, "first_limit_up": 1791423387, "break_limit_up_times": 0}, {"code": "002565", "name": "顺灏股份", "price": 9.28, "change_pct": 9.95, "reason": "公司持有北京轨道辰光科技19.30%股份，后者宣布近日完成PreA1轮股权融资；公司同时在债权融资方面取得重大进展，与多家银行签署战略授信协议或取得授信意向函，金额共计577亿元人民币", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 16.09, "first_limit_up": 1791423624, "break_limit_up_times": 3}, {"code": "002058", "name": "紫竹高科", "price": 22.22, "change_pct": 10.0, "reason": "1、公司核心业务聚焦于铝塑膜业务及汽车检具业务，铝塑膜是软包锂电池电芯封装的关键材料，下游主要应用于3C消费电子、动力、储能三类软包电池；\n2、公司具备《民用核安全电气设备设计许可证》和《民用核安全电气设备制造许可证》，为福清/方家山核电站供货核级压力变送器；公司有能力生产核级的仪器仪表产品", "plates": ["锂电池"], "limit_up_days": 3, "turnover_ratio": 3.3, "first_limit_up": 1791422700, "break_limit_up_times": 1}, {"code": "603906", "name": "龙蟠科技", "price": 20.94, "change_pct": 9.98, "reason": "公司主要从事磷酸铁锂正极材料研产销，与全球主流锂电池制造商如宁德时代、LGES、瑞浦兰钧、亿纬锂能、欣旺达等建立了长期稳定的合作关系", "plates": ["锂电池"], "limit_up_days": 2, "turnover_ratio": 14.89, "first_limit_up": 1791436389, "break_limit_up_times": 13}, {"code": "601956", "name": "东贝集团", "price": 5.52, "change_pct": 9.96, "reason": "公司在洗衣机电机、空调电机、机器人关节电机等领域均有相关技术研发储备，人形机器人关节电机目前还处于研发测试阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.95, "first_limit_up": 1791424177, "break_limit_up_times": 0}, {"code": "603189", "name": "*ST网达", "price": 10.2, "change_pct": 10.03, "reason": "公司基于云厂商的公有云能力构建融媒业务系统，结合云原生的架构，实现与云厂商的优势互补，逐渐把媒资系统、运营系统、直播管理系统、社交互动系统改造为云SaaS服务，能够基于云市场销售和推广，成为云市场的垂直领域的应用解决方案提供者", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.19, "first_limit_up": 1791440305, "break_limit_up_times": 2}, {"code": "600408", "name": "安泰集团", "price": 3.44, "change_pct": 9.9, "reason": "山西省焦化行业龙头企业之一，H型钢与焦炭双主业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.43, "first_limit_up": 1791423967, "break_limit_up_times": 0}, {"code": "600812", "name": "华北制药", "price": 5.48, "change_pct": 10.04, "reason": "公司是我国最大的抗生素、维生素生产基地之一，产品主要是维生素C和维生素B12", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.27, "first_limit_up": 1791422700, "break_limit_up_times": 2}, {"code": "600513", "name": "联环药业", "price": 16.6, "change_pct": 10.01, "reason": "公司主导产品之一爱普列特片为国家一类新药，是国内首创的治疗前列腺良性增生症的有效药物，生产的美愈伪麻胶囊可用于缓解普通感冒和流行性感冒症状", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 15.99, "first_limit_up": 1791423028, "break_limit_up_times": 2}, {"code": "002866", "name": "传艺科技", "price": 18.59, "change_pct": 10.0, "reason": "1、公司在钠电池正负极材料、电解液等关键环节进行一体化布局并实现量产交付，产品可应用于A00级车、小动力车、电动工具及储能等领域；\n2、公司专注于柔性线路板（FPC）的设计、研发、制造和销售，为客户提供定制化解决方案；\n3、消费电子零组件行业头部企业之一，拟定增募资不超8.71亿元，加码智能化产线升级", "plates": ["锂电池"], "limit_up_days": 3, "turnover_ratio": 20.57, "first_limit_up": 1791423306, "break_limit_up_times": 1}, {"code": "601975", "name": "招商南油", "price": 4.97, "change_pct": 9.96, "reason": "招商局集团旗下从事油轮运输的专业公司", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1791423841, "break_limit_up_times": 33}, {"code": "300522", "name": "世名科技", "price": 16.56, "change_pct": 20.0, "reason": "公司开发的特种碳氢树脂产品主要用于5G高速覆铜板，属于M6~M8级，项目整体处于试生产中，500吨级电子级碳氢树脂已向部分下游客户送样与小批量供应", "plates": ["电子树脂"], "limit_up_days": 1, "turnover_ratio": 9.9, "first_limit_up": 1791423231, "break_limit_up_times": 1}, {"code": "605298", "name": "必得科技", "price": 44.97, "change_pct": 10.0, "reason": "轨道交通车辆配套领域领先企业，专注于中高速动车组列车、城轨列车等轨道交通车辆配套产品的研产销", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 0.46, "first_limit_up": 1791423811, "break_limit_up_times": 0}, {"code": "002687", "name": "乔治白", "price": 6.14, "change_pct": 10.04, "reason": "中高端职业装领导者；公司主要从事“乔治白”“giuseppe”品牌的职业装以及校服产品设计研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1791423021, "break_limit_up_times": 1}, {"code": "002702", "name": "海欣食品", "price": 5.92, "change_pct": 10.04, "reason": "公司位于福建省福州市，为国内鱼丸龙头，主营速冻鱼糜，速冻肉制品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 14.39, "first_limit_up": 1791437466, "break_limit_up_times": 0}, {"code": "605303", "name": "园林股份", "price": 31.53, "change_pct": 10.01, "reason": "公司拟收购存储芯片及模组企业华澜微93.5%股份", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 0.2, "first_limit_up": 1791422700, "break_limit_up_times": 0}, {"code": "002805", "name": "丰元股份", "price": 17.67, "change_pct": 10.02, "reason": "公司与中科院青能所共同成立了中科丰元研究院，在固态电池正极材料方面有相应研发布局并持续投入研发；一季度净利润同比增长185.59%", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 8.81, "first_limit_up": 1791423678, "break_limit_up_times": 1}, {"code": "600400", "name": "红豆股份", "price": 3.62, "change_pct": 10.03, "reason": "公司投资智能养老机器人项目，布局“人工智能+居家养老”领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.81, "first_limit_up": 1791427119, "break_limit_up_times": 5}, {"code": "301697", "name": "贝特利", "price": 31.51, "change_pct": 19.99, "reason": "公司四甲基环四硅氧烷可作为半导体上游原材料，LED封装胶已规模化销售，Mini-LED封装胶已量产并开始小批量销售", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 46.23, "first_limit_up": 1791423495, "break_limit_up_times": 6}, {"code": "603200", "name": "上海洗霸", "price": 49.21, "change_pct": 9.99, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["锂电池"], "limit_up_days": 3, "turnover_ratio": 18.32, "first_limit_up": 1791425156, "break_limit_up_times": 8}, {"code": "600663", "name": "陆家嘴", "price": 11.12, "change_pct": 9.99, "reason": "陆家嘴金融贸易区城市开发商，公司以 “商业地产 + 商业运营 + 金融服务” 为核心格局，聚焦商办楼宇、高端住宅开发及租赁", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 1.0, "first_limit_up": 1791423022, "break_limit_up_times": 3}, {"code": "002774", "name": "快意电梯", "price": 19.04, "change_pct": 9.99, "reason": "公司拥有乘客电梯、载货电梯、自动扶梯等全系列产品，产品行销全球60多个国家和地区", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.57, "first_limit_up": 1791423348, "break_limit_up_times": 0}, {"code": "002869", "name": "金溢科技", "price": 19.14, "change_pct": 10.0, "reason": "公司打造了完整的智能网联车路云产品体系，硬件设备主要集中在车、路两端，包括车载TBOX、车载智能网关、V2X-OBU、V2X-RSU、ETC-RSU、ETC-OBU、边缘计算单元等设备，软件产品包括车路协同云平台、C-V2X车载HMI人机交互系统管理平台等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.59, "first_limit_up": 1791423897, "break_limit_up_times": 1}, {"code": "600241", "name": "时代万恒", "price": 10.69, "change_pct": 9.98, "reason": "控股子公司九夷锂能主营业务为锂电池的研产销，拥有国内领先的圆柱形锂电池全自动化产线，目标市场定位于高端电动工具领域，开拓了博世、飞利浦、斯蒂尔、宝时得等优质客户", "plates": ["锂电池"], "limit_up_days": 4, "turnover_ratio": 10.88, "first_limit_up": 1791423102, "break_limit_up_times": 0}, {"code": "002733", "name": "雄韬股份", "price": 18.89, "change_pct": 10.02, "reason": "公司自主生产磷酸铁锂系列锂电池电芯及电池系统，产品主要面向 AI 数据中心 UPS 备电、通信基站、工商业储能、工业车辆动力场景", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1791423243, "break_limit_up_times": 3}, {"code": "603863", "name": "松炀资源", "price": 13.62, "change_pct": 10.02, "reason": "公司主要从事环保再生纸的研产销，正在海南推进视频即开彩票业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1791423425, "break_limit_up_times": 0}, {"code": "600026", "name": "中远海能", "price": 22.62, "change_pct": 10.02, "reason": "全球船型最齐全的油轮船东，油轮船队规模全球排名第一", "plates": ["航运"], "limit_up_days": 1, "turnover_ratio": 1.01, "first_limit_up": 1791423088, "break_limit_up_times": 0}, {"code": "600310", "name": "广西能源", "price": 4.97, "change_pct": 9.96, "reason": "公司总装机容量超240万千瓦，其中火电装机容量70万千瓦，其余为清洁能源（水电、风电、光伏），装机容量占比超70%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.65, "first_limit_up": 1791425850, "break_limit_up_times": 0}, {"code": "300530", "name": "领湃科技", "price": 24.08, "change_pct": 19.98, "reason": "1、公司已经完成了NCM811电池化学体系研发，固态电解质及固态电池、干法电极及其制备技术的基础试验，相关专利正在申请或已获得授权；\n2、公司产品类别覆盖电芯、模组、系统集成，量产的产品是磷酸铁锂135Ah产品", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.31, "first_limit_up": 1791428415, "break_limit_up_times": 1}, {"code": "001300", "name": "三柏硕", "price": 13.51, "change_pct": 10.02, "reason": "公司主营休闲运动和健身器材，拥有蹦床等31个系列千余款产品，为迪卡侬等国际品牌代工", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1791423930, "break_limit_up_times": 0}, {"code": "002490", "name": "山东墨龙", "price": 7.6, "change_pct": 9.99, "reason": "公司产品主要有石油钻采机械装备、石油天然气输送装备、油气开采装备等，中海油是公司油田类产品国内销售市场中主要客户之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 12.5, "first_limit_up": 1791440850, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 19.56, "change_pct": 10.01, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 3.99, "first_limit_up": 1791423645, "break_limit_up_times": 0}, {"code": "002630", "name": "*ST华西", "price": 1.57, "change_pct": 9.79, "reason": "科大智能与华西能源签订1.3亿美元设备采购框架合同，涉及伊拉克重建项目", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1791427794, "break_limit_up_times": 4}, {"code": "600722", "name": "金牛化工", "price": 16.19, "change_pct": 9.99, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 12.12, "first_limit_up": 1791423989, "break_limit_up_times": 1}, {"code": "000869", "name": "张  裕Ａ", "price": 18.76, "change_pct": 10.03, "reason": "公司主营为葡萄酒、白兰地、香槟及保健酒的生产和销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.69, "first_limit_up": 1791427380, "break_limit_up_times": 0}, {"code": "600617", "name": "国新能源", "price": 3.74, "change_pct": 10.0, "reason": "山西省内规模最大的天然气管网运营企业", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1791423097, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 11.39, "change_pct": 10.05, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组"], "limit_up_days": 8, "turnover_ratio": 0.54, "first_limit_up": 1791422700, "break_limit_up_times": 0}, {"code": "603788", "name": "宁波高发", "price": 15, "change_pct": 9.97, "reason": "国内操纵器龙头，主要产品包括汽车变速操纵器及软轴、电子油门踏板、汽车拉索、电磁风扇离合器、汽车CAN总线控制系统及组合仪表五大类", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 4.91, "first_limit_up": 1791435872, "break_limit_up_times": 4}, {"code": "603073", "name": "彩蝶实业", "price": 22.97, "change_pct": 10.01, "reason": "公司专注于涤纶面料、无缝成衣和涤纶长丝类，产品外销占比超5成", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 18.63, "first_limit_up": 1791424741, "break_limit_up_times": 3}, {"code": "001336", "name": "楚环科技", "price": 20.65, "change_pct": 10.02, "reason": "公司拟与礼瀚投资等签署合伙协议，共同投资“瀚智科”，后者投资范围包括但不限于半导体、新能源、航空航天、新材料等行业优质标的股权和/或合伙份额", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 9.52, "first_limit_up": 1791424836, "break_limit_up_times": 0}, {"code": "688196", "name": "卓越新能", "price": 36.12, "change_pct": 20.0, "reason": "公司是国内生物柴油龙头，以废油脂为原料，国内酯基生物柴油年产能50万吨，另有10万吨HVO/SAF产能已投产", "plates": ["生物柴油/生物航煤"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1791428445, "break_limit_up_times": 0}, {"code": "605378", "name": "野马电池", "price": 17.27, "change_pct": 10.0, "reason": "国内领先的锌锰电池制造商和出口商；公司扣式一次锂电池产线已调试完成并投入生产，正布局搭建新产线，实现产品更新迭代", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.17, "first_limit_up": 1791423674, "break_limit_up_times": 6}, {"code": "002242", "name": "九阳股份", "price": 13.75, "change_pct": 10.0, "reason": "豆浆机龙头；公司表示与华为不存在市场传闻所称的战略合作关系", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 1.44, "first_limit_up": 1791422700, "break_limit_up_times": 0}, {"code": "002951", "name": "金时科技", "price": 17.17, "change_pct": 9.99, "reason": "1、公司通过智芯一号股权基金（持股99%）间接投资了苏州易缆微半导体技术有限公司；易缆微半导体是一家光纤通信产品研发生产商，致力于光纤通信系统、光网络系统、光电传感系统、物联网系统技术研究和试验发展及进出口业务；\n2、公司主营储能系统设备、混合储能系列、超级电容炭及储能消防装置，开发新型号产品(如3000F低内阻超级电容器)保持技术领先", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 1.52, "first_limit_up": 1791423066, "break_limit_up_times": 1}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};