const UPDATE_TIME = "2026-06-26 20:44";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -0.48,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续188天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.67,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续235天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -1.84,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续164天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "光刻机",
    "rise": 0.85,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "中芯国际概念",
    "rise": 1.13,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "PCB概念",
    "rise": -2.62,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "先进封装",
    "rise": -0.46,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "猪肉",
    "rise": 0.61,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "光纤概念",
    "rise": -3.03,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "电信ETF",
    "code": "886084"
  },
  {
    "name": "芯片概念",
    "rise": -1.8,
    "rate": 0,
    "tag": "27家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "创新药",
    "rise": -3.74,
    "rate": 0,
    "tag": "",
    "hotTag": "连续65天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "光刻胶",
    "rise": -0.03,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "硅能源",
    "rise": 0.47,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885958"
  },
  {
    "name": "培育钻石",
    "rise": -3.23,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "电子纸",
    "rise": 0.12,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885953"
  },
  {
    "name": "人形机器人",
    "rise": -3.15,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续399天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "算力租赁",
    "rise": -3.98,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "液冷服务器",
    "rise": -3.05,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "ST板块",
    "rise": -0.47,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "国家大基金持股",
    "rise": -0.6,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  }
];
const THS_EVENTS = [
  {
    "title": "全球巨头今年两轮涨价！AI催热半导体硅片赛道，国内已有厂商调价！",
    "desc": "",
    "heat": 766590,
    "direction": "硅片涨价",
    "themes": [
      "半导体硅片"
    ],
    "stocks": [
      {
        "name": "有研硅",
        "code": "688432",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "我国具身智能市场规模将突破万亿元！中国超10000家企业入局具身智能",
    "desc": "",
    "heat": 160411,
    "direction": "人形机器人",
    "themes": [
      "人形机器人",
      "机器人概念",
      "电机",
      "减速器"
    ],
    "stocks": [
      {
        "name": "莱赛激光",
        "code": "920363",
        "chg": 20.814061
      }
    ]
  },
  {
    "title": "国家发改委、国家能源局印发《新型能源体系建设“十五五”规划》",
    "desc": "",
    "heat": 75246,
    "direction": "绿色电力",
    "themes": [
      "绿色电力",
      "电力"
    ],
    "stocks": [
      {
        "name": "有研硅",
        "code": "688432",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美国光纤巨头推出玻璃光学互连技术",
    "desc": "",
    "heat": 40000,
    "direction": "玻璃基光互联",
    "themes": [
      "光纤概念",
      "玻璃基板"
    ],
    "stocks": [
      {
        "name": "信德新材",
        "code": "301349",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "PCB概念股延续涨势 建滔年内已实行五次提价 Rubin全面生产前或启动提前备货",
    "desc": "",
    "heat": 20000,
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
        "name": "超声电子",
        "code": "000823",
        "chg": 10.011596
      }
    ]
  },
  {
    "title": "英伟达800V Power Rack成Vera Rubin选用方案，目标第三季完成备货",
    "desc": "",
    "heat": 0,
    "direction": "HVDC供电",
    "themes": [
      "HVDC供电"
    ],
    "stocks": [
      {
        "name": "科华数据",
        "code": "002335",
        "chg": 3.242604
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+4.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+3.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+2.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+1.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有机硅",
    "change": "+1.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+1.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+1.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D感应",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+0.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+0.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+0.71%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "HEPS概念",
    "change": "+0.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D玻璃",
    "change": "+0.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+0.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "筹码集中",
    "change": "+0.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液晶面板/LCD",
    "change": "+0.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 1,
    "hot_rank_chg": 6,
    "stock_cnt": 5706,
    "price": "8.83",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "14354876000.00",
    "change_type": "1",
    "change_section": "15",
    "change_days": "8",
    "change_reason": "具身智能数据集",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -2.41
      },
      {
        "name": "电竞",
        "change_pct": -2.4
      },
      {
        "name": "手游",
        "change_pct": -2.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.84
      },
      {
        "name": "人工智能",
        "change_pct": -3.19
      },
      {
        "name": "游戏",
        "change_pct": -2.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.61
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.8
      },
      {
        "name": "快手概念股",
        "change_pct": -3.92
      },
      {
        "name": "元宇宙",
        "change_pct": -2.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.82
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.87
      },
      {
        "name": "web3.0",
        "change_pct": -3.27
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.58
      },
      {
        "name": "数据要素",
        "change_pct": -3.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.76
      },
      {
        "name": "AI营销",
        "change_pct": -3.17
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.94
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.1
      },
      {
        "name": "人工智能大模型",
        "change_pct": -4.14
      },
      {
        "name": "人形机器人",
        "change_pct": -2.79
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.93
      },
      {
        "name": "多模态",
        "change_pct": -3.92
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.84
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.67
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.98
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5706,
    "price": "7.79",
    "change": "3.59",
    "market_id": "33",
    "circulate_market_value": "275509970000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.11
      },
      {
        "name": "折叠屏",
        "change_pct": -1.63
      },
      {
        "name": "手机产业链",
        "change_pct": -2.04
      },
      {
        "name": "超高清视频",
        "change_pct": -2.02
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.73
      },
      {
        "name": "半导体",
        "change_pct": -0.26
      },
      {
        "name": "人工智能",
        "change_pct": -3.19
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.74
      },
      {
        "name": "VR&AR",
        "change_pct": -1.4
      },
      {
        "name": "OLED",
        "change_pct": -0.13
      },
      {
        "name": "京津冀",
        "change_pct": -2.4
      },
      {
        "name": "物联网",
        "change_pct": -3.15
      },
      {
        "name": "指纹识别",
        "change_pct": -0.54
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.8
      },
      {
        "name": "白马股",
        "change_pct": -2.2
      },
      {
        "name": "智能制造",
        "change_pct": -2.57
      },
      {
        "name": "小米概念股",
        "change_pct": -2.18
      },
      {
        "name": "国产芯片",
        "change_pct": -1.37
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.2
      },
      {
        "name": "全息概念",
        "change_pct": -2.54
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.89
      },
      {
        "name": "MicroLED",
        "change_pct": 0.24
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.45
      },
      {
        "name": "智能手表",
        "change_pct": -3.24
      },
      {
        "name": "MiniLED",
        "change_pct": -0.51
      },
      {
        "name": "传感器",
        "change_pct": -2.02
      },
      {
        "name": "大硅片",
        "change_pct": 4.78
      },
      {
        "name": "AI PC",
        "change_pct": -2.69
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "回购",
        "change_pct": -2.27
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.1
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 9,
    "hot_rank_chg": 0,
    "stock_cnt": 5706,
    "price": "11.19",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "45205136000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "半导体硅片",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.26
      },
      {
        "name": "一带一路",
        "change_pct": -2.25
      },
      {
        "name": "京津冀",
        "change_pct": -2.4
      },
      {
        "name": "光伏",
        "change_pct": -1.17
      },
      {
        "name": "碳中和",
        "change_pct": -2.27
      },
      {
        "name": "国产芯片",
        "change_pct": -1.37
      },
      {
        "name": "IGBT",
        "change_pct": -1.98
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.83
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.04
      },
      {
        "name": "大硅片",
        "change_pct": 4.78
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 22,
    "hot_rank_chg": 11,
    "stock_cnt": 5706,
    "price": "5.76",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "5949710200.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "PCB上游",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.53
      },
      {
        "name": "锂电池",
        "change_pct": -4.21
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.24
      },
      {
        "name": "强势人气股",
        "change_pct": -0.84
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.99
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.45
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 27,
    "hot_rank_chg": 8,
    "stock_cnt": 5706,
    "price": "5.40",
    "change": "1.12",
    "market_id": "33",
    "circulate_market_value": "103312985000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.63
      },
      {
        "name": "手机产业链",
        "change_pct": -2.04
      },
      {
        "name": "超高清视频",
        "change_pct": -2.02
      },
      {
        "name": "半导体",
        "change_pct": -0.26
      },
      {
        "name": "OLED",
        "change_pct": -0.13
      },
      {
        "name": "光伏",
        "change_pct": -1.17
      },
      {
        "name": "黑色家电",
        "change_pct": -2.42
      },
      {
        "name": "家电",
        "change_pct": -2.36
      },
      {
        "name": "智能制造",
        "change_pct": -2.57
      },
      {
        "name": "工业互联网",
        "change_pct": -2.93
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.18
      },
      {
        "name": "国产芯片",
        "change_pct": -1.37
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.8
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.2
      },
      {
        "name": "MicroLED",
        "change_pct": 0.24
      },
      {
        "name": "MiniLED",
        "change_pct": -0.51
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 31,
    "hot_rank_chg": -2,
    "stock_cnt": 5706,
    "price": "3.42",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "15977381000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储芯片",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.11
      },
      {
        "name": "体育产业",
        "change_pct": -1.87
      },
      {
        "name": "房地产",
        "change_pct": -1.59
      },
      {
        "name": "京津冀",
        "change_pct": -2.4
      },
      {
        "name": "旅游",
        "change_pct": -2.25
      },
      {
        "name": "国产芯片",
        "change_pct": -1.37
      },
      {
        "name": "内存",
        "change_pct": -0.92
      },
      {
        "name": "闪存",
        "change_pct": -2.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.67
      }
    ]
  },
  {
    "code": "601016",
    "name": "节能风电",
    "hot_rank": 35,
    "hot_rank_chg": 5,
    "stock_cnt": 5706,
    "price": "3.94",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "23790728000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "绿色电力",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.07
      },
      {
        "name": "京津冀",
        "change_pct": -2.4
      },
      {
        "name": "风电",
        "change_pct": -1.81
      },
      {
        "name": "国企改革",
        "change_pct": -2.26
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 38,
    "hot_rank_chg": 0,
    "stock_cnt": 5706,
    "price": "7.32",
    "change": "-2.01",
    "market_id": "17",
    "circulate_market_value": "90739372000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.07
      },
      {
        "name": "核电",
        "change_pct": -2.3
      },
      {
        "name": "强势人气股",
        "change_pct": -0.84
      },
      {
        "name": "电力体制改革",
        "change_pct": -2.04
      },
      {
        "name": "水电",
        "change_pct": -1.58
      },
      {
        "name": "火电",
        "change_pct": -2.48
      },
      {
        "name": "光伏",
        "change_pct": -1.17
      },
      {
        "name": "风电",
        "change_pct": -1.81
      },
      {
        "name": "国企改革",
        "change_pct": -2.26
      },
      {
        "name": "算电协同",
        "change_pct": -3.07
      }
    ]
  },
  {
    "code": "300088",
    "name": "长信科技",
    "hot_rank": 46,
    "hot_rank_chg": 3,
    "stock_cnt": 5706,
    "price": "11.67",
    "change": "13.41",
    "market_id": "33",
    "circulate_market_value": "29005813000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -3.02
      },
      {
        "name": "长三角一体化",
        "change_pct": -2.58
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.97
      },
      {
        "name": "折叠屏",
        "change_pct": -1.63
      },
      {
        "name": "手机产业链",
        "change_pct": -2.04
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.73
      },
      {
        "name": "特斯拉",
        "change_pct": -3.36
      },
      {
        "name": "无人驾驶",
        "change_pct": -3.03
      },
      {
        "name": "石墨烯",
        "change_pct": -3.49
      },
      {
        "name": "VR&AR",
        "change_pct": -1.4
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.37
      },
      {
        "name": "OLED",
        "change_pct": -0.13
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.66
      },
      {
        "name": "大数据",
        "change_pct": -3.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -2.18
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.2
      },
      {
        "name": "MicroLED",
        "change_pct": 0.24
      },
      {
        "name": "元宇宙",
        "change_pct": -2.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.87
      },
      {
        "name": "电子后视镜",
        "change_pct": -2.16
      },
      {
        "name": "国企改革",
        "change_pct": -2.26
      },
      {
        "name": "智能手表",
        "change_pct": -3.24
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 49,
    "hot_rank_chg": 18,
    "stock_cnt": 5706,
    "price": "9.66",
    "change": "7.45",
    "market_id": "33",
    "circulate_market_value": "18137827000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.26
      },
      {
        "name": "光伏",
        "change_pct": -1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.45
      },
      {
        "name": "新能源车零部件",
        "change_pct": -3.27
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.27
      },
      {
        "name": "氮化镓",
        "change_pct": -1.27
      },
      {
        "name": "碳化硅",
        "change_pct": -1.55
      },
      {
        "name": "地摊经济",
        "change_pct": -2.83
      },
      {
        "name": "人形机器人",
        "change_pct": -2.79
      }
    ]
  },
  {
    "code": "600545",
    "name": "卓郎智能",
    "hot_rank": 51,
    "hot_rank_chg": 7,
    "stock_cnt": 5706,
    "price": "7.10",
    "change": "10.08",
    "market_id": "17",
    "circulate_market_value": "12694176800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "电子布设备",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -2.25
      },
      {
        "name": "工业自动化",
        "change_pct": -2.6
      },
      {
        "name": "新疆概念",
        "change_pct": -2.29
      },
      {
        "name": "玻纤",
        "change_pct": 3.8
      },
      {
        "name": "智能制造",
        "change_pct": -2.57
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.09
      }
    ]
  },
  {
    "code": "601636",
    "name": "旗滨集团",
    "hot_rank": 63,
    "hot_rank_chg": 9,
    "stock_cnt": 5706,
    "price": "8.93",
    "change": "6.95",
    "market_id": "17",
    "circulate_market_value": "26420778000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -1.57
      },
      {
        "name": "玻璃",
        "change_pct": 0.07
      },
      {
        "name": "光伏",
        "change_pct": -1.17
      },
      {
        "name": "回购",
        "change_pct": -2.27
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 70,
    "hot_rank_chg": 33,
    "stock_cnt": 5706,
    "price": "12.54",
    "change": "1.87",
    "market_id": "17",
    "circulate_market_value": "63206371000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.07
      },
      {
        "name": "军民融合",
        "change_pct": -2.37
      },
      {
        "name": "有色 · 锑",
        "change_pct": -3.65
      },
      {
        "name": "有色 · 钼",
        "change_pct": -3.31
      },
      {
        "name": "有色 · 锌",
        "change_pct": -4.45
      },
      {
        "name": "有色金属",
        "change_pct": -3.5
      },
      {
        "name": "军工",
        "change_pct": -2.17
      },
      {
        "name": "硫酸",
        "change_pct": -3.02
      },
      {
        "name": "国企改革",
        "change_pct": -2.26
      },
      {
        "name": "白银",
        "change_pct": -4.51
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -3.09
      },
      {
        "name": "光纤概念",
        "change_pct": -4.09
      },
      {
        "name": "有色 · 铋",
        "change_pct": -3.56
      }
    ]
  },
  {
    "code": "002456",
    "name": "欧菲光",
    "hot_rank": 71,
    "hot_rank_chg": -1,
    "stock_cnt": 5706,
    "price": "9.52",
    "change": "8.80",
    "market_id": "33",
    "circulate_market_value": "31583695000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.63
      },
      {
        "name": "手机产业链",
        "change_pct": -2.04
      },
      {
        "name": "超高清视频",
        "change_pct": -2.02
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.25
      },
      {
        "name": "股权转让",
        "change_pct": -1.66
      },
      {
        "name": "无人驾驶",
        "change_pct": -3.03
      },
      {
        "name": "VR&AR",
        "change_pct": -1.4
      },
      {
        "name": "3D感应",
        "change_pct": 0.87
      },
      {
        "name": "人脸识别",
        "change_pct": -2.08
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.66
      },
      {
        "name": "指纹识别",
        "change_pct": -0.54
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.8
      },
      {
        "name": "虹膜识别",
        "change_pct": -2.52
      },
      {
        "name": "机器人",
        "change_pct": -2.93
      },
      {
        "name": "机器视觉",
        "change_pct": -2.05
      },
      {
        "name": "无人机",
        "change_pct": -2.0
      },
      {
        "name": "智能制造",
        "change_pct": -2.57
      },
      {
        "name": "小米概念股",
        "change_pct": -2.18
      },
      {
        "name": "激光雷达",
        "change_pct": -2.64
      },
      {
        "name": "元宇宙",
        "change_pct": -2.35
      },
      {
        "name": "电子后视镜",
        "change_pct": -2.16
      },
      {
        "name": "传感器",
        "change_pct": -2.02
      },
      {
        "name": "华为产业链",
        "change_pct": -2.92
      },
      {
        "name": "毫米波雷达",
        "change_pct": -3.05
      },
      {
        "name": "星闪概念",
        "change_pct": -3.32
      },
      {
        "name": "智能座舱",
        "change_pct": -3.1
      }
    ]
  },
  {
    "code": "300162",
    "name": "雷曼光电",
    "hot_rank": 79,
    "hot_rank_chg": 23,
    "stock_cnt": 5706,
    "price": "12.13",
    "change": "19.98",
    "market_id": "33",
    "circulate_market_value": "4150422400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玻璃基Micro LED",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.87
      },
      {
        "name": "超高清视频",
        "change_pct": -2.02
      },
      {
        "name": "人工智能",
        "change_pct": -3.19
      },
      {
        "name": "足球",
        "change_pct": -0.97
      },
      {
        "name": "教育",
        "change_pct": -1.63
      },
      {
        "name": "LED",
        "change_pct": -1.1
      },
      {
        "name": "MicroLED",
        "change_pct": 0.24
      },
      {
        "name": "华为海思",
        "change_pct": -2.59
      },
      {
        "name": "教育信息化",
        "change_pct": -2.59
      },
      {
        "name": "远程办公",
        "change_pct": -3.16
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 87,
    "hot_rank_chg": 21,
    "stock_cnt": 5706,
    "price": "10.53",
    "change": "-5.98",
    "market_id": "17",
    "circulate_market_value": "31320234000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.53
      },
      {
        "name": "禽流感",
        "change_pct": -3.05
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -2.16
      },
      {
        "name": "农药",
        "change_pct": -1.71
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -1.6
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.84
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002354", "name": "天娱数科", "hot_rank": 1, "hot_rank_chg": 6, "stock_cnt": 5706, "price": "8.83", "change": "9.96", "market_id": "33", "circulate_market_value": "14354876000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.41}, {"name": "电竞", "change_pct": -2.4}, {"name": "手游", "change_pct": -2.22}, {"name": "强势人气股", "change_pct": -0.84}, {"name": "人工智能", "change_pct": -3.19}, {"name": "游戏", "change_pct": -2.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.61}, {"name": "腾讯概念股", "change_pct": -3.8}, {"name": "快手概念股", "change_pct": -3.92}, {"name": "元宇宙", "change_pct": -2.35}, {"name": "虚拟数字人", "change_pct": -2.82}, {"name": "东数西算/算力", "change_pct": -3.87}, {"name": "web3.0", "change_pct": -3.27}, {"name": "AIGC概念", "change_pct": -3.58}, {"name": "数据要素", "change_pct": -3.6}, {"name": "字节跳动概念股", "change_pct": -3.76}, {"name": "AI营销", "change_pct": -3.17}, {"name": "ChatGPT", "change_pct": -3.94}, {"name": "智能眼镜/MR头显", "change_pct": -2.1}, {"name": "人工智能大模型", "change_pct": -4.14}, {"name": "人形机器人", "change_pct": -2.79}, {"name": "短剧/互动影游", "change_pct": -2.93}, {"name": "多模态", "change_pct": -3.92}, {"name": "Sora/AI视频", "change_pct": -3.84}, {"name": "IP经济/谷子经济", "change_pct": -2.67}, {"name": "小红书概念股", "change_pct": -2.98}]}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "7.79", "change": "3.59", "market_id": "33", "circulate_market_value": "275509970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.11}, {"name": "折叠屏", "change_pct": -1.63}, {"name": "手机产业链", "change_pct": -2.04}, {"name": "超高清视频", "change_pct": -2.02}, {"name": "苹果产业链", "change_pct": -2.73}, {"name": "半导体", "change_pct": -0.26}, {"name": "人工智能", "change_pct": -3.19}, {"name": "互联网医疗", "change_pct": -3.74}, {"name": "VR&AR", "change_pct": -1.4}, {"name": "OLED", "change_pct": -0.13}, {"name": "京津冀", "change_pct": -2.4}, {"name": "物联网", "change_pct": -3.15}, {"name": "指纹识别", "change_pct": -0.54}, {"name": "汽车零部件", "change_pct": -2.8}, {"name": "白马股", "change_pct": -2.2}, {"name": "智能制造", "change_pct": -2.57}, {"name": "小米概念股", "change_pct": -2.18}, {"name": "国产芯片", "change_pct": -1.37}, {"name": "液晶面板/LCD", "change_pct": 0.2}, {"name": "全息概念", "change_pct": -2.54}, {"name": "理想汽车概念股", "change_pct": -2.89}, {"name": "MicroLED", "change_pct": 0.24}, {"name": "钙钛矿电池", "change_pct": -0.45}, {"name": "智能手表", "change_pct": -3.24}, {"name": "MiniLED", "change_pct": -0.51}, {"name": "传感器", "change_pct": -2.02}, {"name": "大硅片", "change_pct": 4.78}, {"name": "AI PC", "change_pct": -2.69}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "回购", "change_pct": -2.27}, {"name": "智能眼镜/MR头显", "change_pct": -2.1}, {"name": "玻璃基板封装", "change_pct": 1.25}]}, {"code": "001399", "name": "惠科股份", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "42.00", "change": "315.02", "market_id": "33", "circulate_market_value": "18083803000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "60.76", "change": "8.19", "market_id": "17", "circulate_market_value": "51436580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "26.88", "change": "6.20", "market_id": "17", "circulate_market_value": "56220654000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 6, "hot_rank_chg": 9, "stock_cnt": 5706, "price": "41.51", "change": "-5.21", "market_id": "33", "circulate_market_value": "44779632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "100.89", "change": "-3.15", "market_id": "17", "circulate_market_value": "180534040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "61.29", "change": "-10.00", "market_id": "17", "circulate_market_value": "209179680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 9, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "11.19", "change": "10.03", "market_id": "33", "circulate_market_value": "45205136000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片", "xgb_concepts": [{"name": "半导体", "change_pct": -0.26}, {"name": "一带一路", "change_pct": -2.25}, {"name": "京津冀", "change_pct": -2.4}, {"name": "光伏", "change_pct": -1.17}, {"name": "碳中和", "change_pct": -2.27}, {"name": "国产芯片", "change_pct": -1.37}, {"name": "IGBT", "change_pct": -1.98}, {"name": "颗粒硅", "change_pct": 0.83}, {"name": "异质结电池HJT", "change_pct": 0.04}, {"name": "大硅片", "change_pct": 4.78}]}, {"code": "600552", "name": "凯盛科技", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5706, "price": "29.60", "change": "10.00", "market_id": "17", "circulate_market_value": "27960364000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板TGV"}, {"code": "000823", "name": "超声电子", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5706, "price": "28.46", "change": "10.01", "market_id": "33", "circulate_market_value": "16931769000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "转债摘牌"}, {"code": "002185", "name": "华天科技", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "22.56", "change": "0.71", "market_id": "33", "circulate_market_value": "74959024000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 13, "hot_rank_chg": -3, "stock_cnt": 5706, "price": "951.00", "change": "6.73", "market_id": "33", "circulate_market_value": "156834000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5706, "price": "110.81", "change": "-9.91", "market_id": "17", "circulate_market_value": "270950520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "74.12", "change": "4.69", "market_id": "17", "circulate_market_value": "296712490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 16, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "297.00", "change": "7.31", "market_id": "17", "circulate_market_value": "261279070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "21.73", "change": "0.28", "market_id": "17", "circulate_market_value": "108411377000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 18, "hot_rank_chg": 14, "stock_cnt": 5706, "price": "16.65", "change": "-8.87", "market_id": "17", "circulate_market_value": "21249658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 19, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "37.02", "change": "10.02", "market_id": "33", "circulate_market_value": "13893014000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体封装材料"}, {"code": "002579", "name": "中京电子", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5706, "price": "22.78", "change": "6.95", "market_id": "33", "circulate_market_value": "13290122900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5706, "price": "75.37", "change": "6.91", "market_id": "17", "circulate_market_value": "58200667000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 22, "hot_rank_chg": 11, "stock_cnt": 5706, "price": "5.76", "change": "9.92", "market_id": "33", "circulate_market_value": "5949710200.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "PCB上游", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.53}, {"name": "锂电池", "change_pct": -4.21}, {"name": "ST摘帽", "change_pct": -1.24}, {"name": "强势人气股", "change_pct": -0.84}, {"name": "粤港澳大湾区", "change_pct": -1.99}, {"name": "新能源汽车", "change_pct": -3.45}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.7}]}, {"code": "000021", "name": "深科技", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "53.51", "change": "0.58", "market_id": "33", "circulate_market_value": "84232182000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 24, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "770.00", "change": "-0.67", "market_id": "17", "circulate_market_value": "514738790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 25, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "28.83", "change": "10.00", "market_id": "33", "circulate_market_value": "8434610100.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "磷化铟收购"}, {"code": "600367", "name": "红星发展", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5706, "price": "58.28", "change": "10.00", "market_id": "17", "circulate_market_value": "18764597000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板上游"}, {"code": "000100", "name": "TCL科技", "hot_rank": 27, "hot_rank_chg": 8, "stock_cnt": 5706, "price": "5.40", "change": "1.12", "market_id": "33", "circulate_market_value": "103312985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.63}, {"name": "手机产业链", "change_pct": -2.04}, {"name": "超高清视频", "change_pct": -2.02}, {"name": "半导体", "change_pct": -0.26}, {"name": "OLED", "change_pct": -0.13}, {"name": "光伏", "change_pct": -1.17}, {"name": "黑色家电", "change_pct": -2.42}, {"name": "家电", "change_pct": -2.36}, {"name": "智能制造", "change_pct": -2.57}, {"name": "工业互联网", "change_pct": -2.93}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.18}, {"name": "国产芯片", "change_pct": -1.37}, {"name": "腾讯概念股", "change_pct": -3.8}, {"name": "液晶面板/LCD", "change_pct": 0.2}, {"name": "MicroLED", "change_pct": 0.24}, {"name": "MiniLED", "change_pct": -0.51}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "玻璃基板封装", "change_pct": 1.25}]}, {"code": "603629", "name": "利通电子", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "187.09", "change": "-10.00", "market_id": "17", "circulate_market_value": "48275020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 29, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "85.83", "change": "10.00", "market_id": "17", "circulate_market_value": "52740251000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "光刻胶树脂"}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 30, "hot_rank_chg": 4, "stock_cnt": 5706, "price": "21.85", "change": "8.54", "market_id": "17", "circulate_market_value": "9154441400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "3.42", "change": "9.97", "market_id": "33", "circulate_market_value": "15977381000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.11}, {"name": "体育产业", "change_pct": -1.87}, {"name": "房地产", "change_pct": -1.59}, {"name": "京津冀", "change_pct": -2.4}, {"name": "旅游", "change_pct": -2.25}, {"name": "国产芯片", "change_pct": -1.37}, {"name": "内存", "change_pct": -0.92}, {"name": "闪存", "change_pct": -2.79}, {"name": "IP经济/谷子经济", "change_pct": -2.67}]}, {"code": "605366", "name": "宏柏新材", "hot_rank": 32, "hot_rank_chg": 9, "stock_cnt": 5706, "price": "14.38", "change": "10.02", "market_id": "17", "circulate_market_value": "11113262300.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "光纤概念"}, {"code": "600460", "name": "士兰微", "hot_rank": 33, "hot_rank_chg": 4, "stock_cnt": 5706, "price": "50.38", "change": "1.04", "market_id": "17", "circulate_market_value": "83835940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 34, "hot_rank_chg": -15, "stock_cnt": 5706, "price": "151.27", "change": "-1.00", "market_id": "33", "circulate_market_value": "144724150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601016", "name": "节能风电", "hot_rank": 35, "hot_rank_chg": 5, "stock_cnt": 5706, "price": "3.94", "change": "10.06", "market_id": "17", "circulate_market_value": "23790728000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "绿色电力", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.07}, {"name": "京津冀", "change_pct": -2.4}, {"name": "风电", "change_pct": -1.81}, {"name": "国企改革", "change_pct": -2.26}]}, {"code": "601138", "name": "工业富联", "hot_rank": 36, "hot_rank_chg": -5, "stock_cnt": 5706, "price": "70.22", "change": "-8.79", "market_id": "17", "circulate_market_value": "1393452200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 37, "hot_rank_chg": -11, "stock_cnt": 5706, "price": "77.77", "change": "10.00", "market_id": "17", "circulate_market_value": "91962180000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "601991", "name": "大唐发电", "hot_rank": 38, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "7.32", "change": "-2.01", "market_id": "17", "circulate_market_value": "90739372000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.07}, {"name": "核电", "change_pct": -2.3}, {"name": "强势人气股", "change_pct": -0.84}, {"name": "电力体制改革", "change_pct": -2.04}, {"name": "水电", "change_pct": -1.58}, {"name": "火电", "change_pct": -2.48}, {"name": "光伏", "change_pct": -1.17}, {"name": "风电", "change_pct": -1.81}, {"name": "国企改革", "change_pct": -2.26}, {"name": "算电协同", "change_pct": -3.07}]}, {"code": "301526", "name": "国际复材", "hot_rank": 39, "hot_rank_chg": 3, "stock_cnt": 5706, "price": "52.27", "change": "9.17", "market_id": "33", "circulate_market_value": "73407618000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 40, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "78.50", "change": "-1.41", "market_id": "33", "circulate_market_value": "90825529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 41, "hot_rank_chg": -11, "stock_cnt": 5706, "price": "1253.89", "change": "-5.25", "market_id": "33", "circulate_market_value": "1391742400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 42, "hot_rank_chg": 2, "stock_cnt": 5706, "price": "188.60", "change": "4.18", "market_id": "33", "circulate_market_value": "60073390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 43, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "178.00", "change": "3.49", "market_id": "17", "circulate_market_value": "39992797000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 44, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "71.60", "change": "-7.98", "market_id": "33", "circulate_market_value": "108649579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 45, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "23.33", "change": "6.53", "market_id": "33", "circulate_market_value": "78470574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300088", "name": "长信科技", "hot_rank": 46, "hot_rank_chg": 3, "stock_cnt": 5706, "price": "11.67", "change": "13.41", "market_id": "33", "circulate_market_value": "29005813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -3.02}, {"name": "长三角一体化", "change_pct": -2.58}, {"name": "车联网/车路云", "change_pct": -2.97}, {"name": "折叠屏", "change_pct": -1.63}, {"name": "手机产业链", "change_pct": -2.04}, {"name": "苹果产业链", "change_pct": -2.73}, {"name": "特斯拉", "change_pct": -3.36}, {"name": "无人驾驶", "change_pct": -3.03}, {"name": "石墨烯", "change_pct": -3.49}, {"name": "VR&AR", "change_pct": -1.4}, {"name": "安徽国企改革", "change_pct": -1.37}, {"name": "OLED", "change_pct": -0.13}, {"name": "3D玻璃", "change_pct": 0.66}, {"name": "大数据", "change_pct": -3.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -2.18}, {"name": "液晶面板/LCD", "change_pct": 0.2}, {"name": "MicroLED", "change_pct": 0.24}, {"name": "元宇宙", "change_pct": -2.35}, {"name": "东数西算/算力", "change_pct": -3.87}, {"name": "电子后视镜", "change_pct": -2.16}, {"name": "国企改革", "change_pct": -2.26}, {"name": "智能手表", "change_pct": -3.24}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "玻璃基板封装", "change_pct": 1.25}]}, {"code": "688432", "name": "有研硅", "hot_rank": 47, "hot_rank_chg": 31, "stock_cnt": 5706, "price": "30.90", "change": "20.00", "market_id": "17", "circulate_market_value": "38634327000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片"}, {"code": "600141", "name": "兴发集团", "hot_rank": 48, "hot_rank_chg": 2, "stock_cnt": 5706, "price": "48.80", "change": "2.78", "market_id": "17", "circulate_market_value": "58644905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 49, "hot_rank_chg": 18, "stock_cnt": 5706, "price": "9.66", "change": "7.45", "market_id": "33", "circulate_market_value": "18137827000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.26}, {"name": "光伏", "change_pct": -1.17}, {"name": "新能源汽车", "change_pct": -3.45}, {"name": "新能源车零部件", "change_pct": -3.27}, {"name": "第三代半导体", "change_pct": -1.27}, {"name": "氮化镓", "change_pct": -1.27}, {"name": "碳化硅", "change_pct": -1.55}, {"name": "地摊经济", "change_pct": -2.83}, {"name": "人形机器人", "change_pct": -2.79}]}, {"code": "603002", "name": "宏昌电子", "hot_rank": 50, "hot_rank_chg": 1, "stock_cnt": 5706, "price": "26.23", "change": "5.13", "market_id": "17", "circulate_market_value": "29746879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600545", "name": "卓郎智能", "hot_rank": 51, "hot_rank_chg": 7, "stock_cnt": 5706, "price": "7.10", "change": "10.08", "market_id": "17", "circulate_market_value": "12694176800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "电子布设备", "xgb_concepts": [{"name": "一带一路", "change_pct": -2.25}, {"name": "工业自动化", "change_pct": -2.6}, {"name": "新疆概念", "change_pct": -2.29}, {"name": "玻纤", "change_pct": 3.8}, {"name": "智能制造", "change_pct": -2.57}, {"name": "新冠病毒防治", "change_pct": -3.09}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 52, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "13.96", "change": "2.42", "market_id": "17", "circulate_market_value": "50083869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 53, "hot_rank_chg": -7, "stock_cnt": 5706, "price": "120.48", "change": "-7.39", "market_id": "33", "circulate_market_value": "78677732000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002106", "name": "莱宝高科", "hot_rank": 54, "hot_rank_chg": 11, "stock_cnt": 5706, "price": "15.62", "change": "10.00", "market_id": "33", "circulate_market_value": "11010576500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板封装"}, {"code": "600396", "name": "华电辽能", "hot_rank": 55, "hot_rank_chg": 0, "stock_cnt": 5706, "price": "15.37", "change": "0.85", "market_id": "17", "circulate_market_value": "22635504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 56, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "75.81", "change": "8.80", "market_id": "17", "circulate_market_value": "29006763000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 57, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "52.31", "change": "4.62", "market_id": "17", "circulate_market_value": "34115102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 58, "hot_rank_chg": 2, "stock_cnt": 5706, "price": "98.76", "change": "0.96", "market_id": "17", "circulate_market_value": "144491250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 59, "hot_rank_chg": -12, "stock_cnt": 5706, "price": "65.71", "change": "-9.94", "market_id": "17", "circulate_market_value": "96067678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 60, "hot_rank_chg": -6, "stock_cnt": 5706, "price": "18.57", "change": "-9.28", "market_id": "33", "circulate_market_value": "59898925000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 61, "hot_rank_chg": -4, "stock_cnt": 5706, "price": "102.81", "change": "4.48", "market_id": "33", "circulate_market_value": "87765671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 62, "hot_rank_chg": 15, "stock_cnt": 5706, "price": "501.05", "change": "4.32", "market_id": "17", "circulate_market_value": "236278470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601636", "name": "旗滨集团", "hot_rank": 63, "hot_rank_chg": 9, "stock_cnt": 5706, "price": "8.93", "change": "6.95", "market_id": "17", "circulate_market_value": "26420778000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -1.57}, {"name": "玻璃", "change_pct": 0.07}, {"name": "光伏", "change_pct": -1.17}, {"name": "回购", "change_pct": -2.27}, {"name": "玻璃基板封装", "change_pct": 1.25}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 64, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "68.00", "change": "-8.63", "market_id": "33", "circulate_market_value": "496503910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 65, "hot_rank_chg": 8, "stock_cnt": 5706, "price": "24.94", "change": "5.19", "market_id": "17", "circulate_market_value": "15671301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 66, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "76.22", "change": "-10.00", "market_id": "17", "circulate_market_value": "96922987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300398", "name": "飞凯材料", "hot_rank": 67, "hot_rank_chg": 8, "stock_cnt": 5706, "price": "61.29", "change": "8.17", "market_id": "33", "circulate_market_value": "34747571000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 68, "hot_rank_chg": 12, "stock_cnt": 5706, "price": "354.78", "change": "7.51", "market_id": "33", "circulate_market_value": "78447458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 69, "hot_rank_chg": 5, "stock_cnt": 5706, "price": "62.30", "change": "-8.92", "market_id": "17", "circulate_market_value": "66820822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 70, "hot_rank_chg": 33, "stock_cnt": 5706, "price": "12.54", "change": "1.87", "market_id": "17", "circulate_market_value": "63206371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.07}, {"name": "军民融合", "change_pct": -2.37}, {"name": "有色 · 锑", "change_pct": -3.65}, {"name": "有色 · 钼", "change_pct": -3.31}, {"name": "有色 · 锌", "change_pct": -4.45}, {"name": "有色金属", "change_pct": -3.5}, {"name": "军工", "change_pct": -2.17}, {"name": "硫酸", "change_pct": -3.02}, {"name": "国企改革", "change_pct": -2.26}, {"name": "白银", "change_pct": -4.51}, {"name": "新冠病毒防治", "change_pct": -3.09}, {"name": "光纤概念", "change_pct": -4.09}, {"name": "有色 · 铋", "change_pct": -3.56}]}, {"code": "002456", "name": "欧菲光", "hot_rank": 71, "hot_rank_chg": -1, "stock_cnt": 5706, "price": "9.52", "change": "8.80", "market_id": "33", "circulate_market_value": "31583695000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.63}, {"name": "手机产业链", "change_pct": -2.04}, {"name": "超高清视频", "change_pct": -2.02}, {"name": "深圳本地股", "change_pct": -2.25}, {"name": "股权转让", "change_pct": -1.66}, {"name": "无人驾驶", "change_pct": -3.03}, {"name": "VR&AR", "change_pct": -1.4}, {"name": "3D感应", "change_pct": 0.87}, {"name": "人脸识别", "change_pct": -2.08}, {"name": "3D玻璃", "change_pct": 0.66}, {"name": "指纹识别", "change_pct": -0.54}, {"name": "汽车零部件", "change_pct": -2.8}, {"name": "虹膜识别", "change_pct": -2.52}, {"name": "机器人", "change_pct": -2.93}, {"name": "机器视觉", "change_pct": -2.05}, {"name": "无人机", "change_pct": -2.0}, {"name": "智能制造", "change_pct": -2.57}, {"name": "小米概念股", "change_pct": -2.18}, {"name": "激光雷达", "change_pct": -2.64}, {"name": "元宇宙", "change_pct": -2.35}, {"name": "电子后视镜", "change_pct": -2.16}, {"name": "传感器", "change_pct": -2.02}, {"name": "华为产业链", "change_pct": -2.92}, {"name": "毫米波雷达", "change_pct": -3.05}, {"name": "星闪概念", "change_pct": -3.32}, {"name": "智能座舱", "change_pct": -3.1}]}, {"code": "002384", "name": "东山精密", "hot_rank": 72, "hot_rank_chg": -13, "stock_cnt": 5706, "price": "260.32", "change": "-5.61", "market_id": "33", "circulate_market_value": "360887270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 73, "hot_rank_chg": 17, "stock_cnt": 5706, "price": "78.12", "change": "4.55", "market_id": "33", "circulate_market_value": "51245942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 74, "hot_rank_chg": -6, "stock_cnt": 5706, "price": "566.00", "change": "-7.29", "market_id": "33", "circulate_market_value": "709901630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 75, "hot_rank_chg": -14, "stock_cnt": 5706, "price": "178.50", "change": "-4.65", "market_id": "17", "circulate_market_value": "427418530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601133", "name": "柏诚股份", "hot_rank": 77, "hot_rank_chg": 6, "stock_cnt": 5706, "price": "38.28", "change": "10.00", "market_id": "17", "circulate_market_value": "20073525000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "半导体洁净室"}, {"code": "000657", "name": "中钨高新", "hot_rank": 78, "hot_rank_chg": -9, "stock_cnt": 5706, "price": "99.51", "change": "-5.84", "market_id": "33", "circulate_market_value": "144580600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300162", "name": "雷曼光电", "hot_rank": 79, "hot_rank_chg": 23, "stock_cnt": 5706, "price": "12.13", "change": "19.98", "market_id": "33", "circulate_market_value": "4150422400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基Micro LED", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.87}, {"name": "超高清视频", "change_pct": -2.02}, {"name": "人工智能", "change_pct": -3.19}, {"name": "足球", "change_pct": -0.97}, {"name": "教育", "change_pct": -1.63}, {"name": "LED", "change_pct": -1.1}, {"name": "MicroLED", "change_pct": 0.24}, {"name": "华为海思", "change_pct": -2.59}, {"name": "教育信息化", "change_pct": -2.59}, {"name": "远程办公", "change_pct": -3.16}, {"name": "玻璃基板封装", "change_pct": 1.25}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 80, "hot_rank_chg": 19, "stock_cnt": 5706, "price": "22.75", "change": "-10.01", "market_id": "33", "circulate_market_value": "10290707700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 81, "hot_rank_chg": -15, "stock_cnt": 5706, "price": "1168.63", "change": "-1.30", "market_id": "17", "circulate_market_value": "1460882900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 82, "hot_rank_chg": -26, "stock_cnt": 5706, "price": "50.01", "change": "-9.40", "market_id": "33", "circulate_market_value": "75465641000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 83, "hot_rank_chg": 5, "stock_cnt": 5706, "price": "679.60", "change": "0.34", "market_id": "33", "circulate_market_value": "191546550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 84, "hot_rank_chg": 7, "stock_cnt": 5706, "price": "21.56", "change": "-5.31", "market_id": "33", "circulate_market_value": "16357851000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 85, "hot_rank_chg": 2, "stock_cnt": 5706, "price": "118.18", "change": "0.82", "market_id": "17", "circulate_market_value": "292292260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 86, "hot_rank_chg": 3, "stock_cnt": 5706, "price": "35.49", "change": "2.66", "market_id": "17", "circulate_market_value": "13591401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 87, "hot_rank_chg": 21, "stock_cnt": 5706, "price": "10.53", "change": "-5.98", "market_id": "17", "circulate_market_value": "31320234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.53}, {"name": "禽流感", "change_pct": -3.05}, {"name": "铜箔/覆铜板", "change_pct": -2.16}, {"name": "农药", "change_pct": -1.71}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -1.6}, {"name": "PET复合铜箔", "change_pct": -1.84}]}, {"code": "002491", "name": "通鼎互联", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5706, "price": "36.15", "change": "-6.10", "market_id": "33", "circulate_market_value": "42529350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002965", "name": "祥鑫科技", "hot_rank": 89, "hot_rank_chg": 22, "stock_cnt": 5706, "price": "51.88", "change": "10.01", "market_id": "33", "circulate_market_value": "9878767000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "收购酷尔芯"}, {"code": "002281", "name": "光迅科技", "hot_rank": 90, "hot_rank_chg": -19, "stock_cnt": 5706, "price": "240.34", "change": "-8.08", "market_id": "33", "circulate_market_value": "187584970000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 91, "hot_rank_chg": -5, "stock_cnt": 5706, "price": "15.29", "change": "-3.04", "market_id": "17", "circulate_market_value": "26530916000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 92, "hot_rank_chg": -30, "stock_cnt": 5706, "price": "78.20", "change": "-4.87", "market_id": "33", "circulate_market_value": "272653180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 93, "hot_rank_chg": -8, "stock_cnt": 5706, "price": "543.00", "change": "-5.57", "market_id": "17", "circulate_market_value": "220641700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 94, "hot_rank_chg": -10, "stock_cnt": 5706, "price": "16.81", "change": "-9.62", "market_id": "33", "circulate_market_value": "25648384000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 95, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "14.30", "change": "-8.33", "market_id": "17", "circulate_market_value": "25584678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000703", "name": "恒逸石化", "hot_rank": 96, "hot_rank_chg": -20, "stock_cnt": 5706, "price": "16.67", "change": "7.34", "market_id": "33", "circulate_market_value": "63377917000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 97, "hot_rank_chg": -2, "stock_cnt": 5706, "price": "97.67", "change": "5.10", "market_id": "33", "circulate_market_value": "163902330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002962", "name": "五方光电", "hot_rank": 98, "hot_rank_chg": 11, "stock_cnt": 5706, "price": "19.34", "change": "10.01", "market_id": "33", "circulate_market_value": "4045618700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "TGV产品"}, {"code": "605589", "name": "圣泉集团", "hot_rank": 99, "hot_rank_chg": 8, "stock_cnt": 5706, "price": "66.71", "change": "-8.57", "market_id": "17", "circulate_market_value": "56431256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002741", "name": "光华科技", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5706, "price": "39.11", "change": "6.13", "market_id": "33", "circulate_market_value": "16674870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603270", "name": "金帝股份", "price": 31.59, "change_pct": 9.99, "reason": "1、公司在减速器领域主要有谐波减速机保持架、谐波减速机带齿保持架两类产品，谐波减速机保持架是针对机器人手指关节设计的一款保持架产品；\n2、公司主营轴承保持架和汽车精密零部件两大类产品；\n3、公司风电行业保持架产品包括变桨保持架、齿轮箱保持架、主轴保持架和偏航保持架等4种，系风电设备轴承的主要元件，对风电设备轴承的正常运转起到至关重要的作用\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.96, "first_limit_up": 1782438961, "break_limit_up_times": 0}, {"code": "601016", "name": "节能风电", "price": 3.94, "change_pct": 10.06, "reason": "公司是纯正的风电运营商，公告称股东张家玮并非演员张凌赫", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.68, "first_limit_up": 1782438113, "break_limit_up_times": 1}, {"code": "603163", "name": "圣晖集成", "price": 135.58, "change_pct": 10.0, "reason": "公司提供英诺赛科（苏州）半导体禅额眼帘洁净室工程服务，核心技术覆盖气流管理、微分子污染控制等领域，已实现量产配套", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.68, "first_limit_up": 1782437999, "break_limit_up_times": 0}, {"code": "000056", "name": "*ST皇庭", "price": 2.07, "change_pct": 5.08, "reason": "1、控股子公司意发功率核心产品为FRD等硅基功率半导体，同时具有IGBT设计能力，目前其拥有2条生产线，已稳定生产6英寸晶圆；\n2、公司实施“高新科技+商业管理”双主业战略，商业管理以“自持+整租+委托管理”模式布局粤港澳大湾区及全国一二线城市核心地段，旗下深圳皇庭广场已成为区域购物中心标识之一", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 3.11, "first_limit_up": 1782437499, "break_limit_up_times": 1}, {"code": "002180", "name": "奔图科技", "price": 14.55, "change_pct": 9.98, "reason": "公司相关数模混合芯片产品已面向宇树科技批量出货", "plates": ["国产芯片", "机器人"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1782450696, "break_limit_up_times": 6}, {"code": "603722", "name": "阿科力", "price": 39.6, "change_pct": 10.0, "reason": "公司环烯烃共聚物通过光学镜头领域客户验证并批量供货", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.95, "first_limit_up": 1782451088, "break_limit_up_times": 0}, {"code": "600481", "name": "双良节能", "price": 4.84, "change_pct": 10.0, "reason": "公司获得3个海外订单，共计12台高效换热器设备，将用于Space X星舰发射基地扩建配套的燃料生产系统。", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1782438391, "break_limit_up_times": 1}, {"code": "300264", "name": "佳创视讯", "price": 9.77, "change_pct": 20.02, "reason": "公司2026年将在音视频软件业务方面结合AI技术应用，逐步实现核心产品智能化改造，提升市场占有率", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 13.64, "first_limit_up": 1782450372, "break_limit_up_times": 18}, {"code": "603194", "name": "中力股份", "price": 36.89, "change_pct": 9.99, "reason": "公司机器人产品已在电商物流、汽车行业、汽车零部件行业、机场物流、酒业及包装等行业领域实现了规模化应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.85, "first_limit_up": 1782451838, "break_limit_up_times": 1}, {"code": "002354", "name": "天娱数科", "price": 8.83, "change_pct": 9.96, "reason": "公司拥有智者千问、天星、智慧广告三款企业级大模型，推进具身智能平台建设，完成“人形机器人空间6D动捕长程数据”等5个数据集资产登记，积累超120万条3D数据及10万机器人任务训练数据，为相关场景提供解决方案", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 30.43, "first_limit_up": 1782439737, "break_limit_up_times": 1}, {"code": "603377", "name": "ST东时", "price": 2.98, "change_pct": 4.93, "reason": "因涉嫌信披违法北京证监局拟对公司处以180万元罚款", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.05, "first_limit_up": 1782439175, "break_limit_up_times": 7}, {"code": "002253", "name": "川大智胜", "price": 10.87, "change_pct": 10.02, "reason": "ST摘帽—公司为军航空管龙头，军航空管现用设备三分之二由公司提供", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.0, "first_limit_up": 1782437625, "break_limit_up_times": 2}, {"code": "001270", "name": "铖昌科技", "price": 139.43, "change_pct": 10.0, "reason": "公司主营微波毫米波模拟相控阵T/R芯片", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.32, "first_limit_up": 1782440517, "break_limit_up_times": 24}, {"code": "301051", "name": "信濠光电", "price": 20.96, "change_pct": 19.98, "reason": "1、公司是国内规模较大的专业玻璃防护屏供应商，产品最终应用于华为、vivo、OPPO、三星、小米、荣耀等知名品牌，并已成为京东方、三星显示等光电子器件制造商的配套供应商；\n2、公司于2026年5月成功中标山西某煤电公司合同能源管理项目，采用“超级电容+飞轮+锂电”耦合模式提供调频服务", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 19.79, "first_limit_up": 1782438864, "break_limit_up_times": 2}, {"code": "600539", "name": "狮头股份", "price": 14.32, "change_pct": 9.98, "reason": "公司转型成为电商服务提供商，涉及宠粮、美妆、食品和日化用品等领域\n", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.87, "first_limit_up": 1782440799, "break_limit_up_times": 0}, {"code": "601369", "name": "陕鼓动力", "price": 9.05, "change_pct": 9.96, "reason": "公司主要为客户提供工业气体领域系统解决方案，旗下秦风气体是专业化、规模化的国有大型工业气体系统解决方案服务商，业务种类涵盖空分、合成气、焦炉气综合利用、氢能综合利用、稀有气体等多个领域", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 1.31, "first_limit_up": 1782440477, "break_limit_up_times": 1}, {"code": "600118", "name": "中国卫星", "price": 77.77, "change_pct": 10.0, "reason": "国内卫星制造龙头，北斗主要提供商之一，主营小卫星 / 微小卫星研制、宇航部组件配套、卫星通导遥终端及地面应用系统集成，提供卫星运营服务与天地一体信息解决方案", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.62, "first_limit_up": 1782452058, "break_limit_up_times": 10}, {"code": "300540", "name": "蜀道装备", "price": 30.5, "change_pct": 19.98, "reason": "公司向国内两家航天基地供应火箭推进剂级液态甲烷装置及液氧、液氮、液氩等空分产品，酒泉航天产业园液体空分项目已获订单，适配商业航天", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 17.73, "first_limit_up": 1782452163, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.13, "change_pct": 4.63, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.48, "first_limit_up": 1782437101, "break_limit_up_times": 0}, {"code": "002713", "name": "*ST东易", "price": 12.68, "change_pct": 4.97, "reason": "控股股东拟向公司无偿捐赠的和林格尔智算中心", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.16, "first_limit_up": 1782451242, "break_limit_up_times": 4}, {"code": "603698", "name": "航天工程", "price": 43.55, "change_pct": 10.0, "reason": "航天科技集团旗下，运载火箭技术研究院旗下唯一上市公司，依托自主研发的粉煤加压气化技术，可生产合成氨、甲醇等原料气体，旗下航天氢能新乡气体公司为晋开延化提供原料气", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 6.09, "first_limit_up": 1782440472, "break_limit_up_times": 0}, {"code": "001215", "name": "千味央厨", "price": 39.17, "change_pct": 10.0, "reason": "公司聚焦速冻面米制品餐饮市场，主营业务为面向餐饮企业的速冻面米制品的研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 7.17, "first_limit_up": 1782452832, "break_limit_up_times": 0}, {"code": "002816", "name": "*ST和科", "price": 28.26, "change_pct": 5.02, "reason": "公司25年业绩同比扭亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.4, "first_limit_up": 1782453558, "break_limit_up_times": 4}, {"code": "001389", "name": "广合科技", "price": 220.88, "change_pct": 10.0, "reason": "公司拥有CPU PCB产品", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 12.87, "first_limit_up": 1782439530, "break_limit_up_times": 14}, {"code": "002538", "name": "ST司特", "price": 6.14, "change_pct": 4.96, "reason": "公司拥有磷复合肥一体化产业链，化肥品种-复合肥、磷肥，现有复合肥产能140万吨，中间产品硫酸年产能115万吨", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.06, "first_limit_up": 1782453597, "break_limit_up_times": 2}, {"code": "000823", "name": "超声电子", "price": 28.46, "change_pct": 10.01, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 3, "turnover_ratio": 17.86, "first_limit_up": 1782437100, "break_limit_up_times": 21}, {"code": "003033", "name": "征和工业", "price": 57.33, "change_pct": 10.0, "reason": "1、公司研发的微型链系统项目，重点攻关机器人灵巧手传动技术；\n2、公司是张雪机车链传动系统的核心供应商，双方更在赛事级链系统产品上展开联合研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1782451002, "break_limit_up_times": 0}, {"code": "600962", "name": "国投中鲁", "price": 29, "change_pct": 10.02, "reason": "公司拟收购的中国电子工程设计院承担第一条由国内企业主导的12英寸3D闪存芯片生产线等多条集成电路产线设计总包", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 3.77, "first_limit_up": 1782437913, "break_limit_up_times": 0}, {"code": "688596", "name": "正帆科技", "price": 56.22, "change_pct": 20.0, "reason": "公司完成收购汉京半导体62.23%股权，新增石英、碳化硅陶瓷等半导体设备核心零组件，产品矩阵延伸至高端耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.06, "first_limit_up": 1782453083, "break_limit_up_times": 0}, {"code": "600745", "name": "*ST闻泰", "price": 16.87, "change_pct": 4.98, "reason": "公司起诉安世控股等六被告获法院受理：要求归还安世半导体控制权，索赔80亿", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1782441672, "break_limit_up_times": 3}, {"code": "002568", "name": "百润股份", "price": 15.73, "change_pct": 10.0, "reason": "国内预调鸡尾酒龙头，旗下拥有知名品牌“RIO”预调酒，上半年净利润预计增长19.51%—25.94%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.64, "first_limit_up": 1782437400, "break_limit_up_times": 0}, {"code": "001400", "name": "江顺科技", "price": 115.37, "change_pct": 10.0, "reason": "1、近期公司基于微通道挤压技术开发出新一代液冷模块，采用铝合金一体成型工艺，支持更窄流道（≤100μm）和更高热密度；\n2、公司的相关模具产品可以用于航空航天方向", "plates": ["液冷服务器", "航天"], "limit_up_days": 1, "turnover_ratio": 8.59, "first_limit_up": 1782442968, "break_limit_up_times": 0}, {"code": "002822", "name": "ST中装", "price": 2.9, "change_pct": 5.07, "reason": "公司申请撤销股票交易其他风险警示", "plates": ["ST股"], "limit_up_days": 4, "turnover_ratio": 3.34, "first_limit_up": 1782438735, "break_limit_up_times": 1}, {"code": "603903", "name": "中持股份", "price": 12.84, "change_pct": 10.03, "reason": "公司控股股东变更为芯长征，其核心业务包括硅基芯片及模组系列、第三代半导体芯片及模组系列（SiC、GaN）及功率器件检测装备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.15, "first_limit_up": 1782439038, "break_limit_up_times": 0}, {"code": "600568", "name": "ST中珠", "price": 2.14, "change_pct": 4.9, "reason": "两大股东协议4.03亿元转让公司10.38%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.26, "first_limit_up": 1782456813, "break_limit_up_times": 0}, {"code": "603956", "name": "威派格", "price": 5.83, "change_pct": 10.0, "reason": "1、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品；\n2、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 1.42, "first_limit_up": 1782437101, "break_limit_up_times": 0}, {"code": "600552", "name": "凯盛科技", "price": 29.6, "change_pct": 10.0, "reason": "公司UTG（超薄柔性玻璃）项目主体生产线已基本建成，相关产品已实现向下游客户批量交付，剩余产能生产线处于调试、验证阶段，预计2026年4月项目可完全达到使用状态", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 16.23, "first_limit_up": 1782438401, "break_limit_up_times": 25}, {"code": "600730", "name": "*ST高科", "price": 11.31, "change_pct": 5.01, "reason": "公司主营职业教育；据公司官微，中国高科集团自主研发的AED-CPR心肺复苏一体机以及急救AI科普机器人经过选代发展，已获得较高的品牌知名度，布局覆盖海内外市场", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1782438168, "break_limit_up_times": 3}, {"code": "001289", "name": "龙源电力", "price": 17.57, "change_pct": 10.02, "reason": "国家能源投资集团旗下，以新能源业务为主的大型综合性发电集团", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 0.11, "first_limit_up": 1782437433, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 12.23, "change_pct": 9.98, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1782438664, "break_limit_up_times": 0}, {"code": "000620", "name": "盈新发展", "price": 3.42, "change_pct": 9.97, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.96, "first_limit_up": 1782437649, "break_limit_up_times": 8}, {"code": "002962", "name": "五方光电", "price": 19.34, "change_pct": 10.01, "reason": "公司表示拓展TGV技术在光学领域的应用", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 25.8, "first_limit_up": 1782440109, "break_limit_up_times": 41}, {"code": "688409", "name": "富创精密", "price": 274.8, "change_pct": 20.0, "reason": "公司结构零部件（基板、冷却板等）多种产品应用于光刻机、涂胶显影设备，主要客户有上海微电子、芯源微", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 3.9, "first_limit_up": 1782456937, "break_limit_up_times": 0}, {"code": "601133", "name": "柏诚股份", "price": 38.28, "change_pct": 10.0, "reason": "我国洁净室行业头部企业之一，长鑫为公司客户之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.06, "first_limit_up": 1782439325, "break_limit_up_times": 13}, {"code": "603261", "name": "立航科技", "price": 57.2, "change_pct": 10.0, "reason": "我国军机地面保障设备主要供应商，在低空经济相关业务中涉及无人机相关业务", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.29, "first_limit_up": 1782438592, "break_limit_up_times": 0}, {"code": "002910", "name": "庄园牧场", "price": 12.27, "change_pct": 10.04, "reason": "甘肃、青海区域乳制品龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 19.91, "first_limit_up": 1782451575, "break_limit_up_times": 0}, {"code": "603861", "name": "白云电器", "price": 14.25, "change_pct": 10.04, "reason": "1、公司已完成数据中心智能小母线及一体化电力模块研发，750V直流方案已在园区、楼宇、地铁落地，并储备800VHVDC技术，服务中国联通、佛山开普勒等算力中心；\n2、公司围绕两网数字化、智能化需求，打造综合解决方案，加大 “二次 + 智能技术” 投入，为智能电网提供绿色环保、智能可靠的产品与供电系统方案", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1782437400, "break_limit_up_times": 0}, {"code": "603650", "name": "彤程新材", "price": 85.83, "change_pct": 10.0, "reason": "此前多家晶圆厂加速验证导入公司子公司北京科华的KrF光刻胶", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1782438000, "break_limit_up_times": 33}, {"code": "002141", "name": "贤丰控股", "price": 5.76, "change_pct": 9.92, "reason": "公司覆铜板上年度年产量近700万张，产品直接用于PCB生产", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 24.42, "first_limit_up": 1782437592, "break_limit_up_times": 14}, {"code": "603977", "name": "国泰集团", "price": 15.43, "change_pct": 9.98, "reason": "江西省内最大的民爆器材生产企业；全资子公司新余国泰自主研发生产的小型固体火箭发动机应用于固定翼无人靶机的发射，使其迅速飞离发射器并加速达到预定飞行速度", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.63, "first_limit_up": 1782438418, "break_limit_up_times": 2}, {"code": "002559", "name": "亚威股份", "price": 12.31, "change_pct": 10.01, "reason": "1、参股公司威迈芯材正稳步推进光刻胶主材料产品的国产化进程，目前已经完成了国内客户订单的突破；威迈芯材全资子公司韩国WIMAS主要从事半导体高端光刻胶的核心主材料的研发、生产和销售；\n2、公司产品包含线性和水平多关节机器人", "plates": ["光刻机（胶）"], "limit_up_days": 1, "turnover_ratio": 21.89, "first_limit_up": 1782438378, "break_limit_up_times": 4}, {"code": "600343", "name": "航天动力", "price": 26.27, "change_pct": 10.01, "reason": "航天科技集团下属上市公司；公司大股东是航天科技集团下属航天六院，其是我国液体火箭发动机主要研制单位", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 9.7, "first_limit_up": 1782443095, "break_limit_up_times": 1}, {"code": "301349", "name": "信德新材", "price": 75.6, "change_pct": 20.0, "reason": "1、行业领先的碳基新型材料供应商；公司碳纤维制品已进入光纤领域并陆续通过验证阶段，目前已开始小批量供货，沥青基碳纤维制品已获得亨通光电等部分光纤客户验证；\n2、公司主要产品是负极包覆材料，绝大部分作为锂电池负极包覆材料销售给锂电池负极材料厂商，主要应用于动力类、消费类、储能类锂离子电池负极等领域，积累了四大类、十余种不同品类的负极包覆材料产品，锂电池负极包覆材料业务产能4万吨/年", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 13.94, "first_limit_up": 1782439119, "break_limit_up_times": 17}, {"code": "603595", "name": "ST东尼", "price": 36.98, "change_pct": 5.0, "reason": "无线充电材料及器件领先厂商，主要包括超微细电子线材、无线充电隔磁材料", "plates": ["ST股"], "limit_up_days": 6, "turnover_ratio": 1.45, "first_limit_up": 1782437101, "break_limit_up_times": 2}, {"code": "603687", "name": "大胜达", "price": 18.81, "change_pct": 10.0, "reason": "公司与芯瞳半导体及其原股东已于5月19日正式签署Pre-B轮增资及股权转让协议，公司以5.5亿元取得芯瞳半导体22.9831%股权，标的公司是国内专注于通用高性能图形处理器芯片设计研发与销售的先驱企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.74, "first_limit_up": 1782437474, "break_limit_up_times": 21}, {"code": "002965", "name": "祥鑫科技", "price": 51.88, "change_pct": 10.01, "reason": "1、公司拟通过现金收购与增资相结合的方式，取得苏州酷尔芯科技有限公司51%股权，整体估值暂定6.75亿元，快速切入液冷散热赛道；\n2、公司与广东省科学院智能制造研究所共建人形机器人关键零部件联合技术创新中心", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 12.12, "first_limit_up": 1782437493, "break_limit_up_times": 6}, {"code": "603155", "name": "新亚强", "price": 25.34, "change_pct": 9.98, "reason": "公司专业从事有机硅精细化学品的研产销，配套用于平板显示、电子、半导体、芯片等相关领域的电子级六甲基二硅氮烷产品，已向国内多家半导体客户提供产品服务，并在部分主要应用端实现进口产品的替代", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 6.63, "first_limit_up": 1782452154, "break_limit_up_times": 0}, {"code": "002930", "name": "宏川智慧", "price": 9.43, "change_pct": 10.04, "reason": "子公司宏川智算完成一批企业级DDR5内存条交付，已顺利送达至国内某头部GPU设计厂商，用于其AI算力芯片的服务器验证与算力中心建设", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.51, "first_limit_up": 1782455670, "break_limit_up_times": 0}, {"code": "002129", "name": "TCL中环", "price": 11.19, "change_pct": 10.03, "reason": "1、子公司鑫芯半导体致力于300mm半导体硅片研发与制造，产品应用以逻辑芯片、存储芯片等先进制程方向为主；\n2、业内人士称马斯克团队上周调研的光伏企业包括TCL中环、晶科能源、晶盛机电等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.85, "first_limit_up": 1782438360, "break_limit_up_times": 3}, {"code": "002674", "name": "兴业科技", "price": 28.83, "change_pct": 10.0, "reason": "公司拟收购青岛立昂磷化铟衬底及半导体电子材料业务，切入光通信与算力光模块核心材料赛道", "plates": ["国产芯片"], "limit_up_days": 6, "turnover_ratio": 2.57, "first_limit_up": 1782437100, "break_limit_up_times": 0}, {"code": "002106", "name": "莱宝高科", "price": 15.62, "change_pct": 10.0, "reason": "公司正利用现有产线资源与合作方共同研发玻璃封装载板及TGV（玻璃通孔）技术，但相关产品目前仍处于工程样品阶段，暂未实现产业化生产", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 8.02, "first_limit_up": 1782437721, "break_limit_up_times": 1}, {"code": "605296", "name": "神农集团", "price": 27.23, "change_pct": 10.02, "reason": "云南省内最大的生猪定点屠宰企业", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 1.06, "first_limit_up": 1782443416, "break_limit_up_times": 1}, {"code": "000609", "name": "*ST中迪", "price": 12.29, "change_pct": 5.04, "reason": "公司关联方深圳天微电子拟将其持有的广西天微电子有限公司70%股权无偿赠与公司", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 1.4, "first_limit_up": 1782437499, "break_limit_up_times": 0}, {"code": "300162", "name": "雷曼光电", "price": 12.13, "change_pct": 19.98, "reason": "中国领先的LED高科技产品及解决方案提供商；公司主要产品是Micro LED超高清大尺寸显示产品，主要应用领域是专用显示、商用显示、家用显示等场景，拥有正装COB、倒装COB、像素引擎COB以及PM驱动玻璃基Micro LED等系列超高清显示产品，在Micro LED显示领域具备极强的综合竞争优势", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 30.61, "first_limit_up": 1782440421, "break_limit_up_times": 26}, {"code": "605399", "name": "晨光新材", "price": 14.28, "change_pct": 10.02, "reason": "1、公司铜陵“年产30万吨功能性硅烷项目”规划气凝胶产能5000吨，宁夏中卫规划“年产30万吨硅基及气凝胶新材料项目”，主要生产三氯氢硅、正硅酸乙酯、乙烯基硅烷、苯基硅烷和气凝胶材料；\n2、在太阳能相关应用中，三氯氢硅可用于多晶硅制造，偶联剂产品可用于EVA、POE胶膜，以提升使用寿命，也可用于光伏组件中背板的密封胶、灌封胶中", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.51, "first_limit_up": 1782451124, "break_limit_up_times": 0}, {"code": "605366", "name": "宏柏新材", "price": 14.38, "change_pct": 10.02, "reason": "1、公司重点布局2万吨光纤级高纯四氯化硅和5000吨电子级正硅酸乙酯项目，以满足AI算力及半导体产业需求，具备高纯硅烷产品的生产工艺技术，能较快实现量产落地；\n2、国内功能性硅烷行业龙头企业；公司具备完整的“硅块-三氯氢硅-中间体-功能性硅烷-气相白炭黑”绿色循环产业链，相关产品和技术适用于液体硅胶", "plates": ["光通信"], "limit_up_days": 4, "turnover_ratio": 19.59, "first_limit_up": 1782437483, "break_limit_up_times": 47}, {"code": "600545", "name": "卓郎智能", "price": 7.1, "change_pct": 10.08, "reason": "公司旗下品牌有阿尔玛（Allma）、福克曼（Volkmann）等，在玻纤领域有明星产品VGT高端玻纤机", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1782437566, "break_limit_up_times": 0}, {"code": "002119", "name": "康强电子", "price": 37.02, "change_pct": 10.01, "reason": "公司主营引线框架、键合丝等半导体封装材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 23.14, "first_limit_up": 1782444438, "break_limit_up_times": 1}, {"code": "688432", "name": "有研硅", "price": 30.9, "change_pct": 20.0, "reason": "国内半导体材料龙头企业，主要产品包括半导体硅抛光片、刻蚀设备用硅材料、半导体区熔硅单晶等，主要用于分立器件、功率器件、集成电路、刻蚀设备用硅部件等的制造", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.91, "first_limit_up": 1782451160, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 1.67, "change_pct": 5.03, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.11, "first_limit_up": 1782441609, "break_limit_up_times": 2}, {"code": "600367", "name": "红星发展", "price": 58.28, "change_pct": 10.0, "reason": "康宁为公司直接客户", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 21.35, "first_limit_up": 1782438186, "break_limit_up_times": 6}, {"code": "001210", "name": "金房能源", "price": 23.83, "change_pct": 10.02, "reason": "公司业务包括IDC机房和智算中心液冷技术与蓄冷相变材料", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1782437661, "break_limit_up_times": 0}, {"code": "600228", "name": "返利科技", "price": 10.79, "change_pct": 9.99, "reason": "国内知名的在线导购公司，基于人工智能技术开发的电商导购APP；控股股东将变更为繁枫智能", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 0.14, "first_limit_up": 1782437101, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};