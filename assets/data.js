const UPDATE_TIME = "2026-09-22 08:19";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.43,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续127天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": 0.32,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续120天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.02,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续297天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI应用",
    "rise": 1.47,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续55天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": -1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续37天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "芯片概念",
    "rise": 0.16,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "CRO概念",
    "rise": 1.13,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "存储芯片",
    "rise": -0.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续250天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "粮食概念",
    "rise": -0.55,
    "rate": 0,
    "tag": "",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "算力租赁",
    "rise": 1.19,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续161天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": -0.82,
    "rate": 0,
    "tag": "",
    "hotTag": "连续126天上榜",
    "rankChg": 0,
    "etfName": "TMT50ETF",
    "code": "886084"
  },
  {
    "name": "拼多多概念",
    "rise": 2.42,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885910"
  },
  {
    "name": "人工智能",
    "rise": 0.99,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 2,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "培育钻石",
    "rise": -1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "AI视频",
    "rise": 2.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": -2,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "数字货币",
    "rise": 0.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "信息安全ETF",
    "code": "885866"
  },
  {
    "name": "新股与次新股",
    "rise": -0.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885598"
  },
  {
    "name": "商业航天",
    "rise": -0.24,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续226天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "液冷服务器",
    "rise": -0.19,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "猪肉",
    "rise": -0.66,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "跨国药企AI合作密集落地，AI制药产业催化不断",
    "desc": "",
    "heat": 306647,
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
        "name": "华仁药业",
        "code": "300110",
        "chg": 20.06079
      }
    ]
  },
  {
    "title": "AI智能体应用下载量飙升！Meta市值一夜暴涨近1.3万亿元",
    "desc": "",
    "heat": 281646,
    "direction": "AI智能体",
    "themes": [
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "光云科技",
        "code": "688365",
        "chg": 13.915416
      }
    ]
  },
  {
    "title": "广电总局：前8个月上线微短剧中AI剧超九成",
    "desc": "",
    "heat": 277066,
    "direction": "短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "短剧游戏"
    ],
    "stocks": [
      {
        "name": "南威软件",
        "code": "603636",
        "chg": 10.027473
      }
    ]
  },
  {
    "title": "美股三大指数21日集体收涨 半导体板块大涨",
    "desc": "",
    "heat": 165809,
    "direction": "CPU",
    "themes": [
      "CPU设计与研发",
      "先进制造封测",
      "CPU",
      "芯片概念",
      "股权相关"
    ],
    "stocks": [
      {
        "name": "凯华材料",
        "code": "920526",
        "chg": 29.985082
      }
    ]
  },
  {
    "title": "机构：2026上半年全球AI眼镜出货量同比大增263%",
    "desc": "",
    "heat": 155614,
    "direction": "AI眼镜",
    "themes": [
      "AI眼镜"
    ],
    "stocks": [
      {
        "name": "视涯科技-UW",
        "code": "688781",
        "chg": 20.00462
      }
    ]
  },
  {
    "title": "2026年中国汽车芯片行业发展现状及趋势",
    "desc": "",
    "heat": 109363,
    "direction": "汽车芯片",
    "themes": [
      "智能座舱芯片",
      "智驾芯片",
      "车载传感芯片",
      "车规功率芯片",
      "车规存储芯片"
    ],
    "stocks": [
      {
        "name": "瑞芯微",
        "code": "603893",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "AI PC开启换机新周期，产业链迎来价值重估",
    "desc": "",
    "heat": 89595,
    "direction": "AI PC",
    "themes": [
      "AI PC"
    ],
    "stocks": [
      {
        "name": "中石科技",
        "code": "300684",
        "chg": 12.017641
      }
    ]
  },
  {
    "title": "外交部回应中美元首是否会讨论中方限制对日稀土出口",
    "desc": "",
    "heat": 34289,
    "direction": "稀土出口",
    "themes": [
      "稀土出口",
      "稀土永磁"
    ],
    "stocks": [
      {
        "name": "大地熊",
        "code": "688077",
        "chg": 11.355311
      }
    ]
  },
  {
    "title": "外交部：中美两国元首半年内互访具有历史性里程碑意义",
    "desc": "",
    "heat": 10000,
    "direction": "贸易降税",
    "themes": [
      "贸易降税"
    ],
    "stocks": [
      {
        "name": "华瓷股份",
        "code": "001216",
        "chg": 10.016625
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "CPU概念",
    "change": "+4.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+3.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+3.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ChatGPT",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+2.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+2.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "拼多多概念股",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+2.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "尼帕病毒",
    "change": "+2.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+2.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "NFT",
    "change": "+2.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+2.25%",
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
    "hot_rank_chg": 3,
    "stock_cnt": 5802,
    "price": "9.08",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "22868070000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.42
      },
      {
        "name": "工业大麻",
        "change_pct": -0.08
      },
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "保健品",
        "change_pct": 0.45
      },
      {
        "name": "民营医院",
        "change_pct": -0.44
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "化学原料药",
        "change_pct": 0.33
      },
      {
        "name": "流感",
        "change_pct": 1.05
      },
      {
        "name": "振兴东北",
        "change_pct": -0.01
      },
      {
        "name": "食品",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5802,
    "price": "6.42",
    "change": "9.93",
    "market_id": "17",
    "circulate_market_value": "6708180000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "资产重组",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.37
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.31
      },
      {
        "name": "复牌股",
        "change_pct": 0.25
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 3.06
      },
      {
        "name": "国企改革",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 24,
    "hot_rank_chg": 12,
    "stock_cnt": 5802,
    "price": "3.51",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "8222835300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "房产经纪",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.42
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "人工智能",
        "change_pct": 1.3
      },
      {
        "name": "VR&AR",
        "change_pct": 1.02
      },
      {
        "name": "京津冀",
        "change_pct": 0.38
      },
      {
        "name": "装修装饰",
        "change_pct": 0.1
      },
      {
        "name": "住房租赁",
        "change_pct": 1.76
      },
      {
        "name": "破净股",
        "change_pct": -0.4
      },
      {
        "name": "数字经济",
        "change_pct": 1.28
      },
      {
        "name": "房产经纪",
        "change_pct": 3.32
      },
      {
        "name": "物业管理",
        "change_pct": 0.52
      },
      {
        "name": "华为产业链",
        "change_pct": 0.76
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.43
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 27,
    "hot_rank_chg": 64,
    "stock_cnt": 5802,
    "price": "12.93",
    "change": "3.44",
    "market_id": "17",
    "circulate_market_value": "23133558000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.04
      },
      {
        "name": "纯碱",
        "change_pct": -1.09
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "土壤修复",
        "change_pct": -0.36
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.23
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 2.42
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 2.03
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 30,
    "hot_rank_chg": -10,
    "stock_cnt": 5802,
    "price": "6.00",
    "change": "-1.15",
    "market_id": "33",
    "circulate_market_value": "212202800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.35
      },
      {
        "name": "手机产业链",
        "change_pct": 0.26
      },
      {
        "name": "超高清视频",
        "change_pct": 1.1
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.2
      },
      {
        "name": "电竞",
        "change_pct": 1.19
      },
      {
        "name": "半导体",
        "change_pct": 0.12
      },
      {
        "name": "人工智能",
        "change_pct": 1.3
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.51
      },
      {
        "name": "VR&AR",
        "change_pct": 1.02
      },
      {
        "name": "OLED",
        "change_pct": -0.27
      },
      {
        "name": "京津冀",
        "change_pct": 0.38
      },
      {
        "name": "物联网",
        "change_pct": 1.02
      },
      {
        "name": "指纹识别",
        "change_pct": 0.63
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.01
      },
      {
        "name": "白马股",
        "change_pct": 0.22
      },
      {
        "name": "智能制造",
        "change_pct": 0.34
      },
      {
        "name": "小米概念股",
        "change_pct": 0.61
      },
      {
        "name": "国产芯片",
        "change_pct": 0.4
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.46
      },
      {
        "name": "全息概念",
        "change_pct": 1.27
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.04
      },
      {
        "name": "MicroLED",
        "change_pct": -0.43
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.87
      },
      {
        "name": "智能手表",
        "change_pct": 0.96
      },
      {
        "name": "MiniLED",
        "change_pct": -0.12
      },
      {
        "name": "传感器",
        "change_pct": 0.43
      },
      {
        "name": "大硅片",
        "change_pct": -0.44
      },
      {
        "name": "AI PC",
        "change_pct": 1.09
      },
      {
        "name": "华为产业链",
        "change_pct": 0.76
      },
      {
        "name": "回购",
        "change_pct": 0.24
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.15
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 33,
    "hot_rank_chg": -21,
    "stock_cnt": 5802,
    "price": "11.90",
    "change": "-6.37",
    "market_id": "33",
    "circulate_market_value": "10550442300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -1.12
      },
      {
        "name": "手机产业链",
        "change_pct": 0.26
      },
      {
        "name": "超高清视频",
        "change_pct": 1.1
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "OLED",
        "change_pct": -0.27
      },
      {
        "name": "包装印刷",
        "change_pct": -0.08
      },
      {
        "name": "光伏",
        "change_pct": -0.35
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.09
      },
      {
        "name": "小米概念股",
        "change_pct": 0.61
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.46
      },
      {
        "name": "可降解塑料",
        "change_pct": -0.09
      },
      {
        "name": "华为产业链",
        "change_pct": 0.76
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "600448",
    "name": "华纺股份",
    "hot_rank": 34,
    "hot_rank_chg": -11,
    "stock_cnt": 5802,
    "price": "3.58",
    "change": "-7.97",
    "market_id": "17",
    "circulate_market_value": "2254754400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.38
      },
      {
        "name": "印染",
        "change_pct": -1.05
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.1
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.65
      },
      {
        "name": "抗菌面料",
        "change_pct": -0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.1
      },
      {
        "name": "C2M",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 38,
    "hot_rank_chg": 140,
    "stock_cnt": 5802,
    "price": "7.43",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "7674713000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.5
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.03
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.14
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.09
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.31
      }
    ]
  },
  {
    "code": "600630",
    "name": "龙头股份",
    "hot_rank": 42,
    "hot_rank_chg": -10,
    "stock_cnt": 5802,
    "price": "9.48",
    "change": "3.95",
    "market_id": "17",
    "circulate_market_value": "4027687900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.42
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.31
      },
      {
        "name": "一带一路",
        "change_pct": -0.16
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.43
      },
      {
        "name": "纺织服装",
        "change_pct": -0.38
      },
      {
        "name": "上海自由贸易港",
        "change_pct": -0.84
      },
      {
        "name": "进口博览会",
        "change_pct": -0.54
      },
      {
        "name": "自由贸易港",
        "change_pct": -0.99
      },
      {
        "name": "物业管理",
        "change_pct": 0.52
      },
      {
        "name": "国企改革",
        "change_pct": -0.22
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.1
      },
      {
        "name": "自贸区",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 46,
    "hot_rank_chg": 10,
    "stock_cnt": 5802,
    "price": "8.60",
    "change": "1.18",
    "market_id": "33",
    "circulate_market_value": "16469795000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.23
      },
      {
        "name": "林业",
        "change_pct": 0.11
      },
      {
        "name": "碳中和",
        "change_pct": -0.09
      },
      {
        "name": "自贸区",
        "change_pct": -0.4
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 47,
    "hot_rank_chg": -34,
    "stock_cnt": 5802,
    "price": "3.81",
    "change": "4.38",
    "market_id": "33",
    "circulate_market_value": "37014581000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": -0.3
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.26
      },
      {
        "name": "股权转让",
        "change_pct": 0.28
      },
      {
        "name": "房地产",
        "change_pct": -0.01
      },
      {
        "name": "养老产业",
        "change_pct": 0.59
      },
      {
        "name": "冷链",
        "change_pct": -0.55
      },
      {
        "name": "住房租赁",
        "change_pct": 1.76
      },
      {
        "name": "破净股",
        "change_pct": -0.4
      },
      {
        "name": "冰雪产业",
        "change_pct": -0.85
      },
      {
        "name": "物业管理",
        "change_pct": 0.52
      },
      {
        "name": "旧改",
        "change_pct": -0.27
      },
      {
        "name": "REITs",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 49,
    "hot_rank_chg": -1,
    "stock_cnt": 5802,
    "price": "5.60",
    "change": "-3.62",
    "market_id": "33",
    "circulate_market_value": "4284788100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "股权转让",
        "change_pct": 0.28
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.43
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "医药商业",
        "change_pct": -0.43
      },
      {
        "name": "保健品",
        "change_pct": 0.45
      },
      {
        "name": "民营医院",
        "change_pct": -0.44
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.22
      },
      {
        "name": "口腔",
        "change_pct": 0.25
      },
      {
        "name": "医美",
        "change_pct": -0.09
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "002589",
    "name": "瑞康医药",
    "hot_rank": 51,
    "hot_rank_chg": 3,
    "stock_cnt": 5802,
    "price": "3.59",
    "change": "-0.28",
    "market_id": "33",
    "circulate_market_value": "4902473700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "体外诊断",
        "change_pct": 1.16
      },
      {
        "name": "农业种植",
        "change_pct": -0.13
      },
      {
        "name": "人工智能",
        "change_pct": 1.3
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.51
      },
      {
        "name": "医药商业",
        "change_pct": -0.43
      },
      {
        "name": "养老产业",
        "change_pct": 0.59
      },
      {
        "name": "冷链",
        "change_pct": -0.55
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "大农业",
        "change_pct": -0.18
      },
      {
        "name": "口腔",
        "change_pct": 0.25
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.59
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.1
      },
      {
        "name": "华为产业链",
        "change_pct": 0.76
      },
      {
        "name": "医疗耗材供应链SPD",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "000504",
    "name": "南华生物",
    "hot_rank": 59,
    "hot_rank_chg": -41,
    "stock_cnt": 5802,
    "price": "12.11",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "3985672200.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "细胞医疗",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.37
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.28
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.01
      },
      {
        "name": "污水处理",
        "change_pct": 0.23
      },
      {
        "name": "智慧城市",
        "change_pct": 0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.09
      },
      {
        "name": "环保",
        "change_pct": 0.03
      },
      {
        "name": "动力电池回收",
        "change_pct": -0.13
      },
      {
        "name": "干细胞",
        "change_pct": 1.32
      },
      {
        "name": "国企改革",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 60,
    "hot_rank_chg": 11,
    "stock_cnt": 5802,
    "price": "12.16",
    "change": "-2.95",
    "market_id": "17",
    "circulate_market_value": "21099800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.07
      },
      {
        "name": "核电",
        "change_pct": -0.57
      },
      {
        "name": "锂电池",
        "change_pct": -0.21
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.03
      },
      {
        "name": "PCB板",
        "change_pct": 0.44
      },
      {
        "name": "中科院系",
        "change_pct": 0.86
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.09
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.24
      },
      {
        "name": "固态电池",
        "change_pct": -0.3
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 68,
    "hot_rank_chg": 5,
    "stock_cnt": 5802,
    "price": "9.43",
    "change": "1.95",
    "market_id": "17",
    "circulate_market_value": "4519987400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "医药商业",
        "change_pct": -0.43
      },
      {
        "name": "医药",
        "change_pct": 0.5
      },
      {
        "name": "流感",
        "change_pct": 1.05
      }
    ]
  },
  {
    "code": "002453",
    "name": "华软科技",
    "hot_rank": 69,
    "hot_rank_chg": -38,
    "stock_cnt": 5802,
    "price": "5.31",
    "change": "-9.54",
    "market_id": "33",
    "circulate_market_value": "3414868800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "苹果产业链",
        "change_pct": 0.2
      },
      {
        "name": "保健品",
        "change_pct": 0.45
      },
      {
        "name": "食品",
        "change_pct": 0.33
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.14
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -1.32
      },
      {
        "name": "横琴新区",
        "change_pct": 0.31
      },
      {
        "name": "供应链金融",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 71,
    "hot_rank_chg": 41,
    "stock_cnt": 5802,
    "price": "8.11",
    "change": "2.40",
    "market_id": "33",
    "circulate_market_value": "13194919500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.42
      },
      {
        "name": "电竞",
        "change_pct": 1.19
      },
      {
        "name": "手游",
        "change_pct": 1.72
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "人工智能",
        "change_pct": 1.3
      },
      {
        "name": "游戏",
        "change_pct": 1.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.28
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.46
      },
      {
        "name": "快手概念股",
        "change_pct": 2.93
      },
      {
        "name": "元宇宙",
        "change_pct": 1.53
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.63
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.23
      },
      {
        "name": "web3.0",
        "change_pct": 2.02
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.08
      },
      {
        "name": "数据要素",
        "change_pct": 1.38
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.14
      },
      {
        "name": "AI营销",
        "change_pct": 3.55
      },
      {
        "name": "ChatGPT",
        "change_pct": 2.59
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.92
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 1.43
      },
      {
        "name": "人形机器人",
        "change_pct": -0.11
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.11
      },
      {
        "name": "多模态",
        "change_pct": 1.9
      },
      {
        "name": "AI视频",
        "change_pct": 2.84
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.72
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.06
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 77,
    "hot_rank_chg": 7,
    "stock_cnt": 5802,
    "price": "5.23",
    "change": "1.36",
    "market_id": "33",
    "circulate_market_value": "13872839000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "装修装饰",
        "change_pct": 0.1
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.46
      },
      {
        "name": "航天",
        "change_pct": -0.61
      },
      {
        "name": "旧改",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 90,
    "hot_rank_chg": 14,
    "stock_cnt": 5802,
    "price": "2.88",
    "change": "-2.37",
    "market_id": "33",
    "circulate_market_value": "27398466000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.12
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.51
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.01
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.09
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.01
      },
      {
        "name": "低价股",
        "change_pct": -0.78
      },
      {
        "name": "减速器",
        "change_pct": 0.03
      },
      {
        "name": "华为汽车",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "002285",
    "name": "世联行",
    "hot_rank": 96,
    "hot_rank_chg": -61,
    "stock_cnt": 5802,
    "price": "3.20",
    "change": "0.63",
    "market_id": "33",
    "circulate_market_value": "6332830000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.55
      },
      {
        "name": "深圳本地股",
        "change_pct": 0.26
      },
      {
        "name": "共享经济",
        "change_pct": 0.85
      },
      {
        "name": "强势人气股",
        "change_pct": 1.94
      },
      {
        "name": "养老产业",
        "change_pct": 0.59
      },
      {
        "name": "住房租赁",
        "change_pct": 1.76
      },
      {
        "name": "房产经纪",
        "change_pct": 3.32
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.61
      },
      {
        "name": "物业管理",
        "change_pct": 0.52
      },
      {
        "name": "旧改",
        "change_pct": -0.27
      },
      {
        "name": "横琴新区",
        "change_pct": 0.31
      },
      {
        "name": "氮化镓",
        "change_pct": -0.56
      },
      {
        "name": "REITs",
        "change_pct": 0.18
      },
      {
        "name": "华为产业链",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 97,
    "hot_rank_chg": -38,
    "stock_cnt": 5802,
    "price": "9.55",
    "change": "-3.05",
    "market_id": "17",
    "circulate_market_value": "34262246000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": -0.97
      },
      {
        "name": "OLED",
        "change_pct": -0.27
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.46
      },
      {
        "name": "国企改革",
        "change_pct": -0.22
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.29
      },
      {
        "name": "陕西国企改革",
        "change_pct": -0.82
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "601091", "name": "沈鼓集团", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "37.98", "change": "0.69", "market_id": "17", "circulate_market_value": "8019977700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5802, "price": "9.08", "change": "10.06", "market_id": "17", "circulate_market_value": "22868070000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.42}, {"name": "工业大麻", "change_pct": -0.08}, {"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "保健品", "change_pct": 0.45}, {"name": "民营医院", "change_pct": -0.44}, {"name": "医药", "change_pct": 0.5}, {"name": "化学原料药", "change_pct": 0.33}, {"name": "流感", "change_pct": 1.05}, {"name": "振兴东北", "change_pct": -0.01}, {"name": "食品", "change_pct": 0.33}]}, {"code": "000066", "name": "中国长城", "hot_rank": 3, "hot_rank_chg": 42, "stock_cnt": 5802, "price": "15.87", "change": "6.94", "market_id": "33", "circulate_market_value": "51190111000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5802, "price": "18.28", "change": "-1.46", "market_id": "33", "circulate_market_value": "60799765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5802, "price": "6.42", "change": "9.93", "market_id": "17", "circulate_market_value": "6708180000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "资产重组", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.37}, {"name": "上海国企改革", "change_pct": 0.31}, {"name": "复牌股", "change_pct": 0.25}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 3.06}, {"name": "国企改革", "change_pct": -0.22}]}, {"code": "600127", "name": "金健米业", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "16.47", "change": "4.57", "market_id": "17", "circulate_market_value": "10570169600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": 15, "stock_cnt": 5802, "price": "73.00", "change": "1.74", "market_id": "17", "circulate_market_value": "179116180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 8, "hot_rank_chg": 26, "stock_cnt": 5802, "price": "63.52", "change": "3.83", "market_id": "33", "circulate_market_value": "96388565000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "18.16", "change": "2.77", "market_id": "17", "circulate_market_value": "12094560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 10, "hot_rank_chg": 9, "stock_cnt": 5802, "price": "14.47", "change": "10.04", "market_id": "17", "circulate_market_value": "5564404300.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "医药研发服务"}, {"code": "002436", "name": "兴森科技", "hot_rank": 11, "hot_rank_chg": 53, "stock_cnt": 5802, "price": "44.23", "change": "-0.23", "market_id": "33", "circulate_market_value": "67137980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 12, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "26.47", "change": "10.02", "market_id": "33", "circulate_market_value": "6533754200.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "氧化锆粉体"}, {"code": "603230", "name": "内蒙新华", "hot_rank": 13, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "16.31", "change": "9.98", "market_id": "17", "circulate_market_value": "5765960100.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "出版发行"}, {"code": "002384", "name": "东山精密", "hot_rank": 14, "hot_rank_chg": 73, "stock_cnt": 5802, "price": "198.12", "change": "1.59", "market_id": "33", "circulate_market_value": "274658060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "45.47", "change": "-0.87", "market_id": "17", "circulate_market_value": "180588060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 16, "hot_rank_chg": 9, "stock_cnt": 5802, "price": "24.03", "change": "-2.28", "market_id": "33", "circulate_market_value": "28270545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 17, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "19.87", "change": "-2.12", "market_id": "17", "circulate_market_value": "41558943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000756", "name": "新华制药", "hot_rank": 18, "hot_rank_chg": -4, "stock_cnt": 5802, "price": "16.14", "change": "10.02", "market_id": "33", "circulate_market_value": "8051808800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "药品注册"}, {"code": "603256", "name": "宏和科技", "hot_rank": 19, "hot_rank_chg": 134, "stock_cnt": 5802, "price": "159.22", "change": "6.92", "market_id": "17", "circulate_market_value": "144028250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5802, "price": "57.75", "change": "-2.53", "market_id": "33", "circulate_market_value": "66267546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 21, "hot_rank_chg": -13, "stock_cnt": 5802, "price": "22.03", "change": "-3.97", "market_id": "17", "circulate_market_value": "48892341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "72.24", "change": "0.03", "market_id": "17", "circulate_market_value": "129267309000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301686", "name": "中塑股份", "hot_rank": 23, "hot_rank_chg": 418, "stock_cnt": 5802, "price": "433.00", "change": "683.28", "market_id": "33", "circulate_market_value": "3781413700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 24, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "3.51", "change": "10.03", "market_id": "33", "circulate_market_value": "8222835300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "房产经纪", "xgb_concepts": [{"name": "新零售", "change_pct": -0.42}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "人工智能", "change_pct": 1.3}, {"name": "VR&AR", "change_pct": 1.02}, {"name": "京津冀", "change_pct": 0.38}, {"name": "装修装饰", "change_pct": 0.1}, {"name": "住房租赁", "change_pct": 1.76}, {"name": "破净股", "change_pct": -0.4}, {"name": "数字经济", "change_pct": 1.28}, {"name": "房产经纪", "change_pct": 3.32}, {"name": "物业管理", "change_pct": 0.52}, {"name": "华为产业链", "change_pct": 0.76}, {"name": "AI大模型/智能体", "change_pct": 1.43}]}, {"code": "601811", "name": "新华文轩", "hot_rank": 25, "hot_rank_chg": -19, "stock_cnt": 5802, "price": "16.82", "change": "10.01", "market_id": "17", "circulate_market_value": "13319823600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购民族出版社"}, {"code": "600522", "name": "中天科技", "hot_rank": 26, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "36.88", "change": "-0.19", "market_id": "17", "circulate_market_value": "125869583000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 27, "hot_rank_chg": 64, "stock_cnt": 5802, "price": "12.93", "change": "3.44", "market_id": "17", "circulate_market_value": "23133558000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.04}, {"name": "纯碱", "change_pct": -1.09}, {"name": "食品", "change_pct": 0.33}, {"name": "土壤修复", "change_pct": -0.36}, {"name": "东数西算/算力", "change_pct": 1.23}, {"name": "OpenClaw概念", "change_pct": 2.42}, {"name": "DeepSeek概念股", "change_pct": 2.03}]}, {"code": "600206", "name": "有研新材", "hot_rank": 28, "hot_rank_chg": 5, "stock_cnt": 5802, "price": "49.95", "change": "-2.67", "market_id": "17", "circulate_market_value": "42285339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 29, "hot_rank_chg": -14, "stock_cnt": 5802, "price": "16.48", "change": "-4.13", "market_id": "17", "circulate_market_value": "18070232000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 30, "hot_rank_chg": -10, "stock_cnt": 5802, "price": "6.00", "change": "-1.15", "market_id": "33", "circulate_market_value": "212202800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.35}, {"name": "手机产业链", "change_pct": 0.26}, {"name": "超高清视频", "change_pct": 1.1}, {"name": "苹果产业链", "change_pct": 0.2}, {"name": "电竞", "change_pct": 1.19}, {"name": "半导体", "change_pct": 0.12}, {"name": "人工智能", "change_pct": 1.3}, {"name": "互联网医疗", "change_pct": 0.51}, {"name": "VR&AR", "change_pct": 1.02}, {"name": "OLED", "change_pct": -0.27}, {"name": "京津冀", "change_pct": 0.38}, {"name": "物联网", "change_pct": 1.02}, {"name": "指纹识别", "change_pct": 0.63}, {"name": "汽车零部件", "change_pct": 0.01}, {"name": "白马股", "change_pct": 0.22}, {"name": "智能制造", "change_pct": 0.34}, {"name": "小米概念股", "change_pct": 0.61}, {"name": "国产芯片", "change_pct": 0.4}, {"name": "液晶面板/LCD", "change_pct": -0.46}, {"name": "全息概念", "change_pct": 1.27}, {"name": "理想汽车概念股", "change_pct": 0.04}, {"name": "MicroLED", "change_pct": -0.43}, {"name": "钙钛矿电池", "change_pct": -0.87}, {"name": "智能手表", "change_pct": 0.96}, {"name": "MiniLED", "change_pct": -0.12}, {"name": "传感器", "change_pct": 0.43}, {"name": "大硅片", "change_pct": -0.44}, {"name": "AI PC", "change_pct": 1.09}, {"name": "华为产业链", "change_pct": 0.76}, {"name": "回购", "change_pct": 0.24}, {"name": "光电共封装CPO", "change_pct": -1.15}, {"name": "智能眼镜/MR头显", "change_pct": 0.92}, {"name": "玻璃基板封装", "change_pct": -0.29}]}, {"code": "600641", "name": "先导基电", "hot_rank": 31, "hot_rank_chg": 41, "stock_cnt": 5802, "price": "43.74", "change": "10.01", "market_id": "17", "circulate_market_value": "40705753000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体材料"}, {"code": "000823", "name": "超声电子", "hot_rank": 32, "hot_rank_chg": -22, "stock_cnt": 5802, "price": "25.22", "change": "0.08", "market_id": "33", "circulate_market_value": "15004189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 33, "hot_rank_chg": -21, "stock_cnt": 5802, "price": "11.90", "change": "-6.37", "market_id": "33", "circulate_market_value": "10550442300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -1.12}, {"name": "手机产业链", "change_pct": 0.26}, {"name": "超高清视频", "change_pct": 1.1}, {"name": "锂电池", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "OLED", "change_pct": -0.27}, {"name": "包装印刷", "change_pct": -0.08}, {"name": "光伏", "change_pct": -0.35}, {"name": "新能源汽车", "change_pct": -0.09}, {"name": "小米概念股", "change_pct": 0.61}, {"name": "液晶面板/LCD", "change_pct": -0.46}, {"name": "可降解塑料", "change_pct": -0.09}, {"name": "华为产业链", "change_pct": 0.76}, {"name": "PET复合铜箔", "change_pct": -0.21}]}, {"code": "600448", "name": "华纺股份", "hot_rank": 34, "hot_rank_chg": -11, "stock_cnt": 5802, "price": "3.58", "change": "-7.97", "market_id": "17", "circulate_market_value": "2254754400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.38}, {"name": "印染", "change_pct": -1.05}, {"name": "山东国企改革", "change_pct": -0.1}, {"name": "外贸受益概念", "change_pct": 0.65}, {"name": "抗菌面料", "change_pct": -0.85}, {"name": "国企改革", "change_pct": -0.22}, {"name": "新冠病毒防治", "change_pct": 0.1}, {"name": "C2M", "change_pct": -0.13}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 35, "hot_rank_chg": 219, "stock_cnt": 5802, "price": "14.05", "change": "6.76", "market_id": "33", "circulate_market_value": "48864920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 36, "hot_rank_chg": -10, "stock_cnt": 5802, "price": "20.91", "change": "2.35", "market_id": "33", "circulate_market_value": "9575764900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 37, "hot_rank_chg": -28, "stock_cnt": 5802, "price": "62.50", "change": "-5.65", "market_id": "33", "circulate_market_value": "104882724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 38, "hot_rank_chg": 140, "stock_cnt": 5802, "price": "7.43", "change": "10.07", "market_id": "33", "circulate_market_value": "7674713000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.5}, {"name": "锂电池", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "铜箔/覆铜板", "change_pct": -0.03}, {"name": "粤港澳大湾区", "change_pct": -0.14}, {"name": "新能源汽车", "change_pct": -0.09}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.31}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 39, "hot_rank_chg": 104, "stock_cnt": 5802, "price": "221.83", "change": "5.58", "market_id": "17", "circulate_market_value": "253943110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 40, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "94.74", "change": "1.34", "market_id": "33", "circulate_market_value": "61865931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 41, "hot_rank_chg": 22, "stock_cnt": 5802, "price": "17.69", "change": "6.82", "market_id": "17", "circulate_market_value": "7862222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600630", "name": "龙头股份", "hot_rank": 42, "hot_rank_chg": -10, "stock_cnt": 5802, "price": "9.48", "change": "3.95", "market_id": "17", "circulate_market_value": "4027687900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.42}, {"name": "上海国企改革", "change_pct": 0.31}, {"name": "一带一路", "change_pct": -0.16}, {"name": "优化生育（三孩）", "change_pct": 0.43}, {"name": "纺织服装", "change_pct": -0.38}, {"name": "上海自由贸易港", "change_pct": -0.84}, {"name": "进口博览会", "change_pct": -0.54}, {"name": "自由贸易港", "change_pct": -0.99}, {"name": "物业管理", "change_pct": 0.52}, {"name": "国企改革", "change_pct": -0.22}, {"name": "新冠病毒防治", "change_pct": 0.1}, {"name": "自贸区", "change_pct": -0.4}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 43, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "927.72", "change": "-1.41", "market_id": "33", "circulate_market_value": "1029710760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 44, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "45.41", "change": "-2.80", "market_id": "17", "circulate_market_value": "66389184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601579", "name": "会稽山", "hot_rank": 45, "hot_rank_chg": -16, "stock_cnt": 5802, "price": "37.46", "change": "3.71", "market_id": "17", "circulate_market_value": "17960699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 46, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "8.60", "change": "1.18", "market_id": "33", "circulate_market_value": "16469795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.23}, {"name": "林业", "change_pct": 0.11}, {"name": "碳中和", "change_pct": -0.09}, {"name": "自贸区", "change_pct": -0.4}]}, {"code": "000002", "name": "万科A", "hot_rank": 47, "hot_rank_chg": -34, "stock_cnt": 5802, "price": "3.81", "change": "4.38", "market_id": "33", "circulate_market_value": "37014581000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": -0.3}, {"name": "深圳本地股", "change_pct": 0.26}, {"name": "股权转让", "change_pct": 0.28}, {"name": "房地产", "change_pct": -0.01}, {"name": "养老产业", "change_pct": 0.59}, {"name": "冷链", "change_pct": -0.55}, {"name": "住房租赁", "change_pct": 1.76}, {"name": "破净股", "change_pct": -0.4}, {"name": "冰雪产业", "change_pct": -0.85}, {"name": "物业管理", "change_pct": 0.52}, {"name": "旧改", "change_pct": -0.27}, {"name": "REITs", "change_pct": 0.18}]}, {"code": "000070", "name": "特发信息", "hot_rank": 48, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "18.63", "change": "-1.84", "market_id": "33", "circulate_market_value": "15960638000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 49, "hot_rank_chg": -1, "stock_cnt": 5802, "price": "5.60", "change": "-3.62", "market_id": "33", "circulate_market_value": "4284788100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "股权转让", "change_pct": 0.28}, {"name": "优化生育（三孩）", "change_pct": 0.43}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "医药商业", "change_pct": -0.43}, {"name": "保健品", "change_pct": 0.45}, {"name": "民营医院", "change_pct": -0.44}, {"name": "医药", "change_pct": 0.5}, {"name": "食品", "change_pct": 0.33}, {"name": "辅助生殖", "change_pct": -0.22}, {"name": "口腔", "change_pct": 0.25}, {"name": "医美", "change_pct": -0.09}, {"name": "新冠病毒防治", "change_pct": 0.1}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 50, "hot_rank_chg": 45, "stock_cnt": 5802, "price": "456.60", "change": "-0.52", "market_id": "17", "circulate_market_value": "185534070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002589", "name": "瑞康医药", "hot_rank": 51, "hot_rank_chg": 3, "stock_cnt": 5802, "price": "3.59", "change": "-0.28", "market_id": "33", "circulate_market_value": "4902473700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "体外诊断", "change_pct": 1.16}, {"name": "农业种植", "change_pct": -0.13}, {"name": "人工智能", "change_pct": 1.3}, {"name": "互联网医疗", "change_pct": 0.51}, {"name": "医药商业", "change_pct": -0.43}, {"name": "养老产业", "change_pct": 0.59}, {"name": "冷链", "change_pct": -0.55}, {"name": "医药", "change_pct": 0.5}, {"name": "大农业", "change_pct": -0.18}, {"name": "口腔", "change_pct": 0.25}, {"name": "医疗信息化", "change_pct": 1.59}, {"name": "新冠病毒防治", "change_pct": 0.1}, {"name": "华为产业链", "change_pct": 0.76}, {"name": "医疗耗材供应链SPD", "change_pct": 0.76}]}, {"code": "603316", "name": "诚邦股份", "hot_rank": 52, "hot_rank_chg": -13, "stock_cnt": 5802, "price": "18.22", "change": "-0.76", "market_id": "17", "circulate_market_value": "4814890100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 53, "hot_rank_chg": 13, "stock_cnt": 5802, "price": "65.96", "change": "10.01", "market_id": "33", "circulate_market_value": "5639746000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "“羊”字辈"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 54, "hot_rank_chg": -7, "stock_cnt": 5802, "price": "16.06", "change": "-2.19", "market_id": "17", "circulate_market_value": "20625514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 55, "hot_rank_chg": -15, "stock_cnt": 5802, "price": "17.68", "change": "2.14", "market_id": "33", "circulate_market_value": "8077112600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 56, "hot_rank_chg": 18, "stock_cnt": 5802, "price": "402.10", "change": "2.65", "market_id": "17", "circulate_market_value": "269695840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 57, "hot_rank_chg": -36, "stock_cnt": 5802, "price": "489.20", "change": "-1.14", "market_id": "17", "circulate_market_value": "14718913000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 58, "hot_rank_chg": -17, "stock_cnt": 5802, "price": "304.63", "change": "2.54", "market_id": "33", "circulate_market_value": "1297909000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000504", "name": "南华生物", "hot_rank": 59, "hot_rank_chg": -41, "stock_cnt": 5802, "price": "12.11", "change": "9.99", "market_id": "33", "circulate_market_value": "3985672200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "细胞医疗", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.37}, {"name": "锂电池", "change_pct": -0.21}, {"name": "ST摘帽", "change_pct": 0.28}, {"name": "湖南国企改革", "change_pct": -0.01}, {"name": "污水处理", "change_pct": 0.23}, {"name": "智慧城市", "change_pct": 0.9}, {"name": "新能源汽车", "change_pct": -0.09}, {"name": "环保", "change_pct": 0.03}, {"name": "动力电池回收", "change_pct": -0.13}, {"name": "干细胞", "change_pct": 1.32}, {"name": "国企改革", "change_pct": -0.22}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 60, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "12.16", "change": "-2.95", "market_id": "17", "circulate_market_value": "21099800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.07}, {"name": "核电", "change_pct": -0.57}, {"name": "锂电池", "change_pct": -0.21}, {"name": "铜箔/覆铜板", "change_pct": -0.03}, {"name": "PCB板", "change_pct": 0.44}, {"name": "中科院系", "change_pct": 0.86}, {"name": "新能源汽车", "change_pct": -0.09}, {"name": "宁德时代概念股", "change_pct": -0.24}, {"name": "固态电池", "change_pct": -0.3}, {"name": "PET复合铜箔", "change_pct": -0.21}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 61, "hot_rank_chg": -17, "stock_cnt": 5802, "price": "57.86", "change": "1.72", "market_id": "17", "circulate_market_value": "260545830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 62, "hot_rank_chg": -45, "stock_cnt": 5802, "price": "242.10", "change": "-2.38", "market_id": "33", "circulate_market_value": "209463700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 63, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "143.45", "change": "-1.93", "market_id": "17", "circulate_market_value": "345965370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 64, "hot_rank_chg": 4, "stock_cnt": 5802, "price": "18.88", "change": "-2.98", "market_id": "33", "circulate_market_value": "11015314300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 65, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "38.79", "change": "-4.65", "market_id": "17", "circulate_market_value": "26818460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 66, "hot_rank_chg": 84, "stock_cnt": 5802, "price": "38.29", "change": "1.78", "market_id": "17", "circulate_market_value": "12328353100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002241", "name": "歌尔股份", "hot_rank": 67, "hot_rank_chg": 199, "stock_cnt": 5802, "price": "24.64", "change": "3.53", "market_id": "33", "circulate_market_value": "77653004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 68, "hot_rank_chg": 5, "stock_cnt": 5802, "price": "9.43", "change": "1.95", "market_id": "17", "circulate_market_value": "4519987400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "医药商业", "change_pct": -0.43}, {"name": "医药", "change_pct": 0.5}, {"name": "流感", "change_pct": 1.05}]}, {"code": "002453", "name": "华软科技", "hot_rank": 69, "hot_rank_chg": -38, "stock_cnt": 5802, "price": "5.31", "change": "-9.54", "market_id": "33", "circulate_market_value": "3414868800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "苹果产业链", "change_pct": 0.2}, {"name": "保健品", "change_pct": 0.45}, {"name": "食品", "change_pct": 0.33}, {"name": "字节跳动概念股", "change_pct": 2.14}, {"name": "光刻机（胶）", "change_pct": -1.32}, {"name": "横琴新区", "change_pct": 0.31}, {"name": "供应链金融", "change_pct": 0.21}]}, {"code": "300502", "name": "新易盛", "hot_rank": 70, "hot_rank_chg": 35, "stock_cnt": 5802, "price": "455.00", "change": "-0.38", "market_id": "33", "circulate_market_value": "570899310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 71, "hot_rank_chg": 41, "stock_cnt": 5802, "price": "8.11", "change": "2.40", "market_id": "33", "circulate_market_value": "13194919500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.42}, {"name": "电竞", "change_pct": 1.19}, {"name": "手游", "change_pct": 1.72}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "人工智能", "change_pct": 1.3}, {"name": "游戏", "change_pct": 1.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.28}, {"name": "腾讯概念股", "change_pct": 1.46}, {"name": "快手概念股", "change_pct": 2.93}, {"name": "元宇宙", "change_pct": 1.53}, {"name": "虚拟数字人", "change_pct": 1.63}, {"name": "东数西算/算力", "change_pct": 1.23}, {"name": "web3.0", "change_pct": 2.02}, {"name": "AIGC概念", "change_pct": 2.08}, {"name": "数据要素", "change_pct": 1.38}, {"name": "字节跳动概念股", "change_pct": 2.14}, {"name": "AI营销", "change_pct": 3.55}, {"name": "ChatGPT", "change_pct": 2.59}, {"name": "智能眼镜/MR头显", "change_pct": 0.92}, {"name": "AI大模型/智能体", "change_pct": 1.43}, {"name": "人形机器人", "change_pct": -0.11}, {"name": "短剧/互动影游", "change_pct": 2.11}, {"name": "多模态", "change_pct": 1.9}, {"name": "AI视频", "change_pct": 2.84}, {"name": "IP经济/谷子经济", "change_pct": 0.72}, {"name": "小红书概念股", "change_pct": 3.06}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 72, "hot_rank_chg": 29, "stock_cnt": 5802, "price": "85.58", "change": "5.16", "market_id": "33", "circulate_market_value": "62065745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 73, "hot_rank_chg": 69, "stock_cnt": 5802, "price": "25.39", "change": "6.32", "market_id": "33", "circulate_market_value": "19731535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 74, "hot_rank_chg": 142, "stock_cnt": 5802, "price": "19.80", "change": "2.38", "market_id": "17", "circulate_market_value": "22454754000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 75, "hot_rank_chg": 10, "stock_cnt": 5802, "price": "33.77", "change": "-0.21", "market_id": "33", "circulate_market_value": "96584654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 76, "hot_rank_chg": 7, "stock_cnt": 5802, "price": "13.86", "change": "0.51", "market_id": "17", "circulate_market_value": "20411716000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 77, "hot_rank_chg": 7, "stock_cnt": 5802, "price": "5.23", "change": "1.36", "market_id": "33", "circulate_market_value": "13872839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.94}, {"name": "装修装饰", "change_pct": 0.1}, {"name": "装配式建筑", "change_pct": -0.46}, {"name": "航天", "change_pct": -0.61}, {"name": "旧改", "change_pct": -0.27}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 78, "hot_rank_chg": 36, "stock_cnt": 5802, "price": "72.15", "change": "0.42", "market_id": "33", "circulate_market_value": "105837965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600246", "name": "万通发展", "hot_rank": 79, "hot_rank_chg": 293, "stock_cnt": 5802, "price": "14.64", "change": "3.68", "market_id": "17", "circulate_market_value": "27675639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 80, "hot_rank_chg": 39, "stock_cnt": 5802, "price": "78.68", "change": "10.00", "market_id": "17", "circulate_market_value": "10281367400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更"}, {"code": "000021", "name": "深科技", "hot_rank": 81, "hot_rank_chg": 12, "stock_cnt": 5802, "price": "37.01", "change": "-0.56", "market_id": "33", "circulate_market_value": "58645556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 82, "hot_rank_chg": 99, "stock_cnt": 5802, "price": "33.55", "change": "10.00", "market_id": "17", "circulate_market_value": "8128158500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储测试"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 83, "hot_rank_chg": 3, "stock_cnt": 5802, "price": "37.72", "change": "-0.05", "market_id": "33", "circulate_market_value": "28569698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688041", "name": "海光信息", "hot_rank": 84, "hot_rank_chg": 22, "stock_cnt": 5802, "price": "256.00", "change": "3.88", "market_id": "17", "circulate_market_value": "595030550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 85, "hot_rank_chg": 31, "stock_cnt": 5802, "price": "18.08", "change": "8.65", "market_id": "17", "circulate_market_value": "12300179700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 86, "hot_rank_chg": -25, "stock_cnt": 5802, "price": "35.66", "change": "-5.89", "market_id": "33", "circulate_market_value": "5140777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001389", "name": "广合科技", "hot_rank": 87, "hot_rank_chg": -6, "stock_cnt": 5802, "price": "198.65", "change": "6.84", "market_id": "33", "circulate_market_value": "30268617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 88, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "33.40", "change": "0.39", "market_id": "17", "circulate_market_value": "55580000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000981", "name": "山子高科", "hot_rank": 90, "hot_rank_chg": 14, "stock_cnt": 5802, "price": "2.88", "change": "-2.37", "market_id": "33", "circulate_market_value": "27398466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.12}, {"name": "无人驾驶", "change_pct": 0.51}, {"name": "汽车零部件", "change_pct": 0.01}, {"name": "新能源汽车", "change_pct": -0.09}, {"name": "新能源车零部件", "change_pct": -0.01}, {"name": "低价股", "change_pct": -0.78}, {"name": "减速器", "change_pct": 0.03}, {"name": "华为汽车", "change_pct": 0.18}]}, {"code": "603259", "name": "药明康德", "hot_rank": 91, "hot_rank_chg": -45, "stock_cnt": 5802, "price": "167.85", "change": "-0.07", "market_id": "17", "circulate_market_value": "415140090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 92, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "43.51", "change": "-1.45", "market_id": "17", "circulate_market_value": "55328250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301176", "name": "逸豪新材", "hot_rank": 93, "hot_rank_chg": 126, "stock_cnt": 5802, "price": "63.11", "change": "8.55", "market_id": "33", "circulate_market_value": "10353423300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300017", "name": "网宿科技", "hot_rank": 94, "hot_rank_chg": 522, "stock_cnt": 5802, "price": "15.92", "change": "4.81", "market_id": "33", "circulate_market_value": "37674196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002792", "name": "通宇通讯", "hot_rank": 95, "hot_rank_chg": -45, "stock_cnt": 5802, "price": "34.97", "change": "1.25", "market_id": "33", "circulate_market_value": "11854635200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002285", "name": "世联行", "hot_rank": 96, "hot_rank_chg": -61, "stock_cnt": 5802, "price": "3.20", "change": "0.63", "market_id": "33", "circulate_market_value": "6332830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.55}, {"name": "深圳本地股", "change_pct": 0.26}, {"name": "共享经济", "change_pct": 0.85}, {"name": "强势人气股", "change_pct": 1.94}, {"name": "养老产业", "change_pct": 0.59}, {"name": "住房租赁", "change_pct": 1.76}, {"name": "房产经纪", "change_pct": 3.32}, {"name": "第三代半导体", "change_pct": -0.61}, {"name": "物业管理", "change_pct": 0.52}, {"name": "旧改", "change_pct": -0.27}, {"name": "横琴新区", "change_pct": 0.31}, {"name": "氮化镓", "change_pct": -0.56}, {"name": "REITs", "change_pct": 0.18}, {"name": "华为产业链", "change_pct": 0.76}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 97, "hot_rank_chg": -38, "stock_cnt": 5802, "price": "9.55", "change": "-3.05", "market_id": "17", "circulate_market_value": "34262246000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": -0.97}, {"name": "OLED", "change_pct": -0.27}, {"name": "液晶面板/LCD", "change_pct": -0.46}, {"name": "国企改革", "change_pct": -0.22}, {"name": "玻璃基板封装", "change_pct": -0.29}, {"name": "陕西国企改革", "change_pct": -0.82}]}, {"code": "301526", "name": "国际复材", "hot_rank": 98, "hot_rank_chg": 115, "stock_cnt": 5802, "price": "31.00", "change": "-1.02", "market_id": "33", "circulate_market_value": "43536181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 99, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "52.19", "change": "-1.06", "market_id": "17", "circulate_market_value": "52721448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688795", "name": "摩尔线程", "hot_rank": 100, "hot_rank_chg": 238, "stock_cnt": 5802, "price": "443.00", "change": "7.52", "market_id": "17", "circulate_market_value": "24808000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "601811", "name": "新华文轩", "price": 16.82, "change_pct": 10.01, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["传媒"], "limit_up_days": 3, "turnover_ratio": 0.51, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "002303", "name": "美盈森", "price": 6.9, "change_pct": 10.05, "reason": "国际领先的包装一体化综合服务商；公司主营运输包装、精品包装、标签及电子功能材料模切产品，并持续为消费电子、白酒、家电等行业龙头提供一体化包装服务", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.12, "first_limit_up": 1790040600, "break_limit_up_times": 1}, {"code": "000676", "name": "智度股份", "price": 7.45, "change_pct": 10.04, "reason": "公司全资子公司智度智麦专注数字品牌广告业务，目前重点发展品牌新媒体社会化营销业务以及家庭客厅经济大屏端媒体品牌广告的代理，也能为品牌提供直播电商业务，是一家社会化媒体整合营销服务商", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 13.77, "first_limit_up": 1790040633, "break_limit_up_times": 13}, {"code": "002238", "name": "天威视讯", "price": 6.96, "change_pct": 9.95, "reason": "1、公司数据中心业务主要涵盖机柜托管、服务器租用、网络资源租用以及为客户提供定制化解决方案等服务内容。\n2、公司是深圳地区最主要的电视服务提供商，数字电视服务市占率第一", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1790042976, "break_limit_up_times": 0}, {"code": "002178", "name": "延华智能", "price": 5.59, "change_pct": 10.04, "reason": "公司医疗板块AI助手“星仔”已融合人工智能技术，落地智能导诊、报告解读、辅助诊断等场景，实现医疗服务智能化升级", "plates": ["AI大模型/智能体"], "limit_up_days": 2, "turnover_ratio": 17.54, "first_limit_up": 1790041152, "break_limit_up_times": 2}, {"code": "002082", "name": "ST万邦", "price": 11.12, "change_pct": 9.99, "reason": "国内拥有药品剂型较多的制药企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.37, "first_limit_up": 1790043738, "break_limit_up_times": 1}, {"code": "002912", "name": "中新赛克", "price": 26.38, "change_pct": 10.01, "reason": "1、深圳国资委旗下，领先的网络可视化基础架构产品提供商，已有相关的算力数据网络监测和调度技术研发储备；公司海睿思产品已成功通过上海数据交易所的数商认证；\n2、公司构建了涵盖网络内容安全、宽带网与移动网产品、数据运营及电磁空间安全的全栈式防护体系，深度融合AI大模型与GenAI技术，推出了数据安全分类分级系统及全链路安全可信解决方案，为政府、运营商及关键基础设施提供全生命周期的网络空间数据智能治理与安全防护服务", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 19.11, "first_limit_up": 1790056542, "break_limit_up_times": 2}, {"code": "002564", "name": "天沃科技", "price": 5.45, "change_pct": 10.1, "reason": "公司主营压力容器设备制造和电力工程EPC业务，与上海微电子均为上海国资委下属公司", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.0, "first_limit_up": 1790040894, "break_limit_up_times": 0}, {"code": "000595", "name": "新能股份", "price": 5.85, "change_pct": 9.96, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.54, "first_limit_up": 1790056323, "break_limit_up_times": 0}, {"code": "603636", "name": "南威软件", "price": 8.01, "change_pct": 10.03, "reason": "公司首批高性能算力服务器已正式上架投入运营，开始面向全国用户提供算力服务", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 2.94, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "600641", "name": "先导基电", "price": 43.74, "change_pct": 10.01, "reason": "公司大股东先导科技集团自有镓、 锗、 铟等稀散金属（产量全球领先） ， 能够提供电子材料（如掺杂材料、 前驱体、 电子特气） 以及工艺测试等多方面支持， 为公司零部件产品研发及国产化验证提供保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.29, "first_limit_up": 1790040657, "break_limit_up_times": 3}, {"code": "603230", "name": "内蒙新华", "price": 16.31, "change_pct": 9.98, "reason": "公司是内蒙古规模最大的出版物发行企业，明确以教育服务、文化消费、现代物流为核心，向综合文化服务商转型，提供阅读空间设计、阅读活动策划及阅读课程开发等服务", "plates": ["传媒"], "limit_up_days": 5, "turnover_ratio": 11.02, "first_limit_up": 1790040875, "break_limit_up_times": 3}, {"code": "605179", "name": "一鸣食品", "price": 30.04, "change_pct": 10.0, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.1, "first_limit_up": 1790044982, "break_limit_up_times": 0}, {"code": "600664", "name": "哈药股份", "price": 9.08, "change_pct": 10.06, "reason": "公司已有创新药项目在研，覆盖心血管、代谢、呼吸、抗感染、抗肿瘤五大领域", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 12.24, "first_limit_up": 1790040685, "break_limit_up_times": 2}, {"code": "603598", "name": "引力传媒", "price": 18.96, "change_pct": 9.98, "reason": "领先的数字营销服务公司，字节跳动巨量引擎核心代理商；公司内部自研上线“核力 AI”的 1.0 版本、已具备“营销文案 生成”、“图片识别与生成”及“数字分身复刻及驱动”等功能应用", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 12.45, "first_limit_up": 1790041634, "break_limit_up_times": 1}, {"code": "605398", "name": "新炬网络", "price": 23.63, "change_pct": 10.01, "reason": "公司是一家以提供IT数据中心运维服务及运维产品为主的多云全栈智能运维服务商，下属子公司新炬技术AIOPS智慧运维平台软件V4.0与华为云GaussDB、华为云公有云平台（鲲鹏）完成相互兼容性测试认证", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.11, "first_limit_up": 1790043652, "break_limit_up_times": 1}, {"code": "001216", "name": "华瓷股份", "price": 26.47, "change_pct": 10.02, "reason": "公司氧化锆粉体纯度最高可达99.995%，可适配新能源研磨、齿科陶瓷、MLCC等领域，向潮州三环供应的MLCC相关粉体仍处于小量验证阶段", "plates": ["其他"], "limit_up_days": 6, "turnover_ratio": 0.74, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 14.47, "change_pct": 10.04, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 50.63, "first_limit_up": 1790045222, "break_limit_up_times": 5}, {"code": "603068", "name": "博通集成", "price": 48.17, "change_pct": 10.0, "reason": "1、公司BK7259等Wi-Fi6 MCU产品集成端侧智能能力，面向智能家居、智能硬件等场景；\n2、公司已有多款融合AI技术的AIoT芯片产品实现量产销售，应用领域涵盖AI眼镜、AI玩具等", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 19.16, "first_limit_up": 1790042179, "break_limit_up_times": 2}, {"code": "600770", "name": "综艺股份", "price": 6.63, "change_pct": 9.95, "reason": "参股企业神州龙芯是一家集成电路设计企业，第一款完全自主知识产权的通用CPU龙芯一号就诞生于该公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.57, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "002290", "name": "禾盛新材", "price": 77.85, "change_pct": 10.0, "reason": "公司参股的熠知电子主营CPU及服务器产品", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.4, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "603903", "name": "中持股份", "price": 15.27, "change_pct": 10.01, "reason": "公司控股股东变更为芯长征，其核心业务包括硅基芯片及模组系列、第三代半导体芯片及模组系列（SiC、GaN）及功率器件检测装备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.63, "first_limit_up": 1790047416, "break_limit_up_times": 1}, {"code": "605058", "name": "澳弘电子", "price": 53.27, "change_pct": 9.99, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 17.91, "first_limit_up": 1790047347, "break_limit_up_times": 8}, {"code": "300110", "name": "华仁药业", "price": 3.95, "change_pct": 20.06, "reason": "公司主要从事非PVC软袋大容量制剂及原料药等产品，新型冠状病毒抗原检测试剂盒尚未产生订单", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 29.47, "first_limit_up": 1790045421, "break_limit_up_times": 1}, {"code": "001266", "name": "宏英智能", "price": 37.75, "change_pct": 9.99, "reason": "公司已在电网侧储能完成多个大型项目，浸没式储能已经在数据中心、电信基站等商用化", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 15.07, "first_limit_up": 1790040855, "break_limit_up_times": 3}, {"code": "301234", "name": "五洲医疗", "price": 139.74, "change_pct": 20.0, "reason": "公司拟收购旋智科技100%股权，切入电机控制芯片赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.5, "first_limit_up": 1790042199, "break_limit_up_times": 20}, {"code": "002768", "name": "国恩股份", "price": 74.86, "change_pct": 10.01, "reason": "公司已完成PEEK聚合技术及核心工艺开发，拟投资建设年产1,000吨PEEK材料项目，构建“核心树脂-关键中间品-终端构件”产业一体化格局", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.38, "first_limit_up": 1790053509, "break_limit_up_times": 6}, {"code": "600479", "name": "千金药业", "price": 13.57, "change_pct": 9.97, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 23.65, "first_limit_up": 1790060158, "break_limit_up_times": 0}, {"code": "002259", "name": "升达林业", "price": 4.97, "change_pct": 9.96, "reason": "公司主要业务包括天然气液化加工、城镇燃气运营和加气站运营", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 8.31, "first_limit_up": 1790043849, "break_limit_up_times": 1}, {"code": "001322", "name": "箭牌家居", "price": 6.95, "change_pct": 9.97, "reason": "公司是国内较早进入陶瓷卫浴行业的企业之一，生产产品品类范围覆盖卫生陶瓷、龙头五金、浴室家具、瓷砖、浴缸浴房、定制橱衣柜等全系列家居产品\n", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.05, "first_limit_up": 1790041875, "break_limit_up_times": 1}, {"code": "600743", "name": "华远控股", "price": 2.56, "change_pct": 9.87, "reason": "公司控股股东华远集团拟转让所持29.9%股份予金融街资本", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 0.39, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "603020", "name": "爱普股份", "price": 13.83, "change_pct": 10.02, "reason": "国内香料香精行业龙头，拥有一种天然风味素肉固体调味料的专利", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 6.87, "first_limit_up": 1790040766, "break_limit_up_times": 7}, {"code": "601949", "name": "中国出版", "price": 6.62, "change_pct": 9.97, "reason": "国内出版行业的龙头企业；公司以图书、报纸、期刊等出版物出版为主业，旗下中华书局打造先贤数字人智能体及先贤智能阅读空间", "plates": ["传媒"], "limit_up_days": 1, "turnover_ratio": 4.65, "first_limit_up": 1790043721, "break_limit_up_times": 0}, {"code": "001260", "name": "坤泰股份", "price": 20.28, "change_pct": 9.98, "reason": "公司主营业务为汽车内饰件材料，主要产品包括汽车地毯和汽车脚垫两大类", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.46, "first_limit_up": 1790046174, "break_limit_up_times": 1}, {"code": "600815", "name": "厦工股份", "price": 4.19, "change_pct": 9.97, "reason": "实控人厦门国资委，中国最大的工程机械制造基地之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1790053202, "break_limit_up_times": 0}, {"code": "000607", "name": "华媒控股", "price": 4.98, "change_pct": 9.93, "reason": "1、公司主要从事广告策划发布、报刊发行与印刷、教育等业务，拟挂牌转让中教未来8.62%股权并引入外部股东增资不低于2.4亿元；\n2、公司持有杭州文化产权交易所 40% 股权，该文交所聚焦文化艺术品等资产的确权、交易与流转", "plates": ["传媒"], "limit_up_days": 2, "turnover_ratio": 2.27, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "001317", "name": "三羊马", "price": 65.96, "change_pct": 10.01, "reason": "1、机器人业务是三羊马智人科技及合作伙伴冰零智能科技高度关注且重视的下游应用领域，智人科技目前无机器人领域的量产产品；\n2、公司布局无人车物流，并为小米景明科技有限公司的承运商之一，与重庆东风小康汽车销售有限公司及其关联方有汽车整车综合物流服务业务合作", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 8.94, "first_limit_up": 1790040738, "break_limit_up_times": 2}, {"code": "600403", "name": "大有能源", "price": 7.6, "change_pct": 9.99, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.6, "first_limit_up": 1790053324, "break_limit_up_times": 0}, {"code": "002672", "name": "东江环保", "price": 4.03, "change_pct": 10.11, "reason": "公司拥有危险废物经营资质超 280万吨，可处理《国家危险废物名录》（2025年版）中列明的绝大多数危险废物，产出的烟花级氧化铜、高纯氢氧化铜、无水氯化铜、碱式氯化铜等资源化产品及精铋、精碲、电铅、氧化锑等稀贵金属产品质量水平领先", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.86, "first_limit_up": 1790053875, "break_limit_up_times": 0}, {"code": "002614", "name": "奥佳华", "price": 6.88, "change_pct": 10.08, "reason": "1、公司是全国最大的养老按摩器材生产制造服务商，实控人联合自然人股东折价转让10%股份；\n2、旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 2.73, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "002141", "name": "贤丰控股", "price": 7.43, "change_pct": 10.07, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 27.0, "first_limit_up": 1790040945, "break_limit_up_times": 8}, {"code": "300324", "name": "旋极信息", "price": 4.14, "change_pct": 20.0, "reason": "1、子公司旋极星源设计研发了多款芯片和IP产品，和阿里等有合作。\n2、公司参股的浙江曲速科技有限公司对赌约定已完成，现已成功推出“TGU01芯片”及搭载该芯片的Bumblebee服务器，并已上市销售。公司对该芯片的性能进行了现场核验，确认其在内存配备、显存带宽性能及大模型支持能力等方面均符合对赌条款的要求。", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.91, "first_limit_up": 1790042109, "break_limit_up_times": 2}, {"code": "603216", "name": "梦天家居", "price": 22.75, "change_pct": 10.01, "reason": "公司在家具行业特别是木门领域具有领导地位，此前以7000万元增资重庆凌芯微电子并持股35%，切入功率半导体晶圆代工赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.26, "first_limit_up": 1790040983, "break_limit_up_times": 5}, {"code": "605178", "name": "时空科技", "price": 74.79, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.01, "first_limit_up": 1790042377, "break_limit_up_times": 0}, {"code": "002301", "name": "齐心集团", "price": 9.27, "change_pct": 9.96, "reason": "1、公司推出齐心智磐 AI 大模型，覆盖商品寻源与上架、客户点单、订单分配、供应链结算、履约配送等数字化采购环节，大幅提升工作效率；\n2、公司主营B2B办公物资+云视频双主业，旗下齐心文创先后与吾皇猫、山海经等多个优质文化 IP 携手打造“国潮文创”", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1790042118, "break_limit_up_times": 0}, {"code": "001234", "name": "泰慕士", "price": 29.25, "change_pct": 10.0, "reason": "公司出口占比约30%，主营业务为针织面料与针织服装的研产销，主要产品可以分为运动服装、休闲服装及儿童服装，为迪卡侬、森马服饰、Quiksilver、Kappa、佐丹奴、全棉时代等知名服装品牌提供贴牌加工服务，目前与安踏合作的产品主要是运动服装和儿童服装", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 4.74, "first_limit_up": 1790040600, "break_limit_up_times": 0}, {"code": "000910", "name": "大亚圣象", "price": 6.89, "change_pct": 10.06, "reason": "1、板材行业龙头；公司研发生产的超薄PCB纤维板有利于丰富公司产品矩阵，开拓高端电子材料市场；\n2、公司以自有资金1500万认购嘉兴翼龙股权投资合伙企业28.30189%的份额，该基金拟以股权投资的方式投资七腾机器人", "plates": ["PCB板"], "limit_up_days": 3, "turnover_ratio": 10.53, "first_limit_up": 1790053935, "break_limit_up_times": 0}, {"code": "001268", "name": "联合精密", "price": 26.57, "change_pct": 10.02, "reason": "1、公司主营精密机械零部件业务，正在建设年产3万吨空调压缩机零部件、汽车零部件、机器人零部件、光刻机零部件铸件项目；\n2、公司已完成收购成都迈特航空51%股权，迈特航空为中航工业旗下成飞、沈飞等主机厂供应商，正式切入航空精密零部件领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.91, "first_limit_up": 1790041410, "break_limit_up_times": 1}, {"code": "603039", "name": "泛微网络", "price": 39.7, "change_pct": 10.0, "reason": "公司主营协同管理和移动办公软件，腾讯为公司第五大股东，公司旗下所有产品全面接入DeepSeek大模型，借助泛微2024年发布的数智大脑Xiaoe.AI，可快捷方便为客户搭建“DeepSeek大模型+专业小模型+智能体”的数智底座", "plates": ["AI大模型/智能体"], "limit_up_days": 1, "turnover_ratio": 12.09, "first_limit_up": 1790044349, "break_limit_up_times": 3}, {"code": "603580", "name": "艾艾精工", "price": 78.68, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 6.29, "first_limit_up": 1790041568, "break_limit_up_times": 4}, {"code": "000560", "name": "我爱我家", "price": 3.51, "change_pct": 10.03, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 17.42, "first_limit_up": 1790040723, "break_limit_up_times": 12}, {"code": "002757", "name": "南兴股份", "price": 19.86, "change_pct": 10.03, "reason": "公司开发了小鹭AIGC智能助手；全资子公司唯一网络是国内领先的数字经济基础设施服务提供商，主要经营范围包括IDC、云计算（含公有云、混合云、私有云及云增值等服务）、云联网、数字化解决方案等服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.92, "first_limit_up": 1790044176, "break_limit_up_times": 0}, {"code": "605258", "name": "协和电子", "price": 42.16, "change_pct": 9.99, "reason": "国内领先的高频通讯板生产商；公司车载毫米波雷达等产品且已批量供货，与合众新能源、上汽时代、万帮数字能源等新能源领域的客户建立了合作", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.91, "first_limit_up": 1790047633, "break_limit_up_times": 0}, {"code": "002313", "name": "日海智能", "price": 9.3, "change_pct": 10.06, "reason": "公司推出多款端侧AI智能模组，如48TOPS算力的SIM9850等，支持语音交互、图像分析，为陪伴机器人、AR眼镜等场景提供高算力智能连接方案", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.85, "first_limit_up": 1790042082, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 6.42, "change_pct": 9.93, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组", "传媒"], "limit_up_days": 2, "turnover_ratio": 0.33, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "000756", "name": "新华制药", "price": 16.14, "change_pct": 10.02, "reason": "公司治疗阿尔茨海默病的一类创新药OAB-14正在进行I期临床研究", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 19.45, "first_limit_up": 1790040300, "break_limit_up_times": 10}, {"code": "605218", "name": "伟时电子", "price": 15.94, "change_pct": 10.01, "reason": "全球车载背光显示模组领域领先企业之一；在VR方面，公司已为Facebook旗下产品供应背光显示模组", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.48, "first_limit_up": 1790040617, "break_limit_up_times": 0}, {"code": "600503", "name": "华丽家族", "price": 2.67, "change_pct": 9.88, "reason": "1、公司以高端地产开发为基石，开发类型涵盖低密住宅、别墅、公寓、商铺及城市更新项目，聚焦上海、苏州、遵义核心城市；\n2、公司控股的南江机器人主要产品包括为面向3C制造行业、医药行业、汽车制造行业和光伏行业中的智慧物流环节而设计的智能移动机器人iAGV系列、智能搬运机器人iCarrier系列以及相应的智能调度系统", "plates": ["房地产"], "limit_up_days": 2, "turnover_ratio": 12.24, "first_limit_up": 1790059470, "break_limit_up_times": 0}, {"code": "688781", "name": "视涯科技", "price": 51.95, "change_pct": 20.0, "reason": "公司是全球领先的微显示整体解决方案提供商，核心产品为硅基OLED微型显示屏，并为客户提供包括战略产品开发、光学系统和XR整体解决方案等增值服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 28.1, "first_limit_up": 1790046037, "break_limit_up_times": 8}, {"code": "002467", "name": "二六三", "price": 5.09, "change_pct": 9.94, "reason": "公司是AI 词元跨境传输 + 算力出海 + 词元结算的核心基建商，凭借全牌照、全球节点与海缆资源，为词元出海提供合规通道与算力底座", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.49, "first_limit_up": 1790040765, "break_limit_up_times": 2}, {"code": "000504", "name": "南华生物", "price": 12.11, "change_pct": 9.99, "reason": "湖南省政府旗下，干细胞储存和节能环保双主业，其中生物医药板块主要为细胞医疗服务，为客户提供干细胞、免疫细胞等生物资源的检测及储存服务", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 1.79, "first_limit_up": 1790040300, "break_limit_up_times": 0}, {"code": "603221", "name": "爱丽家居", "price": 33.55, "change_pct": 10.0, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.28, "first_limit_up": 1790041592, "break_limit_up_times": 0}, {"code": "600418", "name": "江淮汽车", "price": 21.32, "change_pct": 10.01, "reason": "消息称玛莎拉蒂与华为、江淮汽车开展长期产业合作谈判", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.35, "first_limit_up": 1790057644, "break_limit_up_times": 0}];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};