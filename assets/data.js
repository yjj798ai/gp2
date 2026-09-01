const UPDATE_TIME = "2026-09-01 01:34";
const THS_HOT = [
  {
    "name": "液冷服务器",
    "rise": -0.54,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886044"
  },
  {
    "name": "AI应用",
    "rise": 0.83,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "连续40天上榜",
    "rankChg": 0,
    "etfName": "软件ETF",
    "code": "886108"
  },
  {
    "name": "AI视频",
    "rise": 1.83,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "创业板软件ETF",
    "code": "886068"
  },
  {
    "name": "PCB概念",
    "rise": -1.14,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续105天上榜",
    "rankChg": 0,
    "etfName": "电子ETF",
    "code": "885959"
  },
  {
    "name": "人工智能",
    "rise": 0.44,
    "rate": 0,
    "tag": "24家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "存储芯片",
    "rise": -0.85,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续235天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "创新药",
    "rise": -0.04,
    "rate": 0,
    "tag": "",
    "hotTag": "连续112天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "AIGC概念",
    "rise": 1.0,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886019"
  },
  {
    "name": "算力租赁",
    "rise": 0.21,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续146天上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "886050"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.12,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续282天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "886033"
  },
  {
    "name": "短剧游戏",
    "rise": 1.59,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886060"
  },
  {
    "name": "光纤概念",
    "rise": -0.81,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续111天上榜",
    "rankChg": 0,
    "etfName": "央企科技ETF",
    "code": "886084"
  },
  {
    "name": "粮食概念",
    "rise": 2.41,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续12天上榜",
    "rankChg": 0,
    "etfName": "粮食ETF",
    "code": "885995"
  },
  {
    "name": "东数西算(算力)",
    "rise": 0.06,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885957"
  },
  {
    "name": "煤化工概念",
    "rise": 0.11,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "化工ETF",
    "code": "885398"
  },
  {
    "name": "数据中心(AIDC)",
    "rise": -0.15,
    "rate": 0,
    "tag": "15家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "云计算ETF",
    "code": "885887"
  },
  {
    "name": "黄金概念",
    "rise": 0.48,
    "rate": 0,
    "tag": "",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "商业航天",
    "rise": -0.39,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续211天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "消费电子概念",
    "rise": -0.61,
    "rate": 0,
    "tag": "13家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885800"
  },
  {
    "name": "人形机器人",
    "rise": -0.13,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "连续446天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  }
];
const THS_EVENTS = [
  {
    "title": "工信部启动人工智能应用服务商培育专项行动",
    "desc": "",
    "heat": 187411,
    "direction": "AI应用",
    "themes": [
      "AI应用",
      "人工智能",
      "AI智能体",
      "多模态AI"
    ],
    "stocks": [
      {
        "name": "芒果超媒",
        "code": "300413",
        "chg": 20.023557
      }
    ]
  },
  {
    "title": "7部门发文推动商品消费扩容升级",
    "desc": "",
    "heat": 159289,
    "direction": "大消费",
    "themes": [
      "零售",
      "消费",
      "乳业",
      "啤酒概念",
      "白酒概念"
    ],
    "stocks": [
      {
        "name": "芒果超媒",
        "code": "300413",
        "chg": 20.023557
      }
    ]
  },
  {
    "title": "液冷市场加速升温 融资资金大幅加仓9股",
    "desc": "",
    "heat": 104247,
    "direction": "液冷",
    "themes": [
      "液冷服务器"
    ],
    "stocks": [
      {
        "name": "四方科技",
        "code": "603339",
        "chg": 5.40721
      }
    ]
  },
  {
    "title": "央视财经：人民币跨境支付覆盖192个国家和地区",
    "desc": "",
    "heat": 58807,
    "direction": "跨境支付（CIPS）",
    "themes": [
      "跨境支付(CIPS)"
    ],
    "stocks": [
      {
        "name": "天融信",
        "code": "002212",
        "chg": 2.611367
      }
    ]
  },
  {
    "title": "电子布龙头已正式上调9月份电子布价格",
    "desc": "",
    "heat": 18417,
    "direction": "电子布涨价",
    "themes": [
      "电子布"
    ],
    "stocks": [
      {
        "name": "中国巨石",
        "code": "600176",
        "chg": 2.435693
      }
    ]
  },
  {
    "title": "24 小时订单超 260 万美元，Hugging Face 机器鸭 Microduck 爆单",
    "desc": "",
    "heat": 10000,
    "direction": "芯片半导体",
    "themes": [
      "芯片概念",
      "半导体",
      "EDA"
    ],
    "stocks": [
      {
        "name": "竞业达",
        "code": "003005",
        "chg": 9.981851
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "林业",
    "change": "+4.33%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "转基因",
    "change": "+3.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农业种植",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大豆",
    "change": "+3.09%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "动漫",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "短剧/互动影游",
    "change": "+2.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "染料",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "影视",
    "change": "+2.74%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "AI营销",
    "change": "+2.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "农垦",
    "change": "+2.51%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "赛马",
    "change": "+2.4%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水产养殖",
    "change": "+2.39%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "快手概念股",
    "change": "+2.2%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "林业碳汇",
    "change": "+2.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "游戏",
    "change": "+2.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "知识付费",
    "change": "+2.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "DRGs概念",
    "change": "+2.04%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "直播/短视频",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "传媒",
    "change": "+2.02%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002081",
    "name": "金螳螂",
    "hot_rank": 5,
    "hot_rank_chg": -3,
    "stock_cnt": 5860,
    "price": "5.81",
    "change": "-5.84",
    "market_id": "33",
    "circulate_market_value": "15384793000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -0.18
      },
      {
        "name": "装修装饰",
        "change_pct": 0.26
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.28
      },
      {
        "name": "航天",
        "change_pct": -0.29
      },
      {
        "name": "旧改",
        "change_pct": 0.22
      }
    ]
  },
  {
    "code": "002418",
    "name": "康盛股份",
    "hot_rank": 8,
    "hot_rank_chg": -2,
    "stock_cnt": 5860,
    "price": "5.49",
    "change": "2.97",
    "market_id": "33",
    "circulate_market_value": "6307020000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "无人驾驶",
        "change_pct": 0.13
      },
      {
        "name": "锂电池",
        "change_pct": -0.23
      },
      {
        "name": "石墨烯",
        "change_pct": -0.39
      },
      {
        "name": "新能源整车",
        "change_pct": 0.86
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.15
      },
      {
        "name": "汽车整车",
        "change_pct": 0.79
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.06
      },
      {
        "name": "白色家电",
        "change_pct": 0.13
      },
      {
        "name": "家电",
        "change_pct": 0.05
      },
      {
        "name": "汽车热管理",
        "change_pct": 0.0
      },
      {
        "name": "热泵",
        "change_pct": -0.08
      },
      {
        "name": "轮边电机",
        "change_pct": 0.25
      },
      {
        "name": "超级电容",
        "change_pct": -0.02
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.5
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 11,
    "hot_rank_chg": 19,
    "stock_cnt": 5860,
    "price": "4.73",
    "change": "10.00",
    "market_id": "33",
    "circulate_market_value": "3362078300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 0.55
      },
      {
        "name": "影视",
        "change_pct": 2.75
      },
      {
        "name": "旅游",
        "change_pct": 1.24
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.75
      },
      {
        "name": "AI营销",
        "change_pct": 2.49
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.73
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.54
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 12,
    "hot_rank_chg": -8,
    "stock_cnt": 5860,
    "price": "12.65",
    "change": "3.90",
    "market_id": "17",
    "circulate_market_value": "8118557700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "乳业（奶粉）",
        "change_pct": 1.18
      },
      {
        "name": "农业种植",
        "change_pct": 3.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.47
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.41
      },
      {
        "name": "休闲食品",
        "change_pct": 0.84
      },
      {
        "name": "食品",
        "change_pct": 0.78
      },
      {
        "name": "食品安全",
        "change_pct": 0.08
      },
      {
        "name": "社区团购",
        "change_pct": 1.53
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      },
      {
        "name": "预制菜",
        "change_pct": 1.36
      },
      {
        "name": "人造肉",
        "change_pct": 1.47
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "600110",
    "name": "诺德股份",
    "hot_rank": 13,
    "hot_rank_chg": 4,
    "stock_cnt": 5860,
    "price": "11.72",
    "change": "-2.58",
    "market_id": "17",
    "circulate_market_value": "20336321000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "特斯拉",
        "change_pct": -0.26
      },
      {
        "name": "核电",
        "change_pct": -0.17
      },
      {
        "name": "锂电池",
        "change_pct": -0.34
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -1.81
      },
      {
        "name": "PCB板",
        "change_pct": -1.55
      },
      {
        "name": "中科院系",
        "change_pct": -0.1
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "宁德时代概念股",
        "change_pct": -0.45
      },
      {
        "name": "固态电池",
        "change_pct": -0.36
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.26
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 14,
    "hot_rank_chg": -5,
    "stock_cnt": 5860,
    "price": "3.13",
    "change": "8.28",
    "market_id": "33",
    "circulate_market_value": "7356040700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.91
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "VR&AR",
        "change_pct": -0.07
      },
      {
        "name": "京津冀",
        "change_pct": 0.48
      },
      {
        "name": "装修装饰",
        "change_pct": 0.27
      },
      {
        "name": "住房租赁",
        "change_pct": -0.03
      },
      {
        "name": "破净股",
        "change_pct": 0.49
      },
      {
        "name": "数字经济",
        "change_pct": 0.74
      },
      {
        "name": "房产经纪",
        "change_pct": 2.0
      },
      {
        "name": "物业管理",
        "change_pct": 0.33
      },
      {
        "name": "低价股",
        "change_pct": 0.54
      },
      {
        "name": "华为产业链",
        "change_pct": 0.06
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.73
      }
    ]
  },
  {
    "code": "600227",
    "name": "赤天化",
    "hot_rank": 15,
    "hot_rank_chg": -2,
    "stock_cnt": 5860,
    "price": "5.15",
    "change": "2.18",
    "market_id": "17",
    "circulate_market_value": "6579639000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.43
      },
      {
        "name": "化肥",
        "change_pct": 0.98
      },
      {
        "name": "保健品",
        "change_pct": 0.35
      },
      {
        "name": "民营医院",
        "change_pct": 0.38
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "煤化工",
        "change_pct": 0.12
      },
      {
        "name": "食品",
        "change_pct": 0.78
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      },
      {
        "name": "干细胞",
        "change_pct": 0.1
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 0.26
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 17,
    "hot_rank_chg": 5,
    "stock_cnt": 5860,
    "price": "8.22",
    "change": "2.24",
    "market_id": "33",
    "circulate_market_value": "13357618900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.88
      },
      {
        "name": "电竞",
        "change_pct": 0.65
      },
      {
        "name": "手游",
        "change_pct": 1.88
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "游戏",
        "change_pct": 1.88
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.74
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.65
      },
      {
        "name": "快手概念股",
        "change_pct": 2.02
      },
      {
        "name": "元宇宙",
        "change_pct": 1.17
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.75
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.18
      },
      {
        "name": "web3.0",
        "change_pct": 1.43
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.47
      },
      {
        "name": "数据要素",
        "change_pct": 1.09
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.52
      },
      {
        "name": "AI营销",
        "change_pct": 2.49
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.01
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.38
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.73
      },
      {
        "name": "人形机器人",
        "change_pct": -0.28
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.54
      },
      {
        "name": "多模态",
        "change_pct": 1.62
      },
      {
        "name": "AI视频",
        "change_pct": 0.92
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.39
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.77
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 20,
    "hot_rank_chg": 8,
    "stock_cnt": 5860,
    "price": "10.04",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "4812372600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "医药商业",
        "change_pct": 0.67
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "流感",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "000712",
    "name": "锦龙股份",
    "hot_rank": 22,
    "hot_rank_chg": 4,
    "stock_cnt": 5860,
    "price": "11.68",
    "change": "-10.02",
    "market_id": "33",
    "circulate_market_value": "10462174600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": 0.1
      },
      {
        "name": "期货概念",
        "change_pct": 0.61
      },
      {
        "name": "券商",
        "change_pct": -0.35
      },
      {
        "name": "大金融",
        "change_pct": 0.44
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.18
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 28,
    "hot_rank_chg": -18,
    "stock_cnt": 5860,
    "price": "9.24",
    "change": "1.32",
    "market_id": "17",
    "circulate_market_value": "23271031000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.88
      },
      {
        "name": "工业大麻",
        "change_pct": 0.02
      },
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "保健品",
        "change_pct": 0.35
      },
      {
        "name": "民营医院",
        "change_pct": 0.38
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "化学原料药",
        "change_pct": 0.01
      },
      {
        "name": "流感",
        "change_pct": -0.12
      },
      {
        "name": "振兴东北",
        "change_pct": 0.72
      },
      {
        "name": "食品",
        "change_pct": 0.78
      }
    ]
  },
  {
    "code": "002084",
    "name": "海鸥住工",
    "hot_rank": 32,
    "hot_rank_chg": 15,
    "stock_cnt": 5860,
    "price": "7.02",
    "change": "10.03",
    "market_id": "33",
    "circulate_market_value": "4525333800.00",
    "change_type": "1",
    "change_section": "7",
    "change_days": "7",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "装修装饰",
        "change_pct": 0.27
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.23
      },
      {
        "name": "家具家居",
        "change_pct": 0.61
      },
      {
        "name": "智能制造",
        "change_pct": -0.19
      },
      {
        "name": "3D打印",
        "change_pct": -0.6
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "热泵",
        "change_pct": -0.07
      },
      {
        "name": "旧改",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 33,
    "hot_rank_chg": -2,
    "stock_cnt": 5860,
    "price": "12.65",
    "change": "-8.78",
    "market_id": "17",
    "circulate_market_value": "4864527600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.23
      },
      {
        "name": "股权转让",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "新疆概念",
        "change_pct": 0.76
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "流感",
        "change_pct": -0.12
      },
      {
        "name": "国资入股",
        "change_pct": 0.36
      },
      {
        "name": "减肥药",
        "change_pct": -0.36
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 34,
    "hot_rank_chg": -2,
    "stock_cnt": 5860,
    "price": "5.96",
    "change": "-0.83",
    "market_id": "33",
    "circulate_market_value": "210788120000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -1.04
      },
      {
        "name": "手机产业链",
        "change_pct": -0.71
      },
      {
        "name": "超高清视频",
        "change_pct": 0.26
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.84
      },
      {
        "name": "电竞",
        "change_pct": 0.65
      },
      {
        "name": "半导体",
        "change_pct": -0.65
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "互联网医疗",
        "change_pct": 0.96
      },
      {
        "name": "VR&AR",
        "change_pct": -0.07
      },
      {
        "name": "OLED",
        "change_pct": -0.67
      },
      {
        "name": "京津冀",
        "change_pct": 0.48
      },
      {
        "name": "物联网",
        "change_pct": 0.25
      },
      {
        "name": "指纹识别",
        "change_pct": -0.5
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.24
      },
      {
        "name": "白马股",
        "change_pct": 0.06
      },
      {
        "name": "智能制造",
        "change_pct": -0.19
      },
      {
        "name": "小米概念股",
        "change_pct": -0.42
      },
      {
        "name": "国产芯片",
        "change_pct": -0.49
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.82
      },
      {
        "name": "全息概念",
        "change_pct": 0.56
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.24
      },
      {
        "name": "MicroLED",
        "change_pct": -1.03
      },
      {
        "name": "钙钛矿电池",
        "change_pct": -0.71
      },
      {
        "name": "智能手表",
        "change_pct": -0.32
      },
      {
        "name": "MiniLED",
        "change_pct": -0.93
      },
      {
        "name": "传感器",
        "change_pct": -0.34
      },
      {
        "name": "大硅片",
        "change_pct": -0.89
      },
      {
        "name": "AI PC",
        "change_pct": -0.72
      },
      {
        "name": "华为产业链",
        "change_pct": 0.06
      },
      {
        "name": "回购",
        "change_pct": -0.05
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.19
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.38
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -1.25
      }
    ]
  },
  {
    "code": "002141",
    "name": "贤丰控股",
    "hot_rank": 35,
    "hot_rank_chg": 6,
    "stock_cnt": 5860,
    "price": "6.93",
    "change": "-2.54",
    "market_id": "33",
    "circulate_market_value": "7147915700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 0.32
      },
      {
        "name": "锂电池",
        "change_pct": -0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "铜箔/覆铜板",
        "change_pct": -1.81
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.65
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "横琴新区",
        "change_pct": 0.71
      }
    ]
  },
  {
    "code": "600162",
    "name": "香江控股",
    "hot_rank": 39,
    "hot_rank_chg": -25,
    "stock_cnt": 5860,
    "price": "4.93",
    "change": "-0.60",
    "market_id": "17",
    "circulate_market_value": "16113400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "房地产",
        "change_pct": -0.13
      },
      {
        "name": "养老产业",
        "change_pct": 0.32
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.65
      },
      {
        "name": "民营医院",
        "change_pct": 0.38
      },
      {
        "name": "地摊经济",
        "change_pct": 1.31
      }
    ]
  },
  {
    "code": "600103",
    "name": "青山纸业",
    "hot_rank": 43,
    "hot_rank_chg": -5,
    "stock_cnt": 5860,
    "price": "3.80",
    "change": "0.00",
    "market_id": "17",
    "circulate_market_value": "8406850400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "造纸",
        "change_pct": 0.23
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.24
      },
      {
        "name": "光通信",
        "change_pct": -1.2
      },
      {
        "name": "林业",
        "change_pct": 4.05
      },
      {
        "name": "军民融合",
        "change_pct": -0.16
      },
      {
        "name": "军工",
        "change_pct": -0.09
      },
      {
        "name": "人造肉",
        "change_pct": 1.47
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 46,
    "hot_rank_chg": 22,
    "stock_cnt": 5860,
    "price": "10.09",
    "change": "10.03",
    "market_id": "17",
    "circulate_market_value": "6719940000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": 1.91
      }
    ]
  },
  {
    "code": "002131",
    "name": "利欧股份",
    "hot_rank": 47,
    "hot_rank_chg": 8,
    "stock_cnt": 5860,
    "price": "4.95",
    "change": "4.21",
    "market_id": "33",
    "circulate_market_value": "28981245000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.03
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.24
      },
      {
        "name": "水利",
        "change_pct": 0.77
      },
      {
        "name": "直播/短视频",
        "change_pct": 1.92
      },
      {
        "name": "大数据",
        "change_pct": 0.63
      },
      {
        "name": "园林",
        "change_pct": 0.68
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "小米概念股",
        "change_pct": -0.42
      },
      {
        "name": "数字经济",
        "change_pct": 0.74
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.65
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 0.24
      },
      {
        "name": "第三代半导体",
        "change_pct": -0.81
      },
      {
        "name": "快手概念股",
        "change_pct": 2.02
      },
      {
        "name": "IGBT",
        "change_pct": -0.55
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.75
      },
      {
        "name": "AIGC概念",
        "change_pct": 1.47
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 1.52
      },
      {
        "name": "氮化镓",
        "change_pct": -0.73
      },
      {
        "name": "AI营销",
        "change_pct": 2.49
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.73
      },
      {
        "name": "多模态",
        "change_pct": 1.62
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.59
      },
      {
        "name": "小红书概念股",
        "change_pct": 1.77
      },
      {
        "name": "区块链",
        "change_pct": 1.01
      }
    ]
  },
  {
    "code": "000017",
    "name": "深中华A",
    "hot_rank": 48,
    "hot_rank_chg": -4,
    "stock_cnt": 5860,
    "price": "11.58",
    "change": "2.94",
    "market_id": "33",
    "circulate_market_value": "5087085300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.1
      },
      {
        "name": "锂电池",
        "change_pct": -0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "两轮车",
        "change_pct": -0.02
      },
      {
        "name": "珠宝饰品",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 53,
    "hot_rank_chg": -14,
    "stock_cnt": 5860,
    "price": "4.27",
    "change": "-1.83",
    "market_id": "33",
    "circulate_market_value": "9020481400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": 0.08
      },
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "维生素",
        "change_pct": 0.22
      },
      {
        "name": "基因测序",
        "change_pct": 0.12
      },
      {
        "name": "民营医院",
        "change_pct": 0.38
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "化学原料药",
        "change_pct": 0.01
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": -0.37
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 57,
    "hot_rank_chg": 1,
    "stock_cnt": 5860,
    "price": "4.92",
    "change": "0.20",
    "market_id": "17",
    "circulate_market_value": "5994587200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 0.48
      },
      {
        "name": "煤炭",
        "change_pct": 0.1
      },
      {
        "name": "有色金属",
        "change_pct": 0.03
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 58,
    "hot_rank_chg": 27,
    "stock_cnt": 5860,
    "price": "5.70",
    "change": "1.96",
    "market_id": "33",
    "circulate_market_value": "6651486700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 2.51
      },
      {
        "name": "新疆概念",
        "change_pct": 0.76
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.77
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.65
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 2.54
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "600551",
    "name": "时代出版",
    "hot_rank": 59,
    "hot_rank_chg": 25,
    "stock_cnt": 5860,
    "price": "9.08",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "6156741600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.59
      },
      {
        "name": "安徽国企改革",
        "change_pct": 0.55
      },
      {
        "name": "教育",
        "change_pct": 0.88
      },
      {
        "name": "破净股",
        "change_pct": 0.49
      },
      {
        "name": "传媒",
        "change_pct": 1.94
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      },
      {
        "name": "在线教育",
        "change_pct": 0.77
      }
    ]
  },
  {
    "code": "002165",
    "name": "红宝丽",
    "hot_rank": 66,
    "hot_rank_chg": -32,
    "stock_cnt": 5860,
    "price": "8.71",
    "change": "1.28",
    "market_id": "33",
    "circulate_market_value": "6331558900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "冷链",
        "change_pct": 0.36
      },
      {
        "name": "装配式建筑",
        "change_pct": 0.23
      },
      {
        "name": "风电",
        "change_pct": -0.06
      },
      {
        "name": "环氧丙烷",
        "change_pct": 0.25
      },
      {
        "name": "乡村振兴",
        "change_pct": 1.41
      },
      {
        "name": "建筑节能",
        "change_pct": 0.52
      },
      {
        "name": "旧改",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600540",
    "name": "新赛股份",
    "hot_rank": 68,
    "hot_rank_chg": 7,
    "stock_cnt": 5860,
    "price": "6.12",
    "change": "10.07",
    "market_id": "17",
    "circulate_market_value": "3558027000.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 3.22
      },
      {
        "name": "新疆国企改革",
        "change_pct": 1.11
      },
      {
        "name": "农垦",
        "change_pct": 2.61
      },
      {
        "name": "棉花",
        "change_pct": 2.56
      },
      {
        "name": "新疆概念",
        "change_pct": 0.76
      },
      {
        "name": "风电",
        "change_pct": -0.06
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "601700",
    "name": "风范股份",
    "hot_rank": 69,
    "hot_rank_chg": -12,
    "stock_cnt": 5860,
    "price": "8.10",
    "change": "1.50",
    "market_id": "17",
    "circulate_market_value": "9223934100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "一带一路",
        "change_pct": 0.34
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "光伏",
        "change_pct": -0.42
      },
      {
        "name": "特高压",
        "change_pct": -0.34
      },
      {
        "name": "智能电网",
        "change_pct": -0.11
      }
    ]
  },
  {
    "code": "600403",
    "name": "大有能源",
    "hot_rank": 76,
    "hot_rank_chg": -28,
    "stock_cnt": 5860,
    "price": "7.62",
    "change": "-0.78",
    "market_id": "17",
    "circulate_market_value": "18217991000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.1
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.63
      }
    ]
  },
  {
    "code": "002412",
    "name": "汉森制药",
    "hot_rank": 79,
    "hot_rank_chg": -1,
    "stock_cnt": 5860,
    "price": "10.88",
    "change": "-7.78",
    "market_id": "33",
    "circulate_market_value": "5426510500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.59
      },
      {
        "name": "农业种植",
        "change_pct": 3.22
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "流感",
        "change_pct": -0.12
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      }
    ]
  },
  {
    "code": "002328",
    "name": "新朋股份",
    "hot_rank": 80,
    "hot_rank_chg": 36,
    "stock_cnt": 5860,
    "price": "8.89",
    "change": "4.59",
    "market_id": "33",
    "circulate_market_value": "5073397600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": 0.14
      },
      {
        "name": "特斯拉",
        "change_pct": -0.26
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.24
      },
      {
        "name": "汽车零部件",
        "change_pct": 0.24
      },
      {
        "name": "新能源汽车",
        "change_pct": -0.13
      },
      {
        "name": "储能",
        "change_pct": -0.25
      },
      {
        "name": "新能源车零部件",
        "change_pct": -0.06
      },
      {
        "name": "液冷服务器",
        "change_pct": -0.59
      }
    ]
  },
  {
    "code": "601929",
    "name": "吉视传媒",
    "hot_rank": 84,
    "hot_rank_chg": 37,
    "stock_cnt": 5860,
    "price": "2.59",
    "change": "0.78",
    "market_id": "17",
    "circulate_market_value": "9038551400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "广电",
        "change_pct": 0.64
      },
      {
        "name": "超高清视频",
        "change_pct": 0.26
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.24
      },
      {
        "name": "影视",
        "change_pct": 2.51
      },
      {
        "name": "智慧城市",
        "change_pct": 0.33
      },
      {
        "name": "国产芯片",
        "change_pct": -0.49
      },
      {
        "name": "振兴东北",
        "change_pct": 0.72
      },
      {
        "name": "传媒",
        "change_pct": 1.94
      },
      {
        "name": "低价股",
        "change_pct": 0.54
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      },
      {
        "name": "在线教育",
        "change_pct": 0.77
      },
      {
        "name": "医疗信息化",
        "change_pct": 0.99
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.73
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 1.39
      }
    ]
  },
  {
    "code": "603466",
    "name": "风语筑",
    "hot_rank": 86,
    "hot_rank_chg": -4,
    "stock_cnt": 5860,
    "price": "11.89",
    "change": "0.51",
    "market_id": "17",
    "circulate_market_value": "7072510800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "数字孪生",
        "change_pct": 0.65
      },
      {
        "name": "VR&AR",
        "change_pct": -0.07
      },
      {
        "name": "装修装饰",
        "change_pct": 0.27
      },
      {
        "name": "数字经济",
        "change_pct": 0.74
      },
      {
        "name": "百度概念股",
        "change_pct": 1.15
      },
      {
        "name": "全息概念",
        "change_pct": 0.56
      },
      {
        "name": "NFT",
        "change_pct": 1.83
      },
      {
        "name": "元宇宙",
        "change_pct": 1.17
      },
      {
        "name": "虚拟数字人",
        "change_pct": 1.75
      },
      {
        "name": "网红/MCN",
        "change_pct": 1.31
      },
      {
        "name": "ChatGPT",
        "change_pct": 1.01
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.38
      },
      {
        "name": "多模态",
        "change_pct": 1.62
      },
      {
        "name": "AI视频",
        "change_pct": 0.92
      }
    ]
  },
  {
    "code": "000801",
    "name": "四川九洲",
    "hot_rank": 91,
    "hot_rank_chg": 188,
    "stock_cnt": 5860,
    "price": "12.73",
    "change": "1.11",
    "market_id": "33",
    "circulate_market_value": "12912597100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "超高清视频",
        "change_pct": 0.26
      },
      {
        "name": "通用航空",
        "change_pct": 0.03
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "大飞机",
        "change_pct": -0.18
      },
      {
        "name": "军民融合",
        "change_pct": -0.16
      },
      {
        "name": "PCB板",
        "change_pct": -1.55
      },
      {
        "name": "军工",
        "change_pct": -0.09
      },
      {
        "name": "黑色家电",
        "change_pct": -0.1
      },
      {
        "name": "家电",
        "change_pct": 0.05
      },
      {
        "name": "智慧物流",
        "change_pct": 0.17
      },
      {
        "name": "无人机",
        "change_pct": -0.12
      },
      {
        "name": "智能制造",
        "change_pct": -0.19
      },
      {
        "name": "食品安全",
        "change_pct": 0.08
      },
      {
        "name": "华为海思",
        "change_pct": -0.1
      },
      {
        "name": "卫星互联网",
        "change_pct": -0.62
      },
      {
        "name": "华为产业链",
        "change_pct": 0.06
      },
      {
        "name": "回购",
        "change_pct": -0.05
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": -0.06
      },
      {
        "name": "低空经济",
        "change_pct": -0.05
      },
      {
        "name": "军工信息化",
        "change_pct": 0.04
      }
    ]
  },
  {
    "code": "600186",
    "name": "莲花控股",
    "hot_rank": 92,
    "hot_rank_chg": -18,
    "stock_cnt": 5860,
    "price": "11.76",
    "change": "1.99",
    "market_id": "17",
    "circulate_market_value": "21040266000.00",
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
        "change_pct": 0.55
      },
      {
        "name": "食品",
        "change_pct": 0.78
      },
      {
        "name": "土壤修复",
        "change_pct": 0.35
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.18
      },
      {
        "name": "OpenClaw概念",
        "change_pct": 0.78
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.99
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 96,
    "hot_rank_chg": 0,
    "stock_cnt": 5860,
    "price": "9.35",
    "change": "-7.25",
    "market_id": "33",
    "circulate_market_value": "4917281600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.1
      },
      {
        "name": "房地产",
        "change_pct": -0.13
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 0.65
      },
      {
        "name": "住房租赁",
        "change_pct": -0.03
      },
      {
        "name": "物业管理",
        "change_pct": 0.33
      },
      {
        "name": "新型城镇化",
        "change_pct": 0.35
      },
      {
        "name": "旧改",
        "change_pct": 0.33
      }
    ]
  },
  {
    "code": "600691",
    "name": "潞化科技",
    "hot_rank": 97,
    "hot_rank_chg": 1,
    "stock_cnt": 5860,
    "price": "3.11",
    "change": "-3.41",
    "market_id": "17",
    "circulate_market_value": "7388072300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "甲醇",
        "change_pct": -0.43
      },
      {
        "name": "化肥",
        "change_pct": 0.98
      },
      {
        "name": "山西国企改革",
        "change_pct": 0.43
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -0.03
      },
      {
        "name": "烧碱",
        "change_pct": 0.71
      },
      {
        "name": "PVC",
        "change_pct": 0.76
      },
      {
        "name": "煤化工",
        "change_pct": 0.12
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      },
      {
        "name": "丁辛醇",
        "change_pct": 0.56
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 98,
    "hot_rank_chg": 7,
    "stock_cnt": 5860,
    "price": "11.17",
    "change": "1.64",
    "market_id": "33",
    "circulate_market_value": "3166280300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "ST摘帽",
        "change_pct": 0.68
      },
      {
        "name": "强势人气股",
        "change_pct": -0.19
      },
      {
        "name": "教育",
        "change_pct": 0.88
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.77
      },
      {
        "name": "职业教育",
        "change_pct": 1.1
      },
      {
        "name": "在线教育",
        "change_pct": 0.77
      },
      {
        "name": "华为鸿蒙",
        "change_pct": 0.89
      },
      {
        "name": "华为产业链",
        "change_pct": 0.06
      },
      {
        "name": "智谱AI",
        "change_pct": 0.66
      }
    ]
  },
  {
    "code": "600479",
    "name": "千金药业",
    "hot_rank": 100,
    "hot_rank_chg": -48,
    "stock_cnt": 5860,
    "price": "12.20",
    "change": "0.58",
    "market_id": "17",
    "circulate_market_value": "5114157000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": 0.21
      },
      {
        "name": "中药",
        "change_pct": 0.04
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 0.59
      },
      {
        "name": "农业种植",
        "change_pct": 3.22
      },
      {
        "name": "人工智能",
        "change_pct": 0.51
      },
      {
        "name": "湖南国企改革",
        "change_pct": 1.47
      },
      {
        "name": "医药",
        "change_pct": -0.07
      },
      {
        "name": "流感",
        "change_pct": -0.12
      },
      {
        "name": "大农业",
        "change_pct": 1.08
      },
      {
        "name": "国企改革",
        "change_pct": 0.47
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600176", "name": "中国巨石", "hot_rank": 1, "hot_rank_chg": 17, "stock_cnt": 5860, "price": "45.28", "change": "2.69", "market_id": "17", "circulate_market_value": "179833460000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000977", "name": "浪潮信息", "hot_rank": 2, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "85.84", "change": "0.90", "market_id": "33", "circulate_market_value": "126081401000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 3, "hot_rank_chg": 17, "stock_cnt": 5860, "price": "20.38", "change": "20.02", "market_id": "33", "circulate_market_value": "20822245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 4, "hot_rank_chg": -1, "stock_cnt": 5860, "price": "559.08", "change": "-1.03", "market_id": "17", "circulate_market_value": "16821442000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002081", "name": "金螳螂", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5860, "price": "5.81", "change": "-5.84", "market_id": "33", "circulate_market_value": "15384793000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -0.18}, {"name": "装修装饰", "change_pct": 0.26}, {"name": "装配式建筑", "change_pct": 0.28}, {"name": "航天", "change_pct": -0.29}, {"name": "旧改", "change_pct": 0.22}]}, {"code": "002396", "name": "星网锐捷", "hot_rank": 6, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "39.35", "change": "-1.88", "market_id": "33", "circulate_market_value": "29857303000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600722", "name": "金牛化工", "hot_rank": 7, "hot_rank_chg": -6, "stock_cnt": 5860, "price": "17.49", "change": "4.11", "market_id": "17", "circulate_market_value": "11898791100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002418", "name": "康盛股份", "hot_rank": 8, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "5.49", "change": "2.97", "market_id": "33", "circulate_market_value": "6307020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "无人驾驶", "change_pct": 0.13}, {"name": "锂电池", "change_pct": -0.23}, {"name": "石墨烯", "change_pct": -0.39}, {"name": "新能源整车", "change_pct": 0.86}, {"name": "云计算数据中心", "change_pct": -0.15}, {"name": "汽车整车", "change_pct": 0.79}, {"name": "新能源汽车", "change_pct": -0.06}, {"name": "白色家电", "change_pct": 0.13}, {"name": "家电", "change_pct": 0.05}, {"name": "汽车热管理", "change_pct": 0.0}, {"name": "热泵", "change_pct": -0.08}, {"name": "轮边电机", "change_pct": 0.25}, {"name": "超级电容", "change_pct": -0.02}, {"name": "液冷服务器", "change_pct": -0.5}]}, {"code": "300364", "name": "中文在线", "hot_rank": 9, "hot_rank_chg": 6, "stock_cnt": 5860, "price": "29.37", "change": "7.33", "market_id": "33", "circulate_market_value": "19416086000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000938", "name": "紫光股份", "hot_rank": 10, "hot_rank_chg": 1, "stock_cnt": 5860, "price": "38.87", "change": "-0.18", "market_id": "33", "circulate_market_value": "111199626000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 11, "hot_rank_chg": 19, "stock_cnt": 5860, "price": "4.73", "change": "10.00", "market_id": "33", "circulate_market_value": "3362078300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 0.55}, {"name": "影视", "change_pct": 2.75}, {"name": "旅游", "change_pct": 1.24}, {"name": "虚拟数字人", "change_pct": 1.75}, {"name": "AI营销", "change_pct": 2.49}, {"name": "AI大模型/智能体", "change_pct": 0.73}, {"name": "短剧/互动影游", "change_pct": 2.54}, {"name": "IP经济/谷子经济", "change_pct": 1.39}]}, {"code": "600127", "name": "金健米业", "hot_rank": 12, "hot_rank_chg": -8, "stock_cnt": 5860, "price": "12.65", "change": "3.90", "market_id": "17", "circulate_market_value": "8118557700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "乳业（奶粉）", "change_pct": 1.18}, {"name": "农业种植", "change_pct": 3.22}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "湖南国企改革", "change_pct": 1.47}, {"name": "乡村振兴", "change_pct": 1.41}, {"name": "休闲食品", "change_pct": 0.84}, {"name": "食品", "change_pct": 0.78}, {"name": "食品安全", "change_pct": 0.08}, {"name": "社区团购", "change_pct": 1.53}, {"name": "大农业", "change_pct": 1.08}, {"name": "预制菜", "change_pct": 1.36}, {"name": "人造肉", "change_pct": 1.47}, {"name": "国企改革", "change_pct": 0.47}]}, {"code": "600110", "name": "诺德股份", "hot_rank": 13, "hot_rank_chg": 4, "stock_cnt": 5860, "price": "11.72", "change": "-2.58", "market_id": "17", "circulate_market_value": "20336321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "特斯拉", "change_pct": -0.26}, {"name": "核电", "change_pct": -0.17}, {"name": "锂电池", "change_pct": -0.34}, {"name": "铜箔/覆铜板", "change_pct": -1.81}, {"name": "PCB板", "change_pct": -1.55}, {"name": "中科院系", "change_pct": -0.1}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "宁德时代概念股", "change_pct": -0.45}, {"name": "固态电池", "change_pct": -0.36}, {"name": "PET复合铜箔", "change_pct": -1.26}]}, {"code": "000560", "name": "我爱我家", "hot_rank": 14, "hot_rank_chg": -5, "stock_cnt": 5860, "price": "3.13", "change": "8.28", "market_id": "33", "circulate_market_value": "7356040700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.91}, {"name": "人工智能", "change_pct": 0.51}, {"name": "VR&AR", "change_pct": -0.07}, {"name": "京津冀", "change_pct": 0.48}, {"name": "装修装饰", "change_pct": 0.27}, {"name": "住房租赁", "change_pct": -0.03}, {"name": "破净股", "change_pct": 0.49}, {"name": "数字经济", "change_pct": 0.74}, {"name": "房产经纪", "change_pct": 2.0}, {"name": "物业管理", "change_pct": 0.33}, {"name": "低价股", "change_pct": 0.54}, {"name": "华为产业链", "change_pct": 0.06}, {"name": "AI大模型/智能体", "change_pct": 0.73}]}, {"code": "600227", "name": "赤天化", "hot_rank": 15, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "5.15", "change": "2.18", "market_id": "17", "circulate_market_value": "6579639000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.43}, {"name": "化肥", "change_pct": 0.98}, {"name": "保健品", "change_pct": 0.35}, {"name": "民营医院", "change_pct": 0.38}, {"name": "医药", "change_pct": -0.07}, {"name": "煤化工", "change_pct": 0.12}, {"name": "食品", "change_pct": 0.78}, {"name": "大农业", "change_pct": 1.08}, {"name": "干细胞", "change_pct": 0.1}, {"name": "阿尔茨海默病", "change_pct": 0.26}]}, {"code": "603533", "name": "掌阅科技", "hot_rank": 16, "hot_rank_chg": 29, "stock_cnt": 5860, "price": "24.85", "change": "10.00", "market_id": "17", "circulate_market_value": "10906586300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 17, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "8.22", "change": "2.24", "market_id": "33", "circulate_market_value": "13357618900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.88}, {"name": "电竞", "change_pct": 0.65}, {"name": "手游", "change_pct": 1.88}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "人工智能", "change_pct": 0.51}, {"name": "游戏", "change_pct": 1.88}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.74}, {"name": "腾讯概念股", "change_pct": 0.65}, {"name": "快手概念股", "change_pct": 2.02}, {"name": "元宇宙", "change_pct": 1.17}, {"name": "虚拟数字人", "change_pct": 1.75}, {"name": "东数西算/算力", "change_pct": 0.18}, {"name": "web3.0", "change_pct": 1.43}, {"name": "AIGC概念", "change_pct": 1.47}, {"name": "数据要素", "change_pct": 1.09}, {"name": "字节跳动概念股", "change_pct": 1.52}, {"name": "AI营销", "change_pct": 2.49}, {"name": "ChatGPT", "change_pct": 1.01}, {"name": "智能眼镜/MR头显", "change_pct": -0.38}, {"name": "AI大模型/智能体", "change_pct": 0.73}, {"name": "人形机器人", "change_pct": -0.28}, {"name": "短剧/互动影游", "change_pct": 2.54}, {"name": "多模态", "change_pct": 1.62}, {"name": "AI视频", "change_pct": 0.92}, {"name": "IP经济/谷子经济", "change_pct": 1.39}, {"name": "小红书概念股", "change_pct": 1.77}]}, {"code": "002837", "name": "英维克", "hot_rank": 18, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "66.89", "change": "-2.01", "market_id": "33", "circulate_market_value": "75813762000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603893", "name": "瑞芯微", "hot_rank": 19, "hot_rank_chg": 34, "stock_cnt": 5860, "price": "207.50", "change": "6.63", "market_id": "17", "circulate_market_value": "87791082000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 20, "hot_rank_chg": 8, "stock_cnt": 5860, "price": "10.04", "change": "-10.04", "market_id": "17", "circulate_market_value": "4812372600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "医药商业", "change_pct": 0.67}, {"name": "医药", "change_pct": -0.07}, {"name": "流感", "change_pct": -0.12}]}, {"code": "603269", "name": "海鸥股份", "hot_rank": 21, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "25.77", "change": "5.62", "market_id": "17", "circulate_market_value": "11131235300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000712", "name": "锦龙股份", "hot_rank": 22, "hot_rank_chg": 4, "stock_cnt": 5860, "price": "11.68", "change": "-10.02", "market_id": "33", "circulate_market_value": "10462174600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": 0.1}, {"name": "期货概念", "change_pct": 0.61}, {"name": "券商", "change_pct": -0.35}, {"name": "大金融", "change_pct": 0.44}, {"name": "东数西算/算力", "change_pct": 0.18}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 23, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "66.76", "change": "-1.04", "market_id": "17", "circulate_market_value": "163805420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600371", "name": "万向德农", "hot_rank": 24, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "13.96", "change": "10.01", "market_id": "17", "circulate_market_value": "4084388900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002886", "name": "沃特股份", "hot_rank": 25, "hot_rank_chg": 0, "stock_cnt": 5860, "price": "27.81", "change": "-4.17", "market_id": "33", "circulate_market_value": "5818645300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003005", "name": "竞业达", "hot_rank": 26, "hot_rank_chg": 7, "stock_cnt": 5860, "price": "18.18", "change": "9.98", "market_id": "33", "circulate_market_value": "2439659200.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": ""}, {"code": "600183", "name": "生益科技", "hot_rank": 27, "hot_rank_chg": -15, "stock_cnt": 5860, "price": "148.90", "change": "-2.90", "market_id": "17", "circulate_market_value": "359109400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 28, "hot_rank_chg": -18, "stock_cnt": 5860, "price": "9.24", "change": "1.32", "market_id": "17", "circulate_market_value": "23271031000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.88}, {"name": "工业大麻", "change_pct": 0.02}, {"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "保健品", "change_pct": 0.35}, {"name": "民营医院", "change_pct": 0.38}, {"name": "医药", "change_pct": -0.07}, {"name": "化学原料药", "change_pct": 0.01}, {"name": "流感", "change_pct": -0.12}, {"name": "振兴东北", "change_pct": 0.72}, {"name": "食品", "change_pct": 0.78}]}, {"code": "600869", "name": "远东股份", "hot_rank": 29, "hot_rank_chg": -22, "stock_cnt": 5860, "price": "18.24", "change": "-4.40", "market_id": "17", "circulate_market_value": "40480994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 30, "hot_rank_chg": -7, "stock_cnt": 5860, "price": "55.10", "change": "-1.40", "market_id": "33", "circulate_market_value": "63226697000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002855", "name": "捷荣技术", "hot_rank": 31, "hot_rank_chg": 4, "stock_cnt": 5860, "price": "17.71", "change": "10.00", "market_id": "33", "circulate_market_value": "4360684300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002084", "name": "海鸥住工", "hot_rank": 32, "hot_rank_chg": 15, "stock_cnt": 5860, "price": "7.02", "change": "10.03", "market_id": "33", "circulate_market_value": "4525333800.00", "change_type": "1", "change_section": "7", "change_days": "7", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "装修装饰", "change_pct": 0.27}, {"name": "装配式建筑", "change_pct": 0.23}, {"name": "家具家居", "change_pct": 0.61}, {"name": "智能制造", "change_pct": -0.19}, {"name": "3D打印", "change_pct": -0.6}, {"name": "独角兽", "change_pct": 0.85}, {"name": "热泵", "change_pct": -0.07}, {"name": "旧改", "change_pct": 0.33}]}, {"code": "600721", "name": "百花医药", "hot_rank": 33, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "12.65", "change": "-8.78", "market_id": "17", "circulate_market_value": "4864527600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.23}, {"name": "股权转让", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "新疆概念", "change_pct": 0.76}, {"name": "医药", "change_pct": -0.07}, {"name": "流感", "change_pct": -0.12}, {"name": "国资入股", "change_pct": 0.36}, {"name": "减肥药", "change_pct": -0.36}]}, {"code": "000725", "name": "京东方A", "hot_rank": 34, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "5.96", "change": "-0.83", "market_id": "33", "circulate_market_value": "210788120000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -1.04}, {"name": "手机产业链", "change_pct": -0.71}, {"name": "超高清视频", "change_pct": 0.26}, {"name": "苹果产业链", "change_pct": -0.84}, {"name": "电竞", "change_pct": 0.65}, {"name": "半导体", "change_pct": -0.65}, {"name": "人工智能", "change_pct": 0.51}, {"name": "互联网医疗", "change_pct": 0.96}, {"name": "VR&AR", "change_pct": -0.07}, {"name": "OLED", "change_pct": -0.67}, {"name": "京津冀", "change_pct": 0.48}, {"name": "物联网", "change_pct": 0.25}, {"name": "指纹识别", "change_pct": -0.5}, {"name": "汽车零部件", "change_pct": 0.24}, {"name": "白马股", "change_pct": 0.06}, {"name": "智能制造", "change_pct": -0.19}, {"name": "小米概念股", "change_pct": -0.42}, {"name": "国产芯片", "change_pct": -0.49}, {"name": "液晶面板/LCD", "change_pct": -0.82}, {"name": "全息概念", "change_pct": 0.56}, {"name": "理想汽车概念股", "change_pct": 0.24}, {"name": "MicroLED", "change_pct": -1.03}, {"name": "钙钛矿电池", "change_pct": -0.71}, {"name": "智能手表", "change_pct": -0.32}, {"name": "MiniLED", "change_pct": -0.93}, {"name": "传感器", "change_pct": -0.34}, {"name": "大硅片", "change_pct": -0.89}, {"name": "AI PC", "change_pct": -0.72}, {"name": "华为产业链", "change_pct": 0.06}, {"name": "回购", "change_pct": -0.05}, {"name": "光电共封装CPO", "change_pct": -1.19}, {"name": "智能眼镜/MR头显", "change_pct": -0.38}, {"name": "玻璃基板封装", "change_pct": -1.25}]}, {"code": "002141", "name": "贤丰控股", "hot_rank": 35, "hot_rank_chg": 6, "stock_cnt": 5860, "price": "6.93", "change": "-2.54", "market_id": "33", "circulate_market_value": "7147915700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 0.32}, {"name": "锂电池", "change_pct": -0.34}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "铜箔/覆铜板", "change_pct": -1.81}, {"name": "粤港澳大湾区", "change_pct": 0.65}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "独角兽", "change_pct": 0.85}, {"name": "横琴新区", "change_pct": 0.71}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 36, "hot_rank_chg": -15, "stock_cnt": 5860, "price": "58.19", "change": "0.36", "market_id": "17", "circulate_market_value": "262076870000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 37, "hot_rank_chg": -1, "stock_cnt": 5860, "price": "75.54", "change": "-0.34", "market_id": "33", "circulate_market_value": "54900408000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 38, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "856.00", "change": "0.48", "market_id": "33", "circulate_market_value": "950106070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600162", "name": "香江控股", "hot_rank": 39, "hot_rank_chg": -25, "stock_cnt": 5860, "price": "4.93", "change": "-0.60", "market_id": "17", "circulate_market_value": "16113400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "房地产", "change_pct": -0.13}, {"name": "养老产业", "change_pct": 0.32}, {"name": "粤港澳大湾区", "change_pct": 0.65}, {"name": "民营医院", "change_pct": 0.38}, {"name": "地摊经济", "change_pct": 1.31}]}, {"code": "600378", "name": "昊华科技", "hot_rank": 40, "hot_rank_chg": -11, "stock_cnt": 5860, "price": "50.77", "change": "-4.23", "market_id": "17", "circulate_market_value": "54454143000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603118", "name": "共进股份", "hot_rank": 41, "hot_rank_chg": 24, "stock_cnt": 5860, "price": "18.45", "change": "-0.81", "market_id": "17", "circulate_market_value": "14525250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600103", "name": "青山纸业", "hot_rank": 43, "hot_rank_chg": -5, "stock_cnt": 5860, "price": "3.80", "change": "0.00", "market_id": "17", "circulate_market_value": "8406850400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "造纸", "change_pct": 0.23}, {"name": "云计算数据中心", "change_pct": -0.24}, {"name": "光通信", "change_pct": -1.2}, {"name": "林业", "change_pct": 4.05}, {"name": "军民融合", "change_pct": -0.16}, {"name": "军工", "change_pct": -0.09}, {"name": "人造肉", "change_pct": 1.47}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 44, "hot_rank_chg": 2, "stock_cnt": 5860, "price": "18.00", "change": "1.12", "market_id": "33", "circulate_market_value": "8177619600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603221", "name": "爱丽家居", "hot_rank": 45, "hot_rank_chg": 57, "stock_cnt": 5860, "price": "30.55", "change": "10.01", "market_id": "17", "circulate_market_value": "7401348500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 46, "hot_rank_chg": 22, "stock_cnt": 5860, "price": "10.09", "change": "10.03", "market_id": "17", "circulate_market_value": "6719940000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": 1.91}]}, {"code": "002131", "name": "利欧股份", "hot_rank": 47, "hot_rank_chg": 8, "stock_cnt": 5860, "price": "4.95", "change": "4.21", "market_id": "33", "circulate_market_value": "28981245000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.03}, {"name": "人工智能", "change_pct": 0.51}, {"name": "云计算数据中心", "change_pct": -0.24}, {"name": "水利", "change_pct": 0.77}, {"name": "直播/短视频", "change_pct": 1.92}, {"name": "大数据", "change_pct": 0.63}, {"name": "园林", "change_pct": 0.68}, {"name": "独角兽", "change_pct": 0.85}, {"name": "小米概念股", "change_pct": -0.42}, {"name": "数字经济", "change_pct": 0.74}, {"name": "腾讯概念股", "change_pct": 0.65}, {"name": "理想汽车概念股", "change_pct": 0.24}, {"name": "第三代半导体", "change_pct": -0.81}, {"name": "快手概念股", "change_pct": 2.02}, {"name": "IGBT", "change_pct": -0.55}, {"name": "虚拟数字人", "change_pct": 1.75}, {"name": "AIGC概念", "change_pct": 1.47}, {"name": "字节跳动概念股", "change_pct": 1.52}, {"name": "氮化镓", "change_pct": -0.73}, {"name": "AI营销", "change_pct": 2.49}, {"name": "AI大模型/智能体", "change_pct": 0.73}, {"name": "多模态", "change_pct": 1.62}, {"name": "液冷服务器", "change_pct": -0.59}, {"name": "小红书概念股", "change_pct": 1.77}, {"name": "区块链", "change_pct": 1.01}]}, {"code": "000017", "name": "深中华A", "hot_rank": 48, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "11.58", "change": "2.94", "market_id": "33", "circulate_market_value": "5087085300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.1}, {"name": "锂电池", "change_pct": -0.34}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "两轮车", "change_pct": -0.02}, {"name": "珠宝饰品", "change_pct": 0.5}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 49, "hot_rank_chg": 10, "stock_cnt": 5860, "price": "403.23", "change": "-0.68", "market_id": "17", "circulate_market_value": "270453750000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 50, "hot_rank_chg": -10, "stock_cnt": 5860, "price": "34.15", "change": "-2.40", "market_id": "17", "circulate_market_value": "23610477000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 51, "hot_rank_chg": 0, "stock_cnt": 5860, "price": "14.21", "change": "0.78", "market_id": "33", "circulate_market_value": "49421389000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002407", "name": "多氟多", "hot_rank": 52, "hot_rank_chg": -15, "stock_cnt": 5860, "price": "36.12", "change": "-0.99", "market_id": "33", "circulate_market_value": "39031960000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 53, "hot_rank_chg": -14, "stock_cnt": 5860, "price": "4.27", "change": "-1.83", "market_id": "33", "circulate_market_value": "9020481400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": 0.08}, {"name": "中药", "change_pct": 0.04}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "维生素", "change_pct": 0.22}, {"name": "基因测序", "change_pct": 0.12}, {"name": "民营医院", "change_pct": 0.38}, {"name": "医药", "change_pct": -0.07}, {"name": "化学原料药", "change_pct": 0.01}, {"name": "PD-1抑制剂", "change_pct": -0.37}]}, {"code": "002008", "name": "大族激光", "hot_rank": 54, "hot_rank_chg": 0, "stock_cnt": 5860, "price": "97.18", "change": "0.85", "market_id": "33", "circulate_market_value": "92994147000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301526", "name": "国际复材", "hot_rank": 55, "hot_rank_chg": 64, "stock_cnt": 5860, "price": "30.65", "change": "-1.03", "market_id": "33", "circulate_market_value": "43086775000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 56, "hot_rank_chg": -7, "stock_cnt": 5860, "price": "21.56", "change": "-2.79", "market_id": "33", "circulate_market_value": "25411726000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 57, "hot_rank_chg": 1, "stock_cnt": 5860, "price": "4.92", "change": "0.20", "market_id": "17", "circulate_market_value": "5994587200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 0.48}, {"name": "煤炭", "change_pct": 0.1}, {"name": "有色金属", "change_pct": 0.03}, {"name": "国企改革", "change_pct": 0.47}, {"name": "河南国企改革", "change_pct": 0.63}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 58, "hot_rank_chg": 27, "stock_cnt": 5860, "price": "5.70", "change": "1.96", "market_id": "33", "circulate_market_value": "6651486700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 2.51}, {"name": "新疆概念", "change_pct": 0.76}, {"name": "阿里巴巴概念股", "change_pct": 0.77}, {"name": "腾讯概念股", "change_pct": 0.65}, {"name": "短剧/互动影游", "change_pct": 2.54}, {"name": "IP经济/谷子经济", "change_pct": 1.39}]}, {"code": "600551", "name": "时代出版", "hot_rank": 59, "hot_rank_chg": 25, "stock_cnt": 5860, "price": "9.08", "change": "10.06", "market_id": "17", "circulate_market_value": "6156741600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": 0.59}, {"name": "安徽国企改革", "change_pct": 0.55}, {"name": "教育", "change_pct": 0.88}, {"name": "破净股", "change_pct": 0.49}, {"name": "传媒", "change_pct": 1.94}, {"name": "国企改革", "change_pct": 0.47}, {"name": "在线教育", "change_pct": 0.77}]}, {"code": "003018", "name": "金富科技", "hot_rank": 60, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "51.08", "change": "3.50", "market_id": "33", "circulate_market_value": "14541385000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603721", "name": "中广天择", "hot_rank": 61, "hot_rank_chg": 47, "stock_cnt": 5860, "price": "21.01", "change": "10.00", "market_id": "17", "circulate_market_value": "2731300000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": ""}, {"code": "601799", "name": "星宇股份", "hot_rank": 62, "hot_rank_chg": 15, "stock_cnt": 5860, "price": "78.61", "change": "0.28", "market_id": "17", "circulate_market_value": "22457259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603629", "name": "利通电子", "hot_rank": 63, "hot_rank_chg": -1, "stock_cnt": 5860, "price": "118.18", "change": "-3.24", "market_id": "17", "circulate_market_value": "42630291000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603256", "name": "宏和科技", "hot_rank": 64, "hot_rank_chg": 75, "stock_cnt": 5860, "price": "145.13", "change": "-1.59", "market_id": "17", "circulate_market_value": "127674852000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 65, "hot_rank_chg": 8, "stock_cnt": 5860, "price": "34.75", "change": "-1.17", "market_id": "17", "circulate_market_value": "118600000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002165", "name": "红宝丽", "hot_rank": 66, "hot_rank_chg": -32, "stock_cnt": 5860, "price": "8.71", "change": "1.28", "market_id": "33", "circulate_market_value": "6331558900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "冷链", "change_pct": 0.36}, {"name": "装配式建筑", "change_pct": 0.23}, {"name": "风电", "change_pct": -0.06}, {"name": "环氧丙烷", "change_pct": 0.25}, {"name": "乡村振兴", "change_pct": 1.41}, {"name": "建筑节能", "change_pct": 0.52}, {"name": "旧改", "change_pct": 0.33}]}, {"code": "601138", "name": "工业富联", "hot_rank": 67, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "63.93", "change": "-1.39", "market_id": "17", "circulate_market_value": "1268632820000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600540", "name": "新赛股份", "hot_rank": 68, "hot_rank_chg": 7, "stock_cnt": 5860, "price": "6.12", "change": "10.07", "market_id": "17", "circulate_market_value": "3558027000.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 3.22}, {"name": "新疆国企改革", "change_pct": 1.11}, {"name": "农垦", "change_pct": 2.61}, {"name": "棉花", "change_pct": 2.56}, {"name": "新疆概念", "change_pct": 0.76}, {"name": "风电", "change_pct": -0.06}, {"name": "大农业", "change_pct": 1.08}, {"name": "国企改革", "change_pct": 0.47}]}, {"code": "601700", "name": "风范股份", "hot_rank": 69, "hot_rank_chg": -12, "stock_cnt": 5860, "price": "8.10", "change": "1.50", "market_id": "17", "circulate_market_value": "9223934100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "一带一路", "change_pct": 0.34}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "光伏", "change_pct": -0.42}, {"name": "特高压", "change_pct": -0.34}, {"name": "智能电网", "change_pct": -0.11}]}, {"code": "301217", "name": "铜冠铜箔", "hot_rank": 70, "hot_rank_chg": -20, "stock_cnt": 5860, "price": "119.01", "change": "-4.00", "market_id": "33", "circulate_market_value": "98694301000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 71, "hot_rank_chg": 0, "stock_cnt": 5860, "price": "14.21", "change": "-1.52", "market_id": "17", "circulate_market_value": "18249599000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300418", "name": "昆仑万维", "hot_rank": 72, "hot_rank_chg": 17, "stock_cnt": 5860, "price": "45.03", "change": "2.30", "market_id": "33", "circulate_market_value": "52885830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 73, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "32.47", "change": "2.98", "market_id": "17", "circulate_market_value": "13020470000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 74, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "19.23", "change": "-0.41", "market_id": "17", "circulate_market_value": "40220356000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 75, "hot_rank_chg": -8, "stock_cnt": 5860, "price": "75.35", "change": "-0.53", "market_id": "17", "circulate_market_value": "134832390000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600403", "name": "大有能源", "hot_rank": 76, "hot_rank_chg": -28, "stock_cnt": 5860, "price": "7.62", "change": "-0.78", "market_id": "17", "circulate_market_value": "18217991000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.1}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "国企改革", "change_pct": 0.47}, {"name": "河南国企改革", "change_pct": 0.63}]}, {"code": "601869", "name": "长飞光纤", "hot_rank": 78, "hot_rank_chg": -2, "stock_cnt": 5860, "price": "406.10", "change": "-2.70", "market_id": "17", "circulate_market_value": "165046500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002412", "name": "汉森制药", "hot_rank": 79, "hot_rank_chg": -1, "stock_cnt": 5860, "price": "10.88", "change": "-7.78", "market_id": "33", "circulate_market_value": "5426510500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 0.04}, {"name": "优化生育（三孩）", "change_pct": 0.59}, {"name": "农业种植", "change_pct": 3.22}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "医药", "change_pct": -0.07}, {"name": "流感", "change_pct": -0.12}, {"name": "大农业", "change_pct": 1.08}]}, {"code": "002328", "name": "新朋股份", "hot_rank": 80, "hot_rank_chg": 36, "stock_cnt": 5860, "price": "8.89", "change": "4.59", "market_id": "33", "circulate_market_value": "5073397600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": 0.14}, {"name": "特斯拉", "change_pct": -0.26}, {"name": "云计算数据中心", "change_pct": -0.24}, {"name": "汽车零部件", "change_pct": 0.24}, {"name": "新能源汽车", "change_pct": -0.13}, {"name": "储能", "change_pct": -0.25}, {"name": "新能源车零部件", "change_pct": -0.06}, {"name": "液冷服务器", "change_pct": -0.59}]}, {"code": "600206", "name": "有研新材", "hot_rank": 81, "hot_rank_chg": -21, "stock_cnt": 5860, "price": "50.62", "change": "-2.07", "market_id": "17", "circulate_market_value": "42852530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601899", "name": "紫金矿业", "hot_rank": 82, "hot_rank_chg": 6, "stock_cnt": 5860, "price": "33.67", "change": "0.00", "market_id": "17", "circulate_market_value": "693662380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601123", "name": "马矿股份", "hot_rank": 83, "hot_rank_chg": 636, "stock_cnt": 5860, "price": "23.20", "change": "247.82", "market_id": "17", "circulate_market_value": "2223215600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601929", "name": "吉视传媒", "hot_rank": 84, "hot_rank_chg": 37, "stock_cnt": 5860, "price": "2.59", "change": "0.78", "market_id": "17", "circulate_market_value": "9038551400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "广电", "change_pct": 0.64}, {"name": "超高清视频", "change_pct": 0.26}, {"name": "人工智能", "change_pct": 0.51}, {"name": "云计算数据中心", "change_pct": -0.24}, {"name": "影视", "change_pct": 2.51}, {"name": "智慧城市", "change_pct": 0.33}, {"name": "国产芯片", "change_pct": -0.49}, {"name": "振兴东北", "change_pct": 0.72}, {"name": "传媒", "change_pct": 1.94}, {"name": "低价股", "change_pct": 0.54}, {"name": "国企改革", "change_pct": 0.47}, {"name": "在线教育", "change_pct": 0.77}, {"name": "医疗信息化", "change_pct": 0.99}, {"name": "AI大模型/智能体", "change_pct": 0.73}, {"name": "IP经济/谷子经济", "change_pct": 1.39}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 85, "hot_rank_chg": -22, "stock_cnt": 5860, "price": "98.15", "change": "-2.54", "market_id": "33", "circulate_market_value": "64092686000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603466", "name": "风语筑", "hot_rank": 86, "hot_rank_chg": -4, "stock_cnt": 5860, "price": "11.89", "change": "0.51", "market_id": "17", "circulate_market_value": "7072510800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "数字孪生", "change_pct": 0.65}, {"name": "VR&AR", "change_pct": -0.07}, {"name": "装修装饰", "change_pct": 0.27}, {"name": "数字经济", "change_pct": 0.74}, {"name": "百度概念股", "change_pct": 1.15}, {"name": "全息概念", "change_pct": 0.56}, {"name": "NFT", "change_pct": 1.83}, {"name": "元宇宙", "change_pct": 1.17}, {"name": "虚拟数字人", "change_pct": 1.75}, {"name": "网红/MCN", "change_pct": 1.31}, {"name": "ChatGPT", "change_pct": 1.01}, {"name": "智能眼镜/MR头显", "change_pct": -0.38}, {"name": "多模态", "change_pct": 1.62}, {"name": "AI视频", "change_pct": 0.92}]}, {"code": "002475", "name": "立讯精密", "hot_rank": 87, "hot_rank_chg": 3, "stock_cnt": 5860, "price": "56.99", "change": "-1.15", "market_id": "33", "circulate_market_value": "417456180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600498", "name": "烽火通信", "hot_rank": 88, "hot_rank_chg": -24, "stock_cnt": 5860, "price": "41.58", "change": "-2.07", "market_id": "17", "circulate_market_value": "52874020000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603459", "name": "红板科技", "hot_rank": 89, "hot_rank_chg": -23, "stock_cnt": 5860, "price": "92.35", "change": "-2.60", "market_id": "17", "circulate_market_value": "7310715800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601595", "name": "上海电影", "hot_rank": 90, "hot_rank_chg": 70, "stock_cnt": 5860, "price": "19.27", "change": "5.13", "market_id": "17", "circulate_market_value": "8636814000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000801", "name": "四川九洲", "hot_rank": 91, "hot_rank_chg": 188, "stock_cnt": 5860, "price": "12.73", "change": "1.11", "market_id": "33", "circulate_market_value": "12912597100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "超高清视频", "change_pct": 0.26}, {"name": "通用航空", "change_pct": 0.03}, {"name": "人工智能", "change_pct": 0.51}, {"name": "大飞机", "change_pct": -0.18}, {"name": "军民融合", "change_pct": -0.16}, {"name": "PCB板", "change_pct": -1.55}, {"name": "军工", "change_pct": -0.09}, {"name": "黑色家电", "change_pct": -0.1}, {"name": "家电", "change_pct": 0.05}, {"name": "智慧物流", "change_pct": 0.17}, {"name": "无人机", "change_pct": -0.12}, {"name": "智能制造", "change_pct": -0.19}, {"name": "食品安全", "change_pct": 0.08}, {"name": "华为海思", "change_pct": -0.1}, {"name": "卫星互联网", "change_pct": -0.62}, {"name": "华为产业链", "change_pct": 0.06}, {"name": "回购", "change_pct": -0.05}, {"name": "飞行汽车/eVTOL", "change_pct": -0.06}, {"name": "低空经济", "change_pct": -0.05}, {"name": "军工信息化", "change_pct": 0.04}]}, {"code": "600186", "name": "莲花控股", "hot_rank": 92, "hot_rank_chg": -18, "stock_cnt": 5860, "price": "11.76", "change": "1.99", "market_id": "17", "circulate_market_value": "21040266000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "调味品", "change_pct": 0.71}, {"name": "纯碱", "change_pct": 0.55}, {"name": "食品", "change_pct": 0.78}, {"name": "土壤修复", "change_pct": 0.35}, {"name": "东数西算/算力", "change_pct": 0.18}, {"name": "OpenClaw概念", "change_pct": 0.78}, {"name": "DeepSeek概念股", "change_pct": 0.99}]}, {"code": "002881", "name": "美格智能", "hot_rank": 93, "hot_rank_chg": 93, "stock_cnt": 5860, "price": "45.14", "change": "1.07", "market_id": "33", "circulate_market_value": "8268887000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300274", "name": "阳光电源", "hot_rank": 94, "hot_rank_chg": -33, "stock_cnt": 5860, "price": "90.80", "change": "-0.68", "market_id": "33", "circulate_market_value": "144147420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002156", "name": "通富微电", "hot_rank": 95, "hot_rank_chg": 5, "stock_cnt": 5860, "price": "63.85", "change": "-1.07", "market_id": "33", "circulate_market_value": "96919673000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000011", "name": "深物业A", "hot_rank": 96, "hot_rank_chg": 0, "stock_cnt": 5860, "price": "9.35", "change": "-7.25", "market_id": "33", "circulate_market_value": "4917281600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.1}, {"name": "房地产", "change_pct": -0.13}, {"name": "粤港澳大湾区", "change_pct": 0.65}, {"name": "住房租赁", "change_pct": -0.03}, {"name": "物业管理", "change_pct": 0.33}, {"name": "新型城镇化", "change_pct": 0.35}, {"name": "旧改", "change_pct": 0.33}]}, {"code": "600691", "name": "潞化科技", "hot_rank": 97, "hot_rank_chg": 1, "stock_cnt": 5860, "price": "3.11", "change": "-3.41", "market_id": "17", "circulate_market_value": "7388072300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "甲醇", "change_pct": -0.43}, {"name": "化肥", "change_pct": 0.98}, {"name": "山西国企改革", "change_pct": 0.43}, {"name": "氢能源/燃料电池", "change_pct": -0.03}, {"name": "烧碱", "change_pct": 0.71}, {"name": "PVC", "change_pct": 0.76}, {"name": "煤化工", "change_pct": 0.12}, {"name": "大农业", "change_pct": 1.08}, {"name": "丁辛醇", "change_pct": 0.56}, {"name": "国企改革", "change_pct": 0.47}]}, {"code": "003032", "name": "传智教育", "hot_rank": 98, "hot_rank_chg": 7, "stock_cnt": 5860, "price": "11.17", "change": "1.64", "market_id": "33", "circulate_market_value": "3166280300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "ST摘帽", "change_pct": 0.68}, {"name": "强势人气股", "change_pct": -0.19}, {"name": "教育", "change_pct": 0.88}, {"name": "阿里巴巴概念股", "change_pct": 0.77}, {"name": "职业教育", "change_pct": 1.1}, {"name": "在线教育", "change_pct": 0.77}, {"name": "华为鸿蒙", "change_pct": 0.89}, {"name": "华为产业链", "change_pct": 0.06}, {"name": "智谱AI", "change_pct": 0.66}]}, {"code": "600362", "name": "江西铜业", "hot_rank": 99, "hot_rank_chg": 39, "stock_cnt": 5860, "price": "48.86", "change": "0.97", "market_id": "17", "circulate_market_value": "101396588000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600479", "name": "千金药业", "hot_rank": 100, "hot_rank_chg": -48, "stock_cnt": 5860, "price": "12.20", "change": "0.58", "market_id": "17", "circulate_market_value": "5114157000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": 0.21}, {"name": "中药", "change_pct": 0.04}, {"name": "优化生育（三孩）", "change_pct": 0.59}, {"name": "农业种植", "change_pct": 3.22}, {"name": "人工智能", "change_pct": 0.51}, {"name": "湖南国企改革", "change_pct": 1.47}, {"name": "医药", "change_pct": -0.07}, {"name": "流感", "change_pct": -0.12}, {"name": "大农业", "change_pct": 1.08}, {"name": "国企改革", "change_pct": 0.47}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002072": "[立案调查] 凯瑞德：关于立案调查事项进展暨风险提示的公告", "839680": "[立案调查] [临时公告]*ST广道:关于立案调查进展暨可能触及重大违法强制退市情形的风险提示", "600190": "[立案调查] ST锦港：锦州港股份有限公司关于立案调查进展暨风险提示的公告", "600462": "[立案调查] *ST九有：关于立案调查进展暨风险提示公告", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] 贵州百灵：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148471": "[行政处罚事先告知书] 23一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148575": "[行政处罚事先告知书] 24一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149612": "[行政处罚事先告知书] 21一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524486": "[行政处罚事先告知书] 25一创K2：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "002797": "[行政处罚事先告知书] 第一创业：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国证券", "524314": "[行政处罚事先告知书] 25一创K1：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148014": "[行政处罚事先告知书] 22一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "149767": "[行政处罚事先告知书] 22一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "603822": "[行政处罚事先告知书] 嘉澳环保：关于收到中国证券监督管理委员会浙江监管局《行政处罚事先告知书》的公告", "300460": "[行政处罚事先告知书] 惠伦晶体：关于公司及相关当事人收到《行政处罚事先告知书》的公告"};