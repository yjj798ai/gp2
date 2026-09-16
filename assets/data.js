const UPDATE_TIME = "2026-09-16 02:59";
const THS_HOT = [
  {
    "name": "PCB概念",
    "rise": 1.67,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续116天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "MLCC概念",
    "rise": 1.59,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续33天上榜",
    "rankChg": 0,
    "etfName": "财通福鑫定开混合",
    "code": "886112"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": 2.62,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续293天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "光纤概念",
    "rise": 2.81,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续122天上榜",
    "rankChg": 0,
    "etfName": "平安新兴产业LOF",
    "code": "886084"
  },
  {
    "name": "风电",
    "rise": 0.34,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "5天5次上榜",
    "rankChg": 0,
    "etfName": "绿色电力ETF",
    "code": "885641"
  },
  {
    "name": "创新药",
    "rise": 0.01,
    "rate": 0,
    "tag": "",
    "hotTag": "连续123天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "培育钻石",
    "rise": 1.71,
    "rate": 0,
    "tag": "",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "存储芯片",
    "rise": 2.63,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续246天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "PET铜箔",
    "rise": 1.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886020"
  },
  {
    "name": "粮食概念",
    "rise": 1.0,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续23天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "网络安全",
    "rise": -0.13,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885459"
  },
  {
    "name": "商业航天",
    "rise": 0.9,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续222天上榜",
    "rankChg": 1,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "液冷服务器",
    "rise": 1.17,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光刻胶",
    "rise": 2.37,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "半导体设备ETF",
    "code": "885864"
  },
  {
    "name": "绿色电力",
    "rise": 0.23,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "绿色电力ETF",
    "code": "885936"
  },
  {
    "name": "AI应用",
    "rise": 0.19,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续51天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "猪肉",
    "rise": -1.15,
    "rate": 0,
    "tag": "",
    "hotTag": "连续28天上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885573"
  },
  {
    "name": "固态电池",
    "rise": 1.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "新能源电池ETF",
    "code": "886032"
  },
  {
    "name": "芯片概念",
    "rise": 1.83,
    "rate": 0,
    "tag": "16家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "海峡两岸",
    "rise": 1.44,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 3,
    "etfName": "",
    "code": "885939"
  }
];
const THS_EVENTS = [
  {
    "title": "焦化厂减产 炭黑市场刷新历史新高",
    "desc": "",
    "heat": 382801,
    "direction": "炭黑",
    "themes": [
      "炭黑"
    ],
    "stocks": [
      {
        "name": "龙星科技",
        "code": "002442",
        "chg": 10.077519
      }
    ]
  },
  {
    "title": "长飞空芯光纤衰减突破至0.032dB/km",
    "desc": "",
    "heat": 372281,
    "direction": "光纤",
    "themes": [
      "光纤光缆",
      "空芯光纤",
      "光纤概念",
      "MPO连接器"
    ],
    "stocks": [
      {
        "name": "致尚科技",
        "code": "301486",
        "chg": 19.997761
      }
    ]
  },
  {
    "title": "中金：2027年光通信行业高景气度确定性抬升",
    "desc": "",
    "heat": 367297,
    "direction": "光模块/CPO",
    "themes": [
      "共封装光学(CPO)",
      "F5G概念"
    ],
    "stocks": [
      {
        "name": "威尔高",
        "code": "301251",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "存储芯片巨头，大消息！日韩股市飘红",
    "desc": "",
    "heat": 328426,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "有研硅",
        "code": "688432",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "光刻机巨头阿斯麦拟于2028年产逾110部EUV光刻机",
    "desc": "",
    "heat": 313904,
    "direction": "光刻机",
    "themes": [
      "光刻机"
    ],
    "stocks": [
      {
        "name": "福光股份",
        "code": "688010",
        "chg": 10.102201
      }
    ]
  },
  {
    "title": "农业农村部印发《全国种植业发展“十五五”规划》",
    "desc": "",
    "heat": 279710,
    "direction": "农业",
    "themes": [
      "渔业",
      "农业种植",
      "生态农业",
      "磷化工",
      "粮食概念",
      "代糖概念"
    ],
    "stocks": [
      {
        "name": "瑞丰高材",
        "code": "300243",
        "chg": 11.426844
      }
    ]
  },
  {
    "title": "华为发布全球首个3D数据中心 携手产业共建AIDC新范式",
    "desc": "",
    "heat": 251823,
    "direction": "华为数据中心",
    "themes": [
      "数据中心(AIDC)",
      "华为系算力",
      "华为概念",
      "东数西算(算力)"
    ],
    "stocks": [
      {
        "name": "博汇科技",
        "code": "688004",
        "chg": 20.014609
      }
    ]
  },
  {
    "title": "MLCC海外大厂释放扩产信号",
    "desc": "",
    "heat": 221995,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "华瓷股份",
        "code": "001216",
        "chg": 9.981741
      }
    ]
  },
  {
    "title": "全球首个MW级单相冷板全液冷超节点方案发布",
    "desc": "",
    "heat": 216514,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "泰福泵业",
        "code": "300992",
        "chg": 10.759494
      }
    ]
  },
  {
    "title": "中信证券：看好PCB/CCL景气周期的持续性及增长性",
    "desc": "",
    "heat": 165105,
    "direction": "AI PCB",
    "themes": [
      "电子布",
      "树脂",
      "PCB铜箔",
      "PCB设备",
      "服务器PCB"
    ],
    "stocks": [
      {
        "name": "东材科技",
        "code": "601208",
        "chg": 7.717237
      }
    ]
  },
  {
    "title": "动力电池回收利用产业标准体系建设指南公开征求意见",
    "desc": "",
    "heat": 77610,
    "direction": "动力电池回收",
    "themes": [
      "动力电池回收"
    ],
    "stocks": [
      {
        "name": "欣旺达",
        "code": "300207",
        "chg": 15.72717
      }
    ]
  },
  {
    "title": "黄仁勋：AI行业不需要新的安全监管法规",
    "desc": "",
    "heat": 61291,
    "direction": "AI安全",
    "themes": [
      "AI安全",
      "网络安全"
    ],
    "stocks": [
      {
        "name": "博汇科技",
        "code": "688004",
        "chg": 20.014609
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "黄酒",
    "change": "+9.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大硅片",
    "change": "+5.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+4.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "炭黑",
    "change": "+4.98%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光电共封装CPO",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光通信",
    "change": "+3.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳化硅",
    "change": "+3.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光纤概念",
    "change": "+3.72%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "微信小店",
    "change": "+3.29%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "期货概念",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "磷化铟",
    "change": "+3.14%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "F5G",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+3.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "高带宽存储器HBM",
    "change": "+3.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "中芯国际概念股",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "第三代半导体",
    "change": "+2.95%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "激光",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "半导体",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "光刻机（胶）",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白银",
    "change": "+2.84%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 3,
    "hot_rank_chg": 6,
    "stock_cnt": 5844,
    "price": "12.24",
    "change": "1.49",
    "market_id": "33",
    "circulate_market_value": "10851883500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": 1.41
      },
      {
        "name": "手机产业链",
        "change_pct": 1.54
      },
      {
        "name": "超高清视频",
        "change_pct": 0.94
      },
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "OLED",
        "change_pct": 1.57
      },
      {
        "name": "包装印刷",
        "change_pct": 0.95
      },
      {
        "name": "光伏",
        "change_pct": 0.92
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "小米概念股",
        "change_pct": 1.31
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.49
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.76
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "601218",
    "name": "吉鑫科技",
    "hot_rank": 8,
    "hot_rank_chg": 103,
    "stock_cnt": 5844,
    "price": "5.34",
    "change": "2.90",
    "market_id": "17",
    "circulate_market_value": "5174639000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "风电",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 9,
    "hot_rank_chg": 2,
    "stock_cnt": 5844,
    "price": "12.24",
    "change": "-4.00",
    "market_id": "17",
    "circulate_market_value": "7855426600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": -0.08
      },
      {
        "name": "农业种植",
        "change_pct": 0.98
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.18
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.88
      },
      {
        "name": "休闲食品",
        "change_pct": -0.15
      },
      {
        "name": "食品",
        "change_pct": 0.01
      },
      {
        "name": "食品安全",
        "change_pct": 1.79
      },
      {
        "name": "社区团购",
        "change_pct": 0.18
      },
      {
        "name": "大农业",
        "change_pct": 0.26
      },
      {
        "name": "预制菜",
        "change_pct": 0.05
      },
      {
        "name": "人造肉",
        "change_pct": 1.24
      },
      {
        "name": "国企改革",
        "change_pct": 0.09
      }
    ]
  },
  {
    "code": "000981",
    "name": "山子高科",
    "hot_rank": 10,
    "hot_rank_chg": -5,
    "stock_cnt": 5844,
    "price": "2.73",
    "change": "-9.27",
    "market_id": "33",
    "circulate_market_value": "25971462000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "半导体",
        "change_pct": 2.84
      },
      {
        "name": "无人驾驶",
        "change_pct": 0.65
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.29
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "新能源车零部件",
        "change_pct": 0.42
      },
      {
        "name": "减速器",
        "change_pct": 0.15
      },
      {
        "name": "华为汽车",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "000978",
    "name": "桂林旅游",
    "hot_rank": 12,
    "hot_rank_chg": 2,
    "stock_cnt": 5844,
    "price": "8.79",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "4114788500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "旅游",
        "change_pct": -0.69
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.43
      },
      {
        "name": "广西概念",
        "change_pct": -0.72
      },
      {
        "name": "低空经济",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 13,
    "hot_rank_chg": 24,
    "stock_cnt": 5844,
    "price": "7.96",
    "change": "1.92",
    "market_id": "33",
    "circulate_market_value": "14223474000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.63
      },
      {
        "name": "风电",
        "change_pct": -0.07
      }
    ]
  },
  {
    "code": "002068",
    "name": "黑猫股份",
    "hot_rank": 15,
    "hot_rank_chg": 110,
    "stock_cnt": 5844,
    "price": "10.14",
    "change": "9.98",
    "market_id": "33",
    "circulate_market_value": "7452959000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "炭黑涨价",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "炭黑",
        "change_pct": 4.98
      },
      {
        "name": "固态电池",
        "change_pct": 1.44
      },
      {
        "name": "PVDF概念",
        "change_pct": 1.94
      },
      {
        "name": "碳基材料",
        "change_pct": 1.97
      },
      {
        "name": "超级电容",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 19,
    "hot_rank_chg": 2,
    "stock_cnt": 5844,
    "price": "12.15",
    "change": "0.17",
    "market_id": "17",
    "circulate_market_value": "21082448000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": 0.4
      },
      {
        "name": "核电",
        "change_pct": 0.4
      },
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.68
      },
      {
        "name": "PCB板",
        "change_pct": 1.82
      },
      {
        "name": "中科院系",
        "change_pct": 0.45
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "宁德时代概念股",
        "change_pct": 0.52
      },
      {
        "name": "固态电池",
        "change_pct": 1.44
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 21,
    "hot_rank_chg": -3,
    "stock_cnt": 5844,
    "price": "6.99",
    "change": "-10.04",
    "market_id": "33",
    "circulate_market_value": "8156275800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -0.02
      },
      {
        "name": "国产软件",
        "change_pct": -0.12
      },
      {
        "name": "一带一路",
        "change_pct": 0.15
      },
      {
        "name": "量子通信",
        "change_pct": 0.63
      },
      {
        "name": "人工智能",
        "change_pct": 0.44
      },
      {
        "name": "网络安全",
        "change_pct": -0.47
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.94
      },
      {
        "name": "物联网",
        "change_pct": 0.65
      },
      {
        "name": "大数据",
        "change_pct": 0.21
      },
      {
        "name": "破净股",
        "change_pct": -0.4
      },
      {
        "name": "数字经济",
        "change_pct": 0.14
      },
      {
        "name": "国产芯片",
        "change_pct": 2.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.43
      },
      {
        "name": "信创",
        "change_pct": 0.0
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.15
      },
      {
        "name": "跨境支付",
        "change_pct": -0.48
      },
      {
        "name": "web3.0",
        "change_pct": 0.55
      },
      {
        "name": "数字人民币",
        "change_pct": -0.1
      },
      {
        "name": "智慧政务",
        "change_pct": -0.15
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.18
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.22
      },
      {
        "name": "卫星互联网",
        "change_pct": 1.04
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.13
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "回购",
        "change_pct": 0.05
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.11
      },
      {
        "name": "智能电网",
        "change_pct": 0.52
      },
      {
        "name": "低空经济",
        "change_pct": 0.47
      },
      {
        "name": "量子计算",
        "change_pct": -0.25
      },
      {
        "name": "财税改革",
        "change_pct": -1.11
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "002584",
    "name": "西陇科学",
    "hot_rank": 23,
    "hot_rank_chg": 144,
    "stock_cnt": 5844,
    "price": "9.55",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4594880700.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "光刻胶配套试剂",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 0.52
      },
      {
        "name": "医疗器械",
        "change_pct": 0.36
      },
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "基因测序",
        "change_pct": 0.48
      },
      {
        "name": "PCB板",
        "change_pct": 1.82
      },
      {
        "name": "医药",
        "change_pct": 0.12
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "化学原料药",
        "change_pct": 0.11
      },
      {
        "name": "食品安全",
        "change_pct": 1.79
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.32
      },
      {
        "name": "光刻机（胶）",
        "change_pct": 2.84
      },
      {
        "name": "异丙醇",
        "change_pct": 1.67
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.34
      },
      {
        "name": "磷酸铁锂",
        "change_pct": 1.18
      }
    ]
  },
  {
    "code": "000759",
    "name": "中百集团",
    "hot_rank": 24,
    "hot_rank_chg": 28,
    "stock_cnt": 5844,
    "price": "6.30",
    "change": "-6.67",
    "market_id": "33",
    "circulate_market_value": "4130948000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.65
      },
      {
        "name": "新零售",
        "change_pct": 0.14
      },
      {
        "name": "农业种植",
        "change_pct": 0.98
      },
      {
        "name": "冷链",
        "change_pct": 0.41
      },
      {
        "name": "大农业",
        "change_pct": 0.26
      },
      {
        "name": "预制菜",
        "change_pct": 0.05
      },
      {
        "name": "国企改革",
        "change_pct": 0.09
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.76
      },
      {
        "name": "免税店概念",
        "change_pct": -0.43
      },
      {
        "name": "湖北国企改革",
        "change_pct": 0.12
      }
    ]
  },
  {
    "code": "000980",
    "name": "众泰汽车",
    "hot_rank": 26,
    "hot_rank_chg": -4,
    "stock_cnt": 5844,
    "price": "2.10",
    "change": "-6.64",
    "market_id": "33",
    "circulate_market_value": "10589220300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新能源整车",
        "change_pct": -1.96
      },
      {
        "name": "汽车整车",
        "change_pct": -2.18
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "低价股",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "002442",
    "name": "龙星科技",
    "hot_rank": 29,
    "hot_rank_chg": 2813,
    "stock_cnt": 5844,
    "price": "5.68",
    "change": "10.08",
    "market_id": "33",
    "circulate_market_value": "2791781200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "炭黑",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -0.14
      },
      {
        "name": "股权转让",
        "change_pct": 0.69
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "炭黑",
        "change_pct": 4.98
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.38
      },
      {
        "name": "PVDF概念",
        "change_pct": 1.94
      },
      {
        "name": "碳基材料",
        "change_pct": 1.97
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 35,
    "hot_rank_chg": -15,
    "stock_cnt": 5844,
    "price": "8.71",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "16680455000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "林业",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.75
      },
      {
        "name": "林业",
        "change_pct": 4.98
      },
      {
        "name": "碳中和",
        "change_pct": 0.38
      },
      {
        "name": "自贸区",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "002846",
    "name": "英联股份",
    "hot_rank": 37,
    "hot_rank_chg": 283,
    "stock_cnt": 5844,
    "price": "12.75",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "3460245500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "固态电池",
    "xgb_concepts": [
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "包装印刷",
        "change_pct": 0.95
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "固态电池",
        "change_pct": 1.44
      },
      {
        "name": "PET复合铜箔",
        "change_pct": 1.5
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 38,
    "hot_rank_chg": -13,
    "stock_cnt": 5844,
    "price": "12.89",
    "change": "1.82",
    "market_id": "17",
    "circulate_market_value": "23061993000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": -0.38
      },
      {
        "name": "纯碱",
        "change_pct": -0.97
      },
      {
        "name": "食品",
        "change_pct": 0.01
      },
      {
        "name": "土壤修复",
        "change_pct": 0.95
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.58
      },
      {
        "name": "OpenClaw概念",
        "change_pct": -0.16
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.05
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 39,
    "hot_rank_chg": -3,
    "stock_cnt": 5844,
    "price": "7.44",
    "change": "4.49",
    "market_id": "17",
    "circulate_market_value": "18737713000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.65
      },
      {
        "name": "工业大麻",
        "change_pct": 0.22
      },
      {
        "name": "中药",
        "change_pct": -0.2
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "保健品",
        "change_pct": -0.26
      },
      {
        "name": "民营医院",
        "change_pct": 0.19
      },
      {
        "name": "医药",
        "change_pct": 0.12
      },
      {
        "name": "化学原料药",
        "change_pct": 0.11
      },
      {
        "name": "流感",
        "change_pct": 0.04
      },
      {
        "name": "振兴东北",
        "change_pct": -0.04
      },
      {
        "name": "食品",
        "change_pct": 0.01
      }
    ]
  },
  {
    "code": "600792",
    "name": "云煤能源",
    "hot_rank": 41,
    "hot_rank_chg": 7,
    "stock_cnt": 5844,
    "price": "4.86",
    "change": "-8.13",
    "market_id": "17",
    "circulate_market_value": "5394228700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": -1.17
      },
      {
        "name": "甲醇",
        "change_pct": -0.39
      },
      {
        "name": "煤化工",
        "change_pct": -0.79
      }
    ]
  },
  {
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 48,
    "hot_rank_chg": 60,
    "stock_cnt": 5844,
    "price": "9.09",
    "change": "2.37",
    "market_id": "17",
    "circulate_market_value": "4797720900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 0.98
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "棉花",
        "change_pct": 0.8
      },
      {
        "name": "大农业",
        "change_pct": 0.26
      },
      {
        "name": "供销社",
        "change_pct": 0.61
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 49,
    "hot_rank_chg": 50,
    "stock_cnt": 5844,
    "price": "10.26",
    "change": "-8.64",
    "market_id": "17",
    "circulate_market_value": "3860225600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "物业管理",
        "change_pct": 0.57
      },
      {
        "name": "免税店概念",
        "change_pct": -0.43
      },
      {
        "name": "地摊经济",
        "change_pct": 0.71
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 59,
    "hot_rank_chg": 11,
    "stock_cnt": 5844,
    "price": "6.52",
    "change": "-1.66",
    "market_id": "33",
    "circulate_market_value": "6734741400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.4
      },
      {
        "name": "锂电池",
        "change_pct": 1.04
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": 0.68
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.47
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "600359",
    "name": "新农开发",
    "hot_rank": 65,
    "hot_rank_chg": 180,
    "stock_cnt": 5844,
    "price": "7.87",
    "change": "-0.13",
    "market_id": "17",
    "circulate_market_value": "3002505900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 0.98
      },
      {
        "name": "新疆国企改革",
        "change_pct": 0.46
      },
      {
        "name": "农垦",
        "change_pct": 0.69
      },
      {
        "name": "棉花",
        "change_pct": 0.8
      },
      {
        "name": "新疆概念",
        "change_pct": 0.45
      },
      {
        "name": "大农业",
        "change_pct": 0.26
      },
      {
        "name": "国企改革",
        "change_pct": 0.09
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.34
      }
    ]
  },
  {
    "code": "002522",
    "name": "浙江众成",
    "hot_rank": 74,
    "hot_rank_chg": 79,
    "stock_cnt": 5844,
    "price": "6.00",
    "change": "3.27",
    "market_id": "33",
    "circulate_market_value": "5431258500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "5G",
        "change_pct": 1.95
      },
      {
        "name": "包装印刷",
        "change_pct": 0.95
      },
      {
        "name": "湖南国企改革",
        "change_pct": 0.18
      },
      {
        "name": "国企改革",
        "change_pct": 0.09
      },
      {
        "name": "光纤概念",
        "change_pct": 3.72
      }
    ]
  },
  {
    "code": "001896",
    "name": "豫能控股",
    "hot_rank": 79,
    "hot_rank_chg": -23,
    "stock_cnt": 5844,
    "price": "12.35",
    "change": "-1.20",
    "market_id": "33",
    "circulate_market_value": "18843399000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.44
      },
      {
        "name": "电力体制改革",
        "change_pct": 0.26
      },
      {
        "name": "充电桩",
        "change_pct": 0.7
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.94
      },
      {
        "name": "火电",
        "change_pct": -0.34
      },
      {
        "name": "光伏",
        "change_pct": 0.92
      },
      {
        "name": "风电",
        "change_pct": -0.07
      },
      {
        "name": "地热",
        "change_pct": 0.47
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.66
      },
      {
        "name": "储能",
        "change_pct": 0.62
      },
      {
        "name": "碳中和",
        "change_pct": 0.38
      },
      {
        "name": "超超临界发电",
        "change_pct": -0.31
      },
      {
        "name": "国企改革",
        "change_pct": 0.09
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 82,
    "hot_rank_chg": -23,
    "stock_cnt": 5844,
    "price": "5.31",
    "change": "0.57",
    "market_id": "33",
    "circulate_market_value": "187799480000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 1.46
      },
      {
        "name": "手机产业链",
        "change_pct": 1.54
      },
      {
        "name": "超高清视频",
        "change_pct": 0.94
      },
      {
        "name": "苹果产业链",
        "change_pct": 1.83
      },
      {
        "name": "电竞",
        "change_pct": 0.09
      },
      {
        "name": "半导体",
        "change_pct": 2.84
      },
      {
        "name": "人工智能",
        "change_pct": 0.44
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.05
      },
      {
        "name": "VR&AR",
        "change_pct": 1.49
      },
      {
        "name": "OLED",
        "change_pct": 1.57
      },
      {
        "name": "京津冀",
        "change_pct": 0.24
      },
      {
        "name": "物联网",
        "change_pct": 0.65
      },
      {
        "name": "指纹识别",
        "change_pct": 1.18
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.29
      },
      {
        "name": "白马股",
        "change_pct": -0.76
      },
      {
        "name": "智能制造",
        "change_pct": 0.64
      },
      {
        "name": "小米概念股",
        "change_pct": 1.31
      },
      {
        "name": "国产芯片",
        "change_pct": 2.36
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 1.49
      },
      {
        "name": "全息概念",
        "change_pct": 1.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.38
      },
      {
        "name": "MicroLED",
        "change_pct": 1.85
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 1.35
      },
      {
        "name": "智能手表",
        "change_pct": 1.58
      },
      {
        "name": "MiniLED",
        "change_pct": 1.72
      },
      {
        "name": "传感器",
        "change_pct": 1.29
      },
      {
        "name": "大硅片",
        "change_pct": 5.95
      },
      {
        "name": "AI PC",
        "change_pct": 1.61
      },
      {
        "name": "华为产业链",
        "change_pct": 0.87
      },
      {
        "name": "回购",
        "change_pct": 0.05
      },
      {
        "name": "光电共封装CPO",
        "change_pct": 4.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 1.72
      },
      {
        "name": "玻璃基板封装",
        "change_pct": 1.94
      }
    ]
  },
  {
    "code": "600108",
    "name": "亚盛集团",
    "hot_rank": 84,
    "hot_rank_chg": 7,
    "stock_cnt": 5844,
    "price": "4.01",
    "change": "2.04",
    "market_id": "17",
    "circulate_market_value": "7807129600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.65
      },
      {
        "name": "农业种植",
        "change_pct": 0.98
      },
      {
        "name": "强势人气股",
        "change_pct": 1.27
      },
      {
        "name": "土地流转",
        "change_pct": 0.64
      },
      {
        "name": "农垦",
        "change_pct": 0.76
      },
      {
        "name": "乡村振兴",
        "change_pct": 0.87
      },
      {
        "name": "食品",
        "change_pct": -0.01
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 0.55
      },
      {
        "name": "大农业",
        "change_pct": 0.25
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "000523",
    "name": "红棉股份",
    "hot_rank": 90,
    "hot_rank_chg": 27,
    "stock_cnt": 5844,
    "price": "3.27",
    "change": "0.61",
    "market_id": "33",
    "circulate_market_value": "5869055000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "啤酒",
        "change_pct": -0.4
      },
      {
        "name": "调味品",
        "change_pct": -0.37
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.46
      },
      {
        "name": "白糖",
        "change_pct": 0.16
      },
      {
        "name": "食品",
        "change_pct": -0.01
      },
      {
        "name": "甜味剂/代糖",
        "change_pct": 0.55
      },
      {
        "name": "物业管理",
        "change_pct": 0.55
      },
      {
        "name": "国企改革",
        "change_pct": 0.07
      },
      {
        "name": "饮料",
        "change_pct": -0.06
      }
    ]
  },
  {
    "code": "002059",
    "name": "云南旅游",
    "hot_rank": 92,
    "hot_rank_chg": -3,
    "stock_cnt": 5844,
    "price": "4.41",
    "change": "-4.13",
    "market_id": "33",
    "circulate_market_value": "4367634200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.04
      },
      {
        "name": "旅游",
        "change_pct": -0.67
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.83
      },
      {
        "name": "国企改革",
        "change_pct": 0.07
      }
    ]
  },
  {
    "code": "002560",
    "name": "通达股份",
    "hot_rank": 93,
    "hot_rank_chg": -26,
    "stock_cnt": 5844,
    "price": "7.42",
    "change": "-4.02",
    "market_id": "33",
    "circulate_market_value": "4699427200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.42
      },
      {
        "name": "医疗器械",
        "change_pct": 0.38
      },
      {
        "name": "通用航空",
        "change_pct": -0.04
      },
      {
        "name": "一带一路",
        "change_pct": 0.12
      },
      {
        "name": "充电桩",
        "change_pct": 0.67
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.9
      },
      {
        "name": "大飞机",
        "change_pct": 0.33
      },
      {
        "name": "军民融合",
        "change_pct": 0.88
      },
      {
        "name": "光伏",
        "change_pct": 0.86
      },
      {
        "name": "有色金属",
        "change_pct": 0.92
      },
      {
        "name": "军工",
        "change_pct": 0.7
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.62
      },
      {
        "name": "特高压",
        "change_pct": 0.8
      },
      {
        "name": "呼吸机",
        "change_pct": 0.66
      },
      {
        "name": "智能电网",
        "change_pct": 0.49
      }
    ]
  },
  {
    "code": "600163",
    "name": "中闽能源",
    "hot_rank": 94,
    "hot_rank_chg": 0,
    "stock_cnt": 5844,
    "price": "6.27",
    "change": "-0.32",
    "market_id": "17",
    "circulate_market_value": "11931785800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电力体制改革",
        "change_pct": 0.25
      },
      {
        "name": "充电桩",
        "change_pct": 0.67
      },
      {
        "name": "风电",
        "change_pct": -0.11
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.62
      }
    ]
  },
  {
    "code": "600488",
    "name": "津药药业",
    "hot_rank": 98,
    "hot_rank_chg": -35,
    "stock_cnt": 5844,
    "price": "6.02",
    "change": "-1.31",
    "market_id": "17",
    "circulate_market_value": "6573157800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "医药",
        "change_pct": 0.14
      },
      {
        "name": "化学原料药",
        "change_pct": 0.13
      },
      {
        "name": "数字经济",
        "change_pct": 0.11
      },
      {
        "name": "辅助生殖",
        "change_pct": 0.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.34
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000993", "name": "闽东电力", "hot_rank": 1, "hot_rank_chg": 2, "stock_cnt": 5844, "price": "18.48", "change": "10.00", "market_id": "33", "circulate_market_value": "8462942900.00", "change_type": "1", "change_section": "6", "change_days": "6", "change_reason": "海上风电"}, {"code": "603186", "name": "华正新材", "hot_rank": 2, "hot_rank_chg": 17, "stock_cnt": 5844, "price": "248.97", "change": "-1.14", "market_id": "17", "circulate_market_value": "39036135000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 3, "hot_rank_chg": 6, "stock_cnt": 5844, "price": "12.24", "change": "1.49", "market_id": "33", "circulate_market_value": "10851883500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": 1.41}, {"name": "手机产业链", "change_pct": 1.54}, {"name": "超高清视频", "change_pct": 0.94}, {"name": "锂电池", "change_pct": 1.04}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "OLED", "change_pct": 1.57}, {"name": "包装印刷", "change_pct": 0.95}, {"name": "光伏", "change_pct": 0.92}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "小米概念股", "change_pct": 1.31}, {"name": "液晶面板/LCD", "change_pct": 1.49}, {"name": "可降解塑料", "change_pct": 0.76}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "PET复合铜箔", "change_pct": 1.5}]}, {"code": "600869", "name": "远东股份", "hot_rank": 4, "hot_rank_chg": -2, "stock_cnt": 5844, "price": "22.17", "change": "1.14", "market_id": "17", "circulate_market_value": "49203050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5844, "price": "23.59", "change": "6.12", "market_id": "33", "circulate_market_value": "27752899000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 6, "hot_rank_chg": 11, "stock_cnt": 5844, "price": "39.19", "change": "-0.63", "market_id": "33", "circulate_market_value": "24725765000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 7, "hot_rank_chg": 0, "stock_cnt": 5844, "price": "14.57", "change": "-10.01", "market_id": "17", "circulate_market_value": "9703620000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601218", "name": "吉鑫科技", "hot_rank": 8, "hot_rank_chg": 103, "stock_cnt": 5844, "price": "5.34", "change": "2.90", "market_id": "17", "circulate_market_value": "5174639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "风电", "change_pct": -0.07}]}, {"code": "600127", "name": "金健米业", "hot_rank": 9, "hot_rank_chg": 2, "stock_cnt": 5844, "price": "12.24", "change": "-4.00", "market_id": "17", "circulate_market_value": "7855426600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": -0.08}, {"name": "农业种植", "change_pct": 0.98}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "湖南国企改革", "change_pct": 0.18}, {"name": "乡村振兴", "change_pct": 0.88}, {"name": "休闲食品", "change_pct": -0.15}, {"name": "食品", "change_pct": 0.01}, {"name": "食品安全", "change_pct": 1.79}, {"name": "社区团购", "change_pct": 0.18}, {"name": "大农业", "change_pct": 0.26}, {"name": "预制菜", "change_pct": 0.05}, {"name": "人造肉", "change_pct": 1.24}, {"name": "国企改革", "change_pct": 0.09}]}, {"code": "000981", "name": "山子高科", "hot_rank": 10, "hot_rank_chg": -5, "stock_cnt": 5844, "price": "2.73", "change": "-9.27", "market_id": "33", "circulate_market_value": "25971462000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "半导体", "change_pct": 2.84}, {"name": "无人驾驶", "change_pct": 0.65}, {"name": "汽车零部件", "change_pct": 0.29}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "新能源车零部件", "change_pct": 0.42}, {"name": "减速器", "change_pct": 0.15}, {"name": "华为汽车", "change_pct": -0.11}]}, {"code": "002912", "name": "中新赛克", "hot_rank": 11, "hot_rank_chg": 20, "stock_cnt": 5844, "price": "25.61", "change": "-9.98", "market_id": "33", "circulate_market_value": "4154526800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000978", "name": "桂林旅游", "hot_rank": 12, "hot_rank_chg": 2, "stock_cnt": 5844, "price": "8.79", "change": "-10.03", "market_id": "33", "circulate_market_value": "4114788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.27}, {"name": "旅游", "change_pct": -0.69}, {"name": "腾讯概念股", "change_pct": 0.43}, {"name": "广西概念", "change_pct": -0.72}, {"name": "低空经济", "change_pct": 0.47}]}, {"code": "002531", "name": "天顺风能", "hot_rank": 13, "hot_rank_chg": 24, "stock_cnt": 5844, "price": "7.96", "change": "1.92", "market_id": "33", "circulate_market_value": "14223474000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.63}, {"name": "风电", "change_pct": -0.07}]}, {"code": "000823", "name": "超声电子", "hot_rank": 14, "hot_rank_chg": -13, "stock_cnt": 5844, "price": "23.92", "change": "0.08", "market_id": "33", "circulate_market_value": "14230777000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002068", "name": "黑猫股份", "hot_rank": 15, "hot_rank_chg": 110, "stock_cnt": 5844, "price": "10.14", "change": "9.98", "market_id": "33", "circulate_market_value": "7452959000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "炭黑涨价", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.04}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "炭黑", "change_pct": 4.98}, {"name": "固态电池", "change_pct": 1.44}, {"name": "PVDF概念", "change_pct": 1.94}, {"name": "碳基材料", "change_pct": 1.97}, {"name": "超级电容", "change_pct": 1.29}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 16, "hot_rank_chg": -12, "stock_cnt": 5844, "price": "46.90", "change": "-0.42", "market_id": "17", "circulate_market_value": "186267430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 17, "hot_rank_chg": 25, "stock_cnt": 5844, "price": "45.18", "change": "-0.62", "market_id": "17", "circulate_market_value": "70354449000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 18, "hot_rank_chg": -12, "stock_cnt": 5844, "price": "58.47", "change": "1.64", "market_id": "33", "circulate_market_value": "67093738000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 19, "hot_rank_chg": 2, "stock_cnt": 5844, "price": "12.15", "change": "0.17", "market_id": "17", "circulate_market_value": "21082448000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": 0.4}, {"name": "核电", "change_pct": 0.4}, {"name": "锂电池", "change_pct": 1.04}, {"name": "铜箔/覆铜板", "change_pct": 0.68}, {"name": "PCB板", "change_pct": 1.82}, {"name": "中科院系", "change_pct": 0.45}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "宁德时代概念股", "change_pct": 0.52}, {"name": "固态电池", "change_pct": 1.44}, {"name": "PET复合铜箔", "change_pct": 1.5}]}, {"code": "002882", "name": "金龙羽", "hot_rank": 20, "hot_rank_chg": 142, "stock_cnt": 5844, "price": "25.01", "change": "6.65", "market_id": "33", "circulate_market_value": "6177220900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002212", "name": "天融信", "hot_rank": 21, "hot_rank_chg": -3, "stock_cnt": 5844, "price": "6.99", "change": "-10.04", "market_id": "33", "circulate_market_value": "8156275800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -0.02}, {"name": "国产软件", "change_pct": -0.12}, {"name": "一带一路", "change_pct": 0.15}, {"name": "量子通信", "change_pct": 0.63}, {"name": "人工智能", "change_pct": 0.44}, {"name": "网络安全", "change_pct": -0.47}, {"name": "云计算数据中心", "change_pct": 0.94}, {"name": "物联网", "change_pct": 0.65}, {"name": "大数据", "change_pct": 0.21}, {"name": "破净股", "change_pct": -0.4}, {"name": "数字经济", "change_pct": 0.14}, {"name": "国产芯片", "change_pct": 2.36}, {"name": "阿里巴巴概念股", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.43}, {"name": "信创", "change_pct": 0.0}, {"name": "华为昇腾", "change_pct": 0.15}, {"name": "跨境支付", "change_pct": -0.48}, {"name": "web3.0", "change_pct": 0.55}, {"name": "数字人民币", "change_pct": -0.1}, {"name": "智慧政务", "change_pct": -0.15}, {"name": "华为鸿蒙", "change_pct": -0.18}, {"name": "华为云·鲲鹏", "change_pct": -0.22}, {"name": "卫星互联网", "change_pct": 1.04}, {"name": "智慧灯杆", "change_pct": 1.13}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "回购", "change_pct": 0.05}, {"name": "AI大模型/智能体", "change_pct": 0.11}, {"name": "智能电网", "change_pct": 0.52}, {"name": "低空经济", "change_pct": 0.47}, {"name": "量子计算", "change_pct": -0.25}, {"name": "财税改革", "change_pct": -1.11}, {"name": "DeepSeek概念股", "change_pct": 0.05}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 22, "hot_rank_chg": 11, "stock_cnt": 5844, "price": "13.93", "change": "-7.74", "market_id": "17", "circulate_market_value": "6191111100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002584", "name": "西陇科学", "hot_rank": 23, "hot_rank_chg": 144, "stock_cnt": 5844, "price": "9.55", "change": "10.02", "market_id": "33", "circulate_market_value": "4594880700.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "光刻胶配套试剂", "xgb_concepts": [{"name": "体外诊断", "change_pct": 0.52}, {"name": "医疗器械", "change_pct": 0.36}, {"name": "锂电池", "change_pct": 1.04}, {"name": "基因测序", "change_pct": 0.48}, {"name": "PCB板", "change_pct": 1.82}, {"name": "医药", "change_pct": 0.12}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "化学原料药", "change_pct": 0.11}, {"name": "食品安全", "change_pct": 1.79}, {"name": "辅助生殖", "change_pct": 0.32}, {"name": "光刻机（胶）", "change_pct": 2.84}, {"name": "异丙醇", "change_pct": 1.67}, {"name": "新冠病毒防治", "change_pct": 0.34}, {"name": "磷酸铁锂", "change_pct": 1.18}]}, {"code": "000759", "name": "中百集团", "hot_rank": 24, "hot_rank_chg": 28, "stock_cnt": 5844, "price": "6.30", "change": "-6.67", "market_id": "33", "circulate_market_value": "4130948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.65}, {"name": "新零售", "change_pct": 0.14}, {"name": "农业种植", "change_pct": 0.98}, {"name": "冷链", "change_pct": 0.41}, {"name": "大农业", "change_pct": 0.26}, {"name": "预制菜", "change_pct": 0.05}, {"name": "国企改革", "change_pct": 0.09}, {"name": "可降解塑料", "change_pct": 0.76}, {"name": "免税店概念", "change_pct": -0.43}, {"name": "湖北国企改革", "change_pct": 0.12}]}, {"code": "601208", "name": "东材科技", "hot_rank": 25, "hot_rank_chg": 78, "stock_cnt": 5844, "price": "53.23", "change": "7.82", "market_id": "17", "circulate_market_value": "53772038000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000980", "name": "众泰汽车", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5844, "price": "2.10", "change": "-6.64", "market_id": "33", "circulate_market_value": "10589220300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新能源整车", "change_pct": -1.96}, {"name": "汽车整车", "change_pct": -2.18}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "低价股", "change_pct": 0.29}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 27, "hot_rank_chg": -14, "stock_cnt": 5844, "price": "16.44", "change": "0.49", "market_id": "17", "circulate_market_value": "21113540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002579", "name": "中京电子", "hot_rank": 28, "hot_rank_chg": -16, "stock_cnt": 5844, "price": "19.30", "change": "3.76", "market_id": "33", "circulate_market_value": "11260358400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002442", "name": "龙星科技", "hot_rank": 29, "hot_rank_chg": 2813, "stock_cnt": 5844, "price": "5.68", "change": "10.08", "market_id": "33", "circulate_market_value": "2791781200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "炭黑", "xgb_concepts": [{"name": "社保重仓", "change_pct": -0.14}, {"name": "股权转让", "change_pct": 0.69}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "炭黑", "change_pct": 4.98}, {"name": "阿里巴巴概念股", "change_pct": 0.38}, {"name": "PVDF概念", "change_pct": 1.94}, {"name": "碳基材料", "change_pct": 1.97}]}, {"code": "002232", "name": "启明信息", "hot_rank": 30, "hot_rank_chg": 74, "stock_cnt": 5844, "price": "15.53", "change": "-7.62", "market_id": "33", "circulate_market_value": "6344757500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 31, "hot_rank_chg": -21, "stock_cnt": 5844, "price": "19.50", "change": "3.12", "market_id": "17", "circulate_market_value": "40785072000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 32, "hot_rank_chg": 223, "stock_cnt": 5844, "price": "18.07", "change": "9.98", "market_id": "33", "circulate_market_value": "4460330100.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "氧化锆粉体"}, {"code": "002636", "name": "金安国纪", "hot_rank": 33, "hot_rank_chg": -18, "stock_cnt": 5844, "price": "81.77", "change": "-2.64", "market_id": "33", "circulate_market_value": "59302594000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 34, "hot_rank_chg": -18, "stock_cnt": 5844, "price": "41.35", "change": "0.73", "market_id": "17", "circulate_market_value": "28588382000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 35, "hot_rank_chg": -15, "stock_cnt": 5844, "price": "8.71", "change": "9.97", "market_id": "33", "circulate_market_value": "16680455000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "林业", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 2.75}, {"name": "林业", "change_pct": 4.98}, {"name": "碳中和", "change_pct": 0.38}, {"name": "自贸区", "change_pct": 0.95}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 36, "hot_rank_chg": -13, "stock_cnt": 5844, "price": "471.60", "change": "0.51", "market_id": "17", "circulate_market_value": "14189369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002846", "name": "英联股份", "hot_rank": 37, "hot_rank_chg": 283, "stock_cnt": 5844, "price": "12.75", "change": "10.01", "market_id": "33", "circulate_market_value": "3460245500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "固态电池", "xgb_concepts": [{"name": "锂电池", "change_pct": 1.04}, {"name": "包装印刷", "change_pct": 0.95}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "固态电池", "change_pct": 1.44}, {"name": "PET复合铜箔", "change_pct": 1.5}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 38, "hot_rank_chg": -13, "stock_cnt": 5844, "price": "12.89", "change": "1.82", "market_id": "17", "circulate_market_value": "23061993000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": -0.38}, {"name": "纯碱", "change_pct": -0.97}, {"name": "食品", "change_pct": 0.01}, {"name": "土壤修复", "change_pct": 0.95}, {"name": "东数西算/算力", "change_pct": 0.58}, {"name": "OpenClaw概念", "change_pct": -0.16}, {"name": "DeepSeek概念股", "change_pct": 0.05}]}, {"code": "600664", "name": "哈药股份", "hot_rank": 39, "hot_rank_chg": -3, "stock_cnt": 5844, "price": "7.44", "change": "4.49", "market_id": "17", "circulate_market_value": "18737713000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.65}, {"name": "工业大麻", "change_pct": 0.22}, {"name": "中药", "change_pct": -0.2}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "保健品", "change_pct": -0.26}, {"name": "民营医院", "change_pct": 0.19}, {"name": "医药", "change_pct": 0.12}, {"name": "化学原料药", "change_pct": 0.11}, {"name": "流感", "change_pct": 0.04}, {"name": "振兴东北", "change_pct": -0.04}, {"name": "食品", "change_pct": 0.01}]}, {"code": "600183", "name": "生益科技", "hot_rank": 40, "hot_rank_chg": -14, "stock_cnt": 5844, "price": "153.50", "change": "2.16", "market_id": "17", "circulate_market_value": "370203450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600792", "name": "云煤能源", "hot_rank": 41, "hot_rank_chg": 7, "stock_cnt": 5844, "price": "4.86", "change": "-8.13", "market_id": "17", "circulate_market_value": "5394228700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": -1.17}, {"name": "甲醇", "change_pct": -0.39}, {"name": "煤化工", "change_pct": -0.79}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 42, "hot_rank_chg": 4, "stock_cnt": 5844, "price": "15.98", "change": "1.07", "market_id": "17", "circulate_market_value": "10871508400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 43, "hot_rank_chg": 10, "stock_cnt": 5844, "price": "303.50", "change": "-4.07", "market_id": "33", "circulate_market_value": "1293092690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 44, "hot_rank_chg": -20, "stock_cnt": 5844, "price": "65.16", "change": "4.37", "market_id": "17", "circulate_market_value": "159879590000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 45, "hot_rank_chg": 2, "stock_cnt": 5844, "price": "51.63", "change": "9.99", "market_id": "17", "circulate_market_value": "43707549000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "存储芯片"}, {"code": "600088", "name": "中视传媒", "hot_rank": 46, "hot_rank_chg": 5, "stock_cnt": 5844, "price": "15.03", "change": "4.09", "market_id": "17", "circulate_market_value": "5977527200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 47, "hot_rank_chg": -18, "stock_cnt": 5844, "price": "61.76", "change": "-0.76", "market_id": "33", "circulate_market_value": "89765196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600354", "name": "敦煌种业", "hot_rank": 48, "hot_rank_chg": 60, "stock_cnt": 5844, "price": "9.09", "change": "2.37", "market_id": "17", "circulate_market_value": "4797720900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 0.98}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "棉花", "change_pct": 0.8}, {"name": "大农业", "change_pct": 0.26}, {"name": "供销社", "change_pct": 0.61}]}, {"code": "600865", "name": "百大集团", "hot_rank": 49, "hot_rank_chg": 50, "stock_cnt": 5844, "price": "10.26", "change": "-8.64", "market_id": "17", "circulate_market_value": "3860225600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 1.27}, {"name": "物业管理", "change_pct": 0.57}, {"name": "免税店概念", "change_pct": -0.43}, {"name": "地摊经济", "change_pct": 0.71}]}, {"code": "600396", "name": "华电辽能", "hot_rank": 50, "hot_rank_chg": -20, "stock_cnt": 5844, "price": "13.55", "change": "1.27", "market_id": "17", "circulate_market_value": "19955177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 51, "hot_rank_chg": -8, "stock_cnt": 5844, "price": "140.77", "change": "1.84", "market_id": "17", "circulate_market_value": "127338634000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 52, "hot_rank_chg": 27, "stock_cnt": 5844, "price": "14.22", "change": "9.98", "market_id": "17", "circulate_market_value": "4160459200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "转基因玉米"}, {"code": "300308", "name": "中际旭创", "hot_rank": 53, "hot_rank_chg": -19, "stock_cnt": 5844, "price": "896.01", "change": "3.74", "market_id": "33", "circulate_market_value": "994514650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002202", "name": "金风科技", "hot_rank": 54, "hot_rank_chg": -26, "stock_cnt": 5844, "price": "18.29", "change": "-2.82", "market_id": "33", "circulate_market_value": "61518508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 55, "hot_rank_chg": -14, "stock_cnt": 5844, "price": "474.01", "change": "2.60", "market_id": "17", "circulate_market_value": "192608420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 56, "hot_rank_chg": -29, "stock_cnt": 5844, "price": "35.25", "change": "2.06", "market_id": "17", "circulate_market_value": "120306475000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 57, "hot_rank_chg": -22, "stock_cnt": 5844, "price": "16.58", "change": "1.28", "market_id": "33", "circulate_market_value": "55145520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002669", "name": "康达新材", "hot_rank": 58, "hot_rank_chg": 22, "stock_cnt": 5844, "price": "14.16", "change": "-1.53", "market_id": "33", "circulate_market_value": "4286484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002141", "name": "贤丰控股", "hot_rank": 59, "hot_rank_chg": 11, "stock_cnt": 5844, "price": "6.52", "change": "-1.66", "market_id": "33", "circulate_market_value": "6734741400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.4}, {"name": "锂电池", "change_pct": 1.04}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "铜箔/覆铜板", "change_pct": 0.68}, {"name": "粤港澳大湾区", "change_pct": 0.47}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 1.29}]}, {"code": "603090", "name": "宏盛股份", "hot_rank": 60, "hot_rank_chg": 120, "stock_cnt": 5844, "price": "39.46", "change": "-1.86", "market_id": "17", "circulate_market_value": "3946000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 61, "hot_rank_chg": 41, "stock_cnt": 5844, "price": "226.06", "change": "4.46", "market_id": "17", "circulate_market_value": "62299508000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600410", "name": "华胜天成", "hot_rank": 62, "hot_rank_chg": -23, "stock_cnt": 5844, "price": "15.82", "change": "0.77", "market_id": "17", "circulate_market_value": "17346546000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 63, "hot_rank_chg": -25, "stock_cnt": 5844, "price": "41.29", "change": "1.05", "market_id": "33", "circulate_market_value": "62675270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002362", "name": "汉王科技", "hot_rank": 64, "hot_rank_chg": 146, "stock_cnt": 5844, "price": "16.93", "change": "-3.26", "market_id": "33", "circulate_market_value": "3515898300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600359", "name": "新农开发", "hot_rank": 65, "hot_rank_chg": 180, "stock_cnt": 5844, "price": "7.87", "change": "-0.13", "market_id": "17", "circulate_market_value": "3002505900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 0.98}, {"name": "新疆国企改革", "change_pct": 0.46}, {"name": "农垦", "change_pct": 0.69}, {"name": "棉花", "change_pct": 0.8}, {"name": "新疆概念", "change_pct": 0.45}, {"name": "大农业", "change_pct": 0.26}, {"name": "国企改革", "change_pct": 0.09}, {"name": "新冠病毒防治", "change_pct": 0.34}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 66, "hot_rank_chg": 109, "stock_cnt": 5844, "price": "24.72", "change": "-1.16", "market_id": "17", "circulate_market_value": "9912720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 67, "hot_rank_chg": -6, "stock_cnt": 5844, "price": "19.37", "change": "2.98", "market_id": "17", "circulate_market_value": "21967101000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003001", "name": "中岩大地", "hot_rank": 68, "hot_rank_chg": 521, "stock_cnt": 5844, "price": "18.47", "change": "10.01", "market_id": "33", "circulate_market_value": "2112063000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB刀具"}, {"code": "600105", "name": "永鼎股份", "hot_rank": 69, "hot_rank_chg": -29, "stock_cnt": 5844, "price": "45.22", "change": "10.00", "market_id": "17", "circulate_market_value": "66111405000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "605058", "name": "澳弘电子", "hot_rank": 70, "hot_rank_chg": -6, "stock_cnt": 5844, "price": "44.33", "change": "10.00", "market_id": "17", "circulate_market_value": "6335870600.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "印制电路板"}, {"code": "603200", "name": "上海洗霸", "hot_rank": 71, "hot_rank_chg": 105, "stock_cnt": 5844, "price": "41.94", "change": "5.35", "market_id": "17", "circulate_market_value": "7359635500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 72, "hot_rank_chg": -22, "stock_cnt": 5844, "price": "31.41", "change": "-1.23", "market_id": "33", "circulate_market_value": "44111982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 73, "hot_rank_chg": -28, "stock_cnt": 5844, "price": "54.87", "change": "1.14", "market_id": "17", "circulate_market_value": "247081750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002522", "name": "浙江众成", "hot_rank": 74, "hot_rank_chg": 79, "stock_cnt": 5844, "price": "6.00", "change": "3.27", "market_id": "33", "circulate_market_value": "5431258500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "5G", "change_pct": 1.95}, {"name": "包装印刷", "change_pct": 0.95}, {"name": "湖南国企改革", "change_pct": 0.18}, {"name": "国企改革", "change_pct": 0.09}, {"name": "光纤概念", "change_pct": 3.72}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 75, "hot_rank_chg": -43, "stock_cnt": 5844, "price": "367.07", "change": "1.08", "market_id": "17", "circulate_market_value": "246200580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002842", "name": "翔鹭钨业", "hot_rank": 76, "hot_rank_chg": -27, "stock_cnt": 5844, "price": "35.54", "change": "-2.90", "market_id": "33", "circulate_market_value": "9541141600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603938", "name": "三孚股份", "hot_rank": 77, "hot_rank_chg": -33, "stock_cnt": 5844, "price": "53.11", "change": "-0.09", "market_id": "17", "circulate_market_value": "20321187000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603248", "name": "锡华科技", "hot_rank": 78, "hot_rank_chg": 341, "stock_cnt": 5844, "price": "20.31", "change": "10.02", "market_id": "17", "circulate_market_value": "1452265600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "风电齿轮箱"}, {"code": "001896", "name": "豫能控股", "hot_rank": 79, "hot_rank_chg": -23, "stock_cnt": 5844, "price": "12.35", "change": "-1.20", "market_id": "33", "circulate_market_value": "18843399000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.44}, {"name": "电力体制改革", "change_pct": 0.26}, {"name": "充电桩", "change_pct": 0.7}, {"name": "云计算数据中心", "change_pct": 0.94}, {"name": "火电", "change_pct": -0.34}, {"name": "光伏", "change_pct": 0.92}, {"name": "风电", "change_pct": -0.07}, {"name": "地热", "change_pct": 0.47}, {"name": "新能源汽车", "change_pct": 0.66}, {"name": "储能", "change_pct": 0.62}, {"name": "碳中和", "change_pct": 0.38}, {"name": "超超临界发电", "change_pct": -0.31}, {"name": "国企改革", "change_pct": 0.09}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "河南国企改革", "change_pct": 0.49}]}, {"code": "603228", "name": "景旺电子", "hot_rank": 80, "hot_rank_chg": 48, "stock_cnt": 5844, "price": "105.19", "change": "0.59", "market_id": "17", "circulate_market_value": "103297700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 81, "hot_rank_chg": -21, "stock_cnt": 5844, "price": "108.68", "change": "0.42", "market_id": "17", "circulate_market_value": "39203419000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 82, "hot_rank_chg": -23, "stock_cnt": 5844, "price": "5.31", "change": "0.57", "market_id": "33", "circulate_market_value": "187799480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 1.46}, {"name": "手机产业链", "change_pct": 1.54}, {"name": "超高清视频", "change_pct": 0.94}, {"name": "苹果产业链", "change_pct": 1.83}, {"name": "电竞", "change_pct": 0.09}, {"name": "半导体", "change_pct": 2.84}, {"name": "人工智能", "change_pct": 0.44}, {"name": "互联网医疗", "change_pct": 0.05}, {"name": "VR&AR", "change_pct": 1.49}, {"name": "OLED", "change_pct": 1.57}, {"name": "京津冀", "change_pct": 0.24}, {"name": "物联网", "change_pct": 0.65}, {"name": "指纹识别", "change_pct": 1.18}, {"name": "汽车零部件", "change_pct": 0.29}, {"name": "白马股", "change_pct": -0.76}, {"name": "智能制造", "change_pct": 0.64}, {"name": "小米概念股", "change_pct": 1.31}, {"name": "国产芯片", "change_pct": 2.36}, {"name": "液晶面板/LCD", "change_pct": 1.49}, {"name": "全息概念", "change_pct": 1.15}, {"name": "理想汽车概念股", "change_pct": 0.38}, {"name": "MicroLED", "change_pct": 1.85}, {"name": "钙钛矿电池", "change_pct": 1.35}, {"name": "智能手表", "change_pct": 1.58}, {"name": "MiniLED", "change_pct": 1.72}, {"name": "传感器", "change_pct": 1.29}, {"name": "大硅片", "change_pct": 5.95}, {"name": "AI PC", "change_pct": 1.61}, {"name": "华为产业链", "change_pct": 0.87}, {"name": "回购", "change_pct": 0.05}, {"name": "光电共封装CPO", "change_pct": 4.17}, {"name": "智能眼镜/MR头显", "change_pct": 1.72}, {"name": "玻璃基板封装", "change_pct": 1.94}]}, {"code": "605006", "name": "山东玻纤", "hot_rank": 83, "hot_rank_chg": -25, "stock_cnt": 5844, "price": "16.48", "change": "-3.06", "market_id": "17", "circulate_market_value": "10771349500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600108", "name": "亚盛集团", "hot_rank": 84, "hot_rank_chg": 7, "stock_cnt": 5844, "price": "4.01", "change": "2.04", "market_id": "17", "circulate_market_value": "7807129600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.65}, {"name": "农业种植", "change_pct": 0.98}, {"name": "强势人气股", "change_pct": 1.27}, {"name": "土地流转", "change_pct": 0.64}, {"name": "农垦", "change_pct": 0.76}, {"name": "乡村振兴", "change_pct": 0.87}, {"name": "食品", "change_pct": -0.01}, {"name": "甜味剂/代糖", "change_pct": 0.55}, {"name": "大农业", "change_pct": 0.25}, {"name": "蜜雪冰城概念股", "change_pct": 0.62}]}, {"code": "002297", "name": "博云新材", "hot_rank": 85, "hot_rank_chg": -17, "stock_cnt": 5844, "price": "22.22", "change": "-0.49", "market_id": "33", "circulate_market_value": "12734389100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003026", "name": "中晶科技", "hot_rank": 86, "hot_rank_chg": 109, "stock_cnt": 5844, "price": "33.64", "change": "10.01", "market_id": "33", "circulate_market_value": "4849572000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体硅片"}, {"code": "002384", "name": "东山精密", "hot_rank": 87, "hot_rank_chg": -32, "stock_cnt": 5844, "price": "190.73", "change": "4.33", "market_id": "33", "circulate_market_value": "264413140000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 88, "hot_rank_chg": -16, "stock_cnt": 5844, "price": "68.34", "change": "2.60", "market_id": "33", "circulate_market_value": "58299008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601872", "name": "招商轮船", "hot_rank": 89, "hot_rank_chg": 18, "stock_cnt": 5844, "price": "19.78", "change": "-3.56", "market_id": "17", "circulate_market_value": "159714370000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000523", "name": "红棉股份", "hot_rank": 90, "hot_rank_chg": 27, "stock_cnt": 5844, "price": "3.27", "change": "0.61", "market_id": "33", "circulate_market_value": "5869055000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "啤酒", "change_pct": -0.4}, {"name": "调味品", "change_pct": -0.37}, {"name": "粤港澳大湾区", "change_pct": 0.46}, {"name": "白糖", "change_pct": 0.16}, {"name": "食品", "change_pct": -0.01}, {"name": "甜味剂/代糖", "change_pct": 0.55}, {"name": "物业管理", "change_pct": 0.55}, {"name": "国企改革", "change_pct": 0.07}, {"name": "饮料", "change_pct": -0.06}]}, {"code": "002213", "name": "大为股份", "hot_rank": 91, "hot_rank_chg": 29, "stock_cnt": 5844, "price": "29.56", "change": "0.20", "market_id": "33", "circulate_market_value": "6110581100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002059", "name": "云南旅游", "hot_rank": 92, "hot_rank_chg": -3, "stock_cnt": 5844, "price": "4.41", "change": "-4.13", "market_id": "33", "circulate_market_value": "4367634200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.04}, {"name": "旅游", "change_pct": -0.67}, {"name": "虚拟数字人", "change_pct": 0.83}, {"name": "国企改革", "change_pct": 0.07}]}, {"code": "002560", "name": "通达股份", "hot_rank": 93, "hot_rank_chg": -26, "stock_cnt": 5844, "price": "7.42", "change": "-4.02", "market_id": "33", "circulate_market_value": "4699427200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.42}, {"name": "医疗器械", "change_pct": 0.38}, {"name": "通用航空", "change_pct": -0.04}, {"name": "一带一路", "change_pct": 0.12}, {"name": "充电桩", "change_pct": 0.67}, {"name": "云计算数据中心", "change_pct": 0.9}, {"name": "大飞机", "change_pct": 0.33}, {"name": "军民融合", "change_pct": 0.88}, {"name": "光伏", "change_pct": 0.86}, {"name": "有色金属", "change_pct": 0.92}, {"name": "军工", "change_pct": 0.7}, {"name": "新能源汽车", "change_pct": 0.62}, {"name": "特高压", "change_pct": 0.8}, {"name": "呼吸机", "change_pct": 0.66}, {"name": "智能电网", "change_pct": 0.49}]}, {"code": "600163", "name": "中闽能源", "hot_rank": 94, "hot_rank_chg": 0, "stock_cnt": 5844, "price": "6.27", "change": "-0.32", "market_id": "17", "circulate_market_value": "11931785800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电力体制改革", "change_pct": 0.25}, {"name": "充电桩", "change_pct": 0.67}, {"name": "风电", "change_pct": -0.11}, {"name": "新能源汽车", "change_pct": 0.62}]}, {"code": "002407", "name": "多氟多", "hot_rank": 95, "hot_rank_chg": -29, "stock_cnt": 5844, "price": "32.85", "change": "1.92", "market_id": "33", "circulate_market_value": "35508166000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 96, "hot_rank_chg": -27, "stock_cnt": 5844, "price": "55.60", "change": "2.58", "market_id": "33", "circulate_market_value": "20488783000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 97, "hot_rank_chg": -23, "stock_cnt": 5844, "price": "22.74", "change": "4.89", "market_id": "33", "circulate_market_value": "17672119000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600488", "name": "津药药业", "hot_rank": 98, "hot_rank_chg": -35, "stock_cnt": 5844, "price": "6.02", "change": "-1.31", "market_id": "17", "circulate_market_value": "6573157800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "医药", "change_pct": 0.14}, {"name": "化学原料药", "change_pct": 0.13}, {"name": "数字经济", "change_pct": 0.11}, {"name": "辅助生殖", "change_pct": 0.32}, {"name": "新冠病毒防治", "change_pct": 0.34}]}, {"code": "600737", "name": "中粮糖业", "hot_rank": 99, "hot_rank_chg": 34, "stock_cnt": 5844, "price": "14.24", "change": "-0.97", "market_id": "17", "circulate_market_value": "30457199000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301520", "name": "万邦医药", "hot_rank": 100, "hot_rank_chg": 38, "stock_cnt": 5844, "price": "69.98", "change": "3.19", "market_id": "33", "circulate_market_value": "2288237000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};