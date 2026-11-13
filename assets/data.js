const UPDATE_TIME = "2026-11-13 02:21";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 0.24,
    "rate": 0,
    "tag": "",
    "hotTag": "连续21天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.74,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续329天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "商业航天",
    "rise": 0.05,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续258天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "短剧游戏",
    "rise": 0.76,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 1,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "机器人概念",
    "rise": 0.03,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": -1,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "兵装重组概念",
    "rise": -0.77,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "创新药",
    "rise": -0.93,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 2,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "芯片概念",
    "rise": 0.12,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "连续39天上榜",
    "rankChg": 0,
    "etfName": "集成电路ETF",
    "code": "885756"
  },
  {
    "name": "海峡两岸",
    "rise": -0.64,
    "rate": 0,
    "tag": "",
    "hotTag": "5天4次上榜",
    "rankChg": -2,
    "etfName": "",
    "code": "885939"
  },
  {
    "name": "国家大基金持股",
    "rise": 0.79,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "存储芯片",
    "rise": 0.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续282天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "PCB概念",
    "rise": -0.93,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续152天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "AI应用",
    "rise": -0.07,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续87天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "光伏概念",
    "rise": -0.37,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "光伏ETF",
    "code": "885531"
  },
  {
    "name": "冰雪产业",
    "rise": -1.09,
    "rate": 0,
    "tag": "",
    "hotTag": "连续24天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "AI视频",
    "rise": 0.33,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "猪肉",
    "rise": 2.59,
    "rate": 0,
    "tag": "",
    "hotTag": "连续22天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "算力租赁",
    "rise": 0.39,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "光刻机",
    "rise": 1.57,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "文化传媒概念",
    "rise": 0.32,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  }
];
const THS_EVENTS = [
  {
    "title": "英伟达宣布黄仁勋辞任CEO，董事会寻找继任者",
    "desc": "",
    "heat": 186024,
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
  },
  {
    "title": "微信「看一看」正在小范围测试短剧入口",
    "desc": "",
    "heat": 138602,
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
        "name": "华是科技",
        "code": "301218",
        "chg": 16.836028
      }
    ]
  },
  {
    "title": "华为云宣布，首款昇腾原生具身世界模型来了",
    "desc": "",
    "heat": 22412,
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
        "chg": 16.836028
      }
    ]
  },
  {
    "title": "张一鸣：字节AI最早2029年或2030年追平OpenAI与Anthropic",
    "desc": "",
    "heat": 20130,
    "direction": "字节大模型",
    "themes": [
      "字节大模型",
      "字节系算力",
      "抖音概念(字节概念)"
    ],
    "stocks": [
      {
        "name": "凯撒文化",
        "code": "002425",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "三次APEC会议见证中国开放新高度",
    "desc": "",
    "heat": 11530,
    "direction": "深圳APEC",
    "themes": [
      "APEC",
      "深圳"
    ],
    "stocks": [
      {
        "name": "云天励飞-U",
        "code": "688343",
        "chg": 11.454545
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "养猪",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+2.35%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "超节点",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI算力芯片",
    "change": "+1.66%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+1.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中科院系",
    "change": "+1.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "广电",
    "change": "+1.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+1.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+1.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "饲料",
    "change": "+0.99%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+0.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "算力一体机",
    "change": "+0.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+0.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "火电",
    "change": "+0.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "IPv6",
    "change": "+0.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+0.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "OpenClaw概念",
    "change": "+0.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "锂矿/碳酸锂",
    "change": "+0.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5866,
    "price": "4.76",
    "change": "-7.75",
    "market_id": "33",
    "circulate_market_value": "7525423200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -1.82
      },
      {
        "name": "体外诊断",
        "change_pct": -1.44
      },
      {
        "name": "医疗器械",
        "change_pct": -0.93
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "基因测序",
        "change_pct": -1.84
      },
      {
        "name": "预制菜",
        "change_pct": -0.39
      },
      {
        "name": "水产养殖",
        "change_pct": -1.33
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.56
      },
      {
        "name": "海洋经济",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5866,
    "price": "12.18",
    "change": "-7.44",
    "market_id": "17",
    "circulate_market_value": "9911056400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "家电",
        "change_pct": -0.25
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.74
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.11
      },
      {
        "name": "厨卫家电",
        "change_pct": -0.49
      },
      {
        "name": "华为产业链",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5866,
    "price": "6.53",
    "change": "-9.05",
    "market_id": "17",
    "circulate_market_value": "5777610300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -1.1
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "信托",
        "change_pct": 0.3
      },
      {
        "name": "民营医院",
        "change_pct": -0.89
      },
      {
        "name": "社区团购",
        "change_pct": -1.56
      },
      {
        "name": "大金融",
        "change_pct": 0.2
      },
      {
        "name": "餐饮",
        "change_pct": -0.43
      },
      {
        "name": "首发经济",
        "change_pct": -0.74
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 6,
    "hot_rank_chg": 10,
    "stock_cnt": 5866,
    "price": "5.92",
    "change": "-7.06",
    "market_id": "17",
    "circulate_market_value": "7903513600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "物联网",
        "change_pct": 0.2
      },
      {
        "name": "LED",
        "change_pct": -0.89
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.03
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5866,
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
        "change_pct": 0.4
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "游戏",
        "change_pct": 0.3
      },
      {
        "name": "影视",
        "change_pct": 2.34
      },
      {
        "name": "国企改革",
        "change_pct": -0.15
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.83
      },
      {
        "name": "AI视频",
        "change_pct": 0.48
      }
    ]
  },
  {
    "code": "603536",
    "name": "惠发食品",
    "hot_rank": 9,
    "hot_rank_chg": 38,
    "stock_cnt": 5866,
    "price": "12.50",
    "change": "-4.14",
    "market_id": "17",
    "circulate_market_value": "3006653300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.32
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "食品",
        "change_pct": -0.8
      },
      {
        "name": "社区团购",
        "change_pct": -1.56
      },
      {
        "name": "预制菜",
        "change_pct": -0.39
      },
      {
        "name": "回购",
        "change_pct": -0.25
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 10,
    "hot_rank_chg": 10,
    "stock_cnt": 5866,
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
        "change_pct": -1.93
      },
      {
        "name": "高速公路",
        "change_pct": -0.57
      },
      {
        "name": "振兴东北",
        "change_pct": -0.79
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.11
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 11,
    "hot_rank_chg": 0,
    "stock_cnt": 5866,
    "price": "9.97",
    "change": "-8.95",
    "market_id": "33",
    "circulate_market_value": "5983163700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.32
      },
      {
        "name": "边缘计算",
        "change_pct": 0.26
      },
      {
        "name": "核电",
        "change_pct": -0.18
      },
      {
        "name": "海工装备",
        "change_pct": -0.19
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.12
      },
      {
        "name": "冷链",
        "change_pct": -0.45
      },
      {
        "name": "地热",
        "change_pct": -1.34
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "碳中和",
        "change_pct": -0.53
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.48
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.1
      },
      {
        "name": "热泵",
        "change_pct": -0.74
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.3
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -1.28
      },
      {
        "name": "海洋经济",
        "change_pct": -0.51
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 12,
    "hot_rank_chg": 11,
    "stock_cnt": 5866,
    "price": "3.20",
    "change": "-3.90",
    "market_id": "17",
    "circulate_market_value": "7079453000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.38
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.12
      },
      {
        "name": "光通信",
        "change_pct": -1.23
      },
      {
        "name": "林业",
        "change_pct": -2.5
      },
      {
        "name": "军民融合",
        "change_pct": 0.16
      },
      {
        "name": "军工",
        "change_pct": 0.04
      },
      {
        "name": "人造肉",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 14,
    "hot_rank_chg": 16,
    "stock_cnt": 5866,
    "price": "6.04",
    "change": "-9.31",
    "market_id": "33",
    "circulate_market_value": "4621450000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.85
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.81
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "医药商业",
        "change_pct": -0.98
      },
      {
        "name": "保健品",
        "change_pct": -0.62
      },
      {
        "name": "民营医院",
        "change_pct": -0.89
      },
      {
        "name": "医药",
        "change_pct": -0.93
      },
      {
        "name": "食品",
        "change_pct": -0.8
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.37
      },
      {
        "name": "口腔",
        "change_pct": -1.25
      },
      {
        "name": "医美",
        "change_pct": -1.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.56
      }
    ]
  },
  {
    "code": "002593",
    "name": "日上集团",
    "hot_rank": 18,
    "hot_rank_chg": 56,
    "stock_cnt": 5866,
    "price": "4.74",
    "change": "-9.37",
    "market_id": "33",
    "circulate_market_value": "2656790500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.08
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.06
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.94
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.22
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.49
      },
      {
        "name": "胎压监测",
        "change_pct": -0.3
      },
      {
        "name": "自贸区",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 21,
    "hot_rank_chg": 35,
    "stock_cnt": 5866,
    "price": "2.88",
    "change": "2.49",
    "market_id": "17",
    "circulate_market_value": "10050589900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.27
      },
      {
        "name": "车联网/车路云",
        "change_pct": 0.08
      },
      {
        "name": "超高清视频",
        "change_pct": 0.62
      },
      {
        "name": "人工智能",
        "change_pct": -0.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.12
      },
      {
        "name": "影视",
        "change_pct": 2.34
      },
      {
        "name": "智慧城市",
        "change_pct": 0.16
      },
      {
        "name": "国产芯片",
        "change_pct": 0.33
      },
      {
        "name": "振兴东北",
        "change_pct": -0.79
      },
      {
        "name": "传媒",
        "change_pct": -0.23
      },
      {
        "name": "低价股",
        "change_pct": -0.71
      },
      {
        "name": "国企改革",
        "change_pct": -0.15
      },
      {
        "name": "在线教育",
        "change_pct": 0.04
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.12
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.83
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.06
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 22,
    "hot_rank_chg": 9,
    "stock_cnt": 5866,
    "price": "5.05",
    "change": "-6.48",
    "market_id": "17",
    "circulate_market_value": "5860739400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "纺织服装",
        "change_pct": -0.23
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.11
      },
      {
        "name": "影视",
        "change_pct": 2.34
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.15
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.83
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 23,
    "hot_rank_chg": 27,
    "stock_cnt": 5866,
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
        "change_pct": -0.87
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.06
      },
      {
        "name": "自贸区",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "002310",
    "name": "东方新能",
    "hot_rank": 25,
    "hot_rank_chg": -8,
    "stock_cnt": 5866,
    "price": "2.75",
    "change": "-9.24",
    "market_id": "33",
    "circulate_market_value": "12097276000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.48
      },
      {
        "name": "强势人气股",
        "change_pct": -1.93
      },
      {
        "name": "京津冀",
        "change_pct": -0.07
      },
      {
        "name": "旅游",
        "change_pct": -0.54
      },
      {
        "name": "园林",
        "change_pct": -0.31
      },
      {
        "name": "海绵城市",
        "change_pct": -0.34
      },
      {
        "name": "固废处理",
        "change_pct": -0.18
      },
      {
        "name": "光伏",
        "change_pct": -1.07
      },
      {
        "name": "风电",
        "change_pct": -0.03
      },
      {
        "name": "雄安新区",
        "change_pct": -0.45
      },
      {
        "name": "北京城市规划",
        "change_pct": -0.99
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.24
      },
      {
        "name": "储能",
        "change_pct": -0.21
      },
      {
        "name": "碳中和",
        "change_pct": -0.53
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.54
      },
      {
        "name": "汽车拆解",
        "change_pct": -1.02
      },
      {
        "name": "土壤修复",
        "change_pct": -0.32
      },
      {
        "name": "核污染防治",
        "change_pct": -0.76
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.5
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.43
      },
      {
        "name": "西部大开发",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "601566",
    "name": "九牧王",
    "hot_rank": 27,
    "hot_rank_chg": 58,
    "stock_cnt": 5866,
    "price": "11.80",
    "change": "-5.37",
    "market_id": "17",
    "circulate_market_value": "6780718400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": -0.14
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 28,
    "hot_rank_chg": -2,
    "stock_cnt": 5866,
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
        "change_pct": -0.24
      },
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "光伏",
        "change_pct": -1.08
      },
      {
        "name": "有色金属",
        "change_pct": -0.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.36
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.29
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 30,
    "hot_rank_chg": 191,
    "stock_cnt": 5866,
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
        "change_pct": -0.99
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -0.38
      },
      {
        "name": "物业管理",
        "change_pct": -1.42
      },
      {
        "name": "预制菜",
        "change_pct": -0.09
      },
      {
        "name": "地摊经济",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 31,
    "hot_rank_chg": -2,
    "stock_cnt": 5866,
    "price": "9.56",
    "change": "-4.68",
    "market_id": "33",
    "circulate_market_value": "4533120300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.42
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "VR&AR",
        "change_pct": 0.2
      },
      {
        "name": "游戏",
        "change_pct": 0.32
      },
      {
        "name": "影视",
        "change_pct": 2.25
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.2
      },
      {
        "name": "动漫",
        "change_pct": 0.94
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.01
      },
      {
        "name": "传媒",
        "change_pct": -0.23
      },
      {
        "name": "元宇宙",
        "change_pct": 0.17
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.79
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 34,
    "hot_rank_chg": 435,
    "stock_cnt": 5866,
    "price": "9.07",
    "change": "1.23",
    "market_id": "33",
    "circulate_market_value": "8465227000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新疆国企改革",
        "change_pct": -0.89
      },
      {
        "name": "新疆概念",
        "change_pct": -0.36
      },
      {
        "name": "光伏",
        "change_pct": -1.08
      },
      {
        "name": "风电",
        "change_pct": -0.01
      },
      {
        "name": "储能",
        "change_pct": -0.2
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "603725",
    "name": "天安新材",
    "hot_rank": 35,
    "hot_rank_chg": 143,
    "stock_cnt": 5866,
    "price": "12.79",
    "change": "-2.81",
    "market_id": "17",
    "circulate_market_value": "3899129700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.92
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.26
      },
      {
        "name": "家具家居",
        "change_pct": 0.14
      },
      {
        "name": "耐火材料",
        "change_pct": -2.08
      },
      {
        "name": "机器人",
        "change_pct": 0.24
      },
      {
        "name": "旧改",
        "change_pct": -0.72
      },
      {
        "name": "回购",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 37,
    "hot_rank_chg": 264,
    "stock_cnt": 5866,
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
        "change_pct": -0.76
      },
      {
        "name": "冷链",
        "change_pct": -0.42
      },
      {
        "name": "医药",
        "change_pct": -0.85
      },
      {
        "name": "食品",
        "change_pct": -0.69
      },
      {
        "name": "食品安全",
        "change_pct": 0.2
      },
      {
        "name": "预制菜",
        "change_pct": -0.09
      },
      {
        "name": "低价股",
        "change_pct": -0.64
      },
      {
        "name": "水产养殖",
        "change_pct": -1.07
      },
      {
        "name": "海洋经济",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "600853",
    "name": "龙建股份",
    "hot_rank": 39,
    "hot_rank_chg": 118,
    "stock_cnt": 5866,
    "price": "4.29",
    "change": "1.90",
    "market_id": "17",
    "circulate_market_value": "4348792400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "水利",
        "change_pct": 0.08
      },
      {
        "name": "智慧城市",
        "change_pct": 0.17
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "冰雪产业",
        "change_pct": -1.44
      },
      {
        "name": "振兴东北",
        "change_pct": -0.69
      },
      {
        "name": "大基建",
        "change_pct": -0.57
      },
      {
        "name": "中俄贸易",
        "change_pct": -0.48
      },
      {
        "name": "新型城镇化",
        "change_pct": -0.43
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.08
      },
      {
        "name": "旧改",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 40,
    "hot_rank_chg": -16,
    "stock_cnt": 5866,
    "price": "7.00",
    "change": "-4.11",
    "market_id": "33",
    "circulate_market_value": "13405647100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -2.02
      },
      {
        "name": "林业",
        "change_pct": -2.56
      },
      {
        "name": "碳中和",
        "change_pct": -0.51
      },
      {
        "name": "自贸区",
        "change_pct": -1.02
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 41,
    "hot_rank_chg": -3,
    "stock_cnt": 5866,
    "price": "4.43",
    "change": "-5.34",
    "market_id": "33",
    "circulate_market_value": "11750799000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "装修装饰",
        "change_pct": -0.36
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.92
      },
      {
        "name": "破净股",
        "change_pct": -0.15
      },
      {
        "name": "航天",
        "change_pct": 0.43
      },
      {
        "name": "旧改",
        "change_pct": -0.72
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 45,
    "hot_rank_chg": 15,
    "stock_cnt": 5866,
    "price": "12.49",
    "change": "-3.33",
    "market_id": "33",
    "circulate_market_value": "7069649000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "石墨烯",
        "change_pct": -0.92
      },
      {
        "name": "军民融合",
        "change_pct": 0.16
      },
      {
        "name": "物联网",
        "change_pct": 0.22
      },
      {
        "name": "LED",
        "change_pct": -0.87
      },
      {
        "name": "军工",
        "change_pct": 0.06
      },
      {
        "name": "智慧灯杆",
        "change_pct": -0.26
      },
      {
        "name": "海洋经济",
        "change_pct": -0.48
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 52,
    "hot_rank_chg": -3,
    "stock_cnt": 5866,
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
        "change_pct": 0.06
      },
      {
        "name": "饲料",
        "change_pct": 1.21
      },
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "保健品",
        "change_pct": -0.56
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.7
      },
      {
        "name": "污水处理",
        "change_pct": 0.1
      },
      {
        "name": "环保",
        "change_pct": -0.2
      },
      {
        "name": "食品",
        "change_pct": -0.69
      },
      {
        "name": "预制菜",
        "change_pct": -0.09
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "水产养殖",
        "change_pct": -1.07
      },
      {
        "name": "广西概念",
        "change_pct": -0.62
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 54,
    "hot_rank_chg": 70,
    "stock_cnt": 5866,
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
        "change_pct": 0.11
      },
      {
        "name": "手游",
        "change_pct": 0.42
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "游戏",
        "change_pct": 0.32
      },
      {
        "name": "物联网",
        "change_pct": 0.22
      },
      {
        "name": "机器人",
        "change_pct": 0.24
      },
      {
        "name": "无人机",
        "change_pct": 0.52
      },
      {
        "name": "国产芯片",
        "change_pct": 0.31
      },
      {
        "name": "5G消息/RCS",
        "change_pct": 0.17
      },
      {
        "name": "低空经济",
        "change_pct": 0.1
      },
      {
        "name": "无人物流车",
        "change_pct": 0.43
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 56,
    "hot_rank_chg": -13,
    "stock_cnt": 5866,
    "price": "9.95",
    "change": "-3.87",
    "market_id": "17",
    "circulate_market_value": "4305102800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 0.36
      },
      {
        "name": "股权转让",
        "change_pct": -0.23
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "光伏",
        "change_pct": -1.08
      },
      {
        "name": "无线耳机",
        "change_pct": -0.48
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "600637",
    "name": "东方明珠",
    "hot_rank": 58,
    "hot_rank_chg": 247,
    "stock_cnt": 5866,
    "price": "8.42",
    "change": "5.38",
    "market_id": "17",
    "circulate_market_value": "28307196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 1.25
      },
      {
        "name": "高管增持",
        "change_pct": 0.28
      },
      {
        "name": "超高清视频",
        "change_pct": 0.6
      },
      {
        "name": "电竞",
        "change_pct": -0.16
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.27
      },
      {
        "name": "游戏",
        "change_pct": 0.32
      },
      {
        "name": "物联网",
        "change_pct": 0.22
      },
      {
        "name": "教育",
        "change_pct": -0.03
      },
      {
        "name": "智慧城市",
        "change_pct": 0.17
      },
      {
        "name": "破净股",
        "change_pct": -0.15
      },
      {
        "name": "传媒",
        "change_pct": -0.23
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.5
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "在线教育",
        "change_pct": 0.09
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.1
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 59,
    "hot_rank_chg": 392,
    "stock_cnt": 5866,
    "price": "5.54",
    "change": "9.92",
    "market_id": "33",
    "circulate_market_value": "5582044800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "工业自动化",
        "change_pct": -0.04
      },
      {
        "name": "机械",
        "change_pct": 0.19
      },
      {
        "name": "智能制造",
        "change_pct": 0.21
      },
      {
        "name": "国产芯片",
        "change_pct": 0.31
      },
      {
        "name": "信创",
        "change_pct": 0.4
      },
      {
        "name": "AI算力芯片",
        "change_pct": 1.6
      }
    ]
  },
  {
    "code": "002029",
    "name": "七匹狼",
    "hot_rank": 61,
    "hot_rank_chg": 38,
    "stock_cnt": 5866,
    "price": "9.03",
    "change": "-4.76",
    "market_id": "33",
    "circulate_market_value": "5995307700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "纺织服装",
        "change_pct": -0.14
      },
      {
        "name": "破净股",
        "change_pct": -0.15
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600892",
    "name": "大晟文化",
    "hot_rank": 68,
    "hot_rank_chg": 15,
    "stock_cnt": 5866,
    "price": "5.38",
    "change": "-1.28",
    "market_id": "17",
    "circulate_market_value": "3009139100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": 0.42
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.26
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "游戏",
        "change_pct": 0.32
      },
      {
        "name": "影视",
        "change_pct": 2.25
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 69,
    "hot_rank_chg": -1,
    "stock_cnt": 5866,
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
        "change_pct": 0.42
      },
      {
        "name": "ST摘帽",
        "change_pct": -0.26
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "人工智能",
        "change_pct": -0.05
      },
      {
        "name": "VR&AR",
        "change_pct": 0.2
      },
      {
        "name": "游戏",
        "change_pct": 0.32
      },
      {
        "name": "动漫",
        "change_pct": 0.94
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.01
      },
      {
        "name": "快手概念股",
        "change_pct": -0.71
      },
      {
        "name": "NFT",
        "change_pct": -0.11
      },
      {
        "name": "元宇宙",
        "change_pct": 0.17
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.08
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.34
      },
      {
        "name": "云游戏",
        "change_pct": -0.13
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "002313",
    "name": "日海智能",
    "hot_rank": 70,
    "hot_rank_chg": -5,
    "stock_cnt": 5866,
    "price": "9.58",
    "change": "-0.42",
    "market_id": "33",
    "circulate_market_value": "3582809900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.11
      },
      {
        "name": "边缘计算",
        "change_pct": 0.27
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.38
      },
      {
        "name": "5G",
        "change_pct": -0.39
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "人工智能",
        "change_pct": -0.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.09
      },
      {
        "name": "北斗导航",
        "change_pct": 0.61
      },
      {
        "name": "物联网",
        "change_pct": 0.22
      },
      {
        "name": "智慧城市",
        "change_pct": 0.17
      },
      {
        "name": "智能制造",
        "change_pct": 0.21
      },
      {
        "name": "工业互联网",
        "change_pct": 0.39
      },
      {
        "name": "小米概念股",
        "change_pct": -0.05
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.17
      },
      {
        "name": "华为海思",
        "change_pct": 0.28
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "低空经济",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "300118",
    "name": "东方日升",
    "hot_rank": 72,
    "hot_rank_chg": -26,
    "stock_cnt": 5866,
    "price": "9.22",
    "change": "-5.34",
    "market_id": "33",
    "circulate_market_value": "8542510500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "SpaceX概念股",
        "change_pct": -0.83
      },
      {
        "name": "光伏",
        "change_pct": -1.08
      },
      {
        "name": "储能",
        "change_pct": -0.2
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.84
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.93
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.92
      },
      {
        "name": "光伏胶膜",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 73,
    "hot_rank_chg": -16,
    "stock_cnt": 5866,
    "price": "9.95",
    "change": "-8.63",
    "market_id": "17",
    "circulate_market_value": "6385743000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -1.56
      },
      {
        "name": "农业种植",
        "change_pct": -0.6
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.36
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.37
      },
      {
        "name": "休闲食品",
        "change_pct": -1.33
      },
      {
        "name": "食品",
        "change_pct": -0.69
      },
      {
        "name": "食品安全",
        "change_pct": 0.2
      },
      {
        "name": "社区团购",
        "change_pct": -1.23
      },
      {
        "name": "大农业",
        "change_pct": 0.16
      },
      {
        "name": "预制菜",
        "change_pct": -0.09
      },
      {
        "name": "人造肉",
        "change_pct": -0.6
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      }
    ]
  },
  {
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 77,
    "hot_rank_chg": 112,
    "stock_cnt": 5866,
    "price": "9.93",
    "change": "1.32",
    "market_id": "33",
    "circulate_market_value": "4902053200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -0.24
      },
      {
        "name": "彩票",
        "change_pct": 0.46
      },
      {
        "name": "人工智能",
        "change_pct": -0.05
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.09
      },
      {
        "name": "包装印刷",
        "change_pct": -0.2
      },
      {
        "name": "数字经济",
        "change_pct": 0.06
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.5
      },
      {
        "name": "AIGC概念",
        "change_pct": -0.18
      },
      {
        "name": "ETC",
        "change_pct": -0.21
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.48
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.25
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.1
      },
      {
        "name": "英伟达概念",
        "change_pct": -0.97
      },
      {
        "name": "区块链",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 79,
    "hot_rank_chg": 31,
    "stock_cnt": 5866,
    "price": "12.06",
    "change": "-1.07",
    "market_id": "17",
    "circulate_market_value": "4834636700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -0.27
      },
      {
        "name": "新零售",
        "change_pct": -0.99
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "物业管理",
        "change_pct": -1.42
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "地摊经济",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 81,
    "hot_rank_chg": -1,
    "stock_cnt": 5866,
    "price": "10.05",
    "change": "0.70",
    "market_id": "33",
    "circulate_market_value": "10663149000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 0.27
      },
      {
        "name": "电子烟",
        "change_pct": 0.16
      },
      {
        "name": "一带一路",
        "change_pct": -0.29
      },
      {
        "name": "造纸",
        "change_pct": -0.31
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "包装印刷",
        "change_pct": -0.2
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.04
      },
      {
        "name": "太空算力",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "000573",
    "name": "粤宏远A",
    "hot_rank": 84,
    "hot_rank_chg": 247,
    "stock_cnt": 5866,
    "price": "4.06",
    "change": "-6.67",
    "market_id": "33",
    "circulate_market_value": "2574770100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": -0.12
      },
      {
        "name": "房地产",
        "change_pct": -1.16
      },
      {
        "name": "固废处理",
        "change_pct": -0.15
      },
      {
        "name": "有色金属",
        "change_pct": -0.32
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.09
      },
      {
        "name": "环保",
        "change_pct": -0.2
      },
      {
        "name": "篮球",
        "change_pct": -1.12
      }
    ]
  },
  {
    "code": "002506",
    "name": "协鑫集成",
    "hot_rank": 85,
    "hot_rank_chg": -23,
    "stock_cnt": 5866,
    "price": "2.40",
    "change": "-8.05",
    "market_id": "33",
    "circulate_market_value": "14026661000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.15
      },
      {
        "name": "光伏",
        "change_pct": -1.08
      },
      {
        "name": "储能",
        "change_pct": -0.2
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.37
      },
      {
        "name": "颗粒硅",
        "change_pct": -2.25
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.84
      },
      {
        "name": "低价股",
        "change_pct": -0.64
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.93
      },
      {
        "name": "异质结电池HJT",
        "change_pct": -0.92
      },
      {
        "name": "华为产业链",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "002520",
    "name": "日发精机",
    "hot_rank": 88,
    "hot_rank_chg": -25,
    "stock_cnt": 5866,
    "price": "7.02",
    "change": "0.14",
    "market_id": "33",
    "circulate_market_value": "4944315400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "通用航空",
        "change_pct": 0.21
      },
      {
        "name": "工业自动化",
        "change_pct": -0.04
      },
      {
        "name": "大飞机",
        "change_pct": 0.36
      },
      {
        "name": "军民融合",
        "change_pct": 0.16
      },
      {
        "name": "风电",
        "change_pct": -0.01
      },
      {
        "name": "军工",
        "change_pct": 0.06
      },
      {
        "name": "机器人",
        "change_pct": 0.24
      },
      {
        "name": "智能制造",
        "change_pct": 0.21
      },
      {
        "name": "工业母机",
        "change_pct": 0.57
      },
      {
        "name": "减速器",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 91,
    "hot_rank_chg": 52,
    "stock_cnt": 5866,
    "price": "12.74",
    "change": "-6.32",
    "market_id": "17",
    "circulate_market_value": "8484840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.99
      }
    ]
  },
  {
    "code": "002205",
    "name": "国统股份",
    "hot_rank": 93,
    "hot_rank_chg": 360,
    "stock_cnt": 5866,
    "price": "12.93",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "2402952900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.01
      },
      {
        "name": "水利",
        "change_pct": 0.08
      },
      {
        "name": "海绵城市",
        "change_pct": -0.3
      },
      {
        "name": "新疆概念",
        "change_pct": -0.36
      },
      {
        "name": "风电",
        "change_pct": -0.01
      },
      {
        "name": "地下管廊",
        "change_pct": -0.03
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "西部大开发",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "600293",
    "name": "三峡新材",
    "hot_rank": 94,
    "hot_rank_chg": 9,
    "stock_cnt": 5866,
    "price": "3.99",
    "change": "-5.67",
    "market_id": "17",
    "circulate_market_value": "4628978700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -0.45
      },
      {
        "name": "强势人气股",
        "change_pct": -1.94
      },
      {
        "name": "玻璃",
        "change_pct": -1.25
      },
      {
        "name": "国企改革",
        "change_pct": -0.1
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.42
      }
    ]
  },
  {
    "code": "002277",
    "name": "友阿股份",
    "hot_rank": 96,
    "hot_rank_chg": 349,
    "stock_cnt": 5866,
    "price": "6.29",
    "change": "-4.99",
    "market_id": "33",
    "circulate_market_value": "8755405200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.63
      },
      {
        "name": "半导体",
        "change_pct": 0.36
      },
      {
        "name": "股权转让",
        "change_pct": -0.23
      },
      {
        "name": "新零售",
        "change_pct": -0.99
      },
      {
        "name": "工业自动化",
        "change_pct": -0.04
      },
      {
        "name": "机器人",
        "change_pct": 0.24
      },
      {
        "name": "智能制造",
        "change_pct": 0.21
      },
      {
        "name": "长寿药NMN",
        "change_pct": 0.2
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -0.34
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.46
      },
      {
        "name": "免税店概念",
        "change_pct": -0.52
      },
      {
        "name": "供应链金融",
        "change_pct": -0.22
      },
      {
        "name": "微信小店",
        "change_pct": -1.87
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002086", "name": "东方海洋", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5866, "price": "4.76", "change": "-7.75", "market_id": "33", "circulate_market_value": "7525423200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "精准医疗", "change_pct": -1.82}, {"name": "体外诊断", "change_pct": -1.44}, {"name": "医疗器械", "change_pct": -0.93}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "基因测序", "change_pct": -1.84}, {"name": "预制菜", "change_pct": -0.39}, {"name": "水产养殖", "change_pct": -1.33}, {"name": "新冠病毒防治", "change_pct": -0.56}, {"name": "海洋经济", "change_pct": -0.51}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 2, "hot_rank_chg": 19, "stock_cnt": 5866, "price": "13.11", "change": "-10.02", "market_id": "17", "circulate_market_value": "13698480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5866, "price": "12.18", "change": "-7.44", "market_id": "17", "circulate_market_value": "9911056400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.93}, {"name": "光伏", "change_pct": -1.07}, {"name": "家电", "change_pct": -0.25}, {"name": "储能", "change_pct": -0.21}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.74}, {"name": "华为鸿蒙", "change_pct": 0.11}, {"name": "厨卫家电", "change_pct": -0.49}, {"name": "华为产业链", "change_pct": -0.06}]}, {"code": "002242", "name": "九阳股份", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5866, "price": "26.65", "change": "0.00", "market_id": "33", "circulate_market_value": "20301054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5866, "price": "6.53", "change": "-9.05", "market_id": "17", "circulate_market_value": "5777610300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -1.1}, {"name": "优化生育（三孩）", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "信托", "change_pct": 0.3}, {"name": "民营医院", "change_pct": -0.89}, {"name": "社区团购", "change_pct": -1.56}, {"name": "大金融", "change_pct": 0.2}, {"name": "餐饮", "change_pct": -0.43}, {"name": "首发经济", "change_pct": -0.74}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 6, "hot_rank_chg": 10, "stock_cnt": 5866, "price": "5.92", "change": "-7.06", "market_id": "17", "circulate_market_value": "7903513600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.93}, {"name": "物联网", "change_pct": 0.2}, {"name": "LED", "change_pct": -0.89}, {"name": "卫星互联网", "change_pct": 0.03}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5866, "price": "20.62", "change": "-6.02", "market_id": "33", "circulate_market_value": "9477195300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "3.40", "change": "10.03", "market_id": "17", "circulate_market_value": "9732065600.00", "change_type": "1", "change_section": "18", "change_days": "10", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": 0.4}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "游戏", "change_pct": 0.3}, {"name": "影视", "change_pct": 2.34}, {"name": "国企改革", "change_pct": -0.15}, {"name": "短剧/互动影游", "change_pct": 0.83}, {"name": "AI视频", "change_pct": 0.48}]}, {"code": "603536", "name": "惠发食品", "hot_rank": 9, "hot_rank_chg": 38, "stock_cnt": 5866, "price": "12.50", "change": "-4.14", "market_id": "17", "circulate_market_value": "3006653300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.32}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "食品", "change_pct": -0.8}, {"name": "社区团购", "change_pct": -1.56}, {"name": "预制菜", "change_pct": -0.39}, {"name": "回购", "change_pct": -0.25}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 10, "hot_rank_chg": 10, "stock_cnt": 5866, "price": "4.30", "change": "-8.90", "market_id": "17", "circulate_market_value": "5613520600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.93}, {"name": "高速公路", "change_pct": -0.57}, {"name": "振兴东北", "change_pct": -0.79}, {"name": "黑龙江自贸区", "change_pct": -1.11}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 11, "hot_rank_chg": 0, "stock_cnt": 5866, "price": "9.97", "change": "-8.95", "market_id": "33", "circulate_market_value": "5983163700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.32}, {"name": "边缘计算", "change_pct": 0.26}, {"name": "核电", "change_pct": -0.18}, {"name": "海工装备", "change_pct": -0.19}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "云计算数据中心", "change_pct": -0.12}, {"name": "冷链", "change_pct": -0.45}, {"name": "地热", "change_pct": -1.34}, {"name": "储能", "change_pct": -0.21}, {"name": "碳中和", "change_pct": -0.53}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -1.48}, {"name": "汽车热管理", "change_pct": 0.1}, {"name": "热泵", "change_pct": -0.74}, {"name": "液冷服务器", "change_pct": -0.3}, {"name": "蜜雪冰城概念股", "change_pct": -1.28}, {"name": "海洋经济", "change_pct": -0.51}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 12, "hot_rank_chg": 11, "stock_cnt": 5866, "price": "3.20", "change": "-3.90", "market_id": "17", "circulate_market_value": "7079453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.38}, {"name": "云计算数据中心", "change_pct": -0.12}, {"name": "光通信", "change_pct": -1.23}, {"name": "林业", "change_pct": -2.5}, {"name": "军民融合", "change_pct": 0.16}, {"name": "军工", "change_pct": 0.04}, {"name": "人造肉", "change_pct": -0.86}]}, {"code": "002156", "name": "通富微电", "hot_rank": 13, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "48.03", "change": "-0.68", "market_id": "33", "circulate_market_value": "72883230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 14, "hot_rank_chg": 16, "stock_cnt": 5866, "price": "6.04", "change": "-9.31", "market_id": "33", "circulate_market_value": "4621450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.85}, {"name": "优化生育（三孩）", "change_pct": -0.81}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "医药商业", "change_pct": -0.98}, {"name": "保健品", "change_pct": -0.62}, {"name": "民营医院", "change_pct": -0.89}, {"name": "医药", "change_pct": -0.93}, {"name": "食品", "change_pct": -0.8}, {"name": "辅助生殖", "change_pct": -1.37}, {"name": "口腔", "change_pct": -1.25}, {"name": "医美", "change_pct": -1.06}, {"name": "新冠病毒防治", "change_pct": -0.56}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 15, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "486.40", "change": "-4.42", "market_id": "33", "circulate_market_value": "539873360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603706", "name": "东方环宇", "hot_rank": 16, "hot_rank_chg": 48, "stock_cnt": 5866, "price": "28.09", "change": "4.54", "market_id": "17", "circulate_market_value": "5319760400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 17, "hot_rank_chg": -11, "stock_cnt": 5866, "price": "13.79", "change": "-6.57", "market_id": "33", "circulate_market_value": "47960659000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002593", "name": "日上集团", "hot_rank": 18, "hot_rank_chg": 56, "stock_cnt": 5866, "price": "4.74", "change": "-9.37", "market_id": "33", "circulate_market_value": "2656790500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.08}, {"name": "福建自贸/海西概念", "change_pct": -2.06}, {"name": "装配式建筑", "change_pct": -0.94}, {"name": "汽车零部件", "change_pct": 0.22}, {"name": "新型城镇化", "change_pct": -0.49}, {"name": "胎压监测", "change_pct": -0.3}, {"name": "自贸区", "change_pct": -1.08}]}, {"code": "600410", "name": "华胜天成", "hot_rank": 19, "hot_rank_chg": 73, "stock_cnt": 5866, "price": "14.30", "change": "10.00", "market_id": "17", "circulate_market_value": "15679874000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力"}, {"code": "002384", "name": "东山精密", "hot_rank": 20, "hot_rank_chg": -16, "stock_cnt": 5866, "price": "90.11", "change": "-3.82", "market_id": "33", "circulate_market_value": "124921450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 21, "hot_rank_chg": 35, "stock_cnt": 5866, "price": "2.88", "change": "2.49", "market_id": "17", "circulate_market_value": "10050589900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 1.27}, {"name": "车联网/车路云", "change_pct": 0.08}, {"name": "超高清视频", "change_pct": 0.62}, {"name": "人工智能", "change_pct": -0.07}, {"name": "云计算数据中心", "change_pct": -0.12}, {"name": "影视", "change_pct": 2.34}, {"name": "智慧城市", "change_pct": 0.16}, {"name": "国产芯片", "change_pct": 0.33}, {"name": "振兴东北", "change_pct": -0.79}, {"name": "传媒", "change_pct": -0.23}, {"name": "低价股", "change_pct": -0.71}, {"name": "国企改革", "change_pct": -0.15}, {"name": "在线教育", "change_pct": 0.04}, {"name": "医疗信息化", "change_pct": 0.12}, {"name": "AI大模型/智能体", "change_pct": -0.12}, {"name": "短剧/互动影游", "change_pct": 0.83}, {"name": "IP经济/谷子经济", "change_pct": 0.06}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 22, "hot_rank_chg": 9, "stock_cnt": 5866, "price": "5.05", "change": "-6.48", "market_id": "17", "circulate_market_value": "5860739400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.93}, {"name": "纺织服装", "change_pct": -0.23}, {"name": "浙江国企改革", "change_pct": -0.11}, {"name": "影视", "change_pct": 2.34}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.15}, {"name": "短剧/互动影游", "change_pct": 0.83}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 23, "hot_rank_chg": 27, "stock_cnt": 5866, "price": "7.73", "change": "-10.01", "market_id": "17", "circulate_market_value": "3542260100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -0.87}, {"name": "福建自贸/海西概念", "change_pct": -2.06}, {"name": "自贸区", "change_pct": -1.08}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 24, "hot_rank_chg": 1, "stock_cnt": 5866, "price": "18.95", "change": "3.44", "market_id": "33", "circulate_market_value": "3361881600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002310", "name": "东方新能", "hot_rank": 25, "hot_rank_chg": -8, "stock_cnt": 5866, "price": "2.75", "change": "-9.24", "market_id": "33", "circulate_market_value": "12097276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.48}, {"name": "强势人气股", "change_pct": -1.93}, {"name": "京津冀", "change_pct": -0.07}, {"name": "旅游", "change_pct": -0.54}, {"name": "园林", "change_pct": -0.31}, {"name": "海绵城市", "change_pct": -0.34}, {"name": "固废处理", "change_pct": -0.18}, {"name": "光伏", "change_pct": -1.07}, {"name": "风电", "change_pct": -0.03}, {"name": "雄安新区", "change_pct": -0.45}, {"name": "北京城市规划", "change_pct": -0.99}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.24}, {"name": "储能", "change_pct": -0.21}, {"name": "碳中和", "change_pct": -0.53}, {"name": "乡村振兴", "change_pct": -0.54}, {"name": "汽车拆解", "change_pct": -1.02}, {"name": "土壤修复", "change_pct": -0.32}, {"name": "核污染防治", "change_pct": -0.76}, {"name": "东数西算/算力", "change_pct": 0.5}, {"name": "新型城镇化", "change_pct": -0.43}, {"name": "西部大开发", "change_pct": -0.52}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 26, "hot_rank_chg": 19, "stock_cnt": 5866, "price": "21.47", "change": "2.63", "market_id": "17", "circulate_market_value": "4533673500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601566", "name": "九牧王", "hot_rank": 27, "hot_rank_chg": 58, "stock_cnt": 5866, "price": "11.80", "change": "-5.37", "market_id": "17", "circulate_market_value": "6780718400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "纺织服装", "change_pct": -0.14}, {"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "自贸区", "change_pct": -1.02}, {"name": "IP经济/谷子经济", "change_pct": 0.07}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 28, "hot_rank_chg": -2, "stock_cnt": 5866, "price": "5.44", "change": "-9.93", "market_id": "33", "circulate_market_value": "4684724300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.24}, {"name": "一带一路", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "光伏", "change_pct": -1.08}, {"name": "有色金属", "change_pct": -0.32}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "新能源车零部件", "change_pct": 0.36}, {"name": "自贸区", "change_pct": -1.02}, {"name": "液冷服务器", "change_pct": -0.29}]}, {"code": "605255", "name": "天普股份", "hot_rank": 29, "hot_rank_chg": 126, "stock_cnt": 5866, "price": "73.82", "change": "10.00", "market_id": "17", "circulate_market_value": "9897785600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "中昊芯英"}, {"code": "002187", "name": "广百股份", "hot_rank": 30, "hot_rank_chg": 191, "stock_cnt": 5866, "price": "6.97", "change": "9.94", "market_id": "33", "circulate_market_value": "4885235600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -0.99}, {"name": "粤港澳大湾区", "change_pct": -0.38}, {"name": "物业管理", "change_pct": -1.42}, {"name": "预制菜", "change_pct": -0.09}, {"name": "地摊经济", "change_pct": -0.16}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 31, "hot_rank_chg": -2, "stock_cnt": 5866, "price": "9.56", "change": "-4.68", "market_id": "33", "circulate_market_value": "4533120300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.42}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "VR&AR", "change_pct": 0.2}, {"name": "游戏", "change_pct": 0.32}, {"name": "影视", "change_pct": 2.25}, {"name": "直播/短视频", "change_pct": -1.2}, {"name": "动漫", "change_pct": 0.94}, {"name": "腾讯概念股", "change_pct": -0.01}, {"name": "传媒", "change_pct": -0.23}, {"name": "元宇宙", "change_pct": 0.17}, {"name": "短剧/互动影游", "change_pct": 0.79}, {"name": "IP经济/谷子经济", "change_pct": 0.07}]}, {"code": "002708", "name": "光洋股份", "hot_rank": 32, "hot_rank_chg": -5, "stock_cnt": 5866, "price": "24.65", "change": "-1.83", "market_id": "33", "circulate_market_value": "12557291800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 33, "hot_rank_chg": 4, "stock_cnt": 5866, "price": "31.91", "change": "-2.18", "market_id": "17", "circulate_market_value": "23110128000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 34, "hot_rank_chg": 435, "stock_cnt": 5866, "price": "9.07", "change": "1.23", "market_id": "33", "circulate_market_value": "8465227000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新疆国企改革", "change_pct": -0.89}, {"name": "新疆概念", "change_pct": -0.36}, {"name": "光伏", "change_pct": -1.08}, {"name": "风电", "change_pct": -0.01}, {"name": "储能", "change_pct": -0.2}, {"name": "国企改革", "change_pct": -0.1}]}, {"code": "603725", "name": "天安新材", "hot_rank": 35, "hot_rank_chg": 143, "stock_cnt": 5866, "price": "12.79", "change": "-2.81", "market_id": "17", "circulate_market_value": "3899129700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.94}, {"name": "装配式建筑", "change_pct": -0.92}, {"name": "汽车零部件", "change_pct": 0.26}, {"name": "家具家居", "change_pct": 0.14}, {"name": "耐火材料", "change_pct": -2.08}, {"name": "机器人", "change_pct": 0.24}, {"name": "旧改", "change_pct": -0.72}, {"name": "回购", "change_pct": -0.22}]}, {"code": "002931", "name": "锋龙股份", "hot_rank": 36, "hot_rank_chg": -14, "stock_cnt": 5866, "price": "62.26", "change": "10.00", "market_id": "33", "circulate_market_value": "12612372900.00", "change_type": "1", "change_section": "5", "change_days": "4", "change_reason": "机器人关节"}, {"code": "600467", "name": "好当家", "hot_rank": 37, "hot_rank_chg": 264, "stock_cnt": 5866, "price": "2.73", "change": "10.08", "market_id": "17", "circulate_market_value": "3988514400.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "海参", "xgb_concepts": [{"name": "中药", "change_pct": -0.76}, {"name": "冷链", "change_pct": -0.42}, {"name": "医药", "change_pct": -0.85}, {"name": "食品", "change_pct": -0.69}, {"name": "食品安全", "change_pct": 0.2}, {"name": "预制菜", "change_pct": -0.09}, {"name": "低价股", "change_pct": -0.64}, {"name": "水产养殖", "change_pct": -1.07}, {"name": "海洋经济", "change_pct": -0.48}]}, {"code": "002623", "name": "亚玛顿", "hot_rank": 38, "hot_rank_chg": 110, "stock_cnt": 5866, "price": "24.41", "change": "-4.75", "market_id": "33", "circulate_market_value": "4708027200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600853", "name": "龙建股份", "hot_rank": 39, "hot_rank_chg": 118, "stock_cnt": 5866, "price": "4.29", "change": "1.90", "market_id": "17", "circulate_market_value": "4348792400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "水利", "change_pct": 0.08}, {"name": "智慧城市", "change_pct": 0.17}, {"name": "PPP", "change_pct": -0.9}, {"name": "冰雪产业", "change_pct": -1.44}, {"name": "振兴东北", "change_pct": -0.69}, {"name": "大基建", "change_pct": -0.57}, {"name": "中俄贸易", "change_pct": -0.48}, {"name": "新型城镇化", "change_pct": -0.43}, {"name": "黑龙江自贸区", "change_pct": -1.08}, {"name": "旧改", "change_pct": -0.72}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 40, "hot_rank_chg": -16, "stock_cnt": 5866, "price": "7.00", "change": "-4.11", "market_id": "33", "circulate_market_value": "13405647100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -2.02}, {"name": "林业", "change_pct": -2.56}, {"name": "碳中和", "change_pct": -0.51}, {"name": "自贸区", "change_pct": -1.02}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 41, "hot_rank_chg": -3, "stock_cnt": 5866, "price": "4.43", "change": "-5.34", "market_id": "33", "circulate_market_value": "11750799000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.94}, {"name": "装修装饰", "change_pct": -0.36}, {"name": "装配式建筑", "change_pct": -0.92}, {"name": "破净股", "change_pct": -0.15}, {"name": "航天", "change_pct": 0.43}, {"name": "旧改", "change_pct": -0.72}]}, {"code": "603629", "name": "利通电子", "hot_rank": 42, "hot_rank_chg": 77, "stock_cnt": 5866, "price": "65.24", "change": "-1.48", "market_id": "17", "circulate_market_value": "23533595000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 43, "hot_rank_chg": 53, "stock_cnt": 5866, "price": "26.33", "change": "3.42", "market_id": "33", "circulate_market_value": "19950314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 44, "hot_rank_chg": -34, "stock_cnt": 5866, "price": "704.00", "change": "0.44", "market_id": "17", "circulate_market_value": "21181755000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 45, "hot_rank_chg": 15, "stock_cnt": 5866, "price": "12.49", "change": "-3.33", "market_id": "33", "circulate_market_value": "7069649000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.94}, {"name": "石墨烯", "change_pct": -0.92}, {"name": "军民融合", "change_pct": 0.16}, {"name": "物联网", "change_pct": 0.22}, {"name": "LED", "change_pct": -0.87}, {"name": "军工", "change_pct": 0.06}, {"name": "智慧灯杆", "change_pct": -0.26}, {"name": "海洋经济", "change_pct": -0.48}]}, {"code": "603687", "name": "大胜达", "hot_rank": 46, "hot_rank_chg": 447, "stock_cnt": 5866, "price": "15.05", "change": "10.02", "market_id": "17", "circulate_market_value": "8277979600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GPU芯片"}, {"code": "300502", "name": "新易盛", "hot_rank": 47, "hot_rank_chg": -38, "stock_cnt": 5866, "price": "197.62", "change": "-3.87", "market_id": "33", "circulate_market_value": "247958510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002865", "name": "钧达股份", "hot_rank": 48, "hot_rank_chg": 47, "stock_cnt": 5866, "price": "41.91", "change": "-4.49", "market_id": "33", "circulate_market_value": "9589907100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 49, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "41.98", "change": "-0.40", "market_id": "17", "circulate_market_value": "18815436000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 50, "hot_rank_chg": -32, "stock_cnt": 5866, "price": "1000.44", "change": "2.82", "market_id": "17", "circulate_market_value": "629130700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 51, "hot_rank_chg": -23, "stock_cnt": 5866, "price": "54.54", "change": "-3.86", "market_id": "17", "circulate_market_value": "16279026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 52, "hot_rank_chg": -3, "stock_cnt": 5866, "price": "10.51", "change": "-10.02", "market_id": "33", "circulate_market_value": "3513061200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.06}, {"name": "饲料", "change_pct": 1.21}, {"name": "一带一路", "change_pct": -0.29}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "保健品", "change_pct": -0.56}, {"name": "山东国企改革", "change_pct": -0.7}, {"name": "污水处理", "change_pct": 0.1}, {"name": "环保", "change_pct": -0.2}, {"name": "食品", "change_pct": -0.69}, {"name": "预制菜", "change_pct": -0.09}, {"name": "国企改革", "change_pct": -0.1}, {"name": "水产养殖", "change_pct": -1.07}, {"name": "广西概念", "change_pct": -0.62}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 53, "hot_rank_chg": -38, "stock_cnt": 5866, "price": "121.05", "change": "-1.47", "market_id": "17", "circulate_market_value": "33359973000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002148", "name": "北纬科技", "hot_rank": 54, "hot_rank_chg": 70, "stock_cnt": 5866, "price": "7.95", "change": "9.96", "market_id": "33", "circulate_market_value": "3585661600.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "四足机器人", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.11}, {"name": "手游", "change_pct": 0.42}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "游戏", "change_pct": 0.32}, {"name": "物联网", "change_pct": 0.22}, {"name": "机器人", "change_pct": 0.24}, {"name": "无人机", "change_pct": 0.52}, {"name": "国产芯片", "change_pct": 0.31}, {"name": "5G消息/RCS", "change_pct": 0.17}, {"name": "低空经济", "change_pct": 0.1}, {"name": "无人物流车", "change_pct": 0.43}]}, {"code": "603396", "name": "金辰股份", "hot_rank": 55, "hot_rank_chg": 117, "stock_cnt": 5866, "price": "35.32", "change": "10.00", "market_id": "17", "circulate_market_value": "4892790500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光伏设备"}, {"code": "603330", "name": "天洋新材", "hot_rank": 56, "hot_rank_chg": -13, "stock_cnt": 5866, "price": "9.95", "change": "-3.87", "market_id": "17", "circulate_market_value": "4305102800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 0.36}, {"name": "股权转让", "change_pct": -0.23}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "光伏", "change_pct": -1.08}, {"name": "无线耳机", "change_pct": -0.48}, {"name": "华为产业链", "change_pct": -0.05}, {"name": "光伏胶膜", "change_pct": -0.36}]}, {"code": "001219", "name": "青岛食品", "hot_rank": 57, "hot_rank_chg": -15, "stock_cnt": 5866, "price": "20.85", "change": "-9.82", "market_id": "33", "circulate_market_value": "3963715900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600637", "name": "东方明珠", "hot_rank": 58, "hot_rank_chg": 247, "stock_cnt": 5866, "price": "8.42", "change": "5.38", "market_id": "17", "circulate_market_value": "28307196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 1.25}, {"name": "高管增持", "change_pct": 0.28}, {"name": "超高清视频", "change_pct": 0.6}, {"name": "电竞", "change_pct": -0.16}, {"name": "上海国企改革", "change_pct": -0.27}, {"name": "游戏", "change_pct": 0.32}, {"name": "物联网", "change_pct": 0.22}, {"name": "教育", "change_pct": -0.03}, {"name": "智慧城市", "change_pct": 0.17}, {"name": "破净股", "change_pct": -0.15}, {"name": "传媒", "change_pct": -0.23}, {"name": "东数西算/算力", "change_pct": 0.5}, {"name": "国企改革", "change_pct": -0.1}, {"name": "在线教育", "change_pct": 0.09}, {"name": "AI大模型/智能体", "change_pct": -0.1}, {"name": "短剧/互动影游", "change_pct": 0.79}]}, {"code": "002685", "name": "华东重机", "hot_rank": 59, "hot_rank_chg": 392, "stock_cnt": 5866, "price": "5.54", "change": "9.92", "market_id": "33", "circulate_market_value": "5582044800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.29}, {"name": "工业自动化", "change_pct": -0.04}, {"name": "机械", "change_pct": 0.19}, {"name": "智能制造", "change_pct": 0.21}, {"name": "国产芯片", "change_pct": 0.31}, {"name": "信创", "change_pct": 0.4}, {"name": "AI算力芯片", "change_pct": 1.6}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 60, "hot_rank_chg": -46, "stock_cnt": 5866, "price": "40.83", "change": "-0.34", "market_id": "17", "circulate_market_value": "183859080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002029", "name": "七匹狼", "hot_rank": 61, "hot_rank_chg": 38, "stock_cnt": 5866, "price": "9.03", "change": "-4.76", "market_id": "33", "circulate_market_value": "5995307700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.94}, {"name": "纺织服装", "change_pct": -0.14}, {"name": "破净股", "change_pct": -0.15}, {"name": "独角兽", "change_pct": 0.85}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 62, "hot_rank_chg": -30, "stock_cnt": 5866, "price": "253.90", "change": "-1.91", "market_id": "17", "circulate_market_value": "170295380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 63, "hot_rank_chg": -44, "stock_cnt": 5866, "price": "32.71", "change": "-1.21", "market_id": "33", "circulate_market_value": "33409589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 64, "hot_rank_chg": 3, "stock_cnt": 5866, "price": "14.64", "change": "-4.81", "market_id": "17", "circulate_market_value": "5003357500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 65, "hot_rank_chg": 73, "stock_cnt": 5866, "price": "13.64", "change": "-7.58", "market_id": "33", "circulate_market_value": "3858309000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600857", "name": "宁波中百", "hot_rank": 66, "hot_rank_chg": 362, "stock_cnt": 5866, "price": "15.75", "change": "5.00", "market_id": "17", "circulate_market_value": "3533038700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 67, "hot_rank_chg": -33, "stock_cnt": 5866, "price": "16.67", "change": "3.99", "market_id": "17", "circulate_market_value": "9915848800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600892", "name": "大晟文化", "hot_rank": 68, "hot_rank_chg": 15, "stock_cnt": 5866, "price": "5.38", "change": "-1.28", "market_id": "17", "circulate_market_value": "3009139100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": 0.42}, {"name": "ST摘帽", "change_pct": -0.26}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "游戏", "change_pct": 0.32}, {"name": "影视", "change_pct": 2.25}, {"name": "短剧/互动影游", "change_pct": 0.79}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 69, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "3.96", "change": "10.00", "market_id": "33", "circulate_market_value": "3643936300.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "AI游戏", "xgb_concepts": [{"name": "手游", "change_pct": 0.42}, {"name": "ST摘帽", "change_pct": -0.26}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "人工智能", "change_pct": -0.05}, {"name": "VR&AR", "change_pct": 0.2}, {"name": "游戏", "change_pct": 0.32}, {"name": "动漫", "change_pct": 0.94}, {"name": "腾讯概念股", "change_pct": -0.01}, {"name": "快手概念股", "change_pct": -0.71}, {"name": "NFT", "change_pct": -0.11}, {"name": "元宇宙", "change_pct": 0.17}, {"name": "虚拟数字人", "change_pct": -0.08}, {"name": "字节跳动概念股", "change_pct": -0.34}, {"name": "云游戏", "change_pct": -0.13}, {"name": "华为产业链", "change_pct": -0.05}, {"name": "IP经济/谷子经济", "change_pct": 0.07}]}, {"code": "002313", "name": "日海智能", "hot_rank": 70, "hot_rank_chg": -5, "stock_cnt": 5866, "price": "9.58", "change": "-0.42", "market_id": "33", "circulate_market_value": "3582809900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.11}, {"name": "边缘计算", "change_pct": 0.27}, {"name": "无人驾驶", "change_pct": 0.38}, {"name": "5G", "change_pct": -0.39}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "人工智能", "change_pct": -0.05}, {"name": "云计算数据中心", "change_pct": -0.09}, {"name": "北斗导航", "change_pct": 0.61}, {"name": "物联网", "change_pct": 0.22}, {"name": "智慧城市", "change_pct": 0.17}, {"name": "智能制造", "change_pct": 0.21}, {"name": "工业互联网", "change_pct": 0.39}, {"name": "小米概念股", "change_pct": -0.05}, {"name": "阿里巴巴概念股", "change_pct": 0.17}, {"name": "华为海思", "change_pct": 0.28}, {"name": "国企改革", "change_pct": -0.1}, {"name": "低空经济", "change_pct": 0.1}]}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 71, "hot_rank_chg": 703, "stock_cnt": 5866, "price": "29.75", "change": "-7.90", "market_id": "33", "circulate_market_value": "4518175400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300118", "name": "东方日升", "hot_rank": 72, "hot_rank_chg": -26, "stock_cnt": 5866, "price": "9.22", "change": "-5.34", "market_id": "33", "circulate_market_value": "8542510500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "SpaceX概念股", "change_pct": -0.83}, {"name": "光伏", "change_pct": -1.08}, {"name": "储能", "change_pct": -0.2}, {"name": "BIPV概念", "change_pct": -0.84}, {"name": "钙钛矿电池", "change_pct": -0.93}, {"name": "异质结电池HJT", "change_pct": -0.92}, {"name": "光伏胶膜", "change_pct": -0.36}]}, {"code": "600127", "name": "金健米业", "hot_rank": 73, "hot_rank_chg": -16, "stock_cnt": 5866, "price": "9.95", "change": "-8.63", "market_id": "17", "circulate_market_value": "6385743000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -1.56}, {"name": "农业种植", "change_pct": -0.6}, {"name": "湖南国企改革", "change_pct": -0.36}, {"name": "乡村振兴", "change_pct": -0.37}, {"name": "休闲食品", "change_pct": -1.33}, {"name": "食品", "change_pct": -0.69}, {"name": "食品安全", "change_pct": 0.2}, {"name": "社区团购", "change_pct": -1.23}, {"name": "大农业", "change_pct": 0.16}, {"name": "预制菜", "change_pct": -0.09}, {"name": "人造肉", "change_pct": -0.6}, {"name": "国企改革", "change_pct": -0.1}]}, {"code": "600206", "name": "有研新材", "hot_rank": 74, "hot_rank_chg": -30, "stock_cnt": 5866, "price": "38.54", "change": "-0.15", "market_id": "17", "circulate_market_value": "32626165000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 75, "hot_rank_chg": -22, "stock_cnt": 5866, "price": "35.45", "change": "-3.30", "market_id": "17", "circulate_market_value": "32990831000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 76, "hot_rank_chg": 52, "stock_cnt": 5866, "price": "113.48", "change": "1.57", "market_id": "17", "circulate_market_value": "227027400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002229", "name": "鸿博股份", "hot_rank": 77, "hot_rank_chg": 112, "stock_cnt": 5866, "price": "9.93", "change": "1.32", "market_id": "33", "circulate_market_value": "4902053200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -0.24}, {"name": "彩票", "change_pct": 0.46}, {"name": "人工智能", "change_pct": -0.05}, {"name": "云计算数据中心", "change_pct": -0.09}, {"name": "包装印刷", "change_pct": -0.2}, {"name": "数字经济", "change_pct": 0.06}, {"name": "东数西算/算力", "change_pct": 0.5}, {"name": "AIGC概念", "change_pct": -0.18}, {"name": "ETC", "change_pct": -0.21}, {"name": "词元概念/Token", "change_pct": 0.48}, {"name": "ChatGPT", "change_pct": -0.25}, {"name": "AI大模型/智能体", "change_pct": -0.1}, {"name": "英伟达概念", "change_pct": -0.97}, {"name": "区块链", "change_pct": 0.01}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 78, "hot_rank_chg": -5, "stock_cnt": 5866, "price": "14.73", "change": "-3.28", "market_id": "33", "circulate_market_value": "9723666200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 79, "hot_rank_chg": 31, "stock_cnt": 5866, "price": "12.06", "change": "-1.07", "market_id": "17", "circulate_market_value": "4834636700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -0.27}, {"name": "新零售", "change_pct": -0.99}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "物业管理", "change_pct": -1.42}, {"name": "国企改革", "change_pct": -0.1}, {"name": "地摊经济", "change_pct": -0.16}]}, {"code": "605169", "name": "洪通燃气", "hot_rank": 80, "hot_rank_chg": 311, "stock_cnt": 5866, "price": "14.13", "change": "4.28", "market_id": "17", "circulate_market_value": "3986920400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 81, "hot_rank_chg": -1, "stock_cnt": 5866, "price": "10.05", "change": "0.70", "market_id": "33", "circulate_market_value": "10663149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 0.27}, {"name": "电子烟", "change_pct": 0.16}, {"name": "一带一路", "change_pct": -0.29}, {"name": "造纸", "change_pct": -0.31}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "包装印刷", "change_pct": -0.2}, {"name": "卫星互联网", "change_pct": 0.04}, {"name": "太空算力", "change_pct": 0.59}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 82, "hot_rank_chg": -24, "stock_cnt": 5866, "price": "76.72", "change": "-0.03", "market_id": "33", "circulate_market_value": "50085675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688801", "name": "燧原科技", "hot_rank": 83, "hot_rank_chg": 29, "stock_cnt": 5866, "price": "564.50", "change": "1.01", "market_id": "17", "circulate_market_value": "10104733500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000573", "name": "粤宏远A", "hot_rank": 84, "hot_rank_chg": 247, "stock_cnt": 5866, "price": "4.06", "change": "-6.67", "market_id": "33", "circulate_market_value": "2574770100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": -0.12}, {"name": "房地产", "change_pct": -1.16}, {"name": "固废处理", "change_pct": -0.15}, {"name": "有色金属", "change_pct": -0.32}, {"name": "新能源汽车", "change_pct": 0.09}, {"name": "环保", "change_pct": -0.2}, {"name": "篮球", "change_pct": -1.12}]}, {"code": "002506", "name": "协鑫集成", "hot_rank": 85, "hot_rank_chg": -23, "stock_cnt": 5866, "price": "2.40", "change": "-8.05", "market_id": "33", "circulate_market_value": "14026661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "蚂蚁集团概念股", "change_pct": 0.15}, {"name": "光伏", "change_pct": -1.08}, {"name": "储能", "change_pct": -0.2}, {"name": "乡村振兴", "change_pct": -0.37}, {"name": "颗粒硅", "change_pct": -2.25}, {"name": "BIPV概念", "change_pct": -0.84}, {"name": "低价股", "change_pct": -0.64}, {"name": "钙钛矿电池", "change_pct": -0.93}, {"name": "异质结电池HJT", "change_pct": -0.92}, {"name": "华为产业链", "change_pct": -0.05}]}, {"code": "002164", "name": "宁波东力", "hot_rank": 86, "hot_rank_chg": -46, "stock_cnt": 5866, "price": "24.86", "change": "5.74", "market_id": "33", "circulate_market_value": "11932007800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 87, "hot_rank_chg": -28, "stock_cnt": 5866, "price": "63.15", "change": "-3.12", "market_id": "33", "circulate_market_value": "45798689000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002520", "name": "日发精机", "hot_rank": 88, "hot_rank_chg": -25, "stock_cnt": 5866, "price": "7.02", "change": "0.14", "market_id": "33", "circulate_market_value": "4944315400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "通用航空", "change_pct": 0.21}, {"name": "工业自动化", "change_pct": -0.04}, {"name": "大飞机", "change_pct": 0.36}, {"name": "军民融合", "change_pct": 0.16}, {"name": "风电", "change_pct": -0.01}, {"name": "军工", "change_pct": 0.06}, {"name": "机器人", "change_pct": 0.24}, {"name": "智能制造", "change_pct": 0.21}, {"name": "工业母机", "change_pct": 0.57}, {"name": "减速器", "change_pct": 1.01}]}, {"code": "603381", "name": "永臻股份", "hot_rank": 89, "hot_rank_chg": -23, "stock_cnt": 5866, "price": "20.31", "change": "-10.01", "market_id": "17", "circulate_market_value": "2886816400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 90, "hot_rank_chg": -49, "stock_cnt": 5866, "price": "54.46", "change": "0.02", "market_id": "17", "circulate_market_value": "97451517000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 91, "hot_rank_chg": 52, "stock_cnt": 5866, "price": "12.74", "change": "-6.32", "market_id": "17", "circulate_market_value": "8484840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.99}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 92, "hot_rank_chg": -59, "stock_cnt": 5866, "price": "43.14", "change": "-1.71", "market_id": "17", "circulate_market_value": "105850300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002205", "name": "国统股份", "hot_rank": 93, "hot_rank_chg": 360, "stock_cnt": 5866, "price": "12.93", "change": "10.04", "market_id": "33", "circulate_market_value": "2402952900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.01}, {"name": "水利", "change_pct": 0.08}, {"name": "海绵城市", "change_pct": -0.3}, {"name": "新疆概念", "change_pct": -0.36}, {"name": "风电", "change_pct": -0.01}, {"name": "地下管廊", "change_pct": -0.03}, {"name": "PPP", "change_pct": -0.9}, {"name": "国企改革", "change_pct": -0.1}, {"name": "西部大开发", "change_pct": -0.52}]}, {"code": "600293", "name": "三峡新材", "hot_rank": 94, "hot_rank_chg": 9, "stock_cnt": 5866, "price": "3.99", "change": "-5.67", "market_id": "17", "circulate_market_value": "4628978700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -0.45}, {"name": "强势人气股", "change_pct": -1.94}, {"name": "玻璃", "change_pct": -1.25}, {"name": "国企改革", "change_pct": -0.1}, {"name": "湖北国企改革", "change_pct": 0.42}]}, {"code": "000823", "name": "超声电子", "hot_rank": 95, "hot_rank_chg": -24, "stock_cnt": 5866, "price": "18.14", "change": "-4.73", "market_id": "33", "circulate_market_value": "10792069500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002277", "name": "友阿股份", "hot_rank": 96, "hot_rank_chg": 349, "stock_cnt": 5866, "price": "6.29", "change": "-4.99", "market_id": "33", "circulate_market_value": "8755405200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.63}, {"name": "半导体", "change_pct": 0.36}, {"name": "股权转让", "change_pct": -0.23}, {"name": "新零售", "change_pct": -0.99}, {"name": "工业自动化", "change_pct": -0.04}, {"name": "机器人", "change_pct": 0.24}, {"name": "智能制造", "change_pct": 0.21}, {"name": "长寿药NMN", "change_pct": 0.2}, {"name": "字节跳动概念股", "change_pct": -0.34}, {"name": "网红/MCN", "change_pct": -0.46}, {"name": "免税店概念", "change_pct": -0.52}, {"name": "供应链金融", "change_pct": -0.22}, {"name": "微信小店", "change_pct": -1.87}]}, {"code": "001309", "name": "德明利", "hot_rank": 97, "hot_rank_chg": -25, "stock_cnt": 5866, "price": "201.30", "change": "-0.89", "market_id": "33", "circulate_market_value": "46785761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 98, "hot_rank_chg": 20, "stock_cnt": 5866, "price": "25.60", "change": "1.47", "market_id": "33", "circulate_market_value": "73217860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 99, "hot_rank_chg": -38, "stock_cnt": 5866, "price": "41.39", "change": "-4.52", "market_id": "17", "circulate_market_value": "821346980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 100, "hot_rank_chg": -22, "stock_cnt": 5866, "price": "30.10", "change": "-2.27", "market_id": "33", "circulate_market_value": "7337917600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》"};