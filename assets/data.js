const UPDATE_TIME = "2026-11-24 14:30";
const THS_HOT = [
  {
    "name": "人形机器人",
    "rise": 1.23,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "机器人概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "31家涨停",
    "hotTag": "连续27天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "英伟达概念",
    "rise": 1.53,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "计算机ETF",
    "code": "886048"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.8,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续336天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "智能音箱",
    "rise": 2.92,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "智能汽车LOF",
    "code": "885771"
  },
  {
    "name": "光刻胶",
    "rise": 1.05,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "PCB概念",
    "rise": 0.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续159天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": 0.45,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续265天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "ST板块",
    "rise": 1.32,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "猪肉",
    "rise": 0.01,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "兵装重组概念",
    "rise": 2.33,
    "rate": 0,
    "tag": "",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "算力租赁",
    "rise": -0.0,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  },
  {
    "name": "AI应用",
    "rise": -0.09,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "短剧游戏",
    "rise": 0.08,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续25天上榜",
    "rankChg": 0,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "芯片概念",
    "rise": 0.61,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续46天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "创新药",
    "rise": -1.38,
    "rate": 0,
    "tag": "",
    "hotTag": "连续166天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 0.69,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续289天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": 0.1,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "连续43天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.16,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "885957"
  },
  {
    "name": "减速器",
    "rise": 1.76,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  }
];
const THS_EVENTS = [
  {
    "title": "黄仁勋王者归来，股价暴涨31%",
    "desc": "",
    "heat": 984990,
    "direction": "英伟达概念",
    "themes": [
      "英伟达概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "奥尼电子",
        "code": "301189",
        "chg": 20.01098
      }
    ]
  },
  {
    "title": "三星2027至2029年存储产能据悉大部分已被锁定 部分客户寻求将长约延至2031年",
    "desc": "",
    "heat": 128044,
    "direction": "存储芯片",
    "themes": [
      "HBM存储",
      "DRAM存储",
      "SRAM存储",
      "存储芯片",
      "半导体",
      "光刻机"
    ],
    "stocks": [
      {
        "name": "芯导科技",
        "code": "688230",
        "chg": 10.744681
      }
    ]
  },
  {
    "title": "重磅！GeneIII 仅三L-麦角硫因获批中国新食品原料",
    "desc": "",
    "heat": 76392,
    "direction": "麦角硫因",
    "themes": [
      "麦角硫因"
    ],
    "stocks": [
      {
        "name": "若羽臣",
        "code": "003010",
        "chg": 5.143722
      }
    ]
  },
  {
    "title": "PCB供应预警！常规材料或短缺至2027年上半年",
    "desc": "",
    "heat": 61003,
    "direction": "PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB",
      "元件"
    ],
    "stocks": [
      {
        "name": "中京电子",
        "code": "002579",
        "chg": 9.979633
      }
    ]
  },
  {
    "title": "刚果（金）：将自11月30日起暂停所有钴出口",
    "desc": "",
    "heat": 49268,
    "direction": "钴",
    "themes": [
      "金属钴"
    ],
    "stocks": [
      {
        "name": "腾远钴业",
        "code": "301219",
        "chg": 14.230769
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "筹码集中",
    "change": "+3.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子鼻",
    "change": "+2.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减速器",
    "change": "+2.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "强势人气股",
    "change": "+2.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无线耳机",
    "change": "+1.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "盲盒",
    "change": "+1.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人形机器人",
    "change": "+1.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "头盔",
    "change": "+1.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "SpaceX概念股",
    "change": "+1.73%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+1.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "苹果产业链",
    "change": "+1.7%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "星闪概念",
    "change": "+1.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玩具",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机器人数据采集",
    "change": "+1.68%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "智能手表",
    "change": "+1.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手机产业链",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "手势识别",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车热管理",
    "change": "+1.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI PC",
    "change": "+1.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纳米压印",
    "change": "+1.49%",
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
    "hot_rank": 4,
    "hot_rank_chg": 5,
    "stock_cnt": 5836,
    "price": "4.54",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "7177609600.00",
    "change_type": "1",
    "change_section": "19",
    "change_days": "10",
    "change_reason": "海洋养殖",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -0.94
      },
      {
        "name": "体外诊断",
        "change_pct": -0.81
      },
      {
        "name": "医疗器械",
        "change_pct": -0.65
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "基因测序",
        "change_pct": -0.61
      },
      {
        "name": "预制菜",
        "change_pct": -0.18
      },
      {
        "name": "水产养殖",
        "change_pct": 0.83
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.85
      },
      {
        "name": "海洋经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002685",
    "name": "华东重机",
    "hot_rank": 6,
    "hot_rank_chg": 6,
    "stock_cnt": 5836,
    "price": "8.95",
    "change": "9.95",
    "market_id": "33",
    "circulate_market_value": "9017924400.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "6",
    "change_reason": "GPU芯片",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": -0.47
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "工业自动化",
        "change_pct": 0.96
      },
      {
        "name": "机械",
        "change_pct": 0.13
      },
      {
        "name": "智能制造",
        "change_pct": 0.6
      },
      {
        "name": "国产芯片",
        "change_pct": 0.93
      },
      {
        "name": "信创",
        "change_pct": -0.25
      },
      {
        "name": "AI算力芯片",
        "change_pct": 1.37
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 12,
    "hot_rank_chg": -2,
    "stock_cnt": 5836,
    "price": "3.14",
    "change": "10.18",
    "market_id": "17",
    "circulate_market_value": "8987848800.00",
    "change_type": "1",
    "change_section": "21",
    "change_days": "11",
    "change_reason": "AI漫剧",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.14
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "影视",
        "change_pct": 1.12
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "AI视频",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002148",
    "name": "北纬科技",
    "hot_rank": 13,
    "hot_rank_chg": -7,
    "stock_cnt": 5836,
    "price": "11.41",
    "change": "3.07",
    "market_id": "33",
    "circulate_market_value": "5146213600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.15
      },
      {
        "name": "手游",
        "change_pct": -0.14
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "机器人",
        "change_pct": 1.27
      },
      {
        "name": "无人机",
        "change_pct": 0.79
      },
      {
        "name": "国产芯片",
        "change_pct": 0.93
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.33
      },
      {
        "name": "低空经济",
        "change_pct": 0.14
      },
      {
        "name": "无人物流车",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 18,
    "hot_rank_chg": 16,
    "stock_cnt": 5836,
    "price": "3.44",
    "change": "-2.55",
    "market_id": "17",
    "circulate_market_value": "7610411900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": -0.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "光通信",
        "change_pct": 0.99
      },
      {
        "name": "林业",
        "change_pct": -0.97
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "人造肉",
        "change_pct": 0.16
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 21,
    "hot_rank_chg": -6,
    "stock_cnt": 5836,
    "price": "9.22",
    "change": "0.77",
    "market_id": "17",
    "circulate_market_value": "2485824600000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.11
      },
      {
        "name": "高股息",
        "change_pct": -0.97
      },
      {
        "name": "银行",
        "change_pct": -0.31
      },
      {
        "name": "白马股",
        "change_pct": -0.29
      },
      {
        "name": "破净股",
        "change_pct": -1.42
      },
      {
        "name": "大金融",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "603366",
    "name": "日出东方",
    "hot_rank": 22,
    "hot_rank_chg": 1,
    "stock_cnt": 5836,
    "price": "10.71",
    "change": "6.89",
    "market_id": "17",
    "circulate_market_value": "8707745200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "充电桩",
        "change_pct": 0.14
      },
      {
        "name": "光伏",
        "change_pct": 0.0
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "家电",
        "change_pct": 1.11
      },
      {
        "name": "储能",
        "change_pct": 0.2
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 0.75
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.08
      },
      {
        "name": "厨卫家电",
        "change_pct": 0.04
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      }
    ]
  },
  {
    "code": "600327",
    "name": "大东方",
    "hot_rank": 24,
    "hot_rank_chg": 2,
    "stock_cnt": 5836,
    "price": "5.30",
    "change": "-0.19",
    "market_id": "17",
    "circulate_market_value": "4689331400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 0.32
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.16
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "信托",
        "change_pct": -1.2
      },
      {
        "name": "民营医院",
        "change_pct": -0.71
      },
      {
        "name": "汽车销售",
        "change_pct": -1.26
      },
      {
        "name": "社区团购",
        "change_pct": -0.54
      },
      {
        "name": "大金融",
        "change_pct": -0.54
      },
      {
        "name": "餐饮",
        "change_pct": -0.19
      },
      {
        "name": "首发经济",
        "change_pct": -0.0
      }
    ]
  },
  {
    "code": "600839",
    "name": "四川长虹",
    "hot_rank": 25,
    "hot_rank_chg": 91,
    "stock_cnt": 5836,
    "price": "5.66",
    "change": "6.59",
    "market_id": "17",
    "circulate_market_value": "26120666000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 0.52
      },
      {
        "name": "国产软件",
        "change_pct": -0.09
      },
      {
        "name": "锂电池",
        "change_pct": -0.26
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "养老产业",
        "change_pct": -0.38
      },
      {
        "name": "大飞机",
        "change_pct": 0.65
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "智慧城市",
        "change_pct": 0.07
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "机器人",
        "change_pct": 1.27
      },
      {
        "name": "黑色家电",
        "change_pct": 0.71
      },
      {
        "name": "家电",
        "change_pct": 1.11
      },
      {
        "name": "储能",
        "change_pct": 0.2
      },
      {
        "name": "智能制造",
        "change_pct": 0.6
      },
      {
        "name": "工业互联网",
        "change_pct": 0.59
      },
      {
        "name": "数字经济",
        "change_pct": -0.09
      },
      {
        "name": "百度概念股",
        "change_pct": 0.71
      },
      {
        "name": "NFT",
        "change_pct": 0.42
      },
      {
        "name": "跨境支付",
        "change_pct": -0.83
      },
      {
        "name": "华为海思",
        "change_pct": 0.57
      },
      {
        "name": "云游戏",
        "change_pct": -0.05
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.64
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "毫米波雷达",
        "change_pct": 1.08
      },
      {
        "name": "服务器",
        "change_pct": 0.72
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.26
      },
      {
        "name": "星闪概念",
        "change_pct": 1.69
      },
      {
        "name": "低空经济",
        "change_pct": 0.14
      }
    ]
  },
  {
    "code": "000711",
    "name": "京蓝科技",
    "hot_rank": 29,
    "hot_rank_chg": 29,
    "stock_cnt": 5836,
    "price": "4.24",
    "change": "-0.23",
    "market_id": "33",
    "circulate_market_value": "9993743000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 0.42
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "固废处理",
        "change_pct": -1.11
      },
      {
        "name": "智慧城市",
        "change_pct": 0.07
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.01
      },
      {
        "name": "有色金属",
        "change_pct": -1.01
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "环保",
        "change_pct": -0.76
      },
      {
        "name": "土壤修复",
        "change_pct": -0.69
      },
      {
        "name": "磷化铟",
        "change_pct": -1.31
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 30,
    "hot_rank_chg": 3,
    "stock_cnt": 5836,
    "price": "4.85",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6475006900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.43
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "LED",
        "change_pct": 0.34
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "600467",
    "name": "好当家",
    "hot_rank": 32,
    "hot_rank_chg": -3,
    "stock_cnt": 5836,
    "price": "3.27",
    "change": "3.81",
    "market_id": "17",
    "circulate_market_value": "4777451400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.24
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "冷链",
        "change_pct": -0.12
      },
      {
        "name": "医药",
        "change_pct": -1.17
      },
      {
        "name": "食品",
        "change_pct": -0.4
      },
      {
        "name": "食品安全",
        "change_pct": -0.39
      },
      {
        "name": "预制菜",
        "change_pct": -0.18
      },
      {
        "name": "水产养殖",
        "change_pct": 0.83
      },
      {
        "name": "海洋经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "601188",
    "name": "龙江交通",
    "hot_rank": 34,
    "hot_rank_chg": -10,
    "stock_cnt": 5836,
    "price": "4.52",
    "change": "-1.95",
    "market_id": "17",
    "circulate_market_value": "5900724000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "高速公路",
        "change_pct": -1.12
      },
      {
        "name": "振兴东北",
        "change_pct": -0.99
      },
      {
        "name": "黑龙江自贸区",
        "change_pct": -1.98
      }
    ]
  },
  {
    "code": "600156",
    "name": "华升股份",
    "hot_rank": 35,
    "hot_rank_chg": 18,
    "stock_cnt": 5836,
    "price": "8.56",
    "change": "-2.95",
    "market_id": "17",
    "circulate_market_value": "3442067600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.01
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "纺织服装",
        "change_pct": 0.35
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.89
      },
      {
        "name": "外贸受益概念",
        "change_pct": 0.13
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.04
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.85
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "002642",
    "name": "荣联科技",
    "hot_rank": 37,
    "hot_rank_chg": 39,
    "stock_cnt": 5836,
    "price": "7.76",
    "change": "-2.88",
    "market_id": "33",
    "circulate_market_value": "5133863200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.15
      },
      {
        "name": "边缘计算",
        "change_pct": 0.11
      },
      {
        "name": "泛在电力物联网",
        "change_pct": -0.06
      },
      {
        "name": "数字孪生",
        "change_pct": 0.9
      },
      {
        "name": "精准医疗",
        "change_pct": -0.94
      },
      {
        "name": "国产软件",
        "change_pct": -0.09
      },
      {
        "name": "金融科技",
        "change_pct": -0.32
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "网络安全",
        "change_pct": -0.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "基因测序",
        "change_pct": -0.61
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "山东国企改革",
        "change_pct": -0.62
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "智慧城市",
        "change_pct": 0.07
      },
      {
        "name": "智慧物流",
        "change_pct": -0.04
      },
      {
        "name": "智能制造",
        "change_pct": 0.6
      },
      {
        "name": "工业互联网",
        "change_pct": 0.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "信创",
        "change_pct": -0.25
      },
      {
        "name": "国资云",
        "change_pct": -0.68
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.04
      },
      {
        "name": "数字乡村",
        "change_pct": -0.62
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "智慧政务",
        "change_pct": -0.06
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.85
      },
      {
        "name": "远程办公",
        "change_pct": 0.04
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "算力租赁",
        "change_pct": -0.06
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.26
      },
      {
        "name": "星闪概念",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 40,
    "hot_rank_chg": 177,
    "stock_cnt": 5836,
    "price": "3.84",
    "change": "5.79",
    "market_id": "33",
    "circulate_market_value": "22482420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "水利",
        "change_pct": -0.73
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.71
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "园林",
        "change_pct": -0.3
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.19
      },
      {
        "name": "数字经济",
        "change_pct": -0.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "传媒",
        "change_pct": -0.05
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.17
      },
      {
        "name": "第三代半导体",
        "change_pct": 0.55
      },
      {
        "name": "快手概念股",
        "change_pct": 1.15
      },
      {
        "name": "IGBT",
        "change_pct": 1.38
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.48
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.78
      },
      {
        "name": "氮化镓",
        "change_pct": 0.72
      },
      {
        "name": "AI营销",
        "change_pct": 0.38
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.26
      },
      {
        "name": "多模态",
        "change_pct": 0.68
      },
      {
        "name": "AI视频",
        "change_pct": 0.27
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.06
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.41
      },
      {
        "name": "区块链",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 41,
    "hot_rank_chg": 21,
    "stock_cnt": 5836,
    "price": "7.65",
    "change": "3.80",
    "market_id": "33",
    "circulate_market_value": "3623654200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.14
      },
      {
        "name": "VR&AR",
        "change_pct": 1.11
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "影视",
        "change_pct": 1.12
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.71
      },
      {
        "name": "动漫",
        "change_pct": -0.02
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "传媒",
        "change_pct": -0.05
      },
      {
        "name": "元宇宙",
        "change_pct": 0.6
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.35
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "601599",
    "name": "浙文影业",
    "hot_rank": 49,
    "hot_rank_chg": 14,
    "stock_cnt": 5836,
    "price": "4.02",
    "change": "10.14",
    "market_id": "17",
    "circulate_market_value": "4665380700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "影视业务",
    "xgb_concepts": [
      {
        "name": "纺织服装",
        "change_pct": 0.35
      },
      {
        "name": "浙江国企改革",
        "change_pct": -0.05
      },
      {
        "name": "影视",
        "change_pct": 1.12
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 50,
    "hot_rank_chg": 14,
    "stock_cnt": 5836,
    "price": "9.30",
    "change": "1.75",
    "market_id": "17",
    "circulate_market_value": "16638986000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.09
      },
      {
        "name": "纯碱",
        "change_pct": -1.95
      },
      {
        "name": "食品",
        "change_pct": -0.4
      },
      {
        "name": "土壤修复",
        "change_pct": -0.69
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.04
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.11
      },
      {
        "name": "算力租赁",
        "change_pct": -0.06
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "002578",
    "name": "闽发铝业",
    "hot_rank": 51,
    "hot_rank_chg": 72,
    "stock_cnt": 5836,
    "price": "4.31",
    "change": "4.36",
    "market_id": "33",
    "circulate_market_value": "3711610600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": -0.78
      },
      {
        "name": "一带一路",
        "change_pct": -0.47
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -0.56
      },
      {
        "name": "光伏",
        "change_pct": 0.0
      },
      {
        "name": "有色金属",
        "change_pct": -1.01
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.01
      },
      {
        "name": "自贸区",
        "change_pct": -0.58
      },
      {
        "name": "液冷服务器",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 56,
    "hot_rank_chg": 10,
    "stock_cnt": 5836,
    "price": "10.56",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "5982010700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 0.05
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "LED",
        "change_pct": 0.34
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.16
      },
      {
        "name": "海洋经济",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 57,
    "hot_rank_chg": -5,
    "stock_cnt": 5836,
    "price": "8.62",
    "change": "1.41",
    "market_id": "33",
    "circulate_market_value": "4147421100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": -0.81
      },
      {
        "name": "医疗器械",
        "change_pct": -0.65
      },
      {
        "name": "锂电池",
        "change_pct": -0.26
      },
      {
        "name": "基因测序",
        "change_pct": -0.61
      },
      {
        "name": "PCB板",
        "change_pct": 0.11
      },
      {
        "name": "医药",
        "change_pct": -1.17
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.18
      },
      {
        "name": "化学原料药",
        "change_pct": -1.27
      },
      {
        "name": "食品安全",
        "change_pct": -0.39
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.4
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 1.07
      },
      {
        "name": "异丙醇",
        "change_pct": -0.62
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.85
      },
      {
        "name": "磷酸铁锂",
        "change_pct": -0.38
      }
    ]
  },
  {
    "code": "600825",
    "name": "新华传媒",
    "hot_rank": 58,
    "hot_rank_chg": -10,
    "stock_cnt": 5836,
    "price": "12.00",
    "change": "1.70",
    "market_id": "17",
    "circulate_market_value": "12538654200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.43
      },
      {
        "name": "上海国企改革",
        "change_pct": -0.58
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "传媒",
        "change_pct": -0.05
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 64,
    "hot_rank_chg": -9,
    "stock_cnt": 5836,
    "price": "4.42",
    "change": "-1.12",
    "market_id": "33",
    "circulate_market_value": "155479250000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.45
      },
      {
        "name": "手机产业链",
        "change_pct": 1.57
      },
      {
        "name": "超高清视频",
        "change_pct": 0.52
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.7
      },
      {
        "name": "电竞",
        "change_pct": -0.27
      },
      {
        "name": "半导体",
        "change_pct": 0.79
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.96
      },
      {
        "name": "VR&AR",
        "change_pct": 1.11
      },
      {
        "name": "OLED",
        "change_pct": 0.95
      },
      {
        "name": "京津冀",
        "change_pct": -0.9
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "指纹识别",
        "change_pct": 0.8
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.11
      },
      {
        "name": "白马股",
        "change_pct": -0.29
      },
      {
        "name": "智能制造",
        "change_pct": 0.6
      },
      {
        "name": "小米概念股",
        "change_pct": 1.19
      },
      {
        "name": "国产芯片",
        "change_pct": 0.93
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.33
      },
      {
        "name": "全息概念",
        "change_pct": 0.26
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.17
      },
      {
        "name": "MicroLED",
        "change_pct": 0.31
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.01
      },
      {
        "name": "智能手表",
        "change_pct": 1.67
      },
      {
        "name": "MiniLED",
        "change_pct": 0.98
      },
      {
        "name": "传感器",
        "change_pct": 1.09
      },
      {
        "name": "大硅片",
        "change_pct": 0.24
      },
      {
        "name": "AI PC",
        "change_pct": 1.46
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "回购",
        "change_pct": 0.0
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.42
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.38
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 68,
    "hot_rank_chg": -24,
    "stock_cnt": 5836,
    "price": "11.50",
    "change": "1.23",
    "market_id": "33",
    "circulate_market_value": "39996198000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.01
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "VR&AR",
        "change_pct": 1.11
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.71
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "教育",
        "change_pct": -0.1
      },
      {
        "name": "百度概念股",
        "change_pct": 0.71
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.33
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "传媒",
        "change_pct": -0.05
      },
      {
        "name": "快手概念股",
        "change_pct": 1.15
      },
      {
        "name": "NFT",
        "change_pct": 0.42
      },
      {
        "name": "元宇宙",
        "change_pct": 0.6
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.48
      },
      {
        "name": "web3.0",
        "change_pct": 0.01
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.35
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.78
      },
      {
        "name": "职业教育",
        "change_pct": -0.04
      },
      {
        "name": "云游戏",
        "change_pct": -0.05
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.64
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.33
      },
      {
        "name": "AI营销",
        "change_pct": 0.38
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.1
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "AI视频",
        "change_pct": 0.27
      },
      {
        "name": "智谱AI",
        "change_pct": 0.27
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.41
      },
      {
        "name": "区块链",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "300324",
    "name": "旋极信息",
    "hot_rank": 69,
    "hot_rank_chg": 28,
    "stock_cnt": 5836,
    "price": "4.77",
    "change": "6.24",
    "market_id": "33",
    "circulate_market_value": "8156620600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": -0.06
      },
      {
        "name": "数字孪生",
        "change_pct": 0.9
      },
      {
        "name": "半导体",
        "change_pct": 0.79
      },
      {
        "name": "国产软件",
        "change_pct": -0.09
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "网络安全",
        "change_pct": -0.31
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.34
      },
      {
        "name": "大飞机",
        "change_pct": 0.65
      },
      {
        "name": "北斗导航",
        "change_pct": 0.87
      },
      {
        "name": "军民融合",
        "change_pct": 0.37
      },
      {
        "name": "京津冀",
        "change_pct": -0.9
      },
      {
        "name": "物联网",
        "change_pct": 0.7
      },
      {
        "name": "大数据",
        "change_pct": -0.15
      },
      {
        "name": "智慧城市",
        "change_pct": 0.07
      },
      {
        "name": "电子发票",
        "change_pct": -0.57
      },
      {
        "name": "军工",
        "change_pct": 0.44
      },
      {
        "name": "无人机",
        "change_pct": 0.79
      },
      {
        "name": "智能制造",
        "change_pct": 0.6
      },
      {
        "name": "工业互联网",
        "change_pct": 0.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.09
      },
      {
        "name": "国产芯片",
        "change_pct": 0.93
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "信创",
        "change_pct": -0.25
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.63
      },
      {
        "name": "航天",
        "change_pct": 0.52
      },
      {
        "name": "数字人民币",
        "change_pct": -0.35
      },
      {
        "name": "智慧政务",
        "change_pct": -0.06
      },
      {
        "name": "医疗信息化",
        "change_pct": -0.52
      },
      {
        "name": "云游戏",
        "change_pct": -0.05
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "物理AI",
        "change_pct": 1.29
      },
      {
        "name": "时空大数据",
        "change_pct": 0.75
      },
      {
        "name": "AI算力芯片",
        "change_pct": 1.37
      },
      {
        "name": "军工信息化",
        "change_pct": 0.59
      },
      {
        "name": "财税改革",
        "change_pct": -0.26
      },
      {
        "name": "区块链",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 72,
    "hot_rank_chg": 6,
    "stock_cnt": 5836,
    "price": "6.91",
    "change": "4.22",
    "market_id": "33",
    "circulate_market_value": "5028858900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": -0.12
      },
      {
        "name": "装配式建筑",
        "change_pct": -0.19
      },
      {
        "name": "风电",
        "change_pct": -0.35
      },
      {
        "name": "环氧丙烷",
        "change_pct": -0.78
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.69
      },
      {
        "name": "建筑节能",
        "change_pct": -0.44
      },
      {
        "name": "旧改",
        "change_pct": -0.49
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 74,
    "hot_rank_chg": 77,
    "stock_cnt": 5836,
    "price": "11.60",
    "change": "-0.34",
    "market_id": "17",
    "circulate_market_value": "24261889000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -0.7
      },
      {
        "name": "半导体",
        "change_pct": 0.79
      },
      {
        "name": "光伏",
        "change_pct": 0.0
      },
      {
        "name": "风电",
        "change_pct": -0.35
      },
      {
        "name": "江苏国企改革",
        "change_pct": -0.89
      },
      {
        "name": "国产芯片",
        "change_pct": 0.93
      },
      {
        "name": "BIPV概念",
        "change_pct": -0.63
      },
      {
        "name": "内存",
        "change_pct": -0.16
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      },
      {
        "name": "闪存",
        "change_pct": 0.47
      },
      {
        "name": "中芯国际概念股",
        "change_pct": 0.54
      }
    ]
  },
  {
    "code": "002425",
    "name": "凯撒文化",
    "hot_rank": 76,
    "hot_rank_chg": 12,
    "stock_cnt": 5836,
    "price": "3.52",
    "change": "2.03",
    "market_id": "33",
    "circulate_market_value": "3239054400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.14
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.42
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "VR&AR",
        "change_pct": 1.11
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "动漫",
        "change_pct": -0.02
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "快手概念股",
        "change_pct": 1.15
      },
      {
        "name": "NFT",
        "change_pct": 0.42
      },
      {
        "name": "元宇宙",
        "change_pct": 0.6
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.48
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.78
      },
      {
        "name": "云游戏",
        "change_pct": -0.05
      },
      {
        "name": "华为产业链",
        "change_pct": 0.28
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "002548",
    "name": "金新农",
    "hot_rank": 79,
    "hot_rank_chg": 47,
    "stock_cnt": 5836,
    "price": "4.55",
    "change": "9.90",
    "market_id": "33",
    "circulate_market_value": "3660345300.00",
    "change_type": "1",
    "change_section": "8",
    "change_days": "5",
    "change_reason": "生猪养殖",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": -0.33
      },
      {
        "name": "养猪",
        "change_pct": 0.18
      },
      {
        "name": "强势人气股",
        "change_pct": 2.59
      },
      {
        "name": "大农业",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 80,
    "hot_rank_chg": -12,
    "stock_cnt": 5836,
    "price": "5.40",
    "change": "5.26",
    "market_id": "33",
    "circulate_market_value": "4131759900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -1.24
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.16
      },
      {
        "name": "医药商业",
        "change_pct": -1.26
      },
      {
        "name": "保健品",
        "change_pct": -0.76
      },
      {
        "name": "民营医院",
        "change_pct": -0.71
      },
      {
        "name": "医药",
        "change_pct": -1.17
      },
      {
        "name": "食品",
        "change_pct": -0.4
      },
      {
        "name": "辅助生殖",
        "change_pct": -1.4
      },
      {
        "name": "口腔",
        "change_pct": -0.86
      },
      {
        "name": "医美",
        "change_pct": -1.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.85
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 93,
    "hot_rank_chg": 2,
    "stock_cnt": 5836,
    "price": "8.53",
    "change": "-1.39",
    "market_id": "17",
    "circulate_market_value": "5474410800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.64
      },
      {
        "name": "农业种植",
        "change_pct": -0.15
      },
      {
        "name": "湖南国企改革",
        "change_pct": -0.89
      },
      {
        "name": "乡村振兴",
        "change_pct": -0.69
      },
      {
        "name": "休闲食品",
        "change_pct": 0.33
      },
      {
        "name": "食品",
        "change_pct": -0.4
      },
      {
        "name": "食品安全",
        "change_pct": -0.39
      },
      {
        "name": "社区团购",
        "change_pct": -0.54
      },
      {
        "name": "大农业",
        "change_pct": -0.36
      },
      {
        "name": "预制菜",
        "change_pct": -0.18
      },
      {
        "name": "人造肉",
        "change_pct": 0.16
      },
      {
        "name": "国企改革",
        "change_pct": -0.76
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 95,
    "hot_rank_chg": 4,
    "stock_cnt": 5836,
    "price": "6.82",
    "change": "0.59",
    "market_id": "33",
    "circulate_market_value": "11096097600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.01
      },
      {
        "name": "电竞",
        "change_pct": -0.27
      },
      {
        "name": "手游",
        "change_pct": -0.14
      },
      {
        "name": "人工智能",
        "change_pct": 0.19
      },
      {
        "name": "游戏",
        "change_pct": -0.01
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.09
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.29
      },
      {
        "name": "传媒",
        "change_pct": -0.05
      },
      {
        "name": "快手概念股",
        "change_pct": 1.15
      },
      {
        "name": "元宇宙",
        "change_pct": 0.6
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.48
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.04
      },
      {
        "name": "web3.0",
        "change_pct": 0.01
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.35
      },
      {
        "name": "数据要素",
        "change_pct": -0.25
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.78
      },
      {
        "name": "AI营销",
        "change_pct": 0.38
      },
      {
        "name": "ChatGPT",
        "change_pct": 0.25
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.38
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.26
      },
      {
        "name": "人形机器人",
        "change_pct": 1.88
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "多模态",
        "change_pct": 0.68
      },
      {
        "name": "AI视频",
        "change_pct": 0.27
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.35
      },
      {
        "name": "微信小店",
        "change_pct": 0.83
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.41
      }
    ]
  },
  {
    "code": "603278",
    "name": "大业股份",
    "hot_rank": 96,
    "hot_rank_chg": 6,
    "stock_cnt": 5836,
    "price": "11.85",
    "change": "1.54",
    "market_id": "17",
    "circulate_market_value": "4049848800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "轮胎",
        "change_pct": -1.04
      },
      {
        "name": "风电",
        "change_pct": -0.35
      },
      {
        "name": "航天",
        "change_pct": 0.52
      },
      {
        "name": "人形机器人",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 99,
    "hot_rank_chg": 47,
    "stock_cnt": 5836,
    "price": "8.24",
    "change": "1.85",
    "market_id": "33",
    "circulate_market_value": "8734030600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -0.56
      },
      {
        "name": "电子烟",
        "change_pct": 0.85
      },
      {
        "name": "一带一路",
        "change_pct": -0.47
      },
      {
        "name": "造纸",
        "change_pct": -0.61
      },
      {
        "name": "包装印刷",
        "change_pct": -0.05
      },
      {
        "name": "卫星互联网",
        "change_pct": 0.74
      },
      {
        "name": "太空算力",
        "change_pct": 0.25
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "002242", "name": "九阳股份", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5836, "price": "35.05", "change": "10.01", "market_id": "33", "circulate_market_value": "26699885000.00", "change_type": "1", "change_section": "6", "change_days": "4", "change_reason": "厨房小家电"}, {"code": "600410", "name": "华胜天成", "hot_rank": 2, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "17.17", "change": "3.12", "market_id": "17", "circulate_market_value": "18826814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "13.42", "change": "-0.74", "market_id": "33", "circulate_market_value": "8053566400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 4, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "4.54", "change": "9.93", "market_id": "33", "circulate_market_value": "7177609600.00", "change_type": "1", "change_section": "19", "change_days": "10", "change_reason": "海洋养殖", "xgb_concepts": [{"name": "精准医疗", "change_pct": -0.94}, {"name": "体外诊断", "change_pct": -0.81}, {"name": "医疗器械", "change_pct": -0.65}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "基因测序", "change_pct": -0.61}, {"name": "预制菜", "change_pct": -0.18}, {"name": "水产养殖", "change_pct": 0.83}, {"name": "新冠病毒防治", "change_pct": -0.85}, {"name": "海洋经济", "change_pct": -0.27}]}, {"code": "002384", "name": "东山精密", "hot_rank": 5, "hot_rank_chg": 8, "stock_cnt": 5836, "price": "72.70", "change": "1.72", "market_id": "33", "circulate_market_value": "100785589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002685", "name": "华东重机", "hot_rank": 6, "hot_rank_chg": 6, "stock_cnt": 5836, "price": "8.95", "change": "9.95", "market_id": "33", "circulate_market_value": "9017924400.00", "change_type": "1", "change_section": "8", "change_days": "6", "change_reason": "GPU芯片", "xgb_concepts": [{"name": "一带一路", "change_pct": -0.47}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "工业自动化", "change_pct": 0.96}, {"name": "机械", "change_pct": 0.13}, {"name": "智能制造", "change_pct": 0.6}, {"name": "国产芯片", "change_pct": 0.93}, {"name": "信创", "change_pct": -0.25}, {"name": "AI算力芯片", "change_pct": 1.37}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5836, "price": "417.00", "change": "-0.05", "market_id": "33", "circulate_market_value": "462843730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 8, "hot_rank_chg": 35, "stock_cnt": 5836, "price": "40.96", "change": "6.97", "market_id": "17", "circulate_market_value": "812814020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002771", "name": "真视通", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "17.33", "change": "-0.40", "market_id": "33", "circulate_market_value": "3129665500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 10, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "180.01", "change": "-0.74", "market_id": "33", "circulate_market_value": "225862820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "19.58", "change": "4.82", "market_id": "33", "circulate_market_value": "8999199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5836, "price": "3.14", "change": "10.18", "market_id": "17", "circulate_market_value": "8987848800.00", "change_type": "1", "change_section": "21", "change_days": "11", "change_reason": "AI漫剧", "xgb_concepts": [{"name": "手游", "change_pct": -0.14}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "游戏", "change_pct": -0.01}, {"name": "影视", "change_pct": 1.12}, {"name": "国企改革", "change_pct": -0.76}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "AI视频", "change_pct": 0.27}]}, {"code": "002148", "name": "北纬科技", "hot_rank": 13, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "11.41", "change": "3.07", "market_id": "33", "circulate_market_value": "5146213600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.15}, {"name": "手游", "change_pct": -0.14}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "游戏", "change_pct": -0.01}, {"name": "物联网", "change_pct": 0.7}, {"name": "机器人", "change_pct": 1.27}, {"name": "无人机", "change_pct": 0.79}, {"name": "国产芯片", "change_pct": 0.93}, {"name": "5G消息/RCS", "change_pct": -0.33}, {"name": "低空经济", "change_pct": 0.14}, {"name": "无人物流车", "change_pct": -0.06}]}, {"code": "002579", "name": "中京电子", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "16.20", "change": "9.98", "market_id": "33", "circulate_market_value": "9451699800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "高阶HDI"}, {"code": "688836", "name": "宇树科技", "hot_rank": 15, "hot_rank_chg": -13, "stock_cnt": 5836, "price": "718.00", "change": "1.41", "market_id": "17", "circulate_market_value": "21602983000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "19.10", "change": "-3.97", "market_id": "33", "circulate_market_value": "11363204400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000158", "name": "常山北明", "hot_rank": 17, "hot_rank_chg": 11, "stock_cnt": 5836, "price": "13.86", "change": "3.82", "market_id": "33", "circulate_market_value": "22046321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 18, "hot_rank_chg": 16, "stock_cnt": 5836, "price": "3.44", "change": "-2.55", "market_id": "17", "circulate_market_value": "7610411900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": -0.61}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "光通信", "change_pct": 0.99}, {"name": "林业", "change_pct": -0.97}, {"name": "军民融合", "change_pct": 0.37}, {"name": "军工", "change_pct": 0.44}, {"name": "人造肉", "change_pct": 0.16}]}, {"code": "600206", "name": "有研新材", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "38.84", "change": "-2.90", "market_id": "17", "circulate_market_value": "32880131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 20, "hot_rank_chg": -4, "stock_cnt": 5836, "price": "121.57", "change": "4.53", "market_id": "33", "circulate_market_value": "132315335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 21, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "9.22", "change": "0.77", "market_id": "17", "circulate_market_value": "2485824600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.11}, {"name": "高股息", "change_pct": -0.97}, {"name": "银行", "change_pct": -0.31}, {"name": "白马股", "change_pct": -0.29}, {"name": "破净股", "change_pct": -1.42}, {"name": "大金融", "change_pct": -0.54}]}, {"code": "603366", "name": "日出东方", "hot_rank": 22, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "10.71", "change": "6.89", "market_id": "17", "circulate_market_value": "8707745200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.59}, {"name": "充电桩", "change_pct": 0.14}, {"name": "光伏", "change_pct": 0.0}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "家电", "change_pct": 1.11}, {"name": "储能", "change_pct": 0.2}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 0.75}, {"name": "华为鸿蒙", "change_pct": -0.08}, {"name": "厨卫家电", "change_pct": 0.04}, {"name": "华为产业链", "change_pct": 0.28}]}, {"code": "603324", "name": "盛剑科技", "hot_rank": 23, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "29.34", "change": "-3.74", "market_id": "17", "circulate_market_value": "4280072800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600327", "name": "大东方", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "5.30", "change": "-0.19", "market_id": "17", "circulate_market_value": "4689331400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 0.32}, {"name": "优化生育（三孩）", "change_pct": -0.16}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "信托", "change_pct": -1.2}, {"name": "民营医院", "change_pct": -0.71}, {"name": "汽车销售", "change_pct": -1.26}, {"name": "社区团购", "change_pct": -0.54}, {"name": "大金融", "change_pct": -0.54}, {"name": "餐饮", "change_pct": -0.19}, {"name": "首发经济", "change_pct": -0.0}]}, {"code": "600839", "name": "四川长虹", "hot_rank": 25, "hot_rank_chg": 91, "stock_cnt": 5836, "price": "5.66", "change": "6.59", "market_id": "17", "circulate_market_value": "26120666000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 0.52}, {"name": "国产软件", "change_pct": -0.09}, {"name": "锂电池", "change_pct": -0.26}, {"name": "人工智能", "change_pct": 0.19}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "养老产业", "change_pct": -0.38}, {"name": "大飞机", "change_pct": 0.65}, {"name": "军民融合", "change_pct": 0.37}, {"name": "物联网", "change_pct": 0.7}, {"name": "大数据", "change_pct": -0.15}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "军工", "change_pct": 0.44}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "机器人", "change_pct": 1.27}, {"name": "黑色家电", "change_pct": 0.71}, {"name": "家电", "change_pct": 1.11}, {"name": "储能", "change_pct": 0.2}, {"name": "智能制造", "change_pct": 0.6}, {"name": "工业互联网", "change_pct": 0.59}, {"name": "数字经济", "change_pct": -0.09}, {"name": "百度概念股", "change_pct": 0.71}, {"name": "NFT", "change_pct": 0.42}, {"name": "跨境支付", "change_pct": -0.83}, {"name": "华为海思", "change_pct": 0.57}, {"name": "云游戏", "change_pct": -0.05}, {"name": "网红/MCN", "change_pct": 0.64}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "毫米波雷达", "change_pct": 1.08}, {"name": "服务器", "change_pct": 0.72}, {"name": "AI大模型/智能体", "change_pct": -0.26}, {"name": "星闪概念", "change_pct": 1.69}, {"name": "低空经济", "change_pct": 0.14}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5836, "price": "82.80", "change": "16.64", "market_id": "33", "circulate_market_value": "6514208400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "36.26", "change": "1.00", "market_id": "17", "circulate_market_value": "163280190000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 28, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "84.13", "change": "1.73", "market_id": "33", "circulate_market_value": "162588710000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000711", "name": "京蓝科技", "hot_rank": 29, "hot_rank_chg": 29, "stock_cnt": 5836, "price": "4.24", "change": "-0.23", "market_id": "33", "circulate_market_value": "9993743000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 0.42}, {"name": "物联网", "change_pct": 0.7}, {"name": "大数据", "change_pct": -0.15}, {"name": "固废处理", "change_pct": -1.11}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "有色 · 锌", "change_pct": -3.01}, {"name": "有色金属", "change_pct": -1.01}, {"name": "PPP", "change_pct": -0.9}, {"name": "环保", "change_pct": -0.76}, {"name": "土壤修复", "change_pct": -0.69}, {"name": "磷化铟", "change_pct": -1.31}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 30, "hot_rank_chg": 3, "stock_cnt": 5836, "price": "4.85", "change": "9.98", "market_id": "17", "circulate_market_value": "6475006900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "商业航天", "xgb_concepts": [{"name": "氢能源/燃料电池", "change_pct": -0.43}, {"name": "物联网", "change_pct": 0.7}, {"name": "LED", "change_pct": 0.34}, {"name": "卫星互联网", "change_pct": 0.74}]}, {"code": "300274", "name": "阳光电源", "hot_rank": 31, "hot_rank_chg": 106, "stock_cnt": 5836, "price": "73.62", "change": "4.83", "market_id": "33", "circulate_market_value": "116868780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600467", "name": "好当家", "hot_rank": 32, "hot_rank_chg": -3, "stock_cnt": 5836, "price": "3.27", "change": "3.81", "market_id": "17", "circulate_market_value": "4777451400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.24}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "冷链", "change_pct": -0.12}, {"name": "医药", "change_pct": -1.17}, {"name": "食品", "change_pct": -0.4}, {"name": "食品安全", "change_pct": -0.39}, {"name": "预制菜", "change_pct": -0.18}, {"name": "水产养殖", "change_pct": 0.83}, {"name": "海洋经济", "change_pct": -0.27}]}, {"code": "600183", "name": "生益科技", "hot_rank": 33, "hot_rank_chg": 28, "stock_cnt": 5836, "price": "61.60", "change": "1.40", "market_id": "17", "circulate_market_value": "148563730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601188", "name": "龙江交通", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "4.52", "change": "-1.95", "market_id": "17", "circulate_market_value": "5900724000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 2.59}, {"name": "高速公路", "change_pct": -1.12}, {"name": "振兴东北", "change_pct": -0.99}, {"name": "黑龙江自贸区", "change_pct": -1.98}]}, {"code": "600156", "name": "华升股份", "hot_rank": 35, "hot_rank_chg": 18, "stock_cnt": 5836, "price": "8.56", "change": "-2.95", "market_id": "17", "circulate_market_value": "3442067600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.01}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "纺织服装", "change_pct": 0.35}, {"name": "湖南国企改革", "change_pct": -0.89}, {"name": "外贸受益概念", "change_pct": 0.13}, {"name": "东数西算/算力", "change_pct": 0.04}, {"name": "国企改革", "change_pct": -0.76}, {"name": "新冠病毒防治", "change_pct": -0.85}, {"name": "液冷服务器", "change_pct": 1.06}]}, {"code": "600584", "name": "长电科技", "hot_rank": 36, "hot_rank_chg": 11, "stock_cnt": 5836, "price": "51.22", "change": "1.81", "market_id": "17", "circulate_market_value": "91653814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002642", "name": "荣联科技", "hot_rank": 37, "hot_rank_chg": 39, "stock_cnt": 5836, "price": "7.76", "change": "-2.88", "market_id": "33", "circulate_market_value": "5133863200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.15}, {"name": "边缘计算", "change_pct": 0.11}, {"name": "泛在电力物联网", "change_pct": -0.06}, {"name": "数字孪生", "change_pct": 0.9}, {"name": "精准医疗", "change_pct": -0.94}, {"name": "国产软件", "change_pct": -0.09}, {"name": "金融科技", "change_pct": -0.32}, {"name": "人工智能", "change_pct": 0.19}, {"name": "网络安全", "change_pct": -0.31}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "基因测序", "change_pct": -0.61}, {"name": "物联网", "change_pct": 0.7}, {"name": "山东国企改革", "change_pct": -0.62}, {"name": "大数据", "change_pct": -0.15}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "智慧物流", "change_pct": -0.04}, {"name": "智能制造", "change_pct": 0.6}, {"name": "工业互联网", "change_pct": 0.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.09}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "信创", "change_pct": -0.25}, {"name": "国资云", "change_pct": -0.68}, {"name": "东数西算/算力", "change_pct": 0.04}, {"name": "数字乡村", "change_pct": -0.62}, {"name": "国企改革", "change_pct": -0.76}, {"name": "智慧政务", "change_pct": -0.06}, {"name": "新冠病毒防治", "change_pct": -0.85}, {"name": "远程办公", "change_pct": 0.04}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "算力租赁", "change_pct": -0.06}, {"name": "AI大模型/智能体", "change_pct": -0.26}, {"name": "星闪概念", "change_pct": 1.69}]}, {"code": "300413", "name": "芒果超媒", "hot_rank": 38, "hot_rank_chg": -20, "stock_cnt": 5836, "price": "31.31", "change": "0.10", "market_id": "33", "circulate_market_value": "31989426000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "51.45", "change": "10.01", "market_id": "17", "circulate_market_value": "15356726000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "柔性传感"}, {"code": "002131", "name": "利欧股份", "hot_rank": 40, "hot_rank_chg": 177, "stock_cnt": 5836, "price": "3.84", "change": "5.79", "market_id": "33", "circulate_market_value": "22482420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.19}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "水利", "change_pct": -0.73}, {"name": "直播/短视频", "change_pct": 0.71}, {"name": "大数据", "change_pct": -0.15}, {"name": "园林", "change_pct": -0.3}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.19}, {"name": "数字经济", "change_pct": -0.09}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "传媒", "change_pct": -0.05}, {"name": "理想汽车概念股", "change_pct": 1.17}, {"name": "第三代半导体", "change_pct": 0.55}, {"name": "快手概念股", "change_pct": 1.15}, {"name": "IGBT", "change_pct": 1.38}, {"name": "虚拟数字人", "change_pct": 0.48}, {"name": "AIGC概念", "change_pct": 0.35}, {"name": "字节跳动概念股", "change_pct": 0.78}, {"name": "氮化镓", "change_pct": 0.72}, {"name": "AI营销", "change_pct": 0.38}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "AI大模型/智能体", "change_pct": -0.26}, {"name": "多模态", "change_pct": 0.68}, {"name": "AI视频", "change_pct": 0.27}, {"name": "液冷服务器", "change_pct": 1.06}, {"name": "小红书概念股", "change_pct": 1.41}, {"name": "区块链", "change_pct": -0.06}]}, {"code": "002343", "name": "慈文传媒", "hot_rank": 41, "hot_rank_chg": 21, "stock_cnt": 5836, "price": "7.65", "change": "3.80", "market_id": "33", "circulate_market_value": "3623654200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.14}, {"name": "VR&AR", "change_pct": 1.11}, {"name": "游戏", "change_pct": -0.01}, {"name": "影视", "change_pct": 1.12}, {"name": "直播/短视频", "change_pct": 0.71}, {"name": "动漫", "change_pct": -0.02}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "传媒", "change_pct": -0.05}, {"name": "元宇宙", "change_pct": 0.6}, {"name": "AIGC概念", "change_pct": 0.35}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "IP经济/谷子经济", "change_pct": 0.35}]}, {"code": "603083", "name": "剑桥科技", "hot_rank": 42, "hot_rank_chg": 56, "stock_cnt": 5836, "price": "99.20", "change": "-0.80", "market_id": "17", "circulate_market_value": "27338367000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 43, "hot_rank_chg": 17, "stock_cnt": 5836, "price": "122.32", "change": "6.27", "market_id": "33", "circulate_market_value": "105830563000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 44, "hot_rank_chg": -7, "stock_cnt": 5836, "price": "18.21", "change": "2.25", "market_id": "17", "circulate_market_value": "8093333300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 45, "hot_rank_chg": 4, "stock_cnt": 5836, "price": "36.50", "change": "-1.35", "market_id": "17", "circulate_market_value": "89558088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 46, "hot_rank_chg": 0, "stock_cnt": 5836, "price": "28.25", "change": "-2.55", "market_id": "33", "circulate_market_value": "32416592000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 47, "hot_rank_chg": -15, "stock_cnt": 5836, "price": "13.65", "change": "-1.01", "market_id": "33", "circulate_market_value": "45455428000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 48, "hot_rank_chg": 8, "stock_cnt": 5836, "price": "60.49", "change": "-4.24", "market_id": "17", "circulate_market_value": "21820158000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601599", "name": "浙文影业", "hot_rank": 49, "hot_rank_chg": 14, "stock_cnt": 5836, "price": "4.02", "change": "10.14", "market_id": "17", "circulate_market_value": "4665380700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "影视业务", "xgb_concepts": [{"name": "纺织服装", "change_pct": 0.35}, {"name": "浙江国企改革", "change_pct": -0.05}, {"name": "影视", "change_pct": 1.12}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国企改革", "change_pct": -0.76}, {"name": "短剧/互动影游", "change_pct": 0.22}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 50, "hot_rank_chg": 14, "stock_cnt": 5836, "price": "9.30", "change": "1.75", "market_id": "17", "circulate_market_value": "16638986000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.09}, {"name": "纯碱", "change_pct": -1.95}, {"name": "食品", "change_pct": -0.4}, {"name": "土壤修复", "change_pct": -0.69}, {"name": "东数西算/算力", "change_pct": 0.04}, {"name": "OpenClaw概念", "change_pct": 0.11}, {"name": "算力租赁", "change_pct": -0.06}, {"name": "DeepSeek概念股", "change_pct": -0.02}]}, {"code": "002578", "name": "闽发铝业", "hot_rank": 51, "hot_rank_chg": 72, "stock_cnt": 5836, "price": "4.31", "change": "4.36", "market_id": "33", "circulate_market_value": "3711610600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": -0.78}, {"name": "一带一路", "change_pct": -0.47}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "福建自贸/海西概念", "change_pct": -0.56}, {"name": "光伏", "change_pct": 0.0}, {"name": "有色金属", "change_pct": -1.01}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "新能源车零部件", "change_pct": 1.01}, {"name": "自贸区", "change_pct": -0.58}, {"name": "液冷服务器", "change_pct": 1.06}]}, {"code": "603466", "name": "风语筑", "hot_rank": 52, "hot_rank_chg": -22, "stock_cnt": 5836, "price": "15.12", "change": "-2.39", "market_id": "17", "circulate_market_value": "8993859300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 53, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "30.71", "change": "-4.03", "market_id": "33", "circulate_market_value": "7486626300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 54, "hot_rank_chg": 18, "stock_cnt": 5836, "price": "50.78", "change": "-2.91", "market_id": "33", "circulate_market_value": "36827513000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 55, "hot_rank_chg": -28, "stock_cnt": 5836, "price": "212.50", "change": "-0.98", "market_id": "17", "circulate_market_value": "142527640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 56, "hot_rank_chg": 10, "stock_cnt": 5836, "price": "10.56", "change": "10.00", "market_id": "33", "circulate_market_value": "5982010700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "石墨烯", "change_pct": 0.05}, {"name": "军民融合", "change_pct": 0.37}, {"name": "物联网", "change_pct": 0.7}, {"name": "LED", "change_pct": 0.34}, {"name": "军工", "change_pct": 0.44}, {"name": "智慧灯杆", "change_pct": 0.16}, {"name": "海洋经济", "change_pct": -0.27}]}, {"code": "002584", "name": "西陇科学", "hot_rank": 57, "hot_rank_chg": -5, "stock_cnt": 5836, "price": "8.62", "change": "1.41", "market_id": "33", "circulate_market_value": "4147421100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": -0.81}, {"name": "医疗器械", "change_pct": -0.65}, {"name": "锂电池", "change_pct": -0.26}, {"name": "基因测序", "change_pct": -0.61}, {"name": "PCB板", "change_pct": 0.11}, {"name": "医药", "change_pct": -1.17}, {"name": "新能源汽车", "change_pct": 0.18}, {"name": "化学原料药", "change_pct": -1.27}, {"name": "食品安全", "change_pct": -0.39}, {"name": "辅助生殖", "change_pct": -1.4}, {"name": "光刻机（胶）", "change_pct": 1.07}, {"name": "异丙醇", "change_pct": -0.62}, {"name": "新冠病毒防治", "change_pct": -0.85}, {"name": "磷酸铁锂", "change_pct": -0.38}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 58, "hot_rank_chg": -10, "stock_cnt": 5836, "price": "12.00", "change": "1.70", "market_id": "17", "circulate_market_value": "12538654200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.43}, {"name": "上海国企改革", "change_pct": -0.58}, {"name": "独角兽", "change_pct": 0.85}, {"name": "传媒", "change_pct": -0.05}, {"name": "国企改革", "change_pct": -0.76}]}, {"code": "002156", "name": "通富微电", "hot_rank": 59, "hot_rank_chg": -18, "stock_cnt": 5836, "price": "39.34", "change": "-2.04", "market_id": "33", "circulate_market_value": "59696570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 60, "hot_rank_chg": -15, "stock_cnt": 5836, "price": "227.37", "change": "-0.01", "market_id": "33", "circulate_market_value": "968736510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 61, "hot_rank_chg": -22, "stock_cnt": 5836, "price": "23.21", "change": "-4.33", "market_id": "17", "circulate_market_value": "478167620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688347", "name": "华虹宏力", "hot_rank": 62, "hot_rank_chg": 47, "stock_cnt": 5836, "price": "209.39", "change": "10.36", "market_id": "17", "circulate_market_value": "85378773000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 63, "hot_rank_chg": 24, "stock_cnt": 5836, "price": "26.71", "change": "-0.60", "market_id": "17", "circulate_market_value": "106081090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 64, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "4.42", "change": "-1.12", "market_id": "33", "circulate_market_value": "155479250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.45}, {"name": "手机产业链", "change_pct": 1.57}, {"name": "超高清视频", "change_pct": 0.52}, {"name": "苹果产业链", "change_pct": 1.7}, {"name": "电竞", "change_pct": -0.27}, {"name": "半导体", "change_pct": 0.79}, {"name": "人工智能", "change_pct": 0.19}, {"name": "互联网医疗", "change_pct": -0.96}, {"name": "VR&AR", "change_pct": 1.11}, {"name": "OLED", "change_pct": 0.95}, {"name": "京津冀", "change_pct": -0.9}, {"name": "物联网", "change_pct": 0.7}, {"name": "指纹识别", "change_pct": 0.8}, {"name": "汽车零部件", "change_pct": 1.11}, {"name": "白马股", "change_pct": -0.29}, {"name": "智能制造", "change_pct": 0.6}, {"name": "小米概念股", "change_pct": 1.19}, {"name": "国产芯片", "change_pct": 0.93}, {"name": "液晶面板/LCD", "change_pct": 0.33}, {"name": "全息概念", "change_pct": 0.26}, {"name": "理想汽车概念股", "change_pct": 1.17}, {"name": "MicroLED", "change_pct": 0.31}, {"name": "钙钛矿电池", "change_pct": 0.01}, {"name": "智能手表", "change_pct": 1.67}, {"name": "MiniLED", "change_pct": 0.98}, {"name": "传感器", "change_pct": 1.09}, {"name": "大硅片", "change_pct": 0.24}, {"name": "AI PC", "change_pct": 1.46}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "回购", "change_pct": 0.0}, {"name": "光电共封装CPO", "change_pct": 0.42}, {"name": "智能眼镜/MR头显", "change_pct": 1.38}, {"name": "玻璃基板封装", "change_pct": -0.06}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 65, "hot_rank_chg": 20, "stock_cnt": 5836, "price": "14.90", "change": "4.20", "market_id": "33", "circulate_market_value": "2643379200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 66, "hot_rank_chg": 67, "stock_cnt": 5836, "price": "58.65", "change": "3.11", "market_id": "17", "circulate_market_value": "57600480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 67, "hot_rank_chg": 61, "stock_cnt": 5836, "price": "27.92", "change": "-0.89", "market_id": "17", "circulate_market_value": "25983187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 68, "hot_rank_chg": -24, "stock_cnt": 5836, "price": "11.50", "change": "1.23", "market_id": "33", "circulate_market_value": "39996198000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.01}, {"name": "人工智能", "change_pct": 0.19}, {"name": "VR&AR", "change_pct": 1.11}, {"name": "直播/短视频", "change_pct": 0.71}, {"name": "大数据", "change_pct": -0.15}, {"name": "教育", "change_pct": -0.1}, {"name": "百度概念股", "change_pct": 0.71}, {"name": "阿里巴巴概念股", "change_pct": 0.33}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "传媒", "change_pct": -0.05}, {"name": "快手概念股", "change_pct": 1.15}, {"name": "NFT", "change_pct": 0.42}, {"name": "元宇宙", "change_pct": 0.6}, {"name": "虚拟数字人", "change_pct": 0.48}, {"name": "web3.0", "change_pct": 0.01}, {"name": "AIGC概念", "change_pct": 0.35}, {"name": "字节跳动概念股", "change_pct": 0.78}, {"name": "职业教育", "change_pct": -0.04}, {"name": "云游戏", "change_pct": -0.05}, {"name": "网红/MCN", "change_pct": 0.64}, {"name": "5G消息/RCS", "change_pct": -0.33}, {"name": "AI营销", "change_pct": 0.38}, {"name": "词元概念/Token", "change_pct": 0.1}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "AI大模型/智能体", "change_pct": -0.26}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "AI视频", "change_pct": 0.27}, {"name": "智谱AI", "change_pct": 0.27}, {"name": "小红书概念股", "change_pct": 1.41}, {"name": "区块链", "change_pct": -0.06}]}, {"code": "300324", "name": "旋极信息", "hot_rank": 69, "hot_rank_chg": 28, "stock_cnt": 5836, "price": "4.77", "change": "6.24", "market_id": "33", "circulate_market_value": "8156620600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": -0.06}, {"name": "数字孪生", "change_pct": 0.9}, {"name": "半导体", "change_pct": 0.79}, {"name": "国产软件", "change_pct": -0.09}, {"name": "人工智能", "change_pct": 0.19}, {"name": "网络安全", "change_pct": -0.31}, {"name": "云计算数据中心", "change_pct": 0.34}, {"name": "大飞机", "change_pct": 0.65}, {"name": "北斗导航", "change_pct": 0.87}, {"name": "军民融合", "change_pct": 0.37}, {"name": "京津冀", "change_pct": -0.9}, {"name": "物联网", "change_pct": 0.7}, {"name": "大数据", "change_pct": -0.15}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "电子发票", "change_pct": -0.57}, {"name": "军工", "change_pct": 0.44}, {"name": "无人机", "change_pct": 0.79}, {"name": "智能制造", "change_pct": 0.6}, {"name": "工业互联网", "change_pct": 0.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.09}, {"name": "国产芯片", "change_pct": 0.93}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "信创", "change_pct": -0.25}, {"name": "BIPV概念", "change_pct": -0.63}, {"name": "航天", "change_pct": 0.52}, {"name": "数字人民币", "change_pct": -0.35}, {"name": "智慧政务", "change_pct": -0.06}, {"name": "医疗信息化", "change_pct": -0.52}, {"name": "云游戏", "change_pct": -0.05}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "物理AI", "change_pct": 1.29}, {"name": "时空大数据", "change_pct": 0.75}, {"name": "AI算力芯片", "change_pct": 1.37}, {"name": "军工信息化", "change_pct": 0.59}, {"name": "财税改革", "change_pct": -0.26}, {"name": "区块链", "change_pct": -0.06}]}, {"code": "001309", "name": "德明利", "hot_rank": 70, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "168.66", "change": "-2.50", "market_id": "33", "circulate_market_value": "39199635000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 71, "hot_rank_chg": 51, "stock_cnt": 5836, "price": "13.12", "change": "3.06", "market_id": "17", "circulate_market_value": "10329066400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 72, "hot_rank_chg": 6, "stock_cnt": 5836, "price": "6.91", "change": "4.22", "market_id": "33", "circulate_market_value": "5028858900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": -0.12}, {"name": "装配式建筑", "change_pct": -0.19}, {"name": "风电", "change_pct": -0.35}, {"name": "环氧丙烷", "change_pct": -0.78}, {"name": "乡村振兴", "change_pct": -0.69}, {"name": "建筑节能", "change_pct": -0.44}, {"name": "旧改", "change_pct": -0.49}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 73, "hot_rank_chg": 9, "stock_cnt": 5836, "price": "64.27", "change": "-2.53", "market_id": "33", "circulate_market_value": "41968792000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 74, "hot_rank_chg": 77, "stock_cnt": 5836, "price": "11.60", "change": "-0.34", "market_id": "17", "circulate_market_value": "24261889000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -0.7}, {"name": "半导体", "change_pct": 0.79}, {"name": "光伏", "change_pct": 0.0}, {"name": "风电", "change_pct": -0.35}, {"name": "江苏国企改革", "change_pct": -0.89}, {"name": "国产芯片", "change_pct": 0.93}, {"name": "BIPV概念", "change_pct": -0.63}, {"name": "内存", "change_pct": -0.16}, {"name": "国企改革", "change_pct": -0.76}, {"name": "闪存", "change_pct": 0.47}, {"name": "中芯国际概念股", "change_pct": 0.54}]}, {"code": "688256", "name": "寒武纪", "hot_rank": 75, "hot_rank_chg": -2, "stock_cnt": 5836, "price": "970.00", "change": "6.03", "market_id": "17", "circulate_market_value": "609988390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002425", "name": "凯撒文化", "hot_rank": 76, "hot_rank_chg": 12, "stock_cnt": 5836, "price": "3.52", "change": "2.03", "market_id": "33", "circulate_market_value": "3239054400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.14}, {"name": "ST摘帽", "change_pct": 0.42}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "人工智能", "change_pct": 0.19}, {"name": "VR&AR", "change_pct": 1.11}, {"name": "游戏", "change_pct": -0.01}, {"name": "动漫", "change_pct": -0.02}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "快手概念股", "change_pct": 1.15}, {"name": "NFT", "change_pct": 0.42}, {"name": "元宇宙", "change_pct": 0.6}, {"name": "虚拟数字人", "change_pct": 0.48}, {"name": "字节跳动概念股", "change_pct": 0.78}, {"name": "云游戏", "change_pct": -0.05}, {"name": "华为产业链", "change_pct": 0.28}, {"name": "IP经济/谷子经济", "change_pct": 0.35}]}, {"code": "002261", "name": "拓维信息", "hot_rank": 77, "hot_rank_chg": 17, "stock_cnt": 5836, "price": "19.90", "change": "-0.55", "market_id": "33", "circulate_market_value": "22807499000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 78, "hot_rank_chg": -1, "stock_cnt": 5836, "price": "14.38", "change": "-3.88", "market_id": "33", "circulate_market_value": "11175245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002548", "name": "金新农", "hot_rank": 79, "hot_rank_chg": 47, "stock_cnt": 5836, "price": "4.55", "change": "9.90", "market_id": "33", "circulate_market_value": "3660345300.00", "change_type": "1", "change_section": "8", "change_days": "5", "change_reason": "生猪养殖", "xgb_concepts": [{"name": "饲料", "change_pct": -0.33}, {"name": "养猪", "change_pct": 0.18}, {"name": "强势人气股", "change_pct": 2.59}, {"name": "大农业", "change_pct": -0.36}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 80, "hot_rank_chg": -12, "stock_cnt": 5836, "price": "5.40", "change": "5.26", "market_id": "33", "circulate_market_value": "4131759900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -1.24}, {"name": "优化生育（三孩）", "change_pct": -0.16}, {"name": "医药商业", "change_pct": -1.26}, {"name": "保健品", "change_pct": -0.76}, {"name": "民营医院", "change_pct": -0.71}, {"name": "医药", "change_pct": -1.17}, {"name": "食品", "change_pct": -0.4}, {"name": "辅助生殖", "change_pct": -1.4}, {"name": "口腔", "change_pct": -0.86}, {"name": "医美", "change_pct": -1.03}, {"name": "新冠病毒防治", "change_pct": -0.85}]}, {"code": "688981", "name": "中芯国际", "hot_rank": 81, "hot_rank_chg": -46, "stock_cnt": 5836, "price": "126.51", "change": "4.04", "market_id": "17", "circulate_market_value": "253095140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603667", "name": "五洲新春", "hot_rank": 82, "hot_rank_chg": 49, "stock_cnt": 5836, "price": "48.63", "change": "6.27", "market_id": "17", "circulate_market_value": "18632678000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 83, "hot_rank_chg": 35, "stock_cnt": 5836, "price": "42.08", "change": "-5.46", "market_id": "17", "circulate_market_value": "6014504100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 84, "hot_rank_chg": 33, "stock_cnt": 5836, "price": "34.16", "change": "5.04", "market_id": "17", "circulate_market_value": "15310512000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 85, "hot_rank_chg": -45, "stock_cnt": 5836, "price": "207.49", "change": "2.27", "market_id": "17", "circulate_market_value": "87840632000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 86, "hot_rank_chg": 4, "stock_cnt": 5836, "price": "23.09", "change": "10.01", "market_id": "33", "circulate_market_value": "11767364800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人关节"}, {"code": "603799", "name": "华友钴业", "hot_rank": 87, "hot_rank_chg": 108, "stock_cnt": 5836, "price": "31.60", "change": "5.72", "market_id": "17", "circulate_market_value": "59648387000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 88, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "27.24", "change": "2.10", "market_id": "33", "circulate_market_value": "21366131000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601689", "name": "拓普集团", "hot_rank": 89, "hot_rank_chg": -9, "stock_cnt": 5836, "price": "54.31", "change": "2.63", "market_id": "17", "circulate_market_value": "94381850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 90, "hot_rank_chg": 1, "stock_cnt": 5836, "price": "25.10", "change": "0.64", "market_id": "17", "circulate_market_value": "11016310600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600619", "name": "海立股份", "hot_rank": 91, "hot_rank_chg": 29, "stock_cnt": 5836, "price": "15.07", "change": "5.02", "market_id": "17", "circulate_market_value": "11892864200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 92, "hot_rank_chg": 9, "stock_cnt": 5836, "price": "19.73", "change": "9.98", "market_id": "33", "circulate_market_value": "9465963600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人形机器人"}, {"code": "600127", "name": "金健米业", "hot_rank": 93, "hot_rank_chg": 2, "stock_cnt": 5836, "price": "8.53", "change": "-1.39", "market_id": "17", "circulate_market_value": "5474410800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.64}, {"name": "农业种植", "change_pct": -0.15}, {"name": "湖南国企改革", "change_pct": -0.89}, {"name": "乡村振兴", "change_pct": -0.69}, {"name": "休闲食品", "change_pct": 0.33}, {"name": "食品", "change_pct": -0.4}, {"name": "食品安全", "change_pct": -0.39}, {"name": "社区团购", "change_pct": -0.54}, {"name": "大农业", "change_pct": -0.36}, {"name": "预制菜", "change_pct": -0.18}, {"name": "人造肉", "change_pct": 0.16}, {"name": "国企改革", "change_pct": -0.76}]}, {"code": "603960", "name": "克来机电", "hot_rank": 94, "hot_rank_chg": -11, "stock_cnt": 5836, "price": "16.91", "change": "10.02", "market_id": "17", "circulate_market_value": "4433766500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "工业机器人"}, {"code": "002354", "name": "天娱数科", "hot_rank": 95, "hot_rank_chg": 4, "stock_cnt": 5836, "price": "6.82", "change": "0.59", "market_id": "33", "circulate_market_value": "11096097600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.01}, {"name": "电竞", "change_pct": -0.27}, {"name": "手游", "change_pct": -0.14}, {"name": "人工智能", "change_pct": 0.19}, {"name": "游戏", "change_pct": -0.01}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.09}, {"name": "腾讯概念股", "change_pct": 0.29}, {"name": "传媒", "change_pct": -0.05}, {"name": "快手概念股", "change_pct": 1.15}, {"name": "元宇宙", "change_pct": 0.6}, {"name": "虚拟数字人", "change_pct": 0.48}, {"name": "东数西算/算力", "change_pct": 0.04}, {"name": "web3.0", "change_pct": 0.01}, {"name": "AIGC概念", "change_pct": 0.35}, {"name": "数据要素", "change_pct": -0.25}, {"name": "字节跳动概念股", "change_pct": 0.78}, {"name": "AI营销", "change_pct": 0.38}, {"name": "ChatGPT", "change_pct": 0.25}, {"name": "智能眼镜/MR头显", "change_pct": 1.38}, {"name": "AI大模型/智能体", "change_pct": -0.26}, {"name": "人形机器人", "change_pct": 1.88}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "多模态", "change_pct": 0.68}, {"name": "AI视频", "change_pct": 0.27}, {"name": "IP经济/谷子经济", "change_pct": 0.35}, {"name": "微信小店", "change_pct": 0.83}, {"name": "小红书概念股", "change_pct": 1.41}]}, {"code": "603278", "name": "大业股份", "hot_rank": 96, "hot_rank_chg": 6, "stock_cnt": 5836, "price": "11.85", "change": "1.54", "market_id": "17", "circulate_market_value": "4049848800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "轮胎", "change_pct": -1.04}, {"name": "风电", "change_pct": -0.35}, {"name": "航天", "change_pct": 0.52}, {"name": "人形机器人", "change_pct": 1.88}]}, {"code": "000700", "name": "模塑科技", "hot_rank": 97, "hot_rank_chg": 127, "stock_cnt": 5836, "price": "15.73", "change": "9.09", "market_id": "33", "circulate_market_value": "14440382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 98, "hot_rank_chg": -27, "stock_cnt": 5836, "price": "23.30", "change": "-0.56", "market_id": "33", "circulate_market_value": "15403296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 99, "hot_rank_chg": 47, "stock_cnt": 5836, "price": "8.24", "change": "1.85", "market_id": "33", "circulate_market_value": "8734030600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -0.56}, {"name": "电子烟", "change_pct": 0.85}, {"name": "一带一路", "change_pct": -0.47}, {"name": "造纸", "change_pct": -0.61}, {"name": "包装印刷", "change_pct": -0.05}, {"name": "卫星互联网", "change_pct": 0.74}, {"name": "太空算力", "change_pct": 0.25}]}, {"code": "002931", "name": "锋龙股份", "hot_rank": 100, "hot_rank_chg": 5, "stock_cnt": 5836, "price": "46.71", "change": "10.01", "market_id": "33", "circulate_market_value": "9462318300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "机器人关节"}];
const LIMIT_UP_POOL = [{"code": "601599", "name": "浙文影业", "price": 4.02, "change_pct": 10.14, "reason": "公司出品的文旅微短剧《九龙湖之有间客栈》已于2025年度播出，竖屏微短剧《江南机动队》杀青待播，并将继续布局微短剧业务矩阵", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 18.43, "first_limit_up": 1795483855, "break_limit_up_times": 7}, {"code": "301575", "name": "艾芬达", "price": 34.42, "change_pct": 20.01, "reason": "公司控股子公司浙江云芯机器人技术有限公司开展机器人精密金属结构件的研发、生产及销售，相关业务订单稳步推进", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 12.06, "first_limit_up": 1795483800, "break_limit_up_times": 0}, {"code": "002086", "name": "东方海洋", "price": 4.54, "change_pct": 9.93, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 35.23, "first_limit_up": 1795484751, "break_limit_up_times": 10}, {"code": "002348", "name": "高乐股份", "price": 8.67, "change_pct": 10.03, "reason": "公司再签31.95亿元算力大单", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 6.18, "first_limit_up": 1795485006, "break_limit_up_times": 2}, {"code": "002685", "name": "华东重机", "price": 8.95, "change_pct": 9.95, "reason": "1、公司拟收购锐信图芯股权并增资，交易完成后，公司持有锐信图芯43.18%股权，锐信图芯主营业务为GPU芯片及解决方案；\n2、全资子公司润星科技主要产品包括中高档数控机床、工业机器人、以及自动化交钥匙工程等", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 49.15, "first_limit_up": 1795496913, "break_limit_up_times": 10}, {"code": "300205", "name": "*ST天喻", "price": 3.55, "change_pct": 19.93, "reason": "法院裁定原控股股东武汉同喻5355万股以股抵债，公司变更为无实际控制人", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.78, "first_limit_up": 1795503252, "break_limit_up_times": 0}, {"code": "002122", "name": "汇洲智能", "price": 3.26, "change_pct": 10.14, "reason": "公司股票11月23日起撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 2, "turnover_ratio": 0.71, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "001358", "name": "兴欣新材", "price": 31.77, "change_pct": 10.01, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 34.9, "first_limit_up": 1795497060, "break_limit_up_times": 6}, {"code": "603021", "name": "*ST华鹏", "price": 3.52, "change_pct": 10.0, "reason": "公司前三季度营业收入约2.74亿元，净利润亏损约1.17亿元", "plates": ["ST股"], "limit_up_days": 2, "turnover_ratio": 2.06, "first_limit_up": 1795484716, "break_limit_up_times": 1}, {"code": "002856", "name": "*ST美芝", "price": 15.64, "change_pct": 9.99, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.02, "first_limit_up": 1795499106, "break_limit_up_times": 4}, {"code": "300703", "name": "创源股份", "price": 14.83, "change_pct": 19.98, "reason": "公司拟收购酷乐潮玩旗下新设子公司90%股权，切入线下零售赛道", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 6.54, "first_limit_up": 1795483800, "break_limit_up_times": 0}, {"code": "605222", "name": "起帆电缆", "price": 19.4, "change_pct": 9.98, "reason": "1、公司人形机器人用电缆已开展3D动态扭转、反复曲挠、拖链试验等疲劳试验，寿命达8000多万次，远超用户使用预期；\n2、公司产品成功应用于 FAST 望远镜工程、C919大飞机工程、太原卫星发射中心、上海轨道交通等重点工程中；\n3、公司可用于核电领域的产品有核电站用防火电力及信号组合电缆、核电站用铝合金导体组合电缆等系列，风电领域有风电用橡皮绝缘系列耐寒耐扭曲等电缆产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.26, "first_limit_up": 1795484114, "break_limit_up_times": 1}, {"code": "603266", "name": "天龙股份", "price": 14.75, "change_pct": 9.99, "reason": "1、公司已在汽车刹车系统试制中应用PEEK材料，并认为轻量化是人形机器人重要方向，正积极寻求与Tier1客户合作机会；\n2、公司供应给汽车无人驾驶领域的复杂嵌件注塑精密组件，主要配套于雷达、传感器及电控系统等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.93, "first_limit_up": 1795499251, "break_limit_up_times": 0}, {"code": "002548", "name": "金新农", "price": 4.55, "change_pct": 9.9, "reason": "公司以“自繁自养”模式中种猪繁育为主，生猪产品主要包括种猪、仔猪和育肥猪", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 9.75, "first_limit_up": 1795483911, "break_limit_up_times": 0}, {"code": "603206", "name": "嘉环科技", "price": 14.42, "change_pct": 9.99, "reason": "公司主营业务涉及IDC数据中心设备建设及运维服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 3.27, "first_limit_up": 1795487235, "break_limit_up_times": 0}, {"code": "603956", "name": "威派格", "price": 6.25, "change_pct": 10.04, "reason": "1、公司联合研发的工业四足机器人巡检方案已亮相中国城镇供水排水协会年会，搭载自研水务检测装置，可监测跑冒滴漏、有毒有害气体等九类场景，并已在绥滨县北山水厂项目实现数字孪生及大屏数字人智能体落地；\n2、公司近期发布了面向数据中心液冷领域的WDS、WDM系列立式多级离心泵等新品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.88, "first_limit_up": 1795483857, "break_limit_up_times": 0}, {"code": "002872", "name": "天圣制药", "price": 6.45, "change_pct": 10.07, "reason": "公司撤销撤销其他风险警示", "plates": ["ST摘帽"], "limit_up_days": 1, "turnover_ratio": 4.57, "first_limit_up": 1795483818, "break_limit_up_times": 0}, {"code": "002651", "name": "利君股份", "price": 7.18, "change_pct": 9.95, "reason": "1、子公司利君环际从事智能装备制造、工业机器人制造，已储备相关核心技术，部分产品正推动工业落地应用；\n2、全资子公司成都德坤航空设备制造有限公司主营航空航天零部件制造业务，德坤航空参与的长征系列火箭产品及朱雀系列火箭产品应用于商业航天领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.26, "first_limit_up": 1795486554, "break_limit_up_times": 2}, {"code": "600180", "name": "*ST瑞茂", "price": 0.55, "change_pct": 10.0, "reason": "大宗能源商品供应链综合服务商，煤炭供应链业务是公司核心业务板块。", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.21, "first_limit_up": 1795502823, "break_limit_up_times": 1}, {"code": "603608", "name": "天创股份", "price": 15.24, "change_pct": 10.04, "reason": "公司控股股东安徽先睿为轴承企业慈兴集团全资子公司，核心业务为机器人轴承与商业航天轴承两大板块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.37, "first_limit_up": 1795488115, "break_limit_up_times": 0}, {"code": "002931", "name": "锋龙股份", "price": 46.71, "change_pct": 10.01, "reason": "优必选受让控股股东所持29.99%股份", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.55, "first_limit_up": 1795483500, "break_limit_up_times": 1}, {"code": "600530", "name": "ST交昂", "price": 6.16, "change_pct": 10.0, "reason": "1、公司运营6家营利性护理院/医院，为8家非营利性老年医疗护理机构输出管理咨询服务，总运营床位数近4000张，项目遍布江浙沪近10个城市；\n2、公司昂立益生菌卫生巾系列由演员佟丽娅代言，产品特别添加了昂立自有的4株复配菌株和2种益生元", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.63, "first_limit_up": 1795496775, "break_limit_up_times": 0}, {"code": "603360", "name": "百傲化学", "price": 9.6, "change_pct": 9.97, "reason": "全资子公司芯傲华拟以7亿元增资苏州芯慧联半导体科技有限公司，后者主营业务为涂胶显影机、光刻机等黄光制程设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.64, "first_limit_up": 1795485811, "break_limit_up_times": 0}, {"code": "002579", "name": "中京电子", "price": 16.2, "change_pct": 9.98, "reason": "公司系国内少数兼具刚柔印制电路板批量生产与较强研发能力的PCB制造商，部分产品有直接或间接配套人形机器人的研发、生产等", "plates": ["PCB板"], "limit_up_days": 4, "turnover_ratio": 8.81, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "002164", "name": "宁波东力", "price": 19.73, "change_pct": 9.98, "reason": "公司重点布局谐波减速器与精密行星减速器，相关产品已实现批量试样及供货，配套业务进入产业化落地推进阶段", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 0.53, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "300539", "name": "横河精密", "price": 22.58, "change_pct": 19.98, "reason": "公司产品包括应用于扫地机器人的高精度齿轮箱及驱动系统", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 23.33, "first_limit_up": 1795485516, "break_limit_up_times": 4}, {"code": "001229", "name": "魅视科技", "price": 30.48, "change_pct": 10.0, "reason": "1、公司获最高11.64亿元算力服务订单，同步锁定不超7.34亿元算力采购；\n2、公司磷化铟半导体材料研发实验室20台工艺验证设备已到位，项目按既定进度推进，常规试验周期预计在三个月以内；\n3、公司AI边缘智能分析平台深度融合边缘计算与CV视觉分析技术，可对存量摄像头进行AI赋能，打造“事前预警-事中干预-事后追溯”的全流程闭环监管体系", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 1.1, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "603960", "name": "克来机电", "price": 16.91, "change_pct": 10.02, "reason": "1、公司将柔性自动化装备与机器人系统应用于新能源汽车电驱、电控、功率半导体模组及汽车内饰安全件等领域；\n2、公司在光通讯领域研发的自动化组装测试装备已供货至光通讯器件生产商Finisar", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 0.59, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "300338", "name": "*ST开元", "price": 1.96, "change_pct": 20.25, "reason": "公司预重整层报工作正在有序推进中，临时管理人已完成资产调查、债权审查、审计评估等基础工作", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 12.09, "first_limit_up": 1795499379, "break_limit_up_times": 1}, {"code": "002724", "name": "海洋王", "price": 10.56, "change_pct": 10.0, "reason": "公司是深海特种照明设备供应商，旗下专设军品事业部，销售舰艇用各类专业照明设备，产品应用于 “神六”“神七” 等航天项目，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 18.6, "first_limit_up": 1795498743, "break_limit_up_times": 1}, {"code": "605488", "name": "福莱新材", "price": 51.45, "change_pct": 10.01, "reason": "公司向全球灵巧手领军企业灵心巧手累计交付超3万套触觉传感器", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 6.62, "first_limit_up": 1795484029, "break_limit_up_times": 1}, {"code": "603516", "name": "淳中科技", "price": 49.92, "change_pct": 10.0, "reason": "1、公司发布“Coollights寒烁LDV4045芯片”“Zeus宙斯Zeus0108芯片”“Thor雷神ULC32A芯片”三款自研芯片，其中“Zeus宙斯Zeus0108芯片”为国产首颗自主可控的专业音视频处理ASIC芯片；\n2、公司与英伟达合作，对接的产品包括液冷测试平台、基于AI的检测平台、各种测试板卡等", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 1.09, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "301413", "name": "安培龙", "price": 89.71, "change_pct": 20.0, "reason": "公司机器人力传感器涵盖六维力、力矩、拉压力传感器等，部分客户已有批量订单并实现批量生产交付", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 24.12, "first_limit_up": 1795485180, "break_limit_up_times": 17}, {"code": "603626", "name": "科森科技", "price": 26.22, "change_pct": 9.98, "reason": "1、公司已承接机器人核心结构件及模组订单，系头部终端品牌一级供应商，部分产品已进入小批量试产；\n2、公司与清陶能源共同投资设立了合资公司——科森清陶能源科技有限公司，专注于固态电池的集成、组装和系统集成等业务", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.6, "first_limit_up": 1795483810, "break_limit_up_times": 0}, {"code": "603666", "name": "亿嘉和", "price": 27.9, "change_pct": 10.02, "reason": "公司与与华为云签约深入合作，公司将基于在电力、康养等场景深耕的产品能力积累，提供场景和产品设计制造等能力；华为云将提供平台化大小脑产品能力，并协同电力军团进行场景化方案规划设计，双方共同推动具身智能机器人产品在商业场景的落地", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.01, "first_limit_up": 1795483957, "break_limit_up_times": 0}, {"code": "603001", "name": "奥康国际", "price": 8.1, "change_pct": 10.05, "reason": "1、公司为定位中高端商务时尚的国内皮鞋龙头，控股股东及实控人拟8.17元/股协议转让12%股份；\n2、全资子公司奥港国际持有兰亭集势 10.86% 股权，而兰亭集势从事跨境电商业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.19, "first_limit_up": 1795483962, "break_limit_up_times": 0}, {"code": "688078", "name": "龙软科技", "price": 29.06, "change_pct": 19.98, "reason": "公司已成立矿山具身机器人研究团队，联合北京大学鄂尔多斯能源研究院、北京大学地球与空间科学学院共建机器人实验平台，面向矿山高危作业场景推进具身智能机器人落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 7.5, "first_limit_up": 1795484265, "break_limit_up_times": 3}, {"code": "603040", "name": "新坐标", "price": 36.39, "change_pct": 10.01, "reason": "公司为国内冷锻细分领域龙头，已完成多类行星滚柱丝杠开发，产品应用包括机器人线性执行关节，并配合客户进行定制化研发、迭代与送样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.94, "first_limit_up": 1795484012, "break_limit_up_times": 3}, {"code": "002242", "name": "九阳股份", "price": 35.05, "change_pct": 10.01, "reason": "国内小家电行业领导品牌、豆浆机龙头；公司持有深思考7.92%股权，其深耕类脑人工智能与多模态语义理解技术；公司通过全资子公司参股享刻智能，以财务性投资方式布局机器人相关领域，相关业务尚处于早期阶段", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 4.32, "first_limit_up": 1795483911, "break_limit_up_times": 1}, {"code": "600381", "name": "*ST春天", "price": 3.74, "change_pct": 10.0, "reason": "冬虫夏草产业化龙头企业", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.34, "first_limit_up": 1795486799, "break_limit_up_times": 5}, {"code": "002611", "name": "东方精工", "price": 13.37, "change_pct": 10.04, "reason": "1、公司参股的广东嘉腾机器人（ 参股19.8366% ）是英伟达生成式 AI 生态伙伴，其生成式 AI 在激光叉车上的应用被英伟达在 CES 展会上作为典型案例展示；\n2、公司投资了乐聚机器人，与乐聚机器人签署了《战略合作协议》，聚焦具身智能机器人方向，在人形机器人产品的生产制造及售后服务、开展人形机器人技能训练与应用探索、开拓机器人产品在多元领域的应用与市场等方面开展战略合作", "plates": ["机器人", "英伟达概念"], "limit_up_days": 1, "turnover_ratio": 8.95, "first_limit_up": 1795496433, "break_limit_up_times": 7}, {"code": "002387", "name": "维信诺", "price": 6.37, "change_pct": 10.02, "reason": "全球AMOLED显示产业的领军企业之一，通过MicroLED技术积极布局VR和AR等微小尺寸产品领域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 2.25, "first_limit_up": 1795502400, "break_limit_up_times": 1}, {"code": "600814", "name": "杭州解百", "price": 7.59, "change_pct": 10.0, "reason": "公司拥有解百购物广场，杭州大厦购物城，解百义乌店等，有望在免税政策开放背景下参与免税运营", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 3.77, "first_limit_up": 1795483825, "break_limit_up_times": 2}, {"code": "603926", "name": "铁流股份", "price": 16.34, "change_pct": 10.03, "reason": "公司空心电机轴处在客户产品开发阶段，子公司广东中配互联网科技公司在云计算、BI分析、智能机器人等方面已进行投入", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.7, "first_limit_up": 1795483951, "break_limit_up_times": 0}, {"code": "002708", "name": "光洋股份", "price": 23.09, "change_pct": 10.0, "reason": "1、公司拟10亿建设新能源汽车及机器人用精密零部件项目；\n2、公司已获得小鹏飞行汽车X3项目定点，完成A样交样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 0.85, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "603662", "name": "柯力传感", "price": 53.01, "change_pct": 10.0, "reason": "公司六维力传感器给华为送样", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 5.93, "first_limit_up": 1795484533, "break_limit_up_times": 79}, {"code": "001278", "name": "一彬科技", "price": 14.77, "change_pct": 9.98, "reason": "公司通过参股共青城民生创新智能投资合伙企业（有限合伙）间接投资法奥意威（苏州）机器人系统有限公司，持股比例为1.28%", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 2.35, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "300652", "name": "雷迪克", "price": 29.06, "change_pct": 19.98, "reason": "公司以约1.6亿元现金受让并增资上海傲意信息科技，完成后将持有其20.41%股权，傲意科技主营脑机接口与机器人核心部件，产品用于人形机器人等场景", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.7, "first_limit_up": 1795484901, "break_limit_up_times": 0}, {"code": "603359", "name": "*ST东珠", "price": 0.94, "change_pct": 10.59, "reason": "1、公司为迪洛斯战略股东，后者旗下具身机器人亮相，一款约20个自由度的陪伴类机器人；\n2、公司拟跨界并购凯睿星通，标的主要产品包括卫星通信基带产品、卫星通信终端产品、卫星通信网络管理系统及卫星应用系统等", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1795500396, "break_limit_up_times": 1}, {"code": "002036", "name": "联创电子", "price": 5.36, "change_pct": 10.06, "reason": "1、在车载ADAS镜头和影像模组方面，公司保持与Nvidia、特斯拉等国际知名高级汽车辅助安全驾驶方案公司的深度合作；\n2、公司已成为国内外客户机器人项目光学镜头和影像模组的供应商，并战略发展机器视觉产业，高清广角镜头及影像模组在运动相机、无人机、警用监控等领域持续扩大优势；\n3、公司具备供应AI眼镜相关核心光学部件的能力，已有AR、VR、MR产品出货并产生营业收入；\n4、公司的微棱镜、模造玻璃透镜阵列、硅透镜阵列等光模块光学器件正在送样评测阶段", "plates": ["英伟达概念"], "limit_up_days": 2, "turnover_ratio": 0.8, "first_limit_up": 1795483500, "break_limit_up_times": 0}, {"code": "600818", "name": "ST中路", "price": 7.01, "change_pct": 10.05, "reason": "公司拟通过收购及增资方式持有Factor21.15%股权，后者主营高端公路自行车的生产和销售", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 1.7, "first_limit_up": 1795499668, "break_limit_up_times": 5}, {"code": "600715", "name": "文投控股", "price": 3.14, "change_pct": 10.18, "reason": "公司影院业务推行“一店一策”创新和“影院+”业态，探索VR观影提升非票房收入，五棵松旗舰店为全国单店票房冠军", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 32.77, "first_limit_up": 1795503256, "break_limit_up_times": 1}, {"code": "600400", "name": "红豆股份", "price": 3.62, "change_pct": 10.03, "reason": "公司主营业务为男装的生产与销售，近年来积极推进智能化转型，与宇树科技等企业合作探索“人形机器人”和“人工智能+”技术在服装产业的应用", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.94, "first_limit_up": 1795488007, "break_limit_up_times": 0}, {"code": "301189", "name": "奥尼电子", "price": 43.72, "change_pct": 20.01, "reason": "公司是英伟达NPN合作伙伴，公司部分产品运用英伟达的边缘计算平台以满足客户需求", "plates": ["英伟达概念"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1795484010, "break_limit_up_times": 0}, {"code": "603813", "name": "原尚股份", "price": 23.55, "change_pct": 10.0, "reason": "公司提供汽车零部件供应链物流服务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.29, "first_limit_up": 1795485634, "break_limit_up_times": 2}, {"code": "603725", "name": "天安新材", "price": 10.09, "change_pct": 10.03, "reason": "公司拟收购嘉万光62.5%股权，标的主营无源光器件及电信光缆、机箱等产品", "plates": ["光通信"], "limit_up_days": 1, "turnover_ratio": 10.5, "first_limit_up": 1795483981, "break_limit_up_times": 1}, {"code": "600261", "name": "阳光照明", "price": 4.85, "change_pct": 9.98, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 24.98, "first_limit_up": 1795502922, "break_limit_up_times": 2}, {"code": "002827", "name": "高争民爆", "price": 49.06, "change_pct": 10.0, "reason": "西藏民爆行业龙头；公司拟购买紫源铜业51%股权和晟源矿业100%股权", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1795496580, "break_limit_up_times": 0}, {"code": "301252", "name": "同星科技", "price": 42.48, "change_pct": 20.0, "reason": "1、公司布局人形机器人精密零部件及散热模组，精密零部件已实现批量稳定供货，散热模组已完成小批量交付；\n2、公司依托换热器领域长期技术积累布局液冷赛道，核心聚焦高效液冷换热设备的研发与生产，已有液冷散热产品成功应用于数据中心领域", "plates": ["机器人"], "limit_up_days": 2, "turnover_ratio": 7.01, "first_limit_up": 1795484799, "break_limit_up_times": 2}, {"code": "600189", "name": "泉阳泉", "price": 8.87, "change_pct": 10.05, "reason": "吉林省市场占有率第一的饮用水品牌，推出白桦树汁等产品", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.61, "first_limit_up": 1795484910, "break_limit_up_times": 3}, {"code": "603030", "name": "全筑股份", "price": 2.37, "change_pct": 10.23, "reason": "1、公司与华芯极光在上海合资成立华芯全筑，华芯全筑致力于极紫外光源核心精密测量设备的研发与制造，同时为传统化光源路径攻关以及创新型光源技术落地提供支撑；\n2、公司成立云阙智算苏州物联科技有限公司，基于分布式数字与AI原生服务平台，聚焦数据产生端，推动分布式边缘AI算力服务及应用，目前业务尚处于早期试点培育阶段；\n3、公司主营建筑装饰工程，表示研发智能建筑装饰施工机器人；\n", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 10.38, "first_limit_up": 1795485692, "break_limit_up_times": 0}, {"code": "600722", "name": "金牛化工", "price": 11.95, "change_pct": 10.04, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 18.8, "first_limit_up": 1795501571, "break_limit_up_times": 0}, {"code": "603103", "name": "横店影视", "price": 18.26, "change_pct": 10.0, "reason": "公司已建立专门团队负责短剧、微短剧业务，围绕短剧精品化开展布局，依托影视投资制作发行与放映体系切入短剧内容领域", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 2.32, "first_limit_up": 1795483884, "break_limit_up_times": 17}, {"code": "605018", "name": "长华集团", "price": 12.42, "change_pct": 10.01, "reason": "汽车金属零部件供应商；公司拓展人形机器人用行星滚柱丝杠，产品精度为C5级并向C3级提升，规划新生产线预计2026年三季度建成", "plates": ["机器人"], "limit_up_days": 3, "turnover_ratio": 1.06, "first_limit_up": 1795483500, "break_limit_up_times": 0}];
const RISK_STOCKS = {"920964": "[立案调查] [临时公告]润农节水:关于公司董事、常务副总经理被立案调查和留置的公告", "524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "000820": "[行政处罚事先告知书] 神雾节能：关于收到《行政处罚事先告知书》的公告", "300670": "[行政处罚事先告知书] 大烨智能：关于收到《行政处罚事先告知书》的公告", "688225": "[行政处罚事先告知书] 亚信集团：关于公司财务总监因非本公司事项收到行政处罚事先告知书暨辞去职务的公告", "300500": "[行政处罚事先告知书] 启迪设计：关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》的公告", "301030": "[行政处罚事先告知书] *ST仕净：关于收到《行政处罚事先告知书》的公告", "688033": "[行政处罚事先告知书] *ST天宜：关于公司收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的", "000892": "[行政处罚事先告知书] 欢瑞世纪：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920249": "[行政处罚事先告知书] [临时公告]利尔达:关于公司及相关当事人收到中国证券监督管理委员会浙江监管局行政", "000593": "[行政处罚事先告知书] 德龙汇能：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "002855": "[行政处罚事先告知书] 捷荣技术：关于收到《行政处罚事先告知书》的补充公告", "300169": "[行政处罚事先告知书] 天晟新材：关于收到《行政处罚事先告知书》的公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行"};