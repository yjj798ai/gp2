const UPDATE_TIME = "2026-11-13 10:28";
const THS_HOT = [
  {
    "name": "短剧游戏",
    "rise": 0.29,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "猪肉",
    "rise": 2.15,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "人形机器人",
    "rise": -2.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.4,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续329天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -2.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续258天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "机器人概念",
    "rise": -2.21,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": -1.39,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -2.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": -4.32,
    "rate": 0,
    "tag": "",
    "hotTag": "连续152天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "存储芯片",
    "rise": -3.32,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续282天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI视频",
    "rise": -0.71,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": -1,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "光伏概念",
    "rise": -2.67,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 1,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "芯片概念",
    "rise": -2.85,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续39天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "冰雪产业",
    "rise": -2.48,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 1,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "储能",
    "rise": -2.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": -3,
    "etfName": "电池ETF",
    "code": "885921"
  },
  {
    "name": "文化传媒概念",
    "rise": -0.53,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "算力租赁",
    "rise": -1.22,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "白酒概念",
    "rise": -0.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "兵装重组概念",
    "rise": -2.41,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "人工智能",
    "rise": -1.82,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续36天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  }
];
const THS_EVENTS = [
  {
    "title": "微信「看一看」正在小范围测试短剧入口",
    "desc": "",
    "heat": 96190,
    "direction": "AI短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "短剧游戏",
      "AI视频",
      "影视院线"
    ],
    "stocks": [
      {
        "name": "幸福蓝海",
        "code": "300528",
        "chg": 20.013342
      }
    ]
  },
  {
    "title": "张一鸣：字节AI最早2029年或2030年追平OpenAI与Anthropic",
    "desc": "",
    "heat": 40135,
    "direction": "字节大模型",
    "themes": [
      "字节大模型",
      "字节系算力",
      "抖音概念(字节概念)"
    ],
    "stocks": [
      {
        "name": "华胜天成",
        "code": "600410",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "华为云宣布，首款昇腾原生具身世界模型来了",
    "desc": "",
    "heat": 30031,
    "direction": "华为机器人",
    "themes": [
      "华为机器人",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "华是科技",
        "code": "301218",
        "chg": 15.311778
      }
    ]
  },
  {
    "title": "三次APEC会议见证中国开放新高度",
    "desc": "",
    "heat": 19015,
    "direction": "深圳APEC",
    "themes": [
      "APEC",
      "深圳"
    ],
    "stocks": [
      {
        "name": "金新农",
        "code": "002548",
        "chg": 10.057471
      }
    ]
  },
  {
    "title": "英伟达宣布黄仁勋辞任CEO，董事会寻找继任者",
    "desc": "",
    "heat": 10730,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "华东重机",
        "code": "002685",
        "chg": 9.920635
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "养猪",
    "change": "+2.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+1.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "+1.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+0.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+0.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+0.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "+0.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+0.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+0.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+0.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+0.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白马股",
    "change": "+0.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+0.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "-0.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "印染",
    "change": "-0.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中字头",
    "change": "-0.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "-0.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "华为盘古",
    "change": "-0.14%",
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
    "hot_rank": 1,
    "hot_rank_chg": 6,
    "stock_cnt": 5775,
    "price": "3.40",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "9732065600.00",
    "change_type": "1",
    "change_section": "18",
    "change_days": "10",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      },
      {
        "name": "AI视频",
        "change_pct": -0.53
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 2,
    "hot_rank_chg": -1,
    "stock_cnt": 5775,
    "price": "4.82",
    "change": "-6.59",
    "market_id": "33",
    "circulate_market_value": "7620281500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -3.59
      },
      {
        "name": "体外诊断",
        "change_pct": -2.84
      },
      {
        "name": "医疗器械",
        "change_pct": -2.6
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "基因测序",
        "change_pct": -3.56
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "水产养殖",
        "change_pct": -2.38
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.0
      },
      {
        "name": "海洋经济",
        "change_pct": -2.62
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5775,
    "price": "6.46",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "5715675700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.53
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.83
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "信托",
        "change_pct": -0.66
      },
      {
        "name": "民营医院",
        "change_pct": -1.84
      },
      {
        "name": "社区团购",
        "change_pct": -2.43
      },
      {
        "name": "大金融",
        "change_pct": 0.61
      },
      {
        "name": "餐饮",
        "change_pct": -1.05
      },
      {
        "name": "首发经济",
        "change_pct": -2.01
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 10,
    "stock_cnt": 5775,
    "price": "5.73",
    "change": "-10.05",
    "market_id": "17",
    "circulate_market_value": "7649853500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -1.98
      },
      {
        "name": "物联网",
        "change_pct": -1.6
      },
      {
        "name": "LED",
        "change_pct": -2.89
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.85
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 12,
    "hot_rank_chg": -1,
    "stock_cnt": 5775,
    "price": "10.33",
    "change": "-5.66",
    "market_id": "33",
    "circulate_market_value": "6199205800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -1.58
      },
      {
        "name": "边缘计算",
        "change_pct": -1.03
      },
      {
        "name": "核电",
        "change_pct": -2.46
      },
      {
        "name": "海工装备",
        "change_pct": -2.25
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.51
      },
      {
        "name": "冷链",
        "change_pct": -1.98
      },
      {
        "name": "地热",
        "change_pct": -3.56
      },
      {
        "name": "储能",
        "change_pct": -2.17
      },
      {
        "name": "碳中和",
        "change_pct": -1.87
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -2.84
      },
      {
        "name": "汽车热管理",
        "change_pct": -2.3
      },
      {
        "name": "热泵",
        "change_pct": -2.55
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.28
      },
      {
        "name": "海洋经济",
        "change_pct": -2.62
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 16,
    "hot_rank_chg": 64,
    "stock_cnt": 5775,
    "price": "9.59",
    "change": "-4.00",
    "market_id": "33",
    "circulate_market_value": "10164970100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.36
      },
      {
        "name": "电子烟",
        "change_pct": -2.06
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "造纸",
        "change_pct": -1.6
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "包装印刷",
        "change_pct": -2.13
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.85
      },
      {
        "name": "太空算力",
        "change_pct": -2.33
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 19,
    "hot_rank_chg": 37,
    "stock_cnt": 5775,
    "price": "2.69",
    "change": "-4.27",
    "market_id": "17",
    "circulate_market_value": "9387530200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.24
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.79
      },
      {
        "name": "超高清视频",
        "change_pct": -1.19
      },
      {
        "name": "人工智能",
        "change_pct": -1.76
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.51
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "智慧城市",
        "change_pct": -1.49
      },
      {
        "name": "国产芯片",
        "change_pct": -2.85
      },
      {
        "name": "振兴东北",
        "change_pct": -2.16
      },
      {
        "name": "传媒",
        "change_pct": -0.96
      },
      {
        "name": "低价股",
        "change_pct": -1.82
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "在线教育",
        "change_pct": -0.84
      },
      {
        "name": "医疗信息化",
        "change_pct": -1.2
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 20,
    "hot_rank_chg": 0,
    "stock_cnt": 5775,
    "price": "4.30",
    "change": "-8.90",
    "market_id": "17",
    "circulate_market_value": "5613520600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "高速公路",
        "change_pct": -0.8
      },
      {
        "name": "振兴东北",
        "change_pct": -2.16
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -2.14
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 22,
    "hot_rank_chg": 4,
    "stock_cnt": 5775,
    "price": "5.44",
    "change": "-9.93",
    "market_id": "33",
    "circulate_market_value": "4684724300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -2.13
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.36
      },
      {
        "name": "光伏",
        "change_pct": -3.02
      },
      {
        "name": "有色金属",
        "change_pct": -2.78
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.22
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.86
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 24,
    "hot_rank_chg": 44,
    "stock_cnt": 5775,
    "price": "3.96",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3643936300.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "AI游戏",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "人工智能",
        "change_pct": -1.76
      },
      {
        "name": "VR&AR",
        "change_pct": -2.36
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "动漫",
        "change_pct": 0.83
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.45
      },
      {
        "name": "快手概念股",
        "change_pct": -1.67
      },
      {
        "name": "NFT",
        "change_pct": -1.16
      },
      {
        "name": "元宇宙",
        "change_pct": -1.1
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.11
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.57
      },
      {
        "name": "云游戏",
        "change_pct": -1.64
      },
      {
        "name": "华为产业链",
        "change_pct": -2.13
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 26,
    "hot_rank_chg": -9,
    "stock_cnt": 5775,
    "price": "2.73",
    "change": "-9.90",
    "market_id": "33",
    "circulate_market_value": "12009295800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -2.76
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "京津冀",
        "change_pct": -1.41
      },
      {
        "name": "旅游",
        "change_pct": -1.27
      },
      {
        "name": "园林",
        "change_pct": -2.07
      },
      {
        "name": "海绵城市",
        "change_pct": -1.49
      },
      {
        "name": "固废处理",
        "change_pct": -1.72
      },
      {
        "name": "光伏",
        "change_pct": -3.02
      },
      {
        "name": "风电",
        "change_pct": -1.93
      },
      {
        "name": "雄安新区",
        "change_pct": -1.73
      },
      {
        "name": "北京城市规划",
        "change_pct": -2.26
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -1.97
      },
      {
        "name": "储能",
        "change_pct": -2.17
      },
      {
        "name": "碳中和",
        "change_pct": -1.87
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.84
      },
      {
        "name": "汽车拆解",
        "change_pct": -2.43
      },
      {
        "name": "土壤修复",
        "change_pct": -1.89
      },
      {
        "name": "核污染防治",
        "change_pct": -3.11
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.16
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.0
      },
      {
        "name": "低价股",
        "change_pct": -1.82
      },
      {
        "name": "西部大开发",
        "change_pct": -2.12
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 29,
    "hot_rank_chg": 0,
    "stock_cnt": 5775,
    "price": "9.60",
    "change": "-4.38",
    "market_id": "33",
    "circulate_market_value": "4547330700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "VR&AR",
        "change_pct": -2.36
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "直播/短视频",
        "change_pct": -2.06
      },
      {
        "name": "动漫",
        "change_pct": 0.83
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.45
      },
      {
        "name": "传媒",
        "change_pct": -0.96
      },
      {
        "name": "元宇宙",
        "change_pct": -1.1
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 30,
    "hot_rank_chg": 20,
    "stock_cnt": 5775,
    "price": "7.73",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "3542260100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -2.19
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.36
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 31,
    "hot_rank_chg": 0,
    "stock_cnt": 5775,
    "price": "5.04",
    "change": "-6.67",
    "market_id": "17",
    "circulate_market_value": "5849134000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "纺织服装",
        "change_pct": -1.4
      },
      {
        "name": "浙江国企改革",
        "change_pct": -1.48
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 33,
    "hot_rank_chg": 24,
    "stock_cnt": 5775,
    "price": "9.80",
    "change": "-10.01",
    "market_id": "17",
    "circulate_market_value": "6289475500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -2.71
      },
      {
        "name": "农业种植",
        "change_pct": -1.8
      },
      {
        "name": "湖南国企改革",
        "change_pct": -2.01
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.84
      },
      {
        "name": "休闲食品",
        "change_pct": -2.68
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "食品安全",
        "change_pct": -1.29
      },
      {
        "name": "社区团购",
        "change_pct": -2.43
      },
      {
        "name": "大农业",
        "change_pct": -1.16
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "人造肉",
        "change_pct": -2.21
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 34,
    "hot_rank_chg": 187,
    "stock_cnt": 5775,
    "price": "6.97",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "4885235600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.53
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -1.52
      },
      {
        "name": "物业管理",
        "change_pct": -2.69
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "地摊经济",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 38,
    "hot_rank_chg": 86,
    "stock_cnt": 5775,
    "price": "7.95",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "3585661600.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "四足机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.79
      },
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "物联网",
        "change_pct": -1.6
      },
      {
        "name": "机器人",
        "change_pct": -2.09
      },
      {
        "name": "无人机",
        "change_pct": -1.78
      },
      {
        "name": "国产芯片",
        "change_pct": -2.85
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.05
      },
      {
        "name": "低空经济",
        "change_pct": -2.21
      },
      {
        "name": "无人物流车",
        "change_pct": -1.04
      }
    ]
  },
  {
    "code": "603536",
    "name": "惠发食品",
    "hot_rank": 40,
    "hot_rank_chg": 7,
    "stock_cnt": 5775,
    "price": "11.74",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "2823848700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "社区团购",
        "change_pct": -2.43
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "回购",
        "change_pct": -2.57
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 41,
    "hot_rank_chg": -17,
    "stock_cnt": 5775,
    "price": "6.73",
    "change": "-7.81",
    "market_id": "33",
    "circulate_market_value": "12888572200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.36
      },
      {
        "name": "林业",
        "change_pct": -3.45
      },
      {
        "name": "碳中和",
        "change_pct": -1.87
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 42,
    "hot_rank_chg": 115,
    "stock_cnt": 5775,
    "price": "4.18",
    "change": "-0.71",
    "market_id": "17",
    "circulate_market_value": "4237284900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "水利",
        "change_pct": -1.52
      },
      {
        "name": "智慧城市",
        "change_pct": -1.49
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": -2.84
      },
      {
        "name": "振兴东北",
        "change_pct": -2.16
      },
      {
        "name": "大基建",
        "change_pct": -2.03
      },
      {
        "name": "中俄贸易",
        "change_pct": -1.13
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.0
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -2.14
      },
      {
        "name": "旧改",
        "change_pct": -2.26
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 43,
    "hot_rank_chg": -13,
    "stock_cnt": 5775,
    "price": "5.99",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "4583193000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.03
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.83
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "医药商业",
        "change_pct": -2.22
      },
      {
        "name": "保健品",
        "change_pct": -1.64
      },
      {
        "name": "民营医院",
        "change_pct": -1.84
      },
      {
        "name": "医药",
        "change_pct": -2.53
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "辅助生殖",
        "change_pct": -3.12
      },
      {
        "name": "口腔",
        "change_pct": -2.51
      },
      {
        "name": "医美",
        "change_pct": -2.31
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -2.0
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 47,
    "hot_rank_chg": 36,
    "stock_cnt": 5775,
    "price": "5.63",
    "change": "3.30",
    "market_id": "17",
    "circulate_market_value": "3148969000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "ST摘帽",
        "change_pct": -1.47
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 58,
    "hot_rank_chg": 243,
    "stock_cnt": 5775,
    "price": "2.73",
    "change": "10.08",
    "market_id": "17",
    "circulate_market_value": "3988514400.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "海参",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -2.03
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "冷链",
        "change_pct": -1.98
      },
      {
        "name": "医药",
        "change_pct": -2.53
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "食品安全",
        "change_pct": -1.29
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "低价股",
        "change_pct": -1.82
      },
      {
        "name": "水产养殖",
        "change_pct": -2.38
      },
      {
        "name": "海洋经济",
        "change_pct": -2.62
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 60,
    "hot_rank_chg": -11,
    "stock_cnt": 5775,
    "price": "10.51",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "3513061200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.45
      },
      {
        "name": "饲料",
        "change_pct": 0.24
      },
      {
        "name": "一带一路",
        "change_pct": -1.9
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "保健品",
        "change_pct": -1.64
      },
      {
        "name": "山东国企改革",
        "change_pct": -2.21
      },
      {
        "name": "污水处理",
        "change_pct": -1.72
      },
      {
        "name": "环保",
        "change_pct": -1.97
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "预制菜",
        "change_pct": -1.09
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "水产养殖",
        "change_pct": -2.38
      },
      {
        "name": "广西概念",
        "change_pct": -1.64
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 63,
    "hot_rank_chg": -40,
    "stock_cnt": 5775,
    "price": "3.18",
    "change": "-4.50",
    "market_id": "17",
    "circulate_market_value": "7035206400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -1.6
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.51
      },
      {
        "name": "光通信",
        "change_pct": -4.85
      },
      {
        "name": "林业",
        "change_pct": -3.45
      },
      {
        "name": "军民融合",
        "change_pct": -2.25
      },
      {
        "name": "军工",
        "change_pct": -2.3
      },
      {
        "name": "人造肉",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "603725",
    "name": "天安新材",
    "hot_rank": 66,
    "hot_rank_chg": 112,
    "stock_cnt": 5775,
    "price": "12.38",
    "change": "-5.93",
    "market_id": "17",
    "circulate_market_value": "3774138100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.25
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.79
      },
      {
        "name": "家具家居",
        "change_pct": -1.37
      },
      {
        "name": "耐火材料",
        "change_pct": -4.23
      },
      {
        "name": "机器人",
        "change_pct": -2.09
      },
      {
        "name": "旧改",
        "change_pct": -2.26
      },
      {
        "name": "回购",
        "change_pct": -2.57
      }
    ]
  },
  {
    "code": "002593",
    "name": "日上集团",
    "hot_rank": 70,
    "hot_rank_chg": 4,
    "stock_cnt": 5775,
    "price": "4.75",
    "change": "-9.18",
    "market_id": "33",
    "circulate_market_value": "2662395600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.79
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.36
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.25
      },
      {
        "name": "汽车零部件",
        "change_pct": -1.79
      },
      {
        "name": "新型城镇化",
        "change_pct": -2.0
      },
      {
        "name": "胎压监测",
        "change_pct": -2.2
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 73,
    "hot_rank_chg": -35,
    "stock_cnt": 5775,
    "price": "4.30",
    "change": "-8.12",
    "market_id": "33",
    "circulate_market_value": "11405967500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "装修装饰",
        "change_pct": -2.2
      },
      {
        "name": "装配式建筑",
        "change_pct": -2.25
      },
      {
        "name": "破净股",
        "change_pct": -1.19
      },
      {
        "name": "航天",
        "change_pct": -2.71
      },
      {
        "name": "旧改",
        "change_pct": -2.26
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 75,
    "hot_rank_chg": 68,
    "stock_cnt": 5775,
    "price": "12.24",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "8151840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.53
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 78,
    "hot_rank_chg": 980,
    "stock_cnt": 5775,
    "price": "4.21",
    "change": "6.58",
    "market_id": "33",
    "circulate_market_value": "3012440300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "旅游",
        "change_pct": -1.27
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 79,
    "hot_rank_chg": -17,
    "stock_cnt": 5775,
    "price": "2.37",
    "change": "-9.20",
    "market_id": "33",
    "circulate_market_value": "13851328000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.51
      },
      {
        "name": "光伏",
        "change_pct": -3.02
      },
      {
        "name": "储能",
        "change_pct": -2.17
      },
      {
        "name": "乡村振兴",
        "change_pct": -1.84
      },
      {
        "name": "颗粒硅",
        "change_pct": -3.57
      },
      {
        "name": "BIPV概念",
        "change_pct": -2.02
      },
      {
        "name": "低价股",
        "change_pct": -1.82
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -3.67
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -3.67
      },
      {
        "name": "华为产业链",
        "change_pct": -2.13
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 80,
    "hot_rank_chg": 389,
    "stock_cnt": 5775,
    "price": "9.63",
    "change": "7.48",
    "market_id": "33",
    "circulate_market_value": "8987887100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -2.32
      },
      {
        "name": "新疆国企改革",
        "change_pct": -1.84
      },
      {
        "name": "新疆概念",
        "change_pct": -1.74
      },
      {
        "name": "光伏",
        "change_pct": -3.02
      },
      {
        "name": "风电",
        "change_pct": -1.93
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.22
      },
      {
        "name": "储能",
        "change_pct": -2.17
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 83,
    "hot_rank_chg": 85,
    "stock_cnt": 5775,
    "price": "5.17",
    "change": "-8.98",
    "market_id": "17",
    "circulate_market_value": "13020696100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.99
      },
      {
        "name": "工业大麻",
        "change_pct": -1.36
      },
      {
        "name": "中药",
        "change_pct": -2.03
      },
      {
        "name": "保健品",
        "change_pct": -1.64
      },
      {
        "name": "民营医院",
        "change_pct": -1.84
      },
      {
        "name": "医药",
        "change_pct": -2.53
      },
      {
        "name": "化学原料药",
        "change_pct": -2.35
      },
      {
        "name": "流感",
        "change_pct": -2.73
      },
      {
        "name": "振兴东北",
        "change_pct": -2.16
      },
      {
        "name": "食品",
        "change_pct": -1.86
      },
      {
        "name": "肝炎概念",
        "change_pct": -2.51
      }
    ]
  },
  {
    "code": "002313",
    "name": "日海智能",
    "hot_rank": 84,
    "hot_rank_chg": -19,
    "stock_cnt": 5775,
    "price": "9.32",
    "change": "-3.02",
    "market_id": "33",
    "circulate_market_value": "3489215100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.79
      },
      {
        "name": "边缘计算",
        "change_pct": -1.03
      },
      {
        "name": "无人驾驶",
        "change_pct": -1.84
      },
      {
        "name": "5G",
        "change_pct": -3.3
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "人工智能",
        "change_pct": -1.76
      },
      {
        "name": "充电桩",
        "change_pct": -2.32
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.51
      },
      {
        "name": "北斗导航",
        "change_pct": -1.93
      },
      {
        "name": "物联网",
        "change_pct": -1.6
      },
      {
        "name": "智慧城市",
        "change_pct": -1.49
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.22
      },
      {
        "name": "智能制造",
        "change_pct": -2.12
      },
      {
        "name": "工业互联网",
        "change_pct": -1.31
      },
      {
        "name": "小米概念股",
        "change_pct": -2.64
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -1.16
      },
      {
        "name": "华为海思",
        "change_pct": -1.88
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "低空经济",
        "change_pct": -2.21
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 86,
    "hot_rank_chg": 24,
    "stock_cnt": 5775,
    "price": "11.51",
    "change": "-5.58",
    "market_id": "17",
    "circulate_market_value": "4614151600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -1.54
      },
      {
        "name": "新零售",
        "change_pct": -2.53
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "物业管理",
        "change_pct": -2.69
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "地摊经济",
        "change_pct": -1.95
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 87,
    "hot_rank_chg": 60,
    "stock_cnt": 5775,
    "price": "9.60",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "3691657300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -2.78
      },
      {
        "name": "股权转让",
        "change_pct": -2.46
      },
      {
        "name": "新疆概念",
        "change_pct": -1.74
      },
      {
        "name": "医药",
        "change_pct": -2.53
      },
      {
        "name": "流感",
        "change_pct": -2.73
      },
      {
        "name": "肝炎概念",
        "change_pct": -2.51
      },
      {
        "name": "国资入股",
        "change_pct": -1.94
      },
      {
        "name": "减肥药",
        "change_pct": -2.87
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 88,
    "hot_rank_chg": 217,
    "stock_cnt": 5775,
    "price": "8.11",
    "change": "1.50",
    "market_id": "17",
    "circulate_market_value": "27265008000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -0.24
      },
      {
        "name": "高管增持",
        "change_pct": -1.77
      },
      {
        "name": "超高清视频",
        "change_pct": -1.19
      },
      {
        "name": "电竞",
        "change_pct": -1.07
      },
      {
        "name": "上海国企改革",
        "change_pct": -1.54
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "物联网",
        "change_pct": -1.6
      },
      {
        "name": "教育",
        "change_pct": -0.89
      },
      {
        "name": "智慧城市",
        "change_pct": -1.49
      },
      {
        "name": "破净股",
        "change_pct": -1.19
      },
      {
        "name": "传媒",
        "change_pct": -0.96
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.16
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "在线教育",
        "change_pct": -0.84
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.52
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 89,
    "hot_rank_chg": 13,
    "stock_cnt": 5775,
    "price": "11.34",
    "change": "-4.14",
    "market_id": "33",
    "circulate_market_value": "11973009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.07
      },
      {
        "name": "创新药",
        "change_pct": -2.78
      },
      {
        "name": "医疗器械",
        "change_pct": -2.6
      },
      {
        "name": "医药",
        "change_pct": -2.53
      },
      {
        "name": "疫苗",
        "change_pct": -2.29
      },
      {
        "name": "化学原料药",
        "change_pct": -2.35
      },
      {
        "name": "肝炎概念",
        "change_pct": -2.51
      },
      {
        "name": "干细胞",
        "change_pct": -3.11
      },
      {
        "name": "眼科",
        "change_pct": -0.74
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -4.63
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 90,
    "hot_rank_chg": -4,
    "stock_cnt": 5775,
    "price": "7.95",
    "change": "-3.05",
    "market_id": "33",
    "circulate_market_value": "12934600500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -1.99
      },
      {
        "name": "电竞",
        "change_pct": -1.07
      },
      {
        "name": "手游",
        "change_pct": -0.1
      },
      {
        "name": "人工智能",
        "change_pct": -1.76
      },
      {
        "name": "游戏",
        "change_pct": -0.23
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -1.23
      },
      {
        "name": "腾讯概念股",
        "change_pct": -1.45
      },
      {
        "name": "传媒",
        "change_pct": -0.96
      },
      {
        "name": "快手概念股",
        "change_pct": -1.67
      },
      {
        "name": "元宇宙",
        "change_pct": -1.1
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.11
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.16
      },
      {
        "name": "web3.0",
        "change_pct": -1.62
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.62
      },
      {
        "name": "数据要素",
        "change_pct": -1.02
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.57
      },
      {
        "name": "AI营销",
        "change_pct": -2.03
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.4
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -2.85
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -1.52
      },
      {
        "name": "人形机器人",
        "change_pct": -2.32
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.33
      },
      {
        "name": "多模态",
        "change_pct": -1.43
      },
      {
        "name": "AI视频",
        "change_pct": -0.53
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 91,
    "hot_rank_chg": -6,
    "stock_cnt": 5775,
    "price": "11.60",
    "change": "-6.98",
    "market_id": "17",
    "circulate_market_value": "6665790900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -1.4
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.36
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.96
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 93,
    "hot_rank_chg": -47,
    "stock_cnt": 5775,
    "price": "9.10",
    "change": "-6.57",
    "market_id": "33",
    "circulate_market_value": "8431328200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -4.37
      },
      {
        "name": "光伏",
        "change_pct": -3.02
      },
      {
        "name": "储能",
        "change_pct": -2.17
      },
      {
        "name": "BIPV概念",
        "change_pct": -2.02
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -3.67
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -3.67
      },
      {
        "name": "光伏胶膜",
        "change_pct": -2.16
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 96,
    "hot_rank_chg": -2,
    "stock_cnt": 5775,
    "price": "8.85",
    "change": "1.84",
    "market_id": "17",
    "circulate_market_value": "2386068100000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.36
      },
      {
        "name": "高股息",
        "change_pct": 0.13
      },
      {
        "name": "银行",
        "change_pct": 1.43
      },
      {
        "name": "白马股",
        "change_pct": 0.15
      },
      {
        "name": "破净股",
        "change_pct": -1.19
      },
      {
        "name": "大金融",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "000066",
    "name": "中国长城",
    "hot_rank": 98,
    "hot_rank_chg": 129,
    "stock_cnt": 5775,
    "price": "12.22",
    "change": "3.65",
    "market_id": "33",
    "circulate_market_value": "39416708000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -3.36
      },
      {
        "name": "央企改革",
        "change_pct": -1.34
      },
      {
        "name": "锂电池",
        "change_pct": -2.85
      },
      {
        "name": "海工装备",
        "change_pct": -2.25
      },
      {
        "name": "量子通信",
        "change_pct": -2.61
      },
      {
        "name": "人工智能",
        "change_pct": -1.76
      },
      {
        "name": "网络安全",
        "change_pct": -0.89
      },
      {
        "name": "军工集团",
        "change_pct": -2.4
      },
      {
        "name": "云计算数据中心",
        "change_pct": -2.51
      },
      {
        "name": "北斗导航",
        "change_pct": -1.93
      },
      {
        "name": "军民融合",
        "change_pct": -2.25
      },
      {
        "name": "智慧城市",
        "change_pct": -1.49
      },
      {
        "name": "军工",
        "change_pct": -2.3
      },
      {
        "name": "新能源汽车",
        "change_pct": -2.22
      },
      {
        "name": "中字头",
        "change_pct": -0.08
      },
      {
        "name": "无人机",
        "change_pct": -1.78
      },
      {
        "name": "数字经济",
        "change_pct": -1.23
      },
      {
        "name": "国产芯片",
        "change_pct": -2.85
      },
      {
        "name": "百度概念股",
        "change_pct": -1.18
      },
      {
        "name": "国产操作系统",
        "change_pct": -0.81
      },
      {
        "name": "信创",
        "change_pct": -0.99
      },
      {
        "name": "钠电池",
        "change_pct": -2.95
      },
      {
        "name": "国资云",
        "change_pct": -0.56
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.16
      },
      {
        "name": "F5G",
        "change_pct": -2.42
      },
      {
        "name": "芯粒Chiplet",
        "change_pct": -3.15
      },
      {
        "name": "数据要素",
        "change_pct": -1.02
      },
      {
        "name": "航天",
        "change_pct": -2.71
      },
      {
        "name": "国企改革",
        "change_pct": -1.45
      },
      {
        "name": "AI PC",
        "change_pct": -2.76
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.16
      },
      {
        "name": "CPU概念",
        "change_pct": -2.55
      },
      {
        "name": "华为产业链",
        "change_pct": -2.13
      },
      {
        "name": "AI算力芯片",
        "change_pct": -1.12
      },
      {
        "name": "交换机",
        "change_pct": -2.64
      },
      {
        "name": "服务器",
        "change_pct": -2.18
      },
      {
        "name": "智能电网",
        "change_pct": -1.96
      },
      {
        "name": "液冷服务器",
        "change_pct": -3.29
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.18
      },
      {
        "name": "算力一体机",
        "change_pct": -0.44
      },
      {
        "name": "海洋经济",
        "change_pct": -2.62
      },
      {
        "name": "太空算力",
        "change_pct": -2.33
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 100,
    "hot_rank_chg": -37,
    "stock_cnt": 5775,
    "price": "7.70",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5430988400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "人形机器人",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": -2.02
      },
      {
        "name": "强势人气股",
        "change_pct": -2.96
      },
      {
        "name": "工业自动化",
        "change_pct": -2.53
      },
      {
        "name": "大飞机",
        "change_pct": -2.11
      },
      {
        "name": "军民融合",
        "change_pct": -2.25
      },
      {
        "name": "风电",
        "change_pct": -1.93
      },
      {
        "name": "军工",
        "change_pct": -2.3
      },
      {
        "name": "机器人",
        "change_pct": -2.09
      },
      {
        "name": "智能制造",
        "change_pct": -2.12
      },
      {
        "name": "工业母机",
        "change_pct": -2.2
      },
      {
        "name": "减速器",
        "change_pct": -1.27
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600715", "name": "文投控股", "hot_rank": 1, "hot_rank_chg": 6, "stock_cnt": 5775, "price": "3.40", "change": "10.03", "market_id": "17", "circulate_market_value": "9732065600.00", "change_type": "1", "change_section": "18", "change_days": "10", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.1}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "游戏", "change_pct": -0.23}, {"name": "影视", "change_pct": 2.3}, {"name": "国企改革", "change_pct": -1.45}, {"name": "短剧/互动影游", "change_pct": 0.33}, {"name": "AI视频", "change_pct": -0.53}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5775, "price": "4.82", "change": "-6.59", "market_id": "33", "circulate_market_value": "7620281500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -3.59}, {"name": "体外诊断", "change_pct": -2.84}, {"name": "医疗器械", "change_pct": -2.6}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "基因测序", "change_pct": -3.56}, {"name": "预制菜", "change_pct": -1.09}, {"name": "水产养殖", "change_pct": -2.38}, {"name": "新冠病毒防治", "change_pct": -2.0}, {"name": "海洋经济", "change_pct": -2.62}]}, {"code": "603366", "name": "日出东方", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5775, "price": "13.90", "change": "5.54", "market_id": "17", "circulate_market_value": "11301368600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5775, "price": "19.75", "change": "-9.98", "market_id": "33", "circulate_market_value": "9077333000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5775, "price": "6.46", "change": "-10.03", "market_id": "17", "circulate_market_value": "5715675700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.53}, {"name": "优化生育（三孩）", "change_pct": -1.83}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "信托", "change_pct": -0.66}, {"name": "民营医院", "change_pct": -1.84}, {"name": "社区团购", "change_pct": -2.43}, {"name": "大金融", "change_pct": 0.61}, {"name": "餐饮", "change_pct": -1.05}, {"name": "首发经济", "change_pct": -2.01}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 10, "stock_cnt": 5775, "price": "5.73", "change": "-10.05", "market_id": "17", "circulate_market_value": "7649853500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.96}, {"name": "氢能源/燃料电池", "change_pct": -1.98}, {"name": "物联网", "change_pct": -1.6}, {"name": "LED", "change_pct": -2.89}, {"name": "卫星互联网", "change_pct": -2.85}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 7, "hot_rank_chg": 85, "stock_cnt": 5775, "price": "14.30", "change": "10.00", "market_id": "17", "circulate_market_value": "15679874000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "600825", "name": "新华传媒", "hot_rank": 8, "hot_rank_chg": 13, "stock_cnt": 5775, "price": "13.11", "change": "-10.02", "market_id": "17", "circulate_market_value": "13698480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5775, "price": "466.20", "change": "-8.39", "market_id": "33", "circulate_market_value": "517452630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 10, "hot_rank_chg": 3, "stock_cnt": 5775, "price": "26.75", "change": "0.38", "market_id": "33", "circulate_market_value": "20377230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 11, "hot_rank_chg": -7, "stock_cnt": 5775, "price": "84.37", "change": "-9.95", "market_id": "33", "circulate_market_value": "116963964000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 12, "hot_rank_chg": -1, "stock_cnt": 5775, "price": "10.33", "change": "-5.66", "market_id": "33", "circulate_market_value": "6199205800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -1.58}, {"name": "边缘计算", "change_pct": -1.03}, {"name": "核电", "change_pct": -2.46}, {"name": "海工装备", "change_pct": -2.25}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "云计算数据中心", "change_pct": -2.51}, {"name": "冷链", "change_pct": -1.98}, {"name": "地热", "change_pct": -3.56}, {"name": "储能", "change_pct": -2.17}, {"name": "碳中和", "change_pct": -1.87}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -2.84}, {"name": "汽车热管理", "change_pct": -2.3}, {"name": "热泵", "change_pct": -2.55}, {"name": "液冷服务器", "change_pct": -3.29}, {"name": "蜜雪冰城概念股", "change_pct": -2.28}, {"name": "海洋经济", "change_pct": -2.62}]}, {"code": "603466", "name": "风语筑", "hot_rank": 13, "hot_rank_chg": 21, "stock_cnt": 5775, "price": "16.50", "change": "2.93", "market_id": "17", "circulate_market_value": "9814727400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 14, "hot_rank_chg": 8, "stock_cnt": 5775, "price": "58.10", "change": "2.65", "market_id": "33", "circulate_market_value": "11769657300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 15, "hot_rank_chg": -9, "stock_cnt": 5775, "price": "13.63", "change": "-7.66", "market_id": "33", "circulate_market_value": "47404190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 16, "hot_rank_chg": 64, "stock_cnt": 5775, "price": "9.59", "change": "-4.00", "market_id": "33", "circulate_market_value": "10164970100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.36}, {"name": "电子烟", "change_pct": -2.06}, {"name": "一带一路", "change_pct": -1.9}, {"name": "造纸", "change_pct": -1.6}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "包装印刷", "change_pct": -2.13}, {"name": "卫星互联网", "change_pct": -2.85}, {"name": "太空算力", "change_pct": -2.33}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 17, "hot_rank_chg": 28, "stock_cnt": 5775, "price": "22.23", "change": "6.26", "market_id": "17", "circulate_market_value": "4694157500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 18, "hot_rank_chg": -9, "stock_cnt": 5775, "price": "187.58", "change": "-8.76", "market_id": "33", "circulate_market_value": "235361080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 19, "hot_rank_chg": 37, "stock_cnt": 5775, "price": "2.69", "change": "-4.27", "market_id": "17", "circulate_market_value": "9387530200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.24}, {"name": "车联网/车路云", "change_pct": -1.79}, {"name": "超高清视频", "change_pct": -1.19}, {"name": "人工智能", "change_pct": -1.76}, {"name": "云计算数据中心", "change_pct": -2.51}, {"name": "影视", "change_pct": 2.3}, {"name": "智慧城市", "change_pct": -1.49}, {"name": "国产芯片", "change_pct": -2.85}, {"name": "振兴东北", "change_pct": -2.16}, {"name": "传媒", "change_pct": -0.96}, {"name": "低价股", "change_pct": -1.82}, {"name": "国企改革", "change_pct": -1.45}, {"name": "在线教育", "change_pct": -0.84}, {"name": "医疗信息化", "change_pct": -1.2}, {"name": "AI大模型/智能体", "change_pct": -1.52}, {"name": "短剧/互动影游", "change_pct": 0.33}, {"name": "IP经济/谷子经济", "change_pct": -0.96}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 20, "hot_rank_chg": 0, "stock_cnt": 5775, "price": "4.30", "change": "-8.90", "market_id": "17", "circulate_market_value": "5613520600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.96}, {"name": "高速公路", "change_pct": -0.8}, {"name": "振兴东北", "change_pct": -2.16}, {"name": "黑龙江自贸区", "change_pct": -2.14}]}, {"code": "603706", "name": "东方环宇", "hot_rank": 21, "hot_rank_chg": 43, "stock_cnt": 5775, "price": "27.75", "change": "3.27", "market_id": "17", "circulate_market_value": "5255370300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002578", "name": "闽发铝业", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5775, "price": "5.44", "change": "-9.93", "market_id": "33", "circulate_market_value": "4684724300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -2.13}, {"name": "一带一路", "change_pct": -1.9}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "福建自贸/海西概念", "change_pct": -3.36}, {"name": "光伏", "change_pct": -3.02}, {"name": "有色金属", "change_pct": -2.78}, {"name": "新能源汽车", "change_pct": -2.22}, {"name": "新能源车零部件", "change_pct": -1.86}, {"name": "自贸区", "change_pct": -2.08}, {"name": "液冷服务器", "change_pct": -3.29}]}, {"code": "002156", "name": "通富微电", "hot_rank": 23, "hot_rank_chg": -11, "stock_cnt": 5775, "price": "46.50", "change": "-3.85", "market_id": "33", "circulate_market_value": "70561528000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 24, "hot_rank_chg": 44, "stock_cnt": 5775, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "3643936300.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "AI游戏", "xgb_concepts": [{"name": "手游", "change_pct": -0.1}, {"name": "ST摘帽", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "人工智能", "change_pct": -1.76}, {"name": "VR&AR", "change_pct": -2.36}, {"name": "游戏", "change_pct": -0.23}, {"name": "动漫", "change_pct": 0.83}, {"name": "腾讯概念股", "change_pct": -1.45}, {"name": "快手概念股", "change_pct": -1.67}, {"name": "NFT", "change_pct": -1.16}, {"name": "元宇宙", "change_pct": -1.1}, {"name": "虚拟数字人", "change_pct": -1.11}, {"name": "字节跳动概念股", "change_pct": -1.57}, {"name": "云游戏", "change_pct": -1.64}, {"name": "华为产业链", "change_pct": -2.13}, {"name": "IP经济/谷子经济", "change_pct": -0.96}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 25, "hot_rank_chg": -15, "stock_cnt": 5775, "price": "696.00", "change": "-0.70", "market_id": "17", "circulate_market_value": "20941053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 26, "hot_rank_chg": -9, "stock_cnt": 5775, "price": "2.73", "change": "-9.90", "market_id": "33", "circulate_market_value": "12009295800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -2.76}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "京津冀", "change_pct": -1.41}, {"name": "旅游", "change_pct": -1.27}, {"name": "园林", "change_pct": -2.07}, {"name": "海绵城市", "change_pct": -1.49}, {"name": "固废处理", "change_pct": -1.72}, {"name": "光伏", "change_pct": -3.02}, {"name": "风电", "change_pct": -1.93}, {"name": "雄安新区", "change_pct": -1.73}, {"name": "北京城市规划", "change_pct": -2.26}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -1.97}, {"name": "储能", "change_pct": -2.17}, {"name": "碳中和", "change_pct": -1.87}, {"name": "乡村振兴", "change_pct": -1.84}, {"name": "汽车拆解", "change_pct": -2.43}, {"name": "土壤修复", "change_pct": -1.89}, {"name": "核污染防治", "change_pct": -3.11}, {"name": "东数西算/算力", "change_pct": -1.16}, {"name": "新型城镇化", "change_pct": -2.0}, {"name": "低价股", "change_pct": -1.82}, {"name": "西部大开发", "change_pct": -2.12}]}, {"code": "601595", "name": "上海电影", "hot_rank": 27, "hot_rank_chg": 9, "stock_cnt": 5775, "price": "41.20", "change": "-2.25", "market_id": "17", "circulate_market_value": "18465840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 28, "hot_rank_chg": 7, "stock_cnt": 5775, "price": "124.99", "change": "-10.94", "market_id": "33", "circulate_market_value": "136037620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 29, "hot_rank_chg": 0, "stock_cnt": 5775, "price": "9.60", "change": "-4.38", "market_id": "33", "circulate_market_value": "4547330700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.1}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "VR&AR", "change_pct": -2.36}, {"name": "游戏", "change_pct": -0.23}, {"name": "影视", "change_pct": 2.3}, {"name": "直播/短视频", "change_pct": -2.06}, {"name": "动漫", "change_pct": 0.83}, {"name": "腾讯概念股", "change_pct": -1.45}, {"name": "传媒", "change_pct": -0.96}, {"name": "元宇宙", "change_pct": -1.1}, {"name": "短剧/互动影游", "change_pct": 0.33}, {"name": "IP经济/谷子经济", "change_pct": -0.96}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 30, "hot_rank_chg": 20, "stock_cnt": 5775, "price": "7.73", "change": "-10.01", "market_id": "17", "circulate_market_value": "3542260100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -2.19}, {"name": "福建自贸/海西概念", "change_pct": -3.36}, {"name": "自贸区", "change_pct": -2.08}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 31, "hot_rank_chg": 0, "stock_cnt": 5775, "price": "5.04", "change": "-6.67", "market_id": "17", "circulate_market_value": "5849134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.96}, {"name": "纺织服装", "change_pct": -1.4}, {"name": "浙江国企改革", "change_pct": -1.48}, {"name": "影视", "change_pct": 2.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -1.45}, {"name": "短剧/互动影游", "change_pct": 0.33}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 32, "hot_rank_chg": 8, "stock_cnt": 5775, "price": "23.71", "change": "0.81", "market_id": "33", "circulate_market_value": "11375468600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 33, "hot_rank_chg": 24, "stock_cnt": 5775, "price": "9.80", "change": "-10.01", "market_id": "17", "circulate_market_value": "6289475500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -2.71}, {"name": "农业种植", "change_pct": -1.8}, {"name": "湖南国企改革", "change_pct": -2.01}, {"name": "乡村振兴", "change_pct": -1.84}, {"name": "休闲食品", "change_pct": -2.68}, {"name": "食品", "change_pct": -1.86}, {"name": "食品安全", "change_pct": -1.29}, {"name": "社区团购", "change_pct": -2.43}, {"name": "大农业", "change_pct": -1.16}, {"name": "预制菜", "change_pct": -1.09}, {"name": "人造肉", "change_pct": -2.21}, {"name": "国企改革", "change_pct": -1.45}]}, {"code": "002187", "name": "广百股份", "hot_rank": 34, "hot_rank_chg": 187, "stock_cnt": 5775, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "4885235600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -2.53}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "粤港澳大湾区", "change_pct": -1.52}, {"name": "物业管理", "change_pct": -2.69}, {"name": "预制菜", "change_pct": -1.09}, {"name": "地摊经济", "change_pct": -1.95}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 35, "hot_rank_chg": -10, "stock_cnt": 5775, "price": "18.37", "change": "0.27", "market_id": "33", "circulate_market_value": "3258985000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 36, "hot_rank_chg": 16, "stock_cnt": 5775, "price": "68.15", "change": "-9.99", "market_id": "17", "circulate_market_value": "164360680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 37, "hot_rank_chg": -22, "stock_cnt": 5775, "price": "116.79", "change": "-4.93", "market_id": "17", "circulate_market_value": "32185966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 38, "hot_rank_chg": 86, "stock_cnt": 5775, "price": "7.95", "change": "9.96", "market_id": "33", "circulate_market_value": "3585661600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.79}, {"name": "手游", "change_pct": -0.1}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "游戏", "change_pct": -0.23}, {"name": "物联网", "change_pct": -1.6}, {"name": "机器人", "change_pct": -2.09}, {"name": "无人机", "change_pct": -1.78}, {"name": "国产芯片", "change_pct": -2.85}, {"name": "5G消息/RCS", "change_pct": -1.05}, {"name": "低空经济", "change_pct": -2.21}, {"name": "无人物流车", "change_pct": -1.04}]}, {"code": "002149", "name": "西部材料", "hot_rank": 39, "hot_rank_chg": 40, "stock_cnt": 5775, "price": "37.15", "change": "-5.35", "market_id": "33", "circulate_market_value": "18134368000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603536", "name": "惠发食品", "hot_rank": 40, "hot_rank_chg": 7, "stock_cnt": 5775, "price": "11.74", "change": "-9.97", "market_id": "17", "circulate_market_value": "2823848700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.9}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "食品", "change_pct": -1.86}, {"name": "社区团购", "change_pct": -2.43}, {"name": "预制菜", "change_pct": -1.09}, {"name": "回购", "change_pct": -2.57}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 41, "hot_rank_chg": -17, "stock_cnt": 5775, "price": "6.73", "change": "-7.81", "market_id": "33", "circulate_market_value": "12888572200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -3.36}, {"name": "林业", "change_pct": -3.45}, {"name": "碳中和", "change_pct": -1.87}, {"name": "自贸区", "change_pct": -2.08}]}, {"code": "600853", "name": "龙建股份", "hot_rank": 42, "hot_rank_chg": 115, "stock_cnt": 5775, "price": "4.18", "change": "-0.71", "market_id": "17", "circulate_market_value": "4237284900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -1.9}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "水利", "change_pct": -1.52}, {"name": "智慧城市", "change_pct": -1.49}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": -2.84}, {"name": "振兴东北", "change_pct": -2.16}, {"name": "大基建", "change_pct": -2.03}, {"name": "中俄贸易", "change_pct": -1.13}, {"name": "新型城镇化", "change_pct": -2.0}, {"name": "黑龙江自贸区", "change_pct": -2.14}, {"name": "旧改", "change_pct": -2.26}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 43, "hot_rank_chg": -13, "stock_cnt": 5775, "price": "5.99", "change": "-10.06", "market_id": "33", "circulate_market_value": "4583193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -2.03}, {"name": "优化生育（三孩）", "change_pct": -1.83}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "医药商业", "change_pct": -2.22}, {"name": "保健品", "change_pct": -1.64}, {"name": "民营医院", "change_pct": -1.84}, {"name": "医药", "change_pct": -2.53}, {"name": "食品", "change_pct": -1.86}, {"name": "辅助生殖", "change_pct": -3.12}, {"name": "口腔", "change_pct": -2.51}, {"name": "医美", "change_pct": -2.31}, {"name": "新冠病毒防治", "change_pct": -2.0}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 44, "hot_rank_chg": -26, "stock_cnt": 5775, "price": "978.88", "change": "0.60", "market_id": "17", "circulate_market_value": "615572610000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 45, "hot_rank_chg": -3, "stock_cnt": 5775, "price": "20.80", "change": "-10.00", "market_id": "33", "circulate_market_value": "3956108000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 46, "hot_rank_chg": -27, "stock_cnt": 5775, "price": "31.50", "change": "-4.83", "market_id": "33", "circulate_market_value": "32183549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 47, "hot_rank_chg": 36, "stock_cnt": 5775, "price": "5.63", "change": "3.30", "market_id": "17", "circulate_market_value": "3148969000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.1}, {"name": "ST摘帽", "change_pct": -1.47}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "游戏", "change_pct": -0.23}, {"name": "影视", "change_pct": 2.3}, {"name": "短剧/互动影游", "change_pct": 0.33}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 48, "hot_rank_chg": -21, "stock_cnt": 5775, "price": "24.65", "change": "-1.79", "market_id": "33", "circulate_market_value": "12562388200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 49, "hot_rank_chg": 12, "stock_cnt": 5775, "price": "40.10", "change": "-7.50", "market_id": "17", "circulate_market_value": "795748100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 50, "hot_rank_chg": -11, "stock_cnt": 5775, "price": "82.20", "change": "-10.00", "market_id": "33", "circulate_market_value": "158858810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605255", "name": "天普股份", "hot_rank": 51, "hot_rank_chg": 104, "stock_cnt": 5775, "price": "73.82", "change": "10.00", "market_id": "17", "circulate_market_value": "9897785600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中昊芯英"}, {"code": "002396", "name": "星网锐捷", "hot_rank": 52, "hot_rank_chg": 44, "stock_cnt": 5775, "price": "25.20", "change": "-1.06", "market_id": "33", "circulate_market_value": "19086861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 53, "hot_rank_chg": -9, "stock_cnt": 5775, "price": "37.36", "change": "-3.21", "market_id": "17", "circulate_market_value": "31627232000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 54, "hot_rank_chg": -1, "stock_cnt": 5775, "price": "33.38", "change": "-8.95", "market_id": "17", "circulate_market_value": "31064427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 55, "hot_rank_chg": 5, "stock_cnt": 5775, "price": "13.01", "change": "0.78", "market_id": "33", "circulate_market_value": "7369882500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600977", "name": "中国电影", "hot_rank": 56, "hot_rank_chg": 507, "stock_cnt": 5775, "price": "17.05", "change": "10.00", "market_id": "17", "circulate_market_value": "31832350000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "影视院线"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 57, "hot_rank_chg": -43, "stock_cnt": 5775, "price": "39.98", "change": "-2.42", "market_id": "17", "circulate_market_value": "180031500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 58, "hot_rank_chg": 243, "stock_cnt": 5775, "price": "2.73", "change": "10.08", "market_id": "17", "circulate_market_value": "3988514400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "海参", "xgb_concepts": [{"name": "中药", "change_pct": -2.03}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "冷链", "change_pct": -1.98}, {"name": "医药", "change_pct": -2.53}, {"name": "食品", "change_pct": -1.86}, {"name": "食品安全", "change_pct": -1.29}, {"name": "预制菜", "change_pct": -1.09}, {"name": "低价股", "change_pct": -1.82}, {"name": "水产养殖", "change_pct": -2.38}, {"name": "海洋经济", "change_pct": -2.62}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 59, "hot_rank_chg": -26, "stock_cnt": 5775, "price": "41.60", "change": "-5.22", "market_id": "17", "circulate_market_value": "102071684000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 60, "hot_rank_chg": -11, "stock_cnt": 5775, "price": "10.51", "change": "-10.02", "market_id": "33", "circulate_market_value": "3513061200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.45}, {"name": "饲料", "change_pct": 0.24}, {"name": "一带一路", "change_pct": -1.9}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "保健品", "change_pct": -1.64}, {"name": "山东国企改革", "change_pct": -2.21}, {"name": "污水处理", "change_pct": -1.72}, {"name": "环保", "change_pct": -1.97}, {"name": "食品", "change_pct": -1.86}, {"name": "预制菜", "change_pct": -1.09}, {"name": "国企改革", "change_pct": -1.45}, {"name": "水产养殖", "change_pct": -2.38}, {"name": "广西概念", "change_pct": -1.64}]}, {"code": "301218", "name": "华是科技", "hot_rank": 61, "hot_rank_chg": 334, "stock_cnt": 5775, "price": "99.86", "change": "15.31", "market_id": "33", "circulate_market_value": "7160277700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 62, "hot_rank_chg": -25, "stock_cnt": 5775, "price": "31.48", "change": "-3.50", "market_id": "17", "circulate_market_value": "22798710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 63, "hot_rank_chg": -40, "stock_cnt": 5775, "price": "3.18", "change": "-4.50", "market_id": "17", "circulate_market_value": "7035206400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -1.6}, {"name": "云计算数据中心", "change_pct": -2.51}, {"name": "光通信", "change_pct": -4.85}, {"name": "林业", "change_pct": -3.45}, {"name": "军民融合", "change_pct": -2.25}, {"name": "军工", "change_pct": -2.3}, {"name": "人造肉", "change_pct": -2.21}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 64, "hot_rank_chg": 42, "stock_cnt": 5775, "price": "28.88", "change": "-2.27", "market_id": "17", "circulate_market_value": "12675340600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 65, "hot_rank_chg": -24, "stock_cnt": 5775, "price": "52.70", "change": "-3.21", "market_id": "17", "circulate_market_value": "94302148000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603725", "name": "天安新材", "hot_rank": 66, "hot_rank_chg": 112, "stock_cnt": 5775, "price": "12.38", "change": "-5.93", "market_id": "17", "circulate_market_value": "3774138100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.96}, {"name": "装配式建筑", "change_pct": -2.25}, {"name": "汽车零部件", "change_pct": -1.79}, {"name": "家具家居", "change_pct": -1.37}, {"name": "耐火材料", "change_pct": -4.23}, {"name": "机器人", "change_pct": -2.09}, {"name": "旧改", "change_pct": -2.26}, {"name": "回购", "change_pct": -2.57}]}, {"code": "605488", "name": "福莱新材", "hot_rank": 67, "hot_rank_chg": -39, "stock_cnt": 5775, "price": "52.40", "change": "-7.63", "market_id": "17", "circulate_market_value": "15640281000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 68, "hot_rank_chg": -1, "stock_cnt": 5775, "price": "13.84", "change": "-10.01", "market_id": "17", "circulate_market_value": "4729950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 69, "hot_rank_chg": -10, "stock_cnt": 5775, "price": "59.76", "change": "-8.31", "market_id": "33", "circulate_market_value": "43340137000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002593", "name": "日上集团", "hot_rank": 70, "hot_rank_chg": 4, "stock_cnt": 5775, "price": "4.75", "change": "-9.18", "market_id": "33", "circulate_market_value": "2662395600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.79}, {"name": "福建自贸/海西概念", "change_pct": -3.36}, {"name": "装配式建筑", "change_pct": -2.25}, {"name": "汽车零部件", "change_pct": -1.79}, {"name": "新型城镇化", "change_pct": -2.0}, {"name": "胎压监测", "change_pct": -2.2}, {"name": "自贸区", "change_pct": -2.08}]}, {"code": "000823", "name": "超声电子", "hot_rank": 71, "hot_rank_chg": 0, "stock_cnt": 5775, "price": "17.41", "change": "-8.56", "market_id": "33", "circulate_market_value": "10357769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 72, "hot_rank_chg": 375, "stock_cnt": 5775, "price": "22.15", "change": "2.74", "market_id": "33", "circulate_market_value": "25386236000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 73, "hot_rank_chg": -35, "stock_cnt": 5775, "price": "4.30", "change": "-8.12", "market_id": "33", "circulate_market_value": "11405967500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -2.96}, {"name": "装修装饰", "change_pct": -2.2}, {"name": "装配式建筑", "change_pct": -2.25}, {"name": "破净股", "change_pct": -1.19}, {"name": "航天", "change_pct": -2.71}, {"name": "旧改", "change_pct": -2.26}]}, {"code": "300364", "name": "中文在线", "hot_rank": 74, "hot_rank_chg": -23, "stock_cnt": 5775, "price": "27.73", "change": "2.21", "market_id": "33", "circulate_market_value": "18331905000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 75, "hot_rank_chg": 68, "stock_cnt": 5775, "price": "12.24", "change": "-10.00", "market_id": "17", "circulate_market_value": "8151840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.53}]}, {"code": "002185", "name": "华天科技", "hot_rank": 76, "hot_rank_chg": -28, "stock_cnt": 5775, "price": "14.35", "change": "-2.98", "market_id": "33", "circulate_market_value": "47786475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 77, "hot_rank_chg": -4, "stock_cnt": 5775, "price": "14.42", "change": "-5.32", "market_id": "33", "circulate_market_value": "9519026900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000802", "name": "北京文化", "hot_rank": 78, "hot_rank_chg": 980, "stock_cnt": 5775, "price": "4.21", "change": "6.58", "market_id": "33", "circulate_market_value": "3012440300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 2.3}, {"name": "旅游", "change_pct": -1.27}, {"name": "短剧/互动影游", "change_pct": 0.33}, {"name": "IP经济/谷子经济", "change_pct": -0.96}]}, {"code": "002506", "name": "协鑫集成", "hot_rank": 79, "hot_rank_chg": -17, "stock_cnt": 5775, "price": "2.37", "change": "-9.20", "market_id": "33", "circulate_market_value": "13851328000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": -0.51}, {"name": "光伏", "change_pct": -3.02}, {"name": "储能", "change_pct": -2.17}, {"name": "乡村振兴", "change_pct": -1.84}, {"name": "颗粒硅", "change_pct": -3.57}, {"name": "BIPV概念", "change_pct": -2.02}, {"name": "低价股", "change_pct": -1.82}, {"name": "钙钛矿电池", "change_pct": -3.67}, {"name": "异质结电池HJT", "change_pct": -3.67}, {"name": "华为产业链", "change_pct": -2.13}]}, {"code": "001258", "name": "立新能源", "hot_rank": 80, "hot_rank_chg": 389, "stock_cnt": 5775, "price": "9.63", "change": "7.48", "market_id": "33", "circulate_market_value": "8987887100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -2.32}, {"name": "新疆国企改革", "change_pct": -1.84}, {"name": "新疆概念", "change_pct": -1.74}, {"name": "光伏", "change_pct": -3.02}, {"name": "风电", "change_pct": -1.93}, {"name": "新能源汽车", "change_pct": -2.22}, {"name": "储能", "change_pct": -2.17}, {"name": "国企改革", "change_pct": -1.45}]}, {"code": "301052", "name": "果麦文化", "hot_rank": 81, "hot_rank_chg": -11, "stock_cnt": 5775, "price": "46.09", "change": "5.04", "market_id": "33", "circulate_market_value": "3696506300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603396", "name": "金辰股份", "hot_rank": 82, "hot_rank_chg": 90, "stock_cnt": 5775, "price": "35.32", "change": "10.00", "market_id": "17", "circulate_market_value": "4892790500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏设备"}, {"code": "600664", "name": "哈药股份", "hot_rank": 83, "hot_rank_chg": 85, "stock_cnt": 5775, "price": "5.17", "change": "-8.98", "market_id": "17", "circulate_market_value": "13020696100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.99}, {"name": "工业大麻", "change_pct": -1.36}, {"name": "中药", "change_pct": -2.03}, {"name": "保健品", "change_pct": -1.64}, {"name": "民营医院", "change_pct": -1.84}, {"name": "医药", "change_pct": -2.53}, {"name": "化学原料药", "change_pct": -2.35}, {"name": "流感", "change_pct": -2.73}, {"name": "振兴东北", "change_pct": -2.16}, {"name": "食品", "change_pct": -1.86}, {"name": "肝炎概念", "change_pct": -2.51}]}, {"code": "002313", "name": "日海智能", "hot_rank": 84, "hot_rank_chg": -19, "stock_cnt": 5775, "price": "9.32", "change": "-3.02", "market_id": "33", "circulate_market_value": "3489215100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.79}, {"name": "边缘计算", "change_pct": -1.03}, {"name": "无人驾驶", "change_pct": -1.84}, {"name": "5G", "change_pct": -3.3}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "人工智能", "change_pct": -1.76}, {"name": "充电桩", "change_pct": -2.32}, {"name": "云计算数据中心", "change_pct": -2.51}, {"name": "北斗导航", "change_pct": -1.93}, {"name": "物联网", "change_pct": -1.6}, {"name": "智慧城市", "change_pct": -1.49}, {"name": "新能源汽车", "change_pct": -2.22}, {"name": "智能制造", "change_pct": -2.12}, {"name": "工业互联网", "change_pct": -1.31}, {"name": "小米概念股", "change_pct": -2.64}, {"name": "阿里巴巴概念股", "change_pct": -1.16}, {"name": "华为海思", "change_pct": -1.88}, {"name": "国企改革", "change_pct": -1.45}, {"name": "低空经济", "change_pct": -2.21}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 85, "hot_rank_chg": -53, "stock_cnt": 5775, "price": "246.02", "change": "-4.96", "market_id": "17", "circulate_market_value": "165010120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 86, "hot_rank_chg": 24, "stock_cnt": 5775, "price": "11.51", "change": "-5.58", "market_id": "17", "circulate_market_value": "4614151600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -1.54}, {"name": "新零售", "change_pct": -2.53}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "物业管理", "change_pct": -2.69}, {"name": "国企改革", "change_pct": -1.45}, {"name": "地摊经济", "change_pct": -1.95}]}, {"code": "600721", "name": "百花医药", "hot_rank": 87, "hot_rank_chg": 60, "stock_cnt": 5775, "price": "9.60", "change": "-10.03", "market_id": "17", "circulate_market_value": "3691657300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -2.78}, {"name": "股权转让", "change_pct": -2.46}, {"name": "新疆概念", "change_pct": -1.74}, {"name": "医药", "change_pct": -2.53}, {"name": "流感", "change_pct": -2.73}, {"name": "肝炎概念", "change_pct": -2.51}, {"name": "国资入股", "change_pct": -1.94}, {"name": "减肥药", "change_pct": -2.87}]}, {"code": "600637", "name": "东方明珠", "hot_rank": 88, "hot_rank_chg": 217, "stock_cnt": 5775, "price": "8.11", "change": "1.50", "market_id": "17", "circulate_market_value": "27265008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -0.24}, {"name": "高管增持", "change_pct": -1.77}, {"name": "超高清视频", "change_pct": -1.19}, {"name": "电竞", "change_pct": -1.07}, {"name": "上海国企改革", "change_pct": -1.54}, {"name": "游戏", "change_pct": -0.23}, {"name": "物联网", "change_pct": -1.6}, {"name": "教育", "change_pct": -0.89}, {"name": "智慧城市", "change_pct": -1.49}, {"name": "破净股", "change_pct": -1.19}, {"name": "传媒", "change_pct": -0.96}, {"name": "东数西算/算力", "change_pct": -1.16}, {"name": "国企改革", "change_pct": -1.45}, {"name": "在线教育", "change_pct": -0.84}, {"name": "AI大模型/智能体", "change_pct": -1.52}, {"name": "短剧/互动影游", "change_pct": 0.33}]}, {"code": "300006", "name": "莱美药业", "hot_rank": 89, "hot_rank_chg": 13, "stock_cnt": 5775, "price": "11.34", "change": "-4.14", "market_id": "33", "circulate_market_value": "11973009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.07}, {"name": "创新药", "change_pct": -2.78}, {"name": "医疗器械", "change_pct": -2.6}, {"name": "医药", "change_pct": -2.53}, {"name": "疫苗", "change_pct": -2.29}, {"name": "化学原料药", "change_pct": -2.35}, {"name": "肝炎概念", "change_pct": -2.51}, {"name": "干细胞", "change_pct": -3.11}, {"name": "眼科", "change_pct": -0.74}, {"name": "肿瘤疫苗", "change_pct": -4.63}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 90, "hot_rank_chg": -4, "stock_cnt": 5775, "price": "7.95", "change": "-3.05", "market_id": "33", "circulate_market_value": "12934600500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -1.99}, {"name": "电竞", "change_pct": -1.07}, {"name": "手游", "change_pct": -0.1}, {"name": "人工智能", "change_pct": -1.76}, {"name": "游戏", "change_pct": -0.23}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -1.23}, {"name": "腾讯概念股", "change_pct": -1.45}, {"name": "传媒", "change_pct": -0.96}, {"name": "快手概念股", "change_pct": -1.67}, {"name": "元宇宙", "change_pct": -1.1}, {"name": "虚拟数字人", "change_pct": -1.11}, {"name": "东数西算/算力", "change_pct": -1.16}, {"name": "web3.0", "change_pct": -1.62}, {"name": "AIGC概念", "change_pct": -1.62}, {"name": "数据要素", "change_pct": -1.02}, {"name": "字节跳动概念股", "change_pct": -1.57}, {"name": "AI营销", "change_pct": -2.03}, {"name": "ChatGPT", "change_pct": -1.4}, {"name": "智能眼镜/MR头显", "change_pct": -2.85}, {"name": "AI大模型/智能体", "change_pct": -1.52}, {"name": "人形机器人", "change_pct": -2.32}, {"name": "短剧/互动影游", "change_pct": 0.33}, {"name": "多模态", "change_pct": -1.43}, {"name": "AI视频", "change_pct": -0.53}, {"name": "IP经济/谷子经济", "change_pct": -0.96}, {"name": "小红书概念股", "change_pct": -2.28}]}, {"code": "601566", "name": "九牧王", "hot_rank": 91, "hot_rank_chg": -6, "stock_cnt": 5775, "price": "11.60", "change": "-6.98", "market_id": "17", "circulate_market_value": "6665790900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -1.4}, {"name": "福建自贸/海西概念", "change_pct": -3.36}, {"name": "自贸区", "change_pct": -2.08}, {"name": "IP经济/谷子经济", "change_pct": -0.96}]}, {"code": "600857", "name": "宁波中百", "hot_rank": 92, "hot_rank_chg": 336, "stock_cnt": 5775, "price": "16.30", "change": "8.67", "market_id": "17", "circulate_market_value": "3656414700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 93, "hot_rank_chg": -47, "stock_cnt": 5775, "price": "9.10", "change": "-6.57", "market_id": "33", "circulate_market_value": "8431328200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -4.37}, {"name": "光伏", "change_pct": -3.02}, {"name": "储能", "change_pct": -2.17}, {"name": "BIPV概念", "change_pct": -2.02}, {"name": "钙钛矿电池", "change_pct": -3.67}, {"name": "异质结电池HJT", "change_pct": -3.67}, {"name": "光伏胶膜", "change_pct": -2.16}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 94, "hot_rank_chg": -39, "stock_cnt": 5775, "price": "237.70", "change": "-0.96", "market_id": "33", "circulate_market_value": "1012748680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 95, "hot_rank_chg": 23, "stock_cnt": 5775, "price": "25.15", "change": "-0.32", "market_id": "33", "circulate_market_value": "71930828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 96, "hot_rank_chg": -2, "stock_cnt": 5775, "price": "8.85", "change": "1.84", "market_id": "17", "circulate_market_value": "2386068100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.36}, {"name": "高股息", "change_pct": 0.13}, {"name": "银行", "change_pct": 1.43}, {"name": "白马股", "change_pct": 0.15}, {"name": "破净股", "change_pct": -1.19}, {"name": "大金融", "change_pct": 0.61}]}, {"code": "603381", "name": "永臻股份", "hot_rank": 97, "hot_rank_chg": -31, "stock_cnt": 5775, "price": "20.31", "change": "-10.01", "market_id": "17", "circulate_market_value": "2886816400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000066", "name": "中国长城", "hot_rank": 98, "hot_rank_chg": 129, "stock_cnt": 5775, "price": "12.22", "change": "3.65", "market_id": "33", "circulate_market_value": "39416708000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -3.36}, {"name": "央企改革", "change_pct": -1.34}, {"name": "锂电池", "change_pct": -2.85}, {"name": "海工装备", "change_pct": -2.25}, {"name": "量子通信", "change_pct": -2.61}, {"name": "人工智能", "change_pct": -1.76}, {"name": "网络安全", "change_pct": -0.89}, {"name": "军工集团", "change_pct": -2.4}, {"name": "云计算数据中心", "change_pct": -2.51}, {"name": "北斗导航", "change_pct": -1.93}, {"name": "军民融合", "change_pct": -2.25}, {"name": "智慧城市", "change_pct": -1.49}, {"name": "军工", "change_pct": -2.3}, {"name": "新能源汽车", "change_pct": -2.22}, {"name": "中字头", "change_pct": -0.08}, {"name": "无人机", "change_pct": -1.78}, {"name": "数字经济", "change_pct": -1.23}, {"name": "国产芯片", "change_pct": -2.85}, {"name": "百度概念股", "change_pct": -1.18}, {"name": "国产操作系统", "change_pct": -0.81}, {"name": "信创", "change_pct": -0.99}, {"name": "钠电池", "change_pct": -2.95}, {"name": "国资云", "change_pct": -0.56}, {"name": "东数西算/算力", "change_pct": -1.16}, {"name": "F5G", "change_pct": -2.42}, {"name": "芯粒Chiplet", "change_pct": -3.15}, {"name": "数据要素", "change_pct": -1.02}, {"name": "航天", "change_pct": -2.71}, {"name": "国企改革", "change_pct": -1.45}, {"name": "AI PC", "change_pct": -2.76}, {"name": "OpenClaw概念", "change_pct": -0.16}, {"name": "CPU概念", "change_pct": -2.55}, {"name": "华为产业链", "change_pct": -2.13}, {"name": "AI算力芯片", "change_pct": -1.12}, {"name": "交换机", "change_pct": -2.64}, {"name": "服务器", "change_pct": -2.18}, {"name": "智能电网", "change_pct": -1.96}, {"name": "液冷服务器", "change_pct": -3.29}, {"name": "DeepSeek概念股", "change_pct": -1.18}, {"name": "算力一体机", "change_pct": -0.44}, {"name": "海洋经济", "change_pct": -2.62}, {"name": "太空算力", "change_pct": -2.33}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 99, "hot_rank_chg": -22, "stock_cnt": 5775, "price": "27.37", "change": "-6.94", "market_id": "17", "circulate_market_value": "108702337000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 100, "hot_rank_chg": -37, "stock_cnt": 5775, "price": "7.70", "change": "10.00", "market_id": "33", "circulate_market_value": "5430988400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "人形机器人", "xgb_concepts": [{"name": "通用航空", "change_pct": -2.02}, {"name": "强势人气股", "change_pct": -2.96}, {"name": "工业自动化", "change_pct": -2.53}, {"name": "大飞机", "change_pct": -2.11}, {"name": "军民融合", "change_pct": -2.25}, {"name": "风电", "change_pct": -1.93}, {"name": "军工", "change_pct": -2.3}, {"name": "机器人", "change_pct": -2.09}, {"name": "智能制造", "change_pct": -2.12}, {"name": "工业母机", "change_pct": -2.2}, {"name": "减速器", "change_pct": -1.27}]}];
const LIMIT_UP_POOL = [{"code": "300528", "name": "幸福蓝海", "price": 17.99, "change_pct": 20.01, "reason": "公司尝试定制剧、分账剧、短剧等多赛道产品", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 16.3, "first_limit_up": 1794535743, "break_limit_up_times": 2}, {"code": "002520", "name": "日发精机", "price": 7.7, "change_pct": 10.0, "reason": "1、公司拥有桁架机械手直角坐标机器人方面的专利，并已大量应用到自动化连线设备；\n2、公司产品涵盖了数控车床、高端磨床及柔性化生产线等，公司数控机床产品数控化率100%，行业排名第一", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 28.87, "first_limit_up": 1794540087, "break_limit_up_times": 8}, {"code": "000819", "name": "岳阳兴长", "price": 12.82, "change_pct": 10.04, "reason": "公司已建设100吨/年的MOFs材料中试生产装置，并与岳阳县高新技术产业开发区正式签署合作协议，打造MOFs材料产业化基地", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.4, "first_limit_up": 1794550779, "break_limit_up_times": 0}, {"code": "002425", "name": "凯撒文化", "price": 3.96, "change_pct": 10.0, "reason": "国内较早布局精品IP游戏的老牌厂商，主营移动端网络游戏等", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 13.7, "first_limit_up": 1794533709, "break_limit_up_times": 0}, {"code": "002205", "name": "国统股份", "price": 12.93, "change_pct": 10.04, "reason": "中国物流集团旗下，我国大型管道输水工程PCCP骨干供应商之一", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 15.77, "first_limit_up": 1794533814, "break_limit_up_times": 24}, {"code": "603686", "name": "福龙马", "price": 13.6, "change_pct": 10.03, "reason": "1、公司位于福建省龙岩市，通过 “自动驾驶 + AI + 模块化设计” 构建城市服务生态，研发了多种城市服务机器人，包含SD15智能清扫机器人、SD22智能清扫车、XD30智能洗扫车、XJ10巡检机器人等多款产品；\n2、公司与华为云计算签订2亿元技术开发合同，布局环卫自动驾驶 ", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 12.73, "first_limit_up": 1794538580, "break_limit_up_times": 2}, {"code": "002148", "name": "北纬科技", "price": 7.95, "change_pct": 9.96, "reason": "参股公司天宇经纬与宇树科技在机器狗应用领域开展生态合作", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 11.64, "first_limit_up": 1794533400, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 3.83, "change_pct": 10.06, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 4.54, "first_limit_up": 1794536274, "break_limit_up_times": 1}, {"code": "600537", "name": "*ST亿晶", "price": 2.01, "change_pct": 9.84, "reason": "公司预重整投资安排生变，中润光能拟入主", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 7.69, "first_limit_up": 1794551441, "break_limit_up_times": 0}, {"code": "603286", "name": "日盈电子", "price": 64.91, "change_pct": 10.0, "reason": "公司压阻式的电子皮肤样品已研发成功，在人形机器人新领域，公司以布局柔性触觉传感电子皮肤新产品为契机，结合发展战略及市场需求加快布局柔性线束等其他人形机器人产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.15, "first_limit_up": 1794546012, "break_limit_up_times": 1}, {"code": "002748", "name": "世龙实业", "price": 12.39, "change_pct": 10.04, "reason": "公司氯化亚砜下游客户主要集中于生产三氯蔗糖甜味剂、医药中间体、染料及其他精细化工行业,部分用于锂电池原料等行业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 11.79, "first_limit_up": 1794538359, "break_limit_up_times": 1}, {"code": "000665", "name": "湖北广电", "price": 4.58, "change_pct": 10.1, "reason": "1、公司上线了微短剧产品“小鳄微短剧”，具备大屏apk与微信小程序两种形态，大屏apk在内网运营，后续将进驻各互联网应用市场并与广电192号卡权益融合开展平台化运营；\n2、公司以全资子公司湖北广电网络数字科技此前作为平台与载体与武汉华鑫信股权投资集团有限公司共同投资建设光谷智算中心，计划基建投资规模为25亿元，部署算力规模不少于25000P。\n3、公司与华为在光传输、数据通信、光纤接入等ICT基础网络领域有合作", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.72, "first_limit_up": 1794533778, "break_limit_up_times": 0}, {"code": "605255", "name": "天普股份", "price": 73.82, "change_pct": 10.0, "reason": "控股股东等与中昊芯英签署的协议转让股份完成过户登记，中昊芯英为国内掌握TPU架构AI芯片核心研发技术并实现TPU芯片量产核心公司", "plates": ["国产芯片"], "limit_up_days": 4, "turnover_ratio": 1.83, "first_limit_up": 1794533434, "break_limit_up_times": 2}, {"code": "605318", "name": "法狮龙", "price": 84.26, "change_pct": 10.0, "reason": "设立全资子公司北宸星穹，服务于AI智算行业，满足客户算力调度、存算协同及推理响应需求", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.32, "first_limit_up": 1794539161, "break_limit_up_times": 0}, {"code": "600651", "name": "飞乐音响", "price": 5.18, "change_pct": 9.98, "reason": "公司的主要产品是汽车电子电器、汽车照明、模块封装及芯片测试服务、智能制造系统集成、检验检测、精密零件", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.92, "first_limit_up": 1794537534, "break_limit_up_times": 1}, {"code": "002853", "name": "皮阿诺", "price": 21.77, "change_pct": 10.01, "reason": "国内领先的定制家居公司，拟定向募资3.95亿元，实控人将变更为尹佳音", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.77, "first_limit_up": 1794534960, "break_limit_up_times": 1}, {"code": "001393", "name": "维通利", "price": 43.14, "change_pct": 9.99, "reason": "公司电连接产品配套数据中心电源系统、配电柜，已与西门子、施耐德、ABB、维谛技术、台达电子等客户建立稳定合作关系", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 19.68, "first_limit_up": 1794539079, "break_limit_up_times": 2}, {"code": "603396", "name": "金辰股份", "price": 35.32, "change_pct": 10.0, "reason": "公司为全球光伏组件设备龙头，与Singulus T此前成立合资企业\"Singulus Solar\"", "plates": ["光伏"], "limit_up_days": 3, "turnover_ratio": 14.29, "first_limit_up": 1794533444, "break_limit_up_times": 1}, {"code": "603636", "name": "南威软件", "price": 9.5, "change_pct": 9.95, "reason": "1、短剧业务方面，公司首部海外AI短剧于26年8月发行，2026年下半年预计出品25部高质量AI短剧，并按年产超100部的产能规划持续推进；\n2、公司首创数据要素操作系统，打造停车数据要素运营平台，推动相关数据产品进场交易，还构建了数据资源化、资产化、商品化的闭环体系，全面参与数据要素的生产、流通与应用等环节；\n3、公司以人工智能重构数字政府、公共安全等传统业务，推出政务专属大模型与面向C端的茶寿健康大模型；\n4、公司智算中心已落地3285万元算力租赁框架订单，并面向政企及海外文娱业务拓展算力服务", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 15.89, "first_limit_up": 1794548190, "break_limit_up_times": 3}, {"code": "002819", "name": "东方中科", "price": 21.7, "change_pct": 9.98, "reason": "1、电子测试测量领域领先的综合服务商；公司为党政机关、大型国有企业提供计算机网络系统、网络安全系统以及电子政务应用系统的规划、设计、实施、运维、技术支持等全面服务；\n2、控股子公司北汇信息2024年已中标中国一汽“脑机接口测试技术采购”项目，可提供自动驾驶互动测试验证等仿真系统", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.69, "first_limit_up": 1794533418, "break_limit_up_times": 0}, {"code": "600977", "name": "中国电影", "price": 17.05, "change_pct": 10.0, "reason": "公司中影制片厂承接短剧拍摄项目，参与出品《暗潮缉凶》《我叫赵甲第之锋芒》等剧集、微短剧项目", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 6.07, "first_limit_up": 1794535696, "break_limit_up_times": 12}, {"code": "600410", "name": "华胜天成", "price": 14.3, "change_pct": 10.0, "reason": "公司全面推进“AI+算力”战略，拥有新一代人工智能算力中心整体解决方案，并获头部科技企业智能计算ISV核心认证，为华为云软件认证合作伙伴、华为云服务合作伙伴和华为政企金牌合作伙伴", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.32, "first_limit_up": 1794534606, "break_limit_up_times": 3}, {"code": "002187", "name": "广百股份", "price": 6.97, "change_pct": 9.94, "reason": "1、公司是广州地区最大百货连锁零售企业，积极开发钻石DIY等定制商品，推出品牌IP盲盒；\n2、公司通过旗下广州商贸产业基金间接参股中科宇航", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 16.08, "first_limit_up": 1794533100, "break_limit_up_times": 5}, {"code": "002905", "name": "金逸影视", "price": 9.9, "change_pct": 10.0, "reason": "国内国内影投前五，院线前七的院线放映及发行方", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 2.36, "first_limit_up": 1794533532, "break_limit_up_times": 0}, {"code": "603166", "name": "福达股份", "price": 11.84, "change_pct": 10.04, "reason": "公司全自主开发精密齿轮减速器，完成10-30Nm减速器开发，为客户定制超10款产品，并战略入股长坂扬州机器人科技，布局谐波减速器、反向式行星滚柱丝杠等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.23, "first_limit_up": 1794538108, "break_limit_up_times": 0}, {"code": "001358", "name": "兴欣新材", "price": 26.64, "change_pct": 9.99, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 3.04, "first_limit_up": 1794533100, "break_limit_up_times": 0}, {"code": "600467", "name": "好当家", "price": 2.73, "change_pct": 10.08, "reason": "公司为海参养殖龙头，拥有国内面积最大、投资最多、产量最高的海参产业基地", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 18.69, "first_limit_up": 1794533100, "break_limit_up_times": 5}, {"code": "300237", "name": "美晨科技", "price": 3.26, "change_pct": 19.85, "reason": "公司撤销其他风险警示", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.31, "first_limit_up": 1794537495, "break_limit_up_times": 1}, {"code": "002739", "name": "儒意电影", "price": 10.05, "change_pct": 9.96, "reason": "国内领先的影院投资及运营商，影院经营的领军品牌；公司已上线精品短剧《对方正在输入中》，以竖屏桌面形式展现年轻人与手机APP互动；旗下万达影视正筹备制作2部小程序短剧，另有国内首部真人惊悚互动影游《千万别打开那扇门》在筹备推进中，覆盖短剧与互动影游方向", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 7.57, "first_limit_up": 1794537513, "break_limit_up_times": 1}, {"code": "002042", "name": "华孚时尚", "price": 3.62, "change_pct": 10.03, "reason": "公司上虞AIGC智算中心已对外租赁算力，阿克苏城市公共算力平台项目施工设备已进场，项目正在正常推进中", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.54, "first_limit_up": 1794534987, "break_limit_up_times": 6}, {"code": "603103", "name": "横店影视", "price": 19.31, "change_pct": 10.03, "reason": "公司已建立专门团队负责短剧、微短剧业务，围绕短剧精品化开展布局，依托影视投资制作发行与放映体系切入短剧内容领域", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1794533585, "break_limit_up_times": 0}, {"code": "002685", "name": "华东重机", "price": 5.54, "change_pct": 9.92, "reason": "1、公司拟收购锐信图芯股权并增资，交易完成后，公司持有锐信图芯43.18%股权，锐信图芯主营业务为GPU芯片及解决方案；\n2、全资子公司润星科技主要产品包括中高档数控机床、工业机器人、以及自动化交钥匙工程等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.09, "first_limit_up": 1794533100, "break_limit_up_times": 2}, {"code": "600715", "name": "文投控股", "price": 3.4, "change_pct": 10.03, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 10.9, "first_limit_up": 1794533440, "break_limit_up_times": 0}, {"code": "603767", "name": "中马传动", "price": 17.74, "change_pct": 9.98, "reason": "公司减速器应用于新能源汽车，表示目前未涉足机器人行业", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 6.96, "first_limit_up": 1794534097, "break_limit_up_times": 1}, {"code": "002124", "name": "天邦食品", "price": 2.31, "change_pct": 10.0, "reason": "公司养猪采用公司+家庭农场养殖模式，同时也是国内规模最大膨化水产饲料企业之一", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 17.75, "first_limit_up": 1794536451, "break_limit_up_times": 6}, {"code": "000766", "name": "通化金马", "price": 16.5, "change_pct": 10.0, "reason": "公司自主研发治疗轻、中度阿尔茨海默病的琥珀八氢氨吖啶片，为国家1.1类新药", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1794534204, "break_limit_up_times": 8}, {"code": "603928", "name": "兴业股份", "price": 11.96, "change_pct": 10.03, "reason": "公司已研发成功半导体光刻胶用酚醛树脂、特种半导体封装用酚醛树脂等一批特种有机合成功能新材料", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.65, "first_limit_up": 1794533632, "break_limit_up_times": 1}, {"code": "000595", "name": "新能股份", "price": 5.53, "change_pct": 9.94, "reason": "公司完成重大资产重组后，主营业务变更为风力发电、光伏发电及储能电站的投资运营，风光总装机容量达282.03万千瓦，已建成投运储能电站300MW/600MWh", "plates": ["光伏"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1794539823, "break_limit_up_times": 0}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};