const UPDATE_TIME = "2026-08-28 08:40";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -1.09,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续110天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "粮食概念",
    "rise": 2.92,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.14,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续280天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -0.61,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续103天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "黄金概念",
    "rise": 1.46,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续18天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI应用",
    "rise": 0.37,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "MLCC概念",
    "rise": -0.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "鹏华创新动力LOF",
    "code": "886112"
  },
  {
    "name": "转基因",
    "rise": 2.93,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "农牧渔ETF",
    "code": "885877"
  },
  {
    "name": "存储芯片",
    "rise": -1.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续233天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "英伟达概念",
    "rise": -0.5,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "智能汽车ETF",
    "code": "886048"
  },
  {
    "name": "液冷服务器",
    "rise": -0.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "光纤概念",
    "rise": -1.06,
    "rate": 0,
    "tag": "",
    "hotTag": "连续109天上榜",
    "rankChg": -1,
    "etfName": "消费电子ETF",
    "code": "886084"
  },
  {
    "name": "算力租赁",
    "rise": -0.09,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续144天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "农业种植",
    "rise": 2.24,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "885812"
  },
  {
    "name": "供销社",
    "rise": 3.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "农业ETF",
    "code": "886016"
  },
  {
    "name": "化肥",
    "rise": 3.02,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885967"
  },
  {
    "name": "氟化工概念",
    "rise": 0.74,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885551"
  },
  {
    "name": "商业航天",
    "rise": -0.12,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续209天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "PEEK材料",
    "rise": 1.48,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886063"
  },
  {
    "name": "环氧丙烷",
    "rise": 2.53,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885903"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金一度失守4590美元！两名美联储官员释放鹰派信号，市场聚焦主席沃什发言",
    "desc": "",
    "heat": 530365,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "福达合金",
        "code": "603045",
        "chg": 9.994693
      }
    ]
  },
  {
    "title": "“超强厄尔尼诺”“粮食概念”引关注！",
    "desc": "",
    "heat": 413666,
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
        "name": "黑芝麻",
        "code": "000716",
        "chg": 10.097087
      }
    ]
  },
  {
    "title": "两部门印发文件：进一步加强知识产权数据资源开发利用",
    "desc": "",
    "heat": 148166,
    "direction": "数据要素",
    "themes": [
      "数据要素",
      "数据安全"
    ],
    "stocks": [
      {
        "name": "麒麟信安",
        "code": "688152",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "PTFE成英伟达Rubin Ultra正交背板主力选材",
    "desc": "",
    "heat": 148090,
    "direction": "PTFE材料",
    "themes": [
      "PTFE材料"
    ],
    "stocks": [
      {
        "name": "昊华科技",
        "code": "600378",
        "chg": 10.008254
      }
    ]
  },
  {
    "title": "116 家公司发联名信，呼吁高度重视 AI 时代的网络安全",
    "desc": "",
    "heat": 125466,
    "direction": "网络安全",
    "themes": [
      "网络安全"
    ],
    "stocks": [
      {
        "name": "麒麟信安",
        "code": "688152",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "消息称铠侠-闪迪计划建设北上市第三晶圆厂  项目投资额超 1 万亿日元",
    "desc": "",
    "heat": 79106,
    "direction": "存储芯片",
    "themes": [
      "存储芯片"
    ],
    "stocks": [
      {
        "name": "麦捷科技",
        "code": "300319",
        "chg": 10.110585
      }
    ]
  },
  {
    "title": "三星电机已调涨MLCC Q4报价，上调消费级X5R产品价格25%-30%",
    "desc": "",
    "heat": 68060,
    "direction": "MLCC",
    "themes": [
      "MLCC概念"
    ],
    "stocks": [
      {
        "name": "深圳华强",
        "code": "000062",
        "chg": 10.004427
      }
    ]
  },
  {
    "title": "氩气现货单日上涨6.45%至2475元/吨！",
    "desc": "",
    "heat": 3711,
    "direction": "氩气",
    "themes": [
      "氩气"
    ],
    "stocks": [
      {
        "name": "杭氧股份",
        "code": "002430",
        "chg": 5.922921
      }
    ]
  },
  {
    "title": "央视财经：国产算力芯片爆单 可能排期会排到一年之后",
    "desc": "",
    "heat": 1690,
    "direction": "国产算力芯片",
    "themes": [
      "TPU",
      "CPU",
      "GPU"
    ],
    "stocks": [
      {
        "name": "科德教育",
        "code": "300192",
        "chg": 1.935484
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "棉花",
    "change": "+5.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+3.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "醋酸",
    "change": "+3.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "甲醇",
    "change": "+3.83%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "制冷剂",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+3.46%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业",
    "change": "+3.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.26%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "化肥",
    "change": "+3.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 锑",
    "change": "+3.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+3.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "乙二醇",
    "change": "+3.01%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "PTA",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "丁辛醇",
    "change": "+2.96%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "纯碱",
    "change": "+2.94%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "供销社",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+2.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+2.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 3,
    "hot_rank_chg": 8,
    "stock_cnt": 5799,
    "price": "12.40",
    "change": "6.80",
    "market_id": "17",
    "circulate_market_value": "5943567700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "医药商业",
        "change_pct": -0.08
      },
      {
        "name": "医药",
        "change_pct": -0.81
      },
      {
        "name": "流感",
        "change_pct": -0.27
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 5,
    "hot_rank_chg": 3,
    "stock_cnt": 5799,
    "price": "9.00",
    "change": "2.86",
    "market_id": "17",
    "circulate_market_value": "22666589000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.95
      },
      {
        "name": "密集调研",
        "change_pct": -0.01
      },
      {
        "name": "工业大麻",
        "change_pct": 0.49
      },
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "保健品",
        "change_pct": -0.4
      },
      {
        "name": "民营医院",
        "change_pct": -0.37
      },
      {
        "name": "医药",
        "change_pct": -0.81
      },
      {
        "name": "化学原料药",
        "change_pct": -0.69
      },
      {
        "name": "流感",
        "change_pct": -0.27
      },
      {
        "name": "振兴东北",
        "change_pct": 0.55
      },
      {
        "name": "食品",
        "change_pct": 0.98
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 6,
    "hot_rank_chg": 17,
    "stock_cnt": 5799,
    "price": "4.90",
    "change": "-0.20",
    "market_id": "33",
    "circulate_market_value": "5568360000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": -0.4
      },
      {
        "name": "锂电池",
        "change_pct": -0.13
      },
      {
        "name": "石墨烯",
        "change_pct": 0.76
      },
      {
        "name": "新能源整车",
        "change_pct": 0.61
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.4
      },
      {
        "name": "汽车整车",
        "change_pct": 0.72
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.24
      },
      {
        "name": "白色家电",
        "change_pct": 0.33
      },
      {
        "name": "家电",
        "change_pct": 0.16
      },
      {
        "name": "汽车热管理",
        "change_pct": -0.67
      },
      {
        "name": "热泵",
        "change_pct": -0.21
      },
      {
        "name": "轮边电机",
        "change_pct": 0.12
      },
      {
        "name": "超级电容",
        "change_pct": -0.54
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 8,
    "hot_rank_chg": -1,
    "stock_cnt": 5799,
    "price": "11.77",
    "change": "9.18",
    "market_id": "17",
    "circulate_market_value": "7553788500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.77
      },
      {
        "name": "农业种植",
        "change_pct": 3.5
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.41
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.53
      },
      {
        "name": "休闲食品",
        "change_pct": 1.5
      },
      {
        "name": "食品",
        "change_pct": 0.98
      },
      {
        "name": "食品安全",
        "change_pct": 0.07
      },
      {
        "name": "社区团购",
        "change_pct": 1.87
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "预制菜",
        "change_pct": 1.62
      },
      {
        "name": "人造肉",
        "change_pct": 1.79
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 9,
    "hot_rank_chg": 147,
    "stock_cnt": 5799,
    "price": "7.85",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "12771901200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI营销",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.95
      },
      {
        "name": "电竞",
        "change_pct": 0.29
      },
      {
        "name": "手游",
        "change_pct": 0.33
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "游戏",
        "change_pct": 0.24
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "快手概念股",
        "change_pct": 0.59
      },
      {
        "name": "元宇宙",
        "change_pct": 0.27
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.27
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.11
      },
      {
        "name": "web3.0",
        "change_pct": 0.4
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.54
      },
      {
        "name": "数据要素",
        "change_pct": 0.38
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.52
      },
      {
        "name": "AI营销",
        "change_pct": 1.21
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.06
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.5
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.25
      },
      {
        "name": "人形机器人",
        "change_pct": -0.91
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.25
      },
      {
        "name": "多模态",
        "change_pct": 0.13
      },
      {
        "name": "AI视频",
        "change_pct": 0.39
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.78
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.59
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 10,
    "hot_rank_chg": 0,
    "stock_cnt": 5799,
    "price": "3.85",
    "change": "0.79",
    "market_id": "17",
    "circulate_market_value": "8517466800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.82
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.4
      },
      {
        "name": "光通信",
        "change_pct": -1.16
      },
      {
        "name": "林业",
        "change_pct": 3.39
      },
      {
        "name": "军民融合",
        "change_pct": 0.02
      },
      {
        "name": "军工",
        "change_pct": 0.11
      },
      {
        "name": "人造肉",
        "change_pct": 1.79
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 16,
    "hot_rank_chg": 8,
    "stock_cnt": 5799,
    "price": "11.45",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "5047411300.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "7",
    "change_reason": "黄金珠宝",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 1.37
      },
      {
        "name": "锂电池",
        "change_pct": -0.13
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.24
      },
      {
        "name": "两轮车",
        "change_pct": -0.36
      },
      {
        "name": "珠宝饰品",
        "change_pct": 2.3
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 20,
    "hot_rank_chg": 156,
    "stock_cnt": 5799,
    "price": "8.37",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "6091396400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "环氧丙烷",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.51
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.05
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "环氧丙烷",
        "change_pct": 2.52
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.53
      },
      {
        "name": "建筑节能",
        "change_pct": 1.19
      },
      {
        "name": "旧改",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 29,
    "hot_rank_chg": 28,
    "stock_cnt": 5799,
    "price": "11.94",
    "change": "2.14",
    "market_id": "17",
    "circulate_market_value": "21362311000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "调味品",
        "change_pct": 1.93
      },
      {
        "name": "纯碱",
        "change_pct": 2.94
      },
      {
        "name": "食品",
        "change_pct": 0.98
      },
      {
        "name": "土壤修复",
        "change_pct": 0.61
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.11
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.03
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "601360",
    "name": "三六零",
    "hot_rank": 35,
    "hot_rank_chg": 356,
    "stock_cnt": 5799,
    "price": "9.30",
    "change": "6.65",
    "market_id": "17",
    "circulate_market_value": "65095888000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.23
      },
      {
        "name": "国产软件",
        "change_pct": 0.41
      },
      {
        "name": "手游",
        "change_pct": 0.33
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "网络安全",
        "change_pct": 0.27
      },
      {
        "name": "物联网",
        "change_pct": -0.27
      },
      {
        "name": "大数据",
        "change_pct": 0.19
      },
      {
        "name": "智慧城市",
        "change_pct": 0.07
      },
      {
        "name": "智慧安防",
        "change_pct": 0.42
      },
      {
        "name": "国产操作系统",
        "change_pct": 0.92
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.11
      },
      {
        "name": "华为海思",
        "change_pct": -0.14
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.47
      },
      {
        "name": "AI营销",
        "change_pct": 1.21
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.25
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.06
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.25
      },
      {
        "name": "多模态",
        "change_pct": 0.13
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.51
      },
      {
        "name": "区块链",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 36,
    "hot_rank_chg": -3,
    "stock_cnt": 5799,
    "price": "5.60",
    "change": "-1.58",
    "market_id": "33",
    "circulate_market_value": "14854283000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.4
      },
      {
        "name": "装修装饰",
        "change_pct": 0.95
      },
      {
        "name": "装配式建筑",
        "change_pct": 1.05
      },
      {
        "name": "航天",
        "change_pct": -0.23
      },
      {
        "name": "旧改",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 39,
    "hot_rank_chg": -12,
    "stock_cnt": 5799,
    "price": "5.92",
    "change": "-0.34",
    "market_id": "33",
    "circulate_market_value": "209373430000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.17
      },
      {
        "name": "手机产业链",
        "change_pct": -0.69
      },
      {
        "name": "超高清视频",
        "change_pct": -0.22
      },
      {
        "name": "苹果产业链",
        "change_pct": -1.1
      },
      {
        "name": "电竞",
        "change_pct": 0.29
      },
      {
        "name": "半导体",
        "change_pct": -1.46
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.15
      },
      {
        "name": "VR&AR",
        "change_pct": -0.36
      },
      {
        "name": "OLED",
        "change_pct": -0.39
      },
      {
        "name": "京津冀",
        "change_pct": 0.54
      },
      {
        "name": "物联网",
        "change_pct": -0.27
      },
      {
        "name": "指纹识别",
        "change_pct": -1.29
      },
      {
        "name": "汽车零部件",
        "change_pct": -0.27
      },
      {
        "name": "白马股",
        "change_pct": 0.14
      },
      {
        "name": "智能制造",
        "change_pct": -0.27
      },
      {
        "name": "小米概念股",
        "change_pct": -0.54
      },
      {
        "name": "国产芯片",
        "change_pct": -1.01
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.52
      },
      {
        "name": "全息概念",
        "change_pct": -0.21
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.75
      },
      {
        "name": "MicroLED",
        "change_pct": -0.78
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.46
      },
      {
        "name": "智能手表",
        "change_pct": -1.01
      },
      {
        "name": "MiniLED",
        "change_pct": -0.63
      },
      {
        "name": "传感器",
        "change_pct": -0.53
      },
      {
        "name": "大硅片",
        "change_pct": -2.42
      },
      {
        "name": "AI PC",
        "change_pct": -0.73
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "回购",
        "change_pct": 0.06
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.34
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.5
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 44,
    "hot_rank_chg": 54,
    "stock_cnt": 5799,
    "price": "5.36",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "17518828000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "中报减亏",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": 1.33
      },
      {
        "name": "养老产业",
        "change_pct": 0.34
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.32
      },
      {
        "name": "民营医院",
        "change_pct": -0.37
      },
      {
        "name": "地摊经济",
        "change_pct": 1.06
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 56,
    "hot_rank_chg": 60,
    "stock_cnt": 5799,
    "price": "4.60",
    "change": "0.22",
    "market_id": "33",
    "circulate_market_value": "26932066000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.14
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.4
      },
      {
        "name": "水利",
        "change_pct": 0.49
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.39
      },
      {
        "name": "大数据",
        "change_pct": 0.19
      },
      {
        "name": "园林",
        "change_pct": 0.17
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.54
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -0.75
      },
      {
        "name": "第三代半导体",
        "change_pct": -1.69
      },
      {
        "name": "快手概念股",
        "change_pct": 0.59
      },
      {
        "name": "IGBT",
        "change_pct": -0.59
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.27
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.54
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.52
      },
      {
        "name": "氮化镓",
        "change_pct": -1.38
      },
      {
        "name": "AI营销",
        "change_pct": 1.21
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.25
      },
      {
        "name": "多模态",
        "change_pct": 0.13
      },
      {
        "name": "液冷服务器",
        "change_pct": -1.32
      },
      {
        "name": "小红书概念股",
        "change_pct": 0.59
      },
      {
        "name": "区块链",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 57,
    "hot_rank_chg": 3,
    "stock_cnt": 5799,
    "price": "11.80",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "10569662700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "证券业务",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.11
      },
      {
        "name": "期货概念",
        "change_pct": -0.69
      },
      {
        "name": "券商",
        "change_pct": -0.0
      },
      {
        "name": "大金融",
        "change_pct": -0.46
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 61,
    "hot_rank_chg": 53,
    "stock_cnt": 5799,
    "price": "10.44",
    "change": "-0.10",
    "market_id": "33",
    "circulate_market_value": "2969988000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.96
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.32
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "教育",
        "change_pct": 0.82
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.32
      },
      {
        "name": "职业教育",
        "change_pct": 0.89
      },
      {
        "name": "在线教育",
        "change_pct": 0.44
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.47
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "智谱AI",
        "change_pct": 0.19
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 63,
    "hot_rank_chg": 65,
    "stock_cnt": 5799,
    "price": "11.02",
    "change": "1.38",
    "market_id": "17",
    "circulate_market_value": "4768063600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.11
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "光伏",
        "change_pct": 0.3
      },
      {
        "name": "无线耳机",
        "change_pct": -0.38
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "光伏胶膜",
        "change_pct": 1.47
      }
    ]
  },
  {
    "code": "000890",
    "name": "法尔胜",
    "hot_rank": 65,
    "hot_rank_chg": 9,
    "stock_cnt": 5799,
    "price": "8.60",
    "change": "-2.05",
    "market_id": "33",
    "circulate_market_value": "3607623000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.07
      },
      {
        "name": "股权转让",
        "change_pct": 0.11
      },
      {
        "name": "光通信",
        "change_pct": -1.16
      },
      {
        "name": "固废处理",
        "change_pct": 0.42
      },
      {
        "name": "环保",
        "change_pct": 0.38
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "光纤概念",
        "change_pct": -1.08
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 67,
    "hot_rank_chg": -20,
    "stock_cnt": 5799,
    "price": "11.65",
    "change": "0.43",
    "market_id": "33",
    "circulate_market_value": "27056842000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "黄金",
        "change_pct": 1.2
      },
      {
        "name": "有色 · 铜",
        "change_pct": 0.46
      },
      {
        "name": "有色 · 锑",
        "change_pct": 3.11
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.41
      },
      {
        "name": "有色 · 锌",
        "change_pct": 1.67
      },
      {
        "name": "有色金属",
        "change_pct": 0.72
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "白银",
        "change_pct": 2.29
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 68,
    "hot_rank_chg": -27,
    "stock_cnt": 5799,
    "price": "4.86",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "10219006900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "创新药",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -0.01
      },
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "维生素",
        "change_pct": -0.12
      },
      {
        "name": "基因测序",
        "change_pct": -1.13
      },
      {
        "name": "民营医院",
        "change_pct": -0.37
      },
      {
        "name": "医药",
        "change_pct": -0.81
      },
      {
        "name": "化学原料药",
        "change_pct": -0.69
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.02
      }
    ]
  },
  {
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 69,
    "hot_rank_chg": -14,
    "stock_cnt": 5799,
    "price": "11.54",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3376350100.00",
    "change_type": "1",
    "change_section": "9",
    "change_days": "6",
    "change_reason": "转基因玉米",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.5
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "转基因",
        "change_pct": 3.26
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.53
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "002742",
    "name": "冀衡医药",
    "hot_rank": 70,
    "hot_rank_chg": 22,
    "stock_cnt": 5799,
    "price": "6.24",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "3269267800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "医药制造",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.65
      },
      {
        "name": "ST摘帽",
        "change_pct": 0.32
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
      },
      {
        "name": "医药",
        "change_pct": -0.81
      },
      {
        "name": "化学原料药",
        "change_pct": -0.69
      },
      {
        "name": "幽门螺杆菌概念",
        "change_pct": 0.43
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 0.17
      },
      {
        "name": "减肥药",
        "change_pct": -1.55
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 73,
    "hot_rank_chg": -15,
    "stock_cnt": 5799,
    "price": "7.01",
    "change": "2.94",
    "market_id": "33",
    "circulate_market_value": "13424798000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.59
      },
      {
        "name": "林业",
        "change_pct": 3.39
      },
      {
        "name": "碳中和",
        "change_pct": 0.7
      },
      {
        "name": "自贸区",
        "change_pct": 1.13
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 74,
    "hot_rank_chg": -23,
    "stock_cnt": 5799,
    "price": "10.94",
    "change": "-5.69",
    "market_id": "17",
    "circulate_market_value": "18982879000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.37
      },
      {
        "name": "核电",
        "change_pct": -0.06
      },
      {
        "name": "锂电池",
        "change_pct": -0.13
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -0.45
      },
      {
        "name": "PCB板",
        "change_pct": -1.25
      },
      {
        "name": "中科院系",
        "change_pct": -0.07
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.24
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.64
      },
      {
        "name": "固态电池",
        "change_pct": 0.01
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.19
      }
    ]
  },
  {
    "code": "600095",
    "name": "湘财股份",
    "hot_rank": 77,
    "hot_rank_chg": -4,
    "stock_cnt": 5799,
    "price": "9.55",
    "change": "0.10",
    "market_id": "17",
    "circulate_market_value": "27305243000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 0.07
      },
      {
        "name": "券商",
        "change_pct": -0.0
      },
      {
        "name": "金融科技",
        "change_pct": -0.46
      },
      {
        "name": "大金融",
        "change_pct": -0.46
      },
      {
        "name": "人造肉",
        "change_pct": 1.79
      }
    ]
  },
  {
    "code": "002212",
    "name": "天融信",
    "hot_rank": 78,
    "hot_rank_chg": 535,
    "stock_cnt": 5799,
    "price": "6.93",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8086228500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI安全",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 0.23
      },
      {
        "name": "国产软件",
        "change_pct": 0.41
      },
      {
        "name": "一带一路",
        "change_pct": 0.65
      },
      {
        "name": "量子通信",
        "change_pct": 0.63
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "网络安全",
        "change_pct": 0.27
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.4
      },
      {
        "name": "物联网",
        "change_pct": -0.27
      },
      {
        "name": "大数据",
        "change_pct": 0.19
      },
      {
        "name": "破净股",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "国产芯片",
        "change_pct": -1.01
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.32
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.15
      },
      {
        "name": "信创",
        "change_pct": 0.37
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.27
      },
      {
        "name": "跨境支付",
        "change_pct": -0.55
      },
      {
        "name": "web3.0",
        "change_pct": 0.4
      },
      {
        "name": "数字人民币",
        "change_pct": -0.31
      },
      {
        "name": "智慧政务",
        "change_pct": 0.43
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.47
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.98
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.58
      },
      {
        "name": "智慧灯杆",
        "change_pct": 0.3
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "回购",
        "change_pct": 0.06
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.25
      },
      {
        "name": "智能电网",
        "change_pct": -0.03
      },
      {
        "name": "低空经济",
        "change_pct": -0.05
      },
      {
        "name": "量子计算",
        "change_pct": 1.27
      },
      {
        "name": "财税改革",
        "change_pct": 1.88
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.51
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 98,
    "hot_rank_chg": 74,
    "stock_cnt": 5799,
    "price": "9.43",
    "change": "4.43",
    "market_id": "17",
    "circulate_market_value": "6683292800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "603618", "name": "杭电股份", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5799, "price": "35.92", "change": "2.31", "market_id": "17", "circulate_market_value": "24834212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "68.70", "change": "-3.65", "market_id": "17", "circulate_market_value": "168565500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 3, "hot_rank_chg": 8, "stock_cnt": 5799, "price": "12.40", "change": "6.80", "market_id": "17", "circulate_market_value": "5943567700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药商业", "change_pct": -0.08}, {"name": "医药", "change_pct": -0.81}, {"name": "流感", "change_pct": -0.27}]}, {"code": "000636", "name": "风华高科", "hot_rank": 4, "hot_rank_chg": 13, "stock_cnt": 5799, "price": "55.45", "change": "2.48", "market_id": "33", "circulate_market_value": "63628319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 5, "hot_rank_chg": 3, "stock_cnt": 5799, "price": "9.00", "change": "2.86", "market_id": "17", "circulate_market_value": "22666589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.95}, {"name": "密集调研", "change_pct": -0.01}, {"name": "工业大麻", "change_pct": 0.49}, {"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "保健品", "change_pct": -0.4}, {"name": "民营医院", "change_pct": -0.37}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "流感", "change_pct": -0.27}, {"name": "振兴东北", "change_pct": 0.55}, {"name": "食品", "change_pct": 0.98}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 6, "hot_rank_chg": 17, "stock_cnt": 5799, "price": "4.90", "change": "-0.20", "market_id": "33", "circulate_market_value": "5568360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.4}, {"name": "锂电池", "change_pct": -0.13}, {"name": "石墨烯", "change_pct": 0.76}, {"name": "新能源整车", "change_pct": 0.61}, {"name": "云计算数据中心", "change_pct": -0.4}, {"name": "汽车整车", "change_pct": 0.72}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "白色家电", "change_pct": 0.33}, {"name": "家电", "change_pct": 0.16}, {"name": "汽车热管理", "change_pct": -0.67}, {"name": "热泵", "change_pct": -0.21}, {"name": "轮边电机", "change_pct": 0.12}, {"name": "超级电容", "change_pct": -0.54}, {"name": "液冷服务器", "change_pct": -1.32}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 7, "hot_rank_chg": 11, "stock_cnt": 5799, "price": "73.18", "change": "5.43", "market_id": "33", "circulate_market_value": "53072812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 8, "hot_rank_chg": -1, "stock_cnt": 5799, "price": "11.77", "change": "9.18", "market_id": "17", "circulate_market_value": "7553788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.77}, {"name": "农业种植", "change_pct": 3.5}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "休闲食品", "change_pct": 1.5}, {"name": "食品", "change_pct": 0.98}, {"name": "食品安全", "change_pct": 0.07}, {"name": "社区团购", "change_pct": 1.87}, {"name": "大农业", "change_pct": 1.81}, {"name": "预制菜", "change_pct": 1.62}, {"name": "人造肉", "change_pct": 1.79}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 9, "hot_rank_chg": 147, "stock_cnt": 5799, "price": "7.85", "change": "9.94", "market_id": "33", "circulate_market_value": "12771901200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI营销", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.95}, {"name": "电竞", "change_pct": 0.29}, {"name": "手游", "change_pct": 0.33}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "人工智能", "change_pct": -0.03}, {"name": "游戏", "change_pct": 0.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "快手概念股", "change_pct": 0.59}, {"name": "元宇宙", "change_pct": 0.27}, {"name": "虚拟数字人", "change_pct": 0.27}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "web3.0", "change_pct": 0.4}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "数据要素", "change_pct": 0.38}, {"name": "字节跳动概念股", "change_pct": 0.52}, {"name": "AI营销", "change_pct": 1.21}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "智能眼镜/MR头显", "change_pct": -0.5}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "人形机器人", "change_pct": -0.91}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "多模态", "change_pct": 0.13}, {"name": "AI视频", "change_pct": 0.39}, {"name": "IP经济/谷子经济", "change_pct": 0.78}, {"name": "小红书概念股", "change_pct": 0.59}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 10, "hot_rank_chg": 0, "stock_cnt": 5799, "price": "3.85", "change": "0.79", "market_id": "17", "circulate_market_value": "8517466800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.82}, {"name": "云计算数据中心", "change_pct": -0.4}, {"name": "光通信", "change_pct": -1.16}, {"name": "林业", "change_pct": 3.39}, {"name": "军民融合", "change_pct": 0.02}, {"name": "军工", "change_pct": 0.11}, {"name": "人造肉", "change_pct": 1.79}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 11, "hot_rank_chg": 14, "stock_cnt": 5799, "price": "53.31", "change": "10.01", "market_id": "17", "circulate_market_value": "57178460000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长"}, {"code": "003040", "name": "楚天龙", "hot_rank": 12, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "18.50", "change": "-1.23", "market_id": "33", "circulate_market_value": "8451729800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 13, "hot_rank_chg": -10, "stock_cnt": 5799, "price": "15.44", "change": "-7.43", "market_id": "17", "circulate_market_value": "5937415500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 14, "hot_rank_chg": 24, "stock_cnt": 5799, "price": "36.69", "change": "10.02", "market_id": "33", "circulate_market_value": "27789560000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "002491", "name": "通鼎互联", "hot_rank": 15, "hot_rank_chg": -10, "stock_cnt": 5799, "price": "22.23", "change": "-5.96", "market_id": "33", "circulate_market_value": "26152901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 16, "hot_rank_chg": 8, "stock_cnt": 5799, "price": "11.45", "change": "9.99", "market_id": "33", "circulate_market_value": "5047411300.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.37}, {"name": "锂电池", "change_pct": -0.13}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "两轮车", "change_pct": -0.36}, {"name": "珠宝饰品", "change_pct": 2.3}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 17, "hot_rank_chg": -15, "stock_cnt": 5799, "price": "585.00", "change": "-4.88", "market_id": "17", "circulate_market_value": "17601316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "145.65", "change": "3.32", "market_id": "17", "circulate_market_value": "351271220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 19, "hot_rank_chg": 9, "stock_cnt": 5799, "price": "18.65", "change": "3.90", "market_id": "17", "circulate_market_value": "41390929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 20, "hot_rank_chg": 156, "stock_cnt": 5799, "price": "8.37", "change": "9.99", "market_id": "33", "circulate_market_value": "6091396400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "环氧丙烷", "xgb_concepts": [{"name": "冷链", "change_pct": 0.51}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "风电", "change_pct": -0.44}, {"name": "环氧丙烷", "change_pct": 2.52}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "建筑节能", "change_pct": 1.19}, {"name": "旧改", "change_pct": 0.95}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 21, "hot_rank_chg": -9, "stock_cnt": 5799, "price": "99.66", "change": "-1.68", "market_id": "33", "circulate_market_value": "65078727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301055", "name": "张小泉", "hot_rank": 22, "hot_rank_chg": 309, "stock_cnt": 5799, "price": "30.50", "change": "3.25", "market_id": "33", "circulate_market_value": "4758000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 23, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "429.03", "change": "-0.17", "market_id": "33", "circulate_market_value": "70802415000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 24, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "64.04", "change": "0.28", "market_id": "17", "circulate_market_value": "1270815670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 25, "hot_rank_chg": 53, "stock_cnt": 5799, "price": "15.27", "change": "10.01", "market_id": "17", "circulate_market_value": "10388481500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇提价"}, {"code": "600206", "name": "有研新材", "hot_rank": 26, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "51.65", "change": "-3.73", "market_id": "17", "circulate_market_value": "43724480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 27, "hot_rank_chg": 12, "stock_cnt": 5799, "price": "858.35", "change": "-0.90", "market_id": "33", "circulate_market_value": "952715520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 28, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "35.04", "change": "-2.88", "market_id": "17", "circulate_market_value": "119589756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600186", "name": "莲花控股", "hot_rank": 29, "hot_rank_chg": 28, "stock_cnt": 5799, "price": "11.94", "change": "2.14", "market_id": "17", "circulate_market_value": "21362311000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.93}, {"name": "纯碱", "change_pct": 2.94}, {"name": "食品", "change_pct": 0.98}, {"name": "土壤修复", "change_pct": 0.61}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "OpenClaw概念", "change_pct": 0.03}, {"name": "DeepSeek概念股", "change_pct": 0.51}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 30, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "422.36", "change": "-1.04", "market_id": "17", "circulate_market_value": "171621050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 31, "hot_rank_chg": -16, "stock_cnt": 5799, "price": "13.13", "change": "-6.35", "market_id": "33", "circulate_market_value": "6536704900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 32, "hot_rank_chg": 21, "stock_cnt": 5799, "price": "36.94", "change": "5.18", "market_id": "33", "circulate_market_value": "39929122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 33, "hot_rank_chg": 10, "stock_cnt": 5799, "price": "35.89", "change": "-1.48", "market_id": "33", "circulate_market_value": "102648008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 34, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "43.20", "change": "1.31", "market_id": "17", "circulate_market_value": "171572560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601360", "name": "三六零", "hot_rank": 35, "hot_rank_chg": 356, "stock_cnt": 5799, "price": "9.30", "change": "6.65", "market_id": "17", "circulate_market_value": "65095888000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.23}, {"name": "国产软件", "change_pct": 0.41}, {"name": "手游", "change_pct": 0.33}, {"name": "人工智能", "change_pct": -0.03}, {"name": "网络安全", "change_pct": 0.27}, {"name": "物联网", "change_pct": -0.27}, {"name": "大数据", "change_pct": 0.19}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "智慧安防", "change_pct": 0.42}, {"name": "国产操作系统", "change_pct": 0.92}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "华为海思", "change_pct": -0.14}, {"name": "华为鸿蒙", "change_pct": 0.47}, {"name": "AI营销", "change_pct": 1.21}, {"name": "词元概念/Token", "change_pct": 0.25}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "多模态", "change_pct": 0.13}, {"name": "DeepSeek概念股", "change_pct": 0.51}, {"name": "区块链", "change_pct": 0.26}]}, {"code": "002081", "name": "金螳螂", "hot_rank": 36, "hot_rank_chg": -3, "stock_cnt": 5799, "price": "5.60", "change": "-1.58", "market_id": "33", "circulate_market_value": "14854283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.41}, {"name": "云计算数据中心", "change_pct": -0.4}, {"name": "装修装饰", "change_pct": 0.95}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "航天", "change_pct": -0.23}, {"name": "旧改", "change_pct": 0.95}]}, {"code": "002837", "name": "英维克", "hot_rank": 37, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "64.48", "change": "-2.26", "market_id": "33", "circulate_market_value": "73071321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 38, "hot_rank_chg": -16, "stock_cnt": 5799, "price": "58.60", "change": "-0.88", "market_id": "17", "circulate_market_value": "263878080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 39, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "5.92", "change": "-0.34", "market_id": "33", "circulate_market_value": "209373430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.17}, {"name": "手机产业链", "change_pct": -0.69}, {"name": "超高清视频", "change_pct": -0.22}, {"name": "苹果产业链", "change_pct": -1.1}, {"name": "电竞", "change_pct": 0.29}, {"name": "半导体", "change_pct": -1.46}, {"name": "人工智能", "change_pct": -0.03}, {"name": "互联网医疗", "change_pct": -0.15}, {"name": "VR&AR", "change_pct": -0.36}, {"name": "OLED", "change_pct": -0.39}, {"name": "京津冀", "change_pct": 0.54}, {"name": "物联网", "change_pct": -0.27}, {"name": "指纹识别", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.27}, {"name": "白马股", "change_pct": 0.14}, {"name": "智能制造", "change_pct": -0.27}, {"name": "小米概念股", "change_pct": -0.54}, {"name": "国产芯片", "change_pct": -1.01}, {"name": "液晶面板/LCD", "change_pct": -0.52}, {"name": "全息概念", "change_pct": -0.21}, {"name": "理想汽车概念股", "change_pct": -0.75}, {"name": "MicroLED", "change_pct": -0.78}, {"name": "钙钛矿电池", "change_pct": 0.46}, {"name": "智能手表", "change_pct": -1.01}, {"name": "MiniLED", "change_pct": -0.63}, {"name": "传感器", "change_pct": -0.53}, {"name": "大硅片", "change_pct": -2.42}, {"name": "AI PC", "change_pct": -0.73}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "回购", "change_pct": 0.06}, {"name": "光电共封装CPO", "change_pct": -1.34}, {"name": "智能眼镜/MR头显", "change_pct": -0.5}, {"name": "玻璃基板封装", "change_pct": -0.86}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "14.42", "change": "-1.30", "market_id": "17", "circulate_market_value": "18519298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 41, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "19.53", "change": "-3.03", "market_id": "17", "circulate_market_value": "40847819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "396.82", "change": "-3.50", "market_id": "17", "circulate_market_value": "266154450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 43, "hot_rank_chg": 21, "stock_cnt": 5799, "price": "13.33", "change": "9.98", "market_id": "17", "circulate_market_value": "5578699900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "业绩增长"}, {"code": "600162", "name": "香江控股", "hot_rank": 44, "hot_rank_chg": 54, "stock_cnt": 5799, "price": "5.36", "change": "10.06", "market_id": "17", "circulate_market_value": "17518828000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报减亏", "xgb_concepts": [{"name": "房地产", "change_pct": 1.33}, {"name": "养老产业", "change_pct": 0.34}, {"name": "粤港澳大湾区", "change_pct": 1.32}, {"name": "民营医院", "change_pct": -0.37}, {"name": "地摊经济", "change_pct": 1.06}]}, {"code": "603629", "name": "利通电子", "hot_rank": 46, "hot_rank_chg": -15, "stock_cnt": 5799, "price": "119.95", "change": "-4.21", "market_id": "17", "circulate_market_value": "43268772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 47, "hot_rank_chg": 7, "stock_cnt": 5799, "price": "195.62", "change": "-2.48", "market_id": "33", "circulate_market_value": "271192260000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 48, "hot_rank_chg": 29, "stock_cnt": 5799, "price": "17.67", "change": "4.49", "market_id": "17", "circulate_market_value": "20039167000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 49, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "34.17", "change": "-2.04", "market_id": "17", "circulate_market_value": "56861335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 50, "hot_rank_chg": 21, "stock_cnt": 5799, "price": "121.70", "change": "-0.26", "market_id": "33", "circulate_market_value": "234011060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 51, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "74.93", "change": "-2.10", "market_id": "17", "circulate_market_value": "134080834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 52, "hot_rank_chg": -6, "stock_cnt": 5799, "price": "241.60", "change": "-8.15", "market_id": "33", "circulate_market_value": "209031100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002155", "name": "湖南黄金", "hot_rank": 53, "hot_rank_chg": 37, "stock_cnt": 5799, "price": "28.92", "change": "7.03", "market_id": "33", "circulate_market_value": "45187469000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 54, "hot_rank_chg": 66, "stock_cnt": 5799, "price": "13.37", "change": "-1.33", "market_id": "33", "circulate_market_value": "46499928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 55, "hot_rank_chg": -36, "stock_cnt": 5799, "price": "97.69", "change": "-1.16", "market_id": "33", "circulate_market_value": "155085480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002131", "name": "利欧股份", "hot_rank": 56, "hot_rank_chg": 60, "stock_cnt": 5799, "price": "4.60", "change": "0.22", "market_id": "33", "circulate_market_value": "26932066000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.14}, {"name": "人工智能", "change_pct": -0.03}, {"name": "云计算数据中心", "change_pct": -0.4}, {"name": "水利", "change_pct": 0.49}, {"name": "直播/短视频", "change_pct": 0.39}, {"name": "大数据", "change_pct": 0.19}, {"name": "园林", "change_pct": 0.17}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.54}, {"name": "数字经济", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "理想汽车概念股", "change_pct": -0.75}, {"name": "第三代半导体", "change_pct": -1.69}, {"name": "快手概念股", "change_pct": 0.59}, {"name": "IGBT", "change_pct": -0.59}, {"name": "虚拟数字人", "change_pct": 0.27}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "字节跳动概念股", "change_pct": 0.52}, {"name": "氮化镓", "change_pct": -1.38}, {"name": "AI营销", "change_pct": 1.21}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "多模态", "change_pct": 0.13}, {"name": "液冷服务器", "change_pct": -1.32}, {"name": "小红书概念股", "change_pct": 0.59}, {"name": "区块链", "change_pct": 0.26}]}, {"code": "000712", "name": "锦龙股份", "hot_rank": 57, "hot_rank_chg": 3, "stock_cnt": 5799, "price": "11.80", "change": "9.97", "market_id": "33", "circulate_market_value": "10569662700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "证券业务", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.11}, {"name": "期货概念", "change_pct": -0.69}, {"name": "券商", "change_pct": -0.0}, {"name": "大金融", "change_pct": -0.46}, {"name": "东数西算/算力", "change_pct": -0.11}]}, {"code": "300642", "name": "透景生命", "hot_rank": 58, "hot_rank_chg": 52, "stock_cnt": 5799, "price": "18.84", "change": "8.90", "market_id": "33", "circulate_market_value": "2594373000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603228", "name": "景旺电子", "hot_rank": 59, "hot_rank_chg": -17, "stock_cnt": 5799, "price": "93.90", "change": "-2.94", "market_id": "17", "circulate_market_value": "92210800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603011", "name": "合锻智能", "hot_rank": 60, "hot_rank_chg": 20, "stock_cnt": 5799, "price": "27.65", "change": "9.98", "market_id": "17", "circulate_market_value": "13670559000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB层压机"}, {"code": "003032", "name": "传智教育", "hot_rank": 61, "hot_rank_chg": 53, "stock_cnt": 5799, "price": "10.44", "change": "-0.10", "market_id": "33", "circulate_market_value": "2969988000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.96}, {"name": "ST摘帽", "change_pct": 0.32}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "教育", "change_pct": 0.82}, {"name": "阿里巴巴概念股", "change_pct": 0.32}, {"name": "职业教育", "change_pct": 0.89}, {"name": "在线教育", "change_pct": 0.44}, {"name": "华为鸿蒙", "change_pct": 0.47}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "智谱AI", "change_pct": 0.19}]}, {"code": "300319", "name": "麦捷科技", "hot_rank": 62, "hot_rank_chg": 171, "stock_cnt": 5799, "price": "20.91", "change": "10.11", "market_id": "33", "circulate_market_value": "17800060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 63, "hot_rank_chg": 65, "stock_cnt": 5799, "price": "11.02", "change": "1.38", "market_id": "17", "circulate_market_value": "4768063600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.11}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "光伏", "change_pct": 0.3}, {"name": "无线耳机", "change_pct": -0.38}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "光伏胶膜", "change_pct": 1.47}]}, {"code": "600105", "name": "永鼎股份", "hot_rank": 64, "hot_rank_chg": -12, "stock_cnt": 5799, "price": "39.80", "change": "-2.93", "market_id": "17", "circulate_market_value": "58187393000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000890", "name": "法尔胜", "hot_rank": 65, "hot_rank_chg": 9, "stock_cnt": 5799, "price": "8.60", "change": "-2.05", "market_id": "33", "circulate_market_value": "3607623000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.07}, {"name": "股权转让", "change_pct": 0.11}, {"name": "光通信", "change_pct": -1.16}, {"name": "固废处理", "change_pct": 0.42}, {"name": "环保", "change_pct": 0.38}, {"name": "独角兽", "change_pct": 0.85}, {"name": "光纤概念", "change_pct": -1.08}]}, {"code": "002466", "name": "天齐锂业", "hot_rank": 66, "hot_rank_chg": 19, "stock_cnt": 5799, "price": "50.10", "change": "3.88", "market_id": "33", "circulate_market_value": "73940657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002716", "name": "湖南白银", "hot_rank": 67, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "11.65", "change": "0.43", "market_id": "33", "circulate_market_value": "27056842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 1.2}, {"name": "有色 · 铜", "change_pct": 0.46}, {"name": "有色 · 锑", "change_pct": 3.11}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "有色 · 锌", "change_pct": 1.67}, {"name": "有色金属", "change_pct": 0.72}, {"name": "国企改革", "change_pct": 0.79}, {"name": "白银", "change_pct": 2.29}]}, {"code": "002437", "name": "誉衡药业", "hot_rank": 68, "hot_rank_chg": -27, "stock_cnt": 5799, "price": "4.86", "change": "9.96", "market_id": "33", "circulate_market_value": "10219006900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.01}, {"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "维生素", "change_pct": -0.12}, {"name": "基因测序", "change_pct": -1.13}, {"name": "民营医院", "change_pct": -0.37}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "PD-1抑制剂", "change_pct": -0.02}]}, {"code": "600371", "name": "万向德农", "hot_rank": 69, "hot_rank_chg": -14, "stock_cnt": 5799, "price": "11.54", "change": "10.01", "market_id": "17", "circulate_market_value": "3376350100.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.5}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "转基因", "change_pct": 3.26}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "大农业", "change_pct": 1.81}]}, {"code": "002742", "name": "冀衡医药", "hot_rank": 70, "hot_rank_chg": 22, "stock_cnt": 5799, "price": "6.24", "change": "10.05", "market_id": "33", "circulate_market_value": "3269267800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "医药制造", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.65}, {"name": "ST摘帽", "change_pct": 0.32}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "幽门螺杆菌概念", "change_pct": 0.43}, {"name": "新冠病毒防治", "change_pct": 0.17}, {"name": "减肥药", "change_pct": -1.55}]}, {"code": "603186", "name": "华正新材", "hot_rank": 71, "hot_rank_chg": 33, "stock_cnt": 5799, "price": "183.60", "change": "0.12", "market_id": "17", "circulate_market_value": "28786739000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001258", "name": "立新能源", "hot_rank": 72, "hot_rank_chg": -24, "stock_cnt": 5799, "price": "13.30", "change": "-3.34", "market_id": "33", "circulate_market_value": "12413177400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 73, "hot_rank_chg": -15, "stock_cnt": 5799, "price": "7.01", "change": "2.94", "market_id": "33", "circulate_market_value": "13424798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.59}, {"name": "林业", "change_pct": 3.39}, {"name": "碳中和", "change_pct": 0.7}, {"name": "自贸区", "change_pct": 1.13}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 74, "hot_rank_chg": -23, "stock_cnt": 5799, "price": "10.94", "change": "-5.69", "market_id": "17", "circulate_market_value": "18982879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.37}, {"name": "核电", "change_pct": -0.06}, {"name": "锂电池", "change_pct": -0.13}, {"name": "铜箔/覆铜板", "change_pct": -0.45}, {"name": "PCB板", "change_pct": -1.25}, {"name": "中科院系", "change_pct": -0.07}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "宁德时代概念股", "change_pct": -0.64}, {"name": "固态电池", "change_pct": 0.01}, {"name": "PET复合铜箔", "change_pct": -1.19}]}, {"code": "600272", "name": "开开实业", "hot_rank": 75, "hot_rank_chg": -25, "stock_cnt": 5799, "price": "20.29", "change": "-6.50", "market_id": "17", "circulate_market_value": "3246400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 76, "hot_rank_chg": -32, "stock_cnt": 5799, "price": "32.58", "change": "3.36", "market_id": "17", "circulate_market_value": "13064580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600095", "name": "湘财股份", "hot_rank": 77, "hot_rank_chg": -4, "stock_cnt": 5799, "price": "9.55", "change": "0.10", "market_id": "17", "circulate_market_value": "27305243000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.07}, {"name": "券商", "change_pct": -0.0}, {"name": "金融科技", "change_pct": -0.46}, {"name": "大金融", "change_pct": -0.46}, {"name": "人造肉", "change_pct": 1.79}]}, {"code": "002212", "name": "天融信", "hot_rank": 78, "hot_rank_chg": 535, "stock_cnt": 5799, "price": "6.93", "change": "10.00", "market_id": "33", "circulate_market_value": "8086228500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.23}, {"name": "国产软件", "change_pct": 0.41}, {"name": "一带一路", "change_pct": 0.65}, {"name": "量子通信", "change_pct": 0.63}, {"name": "人工智能", "change_pct": -0.03}, {"name": "网络安全", "change_pct": 0.27}, {"name": "云计算数据中心", "change_pct": -0.4}, {"name": "物联网", "change_pct": -0.27}, {"name": "大数据", "change_pct": 0.19}, {"name": "破净股", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "国产芯片", "change_pct": -1.01}, {"name": "阿里巴巴概念股", "change_pct": 0.32}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "信创", "change_pct": 0.37}, {"name": "华为昇腾", "change_pct": 0.27}, {"name": "跨境支付", "change_pct": -0.55}, {"name": "web3.0", "change_pct": 0.4}, {"name": "数字人民币", "change_pct": -0.31}, {"name": "智慧政务", "change_pct": 0.43}, {"name": "华为鸿蒙", "change_pct": 0.47}, {"name": "华为云·鲲鹏", "change_pct": 0.98}, {"name": "卫星互联网", "change_pct": -0.58}, {"name": "智慧灯杆", "change_pct": 0.3}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "回购", "change_pct": 0.06}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "智能电网", "change_pct": -0.03}, {"name": "低空经济", "change_pct": -0.05}, {"name": "量子计算", "change_pct": 1.27}, {"name": "财税改革", "change_pct": 1.88}, {"name": "DeepSeek概念股", "change_pct": 0.51}]}, {"code": "603823", "name": "百合花", "hot_rank": 79, "hot_rank_chg": 8, "stock_cnt": 5799, "price": "66.12", "change": "-2.78", "market_id": "17", "circulate_market_value": "27530233000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 80, "hot_rank_chg": -13, "stock_cnt": 5799, "price": "14.17", "change": "-3.67", "market_id": "17", "circulate_market_value": "20868256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 81, "hot_rank_chg": -15, "stock_cnt": 5799, "price": "83.43", "change": "3.61", "market_id": "17", "circulate_market_value": "10902065100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 82, "hot_rank_chg": 35, "stock_cnt": 5799, "price": "35.78", "change": "0.22", "market_id": "33", "circulate_market_value": "54311484000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301591", "name": "肯特股份", "hot_rank": 83, "hot_rank_chg": -11, "stock_cnt": 5799, "price": "57.50", "change": "14.09", "market_id": "33", "circulate_market_value": "2569948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 84, "hot_rank_chg": -9, "stock_cnt": 5799, "price": "17.73", "change": "-2.69", "market_id": "17", "circulate_market_value": "13958411000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002475", "name": "立讯精密", "hot_rank": 86, "hot_rank_chg": 2, "stock_cnt": 5799, "price": "56.60", "change": "-1.01", "market_id": "33", "circulate_market_value": "414599400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300456", "name": "赛微电子", "hot_rank": 87, "hot_rank_chg": -24, "stock_cnt": 5799, "price": "40.40", "change": "9.01", "market_id": "33", "circulate_market_value": "24141536000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 88, "hot_rank_chg": -32, "stock_cnt": 5799, "price": "26.40", "change": "10.00", "market_id": "33", "circulate_market_value": "5519663500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PTFE薄膜"}, {"code": "002185", "name": "华天科技", "hot_rank": 89, "hot_rank_chg": -20, "stock_cnt": 5799, "price": "16.92", "change": "-1.51", "market_id": "33", "circulate_market_value": "56276369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600641", "name": "先导基电", "hot_rank": 90, "hot_rank_chg": 33, "stock_cnt": 5799, "price": "34.80", "change": "2.35", "market_id": "17", "circulate_market_value": "32385921000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300285", "name": "国瓷材料", "hot_rank": 91, "hot_rank_chg": -5, "stock_cnt": 5799, "price": "68.90", "change": "-1.59", "market_id": "33", "circulate_market_value": "58776729000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002015", "name": "协鑫能科", "hot_rank": 92, "hot_rank_chg": -22, "stock_cnt": 5799, "price": "16.01", "change": "-4.25", "market_id": "33", "circulate_market_value": "25989427000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 93, "hot_rank_chg": 4, "stock_cnt": 5799, "price": "399.00", "change": "-2.47", "market_id": "33", "circulate_market_value": "500443020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 94, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "53.19", "change": "-5.02", "market_id": "33", "circulate_market_value": "19600690000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300475", "name": "香农芯创", "hot_rank": 95, "hot_rank_chg": 17, "stock_cnt": 5799, "price": "172.10", "change": "4.09", "market_id": "33", "circulate_market_value": "77186358000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600367", "name": "红星发展", "hot_rank": 96, "hot_rank_chg": -2, "stock_cnt": 5799, "price": "42.10", "change": "3.95", "market_id": "17", "circulate_market_value": "13555071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 97, "hot_rank_chg": -18, "stock_cnt": 5799, "price": "63.75", "change": "0.03", "market_id": "33", "circulate_market_value": "96737579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 98, "hot_rank_chg": 74, "stock_cnt": 5799, "price": "9.43", "change": "4.43", "market_id": "17", "circulate_market_value": "6683292800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601208", "name": "东材科技", "hot_rank": 99, "hot_rank_chg": -10, "stock_cnt": 5799, "price": "51.28", "change": "4.44", "market_id": "17", "circulate_market_value": "51802181000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 100, "hot_rank_chg": -16, "stock_cnt": 5799, "price": "21.08", "change": "-2.95", "market_id": "33", "circulate_market_value": "9535301900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "002396", "name": "星网锐捷", "price": 36.69, "change_pct": 10.01, "reason": "国内领先的ICT应用方案提供商；控股子公司锐捷网络是国内少数几家具备高端数据中心交换机研发能力的企业，推出了应用CPO技术的数据中心交换机", "plates": ["光通信"], "limit_up_days": 2, "turnover_ratio": 15.16, "first_limit_up": 1787880969, "break_limit_up_times": 16}, {"code": "600378", "name": "昊华科技", "price": 53.31, "change_pct": 10.01, "reason": "公司是国内氟化工龙头，受上游原材料成本上升等因素影响，公司PTFE产品销售价格有所上涨", "plates": ["氟化工"], "limit_up_days": 2, "turnover_ratio": 5.21, "first_limit_up": 1787880300, "break_limit_up_times": 3}, {"code": "600479", "name": "千金药业", "price": 13.33, "change_pct": 9.98, "reason": "妇科中药龙头；公司的西药抗病毒类药品主要有拉米夫定片和利巴韦林颗粒等", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 25.62, "first_limit_up": 1787880867, "break_limit_up_times": 15}, {"code": "603086", "name": "先达股份", "price": 6.33, "change_pct": 10.09, "reason": "选择性除草剂细分行业龙头", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1787895516, "break_limit_up_times": 0}, {"code": "603778", "name": "国晟科技", "price": 10.36, "change_pct": 9.98, "reason": "全球前三大异质结产品制造商；上半年亏损同比收窄", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.16, "first_limit_up": 1787881618, "break_limit_up_times": 2}, {"code": "002212", "name": "天融信", "price": 6.93, "change_pct": 10.0, "reason": "1、公司作为腾讯生态合作伙伴，已使用WorkBuddy、CodeBuddy，与腾讯在威胁情报、大模型安全、云安全等多方向展开深度合作；\n2、公司参与的数字货币相关网络安全国家/行业标准主要有《信息安全技术 区块链信息服务安全规范》《公钥密码应用技术体系框架规范》《动态口令密码应用技术规范》《信息安全技术 传输层密码协议（TLCP）》《金融数据安全 数据生命周期安全规范》《金融行业网络安全等级保护测评指南》等", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 9.41, "first_limit_up": 1787881083, "break_limit_up_times": 0}, {"code": "000567", "name": "海德股份", "price": 7.01, "change_pct": 10.05, "reason": "海南本地股，A股唯一全资AMC标的，取得西藏AMC牌照", "plates": ["大金融"], "limit_up_days": 1, "turnover_ratio": 4.35, "first_limit_up": 1787893812, "break_limit_up_times": 0}, {"code": "601222", "name": "林洋能源", "price": 6.09, "change_pct": 9.93, "reason": "全球智能电网、新能源、储能领域一流的产品和运营服务商", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 4.84, "first_limit_up": 1787883785, "break_limit_up_times": 0}, {"code": "603011", "name": "合锻智能", "price": 27.65, "change_pct": 9.98, "reason": "1、公司是PCB/CCL层压设备的国产龙头，核心产品是真空热压机/冷压机及自动化生产线；\n2、参股公司合肥汇智专注于粉末注射成形技术（PIM）的研发及应用，其中涉及的光模块业务，目前正在合作的企业有新易盛、联特科技等；\n3、公司高端成形机床已成熟应用于航空航天、军工领域并取得业务收入；\n4、公司与中国核工业二三建设有限公司合作，已承接核聚变真空室构件的研制工作", "plates": ["PCB板"], "limit_up_days": 2, "turnover_ratio": 16.59, "first_limit_up": 1787881961, "break_limit_up_times": 15}, {"code": "002971", "name": "和远气体", "price": 47.08, "change_pct": 10.0, "reason": "公司给长江存储、烽火科技、华星光电等光通信、半导体企业直接或间接供应氢气、氧气、氮气和氩气", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.43, "first_limit_up": 1787882268, "break_limit_up_times": 0}, {"code": "000925", "name": "众合科技", "price": 9.38, "change_pct": 9.96, "reason": "公司主营城市智慧交通等业务，中报较一季报减亏", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 12.4, "first_limit_up": 1787895660, "break_limit_up_times": 0}, {"code": "002679", "name": "福建金森", "price": 10.67, "change_pct": 10.0, "reason": "公司经营区林地总面积近80万亩", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 5.52, "first_limit_up": 1787884035, "break_limit_up_times": 1}, {"code": "600654", "name": "中安科", "price": 3.63, "change_pct": 10.0, "reason": "公司及全资子公司灵算智云武汉投资有限公司已与宜兴兴阳产业投资有限公司签署协议共建宜兴市人工智能算力中心项目；上半年净利润同比增长1826%", "plates": ["云计算数据中心", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 5.03, "first_limit_up": 1787880300, "break_limit_up_times": 1}, {"code": "000560", "name": "我爱我家", "price": 2.64, "change_pct": 10.0, "reason": "1、国内最早开展全国性房地产经纪连锁业务的企业之一；\n2、公司开发的小爱聊天助手基于自然语言理解、语义识别、实时推荐等多种技术，利用客户与经纪人聊天的实时数据、客户历史画像、公司积累的海量数据和相关知识库，构建了一套辅助经纪人与客户聊天交互的智能服务系统", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 10.62, "first_limit_up": 1787881458, "break_limit_up_times": 0}, {"code": "603045", "name": "福达合金", "price": 62.18, "change_pct": 9.99, "reason": "公司低压电接触材料销售额国内第一，高分断能力焊接触头组件已配套施耐德、西门子、ABB等全球头部客户，北美数据中心低压配套业务在关税压力下逆势增长", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.58, "first_limit_up": 1787880912, "break_limit_up_times": 1}, {"code": "600722", "name": "金牛化工", "price": 15.27, "change_pct": 10.01, "reason": "1、公司主营业务为控股子公司金牛旭阳的甲醇生产和销售，产能为20万吨/年，采用焦炉气制甲醇工艺；\n2、公司签4.36亿元风力发电机组设备采购合同", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 20.7, "first_limit_up": 1787894021, "break_limit_up_times": 0}, {"code": "603082", "name": "北自科技", "price": 44.61, "change_pct": 10.01, "reason": "公司是全国机器人标准化技术委员会人形机器人标准工作组（SAC/TC591/WG2）成员单位，参与制订人形机器人及其应用领域相关的国家标准及行业标准", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 17.15, "first_limit_up": 1787881967, "break_limit_up_times": 0}, {"code": "002107", "name": "沃华医药", "price": 7.23, "change_pct": 10.05, "reason": "联手宜从容推动参枝苓口服液应用于阿尔茨海默病防治", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.43, "first_limit_up": 1787882538, "break_limit_up_times": 0}, {"code": "002427", "name": "尤夫股份", "price": 5.19, "change_pct": 9.96, "reason": "1、公司以高性能纤维切入海洋经济领域，核心产品拒海水聚酯工业丝通过DNV、ABS船级社认证，适配船舶、海洋钻井、海上风电系泊缆绳等场景，能抵御海水侵蚀，保障海洋作业安全；\n2、根据测算，卫星每成功减重20公斤，就能节省800万元发射成本，UHMWPE纤维在减重方面极具优势；公司在建UHMWPE项目设计产能为1600吨/年，大股东为陕西国资委", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.53, "first_limit_up": 1787894466, "break_limit_up_times": 1}, {"code": "600354", "name": "敦煌种业", "price": 8.21, "change_pct": 10.05, "reason": "国家育繁推一体化企业；上半年净利润同比预增157.1%左右，因“公司持续优化产品营销策略，依托精准市场定位与多渠道推广举措，自有核心优势品种销量稳步攀升”", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 20.6, "first_limit_up": 1787882107, "break_limit_up_times": 2}, {"code": "600714", "name": "金瑞矿业", "price": 19.12, "change_pct": 10.01, "reason": "公司主营锶盐系列产品的生产和销售，可应用于液晶玻璃基板等", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 19.26, "first_limit_up": 1787898108, "break_limit_up_times": 0}, {"code": "603900", "name": "莱绅通灵", "price": 7.85, "change_pct": 9.94, "reason": "公司主营珠宝饰品、工艺美术品等，与蓝精灵 IP 联名，用18K金、天然贝母、珐琅等工艺打造珠宝，借热门 IP 拓展业务 ", "plates": ["黄金"], "limit_up_days": 2, "turnover_ratio": 6.51, "first_limit_up": 1787880600, "break_limit_up_times": 0}, {"code": "601003", "name": "柳钢股份", "price": 4.05, "change_pct": 10.05, "reason": "华南、西南地区最大的钢铁联合企业", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.55, "first_limit_up": 1787883048, "break_limit_up_times": 0}, {"code": "600162", "name": "香江控股", "price": 5.36, "change_pct": 10.06, "reason": "公司签5年互联网数据中心业务协议，预计总金额7.96亿元", "plates": ["云计算数据中心"], "limit_up_days": 2, "turnover_ratio": 4.69, "first_limit_up": 1787880980, "break_limit_up_times": 9}, {"code": "002942", "name": "新农股份", "price": 20.91, "change_pct": 9.99, "reason": "农药全产业链生产企业；主营化学农药原药、制剂及精细化工中间体，主要产品为噻唑锌、吡唑醚菌酯、毒死蜱、三唑磷等原药及制剂，中间体有乙基氯化物等；噻唑锌为创制农药，毒死蜱原药市场占有率居国内前列", "plates": ["大农业"], "limit_up_days": 3, "turnover_ratio": 18.39, "first_limit_up": 1787880300, "break_limit_up_times": 4}, {"code": "002437", "name": "誉衡药业", "price": 4.86, "change_pct": 9.95, "reason": "子公司蒲公英主要产品安脑丸为中药领域产品", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 38.86, "first_limit_up": 1787898852, "break_limit_up_times": 0}, {"code": "002486", "name": "嘉麟杰", "price": 2.95, "change_pct": 10.07, "reason": "国内户外运动功能性面料领域的领先者", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 9.38, "first_limit_up": 1787896818, "break_limit_up_times": 0}, {"code": "603016", "name": "新宏泰", "price": 31.69, "change_pct": 10.0, "reason": "公司主营断路器关键部件、低压断路器及刀熔开关，产品覆盖16A-8000A配电网络，是断路器行业关键部件配套研发、制造、服务能力领先企业之一", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 2.6, "first_limit_up": 1787881754, "break_limit_up_times": 0}, {"code": "000017", "name": "深中华A", "price": 11.45, "change_pct": 9.99, "reason": "公司主要业务为自行车、锂电池材料和珠宝黄金业务", "plates": ["黄金"], "limit_up_days": 7, "turnover_ratio": 25.08, "first_limit_up": 1787880780, "break_limit_up_times": 24}, {"code": "603269", "name": "海鸥股份", "price": 22.18, "change_pct": 10.02, "reason": "公司冷却塔已应用于数据算力中心", "plates": ["液冷服务器"], "limit_up_days": 2, "turnover_ratio": 3.59, "first_limit_up": 1787880673, "break_limit_up_times": 3}, {"code": "002631", "name": "德尔未来", "price": 10.1, "change_pct": 10.02, "reason": "控股子公司烯成石墨烯有用于柔性屏的石墨烯透明导电薄膜产品布局，上半年业绩同比减亏", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 12.12, "first_limit_up": 1787880600, "break_limit_up_times": 9}, {"code": "600551", "name": "时代出版", "price": 7.5, "change_pct": 9.97, "reason": "公司AI智能审校工具已实现所属出版单位全覆盖，并在AI制图、音视频制作、软件开发及文字处理领域深度应用", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 2.73, "first_limit_up": 1787880650, "break_limit_up_times": 1}, {"code": "603029", "name": "天鹅股份", "price": 18.28, "change_pct": 9.99, "reason": "国内棉业机械龙头，控股股东为山东供销资本公司，实际控制人为山东省供销社", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 10.41, "first_limit_up": 1787886556, "break_limit_up_times": 1}, {"code": "002949", "name": "华阳国际", "price": 14.08, "change_pct": 10.0, "reason": "1、公司是国家高新技术企业、建筑设计行业“国家住宅产业化基地”、首批“装配式建筑产业基地”、首批“全过程工程咨询试点单位”；\n2、公司涉及到低空经济的业务主要是关于航空小镇的相关规划设计", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 17.48, "first_limit_up": 1787883912, "break_limit_up_times": 3}, {"code": "003030", "name": "祖名股份", "price": 24.11, "change_pct": 9.99, "reason": "国内生鲜豆制品领军企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 8.02, "first_limit_up": 1787894400, "break_limit_up_times": 0}, {"code": "002742", "name": "冀衡医药", "price": 6.24, "change_pct": 10.05, "reason": "公司摘星脱帽后正式更名，全资子公司辽源百康主要生产化学原料药，涵盖解热镇痛、抗菌、抗过敏、局部麻醉等大类", "plates": ["医药"], "limit_up_days": 4, "turnover_ratio": 41.97, "first_limit_up": 1787880600, "break_limit_up_times": 3}, {"code": "000798", "name": "中水渔业", "price": 10.12, "change_pct": 10.0, "reason": "中国农业发展集团旗下，主营远洋水产品，有金枪饺子、金枪鱼圈等预制食品\n", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.74, "first_limit_up": 1787885022, "break_limit_up_times": 1}, {"code": "000912", "name": "泸天化", "price": 4.36, "change_pct": 10.1, "reason": "公司主营业务包括尿素、复合肥等化肥类产品；甲醇装置处于同行业先进水平，子公司绿源醇从事甲醇业务，拥有甲醇产能70万吨/年", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1787898366, "break_limit_up_times": 2}, {"code": "600815", "name": "厦工股份", "price": 4.46, "change_pct": 10.12, "reason": "实控人厦门国资委，中国最大的工程机械制造基地之一", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 10.11, "first_limit_up": 1787894414, "break_limit_up_times": 0}, {"code": "000716", "name": "黑芝麻", "price": 5.67, "change_pct": 10.1, "reason": "1、我国糊类食品龙头企业；旗下拥有京和米业，主要生产的香米富硒米，年生产大米能力20万吨；\n2、公司拟对天臣新能源增资5亿，标的主要从事锂电池生产和销售", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 10.37, "first_limit_up": 1787885334, "break_limit_up_times": 1}, {"code": "003005", "name": "竞业达", "price": 15.03, "change_pct": 10.03, "reason": "公司“星空教育大模型”通过国家网信办备案，累计完成文生文、文生图、文生视频等7项深度合成算法备案，形成教育垂类大模型+深度合成算法+应用落地的完整AI服务体系", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 4.8, "first_limit_up": 1787880969, "break_limit_up_times": 0}, {"code": "600371", "name": "万向德农", "price": 11.54, "change_pct": 10.01, "reason": "公司是国内采用单倍体育种技术领先供应商", "plates": ["大农业"], "limit_up_days": 4, "turnover_ratio": 1.68, "first_limit_up": 1787880300, "break_limit_up_times": 0}, {"code": "000565", "name": "渝三峡Ａ", "price": 6.62, "change_pct": 9.97, "reason": "1、重庆国资委旗下，我国涂料行业龙头；\n2、公司重防腐涂料打破外资垄断，曾为天宫一号、神舟九号、长征二号F火箭等军工航天工程提供配套，获国家航天科工集团授牌", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.35, "first_limit_up": 1787899446, "break_limit_up_times": 0}, {"code": "002915", "name": "中欣氟材", "price": 18.87, "change_pct": 10.03, "reason": "国内氟化工精细化学品行业龙头；拥有基础配套原料萤石、氢氟酸、氟制冷剂、含氟精细化学品等在内的完整的氟化工产业链", "plates": ["氟化工"], "limit_up_days": 1, "turnover_ratio": 9.34, "first_limit_up": 1787885802, "break_limit_up_times": 1}, {"code": "002886", "name": "沃特股份", "price": 26.4, "change_pct": 10.0, "reason": "1、公司已有PCB用聚四氟乙烯（PTFE）材料、散热用液晶高分子（LCP）和聚醚醚酮（PEEK）材料、数据连接用LCP和高温尼龙（PPA）材料等方案；\n2、公司的聚芳醚酮产线正在建设中，其中包含PEEK产线", "plates": ["氟化工"], "limit_up_days": 2, "turnover_ratio": 2.03, "first_limit_up": 1787880300, "break_limit_up_times": 0}, {"code": "600227", "name": "赤天化", "price": 4.58, "change_pct": 10.1, "reason": "贵州最大的甲醇生产企业；公司化工业务涵盖尿素、甲醇及复合肥的生产和销售，具备年产52万吨尿素、10万吨复合肥、5万吨车用尿素的生产能力", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 28.89, "first_limit_up": 1787897707, "break_limit_up_times": 2}, {"code": "002952", "name": "亚世光电", "price": 21.79, "change_pct": 9.99, "reason": "公司主营业务为研发、设计、生产和销售定制化液晶显示器及电子纸显示模组等光电显示产品，包括单色液晶显示器、TFT液晶显示器、电容式触模屏模组等，产品广泛应用于工控仪表、医疗仪器、白色家电、汽车显示、液晶光阀等领域，是三星、欧姆龙及GIGASET等众多国际知名企业供应商", "plates": ["玻璃基板封装"], "limit_up_days": 1, "turnover_ratio": 4.38, "first_limit_up": 1787881932, "break_limit_up_times": 0}, {"code": "603396", "name": "金辰股份", "price": 31.9, "change_pct": 10.0, "reason": "公司为全球光伏组件设备龙头，拟投资约10亿元建设半导体装备研发及制造项目，布局TGV玻璃基封装等设备", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 11.36, "first_limit_up": 1787893216, "break_limit_up_times": 0}, {"code": "600689", "name": "上海三毛", "price": 12.22, "change_pct": 9.99, "reason": "重庆国资委旗下；公司从事的主要业务为进出口贸易、安防服务以及园区物业租赁管理", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 6.41, "first_limit_up": 1787896341, "break_limit_up_times": 1}, {"code": "002279", "name": "久其软件", "price": 7.05, "change_pct": 9.98, "reason": "国内领先的报表管理软件供应商；公司新一代大模型应用管理平台女娲 GPT 是快速集成、开箱即用的平台，提供大模型纳管与调优、智能体智能编排等能力 ，已落地多个智能化场景 ，覆盖内控、财务等核心业务领域", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.84, "first_limit_up": 1787880777, "break_limit_up_times": 0}, {"code": "002918", "name": "蒙娜丽莎", "price": 11.33, "change_pct": 10.0, "reason": "行业陶瓷大板、岩板龙头，公司及子公司近日收到国家知识产权局和美国专利及商标局颁发的3项《发明专利证书》。专利名称分别为“具有防伪视觉效果的陶瓷板及其制备方法”、“一种具有颜色玉石效果的陶瓷岩板及其制备方法”和“一种具有鎏金溢彩黑金脉纹的瓷质仿古砖及其制备方法”。", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 10.9, "first_limit_up": 1787881848, "break_limit_up_times": 2}, {"code": "600691", "name": "潞化科技", "price": 2.94, "change_pct": 10.11, "reason": "公司拥有甲醇设计产能40万吨，生产厂区主要在山东地区", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 3.41, "first_limit_up": 1787886083, "break_limit_up_times": 1}, {"code": "002855", "name": "捷荣技术", "price": 14.64, "change_pct": 9.99, "reason": "华为Mate XT 2新一代三折叠官宣2026年9月7日首发，公司的客户代工厂家向华为品牌产品提供公司的产品精密结构件", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 2.08, "first_limit_up": 1787880300, "break_limit_up_times": 0}, {"code": "300378", "name": "鼎捷数智", "price": 37.45, "change_pct": 19.99, "reason": "公司是国内工业ERP、MES龙头，完成文生图纸、文档解析、语音TTS模型、大模型多级推理性能并发等底层AI算法优化", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.18, "first_limit_up": 1787880624, "break_limit_up_times": 0}, {"code": "600929", "name": "雪天盐业", "price": 6.04, "change_pct": 10.02, "reason": "公司有丰富的盐穴资源，具备储气储能条件", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1787880844, "break_limit_up_times": 2}, {"code": "001288", "name": "运机集团", "price": 28.46, "change_pct": 10.01, "reason": "公司专注于输送机械装备领域，具有减速器相关产品：圆锥圆柱齿轮减速器和ZJ轴装式减速器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.04, "first_limit_up": 1787881374, "break_limit_up_times": 4}, {"code": "000626", "name": "远大控股", "price": 9.41, "change_pct": 10.06, "reason": "公司主要从事能源化工、金属、橡胶、白糖等大宗商品贸易以及终端消费品的外贸综合服务业务，自贸区跨境贸易、资源储备政策利好其对俄蒙贸易规模提升", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.87, "first_limit_up": 1787893782, "break_limit_up_times": 0}, {"code": "605188", "name": "国光连锁", "price": 13.37, "change_pct": 10.04, "reason": "江西省商贸流通行业首家上市企业，主营连锁超市、百货商场的运营业务", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.32, "first_limit_up": 1787886864, "break_limit_up_times": 0}, {"code": "000011", "name": "深物业A", "price": 9.15, "change_pct": 9.98, "reason": "深圳国资委控股的深圳投资控股公司旗下；主营房地产开发、房屋租赁、物业管理，餐饮业务和仓储业务", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1787883669, "break_limit_up_times": 0}, {"code": "601086", "name": "国芳集团", "price": 8.34, "change_pct": 10.03, "reason": "公司为甘肃省内最大的连锁零售企业", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.7, "first_limit_up": 1787881127, "break_limit_up_times": 0}, {"code": "601700", "name": "风范股份", "price": 8.38, "change_pct": 9.97, "reason": "公司中标约1.29亿元南方电网项目", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 18.01, "first_limit_up": 1787883546, "break_limit_up_times": 0}, {"code": "001376", "name": "百通能源", "price": 11.58, "change_pct": 9.97, "reason": "公司主营以煤炭为燃料的热电联产业务，此前拟4亿美元在安哥拉布局电解铝业务", "plates": ["智能电网"], "limit_up_days": 1, "turnover_ratio": 10.37, "first_limit_up": 1787884143, "break_limit_up_times": 0}, {"code": "000062", "name": "深圳华强", "price": 24.85, "change_pct": 10.0, "reason": "公司是华为海思全系列产品代理商", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 5.83, "first_limit_up": 1787886129, "break_limit_up_times": 0}, {"code": "603171", "name": "税友股份", "price": 44.34, "change_pct": 10.0, "reason": "公司与阿里云在AI智能体应用方面保持长期合作，90%以上基础设施使用阿里云，通义千问大模型应用于财税咨询、爱搜税等AI SaaS场景", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 3.53, "first_limit_up": 1787882592, "break_limit_up_times": 1}, {"code": "605566", "name": "福莱蒽特", "price": 28.51, "change_pct": 9.99, "reason": "1、公司拟出资300万元与钛深科技共设双曲线智能机器人公司，持股30%，切入机器人皮肤及柔性触觉传感赛道；\n2、控股子公司福莱蒽特新能源产品包括POE、EVA太阳能电池封装胶膜；\n3、公司主营业务为分散染料及其滤饼的研产销，主要产品为分散染料，用于涤纶及其混纺织物的染色", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.59, "first_limit_up": 1787893683, "break_limit_up_times": 0}, {"code": "000712", "name": "锦龙股份", "price": 11.8, "change_pct": 9.97, "reason": "公司主要经营业务为证券公司业务，持有中山证券67.78%股权", "plates": ["大金融"], "limit_up_days": 3, "turnover_ratio": 1.69, "first_limit_up": 1787880300, "break_limit_up_times": 0}, {"code": "002578", "name": "闽发铝业", "price": 4.33, "change_pct": 9.9, "reason": "1、公司液冷服务器用铝型材已开始小批量供货，正积极推进相关领域的市场拓展与技术优化，稳步提升产品交付能力；\n2、公司位于福建省南安市，为海西板块的铝型材龙头企业，产品可用于新能源汽车，此前与亿维汽车签署战略合作框架协议；\n3、光伏支架和边框等配套产品是公司的主要工业材产品之一", "plates": ["液冷服务器"], "limit_up_days": 1, "turnover_ratio": 7.33, "first_limit_up": 1787885877, "break_limit_up_times": 0}, {"code": "002229", "name": "鸿博股份", "price": 12.29, "change_pct": 10.03, "reason": "1、全资子公司英博数科是北京·AI创新赋能中心的唯一指定运营方，公司与英伟达在包括智算中心、通用技术创新赋能公共服务平台、AI创新孵化加速器等十大领域进行合作；\n2、当地时间3月7日，OpenClaw 创始人在平台X上分享龙虾基准测试排行榜。MiniMax M2.1，成功率93.6%，位居第二；公司全资子公司英博数科近期与AI多模态大模型公司MiniMax达成协议，英博数科为MiniMax提供一定规模的英伟达智算服务器所有的算力和资源以及配套软件、应用以及技术服务", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 16.43, "first_limit_up": 1787882628, "break_limit_up_times": 1}, {"code": "688209", "name": "英集芯", "price": 29.54, "change_pct": 19.98, "reason": "公司是一家专注于高性能、高品质数模混合芯片设计公司，主营业务为电源管理芯片、快充协议芯片的研发和销售", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 13.93, "first_limit_up": 1787897318, "break_limit_up_times": 17}, {"code": "603559", "name": "中通国脉", "price": 9.58, "change_pct": 9.99, "reason": "公司共同持股成立吉林省华君算力科技有限公司，经营范围包含云计算设备销售等", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 7.03, "first_limit_up": 1787882477, "break_limit_up_times": 2}, {"code": "002349", "name": "精华制药", "price": 7.89, "change_pct": 10.04, "reason": "公司正柴胡饮颗粒近期被国家中医药管理局中医疫病防治专家委员会纳入《新冠病毒感染者居家中医药干预指南》", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 5.19, "first_limit_up": 1787883483, "break_limit_up_times": 0}, {"code": "603608", "name": "天创时尚", "price": 19.7, "change_pct": 9.99, "reason": "公司控股股东安徽先睿为轴承企业慈兴集团全资子公司，核心业务为机器人轴承与商业航天轴承两大板块", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 5.82, "first_limit_up": 1787885438, "break_limit_up_times": 0}, {"code": "688152", "name": "麒麟信安", "price": 38.04, "change_pct": 20.0, "reason": "公司以操作系统为根技术，形成了 “操作系统-云计算-信息安全” 产品体系", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 7.2, "first_limit_up": 1787881193, "break_limit_up_times": 0}, {"code": "600251", "name": "冠农股份", "price": 11.77, "change_pct": 10.0, "reason": "公司通过参股国投新疆罗布泊钾盐有限责任公司布局钾肥及盐湖提锂业务，其拥有硫酸钾产能160万吨/年、硫酸钾镁肥产能10万吨/年", "plates": ["大农业"], "limit_up_days": 1, "turnover_ratio": 8.44, "first_limit_up": 1787895235, "break_limit_up_times": 3}, {"code": "000059", "name": "华锦股份", "price": 5.57, "change_pct": 10.08, "reason": "公司偏三甲苯产能2.8万吨", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 6.13, "first_limit_up": 1787880786, "break_limit_up_times": 1}, {"code": "605006", "name": "山东玻纤", "price": 15.54, "change_pct": 9.98, "reason": "公司玻纤产能位居全国第四，玻纤纱为电子级玻璃纤维布的生产的原材料", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 6.38, "first_limit_up": 1787882516, "break_limit_up_times": 2}, {"code": "002165", "name": "红 宝 丽", "price": 8.37, "change_pct": 9.99, "reason": "公司主要从事环氧丙烷衍生品，一异丙醇胺可用于电子化学品之光刻胶清洗剂，也是近年来公司在国内市场重点拓展的应用领域之一", "plates": ["石油化工"], "limit_up_days": 1, "turnover_ratio": 16.57, "first_limit_up": 1787881362, "break_limit_up_times": 1}, {"code": "603007", "name": "顺景科技", "price": 5.37, "change_pct": 10.04, "reason": "全资子公司苏州顺景持股60%设立苏州思凯灵机器人有限公司，主营机器人及惯性测量单元、压力传感器等核心部件，形成“感知-执行-场景”闭环", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 11.29, "first_limit_up": 1787882038, "break_limit_up_times": 3}, {"code": "002084", "name": "海鸥住工", "price": 5.8, "change_pct": 10.06, "reason": "公司主营业务聚焦在卫浴及厨房产品整组龙头及部品部件的制造服务与销售，控股股东拟变更为博泰车联", "plates": ["股权转让"], "limit_up_days": 5, "turnover_ratio": 1.04, "first_limit_up": 1787880300, "break_limit_up_times": 0}, {"code": "600540", "name": "新赛股份", "price": 5.05, "change_pct": 10.02, "reason": "公司农业主要产品为棉籽、葵花籽、菜籽及其他油料作物，立足于新疆棉花产业，聚焦棉业全产业链", "plates": ["大农业"], "limit_up_days": 2, "turnover_ratio": 0.89, "first_limit_up": 1787880301, "break_limit_up_times": 0}, {"code": "002354", "name": "天娱数科", "price": 7.85, "change_pct": 9.94, "reason": "1、公司拥有智者千问、天星、智慧广告三款企业级大模型，推进具身智能平台建设，完成“人形机器人空间6D动捕长程数据”等5个数据集资产登记，积累超120万条3D数据及10万机器人任务训练数据，为相关场景提供解决方案；\n2、参股公司芯明发布自研3D视觉AI模组R216g，内置空间智能芯片提供3.5 TOPS端侧算力，专为人形机器人、灵巧手及协作臂设计", "plates": ["人工智能大模型"], "limit_up_days": 1, "turnover_ratio": 5.63, "first_limit_up": 1787880600, "break_limit_up_times": 0}];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};