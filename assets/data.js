const UPDATE_TIME = "2026-06-26 06:52";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -0.22,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续188天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.39,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续235天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "光刻机",
    "rise": 1.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创半导体ETF",
    "code": "886054"
  },
  {
    "name": "商业航天",
    "rise": -1.53,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续164天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PCB概念",
    "rise": -2.35,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续58天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "猪肉",
    "rise": 0.63,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "先进封装",
    "rise": -0.18,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "中芯国际概念",
    "rise": 1.28,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "光纤概念",
    "rise": -2.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续64天上榜",
    "rankChg": 0,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "创新药",
    "rise": -3.46,
    "rate": 0,
    "tag": "",
    "hotTag": "连续65天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "ST板块",
    "rise": -0.39,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续73天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "培育钻石",
    "rise": -2.6,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "光刻胶",
    "rise": 0.2,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "算力租赁",
    "rise": -3.71,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续99天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": -2.84,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续399天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "液冷服务器",
    "rise": -2.79,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "芯片概念",
    "rise": -1.52,
    "rate": 0,
    "tag": "26家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "国家大基金持股",
    "rise": -0.33,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "AI应用",
    "rise": -3.1,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "电子纸",
    "rise": 0.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885953"
  }
];
const THS_EVENTS = [
  {
    "title": "全球巨头今年两轮涨价！AI催热半导体硅片赛道，国内已有厂商调价！",
    "desc": "",
    "heat": 772517,
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
    "heat": 161011,
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
        "chg": 19.981499
      }
    ]
  },
  {
    "title": "国家发改委、国家能源局印发《新型能源体系建设“十五五”规划》",
    "desc": "",
    "heat": 75821,
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
    "heat": 5,
    "direction": "HVDC供电",
    "themes": [
      "HVDC供电"
    ],
    "stocks": [
      {
        "name": "科华数据",
        "code": "002335",
        "chg": 3.64497
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "大硅片",
    "change": "+4.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+4.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子布",
    "change": "+2.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "橡胶",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有机硅",
    "change": "+1.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+1.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+1.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃基板封装",
    "change": "+1.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "HEPS概念",
    "change": "+1.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D感应",
    "change": "+1.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "3D玻璃",
    "change": "+1.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+0.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "MicroLED",
    "change": "+0.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液晶面板/LCD",
    "change": "+0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻璃",
    "change": "+0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "筹码集中",
    "change": "+0.36%",
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
    "stock_cnt": 5853,
    "price": "7.84",
    "change": "4.25",
    "market_id": "33",
    "circulate_market_value": "277278330000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.78
      },
      {
        "name": "折叠屏",
        "change_pct": -1.27
      },
      {
        "name": "手机产业链",
        "change_pct": -1.71
      },
      {
        "name": "超高清视频",
        "change_pct": -1.68
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.44
      },
      {
        "name": "半导体",
        "change_pct": 0.11
      },
      {
        "name": "人工智能",
        "change_pct": -2.86
      },
      {
        "name": "互联网医疗",
        "change_pct": -3.44
      },
      {
        "name": "VR&AR",
        "change_pct": -1.09
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "京津冀",
        "change_pct": -2.1
      },
      {
        "name": "物联网",
        "change_pct": -2.83
      },
      {
        "name": "指纹识别",
        "change_pct": -0.19
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.45
      },
      {
        "name": "白马股",
        "change_pct": -1.94
      },
      {
        "name": "智能制造",
        "change_pct": -2.24
      },
      {
        "name": "小米概念股",
        "change_pct": -1.84
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.53
      },
      {
        "name": "全息概念",
        "change_pct": -2.14
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -2.5
      },
      {
        "name": "MicroLED",
        "change_pct": 0.54
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.21
      },
      {
        "name": "智能手表",
        "change_pct": -2.9
      },
      {
        "name": "MiniLED",
        "change_pct": -0.19
      },
      {
        "name": "传感器",
        "change_pct": -1.67
      },
      {
        "name": "大硅片",
        "change_pct": 4.94
      },
      {
        "name": "AI PC",
        "change_pct": -2.31
      },
      {
        "name": "华为产业链",
        "change_pct": -2.57
      },
      {
        "name": "回购",
        "change_pct": -1.91
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.79
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 9,
    "hot_rank_chg": 21,
    "stock_cnt": 5853,
    "price": "7.28",
    "change": "-2.54",
    "market_id": "17",
    "circulate_market_value": "90243529000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -1.74
      },
      {
        "name": "核电",
        "change_pct": -1.94
      },
      {
        "name": "强势人气股",
        "change_pct": -0.69
      },
      {
        "name": "电力体制改革",
        "change_pct": -1.71
      },
      {
        "name": "水电",
        "change_pct": -1.26
      },
      {
        "name": "火电",
        "change_pct": -2.17
      },
      {
        "name": "光伏",
        "change_pct": -0.88
      },
      {
        "name": "风电",
        "change_pct": -1.45
      },
      {
        "name": "国企改革",
        "change_pct": -1.95
      },
      {
        "name": "算电协同",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 24,
    "hot_rank_chg": -1,
    "stock_cnt": 5853,
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
        "change_pct": -2.05
      },
      {
        "name": "电竞",
        "change_pct": -2.13
      },
      {
        "name": "手游",
        "change_pct": -1.87
      },
      {
        "name": "强势人气股",
        "change_pct": -0.69
      },
      {
        "name": "人工智能",
        "change_pct": -2.86
      },
      {
        "name": "游戏",
        "change_pct": -2.67
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -3.25
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.44
      },
      {
        "name": "快手概念股",
        "change_pct": -3.48
      },
      {
        "name": "元宇宙",
        "change_pct": -1.92
      },
      {
        "name": "虚拟数字人",
        "change_pct": -2.42
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.52
      },
      {
        "name": "web3.0",
        "change_pct": -2.87
      },
      {
        "name": "AIGC概念",
        "change_pct": -3.2
      },
      {
        "name": "数据要素",
        "change_pct": -3.25
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -3.4
      },
      {
        "name": "AI营销",
        "change_pct": -2.7
      },
      {
        "name": "ChatGPT",
        "change_pct": -3.49
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -1.79
      },
      {
        "name": "人工智能大模型",
        "change_pct": -3.78
      },
      {
        "name": "人形机器人",
        "change_pct": -2.4
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -2.58
      },
      {
        "name": "多模态",
        "change_pct": -3.58
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -3.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -2.23
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.53
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 43,
    "hot_rank_chg": -32,
    "stock_cnt": 5853,
    "price": "5.43",
    "change": "1.69",
    "market_id": "33",
    "circulate_market_value": "103886946000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.42
      },
      {
        "name": "手机产业链",
        "change_pct": -1.87
      },
      {
        "name": "超高清视频",
        "change_pct": -1.68
      },
      {
        "name": "半导体",
        "change_pct": 0.11
      },
      {
        "name": "OLED",
        "change_pct": 0.17
      },
      {
        "name": "光伏",
        "change_pct": -0.88
      },
      {
        "name": "黑色家电",
        "change_pct": -2.16
      },
      {
        "name": "家电",
        "change_pct": -2.07
      },
      {
        "name": "智能制造",
        "change_pct": -2.24
      },
      {
        "name": "工业互联网",
        "change_pct": -2.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.84
      },
      {
        "name": "国产芯片",
        "change_pct": -0.95
      },
      {
        "name": "腾讯概念股",
        "change_pct": -3.44
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.41
      },
      {
        "name": "MicroLED",
        "change_pct": 0.4
      },
      {
        "name": "MiniLED",
        "change_pct": -0.3
      },
      {
        "name": "华为产业链",
        "change_pct": -2.57
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 59,
    "hot_rank_chg": -22,
    "stock_cnt": 5853,
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
        "change_pct": -2.35
      },
      {
        "name": "锂电池",
        "change_pct": -3.97
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.96
      },
      {
        "name": "强势人气股",
        "change_pct": -0.77
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.82
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": -1.47
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 60,
    "hot_rank_chg": 72,
    "stock_cnt": 5853,
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
        "change_pct": -0.1
      },
      {
        "name": "一带一路",
        "change_pct": -2.05
      },
      {
        "name": "京津冀",
        "change_pct": -2.17
      },
      {
        "name": "光伏",
        "change_pct": -1.0
      },
      {
        "name": "碳中和",
        "change_pct": -2.03
      },
      {
        "name": "国产芯片",
        "change_pct": -1.14
      },
      {
        "name": "IGBT",
        "change_pct": -1.76
      },
      {
        "name": "颗粒硅",
        "change_pct": 0.85
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.18
      },
      {
        "name": "大硅片",
        "change_pct": 4.76
      }
    ]
  },
  {
    "code": "002456",
    "name": "欧菲光",
    "hot_rank": 73,
    "hot_rank_chg": 388,
    "stock_cnt": 5853,
    "price": "9.58",
    "change": "9.49",
    "market_id": "33",
    "circulate_market_value": "31782752000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.42
      },
      {
        "name": "手机产业链",
        "change_pct": -1.87
      },
      {
        "name": "超高清视频",
        "change_pct": -1.8
      },
      {
        "name": "深圳本地股",
        "change_pct": -2.07
      },
      {
        "name": "股权转让",
        "change_pct": -1.47
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.81
      },
      {
        "name": "VR&AR",
        "change_pct": -1.23
      },
      {
        "name": "3D感应",
        "change_pct": 0.9
      },
      {
        "name": "人脸识别",
        "change_pct": -1.95
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.97
      },
      {
        "name": "指纹识别",
        "change_pct": -0.36
      },
      {
        "name": "汽车零部件",
        "change_pct": -2.54
      },
      {
        "name": "虹膜识别",
        "change_pct": -2.08
      },
      {
        "name": "机器人",
        "change_pct": -2.69
      },
      {
        "name": "机器视觉",
        "change_pct": -1.92
      },
      {
        "name": "无人机",
        "change_pct": -1.71
      },
      {
        "name": "智能制造",
        "change_pct": -2.35
      },
      {
        "name": "小米概念股",
        "change_pct": -1.97
      },
      {
        "name": "激光雷达",
        "change_pct": -2.41
      },
      {
        "name": "元宇宙",
        "change_pct": -2.04
      },
      {
        "name": "电子后视镜",
        "change_pct": -1.96
      },
      {
        "name": "传感器",
        "change_pct": -1.8
      },
      {
        "name": "华为产业链",
        "change_pct": -2.69
      },
      {
        "name": "毫米波雷达",
        "change_pct": -2.8
      },
      {
        "name": "星闪概念",
        "change_pct": -3.05
      },
      {
        "name": "智能座舱",
        "change_pct": -2.85
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 74,
    "hot_rank_chg": 192,
    "stock_cnt": 5853,
    "price": "9.62",
    "change": "7.01",
    "market_id": "33",
    "circulate_market_value": "18062722000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -0.1
      },
      {
        "name": "光伏",
        "change_pct": -1.0
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.22
      },
      {
        "name": "新能源车零部件",
        "change_pct": -3.02
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.13
      },
      {
        "name": "氮化镓",
        "change_pct": -1.16
      },
      {
        "name": "碳化硅",
        "change_pct": -1.37
      },
      {
        "name": "地摊经济",
        "change_pct": -2.58
      },
      {
        "name": "人形机器人",
        "change_pct": -2.53
      }
    ]
  },
  {
    "code": "300088",
    "name": "长信科技",
    "hot_rank": 78,
    "hot_rank_chg": 124,
    "stock_cnt": 5853,
    "price": "11.66",
    "change": "13.31",
    "market_id": "33",
    "circulate_market_value": "28980958000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": -2.79
      },
      {
        "name": "长三角一体化",
        "change_pct": -2.42
      },
      {
        "name": "车联网/车路云",
        "change_pct": -2.79
      },
      {
        "name": "折叠屏",
        "change_pct": -1.42
      },
      {
        "name": "手机产业链",
        "change_pct": -1.87
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.57
      },
      {
        "name": "特斯拉",
        "change_pct": -3.09
      },
      {
        "name": "无人驾驶",
        "change_pct": -2.81
      },
      {
        "name": "石墨烯",
        "change_pct": -3.27
      },
      {
        "name": "VR&AR",
        "change_pct": -1.23
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.13
      },
      {
        "name": "OLED",
        "change_pct": 0.02
      },
      {
        "name": "3D玻璃",
        "change_pct": 0.97
      },
      {
        "name": "大数据",
        "change_pct": -3.48
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.97
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.41
      },
      {
        "name": "MicroLED",
        "change_pct": 0.4
      },
      {
        "name": "元宇宙",
        "change_pct": -2.04
      },
      {
        "name": "东数西算/算力",
        "change_pct": -3.61
      },
      {
        "name": "电子后视镜",
        "change_pct": -1.96
      },
      {
        "name": "国企改革",
        "change_pct": -2.03
      },
      {
        "name": "智能手表",
        "change_pct": -3.03
      },
      {
        "name": "华为产业链",
        "change_pct": -2.69
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 81,
    "hot_rank_chg": -27,
    "stock_cnt": 5853,
    "price": "10.56",
    "change": "-5.71",
    "market_id": "17",
    "circulate_market_value": "31409466000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -2.35
      },
      {
        "name": "禽流感",
        "change_pct": -2.98
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -3.85
      },
      {
        "name": "农药",
        "change_pct": -1.39
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": -1.35
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "600909",
    "name": "华安证券",
    "hot_rank": 91,
    "hot_rank_chg": 15,
    "stock_cnt": 5853,
    "price": "12.15",
    "change": "0.83",
    "market_id": "17",
    "circulate_market_value": "61044143000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -2.42
      },
      {
        "name": "期货概念",
        "change_pct": -4.97
      },
      {
        "name": "券商",
        "change_pct": -3.62
      },
      {
        "name": "安徽国企改革",
        "change_pct": -1.13
      },
      {
        "name": "大金融",
        "change_pct": -2.57
      },
      {
        "name": "国企改革",
        "change_pct": -2.03
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "001399", "name": "惠科股份", "hot_rank": 1, "hot_rank_chg": 65, "stock_cnt": 5853, "price": "43.34", "change": "328.16", "market_id": "33", "circulate_market_value": "18656456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "7.84", "change": "4.25", "market_id": "33", "circulate_market_value": "277278330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.78}, {"name": "折叠屏", "change_pct": -1.27}, {"name": "手机产业链", "change_pct": -1.71}, {"name": "超高清视频", "change_pct": -1.68}, {"name": "苹果产业链", "change_pct": -2.44}, {"name": "半导体", "change_pct": 0.11}, {"name": "人工智能", "change_pct": -2.86}, {"name": "互联网医疗", "change_pct": -3.44}, {"name": "VR&AR", "change_pct": -1.09}, {"name": "OLED", "change_pct": 0.17}, {"name": "京津冀", "change_pct": -2.1}, {"name": "物联网", "change_pct": -2.83}, {"name": "指纹识别", "change_pct": -0.19}, {"name": "汽车零部件", "change_pct": -2.45}, {"name": "白马股", "change_pct": -1.94}, {"name": "智能制造", "change_pct": -2.24}, {"name": "小米概念股", "change_pct": -1.84}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "液晶面板/LCD", "change_pct": 0.53}, {"name": "全息概念", "change_pct": -2.14}, {"name": "理想汽车概念股", "change_pct": -2.5}, {"name": "MicroLED", "change_pct": 0.54}, {"name": "钙钛矿电池", "change_pct": -0.21}, {"name": "智能手表", "change_pct": -2.9}, {"name": "MiniLED", "change_pct": -0.19}, {"name": "传感器", "change_pct": -1.67}, {"name": "大硅片", "change_pct": 4.94}, {"name": "AI PC", "change_pct": -2.31}, {"name": "华为产业链", "change_pct": -2.57}, {"name": "回购", "change_pct": -1.91}, {"name": "智能眼镜/MR头显", "change_pct": -1.79}, {"name": "玻璃基板封装", "change_pct": 1.15}]}, {"code": "600206", "name": "有研新材", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5853, "price": "60.83", "change": "8.30", "market_id": "17", "circulate_market_value": "51487374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "61.29", "change": "-10.00", "market_id": "17", "circulate_market_value": "209179680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "101.54", "change": "-2.56", "market_id": "17", "circulate_market_value": "181625580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 6, "hot_rank_chg": -3, "stock_cnt": 5853, "price": "27.12", "change": "6.95", "market_id": "17", "circulate_market_value": "56618047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5853, "price": "111.13", "change": "-9.65", "market_id": "17", "circulate_market_value": "271732980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 8, "hot_rank_chg": -3, "stock_cnt": 5853, "price": "22.60", "change": "0.85", "market_id": "33", "circulate_market_value": "75058703000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 9, "hot_rank_chg": 21, "stock_cnt": 5853, "price": "7.28", "change": "-2.54", "market_id": "17", "circulate_market_value": "90243529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -1.74}, {"name": "核电", "change_pct": -1.94}, {"name": "强势人气股", "change_pct": -0.69}, {"name": "电力体制改革", "change_pct": -1.71}, {"name": "水电", "change_pct": -1.26}, {"name": "火电", "change_pct": -2.17}, {"name": "光伏", "change_pct": -0.88}, {"name": "风电", "change_pct": -1.45}, {"name": "国企改革", "change_pct": -1.95}, {"name": "算电协同", "change_pct": -2.74}]}, {"code": "002579", "name": "中京电子", "hot_rank": 10, "hot_rank_chg": 11, "stock_cnt": 5853, "price": "23.02", "change": "8.07", "market_id": "33", "circulate_market_value": "13430142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5853, "price": "74.32", "change": "4.96", "market_id": "17", "circulate_market_value": "297473090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "54.20", "change": "1.88", "market_id": "33", "circulate_market_value": "85318338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 13, "hot_rank_chg": 28, "stock_cnt": 5853, "price": "70.47", "change": "-8.48", "market_id": "17", "circulate_market_value": "1398214700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 14, "hot_rank_chg": 55, "stock_cnt": 5853, "price": "75.06", "change": "6.45", "market_id": "17", "circulate_market_value": "57953563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5853, "price": "960.98", "change": "8.64", "market_id": "33", "circulate_market_value": "159632610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 16, "hot_rank_chg": -3, "stock_cnt": 5853, "price": "21.78", "change": "0.41", "market_id": "17", "circulate_market_value": "108561047000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5853, "price": "770.88", "change": "-0.66", "market_id": "17", "circulate_market_value": "514798950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5853, "price": "16.82", "change": "-7.94", "market_id": "17", "circulate_market_value": "21466622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 19, "hot_rank_chg": 401, "stock_cnt": 5853, "price": "77.77", "change": "10.00", "market_id": "17", "circulate_market_value": "91962180000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002202", "name": "金风科技", "hot_rank": 20, "hot_rank_chg": 173, "stock_cnt": 5853, "price": "23.40", "change": "6.85", "market_id": "33", "circulate_market_value": "78706019000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 21, "hot_rank_chg": 19, "stock_cnt": 5853, "price": "65.66", "change": "-9.99", "market_id": "17", "circulate_market_value": "96009199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 22, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "152.40", "change": "-0.26", "market_id": "33", "circulate_market_value": "145805250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 23, "hot_rank_chg": 49, "stock_cnt": 5853, "price": "103.08", "change": "4.76", "market_id": "33", "circulate_market_value": "87996162000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 24, "hot_rank_chg": -1, "stock_cnt": 5853, "price": "8.83", "change": "9.96", "market_id": "33", "circulate_market_value": "14354876000.00", "change_type": "1", "change_section": "15", "change_days": "8", "change_reason": "具身智能数据集", "xgb_concepts": [{"name": "跨境电商", "change_pct": -2.05}, {"name": "电竞", "change_pct": -2.13}, {"name": "手游", "change_pct": -1.87}, {"name": "强势人气股", "change_pct": -0.69}, {"name": "人工智能", "change_pct": -2.86}, {"name": "游戏", "change_pct": -2.67}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -3.25}, {"name": "腾讯概念股", "change_pct": -3.44}, {"name": "快手概念股", "change_pct": -3.48}, {"name": "元宇宙", "change_pct": -1.92}, {"name": "虚拟数字人", "change_pct": -2.42}, {"name": "东数西算/算力", "change_pct": -3.52}, {"name": "web3.0", "change_pct": -2.87}, {"name": "AIGC概念", "change_pct": -3.2}, {"name": "数据要素", "change_pct": -3.25}, {"name": "字节跳动概念股", "change_pct": -3.4}, {"name": "AI营销", "change_pct": -2.7}, {"name": "ChatGPT", "change_pct": -3.49}, {"name": "智能眼镜/MR头显", "change_pct": -1.79}, {"name": "人工智能大模型", "change_pct": -3.78}, {"name": "人形机器人", "change_pct": -2.4}, {"name": "短剧/互动影游", "change_pct": -2.58}, {"name": "多模态", "change_pct": -3.58}, {"name": "Sora/AI视频", "change_pct": -3.46}, {"name": "IP经济/谷子经济", "change_pct": -2.23}, {"name": "小红书概念股", "change_pct": -2.53}]}, {"code": "000636", "name": "风华高科", "hot_rank": 25, "hot_rank_chg": -18, "stock_cnt": 5853, "price": "77.98", "change": "-2.06", "market_id": "33", "circulate_market_value": "90223882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 26, "hot_rank_chg": 10, "stock_cnt": 5853, "price": "50.30", "change": "0.86", "market_id": "17", "circulate_market_value": "83686173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 27, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "187.09", "change": "-10.00", "market_id": "17", "circulate_market_value": "48275020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 28, "hot_rank_chg": 5, "stock_cnt": 5853, "price": "177.78", "change": "-5.04", "market_id": "17", "circulate_market_value": "425670540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5853, "price": "72.13", "change": "-7.27", "market_id": "33", "circulate_market_value": "109484178000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 30, "hot_rank_chg": 16, "stock_cnt": 5853, "price": "36.18", "change": "-5.97", "market_id": "33", "circulate_market_value": "42588173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 31, "hot_rank_chg": 139, "stock_cnt": 5853, "price": "15.35", "change": "0.72", "market_id": "17", "circulate_market_value": "22606050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5853, "price": "260.90", "change": "-5.41", "market_id": "33", "circulate_market_value": "361663610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 33, "hot_rank_chg": -2, "stock_cnt": 5853, "price": "567.50", "change": "-7.04", "market_id": "33", "circulate_market_value": "711782990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 34, "hot_rank_chg": 18, "stock_cnt": 5853, "price": "99.91", "change": "-5.46", "market_id": "33", "circulate_market_value": "145161770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 35, "hot_rank_chg": -13, "stock_cnt": 5853, "price": "18.64", "change": "-8.94", "market_id": "33", "circulate_market_value": "60124715000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 36, "hot_rank_chg": 19, "stock_cnt": 5853, "price": "1256.88", "change": "-5.03", "market_id": "33", "circulate_market_value": "1395061100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 37, "hot_rank_chg": 2, "stock_cnt": 5853, "price": "41.81", "change": "-4.50", "market_id": "33", "circulate_market_value": "45114050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 38, "hot_rank_chg": 11, "stock_cnt": 5853, "price": "67.30", "change": "-9.57", "market_id": "33", "circulate_market_value": "491392840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 39, "hot_rank_chg": -30, "stock_cnt": 5853, "price": "98.81", "change": "1.01", "market_id": "17", "circulate_market_value": "144564400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 40, "hot_rank_chg": 43, "stock_cnt": 5853, "price": "16.90", "change": "-9.09", "market_id": "33", "circulate_market_value": "25800962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 41, "hot_rank_chg": -12, "stock_cnt": 5853, "price": "120.40", "change": "-7.41", "market_id": "33", "circulate_market_value": "78664671000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 42, "hot_rank_chg": 113, "stock_cnt": 5853, "price": "37.02", "change": "10.02", "market_id": "33", "circulate_market_value": "13893014000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体封装材料"}, {"code": "000100", "name": "TCL科技", "hot_rank": 43, "hot_rank_chg": -32, "stock_cnt": 5853, "price": "5.43", "change": "1.69", "market_id": "33", "circulate_market_value": "103886946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.42}, {"name": "手机产业链", "change_pct": -1.87}, {"name": "超高清视频", "change_pct": -1.68}, {"name": "半导体", "change_pct": 0.11}, {"name": "OLED", "change_pct": 0.17}, {"name": "光伏", "change_pct": -0.88}, {"name": "黑色家电", "change_pct": -2.16}, {"name": "家电", "change_pct": -2.07}, {"name": "智能制造", "change_pct": -2.24}, {"name": "工业互联网", "change_pct": -2.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.84}, {"name": "国产芯片", "change_pct": -0.95}, {"name": "腾讯概念股", "change_pct": -3.44}, {"name": "液晶面板/LCD", "change_pct": 0.41}, {"name": "MicroLED", "change_pct": 0.4}, {"name": "MiniLED", "change_pct": -0.3}, {"name": "华为产业链", "change_pct": -2.57}, {"name": "玻璃基板封装", "change_pct": 0.98}]}, {"code": "605006", "name": "山东玻纤", "hot_rank": 44, "hot_rank_chg": 93, "stock_cnt": 5853, "price": "25.24", "change": "6.28", "market_id": "17", "circulate_market_value": "15834674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 45, "hot_rank_chg": 58, "stock_cnt": 5853, "price": "173.18", "change": "-5.47", "market_id": "33", "circulate_market_value": "143618650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 46, "hot_rank_chg": 39, "stock_cnt": 5853, "price": "76.22", "change": "-10.00", "market_id": "17", "circulate_market_value": "96922987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 47, "hot_rank_chg": -4, "stock_cnt": 5853, "price": "147.40", "change": "-4.83", "market_id": "33", "circulate_market_value": "283633770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 48, "hot_rank_chg": 16, "stock_cnt": 5853, "price": "188.66", "change": "4.39", "market_id": "33", "circulate_market_value": "60194429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600141", "name": "兴发集团", "hot_rank": 49, "hot_rank_chg": -29, "stock_cnt": 5853, "price": "49.09", "change": "3.37", "market_id": "17", "circulate_market_value": "58981392000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 50, "hot_rank_chg": 50, "stock_cnt": 5853, "price": "52.29", "change": "4.56", "market_id": "17", "circulate_market_value": "34095537000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 51, "hot_rank_chg": 341, "stock_cnt": 5853, "price": "20.06", "change": "5.91", "market_id": "17", "circulate_market_value": "66216938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 52, "hot_rank_chg": 74, "stock_cnt": 5853, "price": "74.36", "change": "6.67", "market_id": "17", "circulate_market_value": "28440479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 53, "hot_rank_chg": 71, "stock_cnt": 5853, "price": "298.38", "change": "7.82", "market_id": "17", "circulate_market_value": "262501890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 54, "hot_rank_chg": -10, "stock_cnt": 5853, "price": "179.10", "change": "4.11", "market_id": "17", "circulate_market_value": "40230956000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002167", "name": "东方锆业", "hot_rank": 55, "hot_rank_chg": -7, "stock_cnt": 5853, "price": "21.66", "change": "-4.70", "market_id": "33", "circulate_market_value": "16464071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 56, "hot_rank_chg": -3, "stock_cnt": 5853, "price": "241.00", "change": "-7.81", "market_id": "33", "circulate_market_value": "188139130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 57, "hot_rank_chg": 64, "stock_cnt": 5853, "price": "50.50", "change": "-8.52", "market_id": "33", "circulate_market_value": "76205056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 58, "hot_rank_chg": 29, "stock_cnt": 5853, "price": "55.80", "change": "0.16", "market_id": "33", "circulate_market_value": "277358960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 59, "hot_rank_chg": -22, "stock_cnt": 5853, "price": "5.76", "change": "9.92", "market_id": "33", "circulate_market_value": "5949710200.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "PCB上游", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.35}, {"name": "锂电池", "change_pct": -3.97}, {"name": "ST摘帽", "change_pct": -0.96}, {"name": "强势人气股", "change_pct": -0.77}, {"name": "粤港澳大湾区", "change_pct": -1.82}, {"name": "新能源汽车", "change_pct": -3.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": -1.47}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 60, "hot_rank_chg": 72, "stock_cnt": 5853, "price": "11.19", "change": "10.03", "market_id": "33", "circulate_market_value": "45205136000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体硅片", "xgb_concepts": [{"name": "半导体", "change_pct": -0.1}, {"name": "一带一路", "change_pct": -2.05}, {"name": "京津冀", "change_pct": -2.17}, {"name": "光伏", "change_pct": -1.0}, {"name": "碳中和", "change_pct": -2.03}, {"name": "国产芯片", "change_pct": -1.14}, {"name": "IGBT", "change_pct": -1.76}, {"name": "颗粒硅", "change_pct": 0.85}, {"name": "异质结电池HJT", "change_pct": 0.18}, {"name": "大硅片", "change_pct": 4.76}]}, {"code": "301526", "name": "国际复材", "hot_rank": 61, "hot_rank_chg": 61, "stock_cnt": 5853, "price": "52.28", "change": "9.17", "market_id": "33", "circulate_market_value": "73407618000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 62, "hot_rank_chg": 0, "stock_cnt": 5853, "price": "15.40", "change": "-2.41", "market_id": "17", "circulate_market_value": "26704435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 63, "hot_rank_chg": 17, "stock_cnt": 5853, "price": "14.00", "change": "2.79", "market_id": "17", "circulate_market_value": "50263253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 64, "hot_rank_chg": 6, "stock_cnt": 5853, "price": "61.98", "change": "-9.44", "market_id": "17", "circulate_market_value": "66434699000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 65, "hot_rank_chg": 68, "stock_cnt": 5853, "price": "355.98", "change": "7.88", "market_id": "33", "circulate_market_value": "78719430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 66, "hot_rank_chg": 13, "stock_cnt": 5853, "price": "26.43", "change": "5.97", "market_id": "17", "circulate_market_value": "29985036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 67, "hot_rank_chg": -7, "stock_cnt": 5853, "price": "118.58", "change": "1.58", "market_id": "33", "circulate_market_value": "97852244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 68, "hot_rank_chg": 23, "stock_cnt": 5853, "price": "34.76", "change": "-6.89", "market_id": "17", "circulate_market_value": "77100314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002741", "name": "光华科技", "hot_rank": 69, "hot_rank_chg": 74, "stock_cnt": 5853, "price": "39.17", "change": "6.27", "market_id": "33", "circulate_market_value": "16696188000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300398", "name": "飞凯材料", "hot_rank": 70, "hot_rank_chg": 116, "stock_cnt": 5853, "price": "61.55", "change": "8.63", "market_id": "33", "circulate_market_value": "34894975000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 71, "hot_rank_chg": 36, "stock_cnt": 5853, "price": "20.13", "change": "-4.64", "market_id": "33", "circulate_market_value": "268801840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 72, "hot_rank_chg": -27, "stock_cnt": 5853, "price": "51.90", "change": "-2.99", "market_id": "33", "circulate_market_value": "78826127000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002456", "name": "欧菲光", "hot_rank": 73, "hot_rank_chg": 388, "stock_cnt": 5853, "price": "9.58", "change": "9.49", "market_id": "33", "circulate_market_value": "31782752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.42}, {"name": "手机产业链", "change_pct": -1.87}, {"name": "超高清视频", "change_pct": -1.8}, {"name": "深圳本地股", "change_pct": -2.07}, {"name": "股权转让", "change_pct": -1.47}, {"name": "无人驾驶", "change_pct": -2.81}, {"name": "VR&AR", "change_pct": -1.23}, {"name": "3D感应", "change_pct": 0.9}, {"name": "人脸识别", "change_pct": -1.95}, {"name": "3D玻璃", "change_pct": 0.97}, {"name": "指纹识别", "change_pct": -0.36}, {"name": "汽车零部件", "change_pct": -2.54}, {"name": "虹膜识别", "change_pct": -2.08}, {"name": "机器人", "change_pct": -2.69}, {"name": "机器视觉", "change_pct": -1.92}, {"name": "无人机", "change_pct": -1.71}, {"name": "智能制造", "change_pct": -2.35}, {"name": "小米概念股", "change_pct": -1.97}, {"name": "激光雷达", "change_pct": -2.41}, {"name": "元宇宙", "change_pct": -2.04}, {"name": "电子后视镜", "change_pct": -1.96}, {"name": "传感器", "change_pct": -1.8}, {"name": "华为产业链", "change_pct": -2.69}, {"name": "毫米波雷达", "change_pct": -2.8}, {"name": "星闪概念", "change_pct": -3.05}, {"name": "智能座舱", "change_pct": -2.85}]}, {"code": "002617", "name": "露笑科技", "hot_rank": 74, "hot_rank_chg": 192, "stock_cnt": 5853, "price": "9.62", "change": "7.01", "market_id": "33", "circulate_market_value": "18062722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -0.1}, {"name": "光伏", "change_pct": -1.0}, {"name": "新能源汽车", "change_pct": -3.22}, {"name": "新能源车零部件", "change_pct": -3.02}, {"name": "第三代半导体", "change_pct": -1.13}, {"name": "氮化镓", "change_pct": -1.16}, {"name": "碳化硅", "change_pct": -1.37}, {"name": "地摊经济", "change_pct": -2.58}, {"name": "人形机器人", "change_pct": -2.53}]}, {"code": "002837", "name": "英维克", "hot_rank": 75, "hot_rank_chg": -41, "stock_cnt": 5853, "price": "82.80", "change": "-4.79", "market_id": "33", "circulate_market_value": "93624544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 76, "hot_rank_chg": 25, "stock_cnt": 5853, "price": "58.28", "change": "10.00", "market_id": "17", "circulate_market_value": "18764597000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板上游"}, {"code": "600186", "name": "莲花控股", "hot_rank": 77, "hot_rank_chg": -51, "stock_cnt": 5853, "price": "14.37", "change": "-7.95", "market_id": "17", "circulate_market_value": "25692026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300088", "name": "长信科技", "hot_rank": 78, "hot_rank_chg": 124, "stock_cnt": 5853, "price": "11.66", "change": "13.31", "market_id": "33", "circulate_market_value": "28980958000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": -2.79}, {"name": "长三角一体化", "change_pct": -2.42}, {"name": "车联网/车路云", "change_pct": -2.79}, {"name": "折叠屏", "change_pct": -1.42}, {"name": "手机产业链", "change_pct": -1.87}, {"name": "苹果产业链", "change_pct": -2.57}, {"name": "特斯拉", "change_pct": -3.09}, {"name": "无人驾驶", "change_pct": -2.81}, {"name": "石墨烯", "change_pct": -3.27}, {"name": "VR&AR", "change_pct": -1.23}, {"name": "安徽国企改革", "change_pct": -1.13}, {"name": "OLED", "change_pct": 0.02}, {"name": "3D玻璃", "change_pct": 0.97}, {"name": "大数据", "change_pct": -3.48}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.97}, {"name": "液晶面板/LCD", "change_pct": 0.41}, {"name": "MicroLED", "change_pct": 0.4}, {"name": "元宇宙", "change_pct": -2.04}, {"name": "东数西算/算力", "change_pct": -3.61}, {"name": "电子后视镜", "change_pct": -1.96}, {"name": "国企改革", "change_pct": -2.03}, {"name": "智能手表", "change_pct": -3.03}, {"name": "华为产业链", "change_pct": -2.69}]}, {"code": "000547", "name": "航天发展", "hot_rank": 79, "hot_rank_chg": 316, "stock_cnt": 5853, "price": "18.90", "change": "2.05", "market_id": "33", "circulate_market_value": "30034388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 80, "hot_rank_chg": 18, "stock_cnt": 5853, "price": "52.16", "change": "-8.88", "market_id": "17", "circulate_market_value": "36027583000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 81, "hot_rank_chg": -27, "stock_cnt": 5853, "price": "10.56", "change": "-5.71", "market_id": "17", "circulate_market_value": "31409466000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -2.35}, {"name": "禽流感", "change_pct": -2.98}, {"name": "铜箔/覆铜板", "change_pct": -3.85}, {"name": "农药", "change_pct": -1.39}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": -1.35}, {"name": "PET复合铜箔", "change_pct": -1.66}]}, {"code": "301308", "name": "江波龙", "hot_rank": 82, "hot_rank_chg": -15, "stock_cnt": 5853, "price": "689.00", "change": "1.73", "market_id": "33", "circulate_market_value": "194195950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 83, "hot_rank_chg": -45, "stock_cnt": 5853, "price": "28.46", "change": "10.01", "market_id": "33", "circulate_market_value": "16931769000.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "转债摘牌"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 84, "hot_rank_chg": -21, "stock_cnt": 5853, "price": "22.75", "change": "-10.01", "market_id": "33", "circulate_market_value": "10290707700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688525", "name": "佰维存储", "hot_rank": 85, "hot_rank_chg": -34, "stock_cnt": 5853, "price": "501.77", "change": "4.65", "market_id": "17", "circulate_market_value": "237028260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 86, "hot_rank_chg": -12, "stock_cnt": 5853, "price": "29.60", "change": "10.00", "market_id": "17", "circulate_market_value": "27960364000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板TGV"}, {"code": "601208", "name": "东材科技", "hot_rank": 87, "hot_rank_chg": 29, "stock_cnt": 5853, "price": "73.70", "change": "-5.00", "market_id": "17", "circulate_market_value": "74450483000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 88, "hot_rank_chg": -11, "stock_cnt": 5853, "price": "319.01", "change": "-6.71", "market_id": "33", "circulate_market_value": "347206670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 89, "hot_rank_chg": 240, "stock_cnt": 5853, "price": "13.86", "change": "0.58", "market_id": "33", "circulate_market_value": "11213003200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603065", "name": "宿迁联盛", "hot_rank": 90, "hot_rank_chg": -40, "stock_cnt": 5853, "price": "21.92", "change": "9.04", "market_id": "17", "circulate_market_value": "9196338200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600909", "name": "华安证券", "hot_rank": 91, "hot_rank_chg": 15, "stock_cnt": 5853, "price": "12.15", "change": "0.83", "market_id": "17", "circulate_market_value": "61044143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -2.42}, {"name": "期货概念", "change_pct": -4.97}, {"name": "券商", "change_pct": -3.62}, {"name": "安徽国企改革", "change_pct": -1.13}, {"name": "大金融", "change_pct": -2.57}, {"name": "国企改革", "change_pct": -2.03}]}, {"code": "600160", "name": "巨化股份", "hot_rank": 92, "hot_rank_chg": 22, "stock_cnt": 5853, "price": "51.13", "change": "0.63", "market_id": "17", "circulate_market_value": "138011020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 93, "hot_rank_chg": -58, "stock_cnt": 5853, "price": "32.89", "change": "-7.61", "market_id": "17", "circulate_market_value": "40567658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 94, "hot_rank_chg": -36, "stock_cnt": 5853, "price": "25.19", "change": "-1.41", "market_id": "17", "circulate_market_value": "518753150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 95, "hot_rank_chg": 237, "stock_cnt": 5853, "price": "50.26", "change": "2.47", "market_id": "33", "circulate_market_value": "24533880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 96, "hot_rank_chg": -14, "stock_cnt": 5853, "price": "34.68", "change": "-5.91", "market_id": "33", "circulate_market_value": "27141617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 97, "hot_rank_chg": 170, "stock_cnt": 5853, "price": "33.66", "change": "3.92", "market_id": "33", "circulate_market_value": "127800429000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 98, "hot_rank_chg": 60, "stock_cnt": 5853, "price": "78.34", "change": "-4.70", "market_id": "33", "circulate_market_value": "273141300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688126", "name": "沪硅产业", "hot_rank": 99, "hot_rank_chg": 145, "stock_cnt": 5853, "price": "35.00", "change": "4.98", "market_id": "17", "circulate_market_value": "99388215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 100, "hot_rank_chg": 59, "stock_cnt": 5853, "price": "320.34", "change": "-8.52", "market_id": "33", "circulate_market_value": "277156550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "300237": "[行政处罚事先告知书] 美晨科技：关于收到中国证券监督管理委员会《行政处罚事先告知书》的公告", "300366": "[行政处罚事先告知书] 创意信息：2025-36 关于收到《行政处罚事先告知书》的公告"};