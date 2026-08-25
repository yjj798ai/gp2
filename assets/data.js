const UPDATE_TIME = "2026-08-25 08:36";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 2.36,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续107天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 0.94,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续277天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "液冷服务器",
    "rise": 1.92,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "数字货币",
    "rise": 2.55,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "信息安全ETF",
    "code": "885866"
  },
  {
    "name": "粮食概念",
    "rise": 3.6,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "兵装重组概念",
    "rise": 3.28,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "光纤概念",
    "rise": 1.1,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续106天上榜",
    "rankChg": 0,
    "etfName": "成长ETF",
    "code": "886084"
  },
  {
    "name": "PCB概念",
    "rise": 0.67,
    "rate": 0,
    "tag": "",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "转基因",
    "rise": 3.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885877"
  },
  {
    "name": "存储芯片",
    "rise": -0.13,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续230天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "算力租赁",
    "rise": 1.63,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续141天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "黄金概念",
    "rise": -1.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI应用",
    "rise": 2.0,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续35天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "商业航天",
    "rise": 1.27,
    "rate": 0,
    "tag": "",
    "hotTag": "连续206天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.42,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续441天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "CRO概念",
    "rise": 3.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "MLCC概念",
    "rise": 0.1,
    "rate": 0,
    "tag": "",
    "hotTag": "连续17天上榜",
    "rankChg": 0,
    "etfName": "科创配置LOF",
    "code": "886112"
  },
  {
    "name": "机器人概念",
    "rise": 1.59,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续108天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "培育钻石",
    "rise": 1.98,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": 1.55,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "885887"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金直线拉升，机构改口称金价将冲击5000美元",
    "desc": "",
    "heat": 444803,
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
    "heat": 398970,
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
    "heat": 231342,
    "direction": "时空信息",
    "themes": [
      "时空信息"
    ],
    "stocks": [
      {
        "name": "合众思壮",
        "code": "002383",
        "chg": 4.302671
      }
    ]
  },
  {
    "title": "美公布多项针对伊朗经济制裁",
    "desc": "",
    "heat": 150511,
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
    "heat": 86038,
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
    "heat": 50959,
    "direction": "半导体设备",
    "themes": [
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "奥特维",
        "code": "688516",
        "chg": 2.941176
      }
    ]
  },
  {
    "title": "算力金属”价格大涨 资源保障能力“加码",
    "desc": "",
    "heat": 1365,
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
        "chg": 4.50237
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "转基因",
    "change": "+4.24%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+3.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝炎概念",
    "change": "+3.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血制品",
    "change": "+3.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乳业（奶粉）",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "邮轮游艇",
    "change": "+3.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医疗耗材供应链SPD",
    "change": "+3.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "跨境支付",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "餐饮",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+3.41%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "园林",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "热泵",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+3.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+3.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+3.13%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "眼科",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识产权",
    "change": "+3.07%",
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
    "hot_rank": 2,
    "hot_rank_chg": 19,
    "stock_cnt": 5784,
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
        "change_pct": 2.68
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.44
      },
      {
        "name": "农业种植",
        "change_pct": 3.01
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "流感",
        "change_pct": 2.96
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 3,
    "hot_rank_chg": 7,
    "stock_cnt": 5784,
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
        "change_pct": 3.72
      },
      {
        "name": "农业种植",
        "change_pct": 3.01
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.72
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.47
      },
      {
        "name": "休闲食品",
        "change_pct": 2.14
      },
      {
        "name": "食品",
        "change_pct": 2.09
      },
      {
        "name": "食品安全",
        "change_pct": 1.74
      },
      {
        "name": "社区团购",
        "change_pct": 2.72
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      },
      {
        "name": "预制菜",
        "change_pct": 2.42
      },
      {
        "name": "人造肉",
        "change_pct": 2.78
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 6,
    "hot_rank_chg": -4,
    "stock_cnt": 5784,
    "price": "8.21",
    "change": "-0.12",
    "market_id": "17",
    "circulate_market_value": "20676966000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.26
      },
      {
        "name": "工业大麻",
        "change_pct": 2.74
      },
      {
        "name": "中药",
        "change_pct": 2.68
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "保健品",
        "change_pct": 2.44
      },
      {
        "name": "民营医院",
        "change_pct": 2.35
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "化学原料药",
        "change_pct": 2.63
      },
      {
        "name": "流感",
        "change_pct": 2.96
      },
      {
        "name": "振兴东北",
        "change_pct": 1.88
      },
      {
        "name": "食品",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 8,
    "hot_rank_chg": 0,
    "stock_cnt": 5784,
    "price": "10.27",
    "change": "3.74",
    "market_id": "17",
    "circulate_market_value": "4922616200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.68
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "医药商业",
        "change_pct": 3.15
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "流感",
        "change_pct": 2.96
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 9,
    "hot_rank_chg": -5,
    "stock_cnt": 5784,
    "price": "10.77",
    "change": "-6.02",
    "market_id": "33",
    "circulate_market_value": "25013063000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": -3.98
      },
      {
        "name": "有色 · 铜",
        "change_pct": -1.49
      },
      {
        "name": "有色 · 锑",
        "change_pct": -3.63
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.72
      },
      {
        "name": "有色 · 锌",
        "change_pct": -3.51
      },
      {
        "name": "有色金属",
        "change_pct": -0.25
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      },
      {
        "name": "白银",
        "change_pct": -4.35
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 13,
    "hot_rank_chg": 45,
    "stock_cnt": 5784,
    "price": "4.30",
    "change": "9.14",
    "market_id": "33",
    "circulate_market_value": "9030661600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.68
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "维生素",
        "change_pct": 2.94
      },
      {
        "name": "基因测序",
        "change_pct": 1.75
      },
      {
        "name": "民营医院",
        "change_pct": 2.35
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "化学原料药",
        "change_pct": 2.63
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.68
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 19,
    "hot_rank_chg": -4,
    "stock_cnt": 5784,
    "price": "5.74",
    "change": "-0.17",
    "market_id": "33",
    "circulate_market_value": "203007350000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.24
      },
      {
        "name": "手机产业链",
        "change_pct": 1.53
      },
      {
        "name": "超高清视频",
        "change_pct": 1.72
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.99
      },
      {
        "name": "电竞",
        "change_pct": 2.27
      },
      {
        "name": "半导体",
        "change_pct": -0.29
      },
      {
        "name": "人工智能",
        "change_pct": 1.88
      },
      {
        "name": "互联网医疗",
        "change_pct": 2.3
      },
      {
        "name": "VR&AR",
        "change_pct": 1.79
      },
      {
        "name": "OLED",
        "change_pct": 0.04
      },
      {
        "name": "京津冀",
        "change_pct": 2.07
      },
      {
        "name": "物联网",
        "change_pct": 1.8
      },
      {
        "name": "指纹识别",
        "change_pct": 1.38
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.19
      },
      {
        "name": "白马股",
        "change_pct": 0.59
      },
      {
        "name": "智能制造",
        "change_pct": 1.55
      },
      {
        "name": "小米概念股",
        "change_pct": 1.47
      },
      {
        "name": "国产芯片",
        "change_pct": 0.31
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.39
      },
      {
        "name": "全息概念",
        "change_pct": 1.71
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.25
      },
      {
        "name": "MicroLED",
        "change_pct": 1.39
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.58
      },
      {
        "name": "智能手表",
        "change_pct": 1.72
      },
      {
        "name": "MiniLED",
        "change_pct": 1.4
      },
      {
        "name": "传感器",
        "change_pct": 1.42
      },
      {
        "name": "大硅片",
        "change_pct": -1.95
      },
      {
        "name": "AI PC",
        "change_pct": 2.03
      },
      {
        "name": "华为产业链",
        "change_pct": 1.81
      },
      {
        "name": "回购",
        "change_pct": 1.08
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 0.66
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.46
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.05
      }
    ]
  },
  {
    "code": "300189",
    "name": "神农种业",
    "hot_rank": 20,
    "hot_rank_chg": 67,
    "stock_cnt": 5784,
    "price": "6.23",
    "change": "6.68",
    "market_id": "33",
    "circulate_market_value": "5521340100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.01
      },
      {
        "name": "土地流转",
        "change_pct": 2.07
      },
      {
        "name": "海南概念",
        "change_pct": 2.16
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.82
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 2.32
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      },
      {
        "name": "水产养殖",
        "change_pct": 3.41
      },
      {
        "name": "自贸区",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 24,
    "hot_rank_chg": 48,
    "stock_cnt": 5784,
    "price": "8.74",
    "change": "0.92",
    "market_id": "17",
    "circulate_market_value": "6194271400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 30,
    "hot_rank_chg": 31,
    "stock_cnt": 5784,
    "price": "7.80",
    "change": "-3.35",
    "market_id": "33",
    "circulate_market_value": "5675156700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 2.51
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.49
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "环氧丙烷",
        "change_pct": -0.12
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.47
      },
      {
        "name": "建筑节能",
        "change_pct": 2.1
      },
      {
        "name": "旧改",
        "change_pct": 2.13
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 32,
    "hot_rank_chg": 51,
    "stock_cnt": 5784,
    "price": "4.62",
    "change": "4.05",
    "market_id": "33",
    "circulate_market_value": "3534950200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 2.68
      },
      {
        "name": "股权转让",
        "change_pct": 1.32
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.44
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "医药商业",
        "change_pct": 3.15
      },
      {
        "name": "保健品",
        "change_pct": 2.44
      },
      {
        "name": "民营医院",
        "change_pct": 2.35
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "食品",
        "change_pct": 2.09
      },
      {
        "name": "辅助生殖",
        "change_pct": 2.22
      },
      {
        "name": "口腔",
        "change_pct": 2.04
      },
      {
        "name": "医美",
        "change_pct": 3.07
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.1
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 33,
    "hot_rank_chg": 9,
    "stock_cnt": 5784,
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
        "change_pct": 1.87
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.62
      },
      {
        "name": "装修装饰",
        "change_pct": 2.5
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.49
      },
      {
        "name": "航天",
        "change_pct": 1.46
      },
      {
        "name": "旧改",
        "change_pct": 2.13
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 35,
    "hot_rank_chg": 30,
    "stock_cnt": 5784,
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
        "change_pct": 2.26
      },
      {
        "name": "锂电池",
        "change_pct": -0.15
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.98
      },
      {
        "name": "两轮车",
        "change_pct": 1.31
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.68
      }
    ]
  },
  {
    "code": "002176",
    "name": "江特电机",
    "hot_rank": 38,
    "hot_rank_chg": 365,
    "stock_cnt": 5784,
    "price": "9.35",
    "change": "2.19",
    "market_id": "33",
    "circulate_market_value": "15892761000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.32
      },
      {
        "name": "锂电池",
        "change_pct": -0.15
      },
      {
        "name": "大飞机",
        "change_pct": 1.39
      },
      {
        "name": "军民融合",
        "change_pct": 1.76
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "军工",
        "change_pct": 1.61
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.98
      },
      {
        "name": "机器人",
        "change_pct": 1.87
      },
      {
        "name": "新能源车零部件",
        "change_pct": 1.85
      },
      {
        "name": "固态电池",
        "change_pct": -0.41
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 1.86
      },
      {
        "name": "锂矿/碳酸锂",
        "change_pct": -2.33
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 40,
    "hot_rank_chg": -18,
    "stock_cnt": 5784,
    "price": "7.51",
    "change": "-2.59",
    "market_id": "17",
    "circulate_market_value": "8552067300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "光伏",
        "change_pct": 0.57
      },
      {
        "name": "特高压",
        "change_pct": 1.17
      },
      {
        "name": "智能电网",
        "change_pct": 1.58
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 43,
    "hot_rank_chg": 61,
    "stock_cnt": 5784,
    "price": "7.01",
    "change": "5.41",
    "market_id": "17",
    "circulate_market_value": "7586212600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.14
      },
      {
        "name": "农业种植",
        "change_pct": 3.01
      },
      {
        "name": "化肥",
        "change_pct": 1.09
      },
      {
        "name": "转基因",
        "change_pct": 4.24
      },
      {
        "name": "土地流转",
        "change_pct": 2.07
      },
      {
        "name": "农垦",
        "change_pct": 2.35
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.47
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      },
      {
        "name": "大豆",
        "change_pct": 3.08
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 50,
    "hot_rank_chg": -15,
    "stock_cnt": 5784,
    "price": "7.11",
    "change": "-2.60",
    "market_id": "17",
    "circulate_market_value": "16998676000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.23
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.8
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 57,
    "hot_rank_chg": -25,
    "stock_cnt": 5784,
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
        "change_pct": 1.02
      },
      {
        "name": "体育产业",
        "change_pct": 2.01
      },
      {
        "name": "股权转让",
        "change_pct": 1.32
      },
      {
        "name": "房地产",
        "change_pct": 2.16
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.62
      },
      {
        "name": "京津冀",
        "change_pct": 2.07
      },
      {
        "name": "旅游",
        "change_pct": 2.53
      },
      {
        "name": "国产芯片",
        "change_pct": 0.31
      },
      {
        "name": "内存",
        "change_pct": 0.18
      },
      {
        "name": "闪存",
        "change_pct": 0.82
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 2.27
      }
    ]
  },
  {
    "code": "002041",
    "name": "登海种业",
    "hot_rank": 60,
    "hot_rank_chg": 48,
    "stock_cnt": 5784,
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
        "change_pct": 3.01
      },
      {
        "name": "转基因",
        "change_pct": 4.24
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.47
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      },
      {
        "name": "人造肉",
        "change_pct": 2.78
      },
      {
        "name": "大豆",
        "change_pct": 3.08
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 61,
    "hot_rank_chg": -21,
    "stock_cnt": 5784,
    "price": "11.25",
    "change": "1.63",
    "market_id": "17",
    "circulate_market_value": "19520785000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 1.28
      },
      {
        "name": "核电",
        "change_pct": 1.5
      },
      {
        "name": "锂电池",
        "change_pct": -0.15
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.67
      },
      {
        "name": "PCB板",
        "change_pct": 0.7
      },
      {
        "name": "中科院系",
        "change_pct": 1.81
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.98
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.3
      },
      {
        "name": "固态电池",
        "change_pct": -0.41
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 65,
    "hot_rank_chg": 12,
    "stock_cnt": 5784,
    "price": "11.55",
    "change": "1.94",
    "market_id": "17",
    "circulate_market_value": "20664547000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.01
      },
      {
        "name": "纯碱",
        "change_pct": 0.85
      },
      {
        "name": "食品",
        "change_pct": 2.09
      },
      {
        "name": "土壤修复",
        "change_pct": 1.6
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.55
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.5
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "001258",
    "name": "立新能源",
    "hot_rank": 67,
    "hot_rank_chg": -26,
    "stock_cnt": 5784,
    "price": "12.29",
    "change": "-2.23",
    "market_id": "33",
    "circulate_market_value": "11470522600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.32
      },
      {
        "name": "新疆概念",
        "change_pct": 1.65
      },
      {
        "name": "光伏",
        "change_pct": 0.57
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "储能",
        "change_pct": 1.06
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 69,
    "hot_rank_chg": 5,
    "stock_cnt": 5784,
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
        "change_pct": 0.65
      },
      {
        "name": "化肥",
        "change_pct": 1.09
      },
      {
        "name": "保健品",
        "change_pct": 2.44
      },
      {
        "name": "民营医院",
        "change_pct": 2.35
      },
      {
        "name": "医药",
        "change_pct": 2.59
      },
      {
        "name": "煤化工",
        "change_pct": 0.85
      },
      {
        "name": "食品",
        "change_pct": 2.09
      },
      {
        "name": "大农业",
        "change_pct": 1.91
      },
      {
        "name": "干细胞",
        "change_pct": 2.69
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.48
      }
    ]
  },
  {
    "code": "000505",
    "name": "京粮控股",
    "hot_rank": 77,
    "hot_rank_chg": 93,
    "stock_cnt": 5784,
    "price": "6.98",
    "change": "4.80",
    "market_id": "33",
    "circulate_market_value": "4414014700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "饲料",
        "change_pct": 1.73
      },
      {
        "name": "京津冀",
        "change_pct": 2.07
      },
      {
        "name": "调味品",
        "change_pct": 1.01
      },
      {
        "name": "海南概念",
        "change_pct": 2.16
      },
      {
        "name": "休闲食品",
        "change_pct": 2.14
      },
      {
        "name": "食品",
        "change_pct": 2.09
      },
      {
        "name": "人造肉",
        "change_pct": 2.78
      }
    ]
  },
  {
    "code": "600508",
    "name": "上海能源",
    "hot_rank": 78,
    "hot_rank_chg": 91,
    "stock_cnt": 5784,
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
        "change_pct": 0.23
      },
      {
        "name": "央企改革",
        "change_pct": 1.14
      },
      {
        "name": "破净股",
        "change_pct": 1.37
      },
      {
        "name": "超超临界发电",
        "change_pct": 1.35
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      }
    ]
  },
  {
    "code": "603318",
    "name": "水发燃气",
    "hot_rank": 86,
    "hot_rank_chg": 257,
    "stock_cnt": 5784,
    "price": "10.24",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4700886300.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "氦气",
    "xgb_concepts": [
      {
        "name": "燃气轮机",
        "change_pct": 2.0
      },
      {
        "name": "电子特气",
        "change_pct": -0.66
      },
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "天然气",
        "change_pct": 1.49
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.48
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      },
      {
        "name": "氦气",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "002104",
    "name": "恒宝股份",
    "hot_rank": 88,
    "hot_rank_chg": -24,
    "stock_cnt": 5784,
    "price": "11.33",
    "change": "-1.56",
    "market_id": "33",
    "circulate_market_value": "6794714300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "金融科技",
        "change_pct": 2.38
      },
      {
        "name": "移动支付",
        "change_pct": 1.83
      },
      {
        "name": "物联网",
        "change_pct": 1.8
      },
      {
        "name": "数字经济",
        "change_pct": 1.98
      },
      {
        "name": "电子身份证",
        "change_pct": 2.06
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
        "change_pct": 1.99
      },
      {
        "name": "eSIM",
        "change_pct": 2.39
      },
      {
        "name": "华为产业链",
        "change_pct": 1.81
      },
      {
        "name": "区块链",
        "change_pct": 2.29
      },
      {
        "name": "RWA",
        "change_pct": 2.72
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 92,
    "hot_rank_chg": -6,
    "stock_cnt": 5784,
    "price": "10.18",
    "change": "1.90",
    "market_id": "33",
    "circulate_market_value": "2896022800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 1.82
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.62
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "教育",
        "change_pct": 2.29
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 1.94
      },
      {
        "name": "职业教育",
        "change_pct": 2.54
      },
      {
        "name": "在线教育",
        "change_pct": 2.3
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 2.38
      },
      {
        "name": "华为产业链",
        "change_pct": 1.81
      },
      {
        "name": "智谱AI",
        "change_pct": 2.38
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 93,
    "hot_rank_chg": -57,
    "stock_cnt": 5784,
    "price": "10.94",
    "change": "-0.27",
    "market_id": "17",
    "circulate_market_value": "4733449700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.32
      },
      {
        "name": "强势人气股",
        "change_pct": 1.87
      },
      {
        "name": "光伏",
        "change_pct": 0.57
      },
      {
        "name": "无线耳机",
        "change_pct": 1.88
      },
      {
        "name": "华为产业链",
        "change_pct": 1.81
      },
      {
        "name": "光伏胶膜",
        "change_pct": 0.93
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 95,
    "hot_rank_chg": 65,
    "stock_cnt": 5784,
    "price": "10.01",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "4652444700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "参股算力建设（金额较小）",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.58
      },
      {
        "name": "云计算数据中心",
        "change_pct": 1.62
      },
      {
        "name": "水利",
        "change_pct": 2.23
      },
      {
        "name": "大数据",
        "change_pct": 2.05
      },
      {
        "name": "海绵城市",
        "change_pct": 2.39
      },
      {
        "name": "风电",
        "change_pct": 1.05
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.47
      },
      {
        "name": "数字经济",
        "change_pct": 1.98
      },
      {
        "name": "大基建",
        "change_pct": 1.75
      },
      {
        "name": "东数西算/算力",
        "change_pct": 1.55
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.38
      },
      {
        "name": "国企改革",
        "change_pct": 1.42
      },
      {
        "name": "旧改",
        "change_pct": 2.13
      },
      {
        "name": "西部大开发",
        "change_pct": 1.48
      },
      {
        "name": "低空经济",
        "change_pct": 1.56
      },
      {
        "name": "房屋检测",
        "change_pct": 2.66
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688836", "name": "宇树科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5784, "price": "602.80", "change": "-0.05", "market_id": "17", "circulate_market_value": "18136878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 2, "hot_rank_chg": 19, "stock_cnt": 5784, "price": "12.33", "change": "9.99", "market_id": "33", "circulate_market_value": "6138428900.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "中药", "xgb_concepts": [{"name": "中药", "change_pct": 2.68}, {"name": "优化生育（三孩）", "change_pct": 2.44}, {"name": "农业种植", "change_pct": 3.01}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "医药", "change_pct": 2.59}, {"name": "流感", "change_pct": 2.96}, {"name": "大农业", "change_pct": 1.91}]}, {"code": "600127", "name": "金健米业", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5784, "price": "9.31", "change": "10.05", "market_id": "17", "circulate_market_value": "5975001800.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "粮油食品", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 3.72}, {"name": "农业种植", "change_pct": 3.01}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "湖南国企改革", "change_pct": 1.72}, {"name": "乡村振兴", "change_pct": 2.47}, {"name": "休闲食品", "change_pct": 2.14}, {"name": "食品", "change_pct": 2.09}, {"name": "食品安全", "change_pct": 1.74}, {"name": "社区团购", "change_pct": 2.72}, {"name": "大农业", "change_pct": 1.91}, {"name": "预制菜", "change_pct": 2.42}, {"name": "人造肉", "change_pct": 2.78}, {"name": "国企改革", "change_pct": 1.42}]}, {"code": "002015", "name": "协鑫能科", "hot_rank": 5, "hot_rank_chg": 9, "stock_cnt": 5784, "price": "15.88", "change": "1.99", "market_id": "33", "circulate_market_value": "25778395000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "8.21", "change": "-0.12", "market_id": "17", "circulate_market_value": "20676966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.26}, {"name": "工业大麻", "change_pct": 2.74}, {"name": "中药", "change_pct": 2.68}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "保健品", "change_pct": 2.44}, {"name": "民营医院", "change_pct": 2.35}, {"name": "医药", "change_pct": 2.59}, {"name": "化学原料药", "change_pct": 2.63}, {"name": "流感", "change_pct": 2.96}, {"name": "振兴东北", "change_pct": 1.88}, {"name": "食品", "change_pct": 2.09}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5784, "price": "14.02", "change": "-2.50", "market_id": "17", "circulate_market_value": "9538081900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5784, "price": "10.27", "change": "3.74", "market_id": "17", "circulate_market_value": "4922616200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.68}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "医药商业", "change_pct": 3.15}, {"name": "医药", "change_pct": 2.59}, {"name": "流感", "change_pct": 2.96}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 9, "hot_rank_chg": -5, "stock_cnt": 5784, "price": "10.77", "change": "-6.02", "market_id": "33", "circulate_market_value": "25013063000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": -3.98}, {"name": "有色 · 铜", "change_pct": -1.49}, {"name": "有色 · 锑", "change_pct": -3.63}, {"name": "湖南国企改革", "change_pct": 1.72}, {"name": "有色 · 锌", "change_pct": -3.51}, {"name": "有色金属", "change_pct": -0.25}, {"name": "国企改革", "change_pct": 1.42}, {"name": "白银", "change_pct": -4.35}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 10, "hot_rank_chg": 35, "stock_cnt": 5784, "price": "15.48", "change": "10.02", "market_id": "33", "circulate_market_value": "7072042000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数字人民币"}, {"code": "600721", "name": "百花医药", "hot_rank": 11, "hot_rank_chg": 5, "stock_cnt": 5784, "price": "14.96", "change": "5.43", "market_id": "17", "circulate_market_value": "5752832600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 12, "hot_rank_chg": -7, "stock_cnt": 5784, "price": "34.32", "change": "-3.49", "market_id": "17", "circulate_market_value": "57110946000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 13, "hot_rank_chg": 45, "stock_cnt": 5784, "price": "4.30", "change": "9.14", "market_id": "33", "circulate_market_value": "9030661600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.68}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "维生素", "change_pct": 2.94}, {"name": "基因测序", "change_pct": 1.75}, {"name": "民营医院", "change_pct": 2.35}, {"name": "医药", "change_pct": 2.59}, {"name": "化学原料药", "change_pct": 2.63}, {"name": "PD-1抑制剂", "change_pct": 1.68}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 14, "hot_rank_chg": -11, "stock_cnt": 5784, "price": "846.00", "change": "-2.78", "market_id": "33", "circulate_market_value": "939007780000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 15, "hot_rank_chg": -9, "stock_cnt": 5784, "price": "56.50", "change": "-0.18", "market_id": "17", "circulate_market_value": "254421700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 16, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "64.60", "change": "6.90", "market_id": "17", "circulate_market_value": "158505550000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 17, "hot_rank_chg": 6, "stock_cnt": 5784, "price": "29.94", "change": "5.42", "market_id": "17", "circulate_market_value": "12005940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 18, "hot_rank_chg": -5, "stock_cnt": 5784, "price": "395.51", "change": "3.63", "market_id": "17", "circulate_market_value": "264395240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 19, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "5.74", "change": "-0.17", "market_id": "33", "circulate_market_value": "203007350000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.24}, {"name": "手机产业链", "change_pct": 1.53}, {"name": "超高清视频", "change_pct": 1.72}, {"name": "苹果产业链", "change_pct": 0.99}, {"name": "电竞", "change_pct": 2.27}, {"name": "半导体", "change_pct": -0.29}, {"name": "人工智能", "change_pct": 1.88}, {"name": "互联网医疗", "change_pct": 2.3}, {"name": "VR&AR", "change_pct": 1.79}, {"name": "OLED", "change_pct": 0.04}, {"name": "京津冀", "change_pct": 2.07}, {"name": "物联网", "change_pct": 1.8}, {"name": "指纹识别", "change_pct": 1.38}, {"name": "汽车零部件", "change_pct": 2.19}, {"name": "白马股", "change_pct": 0.59}, {"name": "智能制造", "change_pct": 1.55}, {"name": "小米概念股", "change_pct": 1.47}, {"name": "国产芯片", "change_pct": 0.31}, {"name": "液晶面板/LCD", "change_pct": 0.39}, {"name": "全息概念", "change_pct": 1.71}, {"name": "理想汽车概念股", "change_pct": 2.25}, {"name": "MicroLED", "change_pct": 1.39}, {"name": "钙钛矿电池", "change_pct": 0.58}, {"name": "智能手表", "change_pct": 1.72}, {"name": "MiniLED", "change_pct": 1.4}, {"name": "传感器", "change_pct": 1.42}, {"name": "大硅片", "change_pct": -1.95}, {"name": "AI PC", "change_pct": 2.03}, {"name": "华为产业链", "change_pct": 1.81}, {"name": "回购", "change_pct": 1.08}, {"name": "光电共封装CPO", "change_pct": 0.66}, {"name": "智能眼镜/MR头显", "change_pct": 1.46}, {"name": "玻璃基板封装", "change_pct": -0.05}]}, {"code": "300189", "name": "神农种业", "hot_rank": 20, "hot_rank_chg": 67, "stock_cnt": 5784, "price": "6.23", "change": "6.68", "market_id": "33", "circulate_market_value": "5521340100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.01}, {"name": "土地流转", "change_pct": 2.07}, {"name": "海南概念", "change_pct": 2.16}, {"name": "自由贸易港", "change_pct": 1.82}, {"name": "海南自由贸易港", "change_pct": 2.32}, {"name": "大农业", "change_pct": 1.91}, {"name": "水产养殖", "change_pct": 3.41}, {"name": "自贸区", "change_pct": 1.87}]}, {"code": "002384", "name": "东山精密", "hot_rank": 21, "hot_rank_chg": 10, "stock_cnt": 5784, "price": "190.84", "change": "-1.43", "market_id": "33", "circulate_market_value": "264565640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 22, "hot_rank_chg": -3, "stock_cnt": 5784, "price": "21.23", "change": "0.85", "market_id": "33", "circulate_market_value": "9603152700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 23, "hot_rank_chg": -12, "stock_cnt": 5784, "price": "21.40", "change": "2.83", "market_id": "33", "circulate_market_value": "25176432000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 24, "hot_rank_chg": 48, "stock_cnt": 5784, "price": "8.74", "change": "0.92", "market_id": "17", "circulate_market_value": "6194271400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600667", "name": "太极实业", "hot_rank": 25, "hot_rank_chg": -5, "stock_cnt": 5784, "price": "19.94", "change": "-1.77", "market_id": "17", "circulate_market_value": "41705351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 26, "hot_rank_chg": 7, "stock_cnt": 5784, "price": "51.15", "change": "-2.61", "market_id": "17", "circulate_market_value": "43301203000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600272", "name": "开开实业", "hot_rank": 27, "hot_rank_chg": 20, "stock_cnt": 5784, "price": "19.18", "change": "5.67", "market_id": "17", "circulate_market_value": "3068800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "74.05", "change": "0.34", "market_id": "17", "circulate_market_value": "132506149000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 29, "hot_rank_chg": -12, "stock_cnt": 5784, "price": "38.27", "change": "0.32", "market_id": "17", "circulate_market_value": "12321913700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 30, "hot_rank_chg": 31, "stock_cnt": 5784, "price": "7.80", "change": "-3.35", "market_id": "33", "circulate_market_value": "5675156700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 2.51}, {"name": "装配式建筑", "change_pct": 2.49}, {"name": "风电", "change_pct": 1.05}, {"name": "环氧丙烷", "change_pct": -0.12}, {"name": "乡村振兴", "change_pct": 2.47}, {"name": "建筑节能", "change_pct": 2.1}, {"name": "旧改", "change_pct": 2.13}]}, {"code": "603958", "name": "哈森股份", "hot_rank": 31, "hot_rank_chg": 8, "stock_cnt": 5784, "price": "22.26", "change": "-1.55", "market_id": "17", "circulate_market_value": "4882953600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 32, "hot_rank_chg": 51, "stock_cnt": 5784, "price": "4.62", "change": "4.05", "market_id": "33", "circulate_market_value": "3534950200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 2.68}, {"name": "股权转让", "change_pct": 1.32}, {"name": "优化生育（三孩）", "change_pct": 2.44}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "医药商业", "change_pct": 3.15}, {"name": "保健品", "change_pct": 2.44}, {"name": "民营医院", "change_pct": 2.35}, {"name": "医药", "change_pct": 2.59}, {"name": "食品", "change_pct": 2.09}, {"name": "辅助生殖", "change_pct": 2.22}, {"name": "口腔", "change_pct": 2.04}, {"name": "医美", "change_pct": 3.07}, {"name": "新冠病毒防治", "change_pct": 2.1}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 33, "hot_rank_chg": 9, "stock_cnt": 5784, "price": "5.50", "change": "10.00", "market_id": "33", "circulate_market_value": "14543339000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.87}, {"name": "云计算数据中心", "change_pct": 1.62}, {"name": "装修装饰", "change_pct": 2.5}, {"name": "装配式建筑", "change_pct": 2.49}, {"name": "航天", "change_pct": 1.46}, {"name": "旧改", "change_pct": 2.13}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 34, "hot_rank_chg": -8, "stock_cnt": 5784, "price": "39.79", "change": "-0.20", "market_id": "17", "circulate_market_value": "158029450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 35, "hot_rank_chg": 30, "stock_cnt": 5784, "price": "8.60", "change": "9.97", "market_id": "33", "circulate_market_value": "3791068800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 2.26}, {"name": "锂电池", "change_pct": -0.15}, {"name": "新能源汽车", "change_pct": 0.98}, {"name": "两轮车", "change_pct": 1.31}, {"name": "珠宝饰品", "change_pct": 0.68}]}, {"code": "600869", "name": "远东股份", "hot_rank": 36, "hot_rank_chg": 12, "stock_cnt": 5784, "price": "16.20", "change": "0.25", "market_id": "17", "circulate_market_value": "35953514000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002837", "name": "英维克", "hot_rank": 37, "hot_rank_chg": 88, "stock_cnt": 5784, "price": "60.23", "change": "10.01", "market_id": "33", "circulate_market_value": "68255051000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "Q2回升"}, {"code": "002176", "name": "江特电机", "hot_rank": 38, "hot_rank_chg": 365, "stock_cnt": 5784, "price": "9.35", "change": "2.19", "market_id": "33", "circulate_market_value": "15892761000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.32}, {"name": "锂电池", "change_pct": -0.15}, {"name": "大飞机", "change_pct": 1.39}, {"name": "军民融合", "change_pct": 1.76}, {"name": "风电", "change_pct": 1.05}, {"name": "军工", "change_pct": 1.61}, {"name": "新能源汽车", "change_pct": 0.98}, {"name": "机器人", "change_pct": 1.87}, {"name": "新能源车零部件", "change_pct": 1.85}, {"name": "固态电池", "change_pct": -0.41}, {"name": "飞行汽车/eVTOL", "change_pct": 1.86}, {"name": "锂矿/碳酸锂", "change_pct": -2.33}]}, {"code": "002407", "name": "多氟多", "hot_rank": 39, "hot_rank_chg": -1, "stock_cnt": 5784, "price": "33.88", "change": "-2.00", "market_id": "33", "circulate_market_value": "36621512000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 40, "hot_rank_chg": -18, "stock_cnt": 5784, "price": "7.51", "change": "-2.59", "market_id": "17", "circulate_market_value": "8552067300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.58}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "光伏", "change_pct": 0.57}, {"name": "特高压", "change_pct": 1.17}, {"name": "智能电网", "change_pct": 1.58}]}, {"code": "300502", "name": "新易盛", "hot_rank": 41, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "400.87", "change": "-2.70", "market_id": "33", "circulate_market_value": "502788450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 42, "hot_rank_chg": -12, "stock_cnt": 5784, "price": "51.33", "change": "-1.12", "market_id": "33", "circulate_market_value": "58900660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600313", "name": "农发种业", "hot_rank": 43, "hot_rank_chg": 61, "stock_cnt": 5784, "price": "7.01", "change": "5.41", "market_id": "17", "circulate_market_value": "7586212600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.14}, {"name": "农业种植", "change_pct": 3.01}, {"name": "化肥", "change_pct": 1.09}, {"name": "转基因", "change_pct": 4.24}, {"name": "土地流转", "change_pct": 2.07}, {"name": "农垦", "change_pct": 2.35}, {"name": "乡村振兴", "change_pct": 2.47}, {"name": "大农业", "change_pct": 1.91}, {"name": "国企改革", "change_pct": 1.42}, {"name": "大豆", "change_pct": 3.08}]}, {"code": "603259", "name": "药明康德", "hot_rank": 44, "hot_rank_chg": 0, "stock_cnt": 5784, "price": "161.00", "change": "3.31", "market_id": "17", "circulate_market_value": "398198120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5784, "price": "35.10", "change": "1.77", "market_id": "33", "circulate_market_value": "100388551000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 46, "hot_rank_chg": 13, "stock_cnt": 5784, "price": "74.62", "change": "2.50", "market_id": "17", "circulate_market_value": "9750834200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 47, "hot_rank_chg": -29, "stock_cnt": 5784, "price": "36.27", "change": "-9.01", "market_id": "33", "circulate_market_value": "24181802000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 48, "hot_rank_chg": -14, "stock_cnt": 5784, "price": "94.23", "change": "-1.20", "market_id": "33", "circulate_market_value": "61535547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 49, "hot_rank_chg": -20, "stock_cnt": 5784, "price": "33.68", "change": "-2.49", "market_id": "17", "circulate_market_value": "693868390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 50, "hot_rank_chg": -15, "stock_cnt": 5784, "price": "7.11", "change": "-2.60", "market_id": "17", "circulate_market_value": "16998676000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.23}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "国企改革", "change_pct": 1.42}, {"name": "河南国企改革", "change_pct": 0.8}]}, {"code": "002017", "name": "东信和平", "hot_rank": 52, "hot_rank_chg": 16, "stock_cnt": 5784, "price": "16.95", "change": "6.07", "market_id": "33", "circulate_market_value": "9833922000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 53, "hot_rank_chg": -28, "stock_cnt": 5784, "price": "20.61", "change": "-7.74", "market_id": "33", "circulate_market_value": "19140650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603823", "name": "百合花", "hot_rank": 54, "hot_rank_chg": 3, "stock_cnt": 5784, "price": "66.95", "change": "-4.33", "market_id": "17", "circulate_market_value": "27875818000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 55, "hot_rank_chg": -4, "stock_cnt": 5784, "price": "119.30", "change": "-2.04", "market_id": "17", "circulate_market_value": "43034302000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 56, "hot_rank_chg": -28, "stock_cnt": 5784, "price": "394.50", "change": "4.04", "market_id": "17", "circulate_market_value": "160300460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000620", "name": "盈新发展", "hot_rank": 57, "hot_rank_chg": -25, "stock_cnt": 5784, "price": "3.47", "change": "0.00", "market_id": "33", "circulate_market_value": "16210968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 1.02}, {"name": "体育产业", "change_pct": 2.01}, {"name": "股权转让", "change_pct": 1.32}, {"name": "房地产", "change_pct": 2.16}, {"name": "云计算数据中心", "change_pct": 1.62}, {"name": "京津冀", "change_pct": 2.07}, {"name": "旅游", "change_pct": 2.53}, {"name": "国产芯片", "change_pct": 0.31}, {"name": "内存", "change_pct": 0.18}, {"name": "闪存", "change_pct": 0.82}, {"name": "IP经济/谷子经济", "change_pct": 2.27}]}, {"code": "002185", "name": "华天科技", "hot_rank": 58, "hot_rank_chg": 9, "stock_cnt": 5784, "price": "16.84", "change": "-0.24", "market_id": "33", "circulate_market_value": "56010287000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 59, "hot_rank_chg": 31, "stock_cnt": 5784, "price": "129.00", "change": "2.14", "market_id": "17", "circulate_market_value": "311115600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002041", "name": "登海种业", "hot_rank": 60, "hot_rank_chg": 48, "stock_cnt": 5784, "price": "11.21", "change": "10.01", "market_id": "33", "circulate_market_value": "9864800000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "粮食概念", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.01}, {"name": "转基因", "change_pct": 4.24}, {"name": "乡村振兴", "change_pct": 2.47}, {"name": "大农业", "change_pct": 1.91}, {"name": "人造肉", "change_pct": 2.78}, {"name": "大豆", "change_pct": 3.08}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 61, "hot_rank_chg": -21, "stock_cnt": 5784, "price": "11.25", "change": "1.63", "market_id": "17", "circulate_market_value": "19520785000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 1.28}, {"name": "核电", "change_pct": 1.5}, {"name": "锂电池", "change_pct": -0.15}, {"name": "铜箔/覆铜板", "change_pct": 0.67}, {"name": "PCB板", "change_pct": 0.7}, {"name": "中科院系", "change_pct": 1.81}, {"name": "新能源汽车", "change_pct": 0.98}, {"name": "宁德时代概念股", "change_pct": 0.3}, {"name": "固态电池", "change_pct": -0.41}, {"name": "PET复合铜箔", "change_pct": -0.03}]}, {"code": "601606", "name": "长城军工", "hot_rank": 62, "hot_rank_chg": 117, "stock_cnt": 5784, "price": "31.54", "change": "3.31", "market_id": "17", "circulate_market_value": "22842164000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 63, "hot_rank_chg": -9, "stock_cnt": 5784, "price": "31.68", "change": "2.79", "market_id": "33", "circulate_market_value": "24787546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002703", "name": "浙江世宝", "hot_rank": 64, "hot_rank_chg": 35, "stock_cnt": 5784, "price": "15.87", "change": "9.98", "market_id": "33", "circulate_market_value": "9300582900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "无人驾驶"}, {"code": "600186", "name": "莲花控股", "hot_rank": 65, "hot_rank_chg": 12, "stock_cnt": 5784, "price": "11.55", "change": "1.94", "market_id": "17", "circulate_market_value": "20664547000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.01}, {"name": "纯碱", "change_pct": 0.85}, {"name": "食品", "change_pct": 2.09}, {"name": "土壤修复", "change_pct": 1.6}, {"name": "东数西算/算力", "change_pct": 1.55}, {"name": "OpenClaw概念", "change_pct": 0.5}, {"name": "DeepSeek概念股", "change_pct": 1.38}]}, {"code": "300313", "name": "天山生物", "hot_rank": 66, "hot_rank_chg": -13, "stock_cnt": 5784, "price": "16.63", "change": "8.27", "market_id": "33", "circulate_market_value": "3281976900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 67, "hot_rank_chg": -26, "stock_cnt": 5784, "price": "12.29", "change": "-2.23", "market_id": "33", "circulate_market_value": "11470522600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.87}, {"name": "新疆国企改革", "change_pct": 1.32}, {"name": "新疆概念", "change_pct": 1.65}, {"name": "光伏", "change_pct": 0.57}, {"name": "风电", "change_pct": 1.05}, {"name": "储能", "change_pct": 1.06}, {"name": "国企改革", "change_pct": 1.42}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 68, "hot_rank_chg": -8, "stock_cnt": 5784, "price": "14.14", "change": "-0.21", "market_id": "17", "circulate_market_value": "20824074000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600227", "name": "赤天化", "hot_rank": 69, "hot_rank_chg": 5, "stock_cnt": 5784, "price": "3.81", "change": "-3.54", "market_id": "17", "circulate_market_value": "4867655200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.65}, {"name": "化肥", "change_pct": 1.09}, {"name": "保健品", "change_pct": 2.44}, {"name": "民营医院", "change_pct": 2.35}, {"name": "医药", "change_pct": 2.59}, {"name": "煤化工", "change_pct": 0.85}, {"name": "食品", "change_pct": 2.09}, {"name": "大农业", "change_pct": 1.91}, {"name": "干细胞", "change_pct": 2.69}, {"name": "阿尔茨海默病", "change_pct": 1.48}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 70, "hot_rank_chg": -43, "stock_cnt": 5784, "price": "55.02", "change": "-5.67", "market_id": "33", "circulate_market_value": "12855930600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 71, "hot_rank_chg": -16, "stock_cnt": 5784, "price": "257.10", "change": "3.05", "market_id": "33", "circulate_market_value": "279824570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 73, "hot_rank_chg": -24, "stock_cnt": 5784, "price": "397.03", "change": "-0.83", "market_id": "33", "circulate_market_value": "65521485000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 74, "hot_rank_chg": 136, "stock_cnt": 5784, "price": "28.55", "change": "10.02", "market_id": "17", "circulate_market_value": "1855750000.00", "change_type": "1", "change_section": "7", "change_days": "4", "change_reason": "新疆煤化工项目"}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 75, "hot_rank_chg": -23, "stock_cnt": 5784, "price": "55.60", "change": "-3.89", "market_id": "33", "circulate_market_value": "20488783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 76, "hot_rank_chg": -14, "stock_cnt": 5784, "price": "63.81", "change": "-4.42", "market_id": "33", "circulate_market_value": "92744773000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000505", "name": "京粮控股", "hot_rank": 77, "hot_rank_chg": 93, "stock_cnt": 5784, "price": "6.98", "change": "4.80", "market_id": "33", "circulate_market_value": "4414014700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "饲料", "change_pct": 1.73}, {"name": "京津冀", "change_pct": 2.07}, {"name": "调味品", "change_pct": 1.01}, {"name": "海南概念", "change_pct": 2.16}, {"name": "休闲食品", "change_pct": 2.14}, {"name": "食品", "change_pct": 2.09}, {"name": "人造肉", "change_pct": 2.78}]}, {"code": "600508", "name": "上海能源", "hot_rank": 78, "hot_rank_chg": 91, "stock_cnt": 5784, "price": "10.87", "change": "10.02", "market_id": "17", "circulate_market_value": "10998322500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.23}, {"name": "央企改革", "change_pct": 1.14}, {"name": "破净股", "change_pct": 1.37}, {"name": "超超临界发电", "change_pct": 1.35}, {"name": "国企改革", "change_pct": 1.42}]}, {"code": "600522", "name": "中天科技", "hot_rank": 79, "hot_rank_chg": -1, "stock_cnt": 5784, "price": "33.89", "change": "4.18", "market_id": "17", "circulate_market_value": "115664864000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 80, "hot_rank_chg": -11, "stock_cnt": 5784, "price": "60.90", "change": "-0.56", "market_id": "33", "circulate_market_value": "92412840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600737", "name": "中粮糖业", "hot_rank": 81, "hot_rank_chg": 54, "stock_cnt": 5784, "price": "14.74", "change": "1.38", "market_id": "17", "circulate_market_value": "31526623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 82, "hot_rank_chg": -36, "stock_cnt": 5784, "price": "26.92", "change": "-2.64", "market_id": "17", "circulate_market_value": "6521908400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001337", "name": "四川黄金", "hot_rank": 83, "hot_rank_chg": -20, "stock_cnt": 5784, "price": "55.00", "change": "-2.83", "market_id": "33", "circulate_market_value": "23100000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002173", "name": "创新医疗", "hot_rank": 84, "hot_rank_chg": 356, "stock_cnt": 5784, "price": "18.61", "change": "5.32", "market_id": "33", "circulate_market_value": "7832298200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 85, "hot_rank_chg": -14, "stock_cnt": 5784, "price": "60.15", "change": "-0.41", "market_id": "17", "circulate_market_value": "1193622150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603318", "name": "水发燃气", "hot_rank": 86, "hot_rank_chg": 257, "stock_cnt": 5784, "price": "10.24", "change": "9.99", "market_id": "17", "circulate_market_value": "4700886300.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "氦气", "xgb_concepts": [{"name": "燃气轮机", "change_pct": 2.0}, {"name": "电子特气", "change_pct": -0.66}, {"name": "一带一路", "change_pct": 1.58}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "天然气", "change_pct": 1.49}, {"name": "山东国企改革", "change_pct": 1.48}, {"name": "国企改革", "change_pct": 1.42}, {"name": "氦气", "change_pct": 0.78}]}, {"code": "603186", "name": "华正新材", "hot_rank": 87, "hot_rank_chg": 115, "stock_cnt": 5784, "price": "174.65", "change": "5.67", "market_id": "17", "circulate_market_value": "27383464000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002104", "name": "恒宝股份", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5784, "price": "11.33", "change": "-1.56", "market_id": "33", "circulate_market_value": "6794714300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.58}, {"name": "金融科技", "change_pct": 2.38}, {"name": "移动支付", "change_pct": 1.83}, {"name": "物联网", "change_pct": 1.8}, {"name": "数字经济", "change_pct": 1.98}, {"name": "电子身份证", "change_pct": 2.06}, {"name": "ETC", "change_pct": 1.6}, {"name": "数字人民币", "change_pct": 2.42}, {"name": "智慧政务", "change_pct": 1.99}, {"name": "eSIM", "change_pct": 2.39}, {"name": "华为产业链", "change_pct": 1.81}, {"name": "区块链", "change_pct": 2.29}, {"name": "RWA", "change_pct": 2.72}]}, {"code": "002202", "name": "金风科技", "hot_rank": 89, "hot_rank_chg": -10, "stock_cnt": 5784, "price": "18.46", "change": "0.87", "market_id": "33", "circulate_market_value": "62090304000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600547", "name": "山东黄金", "hot_rank": 90, "hot_rank_chg": -20, "stock_cnt": 5784, "price": "34.97", "change": "-4.19", "market_id": "17", "circulate_market_value": "126397084000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 91, "hot_rank_chg": -3, "stock_cnt": 5784, "price": "26.96", "change": "2.12", "market_id": "17", "circulate_market_value": "9083361900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 92, "hot_rank_chg": -6, "stock_cnt": 5784, "price": "10.18", "change": "1.90", "market_id": "33", "circulate_market_value": "2896022800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 1.82}, {"name": "ST摘帽", "change_pct": 2.62}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "教育", "change_pct": 2.29}, {"name": "阿里巴巴概念股", "change_pct": 1.94}, {"name": "职业教育", "change_pct": 2.54}, {"name": "在线教育", "change_pct": 2.3}, {"name": "华为鸿蒙", "change_pct": 2.38}, {"name": "华为产业链", "change_pct": 1.81}, {"name": "智谱AI", "change_pct": 2.38}]}, {"code": "603330", "name": "天洋新材", "hot_rank": 93, "hot_rank_chg": -57, "stock_cnt": 5784, "price": "10.94", "change": "-0.27", "market_id": "17", "circulate_market_value": "4733449700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.32}, {"name": "强势人气股", "change_pct": 1.87}, {"name": "光伏", "change_pct": 0.57}, {"name": "无线耳机", "change_pct": 1.88}, {"name": "华为产业链", "change_pct": 1.81}, {"name": "光伏胶膜", "change_pct": 0.93}]}, {"code": "603118", "name": "共进股份", "hot_rank": 94, "hot_rank_chg": -38, "stock_cnt": 5784, "price": "16.25", "change": "1.50", "market_id": "17", "circulate_market_value": "12793241600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 95, "hot_rank_chg": 65, "stock_cnt": 5784, "price": "10.01", "change": "10.00", "market_id": "33", "circulate_market_value": "4652444700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股算力建设（金额较小）", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.58}, {"name": "云计算数据中心", "change_pct": 1.62}, {"name": "水利", "change_pct": 2.23}, {"name": "大数据", "change_pct": 2.05}, {"name": "海绵城市", "change_pct": 2.39}, {"name": "风电", "change_pct": 1.05}, {"name": "乡村振兴", "change_pct": 2.47}, {"name": "数字经济", "change_pct": 1.98}, {"name": "大基建", "change_pct": 1.75}, {"name": "东数西算/算力", "change_pct": 1.55}, {"name": "新型城镇化", "change_pct": 2.38}, {"name": "国企改革", "change_pct": 1.42}, {"name": "旧改", "change_pct": 2.13}, {"name": "西部大开发", "change_pct": 1.48}, {"name": "低空经济", "change_pct": 1.56}, {"name": "房屋检测", "change_pct": 2.66}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 96, "hot_rank_chg": -23, "stock_cnt": 5784, "price": "13.99", "change": "9.98", "market_id": "17", "circulate_market_value": "17951949000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金刚石散热"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 97, "hot_rank_chg": -17, "stock_cnt": 5784, "price": "38.48", "change": "1.13", "market_id": "17", "circulate_market_value": "56257560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 98, "hot_rank_chg": -48, "stock_cnt": 5784, "price": "47.66", "change": "-2.28", "market_id": "17", "circulate_market_value": "79302016000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 99, "hot_rank_chg": -33, "stock_cnt": 5784, "price": "35.31", "change": "-4.62", "market_id": "17", "circulate_market_value": "29265322000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600330", "name": "天通股份", "hot_rank": 100, "hot_rank_chg": 132, "stock_cnt": 5784, "price": "27.41", "change": "5.14", "market_id": "17", "circulate_market_value": "33808437000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600984", "name": "建设机械", "price": 4.94, "change_pct": 10.02, "reason": "国资背景塔机租赁龙头，塔机规模全球第一；公司重大资产重组预案公布，拟通过发行股份及支付现金的方式，购买陕西化工集团有限公司、三峡资本控股有限责任公司合计持有的蒲城清洁能源化工有限责任公司100%股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.1, "first_limit_up": 1787621100, "break_limit_up_times": 0}, {"code": "002837", "name": "英维克", "price": 60.23, "change_pct": 10.01, "reason": "公司液冷服务器管路产品已达V0级标准，并成功取得美国UL认证，为英伟达数据中心部件提供商之一", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 8.51, "first_limit_up": 1787623548, "break_limit_up_times": 1}, {"code": "603395", "name": "红四方", "price": 28.55, "change_pct": 10.02, "reason": "公司为中盐集团农肥业务板块的运营主体", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 20.86, "first_limit_up": 1787622433, "break_limit_up_times": 0}, {"code": "600936", "name": "北投科技", "price": 5.09, "change_pct": 9.94, "reason": "公司“科宝”交通大模型及智检机器人、无人机机巢等成果已落地", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.74, "first_limit_up": 1787623102, "break_limit_up_times": 2}, {"code": "603079", "name": "圣达生物", "price": 13.89, "change_pct": 9.98, "reason": "公司主要维生素产品生物素和叶酸", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 8.4, "first_limit_up": 1787622149, "break_limit_up_times": 0}, {"code": "002855", "name": "捷荣技术", "price": 11, "change_pct": 10.0, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 1.93, "first_limit_up": 1787627646, "break_limit_up_times": 0}, {"code": "002478", "name": "常宝股份", "price": 6.92, "change_pct": 10.02, "reason": "公司核心产品 HRSG 余热锅炉管用于燃气轮机联合循环发电的余热回收系统", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.8, "first_limit_up": 1787639598, "break_limit_up_times": 0}, {"code": "002081", "name": "金 螳 螂", "price": 5.5, "change_pct": 10.0, "reason": "1、洁净室是公司重点布局的战略新赛道，已具备在电子半导体、新能源、大健康、实验室等高附加值领域构建系统集成能力，代表项目包括南京集成电路产业服务中心、杰华特微电子高性能电源芯片项目等；\n2、综合性专业化装饰集团；公司曾中标海南商业航天发射场项目，目前该工程已完工并投入使用，已为多次卫星发射任务提供稳定保障", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 8.31, "first_limit_up": 1787623185, "break_limit_up_times": 0}, {"code": "603758", "name": "秦安股份", "price": 12.12, "change_pct": 9.98, "reason": "公司是新能源汽车发动机及变速器核心零部件供应商，参投墨现科技，后者主营压力传感器、机器人电子皮肤等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.6, "first_limit_up": 1787634780, "break_limit_up_times": 5}, {"code": "002259", "name": "升达林业", "price": 4.19, "change_pct": 9.97, "reason": "公司主要业务包括天然气液化加工、城镇燃气运营和加气站运营", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.8, "first_limit_up": 1787636805, "break_limit_up_times": 0}, {"code": "002094", "name": "青岛金王", "price": 5.14, "change_pct": 10.06, "reason": "亚洲第一、全球排名居前的蜡烛制品生产商；公司是首批接入兴业银行CIPS标准收发器企业，提高了公司进出口业务结算效率，增加了进出口业务结算方式", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 5.41, "first_limit_up": 1787625414, "break_limit_up_times": 0}, {"code": "300922", "name": "天秦装备", "price": 20.53, "change_pct": 19.99, "reason": "公司主要从事以高分子复合材料的新型加工和应用技术为核心的专用防护装置及装备零部件的研产销，承担了多项国家重点型号弹药防护装置的研制和生产任务，是装备防护领域的核心供应商", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 13.68, "first_limit_up": 1787634441, "break_limit_up_times": 0}, {"code": "600829", "name": "人民同泰", "price": 10.14, "change_pct": 9.98, "reason": "黑龙江省内最大的医药商业公司，哈药集团医疗商业上市平台", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.34, "first_limit_up": 1787626743, "break_limit_up_times": 1}, {"code": "603637", "name": "镇海股份", "price": 14.03, "change_pct": 10.04, "reason": "公司深耕硫磺回收、加氢精制、常减压蒸馏等石化工程EPC，控股股东拟变更为朴未来泉", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 5.0, "first_limit_up": 1787623288, "break_limit_up_times": 1}, {"code": "002703", "name": "浙江世宝", "price": 15.87, "change_pct": 9.98, "reason": "公司在线控转向和后轮转向领域技术储备深厚，已获多家主流车企定点，线控转向首个量产项目预计于2026年下半年开始量产", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.89, "first_limit_up": 1787623086, "break_limit_up_times": 10}, {"code": "000566", "name": "海南海药", "price": 4.97, "change_pct": 9.96, "reason": "1、公司参股上海力声特医学科技有限公司，其核心产品人工耳蜗被视为目前临床应用最成熟的脑机接口之一，通过电信号刺激听神经实现听觉重建；\n2、海南本地股，主营中西成药、精细化工产品、化学原料药、保健品及与医药工业相配套的进出口贸易", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 7.84, "first_limit_up": 1787622843, "break_limit_up_times": 0}, {"code": "002907", "name": "华森制药", "price": 15.74, "change_pct": 9.99, "reason": "子公司磷酸ORIC-1327滴眼液获国家药监局临床试验批准通知书", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1787622546, "break_limit_up_times": 0}, {"code": "002880", "name": "卫光生物", "price": 22.55, "change_pct": 10.0, "reason": "公司拟建设卫光生物智能产业基地，现有年投浆量已由约400吨提升至650吨", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 1.54, "first_limit_up": 1787621412, "break_limit_up_times": 0}, {"code": "600470", "name": "六国化工", "price": 5.93, "change_pct": 10.02, "reason": "华东地区规模最大的磷复肥和磷化工一体化专业制造企业", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 6.78, "first_limit_up": 1787621723, "break_limit_up_times": 1}, {"code": "300642", "name": "透景生命", "price": 16.2, "change_pct": 20.0, "reason": "国内最主要的流式荧光发光产品供应商，上半年净利润同比上升315.9%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 8.18, "first_limit_up": 1787621604, "break_limit_up_times": 0}, {"code": "002742", "name": "冀衡医药", "price": 4.68, "change_pct": 10.12, "reason": "公司摘星脱帽后正式更名，全资子公司辽源百康主要生产化学原料药，涵盖解热镇痛、抗菌、抗过敏、局部麻醉等大类", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 9.23, "first_limit_up": 1787622186, "break_limit_up_times": 0}, {"code": "002445", "name": "中南文化", "price": 3.71, "change_pct": 10.09, "reason": "公司拟收购江阴热电及苏龙热电部分股权", "plates": ["资产重组"], "limit_up_days": 2, "turnover_ratio": 0.24, "first_limit_up": 1787621100, "break_limit_up_times": 0}, {"code": "603113", "name": "金能科技", "price": 5.48, "change_pct": 10.04, "reason": "山东焦炭龙头；公司甲醇实际产能为10万吨/年，所产甲醇全部对外销售", "plates": ["煤炭"], "limit_up_days": 1, "turnover_ratio": 4.19, "first_limit_up": 1787622516, "break_limit_up_times": 0}, {"code": "000796", "name": "凯撒旅业", "price": 4.18, "change_pct": 10.0, "reason": "公司注册地址位于海南省三亚市，中国领先的旅游综合服务商", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.05, "first_limit_up": 1787621571, "break_limit_up_times": 1}, {"code": "002713", "name": "东易日盛", "price": 9.96, "change_pct": 10.06, "reason": "公司将承接未来新的算力中心集成服务订单，并拓展算力中心运营服务业务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1787623884, "break_limit_up_times": 1}, {"code": "603095", "name": "越剑智能", "price": 16.4, "change_pct": 9.99, "reason": "公司AI智能验布机深度融合华为ESIE算法模型与昇腾AI算力，验布速度可达60米/分钟，瑕疵检出率超90%，能精准识别针织、梭织等多场景面料瑕疵，还可通过边缘计算与云端协同实现质量追溯", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 7.05, "first_limit_up": 1787622037, "break_limit_up_times": 1}, {"code": "000779", "name": "甘咨询", "price": 10.01, "change_pct": 10.0, "reason": "公司参股10%丝绸之路信息港，后者参与投建数据中心和云平台工程建设，持有丝绸之路大数据37%股权、丝路信息港云计算100%股权", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 13.6, "first_limit_up": 1787623110, "break_limit_up_times": 0}, {"code": "600605", "name": "汇通能源", "price": 26.58, "change_pct": 10.02, "reason": "公司受让兴华芯7.43%股权交易已完成，标的公司是一家专注于半导体光掩模版（Photomask）研发与制造的高科技企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.9, "first_limit_up": 1787640113, "break_limit_up_times": 0}, {"code": "003021", "name": "兆威机电", "price": 72.78, "change_pct": 10.01, "reason": "1、微型传动系统领先供应商；公司在服务机器人方面为美国irobot、云鲸、小米生态链等多家企业供应扫地机器人的行走轮组驱动器、主刷驱动器、边刷驱动器等核心驱动部件；\n2、公司的微型传动系统可以应用于AR/VR领域，如磁感应系统、瞳距调节驱动系统、头部自动松紧装置、智能眼镜隐藏式微型扬声器等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.88, "first_limit_up": 1787635176, "break_limit_up_times": 0}, {"code": "002514", "name": "*ST宝馨", "price": 1.8, "change_pct": 9.76, "reason": "参股公司海胶智能主要从事智能农业机器人研发、生产及销售等相关业务", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 8.11, "first_limit_up": 1787637039, "break_limit_up_times": 0}, {"code": "000428", "name": "华天酒店", "price": 4.32, "change_pct": 9.92, "reason": "湖南省旅游酒店支柱企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 1.78, "first_limit_up": 1787621508, "break_limit_up_times": 0}, {"code": "300097", "name": "智云股份", "price": 10.54, "change_pct": 20.05, "reason": "公司为国内首家产品覆盖模组全段生产设备厂商，布局的mini-LED、micro-LED、折叠屏设备已获客户认可", "plates": ["折叠屏"], "limit_up_days": 1, "turnover_ratio": 17.7, "first_limit_up": 1787634588, "break_limit_up_times": 0}, {"code": "600745", "name": "*ST闻泰", "price": 18.92, "change_pct": 10.0, "reason": "公司起诉安世控股等六被告获法院受理：要求归还安世半导体控制权，索赔80亿", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 6.54, "first_limit_up": 1787639825, "break_limit_up_times": 0}, {"code": "600053", "name": "*ST九鼎", "price": 7.76, "change_pct": 10.07, "reason": "公司拟2.13亿收购南京神源生智能科技53.29%股权，将切入机器人产业链关键环节", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.97, "first_limit_up": 1787638940, "break_limit_up_times": 0}, {"code": "000695", "name": "滨海能源", "price": 15.35, "change_pct": 10.04, "reason": "公司主要从事锂电池负极材料，源网荷储绿电150MW一期项目已于8月1日凌晨实现全线送电，正式进入系统调试与试运行阶段", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 9.0, "first_limit_up": 1787622780, "break_limit_up_times": 1}, {"code": "002418", "name": "康盛股份", "price": 4.05, "change_pct": 10.05, "reason": "公司研发设计的浸没式液冷产品主要应用于数据中心散热", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 8.32, "first_limit_up": 1787623209, "break_limit_up_times": 1}, {"code": "000560", "name": "我爱我家", "price": 2.39, "change_pct": 10.14, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 12.18, "first_limit_up": 1787627532, "break_limit_up_times": 0}, {"code": "600281", "name": "华阳新材", "price": 5.05, "change_pct": 10.02, "reason": "全资子公司太原华盛丰贵金属材料有限公司经营范围涵盖稀土高磁性材料的回收利用、加工等服务\n", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.23, "first_limit_up": 1787621986, "break_limit_up_times": 2}, {"code": "603217", "name": "元利科技", "price": 28.39, "change_pct": 10.0, "reason": "1、公司依托现有聚碳酸酯二元醇高分子聚合物中间体，开发了适配新能源领域固态电池负极粘结剂聚合物产品，已向多家新能源行业客户完成多轮产品送样，目前正处于样品性能测试及技术优化阶段；\n2、公司主要从事高品质精细化工产品的研产销，主要产品包括二元酸二甲酯、脂肪醇及增塑剂三个系列", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.09, "first_limit_up": 1787636212, "break_limit_up_times": 0}, {"code": "600714", "name": "金瑞矿业", "price": 17.26, "change_pct": 10.01, "reason": "公司主营锶盐系列产品的生产和销售，可应用于液晶玻璃基板等", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 9.2, "first_limit_up": 1787634072, "break_limit_up_times": 0}, {"code": "002412", "name": "汉森制药", "price": 12.33, "change_pct": 9.99, "reason": "公司主营消化系统和心脑血管中药生产企业", "plates": ["医药"], "limit_up_days": 5, "turnover_ratio": 21.27, "first_limit_up": 1787622336, "break_limit_up_times": 0}, {"code": "603687", "name": "大胜达", "price": 14.41, "change_pct": 10.0, "reason": "公司与芯瞳半导体及其原股东已于5月19日正式签署Pre-B轮增资及股权转让协议，公司以5.5亿元取得芯瞳半导体22.9831%股权，标的公司是国内专注于通用高性能图形处理器芯片设计研发与销售的先驱企业", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.87, "first_limit_up": 1787634075, "break_limit_up_times": 0}, {"code": "000070", "name": "特发信息", "price": 16.07, "change_pct": 9.99, "reason": "深圳国资委控股的特发集团旗下，以光通信产业为主；公司“基于CPO技术的高密度超薄多芯MPO插芯关键技术研究”项目属于CPO配套技术，该技术的产品和CPO配套，目前已经实现量产出货", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 6.26, "first_limit_up": 1787624148, "break_limit_up_times": 0}, {"code": "603360", "name": "百傲化学", "price": 13.77, "change_pct": 9.98, "reason": "全资子公司芯傲华拟以7亿元增资苏州芯慧联半导体科技有限公司，后者主营业务为涂胶显影机、光刻机等黄光制程设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 1.65, "first_limit_up": 1787621718, "break_limit_up_times": 1}, {"code": "000659", "name": "珠海中富", "price": 2.85, "change_pct": 10.04, "reason": "国内生产规模最大的饮料塑料包装企业之一，主营饮料包装制品、饮料加工、胶罐、纸杯，客户包括元气森林", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1787637723, "break_limit_up_times": 0}, {"code": "002949", "name": "华阳国际", "price": 12.44, "change_pct": 9.99, "reason": "1、公司是国家高新技术企业、建筑设计行业“国家住宅产业化基地”、首批“装配式建筑产业基地”、首批“全过程工程咨询试点单位”；\n2、公司涉及到低空经济的业务主要是关于航空小镇的相关规划设计", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 14.24, "first_limit_up": 1787621595, "break_limit_up_times": 11}, {"code": "600508", "name": "上海能源", "price": 10.87, "change_pct": 10.02, "reason": "实控人为中煤集团，在江苏徐州生产基地拥有三对煤炭生产矿井，年核定生产能力805万吨，煤炭品种为1/3焦煤、气煤和肥煤，是优质炼焦配煤和动力煤", "plates": ["煤炭"], "limit_up_days": 2, "turnover_ratio": 3.86, "first_limit_up": 1787621428, "break_limit_up_times": 1}, {"code": "003040", "name": "楚天龙", "price": 15.48, "change_pct": 10.02, "reason": "国内较早从事数字人民币相关技术研究与产品开发的企业之一", "plates": ["数字人民币"], "limit_up_days": 3, "turnover_ratio": 9.91, "first_limit_up": 1787621748, "break_limit_up_times": 0}, {"code": "002963", "name": "豪尔赛", "price": 20.32, "change_pct": 10.02, "reason": "1、公司参股的华奕新能源已中标某头部通讯公司的数据中心冷板试点项目，其基于蒸发冷却独有冷水技术，复合液冷板，可完全实现无压缩机补冷；\n2、公司智慧灯杆解决方案基于灯具节能、智能灯控等技术，结合物联网、大数据、5G、AI、机器视觉等新一代信息技术，通过智慧照明云平台对城市路灯等公共照明实现统一智能化管理", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.36, "first_limit_up": 1787635521, "break_limit_up_times": 0}, {"code": "002686", "name": "亿利达", "price": 6.82, "change_pct": 10.0, "reason": "1、公司控股股东变更为润桐控股，实际控制人变更为桐乡市财政局；\n2、公司的产品可以应用数据中心冷却系统，风机产品已经在华为、阿里、腾讯、移动等企业的数据中心中配套应用", "plates": ["股权转让"], "limit_up_days": 1, "turnover_ratio": 7.33, "first_limit_up": 1787624379, "break_limit_up_times": 0}, {"code": "603318", "name": "水发燃气", "price": 10.24, "change_pct": 9.99, "reason": "1、公司依托西北天然气产区布局LNG-BOG提氦业务，现有5N高纯氦产能并持续扩产；\n2、全资子公司大连派思是 GE、西门子、三菱等龙头的核心辅机供应商，供应前置 / 辅助模块、掺氢输配系统等，切入北美 AI 数据中心轻燃机组配套；\n3、山东省国资委旗下；主营业务为LNG业务、城镇燃气运营，以天然气发电为主的燃气设备制造以及分布式能源综合服务业务", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 16.24, "first_limit_up": 1787622999, "break_limit_up_times": 2}, {"code": "600838", "name": "上海九百", "price": 8.02, "change_pct": 10.01, "reason": "上海九百集团旗下，有位于上海市中心的静安寺珠宝古玩城，位于航华地区的九百家居和位于大华社区的九百购物中心", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 3.48, "first_limit_up": 1787621810, "break_limit_up_times": 1}, {"code": "688169", "name": "石头科技", "price": 135, "change_pct": 20.0, "reason": "公司主要为小米定制米家扫地机器人，目前小米+石头占全国扫地机器人市场份额四分之一；第二季度扣非后净利润同比增长111.02%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.47, "first_limit_up": 1787622890, "break_limit_up_times": 3}, {"code": "002856", "name": "*ST美芝", "price": 15.49, "change_pct": 10.01, "reason": "公司主要业务为建筑装饰工程的设计与施工", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.84, "first_limit_up": 1787636253, "break_limit_up_times": 0}, {"code": "002451", "name": "摩恩电气", "price": 8.13, "change_pct": 10.01, "reason": "中国特种电缆行业领军企业；公司专业从事特种电缆，包括生态安全电缆、变频电缆、屏蔽和耐化学药品功能电缆、电气化铁道27.5kV单相铜芯交联聚乙烯绝缘电缆等的研产销，此前投建年产能3万吨新能源汽车电机专用扁型电磁线项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 7.72, "first_limit_up": 1787636214, "break_limit_up_times": 1}, {"code": "002821", "name": "凯莱英", "price": 172.23, "change_pct": 10.0, "reason": "国内CMO行业龙头之一", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.37, "first_limit_up": 1787634102, "break_limit_up_times": 0}, {"code": "600127", "name": "金健米业", "price": 9.31, "change_pct": 10.05, "reason": "中国粮食行业第一股，在国内拥有较高的品牌知名度；公司主要产品有大米、面粉、面条、植物油、牛奶等", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 46.17, "first_limit_up": 1787621513, "break_limit_up_times": 7}, {"code": "605303", "name": "园林股份", "price": 22.85, "change_pct": 10.01, "reason": "1、公司拟以约1.12亿元收购杭州华澜微电子6.4969%股权，切入固态存储主控芯片及模组赛道；\n2、公司参股云针科技15%股权，公司实际控制人吴光洪持有云针科技40%股权，云针科技业务包括自主操作系统、服务器、云计算服务平台等", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.28, "first_limit_up": 1787621531, "break_limit_up_times": 2}, {"code": "003018", "name": "金富科技", "price": 45.98, "change_pct": 10.0, "reason": "1、公司拟收购卓晖金属和联益热能各51%股权，标的公司均聚焦液冷散热产品；\n2、公司是国内最大的塑料防盗瓶盖供应商之一，长期稳定供应华润怡宝、可口可乐、达能等头部饮料品牌", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1787634816, "break_limit_up_times": 0}, {"code": "600103", "name": "青山纸业", "price": 3.15, "change_pct": 10.14, "reason": "1、控股子公司恒宝通光主营光通信模块及组件产品的研产销，系国家级高新技术企业，产品主要应用于移动通信领域，为全球大型模拟半导体设备供应厂商Avago逾十年的供应商；\n2、综合性造纸上市公司，实控人福建省国资委；公司主要产品为“青山牌”系列伸性纸袋纸、牛皮包装纸、溶解浆等产品", "plates": ["光电共封装CPO"], "limit_up_days": 1, "turnover_ratio": 7.51, "first_limit_up": 1787622336, "break_limit_up_times": 0}, {"code": "002084", "name": "海鸥住工", "price": 4.35, "change_pct": 10.13, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 2, "turnover_ratio": 0.4, "first_limit_up": 1787621100, "break_limit_up_times": 0}, {"code": "002947", "name": "恒铭达", "price": 59.61, "change_pct": 10.0, "reason": "1、公司为苹果全球200家核心供应商之一，富士康组件生产商；产品广泛应用于手机、平板电脑、笔记本电脑、智能穿戴设备等消费电子产品及其组件。\n2、子公司华阳通新切入昇腾服务器组装。", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 6.04, "first_limit_up": 1787625402, "break_limit_up_times": 2}, {"code": "600698", "name": "湖南天雁", "price": 7.28, "change_pct": 9.97, "reason": "公司间接控股股东将变更为兵器装备集团汽车业务分立的中央企业", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.87, "first_limit_up": 1787621650, "break_limit_up_times": 0}, {"code": "002041", "name": "登海种业", "price": 11.21, "change_pct": 10.01, "reason": "国内杂交玉米种子龙头企业", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 9.64, "first_limit_up": 1787621655, "break_limit_up_times": 3}, {"code": "002694", "name": "*ST顾地", "price": 2.34, "change_pct": 9.86, "reason": "塑料管道龙头企业，产品广泛应用于建筑给排水；管网改造是旧改重要环节之一", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 0.94, "first_limit_up": 1787627097, "break_limit_up_times": 0}, {"code": "600172", "name": "黄河旋风", "price": 13.99, "change_pct": 9.98, "reason": "公司自主研发的“金刚石—碳化硅复合材料”项目取得重大阶段性成果，核心性能指标达到国际先进水平，成功破解了长期困扰半导体产业的热膨胀失配难题，为我国高端半导体散热技术自主可控提供了关键支撑", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 14.43, "first_limit_up": 1787637018, "break_limit_up_times": 1}, {"code": "600785", "name": "新华百货", "price": 11.78, "change_pct": 9.99, "reason": "宁夏地区最大的商业零售企业，拟斥资2亿元至4亿元回购公司股份", "plates": ["大消费"], "limit_up_days": 3, "turnover_ratio": 22.6, "first_limit_up": 1787623010, "break_limit_up_times": 1}, {"code": "603912", "name": "佳力图", "price": 9.08, "change_pct": 10.06, "reason": "公司掌握磁悬浮压缩机在冷水机组产品中的应用技术，为数据中心等领域提供相关的制冷解决方案", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.62, "first_limit_up": 1787639658, "break_limit_up_times": 0}, {"code": "000017", "name": "深中华A", "price": 8.6, "change_pct": 9.97, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["大消费"], "limit_up_days": 4, "turnover_ratio": 13.12, "first_limit_up": 1787621100, "break_limit_up_times": 1}, {"code": "600371", "name": "万向德农", "price": 8.67, "change_pct": 10.03, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 16.27, "first_limit_up": 1787621599, "break_limit_up_times": 4}];
const RISK_STOCKS = {"002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600745": "ST/风险警示股"};