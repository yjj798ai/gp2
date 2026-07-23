const UPDATE_TIME = "2026-07-23 09:22";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.14,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.49,
    "rate": 0,
    "tag": "",
    "hotTag": "连续254天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "算力租赁",
    "rise": 1.56,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续118天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "存储芯片",
    "rise": -1.59,
    "rate": 0,
    "tag": "",
    "hotTag": "连续207天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "兵装重组概念",
    "rise": 6.39,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工龙头ETF",
    "code": "886101"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 1.75,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885887"
  },
  {
    "name": "商业航天",
    "rise": 1.65,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续183天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": 0.63,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "可燃冰",
    "rise": 5.68,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "油气ETF",
    "code": "885748"
  },
  {
    "name": "锂电池概念",
    "rise": 2.87,
    "rate": 0,
    "tag": "25家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "光纤概念",
    "rise": 1.36,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "人形机器人",
    "rise": 1.02,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续418天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "黄金概念",
    "rise": 2.86,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "绿色电力",
    "rise": 2.77,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "绿色电力ETF",
    "code": "885936"
  },
  {
    "name": "国家大基金持股",
    "rise": -3.36,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "ST板块",
    "rise": 3.03,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "东数西算(算力)",
    "rise": 1.22,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "军工",
    "rise": 2.55,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "AI应用",
    "rise": 0.84,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 1,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "先进封装",
    "rise": -1.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续47天上榜",
    "rankChg": -2,
    "etfName": "芯片ETF",
    "code": "886009"
  }
];
const THS_EVENTS = [
  {
    "title": "发改委印发《可再生能源发展“十五五”规划》",
    "desc": "",
    "heat": 706862,
    "direction": "电力电网",
    "themes": [
      "电力",
      "电网设备",
      "柔性直流输电",
      "特高压",
      "智能电网"
    ],
    "stocks": [
      {
        "name": "益坤电气",
        "code": "920222",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "体育强国建设“十五五”规划发布，2030年产业规模破7万亿元！",
    "desc": "",
    "heat": 558647,
    "direction": "体育",
    "themes": [
      "体育产业",
      "足球概念"
    ],
    "stocks": [
      {
        "name": "*ST新元",
        "code": "300472",
        "chg": 17.870036
      }
    ]
  },
  {
    "title": "美伊对峙持续升级，布油站上94美元！",
    "desc": "",
    "heat": 401068,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "德石股份",
        "code": "301158",
        "chg": 19.98414
      }
    ]
  },
  {
    "title": "实探MLCC产业链：订单大增，产能拉满！",
    "desc": "",
    "heat": 293726,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "风华高科",
        "code": "000636",
        "chg": 4.624697
      }
    ]
  },
  {
    "title": "AI需求驱动磷化铟景气度高涨 金属铟迎来量价齐升窗口",
    "desc": "",
    "heat": 219815,
    "direction": "磷化铟",
    "themes": [
      "磷化铟",
      "金属铟"
    ],
    "stocks": [
      {
        "name": "兴业科技",
        "code": "002674",
        "chg": 10.014874
      }
    ]
  },
  {
    "title": "上半年证券交易印花税同比增长97.3%",
    "desc": "",
    "heat": 153150,
    "direction": "大金融",
    "themes": [
      "证券",
      "保险",
      "互联网金融"
    ],
    "stocks": [
      {
        "name": "证通电子",
        "code": "002197",
        "chg": 10.043042
      }
    ]
  },
  {
    "title": "OpenAI模型测试中意外突破Hugging Face系统，据悉数小时内完成复杂攻击",
    "desc": "",
    "heat": 150795,
    "direction": "AI安全",
    "themes": [
      "网络安全",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "三旺通信",
        "code": "688618",
        "chg": 19.992019
      }
    ]
  },
  {
    "title": "高端PCB供不应求 高端印制电路板价格暴涨",
    "desc": "",
    "heat": 0,
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
        "name": "温州宏丰",
        "code": "300283",
        "chg": 4.630321
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "复牌股",
    "change": "+8.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+5.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+5.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "特高压",
    "change": "+5.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "宁夏概念",
    "change": "+5.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "钛白粉",
    "change": "+4.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铁矿石",
    "change": "+4.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+4.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+4.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "篮球",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "页岩气",
    "change": "+4.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液氯",
    "change": "+4.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "油服",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纯碱",
    "change": "+4.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+4.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "气凝胶",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "深地经济",
    "change": "+4.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "换电概念",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "烧碱",
    "change": "+4.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+4.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 3,
    "hot_rank_chg": 14,
    "stock_cnt": 5839,
    "price": "12.11",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "11302548600.00",
    "change_type": "1",
    "change_section": "6",
    "change_days": "6",
    "change_reason": "风电光伏",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "新疆国企改革",
        "change_pct": 3.17
      },
      {
        "name": "新疆概念",
        "change_pct": 3.08
      },
      {
        "name": "光伏",
        "change_pct": 2.85
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "储能",
        "change_pct": 3.44
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 8,
    "hot_rank_chg": -3,
    "stock_cnt": 5839,
    "price": "6.00",
    "change": "0.33",
    "market_id": "17",
    "circulate_market_value": "15111059000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.68
      },
      {
        "name": "工业大麻",
        "change_pct": 1.05
      },
      {
        "name": "中药",
        "change_pct": 0.81
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "保健品",
        "change_pct": 0.51
      },
      {
        "name": "民营医院",
        "change_pct": 1.43
      },
      {
        "name": "医药",
        "change_pct": 0.63
      },
      {
        "name": "化学原料药",
        "change_pct": 0.62
      },
      {
        "name": "流感",
        "change_pct": 1.18
      },
      {
        "name": "振兴东北",
        "change_pct": 2.13
      },
      {
        "name": "食品",
        "change_pct": 1.21
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 9,
    "hot_rank_chg": 3,
    "stock_cnt": 5839,
    "price": "7.88",
    "change": "-0.76",
    "market_id": "17",
    "circulate_market_value": "16005259000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.13
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.19
      },
      {
        "name": "火电",
        "change_pct": 1.43
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "储能",
        "change_pct": 3.44
      },
      {
        "name": "碳中和",
        "change_pct": 2.64
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 14,
    "hot_rank_chg": -6,
    "stock_cnt": 5839,
    "price": "6.99",
    "change": "0.58",
    "market_id": "17",
    "circulate_market_value": "86648663000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 2.13
      },
      {
        "name": "核电",
        "change_pct": 2.86
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.19
      },
      {
        "name": "水电",
        "change_pct": -0.58
      },
      {
        "name": "火电",
        "change_pct": 1.43
      },
      {
        "name": "光伏",
        "change_pct": 2.85
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      },
      {
        "name": "算电协同",
        "change_pct": 2.16
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 17,
    "hot_rank_chg": -4,
    "stock_cnt": 5839,
    "price": "6.06",
    "change": "0.33",
    "market_id": "33",
    "circulate_market_value": "214324830000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.03
      },
      {
        "name": "手机产业链",
        "change_pct": 0.03
      },
      {
        "name": "超高清视频",
        "change_pct": 0.47
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.26
      },
      {
        "name": "电竞",
        "change_pct": 0.61
      },
      {
        "name": "半导体",
        "change_pct": -2.32
      },
      {
        "name": "人工智能",
        "change_pct": 0.89
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.83
      },
      {
        "name": "VR&AR",
        "change_pct": 0.37
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "京津冀",
        "change_pct": 2.27
      },
      {
        "name": "物联网",
        "change_pct": 1.19
      },
      {
        "name": "指纹识别",
        "change_pct": -0.71
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.2
      },
      {
        "name": "白马股",
        "change_pct": 0.27
      },
      {
        "name": "智能制造",
        "change_pct": 1.47
      },
      {
        "name": "小米概念股",
        "change_pct": -0.15
      },
      {
        "name": "国产芯片",
        "change_pct": -1.69
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.46
      },
      {
        "name": "全息概念",
        "change_pct": 1.35
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.45
      },
      {
        "name": "MicroLED",
        "change_pct": 0.27
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.8
      },
      {
        "name": "智能手表",
        "change_pct": -0.27
      },
      {
        "name": "MiniLED",
        "change_pct": 0.45
      },
      {
        "name": "传感器",
        "change_pct": 0.5
      },
      {
        "name": "大硅片",
        "change_pct": -3.36
      },
      {
        "name": "AI PC",
        "change_pct": 0.38
      },
      {
        "name": "华为产业链",
        "change_pct": 0.95
      },
      {
        "name": "回购",
        "change_pct": 0.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.42
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.45
      }
    ]
  },
  {
    "code": "002197",
    "name": "证通电子",
    "hot_rank": 26,
    "hot_rank_chg": 55,
    "stock_cnt": 5839,
    "price": "7.67",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4095780100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 0.42
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.54
      },
      {
        "name": "ST摘帽",
        "change_pct": 3.15
      },
      {
        "name": "金融科技",
        "change_pct": 0.52
      },
      {
        "name": "充电桩",
        "change_pct": 3.83
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.14
      },
      {
        "name": "移动支付",
        "change_pct": 0.15
      },
      {
        "name": "教育",
        "change_pct": 1.5
      },
      {
        "name": "智慧城市",
        "change_pct": 1.62
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.12
      },
      {
        "name": "LED",
        "change_pct": 1.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.08
      },
      {
        "name": "机器人",
        "change_pct": 1.52
      },
      {
        "name": "数字经济",
        "change_pct": 1.32
      },
      {
        "name": "国产芯片",
        "change_pct": -1.69
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.6
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.66
      },
      {
        "name": "信创",
        "change_pct": 0.29
      },
      {
        "name": "NFT",
        "change_pct": 1.08
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.72
      },
      {
        "name": "数字乡村",
        "change_pct": 2.06
      },
      {
        "name": "教育信息化",
        "change_pct": 1.14
      },
      {
        "name": "数字人民币",
        "change_pct": 0.28
      },
      {
        "name": "智慧政务",
        "change_pct": 0.9
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.05
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.68
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.84
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.91
      },
      {
        "name": "华为产业链",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 27,
    "hot_rank_chg": 2,
    "stock_cnt": 5839,
    "price": "6.98",
    "change": "5.76",
    "market_id": "17",
    "circulate_market_value": "52177847000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.9
      },
      {
        "name": "央企改革",
        "change_pct": 2.13
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.19
      },
      {
        "name": "火电",
        "change_pct": 1.43
      },
      {
        "name": "振兴东北",
        "change_pct": 2.13
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 40,
    "hot_rank_chg": 0,
    "stock_cnt": 5839,
    "price": "10.90",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "7415484500.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "甲醇",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 2.64
      },
      {
        "name": "雄安新区",
        "change_pct": 3.05
      },
      {
        "name": "煤化工",
        "change_pct": 2.59
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 41,
    "hot_rank_chg": 151,
    "stock_cnt": 5839,
    "price": "5.52",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6285383100.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "控股股东增持",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 3.15
      },
      {
        "name": "高铁轨交",
        "change_pct": 3.13
      },
      {
        "name": "航母",
        "change_pct": 2.89
      },
      {
        "name": "光伏",
        "change_pct": 2.85
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "军工",
        "change_pct": 2.72
      },
      {
        "name": "机器人",
        "change_pct": 1.52
      },
      {
        "name": "储能",
        "change_pct": 3.44
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      },
      {
        "name": "宁夏概念",
        "change_pct": 5.07
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 42,
    "hot_rank_chg": 37,
    "stock_cnt": 5839,
    "price": "12.49",
    "change": "3.05",
    "market_id": "33",
    "circulate_market_value": "7284302600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 4.33
      },
      {
        "name": "一带一路",
        "change_pct": 2.68
      },
      {
        "name": "天然气",
        "change_pct": 3.45
      },
      {
        "name": "油气改革",
        "change_pct": 3.46
      },
      {
        "name": "页岩气",
        "change_pct": 4.52
      },
      {
        "name": "深地经济",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 51,
    "hot_rank_chg": -4,
    "stock_cnt": 5839,
    "price": "5.54",
    "change": "7.16",
    "market_id": "33",
    "circulate_market_value": "5722464300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.47
      },
      {
        "name": "锂电池",
        "change_pct": 3.78
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.97
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.12
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 3.04
      }
    ]
  },
  {
    "code": "605299",
    "name": "舒华体育",
    "hot_rank": 55,
    "hot_rank_chg": 929,
    "stock_cnt": 5839,
    "price": "12.12",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "4940830800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "体育产业",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 3.12
      },
      {
        "name": "人工智能",
        "change_pct": 0.89
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.68
      },
      {
        "name": "华为产业链",
        "change_pct": 0.95
      },
      {
        "name": "服务消费",
        "change_pct": 1.75
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 59,
    "hot_rank_chg": -16,
    "stock_cnt": 5839,
    "price": "5.09",
    "change": "-2.30",
    "market_id": "33",
    "circulate_market_value": "6600384400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.81
      },
      {
        "name": "创新药",
        "change_pct": -0.12
      },
      {
        "name": "央企改革",
        "change_pct": 2.13
      },
      {
        "name": "医疗器械",
        "change_pct": 1.21
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.83
      },
      {
        "name": "保健品",
        "change_pct": 0.51
      },
      {
        "name": "民营医院",
        "change_pct": 1.43
      },
      {
        "name": "CAR-T疗法",
        "change_pct": -0.62
      },
      {
        "name": "医药",
        "change_pct": 0.63
      },
      {
        "name": "化学原料药",
        "change_pct": 0.62
      },
      {
        "name": "海南概念",
        "change_pct": 2.57
      },
      {
        "name": "脑科学",
        "change_pct": 1.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.71
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.72
      },
      {
        "name": "食品",
        "change_pct": 1.21
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      },
      {
        "name": "医疗信息化",
        "change_pct": 1.05
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.61
      },
      {
        "name": "自贸区",
        "change_pct": 2.36
      },
      {
        "name": "合成生物",
        "change_pct": 1.1
      }
    ]
  },
  {
    "code": "002900",
    "name": "哈三联",
    "hot_rank": 62,
    "hot_rank_chg": 125,
    "stock_cnt": 5839,
    "price": "12.10",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "1949581000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.12
      },
      {
        "name": "医药",
        "change_pct": 0.63
      },
      {
        "name": "化学原料药",
        "change_pct": 0.62
      },
      {
        "name": "医美",
        "change_pct": 0.64
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.61
      },
      {
        "name": "化妆品",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "600644",
    "name": "乐山电力",
    "hot_rank": 65,
    "hot_rank_chg": -13,
    "stock_cnt": 5839,
    "price": "10.43",
    "change": "-1.60",
    "market_id": "17",
    "circulate_market_value": "6031886100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 1.19
      },
      {
        "name": "水电",
        "change_pct": -0.58
      },
      {
        "name": "天然气",
        "change_pct": 3.45
      },
      {
        "name": "光伏",
        "change_pct": 2.85
      }
    ]
  },
  {
    "code": "000889",
    "name": "中嘉博创",
    "hot_rank": 70,
    "hot_rank_chg": 36,
    "stock_cnt": 5839,
    "price": "3.83",
    "change": "-4.01",
    "market_id": "33",
    "circulate_market_value": "3331506900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "金融科技",
        "change_pct": 0.52
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.24
      },
      {
        "name": "区块链",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "605162",
    "name": "新中港",
    "hot_rank": 73,
    "hot_rank_chg": 206,
    "stock_cnt": 5839,
    "price": "8.45",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "3742051300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "热电联产",
    "xgb_concepts": [
      {
        "name": "火电",
        "change_pct": 1.43
      },
      {
        "name": "储能",
        "change_pct": 3.44
      }
    ]
  },
  {
    "code": "603221",
    "name": "爱丽家居",
    "hot_rank": 78,
    "hot_rank_chg": 234,
    "stock_cnt": 5839,
    "price": "12.73",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "3084097100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "拟收购欧康诺",
    "xgb_concepts": [
      {
        "name": "家具家居",
        "change_pct": 2.08
      },
      {
        "name": "PVC",
        "change_pct": 4.15
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 80,
    "hot_rank_chg": 56,
    "stock_cnt": 5839,
    "price": "8.23",
    "change": "5.92",
    "market_id": "33",
    "circulate_market_value": "4458372100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 4.33
      },
      {
        "name": "油气管网",
        "change_pct": 2.69
      },
      {
        "name": "海工装备",
        "change_pct": 3.56
      },
      {
        "name": "举牌",
        "change_pct": 1.77
      },
      {
        "name": "天然气",
        "change_pct": 3.45
      },
      {
        "name": "山东国企改革",
        "change_pct": 2.35
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "页岩气",
        "change_pct": 4.52
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      },
      {
        "name": "深地经济",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 81,
    "hot_rank_chg": 217,
    "stock_cnt": 5839,
    "price": "6.22",
    "change": "10.09",
    "market_id": "17",
    "circulate_market_value": "12709551600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "高纯氟化氢",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 3.78
      },
      {
        "name": "军民融合",
        "change_pct": 2.78
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.93
      },
      {
        "name": "烧碱",
        "change_pct": 4.21
      },
      {
        "name": "军工",
        "change_pct": 2.72
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.08
      },
      {
        "name": "环氧丙烷",
        "change_pct": 4.04
      },
      {
        "name": "氟化工",
        "change_pct": 2.8
      },
      {
        "name": "双氧水",
        "change_pct": 3.04
      },
      {
        "name": "液氯",
        "change_pct": 4.47
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 83,
    "hot_rank_chg": -21,
    "stock_cnt": 5839,
    "price": "5.94",
    "change": "4.21",
    "market_id": "17",
    "circulate_market_value": "14201426000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 1.9
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "国企改革",
        "change_pct": 2.11
      },
      {
        "name": "河南国企改革",
        "change_pct": 2.93
      }
    ]
  },
  {
    "code": "002575",
    "name": "群兴玩具",
    "hot_rank": 86,
    "hot_rank_chg": 111,
    "stock_cnt": 5839,
    "price": "5.02",
    "change": "3.93",
    "market_id": "33",
    "circulate_market_value": "2933314000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "腾讯概念股",
        "change_pct": 0.66
      },
      {
        "name": "物业管理",
        "change_pct": 2.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "002953",
    "name": "日丰股份",
    "hot_rank": 91,
    "hot_rank_chg": 240,
    "stock_cnt": 5839,
    "price": "10.27",
    "change": "4.16",
    "market_id": "33",
    "circulate_market_value": "2888835600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "5G",
        "change_pct": 0.61
      },
      {
        "name": "充电桩",
        "change_pct": 3.83
      },
      {
        "name": "物联网",
        "change_pct": 1.19
      },
      {
        "name": "风电",
        "change_pct": 3.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 3.08
      },
      {
        "name": "机器人",
        "change_pct": 1.52
      },
      {
        "name": "华为产业链",
        "change_pct": 0.95
      },
      {
        "name": "光纤概念",
        "change_pct": 1.68
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 97,
    "hot_rank_chg": 29,
    "stock_cnt": 5839,
    "price": "11.87",
    "change": "4.86",
    "market_id": "17",
    "circulate_market_value": "15149156000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.43
      },
      {
        "name": "强势人气股",
        "change_pct": 2.82
      },
      {
        "name": "智能制造",
        "change_pct": 1.47
      },
      {
        "name": "工业互联网",
        "change_pct": 1.57
      },
      {
        "name": "培育钻石",
        "change_pct": 1.61
      },
      {
        "name": "金刚线",
        "change_pct": 0.87
      },
      {
        "name": "国资入股",
        "change_pct": 2.14
      },
      {
        "name": "深地经济",
        "change_pct": 4.23
      }
    ]
  },
  {
    "code": "000676",
    "name": "智度股份",
    "hot_rank": 98,
    "hot_rank_chg": -8,
    "stock_cnt": 5839,
    "price": "6.90",
    "change": "-0.29",
    "market_id": "33",
    "circulate_market_value": "8687296900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.89
      },
      {
        "name": "游戏",
        "change_pct": 0.44
      },
      {
        "name": "智能音箱",
        "change_pct": -0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.15
      },
      {
        "name": "数字经济",
        "change_pct": 1.32
      },
      {
        "name": "百度概念股",
        "change_pct": 0.78
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.66
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.2
      },
      {
        "name": "传媒",
        "change_pct": 1.29
      },
      {
        "name": "全息概念",
        "change_pct": 1.35
      },
      {
        "name": "NFT",
        "change_pct": 1.08
      },
      {
        "name": "元宇宙",
        "change_pct": 0.68
      },
      {
        "name": "web3.0",
        "change_pct": 1.23
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.69
      },
      {
        "name": "数字人民币",
        "change_pct": 0.28
      },
      {
        "name": "智慧政务",
        "change_pct": 0.9
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.68
      },
      {
        "name": "盲盒",
        "change_pct": 2.25
      },
      {
        "name": "AI营销",
        "change_pct": 0.94
      },
      {
        "name": "华为产业链",
        "change_pct": 0.95
      },
      {
        "name": "供应链金融",
        "change_pct": 1.81
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.2
      },
      {
        "name": "区块链",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "002458",
    "name": "益生股份",
    "hot_rank": 100,
    "hot_rank_chg": 338,
    "stock_cnt": 5839,
    "price": "9.25",
    "change": "7.43",
    "market_id": "33",
    "circulate_market_value": "8939066600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 1.88
      },
      {
        "name": "养猪",
        "change_pct": 0.58
      },
      {
        "name": "大农业",
        "change_pct": 2.42
      },
      {
        "name": "业绩增长",
        "change_pct": 1.58
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001309", "name": "德明利", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "435.00", "change": "-4.86", "market_id": "33", "circulate_market_value": "71804584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5839, "price": "42.45", "change": "-5.46", "market_id": "33", "circulate_market_value": "121410085000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 3, "hot_rank_chg": 14, "stock_cnt": 5839, "price": "12.11", "change": "9.99", "market_id": "33", "circulate_market_value": "11302548600.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "风电光伏", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.82}, {"name": "新疆国企改革", "change_pct": 3.17}, {"name": "新疆概念", "change_pct": 3.08}, {"name": "光伏", "change_pct": 2.85}, {"name": "风电", "change_pct": 3.75}, {"name": "储能", "change_pct": 3.44}, {"name": "国企改革", "change_pct": 2.11}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "16.41", "change": "9.99", "market_id": "17", "circulate_market_value": "24167119000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "电力"}, {"code": "002384", "name": "东山精密", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "206.65", "change": "-4.99", "market_id": "33", "circulate_market_value": "286483380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 6, "hot_rank_chg": 16, "stock_cnt": 5839, "price": "120.68", "change": "1.98", "market_id": "17", "circulate_market_value": "43532100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 7, "hot_rank_chg": 13, "stock_cnt": 5839, "price": "17.74", "change": "9.98", "market_id": "33", "circulate_market_value": "12333966200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "算力租赁"}, {"code": "600664", "name": "哈药股份", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5839, "price": "6.00", "change": "0.33", "market_id": "17", "circulate_market_value": "15111059000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.68}, {"name": "工业大麻", "change_pct": 1.05}, {"name": "中药", "change_pct": 0.81}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "保健品", "change_pct": 0.51}, {"name": "民营医院", "change_pct": 1.43}, {"name": "医药", "change_pct": 0.63}, {"name": "化学原料药", "change_pct": 0.62}, {"name": "流感", "change_pct": 1.18}, {"name": "振兴东北", "change_pct": 2.13}, {"name": "食品", "change_pct": 1.21}]}, {"code": "600744", "name": "华银电力", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "7.88", "change": "-0.76", "market_id": "17", "circulate_market_value": "16005259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.13}, {"name": "电力体制改革", "change_pct": 1.19}, {"name": "火电", "change_pct": 1.43}, {"name": "风电", "change_pct": 3.75}, {"name": "储能", "change_pct": 3.44}, {"name": "碳中和", "change_pct": 2.64}, {"name": "国企改革", "change_pct": 2.11}]}, {"code": "002156", "name": "通富微电", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "69.82", "change": "-6.78", "market_id": "33", "circulate_market_value": "105948514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 11, "hot_rank_chg": 12, "stock_cnt": 5839, "price": "16.60", "change": "1.10", "market_id": "17", "circulate_market_value": "13068788300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 12, "hot_rank_chg": -9, "stock_cnt": 5839, "price": "80.81", "change": "-5.79", "market_id": "17", "circulate_market_value": "144602590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5839, "price": "87.96", "change": "-2.77", "market_id": "33", "circulate_market_value": "129022525000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "6.99", "change": "0.58", "market_id": "17", "circulate_market_value": "86648663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 2.13}, {"name": "核电", "change_pct": 2.86}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "电力体制改革", "change_pct": 1.19}, {"name": "水电", "change_pct": -0.58}, {"name": "火电", "change_pct": 1.43}, {"name": "光伏", "change_pct": 2.85}, {"name": "风电", "change_pct": 3.75}, {"name": "国企改革", "change_pct": 2.11}, {"name": "算电协同", "change_pct": 2.16}]}, {"code": "002185", "name": "华天科技", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "17.69", "change": "-3.96", "market_id": "33", "circulate_market_value": "58777710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "33.93", "change": "-1.91", "market_id": "33", "circulate_market_value": "25699095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 17, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "6.06", "change": "0.33", "market_id": "33", "circulate_market_value": "214324830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.03}, {"name": "手机产业链", "change_pct": 0.03}, {"name": "超高清视频", "change_pct": 0.47}, {"name": "苹果产业链", "change_pct": 0.26}, {"name": "电竞", "change_pct": 0.61}, {"name": "半导体", "change_pct": -2.32}, {"name": "人工智能", "change_pct": 0.89}, {"name": "互联网医疗", "change_pct": 0.83}, {"name": "VR&AR", "change_pct": 0.37}, {"name": "OLED", "change_pct": 0.17}, {"name": "京津冀", "change_pct": 2.27}, {"name": "物联网", "change_pct": 1.19}, {"name": "指纹识别", "change_pct": -0.71}, {"name": "汽车零部件", "change_pct": 2.2}, {"name": "白马股", "change_pct": 0.27}, {"name": "智能制造", "change_pct": 1.47}, {"name": "小米概念股", "change_pct": -0.15}, {"name": "国产芯片", "change_pct": -1.69}, {"name": "液晶面板/LCD", "change_pct": 0.46}, {"name": "全息概念", "change_pct": 1.35}, {"name": "理想汽车概念股", "change_pct": 2.45}, {"name": "MicroLED", "change_pct": 0.27}, {"name": "钙钛矿电池", "change_pct": 2.8}, {"name": "智能手表", "change_pct": -0.27}, {"name": "MiniLED", "change_pct": 0.45}, {"name": "传感器", "change_pct": 0.5}, {"name": "大硅片", "change_pct": -3.36}, {"name": "AI PC", "change_pct": 0.38}, {"name": "华为产业链", "change_pct": 0.95}, {"name": "回购", "change_pct": 0.98}, {"name": "智能眼镜/MR头显", "change_pct": -0.42}, {"name": "玻璃基板封装", "change_pct": -0.45}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 18, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "451.96", "change": "-3.84", "market_id": "17", "circulate_market_value": "302131610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 19, "hot_rank_chg": 38, "stock_cnt": 5839, "price": "43.21", "change": "4.62", "market_id": "33", "circulate_market_value": "49994537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5839, "price": "1072.52", "change": "1.10", "market_id": "33", "circulate_market_value": "1190432610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "55.67", "change": "1.00", "market_id": "17", "circulate_market_value": "136594490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002353", "name": "杰瑞股份", "hot_rank": 22, "hot_rank_chg": 144, "stock_cnt": 5839, "price": "135.11", "change": "10.00", "market_id": "33", "circulate_market_value": "93366683000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "大额订单"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 23, "hot_rank_chg": 9, "stock_cnt": 5839, "price": "356.12", "change": "-2.71", "market_id": "17", "circulate_market_value": "144705200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 24, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "33.06", "change": "2.67", "market_id": "17", "circulate_market_value": "681095280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 25, "hot_rank_chg": 9, "stock_cnt": 5839, "price": "73.74", "change": "-10.00", "market_id": "17", "circulate_market_value": "30702954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002197", "name": "证通电子", "hot_rank": 26, "hot_rank_chg": 55, "stock_cnt": 5839, "price": "7.67", "change": "10.04", "market_id": "33", "circulate_market_value": "4095780100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "算力租赁", "xgb_concepts": [{"name": "国产软件", "change_pct": 0.42}, {"name": "深圳本地股", "change_pct": 1.54}, {"name": "ST摘帽", "change_pct": 3.15}, {"name": "金融科技", "change_pct": 0.52}, {"name": "充电桩", "change_pct": 3.83}, {"name": "云计算数据中心", "change_pct": 1.14}, {"name": "移动支付", "change_pct": 0.15}, {"name": "教育", "change_pct": 1.5}, {"name": "智慧城市", "change_pct": 1.62}, {"name": "粤港澳大湾区", "change_pct": 2.12}, {"name": "LED", "change_pct": 1.33}, {"name": "新能源汽车", "change_pct": 3.08}, {"name": "机器人", "change_pct": 1.52}, {"name": "数字经济", "change_pct": 1.32}, {"name": "国产芯片", "change_pct": -1.69}, {"name": "阿里巴巴概念股", "change_pct": 0.6}, {"name": "腾讯概念股", "change_pct": 0.66}, {"name": "信创", "change_pct": 0.29}, {"name": "NFT", "change_pct": 1.08}, {"name": "东数西算/算力", "change_pct": 0.72}, {"name": "数字乡村", "change_pct": 2.06}, {"name": "教育信息化", "change_pct": 1.14}, {"name": "数字人民币", "change_pct": 0.28}, {"name": "智慧政务", "change_pct": 0.9}, {"name": "医疗信息化", "change_pct": 1.05}, {"name": "华为鸿蒙", "change_pct": 0.68}, {"name": "华为云·鲲鹏", "change_pct": 0.84}, {"name": "智慧灯杆", "change_pct": 1.91}, {"name": "华为产业链", "change_pct": 0.95}]}, {"code": "600726", "name": "华电能源", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5839, "price": "6.98", "change": "5.76", "market_id": "17", "circulate_market_value": "52177847000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.9}, {"name": "央企改革", "change_pct": 2.13}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "电力体制改革", "change_pct": 1.19}, {"name": "火电", "change_pct": 1.43}, {"name": "振兴东北", "change_pct": 2.13}, {"name": "国企改革", "change_pct": 2.11}]}, {"code": "603893", "name": "瑞芯微", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "214.00", "change": "-6.49", "market_id": "17", "circulate_market_value": "90499198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 29, "hot_rank_chg": -2, "stock_cnt": 5839, "price": "73.48", "change": "-9.99", "market_id": "33", "circulate_market_value": "34188210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 30, "hot_rank_chg": -14, "stock_cnt": 5839, "price": "39.09", "change": "-2.81", "market_id": "33", "circulate_market_value": "61533742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603296", "name": "华勤技术", "hot_rank": 31, "hot_rank_chg": 13, "stock_cnt": 5839, "price": "88.88", "change": "1.38", "market_id": "17", "circulate_market_value": "70979217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 32, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "126.80", "change": "0.64", "market_id": "33", "circulate_market_value": "141209090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "497.30", "change": "-2.26", "market_id": "33", "circulate_market_value": "623735120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 34, "hot_rank_chg": 16, "stock_cnt": 5839, "price": "31.31", "change": "-5.09", "market_id": "33", "circulate_market_value": "24497089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "32.99", "change": "1.51", "market_id": "17", "circulate_market_value": "112593209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 36, "hot_rank_chg": -17, "stock_cnt": 5839, "price": "35.92", "change": "-4.21", "market_id": "33", "circulate_market_value": "144672150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 37, "hot_rank_chg": -12, "stock_cnt": 5839, "price": "16.23", "change": "-2.76", "market_id": "17", "circulate_market_value": "33945730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 38, "hot_rank_chg": 3, "stock_cnt": 5839, "price": "62.88", "change": "3.57", "market_id": "17", "circulate_market_value": "1247796520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 39, "hot_rank_chg": -15, "stock_cnt": 5839, "price": "97.82", "change": "-4.24", "market_id": "17", "circulate_market_value": "143115980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 40, "hot_rank_chg": 0, "stock_cnt": 5839, "price": "10.90", "change": "9.99", "market_id": "17", "circulate_market_value": "7415484500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "甲醇", "xgb_concepts": [{"name": "甲醇", "change_pct": 2.64}, {"name": "雄安新区", "change_pct": 3.05}, {"name": "煤化工", "change_pct": 2.59}]}, {"code": "000595", "name": "新能股份", "hot_rank": 41, "hot_rank_chg": 151, "stock_cnt": 5839, "price": "5.52", "change": "9.96", "market_id": "33", "circulate_market_value": "6285383100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控股股东增持", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 3.15}, {"name": "高铁轨交", "change_pct": 3.13}, {"name": "航母", "change_pct": 2.89}, {"name": "光伏", "change_pct": 2.85}, {"name": "风电", "change_pct": 3.75}, {"name": "军工", "change_pct": 2.72}, {"name": "机器人", "change_pct": 1.52}, {"name": "储能", "change_pct": 3.44}, {"name": "国企改革", "change_pct": 2.11}, {"name": "宁夏概念", "change_pct": 5.07}]}, {"code": "300164", "name": "通源石油", "hot_rank": 42, "hot_rank_chg": 37, "stock_cnt": 5839, "price": "12.49", "change": "3.05", "market_id": "33", "circulate_market_value": "7284302600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 4.33}, {"name": "一带一路", "change_pct": 2.68}, {"name": "天然气", "change_pct": 3.45}, {"name": "油气改革", "change_pct": 3.46}, {"name": "页岩气", "change_pct": 4.52}, {"name": "深地经济", "change_pct": 4.23}]}, {"code": "603619", "name": "中曼石油", "hot_rank": 43, "hot_rank_chg": 91, "stock_cnt": 5839, "price": "23.47", "change": "9.98", "market_id": "17", "circulate_market_value": "10851083700.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "油气开采"}, {"code": "600176", "name": "中国巨石", "hot_rank": 44, "hot_rank_chg": -14, "stock_cnt": 5839, "price": "38.36", "change": "-0.88", "market_id": "17", "circulate_market_value": "152350080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 45, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "15.99", "change": "5.41", "market_id": "33", "circulate_market_value": "24397243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 46, "hot_rank_chg": 5, "stock_cnt": 5839, "price": "115.74", "change": "1.32", "market_id": "33", "circulate_market_value": "222546090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 47, "hot_rank_chg": -11, "stock_cnt": 5839, "price": "41.57", "change": "2.29", "market_id": "17", "circulate_market_value": "35191222000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 48, "hot_rank_chg": -15, "stock_cnt": 5839, "price": "28.86", "change": "-1.27", "market_id": "17", "circulate_market_value": "9723509800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 49, "hot_rank_chg": 4, "stock_cnt": 5839, "price": "125.10", "change": "-0.71", "market_id": "17", "circulate_market_value": "301709780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 50, "hot_rank_chg": 32, "stock_cnt": 5839, "price": "37.19", "change": "-3.05", "market_id": "33", "circulate_market_value": "137274930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 51, "hot_rank_chg": -4, "stock_cnt": 5839, "price": "5.54", "change": "7.16", "market_id": "33", "circulate_market_value": "5722464300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.47}, {"name": "锂电池", "change_pct": 3.78}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "铜箔/覆铜板", "change_pct": 0.97}, {"name": "粤港澳大湾区", "change_pct": 2.12}, {"name": "新能源汽车", "change_pct": 3.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 3.04}]}, {"code": "300285", "name": "国瓷材料", "hot_rank": 52, "hot_rank_chg": 19, "stock_cnt": 5839, "price": "60.85", "change": "1.03", "market_id": "33", "circulate_market_value": "51945736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 53, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "190.47", "change": "-0.74", "market_id": "33", "circulate_market_value": "148559010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 54, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "20.03", "change": "2.14", "market_id": "17", "circulate_market_value": "349740670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605299", "name": "舒华体育", "hot_rank": 55, "hot_rank_chg": 929, "stock_cnt": 5839, "price": "12.12", "change": "9.98", "market_id": "17", "circulate_market_value": "4940830800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "体育产业", "xgb_concepts": [{"name": "体育产业", "change_pct": 3.12}, {"name": "人工智能", "change_pct": 0.89}, {"name": "华为鸿蒙", "change_pct": 0.68}, {"name": "华为产业链", "change_pct": 0.95}, {"name": "服务消费", "change_pct": 1.75}]}, {"code": "601179", "name": "中国西电", "hot_rank": 56, "hot_rank_chg": 82, "stock_cnt": 5839, "price": "13.65", "change": "9.99", "market_id": "17", "circulate_market_value": "69968294000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "特高压中标"}, {"code": "600602", "name": "云赛智联", "hot_rank": 57, "hot_rank_chg": -15, "stock_cnt": 5839, "price": "19.04", "change": "-6.07", "market_id": "17", "circulate_market_value": "20454729000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 58, "hot_rank_chg": 55, "stock_cnt": 5839, "price": "63.10", "change": "-5.04", "market_id": "33", "circulate_market_value": "45704303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000566", "name": "海南海药", "hot_rank": 59, "hot_rank_chg": -16, "stock_cnt": 5839, "price": "5.09", "change": "-2.30", "market_id": "33", "circulate_market_value": "6600384400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.81}, {"name": "创新药", "change_pct": -0.12}, {"name": "央企改革", "change_pct": 2.13}, {"name": "医疗器械", "change_pct": 1.21}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "互联网医疗", "change_pct": 0.83}, {"name": "保健品", "change_pct": 0.51}, {"name": "民营医院", "change_pct": 1.43}, {"name": "CAR-T疗法", "change_pct": -0.62}, {"name": "医药", "change_pct": 0.63}, {"name": "化学原料药", "change_pct": 0.62}, {"name": "海南概念", "change_pct": 2.57}, {"name": "脑科学", "change_pct": 1.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 1.71}, {"name": "海南自由贸易港", "change_pct": 1.72}, {"name": "食品", "change_pct": 1.21}, {"name": "国企改革", "change_pct": 2.11}, {"name": "医疗信息化", "change_pct": 1.05}, {"name": "新冠病毒防治", "change_pct": 1.61}, {"name": "自贸区", "change_pct": 2.36}, {"name": "合成生物", "change_pct": 1.1}]}, {"code": "002213", "name": "大为股份", "hot_rank": 60, "hot_rank_chg": 63, "stock_cnt": 5839, "price": "27.89", "change": "1.46", "market_id": "33", "circulate_market_value": "5765362200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301234", "name": "五洲医疗", "hot_rank": 61, "hot_rank_chg": 272, "stock_cnt": 5839, "price": "48.96", "change": "20.00", "market_id": "33", "circulate_market_value": "1966753200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "跨界并购"}, {"code": "002900", "name": "哈三联", "hot_rank": 62, "hot_rank_chg": 125, "stock_cnt": 5839, "price": "12.10", "change": "10.00", "market_id": "33", "circulate_market_value": "1949581000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "创新药", "xgb_concepts": [{"name": "创新药", "change_pct": -0.12}, {"name": "医药", "change_pct": 0.63}, {"name": "化学原料药", "change_pct": 0.62}, {"name": "医美", "change_pct": 0.64}, {"name": "新冠病毒防治", "change_pct": 1.61}, {"name": "化妆品", "change_pct": 1.31}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 63, "hot_rank_chg": -17, "stock_cnt": 5839, "price": "145.00", "change": "-8.64", "market_id": "33", "circulate_market_value": "4470549100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 64, "hot_rank_chg": 8, "stock_cnt": 5839, "price": "250.41", "change": "0.86", "market_id": "17", "circulate_market_value": "118085006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600644", "name": "乐山电力", "hot_rank": 65, "hot_rank_chg": -13, "stock_cnt": 5839, "price": "10.43", "change": "-1.60", "market_id": "17", "circulate_market_value": "6031886100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 1.19}, {"name": "水电", "change_pct": -0.58}, {"name": "天然气", "change_pct": 3.45}, {"name": "光伏", "change_pct": 2.85}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 66, "hot_rank_chg": -6, "stock_cnt": 5839, "price": "225.50", "change": "1.12", "market_id": "17", "circulate_market_value": "258144400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 67, "hot_rank_chg": -19, "stock_cnt": 5839, "price": "93.18", "change": "-2.29", "market_id": "33", "circulate_market_value": "77247668000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 68, "hot_rank_chg": -14, "stock_cnt": 5839, "price": "42.09", "change": "5.15", "market_id": "17", "circulate_market_value": "5500035000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 69, "hot_rank_chg": -13, "stock_cnt": 5839, "price": "375.85", "change": "-3.24", "market_id": "33", "circulate_market_value": "105934034000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000889", "name": "中嘉博创", "hot_rank": 70, "hot_rank_chg": 36, "stock_cnt": 5839, "price": "3.83", "change": "-4.01", "market_id": "33", "circulate_market_value": "3331506900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "金融科技", "change_pct": 0.52}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "5G消息/RCS", "change_pct": 0.24}, {"name": "区块链", "change_pct": 1.28}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 71, "hot_rank_chg": -26, "stock_cnt": 5839, "price": "149.07", "change": "-0.53", "market_id": "33", "circulate_market_value": "47482186000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 72, "hot_rank_chg": 48, "stock_cnt": 5839, "price": "24.83", "change": "10.01", "market_id": "33", "circulate_market_value": "16554567000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "白银龙头"}, {"code": "605162", "name": "新中港", "hot_rank": 73, "hot_rank_chg": 206, "stock_cnt": 5839, "price": "8.45", "change": "10.03", "market_id": "17", "circulate_market_value": "3742051300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "热电联产", "xgb_concepts": [{"name": "火电", "change_pct": 1.43}, {"name": "储能", "change_pct": 3.44}]}, {"code": "002407", "name": "多氟多", "hot_rank": 74, "hot_rank_chg": -13, "stock_cnt": 5839, "price": "30.48", "change": "2.35", "market_id": "33", "circulate_market_value": "32880829000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603407", "name": "长裕集团", "hot_rank": 75, "hot_rank_chg": 98, "stock_cnt": 5839, "price": "64.01", "change": "-0.51", "market_id": "17", "circulate_market_value": "2298726600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 77, "hot_rank_chg": -18, "stock_cnt": 5839, "price": "48.49", "change": "0.90", "market_id": "17", "circulate_market_value": "30565818000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 78, "hot_rank_chg": 234, "stock_cnt": 5839, "price": "12.73", "change": "10.03", "market_id": "17", "circulate_market_value": "3084097100.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "拟收购欧康诺", "xgb_concepts": [{"name": "家具家居", "change_pct": 2.08}, {"name": "PVC", "change_pct": 4.15}]}, {"code": "000988", "name": "华工科技", "hot_rank": 79, "hot_rank_chg": -30, "stock_cnt": 5839, "price": "111.91", "change": "-1.41", "market_id": "33", "circulate_market_value": "112467945000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 80, "hot_rank_chg": 56, "stock_cnt": 5839, "price": "8.23", "change": "5.92", "market_id": "33", "circulate_market_value": "4458372100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 4.33}, {"name": "油气管网", "change_pct": 2.69}, {"name": "海工装备", "change_pct": 3.56}, {"name": "举牌", "change_pct": 1.77}, {"name": "天然气", "change_pct": 3.45}, {"name": "山东国企改革", "change_pct": 2.35}, {"name": "风电", "change_pct": 3.75}, {"name": "页岩气", "change_pct": 4.52}, {"name": "国企改革", "change_pct": 2.11}, {"name": "深地经济", "change_pct": 4.23}]}, {"code": "601678", "name": "滨化股份", "hot_rank": 81, "hot_rank_chg": 217, "stock_cnt": 5839, "price": "6.22", "change": "10.09", "market_id": "17", "circulate_market_value": "12709551600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "高纯氟化氢", "xgb_concepts": [{"name": "锂电池", "change_pct": 3.78}, {"name": "军民融合", "change_pct": 2.78}, {"name": "氢能源/燃料电池", "change_pct": 2.93}, {"name": "烧碱", "change_pct": 4.21}, {"name": "军工", "change_pct": 2.72}, {"name": "新能源汽车", "change_pct": 3.08}, {"name": "环氧丙烷", "change_pct": 4.04}, {"name": "氟化工", "change_pct": 2.8}, {"name": "双氧水", "change_pct": 3.04}, {"name": "液氯", "change_pct": 4.47}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 82, "hot_rank_chg": 5, "stock_cnt": 5839, "price": "76.58", "change": "1.83", "market_id": "33", "circulate_market_value": "50009468000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 83, "hot_rank_chg": -21, "stock_cnt": 5839, "price": "5.94", "change": "4.21", "market_id": "17", "circulate_market_value": "14201426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 1.9}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "国企改革", "change_pct": 2.11}, {"name": "河南国企改革", "change_pct": 2.93}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 84, "hot_rank_chg": -10, "stock_cnt": 5839, "price": "13.64", "change": "2.10", "market_id": "33", "circulate_market_value": "14491188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 85, "hot_rank_chg": -10, "stock_cnt": 5839, "price": "17.16", "change": "0.35", "market_id": "33", "circulate_market_value": "13019514400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002575", "name": "群兴玩具", "hot_rank": 86, "hot_rank_chg": 111, "stock_cnt": 5839, "price": "5.02", "change": "3.93", "market_id": "33", "circulate_market_value": "2933314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "腾讯概念股", "change_pct": 0.66}, {"name": "物业管理", "change_pct": 2.27}, {"name": "东数西算/算力", "change_pct": 0.72}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 87, "hot_rank_chg": 42, "stock_cnt": 5839, "price": "46.38", "change": "5.60", "market_id": "33", "circulate_market_value": "68444079000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5839, "price": "34.69", "change": "-0.91", "market_id": "33", "circulate_market_value": "52657007000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 89, "hot_rank_chg": -5, "stock_cnt": 5839, "price": "16.11", "change": "4.61", "market_id": "33", "circulate_market_value": "26151760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002879", "name": "长缆科技", "hot_rank": 90, "hot_rank_chg": 63, "stock_cnt": 5839, "price": "16.41", "change": "9.99", "market_id": "33", "circulate_market_value": "2250451300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "回购"}, {"code": "002953", "name": "日丰股份", "hot_rank": 91, "hot_rank_chg": 240, "stock_cnt": 5839, "price": "10.27", "change": "4.16", "market_id": "33", "circulate_market_value": "2888835600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "5G", "change_pct": 0.61}, {"name": "充电桩", "change_pct": 3.83}, {"name": "物联网", "change_pct": 1.19}, {"name": "风电", "change_pct": 3.75}, {"name": "新能源汽车", "change_pct": 3.08}, {"name": "机器人", "change_pct": 1.52}, {"name": "华为产业链", "change_pct": 0.95}, {"name": "光纤概念", "change_pct": 1.68}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 92, "hot_rank_chg": -12, "stock_cnt": 5839, "price": "25.80", "change": "4.58", "market_id": "17", "circulate_market_value": "4719680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 93, "hot_rank_chg": -10, "stock_cnt": 5839, "price": "35.36", "change": "-0.62", "market_id": "17", "circulate_market_value": "51696136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 94, "hot_rank_chg": 7, "stock_cnt": 5839, "price": "212.09", "change": "-2.55", "market_id": "33", "circulate_market_value": "230836220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 95, "hot_rank_chg": 93, "stock_cnt": 5839, "price": "105.55", "change": "2.50", "market_id": "33", "circulate_market_value": "197358050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 96, "hot_rank_chg": -23, "stock_cnt": 5839, "price": "15.06", "change": "-1.38", "market_id": "33", "circulate_market_value": "48577383000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 97, "hot_rank_chg": 29, "stock_cnt": 5839, "price": "11.87", "change": "4.86", "market_id": "17", "circulate_market_value": "15149156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.43}, {"name": "强势人气股", "change_pct": 2.82}, {"name": "智能制造", "change_pct": 1.47}, {"name": "工业互联网", "change_pct": 1.57}, {"name": "培育钻石", "change_pct": 1.61}, {"name": "金刚线", "change_pct": 0.87}, {"name": "国资入股", "change_pct": 2.14}, {"name": "深地经济", "change_pct": 4.23}]}, {"code": "000676", "name": "智度股份", "hot_rank": 98, "hot_rank_chg": -8, "stock_cnt": 5839, "price": "6.90", "change": "-0.29", "market_id": "33", "circulate_market_value": "8687296900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.89}, {"name": "游戏", "change_pct": 0.44}, {"name": "智能音箱", "change_pct": -0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.15}, {"name": "数字经济", "change_pct": 1.32}, {"name": "百度概念股", "change_pct": 0.78}, {"name": "腾讯概念股", "change_pct": 0.66}, {"name": "拼多多概念股", "change_pct": 1.2}, {"name": "传媒", "change_pct": 1.29}, {"name": "全息概念", "change_pct": 1.35}, {"name": "NFT", "change_pct": 1.08}, {"name": "元宇宙", "change_pct": 0.68}, {"name": "web3.0", "change_pct": 1.23}, {"name": "字节跳动概念股", "change_pct": 0.69}, {"name": "数字人民币", "change_pct": 0.28}, {"name": "智慧政务", "change_pct": 0.9}, {"name": "华为鸿蒙", "change_pct": 0.68}, {"name": "盲盒", "change_pct": 2.25}, {"name": "AI营销", "change_pct": 0.94}, {"name": "华为产业链", "change_pct": 0.95}, {"name": "供应链金融", "change_pct": 1.81}, {"name": "ChatGPT", "change_pct": -0.2}, {"name": "区块链", "change_pct": 1.28}]}, {"code": "002558", "name": "巨人网络", "hot_rank": 99, "hot_rank_chg": 12, "stock_cnt": 5839, "price": "25.26", "change": "-9.85", "market_id": "33", "circulate_market_value": "48008195000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002458", "name": "益生股份", "hot_rank": 100, "hot_rank_chg": 338, "stock_cnt": 5839, "price": "9.25", "change": "7.43", "market_id": "33", "circulate_market_value": "8939066600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "养鸡", "change_pct": 1.88}, {"name": "养猪", "change_pct": 0.58}, {"name": "大农业", "change_pct": 2.42}, {"name": "业绩增长", "change_pct": 1.58}]}];
const LIMIT_UP_POOL = [{"code": "605189", "name": "富春染织", "price": 15.02, "change_pct": 10.04, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1784771606, "break_limit_up_times": 4}, {"code": "002546", "name": "新联电子", "price": 8.22, "change_pct": 10.04, "reason": "公司专注用电信息采集系统及设备研发，为国家电网、南方电网提供智能电表、用电信息采集终端等产品；预计2026年上半年净利同比增长134.57%-147.87%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.86, "first_limit_up": 1784783355, "break_limit_up_times": 0}, {"code": "301357", "name": "北方长龙", "price": 86.33, "change_pct": 20.0, "reason": "公司主要产品按照应用场景划分为军用车辆人机环系统内饰、弹药装备、军用车辆辅助装备、军用车辆通信装备", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 11.32, "first_limit_up": 1784785788, "break_limit_up_times": 1}, {"code": "002774", "name": "快意电梯", "price": 16.89, "change_pct": 10.03, "reason": "公司拥有乘客电梯、载货电梯、自动扶梯等全系列产品，产品行销全球60多个国家和地区", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.19, "first_limit_up": 1784771109, "break_limit_up_times": 0}, {"code": "002879", "name": "长缆科技", "price": 16.41, "change_pct": 9.99, "reason": "1、国内电缆附件领域的重要企业；公司产品覆盖高压超高压、中低压电缆附件等多个板块；\n2、公司材料、箱柜、连接器、机电等产品已导入商业航天并实现导入；拟斥资1.8亿至2.2亿元回购股份;", "plates": ["智能电网"], "limit_up_days": 3, "turnover_ratio": 19.17, "first_limit_up": 1784770485, "break_limit_up_times": 2}, {"code": "600243", "name": "*ST海华", "price": 3.1, "change_pct": 9.93, "reason": "1、子公司苏州江源“海洋平台用大型阀体数控加工设备”的验收获得江苏省科技进步三等奖1项；\n2、子公司青海华鼎齿轮箱有限责任公司目前涉及煤炭减速器生产，目前规模较小", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.7, "first_limit_up": 1784788833, "break_limit_up_times": 2}, {"code": "000017", "name": "深中华A", "price": 5.68, "change_pct": 10.08, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1784771415, "break_limit_up_times": 0}, {"code": "002762", "name": "金发拉比", "price": 7.45, "change_pct": 10.04, "reason": "国内知名母婴消费品品牌运营商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1784771262, "break_limit_up_times": 0}, {"code": "603567", "name": "珍宝岛", "price": 6.5, "change_pct": 9.98, "reason": "公司拥有小儿热速清糖浆，可用于小儿外感风热所致的感冒", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.46, "first_limit_up": 1784772310, "break_limit_up_times": 1}, {"code": "001337", "name": "四川黄金", "price": 40.26, "change_pct": 10.0, "reason": "公司主要从事金矿采选及销售", "plates": ["黄金"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1784774775, "break_limit_up_times": 0}, {"code": "002199", "name": "东晶电子", "price": 10.73, "change_pct": 10.05, "reason": "1、公司撤销退市风险警示；\n2、国内最具规模的石英晶体元器件制造商之一；公司的核心产品包括石英晶体谐振器和振荡器，这些产品是电子设备的重要组件，广泛应用于通讯、汽车电子、工业控制、家用电器、智能安防等多个领域", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 2.45, "first_limit_up": 1784769900, "break_limit_up_times": 0}, {"code": "601061", "name": "中信金属", "price": 11.66, "change_pct": 10.0, "reason": "公司主要从事金属及矿产品的贸易业务，一季度净利润同比增加141.13%", "plates": ["业绩增长", "有色金属"], "limit_up_days": 1, "turnover_ratio": 0.5, "first_limit_up": 1784775361, "break_limit_up_times": 0}, {"code": "301587", "name": "中瑞股份", "price": 21.58, "change_pct": 20.02, "reason": "公司圆柱锂电池精密安全结构件已批量配套航天卫星、低空经济场景", "plates": ["锂电池", "航天"], "limit_up_days": 1, "turnover_ratio": 14.22, "first_limit_up": 1784783319, "break_limit_up_times": 0}, {"code": "002451", "name": "摩恩电气", "price": 6.82, "change_pct": 10.0, "reason": "中国特种电缆行业领军企业；公司专业从事特种电缆，包括生态安全电缆、变频电缆、屏蔽和耐化学药品功能电缆、电气化铁道27.5kV单相铜芯交联聚乙烯绝缘电缆等的研产销，此前投建年产能3万吨新能源汽车电机专用扁型电磁线项目；前三季度净利润同比增长22.31%", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1784783004, "break_limit_up_times": 0}, {"code": "603399", "name": "永杉锂业", "price": 13.72, "change_pct": 10.02, "reason": "公司主要从事电池级碳酸锂和电池级氢氧化锂，已形成年产15000吨电池级氢氧化锂和10000吨电池级碳酸锂的生产能力；一季度净利润同比扭亏为盈", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 9.76, "first_limit_up": 1784771347, "break_limit_up_times": 1}, {"code": "600268", "name": "国电南自", "price": 11.66, "change_pct": 10.0, "reason": "能源电力及工业控制领域卓越的IT企业和电力智能化领军企业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1784789018, "break_limit_up_times": 0}, {"code": "002713", "name": "东易日盛", "price": 9.66, "change_pct": 10.02, "reason": "控股股东拟向公司无偿捐赠的和林格尔智算中心", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 3.08, "first_limit_up": 1784771586, "break_limit_up_times": 0}, {"code": "301158", "name": "德石股份", "price": 15.13, "change_pct": 19.98, "reason": "公司主要从事石油钻井专用工具及设备的研产销及租赁，开展定向钻井、水平钻井的工程技术服务；表示油气公司开始投入大量资金加强对老油井的再开采，加大深海深地油气井的投入", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 10.03, "first_limit_up": 1784772075, "break_limit_up_times": 1}, {"code": "603400", "name": "华之杰", "price": 37.24, "change_pct": 10.01, "reason": "公司产品作为扫地机器人的功能部件，可以应用于扫地机器人中", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.77, "first_limit_up": 1784772466, "break_limit_up_times": 1}, {"code": "603212", "name": "赛伍技术", "price": 10.46, "change_pct": 9.99, "reason": "公司半导体材料业务覆盖晶圆制造、CMP抛光、晶圆研磨、先进封装等环节，提供一站式材料解决方案，产品包括应用于先进封装FC晶圆High Bump研磨胶带等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1784783256, "break_limit_up_times": 0}, {"code": "600289", "name": "ST信通", "price": 4.35, "change_pct": 10.13, "reason": "公司主营智慧城市行业应用软件开发", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1784786157, "break_limit_up_times": 3}, {"code": "605162", "name": "新中港", "price": 8.45, "change_pct": 10.03, "reason": "公司专业从事热电联产业务", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 3.08, "first_limit_up": 1784770295, "break_limit_up_times": 0}, {"code": "601606", "name": "长城军工", "price": 29.14, "change_pct": 10.0, "reason": "安徽省国资委旗下，公司为老牌弹药供应商", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 4.21, "first_limit_up": 1784783655, "break_limit_up_times": 0}, {"code": "000603", "name": "盛达资源", "price": 24.83, "change_pct": 10.01, "reason": "公司预计中报净利润同比增长399.31%-470.64%，因“采矿及选矿能力有所提升，产能逐渐释放，2026年上半年度产品产销量增加；另外，叠加贵金属价格上涨，公司矿山主要产品销售价格较上年同期上涨，推动公司经营业绩同比显著增长”", "plates": ["黄金"], "limit_up_days": 3, "turnover_ratio": 10.37, "first_limit_up": 1784772453, "break_limit_up_times": 1}, {"code": "002339", "name": "积成电子", "price": 7.04, "change_pct": 10.0, "reason": "1、国内为数不多的智能充换电一站式解决方案服务商；已推出基于平台化、模块化、组件化设计技术特色的新一代智能充换电设备、充换电站综合监控系统、充换电运营管理平台等系列产品；\n2、控股子公司卓识网安在网络安全方面的业务主要包括网络安全等级保护测评、工控系统风险评估、渗透测试、产品检测和商用密码评估等", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.34, "first_limit_up": 1784770404, "break_limit_up_times": 1}, {"code": "300062", "name": "中能电气", "price": 6.35, "change_pct": 20.04, "reason": "公司核心主业为智能电网设备的制造，在光伏领域业务包括自持运营光伏电站和光伏电站EPC", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 11.6, "first_limit_up": 1784771616, "break_limit_up_times": 0}, {"code": "600984", "name": "建设机械", "price": 3.64, "change_pct": 9.97, "reason": "国资背景塔机租赁龙头，塔机规模全球第一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.83, "first_limit_up": 1784771477, "break_limit_up_times": 2}, {"code": "000668", "name": "荣丰控股", "price": 16.06, "change_pct": 10.0, "reason": "长春市地产开发商", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1784783253, "break_limit_up_times": 2}, {"code": "603221", "name": "爱丽家居", "price": 12.73, "change_pct": 10.03, "reason": "公司拟收购欧康诺不低于77.08%股权，欧康诺专注于存储测试设备及测试服务领域", "plates": ["资产重组"], "limit_up_days": 3, "turnover_ratio": 0.08, "first_limit_up": 1784769900, "break_limit_up_times": 0}, {"code": "002674", "name": "兴业科技", "price": 22.19, "change_pct": 10.01, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.72, "first_limit_up": 1784789649, "break_limit_up_times": 0}, {"code": "003001", "name": "中岩大地", "price": 18.54, "change_pct": 10.03, "reason": "公司拟跨界并购PCB刀具企业深圳市鑫寰宇精工科技", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 24.43, "first_limit_up": 1784771538, "break_limit_up_times": 1}, {"code": "601678", "name": "滨化股份", "price": 6.22, "change_pct": 10.09, "reason": "1、国内最大的食品级烧碱生产企业，粒碱生产龙头；公司电子级氢氟酸设计产能为0.6万吨/年，六氟磷酸锂设计产能0.1万吨/年；\n2、公司主营业务涵盖氯碱化学品、碳三碳四、湿电子化学品三大板块，拥有合计51万吨/年的环氧丙烷产能，是目前国内最大的民营环氧丙烷生产商", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 6.47, "first_limit_up": 1784770650, "break_limit_up_times": 1}, {"code": "002358", "name": "森源电气", "price": 5.5, "change_pct": 10.0, "reason": "国内领先的电力装备智能化解决方案提供商；公司核心产品覆盖 500kV 及以下智能高低压开关成套设备、智能变电站自动化系统、SVG/SAPF 电能质量治理装置等，具备状态监测、远程控制及故障自愈功能，广泛应用于城乡电网改造、特高压输电等场景", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.21, "first_limit_up": 1784785056, "break_limit_up_times": 0}, {"code": "603026", "name": "石大胜华", "price": 62.82, "change_pct": 10.0, "reason": "公司实现从上游环氧丙烷到中游电解液所需的碳酸酯溶剂、锂盐及添加剂的全产业链布局，一季报净利润为2.82亿元，同比扭亏为盈", "plates": ["锂电池", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.56, "first_limit_up": 1784789459, "break_limit_up_times": 0}, {"code": "001388", "name": "信通电子", "price": 23.82, "change_pct": 10.02, "reason": "高送转-公司2025年年度权益分派方案为每10股送红股4.80股并派5.00元现金，股权登记日为2026年7月16日", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.98, "first_limit_up": 1784788956, "break_limit_up_times": 0}, {"code": "600990", "name": "四创电子", "price": 16.94, "change_pct": 10.0, "reason": "1、公司PCB系列产品已应用于“海丝一号”商业SAR卫星，具备商业航天配套能力；子公司华耀电子空天电源创新中心正进行低轨卫星二次电源系统的研发技术攻关工作，努力承接型号项目；\n2、公司控股子公司华耀电子中标了 EAST 受控热核聚变装置电源模块项目，为其提供 4 套 PSM 电源高压系统，且华耀电子是合肥聚变产业联盟成员，在核聚变电源领域具备技术优势", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1784785067, "break_limit_up_times": 1}, {"code": "002596", "name": "海南瑞泽", "price": 2.99, "change_pct": 9.93, "reason": "海南本地股，主营商品混凝土、新型墙体材料与水泥的生产与销售以及园林绿化业务，大股东所持部分股份将被司法拍卖", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.99, "first_limit_up": 1784788881, "break_limit_up_times": 1}, {"code": "002667", "name": "*ST威领", "price": 8.97, "change_pct": 10.06, "reason": "公司业务主要包括锂矿选矿、基础性锂电原料锂盐加工及冶炼业务等，通过收购嘉宇矿业74.3%股权，新增钨锡铅锌矿开采业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.06, "first_limit_up": 1784770596, "break_limit_up_times": 2}, {"code": "000803", "name": "山高环能", "price": 6.8, "change_pct": 10.03, "reason": "公司UCO含税价格上探超8000元/吨，处于近年来较高水平；航空业碳减排趋势下，印尼、马来西亚等国将陆续实施SAF添加政策，终端需求有望保持旺盛", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.67, "first_limit_up": 1784789046, "break_limit_up_times": 0}, {"code": "603680", "name": "今创集团", "price": 9.7, "change_pct": 9.98, "reason": "1、国内轨交车辆配套产品领域龙头，25年净利润同比增长92.65%；\n2、公司新设常州今创航空航天产业投资有限公司，拟布局商业航天产业链，目前处于筹备初期", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.12, "first_limit_up": 1784785566, "break_limit_up_times": 0}, {"code": "600980", "name": "北矿科技", "price": 17.67, "change_pct": 10.02, "reason": "世界最大永磁铁氧体预烧料生产企业之一，上半年净利同比增长25.18%，报告期内，公司充分把握矿产资源高效开发利用和矿冶装备智能化、绿色化升级的市场机遇，持续开发新技术新产品，矿冶装备和磁性材料产品结构不断优化，主营业务盈利能力增强", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1784770204, "break_limit_up_times": 0}, {"code": "600449", "name": "宁夏建材", "price": 12.29, "change_pct": 10.03, "reason": "公司数据中心已入驻30家单位、上云系统118个，计算能力超5.5万核VCPU，110KV变电站项目在建，为数字服务扩容提供硬件支撑", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.15, "first_limit_up": 1784786146, "break_limit_up_times": 1}, {"code": "600698", "name": "湖南天雁", "price": 6.22, "change_pct": 10.09, "reason": "公司间接控股股东将变更为兵器装备集团汽车业务分立的中央企业", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1784785562, "break_limit_up_times": 0}, {"code": "603488", "name": "展鹏科技", "price": 7.71, "change_pct": 9.99, "reason": "公司拟收购北京领为军融科技有限公司，标的主营军事航空仿真系列产品的研制、生产和技术服务，核心产品为面向航空兵作战训练的便携式“通用数字空战仿真系统”", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 4.55, "first_limit_up": 1784784837, "break_limit_up_times": 1}, {"code": "603727", "name": "博迈科", "price": 17.44, "change_pct": 10.03, "reason": "国内最早从事海洋油气开发装备模块化制造的企业之一", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1784783830, "break_limit_up_times": 0}, {"code": "001382", "name": "新亚电缆", "price": 16.57, "change_pct": 10.03, "reason": "公司主要产品含多种电缆，机器人电缆正在研发", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.57, "first_limit_up": 1784771649, "break_limit_up_times": 1}, {"code": "002539", "name": "云图控股", "price": 11.4, "change_pct": 10.04, "reason": "公司围绕复合肥产业链深度开发为主营业务，复肥行业生产基地最多的供应商之一", "plates": ["磷化工"], "limit_up_days": 1, "turnover_ratio": 4.64, "first_limit_up": 1784777139, "break_limit_up_times": 0}, {"code": "002229", "name": "鸿博股份", "price": 10.33, "change_pct": 10.01, "reason": "1、全资子公司英博数科是北京·AI创新赋能中心的唯一指定运营方，公司与英伟达在包括智算中心、通用技术创新赋能公共服务平台、AI创新孵化加速器等十大领域进行合作；\n2、当地时间3月7日，OpenClaw 创始人在平台X上分享龙虾基准测试排行榜。MiniMax M2.1，成功率93.6%，位居第二；公司全资子公司英博数科近期与AI多模态大模型公司MiniMax达成协议，英博数科为MiniMax提供一定规模的英伟达智算服务器所有的算力和资源以及配套软件、应用以及技术服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1784770572, "break_limit_up_times": 0}, {"code": "603378", "name": "*ST亚士", "price": 4.48, "change_pct": 10.07, "reason": "行业内少数同时拥有功能型建筑涂料、保温装饰板和保温板三大产品体系及其系统服务能力的企业之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.07, "first_limit_up": 1784782814, "break_limit_up_times": 0}, {"code": "002856", "name": "*ST美芝", "price": 13.37, "change_pct": 10.04, "reason": "公司主要业务为建筑装饰工程的设计与施工，承接项目类型主要有公共建筑装饰、住宅精装修和幕墙装饰；一季报净利润同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.34, "first_limit_up": 1784770512, "break_limit_up_times": 1}, {"code": "600844", "name": "金煤科技", "price": 3.07, "change_pct": 10.04, "reason": "公司专注于煤制乙二醇，上半年实现扭亏为盈，4月初年产10万吨草酸扩产项目顺利建成投产，公司借此增加了盈利能力较强的草酸产销量，同时主动降低了毛利率较差的乙二醇产销规模，叠加草酸市场行情上行，整体盈利结构得到明显改善。此外，公司持续推进高卡煤掺烧等降耗举措，进一步降低了产品单耗，共同推动了报告期内业绩的扭亏为盈", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 12.42, "first_limit_up": 1784776695, "break_limit_up_times": 1}, {"code": "600379", "name": "宝光股份", "price": 11.52, "change_pct": 10.03, "reason": "公司控股子公司宝光联悦拓展电子特气领域，核心产品5N级纯度的高纯氢气，已在高端半导体行业实现批量应用，用于晶圆退火、外延生长等关键工艺", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1784771394, "break_limit_up_times": 0}, {"code": "603191", "name": "望变电气", "price": 13.4, "change_pct": 10.02, "reason": "公司220 kV及以下变压器订单饱和、储备6个月，产品已获美国德克萨斯州、南美洲、阿曼等地数据中心项目订单", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 5.33, "first_limit_up": 1784773236, "break_limit_up_times": 1}, {"code": "002566", "name": "益盛药业", "price": 6.4, "change_pct": 9.97, "reason": "医药行业内首家实现人参全株开发企业，主要产品包括振源胶囊、心悦胶囊、生脉注射液等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.26, "first_limit_up": 1784787936, "break_limit_up_times": 0}, {"code": "002379", "name": "宏桥控股", "price": 20.45, "change_pct": 10.01, "reason": "大型综合性铝加工企业；公司预计上半年净利润同比增长69.72%至81.04%，主要因电解铝市场销售价格同比大幅上涨，相关业务毛利显著提升，且借款规模缩减使财务利息支出大幅减少", "plates": ["业绩增长", "有色金属"], "limit_up_days": 1, "turnover_ratio": 6.54, "first_limit_up": 1784772399, "break_limit_up_times": 2}, {"code": "600396", "name": "华电辽能", "price": 16.41, "change_pct": 9.99, "reason": "辽宁省重要电力和热力供应商", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 23.21, "first_limit_up": 1784786014, "break_limit_up_times": 0}, {"code": "001208", "name": "华菱线缆", "price": 13.61, "change_pct": 10.02, "reason": "1、国内的特种专用电缆生产企业之一；公司长期为“神舟”系列飞船、“长征”系列运载火箭等重点工程配套供应线缆产品；\n2、子公司三竹科技正在研发液冷电机连接器，产品将间接配套英伟达产业链", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1784773149, "break_limit_up_times": 0}, {"code": "000815", "name": "美利云", "price": 17.74, "change_pct": 9.98, "reason": "公司主营业务为数据中心机柜租赁及机房运行维护服务。客户包括电信、美团、并行科技等", "plates": ["云计算数据中心"], "limit_up_days": 4, "turnover_ratio": 17.62, "first_limit_up": 1784770623, "break_limit_up_times": 7}, {"code": "603988", "name": "中电电机", "price": 17.17, "change_pct": 9.99, "reason": "公司专注大中型交直流电机、发电机，产品覆盖风电、水利、石化等行业", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 2.05, "first_limit_up": 1784770271, "break_limit_up_times": 0}, {"code": "600219", "name": "南山铝业", "price": 4.79, "change_pct": 10.11, "reason": "民企高端铝材龙头", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 3.52, "first_limit_up": 1784774575, "break_limit_up_times": 0}, {"code": "603050", "name": "科林电气", "price": 18.67, "change_pct": 10.02, "reason": "公司专业从事智能电网配电、变电、用电和高低压开关及成套设备等，液冷储能柜完成迭代并批量出货", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.25, "first_limit_up": 1784788020, "break_limit_up_times": 0}, {"code": "002725", "name": "跃岭股份", "price": 10.78, "change_pct": 10.0, "reason": "公司间接持股10.05%的中科光芯，后者是主要生产销售InP（磷化铟）外延片、光芯片及激光器件三大类产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1784784843, "break_limit_up_times": 0}, {"code": "301234", "name": "五洲医疗", "price": 48.96, "change_pct": 20.0, "reason": "公司拟收购旋智科技100%股权，切入电机控制芯片赛道\n", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 1.08, "first_limit_up": 1784769900, "break_limit_up_times": 0}, {"code": "300141", "name": "和顺电气", "price": 9.84, "change_pct": 20.0, "reason": "1、公司专注电力成套设备、电力电子设备研发、制造与销售，产品涵盖高低压电器及成套设备、电力滤波装置等，为国家电网等客户提供配电系统解决方案；\n2、参股公司苏州空间电源科技有限公司主营业务为商业卫星电源产品，包括太阳电池阵（刚性翼，柔性翼），锂离子蓄电池组，电源控制器，驱动机构（SADA），卫星舱体铝蜂窝舱板等产品", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.83, "first_limit_up": 1784785035, "break_limit_up_times": 0}, {"code": "600468", "name": "百利电气", "price": 5.54, "change_pct": 9.92, "reason": "1、公司多家控股子公司涉及智能电网领域，如电气开关元件，无功补偿设备等；\n2、控股子公司辽宁荣信兴业电力技术有限公司参与了位于法国的国际热核聚变试验堆（ITER）项目电力系统中无功补偿以及滤波设备的设计制造", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.04, "first_limit_up": 1784773863, "break_limit_up_times": 1}, {"code": "603082", "name": "北自科技", "price": 33.48, "change_pct": 9.99, "reason": "公司是全国机器人标准化技术委员会人形机器人标准工作组（SAC/TC591/WG2）成员单位，参与制订人形机器人及其应用领域相关的国家标准及行业标准", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.47, "first_limit_up": 1784787492, "break_limit_up_times": 2}, {"code": "600389", "name": "江山股份", "price": 19.34, "change_pct": 10.01, "reason": "国内最大的草甘膦生产企业之一", "plates": ["磷化工"], "limit_up_days": 1, "turnover_ratio": 4.11, "first_limit_up": 1784784139, "break_limit_up_times": 2}, {"code": "000595", "name": "新能股份", "price": 5.52, "change_pct": 9.96, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["智能电网"], "limit_up_days": 2, "turnover_ratio": 0.43, "first_limit_up": 1784769900, "break_limit_up_times": 0}, {"code": "002218", "name": "拓日新能", "price": 3.82, "change_pct": 10.09, "reason": "国内较早打通并拥有“从砂到电”垂直一体化光伏产业链的企业之一；公司参与了东方红卫星“开拓一号”单晶硅太阳电池项目，具备成熟的卫星用光伏组件生产制造能力，研发的钙钛矿/晶硅叠层电池技术可应用于航天领域", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 3.81, "first_limit_up": 1784770350, "break_limit_up_times": 1}, {"code": "000035", "name": "中国天楹", "price": 4.83, "change_pct": 10.02, "reason": "1、公司固废绿电业务稳健增长，越南河内二期扩建工程已于4月29日动工，新增1600吨/日处理能力；公司还中标了苏伊士集团5600万欧元设备订单；\n2、公司已与国际头部能源巨头签订了全球首单电制甲醇供货订单", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.55, "first_limit_up": 1784776215, "break_limit_up_times": 1}, {"code": "600513", "name": "联环药业", "price": 16.57, "change_pct": 10.03, "reason": "公司主导产品之一爱普列特片为国家一类新药，是国内首创的治疗前列腺良性增生症的有效药物，生产的美愈伪麻胶囊可用于缓解普通感冒和流行性感冒症状", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.7, "first_limit_up": 1784783049, "break_limit_up_times": 2}, {"code": "605288", "name": "凯迪股份", "price": 67.52, "change_pct": 10.0, "reason": "公司是线性驱动系统龙头，网传资料显示，公司招聘电机研发工程师，工作让内容包括负责机器人用伺服电机电磁方案分析及结构方案设计", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.86, "first_limit_up": 1784788894, "break_limit_up_times": 0}, {"code": "000862", "name": "银星能源", "price": 5.92, "change_pct": 10.04, "reason": "中铝集团旗下，新能源业务主要包括风力发电和太阳能光伏发电", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 13.05, "first_limit_up": 1784784843, "break_limit_up_times": 1}, {"code": "000688", "name": "国城矿业", "price": 29.24, "change_pct": 10.01, "reason": "公司控股子公司国城实业拥有内蒙古卓资县大苏计钼矿采矿权1宗，采矿许可证证载规模为 500 万吨/年，主营产品为钼精矿；拥有钼金属量14.48万吨，其资源品质、产能均位于全国前列", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 2.4, "first_limit_up": 1784772867, "break_limit_up_times": 2}, {"code": "002977", "name": "*ST天箭", "price": 21.78, "change_pct": 10.0, "reason": "高波段、大功率固态微波前端产品供应商；主要代表产品为弹载固态发射机、新型相控阵产品及其他固态发射机产品，其在军事领域的应用包括雷达制导导弹精确制导系统、其它雷达系统、卫星通信和电子对抗等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1784775720, "break_limit_up_times": 0}, {"code": "603861", "name": "白云电器", "price": 12.1, "change_pct": 10.0, "reason": "1、公司已完成数据中心智能小母线及一体化电力模块研发，750V直流方案已在园区、楼宇、地铁落地，并储备800VHVDC技术，服务中国联通、佛山开普勒等算力中心；\n2、公司围绕两网数字化、智能化需求，打造综合解决方案，加大 “二次 + 智能技术” 投入，为智能电网提供绿色环保、智能可靠的产品与供电系统方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.97, "first_limit_up": 1784788824, "break_limit_up_times": 0}, {"code": "600611", "name": "大众交通", "price": 4.2, "change_pct": 9.95, "reason": "公司通过基金间接持有长江存储约0.051%股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1784783427, "break_limit_up_times": 1}, {"code": "002083", "name": "孚日股份", "price": 10.47, "change_pct": 9.98, "reason": "毛巾龙头；公司拥有VC产能1万吨", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 5.65, "first_limit_up": 1784771979, "break_limit_up_times": 1}, {"code": "002514", "name": "*ST宝馨", "price": 1.6, "change_pct": 10.34, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.59, "first_limit_up": 1784771853, "break_limit_up_times": 0}, {"code": "600962", "name": "国投中鲁", "price": 22.11, "change_pct": 10.0, "reason": "公司拟收购的中国电子工程设计院承担第一条由国内企业主导的12英寸3D闪存芯片生产线等多条集成电路产线设计总包", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.07, "first_limit_up": 1784770298, "break_limit_up_times": 1}, {"code": "601179", "name": "中国西电", "price": 13.65, "change_pct": 9.99, "reason": "公司作为国内输配电装备龙头，聚焦特高压与智能化输配电成套装备，研发智能变压器、数字化开关等产品，拥有高压开关专家远程诊断系统等软件著作权", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1784772458, "break_limit_up_times": 0}, {"code": "605299", "name": "舒华体育", "price": 12.12, "change_pct": 9.98, "reason": "公司位于福建泉州，国内最具实力的健身器材和展示架制造企业之一；一季度净利润同比增长212.79%", "plates": ["体育产业"], "limit_up_days": 1, "turnover_ratio": 2.38, "first_limit_up": 1784770200, "break_limit_up_times": 0}, {"code": "002900", "name": "哈三联", "price": 12.1, "change_pct": 10.0, "reason": "公司美妆系列聚焦日常多护肤场景，打造精细化面膜矩阵；“哈三联”II 类医疗器械敷料系列搭载重组胶原蛋白与透明质酸钠两大核心成分，深耕问题性肌肤赛道", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 15.62, "first_limit_up": 1784772348, "break_limit_up_times": 0}, {"code": "301292", "name": "海科新源", "price": 62.69, "change_pct": 20.0, "reason": "全球拥有EC 30万吨产能，固态电池相关材料已作为公司重要战略布局之一，布局的产品主要涉及氧化物固态电解质，凝胶电解质单体以及固态电解质高纯硫化锂等产品，部分产品已经推进到中试验证阶段", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 23.67, "first_limit_up": 1784789307, "break_limit_up_times": 0}, {"code": "603331", "name": "百达精工", "price": 10.91, "change_pct": 9.98, "reason": "公司已布局人形机器人灵巧手指部关节模组及具身机器人关节铝制结构件等核心零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.27, "first_limit_up": 1784789672, "break_limit_up_times": 0}, {"code": "603318", "name": "水发燃气", "price": 8.7, "change_pct": 9.99, "reason": "1、公司依托西北天然气产区布局LNG-BOG提氦业务，现有5N高纯氦产能并持续扩产；\n2、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套；\n3、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 10.82, "first_limit_up": 1784770809, "break_limit_up_times": 1}, {"code": "603876", "name": "鼎胜新材", "price": 21.1, "change_pct": 10.01, "reason": "国内锂电池用铝箔龙头企业；公司作为铝箔生产龙头企业，其电池铝箔产品可应用于钠电池领域，且公司下游有中科海钠等钠电池相关客户", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.93, "first_limit_up": 1784787373, "break_limit_up_times": 0}, {"code": "600343", "name": "航天动力", "price": 18.68, "change_pct": 10.01, "reason": "航天科技集团下属上市公司；公司大股东是航天科技集团下属航天六院，其是我国液体火箭发动机主要研制单位", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.28, "first_limit_up": 1784785330, "break_limit_up_times": 0}, {"code": "002547", "name": "*ST春兴", "price": 2.08, "change_pct": 10.05, "reason": "公司研发项目包括机器人取代人工上下料技术的研发", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.56, "first_limit_up": 1784784642, "break_limit_up_times": 1}, {"code": "600409", "name": "三友化工", "price": 6.58, "change_pct": 10.03, "reason": "国内纯碱行业龙头，现有PVC产能50.5万吨/年；公司主营产品涵盖混合甲基环硅氧烷等系列产品，具有年产有机硅单体40万吨的生产能力，成为国内领先的有机硅新材料产业基地", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 2.62, "first_limit_up": 1784783042, "break_limit_up_times": 0}, {"code": "600550", "name": "保变电气", "price": 11.65, "change_pct": 10.01, "reason": "兵器装备集团旗下，特高压、核电变压领域龙头", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1784773190, "break_limit_up_times": 0}, {"code": "300214", "name": "日科化学", "price": 10.26, "change_pct": 20.0, "reason": "公司拟收购亘元新材70.75%股份，标的主营锂电池电解液核心添加剂VC（碳酸亚乙烯酯）和FEC（氟代碳酸乙烯酯），与下游宁德时代、比亚迪等多家优质大客户建立了战略合作关系，是行业领先的锂电池电解液添加剂生产商。", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 10.79, "first_limit_up": 1784777019, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 10.9, "change_pct": 9.99, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 2, "turnover_ratio": 19.4, "first_limit_up": 1784775717, "break_limit_up_times": 2}, {"code": "002412", "name": "汉森制药", "price": 7.38, "change_pct": 9.99, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 6.69, "first_limit_up": 1784770728, "break_limit_up_times": 0}, {"code": "600230", "name": "沧州大化", "price": 13.49, "change_pct": 10.03, "reason": "1、公司此前共聚硅PC产品投料试车成功，使公司成为国内第一家连续生产法生产共聚硅PC的企业，填补了该领域国内空白；\n2、公司拥有烧碱产能16万吨/年", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1784788981, "break_limit_up_times": 0}, {"code": "603843", "name": "*ST正平", "price": 6.05, "change_pct": 10.0, "reason": "青海路桥工程施工企业；25年业绩同比大幅减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.29, "first_limit_up": 1784789479, "break_limit_up_times": 0}, {"code": "000608", "name": "阳光股份", "price": 6.42, "change_pct": 9.93, "reason": "公司撤销退市风险警示，正在积极推进上海项目相关工作", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 5.3, "first_limit_up": 1784771652, "break_limit_up_times": 0}, {"code": "002112", "name": "三变科技", "price": 14.52, "change_pct": 10.0, "reason": "公司专注于500kV 级及以下电力变压器研发，在国内率先试制智能变电站用 35kV、110kV 智能变压器，还与国网武汉南瑞合作研制光纤测温变压器", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 6.64, "first_limit_up": 1784772966, "break_limit_up_times": 0}, {"code": "000632", "name": "ST三木", "price": 2.97, "change_pct": 10.0, "reason": "旗下控股子公司福建融达通供应链管理有限公司，是福州跨境电商公共服务平台、跨境电商保税监管物流中心主要运营方 ，为跨境电商提供一站式平台对接方案", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.28, "first_limit_up": 1784784699, "break_limit_up_times": 0}, {"code": "000011", "name": "深物业A", "price": 7.51, "change_pct": 9.96, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.43, "first_limit_up": 1784770422, "break_limit_up_times": 2}, {"code": "002165", "name": "红 宝 丽", "price": 6.49, "change_pct": 10.0, "reason": "公司主要从事环氧丙烷衍生品，一异丙醇胺可用于电子化学品之光刻胶清洗剂，也是近年来公司在国内市场重点拓展的应用领域之一", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 11.35, "first_limit_up": 1784775675, "break_limit_up_times": 0}, {"code": "000533", "name": "顺钠股份", "price": 8.68, "change_pct": 10.01, "reason": "全资子公司顺特电气设备有限公司产品广泛用于智能电网建设，干式变压器、开关柜等产品应用于数据中心基础设施建设等领域", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1784770767, "break_limit_up_times": 1}, {"code": "688618", "name": "三旺通信", "price": 30.07, "change_pct": 19.99, "reason": "1、公司为光纤收发器供应商，主营工业互联网通信产品的研产销，主要产品为工业以太网交换机、嵌入式工业以太网模块等，实现了工业级室外5G CPE产品的量产；\n2、子公司三旺奇通于2020年3月与上海市松江区人民政府签订战略协议，以自有资金投资智慧城市及工业互联网的芯片研发业务", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 3.62, "first_limit_up": 1784771310, "break_limit_up_times": 1}, {"code": "300444", "name": "双杰电气", "price": 9.54, "change_pct": 20.0, "reason": "公司主要产品为40.5kV以下输配电设备及控制系统，包括环网柜、柱上开关、高低压成套开关柜、全系列低压开关柜、电能质量治理等产品", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 17.06, "first_limit_up": 1784782986, "break_limit_up_times": 0}, {"code": "002197", "name": "证通电子", "price": 7.67, "change_pct": 10.04, "reason": "1、公司算力业务依据客户订单进行扩容，现阶段全力推进机柜订单落地；\n2、国内最早研发金融电子设备的高新技术企业之一；公司已围绕数字货币加密算法、数字钱包设备及其应用、数字货币支付模组及支付设备、数字货币收单设备等关键领域开展一套完整的数字货币安全支付方案研究工作，可根据客户需求提供数字人民币支付对接到银行系统的应用开发解决方案", "plates": ["云计算数据中心"], "limit_up_days": 3, "turnover_ratio": 20.37, "first_limit_up": 1784770287, "break_limit_up_times": 6}, {"code": "600354", "name": "敦煌种业", "price": 6.04, "change_pct": 10.02, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 11.72, "first_limit_up": 1784786709, "break_limit_up_times": 1}, {"code": "605117", "name": "德业股份", "price": 88.51, "change_pct": 10.0, "reason": "公司一季度净利润同比增长68.37%，报告期内，公司储能逆变器、储能电池包产品销售收入同比大幅增长，进而推动公司经营业绩增长", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1784788702, "break_limit_up_times": 0}, {"code": "002353", "name": "杰瑞股份", "price": 135.11, "change_pct": 10.0, "reason": "公司签署近百亿元燃气轮机发电机组供应合同", "plates": ["燃气轮机"], "limit_up_days": 1, "turnover_ratio": 0.42, "first_limit_up": 1784769900, "break_limit_up_times": 0}, {"code": "603619", "name": "中曼石油", "price": 23.47, "change_pct": 9.98, "reason": "公司业务涵盖勘探开发、油服工程、石油装备制造，已形成成熟完备的钻采一体化服务能力，油气装备涵盖从钻机整机到顶驱、泥浆泵、自动猫道等关键部件一系列产品体系", "plates": ["油服"], "limit_up_days": 2, "turnover_ratio": 3.5, "first_limit_up": 1784770271, "break_limit_up_times": 0}, {"code": "000155", "name": "川能动力", "price": 12.29, "change_pct": 10.03, "reason": "公司聚焦 “新能源发电 + 锂电” 双主业，省内新能源装机规模居前列", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 4.47, "first_limit_up": 1784777388, "break_limit_up_times": 1}, {"code": "601700", "name": "风范股份", "price": 4.95, "change_pct": 10.0, "reason": "公司中标2.9亿元南方电网特高压直流输电工程项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.39, "first_limit_up": 1784788494, "break_limit_up_times": 0}, {"code": "002240", "name": "盛新锂能", "price": 30.42, "change_pct": 10.02, "reason": "公司在阿根廷的SDLA盐湖项目年产能为2500吨碳酸锂当量，为在产项目，目前生产情况正常", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 6.47, "first_limit_up": 1784774808, "break_limit_up_times": 0}, {"code": "605100", "name": "华丰股份", "price": 30.56, "change_pct": 10.01, "reason": "在数据中心领域，公司除向客户提供大功率发电机组外，还提供工程安装、机房消声降噪、供油系统等一体化解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1784771305, "break_limit_up_times": 0}, {"code": "002606", "name": "大连电瓷", "price": 13.61, "change_pct": 10.02, "reason": "公司上半年净利润同比预增200.55%至286.43%，报告期内，公司顺利完成“阿坝—成都”“甘肃—浙江”“中核—海阳西”等重点特高压工程的产品供货工作，高等级、高附加值产品销售占比较上年同期显著提升，综合毛利率维持在较好水平，盈利结构持续优化。与此同时，中东区域地缘冲突的影响逐步消退，该区域市场需求持续修复，公司存量订单实现有序交付；公司持续拓展海外新兴区域客户资源，推进属地化运营与市场开发工作，海外业务重回增长轨道，海内外市场同步发力，带动公司营业收入提升", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.2, "first_limit_up": 1784784954, "break_limit_up_times": 0}, {"code": "002173", "name": "创新医疗", "price": 18.76, "change_pct": 10.03, "reason": "公司此前出资设立的“杭州博灵医疗科技有限公司”，该公司运用脑机接口技术帮助偏瘫患者恢复对残疾肢体自主控制的技术研究工作取得了一定的进展", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 14.51, "first_limit_up": 1784784684, "break_limit_up_times": 0}, {"code": "603956", "name": "威派格", "price": 5.74, "change_pct": 9.96, "reason": "1、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地；\n2、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.83, "first_limit_up": 1784771357, "break_limit_up_times": 1}, {"code": "002207", "name": "*ST准油", "price": 5.37, "change_pct": 10.04, "reason": "公司主要从事油气藏综合研究、油气井测试业务、调剖、堵水、酸化、井下分注管柱等井下作业业务等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.13, "first_limit_up": 1784776962, "break_limit_up_times": 0}, {"code": "600173", "name": "卧龙新能", "price": 6.14, "change_pct": 10.04, "reason": "公司持股44.9%的浙江龙能电力自主研发的光伏清扫机器人已于广西、安徽等地电站完成首批安装调试", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1784774934, "break_limit_up_times": 1}, {"code": "001258", "name": "立新能源", "price": 12.11, "change_pct": 9.99, "reason": "公司立足新疆，专注风力发电和光伏发电业务", "plates": ["智能电网"], "limit_up_days": 6, "turnover_ratio": 11.3, "first_limit_up": 1784770305, "break_limit_up_times": 10}, {"code": "300510", "name": "金冠股份", "price": 3.66, "change_pct": 20.0, "reason": "公司秉持 “智慧电力 + 数字新能源 + 集成服务” 战略，形成完整研发制造体系；在智能电网领域，为超 20 个省市电力公司供货，产品覆盖电气成套设备、智能电表等；推出融合 AI 技术的新一代中低压配电系统，还中标多项国家电网智能电网项目，持续助力智能电网建设", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 11.94, "first_limit_up": 1784789523, "break_limit_up_times": 0}, {"code": "002298", "name": "中电鑫龙", "price": 7.36, "change_pct": 10.01, "reason": "在OpenClaw普及后，电力设备与安防系统面临的网络攻击风险大幅提升，公司打造了AI驱动的电力安防一体化安全解决方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1784771019, "break_limit_up_times": 0}, {"code": "002300", "name": "太阳电缆", "price": 6.45, "change_pct": 10.07, "reason": "福建升级扩容“福淡”“厦金”海底光缆，推进“福州—深圳短路径光缆”项目建设；公司产品有海底电力电缆、海底光电复合电缆、柔性直流海底电缆", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.31, "first_limit_up": 1784773140, "break_limit_up_times": 0}, {"code": "002775", "name": "文科股份", "price": 3.53, "change_pct": 9.97, "reason": "公司与新凯来有办公场所租赁业务合作", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.3, "first_limit_up": 1784776440, "break_limit_up_times": 0}, {"code": "603272", "name": "*ST联翔", "price": 15.39, "change_pct": 10.01, "reason": "A股首家墙布上市企业，控股股东拟协议转让5%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.62, "first_limit_up": 1784770482, "break_limit_up_times": 0}, {"code": "002088", "name": "鲁阳节能", "price": 7.57, "change_pct": 10.03, "reason": "中国陶瓷纤维龙头，间接控股股东筹划破产重组，公司实控人拟发生变更", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.26, "first_limit_up": 1784770224, "break_limit_up_times": 1}, {"code": "002560", "name": "通达股份", "price": 5.96, "change_pct": 9.96, "reason": "国内架空导线龙头，特高压导线主要供应商，2025年净利润增逾5倍", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 8.88, "first_limit_up": 1784783241, "break_limit_up_times": 0}, {"code": "002498", "name": "汉缆股份", "price": 5.91, "change_pct": 10.06, "reason": "海上风电产业所需海缆产品的主要供应商之一，一季度净利润同比增长12.17%", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.31, "first_limit_up": 1784771358, "break_limit_up_times": 1}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第二次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "ST/风险警示股", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};