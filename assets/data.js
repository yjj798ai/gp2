const UPDATE_TIME = "2026-07-27 02:28";
const THS_HOT = [
  {
    "name": "存储芯片",
    "rise": 1.94,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续209天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": 3.35,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续86天上榜",
    "rankChg": 0,
    "etfName": "创新药ETF",
    "code": "886015"
  },
  {
    "name": "兵装重组概念",
    "rise": 2.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.36,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续256天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "脑机接口",
    "rise": 4.83,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "黄金概念",
    "rise": 1.94,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "PCB概念",
    "rise": 2.81,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续79天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "锂电池概念",
    "rise": 2.69,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "885710"
  },
  {
    "name": "商业航天",
    "rise": 2.59,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续185天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "算力租赁",
    "rise": 2.27,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续120天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "人形机器人",
    "rise": 2.63,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续420天上榜",
    "rankChg": 1,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "国家大基金持股",
    "rise": 1.81,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "军工",
    "rise": 2.58,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "高压氧舱",
    "rise": 4.64,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 3,
    "etfName": "医药ETF",
    "code": "886018"
  },
  {
    "name": "先进封装",
    "rise": 2.12,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续49天上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "AI应用",
    "rise": 2.72,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "芯片概念",
    "rise": 2.2,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续80天上榜",
    "rankChg": -2,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "ST板块",
    "rise": 1.69,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "光纤概念",
    "rise": 2.37,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续85天上榜",
    "rankChg": 0,
    "etfName": "G60创新ETF",
    "code": "886084"
  },
  {
    "name": "猪肉",
    "rise": 1.7,
    "rate": 0,
    "tag": "",
    "hotTag": "连续23天上榜",
    "rankChg": 1,
    "etfName": "农牧渔ETF",
    "code": "885573"
  }
];
const THS_EVENTS = [
  {
    "title": "脑机接口迎重大突破：视网膜芯片获准在欧上市 可帮助患者恢复视力",
    "desc": "",
    "heat": 534329,
    "direction": "脑机接口",
    "themes": [
      "脑机接口",
      "忆阻器神经动力学芯片"
    ],
    "stocks": [
      {
        "name": "成都华微",
        "code": "688709",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "“巨无霸”来了！长鑫科技今日登陆科创板",
    "desc": "",
    "heat": 455055,
    "direction": "长鑫科技IPO",
    "themes": [
      "长鑫存储",
      "存储芯片",
      "半导体设备"
    ],
    "stocks": [
      {
        "name": "N长鑫",
        "code": "688825",
        "chg": 471.47806
      }
    ]
  },
  {
    "title": "宁德时代：587Ah 储能大电芯已实现规模化交付，今明年储能市场仍将保持较快速增长",
    "desc": "",
    "heat": 411592,
    "direction": "宁德时代",
    "themes": [
      "宁德时代概念",
      "电池"
    ],
    "stocks": [
      {
        "name": "紫建电子",
        "code": "301121",
        "chg": 19.985826
      }
    ]
  },
  {
    "title": "2026年暑期档电影票房突破55亿元",
    "desc": "",
    "heat": 314749,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "奥飞娱乐",
        "code": "002292",
        "chg": 8.368794
      }
    ]
  },
  {
    "title": "被罚没51.79亿元！携程回应：坚决服从",
    "desc": "",
    "heat": 281283,
    "direction": "旅游及酒店",
    "themes": [
      "旅游概念",
      "旅游及酒店"
    ],
    "stocks": [
      {
        "name": "亚振家居",
        "code": "603389",
        "chg": 10.0
      }
    ]
  },
  {
    "title": "成立仅三年，营收暴涨至10亿元，智元机器人将赴港IPO",
    "desc": "",
    "heat": 239813,
    "direction": "智元机器人",
    "themes": [
      "智元"
    ],
    "stocks": [
      {
        "name": "汉威科技",
        "code": "300007",
        "chg": 5.27027
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "电子布",
    "change": "+6.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "玻纤",
    "change": "+6.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "血氧仪",
    "change": "+5.47%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "脑科学",
    "change": "+5.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子特气",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化妆品",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锆",
    "change": "+3.69%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "口含烟",
    "change": "+3.63%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "被动元件",
    "change": "+3.62%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "氟化工",
    "change": "+3.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "辅助生殖",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "工业气体",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "量子计算",
    "change": "+3.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "固态电池",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "陶瓷基板",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医美",
    "change": "+3.45%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷酸铁锂",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "口腔",
    "change": "+3.43%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+3.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002208",
    "name": "合肥城建",
    "hot_rank": 8,
    "hot_rank_chg": 4,
    "stock_cnt": 5813,
    "price": "12.89",
    "change": "-5.22",
    "market_id": "33",
    "circulate_market_value": "10351601500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "债转股 · AMC",
        "change_pct": 1.58
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 1.64
      },
      {
        "name": "房地产",
        "change_pct": 2.3
      },
      {
        "name": "强势人气股",
        "change_pct": 2.15
      },
      {
        "name": "安徽国企改革",
        "change_pct": 1.11
      },
      {
        "name": "住房租赁",
        "change_pct": 2.14
      },
      {
        "name": "物业管理",
        "change_pct": 2.49
      },
      {
        "name": "国企改革",
        "change_pct": 1.77
      },
      {
        "name": "旧改",
        "change_pct": 2.37
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 11,
    "hot_rank_chg": 8,
    "stock_cnt": 5813,
    "price": "5.50",
    "change": "1.85",
    "market_id": "17",
    "circulate_market_value": "13851804000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 2.54
      },
      {
        "name": "工业大麻",
        "change_pct": 2.29
      },
      {
        "name": "中药",
        "change_pct": 2.9
      },
      {
        "name": "强势人气股",
        "change_pct": 2.15
      },
      {
        "name": "保健品",
        "change_pct": 2.4
      },
      {
        "name": "民营医院",
        "change_pct": 3.35
      },
      {
        "name": "医药",
        "change_pct": 3.04
      },
      {
        "name": "化学原料药",
        "change_pct": 3.33
      },
      {
        "name": "流感",
        "change_pct": 2.69
      },
      {
        "name": "振兴东北",
        "change_pct": 1.74
      },
      {
        "name": "食品",
        "change_pct": 2.0
      }
    ]
  },
  {
    "code": "002083",
    "name": "孚日股份",
    "hot_rank": 14,
    "hot_rank_chg": -1,
    "stock_cnt": 5813,
    "price": "11.65",
    "change": "1.13",
    "market_id": "33",
    "circulate_market_value": "11028344500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 2.57
      },
      {
        "name": "锂电池",
        "change_pct": 3.34
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 2.93
      },
      {
        "name": "举牌",
        "change_pct": 1.52
      },
      {
        "name": "纺织服装",
        "change_pct": 2.91
      },
      {
        "name": "山东国企改革",
        "change_pct": 2.07
      },
      {
        "name": "教育",
        "change_pct": 2.11
      },
      {
        "name": "外贸受益概念",
        "change_pct": 2.3
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.63
      },
      {
        "name": "抗菌面料",
        "change_pct": 2.93
      },
      {
        "name": "国企改革",
        "change_pct": 1.77
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 2.84
      }
    ]
  },
  {
    "code": "000533",
    "name": "顺钠股份",
    "hot_rank": 15,
    "hot_rank_chg": 3,
    "stock_cnt": 5813,
    "price": "10.51",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "7198324200.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "数据中心",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.2
      },
      {
        "name": "核电",
        "change_pct": 2.35
      },
      {
        "name": "充电桩",
        "change_pct": 2.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.63
      },
      {
        "name": "储能",
        "change_pct": 2.61
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 2.43
      },
      {
        "name": "智能电网",
        "change_pct": 2.35
      },
      {
        "name": "核聚变",
        "change_pct": 3.02
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 18,
    "hot_rank_chg": 19,
    "stock_cnt": 5813,
    "price": "6.13",
    "change": "-2.54",
    "market_id": "17",
    "circulate_market_value": "75988026000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.68
      },
      {
        "name": "核电",
        "change_pct": 2.35
      },
      {
        "name": "强势人气股",
        "change_pct": 2.15
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.89
      },
      {
        "name": "水电",
        "change_pct": 0.68
      },
      {
        "name": "火电",
        "change_pct": 0.3
      },
      {
        "name": "光伏",
        "change_pct": 2.29
      },
      {
        "name": "风电",
        "change_pct": 2.6
      },
      {
        "name": "国企改革",
        "change_pct": 1.77
      },
      {
        "name": "算电协同",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "002498",
    "name": "汉缆股份",
    "hot_rank": 21,
    "hot_rank_chg": 0,
    "stock_cnt": 5813,
    "price": "6.77",
    "change": "4.15",
    "market_id": "33",
    "circulate_market_value": "22522409000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.2
      },
      {
        "name": "核电",
        "change_pct": 2.35
      },
      {
        "name": "5G",
        "change_pct": 2.51
      },
      {
        "name": "一带一路",
        "change_pct": 1.82
      },
      {
        "name": "充电桩",
        "change_pct": 2.06
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.54
      },
      {
        "name": "风电",
        "change_pct": 2.6
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.63
      },
      {
        "name": "储能",
        "change_pct": 2.61
      },
      {
        "name": "特高压",
        "change_pct": 2.14
      },
      {
        "name": "智能电网",
        "change_pct": 2.35
      },
      {
        "name": "海洋经济",
        "change_pct": 1.82
      }
    ]
  },
  {
    "code": "002298",
    "name": "中电鑫龙",
    "hot_rank": 24,
    "hot_rank_chg": -7,
    "stock_cnt": 5813,
    "price": "8.26",
    "change": "1.98",
    "market_id": "33",
    "circulate_market_value": "5457852700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "泛在电力物联网",
        "change_pct": 2.2
      },
      {
        "name": "国产软件",
        "change_pct": 2.48
      },
      {
        "name": "人工智能",
        "change_pct": 2.59
      },
      {
        "name": "充电桩",
        "change_pct": 2.06
      },
      {
        "name": "云计算数据中心",
        "change_pct": 2.04
      },
      {
        "name": "军民融合",
        "change_pct": 2.62
      },
      {
        "name": "磁悬浮",
        "change_pct": 2.99
      },
      {
        "name": "人脸识别",
        "change_pct": 2.66
      },
      {
        "name": "水利",
        "change_pct": 2.3
      },
      {
        "name": "物联网",
        "change_pct": 2.46
      },
      {
        "name": "大数据",
        "change_pct": 2.49
      },
      {
        "name": "智慧城市",
        "change_pct": 2.6
      },
      {
        "name": "军工",
        "change_pct": 2.5
      },
      {
        "name": "PPP",
        "change_pct": -0.9
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.63
      },
      {
        "name": "储能",
        "change_pct": 2.61
      },
      {
        "name": "智慧安防",
        "change_pct": 2.76
      },
      {
        "name": "无人机",
        "change_pct": 2.47
      },
      {
        "name": "虚拟电厂",
        "change_pct": 2.1
      },
      {
        "name": "信创",
        "change_pct": 2.34
      },
      {
        "name": "元宇宙",
        "change_pct": 2.5
      },
      {
        "name": "东数西算/算力",
        "change_pct": 2.16
      },
      {
        "name": "新型城镇化",
        "change_pct": 2.53
      },
      {
        "name": "AIGC概念",
        "change_pct": 2.66
      },
      {
        "name": "数字乡村",
        "change_pct": 2.35
      },
      {
        "name": "华为海思",
        "change_pct": 2.47
      },
      {
        "name": "闪存",
        "change_pct": 1.67
      },
      {
        "name": "UWB超宽带",
        "change_pct": 2.69
      },
      {
        "name": "智慧政务",
        "change_pct": 2.49
      },
      {
        "name": "特高压",
        "change_pct": 2.14
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 2.39
      },
      {
        "name": "华为产业链",
        "change_pct": 2.69
      },
      {
        "name": "时空大数据",
        "change_pct": 3.34
      },
      {
        "name": "服务器",
        "change_pct": 1.66
      },
      {
        "name": "智能电网",
        "change_pct": 2.35
      },
      {
        "name": "磁电存储",
        "change_pct": 1.9
      },
      {
        "name": "军工信息化",
        "change_pct": 3.18
      },
      {
        "name": "光纤概念",
        "change_pct": 2.74
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.38
      }
    ]
  },
  {
    "code": "600744",
    "name": "华银电力",
    "hot_rank": 29,
    "hot_rank_chg": 27,
    "stock_cnt": 5813,
    "price": "7.42",
    "change": "-1.46",
    "market_id": "17",
    "circulate_market_value": "15070942000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.68
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.89
      },
      {
        "name": "火电",
        "change_pct": 0.3
      },
      {
        "name": "风电",
        "change_pct": 2.6
      },
      {
        "name": "储能",
        "change_pct": 2.61
      },
      {
        "name": "碳中和",
        "change_pct": 1.73
      },
      {
        "name": "国企改革",
        "change_pct": 1.77
      }
    ]
  },
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 31,
    "hot_rank_chg": -1,
    "stock_cnt": 5813,
    "price": "10.29",
    "change": "-9.97",
    "market_id": "17",
    "circulate_market_value": "7000489500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.11
      },
      {
        "name": "雄安新区",
        "change_pct": 1.97
      },
      {
        "name": "煤化工",
        "change_pct": 0.21
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 32,
    "hot_rank_chg": -10,
    "stock_cnt": 5813,
    "price": "5.85",
    "change": "1.04",
    "market_id": "33",
    "circulate_market_value": "206897730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.96
      },
      {
        "name": "手机产业链",
        "change_pct": 2.55
      },
      {
        "name": "超高清视频",
        "change_pct": 2.13
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.76
      },
      {
        "name": "电竞",
        "change_pct": 2.98
      },
      {
        "name": "半导体",
        "change_pct": 2.01
      },
      {
        "name": "人工智能",
        "change_pct": 2.59
      },
      {
        "name": "互联网医疗",
        "change_pct": 3.06
      },
      {
        "name": "VR&AR",
        "change_pct": 2.39
      },
      {
        "name": "OLED",
        "change_pct": 2.51
      },
      {
        "name": "京津冀",
        "change_pct": 2.01
      },
      {
        "name": "物联网",
        "change_pct": 2.46
      },
      {
        "name": "指纹识别",
        "change_pct": 1.95
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.61
      },
      {
        "name": "白马股",
        "change_pct": 0.48
      },
      {
        "name": "智能制造",
        "change_pct": 2.67
      },
      {
        "name": "小米概念股",
        "change_pct": 2.53
      },
      {
        "name": "国产芯片",
        "change_pct": 1.95
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.57
      },
      {
        "name": "全息概念",
        "change_pct": 2.23
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.15
      },
      {
        "name": "MicroLED",
        "change_pct": 2.66
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.04
      },
      {
        "name": "智能手表",
        "change_pct": 2.51
      },
      {
        "name": "MiniLED",
        "change_pct": 2.6
      },
      {
        "name": "传感器",
        "change_pct": 2.42
      },
      {
        "name": "大硅片",
        "change_pct": 2.55
      },
      {
        "name": "AI PC",
        "change_pct": 2.49
      },
      {
        "name": "华为产业链",
        "change_pct": 2.69
      },
      {
        "name": "回购",
        "change_pct": 1.86
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.86
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.19
      }
    ]
  },
  {
    "code": "300164",
    "name": "通源石油",
    "hot_rank": 40,
    "hot_rank_chg": 143,
    "stock_cnt": 5813,
    "price": "10.68",
    "change": "-10.64",
    "market_id": "33",
    "circulate_market_value": "6222859000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.43
      },
      {
        "name": "一带一路",
        "change_pct": 1.82
      },
      {
        "name": "天然气",
        "change_pct": 0.29
      },
      {
        "name": "油气改革",
        "change_pct": 0.15
      },
      {
        "name": "页岩气",
        "change_pct": 0.19
      },
      {
        "name": "深地经济",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "601678",
    "name": "滨化股份",
    "hot_rank": 42,
    "hot_rank_chg": -7,
    "stock_cnt": 5813,
    "price": "6.90",
    "change": "5.50",
    "market_id": "17",
    "circulate_market_value": "14099020000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 3.34
      },
      {
        "name": "军民融合",
        "change_pct": 2.62
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": 2.54
      },
      {
        "name": "烧碱",
        "change_pct": 1.8
      },
      {
        "name": "军工",
        "change_pct": 2.5
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.63
      },
      {
        "name": "环氧丙烷",
        "change_pct": 1.9
      },
      {
        "name": "氟化工",
        "change_pct": 3.6
      },
      {
        "name": "双氧水",
        "change_pct": 2.54
      },
      {
        "name": "液氯",
        "change_pct": 2.02
      }
    ]
  },
  {
    "code": "603928",
    "name": "兴业股份",
    "hot_rank": 48,
    "hot_rank_chg": 170,
    "stock_cnt": 5813,
    "price": "11.22",
    "change": "3.89",
    "market_id": "17",
    "circulate_market_value": "3822698900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 2.16
      },
      {
        "name": "锂电池",
        "change_pct": 3.38
      },
      {
        "name": "强势人气股",
        "change_pct": 2.16
      },
      {
        "name": "大飞机",
        "change_pct": 2.37
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.66
      },
      {
        "name": "智能制造",
        "change_pct": 2.67
      },
      {
        "name": "3D打印",
        "change_pct": 3.38
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.5
      }
    ]
  },
  {
    "code": "000595",
    "name": "新能股份",
    "hot_rank": 49,
    "hot_rank_chg": -24,
    "stock_cnt": 5813,
    "price": "5.87",
    "change": "-3.29",
    "market_id": "33",
    "circulate_market_value": "6683912900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 2.57
      },
      {
        "name": "高铁轨交",
        "change_pct": 2.43
      },
      {
        "name": "航母",
        "change_pct": 1.93
      },
      {
        "name": "光伏",
        "change_pct": 2.35
      },
      {
        "name": "风电",
        "change_pct": 2.69
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "机器人",
        "change_pct": 2.68
      },
      {
        "name": "储能",
        "change_pct": 2.66
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      },
      {
        "name": "宁夏概念",
        "change_pct": 2.11
      }
    ]
  },
  {
    "code": "000670",
    "name": "盈方微",
    "hot_rank": 53,
    "hot_rank_chg": -14,
    "stock_cnt": 5813,
    "price": "6.79",
    "change": "7.10",
    "market_id": "33",
    "circulate_market_value": "5638756000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 3.51
      },
      {
        "name": "资产重组",
        "change_pct": 2.5
      },
      {
        "name": "半导体",
        "change_pct": 1.89
      },
      {
        "name": "小米概念股",
        "change_pct": 2.47
      },
      {
        "name": "国产芯片",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "600726",
    "name": "华电能源",
    "hot_rank": 57,
    "hot_rank_chg": 61,
    "stock_cnt": 5813,
    "price": "6.02",
    "change": "-4.14",
    "market_id": "17",
    "circulate_market_value": "45001524000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.0
      },
      {
        "name": "央企改革",
        "change_pct": 1.75
      },
      {
        "name": "强势人气股",
        "change_pct": 2.16
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.92
      },
      {
        "name": "火电",
        "change_pct": 0.37
      },
      {
        "name": "振兴东北",
        "change_pct": 1.84
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "600617",
    "name": "国新能源",
    "hot_rank": 60,
    "hot_rank_chg": 5,
    "stock_cnt": 5813,
    "price": "3.73",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6622774200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "天然气",
    "xgb_concepts": [
      {
        "name": "山西国企改革",
        "change_pct": 1.2
      },
      {
        "name": "天然气",
        "change_pct": 0.38
      },
      {
        "name": "油气改革",
        "change_pct": 0.21
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "600698",
    "name": "湖南天雁",
    "hot_rank": 61,
    "hot_rank_chg": -14,
    "stock_cnt": 5813,
    "price": "6.91",
    "change": "1.02",
    "market_id": "17",
    "circulate_market_value": "5738421500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.75
      },
      {
        "name": "军工集团",
        "change_pct": 2.28
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.64
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "001248",
    "name": "华润新能源",
    "hot_rank": 64,
    "hot_rank_chg": 36,
    "stock_cnt": 5813,
    "price": "12.90",
    "change": "1.57",
    "market_id": "33",
    "circulate_market_value": "13705009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.75
      },
      {
        "name": "次新股",
        "change_pct": 1.45
      },
      {
        "name": "光伏",
        "change_pct": 2.35
      },
      {
        "name": "风电",
        "change_pct": 2.69
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 71,
    "hot_rank_chg": -17,
    "stock_cnt": 5813,
    "price": "10.75",
    "change": "-2.54",
    "market_id": "17",
    "circulate_market_value": "1740662300000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 0.46
      },
      {
        "name": "央企改革",
        "change_pct": 1.75
      },
      {
        "name": "一带一路",
        "change_pct": 1.88
      },
      {
        "name": "石油化工",
        "change_pct": 0.87
      },
      {
        "name": "天然气",
        "change_pct": 0.38
      },
      {
        "name": "油气改革",
        "change_pct": 0.21
      },
      {
        "name": "可燃冰",
        "change_pct": -0.01
      },
      {
        "name": "中字头",
        "change_pct": 0.73
      },
      {
        "name": "页岩气",
        "change_pct": 0.25
      },
      {
        "name": "丁辛醇",
        "change_pct": 0.67
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "002388",
    "name": "新亚制程",
    "hot_rank": 73,
    "hot_rank_chg": 0,
    "stock_cnt": 5813,
    "price": "4.80",
    "change": "10.09",
    "market_id": "33",
    "circulate_market_value": "2429416500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "锂电材料",
    "xgb_concepts": [
      {
        "name": "仪器仪表",
        "change_pct": 2.67
      },
      {
        "name": "锂电池",
        "change_pct": 3.38
      },
      {
        "name": "ST摘帽",
        "change_pct": 2.57
      },
      {
        "name": "有机硅",
        "change_pct": 3.26
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.66
      },
      {
        "name": "华为产业链",
        "change_pct": 2.67
      },
      {
        "name": "供应链金融",
        "change_pct": 1.88
      }
    ]
  },
  {
    "code": "002300",
    "name": "太阳电缆",
    "hot_rank": 74,
    "hot_rank_chg": -33,
    "stock_cnt": 5813,
    "price": "7.39",
    "change": "4.08",
    "market_id": "33",
    "circulate_market_value": "5337760100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 2.39
      },
      {
        "name": "充电桩",
        "change_pct": 2.08
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.54
      },
      {
        "name": "军民融合",
        "change_pct": 2.64
      },
      {
        "name": "光伏",
        "change_pct": 2.35
      },
      {
        "name": "风电",
        "change_pct": 2.69
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.66
      },
      {
        "name": "特高压",
        "change_pct": 2.23
      },
      {
        "name": "自贸区",
        "change_pct": 2.03
      },
      {
        "name": "海洋经济",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "002218",
    "name": "拓日新能",
    "hot_rank": 79,
    "hot_rank_chg": -22,
    "stock_cnt": 5813,
    "price": "4.08",
    "change": "-2.86",
    "market_id": "33",
    "circulate_market_value": "5661725600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "玻璃",
        "change_pct": 2.13
      },
      {
        "name": "光伏",
        "change_pct": 2.35
      },
      {
        "name": "BIPV概念",
        "change_pct": 2.44
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 2.06
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 2.37
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "002490",
    "name": "山东墨龙",
    "hot_rank": 81,
    "hot_rank_chg": 158,
    "stock_cnt": 5813,
    "price": "7.28",
    "change": "-8.08",
    "market_id": "33",
    "circulate_market_value": "3943736200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "油服",
        "change_pct": -0.39
      },
      {
        "name": "油气管网",
        "change_pct": 0.86
      },
      {
        "name": "海工装备",
        "change_pct": 1.49
      },
      {
        "name": "举牌",
        "change_pct": 1.61
      },
      {
        "name": "天然气",
        "change_pct": 0.38
      },
      {
        "name": "山东国企改革",
        "change_pct": 2.2
      },
      {
        "name": "风电",
        "change_pct": 2.69
      },
      {
        "name": "页岩气",
        "change_pct": 0.25
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      },
      {
        "name": "深地经济",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 85,
    "hot_rank_chg": 54,
    "stock_cnt": 5813,
    "price": "5.73",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "5918722100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "覆铜板",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 2.63
      },
      {
        "name": "锂电池",
        "change_pct": 3.38
      },
      {
        "name": "强势人气股",
        "change_pct": 2.16
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 3.35
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 2.21
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 2.61
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 86,
    "hot_rank_chg": 240,
    "stock_cnt": 5813,
    "price": "9.52",
    "change": "3.48",
    "market_id": "33",
    "circulate_market_value": "7701860800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 3.23
      },
      {
        "name": "大飞机",
        "change_pct": 2.37
      },
      {
        "name": "北斗导航",
        "change_pct": 2.56
      },
      {
        "name": "高铁轨交",
        "change_pct": 2.43
      },
      {
        "name": "军民融合",
        "change_pct": 2.64
      },
      {
        "name": "磁悬浮",
        "change_pct": 3.02
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "碳纤维",
        "change_pct": 2.89
      },
      {
        "name": "无人机",
        "change_pct": 2.52
      },
      {
        "name": "航天",
        "change_pct": 2.62
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.88
      },
      {
        "name": "低空经济",
        "change_pct": 2.62
      },
      {
        "name": "海洋经济",
        "change_pct": 1.87
      }
    ]
  },
  {
    "code": "600178",
    "name": "东安动力",
    "hot_rank": 94,
    "hot_rank_chg": -5,
    "stock_cnt": 5813,
    "price": "9.41",
    "change": "-0.95",
    "market_id": "17",
    "circulate_market_value": "4389540700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.75
      },
      {
        "name": "股权转让",
        "change_pct": 2.61
      },
      {
        "name": "军工集团",
        "change_pct": 2.28
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.64
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "新能源汽车",
        "change_pct": 2.66
      },
      {
        "name": "振兴东北",
        "change_pct": 1.84
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.57
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.21
      },
      {
        "name": "国企改革",
        "change_pct": 1.85
      }
    ]
  },
  {
    "code": "000100",
    "name": "TCL科技",
    "hot_rank": 95,
    "hot_rank_chg": -18,
    "stock_cnt": 5813,
    "price": "5.03",
    "change": "-0.20",
    "market_id": "33",
    "circulate_market_value": "101178351000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.91
      },
      {
        "name": "手机产业链",
        "change_pct": 2.5
      },
      {
        "name": "超高清视频",
        "change_pct": 2.13
      },
      {
        "name": "电竞",
        "change_pct": 3.04
      },
      {
        "name": "半导体",
        "change_pct": 1.89
      },
      {
        "name": "OLED",
        "change_pct": 2.47
      },
      {
        "name": "光伏",
        "change_pct": 2.35
      },
      {
        "name": "黑色家电",
        "change_pct": 2.03
      },
      {
        "name": "家电",
        "change_pct": 2.5
      },
      {
        "name": "智能制造",
        "change_pct": 2.67
      },
      {
        "name": "工业互联网",
        "change_pct": 2.31
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 2.47
      },
      {
        "name": "国产芯片",
        "change_pct": 1.86
      },
      {
        "name": "腾讯概念股",
        "change_pct": 2.52
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 2.52
      },
      {
        "name": "MicroLED",
        "change_pct": 2.62
      },
      {
        "name": "MiniLED",
        "change_pct": 2.57
      },
      {
        "name": "华为产业链",
        "change_pct": 2.67
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 2.09
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 98,
    "hot_rank_chg": 145,
    "stock_cnt": 5813,
    "price": "6.35",
    "change": "-0.31",
    "market_id": "33",
    "circulate_market_value": "4620159600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 2.15
      },
      {
        "name": "装配式建筑",
        "change_pct": 2.24
      },
      {
        "name": "风电",
        "change_pct": 2.69
      },
      {
        "name": "环氧丙烷",
        "change_pct": 1.94
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.36
      },
      {
        "name": "建筑节能",
        "change_pct": 2.34
      },
      {
        "name": "旧改",
        "change_pct": 2.43
      }
    ]
  },
  {
    "code": "002303",
    "name": "美盈森",
    "hot_rank": 99,
    "hot_rank_chg": -12,
    "stock_cnt": 5813,
    "price": "4.60",
    "change": "0.66",
    "market_id": "33",
    "circulate_market_value": "4447652900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": 2.46
      },
      {
        "name": "造纸",
        "change_pct": 2.09
      },
      {
        "name": "军民融合",
        "change_pct": 2.64
      },
      {
        "name": "包装印刷",
        "change_pct": 2.52
      },
      {
        "name": "军工",
        "change_pct": 2.54
      },
      {
        "name": "预制菜",
        "change_pct": 2.22
      },
      {
        "name": "人造肉",
        "change_pct": 1.85
      },
      {
        "name": "数字乡村",
        "change_pct": 2.32
      },
      {
        "name": "区块链",
        "change_pct": 2.48
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "49.48", "change": "471.36", "market_id": "17", "circulate_market_value": "222810370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 2, "hot_rank_chg": 4, "stock_cnt": 5813, "price": "35.26", "change": "10.02", "market_id": "17", "circulate_market_value": "25536293000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "军工装备"}, {"code": "001258", "name": "立新能源", "hot_rank": 3, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "14.33", "change": "9.98", "market_id": "33", "circulate_market_value": "13374527000.00", "change_type": "1", "change_section": "8", "change_days": "7", "change_reason": "风电光伏"}, {"code": "002156", "name": "通富微电", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5813, "price": "75.95", "change": "-0.90", "market_id": "33", "circulate_market_value": "115250496000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 5, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "397.10", "change": "3.68", "market_id": "33", "circulate_market_value": "1691635600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 6, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "40.78", "change": "-1.62", "market_id": "33", "circulate_market_value": "116633764000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": 26, "stock_cnt": 5813, "price": "17.92", "change": "10.01", "market_id": "17", "circulate_market_value": "37480436000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "002208", "name": "合肥城建", "hot_rank": 8, "hot_rank_chg": 4, "stock_cnt": 5813, "price": "12.89", "change": "-5.22", "market_id": "33", "circulate_market_value": "10351601500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "债转股 · AMC", "change_pct": 1.58}, {"name": "蚂蚁集团概念股", "change_pct": 1.64}, {"name": "房地产", "change_pct": 2.3}, {"name": "强势人气股", "change_pct": 2.15}, {"name": "安徽国企改革", "change_pct": 1.11}, {"name": "住房租赁", "change_pct": 2.14}, {"name": "物业管理", "change_pct": 2.49}, {"name": "国企改革", "change_pct": 1.77}, {"name": "旧改", "change_pct": 2.37}]}, {"code": "000021", "name": "深科技", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "42.76", "change": "1.83", "market_id": "33", "circulate_market_value": "67310893000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 10, "hot_rank_chg": 16, "stock_cnt": 5813, "price": "14.89", "change": "0.81", "market_id": "17", "circulate_market_value": "21928605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 11, "hot_rank_chg": 8, "stock_cnt": 5813, "price": "5.50", "change": "1.85", "market_id": "17", "circulate_market_value": "13851804000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 2.54}, {"name": "工业大麻", "change_pct": 2.29}, {"name": "中药", "change_pct": 2.9}, {"name": "强势人气股", "change_pct": 2.15}, {"name": "保健品", "change_pct": 2.4}, {"name": "民营医院", "change_pct": 3.35}, {"name": "医药", "change_pct": 3.04}, {"name": "化学原料药", "change_pct": 3.33}, {"name": "流感", "change_pct": 2.69}, {"name": "振兴东北", "change_pct": 1.74}, {"name": "食品", "change_pct": 2.0}]}, {"code": "001309", "name": "德明利", "hot_rank": 12, "hot_rank_chg": -2, "stock_cnt": 5813, "price": "399.39", "change": "-0.12", "market_id": "33", "circulate_market_value": "65926513000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002409", "name": "雅克科技", "hot_rank": 13, "hot_rank_chg": 7, "stock_cnt": 5813, "price": "169.35", "change": "10.00", "market_id": "33", "circulate_market_value": "53941827000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "HBM前驱体"}, {"code": "002083", "name": "孚日股份", "hot_rank": 14, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "11.65", "change": "1.13", "market_id": "33", "circulate_market_value": "11028344500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 2.57}, {"name": "锂电池", "change_pct": 3.34}, {"name": "优化生育（三孩）", "change_pct": 2.93}, {"name": "举牌", "change_pct": 1.52}, {"name": "纺织服装", "change_pct": 2.91}, {"name": "山东国企改革", "change_pct": 2.07}, {"name": "教育", "change_pct": 2.11}, {"name": "外贸受益概念", "change_pct": 2.3}, {"name": "新能源汽车", "change_pct": 2.63}, {"name": "抗菌面料", "change_pct": 2.93}, {"name": "国企改革", "change_pct": 1.77}, {"name": "新冠病毒防治", "change_pct": 2.84}]}, {"code": "000533", "name": "顺钠股份", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "10.51", "change": "10.05", "market_id": "33", "circulate_market_value": "7198324200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "数据中心", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.2}, {"name": "核电", "change_pct": 2.35}, {"name": "充电桩", "change_pct": 2.06}, {"name": "云计算数据中心", "change_pct": 2.04}, {"name": "新能源汽车", "change_pct": 2.63}, {"name": "储能", "change_pct": 2.61}, {"name": "阿里巴巴概念股", "change_pct": 2.43}, {"name": "智能电网", "change_pct": 2.35}, {"name": "核聚变", "change_pct": 3.02}]}, {"code": "600584", "name": "长电科技", "hot_rank": 16, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "82.51", "change": "-0.47", "market_id": "17", "circulate_market_value": "147644600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 17, "hot_rank_chg": -10, "stock_cnt": 5813, "price": "18.66", "change": "0.38", "market_id": "33", "circulate_market_value": "62000682000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601991", "name": "大唐发电", "hot_rank": 18, "hot_rank_chg": 19, "stock_cnt": 5813, "price": "6.13", "change": "-2.54", "market_id": "17", "circulate_market_value": "75988026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.68}, {"name": "核电", "change_pct": 2.35}, {"name": "强势人气股", "change_pct": 2.15}, {"name": "电力体制改革", "change_pct": 0.89}, {"name": "水电", "change_pct": 0.68}, {"name": "火电", "change_pct": 0.3}, {"name": "光伏", "change_pct": 2.29}, {"name": "风电", "change_pct": 2.6}, {"name": "国企改革", "change_pct": 1.77}, {"name": "算电协同", "change_pct": 2.3}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "437.36", "change": "-4.30", "market_id": "17", "circulate_market_value": "292371630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002879", "name": "长缆科技", "hot_rank": 20, "hot_rank_chg": -6, "stock_cnt": 5813, "price": "18.32", "change": "1.50", "market_id": "33", "circulate_market_value": "2512386900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002498", "name": "汉缆股份", "hot_rank": 21, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "6.77", "change": "4.15", "market_id": "33", "circulate_market_value": "22522409000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.2}, {"name": "核电", "change_pct": 2.35}, {"name": "5G", "change_pct": 2.51}, {"name": "一带一路", "change_pct": 1.82}, {"name": "充电桩", "change_pct": 2.06}, {"name": "氢能源/燃料电池", "change_pct": 2.54}, {"name": "风电", "change_pct": 2.6}, {"name": "新能源汽车", "change_pct": 2.63}, {"name": "储能", "change_pct": 2.61}, {"name": "特高压", "change_pct": 2.14}, {"name": "智能电网", "change_pct": 2.35}, {"name": "海洋经济", "change_pct": 1.82}]}, {"code": "603690", "name": "至纯科技", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "24.88", "change": "9.99", "market_id": "17", "circulate_market_value": "9528150500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "存储芯片"}, {"code": "600206", "name": "有研新材", "hot_rank": 23, "hot_rank_chg": -12, "stock_cnt": 5813, "price": "47.10", "change": "7.05", "market_id": "17", "circulate_market_value": "39872662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002298", "name": "中电鑫龙", "hot_rank": 24, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "8.26", "change": "1.98", "market_id": "33", "circulate_market_value": "5457852700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "泛在电力物联网", "change_pct": 2.2}, {"name": "国产软件", "change_pct": 2.48}, {"name": "人工智能", "change_pct": 2.59}, {"name": "充电桩", "change_pct": 2.06}, {"name": "云计算数据中心", "change_pct": 2.04}, {"name": "军民融合", "change_pct": 2.62}, {"name": "磁悬浮", "change_pct": 2.99}, {"name": "人脸识别", "change_pct": 2.66}, {"name": "水利", "change_pct": 2.3}, {"name": "物联网", "change_pct": 2.46}, {"name": "大数据", "change_pct": 2.49}, {"name": "智慧城市", "change_pct": 2.6}, {"name": "军工", "change_pct": 2.5}, {"name": "PPP", "change_pct": -0.9}, {"name": "新能源汽车", "change_pct": 2.63}, {"name": "储能", "change_pct": 2.61}, {"name": "智慧安防", "change_pct": 2.76}, {"name": "无人机", "change_pct": 2.47}, {"name": "虚拟电厂", "change_pct": 2.1}, {"name": "信创", "change_pct": 2.34}, {"name": "元宇宙", "change_pct": 2.5}, {"name": "东数西算/算力", "change_pct": 2.16}, {"name": "新型城镇化", "change_pct": 2.53}, {"name": "AIGC概念", "change_pct": 2.66}, {"name": "数字乡村", "change_pct": 2.35}, {"name": "华为海思", "change_pct": 2.47}, {"name": "闪存", "change_pct": 1.67}, {"name": "UWB超宽带", "change_pct": 2.69}, {"name": "智慧政务", "change_pct": 2.49}, {"name": "特高压", "change_pct": 2.14}, {"name": "华为云·鲲鹏", "change_pct": 2.39}, {"name": "华为产业链", "change_pct": 2.69}, {"name": "时空大数据", "change_pct": 3.34}, {"name": "服务器", "change_pct": 1.66}, {"name": "智能电网", "change_pct": 2.35}, {"name": "磁电存储", "change_pct": 1.9}, {"name": "军工信息化", "change_pct": 3.18}, {"name": "光纤概念", "change_pct": 2.74}, {"name": "雅江电站概念股", "change_pct": 1.38}]}, {"code": "600539", "name": "狮头股份", "hot_rank": 25, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "18.76", "change": "1.35", "market_id": "17", "circulate_market_value": "4314800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000815", "name": "美利云", "hot_rank": 26, "hot_rank_chg": 8, "stock_cnt": 5813, "price": "15.96", "change": "-1.42", "market_id": "33", "circulate_market_value": "11096398000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 27, "hot_rank_chg": 17, "stock_cnt": 5813, "price": "31.53", "change": "0.06", "market_id": "17", "circulate_market_value": "649574540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301234", "name": "五洲医疗", "hot_rank": 28, "hot_rank_chg": 58, "stock_cnt": 5813, "price": "70.50", "change": "20.00", "market_id": "33", "circulate_market_value": "2832028200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "跨界并购"}, {"code": "600744", "name": "华银电力", "hot_rank": 29, "hot_rank_chg": 27, "stock_cnt": 5813, "price": "7.42", "change": "-1.46", "market_id": "17", "circulate_market_value": "15070942000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.68}, {"name": "电力体制改革", "change_pct": 0.89}, {"name": "火电", "change_pct": 0.3}, {"name": "风电", "change_pct": 2.6}, {"name": "储能", "change_pct": 2.61}, {"name": "碳中和", "change_pct": 1.73}, {"name": "国企改革", "change_pct": 1.77}]}, {"code": "301583", "name": "托伦斯", "hot_rank": 30, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "171.00", "change": "-1.72", "market_id": "33", "circulate_market_value": "5272164800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 31, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "10.29", "change": "-9.97", "market_id": "17", "circulate_market_value": "7000489500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.11}, {"name": "雄安新区", "change_pct": 1.97}, {"name": "煤化工", "change_pct": 0.21}]}, {"code": "000725", "name": "京东方A", "hot_rank": 32, "hot_rank_chg": -10, "stock_cnt": 5813, "price": "5.85", "change": "1.04", "market_id": "33", "circulate_market_value": "206897730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.96}, {"name": "手机产业链", "change_pct": 2.55}, {"name": "超高清视频", "change_pct": 2.13}, {"name": "苹果产业链", "change_pct": 2.76}, {"name": "电竞", "change_pct": 2.98}, {"name": "半导体", "change_pct": 2.01}, {"name": "人工智能", "change_pct": 2.59}, {"name": "互联网医疗", "change_pct": 3.06}, {"name": "VR&AR", "change_pct": 2.39}, {"name": "OLED", "change_pct": 2.51}, {"name": "京津冀", "change_pct": 2.01}, {"name": "物联网", "change_pct": 2.46}, {"name": "指纹识别", "change_pct": 1.95}, {"name": "汽车零部件", "change_pct": 2.61}, {"name": "白马股", "change_pct": 0.48}, {"name": "智能制造", "change_pct": 2.67}, {"name": "小米概念股", "change_pct": 2.53}, {"name": "国产芯片", "change_pct": 1.95}, {"name": "液晶面板/LCD", "change_pct": 2.57}, {"name": "全息概念", "change_pct": 2.23}, {"name": "理想汽车概念股", "change_pct": 2.15}, {"name": "MicroLED", "change_pct": 2.66}, {"name": "钙钛矿电池", "change_pct": 2.04}, {"name": "智能手表", "change_pct": 2.51}, {"name": "MiniLED", "change_pct": 2.6}, {"name": "传感器", "change_pct": 2.42}, {"name": "大硅片", "change_pct": 2.55}, {"name": "AI PC", "change_pct": 2.49}, {"name": "华为产业链", "change_pct": 2.69}, {"name": "回购", "change_pct": 1.86}, {"name": "智能眼镜/MR头显", "change_pct": 2.86}, {"name": "玻璃基板封装", "change_pct": 2.19}]}, {"code": "002384", "name": "东山精密", "hot_rank": 33, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "200.75", "change": "0.79", "market_id": "33", "circulate_market_value": "278304090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 34, "hot_rank_chg": 29, "stock_cnt": 5813, "price": "15.71", "change": "-0.38", "market_id": "17", "circulate_market_value": "12368112300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 35, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "32.04", "change": "4.98", "market_id": "33", "circulate_market_value": "34563706000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 36, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "1045.27", "change": "-0.12", "market_id": "33", "circulate_market_value": "1160186750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300433", "name": "蓝思科技", "hot_rank": 37, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "37.17", "change": "-0.40", "market_id": "33", "circulate_market_value": "184723750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 38, "hot_rank_chg": 14, "stock_cnt": 5813, "price": "104.88", "change": "-3.43", "market_id": "17", "circulate_market_value": "37832670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 39, "hot_rank_chg": -8, "stock_cnt": 5813, "price": "31.01", "change": "-5.80", "market_id": "33", "circulate_market_value": "23487442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300164", "name": "通源石油", "hot_rank": 40, "hot_rank_chg": 143, "stock_cnt": 5813, "price": "10.68", "change": "-10.64", "market_id": "33", "circulate_market_value": "6222859000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.43}, {"name": "一带一路", "change_pct": 1.82}, {"name": "天然气", "change_pct": 0.29}, {"name": "油气改革", "change_pct": 0.15}, {"name": "页岩气", "change_pct": 0.19}, {"name": "深地经济", "change_pct": 0.01}]}, {"code": "601179", "name": "中国西电", "hot_rank": 41, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "13.81", "change": "1.92", "market_id": "17", "circulate_market_value": "70788435000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601678", "name": "滨化股份", "hot_rank": 42, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "6.90", "change": "5.50", "market_id": "17", "circulate_market_value": "14099020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "锂电池", "change_pct": 3.34}, {"name": "军民融合", "change_pct": 2.62}, {"name": "氢能源/燃料电池", "change_pct": 2.54}, {"name": "烧碱", "change_pct": 1.8}, {"name": "军工", "change_pct": 2.5}, {"name": "新能源汽车", "change_pct": 2.63}, {"name": "环氧丙烷", "change_pct": 1.9}, {"name": "氟化工", "change_pct": 3.6}, {"name": "双氧水", "change_pct": 2.54}, {"name": "液氯", "change_pct": 2.02}]}, {"code": "002173", "name": "创新医疗", "hot_rank": 43, "hot_rank_chg": 41, "stock_cnt": 5813, "price": "20.69", "change": "9.99", "market_id": "33", "circulate_market_value": "8707697500.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "脑机接口"}, {"code": "600487", "name": "亨通光电", "hot_rank": 44, "hot_rank_chg": 1, "stock_cnt": 5813, "price": "54.36", "change": "3.74", "market_id": "17", "circulate_market_value": "133453820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 45, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "77.62", "change": "-0.59", "market_id": "33", "circulate_market_value": "50688625000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 46, "hot_rank_chg": 198, "stock_cnt": 5813, "price": "16.87", "change": "9.97", "market_id": "33", "circulate_market_value": "7630955600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力"}, {"code": "603221", "name": "爱丽家居", "hot_rank": 47, "hot_rank_chg": 13, "stock_cnt": 5813, "price": "15.40", "change": "10.00", "market_id": "17", "circulate_market_value": "3730958000.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "拟收购欧康诺"}, {"code": "603928", "name": "兴业股份", "hot_rank": 48, "hot_rank_chg": 170, "stock_cnt": 5813, "price": "11.22", "change": "3.89", "market_id": "17", "circulate_market_value": "3822698900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 2.16}, {"name": "锂电池", "change_pct": 3.38}, {"name": "强势人气股", "change_pct": 2.16}, {"name": "大飞机", "change_pct": 2.37}, {"name": "新能源汽车", "change_pct": 2.66}, {"name": "智能制造", "change_pct": 2.67}, {"name": "3D打印", "change_pct": 3.38}, {"name": "光刻机（胶）", "change_pct": 2.5}]}, {"code": "000595", "name": "新能股份", "hot_rank": 49, "hot_rank_chg": -24, "stock_cnt": 5813, "price": "5.87", "change": "-3.29", "market_id": "33", "circulate_market_value": "6683912900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 2.57}, {"name": "高铁轨交", "change_pct": 2.43}, {"name": "航母", "change_pct": 1.93}, {"name": "光伏", "change_pct": 2.35}, {"name": "风电", "change_pct": 2.69}, {"name": "军工", "change_pct": 2.54}, {"name": "机器人", "change_pct": 2.68}, {"name": "储能", "change_pct": 2.66}, {"name": "国企改革", "change_pct": 1.85}, {"name": "宁夏概念", "change_pct": 2.11}]}, {"code": "000977", "name": "浪潮信息", "hot_rank": 50, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "84.30", "change": "-1.18", "market_id": "33", "circulate_market_value": "123653921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 51, "hot_rank_chg": 27, "stock_cnt": 5813, "price": "480.78", "change": "0.86", "market_id": "33", "circulate_market_value": "602174680000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 52, "hot_rank_chg": 28, "stock_cnt": 5813, "price": "24.06", "change": "-2.98", "market_id": "33", "circulate_market_value": "16041196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000670", "name": "盈方微", "hot_rank": 53, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "6.79", "change": "7.10", "market_id": "33", "circulate_market_value": "5638756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 3.51}, {"name": "资产重组", "change_pct": 2.5}, {"name": "半导体", "change_pct": 1.89}, {"name": "小米概念股", "change_pct": 2.47}, {"name": "国产芯片", "change_pct": 1.86}]}, {"code": "603823", "name": "百合花", "hot_rank": 54, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "72.39", "change": "-4.64", "market_id": "17", "circulate_market_value": "30140858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002265", "name": "建设工业", "hot_rank": 55, "hot_rank_chg": -7, "stock_cnt": 5813, "price": "19.82", "change": "2.48", "market_id": "33", "circulate_market_value": "20474861000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002415", "name": "海康威视", "hot_rank": 56, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "37.21", "change": "4.85", "market_id": "33", "circulate_market_value": "336605150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600726", "name": "华电能源", "hot_rank": 57, "hot_rank_chg": 61, "stock_cnt": 5813, "price": "6.02", "change": "-4.14", "market_id": "17", "circulate_market_value": "45001524000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.0}, {"name": "央企改革", "change_pct": 1.75}, {"name": "强势人气股", "change_pct": 2.16}, {"name": "电力体制改革", "change_pct": 0.92}, {"name": "火电", "change_pct": 0.37}, {"name": "振兴东北", "change_pct": 1.84}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 58, "hot_rank_chg": 3, "stock_cnt": 5813, "price": "39.51", "change": "5.81", "market_id": "17", "circulate_market_value": "156917400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001896", "name": "豫能控股", "hot_rank": 59, "hot_rank_chg": 40, "stock_cnt": 5813, "price": "14.06", "change": "-2.29", "market_id": "33", "circulate_market_value": "21452485000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600617", "name": "国新能源", "hot_rank": 60, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "3.73", "change": "10.03", "market_id": "17", "circulate_market_value": "6622774200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "天然气", "xgb_concepts": [{"name": "山西国企改革", "change_pct": 1.2}, {"name": "天然气", "change_pct": 0.38}, {"name": "油气改革", "change_pct": 0.21}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "600698", "name": "湖南天雁", "hot_rank": 61, "hot_rank_chg": -14, "stock_cnt": 5813, "price": "6.91", "change": "1.02", "market_id": "17", "circulate_market_value": "5738421500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.75}, {"name": "军工集团", "change_pct": 2.28}, {"name": "汽车零部件", "change_pct": 2.64}, {"name": "军工", "change_pct": 2.54}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "920176", "name": "维琪科技", "hot_rank": 62, "hot_rank_chg": 3124, "stock_cnt": 5813, "price": "53.00", "change": "139.17", "market_id": "151", "circulate_market_value": "421191000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 63, "hot_rank_chg": 83, "stock_cnt": 5813, "price": "19.09", "change": "0.26", "market_id": "17", "circulate_market_value": "333327480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001248", "name": "华润新能源", "hot_rank": 64, "hot_rank_chg": 36, "stock_cnt": 5813, "price": "12.90", "change": "1.57", "market_id": "33", "circulate_market_value": "13705009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.75}, {"name": "次新股", "change_pct": 1.45}, {"name": "光伏", "change_pct": 2.35}, {"name": "风电", "change_pct": 2.69}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "688008", "name": "澜起科技", "hot_rank": 65, "hot_rank_chg": 11, "stock_cnt": 5813, "price": "226.81", "change": "-2.93", "market_id": "17", "circulate_market_value": "259644040000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002709", "name": "天赐材料", "hot_rank": 66, "hot_rank_chg": 24, "stock_cnt": 5813, "price": "38.05", "change": "3.31", "market_id": "33", "circulate_market_value": "57417869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600938", "name": "中国海油", "hot_rank": 67, "hot_rank_chg": 122, "stock_cnt": 5813, "price": "30.89", "change": "-3.20", "market_id": "17", "circulate_market_value": "92361100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600988", "name": "赤峰黄金", "hot_rank": 68, "hot_rank_chg": 136, "stock_cnt": 5813, "price": "36.74", "change": "0.69", "market_id": "17", "circulate_market_value": "61132104000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 69, "hot_rank_chg": -1, "stock_cnt": 5813, "price": "44.24", "change": "9.99", "market_id": "33", "circulate_market_value": "51186245000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "MLCC"}, {"code": "688981", "name": "中芯国际", "hot_rank": 70, "hot_rank_chg": -38, "stock_cnt": 5813, "price": "140.61", "change": "-2.17", "market_id": "17", "circulate_market_value": "281158490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601857", "name": "中国石油", "hot_rank": 71, "hot_rank_chg": -17, "stock_cnt": 5813, "price": "10.75", "change": "-2.54", "market_id": "17", "circulate_market_value": "1740662300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": 0.46}, {"name": "央企改革", "change_pct": 1.75}, {"name": "一带一路", "change_pct": 1.88}, {"name": "石油化工", "change_pct": 0.87}, {"name": "天然气", "change_pct": 0.38}, {"name": "油气改革", "change_pct": 0.21}, {"name": "可燃冰", "change_pct": -0.01}, {"name": "中字头", "change_pct": 0.73}, {"name": "页岩气", "change_pct": 0.25}, {"name": "丁辛醇", "change_pct": 0.67}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "002326", "name": "永太科技", "hot_rank": 72, "hot_rank_chg": -3, "stock_cnt": 5813, "price": "19.11", "change": "6.34", "market_id": "33", "circulate_market_value": "15451258000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002388", "name": "新亚制程", "hot_rank": 73, "hot_rank_chg": 0, "stock_cnt": 5813, "price": "4.80", "change": "10.09", "market_id": "33", "circulate_market_value": "2429416500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "锂电材料", "xgb_concepts": [{"name": "仪器仪表", "change_pct": 2.67}, {"name": "锂电池", "change_pct": 3.38}, {"name": "ST摘帽", "change_pct": 2.57}, {"name": "有机硅", "change_pct": 3.26}, {"name": "新能源汽车", "change_pct": 2.66}, {"name": "华为产业链", "change_pct": 2.67}, {"name": "供应链金融", "change_pct": 1.88}]}, {"code": "002300", "name": "太阳电缆", "hot_rank": 74, "hot_rank_chg": -33, "stock_cnt": 5813, "price": "7.39", "change": "4.08", "market_id": "33", "circulate_market_value": "5337760100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "核电", "change_pct": 2.39}, {"name": "充电桩", "change_pct": 2.08}, {"name": "福建自贸/海西概念", "change_pct": 2.54}, {"name": "军民融合", "change_pct": 2.64}, {"name": "光伏", "change_pct": 2.35}, {"name": "风电", "change_pct": 2.69}, {"name": "军工", "change_pct": 2.54}, {"name": "新能源汽车", "change_pct": 2.66}, {"name": "特高压", "change_pct": 2.23}, {"name": "自贸区", "change_pct": 2.03}, {"name": "海洋经济", "change_pct": 1.87}]}, {"code": "603619", "name": "中曼石油", "hot_rank": 75, "hot_rank_chg": 51, "stock_cnt": 5813, "price": "20.56", "change": "-9.43", "market_id": "17", "circulate_market_value": "9505678800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 76, "hot_rank_chg": 9, "stock_cnt": 5813, "price": "32.13", "change": "2.36", "market_id": "17", "circulate_market_value": "109658072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 77, "hot_rank_chg": 5, "stock_cnt": 5813, "price": "1288.36", "change": "-0.70", "market_id": "17", "circulate_market_value": "1610555100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 78, "hot_rank_chg": 36, "stock_cnt": 5813, "price": "121.03", "change": "1.95", "market_id": "17", "circulate_market_value": "291893960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002218", "name": "拓日新能", "hot_rank": 79, "hot_rank_chg": -22, "stock_cnt": 5813, "price": "4.08", "change": "-2.86", "market_id": "33", "circulate_market_value": "5661725600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "玻璃", "change_pct": 2.13}, {"name": "光伏", "change_pct": 2.35}, {"name": "BIPV概念", "change_pct": 2.44}, {"name": "钙钛矿电池", "change_pct": 2.06}, {"name": "异质结电池HJT", "change_pct": 2.37}, {"name": "光伏胶膜", "change_pct": 1.81}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 80, "hot_rank_chg": 14, "stock_cnt": 5813, "price": "333.99", "change": "0.71", "market_id": "17", "circulate_market_value": "135712930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002490", "name": "山东墨龙", "hot_rank": 81, "hot_rank_chg": 158, "stock_cnt": 5813, "price": "7.28", "change": "-8.08", "market_id": "33", "circulate_market_value": "3943736200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "油服", "change_pct": -0.39}, {"name": "油气管网", "change_pct": 0.86}, {"name": "海工装备", "change_pct": 1.49}, {"name": "举牌", "change_pct": 1.61}, {"name": "天然气", "change_pct": 0.38}, {"name": "山东国企改革", "change_pct": 2.2}, {"name": "风电", "change_pct": 2.69}, {"name": "页岩气", "change_pct": 0.25}, {"name": "国企改革", "change_pct": 1.85}, {"name": "深地经济", "change_pct": 0.09}]}, {"code": "002371", "name": "北方华创", "hot_rank": 83, "hot_rank_chg": -60, "stock_cnt": 5813, "price": "758.49", "change": "0.20", "market_id": "33", "circulate_market_value": "549988570000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301165", "name": "锐捷网络", "hot_rank": 84, "hot_rank_chg": -26, "stock_cnt": 5813, "price": "126.83", "change": "-3.89", "market_id": "33", "circulate_market_value": "141275910000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 85, "hot_rank_chg": 54, "stock_cnt": 5813, "price": "5.73", "change": "9.98", "market_id": "33", "circulate_market_value": "5918722100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "覆铜板", "xgb_concepts": [{"name": "动物保健", "change_pct": 2.63}, {"name": "锂电池", "change_pct": 3.38}, {"name": "强势人气股", "change_pct": 2.16}, {"name": "铜箔/覆铜板", "change_pct": 3.35}, {"name": "粤港澳大湾区", "change_pct": 2.21}, {"name": "新能源汽车", "change_pct": 2.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 2.61}]}, {"code": "002361", "name": "神剑股份", "hot_rank": 86, "hot_rank_chg": 240, "stock_cnt": 5813, "price": "9.52", "change": "3.48", "market_id": "33", "circulate_market_value": "7701860800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 3.23}, {"name": "大飞机", "change_pct": 2.37}, {"name": "北斗导航", "change_pct": 2.56}, {"name": "高铁轨交", "change_pct": 2.43}, {"name": "军民融合", "change_pct": 2.64}, {"name": "磁悬浮", "change_pct": 3.02}, {"name": "军工", "change_pct": 2.54}, {"name": "碳纤维", "change_pct": 2.89}, {"name": "无人机", "change_pct": 2.52}, {"name": "航天", "change_pct": 2.62}, {"name": "卫星互联网", "change_pct": 2.88}, {"name": "低空经济", "change_pct": 2.62}, {"name": "海洋经济", "change_pct": 1.87}]}, {"code": "300139", "name": "晓程科技", "hot_rank": 87, "hot_rank_chg": 574, "stock_cnt": 5813, "price": "39.04", "change": "3.17", "market_id": "33", "circulate_market_value": "9122056100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 88, "hot_rank_chg": -16, "stock_cnt": 5813, "price": "61.00", "change": "1.25", "market_id": "17", "circulate_market_value": "1210489630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603019", "name": "中科曙光", "hot_rank": 89, "hot_rank_chg": -23, "stock_cnt": 5813, "price": "96.19", "change": "-1.34", "market_id": "17", "circulate_market_value": "140731200000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 90, "hot_rank_chg": -48, "stock_cnt": 5813, "price": "44.65", "change": "-3.56", "market_id": "17", "circulate_market_value": "5834558400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600089", "name": "特变电工", "hot_rank": 91, "hot_rank_chg": 20, "stock_cnt": 5813, "price": "20.43", "change": "0.20", "market_id": "17", "circulate_market_value": "103228552000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 92, "hot_rank_chg": 9, "stock_cnt": 5813, "price": "126.19", "change": "0.95", "market_id": "17", "circulate_market_value": "312103230000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 93, "hot_rank_chg": 57, "stock_cnt": 5813, "price": "28.08", "change": "7.30", "market_id": "17", "circulate_market_value": "9460712200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600178", "name": "东安动力", "hot_rank": 94, "hot_rank_chg": -5, "stock_cnt": 5813, "price": "9.41", "change": "-0.95", "market_id": "17", "circulate_market_value": "4389540700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.75}, {"name": "股权转让", "change_pct": 2.61}, {"name": "军工集团", "change_pct": 2.28}, {"name": "汽车零部件", "change_pct": 2.64}, {"name": "军工", "change_pct": 2.54}, {"name": "新能源汽车", "change_pct": 2.66}, {"name": "振兴东北", "change_pct": 1.84}, {"name": "新能源车零部件", "change_pct": 2.57}, {"name": "理想汽车概念股", "change_pct": 2.21}, {"name": "国企改革", "change_pct": 1.85}]}, {"code": "000100", "name": "TCL科技", "hot_rank": 95, "hot_rank_chg": -18, "stock_cnt": 5813, "price": "5.03", "change": "-0.20", "market_id": "33", "circulate_market_value": "101178351000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.91}, {"name": "手机产业链", "change_pct": 2.5}, {"name": "超高清视频", "change_pct": 2.13}, {"name": "电竞", "change_pct": 3.04}, {"name": "半导体", "change_pct": 1.89}, {"name": "OLED", "change_pct": 2.47}, {"name": "光伏", "change_pct": 2.35}, {"name": "黑色家电", "change_pct": 2.03}, {"name": "家电", "change_pct": 2.5}, {"name": "智能制造", "change_pct": 2.67}, {"name": "工业互联网", "change_pct": 2.31}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 2.47}, {"name": "国产芯片", "change_pct": 1.86}, {"name": "腾讯概念股", "change_pct": 2.52}, {"name": "液晶面板/LCD", "change_pct": 2.52}, {"name": "MicroLED", "change_pct": 2.62}, {"name": "MiniLED", "change_pct": 2.57}, {"name": "华为产业链", "change_pct": 2.67}, {"name": "玻璃基板封装", "change_pct": 2.09}]}, {"code": "002432", "name": "九安医疗", "hot_rank": 96, "hot_rank_chg": -17, "stock_cnt": 5813, "price": "71.28", "change": "5.47", "market_id": "33", "circulate_market_value": "33164611000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 97, "hot_rank_chg": 25, "stock_cnt": 5813, "price": "31.18", "change": "3.79", "market_id": "33", "circulate_market_value": "24395376000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 98, "hot_rank_chg": 145, "stock_cnt": 5813, "price": "6.35", "change": "-0.31", "market_id": "33", "circulate_market_value": "4620159600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 2.15}, {"name": "装配式建筑", "change_pct": 2.24}, {"name": "风电", "change_pct": 2.69}, {"name": "环氧丙烷", "change_pct": 1.94}, {"name": "乡村振兴", "change_pct": 2.36}, {"name": "建筑节能", "change_pct": 2.34}, {"name": "旧改", "change_pct": 2.43}]}, {"code": "002303", "name": "美盈森", "hot_rank": 99, "hot_rank_chg": -12, "stock_cnt": 5813, "price": "4.60", "change": "0.66", "market_id": "33", "circulate_market_value": "4447652900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": 2.46}, {"name": "造纸", "change_pct": 2.09}, {"name": "军民融合", "change_pct": 2.64}, {"name": "包装印刷", "change_pct": 2.52}, {"name": "军工", "change_pct": 2.54}, {"name": "预制菜", "change_pct": 2.22}, {"name": "人造肉", "change_pct": 1.85}, {"name": "数字乡村", "change_pct": 2.32}, {"name": "区块链", "change_pct": 2.48}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 100, "hot_rank_chg": 21, "stock_cnt": 5813, "price": "44.73", "change": "1.94", "market_id": "33", "circulate_market_value": "66009134000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨股票可能被终止上市的第三次风险提示性公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "002586": "[立案调查] *ST围海：关于立案调查事项进展暨风险提示公告", "603716": "[立案调查] 塞力医疗：关于立案调查进展暨风险提示的公告", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "ST/风险警示股", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知", "000690": "[行政处罚事先告知书] 宝新能源：关于实际控制人收到行政处罚事先告知书的公告", "002689": "[行政处罚事先告知书] 远大智能：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300686": "[行政处罚事先告知书] 智动力：关于实际控制人及时任高级管理人员收到中国证券监督管理委员会行政处罚事先告", "002743": "[行政处罚事先告知书] 富煌钢构：关于收到《行政处罚事先告知书》的公告", "002356": "[行政处罚事先告知书] 赫美集团：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "000983": "[行政处罚事先告知书] 山西焦煤：关于独立董事因非本公司事项收到中国证券监督管理委员会山西监管局《行政处", "600169": "[行政处罚事先告知书] 太原重工：太原重工关于收到中国证券监督管理委员会山西监管局行政处罚事先告知书的公", "002555": "[行政处罚事先告知书] 三七互娱：关于公司及相关责任人收到《行政处罚事先告知书》的公告"};