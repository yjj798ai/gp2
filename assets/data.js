const UPDATE_TIME = "2026-07-14 21:54";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 2.53,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.31,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 4.13,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": -0.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续177天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光伏概念",
    "rise": 1.46,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "人工智能",
    "rise": 0.67,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "人工智能ETF",
    "code": "885728"
  },
  {
    "name": "存储芯片",
    "rise": 1.01,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续201天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "ST板块",
    "rise": 0.78,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "2026中报预增",
    "rise": 3.23,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "886110"
  },
  {
    "name": "PET铜箔",
    "rise": 3.58,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "CRO概念",
    "rise": 2.95,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "AI应用",
    "rise": 0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "禽流感",
    "rise": 1.62,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885508"
  },
  {
    "name": "中国AI 50",
    "rise": -1.06,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "人工智能ETF",
    "code": "886102"
  },
  {
    "name": "数据要素",
    "rise": 0.33,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "886041"
  },
  {
    "name": "华为鲲鹏",
    "rise": -0.22,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "金融科技ETF",
    "code": "885980"
  },
  {
    "name": "同花顺漂亮100",
    "rise": 1.03,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "申万深成LOF",
    "code": "885916"
  },
  {
    "name": "猪肉",
    "rise": 0.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "芯片概念",
    "rise": 0.84,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续72天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "机器人概念",
    "rise": 1.19,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  }
];
const THS_EVENTS = [
  {
    "title": "《国民健康“十五五”规划》：全链条支持创新药和医疗器械发展应用 支持创新药临床使用",
    "desc": "",
    "heat": 460690,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "迪哲医药-U",
        "code": "688192",
        "chg": 20.004261
      }
    ]
  },
  {
    "title": "特朗普宣布：美国将重新封锁伊朗，对经过霍尔木兹海峡的货物收20%的费用！",
    "desc": "",
    "heat": 345119,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务"
    ],
    "stocks": [
      {
        "name": "科力股份",
        "code": "920088",
        "chg": 24.205379
      }
    ]
  },
  {
    "title": "国务院批复！《扩大消费“十五五”规划》出炉",
    "desc": "",
    "heat": 228575,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "行云科技",
        "code": "300209",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "习近平将出席2026世界人工智能大会暨人工智能全球治理高级别会议开幕式并发表主旨讲话",
    "desc": "",
    "heat": 205768,
    "direction": "世界人工智能大会",
    "themes": [
      "人工智能",
      "AI手机",
      "AI智能体"
    ],
    "stocks": [
      {
        "name": "药易购",
        "code": "300937",
        "chg": 20.010341
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+7.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+6.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜箔/覆铜板",
    "change": "+6.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铋",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PCB板",
    "change": "+4.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+4.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锡",
    "change": "+4.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+4.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "镨钕",
    "change": "+4.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+4.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锌",
    "change": "+4.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+4.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+4.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 钨",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光伏胶膜",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+4.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤化工",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子树脂",
    "change": "+4.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+4.12%",
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
    "hot_rank": 5,
    "hot_rank_chg": 4,
    "stock_cnt": 5720,
    "price": "7.02",
    "change": "2.78",
    "market_id": "33",
    "circulate_market_value": "248277280000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.18
      },
      {
        "name": "手机产业链",
        "change_pct": 2.04
      },
      {
        "name": "超高清视频",
        "change_pct": 1.16
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.07
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "半导体",
        "change_pct": 0.39
      },
      {
        "name": "人工智能",
        "change_pct": 0.41
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.87
      },
      {
        "name": "VR&AR",
        "change_pct": 0.91
      },
      {
        "name": "OLED",
        "change_pct": 1.28
      },
      {
        "name": "京津冀",
        "change_pct": 0.86
      },
      {
        "name": "物联网",
        "change_pct": 0.41
      },
      {
        "name": "指纹识别",
        "change_pct": 1.24
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.51
      },
      {
        "name": "白马股",
        "change_pct": 1.1
      },
      {
        "name": "智能制造",
        "change_pct": 1.02
      },
      {
        "name": "小米概念股",
        "change_pct": 1.43
      },
      {
        "name": "国产芯片",
        "change_pct": 0.01
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.73
      },
      {
        "name": "全息概念",
        "change_pct": 0.76
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.08
      },
      {
        "name": "MicroLED",
        "change_pct": 1.65
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.26
      },
      {
        "name": "智能手表",
        "change_pct": 1.61
      },
      {
        "name": "MiniLED",
        "change_pct": 2.21
      },
      {
        "name": "传感器",
        "change_pct": 0.85
      },
      {
        "name": "大硅片",
        "change_pct": -1.16
      },
      {
        "name": "AI PC",
        "change_pct": 0.88
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "回购",
        "change_pct": 1.65
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.29
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.94
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": 7,
    "stock_cnt": 5720,
    "price": "4.08",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "10275520300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.79
      },
      {
        "name": "工业大麻",
        "change_pct": 1.32
      },
      {
        "name": "中药",
        "change_pct": 2.16
      },
      {
        "name": "保健品",
        "change_pct": 2.31
      },
      {
        "name": "医药",
        "change_pct": 2.72
      },
      {
        "name": "化学原料药",
        "change_pct": 2.52
      },
      {
        "name": "流感",
        "change_pct": 2.7
      },
      {
        "name": "振兴东北",
        "change_pct": 1.97
      },
      {
        "name": "食品",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 13,
    "hot_rank_chg": -12,
    "stock_cnt": 5720,
    "price": "7.73",
    "change": "-3.38",
    "market_id": "33",
    "circulate_market_value": "12566612900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.79
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "手游",
        "change_pct": -0.7
      },
      {
        "name": "强势人气股",
        "change_pct": 1.67
      },
      {
        "name": "人工智能",
        "change_pct": 0.41
      },
      {
        "name": "游戏",
        "change_pct": -0.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.13
      },
      {
        "name": "快手概念股",
        "change_pct": -0.35
      },
      {
        "name": "元宇宙",
        "change_pct": 0.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.01
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.37
      },
      {
        "name": "web3.0",
        "change_pct": 0.55
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.2
      },
      {
        "name": "数据要素",
        "change_pct": -0.09
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.31
      },
      {
        "name": "AI营销",
        "change_pct": -0.55
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.64
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.29
      },
      {
        "name": "人工智能大模型",
        "change_pct": -0.01
      },
      {
        "name": "人形机器人",
        "change_pct": 0.92
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.63
      },
      {
        "name": "多模态",
        "change_pct": -0.7
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -0.67
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.75
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 25,
    "hot_rank_chg": 19,
    "stock_cnt": 5720,
    "price": "11.38",
    "change": "20.04",
    "market_id": "33",
    "circulate_market_value": "6636938700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "油气开采",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 3.68
      },
      {
        "name": "一带一路",
        "change_pct": 1.72
      },
      {
        "name": "天然气",
        "change_pct": 2.51
      },
      {
        "name": "油气改革",
        "change_pct": 3.66
      },
      {
        "name": "页岩气",
        "change_pct": 3.85
      },
      {
        "name": "深地经济",
        "change_pct": 3.18
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 37,
    "hot_rank_chg": 8,
    "stock_cnt": 5720,
    "price": "5.13",
    "change": "6.65",
    "market_id": "33",
    "circulate_market_value": "103207014000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.18
      },
      {
        "name": "手机产业链",
        "change_pct": 2.04
      },
      {
        "name": "超高清视频",
        "change_pct": 1.16
      },
      {
        "name": "电竞",
        "change_pct": -0.13
      },
      {
        "name": "半导体",
        "change_pct": 0.39
      },
      {
        "name": "OLED",
        "change_pct": 1.28
      },
      {
        "name": "光伏",
        "change_pct": 0.93
      },
      {
        "name": "黑色家电",
        "change_pct": -0.03
      },
      {
        "name": "家电",
        "change_pct": 0.76
      },
      {
        "name": "智能制造",
        "change_pct": 1.02
      },
      {
        "name": "工业互联网",
        "change_pct": 0.67
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.43
      },
      {
        "name": "国产芯片",
        "change_pct": 0.01
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.13
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.73
      },
      {
        "name": "MicroLED",
        "change_pct": 1.65
      },
      {
        "name": "MiniLED",
        "change_pct": 2.21
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.94
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 45,
    "hot_rank_chg": 20,
    "stock_cnt": 5720,
    "price": "9.05",
    "change": "9.56",
    "market_id": "33",
    "circulate_market_value": "4902584100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": 3.68
      },
      {
        "name": "油气管网",
        "change_pct": 2.53
      },
      {
        "name": "海工装备",
        "change_pct": 1.27
      },
      {
        "name": "举牌",
        "change_pct": 1.2
      },
      {
        "name": "天然气",
        "change_pct": 2.51
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.92
      },
      {
        "name": "风电",
        "change_pct": 1.0
      },
      {
        "name": "页岩气",
        "change_pct": 3.85
      },
      {
        "name": "国企改革",
        "change_pct": 1.36
      },
      {
        "name": "深地经济",
        "change_pct": 3.18
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 50,
    "hot_rank_chg": 7,
    "stock_cnt": 5720,
    "price": "6.75",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "4426015700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业零售",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.79
      },
      {
        "name": "新零售",
        "change_pct": 1.95
      },
      {
        "name": "农业种植",
        "change_pct": 1.98
      },
      {
        "name": "冷链",
        "change_pct": 1.59
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "预制菜",
        "change_pct": 1.45
      },
      {
        "name": "国企改革",
        "change_pct": 1.36
      },
      {
        "name": "可降解塑料",
        "change_pct": 2.98
      },
      {
        "name": "免税店概念",
        "change_pct": 1.53
      },
      {
        "name": "湖北国企改革",
        "change_pct": 2.25
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 51,
    "hot_rank_chg": 7,
    "stock_cnt": 5720,
    "price": "11.61",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "6905958800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "具身智能",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.84
      },
      {
        "name": "VR&AR",
        "change_pct": 0.91
      },
      {
        "name": "装修装饰",
        "change_pct": 1.87
      },
      {
        "name": "数字经济",
        "change_pct": 0.05
      },
      {
        "name": "百度概念股",
        "change_pct": -0.45
      },
      {
        "name": "全息概念",
        "change_pct": 0.76
      },
      {
        "name": "NFT",
        "change_pct": 0.4
      },
      {
        "name": "元宇宙",
        "change_pct": 0.16
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.01
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.83
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.64
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.29
      },
      {
        "name": "多模态",
        "change_pct": -0.7
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -0.67
      }
    ]
  },
  {
    "code": "601600",
    "name": "中国铝业",
    "hot_rank": 52,
    "hot_rank_chg": 10,
    "stock_cnt": 5720,
    "price": "8.86",
    "change": "9.25",
    "market_id": "17",
    "circulate_market_value": "116981592000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 3.56
      },
      {
        "name": "稀土磁材",
        "change_pct": 3.6
      },
      {
        "name": "央企改革",
        "change_pct": 0.95
      },
      {
        "name": "有色金属",
        "change_pct": 3.31
      },
      {
        "name": "白马股",
        "change_pct": 1.1
      },
      {
        "name": "中字头",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": 1.36
      }
    ]
  },
  {
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 56,
    "hot_rank_chg": 3,
    "stock_cnt": 5720,
    "price": "8.59",
    "change": "7.51",
    "market_id": "17",
    "circulate_market_value": "4901341300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.79
      },
      {
        "name": "家具家居",
        "change_pct": 1.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "C2M",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 58,
    "hot_rank_chg": 12,
    "stock_cnt": 5720,
    "price": "9.79",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "49345325000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半年度业绩预增",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.95
      },
      {
        "name": "军民融合",
        "change_pct": 0.03
      },
      {
        "name": "有色 · 锑",
        "change_pct": 3.96
      },
      {
        "name": "有色 · 钼",
        "change_pct": 2.96
      },
      {
        "name": "有色 · 锌",
        "change_pct": 4.62
      },
      {
        "name": "有色金属",
        "change_pct": 3.31
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "硫酸",
        "change_pct": 3.65
      },
      {
        "name": "国企改革",
        "change_pct": 1.36
      },
      {
        "name": "白银",
        "change_pct": 4.12
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.86
      },
      {
        "name": "光纤概念",
        "change_pct": 3.07
      },
      {
        "name": "有色 · 铋",
        "change_pct": 5.04
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 59,
    "hot_rank_chg": 24,
    "stock_cnt": 5720,
    "price": "6.47",
    "change": "7.47",
    "market_id": "17",
    "circulate_market_value": "7064506800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 2.72
      },
      {
        "name": "化学原料药",
        "change_pct": 2.52
      },
      {
        "name": "数字经济",
        "change_pct": 0.05
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.66
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 61,
    "hot_rank_chg": -8,
    "stock_cnt": 5720,
    "price": "9.95",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "17801926000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.1
      },
      {
        "name": "纯碱",
        "change_pct": 2.46
      },
      {
        "name": "食品",
        "change_pct": 1.83
      },
      {
        "name": "土壤修复",
        "change_pct": 2.33
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.37
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -3.25
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 62,
    "hot_rank_chg": 6,
    "stock_cnt": 5720,
    "price": "5.10",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "5267972600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.51
      },
      {
        "name": "锂电池",
        "change_pct": 1.85
      },
      {
        "name": "强势人气股",
        "change_pct": 1.67
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.46
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.39
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.71
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 67,
    "hot_rank_chg": -20,
    "stock_cnt": 5720,
    "price": "11.73",
    "change": "0.86",
    "market_id": "17",
    "circulate_market_value": "88890663000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 2.07
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.89
      },
      {
        "name": "光伏",
        "change_pct": 0.93
      },
      {
        "name": "白马股",
        "change_pct": 1.1
      },
      {
        "name": "碳中和",
        "change_pct": 1.31
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.77
      },
      {
        "name": "BIPV概念",
        "change_pct": 0.77
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.26
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.87
      }
    ]
  },
  {
    "code": "300534",
    "name": "陇神戎发",
    "hot_rank": 70,
    "hot_rank_chg": 63,
    "stock_cnt": 5720,
    "price": "10.47",
    "change": "16.33",
    "market_id": "33",
    "circulate_market_value": "3162479100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.16
      },
      {
        "name": "保健品",
        "change_pct": 2.31
      },
      {
        "name": "医药",
        "change_pct": 2.72
      },
      {
        "name": "化学原料药",
        "change_pct": 2.52
      },
      {
        "name": "食品",
        "change_pct": 1.83
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 3.04
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 76,
    "hot_rank_chg": -2,
    "stock_cnt": 5720,
    "price": "5.88",
    "change": "-1.67",
    "market_id": "17",
    "circulate_market_value": "72889004000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.95
      },
      {
        "name": "核电",
        "change_pct": 0.76
      },
      {
        "name": "强势人气股",
        "change_pct": 1.67
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.77
      },
      {
        "name": "水电",
        "change_pct": 1.61
      },
      {
        "name": "火电",
        "change_pct": 2.18
      },
      {
        "name": "光伏",
        "change_pct": 0.93
      },
      {
        "name": "风电",
        "change_pct": 1.0
      },
      {
        "name": "国企改革",
        "change_pct": 1.36
      },
      {
        "name": "算电协同",
        "change_pct": 1.35
      }
    ]
  },
  {
    "code": "603669",
    "name": "灵康药业",
    "hot_rank": 80,
    "hot_rank_chg": 36,
    "stock_cnt": 5720,
    "price": "7.40",
    "change": "8.82",
    "market_id": "17",
    "circulate_market_value": "5271250600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "西藏概念",
        "change_pct": 1.52
      },
      {
        "name": "民营医院",
        "change_pct": 3.04
      },
      {
        "name": "医药",
        "change_pct": 2.72
      },
      {
        "name": "流感",
        "change_pct": 2.7
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 2.25
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 3.04
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 86,
    "hot_rank_chg": -22,
    "stock_cnt": 5720,
    "price": "7.15",
    "change": "-3.12",
    "market_id": "17",
    "circulate_market_value": "32996954000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 1.16
      },
      {
        "name": "国产软件",
        "change_pct": -0.39
      },
      {
        "name": "锂电池",
        "change_pct": 1.85
      },
      {
        "name": "人工智能",
        "change_pct": 0.41
      },
      {
        "name": "养老产业",
        "change_pct": 2.16
      },
      {
        "name": "大飞机",
        "change_pct": -0.43
      },
      {
        "name": "军民融合",
        "change_pct": 0.03
      },
      {
        "name": "物联网",
        "change_pct": 0.41
      },
      {
        "name": "大数据",
        "change_pct": -0.42
      },
      {
        "name": "智慧城市",
        "change_pct": 0.28
      },
      {
        "name": "军工",
        "change_pct": -0.33
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.34
      },
      {
        "name": "机器人",
        "change_pct": 0.99
      },
      {
        "name": "黑色家电",
        "change_pct": -0.03
      },
      {
        "name": "家电",
        "change_pct": 0.76
      },
      {
        "name": "储能",
        "change_pct": 1.05
      },
      {
        "name": "智能制造",
        "change_pct": 1.02
      },
      {
        "name": "工业互联网",
        "change_pct": 0.67
      },
      {
        "name": "数字经济",
        "change_pct": 0.05
      },
      {
        "name": "百度概念股",
        "change_pct": -0.45
      },
      {
        "name": "NFT",
        "change_pct": 0.4
      },
      {
        "name": "跨境支付",
        "change_pct": -0.24
      },
      {
        "name": "华为海思",
        "change_pct": 0.24
      },
      {
        "name": "云游戏",
        "change_pct": -0.74
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.83
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.81
      },
      {
        "name": "服务器",
        "change_pct": -0.66
      },
      {
        "name": "星闪概念",
        "change_pct": -0.73
      },
      {
        "name": "低空经济",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "002600",
    "name": "领益智造",
    "hot_rank": 96,
    "hot_rank_chg": -2,
    "stock_cnt": 5720,
    "price": "12.97",
    "change": "-4.91",
    "market_id": "33",
    "circulate_market_value": "93382614000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.18
      },
      {
        "name": "手机产业链",
        "change_pct": 2.04
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.07
      },
      {
        "name": "无线充电",
        "change_pct": 2.24
      },
      {
        "name": "稀土磁材",
        "change_pct": 3.6
      },
      {
        "name": "5G",
        "change_pct": 1.47
      },
      {
        "name": "VR&AR",
        "change_pct": 0.91
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.34
      },
      {
        "name": "机器人",
        "change_pct": 0.99
      },
      {
        "name": "小米概念股",
        "change_pct": 1.43
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.46
      },
      {
        "name": "激光雷达",
        "change_pct": 2.11
      },
      {
        "name": "减速器",
        "change_pct": 1.07
      },
      {
        "name": "无线耳机",
        "change_pct": 1.23
      },
      {
        "name": "氮化镓",
        "change_pct": 0.53
      },
      {
        "name": "AI PC",
        "change_pct": 0.88
      },
      {
        "name": "华为产业链",
        "change_pct": 0.77
      },
      {
        "name": "回购",
        "change_pct": 1.65
      },
      {
        "name": "人形机器人",
        "change_pct": 0.92
      },
      {
        "name": "AI手机",
        "change_pct": 1.02
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.33
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "25.68", "change": "6.42", "market_id": "33", "circulate_market_value": "85325697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "260.37", "change": "10.00", "market_id": "33", "circulate_market_value": "360956590000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片"}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "102.70", "change": "3.69", "market_id": "17", "circulate_market_value": "183772880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 4, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "77.87", "change": "5.84", "market_id": "33", "circulate_market_value": "118164005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5720, "price": "7.02", "change": "2.78", "market_id": "33", "circulate_market_value": "248277280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "超高清视频", "change_pct": 1.16}, {"name": "苹果产业链", "change_pct": 2.07}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 0.39}, {"name": "人工智能", "change_pct": 0.41}, {"name": "互联网医疗", "change_pct": 1.87}, {"name": "VR&AR", "change_pct": 0.91}, {"name": "OLED", "change_pct": 1.28}, {"name": "京津冀", "change_pct": 0.86}, {"name": "物联网", "change_pct": 0.41}, {"name": "指纹识别", "change_pct": 1.24}, {"name": "汽车零部件", "change_pct": 1.51}, {"name": "白马股", "change_pct": 1.1}, {"name": "智能制造", "change_pct": 1.02}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "国产芯片", "change_pct": 0.01}, {"name": "液晶面板/LCD", "change_pct": 1.73}, {"name": "全息概念", "change_pct": 0.76}, {"name": "理想汽车概念股", "change_pct": 1.08}, {"name": "MicroLED", "change_pct": 1.65}, {"name": "钙钛矿电池", "change_pct": 0.26}, {"name": "智能手表", "change_pct": 1.61}, {"name": "MiniLED", "change_pct": 2.21}, {"name": "传感器", "change_pct": 0.85}, {"name": "大硅片", "change_pct": -1.16}, {"name": "AI PC", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "回购", "change_pct": 1.65}, {"name": "智能眼镜/MR头显", "change_pct": 1.29}, {"name": "玻璃基板封装", "change_pct": 2.94}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "4.08", "change": "9.97", "market_id": "17", "circulate_market_value": "10275520300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "工业大麻", "change_pct": 1.32}, {"name": "中药", "change_pct": 2.16}, {"name": "保健品", "change_pct": 2.31}, {"name": "医药", "change_pct": 2.72}, {"name": "化学原料药", "change_pct": 2.52}, {"name": "流感", "change_pct": 2.7}, {"name": "振兴东北", "change_pct": 1.97}, {"name": "食品", "change_pct": 1.83}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5720, "price": "36.98", "change": "-3.70", "market_id": "33", "circulate_market_value": "105765487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 8, "hot_rank_chg": 10, "stock_cnt": 5720, "price": "47.35", "change": "3.81", "market_id": "33", "circulate_market_value": "69875531000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "59.41", "change": "10.00", "market_id": "33", "circulate_market_value": "68738149000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "600667", "name": "太极实业", "hot_rank": 10, "hot_rank_chg": 15, "stock_cnt": 5720, "price": "22.63", "change": "-0.44", "market_id": "17", "circulate_market_value": "47331599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 11, "hot_rank_chg": -4, "stock_cnt": 5720, "price": "32.37", "change": "9.99", "market_id": "17", "circulate_market_value": "5921552000.00", "change_type": "1", "change_section": "10", "change_days": "9", "change_reason": "拟收购存储公司"}, {"code": "603986", "name": "兆易创新", "hot_rank": 12, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "583.99", "change": "6.03", "market_id": "17", "circulate_market_value": "390392600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 13, "hot_rank_chg": -12, "stock_cnt": 5720, "price": "7.73", "change": "-3.38", "market_id": "33", "circulate_market_value": "12566612900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "电竞", "change_pct": -0.13}, {"name": "手游", "change_pct": -0.7}, {"name": "强势人气股", "change_pct": 1.67}, {"name": "人工智能", "change_pct": 0.41}, {"name": "游戏", "change_pct": -0.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.05}, {"name": "腾讯概念股", "change_pct": 0.13}, {"name": "快手概念股", "change_pct": -0.35}, {"name": "元宇宙", "change_pct": 0.16}, {"name": "虚拟数字人", "change_pct": 0.01}, {"name": "东数西算/算力", "change_pct": -0.37}, {"name": "web3.0", "change_pct": 0.55}, {"name": "AIGC概念", "change_pct": -0.2}, {"name": "数据要素", "change_pct": -0.09}, {"name": "字节跳动概念股", "change_pct": -0.31}, {"name": "AI营销", "change_pct": -0.55}, {"name": "ChatGPT", "change_pct": -0.64}, {"name": "智能眼镜/MR头显", "change_pct": 1.29}, {"name": "人工智能大模型", "change_pct": -0.01}, {"name": "人形机器人", "change_pct": 0.92}, {"name": "短剧/互动影游", "change_pct": -0.63}, {"name": "多模态", "change_pct": -0.7}, {"name": "Sora/AI视频", "change_pct": -0.67}, {"name": "IP经济/谷子经济", "change_pct": 0.75}, {"name": "小红书概念股", "change_pct": -0.03}]}, {"code": "000021", "name": "深科技", "hot_rank": 14, "hot_rank_chg": 12, "stock_cnt": 5720, "price": "52.51", "change": "0.75", "market_id": "33", "circulate_market_value": "82658910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 15, "hot_rank_chg": 5, "stock_cnt": 5720, "price": "23.54", "change": "10.00", "market_id": "17", "circulate_market_value": "9862496600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "磷化铟衬底"}, {"code": "600487", "name": "亨通光电", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5720, "price": "74.38", "change": "6.24", "market_id": "17", "circulate_market_value": "182502210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 17, "hot_rank_chg": -9, "stock_cnt": 5720, "price": "736.00", "change": "2.23", "market_id": "33", "circulate_market_value": "121490055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5720, "price": "113.00", "change": "4.49", "market_id": "17", "circulate_market_value": "40761744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5720, "price": "38.40", "change": "-0.26", "market_id": "33", "circulate_market_value": "30044338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 20, "hot_rank_chg": -9, "stock_cnt": 5720, "price": "46.02", "change": "7.00", "market_id": "17", "circulate_market_value": "29008846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "147.90", "change": "10.00", "market_id": "17", "circulate_market_value": "354146780000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "002463", "name": "沪电股份", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5720, "price": "137.13", "change": "10.00", "market_id": "33", "circulate_market_value": "263675000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 23, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "84.95", "change": "-0.63", "market_id": "33", "circulate_market_value": "124607362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5720, "price": "42.85", "change": "3.70", "market_id": "17", "circulate_market_value": "146244890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 25, "hot_rank_chg": 19, "stock_cnt": 5720, "price": "11.38", "change": "20.04", "market_id": "33", "circulate_market_value": "6636938700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油气开采", "xgb_concepts": [{"name": "油服", "change_pct": 3.68}, {"name": "一带一路", "change_pct": 1.72}, {"name": "天然气", "change_pct": 2.51}, {"name": "油气改革", "change_pct": 3.66}, {"name": "页岩气", "change_pct": 3.85}, {"name": "深地经济", "change_pct": 3.18}]}, {"code": "603538", "name": "美诺华", "hot_rank": 26, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "35.45", "change": "7.42", "market_id": "17", "circulate_market_value": "11943812300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 27, "hot_rank_chg": 4, "stock_cnt": 5720, "price": "82.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "97117833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 28, "hot_rank_chg": -1, "stock_cnt": 5720, "price": "568.82", "change": "10.99", "market_id": "33", "circulate_market_value": "713438590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 29, "hot_rank_chg": -7, "stock_cnt": 5720, "price": "400.18", "change": "4.79", "market_id": "17", "circulate_market_value": "162608470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 30, "hot_rank_chg": -9, "stock_cnt": 5720, "price": "28.62", "change": "-1.28", "market_id": "33", "circulate_market_value": "21677220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 31, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "101.90", "change": "-3.99", "market_id": "17", "circulate_market_value": "149085240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 32, "hot_rank_chg": -3, "stock_cnt": 5720, "price": "1184.05", "change": "6.86", "market_id": "33", "circulate_market_value": "1314224190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 33, "hot_rank_chg": 1, "stock_cnt": 5720, "price": "36.08", "change": "-2.46", "market_id": "33", "circulate_market_value": "38921926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 34, "hot_rank_chg": 4, "stock_cnt": 5720, "price": "29.06", "change": "6.21", "market_id": "17", "circulate_market_value": "598688110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "52.63", "change": "-2.54", "market_id": "17", "circulate_market_value": "44554102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 36, "hot_rank_chg": -19, "stock_cnt": 5720, "price": "73.40", "change": "0.80", "market_id": "33", "circulate_market_value": "284903080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 37, "hot_rank_chg": 8, "stock_cnt": 5720, "price": "5.13", "change": "6.65", "market_id": "33", "circulate_market_value": "103207014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "超高清视频", "change_pct": 1.16}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 0.39}, {"name": "OLED", "change_pct": 1.28}, {"name": "光伏", "change_pct": 0.93}, {"name": "黑色家电", "change_pct": -0.03}, {"name": "家电", "change_pct": 0.76}, {"name": "智能制造", "change_pct": 1.02}, {"name": "工业互联网", "change_pct": 0.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "国产芯片", "change_pct": 0.01}, {"name": "腾讯概念股", "change_pct": 0.13}, {"name": "液晶面板/LCD", "change_pct": 1.73}, {"name": "MicroLED", "change_pct": 1.65}, {"name": "MiniLED", "change_pct": 2.21}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "玻璃基板封装", "change_pct": 2.94}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 38, "hot_rank_chg": -5, "stock_cnt": 5720, "price": "54.52", "change": "8.76", "market_id": "17", "circulate_market_value": "216530920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5720, "price": "127.51", "change": "6.05", "market_id": "17", "circulate_market_value": "315367960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 41, "hot_rank_chg": -5, "stock_cnt": 5720, "price": "159.84", "change": "3.63", "market_id": "33", "circulate_market_value": "160636910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 42, "hot_rank_chg": -2, "stock_cnt": 5720, "price": "232.95", "change": "7.85", "market_id": "33", "circulate_market_value": "181817090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 43, "hot_rank_chg": -1, "stock_cnt": 5720, "price": "95.68", "change": "10.00", "market_id": "33", "circulate_market_value": "69302499000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "000066", "name": "中国长城", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "16.83", "change": "-6.76", "market_id": "33", "circulate_market_value": "54286677000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 45, "hot_rank_chg": 20, "stock_cnt": 5720, "price": "9.05", "change": "9.56", "market_id": "33", "circulate_market_value": "4902584100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 3.68}, {"name": "油气管网", "change_pct": 2.53}, {"name": "海工装备", "change_pct": 1.27}, {"name": "举牌", "change_pct": 1.2}, {"name": "天然气", "change_pct": 2.51}, {"name": "山东国企改革", "change_pct": 1.92}, {"name": "风电", "change_pct": 1.0}, {"name": "页岩气", "change_pct": 3.85}, {"name": "国企改革", "change_pct": 1.36}, {"name": "深地经济", "change_pct": 3.18}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 46, "hot_rank_chg": 3, "stock_cnt": 5720, "price": "39.91", "change": "-0.33", "market_id": "33", "circulate_market_value": "160742360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 47, "hot_rank_chg": -4, "stock_cnt": 5720, "price": "30.59", "change": "-7.30", "market_id": "33", "circulate_market_value": "35059367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 49, "hot_rank_chg": 3, "stock_cnt": 5720, "price": "65.60", "change": "4.00", "market_id": "17", "circulate_market_value": "1301772450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000759", "name": "中百集团", "hot_rank": 50, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "6.75", "change": "9.94", "market_id": "33", "circulate_market_value": "4426015700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业零售", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "新零售", "change_pct": 1.95}, {"name": "农业种植", "change_pct": 1.98}, {"name": "冷链", "change_pct": 1.59}, {"name": "大农业", "change_pct": 1.81}, {"name": "预制菜", "change_pct": 1.45}, {"name": "国企改革", "change_pct": 1.36}, {"name": "可降解塑料", "change_pct": 2.98}, {"name": "免税店概念", "change_pct": 1.53}, {"name": "湖北国企改革", "change_pct": 2.25}]}, {"code": "603466", "name": "风语筑", "hot_rank": 51, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "11.61", "change": "10.05", "market_id": "17", "circulate_market_value": "6905958800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "具身智能", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.84}, {"name": "VR&AR", "change_pct": 0.91}, {"name": "装修装饰", "change_pct": 1.87}, {"name": "数字经济", "change_pct": 0.05}, {"name": "百度概念股", "change_pct": -0.45}, {"name": "全息概念", "change_pct": 0.76}, {"name": "NFT", "change_pct": 0.4}, {"name": "元宇宙", "change_pct": 0.16}, {"name": "虚拟数字人", "change_pct": 0.01}, {"name": "网红/MCN", "change_pct": 0.83}, {"name": "ChatGPT", "change_pct": -0.64}, {"name": "智能眼镜/MR头显", "change_pct": 1.29}, {"name": "多模态", "change_pct": -0.7}, {"name": "Sora/AI视频", "change_pct": -0.67}]}, {"code": "601600", "name": "中国铝业", "hot_rank": 52, "hot_rank_chg": 10, "stock_cnt": 5720, "price": "8.86", "change": "9.25", "market_id": "17", "circulate_market_value": "116981592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 3.56}, {"name": "稀土磁材", "change_pct": 3.6}, {"name": "央企改革", "change_pct": 0.95}, {"name": "有色金属", "change_pct": 3.31}, {"name": "白马股", "change_pct": 1.1}, {"name": "中字头", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 1.36}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 53, "hot_rank_chg": -5, "stock_cnt": 5720, "price": "48.60", "change": "8.14", "market_id": "17", "circulate_market_value": "71052947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300759", "name": "康龙化成", "hot_rank": 54, "hot_rank_chg": 15, "stock_cnt": 5720, "price": "36.93", "change": "8.36", "market_id": "33", "circulate_market_value": "52441780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001388", "name": "信通电子", "hot_rank": 55, "hot_rank_chg": 12, "stock_cnt": 5720, "price": "32.44", "change": "10.00", "market_id": "33", "circulate_market_value": "2742463800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高送转"}, {"code": "603313", "name": "梦百合", "hot_rank": 56, "hot_rank_chg": 3, "stock_cnt": 5720, "price": "8.59", "change": "7.51", "market_id": "17", "circulate_market_value": "4901341300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "家具家居", "change_pct": 1.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": 1.42}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 57, "hot_rank_chg": 20, "stock_cnt": 5720, "price": "179.03", "change": "-19.28", "market_id": "33", "circulate_market_value": "5519740700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 58, "hot_rank_chg": 12, "stock_cnt": 5720, "price": "9.79", "change": "10.00", "market_id": "17", "circulate_market_value": "49345325000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年度业绩预增", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.95}, {"name": "军民融合", "change_pct": 0.03}, {"name": "有色 · 锑", "change_pct": 3.96}, {"name": "有色 · 钼", "change_pct": 2.96}, {"name": "有色 · 锌", "change_pct": 4.62}, {"name": "有色金属", "change_pct": 3.31}, {"name": "军工", "change_pct": -0.33}, {"name": "硫酸", "change_pct": 3.65}, {"name": "国企改革", "change_pct": 1.36}, {"name": "白银", "change_pct": 4.12}, {"name": "新冠病毒防治", "change_pct": 1.86}, {"name": "光纤概念", "change_pct": 3.07}, {"name": "有色 · 铋", "change_pct": 5.04}]}, {"code": "600488", "name": "津药药业", "hot_rank": 59, "hot_rank_chg": 24, "stock_cnt": 5720, "price": "6.47", "change": "7.47", "market_id": "17", "circulate_market_value": "7064506800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 2.72}, {"name": "化学原料药", "change_pct": 2.52}, {"name": "数字经济", "change_pct": 0.05}, {"name": "辅助生殖", "change_pct": 2.66}, {"name": "新冠病毒防治", "change_pct": 1.86}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 61, "hot_rank_chg": -8, "stock_cnt": 5720, "price": "9.95", "change": "-9.96", "market_id": "17", "circulate_market_value": "17801926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.1}, {"name": "纯碱", "change_pct": 2.46}, {"name": "食品", "change_pct": 1.83}, {"name": "土壤修复", "change_pct": 2.33}, {"name": "东数西算/算力", "change_pct": -0.37}, {"name": "OpenClaw概念", "change_pct": -3.25}, {"name": "DeepSeek概念股", "change_pct": -0.86}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 62, "hot_rank_chg": 6, "stock_cnt": 5720, "price": "5.10", "change": "9.91", "market_id": "33", "circulate_market_value": "5267972600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.51}, {"name": "锂电池", "change_pct": 1.85}, {"name": "强势人气股", "change_pct": 1.67}, {"name": "铜箔/覆铜板", "change_pct": 6.46}, {"name": "粤港澳大湾区", "change_pct": 1.39}, {"name": "新能源汽车", "change_pct": 1.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.71}]}, {"code": "300475", "name": "香农芯创", "hot_rank": 63, "hot_rank_chg": 28, "stock_cnt": 5720, "price": "230.89", "change": "6.50", "market_id": "33", "circulate_market_value": "103908758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 64, "hot_rank_chg": 23, "stock_cnt": 5720, "price": "14.97", "change": "-4.83", "market_id": "17", "circulate_market_value": "74685610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 65, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "39.08", "change": "15.08", "market_id": "33", "circulate_market_value": "54883675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 66, "hot_rank_chg": -12, "stock_cnt": 5720, "price": "18.21", "change": "8.01", "market_id": "17", "circulate_market_value": "317961940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601012", "name": "隆基绿能", "hot_rank": 67, "hot_rank_chg": -20, "stock_cnt": 5720, "price": "11.73", "change": "0.86", "market_id": "17", "circulate_market_value": "88890663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 2.07}, {"name": "氢能源/燃料电池", "change_pct": 0.89}, {"name": "光伏", "change_pct": 0.93}, {"name": "白马股", "change_pct": 1.1}, {"name": "碳中和", "change_pct": 1.31}, {"name": "颗粒硅", "change_pct": -0.77}, {"name": "BIPV概念", "change_pct": 0.77}, {"name": "钙钛矿电池", "change_pct": 0.26}, {"name": "异质结电池HJT", "change_pct": 0.87}]}, {"code": "600360", "name": "华微电子", "hot_rank": 68, "hot_rank_chg": 14, "stock_cnt": 5720, "price": "15.90", "change": "-6.58", "market_id": "17", "circulate_market_value": "15268695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 69, "hot_rank_chg": -13, "stock_cnt": 5720, "price": "89.70", "change": "3.93", "market_id": "33", "circulate_market_value": "74020461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300534", "name": "陇神戎发", "hot_rank": 70, "hot_rank_chg": 63, "stock_cnt": 5720, "price": "10.47", "change": "16.33", "market_id": "33", "circulate_market_value": "3162479100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.16}, {"name": "保健品", "change_pct": 2.31}, {"name": "医药", "change_pct": 2.72}, {"name": "化学原料药", "change_pct": 2.52}, {"name": "食品", "change_pct": 1.83}, {"name": "阿尔茨海默病", "change_pct": 3.04}]}, {"code": "002379", "name": "宏桥控股", "hot_rank": 71, "hot_rank_chg": -5, "stock_cnt": 5720, "price": "17.49", "change": "10.00", "market_id": "33", "circulate_market_value": "19875177000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报预增"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 72, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "15.23", "change": "-0.46", "market_id": "17", "circulate_market_value": "19437375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 73, "hot_rank_chg": 3, "stock_cnt": 5720, "price": "19.31", "change": "-9.60", "market_id": "17", "circulate_market_value": "63709470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 74, "hot_rank_chg": -14, "stock_cnt": 5720, "price": "18.79", "change": "-10.01", "market_id": "33", "circulate_market_value": "15089728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 75, "hot_rank_chg": -14, "stock_cnt": 5720, "price": "538.51", "change": "3.15", "market_id": "33", "circulate_market_value": "151780060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 76, "hot_rank_chg": -2, "stock_cnt": 5720, "price": "5.88", "change": "-1.67", "market_id": "17", "circulate_market_value": "72889004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.95}, {"name": "核电", "change_pct": 0.76}, {"name": "强势人气股", "change_pct": 1.67}, {"name": "电力体制改革", "change_pct": 1.77}, {"name": "水电", "change_pct": 1.61}, {"name": "火电", "change_pct": 2.18}, {"name": "光伏", "change_pct": 0.93}, {"name": "风电", "change_pct": 1.0}, {"name": "国企改革", "change_pct": 1.36}, {"name": "算电协同", "change_pct": 1.35}]}, {"code": "002245", "name": "蔚蓝锂芯", "hot_rank": 77, "hot_rank_chg": -6, "stock_cnt": 5720, "price": "20.89", "change": "10.01", "market_id": "33", "circulate_market_value": "33561869000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增"}, {"code": "300065", "name": "海兰信", "hot_rank": 78, "hot_rank_chg": 10, "stock_cnt": 5720, "price": "21.08", "change": "-17.79", "market_id": "33", "circulate_market_value": "13847349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300821", "name": "东岳硅材", "hot_rank": 79, "hot_rank_chg": 53, "stock_cnt": 5720, "price": "23.23", "change": "5.98", "market_id": "33", "circulate_market_value": "27871139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603669", "name": "灵康药业", "hot_rank": 80, "hot_rank_chg": 36, "stock_cnt": 5720, "price": "7.40", "change": "8.82", "market_id": "17", "circulate_market_value": "5271250600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "西藏概念", "change_pct": 1.52}, {"name": "民营医院", "change_pct": 3.04}, {"name": "医药", "change_pct": 2.72}, {"name": "流感", "change_pct": 2.7}, {"name": "幽门螺杆菌概念", "change_pct": 2.25}, {"name": "阿尔茨海默病", "change_pct": 3.04}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 81, "hot_rank_chg": 38, "stock_cnt": 5720, "price": "33.75", "change": "10.01", "market_id": "17", "circulate_market_value": "4410220500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "控制权拟变更"}, {"code": "002202", "name": "金风科技", "hot_rank": 82, "hot_rank_chg": 2, "stock_cnt": 5720, "price": "19.17", "change": "-5.43", "market_id": "33", "circulate_market_value": "64478392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 83, "hot_rank_chg": -20, "stock_cnt": 5720, "price": "187.49", "change": "-0.81", "market_id": "33", "circulate_market_value": "59719830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 84, "hot_rank_chg": -6, "stock_cnt": 5720, "price": "48.50", "change": "8.26", "market_id": "33", "circulate_market_value": "62983209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 85, "hot_rank_chg": 26, "stock_cnt": 5720, "price": "41.80", "change": "-0.31", "market_id": "17", "circulate_market_value": "69558203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600839", "name": "四川长虹", "hot_rank": 86, "hot_rank_chg": -22, "stock_cnt": 5720, "price": "7.15", "change": "-3.12", "market_id": "17", "circulate_market_value": "32996954000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 1.16}, {"name": "国产软件", "change_pct": -0.39}, {"name": "锂电池", "change_pct": 1.85}, {"name": "人工智能", "change_pct": 0.41}, {"name": "养老产业", "change_pct": 2.16}, {"name": "大飞机", "change_pct": -0.43}, {"name": "军民融合", "change_pct": 0.03}, {"name": "物联网", "change_pct": 0.41}, {"name": "大数据", "change_pct": -0.42}, {"name": "智慧城市", "change_pct": 0.28}, {"name": "军工", "change_pct": -0.33}, {"name": "新能源汽车", "change_pct": 1.34}, {"name": "机器人", "change_pct": 0.99}, {"name": "黑色家电", "change_pct": -0.03}, {"name": "家电", "change_pct": 0.76}, {"name": "储能", "change_pct": 1.05}, {"name": "智能制造", "change_pct": 1.02}, {"name": "工业互联网", "change_pct": 0.67}, {"name": "数字经济", "change_pct": 0.05}, {"name": "百度概念股", "change_pct": -0.45}, {"name": "NFT", "change_pct": 0.4}, {"name": "跨境支付", "change_pct": -0.24}, {"name": "华为海思", "change_pct": 0.24}, {"name": "云游戏", "change_pct": -0.74}, {"name": "网红/MCN", "change_pct": 0.83}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "毫米波雷达", "change_pct": 1.81}, {"name": "服务器", "change_pct": -0.66}, {"name": "星闪概念", "change_pct": -0.73}, {"name": "低空经济", "change_pct": -0.12}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 87, "hot_rank_chg": -2, "stock_cnt": 5720, "price": "134.21", "change": "12.07", "market_id": "33", "circulate_market_value": "111262176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002536", "name": "飞龙股份", "hot_rank": 88, "hot_rank_chg": -8, "stock_cnt": 5720, "price": "54.07", "change": "10.01", "market_id": "33", "circulate_market_value": "29435766000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "液冷服务器"}, {"code": "002821", "name": "凯莱英", "hot_rank": 89, "hot_rank_chg": -8, "stock_cnt": 5720, "price": "177.95", "change": "7.63", "market_id": "33", "circulate_market_value": "56417955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 90, "hot_rank_chg": -17, "stock_cnt": 5720, "price": "43.85", "change": "9.62", "market_id": "17", "circulate_market_value": "90999599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 91, "hot_rank_chg": 11, "stock_cnt": 5720, "price": "20.86", "change": "4.98", "market_id": "33", "circulate_market_value": "24541141000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 92, "hot_rank_chg": 7, "stock_cnt": 5720, "price": "74.79", "change": "7.83", "market_id": "33", "circulate_market_value": "108664286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 93, "hot_rank_chg": 24, "stock_cnt": 5720, "price": "30.00", "change": "-9.99", "market_id": "33", "circulate_market_value": "12917001900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688072", "name": "拓荆科技", "hot_rank": 94, "hot_rank_chg": -53, "stock_cnt": 5720, "price": "850.01", "change": "0.59", "market_id": "17", "circulate_market_value": "240291890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 95, "hot_rank_chg": -2, "stock_cnt": 5720, "price": "13.38", "change": "2.45", "market_id": "33", "circulate_market_value": "14214963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 96, "hot_rank_chg": -2, "stock_cnt": 5720, "price": "12.97", "change": "-4.91", "market_id": "33", "circulate_market_value": "93382614000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "苹果产业链", "change_pct": 2.07}, {"name": "无线充电", "change_pct": 2.24}, {"name": "稀土磁材", "change_pct": 3.6}, {"name": "5G", "change_pct": 1.47}, {"name": "VR&AR", "change_pct": 0.91}, {"name": "新能源汽车", "change_pct": 1.34}, {"name": "机器人", "change_pct": 0.99}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "第三代半导体", "change_pct": 0.46}, {"name": "激光雷达", "change_pct": 2.11}, {"name": "减速器", "change_pct": 1.07}, {"name": "无线耳机", "change_pct": 1.23}, {"name": "氮化镓", "change_pct": 0.53}, {"name": "AI PC", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "回购", "change_pct": 1.65}, {"name": "人形机器人", "change_pct": 0.92}, {"name": "AI手机", "change_pct": 1.02}, {"name": "液冷服务器", "change_pct": 1.33}]}, {"code": "003020", "name": "立方制药", "hot_rank": 97, "hot_rank_chg": 9, "stock_cnt": 5720, "price": "20.80", "change": "0.92", "market_id": "33", "circulate_market_value": "3505803700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600288", "name": "大恒科技", "hot_rank": 98, "hot_rank_chg": 17, "stock_cnt": 5720, "price": "17.18", "change": "3.25", "market_id": "17", "circulate_market_value": "7504224000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 100, "hot_rank_chg": 26, "stock_cnt": 5720, "price": "54.82", "change": "-1.67", "market_id": "17", "circulate_market_value": "349696900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002718", "name": "友邦吊顶", "price": 109.78, "change_pct": 10.0, "reason": "集成吊顶行业的开创者，公司实控人将变更为施其明", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.26, "first_limit_up": 1783996731, "break_limit_up_times": 1}, {"code": "601969", "name": "海南矿业", "price": 8.57, "change_pct": 10.01, "reason": "1、公司上半年净利润预计同比增长68%至96%，公司锂资源一体化产业链在成本持续优化的前提下不断提升产品品质，并紧抓锂盐价格回暖的市场机遇扩大产销规模，贡献了重要的利润增量。同时，受国际油价上涨影响，油气业务整体收益同比提升。此外，子公司洛克石油收到八角场致密气项目专项财政补助1.03亿元，进一步增厚了当期收益；\n2、海南本地股，主营铁矿石采选和销售，控股子公司洛克石油从事油气勘探开发业务", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.89, "first_limit_up": 1784008843, "break_limit_up_times": 0}, {"code": "603466", "name": "风语筑", "price": 11.61, "change_pct": 10.05, "reason": "公司是中国数字展示行业龙头，依托具身智能研究院，联合宇树科技、松延动力等伙伴，将人形机器人导入数千座展馆，实现导览、演绎常态化运营，并打造具身智能展示中心", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.18, "first_limit_up": 1784007066, "break_limit_up_times": 0}, {"code": "603516", "name": "淳中科技", "price": 109.04, "change_pct": 10.0, "reason": "1、公司预计上半年净利润1.25亿元—1.35亿元，同比扭亏，报告期内，公司传统专业视听业务新签合同下滑，专业芯片和人工智能等新业务尚未放量，营业收入同比下降9%左右。报告期末，公司持有沐曦股份股票数量为85.43万股，该笔投资对净利润影响额为1.58亿元；\n2、公司与英伟达合作，对接的产品包括液冷测试平台、基于AI的检测平台、各种测试板卡等", "plates": ["液冷服务器", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1783992642, "break_limit_up_times": 1}, {"code": "600829", "name": "人民同泰", "price": 8.99, "change_pct": 10.04, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.99, "first_limit_up": 1783993201, "break_limit_up_times": 2}, {"code": "600759", "name": "ST洲际", "price": 2.95, "change_pct": 10.07, "reason": "海南本地股，主营石油的勘探、开发和销售，油气行业的技术服务和物业租赁业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 10.52, "first_limit_up": 1784011322, "break_limit_up_times": 1}, {"code": "002357", "name": "富临运业", "price": 9.25, "change_pct": 9.99, "reason": "四川省客运业龙头，上半年净利润预计增长134.56%~191.03%，报告期内，公司完成股权转让交割，确认股权处置投资收益2.08亿元，是归母净利润大幅增长的核心驱动因素", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.16, "first_limit_up": 1784011989, "break_limit_up_times": 0}, {"code": "000554", "name": "泰山石油", "price": 6.44, "change_pct": 10.09, "reason": "公司从事成品油批发零售业务，是山东省泰安市成品油最大经销商，市场占有率33%，控股股东为中国石化", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 11.09, "first_limit_up": 1783992729, "break_limit_up_times": 1}, {"code": "600180", "name": "*ST瑞茂", "price": 1.57, "change_pct": 9.79, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1784009001, "break_limit_up_times": 4}, {"code": "600227", "name": "赤天化", "price": 2.65, "change_pct": 9.96, "reason": "贵州最大的甲醇生产企业；全资子公司桐梓化工拥有甲醇产能30万吨/年，产品主要是外销，采用世界最先进的德士古技术，甲醇质量可以与天然气装置质量并驾齐驱", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 10.99, "first_limit_up": 1784005776, "break_limit_up_times": 0}, {"code": "002162", "name": "悦心健康", "price": 3.82, "change_pct": 10.09, "reason": "公司上半年净利润预计增长154.52%—239.37%，变动原因如下：1、康养业务：公司于2026年1月并购控股浙江康芮嘉养健康管理有限公司以及公司受托运营的上海奉贤区金海悦心颐养院于本报告期纳入合并报表，带动康养业务收入同比增长约103%；2、城市更新业务：营业收入同比增长约39%，增长主要来源于公司运营的上海陆家嘴世纪大道亚朵见野酒店的营业收入。该酒店原为关联方上海胜康斯米克房产投资有限公司持有的陆家嘴核心商务区物业，由公司承租并实施改造后，于2025年9月投入运营。上年同期无此项收入；3、瓷砖业务：", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.34, "first_limit_up": 1783995123, "break_limit_up_times": 2}, {"code": "002379", "name": "宏桥控股", "price": 17.49, "change_pct": 10.0, "reason": "大型综合性铝加工企业；公司预计上半年净利润同比增长69.72%至81.04%，主要因电解铝市场销售价格同比大幅上涨，相关业务毛利显著提升，且借款规模缩减使财务利息支出大幅减少", "plates": ["业绩增长", "有色金属"], "limit_up_days": 2, "turnover_ratio": 9.74, "first_limit_up": 1784008491, "break_limit_up_times": 5}, {"code": "603730", "name": "岱美股份", "price": 11.41, "change_pct": 10.03, "reason": "公司拟以1亿元在上海设立全资子公司岱美科技，经营范围涵盖智能机器人、工业机器人及服务机器人相关研发销售", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.1, "first_limit_up": 1784006623, "break_limit_up_times": 6}, {"code": "002628", "name": "成都路桥", "price": 5.12, "change_pct": 10.11, "reason": "成都优质基建企业；2025年7月，公司与深圳市优必选、中国民航正式签署战略合作框架协议，就具身智能机器人及人工智能技术在民航和泛交通行业落地应用进行深入合作探索，全资子公司四川成路智汇科技和优必选等联合成立锦程智行(成都)，锦程智行已获取订单并投入机场使用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.67, "first_limit_up": 1784005287, "break_limit_up_times": 0}, {"code": "002128", "name": "电投能源", "price": 26.08, "change_pct": 10.0, "reason": "蒙东及大东北地区褐煤龙头企业", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.22, "first_limit_up": 1784009406, "break_limit_up_times": 0}, {"code": "600183", "name": "生益科技", "price": 147.9, "change_pct": 10.0, "reason": "1、中国大陆最大的覆铜板制造商；预计上半年净利润同比增长117%-131%，在报告期内，覆铜板板块，面对原材料价格上涨、高端产品市场需求持续高速增长等影响，公司积极调整优化产品销售结构，并推动扩产产能及时释放，从而带动覆铜板销量上升，覆铜板产品营业收入及毛利增加，推动盈利水平提升；\n1、公司与银河航天签署战略合作协议，切入商业航天赛道", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.38, "first_limit_up": 1783993986, "break_limit_up_times": 1}, {"code": "603580", "name": "艾艾精工", "price": 33.75, "change_pct": 10.01, "reason": "公司实控人拟转让29.99%股份，控股股东变更为上海誉升", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.47, "first_limit_up": 1783992300, "break_limit_up_times": 0}, {"code": "601101", "name": "昊华能源", "price": 11.83, "change_pct": 10.05, "reason": "京能集团煤炭业务的上市平台，上半年净利润预计增长65.68%，报告期内，煤炭、甲醇产品销售价格同比上涨；公司实现增产，商品煤销量较上年同期增加39万吨", "plates": ["煤炭", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.42, "first_limit_up": 1784007728, "break_limit_up_times": 0}, {"code": "600664", "name": "哈药股份", "price": 4.08, "change_pct": 9.97, "reason": "全国医药行业首家上市公司；预计上半年净利润同比增长46.40%至68.36%，主要是受医药工业板块业绩提升影响", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 17.48, "first_limit_up": 1783993321, "break_limit_up_times": 1}, {"code": "600354", "name": "敦煌种业", "price": 5.41, "change_pct": 9.96, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.06, "first_limit_up": 1783992300, "break_limit_up_times": 3}, {"code": "600403", "name": "大有能源", "price": 5.12, "change_pct": 10.11, "reason": "河南能源集团旗下煤炭企业；此前河南省委、省政府决定对间接控股股东河南能源集团和中国平煤神马控股集团实施战略重组", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 1.58, "first_limit_up": 1783993571, "break_limit_up_times": 0}, {"code": "603619", "name": "中曼石油", "price": 20.66, "change_pct": 10.01, "reason": "公司业务涵盖勘探开发、油服工程、石油装备制造，已形成成熟完备的钻采一体化服务能力，油气装备涵盖从钻机整机到顶驱、泥浆泵、自动猫道等关键部件一系列产品体系", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 13.42, "first_limit_up": 1784006555, "break_limit_up_times": 0}, {"code": "603222", "name": "济民健康", "price": 9.94, "change_pct": 9.96, "reason": "1、公司近日全资成立浙江继明芯集成电路有限公司与上海继明芯微电子有限公司，经营范围涵盖集成电路芯片设计及服务、人工智能应用软件开发等；\n2、子公司博鳌国际医院拥有国内唯一一家通过日本国厚生省认证的国际再生医学实验室，建成了包括细胞存储、国际标准细胞制备、细胞治疗临床研究、干细胞与再生医学技术转化四大核心技术平台，医院自体脂肪干细胞获得中检院的质量检定", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.01, "first_limit_up": 1784011496, "break_limit_up_times": 1}, {"code": "001389", "name": "广合科技", "price": 186.01, "change_pct": 10.0, "reason": "公司拥有CPU PCB产品，上半年度净利同比预增85.12%—95.29%，主要受益于算力硬件需求激增、产品结构优化及泰国广合一期产能利用率提升带动盈利能力增强", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.95, "first_limit_up": 1783993923, "break_limit_up_times": 1}, {"code": "688216", "name": "气派科技", "price": 41.45, "change_pct": 20.01, "reason": "华南地区规模最大的内资集成电路封装测试企业之一，上半年业绩同比扭亏，业绩增长的主要原因包括半导体行业周期复苏，订单充足和产能利用率提升。公司产量大幅提升，固定成本分摊显著降低，生产成本下降", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 14.89, "first_limit_up": 1783994586, "break_limit_up_times": 2}, {"code": "603989", "name": "艾华集团", "price": 37.92, "change_pct": 10.01, "reason": "国内铝电解电容器行业龙头；公司的产品是AI算力硬件供电与电能管理链条中的关键基础元件，可应用在AI基础设施的各个关键部位，如服务器电源及供电保障与能源系统等", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 3.91, "first_limit_up": 1784007193, "break_limit_up_times": 1}, {"code": "600746", "name": "江苏索普", "price": 5.74, "change_pct": 9.96, "reason": "公司是拥有完整产业链的醋酸龙头企业，拥有硫酸产能30万吨/年；上半年净利同比预增115.96%—145.41%，报告期内，公司主要产品价格同比上升\n", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.49, "first_limit_up": 1783992602, "break_limit_up_times": 0}, {"code": "603367", "name": "辰欣药业", "price": 15.1, "change_pct": 9.98, "reason": "公司拥有多个国家一类创新药项目在研，如抗耐药结核菌新药已进入 Ⅲ 期临床阶段，预计 25 年提交上市申请；抗流感创新药 WXSH0208 片也已进入 III 期临床研究", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1784005693, "break_limit_up_times": 0}, {"code": "002532", "name": "天山铝业", "price": 12.25, "change_pct": 9.96, "reason": "公司形成了从铝土矿、氧化铝到电解铝、高纯铝、铝深加工的上下游一体化，预计上半年净利同比增长102%，业绩大幅跃升主要受益于多重因素共振。一方面，全球铝行业供需格局持续偏紧，电解铝产品销售价格显著上行；另一方面，公司140万吨电解铝绿色低碳能效提升项目按计划顺利推进，量价协同效应叠加一体化成本管控成效，推动电解铝板块盈利实现大幅增长", "plates": ["有色金属", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.53, "first_limit_up": 1784009544, "break_limit_up_times": 4}, {"code": "603065", "name": "宿迁联盛", "price": 23.54, "change_pct": 10.0, "reason": "公司拟设立合资公司开展磷化铟衬底业务，预计二期产能40万片/年", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 12.98, "first_limit_up": 1783994197, "break_limit_up_times": 3}, {"code": "603489", "name": "八方股份", "price": 26.44, "change_pct": 9.98, "reason": "公司主要从事电踏车电机及配套电气系统，上半年净利润同比预增188.88%—272.75%，本期业绩预增的主要原因：随着海外终端市场去库存进入尾声，公司订单及生产逐渐恢复正常。公司积极开拓新市场、新客户，销量有所增加，业绩相应提升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.51, "first_limit_up": 1783992646, "break_limit_up_times": 0}, {"code": "603806", "name": "福斯特", "price": 14.91, "change_pct": 10.04, "reason": "公司上半年净利润同比预增75.35%，报告期内，公司原材料光伏树脂受中东地缘冲突影响上升，公司主要产品光伏胶膜销售单价提升从而盈利能力提升。此外公司新业务用于PCB制成的感光干膜产品销售量和盈利能力提升，增强公司整体的盈利能力", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.07, "first_limit_up": 1783992924, "break_limit_up_times": 0}, {"code": "000636", "name": "风华高科", "price": 59.41, "change_pct": 10.0, "reason": "国内被动电子元件行业龙头；公司MLCC、合金电阻、大电流电感已批量导入国内头部AI服务器及机器人客户，AI算力订单充足", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 11.5, "first_limit_up": 1784011800, "break_limit_up_times": 0}, {"code": "600595", "name": "中孚实业", "price": 6.36, "change_pct": 10.03, "reason": "国内西北原铝重要输出地和国内四大铝加工产业基地之一，上半年净利润预增超150%，报告期内，公司充分发挥上下游一体化产业链协同效应，降低综合生产成本并减少单一环节周期波动对整体业绩的影响；电解铝价格保持高位运行，叠加公司提质增效等工作的开展，利润同比实现增长；公司铝精深加工业务通过新能源电池铝塑膜用铝箔等高附加值产品开发、国内外销售策略调整等方式，产销量同比实现增长；公司通过实施发电机组节能降碳升级改造、电解槽石墨化阴极技术改造、源网荷储等项目，实现了能耗和生产成本的进一步降低", "plates": ["有色金属", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1784008520, "break_limit_up_times": 1}, {"code": "600491", "name": "ST龙元", "price": 1.35, "change_pct": 9.76, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 12.48, "first_limit_up": 1783999252, "break_limit_up_times": 5}, {"code": "002141", "name": "贤丰控股", "price": 5.1, "change_pct": 9.91, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1783994289, "break_limit_up_times": 2}, {"code": "605189", "name": "富春染织", "price": 14.22, "change_pct": 9.98, "reason": "公司投资10亿元建设PEEK材料人形机器人轻量化与半导体精密注塑项目，已投产并获行星减速器公司样件订单，切入机器人轻量化赛道", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1783996011, "break_limit_up_times": 0}, {"code": "000008", "name": "神州高铁", "price": 2.6, "change_pct": 10.17, "reason": "公司实控人拟变更为浙江省国资委", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 0.45, "first_limit_up": 1783992300, "break_limit_up_times": 0}, {"code": "002484", "name": "江海股份", "price": 86.19, "change_pct": 10.01, "reason": "国内唯一、全球少数几家在铝电解电容器、薄膜电容器、超级电容器三大类电容器同时研产销的公司，而且是品种最齐全、产业链最完整的企业", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 4.78, "first_limit_up": 1784006883, "break_limit_up_times": 1}, {"code": "605255", "name": "天普股份", "price": 79.26, "change_pct": 10.01, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 0.72, "first_limit_up": 1783992654, "break_limit_up_times": 0}, {"code": "603137", "name": "恒尚节能", "price": 32.37, "change_pct": 9.99, "reason": "公司拟收购金胜电子，标的主要从事存储器，旗下KingSpec金胜维主要定位于消费级存储品牌；YANSEN元存主要定位于工业级存储品牌；OneBoom猛犸纪主要面向电竞及高性能消费场景", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 20.18, "first_limit_up": 1784011002, "break_limit_up_times": 0}, {"code": "002384", "name": "东山精密", "price": 260.37, "change_pct": 10.0, "reason": "全球第三的印刷电路板企业、全球第二的柔性线路板企业；在电子电路领域，公司专注于为行业领先的客户提供全方位电子电路（PCB）产品及服务，PCB 业务涵盖刚性、柔性、刚挠结合板等全系列产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.89, "first_limit_up": 1784005419, "break_limit_up_times": 0}, {"code": "600255", "name": "鑫科材料", "price": 3.08, "change_pct": 10.0, "reason": "1、公司预计上半年净利润同比增长103%-153%，报告期内，公司持续进行产品结构调整，增加高附加值产品销量；同时，公司强化库存周转与生产组织安排，叠加铜价上涨因素，有效扩大了盈利空间，推动主要子公司安徽鑫科铜业有限公司经营业绩同比增长明显；\n2、公司布局高速铜连接领域，产品涵盖800G-1.6T的ACC/AEC高速铜连接，并在研1.6T及3.2T高速铜连接项目，为AI与算力中心提供连接解决方案", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.32, "first_limit_up": 1783992970, "break_limit_up_times": 1}, {"code": "688192", "name": "迪哲医药", "price": 56.33, "change_pct": 20.0, "reason": "公司与阿斯利康签署独家许可协议，获6亿美元首付款", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.86, "first_limit_up": 1784005216, "break_limit_up_times": 0}, {"code": "600497", "name": "驰宏锌锗", "price": 9.79, "change_pct": 10.0, "reason": "公司为中铝集团旗下，主要从事锌、铅、锗业务，全资子公司驰宏锗业生产的光纤级超高纯四氯化锗产品已实现量产并对外销售", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1784011796, "break_limit_up_times": 2}, {"code": "000968", "name": "蓝焰控股", "price": 7.04, "change_pct": 10.0, "reason": "公司为山西煤层气龙头，布局煤层气上中下游一体化产业链", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1783993197, "break_limit_up_times": 6}, {"code": "002243", "name": "力合科创", "price": 6.85, "change_pct": 9.95, "reason": "7月13日，以“东方范式引领AI算力新趋势”为主题的东方算芯软件定义算力芯片、系统及路线图发布会在上海举行，东方算芯自主研发的全球首颗软件定义近存计算3D芯片DF1000在现场发布；东方算芯成立于2024年5月20日，总部设于上海张江，目前团队规模超500人，回顾东方算芯的融资历程，2024年7月，力合资本、高瓴资本、武岳峰、张江高科、上海集成电路产业投资基金等参与了东方算芯的天使轮融资", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 0.57, "first_limit_up": 1783992300, "break_limit_up_times": 0}, {"code": "300912", "name": "凯龙高科", "price": 27.68, "change_pct": 19.98, "reason": "公司拟购买金旺达70%股权，后者专注研发与生产精密传动功能部件，有助于公司完善机器人产业链布局", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 10.33, "first_limit_up": 1784008719, "break_limit_up_times": 1}, {"code": "000759", "name": "中百集团", "price": 6.75, "change_pct": 9.93, "reason": "以商业零售为主业的大型连锁企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.45, "first_limit_up": 1783992741, "break_limit_up_times": 2}, {"code": "001388", "name": "信通电子", "price": 32.44, "change_pct": 10.0, "reason": "高送转-公司2025年年度权益分派方案为每10股送红股4.80股并派5.00元现金，股权登记日为2026年7月16日", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 3.8, "first_limit_up": 1783992762, "break_limit_up_times": 0}, {"code": "000677", "name": "ST海龙", "price": 1.76, "change_pct": 10.0, "reason": "全资子公司拟收购群健航空不少于40%股权", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1784012118, "break_limit_up_times": 0}, {"code": "603201", "name": "常润股份", "price": 15.79, "change_pct": 10.03, "reason": "中国最大的千斤顶制造企业；公司的产品主要分为4大系列，即商用千斤顶及工具、随车配套零部件、专业汽保维修设备以及外购辅助产品", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1784011190, "break_limit_up_times": 0}, {"code": "002838", "name": "道恩股份", "price": 34.63, "change_pct": 10.01, "reason": "公司突破PEEK材料加工难题，优化碳纤维与PEEK结合，为航空航天、医疗、汽车提供3D打印轻量化方案", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.26, "first_limit_up": 1784006658, "break_limit_up_times": 2}, {"code": "300937", "name": "药易购", "price": 23.21, "change_pct": 20.01, "reason": "西南地区领先的医药流通企业，子公司拟1元收购闪送易购65%股权", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 16.85, "first_limit_up": 1783994784, "break_limit_up_times": 1}, {"code": "603197", "name": "保隆科技", "price": 29.62, "change_pct": 9.99, "reason": "公司上半年净利润同比预增82.56%到122.64%，报告期内，公司持续推进市场拓展，主营业务规模稳步提升，主营业务获利增加；上半年对参股公司确认公允价值变动收益，提升了公司业绩", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.69, "first_limit_up": 1783992841, "break_limit_up_times": 1}, {"code": "603077", "name": "和邦生物", "price": 2.29, "change_pct": 10.1, "reason": "公司预计上半年净利同比增长614.68%-730.57%，业绩变动主要系部分产品价格快速上涨，蛋氨酸及双甘膦/草甘膦板块利润上升", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.54, "first_limit_up": 1784008644, "break_limit_up_times": 2}, {"code": "002250", "name": "联化科技", "price": 15.09, "change_pct": 9.99, "reason": "公司医药CDMO储备临床Ⅲ期产品30个，并与全球前二十大药企合作，服务专利期内创新药", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1784005470, "break_limit_up_times": 0}, {"code": "000703", "name": "恒逸石化", "price": 14.54, "change_pct": 9.98, "reason": "国内“炼化-化工-化纤”一体化民营跨国龙头企业，上半年净利预增超23倍，报告期内，作为国内龙头化纤企业中唯一在海外布局炼化工厂的公司，充分受益于东南亚地区成品油供需格局长期偏紧，成品油盈利远好于国内，同时PX、苯等化工产品盈利继续维持高位水平", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1783996224, "break_limit_up_times": 2}, {"code": "301259", "name": "艾布鲁", "price": 26.6, "change_pct": 19.98, "reason": "公司持有中昊英芯5.9076%股权，并计划增持至9.7346%", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.22, "first_limit_up": 1784011551, "break_limit_up_times": 0}, {"code": "000036", "name": "华联控股", "price": 4.63, "change_pct": 9.98, "reason": "公司以房地产开发与物业经营为核心主业；拟12.35亿元收购Argentum Lithium 100%股份，标的主要产品为电池级碳酸锂", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.53, "first_limit_up": 1784006142, "break_limit_up_times": 1}, {"code": "003001", "name": "中岩大地", "price": 16.2, "change_pct": 9.98, "reason": "公司在岩土工程领域深耕十多年，拥有智能感知超级旋喷技术、多向差速强制搅拌技术、岩土固化剂等，在应对墨脱地区复杂地质环境具有较好的工程应用前景", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 15.38, "first_limit_up": 1784011863, "break_limit_up_times": 0}, {"code": "002245", "name": "蔚蓝锂芯", "price": 20.89, "change_pct": 10.01, "reason": "全资子公司天鹏电源是国内高端工具类锂电池主要供应商，是宇树科技的重要供应商", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 10.6, "first_limit_up": 1783996320, "break_limit_up_times": 1}, {"code": "605196", "name": "华通线缆", "price": 25.26, "change_pct": 10.02, "reason": "1、公司主营电线电缆与油服装备，产品涵盖潜油泵电缆、连续油管等；\n2、2026年1月公司安哥拉电解铝项目正式投产，标志公司形成“线缆+油服+铝业”产业布局，该项目是电线电缆业务的向上延伸", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 5.29, "first_limit_up": 1784010448, "break_limit_up_times": 0}, {"code": "002636", "name": "金安国纪", "price": 95.68, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 7.28, "first_limit_up": 1784005944, "break_limit_up_times": 0}, {"code": "300209", "name": "行云科技", "price": 30.36, "change_pct": 20.0, "reason": "公司算力租赁大单租金上调79%，首批服务器即将起租", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 17.79, "first_limit_up": 1784005659, "break_limit_up_times": 8}, {"code": "002463", "name": "沪电股份", "price": 137.13, "change_pct": 10.0, "reason": "国内规模最大、技术实力最强的PCB制造商之一，上半年净利润预增68%-78%，受益于高速交换机、AI服务器、高性能计算及智能汽车等应用领域的结构性需求，叠加公司产品结构的持续优化，预计2026年上半年公司营业收入和净利润较上年同期均有较快增长", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.89, "first_limit_up": 1784005470, "break_limit_up_times": 3}, {"code": "002536", "name": "飞龙股份", "price": 54.07, "change_pct": 10.01, "reason": "1、公司针对机器人关节等部位日益增长的液冷散热需求，依托公司在电子泵、温控阀及集成模块等新能源热管理产品上的技术优势，积极布局机器人领域液冷市场；\n2、公司的数据中心液冷产品在芜湖飞龙、郑州飞龙已建有专门生产线；公司多个液冷项目正在进行中，公司电子水泵系列产品和温控阀系列产品已应用在服务器液冷领域，该领域部分项目已经量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.8, "first_limit_up": 1784006163, "break_limit_up_times": 1}, {"code": "603186", "name": "华正新材", "price": 177.01, "change_pct": 10.0, "reason": "公司已将AI算力赛道纳入五年战略重点，Extreme Low-loss等级覆铜板已批量供货AI服务器、交换机、数据中心等核心场景", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 13.24, "first_limit_up": 1783995596, "break_limit_up_times": 4}, {"code": "603042", "name": "华脉科技", "price": 12.31, "change_pct": 10.01, "reason": "1、公司预计上半年预盈1600万-2100万元，同比扭亏为盈，本次业绩变动主要受益于通信行业光纤光缆市场价格持续走高，公司产品毛利有所提升；\n2、信息通信网络基础设施解决方案提供商；公司主要产品覆盖了从局端OLT到用户端ONU的全系列ODN及无线通信网络建设产品，包括ODN物理连接及保护设备、光无源器件、光缆等光通信产品及微波无源器件、POI多路接入等无线通信网络建设产品", "plates": ["光通信", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.95, "first_limit_up": 1783992637, "break_limit_up_times": 0}, {"code": "000078", "name": "ST海王", "price": 2.29, "change_pct": 10.1, "reason": "全国性医药商业企业中业务网络覆盖面较广的企业之一，医药商业规模全国第八", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 13.13, "first_limit_up": 1783994913, "break_limit_up_times": 9}, {"code": "600844", "name": "金煤科技", "price": 2.7, "change_pct": 10.2, "reason": "公司专注于煤制乙二醇，上半年实现扭亏为盈，4月初年产10万吨草酸扩产项目顺利建成投产，公司借此增加了盈利能力较强的草酸产销量，同时主动降低了毛利率较差的乙二醇产销规模，叠加草酸市场行情上行，整体盈利结构得到明显改善。此外，公司持续推进高卡煤掺烧等降耗举措，进一步降低了产品单耗，共同推动了报告期内业绩的扭亏为盈", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1783992626, "break_limit_up_times": 1}, {"code": "001226", "name": "拓山重工", "price": 46.38, "change_pct": 10.01, "reason": "公司的主要产品包括链轨节、销套、支重轮、销轴、制动装置系列等，主要应用于工程机械领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.72, "first_limit_up": 1783998030, "break_limit_up_times": 0}, {"code": "605028", "name": "世茂能源", "price": 22.03, "change_pct": 9.99, "reason": "余姚地区唯一的生活垃圾焚烧处理中心；上半年扣非净利润预计同比增长15.23%-25.16%，报告期内，归属上市公司股东的净利润较上一报告期有较大幅度的下降，主要系证券投资公允价值变动损益影响及投资收益减少所致，扣除非经常性损益的净利润增加系垃圾处置收入的增加和精细化管理降本增效导致", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 0.51, "first_limit_up": 1783992627, "break_limit_up_times": 0}, {"code": "002432", "name": "九安医疗", "price": 60.9, "change_pct": 10.01, "reason": "公司确立了医疗健康+大类资产配置投资双主业发展，投资的砺思资本连投了三轮月之暗面，同时参与DeepSeek首轮融资", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1784005419, "break_limit_up_times": 0}, {"code": "605133", "name": "嵘泰股份", "price": 34.68, "change_pct": 9.99, "reason": "公司与江苏润孚动力共同设立“江苏润泰机器人科技有限公司”，子公司润泰将开展用于人形机器人和汽车底盘系统的行星滚柱丝杠、滚珠丝杠的研发、生产业务", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.41, "first_limit_up": 1784012079, "break_limit_up_times": 4}, {"code": "603012", "name": "创力集团", "price": 8.61, "change_pct": 9.96, "reason": "1、公司和华为油气矿山军团保持沟通,主要就AI大模型、矿鸿和5G等技术进行合作；\n2、公司拥有年产2万套新能源汽车车载充电机，5000套直流充电桩充电模块研发生产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.23, "first_limit_up": 1784007107, "break_limit_up_times": 1}, {"code": "300566", "name": "激智科技", "price": 33.4, "change_pct": 20.01, "reason": "参股公司视涯科技为Apple Vision Pro调试Micro OLED产线", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.69, "first_limit_up": 1784006523, "break_limit_up_times": 2}, {"code": "002975", "name": "博杰股份", "price": 124.52, "change_pct": 10.0, "reason": "1、子公司博捷芯（深圳）半导体有限公司的划片机具备切割玻璃基板的技术能力，划片机已实现微米级定位精度，崩边率控制在1%以内，支持分层划切工艺，可针对不同厚度的玻璃基板提供定制化解决方案；\n2、子公司博捷芯（深圳）半导体有限公司的划片机已适用于光通信行业，具备磷化铟衬底切割技术能力；参股公司珠海鼎泰芯源产品主要应用于光纤通信、光探测器等领域；\n3、公司自研液冷散热方案已植入GPU测试设备，面向英伟达、微软、阿里等全球头部服务器厂商供货，并推进从设备向零部件供应的战略转型", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 8.6, "first_limit_up": 1784005458, "break_limit_up_times": 0}, {"code": "001283", "name": "豪鹏科技", "price": 46.48, "change_pct": 10.01, "reason": "公司已覆盖硫化物、聚合物、氧化物在内的三条主流固态电池路线", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 5.97, "first_limit_up": 1783994091, "break_limit_up_times": 2}, {"code": "300164", "name": "通源石油", "price": 11.38, "change_pct": 20.04, "reason": "公司为油服复合射孔行业龙头，美国控股子公司TWG是北美射孔领域龙头企业，拥有世界领先的页岩油气开发最核心的射孔分段技术以及电缆测井技术", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 43.98, "first_limit_up": 1784008854, "break_limit_up_times": 0}, {"code": "301100", "name": "风光股份", "price": 16.86, "change_pct": 20.0, "reason": "公司光伏聚焦POE胶膜核心催化助剂，其三乙基铝产品为光伏POE 胶膜关键原料，服务光伏胶膜产业链企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.51, "first_limit_up": 1784008992, "break_limit_up_times": 0}, {"code": "000639", "name": "ST西王", "price": 1.58, "change_pct": 9.72, "reason": "公司高管拟增持300万至600万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 11.9, "first_limit_up": 1783995396, "break_limit_up_times": 5}, {"code": "002523", "name": "天桥起重", "price": 3.15, "change_pct": 10.14, "reason": "公司上半年净利预增37%-71%，业绩预增的主要原因：一是主营业务毛利率显著提升，公司通过拓展海外市场及优化产品结构，带动主营业务盈利能力增强；二是较上年同期收到投资现金分红增加，进一步贡献利润", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1783995888, "break_limit_up_times": 1}, {"code": "600293", "name": "三峡新材", "price": 2.76, "change_pct": 9.96, "reason": "公司正加速向汽车玻璃、电子玻璃等高附加值领域拓展", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 5.08, "first_limit_up": 1783994037, "break_limit_up_times": 0}, {"code": "603577", "name": "汇金通", "price": 10, "change_pct": 10.01, "reason": "国内能够生产最高电压等级1000kV输电线路铁塔的企业之一；公司与中电建全资A级子公司中国电建集团核电工程公司签署战略合作协议，双方将围绕特高压输电、光伏、风电等相关领域开展合作", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.84, "first_limit_up": 1784005690, "break_limit_up_times": 1}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000078": "ST/风险警示股", "600745": "ST/风险警示股"};