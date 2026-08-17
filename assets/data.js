const UPDATE_TIME = "2026-08-17 04:36";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 0.06,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续101天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "存储芯片",
    "rise": 3.48,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续224天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.81,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续271天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": 2.44,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续94天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "培育钻石",
    "rise": 4.1,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "算力租赁",
    "rise": -0.16,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续135天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "转基因",
    "rise": 5.04,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "AI应用",
    "rise": 0.05,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": 1.29,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "科创主题投资基金LOF",
    "code": "886112"
  },
  {
    "name": "粮食概念",
    "rise": 4.21,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885995"
  },
  {
    "name": "国家大基金持股",
    "rise": 4.34,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885893"
  },
  {
    "name": "光纤概念",
    "rise": 2.85,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续100天上榜",
    "rankChg": 0,
    "etfName": "VRETF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": 1.7,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续200天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": 1.58,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续435天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "猪肉",
    "rise": 1.56,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "先进封装",
    "rise": 3.35,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": -1,
    "etfName": "芯片ETF",
    "code": "886009"
  },
  {
    "name": "芯片概念",
    "rise": 2.37,
    "rate": 0,
    "tag": "14家涨停",
    "hotTag": "连续95天上榜",
    "rankChg": 0,
    "etfName": "科创芯片ETF",
    "code": "885756"
  },
  {
    "name": "玉米",
    "rise": 4.59,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885811"
  },
  {
    "name": "机器人概念",
    "rise": 1.28,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "连续102天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "乳业",
    "rise": 2.7,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885462"
  }
];
const THS_EVENTS = [
  {
    "title": "摩根大通：全球粮食危机或将在明年爆发，食品通胀率将从2.8%升至5%",
    "desc": "",
    "heat": 315868,
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
        "name": "秋乐种业",
        "code": "920087",
        "chg": 16.274694
      }
    ]
  },
  {
    "title": "全球疯抢磷化铟",
    "desc": "",
    "heat": 268137,
    "direction": "磷化铟",
    "themes": [
      "磷化铟",
      "金属铟"
    ],
    "stocks": [
      {
        "name": "长光华芯",
        "code": "688048",
        "chg": 6.009615
      }
    ]
  },
  {
    "title": "英伟达量产CPO交换机，用于超大规模AI集群",
    "desc": "",
    "heat": 150704,
    "direction": "交换机",
    "themes": [
      "交换机",
      "OCS交换机"
    ],
    "stocks": [
      {
        "name": "共进股份",
        "code": "603118",
        "chg": 10.022779
      }
    ]
  },
  {
    "title": "防灾减灾救灾，总书记强调“三个到位”",
    "desc": "",
    "heat": 139026,
    "direction": "防灾减灾救灾",
    "themes": [
      "防灾减灾救灾"
    ],
    "stocks": [
      {
        "name": "*ST航图",
        "code": "688066",
        "chg": 3.646409
      }
    ]
  },
  {
    "title": "全国首个算力Token贷在广州海珠发布",
    "desc": "",
    "heat": 11815,
    "direction": "词元概念（Token）",
    "themes": [
      "算力租赁"
    ],
    "stocks": [
      {
        "name": "鸿博股份",
        "code": "002229",
        "chg": 10.031847
      }
    ]
  },
  {
    "title": "《牛来》票房突破300万元，影城排片暴增超1900倍，股民：可以讨个好彩头",
    "desc": "",
    "heat": 11586,
    "direction": "影视院线",
    "themes": [
      "影视院线"
    ],
    "stocks": [
      {
        "name": "中广天择",
        "code": "603721",
        "chg": 10.016602
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "液态金属",
    "change": "+5.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+5.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+4.31%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "培育钻石",
    "change": "+4.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+4.18%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大基金概念",
    "change": "+4.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+4.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "闪存",
    "change": "+4.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+4.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "EDA设计软件",
    "change": "+3.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "芯粒Chiplet",
    "change": "+3.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "内存",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+3.59%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.57%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CPU概念",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "铜缆高速连接器",
    "change": "+3.25%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 铜",
    "change": "+3.15%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600722",
    "name": "金牛化工",
    "hot_rank": 1,
    "hot_rank_chg": 0,
    "stock_cnt": 5792,
    "price": "11.96",
    "change": "6.03",
    "market_id": "17",
    "circulate_market_value": "8136623300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 0.89
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "雄安新区",
        "change_pct": 0.85
      },
      {
        "name": "煤化工",
        "change_pct": 0.82
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 2,
    "hot_rank_chg": 1,
    "stock_cnt": 5792,
    "price": "12.95",
    "change": "7.74",
    "market_id": "17",
    "circulate_market_value": "23169341000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 0.81
      },
      {
        "name": "纯碱",
        "change_pct": 1.81
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "土壤修复",
        "change_pct": 1.17
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.28
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.2
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.36
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 3,
    "hot_rank_chg": 2,
    "stock_cnt": 5792,
    "price": "5.82",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "15389496000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "洁净室",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "装修装饰",
        "change_pct": 1.1
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.05
      },
      {
        "name": "航天",
        "change_pct": 1.95
      },
      {
        "name": "旧改",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 14,
    "hot_rank_chg": 2,
    "stock_cnt": 5792,
    "price": "11.75",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "5083915400.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "生肖炒作",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 1.08
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "光伏",
        "change_pct": 1.61
      },
      {
        "name": "无线耳机",
        "change_pct": 2.03
      },
      {
        "name": "华为产业链",
        "change_pct": 0.89
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.78
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 20,
    "hot_rank_chg": -3,
    "stock_cnt": 5792,
    "price": "8.90",
    "change": "-0.11",
    "market_id": "17",
    "circulate_market_value": "22414738000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.86
      },
      {
        "name": "工业大麻",
        "change_pct": 0.1
      },
      {
        "name": "中药",
        "change_pct": 0.27
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "保健品",
        "change_pct": 0.69
      },
      {
        "name": "民营医院",
        "change_pct": 0.12
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "化学原料药",
        "change_pct": 0.33
      },
      {
        "name": "流感",
        "change_pct": 0.34
      },
      {
        "name": "振兴东北",
        "change_pct": 0.57
      },
      {
        "name": "食品",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "000735",
    "name": "罗牛山",
    "hot_rank": 21,
    "hot_rank_chg": 43,
    "stock_cnt": 5792,
    "price": "5.62",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "6468044000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“牛”字炒作",
    "xgb_concepts": [
      {
        "name": "养鸡",
        "change_pct": 0.65
      },
      {
        "name": "养猪",
        "change_pct": 1.66
      },
      {
        "name": "农垦",
        "change_pct": 3.21
      },
      {
        "name": "冷链",
        "change_pct": 1.41
      },
      {
        "name": "大数据",
        "change_pct": -0.01
      },
      {
        "name": "教育",
        "change_pct": 0.08
      },
      {
        "name": "海南概念",
        "change_pct": 1.67
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.95
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.12
      },
      {
        "name": "赛马",
        "change_pct": 6.01
      },
      {
        "name": "大农业",
        "change_pct": 2.22
      },
      {
        "name": "职业教育",
        "change_pct": 0.65
      },
      {
        "name": "自贸区",
        "change_pct": 0.84
      }
    ]
  },
  {
    "code": "000802",
    "name": "北京文化",
    "hot_rank": 35,
    "hot_rank_chg": 20,
    "stock_cnt": 5792,
    "price": "5.33",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "3813849500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.51
      },
      {
        "name": "旅游",
        "change_pct": 0.06
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 36,
    "hot_rank_chg": 18,
    "stock_cnt": 5792,
    "price": "7.05",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "3379205800.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "化学制药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.27
      },
      {
        "name": "医药商业",
        "change_pct": -0.12
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "流感",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "601991",
    "name": "大唐发电",
    "hot_rank": 37,
    "hot_rank_chg": 16,
    "stock_cnt": 5792,
    "price": "6.39",
    "change": "-1.39",
    "market_id": "17",
    "circulate_market_value": "79211009000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.9
      },
      {
        "name": "核电",
        "change_pct": 1.23
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "电力体制改革",
        "change_pct": -0.27
      },
      {
        "name": "水电",
        "change_pct": -0.3
      },
      {
        "name": "火电",
        "change_pct": -0.62
      },
      {
        "name": "光伏",
        "change_pct": 1.61
      },
      {
        "name": "风电",
        "change_pct": 0.82
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      },
      {
        "name": "算电协同",
        "change_pct": 0.45
      }
    ]
  },
  {
    "code": "000620",
    "name": "盈新发展",
    "hot_rank": 38,
    "hot_rank_chg": -12,
    "stock_cnt": 5792,
    "price": "3.11",
    "change": "2.64",
    "market_id": "33",
    "circulate_market_value": "14529139000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.22
      },
      {
        "name": "股权转让",
        "change_pct": 1.08
      },
      {
        "name": "房地产",
        "change_pct": 0.2
      },
      {
        "name": "京津冀",
        "change_pct": 0.69
      },
      {
        "name": "旅游",
        "change_pct": 0.06
      },
      {
        "name": "国产芯片",
        "change_pct": 3.06
      },
      {
        "name": "内存",
        "change_pct": 3.88
      },
      {
        "name": "闪存",
        "change_pct": 4.01
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 39,
    "hot_rank_chg": -8,
    "stock_cnt": 5792,
    "price": "4.99",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "3818052200.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "生肖炒作",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.27
      },
      {
        "name": "股权转让",
        "change_pct": 1.08
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.42
      },
      {
        "name": "医药商业",
        "change_pct": -0.12
      },
      {
        "name": "保健品",
        "change_pct": 0.69
      },
      {
        "name": "民营医院",
        "change_pct": 0.12
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.05
      },
      {
        "name": "口腔",
        "change_pct": 0.17
      },
      {
        "name": "医美",
        "change_pct": -0.18
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.57
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 40,
    "hot_rank_chg": -5,
    "stock_cnt": 5792,
    "price": "4.98",
    "change": "9.93",
    "market_id": "33",
    "circulate_market_value": "10458766200.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "5",
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.27
      },
      {
        "name": "维生素",
        "change_pct": 1.26
      },
      {
        "name": "基因测序",
        "change_pct": -0.71
      },
      {
        "name": "民营医院",
        "change_pct": 0.12
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "化学原料药",
        "change_pct": 0.33
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "000936",
    "name": "华西股份",
    "hot_rank": 46,
    "hot_rank_chg": -21,
    "stock_cnt": 5792,
    "price": "6.45",
    "change": "-7.46",
    "market_id": "33",
    "circulate_market_value": "5713973300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 3.59
      },
      {
        "name": "共享经济",
        "change_pct": 0.43
      },
      {
        "name": "人工智能",
        "change_pct": 0.46
      },
      {
        "name": "光通信",
        "change_pct": 2.76
      },
      {
        "name": "涤纶",
        "change_pct": -0.1
      },
      {
        "name": "江苏国企改革",
        "change_pct": 0.57
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": 3.06
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.01
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 50,
    "hot_rank_chg": 9,
    "stock_cnt": 5792,
    "price": "5.27",
    "change": "-1.13",
    "market_id": "33",
    "circulate_market_value": "30854788000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.92
      },
      {
        "name": "人工智能",
        "change_pct": 0.46
      },
      {
        "name": "水利",
        "change_pct": 0.96
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.0
      },
      {
        "name": "大数据",
        "change_pct": -0.01
      },
      {
        "name": "园林",
        "change_pct": 1.14
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": 1.74
      },
      {
        "name": "数字经济",
        "change_pct": 0.24
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.12
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.22
      },
      {
        "name": "第三代半导体",
        "change_pct": 2.6
      },
      {
        "name": "快手概念股",
        "change_pct": -0.1
      },
      {
        "name": "IGBT",
        "change_pct": 3.12
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.15
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.19
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.01
      },
      {
        "name": "氮化镓",
        "change_pct": 2.4
      },
      {
        "name": "AI营销",
        "change_pct": -0.42
      },
      {
        "name": "多模态",
        "change_pct": 0.25
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.21
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.11
      },
      {
        "name": "区块链",
        "change_pct": -0.16
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 53,
    "hot_rank_chg": 5,
    "stock_cnt": 5792,
    "price": "5.98",
    "change": "2.93",
    "market_id": "33",
    "circulate_market_value": "211495460000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 2.08
      },
      {
        "name": "手机产业链",
        "change_pct": 1.94
      },
      {
        "name": "超高清视频",
        "change_pct": 0.76
      },
      {
        "name": "苹果产业链",
        "change_pct": 2.14
      },
      {
        "name": "电竞",
        "change_pct": -0.74
      },
      {
        "name": "半导体",
        "change_pct": 3.59
      },
      {
        "name": "人工智能",
        "change_pct": 0.46
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.76
      },
      {
        "name": "VR&AR",
        "change_pct": 1.3
      },
      {
        "name": "OLED",
        "change_pct": 2.41
      },
      {
        "name": "京津冀",
        "change_pct": 0.69
      },
      {
        "name": "物联网",
        "change_pct": 0.79
      },
      {
        "name": "指纹识别",
        "change_pct": 1.7
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.25
      },
      {
        "name": "白马股",
        "change_pct": 0.08
      },
      {
        "name": "智能制造",
        "change_pct": 1.41
      },
      {
        "name": "小米概念股",
        "change_pct": 1.74
      },
      {
        "name": "国产芯片",
        "change_pct": 3.06
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.95
      },
      {
        "name": "全息概念",
        "change_pct": 1.03
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.22
      },
      {
        "name": "MicroLED",
        "change_pct": 2.5
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.48
      },
      {
        "name": "智能手表",
        "change_pct": 2.39
      },
      {
        "name": "MiniLED",
        "change_pct": 1.83
      },
      {
        "name": "传感器",
        "change_pct": 2.16
      },
      {
        "name": "大硅片",
        "change_pct": 4.31
      },
      {
        "name": "AI PC",
        "change_pct": 0.84
      },
      {
        "name": "华为产业链",
        "change_pct": 0.89
      },
      {
        "name": "回购",
        "change_pct": 0.86
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.01
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.09
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 3.09
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 60,
    "hot_rank_chg": 98,
    "stock_cnt": 5792,
    "price": "6.74",
    "change": "4.01",
    "market_id": "33",
    "circulate_market_value": "6961987300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.66
      },
      {
        "name": "锂电池",
        "change_pct": 1.31
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.76
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.63
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.27
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.39
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 63,
    "hot_rank_chg": -18,
    "stock_cnt": 5792,
    "price": "4.08",
    "change": "0.25",
    "market_id": "33",
    "circulate_market_value": "4636499900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 1.28
      },
      {
        "name": "锂电池",
        "change_pct": 1.31
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "石墨烯",
        "change_pct": 1.76
      },
      {
        "name": "新能源整车",
        "change_pct": 0.18
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.45
      },
      {
        "name": "汽车整车",
        "change_pct": 0.34
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.27
      },
      {
        "name": "白色家电",
        "change_pct": 1.36
      },
      {
        "name": "家电",
        "change_pct": 1.15
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.49
      },
      {
        "name": "热泵",
        "change_pct": 1.49
      },
      {
        "name": "轮边电机",
        "change_pct": 0.66
      },
      {
        "name": "超级电容",
        "change_pct": 0.67
      },
      {
        "name": "液冷服务器",
        "change_pct": 2.21
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 64,
    "hot_rank_chg": -7,
    "stock_cnt": 5792,
    "price": "7.20",
    "change": "6.20",
    "market_id": "33",
    "circulate_market_value": "4087980700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": 1.76
      },
      {
        "name": "军民融合",
        "change_pct": 1.5
      },
      {
        "name": "物联网",
        "change_pct": 0.79
      },
      {
        "name": "LED",
        "change_pct": 1.74
      },
      {
        "name": "军工",
        "change_pct": 1.45
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.17
      },
      {
        "name": "海洋经济",
        "change_pct": 1.25
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 65,
    "hot_rank_chg": 494,
    "stock_cnt": 5792,
    "price": "9.37",
    "change": "5.28",
    "market_id": "33",
    "circulate_market_value": "21761597000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.26
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.15
      },
      {
        "name": "有色 · 锑",
        "change_pct": 1.52
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.23
      },
      {
        "name": "有色 · 锌",
        "change_pct": 2.14
      },
      {
        "name": "有色金属",
        "change_pct": 1.75
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      },
      {
        "name": "白银",
        "change_pct": 2.81
      }
    ]
  },
  {
    "code": "002739",
    "name": "儒意电影",
    "hot_rank": 66,
    "hot_rank_chg": 16,
    "stock_cnt": 5792,
    "price": "8.83",
    "change": "-7.92",
    "market_id": "33",
    "circulate_market_value": "18384076000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -0.51
      },
      {
        "name": "足球",
        "change_pct": 0.7
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.17
      },
      {
        "name": "拼多多概念股",
        "change_pct": 0.17
      },
      {
        "name": "网红/MCN",
        "change_pct": 0.25
      },
      {
        "name": "大消费",
        "change_pct": -0.52
      },
      {
        "name": "盲盒",
        "change_pct": 0.17
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.5
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      },
      {
        "name": "首发经济",
        "change_pct": 0.88
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.11
      },
      {
        "name": "服务消费",
        "change_pct": -0.58
      }
    ]
  },
  {
    "code": "000630",
    "name": "铜陵有色",
    "hot_rank": 68,
    "hot_rank_chg": 311,
    "stock_cnt": 5792,
    "price": "6.74",
    "change": "3.69",
    "market_id": "33",
    "circulate_market_value": "75103750000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 2.26
      },
      {
        "name": "锂电池",
        "change_pct": 1.31
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.68
      },
      {
        "name": "有色 · 铜",
        "change_pct": 3.15
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 2.76
      },
      {
        "name": "有色金属",
        "change_pct": 1.75
      },
      {
        "name": "新能源汽车",
        "change_pct": 1.27
      },
      {
        "name": "人民币升值受益",
        "change_pct": 0.84
      },
      {
        "name": "硫酸",
        "change_pct": 2.6
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      },
      {
        "name": "白银",
        "change_pct": 2.81
      },
      {
        "name": "有色 · 镍",
        "change_pct": 1.32
      }
    ]
  },
  {
    "code": "002820",
    "name": "桂发祥",
    "hot_rank": 70,
    "hot_rank_chg": 115,
    "stock_cnt": 5792,
    "price": "11.15",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "2239681500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中华老字号",
    "xgb_concepts": [
      {
        "name": "天津国企改革",
        "change_pct": 0.63
      },
      {
        "name": "休闲食品",
        "change_pct": 1.33
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "600881",
    "name": "亚泰集团",
    "hot_rank": 71,
    "hot_rank_chg": 38,
    "stock_cnt": 5792,
    "price": "2.22",
    "change": "1.83",
    "market_id": "17",
    "circulate_market_value": "7175375200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.22
      },
      {
        "name": "中药",
        "change_pct": 0.27
      },
      {
        "name": "创新药",
        "change_pct": -0.16
      },
      {
        "name": "股权转让",
        "change_pct": 1.08
      },
      {
        "name": "水泥",
        "change_pct": 1.12
      },
      {
        "name": "保健品",
        "change_pct": 0.69
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "疫苗",
        "change_pct": 0.44
      },
      {
        "name": "振兴东北",
        "change_pct": 0.57
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "物业管理",
        "change_pct": 0.65
      },
      {
        "name": "低价股",
        "change_pct": 0.79
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 72,
    "hot_rank_chg": 8,
    "stock_cnt": 5792,
    "price": "8.15",
    "change": "0.12",
    "market_id": "33",
    "circulate_market_value": "13249404300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.86
      },
      {
        "name": "电竞",
        "change_pct": -0.74
      },
      {
        "name": "手游",
        "change_pct": -0.89
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "人工智能",
        "change_pct": 0.46
      },
      {
        "name": "游戏",
        "change_pct": -1.08
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.24
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.12
      },
      {
        "name": "快手概念股",
        "change_pct": -0.1
      },
      {
        "name": "元宇宙",
        "change_pct": 0.04
      },
      {
        "name": "虚拟数字人",
        "change_pct": -0.15
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.28
      },
      {
        "name": "web3.0",
        "change_pct": -0.24
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.19
      },
      {
        "name": "数据要素",
        "change_pct": 0.19
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.01
      },
      {
        "name": "AI营销",
        "change_pct": -0.42
      },
      {
        "name": "ChatGPT",
        "change_pct": -0.14
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 2.09
      },
      {
        "name": "人工智能大模型",
        "change_pct": 0.22
      },
      {
        "name": "人形机器人",
        "change_pct": 1.63
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -0.5
      },
      {
        "name": "多模态",
        "change_pct": 0.25
      },
      {
        "name": "AI视频",
        "change_pct": -0.05
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.13
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 75,
    "hot_rank_chg": -34,
    "stock_cnt": 5792,
    "price": "12.35",
    "change": "0.73",
    "market_id": "33",
    "circulate_market_value": "3513347900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.9
      },
      {
        "name": "ST摘帽",
        "change_pct": 1.35
      },
      {
        "name": "强势人气股",
        "change_pct": 1.55
      },
      {
        "name": "教育",
        "change_pct": 0.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.17
      },
      {
        "name": "职业教育",
        "change_pct": 0.65
      },
      {
        "name": "在线教育",
        "change_pct": -0.5
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.12
      },
      {
        "name": "华为产业链",
        "change_pct": 0.89
      },
      {
        "name": "智谱AI",
        "change_pct": -0.52
      }
    ]
  },
  {
    "code": "603887",
    "name": "城地香江",
    "hot_rank": 76,
    "hot_rank_chg": 8,
    "stock_cnt": 5792,
    "price": "11.01",
    "change": "-7.63",
    "market_id": "17",
    "circulate_market_value": "6628343900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "云计算数据中心",
        "change_pct": 0.45
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.17
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.12
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.28
      },
      {
        "name": "国资入股",
        "change_pct": 0.77
      },
      {
        "name": "华为产业链",
        "change_pct": 0.89
      }
    ]
  },
  {
    "code": "000779",
    "name": "甘咨询",
    "hot_rank": 81,
    "hot_rank_chg": 22,
    "stock_cnt": 5792,
    "price": "10.63",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4940537000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "参股算力建设（金额较小）",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 1.2
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.45
      },
      {
        "name": "水利",
        "change_pct": 0.96
      },
      {
        "name": "大数据",
        "change_pct": -0.01
      },
      {
        "name": "海绵城市",
        "change_pct": 1.08
      },
      {
        "name": "风电",
        "change_pct": 0.82
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.22
      },
      {
        "name": "数字经济",
        "change_pct": 0.24
      },
      {
        "name": "大基建",
        "change_pct": 0.97
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.28
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.16
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      },
      {
        "name": "旧改",
        "change_pct": 0.73
      },
      {
        "name": "西部大开发",
        "change_pct": 1.11
      },
      {
        "name": "低空经济",
        "change_pct": 1.5
      },
      {
        "name": "房屋检测",
        "change_pct": 1.7
      }
    ]
  },
  {
    "code": "600683",
    "name": "京投发展",
    "hot_rank": 83,
    "hot_rank_chg": -5,
    "stock_cnt": 5792,
    "price": "11.20",
    "change": "-3.78",
    "market_id": "17",
    "circulate_market_value": "8296709100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 0.2
      },
      {
        "name": "光通信",
        "change_pct": 2.76
      },
      {
        "name": "京津冀",
        "change_pct": 0.69
      },
      {
        "name": "土地流转",
        "change_pct": 2.03
      },
      {
        "name": "北京城市规划",
        "change_pct": 0.3
      },
      {
        "name": "物业管理",
        "change_pct": 0.65
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "600829",
    "name": "人民同泰",
    "hot_rank": 86,
    "hot_rank_chg": -12,
    "stock_cnt": 5792,
    "price": "11.47",
    "change": "-3.04",
    "market_id": "17",
    "circulate_market_value": "6651322200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药商业",
        "change_pct": -0.12
      },
      {
        "name": "民营医院",
        "change_pct": 0.12
      },
      {
        "name": "医药",
        "change_pct": 0.19
      },
      {
        "name": "振兴东北",
        "change_pct": 0.57
      },
      {
        "name": "宠物经济",
        "change_pct": 0.31
      },
      {
        "name": "眼科",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "002329",
    "name": "皇氏集团",
    "hot_rank": 90,
    "hot_rank_chg": 5,
    "stock_cnt": 5792,
    "price": "4.35",
    "change": "1.87",
    "market_id": "33",
    "circulate_market_value": "2834429200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.86
      },
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.22
      },
      {
        "name": "股权转让",
        "change_pct": 1.08
      },
      {
        "name": "一带一路",
        "change_pct": 1.2
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.42
      },
      {
        "name": "智慧城市",
        "change_pct": 0.63
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "基因编辑",
        "change_pct": -0.19
      },
      {
        "name": "社区团购",
        "change_pct": 2.08
      },
      {
        "name": "大农业",
        "change_pct": 2.22
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -0.88
      },
      {
        "name": "广西概念",
        "change_pct": 0.24
      },
      {
        "name": "饮料",
        "change_pct": 1.61
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 100,
    "hot_rank_chg": 529,
    "stock_cnt": 5792,
    "price": "6.46",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "4145919600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "粮食概念",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 2.22
      },
      {
        "name": "农业种植",
        "change_pct": 3.96
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.23
      },
      {
        "name": "乡村振兴",
        "change_pct": 2.22
      },
      {
        "name": "休闲食品",
        "change_pct": 1.33
      },
      {
        "name": "食品",
        "change_pct": 1.25
      },
      {
        "name": "食品安全",
        "change_pct": 1.62
      },
      {
        "name": "社区团购",
        "change_pct": 2.08
      },
      {
        "name": "大农业",
        "change_pct": 2.22
      },
      {
        "name": "预制菜",
        "change_pct": 1.32
      },
      {
        "name": "人造肉",
        "change_pct": 2.1
      },
      {
        "name": "国企改革",
        "change_pct": 0.78
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600722", "name": "金牛化工", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5792, "price": "11.96", "change": "6.03", "market_id": "17", "circulate_market_value": "8136623300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": 0.89}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "雄安新区", "change_pct": 0.85}, {"name": "煤化工", "change_pct": 0.82}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5792, "price": "12.95", "change": "7.74", "market_id": "17", "circulate_market_value": "23169341000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.81}, {"name": "纯碱", "change_pct": 1.81}, {"name": "食品", "change_pct": 1.25}, {"name": "土壤修复", "change_pct": 1.17}, {"name": "东数西算/算力", "change_pct": 0.28}, {"name": "OpenClaw概念", "change_pct": -0.2}, {"name": "DeepSeek概念股", "change_pct": 0.36}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 3, "hot_rank_chg": 2, "stock_cnt": 5792, "price": "5.82", "change": "10.02", "market_id": "33", "circulate_market_value": "15389496000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "洁净室", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.55}, {"name": "装修装饰", "change_pct": 1.1}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "航天", "change_pct": 1.95}, {"name": "旧改", "change_pct": 0.73}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5792, "price": "64.35", "change": "2.17", "market_id": "17", "circulate_market_value": "157892140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 5, "hot_rank_chg": 1, "stock_cnt": 5792, "price": "19.32", "change": "10.02", "market_id": "17", "circulate_market_value": "15210180000.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "光通信"}, {"code": "300895", "name": "铜牛信息", "hot_rank": 6, "hot_rank_chg": 6, "stock_cnt": 5792, "price": "59.47", "change": "3.59", "market_id": "33", "circulate_market_value": "8217103900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5792, "price": "23.82", "change": "3.79", "market_id": "17", "circulate_market_value": "49820535000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 8, "hot_rank_chg": -4, "stock_cnt": 5792, "price": "137.48", "change": "-0.01", "market_id": "17", "circulate_market_value": "49592253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 9, "hot_rank_chg": -2, "stock_cnt": 5792, "price": "40.51", "change": "1.40", "market_id": "33", "circulate_market_value": "115861544000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 10, "hot_rank_chg": 9, "stock_cnt": 5792, "price": "283.92", "change": "6.05", "market_id": "33", "circulate_market_value": "309015140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603195", "name": "公牛集团", "hot_rank": 11, "hot_rank_chg": 3, "stock_cnt": 5792, "price": "39.88", "change": "-0.47", "market_id": "17", "circulate_market_value": "71790515000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 12, "hot_rank_chg": 30, "stock_cnt": 5792, "price": "35.10", "change": "10.00", "market_id": "17", "circulate_market_value": "14075100000.00", "change_type": "1", "change_section": "15", "change_days": "10", "change_reason": "乳品"}, {"code": "603186", "name": "华正新材", "hot_rank": 13, "hot_rank_chg": 8, "stock_cnt": 5792, "price": "184.31", "change": "10.00", "market_id": "17", "circulate_market_value": "28898060000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "覆铜板"}, {"code": "603330", "name": "天洋新材", "hot_rank": 14, "hot_rank_chg": 2, "stock_cnt": 5792, "price": "11.75", "change": "10.02", "market_id": "17", "circulate_market_value": "5083915400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "生肖炒作", "xgb_concepts": [{"name": "股权转让", "change_pct": 1.08}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "光伏", "change_pct": 1.61}, {"name": "无线耳机", "change_pct": 2.03}, {"name": "华为产业链", "change_pct": 0.89}, {"name": "光伏胶膜", "change_pct": 1.78}]}, {"code": "600721", "name": "百花医药", "hot_rank": 15, "hot_rank_chg": 8, "stock_cnt": 5792, "price": "13.95", "change": "1.01", "market_id": "17", "circulate_market_value": "5364439500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 16, "hot_rank_chg": 16, "stock_cnt": 5792, "price": "107.65", "change": "5.96", "market_id": "33", "circulate_market_value": "70299285000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 17, "hot_rank_chg": -2, "stock_cnt": 5792, "price": "32.83", "change": "0.49", "market_id": "33", "circulate_market_value": "24865938000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 18, "hot_rank_chg": 43, "stock_cnt": 5792, "price": "214.23", "change": "4.41", "market_id": "33", "circulate_market_value": "296991700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 19, "hot_rank_chg": -6, "stock_cnt": 5792, "price": "62.34", "change": "-0.62", "market_id": "33", "circulate_market_value": "72128176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 20, "hot_rank_chg": -3, "stock_cnt": 5792, "price": "8.90", "change": "-0.11", "market_id": "17", "circulate_market_value": "22414738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.86}, {"name": "工业大麻", "change_pct": 0.1}, {"name": "中药", "change_pct": 0.27}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "保健品", "change_pct": 0.69}, {"name": "民营医院", "change_pct": 0.12}, {"name": "医药", "change_pct": 0.19}, {"name": "化学原料药", "change_pct": 0.33}, {"name": "流感", "change_pct": 0.34}, {"name": "振兴东北", "change_pct": 0.57}, {"name": "食品", "change_pct": 1.25}]}, {"code": "000735", "name": "罗牛山", "hot_rank": 21, "hot_rank_chg": 43, "stock_cnt": 5792, "price": "5.62", "change": "9.98", "market_id": "33", "circulate_market_value": "6468044000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“牛”字炒作", "xgb_concepts": [{"name": "养鸡", "change_pct": 0.65}, {"name": "养猪", "change_pct": 1.66}, {"name": "农垦", "change_pct": 3.21}, {"name": "冷链", "change_pct": 1.41}, {"name": "大数据", "change_pct": -0.01}, {"name": "教育", "change_pct": 0.08}, {"name": "海南概念", "change_pct": 1.67}, {"name": "自由贸易港", "change_pct": 0.95}, {"name": "海南自由贸易港", "change_pct": 1.12}, {"name": "赛马", "change_pct": 6.01}, {"name": "大农业", "change_pct": 2.22}, {"name": "职业教育", "change_pct": 0.65}, {"name": "自贸区", "change_pct": 0.84}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 22, "hot_rank_chg": 11, "stock_cnt": 5792, "price": "60.15", "change": "9.01", "market_id": "17", "circulate_market_value": "270857790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 23, "hot_rank_chg": -13, "stock_cnt": 5792, "price": "46.18", "change": "4.03", "market_id": "17", "circulate_market_value": "183407890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 24, "hot_rank_chg": 6, "stock_cnt": 5792, "price": "16.76", "change": "-1.35", "market_id": "17", "circulate_market_value": "24682566000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 25, "hot_rank_chg": -14, "stock_cnt": 5792, "price": "35.54", "change": "-0.03", "market_id": "17", "circulate_market_value": "121296231000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 26, "hot_rank_chg": 46, "stock_cnt": 5792, "price": "1285.18", "change": "-4.23", "market_id": "17", "circulate_market_value": "1606579900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002364", "name": "中恒电气", "hot_rank": 27, "hot_rank_chg": 20, "stock_cnt": 5792, "price": "47.70", "change": "6.00", "market_id": "33", "circulate_market_value": "26621549000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 28, "hot_rank_chg": -6, "stock_cnt": 5792, "price": "30.40", "change": "1.77", "market_id": "17", "circulate_market_value": "21017819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300684", "name": "中石科技", "hot_rank": 29, "hot_rank_chg": 15, "stock_cnt": 5792, "price": "80.83", "change": "20.00", "market_id": "33", "circulate_market_value": "16535812000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中际旭创入股"}, {"code": "002407", "name": "多氟多", "hot_rank": 30, "hot_rank_chg": -6, "stock_cnt": 5792, "price": "39.32", "change": "0.41", "market_id": "33", "circulate_market_value": "42417132000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 31, "hot_rank_chg": 9, "stock_cnt": 5792, "price": "438.48", "change": "5.03", "market_id": "17", "circulate_market_value": "293120340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603881", "name": "数据港", "hot_rank": 32, "hot_rank_chg": -24, "stock_cnt": 5792, "price": "28.61", "change": "-1.48", "market_id": "17", "circulate_market_value": "24663319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 33, "hot_rank_chg": -13, "stock_cnt": 5792, "price": "19.50", "change": "-0.76", "market_id": "33", "circulate_market_value": "22941143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600353", "name": "旭光电子", "hot_rank": 34, "hot_rank_chg": 43, "stock_cnt": 5792, "price": "34.13", "change": "9.99", "market_id": "17", "circulate_market_value": "28287325000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氮化铝"}, {"code": "000802", "name": "北京文化", "hot_rank": 35, "hot_rank_chg": 20, "stock_cnt": 5792, "price": "5.33", "change": "-9.97", "market_id": "33", "circulate_market_value": "3813849500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.51}, {"name": "旅游", "change_pct": 0.06}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 36, "hot_rank_chg": 18, "stock_cnt": 5792, "price": "7.05", "change": "9.98", "market_id": "17", "circulate_market_value": "3379205800.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "化学制药", "xgb_concepts": [{"name": "中药", "change_pct": 0.27}, {"name": "医药商业", "change_pct": -0.12}, {"name": "医药", "change_pct": 0.19}, {"name": "流感", "change_pct": 0.34}]}, {"code": "601991", "name": "大唐发电", "hot_rank": 37, "hot_rank_chg": 16, "stock_cnt": 5792, "price": "6.39", "change": "-1.39", "market_id": "17", "circulate_market_value": "79211009000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.9}, {"name": "核电", "change_pct": 1.23}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "电力体制改革", "change_pct": -0.27}, {"name": "水电", "change_pct": -0.3}, {"name": "火电", "change_pct": -0.62}, {"name": "光伏", "change_pct": 1.61}, {"name": "风电", "change_pct": 0.82}, {"name": "国企改革", "change_pct": 0.78}, {"name": "算电协同", "change_pct": 0.45}]}, {"code": "000620", "name": "盈新发展", "hot_rank": 38, "hot_rank_chg": -12, "stock_cnt": 5792, "price": "3.11", "change": "2.64", "market_id": "33", "circulate_market_value": "14529139000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.22}, {"name": "股权转让", "change_pct": 1.08}, {"name": "房地产", "change_pct": 0.2}, {"name": "京津冀", "change_pct": 0.69}, {"name": "旅游", "change_pct": 0.06}, {"name": "国产芯片", "change_pct": 3.06}, {"name": "内存", "change_pct": 3.88}, {"name": "闪存", "change_pct": 4.01}, {"name": "IP经济/谷子经济", "change_pct": 0.13}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 39, "hot_rank_chg": -8, "stock_cnt": 5792, "price": "4.99", "change": "9.91", "market_id": "33", "circulate_market_value": "3818052200.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "生肖炒作", "xgb_concepts": [{"name": "中药", "change_pct": 0.27}, {"name": "股权转让", "change_pct": 1.08}, {"name": "优化生育（三孩）", "change_pct": 0.42}, {"name": "医药商业", "change_pct": -0.12}, {"name": "保健品", "change_pct": 0.69}, {"name": "民营医院", "change_pct": 0.12}, {"name": "医药", "change_pct": 0.19}, {"name": "食品", "change_pct": 1.25}, {"name": "辅助生殖", "change_pct": 0.05}, {"name": "口腔", "change_pct": 0.17}, {"name": "医美", "change_pct": -0.18}, {"name": "新冠病毒防治", "change_pct": 0.57}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 40, "hot_rank_chg": -5, "stock_cnt": 5792, "price": "4.98", "change": "9.93", "market_id": "33", "circulate_market_value": "10458766200.00", "change_type": "1", "change_section": "7", "change_days": "5", "change_reason": "创新药", "xgb_concepts": [{"name": "中药", "change_pct": 0.27}, {"name": "维生素", "change_pct": 1.26}, {"name": "基因测序", "change_pct": -0.71}, {"name": "民营医院", "change_pct": 0.12}, {"name": "医药", "change_pct": 0.19}, {"name": "化学原料药", "change_pct": 0.33}, {"name": "PD-1抑制剂", "change_pct": 1.2}]}, {"code": "002229", "name": "鸿博股份", "hot_rank": 41, "hot_rank_chg": 40, "stock_cnt": 5792, "price": "13.82", "change": "10.03", "market_id": "33", "circulate_market_value": "6815418200.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "算力租赁"}, {"code": "300308", "name": "中际旭创", "hot_rank": 42, "hot_rank_chg": 29, "stock_cnt": 5792, "price": "960.11", "change": "1.81", "market_id": "33", "circulate_market_value": "1065664280000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300017", "name": "网宿科技", "hot_rank": 43, "hot_rank_chg": -25, "stock_cnt": 5792, "price": "17.50", "change": "0.98", "market_id": "33", "circulate_market_value": "41413218000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 44, "hot_rank_chg": 61, "stock_cnt": 5792, "price": "33.26", "change": "2.24", "market_id": "17", "circulate_market_value": "685215640000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5792, "price": "14.02", "change": "1.96", "market_id": "33", "circulate_market_value": "13085169000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000936", "name": "华西股份", "hot_rank": 46, "hot_rank_chg": -21, "stock_cnt": 5792, "price": "6.45", "change": "-7.46", "market_id": "33", "circulate_market_value": "5713973300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 3.59}, {"name": "共享经济", "change_pct": 0.43}, {"name": "人工智能", "change_pct": 0.46}, {"name": "光通信", "change_pct": 2.76}, {"name": "涤纶", "change_pct": -0.1}, {"name": "江苏国企改革", "change_pct": 0.57}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": 3.06}, {"name": "国企改革", "change_pct": 0.78}, {"name": "光电共封装CPO", "change_pct": 4.01}]}, {"code": "000815", "name": "美利云", "hot_rank": 47, "hot_rank_chg": -8, "stock_cnt": 5792, "price": "18.07", "change": "-4.74", "market_id": "33", "circulate_market_value": "12563403000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 48, "hot_rank_chg": -10, "stock_cnt": 5792, "price": "82.62", "change": "4.97", "market_id": "17", "circulate_market_value": "147841430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 49, "hot_rank_chg": 2, "stock_cnt": 5792, "price": "67.10", "change": "1.38", "market_id": "17", "circulate_market_value": "1331538590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 50, "hot_rank_chg": 9, "stock_cnt": 5792, "price": "5.27", "change": "-1.13", "market_id": "33", "circulate_market_value": "30854788000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.92}, {"name": "人工智能", "change_pct": 0.46}, {"name": "水利", "change_pct": 0.96}, {"name": "直播/短视频", "change_pct": 0.0}, {"name": "大数据", "change_pct": -0.01}, {"name": "园林", "change_pct": 1.14}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": 1.74}, {"name": "数字经济", "change_pct": 0.24}, {"name": "腾讯概念股", "change_pct": -0.12}, {"name": "理想汽车概念股", "change_pct": 1.22}, {"name": "第三代半导体", "change_pct": 2.6}, {"name": "快手概念股", "change_pct": -0.1}, {"name": "IGBT", "change_pct": 3.12}, {"name": "虚拟数字人", "change_pct": -0.15}, {"name": "AIGC概念", "change_pct": 0.19}, {"name": "字节跳动概念股", "change_pct": 0.01}, {"name": "氮化镓", "change_pct": 2.4}, {"name": "AI营销", "change_pct": -0.42}, {"name": "多模态", "change_pct": 0.25}, {"name": "液冷服务器", "change_pct": 2.21}, {"name": "小红书概念股", "change_pct": 0.11}, {"name": "区块链", "change_pct": -0.16}]}, {"code": "300570", "name": "太辰光", "hot_rank": 51, "hot_rank_chg": 132, "stock_cnt": 5792, "price": "193.80", "change": "20.00", "market_id": "33", "circulate_market_value": "37246964000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长"}, {"code": "002580", "name": "圣阳股份", "hot_rank": 52, "hot_rank_chg": -15, "stock_cnt": 5792, "price": "21.60", "change": "-3.05", "market_id": "33", "circulate_market_value": "9770518100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 53, "hot_rank_chg": 5, "stock_cnt": 5792, "price": "5.98", "change": "2.93", "market_id": "33", "circulate_market_value": "211495460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 2.08}, {"name": "手机产业链", "change_pct": 1.94}, {"name": "超高清视频", "change_pct": 0.76}, {"name": "苹果产业链", "change_pct": 2.14}, {"name": "电竞", "change_pct": -0.74}, {"name": "半导体", "change_pct": 3.59}, {"name": "人工智能", "change_pct": 0.46}, {"name": "互联网医疗", "change_pct": -0.76}, {"name": "VR&AR", "change_pct": 1.3}, {"name": "OLED", "change_pct": 2.41}, {"name": "京津冀", "change_pct": 0.69}, {"name": "物联网", "change_pct": 0.79}, {"name": "指纹识别", "change_pct": 1.7}, {"name": "汽车零部件", "change_pct": 1.25}, {"name": "白马股", "change_pct": 0.08}, {"name": "智能制造", "change_pct": 1.41}, {"name": "小米概念股", "change_pct": 1.74}, {"name": "国产芯片", "change_pct": 3.06}, {"name": "液晶面板/LCD", "change_pct": 1.95}, {"name": "全息概念", "change_pct": 1.03}, {"name": "理想汽车概念股", "change_pct": 1.22}, {"name": "MicroLED", "change_pct": 2.5}, {"name": "钙钛矿电池", "change_pct": 1.48}, {"name": "智能手表", "change_pct": 2.39}, {"name": "MiniLED", "change_pct": 1.83}, {"name": "传感器", "change_pct": 2.16}, {"name": "大硅片", "change_pct": 4.31}, {"name": "AI PC", "change_pct": 0.84}, {"name": "华为产业链", "change_pct": 0.89}, {"name": "回购", "change_pct": 0.86}, {"name": "光电共封装CPO", "change_pct": 4.01}, {"name": "智能眼镜/MR头显", "change_pct": 2.09}, {"name": "玻璃基板封装", "change_pct": 3.09}]}, {"code": "600272", "name": "开开实业", "hot_rank": 54, "hot_rank_chg": -25, "stock_cnt": 5792, "price": "19.01", "change": "8.01", "market_id": "17", "circulate_market_value": "3041600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 55, "hot_rank_chg": -9, "stock_cnt": 5792, "price": "55.86", "change": "10.00", "market_id": "17", "circulate_market_value": "47288469000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半导体靶材"}, {"code": "600183", "name": "生益科技", "hot_rank": 56, "hot_rank_chg": -22, "stock_cnt": 5792, "price": "143.51", "change": "0.21", "market_id": "17", "circulate_market_value": "346110080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 57, "hot_rank_chg": 10, "stock_cnt": 5792, "price": "18.77", "change": "4.39", "market_id": "33", "circulate_market_value": "62366173000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 58, "hot_rank_chg": -31, "stock_cnt": 5792, "price": "187.40", "change": "0.81", "market_id": "17", "circulate_market_value": "51645261000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 59, "hot_rank_chg": -9, "stock_cnt": 5792, "price": "42.18", "change": "2.06", "market_id": "17", "circulate_market_value": "61666941000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 60, "hot_rank_chg": 98, "stock_cnt": 5792, "price": "6.74", "change": "4.01", "market_id": "33", "circulate_market_value": "6961987300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.66}, {"name": "锂电池", "change_pct": 1.31}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "铜箔/覆铜板", "change_pct": 2.76}, {"name": "粤港澳大湾区", "change_pct": 0.63}, {"name": "新能源汽车", "change_pct": 1.27}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.39}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 61, "hot_rank_chg": 62, "stock_cnt": 5792, "price": "13.64", "change": "10.00", "market_id": "17", "circulate_market_value": "17502829000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "金刚石散热"}, {"code": "300862", "name": "蓝盾光电", "hot_rank": 62, "hot_rank_chg": -10, "stock_cnt": 5792, "price": "54.60", "change": "15.46", "market_id": "33", "circulate_market_value": "8270317000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 63, "hot_rank_chg": -18, "stock_cnt": 5792, "price": "4.08", "change": "0.25", "market_id": "33", "circulate_market_value": "4636499900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 1.28}, {"name": "锂电池", "change_pct": 1.31}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "石墨烯", "change_pct": 1.76}, {"name": "新能源整车", "change_pct": 0.18}, {"name": "云计算数据中心", "change_pct": 0.45}, {"name": "汽车整车", "change_pct": 0.34}, {"name": "新能源汽车", "change_pct": 1.27}, {"name": "白色家电", "change_pct": 1.36}, {"name": "家电", "change_pct": 1.15}, {"name": "汽车热管理", "change_pct": 1.49}, {"name": "热泵", "change_pct": 1.49}, {"name": "轮边电机", "change_pct": 0.66}, {"name": "超级电容", "change_pct": 0.67}, {"name": "液冷服务器", "change_pct": 2.21}]}, {"code": "002724", "name": "海洋王", "hot_rank": 64, "hot_rank_chg": -7, "stock_cnt": 5792, "price": "7.20", "change": "6.20", "market_id": "33", "circulate_market_value": "4087980700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": 1.76}, {"name": "军民融合", "change_pct": 1.5}, {"name": "物联网", "change_pct": 0.79}, {"name": "LED", "change_pct": 1.74}, {"name": "军工", "change_pct": 1.45}, {"name": "智慧灯杆", "change_pct": 1.17}, {"name": "海洋经济", "change_pct": 1.25}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 65, "hot_rank_chg": 494, "stock_cnt": 5792, "price": "9.37", "change": "5.28", "market_id": "33", "circulate_market_value": "21761597000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 2.26}, {"name": "有色 · 铜", "change_pct": 3.15}, {"name": "有色 · 锑", "change_pct": 1.52}, {"name": "湖南国企改革", "change_pct": 1.23}, {"name": "有色 · 锌", "change_pct": 2.14}, {"name": "有色金属", "change_pct": 1.75}, {"name": "国企改革", "change_pct": 0.78}, {"name": "白银", "change_pct": 2.81}]}, {"code": "002739", "name": "儒意电影", "hot_rank": 66, "hot_rank_chg": 16, "stock_cnt": 5792, "price": "8.83", "change": "-7.92", "market_id": "33", "circulate_market_value": "18384076000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -0.51}, {"name": "足球", "change_pct": 0.7}, {"name": "阿里巴巴概念股", "change_pct": 0.17}, {"name": "拼多多概念股", "change_pct": 0.17}, {"name": "网红/MCN", "change_pct": 0.25}, {"name": "大消费", "change_pct": -0.52}, {"name": "盲盒", "change_pct": 0.17}, {"name": "短剧/互动影游", "change_pct": -0.5}, {"name": "IP经济/谷子经济", "change_pct": 0.13}, {"name": "首发经济", "change_pct": 0.88}, {"name": "小红书概念股", "change_pct": 0.11}, {"name": "服务消费", "change_pct": -0.58}]}, {"code": "000630", "name": "铜陵有色", "hot_rank": 68, "hot_rank_chg": 311, "stock_cnt": 5792, "price": "6.74", "change": "3.69", "market_id": "33", "circulate_market_value": "75103750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 2.26}, {"name": "锂电池", "change_pct": 1.31}, {"name": "安徽国企改革", "change_pct": 0.68}, {"name": "有色 · 铜", "change_pct": 3.15}, {"name": "铜箔/覆铜板", "change_pct": 2.76}, {"name": "有色金属", "change_pct": 1.75}, {"name": "新能源汽车", "change_pct": 1.27}, {"name": "人民币升值受益", "change_pct": 0.84}, {"name": "硫酸", "change_pct": 2.6}, {"name": "国企改革", "change_pct": 0.78}, {"name": "白银", "change_pct": 2.81}, {"name": "有色 · 镍", "change_pct": 1.32}]}, {"code": "002322", "name": "理工能科", "hot_rank": 69, "hot_rank_chg": -4, "stock_cnt": 5792, "price": "13.27", "change": "1.69", "market_id": "33", "circulate_market_value": "4662824900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002820", "name": "桂发祥", "hot_rank": 70, "hot_rank_chg": 115, "stock_cnt": 5792, "price": "11.15", "change": "9.96", "market_id": "33", "circulate_market_value": "2239681500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中华老字号", "xgb_concepts": [{"name": "天津国企改革", "change_pct": 0.63}, {"name": "休闲食品", "change_pct": 1.33}, {"name": "食品", "change_pct": 1.25}, {"name": "国企改革", "change_pct": 0.78}]}, {"code": "600881", "name": "亚泰集团", "hot_rank": 71, "hot_rank_chg": 38, "stock_cnt": 5792, "price": "2.22", "change": "1.83", "market_id": "17", "circulate_market_value": "7175375200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.22}, {"name": "中药", "change_pct": 0.27}, {"name": "创新药", "change_pct": -0.16}, {"name": "股权转让", "change_pct": 1.08}, {"name": "水泥", "change_pct": 1.12}, {"name": "保健品", "change_pct": 0.69}, {"name": "医药", "change_pct": 0.19}, {"name": "疫苗", "change_pct": 0.44}, {"name": "振兴东北", "change_pct": 0.57}, {"name": "食品", "change_pct": 1.25}, {"name": "物业管理", "change_pct": 0.65}, {"name": "低价股", "change_pct": 0.79}, {"name": "国企改革", "change_pct": 0.78}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 72, "hot_rank_chg": 8, "stock_cnt": 5792, "price": "8.15", "change": "0.12", "market_id": "33", "circulate_market_value": "13249404300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.86}, {"name": "电竞", "change_pct": -0.74}, {"name": "手游", "change_pct": -0.89}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "人工智能", "change_pct": 0.46}, {"name": "游戏", "change_pct": -1.08}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.24}, {"name": "腾讯概念股", "change_pct": -0.12}, {"name": "快手概念股", "change_pct": -0.1}, {"name": "元宇宙", "change_pct": 0.04}, {"name": "虚拟数字人", "change_pct": -0.15}, {"name": "东数西算/算力", "change_pct": 0.28}, {"name": "web3.0", "change_pct": -0.24}, {"name": "AIGC概念", "change_pct": 0.19}, {"name": "数据要素", "change_pct": 0.19}, {"name": "字节跳动概念股", "change_pct": 0.01}, {"name": "AI营销", "change_pct": -0.42}, {"name": "ChatGPT", "change_pct": -0.14}, {"name": "智能眼镜/MR头显", "change_pct": 2.09}, {"name": "人工智能大模型", "change_pct": 0.22}, {"name": "人形机器人", "change_pct": 1.63}, {"name": "短剧/互动影游", "change_pct": -0.5}, {"name": "多模态", "change_pct": 0.25}, {"name": "AI视频", "change_pct": -0.05}, {"name": "IP经济/谷子经济", "change_pct": 0.13}, {"name": "小红书概念股", "change_pct": 0.11}]}, {"code": "000831", "name": "中国稀土", "hot_rank": 73, "hot_rank_chg": -37, "stock_cnt": 5792, "price": "61.60", "change": "1.07", "market_id": "33", "circulate_market_value": "65371202000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 74, "hot_rank_chg": 12, "stock_cnt": 5792, "price": "433.20", "change": "6.65", "market_id": "33", "circulate_market_value": "71490586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003032", "name": "传智教育", "hot_rank": 75, "hot_rank_chg": -34, "stock_cnt": 5792, "price": "12.35", "change": "0.73", "market_id": "33", "circulate_market_value": "3513347900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.9}, {"name": "ST摘帽", "change_pct": 1.35}, {"name": "强势人气股", "change_pct": 1.55}, {"name": "教育", "change_pct": 0.08}, {"name": "阿里巴巴概念股", "change_pct": 0.17}, {"name": "职业教育", "change_pct": 0.65}, {"name": "在线教育", "change_pct": -0.5}, {"name": "华为鸿蒙", "change_pct": -0.12}, {"name": "华为产业链", "change_pct": 0.89}, {"name": "智谱AI", "change_pct": -0.52}]}, {"code": "603887", "name": "城地香江", "hot_rank": 76, "hot_rank_chg": 8, "stock_cnt": 5792, "price": "11.01", "change": "-7.63", "market_id": "17", "circulate_market_value": "6628343900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "云计算数据中心", "change_pct": 0.45}, {"name": "阿里巴巴概念股", "change_pct": 0.17}, {"name": "腾讯概念股", "change_pct": -0.12}, {"name": "东数西算/算力", "change_pct": 0.28}, {"name": "国资入股", "change_pct": 0.77}, {"name": "华为产业链", "change_pct": 0.89}]}, {"code": "002907", "name": "华森制药", "hot_rank": 77, "hot_rank_chg": 19, "stock_cnt": 5792, "price": "16.79", "change": "10.03", "market_id": "33", "circulate_market_value": "5638362200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "临床试验批准"}, {"code": "300058", "name": "蓝色光标", "hot_rank": 78, "hot_rank_chg": 23, "stock_cnt": 5792, "price": "15.18", "change": "0.53", "market_id": "33", "circulate_market_value": "52794982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 79, "hot_rank_chg": 9, "stock_cnt": 5792, "price": "68.66", "change": "9.05", "market_id": "33", "circulate_market_value": "104188270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 80, "hot_rank_chg": 22, "stock_cnt": 5792, "price": "448.46", "change": "0.09", "market_id": "33", "circulate_market_value": "562477890000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000779", "name": "甘咨询", "hot_rank": 81, "hot_rank_chg": 22, "stock_cnt": 5792, "price": "10.63", "change": "10.04", "market_id": "33", "circulate_market_value": "4940537000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "参股算力建设（金额较小）", "xgb_concepts": [{"name": "一带一路", "change_pct": 1.2}, {"name": "云计算数据中心", "change_pct": 0.45}, {"name": "水利", "change_pct": 0.96}, {"name": "大数据", "change_pct": -0.01}, {"name": "海绵城市", "change_pct": 1.08}, {"name": "风电", "change_pct": 0.82}, {"name": "乡村振兴", "change_pct": 2.22}, {"name": "数字经济", "change_pct": 0.24}, {"name": "大基建", "change_pct": 0.97}, {"name": "东数西算/算力", "change_pct": 0.28}, {"name": "新型城镇化", "change_pct": 1.16}, {"name": "国企改革", "change_pct": 0.78}, {"name": "旧改", "change_pct": 0.73}, {"name": "西部大开发", "change_pct": 1.11}, {"name": "低空经济", "change_pct": 1.5}, {"name": "房屋检测", "change_pct": 1.7}]}, {"code": "002202", "name": "金风科技", "hot_rank": 82, "hot_rank_chg": 65, "stock_cnt": 5792, "price": "21.39", "change": "2.20", "market_id": "33", "circulate_market_value": "71945374000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600683", "name": "京投发展", "hot_rank": 83, "hot_rank_chg": -5, "stock_cnt": 5792, "price": "11.20", "change": "-3.78", "market_id": "17", "circulate_market_value": "8296709100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": 0.2}, {"name": "光通信", "change_pct": 2.76}, {"name": "京津冀", "change_pct": 0.69}, {"name": "土地流转", "change_pct": 2.03}, {"name": "北京城市规划", "change_pct": 0.3}, {"name": "物业管理", "change_pct": 0.65}, {"name": "国企改革", "change_pct": 0.78}]}, {"code": "603011", "name": "合锻智能", "hot_rank": 84, "hot_rank_chg": 231, "stock_cnt": 5792, "price": "26.02", "change": "7.30", "market_id": "17", "circulate_market_value": "12864663700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 85, "hot_rank_chg": -22, "stock_cnt": 5792, "price": "196.46", "change": "2.58", "market_id": "33", "circulate_market_value": "154482480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600829", "name": "人民同泰", "hot_rank": 86, "hot_rank_chg": -12, "stock_cnt": 5792, "price": "11.47", "change": "-3.04", "market_id": "17", "circulate_market_value": "6651322200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药商业", "change_pct": -0.12}, {"name": "民营医院", "change_pct": 0.12}, {"name": "医药", "change_pct": 0.19}, {"name": "振兴东北", "change_pct": 0.57}, {"name": "宠物经济", "change_pct": 0.31}, {"name": "眼科", "change_pct": -0.12}]}, {"code": "301165", "name": "锐捷网络", "hot_rank": 87, "hot_rank_chg": -39, "stock_cnt": 5792, "price": "144.45", "change": "0.38", "market_id": "33", "circulate_market_value": "160864770000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 88, "hot_rank_chg": -20, "stock_cnt": 5792, "price": "166.90", "change": "4.81", "market_id": "17", "circulate_market_value": "412790470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600362", "name": "江西铜业", "hot_rank": 89, "hot_rank_chg": 341, "stock_cnt": 5792, "price": "46.82", "change": "4.95", "market_id": "17", "circulate_market_value": "97163084000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002329", "name": "皇氏集团", "hot_rank": 90, "hot_rank_chg": 5, "stock_cnt": 5792, "price": "4.35", "change": "1.87", "market_id": "33", "circulate_market_value": "2834429200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.86}, {"name": "乳业（奶粉）", "change_pct": 2.22}, {"name": "股权转让", "change_pct": 1.08}, {"name": "一带一路", "change_pct": 1.2}, {"name": "优化生育（三孩）", "change_pct": 0.42}, {"name": "智慧城市", "change_pct": 0.63}, {"name": "食品", "change_pct": 1.25}, {"name": "基因编辑", "change_pct": -0.19}, {"name": "社区团购", "change_pct": 2.08}, {"name": "大农业", "change_pct": 2.22}, {"name": "5G消息/RCS", "change_pct": -0.88}, {"name": "广西概念", "change_pct": 0.24}, {"name": "饮料", "change_pct": 1.61}]}, {"code": "600602", "name": "云赛智联", "hot_rank": 91, "hot_rank_chg": -21, "stock_cnt": 5792, "price": "19.84", "change": "-3.50", "market_id": "17", "circulate_market_value": "21314171000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000021", "name": "深科技", "hot_rank": 92, "hot_rank_chg": -3, "stock_cnt": 5792, "price": "41.89", "change": "4.13", "market_id": "33", "circulate_market_value": "65941377000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 93, "hot_rank_chg": 125, "stock_cnt": 5792, "price": "18.99", "change": "2.98", "market_id": "17", "circulate_market_value": "331581390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000506", "name": "招金黄金", "hot_rank": 94, "hot_rank_chg": 223, "stock_cnt": 5792, "price": "17.56", "change": "-0.45", "market_id": "33", "circulate_market_value": "16308094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000603", "name": "盛达资源", "hot_rank": 95, "hot_rank_chg": 163, "stock_cnt": 5792, "price": "32.86", "change": "2.40", "market_id": "33", "circulate_market_value": "21908300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 96, "hot_rank_chg": -40, "stock_cnt": 5792, "price": "60.06", "change": "-0.97", "market_id": "33", "circulate_market_value": "22132308000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 97, "hot_rank_chg": 1, "stock_cnt": 5792, "price": "36.79", "change": "5.66", "market_id": "33", "circulate_market_value": "55844661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000737", "name": "北方铜业", "hot_rank": 98, "hot_rank_chg": 1023, "stock_cnt": 5792, "price": "14.95", "change": "10.01", "market_id": "33", "circulate_market_value": "28472862000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "铜"}, {"code": "000977", "name": "浪潮信息", "hot_rank": 99, "hot_rank_chg": -39, "stock_cnt": 5792, "price": "79.29", "change": "0.62", "market_id": "33", "circulate_market_value": "116305094000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 100, "hot_rank_chg": 529, "stock_cnt": 5792, "price": "6.46", "change": "10.05", "market_id": "17", "circulate_market_value": "4145919600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "粮食概念", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 2.22}, {"name": "农业种植", "change_pct": 3.96}, {"name": "湖南国企改革", "change_pct": 1.23}, {"name": "乡村振兴", "change_pct": 2.22}, {"name": "休闲食品", "change_pct": 1.33}, {"name": "食品", "change_pct": 1.25}, {"name": "食品安全", "change_pct": 1.62}, {"name": "社区团购", "change_pct": 2.08}, {"name": "大农业", "change_pct": 2.22}, {"name": "预制菜", "change_pct": 1.32}, {"name": "人造肉", "change_pct": 2.1}, {"name": "国企改革", "change_pct": 0.78}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨公司未在规定期限内披露定期报告暨股票可能被终止上市", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301293": "[立案调查] 三博脑科：关于控股股东、实际控制人之一暨董事长被留置和立案调查的公告", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603200": "[行政处罚事先告知书] 上海洗霸：上海洗霸科技股份有限公司关于公司董事及高级管理人员收到行政处罚事先告知"};