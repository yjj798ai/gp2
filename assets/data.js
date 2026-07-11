const UPDATE_TIME = "2026-07-11 00:02";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": 2.07,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续174天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": 3.03,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -3.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续198天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.58,
    "rate": 0,
    "tag": "",
    "hotTag": "连续245天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": 0.38,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "连续409天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "猪肉",
    "rise": 3.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": 1.59,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续109天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": 1.83,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "CRO概念",
    "rise": 4.43,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物科技ETF",
    "code": "885927"
  },
  {
    "name": "芯片概念",
    "rise": -1.46,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885756"
  },
  {
    "name": "先进封装",
    "rise": -3.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "886009"
  },
  {
    "name": "PCB概念",
    "rise": -2.54,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.45,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "科创芯片ETF",
    "code": "885893"
  },
  {
    "name": "机器人概念",
    "rise": 0.62,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "连续76天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "人工智能",
    "rise": 1.46,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "人工智能ETF",
    "code": "885728"
  },
  {
    "name": "军工",
    "rise": 1.72,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 0.18,
    "rate": 0,
    "tag": "12家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "减肥药",
    "rise": 4.35,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "2026中报预增",
    "rise": -0.65,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "化工ETF",
    "code": "886110"
  },
  {
    "name": "国产航母",
    "rise": 4.27,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "军工ETF",
    "code": "885795"
  }
];
const THS_EVENTS = [
  {
    "title": "长征十号乙火箭有望7月10日首飞 将验证全球首创海上网系回收技术",
    "desc": "",
    "heat": 817041,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "海兰信",
        "code": "300065",
        "chg": 20.008337
      }
    ]
  },
  {
    "title": "创新药利好，有股票直线封板！时隔8年新版国家基本药物目录发布，9月1日起实施",
    "desc": "",
    "heat": 567180,
    "direction": "创新药",
    "themes": [
      "创新药",
      "CRO概念",
      "仿制药一致性评价",
      "细胞免疫治疗"
    ],
    "stocks": [
      {
        "name": "益诺思",
        "code": "688710",
        "chg": 20.003082
      }
    ]
  },
  {
    "title": "国家发展改革委：《“十五五”碳达峰行动方案》部署5方面重点任务",
    "desc": "",
    "heat": 306056,
    "direction": "碳达峰",
    "themes": [
      "绿色电力",
      "碳中和",
      "建筑节能"
    ],
    "stocks": [
      {
        "name": "龙源技术",
        "code": "300105",
        "chg": 18.379161
      }
    ]
  },
  {
    "title": "特斯拉三代 Optimus 初步定型，马斯克给供应链定下量产红线",
    "desc": "",
    "heat": 154491,
    "direction": "特斯拉机器人",
    "themes": [
      "特斯拉概念",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "同益中",
        "code": "688722",
        "chg": 19.986894
      }
    ]
  },
  {
    "title": "字节跳动兆瓦级算力系统AI Rack 3.0亮相",
    "desc": "",
    "heat": 62007,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "捷邦科技",
        "code": "301326",
        "chg": 17.439311
      }
    ]
  },
  {
    "title": "华为联合产业伙伴发起OPEN NPO项目，共建国内首个NPO光互连MSA",
    "desc": "",
    "heat": 24899,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)"
    ],
    "stocks": [
      {
        "name": "深科达",
        "code": "688328",
        "chg": 15.889041
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "太空算力",
    "change": "+5.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+4.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "基因编辑",
    "change": "+4.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "北斗导航",
    "change": "+4.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+4.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+3.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+3.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "创新药",
    "change": "+3.65%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "卫星互联网",
    "change": "+3.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+3.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业大麻",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI医疗",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天津国企改革",
    "change": "+3.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "疫苗",
    "change": "+3.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小红书概念股",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "葡萄酒",
    "change": "+3.44%",
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
    "hot_rank_chg": 1,
    "stock_cnt": 5763,
    "price": "7.59",
    "change": "-6.87",
    "market_id": "33",
    "circulate_market_value": "268436550000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.9
      },
      {
        "name": "折叠屏",
        "change_pct": -2.04
      },
      {
        "name": "手机产业链",
        "change_pct": -1.6
      },
      {
        "name": "超高清视频",
        "change_pct": -0.34
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.95
      },
      {
        "name": "电竞",
        "change_pct": 2.09
      },
      {
        "name": "半导体",
        "change_pct": -4.41
      },
      {
        "name": "人工智能",
        "change_pct": 1.5
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.48
      },
      {
        "name": "VR&AR",
        "change_pct": -0.07
      },
      {
        "name": "OLED",
        "change_pct": -3.22
      },
      {
        "name": "京津冀",
        "change_pct": 1.85
      },
      {
        "name": "物联网",
        "change_pct": 0.96
      },
      {
        "name": "指纹识别",
        "change_pct": -1.24
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.08
      },
      {
        "name": "白马股",
        "change_pct": 0.47
      },
      {
        "name": "智能制造",
        "change_pct": 0.34
      },
      {
        "name": "小米概念股",
        "change_pct": -1.25
      },
      {
        "name": "国产芯片",
        "change_pct": -2.46
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.06
      },
      {
        "name": "全息概念",
        "change_pct": 1.27
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.82
      },
      {
        "name": "MicroLED",
        "change_pct": -2.7
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.17
      },
      {
        "name": "智能手表",
        "change_pct": -1.3
      },
      {
        "name": "MiniLED",
        "change_pct": -2.05
      },
      {
        "name": "传感器",
        "change_pct": -0.38
      },
      {
        "name": "大硅片",
        "change_pct": -4.77
      },
      {
        "name": "AI PC",
        "change_pct": -0.68
      },
      {
        "name": "华为产业链",
        "change_pct": 0.21
      },
      {
        "name": "回购",
        "change_pct": 0.57
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.88
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.2
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 18,
    "hot_rank_chg": 1,
    "stock_cnt": 5763,
    "price": "8.54",
    "change": "5.69",
    "market_id": "33",
    "circulate_market_value": "13883425000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "电竞",
        "change_pct": 2.09
      },
      {
        "name": "手游",
        "change_pct": 2.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "人工智能",
        "change_pct": 1.5
      },
      {
        "name": "游戏",
        "change_pct": 2.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 1.81
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.79
      },
      {
        "name": "快手概念股",
        "change_pct": 2.6
      },
      {
        "name": "元宇宙",
        "change_pct": 2.32
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.45
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.53
      },
      {
        "name": "web3.0",
        "change_pct": 2.38
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.43
      },
      {
        "name": "数据要素",
        "change_pct": 2.24
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.1
      },
      {
        "name": "AI营销",
        "change_pct": 4.19
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.47
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.88
      },
      {
        "name": "人工智能大模型",
        "change_pct": 1.93
      },
      {
        "name": "人形机器人",
        "change_pct": 0.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.74
      },
      {
        "name": "多模态",
        "change_pct": 2.43
      },
      {
        "name": "Sora/AI视频",
        "change_pct": 2.88
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.34
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.5
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 30,
    "hot_rank_chg": 1,
    "stock_cnt": 5763,
    "price": "12.73",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "10298811700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.56
      },
      {
        "name": "大飞机",
        "change_pct": 2.11
      },
      {
        "name": "北斗导航",
        "change_pct": 4.32
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.16
      },
      {
        "name": "军民融合",
        "change_pct": 1.94
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.49
      },
      {
        "name": "军工",
        "change_pct": 2.04
      },
      {
        "name": "碳纤维",
        "change_pct": 0.37
      },
      {
        "name": "无人机",
        "change_pct": 2.37
      },
      {
        "name": "航天",
        "change_pct": 3.34
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.64
      },
      {
        "name": "低空经济",
        "change_pct": 1.76
      },
      {
        "name": "海洋经济",
        "change_pct": 2.65
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 41,
    "hot_rank_chg": 2,
    "stock_cnt": 5763,
    "price": "3.63",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "16958448000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "收购完成",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.22
      },
      {
        "name": "房地产",
        "change_pct": 2.45
      },
      {
        "name": "京津冀",
        "change_pct": 1.85
      },
      {
        "name": "旅游",
        "change_pct": 2.18
      },
      {
        "name": "国产芯片",
        "change_pct": -2.46
      },
      {
        "name": "内存",
        "change_pct": -3.28
      },
      {
        "name": "闪存",
        "change_pct": -3.41
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.34
      }
    ]
  },
  {
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 54,
    "hot_rank_chg": -6,
    "stock_cnt": 5763,
    "price": "10.65",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "2610208500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "航母",
        "change_pct": 2.47
      },
      {
        "name": "军工",
        "change_pct": 2.04
      },
      {
        "name": "航天",
        "change_pct": 3.34
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 57,
    "hot_rank_chg": 6,
    "stock_cnt": 5763,
    "price": "8.44",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "15847128000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.41
      },
      {
        "name": "光伏",
        "change_pct": 0.12
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.05
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.05
      },
      {
        "name": "第三代半导体",
        "change_pct": -3.29
      },
      {
        "name": "氮化镓",
        "change_pct": -2.47
      },
      {
        "name": "碳化硅",
        "change_pct": -5.54
      },
      {
        "name": "地摊经济",
        "change_pct": 1.33
      },
      {
        "name": "人形机器人",
        "change_pct": 0.52
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -0.81
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 62,
    "hot_rank_chg": 0,
    "stock_cnt": 5763,
    "price": "6.64",
    "change": "1.06",
    "market_id": "17",
    "circulate_market_value": "82310032000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.46
      },
      {
        "name": "核电",
        "change_pct": 1.92
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.71
      },
      {
        "name": "水电",
        "change_pct": 1.4
      },
      {
        "name": "火电",
        "change_pct": 1.37
      },
      {
        "name": "光伏",
        "change_pct": 0.12
      },
      {
        "name": "风电",
        "change_pct": 1.44
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      },
      {
        "name": "算电协同",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 64,
    "hot_rank_chg": 16,
    "stock_cnt": 5763,
    "price": "5.12",
    "change": "-4.48",
    "market_id": "33",
    "circulate_market_value": "103005831000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -2.04
      },
      {
        "name": "手机产业链",
        "change_pct": -1.6
      },
      {
        "name": "超高清视频",
        "change_pct": -0.34
      },
      {
        "name": "电竞",
        "change_pct": 2.09
      },
      {
        "name": "半导体",
        "change_pct": -4.41
      },
      {
        "name": "OLED",
        "change_pct": -3.22
      },
      {
        "name": "光伏",
        "change_pct": 0.12
      },
      {
        "name": "黑色家电",
        "change_pct": 1.14
      },
      {
        "name": "家电",
        "change_pct": 1.64
      },
      {
        "name": "智能制造",
        "change_pct": 0.34
      },
      {
        "name": "工业互联网",
        "change_pct": 1.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.25
      },
      {
        "name": "国产芯片",
        "change_pct": -2.46
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.79
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -3.06
      },
      {
        "name": "MicroLED",
        "change_pct": -2.7
      },
      {
        "name": "MiniLED",
        "change_pct": -2.05
      },
      {
        "name": "华为产业链",
        "change_pct": 0.21
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -3.2
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 67,
    "hot_rank_chg": 0,
    "stock_cnt": 5763,
    "price": "3.37",
    "change": "10.13",
    "market_id": "17",
    "circulate_market_value": "8487378300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报预增",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.61
      },
      {
        "name": "工业大麻",
        "change_pct": 3.59
      },
      {
        "name": "中药",
        "change_pct": 2.19
      },
      {
        "name": "保健品",
        "change_pct": 1.83
      },
      {
        "name": "医药",
        "change_pct": 2.88
      },
      {
        "name": "化学原料药",
        "change_pct": 2.82
      },
      {
        "name": "流感",
        "change_pct": 1.98
      },
      {
        "name": "振兴东北",
        "change_pct": 1.9
      },
      {
        "name": "食品",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "002115",
    "name": "三维通信",
    "hot_rank": 69,
    "hot_rank_chg": 3,
    "stock_cnt": 5763,
    "price": "10.95",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "8171615000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "2026中报预增",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.27
      },
      {
        "name": "手游",
        "change_pct": 2.1
      },
      {
        "name": "5G",
        "change_pct": -0.25
      },
      {
        "name": "人工智能",
        "change_pct": 1.5
      },
      {
        "name": "物联网",
        "change_pct": 0.96
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.73
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.79
      },
      {
        "name": "快手概念股",
        "change_pct": 2.6
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.1
      },
      {
        "name": "知识付费",
        "change_pct": 1.81
      },
      {
        "name": "卫星互联网",
        "change_pct": 3.64
      },
      {
        "name": "华为产业链",
        "change_pct": 0.21
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.74
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.5
      },
      {
        "name": "海洋经济",
        "change_pct": 2.65
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 78,
    "hot_rank_chg": -24,
    "stock_cnt": 5763,
    "price": "4.20",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "2985513100.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "4",
    "change_reason": "互动影游",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.5
      },
      {
        "name": "影视",
        "change_pct": 3.42
      },
      {
        "name": "旅游",
        "change_pct": 2.18
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.45
      },
      {
        "name": "AI营销",
        "change_pct": 4.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.74
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.34
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 83,
    "hot_rank_chg": 20,
    "stock_cnt": 5763,
    "price": "10.66",
    "change": "-3.35",
    "market_id": "33",
    "circulate_market_value": "43062773000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -4.41
      },
      {
        "name": "一带一路",
        "change_pct": 1.46
      },
      {
        "name": "京津冀",
        "change_pct": 1.85
      },
      {
        "name": "光伏",
        "change_pct": 0.12
      },
      {
        "name": "碳中和",
        "change_pct": 1.4
      },
      {
        "name": "国产芯片",
        "change_pct": -2.46
      },
      {
        "name": "IGBT",
        "change_pct": -3.59
      },
      {
        "name": "颗粒硅",
        "change_pct": 1.04
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -1.14
      },
      {
        "name": "大硅片",
        "change_pct": -4.77
      }
    ]
  },
  {
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 85,
    "hot_rank_chg": -19,
    "stock_cnt": 5763,
    "price": "12.90",
    "change": "5.57",
    "market_id": "17",
    "circulate_market_value": "18997918000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.46
      },
      {
        "name": "强势人气股",
        "change_pct": -0.8
      },
      {
        "name": "电力体制改革",
        "change_pct": 1.71
      },
      {
        "name": "火电",
        "change_pct": 1.37
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.47
      },
      {
        "name": "风电",
        "change_pct": 1.44
      },
      {
        "name": "国企改革",
        "change_pct": 1.4
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 90,
    "hot_rank_chg": 1,
    "stock_cnt": 5763,
    "price": "4.61",
    "change": "5.98",
    "market_id": "33",
    "circulate_market_value": "26990621000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.75
      },
      {
        "name": "人工智能",
        "change_pct": 1.5
      },
      {
        "name": "水利",
        "change_pct": 2.8
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.93
      },
      {
        "name": "大数据",
        "change_pct": 1.88
      },
      {
        "name": "园林",
        "change_pct": 1.26
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -1.25
      },
      {
        "name": "数字经济",
        "change_pct": 1.81
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.79
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.82
      },
      {
        "name": "第三代半导体",
        "change_pct": -3.29
      },
      {
        "name": "快手概念股",
        "change_pct": 2.6
      },
      {
        "name": "IGBT",
        "change_pct": -3.59
      },
      {
        "name": "虚拟数字人",
        "change_pct": 2.45
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.43
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 2.1
      },
      {
        "name": "氮化镓",
        "change_pct": -2.47
      },
      {
        "name": "AI营销",
        "change_pct": 4.19
      },
      {
        "name": "多模态",
        "change_pct": 2.43
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.07
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.5
      },
      {
        "name": "区块链",
        "change_pct": 1.83
      }
    ]
  },
  {
    "code": "601608",
    "name": "中信重工",
    "hot_rank": 91,
    "hot_rank_chg": -7,
    "stock_cnt": 5763,
    "price": "5.04",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "23080949000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 1.92
      },
      {
        "name": "一带一路",
        "change_pct": 1.46
      },
      {
        "name": "海工装备",
        "change_pct": 1.54
      },
      {
        "name": "工业自动化",
        "change_pct": -0.0
      },
      {
        "name": "机械",
        "change_pct": 1.23
      },
      {
        "name": "军民融合",
        "change_pct": 1.94
      },
      {
        "name": "水利",
        "change_pct": 2.8
      },
      {
        "name": "风电",
        "change_pct": 1.44
      },
      {
        "name": "军工",
        "change_pct": 2.04
      },
      {
        "name": "机器人",
        "change_pct": 0.78
      },
      {
        "name": "智能制造",
        "change_pct": 0.34
      },
      {
        "name": "工业互联网",
        "change_pct": 1.05
      },
      {
        "name": "大基建",
        "change_pct": 2.3
      },
      {
        "name": "一体化压铸",
        "change_pct": 1.14
      },
      {
        "name": "航天",
        "change_pct": 3.34
      },
      {
        "name": "煤矿安全",
        "change_pct": 1.4
      },
      {
        "name": "深地经济",
        "change_pct": 1.24
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "25.31", "change": "6.66", "market_id": "33", "circulate_market_value": "84096316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "38.41", "change": "7.65", "market_id": "33", "circulate_market_value": "109855391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 3, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "7.59", "change": "-6.87", "market_id": "33", "circulate_market_value": "268436550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.9}, {"name": "折叠屏", "change_pct": -2.04}, {"name": "手机产业链", "change_pct": -1.6}, {"name": "超高清视频", "change_pct": -0.34}, {"name": "苹果产业链", "change_pct": -1.95}, {"name": "电竞", "change_pct": 2.09}, {"name": "半导体", "change_pct": -4.41}, {"name": "人工智能", "change_pct": 1.5}, {"name": "互联网医疗", "change_pct": 2.48}, {"name": "VR&AR", "change_pct": -0.07}, {"name": "OLED", "change_pct": -3.22}, {"name": "京津冀", "change_pct": 1.85}, {"name": "物联网", "change_pct": 0.96}, {"name": "指纹识别", "change_pct": -1.24}, {"name": "汽车零部件", "change_pct": 1.08}, {"name": "白马股", "change_pct": 0.47}, {"name": "智能制造", "change_pct": 0.34}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "液晶面板/LCD", "change_pct": -3.06}, {"name": "全息概念", "change_pct": 1.27}, {"name": "理想汽车概念股", "change_pct": 0.82}, {"name": "MicroLED", "change_pct": -2.7}, {"name": "钙钛矿电池", "change_pct": 0.17}, {"name": "智能手表", "change_pct": -1.3}, {"name": "MiniLED", "change_pct": -2.05}, {"name": "传感器", "change_pct": -0.38}, {"name": "大硅片", "change_pct": -4.77}, {"name": "AI PC", "change_pct": -0.68}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "回购", "change_pct": 0.57}, {"name": "智能眼镜/MR头显", "change_pct": -0.88}, {"name": "玻璃基板封装", "change_pct": -3.2}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "612.00", "change": "-7.76", "market_id": "17", "circulate_market_value": "409117060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "28.79", "change": "20.01", "market_id": "33", "circulate_market_value": "18912010000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火箭回收"}, {"code": "002192", "name": "融捷股份", "hot_rank": 6, "hot_rank_chg": 12, "stock_cnt": 5763, "price": "71.15", "change": "-10.01", "market_id": "33", "circulate_market_value": "18436223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 7, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "101.11", "change": "-2.33", "market_id": "17", "circulate_market_value": "180927710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 8, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "89.52", "change": "4.11", "market_id": "33", "circulate_market_value": "131310783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -4, "stock_cnt": 5763, "price": "1093.98", "change": "-8.45", "market_id": "33", "circulate_market_value": "1214251920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "90.02", "change": "9.99", "market_id": "17", "circulate_market_value": "106447672000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "301583", "name": "托伦斯", "hot_rank": 12, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "216.70", "change": "858.85", "market_id": "33", "circulate_market_value": "6681158500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 13, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "41.10", "change": "-5.84", "market_id": "33", "circulate_market_value": "44337338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600879", "name": "航天电子", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "23.29", "change": "10.01", "market_id": "17", "circulate_market_value": "76840681000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "000063", "name": "中兴通讯", "hot_rank": 15, "hot_rank_chg": 15, "stock_cnt": 5763, "price": "40.53", "change": "0.50", "market_id": "33", "circulate_market_value": "163239490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 16, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "57.91", "change": "2.97", "market_id": "33", "circulate_market_value": "91159350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 17, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "22.36", "change": "9.98", "market_id": "33", "circulate_market_value": "75207974000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002354", "name": "天娱数科", "hot_rank": 18, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "8.54", "change": "5.69", "market_id": "33", "circulate_market_value": "13883425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "电竞", "change_pct": 2.09}, {"name": "手游", "change_pct": 2.1}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "人工智能", "change_pct": 1.5}, {"name": "游戏", "change_pct": 2.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.81}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "元宇宙", "change_pct": 2.32}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "东数西算/算力", "change_pct": 1.53}, {"name": "web3.0", "change_pct": 2.38}, {"name": "AIGC概念", "change_pct": 2.43}, {"name": "数据要素", "change_pct": 2.24}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "AI营销", "change_pct": 4.19}, {"name": "ChatGPT", "change_pct": 1.47}, {"name": "智能眼镜/MR头显", "change_pct": -0.88}, {"name": "人工智能大模型", "change_pct": 1.93}, {"name": "人形机器人", "change_pct": 0.52}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "多模态", "change_pct": 2.43}, {"name": "Sora/AI视频", "change_pct": 2.88}, {"name": "IP经济/谷子经济", "change_pct": 2.34}, {"name": "小红书概念股", "change_pct": 3.5}]}, {"code": "600667", "name": "太极实业", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "25.26", "change": "-3.85", "market_id": "17", "circulate_market_value": "52832355000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5763, "price": "107.50", "change": "3.38", "market_id": "17", "circulate_market_value": "157278340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 21, "hot_rank_chg": 5, "stock_cnt": 5763, "price": "37.98", "change": "9.99", "market_id": "17", "circulate_market_value": "26757934000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002384", "name": "东山精密", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "242.30", "change": "-7.28", "market_id": "33", "circulate_market_value": "335905750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "60.00", "change": "1.04", "market_id": "17", "circulate_market_value": "50793200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 24, "hot_rank_chg": 3, "stock_cnt": 5763, "price": "42.78", "change": "3.01", "market_id": "33", "circulate_market_value": "33471270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "17.00", "change": "-9.09", "market_id": "17", "circulate_market_value": "21696348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "60.01", "change": "-6.89", "market_id": "33", "circulate_market_value": "69432357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 27, "hot_rank_chg": -4, "stock_cnt": 5763, "price": "77.79", "change": "-2.83", "market_id": "17", "circulate_market_value": "190869140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "18.17", "change": "9.99", "market_id": "33", "circulate_market_value": "28874330000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "300475", "name": "香农芯创", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "271.00", "change": "1.13", "market_id": "33", "circulate_market_value": "121959693000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "12.73", "change": "10.03", "market_id": "33", "circulate_market_value": "10298811700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.56}, {"name": "大飞机", "change_pct": 2.11}, {"name": "北斗导航", "change_pct": 4.32}, {"name": "高铁轨交", "change_pct": 1.16}, {"name": "军民融合", "change_pct": 1.94}, {"name": "磁悬浮", "change_pct": 0.49}, {"name": "军工", "change_pct": 2.04}, {"name": "碳纤维", "change_pct": 0.37}, {"name": "无人机", "change_pct": 2.37}, {"name": "航天", "change_pct": 3.34}, {"name": "卫星互联网", "change_pct": 3.64}, {"name": "低空经济", "change_pct": 1.76}, {"name": "海洋经济", "change_pct": 2.65}]}, {"code": "001270", "name": "铖昌科技", "hot_rank": 31, "hot_rank_chg": -19, "stock_cnt": 5763, "price": "166.30", "change": "1.27", "market_id": "33", "circulate_market_value": "34058781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 32, "hot_rank_chg": 14, "stock_cnt": 5763, "price": "14.20", "change": "5.81", "market_id": "17", "circulate_market_value": "11179325000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "16.56", "change": "10.03", "market_id": "17", "circulate_market_value": "18157952000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "300750", "name": "宁德时代", "hot_rank": 34, "hot_rank_chg": 5, "stock_cnt": 5763, "price": "348.76", "change": "-7.12", "market_id": "33", "circulate_market_value": "1484683800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002414", "name": "高德红外", "hot_rank": 35, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "14.64", "change": "9.99", "market_id": "33", "circulate_market_value": "49755686000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报预增"}, {"code": "002709", "name": "天赐材料", "hot_rank": 36, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "40.06", "change": "-3.38", "market_id": "33", "circulate_market_value": "60450981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603928", "name": "兴业股份", "hot_rank": 37, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "18.80", "change": "4.44", "market_id": "17", "circulate_market_value": "6405235200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 38, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "19.45", "change": "-2.16", "market_id": "33", "circulate_market_value": "62737722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 39, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "66.27", "change": "-4.69", "market_id": "17", "circulate_market_value": "1315068000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 40, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "45.91", "change": "-2.61", "market_id": "17", "circulate_market_value": "156688520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "3.63", "change": "10.00", "market_id": "33", "circulate_market_value": "16958448000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "收购完成", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.22}, {"name": "房地产", "change_pct": 2.45}, {"name": "京津冀", "change_pct": 1.85}, {"name": "旅游", "change_pct": 2.18}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "内存", "change_pct": -3.28}, {"name": "闪存", "change_pct": -3.41}, {"name": "IP经济/谷子经济", "change_pct": 2.34}]}, {"code": "601698", "name": "中国卫通", "hot_rank": 43, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "32.88", "change": "10.00", "market_id": "17", "circulate_market_value": "138897790000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信工作组"}, {"code": "600360", "name": "华微电子", "hot_rank": 44, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "16.79", "change": "5.00", "market_id": "17", "circulate_market_value": "16123358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 45, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "30.88", "change": "10.01", "market_id": "17", "circulate_market_value": "10404088100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GLP-1减肥药"}, {"code": "600498", "name": "烽火通信", "hot_rank": 46, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "56.87", "change": "0.12", "market_id": "17", "circulate_market_value": "72317112000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 47, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "70.95", "change": "-1.69", "market_id": "33", "circulate_market_value": "107663235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 48, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "26.75", "change": "6.15", "market_id": "17", "circulate_market_value": "4893466700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 49, "hot_rank_chg": 10, "stock_cnt": 5763, "price": "29.54", "change": "10.02", "market_id": "33", "circulate_market_value": "22498178000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减肥药"}, {"code": "002714", "name": "牧原股份", "hot_rank": 50, "hot_rank_chg": 3, "stock_cnt": 5763, "price": "38.14", "change": "2.78", "market_id": "33", "circulate_market_value": "125118241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 51, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "44.51", "change": "-8.04", "market_id": "17", "circulate_market_value": "74067838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "14.50", "change": "-1.90", "market_id": "33", "circulate_market_value": "15404855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 53, "hot_rank_chg": -3, "stock_cnt": 5763, "price": "293.99", "change": "-19.14", "market_id": "17", "circulate_market_value": "42619978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600992", "name": "贵绳股份", "hot_rank": 54, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "10.65", "change": "10.02", "market_id": "17", "circulate_market_value": "2610208500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "航母", "change_pct": 2.47}, {"name": "军工", "change_pct": 2.04}, {"name": "航天", "change_pct": 3.34}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 55, "hot_rank_chg": 13, "stock_cnt": 5763, "price": "114.79", "change": "-7.43", "market_id": "33", "circulate_market_value": "182232360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 56, "hot_rank_chg": 23, "stock_cnt": 5763, "price": "27.72", "change": "0.36", "market_id": "17", "circulate_market_value": "571081710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 57, "hot_rank_chg": 6, "stock_cnt": 5763, "price": "8.44", "change": "-10.02", "market_id": "33", "circulate_market_value": "15847128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.41}, {"name": "光伏", "change_pct": 0.12}, {"name": "新能源汽车", "change_pct": 0.05}, {"name": "新能源车零部件", "change_pct": 1.05}, {"name": "第三代半导体", "change_pct": -3.29}, {"name": "氮化镓", "change_pct": -2.47}, {"name": "碳化硅", "change_pct": -5.54}, {"name": "地摊经济", "change_pct": 1.33}, {"name": "人形机器人", "change_pct": 0.52}, {"name": "铜缆高速连接器", "change_pct": -0.81}]}, {"code": "300821", "name": "东岳硅材", "hot_rank": 58, "hot_rank_chg": 29, "stock_cnt": 5763, "price": "26.96", "change": "-11.11", "market_id": "33", "circulate_market_value": "32346359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 59, "hot_rank_chg": -8, "stock_cnt": 5763, "price": "55.70", "change": "-5.11", "market_id": "17", "circulate_market_value": "221217400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 60, "hot_rank_chg": 17, "stock_cnt": 5763, "price": "158.07", "change": "-0.58", "market_id": "33", "circulate_market_value": "158858080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 61, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "207.17", "change": "-0.88", "market_id": "33", "circulate_market_value": "65988357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 62, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "6.64", "change": "1.06", "market_id": "17", "circulate_market_value": "82310032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.46}, {"name": "核电", "change_pct": 1.92}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "电力体制改革", "change_pct": 1.71}, {"name": "水电", "change_pct": 1.4}, {"name": "火电", "change_pct": 1.37}, {"name": "光伏", "change_pct": 0.12}, {"name": "风电", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 1.4}, {"name": "算电协同", "change_pct": 1.25}]}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "35.35", "change": "-2.62", "market_id": "33", "circulate_market_value": "9490144400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000100", "name": "TCL科技", "hot_rank": 64, "hot_rank_chg": 16, "stock_cnt": 5763, "price": "5.12", "change": "-4.48", "market_id": "33", "circulate_market_value": "103005831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.04}, {"name": "手机产业链", "change_pct": -1.6}, {"name": "超高清视频", "change_pct": -0.34}, {"name": "电竞", "change_pct": 2.09}, {"name": "半导体", "change_pct": -4.41}, {"name": "OLED", "change_pct": -3.22}, {"name": "光伏", "change_pct": 0.12}, {"name": "黑色家电", "change_pct": 1.14}, {"name": "家电", "change_pct": 1.64}, {"name": "智能制造", "change_pct": 0.34}, {"name": "工业互联网", "change_pct": 1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "液晶面板/LCD", "change_pct": -3.06}, {"name": "MicroLED", "change_pct": -2.7}, {"name": "MiniLED", "change_pct": -2.05}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "玻璃基板封装", "change_pct": -3.2}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 65, "hot_rank_chg": -7, "stock_cnt": 5763, "price": "90.00", "change": "3.60", "market_id": "33", "circulate_market_value": "313795220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600129", "name": "太极集团", "hot_rank": 66, "hot_rank_chg": 7, "stock_cnt": 5763, "price": "16.58", "change": "7.73", "market_id": "17", "circulate_market_value": "9142513500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 67, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "3.37", "change": "10.13", "market_id": "17", "circulate_market_value": "8487378300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "工业大麻", "change_pct": 3.59}, {"name": "中药", "change_pct": 2.19}, {"name": "保健品", "change_pct": 1.83}, {"name": "医药", "change_pct": 2.88}, {"name": "化学原料药", "change_pct": 2.82}, {"name": "流感", "change_pct": 1.98}, {"name": "振兴东北", "change_pct": 1.9}, {"name": "食品", "change_pct": 1.64}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 68, "hot_rank_chg": 8, "stock_cnt": 5763, "price": "32.08", "change": "0.50", "market_id": "33", "circulate_market_value": "36767064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002115", "name": "三维通信", "hot_rank": 69, "hot_rank_chg": 3, "stock_cnt": 5763, "price": "10.95", "change": "10.05", "market_id": "33", "circulate_market_value": "8171615000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "2026中报预增", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.27}, {"name": "手游", "change_pct": 2.1}, {"name": "5G", "change_pct": -0.25}, {"name": "人工智能", "change_pct": 1.5}, {"name": "物联网", "change_pct": 0.96}, {"name": "阿里巴巴概念股", "change_pct": 1.73}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "知识付费", "change_pct": 1.81}, {"name": "卫星互联网", "change_pct": 3.64}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "小红书概念股", "change_pct": 3.5}, {"name": "海洋经济", "change_pct": 2.65}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 70, "hot_rank_chg": 0, "stock_cnt": 5763, "price": "272.00", "change": "-8.32", "market_id": "33", "circulate_market_value": "235333030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 71, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "73.69", "change": "3.94", "market_id": "33", "circulate_market_value": "286028720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002457", "name": "青龙管业", "hot_rank": 72, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "15.76", "change": "4.65", "market_id": "33", "circulate_market_value": "5252340700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 73, "hot_rank_chg": -21, "stock_cnt": 5763, "price": "116.60", "change": "-5.47", "market_id": "17", "circulate_market_value": "42060348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 74, "hot_rank_chg": 11, "stock_cnt": 5763, "price": "16.94", "change": "-4.83", "market_id": "17", "circulate_market_value": "84513977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001208", "name": "华菱线缆", "hot_rank": 75, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "15.99", "change": "9.97", "market_id": "33", "circulate_market_value": "5096551200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "商业航天"}, {"code": "001309", "name": "德明利", "hot_rank": 76, "hot_rank_chg": -21, "stock_cnt": 5763, "price": "799.98", "change": "-7.03", "market_id": "33", "circulate_market_value": "132051107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600343", "name": "航天动力", "hot_rank": 77, "hot_rank_chg": -2, "stock_cnt": 5763, "price": "27.72", "change": "10.00", "market_id": "17", "circulate_market_value": "17691080000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 78, "hot_rank_chg": -24, "stock_cnt": 5763, "price": "4.20", "change": "9.95", "market_id": "33", "circulate_market_value": "2985513100.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "互动影游", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.5}, {"name": "影视", "change_pct": 3.42}, {"name": "旅游", "change_pct": 2.18}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "AI营销", "change_pct": 4.19}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "IP经济/谷子经济", "change_pct": 2.34}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 79, "hot_rank_chg": 2, "stock_cnt": 5763, "price": "13.81", "change": "6.81", "market_id": "33", "circulate_market_value": "48030217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 80, "hot_rank_chg": 3, "stock_cnt": 5763, "price": "43.22", "change": "10.00", "market_id": "17", "circulate_market_value": "27243857000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药CRO"}, {"code": "600276", "name": "恒瑞医药", "hot_rank": 81, "hot_rank_chg": 31, "stock_cnt": 5763, "price": "55.75", "change": "0.25", "market_id": "17", "circulate_market_value": "355629380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 82, "hot_rank_chg": -17, "stock_cnt": 5763, "price": "233.45", "change": "-2.11", "market_id": "33", "circulate_market_value": "182207340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002129", "name": "TCL中环", "hot_rank": 83, "hot_rank_chg": 20, "stock_cnt": 5763, "price": "10.66", "change": "-3.35", "market_id": "33", "circulate_market_value": "43062773000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.41}, {"name": "一带一路", "change_pct": 1.46}, {"name": "京津冀", "change_pct": 1.85}, {"name": "光伏", "change_pct": 0.12}, {"name": "碳中和", "change_pct": 1.4}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "IGBT", "change_pct": -3.59}, {"name": "颗粒硅", "change_pct": 1.04}, {"name": "异质结电池HJT", "change_pct": -1.14}, {"name": "大硅片", "change_pct": -4.77}]}, {"code": "300255", "name": "常山药业", "hot_rank": 84, "hot_rank_chg": 18, "stock_cnt": 5763, "price": "26.34", "change": "20.00", "market_id": "33", "circulate_market_value": "24170200000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药"}, {"code": "600396", "name": "华电辽能", "hot_rank": 85, "hot_rank_chg": -19, "stock_cnt": 5763, "price": "12.90", "change": "5.57", "market_id": "17", "circulate_market_value": "18997918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "电力体制改革", "change_pct": 1.71}, {"name": "火电", "change_pct": 1.37}, {"name": "氢能源/燃料电池", "change_pct": 0.47}, {"name": "风电", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 86, "hot_rank_chg": -17, "stock_cnt": 5763, "price": "60.58", "change": "-8.49", "market_id": "17", "circulate_market_value": "64976010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 87, "hot_rank_chg": -1, "stock_cnt": 5763, "price": "27.47", "change": "-5.14", "market_id": "33", "circulate_market_value": "20806193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300390", "name": "天华新能", "hot_rank": 88, "hot_rank_chg": 9, "stock_cnt": 5763, "price": "65.70", "change": "-4.92", "market_id": "33", "circulate_market_value": "44167980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 89, "hot_rank_chg": 12, "stock_cnt": 5763, "price": "123.30", "change": "1.84", "market_id": "17", "circulate_market_value": "304955450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 90, "hot_rank_chg": 1, "stock_cnt": 5763, "price": "4.61", "change": "5.98", "market_id": "33", "circulate_market_value": "26990621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.75}, {"name": "人工智能", "change_pct": 1.5}, {"name": "水利", "change_pct": 2.8}, {"name": "直播/短视频", "change_pct": 1.93}, {"name": "大数据", "change_pct": 1.88}, {"name": "园林", "change_pct": 1.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "数字经济", "change_pct": 1.81}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "理想汽车概念股", "change_pct": 0.82}, {"name": "第三代半导体", "change_pct": -3.29}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "IGBT", "change_pct": -3.59}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "AIGC概念", "change_pct": 2.43}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "氮化镓", "change_pct": -2.47}, {"name": "AI营销", "change_pct": 4.19}, {"name": "多模态", "change_pct": 2.43}, {"name": "液冷服务器", "change_pct": 0.07}, {"name": "小红书概念股", "change_pct": 3.5}, {"name": "区块链", "change_pct": 1.83}]}, {"code": "601608", "name": "中信重工", "hot_rank": 91, "hot_rank_chg": -7, "stock_cnt": 5763, "price": "5.04", "change": "10.04", "market_id": "17", "circulate_market_value": "23080949000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "核电", "change_pct": 1.92}, {"name": "一带一路", "change_pct": 1.46}, {"name": "海工装备", "change_pct": 1.54}, {"name": "工业自动化", "change_pct": -0.0}, {"name": "机械", "change_pct": 1.23}, {"name": "军民融合", "change_pct": 1.94}, {"name": "水利", "change_pct": 2.8}, {"name": "风电", "change_pct": 1.44}, {"name": "军工", "change_pct": 2.04}, {"name": "机器人", "change_pct": 0.78}, {"name": "智能制造", "change_pct": 0.34}, {"name": "工业互联网", "change_pct": 1.05}, {"name": "大基建", "change_pct": 2.3}, {"name": "一体化压铸", "change_pct": 1.14}, {"name": "航天", "change_pct": 3.34}, {"name": "煤矿安全", "change_pct": 1.4}, {"name": "深地经济", "change_pct": 1.24}]}, {"code": "000887", "name": "中鼎股份", "hot_rank": 92, "hot_rank_chg": -14, "stock_cnt": 5763, "price": "20.68", "change": "10.00", "market_id": "33", "circulate_market_value": "27181184000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "300759", "name": "康龙化成", "hot_rank": 93, "hot_rank_chg": 38, "stock_cnt": 5763, "price": "33.94", "change": "9.55", "market_id": "33", "circulate_market_value": "48195885000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300054", "name": "鼎龙股份", "hot_rank": 94, "hot_rank_chg": 33, "stock_cnt": 5763, "price": "83.10", "change": "-13.43", "market_id": "33", "circulate_market_value": "61757301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 95, "hot_rank_chg": -6, "stock_cnt": 5763, "price": "99.38", "change": "-0.33", "market_id": "33", "circulate_market_value": "82008400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002466", "name": "天齐锂业", "hot_rank": 96, "hot_rank_chg": 10, "stock_cnt": 5763, "price": "47.80", "change": "-4.00", "market_id": "33", "circulate_market_value": "70539607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 97, "hot_rank_chg": -9, "stock_cnt": 5763, "price": "587.60", "change": "-5.23", "market_id": "33", "circulate_market_value": "165616170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 98, "hot_rank_chg": -8, "stock_cnt": 5763, "price": "523.05", "change": "-4.12", "market_id": "33", "circulate_market_value": "656031880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 99, "hot_rank_chg": 35, "stock_cnt": 5763, "price": "163.02", "change": "-5.77", "market_id": "17", "circulate_market_value": "325968690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600030", "name": "中信证券", "hot_rank": 100, "hot_rank_chg": 7, "stock_cnt": 5763, "price": "28.40", "change": "-0.98", "market_id": "17", "circulate_market_value": "345814050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "600745": "ST/风险警示股"};