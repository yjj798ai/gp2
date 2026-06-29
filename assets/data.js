const UPDATE_TIME = "2026-06-29 13:03";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 6.08,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 1.75,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续189天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续236天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -3.11,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "可控核聚变",
    "rise": 1.2,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电网设备ETF",
    "code": "886065"
  },
  {
    "name": "减肥药",
    "rise": 7.44,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "商业航天",
    "rise": -1.26,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续165天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "先进封装",
    "rise": -0.16,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "芯片概念",
    "rise": -0.1,
    "rate": 0,
    "tag": "35家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "光刻胶",
    "rise": 1.57,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "UC半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.38,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "885893"
  },
  {
    "name": "CRO概念",
    "rise": 6.6,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "光纤概念",
    "rise": -2.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续65天上榜",
    "rankChg": -1,
    "etfName": "电信ETF",
    "code": "886084"
  },
  {
    "name": "中芯国际概念",
    "rise": 4.71,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "猪肉",
    "rise": 2.39,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": -1.08,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续400天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "氟化工概念",
    "rise": 2.89,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "化工行业ETF",
    "code": "885551"
  },
  {
    "name": "算力租赁",
    "rise": -1.69,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人工智能",
    "rise": -0.15,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 2,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "培育钻石",
    "rise": -2.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885937"
  }
];
const THS_EVENTS = [
  {
    "title": "医保目录初审公示+医药行业利润增长，创新药集体爆发！",
    "desc": "",
    "heat": 1043192,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价"
    ],
    "stocks": [
      {
        "name": "新赣江",
        "code": "920367",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "又一半导体气体或陷入短缺",
    "desc": "",
    "heat": 512495,
    "direction": "高纯二氧化碳",
    "themes": [
      "半导体应用",
      "食品医用级",
      "碳捕集回收与提纯",
      "电子特气"
    ],
    "stocks": [
      {
        "name": "广钢气体",
        "code": "688548",
        "chg": 20.005163
      }
    ]
  },
  {
    "title": "我国核聚变取得重要突破！",
    "desc": "",
    "heat": 219066,
    "direction": "可控核聚变",
    "themes": [
      "可控核聚变"
    ],
    "stocks": [
      {
        "name": "金宏气体",
        "code": "688106",
        "chg": 13.536232
      }
    ]
  },
  {
    "title": "今年以来算力相关产品加速出海 有武汉企业800G以上光模块出口同比增长超过100倍",
    "desc": "",
    "heat": 86994,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "OCS交换机"
    ],
    "stocks": [
      {
        "name": "华丰科技",
        "code": "688629",
        "chg": 18.077614
      }
    ]
  },
  {
    "title": "新剑传动创业板IPO获受理",
    "desc": "",
    "heat": 40805,
    "direction": "新剑传动 IPO",
    "themes": [
      "新剑传动",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "机器人",
        "code": "300024",
        "chg": 18.92247
      }
    ]
  },
  {
    "title": "康宁推出下一代玻璃光互连组件",
    "desc": "",
    "heat": 10000,
    "direction": "玻璃基光互联",
    "themes": [
      "玻璃基板",
      "TGV加工设备",
      "上游原片与核心材料"
    ],
    "stocks": [
      {
        "name": "华工科技",
        "code": "000988",
        "chg": 9.997515
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子特气",
    "change": "+8.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+7.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+7.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PD-1抑制剂",
    "change": "+7.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+7.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+6.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+6.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+6.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+5.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+5.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+5.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+5.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+5.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+5.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+5.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "+5.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+4.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+4.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.44%",
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
    "stock_cnt": 5840,
    "price": "7.95",
    "change": "2.05",
    "market_id": "33",
    "circulate_market_value": "281168720000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 1.48
      },
      {
        "name": "折叠屏",
        "change_pct": -2.74
      },
      {
        "name": "手机产业链",
        "change_pct": -2.91
      },
      {
        "name": "超高清视频",
        "change_pct": -0.95
      },
      {
        "name": "苹果产业链",
        "change_pct": -2.75
      },
      {
        "name": "半导体",
        "change_pct": 2.45
      },
      {
        "name": "人工智能",
        "change_pct": -0.14
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.54
      },
      {
        "name": "VR&AR",
        "change_pct": -2.38
      },
      {
        "name": "OLED",
        "change_pct": -0.58
      },
      {
        "name": "京津冀",
        "change_pct": -0.13
      },
      {
        "name": "物联网",
        "change_pct": -0.94
      },
      {
        "name": "指纹识别",
        "change_pct": -2.93
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.03
      },
      {
        "name": "白马股",
        "change_pct": 1.93
      },
      {
        "name": "智能制造",
        "change_pct": -0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.83
      },
      {
        "name": "国产芯片",
        "change_pct": 0.91
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.48
      },
      {
        "name": "全息概念",
        "change_pct": -1.28
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.38
      },
      {
        "name": "MicroLED",
        "change_pct": -2.66
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.46
      },
      {
        "name": "智能手表",
        "change_pct": -3.61
      },
      {
        "name": "MiniLED",
        "change_pct": -3.01
      },
      {
        "name": "传感器",
        "change_pct": -0.24
      },
      {
        "name": "大硅片",
        "change_pct": 7.63
      },
      {
        "name": "AI PC",
        "change_pct": -3.1
      },
      {
        "name": "华为产业链",
        "change_pct": -1.23
      },
      {
        "name": "回购",
        "change_pct": 1.28
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.07
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 17,
    "hot_rank_chg": -16,
    "stock_cnt": 5840,
    "price": "9.11",
    "change": "3.17",
    "market_id": "33",
    "circulate_market_value": "14810070000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.09
      },
      {
        "name": "电竞",
        "change_pct": 0.67
      },
      {
        "name": "手游",
        "change_pct": 1.06
      },
      {
        "name": "强势人气股",
        "change_pct": -1.97
      },
      {
        "name": "人工智能",
        "change_pct": -0.14
      },
      {
        "name": "游戏",
        "change_pct": 0.96
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.66
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.78
      },
      {
        "name": "快手概念股",
        "change_pct": -0.74
      },
      {
        "name": "元宇宙",
        "change_pct": -0.72
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.52
      },
      {
        "name": "web3.0",
        "change_pct": -1.22
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.35
      },
      {
        "name": "数据要素",
        "change_pct": -0.74
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.64
      },
      {
        "name": "AI营销",
        "change_pct": -0.08
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.67
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.07
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.03
      },
      {
        "name": "人形机器人",
        "change_pct": -0.95
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.23
      },
      {
        "name": "多模态",
        "change_pct": -0.27
      },
      {
        "name": "Sora/AI视频",
        "change_pct": -0.38
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.33
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 25,
    "hot_rank_chg": -11,
    "stock_cnt": 5840,
    "price": "11.73",
    "change": "4.83",
    "market_id": "33",
    "circulate_market_value": "47386617000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 2.45
      },
      {
        "name": "一带一路",
        "change_pct": -0.34
      },
      {
        "name": "京津冀",
        "change_pct": -0.13
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "碳中和",
        "change_pct": -0.2
      },
      {
        "name": "国产芯片",
        "change_pct": 0.91
      },
      {
        "name": "IGBT",
        "change_pct": 2.01
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.54
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.46
      },
      {
        "name": "大硅片",
        "change_pct": 7.63
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 36,
    "hot_rank_chg": 16,
    "stock_cnt": 5840,
    "price": "10.12",
    "change": "4.76",
    "market_id": "33",
    "circulate_market_value": "19001533000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 2.45
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.75
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.77
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.77
      },
      {
        "name": "氮化镓",
        "change_pct": 0.89
      },
      {
        "name": "碳化硅",
        "change_pct": 1.56
      },
      {
        "name": "地摊经济",
        "change_pct": 0.95
      },
      {
        "name": "人形机器人",
        "change_pct": -0.95
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 43,
    "hot_rank_chg": 8,
    "stock_cnt": 5840,
    "price": "7.04",
    "change": "-3.83",
    "market_id": "17",
    "circulate_market_value": "87268467000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.1
      },
      {
        "name": "核电",
        "change_pct": 0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -1.97
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.09
      },
      {
        "name": "水电",
        "change_pct": 0.88
      },
      {
        "name": "火电",
        "change_pct": 0.79
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "风电",
        "change_pct": -0.62
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "算电协同",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "601636",
    "name": "旗滨集团",
    "hot_rank": 48,
    "hot_rank_chg": 6,
    "stock_cnt": 5840,
    "price": "9.82",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "29053980000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "玻璃基板",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 0.71
      },
      {
        "name": "玻璃",
        "change_pct": 0.08
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "回购",
        "change_pct": 1.28
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 73,
    "hot_rank_chg": -40,
    "stock_cnt": 5840,
    "price": "5.29",
    "change": "-2.04",
    "market_id": "33",
    "circulate_market_value": "101208461000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.74
      },
      {
        "name": "手机产业链",
        "change_pct": -2.91
      },
      {
        "name": "超高清视频",
        "change_pct": -0.95
      },
      {
        "name": "半导体",
        "change_pct": 2.45
      },
      {
        "name": "OLED",
        "change_pct": -0.58
      },
      {
        "name": "光伏",
        "change_pct": -0.65
      },
      {
        "name": "黑色家电",
        "change_pct": -0.32
      },
      {
        "name": "家电",
        "change_pct": 0.6
      },
      {
        "name": "智能制造",
        "change_pct": -0.85
      },
      {
        "name": "工业互联网",
        "change_pct": -0.7
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.83
      },
      {
        "name": "国产芯片",
        "change_pct": 0.91
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.78
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.48
      },
      {
        "name": "MicroLED",
        "change_pct": -2.66
      },
      {
        "name": "MiniLED",
        "change_pct": -3.01
      },
      {
        "name": "华为产业链",
        "change_pct": -1.23
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.7
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 74,
    "hot_rank_chg": -8,
    "stock_cnt": 5840,
    "price": "12.80",
    "change": "2.07",
    "market_id": "17",
    "circulate_market_value": "64516870000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.1
      },
      {
        "name": "军民融合",
        "change_pct": -1.18
      },
      {
        "name": "有色 · 锑",
        "change_pct": 1.25
      },
      {
        "name": "有色 · 钼",
        "change_pct": 1.42
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.23
      },
      {
        "name": "有色金属",
        "change_pct": -0.08
      },
      {
        "name": "军工",
        "change_pct": -1.09
      },
      {
        "name": "硫酸",
        "change_pct": 2.01
      },
      {
        "name": "国企改革",
        "change_pct": -0.01
      },
      {
        "name": "白银",
        "change_pct": 1.25
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.23
      },
      {
        "name": "光纤概念",
        "change_pct": -2.98
      },
      {
        "name": "有色 · 铋",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 99,
    "hot_rank_chg": 3,
    "stock_cnt": 5840,
    "price": "9.57",
    "change": "-9.12",
    "market_id": "17",
    "circulate_market_value": "28464828000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.38
      },
      {
        "name": "禽流感",
        "change_pct": 3.5
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -4.6
      },
      {
        "name": "农药",
        "change_pct": -0.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": 0.48
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.84
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600206", "name": "有研新材", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5840, "price": "66.27", "change": "9.07", "market_id": "17", "circulate_market_value": "56101089000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "7.95", "change": "2.05", "market_id": "33", "circulate_market_value": "281168720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 1.48}, {"name": "折叠屏", "change_pct": -2.74}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -0.95}, {"name": "苹果产业链", "change_pct": -2.75}, {"name": "半导体", "change_pct": 2.45}, {"name": "人工智能", "change_pct": -0.14}, {"name": "互联网医疗", "change_pct": 1.54}, {"name": "VR&AR", "change_pct": -2.38}, {"name": "OLED", "change_pct": -0.58}, {"name": "京津冀", "change_pct": -0.13}, {"name": "物联网", "change_pct": -0.94}, {"name": "指纹识别", "change_pct": -2.93}, {"name": "汽车零部件", "change_pct": -1.03}, {"name": "白马股", "change_pct": 1.93}, {"name": "智能制造", "change_pct": -0.85}, {"name": "小米概念股", "change_pct": -1.83}, {"name": "国产芯片", "change_pct": 0.91}, {"name": "液晶面板/LCD", "change_pct": -0.48}, {"name": "全息概念", "change_pct": -1.28}, {"name": "理想汽车概念股", "change_pct": -0.38}, {"name": "MicroLED", "change_pct": -2.66}, {"name": "钙钛矿电池", "change_pct": -0.46}, {"name": "智能手表", "change_pct": -3.61}, {"name": "MiniLED", "change_pct": -3.01}, {"name": "传感器", "change_pct": -0.24}, {"name": "大硅片", "change_pct": 7.63}, {"name": "AI PC", "change_pct": -3.1}, {"name": "华为产业链", "change_pct": -1.23}, {"name": "回购", "change_pct": 1.28}, {"name": "智能眼镜/MR头显", "change_pct": -2.07}, {"name": "玻璃基板封装", "change_pct": -1.7}]}, {"code": "600667", "name": "太极实业", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "29.00", "change": "7.89", "market_id": "17", "circulate_market_value": "60654723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 4, "hot_rank_chg": 19, "stock_cnt": 5840, "price": "840.00", "change": "9.09", "market_id": "17", "circulate_market_value": "561533220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5840, "price": "103.25", "change": "2.34", "market_id": "17", "circulate_market_value": "184757050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 6, "hot_rank_chg": 22, "stock_cnt": 5840, "price": "80.27", "change": "2.25", "market_id": "33", "circulate_market_value": "92873442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 7, "hot_rank_chg": 4, "stock_cnt": 5840, "price": "58.86", "change": "10.00", "market_id": "33", "circulate_market_value": "92653826000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储封测扩产"}, {"code": "002407", "name": "多氟多", "hot_rank": 8, "hot_rank_chg": 12, "stock_cnt": 5840, "price": "45.66", "change": "10.00", "market_id": "33", "circulate_market_value": "49256517000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体级氢氟酸涨价"}, {"code": "001399", "name": "惠科股份", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "34.66", "change": "-17.48", "market_id": "33", "circulate_market_value": "14923443000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 10, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "177.03", "change": "10.00", "market_id": "33", "circulate_market_value": "177912610000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光模块出口暴增"}, {"code": "002185", "name": "华天科技", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5840, "price": "21.92", "change": "-2.84", "market_id": "33", "circulate_market_value": "72832527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 12, "hot_rank_chg": 10, "stock_cnt": 5840, "price": "207.46", "change": "10.00", "market_id": "33", "circulate_market_value": "66080729000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体前驱体"}, {"code": "600522", "name": "中天科技", "hot_rank": 13, "hot_rank_chg": -4, "stock_cnt": 5840, "price": "58.84", "change": "-4.00", "market_id": "17", "circulate_market_value": "200817960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 14, "hot_rank_chg": 7, "stock_cnt": 5840, "price": "52.59", "change": "4.39", "market_id": "17", "circulate_market_value": "87513538000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605358", "name": "立昂微", "hot_rank": 15, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "78.89", "change": "4.67", "market_id": "17", "circulate_market_value": "60918809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 16, "hot_rank_chg": 20, "stock_cnt": 5840, "price": "15.35", "change": "9.96", "market_id": "17", "circulate_market_value": "55070730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 17, "hot_rank_chg": -16, "stock_cnt": 5840, "price": "9.11", "change": "3.17", "market_id": "33", "circulate_market_value": "14810070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.09}, {"name": "电竞", "change_pct": 0.67}, {"name": "手游", "change_pct": 1.06}, {"name": "强势人气股", "change_pct": -1.97}, {"name": "人工智能", "change_pct": -0.14}, {"name": "游戏", "change_pct": 0.96}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.66}, {"name": "腾讯概念股", "change_pct": -0.78}, {"name": "快手概念股", "change_pct": -0.74}, {"name": "元宇宙", "change_pct": -0.72}, {"name": "虚拟数字人", "change_pct": -1.21}, {"name": "东数西算/算力", "change_pct": -1.52}, {"name": "web3.0", "change_pct": -1.22}, {"name": "AIGC概念", "change_pct": -0.35}, {"name": "数据要素", "change_pct": -0.74}, {"name": "字节跳动概念股", "change_pct": -0.64}, {"name": "AI营销", "change_pct": -0.08}, {"name": "ChatGPT", "change_pct": -0.67}, {"name": "智能眼镜/MR头显", "change_pct": -2.07}, {"name": "人工智能大模型", "change_pct": 0.03}, {"name": "人形机器人", "change_pct": -0.95}, {"name": "短剧/互动影游", "change_pct": -0.23}, {"name": "多模态", "change_pct": -0.27}, {"name": "Sora/AI视频", "change_pct": -0.38}, {"name": "IP经济/谷子经济", "change_pct": 0.33}, {"name": "小红书概念股", "change_pct": -1.08}]}, {"code": "603650", "name": "彤程新材", "hot_rank": 18, "hot_rank_chg": 0, "stock_cnt": 5840, "price": "94.41", "change": "10.00", "market_id": "17", "circulate_market_value": "58012433000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "光刻胶树脂"}, {"code": "600487", "name": "亨通光电", "hot_rank": 19, "hot_rank_chg": -7, "stock_cnt": 5840, "price": "108.04", "change": "-2.26", "market_id": "17", "circulate_market_value": "264177370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 20, "hot_rank_chg": 49, "stock_cnt": 5840, "price": "68.53", "change": "10.00", "market_id": "17", "circulate_market_value": "73502904000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "六氟化钨"}, {"code": "600703", "name": "三安光电", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "21.06", "change": "-3.08", "market_id": "17", "circulate_market_value": "105068734000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 22, "hot_rank_chg": 26, "stock_cnt": 5840, "price": "90.00", "change": "15.21", "market_id": "33", "circulate_market_value": "59039104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 23, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "70.98", "change": "-4.24", "market_id": "17", "circulate_market_value": "284142640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 24, "hot_rank_chg": 20, "stock_cnt": 5840, "price": "124.00", "change": "2.92", "market_id": "33", "circulate_market_value": "80976418000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 25, "hot_rank_chg": -11, "stock_cnt": 5840, "price": "11.73", "change": "4.83", "market_id": "33", "circulate_market_value": "47386617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 2.45}, {"name": "一带一路", "change_pct": -0.34}, {"name": "京津冀", "change_pct": -0.13}, {"name": "光伏", "change_pct": -0.65}, {"name": "碳中和", "change_pct": -0.2}, {"name": "国产芯片", "change_pct": 0.91}, {"name": "IGBT", "change_pct": 2.01}, {"name": "颗粒硅", "change_pct": 1.54}, {"name": "异质结电池HJT", "change_pct": 0.46}, {"name": "大硅片", "change_pct": 7.63}]}, {"code": "600160", "name": "巨化股份", "hot_rank": 26, "hot_rank_chg": 52, "stock_cnt": 5840, "price": "53.80", "change": "5.59", "market_id": "17", "circulate_market_value": "145246340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 27, "hot_rank_chg": -19, "stock_cnt": 5840, "price": "31.48", "change": "6.35", "market_id": "17", "circulate_market_value": "29736225000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 28, "hot_rank_chg": 13, "stock_cnt": 5840, "price": "72.58", "change": "1.37", "market_id": "33", "circulate_market_value": "110136682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 29, "hot_rank_chg": 227, "stock_cnt": 5840, "price": "102.01", "change": "10.00", "market_id": "17", "circulate_market_value": "8064080000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "投建高阶HDI"}, {"code": "688008", "name": "澜起科技", "hot_rank": 30, "hot_rank_chg": 103, "stock_cnt": 5840, "price": "296.06", "change": "13.08", "market_id": "17", "circulate_market_value": "339411040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 31, "hot_rank_chg": -15, "stock_cnt": 5840, "price": "36.29", "change": "-1.97", "market_id": "33", "circulate_market_value": "13619056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300706", "name": "阿石创", "hot_rank": 32, "hot_rank_chg": 281, "stock_cnt": 5840, "price": "91.88", "change": "19.06", "market_id": "33", "circulate_market_value": "10458750800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 33, "hot_rank_chg": 9, "stock_cnt": 5840, "price": "31.70", "change": "9.96", "market_id": "33", "circulate_market_value": "9274267800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 34, "hot_rank_chg": 37, "stock_cnt": 5840, "price": "1220.00", "change": "-2.70", "market_id": "33", "circulate_market_value": "1354126500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 35, "hot_rank_chg": 49, "stock_cnt": 5840, "price": "16.20", "change": "5.40", "market_id": "17", "circulate_market_value": "23857850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 36, "hot_rank_chg": 16, "stock_cnt": 5840, "price": "10.12", "change": "4.76", "market_id": "33", "circulate_market_value": "19001533000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 2.45}, {"name": "光伏", "change_pct": -0.65}, {"name": "新能源汽车", "change_pct": -0.75}, {"name": "新能源车零部件", "change_pct": -0.77}, {"name": "第三代半导体", "change_pct": 0.77}, {"name": "氮化镓", "change_pct": 0.89}, {"name": "碳化硅", "change_pct": 1.56}, {"name": "地摊经济", "change_pct": 0.95}, {"name": "人形机器人", "change_pct": -0.95}]}, {"code": "002208", "name": "合肥城建", "hot_rank": 37, "hot_rank_chg": 109, "stock_cnt": 5840, "price": "18.38", "change": "9.99", "market_id": "33", "circulate_market_value": "14760468000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "间接投资长鑫科技"}, {"code": "603259", "name": "药明康德", "hot_rank": 38, "hot_rank_chg": 102, "stock_cnt": 5840, "price": "126.17", "change": "6.76", "market_id": "17", "circulate_market_value": "312053770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 39, "hot_rank_chg": -10, "stock_cnt": 5840, "price": "970.00", "change": "2.00", "market_id": "33", "circulate_market_value": "159967390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 40, "hot_rank_chg": 20, "stock_cnt": 5840, "price": "20.89", "change": "10.01", "market_id": "33", "circulate_market_value": "14463390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "二氧化碳短缺"}, {"code": "002008", "name": "大族激光", "hot_rank": 41, "hot_rank_chg": -9, "stock_cnt": 5840, "price": "141.20", "change": "-6.66", "market_id": "33", "circulate_market_value": "135089910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 42, "hot_rank_chg": 28, "stock_cnt": 5840, "price": "249.59", "change": "-4.12", "market_id": "33", "circulate_market_value": "346012040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 43, "hot_rank_chg": 8, "stock_cnt": 5840, "price": "7.04", "change": "-3.83", "market_id": "17", "circulate_market_value": "87268467000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.1}, {"name": "核电", "change_pct": 0.31}, {"name": "强势人气股", "change_pct": -1.97}, {"name": "电力体制改革", "change_pct": 0.09}, {"name": "水电", "change_pct": 0.88}, {"name": "火电", "change_pct": 0.79}, {"name": "光伏", "change_pct": -0.65}, {"name": "风电", "change_pct": -0.62}, {"name": "国企改革", "change_pct": -0.01}, {"name": "算电协同", "change_pct": -1.58}]}, {"code": "601133", "name": "柏诚股份", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "42.11", "change": "10.01", "market_id": "17", "circulate_market_value": "22081926000.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "半导体洁净室"}, {"code": "600172", "name": "黄河旋风", "hot_rank": 45, "hot_rank_chg": -20, "stock_cnt": 5840, "price": "16.16", "change": "-2.94", "market_id": "17", "circulate_market_value": "20624293000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 46, "hot_rank_chg": -16, "stock_cnt": 5840, "price": "176.86", "change": "-5.47", "market_id": "17", "circulate_market_value": "45635363000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300666", "name": "江丰电子", "hot_rank": 47, "hot_rank_chg": 18, "stock_cnt": 5840, "price": "382.48", "change": "7.81", "market_id": "33", "circulate_market_value": "84572365000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601636", "name": "旗滨集团", "hot_rank": 48, "hot_rank_chg": 6, "stock_cnt": 5840, "price": "9.82", "change": "9.97", "market_id": "17", "circulate_market_value": "29053980000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "玻璃基板", "xgb_concepts": [{"name": "高股息", "change_pct": 0.71}, {"name": "玻璃", "change_pct": 0.08}, {"name": "光伏", "change_pct": -0.65}, {"name": "回购", "change_pct": 1.28}, {"name": "玻璃基板封装", "change_pct": -1.7}]}, {"code": "601138", "name": "工业富联", "hot_rank": 49, "hot_rank_chg": 6, "stock_cnt": 5840, "price": "69.61", "change": "-0.87", "market_id": "17", "circulate_market_value": "1381347300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 50, "hot_rank_chg": 49, "stock_cnt": 5840, "price": "723.10", "change": "6.40", "market_id": "33", "circulate_market_value": "203807100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 51, "hot_rank_chg": -20, "stock_cnt": 5840, "price": "163.35", "change": "-8.23", "market_id": "17", "circulate_market_value": "36701255000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 52, "hot_rank_chg": -17, "stock_cnt": 5840, "price": "267.30", "change": "-10.00", "market_id": "17", "circulate_market_value": "235151160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 53, "hot_rank_chg": 289, "stock_cnt": 5840, "price": "52.93", "change": "8.75", "market_id": "17", "circulate_market_value": "337640590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 54, "hot_rank_chg": -27, "stock_cnt": 5840, "price": "20.50", "change": "-10.01", "market_id": "33", "circulate_market_value": "11959943800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 55, "hot_rank_chg": 2, "stock_cnt": 5840, "price": "21.73", "change": "-6.86", "market_id": "33", "circulate_market_value": "73088965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300024", "name": "机器人", "hot_rank": 56, "hot_rank_chg": 724, "stock_cnt": 5840, "price": "18.10", "change": "18.92", "market_id": "33", "circulate_market_value": "28329934000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601958", "name": "金钼股份", "hot_rank": 57, "hot_rank_chg": 127, "stock_cnt": 5840, "price": "29.55", "change": "8.92", "market_id": "17", "circulate_market_value": "95346160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 58, "hot_rank_chg": -2, "stock_cnt": 5840, "price": "171.16", "change": "-4.11", "market_id": "17", "circulate_market_value": "409842880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688432", "name": "有研硅", "hot_rank": 59, "hot_rank_chg": 39, "stock_cnt": 5840, "price": "37.08", "change": "20.00", "market_id": "17", "circulate_market_value": "46361193000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体硅片"}, {"code": "300604", "name": "长川科技", "hot_rank": 60, "hot_rank_chg": 72, "stock_cnt": 5840, "price": "337.90", "change": "7.30", "market_id": "33", "circulate_market_value": "165392400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 61, "hot_rank_chg": 19, "stock_cnt": 5840, "price": "18.99", "change": "2.26", "market_id": "33", "circulate_market_value": "61253951000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 62, "hot_rank_chg": -43, "stock_cnt": 5840, "price": "25.94", "change": "-8.86", "market_id": "33", "circulate_market_value": "15432540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300398", "name": "飞凯材料", "hot_rank": 63, "hot_rank_chg": 11, "stock_cnt": 5840, "price": "64.26", "change": "4.85", "market_id": "33", "circulate_market_value": "36431374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 64, "hot_rank_chg": -27, "stock_cnt": 5840, "price": "48.97", "change": "-6.38", "market_id": "17", "circulate_market_value": "31936848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 65, "hot_rank_chg": -18, "stock_cnt": 5840, "price": "63.10", "change": "-3.97", "market_id": "17", "circulate_market_value": "92251872000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 66, "hot_rank_chg": 24, "stock_cnt": 5840, "price": "141.06", "change": "-4.22", "market_id": "33", "circulate_market_value": "271231650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 67, "hot_rank_chg": -14, "stock_cnt": 5840, "price": "105.55", "change": "2.67", "market_id": "33", "circulate_market_value": "90104723000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002859", "name": "洁美科技", "hot_rank": 68, "hot_rank_chg": 32, "stock_cnt": 5840, "price": "114.15", "change": "10.00", "market_id": "33", "circulate_market_value": "46333417000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC离型膜"}, {"code": "603155", "name": "新亚强", "hot_rank": 69, "hot_rank_chg": 26, "stock_cnt": 5840, "price": "27.87", "change": "9.98", "market_id": "17", "circulate_market_value": "8800978100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体材料"}, {"code": "002371", "name": "北方华创", "hot_rank": 70, "hot_rank_chg": 35, "stock_cnt": 5840, "price": "860.19", "change": "5.76", "market_id": "33", "circulate_market_value": "623732240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 72, "hot_rank_chg": 19, "stock_cnt": 5840, "price": "65.30", "change": "-3.97", "market_id": "33", "circulate_market_value": "476789780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 73, "hot_rank_chg": -40, "stock_cnt": 5840, "price": "5.29", "change": "-2.04", "market_id": "33", "circulate_market_value": "101208461000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.74}, {"name": "手机产业链", "change_pct": -2.91}, {"name": "超高清视频", "change_pct": -0.95}, {"name": "半导体", "change_pct": 2.45}, {"name": "OLED", "change_pct": -0.58}, {"name": "光伏", "change_pct": -0.65}, {"name": "黑色家电", "change_pct": -0.32}, {"name": "家电", "change_pct": 0.6}, {"name": "智能制造", "change_pct": -0.85}, {"name": "工业互联网", "change_pct": -0.7}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.83}, {"name": "国产芯片", "change_pct": 0.91}, {"name": "腾讯概念股", "change_pct": -0.78}, {"name": "液晶面板/LCD", "change_pct": -0.48}, {"name": "MicroLED", "change_pct": -2.66}, {"name": "MiniLED", "change_pct": -3.01}, {"name": "华为产业链", "change_pct": -1.23}, {"name": "玻璃基板封装", "change_pct": -1.7}]}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 74, "hot_rank_chg": -8, "stock_cnt": 5840, "price": "12.80", "change": "2.07", "market_id": "17", "circulate_market_value": "64516870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.1}, {"name": "军民融合", "change_pct": -1.18}, {"name": "有色 · 锑", "change_pct": 1.25}, {"name": "有色 · 钼", "change_pct": 1.42}, {"name": "有色 · 锌", "change_pct": 2.23}, {"name": "有色金属", "change_pct": -0.08}, {"name": "军工", "change_pct": -1.09}, {"name": "硫酸", "change_pct": 2.01}, {"name": "国企改革", "change_pct": -0.01}, {"name": "白银", "change_pct": 1.25}, {"name": "新冠病毒防治", "change_pct": 2.23}, {"name": "光纤概念", "change_pct": -2.98}, {"name": "有色 · 铋", "change_pct": -0.99}]}, {"code": "688126", "name": "沪硅产业", "hot_rank": 75, "hot_rank_chg": 40, "stock_cnt": 5840, "price": "39.00", "change": "11.88", "market_id": "17", "circulate_market_value": "110841875000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 76, "hot_rank_chg": 35, "stock_cnt": 5840, "price": "556.96", "change": "-1.60", "market_id": "33", "circulate_market_value": "698563270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 77, "hot_rank_chg": 194, "stock_cnt": 5840, "price": "14.49", "change": "5.38", "market_id": "33", "circulate_market_value": "11722685200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 78, "hot_rank_chg": 169, "stock_cnt": 5840, "price": "14.24", "change": "7.07", "market_id": "17", "circulate_market_value": "13674605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300054", "name": "鼎龙股份", "hot_rank": 79, "hot_rank_chg": 49, "stock_cnt": 5840, "price": "104.00", "change": "9.39", "market_id": "33", "circulate_market_value": "77265724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 80, "hot_rank_chg": -1, "stock_cnt": 5840, "price": "295.15", "change": "-7.19", "market_id": "33", "circulate_market_value": "321237730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 81, "hot_rank_chg": -13, "stock_cnt": 5840, "price": "235.94", "change": "-1.83", "market_id": "33", "circulate_market_value": "184150780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 82, "hot_rank_chg": -19, "stock_cnt": 5840, "price": "81.02", "change": "4.18", "market_id": "17", "circulate_market_value": "95805270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688120", "name": "华海清科", "hot_rank": 83, "hot_rank_chg": 300, "stock_cnt": 5840, "price": "316.32", "change": "20.00", "market_id": "17", "circulate_market_value": "156493350000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体装备订单饱满"}, {"code": "603283", "name": "赛腾股份", "hot_rank": 84, "hot_rank_chg": 166, "stock_cnt": 5840, "price": "78.74", "change": "10.00", "market_id": "17", "circulate_market_value": "27757916000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HBM检测"}, {"code": "002636", "name": "金安国纪", "hot_rank": 85, "hot_rank_chg": 29, "stock_cnt": 5840, "price": "114.95", "change": "2.52", "market_id": "33", "circulate_market_value": "83260057000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002821", "name": "凯莱英", "hot_rank": 86, "hot_rank_chg": 212, "stock_cnt": 5840, "price": "167.75", "change": "10.00", "market_id": "33", "circulate_market_value": "53184107000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CDMO"}, {"code": "300223", "name": "北京君正", "hot_rank": 87, "hot_rank_chg": 60, "stock_cnt": 5840, "price": "242.05", "change": "3.79", "market_id": "33", "circulate_market_value": "102071088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 88, "hot_rank_chg": -3, "stock_cnt": 5840, "price": "95.57", "change": "-3.96", "market_id": "33", "circulate_market_value": "138856070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002962", "name": "五方光电", "hot_rank": 89, "hot_rank_chg": -13, "stock_cnt": 5840, "price": "20.96", "change": "8.38", "market_id": "33", "circulate_market_value": "4384496700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688012", "name": "中微公司", "hot_rank": 90, "hot_rank_chg": 99, "stock_cnt": 5840, "price": "456.69", "change": "10.58", "market_id": "17", "circulate_market_value": "427906190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 91, "hot_rank_chg": 15, "stock_cnt": 5840, "price": "51.83", "change": "-6.76", "market_id": "33", "circulate_market_value": "257579550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 92, "hot_rank_chg": -68, "stock_cnt": 5840, "price": "57.21", "change": "-1.84", "market_id": "17", "circulate_market_value": "18420086000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000962", "name": "东方钽业", "hot_rank": 93, "hot_rank_chg": 56, "stock_cnt": 5840, "price": "93.88", "change": "7.87", "market_id": "33", "circulate_market_value": "47238326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600141", "name": "兴发集团", "hot_rank": 94, "hot_rank_chg": -56, "stock_cnt": 5840, "price": "47.88", "change": "-1.89", "market_id": "17", "circulate_market_value": "57539304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 95, "hot_rank_chg": 92, "stock_cnt": 5840, "price": "101.00", "change": "-8.99", "market_id": "33", "circulate_market_value": "233247650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 96, "hot_rank_chg": -13, "stock_cnt": 5840, "price": "49.00", "change": "-5.42", "market_id": "33", "circulate_market_value": "74378591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 97, "hot_rank_chg": -25, "stock_cnt": 5840, "price": "97.48", "change": "-1.30", "market_id": "17", "circulate_market_value": "142618540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 98, "hot_rank_chg": -5, "stock_cnt": 5840, "price": "33.20", "change": "-8.16", "market_id": "33", "circulate_market_value": "39058767000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 99, "hot_rank_chg": 3, "stock_cnt": 5840, "price": "9.57", "change": "-9.12", "market_id": "17", "circulate_market_value": "28464828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.38}, {"name": "禽流感", "change_pct": 3.5}, {"name": "铜箔/覆铜板", "change_pct": -4.6}, {"name": "农药", "change_pct": -0.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": 0.48}, {"name": "PET复合铜箔", "change_pct": -1.84}]}, {"code": "688549", "name": "中巨芯", "hot_rank": 100, "hot_rank_chg": 398, "stock_cnt": 5840, "price": "37.80", "change": "17.76", "market_id": "17", "circulate_market_value": "22276258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "301030", "name": "*ST仕净", "price": 10.1, "change_pct": 19.95, "reason": "公司为光伏制程污染防控设备龙头", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 8.98, "first_limit_up": 1782696666, "break_limit_up_times": 6}, {"code": "002568", "name": "百润股份", "price": 17.3, "change_pct": 9.98, "reason": "国内预调鸡尾酒龙头，旗下拥有知名品牌“RIO”预调酒，上半年净利润预计增长19.51%—25.94%", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 5.46, "first_limit_up": 1782701217, "break_limit_up_times": 0}, {"code": "600818", "name": "ST中路", "price": 5.72, "change_pct": 4.95, "reason": "公司拟通过收购及增资方式持有Factor21.15%股权，后者主营高端公路自行车的生产和销售", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.79, "first_limit_up": 1782711250, "break_limit_up_times": 0}, {"code": "003006", "name": "百亚股份", "price": 15.19, "change_pct": 9.99, "reason": "国内一次性卫生用品行业的知名综合性企业，产品包括纸尿裤、卫生巾等，一季报净利润同比增长10.03%", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1782701205, "break_limit_up_times": 0}, {"code": "300434", "name": "金石亚药", "price": 10.81, "change_pct": 19.98, "reason": "公司拥有国内感冒药一线品牌“快克”和“小快克”，一季报净利润同比增长84.59%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.34, "first_limit_up": 1782709401, "break_limit_up_times": 0}, {"code": "002237", "name": "恒邦股份", "price": 14.51, "change_pct": 10.01, "reason": "中国黄金销售收入十大企业，中国黄金十大冶炼企业第一名", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1782698097, "break_limit_up_times": 4}, {"code": "002728", "name": "特一药业", "price": 8.8, "change_pct": 10.0, "reason": "广东省中成药、中药饮片行业领军品牌", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.78, "first_limit_up": 1782698286, "break_limit_up_times": 1}, {"code": "600488", "name": "津药药业", "price": 4.84, "change_pct": 10.0, "reason": "公司创新研究院JYSW003银屑病创新药项目正按合同推进，前期药效与安全性表现良好", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.65, "first_limit_up": 1782699617, "break_limit_up_times": 1}, {"code": "000566", "name": "海南海药", "price": 4.54, "change_pct": 9.93, "reason": "海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.58, "first_limit_up": 1782699066, "break_limit_up_times": 0}, {"code": "001237", "name": "惠康科技", "price": 65.2, "change_pct": 10.01, "reason": "公司为制冰机行业龙头企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 17.92, "first_limit_up": 1782696600, "break_limit_up_times": 6}, {"code": "002409", "name": "雅克科技", "price": 207.46, "change_pct": 10.0, "reason": "1、公司子公司成都科美特专注于含氟类特种气体的研产销，主要产品为六氟化硫和四氟化碳，目前为合肥长鑫供应含氟类特种气体；\n2、公司向SK海力士、三星电子等提供逻辑芯片，海力士占全球HBM市场80%份额", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.08, "first_limit_up": 1782697473, "break_limit_up_times": 2}, {"code": "605178", "name": "时空科技", "price": 97.35, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["闪存"], "limit_up_days": 1, "turnover_ratio": 5.11, "first_limit_up": 1782697089, "break_limit_up_times": 17}, {"code": "603318", "name": "水发燃气", "price": 9.69, "change_pct": 9.99, "reason": "1、目前公司鄂尔多斯项目已实现5N级（99.999%）氦气稳定生产，技术成熟\n2、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套；\n3、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 18.24, "first_limit_up": 1782696777, "break_limit_up_times": 3}, {"code": "000920", "name": "沃顿科技", "price": 15.7, "change_pct": 10.02, "reason": "1、公司膜产品在盐湖提锂领域已实现了成熟的应用，并承接了多个液体物料浓缩分离纯化的工程项目；\n2、公司超纯水系列膜产品已在多家半导体企业实现稳定应用。", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1782697482, "break_limit_up_times": 0}, {"code": "002366", "name": "融发核电", "price": 5.97, "change_pct": 9.94, "reason": "核岛装备材料研制的先行者；公司建立了完善的核电装备材料研发和生产制造体系，在核岛主管道设备、核后处理装备这一细分市场，处于国内外领先地位", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 4.74, "first_limit_up": 1782701934, "break_limit_up_times": 0}, {"code": "000017", "name": "深中华A", "price": 5.56, "change_pct": 10.1, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.88, "first_limit_up": 1782701349, "break_limit_up_times": 8}, {"code": "605098", "name": "行动教育", "price": 59.69, "change_pct": 10.01, "reason": "国内主要的企业管理培训和咨询机构之一，25年净利润同比增长19.12%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.31, "first_limit_up": 1782709296, "break_limit_up_times": 0}, {"code": "600557", "name": "康缘药业", "price": 11.96, "change_pct": 10.03, "reason": "公司被国家及各省新冠防治方案所推荐的产品包括：散寒化湿颗粒、金振口服液、杏贝止咳颗粒、热毒宁注射液、藿香正气水", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.64, "first_limit_up": 1782699717, "break_limit_up_times": 0}, {"code": "002628", "name": "成都路桥", "price": 4.86, "change_pct": 9.95, "reason": "成都优质基建企业；主要从事公路、桥梁、隧道等交通基础设施建设的施工业务，主要业务集中在以四川省为中心的西部地区", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.18, "first_limit_up": 1782697107, "break_limit_up_times": 0}, {"code": "000751", "name": "锌业股份", "price": 6.22, "change_pct": 10.09, "reason": "公司主要生产锌、铅及深加工产品，拥有铟年产能60吨", "plates": ["有色金属"], "limit_up_days": 1, "turnover_ratio": 10.92, "first_limit_up": 1782696747, "break_limit_up_times": 9}, {"code": "002639", "name": "雪人集团", "price": 14.06, "change_pct": 10.02, "reason": "1、公司旗下雪人股份为中科院的 “人造太阳” 项目（如 EAST、中国环流三号）等核聚变项目提供氦气压缩机，并参与国家重大科研装备项目 “液氦到超流氦温区大型低温制冷系统” 研制，其生产的 “兆瓦级” 氦气压缩机设备技术达到国际领先水平，可创造核聚变实验所需的低温环境；\n2、公司位于福建省福州市，专注于冰雪场地温控设施的建设以及制冰造雪设备的供应；已为国家雪车雪橇中心、张家口崇礼长城岭滑雪场等冬奥场馆提供制冷装备", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 4.08, "first_limit_up": 1782696729, "break_limit_up_times": 0}, {"code": "600745", "name": "*ST闻泰", "price": 17.71, "change_pct": 4.98, "reason": "公司起诉安世控股等六被告获法院受理：要求归还安世半导体控制权，索赔80亿", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 5.71, "first_limit_up": 1782715594, "break_limit_up_times": 0}, {"code": "002437", "name": "誉衡药业", "price": 2.67, "change_pct": 9.88, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品；2025年净利润预计增长50.37%~80.44%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.6, "first_limit_up": 1782701973, "break_limit_up_times": 1}, {"code": "600965", "name": "*ST福成", "price": 2.59, "change_pct": 4.86, "reason": "公司业务包括养猪、预制菜及殡葬服务业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.34, "first_limit_up": 1782696899, "break_limit_up_times": 0}, {"code": "301307", "name": "美利信", "price": 69.48, "change_pct": 20.0, "reason": "1、公司拟将部分募集资金投向“半导体装备精密结构件建设项目”，已掌握关键零部件制造技术并实现批量供货，锁定第二增长曲线；\n2、公司具有为固态电池提供箱体类铝合金精密压铸件产品的能力和技术储备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 19.39, "first_limit_up": 1782698088, "break_limit_up_times": 20}, {"code": "002687", "name": "乔治白", "price": 4.97, "change_pct": 9.96, "reason": "中高端职业装领导者；公司主要从事“乔治白”“giuseppe”品牌的职业装以及校服产品设计研产销", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.95, "first_limit_up": 1782702612, "break_limit_up_times": 0}, {"code": "603606", "name": "东方电缆", "price": 41.82, "change_pct": 9.99, "reason": "海陆缆核心供应商，一季度净利润同比增长32.26%", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1782702606, "break_limit_up_times": 3}, {"code": "002653", "name": "海思科", "price": 61.06, "change_pct": 10.0, "reason": "公司主要产品分为小容量注射液、大容量注射液、粉针剂、固体制剂四个大类", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.4, "first_limit_up": 1782698457, "break_limit_up_times": 2}, {"code": "003004", "name": "声迅股份", "price": 76.65, "change_pct": 10.0, "reason": "公司拟2.51亿元收购中科锐择51%股权，快速切入特种光电赛道", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 8.35, "first_limit_up": 1782711753, "break_limit_up_times": 0}, {"code": "001229", "name": "魅视科技", "price": 33.02, "change_pct": 9.99, "reason": "公司产品已应用于航空、航天等相关领域，为中国载人航天工程和探月工程的指挥控制中心提供了“光纤KVMS解决方案”，助力中国首次火星探测“天问一号”成功发射", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 12.72, "first_limit_up": 1782711666, "break_limit_up_times": 10}, {"code": "688432", "name": "有研硅", "price": 37.08, "change_pct": 20.0, "reason": "国内半导体材料龙头企业，主要产品包括半导体硅抛光片、刻蚀设备用硅材料、半导体区熔硅单晶等，主要用于分立器件、功率器件、集成电路、刻蚀设备用硅部件等的制造", "plates": ["大硅片"], "limit_up_days": 2, "turnover_ratio": 7.56, "first_limit_up": 1782711079, "break_limit_up_times": 1}, {"code": "000021", "name": "深科技", "price": 58.86, "change_pct": 10.0, "reason": "公司主要从事存储芯片封测，为国内在高端存储芯片（DRAM、NANDFLASH）封装和测试领域龙头之一，长鑫为主要客户之一", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 15.22, "first_limit_up": 1782696993, "break_limit_up_times": 1}, {"code": "605377", "name": "华旺科技", "price": 9.52, "change_pct": 10.06, "reason": "国内装饰原纸的主要生产商之一", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.79, "first_limit_up": 1782701420, "break_limit_up_times": 0}, {"code": "002915", "name": "中欣氟材", "price": 20.34, "change_pct": 10.01, "reason": "国内氟化工精细化学品行业龙头；拥有基础配套原料萤石、氢氟酸、氟制冷剂、含氟精细化学品等在内的完整的氟化工产业链", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 9.4, "first_limit_up": 1782696624, "break_limit_up_times": 5}, {"code": "002277", "name": "友阿股份", "price": 6.23, "change_pct": 10.07, "reason": "公司正全力推进收购深圳尚阳通100%股权，交易完成后将形成“百货零售+半导体”双主业格局，标的已量产车规级SiC功率器件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.82, "first_limit_up": 1782697308, "break_limit_up_times": 5}, {"code": "000756", "name": "新华制药", "price": 13.59, "change_pct": 10.04, "reason": "公司治疗阿尔茨海默病的一类创新药OAB-14正在进行I期临床研究", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.25, "first_limit_up": 1782698883, "break_limit_up_times": 1}, {"code": "002485", "name": "ST雪发", "price": 5.44, "change_pct": 5.02, "reason": "公司主要业务为供应链运营管理和综合服务、文化旅游业务及服装销售业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.21, "first_limit_up": 1782696300, "break_limit_up_times": 0}, {"code": "300436", "name": "广生堂", "price": 106.56, "change_pct": 20.0, "reason": "乙肝治疗创新药奈瑞可韦GST-HG141获得III期临床试验伦理审查批件", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.92, "first_limit_up": 1782699126, "break_limit_up_times": 0}, {"code": "603283", "name": "赛腾股份", "price": 78.74, "change_pct": 10.0, "reason": "公司通过收购日本 Optima 掌握晶圆缺陷检测等核心技术，是国内唯一能量产 HBM 量测设备的企业，且半导体设备产品线丰富，涵盖晶圆字符检测机、激光开槽机等，为国产芯片生产提供关键设备支持", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.15, "first_limit_up": 1782711891, "break_limit_up_times": 0}, {"code": "000056", "name": "*ST皇庭", "price": 2.17, "change_pct": 4.83, "reason": "1、控股子公司意发功率核心产品为FRD等硅基功率半导体，同时具有IGBT设计能力，目前其拥有2条生产线，已稳定生产6英寸晶圆；\n2、公司实施“高新科技+商业管理”双主业战略，商业管理以“自持+整租+委托管理”模式布局粤港澳大湾区及全国一二线城市核心地段，旗下深圳皇庭广场已成为区域购物中心标识之一", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 3.38, "first_limit_up": 1782696300, "break_limit_up_times": 3}, {"code": "002208", "name": "合肥城建", "price": 18.38, "change_pct": 9.99, "reason": "公司及子公司共计实缴6000万元参与了合肥市国联资本创新投资基金合伙企业（有限合伙），合肥市国联资本创新投资基金合伙企业（有限合伙）通过产投壹号基金投资了长鑫科技集团股份有限公司", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.48, "first_limit_up": 1782696975, "break_limit_up_times": 2}, {"code": "605300", "name": "佳禾食品", "price": 10.35, "change_pct": 9.99, "reason": "公司已成为国内外奶茶、咖啡等领域具有较高知名度的原料产品，蜜雪冰城和古茗均为公司下游客户", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.67, "first_limit_up": 1782696609, "break_limit_up_times": 0}, {"code": "600370", "name": "*ST三房", "price": 1.58, "change_pct": 5.33, "reason": "公司旗下海伦石化拥有PTA产能180万吨/年，是目前中国和亚洲最大生产商之一，且拥有年产320万吨PTA技改扩能项目在建", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.24, "first_limit_up": 1782702101, "break_limit_up_times": 4}, {"code": "601636", "name": "旗滨集团", "price": 9.82, "change_pct": 9.97, "reason": "公司拟定增募资不超14.27亿元用于超薄柔性玻璃及玻璃基板项目等项目", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1782696628, "break_limit_up_times": 0}, {"code": "600576", "name": "祥源文旅", "price": 5.92, "change_pct": 10.04, "reason": "1、公司主营业务包括旅游业务、动漫衍生、动画影视等；\n2、子公司翔通动漫主营游戏开发运营等,代表作包括自主开发的《剑仆契约》等；2023年公司积极引入和落地了包括游戏CG等业务类型", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.18, "first_limit_up": 1782701517, "break_limit_up_times": 34}, {"code": "688233", "name": "神工股份", "price": 194.33, "change_pct": 20.0, "reason": "公司为刻蚀硅材料龙头，硅零部件产品由大直径硅材料加工而成，其终端主要应用于存储芯片制造厂的等离子刻蚀工艺中，是需要定期更换的核心耗材", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.1, "first_limit_up": 1782697201, "break_limit_up_times": 2}, {"code": "600129", "name": "太极集团", "price": 13.05, "change_pct": 10.03, "reason": "公司核心产品藿香正气口服液是目前中国市场占有率最高的中成药产品，是基药目录中唯一的低价药，主要用于感冒，品牌太极为OTC品牌药企第一名", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.13, "first_limit_up": 1782700033, "break_limit_up_times": 1}, {"code": "003043", "name": "华亚智能", "price": 90.35, "change_pct": 10.0, "reason": "1、公司主营精密金属制造，主要为国内外知名半导体设备制造商、品牌商等客户提供各类定制化精密金属结构件；\n2、公司有少量精密金属结构件应用于储能逆变器上", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.97, "first_limit_up": 1782697656, "break_limit_up_times": 0}, {"code": "603155", "name": "新亚强", "price": 27.87, "change_pct": 9.98, "reason": "公司专业从事有机硅精细化学品的研产销，配套用于平板显示、电子、半导体、芯片等相关领域的电子级六甲基二硅氮烷产品，已向国内多家半导体客户提供产品服务，并在部分主要应用端实现进口产品的替代", "plates": ["大硅片"], "limit_up_days": 2, "turnover_ratio": 10.52, "first_limit_up": 1782715489, "break_limit_up_times": 0}, {"code": "688548", "name": "广钢气体", "price": 46.49, "change_pct": 20.01, "reason": "国内极少数超高纯电子大宗气体综合性服务商，国内最大高纯氦气厂商之一", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 9.44, "first_limit_up": 1782715413, "break_limit_up_times": 0}, {"code": "002521", "name": "齐峰新材", "price": 7.07, "change_pct": 9.95, "reason": "高档装饰原纸行业龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1782709689, "break_limit_up_times": 2}, {"code": "002549", "name": "凯美特气", "price": 20.89, "change_pct": 10.01, "reason": "1、公司工业气体业务涵盖传统工业气体和电子特种气体两部分；\n2、子公司凯美特电子特种气体公司光刻气产品获ASML子公司Cymer公司合格供应商认证函", "plates": ["电子特气"], "limit_up_days": 1, "turnover_ratio": 8.86, "first_limit_up": 1782696300, "break_limit_up_times": 3}, {"code": "002180", "name": "奔图科技", "price": 16.01, "change_pct": 10.03, "reason": "公司控股子公司珠海极海半导体有限公司与上海新储集成电路有限公司签署了《PCM芯片开发合作框架协议》。按照合作约定，双方将合作开发以PCM（相变存储器）IP为核心的、目标市场对应现有EEPROM、NOR、NAND、DRAM、MCU等PCM产品。", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 5.45, "first_limit_up": 1782710730, "break_limit_up_times": 1}, {"code": "603389", "name": "*ST亚振", "price": 60.07, "change_pct": 5.0, "reason": "公司主要从事中高端海派艺术家具产品的生产，25年净利润同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.93, "first_limit_up": 1782696923, "break_limit_up_times": 12}, {"code": "600468", "name": "百利电气", "price": 5.84, "change_pct": 9.98, "reason": "1、控股子公司辽宁荣信兴业电力技术有限公司参与了位于法国的国际热核聚变试验堆（ITER）项目电力系统中无功补偿以及滤波设备的设计制造；\n2、公司多家控股子公司涉及智能电网领域，如电气开关元件，无功补偿设备等", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 1.12, "first_limit_up": 1782696608, "break_limit_up_times": 0}, {"code": "688796", "name": "百奥赛图", "price": 110.56, "change_pct": 20.0, "reason": "公司是一家临床前CRO以及生物技术企业，基于自主开发的基因编辑技术提供各类创新模式动物以及临床前阶段的医药研发服务", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.88, "first_limit_up": 1782709576, "break_limit_up_times": 0}, {"code": "600180", "name": "*ST瑞茂", "price": 1.19, "change_pct": 5.31, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.19, "first_limit_up": 1782696301, "break_limit_up_times": 0}, {"code": "002859", "name": "洁美科技", "price": 114.15, "change_pct": 10.0, "reason": "全球电子元器件封装耗材一站式整体解决方案提供商；公司纸质载带主要用于被动元器件如电阻、电容、电感的储存、运输、封装生产环节，离型膜主要应用于MLCC、偏光片等领域；公司MLCC离型膜实现了向国巨、华新科、风华高科、三环集团等主要客户的稳定批量供货", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 9.73, "first_limit_up": 1782696621, "break_limit_up_times": 9}, {"code": "600568", "name": "ST中珠", "price": 2.25, "change_pct": 5.14, "reason": "两大股东协议4.03亿元转让公司10.38%股份", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.28, "first_limit_up": 1782696604, "break_limit_up_times": 0}, {"code": "600735", "name": "ST新华锦", "price": 6, "change_pct": 5.08, "reason": "公司控股股东占用资金已全额清偿", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.09, "first_limit_up": 1782700713, "break_limit_up_times": 7}, {"code": "301033", "name": "迈普医学", "price": 54.19, "change_pct": 20.0, "reason": "公司主营高性能植入医疗器械的研产销，公司是国内神经外科领域唯一同时拥有人工硬脑（脊）膜补片、颅颌面修补产品等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.27, "first_limit_up": 1782710796, "break_limit_up_times": 0}, {"code": "000777", "name": "中核科技", "price": 18.48, "change_pct": 10.0, "reason": "中核集团宣布其首次成功实现丰度超过99.99%的硅-28同位素自主量产，产品关键指标达到国际先进水平", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 3.41, "first_limit_up": 1782696741, "break_limit_up_times": 0}, {"code": "301528", "name": "多浦乐", "price": 74.4, "change_pct": 20.0, "reason": "1、公司的靶材专用自动化检测系统主要面向半导体靶材母材金属的质量检测；\n2、公司相控阵超声水浸自动检测系统可用于汽车零部件、航空航天零部件、精密部件等的水浸检测", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.19, "first_limit_up": 1782711810, "break_limit_up_times": 0}, {"code": "688765", "name": "禾元生物", "price": 51.55, "change_pct": 20.0, "reason": "公司是一家创新型生物医药企业，拥有全球领先的植物生物反应器技术平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 11.41, "first_limit_up": 1782709548, "break_limit_up_times": 3}, {"code": "001301", "name": "尚太科技", "price": 94.24, "change_pct": 10.0, "reason": "国内负极材料领域主要厂商；公司表示现阶段可验证的固态电池负极材料存在继续使用石墨类负极材料的可能性，公司对固态电池适配负极材料以及负极材料其他新技术的发展方向", "plates": ["锂电池"], "limit_up_days": 1, "turnover_ratio": 3.75, "first_limit_up": 1782714030, "break_limit_up_times": 0}, {"code": "605499", "name": "东鹏饮料", "price": 121.99, "change_pct": 10.0, "reason": "国内能量饮料龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.75, "first_limit_up": 1782709813, "break_limit_up_times": 1}, {"code": "603163", "name": "圣晖集成", "price": 149.14, "change_pct": 10.0, "reason": "公司提供英诺赛科（苏州）半导体禅额眼帘洁净室工程服务，核心技术覆盖气流管理、微分子污染控制等领域，已实现量产配套", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 8.51, "first_limit_up": 1782698492, "break_limit_up_times": 2}, {"code": "601611", "name": "中国核建", "price": 11.1, "change_pct": 10.01, "reason": "公司是我国国防军工工程重要承包商之一，是我国核电工程建设的“国家队”；核心业务模块包括军工工程、核电工程及工业与民用工程建设", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 2.61, "first_limit_up": 1782701863, "break_limit_up_times": 0}, {"code": "603726", "name": "朗迪集团", "price": 32.35, "change_pct": 10.0, "reason": "公司间接持有长鑫科技集团0.066%股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.13, "first_limit_up": 1782696965, "break_limit_up_times": 5}, {"code": "603435", "name": "嘉德利", "price": 65.26, "change_pct": 9.99, "reason": "公司从事BOPP电工膜研产销，产品系薄膜电容器和复合集流体等电子电力领域的关键材料", "plates": ["被动元件"], "limit_up_days": 1, "turnover_ratio": 10.34, "first_limit_up": 1782697190, "break_limit_up_times": 2}, {"code": "603032", "name": "德新科技", "price": 26.87, "change_pct": 9.99, "reason": "公司通过控股子公司安徽汉普斯布局精密行星减速器、电机业务，产品已应用于工业机器人、仓储机器人等领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.52, "first_limit_up": 1782697676, "break_limit_up_times": 1}, {"code": "600222", "name": "太龙药业", "price": 7.25, "change_pct": 10.02, "reason": "河南省著名中药企业；公司药品制剂业务以中药口服制剂为主，治疗领域覆盖呼吸系统、心脑血管、消化系统、神经系统及妇科疾病", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.05, "first_limit_up": 1782696832, "break_limit_up_times": 0}, {"code": "002693", "name": "双成药业", "price": 9.11, "change_pct": 10.02, "reason": "公司主营多肽药业务，一季度业绩同比扭亏", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.27, "first_limit_up": 1782699306, "break_limit_up_times": 0}, {"code": "600867", "name": "通化东宝", "price": 8.17, "change_pct": 9.96, "reason": "公司重组人胰岛素制造处于世界领先水平，2022年净利增长21.46%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.97, "first_limit_up": 1782710477, "break_limit_up_times": 0}, {"code": "603650", "name": "彤程新材", "price": 94.41, "change_pct": 10.0, "reason": "此前多家晶圆厂加速验证导入公司子公司北京科华的KrF光刻胶", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 9.95, "first_limit_up": 1782696685, "break_limit_up_times": 4}, {"code": "000551", "name": "创元科技", "price": 20.08, "change_pct": 10.03, "reason": "公司全资子公司江苏苏净是国内洁净环保领域技术创新、装备制造和工程整体解决方案的综合供应商，可为泛半导体行业提供相关产品和服务。江苏苏净是上海微电子、中芯国际、海力士的合格供应商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.89, "first_limit_up": 1782710628, "break_limit_up_times": 1}, {"code": "002856", "name": "*ST美芝", "price": 18.39, "change_pct": 5.03, "reason": "公司主要业务为建筑装饰工程的设计与施工，承接项目类型主要有公共建筑装饰、住宅精装修和幕墙装饰；一季报净利润同比减亏", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.62, "first_limit_up": 1782715932, "break_limit_up_times": 0}, {"code": "688689", "name": "银河微电", "price": 55.88, "change_pct": 19.99, "reason": "公司拟收购恒泰柯100%股权，标的是一家主要从事功率半导体产品的研究、开发、销售并提供相关技术咨询和技术服务的国家级专精特新“小巨人”企业", "plates": ["国产芯片", "资产重组"], "limit_up_days": 1, "turnover_ratio": 1.21, "first_limit_up": 1782696301, "break_limit_up_times": 0}, {"code": "688336", "name": "三生国健", "price": 49.75, "change_pct": 20.0, "reason": "公司收到辉瑞首付款约28.9亿元，预计2025年净利同比增长约311.35%", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.24, "first_limit_up": 1782699976, "break_limit_up_times": 0}, {"code": "002422", "name": "科伦药业", "price": 39.16, "change_pct": 10.0, "reason": "控股子公司在2026年美国临床肿瘤学会年会上公布多项创新药物研究成果", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 2.35, "first_limit_up": 1782699705, "break_limit_up_times": 2}, {"code": "603983", "name": "丸美生物", "price": 25.58, "change_pct": 10.02, "reason": "公司主营化妆品，首推全人源胶原蛋白，适用于医美术后修复等多种护肤场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1782701809, "break_limit_up_times": 0}, {"code": "000521", "name": "长虹美菱", "price": 5.49, "change_pct": 10.02, "reason": "1、公司完成了综合白电的产业布局，覆盖了冰箱柜、洗衣机、空调、厨卫、小家电等全产品线；\n2、旗下全资子公司四川虹美智能科技有限公司获得华为鸿蒙生态模组技术认证证书，并开始提供鸿蒙OS模组", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.24, "first_limit_up": 1782696300, "break_limit_up_times": 9}, {"code": "603459", "name": "红板科技", "price": 102.01, "change_pct": 10.0, "reason": "公司面向光模块领域开展了800G三阶盲孔光模块PCB产品、高传输速率光模块电路板等多项研发项目，有生产1.6T光模块电路板的技术能力，相关业务正根据客户需求有序推进", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 34.71, "first_limit_up": 1782711235, "break_limit_up_times": 0}, {"code": "603222", "name": "济民健康", "price": 7.68, "change_pct": 10.03, "reason": "子公司博鳌国际医院拥有国内唯一一家通过日本国厚生省认证的国际再生医学实验室，建成了包括细胞存储、国际标准细胞制备、细胞治疗临床研究、干细胞与再生医学技术转化四大核心技术平台，医院自体脂肪干细胞获得中检院的质量检定", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.74, "first_limit_up": 1782696981, "break_limit_up_times": 0}, {"code": "603516", "name": "淳中科技", "price": 135.11, "change_pct": 10.0, "reason": "公司与英伟达合作，对接的产品包括液冷测试平台、基于AI的检测平台、各种测试板卡等", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 1.94, "first_limit_up": 1782697038, "break_limit_up_times": 0}, {"code": "603336", "name": "宏辉果蔬", "price": 8.2, "change_pct": 10.07, "reason": "公司拟收购施美药业41.128%股份，切入医药赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.69, "first_limit_up": 1782710599, "break_limit_up_times": 2}, {"code": "603956", "name": "威派格", "price": 6.41, "change_pct": 9.95, "reason": "1、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品；\n2、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地", "plates": ["液冷服务器"], "limit_up_days": 3, "turnover_ratio": 12.41, "first_limit_up": 1782697179, "break_limit_up_times": 16}, {"code": "002407", "name": "多氟多", "price": 45.66, "change_pct": 10.0, "reason": "公司半导体级氢氟酸已稳定批量供应台积电、三星、华虹、长鑫存储等，同时规划六氟化钨等高端电子特气产线", "plates": ["国产芯片", "电子特气"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1782696300, "break_limit_up_times": 0}, {"code": "603061", "name": "金海通", "price": 456.56, "change_pct": 10.0, "reason": "公司主营半导体芯片测试设备，深耕集成电路测试分选机领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.47, "first_limit_up": 1782697361, "break_limit_up_times": 1}, {"code": "003019", "name": "宸展光电", "price": 32.81, "change_pct": 9.99, "reason": "公司主营智能交互显示设备，可应用于人形机器人等智能终端上", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1782698739, "break_limit_up_times": 0}, {"code": "301520", "name": "万邦医药", "price": 28.26, "change_pct": 20.0, "reason": "公司拟3.02亿元收购赛德盛75.52%股份", "plates": ["医药", "资产重组"], "limit_up_days": 1, "turnover_ratio": 7.43, "first_limit_up": 1782696300, "break_limit_up_times": 1}, {"code": "603033", "name": "三维股份", "price": 9.13, "change_pct": 10.0, "reason": "公司官网显示有超高分子聚乙烯型材产品，据网络资料超高分子聚乙烯可作为机器人用腱绳材料", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.36, "first_limit_up": 1782709247, "break_limit_up_times": 0}, {"code": "600857", "name": "宁波中百", "price": 19.66, "change_pct": 10.02, "reason": "宁波大型百货零售商店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.03, "first_limit_up": 1782698924, "break_limit_up_times": 0}, {"code": "002255", "name": "海陆重工", "price": 9.7, "change_pct": 9.98, "reason": "公司深度参与全球可控核聚变实验堆（ITER）项目，承制2MWt液态燃料钍基熔盐实验堆安全专设装置", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 6.56, "first_limit_up": 1782696699, "break_limit_up_times": 4}, {"code": "688120", "name": "华海清科", "price": 316.32, "change_pct": 20.0, "reason": "公司是一家拥有核心自主知识产权的高端半导体设备制造商，主要从事半导体专用设备的研产销及技术服务，主要产品为化学机械抛光（CMP）设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.7, "first_limit_up": 1782715843, "break_limit_up_times": 0}, {"code": "002822", "name": "ST中装", "price": 3.05, "change_pct": 5.17, "reason": "公司申请撤销股票交易其他风险警示", "plates": ["ST股"], "limit_up_days": 5, "turnover_ratio": 2.84, "first_limit_up": 1782702495, "break_limit_up_times": 1}, {"code": "603950", "name": "长源东谷", "price": 76.75, "change_pct": 10.0, "reason": "公司拟收购康豪机电，标的终端应用覆盖数据中心、发电及储能等场景，主要客户包括康明斯集团、卡特彼勒、MTU、广西玉柴、潍柴动力等国内外知名动力系统制造商", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.31, "first_limit_up": 1782697201, "break_limit_up_times": 2}, {"code": "688198", "name": "佰仁医疗", "price": 90.72, "change_pct": 20.0, "reason": "国内技术领先的动物源性植介入医疗器械研发平台企业", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.28, "first_limit_up": 1782701014, "break_limit_up_times": 0}, {"code": "002821", "name": "凯莱英", "price": 167.75, "change_pct": 10.0, "reason": "国内CMO行业龙头之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.34, "first_limit_up": 1782699483, "break_limit_up_times": 0}, {"code": "603880", "name": "南卫股份", "price": 7.74, "change_pct": 9.94, "reason": "公司主要从事透皮产品、医用胶布胶带及绷带、急救包、运动保护用品等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.71, "first_limit_up": 1782709232, "break_limit_up_times": 1}, {"code": "603477", "name": "巨星农牧", "price": 14.55, "change_pct": 9.98, "reason": "生猪养殖为主的大型畜禽养殖企业，其他养殖业务产品包括黄羽鸡", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 3.74, "first_limit_up": 1782700276, "break_limit_up_times": 0}, {"code": "000826", "name": "*ST启环", "price": 1.82, "change_pct": 5.2, "reason": "公司专注于固废收集处置和水务生态综合治理；子公司启迪合加新能源已开发出各类环卫专用车220余款，其中新能源纯电动产品40余款，已开发出L4级纯电动无人驾驶环卫车辆", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.55, "first_limit_up": 1782696648, "break_limit_up_times": 0}, {"code": "605060", "name": "联德股份", "price": 53.6, "change_pct": 9.99, "reason": "公司燃气轮机零部件产品已向数据中心客户小批量供货", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.26, "first_limit_up": 1782697207, "break_limit_up_times": 10}, {"code": "002317", "name": "众生药业", "price": 24.85, "change_pct": 10.0, "reason": "公司自研MASH新药ZSP1601片IIb期临床试验初步结果积极", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.93, "first_limit_up": 1782709533, "break_limit_up_times": 1}, {"code": "000759", "name": "中百集团", "price": 6.31, "change_pct": 9.93, "reason": "以商业零售为主业的大型连锁企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 13.04, "first_limit_up": 1782699576, "break_limit_up_times": 0}, {"code": "601133", "name": "柏诚股份", "price": 42.11, "change_pct": 10.01, "reason": "我国洁净室行业头部企业之一，长鑫为公司客户之一", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 4.14, "first_limit_up": 1782696765, "break_limit_up_times": 4}, {"code": "300204", "name": "舒泰神", "price": 23.28, "change_pct": 20.0, "reason": "公司发布STSA-1002注射液在急性呼吸窘迫综合征（ARDS）适应症下获得了Ib/II期临床试验研究的初步结果", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 12.28, "first_limit_up": 1782701127, "break_limit_up_times": 0}, {"code": "603928", "name": "兴业股份", "price": 13.45, "change_pct": 9.98, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["光刻机（胶）"], "limit_up_days": 2, "turnover_ratio": 5.0, "first_limit_up": 1782697060, "break_limit_up_times": 0}, {"code": "600113", "name": "浙江东日", "price": 30.16, "change_pct": 9.99, "reason": "1、公司主营业务收入主要来自于农副产品批发交易市场业务和生鲜食材配送业务；\n2、子公司培安美此前与首都医科大学开展业务洽谈，推进脑机接口技术研发与产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1782699815, "break_limit_up_times": 0}, {"code": "600378", "name": "昊华科技", "price": 68.53, "change_pct": 10.0, "reason": "公司是国内氟化工龙头，所属昊华气体是国内特种气体行业内的技术领先企业，拥有国家重要的特种气体研究生产基地，主要产品有三氟化氮、四氟化碳、六氟化硫、六氟化钨、六氟丙烷、硒化氢、硫化氢、溴化氢等，总产能达万吨级，部分产品国内市场占有率高达60%，产品主要应用于集成电路、平板显示和太阳能光伏等制造领域", "plates": ["工业气体"], "limit_up_days": 1, "turnover_ratio": 8.47, "first_limit_up": 1782711848, "break_limit_up_times": 0}, {"code": "002342", "name": "巨力索具", "price": 10.62, "change_pct": 10.05, "reason": "公司为商业航天地面发射提供了系统性保障，从生产组装到发射前的安装调试和转运过程都会应用到公司产品", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 14.52, "first_limit_up": 1782698892, "break_limit_up_times": 0}, {"code": "002370", "name": "亚太药业", "price": 5.37, "change_pct": 10.04, "reason": "公司拥有完整的制药产业链，包括抗感染、抗病毒、消化系统、心脑血管药物等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.44, "first_limit_up": 1782699384, "break_limit_up_times": 0}, {"code": "000609", "name": "*ST中迪", "price": 12.9, "change_pct": 4.96, "reason": "公司关联方深圳天微电子拟将其持有的广西天微电子有限公司70%股权无偿赠与公司", "plates": ["ST股"], "limit_up_days": 3, "turnover_ratio": 6.15, "first_limit_up": 1782696300, "break_limit_up_times": 3}, {"code": "600363", "name": "联创光电", "price": 32.53, "change_pct": 10.01, "reason": "1、公司旗下联创超导是国内唯一能设计制造高磁场（15-20T）大口径高温超导磁体的企业，通过参与 “星火一号” 聚变 - 裂变混合示范堆等项目，为核聚变装置提供高温超导磁体系统和低温制冷系统；\n2、公司通过参股子公司联创超导中标资阳商业航天研究院 1960 万元超导磁体项目，持股 30% 合资设立商业航天运营公司，以高温超导核心技术支撑电磁发射场装备研发，参与全球首个超导磁悬浮电磁发射验证平台建设，推动低成本、高频次商业航天发射技术落地", "plates": ["核聚变"], "limit_up_days": 1, "turnover_ratio": 1.38, "first_limit_up": 1782696634, "break_limit_up_times": 0}, {"code": "002828", "name": "贝肯能源", "price": 10.59, "change_pct": 9.97, "reason": "国内领先的油气资源开发综合服务商，是民营企业中为数不多的能够为客户提供钻井总承包、压裂、化工产品销售及配套的检测、维修等一揽子技术服务的油服企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.24, "first_limit_up": 1782696681, "break_limit_up_times": 2}, {"code": "002038", "name": "双鹭药业", "price": 5.58, "change_pct": 10.06, "reason": "公司表示硝酸甘油喷雾剂作为目前国内独家剂型，在心绞痛、心梗时急救产品的迅速起效十分重要", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1782699057, "break_limit_up_times": 0}, {"code": "002638", "name": "勤上股份", "price": 4.02, "change_pct": 10.14, "reason": "公司深耕大功率LED照明二十余年，产品覆盖道路、隧道、景观等场景", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.77, "first_limit_up": 1782697599, "break_limit_up_times": 18}, {"code": "002624", "name": "完美世界", "price": 12.69, "change_pct": 9.97, "reason": "公司游戏新品《异环》反响热烈", "plates": ["游戏"], "limit_up_days": 1, "turnover_ratio": 6.01, "first_limit_up": 1782699099, "break_limit_up_times": 0}, {"code": "000988", "name": "华工科技", "price": 177.03, "change_pct": 10.0, "reason": "据央视财经报道，今年以来，公司旗下核心子公司华工正源800G以上光模块出口同比增长超过100倍", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 11.36, "first_limit_up": 1782696870, "break_limit_up_times": 1}, {"code": "002323", "name": "*ST雅博", "price": 1.37, "change_pct": 5.38, "reason": "公司主营业务包括金属屋面围护系统、分布式光伏发电系统，此前与巴彦淖尔市签约，拟35亿元打造HJT全产业链", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.16, "first_limit_up": 1782715377, "break_limit_up_times": 0}, {"code": "603580", "name": "*ST艾艾", "price": 24.38, "change_pct": 5.0, "reason": "公司主营轻型输送带，2025年净利润4383.99万元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.73, "first_limit_up": 1782714406, "break_limit_up_times": 0}, {"code": "000959", "name": "首钢股份", "price": 3.44, "change_pct": 9.9, "reason": "国内电工钢龙头企业；公司产品有钢坯、热轧、冷轧等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.03, "first_limit_up": 1782709329, "break_limit_up_times": 0}];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};