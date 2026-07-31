const UPDATE_TIME = "2026-07-31 04:19";
const THS_HOT = [
  {
    "name": "AI应用",
    "rise": 5.54,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "存储芯片",
    "rise": 6.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续213天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 6.94,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续260天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "AI视频",
    "rise": 8.61,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "创新药",
    "rise": 1.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续90天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 5.95,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "国家大基金持股",
    "rise": 6.43,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "人形机器人",
    "rise": 4.96,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续424天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": 5.95,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "机器人概念",
    "rise": 4.04,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "商业航天",
    "rise": 4.1,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续189天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "白酒概念",
    "rise": 0.61,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "脑机接口",
    "rise": 3.86,
    "rate": 0,
    "tag": "",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "人工智能",
    "rise": 4.51,
    "rate": 0,
    "tag": "33家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "芯片概念",
    "rise": 5.48,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": 6.28,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续53天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光刻机",
    "rise": 6.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": -1,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "光纤概念",
    "rise": 5.95,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 0,
    "etfName": "TMT50ETF",
    "code": "886084"
  },
  {
    "name": "快手概念",
    "rise": 8.09,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885918"
  },
  {
    "name": "智谱AI",
    "rise": 7.88,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "886090"
  }
];
const THS_EVENTS = [
  {
    "title": "降价 80%！OpenAI 下调 GPT-5.6 Luna 模型费用，性价比超 DeepSeek V4 Pro",
    "desc": "",
    "heat": 838397,
    "direction": "ChatGPT",
    "themes": [
      "AI应用",
      "ChatGPT概念"
    ],
    "stocks": [
      {
        "name": "立方控股",
        "code": "920130",
        "chg": 29.980904
      }
    ]
  },
  {
    "title": "存储巨头，大涨！韩国股市涨至熔断",
    "desc": "",
    "heat": 763056,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "利和兴",
        "code": "301013",
        "chg": 16.08154
      }
    ]
  },
  {
    "title": "国家发改委：十五五算力网将新增直接投资4万亿",
    "desc": "",
    "heat": 693009,
    "direction": "Token工厂",
    "themes": [
      "东数西算(算力)",
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "宏景科技",
        "code": "301396",
        "chg": 20.003074
      }
    ]
  },
  {
    "title": "MLCC超级周期来袭？产业链公司“涨”声四起",
    "desc": "",
    "heat": 641626,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "利和兴",
        "code": "301013",
        "chg": 16.08154
      }
    ]
  },
  {
    "title": "宇树科技IPO询价、申购日期确定",
    "desc": "",
    "heat": 579680,
    "direction": "宇树机器人",
    "themes": [
      "宇树科技",
      "人形机器人",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "维宏股份",
        "code": "300508",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "暑期档总票房破65亿元，票房TOP5出炉",
    "desc": "",
    "heat": 550531,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "捷成股份",
        "code": "300182",
        "chg": 11.279826
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "Kimi概念",
    "change": "+11.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "词元概念/Token",
    "change": "+11.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+9.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Sora/AI视频",
    "change": "+8.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+8.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ChatGPT",
    "change": "+8.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+8.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+8.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+8.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+8.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+8.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+7.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DeepSeek概念股",
    "change": "+7.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "交换机",
    "change": "+7.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+7.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AIGC概念",
    "change": "+7.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+7.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+7.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+7.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+7.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 12,
    "hot_rank_chg": 4,
    "stock_cnt": 5777,
    "price": "5.57",
    "change": "3.92",
    "market_id": "33",
    "circulate_market_value": "196994940000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 5.73
      },
      {
        "name": "手机产业链",
        "change_pct": 5.12
      },
      {
        "name": "超高清视频",
        "change_pct": 4.44
      },
      {
        "name": "苹果产业链",
        "change_pct": 5.84
      },
      {
        "name": "电竞",
        "change_pct": 4.12
      },
      {
        "name": "半导体",
        "change_pct": 6.64
      },
      {
        "name": "人工智能",
        "change_pct": 5.28
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.26
      },
      {
        "name": "VR&AR",
        "change_pct": 5.65
      },
      {
        "name": "OLED",
        "change_pct": 5.07
      },
      {
        "name": "京津冀",
        "change_pct": 2.55
      },
      {
        "name": "物联网",
        "change_pct": 4.4
      },
      {
        "name": "指纹识别",
        "change_pct": 4.82
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.03
      },
      {
        "name": "白马股",
        "change_pct": 0.11
      },
      {
        "name": "智能制造",
        "change_pct": 4.59
      },
      {
        "name": "小米概念股",
        "change_pct": 5.21
      },
      {
        "name": "国产芯片",
        "change_pct": 5.99
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 4.71
      },
      {
        "name": "全息概念",
        "change_pct": 4.95
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.69
      },
      {
        "name": "MicroLED",
        "change_pct": 5.29
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 3.32
      },
      {
        "name": "智能手表",
        "change_pct": 4.66
      },
      {
        "name": "MiniLED",
        "change_pct": 4.92
      },
      {
        "name": "传感器",
        "change_pct": 5.04
      },
      {
        "name": "大硅片",
        "change_pct": 5.72
      },
      {
        "name": "AI PC",
        "change_pct": 5.13
      },
      {
        "name": "华为产业链",
        "change_pct": 5.21
      },
      {
        "name": "回购",
        "change_pct": 1.98
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 5.99
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 5.58
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 15,
    "hot_rank_chg": -7,
    "stock_cnt": 5777,
    "price": "12.12",
    "change": "-1.86",
    "market_id": "33",
    "circulate_market_value": "11311881800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.96
      },
      {
        "name": "新疆概念",
        "change_pct": 1.42
      },
      {
        "name": "光伏",
        "change_pct": 3.04
      },
      {
        "name": "风电",
        "change_pct": 1.95
      },
      {
        "name": "储能",
        "change_pct": 2.75
      },
      {
        "name": "国企改革",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 29,
    "hot_rank_chg": -4,
    "stock_cnt": 5777,
    "price": "5.71",
    "change": "2.70",
    "market_id": "17",
    "circulate_market_value": "14380691000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.75
      },
      {
        "name": "工业大麻",
        "change_pct": 2.13
      },
      {
        "name": "中药",
        "change_pct": 1.44
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "保健品",
        "change_pct": 1.03
      },
      {
        "name": "民营医院",
        "change_pct": 1.35
      },
      {
        "name": "医药",
        "change_pct": 1.77
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "流感",
        "change_pct": 2.32
      },
      {
        "name": "振兴东北",
        "change_pct": 0.93
      },
      {
        "name": "食品",
        "change_pct": 1.04
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 33,
    "hot_rank_chg": -14,
    "stock_cnt": 5777,
    "price": "5.87",
    "change": "-1.34",
    "market_id": "33",
    "circulate_market_value": "7611838200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.44
      },
      {
        "name": "创新药",
        "change_pct": 1.91
      },
      {
        "name": "央企改革",
        "change_pct": 1.13
      },
      {
        "name": "医疗器械",
        "change_pct": 2.63
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.26
      },
      {
        "name": "保健品",
        "change_pct": 1.03
      },
      {
        "name": "民营医院",
        "change_pct": 1.35
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 1.6
      },
      {
        "name": "医药",
        "change_pct": 1.77
      },
      {
        "name": "化学原料药",
        "change_pct": 1.73
      },
      {
        "name": "海南概念",
        "change_pct": 1.51
      },
      {
        "name": "脑科学",
        "change_pct": 3.95
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.64
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.1
      },
      {
        "name": "食品",
        "change_pct": 1.04
      },
      {
        "name": "国企改革",
        "change_pct": 1.31
      },
      {
        "name": "医疗信息化",
        "change_pct": 5.13
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.41
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      },
      {
        "name": "合成生物",
        "change_pct": 1.89
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 41,
    "hot_rank_chg": 5,
    "stock_cnt": 5777,
    "price": "5.77",
    "change": "1.76",
    "market_id": "33",
    "circulate_market_value": "5960039600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.34
      },
      {
        "name": "锂电池",
        "change_pct": 2.64
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 5.91
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.49
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 43,
    "hot_rank_chg": 7,
    "stock_cnt": 5777,
    "price": "9.53",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "8450791700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "半年报扭亏",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 5.0
      },
      {
        "name": "手机产业链",
        "change_pct": 5.12
      },
      {
        "name": "超高清视频",
        "change_pct": 4.44
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "OLED",
        "change_pct": 5.07
      },
      {
        "name": "包装印刷",
        "change_pct": 2.27
      },
      {
        "name": "光伏",
        "change_pct": 3.04
      },
      {
        "name": "小米概念股",
        "change_pct": 5.21
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 4.71
      },
      {
        "name": "可降解塑料",
        "change_pct": 2.08
      },
      {
        "name": "华为产业链",
        "change_pct": 5.21
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 5.51
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 45,
    "hot_rank_chg": 3,
    "stock_cnt": 5777,
    "price": "8.81",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "2506283000.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.99
      },
      {
        "name": "密集调研",
        "change_pct": 3.89
      },
      {
        "name": "ST摘帽",
        "change_pct": 4.0
      },
      {
        "name": "教育",
        "change_pct": 4.46
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.7
      },
      {
        "name": "职业教育",
        "change_pct": 4.62
      },
      {
        "name": "在线教育",
        "change_pct": 5.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 5.24
      },
      {
        "name": "华为产业链",
        "change_pct": 5.21
      },
      {
        "name": "智谱AI",
        "change_pct": 8.06
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 47,
    "hot_rank_chg": -12,
    "stock_cnt": 5777,
    "price": "9.47",
    "change": "3.05",
    "market_id": "17",
    "circulate_market_value": "8228982800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.75
      },
      {
        "name": "快递物流",
        "change_pct": 0.56
      },
      {
        "name": "新零售",
        "change_pct": 1.88
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.73
      },
      {
        "name": "旅游",
        "change_pct": 1.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.7
      },
      {
        "name": "物业管理",
        "change_pct": 1.03
      },
      {
        "name": "免税店概念",
        "change_pct": 0.66
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 49,
    "hot_rank_chg": -15,
    "stock_cnt": 5777,
    "price": "10.57",
    "change": "-2.85",
    "market_id": "17",
    "circulate_market_value": "7190979000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.0
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "雄安新区",
        "change_pct": 2.45
      },
      {
        "name": "煤化工",
        "change_pct": -0.47
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 50,
    "hot_rank_chg": 1,
    "stock_cnt": 5777,
    "price": "10.50",
    "change": "-3.85",
    "market_id": "33",
    "circulate_market_value": "7191475200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 3.35
      },
      {
        "name": "核电",
        "change_pct": 2.35
      },
      {
        "name": "充电桩",
        "change_pct": 3.24
      },
      {
        "name": "云计算数据中心",
        "change_pct": 5.91
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.97
      },
      {
        "name": "储能",
        "change_pct": 2.75
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.7
      },
      {
        "name": "智能电网",
        "change_pct": 3.26
      },
      {
        "name": "核聚变",
        "change_pct": 2.8
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 60,
    "hot_rank_chg": 77,
    "stock_cnt": 5777,
    "price": "4.05",
    "change": "9.76",
    "market_id": "17",
    "circulate_market_value": "10447239200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 1.62
      },
      {
        "name": "京津冀",
        "change_pct": 2.55
      },
      {
        "name": "雄安新区",
        "change_pct": 2.45
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.85
      },
      {
        "name": "住房租赁",
        "change_pct": 0.85
      },
      {
        "name": "物业管理",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 63,
    "hot_rank_chg": -30,
    "stock_cnt": 5777,
    "price": "4.21",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "4289678500.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "酒店",
    "xgb_concepts": [
      {
        "name": "湖南国企改革",
        "change_pct": 1.97
      },
      {
        "name": "旅游",
        "change_pct": 1.68
      },
      {
        "name": "物业管理",
        "change_pct": 1.03
      },
      {
        "name": "预制菜",
        "change_pct": 0.77
      },
      {
        "name": "国企改革",
        "change_pct": 1.31
      },
      {
        "name": "餐饮",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 70,
    "hot_rank_chg": -8,
    "stock_cnt": 5777,
    "price": "5.93",
    "change": "1.89",
    "market_id": "17",
    "circulate_market_value": "73508808000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.13
      },
      {
        "name": "核电",
        "change_pct": 2.35
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.47
      },
      {
        "name": "水电",
        "change_pct": 0.49
      },
      {
        "name": "火电",
        "change_pct": 0.37
      },
      {
        "name": "光伏",
        "change_pct": 3.04
      },
      {
        "name": "风电",
        "change_pct": 1.95
      },
      {
        "name": "国企改革",
        "change_pct": 1.31
      },
      {
        "name": "算电协同",
        "change_pct": 2.74
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 81,
    "hot_rank_chg": 105,
    "stock_cnt": 5777,
    "price": "9.94",
    "change": "4.41",
    "market_id": "17",
    "circulate_market_value": "12754994200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.68
      },
      {
        "name": "强势人气股",
        "change_pct": 3.66
      },
      {
        "name": "智能制造",
        "change_pct": 4.59
      },
      {
        "name": "工业互联网",
        "change_pct": 4.56
      },
      {
        "name": "培育钻石",
        "change_pct": 4.73
      },
      {
        "name": "金刚线",
        "change_pct": 5.87
      },
      {
        "name": "国资入股",
        "change_pct": 1.99
      },
      {
        "name": "深地经济",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 84,
    "hot_rank_chg": 22,
    "stock_cnt": 5777,
    "price": "7.19",
    "change": "2.71",
    "market_id": "33",
    "circulate_market_value": "5970936100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 5.0
      },
      {
        "name": "资产重组",
        "change_pct": 3.8
      },
      {
        "name": "半导体",
        "change_pct": 6.64
      },
      {
        "name": "小米概念股",
        "change_pct": 5.21
      },
      {
        "name": "国产芯片",
        "change_pct": 5.99
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 85,
    "hot_rank_chg": -46,
    "stock_cnt": 5777,
    "price": "4.66",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "27283361000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI营销",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.68
      },
      {
        "name": "人工智能",
        "change_pct": 5.28
      },
      {
        "name": "水利",
        "change_pct": 2.5
      },
      {
        "name": "直播/短视频",
        "change_pct": 7.01
      },
      {
        "name": "大数据",
        "change_pct": 5.51
      },
      {
        "name": "园林",
        "change_pct": 4.43
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 5.21
      },
      {
        "name": "数字经济",
        "change_pct": 5.18
      },
      {
        "name": "腾讯概念股",
        "change_pct": 5.88
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.69
      },
      {
        "name": "第三代半导体",
        "change_pct": 5.38
      },
      {
        "name": "快手概念股",
        "change_pct": 8.48
      },
      {
        "name": "IGBT",
        "change_pct": 4.68
      },
      {
        "name": "虚拟数字人",
        "change_pct": 6.87
      },
      {
        "name": "AIGC概念",
        "change_pct": 7.41
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 6.95
      },
      {
        "name": "氮化镓",
        "change_pct": 5.26
      },
      {
        "name": "AI营销",
        "change_pct": 9.56
      },
      {
        "name": "多模态",
        "change_pct": 7.8
      },
      {
        "name": "液冷服务器",
        "change_pct": 5.0
      },
      {
        "name": "小红书概念股",
        "change_pct": 8.66
      },
      {
        "name": "区块链",
        "change_pct": 4.8
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 86,
    "hot_rank_chg": 2,
    "stock_cnt": 5777,
    "price": "11.46",
    "change": "-4.02",
    "market_id": "33",
    "circulate_market_value": "6683595500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 1.46
      },
      {
        "name": "一带一路",
        "change_pct": 1.71
      },
      {
        "name": "天然气",
        "change_pct": 1.17
      },
      {
        "name": "油气改革",
        "change_pct": 0.59
      },
      {
        "name": "页岩气",
        "change_pct": 0.93
      },
      {
        "name": "深地经济",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 90,
    "hot_rank_chg": 0,
    "stock_cnt": 5777,
    "price": "8.77",
    "change": "-0.45",
    "market_id": "33",
    "circulate_market_value": "5794838800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 3.35
      },
      {
        "name": "国产软件",
        "change_pct": 6.48
      },
      {
        "name": "人工智能",
        "change_pct": 5.28
      },
      {
        "name": "充电桩",
        "change_pct": 3.24
      },
      {
        "name": "云计算数据中心",
        "change_pct": 5.91
      },
      {
        "name": "军民融合",
        "change_pct": 3.64
      },
      {
        "name": "磁悬浮",
        "change_pct": 1.68
      },
      {
        "name": "人脸识别",
        "change_pct": 4.31
      },
      {
        "name": "水利",
        "change_pct": 2.5
      },
      {
        "name": "物联网",
        "change_pct": 4.4
      },
      {
        "name": "大数据",
        "change_pct": 5.51
      },
      {
        "name": "智慧城市",
        "change_pct": 4.46
      },
      {
        "name": "军工",
        "change_pct": 3.19
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.97
      },
      {
        "name": "储能",
        "change_pct": 2.75
      },
      {
        "name": "智慧安防",
        "change_pct": 4.57
      },
      {
        "name": "无人机",
        "change_pct": 3.42
      },
      {
        "name": "虚拟电厂",
        "change_pct": 2.87
      },
      {
        "name": "信创",
        "change_pct": 6.5
      },
      {
        "name": "元宇宙",
        "change_pct": 6.03
      },
      {
        "name": "东数西算/算力",
        "change_pct": 5.99
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.92
      },
      {
        "name": "AIGC概念",
        "change_pct": 7.41
      },
      {
        "name": "数字乡村",
        "change_pct": 3.53
      },
      {
        "name": "华为海思",
        "change_pct": 5.28
      },
      {
        "name": "闪存",
        "change_pct": 6.01
      },
      {
        "name": "UWB超宽带",
        "change_pct": 4.53
      },
      {
        "name": "智慧政务",
        "change_pct": 5.7
      },
      {
        "name": "特高压",
        "change_pct": 2.26
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 6.4
      },
      {
        "name": "华为产业链",
        "change_pct": 5.21
      },
      {
        "name": "时空大数据",
        "change_pct": 3.56
      },
      {
        "name": "服务器",
        "change_pct": 4.65
      },
      {
        "name": "智能电网",
        "change_pct": 3.26
      },
      {
        "name": "磁电存储",
        "change_pct": 3.79
      },
      {
        "name": "军工信息化",
        "change_pct": 4.06
      },
      {
        "name": "光纤概念",
        "change_pct": 6.24
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.71
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 93,
    "hot_rank_chg": 68,
    "stock_cnt": 5777,
    "price": "12.30",
    "change": "4.15",
    "market_id": "17",
    "circulate_market_value": "61364930000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.68
      },
      {
        "name": "半导体",
        "change_pct": 6.64
      },
      {
        "name": "5G",
        "change_pct": 5.37
      },
      {
        "name": "VR&AR",
        "change_pct": 5.65
      },
      {
        "name": "光通信",
        "change_pct": 7.24
      },
      {
        "name": "3D感应",
        "change_pct": 4.39
      },
      {
        "name": "汽车零部件",
        "change_pct": 3.03
      },
      {
        "name": "LED",
        "change_pct": 4.24
      },
      {
        "name": "国产芯片",
        "change_pct": 5.99
      },
      {
        "name": "MicroLED",
        "change_pct": 5.29
      },
      {
        "name": "第三代半导体",
        "change_pct": 5.38
      },
      {
        "name": "激光雷达",
        "change_pct": 6.53
      },
      {
        "name": "华为汽车",
        "change_pct": 2.66
      },
      {
        "name": "MiniLED",
        "change_pct": 4.92
      },
      {
        "name": "氮化镓",
        "change_pct": 5.26
      },
      {
        "name": "大基金概念",
        "change_pct": 6.16
      },
      {
        "name": "碳化硅",
        "change_pct": 5.28
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 8.35
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "57.60", "change": "8.95", "market_id": "17", "circulate_market_value": "259375040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5777, "price": "404.24", "change": "3.64", "market_id": "33", "circulate_market_value": "66711628000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "395.51", "change": "6.58", "market_id": "17", "circulate_market_value": "264395240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "51.69", "change": "2.36", "market_id": "33", "circulate_market_value": "59805990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": 9, "stock_cnt": 5777, "price": "17.23", "change": "10.03", "market_id": "17", "circulate_market_value": "36037272000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5777, "price": "934.25", "change": "8.13", "market_id": "33", "circulate_market_value": "1036961240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "67.55", "change": "4.71", "market_id": "17", "circulate_market_value": "120874954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5777, "price": "174.33", "change": "7.74", "market_id": "33", "circulate_market_value": "241677470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 9, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "15.70", "change": "5.30", "market_id": "33", "circulate_market_value": "52165633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5777, "price": "35.02", "change": "4.23", "market_id": "33", "circulate_market_value": "100159745000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5777, "price": "58.12", "change": "3.99", "market_id": "33", "circulate_market_value": "88194323000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 12, "hot_rank_chg": 4, "stock_cnt": 5777, "price": "5.57", "change": "3.92", "market_id": "33", "circulate_market_value": "196994940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 5.73}, {"name": "手机产业链", "change_pct": 5.12}, {"name": "超高清视频", "change_pct": 4.44}, {"name": "苹果产业链", "change_pct": 5.84}, {"name": "电竞", "change_pct": 4.12}, {"name": "半导体", "change_pct": 6.64}, {"name": "人工智能", "change_pct": 5.28}, {"name": "互联网医疗", "change_pct": 3.26}, {"name": "VR&AR", "change_pct": 5.65}, {"name": "OLED", "change_pct": 5.07}, {"name": "京津冀", "change_pct": 2.55}, {"name": "物联网", "change_pct": 4.4}, {"name": "指纹识别", "change_pct": 4.82}, {"name": "汽车零部件", "change_pct": 3.03}, {"name": "白马股", "change_pct": 0.11}, {"name": "智能制造", "change_pct": 4.59}, {"name": "小米概念股", "change_pct": 5.21}, {"name": "国产芯片", "change_pct": 5.99}, {"name": "液晶面板/LCD", "change_pct": 4.71}, {"name": "全息概念", "change_pct": 4.95}, {"name": "理想汽车概念股", "change_pct": 2.69}, {"name": "MicroLED", "change_pct": 5.29}, {"name": "钙钛矿电池", "change_pct": 3.32}, {"name": "智能手表", "change_pct": 4.66}, {"name": "MiniLED", "change_pct": 4.92}, {"name": "传感器", "change_pct": 5.04}, {"name": "大硅片", "change_pct": 5.72}, {"name": "AI PC", "change_pct": 5.13}, {"name": "华为产业链", "change_pct": 5.21}, {"name": "回购", "change_pct": 1.98}, {"name": "智能眼镜/MR头显", "change_pct": 5.99}, {"name": "玻璃基板封装", "change_pct": 5.58}]}, {"code": "000021", "name": "深科技", "hot_rank": 13, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "38.25", "change": "5.03", "market_id": "33", "circulate_market_value": "60211451000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 14, "hot_rank_chg": 10, "stock_cnt": 5777, "price": "362.76", "change": "7.08", "market_id": "33", "circulate_market_value": "102244592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 15, "hot_rank_chg": -7, "stock_cnt": 5777, "price": "12.12", "change": "-1.86", "market_id": "33", "circulate_market_value": "11311881800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.66}, {"name": "新疆国企改革", "change_pct": 0.96}, {"name": "新疆概念", "change_pct": 1.42}, {"name": "光伏", "change_pct": 3.04}, {"name": "风电", "change_pct": 1.95}, {"name": "储能", "change_pct": 2.75}, {"name": "国企改革", "change_pct": 1.31}]}, {"code": "300502", "name": "新易盛", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5777, "price": "409.50", "change": "10.35", "market_id": "33", "circulate_market_value": "513612570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 17, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "49.12", "change": "4.07", "market_id": "17", "circulate_market_value": "120523104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": 8, "stock_cnt": 5777, "price": "36.86", "change": "2.76", "market_id": "17", "circulate_market_value": "31203956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5777, "price": "14.47", "change": "-0.48", "market_id": "17", "circulate_market_value": "21310068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 20, "hot_rank_chg": -7, "stock_cnt": 5777, "price": "32.73", "change": "-0.70", "market_id": "17", "circulate_market_value": "47851090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 21, "hot_rank_chg": 16, "stock_cnt": 5777, "price": "96.01", "change": "10.00", "market_id": "17", "circulate_market_value": "34633054000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600176", "name": "中国巨石", "hot_rank": 22, "hot_rank_chg": 8, "stock_cnt": 5777, "price": "38.47", "change": "5.02", "market_id": "17", "circulate_market_value": "152786950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5777, "price": "19.37", "change": "9.99", "market_id": "17", "circulate_market_value": "7767370000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "乳业"}, {"code": "301526", "name": "国际复材", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5777, "price": "33.99", "change": "3.22", "market_id": "33", "circulate_market_value": "47735315000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 25, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "115.07", "change": "9.28", "market_id": "33", "circulate_market_value": "215158600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 26, "hot_rank_chg": 6, "stock_cnt": 5777, "price": "140.81", "change": "2.81", "market_id": "33", "circulate_market_value": "44851188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "31.75", "change": "3.89", "market_id": "33", "circulate_market_value": "34250863000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "64.80", "change": "5.74", "market_id": "33", "circulate_market_value": "55317727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5777, "price": "5.71", "change": "2.70", "market_id": "17", "circulate_market_value": "14380691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.75}, {"name": "工业大麻", "change_pct": 2.13}, {"name": "中药", "change_pct": 1.44}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "保健品", "change_pct": 1.03}, {"name": "民营医院", "change_pct": 1.35}, {"name": "医药", "change_pct": 1.77}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "流感", "change_pct": 2.32}, {"name": "振兴东北", "change_pct": 0.93}, {"name": "食品", "change_pct": 1.04}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5777, "price": "19.03", "change": "-1.71", "market_id": "33", "circulate_market_value": "8608007400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 31, "hot_rank_chg": -9, "stock_cnt": 5777, "price": "34.38", "change": "-3.56", "market_id": "17", "circulate_market_value": "24898972000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 32, "hot_rank_chg": 52, "stock_cnt": 5777, "price": "67.98", "change": "10.00", "market_id": "33", "circulate_market_value": "44393362000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "磷化铟"}, {"code": "000566", "name": "海南海药", "hot_rank": 33, "hot_rank_chg": -14, "stock_cnt": 5777, "price": "5.87", "change": "-1.34", "market_id": "33", "circulate_market_value": "7611838200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.44}, {"name": "创新药", "change_pct": 1.91}, {"name": "央企改革", "change_pct": 1.13}, {"name": "医疗器械", "change_pct": 2.63}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "互联网医疗", "change_pct": 3.26}, {"name": "保健品", "change_pct": 1.03}, {"name": "民营医院", "change_pct": 1.35}, {"name": "CAR-T疗法", "change_pct": 1.6}, {"name": "医药", "change_pct": 1.77}, {"name": "化学原料药", "change_pct": 1.73}, {"name": "海南概念", "change_pct": 1.51}, {"name": "脑科学", "change_pct": 3.95}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.64}, {"name": "海南自由贸易港", "change_pct": 1.1}, {"name": "食品", "change_pct": 1.04}, {"name": "国企改革", "change_pct": 1.31}, {"name": "医疗信息化", "change_pct": 5.13}, {"name": "新冠病毒防治", "change_pct": 2.41}, {"name": "自贸区", "change_pct": 0.95}, {"name": "合成生物", "change_pct": 1.89}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 34, "hot_rank_chg": 7, "stock_cnt": 5777, "price": "27.16", "change": "3.62", "market_id": "17", "circulate_market_value": "4968469400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 35, "hot_rank_chg": -14, "stock_cnt": 5777, "price": "22.54", "change": "10.01", "market_id": "17", "circulate_market_value": "5460765800.00", "change_type": "1", "change_section": "9", "change_days": "9", "change_reason": "拟收购欧康诺"}, {"code": "688525", "name": "佰维存储", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5777, "price": "234.58", "change": "6.71", "market_id": "17", "circulate_market_value": "110620106000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 37, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "56.71", "change": "5.41", "market_id": "17", "circulate_market_value": "1125358470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 38, "hot_rank_chg": 11, "stock_cnt": 5777, "price": "29.30", "change": "5.78", "market_id": "17", "circulate_market_value": "99999425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 39, "hot_rank_chg": 15, "stock_cnt": 5777, "price": "280.50", "change": "6.79", "market_id": "17", "circulate_market_value": "113977897000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 40, "hot_rank_chg": 46, "stock_cnt": 5777, "price": "131.35", "change": "6.22", "market_id": "33", "circulate_market_value": "55389537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 41, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "5.77", "change": "1.76", "market_id": "33", "circulate_market_value": "5960039600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.34}, {"name": "锂电池", "change_pct": 2.64}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "铜箔/覆铜板", "change_pct": 5.91}, {"name": "粤港澳大湾区", "change_pct": 1.49}, {"name": "新能源汽车", "change_pct": 2.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.14}]}, {"code": "603823", "name": "百合花", "hot_rank": 42, "hot_rank_chg": 24, "stock_cnt": 5777, "price": "49.07", "change": "-1.49", "market_id": "17", "circulate_market_value": "20431163000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 43, "hot_rank_chg": 7, "stock_cnt": 5777, "price": "9.53", "change": "10.05", "market_id": "33", "circulate_market_value": "8450791700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报扭亏", "xgb_concepts": [{"name": "被动元件", "change_pct": 5.0}, {"name": "手机产业链", "change_pct": 5.12}, {"name": "超高清视频", "change_pct": 4.44}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "OLED", "change_pct": 5.07}, {"name": "包装印刷", "change_pct": 2.27}, {"name": "光伏", "change_pct": 3.04}, {"name": "小米概念股", "change_pct": 5.21}, {"name": "液晶面板/LCD", "change_pct": 4.71}, {"name": "可降解塑料", "change_pct": 2.08}, {"name": "华为产业链", "change_pct": 5.21}, {"name": "PET复合铜箔", "change_pct": 5.51}]}, {"code": "688766", "name": "普冉股份", "hot_rank": 44, "hot_rank_chg": 48, "stock_cnt": 5777, "price": "378.00", "change": "7.05", "market_id": "17", "circulate_market_value": "56209943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 45, "hot_rank_chg": 3, "stock_cnt": 5777, "price": "8.81", "change": "9.99", "market_id": "33", "circulate_market_value": "2506283000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "具身智能", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.99}, {"name": "密集调研", "change_pct": 3.89}, {"name": "ST摘帽", "change_pct": 4.0}, {"name": "教育", "change_pct": 4.46}, {"name": "阿里巴巴概念股", "change_pct": 5.7}, {"name": "职业教育", "change_pct": 4.62}, {"name": "在线教育", "change_pct": 5.3}, {"name": "华为鸿蒙", "change_pct": 5.24}, {"name": "华为产业链", "change_pct": 5.21}, {"name": "智谱AI", "change_pct": 8.06}]}, {"code": "600183", "name": "生益科技", "hot_rank": 46, "hot_rank_chg": 35, "stock_cnt": 5777, "price": "107.36", "change": "7.27", "market_id": "17", "circulate_market_value": "258925360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 47, "hot_rank_chg": -12, "stock_cnt": 5777, "price": "9.47", "change": "3.05", "market_id": "17", "circulate_market_value": "8228982800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.75}, {"name": "快递物流", "change_pct": 0.56}, {"name": "新零售", "change_pct": 1.88}, {"name": "福建自贸/海西概念", "change_pct": 1.73}, {"name": "旅游", "change_pct": 1.68}, {"name": "阿里巴巴概念股", "change_pct": 5.7}, {"name": "物业管理", "change_pct": 1.03}, {"name": "免税店概念", "change_pct": 0.66}, {"name": "自贸区", "change_pct": 0.95}]}, {"code": "603118", "name": "共进股份", "hot_rank": 48, "hot_rank_chg": 21, "stock_cnt": 5777, "price": "14.92", "change": "-0.40", "market_id": "17", "circulate_market_value": "11746164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 49, "hot_rank_chg": -15, "stock_cnt": 5777, "price": "10.57", "change": "-2.85", "market_id": "17", "circulate_market_value": "7190979000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.0}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "雄安新区", "change_pct": 2.45}, {"name": "煤化工", "change_pct": -0.47}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 50, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "10.50", "change": "-3.85", "market_id": "33", "circulate_market_value": "7191475200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 3.35}, {"name": "核电", "change_pct": 2.35}, {"name": "充电桩", "change_pct": 3.24}, {"name": "云计算数据中心", "change_pct": 5.91}, {"name": "新能源汽车", "change_pct": 2.97}, {"name": "储能", "change_pct": 2.75}, {"name": "阿里巴巴概念股", "change_pct": 5.7}, {"name": "智能电网", "change_pct": 3.26}, {"name": "核聚变", "change_pct": 2.8}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 51, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "72.66", "change": "5.18", "market_id": "33", "circulate_market_value": "106579999000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 52, "hot_rank_chg": 1, "stock_cnt": 5777, "price": "163.70", "change": "3.56", "market_id": "33", "circulate_market_value": "5047095800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 53, "hot_rank_chg": -9, "stock_cnt": 5777, "price": "54.00", "change": "-3.92", "market_id": "17", "circulate_market_value": "7056352800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 54, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "177.98", "change": "11.17", "market_id": "33", "circulate_market_value": "193711310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 55, "hot_rank_chg": 63, "stock_cnt": 5777, "price": "15.18", "change": "10.00", "market_id": "33", "circulate_market_value": "10554092900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "688008", "name": "澜起科技", "hot_rank": 56, "hot_rank_chg": 19, "stock_cnt": 5777, "price": "211.46", "change": "7.46", "market_id": "17", "circulate_market_value": "242071910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 57, "hot_rank_chg": 14, "stock_cnt": 5777, "price": "104.90", "change": "8.65", "market_id": "33", "circulate_market_value": "201702820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 58, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "164.98", "change": "8.30", "market_id": "33", "circulate_market_value": "129728798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301677", "name": "欣兴工具", "hot_rank": 59, "hot_rank_chg": 19, "stock_cnt": 5777, "price": "96.30", "change": "16.87", "market_id": "33", "circulate_market_value": "2064673700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600376", "name": "首开股份", "hot_rank": 60, "hot_rank_chg": 77, "stock_cnt": 5777, "price": "4.05", "change": "9.76", "market_id": "17", "circulate_market_value": "10447239200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 1.62}, {"name": "京津冀", "change_pct": 2.55}, {"name": "雄安新区", "change_pct": 2.45}, {"name": "北京城市规划", "change_pct": 1.85}, {"name": "住房租赁", "change_pct": 0.85}, {"name": "物业管理", "change_pct": 1.03}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 61, "hot_rank_chg": 13, "stock_cnt": 5777, "price": "196.12", "change": "8.74", "market_id": "33", "circulate_market_value": "169682030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 62, "hot_rank_chg": 85, "stock_cnt": 5777, "price": "52.53", "change": "6.99", "market_id": "33", "circulate_market_value": "38048289000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000428", "name": "华天酒店", "hot_rank": 63, "hot_rank_chg": -30, "stock_cnt": 5777, "price": "4.21", "change": "9.92", "market_id": "33", "circulate_market_value": "4289678500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "酒店", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 1.97}, {"name": "旅游", "change_pct": 1.68}, {"name": "物业管理", "change_pct": 1.03}, {"name": "预制菜", "change_pct": 0.77}, {"name": "国企改革", "change_pct": 1.31}, {"name": "餐饮", "change_pct": 1.06}]}, {"code": "300475", "name": "香农芯创", "hot_rank": 64, "hot_rank_chg": 34, "stock_cnt": 5777, "price": "152.13", "change": "8.02", "market_id": "33", "circulate_market_value": "68463941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 65, "hot_rank_chg": 81, "stock_cnt": 5777, "price": "26.20", "change": "7.25", "market_id": "33", "circulate_market_value": "19844276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 66, "hot_rank_chg": 78, "stock_cnt": 5777, "price": "85.18", "change": "7.13", "market_id": "33", "circulate_market_value": "70615544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 67, "hot_rank_chg": 5, "stock_cnt": 5777, "price": "19.47", "change": "2.21", "market_id": "33", "circulate_market_value": "8194242200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 68, "hot_rank_chg": -11, "stock_cnt": 5777, "price": "29.58", "change": "5.83", "market_id": "33", "circulate_market_value": "23143529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 69, "hot_rank_chg": -1, "stock_cnt": 5777, "price": "297.87", "change": "4.65", "market_id": "17", "circulate_market_value": "43182465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 70, "hot_rank_chg": -8, "stock_cnt": 5777, "price": "5.93", "change": "1.89", "market_id": "17", "circulate_market_value": "73508808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.13}, {"name": "核电", "change_pct": 2.35}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "电力体制改革", "change_pct": 0.47}, {"name": "水电", "change_pct": 0.49}, {"name": "火电", "change_pct": 0.37}, {"name": "光伏", "change_pct": 3.04}, {"name": "风电", "change_pct": 1.95}, {"name": "国企改革", "change_pct": 1.31}, {"name": "算电协同", "change_pct": 2.74}]}, {"code": "000988", "name": "华工科技", "hot_rank": 71, "hot_rank_chg": 6, "stock_cnt": 5777, "price": "97.27", "change": "6.77", "market_id": "33", "circulate_market_value": "97754955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5777, "price": "84.18", "change": "3.93", "market_id": "17", "circulate_market_value": "123159915000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 73, "hot_rank_chg": 56, "stock_cnt": 5777, "price": "269.86", "change": "9.92", "market_id": "33", "circulate_market_value": "132088761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 74, "hot_rank_chg": 41, "stock_cnt": 5777, "price": "28.98", "change": "4.36", "market_id": "17", "circulate_market_value": "48224802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 75, "hot_rank_chg": -28, "stock_cnt": 5777, "price": "32.95", "change": "1.45", "market_id": "17", "circulate_market_value": "51029321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 76, "hot_rank_chg": 50, "stock_cnt": 5777, "price": "88.20", "change": "3.64", "market_id": "17", "circulate_market_value": "6972373900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5777, "price": "1128.02", "change": "8.21", "market_id": "17", "circulate_market_value": "708727030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 78, "hot_rank_chg": 23, "stock_cnt": 5777, "price": "127.73", "change": "3.85", "market_id": "17", "circulate_market_value": "255404120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 79, "hot_rank_chg": 108, "stock_cnt": 5777, "price": "14.38", "change": "4.20", "market_id": "33", "circulate_market_value": "16917622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 80, "hot_rank_chg": 39, "stock_cnt": 5777, "price": "22.33", "change": "0.18", "market_id": "17", "circulate_market_value": "8551591700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 81, "hot_rank_chg": 105, "stock_cnt": 5777, "price": "9.94", "change": "4.41", "market_id": "17", "circulate_market_value": "12754994200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.68}, {"name": "强势人气股", "change_pct": 3.66}, {"name": "智能制造", "change_pct": 4.59}, {"name": "工业互联网", "change_pct": 4.56}, {"name": "培育钻石", "change_pct": 4.73}, {"name": "金刚线", "change_pct": 5.87}, {"name": "国资入股", "change_pct": 1.99}, {"name": "深地经济", "change_pct": 1.13}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 82, "hot_rank_chg": -6, "stock_cnt": 5777, "price": "58.52", "change": "0.29", "market_id": "33", "circulate_market_value": "428663400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 83, "hot_rank_chg": 30, "stock_cnt": 5777, "price": "34.00", "change": "2.10", "market_id": "33", "circulate_market_value": "136939120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000670", "name": "盈方微", "hot_rank": 84, "hot_rank_chg": 22, "stock_cnt": 5777, "price": "7.19", "change": "2.71", "market_id": "33", "circulate_market_value": "5970936100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 5.0}, {"name": "资产重组", "change_pct": 3.8}, {"name": "半导体", "change_pct": 6.64}, {"name": "小米概念股", "change_pct": 5.21}, {"name": "国产芯片", "change_pct": 5.99}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 85, "hot_rank_chg": -46, "stock_cnt": 5777, "price": "4.66", "change": "9.91", "market_id": "33", "circulate_market_value": "27283361000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI营销", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.68}, {"name": "人工智能", "change_pct": 5.28}, {"name": "水利", "change_pct": 2.5}, {"name": "直播/短视频", "change_pct": 7.01}, {"name": "大数据", "change_pct": 5.51}, {"name": "园林", "change_pct": 4.43}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 5.21}, {"name": "数字经济", "change_pct": 5.18}, {"name": "腾讯概念股", "change_pct": 5.88}, {"name": "理想汽车概念股", "change_pct": 2.69}, {"name": "第三代半导体", "change_pct": 5.38}, {"name": "快手概念股", "change_pct": 8.48}, {"name": "IGBT", "change_pct": 4.68}, {"name": "虚拟数字人", "change_pct": 6.87}, {"name": "AIGC概念", "change_pct": 7.41}, {"name": "字节跳动概念股", "change_pct": 6.95}, {"name": "氮化镓", "change_pct": 5.26}, {"name": "AI营销", "change_pct": 9.56}, {"name": "多模态", "change_pct": 7.8}, {"name": "液冷服务器", "change_pct": 5.0}, {"name": "小红书概念股", "change_pct": 8.66}, {"name": "区块链", "change_pct": 4.8}]}, {"code": "300164", "name": "通源石油", "hot_rank": 86, "hot_rank_chg": 2, "stock_cnt": 5777, "price": "11.46", "change": "-4.02", "market_id": "33", "circulate_market_value": "6683595500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 1.46}, {"name": "一带一路", "change_pct": 1.71}, {"name": "天然气", "change_pct": 1.17}, {"name": "油气改革", "change_pct": 0.59}, {"name": "页岩气", "change_pct": 0.93}, {"name": "深地经济", "change_pct": 1.13}]}, {"code": "600519", "name": "贵州茅台", "hot_rank": 87, "hot_rank_chg": -45, "stock_cnt": 5777, "price": "1337.33", "change": "-1.79", "market_id": "17", "circulate_market_value": "1671771600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 88, "hot_rank_chg": 92, "stock_cnt": 5777, "price": "28.56", "change": "3.14", "market_id": "33", "circulate_market_value": "43352093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 89, "hot_rank_chg": -44, "stock_cnt": 5777, "price": "32.84", "change": "0.43", "market_id": "17", "circulate_market_value": "676562890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 90, "hot_rank_chg": 0, "stock_cnt": 5777, "price": "8.77", "change": "-0.45", "market_id": "33", "circulate_market_value": "5794838800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 3.35}, {"name": "国产软件", "change_pct": 6.48}, {"name": "人工智能", "change_pct": 5.28}, {"name": "充电桩", "change_pct": 3.24}, {"name": "云计算数据中心", "change_pct": 5.91}, {"name": "军民融合", "change_pct": 3.64}, {"name": "磁悬浮", "change_pct": 1.68}, {"name": "人脸识别", "change_pct": 4.31}, {"name": "水利", "change_pct": 2.5}, {"name": "物联网", "change_pct": 4.4}, {"name": "大数据", "change_pct": 5.51}, {"name": "智慧城市", "change_pct": 4.46}, {"name": "军工", "change_pct": 3.19}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 2.97}, {"name": "储能", "change_pct": 2.75}, {"name": "智慧安防", "change_pct": 4.57}, {"name": "无人机", "change_pct": 3.42}, {"name": "虚拟电厂", "change_pct": 2.87}, {"name": "信创", "change_pct": 6.5}, {"name": "元宇宙", "change_pct": 6.03}, {"name": "东数西算/算力", "change_pct": 5.99}, {"name": "新型城镇化", "change_pct": 2.92}, {"name": "AIGC概念", "change_pct": 7.41}, {"name": "数字乡村", "change_pct": 3.53}, {"name": "华为海思", "change_pct": 5.28}, {"name": "闪存", "change_pct": 6.01}, {"name": "UWB超宽带", "change_pct": 4.53}, {"name": "智慧政务", "change_pct": 5.7}, {"name": "特高压", "change_pct": 2.26}, {"name": "华为云·鲲鹏", "change_pct": 6.4}, {"name": "华为产业链", "change_pct": 5.21}, {"name": "时空大数据", "change_pct": 3.56}, {"name": "服务器", "change_pct": 4.65}, {"name": "智能电网", "change_pct": 3.26}, {"name": "磁电存储", "change_pct": 3.79}, {"name": "军工信息化", "change_pct": 4.06}, {"name": "光纤概念", "change_pct": 6.24}, {"name": "雅江电站概念股", "change_pct": 1.71}]}, {"code": "001248", "name": "华润新能源", "hot_rank": 91, "hot_rank_chg": 20, "stock_cnt": 5777, "price": "13.32", "change": "1.91", "market_id": "33", "circulate_market_value": "14151218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 92, "hot_rank_chg": 16, "stock_cnt": 5777, "price": "37.31", "change": "5.22", "market_id": "33", "circulate_market_value": "137712890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 93, "hot_rank_chg": 68, "stock_cnt": 5777, "price": "12.30", "change": "4.15", "market_id": "17", "circulate_market_value": "61364930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.68}, {"name": "半导体", "change_pct": 6.64}, {"name": "5G", "change_pct": 5.37}, {"name": "VR&AR", "change_pct": 5.65}, {"name": "光通信", "change_pct": 7.24}, {"name": "3D感应", "change_pct": 4.39}, {"name": "汽车零部件", "change_pct": 3.03}, {"name": "LED", "change_pct": 4.24}, {"name": "国产芯片", "change_pct": 5.99}, {"name": "MicroLED", "change_pct": 5.29}, {"name": "第三代半导体", "change_pct": 5.38}, {"name": "激光雷达", "change_pct": 6.53}, {"name": "华为汽车", "change_pct": 2.66}, {"name": "MiniLED", "change_pct": 4.92}, {"name": "氮化镓", "change_pct": 5.26}, {"name": "大基金概念", "change_pct": 6.16}, {"name": "碳化硅", "change_pct": 5.28}, {"name": "光电共封装CPO", "change_pct": 8.35}]}, {"code": "300433", "name": "蓝思科技", "hot_rank": 95, "hot_rank_chg": 70, "stock_cnt": 5777, "price": "32.64", "change": "5.87", "market_id": "33", "circulate_market_value": "162211010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 96, "hot_rank_chg": -41, "stock_cnt": 5777, "price": "95.17", "change": "-0.70", "market_id": "33", "circulate_market_value": "331821010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 97, "hot_rank_chg": 37, "stock_cnt": 5777, "price": "132.96", "change": "6.23", "market_id": "17", "circulate_market_value": "116968568000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 98, "hot_rank_chg": -55, "stock_cnt": 5777, "price": "78.29", "change": "-0.34", "market_id": "33", "circulate_market_value": "303883680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002851", "name": "麦格米特", "hot_rank": 99, "hot_rank_chg": 67, "stock_cnt": 5777, "price": "106.45", "change": "10.00", "market_id": "33", "circulate_market_value": "49094871000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "超跌反弹"}, {"code": "002008", "name": "大族激光", "hot_rank": 100, "hot_rank_chg": 74, "stock_cnt": 5777, "price": "86.96", "change": "6.18", "market_id": "33", "circulate_market_value": "83197013000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处"};