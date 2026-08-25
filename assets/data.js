const UPDATE_TIME = "2026-08-25 04:34";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.36,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 3.29,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "数字货币",
    "rise": 2.26,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "金融科技ETF",
    "code": "885866"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.37,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续277天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "转基因",
    "rise": 3.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "黄金概念",
    "rise": -2.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "兵装重组概念",
    "rise": 3.15,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "存储芯片",
    "rise": -1.63,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "AI应用",
    "rise": 1.19,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "算力租赁",
    "rise": 0.77,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续141天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "液冷服务器",
    "rise": 0.55,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "PCB概念",
    "rise": -0.74,
    "rate": 0,
    "tag": "",
    "hotTag": "连续100天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "光纤概念",
    "rise": -0.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "TMT50ETF",
    "code": "886084"
  },
  {
    "name": "玉米",
    "rise": 3.27,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "商业航天",
    "rise": 0.18,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续206天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 0.22,
    "rate": 0,
    "tag": "",
    "hotTag": "连续441天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": -1.11,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "CRO概念",
    "rise": 1.75,
    "rate": 0,
    "tag": "",
    "hotTag": "连续16天上榜",
    "rankChg": 1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "猪肉",
    "rise": 1.7,
    "rate": 0,
    "tag": "",
    "hotTag": "连续12天上榜",
    "rankChg": -1,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "跨境支付(CIPS)",
    "rise": 2.25,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "银行ETF",
    "code": "885966"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金直线拉升，机构改口称金价将冲击5000美元",
    "desc": "",
    "heat": 439688,
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
    "heat": 335755,
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
        "name": "金健米业",
        "code": "600127",
        "chg": 10.047281
      }
    ]
  },
  {
    "title": "工信部：今年计划印发实施《关于加强时空信息终端供需适配 促进融合应用的行动计划》",
    "desc": "",
    "heat": 141268,
    "direction": "时空信息",
    "themes": [
      "时空信息"
    ],
    "stocks": [
      {
        "name": "合众思壮",
        "code": "002383",
        "chg": 3.560831
      }
    ]
  },
  {
    "title": "美公布多项针对伊朗经济制裁",
    "desc": "",
    "heat": 70148,
    "direction": "美伊战争",
    "themes": [
      "天然气",
      "石油加工贸易",
      "油气开采及服务",
      "稀土永磁"
    ],
    "stocks": [
      {
        "name": "镇海股份",
        "code": "603637",
        "chg": 10.039216
      }
    ]
  },
  {
    "title": "板块表现强势 煤炭重估进行时？",
    "desc": "",
    "heat": 66483,
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
        "name": "奥特维",
        "code": "688516",
        "chg": 2.870588
      }
    ]
  },
  {
    "title": "算力金属”价格大涨 资源保障能力“加码",
    "desc": "",
    "heat": 500,
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
    "change": "+4.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+4.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.05%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+3.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+2.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+2.8%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+2.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+2.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "人造肉",
    "change": "+2.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "RWA",
    "change": "+2.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+2.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "旅游",
    "change": "+2.34%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+2.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+2.3%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 4,
    "hot_rank_chg": 17,
    "stock_cnt": 5789,
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
        "change_pct": 1.75
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.65
      },
      {
        "name": "农业种植",
        "change_pct": 3.05
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "流感",
        "change_pct": 1.98
      },
      {
        "name": "大农业",
        "change_pct": 1.47
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 5,
    "hot_rank_chg": 5,
    "stock_cnt": 5789,
    "price": "9.31",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "5975001800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "粮油食品",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.83
      },
      {
        "name": "农业种植",
        "change_pct": 3.05
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.07
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.01
      },
      {
        "name": "休闲食品",
        "change_pct": 1.7
      },
      {
        "name": "食品",
        "change_pct": 1.57
      },
      {
        "name": "食品安全",
        "change_pct": 0.74
      },
      {
        "name": "社区团购",
        "change_pct": 2.15
      },
      {
        "name": "大农业",
        "change_pct": 1.47
      },
      {
        "name": "预制菜",
        "change_pct": 2.18
      },
      {
        "name": "人造肉",
        "change_pct": 2.5
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 6,
    "hot_rank_chg": -2,
    "stock_cnt": 5789,
    "price": "10.66",
    "change": "-6.98",
    "market_id": "33",
    "circulate_market_value": "24757591000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -4.61
      },
      {
        "name": "有色 · 铜",
        "change_pct": -2.57
      },
      {
        "name": "有色 · 锑",
        "change_pct": -4.43
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.07
      },
      {
        "name": "有色 · 锌",
        "change_pct": -4.37
      },
      {
        "name": "有色金属",
        "change_pct": -1.27
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "白银",
        "change_pct": -5.32
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5789,
    "price": "9.91",
    "change": "0.10",
    "market_id": "17",
    "circulate_market_value": "4750061000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.75
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "医药商业",
        "change_pct": 2.08
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "流感",
        "change_pct": 1.98
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 9,
    "hot_rank_chg": -7,
    "stock_cnt": 5789,
    "price": "8.27",
    "change": "0.61",
    "market_id": "17",
    "circulate_market_value": "20828077000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.62
      },
      {
        "name": "工业大麻",
        "change_pct": 1.18
      },
      {
        "name": "中药",
        "change_pct": 1.75
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "保健品",
        "change_pct": 1.68
      },
      {
        "name": "民营医院",
        "change_pct": 1.53
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "化学原料药",
        "change_pct": 1.5
      },
      {
        "name": "流感",
        "change_pct": 1.98
      },
      {
        "name": "振兴东北",
        "change_pct": 1.44
      },
      {
        "name": "食品",
        "change_pct": 1.57
      }
    ]
  },
  {
    "code": "002176",
    "name": "江特电机",
    "hot_rank": 10,
    "hot_rank_chg": 393,
    "stock_cnt": 5789,
    "price": "9.47",
    "change": "3.50",
    "market_id": "33",
    "circulate_market_value": "16096733000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.5
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "大飞机",
        "change_pct": 0.33
      },
      {
        "name": "军民融合",
        "change_pct": 0.57
      },
      {
        "name": "风电",
        "change_pct": 0.18
      },
      {
        "name": "军工",
        "change_pct": 0.56
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.04
      },
      {
        "name": "机器人",
        "change_pct": 0.57
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.68
      },
      {
        "name": "固态电池",
        "change_pct": -1.28
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 0.92
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": -2.65
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 11,
    "hot_rank_chg": 54,
    "stock_cnt": 5789,
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
        "change_pct": 1.84
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.04
      },
      {
        "name": "两轮车",
        "change_pct": 0.45
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.37
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 21,
    "hot_rank_chg": 51,
    "stock_cnt": 5789,
    "price": "9.08",
    "change": "4.85",
    "market_id": "17",
    "circulate_market_value": "6435238500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 24,
    "hot_rank_chg": 59,
    "stock_cnt": 5789,
    "price": "4.59",
    "change": "3.38",
    "market_id": "33",
    "circulate_market_value": "3511996000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.75
      },
      {
        "name": "股权转让",
        "change_pct": 0.5
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.65
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "医药商业",
        "change_pct": 2.08
      },
      {
        "name": "保健品",
        "change_pct": 1.68
      },
      {
        "name": "民营医院",
        "change_pct": 1.53
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "食品",
        "change_pct": 1.57
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.88
      },
      {
        "name": "口腔",
        "change_pct": 1.28
      },
      {
        "name": "医美",
        "change_pct": 2.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.11
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 25,
    "hot_rank_chg": -10,
    "stock_cnt": 5789,
    "price": "5.70",
    "change": "-0.87",
    "market_id": "33",
    "circulate_market_value": "201592660000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -0.18
      },
      {
        "name": "手机产业链",
        "change_pct": 0.36
      },
      {
        "name": "超高清视频",
        "change_pct": 0.84
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.19
      },
      {
        "name": "电竞",
        "change_pct": 1.58
      },
      {
        "name": "半导体",
        "change_pct": -1.59
      },
      {
        "name": "人工智能",
        "change_pct": 0.92
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.3
      },
      {
        "name": "VR&AR",
        "change_pct": 0.63
      },
      {
        "name": "OLED",
        "change_pct": -1.21
      },
      {
        "name": "京津冀",
        "change_pct": 1.37
      },
      {
        "name": "物联网",
        "change_pct": 0.92
      },
      {
        "name": "指纹识别",
        "change_pct": 0.77
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.02
      },
      {
        "name": "白马股",
        "change_pct": 0.44
      },
      {
        "name": "智能制造",
        "change_pct": 0.45
      },
      {
        "name": "小米概念股",
        "change_pct": 0.31
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.67
      },
      {
        "name": "全息概念",
        "change_pct": 0.97
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.94
      },
      {
        "name": "MicroLED",
        "change_pct": -0.13
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.68
      },
      {
        "name": "智能手表",
        "change_pct": 0.82
      },
      {
        "name": "MiniLED",
        "change_pct": -0.0
      },
      {
        "name": "传感器",
        "change_pct": 0.06
      },
      {
        "name": "大硅片",
        "change_pct": -3.1
      },
      {
        "name": "AI PC",
        "change_pct": 0.34
      },
      {
        "name": "华为产业链",
        "change_pct": 0.8
      },
      {
        "name": "回购",
        "change_pct": 0.46
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.87
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.24
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.22
      }
    ]
  },
  {
    "code": "002445",
    "name": "中南文化",
    "hot_rank": 30,
    "hot_rank_chg": 93,
    "stock_cnt": 5789,
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
        "change_pct": 0.47
      },
      {
        "name": "VR&AR",
        "change_pct": 0.63
      },
      {
        "name": "影视",
        "change_pct": 2.3
      },
      {
        "name": "光伏",
        "change_pct": -0.15
      },
      {
        "name": "复牌股",
        "change_pct": 0.96
      },
      {
        "name": "江苏国企改革",
        "change_pct": 1.03
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "知识产权",
        "change_pct": 1.95
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 32,
    "hot_rank_chg": -10,
    "stock_cnt": 5789,
    "price": "7.65",
    "change": "-0.78",
    "market_id": "17",
    "circulate_market_value": "8711493300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.99
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "光伏",
        "change_pct": -0.15
      },
      {
        "name": "特高压",
        "change_pct": 0.26
      },
      {
        "name": "智能电网",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 39,
    "hot_rank_chg": -7,
    "stock_cnt": 5789,
    "price": "3.50",
    "change": "0.86",
    "market_id": "33",
    "circulate_market_value": "16351121000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.49
      },
      {
        "name": "体育产业",
        "change_pct": 1.11
      },
      {
        "name": "股权转让",
        "change_pct": 0.5
      },
      {
        "name": "房地产",
        "change_pct": 1.64
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.61
      },
      {
        "name": "京津冀",
        "change_pct": 1.37
      },
      {
        "name": "旅游",
        "change_pct": 2.34
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "内存",
        "change_pct": -1.24
      },
      {
        "name": "闪存",
        "change_pct": -0.7
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.55
      }
    ]
  },
  {
    "code": "600508",
    "name": "上海能源",
    "hot_rank": 40,
    "hot_rank_chg": 129,
    "stock_cnt": 5789,
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
        "change_pct": 0.22
      },
      {
        "name": "央企改革",
        "change_pct": 0.7
      },
      {
        "name": "破净股",
        "change_pct": 1.22
      },
      {
        "name": "超超临界发电",
        "change_pct": 0.86
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 42,
    "hot_rank_chg": 16,
    "stock_cnt": 5789,
    "price": "4.25",
    "change": "7.87",
    "market_id": "33",
    "circulate_market_value": "8925653900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.75
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "维生素",
        "change_pct": 2.41
      },
      {
        "name": "基因测序",
        "change_pct": 0.79
      },
      {
        "name": "民营医院",
        "change_pct": 1.53
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "化学原料药",
        "change_pct": 1.5
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 44,
    "hot_rank_chg": -9,
    "stock_cnt": 5789,
    "price": "7.08",
    "change": "-3.01",
    "market_id": "17",
    "circulate_market_value": "16926952000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.22
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 47,
    "hot_rank_chg": -5,
    "stock_cnt": 5789,
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
        "change_pct": 0.64
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.61
      },
      {
        "name": "装修装饰",
        "change_pct": 1.53
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.84
      },
      {
        "name": "航天",
        "change_pct": 0.22
      },
      {
        "name": "旧改",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 49,
    "hot_rank_chg": 38,
    "stock_cnt": 5789,
    "price": "6.28",
    "change": "7.53",
    "market_id": "33",
    "circulate_market_value": "5565652700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.05
      },
      {
        "name": "土地流转",
        "change_pct": 1.78
      },
      {
        "name": "海南概念",
        "change_pct": 1.64
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.61
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.14
      },
      {
        "name": "大农业",
        "change_pct": 1.47
      },
      {
        "name": "水产养殖",
        "change_pct": 2.88
      },
      {
        "name": "自贸区",
        "change_pct": 1.45
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 55,
    "hot_rank_chg": -15,
    "stock_cnt": 5789,
    "price": "10.85",
    "change": "-1.99",
    "market_id": "17",
    "circulate_market_value": "18826713000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.44
      },
      {
        "name": "核电",
        "change_pct": 0.55
      },
      {
        "name": "锂电池",
        "change_pct": -1.08
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -1.21
      },
      {
        "name": "PCB板",
        "change_pct": -0.95
      },
      {
        "name": "中科院系",
        "change_pct": 0.83
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.04
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.73
      },
      {
        "name": "固态电池",
        "change_pct": -1.28
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.5
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 56,
    "hot_rank_chg": 181,
    "stock_cnt": 5789,
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
        "change_pct": 0.99
      },
      {
        "name": "装修装饰",
        "change_pct": 1.53
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.84
      },
      {
        "name": "家具家居",
        "change_pct": 1.14
      },
      {
        "name": "复牌股",
        "change_pct": 0.96
      },
      {
        "name": "智能制造",
        "change_pct": 0.45
      },
      {
        "name": "3D打印",
        "change_pct": -0.06
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": 1.92
      },
      {
        "name": "旧改",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 59,
    "hot_rank_chg": 2,
    "stock_cnt": 5789,
    "price": "8.08",
    "change": "0.12",
    "market_id": "33",
    "circulate_market_value": "5878880300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 1.67
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.84
      },
      {
        "name": "风电",
        "change_pct": 0.18
      },
      {
        "name": "环氧丙烷",
        "change_pct": -0.22
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.01
      },
      {
        "name": "建筑节能",
        "change_pct": 1.42
      },
      {
        "name": "旧改",
        "change_pct": 1.53
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 60,
    "hot_rank_chg": -24,
    "stock_cnt": 5789,
    "price": "11.11",
    "change": "1.28",
    "market_id": "17",
    "circulate_market_value": "4807004200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.5
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "光伏",
        "change_pct": -0.15
      },
      {
        "name": "无线耳机",
        "change_pct": 0.74
      },
      {
        "name": "华为产业链",
        "change_pct": 0.8
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.46
      }
    ]
  },
  {
    "code": "600984",
    "name": "建设机械",
    "hot_rank": 61,
    "hot_rank_chg": 865,
    "stock_cnt": 5789,
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
        "change_pct": 0.99
      },
      {
        "name": "机械",
        "change_pct": 1.03
      },
      {
        "name": "复牌股",
        "change_pct": 0.96
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "陕西国企改革",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "000931",
    "name": "中关村",
    "hot_rank": 62,
    "hot_rank_chg": 27,
    "stock_cnt": 5789,
    "price": "5.13",
    "change": "-8.39",
    "market_id": "33",
    "circulate_market_value": "3852781500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.75
      },
      {
        "name": "创新药",
        "change_pct": 1.27
      },
      {
        "name": "养老产业",
        "change_pct": 1.46
      },
      {
        "name": "医药",
        "change_pct": 1.61
      },
      {
        "name": "化学原料药",
        "change_pct": 1.5
      },
      {
        "name": "口腔",
        "change_pct": 1.28
      }
    ]
  },
  {
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 69,
    "hot_rank_chg": 65,
    "stock_cnt": 5789,
    "price": "11.05",
    "change": "3.17",
    "market_id": "17",
    "circulate_market_value": "3490515900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.16
      },
      {
        "name": "冷链",
        "change_pct": 1.67
      },
      {
        "name": "宁夏概念",
        "change_pct": 1.46
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.55
      },
      {
        "name": "首发经济",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 71,
    "hot_rank_chg": -30,
    "stock_cnt": 5789,
    "price": "12.06",
    "change": "-4.06",
    "market_id": "33",
    "circulate_market_value": "11255858600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.6
      },
      {
        "name": "新疆概念",
        "change_pct": 1.07
      },
      {
        "name": "光伏",
        "change_pct": -0.15
      },
      {
        "name": "风电",
        "change_pct": 0.18
      },
      {
        "name": "储能",
        "change_pct": 0.07
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 73,
    "hot_rank_chg": 4,
    "stock_cnt": 5789,
    "price": "11.37",
    "change": "0.35",
    "market_id": "17",
    "circulate_market_value": "20342502000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.88
      },
      {
        "name": "纯碱",
        "change_pct": 0.23
      },
      {
        "name": "食品",
        "change_pct": 1.57
      },
      {
        "name": "土壤修复",
        "change_pct": 0.85
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.57
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.08
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "000925",
    "name": "众合科技",
    "hot_rank": 76,
    "hot_rank_chg": 41,
    "stock_cnt": 5789,
    "price": "8.22",
    "change": "-8.36",
    "market_id": "33",
    "circulate_market_value": "5516873900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.86
      },
      {
        "name": "半导体",
        "change_pct": -1.59
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.48
      },
      {
        "name": "一带一路",
        "change_pct": 0.99
      },
      {
        "name": "人工智能",
        "change_pct": 0.92
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.61
      },
      {
        "name": "高铁轨交",
        "change_pct": 0.95
      },
      {
        "name": "磁悬浮",
        "change_pct": 0.88
      },
      {
        "name": "大数据",
        "change_pct": 1.23
      },
      {
        "name": "智慧城市",
        "change_pct": 1.16
      },
      {
        "name": "高校系",
        "change_pct": -0.59
      },
      {
        "name": "机器人",
        "change_pct": 0.57
      },
      {
        "name": "智能制造",
        "change_pct": 0.45
      },
      {
        "name": "工业互联网",
        "change_pct": 0.82
      },
      {
        "name": "数字经济",
        "change_pct": 1.28
      },
      {
        "name": "国产芯片",
        "change_pct": -0.98
      },
      {
        "name": "腾讯概念股",
        "change_pct": 1.31
      },
      {
        "name": "激光雷达",
        "change_pct": -0.49
      },
      {
        "name": "元宇宙",
        "change_pct": 1.26
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.32
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.57
      },
      {
        "name": "数据要素",
        "change_pct": 1.44
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.11
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 1.35
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.81
      },
      {
        "name": "华为产业链",
        "change_pct": 0.8
      },
      {
        "name": "时空大数据",
        "change_pct": 0.82
      },
      {
        "name": "多模态",
        "change_pct": 0.56
      },
      {
        "name": "低空经济",
        "change_pct": 0.71
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 78,
    "hot_rank_chg": 8,
    "stock_cnt": 5789,
    "price": "10.02",
    "change": "0.30",
    "market_id": "33",
    "circulate_market_value": "2850505700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.05
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.47
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "教育",
        "change_pct": 1.47
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.17
      },
      {
        "name": "职业教育",
        "change_pct": 1.49
      },
      {
        "name": "在线教育",
        "change_pct": 1.41
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 1.79
      },
      {
        "name": "华为产业链",
        "change_pct": 0.8
      },
      {
        "name": "智谱AI",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 80,
    "hot_rank_chg": 28,
    "stock_cnt": 5789,
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
        "change_pct": 3.05
      },
      {
        "name": "转基因",
        "change_pct": 4.1
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.01
      },
      {
        "name": "大农业",
        "change_pct": 1.47
      },
      {
        "name": "人造肉",
        "change_pct": 2.5
      },
      {
        "name": "大豆",
        "change_pct": 3.0
      }
    ]
  },
  {
    "code": "000723",
    "name": "美锦能源",
    "hot_rank": 83,
    "hot_rank_chg": 24,
    "stock_cnt": 5789,
    "price": "3.88",
    "change": "-0.26",
    "market_id": "33",
    "circulate_market_value": "17053283000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.22
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.48
      },
      {
        "name": "新能源整车",
        "change_pct": 1.44
      },
      {
        "name": "重卡",
        "change_pct": 1.36
      },
      {
        "name": "天然气",
        "change_pct": 1.05
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 0.44
      },
      {
        "name": "汽车整车",
        "change_pct": 1.02
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.04
      },
      {
        "name": "机器人",
        "change_pct": 0.57
      },
      {
        "name": "煤化工",
        "change_pct": 0.8
      },
      {
        "name": "乙二醇",
        "change_pct": 1.26
      },
      {
        "name": "碳基材料",
        "change_pct": -0.19
      },
      {
        "name": "超级电容",
        "change_pct": -0.21
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 85,
    "hot_rank_chg": 19,
    "stock_cnt": 5789,
    "price": "6.91",
    "change": "3.91",
    "market_id": "17",
    "circulate_market_value": "7477992800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.7
      },
      {
        "name": "农业种植",
        "change_pct": 3.05
      },
      {
        "name": "化肥",
        "change_pct": 0.79
      },
      {
        "name": "转基因",
        "change_pct": 4.1
      },
      {
        "name": "土地流转",
        "change_pct": 1.78
      },
      {
        "name": "农垦",
        "change_pct": 2.04
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.01
      },
      {
        "name": "大农业",
        "change_pct": 1.47
      },
      {
        "name": "国企改革",
        "change_pct": 0.96
      },
      {
        "name": "大豆",
        "change_pct": 3.0
      }
    ]
  },
  {
    "code": "600844",
    "name": "金煤科技",
    "hot_rank": 88,
    "hot_rank_chg": 883,
    "stock_cnt": 5789,
    "price": "3.73",
    "change": "4.19",
    "market_id": "17",
    "circulate_market_value": "3068785300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "内蒙古概念",
        "change_pct": -0.06
      },
      {
        "name": "煤化工",
        "change_pct": 0.8
      },
      {
        "name": "乙二醇",
        "change_pct": 1.26
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.65
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 89,
    "hot_rank_chg": -16,
    "stock_cnt": 5789,
    "price": "12.77",
    "change": "0.39",
    "market_id": "17",
    "circulate_market_value": "16386446000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": 0.64
      },
      {
        "name": "智能制造",
        "change_pct": 0.45
      },
      {
        "name": "工业互联网",
        "change_pct": 0.82
      },
      {
        "name": "培育钻石",
        "change_pct": -0.52
      },
      {
        "name": "金刚线",
        "change_pct": -1.13
      },
      {
        "name": "国资入股",
        "change_pct": 0.84
      },
      {
        "name": "深地经济",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 95,
    "hot_rank_chg": -31,
    "stock_cnt": 5789,
    "price": "11.67",
    "change": "1.39",
    "market_id": "33",
    "circulate_market_value": "6998615700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.99
      },
      {
        "name": "金融科技",
        "change_pct": 1.96
      },
      {
        "name": "移动支付",
        "change_pct": 1.63
      },
      {
        "name": "物联网",
        "change_pct": 0.92
      },
      {
        "name": "数字经济",
        "change_pct": 1.28
      },
      {
        "name": "电子身份证",
        "change_pct": 1.98
      },
      {
        "name": "ETC",
        "change_pct": 1.03
      },
      {
        "name": "数字人民币",
        "change_pct": 2.1
      },
      {
        "name": "智慧政务",
        "change_pct": 1.44
      },
      {
        "name": "eSIM",
        "change_pct": 1.77
      },
      {
        "name": "华为产业链",
        "change_pct": 0.8
      },
      {
        "name": "区块链",
        "change_pct": 1.66
      },
      {
        "name": "RWA",
        "change_pct": 2.47
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "603.53", "change": "0.07", "market_id": "17", "circulate_market_value": "18158842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 3, "hot_rank_chg": 11, "stock_cnt": 5789, "price": "16.20", "change": "4.05", "market_id": "33", "circulate_market_value": "26297859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 4, "hot_rank_chg": 17, "stock_cnt": 5789, "price": "12.33", "change": "9.99", "market_id": "33", "circulate_market_value": "6138428900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 1.75}, {"name": "优化生育（三孩）", "change_pct": 1.65}, {"name": "农业种植", "change_pct": 3.05}, {"name": "医药", "change_pct": 1.61}, {"name": "流感", "change_pct": 1.98}, {"name": "大农业", "change_pct": 1.47}]}, {"code": "600127", "name": "金健米业", "hot_rank": 5, "hot_rank_chg": 5, "stock_cnt": 5789, "price": "9.31", "change": "10.05", "market_id": "17", "circulate_market_value": "5975001800.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "粮油食品", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.83}, {"name": "农业种植", "change_pct": 3.05}, {"name": "湖南国企改革", "change_pct": 1.07}, {"name": "乡村振兴", "change_pct": 2.01}, {"name": "休闲食品", "change_pct": 1.7}, {"name": "食品", "change_pct": 1.57}, {"name": "食品安全", "change_pct": 0.74}, {"name": "社区团购", "change_pct": 2.15}, {"name": "大农业", "change_pct": 1.47}, {"name": "预制菜", "change_pct": 2.18}, {"name": "人造肉", "change_pct": 2.5}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "10.66", "change": "-6.98", "market_id": "33", "circulate_market_value": "24757591000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -4.61}, {"name": "有色 · 铜", "change_pct": -2.57}, {"name": "有色 · 锑", "change_pct": -4.43}, {"name": "湖南国企改革", "change_pct": 1.07}, {"name": "有色 · 锌", "change_pct": -4.37}, {"name": "有色金属", "change_pct": -1.27}, {"name": "国企改革", "change_pct": 0.96}, {"name": "白银", "change_pct": -5.32}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 7, "hot_rank_chg": 38, "stock_cnt": 5789, "price": "15.48", "change": "10.02", "market_id": "33", "circulate_market_value": "7072042000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数字人民币"}, {"code": "600613", "name": "神奇制药", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "9.91", "change": "0.10", "market_id": "17", "circulate_market_value": "4750061000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.75}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "医药商业", "change_pct": 2.08}, {"name": "医药", "change_pct": 1.61}, {"name": "流感", "change_pct": 1.98}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "8.27", "change": "0.61", "market_id": "17", "circulate_market_value": "20828077000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.62}, {"name": "工业大麻", "change_pct": 1.18}, {"name": "中药", "change_pct": 1.75}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "保健品", "change_pct": 1.68}, {"name": "民营医院", "change_pct": 1.53}, {"name": "医药", "change_pct": 1.61}, {"name": "化学原料药", "change_pct": 1.5}, {"name": "流感", "change_pct": 1.98}, {"name": "振兴东北", "change_pct": 1.44}, {"name": "食品", "change_pct": 1.57}]}, {"code": "002176", "name": "江特电机", "hot_rank": 10, "hot_rank_chg": 393, "stock_cnt": 5789, "price": "9.47", "change": "3.50", "market_id": "33", "circulate_market_value": "16096733000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.5}, {"name": "锂电池", "change_pct": -1.08}, {"name": "大飞机", "change_pct": 0.33}, {"name": "军民融合", "change_pct": 0.57}, {"name": "风电", "change_pct": 0.18}, {"name": "军工", "change_pct": 0.56}, {"name": "新能源汽车", "change_pct": -0.04}, {"name": "机器人", "change_pct": 0.57}, {"name": "新能源车零部件", "change_pct": 0.68}, {"name": "固态电池", "change_pct": -1.28}, {"name": "飞行汽车/eVTOL", "change_pct": 0.92}, {"name": "锂矿/碳酸锂", "change_pct": -2.65}]}, {"code": "000017", "name": "深中华A", "hot_rank": 11, "hot_rank_chg": 54, "stock_cnt": 5789, "price": "8.60", "change": "9.97", "market_id": "33", "circulate_market_value": "3791068800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.84}, {"name": "锂电池", "change_pct": -1.08}, {"name": "新能源汽车", "change_pct": -0.04}, {"name": "两轮车", "change_pct": 0.45}, {"name": "珠宝饰品", "change_pct": 0.37}]}, {"code": "600460", "name": "士兰微", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "34.05", "change": "-4.25", "market_id": "17", "circulate_market_value": "56661646000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "842.75", "change": "-3.16", "market_id": "33", "circulate_market_value": "935400480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 14, "hot_rank_chg": 5, "stock_cnt": 5789, "price": "20.73", "change": "-1.52", "market_id": "33", "circulate_market_value": "9376983300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 15, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "14.42", "change": "0.28", "market_id": "17", "circulate_market_value": "9810209700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 16, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "56.00", "change": "-1.06", "market_id": "17", "circulate_market_value": "252170180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603958", "name": "哈森股份", "hot_rank": 17, "hot_rank_chg": 22, "stock_cnt": 5789, "price": "23.97", "change": "6.01", "market_id": "17", "circulate_market_value": "5258059200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 18, "hot_rank_chg": -6, "stock_cnt": 5789, "price": "62.72", "change": "3.79", "market_id": "17", "circulate_market_value": "153892690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 19, "hot_rank_chg": 29, "stock_cnt": 5789, "price": "15.98", "change": "-1.11", "market_id": "17", "circulate_market_value": "35465257000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 20, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "387.81", "change": "1.61", "market_id": "17", "circulate_market_value": "259247860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 21, "hot_rank_chg": 51, "stock_cnt": 5789, "price": "9.08", "change": "4.85", "market_id": "17", "circulate_market_value": "6435238500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002491", "name": "通鼎互联", "hot_rank": 22, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "21.27", "change": "2.21", "market_id": "33", "circulate_market_value": "25023491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 23, "hot_rank_chg": 0, "stock_cnt": 5789, "price": "29.44", "change": "3.66", "market_id": "17", "circulate_market_value": "11805440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 24, "hot_rank_chg": 59, "stock_cnt": 5789, "price": "4.59", "change": "3.38", "market_id": "33", "circulate_market_value": "3511996000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.75}, {"name": "股权转让", "change_pct": 0.5}, {"name": "优化生育（三孩）", "change_pct": 1.65}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "医药商业", "change_pct": 2.08}, {"name": "保健品", "change_pct": 1.68}, {"name": "民营医院", "change_pct": 1.53}, {"name": "医药", "change_pct": 1.61}, {"name": "食品", "change_pct": 1.57}, {"name": "辅助生殖", "change_pct": 0.88}, {"name": "口腔", "change_pct": 1.28}, {"name": "医美", "change_pct": 2.15}, {"name": "新冠病毒防治", "change_pct": 1.11}]}, {"code": "000725", "name": "京东方A", "hot_rank": 25, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "5.70", "change": "-0.87", "market_id": "33", "circulate_market_value": "201592660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -0.18}, {"name": "手机产业链", "change_pct": 0.36}, {"name": "超高清视频", "change_pct": 0.84}, {"name": "苹果产业链", "change_pct": -0.19}, {"name": "电竞", "change_pct": 1.58}, {"name": "半导体", "change_pct": -1.59}, {"name": "人工智能", "change_pct": 0.92}, {"name": "互联网医疗", "change_pct": 1.3}, {"name": "VR&AR", "change_pct": 0.63}, {"name": "OLED", "change_pct": -1.21}, {"name": "京津冀", "change_pct": 1.37}, {"name": "物联网", "change_pct": 0.92}, {"name": "指纹识别", "change_pct": 0.77}, {"name": "汽车零部件", "change_pct": 1.02}, {"name": "白马股", "change_pct": 0.44}, {"name": "智能制造", "change_pct": 0.45}, {"name": "小米概念股", "change_pct": 0.31}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "液晶面板/LCD", "change_pct": -0.67}, {"name": "全息概念", "change_pct": 0.97}, {"name": "理想汽车概念股", "change_pct": 0.94}, {"name": "MicroLED", "change_pct": -0.13}, {"name": "钙钛矿电池", "change_pct": -0.68}, {"name": "智能手表", "change_pct": 0.82}, {"name": "MiniLED", "change_pct": -0.0}, {"name": "传感器", "change_pct": 0.06}, {"name": "大硅片", "change_pct": -3.1}, {"name": "AI PC", "change_pct": 0.34}, {"name": "华为产业链", "change_pct": 0.8}, {"name": "回购", "change_pct": 0.46}, {"name": "光电共封装CPO", "change_pct": -0.87}, {"name": "智能眼镜/MR头显", "change_pct": 0.24}, {"name": "玻璃基板封装", "change_pct": -1.22}]}, {"code": "603580", "name": "艾艾精工", "hot_rank": 26, "hot_rank_chg": 33, "stock_cnt": 5789, "price": "73.67", "change": "1.20", "market_id": "17", "circulate_market_value": "9626694600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 27, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "14.77", "change": "4.09", "market_id": "17", "circulate_market_value": "5679768600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 28, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "19.80", "change": "-2.46", "market_id": "17", "circulate_market_value": "41412535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 29, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "39.05", "change": "-2.06", "market_id": "17", "circulate_market_value": "155090470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002445", "name": "中南文化", "hot_rank": 30, "hot_rank_chg": 93, "stock_cnt": 5789, "price": "3.71", "change": "10.09", "market_id": "33", "circulate_market_value": "8778803200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "重组", "xgb_concepts": [{"name": "海工装备", "change_pct": 0.47}, {"name": "VR&AR", "change_pct": 0.63}, {"name": "影视", "change_pct": 2.3}, {"name": "光伏", "change_pct": -0.15}, {"name": "复牌股", "change_pct": 0.96}, {"name": "江苏国企改革", "change_pct": 1.03}, {"name": "独角兽", "change_pct": 0.85}, {"name": "知识产权", "change_pct": 1.95}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "600584", "name": "长电科技", "hot_rank": 31, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "73.54", "change": "-0.35", "market_id": "17", "circulate_market_value": "131593547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 32, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "7.65", "change": "-0.78", "market_id": "17", "circulate_market_value": "8711493300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.99}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "光伏", "change_pct": -0.15}, {"name": "特高压", "change_pct": 0.26}, {"name": "智能电网", "change_pct": 0.57}]}, {"code": "300502", "name": "新易盛", "hot_rank": 33, "hot_rank_chg": 4, "stock_cnt": 5789, "price": "401.20", "change": "-2.62", "market_id": "33", "circulate_market_value": "503202350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 34, "hot_rank_chg": -1, "stock_cnt": 5789, "price": "50.82", "change": "-3.24", "market_id": "17", "circulate_market_value": "43021840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 35, "hot_rank_chg": 22, "stock_cnt": 5789, "price": "67.80", "change": "-3.12", "market_id": "17", "circulate_market_value": "28229730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 36, "hot_rank_chg": -19, "stock_cnt": 5789, "price": "37.67", "change": "-1.26", "market_id": "17", "circulate_market_value": "12128729800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 37, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "50.97", "change": "-1.81", "market_id": "33", "circulate_market_value": "58487564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5789, "price": "92.89", "change": "-2.60", "market_id": "33", "circulate_market_value": "60660479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 39, "hot_rank_chg": -7, "stock_cnt": 5789, "price": "3.50", "change": "0.86", "market_id": "33", "circulate_market_value": "16351121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.49}, {"name": "体育产业", "change_pct": 1.11}, {"name": "股权转让", "change_pct": 0.5}, {"name": "房地产", "change_pct": 1.64}, {"name": "云计算数据中心", "change_pct": 0.61}, {"name": "京津冀", "change_pct": 1.37}, {"name": "旅游", "change_pct": 2.34}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "内存", "change_pct": -1.24}, {"name": "闪存", "change_pct": -0.7}, {"name": "IP经济/谷子经济", "change_pct": 1.55}]}, {"code": "600508", "name": "上海能源", "hot_rank": 40, "hot_rank_chg": 129, "stock_cnt": 5789, "price": "10.87", "change": "10.02", "market_id": "17", "circulate_market_value": "10998322500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.22}, {"name": "央企改革", "change_pct": 0.7}, {"name": "破净股", "change_pct": 1.22}, {"name": "超超临界发电", "change_pct": 0.86}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "002384", "name": "东山精密", "hot_rank": 41, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "190.97", "change": "-1.36", "market_id": "33", "circulate_market_value": "264745860000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 42, "hot_rank_chg": 16, "stock_cnt": 5789, "price": "4.25", "change": "7.87", "market_id": "33", "circulate_market_value": "8925653900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.75}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "维生素", "change_pct": 2.41}, {"name": "基因测序", "change_pct": 0.79}, {"name": "民营医院", "change_pct": 1.53}, {"name": "医药", "change_pct": 1.61}, {"name": "化学原料药", "change_pct": 1.5}, {"name": "PD-1抑制剂", "change_pct": 1.03}]}, {"code": "601899", "name": "紫金矿业", "hot_rank": 43, "hot_rank_chg": -14, "stock_cnt": 5789, "price": "33.44", "change": "-3.19", "market_id": "17", "circulate_market_value": "688923960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 44, "hot_rank_chg": -9, "stock_cnt": 5789, "price": "7.08", "change": "-3.01", "market_id": "17", "circulate_market_value": "16926952000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.22}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "国企改革", "change_pct": 0.96}, {"name": "河南国企改革", "change_pct": 0.49}]}, {"code": "000938", "name": "紫光股份", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5789, "price": "34.92", "change": "1.25", "market_id": "33", "circulate_market_value": "99873738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 46, "hot_rank_chg": 139, "stock_cnt": 5789, "price": "38.56", "change": "-1.46", "market_id": "17", "circulate_market_value": "6766512800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 47, "hot_rank_chg": -5, "stock_cnt": 5789, "price": "5.50", "change": "10.00", "market_id": "33", "circulate_market_value": "14543339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.64}, {"name": "云计算数据中心", "change_pct": 0.61}, {"name": "装修装饰", "change_pct": 1.53}, {"name": "装配式建筑", "change_pct": 1.84}, {"name": "航天", "change_pct": 0.22}, {"name": "旧改", "change_pct": 1.53}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 48, "hot_rank_chg": -20, "stock_cnt": 5789, "price": "391.33", "change": "3.20", "market_id": "17", "circulate_market_value": "159012370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300189", "name": "神农种业", "hot_rank": 49, "hot_rank_chg": 38, "stock_cnt": 5789, "price": "6.28", "change": "7.53", "market_id": "33", "circulate_market_value": "5565652700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.05}, {"name": "土地流转", "change_pct": 1.78}, {"name": "海南概念", "change_pct": 1.64}, {"name": "自由贸易港", "change_pct": 1.61}, {"name": "海南自由贸易港", "change_pct": 2.14}, {"name": "大农业", "change_pct": 1.47}, {"name": "水产养殖", "change_pct": 2.88}, {"name": "自贸区", "change_pct": 1.45}]}, {"code": "002407", "name": "多氟多", "hot_rank": 50, "hot_rank_chg": -12, "stock_cnt": 5789, "price": "33.43", "change": "-3.30", "market_id": "33", "circulate_market_value": "36135099000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 51, "hot_rank_chg": -26, "stock_cnt": 5789, "price": "20.70", "change": "-7.34", "market_id": "33", "circulate_market_value": "19224234000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 52, "hot_rank_chg": -34, "stock_cnt": 5789, "price": "36.32", "change": "-8.88", "market_id": "33", "circulate_market_value": "24215138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002017", "name": "东信和平", "hot_rank": 53, "hot_rank_chg": 15, "stock_cnt": 5789, "price": "16.73", "change": "4.69", "market_id": "33", "circulate_market_value": "9706284100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 54, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "119.79", "change": "-1.63", "market_id": "17", "circulate_market_value": "43211056000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 55, "hot_rank_chg": -15, "stock_cnt": 5789, "price": "10.85", "change": "-1.99", "market_id": "17", "circulate_market_value": "18826713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.44}, {"name": "核电", "change_pct": 0.55}, {"name": "锂电池", "change_pct": -1.08}, {"name": "铜箔/覆铜板", "change_pct": -1.21}, {"name": "PCB板", "change_pct": -0.95}, {"name": "中科院系", "change_pct": 0.83}, {"name": "新能源汽车", "change_pct": -0.04}, {"name": "宁德时代概念股", "change_pct": -0.73}, {"name": "固态电池", "change_pct": -1.28}, {"name": "PET复合铜箔", "change_pct": -1.5}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 56, "hot_rank_chg": 181, "stock_cnt": 5789, "price": "4.35", "change": "10.13", "market_id": "33", "circulate_market_value": "2804159800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.99}, {"name": "装修装饰", "change_pct": 1.53}, {"name": "装配式建筑", "change_pct": 1.84}, {"name": "家具家居", "change_pct": 1.14}, {"name": "复牌股", "change_pct": 0.96}, {"name": "智能制造", "change_pct": 0.45}, {"name": "3D打印", "change_pct": -0.06}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": 1.92}, {"name": "旧改", "change_pct": 1.53}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 57, "hot_rank_chg": -30, "stock_cnt": 5789, "price": "54.32", "change": "-6.88", "market_id": "33", "circulate_market_value": "12692369100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 58, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "251.88", "change": "0.95", "market_id": "33", "circulate_market_value": "274143180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 59, "hot_rank_chg": 2, "stock_cnt": 5789, "price": "8.08", "change": "0.12", "market_id": "33", "circulate_market_value": "5878880300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 1.67}, {"name": "装配式建筑", "change_pct": 1.84}, {"name": "风电", "change_pct": 0.18}, {"name": "环氧丙烷", "change_pct": -0.22}, {"name": "乡村振兴", "change_pct": 2.01}, {"name": "建筑节能", "change_pct": 1.42}, {"name": "旧改", "change_pct": 1.53}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 60, "hot_rank_chg": -24, "stock_cnt": 5789, "price": "11.11", "change": "1.28", "market_id": "17", "circulate_market_value": "4807004200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.5}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "光伏", "change_pct": -0.15}, {"name": "无线耳机", "change_pct": 0.74}, {"name": "华为产业链", "change_pct": 0.8}, {"name": "光伏胶膜", "change_pct": 0.46}]}, {"code": "600984", "name": "建设机械", "hot_rank": 61, "hot_rank_chg": 865, "stock_cnt": 5789, "price": "4.94", "change": "10.02", "market_id": "17", "circulate_market_value": "6209797000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "重大重组", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.99}, {"name": "机械", "change_pct": 1.03}, {"name": "复牌股", "change_pct": 0.96}, {"name": "国企改革", "change_pct": 0.96}, {"name": "陕西国企改革", "change_pct": 0.98}]}, {"code": "000931", "name": "中关村", "hot_rank": 62, "hot_rank_chg": 27, "stock_cnt": 5789, "price": "5.13", "change": "-8.39", "market_id": "33", "circulate_market_value": "3852781500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.75}, {"name": "创新药", "change_pct": 1.27}, {"name": "养老产业", "change_pct": 1.46}, {"name": "医药", "change_pct": 1.61}, {"name": "化学原料药", "change_pct": 1.5}, {"name": "口腔", "change_pct": 1.28}]}, {"code": "688835", "name": "高凯技术", "hot_rank": 63, "hot_rank_chg": 1678, "stock_cnt": 5789, "price": "249.00", "change": "305.80", "market_id": "17", "circulate_market_value": "4676913500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 64, "hot_rank_chg": -10, "stock_cnt": 5789, "price": "31.14", "change": "1.04", "market_id": "33", "circulate_market_value": "24365031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 65, "hot_rank_chg": 375, "stock_cnt": 5789, "price": "18.43", "change": "4.30", "market_id": "33", "circulate_market_value": "7756542500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 66, "hot_rank_chg": -19, "stock_cnt": 5789, "price": "19.19", "change": "5.73", "market_id": "17", "circulate_market_value": "3070400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 67, "hot_rank_chg": -23, "stock_cnt": 5789, "price": "159.29", "change": "2.21", "market_id": "17", "circulate_market_value": "393968810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 68, "hot_rank_chg": -18, "stock_cnt": 5789, "price": "46.56", "change": "-4.53", "market_id": "17", "circulate_market_value": "77471714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 69, "hot_rank_chg": 65, "stock_cnt": 5789, "price": "11.05", "change": "3.17", "market_id": "17", "circulate_market_value": "3490515900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 2.16}, {"name": "冷链", "change_pct": 1.67}, {"name": "宁夏概念", "change_pct": 1.46}, {"name": "IP经济/谷子经济", "change_pct": 1.55}, {"name": "首发经济", "change_pct": 1.78}]}, {"code": "001309", "name": "德明利", "hot_rank": 70, "hot_rank_chg": -21, "stock_cnt": 5789, "price": "396.94", "change": "-0.85", "market_id": "33", "circulate_market_value": "65506633000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 71, "hot_rank_chg": -30, "stock_cnt": 5789, "price": "12.06", "change": "-4.06", "market_id": "33", "circulate_market_value": "11255858600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.64}, {"name": "新疆国企改革", "change_pct": 0.6}, {"name": "新疆概念", "change_pct": 1.07}, {"name": "光伏", "change_pct": -0.15}, {"name": "风电", "change_pct": 0.18}, {"name": "储能", "change_pct": 0.07}, {"name": "国企改革", "change_pct": 0.96}]}, {"code": "002906", "name": "华阳集团", "hot_rank": 72, "hot_rank_chg": 196, "stock_cnt": 5789, "price": "27.53", "change": "-2.48", "market_id": "33", "circulate_market_value": "14445028000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 73, "hot_rank_chg": 4, "stock_cnt": 5789, "price": "11.37", "change": "0.35", "market_id": "17", "circulate_market_value": "20342502000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.88}, {"name": "纯碱", "change_pct": 0.23}, {"name": "食品", "change_pct": 1.57}, {"name": "土壤修复", "change_pct": 0.85}, {"name": "东数西算/算力", "change_pct": 0.57}, {"name": "OpenClaw概念", "change_pct": -0.08}, {"name": "DeepSeek概念股", "change_pct": 0.65}]}, {"code": "603221", "name": "爱丽家居", "hot_rank": 74, "hot_rank_chg": -28, "stock_cnt": 5789, "price": "26.80", "change": "-3.07", "market_id": "17", "circulate_market_value": "6492836000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 75, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "16.65", "change": "-1.36", "market_id": "33", "circulate_market_value": "55378342000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000925", "name": "众合科技", "hot_rank": 76, "hot_rank_chg": 41, "stock_cnt": 5789, "price": "8.22", "change": "-8.36", "market_id": "33", "circulate_market_value": "5516873900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.86}, {"name": "半导体", "change_pct": -1.59}, {"name": "无人驾驶", "change_pct": 0.48}, {"name": "一带一路", "change_pct": 0.99}, {"name": "人工智能", "change_pct": 0.92}, {"name": "云计算数据中心", "change_pct": 0.61}, {"name": "高铁轨交", "change_pct": 0.95}, {"name": "磁悬浮", "change_pct": 0.88}, {"name": "大数据", "change_pct": 1.23}, {"name": "智慧城市", "change_pct": 1.16}, {"name": "高校系", "change_pct": -0.59}, {"name": "机器人", "change_pct": 0.57}, {"name": "智能制造", "change_pct": 0.45}, {"name": "工业互联网", "change_pct": 0.82}, {"name": "数字经济", "change_pct": 1.28}, {"name": "国产芯片", "change_pct": -0.98}, {"name": "腾讯概念股", "change_pct": 1.31}, {"name": "激光雷达", "change_pct": -0.49}, {"name": "元宇宙", "change_pct": 1.26}, {"name": "虚拟数字人", "change_pct": 1.32}, {"name": "东数西算/算力", "change_pct": 0.57}, {"name": "数据要素", "change_pct": 1.44}, {"name": "新冠病毒防治", "change_pct": 1.11}, {"name": "华为云·鲲鹏", "change_pct": 1.35}, {"name": "智慧灯杆", "change_pct": 0.81}, {"name": "华为产业链", "change_pct": 0.8}, {"name": "时空大数据", "change_pct": 0.82}, {"name": "多模态", "change_pct": 0.56}, {"name": "低空经济", "change_pct": 0.71}]}, {"code": "001337", "name": "四川黄金", "hot_rank": 77, "hot_rank_chg": -14, "stock_cnt": 5789, "price": "54.98", "change": "-2.86", "market_id": "33", "circulate_market_value": "23091600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 78, "hot_rank_chg": 8, "stock_cnt": 5789, "price": "10.02", "change": "0.30", "market_id": "33", "circulate_market_value": "2850505700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.05}, {"name": "ST摘帽", "change_pct": 1.47}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "教育", "change_pct": 1.47}, {"name": "阿里巴巴概念股", "change_pct": 1.17}, {"name": "职业教育", "change_pct": 1.49}, {"name": "在线教育", "change_pct": 1.41}, {"name": "华为鸿蒙", "change_pct": 1.79}, {"name": "华为产业链", "change_pct": 0.8}, {"name": "智谱AI", "change_pct": 1.38}]}, {"code": "600547", "name": "山东黄金", "hot_rank": 79, "hot_rank_chg": -9, "stock_cnt": 5789, "price": "34.52", "change": "-5.42", "market_id": "17", "circulate_market_value": "124770584000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002041", "name": "登海种业", "hot_rank": 80, "hot_rank_chg": 28, "stock_cnt": 5789, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "9864800000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "粮食概念", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.05}, {"name": "转基因", "change_pct": 4.1}, {"name": "乡村振兴", "change_pct": 2.01}, {"name": "大农业", "change_pct": 1.47}, {"name": "人造肉", "change_pct": 2.5}, {"name": "大豆", "change_pct": 3.0}]}, {"code": "600522", "name": "中天科技", "hot_rank": 81, "hot_rank_chg": -3, "stock_cnt": 5789, "price": "33.21", "change": "2.09", "market_id": "17", "circulate_market_value": "113344058000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 82, "hot_rank_chg": -30, "stock_cnt": 5789, "price": "54.66", "change": "-5.51", "market_id": "33", "circulate_market_value": "20142390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000723", "name": "美锦能源", "hot_rank": 83, "hot_rank_chg": 24, "stock_cnt": 5789, "price": "3.88", "change": "-0.26", "market_id": "33", "circulate_market_value": "17053283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.22}, {"name": "无人驾驶", "change_pct": 0.48}, {"name": "新能源整车", "change_pct": 1.44}, {"name": "重卡", "change_pct": 1.36}, {"name": "天然气", "change_pct": 1.05}, {"name": "氢能源/燃料电池", "change_pct": 0.44}, {"name": "汽车整车", "change_pct": 1.02}, {"name": "新能源汽车", "change_pct": -0.04}, {"name": "机器人", "change_pct": 0.57}, {"name": "煤化工", "change_pct": 0.8}, {"name": "乙二醇", "change_pct": 1.26}, {"name": "碳基材料", "change_pct": -0.19}, {"name": "超级电容", "change_pct": -0.21}]}, {"code": "603118", "name": "共进股份", "hot_rank": 84, "hot_rank_chg": -28, "stock_cnt": 5789, "price": "16.16", "change": "0.94", "market_id": "17", "circulate_market_value": "12722386700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 85, "hot_rank_chg": 19, "stock_cnt": 5789, "price": "6.91", "change": "3.91", "market_id": "17", "circulate_market_value": "7477992800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.7}, {"name": "农业种植", "change_pct": 3.05}, {"name": "化肥", "change_pct": 0.79}, {"name": "转基因", "change_pct": 4.1}, {"name": "土地流转", "change_pct": 1.78}, {"name": "农垦", "change_pct": 2.04}, {"name": "乡村振兴", "change_pct": 2.01}, {"name": "大农业", "change_pct": 1.47}, {"name": "国企改革", "change_pct": 0.96}, {"name": "大豆", "change_pct": 3.0}]}, {"code": "002156", "name": "通富微电", "hot_rank": 86, "hot_rank_chg": -17, "stock_cnt": 5789, "price": "60.71", "change": "-0.86", "market_id": "33", "circulate_market_value": "92124524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 87, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "60.00", "change": "-0.66", "market_id": "17", "circulate_market_value": "1190645540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600844", "name": "金煤科技", "hot_rank": 88, "hot_rank_chg": 883, "stock_cnt": 5789, "price": "3.73", "change": "4.19", "market_id": "17", "circulate_market_value": "3068785300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "内蒙古概念", "change_pct": -0.06}, {"name": "煤化工", "change_pct": 0.8}, {"name": "乙二醇", "change_pct": 1.26}, {"name": "可降解塑料", "change_pct": 0.65}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 89, "hot_rank_chg": -16, "stock_cnt": 5789, "price": "12.77", "change": "0.39", "market_id": "17", "circulate_market_value": "16386446000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": 0.64}, {"name": "智能制造", "change_pct": 0.45}, {"name": "工业互联网", "change_pct": 0.82}, {"name": "培育钻石", "change_pct": -0.52}, {"name": "金刚线", "change_pct": -1.13}, {"name": "国资入股", "change_pct": 0.84}, {"name": "深地经济", "change_pct": 1.18}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 90, "hot_rank_chg": -30, "stock_cnt": 5789, "price": "14.10", "change": "-0.49", "market_id": "17", "circulate_market_value": "20765166000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 91, "hot_rank_chg": -11, "stock_cnt": 5789, "price": "38.16", "change": "0.29", "market_id": "17", "circulate_market_value": "55789722000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 92, "hot_rank_chg": -26, "stock_cnt": 5789, "price": "35.28", "change": "-4.70", "market_id": "17", "circulate_market_value": "29240458000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 93, "hot_rank_chg": -31, "stock_cnt": 5789, "price": "63.01", "change": "-5.62", "market_id": "33", "circulate_market_value": "91582011000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 94, "hot_rank_chg": 31, "stock_cnt": 5789, "price": "60.23", "change": "10.01", "market_id": "33", "circulate_market_value": "68255051000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Q2回升"}, {"code": "002104", "name": "恒宝股份", "hot_rank": 95, "hot_rank_chg": -31, "stock_cnt": 5789, "price": "11.67", "change": "1.39", "market_id": "33", "circulate_market_value": "6998615700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.99}, {"name": "金融科技", "change_pct": 1.96}, {"name": "移动支付", "change_pct": 1.63}, {"name": "物联网", "change_pct": 0.92}, {"name": "数字经济", "change_pct": 1.28}, {"name": "电子身份证", "change_pct": 1.98}, {"name": "ETC", "change_pct": 1.03}, {"name": "数字人民币", "change_pct": 2.1}, {"name": "智慧政务", "change_pct": 1.44}, {"name": "eSIM", "change_pct": 1.77}, {"name": "华为产业链", "change_pct": 0.8}, {"name": "区块链", "change_pct": 1.66}, {"name": "RWA", "change_pct": 2.47}]}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 96, "hot_rank_chg": -20, "stock_cnt": 5789, "price": "18.30", "change": "-3.63", "market_id": "17", "circulate_market_value": "319533410000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 97, "hot_rank_chg": 82, "stock_cnt": 5789, "price": "31.76", "change": "4.03", "market_id": "17", "circulate_market_value": "23001494000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 98, "hot_rank_chg": -8, "stock_cnt": 5789, "price": "126.99", "change": "0.55", "market_id": "17", "circulate_market_value": "306267990000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300313", "name": "天山生物", "hot_rank": 99, "hot_rank_chg": -46, "stock_cnt": 5789, "price": "16.85", "change": "9.70", "market_id": "33", "circulate_market_value": "3325394500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 100, "hot_rank_chg": 102, "stock_cnt": 5789, "price": "166.83", "change": "0.94", "market_id": "17", "circulate_market_value": "26157362000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};