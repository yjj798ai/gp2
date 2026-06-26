const UPDATE_TIME = "2026-06-26 02:52";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -1.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续188天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.29,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续235天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -2.37,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "先进封装",
    "rise": -0.7,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "光纤概念",
    "rise": -2.78,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "创新药",
    "rise": -2.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续65天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "中芯国际概念",
    "rise": 0.22,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "科创芯片ETF",
    "code": "885897"
  },
  {
    "name": "培育钻石",
    "rise": -2.43,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "商业航天",
    "rise": -1.21,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续164天上榜",
    "rankChg": 2,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "液冷服务器",
    "rise": -2.42,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "算力租赁",
    "rise": -2.85,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "ST板块",
    "rise": -0.01,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "超级电容",
    "rise": -3.03,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": -3,
    "etfName": "",
    "code": "885886"
  },
  {
    "name": "人形机器人",
    "rise": -2.27,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续399天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光刻胶",
    "rise": -0.53,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "国家大基金持股",
    "rise": -1.68,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "光刻机",
    "rise": 0.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 2,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "猪肉",
    "rise": -0.97,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "芯片概念",
    "rise": -1.61,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": -2.31,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  }
];
const THS_EVENTS = [
  {
    "title": "全球巨头今年两轮涨价！AI催热半导体硅片赛道，国内已有厂商调价！",
    "desc": "",
    "heat": 280057,
    "direction": "硅片涨价",
    "themes": [
      "半导体硅片"
    ],
    "stocks": [
      {
        "name": "上海合晶",
        "code": "688584",
        "chg": 11.879493
      }
    ]
  },
  {
    "title": "我国具身智能市场规模将突破万亿元！中国超10000家企业入局具身智能",
    "desc": "",
    "heat": 165321,
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
        "chg": 26.27197
      }
    ]
  },
  {
    "title": "国家发改委、国家能源局印发《新型能源体系建设“十五五”规划》",
    "desc": "",
    "heat": 67616,
    "direction": "绿色电力",
    "themes": [
      "绿色电力",
      "电力"
    ],
    "stocks": [
      {
        "name": "斯莱克",
        "code": "300382",
        "chg": 12.230971
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
    "title": "美国光纤巨头推出玻璃光学互连技术",
    "desc": "",
    "heat": 20000,
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
    "title": "英伟达800V Power Rack成Vera Rubin选用方案，目标第三季完成备货",
    "desc": "",
    "heat": 5,
    "direction": "HVDC供电",
    "themes": [
      "HVDC供电"
    ],
    "stocks": [
      {
        "name": "科华数据",
        "code": "002335",
        "chg": 3.147929
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "玻纤",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+1.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃",
    "change": "+1.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D玻璃",
    "change": "+1.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+1.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "颗粒硅",
    "change": "+1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+0.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+0.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+0.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "钙钛矿电池",
    "change": "+0.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+0.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+0.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "筹码集中",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D感应",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "异质结电池HJT",
    "change": "+0.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磁悬浮压缩机",
    "change": "+0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+0.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液晶面板/LCD",
    "change": "+0.21%",
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
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5836,
    "price": "7.96",
    "change": "5.85",
    "market_id": "33",
    "circulate_market_value": "281522390000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.52
      },
      {
        "name": "折叠屏",
        "change_pct": -1.41
      },
      {
        "name": "手机产业链",
        "change_pct": -1.5
      },
      {
        "name": "超高清视频",
        "change_pct": -1.66
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.0
      },
      {
        "name": "半导体",
        "change_pct": -1.05
      },
      {
        "name": "人工智能",
        "change_pct": -2.29
      },
      {
        "name": "互联网医疗",
        "change_pct": -2.65
      },
      {
        "name": "VR&AR",
        "change_pct": -1.09
      },
      {
        "name": "OLED",
        "change_pct": -0.07
      },
      {
        "name": "京津冀",
        "change_pct": -1.59
      },
      {
        "name": "物联网",
        "change_pct": -2.37
      },
      {
        "name": "指纹识别",
        "change_pct": -0.8
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.04
      },
      {
        "name": "白马股",
        "change_pct": -1.89
      },
      {
        "name": "智能制造",
        "change_pct": -1.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.65
      },
      {
        "name": "国产芯片",
        "change_pct": -1.67
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "全息概念",
        "change_pct": -1.75
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.61
      },
      {
        "name": "MicroLED",
        "change_pct": 0.87
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.85
      },
      {
        "name": "智能手表",
        "change_pct": -2.44
      },
      {
        "name": "MiniLED",
        "change_pct": 0.05
      },
      {
        "name": "传感器",
        "change_pct": -1.51
      },
      {
        "name": "大硅片",
        "change_pct": 0.98
      },
      {
        "name": "AI PC",
        "change_pct": -1.63
      },
      {
        "name": "华为产业链",
        "change_pct": -2.11
      },
      {
        "name": "回购",
        "change_pct": -1.78
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.74
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.66
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 7,
    "hot_rank_chg": 23,
    "stock_cnt": 5836,
    "price": "7.56",
    "change": "1.21",
    "market_id": "17",
    "circulate_market_value": "93714434000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.46
      },
      {
        "name": "核电",
        "change_pct": -1.78
      },
      {
        "name": "强势人气股",
        "change_pct": -0.6
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.01
      },
      {
        "name": "水电",
        "change_pct": -0.74
      },
      {
        "name": "火电",
        "change_pct": -1.19
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "风电",
        "change_pct": -1.05
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      },
      {
        "name": "算电协同",
        "change_pct": -2.45
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 14,
    "hot_rank_chg": 9,
    "stock_cnt": 5836,
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
        "change_pct": -1.59
      },
      {
        "name": "电竞",
        "change_pct": -1.21
      },
      {
        "name": "手游",
        "change_pct": -1.57
      },
      {
        "name": "强势人气股",
        "change_pct": -0.6
      },
      {
        "name": "人工智能",
        "change_pct": -2.29
      },
      {
        "name": "游戏",
        "change_pct": -2.4
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -2.49
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.63
      },
      {
        "name": "快手概念股",
        "change_pct": -2.58
      },
      {
        "name": "元宇宙",
        "change_pct": -1.59
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.82
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.85
      },
      {
        "name": "web3.0",
        "change_pct": -2.2
      },
      {
        "name": "AIGC概念",
        "change_pct": -2.44
      },
      {
        "name": "数据要素",
        "change_pct": -2.5
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -2.66
      },
      {
        "name": "AI营销",
        "change_pct": -1.85
      },
      {
        "name": "ChatGPT",
        "change_pct": -2.59
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.74
      },
      {
        "name": "人工智能大模型",
        "change_pct": -2.93
      },
      {
        "name": "人形机器人",
        "change_pct": -2.05
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.05
      },
      {
        "name": "多模态",
        "change_pct": -2.42
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -2.38
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.84
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.46
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 21,
    "hot_rank_chg": 111,
    "stock_cnt": 5836,
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
        "change_pct": -1.05
      },
      {
        "name": "一带一路",
        "change_pct": -1.6
      },
      {
        "name": "京津冀",
        "change_pct": -1.59
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "碳中和",
        "change_pct": -1.24
      },
      {
        "name": "国产芯片",
        "change_pct": -1.67
      },
      {
        "name": "IGBT",
        "change_pct": -2.06
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.81
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.57
      },
      {
        "name": "大硅片",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 26,
    "hot_rank_chg": -15,
    "stock_cnt": 5836,
    "price": "5.46",
    "change": "2.25",
    "market_id": "33",
    "circulate_market_value": "104460907000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.41
      },
      {
        "name": "手机产业链",
        "change_pct": -1.5
      },
      {
        "name": "超高清视频",
        "change_pct": -1.66
      },
      {
        "name": "半导体",
        "change_pct": -1.05
      },
      {
        "name": "OLED",
        "change_pct": -0.07
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "黑色家电",
        "change_pct": -1.38
      },
      {
        "name": "家电",
        "change_pct": -1.73
      },
      {
        "name": "智能制造",
        "change_pct": -1.85
      },
      {
        "name": "工业互联网",
        "change_pct": -1.91
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.65
      },
      {
        "name": "国产芯片",
        "change_pct": -1.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": -2.63
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "MicroLED",
        "change_pct": 0.87
      },
      {
        "name": "MiniLED",
        "change_pct": 0.05
      },
      {
        "name": "华为产业链",
        "change_pct": -2.11
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.66
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 39,
    "hot_rank_chg": 227,
    "stock_cnt": 5836,
    "price": "9.74",
    "change": "8.34",
    "market_id": "33",
    "circulate_market_value": "18288036000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "减持实施",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.05
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.64
      },
      {
        "name": "新能源车零部件",
        "change_pct": -2.36
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.34
      },
      {
        "name": "氮化镓",
        "change_pct": -1.26
      },
      {
        "name": "碳化硅",
        "change_pct": -1.96
      },
      {
        "name": "地摊经济",
        "change_pct": -2.01
      },
      {
        "name": "人形机器人",
        "change_pct": -2.05
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 43,
    "hot_rank_chg": 11,
    "stock_cnt": 5836,
    "price": "10.51",
    "change": "-6.16",
    "market_id": "17",
    "circulate_market_value": "31260747000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.32
      },
      {
        "name": "禽流感",
        "change_pct": -2.93
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.3
      },
      {
        "name": "农药",
        "change_pct": -1.82
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -1.77
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -2.15
      }
    ]
  },
  {
    "code": "300088",
    "name": "长信科技",
    "hot_rank": 44,
    "hot_rank_chg": 158,
    "stock_cnt": 5836,
    "price": "11.84",
    "change": "15.26",
    "market_id": "33",
    "circulate_market_value": "29478058000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -2.15
      },
      {
        "name": "长三角一体化",
        "change_pct": -1.68
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.05
      },
      {
        "name": "折叠屏",
        "change_pct": -1.41
      },
      {
        "name": "手机产业链",
        "change_pct": -1.5
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.0
      },
      {
        "name": "特斯拉",
        "change_pct": -2.23
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.31
      },
      {
        "name": "石墨烯",
        "change_pct": -2.71
      },
      {
        "name": "VR&AR",
        "change_pct": -1.09
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.99
      },
      {
        "name": "OLED",
        "change_pct": -0.07
      },
      {
        "name": "3D玻璃",
        "change_pct": 1.35
      },
      {
        "name": "大数据",
        "change_pct": -2.67
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.65
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.21
      },
      {
        "name": "MicroLED",
        "change_pct": 0.87
      },
      {
        "name": "元宇宙",
        "change_pct": -1.59
      },
      {
        "name": "东数西算/算力",
        "change_pct": -2.85
      },
      {
        "name": "电子后视镜",
        "change_pct": -1.51
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      },
      {
        "name": "智能手表",
        "change_pct": -2.44
      },
      {
        "name": "华为产业链",
        "change_pct": -2.11
      }
    ]
  },
  {
    "code": "601016",
    "name": "节能风电",
    "hot_rank": 51,
    "hot_rank_chg": 516,
    "stock_cnt": 5836,
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
        "change_pct": -1.46
      },
      {
        "name": "京津冀",
        "change_pct": -1.59
      },
      {
        "name": "风电",
        "change_pct": -1.05
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "601012",
    "name": "隆基绿能",
    "hot_rank": 54,
    "hot_rank_chg": 140,
    "stock_cnt": 5836,
    "price": "12.84",
    "change": "1.75",
    "market_id": "17",
    "circulate_market_value": "97226491000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -1.72
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.69
      },
      {
        "name": "光伏",
        "change_pct": -0.52
      },
      {
        "name": "白马股",
        "change_pct": -1.89
      },
      {
        "name": "碳中和",
        "change_pct": -1.24
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.81
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.58
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.85
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 56,
    "hot_rank_chg": -19,
    "stock_cnt": 5836,
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
        "change_pct": -2.32
      },
      {
        "name": "锂电池",
        "change_pct": -3.29
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.86
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.39
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.64
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.17
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 58,
    "hot_rank_chg": 168,
    "stock_cnt": 5836,
    "price": "3.39",
    "change": "9.00",
    "market_id": "33",
    "circulate_market_value": "15837228000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.52
      },
      {
        "name": "体育产业",
        "change_pct": -0.99
      },
      {
        "name": "房地产",
        "change_pct": -0.68
      },
      {
        "name": "京津冀",
        "change_pct": -1.59
      },
      {
        "name": "旅游",
        "change_pct": -1.5
      },
      {
        "name": "国产芯片",
        "change_pct": -1.67
      },
      {
        "name": "内存",
        "change_pct": -1.24
      },
      {
        "name": "闪存",
        "change_pct": -2.55
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -1.84
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 66,
    "hot_rank_chg": 57,
    "stock_cnt": 5836,
    "price": "12.56",
    "change": "2.03",
    "market_id": "17",
    "circulate_market_value": "63307179000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.46
      },
      {
        "name": "军民融合",
        "change_pct": -1.74
      },
      {
        "name": "有色 · 锑",
        "change_pct": -3.83
      },
      {
        "name": "有色 · 钼",
        "change_pct": -1.89
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.87
      },
      {
        "name": "有色金属",
        "change_pct": -2.81
      },
      {
        "name": "军工",
        "change_pct": -1.63
      },
      {
        "name": "硫酸",
        "change_pct": -3.1
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      },
      {
        "name": "白银",
        "change_pct": -4.34
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.26
      },
      {
        "name": "光纤概念",
        "change_pct": -3.85
      },
      {
        "name": "有色 · 铋",
        "change_pct": -2.81
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 70,
    "hot_rank_chg": 36,
    "stock_cnt": 5836,
    "price": "12.13",
    "change": "0.66",
    "market_id": "17",
    "circulate_market_value": "60943659000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -1.68
      },
      {
        "name": "期货概念",
        "change_pct": -3.87
      },
      {
        "name": "券商",
        "change_pct": -2.39
      },
      {
        "name": "安徽国企改革",
        "change_pct": -0.99
      },
      {
        "name": "大金融",
        "change_pct": -1.97
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      }
    ]
  },
  {
    "code": "600500",
    "name": "中化国际",
    "hot_rank": 76,
    "hot_rank_chg": 2,
    "stock_cnt": 5836,
    "price": "8.93",
    "change": "3.36",
    "market_id": "17",
    "circulate_market_value": "32043575000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.46
      },
      {
        "name": "锂电池",
        "change_pct": -3.29
      },
      {
        "name": "环氧树脂",
        "change_pct": -0.88
      },
      {
        "name": "橡胶",
        "change_pct": 2.3
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.64
      },
      {
        "name": "环氧丙烷",
        "change_pct": -1.98
      },
      {
        "name": "动力电池回收",
        "change_pct": -3.42
      },
      {
        "name": "虫害防治",
        "change_pct": -1.59
      },
      {
        "name": "国企改革",
        "change_pct": -1.59
      },
      {
        "name": "电子树脂",
        "change_pct": -4.25
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001399", "name": "惠科股份", "hot_rank": 1, "hot_rank_chg": 65, "stock_cnt": 5836, "price": "48.32", "change": "377.47", "market_id": "33", "circulate_market_value": "20804984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5836, "price": "7.96", "change": "5.85", "market_id": "33", "circulate_market_value": "281522390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.52}, {"name": "折叠屏", "change_pct": -1.41}, {"name": "手机产业链", "change_pct": -1.5}, {"name": "超高清视频", "change_pct": -1.66}, {"name": "苹果产业链", "change_pct": -2.0}, {"name": "半导体", "change_pct": -1.05}, {"name": "人工智能", "change_pct": -2.29}, {"name": "互联网医疗", "change_pct": -2.65}, {"name": "VR&AR", "change_pct": -1.09}, {"name": "OLED", "change_pct": -0.07}, {"name": "京津冀", "change_pct": -1.59}, {"name": "物联网", "change_pct": -2.37}, {"name": "指纹识别", "change_pct": -0.8}, {"name": "汽车零部件", "change_pct": -2.04}, {"name": "白马股", "change_pct": -1.89}, {"name": "智能制造", "change_pct": -1.85}, {"name": "小米概念股", "change_pct": -1.65}, {"name": "国产芯片", "change_pct": -1.67}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "全息概念", "change_pct": -1.75}, {"name": "理想汽车概念股", "change_pct": -1.61}, {"name": "MicroLED", "change_pct": 0.87}, {"name": "钙钛矿电池", "change_pct": 0.85}, {"name": "智能手表", "change_pct": -2.44}, {"name": "MiniLED", "change_pct": 0.05}, {"name": "传感器", "change_pct": -1.51}, {"name": "大硅片", "change_pct": 0.98}, {"name": "AI PC", "change_pct": -1.63}, {"name": "华为产业链", "change_pct": -2.11}, {"name": "回购", "change_pct": -1.78}, {"name": "智能眼镜/MR头显", "change_pct": -1.74}, {"name": "玻璃基板封装", "change_pct": 1.66}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5836, "price": "27.70", "change": "9.48", "market_id": "17", "circulate_market_value": "57956634000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 4, "hot_rank_chg": -3, "stock_cnt": 5836, "price": "104.01", "change": "-0.14", "market_id": "17", "circulate_market_value": "186134900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "61.52", "change": "-9.62", "market_id": "17", "circulate_market_value": "210067050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "23.18", "change": "3.48", "market_id": "33", "circulate_market_value": "77019068000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 7, "hot_rank_chg": 23, "stock_cnt": 5836, "price": "7.56", "change": "1.21", "market_id": "17", "circulate_market_value": "93714434000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.46}, {"name": "核电", "change_pct": -1.78}, {"name": "强势人气股", "change_pct": -0.6}, {"name": "电力体制改革", "change_pct": -1.01}, {"name": "水电", "change_pct": -0.74}, {"name": "火电", "change_pct": -1.19}, {"name": "光伏", "change_pct": -0.52}, {"name": "风电", "change_pct": -1.05}, {"name": "国企改革", "change_pct": -1.59}, {"name": "算电协同", "change_pct": -2.45}]}, {"code": "600703", "name": "三安光电", "hot_rank": 8, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "21.67", "change": "-0.05", "market_id": "17", "circulate_market_value": "108062146000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 9, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "56.69", "change": "0.94", "market_id": "17", "circulate_market_value": "47991108000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 10, "hot_rank_chg": 160, "stock_cnt": 5836, "price": "15.87", "change": "4.07", "market_id": "17", "circulate_market_value": "23357130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 11, "hot_rank_chg": 7, "stock_cnt": 5836, "price": "155.30", "change": "1.77", "market_id": "33", "circulate_market_value": "148771110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "112.40", "change": "-8.62", "market_id": "17", "circulate_market_value": "274838360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 13, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "54.84", "change": "3.08", "market_id": "33", "circulate_market_value": "86325787000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 14, "hot_rank_chg": 9, "stock_cnt": 5836, "price": "8.83", "change": "9.96", "market_id": "33", "circulate_market_value": "14354876000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.59}, {"name": "电竞", "change_pct": -1.21}, {"name": "手游", "change_pct": -1.57}, {"name": "强势人气股", "change_pct": -0.6}, {"name": "人工智能", "change_pct": -2.29}, {"name": "游戏", "change_pct": -2.4}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -2.49}, {"name": "腾讯概念股", "change_pct": -2.63}, {"name": "快手概念股", "change_pct": -2.58}, {"name": "元宇宙", "change_pct": -1.59}, {"name": "虚拟数字人", "change_pct": -1.82}, {"name": "东数西算/算力", "change_pct": -2.85}, {"name": "web3.0", "change_pct": -2.2}, {"name": "AIGC概念", "change_pct": -2.44}, {"name": "数据要素", "change_pct": -2.5}, {"name": "字节跳动概念股", "change_pct": -2.66}, {"name": "AI营销", "change_pct": -1.85}, {"name": "ChatGPT", "change_pct": -2.59}, {"name": "智能眼镜/MR头显", "change_pct": -1.74}, {"name": "人工智能大模型", "change_pct": -2.93}, {"name": "人形机器人", "change_pct": -2.05}, {"name": "短剧/互动影游", "change_pct": -2.05}, {"name": "多模态", "change_pct": -2.42}, {"name": "Sora/AI视频", "change_pct": -2.38}, {"name": "IP经济/谷子经济", "change_pct": -1.84}, {"name": "小红书概念股", "change_pct": -1.46}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 15, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "72.00", "change": "1.70", "market_id": "17", "circulate_market_value": "288225840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 16, "hot_rank_chg": 20, "stock_cnt": 5836, "price": "50.42", "change": "1.12", "market_id": "17", "circulate_market_value": "83902502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 17, "hot_rank_chg": 10, "stock_cnt": 5836, "price": "190.70", "change": "-8.23", "market_id": "17", "circulate_market_value": "49227154000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "17.00", "change": "-6.95", "market_id": "17", "circulate_market_value": "21696348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 19, "hot_rank_chg": -12, "stock_cnt": 5836, "price": "78.37", "change": "-1.57", "market_id": "33", "circulate_market_value": "90675118000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 20, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "20.84", "change": "-2.21", "market_id": "33", "circulate_market_value": "12152469800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 21, "hot_rank_chg": 111, "stock_cnt": 5836, "price": "11.19", "change": "10.03", "market_id": "33", "circulate_market_value": "45205136000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片", "xgb_concepts": [{"name": "半导体", "change_pct": -1.05}, {"name": "一带一路", "change_pct": -1.6}, {"name": "京津冀", "change_pct": -1.59}, {"name": "光伏", "change_pct": -0.52}, {"name": "碳中和", "change_pct": -1.24}, {"name": "国产芯片", "change_pct": -1.67}, {"name": "IGBT", "change_pct": -2.06}, {"name": "颗粒硅", "change_pct": 1.81}, {"name": "异质结电池HJT", "change_pct": 0.57}, {"name": "大硅片", "change_pct": 0.98}]}, {"code": "605358", "name": "立昂微", "hot_rank": 22, "hot_rank_chg": 47, "stock_cnt": 5836, "price": "69.45", "change": "-1.42", "market_id": "17", "circulate_market_value": "53667856000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 23, "hot_rank_chg": 18, "stock_cnt": 5836, "price": "71.70", "change": "-6.86", "market_id": "17", "circulate_market_value": "1423019900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "73.60", "change": "-5.41", "market_id": "33", "circulate_market_value": "111684484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 25, "hot_rank_chg": 24, "stock_cnt": 5836, "price": "67.81", "change": "-8.88", "market_id": "33", "circulate_market_value": "495116620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 26, "hot_rank_chg": -15, "stock_cnt": 5836, "price": "5.46", "change": "2.25", "market_id": "33", "circulate_market_value": "104460907000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.41}, {"name": "手机产业链", "change_pct": -1.5}, {"name": "超高清视频", "change_pct": -1.66}, {"name": "半导体", "change_pct": -1.05}, {"name": "OLED", "change_pct": -0.07}, {"name": "光伏", "change_pct": -0.52}, {"name": "黑色家电", "change_pct": -1.38}, {"name": "家电", "change_pct": -1.73}, {"name": "智能制造", "change_pct": -1.85}, {"name": "工业互联网", "change_pct": -1.91}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.65}, {"name": "国产芯片", "change_pct": -1.67}, {"name": "腾讯概念股", "change_pct": -2.63}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "MicroLED", "change_pct": 0.87}, {"name": "MiniLED", "change_pct": 0.05}, {"name": "华为产业链", "change_pct": -2.11}, {"name": "玻璃基板封装", "change_pct": 1.66}]}, {"code": "600707", "name": "彩虹股份", "hot_rank": 27, "hot_rank_chg": 53, "stock_cnt": 5836, "price": "14.32", "change": "5.21", "market_id": "17", "circulate_market_value": "51447184000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 28, "hot_rank_chg": -22, "stock_cnt": 5836, "price": "753.62", "change": "-2.79", "market_id": "17", "circulate_market_value": "503788890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 29, "hot_rank_chg": 10, "stock_cnt": 5836, "price": "41.72", "change": "-4.70", "market_id": "33", "circulate_market_value": "45016961000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 30, "hot_rank_chg": 71, "stock_cnt": 5836, "price": "57.63", "change": "8.76", "market_id": "17", "circulate_market_value": "18552095000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 31, "hot_rank_chg": 48, "stock_cnt": 5836, "price": "26.23", "change": "5.13", "market_id": "17", "circulate_market_value": "29746879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 32, "hot_rank_chg": 42, "stock_cnt": 5836, "price": "29.60", "change": "10.00", "market_id": "17", "circulate_market_value": "27960364000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 33, "hot_rank_chg": 89, "stock_cnt": 5836, "price": "52.40", "change": "9.44", "market_id": "33", "circulate_market_value": "73590189000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 34, "hot_rank_chg": -12, "stock_cnt": 5836, "price": "19.03", "change": "-7.04", "market_id": "33", "circulate_market_value": "61382689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 35, "hot_rank_chg": 48, "stock_cnt": 5836, "price": "18.08", "change": "-2.80", "market_id": "33", "circulate_market_value": "27586126000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 36, "hot_rank_chg": 8, "stock_cnt": 5836, "price": "178.93", "change": "4.04", "market_id": "17", "circulate_market_value": "40203995000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 37, "hot_rank_chg": -12, "stock_cnt": 5836, "price": "260.60", "change": "-5.51", "market_id": "33", "circulate_market_value": "361275440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 38, "hot_rank_chg": 14, "stock_cnt": 5836, "price": "104.30", "change": "-1.31", "market_id": "33", "circulate_market_value": "151540110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 39, "hot_rank_chg": 227, "stock_cnt": 5836, "price": "9.74", "change": "8.34", "market_id": "33", "circulate_market_value": "18288036000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减持实施", "xgb_concepts": [{"name": "半导体", "change_pct": -1.05}, {"name": "光伏", "change_pct": -0.52}, {"name": "新能源汽车", "change_pct": -2.64}, {"name": "新能源车零部件", "change_pct": -2.36}, {"name": "第三代半导体", "change_pct": -1.34}, {"name": "氮化镓", "change_pct": -1.26}, {"name": "碳化硅", "change_pct": -1.96}, {"name": "地摊经济", "change_pct": -2.01}, {"name": "人形机器人", "change_pct": -2.05}]}, {"code": "002202", "name": "金风科技", "hot_rank": 40, "hot_rank_chg": 153, "stock_cnt": 5836, "price": "23.32", "change": "6.48", "market_id": "33", "circulate_market_value": "78436938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 41, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "65.82", "change": "-9.70", "market_id": "17", "circulate_market_value": "96316218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 42, "hot_rank_chg": 21, "stock_cnt": 5836, "price": "22.76", "change": "-9.97", "market_id": "33", "circulate_market_value": "10295231100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 43, "hot_rank_chg": 11, "stock_cnt": 5836, "price": "10.51", "change": "-6.16", "market_id": "17", "circulate_market_value": "31260747000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.32}, {"name": "禽流感", "change_pct": -2.93}, {"name": "铜箔/覆铜板", "change_pct": -4.3}, {"name": "农药", "change_pct": -1.82}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -1.77}, {"name": "PET复合铜箔", "change_pct": -2.15}]}, {"code": "300088", "name": "长信科技", "hot_rank": 44, "hot_rank_chg": 158, "stock_cnt": 5836, "price": "11.84", "change": "15.26", "market_id": "33", "circulate_market_value": "29478058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -2.15}, {"name": "长三角一体化", "change_pct": -1.68}, {"name": "车联网/车路云", "change_pct": -2.05}, {"name": "折叠屏", "change_pct": -1.41}, {"name": "手机产业链", "change_pct": -1.5}, {"name": "苹果产业链", "change_pct": -2.0}, {"name": "特斯拉", "change_pct": -2.23}, {"name": "无人驾驶", "change_pct": -2.31}, {"name": "石墨烯", "change_pct": -2.71}, {"name": "VR&AR", "change_pct": -1.09}, {"name": "安徽国企改革", "change_pct": -0.99}, {"name": "OLED", "change_pct": -0.07}, {"name": "3D玻璃", "change_pct": 1.35}, {"name": "大数据", "change_pct": -2.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.65}, {"name": "液晶面板/LCD", "change_pct": 0.21}, {"name": "MicroLED", "change_pct": 0.87}, {"name": "元宇宙", "change_pct": -1.59}, {"name": "东数西算/算力", "change_pct": -2.85}, {"name": "电子后视镜", "change_pct": -1.51}, {"name": "国企改革", "change_pct": -1.59}, {"name": "智能手表", "change_pct": -2.44}, {"name": "华为产业链", "change_pct": -2.11}]}, {"code": "600183", "name": "生益科技", "hot_rank": 45, "hot_rank_chg": -12, "stock_cnt": 5836, "price": "174.78", "change": "-6.57", "market_id": "17", "circulate_market_value": "418798320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 46, "hot_rank_chg": 16, "stock_cnt": 5836, "price": "15.58", "change": "-1.21", "market_id": "17", "circulate_market_value": "27034119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 47, "hot_rank_chg": -21, "stock_cnt": 5836, "price": "14.30", "change": "-8.33", "market_id": "17", "circulate_market_value": "25584678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 48, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "242.07", "change": "-7.39", "market_id": "33", "circulate_market_value": "188982070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 49, "hot_rank_chg": -20, "stock_cnt": 5836, "price": "121.84", "change": "-6.35", "market_id": "33", "circulate_market_value": "79565861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 50, "hot_rank_chg": -4, "stock_cnt": 5836, "price": "35.00", "change": "-9.09", "market_id": "33", "circulate_market_value": "41176410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601016", "name": "节能风电", "hot_rank": 51, "hot_rank_chg": 516, "stock_cnt": 5836, "price": "3.94", "change": "10.06", "market_id": "17", "circulate_market_value": "23790728000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "绿色电力", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.46}, {"name": "京津冀", "change_pct": -1.59}, {"name": "风电", "change_pct": -1.05}, {"name": "国企改革", "change_pct": -1.59}]}, {"code": "600498", "name": "烽火通信", "hot_rank": 52, "hot_rank_chg": 33, "stock_cnt": 5836, "price": "76.22", "change": "-10.00", "market_id": "17", "circulate_market_value": "96922987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 53, "hot_rank_chg": 19, "stock_cnt": 5836, "price": "100.00", "change": "1.69", "market_id": "33", "circulate_market_value": "85418083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601012", "name": "隆基绿能", "hot_rank": 54, "hot_rank_chg": 140, "stock_cnt": 5836, "price": "12.84", "change": "1.75", "market_id": "17", "circulate_market_value": "97226491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -1.72}, {"name": "氢能源/燃料电池", "change_pct": -1.69}, {"name": "光伏", "change_pct": -0.52}, {"name": "白马股", "change_pct": -1.89}, {"name": "碳中和", "change_pct": -1.24}, {"name": "颗粒硅", "change_pct": 1.81}, {"name": "BIPV概念", "change_pct": -0.58}, {"name": "钙钛矿电池", "change_pct": 0.85}, {"name": "异质结电池HJT", "change_pct": 0.57}]}, {"code": "000823", "name": "超声电子", "hot_rank": 55, "hot_rank_chg": -17, "stock_cnt": 5836, "price": "28.46", "change": "10.01", "market_id": "33", "circulate_market_value": "16931769000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "转债摘牌"}, {"code": "002141", "name": "贤丰控股", "hot_rank": 56, "hot_rank_chg": -19, "stock_cnt": 5836, "price": "5.76", "change": "9.92", "market_id": "33", "circulate_market_value": "5949710200.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "PCB上游", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.32}, {"name": "锂电池", "change_pct": -3.29}, {"name": "ST摘帽", "change_pct": -0.86}, {"name": "粤港澳大湾区", "change_pct": -1.39}, {"name": "新能源汽车", "change_pct": -2.64}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.17}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 57, "hot_rank_chg": 46, "stock_cnt": 5836, "price": "165.85", "change": "-9.51", "market_id": "33", "circulate_market_value": "137492230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 58, "hot_rank_chg": 168, "stock_cnt": 5836, "price": "3.39", "change": "9.00", "market_id": "33", "circulate_market_value": "15837228000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.52}, {"name": "体育产业", "change_pct": -0.99}, {"name": "房地产", "change_pct": -0.68}, {"name": "京津冀", "change_pct": -1.59}, {"name": "旅游", "change_pct": -1.5}, {"name": "国产芯片", "change_pct": -1.67}, {"name": "内存", "change_pct": -1.24}, {"name": "闪存", "change_pct": -2.55}, {"name": "IP经济/谷子经济", "change_pct": -1.84}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 59, "hot_rank_chg": -50, "stock_cnt": 5836, "price": "98.42", "change": "0.67", "market_id": "17", "circulate_market_value": "144066960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300319", "name": "麦捷科技", "hot_rank": 60, "hot_rank_chg": 120, "stock_cnt": 5836, "price": "31.83", "change": "5.82", "market_id": "33", "circulate_market_value": "27095931000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002080", "name": "中材科技", "hot_rank": 61, "hot_rank_chg": 15, "stock_cnt": 5836, "price": "98.72", "change": "6.12", "market_id": "33", "circulate_market_value": "165496550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 62, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "1253.93", "change": "-5.25", "market_id": "33", "circulate_market_value": "1391786800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 63, "hot_rank_chg": -32, "stock_cnt": 5836, "price": "567.22", "change": "-7.09", "market_id": "33", "circulate_market_value": "711431800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 64, "hot_rank_chg": 82, "stock_cnt": 5836, "price": "85.83", "change": "10.00", "market_id": "17", "circulate_market_value": "52740251000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 65, "hot_rank_chg": -20, "stock_cnt": 5836, "price": "50.90", "change": "-4.91", "market_id": "33", "circulate_market_value": "77262659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 66, "hot_rank_chg": 57, "stock_cnt": 5836, "price": "12.56", "change": "2.03", "market_id": "17", "circulate_market_value": "63307179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.46}, {"name": "军民融合", "change_pct": -1.74}, {"name": "有色 · 锑", "change_pct": -3.83}, {"name": "有色 · 钼", "change_pct": -1.89}, {"name": "有色 · 锌", "change_pct": -3.87}, {"name": "有色金属", "change_pct": -2.81}, {"name": "军工", "change_pct": -1.63}, {"name": "硫酸", "change_pct": -3.1}, {"name": "国企改革", "change_pct": -1.59}, {"name": "白银", "change_pct": -4.34}, {"name": "新冠病毒防治", "change_pct": -2.26}, {"name": "光纤概念", "change_pct": -3.85}, {"name": "有色 · 铋", "change_pct": -2.81}]}, {"code": "300346", "name": "南大光电", "hot_rank": 67, "hot_rank_chg": 78, "stock_cnt": 5836, "price": "78.43", "change": "4.90", "market_id": "33", "circulate_market_value": "51416499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 68, "hot_rank_chg": -20, "stock_cnt": 5836, "price": "20.96", "change": "-7.99", "market_id": "33", "circulate_market_value": "15895037000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 69, "hot_rank_chg": -26, "stock_cnt": 5836, "price": "147.03", "change": "-5.14", "market_id": "33", "circulate_market_value": "282710830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 70, "hot_rank_chg": 36, "stock_cnt": 5836, "price": "12.13", "change": "0.66", "market_id": "17", "circulate_market_value": "60943659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -1.68}, {"name": "期货概念", "change_pct": -3.87}, {"name": "券商", "change_pct": -2.39}, {"name": "安徽国企改革", "change_pct": -0.99}, {"name": "大金融", "change_pct": -1.97}, {"name": "国企改革", "change_pct": -1.59}]}, {"code": "000063", "name": "中兴通讯", "hot_rank": 71, "hot_rank_chg": 46, "stock_cnt": 5836, "price": "36.20", "change": "-5.83", "market_id": "33", "circulate_market_value": "145799890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 72, "hot_rank_chg": 28, "stock_cnt": 5836, "price": "51.36", "change": "2.72", "market_id": "17", "circulate_market_value": "33495539000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 73, "hot_rank_chg": -39, "stock_cnt": 5836, "price": "82.50", "change": "-5.14", "market_id": "33", "circulate_market_value": "93285406000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 74, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "185.74", "change": "2.60", "market_id": "33", "circulate_market_value": "59162415000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 75, "hot_rank_chg": -5, "stock_cnt": 5836, "price": "64.81", "change": "-5.10", "market_id": "17", "circulate_market_value": "69620218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600500", "name": "中化国际", "hot_rank": 76, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "8.93", "change": "3.36", "market_id": "17", "circulate_market_value": "32043575000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.46}, {"name": "锂电池", "change_pct": -3.29}, {"name": "环氧树脂", "change_pct": -0.88}, {"name": "橡胶", "change_pct": 2.3}, {"name": "新能源汽车", "change_pct": -2.64}, {"name": "环氧丙烷", "change_pct": -1.98}, {"name": "动力电池回收", "change_pct": -3.42}, {"name": "虫害防治", "change_pct": -1.59}, {"name": "国企改革", "change_pct": -1.59}, {"name": "电子树脂", "change_pct": -4.25}]}, {"code": "600330", "name": "天通股份", "hot_rank": 77, "hot_rank_chg": -42, "stock_cnt": 5836, "price": "33.66", "change": "-5.45", "market_id": "17", "circulate_market_value": "41517402000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 78, "hot_rank_chg": 13, "stock_cnt": 5836, "price": "34.50", "change": "-7.53", "market_id": "17", "circulate_market_value": "76567670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 79, "hot_rank_chg": 8, "stock_cnt": 5836, "price": "55.26", "change": "-0.90", "market_id": "33", "circulate_market_value": "274426830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002254", "name": "泰和新材", "hot_rank": 80, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "19.43", "change": "-3.37", "market_id": "33", "circulate_market_value": "16579093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 81, "hot_rank_chg": -67, "stock_cnt": 5836, "price": "911.90", "change": "2.35", "market_id": "33", "circulate_market_value": "150385830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 82, "hot_rank_chg": 39, "stock_cnt": 5836, "price": "52.14", "change": "-5.54", "market_id": "33", "circulate_market_value": "78679835000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300260", "name": "新莱应材", "hot_rank": 83, "hot_rank_chg": 580, "stock_cnt": 5836, "price": "97.32", "change": "20.00", "market_id": "33", "circulate_market_value": "27995704000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 84, "hot_rank_chg": -3, "stock_cnt": 5836, "price": "16.69", "change": "-6.66", "market_id": "33", "circulate_market_value": "120163073000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 85, "hot_rank_chg": 52, "stock_cnt": 5836, "price": "24.57", "change": "3.67", "market_id": "17", "circulate_market_value": "15445091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 86, "hot_rank_chg": -4, "stock_cnt": 5836, "price": "35.61", "change": "-3.42", "market_id": "33", "circulate_market_value": "27861429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 87, "hot_rank_chg": -29, "stock_cnt": 5836, "price": "25.06", "change": "-1.84", "market_id": "17", "circulate_market_value": "516486950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600141", "name": "兴发集团", "hot_rank": 88, "hot_rank_chg": -68, "stock_cnt": 5836, "price": "47.90", "change": "0.89", "market_id": "17", "circulate_market_value": "57563339000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 89, "hot_rank_chg": 66, "stock_cnt": 5836, "price": "35.07", "change": "4.25", "market_id": "33", "circulate_market_value": "13164962700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 90, "hot_rank_chg": 36, "stock_cnt": 5836, "price": "73.34", "change": "5.25", "market_id": "17", "circulate_market_value": "28061681000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 91, "hot_rank_chg": -49, "stock_cnt": 5836, "price": "393.00", "change": "0.77", "market_id": "17", "circulate_market_value": "56973541000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 92, "hot_rank_chg": 282, "stock_cnt": 5836, "price": "17.14", "change": "10.01", "market_id": "33", "circulate_market_value": "13764659000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接投资长鑫科技"}, {"code": "600392", "name": "盛和资源", "hot_rank": 93, "hot_rank_chg": 15, "stock_cnt": 5836, "price": "31.06", "change": "-3.51", "market_id": "17", "circulate_market_value": "54460322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 94, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "306.90", "change": "0.25", "market_id": "33", "circulate_market_value": "138165480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 95, "hot_rank_chg": 12, "stock_cnt": 5836, "price": "20.39", "change": "-3.41", "market_id": "33", "circulate_market_value": "272273700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601179", "name": "中国西电", "hot_rank": 96, "hot_rank_chg": 52, "stock_cnt": 5836, "price": "15.10", "change": "-6.15", "market_id": "17", "circulate_market_value": "77400824000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 97, "hot_rank_chg": -5, "stock_cnt": 5836, "price": "13.61", "change": "-7.48", "market_id": "33", "circulate_market_value": "12059891600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 98, "hot_rank_chg": 18, "stock_cnt": 5836, "price": "72.51", "change": "-6.55", "market_id": "17", "circulate_market_value": "73238263000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 99, "hot_rank_chg": 34, "stock_cnt": 5836, "price": "345.01", "change": "4.63", "market_id": "33", "circulate_market_value": "76346858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300323", "name": "华灿光电", "hot_rank": 100, "hot_rank_chg": 132, "stock_cnt": 5836, "price": "19.74", "change": "7.64", "market_id": "33", "circulate_market_value": "23421326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "603517": "[行政处罚事先告知书] 绝味食品：关于收到中国证券监督管理委员会湖南监管局《行政处罚事先告知书》的公告"};