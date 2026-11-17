const UPDATE_TIME = "2026-11-17 06:11";
const THS_HOT = [
  {
    "name": "光刻胶",
    "rise": 2.98,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.26,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续331天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "光刻机",
    "rise": 2.9,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "人形机器人",
    "rise": -2.61,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "短剧游戏",
    "rise": -6.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "存储芯片",
    "rise": 0.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续284天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -1.16,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续154天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -1.47,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续260天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": -1.22,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续161天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "芯片概念",
    "rise": -0.46,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续41天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": -2.31,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "机器人概念",
    "rise": -1.86,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "冰雪产业",
    "rise": -1.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 1,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "国家大基金持股",
    "rise": 1.35,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "集成电路ETF",
    "code": "885893"
  },
  {
    "name": "AI应用",
    "rise": -1.92,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续89天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "中芯国际概念",
    "rise": 1.77,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "高股息精选",
    "rise": 0.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "红利ETF",
    "code": "886072"
  },
  {
    "name": "染料",
    "rise": 0.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885633"
  },
  {
    "name": "先进封装",
    "rise": 0.45,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "算力租赁",
    "rise": -1.53,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "光刻需求火爆！阿斯麦称2028订单爆满",
    "desc": "",
    "heat": 392360,
    "direction": "光刻胶",
    "themes": [
      "光刻胶",
      "光刻机"
    ],
    "stocks": [
      {
        "name": "佳先股份",
        "code": "920489",
        "chg": 29.948187
      }
    ]
  },
  {
    "title": "国产晶圆代工双雄，携手大涨",
    "desc": "",
    "heat": 288900,
    "direction": "中芯国际概念",
    "themes": [
      "中芯国际概念"
    ],
    "stocks": [
      {
        "name": "伟测科技",
        "code": "688372",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "宕机频发，DeepSeek成立以来首次限制免费用户",
    "desc": "",
    "heat": 171561,
    "direction": "AI算力",
    "themes": [
      "东数西算(算力)",
      "数据中心(AIDC)",
      "算力租赁",
      "DeepSeek概念",
      "同花顺算力主题精选"
    ],
    "stocks": [
      {
        "name": "卡莱特",
        "code": "301391",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "《“十五五”新型储能实施方案》：到2030年，全国新型储能装机达3亿千瓦",
    "desc": "",
    "heat": 139111,
    "direction": "储能",
    "themes": [
      "储能电池",
      "储能变流器",
      "储能检测与运维",
      "系统集成",
      "储能并网及电气设备"
    ],
    "stocks": [
      {
        "name": "中能电气",
        "code": "300062",
        "chg": 7.18232
      }
    ]
  },
  {
    "title": "柴油发电机全球爆单 订单排到明年年底",
    "desc": "",
    "heat": 14041,
    "direction": "柴油发电机",
    "themes": [
      "柴油发电机"
    ],
    "stocks": [
      {
        "name": "苏美达",
        "code": "600710",
        "chg": 3.362832
      }
    ]
  },
  {
    "title": "公司披露脑机接口验证进展 全流程成功率达84%",
    "desc": "",
    "heat": 12235,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "菲沃泰",
        "code": "688371",
        "chg": 5.902439
      }
    ]
  },
  {
    "title": "中俄美元首历史首次面对面会晤",
    "desc": "",
    "heat": 5,
    "direction": "俄乌重建",
    "themes": [
      "国际工程承包",
      "工程机械出口"
    ],
    "stocks": [
      {
        "name": "山推股份",
        "code": "000680",
        "chg": 1.411765
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "光刻机（胶）",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "+1.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+1.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+1.76%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "双氧水",
    "change": "+1.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+1.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+1.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纯碱",
    "change": "+1.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "硫酸",
    "change": "+1.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氦气",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异丙醇",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液晶面板/LCD",
    "change": "+0.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.81%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 2,
    "hot_rank_chg": 1,
    "stock_cnt": 5799,
    "price": "3.37",
    "change": "-9.89",
    "market_id": "17",
    "circulate_market_value": "9646194500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.71
      },
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "游戏",
        "change_pct": -4.95
      },
      {
        "name": "影视",
        "change_pct": -7.94
      },
      {
        "name": "国企改革",
        "change_pct": -1.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.46
      },
      {
        "name": "AI视频",
        "change_pct": -5.03
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 4,
    "hot_rank_chg": 26,
    "stock_cnt": 5799,
    "price": "8.44",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5915550700.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.25
      },
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.92
      },
      {
        "name": "物业管理",
        "change_pct": -2.25
      },
      {
        "name": "预制菜",
        "change_pct": -1.49
      },
      {
        "name": "地摊经济",
        "change_pct": -1.89
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 4,
    "stock_cnt": 5799,
    "price": "5.70",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "7609801900.00",
    "change_type": "1",
    "change_section": "14",
    "change_days": "8",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.1
      },
      {
        "name": "物联网",
        "change_pct": -1.44
      },
      {
        "name": "LED",
        "change_pct": -0.53
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 7,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "11.88",
    "change": "8.00",
    "market_id": "33",
    "circulate_market_value": "7129386700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.74
      },
      {
        "name": "边缘计算",
        "change_pct": -1.47
      },
      {
        "name": "核电",
        "change_pct": -0.83
      },
      {
        "name": "海工装备",
        "change_pct": -1.36
      },
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.34
      },
      {
        "name": "冷链",
        "change_pct": -0.3
      },
      {
        "name": "地热",
        "change_pct": -0.78
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "碳中和",
        "change_pct": -0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.74
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.56
      },
      {
        "name": "热泵",
        "change_pct": -0.79
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.57
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.1
      },
      {
        "name": "海洋经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 8,
    "hot_rank_chg": -4,
    "stock_cnt": 5799,
    "price": "4.18",
    "change": "-3.69",
    "market_id": "33",
    "circulate_market_value": "6608459900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -2.33
      },
      {
        "name": "体外诊断",
        "change_pct": -1.39
      },
      {
        "name": "医疗器械",
        "change_pct": -1.38
      },
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "基因测序",
        "change_pct": -1.52
      },
      {
        "name": "预制菜",
        "change_pct": -1.49
      },
      {
        "name": "水产养殖",
        "change_pct": -1.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.12
      },
      {
        "name": "海洋经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 9,
    "hot_rank_chg": 12,
    "stock_cnt": 5799,
    "price": "4.89",
    "change": "3.38",
    "market_id": "17",
    "circulate_market_value": "6383747900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.27
      },
      {
        "name": "高速公路",
        "change_pct": -0.16
      },
      {
        "name": "振兴东北",
        "change_pct": -1.17
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.81
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 11,
    "hot_rank_chg": 65,
    "stock_cnt": 5799,
    "price": "10.77",
    "change": "9.67",
    "market_id": "33",
    "circulate_market_value": "7376398800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.94
      },
      {
        "name": "核电",
        "change_pct": -0.84
      },
      {
        "name": "充电桩",
        "change_pct": -1.27
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.37
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.53
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.38
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 1.78
      },
      {
        "name": "智能电网",
        "change_pct": -0.96
      },
      {
        "name": "核聚变",
        "change_pct": -0.97
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 12,
    "hot_rank_chg": 1,
    "stock_cnt": 5799,
    "price": "8.32",
    "change": "-5.03",
    "market_id": "33",
    "circulate_market_value": "3748031100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.52
      },
      {
        "name": "手游",
        "change_pct": -3.77
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "游戏",
        "change_pct": -4.99
      },
      {
        "name": "物联网",
        "change_pct": -1.47
      },
      {
        "name": "机器人",
        "change_pct": -2.46
      },
      {
        "name": "无人机",
        "change_pct": -1.13
      },
      {
        "name": "国产芯片",
        "change_pct": -0.42
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -2.33
      },
      {
        "name": "低空经济",
        "change_pct": -1.47
      },
      {
        "name": "无人物流车",
        "change_pct": -2.52
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 13,
    "hot_rank_chg": 37,
    "stock_cnt": 5799,
    "price": "6.70",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "6750848400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "工业自动化",
        "change_pct": -2.25
      },
      {
        "name": "机械",
        "change_pct": -1.07
      },
      {
        "name": "智能制造",
        "change_pct": -1.61
      },
      {
        "name": "国产芯片",
        "change_pct": -0.42
      },
      {
        "name": "信创",
        "change_pct": -1.06
      },
      {
        "name": "AI算力芯片",
        "change_pct": -2.06
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 14,
    "hot_rank_chg": -6,
    "stock_cnt": 5799,
    "price": "11.26",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "9154921600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "充电桩",
        "change_pct": -1.27
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.53
      },
      {
        "name": "家电",
        "change_pct": -0.52
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.82
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -1.5
      },
      {
        "name": "厨卫家电",
        "change_pct": -1.37
      },
      {
        "name": "华为产业链",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 15,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "4.70",
    "change": "7.80",
    "market_id": "33",
    "circulate_market_value": "4324873800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.77
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "VR&AR",
        "change_pct": -1.16
      },
      {
        "name": "游戏",
        "change_pct": -4.99
      },
      {
        "name": "动漫",
        "change_pct": -6.71
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.45
      },
      {
        "name": "快手概念股",
        "change_pct": -4.78
      },
      {
        "name": "NFT",
        "change_pct": -4.57
      },
      {
        "name": "元宇宙",
        "change_pct": -3.25
      },
      {
        "name": "虚拟数字人",
        "change_pct": -4.01
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.53
      },
      {
        "name": "云游戏",
        "change_pct": -3.51
      },
      {
        "name": "华为产业链",
        "change_pct": -1.47
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.83
      }
    ]
  },
  {
    "code": "002419",
    "name": "天虹股份",
    "hot_rank": 16,
    "hot_rank_chg": 165,
    "stock_cnt": 5799,
    "price": "5.48",
    "change": "1.48",
    "market_id": "33",
    "circulate_market_value": "6253993500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.53
      },
      {
        "name": "彩票",
        "change_pct": -2.78
      },
      {
        "name": "央企改革",
        "change_pct": -0.73
      },
      {
        "name": "白酒",
        "change_pct": -1.31
      },
      {
        "name": "新零售",
        "change_pct": -2.24
      },
      {
        "name": "农业种植",
        "change_pct": -1.32
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "军工集团",
        "change_pct": -0.64
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.45
      },
      {
        "name": "大农业",
        "change_pct": -1.15
      },
      {
        "name": "国企改革",
        "change_pct": -1.11
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.9
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 19,
    "hot_rank_chg": 4,
    "stock_cnt": 5799,
    "price": "2.72",
    "change": "-8.11",
    "market_id": "17",
    "circulate_market_value": "9492223800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -4.82
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.52
      },
      {
        "name": "超高清视频",
        "change_pct": -1.52
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.37
      },
      {
        "name": "影视",
        "change_pct": -7.97
      },
      {
        "name": "智慧城市",
        "change_pct": -1.81
      },
      {
        "name": "国产芯片",
        "change_pct": -0.42
      },
      {
        "name": "振兴东北",
        "change_pct": -1.1
      },
      {
        "name": "传媒",
        "change_pct": -5.1
      },
      {
        "name": "低价股",
        "change_pct": -1.79
      },
      {
        "name": "国企改革",
        "change_pct": -1.11
      },
      {
        "name": "在线教育",
        "change_pct": -1.71
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.76
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.9
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.5
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.83
      }
    ]
  },
  {
    "code": "600936",
    "name": "北投科技",
    "hot_rank": 22,
    "hot_rank_chg": 178,
    "stock_cnt": 5799,
    "price": "4.42",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "7385936000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "AI应用",
    "xgb_concepts": [
      {
        "name": "智慧城市",
        "change_pct": -1.81
      },
      {
        "name": "机器人",
        "change_pct": -2.46
      },
      {
        "name": "无人机",
        "change_pct": -1.13
      },
      {
        "name": "广西概念",
        "change_pct": -1.53
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.9
      },
      {
        "name": "低空经济",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 24,
    "hot_rank_chg": -5,
    "stock_cnt": 5799,
    "price": "10.62",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "11096709000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.44
      },
      {
        "name": "上海国企改革",
        "change_pct": -1.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -5.1
      },
      {
        "name": "国企改革",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 25,
    "hot_rank_chg": -1,
    "stock_cnt": 5799,
    "price": "10.54",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "5970681200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "石墨烯",
        "change_pct": -1.34
      },
      {
        "name": "军民融合",
        "change_pct": -1.41
      },
      {
        "name": "物联网",
        "change_pct": -1.47
      },
      {
        "name": "LED",
        "change_pct": -0.52
      },
      {
        "name": "军工",
        "change_pct": -1.23
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.76
      },
      {
        "name": "海洋经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 26,
    "hot_rank_chg": 8,
    "stock_cnt": 5799,
    "price": "4.55",
    "change": "-10.08",
    "market_id": "17",
    "circulate_market_value": "5280468200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "纺织服装",
        "change_pct": -1.65
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.7
      },
      {
        "name": "影视",
        "change_pct": -7.97
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -1.11
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.5
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 27,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "9.11",
    "change": "-9.98",
    "market_id": "33",
    "circulate_market_value": "4315227400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.77
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "VR&AR",
        "change_pct": -1.16
      },
      {
        "name": "游戏",
        "change_pct": -4.99
      },
      {
        "name": "影视",
        "change_pct": -7.97
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.96
      },
      {
        "name": "动漫",
        "change_pct": -6.71
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.45
      },
      {
        "name": "传媒",
        "change_pct": -5.1
      },
      {
        "name": "元宇宙",
        "change_pct": -3.25
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.5
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -3.83
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 28,
    "hot_rank_chg": 15,
    "stock_cnt": 5799,
    "price": "4.41",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "3797726900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.96
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.25
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "有色金属",
        "change_pct": -0.46
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.53
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.54
      },
      {
        "name": "自贸区",
        "change_pct": -1.69
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.6
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 31,
    "hot_rank_chg": 4,
    "stock_cnt": 5799,
    "price": "5.23",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "4627396900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.24
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.69
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "信托",
        "change_pct": -0.4
      },
      {
        "name": "民营医院",
        "change_pct": -1.22
      },
      {
        "name": "汽车销售",
        "change_pct": -3.21
      },
      {
        "name": "社区团购",
        "change_pct": -1.97
      },
      {
        "name": "大金融",
        "change_pct": -0.09
      },
      {
        "name": "餐饮",
        "change_pct": -1.24
      },
      {
        "name": "首发经济",
        "change_pct": -3.14
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 32,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "5.49",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "3070664300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -3.77
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "游戏",
        "change_pct": -4.99
      },
      {
        "name": "影视",
        "change_pct": -7.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.5
      }
    ]
  },
  {
    "code": "002905",
    "name": "金逸影视",
    "hot_rank": 35,
    "hot_rank_chg": 51,
    "stock_cnt": 5799,
    "price": "10.32",
    "change": "-5.23",
    "market_id": "33",
    "circulate_market_value": "3606220800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "影视",
        "change_pct": -7.97
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 39,
    "hot_rank_chg": 63,
    "stock_cnt": 5799,
    "price": "8.89",
    "change": "-4.51",
    "market_id": "33",
    "circulate_market_value": "9423001500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.43
      },
      {
        "name": "电子烟",
        "change_pct": -1.91
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "造纸",
        "change_pct": -1.39
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "包装印刷",
        "change_pct": -1.19
      },
      {
        "name": "卫星互联网",
        "change_pct": -1.74
      },
      {
        "name": "太空算力",
        "change_pct": -2.0
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 40,
    "hot_rank_chg": 60,
    "stock_cnt": 5799,
    "price": "6.56",
    "change": "-5.75",
    "market_id": "17",
    "circulate_market_value": "3006109500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.28
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.25
      },
      {
        "name": "自贸区",
        "change_pct": -1.69
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 43,
    "hot_rank_chg": -26,
    "stock_cnt": 5799,
    "price": "12.03",
    "change": "-7.82",
    "market_id": "33",
    "circulate_market_value": "41839501000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.53
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "VR&AR",
        "change_pct": -1.16
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.96
      },
      {
        "name": "大数据",
        "change_pct": -1.55
      },
      {
        "name": "教育",
        "change_pct": -2.25
      },
      {
        "name": "百度概念股",
        "change_pct": -2.89
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -2.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.45
      },
      {
        "name": "传媒",
        "change_pct": -5.1
      },
      {
        "name": "快手概念股",
        "change_pct": -4.78
      },
      {
        "name": "NFT",
        "change_pct": -4.57
      },
      {
        "name": "元宇宙",
        "change_pct": -3.25
      },
      {
        "name": "虚拟数字人",
        "change_pct": -4.01
      },
      {
        "name": "web3.0",
        "change_pct": -3.46
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.41
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.53
      },
      {
        "name": "职业教育",
        "change_pct": -2.41
      },
      {
        "name": "云游戏",
        "change_pct": -3.51
      },
      {
        "name": "网红/MCN",
        "change_pct": -2.73
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -2.33
      },
      {
        "name": "AI营销",
        "change_pct": -4.7
      },
      {
        "name": "词元概念/Token",
        "change_pct": -1.59
      },
      {
        "name": "华为产业链",
        "change_pct": -1.47
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.9
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.5
      },
      {
        "name": "AI视频",
        "change_pct": -5.05
      },
      {
        "name": "智谱AI",
        "change_pct": -3.17
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.13
      },
      {
        "name": "区块链",
        "change_pct": -1.87
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 45,
    "hot_rank_chg": 1966,
    "stock_cnt": 5799,
    "price": "1.73",
    "change": "10.19",
    "market_id": "17",
    "circulate_market_value": "5591621200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "重整投资协议",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.73
      },
      {
        "name": "中药",
        "change_pct": -1.16
      },
      {
        "name": "创新药",
        "change_pct": -1.34
      },
      {
        "name": "水泥",
        "change_pct": -0.28
      },
      {
        "name": "保健品",
        "change_pct": -0.7
      },
      {
        "name": "医药",
        "change_pct": -1.34
      },
      {
        "name": "疫苗",
        "change_pct": -1.7
      },
      {
        "name": "振兴东北",
        "change_pct": -1.1
      },
      {
        "name": "食品",
        "change_pct": -0.81
      },
      {
        "name": "物业管理",
        "change_pct": -2.26
      },
      {
        "name": "低价股",
        "change_pct": -1.79
      },
      {
        "name": "国企改革",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 46,
    "hot_rank_chg": -26,
    "stock_cnt": 5799,
    "price": "9.03",
    "change": "-0.22",
    "market_id": "17",
    "circulate_market_value": "2434598300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.17
      },
      {
        "name": "高股息",
        "change_pct": -0.51
      },
      {
        "name": "银行",
        "change_pct": 0.03
      },
      {
        "name": "白马股",
        "change_pct": -0.1
      },
      {
        "name": "破净股",
        "change_pct": -0.78
      },
      {
        "name": "大金融",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "002451",
    "name": "摩恩电气",
    "hot_rank": 54,
    "hot_rank_chg": 2407,
    "stock_cnt": 5799,
    "price": "7.13",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "3131132400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电磁线",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": -0.67
      },
      {
        "name": "5G",
        "change_pct": -1.74
      },
      {
        "name": "充电桩",
        "change_pct": -1.27
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "风电",
        "change_pct": -1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.53
      },
      {
        "name": "供应链金融",
        "change_pct": -0.5
      },
      {
        "name": "智能电网",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 56,
    "hot_rank_chg": 60,
    "stock_cnt": 5799,
    "price": "2.75",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4017734300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "海参",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.16
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "冷链",
        "change_pct": -0.3
      },
      {
        "name": "医药",
        "change_pct": -1.34
      },
      {
        "name": "食品",
        "change_pct": -0.81
      },
      {
        "name": "食品安全",
        "change_pct": -0.37
      },
      {
        "name": "预制菜",
        "change_pct": -1.46
      },
      {
        "name": "低价股",
        "change_pct": -1.79
      },
      {
        "name": "水产养殖",
        "change_pct": -1.59
      },
      {
        "name": "海洋经济",
        "change_pct": -1.54
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 57,
    "hot_rank_chg": -20,
    "stock_cnt": 5799,
    "price": "2.41",
    "change": "-10.07",
    "market_id": "33",
    "circulate_market_value": "10601612800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.44
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "京津冀",
        "change_pct": -1.16
      },
      {
        "name": "旅游",
        "change_pct": -1.39
      },
      {
        "name": "园林",
        "change_pct": -4.25
      },
      {
        "name": "海绵城市",
        "change_pct": -1.77
      },
      {
        "name": "固废处理",
        "change_pct": -1.48
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "风电",
        "change_pct": -1.4
      },
      {
        "name": "雄安新区",
        "change_pct": -1.91
      },
      {
        "name": "北京城市规划",
        "change_pct": -1.71
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.18
      },
      {
        "name": "储能",
        "change_pct": -1.24
      },
      {
        "name": "碳中和",
        "change_pct": -0.94
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.89
      },
      {
        "name": "汽车拆解",
        "change_pct": -1.77
      },
      {
        "name": "土壤修复",
        "change_pct": -1.64
      },
      {
        "name": "核污染防治",
        "change_pct": -0.97
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.3
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.04
      },
      {
        "name": "低价股",
        "change_pct": -1.79
      },
      {
        "name": "西部大开发",
        "change_pct": -2.06
      }
    ]
  },
  {
    "code": "000521",
    "name": "长虹美菱",
    "hot_rank": 58,
    "hot_rank_chg": 321,
    "stock_cnt": 5799,
    "price": "4.74",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "4148869200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "家电",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -1.37
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "人工智能",
        "change_pct": -1.96
      },
      {
        "name": "冷链",
        "change_pct": -0.3
      },
      {
        "name": "小家电",
        "change_pct": 0.22
      },
      {
        "name": "白色家电",
        "change_pct": -0.5
      },
      {
        "name": "家电",
        "change_pct": -0.52
      },
      {
        "name": "破净股",
        "change_pct": -0.78
      },
      {
        "name": "智能制造",
        "change_pct": -1.61
      },
      {
        "name": "工业互联网",
        "change_pct": -1.61
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.82
      },
      {
        "name": "垃圾分类",
        "change_pct": -1.52
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.1
      },
      {
        "name": "C2M",
        "change_pct": -1.21
      },
      {
        "name": "生物安全",
        "change_pct": -0.03
      },
      {
        "name": "出海龙头",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 59,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "12.16",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "4155794200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "轮胎",
        "change_pct": -0.38
      },
      {
        "name": "风电",
        "change_pct": -1.4
      },
      {
        "name": "航天",
        "change_pct": -1.75
      },
      {
        "name": "人形机器人",
        "change_pct": -3.45
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 63,
    "hot_rank_chg": 106,
    "stock_cnt": 5799,
    "price": "4.21",
    "change": "1.94",
    "market_id": "33",
    "circulate_market_value": "11167237900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "装修装饰",
        "change_pct": -1.14
      },
      {
        "name": "装配式建筑",
        "change_pct": -1.57
      },
      {
        "name": "破净股",
        "change_pct": -0.78
      },
      {
        "name": "航天",
        "change_pct": -1.75
      },
      {
        "name": "旧改",
        "change_pct": -1.43
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 66,
    "hot_rank_chg": -30,
    "stock_cnt": 5799,
    "price": "8.42",
    "change": "-8.28",
    "market_id": "33",
    "circulate_market_value": "34014774000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.33
      },
      {
        "name": "半导体",
        "change_pct": 0.32
      },
      {
        "name": "一带一路",
        "change_pct": -1.04
      },
      {
        "name": "京津冀",
        "change_pct": -1.16
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "复牌股",
        "change_pct": -8.37
      },
      {
        "name": "碳中和",
        "change_pct": -0.94
      },
      {
        "name": "国产芯片",
        "change_pct": -0.42
      },
      {
        "name": "IGBT",
        "change_pct": 0.01
      },
      {
        "name": "颗粒硅",
        "change_pct": -3.33
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.04
      },
      {
        "name": "大硅片",
        "change_pct": 1.89
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 67,
    "hot_rank_chg": 728,
    "stock_cnt": 5799,
    "price": "7.91",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "3805812200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "光刻胶配套试剂",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -1.38
      },
      {
        "name": "医疗器械",
        "change_pct": -1.37
      },
      {
        "name": "锂电池",
        "change_pct": -1.24
      },
      {
        "name": "基因测序",
        "change_pct": -1.49
      },
      {
        "name": "PCB板",
        "change_pct": -2.04
      },
      {
        "name": "医药",
        "change_pct": -1.34
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.53
      },
      {
        "name": "化学原料药",
        "change_pct": -1.12
      },
      {
        "name": "食品安全",
        "change_pct": -0.37
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.44
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 3.67
      },
      {
        "name": "异丙醇",
        "change_pct": 1.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.1
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -1.24
      }
    ]
  },
  {
    "code": "002549",
    "name": "凯美特气",
    "hot_rank": 69,
    "hot_rank_chg": 44,
    "stock_cnt": 5799,
    "price": "12.26",
    "change": "2.94",
    "market_id": "33",
    "circulate_market_value": "8488327800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电子特气",
        "change_pct": 1.72
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.12
      },
      {
        "name": "冷链",
        "change_pct": -0.3
      },
      {
        "name": "大气治理",
        "change_pct": -0.99
      },
      {
        "name": "环保",
        "change_pct": -1.18
      },
      {
        "name": "碳中和",
        "change_pct": -0.94
      },
      {
        "name": "工业气体",
        "change_pct": 1.49
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 3.67
      },
      {
        "name": "氦气",
        "change_pct": 1.17
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 74,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "5.29",
    "change": "-1.67",
    "market_id": "33",
    "circulate_market_value": "4055245900.00",
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
        "name": "优化生育（三孩）",
        "change_pct": -1.69
      },
      {
        "name": "强势人气股",
        "change_pct": -4.26
      },
      {
        "name": "医药商业",
        "change_pct": -1.6
      },
      {
        "name": "保健品",
        "change_pct": -0.7
      },
      {
        "name": "民营医院",
        "change_pct": -1.22
      },
      {
        "name": "医药",
        "change_pct": -1.34
      },
      {
        "name": "食品",
        "change_pct": -0.81
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.44
      },
      {
        "name": "口腔",
        "change_pct": -0.68
      },
      {
        "name": "医美",
        "change_pct": -1.18
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.1
      }
    ]
  },
  {
    "code": "000819",
    "name": "岳阳兴长",
    "hot_rank": 76,
    "hot_rank_chg": -27,
    "stock_cnt": 5799,
    "price": "12.69",
    "change": "-10.00",
    "market_id": "33",
    "circulate_market_value": "4644795100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.71
      },
      {
        "name": "锂电池",
        "change_pct": -1.24
      },
      {
        "name": "石油化工",
        "change_pct": -0.97
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "环氧树脂",
        "change_pct": -1.27
      },
      {
        "name": "油气改革",
        "change_pct": -1.4
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.51
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": -1.41
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.04
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.83
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 77,
    "hot_rank_chg": 57,
    "stock_cnt": 5799,
    "price": "8.51",
    "change": "-10.04",
    "market_id": "33",
    "circulate_market_value": "2844543400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.55
      },
      {
        "name": "饲料",
        "change_pct": -1.42
      },
      {
        "name": "一带一路",
        "change_pct": -1.0
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "保健品",
        "change_pct": -0.63
      },
      {
        "name": "山东国企改革",
        "change_pct": -1.19
      },
      {
        "name": "污水处理",
        "change_pct": -0.59
      },
      {
        "name": "环保",
        "change_pct": -1.15
      },
      {
        "name": "食品",
        "change_pct": -0.75
      },
      {
        "name": "预制菜",
        "change_pct": -1.39
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      },
      {
        "name": "水产养殖",
        "change_pct": -1.49
      },
      {
        "name": "广西概念",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 81,
    "hot_rank_chg": 1,
    "stock_cnt": 5799,
    "price": "6.32",
    "change": "2.44",
    "market_id": "33",
    "circulate_market_value": "12084233400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.12
      },
      {
        "name": "林业",
        "change_pct": -1.88
      },
      {
        "name": "碳中和",
        "change_pct": -0.88
      },
      {
        "name": "自贸区",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 82,
    "hot_rank_chg": -35,
    "stock_cnt": 5799,
    "price": "5.47",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "6228450300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -1.74
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "高铁轨交",
        "change_pct": -1.26
      },
      {
        "name": "航母",
        "change_pct": -1.1
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "风电",
        "change_pct": -1.38
      },
      {
        "name": "军工",
        "change_pct": -1.22
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      },
      {
        "name": "宁夏概念",
        "change_pct": -1.57
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 84,
    "hot_rank_chg": 17,
    "stock_cnt": 5799,
    "price": "3.27",
    "change": "3.81",
    "market_id": "17",
    "circulate_market_value": "7234316000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -1.36
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.37
      },
      {
        "name": "光通信",
        "change_pct": -1.92
      },
      {
        "name": "林业",
        "change_pct": -1.88
      },
      {
        "name": "军民融合",
        "change_pct": -1.39
      },
      {
        "name": "军工",
        "change_pct": -1.22
      },
      {
        "name": "人造肉",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "002205",
    "name": "国统股份",
    "hot_rank": 85,
    "hot_rank_chg": -30,
    "stock_cnt": 5799,
    "price": "12.80",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "2378793300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.71
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "水利",
        "change_pct": -1.57
      },
      {
        "name": "海绵城市",
        "change_pct": -1.73
      },
      {
        "name": "新疆概念",
        "change_pct": -2.27
      },
      {
        "name": "风电",
        "change_pct": -1.38
      },
      {
        "name": "地下管廊",
        "change_pct": -1.51
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      },
      {
        "name": "西部大开发",
        "change_pct": -1.99
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 87,
    "hot_rank_chg": 35,
    "stock_cnt": 5799,
    "price": "9.80",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "3928643400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -1.01
      },
      {
        "name": "新零售",
        "change_pct": -2.11
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "物业管理",
        "change_pct": -2.27
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      },
      {
        "name": "地摊经济",
        "change_pct": -1.83
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 88,
    "hot_rank_chg": -35,
    "stock_cnt": 5799,
    "price": "9.01",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "8409227700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -1.25
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.63
      },
      {
        "name": "新疆概念",
        "change_pct": -2.27
      },
      {
        "name": "光伏",
        "change_pct": -2.12
      },
      {
        "name": "风电",
        "change_pct": -1.38
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.51
      },
      {
        "name": "储能",
        "change_pct": -1.22
      },
      {
        "name": "国企改革",
        "change_pct": -1.07
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 92,
    "hot_rank_chg": -35,
    "stock_cnt": 5799,
    "price": "4.22",
    "change": "-4.96",
    "market_id": "17",
    "circulate_market_value": "4277833100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.0
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "水利",
        "change_pct": -1.57
      },
      {
        "name": "智慧城市",
        "change_pct": -1.8
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.66
      },
      {
        "name": "振兴东北",
        "change_pct": -1.05
      },
      {
        "name": "大基建",
        "change_pct": -1.13
      },
      {
        "name": "中俄贸易",
        "change_pct": -1.26
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.0
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -0.69
      },
      {
        "name": "旧改",
        "change_pct": -1.38
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 99,
    "hot_rank_chg": -6,
    "stock_cnt": 5799,
    "price": "3.85",
    "change": "-8.55",
    "market_id": "33",
    "circulate_market_value": "3097215200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -1.42
      },
      {
        "name": "养猪",
        "change_pct": -2.31
      },
      {
        "name": "强势人气股",
        "change_pct": -4.22
      },
      {
        "name": "大农业",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "002035",
    "name": "华帝股份",
    "hot_rank": 100,
    "hot_rank_chg": 163,
    "stock_cnt": 5799,
    "price": "4.82",
    "change": "2.99",
    "market_id": "33",
    "circulate_market_value": "3769421600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "家电",
        "change_pct": -0.51
      },
      {
        "name": "机器视觉",
        "change_pct": -1.41
      },
      {
        "name": "无人机",
        "change_pct": -1.1
      },
      {
        "name": "智能制造",
        "change_pct": -1.59
      },
      {
        "name": "热泵",
        "change_pct": -0.76
      },
      {
        "name": "厨卫家电",
        "change_pct": -1.35
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "31.52", "change": "10.02", "market_id": "33", "circulate_market_value": "24010853000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "地天板"}, {"code": "600715", "name": "文投控股", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "3.37", "change": "-9.89", "market_id": "17", "circulate_market_value": "9646194500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.71}, {"name": "强势人气股", "change_pct": -4.27}, {"name": "游戏", "change_pct": -4.95}, {"name": "影视", "change_pct": -7.94}, {"name": "国企改革", "change_pct": -1.12}, {"name": "短剧/互动影游", "change_pct": -6.46}, {"name": "AI视频", "change_pct": -5.03}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5799, "price": "15.29", "change": "10.00", "market_id": "17", "circulate_market_value": "16765404000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI算力"}, {"code": "002187", "name": "广百股份", "hot_rank": 4, "hot_rank_chg": 26, "stock_cnt": 5799, "price": "8.44", "change": "10.04", "market_id": "33", "circulate_market_value": "5915550700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -2.25}, {"name": "强势人气股", "change_pct": -4.27}, {"name": "粤港澳大湾区", "change_pct": -0.92}, {"name": "物业管理", "change_pct": -2.25}, {"name": "预制菜", "change_pct": -1.49}, {"name": "地摊经济", "change_pct": -1.89}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "387.81", "change": "-5.17", "market_id": "33", "circulate_market_value": "430444670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "5.70", "change": "10.04", "market_id": "17", "circulate_market_value": "7609801900.00", "change_type": "1", "change_section": "14", "change_days": "8", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.27}, {"name": "氢能源/燃料电池", "change_pct": -1.1}, {"name": "物联网", "change_pct": -1.44}, {"name": "LED", "change_pct": -0.53}, {"name": "卫星互联网", "change_pct": -1.7}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "11.88", "change": "8.00", "market_id": "33", "circulate_market_value": "7129386700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.74}, {"name": "边缘计算", "change_pct": -1.47}, {"name": "核电", "change_pct": -0.83}, {"name": "海工装备", "change_pct": -1.36}, {"name": "强势人气股", "change_pct": -4.27}, {"name": "云计算数据中心", "change_pct": -1.34}, {"name": "冷链", "change_pct": -0.3}, {"name": "地热", "change_pct": -0.78}, {"name": "储能", "change_pct": -1.22}, {"name": "碳中和", "change_pct": -0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.74}, {"name": "汽车热管理", "change_pct": -2.56}, {"name": "热泵", "change_pct": -0.79}, {"name": "液冷服务器", "change_pct": -1.57}, {"name": "蜜雪冰城概念股", "change_pct": -0.1}, {"name": "海洋经济", "change_pct": -1.54}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "4.18", "change": "-3.69", "market_id": "33", "circulate_market_value": "6608459900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -2.33}, {"name": "体外诊断", "change_pct": -1.39}, {"name": "医疗器械", "change_pct": -1.38}, {"name": "强势人气股", "change_pct": -4.27}, {"name": "基因测序", "change_pct": -1.52}, {"name": "预制菜", "change_pct": -1.49}, {"name": "水产养殖", "change_pct": -1.62}, {"name": "新冠病毒防治", "change_pct": -1.12}, {"name": "海洋经济", "change_pct": -1.54}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 9, "hot_rank_chg": 12, "stock_cnt": 5799, "price": "4.89", "change": "3.38", "market_id": "17", "circulate_market_value": "6383747900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.27}, {"name": "高速公路", "change_pct": -0.16}, {"name": "振兴东北", "change_pct": -1.17}, {"name": "黑龙江自贸区", "change_pct": -0.81}]}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "71.36", "change": "-6.02", "market_id": "33", "circulate_market_value": "98927918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000533", "name": "顺钠股份", "hot_rank": 11, "hot_rank_chg": 65, "stock_cnt": 5799, "price": "10.77", "change": "9.67", "market_id": "33", "circulate_market_value": "7376398800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.94}, {"name": "核电", "change_pct": -0.84}, {"name": "充电桩", "change_pct": -1.27}, {"name": "云计算数据中心", "change_pct": -1.37}, {"name": "新能源汽车", "change_pct": -1.53}, {"name": "储能", "change_pct": -1.24}, {"name": "阿里巴巴概念股", "change_pct": -2.38}, {"name": "中芯国际概念股", "change_pct": 1.78}, {"name": "智能电网", "change_pct": -0.96}, {"name": "核聚变", "change_pct": -0.97}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "8.32", "change": "-5.03", "market_id": "33", "circulate_market_value": "3748031100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.52}, {"name": "手游", "change_pct": -3.77}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "游戏", "change_pct": -4.99}, {"name": "物联网", "change_pct": -1.47}, {"name": "机器人", "change_pct": -2.46}, {"name": "无人机", "change_pct": -1.13}, {"name": "国产芯片", "change_pct": -0.42}, {"name": "5G消息/RCS", "change_pct": -2.33}, {"name": "低空经济", "change_pct": -1.47}, {"name": "无人物流车", "change_pct": -2.52}]}, {"code": "002685", "name": "华东重机", "hot_rank": 13, "hot_rank_chg": 37, "stock_cnt": 5799, "price": "6.70", "change": "10.02", "market_id": "33", "circulate_market_value": "6750848400.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "工业自动化", "change_pct": -2.25}, {"name": "机械", "change_pct": -1.07}, {"name": "智能制造", "change_pct": -1.61}, {"name": "国产芯片", "change_pct": -0.42}, {"name": "信创", "change_pct": -1.06}, {"name": "AI算力芯片", "change_pct": -2.06}]}, {"code": "603366", "name": "日出东方", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "11.26", "change": "-9.99", "market_id": "17", "circulate_market_value": "9154921600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "充电桩", "change_pct": -1.27}, {"name": "光伏", "change_pct": -2.12}, {"name": "新能源汽车", "change_pct": -1.53}, {"name": "家电", "change_pct": -0.52}, {"name": "储能", "change_pct": -1.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.82}, {"name": "华为鸿蒙", "change_pct": -1.5}, {"name": "厨卫家电", "change_pct": -1.37}, {"name": "华为产业链", "change_pct": -1.47}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 15, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "4.70", "change": "7.80", "market_id": "33", "circulate_market_value": "4324873800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.77}, {"name": "ST摘帽", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "人工智能", "change_pct": -1.96}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "游戏", "change_pct": -4.99}, {"name": "动漫", "change_pct": -6.71}, {"name": "腾讯概念股", "change_pct": -2.45}, {"name": "快手概念股", "change_pct": -4.78}, {"name": "NFT", "change_pct": -4.57}, {"name": "元宇宙", "change_pct": -3.25}, {"name": "虚拟数字人", "change_pct": -4.01}, {"name": "字节跳动概念股", "change_pct": -3.53}, {"name": "云游戏", "change_pct": -3.51}, {"name": "华为产业链", "change_pct": -1.47}, {"name": "IP经济/谷子经济", "change_pct": -3.83}]}, {"code": "002419", "name": "天虹股份", "hot_rank": 16, "hot_rank_chg": 165, "stock_cnt": 5799, "price": "5.48", "change": "1.48", "market_id": "33", "circulate_market_value": "6253993500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.53}, {"name": "彩票", "change_pct": -2.78}, {"name": "央企改革", "change_pct": -0.73}, {"name": "白酒", "change_pct": -1.31}, {"name": "新零售", "change_pct": -2.24}, {"name": "农业种植", "change_pct": -1.32}, {"name": "人工智能", "change_pct": -1.96}, {"name": "军工集团", "change_pct": -0.64}, {"name": "军工", "change_pct": -1.23}, {"name": "腾讯概念股", "change_pct": -2.45}, {"name": "大农业", "change_pct": -1.15}, {"name": "国企改革", "change_pct": -1.11}, {"name": "AI大模型/智能体", "change_pct": -1.9}]}, {"code": "300502", "name": "新易盛", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "157.30", "change": "-5.70", "market_id": "33", "circulate_market_value": "197368050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "16.00", "change": "-10.01", "market_id": "33", "circulate_market_value": "7353788800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 19, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "2.72", "change": "-8.11", "market_id": "17", "circulate_market_value": "9492223800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -4.82}, {"name": "车联网/车路云", "change_pct": -1.52}, {"name": "超高清视频", "change_pct": -1.52}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "人工智能", "change_pct": -1.96}, {"name": "云计算数据中心", "change_pct": -1.37}, {"name": "影视", "change_pct": -7.97}, {"name": "智慧城市", "change_pct": -1.81}, {"name": "国产芯片", "change_pct": -0.42}, {"name": "振兴东北", "change_pct": -1.1}, {"name": "传媒", "change_pct": -5.1}, {"name": "低价股", "change_pct": -1.79}, {"name": "国企改革", "change_pct": -1.11}, {"name": "在线教育", "change_pct": -1.71}, {"name": "医疗信息化", "change_pct": -1.76}, {"name": "AI大模型/智能体", "change_pct": -1.9}, {"name": "短剧/互动影游", "change_pct": -6.5}, {"name": "IP经济/谷子经济", "change_pct": -3.83}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 20, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "624.90", "change": "-11.23", "market_id": "17", "circulate_market_value": "18801816000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 21, "hot_rank_chg": -7, "stock_cnt": 5799, "price": "36.60", "change": "-4.54", "market_id": "17", "circulate_market_value": "164811230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600936", "name": "北投科技", "hot_rank": 22, "hot_rank_chg": 178, "stock_cnt": 5799, "price": "4.42", "change": "9.95", "market_id": "17", "circulate_market_value": "7385936000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "AI应用", "xgb_concepts": [{"name": "智慧城市", "change_pct": -1.81}, {"name": "机器人", "change_pct": -2.46}, {"name": "无人机", "change_pct": -1.13}, {"name": "广西概念", "change_pct": -1.53}, {"name": "AI大模型/智能体", "change_pct": -1.9}, {"name": "低空经济", "change_pct": -1.47}]}, {"code": "002156", "name": "通富微电", "hot_rank": 23, "hot_rank_chg": 31, "stock_cnt": 5799, "price": "43.88", "change": "0.11", "market_id": "33", "circulate_market_value": "66570629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 24, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "10.62", "change": "-10.00", "market_id": "17", "circulate_market_value": "11096709000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.44}, {"name": "上海国企改革", "change_pct": -1.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -5.1}, {"name": "国企改革", "change_pct": -1.11}]}, {"code": "002724", "name": "海洋王", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "10.54", "change": "-9.99", "market_id": "33", "circulate_market_value": "5970681200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "石墨烯", "change_pct": -1.34}, {"name": "军民融合", "change_pct": -1.41}, {"name": "物联网", "change_pct": -1.47}, {"name": "LED", "change_pct": -0.52}, {"name": "军工", "change_pct": -1.23}, {"name": "智慧灯杆", "change_pct": -1.76}, {"name": "海洋经济", "change_pct": -1.54}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 26, "hot_rank_chg": 8, "stock_cnt": 5799, "price": "4.55", "change": "-10.08", "market_id": "17", "circulate_market_value": "5280468200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "纺织服装", "change_pct": -1.65}, {"name": "浙江国企改革", "change_pct": -1.7}, {"name": "影视", "change_pct": -7.97}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -1.11}, {"name": "短剧/互动影游", "change_pct": -6.5}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "9.11", "change": "-9.98", "market_id": "33", "circulate_market_value": "4315227400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.77}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "游戏", "change_pct": -4.99}, {"name": "影视", "change_pct": -7.97}, {"name": "直播/短视频", "change_pct": -4.96}, {"name": "动漫", "change_pct": -6.71}, {"name": "腾讯概念股", "change_pct": -2.45}, {"name": "传媒", "change_pct": -5.1}, {"name": "元宇宙", "change_pct": -3.25}, {"name": "短剧/互动影游", "change_pct": -6.5}, {"name": "IP经济/谷子经济", "change_pct": -3.83}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 28, "hot_rank_chg": 15, "stock_cnt": 5799, "price": "4.41", "change": "-10.00", "market_id": "33", "circulate_market_value": "3797726900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.96}, {"name": "一带一路", "change_pct": -1.04}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "福建自贸/海西概念", "change_pct": -2.25}, {"name": "光伏", "change_pct": -2.12}, {"name": "有色金属", "change_pct": -0.46}, {"name": "新能源汽车", "change_pct": -1.53}, {"name": "新能源车零部件", "change_pct": -2.54}, {"name": "自贸区", "change_pct": -1.69}, {"name": "液冷服务器", "change_pct": -1.6}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 29, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "45.21", "change": "-9.32", "market_id": "33", "circulate_market_value": "47924732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 30, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "35.67", "change": "-1.52", "market_id": "17", "circulate_market_value": "707838770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "5.23", "change": "-9.98", "market_id": "17", "circulate_market_value": "4627396900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.24}, {"name": "优化生育（三孩）", "change_pct": -1.69}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "信托", "change_pct": -0.4}, {"name": "民营医院", "change_pct": -1.22}, {"name": "汽车销售", "change_pct": -3.21}, {"name": "社区团购", "change_pct": -1.97}, {"name": "大金融", "change_pct": -0.09}, {"name": "餐饮", "change_pct": -1.24}, {"name": "首发经济", "change_pct": -3.14}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 32, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "5.49", "change": "-10.00", "market_id": "17", "circulate_market_value": "3070664300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -3.77}, {"name": "ST摘帽", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "游戏", "change_pct": -4.99}, {"name": "影视", "change_pct": -7.97}, {"name": "短剧/互动影游", "change_pct": -6.5}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 33, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "17.66", "change": "-6.07", "market_id": "33", "circulate_market_value": "3131251200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 34, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "14.62", "change": "-0.61", "market_id": "17", "circulate_market_value": "11509981100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002905", "name": "金逸影视", "hot_rank": 35, "hot_rank_chg": 51, "stock_cnt": 5799, "price": "10.32", "change": "-5.23", "market_id": "33", "circulate_market_value": "3606220800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "影视", "change_pct": -7.97}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 36, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "29.09", "change": "-5.92", "market_id": "33", "circulate_market_value": "29721252000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 37, "hot_rank_chg": 37, "stock_cnt": 5799, "price": "39.33", "change": "10.01", "market_id": "17", "circulate_market_value": "33294943000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "688347", "name": "华虹宏力", "hot_rank": 38, "hot_rank_chg": 284, "stock_cnt": 5799, "price": "171.64", "change": "9.89", "market_id": "17", "circulate_market_value": "69986210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 39, "hot_rank_chg": 63, "stock_cnt": 5799, "price": "8.89", "change": "-4.51", "market_id": "33", "circulate_market_value": "9423001500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.43}, {"name": "电子烟", "change_pct": -1.91}, {"name": "一带一路", "change_pct": -1.04}, {"name": "造纸", "change_pct": -1.39}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "包装印刷", "change_pct": -1.19}, {"name": "卫星互联网", "change_pct": -1.74}, {"name": "太空算力", "change_pct": -2.0}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 40, "hot_rank_chg": 60, "stock_cnt": 5799, "price": "6.56", "change": "-5.75", "market_id": "17", "circulate_market_value": "3006109500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.28}, {"name": "福建自贸/海西概念", "change_pct": -2.25}, {"name": "自贸区", "change_pct": -1.69}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 41, "hot_rank_chg": 136, "stock_cnt": 5799, "price": "22.81", "change": "5.02", "market_id": "33", "circulate_market_value": "26142666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 42, "hot_rank_chg": 87, "stock_cnt": 5799, "price": "113.00", "change": "6.16", "market_id": "17", "circulate_market_value": "226067110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 43, "hot_rank_chg": -26, "stock_cnt": 5799, "price": "12.03", "change": "-7.82", "market_id": "33", "circulate_market_value": "41839501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.53}, {"name": "人工智能", "change_pct": -1.96}, {"name": "VR&AR", "change_pct": -1.16}, {"name": "直播/短视频", "change_pct": -4.96}, {"name": "大数据", "change_pct": -1.55}, {"name": "教育", "change_pct": -2.25}, {"name": "百度概念股", "change_pct": -2.89}, {"name": "阿里巴巴概念股", "change_pct": -2.38}, {"name": "腾讯概念股", "change_pct": -2.45}, {"name": "传媒", "change_pct": -5.1}, {"name": "快手概念股", "change_pct": -4.78}, {"name": "NFT", "change_pct": -4.57}, {"name": "元宇宙", "change_pct": -3.25}, {"name": "虚拟数字人", "change_pct": -4.01}, {"name": "web3.0", "change_pct": -3.46}, {"name": "AIGC概念", "change_pct": -3.41}, {"name": "字节跳动概念股", "change_pct": -3.53}, {"name": "职业教育", "change_pct": -2.41}, {"name": "云游戏", "change_pct": -3.51}, {"name": "网红/MCN", "change_pct": -2.73}, {"name": "5G消息/RCS", "change_pct": -2.33}, {"name": "AI营销", "change_pct": -4.7}, {"name": "词元概念/Token", "change_pct": -1.59}, {"name": "华为产业链", "change_pct": -1.47}, {"name": "AI大模型/智能体", "change_pct": -1.9}, {"name": "短剧/互动影游", "change_pct": -6.5}, {"name": "AI视频", "change_pct": -5.05}, {"name": "智谱AI", "change_pct": -3.17}, {"name": "小红书概念股", "change_pct": -5.13}, {"name": "区块链", "change_pct": -1.87}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 44, "hot_rank_chg": -22, "stock_cnt": 5799, "price": "215.11", "change": "-3.63", "market_id": "17", "circulate_market_value": "144278220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600881", "name": "亚泰集团", "hot_rank": 45, "hot_rank_chg": 1966, "stock_cnt": 5799, "price": "1.73", "change": "10.19", "market_id": "17", "circulate_market_value": "5591621200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重整投资协议", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.73}, {"name": "中药", "change_pct": -1.16}, {"name": "创新药", "change_pct": -1.34}, {"name": "水泥", "change_pct": -0.28}, {"name": "保健品", "change_pct": -0.7}, {"name": "医药", "change_pct": -1.34}, {"name": "疫苗", "change_pct": -1.7}, {"name": "振兴东北", "change_pct": -1.1}, {"name": "食品", "change_pct": -0.81}, {"name": "物业管理", "change_pct": -2.26}, {"name": "低价股", "change_pct": -1.79}, {"name": "国企改革", "change_pct": -1.11}]}, {"code": "601398", "name": "工商银行", "hot_rank": 46, "hot_rank_chg": -26, "stock_cnt": 5799, "price": "9.03", "change": "-0.22", "market_id": "17", "circulate_market_value": "2434598300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.17}, {"name": "高股息", "change_pct": -0.51}, {"name": "银行", "change_pct": 0.03}, {"name": "白马股", "change_pct": -0.1}, {"name": "破净股", "change_pct": -0.78}, {"name": "大金融", "change_pct": -0.09}]}, {"code": "605378", "name": "野马电池", "hot_rank": 47, "hot_rank_chg": 190, "stock_cnt": 5799, "price": "16.02", "change": "3.22", "market_id": "17", "circulate_market_value": "4186769300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 48, "hot_rank_chg": 30, "stock_cnt": 5799, "price": "14.07", "change": "0.79", "market_id": "33", "circulate_market_value": "46854056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 49, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "72.63", "change": "-1.82", "market_id": "33", "circulate_market_value": "140363930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920309", "name": "菊乐股份", "hot_rank": 50, "hot_rank_chg": 4997, "stock_cnt": 5799, "price": "56.50", "change": "76.38", "market_id": "151", "circulate_market_value": "562666650.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002959", "name": "小熊电器", "hot_rank": 51, "hot_rank_chg": 124, "stock_cnt": 5799, "price": "39.90", "change": "10.01", "market_id": "33", "circulate_market_value": "5577796200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "小家电"}, {"code": "600487", "name": "亨通光电", "hot_rank": 52, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "37.66", "change": "-2.21", "market_id": "17", "circulate_market_value": "92404318000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 53, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "907.50", "change": "1.06", "market_id": "17", "circulate_market_value": "570685010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002451", "name": "摩恩电气", "hot_rank": 54, "hot_rank_chg": 2407, "stock_cnt": 5799, "price": "7.13", "change": "10.03", "market_id": "33", "circulate_market_value": "3131132400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电磁线", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": -0.67}, {"name": "5G", "change_pct": -1.74}, {"name": "充电桩", "change_pct": -1.27}, {"name": "光伏", "change_pct": -2.12}, {"name": "风电", "change_pct": -1.4}, {"name": "新能源汽车", "change_pct": -1.53}, {"name": "供应链金融", "change_pct": -0.5}, {"name": "智能电网", "change_pct": -0.96}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 55, "hot_rank_chg": -29, "stock_cnt": 5799, "price": "103.86", "change": "-5.75", "market_id": "33", "circulate_market_value": "113039983000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 56, "hot_rank_chg": 60, "stock_cnt": 5799, "price": "2.75", "change": "10.00", "market_id": "17", "circulate_market_value": "4017734300.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "海参", "xgb_concepts": [{"name": "中药", "change_pct": -1.16}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "冷链", "change_pct": -0.3}, {"name": "医药", "change_pct": -1.34}, {"name": "食品", "change_pct": -0.81}, {"name": "食品安全", "change_pct": -0.37}, {"name": "预制菜", "change_pct": -1.46}, {"name": "低价股", "change_pct": -1.79}, {"name": "水产养殖", "change_pct": -1.59}, {"name": "海洋经济", "change_pct": -1.54}]}, {"code": "002310", "name": "东方新能", "hot_rank": 57, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "2.41", "change": "-10.07", "market_id": "33", "circulate_market_value": "10601612800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.44}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "京津冀", "change_pct": -1.16}, {"name": "旅游", "change_pct": -1.39}, {"name": "园林", "change_pct": -4.25}, {"name": "海绵城市", "change_pct": -1.77}, {"name": "固废处理", "change_pct": -1.48}, {"name": "光伏", "change_pct": -2.12}, {"name": "风电", "change_pct": -1.4}, {"name": "雄安新区", "change_pct": -1.91}, {"name": "北京城市规划", "change_pct": -1.71}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.18}, {"name": "储能", "change_pct": -1.24}, {"name": "碳中和", "change_pct": -0.94}, {"name": "乡村振兴", "change_pct": -1.89}, {"name": "汽车拆解", "change_pct": -1.77}, {"name": "土壤修复", "change_pct": -1.64}, {"name": "核污染防治", "change_pct": -0.97}, {"name": "东数西算/算力", "change_pct": -1.3}, {"name": "新型城镇化", "change_pct": -2.04}, {"name": "低价股", "change_pct": -1.79}, {"name": "西部大开发", "change_pct": -2.06}]}, {"code": "000521", "name": "长虹美菱", "hot_rank": 58, "hot_rank_chg": 321, "stock_cnt": 5799, "price": "4.74", "change": "9.98", "market_id": "33", "circulate_market_value": "4148869200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "家电", "xgb_concepts": [{"name": "医疗器械", "change_pct": -1.37}, {"name": "一带一路", "change_pct": -1.04}, {"name": "人工智能", "change_pct": -1.96}, {"name": "冷链", "change_pct": -0.3}, {"name": "小家电", "change_pct": 0.22}, {"name": "白色家电", "change_pct": -0.5}, {"name": "家电", "change_pct": -0.52}, {"name": "破净股", "change_pct": -0.78}, {"name": "智能制造", "change_pct": -1.61}, {"name": "工业互联网", "change_pct": -1.61}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.82}, {"name": "垃圾分类", "change_pct": -1.52}, {"name": "新冠病毒防治", "change_pct": -1.1}, {"name": "C2M", "change_pct": -1.21}, {"name": "生物安全", "change_pct": -0.03}, {"name": "出海龙头", "change_pct": 0.36}]}, {"code": "603278", "name": "大业股份", "hot_rank": 59, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "12.16", "change": "-9.99", "market_id": "17", "circulate_market_value": "4155794200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "轮胎", "change_pct": -0.38}, {"name": "风电", "change_pct": -1.4}, {"name": "航天", "change_pct": -1.75}, {"name": "人形机器人", "change_pct": -3.45}]}, {"code": "002058", "name": "紫竹高科", "hot_rank": 60, "hot_rank_chg": 66, "stock_cnt": 5799, "price": "23.31", "change": "4.06", "market_id": "33", "circulate_market_value": "3341857500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300604", "name": "长川科技", "hot_rank": 61, "hot_rank_chg": 124, "stock_cnt": 5799, "price": "182.72", "change": "7.26", "market_id": "33", "circulate_market_value": "90042495000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 62, "hot_rank_chg": 13, "stock_cnt": 5799, "price": "51.49", "change": "1.96", "market_id": "17", "circulate_market_value": "92136956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 63, "hot_rank_chg": 106, "stock_cnt": 5799, "price": "4.21", "change": "1.94", "market_id": "33", "circulate_market_value": "11167237900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.26}, {"name": "装修装饰", "change_pct": -1.14}, {"name": "装配式建筑", "change_pct": -1.57}, {"name": "破净股", "change_pct": -0.78}, {"name": "航天", "change_pct": -1.75}, {"name": "旧改", "change_pct": -1.43}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 64, "hot_rank_chg": 5, "stock_cnt": 5799, "price": "14.30", "change": "-2.33", "market_id": "33", "circulate_market_value": "4036384800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 65, "hot_rank_chg": -21, "stock_cnt": 5799, "price": "47.97", "change": "-10.00", "market_id": "17", "circulate_market_value": "14318021000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 66, "hot_rank_chg": -30, "stock_cnt": 5799, "price": "8.42", "change": "-8.28", "market_id": "33", "circulate_market_value": "34014774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.33}, {"name": "半导体", "change_pct": 0.32}, {"name": "一带一路", "change_pct": -1.04}, {"name": "京津冀", "change_pct": -1.16}, {"name": "光伏", "change_pct": -2.12}, {"name": "复牌股", "change_pct": -8.37}, {"name": "碳中和", "change_pct": -0.94}, {"name": "国产芯片", "change_pct": -0.42}, {"name": "IGBT", "change_pct": 0.01}, {"name": "颗粒硅", "change_pct": -3.33}, {"name": "异质结电池HJT", "change_pct": -2.04}, {"name": "大硅片", "change_pct": 1.89}, {"name": "中芯国际概念股", "change_pct": 1.78}]}, {"code": "002584", "name": "西陇科学", "hot_rank": 67, "hot_rank_chg": 728, "stock_cnt": 5799, "price": "7.91", "change": "10.01", "market_id": "33", "circulate_market_value": "3805812200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶配套试剂", "xgb_concepts": [{"name": "体外诊断", "change_pct": -1.38}, {"name": "医疗器械", "change_pct": -1.37}, {"name": "锂电池", "change_pct": -1.24}, {"name": "基因测序", "change_pct": -1.49}, {"name": "PCB板", "change_pct": -2.04}, {"name": "医药", "change_pct": -1.34}, {"name": "新能源汽车", "change_pct": -1.53}, {"name": "化学原料药", "change_pct": -1.12}, {"name": "食品安全", "change_pct": -0.37}, {"name": "辅助生殖", "change_pct": -1.44}, {"name": "光刻机（胶）", "change_pct": 3.67}, {"name": "异丙醇", "change_pct": 1.12}, {"name": "新冠病毒防治", "change_pct": -1.1}, {"name": "磷酸铁锂", "change_pct": -1.24}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 68, "hot_rank_chg": 1468, "stock_cnt": 5799, "price": "24.33", "change": "9.99", "market_id": "33", "circulate_market_value": "3946881600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全"}, {"code": "002549", "name": "凯美特气", "hot_rank": 69, "hot_rank_chg": 44, "stock_cnt": 5799, "price": "12.26", "change": "2.94", "market_id": "33", "circulate_market_value": "8488327800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电子特气", "change_pct": 1.72}, {"name": "氢能源/燃料电池", "change_pct": -1.12}, {"name": "冷链", "change_pct": -0.3}, {"name": "大气治理", "change_pct": -0.99}, {"name": "环保", "change_pct": -1.18}, {"name": "碳中和", "change_pct": -0.94}, {"name": "工业气体", "change_pct": 1.49}, {"name": "光刻机（胶）", "change_pct": 3.67}, {"name": "氦气", "change_pct": 1.17}]}, {"code": "600641", "name": "先导基电", "hot_rank": 70, "hot_rank_chg": 53, "stock_cnt": 5799, "price": "30.56", "change": "0.20", "market_id": "17", "circulate_market_value": "28440050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 71, "hot_rank_chg": -25, "stock_cnt": 5799, "price": "14.72", "change": "-0.47", "market_id": "33", "circulate_market_value": "9717064900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 72, "hot_rank_chg": -27, "stock_cnt": 5799, "price": "58.22", "change": "-5.09", "market_id": "17", "circulate_market_value": "140412020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 73, "hot_rank_chg": 79, "stock_cnt": 5799, "price": "24.09", "change": "-0.78", "market_id": "33", "circulate_market_value": "18246130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 74, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "5.29", "change": "-1.67", "market_id": "33", "circulate_market_value": "4055245900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.16}, {"name": "优化生育（三孩）", "change_pct": -1.69}, {"name": "强势人气股", "change_pct": -4.26}, {"name": "医药商业", "change_pct": -1.6}, {"name": "保健品", "change_pct": -0.7}, {"name": "民营医院", "change_pct": -1.22}, {"name": "医药", "change_pct": -1.34}, {"name": "食品", "change_pct": -0.81}, {"name": "辅助生殖", "change_pct": -1.44}, {"name": "口腔", "change_pct": -0.68}, {"name": "医美", "change_pct": -1.18}, {"name": "新冠病毒防治", "change_pct": -1.1}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 75, "hot_rank_chg": -33, "stock_cnt": 5799, "price": "18.01", "change": "-9.99", "market_id": "17", "circulate_market_value": "3803048900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 76, "hot_rank_chg": -27, "stock_cnt": 5799, "price": "12.69", "change": "-10.00", "market_id": "33", "circulate_market_value": "4644795100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.71}, {"name": "锂电池", "change_pct": -1.24}, {"name": "石油化工", "change_pct": -0.97}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "环氧树脂", "change_pct": -1.27}, {"name": "油气改革", "change_pct": -1.4}, {"name": "新能源汽车", "change_pct": -1.51}, {"name": "幽门螺杆菌概念", "change_pct": -1.41}, {"name": "国企改革", "change_pct": -1.07}, {"name": "新冠病毒防治", "change_pct": -1.04}, {"name": "光伏胶膜", "change_pct": -0.83}]}, {"code": "002696", "name": "百洋股份", "hot_rank": 77, "hot_rank_chg": 57, "stock_cnt": 5799, "price": "8.51", "change": "-10.04", "market_id": "33", "circulate_market_value": "2844543400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.55}, {"name": "饲料", "change_pct": -1.42}, {"name": "一带一路", "change_pct": -1.0}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "保健品", "change_pct": -0.63}, {"name": "山东国企改革", "change_pct": -1.19}, {"name": "污水处理", "change_pct": -0.59}, {"name": "环保", "change_pct": -1.15}, {"name": "食品", "change_pct": -0.75}, {"name": "预制菜", "change_pct": -1.39}, {"name": "国企改革", "change_pct": -1.07}, {"name": "水产养殖", "change_pct": -1.49}, {"name": "广西概念", "change_pct": -1.45}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 78, "hot_rank_chg": 41, "stock_cnt": 5799, "price": "30.77", "change": "5.09", "market_id": "33", "circulate_market_value": "7501253300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 79, "hot_rank_chg": -48, "stock_cnt": 5799, "price": "238.19", "change": "-0.96", "market_id": "33", "circulate_market_value": "1014836380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 80, "hot_rank_chg": -15, "stock_cnt": 5799, "price": "67.30", "change": "0.42", "market_id": "33", "circulate_market_value": "43947405000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 81, "hot_rank_chg": 1, "stock_cnt": 5799, "price": "6.32", "change": "2.44", "market_id": "33", "circulate_market_value": "12084233400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.12}, {"name": "林业", "change_pct": -1.88}, {"name": "碳中和", "change_pct": -0.88}, {"name": "自贸区", "change_pct": -1.61}]}, {"code": "000595", "name": "新能股份", "hot_rank": 82, "hot_rank_chg": -35, "stock_cnt": 5799, "price": "5.47", "change": "-10.03", "market_id": "33", "circulate_market_value": "6228450300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -1.74}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "高铁轨交", "change_pct": -1.26}, {"name": "航母", "change_pct": -1.1}, {"name": "光伏", "change_pct": -2.12}, {"name": "风电", "change_pct": -1.38}, {"name": "军工", "change_pct": -1.22}, {"name": "储能", "change_pct": -1.22}, {"name": "国企改革", "change_pct": -1.07}, {"name": "宁夏概念", "change_pct": -1.57}]}, {"code": "001309", "name": "德明利", "hot_rank": 83, "hot_rank_chg": -19, "stock_cnt": 5799, "price": "178.35", "change": "-0.10", "market_id": "33", "circulate_market_value": "41479656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 84, "hot_rank_chg": 17, "stock_cnt": 5799, "price": "3.27", "change": "3.81", "market_id": "17", "circulate_market_value": "7234316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.36}, {"name": "云计算数据中心", "change_pct": -1.37}, {"name": "光通信", "change_pct": -1.92}, {"name": "林业", "change_pct": -1.88}, {"name": "军民融合", "change_pct": -1.39}, {"name": "军工", "change_pct": -1.22}, {"name": "人造肉", "change_pct": -0.95}]}, {"code": "002205", "name": "国统股份", "hot_rank": 85, "hot_rank_chg": -30, "stock_cnt": 5799, "price": "12.80", "change": "-9.99", "market_id": "33", "circulate_market_value": "2378793300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.71}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "水利", "change_pct": -1.57}, {"name": "海绵城市", "change_pct": -1.73}, {"name": "新疆概念", "change_pct": -2.27}, {"name": "风电", "change_pct": -1.38}, {"name": "地下管廊", "change_pct": -1.51}, {"name": "PPP", "change_pct": -0.9}, {"name": "国企改革", "change_pct": -1.07}, {"name": "西部大开发", "change_pct": -1.99}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 86, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "103.84", "change": "-1.21", "market_id": "17", "circulate_market_value": "28617097000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 87, "hot_rank_chg": 35, "stock_cnt": 5799, "price": "9.80", "change": "-10.01", "market_id": "17", "circulate_market_value": "3928643400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -1.01}, {"name": "新零售", "change_pct": -2.11}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "物业管理", "change_pct": -2.27}, {"name": "国企改革", "change_pct": -1.07}, {"name": "地摊经济", "change_pct": -1.83}]}, {"code": "001258", "name": "立新能源", "hot_rank": 88, "hot_rank_chg": -35, "stock_cnt": 5799, "price": "9.01", "change": "-9.99", "market_id": "33", "circulate_market_value": "8409227700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -1.25}, {"name": "新疆国企改革", "change_pct": -1.63}, {"name": "新疆概念", "change_pct": -2.27}, {"name": "光伏", "change_pct": -2.12}, {"name": "风电", "change_pct": -1.38}, {"name": "新能源汽车", "change_pct": -1.51}, {"name": "储能", "change_pct": -1.22}, {"name": "国企改革", "change_pct": -1.07}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 89, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "25.81", "change": "-0.58", "market_id": "17", "circulate_market_value": "531732280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002861", "name": "瀛通通讯", "hot_rank": 90, "hot_rank_chg": 229, "stock_cnt": 5799, "price": "14.96", "change": "10.00", "market_id": "33", "circulate_market_value": "2124382900.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "AI眼镜"}, {"code": "605577", "name": "龙版传媒", "hot_rank": 91, "hot_rank_chg": -28, "stock_cnt": 5799, "price": "15.25", "change": "-9.98", "market_id": "17", "circulate_market_value": "6777777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 92, "hot_rank_chg": -35, "stock_cnt": 5799, "price": "4.22", "change": "-4.96", "market_id": "17", "circulate_market_value": "4277833100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.0}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "水利", "change_pct": -1.57}, {"name": "智慧城市", "change_pct": -1.8}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": -1.66}, {"name": "振兴东北", "change_pct": -1.05}, {"name": "大基建", "change_pct": -1.13}, {"name": "中俄贸易", "change_pct": -1.26}, {"name": "新型城镇化", "change_pct": -2.0}, {"name": "黑龙江自贸区", "change_pct": -0.69}, {"name": "旧改", "change_pct": -1.38}]}, {"code": "603258", "name": "电魂网络", "hot_rank": 93, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "16.36", "change": "-10.01", "market_id": "17", "circulate_market_value": "3948344500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002843", "name": "泰嘉股份", "hot_rank": 94, "hot_rank_chg": 504, "stock_cnt": 5799, "price": "15.76", "change": "9.98", "market_id": "33", "circulate_market_value": "3946798300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "服务器电源"}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 95, "hot_rank_chg": 218, "stock_cnt": 5799, "price": "15.21", "change": "9.98", "market_id": "33", "circulate_market_value": "3822038100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻机保税维修"}, {"code": "300274", "name": "阳光电源", "hot_rank": 96, "hot_rank_chg": -30, "stock_cnt": 5799, "price": "73.62", "change": "-2.89", "market_id": "33", "circulate_market_value": "116868780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301052", "name": "果麦文化", "hot_rank": 97, "hot_rank_chg": -64, "stock_cnt": 5799, "price": "45.38", "change": "-5.48", "market_id": "33", "circulate_market_value": "3639562900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 98, "hot_rank_chg": -47, "stock_cnt": 5799, "price": "106.66", "change": "-2.17", "market_id": "33", "circulate_market_value": "92281621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 99, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "3.85", "change": "-8.55", "market_id": "33", "circulate_market_value": "3097215200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": -1.42}, {"name": "养猪", "change_pct": -2.31}, {"name": "强势人气股", "change_pct": -4.22}, {"name": "大农业", "change_pct": -1.09}]}, {"code": "002035", "name": "华帝股份", "hot_rank": 100, "hot_rank_chg": 163, "stock_cnt": 5799, "price": "4.82", "change": "2.99", "market_id": "33", "circulate_market_value": "3769421600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "家电", "change_pct": -0.51}, {"name": "机器视觉", "change_pct": -1.41}, {"name": "无人机", "change_pct": -1.1}, {"name": "智能制造", "change_pct": -1.59}, {"name": "热泵", "change_pct": -0.76}, {"name": "厨卫家电", "change_pct": -1.35}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};