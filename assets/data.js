const UPDATE_TIME = "2026-08-29 03:02";
const THS_HOT = [
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
    "name": "AI应用",
    "rise": 0.37,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续38天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
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
    "name": "存储芯片",
    "rise": -1.44,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续233天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "猪肉",
    "rise": 1.42,
    "rate": 0,
    "tag": "",
    "hotTag": "连续15天上榜",
    "rankChg": 0,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "液冷服务器",
    "rise": -0.97,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "供销社",
    "rise": 3.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 1,
    "etfName": "农业ETF",
    "code": "886016"
  },
  {
    "name": "算力租赁",
    "rise": -0.09,
    "rate": 0,
    "tag": "4家涨停",
    "hotTag": "连续144天上榜",
    "rankChg": -1,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "煤化工概念",
    "rise": 1.89,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "石化ETF",
    "code": "885398"
  },
  {
    "name": "人工智能",
    "rise": 0.07,
    "rate": 0,
    "tag": "19家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "商业航天",
    "rise": -0.12,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续209天上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886078"
  },
  {
    "name": "网络安全",
    "rise": 0.2,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "大数据ETF",
    "code": "885459"
  },
  {
    "name": "超级品牌",
    "rise": 0.52,
    "rate": 0,
    "tag": "",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "食品ETF",
    "code": "885761"
  },
  {
    "name": "AIGC概念",
    "rise": 0.59,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  },
  {
    "name": "煤炭概念",
    "rise": 1.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "煤炭ETF",
    "code": "885914"
  }
];
const THS_EVENTS = [
  {
    "title": "黄金一度失守4590美元！两名美联储官员释放鹰派信号，市场聚焦主席沃什发言",
    "desc": "",
    "heat": 528220,
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
    "heat": 410086,
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
    "heat": 151041,
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
    "heat": 147160,
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
    "heat": 122421,
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
    "heat": 39956,
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
    "heat": 29295,
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
    "heat": 6441,
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
    "heat": 10,
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
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 1,
    "hot_rank_chg": 1,
    "stock_cnt": 5850,
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
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 3,
    "hot_rank_chg": 13,
    "stock_cnt": 5850,
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
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 6,
    "hot_rank_chg": 7,
    "stock_cnt": 5850,
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
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 7,
    "hot_rank_chg": -1,
    "stock_cnt": 5850,
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
    "hot_rank": 10,
    "hot_rank_chg": -9,
    "stock_cnt": 5850,
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
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 11,
    "hot_rank_chg": 43,
    "stock_cnt": 5850,
    "price": "2.64",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "6184696600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "净利增长",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.22
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "VR&AR",
        "change_pct": -0.36
      },
      {
        "name": "京津冀",
        "change_pct": 0.54
      },
      {
        "name": "装修装饰",
        "change_pct": 0.95
      },
      {
        "name": "住房租赁",
        "change_pct": 1.89
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
        "name": "房产经纪",
        "change_pct": 4.54
      },
      {
        "name": "物业管理",
        "change_pct": 1.97
      },
      {
        "name": "低价股",
        "change_pct": 1.18
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.25
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 12,
    "hot_rank_chg": 30,
    "stock_cnt": 5850,
    "price": "4.58",
    "change": "10.10",
    "market_id": "17",
    "circulate_market_value": "5851407100.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "中报扭亏",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 3.83
      },
      {
        "name": "化肥",
        "change_pct": 3.11
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
        "name": "煤化工",
        "change_pct": 2.73
      },
      {
        "name": "食品",
        "change_pct": 0.98
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "干细胞",
        "change_pct": -1.14
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": -0.15
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 16,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
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
    "hot_rank": 17,
    "hot_rank_chg": -7,
    "stock_cnt": 5850,
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
        "change_pct": -0.39
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
    "code": "600371",
    "name": "万向德农",
    "hot_rank": 18,
    "hot_rank_chg": 22,
    "stock_cnt": 5850,
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
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 21,
    "hot_rank_chg": 13,
    "stock_cnt": 5850,
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
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 23,
    "hot_rank_chg": 15,
    "stock_cnt": 5850,
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
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 29,
    "hot_rank_chg": -10,
    "stock_cnt": 5850,
    "price": "8.38",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "9542786200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.65
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
        "name": "特高压",
        "change_pct": -0.34
      },
      {
        "name": "智能电网",
        "change_pct": -0.03
      }
    ]
  },
  {
    "code": "002742",
    "name": "冀衡医药",
    "hot_rank": 30,
    "hot_rank_chg": 22,
    "stock_cnt": 5850,
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
    "code": "601360",
    "name": "三六零",
    "hot_rank": 35,
    "hot_rank_chg": -7,
    "stock_cnt": 5850,
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
    "code": "600354",
    "name": "敦煌种业",
    "hot_rank": 36,
    "hot_rank_chg": 30,
    "stock_cnt": 5850,
    "price": "8.21",
    "change": "10.05",
    "market_id": "17",
    "circulate_market_value": "4333255100.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "中报增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.5
      },
      {
        "name": "棉花",
        "change_pct": 5.88
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "供销社",
        "change_pct": 2.91
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 37,
    "hot_rank_chg": -6,
    "stock_cnt": 5850,
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
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 39,
    "hot_rank_chg": -9,
    "stock_cnt": 5850,
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
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 43,
    "hot_rank_chg": -10,
    "stock_cnt": 5850,
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
        "change_pct": -0.39
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
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 44,
    "hot_rank_chg": 44,
    "stock_cnt": 5850,
    "price": "5.80",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "3738879800.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "5",
    "change_reason": "控制权拟变更",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.65
      },
      {
        "name": "强势人气股",
        "change_pct": 0.41
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
        "name": "家具家居",
        "change_pct": 1.06
      },
      {
        "name": "复牌股",
        "change_pct": 0.11
      },
      {
        "name": "智能制造",
        "change_pct": -0.27
      },
      {
        "name": "3D打印",
        "change_pct": -0.05
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.21
      },
      {
        "name": "旧改",
        "change_pct": 0.95
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 50,
    "hot_rank_chg": 23,
    "stock_cnt": 5850,
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
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 56,
    "hot_rank_chg": 65,
    "stock_cnt": 5850,
    "price": "5.05",
    "change": "10.02",
    "market_id": "17",
    "circulate_market_value": "2935953600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "业绩高增长",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.5
      },
      {
        "name": "新疆国企改革",
        "change_pct": 2.53
      },
      {
        "name": "农垦",
        "change_pct": 2.85
      },
      {
        "name": "棉花",
        "change_pct": 5.88
      },
      {
        "name": "新疆概念",
        "change_pct": 1.06
      },
      {
        "name": "风电",
        "change_pct": -0.44
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 57,
    "hot_rank_chg": -32,
    "stock_cnt": 5850,
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
        "change_pct": -0.39
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
    "code": "002229",
    "name": "鸿博股份",
    "hot_rank": 60,
    "hot_rank_chg": 23,
    "stock_cnt": 5850,
    "price": "12.29",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "6060989300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "算力租赁",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.63
      },
      {
        "name": "彩票",
        "change_pct": 1.19
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.39
      },
      {
        "name": "包装印刷",
        "change_pct": 0.6
      },
      {
        "name": "数字经济",
        "change_pct": 0.38
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.11
      },
      {
        "name": "AIGC概念",
        "change_pct": 0.54
      },
      {
        "name": "ETC",
        "change_pct": 0.17
      },
      {
        "name": "词元概念/Token",
        "change_pct": 0.25
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
        "name": "英伟达概念",
        "change_pct": -0.27
      },
      {
        "name": "区块链",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "603778",
    "name": "国晟科技",
    "hot_rank": 61,
    "hot_rank_chg": 56,
    "stock_cnt": 5850,
    "price": "10.36",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "6660000000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "业绩改善",
    "xgb_concepts": [
      {
        "name": "园林",
        "change_pct": 0.17
      },
      {
        "name": "光伏",
        "change_pct": 0.3
      },
      {
        "name": "固态电池",
        "change_pct": 0.01
      },
      {
        "name": "异质结电池HJT",
        "change_pct": 0.11
      },
      {
        "name": "国资入股",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600654",
    "name": "中安科",
    "hot_rank": 62,
    "hot_rank_chg": 46,
    "stock_cnt": 5850,
    "price": "3.63",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "8412277500.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "半年报增长",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.14
      },
      {
        "name": "国产软件",
        "change_pct": 0.41
      },
      {
        "name": "人工智能",
        "change_pct": -0.03
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.39
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
        "name": "东数西算/算力",
        "change_pct": -0.11
      },
      {
        "name": "消防",
        "change_pct": 0.72
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.54
      },
      {
        "name": "传感器",
        "change_pct": -0.53
      },
      {
        "name": "华为产业链",
        "change_pct": -0.13
      }
    ]
  },
  {
    "code": "002716",
    "name": "湖南白银",
    "hot_rank": 63,
    "hot_rank_chg": -14,
    "stock_cnt": 5850,
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
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 72,
    "hot_rank_chg": -2,
    "stock_cnt": 5850,
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
    "code": "002212",
    "name": "天融信",
    "hot_rank": 73,
    "hot_rank_chg": 9,
    "stock_cnt": 5850,
    "price": "6.93",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "8086264800.00",
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
        "change_pct": -0.39
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
    "code": "600785",
    "name": "新华百货",
    "hot_rank": 80,
    "hot_rank_chg": -4,
    "stock_cnt": 5850,
    "price": "12.42",
    "change": "6.61",
    "market_id": "17",
    "circulate_market_value": "3923276700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 2.22
      },
      {
        "name": "冷链",
        "change_pct": 0.51
      },
      {
        "name": "宁夏概念",
        "change_pct": 1.08
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.78
      },
      {
        "name": "首发经济",
        "change_pct": 1.24
      }
    ]
  },
  {
    "code": "000912",
    "name": "泸天化",
    "hot_rank": 86,
    "hot_rank_chg": 122,
    "stock_cnt": 5850,
    "price": "4.36",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "6836480000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "化肥",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": 3.83
      },
      {
        "name": "化肥",
        "change_pct": 3.11
      },
      {
        "name": "煤化工",
        "change_pct": 2.73
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "600313",
    "name": "农发种业",
    "hot_rank": 87,
    "hot_rank_chg": 52,
    "stock_cnt": 5850,
    "price": "7.50",
    "change": "3.73",
    "market_id": "17",
    "circulate_market_value": "8116490000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 0.67
      },
      {
        "name": "农业种植",
        "change_pct": 3.5
      },
      {
        "name": "化肥",
        "change_pct": 3.11
      },
      {
        "name": "转基因",
        "change_pct": 3.26
      },
      {
        "name": "土地流转",
        "change_pct": 1.77
      },
      {
        "name": "农垦",
        "change_pct": 2.85
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.53
      },
      {
        "name": "大农业",
        "change_pct": 1.81
      },
      {
        "name": "国企改革",
        "change_pct": 0.79
      },
      {
        "name": "大豆",
        "change_pct": 2.87
      }
    ]
  },
  {
    "code": "000002",
    "name": "万科A",
    "hot_rank": 88,
    "hot_rank_chg": 132,
    "stock_cnt": 5850,
    "price": "3.16",
    "change": "1.61",
    "market_id": "33",
    "circulate_market_value": "30699758000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "快递物流",
        "change_pct": 0.96
      },
      {
        "name": "深圳本地股",
        "change_pct": 1.37
      },
      {
        "name": "股权转让",
        "change_pct": 0.11
      },
      {
        "name": "房地产",
        "change_pct": 1.33
      },
      {
        "name": "养老产业",
        "change_pct": 0.34
      },
      {
        "name": "冷链",
        "change_pct": 0.51
      },
      {
        "name": "住房租赁",
        "change_pct": 1.89
      },
      {
        "name": "破净股",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 1.38
      },
      {
        "name": "物业管理",
        "change_pct": 1.97
      },
      {
        "name": "旧改",
        "change_pct": 0.95
      },
      {
        "name": "REITs",
        "change_pct": 0.74
      }
    ]
  },
  {
    "code": "600610",
    "name": "中毅达",
    "hot_rank": 96,
    "hot_rank_chg": 16,
    "stock_cnt": 5850,
    "price": "9.43",
    "change": "4.43",
    "market_id": "17",
    "circulate_market_value": "6683292800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 100,
    "hot_rank_chg": -32,
    "stock_cnt": 5850,
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
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600127", "name": "金健米业", "hot_rank": 1, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "11.77", "change": "9.18", "market_id": "17", "circulate_market_value": "7553788500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.77}, {"name": "农业种植", "change_pct": 3.5}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "休闲食品", "change_pct": 1.5}, {"name": "食品", "change_pct": 0.98}, {"name": "食品安全", "change_pct": 0.07}, {"name": "社区团购", "change_pct": 1.87}, {"name": "大农业", "change_pct": 1.81}, {"name": "预制菜", "change_pct": 1.62}, {"name": "人造肉", "change_pct": 1.79}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "688836", "name": "宇树科技", "hot_rank": 2, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "585.00", "change": "-4.88", "market_id": "17", "circulate_market_value": "17601316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 3, "hot_rank_chg": 13, "stock_cnt": 5850, "price": "4.86", "change": "9.96", "market_id": "33", "circulate_market_value": "10219006900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "创新药", "xgb_concepts": [{"name": "密集调研", "change_pct": -0.01}, {"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "维生素", "change_pct": -0.12}, {"name": "基因测序", "change_pct": -1.13}, {"name": "民营医院", "change_pct": -0.37}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "PD-1抑制剂", "change_pct": -0.02}]}, {"code": "600722", "name": "金牛化工", "hot_rank": 4, "hot_rank_chg": 13, "stock_cnt": 5850, "price": "15.27", "change": "10.01", "market_id": "17", "circulate_market_value": "10388481500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "甲醇提价"}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "58.60", "change": "-0.88", "market_id": "17", "circulate_market_value": "263878080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000017", "name": "深中华A", "hot_rank": 6, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "11.45", "change": "9.99", "market_id": "33", "circulate_market_value": "5047411300.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "黄金珠宝", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 1.37}, {"name": "锂电池", "change_pct": -0.13}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "两轮车", "change_pct": -0.36}, {"name": "珠宝饰品", "change_pct": 2.3}]}, {"code": "600613", "name": "神奇制药", "hot_rank": 7, "hot_rank_chg": -1, "stock_cnt": 5850, "price": "12.40", "change": "6.80", "market_id": "17", "circulate_market_value": "5943567700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药商业", "change_pct": -0.08}, {"name": "医药", "change_pct": -0.81}, {"name": "流感", "change_pct": -0.27}]}, {"code": "601799", "name": "星宇股份", "hot_rank": 9, "hot_rank_chg": 94, "stock_cnt": 5850, "price": "81.48", "change": "-0.46", "market_id": "17", "circulate_market_value": "23277159000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 10, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "9.00", "change": "2.86", "market_id": "17", "circulate_market_value": "22666589000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.95}, {"name": "密集调研", "change_pct": -0.01}, {"name": "工业大麻", "change_pct": 0.49}, {"name": "中药", "change_pct": -0.03}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "保健品", "change_pct": -0.4}, {"name": "民营医院", "change_pct": -0.37}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "流感", "change_pct": -0.27}, {"name": "振兴东北", "change_pct": 0.55}, {"name": "食品", "change_pct": 0.98}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 11, "hot_rank_chg": 43, "stock_cnt": 5850, "price": "2.64", "change": "10.00", "market_id": "33", "circulate_market_value": "6184696600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "净利增长", "xgb_concepts": [{"name": "新零售", "change_pct": 2.22}, {"name": "人工智能", "change_pct": -0.03}, {"name": "VR&AR", "change_pct": -0.36}, {"name": "京津冀", "change_pct": 0.54}, {"name": "装修装饰", "change_pct": 0.95}, {"name": "住房租赁", "change_pct": 1.89}, {"name": "破净股", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "房产经纪", "change_pct": 4.54}, {"name": "物业管理", "change_pct": 1.97}, {"name": "低价股", "change_pct": 1.18}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "AI大模型/智能体", "change_pct": 0.25}]}, {"code": "600227", "name": "赤天化", "hot_rank": 12, "hot_rank_chg": 30, "stock_cnt": 5850, "price": "4.58", "change": "10.10", "market_id": "17", "circulate_market_value": "5851407100.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "中报扭亏", "xgb_concepts": [{"name": "甲醇", "change_pct": 3.83}, {"name": "化肥", "change_pct": 3.11}, {"name": "保健品", "change_pct": -0.4}, {"name": "民营医院", "change_pct": -0.37}, {"name": "医药", "change_pct": -0.81}, {"name": "煤化工", "change_pct": 2.73}, {"name": "食品", "change_pct": 0.98}, {"name": "大农业", "change_pct": 1.81}, {"name": "干细胞", "change_pct": -1.14}, {"name": "阿尔茨海默病", "change_pct": -0.15}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5850, "price": "68.70", "change": "-3.65", "market_id": "17", "circulate_market_value": "168565500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002396", "name": "星网锐捷", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "36.69", "change": "10.02", "market_id": "33", "circulate_market_value": "27789560000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "数据中心交换机"}, {"code": "600378", "name": "昊华科技", "hot_rank": 15, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "53.31", "change": "10.01", "market_id": "17", "circulate_market_value": "57178460000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长"}, {"code": "002354", "name": "天娱数科", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "7.85", "change": "9.94", "market_id": "33", "circulate_market_value": "12771901200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI营销", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.95}, {"name": "电竞", "change_pct": 0.29}, {"name": "手游", "change_pct": 0.33}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "人工智能", "change_pct": -0.03}, {"name": "游戏", "change_pct": 0.24}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "快手概念股", "change_pct": 0.59}, {"name": "元宇宙", "change_pct": 0.27}, {"name": "虚拟数字人", "change_pct": 0.27}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "web3.0", "change_pct": 0.4}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "数据要素", "change_pct": 0.38}, {"name": "字节跳动概念股", "change_pct": 0.52}, {"name": "AI营销", "change_pct": 1.21}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "智能眼镜/MR头显", "change_pct": -0.5}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "人形机器人", "change_pct": -0.91}, {"name": "短剧/互动影游", "change_pct": 0.25}, {"name": "多模态", "change_pct": 0.13}, {"name": "AI视频", "change_pct": 0.39}, {"name": "IP经济/谷子经济", "change_pct": 0.78}, {"name": "小红书概念股", "change_pct": 0.59}]}, {"code": "600103", "name": "青山纸业", "hot_rank": 17, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "3.85", "change": "0.79", "market_id": "17", "circulate_market_value": "8517466800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.82}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "光通信", "change_pct": -1.16}, {"name": "林业", "change_pct": 3.39}, {"name": "军民融合", "change_pct": 0.02}, {"name": "军工", "change_pct": 0.11}, {"name": "人造肉", "change_pct": 1.79}]}, {"code": "600371", "name": "万向德农", "hot_rank": 18, "hot_rank_chg": 22, "stock_cnt": 5850, "price": "11.54", "change": "10.01", "market_id": "17", "circulate_market_value": "3376350100.00", "change_type": "1", "change_section": "9", "change_days": "6", "change_reason": "转基因玉米", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.5}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "转基因", "change_pct": 3.26}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "大农业", "change_pct": 1.81}]}, {"code": "002407", "name": "多氟多", "hot_rank": 19, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "36.94", "change": "5.18", "market_id": "33", "circulate_market_value": "39929122000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 20, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "15.44", "change": "-7.43", "market_id": "17", "circulate_market_value": "5937415500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 21, "hot_rank_chg": 13, "stock_cnt": 5850, "price": "5.36", "change": "10.06", "market_id": "17", "circulate_market_value": "17518828000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报减亏", "xgb_concepts": [{"name": "房地产", "change_pct": 1.33}, {"name": "养老产业", "change_pct": 0.34}, {"name": "粤港澳大湾区", "change_pct": 1.32}, {"name": "民营医院", "change_pct": -0.37}, {"name": "地摊经济", "change_pct": 1.06}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 22, "hot_rank_chg": -18, "stock_cnt": 5850, "price": "35.92", "change": "2.31", "market_id": "17", "circulate_market_value": "24834212000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 23, "hot_rank_chg": 15, "stock_cnt": 5850, "price": "8.37", "change": "9.99", "market_id": "33", "circulate_market_value": "6091396400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "环氧丙烷", "xgb_concepts": [{"name": "冷链", "change_pct": 0.51}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "风电", "change_pct": -0.44}, {"name": "环氧丙烷", "change_pct": 2.52}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "建筑节能", "change_pct": 1.19}, {"name": "旧改", "change_pct": 0.95}]}, {"code": "600479", "name": "千金药业", "hot_rank": 24, "hot_rank_chg": 15, "stock_cnt": 5850, "price": "13.33", "change": "9.98", "market_id": "17", "circulate_market_value": "5578699900.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "业绩增长"}, {"code": "688432", "name": "有研硅", "hot_rank": 25, "hot_rank_chg": 74, "stock_cnt": 5850, "price": "45.22", "change": "-1.67", "market_id": "17", "circulate_market_value": "56538650000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 26, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "22.23", "change": "-5.96", "market_id": "33", "circulate_market_value": "26152901000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 27, "hot_rank_chg": 5, "stock_cnt": 5850, "price": "51.65", "change": "-3.73", "market_id": "17", "circulate_market_value": "43724480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 28, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "18.65", "change": "3.90", "market_id": "17", "circulate_market_value": "41390929000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601700", "name": "风范股份", "hot_rank": 29, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "8.38", "change": "9.97", "market_id": "17", "circulate_market_value": "9542786200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.65}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "光伏", "change_pct": 0.3}, {"name": "特高压", "change_pct": -0.34}, {"name": "智能电网", "change_pct": -0.03}]}, {"code": "002742", "name": "冀衡医药", "hot_rank": 30, "hot_rank_chg": 22, "stock_cnt": 5850, "price": "6.24", "change": "10.05", "market_id": "33", "circulate_market_value": "3269267800.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "医药制造", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.65}, {"name": "ST摘帽", "change_pct": 0.32}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "医药", "change_pct": -0.81}, {"name": "化学原料药", "change_pct": -0.69}, {"name": "幽门螺杆菌概念", "change_pct": 0.43}, {"name": "新冠病毒防治", "change_pct": 0.17}, {"name": "减肥药", "change_pct": -1.55}]}, {"code": "600183", "name": "生益科技", "hot_rank": 31, "hot_rank_chg": -8, "stock_cnt": 5850, "price": "145.65", "change": "3.32", "market_id": "17", "circulate_market_value": "351271220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 32, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "119.95", "change": "-4.21", "market_id": "17", "circulate_market_value": "43268772000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003040", "name": "楚天龙", "hot_rank": 33, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "18.50", "change": "-1.23", "market_id": "33", "circulate_market_value": "8451729800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 34, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "13.13", "change": "-6.35", "market_id": "33", "circulate_market_value": "6536704900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601360", "name": "三六零", "hot_rank": 35, "hot_rank_chg": -7, "stock_cnt": 5850, "price": "9.30", "change": "6.65", "market_id": "17", "circulate_market_value": "65095888000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.23}, {"name": "国产软件", "change_pct": 0.41}, {"name": "手游", "change_pct": 0.33}, {"name": "人工智能", "change_pct": -0.03}, {"name": "网络安全", "change_pct": 0.27}, {"name": "物联网", "change_pct": -0.27}, {"name": "大数据", "change_pct": 0.19}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "智慧安防", "change_pct": 0.42}, {"name": "国产操作系统", "change_pct": 0.92}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "华为海思", "change_pct": -0.14}, {"name": "华为鸿蒙", "change_pct": 0.47}, {"name": "AI营销", "change_pct": 1.21}, {"name": "词元概念/Token", "change_pct": 0.25}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "多模态", "change_pct": 0.13}, {"name": "DeepSeek概念股", "change_pct": 0.51}, {"name": "区块链", "change_pct": 0.26}]}, {"code": "600354", "name": "敦煌种业", "hot_rank": 36, "hot_rank_chg": 30, "stock_cnt": 5850, "price": "8.21", "change": "10.05", "market_id": "17", "circulate_market_value": "4333255100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中报增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.5}, {"name": "棉花", "change_pct": 5.88}, {"name": "大农业", "change_pct": 1.81}, {"name": "供销社", "change_pct": 2.91}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 37, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "11.94", "change": "2.14", "market_id": "17", "circulate_market_value": "21362311000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 1.93}, {"name": "纯碱", "change_pct": 2.94}, {"name": "食品", "change_pct": 0.98}, {"name": "土壤修复", "change_pct": 0.61}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "OpenClaw概念", "change_pct": 0.03}, {"name": "DeepSeek概念股", "change_pct": 0.51}]}, {"code": "002886", "name": "沃特股份", "hot_rank": 38, "hot_rank_chg": 29, "stock_cnt": 5850, "price": "26.40", "change": "10.00", "market_id": "33", "circulate_market_value": "5519663500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PTFE薄膜"}, {"code": "000725", "name": "京东方A", "hot_rank": 39, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "5.92", "change": "-0.34", "market_id": "33", "circulate_market_value": "209373430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.17}, {"name": "手机产业链", "change_pct": -0.69}, {"name": "超高清视频", "change_pct": -0.22}, {"name": "苹果产业链", "change_pct": -1.1}, {"name": "电竞", "change_pct": 0.29}, {"name": "半导体", "change_pct": -1.46}, {"name": "人工智能", "change_pct": -0.03}, {"name": "互联网医疗", "change_pct": -0.15}, {"name": "VR&AR", "change_pct": -0.36}, {"name": "OLED", "change_pct": -0.39}, {"name": "京津冀", "change_pct": 0.54}, {"name": "物联网", "change_pct": -0.27}, {"name": "指纹识别", "change_pct": -1.29}, {"name": "汽车零部件", "change_pct": -0.27}, {"name": "白马股", "change_pct": 0.14}, {"name": "智能制造", "change_pct": -0.27}, {"name": "小米概念股", "change_pct": -0.54}, {"name": "国产芯片", "change_pct": -1.01}, {"name": "液晶面板/LCD", "change_pct": -0.52}, {"name": "全息概念", "change_pct": -0.21}, {"name": "理想汽车概念股", "change_pct": -0.75}, {"name": "MicroLED", "change_pct": -0.78}, {"name": "钙钛矿电池", "change_pct": 0.46}, {"name": "智能手表", "change_pct": -1.01}, {"name": "MiniLED", "change_pct": -0.63}, {"name": "传感器", "change_pct": -0.53}, {"name": "大硅片", "change_pct": -2.42}, {"name": "AI PC", "change_pct": -0.73}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "回购", "change_pct": 0.06}, {"name": "光电共封装CPO", "change_pct": -1.34}, {"name": "智能眼镜/MR头显", "change_pct": -0.5}, {"name": "玻璃基板封装", "change_pct": -0.86}]}, {"code": "301055", "name": "张小泉", "hot_rank": 40, "hot_rank_chg": -19, "stock_cnt": 5850, "price": "30.50", "change": "3.25", "market_id": "33", "circulate_market_value": "4758000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 41, "hot_rank_chg": -30, "stock_cnt": 5850, "price": "55.45", "change": "2.48", "market_id": "33", "circulate_market_value": "63628319000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 42, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "858.35", "change": "-0.90", "market_id": "33", "circulate_market_value": "952715520000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 43, "hot_rank_chg": -10, "stock_cnt": 5850, "price": "5.60", "change": "-1.58", "market_id": "33", "circulate_market_value": "14854283000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.41}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "装修装饰", "change_pct": 0.95}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "航天", "change_pct": -0.23}, {"name": "旧改", "change_pct": 0.95}]}, {"code": "002084", "name": "海鸥住工", "hot_rank": 44, "hot_rank_chg": 44, "stock_cnt": 5850, "price": "5.80", "change": "10.06", "market_id": "33", "circulate_market_value": "3738879800.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "控制权拟变更", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.65}, {"name": "强势人气股", "change_pct": 0.41}, {"name": "装修装饰", "change_pct": 0.95}, {"name": "装配式建筑", "change_pct": 1.05}, {"name": "家具家居", "change_pct": 1.06}, {"name": "复牌股", "change_pct": 0.11}, {"name": "智能制造", "change_pct": -0.27}, {"name": "3D打印", "change_pct": -0.05}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.21}, {"name": "旧改", "change_pct": 0.95}]}, {"code": "605179", "name": "一鸣食品", "hot_rank": 45, "hot_rank_chg": 3, "stock_cnt": 5850, "price": "32.58", "change": "3.36", "market_id": "17", "circulate_market_value": "13064580000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 46, "hot_rank_chg": -9, "stock_cnt": 5850, "price": "43.20", "change": "1.31", "market_id": "17", "circulate_market_value": "171572560000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002155", "name": "湖南黄金", "hot_rank": 47, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "28.92", "change": "7.03", "market_id": "33", "circulate_market_value": "45187469000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 48, "hot_rank_chg": -24, "stock_cnt": 5850, "price": "73.18", "change": "5.43", "market_id": "33", "circulate_market_value": "53072812000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 49, "hot_rank_chg": 29, "stock_cnt": 5850, "price": "34.65", "change": "0.23", "market_id": "17", "circulate_market_value": "713852130000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 50, "hot_rank_chg": 23, "stock_cnt": 5850, "price": "11.80", "change": "9.97", "market_id": "33", "circulate_market_value": "10569662700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "证券业务", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.11}, {"name": "期货概念", "change_pct": -0.69}, {"name": "券商", "change_pct": -0.0}, {"name": "大金融", "change_pct": -0.46}, {"name": "东数西算/算力", "change_pct": -0.11}]}, {"code": "600367", "name": "红星发展", "hot_rank": 51, "hot_rank_chg": 23, "stock_cnt": 5850, "price": "42.10", "change": "3.95", "market_id": "17", "circulate_market_value": "13555071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603395", "name": "红四方", "hot_rank": 52, "hot_rank_chg": 71, "stock_cnt": 5850, "price": "31.00", "change": "5.69", "market_id": "17", "circulate_market_value": "2015000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 53, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "99.66", "change": "-1.68", "market_id": "33", "circulate_market_value": "65078727000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 55, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "35.89", "change": "-1.48", "market_id": "33", "circulate_market_value": "102648008000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 56, "hot_rank_chg": 65, "stock_cnt": 5850, "price": "5.05", "change": "10.02", "market_id": "17", "circulate_market_value": "2935953600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "业绩高增长", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.5}, {"name": "新疆国企改革", "change_pct": 2.53}, {"name": "农垦", "change_pct": 2.85}, {"name": "棉花", "change_pct": 5.88}, {"name": "新疆概念", "change_pct": 1.06}, {"name": "风电", "change_pct": -0.44}, {"name": "大农业", "change_pct": 1.81}, {"name": "国企改革", "change_pct": 0.79}]}, {"code": "002418", "name": "康盛股份", "hot_rank": 57, "hot_rank_chg": -32, "stock_cnt": 5850, "price": "4.90", "change": "-0.20", "market_id": "33", "circulate_market_value": "5568360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": -0.4}, {"name": "锂电池", "change_pct": -0.13}, {"name": "石墨烯", "change_pct": 0.76}, {"name": "新能源整车", "change_pct": 0.61}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "汽车整车", "change_pct": 0.72}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "白色家电", "change_pct": 0.33}, {"name": "家电", "change_pct": 0.16}, {"name": "汽车热管理", "change_pct": -0.67}, {"name": "热泵", "change_pct": -0.21}, {"name": "轮边电机", "change_pct": 0.12}, {"name": "超级电容", "change_pct": -0.54}, {"name": "液冷服务器", "change_pct": -1.32}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 58, "hot_rank_chg": -13, "stock_cnt": 5850, "price": "396.82", "change": "-3.50", "market_id": "17", "circulate_market_value": "266154450000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603011", "name": "合锻智能", "hot_rank": 59, "hot_rank_chg": 0, "stock_cnt": 5850, "price": "27.65", "change": "9.98", "market_id": "17", "circulate_market_value": "13670559000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "PCB层压机"}, {"code": "002229", "name": "鸿博股份", "hot_rank": 60, "hot_rank_chg": 23, "stock_cnt": 5850, "price": "12.29", "change": "10.03", "market_id": "33", "circulate_market_value": "6060989300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "算力租赁", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.63}, {"name": "彩票", "change_pct": 1.19}, {"name": "人工智能", "change_pct": -0.03}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "包装印刷", "change_pct": 0.6}, {"name": "数字经济", "change_pct": 0.38}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "AIGC概念", "change_pct": 0.54}, {"name": "ETC", "change_pct": 0.17}, {"name": "词元概念/Token", "change_pct": 0.25}, {"name": "ChatGPT", "change_pct": 1.06}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "英伟达概念", "change_pct": -0.27}, {"name": "区块链", "change_pct": 0.26}]}, {"code": "603778", "name": "国晟科技", "hot_rank": 61, "hot_rank_chg": 56, "stock_cnt": 5850, "price": "10.36", "change": "9.98", "market_id": "17", "circulate_market_value": "6660000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "业绩改善", "xgb_concepts": [{"name": "园林", "change_pct": 0.17}, {"name": "光伏", "change_pct": 0.3}, {"name": "固态电池", "change_pct": 0.01}, {"name": "异质结电池HJT", "change_pct": 0.11}, {"name": "国资入股", "change_pct": 0.76}]}, {"code": "600654", "name": "中安科", "hot_rank": 62, "hot_rank_chg": 46, "stock_cnt": 5850, "price": "3.63", "change": "10.00", "market_id": "17", "circulate_market_value": "8412277500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半年报增长", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.14}, {"name": "国产软件", "change_pct": 0.41}, {"name": "人工智能", "change_pct": -0.03}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "智慧城市", "change_pct": 0.07}, {"name": "智慧安防", "change_pct": 0.42}, {"name": "东数西算/算力", "change_pct": -0.11}, {"name": "消防", "change_pct": 0.72}, {"name": "医疗信息化", "change_pct": 0.54}, {"name": "传感器", "change_pct": -0.53}, {"name": "华为产业链", "change_pct": -0.13}]}, {"code": "002716", "name": "湖南白银", "hot_rank": 63, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "11.65", "change": "0.43", "market_id": "33", "circulate_market_value": "27056842000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "黄金", "change_pct": 1.2}, {"name": "有色 · 铜", "change_pct": 0.46}, {"name": "有色 · 锑", "change_pct": 3.11}, {"name": "湖南国企改革", "change_pct": 1.41}, {"name": "有色 · 锌", "change_pct": 1.67}, {"name": "有色金属", "change_pct": 0.72}, {"name": "国企改革", "change_pct": 0.79}, {"name": "白银", "change_pct": 2.29}]}, {"code": "300476", "name": "胜宏科技", "hot_rank": 64, "hot_rank_chg": 7, "stock_cnt": 5850, "price": "241.60", "change": "-8.15", "market_id": "33", "circulate_market_value": "209031100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 65, "hot_rank_chg": -29, "stock_cnt": 5850, "price": "429.03", "change": "-0.17", "market_id": "33", "circulate_market_value": "70802415000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 66, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "97.69", "change": "-1.16", "market_id": "33", "circulate_market_value": "155085480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 67, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "35.04", "change": "-2.88", "market_id": "17", "circulate_market_value": "119589756000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600036", "name": "招商银行", "hot_rank": 68, "hot_rank_chg": 80, "stock_cnt": 5850, "price": "39.35", "change": "-0.58", "market_id": "17", "circulate_market_value": "811748960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 69, "hot_rank_chg": -19, "stock_cnt": 5850, "price": "19.53", "change": "-3.03", "market_id": "17", "circulate_market_value": "40847819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603269", "name": "海鸥股份", "hot_rank": 70, "hot_rank_chg": 37, "stock_cnt": 5850, "price": "22.18", "change": "10.02", "market_id": "17", "circulate_market_value": "9580551000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中报增长"}, {"code": "002942", "name": "新农股份", "hot_rank": 71, "hot_rank_chg": 38, "stock_cnt": 5850, "price": "20.91", "change": "9.99", "market_id": "33", "circulate_market_value": "2901431500.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "业绩增长"}, {"code": "000592", "name": "平潭发展", "hot_rank": 72, "hot_rank_chg": -2, "stock_cnt": 5850, "price": "7.01", "change": "2.94", "market_id": "33", "circulate_market_value": "13424798000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.59}, {"name": "林业", "change_pct": 3.39}, {"name": "碳中和", "change_pct": 0.7}, {"name": "自贸区", "change_pct": 1.13}]}, {"code": "002212", "name": "天融信", "hot_rank": 73, "hot_rank_chg": 9, "stock_cnt": 5850, "price": "6.93", "change": "10.00", "market_id": "33", "circulate_market_value": "8086264800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI安全", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 0.23}, {"name": "国产软件", "change_pct": 0.41}, {"name": "一带一路", "change_pct": 0.65}, {"name": "量子通信", "change_pct": 0.63}, {"name": "人工智能", "change_pct": -0.03}, {"name": "网络安全", "change_pct": 0.27}, {"name": "云计算数据中心", "change_pct": -0.39}, {"name": "物联网", "change_pct": -0.27}, {"name": "大数据", "change_pct": 0.19}, {"name": "破净股", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.38}, {"name": "国产芯片", "change_pct": -1.01}, {"name": "阿里巴巴概念股", "change_pct": 0.32}, {"name": "腾讯概念股", "change_pct": 0.15}, {"name": "信创", "change_pct": 0.37}, {"name": "华为昇腾", "change_pct": 0.27}, {"name": "跨境支付", "change_pct": -0.55}, {"name": "web3.0", "change_pct": 0.4}, {"name": "数字人民币", "change_pct": -0.31}, {"name": "智慧政务", "change_pct": 0.43}, {"name": "华为鸿蒙", "change_pct": 0.47}, {"name": "华为云·鲲鹏", "change_pct": 0.98}, {"name": "卫星互联网", "change_pct": -0.58}, {"name": "智慧灯杆", "change_pct": 0.3}, {"name": "华为产业链", "change_pct": -0.13}, {"name": "回购", "change_pct": 0.06}, {"name": "AI大模型/智能体", "change_pct": 0.25}, {"name": "智能电网", "change_pct": -0.03}, {"name": "低空经济", "change_pct": -0.05}, {"name": "量子计算", "change_pct": 1.27}, {"name": "财税改革", "change_pct": 1.88}, {"name": "DeepSeek概念股", "change_pct": 0.51}]}, {"code": "600272", "name": "开开实业", "hot_rank": 74, "hot_rank_chg": -16, "stock_cnt": 5850, "price": "20.29", "change": "-6.50", "market_id": "17", "circulate_market_value": "3246400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000062", "name": "深圳华强", "hot_rank": 75, "hot_rank_chg": -6, "stock_cnt": 5850, "price": "24.85", "change": "10.00", "market_id": "33", "circulate_market_value": "25962333000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "半年报增长"}, {"code": "002594", "name": "比亚迪", "hot_rank": 76, "hot_rank_chg": 50, "stock_cnt": 5850, "price": "92.32", "change": "0.91", "market_id": "33", "circulate_market_value": "321884160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603580", "name": "艾艾精工", "hot_rank": 77, "hot_rank_chg": -5, "stock_cnt": 5850, "price": "83.43", "change": "3.61", "market_id": "17", "circulate_market_value": "10902065100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 78, "hot_rank_chg": -32, "stock_cnt": 5850, "price": "64.04", "change": "0.28", "market_id": "17", "circulate_market_value": "1270815670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 79, "hot_rank_chg": -23, "stock_cnt": 5850, "price": "74.93", "change": "-2.10", "market_id": "17", "circulate_market_value": "134080834000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600785", "name": "新华百货", "hot_rank": 80, "hot_rank_chg": -4, "stock_cnt": 5850, "price": "12.42", "change": "6.61", "market_id": "17", "circulate_market_value": "3923276700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 2.22}, {"name": "冷链", "change_pct": 0.51}, {"name": "宁夏概念", "change_pct": 1.08}, {"name": "IP经济/谷子经济", "change_pct": 0.78}, {"name": "首发经济", "change_pct": 1.24}]}, {"code": "002156", "name": "通富微电", "hot_rank": 81, "hot_rank_chg": -19, "stock_cnt": 5850, "price": "63.75", "change": "0.03", "market_id": "33", "circulate_market_value": "96737579000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 82, "hot_rank_chg": 33, "stock_cnt": 5850, "price": "71.51", "change": "0.55", "market_id": "33", "circulate_market_value": "277567020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 83, "hot_rank_chg": 59, "stock_cnt": 5850, "price": "14.64", "change": "9.99", "market_id": "33", "circulate_market_value": "3604766700.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "折叠屏"}, {"code": "601869", "name": "长飞光纤", "hot_rank": 84, "hot_rank_chg": -33, "stock_cnt": 5850, "price": "422.36", "change": "-1.04", "market_id": "17", "circulate_market_value": "171621050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000657", "name": "中钨高新", "hot_rank": 85, "hot_rank_chg": 21, "stock_cnt": 5850, "price": "66.76", "change": "-1.16", "market_id": "33", "circulate_market_value": "97032456000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000912", "name": "泸天化", "hot_rank": 86, "hot_rank_chg": 122, "stock_cnt": 5850, "price": "4.36", "change": "10.10", "market_id": "33", "circulate_market_value": "6836480000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "化肥", "xgb_concepts": [{"name": "甲醇", "change_pct": 3.83}, {"name": "化肥", "change_pct": 3.11}, {"name": "煤化工", "change_pct": 2.73}, {"name": "大农业", "change_pct": 1.81}]}, {"code": "600313", "name": "农发种业", "hot_rank": 87, "hot_rank_chg": 52, "stock_cnt": 5850, "price": "7.50", "change": "3.73", "market_id": "17", "circulate_market_value": "8116490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": 0.67}, {"name": "农业种植", "change_pct": 3.5}, {"name": "化肥", "change_pct": 3.11}, {"name": "转基因", "change_pct": 3.26}, {"name": "土地流转", "change_pct": 1.77}, {"name": "农垦", "change_pct": 2.85}, {"name": "乡村振兴", "change_pct": 1.53}, {"name": "大农业", "change_pct": 1.81}, {"name": "国企改革", "change_pct": 0.79}, {"name": "大豆", "change_pct": 2.87}]}, {"code": "000002", "name": "万科A", "hot_rank": 88, "hot_rank_chg": 132, "stock_cnt": 5850, "price": "3.16", "change": "1.61", "market_id": "33", "circulate_market_value": "30699758000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "快递物流", "change_pct": 0.96}, {"name": "深圳本地股", "change_pct": 1.37}, {"name": "股权转让", "change_pct": 0.11}, {"name": "房地产", "change_pct": 1.33}, {"name": "养老产业", "change_pct": 0.34}, {"name": "冷链", "change_pct": 0.51}, {"name": "住房租赁", "change_pct": 1.89}, {"name": "破净股", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 1.38}, {"name": "物业管理", "change_pct": 1.97}, {"name": "旧改", "change_pct": 0.95}, {"name": "REITs", "change_pct": 0.74}]}, {"code": "002837", "name": "英维克", "hot_rank": 89, "hot_rank_chg": -34, "stock_cnt": 5850, "price": "64.48", "change": "-2.26", "market_id": "33", "circulate_market_value": "73071321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301591", "name": "肯特股份", "hot_rank": 90, "hot_rank_chg": 20, "stock_cnt": 5850, "price": "57.50", "change": "14.09", "market_id": "33", "circulate_market_value": "2569948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600714", "name": "金瑞矿业", "hot_rank": 91, "hot_rank_chg": 46, "stock_cnt": 5850, "price": "19.12", "change": "10.01", "market_id": "17", "circulate_market_value": "5509930300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "碳酸锶"}, {"code": "002466", "name": "天齐锂业", "hot_rank": 92, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "50.10", "change": "3.88", "market_id": "33", "circulate_market_value": "73940657000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600396", "name": "华电辽能", "hot_rank": 93, "hot_rank_chg": -14, "stock_cnt": 5850, "price": "14.17", "change": "-3.67", "market_id": "17", "circulate_market_value": "20868256000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 94, "hot_rank_chg": -37, "stock_cnt": 5850, "price": "14.42", "change": "-1.30", "market_id": "17", "circulate_market_value": "18519298000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600460", "name": "士兰微", "hot_rank": 95, "hot_rank_chg": -31, "stock_cnt": 5850, "price": "34.17", "change": "-2.04", "market_id": "17", "circulate_market_value": "56861335000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600610", "name": "中毅达", "hot_rank": 96, "hot_rank_chg": 16, "stock_cnt": 5850, "price": "9.43", "change": "4.43", "market_id": "17", "circulate_market_value": "6683292800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000977", "name": "浪潮信息", "hot_rank": 97, "hot_rank_chg": 1, "stock_cnt": 5850, "price": "77.44", "change": "-1.06", "market_id": "33", "circulate_market_value": "113597949000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002714", "name": "牧原股份", "hot_rank": 98, "hot_rank_chg": 80, "stock_cnt": 5850, "price": "41.68", "change": "2.16", "market_id": "33", "circulate_market_value": "136731210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 99, "hot_rank_chg": -12, "stock_cnt": 5850, "price": "16.92", "change": "-1.51", "market_id": "33", "circulate_market_value": "56276369000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600110", "name": "诺德股份", "hot_rank": 100, "hot_rank_chg": -32, "stock_cnt": 5850, "price": "10.94", "change": "-5.69", "market_id": "17", "circulate_market_value": "18982879000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.37}, {"name": "核电", "change_pct": -0.06}, {"name": "锂电池", "change_pct": -0.13}, {"name": "铜箔/覆铜板", "change_pct": -0.45}, {"name": "PCB板", "change_pct": -1.25}, {"name": "中科院系", "change_pct": -0.07}, {"name": "新能源汽车", "change_pct": -0.24}, {"name": "宁德时代概念股", "change_pct": -0.64}, {"name": "固态电池", "change_pct": 0.01}, {"name": "PET复合铜箔", "change_pct": -1.19}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};