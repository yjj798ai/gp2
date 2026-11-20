const UPDATE_TIME = "2026-11-20 10:51";
const THS_HOT = [
  {
    "name": "猪肉",
    "rise": 0.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "PCB概念",
    "rise": -4.85,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续157天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -5.27,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续334天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "人形机器人",
    "rise": -5.44,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "光刻胶",
    "rise": -5.38,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "算力租赁",
    "rise": -5.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "短剧游戏",
    "rise": -3.94,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "机器人概念",
    "rise": -5.21,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "存储芯片",
    "rise": -6.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续287天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "商业航天",
    "rise": -5.55,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续263天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": -2.57,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "AI应用",
    "rise": -4.86,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续92天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "创新药",
    "rise": -4.37,
    "rate": 0,
    "tag": "",
    "hotTag": "连续164天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "冰雪产业",
    "rise": -4.52,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "芯片概念",
    "rise": -5.99,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续44天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "黄金概念",
    "rise": -4.31,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "东数西算(算力)",
    "rise": -5.57,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "光刻机",
    "rise": -7.79,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "886054"
  },
  {
    "name": "国家大基金持股",
    "rise": -5.9,
    "rate": 0,
    "tag": "",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "AI视频",
    "rise": -4.21,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886068"
  }
];
const THS_EVENTS = [
  {
    "title": "一度大涨近13%！拼多多最新业绩出炉",
    "desc": "",
    "heat": 144705,
    "direction": "拼多多",
    "themes": [
      "拼多多概念"
    ],
    "stocks": [
      {
        "name": "德力股份",
        "code": "002571",
        "chg": 1.832761
      }
    ]
  },
  {
    "title": "马斯克预计Optimus人形机器人12至18个月能做家务",
    "desc": "",
    "heat": 94321,
    "direction": "人形机器人",
    "themes": [
      "减速器",
      "自动化设备",
      "人形机器人",
      "物理AI"
    ],
    "stocks": [
      {
        "name": "凡拓数创",
        "code": "301313",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "美国行业协会拉响警报：全球PCB短缺危机正在蔓延 供应紧张局面或持续至2028年年中",
    "desc": "",
    "heat": 92183,
    "direction": "PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "中京电子",
        "code": "002579",
        "chg": 10.024651
      }
    ]
  },
  {
    "title": "溴素供给迎来强约束：潍坊主产区冬季停产落地，进口依赖叠加地缘扰动，涨价预期升温",
    "desc": "",
    "heat": 1852,
    "direction": "溴素",
    "themes": [
      "资源开采",
      "原溴生产"
    ],
    "stocks": [
      {
        "name": "亚钾国际",
        "code": "000893",
        "chg": -2.585628
      }
    ]
  },
  {
    "title": "阿里CEO吴泳铭：未来绝大部分模型都会完全依赖于国产芯片做训练",
    "desc": "",
    "heat": 200,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "龙芯中科",
        "code": "688047",
        "chg": 0.587689
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "河北自贸区",
    "change": "+4.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+0.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+0.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "保险",
    "change": "-0.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大金融",
    "change": "-0.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白马股",
    "change": "-0.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "-0.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "信托",
    "change": "-1.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高股息",
    "change": "-1.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "-1.07%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "-1.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "-1.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "券商",
    "change": "-1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中字头",
    "change": "-1.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "-1.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "-1.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "煤炭",
    "change": "-1.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "草甘膦",
    "change": "-1.52%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高速公路",
    "change": "-1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 3,
    "hot_rank_chg": 3,
    "stock_cnt": 5822,
    "price": "12.29",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "7375434600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -5.03
      },
      {
        "name": "边缘计算",
        "change_pct": -5.29
      },
      {
        "name": "核电",
        "change_pct": -4.94
      },
      {
        "name": "海工装备",
        "change_pct": -4.17
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "冷链",
        "change_pct": -4.01
      },
      {
        "name": "地热",
        "change_pct": -4.04
      },
      {
        "name": "储能",
        "change_pct": -5.14
      },
      {
        "name": "碳中和",
        "change_pct": -3.22
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -4.79
      },
      {
        "name": "汽车热管理",
        "change_pct": -4.77
      },
      {
        "name": "热泵",
        "change_pct": -5.37
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.11
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -3.72
      },
      {
        "name": "海洋经济",
        "change_pct": -4.41
      }
    ]
  },
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 4,
    "hot_rank_chg": 6,
    "stock_cnt": 5822,
    "price": "3.75",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "5928642300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "海洋养殖",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -3.6
      },
      {
        "name": "体外诊断",
        "change_pct": -4.62
      },
      {
        "name": "医疗器械",
        "change_pct": -4.93
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "基因测序",
        "change_pct": -4.31
      },
      {
        "name": "预制菜",
        "change_pct": -3.08
      },
      {
        "name": "水产养殖",
        "change_pct": -1.21
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -4.66
      },
      {
        "name": "海洋经济",
        "change_pct": -4.41
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 7,
    "hot_rank_chg": -3,
    "stock_cnt": 5822,
    "price": "7.40",
    "change": "-3.52",
    "market_id": "33",
    "circulate_market_value": "7456160900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -3.96
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "工业自动化",
        "change_pct": -5.67
      },
      {
        "name": "机械",
        "change_pct": -4.05
      },
      {
        "name": "智能制造",
        "change_pct": -5.48
      },
      {
        "name": "国产芯片",
        "change_pct": -6.13
      },
      {
        "name": "信创",
        "change_pct": -5.64
      },
      {
        "name": "AI算力芯片",
        "change_pct": -6.41
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 8,
    "hot_rank_chg": 3,
    "stock_cnt": 5822,
    "price": "2.74",
    "change": "0.37",
    "market_id": "17",
    "circulate_market_value": "7842899900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -4.98
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "游戏",
        "change_pct": -4.83
      },
      {
        "name": "影视",
        "change_pct": -2.98
      },
      {
        "name": "低价股",
        "change_pct": -3.44
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.01
      },
      {
        "name": "AI视频",
        "change_pct": -4.8
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 12,
    "hot_rank_chg": -4,
    "stock_cnt": 5822,
    "price": "10.06",
    "change": "8.17",
    "market_id": "33",
    "circulate_market_value": "4537327700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.81
      },
      {
        "name": "手游",
        "change_pct": -4.98
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "游戏",
        "change_pct": -4.83
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "机器人",
        "change_pct": -5.75
      },
      {
        "name": "无人机",
        "change_pct": -5.83
      },
      {
        "name": "国产芯片",
        "change_pct": -6.13
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -4.32
      },
      {
        "name": "低空经济",
        "change_pct": -5.56
      },
      {
        "name": "无人物流车",
        "change_pct": -5.03
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 13,
    "hot_rank_chg": 22,
    "stock_cnt": 5822,
    "price": "4.19",
    "change": "-8.31",
    "market_id": "17",
    "circulate_market_value": "5469918900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "高速公路",
        "change_pct": -1.68
      },
      {
        "name": "振兴东北",
        "change_pct": -3.55
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -3.38
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 14,
    "hot_rank_chg": 17,
    "stock_cnt": 5822,
    "price": "8.02",
    "change": "-9.89",
    "market_id": "17",
    "circulate_market_value": "3224927800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -4.91
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "纺织服装",
        "change_pct": -4.53
      },
      {
        "name": "湖南国企改革",
        "change_pct": -4.2
      },
      {
        "name": "外贸受益概念",
        "change_pct": -5.26
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.37
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -4.66
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.11
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 20,
    "hot_rank_chg": 4,
    "stock_cnt": 5822,
    "price": "9.29",
    "change": "1.86",
    "market_id": "17",
    "circulate_market_value": "7553216900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "充电桩",
        "change_pct": -5.08
      },
      {
        "name": "光伏",
        "change_pct": -4.9
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "家电",
        "change_pct": -5.48
      },
      {
        "name": "储能",
        "change_pct": -5.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -5.37
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -5.59
      },
      {
        "name": "厨卫家电",
        "change_pct": -4.4
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 22,
    "hot_rank_chg": 5,
    "stock_cnt": 5822,
    "price": "4.16",
    "change": "-9.96",
    "market_id": "17",
    "circulate_market_value": "5553820300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -4.72
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "LED",
        "change_pct": -5.27
      },
      {
        "name": "卫星互联网",
        "change_pct": -6.1
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 24,
    "hot_rank_chg": 25,
    "stock_cnt": 5822,
    "price": "4.83",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "4273485100.00",
    "change_type": "1",
    "change_section": "11",
    "change_days": "6",
    "change_reason": "百货零售",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -4.55
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -4.01
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "信托",
        "change_pct": -1.02
      },
      {
        "name": "民营医院",
        "change_pct": -3.84
      },
      {
        "name": "汽车销售",
        "change_pct": -3.61
      },
      {
        "name": "社区团购",
        "change_pct": -2.41
      },
      {
        "name": "大金融",
        "change_pct": -0.55
      },
      {
        "name": "餐饮",
        "change_pct": -4.46
      },
      {
        "name": "首发经济",
        "change_pct": -3.64
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 25,
    "hot_rank_chg": 14,
    "stock_cnt": 5822,
    "price": "11.12",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "11619152900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": -5.33
      },
      {
        "name": "上海国企改革",
        "change_pct": -3.54
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -3.59
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 28,
    "hot_rank_chg": 16,
    "stock_cnt": 5822,
    "price": "9.40",
    "change": "3.30",
    "market_id": "17",
    "circulate_market_value": "2534354800000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -3.72
      },
      {
        "name": "高股息",
        "change_pct": -0.64
      },
      {
        "name": "银行",
        "change_pct": 0.22
      },
      {
        "name": "白马股",
        "change_pct": -0.63
      },
      {
        "name": "破净股",
        "change_pct": -3.08
      },
      {
        "name": "大金融",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 29,
    "hot_rank_chg": 9,
    "stock_cnt": 5822,
    "price": "9.07",
    "change": "0.67",
    "market_id": "17",
    "circulate_market_value": "16227484000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -2.42
      },
      {
        "name": "纯碱",
        "change_pct": -3.46
      },
      {
        "name": "食品",
        "change_pct": -3.52
      },
      {
        "name": "土壤修复",
        "change_pct": -4.66
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.37
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -5.87
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -6.25
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 30,
    "hot_rank_chg": 16,
    "stock_cnt": 5822,
    "price": "8.73",
    "change": "1.99",
    "market_id": "33",
    "circulate_market_value": "4945355500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "石墨烯",
        "change_pct": -4.75
      },
      {
        "name": "军民融合",
        "change_pct": -5.85
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "LED",
        "change_pct": -5.27
      },
      {
        "name": "军工",
        "change_pct": -5.6
      },
      {
        "name": "智慧灯杆",
        "change_pct": -5.33
      },
      {
        "name": "海洋经济",
        "change_pct": -4.41
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 32,
    "hot_rank_chg": 60,
    "stock_cnt": 5822,
    "price": "6.70",
    "change": "-9.21",
    "market_id": "33",
    "circulate_market_value": "3173657900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -4.98
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "VR&AR",
        "change_pct": -5.32
      },
      {
        "name": "游戏",
        "change_pct": -4.83
      },
      {
        "name": "影视",
        "change_pct": -2.98
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.69
      },
      {
        "name": "动漫",
        "change_pct": -4.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.23
      },
      {
        "name": "传媒",
        "change_pct": -3.59
      },
      {
        "name": "元宇宙",
        "change_pct": -4.97
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.01
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.12
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 33,
    "hot_rank_chg": 205,
    "stock_cnt": 5822,
    "price": "3.54",
    "change": "3.81",
    "market_id": "17",
    "circulate_market_value": "3564072000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.43
      },
      {
        "name": "钢铁",
        "change_pct": -2.26
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "煤化工",
        "change_pct": -1.84
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 39,
    "hot_rank_chg": 68,
    "stock_cnt": 5822,
    "price": "4.98",
    "change": "-2.16",
    "market_id": "17",
    "circulate_market_value": "2282077000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": -3.23
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -4.34
      },
      {
        "name": "自贸区",
        "change_pct": -3.67
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 41,
    "hot_rank_chg": 62,
    "stock_cnt": 5822,
    "price": "3.86",
    "change": "0.78",
    "market_id": "33",
    "circulate_market_value": "9098077400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": -4.41
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "大数据",
        "change_pct": -5.36
      },
      {
        "name": "固废处理",
        "change_pct": -4.58
      },
      {
        "name": "智慧城市",
        "change_pct": -4.95
      },
      {
        "name": "有色 · 锌",
        "change_pct": -4.17
      },
      {
        "name": "有色金属",
        "change_pct": -4.72
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -4.75
      },
      {
        "name": "土壤修复",
        "change_pct": -4.66
      },
      {
        "name": "磷化铟",
        "change_pct": -5.85
      }
    ]
  },
  {
    "code": "600360",
    "name": "华微电子",
    "hot_rank": 42,
    "hot_rank_chg": 493,
    "stock_cnt": 5822,
    "price": "9.01",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "8652260700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "功率半导体",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": -6.6
      },
      {
        "name": "ST摘帽",
        "change_pct": -4.41
      },
      {
        "name": "充电桩",
        "change_pct": -5.08
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "国产芯片",
        "change_pct": -6.13
      },
      {
        "name": "第三代半导体",
        "change_pct": -5.9
      },
      {
        "name": "IGBT",
        "change_pct": -4.99
      },
      {
        "name": "氮化镓",
        "change_pct": -5.61
      },
      {
        "name": "碳化硅",
        "change_pct": -5.84
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      }
    ]
  },
  {
    "code": "603118",
    "name": "共进股份",
    "hot_rank": 44,
    "hot_rank_chg": -15,
    "stock_cnt": 5822,
    "price": "12.80",
    "change": "-9.99",
    "market_id": "17",
    "circulate_market_value": "10077138000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -5.34
      },
      {
        "name": "5G",
        "change_pct": -6.1
      },
      {
        "name": "充电桩",
        "change_pct": -5.08
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "光通信",
        "change_pct": -6.03
      },
      {
        "name": "基因测序",
        "change_pct": -4.31
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "机器人",
        "change_pct": -5.75
      },
      {
        "name": "WiFi",
        "change_pct": -6.38
      },
      {
        "name": "毫米波通信",
        "change_pct": -6.44
      },
      {
        "name": "汽车芯片",
        "change_pct": -6.68
      },
      {
        "name": "激光雷达",
        "change_pct": -6.16
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.37
      },
      {
        "name": "F5G",
        "change_pct": -6.75
      },
      {
        "name": "华为海思",
        "change_pct": -5.77
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -6.42
      },
      {
        "name": "传感器",
        "change_pct": -5.89
      },
      {
        "name": "交换机",
        "change_pct": -5.98
      },
      {
        "name": "服务器",
        "change_pct": -6.11
      },
      {
        "name": "智能座舱",
        "change_pct": -6.19
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.11
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 45,
    "hot_rank_chg": 6,
    "stock_cnt": 5822,
    "price": "3.39",
    "change": "-10.08",
    "market_id": "33",
    "circulate_market_value": "3119430300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -4.98
      },
      {
        "name": "ST摘帽",
        "change_pct": -4.41
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "人工智能",
        "change_pct": -5.33
      },
      {
        "name": "VR&AR",
        "change_pct": -5.32
      },
      {
        "name": "游戏",
        "change_pct": -4.83
      },
      {
        "name": "动漫",
        "change_pct": -4.58
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.23
      },
      {
        "name": "快手概念股",
        "change_pct": -5.9
      },
      {
        "name": "NFT",
        "change_pct": -4.15
      },
      {
        "name": "元宇宙",
        "change_pct": -4.97
      },
      {
        "name": "虚拟数字人",
        "change_pct": -4.19
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.15
      },
      {
        "name": "云游戏",
        "change_pct": -5.62
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.12
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 48,
    "hot_rank_chg": 66,
    "stock_cnt": 5822,
    "price": "5.45",
    "change": "-1.80",
    "market_id": "33",
    "circulate_market_value": "10437253800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -4.34
      },
      {
        "name": "林业",
        "change_pct": -4.2
      },
      {
        "name": "碳中和",
        "change_pct": -3.22
      },
      {
        "name": "自贸区",
        "change_pct": -3.67
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 49,
    "hot_rank_chg": -23,
    "stock_cnt": 5822,
    "price": "3.21",
    "change": "-4.46",
    "market_id": "17",
    "circulate_market_value": "7101576200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -4.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "光通信",
        "change_pct": -6.03
      },
      {
        "name": "林业",
        "change_pct": -4.2
      },
      {
        "name": "军民融合",
        "change_pct": -5.85
      },
      {
        "name": "军工",
        "change_pct": -5.6
      },
      {
        "name": "人造肉",
        "change_pct": -3.68
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 50,
    "hot_rank_chg": 20,
    "stock_cnt": 5822,
    "price": "3.32",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "3853000900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "纺织服装",
        "change_pct": -4.53
      },
      {
        "name": "浙江国企改革",
        "change_pct": -3.54
      },
      {
        "name": "影视",
        "change_pct": -2.98
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.01
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 52,
    "hot_rank_chg": -37,
    "stock_cnt": 5822,
    "price": "5.29",
    "change": "-8.16",
    "market_id": "17",
    "circulate_market_value": "24413131000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": -5.0
      },
      {
        "name": "国产软件",
        "change_pct": -5.44
      },
      {
        "name": "锂电池",
        "change_pct": -5.2
      },
      {
        "name": "人工智能",
        "change_pct": -5.33
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "养老产业",
        "change_pct": -4.69
      },
      {
        "name": "大飞机",
        "change_pct": -5.47
      },
      {
        "name": "军民融合",
        "change_pct": -5.85
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "大数据",
        "change_pct": -5.36
      },
      {
        "name": "智慧城市",
        "change_pct": -4.95
      },
      {
        "name": "军工",
        "change_pct": -5.6
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "机器人",
        "change_pct": -5.75
      },
      {
        "name": "黑色家电",
        "change_pct": -5.43
      },
      {
        "name": "家电",
        "change_pct": -5.48
      },
      {
        "name": "储能",
        "change_pct": -5.14
      },
      {
        "name": "智能制造",
        "change_pct": -5.48
      },
      {
        "name": "工业互联网",
        "change_pct": -4.75
      },
      {
        "name": "数字经济",
        "change_pct": -5.16
      },
      {
        "name": "百度概念股",
        "change_pct": -4.08
      },
      {
        "name": "NFT",
        "change_pct": -4.15
      },
      {
        "name": "跨境支付",
        "change_pct": -5.3
      },
      {
        "name": "华为海思",
        "change_pct": -5.77
      },
      {
        "name": "云游戏",
        "change_pct": -5.62
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.92
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      },
      {
        "name": "毫米波雷达",
        "change_pct": -4.73
      },
      {
        "name": "服务器",
        "change_pct": -6.11
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -5.08
      },
      {
        "name": "星闪概念",
        "change_pct": -5.8
      },
      {
        "name": "低空经济",
        "change_pct": -5.56
      }
    ]
  },
  {
    "code": "000656",
    "name": "金科股份",
    "hot_rank": 53,
    "hot_rank_chg": 33,
    "stock_cnt": 5822,
    "price": "1.04",
    "change": "1.96",
    "market_id": "33",
    "circulate_market_value": "9760777700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": -4.24
      },
      {
        "name": "房地产",
        "change_pct": -3.7
      },
      {
        "name": "ST摘帽",
        "change_pct": -4.41
      },
      {
        "name": "物业管理",
        "change_pct": -4.14
      },
      {
        "name": "低价股",
        "change_pct": -3.44
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 54,
    "hot_rank_chg": 37,
    "stock_cnt": 5822,
    "price": "6.11",
    "change": "-3.02",
    "market_id": "33",
    "circulate_market_value": "4446646600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -4.01
      },
      {
        "name": "装配式建筑",
        "change_pct": -4.36
      },
      {
        "name": "风电",
        "change_pct": -4.36
      },
      {
        "name": "环氧丙烷",
        "change_pct": -3.46
      },
      {
        "name": "乡村振兴",
        "change_pct": -3.63
      },
      {
        "name": "建筑节能",
        "change_pct": -5.18
      },
      {
        "name": "旧改",
        "change_pct": -4.35
      }
    ]
  },
  {
    "code": "002639",
    "name": "雪人集团",
    "hot_rank": 58,
    "hot_rank_chg": 13,
    "stock_cnt": 5822,
    "price": "11.82",
    "change": "-9.56",
    "market_id": "33",
    "circulate_market_value": "7802697500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -4.06
      },
      {
        "name": "体育产业",
        "change_pct": -5.03
      },
      {
        "name": "一带一路",
        "change_pct": -3.96
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -4.34
      },
      {
        "name": "天然气",
        "change_pct": -3.0
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -4.72
      },
      {
        "name": "冷链",
        "change_pct": -4.01
      },
      {
        "name": "地热",
        "change_pct": -4.04
      },
      {
        "name": "冰雪产业",
        "change_pct": -4.79
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.23
      },
      {
        "name": "热泵",
        "change_pct": -5.37
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      },
      {
        "name": "自贸区",
        "change_pct": -3.67
      },
      {
        "name": "核聚变",
        "change_pct": -5.63
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.11
      },
      {
        "name": "磁悬浮压缩机",
        "change_pct": -5.89
      },
      {
        "name": "雅江电站概念股",
        "change_pct": -4.42
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 60,
    "hot_rank_chg": 356,
    "stock_cnt": 5822,
    "price": "10.75",
    "change": "2.58",
    "market_id": "17",
    "circulate_market_value": "7313436500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -1.86
      },
      {
        "name": "风电",
        "change_pct": -4.36
      },
      {
        "name": "雄安新区",
        "change_pct": -3.69
      },
      {
        "name": "煤化工",
        "change_pct": -1.84
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 61,
    "hot_rank_chg": 49,
    "stock_cnt": 5822,
    "price": "2.25",
    "change": "0.90",
    "market_id": "17",
    "circulate_market_value": "7852023400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": -5.12
      },
      {
        "name": "车联网/车路云",
        "change_pct": -4.81
      },
      {
        "name": "超高清视频",
        "change_pct": -5.0
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "人工智能",
        "change_pct": -5.33
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "影视",
        "change_pct": -2.98
      },
      {
        "name": "智慧城市",
        "change_pct": -4.95
      },
      {
        "name": "国产芯片",
        "change_pct": -6.13
      },
      {
        "name": "振兴东北",
        "change_pct": -3.55
      },
      {
        "name": "传媒",
        "change_pct": -3.59
      },
      {
        "name": "低价股",
        "change_pct": -3.44
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      },
      {
        "name": "在线教育",
        "change_pct": -4.6
      },
      {
        "name": "医疗信息化",
        "change_pct": -4.95
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -5.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.01
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.12
      }
    ]
  },
  {
    "code": "002187",
    "name": "广百股份",
    "hot_rank": 62,
    "hot_rank_chg": 17,
    "stock_cnt": 5822,
    "price": "5.90",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "4135278300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -4.55
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": -3.58
      },
      {
        "name": "物业管理",
        "change_pct": -4.14
      },
      {
        "name": "预制菜",
        "change_pct": -3.08
      },
      {
        "name": "地摊经济",
        "change_pct": -4.5
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 66,
    "hot_rank_chg": 112,
    "stock_cnt": 5822,
    "price": "8.12",
    "change": "2.14",
    "market_id": "17",
    "circulate_market_value": "5211279700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -3.63
      },
      {
        "name": "农业种植",
        "change_pct": -1.93
      },
      {
        "name": "湖南国企改革",
        "change_pct": -4.2
      },
      {
        "name": "乡村振兴",
        "change_pct": -3.63
      },
      {
        "name": "休闲食品",
        "change_pct": -3.77
      },
      {
        "name": "食品",
        "change_pct": -3.52
      },
      {
        "name": "食品安全",
        "change_pct": -3.85
      },
      {
        "name": "社区团购",
        "change_pct": -2.41
      },
      {
        "name": "大农业",
        "change_pct": -3.21
      },
      {
        "name": "预制菜",
        "change_pct": -3.08
      },
      {
        "name": "人造肉",
        "change_pct": -3.68
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      }
    ]
  },
  {
    "code": "601939",
    "name": "建设银行",
    "hot_rank": 68,
    "hot_rank_chg": 126,
    "stock_cnt": 5822,
    "price": "12.76",
    "change": "3.07",
    "market_id": "17",
    "circulate_market_value": "122415071000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": -0.64
      },
      {
        "name": "银行",
        "change_pct": 0.22
      },
      {
        "name": "破净股",
        "change_pct": -3.08
      },
      {
        "name": "大金融",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 81,
    "hot_rank_chg": -39,
    "stock_cnt": 5822,
    "price": "7.73",
    "change": "-5.96",
    "market_id": "33",
    "circulate_market_value": "3719207100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -4.62
      },
      {
        "name": "医疗器械",
        "change_pct": -4.93
      },
      {
        "name": "锂电池",
        "change_pct": -5.2
      },
      {
        "name": "基因测序",
        "change_pct": -4.31
      },
      {
        "name": "PCB板",
        "change_pct": -3.63
      },
      {
        "name": "医药",
        "change_pct": -4.42
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "化学原料药",
        "change_pct": -4.73
      },
      {
        "name": "食品安全",
        "change_pct": -3.85
      },
      {
        "name": "辅助生殖",
        "change_pct": -4.62
      },
      {
        "name": "光刻机（胶）",
        "change_pct": -6.42
      },
      {
        "name": "异丙醇",
        "change_pct": -3.44
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -4.66
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -4.36
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 82,
    "hot_rank_chg": -18,
    "stock_cnt": 5822,
    "price": "8.63",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "5910707700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -5.16
      },
      {
        "name": "核电",
        "change_pct": -4.94
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "充电桩",
        "change_pct": -5.08
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "储能",
        "change_pct": -5.14
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -5.17
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -5.65
      },
      {
        "name": "智能电网",
        "change_pct": -5.52
      },
      {
        "name": "核聚变",
        "change_pct": -5.63
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 86,
    "hot_rank_chg": -29,
    "stock_cnt": 5822,
    "price": "10.81",
    "change": "-6.00",
    "market_id": "33",
    "circulate_market_value": "37596426000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -4.91
      },
      {
        "name": "人工智能",
        "change_pct": -5.33
      },
      {
        "name": "VR&AR",
        "change_pct": -5.32
      },
      {
        "name": "直播/短视频",
        "change_pct": -4.69
      },
      {
        "name": "大数据",
        "change_pct": -5.36
      },
      {
        "name": "教育",
        "change_pct": -4.07
      },
      {
        "name": "百度概念股",
        "change_pct": -4.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -5.17
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.23
      },
      {
        "name": "传媒",
        "change_pct": -3.59
      },
      {
        "name": "快手概念股",
        "change_pct": -5.9
      },
      {
        "name": "NFT",
        "change_pct": -4.15
      },
      {
        "name": "元宇宙",
        "change_pct": -4.97
      },
      {
        "name": "虚拟数字人",
        "change_pct": -4.19
      },
      {
        "name": "web3.0",
        "change_pct": -5.55
      },
      {
        "name": "AIGC概念",
        "change_pct": -5.18
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.15
      },
      {
        "name": "职业教育",
        "change_pct": -4.67
      },
      {
        "name": "云游戏",
        "change_pct": -5.62
      },
      {
        "name": "网红/MCN",
        "change_pct": -4.92
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -4.32
      },
      {
        "name": "AI营销",
        "change_pct": -5.68
      },
      {
        "name": "词元概念/Token",
        "change_pct": -6.25
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -5.08
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -4.01
      },
      {
        "name": "AI视频",
        "change_pct": -4.8
      },
      {
        "name": "智谱AI",
        "change_pct": -5.75
      },
      {
        "name": "小红书概念股",
        "change_pct": -5.77
      },
      {
        "name": "区块链",
        "change_pct": -4.89
      }
    ]
  },
  {
    "code": "002077",
    "name": "大港股份",
    "hot_rank": 88,
    "hot_rank_chg": 1,
    "stock_cnt": 5822,
    "price": "11.70",
    "change": "-3.39",
    "market_id": "33",
    "circulate_market_value": "6790077600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手机产业链",
        "change_pct": -5.84
      },
      {
        "name": "半导体",
        "change_pct": -6.6
      },
      {
        "name": "股权转让",
        "change_pct": -5.0
      },
      {
        "name": "锂电池",
        "change_pct": -5.2
      },
      {
        "name": "固废处理",
        "change_pct": -4.58
      },
      {
        "name": "江苏国企改革",
        "change_pct": -3.81
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "环保",
        "change_pct": -4.75
      },
      {
        "name": "国产芯片",
        "change_pct": -6.13
      },
      {
        "name": "汽车芯片",
        "change_pct": -6.68
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      }
    ]
  },
  {
    "code": "000410",
    "name": "沈阳机床",
    "hot_rank": 89,
    "hot_rank_chg": 143,
    "stock_cnt": 5822,
    "price": "5.87",
    "change": "5.58",
    "market_id": "33",
    "circulate_market_value": "11569877600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -3.29
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "工业自动化",
        "change_pct": -5.67
      },
      {
        "name": "智能制造",
        "change_pct": -5.48
      },
      {
        "name": "工业互联网",
        "change_pct": -4.75
      },
      {
        "name": "振兴东北",
        "change_pct": -3.55
      },
      {
        "name": "工业母机",
        "change_pct": -5.45
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 92,
    "hot_rank_chg": 61,
    "stock_cnt": 5822,
    "price": "7.77",
    "change": "1.57",
    "market_id": "17",
    "circulate_market_value": "2480527500000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -3.72
      },
      {
        "name": "高股息",
        "change_pct": -0.64
      },
      {
        "name": "银行",
        "change_pct": 0.22
      },
      {
        "name": "破净股",
        "change_pct": -3.08
      },
      {
        "name": "大金融",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 93,
    "hot_rank_chg": -15,
    "stock_cnt": 5822,
    "price": "3.88",
    "change": "-1.02",
    "market_id": "33",
    "circulate_market_value": "3341310700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -4.51
      },
      {
        "name": "一带一路",
        "change_pct": -3.96
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -4.34
      },
      {
        "name": "光伏",
        "change_pct": -4.9
      },
      {
        "name": "有色金属",
        "change_pct": -4.72
      },
      {
        "name": "新能源汽车",
        "change_pct": -5.08
      },
      {
        "name": "新能源车零部件",
        "change_pct": -5.37
      },
      {
        "name": "自贸区",
        "change_pct": -3.67
      },
      {
        "name": "液冷服务器",
        "change_pct": -6.11
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 95,
    "hot_rank_chg": 70,
    "stock_cnt": 5822,
    "price": "4.66",
    "change": "0.21",
    "market_id": "33",
    "circulate_market_value": "3565555800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -3.51
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -4.01
      },
      {
        "name": "强势人气股",
        "change_pct": -4.31
      },
      {
        "name": "医药商业",
        "change_pct": -3.5
      },
      {
        "name": "保健品",
        "change_pct": -3.74
      },
      {
        "name": "民营医院",
        "change_pct": -3.84
      },
      {
        "name": "医药",
        "change_pct": -4.42
      },
      {
        "name": "食品",
        "change_pct": -3.52
      },
      {
        "name": "辅助生殖",
        "change_pct": -4.62
      },
      {
        "name": "口腔",
        "change_pct": -4.8
      },
      {
        "name": "医美",
        "change_pct": -3.99
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -4.66
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 99,
    "hot_rank_chg": 1117,
    "stock_cnt": 5822,
    "price": "7.26",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4803073100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "存储设备集采",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.81
      },
      {
        "name": "边缘计算",
        "change_pct": -5.29
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -5.16
      },
      {
        "name": "数字孪生",
        "change_pct": -4.61
      },
      {
        "name": "精准医疗",
        "change_pct": -3.6
      },
      {
        "name": "国产软件",
        "change_pct": -5.44
      },
      {
        "name": "金融科技",
        "change_pct": -5.03
      },
      {
        "name": "人工智能",
        "change_pct": -5.33
      },
      {
        "name": "网络安全",
        "change_pct": -5.63
      },
      {
        "name": "云计算数据中心",
        "change_pct": -5.79
      },
      {
        "name": "基因测序",
        "change_pct": -4.31
      },
      {
        "name": "物联网",
        "change_pct": -5.7
      },
      {
        "name": "山东国企改革",
        "change_pct": -4.02
      },
      {
        "name": "大数据",
        "change_pct": -5.36
      },
      {
        "name": "智慧城市",
        "change_pct": -4.95
      },
      {
        "name": "智慧物流",
        "change_pct": -4.96
      },
      {
        "name": "智能制造",
        "change_pct": -5.48
      },
      {
        "name": "工业互联网",
        "change_pct": -4.75
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -5.16
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.23
      },
      {
        "name": "信创",
        "change_pct": -5.64
      },
      {
        "name": "国资云",
        "change_pct": -3.84
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.37
      },
      {
        "name": "数字乡村",
        "change_pct": -4.35
      },
      {
        "name": "国企改革",
        "change_pct": -3.58
      },
      {
        "name": "智慧政务",
        "change_pct": -5.41
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -4.66
      },
      {
        "name": "远程办公",
        "change_pct": -4.66
      },
      {
        "name": "华为产业链",
        "change_pct": -5.33
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -5.08
      },
      {
        "name": "星闪概念",
        "change_pct": -5.8
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 100,
    "hot_rank_chg": 110,
    "stock_cnt": 5822,
    "price": "9.17",
    "change": "-2.96",
    "market_id": "17",
    "circulate_market_value": "11777221400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -5.48
      },
      {
        "name": "工业互联网",
        "change_pct": -4.75
      },
      {
        "name": "培育钻石",
        "change_pct": -6.23
      },
      {
        "name": "金刚线",
        "change_pct": -6.25
      },
      {
        "name": "国资入股",
        "change_pct": -3.9
      },
      {
        "name": "深地经济",
        "change_pct": -4.39
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5822, "price": "28.96", "change": "-7.21", "market_id": "33", "circulate_market_value": "22060733000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5822, "price": "17.32", "change": "3.71", "market_id": "17", "circulate_market_value": "18991288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "12.29", "change": "10.03", "market_id": "33", "circulate_market_value": "7375434600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": -5.03}, {"name": "边缘计算", "change_pct": -5.29}, {"name": "核电", "change_pct": -4.94}, {"name": "海工装备", "change_pct": -4.17}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "冷链", "change_pct": -4.01}, {"name": "地热", "change_pct": -4.04}, {"name": "储能", "change_pct": -5.14}, {"name": "碳中和", "change_pct": -3.22}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -4.79}, {"name": "汽车热管理", "change_pct": -4.77}, {"name": "热泵", "change_pct": -5.37}, {"name": "液冷服务器", "change_pct": -6.11}, {"name": "蜜雪冰城概念股", "change_pct": -3.72}, {"name": "海洋经济", "change_pct": -4.41}]}, {"code": "002086", "name": "东方海洋", "hot_rank": 4, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "3.75", "change": "9.97", "market_id": "33", "circulate_market_value": "5928642300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "海洋养殖", "xgb_concepts": [{"name": "精准医疗", "change_pct": -3.6}, {"name": "体外诊断", "change_pct": -4.62}, {"name": "医疗器械", "change_pct": -4.93}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "基因测序", "change_pct": -4.31}, {"name": "预制菜", "change_pct": -3.08}, {"name": "水产养殖", "change_pct": -1.21}, {"name": "新冠病毒防治", "change_pct": -4.66}, {"name": "海洋经济", "change_pct": -4.41}]}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "16.98", "change": "1.43", "market_id": "33", "circulate_market_value": "7804208300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 6, "hot_rank_chg": 35, "stock_cnt": 5822, "price": "13.39", "change": "10.03", "market_id": "33", "circulate_market_value": "7812238300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "高阶HDI"}, {"code": "002685", "name": "华东重机", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5822, "price": "7.40", "change": "-3.52", "market_id": "33", "circulate_market_value": "7456160900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": -3.96}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "工业自动化", "change_pct": -5.67}, {"name": "机械", "change_pct": -4.05}, {"name": "智能制造", "change_pct": -5.48}, {"name": "国产芯片", "change_pct": -6.13}, {"name": "信创", "change_pct": -5.64}, {"name": "AI算力芯片", "change_pct": -6.41}]}, {"code": "600715", "name": "文投控股", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "2.74", "change": "0.37", "market_id": "17", "circulate_market_value": "7842899900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.98}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "游戏", "change_pct": -4.83}, {"name": "影视", "change_pct": -2.98}, {"name": "低价股", "change_pct": -3.44}, {"name": "国企改革", "change_pct": -3.58}, {"name": "短剧/互动影游", "change_pct": -4.01}, {"name": "AI视频", "change_pct": -4.8}]}, {"code": "000823", "name": "超声电子", "hot_rank": 9, "hot_rank_chg": 102, "stock_cnt": 5822, "price": "18.51", "change": "9.98", "market_id": "33", "circulate_market_value": "11012194400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "印制电路板"}, {"code": "300308", "name": "中际旭创", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5822, "price": "393.20", "change": "-3.72", "market_id": "33", "circulate_market_value": "436427230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002771", "name": "真视通", "hot_rank": 11, "hot_rank_chg": 11, "stock_cnt": 5822, "price": "15.82", "change": "10.01", "market_id": "33", "circulate_market_value": "2856971100.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "液冷算力"}, {"code": "002148", "name": "北纬科技", "hot_rank": 12, "hot_rank_chg": -4, "stock_cnt": 5822, "price": "10.06", "change": "8.17", "market_id": "33", "circulate_market_value": "4537327700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.81}, {"name": "手游", "change_pct": -4.98}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "游戏", "change_pct": -4.83}, {"name": "物联网", "change_pct": -5.7}, {"name": "机器人", "change_pct": -5.75}, {"name": "无人机", "change_pct": -5.83}, {"name": "国产芯片", "change_pct": -6.13}, {"name": "5G消息/RCS", "change_pct": -4.32}, {"name": "低空经济", "change_pct": -5.56}, {"name": "无人物流车", "change_pct": -5.03}]}, {"code": "601188", "name": "龙江交通", "hot_rank": 13, "hot_rank_chg": 22, "stock_cnt": 5822, "price": "4.19", "change": "-8.31", "market_id": "17", "circulate_market_value": "5469918900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.31}, {"name": "高速公路", "change_pct": -1.68}, {"name": "振兴东北", "change_pct": -3.55}, {"name": "黑龙江自贸区", "change_pct": -3.38}]}, {"code": "600156", "name": "华升股份", "hot_rank": 14, "hot_rank_chg": 17, "stock_cnt": 5822, "price": "8.02", "change": "-9.89", "market_id": "17", "circulate_market_value": "3224927800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -4.91}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "纺织服装", "change_pct": -4.53}, {"name": "湖南国企改革", "change_pct": -4.2}, {"name": "外贸受益概念", "change_pct": -5.26}, {"name": "东数西算/算力", "change_pct": -5.37}, {"name": "国企改革", "change_pct": -3.58}, {"name": "新冠病毒防治", "change_pct": -4.66}, {"name": "液冷服务器", "change_pct": -6.11}]}, {"code": "603629", "name": "利通电子", "hot_rank": 15, "hot_rank_chg": -1, "stock_cnt": 5822, "price": "62.58", "change": "-1.32", "market_id": "17", "circulate_market_value": "22574070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "37.84", "change": "-4.83", "market_id": "17", "circulate_market_value": "32033578000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 17, "hot_rank_chg": 46, "stock_cnt": 5822, "price": "16.19", "change": "9.99", "market_id": "17", "circulate_market_value": "7195555600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI漫剧"}, {"code": "002384", "name": "东山精密", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5822, "price": "67.60", "change": "-5.72", "market_id": "33", "circulate_market_value": "93715348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 19, "hot_rank_chg": -14, "stock_cnt": 5822, "price": "165.00", "change": "-1.23", "market_id": "33", "circulate_market_value": "207029420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603366", "name": "日出东方", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5822, "price": "9.29", "change": "1.86", "market_id": "17", "circulate_market_value": "7553216900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.31}, {"name": "充电桩", "change_pct": -5.08}, {"name": "光伏", "change_pct": -4.9}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "家电", "change_pct": -5.48}, {"name": "储能", "change_pct": -5.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -5.37}, {"name": "华为鸿蒙", "change_pct": -5.59}, {"name": "厨卫家电", "change_pct": -4.4}, {"name": "华为产业链", "change_pct": -5.33}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 21, "hot_rank_chg": 35, "stock_cnt": 5822, "price": "27.71", "change": "10.00", "market_id": "17", "circulate_market_value": "4042291000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "光刻胶配套"}, {"code": "600261", "name": "阳光照明", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5822, "price": "4.16", "change": "-9.96", "market_id": "17", "circulate_market_value": "5553820300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.31}, {"name": "氢能源/燃料电池", "change_pct": -4.72}, {"name": "物联网", "change_pct": -5.7}, {"name": "LED", "change_pct": -5.27}, {"name": "卫星互联网", "change_pct": -6.1}]}, {"code": "000158", "name": "常山北明", "hot_rank": 23, "hot_rank_chg": -14, "stock_cnt": 5822, "price": "13.52", "change": "3.76", "market_id": "33", "circulate_market_value": "21505502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 24, "hot_rank_chg": 25, "stock_cnt": 5822, "price": "4.83", "change": "10.02", "market_id": "17", "circulate_market_value": "4273485100.00", "change_type": "1", "change_section": "11", "change_days": "6", "change_reason": "百货零售", "xgb_concepts": [{"name": "新零售", "change_pct": -4.55}, {"name": "优化生育（三孩）", "change_pct": -4.01}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "信托", "change_pct": -1.02}, {"name": "民营医院", "change_pct": -3.84}, {"name": "汽车销售", "change_pct": -3.61}, {"name": "社区团购", "change_pct": -2.41}, {"name": "大金融", "change_pct": -0.55}, {"name": "餐饮", "change_pct": -4.46}, {"name": "首发经济", "change_pct": -3.64}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 25, "hot_rank_chg": 14, "stock_cnt": 5822, "price": "11.12", "change": "0.00", "market_id": "17", "circulate_market_value": "11619152900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": -5.33}, {"name": "上海国企改革", "change_pct": -3.54}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -3.59}, {"name": "国企改革", "change_pct": -3.58}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 26, "hot_rank_chg": 98, "stock_cnt": 5822, "price": "50.88", "change": "0.99", "market_id": "33", "circulate_market_value": "36900036000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 27, "hot_rank_chg": 27, "stock_cnt": 5822, "price": "39.67", "change": "-10.01", "market_id": "33", "circulate_market_value": "60197330000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 28, "hot_rank_chg": 16, "stock_cnt": 5822, "price": "9.40", "change": "3.30", "market_id": "17", "circulate_market_value": "2534354800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -3.72}, {"name": "高股息", "change_pct": -0.64}, {"name": "银行", "change_pct": 0.22}, {"name": "白马股", "change_pct": -0.63}, {"name": "破净股", "change_pct": -3.08}, {"name": "大金融", "change_pct": -0.55}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 29, "hot_rank_chg": 9, "stock_cnt": 5822, "price": "9.07", "change": "0.67", "market_id": "17", "circulate_market_value": "16227484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -2.42}, {"name": "纯碱", "change_pct": -3.46}, {"name": "食品", "change_pct": -3.52}, {"name": "土壤修复", "change_pct": -4.66}, {"name": "东数西算/算力", "change_pct": -5.37}, {"name": "OpenClaw概念", "change_pct": -5.87}, {"name": "DeepSeek概念股", "change_pct": -6.25}]}, {"code": "002724", "name": "海洋王", "hot_rank": 30, "hot_rank_chg": 16, "stock_cnt": 5822, "price": "8.73", "change": "1.99", "market_id": "33", "circulate_market_value": "4945355500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.31}, {"name": "石墨烯", "change_pct": -4.75}, {"name": "军民融合", "change_pct": -5.85}, {"name": "物联网", "change_pct": -5.7}, {"name": "LED", "change_pct": -5.27}, {"name": "军工", "change_pct": -5.6}, {"name": "智慧灯杆", "change_pct": -5.33}, {"name": "海洋经济", "change_pct": -4.41}]}, {"code": "002463", "name": "沪电股份", "hot_rank": 31, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "80.32", "change": "-0.96", "market_id": "33", "circulate_market_value": "155225540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 32, "hot_rank_chg": 60, "stock_cnt": 5822, "price": "6.70", "change": "-9.21", "market_id": "33", "circulate_market_value": "3173657900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.98}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "VR&AR", "change_pct": -5.32}, {"name": "游戏", "change_pct": -4.83}, {"name": "影视", "change_pct": -2.98}, {"name": "直播/短视频", "change_pct": -4.69}, {"name": "动漫", "change_pct": -4.58}, {"name": "腾讯概念股", "change_pct": -5.23}, {"name": "传媒", "change_pct": -3.59}, {"name": "元宇宙", "change_pct": -4.97}, {"name": "短剧/互动影游", "change_pct": -4.01}, {"name": "IP经济/谷子经济", "change_pct": -4.12}]}, {"code": "600408", "name": "安泰集团", "hot_rank": 33, "hot_rank_chg": 205, "stock_cnt": 5822, "price": "3.54", "change": "3.81", "market_id": "17", "circulate_market_value": "3564072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.43}, {"name": "钢铁", "change_pct": -2.26}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "煤化工", "change_pct": -1.84}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 34, "hot_rank_chg": -18, "stock_cnt": 5822, "price": "590.00", "change": "-1.01", "market_id": "17", "circulate_market_value": "17751755000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 35, "hot_rank_chg": -18, "stock_cnt": 5822, "price": "50.20", "change": "-9.50", "market_id": "17", "circulate_market_value": "89828611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 36, "hot_rank_chg": -23, "stock_cnt": 5822, "price": "35.16", "change": "-6.24", "market_id": "17", "circulate_market_value": "158326850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 37, "hot_rank_chg": -7, "stock_cnt": 5822, "price": "23.73", "change": "-0.63", "market_id": "17", "circulate_market_value": "488880550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 38, "hot_rank_chg": 450, "stock_cnt": 5822, "price": "42.92", "change": "9.99", "market_id": "17", "circulate_market_value": "6134565500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI算力电源PCB"}, {"code": "600802", "name": "福建水泥", "hot_rank": 39, "hot_rank_chg": 68, "stock_cnt": 5822, "price": "4.98", "change": "-2.16", "market_id": "17", "circulate_market_value": "2282077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "水泥", "change_pct": -3.23}, {"name": "福建自贸/海西概念", "change_pct": -4.34}, {"name": "自贸区", "change_pct": -3.67}]}, {"code": "002185", "name": "华天科技", "hot_rank": 40, "hot_rank_chg": -19, "stock_cnt": 5822, "price": "13.80", "change": "-6.31", "market_id": "33", "circulate_market_value": "45954938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000711", "name": "京蓝科技", "hot_rank": 41, "hot_rank_chg": 62, "stock_cnt": 5822, "price": "3.86", "change": "0.78", "market_id": "33", "circulate_market_value": "9098077400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": -4.41}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "物联网", "change_pct": -5.7}, {"name": "大数据", "change_pct": -5.36}, {"name": "固废处理", "change_pct": -4.58}, {"name": "智慧城市", "change_pct": -4.95}, {"name": "有色 · 锌", "change_pct": -4.17}, {"name": "有色金属", "change_pct": -4.72}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -4.75}, {"name": "土壤修复", "change_pct": -4.66}, {"name": "磷化铟", "change_pct": -5.85}]}, {"code": "600360", "name": "华微电子", "hot_rank": 42, "hot_rank_chg": 493, "stock_cnt": 5822, "price": "9.01", "change": "10.01", "market_id": "17", "circulate_market_value": "8652260700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "功率半导体", "xgb_concepts": [{"name": "半导体", "change_pct": -6.6}, {"name": "ST摘帽", "change_pct": -4.41}, {"name": "充电桩", "change_pct": -5.08}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "国产芯片", "change_pct": -6.13}, {"name": "第三代半导体", "change_pct": -5.9}, {"name": "IGBT", "change_pct": -4.99}, {"name": "氮化镓", "change_pct": -5.61}, {"name": "碳化硅", "change_pct": -5.84}, {"name": "华为产业链", "change_pct": -5.33}]}, {"code": "000815", "name": "美利云", "hot_rank": 43, "hot_rank_chg": -9, "stock_cnt": 5822, "price": "13.44", "change": "-5.29", "market_id": "33", "circulate_market_value": "9344335200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 44, "hot_rank_chg": -15, "stock_cnt": 5822, "price": "12.80", "change": "-9.99", "market_id": "17", "circulate_market_value": "10077138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -5.34}, {"name": "5G", "change_pct": -6.1}, {"name": "充电桩", "change_pct": -5.08}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "光通信", "change_pct": -6.03}, {"name": "基因测序", "change_pct": -4.31}, {"name": "物联网", "change_pct": -5.7}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "机器人", "change_pct": -5.75}, {"name": "WiFi", "change_pct": -6.38}, {"name": "毫米波通信", "change_pct": -6.44}, {"name": "汽车芯片", "change_pct": -6.68}, {"name": "激光雷达", "change_pct": -6.16}, {"name": "东数西算/算力", "change_pct": -5.37}, {"name": "F5G", "change_pct": -6.75}, {"name": "华为海思", "change_pct": -5.77}, {"name": "光刻机（胶）", "change_pct": -6.42}, {"name": "传感器", "change_pct": -5.89}, {"name": "交换机", "change_pct": -5.98}, {"name": "服务器", "change_pct": -6.11}, {"name": "智能座舱", "change_pct": -6.19}, {"name": "液冷服务器", "change_pct": -6.11}]}, {"code": "002425", "name": "凯撒文化", "hot_rank": 45, "hot_rank_chg": 6, "stock_cnt": 5822, "price": "3.39", "change": "-10.08", "market_id": "33", "circulate_market_value": "3119430300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -4.98}, {"name": "ST摘帽", "change_pct": -4.41}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "人工智能", "change_pct": -5.33}, {"name": "VR&AR", "change_pct": -5.32}, {"name": "游戏", "change_pct": -4.83}, {"name": "动漫", "change_pct": -4.58}, {"name": "腾讯概念股", "change_pct": -5.23}, {"name": "快手概念股", "change_pct": -5.9}, {"name": "NFT", "change_pct": -4.15}, {"name": "元宇宙", "change_pct": -4.97}, {"name": "虚拟数字人", "change_pct": -4.19}, {"name": "字节跳动概念股", "change_pct": -5.15}, {"name": "云游戏", "change_pct": -5.62}, {"name": "华为产业链", "change_pct": -5.33}, {"name": "IP经济/谷子经济", "change_pct": -4.12}]}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 46, "hot_rank_chg": -21, "stock_cnt": 5822, "price": "30.61", "change": "1.97", "market_id": "33", "circulate_market_value": "7462247800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688981", "name": "中芯国际", "hot_rank": 47, "hot_rank_chg": -29, "stock_cnt": 5822, "price": "125.46", "change": "2.63", "market_id": "17", "circulate_market_value": "250994510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 48, "hot_rank_chg": 66, "stock_cnt": 5822, "price": "5.45", "change": "-1.80", "market_id": "33", "circulate_market_value": "10437253800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -4.34}, {"name": "林业", "change_pct": -4.2}, {"name": "碳中和", "change_pct": -3.22}, {"name": "自贸区", "change_pct": -3.67}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 49, "hot_rank_chg": -23, "stock_cnt": 5822, "price": "3.21", "change": "-4.46", "market_id": "17", "circulate_market_value": "7101576200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -4.93}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "光通信", "change_pct": -6.03}, {"name": "林业", "change_pct": -4.2}, {"name": "军民融合", "change_pct": -5.85}, {"name": "军工", "change_pct": -5.6}, {"name": "人造肉", "change_pct": -3.68}]}, {"code": "601599", "name": "浙文影业", "hot_rank": 50, "hot_rank_chg": 20, "stock_cnt": 5822, "price": "3.32", "change": "-10.03", "market_id": "17", "circulate_market_value": "3853000900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -4.31}, {"name": "纺织服装", "change_pct": -4.53}, {"name": "浙江国企改革", "change_pct": -3.54}, {"name": "影视", "change_pct": -2.98}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -3.58}, {"name": "短剧/互动影游", "change_pct": -4.01}]}, {"code": "002741", "name": "光华科技", "hot_rank": 51, "hot_rank_chg": 937, "stock_cnt": 5822, "price": "18.76", "change": "10.03", "market_id": "33", "circulate_market_value": "8067298900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光刻胶"}, {"code": "600839", "name": "四川长虹", "hot_rank": 52, "hot_rank_chg": -37, "stock_cnt": 5822, "price": "5.29", "change": "-8.16", "market_id": "17", "circulate_market_value": "24413131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": -5.0}, {"name": "国产软件", "change_pct": -5.44}, {"name": "锂电池", "change_pct": -5.2}, {"name": "人工智能", "change_pct": -5.33}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "养老产业", "change_pct": -4.69}, {"name": "大飞机", "change_pct": -5.47}, {"name": "军民融合", "change_pct": -5.85}, {"name": "物联网", "change_pct": -5.7}, {"name": "大数据", "change_pct": -5.36}, {"name": "智慧城市", "change_pct": -4.95}, {"name": "军工", "change_pct": -5.6}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "机器人", "change_pct": -5.75}, {"name": "黑色家电", "change_pct": -5.43}, {"name": "家电", "change_pct": -5.48}, {"name": "储能", "change_pct": -5.14}, {"name": "智能制造", "change_pct": -5.48}, {"name": "工业互联网", "change_pct": -4.75}, {"name": "数字经济", "change_pct": -5.16}, {"name": "百度概念股", "change_pct": -4.08}, {"name": "NFT", "change_pct": -4.15}, {"name": "跨境支付", "change_pct": -5.3}, {"name": "华为海思", "change_pct": -5.77}, {"name": "云游戏", "change_pct": -5.62}, {"name": "网红/MCN", "change_pct": -4.92}, {"name": "华为产业链", "change_pct": -5.33}, {"name": "毫米波雷达", "change_pct": -4.73}, {"name": "服务器", "change_pct": -6.11}, {"name": "AI大模型/智能体", "change_pct": -5.08}, {"name": "星闪概念", "change_pct": -5.8}, {"name": "低空经济", "change_pct": -5.56}]}, {"code": "000656", "name": "金科股份", "hot_rank": 53, "hot_rank_chg": 33, "stock_cnt": 5822, "price": "1.04", "change": "1.96", "market_id": "33", "circulate_market_value": "9760777700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": -4.24}, {"name": "房地产", "change_pct": -3.7}, {"name": "ST摘帽", "change_pct": -4.41}, {"name": "物业管理", "change_pct": -4.14}, {"name": "低价股", "change_pct": -3.44}]}, {"code": "002165", "name": "红宝丽", "hot_rank": 54, "hot_rank_chg": 37, "stock_cnt": 5822, "price": "6.11", "change": "-3.02", "market_id": "33", "circulate_market_value": "4446646600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -4.01}, {"name": "装配式建筑", "change_pct": -4.36}, {"name": "风电", "change_pct": -4.36}, {"name": "环氧丙烷", "change_pct": -3.46}, {"name": "乡村振兴", "change_pct": -3.63}, {"name": "建筑节能", "change_pct": -5.18}, {"name": "旧改", "change_pct": -4.35}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 55, "hot_rank_chg": -8, "stock_cnt": 5822, "price": "205.88", "change": "-5.91", "market_id": "17", "circulate_market_value": "138087490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 56, "hot_rank_chg": 83, "stock_cnt": 5822, "price": "42.52", "change": "3.10", "market_id": "17", "circulate_market_value": "12691312200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002261", "name": "拓维信息", "hot_rank": 57, "hot_rank_chg": -25, "stock_cnt": 5822, "price": "20.34", "change": "-8.79", "market_id": "33", "circulate_market_value": "23311785000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 58, "hot_rank_chg": 13, "stock_cnt": 5822, "price": "11.82", "change": "-9.56", "market_id": "33", "circulate_market_value": "7802697500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -4.06}, {"name": "体育产业", "change_pct": -5.03}, {"name": "一带一路", "change_pct": -3.96}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "福建自贸/海西概念", "change_pct": -4.34}, {"name": "天然气", "change_pct": -3.0}, {"name": "氢能源/燃料电池", "change_pct": -4.72}, {"name": "冷链", "change_pct": -4.01}, {"name": "地热", "change_pct": -4.04}, {"name": "冰雪产业", "change_pct": -4.79}, {"name": "腾讯概念股", "change_pct": -5.23}, {"name": "热泵", "change_pct": -5.37}, {"name": "华为产业链", "change_pct": -5.33}, {"name": "自贸区", "change_pct": -3.67}, {"name": "核聚变", "change_pct": -5.63}, {"name": "液冷服务器", "change_pct": -6.11}, {"name": "磁悬浮压缩机", "change_pct": -5.89}, {"name": "雅江电站概念股", "change_pct": -4.42}]}, {"code": "603931", "name": "格林达", "hot_rank": 59, "hot_rank_chg": 78, "stock_cnt": 5822, "price": "28.78", "change": "-1.27", "market_id": "17", "circulate_market_value": "5743290200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 60, "hot_rank_chg": 356, "stock_cnt": 5822, "price": "10.75", "change": "2.58", "market_id": "17", "circulate_market_value": "7313436500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -1.86}, {"name": "风电", "change_pct": -4.36}, {"name": "雄安新区", "change_pct": -3.69}, {"name": "煤化工", "change_pct": -1.84}]}, {"code": "601929", "name": "吉视传媒", "hot_rank": 61, "hot_rank_chg": 49, "stock_cnt": 5822, "price": "2.25", "change": "0.90", "market_id": "17", "circulate_market_value": "7852023400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": -5.12}, {"name": "车联网/车路云", "change_pct": -4.81}, {"name": "超高清视频", "change_pct": -5.0}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "人工智能", "change_pct": -5.33}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "影视", "change_pct": -2.98}, {"name": "智慧城市", "change_pct": -4.95}, {"name": "国产芯片", "change_pct": -6.13}, {"name": "振兴东北", "change_pct": -3.55}, {"name": "传媒", "change_pct": -3.59}, {"name": "低价股", "change_pct": -3.44}, {"name": "国企改革", "change_pct": -3.58}, {"name": "在线教育", "change_pct": -4.6}, {"name": "医疗信息化", "change_pct": -4.95}, {"name": "AI大模型/智能体", "change_pct": -5.08}, {"name": "短剧/互动影游", "change_pct": -4.01}, {"name": "IP经济/谷子经济", "change_pct": -4.12}]}, {"code": "002187", "name": "广百股份", "hot_rank": 62, "hot_rank_chg": 17, "stock_cnt": 5822, "price": "5.90", "change": "-10.06", "market_id": "33", "circulate_market_value": "4135278300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -4.55}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "粤港澳大湾区", "change_pct": -3.58}, {"name": "物业管理", "change_pct": -4.14}, {"name": "预制菜", "change_pct": -3.08}, {"name": "地摊经济", "change_pct": -4.5}]}, {"code": "600619", "name": "海立股份", "hot_rank": 63, "hot_rank_chg": -35, "stock_cnt": 5822, "price": "13.81", "change": "-8.36", "market_id": "17", "circulate_market_value": "10898504000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 64, "hot_rank_chg": -28, "stock_cnt": 5822, "price": "102.18", "change": "-6.84", "market_id": "33", "circulate_market_value": "111211491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 65, "hot_rank_chg": -13, "stock_cnt": 5822, "price": "37.17", "change": "-1.43", "market_id": "17", "circulate_market_value": "737604910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 66, "hot_rank_chg": 112, "stock_cnt": 5822, "price": "8.12", "change": "2.14", "market_id": "17", "circulate_market_value": "5211279700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -3.63}, {"name": "农业种植", "change_pct": -1.93}, {"name": "湖南国企改革", "change_pct": -4.2}, {"name": "乡村振兴", "change_pct": -3.63}, {"name": "休闲食品", "change_pct": -3.77}, {"name": "食品", "change_pct": -3.52}, {"name": "食品安全", "change_pct": -3.85}, {"name": "社区团购", "change_pct": -2.41}, {"name": "大农业", "change_pct": -3.21}, {"name": "预制菜", "change_pct": -3.08}, {"name": "人造肉", "change_pct": -3.68}, {"name": "国企改革", "change_pct": -3.58}]}, {"code": "301132", "name": "满坤科技", "hot_rank": 67, "hot_rank_chg": 655, "stock_cnt": 5822, "price": "51.07", "change": "20.00", "market_id": "33", "circulate_market_value": "4838409700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI服务器电源PCB"}, {"code": "601939", "name": "建设银行", "hot_rank": 68, "hot_rank_chg": 126, "stock_cnt": 5822, "price": "12.76", "change": "3.07", "market_id": "17", "circulate_market_value": "122415071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": -0.64}, {"name": "银行", "change_pct": 0.22}, {"name": "破净股", "change_pct": -3.08}, {"name": "大金融", "change_pct": -0.55}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 69, "hot_rank_chg": 13, "stock_cnt": 5822, "price": "20.30", "change": "-9.98", "market_id": "33", "circulate_market_value": "15375527000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603078", "name": "江化微", "hot_rank": 70, "hot_rank_chg": -20, "stock_cnt": 5822, "price": "24.78", "change": "-7.74", "market_id": "17", "circulate_market_value": "9556091000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 71, "hot_rank_chg": 2, "stock_cnt": 5822, "price": "58.37", "change": "-3.19", "market_id": "17", "circulate_market_value": "140773780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 72, "hot_rank_chg": -4, "stock_cnt": 5822, "price": "36.01", "change": "-5.49", "market_id": "17", "circulate_market_value": "88355802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 73, "hot_rank_chg": 36, "stock_cnt": 5822, "price": "31.62", "change": "2.40", "market_id": "17", "circulate_market_value": "773685040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300812", "name": "易天股份", "hot_rank": 74, "hot_rank_chg": 653, "stock_cnt": 5822, "price": "18.00", "change": "20.00", "market_id": "33", "circulate_market_value": "3202914200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "硅基OLED"}, {"code": "002428", "name": "云南锗业", "hot_rank": 75, "hot_rank_chg": 1, "stock_cnt": 5822, "price": "64.50", "change": "-5.04", "market_id": "33", "circulate_market_value": "42118984000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301313", "name": "凡拓数创", "hot_rank": 76, "hot_rank_chg": 76, "stock_cnt": 5822, "price": "59.16", "change": "20.00", "market_id": "33", "circulate_market_value": "4654354700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "物理AI数据基座"}, {"code": "301396", "name": "宏景科技", "hot_rank": 77, "hot_rank_chg": 3, "stock_cnt": 5822, "price": "107.66", "change": "-5.32", "market_id": "33", "circulate_market_value": "15234622000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002119", "name": "康强电子", "hot_rank": 78, "hot_rank_chg": 77, "stock_cnt": 5822, "price": "18.77", "change": "-1.68", "market_id": "33", "circulate_market_value": "7044080700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300085", "name": "银之杰", "hot_rank": 79, "hot_rank_chg": 22, "stock_cnt": 5822, "price": "27.00", "change": "1.93", "market_id": "33", "circulate_market_value": "16111093000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 80, "hot_rank_chg": -35, "stock_cnt": 5822, "price": "227.78", "change": "-2.90", "market_id": "33", "circulate_market_value": "970483360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 81, "hot_rank_chg": -39, "stock_cnt": 5822, "price": "7.73", "change": "-5.96", "market_id": "33", "circulate_market_value": "3719207100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -4.62}, {"name": "医疗器械", "change_pct": -4.93}, {"name": "锂电池", "change_pct": -5.2}, {"name": "基因测序", "change_pct": -4.31}, {"name": "PCB板", "change_pct": -3.63}, {"name": "医药", "change_pct": -4.42}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "化学原料药", "change_pct": -4.73}, {"name": "食品安全", "change_pct": -3.85}, {"name": "辅助生殖", "change_pct": -4.62}, {"name": "光刻机（胶）", "change_pct": -6.42}, {"name": "异丙醇", "change_pct": -3.44}, {"name": "新冠病毒防治", "change_pct": -4.66}, {"name": "磷酸铁锂", "change_pct": -4.36}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 82, "hot_rank_chg": -18, "stock_cnt": 5822, "price": "8.63", "change": "-10.01", "market_id": "33", "circulate_market_value": "5910707700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -5.16}, {"name": "核电", "change_pct": -4.94}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "充电桩", "change_pct": -5.08}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "储能", "change_pct": -5.14}, {"name": "阿里巴巴概念股", "change_pct": -5.17}, {"name": "中芯国际概念股", "change_pct": -5.65}, {"name": "智能电网", "change_pct": -5.52}, {"name": "核聚变", "change_pct": -5.63}]}, {"code": "300561", "name": "汇金科技", "hot_rank": 83, "hot_rank_chg": 94, "stock_cnt": 5822, "price": "16.37", "change": "6.78", "market_id": "33", "circulate_market_value": "3946112500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 84, "hot_rank_chg": -19, "stock_cnt": 5822, "price": "170.24", "change": "-6.26", "market_id": "33", "circulate_market_value": "39566855000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301348", "name": "蓝箭电子", "hot_rank": 85, "hot_rank_chg": -23, "stock_cnt": 5822, "price": "20.94", "change": "-3.32", "market_id": "33", "circulate_market_value": "4051441500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 86, "hot_rank_chg": -29, "stock_cnt": 5822, "price": "10.81", "change": "-6.00", "market_id": "33", "circulate_market_value": "37596426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -4.91}, {"name": "人工智能", "change_pct": -5.33}, {"name": "VR&AR", "change_pct": -5.32}, {"name": "直播/短视频", "change_pct": -4.69}, {"name": "大数据", "change_pct": -5.36}, {"name": "教育", "change_pct": -4.07}, {"name": "百度概念股", "change_pct": -4.08}, {"name": "阿里巴巴概念股", "change_pct": -5.17}, {"name": "腾讯概念股", "change_pct": -5.23}, {"name": "传媒", "change_pct": -3.59}, {"name": "快手概念股", "change_pct": -5.9}, {"name": "NFT", "change_pct": -4.15}, {"name": "元宇宙", "change_pct": -4.97}, {"name": "虚拟数字人", "change_pct": -4.19}, {"name": "web3.0", "change_pct": -5.55}, {"name": "AIGC概念", "change_pct": -5.18}, {"name": "字节跳动概念股", "change_pct": -5.15}, {"name": "职业教育", "change_pct": -4.67}, {"name": "云游戏", "change_pct": -5.62}, {"name": "网红/MCN", "change_pct": -4.92}, {"name": "5G消息/RCS", "change_pct": -4.32}, {"name": "AI营销", "change_pct": -5.68}, {"name": "词元概念/Token", "change_pct": -6.25}, {"name": "华为产业链", "change_pct": -5.33}, {"name": "AI大模型/智能体", "change_pct": -5.08}, {"name": "短剧/互动影游", "change_pct": -4.01}, {"name": "AI视频", "change_pct": -4.8}, {"name": "智谱AI", "change_pct": -5.75}, {"name": "小红书概念股", "change_pct": -5.77}, {"name": "区块链", "change_pct": -4.89}]}, {"code": "301052", "name": "果麦文化", "hot_rank": 87, "hot_rank_chg": 28, "stock_cnt": 5822, "price": "36.80", "change": "11.92", "market_id": "33", "circulate_market_value": "2951430500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002077", "name": "大港股份", "hot_rank": 88, "hot_rank_chg": 1, "stock_cnt": 5822, "price": "11.70", "change": "-3.39", "market_id": "33", "circulate_market_value": "6790077600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手机产业链", "change_pct": -5.84}, {"name": "半导体", "change_pct": -6.6}, {"name": "股权转让", "change_pct": -5.0}, {"name": "锂电池", "change_pct": -5.2}, {"name": "固废处理", "change_pct": -4.58}, {"name": "江苏国企改革", "change_pct": -3.81}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "环保", "change_pct": -4.75}, {"name": "国产芯片", "change_pct": -6.13}, {"name": "汽车芯片", "change_pct": -6.68}, {"name": "国企改革", "change_pct": -3.58}]}, {"code": "000410", "name": "沈阳机床", "hot_rank": 89, "hot_rank_chg": 143, "stock_cnt": 5822, "price": "5.87", "change": "5.58", "market_id": "33", "circulate_market_value": "11569877600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -3.29}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "工业自动化", "change_pct": -5.67}, {"name": "智能制造", "change_pct": -5.48}, {"name": "工业互联网", "change_pct": -4.75}, {"name": "振兴东北", "change_pct": -3.55}, {"name": "工业母机", "change_pct": -5.45}, {"name": "国企改革", "change_pct": -3.58}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 90, "hot_rank_chg": -23, "stock_cnt": 5822, "price": "36.66", "change": "-9.93", "market_id": "33", "circulate_market_value": "38904355000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 91, "hot_rank_chg": -7, "stock_cnt": 5822, "price": "13.16", "change": "-8.61", "market_id": "33", "circulate_market_value": "2334689300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601288", "name": "农业银行", "hot_rank": 92, "hot_rank_chg": 61, "stock_cnt": 5822, "price": "7.77", "change": "1.57", "market_id": "17", "circulate_market_value": "2480527500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -3.72}, {"name": "高股息", "change_pct": -0.64}, {"name": "银行", "change_pct": 0.22}, {"name": "破净股", "change_pct": -3.08}, {"name": "大金融", "change_pct": -0.55}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 93, "hot_rank_chg": -15, "stock_cnt": 5822, "price": "3.88", "change": "-1.02", "market_id": "33", "circulate_market_value": "3341310700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -4.51}, {"name": "一带一路", "change_pct": -3.96}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "福建自贸/海西概念", "change_pct": -4.34}, {"name": "光伏", "change_pct": -4.9}, {"name": "有色金属", "change_pct": -4.72}, {"name": "新能源汽车", "change_pct": -5.08}, {"name": "新能源车零部件", "change_pct": -5.37}, {"name": "自贸区", "change_pct": -3.67}, {"name": "液冷服务器", "change_pct": -6.11}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 94, "hot_rank_chg": -57, "stock_cnt": 5822, "price": "920.00", "change": "-1.50", "market_id": "17", "circulate_market_value": "578545690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 95, "hot_rank_chg": 70, "stock_cnt": 5822, "price": "4.66", "change": "0.21", "market_id": "33", "circulate_market_value": "3565555800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -3.51}, {"name": "优化生育（三孩）", "change_pct": -4.01}, {"name": "强势人气股", "change_pct": -4.31}, {"name": "医药商业", "change_pct": -3.5}, {"name": "保健品", "change_pct": -3.74}, {"name": "民营医院", "change_pct": -3.84}, {"name": "医药", "change_pct": -4.42}, {"name": "食品", "change_pct": -3.52}, {"name": "辅助生殖", "change_pct": -4.62}, {"name": "口腔", "change_pct": -4.8}, {"name": "医美", "change_pct": -3.99}, {"name": "新冠病毒防治", "change_pct": -4.66}]}, {"code": "688347", "name": "华虹宏力", "hot_rank": 96, "hot_rank_chg": -73, "stock_cnt": 5822, "price": "189.53", "change": "-5.17", "market_id": "17", "circulate_market_value": "77280858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688041", "name": "海光信息", "hot_rank": 97, "hot_rank_chg": -77, "stock_cnt": 5822, "price": "164.25", "change": "-8.75", "market_id": "17", "circulate_market_value": "381687100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 98, "hot_rank_chg": 47, "stock_cnt": 5822, "price": "14.30", "change": "10.00", "market_id": "17", "circulate_market_value": "8506097100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "物理AI"}, {"code": "002642", "name": "荣联科技", "hot_rank": 99, "hot_rank_chg": 1117, "stock_cnt": 5822, "price": "7.26", "change": "10.00", "market_id": "33", "circulate_market_value": "4803073100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储设备集采", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.81}, {"name": "边缘计算", "change_pct": -5.29}, {"name": "泛在电力物联网", "change_pct": -5.16}, {"name": "数字孪生", "change_pct": -4.61}, {"name": "精准医疗", "change_pct": -3.6}, {"name": "国产软件", "change_pct": -5.44}, {"name": "金融科技", "change_pct": -5.03}, {"name": "人工智能", "change_pct": -5.33}, {"name": "网络安全", "change_pct": -5.63}, {"name": "云计算数据中心", "change_pct": -5.79}, {"name": "基因测序", "change_pct": -4.31}, {"name": "物联网", "change_pct": -5.7}, {"name": "山东国企改革", "change_pct": -4.02}, {"name": "大数据", "change_pct": -5.36}, {"name": "智慧城市", "change_pct": -4.95}, {"name": "智慧物流", "change_pct": -4.96}, {"name": "智能制造", "change_pct": -5.48}, {"name": "工业互联网", "change_pct": -4.75}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -5.16}, {"name": "腾讯概念股", "change_pct": -5.23}, {"name": "信创", "change_pct": -5.64}, {"name": "国资云", "change_pct": -3.84}, {"name": "东数西算/算力", "change_pct": -5.37}, {"name": "数字乡村", "change_pct": -4.35}, {"name": "国企改革", "change_pct": -3.58}, {"name": "智慧政务", "change_pct": -5.41}, {"name": "新冠病毒防治", "change_pct": -4.66}, {"name": "远程办公", "change_pct": -4.66}, {"name": "华为产业链", "change_pct": -5.33}, {"name": "AI大模型/智能体", "change_pct": -5.08}, {"name": "星闪概念", "change_pct": -5.8}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 100, "hot_rank_chg": 110, "stock_cnt": 5822, "price": "9.17", "change": "-2.96", "market_id": "17", "circulate_market_value": "11777221400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -5.48}, {"name": "工业互联网", "change_pct": -4.75}, {"name": "培育钻石", "change_pct": -6.23}, {"name": "金刚线", "change_pct": -6.25}, {"name": "国资入股", "change_pct": -3.9}, {"name": "深地经济", "change_pct": -4.39}]}];
const LIMIT_UP_POOL = [{"code": "603948", "name": "建业股份", "price": 19.56, "change_pct": 10.01, "reason": "公司电子化学品板块主要产品包括电子特气超纯氨及湿电子化学品，应用于LED、太阳能、集成电路、半导体等领域，超纯氨已形成年产21,000吨的生产能力，产品质量达到7N等级", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.89, "first_limit_up": 1795138676, "break_limit_up_times": 4}, {"code": "603466", "name": "风语筑", "price": 14.3, "change_pct": 10.0, "reason": "公司联手宇树科技共同打造杭州市具身智能展示与应用推广中心，深度参与国家级中试基地配套建设", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 15.05, "first_limit_up": 1795142652, "break_limit_up_times": 1}, {"code": "600340", "name": "*ST华幸", "price": 0.85, "change_pct": 10.39, "reason": "京津冀产业地产龙头", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 4.2, "first_limit_up": 1795140561, "break_limit_up_times": 1}, {"code": "605018", "name": "长华集团", "price": 10.26, "change_pct": 9.97, "reason": "汽车金属零部件供应商；公司拓展人形机器人用行星滚柱丝杠，产品精度为C5级并向C3级提升，规划新生产线预计2026年三季度建成", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.47, "first_limit_up": 1795140871, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 3.76, "change_pct": 9.94, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["养猪"], "limit_up_days": 1, "turnover_ratio": 8.54, "first_limit_up": 1795142841, "break_limit_up_times": 0}, {"code": "603960", "name": "克来机电", "price": 13.97, "change_pct": 10.0, "reason": "1、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar；\n2、公司为柔性自动化装备与工业机器人系统应用供应商；产品主要应用在汽车电子、汽车内饰等领域；此前研发并制造特斯拉Model3车型的座椅驱动电机装配测试生产线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.74, "first_limit_up": 1795142051, "break_limit_up_times": 0}, {"code": "000530", "name": "冰山冷热", "price": 12.29, "change_pct": 10.03, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 42.64, "first_limit_up": 1795140054, "break_limit_up_times": 2}, {"code": "000823", "name": "超声电子", "price": 18.51, "change_pct": 9.98, "reason": "公司M7/M8级高速覆铜板处于研发测试阶段，800G、1.6T光模块配套PCB在研究跟进中", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 19.95, "first_limit_up": 1795140045, "break_limit_up_times": 0}, {"code": "002642", "name": "荣联科技", "price": 7.26, "change_pct": 10.0, "reason": "企业云计算和大数据专业服务提供商；公司中选存储设备集采项目，预计成交总金额8.49亿元", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1795138293, "break_limit_up_times": 0}, {"code": "002086", "name": "东方海洋", "price": 3.75, "change_pct": 9.97, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 23.83, "first_limit_up": 1795138926, "break_limit_up_times": 0}, {"code": "603324", "name": "盛剑科技", "price": 27.71, "change_pct": 10.0, "reason": "1、公司持续推进电子化学品材料研发、制备生产、客户验证等工作；电子化学品材料（主要为光刻胶剥离液）已经实现生产销售，光刻胶显影液（TMAH）回收技术在客户端测试验证成功；\n2、公司为华为武汉研发生产项目-海思光工厂洁净室提供工艺废气治理系统", "plates": ["国产芯片"], "limit_up_days": 4, "turnover_ratio": 17.14, "first_limit_up": 1795137900, "break_limit_up_times": 4}, {"code": "600371", "name": "万向德农", "price": 10.69, "change_pct": 9.98, "reason": "公司主要从事玉米杂交种子的研产销，单倍体育种技术领先", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 10.06, "first_limit_up": 1795141044, "break_limit_up_times": 0}, {"code": "000838", "name": "*ST发展", "price": 1.32, "change_pct": 10.0, "reason": "公司携手产业投资人签约两江新区，拟布局2万吨高值资源循环基地", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 0.47, "first_limit_up": 1795137900, "break_limit_up_times": 0}, {"code": "605058", "name": "澳弘电子", "price": 42.92, "change_pct": 9.99, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.67, "first_limit_up": 1795140264, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 13.39, "change_pct": 10.02, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 12.97, "first_limit_up": 1795138584, "break_limit_up_times": 0}, {"code": "600327", "name": "大东方", "price": 4.83, "change_pct": 10.02, "reason": "1、公司旗下老字号“三凤桥”品牌，在各大主流平台设有“三凤桥旗舰店”，提真空及保鲜包装的各类卤味和熟食制品或礼盒套装，本地实体店在特定节日出售“年夜饭”预制礼盒；\n2、下属医疗业务板块中的儿科业务，主体主要包括以儿童身高管理为主的“健高儿科”、以儿心健康为主的“雅恩健康” 、以普儿科和儿保为主的“知贝医疗”组成，三个方向初步覆盖了儿童生长发育的全阶段", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 27.77, "first_limit_up": 1795144339, "break_limit_up_times": 3}, {"code": "300812", "name": "易天股份", "price": 18, "change_pct": 20.0, "reason": "子公司微组半导体Chiplet专用设备已取得日月新半导体、高通全讯射频、长电科技等客户订单，部分微组装设备已进入中国航天科技集团相关单位等供应链体系", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 16.25, "first_limit_up": 1795138962, "break_limit_up_times": 3}, {"code": "002741", "name": "光华科技", "price": 18.76, "change_pct": 10.03, "reason": "1、国内PCB化学品的领先厂商；公司主要产品包括PCB化学品，PCB化学品的功能主要应用于集成电路互连技术；\n2、消息称公司在硫化锂的生产上选择了固态和固相合成的干法路线，已在下游固态电池客户中处于领先地位", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 9.43, "first_limit_up": 1795138611, "break_limit_up_times": 0}, {"code": "605577", "name": "龙版传媒", "price": 16.19, "change_pct": 9.99, "reason": "1、公司首部AI漫剧《穿越1988》完成170集制作上线，全网播放量突破1.2亿，红果热度值超4000万；\n2、大型现代化综合性国有文化企业；公司旗下109家新华书店门店实现连锁经营，涵盖包括大中型书城、特色书店、专业书店等多种形式；旗下产品多维边疆知识服务产品数据库暂未实现盈收", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 7.41, "first_limit_up": 1795139230, "break_limit_up_times": 1}, {"code": "002199", "name": "东晶电子", "price": 9.45, "change_pct": 10.01, "reason": "国内最具规模的石英晶体元器件制造商之一；公司多款石英晶体元器件产品已在高通、紫光展锐、恒玄科技、矽昌通信、物奇微、爱科微等电子行业平台上完成导入认证", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.78, "first_limit_up": 1795138833, "break_limit_up_times": 0}, {"code": "301313", "name": "凡拓数创", "price": 59.16, "change_pct": 20.0, "reason": "公司成功中标“广东省具身智能训练场建设项目一期综合调度中心项目”及“深圳国创具身智能机器人公司仿真平台开发服务项目”，实现了物理AI核心软件产品的独立对外输出", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 34.9, "first_limit_up": 1795142673, "break_limit_up_times": 3}, {"code": "000607", "name": "华媒控股", "price": 3.73, "change_pct": 10.03, "reason": "1、公司主要从事广告策划发布、报刊发行与印刷、教育等业务，旗下杭州华媒文化发展有限公司体与水母智能合作开发 AI 漫剧，布局动漫短剧创作，依托 AI 技术完成小说到漫剧的自动化生产；\n2、公司持有杭州文化产权交易所 40% 股权，该文交所聚焦文化艺术品等资产的确权、交易与流转", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 5.39, "first_limit_up": 1795144632, "break_limit_up_times": 0}, {"code": "002749", "name": "国光股份", "price": 8.69, "change_pct": 10.0, "reason": "公司为国内植物生长调节剂行业龙头，持有植物生长调节剂登记证158个", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 3.5, "first_limit_up": 1795140579, "break_limit_up_times": 0}, {"code": "603386", "name": "骏亚科技", "price": 14.59, "change_pct": 10.03, "reason": "行业内为数不多可以为客户提供从样板到批量生产一站式服务的PCB企业；公司产品包括刚性电路板、柔性电路板（FPC）、刚柔结合板（RFPC）、高密度互联电路板（HDI）和PCBA，产品结构类型丰富，拥有1-108层线路板研制能力，兼具印制电路板研发、批量生产及整机服务能力", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 8.6, "first_limit_up": 1795143097, "break_limit_up_times": 1}, {"code": "000593", "name": "德龙汇能", "price": 17.51, "change_pct": 9.99, "reason": "公司主营城市管道燃气和零售商业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.94, "first_limit_up": 1795150851, "break_limit_up_times": 0}, {"code": "600467", "name": "好当家", "price": 2.86, "change_pct": 10.0, "reason": "公司为海参养殖龙头，拥有国内面积最大、投资最多、产量最高的海参产业基地", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 22.54, "first_limit_up": 1795145206, "break_limit_up_times": 4}, {"code": "002771", "name": "真视通", "price": 15.82, "change_pct": 10.01, "reason": "公司数据中心业务主要为用户提供数据中心基础环境建设、基础设施建设等系统建设服务，与航源光热、广电五舟联合研发了两相液冷高效散热服务器等", "plates": ["云计算数据中心"], "limit_up_days": 4, "turnover_ratio": 17.6, "first_limit_up": 1795138221, "break_limit_up_times": 0}, {"code": "603004", "name": "鼎龙科技", "price": 18.22, "change_pct": 10.02, "reason": "1、公司此前增资杭州翰亚微电子，后者主营半导体光刻胶树脂的研产销；\n2、公司PBO纤维具有力学强度突出、耐高温等核心性能，可以作为航天器外衣材料使用；\n3、公司生产的聚酰亚胺单体可以用于生产聚酰亚胺材料，据公开资料报道，部分聚酰亚胺材料可以用于固（液）态电池领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.25, "first_limit_up": 1795141809, "break_limit_up_times": 0}, {"code": "301132", "name": "满坤科技", "price": 51.07, "change_pct": 20.0, "reason": "公司主要产品为单/双面、多层高精密印制电路板，400G、800G高速光模块相关业务客户认证、送样、小批量出货有序开展", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 18.78, "first_limit_up": 1795144827, "break_limit_up_times": 0}, {"code": "600360", "name": "华微电子", "price": 9.01, "change_pct": 10.01, "reason": "公司集功率半导体器件设计研发、芯片加工、封装测试及产品营销为一体，拥有多条功率半导体分立器件及 IC 芯片生产线，产品种类覆盖功率半导体器件全部范围", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 14.34, "first_limit_up": 1795138356, "break_limit_up_times": 4}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》"};