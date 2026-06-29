const UPDATE_TIME = "2026-06-29 02:58";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": -1.66,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续189天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "可控核聚变",
    "rise": 0.58,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电网设备ETF",
    "code": "886065"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.28,
    "rate": 0,
    "tag": "",
    "hotTag": "连续236天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "中芯国际概念",
    "rise": 0.63,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885897"
  },
  {
    "name": "先进封装",
    "rise": -2.61,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "PCB概念",
    "rise": -4.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "光刻胶",
    "rise": -1.13,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "UC半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "创新药",
    "rise": 5.51,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "连续66天上榜",
    "rankChg": 1,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": -1.93,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续165天上榜",
    "rankChg": -1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "氟化工概念",
    "rise": 0.82,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "石化ETF",
    "code": "885551"
  },
  {
    "name": "国家大基金持股",
    "rise": -0.17,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "光纤概念",
    "rise": -4.12,
    "rate": 0,
    "tag": "",
    "hotTag": "连续65天上榜",
    "rankChg": -1,
    "etfName": "鹏华创新未来LOF",
    "code": "886084"
  },
  {
    "name": "培育钻石",
    "rise": -2.94,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "超导概念",
    "rise": 1.57,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "电网设备ETF",
    "code": "886038"
  },
  {
    "name": "第三代半导体",
    "rise": -1.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885908"
  },
  {
    "name": "芯片概念",
    "rise": -1.82,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续60天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "算力租赁",
    "rise": -1.57,
    "rate": 0,
    "tag": "",
    "hotTag": "连续100天上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "ST板块",
    "rise": -1.43,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "人形机器人",
    "rise": -2.03,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续400天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "液冷服务器",
    "rise": -2.2,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  }
];
const THS_EVENTS = [
  {
    "title": "我国核聚变取得重要突破！",
    "desc": "",
    "heat": 135715,
    "direction": "可控核聚变",
    "themes": [
      "可控核聚变"
    ],
    "stocks": [
      {
        "name": "宏微科技",
        "code": "688711",
        "chg": 13.600609
      }
    ]
  },
  {
    "title": "今年以来算力相关产品加速出海 有武汉企业800G以上光模块出口同比增长超过100倍",
    "desc": "",
    "heat": 26769,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "OCS交换机"
    ],
    "stocks": [
      {
        "name": "华丰科技",
        "code": "688629",
        "chg": 16.613727
      }
    ]
  },
  {
    "title": "又一半导体气体或陷入短缺",
    "desc": "",
    "heat": 23895,
    "direction": "高纯二氧化碳",
    "themes": [
      "半导体应用",
      "食品医用级",
      "碳捕集回收与提纯",
      "电子特气"
    ],
    "stocks": [
      {
        "name": "南大光电",
        "code": "300346",
        "chg": 11.123912
      }
    ]
  },
  {
    "title": "新剑传动创业板IPO获受理",
    "desc": "",
    "heat": 20045,
    "direction": "新剑传动 IPO",
    "themes": [
      "新剑传动",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "维峰电子",
        "code": "301328",
        "chg": 15.792121
      }
    ]
  },
  {
    "title": "康宁推出下一代玻璃光互连组件",
    "desc": "",
    "heat": 0,
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
        "chg": 8.736175
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "PD-1抑制剂",
    "change": "+6.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+6.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+6.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+6.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+5.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+5.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "健康中国",
    "change": "+5.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+5.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+4.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药",
    "change": "+4.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化学原料药",
    "change": "+4.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "精准医疗",
    "change": "+4.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "幽门螺杆菌概念",
    "change": "+4.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "阿尔茨海默病",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医美",
    "change": "+4.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中药",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "眼科",
    "change": "+3.79%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.6%",
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
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5845,
    "price": "7.66",
    "change": "-1.67",
    "market_id": "33",
    "circulate_market_value": "270912250000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.24
      },
      {
        "name": "折叠屏",
        "change_pct": -4.57
      },
      {
        "name": "手机产业链",
        "change_pct": -4.25
      },
      {
        "name": "超高清视频",
        "change_pct": -1.93
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.04
      },
      {
        "name": "半导体",
        "change_pct": -1.17
      },
      {
        "name": "人工智能",
        "change_pct": -0.64
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.57
      },
      {
        "name": "VR&AR",
        "change_pct": -3.17
      },
      {
        "name": "OLED",
        "change_pct": -2.85
      },
      {
        "name": "京津冀",
        "change_pct": -0.4
      },
      {
        "name": "物联网",
        "change_pct": -1.6
      },
      {
        "name": "指纹识别",
        "change_pct": -4.48
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.72
      },
      {
        "name": "白马股",
        "change_pct": 1.64
      },
      {
        "name": "智能制造",
        "change_pct": -1.74
      },
      {
        "name": "小米概念股",
        "change_pct": -3.12
      },
      {
        "name": "国产芯片",
        "change_pct": -1.57
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.01
      },
      {
        "name": "全息概念",
        "change_pct": -1.61
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -1.17
      },
      {
        "name": "MicroLED",
        "change_pct": -4.24
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -1.03
      },
      {
        "name": "智能手表",
        "change_pct": -4.42
      },
      {
        "name": "MiniLED",
        "change_pct": -4.34
      },
      {
        "name": "传感器",
        "change_pct": -1.88
      },
      {
        "name": "大硅片",
        "change_pct": 2.35
      },
      {
        "name": "AI PC",
        "change_pct": -4.09
      },
      {
        "name": "华为产业链",
        "change_pct": -1.96
      },
      {
        "name": "回购",
        "change_pct": 0.68
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.44
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.84
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 10,
    "hot_rank_chg": -9,
    "stock_cnt": 5845,
    "price": "9.08",
    "change": "2.72",
    "market_id": "33",
    "circulate_market_value": "14745043000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.26
      },
      {
        "name": "电竞",
        "change_pct": 0.63
      },
      {
        "name": "手游",
        "change_pct": 1.35
      },
      {
        "name": "强势人气股",
        "change_pct": -3.08
      },
      {
        "name": "人工智能",
        "change_pct": -0.64
      },
      {
        "name": "游戏",
        "change_pct": 1.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.82
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.86
      },
      {
        "name": "快手概念股",
        "change_pct": -0.6
      },
      {
        "name": "元宇宙",
        "change_pct": -0.74
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.98
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.76
      },
      {
        "name": "web3.0",
        "change_pct": -1.23
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.13
      },
      {
        "name": "数据要素",
        "change_pct": -0.72
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.56
      },
      {
        "name": "AI营销",
        "change_pct": 0.22
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.31
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -3.44
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.03
      },
      {
        "name": "人形机器人",
        "change_pct": -2.34
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.31
      },
      {
        "name": "多模态",
        "change_pct": -0.22
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 0.09
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.04
      },
      {
        "name": "小红书概念股",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 22,
    "hot_rank_chg": 29,
    "stock_cnt": 5845,
    "price": "7.26",
    "change": "-0.82",
    "market_id": "17",
    "circulate_market_value": "89995607000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.35
      },
      {
        "name": "核电",
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -3.08
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.26
      },
      {
        "name": "水电",
        "change_pct": 1.22
      },
      {
        "name": "火电",
        "change_pct": 0.82
      },
      {
        "name": "光伏",
        "change_pct": -1.11
      },
      {
        "name": "风电",
        "change_pct": -1.21
      },
      {
        "name": "国企改革",
        "change_pct": -0.27
      },
      {
        "name": "算电协同",
        "change_pct": -1.61
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 34,
    "hot_rank_chg": -20,
    "stock_cnt": 5845,
    "price": "11.45",
    "change": "2.32",
    "market_id": "33",
    "circulate_market_value": "46255479000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.17
      },
      {
        "name": "一带一路",
        "change_pct": -0.7
      },
      {
        "name": "京津冀",
        "change_pct": -0.4
      },
      {
        "name": "光伏",
        "change_pct": -1.11
      },
      {
        "name": "碳中和",
        "change_pct": -0.38
      },
      {
        "name": "国产芯片",
        "change_pct": -1.57
      },
      {
        "name": "IGBT",
        "change_pct": -0.22
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.15
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.99
      },
      {
        "name": "大硅片",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "600226",
    "name": "亨通股份",
    "hot_rank": 36,
    "hot_rank_chg": 66,
    "stock_cnt": 5845,
    "price": "9.61",
    "change": "-8.74",
    "market_id": "17",
    "circulate_market_value": "28583804000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.89
      },
      {
        "name": "禽流感",
        "change_pct": 3.24
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -5.47
      },
      {
        "name": "农药",
        "change_pct": -0.82
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "大农业",
        "change_pct": 0.4
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -3.8
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 40,
    "hot_rank_chg": -7,
    "stock_cnt": 5845,
    "price": "5.25",
    "change": "-2.78",
    "market_id": "33",
    "circulate_market_value": "100443180000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -4.57
      },
      {
        "name": "手机产业链",
        "change_pct": -4.25
      },
      {
        "name": "超高清视频",
        "change_pct": -1.93
      },
      {
        "name": "半导体",
        "change_pct": -1.17
      },
      {
        "name": "OLED",
        "change_pct": -2.85
      },
      {
        "name": "光伏",
        "change_pct": -1.11
      },
      {
        "name": "黑色家电",
        "change_pct": -1.42
      },
      {
        "name": "家电",
        "change_pct": -0.03
      },
      {
        "name": "智能制造",
        "change_pct": -1.74
      },
      {
        "name": "工业互联网",
        "change_pct": -1.17
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -3.12
      },
      {
        "name": "国产芯片",
        "change_pct": -1.57
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.86
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.01
      },
      {
        "name": "MicroLED",
        "change_pct": -4.24
      },
      {
        "name": "MiniLED",
        "change_pct": -4.34
      },
      {
        "name": "华为产业链",
        "change_pct": -1.96
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.84
      }
    ]
  },
  {
    "code": "600497",
    "name": "驰宏锌锗",
    "hot_rank": 44,
    "hot_rank_chg": 22,
    "stock_cnt": 5845,
    "price": "12.63",
    "change": "0.72",
    "market_id": "17",
    "circulate_market_value": "63660006000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -0.29
      },
      {
        "name": "军民融合",
        "change_pct": -1.87
      },
      {
        "name": "有色 · 锑",
        "change_pct": 1.01
      },
      {
        "name": "有色 · 钼",
        "change_pct": -0.57
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.59
      },
      {
        "name": "有色金属",
        "change_pct": -0.87
      },
      {
        "name": "军工",
        "change_pct": -1.61
      },
      {
        "name": "硫酸",
        "change_pct": -0.09
      },
      {
        "name": "国企改革",
        "change_pct": -0.23
      },
      {
        "name": "白银",
        "change_pct": 0.79
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.65
      },
      {
        "name": "光纤概念",
        "change_pct": -4.38
      },
      {
        "name": "有色 · 铋",
        "change_pct": -2.32
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 100,
    "hot_rank_chg": -48,
    "stock_cnt": 5845,
    "price": "9.56",
    "change": "-1.35",
    "market_id": "33",
    "circulate_market_value": "17893736000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -1.08
      },
      {
        "name": "光伏",
        "change_pct": -1.16
      },
      {
        "name": "新能源汽车",
        "change_pct": -1.43
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.6
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.35
      },
      {
        "name": "氮化镓",
        "change_pct": -0.97
      },
      {
        "name": "碳化硅",
        "change_pct": -1.03
      },
      {
        "name": "地摊经济",
        "change_pct": 0.6
      },
      {
        "name": "人形机器人",
        "change_pct": -2.31
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000725", "name": "京东方A", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "7.66", "change": "-1.67", "market_id": "33", "circulate_market_value": "270912250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.24}, {"name": "折叠屏", "change_pct": -4.57}, {"name": "手机产业链", "change_pct": -4.25}, {"name": "超高清视频", "change_pct": -1.93}, {"name": "苹果产业链", "change_pct": -4.04}, {"name": "半导体", "change_pct": -1.17}, {"name": "人工智能", "change_pct": -0.64}, {"name": "互联网医疗", "change_pct": 1.57}, {"name": "VR&AR", "change_pct": -3.17}, {"name": "OLED", "change_pct": -2.85}, {"name": "京津冀", "change_pct": -0.4}, {"name": "物联网", "change_pct": -1.6}, {"name": "指纹识别", "change_pct": -4.48}, {"name": "汽车零部件", "change_pct": -1.72}, {"name": "白马股", "change_pct": 1.64}, {"name": "智能制造", "change_pct": -1.74}, {"name": "小米概念股", "change_pct": -3.12}, {"name": "国产芯片", "change_pct": -1.57}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "全息概念", "change_pct": -1.61}, {"name": "理想汽车概念股", "change_pct": -1.17}, {"name": "MicroLED", "change_pct": -4.24}, {"name": "钙钛矿电池", "change_pct": -1.03}, {"name": "智能手表", "change_pct": -4.42}, {"name": "MiniLED", "change_pct": -4.34}, {"name": "传感器", "change_pct": -1.88}, {"name": "大硅片", "change_pct": 2.35}, {"name": "AI PC", "change_pct": -4.09}, {"name": "华为产业链", "change_pct": -1.96}, {"name": "回购", "change_pct": 0.68}, {"name": "智能眼镜/MR头显", "change_pct": -3.44}, {"name": "玻璃基板封装", "change_pct": -3.84}]}, {"code": "600667", "name": "太极实业", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "27.76", "change": "3.27", "market_id": "17", "circulate_market_value": "58061211000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5845, "price": "95.49", "change": "-5.35", "market_id": "17", "circulate_market_value": "170871200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 4, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "21.36", "change": "-5.32", "market_id": "33", "circulate_market_value": "70971842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 5, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "57.32", "change": "7.12", "market_id": "33", "circulate_market_value": "90229652000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 6, "hot_rank_chg": 3, "stock_cnt": 5845, "price": "58.34", "change": "-4.81", "market_id": "17", "circulate_market_value": "199111480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5845, "price": "62.21", "change": "2.39", "market_id": "17", "circulate_market_value": "52664083000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001399", "name": "惠科股份", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "36.56", "change": "-12.95", "market_id": "33", "circulate_market_value": "15741520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 9, "hot_rank_chg": 12, "stock_cnt": 5845, "price": "52.80", "change": "4.80", "market_id": "17", "circulate_market_value": "87862993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 10, "hot_rank_chg": -9, "stock_cnt": 5845, "price": "9.08", "change": "2.72", "market_id": "33", "circulate_market_value": "14745043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.26}, {"name": "电竞", "change_pct": 0.63}, {"name": "手游", "change_pct": 1.35}, {"name": "强势人气股", "change_pct": -3.08}, {"name": "人工智能", "change_pct": -0.64}, {"name": "游戏", "change_pct": 1.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.82}, {"name": "腾讯概念股", "change_pct": -0.86}, {"name": "快手概念股", "change_pct": -0.6}, {"name": "元宇宙", "change_pct": -0.74}, {"name": "虚拟数字人", "change_pct": -0.98}, {"name": "东数西算/算力", "change_pct": -1.76}, {"name": "web3.0", "change_pct": -1.23}, {"name": "AIGC概念", "change_pct": -0.13}, {"name": "数据要素", "change_pct": -0.72}, {"name": "字节跳动概念股", "change_pct": -0.56}, {"name": "AI营销", "change_pct": 0.22}, {"name": "ChatGPT", "change_pct": -0.31}, {"name": "智能眼镜/MR头显", "change_pct": -3.44}, {"name": "人工智能大模型", "change_pct": 0.03}, {"name": "人形机器人", "change_pct": -2.34}, {"name": "短剧/互动影游", "change_pct": -0.31}, {"name": "多模态", "change_pct": -0.22}, {"name": "Sora/AI视频", "change_pct": 0.09}, {"name": "IP经济/谷子经济", "change_pct": 0.04}, {"name": "小红书概念股", "change_pct": -1.04}]}, {"code": "600703", "name": "三安光电", "hot_rank": 11, "hot_rank_chg": 2, "stock_cnt": 5845, "price": "20.81", "change": "-4.23", "market_id": "17", "circulate_market_value": "103821480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 12, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "106.01", "change": "-4.10", "market_id": "17", "circulate_market_value": "259213650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 13, "hot_rank_chg": 10, "stock_cnt": 5845, "price": "779.30", "change": "1.21", "market_id": "17", "circulate_market_value": "520955760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 14, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "68.18", "change": "-8.01", "market_id": "17", "circulate_market_value": "272933860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600707", "name": "彩虹股份", "hot_rank": 15, "hot_rank_chg": 21, "stock_cnt": 5845, "price": "14.77", "change": "5.80", "market_id": "17", "circulate_market_value": "52989882000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 16, "hot_rank_chg": 12, "stock_cnt": 5845, "price": "79.60", "change": "1.40", "market_id": "33", "circulate_market_value": "92098244000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 17, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "174.62", "change": "8.50", "market_id": "33", "circulate_market_value": "175490600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300346", "name": "南大光电", "hot_rank": 18, "hot_rank_chg": 30, "stock_cnt": 5845, "price": "86.67", "change": "10.95", "market_id": "33", "circulate_market_value": "56854657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 19, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "45.66", "change": "10.00", "market_id": "33", "circulate_market_value": "49256517000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体级氢氟酸涨价"}, {"code": "605358", "name": "立昂微", "hot_rank": 20, "hot_rank_chg": -15, "stock_cnt": 5845, "price": "74.59", "change": "-1.03", "market_id": "17", "circulate_market_value": "57598351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600552", "name": "凯盛科技", "hot_rank": 21, "hot_rank_chg": -13, "stock_cnt": 5845, "price": "30.67", "change": "3.62", "market_id": "17", "circulate_market_value": "28971093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 22, "hot_rank_chg": 29, "stock_cnt": 5845, "price": "7.26", "change": "-0.82", "market_id": "17", "circulate_market_value": "89995607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.35}, {"name": "核电", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -3.08}, {"name": "电力体制改革", "change_pct": 0.26}, {"name": "水电", "change_pct": 1.22}, {"name": "火电", "change_pct": 0.82}, {"name": "光伏", "change_pct": -1.11}, {"name": "风电", "change_pct": -1.21}, {"name": "国企改革", "change_pct": -0.27}, {"name": "算电协同", "change_pct": -1.61}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5845, "price": "204.33", "change": "8.40", "market_id": "33", "circulate_market_value": "65121976000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 24, "hot_rank_chg": 31, "stock_cnt": 5845, "price": "68.29", "change": "-2.75", "market_id": "17", "circulate_market_value": "1355153100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "15.73", "change": "-5.53", "market_id": "17", "circulate_market_value": "20075503000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 26, "hot_rank_chg": 15, "stock_cnt": 5845, "price": "69.50", "change": "-2.93", "market_id": "33", "circulate_market_value": "105462929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 27, "hot_rank_chg": 5, "stock_cnt": 5845, "price": "140.48", "change": "-7.13", "market_id": "33", "circulate_market_value": "134401060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 28, "hot_rank_chg": 42, "stock_cnt": 5845, "price": "244.33", "change": "-6.14", "market_id": "33", "circulate_market_value": "338719990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603005", "name": "晶方科技", "hot_rank": 29, "hot_rank_chg": 8, "stock_cnt": 5845, "price": "47.35", "change": "-9.48", "market_id": "17", "circulate_market_value": "30880330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 30, "hot_rank_chg": 0, "stock_cnt": 5845, "price": "180.84", "change": "-3.34", "market_id": "17", "circulate_market_value": "46662326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 31, "hot_rank_chg": 25, "stock_cnt": 5845, "price": "164.95", "change": "-7.59", "market_id": "17", "circulate_market_value": "394973030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 32, "hot_rank_chg": 21, "stock_cnt": 5845, "price": "108.25", "change": "5.29", "market_id": "33", "circulate_market_value": "92409629000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 33, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "20.52", "change": "-9.96", "market_id": "33", "circulate_market_value": "11965777900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 34, "hot_rank_chg": -20, "stock_cnt": 5845, "price": "11.45", "change": "2.32", "market_id": "33", "circulate_market_value": "46255479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.17}, {"name": "一带一路", "change_pct": -0.7}, {"name": "京津冀", "change_pct": -0.4}, {"name": "光伏", "change_pct": -1.11}, {"name": "碳中和", "change_pct": -0.38}, {"name": "国产芯片", "change_pct": -1.57}, {"name": "IGBT", "change_pct": -0.22}, {"name": "颗粒硅", "change_pct": 1.15}, {"name": "异质结电池HJT", "change_pct": -0.99}, {"name": "大硅片", "change_pct": 2.35}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 35, "hot_rank_chg": 12, "stock_cnt": 5845, "price": "61.16", "change": "-6.92", "market_id": "17", "circulate_market_value": "89415602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600226", "name": "亨通股份", "hot_rank": 36, "hot_rank_chg": 66, "stock_cnt": 5845, "price": "9.61", "change": "-8.74", "market_id": "17", "circulate_market_value": "28583804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.89}, {"name": "禽流感", "change_pct": 3.24}, {"name": "铜箔/覆铜板", "change_pct": -5.47}, {"name": "农药", "change_pct": -0.82}, {"name": "独角兽", "change_pct": 0.85}, {"name": "大农业", "change_pct": 0.4}, {"name": "PET复合铜箔", "change_pct": -3.8}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 37, "hot_rank_chg": 96, "stock_cnt": 5845, "price": "280.00", "change": "6.94", "market_id": "17", "circulate_market_value": "320999430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 38, "hot_rank_chg": 42, "stock_cnt": 5845, "price": "18.49", "change": "-0.43", "market_id": "33", "circulate_market_value": "59641156000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 39, "hot_rank_chg": 5, "stock_cnt": 5845, "price": "115.00", "change": "-4.57", "market_id": "33", "circulate_market_value": "75079506000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 40, "hot_rank_chg": -7, "stock_cnt": 5845, "price": "5.25", "change": "-2.78", "market_id": "33", "circulate_market_value": "100443180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -4.57}, {"name": "手机产业链", "change_pct": -4.25}, {"name": "超高清视频", "change_pct": -1.93}, {"name": "半导体", "change_pct": -1.17}, {"name": "OLED", "change_pct": -2.85}, {"name": "光伏", "change_pct": -1.11}, {"name": "黑色家电", "change_pct": -1.42}, {"name": "家电", "change_pct": -0.03}, {"name": "智能制造", "change_pct": -1.74}, {"name": "工业互联网", "change_pct": -1.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -3.12}, {"name": "国产芯片", "change_pct": -1.57}, {"name": "腾讯概念股", "change_pct": -0.86}, {"name": "液晶面板/LCD", "change_pct": -3.01}, {"name": "MicroLED", "change_pct": -4.24}, {"name": "MiniLED", "change_pct": -4.34}, {"name": "华为产业链", "change_pct": -1.96}, {"name": "玻璃基板封装", "change_pct": -3.84}]}, {"code": "300136", "name": "信维通信", "hot_rank": 41, "hot_rank_chg": 100, "stock_cnt": 5845, "price": "119.30", "change": "0.94", "market_id": "33", "circulate_market_value": "98446388000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600160", "name": "巨化股份", "hot_rank": 42, "hot_rank_chg": 36, "stock_cnt": 5845, "price": "48.85", "change": "-4.12", "market_id": "17", "circulate_market_value": "131882596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 43, "hot_rank_chg": -27, "stock_cnt": 5845, "price": "33.82", "change": "-8.64", "market_id": "33", "circulate_market_value": "12692104900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600497", "name": "驰宏锌锗", "hot_rank": 44, "hot_rank_chg": 22, "stock_cnt": 5845, "price": "12.63", "change": "0.72", "market_id": "17", "circulate_market_value": "63660006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -0.29}, {"name": "军民融合", "change_pct": -1.87}, {"name": "有色 · 锑", "change_pct": 1.01}, {"name": "有色 · 钼", "change_pct": -0.57}, {"name": "有色 · 锌", "change_pct": 1.59}, {"name": "有色金属", "change_pct": -0.87}, {"name": "军工", "change_pct": -1.61}, {"name": "硫酸", "change_pct": -0.09}, {"name": "国企改革", "change_pct": -0.23}, {"name": "白银", "change_pct": 0.79}, {"name": "新冠病毒防治", "change_pct": 1.65}, {"name": "光纤概念", "change_pct": -4.38}, {"name": "有色 · 铋", "change_pct": -2.32}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 45, "hot_rank_chg": 23, "stock_cnt": 5845, "price": "230.36", "change": "-4.15", "market_id": "33", "circulate_market_value": "179795600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 46, "hot_rank_chg": 45, "stock_cnt": 5845, "price": "64.50", "change": "-5.15", "market_id": "33", "circulate_market_value": "470948560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 47, "hot_rank_chg": 37, "stock_cnt": 5845, "price": "16.11", "change": "4.82", "market_id": "17", "circulate_market_value": "23725307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 48, "hot_rank_chg": 42, "stock_cnt": 5845, "price": "138.89", "change": "-5.74", "market_id": "33", "circulate_market_value": "266943780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 49, "hot_rank_chg": -6, "stock_cnt": 5845, "price": "23.70", "change": "-9.64", "market_id": "17", "circulate_market_value": "26877661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 50, "hot_rank_chg": 35, "stock_cnt": 5845, "price": "93.23", "change": "-6.31", "market_id": "33", "circulate_market_value": "135456230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 51, "hot_rank_chg": 6, "stock_cnt": 5845, "price": "21.73", "change": "-6.86", "market_id": "33", "circulate_market_value": "73088965000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 52, "hot_rank_chg": -28, "stock_cnt": 5845, "price": "58.57", "change": "0.50", "market_id": "17", "circulate_market_value": "18857969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 53, "hot_rank_chg": 16, "stock_cnt": 5845, "price": "60.03", "change": "-3.64", "market_id": "17", "circulate_market_value": "64386099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603773", "name": "沃格光电", "hot_rank": 54, "hot_rank_chg": -23, "stock_cnt": 5845, "price": "169.19", "change": "-4.95", "market_id": "17", "circulate_market_value": "38013378000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 55, "hot_rank_chg": 26, "stock_cnt": 5845, "price": "14.62", "change": "-4.38", "market_id": "17", "circulate_market_value": "25368345000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 56, "hot_rank_chg": -21, "stock_cnt": 5845, "price": "267.30", "change": "-10.00", "market_id": "17", "circulate_market_value": "235151160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 57, "hot_rank_chg": 14, "stock_cnt": 5845, "price": "1187.97", "change": "-5.26", "market_id": "33", "circulate_market_value": "1318575160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 59, "hot_rank_chg": 34, "stock_cnt": 5845, "price": "32.54", "change": "-9.99", "market_id": "33", "circulate_market_value": "38282297000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 60, "hot_rank_chg": 23, "stock_cnt": 5845, "price": "47.98", "change": "-7.37", "market_id": "33", "circulate_market_value": "72845481000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 61, "hot_rank_chg": -32, "stock_cnt": 5845, "price": "918.97", "change": "-3.37", "market_id": "33", "circulate_market_value": "151551780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 62, "hot_rank_chg": 5, "stock_cnt": 5845, "price": "46.89", "change": "-10.29", "market_id": "33", "circulate_market_value": "65851984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688126", "name": "沪硅产业", "hot_rank": 63, "hot_rank_chg": 52, "stock_cnt": 5845, "price": "37.30", "change": "7.00", "market_id": "17", "circulate_market_value": "106010307000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 64, "hot_rank_chg": -45, "stock_cnt": 5845, "price": "25.61", "change": "-10.01", "market_id": "33", "circulate_market_value": "15236213000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 65, "hot_rank_chg": 44, "stock_cnt": 5845, "price": "51.92", "change": "3.78", "market_id": "33", "circulate_market_value": "78317672000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002674", "name": "兴业科技", "hot_rank": 66, "hot_rank_chg": -24, "stock_cnt": 5845, "price": "29.84", "change": "3.29", "market_id": "33", "circulate_market_value": "8712545600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 67, "hot_rank_chg": 45, "stock_cnt": 5845, "price": "32.30", "change": "-6.67", "market_id": "17", "circulate_market_value": "71685094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 68, "hot_rank_chg": 38, "stock_cnt": 5845, "price": "51.70", "change": "-7.00", "market_id": "33", "circulate_market_value": "256933490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603650", "name": "彤程新材", "hot_rank": 69, "hot_rank_chg": -51, "stock_cnt": 5845, "price": "91.46", "change": "6.56", "market_id": "17", "circulate_market_value": "56199736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300408", "name": "三环集团", "hot_rank": 70, "hot_rank_chg": 98, "stock_cnt": 5845, "price": "164.80", "change": "2.97", "market_id": "33", "circulate_market_value": "308143690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 71, "hot_rank_chg": 1, "stock_cnt": 5845, "price": "97.27", "change": "-1.51", "market_id": "17", "circulate_market_value": "142311300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002549", "name": "凯美特气", "hot_rank": 72, "hot_rank_chg": -12, "stock_cnt": 5845, "price": "20.89", "change": "10.01", "market_id": "33", "circulate_market_value": "14463390000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "二氧化碳短缺"}, {"code": "300666", "name": "江丰电子", "hot_rank": 73, "hot_rank_chg": -8, "stock_cnt": 5845, "price": "366.14", "change": "3.20", "market_id": "33", "circulate_market_value": "80959333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 74, "hot_rank_chg": 92, "stock_cnt": 5845, "price": "15.42", "change": "-6.03", "market_id": "33", "circulate_market_value": "111019448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 75, "hot_rank_chg": 28, "stock_cnt": 5845, "price": "77.20", "change": "-6.50", "market_id": "33", "circulate_market_value": "87271369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 76, "hot_rank_chg": 35, "stock_cnt": 5845, "price": "540.50", "change": "-4.50", "market_id": "33", "circulate_market_value": "677918430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 77, "hot_rank_chg": 22, "stock_cnt": 5845, "price": "691.30", "change": "1.72", "market_id": "33", "circulate_market_value": "194844210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 78, "hot_rank_chg": 60, "stock_cnt": 5845, "price": "16.82", "change": "0.06", "market_id": "33", "circulate_market_value": "25663642000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300059", "name": "东方财富", "hot_rank": 79, "hot_rank_chg": 165, "stock_cnt": 5845, "price": "20.07", "change": "0.00", "market_id": "33", "circulate_market_value": "268000650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002149", "name": "西部材料", "hot_rank": 80, "hot_rank_chg": 151, "stock_cnt": 5845, "price": "51.40", "change": "2.76", "market_id": "33", "circulate_market_value": "25090359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002208", "name": "合肥城建", "hot_rank": 81, "hot_rank_chg": 65, "stock_cnt": 5845, "price": "18.01", "change": "7.78", "market_id": "33", "circulate_market_value": "14463332000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 82, "hot_rank_chg": 75, "stock_cnt": 5845, "price": "33.56", "change": "-3.20", "market_id": "33", "circulate_market_value": "26257499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 83, "hot_rank_chg": 9, "stock_cnt": 5845, "price": "71.68", "change": "-5.96", "market_id": "17", "circulate_market_value": "91149826000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600397", "name": "江钨装备", "hot_rank": 84, "hot_rank_chg": 97, "stock_cnt": 5845, "price": "27.23", "change": "4.57", "market_id": "17", "circulate_market_value": "26956608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601208", "name": "东材科技", "hot_rank": 85, "hot_rank_chg": 58, "stock_cnt": 5845, "price": "66.43", "change": "-9.80", "market_id": "17", "circulate_market_value": "67106453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002741", "name": "光华科技", "hot_rank": 86, "hot_rank_chg": -11, "stock_cnt": 5845, "price": "35.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "15007809000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 87, "hot_rank_chg": -26, "stock_cnt": 5845, "price": "43.43", "change": "-9.43", "market_id": "17", "circulate_market_value": "16748226000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 88, "hot_rank_chg": 52, "stock_cnt": 5845, "price": "124.99", "change": "5.76", "market_id": "17", "circulate_market_value": "309135300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5845, "price": "296.40", "change": "-6.79", "market_id": "33", "circulate_market_value": "322598220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 90, "hot_rank_chg": 148, "stock_cnt": 5845, "price": "65.95", "change": "3.22", "market_id": "33", "circulate_market_value": "96737557000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605006", "name": "山东玻纤", "hot_rank": 91, "hot_rank_chg": -14, "stock_cnt": 5845, "price": "22.45", "change": "-9.98", "market_id": "17", "circulate_market_value": "14106684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 92, "hot_rank_chg": 31, "stock_cnt": 5845, "price": "158.77", "change": "-6.77", "market_id": "33", "circulate_market_value": "131622798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300373", "name": "扬杰科技", "hot_rank": 93, "hot_rank_chg": 49, "stock_cnt": 5845, "price": "147.88", "change": "8.93", "market_id": "33", "circulate_market_value": "80171421000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 94, "hot_rank_chg": -49, "stock_cnt": 5845, "price": "72.34", "change": "-4.58", "market_id": "17", "circulate_market_value": "27679056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 95, "hot_rank_chg": 107, "stock_cnt": 5845, "price": "17.57", "change": "1.91", "market_id": "17", "circulate_market_value": "306787000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002938", "name": "鹏鼎控股", "hot_rank": 96, "hot_rank_chg": 91, "stock_cnt": 5845, "price": "99.93", "change": "-9.96", "market_id": "33", "circulate_market_value": "230776610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "北京君正", "hot_rank": 97, "hot_rank_chg": 50, "stock_cnt": 5845, "price": "229.80", "change": "-1.46", "market_id": "33", "circulate_market_value": "96905334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 98, "hot_rank_chg": 403, "stock_cnt": 5845, "price": "14.06", "change": "10.02", "market_id": "33", "circulate_market_value": "9274449000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "可控核聚变"}, {"code": "300398", "name": "飞凯材料", "hot_rank": 99, "hot_rank_chg": -25, "stock_cnt": 5845, "price": "56.48", "change": "-7.85", "market_id": "33", "circulate_market_value": "32020604000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 100, "hot_rank_chg": -48, "stock_cnt": 5845, "price": "9.56", "change": "-1.35", "market_id": "33", "circulate_market_value": "17893736000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -1.08}, {"name": "光伏", "change_pct": -1.16}, {"name": "新能源汽车", "change_pct": -1.43}, {"name": "新能源车零部件", "change_pct": -1.6}, {"name": "第三代半导体", "change_pct": -1.35}, {"name": "氮化镓", "change_pct": -0.97}, {"name": "碳化硅", "change_pct": -1.03}, {"name": "地摊经济", "change_pct": 0.6}, {"name": "人形机器人", "change_pct": -2.31}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "002731": "[立案调查] ST萃华：关于立案调查事项的进展公告", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚"};