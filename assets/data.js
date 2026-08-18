const UPDATE_TIME = "2026-08-18 13:39";
const THS_HOT = [
  {
    "name": "转基因",
    "rise": 9.3,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "创新药",
    "rise": -1.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续102天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 6.52,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "存储芯片",
    "rise": 0.22,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续225天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.08,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续272天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": 0.49,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续436天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 0.06,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "PCB概念",
    "rise": -0.23,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": -1,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": 2.84,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": -1.65,
    "rate": 0,
    "tag": "",
    "hotTag": "连续136天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "MLCC概念",
    "rise": -0.57,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "农业种植",
    "rise": 3.88,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "国产操作系统",
    "rise": 0.21,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "885844"
  },
  {
    "name": "AI应用",
    "rise": -0.79,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续30天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": -0.27,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续201天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "玻璃基板",
    "rise": 1.18,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "工业母机ETF",
    "code": "886111"
  },
  {
    "name": "玉米",
    "rise": 7.47,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "培育钻石",
    "rise": 0.59,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光纤概念",
    "rise": -0.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": -1,
    "etfName": "中银证券科技创新LOF",
    "code": "886084"
  },
  {
    "name": "先进封装",
    "rise": 0.46,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  }
];
const THS_EVENTS = [
  {
    "title": "厄尔尼诺来袭，粮食安全升温，产业链机会如何把握？",
    "desc": "",
    "heat": 686300,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "秋乐种业",
        "code": "920087",
        "chg": 29.975021
      }
    ]
  },
  {
    "title": "国家统计局最新数据出炉：一线城市二手房价格环比连涨5个月，广州涨幅领跑70城",
    "desc": "",
    "heat": 180096,
    "direction": "房地产",
    "themes": [
      "房地产",
      "租售同权"
    ],
    "stocks": [
      {
        "name": "盈新发展",
        "code": "000620",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "宁德时代宜春锂矿项目复产迎重要进展",
    "desc": "",
    "heat": 134532,
    "direction": "宁德时代",
    "themes": [
      "宁德时代概念",
      "电池"
    ],
    "stocks": [
      {
        "name": "天溯计量",
        "code": "301449",
        "chg": 11.661138
      }
    ]
  },
  {
    "title": "宇树科技将于8月19日科创板上市",
    "desc": "",
    "heat": 93784,
    "direction": "宇树机器人",
    "themes": [
      "宇树机器人",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "麒麟信安",
        "code": "688152",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美股芯片股深夜大涨，存储巨头飙涨13%，闪迪涨超8%市值突破2600亿美元",
    "desc": "",
    "heat": 90493,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "迈为股份",
        "code": "300751",
        "chg": 13.599914
      }
    ]
  },
  {
    "title": "《石油天然气发展“十五五”规划》印发 构建“全国一张网” 推动油气与多能融合发展",
    "desc": "",
    "heat": 90450,
    "direction": "石油天然气",
    "themes": [
      "石油加工贸易",
      "天然气",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "石化机械",
        "code": "000852",
        "chg": 10.076046
      }
    ]
  },
  {
    "title": "企业“烧Token”也能贷款？广东上线Token贷",
    "desc": "",
    "heat": 43490,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "金禄电子",
        "code": "301282",
        "chg": 11.060563
      }
    ]
  },
  {
    "title": "脑机接口临床应用密集落地 A股逾30家公司积极布局",
    "desc": "",
    "heat": 38275,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "东方中科",
        "code": "002819",
        "chg": 9.995171
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "农业种植",
    "change": "+8.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+7.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+7.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+5.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+4.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+4.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+3.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人造肉",
    "change": "+3.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "土地流转",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化肥",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果期货",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大农业",
    "change": "+2.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "社区团购",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "油气管网",
    "change": "+2.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+2.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+2.12%",
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
    "hot_rank": 1,
    "hot_rank_chg": 2,
    "stock_cnt": 5796,
    "price": "6.27",
    "change": "7.73",
    "market_id": "33",
    "circulate_market_value": "16579406000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "装修装饰",
        "change_pct": 0.11
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.01
      },
      {
        "name": "航天",
        "change_pct": -0.39
      },
      {
        "name": "旧改",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 2,
    "hot_rank_chg": 13,
    "stock_cnt": 5796,
    "price": "6.47",
    "change": "6.42",
    "market_id": "33",
    "circulate_market_value": "228825360000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.24
      },
      {
        "name": "手机产业链",
        "change_pct": -0.02
      },
      {
        "name": "超高清视频",
        "change_pct": -1.0
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.12
      },
      {
        "name": "电竞",
        "change_pct": -1.12
      },
      {
        "name": "半导体",
        "change_pct": 0.29
      },
      {
        "name": "人工智能",
        "change_pct": -0.88
      },
      {
        "name": "互联网医疗",
        "change_pct": -1.21
      },
      {
        "name": "VR&AR",
        "change_pct": -0.29
      },
      {
        "name": "OLED",
        "change_pct": 0.66
      },
      {
        "name": "京津冀",
        "change_pct": -0.15
      },
      {
        "name": "物联网",
        "change_pct": -0.41
      },
      {
        "name": "指纹识别",
        "change_pct": 0.17
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.03
      },
      {
        "name": "白马股",
        "change_pct": 0.04
      },
      {
        "name": "智能制造",
        "change_pct": -0.08
      },
      {
        "name": "小米概念股",
        "change_pct": -0.18
      },
      {
        "name": "国产芯片",
        "change_pct": -0.04
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.62
      },
      {
        "name": "全息概念",
        "change_pct": -0.44
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.44
      },
      {
        "name": "MicroLED",
        "change_pct": 1.22
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.8
      },
      {
        "name": "智能手表",
        "change_pct": -0.2
      },
      {
        "name": "MiniLED",
        "change_pct": 0.44
      },
      {
        "name": "传感器",
        "change_pct": -0.26
      },
      {
        "name": "大硅片",
        "change_pct": 4.4
      },
      {
        "name": "AI PC",
        "change_pct": -0.11
      },
      {
        "name": "华为产业链",
        "change_pct": -0.52
      },
      {
        "name": "回购",
        "change_pct": -0.23
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.3
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.16
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 16,
    "hot_rank_chg": -9,
    "stock_cnt": 5796,
    "price": "12.90",
    "change": "-1.75",
    "market_id": "17",
    "circulate_market_value": "23079884000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.34
      },
      {
        "name": "纯碱",
        "change_pct": 0.52
      },
      {
        "name": "食品",
        "change_pct": 1.17
      },
      {
        "name": "土壤修复",
        "change_pct": -0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.61
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -1.5
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 18,
    "hot_rank_chg": 1,
    "stock_cnt": 5796,
    "price": "9.12",
    "change": "1.22",
    "market_id": "17",
    "circulate_market_value": "22968810000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.6
      },
      {
        "name": "工业大麻",
        "change_pct": -1.34
      },
      {
        "name": "中药",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "保健品",
        "change_pct": -0.05
      },
      {
        "name": "民营医院",
        "change_pct": -1.19
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "化学原料药",
        "change_pct": -0.75
      },
      {
        "name": "流感",
        "change_pct": -0.69
      },
      {
        "name": "振兴东北",
        "change_pct": -0.06
      },
      {
        "name": "食品",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 25,
    "hot_rank_chg": 42,
    "stock_cnt": 5796,
    "price": "3.41",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "15930663000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "拟定增",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.45
      },
      {
        "name": "股权转让",
        "change_pct": -0.47
      },
      {
        "name": "房地产",
        "change_pct": -0.38
      },
      {
        "name": "京津冀",
        "change_pct": -0.15
      },
      {
        "name": "旅游",
        "change_pct": 0.06
      },
      {
        "name": "国产芯片",
        "change_pct": -0.04
      },
      {
        "name": "内存",
        "change_pct": -0.71
      },
      {
        "name": "闪存",
        "change_pct": -0.89
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 28,
    "hot_rank_chg": -1,
    "stock_cnt": 5796,
    "price": "11.19",
    "change": "-4.77",
    "market_id": "17",
    "circulate_market_value": "4841618100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -0.47
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "光伏",
        "change_pct": -0.26
      },
      {
        "name": "无线耳机",
        "change_pct": -0.18
      },
      {
        "name": "华为产业链",
        "change_pct": -0.52
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.08
      }
    ]
  },
  {
    "code": "600707",
    "name": "彩虹股份",
    "hot_rank": 30,
    "hot_rank_chg": 139,
    "stock_cnt": 5796,
    "price": "10.80",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "38746833000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玻璃基板",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 0.65
      },
      {
        "name": "OLED",
        "change_pct": 0.66
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.62
      },
      {
        "name": "国企改革",
        "change_pct": -0.32
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.62
      },
      {
        "name": "陕西国企改革",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 31,
    "hot_rank_chg": 17,
    "stock_cnt": 5796,
    "price": "6.18",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "7112546700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "“牛”字炒作",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 1.48
      },
      {
        "name": "养猪",
        "change_pct": 2.86
      },
      {
        "name": "农垦",
        "change_pct": 5.32
      },
      {
        "name": "冷链",
        "change_pct": 0.15
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "教育",
        "change_pct": -0.01
      },
      {
        "name": "海南概念",
        "change_pct": 1.32
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.5
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.4
      },
      {
        "name": "赛马",
        "change_pct": 4.69
      },
      {
        "name": "大农业",
        "change_pct": 2.55
      },
      {
        "name": "职业教育",
        "change_pct": 0.2
      },
      {
        "name": "自贸区",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 33,
    "hot_rank_chg": -9,
    "stock_cnt": 5796,
    "price": "4.76",
    "change": "-4.42",
    "market_id": "33",
    "circulate_market_value": "9996732300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "维生素",
        "change_pct": 1.97
      },
      {
        "name": "基因测序",
        "change_pct": -0.93
      },
      {
        "name": "民营医院",
        "change_pct": -1.19
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "化学原料药",
        "change_pct": -0.75
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 34,
    "hot_rank_chg": 4,
    "stock_cnt": 5796,
    "price": "7.31",
    "change": "1.25",
    "market_id": "17",
    "circulate_market_value": "8324315900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.13
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "光伏",
        "change_pct": -0.26
      },
      {
        "name": "特高压",
        "change_pct": -1.14
      },
      {
        "name": "智能电网",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 40,
    "hot_rank_chg": 432,
    "stock_cnt": 5796,
    "price": "6.82",
    "change": "4.12",
    "market_id": "33",
    "circulate_market_value": "13060930500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 0.17
      },
      {
        "name": "林业",
        "change_pct": 1.39
      },
      {
        "name": "碳中和",
        "change_pct": -0.65
      },
      {
        "name": "自贸区",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 41,
    "hot_rank_chg": 158,
    "stock_cnt": 5796,
    "price": "6.23",
    "change": "20.04",
    "market_id": "33",
    "circulate_market_value": "5521340100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "种业",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 8.86
      },
      {
        "name": "土地流转",
        "change_pct": 3.34
      },
      {
        "name": "海南概念",
        "change_pct": 1.32
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.5
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.4
      },
      {
        "name": "大农业",
        "change_pct": 2.55
      },
      {
        "name": "水产养殖",
        "change_pct": 4.08
      },
      {
        "name": "自贸区",
        "change_pct": 0.17
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 52,
    "hot_rank_chg": 6,
    "stock_cnt": 5796,
    "price": "6.16",
    "change": "-4.20",
    "market_id": "17",
    "circulate_market_value": "76359909000.00",
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
        "change_pct": -0.56
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.85
      },
      {
        "name": "水电",
        "change_pct": -1.01
      },
      {
        "name": "火电",
        "change_pct": -1.02
      },
      {
        "name": "光伏",
        "change_pct": -0.26
      },
      {
        "name": "风电",
        "change_pct": -0.99
      },
      {
        "name": "国企改革",
        "change_pct": -0.32
      },
      {
        "name": "算电协同",
        "change_pct": -1.41
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 59,
    "hot_rank_chg": 34,
    "stock_cnt": 5796,
    "price": "7.18",
    "change": "5.43",
    "market_id": "33",
    "circulate_market_value": "7416479000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.54
      },
      {
        "name": "锂电池",
        "change_pct": -0.53
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -1.17
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.31
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 60,
    "hot_rank_chg": 11,
    "stock_cnt": 5796,
    "price": "5.06",
    "change": "-4.89",
    "market_id": "33",
    "circulate_market_value": "29625280000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -0.24
      },
      {
        "name": "人工智能",
        "change_pct": -0.88
      },
      {
        "name": "水利",
        "change_pct": -0.73
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.31
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "园林",
        "change_pct": -1.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.18
      },
      {
        "name": "数字经济",
        "change_pct": -0.91
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.48
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.44
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.61
      },
      {
        "name": "快手概念股",
        "change_pct": -2.32
      },
      {
        "name": "IGBT",
        "change_pct": 0.4
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.32
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.81
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.6
      },
      {
        "name": "氮化镓",
        "change_pct": 0.13
      },
      {
        "name": "AI营销",
        "change_pct": -2.17
      },
      {
        "name": "多模态",
        "change_pct": -1.36
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.62
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.08
      },
      {
        "name": "区块链",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 61,
    "hot_rank_chg": -1,
    "stock_cnt": 5796,
    "price": "4.84",
    "change": "-9.19",
    "market_id": "33",
    "circulate_market_value": "3463233000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.98
      },
      {
        "name": "旅游",
        "change_pct": 0.06
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 62,
    "hot_rank_chg": -9,
    "stock_cnt": 5796,
    "price": "10.99",
    "change": "3.39",
    "market_id": "33",
    "circulate_market_value": "5107855300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.13
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.15
      },
      {
        "name": "水利",
        "change_pct": -0.73
      },
      {
        "name": "大数据",
        "change_pct": -1.14
      },
      {
        "name": "海绵城市",
        "change_pct": -0.34
      },
      {
        "name": "风电",
        "change_pct": -0.99
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.89
      },
      {
        "name": "数字经济",
        "change_pct": -0.91
      },
      {
        "name": "大基建",
        "change_pct": -0.73
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.61
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.26
      },
      {
        "name": "国企改革",
        "change_pct": -0.32
      },
      {
        "name": "旧改",
        "change_pct": -0.03
      },
      {
        "name": "西部大开发",
        "change_pct": -0.07
      },
      {
        "name": "低空经济",
        "change_pct": -0.66
      },
      {
        "name": "房屋检测",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 64,
    "hot_rank_chg": 67,
    "stock_cnt": 5796,
    "price": "6.78",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "7337306900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "种业",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.28
      },
      {
        "name": "农业种植",
        "change_pct": 8.86
      },
      {
        "name": "化肥",
        "change_pct": 2.88
      },
      {
        "name": "转基因",
        "change_pct": 7.67
      },
      {
        "name": "土地流转",
        "change_pct": 3.34
      },
      {
        "name": "农垦",
        "change_pct": 5.32
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.89
      },
      {
        "name": "大农业",
        "change_pct": 2.55
      },
      {
        "name": "国企改革",
        "change_pct": -0.32
      },
      {
        "name": "大豆",
        "change_pct": 7.27
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 70,
    "hot_rank_chg": -34,
    "stock_cnt": 5796,
    "price": "12.58",
    "change": "-8.97",
    "market_id": "33",
    "circulate_market_value": "6203904500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.45
      },
      {
        "name": "彩票",
        "change_pct": -1.47
      },
      {
        "name": "人工智能",
        "change_pct": -0.88
      },
      {
        "name": "包装印刷",
        "change_pct": -0.86
      },
      {
        "name": "数字经济",
        "change_pct": -0.91
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.61
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.81
      },
      {
        "name": "ETC",
        "change_pct": -1.13
      },
      {
        "name": "词元概念/Token",
        "change_pct": -2.89
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.68
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.06
      },
      {
        "name": "英伟达概念",
        "change_pct": -0.21
      },
      {
        "name": "区块链",
        "change_pct": -1.23
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 71,
    "hot_rank_chg": -29,
    "stock_cnt": 5796,
    "price": "4.49",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "3435481900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.81
      },
      {
        "name": "股权转让",
        "change_pct": -0.47
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.47
      },
      {
        "name": "医药商业",
        "change_pct": -0.52
      },
      {
        "name": "保健品",
        "change_pct": -0.05
      },
      {
        "name": "民营医院",
        "change_pct": -1.19
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "食品",
        "change_pct": 1.17
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.46
      },
      {
        "name": "口腔",
        "change_pct": -0.89
      },
      {
        "name": "医美",
        "change_pct": -1.4
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.82
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 72,
    "hot_rank_chg": 26,
    "stock_cnt": 5796,
    "price": "7.11",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "4563078700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "粮食安全",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 0.88
      },
      {
        "name": "农业种植",
        "change_pct": 8.86
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.23
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.89
      },
      {
        "name": "休闲食品",
        "change_pct": 1.95
      },
      {
        "name": "食品",
        "change_pct": 1.17
      },
      {
        "name": "食品安全",
        "change_pct": -0.38
      },
      {
        "name": "社区团购",
        "change_pct": 2.47
      },
      {
        "name": "大农业",
        "change_pct": 2.55
      },
      {
        "name": "预制菜",
        "change_pct": 1.95
      },
      {
        "name": "人造肉",
        "change_pct": 3.67
      },
      {
        "name": "国企改革",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 80,
    "hot_rank_chg": 49,
    "stock_cnt": 5796,
    "price": "6.26",
    "change": "3.47",
    "market_id": "33",
    "circulate_market_value": "13768170000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": 0.38
      },
      {
        "name": "轮胎",
        "change_pct": -0.27
      },
      {
        "name": "冷链",
        "change_pct": 0.15
      },
      {
        "name": "机器人",
        "change_pct": 0.1
      },
      {
        "name": "智能制造",
        "change_pct": -0.08
      },
      {
        "name": "工业母机",
        "change_pct": 0.42
      },
      {
        "name": "减速器",
        "change_pct": 1.18
      },
      {
        "name": "头盔",
        "change_pct": -0.75
      },
      {
        "name": "人形机器人",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 86,
    "hot_rank_chg": -32,
    "stock_cnt": 5796,
    "price": "7.76",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3719523000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "化学制药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.81
      },
      {
        "name": "医药商业",
        "change_pct": -0.52
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "流感",
        "change_pct": -0.69
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 89,
    "hot_rank_chg": 12,
    "stock_cnt": 5796,
    "price": "7.92",
    "change": "-3.88",
    "market_id": "33",
    "circulate_market_value": "12875494700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.6
      },
      {
        "name": "电竞",
        "change_pct": -1.12
      },
      {
        "name": "手游",
        "change_pct": -1.66
      },
      {
        "name": "强势人气股",
        "change_pct": -0.53
      },
      {
        "name": "人工智能",
        "change_pct": -0.88
      },
      {
        "name": "游戏",
        "change_pct": -1.56
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.91
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.48
      },
      {
        "name": "快手概念股",
        "change_pct": -2.32
      },
      {
        "name": "元宇宙",
        "change_pct": -1.11
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.32
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.61
      },
      {
        "name": "web3.0",
        "change_pct": -1.56
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.81
      },
      {
        "name": "数据要素",
        "change_pct": -1.11
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.6
      },
      {
        "name": "AI营销",
        "change_pct": -2.17
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.68
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.16
      },
      {
        "name": "人工智能大模型",
        "change_pct": -1.06
      },
      {
        "name": "人形机器人",
        "change_pct": 0.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.98
      },
      {
        "name": "多模态",
        "change_pct": -1.36
      },
      {
        "name": "AI视频",
        "change_pct": -2.0
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.7
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 91,
    "hot_rank_chg": 356,
    "stock_cnt": 5796,
    "price": "3.75",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4790999300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 2.12
      },
      {
        "name": "化肥",
        "change_pct": 2.88
      },
      {
        "name": "保健品",
        "change_pct": -0.05
      },
      {
        "name": "民营医院",
        "change_pct": -1.19
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "煤化工",
        "change_pct": 1.77
      },
      {
        "name": "食品",
        "change_pct": 1.17
      },
      {
        "name": "大农业",
        "change_pct": 2.55
      },
      {
        "name": "干细胞",
        "change_pct": -0.93
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -1.01
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 95,
    "hot_rank_chg": 156,
    "stock_cnt": 5796,
    "price": "11.90",
    "change": "3.12",
    "market_id": "17",
    "circulate_market_value": "6900674300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": -0.52
      },
      {
        "name": "民营医院",
        "change_pct": -1.19
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "振兴东北",
        "change_pct": -0.06
      },
      {
        "name": "宠物经济",
        "change_pct": 0.35
      },
      {
        "name": "眼科",
        "change_pct": -0.7
      }
    ]
  },
  {
    "code": "002248",
    "name": "华东数控",
    "hot_rank": 96,
    "hot_rank_chg": 117,
    "stock_cnt": 5796,
    "price": "12.44",
    "change": "5.42",
    "market_id": "33",
    "circulate_market_value": "3825245300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高铁轨交",
        "change_pct": -0.34
      },
      {
        "name": "智能制造",
        "change_pct": -0.08
      },
      {
        "name": "工业母机",
        "change_pct": 0.42
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002081", "name": "金螳螂", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5796, "price": "6.27", "change": "7.73", "market_id": "33", "circulate_market_value": "16579406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.53}, {"name": "装修装饰", "change_pct": 0.11}, {"name": "装配式建筑", "change_pct": 0.01}, {"name": "航天", "change_pct": -0.39}, {"name": "旧改", "change_pct": -0.03}]}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 13, "stock_cnt": 5796, "price": "6.47", "change": "6.42", "market_id": "33", "circulate_market_value": "228825360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.24}, {"name": "手机产业链", "change_pct": -0.02}, {"name": "超高清视频", "change_pct": -1.0}, {"name": "苹果产业链", "change_pct": 0.12}, {"name": "电竞", "change_pct": -1.12}, {"name": "半导体", "change_pct": 0.29}, {"name": "人工智能", "change_pct": -0.88}, {"name": "互联网医疗", "change_pct": -1.21}, {"name": "VR&AR", "change_pct": -0.29}, {"name": "OLED", "change_pct": 0.66}, {"name": "京津冀", "change_pct": -0.15}, {"name": "物联网", "change_pct": -0.41}, {"name": "指纹识别", "change_pct": 0.17}, {"name": "汽车零部件", "change_pct": -0.03}, {"name": "白马股", "change_pct": 0.04}, {"name": "智能制造", "change_pct": -0.08}, {"name": "小米概念股", "change_pct": -0.18}, {"name": "国产芯片", "change_pct": -0.04}, {"name": "液晶面板/LCD", "change_pct": 0.62}, {"name": "全息概念", "change_pct": -0.44}, {"name": "理想汽车概念股", "change_pct": -0.44}, {"name": "MicroLED", "change_pct": 1.22}, {"name": "钙钛矿电池", "change_pct": 0.8}, {"name": "智能手表", "change_pct": -0.2}, {"name": "MiniLED", "change_pct": 0.44}, {"name": "传感器", "change_pct": -0.26}, {"name": "大硅片", "change_pct": 4.4}, {"name": "AI PC", "change_pct": -0.11}, {"name": "华为产业链", "change_pct": -0.52}, {"name": "回购", "change_pct": -0.23}, {"name": "光电共封装CPO", "change_pct": 0.3}, {"name": "智能眼镜/MR头显", "change_pct": -0.16}, {"name": "玻璃基板封装", "change_pct": 1.62}]}, {"code": "600206", "name": "有研新材", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "57.72", "change": "3.33", "market_id": "17", "circulate_market_value": "48863058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 4, "hot_rank_chg": 19, "stock_cnt": 5796, "price": "30.00", "change": "10.01", "market_id": "17", "circulate_market_value": "7268100000.00", "change_type": "1", "change_section": "21", "change_days": "12", "change_reason": "复牌"}, {"code": "000636", "name": "风华高科", "hot_rank": 5, "hot_rank_chg": 12, "stock_cnt": 5796, "price": "62.34", "change": "-1.73", "market_id": "33", "circulate_market_value": "72128176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 6, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "65.41", "change": "0.54", "market_id": "17", "circulate_market_value": "160493000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": -5, "stock_cnt": 5796, "price": "23.00", "change": "-3.60", "market_id": "17", "circulate_market_value": "48105470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "38.61", "change": "10.00", "market_id": "17", "circulate_market_value": "15482610000.00", "change_type": "1", "change_section": "16", "change_days": "11", "change_reason": "乳品"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 9, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "59.19", "change": "-4.22", "market_id": "17", "circulate_market_value": "266534880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 10, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "13.02", "change": "9.97", "market_id": "17", "circulate_market_value": "8857762200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“牛”字炒作"}, {"code": "002156", "name": "通富微电", "hot_rank": 11, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "70.66", "change": "2.02", "market_id": "33", "circulate_market_value": "107223174000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "37.48", "change": "-4.36", "market_id": "33", "circulate_market_value": "40512818000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 13, "hot_rank_chg": 8, "stock_cnt": 5796, "price": "14.32", "change": "4.99", "market_id": "17", "circulate_market_value": "18375404000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5796, "price": "108.30", "change": "-1.23", "market_id": "33", "circulate_market_value": "70723758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "39.25", "change": "-4.34", "market_id": "33", "circulate_market_value": "112257852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 16, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "12.90", "change": "-1.75", "market_id": "17", "circulate_market_value": "23079884000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.34}, {"name": "纯碱", "change_pct": 0.52}, {"name": "食品", "change_pct": 1.17}, {"name": "土壤修复", "change_pct": -0.91}, {"name": "东数西算/算力", "change_pct": -1.61}, {"name": "OpenClaw概念", "change_pct": -1.5}, {"name": "DeepSeek概念股", "change_pct": -1.66}]}, {"code": "600584", "name": "长电科技", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5796, "price": "85.42", "change": "-0.50", "market_id": "17", "circulate_market_value": "152851790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 18, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "9.12", "change": "1.22", "market_id": "17", "circulate_market_value": "22968810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.6}, {"name": "工业大麻", "change_pct": -1.34}, {"name": "中药", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "保健品", "change_pct": -0.05}, {"name": "民营医院", "change_pct": -1.19}, {"name": "医药", "change_pct": -0.85}, {"name": "化学原料药", "change_pct": -0.75}, {"name": "流感", "change_pct": -0.69}, {"name": "振兴东北", "change_pct": -0.06}, {"name": "食品", "change_pct": 1.17}]}, {"code": "603118", "name": "共进股份", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "19.01", "change": "-1.60", "market_id": "17", "circulate_market_value": "14966124000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 20, "hot_rank_chg": 24, "stock_cnt": 5796, "price": "15.59", "change": "-7.86", "market_id": "17", "circulate_market_value": "22959499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "136.47", "change": "-4.46", "market_id": "17", "circulate_market_value": "49227922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688826", "name": "频准激光", "hot_rank": 22, "hot_rank_chg": 728, "stock_cnt": 5796, "price": "1152.00", "change": "516.44", "market_id": "17", "circulate_market_value": "8775661800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 24, "hot_rank_chg": -12, "stock_cnt": 5796, "price": "436.74", "change": "-1.64", "market_id": "17", "circulate_market_value": "0.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 25, "hot_rank_chg": 42, "stock_cnt": 5796, "price": "3.41", "change": "10.00", "market_id": "33", "circulate_market_value": "15930663000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "拟定增", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.45}, {"name": "股权转让", "change_pct": -0.47}, {"name": "房地产", "change_pct": -0.38}, {"name": "京津冀", "change_pct": -0.15}, {"name": "旅游", "change_pct": 0.06}, {"name": "国产芯片", "change_pct": -0.04}, {"name": "内存", "change_pct": -0.71}, {"name": "闪存", "change_pct": -0.89}, {"name": "IP经济/谷子经济", "change_pct": -0.7}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 26, "hot_rank_chg": 58, "stock_cnt": 5796, "price": "72.94", "change": "3.48", "market_id": "33", "circulate_market_value": "106014789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "35.29", "change": "-1.70", "market_id": "17", "circulate_market_value": "120442993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 28, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "11.19", "change": "-4.77", "market_id": "17", "circulate_market_value": "4841618100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -0.47}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "光伏", "change_pct": -0.26}, {"name": "无线耳机", "change_pct": -0.18}, {"name": "华为产业链", "change_pct": -0.52}, {"name": "光伏胶膜", "change_pct": -0.08}]}, {"code": "002185", "name": "华天科技", "hot_rank": 29, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "18.70", "change": "-1.58", "market_id": "33", "circulate_market_value": "62133588000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 30, "hot_rank_chg": 139, "stock_cnt": 5796, "price": "10.80", "change": "9.98", "market_id": "17", "circulate_market_value": "38746833000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板", "xgb_concepts": [{"name": "玻璃", "change_pct": 0.65}, {"name": "OLED", "change_pct": 0.66}, {"name": "液晶面板/LCD", "change_pct": 0.62}, {"name": "国企改革", "change_pct": -0.32}, {"name": "玻璃基板封装", "change_pct": 1.62}, {"name": "陕西国企改革", "change_pct": 0.01}]}, {"code": "000735", "name": "罗牛山", "hot_rank": 31, "hot_rank_chg": 17, "stock_cnt": 5796, "price": "6.18", "change": "9.96", "market_id": "33", "circulate_market_value": "7112546700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“牛”字炒作", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.48}, {"name": "养猪", "change_pct": 2.86}, {"name": "农垦", "change_pct": 5.32}, {"name": "冷链", "change_pct": 0.15}, {"name": "大数据", "change_pct": -1.14}, {"name": "教育", "change_pct": -0.01}, {"name": "海南概念", "change_pct": 1.32}, {"name": "自由贸易港", "change_pct": 0.5}, {"name": "海南自由贸易港", "change_pct": 1.4}, {"name": "赛马", "change_pct": 4.69}, {"name": "大农业", "change_pct": 2.55}, {"name": "职业教育", "change_pct": 0.2}, {"name": "自贸区", "change_pct": 0.17}]}, {"code": "603823", "name": "百合花", "hot_rank": 32, "hot_rank_chg": 18, "stock_cnt": 5796, "price": "85.90", "change": "10.00", "market_id": "17", "circulate_market_value": "35765986000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶"}, {"code": "002437", "name": "誉衡药业", "hot_rank": 33, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "4.76", "change": "-4.42", "market_id": "33", "circulate_market_value": "9996732300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "维生素", "change_pct": 1.97}, {"name": "基因测序", "change_pct": -0.93}, {"name": "民营医院", "change_pct": -1.19}, {"name": "医药", "change_pct": -0.85}, {"name": "化学原料药", "change_pct": -0.75}, {"name": "PD-1抑制剂", "change_pct": -2.35}]}, {"code": "601700", "name": "风范股份", "hot_rank": 34, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "7.31", "change": "1.25", "market_id": "17", "circulate_market_value": "8324315900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.13}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "光伏", "change_pct": -0.26}, {"name": "特高压", "change_pct": -1.14}, {"name": "智能电网", "change_pct": -0.36}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 35, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "44.91", "change": "-3.04", "market_id": "17", "circulate_market_value": "178363970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "13.50", "change": "-3.71", "market_id": "17", "circulate_market_value": "5191393100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 37, "hot_rank_chg": 41, "stock_cnt": 5796, "price": "14.83", "change": "4.81", "market_id": "17", "circulate_market_value": "73987148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 38, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "37.54", "change": "9.99", "market_id": "17", "circulate_market_value": "31113571000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "定增过会"}, {"code": "001309", "name": "德明利", "hot_rank": 39, "hot_rank_chg": -17, "stock_cnt": 5796, "price": "437.33", "change": "0.44", "market_id": "33", "circulate_market_value": "72172156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 40, "hot_rank_chg": 432, "stock_cnt": 5796, "price": "6.82", "change": "4.12", "market_id": "33", "circulate_market_value": "13060930500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 0.17}, {"name": "林业", "change_pct": 1.39}, {"name": "碳中和", "change_pct": -0.65}, {"name": "自贸区", "change_pct": 0.17}]}, {"code": "300189", "name": "神农种业", "hot_rank": 41, "hot_rank_chg": 158, "stock_cnt": 5796, "price": "6.23", "change": "20.04", "market_id": "33", "circulate_market_value": "5521340100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "种业", "xgb_concepts": [{"name": "农业种植", "change_pct": 8.86}, {"name": "土地流转", "change_pct": 3.34}, {"name": "海南概念", "change_pct": 1.32}, {"name": "自由贸易港", "change_pct": 0.5}, {"name": "海南自由贸易港", "change_pct": 1.4}, {"name": "大农业", "change_pct": 2.55}, {"name": "水产养殖", "change_pct": 4.08}, {"name": "自贸区", "change_pct": 0.17}]}, {"code": "001258", "name": "立新能源", "hot_rank": 42, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "13.35", "change": "-7.29", "market_id": "33", "circulate_market_value": "12459843500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 43, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "19.47", "change": "-4.09", "market_id": "33", "circulate_market_value": "22905849000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 44, "hot_rank_chg": 18, "stock_cnt": 5796, "price": "20.93", "change": "9.98", "market_id": "17", "circulate_market_value": "3348800000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "SPD"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "42.16", "change": "-0.80", "market_id": "17", "circulate_market_value": "61637701000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 46, "hot_rank_chg": -14, "stock_cnt": 5796, "price": "213.82", "change": "-1.76", "market_id": "33", "circulate_market_value": "296423310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 47, "hot_rank_chg": -19, "stock_cnt": 5796, "price": "167.18", "change": "0.17", "market_id": "17", "circulate_market_value": "413482990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 48, "hot_rank_chg": 37, "stock_cnt": 5796, "price": "74.26", "change": "1.01", "market_id": "33", "circulate_market_value": "63349200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 49, "hot_rank_chg": 17, "stock_cnt": 5796, "price": "383.60", "change": "1.88", "market_id": "17", "circulate_market_value": "155871380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 50, "hot_rank_chg": -5, "stock_cnt": 5796, "price": "97.00", "change": "20.00", "market_id": "33", "circulate_market_value": "19843792000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中际旭创入股"}, {"code": "300308", "name": "中际旭创", "hot_rank": 51, "hot_rank_chg": -21, "stock_cnt": 5796, "price": "988.10", "change": "-1.29", "market_id": "33", "circulate_market_value": "1096731490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 52, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "6.16", "change": "-4.20", "market_id": "17", "circulate_market_value": "76359909000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.28}, {"name": "核电", "change_pct": -0.56}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "电力体制改革", "change_pct": -0.85}, {"name": "水电", "change_pct": -1.01}, {"name": "火电", "change_pct": -1.02}, {"name": "光伏", "change_pct": -0.26}, {"name": "风电", "change_pct": -0.99}, {"name": "国企改革", "change_pct": -0.32}, {"name": "算电协同", "change_pct": -1.41}]}, {"code": "605358", "name": "立昂微", "hot_rank": 53, "hot_rank_chg": 185, "stock_cnt": 5796, "price": "49.62", "change": "6.50", "market_id": "17", "circulate_market_value": "38316533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 54, "hot_rank_chg": -29, "stock_cnt": 5796, "price": "184.20", "change": "-0.06", "market_id": "17", "circulate_market_value": "28880813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 55, "hot_rank_chg": 24, "stock_cnt": 5796, "price": "13.14", "change": "5.04", "market_id": "33", "circulate_market_value": "3738088300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 56, "hot_rank_chg": 201, "stock_cnt": 5796, "price": "38.23", "change": "10.01", "market_id": "17", "circulate_market_value": "12309034700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板上游"}, {"code": "000021", "name": "深科技", "hot_rank": 57, "hot_rank_chg": -23, "stock_cnt": 5796, "price": "41.60", "change": "-2.35", "market_id": "33", "circulate_market_value": "65484872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 58, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "66.20", "change": "-2.98", "market_id": "17", "circulate_market_value": "1313678910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 59, "hot_rank_chg": 34, "stock_cnt": 5796, "price": "7.18", "change": "5.43", "market_id": "33", "circulate_market_value": "7416479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.54}, {"name": "锂电池", "change_pct": -0.53}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "铜箔/覆铜板", "change_pct": -1.17}, {"name": "粤港澳大湾区", "change_pct": 0.31}, {"name": "新能源汽车", "change_pct": -0.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -0.73}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 60, "hot_rank_chg": 11, "stock_cnt": 5796, "price": "5.06", "change": "-4.89", "market_id": "33", "circulate_market_value": "29625280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -0.24}, {"name": "人工智能", "change_pct": -0.88}, {"name": "水利", "change_pct": -0.73}, {"name": "直播/短视频", "change_pct": -2.31}, {"name": "大数据", "change_pct": -1.14}, {"name": "园林", "change_pct": -1.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.18}, {"name": "数字经济", "change_pct": -0.91}, {"name": "腾讯概念股", "change_pct": -1.48}, {"name": "理想汽车概念股", "change_pct": -0.44}, {"name": "第三代半导体", "change_pct": 0.61}, {"name": "快手概念股", "change_pct": -2.32}, {"name": "IGBT", "change_pct": 0.4}, {"name": "虚拟数字人", "change_pct": -1.32}, {"name": "AIGC概念", "change_pct": -1.81}, {"name": "字节跳动概念股", "change_pct": -1.6}, {"name": "氮化镓", "change_pct": 0.13}, {"name": "AI营销", "change_pct": -2.17}, {"name": "多模态", "change_pct": -1.36}, {"name": "液冷服务器", "change_pct": -0.62}, {"name": "小红书概念股", "change_pct": -2.08}, {"name": "区块链", "change_pct": -1.23}]}, {"code": "000802", "name": "北京文化", "hot_rank": 61, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "4.84", "change": "-9.19", "market_id": "33", "circulate_market_value": "3463233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.98}, {"name": "旅游", "change_pct": 0.06}, {"name": "IP经济/谷子经济", "change_pct": -0.7}]}, {"code": "000779", "name": "甘咨询", "hot_rank": 62, "hot_rank_chg": -9, "stock_cnt": 5796, "price": "10.99", "change": "3.39", "market_id": "33", "circulate_market_value": "5107855300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.13}, {"name": "云计算数据中心", "change_pct": -1.15}, {"name": "水利", "change_pct": -0.73}, {"name": "大数据", "change_pct": -1.14}, {"name": "海绵城市", "change_pct": -0.34}, {"name": "风电", "change_pct": -0.99}, {"name": "乡村振兴", "change_pct": 1.89}, {"name": "数字经济", "change_pct": -0.91}, {"name": "大基建", "change_pct": -0.73}, {"name": "东数西算/算力", "change_pct": -1.61}, {"name": "新型城镇化", "change_pct": -0.26}, {"name": "国企改革", "change_pct": -0.32}, {"name": "旧改", "change_pct": -0.03}, {"name": "西部大开发", "change_pct": -0.07}, {"name": "低空经济", "change_pct": -0.66}, {"name": "房屋检测", "change_pct": 0.13}]}, {"code": "600580", "name": "卧龙电驱", "hot_rank": 63, "hot_rank_chg": 112, "stock_cnt": 5796, "price": "37.87", "change": "7.40", "market_id": "17", "circulate_market_value": "58987543000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 64, "hot_rank_chg": 67, "stock_cnt": 5796, "price": "6.78", "change": "10.06", "market_id": "17", "circulate_market_value": "7337306900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "种业", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.28}, {"name": "农业种植", "change_pct": 8.86}, {"name": "化肥", "change_pct": 2.88}, {"name": "转基因", "change_pct": 7.67}, {"name": "土地流转", "change_pct": 3.34}, {"name": "农垦", "change_pct": 5.32}, {"name": "乡村振兴", "change_pct": 1.89}, {"name": "大农业", "change_pct": 2.55}, {"name": "国企改革", "change_pct": -0.32}, {"name": "大豆", "change_pct": 7.27}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 65, "hot_rank_chg": -19, "stock_cnt": 5796, "price": "32.76", "change": "-3.39", "market_id": "33", "circulate_market_value": "24812919000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603936", "name": "博敏电子", "hot_rank": 66, "hot_rank_chg": 17, "stock_cnt": 5796, "price": "19.12", "change": "10.01", "market_id": "17", "circulate_market_value": "12053209800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI服务器PCB"}, {"code": "002896", "name": "中大力德", "hot_rank": 67, "hot_rank_chg": 164, "stock_cnt": 5796, "price": "84.89", "change": "6.11", "market_id": "33", "circulate_market_value": "16682809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 68, "hot_rank_chg": -11, "stock_cnt": 5796, "price": "17.87", "change": "-5.25", "market_id": "33", "circulate_market_value": "12424350400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 69, "hot_rank_chg": -29, "stock_cnt": 5796, "price": "139.41", "change": "-3.52", "market_id": "17", "circulate_market_value": "336221910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 70, "hot_rank_chg": -34, "stock_cnt": 5796, "price": "12.58", "change": "-8.97", "market_id": "33", "circulate_market_value": "6203904500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.45}, {"name": "彩票", "change_pct": -1.47}, {"name": "人工智能", "change_pct": -0.88}, {"name": "包装印刷", "change_pct": -0.86}, {"name": "数字经济", "change_pct": -0.91}, {"name": "东数西算/算力", "change_pct": -1.61}, {"name": "AIGC概念", "change_pct": -1.81}, {"name": "ETC", "change_pct": -1.13}, {"name": "词元概念/Token", "change_pct": -2.89}, {"name": "ChatGPT", "change_pct": -1.68}, {"name": "人工智能大模型", "change_pct": -1.06}, {"name": "英伟达概念", "change_pct": -0.21}, {"name": "区块链", "change_pct": -1.23}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 71, "hot_rank_chg": -29, "stock_cnt": 5796, "price": "4.49", "change": "-10.02", "market_id": "33", "circulate_market_value": "3435481900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.81}, {"name": "股权转让", "change_pct": -0.47}, {"name": "优化生育（三孩）", "change_pct": -0.47}, {"name": "医药商业", "change_pct": -0.52}, {"name": "保健品", "change_pct": -0.05}, {"name": "民营医院", "change_pct": -1.19}, {"name": "医药", "change_pct": -0.85}, {"name": "食品", "change_pct": 1.17}, {"name": "辅助生殖", "change_pct": -1.46}, {"name": "口腔", "change_pct": -0.89}, {"name": "医美", "change_pct": -1.4}, {"name": "新冠病毒防治", "change_pct": -0.82}]}, {"code": "600127", "name": "金健米业", "hot_rank": 72, "hot_rank_chg": 26, "stock_cnt": 5796, "price": "7.11", "change": "10.06", "market_id": "17", "circulate_market_value": "4563078700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "粮食安全", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 0.88}, {"name": "农业种植", "change_pct": 8.86}, {"name": "湖南国企改革", "change_pct": -0.23}, {"name": "乡村振兴", "change_pct": 1.89}, {"name": "休闲食品", "change_pct": 1.95}, {"name": "食品", "change_pct": 1.17}, {"name": "食品安全", "change_pct": -0.38}, {"name": "社区团购", "change_pct": 2.47}, {"name": "大农业", "change_pct": 2.55}, {"name": "预制菜", "change_pct": 1.95}, {"name": "人造肉", "change_pct": 3.67}, {"name": "国企改革", "change_pct": -0.32}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 73, "hot_rank_chg": -18, "stock_cnt": 5796, "price": "124.21", "change": "-6.06", "market_id": "33", "circulate_market_value": "102972021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 74, "hot_rank_chg": 25, "stock_cnt": 5796, "price": "40.04", "change": "10.00", "market_id": "33", "circulate_market_value": "31328704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 75, "hot_rank_chg": 41, "stock_cnt": 5796, "price": "64.02", "change": "10.00", "market_id": "17", "circulate_market_value": "8365698300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 76, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "20.04", "change": "-8.79", "market_id": "33", "circulate_market_value": "9064869600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 77, "hot_rank_chg": -21, "stock_cnt": 5796, "price": "17.84", "change": "1.42", "market_id": "17", "circulate_market_value": "20231961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 78, "hot_rank_chg": -26, "stock_cnt": 5796, "price": "29.39", "change": "6.95", "market_id": "17", "circulate_market_value": "36250637000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 79, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "452.21", "change": "-3.10", "market_id": "33", "circulate_market_value": "567181300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 80, "hot_rank_chg": 49, "stock_cnt": 5796, "price": "6.26", "change": "3.47", "market_id": "33", "circulate_market_value": "13768170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": 0.38}, {"name": "轮胎", "change_pct": -0.27}, {"name": "冷链", "change_pct": 0.15}, {"name": "机器人", "change_pct": 0.1}, {"name": "智能制造", "change_pct": -0.08}, {"name": "工业母机", "change_pct": 0.42}, {"name": "减速器", "change_pct": 1.18}, {"name": "头盔", "change_pct": -0.75}, {"name": "人形机器人", "change_pct": 0.59}]}, {"code": "002436", "name": "兴森科技", "hot_rank": 81, "hot_rank_chg": -48, "stock_cnt": 5796, "price": "37.56", "change": "-1.93", "market_id": "33", "circulate_market_value": "57013467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 82, "hot_rank_chg": -47, "stock_cnt": 5796, "price": "291.44", "change": "1.70", "market_id": "33", "circulate_market_value": "317199810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 83, "hot_rank_chg": 192, "stock_cnt": 5796, "price": "49.48", "change": "13.43", "market_id": "17", "circulate_market_value": "61864936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 84, "hot_rank_chg": 20, "stock_cnt": 5796, "price": "14.81", "change": "-3.83", "market_id": "33", "circulate_market_value": "51508147000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 85, "hot_rank_chg": -22, "stock_cnt": 5796, "price": "57.60", "change": "-7.10", "market_id": "33", "circulate_market_value": "21225789000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 86, "hot_rank_chg": -32, "stock_cnt": 5796, "price": "7.76", "change": "10.07", "market_id": "17", "circulate_market_value": "3719523000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "化学制药", "xgb_concepts": [{"name": "中药", "change_pct": -0.81}, {"name": "医药商业", "change_pct": -0.52}, {"name": "医药", "change_pct": -0.85}, {"name": "流感", "change_pct": -0.69}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 87, "hot_rank_chg": -22, "stock_cnt": 5796, "price": "29.50", "change": "-3.91", "market_id": "17", "circulate_market_value": "20395581000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 88, "hot_rank_chg": -27, "stock_cnt": 5796, "price": "56.50", "change": "3.16", "market_id": "33", "circulate_market_value": "8558111900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 89, "hot_rank_chg": 12, "stock_cnt": 5796, "price": "7.92", "change": "-3.88", "market_id": "33", "circulate_market_value": "12875494700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.6}, {"name": "电竞", "change_pct": -1.12}, {"name": "手游", "change_pct": -1.66}, {"name": "强势人气股", "change_pct": -0.53}, {"name": "人工智能", "change_pct": -0.88}, {"name": "游戏", "change_pct": -1.56}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.91}, {"name": "腾讯概念股", "change_pct": -1.48}, {"name": "快手概念股", "change_pct": -2.32}, {"name": "元宇宙", "change_pct": -1.11}, {"name": "虚拟数字人", "change_pct": -1.32}, {"name": "东数西算/算力", "change_pct": -1.61}, {"name": "web3.0", "change_pct": -1.56}, {"name": "AIGC概念", "change_pct": -1.81}, {"name": "数据要素", "change_pct": -1.11}, {"name": "字节跳动概念股", "change_pct": -1.6}, {"name": "AI营销", "change_pct": -2.17}, {"name": "ChatGPT", "change_pct": -1.68}, {"name": "智能眼镜/MR头显", "change_pct": -0.16}, {"name": "人工智能大模型", "change_pct": -1.06}, {"name": "人形机器人", "change_pct": 0.59}, {"name": "短剧/互动影游", "change_pct": -1.98}, {"name": "多模态", "change_pct": -1.36}, {"name": "AI视频", "change_pct": -2.0}, {"name": "IP经济/谷子经济", "change_pct": -0.7}, {"name": "小红书概念股", "change_pct": -2.08}]}, {"code": "600227", "name": "赤天化", "hot_rank": 91, "hot_rank_chg": 356, "stock_cnt": 5796, "price": "3.75", "change": "9.97", "market_id": "17", "circulate_market_value": "4790999300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报扭亏", "xgb_concepts": [{"name": "甲醇", "change_pct": 2.12}, {"name": "化肥", "change_pct": 2.88}, {"name": "保健品", "change_pct": -0.05}, {"name": "民营医院", "change_pct": -1.19}, {"name": "医药", "change_pct": -0.85}, {"name": "煤化工", "change_pct": 1.77}, {"name": "食品", "change_pct": 1.17}, {"name": "大农业", "change_pct": 2.55}, {"name": "干细胞", "change_pct": -0.93}, {"name": "阿尔茨海默病", "change_pct": -1.01}]}, {"code": "600397", "name": "江钨装备", "hot_rank": 92, "hot_rank_chg": 94, "stock_cnt": 5796, "price": "18.84", "change": "0.91", "market_id": "17", "circulate_market_value": "18650844000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600598", "name": "北大荒", "hot_rank": 93, "hot_rank_chg": 388, "stock_cnt": 5796, "price": "13.46", "change": "9.97", "market_id": "17", "circulate_market_value": "23927572000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念"}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 94, "hot_rank_chg": 263, "stock_cnt": 5796, "price": "18.11", "change": "10.02", "market_id": "17", "circulate_market_value": "7587502700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟衬底"}, {"code": "600829", "name": "人民同泰", "hot_rank": 95, "hot_rank_chg": 156, "stock_cnt": 5796, "price": "11.90", "change": "3.12", "market_id": "17", "circulate_market_value": "6900674300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": -0.52}, {"name": "民营医院", "change_pct": -1.19}, {"name": "医药", "change_pct": -0.85}, {"name": "振兴东北", "change_pct": -0.06}, {"name": "宠物经济", "change_pct": 0.35}, {"name": "眼科", "change_pct": -0.7}]}, {"code": "002248", "name": "华东数控", "hot_rank": 96, "hot_rank_chg": 117, "stock_cnt": 5796, "price": "12.44", "change": "5.42", "market_id": "33", "circulate_market_value": "3825245300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高铁轨交", "change_pct": -0.34}, {"name": "智能制造", "change_pct": -0.08}, {"name": "工业母机", "change_pct": 0.42}]}, {"code": "300433", "name": "蓝思科技", "hot_rank": 97, "hot_rank_chg": 103, "stock_cnt": 5796, "price": "39.12", "change": "5.76", "market_id": "33", "circulate_market_value": "194414660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 98, "hot_rank_chg": -22, "stock_cnt": 5796, "price": "80.97", "change": "0.36", "market_id": "33", "circulate_market_value": "118769371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300895", "name": "铜牛信息", "hot_rank": 99, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "60.63", "change": "3.10", "market_id": "33", "circulate_market_value": "8377383800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 100, "hot_rank_chg": 19, "stock_cnt": 5796, "price": "35.11", "change": "-2.53", "market_id": "33", "circulate_market_value": "141409780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600371", "name": "万向德农", "price": 8.14, "change_pct": 10.0, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.7, "first_limit_up": 1787016732, "break_limit_up_times": 2}, {"code": "000526", "name": "学大教育", "price": 35.54, "change_pct": 10.0, "reason": "国内最大的K12课外辅导服务提供商之一，上半年净利润同比增长30.85%，报告期内，受行业季节性因素影响，公司个性化教育业务上半年需求与盈利能力均呈季节性回升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.64, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "600359", "name": "新农开发", "price": 6.93, "change_pct": 10.0, "reason": "新疆生产建设兵团农一师旗下；主营产品涉及棉花（包括长绒棉、陆地棉、彩色棉、抗虫棉），皮棉销量1.35万吨、棉种销量5306吨", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 9.63, "first_limit_up": 1787034417, "break_limit_up_times": 0}, {"code": "603936", "name": "博敏电子", "price": 19.12, "change_pct": 10.01, "reason": "公司为国内PCB细分HDI板龙头，现已为多家客户批量提供400G、800G光模块产品", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 15.59, "first_limit_up": 1787016664, "break_limit_up_times": 29}, {"code": "603708", "name": "家家悦", "price": 10.27, "change_pct": 9.96, "reason": "公司主营连锁超市经营，以大卖场和综合超市为主要业态，加强新零售业务推广，推动O2O及社区团购业务在公司连锁网络布局区域内全覆盖", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.22, "first_limit_up": 1787016779, "break_limit_up_times": 3}, {"code": "300313", "name": "天山生物", "price": 12.88, "change_pct": 20.04, "reason": "我国最大的牛品种改良产品及服务提供商之一；公司主要业务为种牛、奶牛的养殖、销售和进出口，主营涵盖生鲜牛乳的收购和销售，牛奶直接销售给各大乳品加工企业", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 7.64, "first_limit_up": 1787016690, "break_limit_up_times": 0}, {"code": "603823", "name": "百合花", "price": 85.9, "change_pct": 10.0, "reason": "1、公司拟投1亿元建设年产1000吨聚醚醚酮PEEK材料项目，产品面向人形机器人、新能源汽车、航空航天等高端制造领域；\n2、公司目前是国内少数具备生产全色谱颜料能力的生产企业，拟以自筹资金投入“年产3000吨电池级碳酸锂项目”，开发的普鲁士蓝（白）主要应用于钠离子电池正极材料；\n3、COFS 材料可用于固态电池，公司在COFS方面有做过课题研究，并申请了相关专利；\n4、公司生产的高性能颜料已应用于半导体领域液晶面板用光刻胶，并实现吨级销售", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 3.18, "first_limit_up": 1787016952, "break_limit_up_times": 55}, {"code": "301106", "name": "骏成科技", "price": 21.18, "change_pct": 20.0, "reason": "公司产品使用到PCB，PCB由公司设计，由供方协作生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.96, "first_limit_up": 1787016810, "break_limit_up_times": 0}, {"code": "688152", "name": "麒麟信安", "price": 34.98, "change_pct": 20.0, "reason": "公司以操作系统为根技术，形成了 “操作系统-云计算-信息安全” 产品体系", "plates": ["信创"], "limit_up_days": 1, "turnover_ratio": 6.79, "first_limit_up": 1787034408, "break_limit_up_times": 0}, {"code": "002365", "name": "永安药业", "price": 15.55, "change_pct": 9.97, "reason": "公司是牛磺酸行业龙头，上半年净利最高预增290%，主要原因为主营产品牛磺酸的销量增加和销售价格比上年同期上涨", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.04, "first_limit_up": 1787016741, "break_limit_up_times": 0}, {"code": "603221", "name": "爱丽家居", "price": 30, "change_pct": 10.01, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 13.35, "first_limit_up": 1787017489, "break_limit_up_times": 7}, {"code": "600127", "name": "金健米业", "price": 7.11, "change_pct": 10.06, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 8.54, "first_limit_up": 1787016657, "break_limit_up_times": 0}, {"code": "600354", "name": "敦煌种业", "price": 6.99, "change_pct": 10.08, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 23.37, "first_limit_up": 1787034331, "break_limit_up_times": 0}, {"code": "001229", "name": "魅视科技", "price": 50.19, "change_pct": 9.99, "reason": "1、公司AI边缘智能分析平台深度融合边缘计算与CV视觉分析技术，可对存量摄像头进行AI赋能，打造“事前预警-事中干预-事后追溯”的全流程闭环监管体系；\n2、公司产品已应用于航空、航天等相关领域，为中国载人航天工程和探月工程的指挥控制中心提供了“光纤KVMS解决方案”，助力中国首次火星探测“天问一号”成功发射", "plates": ["人工智能大模型"], "limit_up_days": 2, "turnover_ratio": 7.24, "first_limit_up": 1787016669, "break_limit_up_times": 20}, {"code": "300684", "name": "中石科技", "price": 97, "change_pct": 20.0, "reason": "1、中际旭创拟以55.70元/股受让公司控股股东10.47%股份，交易总价17.47亿元，成为公司持股5%以上股东；\n2、公司宜兴子公司主营产品包括液冷模组等，建立相关技术储备和产品线，为国内外多家服务器企业提供液冷等全方位的管理综合解决方案；\n3、公司VC产品在高速光模块中的市场化应用加速落地", "plates": ["股权转让", "液冷服务器"], "limit_up_days": 3, "turnover_ratio": 24.55, "first_limit_up": 1787016792, "break_limit_up_times": 13}, {"code": "600108", "name": "亚盛集团", "price": 3.56, "change_pct": 9.88, "reason": "我国当前最大规模的农艺种植基地；公司主营啤酒花、苜蓿牧草、马铃薯、制种玉米、大麦、食葵、果蔬等作物规模化种植", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.38, "first_limit_up": 1787016982, "break_limit_up_times": 1}, {"code": "603400", "name": "华之杰", "price": 48.14, "change_pct": 10.01, "reason": "公司产品作为扫地机器人的功能部件，可以应用于扫地机器人中", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 19.94, "first_limit_up": 1787019073, "break_limit_up_times": 2}, {"code": "603406", "name": "天富龙", "price": 29.56, "change_pct": 10.01, "reason": "公司上半年净利润同比增长12.09%，拟10派5元", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.85, "first_limit_up": 1787017234, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 13.02, "change_pct": 9.97, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 18.76, "first_limit_up": 1787018431, "break_limit_up_times": 0}, {"code": "000998", "name": "隆平高科", "price": 9.22, "change_pct": 10.02, "reason": "国内种业龙头", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1787035227, "break_limit_up_times": 0}, {"code": "301129", "name": "瑞纳智能", "price": 26.46, "change_pct": 20.0, "reason": "1、公司碳化硅项目重点研发和生产第三代半导体材料碳化硅晶体，目前有8英寸电阻炉和电感炉10台；\n2、公司拥有专利“一种基于区块链的生产管理系统及方法”\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.42, "first_limit_up": 1787017452, "break_limit_up_times": 1}, {"code": "000505", "name": "京粮控股", "price": 6.79, "change_pct": 10.05, "reason": "1、海南本地股；公司主营植物油加工、休闲食品、面包制作等，主要产品有大豆油、植物蛋白等大豆制品，拥有大豆蛋白肉生产工艺；\n2、旗下五星级酒店三亚珠江国际度假酒店是海南旅游市场的旗舰酒店之一", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 12.21, "first_limit_up": 1787019573, "break_limit_up_times": 2}, {"code": "688112", "name": "鼎阳科技", "price": 69.83, "change_pct": 20.0, "reason": "国内头部电子测量仪器供应商，可为光模块、AI芯片、电源等下游客户提供测试仪器，用于研发和产线测试", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.17, "first_limit_up": 1787017334, "break_limit_up_times": 0}, {"code": "603112", "name": "华翔股份", "price": 16.59, "change_pct": 10.01, "reason": "白色家电压缩机零部件行业龙头", "plates": ["家电"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1787029950, "break_limit_up_times": 0}, {"code": "603089", "name": "正裕工业", "price": 11.8, "change_pct": 9.97, "reason": "中国汽车零部件减震器行业龙头；公司丝杠产品研发中，设备全进口且与丝杠高度重合，有能力做丝杠", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 2.0, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "600113", "name": "浙江东日", "price": 35.2, "change_pct": 10.0, "reason": "1、公司主营业务收入主要来自于农副产品批发交易市场业务和生鲜食材配送业务；\n2、子公司培安美此前与首都医科大学开展业务洽谈，推进脑机接口技术研发与产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1787031377, "break_limit_up_times": 0}, {"code": "000735", "name": "罗 牛 山", "price": 6.18, "change_pct": 9.96, "reason": "海南本地股，主营畜禽养殖为主", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 10.37, "first_limit_up": 1787017521, "break_limit_up_times": 0}, {"code": "002953", "name": "日丰股份", "price": 10.66, "change_pct": 10.01, "reason": "公司拟投资约7亿元建设年产300吨光纤预制棒、1000万芯公里光纤项目", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 2.17, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "300970", "name": "华绿生物", "price": 21.66, "change_pct": 20.0, "reason": "国内领先的食用菌工厂化生产企业之一", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 9.09, "first_limit_up": 1787017722, "break_limit_up_times": 1}, {"code": "000852", "name": "石化机械", "price": 5.79, "change_pct": 10.08, "reason": "公司主导产品涵盖钻采装备、钻完井工具、集输装备三大领域，覆盖陆地和海洋油气田，具体包括钻头钻具、钻井装备等", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1787017686, "break_limit_up_times": 0}, {"code": "002515", "name": "金字火腿", "price": 8.71, "change_pct": 9.97, "reason": "1、公司主营火腿及特色肉制品，重点发展香肠、腊肉、咸肉等，同时加快休闲食品市场布局；\n2、全资子公司拟不超过3亿元取得中晟微电子不超过20%股权，后者专注于高速光模块核心电芯片的研发设计", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.09, "first_limit_up": 1787016603, "break_limit_up_times": 1}, {"code": "603071", "name": "物产环能", "price": 13.2, "change_pct": 10.0, "reason": "公司主营煤炭流通和热电联产业务，上半年净利润同比增长19.66%，主要系热电板块净利润增加及新能源业务扭亏为盈", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1787016926, "break_limit_up_times": 1}, {"code": "002820", "name": "桂发祥", "price": 12.27, "change_pct": 10.04, "reason": "中国麻花行业龙头", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 2.05, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "002025", "name": "航天电器", "price": 71.68, "change_pct": 10.01, "reason": "1、国内光通信器件行业的重点骨干企业；控股子公司江苏奥雷光电有限公司主营业务为光模块、光互连产品研制生产，产品主要应用于防务、通信、视频监控和工业控制等领域；\n2、中航科工集团旗下，航天连接器龙头，市场占比超过70%", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 6.42, "first_limit_up": 1787034900, "break_limit_up_times": 0}, {"code": "603739", "name": "蔚蓝生物", "price": 13.81, "change_pct": 10.04, "reason": "公司在猪用疫苗领域布局多款产品，其中猪伪狂犬病病毒基因缺失灭活疫苗已获新兽药证书，猪圆环-副猪-链球菌三联灭活疫苗已通过产品质量复核检验", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1787018035, "break_limit_up_times": 1}, {"code": "003043", "name": "华亚智能", "price": 79.53, "change_pct": 10.0, "reason": "1、公司主营精密金属制造，主要为国内外知名半导体设备制造商、品牌商等客户提供各类定制化精密金属结构件；\n2、公司有少量精密金属结构件应用于储能逆变器上", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 9.06, "first_limit_up": 1787032137, "break_limit_up_times": 0}, {"code": "002041", "name": "登海种业", "price": 9.8, "change_pct": 9.99, "reason": "国内杂交玉米种子龙头企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.37, "first_limit_up": 1787018046, "break_limit_up_times": 1}, {"code": "002553", "name": "南方精工", "price": 17.51, "change_pct": 9.99, "reason": "公司互动平台称和国内头部两家减速机厂商合作开发新型减速机；相关样品已送至美国特斯拉，试验结果良好，获得较高认可", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.81, "first_limit_up": 1787022360, "break_limit_up_times": 0}, {"code": "601116", "name": "三江购物", "price": 11.77, "change_pct": 10.0, "reason": "浙江省最大的本土连锁超市，阿里为公司第二大股东；公司门店及线上渠道均有预制菜销售", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1787017710, "break_limit_up_times": 0}, {"code": "601952", "name": "苏垦农发", "price": 9.38, "change_pct": 9.96, "reason": "公司是国内一体化种植龙头，拥有耕地119万亩，一季度净利润同比增加16.66%", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 4.49, "first_limit_up": 1787035467, "break_limit_up_times": 0}, {"code": "600737", "name": "中粮糖业", "price": 15.08, "change_pct": 9.99, "reason": "国内糖业巨头，覆盖糖全产业链，糖总经营量300万吨，占全国糖总消费量的20%", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.21, "first_limit_up": 1787029498, "break_limit_up_times": 2}, {"code": "600367", "name": "红星发展", "price": 38.23, "change_pct": 10.01, "reason": "公司生产的高纯碳酸钡产品以更低杂质和纳米级粒径管控主要应用在液晶玻璃基板行业；康宁为公司直接客户", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 17.51, "first_limit_up": 1787016782, "break_limit_up_times": 6}, {"code": "002124", "name": "天邦食品", "price": 2.5, "change_pct": 10.13, "reason": "公司养猪采用公司+家庭农场养殖模式，同时也是国内规模最大膨化水产饲料企业之一", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.34, "first_limit_up": 1787016936, "break_limit_up_times": 0}, {"code": "002819", "name": "东方中科", "price": 22.78, "change_pct": 10.0, "reason": "1、公司为党政机关、大型国有企业提供计算机网络系统、网络安全系统以及电子政务应用系统的规划、设计、实施、运维、技术支持等全面服务；\n2、控股子公司北汇信息2024年已中标中国一汽“脑机接口测试技术采购”项目，可提供自动驾驶互动测试验证等仿真系统", "plates": ["信创"], "limit_up_days": 1, "turnover_ratio": 3.62, "first_limit_up": 1787035158, "break_limit_up_times": 0}, {"code": "000713", "name": "国投丰乐", "price": 6.5, "change_pct": 9.98, "reason": "国内种业龙头之一，子公司丰乐农化有草甘膦制剂产品", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 7.72, "first_limit_up": 1787036160, "break_limit_up_times": 0}, {"code": "300189", "name": "神农种业", "price": 6.23, "change_pct": 20.04, "reason": "海南本地股；公司为国内遗传智能化育种技术领先供应商，主营产品为杂交水稻种子、玉米种子、蔬菜瓜果种子、棉花种子等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 44.12, "first_limit_up": 1787019663, "break_limit_up_times": 1}, {"code": "601702", "name": "华峰铝业", "price": 16.7, "change_pct": 10.01, "reason": "中国铝箔材十强企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.55, "first_limit_up": 1787034601, "break_limit_up_times": 0}, {"code": "603280", "name": "南方路机", "price": 29.22, "change_pct": 10.02, "reason": "公司核电专用搅拌站已为中核、国核、广核等集团供货，部署近40台设备，实现进口替代", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 5.25, "first_limit_up": 1787021394, "break_limit_up_times": 1}, {"code": "605268", "name": "王力安防", "price": 10.16, "change_pct": 9.96, "reason": "公司已推出了自主研发的机器人安全门，借助人工智能、大数据管理、云平台等相关技术，实现安全、便捷、智能的居家生活，并且通过与华为、富士康、海康威视开展智能管理、智能制造、智能安防等方面产品合作", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1787020269, "break_limit_up_times": 2}, {"code": "002385", "name": "大北农", "price": 3.38, "change_pct": 10.1, "reason": "国内转基因育种技术引领者", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.99, "first_limit_up": 1787035848, "break_limit_up_times": 0}, {"code": "600313", "name": "农发种业", "price": 6.78, "change_pct": 10.06, "reason": "1、中国农业发展集团旗下，国内优质育繁推一体化种子生产商，核心产品是玉米种子、小麦种子和水稻种子，拥有50万亩耕地、90万亩林地和180万亩草地；\n2、公司化肥贸易业务由所属子公司华垦公司开展，主要从事用于农业种植的化肥产品进口，根据国内市场需求进行采购和销售;种业综合实力位居行业前列;种业综合实力位居行业前列", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 8.76, "first_limit_up": 1787017088, "break_limit_up_times": 2}, {"code": "000153", "name": "丰原药业", "price": 6.68, "change_pct": 10.05, "reason": "蚌埠投资集团拟受让21.53%公司股份成为新控股股东", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "600598", "name": "北大荒", "price": 13.46, "change_pct": 9.97, "reason": "公司国内规模最大、现代化水平最高的种植业上市公司，年产水稻、玉米、大豆等优质农作物120亿斤；拥有土地面积最大的上市公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.76, "first_limit_up": 1787019744, "break_limit_up_times": 3}, {"code": "600165", "name": "ST宁科", "price": 2.94, "change_pct": 10.11, "reason": "公司实控人及多名董事高管拟增持公司股份", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.18, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "002638", "name": "勤上股份", "price": 3.85, "change_pct": 10.0, "reason": "公司深耕大功率LED照明二十余年，产品覆盖道路、隧道、景观等场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.81, "first_limit_up": 1787017278, "break_limit_up_times": 0}, {"code": "002284", "name": "亚太股份", "price": 10.22, "change_pct": 10.01, "reason": "1、公司在今年北京车展上首次展出一款高度集成化的机器人模组，由48V电源、电机、传动机构、控制器及制动系统组成，其技术逻辑与公司EMB控制系统一致，均为机电一体化产品，可模块化设计适配汽车及机器人领域应用需求；\n2、国内第一家拥有整套ADAS自主技术并率先实现量产的企业；公司以汽车主动安全技术为基础，布局汽车智能网联产业和新能源汽车产业，打造智能汽车环境感知+主动安全控制+移动互联的无人驾驶产业链", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.21, "first_limit_up": 1787016609, "break_limit_up_times": 1}, {"code": "000019", "name": "深粮控股", "price": 6.96, "change_pct": 9.95, "reason": "深圳国资委控股的农产品集团旗下，主营茶及天然植物精深加工为主的食品原料（配料）生产、研发和销售，并同时拥有粮油储备、粮油贸易、粮油加工等粮油流通及粮油储备服务业务", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 13.11, "first_limit_up": 1787018646, "break_limit_up_times": 2}, {"code": "605577", "name": "龙版传媒", "price": 10.76, "change_pct": 10.02, "reason": "1、公司探索运用生成式人工智能技术，加快品牌教育资源数字化聚合，推进中小学智慧教育服务平台建设并在智能 AI等与主业相关领域挖掘适合投资商机；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.54, "first_limit_up": 1787017633, "break_limit_up_times": 1}, {"code": "605179", "name": "一鸣食品", "price": 38.61, "change_pct": 10.0, "reason": "国内鲜乳烘焙知名企业", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 10.53, "first_limit_up": 1787036218, "break_limit_up_times": 0}, {"code": "000007", "name": "全新好", "price": 11.69, "change_pct": 9.97, "reason": "子公司江门市都合纸业科技业务，由子公司零度大健康与都合纸业开展经营，后者拥有日本eleten 株式会社世界专利技术的授权；江门都合具有出口经营权，主要从事杀菌纸巾类产品及日常用品的贸易", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.29, "first_limit_up": 1787029245, "break_limit_up_times": 0}, {"code": "000620", "name": "盈新发展", "price": 3.41, "change_pct": 10.0, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.65, "first_limit_up": 1787016300, "break_limit_up_times": 1}, {"code": "603065", "name": "宿迁联盛", "price": 18.11, "change_pct": 10.02, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["磷化铟"], "limit_up_days": 1, "turnover_ratio": 15.12, "first_limit_up": 1787017133, "break_limit_up_times": 2}, {"code": "002743", "name": "富煌钢构", "price": 4.47, "change_pct": 10.1, "reason": "钢结构行业骨干企业，公司承建的紧凑型聚变能实验装置项目(BEST)5号楼屋面首段钢结构桁架完成高精度滑移安装，作为全超导托卡马克核聚变实验装置”(EAST)的升级选代项目，BEST被列为合肥大科学城三大核心科学装置之一", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 3.28, "first_limit_up": 1787016702, "break_limit_up_times": 0}, {"code": "603395", "name": "红四方", "price": 26.36, "change_pct": 10.02, "reason": "公司为中盐集团农肥业务板块的运营主体", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 7.49, "first_limit_up": 1787016610, "break_limit_up_times": 0}, {"code": "605333", "name": "沪光股份", "price": 18.66, "change_pct": 10.02, "reason": "国际领先的汽车线束供应商，客户包括赛力斯等", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 1.22, "first_limit_up": 1787031712, "break_limit_up_times": 0}, {"code": "000716", "name": "黑芝麻", "price": 5.81, "change_pct": 10.04, "reason": "1、我国糊类食品龙头企业；旗下拥有京和米业，主要生产的香米富硒米，年生产大米能力20万吨；\n2、公司拟对天臣新能源增资5亿，标的主要从事锂电池生产和销售", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 13.97, "first_limit_up": 1787019453, "break_limit_up_times": 0}, {"code": "000597", "name": "东北制药", "price": 5.51, "change_pct": 9.98, "reason": "公司是全球主要的维生素C产品供应商。", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.85, "first_limit_up": 1787023458, "break_limit_up_times": 0}, {"code": "600707", "name": "彩虹股份", "price": 10.8, "change_pct": 9.98, "reason": "此前美国认定公司自主研发的“616”新料方玻璃基板不侵犯美国康宁公司专利", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 9.32, "first_limit_up": 1787016987, "break_limit_up_times": 6}, {"code": "600227", "name": "赤天化", "price": 3.75, "change_pct": 9.97, "reason": "贵州最大的甲醇生产企业；公司上半年业绩同比扭亏为盈，主要因“公司化工生产装置运行质效同步提升，主要产品尿素、甲醇产量有所增加，单位生产成本有所下降。同时，2026年2月下旬以来地缘因素带来的市场供给端影响，甲醇、复合肥产品销售价格同比上涨，化工业务净利润较上年同期实现增长”", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 14.66, "first_limit_up": 1787017075, "break_limit_up_times": 0}, {"code": "600353", "name": "旭光电子", "price": 37.54, "change_pct": 9.99, "reason": "1）参股子公司储翰科技是一家专注于接入网光模块和光组件生产及销售的高新技术企业，拥有从芯片封装到光电器件到光电模块的垂直整合产品线；\n2）子公司成都旭瓷具备商用氮化铝全产业链的量产能力，产品涵盖氮化铝粉体(原粉，造粒粉，填料粉)、氮化铝基板、氮化铝结构件、氮化铝高温共烧陶瓷(HTCC)及高端功能器件(陶瓷管壳、加热器、光通信器件、TR组件)，产品被广泛应用于新能源汽车、半导体装备、大功率电力电子模块等高端制造领域，以及低轨卫星、船舶导航等国家战略场景", "plates": ["光通信"], "limit_up_days": 3, "turnover_ratio": 7.85, "first_limit_up": 1787016788, "break_limit_up_times": 13}, {"code": "600613", "name": "神奇制药", "price": 7.76, "change_pct": 10.07, "reason": "公司拥有中国驰名商标“神奇”品牌，其中枇杷止咳颗粒、强力枇杷露等较为知名", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 15.08, "first_limit_up": 1787016300, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 64.02, "change_pct": 10.0, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 5.78, "first_limit_up": 1787016935, "break_limit_up_times": 7}, {"code": "300598", "name": "诚迈科技", "price": 34.6, "change_pct": 20.01, "reason": "公司推出了高性能信创电脑产品，基于多种架构自主芯片并搭载统信UOS等操作系统，具有安全可控、高性能等特性，适用于党政、金融等行业", "plates": ["信创"], "limit_up_days": 1, "turnover_ratio": 10.85, "first_limit_up": 1787032368, "break_limit_up_times": 2}, {"code": "600272", "name": "开开实业", "price": 20.93, "change_pct": 9.98, "reason": "公司医药板块主要是中、西成药的批发、零售及以中华老字号“雷允上”为品牌的中医药药学服务和自主品牌“上雷”牌高档滋补品（枫斗、虫草、燕窝、海参等）的销售", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 35.88, "first_limit_up": 1787035693, "break_limit_up_times": 1}, {"code": "001366", "name": "播恩集团", "price": 13.49, "change_pct": 10.03, "reason": "公司的主要产品为猪用饲料，拟1.25亿元收购3家饲料公司", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1787018088, "break_limit_up_times": 0}, {"code": "603958", "name": "哈森股份", "price": 18.46, "change_pct": 10.01, "reason": "公司与关联方等拟共同出资1亿元设立参股公司，主营机器人零部件及产品销售、技术服务", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 0.5, "first_limit_up": 1787016300, "break_limit_up_times": 0}, {"code": "000020", "name": "深华发Ａ", "price": 12.49, "change_pct": 10.04, "reason": "1、公司地处深圳，在深圳市福田区华强北商圈及光明新区公明街道均拥有数万平方米的大型物业；\n2、公司主营精密注塑件及液晶显示器，现有新型生产流水线，拥有自动化设备自动涂胶机器人、注塑机等十多台", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.71, "first_limit_up": 1787019459, "break_limit_up_times": 0}, {"code": "000678", "name": "襄阳轴承", "price": 10.51, "change_pct": 10.05, "reason": "1、公司是湖北省军民融合企业，根据2024年报东风公司的军车轴承一直指定公司独家供应；\n2、公司主营汽车用减速器用圆锥轴承、球轴承等，公告称暂无机器人轴承的市场应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.99, "first_limit_up": 1787020737, "break_limit_up_times": 1}, {"code": "600536", "name": "中国软件", "price": 34.45, "change_pct": 9.99, "reason": "中国电子信息产业集团旗下，中国电子软件板块的龙头核心企业，中国软件业国家队核心成员；公司拥有完整的从操作系统等基础软件、中间件、安全产品到应用系统的业务链条，参股的麒麟软件在政务内网份额高", "plates": ["信创"], "limit_up_days": 1, "turnover_ratio": 6.0, "first_limit_up": 1787033161, "break_limit_up_times": 1}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};