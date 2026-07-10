const UPDATE_TIME = "2026-07-10 16:52";
const THS_HOT = [
  {
    "name": "商业航天",
    "rise": 2.07,
    "rate": 0,
    "tag": "30家涨停",
    "hotTag": "连续174天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "创新药",
    "rise": 3.03,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续75天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": -3.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续198天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -2.58,
    "rate": 0,
    "tag": "",
    "hotTag": "连续245天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
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
    "name": "先进封装",
    "rise": -3.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "PCB概念",
    "rise": -2.54,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续68天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "CRO概念",
    "rise": 4.43,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
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
    "name": "国家大基金持股",
    "rise": -5.45,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "885893"
  },
  {
    "name": "AI应用",
    "rise": 1.83,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "国产航母",
    "rise": 4.27,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885795"
  },
  {
    "name": "光纤概念",
    "rise": -1.94,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续74天上榜",
    "rankChg": 0,
    "etfName": "G60创新ETF",
    "code": "886084"
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
    "name": "芯片概念",
    "rise": -1.46,
    "rate": 0,
    "tag": "22家涨停",
    "hotTag": "连续69天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": 0.85,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续83天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "玻璃基板",
    "rise": -3.35,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "机床ETF",
    "code": "886111"
  },
  {
    "name": "培育钻石",
    "rise": -3.21,
    "rate": 0,
    "tag": "",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  }
];
const THS_EVENTS = [
  {
    "title": "长征十号乙火箭有望7月10日首飞 将验证全球首创海上网系回收技术",
    "desc": "",
    "heat": 810116,
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
    "heat": 580315,
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
    "heat": 336486,
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
    "heat": 154406,
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
    "heat": 67357,
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
    "heat": 25619,
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
    "hot_rank": 4,
    "hot_rank_chg": 0,
    "stock_cnt": 5796,
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
    "hot_rank": 20,
    "hot_rank_chg": -1,
    "stock_cnt": 5796,
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
    "stock_cnt": 5796,
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
    "hot_rank": 42,
    "hot_rank_chg": 1,
    "stock_cnt": 5796,
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
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 53,
    "hot_rank_chg": 9,
    "stock_cnt": 5796,
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
    "code": "600992",
    "name": "贵绳股份",
    "hot_rank": 55,
    "hot_rank_chg": -7,
    "stock_cnt": 5796,
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
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 57,
    "hot_rank_chg": -3,
    "stock_cnt": 5796,
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
    "code": "002617",
    "name": "露笑科技",
    "hot_rank": 62,
    "hot_rank_chg": 1,
    "stock_cnt": 5796,
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
    "code": "600396",
    "name": "华电辽能",
    "hot_rank": 63,
    "hot_rank_chg": 3,
    "stock_cnt": 5796,
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
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 64,
    "hot_rank_chg": 3,
    "stock_cnt": 5796,
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
    "stock_cnt": 5796,
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
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 81,
    "hot_rank_chg": 10,
    "stock_cnt": 5796,
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
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 82,
    "hot_rank_chg": -2,
    "stock_cnt": 5796,
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
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 86,
    "hot_rank_chg": 6,
    "stock_cnt": 5796,
    "price": "10.43",
    "change": "7.75",
    "market_id": "33",
    "circulate_market_value": "21715279000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 3.42
      },
      {
        "name": "足球",
        "change_pct": 1.66
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.73
      },
      {
        "name": "拼多多概念股",
        "change_pct": 1.58
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.9
      },
      {
        "name": "大消费",
        "change_pct": 1.94
      },
      {
        "name": "盲盒",
        "change_pct": 2.02
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 3.74
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.34
      },
      {
        "name": "首发经济",
        "change_pct": 2.12
      },
      {
        "name": "小红书概念股",
        "change_pct": 3.5
      },
      {
        "name": "服务消费",
        "change_pct": 2.34
      }
    ]
  },
  {
    "code": "601608",
    "name": "中信重工",
    "hot_rank": 98,
    "hot_rank_chg": -14,
    "stock_cnt": 5796,
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
const ALL_STOCKS = [{"code": "002185", "name": "华天科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "25.31", "change": "6.66", "market_id": "33", "circulate_market_value": "84096316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "38.41", "change": "7.65", "market_id": "33", "circulate_market_value": "109855391000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "612.00", "change": "-7.76", "market_id": "17", "circulate_market_value": "409117060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 4, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "7.59", "change": "-6.87", "market_id": "33", "circulate_market_value": "268436550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.9}, {"name": "折叠屏", "change_pct": -2.04}, {"name": "手机产业链", "change_pct": -1.6}, {"name": "超高清视频", "change_pct": -0.34}, {"name": "苹果产业链", "change_pct": -1.95}, {"name": "电竞", "change_pct": 2.09}, {"name": "半导体", "change_pct": -4.41}, {"name": "人工智能", "change_pct": 1.5}, {"name": "互联网医疗", "change_pct": 2.48}, {"name": "VR&AR", "change_pct": -0.07}, {"name": "OLED", "change_pct": -3.22}, {"name": "京津冀", "change_pct": 1.85}, {"name": "物联网", "change_pct": 0.96}, {"name": "指纹识别", "change_pct": -1.24}, {"name": "汽车零部件", "change_pct": 1.08}, {"name": "白马股", "change_pct": 0.47}, {"name": "智能制造", "change_pct": 0.34}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "液晶面板/LCD", "change_pct": -3.06}, {"name": "全息概念", "change_pct": 1.27}, {"name": "理想汽车概念股", "change_pct": 0.82}, {"name": "MicroLED", "change_pct": -2.7}, {"name": "钙钛矿电池", "change_pct": 0.17}, {"name": "智能手表", "change_pct": -1.3}, {"name": "MiniLED", "change_pct": -2.05}, {"name": "传感器", "change_pct": -0.38}, {"name": "大硅片", "change_pct": -4.77}, {"name": "AI PC", "change_pct": -0.68}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "回购", "change_pct": 0.57}, {"name": "智能眼镜/MR头显", "change_pct": -0.88}, {"name": "玻璃基板封装", "change_pct": -3.2}]}, {"code": "600584", "name": "长电科技", "hot_rank": 5, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "101.11", "change": "-2.33", "market_id": "17", "circulate_market_value": "180927710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "1093.98", "change": "-8.45", "market_id": "33", "circulate_market_value": "1214251920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5796, "price": "89.52", "change": "4.11", "market_id": "33", "circulate_market_value": "131310783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300065", "name": "海兰信", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "28.79", "change": "20.01", "market_id": "33", "circulate_market_value": "18912010000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "火箭回收"}, {"code": "002192", "name": "融捷股份", "hot_rank": 9, "hot_rank_chg": 9, "stock_cnt": 5796, "price": "71.15", "change": "-10.01", "market_id": "33", "circulate_market_value": "18436223000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 11, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "90.02", "change": "9.99", "market_id": "17", "circulate_market_value": "106447672000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "002407", "name": "多氟多", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "41.10", "change": "-5.84", "market_id": "33", "circulate_market_value": "44337338000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5796, "price": "57.91", "change": "2.97", "market_id": "33", "circulate_market_value": "91159350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 14, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "25.26", "change": "-3.85", "market_id": "17", "circulate_market_value": "52832355000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301583", "name": "托伦斯", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "216.70", "change": "858.85", "market_id": "33", "circulate_market_value": "6681158500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "22.36", "change": "9.98", "market_id": "33", "circulate_market_value": "75207974000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "600879", "name": "航天电子", "hot_rank": 17, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "23.29", "change": "10.01", "market_id": "17", "circulate_market_value": "76840681000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "001270", "name": "铖昌科技", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "166.30", "change": "1.27", "market_id": "33", "circulate_market_value": "34058781000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "242.30", "change": "-7.28", "market_id": "33", "circulate_market_value": "335905750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 20, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "8.54", "change": "5.69", "market_id": "33", "circulate_market_value": "13883425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "电竞", "change_pct": 2.09}, {"name": "手游", "change_pct": 2.1}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "人工智能", "change_pct": 1.5}, {"name": "游戏", "change_pct": 2.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 1.81}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "元宇宙", "change_pct": 2.32}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "东数西算/算力", "change_pct": 1.53}, {"name": "web3.0", "change_pct": 2.38}, {"name": "AIGC概念", "change_pct": 2.43}, {"name": "数据要素", "change_pct": 2.24}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "AI营销", "change_pct": 4.19}, {"name": "ChatGPT", "change_pct": 1.47}, {"name": "智能眼镜/MR头显", "change_pct": -0.88}, {"name": "人工智能大模型", "change_pct": 1.93}, {"name": "人形机器人", "change_pct": 0.52}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "多模态", "change_pct": 2.43}, {"name": "Sora/AI视频", "change_pct": 2.88}, {"name": "IP经济/谷子经济", "change_pct": 2.34}, {"name": "小红书概念股", "change_pct": 3.5}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 21, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "17.00", "change": "-9.09", "market_id": "17", "circulate_market_value": "21696348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 22, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "60.01", "change": "-6.89", "market_id": "33", "circulate_market_value": "69432357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "77.79", "change": "-2.83", "market_id": "17", "circulate_market_value": "190869140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 24, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "60.00", "change": "1.04", "market_id": "17", "circulate_market_value": "50793200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "107.50", "change": "3.38", "market_id": "17", "circulate_market_value": "157278340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 26, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "42.78", "change": "3.01", "market_id": "33", "circulate_market_value": "33471270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605090", "name": "九丰能源", "hot_rank": 27, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "37.98", "change": "9.99", "market_id": "17", "circulate_market_value": "26757934000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "000547", "name": "航天发展", "hot_rank": 28, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "18.17", "change": "9.99", "market_id": "33", "circulate_market_value": "28874330000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "300475", "name": "香农芯创", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "271.00", "change": "1.13", "market_id": "33", "circulate_market_value": "121959693000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 30, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "12.73", "change": "10.03", "market_id": "33", "circulate_market_value": "10298811700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.56}, {"name": "大飞机", "change_pct": 2.11}, {"name": "北斗导航", "change_pct": 4.32}, {"name": "高铁轨交", "change_pct": 1.16}, {"name": "军民融合", "change_pct": 1.94}, {"name": "磁悬浮", "change_pct": 0.49}, {"name": "军工", "change_pct": 2.04}, {"name": "碳纤维", "change_pct": 0.37}, {"name": "无人机", "change_pct": 2.37}, {"name": "航天", "change_pct": 3.34}, {"name": "卫星互联网", "change_pct": 3.64}, {"name": "低空经济", "change_pct": 1.76}, {"name": "海洋经济", "change_pct": 2.65}]}, {"code": "603928", "name": "兴业股份", "hot_rank": 31, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "18.80", "change": "4.44", "market_id": "17", "circulate_market_value": "6405235200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603137", "name": "恒尚节能", "hot_rank": 32, "hot_rank_chg": 2, "stock_cnt": 5796, "price": "26.75", "change": "6.15", "market_id": "17", "circulate_market_value": "4893466700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 33, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "16.56", "change": "10.03", "market_id": "17", "circulate_market_value": "18157952000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "000063", "name": "中兴通讯", "hot_rank": 34, "hot_rank_chg": -4, "stock_cnt": 5796, "price": "40.53", "change": "0.50", "market_id": "33", "circulate_market_value": "163239490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 35, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "40.06", "change": "-3.38", "market_id": "33", "circulate_market_value": "60450981000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002414", "name": "高德红外", "hot_rank": 36, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "14.64", "change": "9.99", "market_id": "33", "circulate_market_value": "49755686000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报预增"}, {"code": "600522", "name": "中天科技", "hot_rank": 37, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "45.91", "change": "-2.61", "market_id": "17", "circulate_market_value": "156688520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600360", "name": "华微电子", "hot_rank": 38, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "16.79", "change": "5.00", "market_id": "17", "circulate_market_value": "16123358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 39, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "66.27", "change": "-4.69", "market_id": "17", "circulate_market_value": "1315068000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 40, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "56.87", "change": "0.12", "market_id": "17", "circulate_market_value": "72317112000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 41, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "348.76", "change": "-7.12", "market_id": "33", "circulate_market_value": "1484683800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 42, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "3.63", "change": "10.00", "market_id": "33", "circulate_market_value": "16958448000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "收购完成", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.22}, {"name": "房地产", "change_pct": 2.45}, {"name": "京津冀", "change_pct": 1.85}, {"name": "旅游", "change_pct": 2.18}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "内存", "change_pct": -3.28}, {"name": "闪存", "change_pct": -3.41}, {"name": "IP经济/谷子经济", "change_pct": 2.34}]}, {"code": "603538", "name": "美诺华", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "30.88", "change": "10.01", "market_id": "17", "circulate_market_value": "10404088100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GLP-1减肥药"}, {"code": "603629", "name": "利通电子", "hot_rank": 45, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "116.60", "change": "-5.47", "market_id": "17", "circulate_market_value": "42060348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5796, "price": "14.20", "change": "5.81", "market_id": "17", "circulate_market_value": "11179325000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601698", "name": "中国卫通", "hot_rank": 47, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "32.88", "change": "10.00", "market_id": "17", "circulate_market_value": "138897790000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信工作组"}, {"code": "000066", "name": "中国长城", "hot_rank": 48, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "19.45", "change": "-2.16", "market_id": "33", "circulate_market_value": "62737722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 49, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "70.95", "change": "-1.69", "market_id": "33", "circulate_market_value": "107663235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 50, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "55.70", "change": "-5.11", "market_id": "17", "circulate_market_value": "221217400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 51, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "14.50", "change": "-1.90", "market_id": "33", "circulate_market_value": "15404855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688146", "name": "中船特气", "hot_rank": 52, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "293.99", "change": "-19.14", "market_id": "17", "circulate_market_value": "42619978000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 53, "hot_rank_chg": 9, "stock_cnt": 5796, "price": "6.64", "change": "1.06", "market_id": "17", "circulate_market_value": "82310032000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.46}, {"name": "核电", "change_pct": 1.92}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "电力体制改革", "change_pct": 1.71}, {"name": "水电", "change_pct": 1.4}, {"name": "火电", "change_pct": 1.37}, {"name": "光伏", "change_pct": 0.12}, {"name": "风电", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 1.4}, {"name": "算电协同", "change_pct": 1.25}]}, {"code": "600460", "name": "士兰微", "hot_rank": 54, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "44.51", "change": "-8.04", "market_id": "17", "circulate_market_value": "74067838000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600992", "name": "贵绳股份", "hot_rank": 55, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "10.65", "change": "10.02", "market_id": "17", "circulate_market_value": "2610208500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "航母", "change_pct": 2.47}, {"name": "军工", "change_pct": 2.04}, {"name": "航天", "change_pct": 3.34}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "001309", "name": "德明利", "hot_rank": 56, "hot_rank_chg": -1, "stock_cnt": 5796, "price": "799.98", "change": "-7.03", "market_id": "33", "circulate_market_value": "132051107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 57, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "4.20", "change": "9.95", "market_id": "33", "circulate_market_value": "2985513100.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "互动影游", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.5}, {"name": "影视", "change_pct": 3.42}, {"name": "旅游", "change_pct": 2.18}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "AI营销", "change_pct": 4.19}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "IP经济/谷子经济", "change_pct": 2.34}]}, {"code": "002409", "name": "雅克科技", "hot_rank": 58, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "207.17", "change": "-0.88", "market_id": "33", "circulate_market_value": "65988357000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 59, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "35.35", "change": "-2.62", "market_id": "33", "circulate_market_value": "9490144400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 60, "hot_rank_chg": -7, "stock_cnt": 5796, "price": "38.14", "change": "2.78", "market_id": "33", "circulate_market_value": "125118241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 61, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "90.00", "change": "3.60", "market_id": "33", "circulate_market_value": "313795220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002617", "name": "露笑科技", "hot_rank": 62, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "8.44", "change": "-10.02", "market_id": "33", "circulate_market_value": "15847128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -4.41}, {"name": "光伏", "change_pct": 0.12}, {"name": "新能源汽车", "change_pct": 0.05}, {"name": "新能源车零部件", "change_pct": 1.05}, {"name": "第三代半导体", "change_pct": -3.29}, {"name": "氮化镓", "change_pct": -2.47}, {"name": "碳化硅", "change_pct": -5.54}, {"name": "地摊经济", "change_pct": 1.33}, {"name": "人形机器人", "change_pct": 0.52}, {"name": "铜缆高速连接器", "change_pct": -0.81}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 63, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "12.90", "change": "5.57", "market_id": "17", "circulate_market_value": "18997918000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.46}, {"name": "强势人气股", "change_pct": -0.8}, {"name": "电力体制改革", "change_pct": 1.71}, {"name": "火电", "change_pct": 1.37}, {"name": "氢能源/燃料电池", "change_pct": 0.47}, {"name": "风电", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 1.4}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 64, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "3.37", "change": "10.13", "market_id": "17", "circulate_market_value": "8487378300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报预增", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.61}, {"name": "工业大麻", "change_pct": 3.59}, {"name": "中药", "change_pct": 2.19}, {"name": "保健品", "change_pct": 1.83}, {"name": "医药", "change_pct": 2.88}, {"name": "化学原料药", "change_pct": 2.82}, {"name": "流感", "change_pct": 1.98}, {"name": "振兴东北", "change_pct": 1.9}, {"name": "食品", "change_pct": 1.64}]}, {"code": "000858", "name": "五粮液", "hot_rank": 65, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "73.69", "change": "3.94", "market_id": "33", "circulate_market_value": "286028720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 66, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "272.00", "change": "-8.32", "market_id": "33", "circulate_market_value": "235333030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002317", "name": "众生药业", "hot_rank": 67, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "29.54", "change": "10.02", "market_id": "33", "circulate_market_value": "22498178000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "减肥药"}, {"code": "002261", "name": "拓维信息", "hot_rank": 68, "hot_rank_chg": 8, "stock_cnt": 5796, "price": "32.08", "change": "0.50", "market_id": "33", "circulate_market_value": "36767064000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002115", "name": "三维通信", "hot_rank": 69, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "10.95", "change": "10.05", "market_id": "33", "circulate_market_value": "8171615000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "2026中报预增", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.27}, {"name": "手游", "change_pct": 2.1}, {"name": "5G", "change_pct": -0.25}, {"name": "人工智能", "change_pct": 1.5}, {"name": "物联网", "change_pct": 0.96}, {"name": "阿里巴巴概念股", "change_pct": 1.73}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "知识付费", "change_pct": 1.81}, {"name": "卫星互联网", "change_pct": 3.64}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "小红书概念股", "change_pct": 3.5}, {"name": "海洋经济", "change_pct": 2.65}]}, {"code": "002457", "name": "青龙管业", "hot_rank": 70, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "15.76", "change": "4.65", "market_id": "33", "circulate_market_value": "5252340700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000887", "name": "中鼎股份", "hot_rank": 71, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "20.68", "change": "10.00", "market_id": "33", "circulate_market_value": "27181184000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "600129", "name": "太极集团", "hot_rank": 72, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "16.58", "change": "7.73", "market_id": "17", "circulate_market_value": "9142513500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000988", "name": "华工科技", "hot_rank": 73, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "158.07", "change": "-0.58", "market_id": "33", "circulate_market_value": "158858080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 74, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "114.79", "change": "-7.43", "market_id": "33", "circulate_market_value": "182232360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600378", "name": "昊华科技", "hot_rank": 75, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "60.58", "change": "-8.49", "market_id": "17", "circulate_market_value": "64976010000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 76, "hot_rank_chg": -11, "stock_cnt": 5796, "price": "233.45", "change": "-2.11", "market_id": "33", "circulate_market_value": "182207340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001208", "name": "华菱线缆", "hot_rank": 77, "hot_rank_chg": -3, "stock_cnt": 5796, "price": "15.99", "change": "9.97", "market_id": "33", "circulate_market_value": "5096551200.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "商业航天"}, {"code": "300821", "name": "东岳硅材", "hot_rank": 78, "hot_rank_chg": 9, "stock_cnt": 5796, "price": "26.96", "change": "-11.11", "market_id": "33", "circulate_market_value": "32346359000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 79, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "415.03", "change": "-5.94", "market_id": "17", "circulate_market_value": "168642590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 80, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "27.47", "change": "-5.14", "market_id": "33", "circulate_market_value": "20806193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 81, "hot_rank_chg": 10, "stock_cnt": 5796, "price": "4.61", "change": "5.98", "market_id": "33", "circulate_market_value": "26990621000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.75}, {"name": "人工智能", "change_pct": 1.5}, {"name": "水利", "change_pct": 2.8}, {"name": "直播/短视频", "change_pct": 1.93}, {"name": "大数据", "change_pct": 1.88}, {"name": "园林", "change_pct": 1.26}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "数字经济", "change_pct": 1.81}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "理想汽车概念股", "change_pct": 0.82}, {"name": "第三代半导体", "change_pct": -3.29}, {"name": "快手概念股", "change_pct": 2.6}, {"name": "IGBT", "change_pct": -3.59}, {"name": "虚拟数字人", "change_pct": 2.45}, {"name": "AIGC概念", "change_pct": 2.43}, {"name": "字节跳动概念股", "change_pct": 2.1}, {"name": "氮化镓", "change_pct": -2.47}, {"name": "AI营销", "change_pct": 4.19}, {"name": "多模态", "change_pct": 2.43}, {"name": "液冷服务器", "change_pct": 0.07}, {"name": "小红书概念股", "change_pct": 3.5}, {"name": "区块链", "change_pct": 1.83}]}, {"code": "000100", "name": "TCL科技", "hot_rank": 82, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "5.12", "change": "-4.48", "market_id": "33", "circulate_market_value": "103005831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -2.04}, {"name": "手机产业链", "change_pct": -1.6}, {"name": "超高清视频", "change_pct": -0.34}, {"name": "电竞", "change_pct": 2.09}, {"name": "半导体", "change_pct": -4.41}, {"name": "OLED", "change_pct": -3.22}, {"name": "光伏", "change_pct": 0.12}, {"name": "黑色家电", "change_pct": 1.14}, {"name": "家电", "change_pct": 1.64}, {"name": "智能制造", "change_pct": 0.34}, {"name": "工业互联网", "change_pct": 1.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -1.25}, {"name": "国产芯片", "change_pct": -2.46}, {"name": "腾讯概念股", "change_pct": 1.79}, {"name": "液晶面板/LCD", "change_pct": -3.06}, {"name": "MicroLED", "change_pct": -2.7}, {"name": "MiniLED", "change_pct": -2.05}, {"name": "华为产业链", "change_pct": 0.21}, {"name": "玻璃基板封装", "change_pct": -3.2}]}, {"code": "301308", "name": "江波龙", "hot_rank": 83, "hot_rank_chg": 5, "stock_cnt": 5796, "price": "587.60", "change": "-5.23", "market_id": "33", "circulate_market_value": "165616170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600703", "name": "三安光电", "hot_rank": 84, "hot_rank_chg": 1, "stock_cnt": 5796, "price": "16.94", "change": "-4.83", "market_id": "17", "circulate_market_value": "84513977000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603127", "name": "昭衍新药", "hot_rank": 85, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "43.22", "change": "10.00", "market_id": "17", "circulate_market_value": "27243857000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药CRO"}, {"code": "002739", "name": "儒意电影", "hot_rank": 86, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "10.43", "change": "7.75", "market_id": "33", "circulate_market_value": "21715279000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 3.42}, {"name": "足球", "change_pct": 1.66}, {"name": "阿里巴巴概念股", "change_pct": 1.73}, {"name": "拼多多概念股", "change_pct": 1.58}, {"name": "网红/MCN", "change_pct": 1.9}, {"name": "大消费", "change_pct": 1.94}, {"name": "盲盒", "change_pct": 2.02}, {"name": "短剧/互动影游", "change_pct": 3.74}, {"name": "IP经济/谷子经济", "change_pct": 2.34}, {"name": "首发经济", "change_pct": 2.12}, {"name": "小红书概念股", "change_pct": 3.5}, {"name": "服务消费", "change_pct": 2.34}]}, {"code": "300502", "name": "新易盛", "hot_rank": 87, "hot_rank_chg": 3, "stock_cnt": 5796, "price": "523.05", "change": "-4.12", "market_id": "33", "circulate_market_value": "656031880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600343", "name": "航天动力", "hot_rank": 88, "hot_rank_chg": -13, "stock_cnt": 5796, "price": "27.72", "change": "10.00", "market_id": "17", "circulate_market_value": "17691080000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "601899", "name": "紫金矿业", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5796, "price": "27.72", "change": "0.36", "market_id": "17", "circulate_market_value": "571081710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 90, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "1400.00", "change": "-8.79", "market_id": "17", "circulate_market_value": "879610160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 91, "hot_rank_chg": -10, "stock_cnt": 5796, "price": "13.81", "change": "6.81", "market_id": "33", "circulate_market_value": "48030217000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 92, "hot_rank_chg": 6, "stock_cnt": 5796, "price": "60.34", "change": "-6.51", "market_id": "33", "circulate_market_value": "22235488000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002402", "name": "和而泰", "hot_rank": 93, "hot_rank_chg": 7, "stock_cnt": 5796, "price": "26.32", "change": "9.99", "market_id": "33", "circulate_market_value": "21542357000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天"}, {"code": "600673", "name": "东阳光", "hot_rank": 95, "hot_rank_chg": 4, "stock_cnt": 5796, "price": "37.15", "change": "-3.10", "market_id": "17", "circulate_market_value": "111507877000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 96, "hot_rank_chg": 9, "stock_cnt": 5796, "price": "49.04", "change": "-3.20", "market_id": "17", "circulate_market_value": "71696225000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300136", "name": "信维通信", "hot_rank": 97, "hot_rank_chg": -8, "stock_cnt": 5796, "price": "99.38", "change": "-0.33", "market_id": "33", "circulate_market_value": "82008400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601608", "name": "中信重工", "hot_rank": 98, "hot_rank_chg": -14, "stock_cnt": 5796, "price": "5.04", "change": "10.04", "market_id": "17", "circulate_market_value": "23080949000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "核电", "change_pct": 1.92}, {"name": "一带一路", "change_pct": 1.46}, {"name": "海工装备", "change_pct": 1.54}, {"name": "工业自动化", "change_pct": -0.0}, {"name": "机械", "change_pct": 1.23}, {"name": "军民融合", "change_pct": 1.94}, {"name": "水利", "change_pct": 2.8}, {"name": "风电", "change_pct": 1.44}, {"name": "军工", "change_pct": 2.04}, {"name": "机器人", "change_pct": 0.78}, {"name": "智能制造", "change_pct": 0.34}, {"name": "工业互联网", "change_pct": 1.05}, {"name": "大基建", "change_pct": 2.3}, {"name": "一体化压铸", "change_pct": 1.14}, {"name": "航天", "change_pct": 3.34}, {"name": "煤矿安全", "change_pct": 1.4}, {"name": "深地经济", "change_pct": 1.24}]}, {"code": "300390", "name": "天华新能", "hot_rank": 99, "hot_rank_chg": -2, "stock_cnt": 5796, "price": "65.70", "change": "-4.92", "market_id": "33", "circulate_market_value": "44167980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 100, "hot_rank_chg": -6, "stock_cnt": 5796, "price": "129.44", "change": "-5.72", "market_id": "33", "circulate_market_value": "248888590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002361", "name": "神剑股份", "price": 12.73, "change_pct": 10.03, "reason": "公司主要产品有航空航天类相关模具及金属零件、复合材料产品、北斗卫星导航系统应用终端产品；孙公司中星伟业主要经营北斗导航系统应用终端产品，应用于特殊业务领域", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 10.9, "first_limit_up": 1783659600, "break_limit_up_times": 0}, {"code": "603236", "name": "移远通信", "price": 54.46, "change_pct": 10.0, "reason": "公司机器人方案已落地商业服务、医疗、农业、家用、四足及人形机器人等多个领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.23, "first_limit_up": 1783652486, "break_limit_up_times": 1}, {"code": "000547", "name": "航天发展", "price": 18.17, "change_pct": 9.99, "reason": "公司位于福建省福州市，已完成天目一号掩星探测星座1-22星发射，实现星座阶段组网运行", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 8.39, "first_limit_up": 1783659666, "break_limit_up_times": 8}, {"code": "000892", "name": "欢瑞世纪", "price": 4.2, "change_pct": 9.95, "reason": "1、公司与阶跃星辰共建“麟跃”AI联合实验室，已上线基于IP《十州三境》的首支AI短剧先导概念片，并持续推进AIGC在短剧、互动剧、漫剧等场景落地；\n2、公司通过与明略科技、阶跃星辰合作，用 AI 算法优化短剧投流渠道 / 素材 / 出价、社媒智能运营与 AIGC 营销素材生成，聚焦影视内容精准推广与降本增效", "plates": ["人工智能大模型"], "limit_up_days": 2, "turnover_ratio": 20.22, "first_limit_up": 1783649010, "break_limit_up_times": 1}, {"code": "002606", "name": "大连电瓷", "price": 13.7, "change_pct": 10.04, "reason": "公司上半年净利润同比预增200.55%至286.43%，报告期内，公司顺利完成“阿坝—成都”“甘肃—浙江”“中核—海阳西”等重点特高压工程的产品供货工作，高等级、高附加值产品销售占比较上年同期显著提升，综合毛利率维持在较好水平，盈利结构持续优化。与此同时，中东区域地缘冲突的影响逐步消退，该区域市场需求持续修复，公司存量订单实现有序交付；公司持续拓展海外新兴区域客户资源，推进属地化运营与市场开发工作，海外业务重回增长轨道，海内外市场同步发力，带动公司营业收入提升", "plates": ["智能电网", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.07, "first_limit_up": 1783646700, "break_limit_up_times": 0}, {"code": "002414", "name": "高德红外", "price": 14.64, "change_pct": 9.99, "reason": "1、公司上半年净利最高预增7倍，对于业绩增长的原因，公司表示，型号项目类产品，包括与某客户签订的某完整装备系统产品持续交付；同时，红外芯片应用业务持续增长，公司营业收入及利润同比实现大幅增长\n2、公司表示实现了65000个通道的脑机接口，并且实现了双向信息的读取与写入；\n3、公司大面阵2K红外探测器已配套商业航天及星载领域", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.0, "first_limit_up": 1783646700, "break_limit_up_times": 6}, {"code": "603155", "name": "新亚强", "price": 28.28, "change_pct": 10.0, "reason": "公司专业从事有机硅精细化学品的研产销，配套用于平板显示、电子、半导体、芯片等相关领域的电子级六甲基二硅氮烷产品，已向国内多家半导体客户提供产品服务，并在部分主要应用端实现进口产品的替代", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.38, "first_limit_up": 1783647328, "break_limit_up_times": 4}, {"code": "000620", "name": "盈新发展", "price": 3.63, "change_pct": 10.0, "reason": "公司拟5.2亿元收购长兴半导体60%股权，切入存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 12.92, "first_limit_up": 1783647630, "break_limit_up_times": 19}, {"code": "600992", "name": "贵绳股份", "price": 10.65, "change_pct": 10.02, "reason": "公司“巨龙”牌钢丝绳已用于“神舟”载人飞船等国家重大航天工程，产品配套长征系列火箭及深中通道等超级工程", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 7.03, "first_limit_up": 1783649007, "break_limit_up_times": 0}, {"code": "603270", "name": "金帝股份", "price": 31.04, "change_pct": 9.99, "reason": "1、公司在减速器领域主要有谐波减速机保持架、谐波减速机带齿保持架两类产品，谐波减速机保持架是针对机器人手指关节设计的一款保持架产品；\n2、公司主营轴承保持架和汽车精密零部件两大类产品；\n3、公司风电行业保持架产品包括变桨保持架、齿轮箱保持架、主轴保持架和偏航保持架等4种，系风电设备轴承的主要元件，对风电设备轴承的正常运转起到至关重要的作用\n", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 8.05, "first_limit_up": 1783648466, "break_limit_up_times": 0}, {"code": "002829", "name": "星网宇达", "price": 19.5, "change_pct": 9.98, "reason": "公司主要从事信息感知、卫星通信以及无人系统业务，上半年盈利9000万元-1.2亿元，因“公司对外投资项目2026年1-6月收益表现良好，投资收益同比实现增长，有效补充当期利润，弥补本期经营亏损。经初步测算，影响本期利润金额预计约为1.4亿元”", "plates": ["航天", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 10.21, "first_limit_up": 1783648398, "break_limit_up_times": 0}, {"code": "002623", "name": "亚玛顿", "price": 16.23, "change_pct": 10.03, "reason": "公司是国内光伏镀膜玻璃、大尺寸超薄光伏玻璃的先行者，率先量产1.6mm超薄光伏玻璃并获评工信部制造业单项冠军，在轻量化、高透光特种光伏玻璃领域技术优势突出", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 2.9, "first_limit_up": 1783647573, "break_limit_up_times": 0}, {"code": "002524", "name": "光正眼科", "price": 3.78, "change_pct": 9.88, "reason": "公司为专业眼科连锁医疗企业，另外部分业务方面已涉及医美业务，已经开展了眼整形手术类项目", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.76, "first_limit_up": 1783660143, "break_limit_up_times": 0}, {"code": "300255", "name": "常山药业", "price": 26.34, "change_pct": 20.0, "reason": "公司的原研1.1类创新药艾本那肽，与司美格鲁肽同属于GLP-1长效制剂，上市许可申请获受理", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.66, "first_limit_up": 1783649409, "break_limit_up_times": 27}, {"code": "001395", "name": "亚联机械", "price": 28.63, "change_pct": 9.99, "reason": "公司主营业务为人造板生产线和配套设备，预告中报净利润同比增长59.63%，因“公司共验收5条生产线项目，验收项目数量虽同比减少1条，但高单价项目数量较多，且整体毛利率水平较高”", "plates": ["业绩增长"], "limit_up_days": 2, "turnover_ratio": 7.3, "first_limit_up": 1783647105, "break_limit_up_times": 4}, {"code": "002865", "name": "钧达股份", "price": 55.94, "change_pct": 10.01, "reason": "公司与尚翼光电达成战略合作，双方将围绕钙钛矿电池技术在太空能源的应用展开合作", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 6.21, "first_limit_up": 1783659813, "break_limit_up_times": 17}, {"code": "002774", "name": "快意电梯", "price": 15.9, "change_pct": 10.03, "reason": "公司拥有乘客电梯、载货电梯、自动扶梯等全系列产品，产品行销全球60多个国家和地区", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1783650633, "break_limit_up_times": 0}, {"code": "300786", "name": "国林科技", "price": 23.9, "change_pct": 19.98, "reason": "公司产品已应用于先进存储芯片3D NAND，232层、3D先进封装等应用，以及晶圆代工fab厂中14-28nm制程中；子公司国林半导体清洗类设备已量产出货，薄膜沉积用臭氧发生器已完成国内头部企业验证并小批量出货", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 7.07, "first_limit_up": 1783647567, "break_limit_up_times": 0}, {"code": "600293", "name": "三峡新材", "price": 2.79, "change_pct": 9.84, "reason": "公司正加速向汽车玻璃、电子玻璃等高附加值领域拓展", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 3.88, "first_limit_up": 1783647041, "break_limit_up_times": 2}, {"code": "603898", "name": "好莱客", "price": 15.27, "change_pct": 10.01, "reason": "定制家居整体解决方案提供商，国内少数拥有商标全类保护的定制品牌之一", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 1.89, "first_limit_up": 1783647610, "break_limit_up_times": 0}, {"code": "603322", "name": "超讯科技", "price": 31.06, "change_pct": 9.99, "reason": "公司为“沐曦”品牌GPU产品特定行业总代理，并于2025年初携手沐曦等设立控股子公司“讯曦智能”，向芯片封测、服务器整机生产、销售及维修延伸，强化国产算力产业链布局", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1783647675, "break_limit_up_times": 1}, {"code": "000048", "name": "京基智农", "price": 24.1, "change_pct": 10.0, "reason": "公司主营业务包括生猪养殖与销售、饲料生产与销售、种鸡与肉鸡养殖与销售等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 4.22, "first_limit_up": 1783647102, "break_limit_up_times": 3}, {"code": "600821", "name": "金开新能", "price": 6.11, "change_pct": 10.09, "reason": "国内风光发电领域重要运营商；新疆哈密智算中心是旗下公司探索绿电结合算力领域打造的大型数据中心，总占地 9,504 平方米，总算力80000P以上", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.76, "first_limit_up": 1783650528, "break_limit_up_times": 1}, {"code": "600513", "name": "联环药业", "price": 15.49, "change_pct": 10.01, "reason": "公司主导产品之一爱普列特片为国家一类新药，是国内首创的治疗前列腺良性增生症的有效药物，生产的美愈伪麻胶囊可用于缓解普通感冒和流行性感冒症状", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1783653846, "break_limit_up_times": 0}, {"code": "003001", "name": "中岩大地", "price": 14.21, "change_pct": 9.98, "reason": "公司在岩土工程领域深耕十多年，拥有智能感知超级旋喷技术、多向差速强制搅拌技术、岩土固化剂等，在应对墨脱地区复杂地质环境具有较好的工程应用前景", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.08, "first_limit_up": 1783649715, "break_limit_up_times": 0}, {"code": "600410", "name": "华胜天成", "price": 16.56, "change_pct": 10.03, "reason": "公司全面推进“AI+算力”战略，拥有新一代人工智能算力中心整体解决方案，并获头部科技企业智能计算ISV核心认证，为华为云软件认证合作伙伴、华为云服务合作伙伴和华为政企金牌合作伙伴", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 10.3, "first_limit_up": 1783648056, "break_limit_up_times": 25}, {"code": "002681", "name": "奋达科技", "price": 4.98, "change_pct": 9.93, "reason": "公司机器人业务已成新增长极，情感机器人与人形机器人业务量持续增长，已与国内头部机器人企业合作批量制造人形机器人，并正在开发关节电机、谐波减速器及控制系统", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1783648683, "break_limit_up_times": 0}, {"code": "600192", "name": "长城电工", "price": 6.66, "change_pct": 10.08, "reason": "西部地区电力设备龙头企业，主要包括低压开关成套设备、高中低压电器元件及关键零部件、智能低压成套配电装置及母线槽等电工电器类产品", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.63, "first_limit_up": 1783660644, "break_limit_up_times": 0}, {"code": "000920", "name": "沃顿科技", "price": 12.75, "change_pct": 10.01, "reason": "1、公司的超纯水系列膜产品是较为成熟的系列产品，已应用于半导体芯片等对水质要求极高的高端制造领域；\n2、公司膜产品在盐湖提锂领域已实现了成熟的应用，并承接了多个液体物料浓缩分离纯化的工程项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1783647069, "break_limit_up_times": 4}, {"code": "002346", "name": "柘中股份", "price": 21.81, "change_pct": 9.98, "reason": "公司生产的成套开关设备已应用在中芯国际及其下属公司", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 2.43, "first_limit_up": 1783647036, "break_limit_up_times": 1}, {"code": "601608", "name": "中信重工", "price": 5.04, "change_pct": 10.04, "reason": "1、2026年7月10日，CZ-10B运载火箭在南海预定海域完成软着陆并被成功捕获，我国首次火箭海上网系回收任务取得圆满成功。中信重工作为网系回收系统抓总单位，承接了该系统联合设计制造、主体设备供货及安装调试总包任务；\n2、公司布局矿用防爆巡检机器人、智能安全装备，助力煤矿井下安全管控", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 1.7, "first_limit_up": 1783666600, "break_limit_up_times": 0}, {"code": "000901", "name": "航天科技", "price": 17.93, "change_pct": 10.0, "reason": "中国航天科工集团下属公司，形成了航天应用、汽车电子、车联网及工业物联网、电力设备、石油仪器设备五大业务板块", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1783659678, "break_limit_up_times": 18}, {"code": "300069", "name": "金利华电", "price": 36.86, "change_pct": 19.99, "reason": "1、公司拟收购中科西光82.5%股权，跨界商业航天；\n2、公司专注于新型高强度功能玻璃制造技术的研究和特高压输变电绝缘器材开发，主要产品为高压、超高压和特高压交、直流输电线路上用于绝缘和悬挂导线用的盘型悬式高强度玻璃绝缘子", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 13.26, "first_limit_up": 1783659744, "break_limit_up_times": 14}, {"code": "603538", "name": "美诺华", "price": 30.88, "change_pct": 10.01, "reason": "诺和诺德司美格鲁肽在中国的核心化合物专利到期；公司储备了减肥多肽类中间体，正在进行GLP-1的研发和技术的储备", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 21.23, "first_limit_up": 1783649278, "break_limit_up_times": 13}, {"code": "002038", "name": "双鹭药业", "price": 6.38, "change_pct": 10.0, "reason": "公司表示硝酸甘油喷雾剂作为目前国内独家剂型，在心绞痛、心梗时急救产品的迅速起效十分重要", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.47, "first_limit_up": 1783648791, "break_limit_up_times": 2}, {"code": "603286", "name": "日盈电子", "price": 53.67, "change_pct": 10.0, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.34, "first_limit_up": 1783651206, "break_limit_up_times": 0}, {"code": "000810", "name": "创维数字", "price": 12.84, "change_pct": 10.03, "reason": "公司预计上半年净利同比增长161.24%—235.88%，因“本报告期公司智能终端的销售数量、营收规模以及毛利率比上年同期增加所致”", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1783647381, "break_limit_up_times": 1}, {"code": "000573", "name": "粤宏远Ａ", "price": 3.69, "change_pct": 10.15, "reason": "东莞市场多年经营的房地产企业，广东省合法产能最大的再生铅企业", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 4.5, "first_limit_up": 1783648515, "break_limit_up_times": 1}, {"code": "000838", "name": "*ST发展", "price": 2.21, "change_pct": 9.95, "reason": "重庆地区优质地产商", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.43, "first_limit_up": 1783653912, "break_limit_up_times": 1}, {"code": "600376", "name": "首开股份", "price": 3.66, "change_pct": 9.91, "reason": "公司通过金石投资间接投资宇树机器人", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.46, "first_limit_up": 1783651893, "break_limit_up_times": 1}, {"code": "601698", "name": "中国卫通", "price": 32.88, "change_pct": 10.0, "reason": "卫星通信运营服务商；公司通过承担北斗卫星导航工程等国家航天重大工程，参与了众多型号通信卫星的研制任务；公司卫星应用设备及产品中，包括卫星遥感、卫星导航和卫星通信相关产品及应用系统、北斗芯片等", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1783659748, "break_limit_up_times": 4}, {"code": "603578", "name": "三星新材", "price": 13.37, "change_pct": 10.04, "reason": "控股子公司国华金泰光伏玻璃一期B窑已投产并实现收入", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 2.86, "first_limit_up": 1783648537, "break_limit_up_times": 0}, {"code": "688710", "name": "益诺思", "price": 77.87, "change_pct": 20.0, "reason": "公司作为专业 CRO 企业，在非临床研究领域深度布局 AI 技术应用：自主研发 AI 病理辅助诊断系统，构建跨种属多脏器识别模型，完成 1.5 万张 WSI 扫描训练，识别准确率显著提升", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.56, "first_limit_up": 1783659615, "break_limit_up_times": 8}, {"code": "601858", "name": "中国科传", "price": 18.68, "change_pct": 10.01, "reason": "公司表示已经部署基于DeepSeek等大模型的若干应用，使AI大模型成为支撑公司出版深度融合转型的数字化基础设施", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 1.69, "first_limit_up": 1783652294, "break_limit_up_times": 0}, {"code": "603556", "name": "海兴电力", "price": 22.9, "change_pct": 9.99, "reason": "国智能电表产品最大的出口企业", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.81, "first_limit_up": 1783652672, "break_limit_up_times": 0}, {"code": "002970", "name": "锐明技术", "price": 58.86, "change_pct": 10.0, "reason": "1、公司于近期成立了“数智装备产品事业部”，发展新一代算力中心配套产品相关业务；\n2、商用车车联网龙头，全球车载视频监控市占率第二；公司已将自动驾驶确立为核心成长方向，AEBS、ADAS等产品已量产，并依托全球营销网络加速Robobus等L2+方案落地\n3、公司多模态具身 VLM---SafeGPT认知大模型，与主动安全相比，风险感知能力提升30倍，高风险识别能力提升70%", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 5.64, "first_limit_up": 1783649925, "break_limit_up_times": 0}, {"code": "603223", "name": "恒通股份", "price": 13.72, "change_pct": 10.02, "reason": "公司是国内LNG贸易物流行业的领先企业，预计上半年净利润同比增加66.94%到104.03%，报告期内，裕龙港务建设的生产性泊位投入使用。随着山东裕龙石化产业园区核心企业的开工率及产能逐步攀升，码头吞吐量和港口利用率大幅增加，公司港口业务板块利润显著增加", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.11, "first_limit_up": 1783647717, "break_limit_up_times": 2}, {"code": "600428", "name": "中远海特", "price": 8.99, "change_pct": 10.04, "reason": "公司主营远洋及沿海货物运输，上半年净利润增长55%到70%，报告期内，公司航运业务收入、毛利及期租水平均同比上升。公司牢牢抓住市场机遇，凭借船队规模增长、运力迭代优化优势，聚焦服务新能源产业、助力中国先进制造出口及保障战略性大宗物资进口安全等核心业务发力作为，货源结构持续优化。同时，公司通过加快枢纽通道布局与基本港建设，优化航线运营配置，产业链服务水平与核心竞争力稳步提升", "plates": ["业绩增长", "航运"], "limit_up_days": 1, "turnover_ratio": 1.65, "first_limit_up": 1783647010, "break_limit_up_times": 18}, {"code": "002479", "name": "富春环保", "price": 4.86, "change_pct": 9.95, "reason": "国内固废处理行业的重点企业之一，在垃圾发电等领域处于国内先进水平；预计上半年归母净利润同比增长60%-80%，报告期内业绩变化的主要原因是公司有色金属资源化利用业务板块的主要产品价格较上年同期有较大涨幅，对应营业收入及盈利水平较上年同期均实现较大幅度增长", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.94, "first_limit_up": 1783647153, "break_limit_up_times": 0}, {"code": "605178", "name": "时空科技", "price": 101.55, "change_pct": 10.0, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1783647195, "break_limit_up_times": 1}, {"code": "002989", "name": "中天精装", "price": 31.26, "change_pct": 9.99, "reason": "公司布局半导体行业的高端载板、存储封测及智能存储芯片领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.46, "first_limit_up": 1783647795, "break_limit_up_times": 0}, {"code": "600664", "name": "哈药股份", "price": 3.37, "change_pct": 10.13, "reason": "全国医药行业首家上市公司；公司中药产品主要有祛风骨痛巴布膏、安宫牛黄丸、三鞭参茸固本丸、金贝痰咳清颗粒、双黄连颗粒、血府逐瘀丸等", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 3.97, "first_limit_up": 1783647000, "break_limit_up_times": 2}, {"code": "600879", "name": "XD航天电", "price": 23.29, "change_pct": 10.01, "reason": "1、航天科技集团旗下，业务主要包括军民用无人机系统、精确制导武器系统、物联网应用系统、军民用惯性导航产品等；\n2、间接参股公司航天飞鹏的FP-98“狮子座”大型无人机系统（起飞重量5.25吨）实施首次虾苗跨海空运任务，为低空经济支线物流领域开辟了新的应用场景", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.95, "first_limit_up": 1783659921, "break_limit_up_times": 2}, {"code": "600113", "name": "浙江东日", "price": 33.08, "change_pct": 10.01, "reason": "1、公司主营业务收入主要来自于农副产品批发交易市场业务和生鲜食材配送业务；\n2、子公司培安美此前与首都医科大学开展业务洽谈，推进脑机接口技术研发与产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.96, "first_limit_up": 1783660130, "break_limit_up_times": 0}, {"code": "603151", "name": "邦基科技", "price": 11.9, "change_pct": 9.98, "reason": "公司拟收购北溪农牧等公司股权，本次交易的标的公司以生猪养殖及销售为主", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1783652188, "break_limit_up_times": 0}, {"code": "605090", "name": "九丰能源", "price": 37.98, "change_pct": 9.99, "reason": "长征八号甲运载火箭将卫星互联网低轨17组卫星发射升空，本次发射所用的液氢产品由公司供应", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.08, "first_limit_up": 1783659636, "break_limit_up_times": 38}, {"code": "688722", "name": "同益中", "price": 18.31, "change_pct": 19.99, "reason": "公司拥有超高分子量聚乙烯纤维全产业链布局，在人形机器人灵巧手腱绳方面还在初步研发阶段", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.22, "first_limit_up": 1783659627, "break_limit_up_times": 10}, {"code": "000887", "name": "中鼎股份", "price": 20.68, "change_pct": 10.0, "reason": "1、公司设立全资子公司安徽睿思博机器人科技有限公司，推动机器人部件产品的生产配套；\n2、子公司中鼎流体及中鼎智能目前已推出系列化储能液冷机组、超算中心浸没式液冷机组、热管理控制器、温压一体传感器、冷媒流道板等产品", "plates": ["机器人", "液冷服务器"], "limit_up_days": 2, "turnover_ratio": 8.25, "first_limit_up": 1783647123, "break_limit_up_times": 52}, {"code": "002828", "name": "贝肯能源", "price": 13.48, "change_pct": 10.04, "reason": "国内领先的油气资源开发综合服务商，是民营企业中为数不多的能够为客户提供钻井总承包、压裂、化工产品销售及配套的检测、维修等一揽子技术服务的油服企业", "plates": ["油服"], "limit_up_days": 1, "turnover_ratio": 22.64, "first_limit_up": 1783650042, "break_limit_up_times": 35}, {"code": "600800", "name": "渤海化学", "price": 3.21, "change_pct": 9.93, "reason": "COFs全球首次吨级量产发布会，宝丽迪和渤海化工、耀科创始人等领导上台共同参与启动；渤海化工为公司第一大股东", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.15, "first_limit_up": 1783649395, "break_limit_up_times": 2}, {"code": "603211", "name": "晋拓股份", "price": 37.88, "change_pct": 9.99, "reason": "公司机器人业务主要为国际知名品牌柔性机器人提供零部件；公司与施耐德、UR机器人等合作，向其供应伺服马达、感应器、机器关节所需要的零部件", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.42, "first_limit_up": 1783650430, "break_limit_up_times": 0}, {"code": "605598", "name": "上海港湾", "price": 37.4, "change_pct": 10.0, "reason": "天基基础设施能源分系统核心供应商", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 2.8, "first_limit_up": 1783659838, "break_limit_up_times": 2}, {"code": "600343", "name": "航天动力", "price": 27.72, "change_pct": 10.0, "reason": "航天科技集团下属上市公司；公司大股东是航天科技集团下属航天六院，其是我国液体火箭发动机主要研制单位", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 6.59, "first_limit_up": 1783659626, "break_limit_up_times": 0}, {"code": "603559", "name": "中通国脉", "price": 8.78, "change_pct": 10.03, "reason": "公司共同持股成立吉林省华君算力科技有限公司，经营范围包含云计算设备销售等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 1.98, "first_limit_up": 1783647317, "break_limit_up_times": 4}, {"code": "002693", "name": "双成药业", "price": 10.45, "change_pct": 10.0, "reason": "公司主营多肽药业务，一季度业绩同比扭亏", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 13.96, "first_limit_up": 1783649751, "break_limit_up_times": 26}, {"code": "002144", "name": "宏达高科", "price": 10.77, "change_pct": 10.01, "reason": "1、孙公司浙江威尔德开发有智能按摩机器人；\n2、国内经编面料龙头，为宝马，长城，比亚迪等汽车品牌的新能源车型供应汽车内饰面料产品；\n3、全资子公司威尔德主要从事超声诊断、治疗设备、体外诊断试剂", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.47, "first_limit_up": 1783648686, "break_limit_up_times": 11}, {"code": "003020", "name": "立方制药", "price": 18.74, "change_pct": 9.98, "reason": "公司此前收到国家药监局下发的丹皮酚《化学原料药上市申请批准通知书》，丹皮酚作为中药单体成分，有消炎止痒作用，皮炎，皮肤瘙痒，蚊臭虫叮咬红肿等各种皮肤疾患有一定效果", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 10.58, "first_limit_up": 1783648092, "break_limit_up_times": 2}, {"code": "603162", "name": "海通发展", "price": 10.12, "change_pct": 10.0, "reason": "1、公司上半年净利预增约500%，一方面，得益于上半年公司顺应市场变化趋势，适时扩大运力规模，优化全球航线布局，提高运营效率，降低运营成本；另一方面，全球干散货航运市场回暖，市场运价中枢上移，进一步增厚公司经营收益\n2、公司地处福建福州，主要从事国内沿海以及国际远洋的干散货运输业务，公司运营的航线遍布30余个国家和地区的200余个港口，为客户提供矿石、煤炭、化肥等多种货物的海上运输", "plates": ["航运", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.79, "first_limit_up": 1783652016, "break_limit_up_times": 1}, {"code": "600685", "name": "中船防务", "price": 28.6, "change_pct": 10.0, "reason": "中国船舶工业集团控股，主营船舶及其辅机、承包境外机电工程和境内国际招标工程，中国海军在华南地区唯一的军船生产保障基地，以军船为主的整合平台", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 2.37, "first_limit_up": 1783659606, "break_limit_up_times": 0}, {"code": "688523", "name": "航天环宇", "price": 61.18, "change_pct": 20.01, "reason": "公司为航空航天领域科研院所及总体单位提供配套，参与了载人航天、探月工程等国家重大专项工程，是中航工业、中国航发等央企的核心供应商", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.99, "first_limit_up": 1783660332, "break_limit_up_times": 22}, {"code": "002317", "name": "众生药业", "price": 29.54, "change_pct": 10.02, "reason": "公司自研MASH新药ZSP1601片IIb期临床试验初步结果积极", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.28, "first_limit_up": 1783649655, "break_limit_up_times": 59}, {"code": "001208", "name": "华菱线缆", "price": 15.99, "change_pct": 9.97, "reason": "1、公司长期为“神舟”系列飞船、“长征”系列运载火箭等重点工程配套供应线缆产品；\n2、子公司三竹科技正在研发液冷电机连接器，产品将间接配套英伟达产业链", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 13.75, "first_limit_up": 1783659600, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 4.19, "change_pct": 9.97, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 5.31, "first_limit_up": 1783651695, "break_limit_up_times": 1}, {"code": "000933", "name": "神火股份", "price": 23.49, "change_pct": 10.02, "reason": "煤铝双主业，河南神火集团的核心企业；上半年净利同比预增152.04%，报告期内，受电解铝、煤炭产品售价同比上涨、主要原材料氧化铝价格同比下降等因素影响，公司盈利能力大幅增强", "plates": ["业绩增长", "有色金属"], "limit_up_days": 1, "turnover_ratio": 4.71, "first_limit_up": 1783651686, "break_limit_up_times": 61}, {"code": "600491", "name": "ST龙元", "price": 1.12, "change_pct": 9.8, "reason": "长三角建筑市场最大的民营施工企业之一，宁波开海投资拟要约收购公司6%股份", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.05, "first_limit_up": 1783646700, "break_limit_up_times": 0}, {"code": "301117", "name": "佳缘科技", "price": 20.29, "change_pct": 19.99, "reason": "子公司上海航缘汇科技有限公司从事卫星通信服务、卫星遥感数据处理等业务", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 27.15, "first_limit_up": 1783659618, "break_limit_up_times": 6}, {"code": "002402", "name": "和而泰", "price": 26.32, "change_pct": 9.99, "reason": "公司持有摩尔线程1.244%股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.71, "first_limit_up": 1783648533, "break_limit_up_times": 1}, {"code": "002121", "name": "科陆电子", "price": 5.34, "change_pct": 10.1, "reason": "国网和南网智能电表核心供应商，拟定增募资不超25亿元，由控股股东美的集团全额认购", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 1.41, "first_limit_up": 1783647000, "break_limit_up_times": 0}, {"code": "600629", "name": "华建集团", "price": 12.75, "change_pct": 10.01, "reason": "公司控股股东为上海国有资本投资有限公司，旗下上海科技创业投资有限公司持有上海微电子装备（集团）股份有限公司13.275%股权", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.39, "first_limit_up": 1783650596, "break_limit_up_times": 1}, {"code": "600072", "name": "中船科技", "price": 8.91, "change_pct": 10.0, "reason": "中国船舶集团旗下，船舶工业领域龙头", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.26, "first_limit_up": 1783660648, "break_limit_up_times": 0}, {"code": "002342", "name": "巨力索具", "price": 11.07, "change_pct": 10.04, "reason": "公司为商业航天地面发射提供了系统性保障，从生产组装到发射前的安装调试和转运过程都会应用到公司产品", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 17.97, "first_limit_up": 1783650864, "break_limit_up_times": 1}, {"code": "002202", "name": "金风科技", "price": 22.36, "change_pct": 9.99, "reason": "国内风电龙头，对蓝箭航天空间科技的持股比例为8.3%", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 7.96, "first_limit_up": 1783660362, "break_limit_up_times": 44}, {"code": "002115", "name": "三维通信", "price": 10.95, "change_pct": 10.05, "reason": "公司预计上半年净利同比增1429%—2002%，报告期内，公司互联网业务收入实现增长，主要受市场需求波动驱动。2025年第四季度以来，短剧、漫剧等内容商业模式快速迭代，市场推广需求显著提升，行业迎来阶段性红利窗口。公司紧抓市场机遇，积极布局相关业务，有效把握流量与变现机会，推动互联网业务收入实现增长。", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.29, "first_limit_up": 1783646700, "break_limit_up_times": 0}, {"code": "002544", "name": "普天科技", "price": 18.87, "change_pct": 10.03, "reason": "公司与氦星光联科技有限公司、北京忆芯科技有限公司在之江实验室签署战略合作协议，聚焦空天算力网络构建、高速数据传输技术攻关及商业化运营探索，共同打造新一代天地一体化信息基础设施。", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 3.43, "first_limit_up": 1783660878, "break_limit_up_times": 0}, {"code": "603698", "name": "航天工程", "price": 44.09, "change_pct": 10.0, "reason": "航天科技集团旗下，运载火箭技术研究院旗下唯一上市公司，依托自主研发的粉煤加压气化技术，可生产合成氨、甲醇等原料气体，旗下航天氢能新乡气体公司为晋开延化提供原料气", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 6.43, "first_limit_up": 1783659602, "break_limit_up_times": 0}, {"code": "603127", "name": "昭衍新药", "price": 43.22, "change_pct": 10.0, "reason": "国内创新药龙头，公司已将基于AI和行为组学的全自动行为学检测系统应用于多种CNS疾病模型如阿尔茨海默症、帕金森症和疼痛的评价中，支持了多个前沿药物如细胞治疗、基因治疗药物的非临床申报", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.5, "first_limit_up": 1783649737, "break_limit_up_times": 67}, {"code": "603110", "name": "东方材料", "price": 23.19, "change_pct": 10.01, "reason": "1、全资子公司东方超算旗下的全国一体化算力平台拥有便捷调度多元算力，首批13家数据中心已经加盟东方超算全国一体化超级算力集群；\n2、公司主营PCB电子油墨、软包装油墨及聚氨酯胶粘剂，PCB油墨应用于刚挠结合板等新兴电子产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 9.95, "first_limit_up": 1783648222, "break_limit_up_times": 2}, {"code": "600118", "name": "中国卫星", "price": 90.02, "change_pct": 10.0, "reason": "国内卫星制造龙头，北斗主要提供商之一，主营小卫星 / 微小卫星研制、宇航部组件配套、卫星通导遥终端及地面应用系统集成，提供卫星运营服务与天地一体信息解决方案", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.29, "first_limit_up": 1783659629, "break_limit_up_times": 0}, {"code": "300065", "name": "海兰信", "price": 28.79, "change_pct": 20.01, "reason": "1、公司作为联合体成员中标海南商发火箭海上回收指挥测控船项目，商业航天订单落地；\n2、海底数据中心（UDC）龙头企业；公司是继微软之后的第二家具备海底数据中心的全套技术与实施能力的企业，首个项目将在海南省陵水落地", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 18.81, "first_limit_up": 1783659621, "break_limit_up_times": 0}, {"code": "003009", "name": "中天火箭", "price": 60.64, "change_pct": 9.99, "reason": "航天科技集团旗下，国内领先的小型固体火箭生产商；公司人影无人机项目目前已在多地开展试验作业", "plates": ["航天"], "limit_up_days": 1, "turnover_ratio": 5.93, "first_limit_up": 1783659663, "break_limit_up_times": 1}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第一次风险提示性公告", "002731": "[立案调查] ST萃华：关于立案调查进展暨风险提示的公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "600811": "[立案调查] 东方集团：东方集团关于立案调查进展暨公司股票可能存在因股价低于1元而终止上市的风", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "603595": "[行政处罚事先告知书] 东尼电子：东尼电子关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》", "002122": "[行政处罚事先告知书] 汇洲智能：关于收到行政处罚事先告知书的公告", "300472": "[行政处罚事先告知书] *ST新元：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300849": "[行政处罚事先告知书] 锦盛新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300233": "[行政处罚事先告知书] 金城医药：关于公司实际控制人收到行政处罚事先告知书的公告", "000698": "[行政处罚事先告知书] 沈阳化工：沈阳化工股份有限公司关于收到中国证券监督管理委员会辽宁监管局《行政处罚", "600745": "ST/风险警示股"};