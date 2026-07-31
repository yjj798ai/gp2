const UPDATE_TIME = "2026-07-31 07:48";
const THS_HOT = [
  {
    "name": "AI应用",
    "rise": 5.11,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "AI视频",
    "rise": 8.1,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  },
  {
    "name": "存储芯片",
    "rise": 3.68,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续213天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 4.77,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续260天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 1.89,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续90天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "算力租赁",
    "rise": 5.21,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续124天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 4.35,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续424天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": 3.98,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "国家大基金持股",
    "rise": 3.19,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "商业航天",
    "rise": 3.18,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续189天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": 3.52,
    "rate": 0,
    "tag": "27家涨停",
    "hotTag": "连续91天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "快手概念",
    "rise": 7.64,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885918"
  },
  {
    "name": "白酒概念",
    "rise": 1.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "人工智能",
    "rise": 4.12,
    "rate": 0,
    "tag": "37家涨停",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "智谱AI",
    "rise": 7.44,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886090"
  },
  {
    "name": "脑机接口",
    "rise": 3.42,
    "rate": 0,
    "tag": "",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "光刻机",
    "rise": 3.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "AI智能体",
    "rise": 5.27,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "工业软件ETF",
    "code": "886099"
  },
  {
    "name": "东数西算(算力)",
    "rise": 4.47,
    "rate": 0,
    "tag": "18家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "芯片概念",
    "rise": 3.82,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "连续84天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  }
];
const THS_EVENTS = [
  {
    "title": "降价 80%！OpenAI 下调 GPT-5.6 Luna 模型费用，性价比超 DeepSeek V4 Pro",
    "desc": "",
    "heat": 846653,
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
    "title": "国家发改委：十五五算力网将新增直接投资4万亿",
    "desc": "",
    "heat": 637136,
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
    "title": "宇树科技IPO询价、申购日期确定",
    "desc": "",
    "heat": 575570,
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
    "heat": 518647,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "捷成股份",
        "code": "300182",
        "chg": 10.629067
      }
    ]
  },
  {
    "title": "存储巨头，大涨！韩国股市涨至熔断",
    "desc": "",
    "heat": 486855,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "协创数据",
        "code": "300857",
        "chg": 15.12614
      }
    ]
  },
  {
    "title": "MLCC超级周期来袭？产业链公司“涨”声四起",
    "desc": "",
    "heat": 317765,
    "direction": "MLCC涨价",
    "themes": [
      "MLCC"
    ],
    "stocks": [
      {
        "name": "利和兴",
        "code": "301013",
        "chg": 11.834655
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "词元概念/Token",
    "change": "+10.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "Kimi概念",
    "change": "+10.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+8.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI视频",
    "change": "+8.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "ChatGPT",
    "change": "+8.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+8.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+7.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+7.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智谱AI",
    "change": "+7.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "多模态",
    "change": "+7.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DeepSeek概念股",
    "change": "+6.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AIGC概念",
    "change": "+6.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "+6.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+6.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+6.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "虚拟数字人",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物理AI",
    "change": "+6.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "web3.0",
    "change": "+6.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+6.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人工智能大模型",
    "change": "+6.19%",
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
    "stock_cnt": 5754,
    "price": "5.51",
    "change": "2.80",
    "market_id": "33",
    "circulate_market_value": "194872910000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 3.82
      },
      {
        "name": "手机产业链",
        "change_pct": 3.51
      },
      {
        "name": "超高清视频",
        "change_pct": 3.59
      },
      {
        "name": "苹果产业链",
        "change_pct": 4.16
      },
      {
        "name": "电竞",
        "change_pct": 3.93
      },
      {
        "name": "半导体",
        "change_pct": 4.03
      },
      {
        "name": "人工智能",
        "change_pct": 4.79
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.15
      },
      {
        "name": "VR&AR",
        "change_pct": 4.5
      },
      {
        "name": "OLED",
        "change_pct": 3.08
      },
      {
        "name": "京津冀",
        "change_pct": 2.32
      },
      {
        "name": "物联网",
        "change_pct": 4.04
      },
      {
        "name": "指纹识别",
        "change_pct": 3.17
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.95
      },
      {
        "name": "白马股",
        "change_pct": 0.17
      },
      {
        "name": "智能制造",
        "change_pct": 3.91
      },
      {
        "name": "小米概念股",
        "change_pct": 3.86
      },
      {
        "name": "国产芯片",
        "change_pct": 3.97
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.99
      },
      {
        "name": "全息概念",
        "change_pct": 4.57
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.41
      },
      {
        "name": "MicroLED",
        "change_pct": 3.4
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.26
      },
      {
        "name": "智能手表",
        "change_pct": 3.03
      },
      {
        "name": "MiniLED",
        "change_pct": 3.31
      },
      {
        "name": "传感器",
        "change_pct": 3.97
      },
      {
        "name": "大硅片",
        "change_pct": 2.49
      },
      {
        "name": "AI PC",
        "change_pct": 3.58
      },
      {
        "name": "华为产业链",
        "change_pct": 4.2
      },
      {
        "name": "回购",
        "change_pct": 1.63
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.32
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.92
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 14,
    "hot_rank_chg": -6,
    "stock_cnt": 5754,
    "price": "12.34",
    "change": "-0.08",
    "market_id": "33",
    "circulate_market_value": "11517213000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.23
      },
      {
        "name": "新疆概念",
        "change_pct": 1.54
      },
      {
        "name": "光伏",
        "change_pct": 2.3
      },
      {
        "name": "风电",
        "change_pct": 1.78
      },
      {
        "name": "储能",
        "change_pct": 2.31
      },
      {
        "name": "国企改革",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 26,
    "hot_rank_chg": -1,
    "stock_cnt": 5754,
    "price": "5.89",
    "change": "5.93",
    "market_id": "17",
    "circulate_market_value": "14834023000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.78
      },
      {
        "name": "工业大麻",
        "change_pct": 2.2
      },
      {
        "name": "中药",
        "change_pct": 1.82
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "保健品",
        "change_pct": 1.48
      },
      {
        "name": "民营医院",
        "change_pct": 1.5
      },
      {
        "name": "医药",
        "change_pct": 1.81
      },
      {
        "name": "化学原料药",
        "change_pct": 1.75
      },
      {
        "name": "流感",
        "change_pct": 2.45
      },
      {
        "name": "振兴东北",
        "change_pct": 1.17
      },
      {
        "name": "食品",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 32,
    "hot_rank_chg": 14,
    "stock_cnt": 5754,
    "price": "5.60",
    "change": "-1.24",
    "market_id": "33",
    "circulate_market_value": "5784440500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.6
      },
      {
        "name": "锂电池",
        "change_pct": 1.78
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 3.81
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.58
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.51
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.04
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 35,
    "hot_rank_chg": -1,
    "stock_cnt": 5754,
    "price": "10.74",
    "change": "-1.29",
    "market_id": "17",
    "circulate_market_value": "7306633300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.42
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "雄安新区",
        "change_pct": 2.5
      },
      {
        "name": "煤化工",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "000566",
    "name": "海南海药",
    "hot_rank": 36,
    "hot_rank_chg": -17,
    "stock_cnt": 5754,
    "price": "5.86",
    "change": "-1.51",
    "market_id": "33",
    "circulate_market_value": "7598870800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.82
      },
      {
        "name": "创新药",
        "change_pct": 1.84
      },
      {
        "name": "央企改革",
        "change_pct": 1.23
      },
      {
        "name": "医疗器械",
        "change_pct": 2.51
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.15
      },
      {
        "name": "保健品",
        "change_pct": 1.48
      },
      {
        "name": "民营医院",
        "change_pct": 1.5
      },
      {
        "name": "CAR-T疗法",
        "change_pct": 1.58
      },
      {
        "name": "医药",
        "change_pct": 1.81
      },
      {
        "name": "化学原料药",
        "change_pct": 1.75
      },
      {
        "name": "海南概念",
        "change_pct": 1.54
      },
      {
        "name": "脑科学",
        "change_pct": 3.25
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.88
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.28
      },
      {
        "name": "食品",
        "change_pct": 1.55
      },
      {
        "name": "国企改革",
        "change_pct": 1.44
      },
      {
        "name": "医疗信息化",
        "change_pct": 4.84
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.32
      },
      {
        "name": "自贸区",
        "change_pct": 1.29
      },
      {
        "name": "合成生物",
        "change_pct": 1.74
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 40,
    "hot_rank_chg": -5,
    "stock_cnt": 5754,
    "price": "9.44",
    "change": "2.72",
    "market_id": "17",
    "circulate_market_value": "8202914300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.78
      },
      {
        "name": "快递物流",
        "change_pct": 0.95
      },
      {
        "name": "新零售",
        "change_pct": 1.99
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.0
      },
      {
        "name": "旅游",
        "change_pct": 2.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.14
      },
      {
        "name": "物业管理",
        "change_pct": 1.35
      },
      {
        "name": "免税店概念",
        "change_pct": 0.98
      },
      {
        "name": "自贸区",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "000428",
    "name": "华天酒店",
    "hot_rank": 42,
    "hot_rank_chg": -9,
    "stock_cnt": 5754,
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
        "change_pct": 2.28
      },
      {
        "name": "旅游",
        "change_pct": 2.01
      },
      {
        "name": "物业管理",
        "change_pct": 1.35
      },
      {
        "name": "预制菜",
        "change_pct": 1.19
      },
      {
        "name": "国企改革",
        "change_pct": 1.44
      },
      {
        "name": "餐饮",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 45,
    "hot_rank_chg": 5,
    "stock_cnt": 5754,
    "price": "9.10",
    "change": "5.08",
    "market_id": "33",
    "circulate_market_value": "8069486300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.57
      },
      {
        "name": "手机产业链",
        "change_pct": 3.51
      },
      {
        "name": "超高清视频",
        "change_pct": 3.59
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "OLED",
        "change_pct": 3.08
      },
      {
        "name": "包装印刷",
        "change_pct": 2.3
      },
      {
        "name": "光伏",
        "change_pct": 2.3
      },
      {
        "name": "小米概念股",
        "change_pct": 3.86
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.99
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.7
      },
      {
        "name": "华为产业链",
        "change_pct": 4.2
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 3.2
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 46,
    "hot_rank_chg": 5,
    "stock_cnt": 5754,
    "price": "10.41",
    "change": "-4.67",
    "market_id": "33",
    "circulate_market_value": "7129834000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.99
      },
      {
        "name": "核电",
        "change_pct": 2.13
      },
      {
        "name": "充电桩",
        "change_pct": 2.78
      },
      {
        "name": "云计算数据中心",
        "change_pct": 5.14
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.51
      },
      {
        "name": "储能",
        "change_pct": 2.31
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.14
      },
      {
        "name": "智能电网",
        "change_pct": 2.93
      },
      {
        "name": "核聚变",
        "change_pct": 2.08
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 47,
    "hot_rank_chg": 15,
    "stock_cnt": 5754,
    "price": "5.91",
    "change": "1.55",
    "market_id": "17",
    "circulate_market_value": "73260887000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.23
      },
      {
        "name": "核电",
        "change_pct": 2.13
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.77
      },
      {
        "name": "水电",
        "change_pct": 0.95
      },
      {
        "name": "火电",
        "change_pct": 0.57
      },
      {
        "name": "光伏",
        "change_pct": 2.3
      },
      {
        "name": "风电",
        "change_pct": 1.78
      },
      {
        "name": "国企改革",
        "change_pct": 1.44
      },
      {
        "name": "算电协同",
        "change_pct": 2.14
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 50,
    "hot_rank_chg": -2,
    "stock_cnt": 5754,
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
        "change_pct": 3.09
      },
      {
        "name": "密集调研",
        "change_pct": 2.92
      },
      {
        "name": "ST摘帽",
        "change_pct": 3.74
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "教育",
        "change_pct": 3.94
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.14
      },
      {
        "name": "职业教育",
        "change_pct": 4.31
      },
      {
        "name": "在线教育",
        "change_pct": 4.58
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 4.75
      },
      {
        "name": "华为产业链",
        "change_pct": 4.2
      },
      {
        "name": "智谱AI",
        "change_pct": 7.45
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 51,
    "hot_rank_chg": -12,
    "stock_cnt": 5754,
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
        "change_pct": 2.29
      },
      {
        "name": "人工智能",
        "change_pct": 4.79
      },
      {
        "name": "水利",
        "change_pct": 2.65
      },
      {
        "name": "直播/短视频",
        "change_pct": 6.47
      },
      {
        "name": "大数据",
        "change_pct": 5.11
      },
      {
        "name": "园林",
        "change_pct": 4.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 3.86
      },
      {
        "name": "数字经济",
        "change_pct": 4.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": 5.29
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.41
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.47
      },
      {
        "name": "快手概念股",
        "change_pct": 7.75
      },
      {
        "name": "IGBT",
        "change_pct": 3.29
      },
      {
        "name": "虚拟数字人",
        "change_pct": 6.36
      },
      {
        "name": "AIGC概念",
        "change_pct": 6.8
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 6.25
      },
      {
        "name": "氮化镓",
        "change_pct": 3.51
      },
      {
        "name": "AI营销",
        "change_pct": 8.89
      },
      {
        "name": "多模态",
        "change_pct": 7.28
      },
      {
        "name": "液冷服务器",
        "change_pct": 3.59
      },
      {
        "name": "小红书概念股",
        "change_pct": 8.09
      },
      {
        "name": "区块链",
        "change_pct": 4.37
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 60,
    "hot_rank_chg": 159,
    "stock_cnt": 5754,
    "price": "6.51",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "10583266500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.78
      },
      {
        "name": "电竞",
        "change_pct": 3.93
      },
      {
        "name": "手游",
        "change_pct": 4.7
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "人工智能",
        "change_pct": 4.79
      },
      {
        "name": "游戏",
        "change_pct": 4.52
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 4.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": 5.29
      },
      {
        "name": "快手概念股",
        "change_pct": 7.75
      },
      {
        "name": "元宇宙",
        "change_pct": 5.42
      },
      {
        "name": "虚拟数字人",
        "change_pct": 6.36
      },
      {
        "name": "东数西算/算力",
        "change_pct": 5.24
      },
      {
        "name": "web3.0",
        "change_pct": 6.33
      },
      {
        "name": "AIGC概念",
        "change_pct": 6.8
      },
      {
        "name": "数据要素",
        "change_pct": 5.65
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 6.25
      },
      {
        "name": "AI营销",
        "change_pct": 8.89
      },
      {
        "name": "ChatGPT",
        "change_pct": 8.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 4.32
      },
      {
        "name": "人工智能大模型",
        "change_pct": 6.19
      },
      {
        "name": "人形机器人",
        "change_pct": 5.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.69
      },
      {
        "name": "多模态",
        "change_pct": 7.28
      },
      {
        "name": "AI视频",
        "change_pct": 8.49
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 3.8
      },
      {
        "name": "小红书概念股",
        "change_pct": 8.09
      }
    ]
  },
  {
    "code": "600376",
    "name": "首开股份",
    "hot_rank": 66,
    "hot_rank_chg": 71,
    "stock_cnt": 5754,
    "price": "4.02",
    "change": "8.94",
    "market_id": "17",
    "circulate_market_value": "10369852300.00",
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
        "change_pct": 2.32
      },
      {
        "name": "雄安新区",
        "change_pct": 2.5
      },
      {
        "name": "北京城市规划",
        "change_pct": 1.73
      },
      {
        "name": "住房租赁",
        "change_pct": 0.89
      },
      {
        "name": "物业管理",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 78,
    "hot_rank_chg": 18,
    "stock_cnt": 5754,
    "price": "6.90",
    "change": "-2.95",
    "market_id": "17",
    "circulate_market_value": "2202785100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 1.04
      },
      {
        "name": "高股息",
        "change_pct": -0.04
      },
      {
        "name": "银行",
        "change_pct": -0.77
      },
      {
        "name": "破净股",
        "change_pct": 0.54
      },
      {
        "name": "大金融",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "002195",
    "name": "岩山科技",
    "hot_rank": 83,
    "hot_rank_chg": 20,
    "stock_cnt": 5754,
    "price": "6.80",
    "change": "3.03",
    "market_id": "33",
    "circulate_market_value": "38187667000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "国产软件",
        "change_pct": 5.9
      },
      {
        "name": "无人驾驶",
        "change_pct": 3.43
      },
      {
        "name": "人工智能",
        "change_pct": 4.79
      },
      {
        "name": "网络安全",
        "change_pct": 4.84
      },
      {
        "name": "游戏",
        "change_pct": 4.52
      },
      {
        "name": "大数据",
        "change_pct": 5.11
      },
      {
        "name": "脑科学",
        "change_pct": 3.25
      },
      {
        "name": "百度概念股",
        "change_pct": 5.84
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 5.14
      },
      {
        "name": "腾讯概念股",
        "change_pct": 5.29
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 6.25
      },
      {
        "name": "自动刹车",
        "change_pct": 3.79
      },
      {
        "name": "人工智能大模型",
        "change_pct": 6.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 6.69
      },
      {
        "name": "AI医疗",
        "change_pct": 3.33
      },
      {
        "name": "区块链",
        "change_pct": 4.37
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 88,
    "hot_rank_chg": 67,
    "stock_cnt": 5754,
    "price": "6.93",
    "change": "5.16",
    "market_id": "17",
    "circulate_market_value": "14075691000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.23
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.77
      },
      {
        "name": "火电",
        "change_pct": 0.57
      },
      {
        "name": "风电",
        "change_pct": 1.78
      },
      {
        "name": "储能",
        "change_pct": 2.31
      },
      {
        "name": "碳中和",
        "change_pct": 1.59
      },
      {
        "name": "国企改革",
        "change_pct": 1.44
      }
    ]
  },
  {
    "code": "600703",
    "name": "三安光电",
    "hot_rank": 89,
    "hot_rank_chg": 72,
    "stock_cnt": 5754,
    "price": "12.24",
    "change": "3.64",
    "market_id": "17",
    "circulate_market_value": "61065589000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.29
      },
      {
        "name": "半导体",
        "change_pct": 4.03
      },
      {
        "name": "5G",
        "change_pct": 3.83
      },
      {
        "name": "VR&AR",
        "change_pct": 4.5
      },
      {
        "name": "光通信",
        "change_pct": 5.14
      },
      {
        "name": "3D感应",
        "change_pct": 3.4
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.95
      },
      {
        "name": "LED",
        "change_pct": 3.14
      },
      {
        "name": "国产芯片",
        "change_pct": 3.97
      },
      {
        "name": "MicroLED",
        "change_pct": 3.4
      },
      {
        "name": "第三代半导体",
        "change_pct": 3.47
      },
      {
        "name": "激光雷达",
        "change_pct": 4.66
      },
      {
        "name": "华为汽车",
        "change_pct": 2.5
      },
      {
        "name": "MiniLED",
        "change_pct": 3.31
      },
      {
        "name": "氮化镓",
        "change_pct": 3.51
      },
      {
        "name": "大基金概念",
        "change_pct": 3.14
      },
      {
        "name": "碳化硅",
        "change_pct": 3.31
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 5.56
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 90,
    "hot_rank_chg": 96,
    "stock_cnt": 5754,
    "price": "9.72",
    "change": "2.10",
    "market_id": "17",
    "circulate_market_value": "12472690500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.29
      },
      {
        "name": "强势人气股",
        "change_pct": 3.34
      },
      {
        "name": "智能制造",
        "change_pct": 3.91
      },
      {
        "name": "工业互联网",
        "change_pct": 4.26
      },
      {
        "name": "培育钻石",
        "change_pct": 3.04
      },
      {
        "name": "金刚线",
        "change_pct": 4.53
      },
      {
        "name": "国资入股",
        "change_pct": 1.93
      },
      {
        "name": "深地经济",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 95,
    "hot_rank_chg": 11,
    "stock_cnt": 5754,
    "price": "6.93",
    "change": "-1.00",
    "market_id": "33",
    "circulate_market_value": "5755019000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 2.57
      },
      {
        "name": "资产重组",
        "change_pct": 3.07
      },
      {
        "name": "半导体",
        "change_pct": 4.03
      },
      {
        "name": "小米概念股",
        "change_pct": 3.86
      },
      {
        "name": "国产芯片",
        "change_pct": 3.97
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5754, "price": "53.97", "change": "2.08", "market_id": "17", "circulate_market_value": "243029010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5754, "price": "385.90", "change": "-1.06", "market_id": "33", "circulate_market_value": "63684982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5754, "price": "378.60", "change": "2.02", "market_id": "17", "circulate_market_value": "253091050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5754, "price": "49.35", "change": "-2.28", "market_id": "33", "circulate_market_value": "57098580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": 9, "stock_cnt": 5754, "price": "17.23", "change": "10.03", "market_id": "17", "circulate_market_value": "36037272000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5754, "price": "902.01", "change": "4.40", "market_id": "33", "circulate_market_value": "1001176780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": 3, "stock_cnt": 5754, "price": "65.71", "change": "1.86", "market_id": "17", "circulate_market_value": "117582431000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5754, "price": "171.48", "change": "5.98", "market_id": "33", "circulate_market_value": "237726450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5754, "price": "34.89", "change": "3.84", "market_id": "33", "circulate_market_value": "99787936000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5754, "price": "15.47", "change": "3.76", "market_id": "33", "circulate_market_value": "51401423000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 11, "hot_rank_chg": -2, "stock_cnt": 5754, "price": "56.73", "change": "1.50", "market_id": "33", "circulate_market_value": "86085065000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 12, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "5.51", "change": "2.80", "market_id": "33", "circulate_market_value": "194872910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 3.82}, {"name": "手机产业链", "change_pct": 3.51}, {"name": "超高清视频", "change_pct": 3.59}, {"name": "苹果产业链", "change_pct": 4.16}, {"name": "电竞", "change_pct": 3.93}, {"name": "半导体", "change_pct": 4.03}, {"name": "人工智能", "change_pct": 4.79}, {"name": "互联网医疗", "change_pct": 3.15}, {"name": "VR&AR", "change_pct": 4.5}, {"name": "OLED", "change_pct": 3.08}, {"name": "京津冀", "change_pct": 2.32}, {"name": "物联网", "change_pct": 4.04}, {"name": "指纹识别", "change_pct": 3.17}, {"name": "汽车零部件", "change_pct": 2.95}, {"name": "白马股", "change_pct": 0.17}, {"name": "智能制造", "change_pct": 3.91}, {"name": "小米概念股", "change_pct": 3.86}, {"name": "国产芯片", "change_pct": 3.97}, {"name": "液晶面板/LCD", "change_pct": 2.99}, {"name": "全息概念", "change_pct": 4.57}, {"name": "理想汽车概念股", "change_pct": 2.41}, {"name": "MicroLED", "change_pct": 3.4}, {"name": "钙钛矿电池", "change_pct": 2.26}, {"name": "智能手表", "change_pct": 3.03}, {"name": "MiniLED", "change_pct": 3.31}, {"name": "传感器", "change_pct": 3.97}, {"name": "大硅片", "change_pct": 2.49}, {"name": "AI PC", "change_pct": 3.58}, {"name": "华为产业链", "change_pct": 4.2}, {"name": "回购", "change_pct": 1.63}, {"name": "智能眼镜/MR头显", "change_pct": 4.32}, {"name": "玻璃基板封装", "change_pct": 2.92}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5754, "price": "14.10", "change": "-3.03", "market_id": "17", "circulate_market_value": "20765166000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5754, "price": "12.34", "change": "-0.08", "market_id": "33", "circulate_market_value": "11517213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 3.34}, {"name": "新疆国企改革", "change_pct": 1.23}, {"name": "新疆概念", "change_pct": 1.54}, {"name": "光伏", "change_pct": 2.3}, {"name": "风电", "change_pct": 1.78}, {"name": "储能", "change_pct": 2.31}, {"name": "国企改革", "change_pct": 1.44}]}, {"code": "000021", "name": "深科技", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5754, "price": "37.23", "change": "2.22", "market_id": "33", "circulate_market_value": "58605812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 16, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "47.61", "change": "0.87", "market_id": "17", "circulate_market_value": "116818098000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 17, "hot_rank_chg": -6, "stock_cnt": 5754, "price": "396.01", "change": "6.71", "market_id": "33", "circulate_market_value": "496692830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5754, "price": "32.04", "change": "-2.79", "market_id": "17", "circulate_market_value": "46842313000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 19, "hot_rank_chg": 11, "stock_cnt": 5754, "price": "37.84", "change": "3.30", "market_id": "17", "circulate_market_value": "150284850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "346.99", "change": "2.42", "market_id": "33", "circulate_market_value": "97799788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 21, "hot_rank_chg": 5, "stock_cnt": 5754, "price": "35.39", "change": "-1.34", "market_id": "17", "circulate_market_value": "29959522000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5754, "price": "19.37", "change": "9.99", "market_id": "17", "circulate_market_value": "7767370000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "乳业"}, {"code": "002407", "name": "多氟多", "hot_rank": 23, "hot_rank_chg": 6, "stock_cnt": 5754, "price": "31.44", "change": "2.88", "market_id": "33", "circulate_market_value": "33916445000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5754, "price": "31.99", "change": "-2.85", "market_id": "33", "circulate_market_value": "44926530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 25, "hot_rank_chg": 12, "stock_cnt": 5754, "price": "96.01", "change": "10.00", "market_id": "17", "circulate_market_value": "34633054000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "600664", "name": "哈药股份", "hot_rank": 26, "hot_rank_chg": -1, "stock_cnt": 5754, "price": "5.89", "change": "5.93", "market_id": "17", "circulate_market_value": "14834023000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.78}, {"name": "工业大麻", "change_pct": 2.2}, {"name": "中药", "change_pct": 1.82}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "保健品", "change_pct": 1.48}, {"name": "民营医院", "change_pct": 1.5}, {"name": "医药", "change_pct": 1.81}, {"name": "化学原料药", "change_pct": 1.75}, {"name": "流感", "change_pct": 2.45}, {"name": "振兴东北", "change_pct": 1.17}, {"name": "食品", "change_pct": 1.55}]}, {"code": "603823", "name": "百合花", "hot_rank": 27, "hot_rank_chg": 39, "stock_cnt": 5754, "price": "46.80", "change": "-6.04", "market_id": "17", "circulate_market_value": "19486009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 28, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "133.80", "change": "-2.31", "market_id": "33", "circulate_market_value": "42618344000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 29, "hot_rank_chg": 2, "stock_cnt": 5754, "price": "62.04", "change": "1.24", "market_id": "33", "circulate_market_value": "52961602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 30, "hot_rank_chg": -8, "stock_cnt": 5754, "price": "33.94", "change": "-4.80", "market_id": "17", "circulate_market_value": "24580312000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 31, "hot_rank_chg": 7, "stock_cnt": 5754, "price": "56.70", "change": "5.39", "market_id": "17", "circulate_market_value": "1125160030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 32, "hot_rank_chg": 14, "stock_cnt": 5754, "price": "5.60", "change": "-1.24", "market_id": "33", "circulate_market_value": "5784440500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.6}, {"name": "锂电池", "change_pct": 1.78}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "铜箔/覆铜板", "change_pct": 3.81}, {"name": "粤港澳大湾区", "change_pct": 1.58}, {"name": "新能源汽车", "change_pct": 2.51}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.04}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 33, "hot_rank_chg": -6, "stock_cnt": 5754, "price": "19.47", "change": "0.57", "market_id": "33", "circulate_market_value": "8807036400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 34, "hot_rank_chg": 15, "stock_cnt": 5754, "price": "28.52", "change": "2.96", "market_id": "17", "circulate_market_value": "97337324000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 35, "hot_rank_chg": -1, "stock_cnt": 5754, "price": "10.74", "change": "-1.29", "market_id": "17", "circulate_market_value": "7306633300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.42}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "雄安新区", "change_pct": 2.5}, {"name": "煤化工", "change_pct": 0.04}]}, {"code": "000566", "name": "海南海药", "hot_rank": 36, "hot_rank_chg": -17, "stock_cnt": 5754, "price": "5.86", "change": "-1.51", "market_id": "33", "circulate_market_value": "7598870800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.82}, {"name": "创新药", "change_pct": 1.84}, {"name": "央企改革", "change_pct": 1.23}, {"name": "医疗器械", "change_pct": 2.51}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "互联网医疗", "change_pct": 3.15}, {"name": "保健品", "change_pct": 1.48}, {"name": "民营医院", "change_pct": 1.5}, {"name": "CAR-T疗法", "change_pct": 1.58}, {"name": "医药", "change_pct": 1.81}, {"name": "化学原料药", "change_pct": 1.75}, {"name": "海南概念", "change_pct": 1.54}, {"name": "脑科学", "change_pct": 3.25}, {"name": "独角兽", "change_pct": 0.85}, {"name": "自由贸易港", "change_pct": 0.88}, {"name": "海南自由贸易港", "change_pct": 1.28}, {"name": "食品", "change_pct": 1.55}, {"name": "国企改革", "change_pct": 1.44}, {"name": "医疗信息化", "change_pct": 4.84}, {"name": "新冠病毒防治", "change_pct": 2.32}, {"name": "自贸区", "change_pct": 1.29}, {"name": "合成生物", "change_pct": 1.74}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 37, "hot_rank_chg": 47, "stock_cnt": 5754, "price": "66.95", "change": "8.33", "market_id": "33", "circulate_market_value": "43720735000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 38, "hot_rank_chg": -10, "stock_cnt": 5754, "price": "111.68", "change": "6.06", "market_id": "33", "circulate_market_value": "208819960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 39, "hot_rank_chg": 30, "stock_cnt": 5754, "price": "14.51", "change": "-3.14", "market_id": "17", "circulate_market_value": "11423380700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5754, "price": "9.44", "change": "2.72", "market_id": "17", "circulate_market_value": "8202914300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.78}, {"name": "快递物流", "change_pct": 0.95}, {"name": "新零售", "change_pct": 1.99}, {"name": "福建自贸/海西概念", "change_pct": 2.0}, {"name": "旅游", "change_pct": 2.01}, {"name": "阿里巴巴概念股", "change_pct": 5.14}, {"name": "物业管理", "change_pct": 1.35}, {"name": "免税店概念", "change_pct": 0.98}, {"name": "自贸区", "change_pct": 1.29}]}, {"code": "600183", "name": "生益科技", "hot_rank": 41, "hot_rank_chg": 40, "stock_cnt": 5754, "price": "105.64", "change": "5.56", "market_id": "17", "circulate_market_value": "254777150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000428", "name": "华天酒店", "hot_rank": 42, "hot_rank_chg": -9, "stock_cnt": 5754, "price": "4.21", "change": "9.92", "market_id": "33", "circulate_market_value": "4289678500.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "酒店", "xgb_concepts": [{"name": "湖南国企改革", "change_pct": 2.28}, {"name": "旅游", "change_pct": 2.01}, {"name": "物业管理", "change_pct": 1.35}, {"name": "预制菜", "change_pct": 1.19}, {"name": "国企改革", "change_pct": 1.44}, {"name": "餐饮", "change_pct": 1.44}]}, {"code": "603137", "name": "恒尚节能", "hot_rank": 43, "hot_rank_chg": -2, "stock_cnt": 5754, "price": "25.00", "change": "-4.62", "market_id": "17", "circulate_market_value": "4573333400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 44, "hot_rank_chg": -23, "stock_cnt": 5754, "price": "22.54", "change": "10.01", "market_id": "17", "circulate_market_value": "5460765800.00", "change_type": "1", "change_section": "9", "change_days": "9", "change_reason": "拟收购欧康诺"}, {"code": "002585", "name": "双星新材", "hot_rank": 45, "hot_rank_chg": 5, "stock_cnt": 5754, "price": "9.10", "change": "5.08", "market_id": "33", "circulate_market_value": "8069486300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.57}, {"name": "手机产业链", "change_pct": 3.51}, {"name": "超高清视频", "change_pct": 3.59}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "OLED", "change_pct": 3.08}, {"name": "包装印刷", "change_pct": 2.3}, {"name": "光伏", "change_pct": 2.3}, {"name": "小米概念股", "change_pct": 3.86}, {"name": "液晶面板/LCD", "change_pct": 2.99}, {"name": "可降解塑料", "change_pct": 1.7}, {"name": "华为产业链", "change_pct": 4.2}, {"name": "PET复合铜箔", "change_pct": 3.2}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 46, "hot_rank_chg": 5, "stock_cnt": 5754, "price": "10.41", "change": "-4.67", "market_id": "33", "circulate_market_value": "7129834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.99}, {"name": "核电", "change_pct": 2.13}, {"name": "充电桩", "change_pct": 2.78}, {"name": "云计算数据中心", "change_pct": 5.14}, {"name": "新能源汽车", "change_pct": 2.51}, {"name": "储能", "change_pct": 2.31}, {"name": "阿里巴巴概念股", "change_pct": 5.14}, {"name": "智能电网", "change_pct": 2.93}, {"name": "核聚变", "change_pct": 2.08}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 47, "hot_rank_chg": 15, "stock_cnt": 5754, "price": "5.91", "change": "1.55", "market_id": "17", "circulate_market_value": "73260887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.23}, {"name": "核电", "change_pct": 2.13}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "电力体制改革", "change_pct": 0.77}, {"name": "水电", "change_pct": 0.95}, {"name": "火电", "change_pct": 0.57}, {"name": "光伏", "change_pct": 2.3}, {"name": "风电", "change_pct": 1.78}, {"name": "国企改革", "change_pct": 1.44}, {"name": "算电协同", "change_pct": 2.14}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 48, "hot_rank_chg": 6, "stock_cnt": 5754, "price": "271.50", "change": "3.37", "market_id": "17", "circulate_market_value": "110320852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 49, "hot_rank_chg": 7, "stock_cnt": 5754, "price": "71.81", "change": "3.95", "market_id": "33", "circulate_market_value": "105333192000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 50, "hot_rank_chg": -2, "stock_cnt": 5754, "price": "8.81", "change": "9.99", "market_id": "33", "circulate_market_value": "2506283000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "具身智能", "xgb_concepts": [{"name": "筹码集中", "change_pct": 3.09}, {"name": "密集调研", "change_pct": 2.92}, {"name": "ST摘帽", "change_pct": 3.74}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "教育", "change_pct": 3.94}, {"name": "阿里巴巴概念股", "change_pct": 5.14}, {"name": "职业教育", "change_pct": 4.31}, {"name": "在线教育", "change_pct": 4.58}, {"name": "华为鸿蒙", "change_pct": 4.75}, {"name": "华为产业链", "change_pct": 4.2}, {"name": "智谱AI", "change_pct": 7.45}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 51, "hot_rank_chg": -12, "stock_cnt": 5754, "price": "4.66", "change": "9.91", "market_id": "33", "circulate_market_value": "27283361000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI营销", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.29}, {"name": "人工智能", "change_pct": 4.79}, {"name": "水利", "change_pct": 2.65}, {"name": "直播/短视频", "change_pct": 6.47}, {"name": "大数据", "change_pct": 5.11}, {"name": "园林", "change_pct": 4.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 3.86}, {"name": "数字经济", "change_pct": 4.79}, {"name": "腾讯概念股", "change_pct": 5.29}, {"name": "理想汽车概念股", "change_pct": 2.41}, {"name": "第三代半导体", "change_pct": 3.47}, {"name": "快手概念股", "change_pct": 7.75}, {"name": "IGBT", "change_pct": 3.29}, {"name": "虚拟数字人", "change_pct": 6.36}, {"name": "AIGC概念", "change_pct": 6.8}, {"name": "字节跳动概念股", "change_pct": 6.25}, {"name": "氮化镓", "change_pct": 3.51}, {"name": "AI营销", "change_pct": 8.89}, {"name": "多模态", "change_pct": 7.28}, {"name": "液冷服务器", "change_pct": 3.59}, {"name": "小红书概念股", "change_pct": 8.09}, {"name": "区块链", "change_pct": 4.37}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 52, "hot_rank_chg": 19, "stock_cnt": 5754, "price": "103.75", "change": "7.46", "market_id": "33", "circulate_market_value": "199491590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 53, "hot_rank_chg": -17, "stock_cnt": 5754, "price": "225.99", "change": "2.80", "market_id": "17", "circulate_market_value": "106569349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 54, "hot_rank_chg": -10, "stock_cnt": 5754, "price": "52.90", "change": "-5.87", "market_id": "17", "circulate_market_value": "6912612300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 55, "hot_rank_chg": 36, "stock_cnt": 5754, "price": "14.35", "change": "19.98", "market_id": "33", "circulate_market_value": "49908300000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI应用"}, {"code": "002281", "name": "光迅科技", "hot_rank": 56, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "161.65", "change": "6.12", "market_id": "33", "circulate_market_value": "127110318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 57, "hot_rank_chg": 2, "stock_cnt": 5754, "price": "171.01", "change": "6.82", "market_id": "33", "circulate_market_value": "186125240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 58, "hot_rank_chg": -1, "stock_cnt": 5754, "price": "29.74", "change": "6.40", "market_id": "33", "circulate_market_value": "23268714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 59, "hot_rank_chg": 27, "stock_cnt": 5754, "price": "126.81", "change": "2.55", "market_id": "33", "circulate_market_value": "53475045000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 60, "hot_rank_chg": 159, "stock_cnt": 5754, "price": "6.51", "change": "9.97", "market_id": "33", "circulate_market_value": "10583266500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.78}, {"name": "电竞", "change_pct": 3.93}, {"name": "手游", "change_pct": 4.7}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "人工智能", "change_pct": 4.79}, {"name": "游戏", "change_pct": 4.52}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 4.79}, {"name": "腾讯概念股", "change_pct": 5.29}, {"name": "快手概念股", "change_pct": 7.75}, {"name": "元宇宙", "change_pct": 5.42}, {"name": "虚拟数字人", "change_pct": 6.36}, {"name": "东数西算/算力", "change_pct": 5.24}, {"name": "web3.0", "change_pct": 6.33}, {"name": "AIGC概念", "change_pct": 6.8}, {"name": "数据要素", "change_pct": 5.65}, {"name": "字节跳动概念股", "change_pct": 6.25}, {"name": "AI营销", "change_pct": 8.89}, {"name": "ChatGPT", "change_pct": 8.14}, {"name": "智能眼镜/MR头显", "change_pct": 4.32}, {"name": "人工智能大模型", "change_pct": 6.19}, {"name": "人形机器人", "change_pct": 5.19}, {"name": "短剧/互动影游", "change_pct": 6.69}, {"name": "多模态", "change_pct": 7.28}, {"name": "AI视频", "change_pct": 8.49}, {"name": "IP经济/谷子经济", "change_pct": 3.8}, {"name": "小红书概念股", "change_pct": 8.09}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 61, "hot_rank_chg": -8, "stock_cnt": 5754, "price": "149.60", "change": "-5.36", "market_id": "33", "circulate_market_value": "4612373400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301677", "name": "欣兴工具", "hot_rank": 62, "hot_rank_chg": 16, "stock_cnt": 5754, "price": "88.02", "change": "6.82", "market_id": "33", "circulate_market_value": "1887150400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 63, "hot_rank_chg": -18, "stock_cnt": 5754, "price": "32.95", "change": "0.77", "market_id": "17", "circulate_market_value": "678829080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688008", "name": "澜起科技", "hot_rank": 64, "hot_rank_chg": 11, "stock_cnt": 5754, "price": "204.90", "change": "4.13", "market_id": "17", "circulate_market_value": "234562250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688766", "name": "普冉股份", "hot_rank": 65, "hot_rank_chg": 27, "stock_cnt": 5754, "price": "354.90", "change": "0.50", "market_id": "17", "circulate_market_value": "52774891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600376", "name": "首开股份", "hot_rank": 66, "hot_rank_chg": 71, "stock_cnt": 5754, "price": "4.02", "change": "8.94", "market_id": "17", "circulate_market_value": "10369852300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 1.62}, {"name": "京津冀", "change_pct": 2.32}, {"name": "雄安新区", "change_pct": 2.5}, {"name": "北京城市规划", "change_pct": 1.73}, {"name": "住房租赁", "change_pct": 0.89}, {"name": "物业管理", "change_pct": 1.35}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 67, "hot_rank_chg": 7, "stock_cnt": 5754, "price": "190.40", "change": "5.57", "market_id": "33", "circulate_market_value": "164733120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 68, "hot_rank_chg": 40, "stock_cnt": 5754, "price": "37.53", "change": "5.84", "market_id": "33", "circulate_market_value": "138524920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 69, "hot_rank_chg": 3, "stock_cnt": 5754, "price": "19.54", "change": "2.57", "market_id": "33", "circulate_market_value": "8223702700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 70, "hot_rank_chg": 77, "stock_cnt": 5754, "price": "50.83", "change": "3.52", "market_id": "33", "circulate_market_value": "36816953000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600895", "name": "张江高科", "hot_rank": 71, "hot_rank_chg": -24, "stock_cnt": 5754, "price": "32.15", "change": "-1.02", "market_id": "17", "circulate_market_value": "49790369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 72, "hot_rank_chg": 26, "stock_cnt": 5754, "price": "145.79", "change": "3.52", "market_id": "33", "circulate_market_value": "65610714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 73, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "95.37", "change": "4.69", "market_id": "33", "circulate_market_value": "95845482000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 74, "hot_rank_chg": -6, "stock_cnt": 5754, "price": "266.00", "change": "-6.55", "market_id": "17", "circulate_market_value": "38562244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5754, "price": "57.48", "change": "-1.49", "market_id": "33", "circulate_market_value": "421045320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 76, "hot_rank_chg": 4, "stock_cnt": 5754, "price": "83.46", "change": "3.04", "market_id": "17", "circulate_market_value": "122106516000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 77, "hot_rank_chg": 41, "stock_cnt": 5754, "price": "15.18", "change": "10.00", "market_id": "33", "circulate_market_value": "10554092900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁"}, {"code": "601288", "name": "农业银行", "hot_rank": 78, "hot_rank_chg": 18, "stock_cnt": 5754, "price": "6.90", "change": "-2.95", "market_id": "17", "circulate_market_value": "2202785100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 1.04}, {"name": "高股息", "change_pct": -0.04}, {"name": "银行", "change_pct": -0.77}, {"name": "破净股", "change_pct": 0.54}, {"name": "大金融", "change_pct": -0.21}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 79, "hot_rank_chg": 65, "stock_cnt": 5754, "price": "82.62", "change": "3.91", "market_id": "33", "circulate_market_value": "68493264000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 80, "hot_rank_chg": 33, "stock_cnt": 5754, "price": "33.81", "change": "1.53", "market_id": "33", "circulate_market_value": "136173870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 81, "hot_rank_chg": -18, "stock_cnt": 5754, "price": "1106.00", "change": "6.10", "market_id": "17", "circulate_market_value": "694892020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 82, "hot_rank_chg": 105, "stock_cnt": 5754, "price": "13.96", "change": "1.16", "market_id": "33", "circulate_market_value": "16423505000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002195", "name": "岩山科技", "hot_rank": 83, "hot_rank_chg": 20, "stock_cnt": 5754, "price": "6.80", "change": "3.03", "market_id": "33", "circulate_market_value": "38187667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "国产软件", "change_pct": 5.9}, {"name": "无人驾驶", "change_pct": 3.43}, {"name": "人工智能", "change_pct": 4.79}, {"name": "网络安全", "change_pct": 4.84}, {"name": "游戏", "change_pct": 4.52}, {"name": "大数据", "change_pct": 5.11}, {"name": "脑科学", "change_pct": 3.25}, {"name": "百度概念股", "change_pct": 5.84}, {"name": "阿里巴巴概念股", "change_pct": 5.14}, {"name": "腾讯概念股", "change_pct": 5.29}, {"name": "字节跳动概念股", "change_pct": 6.25}, {"name": "自动刹车", "change_pct": 3.79}, {"name": "人工智能大模型", "change_pct": 6.19}, {"name": "短剧/互动影游", "change_pct": 6.69}, {"name": "AI医疗", "change_pct": 3.33}, {"name": "区块链", "change_pct": 4.37}]}, {"code": "600460", "name": "士兰微", "hot_rank": 84, "hot_rank_chg": 31, "stock_cnt": 5754, "price": "28.26", "change": "1.76", "market_id": "17", "circulate_market_value": "47026670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 85, "hot_rank_chg": 44, "stock_cnt": 5754, "price": "259.64", "change": "5.76", "market_id": "33", "circulate_market_value": "127086363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 86, "hot_rank_chg": -31, "stock_cnt": 5754, "price": "95.77", "change": "-0.07", "market_id": "33", "circulate_market_value": "333912970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 87, "hot_rank_chg": 39, "stock_cnt": 5754, "price": "85.39", "change": "0.34", "market_id": "17", "circulate_market_value": "6750238200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600744", "name": "华银电力", "hot_rank": 88, "hot_rank_chg": 67, "stock_cnt": 5754, "price": "6.93", "change": "5.16", "market_id": "17", "circulate_market_value": "14075691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.23}, {"name": "电力体制改革", "change_pct": 0.77}, {"name": "火电", "change_pct": 0.57}, {"name": "风电", "change_pct": 1.78}, {"name": "储能", "change_pct": 2.31}, {"name": "碳中和", "change_pct": 1.59}, {"name": "国企改革", "change_pct": 1.44}]}, {"code": "600703", "name": "三安光电", "hot_rank": 89, "hot_rank_chg": 72, "stock_cnt": 5754, "price": "12.24", "change": "3.64", "market_id": "17", "circulate_market_value": "61065589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.29}, {"name": "半导体", "change_pct": 4.03}, {"name": "5G", "change_pct": 3.83}, {"name": "VR&AR", "change_pct": 4.5}, {"name": "光通信", "change_pct": 5.14}, {"name": "3D感应", "change_pct": 3.4}, {"name": "汽车零部件", "change_pct": 2.95}, {"name": "LED", "change_pct": 3.14}, {"name": "国产芯片", "change_pct": 3.97}, {"name": "MicroLED", "change_pct": 3.4}, {"name": "第三代半导体", "change_pct": 3.47}, {"name": "激光雷达", "change_pct": 4.66}, {"name": "华为汽车", "change_pct": 2.5}, {"name": "MiniLED", "change_pct": 3.31}, {"name": "氮化镓", "change_pct": 3.51}, {"name": "大基金概念", "change_pct": 3.14}, {"name": "碳化硅", "change_pct": 3.31}, {"name": "光电共封装CPO", "change_pct": 5.56}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 90, "hot_rank_chg": 96, "stock_cnt": 5754, "price": "9.72", "change": "2.10", "market_id": "17", "circulate_market_value": "12472690500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.29}, {"name": "强势人气股", "change_pct": 3.34}, {"name": "智能制造", "change_pct": 3.91}, {"name": "工业互联网", "change_pct": 4.26}, {"name": "培育钻石", "change_pct": 3.04}, {"name": "金刚线", "change_pct": 4.53}, {"name": "国资入股", "change_pct": 1.93}, {"name": "深地经济", "change_pct": 1.39}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 91, "hot_rank_chg": -51, "stock_cnt": 5754, "price": "26.27", "change": "7.71", "market_id": "17", "circulate_market_value": "57373937000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 92, "hot_rank_chg": -50, "stock_cnt": 5754, "price": "1350.60", "change": "-0.82", "market_id": "17", "circulate_market_value": "1688360200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 93, "hot_rank_chg": 24, "stock_cnt": 5754, "price": "188.00", "change": "2.87", "market_id": "17", "circulate_market_value": "79503969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 94, "hot_rank_chg": 25, "stock_cnt": 5754, "price": "21.70", "change": "-2.65", "market_id": "17", "circulate_market_value": "8310324200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000670", "name": "盈方微", "hot_rank": 95, "hot_rank_chg": 11, "stock_cnt": 5754, "price": "6.93", "change": "-1.00", "market_id": "33", "circulate_market_value": "5755019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 2.57}, {"name": "资产重组", "change_pct": 3.07}, {"name": "半导体", "change_pct": 4.03}, {"name": "小米概念股", "change_pct": 3.86}, {"name": "国产芯片", "change_pct": 3.97}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 96, "hot_rank_chg": 5, "stock_cnt": 5754, "price": "123.99", "change": "0.81", "market_id": "17", "circulate_market_value": "247925760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 97, "hot_rank_chg": -54, "stock_cnt": 5754, "price": "78.00", "change": "-0.71", "market_id": "33", "circulate_market_value": "302758040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 98, "hot_rank_chg": 48, "stock_cnt": 5754, "price": "26.06", "change": "6.67", "market_id": "33", "circulate_market_value": "19738238000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002558", "name": "巨人网络", "hot_rank": 99, "hot_rank_chg": -26, "stock_cnt": 5754, "price": "29.28", "change": "5.78", "market_id": "33", "circulate_market_value": "55648455000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 100, "hot_rank_chg": -36, "stock_cnt": 5754, "price": "395.30", "change": "-1.64", "market_id": "33", "circulate_market_value": "1684010000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处"};