const UPDATE_TIME = "2026-08-25 05:27";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.96,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 2.8,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 1.77,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续277天上榜",
    "rankChg": 1,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "数字货币",
    "rise": 2.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": -1,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "转基因",
    "rise": 3.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "兵装重组概念",
    "rise": 3.29,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "黄金概念",
    "rise": -1.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "液冷服务器",
    "rise": 2.35,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "算力租赁",
    "rise": 1.71,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续141天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "光纤概念",
    "rise": 1.81,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 2,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "存储芯片",
    "rise": 0.41,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": 1.93,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": -1,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "PCB概念",
    "rise": 1.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "商业航天",
    "rise": 1.59,
    "rate": 0,
    "tag": "",
    "hotTag": "连续206天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.61,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续441天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": 1.14,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "CRO概念",
    "rise": 2.83,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "玉米",
    "rise": 2.71,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "跨境支付(CIPS)",
    "rise": 2.3,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "银行ETF",
    "code": "885966"
  },
  {
    "name": "猪肉",
    "rise": 1.61,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": -1,
    "etfName": "养殖ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金直线拉升，机构改口称金价将冲击5000美元",
    "desc": "",
    "heat": 438178,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "深中华A",
        "code": "000017",
        "chg": 9.974425
      }
    ]
  },
  {
    "title": "粮食板块爆发，交易的是情绪还是新一轮涨价周期？",
    "desc": "",
    "heat": 311496,
    "direction": "粮食",
    "themes": [
      "粮食概念",
      "玉米",
      "大豆",
      "转基因",
      "农业种植"
    ],
    "stocks": [
      {
        "name": "登海种业",
        "code": "002041",
        "chg": 10.009814
      }
    ]
  },
  {
    "title": "工信部：今年计划印发实施《关于加强时空信息终端供需适配 促进融合应用的行动计划》",
    "desc": "",
    "heat": 223253,
    "direction": "时空信息",
    "themes": [
      "时空信息"
    ],
    "stocks": [
      {
        "name": "合众思壮",
        "code": "002383",
        "chg": 4.747774
      }
    ]
  },
  {
    "title": "美公布多项针对伊朗经济制裁",
    "desc": "",
    "heat": 129866,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁"
    ],
    "stocks": [
      {
        "name": "春晖智控",
        "code": "300943",
        "chg": 10.126151
      }
    ]
  },
  {
    "title": "板块表现强势 煤炭重估进行时？",
    "desc": "",
    "heat": 67810,
    "direction": "煤炭开采",
    "themes": [
      "煤炭开采加工",
      "煤炭概念"
    ],
    "stocks": [
      {
        "name": "金能科技",
        "code": "603113",
        "chg": 10.040161
      }
    ]
  },
  {
    "title": "中信证券：预计AI驱动的本轮半导体设备上行周期将至少持续至2028年",
    "desc": "",
    "heat": 52189,
    "direction": "半导体设备",
    "themes": [
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "埃科光电",
        "code": "688610",
        "chg": 4.455621
      }
    ]
  },
  {
    "title": "算力金属”价格大涨 资源保障能力“加码",
    "desc": "",
    "heat": 565,
    "direction": "算力金属",
    "themes": [
      "金属钨",
      "金属钼",
      "金属铟",
      "金属铜",
      "金属锡",
      "金属锗",
      "金属镓",
      "金属锆"
    ],
    "stocks": [
      {
        "name": "华茂股份",
        "code": "000850",
        "chg": 3.317536
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "房产经纪",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+3.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+3.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+3.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "热泵",
    "change": "+3.16%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "液冷服务器",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+3.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RWA",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+2.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "耐火材料",
    "change": "+2.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+2.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 3,
    "hot_rank_chg": 7,
    "stock_cnt": 5787,
    "price": "9.15",
    "change": "8.16",
    "market_id": "17",
    "circulate_market_value": "5872316400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.93
      },
      {
        "name": "农业种植",
        "change_pct": 2.23
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.48
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "休闲食品",
        "change_pct": 1.8
      },
      {
        "name": "食品",
        "change_pct": 1.7
      },
      {
        "name": "食品安全",
        "change_pct": 1.69
      },
      {
        "name": "社区团购",
        "change_pct": 2.07
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "预制菜",
        "change_pct": 2.13
      },
      {
        "name": "人造肉",
        "change_pct": 2.48
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 6,
    "hot_rank_chg": 15,
    "stock_cnt": 5787,
    "price": "12.33",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "6138428900.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "中药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.04
      },
      {
        "name": "农业种植",
        "change_pct": 2.23
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "流感",
        "change_pct": 2.53
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 7,
    "hot_rank_chg": -3,
    "stock_cnt": 5787,
    "price": "10.81",
    "change": "-5.67",
    "market_id": "33",
    "circulate_market_value": "25105962000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -3.72
      },
      {
        "name": "有色 · 铜",
        "change_pct": -1.25
      },
      {
        "name": "有色 · 锑",
        "change_pct": -3.34
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.48
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.27
      },
      {
        "name": "有色金属",
        "change_pct": 0.07
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      },
      {
        "name": "白银",
        "change_pct": -4.22
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5787,
    "price": "9.90",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "4745267800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "医药商业",
        "change_pct": 2.54
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "流感",
        "change_pct": 2.53
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -7,
    "stock_cnt": 5787,
    "price": "8.19",
    "change": "-0.36",
    "market_id": "17",
    "circulate_market_value": "20626596000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.01
      },
      {
        "name": "工业大麻",
        "change_pct": 2.08
      },
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "保健品",
        "change_pct": 1.95
      },
      {
        "name": "民营医院",
        "change_pct": 1.97
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "化学原料药",
        "change_pct": 2.19
      },
      {
        "name": "流感",
        "change_pct": 2.53
      },
      {
        "name": "振兴东北",
        "change_pct": 1.59
      },
      {
        "name": "食品",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 13,
    "hot_rank_chg": 52,
    "stock_cnt": 5787,
    "price": "8.60",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3791068800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 2.34
      },
      {
        "name": "锂电池",
        "change_pct": 0.16
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "两轮车",
        "change_pct": 1.1
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.35
      }
    ]
  },
  {
    "code": "002176",
    "name": "江特电机",
    "hot_rank": 14,
    "hot_rank_chg": 389,
    "stock_cnt": 5787,
    "price": "9.50",
    "change": "3.83",
    "market_id": "33",
    "circulate_market_value": "16147726000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.36
      },
      {
        "name": "锂电池",
        "change_pct": 0.16
      },
      {
        "name": "大飞机",
        "change_pct": 1.55
      },
      {
        "name": "军民融合",
        "change_pct": 1.92
      },
      {
        "name": "风电",
        "change_pct": 1.13
      },
      {
        "name": "军工",
        "change_pct": 1.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "机器人",
        "change_pct": 1.91
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.87
      },
      {
        "name": "固态电池",
        "change_pct": -0.04
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 2.09
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": -1.73
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 20,
    "hot_rank_chg": 52,
    "stock_cnt": 5787,
    "price": "8.99",
    "change": "3.81",
    "market_id": "17",
    "circulate_market_value": "6371453100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 22,
    "hot_rank_chg": -7,
    "stock_cnt": 5787,
    "price": "5.78",
    "change": "0.52",
    "market_id": "33",
    "circulate_market_value": "204422040000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.86
      },
      {
        "name": "手机产业链",
        "change_pct": 2.05
      },
      {
        "name": "超高清视频",
        "change_pct": 1.81
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.57
      },
      {
        "name": "电竞",
        "change_pct": 1.99
      },
      {
        "name": "半导体",
        "change_pct": 0.29
      },
      {
        "name": "人工智能",
        "change_pct": 1.91
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.89
      },
      {
        "name": "VR&AR",
        "change_pct": 2.08
      },
      {
        "name": "OLED",
        "change_pct": 0.45
      },
      {
        "name": "京津冀",
        "change_pct": 1.9
      },
      {
        "name": "物联网",
        "change_pct": 1.92
      },
      {
        "name": "指纹识别",
        "change_pct": 1.93
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.01
      },
      {
        "name": "白马股",
        "change_pct": 0.5
      },
      {
        "name": "智能制造",
        "change_pct": 1.72
      },
      {
        "name": "小米概念股",
        "change_pct": 1.82
      },
      {
        "name": "国产芯片",
        "change_pct": 0.73
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.85
      },
      {
        "name": "全息概念",
        "change_pct": 1.83
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.01
      },
      {
        "name": "MicroLED",
        "change_pct": 1.82
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.51
      },
      {
        "name": "智能手表",
        "change_pct": 2.05
      },
      {
        "name": "MiniLED",
        "change_pct": 1.72
      },
      {
        "name": "传感器",
        "change_pct": 1.73
      },
      {
        "name": "大硅片",
        "change_pct": -1.27
      },
      {
        "name": "AI PC",
        "change_pct": 2.07
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "回购",
        "change_pct": 1.11
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 1.6
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.81
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 25,
    "hot_rank_chg": 58,
    "stock_cnt": 5787,
    "price": "4.71",
    "change": "6.08",
    "market_id": "33",
    "circulate_market_value": "3603812800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "股权转让",
        "change_pct": 1.36
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "医药商业",
        "change_pct": 2.54
      },
      {
        "name": "保健品",
        "change_pct": 1.95
      },
      {
        "name": "民营医院",
        "change_pct": 1.97
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "食品",
        "change_pct": 1.7
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.73
      },
      {
        "name": "口腔",
        "change_pct": 2.0
      },
      {
        "name": "医美",
        "change_pct": 2.63
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 28,
    "hot_rank_chg": 30,
    "stock_cnt": 5787,
    "price": "4.24",
    "change": "7.61",
    "market_id": "33",
    "circulate_market_value": "8904652300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "维生素",
        "change_pct": 2.93
      },
      {
        "name": "基因测序",
        "change_pct": 1.37
      },
      {
        "name": "民营医院",
        "change_pct": 1.97
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "化学原料药",
        "change_pct": 2.19
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.19
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 30,
    "hot_rank_chg": 57,
    "stock_cnt": 5787,
    "price": "6.14",
    "change": "5.14",
    "market_id": "33",
    "circulate_market_value": "5441577600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.23
      },
      {
        "name": "土地流转",
        "change_pct": 1.52
      },
      {
        "name": "海南概念",
        "change_pct": 2.02
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.64
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.16
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "水产养殖",
        "change_pct": 2.64
      },
      {
        "name": "自贸区",
        "change_pct": 1.69
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 35,
    "hot_rank_chg": -13,
    "stock_cnt": 5787,
    "price": "7.61",
    "change": "-1.30",
    "market_id": "17",
    "circulate_market_value": "8665943100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.52
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "光伏",
        "change_pct": 0.85
      },
      {
        "name": "特高压",
        "change_pct": 1.4
      },
      {
        "name": "智能电网",
        "change_pct": 1.64
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 43,
    "hot_rank_chg": -11,
    "stock_cnt": 5787,
    "price": "3.47",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "16210968000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 1.13
      },
      {
        "name": "体育产业",
        "change_pct": 1.7
      },
      {
        "name": "股权转让",
        "change_pct": 1.36
      },
      {
        "name": "房地产",
        "change_pct": 1.75
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.01
      },
      {
        "name": "京津冀",
        "change_pct": 1.9
      },
      {
        "name": "旅游",
        "change_pct": 2.22
      },
      {
        "name": "国产芯片",
        "change_pct": 0.73
      },
      {
        "name": "内存",
        "change_pct": 0.86
      },
      {
        "name": "闪存",
        "change_pct": 1.45
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.97
      }
    ]
  },
  {
    "code": "002445",
    "name": "中南文化",
    "hot_rank": 45,
    "hot_rank_chg": 78,
    "stock_cnt": 5787,
    "price": "3.71",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "8778803200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "重组",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": 1.34
      },
      {
        "name": "VR&AR",
        "change_pct": 2.08
      },
      {
        "name": "影视",
        "change_pct": 2.78
      },
      {
        "name": "光伏",
        "change_pct": 0.85
      },
      {
        "name": "复牌股",
        "change_pct": 1.24
      },
      {
        "name": "江苏国企改革",
        "change_pct": 1.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 2.51
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 46,
    "hot_rank_chg": -11,
    "stock_cnt": 5787,
    "price": "7.03",
    "change": "-3.70",
    "market_id": "17",
    "circulate_market_value": "16807411000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.07
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 47,
    "hot_rank_chg": -5,
    "stock_cnt": 5787,
    "price": "5.50",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "14543339000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.01
      },
      {
        "name": "装修装饰",
        "change_pct": 2.2
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.24
      },
      {
        "name": "航天",
        "change_pct": 1.83
      },
      {
        "name": "旧改",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 51,
    "hot_rank_chg": 10,
    "stock_cnt": 5787,
    "price": "7.99",
    "change": "-0.99",
    "market_id": "33",
    "circulate_market_value": "5813397700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 2.25
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.24
      },
      {
        "name": "风电",
        "change_pct": 1.13
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.28
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "建筑节能",
        "change_pct": 2.04
      },
      {
        "name": "旧改",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 54,
    "hot_rank_chg": 54,
    "stock_cnt": 5787,
    "price": "11.21",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "9864800000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "粮食概念",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.23
      },
      {
        "name": "转基因",
        "change_pct": 3.44
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "人造肉",
        "change_pct": 2.48
      },
      {
        "name": "大豆",
        "change_pct": 2.68
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 55,
    "hot_rank_chg": 49,
    "stock_cnt": 5787,
    "price": "6.84",
    "change": "2.86",
    "market_id": "17",
    "circulate_market_value": "7402238900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.06
      },
      {
        "name": "农业种植",
        "change_pct": 2.23
      },
      {
        "name": "化肥",
        "change_pct": 0.88
      },
      {
        "name": "转基因",
        "change_pct": 3.44
      },
      {
        "name": "土地流转",
        "change_pct": 1.52
      },
      {
        "name": "农垦",
        "change_pct": 1.76
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.1
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      },
      {
        "name": "大豆",
        "change_pct": 2.68
      }
    ]
  },
  {
    "code": "600508",
    "name": "上海能源",
    "hot_rank": 56,
    "hot_rank_chg": 113,
    "stock_cnt": 5787,
    "price": "10.87",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "10998322500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.07
      },
      {
        "name": "央企改革",
        "change_pct": 1.06
      },
      {
        "name": "破净股",
        "change_pct": 1.13
      },
      {
        "name": "超超临界发电",
        "change_pct": 1.16
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 61,
    "hot_rank_chg": -21,
    "stock_cnt": 5787,
    "price": "11.07",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "19208453000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.49
      },
      {
        "name": "核电",
        "change_pct": 1.57
      },
      {
        "name": "锂电池",
        "change_pct": 0.16
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 1.5
      },
      {
        "name": "PCB板",
        "change_pct": 1.58
      },
      {
        "name": "中科院系",
        "change_pct": 1.51
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.66
      },
      {
        "name": "固态电池",
        "change_pct": -0.04
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 0.69
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 62,
    "hot_rank_chg": 15,
    "stock_cnt": 5787,
    "price": "11.59",
    "change": "2.29",
    "market_id": "17",
    "circulate_market_value": "20736113000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.71
      },
      {
        "name": "纯碱",
        "change_pct": 0.33
      },
      {
        "name": "食品",
        "change_pct": 1.7
      },
      {
        "name": "土壤修复",
        "change_pct": 1.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.74
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.93
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.62
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 69,
    "hot_rank_chg": -33,
    "stock_cnt": 5787,
    "price": "11.20",
    "change": "2.01",
    "market_id": "17",
    "circulate_market_value": "4845944900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.36
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "光伏",
        "change_pct": 0.85
      },
      {
        "name": "无线耳机",
        "change_pct": 2.15
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.05
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 74,
    "hot_rank_chg": -33,
    "stock_cnt": 5787,
    "price": "12.15",
    "change": "-3.34",
    "market_id": "33",
    "circulate_market_value": "11339857500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.65
      },
      {
        "name": "新疆概念",
        "change_pct": 1.34
      },
      {
        "name": "光伏",
        "change_pct": 0.85
      },
      {
        "name": "风电",
        "change_pct": 1.13
      },
      {
        "name": "储能",
        "change_pct": 1.2
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      }
    ]
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 77,
    "hot_rank_chg": 12,
    "stock_cnt": 5787,
    "price": "5.22",
    "change": "-6.79",
    "market_id": "33",
    "circulate_market_value": "3920374200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.23
      },
      {
        "name": "创新药",
        "change_pct": 1.96
      },
      {
        "name": "养老产业",
        "change_pct": 1.92
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "化学原料药",
        "change_pct": 2.19
      },
      {
        "name": "口腔",
        "change_pct": 2.0
      }
    ]
  },
  {
    "code": "600984",
    "name": "建设机械",
    "hot_rank": 80,
    "hot_rank_chg": 846,
    "stock_cnt": 5787,
    "price": "4.94",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "6209797000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "重大重组",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.52
      },
      {
        "name": "机械",
        "change_pct": 1.63
      },
      {
        "name": "复牌股",
        "change_pct": 1.24
      },
      {
        "name": "国企改革",
        "change_pct": 1.27
      },
      {
        "name": "陕西国企改革",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 81,
    "hot_rank_chg": 156,
    "stock_cnt": 5787,
    "price": "4.35",
    "change": "10.13",
    "market_id": "33",
    "circulate_market_value": "2804159800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.52
      },
      {
        "name": "装修装饰",
        "change_pct": 2.2
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.24
      },
      {
        "name": "家具家居",
        "change_pct": 1.59
      },
      {
        "name": "复牌股",
        "change_pct": 1.24
      },
      {
        "name": "智能制造",
        "change_pct": 1.72
      },
      {
        "name": "3D打印",
        "change_pct": 1.63
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 3.17
      },
      {
        "name": "旧改",
        "change_pct": 1.92
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 88,
    "hot_rank_chg": -24,
    "stock_cnt": 5787,
    "price": "11.51",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "6902662100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.52
      },
      {
        "name": "金融科技",
        "change_pct": 2.49
      },
      {
        "name": "移动支付",
        "change_pct": 1.96
      },
      {
        "name": "物联网",
        "change_pct": 1.92
      },
      {
        "name": "数字经济",
        "change_pct": 2.01
      },
      {
        "name": "电子身份证",
        "change_pct": 2.29
      },
      {
        "name": "ETC",
        "change_pct": 1.6
      },
      {
        "name": "数字人民币",
        "change_pct": 2.42
      },
      {
        "name": "智慧政务",
        "change_pct": 2.13
      },
      {
        "name": "eSIM",
        "change_pct": 2.35
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "区块链",
        "change_pct": 2.24
      },
      {
        "name": "RWA",
        "change_pct": 2.87
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 89,
    "hot_rank_chg": -3,
    "stock_cnt": 5787,
    "price": "10.03",
    "change": "0.40",
    "market_id": "33",
    "circulate_market_value": "2853350500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.57
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.5
      },
      {
        "name": "强势人气股",
        "change_pct": 1.73
      },
      {
        "name": "教育",
        "change_pct": 1.91
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.03
      },
      {
        "name": "职业教育",
        "change_pct": 2.16
      },
      {
        "name": "在线教育",
        "change_pct": 1.95
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.41
      },
      {
        "name": "华为产业链",
        "change_pct": 2.03
      },
      {
        "name": "智谱AI",
        "change_pct": 2.27
      }
    ]
  },
  {
    "code": "000723",
    "name": "美锦能源",
    "hot_rank": 90,
    "hot_rank_chg": 17,
    "stock_cnt": 5787,
    "price": "3.89",
    "change": "0.00",
    "market_id": "33",
    "circulate_market_value": "17097235000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -0.07
      },
      {
        "name": "无人驾驶",
        "change_pct": 1.65
      },
      {
        "name": "新能源整车",
        "change_pct": 2.03
      },
      {
        "name": "重卡",
        "change_pct": 2.13
      },
      {
        "name": "天然气",
        "change_pct": 1.36
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 1.32
      },
      {
        "name": "汽车整车",
        "change_pct": 1.68
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.1
      },
      {
        "name": "机器人",
        "change_pct": 1.91
      },
      {
        "name": "煤化工",
        "change_pct": 0.39
      },
      {
        "name": "乙二醇",
        "change_pct": 0.81
      },
      {
        "name": "碳基材料",
        "change_pct": 0.88
      },
      {
        "name": "超级电容",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 92,
    "hot_rank_chg": -18,
    "stock_cnt": 5787,
    "price": "3.81",
    "change": "-3.54",
    "market_id": "17",
    "circulate_market_value": "4867655200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.05
      },
      {
        "name": "化肥",
        "change_pct": 0.88
      },
      {
        "name": "保健品",
        "change_pct": 1.95
      },
      {
        "name": "民营医院",
        "change_pct": 1.97
      },
      {
        "name": "医药",
        "change_pct": 2.23
      },
      {
        "name": "煤化工",
        "change_pct": 0.39
      },
      {
        "name": "食品",
        "change_pct": 1.7
      },
      {
        "name": "大农业",
        "change_pct": 1.6
      },
      {
        "name": "干细胞",
        "change_pct": 1.94
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 96,
    "hot_rank_chg": 74,
    "stock_cnt": 5787,
    "price": "6.90",
    "change": "3.60",
    "market_id": "33",
    "circulate_market_value": "4363424300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.43
      },
      {
        "name": "京津冀",
        "change_pct": 1.9
      },
      {
        "name": "调味品",
        "change_pct": 0.71
      },
      {
        "name": "海南概念",
        "change_pct": 2.02
      },
      {
        "name": "休闲食品",
        "change_pct": 1.8
      },
      {
        "name": "食品",
        "change_pct": 1.7
      },
      {
        "name": "人造肉",
        "change_pct": 2.48
      }
    ]
  },
  {
    "code": "600844",
    "name": "金煤科技",
    "hot_rank": 98,
    "hot_rank_chg": 873,
    "stock_cnt": 5787,
    "price": "3.72",
    "change": "3.91",
    "market_id": "17",
    "circulate_market_value": "3060558000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "内蒙古概念",
        "change_pct": 0.66
      },
      {
        "name": "煤化工",
        "change_pct": 0.39
      },
      {
        "name": "乙二醇",
        "change_pct": 0.81
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.16
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5787, "price": "606.66", "change": "0.59", "market_id": "17", "circulate_market_value": "18253016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5787, "price": "9.15", "change": "8.16", "market_id": "17", "circulate_market_value": "5872316400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.93}, {"name": "农业种植", "change_pct": 2.23}, {"name": "湖南国企改革", "change_pct": 1.48}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "休闲食品", "change_pct": 1.8}, {"name": "食品", "change_pct": 1.7}, {"name": "食品安全", "change_pct": 1.69}, {"name": "社区团购", "change_pct": 2.07}, {"name": "大农业", "change_pct": 1.6}, {"name": "预制菜", "change_pct": 2.13}, {"name": "人造肉", "change_pct": 2.48}, {"name": "国企改革", "change_pct": 1.27}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 4, "hot_rank_chg": 10, "stock_cnt": 5787, "price": "16.28", "change": "4.56", "market_id": "33", "circulate_market_value": "26427725000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 5, "hot_rank_chg": 40, "stock_cnt": 5787, "price": "15.48", "change": "10.02", "market_id": "33", "circulate_market_value": "7072042000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数字人民币"}, {"code": "002412", "name": "汉森制药", "hot_rank": 6, "hot_rank_chg": 15, "stock_cnt": 5787, "price": "12.33", "change": "9.99", "market_id": "33", "circulate_market_value": "6138428900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 2.23}, {"name": "优化生育（三孩）", "change_pct": 2.04}, {"name": "农业种植", "change_pct": 2.23}, {"name": "医药", "change_pct": 2.23}, {"name": "流感", "change_pct": 2.53}, {"name": "大农业", "change_pct": 1.6}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5787, "price": "10.81", "change": "-5.67", "market_id": "33", "circulate_market_value": "25105962000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -3.72}, {"name": "有色 · 铜", "change_pct": -1.25}, {"name": "有色 · 锑", "change_pct": -3.34}, {"name": "湖南国企改革", "change_pct": 1.48}, {"name": "有色 · 锌", "change_pct": -3.27}, {"name": "有色金属", "change_pct": 0.07}, {"name": "国企改革", "change_pct": 1.27}, {"name": "白银", "change_pct": -4.22}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5787, "price": "9.90", "change": "0.00", "market_id": "17", "circulate_market_value": "4745267800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.23}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "医药商业", "change_pct": 2.54}, {"name": "医药", "change_pct": 2.23}, {"name": "流感", "change_pct": 2.53}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "8.19", "change": "-0.36", "market_id": "17", "circulate_market_value": "20626596000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.01}, {"name": "工业大麻", "change_pct": 2.08}, {"name": "中药", "change_pct": 2.23}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "保健品", "change_pct": 1.95}, {"name": "民营医院", "change_pct": 1.97}, {"name": "医药", "change_pct": 2.23}, {"name": "化学原料药", "change_pct": 2.19}, {"name": "流感", "change_pct": 2.53}, {"name": "振兴东北", "change_pct": 1.59}, {"name": "食品", "change_pct": 1.7}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5787, "price": "13.94", "change": "-3.06", "market_id": "17", "circulate_market_value": "9483656300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 11, "hot_rank_chg": -6, "stock_cnt": 5787, "price": "34.86", "change": "-1.97", "market_id": "17", "circulate_market_value": "58009545000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 12, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "859.25", "change": "-1.23", "market_id": "33", "circulate_market_value": "953714470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 13, "hot_rank_chg": 52, "stock_cnt": 5787, "price": "8.60", "change": "9.97", "market_id": "33", "circulate_market_value": "3791068800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 2.34}, {"name": "锂电池", "change_pct": 0.16}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "两轮车", "change_pct": 1.1}, {"name": "珠宝饰品", "change_pct": 0.35}]}, {"code": "002176", "name": "江特电机", "hot_rank": 14, "hot_rank_chg": 389, "stock_cnt": 5787, "price": "9.50", "change": "3.83", "market_id": "33", "circulate_market_value": "16147726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.36}, {"name": "锂电池", "change_pct": 0.16}, {"name": "大飞机", "change_pct": 1.55}, {"name": "军民融合", "change_pct": 1.92}, {"name": "风电", "change_pct": 1.13}, {"name": "军工", "change_pct": 1.75}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "机器人", "change_pct": 1.91}, {"name": "新能源车零部件", "change_pct": 1.87}, {"name": "固态电池", "change_pct": -0.04}, {"name": "飞行汽车/eVTOL", "change_pct": 2.09}, {"name": "锂矿/碳酸锂", "change_pct": -1.73}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "56.95", "change": "0.62", "market_id": "17", "circulate_market_value": "256448070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 16, "hot_rank_chg": 3, "stock_cnt": 5787, "price": "20.92", "change": "-0.62", "market_id": "33", "circulate_market_value": "9462927700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 17, "hot_rank_chg": -5, "stock_cnt": 5787, "price": "65.50", "change": "8.47", "market_id": "17", "circulate_market_value": "160713830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 18, "hot_rank_chg": 15, "stock_cnt": 5787, "price": "51.63", "change": "-1.85", "market_id": "17", "circulate_market_value": "43707549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 19, "hot_rank_chg": 4, "stock_cnt": 5787, "price": "29.03", "change": "2.22", "market_id": "17", "circulate_market_value": "11641030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 20, "hot_rank_chg": 52, "stock_cnt": 5787, "price": "8.99", "change": "3.81", "market_id": "17", "circulate_market_value": "6371453100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "396.54", "change": "3.90", "market_id": "17", "circulate_market_value": "265083790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "5.78", "change": "0.52", "market_id": "33", "circulate_market_value": "204422040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.86}, {"name": "手机产业链", "change_pct": 2.05}, {"name": "超高清视频", "change_pct": 1.81}, {"name": "苹果产业链", "change_pct": 1.57}, {"name": "电竞", "change_pct": 1.99}, {"name": "半导体", "change_pct": 0.29}, {"name": "人工智能", "change_pct": 1.91}, {"name": "互联网医疗", "change_pct": 1.89}, {"name": "VR&AR", "change_pct": 2.08}, {"name": "OLED", "change_pct": 0.45}, {"name": "京津冀", "change_pct": 1.9}, {"name": "物联网", "change_pct": 1.92}, {"name": "指纹识别", "change_pct": 1.93}, {"name": "汽车零部件", "change_pct": 2.01}, {"name": "白马股", "change_pct": 0.5}, {"name": "智能制造", "change_pct": 1.72}, {"name": "小米概念股", "change_pct": 1.82}, {"name": "国产芯片", "change_pct": 0.73}, {"name": "液晶面板/LCD", "change_pct": 0.85}, {"name": "全息概念", "change_pct": 1.83}, {"name": "理想汽车概念股", "change_pct": 2.01}, {"name": "MicroLED", "change_pct": 1.82}, {"name": "钙钛矿电池", "change_pct": 0.51}, {"name": "智能手表", "change_pct": 2.05}, {"name": "MiniLED", "change_pct": 1.72}, {"name": "传感器", "change_pct": 1.73}, {"name": "大硅片", "change_pct": -1.27}, {"name": "AI PC", "change_pct": 2.07}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "回购", "change_pct": 1.11}, {"name": "光电共封装CPO", "change_pct": 1.6}, {"name": "智能眼镜/MR头显", "change_pct": 1.81}, {"name": "玻璃基板封装", "change_pct": 0.93}]}, {"code": "603958", "name": "哈森股份", "hot_rank": 23, "hot_rank_chg": 16, "stock_cnt": 5787, "price": "24.04", "change": "6.33", "market_id": "17", "circulate_market_value": "5273414400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 24, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "21.80", "change": "4.76", "market_id": "33", "circulate_market_value": "25647020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 25, "hot_rank_chg": 58, "stock_cnt": 5787, "price": "4.71", "change": "6.08", "market_id": "33", "circulate_market_value": "3603812800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.23}, {"name": "股权转让", "change_pct": 1.36}, {"name": "优化生育（三孩）", "change_pct": 2.04}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "医药商业", "change_pct": 2.54}, {"name": "保健品", "change_pct": 1.95}, {"name": "民营医院", "change_pct": 1.97}, {"name": "医药", "change_pct": 2.23}, {"name": "食品", "change_pct": 1.7}, {"name": "辅助生殖", "change_pct": 1.73}, {"name": "口腔", "change_pct": 2.0}, {"name": "医美", "change_pct": 2.63}, {"name": "新冠病毒防治", "change_pct": 1.88}]}, {"code": "600869", "name": "远东股份", "hot_rank": 26, "hot_rank_chg": 22, "stock_cnt": 5787, "price": "16.55", "change": "2.41", "market_id": "17", "circulate_market_value": "36730288000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 27, "hot_rank_chg": -10, "stock_cnt": 5787, "price": "38.95", "change": "2.10", "market_id": "17", "circulate_market_value": "12540855400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 28, "hot_rank_chg": 30, "stock_cnt": 5787, "price": "4.24", "change": "7.61", "market_id": "33", "circulate_market_value": "8904652300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.23}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "维生素", "change_pct": 2.93}, {"name": "基因测序", "change_pct": 1.37}, {"name": "民营医院", "change_pct": 1.97}, {"name": "医药", "change_pct": 2.23}, {"name": "化学原料药", "change_pct": 2.19}, {"name": "PD-1抑制剂", "change_pct": 1.19}]}, {"code": "600721", "name": "百花医药", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "14.62", "change": "3.03", "market_id": "17", "circulate_market_value": "5622086400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 30, "hot_rank_chg": 57, "stock_cnt": 5787, "price": "6.14", "change": "5.14", "market_id": "33", "circulate_market_value": "5441577600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.23}, {"name": "土地流转", "change_pct": 1.52}, {"name": "海南概念", "change_pct": 2.02}, {"name": "自由贸易港", "change_pct": 1.64}, {"name": "海南自由贸易港", "change_pct": 2.16}, {"name": "大农业", "change_pct": 1.6}, {"name": "水产养殖", "change_pct": 2.64}, {"name": "自贸区", "change_pct": 1.69}]}, {"code": "600667", "name": "太极实业", "hot_rank": 31, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "20.26", "change": "-0.20", "market_id": "17", "circulate_market_value": "42416475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 32, "hot_rank_chg": 27, "stock_cnt": 5787, "price": "73.52", "change": "0.99", "market_id": "17", "circulate_market_value": "9607093700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "40.59", "change": "1.81", "market_id": "17", "circulate_market_value": "161206720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 34, "hot_rank_chg": -10, "stock_cnt": 5787, "price": "74.98", "change": "1.60", "market_id": "17", "circulate_market_value": "134170304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 35, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "7.61", "change": "-1.30", "market_id": "17", "circulate_market_value": "8665943100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.52}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "光伏", "change_pct": 0.85}, {"name": "特高压", "change_pct": 1.4}, {"name": "智能电网", "change_pct": 1.64}]}, {"code": "300502", "name": "新易盛", "hot_rank": 36, "hot_rank_chg": 1, "stock_cnt": 5787, "price": "408.68", "change": "-0.80", "market_id": "33", "circulate_market_value": "512584090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 37, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "52.28", "change": "0.71", "market_id": "33", "circulate_market_value": "59990776000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 38, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "194.22", "change": "0.32", "market_id": "33", "circulate_market_value": "269251410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 39, "hot_rank_chg": -5, "stock_cnt": 5787, "price": "95.15", "change": "-0.23", "market_id": "33", "circulate_market_value": "62136340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 40, "hot_rank_chg": 3, "stock_cnt": 5787, "price": "35.27", "change": "2.26", "market_id": "33", "circulate_market_value": "100874763000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 41, "hot_rank_chg": 16, "stock_cnt": 5787, "price": "68.55", "change": "-2.04", "market_id": "17", "circulate_market_value": "28542006000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 42, "hot_rank_chg": -14, "stock_cnt": 5787, "price": "404.47", "change": "6.67", "market_id": "17", "circulate_market_value": "164351660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 43, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "3.47", "change": "0.00", "market_id": "33", "circulate_market_value": "16210968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 1.13}, {"name": "体育产业", "change_pct": 1.7}, {"name": "股权转让", "change_pct": 1.36}, {"name": "房地产", "change_pct": 1.75}, {"name": "云计算数据中心", "change_pct": 2.01}, {"name": "京津冀", "change_pct": 1.9}, {"name": "旅游", "change_pct": 2.22}, {"name": "国产芯片", "change_pct": 0.73}, {"name": "内存", "change_pct": 0.86}, {"name": "闪存", "change_pct": 1.45}, {"name": "IP经济/谷子经济", "change_pct": 1.97}]}, {"code": "002837", "name": "英维克", "hot_rank": 44, "hot_rank_chg": 81, "stock_cnt": 5787, "price": "60.23", "change": "10.01", "market_id": "33", "circulate_market_value": "68255051000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Q2回升"}, {"code": "002445", "name": "中南文化", "hot_rank": 45, "hot_rank_chg": 78, "stock_cnt": 5787, "price": "3.71", "change": "10.09", "market_id": "33", "circulate_market_value": "8778803200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重组", "xgb_concepts": [{"name": "海工装备", "change_pct": 1.34}, {"name": "VR&AR", "change_pct": 2.08}, {"name": "影视", "change_pct": 2.78}, {"name": "光伏", "change_pct": 0.85}, {"name": "复牌股", "change_pct": 1.24}, {"name": "江苏国企改革", "change_pct": 1.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 2.51}, {"name": "国企改革", "change_pct": 1.27}]}, {"code": "600403", "name": "大有能源", "hot_rank": 46, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "7.03", "change": "-3.70", "market_id": "17", "circulate_market_value": "16807411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.07}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "国企改革", "change_pct": 1.27}, {"name": "河南国企改革", "change_pct": 0.8}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 47, "hot_rank_chg": -5, "stock_cnt": 5787, "price": "5.50", "change": "10.00", "market_id": "33", "circulate_market_value": "14543339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.73}, {"name": "云计算数据中心", "change_pct": 2.01}, {"name": "装修装饰", "change_pct": 2.2}, {"name": "装配式建筑", "change_pct": 2.24}, {"name": "航天", "change_pct": 1.83}, {"name": "旧改", "change_pct": 1.92}]}, {"code": "600272", "name": "开开实业", "hot_rank": 48, "hot_rank_chg": -1, "stock_cnt": 5787, "price": "18.78", "change": "3.47", "market_id": "17", "circulate_market_value": "3004800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 49, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "34.29", "change": "-0.81", "market_id": "33", "circulate_market_value": "37064688000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 50, "hot_rank_chg": -21, "stock_cnt": 5787, "price": "33.72", "change": "-2.37", "market_id": "17", "circulate_market_value": "694692460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 51, "hot_rank_chg": 10, "stock_cnt": 5787, "price": "7.99", "change": "-0.99", "market_id": "33", "circulate_market_value": "5813397700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 2.25}, {"name": "装配式建筑", "change_pct": 2.24}, {"name": "风电", "change_pct": 1.13}, {"name": "环氧丙烷", "change_pct": 0.28}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "建筑节能", "change_pct": 2.04}, {"name": "旧改", "change_pct": 1.92}]}, {"code": "601606", "name": "长城军工", "hot_rank": 52, "hot_rank_chg": 127, "stock_cnt": 5787, "price": "31.52", "change": "3.24", "market_id": "17", "circulate_market_value": "22827679000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 53, "hot_rank_chg": -35, "stock_cnt": 5787, "price": "36.48", "change": "-8.48", "market_id": "33", "circulate_market_value": "24321813000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002041", "name": "登海种业", "hot_rank": 54, "hot_rank_chg": 54, "stock_cnt": 5787, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "9864800000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "粮食概念", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.23}, {"name": "转基因", "change_pct": 3.44}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "大农业", "change_pct": 1.6}, {"name": "人造肉", "change_pct": 2.48}, {"name": "大豆", "change_pct": 2.68}]}, {"code": "600313", "name": "农发种业", "hot_rank": 55, "hot_rank_chg": 49, "stock_cnt": 5787, "price": "6.84", "change": "2.86", "market_id": "17", "circulate_market_value": "7402238900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.06}, {"name": "农业种植", "change_pct": 2.23}, {"name": "化肥", "change_pct": 0.88}, {"name": "转基因", "change_pct": 3.44}, {"name": "土地流转", "change_pct": 1.52}, {"name": "农垦", "change_pct": 1.76}, {"name": "乡村振兴", "change_pct": 2.1}, {"name": "大农业", "change_pct": 1.6}, {"name": "国企改革", "change_pct": 1.27}, {"name": "大豆", "change_pct": 2.68}]}, {"code": "600508", "name": "上海能源", "hot_rank": 56, "hot_rank_chg": 113, "stock_cnt": 5787, "price": "10.87", "change": "10.02", "market_id": "17", "circulate_market_value": "10998322500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.07}, {"name": "央企改革", "change_pct": 1.06}, {"name": "破净股", "change_pct": 1.13}, {"name": "超超临界发电", "change_pct": 1.16}, {"name": "国企改革", "change_pct": 1.27}]}, {"code": "000506", "name": "招金黄金", "hot_rank": 57, "hot_rank_chg": -32, "stock_cnt": 5787, "price": "20.75", "change": "-7.12", "market_id": "33", "circulate_market_value": "19270669000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002017", "name": "东信和平", "hot_rank": 58, "hot_rank_chg": 10, "stock_cnt": 5787, "price": "16.53", "change": "3.44", "market_id": "33", "circulate_market_value": "9590249600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 59, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "120.73", "change": "-0.86", "market_id": "17", "circulate_market_value": "43550136000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 60, "hot_rank_chg": -6, "stock_cnt": 5787, "price": "32.02", "change": "3.89", "market_id": "33", "circulate_market_value": "25053574000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 61, "hot_rank_chg": -21, "stock_cnt": 5787, "price": "11.07", "change": "0.00", "market_id": "17", "circulate_market_value": "19208453000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.49}, {"name": "核电", "change_pct": 1.57}, {"name": "锂电池", "change_pct": 0.16}, {"name": "铜箔/覆铜板", "change_pct": 1.5}, {"name": "PCB板", "change_pct": 1.58}, {"name": "中科院系", "change_pct": 1.51}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "宁德时代概念股", "change_pct": 0.66}, {"name": "固态电池", "change_pct": -0.04}, {"name": "PET复合铜箔", "change_pct": 0.69}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 62, "hot_rank_chg": 15, "stock_cnt": 5787, "price": "11.59", "change": "2.29", "market_id": "17", "circulate_market_value": "20736113000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.71}, {"name": "纯碱", "change_pct": 0.33}, {"name": "食品", "change_pct": 1.7}, {"name": "土壤修复", "change_pct": 1.44}, {"name": "东数西算/算力", "change_pct": 1.74}, {"name": "OpenClaw概念", "change_pct": 0.93}, {"name": "DeepSeek概念股", "change_pct": 1.62}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 63, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "260.15", "change": "4.29", "market_id": "33", "circulate_market_value": "283144150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001337", "name": "四川黄金", "hot_rank": 64, "hot_rank_chg": -1, "stock_cnt": 5787, "price": "55.46", "change": "-2.01", "market_id": "33", "circulate_market_value": "23293200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 65, "hot_rank_chg": -21, "stock_cnt": 5787, "price": "160.47", "change": "2.97", "market_id": "17", "circulate_market_value": "396887280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300139", "name": "晓程科技", "hot_rank": 66, "hot_rank_chg": -39, "stock_cnt": 5787, "price": "55.36", "change": "-4.87", "market_id": "33", "circulate_market_value": "12935374700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 67, "hot_rank_chg": 118, "stock_cnt": 5787, "price": "38.94", "change": "-0.49", "market_id": "17", "circulate_market_value": "6833195200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 68, "hot_rank_chg": -1, "stock_cnt": 5787, "price": "16.99", "change": "0.65", "market_id": "33", "circulate_market_value": "56509191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 69, "hot_rank_chg": -33, "stock_cnt": 5787, "price": "11.20", "change": "2.01", "market_id": "17", "circulate_market_value": "4845944900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.36}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "光伏", "change_pct": 0.85}, {"name": "无线耳机", "change_pct": 2.15}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "光伏胶膜", "change_pct": 1.05}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 70, "hot_rank_chg": 370, "stock_cnt": 5787, "price": "18.56", "change": "5.04", "market_id": "33", "circulate_market_value": "7811255000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688835", "name": "高凯技术", "hot_rank": 71, "hot_rank_chg": 1670, "stock_cnt": 5787, "price": "249.57", "change": "306.73", "market_id": "17", "circulate_market_value": "4687619700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 73, "hot_rank_chg": -24, "stock_cnt": 5787, "price": "405.98", "change": "1.40", "market_id": "33", "circulate_market_value": "66998495000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 74, "hot_rank_chg": -33, "stock_cnt": 5787, "price": "12.15", "change": "-3.34", "market_id": "33", "circulate_market_value": "11339857500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.73}, {"name": "新疆国企改革", "change_pct": 0.65}, {"name": "新疆概念", "change_pct": 1.34}, {"name": "光伏", "change_pct": 0.85}, {"name": "风电", "change_pct": 1.13}, {"name": "储能", "change_pct": 1.2}, {"name": "国企改革", "change_pct": 1.27}]}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 75, "hot_rank_chg": -25, "stock_cnt": 5787, "price": "47.32", "change": "-2.97", "market_id": "17", "circulate_market_value": "78736286000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 76, "hot_rank_chg": -24, "stock_cnt": 5787, "price": "57.02", "change": "-1.44", "market_id": "33", "circulate_market_value": "21012058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000931", "name": "中关村", "hot_rank": 77, "hot_rank_chg": 12, "stock_cnt": 5787, "price": "5.22", "change": "-6.79", "market_id": "33", "circulate_market_value": "3920374200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.23}, {"name": "创新药", "change_pct": 1.96}, {"name": "养老产业", "change_pct": 1.92}, {"name": "医药", "change_pct": 2.23}, {"name": "化学原料药", "change_pct": 2.19}, {"name": "口腔", "change_pct": 2.0}]}, {"code": "600522", "name": "中天科技", "hot_rank": 78, "hot_rank_chg": 0, "stock_cnt": 5787, "price": "34.28", "change": "5.38", "market_id": "17", "circulate_market_value": "116995914000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 79, "hot_rank_chg": -33, "stock_cnt": 5787, "price": "26.38", "change": "-4.59", "market_id": "17", "circulate_market_value": "6391082600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600984", "name": "建设机械", "hot_rank": 80, "hot_rank_chg": 846, "stock_cnt": 5787, "price": "4.94", "change": "10.02", "market_id": "17", "circulate_market_value": "6209797000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重大重组", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.52}, {"name": "机械", "change_pct": 1.63}, {"name": "复牌股", "change_pct": 1.24}, {"name": "国企改革", "change_pct": 1.27}, {"name": "陕西国企改革", "change_pct": 1.58}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 81, "hot_rank_chg": 156, "stock_cnt": 5787, "price": "4.35", "change": "10.13", "market_id": "33", "circulate_market_value": "2804159800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.52}, {"name": "装修装饰", "change_pct": 2.2}, {"name": "装配式建筑", "change_pct": 2.24}, {"name": "家具家居", "change_pct": 1.59}, {"name": "复牌股", "change_pct": 1.24}, {"name": "智能制造", "change_pct": 1.72}, {"name": "3D打印", "change_pct": 1.63}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 3.17}, {"name": "旧改", "change_pct": 1.92}]}, {"code": "603186", "name": "华正新材", "hot_rank": 82, "hot_rank_chg": 120, "stock_cnt": 5787, "price": "173.00", "change": "4.67", "market_id": "17", "circulate_market_value": "27124760000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 83, "hot_rank_chg": -14, "stock_cnt": 5787, "price": "61.73", "change": "0.80", "market_id": "33", "circulate_market_value": "93672326000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 84, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "60.74", "change": "0.56", "market_id": "17", "circulate_market_value": "1205330170000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 85, "hot_rank_chg": -25, "stock_cnt": 5787, "price": "14.22", "change": "0.42", "market_id": "17", "circulate_market_value": "20941891000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 86, "hot_rank_chg": -30, "stock_cnt": 5787, "price": "16.31", "change": "1.87", "market_id": "17", "circulate_market_value": "12840478200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 87, "hot_rank_chg": -17, "stock_cnt": 5787, "price": "34.95", "change": "-4.25", "market_id": "17", "circulate_market_value": "126324795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5787, "price": "11.51", "change": "0.00", "market_id": "33", "circulate_market_value": "6902662100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.52}, {"name": "金融科技", "change_pct": 2.49}, {"name": "移动支付", "change_pct": 1.96}, {"name": "物联网", "change_pct": 1.92}, {"name": "数字经济", "change_pct": 2.01}, {"name": "电子身份证", "change_pct": 2.29}, {"name": "ETC", "change_pct": 1.6}, {"name": "数字人民币", "change_pct": 2.42}, {"name": "智慧政务", "change_pct": 2.13}, {"name": "eSIM", "change_pct": 2.35}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "区块链", "change_pct": 2.24}, {"name": "RWA", "change_pct": 2.87}]}, {"code": "003032", "name": "传智教育", "hot_rank": 89, "hot_rank_chg": -3, "stock_cnt": 5787, "price": "10.03", "change": "0.40", "market_id": "33", "circulate_market_value": "2853350500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.57}, {"name": "ST摘帽", "change_pct": 2.5}, {"name": "强势人气股", "change_pct": 1.73}, {"name": "教育", "change_pct": 1.91}, {"name": "阿里巴巴概念股", "change_pct": 2.03}, {"name": "职业教育", "change_pct": 2.16}, {"name": "在线教育", "change_pct": 1.95}, {"name": "华为鸿蒙", "change_pct": 2.41}, {"name": "华为产业链", "change_pct": 2.03}, {"name": "智谱AI", "change_pct": 2.27}]}, {"code": "000723", "name": "美锦能源", "hot_rank": 90, "hot_rank_chg": 17, "stock_cnt": 5787, "price": "3.89", "change": "0.00", "market_id": "33", "circulate_market_value": "17097235000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -0.07}, {"name": "无人驾驶", "change_pct": 1.65}, {"name": "新能源整车", "change_pct": 2.03}, {"name": "重卡", "change_pct": 2.13}, {"name": "天然气", "change_pct": 1.36}, {"name": "氢能源/燃料电池", "change_pct": 1.32}, {"name": "汽车整车", "change_pct": 1.68}, {"name": "新能源汽车", "change_pct": 1.1}, {"name": "机器人", "change_pct": 1.91}, {"name": "煤化工", "change_pct": 0.39}, {"name": "乙二醇", "change_pct": 0.81}, {"name": "碳基材料", "change_pct": 0.88}, {"name": "超级电容", "change_pct": 1.01}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 91, "hot_rank_chg": -18, "stock_cnt": 5787, "price": "13.30", "change": "4.56", "market_id": "17", "circulate_market_value": "17066541000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 92, "hot_rank_chg": -18, "stock_cnt": 5787, "price": "3.81", "change": "-3.54", "market_id": "17", "circulate_market_value": "4867655200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.05}, {"name": "化肥", "change_pct": 0.88}, {"name": "保健品", "change_pct": 1.95}, {"name": "民营医院", "change_pct": 1.97}, {"name": "医药", "change_pct": 2.23}, {"name": "煤化工", "change_pct": 0.39}, {"name": "食品", "change_pct": 1.7}, {"name": "大农业", "change_pct": 1.6}, {"name": "干细胞", "change_pct": 1.94}, {"name": "阿尔茨海默病", "change_pct": 1.08}]}, {"code": "300313", "name": "天山生物", "hot_rank": 93, "hot_rank_chg": -40, "stock_cnt": 5787, "price": "17.21", "change": "12.11", "market_id": "33", "circulate_market_value": "3396441500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 94, "hot_rank_chg": -14, "stock_cnt": 5787, "price": "39.23", "change": "3.10", "market_id": "17", "circulate_market_value": "57354056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 95, "hot_rank_chg": -29, "stock_cnt": 5787, "price": "36.09", "change": "-2.51", "market_id": "17", "circulate_market_value": "29911795000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 96, "hot_rank_chg": 74, "stock_cnt": 5787, "price": "6.90", "change": "3.60", "market_id": "33", "circulate_market_value": "4363424300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.43}, {"name": "京津冀", "change_pct": 1.9}, {"name": "调味品", "change_pct": 0.71}, {"name": "海南概念", "change_pct": 2.02}, {"name": "休闲食品", "change_pct": 1.8}, {"name": "食品", "change_pct": 1.7}, {"name": "人造肉", "change_pct": 2.48}]}, {"code": "002906", "name": "华阳集团", "hot_rank": 97, "hot_rank_chg": 171, "stock_cnt": 5787, "price": "27.45", "change": "-2.80", "market_id": "33", "circulate_market_value": "14403052000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600844", "name": "金煤科技", "hot_rank": 98, "hot_rank_chg": 873, "stock_cnt": 5787, "price": "3.72", "change": "3.91", "market_id": "17", "circulate_market_value": "3060558000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "内蒙古概念", "change_pct": 0.66}, {"name": "煤化工", "change_pct": 0.39}, {"name": "乙二醇", "change_pct": 0.81}, {"name": "可降解塑料", "change_pct": 1.16}]}, {"code": "000657", "name": "中钨高新", "hot_rank": 99, "hot_rank_chg": -37, "stock_cnt": 5787, "price": "64.99", "change": "-2.65", "market_id": "33", "circulate_market_value": "94459846000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 100, "hot_rank_chg": 132, "stock_cnt": 5787, "price": "27.77", "change": "6.52", "market_id": "17", "circulate_market_value": "34252474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600745": "ST/风险警示股"};