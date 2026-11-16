const UPDATE_TIME = "2026-11-16 04:26";
const THS_HOT = [
  {
    "name": "短剧游戏",
    "rise": 0.44,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "猪肉",
    "rise": 1.28,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "冰雪产业",
    "rise": 1.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -3.19,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续330天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": -1.88,
    "rate": 0,
    "tag": "",
    "hotTag": "连续259天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -1.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "创新药",
    "rise": -0.84,
    "rate": 0,
    "tag": "",
    "hotTag": "连续160天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "机器人概念",
    "rise": -1.13,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "AI应用",
    "rise": -0.53,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续88天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": -2.54,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续153天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "储能",
    "rise": -0.75,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885921"
  },
  {
    "name": "兵装重组概念",
    "rise": -0.69,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "高股息精选",
    "rise": 0.84,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "高股息ETF",
    "code": "886072"
  },
  {
    "name": "文化传媒概念",
    "rise": 0.15,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "白酒概念",
    "rise": 0.47,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "消费ETF",
    "code": "885525"
  },
  {
    "name": "存储芯片",
    "rise": -2.64,
    "rate": 0,
    "tag": "",
    "hotTag": "连续283天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "886042"
  },
  {
    "name": "AI视频",
    "rise": -0.58,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "固态电池",
    "rise": -0.9,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "芯片概念",
    "rise": -1.99,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "光伏概念",
    "rise": -1.28,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  }
];
const THS_EVENTS = [
  {
    "title": "BLG夺S16全球总决赛冠军，B站向全体用户赠送7天大会员",
    "desc": "",
    "heat": 311668,
    "direction": "游戏",
    "themes": [
      "游戏",
      "手机游戏",
      "云游戏",
      "网络游戏",
      "电子竞技"
    ],
    "stocks": [
      {
        "name": "凯撒文化",
        "code": "002425",
        "chg": 10.10101
      }
    ]
  },
  {
    "title": "7000亿家电龙头，历史新高",
    "desc": "",
    "heat": 309178,
    "direction": "家用电器",
    "themes": [
      "小家电",
      "厨卫电器"
    ],
    "stocks": [
      {
        "name": "北鼎股份",
        "code": "300824",
        "chg": 19.944212
      }
    ]
  },
  {
    "title": "51个一类新药纳入新版医保目录 CAR-T疗法首次进入国家医保目录",
    "desc": "",
    "heat": 148021,
    "direction": "创新药",
    "themes": [
      "ADC药物",
      "PD-1",
      "创新药"
    ],
    "stocks": [
      {
        "name": "回盛生物",
        "code": "300871",
        "chg": 5.848949
      }
    ]
  },
  {
    "title": "新型储能“十五五”目标定了：2030年装机3亿千瓦，步入市场化阶段",
    "desc": "",
    "heat": 123601,
    "direction": "储能",
    "themes": [
      "储能"
    ],
    "stocks": [
      {
        "name": "领湃科技",
        "code": "300530",
        "chg": 20.008624
      }
    ]
  },
  {
    "title": "SpaceX首次成功实现“筷子夹飞船”",
    "desc": "",
    "heat": 54300,
    "direction": "SpaceX",
    "themes": [
      "商业航天"
    ],
    "stocks": [
      {
        "name": "ST创意",
        "code": "300366",
        "chg": 13.274336
      }
    ]
  },
  {
    "title": "中信建投：谷歌新模型发布、黄仁勋离任英伟达，持续推荐国产算力产业链",
    "desc": "",
    "heat": 10510,
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
        "chg": 9.927798
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黑龙江自贸区",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "小家电",
    "change": "+1.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+1.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车销售",
    "change": "+1.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+1.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "首发经济",
    "change": "+1.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "进口博览会",
    "change": "+1.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "植物奶",
    "change": "+1.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+1.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白酒",
    "change": "+1.03%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "冰雪产业",
    "change": "+0.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+0.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饮料",
    "change": "+0.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "啤酒",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+0.82%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中欧班列",
    "change": "+0.79%",
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
    "hot_rank": 2,
    "hot_rank_chg": 0,
    "stock_cnt": 5814,
    "price": "3.69",
    "change": "8.53",
    "market_id": "17",
    "circulate_market_value": "10562153600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "AI视频",
        "change_pct": -0.78
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 3,
    "hot_rank_chg": 5,
    "stock_cnt": 5814,
    "price": "4.56",
    "change": "-5.39",
    "market_id": "33",
    "circulate_market_value": "7209229000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -0.33
      },
      {
        "name": "体外诊断",
        "change_pct": -0.44
      },
      {
        "name": "医疗器械",
        "change_pct": -0.5
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "基因测序",
        "change_pct": -0.39
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "水产养殖",
        "change_pct": -2.46
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.38
      },
      {
        "name": "海洋经济",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 4,
    "hot_rank_chg": 17,
    "stock_cnt": 5814,
    "price": "5.95",
    "change": "3.84",
    "market_id": "17",
    "circulate_market_value": "7943565100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.54
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "LED",
        "change_pct": -1.21
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.28
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 5,
    "hot_rank_chg": -4,
    "stock_cnt": 5814,
    "price": "4.36",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "4012010600.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "4",
    "change_reason": "AI游戏",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "VR&AR",
        "change_pct": -1.55
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "动漫",
        "change_pct": -0.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.76
      },
      {
        "name": "快手概念股",
        "change_pct": -0.33
      },
      {
        "name": "NFT",
        "change_pct": -0.35
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.68
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.84
      },
      {
        "name": "云游戏",
        "change_pct": -0.86
      },
      {
        "name": "华为产业链",
        "change_pct": -1.19
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 7,
    "hot_rank_chg": 8,
    "stock_cnt": 5814,
    "price": "10.73",
    "change": "3.87",
    "market_id": "33",
    "circulate_market_value": "6439252500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.05
      },
      {
        "name": "边缘计算",
        "change_pct": -0.96
      },
      {
        "name": "核电",
        "change_pct": -0.75
      },
      {
        "name": "海工装备",
        "change_pct": -0.97
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.46
      },
      {
        "name": "冷链",
        "change_pct": 0.56
      },
      {
        "name": "地热",
        "change_pct": -0.71
      },
      {
        "name": "储能",
        "change_pct": -0.39
      },
      {
        "name": "碳中和",
        "change_pct": -0.27
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.99
      },
      {
        "name": "汽车热管理",
        "change_pct": -1.01
      },
      {
        "name": "热泵",
        "change_pct": -0.49
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.22
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -0.08
      },
      {
        "name": "海洋经济",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 9,
    "hot_rank_chg": -3,
    "stock_cnt": 5814,
    "price": "8.75",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3946482800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "四足机器人",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -1.18
      },
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "机器人",
        "change_pct": -1.34
      },
      {
        "name": "无人机",
        "change_pct": -1.85
      },
      {
        "name": "国产芯片",
        "change_pct": -2.43
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.09
      },
      {
        "name": "低空经济",
        "change_pct": -1.65
      },
      {
        "name": "无人物流车",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 11,
    "hot_rank_chg": 40,
    "stock_cnt": 5814,
    "price": "12.96",
    "change": "-0.38",
    "market_id": "33",
    "circulate_market_value": "7341558600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "石墨烯",
        "change_pct": -1.34
      },
      {
        "name": "军民融合",
        "change_pct": -1.76
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "LED",
        "change_pct": -1.21
      },
      {
        "name": "军工",
        "change_pct": -1.78
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.09
      },
      {
        "name": "海洋经济",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 12,
    "hot_rank_chg": 5,
    "stock_cnt": 5814,
    "price": "7.67",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "5375861800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.49
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.05
      },
      {
        "name": "物业管理",
        "change_pct": -0.58
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "地摊经济",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 13,
    "hot_rank_chg": 27,
    "stock_cnt": 5814,
    "price": "9.49",
    "change": "1.17",
    "market_id": "33",
    "circulate_market_value": "38337316000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -2.58
      },
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "京津冀",
        "change_pct": -0.41
      },
      {
        "name": "光伏",
        "change_pct": -1.98
      },
      {
        "name": "复牌股",
        "change_pct": -1.03
      },
      {
        "name": "碳中和",
        "change_pct": -0.27
      },
      {
        "name": "国产芯片",
        "change_pct": -2.43
      },
      {
        "name": "IGBT",
        "change_pct": -1.57
      },
      {
        "name": "颗粒硅",
        "change_pct": -2.26
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -2.42
      },
      {
        "name": "大硅片",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 15,
    "hot_rank_chg": 7,
    "stock_cnt": 5814,
    "price": "11.83",
    "change": "-9.76",
    "market_id": "17",
    "circulate_market_value": "12361023300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.93
      },
      {
        "name": "上海国企改革",
        "change_pct": 0.1
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": 0.4
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 17,
    "hot_rank_chg": 13,
    "stock_cnt": 5814,
    "price": "5.14",
    "change": "1.98",
    "market_id": "17",
    "circulate_market_value": "5965188200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "纺织服装",
        "change_pct": -0.24
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.06
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 18,
    "hot_rank_chg": -5,
    "stock_cnt": 5814,
    "price": "5.95",
    "change": "5.68",
    "market_id": "17",
    "circulate_market_value": "3327951200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 19,
    "hot_rank_chg": 0,
    "stock_cnt": 5814,
    "price": "5.81",
    "change": "-10.06",
    "market_id": "17",
    "circulate_market_value": "5140569000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.49
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "信托",
        "change_pct": 0.47
      },
      {
        "name": "民营医院",
        "change_pct": -0.42
      },
      {
        "name": "社区团购",
        "change_pct": -0.55
      },
      {
        "name": "大金融",
        "change_pct": 0.68
      },
      {
        "name": "餐饮",
        "change_pct": 0.32
      },
      {
        "name": "首发经济",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 22,
    "hot_rank_chg": 7,
    "stock_cnt": 5814,
    "price": "4.90",
    "change": "-9.93",
    "market_id": "33",
    "circulate_market_value": "4219696500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -1.44
      },
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.4
      },
      {
        "name": "光伏",
        "change_pct": -1.98
      },
      {
        "name": "有色金属",
        "change_pct": -1.87
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.8
      },
      {
        "name": "新能源车零部件",
        "change_pct": -1.29
      },
      {
        "name": "自贸区",
        "change_pct": -0.28
      },
      {
        "name": "液冷服务器",
        "change_pct": -2.22
      }
    ]
  },
  {
    "code": "002905",
    "name": "金逸影视",
    "hot_rank": 23,
    "hot_rank_chg": 19,
    "stock_cnt": 5814,
    "price": "10.89",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3805401600.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "电影院线",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "影视",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 26,
    "hot_rank_chg": 96,
    "stock_cnt": 5814,
    "price": "6.96",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "3189408900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -0.56
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.4
      },
      {
        "name": "自贸区",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 27,
    "hot_rank_chg": 14,
    "stock_cnt": 5814,
    "price": "4.73",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "6174872700.00",
    "change_type": "1",
    "change_section": "13",
    "change_days": "7",
    "change_reason": "冰雪旅游保障",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "高速公路",
        "change_pct": 1.66
      },
      {
        "name": "振兴东北",
        "change_pct": 0.59
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 28,
    "hot_rank_chg": -10,
    "stock_cnt": 5814,
    "price": "7.83",
    "change": "1.69",
    "market_id": "33",
    "circulate_market_value": "5522680400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": -2.08
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "工业自动化",
        "change_pct": -1.56
      },
      {
        "name": "大飞机",
        "change_pct": -2.35
      },
      {
        "name": "军民融合",
        "change_pct": -1.76
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "军工",
        "change_pct": -1.78
      },
      {
        "name": "机器人",
        "change_pct": -1.34
      },
      {
        "name": "智能制造",
        "change_pct": -1.42
      },
      {
        "name": "工业母机",
        "change_pct": -1.95
      },
      {
        "name": "减速器",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "600880",
    "name": "博瑞传播",
    "hot_rank": 29,
    "hot_rank_chg": -22,
    "stock_cnt": 5814,
    "price": "4.24",
    "change": "0.47",
    "market_id": "17",
    "circulate_market_value": "4634447900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.11
      },
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "教育",
        "change_pct": -0.08
      },
      {
        "name": "数字经济",
        "change_pct": -0.68
      },
      {
        "name": "知识产权",
        "change_pct": -0.23
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.76
      },
      {
        "name": "传媒",
        "change_pct": 0.4
      },
      {
        "name": "NFT",
        "change_pct": -0.35
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.68
      },
      {
        "name": "数据要素",
        "change_pct": -0.69
      },
      {
        "name": "教育信息化",
        "change_pct": -0.34
      },
      {
        "name": "AI营销",
        "change_pct": -0.47
      },
      {
        "name": "华为产业链",
        "change_pct": -1.19
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "AI视频",
        "change_pct": -0.78
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.74
      },
      {
        "name": "区块链",
        "change_pct": -0.41
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 30,
    "hot_rank_chg": 41,
    "stock_cnt": 5814,
    "price": "5.47",
    "change": "-8.68",
    "market_id": "33",
    "circulate_market_value": "4185319800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "医药商业",
        "change_pct": 0.25
      },
      {
        "name": "保健品",
        "change_pct": -0.03
      },
      {
        "name": "民营医院",
        "change_pct": -0.42
      },
      {
        "name": "医药",
        "change_pct": -0.77
      },
      {
        "name": "食品",
        "change_pct": 0.38
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.34
      },
      {
        "name": "口腔",
        "change_pct": -1.12
      },
      {
        "name": "医美",
        "change_pct": -0.07
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 31,
    "hot_rank_chg": 54,
    "stock_cnt": 5814,
    "price": "9.43",
    "change": "-1.67",
    "market_id": "33",
    "circulate_market_value": "9995377300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -1.16
      },
      {
        "name": "电子烟",
        "change_pct": -1.06
      },
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "造纸",
        "change_pct": -0.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "包装印刷",
        "change_pct": -0.43
      },
      {
        "name": "卫星互联网",
        "change_pct": -2.28
      },
      {
        "name": "太空算力",
        "change_pct": -3.22
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 32,
    "hot_rank_chg": -5,
    "stock_cnt": 5814,
    "price": "6.09",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "6136218900.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "工业自动化",
        "change_pct": -1.56
      },
      {
        "name": "机械",
        "change_pct": 0.1
      },
      {
        "name": "智能制造",
        "change_pct": -1.42
      },
      {
        "name": "国产芯片",
        "change_pct": -2.43
      },
      {
        "name": "信创",
        "change_pct": -1.12
      },
      {
        "name": "AI算力芯片",
        "change_pct": -2.74
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 35,
    "hot_rank_chg": -1,
    "stock_cnt": 5814,
    "price": "6.08",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "6923030700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "储能并网",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -0.31
      },
      {
        "name": "高铁轨交",
        "change_pct": -0.65
      },
      {
        "name": "航母",
        "change_pct": -1.58
      },
      {
        "name": "光伏",
        "change_pct": -1.98
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "军工",
        "change_pct": -1.78
      },
      {
        "name": "储能",
        "change_pct": -0.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "宁夏概念",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 37,
    "hot_rank_chg": 21,
    "stock_cnt": 5814,
    "price": "4.21",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "3386825000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 0.17
      },
      {
        "name": "养猪",
        "change_pct": 1.31
      },
      {
        "name": "大农业",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 38,
    "hot_rank_chg": 15,
    "stock_cnt": 5814,
    "price": "2.81",
    "change": "2.93",
    "market_id": "33",
    "circulate_market_value": "12361216600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -1.93
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "京津冀",
        "change_pct": -0.41
      },
      {
        "name": "旅游",
        "change_pct": 0.25
      },
      {
        "name": "园林",
        "change_pct": 0.11
      },
      {
        "name": "海绵城市",
        "change_pct": 0.57
      },
      {
        "name": "固废处理",
        "change_pct": -0.32
      },
      {
        "name": "光伏",
        "change_pct": -1.98
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "雄安新区",
        "change_pct": -0.4
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.09
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.57
      },
      {
        "name": "储能",
        "change_pct": -0.39
      },
      {
        "name": "碳中和",
        "change_pct": -0.27
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.05
      },
      {
        "name": "汽车拆解",
        "change_pct": 0.45
      },
      {
        "name": "土壤修复",
        "change_pct": -0.18
      },
      {
        "name": "核污染防治",
        "change_pct": -1.29
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.27
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.38
      },
      {
        "name": "低价股",
        "change_pct": -0.16
      },
      {
        "name": "西部大开发",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 42,
    "hot_rank_chg": 75,
    "stock_cnt": 5814,
    "price": "9.46",
    "change": "-9.99",
    "market_id": "33",
    "circulate_market_value": "3162089400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.31
      },
      {
        "name": "饲料",
        "change_pct": 0.17
      },
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "保健品",
        "change_pct": -0.03
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.6
      },
      {
        "name": "污水处理",
        "change_pct": -0.2
      },
      {
        "name": "环保",
        "change_pct": -0.57
      },
      {
        "name": "食品",
        "change_pct": 0.38
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "水产养殖",
        "change_pct": -2.46
      },
      {
        "name": "广西概念",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 45,
    "hot_rank_chg": -33,
    "stock_cnt": 5814,
    "price": "2.58",
    "change": "-5.50",
    "market_id": "17",
    "circulate_market_value": "3769365300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.33
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "冷链",
        "change_pct": 0.56
      },
      {
        "name": "医药",
        "change_pct": -0.77
      },
      {
        "name": "食品",
        "change_pct": 0.38
      },
      {
        "name": "食品安全",
        "change_pct": -0.99
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "低价股",
        "change_pct": -0.16
      },
      {
        "name": "水产养殖",
        "change_pct": -2.46
      },
      {
        "name": "海洋经济",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 47,
    "hot_rank_chg": -2,
    "stock_cnt": 5814,
    "price": "10.09",
    "change": "5.10",
    "market_id": "33",
    "circulate_market_value": "4779434100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "VR&AR",
        "change_pct": -1.55
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.54
      },
      {
        "name": "动漫",
        "change_pct": -0.64
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.76
      },
      {
        "name": "传媒",
        "change_pct": 0.4
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 57,
    "hot_rank_chg": 15,
    "stock_cnt": 5814,
    "price": "9.19",
    "change": "-6.22",
    "market_id": "17",
    "circulate_market_value": "5897987800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.49
      },
      {
        "name": "农业种植",
        "change_pct": -0.97
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.22
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.05
      },
      {
        "name": "休闲食品",
        "change_pct": 0.32
      },
      {
        "name": "食品",
        "change_pct": 0.38
      },
      {
        "name": "食品安全",
        "change_pct": -0.99
      },
      {
        "name": "社区团购",
        "change_pct": -0.55
      },
      {
        "name": "大农业",
        "change_pct": -0.18
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "人造肉",
        "change_pct": -0.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 58,
    "hot_rank_chg": 28,
    "stock_cnt": 5814,
    "price": "2.96",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "10329773000.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "AI微短剧",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.57
      },
      {
        "name": "车联网/车路云",
        "change_pct": -1.18
      },
      {
        "name": "超高清视频",
        "change_pct": -0.18
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.46
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "智慧城市",
        "change_pct": -0.67
      },
      {
        "name": "国产芯片",
        "change_pct": -2.43
      },
      {
        "name": "振兴东北",
        "change_pct": 0.59
      },
      {
        "name": "传媒",
        "change_pct": 0.4
      },
      {
        "name": "低价股",
        "change_pct": -0.16
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "在线教育",
        "change_pct": -0.34
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.34
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 60,
    "hot_rank_chg": 42,
    "stock_cnt": 5814,
    "price": "4.42",
    "change": "5.74",
    "market_id": "17",
    "circulate_market_value": "4480574000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "水利",
        "change_pct": 0.21
      },
      {
        "name": "智慧城市",
        "change_pct": -0.67
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.99
      },
      {
        "name": "振兴东北",
        "change_pct": 0.59
      },
      {
        "name": "大基建",
        "change_pct": -0.06
      },
      {
        "name": "中俄贸易",
        "change_pct": 0.42
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.38
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": 2.3
      },
      {
        "name": "旧改",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "603536",
    "name": "惠发食品",
    "hot_rank": 62,
    "hot_rank_chg": 58,
    "stock_cnt": 5814,
    "price": "10.82",
    "change": "-7.84",
    "market_id": "17",
    "circulate_market_value": "2602559100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.36
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "食品",
        "change_pct": 0.38
      },
      {
        "name": "社区团购",
        "change_pct": -0.55
      },
      {
        "name": "预制菜",
        "change_pct": 0.03
      },
      {
        "name": "回购",
        "change_pct": -1.66
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 68,
    "hot_rank_chg": 66,
    "stock_cnt": 5814,
    "price": "10.94",
    "change": "-4.95",
    "market_id": "17",
    "circulate_market_value": "4385648900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": 0.1
      },
      {
        "name": "新零售",
        "change_pct": 0.49
      },
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "物业管理",
        "change_pct": -0.58
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "地摊经济",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "000665",
    "name": "湖北广电",
    "hot_rank": 70,
    "hot_rank_chg": -47,
    "stock_cnt": 5814,
    "price": "4.86",
    "change": "6.11",
    "market_id": "33",
    "circulate_market_value": "5526402100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.57
      },
      {
        "name": "超高清视频",
        "change_pct": -0.18
      },
      {
        "name": "彩票",
        "change_pct": 0.01
      },
      {
        "name": "VR&AR",
        "change_pct": -1.55
      },
      {
        "name": "云计算数据中心",
        "change_pct": -1.46
      },
      {
        "name": "智慧城市",
        "change_pct": -0.67
      },
      {
        "name": "智慧安防",
        "change_pct": -1.05
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.76
      },
      {
        "name": "传媒",
        "change_pct": 0.4
      },
      {
        "name": "国资云",
        "change_pct": -0.18
      },
      {
        "name": "元宇宙",
        "change_pct": -0.86
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.27
      },
      {
        "name": "数字乡村",
        "change_pct": 0.08
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      },
      {
        "name": "在线教育",
        "change_pct": -0.34
      },
      {
        "name": "智慧政务",
        "change_pct": -0.54
      },
      {
        "name": "华为产业链",
        "change_pct": -1.19
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 72,
    "hot_rank_chg": -25,
    "stock_cnt": 5814,
    "price": "10.30",
    "change": "2.49",
    "market_id": "33",
    "circulate_market_value": "21444619000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "足球",
        "change_pct": 0.2
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.8
      },
      {
        "name": "拼多多概念股",
        "change_pct": -0.91
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.23
      },
      {
        "name": "盲盒",
        "change_pct": 0.15
      },
      {
        "name": "华为产业链",
        "change_pct": -1.19
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      },
      {
        "name": "首发经济",
        "change_pct": 1.24
      },
      {
        "name": "小红书概念股",
        "change_pct": -0.74
      },
      {
        "name": "服务消费",
        "change_pct": 0.3
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 75,
    "hot_rank_chg": -61,
    "stock_cnt": 5814,
    "price": "6.48",
    "change": "-4.42",
    "market_id": "33",
    "circulate_market_value": "7535250600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.17
      },
      {
        "name": "影视",
        "change_pct": 0.94
      },
      {
        "name": "新疆概念",
        "change_pct": -0.87
      },
      {
        "name": "动漫",
        "change_pct": -0.64
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.8
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.76
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "AI视频",
        "change_pct": -0.78
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 77,
    "hot_rank_chg": 16,
    "stock_cnt": 5814,
    "price": "6.36",
    "change": "-5.50",
    "market_id": "33",
    "circulate_market_value": "12179988000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.4
      },
      {
        "name": "林业",
        "change_pct": -0.41
      },
      {
        "name": "碳中和",
        "change_pct": -0.27
      },
      {
        "name": "自贸区",
        "change_pct": -0.28
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 81,
    "hot_rank_chg": 72,
    "stock_cnt": 5814,
    "price": "10.56",
    "change": "-6.88",
    "market_id": "33",
    "circulate_market_value": "11149468700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -1.6
      },
      {
        "name": "创新药",
        "change_pct": -1.25
      },
      {
        "name": "医疗器械",
        "change_pct": -0.5
      },
      {
        "name": "医药",
        "change_pct": -0.77
      },
      {
        "name": "疫苗",
        "change_pct": -0.48
      },
      {
        "name": "化学原料药",
        "change_pct": -0.5
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.48
      },
      {
        "name": "干细胞",
        "change_pct": -1.18
      },
      {
        "name": "眼科",
        "change_pct": -0.42
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -2.11
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 83,
    "hot_rank_chg": -22,
    "stock_cnt": 5814,
    "price": "9.95",
    "change": "3.32",
    "market_id": "33",
    "circulate_market_value": "9286550000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -0.54
      },
      {
        "name": "新疆国企改革",
        "change_pct": -0.09
      },
      {
        "name": "新疆概念",
        "change_pct": -0.87
      },
      {
        "name": "光伏",
        "change_pct": -1.98
      },
      {
        "name": "风电",
        "change_pct": -0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.8
      },
      {
        "name": "储能",
        "change_pct": -0.39
      },
      {
        "name": "国企改革",
        "change_pct": -0.19
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 95,
    "hot_rank_chg": 37,
    "stock_cnt": 5814,
    "price": "10.90",
    "change": "-6.04",
    "market_id": "17",
    "circulate_market_value": "6263544900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.24
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.4
      },
      {
        "name": "自贸区",
        "change_pct": -0.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 100,
    "hot_rank_chg": -75,
    "stock_cnt": 5814,
    "price": "9.27",
    "change": "-2.42",
    "market_id": "17",
    "circulate_market_value": "5379942000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.96
      },
      {
        "name": "国产软件",
        "change_pct": -1.04
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": -0.37
      },
      {
        "name": "共享经济",
        "change_pct": -0.09
      },
      {
        "name": "人工智能",
        "change_pct": -0.92
      },
      {
        "name": "网络安全",
        "change_pct": -0.93
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -1.4
      },
      {
        "name": "游戏",
        "change_pct": -0.36
      },
      {
        "name": "智慧停车",
        "change_pct": -1.01
      },
      {
        "name": "物联网",
        "change_pct": -0.83
      },
      {
        "name": "大数据",
        "change_pct": -0.84
      },
      {
        "name": "智慧城市",
        "change_pct": -0.67
      },
      {
        "name": "储能",
        "change_pct": -0.39
      },
      {
        "name": "智慧安防",
        "change_pct": -1.05
      },
      {
        "name": "数字经济",
        "change_pct": -0.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.8
      },
      {
        "name": "信创",
        "change_pct": -1.12
      },
      {
        "name": "华为昇腾",
        "change_pct": -0.86
      },
      {
        "name": "东数西算/算力",
        "change_pct": -1.27
      },
      {
        "name": "电子身份证",
        "change_pct": -0.76
      },
      {
        "name": "数据要素",
        "change_pct": -0.69
      },
      {
        "name": "数字乡村",
        "change_pct": 0.08
      },
      {
        "name": "智慧政务",
        "change_pct": -0.54
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.65
      },
      {
        "name": "智慧灯杆",
        "change_pct": -1.09
      },
      {
        "name": "算电协同",
        "change_pct": -0.72
      },
      {
        "name": "华为产业链",
        "change_pct": -1.19
      },
      {
        "name": "自贸区",
        "change_pct": -0.28
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.59
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "智谱AI",
        "change_pct": -0.31
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.46
      },
      {
        "name": "AI医疗",
        "change_pct": -0.48
      },
      {
        "name": "算力一体机",
        "change_pct": -1.85
      },
      {
        "name": "区块链",
        "change_pct": -0.41
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5814, "price": "29.43", "change": "10.02", "market_id": "33", "circulate_market_value": "22418762000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈"}, {"code": "600715", "name": "文投控股", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "3.69", "change": "8.53", "market_id": "17", "circulate_market_value": "10562153600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "游戏", "change_pct": -0.36}, {"name": "影视", "change_pct": 0.94}, {"name": "国企改革", "change_pct": -0.19}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "AI视频", "change_pct": -0.78}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 3, "hot_rank_chg": 5, "stock_cnt": 5814, "price": "4.56", "change": "-5.39", "market_id": "33", "circulate_market_value": "7209229000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -0.33}, {"name": "体外诊断", "change_pct": -0.44}, {"name": "医疗器械", "change_pct": -0.5}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "基因测序", "change_pct": -0.39}, {"name": "预制菜", "change_pct": 0.03}, {"name": "水产养殖", "change_pct": -2.46}, {"name": "新冠病毒防治", "change_pct": -0.38}, {"name": "海洋经济", "change_pct": -1.32}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 4, "hot_rank_chg": 17, "stock_cnt": 5814, "price": "5.95", "change": "3.84", "market_id": "17", "circulate_market_value": "7943565100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "氢能源/燃料电池", "change_pct": -0.54}, {"name": "物联网", "change_pct": -0.83}, {"name": "LED", "change_pct": -1.21}, {"name": "卫星互联网", "change_pct": -2.28}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 5, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "4.36", "change": "10.10", "market_id": "33", "circulate_market_value": "4012010600.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "AI游戏", "xgb_concepts": [{"name": "手游", "change_pct": -0.16}, {"name": "ST摘帽", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "人工智能", "change_pct": -0.92}, {"name": "VR&AR", "change_pct": -1.55}, {"name": "游戏", "change_pct": -0.36}, {"name": "动漫", "change_pct": -0.64}, {"name": "腾讯概念股", "change_pct": -0.76}, {"name": "快手概念股", "change_pct": -0.33}, {"name": "NFT", "change_pct": -0.35}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "虚拟数字人", "change_pct": -0.68}, {"name": "字节跳动概念股", "change_pct": -0.84}, {"name": "云游戏", "change_pct": -0.86}, {"name": "华为产业链", "change_pct": -1.19}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "603366", "name": "日出东方", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5814, "price": "13.35", "change": "-3.96", "market_id": "17", "circulate_market_value": "10854192100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 7, "hot_rank_chg": 8, "stock_cnt": 5814, "price": "10.73", "change": "3.87", "market_id": "33", "circulate_market_value": "6439252500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.05}, {"name": "边缘计算", "change_pct": -0.96}, {"name": "核电", "change_pct": -0.75}, {"name": "海工装备", "change_pct": -0.97}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "云计算数据中心", "change_pct": -1.46}, {"name": "冷链", "change_pct": 0.56}, {"name": "地热", "change_pct": -0.71}, {"name": "储能", "change_pct": -0.39}, {"name": "碳中和", "change_pct": -0.27}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.99}, {"name": "汽车热管理", "change_pct": -1.01}, {"name": "热泵", "change_pct": -0.49}, {"name": "液冷服务器", "change_pct": -2.22}, {"name": "蜜雪冰城概念股", "change_pct": -0.08}, {"name": "海洋经济", "change_pct": -1.32}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 8, "hot_rank_chg": 59, "stock_cnt": 5814, "price": "49.80", "change": "4.64", "market_id": "33", "circulate_market_value": "52848796000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 9, "hot_rank_chg": -3, "stock_cnt": 5814, "price": "8.75", "change": "10.06", "market_id": "33", "circulate_market_value": "3946482800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -1.18}, {"name": "手游", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "游戏", "change_pct": -0.36}, {"name": "物联网", "change_pct": -0.83}, {"name": "机器人", "change_pct": -1.34}, {"name": "无人机", "change_pct": -1.85}, {"name": "国产芯片", "change_pct": -2.43}, {"name": "5G消息/RCS", "change_pct": -0.09}, {"name": "低空经济", "change_pct": -1.65}, {"name": "无人物流车", "change_pct": -0.58}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5814, "price": "14.39", "change": "0.63", "market_id": "17", "circulate_market_value": "15778558000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 11, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "12.96", "change": "-0.38", "market_id": "33", "circulate_market_value": "7341558600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "石墨烯", "change_pct": -1.34}, {"name": "军民融合", "change_pct": -1.76}, {"name": "物联网", "change_pct": -0.83}, {"name": "LED", "change_pct": -1.21}, {"name": "军工", "change_pct": -1.78}, {"name": "智慧灯杆", "change_pct": -1.09}, {"name": "海洋经济", "change_pct": -1.32}]}, {"code": "002187", "name": "广百股份", "hot_rank": 12, "hot_rank_chg": 5, "stock_cnt": 5814, "price": "7.67", "change": "10.04", "market_id": "33", "circulate_market_value": "5375861800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": 0.49}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "粤港澳大湾区", "change_pct": -0.05}, {"name": "物业管理", "change_pct": -0.58}, {"name": "预制菜", "change_pct": 0.03}, {"name": "地摊经济", "change_pct": -0.18}]}, {"code": "002129", "name": "TCL中环", "hot_rank": 13, "hot_rank_chg": 27, "stock_cnt": 5814, "price": "9.49", "change": "1.17", "market_id": "33", "circulate_market_value": "38337316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": -2.58}, {"name": "一带一路", "change_pct": -0.36}, {"name": "京津冀", "change_pct": -0.41}, {"name": "光伏", "change_pct": -1.98}, {"name": "复牌股", "change_pct": -1.03}, {"name": "碳中和", "change_pct": -0.27}, {"name": "国产芯片", "change_pct": -2.43}, {"name": "IGBT", "change_pct": -1.57}, {"name": "颗粒硅", "change_pct": -2.26}, {"name": "异质结电池HJT", "change_pct": -2.42}, {"name": "大硅片", "change_pct": -1.98}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "18.42", "change": "-6.73", "market_id": "33", "circulate_market_value": "8466049300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 15, "hot_rank_chg": 7, "stock_cnt": 5814, "price": "11.83", "change": "-9.76", "market_id": "17", "circulate_market_value": "12361023300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.93}, {"name": "上海国企改革", "change_pct": 0.1}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": 0.4}, {"name": "国企改革", "change_pct": -0.19}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5814, "price": "430.30", "change": "-7.70", "market_id": "33", "circulate_market_value": "477605890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 17, "hot_rank_chg": 13, "stock_cnt": 5814, "price": "5.14", "change": "1.98", "market_id": "17", "circulate_market_value": "5965188200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "纺织服装", "change_pct": -0.24}, {"name": "浙江国企改革", "change_pct": 0.06}, {"name": "影视", "change_pct": 0.94}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.19}, {"name": "短剧/互动影游", "change_pct": 0.25}]}, {"code": "600892", "name": "大晟文化", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5814, "price": "5.95", "change": "5.68", "market_id": "17", "circulate_market_value": "3327951200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.16}, {"name": "ST摘帽", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "游戏", "change_pct": -0.36}, {"name": "影视", "change_pct": 0.94}, {"name": "短剧/互动影游", "change_pct": 0.25}]}, {"code": "600327", "name": "大东方", "hot_rank": 19, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "5.81", "change": "-10.06", "market_id": "17", "circulate_market_value": "5140569000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.49}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "信托", "change_pct": 0.47}, {"name": "民营医院", "change_pct": -0.42}, {"name": "社区团购", "change_pct": -0.55}, {"name": "大金融", "change_pct": 0.68}, {"name": "餐饮", "change_pct": 0.32}, {"name": "首发经济", "change_pct": 1.24}]}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "78.78", "change": "-6.63", "market_id": "33", "circulate_market_value": "109214425000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000819", "name": "岳阳兴长", "hot_rank": 21, "hot_rank_chg": 34, "stock_cnt": 5814, "price": "14.10", "change": "9.98", "market_id": "33", "circulate_market_value": "5160883500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "MOFs材料"}, {"code": "002578", "name": "闽发铝业", "hot_rank": 22, "hot_rank_chg": 7, "stock_cnt": 5814, "price": "4.90", "change": "-9.93", "market_id": "33", "circulate_market_value": "4219696500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -1.44}, {"name": "一带一路", "change_pct": -0.36}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "福建自贸/海西概念", "change_pct": -1.4}, {"name": "光伏", "change_pct": -1.98}, {"name": "有色金属", "change_pct": -1.87}, {"name": "新能源汽车", "change_pct": -0.8}, {"name": "新能源车零部件", "change_pct": -1.29}, {"name": "自贸区", "change_pct": -0.28}, {"name": "液冷服务器", "change_pct": -2.22}]}, {"code": "002905", "name": "金逸影视", "hot_rank": 23, "hot_rank_chg": 19, "stock_cnt": 5814, "price": "10.89", "change": "10.00", "market_id": "33", "circulate_market_value": "3805401600.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "电影院线", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "影视", "change_pct": 0.94}]}, {"code": "300502", "name": "新易盛", "hot_rank": 24, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "174.50", "change": "-6.97", "market_id": "33", "circulate_market_value": "218949290000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 25, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "14.14", "change": "2.17", "market_id": "17", "circulate_market_value": "4832477800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600802", "name": "福建水泥", "hot_rank": 26, "hot_rank_chg": 96, "stock_cnt": 5814, "price": "6.96", "change": "-9.96", "market_id": "17", "circulate_market_value": "3189408900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.56}, {"name": "福建自贸/海西概念", "change_pct": -1.4}, {"name": "自贸区", "change_pct": -0.28}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 27, "hot_rank_chg": 14, "stock_cnt": 5814, "price": "4.73", "change": "10.00", "market_id": "17", "circulate_market_value": "6174872700.00", "change_type": "1", "change_section": "13", "change_days": "7", "change_reason": "冰雪旅游保障", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "高速公路", "change_pct": 1.66}, {"name": "振兴东北", "change_pct": 0.59}, {"name": "黑龙江自贸区", "change_pct": 2.3}]}, {"code": "002520", "name": "日发精机", "hot_rank": 28, "hot_rank_chg": -10, "stock_cnt": 5814, "price": "7.83", "change": "1.69", "market_id": "33", "circulate_market_value": "5522680400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": -2.08}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "工业自动化", "change_pct": -1.56}, {"name": "大飞机", "change_pct": -2.35}, {"name": "军民融合", "change_pct": -1.76}, {"name": "风电", "change_pct": -0.63}, {"name": "军工", "change_pct": -1.78}, {"name": "机器人", "change_pct": -1.34}, {"name": "智能制造", "change_pct": -1.42}, {"name": "工业母机", "change_pct": -1.95}, {"name": "减速器", "change_pct": -1.58}]}, {"code": "600880", "name": "博瑞传播", "hot_rank": 29, "hot_rank_chg": -22, "stock_cnt": 5814, "price": "4.24", "change": "0.47", "market_id": "17", "circulate_market_value": "4634447900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.11}, {"name": "手游", "change_pct": -0.16}, {"name": "人工智能", "change_pct": -0.92}, {"name": "游戏", "change_pct": -0.36}, {"name": "教育", "change_pct": -0.08}, {"name": "数字经济", "change_pct": -0.68}, {"name": "知识产权", "change_pct": -0.23}, {"name": "阿里巴巴概念股", "change_pct": -0.8}, {"name": "腾讯概念股", "change_pct": -0.76}, {"name": "传媒", "change_pct": 0.4}, {"name": "NFT", "change_pct": -0.35}, {"name": "虚拟数字人", "change_pct": -0.68}, {"name": "数据要素", "change_pct": -0.69}, {"name": "教育信息化", "change_pct": -0.34}, {"name": "AI营销", "change_pct": -0.47}, {"name": "华为产业链", "change_pct": -1.19}, {"name": "AI大模型/智能体", "change_pct": -0.59}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "AI视频", "change_pct": -0.78}, {"name": "IP经济/谷子经济", "change_pct": 0.13}, {"name": "小红书概念股", "change_pct": -0.74}, {"name": "区块链", "change_pct": -0.41}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 30, "hot_rank_chg": 41, "stock_cnt": 5814, "price": "5.47", "change": "-8.68", "market_id": "33", "circulate_market_value": "4185319800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.33}, {"name": "优化生育（三孩）", "change_pct": 0.16}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "医药商业", "change_pct": 0.25}, {"name": "保健品", "change_pct": -0.03}, {"name": "民营医院", "change_pct": -0.42}, {"name": "医药", "change_pct": -0.77}, {"name": "食品", "change_pct": 0.38}, {"name": "辅助生殖", "change_pct": -0.34}, {"name": "口腔", "change_pct": -1.12}, {"name": "医美", "change_pct": -0.07}, {"name": "新冠病毒防治", "change_pct": -0.38}]}, {"code": "002565", "name": "顺灏股份", "hot_rank": 31, "hot_rank_chg": 54, "stock_cnt": 5814, "price": "9.43", "change": "-1.67", "market_id": "33", "circulate_market_value": "9995377300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -1.16}, {"name": "电子烟", "change_pct": -1.06}, {"name": "一带一路", "change_pct": -0.36}, {"name": "造纸", "change_pct": -0.24}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "包装印刷", "change_pct": -0.43}, {"name": "卫星互联网", "change_pct": -2.28}, {"name": "太空算力", "change_pct": -3.22}]}, {"code": "002685", "name": "华东重机", "hot_rank": 32, "hot_rank_chg": -5, "stock_cnt": 5814, "price": "6.09", "change": "9.93", "market_id": "33", "circulate_market_value": "6136218900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.36}, {"name": "工业自动化", "change_pct": -1.56}, {"name": "机械", "change_pct": 0.1}, {"name": "智能制造", "change_pct": -1.42}, {"name": "国产芯片", "change_pct": -2.43}, {"name": "信创", "change_pct": -1.12}, {"name": "AI算力芯片", "change_pct": -2.74}]}, {"code": "603103", "name": "横店影视", "hot_rank": 33, "hot_rank_chg": 11, "stock_cnt": 5814, "price": "20.44", "change": "5.85", "market_id": "17", "circulate_market_value": "12963048000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 34, "hot_rank_chg": 25, "stock_cnt": 5814, "price": "18.77", "change": "2.18", "market_id": "33", "circulate_market_value": "3329948200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000595", "name": "新能股份", "hot_rank": 35, "hot_rank_chg": -1, "stock_cnt": 5814, "price": "6.08", "change": "9.95", "market_id": "33", "circulate_market_value": "6923030700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "储能并网", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -0.31}, {"name": "高铁轨交", "change_pct": -0.65}, {"name": "航母", "change_pct": -1.58}, {"name": "光伏", "change_pct": -1.98}, {"name": "风电", "change_pct": -0.63}, {"name": "军工", "change_pct": -1.78}, {"name": "储能", "change_pct": -0.39}, {"name": "国企改革", "change_pct": -0.19}, {"name": "宁夏概念", "change_pct": 0.14}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 36, "hot_rank_chg": 10, "stock_cnt": 5814, "price": "707.27", "change": "1.62", "market_id": "17", "circulate_market_value": "21280142000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 37, "hot_rank_chg": 21, "stock_cnt": 5814, "price": "4.21", "change": "9.92", "market_id": "33", "circulate_market_value": "3386825000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "饲料", "change_pct": 0.17}, {"name": "养猪", "change_pct": 1.31}, {"name": "大农业", "change_pct": -0.18}]}, {"code": "002310", "name": "东方新能", "hot_rank": 38, "hot_rank_chg": 15, "stock_cnt": 5814, "price": "2.81", "change": "2.93", "market_id": "33", "circulate_market_value": "12361216600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -1.93}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "京津冀", "change_pct": -0.41}, {"name": "旅游", "change_pct": 0.25}, {"name": "园林", "change_pct": 0.11}, {"name": "海绵城市", "change_pct": 0.57}, {"name": "固废处理", "change_pct": -0.32}, {"name": "光伏", "change_pct": -1.98}, {"name": "风电", "change_pct": -0.63}, {"name": "雄安新区", "change_pct": -0.4}, {"name": "北京城市规划", "change_pct": -0.09}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.57}, {"name": "储能", "change_pct": -0.39}, {"name": "碳中和", "change_pct": -0.27}, {"name": "乡村振兴", "change_pct": -0.05}, {"name": "汽车拆解", "change_pct": 0.45}, {"name": "土壤修复", "change_pct": -0.18}, {"name": "核污染防治", "change_pct": -1.29}, {"name": "东数西算/算力", "change_pct": -1.27}, {"name": "新型城镇化", "change_pct": -0.38}, {"name": "低价股", "change_pct": -0.16}, {"name": "西部大开发", "change_pct": 0.05}]}, {"code": "603258", "name": "电魂网络", "hot_rank": 39, "hot_rank_chg": 10, "stock_cnt": 5814, "price": "19.02", "change": "0.85", "market_id": "17", "circulate_market_value": "4590312500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002931", "name": "锋龙股份", "hot_rank": 40, "hot_rank_chg": 14, "stock_cnt": 5814, "price": "53.76", "change": "-7.47", "market_id": "33", "circulate_market_value": "10890478100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 41, "hot_rank_chg": 51, "stock_cnt": 5814, "price": "19.33", "change": "-7.07", "market_id": "33", "circulate_market_value": "3676517700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 42, "hot_rank_chg": 75, "stock_cnt": 5814, "price": "9.46", "change": "-9.99", "market_id": "33", "circulate_market_value": "3162089400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.31}, {"name": "饲料", "change_pct": 0.17}, {"name": "一带一路", "change_pct": -0.36}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "保健品", "change_pct": -0.03}, {"name": "山东国企改革", "change_pct": -0.6}, {"name": "污水处理", "change_pct": -0.2}, {"name": "环保", "change_pct": -0.57}, {"name": "食品", "change_pct": 0.38}, {"name": "预制菜", "change_pct": 0.03}, {"name": "国企改革", "change_pct": -0.19}, {"name": "水产养殖", "change_pct": -2.46}, {"name": "广西概念", "change_pct": -0.62}]}, {"code": "300058", "name": "蓝色光标", "hot_rank": 43, "hot_rank_chg": -4, "stock_cnt": 5814, "price": "13.72", "change": "0.66", "market_id": "33", "circulate_market_value": "47717203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603706", "name": "东方环宇", "hot_rank": 44, "hot_rank_chg": 24, "stock_cnt": 5814, "price": "24.98", "change": "-9.98", "market_id": "17", "circulate_market_value": "4730780200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 45, "hot_rank_chg": -33, "stock_cnt": 5814, "price": "2.58", "change": "-5.50", "market_id": "17", "circulate_market_value": "3769365300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.33}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "冷链", "change_pct": 0.56}, {"name": "医药", "change_pct": -0.77}, {"name": "食品", "change_pct": 0.38}, {"name": "食品安全", "change_pct": -0.99}, {"name": "预制菜", "change_pct": 0.03}, {"name": "低价股", "change_pct": -0.16}, {"name": "水产养殖", "change_pct": -2.46}, {"name": "海洋经济", "change_pct": -1.32}]}, {"code": "603396", "name": "金辰股份", "hot_rank": 46, "hot_rank_chg": -15, "stock_cnt": 5814, "price": "31.79", "change": "-9.99", "market_id": "17", "circulate_market_value": "4403788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 47, "hot_rank_chg": -2, "stock_cnt": 5814, "price": "10.09", "change": "5.10", "market_id": "33", "circulate_market_value": "4779434100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "VR&AR", "change_pct": -1.55}, {"name": "游戏", "change_pct": -0.36}, {"name": "影视", "change_pct": 0.94}, {"name": "直播/短视频", "change_pct": 0.54}, {"name": "动漫", "change_pct": -0.64}, {"name": "腾讯概念股", "change_pct": -0.76}, {"name": "传媒", "change_pct": 0.4}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "002149", "name": "西部材料", "hot_rank": 48, "hot_rank_chg": 57, "stock_cnt": 5814, "price": "35.33", "change": "-4.90", "market_id": "33", "circulate_market_value": "17245955000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 49, "hot_rank_chg": 33, "stock_cnt": 5814, "price": "37.41", "change": "-6.71", "market_id": "17", "circulate_market_value": "742367490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 50, "hot_rank_chg": -15, "stock_cnt": 5814, "price": "39.30", "change": "-1.70", "market_id": "17", "circulate_market_value": "176969430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 51, "hot_rank_chg": 36, "stock_cnt": 5814, "price": "22.23", "change": "-6.24", "market_id": "33", "circulate_market_value": "10665401400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 52, "hot_rank_chg": 8, "stock_cnt": 5814, "price": "23.72", "change": "-3.77", "market_id": "33", "circulate_market_value": "12088431900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603381", "name": "永臻股份", "hot_rank": 53, "hot_rank_chg": 119, "stock_cnt": 5814, "price": "18.28", "change": "-9.99", "market_id": "17", "circulate_market_value": "2598276900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 54, "hot_rank_chg": 10, "stock_cnt": 5814, "price": "38.89", "change": "-5.61", "market_id": "17", "circulate_market_value": "17430498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 55, "hot_rank_chg": 40, "stock_cnt": 5814, "price": "45.21", "change": "-2.77", "market_id": "33", "circulate_market_value": "68604015000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 56, "hot_rank_chg": 6, "stock_cnt": 5814, "price": "20.18", "change": "-9.22", "market_id": "17", "circulate_market_value": "4261273000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 57, "hot_rank_chg": 15, "stock_cnt": 5814, "price": "9.19", "change": "-6.22", "market_id": "17", "circulate_market_value": "5897987800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.49}, {"name": "农业种植", "change_pct": -0.97}, {"name": "湖南国企改革", "change_pct": 0.22}, {"name": "乡村振兴", "change_pct": -0.05}, {"name": "休闲食品", "change_pct": 0.32}, {"name": "食品", "change_pct": 0.38}, {"name": "食品安全", "change_pct": -0.99}, {"name": "社区团购", "change_pct": -0.55}, {"name": "大农业", "change_pct": -0.18}, {"name": "预制菜", "change_pct": 0.03}, {"name": "人造肉", "change_pct": -0.08}, {"name": "国企改革", "change_pct": -0.19}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 58, "hot_rank_chg": 28, "stock_cnt": 5814, "price": "2.96", "change": "10.04", "market_id": "17", "circulate_market_value": "10329773000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "AI微短剧", "xgb_concepts": [{"name": "广电", "change_pct": 1.57}, {"name": "车联网/车路云", "change_pct": -1.18}, {"name": "超高清视频", "change_pct": -0.18}, {"name": "人工智能", "change_pct": -0.92}, {"name": "云计算数据中心", "change_pct": -1.46}, {"name": "影视", "change_pct": 0.94}, {"name": "智慧城市", "change_pct": -0.67}, {"name": "国产芯片", "change_pct": -2.43}, {"name": "振兴东北", "change_pct": 0.59}, {"name": "传媒", "change_pct": 0.4}, {"name": "低价股", "change_pct": -0.16}, {"name": "国企改革", "change_pct": -0.19}, {"name": "在线教育", "change_pct": -0.34}, {"name": "医疗信息化", "change_pct": -0.34}, {"name": "AI大模型/智能体", "change_pct": -0.59}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "603767", "name": "中马传动", "hot_rank": 59, "hot_rank_chg": -3, "stock_cnt": 5814, "price": "17.45", "change": "-1.64", "market_id": "17", "circulate_market_value": "5385619700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 60, "hot_rank_chg": 42, "stock_cnt": 5814, "price": "4.42", "change": "5.74", "market_id": "17", "circulate_market_value": "4480574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.36}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "水利", "change_pct": 0.21}, {"name": "智慧城市", "change_pct": -0.67}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": 0.99}, {"name": "振兴东北", "change_pct": 0.59}, {"name": "大基建", "change_pct": -0.06}, {"name": "中俄贸易", "change_pct": 0.42}, {"name": "新型城镇化", "change_pct": -0.38}, {"name": "黑龙江自贸区", "change_pct": 2.3}, {"name": "旧改", "change_pct": -0.19}]}, {"code": "600183", "name": "生益科技", "hot_rank": 61, "hot_rank_chg": 36, "stock_cnt": 5814, "price": "64.10", "change": "-5.94", "market_id": "17", "circulate_market_value": "154593100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603536", "name": "惠发食品", "hot_rank": 62, "hot_rank_chg": 58, "stock_cnt": 5814, "price": "10.82", "change": "-7.84", "market_id": "17", "circulate_market_value": "2602559100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.36}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "食品", "change_pct": 0.38}, {"name": "社区团购", "change_pct": -0.55}, {"name": "预制菜", "change_pct": 0.03}, {"name": "回购", "change_pct": -1.66}]}, {"code": "002819", "name": "东方中科", "hot_rank": 63, "hot_rank_chg": 0, "stock_cnt": 5814, "price": "20.30", "change": "-6.45", "market_id": "33", "circulate_market_value": "4794829300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 64, "hot_rank_chg": -27, "stock_cnt": 5814, "price": "31.92", "change": "1.33", "market_id": "33", "circulate_market_value": "32612663000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 65, "hot_rank_chg": 48, "stock_cnt": 5814, "price": "14.71", "change": "10.02", "market_id": "17", "circulate_market_value": "11580835900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "数据中心交换机"}, {"code": "600487", "name": "亨通光电", "hot_rank": 66, "hot_rank_chg": 64, "stock_cnt": 5814, "price": "40.26", "change": "-3.22", "market_id": "17", "circulate_market_value": "98783798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301052", "name": "果麦文化", "hot_rank": 67, "hot_rank_chg": 17, "stock_cnt": 5814, "price": "49.40", "change": "7.18", "market_id": "33", "circulate_market_value": "3961974700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 68, "hot_rank_chg": 66, "stock_cnt": 5814, "price": "10.94", "change": "-4.95", "market_id": "17", "circulate_market_value": "4385648900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": 0.1}, {"name": "新零售", "change_pct": 0.49}, {"name": "强势人气股", "change_pct": -1.17}, {"name": "物业管理", "change_pct": -0.58}, {"name": "国企改革", "change_pct": -0.19}, {"name": "地摊经济", "change_pct": -0.18}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 69, "hot_rank_chg": -36, "stock_cnt": 5814, "price": "116.07", "change": "-7.14", "market_id": "33", "circulate_market_value": "126329201000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000665", "name": "湖北广电", "hot_rank": 70, "hot_rank_chg": -47, "stock_cnt": 5814, "price": "4.86", "change": "6.11", "market_id": "33", "circulate_market_value": "5526402100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 1.57}, {"name": "超高清视频", "change_pct": -0.18}, {"name": "彩票", "change_pct": 0.01}, {"name": "VR&AR", "change_pct": -1.55}, {"name": "云计算数据中心", "change_pct": -1.46}, {"name": "智慧城市", "change_pct": -0.67}, {"name": "智慧安防", "change_pct": -1.05}, {"name": "腾讯概念股", "change_pct": -0.76}, {"name": "传媒", "change_pct": 0.4}, {"name": "国资云", "change_pct": -0.18}, {"name": "元宇宙", "change_pct": -0.86}, {"name": "东数西算/算力", "change_pct": -1.27}, {"name": "数字乡村", "change_pct": 0.08}, {"name": "国企改革", "change_pct": -0.19}, {"name": "在线教育", "change_pct": -0.34}, {"name": "智慧政务", "change_pct": -0.54}, {"name": "华为产业链", "change_pct": -1.19}, {"name": "AI大模型/智能体", "change_pct": -0.59}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "湖北国企改革", "change_pct": 0.01}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 71, "hot_rank_chg": 9, "stock_cnt": 5814, "price": "232.30", "change": "-5.58", "market_id": "17", "circulate_market_value": "155807870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002739", "name": "儒意电影", "hot_rank": 72, "hot_rank_chg": -25, "stock_cnt": 5814, "price": "10.30", "change": "2.49", "market_id": "33", "circulate_market_value": "21444619000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 0.94}, {"name": "足球", "change_pct": 0.2}, {"name": "阿里巴巴概念股", "change_pct": -0.8}, {"name": "拼多多概念股", "change_pct": -0.91}, {"name": "网红/MCN", "change_pct": -0.23}, {"name": "盲盒", "change_pct": 0.15}, {"name": "华为产业链", "change_pct": -1.19}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "IP经济/谷子经济", "change_pct": 0.13}, {"name": "首发经济", "change_pct": 1.24}, {"name": "小红书概念股", "change_pct": -0.74}, {"name": "服务消费", "change_pct": 0.3}]}, {"code": "600111", "name": "北方稀土", "hot_rank": 73, "hot_rank_chg": 184, "stock_cnt": 5814, "price": "34.44", "change": "-5.02", "market_id": "17", "circulate_market_value": "124502868000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 74, "hot_rank_chg": -36, "stock_cnt": 5814, "price": "15.86", "change": "-3.88", "market_id": "17", "circulate_market_value": "9434034900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 75, "hot_rank_chg": -61, "stock_cnt": 5814, "price": "6.48", "change": "-4.42", "market_id": "33", "circulate_market_value": "7535250600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.17}, {"name": "影视", "change_pct": 0.94}, {"name": "新疆概念", "change_pct": -0.87}, {"name": "动漫", "change_pct": -0.64}, {"name": "阿里巴巴概念股", "change_pct": -0.8}, {"name": "腾讯概念股", "change_pct": -0.76}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "AI视频", "change_pct": -0.78}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "603686", "name": "福龙马", "hot_rank": 76, "hot_rank_chg": -33, "stock_cnt": 5814, "price": "13.90", "change": "2.21", "market_id": "17", "circulate_market_value": "5774482600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 77, "hot_rank_chg": 16, "stock_cnt": 5814, "price": "6.36", "change": "-5.50", "market_id": "33", "circulate_market_value": "12179988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -1.4}, {"name": "林业", "change_pct": -0.41}, {"name": "碳中和", "change_pct": -0.27}, {"name": "自贸区", "change_pct": -0.28}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 78, "hot_rank_chg": 30, "stock_cnt": 5814, "price": "77.56", "change": "-5.64", "market_id": "33", "circulate_market_value": "149891600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 79, "hot_rank_chg": 76, "stock_cnt": 5814, "price": "14.69", "change": "1.87", "market_id": "33", "circulate_market_value": "9697261100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 80, "hot_rank_chg": 82, "stock_cnt": 5814, "price": "57.39", "change": "-3.97", "market_id": "33", "circulate_market_value": "41621326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 81, "hot_rank_chg": 72, "stock_cnt": 5814, "price": "10.56", "change": "-6.88", "market_id": "33", "circulate_market_value": "11149468700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -1.6}, {"name": "创新药", "change_pct": -1.25}, {"name": "医疗器械", "change_pct": -0.5}, {"name": "医药", "change_pct": -0.77}, {"name": "疫苗", "change_pct": -0.48}, {"name": "化学原料药", "change_pct": -0.5}, {"name": "肝炎概念", "change_pct": -0.48}, {"name": "干细胞", "change_pct": -1.18}, {"name": "眼科", "change_pct": -0.42}, {"name": "肿瘤疫苗", "change_pct": -2.11}]}, {"code": "300528", "name": "幸福蓝海", "hot_rank": 82, "hot_rank_chg": -62, "stock_cnt": 5814, "price": "17.04", "change": "-5.28", "market_id": "33", "circulate_market_value": "6349241200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 83, "hot_rank_chg": -22, "stock_cnt": 5814, "price": "9.95", "change": "3.32", "market_id": "33", "circulate_market_value": "9286550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -0.54}, {"name": "新疆国企改革", "change_pct": -0.09}, {"name": "新疆概念", "change_pct": -0.87}, {"name": "光伏", "change_pct": -1.98}, {"name": "风电", "change_pct": -0.63}, {"name": "新能源汽车", "change_pct": -0.8}, {"name": "储能", "change_pct": -0.39}, {"name": "国企改革", "change_pct": -0.19}]}, {"code": "002580", "name": "圣阳股份", "hot_rank": 84, "hot_rank_chg": 102, "stock_cnt": 5814, "price": "17.17", "change": "2.14", "market_id": "33", "circulate_market_value": "7766657200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 85, "hot_rank_chg": 90, "stock_cnt": 5814, "price": "36.95", "change": "-1.10", "market_id": "17", "circulate_market_value": "31280146000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600977", "name": "中国电影", "hot_rank": 86, "hot_rank_chg": -54, "stock_cnt": 5814, "price": "16.77", "change": "-1.64", "market_id": "17", "circulate_market_value": "31309590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 87, "hot_rank_chg": 97, "stock_cnt": 5814, "price": "109.72", "change": "-6.05", "market_id": "17", "circulate_market_value": "30237556000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 88, "hot_rank_chg": 93, "stock_cnt": 5814, "price": "17.76", "change": "2.01", "market_id": "33", "circulate_market_value": "10565995300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 89, "hot_rank_chg": 156, "stock_cnt": 5814, "price": "14.62", "change": "10.01", "market_id": "33", "circulate_market_value": "4132489200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈"}, {"code": "300274", "name": "阳光电源", "hot_rank": 90, "hot_rank_chg": 19, "stock_cnt": 5814, "price": "76.25", "change": "-1.60", "market_id": "33", "circulate_market_value": "121043799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 91, "hot_rank_chg": -25, "stock_cnt": 5814, "price": "26.80", "change": "-3.35", "market_id": "33", "circulate_market_value": "17717096000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300829", "name": "金丹科技", "hot_rank": 92, "hot_rank_chg": 182, "stock_cnt": 5814, "price": "29.40", "change": "2.73", "market_id": "33", "circulate_market_value": "5075464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 93, "hot_rank_chg": -23, "stock_cnt": 5814, "price": "240.40", "change": "1.14", "market_id": "33", "circulate_market_value": "1024252350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002205", "name": "国统股份", "hot_rank": 94, "hot_rank_chg": -44, "stock_cnt": 5814, "price": "13.77", "change": "6.50", "market_id": "33", "circulate_market_value": "2559061200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 95, "hot_rank_chg": 37, "stock_cnt": 5814, "price": "10.90", "change": "-6.04", "market_id": "17", "circulate_market_value": "6263544900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.24}, {"name": "福建自贸/海西概念", "change_pct": -1.4}, {"name": "自贸区", "change_pct": -0.28}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "600641", "name": "先导基电", "hot_rank": 96, "hot_rank_chg": 74, "stock_cnt": 5814, "price": "31.70", "change": "-5.03", "market_id": "17", "circulate_market_value": "29500968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000766", "name": "通化金马", "hot_rank": 97, "hot_rank_chg": -23, "stock_cnt": 5814, "price": "14.85", "change": "-10.00", "market_id": "33", "circulate_market_value": "14339361000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688498", "name": "源杰科技", "hot_rank": 98, "hot_rank_chg": 29, "stock_cnt": 5814, "price": "650.00", "change": "-3.43", "market_id": "17", "circulate_market_value": "79879894000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 99, "hot_rank_chg": -8, "stock_cnt": 5814, "price": "26.11", "change": "-1.02", "market_id": "17", "circulate_market_value": "537912820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603636", "name": "南威软件", "hot_rank": 100, "hot_rank_chg": -75, "stock_cnt": 5814, "price": "9.27", "change": "-2.42", "market_id": "17", "circulate_market_value": "5379942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.96}, {"name": "国产软件", "change_pct": -1.04}, {"name": "蚂蚁集团概念股", "change_pct": -0.37}, {"name": "共享经济", "change_pct": -0.09}, {"name": "人工智能", "change_pct": -0.92}, {"name": "网络安全", "change_pct": -0.93}, {"name": "福建自贸/海西概念", "change_pct": -1.4}, {"name": "游戏", "change_pct": -0.36}, {"name": "智慧停车", "change_pct": -1.01}, {"name": "物联网", "change_pct": -0.83}, {"name": "大数据", "change_pct": -0.84}, {"name": "智慧城市", "change_pct": -0.67}, {"name": "储能", "change_pct": -0.39}, {"name": "智慧安防", "change_pct": -1.05}, {"name": "数字经济", "change_pct": -0.68}, {"name": "阿里巴巴概念股", "change_pct": -0.8}, {"name": "信创", "change_pct": -1.12}, {"name": "华为昇腾", "change_pct": -0.86}, {"name": "东数西算/算力", "change_pct": -1.27}, {"name": "电子身份证", "change_pct": -0.76}, {"name": "数据要素", "change_pct": -0.69}, {"name": "数字乡村", "change_pct": 0.08}, {"name": "智慧政务", "change_pct": -0.54}, {"name": "华为云·鲲鹏", "change_pct": -0.65}, {"name": "智慧灯杆", "change_pct": -1.09}, {"name": "算电协同", "change_pct": -0.72}, {"name": "华为产业链", "change_pct": -1.19}, {"name": "自贸区", "change_pct": -0.28}, {"name": "AI大模型/智能体", "change_pct": -0.59}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "智谱AI", "change_pct": -0.31}, {"name": "DeepSeek概念股", "change_pct": -1.46}, {"name": "AI医疗", "change_pct": -0.48}, {"name": "算力一体机", "change_pct": -1.85}, {"name": "区块链", "change_pct": -0.41}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};