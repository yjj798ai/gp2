const UPDATE_TIME = "2026-07-14 07:54";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": 4.13,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续70天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 3.31,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续247天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "创新药",
    "rise": 2.53,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": -1,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": -0.46,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续176天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "存储芯片",
    "rise": 1.01,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续200天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "人形机器人",
    "rise": 1.03,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续411天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光纤概念",
    "rise": 2.6,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "先进封装",
    "rise": 1.42,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "液冷服务器",
    "rise": 1.31,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -2,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "算力租赁",
    "rise": 0.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "2026中报预增",
    "rise": 3.23,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "886110"
  },
  {
    "name": "玻璃基板",
    "rise": 2.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.08,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "ST板块",
    "rise": 0.78,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续85天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "培育钻石",
    "rise": 1.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "机器人概念",
    "rise": 1.19,
    "rate": 0,
    "tag": "21家涨停",
    "hotTag": "连续78天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": 0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": 0.84,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续71天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "猪肉",
    "rise": 0.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "煤炭概念",
    "rise": 3.67,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "煤炭ETF",
    "code": "885914"
  }
];
const THS_EVENTS = [
  {
    "title": "《国民健康“十五五”规划》：全链条支持创新药和医疗器械发展应用 支持创新药临床使用",
    "desc": "",
    "heat": 479250,
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
    "heat": 343964,
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
    "title": "习近平将出席2026世界人工智能大会暨人工智能全球治理高级别会议开幕式并发表主旨讲话",
    "desc": "",
    "heat": 252683,
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
  },
  {
    "title": "国务院批复！《扩大消费“十五五”规划》出炉",
    "desc": "",
    "heat": 227850,
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
  },
  {
    "name": "涤纶",
    "change": "+4.01%",
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
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5855,
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
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 36,
    "hot_rank_chg": 15,
    "stock_cnt": 5855,
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
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 39,
    "hot_rank_chg": 46,
    "stock_cnt": 5855,
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
    "hot_rank": 41,
    "hot_rank_chg": 14,
    "stock_cnt": 5855,
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
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 42,
    "hot_rank_chg": -34,
    "stock_cnt": 5855,
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
    "code": "601600",
    "name": "中国铝业",
    "hot_rank": 45,
    "hot_rank_chg": 191,
    "stock_cnt": 5855,
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
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 48,
    "hot_rank_chg": 13,
    "stock_cnt": 5855,
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
    "code": "603313",
    "name": "梦百合",
    "hot_rank": 54,
    "hot_rank_chg": -30,
    "stock_cnt": 5855,
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
    "hot_rank": 64,
    "hot_rank_chg": 333,
    "stock_cnt": 5855,
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
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 71,
    "hot_rank_chg": -25,
    "stock_cnt": 5855,
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 73,
    "hot_rank_chg": -61,
    "stock_cnt": 5855,
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
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 79,
    "hot_rank_chg": 131,
    "stock_cnt": 5855,
    "price": "6.19",
    "change": "5.63",
    "market_id": "33",
    "circulate_market_value": "68975106000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 4.25
      },
      {
        "name": "锂电池",
        "change_pct": 1.85
      },
      {
        "name": "安徽国企改革",
        "change_pct": 1.59
      },
      {
        "name": "有色 · 铜",
        "change_pct": 4.55
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 6.46
      },
      {
        "name": "有色金属",
        "change_pct": 3.31
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.34
      },
      {
        "name": "人民币升值受益",
        "change_pct": 1.67
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
        "name": "有色 · 镍",
        "change_pct": 3.91
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 81,
    "hot_rank_chg": -21,
    "stock_cnt": 5855,
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
    "code": "002600",
    "name": "领益智造",
    "hot_rank": 87,
    "hot_rank_chg": 43,
    "stock_cnt": 5855,
    "price": "12.97",
    "change": "-4.91",
    "market_id": "33",
    "circulate_market_value": "93380171000.00",
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
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 99,
    "hot_rank_chg": -17,
    "stock_cnt": 5855,
    "price": "10.08",
    "change": "-3.91",
    "market_id": "33",
    "circulate_market_value": "40719770000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.39
      },
      {
        "name": "一带一路",
        "change_pct": 1.72
      },
      {
        "name": "京津冀",
        "change_pct": 0.86
      },
      {
        "name": "光伏",
        "change_pct": 0.93
      },
      {
        "name": "碳中和",
        "change_pct": 1.31
      },
      {
        "name": "国产芯片",
        "change_pct": 0.01
      },
      {
        "name": "IGBT",
        "change_pct": 0.02
      },
      {
        "name": "颗粒硅",
        "change_pct": -0.77
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.87
      },
      {
        "name": "大硅片",
        "change_pct": -1.16
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5855, "price": "25.68", "change": "6.42", "market_id": "33", "circulate_market_value": "85325697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 2, "hot_rank_chg": 8, "stock_cnt": 5855, "price": "102.70", "change": "3.69", "market_id": "17", "circulate_market_value": "183772880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5855, "price": "7.02", "change": "2.78", "market_id": "33", "circulate_market_value": "248277280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "超高清视频", "change_pct": 1.16}, {"name": "苹果产业链", "change_pct": 2.07}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 0.39}, {"name": "人工智能", "change_pct": 0.41}, {"name": "互联网医疗", "change_pct": 1.87}, {"name": "VR&AR", "change_pct": 0.91}, {"name": "OLED", "change_pct": 1.28}, {"name": "京津冀", "change_pct": 0.86}, {"name": "物联网", "change_pct": 0.41}, {"name": "指纹识别", "change_pct": 1.24}, {"name": "汽车零部件", "change_pct": 1.51}, {"name": "白马股", "change_pct": 1.1}, {"name": "智能制造", "change_pct": 1.02}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "国产芯片", "change_pct": 0.01}, {"name": "液晶面板/LCD", "change_pct": 1.73}, {"name": "全息概念", "change_pct": 0.76}, {"name": "理想汽车概念股", "change_pct": 1.08}, {"name": "MicroLED", "change_pct": 1.65}, {"name": "钙钛矿电池", "change_pct": 0.26}, {"name": "智能手表", "change_pct": 1.61}, {"name": "MiniLED", "change_pct": 2.21}, {"name": "传感器", "change_pct": 0.85}, {"name": "大硅片", "change_pct": -1.16}, {"name": "AI PC", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "回购", "change_pct": 1.65}, {"name": "智能眼镜/MR头显", "change_pct": 1.29}, {"name": "玻璃基板封装", "change_pct": 2.94}]}, {"code": "002156", "name": "通富微电", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5855, "price": "77.87", "change": "5.84", "market_id": "33", "circulate_market_value": "118164005000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5855, "price": "36.98", "change": "-3.70", "market_id": "33", "circulate_market_value": "105765487000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": 38, "stock_cnt": 5855, "price": "59.41", "change": "10.00", "market_id": "33", "circulate_market_value": "68738149000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5855, "price": "74.38", "change": "6.24", "market_id": "17", "circulate_market_value": "182502210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5855, "price": "583.99", "change": "6.03", "market_id": "17", "circulate_market_value": "390392600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 9, "hot_rank_chg": 26, "stock_cnt": 5855, "price": "260.37", "change": "10.00", "market_id": "33", "circulate_market_value": "360956590000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光芯片"}, {"code": "300502", "name": "新易盛", "hot_rank": 10, "hot_rank_chg": 86, "stock_cnt": 5855, "price": "568.82", "change": "10.99", "market_id": "33", "circulate_market_value": "713438590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 11, "hot_rank_chg": 6, "stock_cnt": 5855, "price": "84.95", "change": "-0.63", "market_id": "33", "circulate_market_value": "124607362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": 18, "stock_cnt": 5855, "price": "52.51", "change": "0.75", "market_id": "33", "circulate_market_value": "82658910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 13, "hot_rank_chg": -6, "stock_cnt": 5855, "price": "32.37", "change": "9.99", "market_id": "17", "circulate_market_value": "5921552000.00", "change_type": "1", "change_section": "10", "change_days": "9", "change_reason": "拟收购存储公司"}, {"code": "600522", "name": "中天科技", "hot_rank": 14, "hot_rank_chg": 20, "stock_cnt": 5855, "price": "42.85", "change": "3.70", "market_id": "17", "circulate_market_value": "146244890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 15, "hot_rank_chg": 114, "stock_cnt": 5855, "price": "48.60", "change": "8.14", "market_id": "17", "circulate_market_value": "71052947000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 16, "hot_rank_chg": 82, "stock_cnt": 5855, "price": "29.06", "change": "6.21", "market_id": "17", "circulate_market_value": "598688110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 17, "hot_rank_chg": 10, "stock_cnt": 5855, "price": "22.63", "change": "-0.44", "market_id": "17", "circulate_market_value": "47331599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 18, "hot_rank_chg": 2, "stock_cnt": 5855, "price": "1184.05", "change": "6.86", "market_id": "33", "circulate_market_value": "1314224190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 19, "hot_rank_chg": 57, "stock_cnt": 5855, "price": "54.52", "change": "8.76", "market_id": "17", "circulate_market_value": "216530920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 20, "hot_rank_chg": -6, "stock_cnt": 5855, "price": "82.13", "change": "-10.00", "market_id": "17", "circulate_market_value": "97117833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 21, "hot_rank_chg": 2, "stock_cnt": 5855, "price": "35.45", "change": "7.42", "market_id": "17", "circulate_market_value": "11943812300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 22, "hot_rank_chg": -11, "stock_cnt": 5855, "price": "36.08", "change": "-2.46", "market_id": "33", "circulate_market_value": "38921926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 23, "hot_rank_chg": 163, "stock_cnt": 5855, "price": "18.21", "change": "8.01", "market_id": "17", "circulate_market_value": "317961940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 25, "hot_rank_chg": 22, "stock_cnt": 5855, "price": "52.63", "change": "-2.54", "market_id": "17", "circulate_market_value": "44554102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 26, "hot_rank_chg": 44, "stock_cnt": 5855, "price": "113.00", "change": "4.49", "market_id": "17", "circulate_market_value": "40761744000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 27, "hot_rank_chg": 30, "stock_cnt": 5855, "price": "137.13", "change": "10.00", "market_id": "33", "circulate_market_value": "263675000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "002281", "name": "光迅科技", "hot_rank": 28, "hot_rank_chg": 62, "stock_cnt": 5855, "price": "232.95", "change": "7.85", "market_id": "33", "circulate_market_value": "181817090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 29, "hot_rank_chg": 42, "stock_cnt": 5855, "price": "65.60", "change": "4.00", "market_id": "17", "circulate_market_value": "1301772450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 30, "hot_rank_chg": 43, "stock_cnt": 5855, "price": "16.83", "change": "-6.76", "market_id": "33", "circulate_market_value": "54286677000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688072", "name": "拓荆科技", "hot_rank": 31, "hot_rank_chg": 78, "stock_cnt": 5855, "price": "850.01", "change": "0.59", "market_id": "17", "circulate_market_value": "240291890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5855, "price": "28.62", "change": "-1.28", "market_id": "33", "circulate_market_value": "21677220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 33, "hot_rank_chg": 6, "stock_cnt": 5855, "price": "38.40", "change": "-0.26", "market_id": "33", "circulate_market_value": "30044338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000063", "name": "中兴通讯", "hot_rank": 34, "hot_rank_chg": 20, "stock_cnt": 5855, "price": "39.91", "change": "-0.33", "market_id": "33", "circulate_market_value": "160742360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5855, "price": "101.90", "change": "-3.99", "market_id": "17", "circulate_market_value": "149085240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 36, "hot_rank_chg": 15, "stock_cnt": 5855, "price": "5.88", "change": "-1.67", "market_id": "17", "circulate_market_value": "72889004000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.95}, {"name": "核电", "change_pct": 0.76}, {"name": "强势人气股", "change_pct": 1.67}, {"name": "电力体制改革", "change_pct": 1.77}, {"name": "水电", "change_pct": 1.61}, {"name": "火电", "change_pct": 2.18}, {"name": "光伏", "change_pct": 0.93}, {"name": "风电", "change_pct": 1.0}, {"name": "国企改革", "change_pct": 1.36}, {"name": "算电协同", "change_pct": 1.35}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 37, "hot_rank_chg": -19, "stock_cnt": 5855, "price": "30.59", "change": "-7.30", "market_id": "33", "circulate_market_value": "35059367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 38, "hot_rank_chg": 89, "stock_cnt": 5855, "price": "127.51", "change": "6.05", "market_id": "17", "circulate_market_value": "315367960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 39, "hot_rank_chg": 46, "stock_cnt": 5855, "price": "11.38", "change": "20.04", "market_id": "33", "circulate_market_value": "6636938700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "油气开采", "xgb_concepts": [{"name": "油服", "change_pct": 3.68}, {"name": "一带一路", "change_pct": 1.72}, {"name": "天然气", "change_pct": 2.51}, {"name": "油气改革", "change_pct": 3.66}, {"name": "页岩气", "change_pct": 3.85}, {"name": "深地经济", "change_pct": 3.18}]}, {"code": "000988", "name": "华工科技", "hot_rank": 40, "hot_rank_chg": 55, "stock_cnt": 5855, "price": "159.84", "change": "3.63", "market_id": "33", "circulate_market_value": "160636910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 41, "hot_rank_chg": 14, "stock_cnt": 5855, "price": "5.13", "change": "6.65", "market_id": "33", "circulate_market_value": "103207014000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "超高清视频", "change_pct": 1.16}, {"name": "电竞", "change_pct": -0.13}, {"name": "半导体", "change_pct": 0.39}, {"name": "OLED", "change_pct": 1.28}, {"name": "光伏", "change_pct": 0.93}, {"name": "黑色家电", "change_pct": -0.03}, {"name": "家电", "change_pct": 0.76}, {"name": "智能制造", "change_pct": 1.02}, {"name": "工业互联网", "change_pct": 0.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "国产芯片", "change_pct": 0.01}, {"name": "腾讯概念股", "change_pct": 0.13}, {"name": "液晶面板/LCD", "change_pct": 1.73}, {"name": "MicroLED", "change_pct": 1.65}, {"name": "MiniLED", "change_pct": 2.21}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "玻璃基板封装", "change_pct": 2.94}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 42, "hot_rank_chg": -34, "stock_cnt": 5855, "price": "7.73", "change": "-3.38", "market_id": "33", "circulate_market_value": "12566612900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "电竞", "change_pct": -0.13}, {"name": "手游", "change_pct": -0.7}, {"name": "强势人气股", "change_pct": 1.67}, {"name": "人工智能", "change_pct": 0.41}, {"name": "游戏", "change_pct": -0.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.05}, {"name": "腾讯概念股", "change_pct": 0.13}, {"name": "快手概念股", "change_pct": -0.35}, {"name": "元宇宙", "change_pct": 0.16}, {"name": "虚拟数字人", "change_pct": 0.01}, {"name": "东数西算/算力", "change_pct": -0.37}, {"name": "web3.0", "change_pct": 0.55}, {"name": "AIGC概念", "change_pct": -0.2}, {"name": "数据要素", "change_pct": -0.09}, {"name": "字节跳动概念股", "change_pct": -0.31}, {"name": "AI营销", "change_pct": -0.55}, {"name": "ChatGPT", "change_pct": -0.64}, {"name": "智能眼镜/MR头显", "change_pct": 1.29}, {"name": "人工智能大模型", "change_pct": -0.01}, {"name": "人形机器人", "change_pct": 0.92}, {"name": "短剧/互动影游", "change_pct": -0.63}, {"name": "多模态", "change_pct": -0.7}, {"name": "Sora/AI视频", "change_pct": -0.67}, {"name": "IP经济/谷子经济", "change_pct": 0.75}, {"name": "小红书概念股", "change_pct": -0.03}]}, {"code": "002851", "name": "麦格米特", "hot_rank": 43, "hot_rank_chg": 166, "stock_cnt": 5855, "price": "172.16", "change": "8.49", "market_id": "33", "circulate_market_value": "78892649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 44, "hot_rank_chg": 23, "stock_cnt": 5855, "price": "15.23", "change": "-0.46", "market_id": "17", "circulate_market_value": "19437375000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601600", "name": "中国铝业", "hot_rank": 45, "hot_rank_chg": 191, "stock_cnt": 5855, "price": "8.86", "change": "9.25", "market_id": "17", "circulate_market_value": "116981592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 3.56}, {"name": "稀土磁材", "change_pct": 3.6}, {"name": "央企改革", "change_pct": 0.95}, {"name": "有色金属", "change_pct": 3.31}, {"name": "白马股", "change_pct": 1.1}, {"name": "中字头", "change_pct": 0.85}, {"name": "国企改革", "change_pct": 1.36}]}, {"code": "600362", "name": "江西铜业", "hot_rank": 46, "hot_rank_chg": 244, "stock_cnt": 5855, "price": "43.85", "change": "9.62", "market_id": "17", "circulate_market_value": "90999599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 47, "hot_rank_chg": -5, "stock_cnt": 5855, "price": "15.90", "change": "-6.58", "market_id": "17", "circulate_market_value": "15268695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 48, "hot_rank_chg": 13, "stock_cnt": 5855, "price": "9.05", "change": "9.56", "market_id": "33", "circulate_market_value": "4902584100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": 3.68}, {"name": "油气管网", "change_pct": 2.53}, {"name": "海工装备", "change_pct": 1.27}, {"name": "举牌", "change_pct": 1.2}, {"name": "天然气", "change_pct": 2.51}, {"name": "山东国企改革", "change_pct": 1.92}, {"name": "风电", "change_pct": 1.0}, {"name": "页岩气", "change_pct": 3.85}, {"name": "国企改革", "change_pct": 1.36}, {"name": "深地经济", "change_pct": 3.18}]}, {"code": "600879", "name": "航天电子", "hot_rank": 49, "hot_rank_chg": 48, "stock_cnt": 5855, "price": "19.31", "change": "-9.60", "market_id": "17", "circulate_market_value": "63709470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 50, "hot_rank_chg": 57, "stock_cnt": 5855, "price": "90.18", "change": "3.68", "market_id": "33", "circulate_market_value": "314422810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 51, "hot_rank_chg": 77, "stock_cnt": 5855, "price": "46.02", "change": "7.00", "market_id": "17", "circulate_market_value": "29008846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 52, "hot_rank_chg": -7, "stock_cnt": 5855, "price": "147.90", "change": "10.00", "market_id": "17", "circulate_market_value": "354146780000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "001399", "name": "惠科股份", "hot_rank": 53, "hot_rank_chg": 168, "stock_cnt": 5855, "price": "30.00", "change": "-9.99", "market_id": "33", "circulate_market_value": "12917001900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603313", "name": "梦百合", "hot_rank": 54, "hot_rank_chg": -30, "stock_cnt": 5855, "price": "8.59", "change": "7.51", "market_id": "17", "circulate_market_value": "4901341300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "家具家居", "change_pct": 1.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "C2M", "change_pct": 1.42}]}, {"code": "002821", "name": "凯莱英", "hot_rank": 55, "hot_rank_chg": 186, "stock_cnt": 5855, "price": "177.95", "change": "7.63", "market_id": "33", "circulate_market_value": "56417955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 56, "hot_rank_chg": 68, "stock_cnt": 5855, "price": "89.70", "change": "3.93", "market_id": "33", "circulate_market_value": "74020461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 57, "hot_rank_chg": -24, "stock_cnt": 5855, "price": "230.89", "change": "6.50", "market_id": "33", "circulate_market_value": "103908758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 58, "hot_rank_chg": 206, "stock_cnt": 5855, "price": "39.08", "change": "15.08", "market_id": "33", "circulate_market_value": "54883675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 59, "hot_rank_chg": 74, "stock_cnt": 5855, "price": "179.03", "change": "-19.28", "market_id": "33", "circulate_market_value": "5519740700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 60, "hot_rank_chg": 17, "stock_cnt": 5855, "price": "736.00", "change": "2.23", "market_id": "33", "circulate_market_value": "121490055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 61, "hot_rank_chg": 170, "stock_cnt": 5855, "price": "134.21", "change": "12.07", "market_id": "33", "circulate_market_value": "111262176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 62, "hot_rank_chg": 48, "stock_cnt": 5855, "price": "15.14", "change": "-7.40", "market_id": "33", "circulate_market_value": "24059293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 63, "hot_rank_chg": 124, "stock_cnt": 5855, "price": "19.60", "change": "-1.21", "market_id": "33", "circulate_market_value": "261724600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 64, "hot_rank_chg": 333, "stock_cnt": 5855, "price": "9.79", "change": "10.00", "market_id": "17", "circulate_market_value": "49345325000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年度业绩预增", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.95}, {"name": "军民融合", "change_pct": 0.03}, {"name": "有色 · 锑", "change_pct": 3.96}, {"name": "有色 · 钼", "change_pct": 2.96}, {"name": "有色 · 锌", "change_pct": 4.62}, {"name": "有色金属", "change_pct": 3.31}, {"name": "军工", "change_pct": -0.33}, {"name": "硫酸", "change_pct": 3.65}, {"name": "国企改革", "change_pct": 1.36}, {"name": "白银", "change_pct": 4.12}, {"name": "新冠病毒防治", "change_pct": 1.86}, {"name": "光纤概念", "change_pct": 3.07}, {"name": "有色 · 铋", "change_pct": 5.04}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 65, "hot_rank_chg": 82, "stock_cnt": 5855, "price": "273.51", "change": "5.48", "market_id": "33", "circulate_market_value": "297685020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 66, "hot_rank_chg": -8, "stock_cnt": 5855, "price": "14.97", "change": "-4.83", "market_id": "17", "circulate_market_value": "74685610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 67, "hot_rank_chg": 36, "stock_cnt": 5855, "price": "74.79", "change": "7.83", "market_id": "33", "circulate_market_value": "108664286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 68, "hot_rank_chg": -18, "stock_cnt": 5855, "price": "95.68", "change": "10.00", "market_id": "33", "circulate_market_value": "69302499000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报预增"}, {"code": "688008", "name": "澜起科技", "hot_rank": 69, "hot_rank_chg": 115, "stock_cnt": 5855, "price": "270.00", "change": "6.81", "market_id": "17", "circulate_market_value": "309086420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 70, "hot_rank_chg": 23, "stock_cnt": 5855, "price": "21.08", "change": "-17.79", "market_id": "33", "circulate_market_value": "13847349000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 71, "hot_rank_chg": -25, "stock_cnt": 5855, "price": "9.95", "change": "-9.96", "market_id": "17", "circulate_market_value": "17801926000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.1}, {"name": "纯碱", "change_pct": 2.46}, {"name": "食品", "change_pct": 1.83}, {"name": "土壤修复", "change_pct": 2.33}, {"name": "东数西算/算力", "change_pct": -0.37}, {"name": "OpenClaw概念", "change_pct": -3.25}, {"name": "DeepSeek概念股", "change_pct": -0.86}]}, {"code": "003020", "name": "立方制药", "hot_rank": 72, "hot_rank_chg": -46, "stock_cnt": 5855, "price": "20.80", "change": "0.92", "market_id": "33", "circulate_market_value": "3505803700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 73, "hot_rank_chg": -61, "stock_cnt": 5855, "price": "4.08", "change": "9.97", "market_id": "17", "circulate_market_value": "10275520300.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.79}, {"name": "工业大麻", "change_pct": 1.32}, {"name": "中药", "change_pct": 2.16}, {"name": "保健品", "change_pct": 2.31}, {"name": "医药", "change_pct": 2.72}, {"name": "化学原料药", "change_pct": 2.52}, {"name": "流感", "change_pct": 2.7}, {"name": "振兴东北", "change_pct": 1.97}, {"name": "食品", "change_pct": 1.83}]}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 74, "hot_rank_chg": 210, "stock_cnt": 5855, "price": "105.24", "change": "9.28", "market_id": "33", "circulate_market_value": "243191360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 75, "hot_rank_chg": 17, "stock_cnt": 5855, "price": "19.17", "change": "-5.43", "market_id": "33", "circulate_market_value": "64478392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 76, "hot_rank_chg": 68, "stock_cnt": 5855, "price": "61.67", "change": "4.56", "market_id": "33", "circulate_market_value": "451737390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002422", "name": "科伦药业", "hot_rank": 77, "hot_rank_chg": 120, "stock_cnt": 5855, "price": "48.50", "change": "8.26", "market_id": "33", "circulate_market_value": "62983209000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 78, "hot_rank_chg": 10, "stock_cnt": 5855, "price": "290.28", "change": "6.33", "market_id": "33", "circulate_market_value": "251148790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000630", "name": "铜陵有色", "hot_rank": 79, "hot_rank_chg": 131, "stock_cnt": 5855, "price": "6.19", "change": "5.63", "market_id": "33", "circulate_market_value": "68975106000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 4.25}, {"name": "锂电池", "change_pct": 1.85}, {"name": "安徽国企改革", "change_pct": 1.59}, {"name": "有色 · 铜", "change_pct": 4.55}, {"name": "铜箔/覆铜板", "change_pct": 6.46}, {"name": "有色金属", "change_pct": 3.31}, {"name": "新能源汽车", "change_pct": 1.34}, {"name": "人民币升值受益", "change_pct": 1.67}, {"name": "硫酸", "change_pct": 3.65}, {"name": "国企改革", "change_pct": 1.36}, {"name": "白银", "change_pct": 4.12}, {"name": "有色 · 镍", "change_pct": 3.91}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 80, "hot_rank_chg": -16, "stock_cnt": 5855, "price": "94.77", "change": "5.03", "market_id": "33", "circulate_market_value": "61888186000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 81, "hot_rank_chg": -21, "stock_cnt": 5855, "price": "6.47", "change": "7.47", "market_id": "17", "circulate_market_value": "7064506800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 2.72}, {"name": "化学原料药", "change_pct": 2.52}, {"name": "数字经济", "change_pct": 0.05}, {"name": "辅助生殖", "change_pct": 2.66}, {"name": "新冠病毒防治", "change_pct": 1.86}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 82, "hot_rank_chg": 40, "stock_cnt": 5855, "price": "23.23", "change": "5.98", "market_id": "33", "circulate_market_value": "27871139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 83, "hot_rank_chg": 4, "stock_cnt": 5855, "price": "400.18", "change": "4.79", "market_id": "17", "circulate_market_value": "162608470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 84, "hot_rank_chg": -55, "stock_cnt": 5855, "price": "31.15", "change": "-1.42", "market_id": "33", "circulate_market_value": "23724382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 85, "hot_rank_chg": 53, "stock_cnt": 5855, "price": "41.94", "change": "0.82", "market_id": "33", "circulate_market_value": "154515240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 86, "hot_rank_chg": 19, "stock_cnt": 5855, "price": "108.29", "change": "0.27", "market_id": "33", "circulate_market_value": "171913430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 87, "hot_rank_chg": 43, "stock_cnt": 5855, "price": "12.97", "change": "-4.91", "market_id": "33", "circulate_market_value": "93380171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.18}, {"name": "手机产业链", "change_pct": 2.04}, {"name": "苹果产业链", "change_pct": 2.07}, {"name": "无线充电", "change_pct": 2.24}, {"name": "稀土磁材", "change_pct": 3.6}, {"name": "5G", "change_pct": 1.47}, {"name": "VR&AR", "change_pct": 0.91}, {"name": "新能源汽车", "change_pct": 1.34}, {"name": "机器人", "change_pct": 0.99}, {"name": "小米概念股", "change_pct": 1.43}, {"name": "第三代半导体", "change_pct": 0.46}, {"name": "激光雷达", "change_pct": 2.11}, {"name": "减速器", "change_pct": 1.07}, {"name": "无线耳机", "change_pct": 1.23}, {"name": "氮化镓", "change_pct": 0.53}, {"name": "AI PC", "change_pct": 0.88}, {"name": "华为产业链", "change_pct": 0.77}, {"name": "回购", "change_pct": 1.65}, {"name": "人形机器人", "change_pct": 0.92}, {"name": "AI手机", "change_pct": 1.02}, {"name": "液冷服务器", "change_pct": 1.33}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 88, "hot_rank_chg": -69, "stock_cnt": 5855, "price": "18.79", "change": "-10.01", "market_id": "33", "circulate_market_value": "15089728000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 89, "hot_rank_chg": 133, "stock_cnt": 5855, "price": "40.85", "change": "6.10", "market_id": "33", "circulate_market_value": "62007458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 90, "hot_rank_chg": -49, "stock_cnt": 5855, "price": "13.38", "change": "2.45", "market_id": "33", "circulate_market_value": "14214963000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 91, "hot_rank_chg": -26, "stock_cnt": 5855, "price": "38.17", "change": "2.63", "market_id": "33", "circulate_market_value": "57598951000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 92, "hot_rank_chg": 2, "stock_cnt": 5855, "price": "33.69", "change": "6.31", "market_id": "17", "circulate_market_value": "23292445000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 93, "hot_rank_chg": 26, "stock_cnt": 5855, "price": "187.49", "change": "-0.81", "market_id": "33", "circulate_market_value": "59719830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5855, "price": "207.69", "change": "9.21", "market_id": "33", "circulate_market_value": "87581674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 96, "hot_rank_chg": -81, "stock_cnt": 5855, "price": "17.63", "change": "-1.73", "market_id": "17", "circulate_market_value": "9721502600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 98, "hot_rank_chg": 13, "stock_cnt": 5855, "price": "50.34", "change": "-1.64", "market_id": "17", "circulate_market_value": "64013424000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 99, "hot_rank_chg": -17, "stock_cnt": 5855, "price": "10.08", "change": "-3.91", "market_id": "33", "circulate_market_value": "40719770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.39}, {"name": "一带一路", "change_pct": 1.72}, {"name": "京津冀", "change_pct": 0.86}, {"name": "光伏", "change_pct": 0.93}, {"name": "碳中和", "change_pct": 1.31}, {"name": "国产芯片", "change_pct": 0.01}, {"name": "IGBT", "change_pct": 0.02}, {"name": "颗粒硅", "change_pct": -0.77}, {"name": "异质结电池HJT", "change_pct": 0.87}, {"name": "大硅片", "change_pct": -1.16}]}, {"code": "600460", "name": "士兰微", "hot_rank": 100, "hot_rank_chg": 41, "stock_cnt": 5855, "price": "41.80", "change": "-0.31", "market_id": "17", "circulate_market_value": "69558203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000078": "ST/风险警示股"};