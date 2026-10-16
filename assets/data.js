const UPDATE_TIME = "2026-10-16 07:50";
const THS_HOT = [
  {
    "name": "飞行汽车(eVTOL)",
    "rise": 4.01,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "航空航天ETF",
    "code": "886066"
  },
  {
    "name": "低空经济",
    "rise": 2.02,
    "rate": 0,
    "tag": "23家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "航空ETF",
    "code": "886067"
  },
  {
    "name": "兵装重组概念",
    "rise": 5.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 1,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "创新药",
    "rise": -0.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": -1,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": 1.62,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "连续238天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -1.21,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续309天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "PCB概念",
    "rise": -1.38,
    "rate": 0,
    "tag": "",
    "hotTag": "连续132天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "冰雪产业",
    "rise": 1.01,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "军工",
    "rise": 2.07,
    "rate": 0,
    "tag": "20家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "存储芯片",
    "rise": -0.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续262天上榜",
    "rankChg": 1,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "固态电池",
    "rise": -0.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": -1,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "CRO概念",
    "rise": -2.17,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "碳纤维",
    "rise": 2.99,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885650"
  },
  {
    "name": "白酒概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 1,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "AI应用",
    "rise": -0.53,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": -1,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "人形机器人",
    "rise": 1.12,
    "rate": 0,
    "tag": "9家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "MLCC概念",
    "rise": -1.02,
    "rate": 0,
    "tag": "",
    "hotTag": "连续49天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "特斯拉概念",
    "rise": 1.52,
    "rate": 0,
    "tag": "10家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "智能驾驶ETF",
    "code": "885467"
  },
  {
    "name": "成飞概念",
    "rise": 3.83,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "886030"
  },
  {
    "name": "光纤概念",
    "rise": -0.06,
    "rate": 0,
    "tag": "",
    "hotTag": "连续138天上榜",
    "rankChg": 1,
    "etfName": "电网设备ETF",
    "code": "886084"
  }
];
const THS_EVENTS = [
  {
    "title": "第十六届中国航展将于12月7日至13日在珠海举办 首设海上展区 自研重器集中亮相",
    "desc": "",
    "heat": 480544,
    "direction": "军工装备",
    "themes": [
      "军工装备",
      "兵装重组概念",
      "军民融合",
      "军工电子",
      "军工信息化",
      "成飞概念"
    ],
    "stocks": [
      {
        "name": "晟楠科技",
        "code": "920006",
        "chg": 29.976852
      }
    ]
  },
  {
    "title": "这次能飞了！特斯拉展示新款Roadster：2028年投产",
    "desc": "",
    "heat": 475994,
    "direction": "飞行汽车",
    "themes": [
      "飞行汽车(eVTOL)",
      "低空经济",
      "特斯拉概念",
      "碳纤维"
    ],
    "stocks": [
      {
        "name": "捷众科技",
        "code": "920690",
        "chg": 30.0
      }
    ]
  },
  {
    "title": "美股三大指数集体收涨，黄金概念涨幅居前，COMEX黄金期货收涨2.06%",
    "desc": "",
    "heat": 369973,
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
        "chg": 4.183267
      }
    ]
  },
  {
    "title": "北上广深等七城落地细则 商品住房销售制度改革有序推进",
    "desc": "",
    "heat": 330707,
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
    "title": "三部门联合调查尊界刹车安全事件 尊界回应全力配合",
    "desc": "",
    "heat": 276282,
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
    "title": "谷歌在量子计算取得突破，“魔态培育”技术使 Willow 芯片错误率降低约 40 倍",
    "desc": "",
    "heat": 92818,
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
    "heat": 29660,
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
    "title": "国家医保局：加强医保目录和支付管理 强化医药价格管理",
    "desc": "",
    "heat": 25159,
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
        "chg": 19.926199
      }
    ]
  },
  {
    "title": "电子布价格涨势延续 高端产能有望释放",
    "desc": "",
    "heat": 205,
    "direction": "电子布涨价",
    "themes": [
      "电子布",
      "PCB概念"
    ],
    "stocks": [
      {
        "name": "惠柏新材",
        "code": "301555",
        "chg": 10.635496
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "通用航空",
    "change": "+4.48%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "飞行汽车/eVTOL",
    "change": "+4.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "有色 · 镁",
    "change": "+4.22%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "船舶",
    "change": "+3.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "碳纤维",
    "change": "+3.49%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "无人机",
    "change": "+3.37%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "白糖",
    "change": "+3.32%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "住房租赁",
    "change": "+3.19%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "低空经济",
    "change": "+3.12%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民爆",
    "change": "+3.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "太空算力",
    "change": "+3.11%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "水泥",
    "change": "+3.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航母",
    "change": "+2.97%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "一体化压铸",
    "change": "+2.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工集团",
    "change": "+2.86%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大飞机",
    "change": "+2.85%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "蔚来汽车概念股",
    "change": "+2.78%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "重卡",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "理想汽车概念股",
    "change": "+2.67%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "军工信息化",
    "change": "+2.62%",
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
    "stock_cnt": 5787,
    "price": "9.33",
    "change": "4.71",
    "market_id": "33",
    "circulate_market_value": "4419437100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -2.56
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "VR&AR",
        "change_pct": -0.5
      },
      {
        "name": "游戏",
        "change_pct": -2.07
      },
      {
        "name": "影视",
        "change_pct": -1.93
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.77
      },
      {
        "name": "动漫",
        "change_pct": -2.34
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.83
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "元宇宙",
        "change_pct": -0.99
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 6,
    "hot_rank_chg": 1,
    "stock_cnt": 5787,
    "price": "7.62",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "4572889400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": 0.05
      },
      {
        "name": "边缘计算",
        "change_pct": -0.23
      },
      {
        "name": "核电",
        "change_pct": 1.41
      },
      {
        "name": "海工装备",
        "change_pct": 1.93
      },
      {
        "name": "云计算数据中心",
        "change_pct": -0.28
      },
      {
        "name": "冷链",
        "change_pct": 0.88
      },
      {
        "name": "地热",
        "change_pct": 0.88
      },
      {
        "name": "储能",
        "change_pct": 0.6
      },
      {
        "name": "碳中和",
        "change_pct": 0.8
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": 0.96
      },
      {
        "name": "汽车热管理",
        "change_pct": 1.58
      },
      {
        "name": "热泵",
        "change_pct": 0.82
      },
      {
        "name": "液冷服务器",
        "change_pct": 0.36
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": 1.15
      },
      {
        "name": "海洋经济",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 8,
    "hot_rank_chg": 3,
    "stock_cnt": 5787,
    "price": "9.87",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "8576564000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "快递物流",
        "change_pct": 0.55
      },
      {
        "name": "新零售",
        "change_pct": -0.55
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.64
      },
      {
        "name": "旅游",
        "change_pct": -0.28
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "物业管理",
        "change_pct": 1.69
      },
      {
        "name": "免税店概念",
        "change_pct": 0.35
      },
      {
        "name": "自贸区",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 10,
    "hot_rank_chg": 6,
    "stock_cnt": 5787,
    "price": "6.32",
    "change": "2.10",
    "market_id": "17",
    "circulate_market_value": "15916982000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "工业大麻",
        "change_pct": 0.57
      },
      {
        "name": "中药",
        "change_pct": -0.19
      },
      {
        "name": "保健品",
        "change_pct": 0.09
      },
      {
        "name": "民营医院",
        "change_pct": 0.24
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "化学原料药",
        "change_pct": -0.01
      },
      {
        "name": "流感",
        "change_pct": -0.32
      },
      {
        "name": "振兴东北",
        "change_pct": 1.0
      },
      {
        "name": "食品",
        "change_pct": -0.17
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 14,
    "hot_rank_chg": -9,
    "stock_cnt": 5787,
    "price": "6.26",
    "change": "-4.72",
    "market_id": "17",
    "circulate_market_value": "10740472100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "维生素",
        "change_pct": 0.87
      },
      {
        "name": "雄安新区",
        "change_pct": 0.98
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "疫苗",
        "change_pct": -0.46
      },
      {
        "name": "化学原料药",
        "change_pct": -0.01
      },
      {
        "name": "流感",
        "change_pct": -0.32
      },
      {
        "name": "肝素",
        "change_pct": -0.54
      },
      {
        "name": "眼科",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 23,
    "hot_rank_chg": -9,
    "stock_cnt": 5787,
    "price": "9.66",
    "change": "-9.97",
    "market_id": "33",
    "circulate_market_value": "3228941100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -0.22
      },
      {
        "name": "饲料",
        "change_pct": 0.87
      },
      {
        "name": "一带一路",
        "change_pct": 1.09
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "保健品",
        "change_pct": 0.09
      },
      {
        "name": "山东国企改革",
        "change_pct": 0.5
      },
      {
        "name": "污水处理",
        "change_pct": 0.63
      },
      {
        "name": "环保",
        "change_pct": 0.93
      },
      {
        "name": "食品",
        "change_pct": -0.17
      },
      {
        "name": "预制菜",
        "change_pct": 0.3
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      },
      {
        "name": "水产养殖",
        "change_pct": 0.22
      },
      {
        "name": "广西概念",
        "change_pct": 0.28
      }
    ]
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 28,
    "hot_rank_chg": -8,
    "stock_cnt": 5787,
    "price": "11.02",
    "change": "-8.55",
    "market_id": "17",
    "circulate_market_value": "4237714900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.65
      },
      {
        "name": "股权转让",
        "change_pct": 0.59
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "新疆概念",
        "change_pct": 0.95
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "流感",
        "change_pct": -0.32
      },
      {
        "name": "国资入股",
        "change_pct": -0.15
      },
      {
        "name": "减肥药",
        "change_pct": -0.22
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 35,
    "hot_rank_chg": 64,
    "stock_cnt": 5787,
    "price": "9.75",
    "change": "19.93",
    "market_id": "33",
    "circulate_market_value": "10294253800.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": -0.65
      },
      {
        "name": "医疗器械",
        "change_pct": -0.36
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "疫苗",
        "change_pct": -0.46
      },
      {
        "name": "化学原料药",
        "change_pct": -0.01
      },
      {
        "name": "干细胞",
        "change_pct": -0.87
      },
      {
        "name": "眼科",
        "change_pct": 0.5
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": 0.23
      }
    ]
  },
  {
    "code": "603999",
    "name": "读者传媒",
    "hot_rank": 39,
    "hot_rank_chg": 13,
    "stock_cnt": 5787,
    "price": "8.38",
    "change": "9.97",
    "market_id": "17",
    "circulate_market_value": "4826880000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "知识产权",
        "change_pct": -0.21
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "NFT",
        "change_pct": -1.03
      },
      {
        "name": "在线教育",
        "change_pct": -1.16
      },
      {
        "name": "知识付费",
        "change_pct": -1.21
      }
    ]
  },
  {
    "code": "600865",
    "name": "百大集团",
    "hot_rank": 40,
    "hot_rank_chg": 229,
    "stock_cnt": 5787,
    "price": "10.78",
    "change": "3.06",
    "market_id": "17",
    "circulate_market_value": "4055870600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "物业管理",
        "change_pct": 1.69
      },
      {
        "name": "免税店概念",
        "change_pct": 0.35
      },
      {
        "name": "地摊经济",
        "change_pct": 0.11
      }
    ]
  },
  {
    "code": "601999",
    "name": "出版传媒",
    "hot_rank": 44,
    "hot_rank_chg": 152,
    "stock_cnt": 5787,
    "price": "8.25",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4545046300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "教育",
        "change_pct": 0.29
      },
      {
        "name": "数字经济",
        "change_pct": -0.0
      },
      {
        "name": "知识产权",
        "change_pct": -0.21
      },
      {
        "name": "振兴东北",
        "change_pct": 1.0
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "在线教育",
        "change_pct": -1.16
      }
    ]
  },
  {
    "code": "002437",
    "name": "誉衡药业",
    "hot_rank": 46,
    "hot_rank_chg": 265,
    "stock_cnt": 5787,
    "price": "3.53",
    "change": "7.62",
    "market_id": "33",
    "circulate_market_value": "7422447400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "维生素",
        "change_pct": 0.87
      },
      {
        "name": "基因测序",
        "change_pct": -0.86
      },
      {
        "name": "民营医院",
        "change_pct": 0.24
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "化学原料药",
        "change_pct": -0.01
      },
      {
        "name": "PD-1抑制剂",
        "change_pct": 0.29
      }
    ]
  },
  {
    "code": "600613",
    "name": "神奇制药",
    "hot_rank": 51,
    "hot_rank_chg": 130,
    "stock_cnt": 5787,
    "price": "8.01",
    "change": "4.16",
    "market_id": "17",
    "circulate_market_value": "3839353000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.19
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "医药商业",
        "change_pct": -0.76
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "流感",
        "change_pct": -0.32
      }
    ]
  },
  {
    "code": "002085",
    "name": "万丰奥威",
    "hot_rank": 55,
    "hot_rank_chg": 700,
    "stock_cnt": 5787,
    "price": "9.91",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "21041878000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.1
      },
      {
        "name": "特斯拉",
        "change_pct": 1.34
      },
      {
        "name": "通用航空",
        "change_pct": 4.48
      },
      {
        "name": "锂电池",
        "change_pct": -0.48
      },
      {
        "name": "海工装备",
        "change_pct": 1.93
      },
      {
        "name": "有色 · 镁",
        "change_pct": 4.22
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.38
      },
      {
        "name": "有色金属",
        "change_pct": 0.74
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "无人机",
        "change_pct": 3.37
      },
      {
        "name": "小米概念股",
        "change_pct": -0.38
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.1
      },
      {
        "name": "一体化压铸",
        "change_pct": 2.92
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 4.27
      },
      {
        "name": "低空经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "000892",
    "name": "欢瑞世纪",
    "hot_rank": 57,
    "hot_rank_chg": -25,
    "stock_cnt": 5787,
    "price": "5.00",
    "change": "-8.26",
    "market_id": "33",
    "circulate_market_value": "3553994000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "影视",
        "change_pct": -1.93
      },
      {
        "name": "旅游",
        "change_pct": -0.28
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.57
      },
      {
        "name": "AI营销",
        "change_pct": -2.75
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.55
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "AI视频",
        "change_pct": -2.1
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 61,
    "hot_rank_chg": 11,
    "stock_cnt": 5787,
    "price": "7.34",
    "change": "1.94",
    "market_id": "33",
    "circulate_market_value": "14056779000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.64
      },
      {
        "name": "林业",
        "change_pct": 0.85
      },
      {
        "name": "碳中和",
        "change_pct": 0.8
      },
      {
        "name": "自贸区",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "001330",
    "name": "博纳影业",
    "hot_rank": 63,
    "hot_rank_chg": 1,
    "stock_cnt": 5787,
    "price": "6.68",
    "change": "-3.19",
    "market_id": "33",
    "circulate_market_value": "7767820100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "影视",
        "change_pct": -1.93
      },
      {
        "name": "新疆概念",
        "change_pct": 0.95
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.83
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "AI视频",
        "change_pct": -2.1
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.98
      }
    ]
  },
  {
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 64,
    "hot_rank_chg": 207,
    "stock_cnt": 5787,
    "price": "4.61",
    "change": "10.02",
    "market_id": "33",
    "circulate_market_value": "4080136600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.21
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.76
      },
      {
        "name": "教育",
        "change_pct": 0.29
      },
      {
        "name": "知识产权",
        "change_pct": -0.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "社区团购",
        "change_pct": 0.47
      },
      {
        "name": "NFT",
        "change_pct": -1.03
      },
      {
        "name": "数据要素",
        "change_pct": -0.21
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.73
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      },
      {
        "name": "职业教育",
        "change_pct": -0.71
      },
      {
        "name": "在线教育",
        "change_pct": -1.16
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "区块链",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 65,
    "hot_rank_chg": 11,
    "stock_cnt": 5787,
    "price": "5.13",
    "change": "1.58",
    "market_id": "33",
    "circulate_market_value": "181433400000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": 0.05
      },
      {
        "name": "手机产业链",
        "change_pct": -0.25
      },
      {
        "name": "超高清视频",
        "change_pct": -1.11
      },
      {
        "name": "苹果产业链",
        "change_pct": -0.29
      },
      {
        "name": "电竞",
        "change_pct": -2.06
      },
      {
        "name": "半导体",
        "change_pct": -0.46
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "互联网医疗",
        "change_pct": -0.28
      },
      {
        "name": "VR&AR",
        "change_pct": -0.5
      },
      {
        "name": "OLED",
        "change_pct": -0.56
      },
      {
        "name": "京津冀",
        "change_pct": 0.85
      },
      {
        "name": "物联网",
        "change_pct": 0.51
      },
      {
        "name": "指纹识别",
        "change_pct": -0.47
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.38
      },
      {
        "name": "白马股",
        "change_pct": 0.41
      },
      {
        "name": "智能制造",
        "change_pct": 0.64
      },
      {
        "name": "小米概念股",
        "change_pct": -0.38
      },
      {
        "name": "国产芯片",
        "change_pct": -0.09
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.35
      },
      {
        "name": "全息概念",
        "change_pct": -0.15
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.67
      },
      {
        "name": "MicroLED",
        "change_pct": -0.86
      },
      {
        "name": "钙钛矿电池",
        "change_pct": 0.34
      },
      {
        "name": "智能手表",
        "change_pct": 0.01
      },
      {
        "name": "MiniLED",
        "change_pct": -0.63
      },
      {
        "name": "传感器",
        "change_pct": 0.7
      },
      {
        "name": "大硅片",
        "change_pct": -1.22
      },
      {
        "name": "AI PC",
        "change_pct": -0.86
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      },
      {
        "name": "回购",
        "change_pct": 0.28
      },
      {
        "name": "光电共封装CPO",
        "change_pct": -1.12
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.62
      },
      {
        "name": "玻璃基板封装",
        "change_pct": -0.54
      }
    ]
  },
  {
    "code": "000011",
    "name": "深物业A",
    "hot_rank": 66,
    "hot_rank_chg": 60,
    "stock_cnt": 5787,
    "price": "11.40",
    "change": "5.36",
    "market_id": "33",
    "circulate_market_value": "6001821200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "深圳本地股",
        "change_pct": 0.9
      },
      {
        "name": "房地产",
        "change_pct": 1.72
      },
      {
        "name": "粤港澳大湾区",
        "change_pct": 1.04
      },
      {
        "name": "住房租赁",
        "change_pct": 3.19
      },
      {
        "name": "物业管理",
        "change_pct": 1.69
      },
      {
        "name": "新型城镇化",
        "change_pct": 1.23
      },
      {
        "name": "旧改",
        "change_pct": 1.67
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 70,
    "hot_rank_chg": -21,
    "stock_cnt": 5787,
    "price": "5.77",
    "change": "-0.34",
    "market_id": "33",
    "circulate_market_value": "4414862000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.19
      },
      {
        "name": "股权转让",
        "change_pct": 0.59
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.21
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      },
      {
        "name": "医药商业",
        "change_pct": -0.76
      },
      {
        "name": "保健品",
        "change_pct": 0.09
      },
      {
        "name": "民营医院",
        "change_pct": 0.24
      },
      {
        "name": "医药",
        "change_pct": -0.42
      },
      {
        "name": "食品",
        "change_pct": -0.17
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.69
      },
      {
        "name": "口腔",
        "change_pct": -0.01
      },
      {
        "name": "医美",
        "change_pct": -0.42
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.18
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 77,
    "hot_rank_chg": 31,
    "stock_cnt": 5787,
    "price": "6.75",
    "change": "8.87",
    "market_id": "17",
    "circulate_market_value": "28886138000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农业种植",
        "change_pct": 1.21
      },
      {
        "name": "橡胶",
        "change_pct": 2.28
      },
      {
        "name": "土地流转",
        "change_pct": 0.99
      },
      {
        "name": "农垦",
        "change_pct": 0.85
      },
      {
        "name": "海南概念",
        "change_pct": 0.8
      },
      {
        "name": "自由贸易港",
        "change_pct": 0.77
      },
      {
        "name": "海南自由贸易港",
        "change_pct": 0.8
      },
      {
        "name": "大农业",
        "change_pct": 1.03
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.49
      },
      {
        "name": "大消费",
        "change_pct": 0.97
      },
      {
        "name": "免税店概念",
        "change_pct": 0.35
      },
      {
        "name": "自贸区",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 80,
    "hot_rank_chg": -2,
    "stock_cnt": 5787,
    "price": "7.21",
    "change": "-4.38",
    "market_id": "33",
    "circulate_market_value": "11730625100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "电竞",
        "change_pct": -2.06
      },
      {
        "name": "手游",
        "change_pct": -2.56
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "游戏",
        "change_pct": -2.07
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -0.0
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.83
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "快手概念股",
        "change_pct": -2.46
      },
      {
        "name": "元宇宙",
        "change_pct": -0.99
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.57
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.35
      },
      {
        "name": "web3.0",
        "change_pct": -0.98
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.29
      },
      {
        "name": "数据要素",
        "change_pct": -0.21
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.73
      },
      {
        "name": "AI营销",
        "change_pct": -2.75
      },
      {
        "name": "ChatGPT",
        "change_pct": -1.26
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -0.62
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.55
      },
      {
        "name": "人形机器人",
        "change_pct": 1.44
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "多模态",
        "change_pct": -0.96
      },
      {
        "name": "AI视频",
        "change_pct": -2.1
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -0.98
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.25
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 81,
    "hot_rank_chg": 46,
    "stock_cnt": 5787,
    "price": "12.14",
    "change": "0.25",
    "market_id": "17",
    "circulate_market_value": "8085240000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -0.55
      },
      {
        "name": "强势人气股",
        "change_pct": 0.1
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 85,
    "hot_rank_chg": 88,
    "stock_cnt": 5787,
    "price": "12.04",
    "change": "0.33",
    "market_id": "17",
    "circulate_market_value": "15462714000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高管增持",
        "change_pct": 0.18
      },
      {
        "name": "智能制造",
        "change_pct": 0.64
      },
      {
        "name": "工业互联网",
        "change_pct": 0.35
      },
      {
        "name": "培育钻石",
        "change_pct": 1.28
      },
      {
        "name": "金刚线",
        "change_pct": 0.78
      },
      {
        "name": "国资入股",
        "change_pct": -0.15
      },
      {
        "name": "深地经济",
        "change_pct": 1.54
      }
    ]
  },
  {
    "code": "600408",
    "name": "安泰集团",
    "hot_rank": 90,
    "hot_rank_chg": 16,
    "stock_cnt": 5787,
    "price": "3.72",
    "change": "-0.27",
    "market_id": "17",
    "circulate_market_value": "3745296000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "煤炭",
        "change_pct": 0.73
      },
      {
        "name": "钢铁",
        "change_pct": 1.16
      },
      {
        "name": "煤化工",
        "change_pct": 0.85
      }
    ]
  },
  {
    "code": "600121",
    "name": "郑州煤电",
    "hot_rank": 93,
    "hot_rank_chg": -24,
    "stock_cnt": 5787,
    "price": "5.42",
    "change": "-4.58",
    "market_id": "17",
    "circulate_market_value": "6603793200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "有色 · 铝",
        "change_pct": 1.1
      },
      {
        "name": "煤炭",
        "change_pct": 0.73
      },
      {
        "name": "有色金属",
        "change_pct": 0.74
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      },
      {
        "name": "河南国企改革",
        "change_pct": 0.27
      }
    ]
  },
  {
    "code": "002585",
    "name": "双星新材",
    "hot_rank": 97,
    "hot_rank_chg": -34,
    "stock_cnt": 5787,
    "price": "10.03",
    "change": "-4.66",
    "market_id": "33",
    "circulate_market_value": "8892515600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "被动元件",
        "change_pct": -0.83
      },
      {
        "name": "手机产业链",
        "change_pct": -0.25
      },
      {
        "name": "超高清视频",
        "change_pct": -1.11
      },
      {
        "name": "锂电池",
        "change_pct": -0.48
      },
      {
        "name": "OLED",
        "change_pct": -0.56
      },
      {
        "name": "包装印刷",
        "change_pct": 0.98
      },
      {
        "name": "光伏",
        "change_pct": 0.31
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "小米概念股",
        "change_pct": -0.38
      },
      {
        "name": "液晶面板/LCD",
        "change_pct": -0.35
      },
      {
        "name": "可降解塑料",
        "change_pct": 0.49
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      },
      {
        "name": "PET复合铜箔",
        "change_pct": -1.32
      }
    ]
  },
  {
    "code": "300058",
    "name": "蓝色光标",
    "hot_rank": 99,
    "hot_rank_chg": 61,
    "stock_cnt": 5787,
    "price": "11.86",
    "change": "-3.97",
    "market_id": "33",
    "circulate_market_value": "41248253000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -0.49
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "VR&AR",
        "change_pct": -0.5
      },
      {
        "name": "直播/短视频",
        "change_pct": -1.77
      },
      {
        "name": "大数据",
        "change_pct": -0.29
      },
      {
        "name": "教育",
        "change_pct": 0.29
      },
      {
        "name": "百度概念股",
        "change_pct": -0.65
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "腾讯概念股",
        "change_pct": -0.83
      },
      {
        "name": "传媒",
        "change_pct": -1.19
      },
      {
        "name": "快手概念股",
        "change_pct": -2.46
      },
      {
        "name": "NFT",
        "change_pct": -1.03
      },
      {
        "name": "元宇宙",
        "change_pct": -0.99
      },
      {
        "name": "虚拟数字人",
        "change_pct": -1.57
      },
      {
        "name": "web3.0",
        "change_pct": -0.98
      },
      {
        "name": "AIGC概念",
        "change_pct": -1.29
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -1.73
      },
      {
        "name": "职业教育",
        "change_pct": -0.71
      },
      {
        "name": "云游戏",
        "change_pct": -1.82
      },
      {
        "name": "网红/MCN",
        "change_pct": -0.82
      },
      {
        "name": "5G消息/RCS",
        "change_pct": -1.42
      },
      {
        "name": "AI营销",
        "change_pct": -2.75
      },
      {
        "name": "词元概念/Token",
        "change_pct": -1.44
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.55
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "AI视频",
        "change_pct": -2.1
      },
      {
        "name": "智谱AI",
        "change_pct": -1.08
      },
      {
        "name": "小红书概念股",
        "change_pct": -2.25
      },
      {
        "name": "区块链",
        "change_pct": -0.2
      }
    ]
  },
  {
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 100,
    "hot_rank_chg": 561,
    "stock_cnt": 5787,
    "price": "8.04",
    "change": "9.99",
    "market_id": "17",
    "circulate_market_value": "4666098600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "边缘计算",
        "change_pct": -0.23
      },
      {
        "name": "国产软件",
        "change_pct": -0.32
      },
      {
        "name": "蚂蚁集团概念股",
        "change_pct": 0.15
      },
      {
        "name": "共享经济",
        "change_pct": 1.52
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "网络安全",
        "change_pct": -0.43
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.64
      },
      {
        "name": "智慧停车",
        "change_pct": 1.37
      },
      {
        "name": "物联网",
        "change_pct": 0.51
      },
      {
        "name": "大数据",
        "change_pct": -0.29
      },
      {
        "name": "智慧城市",
        "change_pct": 0.54
      },
      {
        "name": "储能",
        "change_pct": 0.6
      },
      {
        "name": "智慧安防",
        "change_pct": 0.66
      },
      {
        "name": "数字经济",
        "change_pct": -0.0
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "信创",
        "change_pct": -0.72
      },
      {
        "name": "华为昇腾",
        "change_pct": 0.21
      },
      {
        "name": "东数西算/算力",
        "change_pct": -0.35
      },
      {
        "name": "电子身份证",
        "change_pct": 0.47
      },
      {
        "name": "数据要素",
        "change_pct": -0.21
      },
      {
        "name": "数字乡村",
        "change_pct": 0.41
      },
      {
        "name": "智慧政务",
        "change_pct": -0.25
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -0.7
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.26
      },
      {
        "name": "算电协同",
        "change_pct": 0.56
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      },
      {
        "name": "自贸区",
        "change_pct": 1.02
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.55
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -1.74
      },
      {
        "name": "智谱AI",
        "change_pct": -1.08
      },
      {
        "name": "DeepSeek概念股",
        "change_pct": -1.12
      },
      {
        "name": "AI医疗",
        "change_pct": -0.73
      },
      {
        "name": "算力一体机",
        "change_pct": 0.11
      },
      {
        "name": "区块链",
        "change_pct": -0.2
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "600825", "name": "新华传媒", "hot_rank": 1, "hot_rank_chg": 5, "stock_cnt": 5787, "price": "15.16", "change": "10.02", "market_id": "17", "circulate_market_value": "15840500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601811", "name": "新华文轩", "hot_rank": 2, "hot_rank_chg": -1, "stock_cnt": 5787, "price": "28.14", "change": "10.01", "market_id": "17", "circulate_market_value": "22284176000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 3, "hot_rank_chg": 7, "stock_cnt": 5787, "price": "9.33", "change": "4.71", "market_id": "33", "circulate_market_value": "4419437100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.56}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "游戏", "change_pct": -2.07}, {"name": "影视", "change_pct": -1.93}, {"name": "直播/短视频", "change_pct": -1.77}, {"name": "动漫", "change_pct": -2.34}, {"name": "腾讯概念股", "change_pct": -0.83}, {"name": "传媒", "change_pct": -1.19}, {"name": "元宇宙", "change_pct": -0.99}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "IP经济/谷子经济", "change_pct": -0.98}]}, {"code": "600418", "name": "江淮汽车", "hot_rank": 4, "hot_rank_chg": 11, "stock_cnt": 5787, "price": "22.37", "change": "9.98", "market_id": "17", "circulate_market_value": "50425966000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 5, "hot_rank_chg": 8, "stock_cnt": 5787, "price": "18.20", "change": "4.24", "market_id": "33", "circulate_market_value": "8334716500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 6, "hot_rank_chg": 1, "stock_cnt": 5787, "price": "7.62", "change": "9.96", "market_id": "33", "circulate_market_value": "4572889400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.05}, {"name": "边缘计算", "change_pct": -0.23}, {"name": "核电", "change_pct": 1.41}, {"name": "海工装备", "change_pct": 1.93}, {"name": "云计算数据中心", "change_pct": -0.28}, {"name": "冷链", "change_pct": 0.88}, {"name": "地热", "change_pct": 0.88}, {"name": "储能", "change_pct": 0.6}, {"name": "碳中和", "change_pct": 0.8}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.96}, {"name": "汽车热管理", "change_pct": 1.58}, {"name": "热泵", "change_pct": 0.82}, {"name": "液冷服务器", "change_pct": 0.36}, {"name": "蜜雪冰城概念股", "change_pct": 1.15}, {"name": "海洋经济", "change_pct": 1.86}]}, {"code": "600127", "name": "金健米业", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5787, "price": "14.62", "change": "8.86", "market_id": "17", "circulate_market_value": "9382870600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600693", "name": "东百集团", "hot_rank": 8, "hot_rank_chg": 3, "stock_cnt": 5787, "price": "9.87", "change": "-10.03", "market_id": "17", "circulate_market_value": "8576564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "快递物流", "change_pct": 0.55}, {"name": "新零售", "change_pct": -0.55}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "旅游", "change_pct": -0.28}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "物业管理", "change_pct": 1.69}, {"name": "免税店概念", "change_pct": 0.35}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "600869", "name": "远东股份", "hot_rank": 9, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "19.24", "change": "6.42", "market_id": "17", "circulate_market_value": "42700347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600664", "name": "哈药股份", "hot_rank": 10, "hot_rank_chg": 6, "stock_cnt": 5787, "price": "6.32", "change": "2.10", "market_id": "17", "circulate_market_value": "15916982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "工业大麻", "change_pct": 0.57}, {"name": "中药", "change_pct": -0.19}, {"name": "保健品", "change_pct": 0.09}, {"name": "民营医院", "change_pct": 0.24}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "流感", "change_pct": -0.32}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "食品", "change_pct": -0.17}]}, {"code": "000823", "name": "超声电子", "hot_rank": 11, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "25.26", "change": "-2.36", "market_id": "33", "circulate_market_value": "15027987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002815", "name": "崇达技术", "hot_rank": 12, "hot_rank_chg": 14, "stock_cnt": 5787, "price": "23.47", "change": "0.95", "market_id": "33", "circulate_market_value": "18239430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605577", "name": "龙版传媒", "hot_rank": 13, "hot_rank_chg": 14, "stock_cnt": 5787, "price": "16.51", "change": "-3.79", "market_id": "17", "circulate_market_value": "7337777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600812", "name": "华北制药", "hot_rank": 14, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "6.26", "change": "-4.72", "market_id": "17", "circulate_market_value": "10740472100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": 0.87}, {"name": "雄安新区", "change_pct": 0.98}, {"name": "医药", "change_pct": -0.42}, {"name": "疫苗", "change_pct": -0.46}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "流感", "change_pct": -0.32}, {"name": "肝素", "change_pct": -0.54}, {"name": "眼科", "change_pct": 0.5}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 15, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "65.83", "change": "-6.61", "market_id": "17", "circulate_market_value": "9409016900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 16, "hot_rank_chg": 339, "stock_cnt": 5787, "price": "31.92", "change": "9.99", "market_id": "17", "circulate_market_value": "23117371000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 17, "hot_rank_chg": -5, "stock_cnt": 5787, "price": "39.29", "change": "-1.80", "market_id": "33", "circulate_market_value": "47594698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 18, "hot_rank_chg": -10, "stock_cnt": 5787, "price": "670.00", "change": "1.99", "market_id": "33", "circulate_market_value": "743657790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 19, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "17.79", "change": "2.77", "market_id": "33", "circulate_market_value": "13551810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 20, "hot_rank_chg": 4, "stock_cnt": 5787, "price": "55.51", "change": "4.05", "market_id": "17", "circulate_market_value": "9740900500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "15.27", "change": "-10.02", "market_id": "33", "circulate_market_value": "4316218200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 22, "hot_rank_chg": 3, "stock_cnt": 5787, "price": "15.66", "change": "1.89", "market_id": "33", "circulate_market_value": "10337245200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 23, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "9.66", "change": "-9.97", "market_id": "33", "circulate_market_value": "3228941100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.22}, {"name": "饲料", "change_pct": 0.87}, {"name": "一带一路", "change_pct": 1.09}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "保健品", "change_pct": 0.09}, {"name": "山东国企改革", "change_pct": 0.5}, {"name": "污水处理", "change_pct": 0.63}, {"name": "环保", "change_pct": 0.93}, {"name": "食品", "change_pct": -0.17}, {"name": "预制菜", "change_pct": 0.3}, {"name": "国企改革", "change_pct": 0.94}, {"name": "水产养殖", "change_pct": 0.22}, {"name": "广西概念", "change_pct": 0.28}]}, {"code": "301569", "name": "联亚药业", "hot_rank": 24, "hot_rank_chg": -3, "stock_cnt": 5787, "price": "25.17", "change": "-28.33", "market_id": "33", "circulate_market_value": "2941063100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000995", "name": "皇台酒业", "hot_rank": 25, "hot_rank_chg": 6, "stock_cnt": 5787, "price": "14.28", "change": "6.81", "market_id": "33", "circulate_market_value": "2533386200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600241", "name": "时代万恒", "hot_rank": 26, "hot_rank_chg": -4, "stock_cnt": 5787, "price": "14.15", "change": "1.14", "market_id": "17", "circulate_market_value": "4164374900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600206", "name": "有研新材", "hot_rank": 27, "hot_rank_chg": 11, "stock_cnt": 5787, "price": "37.51", "change": "-5.80", "market_id": "17", "circulate_market_value": "31754215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 28, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "11.02", "change": "-8.55", "market_id": "17", "circulate_market_value": "4237714900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.65}, {"name": "股权转让", "change_pct": 0.59}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "新疆概念", "change_pct": 0.95}, {"name": "医药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.32}, {"name": "国资入股", "change_pct": -0.15}, {"name": "减肥药", "change_pct": -0.22}]}, {"code": "002636", "name": "金安国纪", "hot_rank": 29, "hot_rank_chg": 5, "stock_cnt": 5787, "price": "65.30", "change": "-8.14", "market_id": "33", "circulate_market_value": "47357948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 30, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "27.63", "change": "-4.76", "market_id": "17", "circulate_market_value": "12126719600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688825", "name": "长鑫科技", "hot_rank": 31, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "45.02", "change": "3.28", "market_id": "17", "circulate_market_value": "202726810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 32, "hot_rank_chg": 12, "stock_cnt": 5787, "price": "122.67", "change": "-1.23", "market_id": "33", "circulate_market_value": "170060090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 33, "hot_rank_chg": 12, "stock_cnt": 5787, "price": "45.68", "change": "0.40", "market_id": "17", "circulate_market_value": "112082561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 34, "hot_rank_chg": 22, "stock_cnt": 5787, "price": "33.90", "change": "-0.27", "market_id": "17", "circulate_market_value": "134636800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 35, "hot_rank_chg": 64, "stock_cnt": 5787, "price": "9.75", "change": "19.93", "market_id": "33", "circulate_market_value": "10294253800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.65}, {"name": "医疗器械", "change_pct": -0.36}, {"name": "医药", "change_pct": -0.42}, {"name": "疫苗", "change_pct": -0.46}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "干细胞", "change_pct": -0.87}, {"name": "眼科", "change_pct": 0.5}, {"name": "肿瘤疫苗", "change_pct": 0.23}]}, {"code": "003029", "name": "吉大正元", "hot_rank": 36, "hot_rank_chg": 73, "stock_cnt": 5787, "price": "21.99", "change": "10.01", "market_id": "33", "circulate_market_value": "3861071000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600967", "name": "内蒙一机", "hot_rank": 37, "hot_rank_chg": 191, "stock_cnt": 5787, "price": "13.89", "change": "6.60", "market_id": "17", "circulate_market_value": "23637928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 38, "hot_rank_chg": 19, "stock_cnt": 5787, "price": "46.49", "change": "2.11", "market_id": "17", "circulate_market_value": "72394386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603999", "name": "读者传媒", "hot_rank": 39, "hot_rank_chg": 13, "stock_cnt": 5787, "price": "8.38", "change": "9.97", "market_id": "17", "circulate_market_value": "4826880000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "知识产权", "change_pct": -0.21}, {"name": "传媒", "change_pct": -1.19}, {"name": "NFT", "change_pct": -1.03}, {"name": "在线教育", "change_pct": -1.16}, {"name": "知识付费", "change_pct": -1.21}]}, {"code": "600865", "name": "百大集团", "hot_rank": 40, "hot_rank_chg": 229, "stock_cnt": 5787, "price": "10.78", "change": "3.06", "market_id": "17", "circulate_market_value": "4055870600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": 0.1}, {"name": "物业管理", "change_pct": 1.69}, {"name": "免税店概念", "change_pct": 0.35}, {"name": "地摊经济", "change_pct": 0.11}]}, {"code": "002487", "name": "大金重工", "hot_rank": 41, "hot_rank_chg": 2, "stock_cnt": 5787, "price": "35.79", "change": "1.33", "market_id": "33", "circulate_market_value": "22580636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603986", "name": "兆易创新", "hot_rank": 42, "hot_rank_chg": -6, "stock_cnt": 5787, "price": "281.86", "change": "1.31", "market_id": "17", "circulate_market_value": "189048670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301660", "name": "粤芯半导体", "hot_rank": 43, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "34.70", "change": "-0.43", "market_id": "33", "circulate_market_value": "8459327000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601999", "name": "出版传媒", "hot_rank": 44, "hot_rank_chg": 152, "stock_cnt": 5787, "price": "8.25", "change": "10.00", "market_id": "17", "circulate_market_value": "4545046300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "教育", "change_pct": 0.29}, {"name": "数字经济", "change_pct": -0.0}, {"name": "知识产权", "change_pct": -0.21}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "传媒", "change_pct": -1.19}, {"name": "在线教育", "change_pct": -1.16}]}, {"code": "603019", "name": "中科曙光", "hot_rank": 45, "hot_rank_chg": 132, "stock_cnt": 5787, "price": "70.48", "change": "5.21", "market_id": "17", "circulate_market_value": "103116070000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002437", "name": "誉衡药业", "hot_rank": 46, "hot_rank_chg": 265, "stock_cnt": 5787, "price": "3.53", "change": "7.62", "market_id": "33", "circulate_market_value": "7422447400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.19}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "维生素", "change_pct": 0.87}, {"name": "基因测序", "change_pct": -0.86}, {"name": "民营医院", "change_pct": 0.24}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "PD-1抑制剂", "change_pct": 0.29}]}, {"code": "000636", "name": "风华高科", "hot_rank": 47, "hot_rank_chg": 19, "stock_cnt": 5787, "price": "40.76", "change": "-3.32", "market_id": "33", "circulate_market_value": "46771691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 48, "hot_rank_chg": -11, "stock_cnt": 5787, "price": "113.38", "change": "-2.41", "market_id": "33", "circulate_market_value": "218012930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603230", "name": "内蒙新华", "hot_rank": 49, "hot_rank_chg": -16, "stock_cnt": 5787, "price": "13.72", "change": "-5.51", "market_id": "17", "circulate_market_value": "4850335600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002058", "name": "紫竹高科", "hot_rank": 50, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "23.05", "change": "-2.91", "market_id": "33", "circulate_market_value": "3304582400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600613", "name": "神奇制药", "hot_rank": 51, "hot_rank_chg": 130, "stock_cnt": 5787, "price": "8.01", "change": "4.16", "market_id": "17", "circulate_market_value": "3839353000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.19}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "医药商业", "change_pct": -0.76}, {"name": "医药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.32}]}, {"code": "605189", "name": "富春染织", "hot_rank": 52, "hot_rank_chg": -24, "stock_cnt": 5787, "price": "16.31", "change": "-8.63", "market_id": "17", "circulate_market_value": "3885611900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 53, "hot_rank_chg": -18, "stock_cnt": 5787, "price": "306.91", "change": "0.29", "market_id": "33", "circulate_market_value": "385087270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 54, "hot_rank_chg": -12, "stock_cnt": 5787, "price": "42.06", "change": "-9.99", "market_id": "33", "circulate_market_value": "15499248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002085", "name": "万丰奥威", "hot_rank": 55, "hot_rank_chg": 700, "stock_cnt": 5787, "price": "9.91", "change": "9.99", "market_id": "33", "circulate_market_value": "21041878000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.1}, {"name": "特斯拉", "change_pct": 1.34}, {"name": "通用航空", "change_pct": 4.48}, {"name": "锂电池", "change_pct": -0.48}, {"name": "海工装备", "change_pct": 1.93}, {"name": "有色 · 镁", "change_pct": 4.22}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "有色金属", "change_pct": 0.74}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "无人机", "change_pct": 3.37}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "新能源车零部件", "change_pct": 2.1}, {"name": "一体化压铸", "change_pct": 2.92}, {"name": "飞行汽车/eVTOL", "change_pct": 4.27}, {"name": "低空经济", "change_pct": 3.12}]}, {"code": "603096", "name": "新经典", "hot_rank": 56, "hot_rank_chg": -17, "stock_cnt": 5787, "price": "21.00", "change": "-9.68", "market_id": "17", "circulate_market_value": "3238927100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000892", "name": "欢瑞世纪", "hot_rank": 57, "hot_rank_chg": -25, "stock_cnt": 5787, "price": "5.00", "change": "-8.26", "market_id": "33", "circulate_market_value": "3553994000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "人工智能", "change_pct": -0.09}, {"name": "影视", "change_pct": -1.93}, {"name": "旅游", "change_pct": -0.28}, {"name": "虚拟数字人", "change_pct": -1.57}, {"name": "AI营销", "change_pct": -2.75}, {"name": "AI大模型/智能体", "change_pct": -0.55}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "AI视频", "change_pct": -2.1}, {"name": "IP经济/谷子经济", "change_pct": -0.98}]}, {"code": "001216", "name": "华瓷股份", "hot_rank": 58, "hot_rank_chg": -12, "stock_cnt": 5787, "price": "22.10", "change": "-9.54", "market_id": "33", "circulate_market_value": "5455080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603690", "name": "至纯科技", "hot_rank": 59, "hot_rank_chg": -19, "stock_cnt": 5787, "price": "22.99", "change": "-3.28", "market_id": "17", "circulate_market_value": "8804348100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 60, "hot_rank_chg": 38, "stock_cnt": 5787, "price": "14.63", "change": "2.02", "market_id": "17", "circulate_market_value": "30599262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 61, "hot_rank_chg": 11, "stock_cnt": 5787, "price": "7.34", "change": "1.94", "market_id": "33", "circulate_market_value": "14056779000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "林业", "change_pct": 0.85}, {"name": "碳中和", "change_pct": 0.8}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 62, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "19.37", "change": "-6.11", "market_id": "17", "circulate_market_value": "4090230800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001330", "name": "博纳影业", "hot_rank": 63, "hot_rank_chg": 1, "stock_cnt": 5787, "price": "6.68", "change": "-3.19", "market_id": "33", "circulate_market_value": "7767820100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "影视", "change_pct": -1.93}, {"name": "新疆概念", "change_pct": 0.95}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "腾讯概念股", "change_pct": -0.83}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "AI视频", "change_pct": -2.1}, {"name": "IP经济/谷子经济", "change_pct": -0.98}]}, {"code": "000607", "name": "华媒控股", "hot_rank": 64, "hot_rank_chg": 207, "stock_cnt": 5787, "price": "4.61", "change": "10.02", "market_id": "33", "circulate_market_value": "4080136600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -0.21}, {"name": "浙江国企改革", "change_pct": 0.76}, {"name": "教育", "change_pct": 0.29}, {"name": "知识产权", "change_pct": -0.21}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "传媒", "change_pct": -1.19}, {"name": "社区团购", "change_pct": 0.47}, {"name": "NFT", "change_pct": -1.03}, {"name": "数据要素", "change_pct": -0.21}, {"name": "字节跳动概念股", "change_pct": -1.73}, {"name": "国企改革", "change_pct": 0.94}, {"name": "职业教育", "change_pct": -0.71}, {"name": "在线教育", "change_pct": -1.16}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "区块链", "change_pct": -0.2}]}, {"code": "000725", "name": "京东方A", "hot_rank": 65, "hot_rank_chg": 11, "stock_cnt": 5787, "price": "5.13", "change": "1.58", "market_id": "33", "circulate_market_value": "181433400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.05}, {"name": "手机产业链", "change_pct": -0.25}, {"name": "超高清视频", "change_pct": -1.11}, {"name": "苹果产业链", "change_pct": -0.29}, {"name": "电竞", "change_pct": -2.06}, {"name": "半导体", "change_pct": -0.46}, {"name": "人工智能", "change_pct": -0.09}, {"name": "互联网医疗", "change_pct": -0.28}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "OLED", "change_pct": -0.56}, {"name": "京津冀", "change_pct": 0.85}, {"name": "物联网", "change_pct": 0.51}, {"name": "指纹识别", "change_pct": -0.47}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "白马股", "change_pct": 0.41}, {"name": "智能制造", "change_pct": 0.64}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "国产芯片", "change_pct": -0.09}, {"name": "液晶面板/LCD", "change_pct": -0.35}, {"name": "全息概念", "change_pct": -0.15}, {"name": "理想汽车概念股", "change_pct": 2.67}, {"name": "MicroLED", "change_pct": -0.86}, {"name": "钙钛矿电池", "change_pct": 0.34}, {"name": "智能手表", "change_pct": 0.01}, {"name": "MiniLED", "change_pct": -0.63}, {"name": "传感器", "change_pct": 0.7}, {"name": "大硅片", "change_pct": -1.22}, {"name": "AI PC", "change_pct": -0.86}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "回购", "change_pct": 0.28}, {"name": "光电共封装CPO", "change_pct": -1.12}, {"name": "智能眼镜/MR头显", "change_pct": -0.62}, {"name": "玻璃基板封装", "change_pct": -0.54}]}, {"code": "000011", "name": "深物业A", "hot_rank": 66, "hot_rank_chg": 60, "stock_cnt": 5787, "price": "11.40", "change": "5.36", "market_id": "33", "circulate_market_value": "6001821200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "深圳本地股", "change_pct": 0.9}, {"name": "房地产", "change_pct": 1.72}, {"name": "粤港澳大湾区", "change_pct": 1.04}, {"name": "住房租赁", "change_pct": 3.19}, {"name": "物业管理", "change_pct": 1.69}, {"name": "新型城镇化", "change_pct": 1.23}, {"name": "旧改", "change_pct": 1.67}]}, {"code": "002579", "name": "中京电子", "hot_rank": 67, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "15.39", "change": "-4.29", "market_id": "33", "circulate_market_value": "8979114800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603386", "name": "骏亚科技", "hot_rank": 68, "hot_rank_chg": -13, "stock_cnt": 5787, "price": "18.66", "change": "-7.85", "market_id": "17", "circulate_market_value": "6089179000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600105", "name": "永鼎股份", "hot_rank": 69, "hot_rank_chg": 52, "stock_cnt": 5787, "price": "28.69", "change": "2.83", "market_id": "17", "circulate_market_value": "41944631000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 70, "hot_rank_chg": -21, "stock_cnt": 5787, "price": "5.77", "change": "-0.34", "market_id": "33", "circulate_market_value": "4414862000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.19}, {"name": "股权转让", "change_pct": 0.59}, {"name": "优化生育（三孩）", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "医药商业", "change_pct": -0.76}, {"name": "保健品", "change_pct": 0.09}, {"name": "民营医院", "change_pct": 0.24}, {"name": "医药", "change_pct": -0.42}, {"name": "食品", "change_pct": -0.17}, {"name": "辅助生殖", "change_pct": -0.69}, {"name": "口腔", "change_pct": -0.01}, {"name": "医美", "change_pct": -0.42}, {"name": "新冠病毒防治", "change_pct": -0.18}]}, {"code": "002281", "name": "光迅科技", "hot_rank": 71, "hot_rank_chg": 43, "stock_cnt": 5787, "price": "133.75", "change": "0.59", "market_id": "33", "circulate_market_value": "105131479000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603618", "name": "杭电股份", "hot_rank": 72, "hot_rank_chg": -12, "stock_cnt": 5787, "price": "32.39", "change": "7.46", "market_id": "17", "circulate_market_value": "22393656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300364", "name": "中文在线", "hot_rank": 73, "hot_rank_chg": 10, "stock_cnt": 5787, "price": "24.14", "change": "-4.43", "market_id": "33", "circulate_market_value": "15958608000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300413", "name": "芒果超媒", "hot_rank": 74, "hot_rank_chg": 13, "stock_cnt": 5787, "price": "23.61", "change": "-3.67", "market_id": "33", "circulate_market_value": "24122336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603259", "name": "药明康德", "hot_rank": 75, "hot_rank_chg": 20, "stock_cnt": 5787, "price": "144.30", "change": "-6.60", "market_id": "17", "circulate_market_value": "356894340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301052", "name": "果麦文化", "hot_rank": 76, "hot_rank_chg": 59, "stock_cnt": 5787, "price": "36.30", "change": "2.63", "market_id": "33", "circulate_market_value": "2912704500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 77, "hot_rank_chg": 31, "stock_cnt": 5787, "price": "6.75", "change": "8.87", "market_id": "17", "circulate_market_value": "28886138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.21}, {"name": "橡胶", "change_pct": 2.28}, {"name": "土地流转", "change_pct": 0.99}, {"name": "农垦", "change_pct": 0.85}, {"name": "海南概念", "change_pct": 0.8}, {"name": "自由贸易港", "change_pct": 0.77}, {"name": "海南自由贸易港", "change_pct": 0.8}, {"name": "大农业", "change_pct": 1.03}, {"name": "可降解塑料", "change_pct": 0.49}, {"name": "大消费", "change_pct": 0.97}, {"name": "免税店概念", "change_pct": 0.35}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "601138", "name": "工业富联", "hot_rank": 78, "hot_rank_chg": -7, "stock_cnt": 5787, "price": "47.78", "change": "1.88", "market_id": "17", "circulate_market_value": "948150730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 80, "hot_rank_chg": -2, "stock_cnt": 5787, "price": "7.21", "change": "-4.38", "market_id": "33", "circulate_market_value": "11730625100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "电竞", "change_pct": -2.06}, {"name": "手游", "change_pct": -2.56}, {"name": "人工智能", "change_pct": -0.09}, {"name": "游戏", "change_pct": -2.07}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -0.0}, {"name": "腾讯概念股", "change_pct": -0.83}, {"name": "传媒", "change_pct": -1.19}, {"name": "快手概念股", "change_pct": -2.46}, {"name": "元宇宙", "change_pct": -0.99}, {"name": "虚拟数字人", "change_pct": -1.57}, {"name": "东数西算/算力", "change_pct": -0.35}, {"name": "web3.0", "change_pct": -0.98}, {"name": "AIGC概念", "change_pct": -1.29}, {"name": "数据要素", "change_pct": -0.21}, {"name": "字节跳动概念股", "change_pct": -1.73}, {"name": "AI营销", "change_pct": -2.75}, {"name": "ChatGPT", "change_pct": -1.26}, {"name": "智能眼镜/MR头显", "change_pct": -0.62}, {"name": "AI大模型/智能体", "change_pct": -0.55}, {"name": "人形机器人", "change_pct": 1.44}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "多模态", "change_pct": -0.96}, {"name": "AI视频", "change_pct": -2.1}, {"name": "IP经济/谷子经济", "change_pct": -0.98}, {"name": "小红书概念股", "change_pct": -2.25}]}, {"code": "601086", "name": "国芳集团", "hot_rank": 81, "hot_rank_chg": 46, "stock_cnt": 5787, "price": "12.14", "change": "0.25", "market_id": "17", "circulate_market_value": "8085240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": 0.1}]}, {"code": "603968", "name": "醋化股份", "hot_rank": 82, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "13.35", "change": "-6.12", "market_id": "17", "circulate_market_value": "2729808000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002860", "name": "星帅尔", "hot_rank": 83, "hot_rank_chg": 178, "stock_cnt": 5787, "price": "18.16", "change": "-0.71", "market_id": "33", "circulate_market_value": "6282241200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002980", "name": "华盛昌", "hot_rank": 84, "hot_rank_chg": 98, "stock_cnt": 5787, "price": "111.89", "change": "1.34", "market_id": "33", "circulate_market_value": "11332982200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 85, "hot_rank_chg": 88, "stock_cnt": 5787, "price": "12.04", "change": "0.33", "market_id": "17", "circulate_market_value": "15462714000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高管增持", "change_pct": 0.18}, {"name": "智能制造", "change_pct": 0.64}, {"name": "工业互联网", "change_pct": 0.35}, {"name": "培育钻石", "change_pct": 1.28}, {"name": "金刚线", "change_pct": 0.78}, {"name": "国资入股", "change_pct": -0.15}, {"name": "深地经济", "change_pct": 1.54}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 86, "hot_rank_chg": -12, "stock_cnt": 5787, "price": "212.80", "change": "-4.71", "market_id": "33", "circulate_market_value": "231608980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603538", "name": "美诺华", "hot_rank": 87, "hot_rank_chg": 77, "stock_cnt": 5787, "price": "23.85", "change": "2.27", "market_id": "17", "circulate_market_value": "8035540800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 88, "hot_rank_chg": -58, "stock_cnt": 5787, "price": "426.98", "change": "5.40", "market_id": "17", "circulate_market_value": "12846854700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002008", "name": "大族激光", "hot_rank": 89, "hot_rank_chg": -9, "stock_cnt": 5787, "price": "63.85", "change": "0.76", "market_id": "33", "circulate_market_value": "61087204000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600408", "name": "安泰集团", "hot_rank": 90, "hot_rank_chg": 16, "stock_cnt": 5787, "price": "3.72", "change": "-0.27", "market_id": "17", "circulate_market_value": "3745296000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "煤炭", "change_pct": 0.73}, {"name": "钢铁", "change_pct": 1.16}, {"name": "煤化工", "change_pct": 0.85}]}, {"code": "002185", "name": "华天科技", "hot_rank": 91, "hot_rank_chg": 19, "stock_cnt": 5787, "price": "14.03", "change": "-0.99", "market_id": "33", "circulate_market_value": "46664152000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002436", "name": "兴森科技", "hot_rank": 92, "hot_rank_chg": 1, "stock_cnt": 5787, "price": "35.02", "change": "-3.69", "market_id": "33", "circulate_market_value": "53157858000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600121", "name": "郑州煤电", "hot_rank": 93, "hot_rank_chg": -24, "stock_cnt": 5787, "price": "5.42", "change": "-4.58", "market_id": "17", "circulate_market_value": "6603793200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.1}, {"name": "煤炭", "change_pct": 0.73}, {"name": "有色金属", "change_pct": 0.74}, {"name": "国企改革", "change_pct": 0.94}, {"name": "河南国企改革", "change_pct": 0.27}]}, {"code": "600183", "name": "生益科技", "hot_rank": 94, "hot_rank_chg": 28, "stock_cnt": 5787, "price": "114.60", "change": "-0.01", "market_id": "17", "circulate_market_value": "276386420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 96, "hot_rank_chg": 35, "stock_cnt": 5787, "price": "26.62", "change": "0.80", "market_id": "17", "circulate_market_value": "90852720000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002585", "name": "双星新材", "hot_rank": 97, "hot_rank_chg": -34, "stock_cnt": 5787, "price": "10.03", "change": "-4.66", "market_id": "33", "circulate_market_value": "8892515600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "被动元件", "change_pct": -0.83}, {"name": "手机产业链", "change_pct": -0.25}, {"name": "超高清视频", "change_pct": -1.11}, {"name": "锂电池", "change_pct": -0.48}, {"name": "OLED", "change_pct": -0.56}, {"name": "包装印刷", "change_pct": 0.98}, {"name": "光伏", "change_pct": 0.31}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "液晶面板/LCD", "change_pct": -0.35}, {"name": "可降解塑料", "change_pct": 0.49}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "PET复合铜箔", "change_pct": -1.32}]}, {"code": "600584", "name": "长电科技", "hot_rank": 98, "hot_rank_chg": -8, "stock_cnt": 5787, "price": "56.96", "change": "-0.94", "market_id": "17", "circulate_market_value": "101925054000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300058", "name": "蓝色光标", "hot_rank": 99, "hot_rank_chg": 61, "stock_cnt": 5787, "price": "11.86", "change": "-3.97", "market_id": "33", "circulate_market_value": "41248253000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "人工智能", "change_pct": -0.09}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "直播/短视频", "change_pct": -1.77}, {"name": "大数据", "change_pct": -0.29}, {"name": "教育", "change_pct": 0.29}, {"name": "百度概念股", "change_pct": -0.65}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "腾讯概念股", "change_pct": -0.83}, {"name": "传媒", "change_pct": -1.19}, {"name": "快手概念股", "change_pct": -2.46}, {"name": "NFT", "change_pct": -1.03}, {"name": "元宇宙", "change_pct": -0.99}, {"name": "虚拟数字人", "change_pct": -1.57}, {"name": "web3.0", "change_pct": -0.98}, {"name": "AIGC概念", "change_pct": -1.29}, {"name": "字节跳动概念股", "change_pct": -1.73}, {"name": "职业教育", "change_pct": -0.71}, {"name": "云游戏", "change_pct": -1.82}, {"name": "网红/MCN", "change_pct": -0.82}, {"name": "5G消息/RCS", "change_pct": -1.42}, {"name": "AI营销", "change_pct": -2.75}, {"name": "词元概念/Token", "change_pct": -1.44}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "AI大模型/智能体", "change_pct": -0.55}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "AI视频", "change_pct": -2.1}, {"name": "智谱AI", "change_pct": -1.08}, {"name": "小红书概念股", "change_pct": -2.25}, {"name": "区块链", "change_pct": -0.2}]}, {"code": "603636", "name": "南威软件", "hot_rank": 100, "hot_rank_chg": 561, "stock_cnt": 5787, "price": "8.04", "change": "9.99", "market_id": "17", "circulate_market_value": "4666098600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.23}, {"name": "国产软件", "change_pct": -0.32}, {"name": "蚂蚁集团概念股", "change_pct": 0.15}, {"name": "共享经济", "change_pct": 1.52}, {"name": "人工智能", "change_pct": -0.09}, {"name": "网络安全", "change_pct": -0.43}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "智慧停车", "change_pct": 1.37}, {"name": "物联网", "change_pct": 0.51}, {"name": "大数据", "change_pct": -0.29}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "储能", "change_pct": 0.6}, {"name": "智慧安防", "change_pct": 0.66}, {"name": "数字经济", "change_pct": -0.0}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "信创", "change_pct": -0.72}, {"name": "华为昇腾", "change_pct": 0.21}, {"name": "东数西算/算力", "change_pct": -0.35}, {"name": "电子身份证", "change_pct": 0.47}, {"name": "数据要素", "change_pct": -0.21}, {"name": "数字乡村", "change_pct": 0.41}, {"name": "智慧政务", "change_pct": -0.25}, {"name": "华为云·鲲鹏", "change_pct": -0.7}, {"name": "智慧灯杆", "change_pct": 1.26}, {"name": "算电协同", "change_pct": 0.56}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "自贸区", "change_pct": 1.02}, {"name": "AI大模型/智能体", "change_pct": -0.55}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "智谱AI", "change_pct": -1.08}, {"name": "DeepSeek概念股", "change_pct": -1.12}, {"name": "AI医疗", "change_pct": -0.73}, {"name": "算力一体机", "change_pct": 0.11}, {"name": "区块链", "change_pct": -0.2}]}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524505": "[立案调查] 25宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524784": "[立案调查] 26宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524990": "[立案调查] 26宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524583": "[立案调查] 25宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524171": "[行政处罚事先告知书] 25一创04：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};