const UPDATE_TIME = "2026-10-16 02:49";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": 1.87,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "PCB概念",
    "rise": -0.75,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -0.37,
    "rate": 0,
    "tag": "",
    "hotTag": "连续309天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "兵装重组概念",
    "rise": 5.11,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "固态电池",
    "rise": 0.17,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "CRO概念",
    "rise": 0.94,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "冰雪产业",
    "rise": 2.2,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "AI应用",
    "rise": 0.79,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886108"
  },
  {
    "name": "存储芯片",
    "rise": 0.39,
    "rate": 0,
    "tag": "",
    "hotTag": "连续262天上榜",
    "rankChg": 2,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "文化传媒概念",
    "rise": 0.81,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "885418"
  },
  {
    "name": "2026三季报预增",
    "rise": -0.57,
    "rate": 0,
    "tag": "",
    "hotTag": "5天5次上榜",
    "rankChg": -2,
    "etfName": "科创大成LOF",
    "code": "886113"
  },
  {
    "name": "MLCC概念",
    "rise": -0.34,
    "rate": 0,
    "tag": "",
    "hotTag": "连续49天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "短剧游戏",
    "rise": 0.09,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "军工",
    "rise": 1.95,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 2,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "AI视频",
    "rise": -0.37,
    "rate": 0,
    "tag": "",
    "hotTag": "10天8次上榜",
    "rankChg": 0,
    "etfName": "传媒ETF",
    "code": "886068"
  },
  {
    "name": "光纤概念",
    "rise": 0.9,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续138天上榜",
    "rankChg": -3,
    "etfName": "科技成长ETF",
    "code": "886084"
  },
  {
    "name": "商业航天",
    "rise": 1.59,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "猪肉",
    "rise": 2.9,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "养殖ETF",
    "code": "885573"
  },
  {
    "name": "染料",
    "rise": -0.44,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "化工ETF",
    "code": "885633"
  },
  {
    "name": "减肥药",
    "rise": 1.84,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 2,
    "etfName": "创新药ETF",
    "code": "886051"
  }
];
const THS_EVENTS = [
  {
    "title": "北上广深等七城落地细则 商品住房销售制度改革有序推进",
    "desc": "",
    "heat": 473429,
    "direction": "房地产",
    "themes": [
      "房地产开发",
      "租售同权",
      "物业管理",
      "房屋检测",
      "房地产"
    ],
    "stocks": [
      {
        "name": "粤宏远Ａ",
        "code": "000573",
        "chg": 10.098522
      }
    ]
  },
  {
    "title": "美股三大指数集体收涨，黄金概念涨幅居前，COMEX黄金期货收涨2.06%",
    "desc": "",
    "heat": 469189,
    "direction": "黄金",
    "themes": [
      "贵金属",
      "白银",
      "黄金概念"
    ],
    "stocks": [
      {
        "name": "招金黄金",
        "code": "000506",
        "chg": 5.776892
      }
    ]
  },
  {
    "title": "第十六届中国航展将于12月7日至13日在珠海举办 首设海上展区 自研重器集中亮相",
    "desc": "",
    "heat": 365609,
    "direction": "军工装备",
    "themes": [
      "军工装备",
      "兵装重组概念",
      "军民融合",
      "军工电子",
      "军工信息化"
    ],
    "stocks": [
      {
        "name": "晟楠科技",
        "code": "920006",
        "chg": 24.421296
      }
    ]
  },
  {
    "title": "三部门联合调查尊界刹车安全事件 尊界回应全力配合",
    "desc": "",
    "heat": 229432,
    "direction": "汽车制动系统",
    "themes": [
      "汽车制动系统",
      "自动紧急制动系统（AEBS）"
    ],
    "stocks": [
      {
        "name": "保隆科技",
        "code": "603197",
        "chg": 9.992515
      }
    ]
  },
  {
    "title": "国家医保局：加强医保目录和支付管理 强化医药价格管理",
    "desc": "",
    "heat": 205534,
    "direction": "医疗服务",
    "themes": [
      "医疗服务",
      "生物疫苗",
      "重组蛋白",
      "CRO概念",
      "减肥药"
    ],
    "stocks": [
      {
        "name": "莱美药业",
        "code": "300006",
        "chg": 20.0492
      }
    ]
  },
  {
    "title": "谷歌在量子计算取得突破，“魔态培育”技术使 Willow 芯片错误率降低约 40 倍",
    "desc": "",
    "heat": 144666,
    "direction": "量子科技",
    "themes": [
      "量子计算",
      "量子通信",
      "量子测量",
      "国仪量子",
      "量子科技"
    ],
    "stocks": [
      {
        "name": "星光股份",
        "code": "002076",
        "chg": 10.152284
      }
    ]
  },
  {
    "title": "腾讯入局AI短剧赛道：微信内上线“绿泡泡短剧”小程序，撼动千亿市场",
    "desc": "",
    "heat": 37857,
    "direction": "AI短剧",
    "themes": [
      "AI漫剧",
      "AI影视制作",
      "视频生成模型",
      "短剧游戏"
    ],
    "stocks": [
      {
        "name": "华媒控股",
        "code": "000607",
        "chg": 10.023866
      }
    ]
  },
  {
    "title": "电子布价格涨势延续 高端产能有望释放",
    "desc": "",
    "heat": 20055,
    "direction": "电子布涨价",
    "themes": [
      "电子布",
      "PCB概念"
    ],
    "stocks": [
      {
        "name": "星帅尔",
        "code": "002860",
        "chg": 10.005467
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "住房租赁",
    "change": "+5.06%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房产经纪",
    "change": "+4.17%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+3.87%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "复牌股",
    "change": "+3.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "船舶",
    "change": "+3.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养鸡",
    "change": "+3.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "通用航空",
    "change": "+3.44%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水泥",
    "change": "+3.42%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "物业管理",
    "change": "+3.38%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "房地产",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民爆",
    "change": "+3.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "维生素",
    "change": "+3.28%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "生物柴油/生物航煤",
    "change": "+3.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镁",
    "change": "+3.23%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肿瘤疫苗",
    "change": "+3.21%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄金",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "汽车销售",
    "change": "+3.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "养猪",
    "change": "+2.93%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "电子车牌",
    "change": "+2.91%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "篮球",
    "change": "+2.88%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 3,
    "hot_rank_chg": 7,
    "stock_cnt": 5856,
    "price": "9.15",
    "change": "2.69",
    "market_id": "33",
    "circulate_market_value": "4334174600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -0.68
      },
      {
        "name": "强势人气股",
        "change_pct": 1.51
      },
      {
        "name": "VR&AR",
        "change_pct": 0.43
      },
      {
        "name": "游戏",
        "change_pct": -0.44
      },
      {
        "name": "影视",
        "change_pct": 0.25
      },
      {
        "name": "直播/短视频",
        "change_pct": 0.31
      },
      {
        "name": "动漫",
        "change_pct": -0.67
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.44
      },
      {
        "name": "传媒",
        "change_pct": 0.77
      },
      {
        "name": "元宇宙",
        "change_pct": 0.26
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 4,
    "hot_rank_chg": 3,
    "stock_cnt": 5856,
    "price": "7.62",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4572889400.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "4",
    "change_reason": "冰雪工程",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 1.27
      },
      {
        "name": "边缘计算",
        "change_pct": 0.94
      },
      {
        "name": "核电",
        "change_pct": 1.57
      },
      {
        "name": "海工装备",
        "change_pct": 2.18
      },
      {
        "name": "云计算数据中心",
        "change_pct": 0.58
      },
      {
        "name": "冷链",
        "change_pct": 1.77
      },
      {
        "name": "地热",
        "change_pct": 1.54
      },
      {
        "name": "储能",
        "change_pct": 0.92
      },
      {
        "name": "碳中和",
        "change_pct": 1.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 2.4
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.47
      },
      {
        "name": "热泵",
        "change_pct": 1.5
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.88
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 2.32
      },
      {
        "name": "海洋经济",
        "change_pct": 2.18
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 8,
    "hot_rank_chg": 3,
    "stock_cnt": 5856,
    "price": "10.13",
    "change": "-7.66",
    "market_id": "17",
    "circulate_market_value": "8802491700.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.0
      },
      {
        "name": "快递物流",
        "change_pct": 1.48
      },
      {
        "name": "新零售",
        "change_pct": 1.18
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.61
      },
      {
        "name": "旅游",
        "change_pct": 1.31
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.45
      },
      {
        "name": "物业管理",
        "change_pct": 3.38
      },
      {
        "name": "免税店概念",
        "change_pct": 1.6
      },
      {
        "name": "自贸区",
        "change_pct": 2.03
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 13,
    "hot_rank_chg": -8,
    "stock_cnt": 5856,
    "price": "6.55",
    "change": "-0.30",
    "market_id": "17",
    "circulate_market_value": "11255191200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": 3.28
      },
      {
        "name": "雄安新区",
        "change_pct": 1.75
      },
      {
        "name": "医药",
        "change_pct": 1.83
      },
      {
        "name": "疫苗",
        "change_pct": 1.78
      },
      {
        "name": "化学原料药",
        "change_pct": 2.2
      },
      {
        "name": "流感",
        "change_pct": 1.67
      },
      {
        "name": "肝素",
        "change_pct": 1.52
      },
      {
        "name": "眼科",
        "change_pct": 2.24
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 16,
    "hot_rank_chg": -2,
    "stock_cnt": 5856,
    "price": "9.90",
    "change": "-7.74",
    "market_id": "33",
    "circulate_market_value": "3309163300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": 1.52
      },
      {
        "name": "饲料",
        "change_pct": 2.41
      },
      {
        "name": "一带一路",
        "change_pct": 1.6
      },
      {
        "name": "强势人气股",
        "change_pct": 1.51
      },
      {
        "name": "保健品",
        "change_pct": 1.7
      },
      {
        "name": "山东国企改革",
        "change_pct": 1.18
      },
      {
        "name": "污水处理",
        "change_pct": 1.56
      },
      {
        "name": "环保",
        "change_pct": 1.76
      },
      {
        "name": "食品",
        "change_pct": 1.2
      },
      {
        "name": "预制菜",
        "change_pct": 1.75
      },
      {
        "name": "国企改革",
        "change_pct": 1.57
      },
      {
        "name": "水产养殖",
        "change_pct": 1.89
      },
      {
        "name": "广西概念",
        "change_pct": 1.29
      }
    ]
  },
  {
    "code": "603999",
    "name": "读者传媒",
    "hot_rank": 21,
    "hot_rank_chg": 31,
    "stock_cnt": 5856,
    "price": "8.38",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4826880000.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "人工智能",
    "xgb_concepts": [
      {
        "name": "知识产权",
        "change_pct": 1.12
      },
      {
        "name": "传媒",
        "change_pct": 0.77
      },
      {
        "name": "NFT",
        "change_pct": 0.77
      },
      {
        "name": "在线教育",
        "change_pct": 0.78
      },
      {
        "name": "知识付费",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 32,
    "hot_rank_chg": -12,
    "stock_cnt": 5856,
    "price": "11.62",
    "change": "-3.57",
    "market_id": "17",
    "circulate_market_value": "4468443500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 1.87
      },
      {
        "name": "股权转让",
        "change_pct": 1.26
      },
      {
        "name": "强势人气股",
        "change_pct": 1.51
      },
      {
        "name": "新疆概念",
        "change_pct": 1.71
      },
      {
        "name": "医药",
        "change_pct": 1.83
      },
      {
        "name": "流感",
        "change_pct": 1.67
      },
      {
        "name": "国资入股",
        "change_pct": 0.93
      },
      {
        "name": "减肥药",
        "change_pct": 2.35
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 33,
    "hot_rank_chg": 31,
    "stock_cnt": 5856,
    "price": "6.72",
    "change": "-2.61",
    "market_id": "33",
    "circulate_market_value": "7814334000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": 0.25
      },
      {
        "name": "新疆概念",
        "change_pct": 1.71
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.45
      },
      {
        "name": "腾讯概念股",
        "change_pct": 0.44
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.22
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.76
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 37,
    "hot_rank_chg": -21,
    "stock_cnt": 5856,
    "price": "6.40",
    "change": "3.39",
    "market_id": "17",
    "circulate_market_value": "16118463000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 1.0
      },
      {
        "name": "工业大麻",
        "change_pct": 1.82
      },
      {
        "name": "中药",
        "change_pct": 1.83
      },
      {
        "name": "保健品",
        "change_pct": 1.7
      },
      {
        "name": "民营医院",
        "change_pct": 1.68
      },
      {
        "name": "医药",
        "change_pct": 1.83
      },
      {
        "name": "化学原料药",
        "change_pct": 2.2
      },
      {
        "name": "流感",
        "change_pct": 1.67
      },
      {
        "name": "振兴东北",
        "change_pct": 1.69
      },
      {
        "name": "食品",
        "change_pct": 1.2
      }
    ]
  },
  {
    "code": "002044",
    "name": "美年健康",
    "hot_rank": 41,
    "hot_rank_chg": 333,
    "stock_cnt": 5856,
    "price": "4.73",
    "change": "1.94",
    "market_id": "33",
    "circulate_market_value": "18363839000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体外诊断",
        "change_pct": 1.48
      },
      {
        "name": "健康中国",
        "change_pct": 1.15
      },
      {
        "name": "人工智能",
        "change_pct": 1.03
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.47
      },
      {
        "name": "基因测序",
        "change_pct": 1.29
      },
      {
        "name": "民营医院",
        "change_pct": 1.68
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "阿尔茨海默病",
        "change_pct": 1.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.62
      },
      {
        "name": "AI医疗",
        "change_pct": 1.22
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 43,
    "hot_rank_chg": 618,
    "stock_cnt": 5856,
    "price": "8.04",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4666098600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI短剧",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": 0.88
      },
      {
        "name": "国产软件",
        "change_pct": 0.52
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.85
      },
      {
        "name": "共享经济",
        "change_pct": 1.65
      },
      {
        "name": "人工智能",
        "change_pct": 1.0
      },
      {
        "name": "网络安全",
        "change_pct": 0.24
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.6
      },
      {
        "name": "智慧停车",
        "change_pct": 2.03
      },
      {
        "name": "物联网",
        "change_pct": 1.23
      },
      {
        "name": "大数据",
        "change_pct": 0.67
      },
      {
        "name": "智慧城市",
        "change_pct": 1.35
      },
      {
        "name": "储能",
        "change_pct": 0.92
      },
      {
        "name": "智慧安防",
        "change_pct": 1.1
      },
      {
        "name": "数字经济",
        "change_pct": 0.89
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "信创",
        "change_pct": 0.2
      },
      {
        "name": "华为昇腾",
        "change_pct": 1.12
      },
      {
        "name": "东数西算/算力",
        "change_pct": 0.53
      },
      {
        "name": "电子身份证",
        "change_pct": 0.88
      },
      {
        "name": "数据要素",
        "change_pct": 0.74
      },
      {
        "name": "数字乡村",
        "change_pct": 1.31
      },
      {
        "name": "智慧政务",
        "change_pct": 0.55
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": 0.31
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.66
      },
      {
        "name": "算电协同",
        "change_pct": 1.03
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "自贸区",
        "change_pct": 2.01
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.62
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "智谱AI",
        "change_pct": 0.59
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": 0.1
      },
      {
        "name": "算力一体机",
        "change_pct": 0.96
      },
      {
        "name": "区块链",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "002103",
    "name": "广博股份",
    "hot_rank": 60,
    "hot_rank_chg": 31,
    "stock_cnt": 5856,
    "price": "7.15",
    "change": "-4.67",
    "market_id": "33",
    "circulate_market_value": "2775169500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.99
      },
      {
        "name": "一带一路",
        "change_pct": 1.59
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": 0.89
      },
      {
        "name": "快手概念股",
        "change_pct": -0.53
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.02
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 65,
    "hot_rank_chg": -33,
    "stock_cnt": 5856,
    "price": "5.11",
    "change": "-6.24",
    "market_id": "33",
    "circulate_market_value": "3632181900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": 1.0
      },
      {
        "name": "影视",
        "change_pct": 0.16
      },
      {
        "name": "旅游",
        "change_pct": 1.26
      },
      {
        "name": "虚拟数字人",
        "change_pct": 0.1
      },
      {
        "name": "AI营销",
        "change_pct": -0.54
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": 0.62
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": 0.72
      }
    ]
  },
  {
    "code": "000573",
    "name": "粤宏远A",
    "hot_rank": 66,
    "hot_rank_chg": 228,
    "stock_cnt": 5856,
    "price": "4.47",
    "change": "10.10",
    "market_id": "33",
    "circulate_market_value": "2827542400.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "2",
    "change_reason": "股权收购",
    "xgb_concepts": [
      {
        "name": "资产重组",
        "change_pct": 1.33
      },
      {
        "name": "锂电池",
        "change_pct": -0.05
      },
      {
        "name": "房地产",
        "change_pct": 3.4
      },
      {
        "name": "固废处理",
        "change_pct": 1.67
      },
      {
        "name": "有色金属",
        "change_pct": 1.1
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.89
      },
      {
        "name": "环保",
        "change_pct": 1.72
      },
      {
        "name": "篮球",
        "change_pct": 2.85
      }
    ]
  },
  {
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 67,
    "hot_rank_chg": 204,
    "stock_cnt": 5856,
    "price": "4.61",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4080136600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "文化传媒",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.36
      },
      {
        "name": "浙江国企改革",
        "change_pct": 1.58
      },
      {
        "name": "教育",
        "change_pct": 1.83
      },
      {
        "name": "知识产权",
        "change_pct": 1.08
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "传媒",
        "change_pct": 0.74
      },
      {
        "name": "社区团购",
        "change_pct": 1.77
      },
      {
        "name": "NFT",
        "change_pct": 0.73
      },
      {
        "name": "数据要素",
        "change_pct": 0.74
      },
      {
        "name": "字节跳动概念股",
        "change_pct": 0.02
      },
      {
        "name": "国企改革",
        "change_pct": 1.57
      },
      {
        "name": "职业教育",
        "change_pct": 0.72
      },
      {
        "name": "在线教育",
        "change_pct": 0.72
      },
      {
        "name": "短剧/互动影游",
        "change_pct": 0.16
      },
      {
        "name": "区块链",
        "change_pct": 0.75
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 68,
    "hot_rank_chg": 105,
    "stock_cnt": 5856,
    "price": "12.16",
    "change": "1.33",
    "market_id": "17",
    "circulate_market_value": "15616828000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 1.22
      },
      {
        "name": "智能制造",
        "change_pct": 1.17
      },
      {
        "name": "工业互联网",
        "change_pct": 0.97
      },
      {
        "name": "培育钻石",
        "change_pct": 1.7
      },
      {
        "name": "金刚线",
        "change_pct": 1.55
      },
      {
        "name": "国资入股",
        "change_pct": 0.92
      },
      {
        "name": "深地经济",
        "change_pct": 1.81
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 71,
    "hot_rank_chg": 1,
    "stock_cnt": 5856,
    "price": "7.50",
    "change": "4.17",
    "market_id": "33",
    "circulate_market_value": "14363193000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 2.6
      },
      {
        "name": "林业",
        "change_pct": 1.97
      },
      {
        "name": "碳中和",
        "change_pct": 1.62
      },
      {
        "name": "自贸区",
        "change_pct": 2.01
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 74,
    "hot_rank_chg": -25,
    "stock_cnt": 5856,
    "price": "5.73",
    "change": "-1.04",
    "market_id": "33",
    "circulate_market_value": "4376605000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": 1.81
      },
      {
        "name": "股权转让",
        "change_pct": 1.23
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.36
      },
      {
        "name": "强势人气股",
        "change_pct": 1.46
      },
      {
        "name": "医药商业",
        "change_pct": 1.29
      },
      {
        "name": "保健品",
        "change_pct": 1.71
      },
      {
        "name": "民营医院",
        "change_pct": 1.7
      },
      {
        "name": "医药",
        "change_pct": 1.83
      },
      {
        "name": "食品",
        "change_pct": 1.19
      },
      {
        "name": "辅助生殖",
        "change_pct": 1.29
      },
      {
        "name": "口腔",
        "change_pct": 1.63
      },
      {
        "name": "医美",
        "change_pct": 1.32
      },
      {
        "name": "新冠病毒防治",
        "change_pct": 1.34
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 81,
    "hot_rank_chg": -12,
    "stock_cnt": 5856,
    "price": "5.63",
    "change": "-0.88",
    "market_id": "17",
    "circulate_market_value": "6859659800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.44
      },
      {
        "name": "煤炭",
        "change_pct": 1.51
      },
      {
        "name": "有色金属",
        "change_pct": 1.1
      },
      {
        "name": "国企改革",
        "change_pct": 1.57
      },
      {
        "name": "河南国企改革",
        "change_pct": 1.12
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 90,
    "hot_rank_chg": -14,
    "stock_cnt": 5856,
    "price": "5.10",
    "change": "0.99",
    "market_id": "33",
    "circulate_market_value": "180372380000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.45
      },
      {
        "name": "手机产业链",
        "change_pct": 0.55
      },
      {
        "name": "超高清视频",
        "change_pct": 0.14
      },
      {
        "name": "苹果产业链",
        "change_pct": 0.4
      },
      {
        "name": "电竞",
        "change_pct": -0.52
      },
      {
        "name": "半导体",
        "change_pct": 0.33
      },
      {
        "name": "人工智能",
        "change_pct": 1.0
      },
      {
        "name": "互联网医疗",
        "change_pct": 1.46
      },
      {
        "name": "VR&AR",
        "change_pct": 0.38
      },
      {
        "name": "OLED",
        "change_pct": 0.07
      },
      {
        "name": "京津冀",
        "change_pct": 1.65
      },
      {
        "name": "物联网",
        "change_pct": 1.23
      },
      {
        "name": "指纹识别",
        "change_pct": 0.11
      },
      {
        "name": "汽车零部件",
        "change_pct": 1.91
      },
      {
        "name": "白马股",
        "change_pct": 0.85
      },
      {
        "name": "智能制造",
        "change_pct": 1.17
      },
      {
        "name": "小米概念股",
        "change_pct": 0.53
      },
      {
        "name": "国产芯片",
        "change_pct": 0.62
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.2
      },
      {
        "name": "全息概念",
        "change_pct": 1.13
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 1.91
      },
      {
        "name": "MicroLED",
        "change_pct": -0.1
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.85
      },
      {
        "name": "智能手表",
        "change_pct": 0.64
      },
      {
        "name": "MiniLED",
        "change_pct": 0.09
      },
      {
        "name": "传感器",
        "change_pct": 1.38
      },
      {
        "name": "大硅片",
        "change_pct": 0.02
      },
      {
        "name": "AI PC",
        "change_pct": 0.01
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "回购",
        "change_pct": 1.15
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -0.41
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": 0.28
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "605136",
    "name": "丽人丽妆",
    "hot_rank": 91,
    "hot_rank_chg": -29,
    "stock_cnt": 5856,
    "price": "9.52",
    "change": "1.28",
    "market_id": "17",
    "circulate_market_value": "3812364900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": 0.99
      },
      {
        "name": "新零售",
        "change_pct": 1.14
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": 1.36
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": 0.41
      },
      {
        "name": "预制菜",
        "change_pct": 1.69
      },
      {
        "name": "化妆品",
        "change_pct": 1.11
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 93,
    "hot_rank_chg": -30,
    "stock_cnt": 5856,
    "price": "10.10",
    "change": "-3.99",
    "market_id": "33",
    "circulate_market_value": "8954577100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.38
      },
      {
        "name": "手机产业链",
        "change_pct": 0.55
      },
      {
        "name": "超高清视频",
        "change_pct": 0.14
      },
      {
        "name": "锂电池",
        "change_pct": -0.05
      },
      {
        "name": "OLED",
        "change_pct": 0.07
      },
      {
        "name": "包装印刷",
        "change_pct": 1.64
      },
      {
        "name": "光伏",
        "change_pct": 0.89
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.89
      },
      {
        "name": "小米概念股",
        "change_pct": 0.53
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": 0.2
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.06
      },
      {
        "name": "华为产业链",
        "change_pct": 0.67
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -0.73
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 99,
    "hot_rank_chg": 9,
    "stock_cnt": 5856,
    "price": "6.74",
    "change": "8.71",
    "market_id": "17",
    "circulate_market_value": "28843343000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 2.48
      },
      {
        "name": "橡胶",
        "change_pct": 2.63
      },
      {
        "name": "土地流转",
        "change_pct": 2.26
      },
      {
        "name": "农垦",
        "change_pct": 2.1
      },
      {
        "name": "海南概念",
        "change_pct": 1.67
      },
      {
        "name": "自由贸易港",
        "change_pct": 1.74
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 1.78
      },
      {
        "name": "大农业",
        "change_pct": 1.96
      },
      {
        "name": "可降解塑料",
        "change_pct": 1.06
      },
      {
        "name": "大消费",
        "change_pct": 1.58
      },
      {
        "name": "免税店概念",
        "change_pct": 1.55
      },
      {
        "name": "自贸区",
        "change_pct": 2.01
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600825", "name": "新华传媒", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "15.16", "change": "10.02", "market_id": "17", "circulate_market_value": "15840500000.00", "change_type": "1", "change_section": "14", "change_days": "11", "change_reason": "复牌"}, {"code": "601811", "name": "新华文轩", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "27.77", "change": "8.56", "market_id": "17", "circulate_market_value": "21999090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "9.15", "change": "2.69", "market_id": "33", "circulate_market_value": "4334174600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -0.68}, {"name": "强势人气股", "change_pct": 1.51}, {"name": "VR&AR", "change_pct": 0.43}, {"name": "游戏", "change_pct": -0.44}, {"name": "影视", "change_pct": 0.25}, {"name": "直播/短视频", "change_pct": 0.31}, {"name": "动漫", "change_pct": -0.67}, {"name": "腾讯概念股", "change_pct": 0.44}, {"name": "传媒", "change_pct": 0.77}, {"name": "元宇宙", "change_pct": 0.26}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "IP经济/谷子经济", "change_pct": 0.76}]}, {"code": "000530", "name": "冰山冷热", "hot_rank": 4, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "7.62", "change": "9.96", "market_id": "33", "circulate_market_value": "4572889400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 1.27}, {"name": "边缘计算", "change_pct": 0.94}, {"name": "核电", "change_pct": 1.57}, {"name": "海工装备", "change_pct": 2.18}, {"name": "云计算数据中心", "change_pct": 0.58}, {"name": "冷链", "change_pct": 1.77}, {"name": "地热", "change_pct": 1.54}, {"name": "储能", "change_pct": 0.92}, {"name": "碳中和", "change_pct": 1.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 2.4}, {"name": "汽车热管理", "change_pct": 1.47}, {"name": "热泵", "change_pct": 1.5}, {"name": "液冷服务器", "change_pct": 0.88}, {"name": "蜜雪冰城概念股", "change_pct": 2.32}, {"name": "海洋经济", "change_pct": 2.18}]}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 5, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "39.02", "change": "-2.47", "market_id": "33", "circulate_market_value": "47279742000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 6, "hot_rank_chg": 20, "stock_cnt": 5856, "price": "24.03", "change": "3.35", "market_id": "33", "circulate_market_value": "18674627000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 7, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "67.11", "change": "-4.74", "market_id": "17", "circulate_market_value": "9597683200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "10.13", "change": "-7.66", "market_id": "17", "circulate_market_value": "8802491700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.0}, {"name": "快递物流", "change_pct": 1.48}, {"name": "新零售", "change_pct": 1.18}, {"name": "福建自贸/海西概念", "change_pct": 2.61}, {"name": "旅游", "change_pct": 1.31}, {"name": "阿里巴巴概念股", "change_pct": 0.45}, {"name": "物业管理", "change_pct": 3.38}, {"name": "免税店概念", "change_pct": 1.6}, {"name": "自贸区", "change_pct": 2.03}]}, {"code": "000823", "name": "超声电子", "hot_rank": 9, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "25.36", "change": "-1.97", "market_id": "33", "circulate_market_value": "15087480000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 10, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "18.31", "change": "4.87", "market_id": "33", "circulate_market_value": "8398829700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 11, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "18.93", "change": "4.70", "market_id": "17", "circulate_market_value": "42012347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 12, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "16.38", "change": "-3.48", "market_id": "33", "circulate_market_value": "4627144200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600812", "name": "华北制药", "hot_rank": 13, "hot_rank_chg": -8, "stock_cnt": 5856, "price": "6.55", "change": "-0.30", "market_id": "17", "circulate_market_value": "11255191200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": 3.28}, {"name": "雄安新区", "change_pct": 1.75}, {"name": "医药", "change_pct": 1.83}, {"name": "疫苗", "change_pct": 1.78}, {"name": "化学原料药", "change_pct": 2.2}, {"name": "流感", "change_pct": 1.67}, {"name": "肝素", "change_pct": 1.52}, {"name": "眼科", "change_pct": 2.24}]}, {"code": "300308", "name": "中际旭创", "hot_rank": 14, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "667.65", "change": "1.61", "market_id": "33", "circulate_market_value": "740894050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 15, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "14.46", "change": "7.67", "market_id": "17", "circulate_market_value": "9280185300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 16, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "9.90", "change": "-7.74", "market_id": "33", "circulate_market_value": "3309163300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": 1.52}, {"name": "饲料", "change_pct": 2.41}, {"name": "一带一路", "change_pct": 1.6}, {"name": "强势人气股", "change_pct": 1.51}, {"name": "保健品", "change_pct": 1.7}, {"name": "山东国企改革", "change_pct": 1.18}, {"name": "污水处理", "change_pct": 1.56}, {"name": "环保", "change_pct": 1.76}, {"name": "食品", "change_pct": 1.2}, {"name": "预制菜", "change_pct": 1.75}, {"name": "国企改革", "change_pct": 1.57}, {"name": "水产养殖", "change_pct": 1.89}, {"name": "广西概念", "change_pct": 1.29}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 17, "hot_rank_chg": 10, "stock_cnt": 5856, "price": "17.32", "change": "0.99", "market_id": "17", "circulate_market_value": "7702222200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 18, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "22.37", "change": "9.98", "market_id": "17", "circulate_market_value": "50425966000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三部门联合调查"}, {"code": "600176", "name": "中国巨石", "hot_rank": 19, "hot_rank_chg": 37, "stock_cnt": 5856, "price": "34.05", "change": "0.18", "market_id": "17", "circulate_market_value": "135232540000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 20, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "17.61", "change": "1.73", "market_id": "33", "circulate_market_value": "13422310000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603999", "name": "读者传媒", "hot_rank": 21, "hot_rank_chg": 31, "stock_cnt": 5856, "price": "8.38", "change": "9.97", "market_id": "17", "circulate_market_value": "4826880000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人工智能", "xgb_concepts": [{"name": "知识产权", "change_pct": 1.12}, {"name": "传媒", "change_pct": 0.77}, {"name": "NFT", "change_pct": 0.77}, {"name": "在线教育", "change_pct": 0.78}, {"name": "知识付费", "change_pct": 0.5}]}, {"code": "600241", "name": "时代万恒", "hot_rank": 22, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "13.63", "change": "-2.57", "market_id": "17", "circulate_market_value": "4011337800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605189", "name": "富春染织", "hot_rank": 23, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "16.57", "change": "-7.17", "market_id": "17", "circulate_market_value": "3947552900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301569", "name": "联亚药业", "hot_rank": 24, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "32.21", "change": "-8.29", "market_id": "33", "circulate_market_value": "3763672700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 25, "hot_rank_chg": 73, "stock_cnt": 5856, "price": "14.71", "change": "2.58", "market_id": "17", "circulate_market_value": "30787501000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 26, "hot_rank_chg": -1, "stock_cnt": 5856, "price": "15.74", "change": "2.41", "market_id": "33", "circulate_market_value": "10390053600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 27, "hot_rank_chg": 13, "stock_cnt": 5856, "price": "23.88", "change": "0.46", "market_id": "17", "circulate_market_value": "9145186300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 28, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "55.70", "change": "4.41", "market_id": "17", "circulate_market_value": "9774241700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 29, "hot_rank_chg": -6, "stock_cnt": 5856, "price": "28.07", "change": "-3.24", "market_id": "17", "circulate_market_value": "12319834200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 30, "hot_rank_chg": 14, "stock_cnt": 5856, "price": "123.84", "change": "-0.29", "market_id": "33", "circulate_market_value": "171682080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603096", "name": "新经典", "hot_rank": 31, "hot_rank_chg": 8, "stock_cnt": 5856, "price": "22.73", "change": "-2.24", "market_id": "17", "circulate_market_value": "3505753000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 32, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "11.62", "change": "-3.57", "market_id": "17", "circulate_market_value": "4468443500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 1.87}, {"name": "股权转让", "change_pct": 1.26}, {"name": "强势人气股", "change_pct": 1.51}, {"name": "新疆概念", "change_pct": 1.71}, {"name": "医药", "change_pct": 1.83}, {"name": "流感", "change_pct": 1.67}, {"name": "国资入股", "change_pct": 0.93}, {"name": "减肥药", "change_pct": 2.35}]}, {"code": "001330", "name": "博纳影业", "hot_rank": 33, "hot_rank_chg": 31, "stock_cnt": 5856, "price": "6.72", "change": "-2.61", "market_id": "33", "circulate_market_value": "7814334000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": 0.25}, {"name": "新疆概念", "change_pct": 1.71}, {"name": "阿里巴巴概念股", "change_pct": 0.45}, {"name": "腾讯概念股", "change_pct": 0.44}, {"name": "短剧/互动影游", "change_pct": 0.22}, {"name": "IP经济/谷子经济", "change_pct": 0.76}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 34, "hot_rank_chg": 11, "stock_cnt": 5856, "price": "46.15", "change": "1.43", "market_id": "17", "circulate_market_value": "113284848000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 35, "hot_rank_chg": 3, "stock_cnt": 5856, "price": "38.50", "change": "-3.31", "market_id": "17", "circulate_market_value": "32600769000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301282", "name": "金禄电子", "hot_rank": 36, "hot_rank_chg": 15, "stock_cnt": 5856, "price": "45.97", "change": "-7.91", "market_id": "33", "circulate_market_value": "8117284900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 37, "hot_rank_chg": -21, "stock_cnt": 5856, "price": "6.40", "change": "3.39", "market_id": "17", "circulate_market_value": "16118463000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 1.0}, {"name": "工业大麻", "change_pct": 1.82}, {"name": "中药", "change_pct": 1.83}, {"name": "保健品", "change_pct": 1.7}, {"name": "民营医院", "change_pct": 1.68}, {"name": "医药", "change_pct": 1.83}, {"name": "化学原料药", "change_pct": 2.2}, {"name": "流感", "change_pct": 1.67}, {"name": "振兴东北", "change_pct": 1.69}, {"name": "食品", "change_pct": 1.2}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 38, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "67.01", "change": "-5.74", "market_id": "33", "circulate_market_value": "48598102000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 39, "hot_rank_chg": -3, "stock_cnt": 5856, "price": "287.09", "change": "3.19", "market_id": "17", "circulate_market_value": "192663840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 40, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "14.28", "change": "6.81", "market_id": "33", "circulate_market_value": "2533386200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002044", "name": "美年健康", "hot_rank": 41, "hot_rank_chg": 333, "stock_cnt": 5856, "price": "4.73", "change": "1.94", "market_id": "33", "circulate_market_value": "18363839000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体外诊断", "change_pct": 1.48}, {"name": "健康中国", "change_pct": 1.15}, {"name": "人工智能", "change_pct": 1.03}, {"name": "互联网医疗", "change_pct": 1.47}, {"name": "基因测序", "change_pct": 1.29}, {"name": "民营医院", "change_pct": 1.68}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "阿尔茨海默病", "change_pct": 1.32}, {"name": "新冠病毒防治", "change_pct": 1.34}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "AI大模型/智能体", "change_pct": 0.62}, {"name": "AI医疗", "change_pct": 1.22}]}, {"code": "002579", "name": "中京电子", "hot_rank": 42, "hot_rank_chg": 23, "stock_cnt": 5856, "price": "15.59", "change": "-3.05", "market_id": "33", "circulate_market_value": "9095802400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603636", "name": "南威软件", "hot_rank": 43, "hot_rank_chg": 618, "stock_cnt": 5856, "price": "8.04", "change": "9.99", "market_id": "17", "circulate_market_value": "4666098600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧", "xgb_concepts": [{"name": "边缘计算", "change_pct": 0.88}, {"name": "国产软件", "change_pct": 0.52}, {"name": "蚂蚁集团概念股", "change_pct": 0.85}, {"name": "共享经济", "change_pct": 1.65}, {"name": "人工智能", "change_pct": 1.0}, {"name": "网络安全", "change_pct": 0.24}, {"name": "福建自贸/海西概念", "change_pct": 2.6}, {"name": "智慧停车", "change_pct": 2.03}, {"name": "物联网", "change_pct": 1.23}, {"name": "大数据", "change_pct": 0.67}, {"name": "智慧城市", "change_pct": 1.35}, {"name": "储能", "change_pct": 0.92}, {"name": "智慧安防", "change_pct": 1.1}, {"name": "数字经济", "change_pct": 0.89}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "信创", "change_pct": 0.2}, {"name": "华为昇腾", "change_pct": 1.12}, {"name": "东数西算/算力", "change_pct": 0.53}, {"name": "电子身份证", "change_pct": 0.88}, {"name": "数据要素", "change_pct": 0.74}, {"name": "数字乡村", "change_pct": 1.31}, {"name": "智慧政务", "change_pct": 0.55}, {"name": "华为云·鲲鹏", "change_pct": 0.31}, {"name": "智慧灯杆", "change_pct": 1.66}, {"name": "算电协同", "change_pct": 1.03}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "自贸区", "change_pct": 2.01}, {"name": "AI大模型/智能体", "change_pct": 0.62}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "智谱AI", "change_pct": 0.59}, {"name": "DeepSeek概念股", "change_pct": 0.1}, {"name": "算力一体机", "change_pct": 0.96}, {"name": "区块链", "change_pct": 0.75}]}, {"code": "300502", "name": "新易盛", "hot_rank": 44, "hot_rank_chg": -9, "stock_cnt": 5856, "price": "307.29", "change": "0.46", "market_id": "33", "circulate_market_value": "385714630000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 45, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "36.13", "change": "2.29", "market_id": "33", "circulate_market_value": "22788840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 46, "hot_rank_chg": -28, "stock_cnt": 5856, "price": "45.63", "change": "4.68", "market_id": "17", "circulate_market_value": "205473670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 47, "hot_rank_chg": -14, "stock_cnt": 5856, "price": "14.70", "change": "1.24", "market_id": "17", "circulate_market_value": "5200323300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 48, "hot_rank_chg": 0, "stock_cnt": 5856, "price": "23.00", "change": "-3.12", "market_id": "33", "circulate_market_value": "3298847800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002281", "name": "光迅科技", "hot_rank": 49, "hot_rank_chg": 65, "stock_cnt": 5856, "price": "135.99", "change": "2.28", "market_id": "33", "circulate_market_value": "106876465000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603386", "name": "骏亚科技", "hot_rank": 50, "hot_rank_chg": 5, "stock_cnt": 5856, "price": "18.76", "change": "-7.36", "market_id": "17", "circulate_market_value": "6118548000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 51, "hot_rank_chg": 29, "stock_cnt": 5856, "price": "64.15", "change": "1.23", "market_id": "33", "circulate_market_value": "61422060000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 52, "hot_rank_chg": -11, "stock_cnt": 5856, "price": "35.63", "change": "2.24", "market_id": "33", "circulate_market_value": "8686046700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 53, "hot_rank_chg": -16, "stock_cnt": 5856, "price": "112.74", "change": "-2.96", "market_id": "33", "circulate_market_value": "216782300000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 54, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "42.97", "change": "-8.05", "market_id": "33", "circulate_market_value": "15834586000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 55, "hot_rank_chg": -26, "stock_cnt": 5856, "price": "246.05", "change": "0.84", "market_id": "33", "circulate_market_value": "69349658000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 56, "hot_rank_chg": -2, "stock_cnt": 5856, "price": "19.89", "change": "-3.59", "market_id": "17", "circulate_market_value": "4200035700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001216", "name": "华瓷股份", "hot_rank": 57, "hot_rank_chg": -11, "stock_cnt": 5856, "price": "23.99", "change": "-1.80", "market_id": "33", "circulate_market_value": "5921600400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 58, "hot_rank_chg": 35, "stock_cnt": 5856, "price": "35.33", "change": "-2.83", "market_id": "33", "circulate_market_value": "53658774000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 59, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "40.90", "change": "-2.99", "market_id": "33", "circulate_market_value": "46932340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002103", "name": "广博股份", "hot_rank": 60, "hot_rank_chg": 31, "stock_cnt": 5856, "price": "7.15", "change": "-4.67", "market_id": "33", "circulate_market_value": "2775169500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.99}, {"name": "一带一路", "change_pct": 1.59}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": 0.89}, {"name": "快手概念股", "change_pct": -0.53}, {"name": "字节跳动概念股", "change_pct": 0.02}, {"name": "IP经济/谷子经济", "change_pct": 0.72}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 61, "hot_rank_chg": 13, "stock_cnt": 5856, "price": "215.20", "change": "-3.64", "market_id": "33", "circulate_market_value": "234329950000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603083", "name": "剑桥科技", "hot_rank": 62, "hot_rank_chg": 152, "stock_cnt": 5856, "price": "169.19", "change": "1.19", "market_id": "17", "circulate_market_value": "46646088000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000722", "name": "湖南发展", "hot_rank": 63, "hot_rank_chg": -5, "stock_cnt": 5856, "price": "13.37", "change": "-4.16", "market_id": "33", "circulate_market_value": "6205796200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 64, "hot_rank_chg": 56, "stock_cnt": 5856, "price": "14.31", "change": "9.99", "market_id": "33", "circulate_market_value": "3595882000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体设备服务"}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 65, "hot_rank_chg": -33, "stock_cnt": 5856, "price": "5.11", "change": "-6.24", "market_id": "33", "circulate_market_value": "3632181900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": 1.0}, {"name": "影视", "change_pct": 0.16}, {"name": "旅游", "change_pct": 1.26}, {"name": "虚拟数字人", "change_pct": 0.1}, {"name": "AI营销", "change_pct": -0.54}, {"name": "AI大模型/智能体", "change_pct": 0.62}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "IP经济/谷子经济", "change_pct": 0.72}]}, {"code": "000573", "name": "粤宏远A", "hot_rank": 66, "hot_rank_chg": 228, "stock_cnt": 5856, "price": "4.47", "change": "10.10", "market_id": "33", "circulate_market_value": "2827542400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "股权收购", "xgb_concepts": [{"name": "资产重组", "change_pct": 1.33}, {"name": "锂电池", "change_pct": -0.05}, {"name": "房地产", "change_pct": 3.4}, {"name": "固废处理", "change_pct": 1.67}, {"name": "有色金属", "change_pct": 1.1}, {"name": "新能源汽车", "change_pct": 0.89}, {"name": "环保", "change_pct": 1.72}, {"name": "篮球", "change_pct": 2.85}]}, {"code": "000607", "name": "华媒控股", "hot_rank": 67, "hot_rank_chg": 204, "stock_cnt": 5856, "price": "4.61", "change": "10.02", "market_id": "33", "circulate_market_value": "4080136600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "文化传媒", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": 1.36}, {"name": "浙江国企改革", "change_pct": 1.58}, {"name": "教育", "change_pct": 1.83}, {"name": "知识产权", "change_pct": 1.08}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "传媒", "change_pct": 0.74}, {"name": "社区团购", "change_pct": 1.77}, {"name": "NFT", "change_pct": 0.73}, {"name": "数据要素", "change_pct": 0.74}, {"name": "字节跳动概念股", "change_pct": 0.02}, {"name": "国企改革", "change_pct": 1.57}, {"name": "职业教育", "change_pct": 0.72}, {"name": "在线教育", "change_pct": 0.72}, {"name": "短剧/互动影游", "change_pct": 0.16}, {"name": "区块链", "change_pct": 0.75}]}, {"code": "600172", "name": "黄河旋风", "hot_rank": 68, "hot_rank_chg": 105, "stock_cnt": 5856, "price": "12.16", "change": "1.33", "market_id": "17", "circulate_market_value": "15616828000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 1.22}, {"name": "智能制造", "change_pct": 1.17}, {"name": "工业互联网", "change_pct": 0.97}, {"name": "培育钻石", "change_pct": 1.7}, {"name": "金刚线", "change_pct": 1.55}, {"name": "国资入股", "change_pct": 0.92}, {"name": "深地经济", "change_pct": 1.81}]}, {"code": "600641", "name": "先导基电", "hot_rank": 69, "hot_rank_chg": 156, "stock_cnt": 5856, "price": "40.76", "change": "0.42", "market_id": "17", "circulate_market_value": "37932476000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 70, "hot_rank_chg": -10, "stock_cnt": 5856, "price": "33.15", "change": "9.99", "market_id": "17", "circulate_market_value": "22919102000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "光通信"}, {"code": "000592", "name": "平潭发展", "hot_rank": 71, "hot_rank_chg": 1, "stock_cnt": 5856, "price": "7.50", "change": "4.17", "market_id": "33", "circulate_market_value": "14363193000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 2.6}, {"name": "林业", "change_pct": 1.97}, {"name": "碳中和", "change_pct": 1.62}, {"name": "自贸区", "change_pct": 2.01}]}, {"code": "003040", "name": "楚天龙", "hot_rank": 73, "hot_rank_chg": 220, "stock_cnt": 5856, "price": "14.23", "change": "0.28", "market_id": "33", "circulate_market_value": "6496410700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 74, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "5.73", "change": "-1.04", "market_id": "33", "circulate_market_value": "4376605000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": 1.81}, {"name": "股权转让", "change_pct": 1.23}, {"name": "优化生育（三孩）", "change_pct": 1.36}, {"name": "强势人气股", "change_pct": 1.46}, {"name": "医药商业", "change_pct": 1.29}, {"name": "保健品", "change_pct": 1.71}, {"name": "民营医院", "change_pct": 1.7}, {"name": "医药", "change_pct": 1.83}, {"name": "食品", "change_pct": 1.19}, {"name": "辅助生殖", "change_pct": 1.29}, {"name": "口腔", "change_pct": 1.63}, {"name": "医美", "change_pct": 1.32}, {"name": "新冠病毒防治", "change_pct": 1.34}]}, {"code": "601138", "name": "工业富联", "hot_rank": 75, "hot_rank_chg": -4, "stock_cnt": 5856, "price": "48.32", "change": "3.03", "market_id": "17", "circulate_market_value": "958469660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002860", "name": "星帅尔", "hot_rank": 76, "hot_rank_chg": 185, "stock_cnt": 5856, "price": "20.12", "change": "10.01", "market_id": "33", "circulate_market_value": "6960280400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "精密刀具"}, {"code": "001246", "name": "力勤资源", "hot_rank": 77, "hot_rank_chg": 20, "stock_cnt": 5856, "price": "31.99", "change": "-2.23", "market_id": "33", "circulate_market_value": "5034450400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002185", "name": "华天科技", "hot_rank": 78, "hot_rank_chg": 32, "stock_cnt": 5856, "price": "14.20", "change": "0.21", "market_id": "33", "circulate_market_value": "47196316000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003029", "name": "吉大正元", "hot_rank": 79, "hot_rank_chg": 30, "stock_cnt": 5856, "price": "20.16", "change": "0.85", "market_id": "33", "circulate_market_value": "3541509900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920196", "name": "南方乳业", "hot_rank": 80, "hot_rank_chg": 2398, "stock_cnt": 5856, "price": "25.50", "change": "79.45", "market_id": "151", "circulate_market_value": "628055570.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 81, "hot_rank_chg": -12, "stock_cnt": 5856, "price": "5.63", "change": "-0.88", "market_id": "17", "circulate_market_value": "6859659800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.44}, {"name": "煤炭", "change_pct": 1.51}, {"name": "有色金属", "change_pct": 1.1}, {"name": "国企改革", "change_pct": 1.57}, {"name": "河南国企改革", "change_pct": 1.12}]}, {"code": "601127", "name": "赛力斯", "hot_rank": 82, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "46.51", "change": "2.17", "market_id": "17", "circulate_market_value": "72425530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 83, "hot_rank_chg": 7, "stock_cnt": 5856, "price": "57.22", "change": "-0.49", "market_id": "17", "circulate_market_value": "102408196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 84, "hot_rank_chg": 37, "stock_cnt": 5856, "price": "28.78", "change": "3.15", "market_id": "17", "circulate_market_value": "42076210000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 85, "hot_rank_chg": -35, "stock_cnt": 5856, "price": "210.10", "change": "-0.45", "market_id": "33", "circulate_market_value": "48740768000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603258", "name": "电魂网络", "hot_rank": 86, "hot_rank_chg": -25, "stock_cnt": 5856, "price": "15.26", "change": "-9.22", "market_id": "17", "circulate_market_value": "3682869000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 87, "hot_rank_chg": -57, "stock_cnt": 5856, "price": "422.50", "change": "4.29", "market_id": "17", "circulate_market_value": "12717778400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002491", "name": "通鼎互联", "hot_rank": 88, "hot_rank_chg": 80, "stock_cnt": 5856, "price": "17.75", "change": "4.17", "market_id": "33", "circulate_market_value": "20882321000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 90, "hot_rank_chg": -14, "stock_cnt": 5856, "price": "5.10", "change": "0.99", "market_id": "33", "circulate_market_value": "180372380000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.45}, {"name": "手机产业链", "change_pct": 0.55}, {"name": "超高清视频", "change_pct": 0.14}, {"name": "苹果产业链", "change_pct": 0.4}, {"name": "电竞", "change_pct": -0.52}, {"name": "半导体", "change_pct": 0.33}, {"name": "人工智能", "change_pct": 1.0}, {"name": "互联网医疗", "change_pct": 1.46}, {"name": "VR&AR", "change_pct": 0.38}, {"name": "OLED", "change_pct": 0.07}, {"name": "京津冀", "change_pct": 1.65}, {"name": "物联网", "change_pct": 1.23}, {"name": "指纹识别", "change_pct": 0.11}, {"name": "汽车零部件", "change_pct": 1.91}, {"name": "白马股", "change_pct": 0.85}, {"name": "智能制造", "change_pct": 1.17}, {"name": "小米概念股", "change_pct": 0.53}, {"name": "国产芯片", "change_pct": 0.62}, {"name": "液晶面板/LCD", "change_pct": 0.2}, {"name": "全息概念", "change_pct": 1.13}, {"name": "理想汽车概念股", "change_pct": 1.91}, {"name": "MicroLED", "change_pct": -0.1}, {"name": "钙钛矿电池", "change_pct": 0.85}, {"name": "智能手表", "change_pct": 0.64}, {"name": "MiniLED", "change_pct": 0.09}, {"name": "传感器", "change_pct": 1.38}, {"name": "大硅片", "change_pct": 0.02}, {"name": "AI PC", "change_pct": 0.01}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "回购", "change_pct": 1.15}, {"name": "光电共封装CPO", "change_pct": -0.41}, {"name": "智能眼镜/MR头显", "change_pct": 0.28}, {"name": "玻璃基板封装", "change_pct": -0.09}]}, {"code": "605136", "name": "丽人丽妆", "hot_rank": 91, "hot_rank_chg": -29, "stock_cnt": 5856, "price": "9.52", "change": "1.28", "market_id": "17", "circulate_market_value": "3812364900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": 0.99}, {"name": "新零售", "change_pct": 1.14}, {"name": "优化生育（三孩）", "change_pct": 1.36}, {"name": "阿里巴巴概念股", "change_pct": 0.41}, {"name": "预制菜", "change_pct": 1.69}, {"name": "化妆品", "change_pct": 1.11}]}, {"code": "603968", "name": "醋化股份", "hot_rank": 92, "hot_rank_chg": -19, "stock_cnt": 5856, "price": "13.85", "change": "-2.60", "market_id": "17", "circulate_market_value": "2834092800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 93, "hot_rank_chg": -30, "stock_cnt": 5856, "price": "10.10", "change": "-3.99", "market_id": "33", "circulate_market_value": "8954577100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.38}, {"name": "手机产业链", "change_pct": 0.55}, {"name": "超高清视频", "change_pct": 0.14}, {"name": "锂电池", "change_pct": -0.05}, {"name": "OLED", "change_pct": 0.07}, {"name": "包装印刷", "change_pct": 1.64}, {"name": "光伏", "change_pct": 0.89}, {"name": "新能源汽车", "change_pct": 0.89}, {"name": "小米概念股", "change_pct": 0.53}, {"name": "液晶面板/LCD", "change_pct": 0.2}, {"name": "可降解塑料", "change_pct": 1.06}, {"name": "华为产业链", "change_pct": 0.67}, {"name": "PET复合铜箔", "change_pct": -0.73}]}, {"code": "600183", "name": "生益科技", "hot_rank": 94, "hot_rank_chg": 28, "stock_cnt": 5856, "price": "114.00", "change": "-0.53", "market_id": "17", "circulate_market_value": "274963490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002980", "name": "华盛昌", "hot_rank": 95, "hot_rank_chg": 87, "stock_cnt": 5856, "price": "113.80", "change": "3.07", "market_id": "33", "circulate_market_value": "11545684500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 96, "hot_rank_chg": -13, "stock_cnt": 5856, "price": "25.01", "change": "-0.99", "market_id": "33", "circulate_market_value": "16533752000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 97, "hot_rank_chg": 34, "stock_cnt": 5856, "price": "26.77", "change": "1.36", "market_id": "17", "circulate_market_value": "91364662000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 98, "hot_rank_chg": -11, "stock_cnt": 5856, "price": "24.59", "change": "0.29", "market_id": "33", "circulate_market_value": "25133819000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 99, "hot_rank_chg": 9, "stock_cnt": 5856, "price": "6.74", "change": "8.71", "market_id": "17", "circulate_market_value": "28843343000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 2.48}, {"name": "橡胶", "change_pct": 2.63}, {"name": "土地流转", "change_pct": 2.26}, {"name": "农垦", "change_pct": 2.1}, {"name": "海南概念", "change_pct": 1.67}, {"name": "自由贸易港", "change_pct": 1.74}, {"name": "海南自由贸易港", "change_pct": 1.78}, {"name": "大农业", "change_pct": 1.96}, {"name": "可降解塑料", "change_pct": 1.06}, {"name": "大消费", "change_pct": 1.58}, {"name": "免税店概念", "change_pct": 1.55}, {"name": "自贸区", "change_pct": 2.01}]}, {"code": "603629", "name": "利通电子", "hot_rank": 100, "hot_rank_chg": 66, "stock_cnt": 5856, "price": "84.27", "change": "-0.75", "market_id": "17", "circulate_market_value": "30401768000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524505": "[立案调查] 25宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524784": "[立案调查] 26宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524990": "[立案调查] 26宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524583": "[立案调查] 25宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};