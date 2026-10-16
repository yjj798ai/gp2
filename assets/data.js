const UPDATE_TIME = "2026-10-16 20:25";
const THS_HOT = [
  {
    "name": "飞行汽车(eVTOL)",
    "rise": 4.01,
    "rate": 0,
    "tag": "17家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "航空ETF",
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
    "name": "兵装重组概念",
    "rise": 5.9,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": 0,
    "etfName": "",
    "code": "886101"
  },
  {
    "name": "创新药",
    "rise": -0.33,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续139天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
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
    "name": "存储芯片",
    "rise": -0.24,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续262天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "人工智能",
    "rise": 0.15,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续16天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "芯片概念",
    "rise": 0.13,
    "rate": 0,
    "tag": "11家涨停",
    "hotTag": "连续19天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "AI应用",
    "rise": -0.53,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "连续67天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
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
    "name": "固态电池",
    "rise": -0.23,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
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
    "name": "白酒概念",
    "rise": 0.68,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 1,
    "etfName": "食品饮料ETF",
    "code": "885525"
  },
  {
    "name": "猪肉",
    "rise": 1.4,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": -1,
    "etfName": "畜牧养殖ETF",
    "code": "885573"
  },
  {
    "name": "短剧游戏",
    "rise": -1.63,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "影视ETF",
    "code": "886060"
  },
  {
    "name": "超级品牌",
    "rise": 0.3,
    "rate": 0,
    "tag": "",
    "hotTag": "7天6次上榜",
    "rankChg": 1,
    "etfName": "食品饮料ETF",
    "code": "885761"
  }
];
const THS_EVENTS = [
  {
    "title": "这次能飞了！特斯拉展示新款Roadster：2028年投产",
    "desc": "",
    "heat": 532274,
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
    "title": "第十六届中国航展将于12月7日至13日在珠海举办 首设海上展区 自研重器集中亮相",
    "desc": "",
    "heat": 476639,
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
    "title": "美股三大指数集体收涨，黄金概念涨幅居前，COMEX黄金期货收涨2.06%",
    "desc": "",
    "heat": 375933,
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
    "heat": 316027,
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
    "heat": 93903,
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
    "title": "国家医保局：加强医保目录和支付管理 强化医药价格管理",
    "desc": "",
    "heat": 25064,
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
    "title": "腾讯入局AI短剧赛道：微信内上线“绿泡泡短剧”小程序，撼动千亿市场",
    "desc": "",
    "heat": 20110,
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
    "heat": 0,
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
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 3,
    "hot_rank_chg": -2,
    "stock_cnt": 5802,
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
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 10,
    "hot_rank_chg": 2,
    "stock_cnt": 5802,
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
    "code": "002085",
    "name": "万丰奥威",
    "hot_rank": 15,
    "hot_rank_chg": 40,
    "stock_cnt": 5802,
    "price": "9.91",
    "change": "9.99",
    "market_id": "33",
    "circulate_market_value": "21041878000.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "低空经济",
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
    "code": "600693",
    "name": "东百集团",
    "hot_rank": 16,
    "hot_rank_chg": -5,
    "stock_cnt": 5802,
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
    "hot_rank": 21,
    "hot_rank_chg": 1,
    "stock_cnt": 5802,
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
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 25,
    "hot_rank_chg": 18,
    "stock_cnt": 5802,
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
    "code": "603999",
    "name": "读者传媒",
    "hot_rank": 26,
    "hot_rank_chg": 59,
    "stock_cnt": 5802,
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
    "code": "000607",
    "name": "华媒控股",
    "hot_rank": 30,
    "hot_rank_chg": 91,
    "stock_cnt": 5802,
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
    "code": "600668",
    "name": "尖峰集团",
    "hot_rank": 34,
    "hot_rank_chg": 83,
    "stock_cnt": 5802,
    "price": "8.79",
    "change": "10.01",
    "market_id": "17",
    "circulate_market_value": "3629396200.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "医药",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.19
      },
      {
        "name": "创新药",
        "change_pct": -0.65
      },
      {
        "name": "水泥",
        "change_pct": 3.1
      },
      {
        "name": "浙江国企改革",
        "change_pct": 0.76
      },
      {
        "name": "保健品",
        "change_pct": 0.09
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
        "name": "破净股",
        "change_pct": 0.79
      },
      {
        "name": "食品",
        "change_pct": -0.17
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      },
      {
        "name": "眼科",
        "change_pct": 0.5
      }
    ]
  },
  {
    "code": "600802",
    "name": "福建水泥",
    "hot_rank": 35,
    "hot_rank_chg": 45,
    "stock_cnt": 5802,
    "price": "6.78",
    "change": "10.06",
    "market_id": "17",
    "circulate_market_value": "3106924200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "水泥熟料",
    "xgb_concepts": [
      {
        "name": "水泥",
        "change_pct": 3.1
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.64
      },
      {
        "name": "自贸区",
        "change_pct": 1.02
      }
    ]
  },
  {
    "code": "000678",
    "name": "襄阳轴承",
    "hot_rank": 38,
    "hot_rank_chg": -6,
    "stock_cnt": 5802,
    "price": "10.93",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "5023556900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "农机",
        "change_pct": 1.7
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.38
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.1
      },
      {
        "name": "大农业",
        "change_pct": 1.03
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 40,
    "hot_rank_chg": -6,
    "stock_cnt": 5802,
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
    "code": "601857",
    "name": "中国石油",
    "hot_rank": 41,
    "hot_rank_chg": 254,
    "stock_cnt": 5802,
    "price": "12.76",
    "change": "1.35",
    "market_id": "17",
    "circulate_market_value": "2066125700000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "高股息",
        "change_pct": 1.0
      },
      {
        "name": "央企改革",
        "change_pct": 1.37
      },
      {
        "name": "一带一路",
        "change_pct": 1.09
      },
      {
        "name": "石油化工",
        "change_pct": 1.37
      },
      {
        "name": "天然气",
        "change_pct": 1.28
      },
      {
        "name": "油气改革",
        "change_pct": 1.29
      },
      {
        "name": "可燃冰",
        "change_pct": 1.21
      },
      {
        "name": "中字头",
        "change_pct": 0.89
      },
      {
        "name": "页岩气",
        "change_pct": 1.57
      },
      {
        "name": "丁辛醇",
        "change_pct": 1.44
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      }
    ]
  },
  {
    "code": "600812",
    "name": "华北制药",
    "hot_rank": 45,
    "hot_rank_chg": -19,
    "stock_cnt": 5802,
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
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 47,
    "hot_rank_chg": 11,
    "stock_cnt": 5802,
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
    "code": "601999",
    "name": "出版传媒",
    "hot_rank": 48,
    "hot_rank_chg": 71,
    "stock_cnt": 5802,
    "price": "8.25",
    "change": "10.00",
    "market_id": "17",
    "circulate_market_value": "4545046300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "出版发行",
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
    "code": "300045",
    "name": "华力创通",
    "hot_rank": 49,
    "hot_rank_chg": 34,
    "stock_cnt": 5802,
    "price": "12.70",
    "change": "20.04",
    "market_id": "33",
    "circulate_market_value": "6648931700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "卫星通信芯片",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": 1.01
      },
      {
        "name": "数字孪生",
        "change_pct": 1.09
      },
      {
        "name": "金融科技",
        "change_pct": -0.7
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
        "name": "网络安全",
        "change_pct": -0.43
      },
      {
        "name": "大飞机",
        "change_pct": 2.83
      },
      {
        "name": "北斗导航",
        "change_pct": 2.5
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.46
      },
      {
        "name": "军民融合",
        "change_pct": 2.25
      },
      {
        "name": "智慧城市",
        "change_pct": 0.54
      },
      {
        "name": "军工",
        "change_pct": 2.36
      },
      {
        "name": "无人机",
        "change_pct": 3.37
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "国产芯片",
        "change_pct": -0.09
      },
      {
        "name": "元宇宙",
        "change_pct": -0.99
      },
      {
        "name": "航天",
        "change_pct": 2.55
      },
      {
        "name": "6G",
        "change_pct": -0.1
      },
      {
        "name": "卫星互联网",
        "change_pct": 2.01
      },
      {
        "name": "毫米波雷达",
        "change_pct": 0.09
      },
      {
        "name": "时空大数据",
        "change_pct": 1.51
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 4.27
      },
      {
        "name": "低空经济",
        "change_pct": 3.12
      },
      {
        "name": "军工信息化",
        "change_pct": 2.62
      },
      {
        "name": "征信概念",
        "change_pct": -1.09
      }
    ]
  },
  {
    "code": "000420",
    "name": "吉林化纤",
    "hot_rank": 52,
    "hot_rank_chg": 98,
    "stock_cnt": 5802,
    "price": "3.88",
    "change": "9.91",
    "market_id": "33",
    "circulate_market_value": "9540048300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "低空经济",
    "xgb_concepts": [
      {
        "name": "粘胶短纤",
        "change_pct": 2.62
      },
      {
        "name": "大飞机",
        "change_pct": 2.83
      },
      {
        "name": "风电",
        "change_pct": 1.32
      },
      {
        "name": "碳纤维",
        "change_pct": 3.49
      },
      {
        "name": "振兴东北",
        "change_pct": 1.0
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
    "code": "002531",
    "name": "天顺风能",
    "hot_rank": 54,
    "hot_rank_chg": -31,
    "stock_cnt": 5802,
    "price": "7.41",
    "change": "9.94",
    "market_id": "33",
    "circulate_market_value": "13240696300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "海工装备",
        "change_pct": 1.93
      },
      {
        "name": "风电",
        "change_pct": 1.32
      },
      {
        "name": "船舶",
        "change_pct": 3.78
      }
    ]
  },
  {
    "code": "002917",
    "name": "金奥博",
    "hot_rank": 58,
    "hot_rank_chg": 116,
    "stock_cnt": 5802,
    "price": "11.98",
    "change": "10.01",
    "market_id": "33",
    "circulate_market_value": "3121349800.00",
    "change_type": "1",
    "change_section": "4",
    "change_days": "3",
    "change_reason": "军工并购",
    "xgb_concepts": [
      {
        "name": "筹码集中",
        "change_pct": 0.81
      },
      {
        "name": "一带一路",
        "change_pct": 1.09
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
        "name": "工业自动化",
        "change_pct": 0.76
      },
      {
        "name": "军民融合",
        "change_pct": 2.25
      },
      {
        "name": "民爆",
        "change_pct": 3.11
      },
      {
        "name": "军工",
        "change_pct": 2.36
      },
      {
        "name": "机器人",
        "change_pct": 0.93
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
        "name": "国产芯片",
        "change_pct": -0.09
      }
    ]
  },
  {
    "code": "300411",
    "name": "金盾股份",
    "hot_rank": 59,
    "hot_rank_chg": 42,
    "stock_cnt": 5802,
    "price": "9.60",
    "change": "20.00",
    "market_id": "33",
    "circulate_market_value": "2967508800.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "军工通风",
    "xgb_concepts": [
      {
        "name": "核电",
        "change_pct": 1.41
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "高铁轨交",
        "change_pct": 1.46
      },
      {
        "name": "军民融合",
        "change_pct": 2.25
      },
      {
        "name": "军工",
        "change_pct": 2.36
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -0.18
      },
      {
        "name": "核聚变",
        "change_pct": 1.89
      },
      {
        "name": "飞行汽车/eVTOL",
        "change_pct": 4.27
      },
      {
        "name": "低空经济",
        "change_pct": 3.12
      },
      {
        "name": "海洋经济",
        "change_pct": 1.86
      },
      {
        "name": "雅江电站概念股",
        "change_pct": 1.15
      }
    ]
  },
  {
    "code": "002510",
    "name": "天汽模",
    "hot_rank": 63,
    "hot_rank_chg": 52,
    "stock_cnt": 5802,
    "price": "5.96",
    "change": "9.96",
    "market_id": "33",
    "circulate_market_value": "6049973900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "低空经济",
    "xgb_concepts": [
      {
        "name": "蔚来汽车概念股",
        "change_pct": 2.78
      },
      {
        "name": "资产重组",
        "change_pct": 0.53
      },
      {
        "name": "特斯拉",
        "change_pct": 1.34
      },
      {
        "name": "股权转让",
        "change_pct": 0.59
      },
      {
        "name": "通用航空",
        "change_pct": 4.48
      },
      {
        "name": "大飞机",
        "change_pct": 2.83
      },
      {
        "name": "军民融合",
        "change_pct": 2.25
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.38
      },
      {
        "name": "军工",
        "change_pct": 2.36
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
        "name": "新能源车零部件",
        "change_pct": 2.1
      },
      {
        "name": "低空经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 67,
    "hot_rank_chg": -25,
    "stock_cnt": 5802,
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
    "code": "600843",
    "name": "上工申贝",
    "hot_rank": 73,
    "hot_rank_chg": -10,
    "stock_cnt": 5802,
    "price": "8.94",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "4194851200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "低空经济",
    "xgb_concepts": [
      {
        "name": "碳纤维",
        "change_pct": 3.49
      },
      {
        "name": "低空经济",
        "change_pct": 3.12
      }
    ]
  },
  {
    "code": "002724",
    "name": "海洋王",
    "hot_rank": 74,
    "hot_rank_chg": 136,
    "stock_cnt": 5802,
    "price": "7.65",
    "change": "10.07",
    "market_id": "33",
    "circulate_market_value": "4333558900.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "AI照明",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -0.08
      },
      {
        "name": "军民融合",
        "change_pct": 2.25
      },
      {
        "name": "物联网",
        "change_pct": 0.51
      },
      {
        "name": "LED",
        "change_pct": 0.08
      },
      {
        "name": "军工",
        "change_pct": 2.36
      },
      {
        "name": "智慧灯杆",
        "change_pct": 1.26
      },
      {
        "name": "海洋经济",
        "change_pct": 1.86
      }
    ]
  },
  {
    "code": "000560",
    "name": "我爱我家",
    "hot_rank": 78,
    "hot_rank_chg": -61,
    "stock_cnt": 5802,
    "price": "3.20",
    "change": "3.56",
    "market_id": "33",
    "circulate_market_value": "7496602000.00",
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
        "name": "京津冀",
        "change_pct": 0.85
      },
      {
        "name": "装修装饰",
        "change_pct": 1.66
      },
      {
        "name": "住房租赁",
        "change_pct": 3.19
      },
      {
        "name": "破净股",
        "change_pct": 0.79
      },
      {
        "name": "数字经济",
        "change_pct": -0.0
      },
      {
        "name": "房产经纪",
        "change_pct": 2.52
      },
      {
        "name": "物业管理",
        "change_pct": 1.69
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -0.55
      }
    ]
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 81,
    "hot_rank_chg": -19,
    "stock_cnt": 5802,
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
    "code": "000573",
    "name": "粤宏远A",
    "hot_rank": 82,
    "hot_rank_chg": 82,
    "stock_cnt": 5802,
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
        "change_pct": 0.53
      },
      {
        "name": "锂电池",
        "change_pct": -0.48
      },
      {
        "name": "房地产",
        "change_pct": 1.72
      },
      {
        "name": "固废处理",
        "change_pct": 0.8
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
        "name": "环保",
        "change_pct": 0.93
      },
      {
        "name": "篮球",
        "change_pct": 1.67
      }
    ]
  },
  {
    "code": "605136",
    "name": "丽人丽妆",
    "hot_rank": 85,
    "hot_rank_chg": -13,
    "stock_cnt": 5802,
    "price": "8.96",
    "change": "-4.68",
    "market_id": "17",
    "circulate_market_value": "3588108200.00",
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
        "name": "新零售",
        "change_pct": -0.55
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -0.21
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -0.94
      },
      {
        "name": "预制菜",
        "change_pct": 0.3
      },
      {
        "name": "化妆品",
        "change_pct": -0.42
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 87,
    "hot_rank_chg": 40,
    "stock_cnt": 5802,
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
    "code": "603636",
    "name": "南威软件",
    "hot_rank": 88,
    "hot_rank_chg": 117,
    "stock_cnt": 5802,
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
  },
  {
    "code": "600178",
    "name": "东安动力",
    "hot_rank": 91,
    "hot_rank_chg": 89,
    "stock_cnt": 5802,
    "price": "10.25",
    "change": "9.98",
    "market_id": "17",
    "circulate_market_value": "4781380700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "增程动力",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": 1.37
      },
      {
        "name": "股权转让",
        "change_pct": 0.59
      },
      {
        "name": "军工集团",
        "change_pct": 2.86
      },
      {
        "name": "汽车零部件",
        "change_pct": 2.38
      },
      {
        "name": "军工",
        "change_pct": 2.36
      },
      {
        "name": "新能源汽车",
        "change_pct": 0.76
      },
      {
        "name": "振兴东北",
        "change_pct": 1.0
      },
      {
        "name": "新能源车零部件",
        "change_pct": 2.1
      },
      {
        "name": "理想汽车概念股",
        "change_pct": 2.67
      },
      {
        "name": "国企改革",
        "change_pct": 0.94
      },
      {
        "name": "华为产业链",
        "change_pct": -0.12
      }
    ]
  },
  {
    "code": "601118",
    "name": "海南橡胶",
    "hot_rank": 93,
    "hot_rank_chg": -66,
    "stock_cnt": 5802,
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
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 94,
    "hot_rank_chg": -1,
    "stock_cnt": 5802,
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
    "code": "002614",
    "name": "奥佳华",
    "hot_rank": 95,
    "hot_rank_chg": 40,
    "stock_cnt": 5802,
    "price": "8.77",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "3869984500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "按摩椅",
    "xgb_concepts": [
      {
        "name": "医疗器械",
        "change_pct": -0.36
      },
      {
        "name": "股权转让",
        "change_pct": 0.59
      },
      {
        "name": "人工智能",
        "change_pct": -0.09
      },
      {
        "name": "养老产业",
        "change_pct": -0.15
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": 1.64
      },
      {
        "name": "外贸受益概念",
        "change_pct": -0.12
      },
      {
        "name": "小家电",
        "change_pct": 0.65
      },
      {
        "name": "机器人",
        "change_pct": 0.93
      },
      {
        "name": "家电",
        "change_pct": 0.55
      },
      {
        "name": "RCEP概念",
        "change_pct": 0.42
      },
      {
        "name": "血氧仪",
        "change_pct": 0.2
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -0.61
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
        "name": "IP经济/谷子经济",
        "change_pct": -0.98
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "688825", "name": "长鑫科技", "hot_rank": 1, "hot_rank_chg": 4, "stock_cnt": 5802, "price": "45.02", "change": "3.28", "market_id": "17", "circulate_market_value": "202726810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 2, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "15.16", "change": "10.02", "market_id": "17", "circulate_market_value": "15840500000.00", "change_type": "1", "change_section": "14", "change_days": "11", "change_reason": "复牌"}, {"code": "000530", "name": "冰山冷热", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "7.62", "change": "9.96", "market_id": "33", "circulate_market_value": "4572889400.00", "change_type": "1", "change_section": "4", "change_days": "4", "change_reason": "冰雪工程", "xgb_concepts": [{"name": "体育产业", "change_pct": 0.05}, {"name": "边缘计算", "change_pct": -0.23}, {"name": "核电", "change_pct": 1.41}, {"name": "海工装备", "change_pct": 1.93}, {"name": "云计算数据中心", "change_pct": -0.28}, {"name": "冷链", "change_pct": 0.88}, {"name": "地热", "change_pct": 0.88}, {"name": "储能", "change_pct": 0.6}, {"name": "碳中和", "change_pct": 0.8}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": 0.96}, {"name": "汽车热管理", "change_pct": 1.58}, {"name": "热泵", "change_pct": 0.82}, {"name": "液冷服务器", "change_pct": 0.36}, {"name": "蜜雪冰城概念股", "change_pct": 1.15}, {"name": "海洋经济", "change_pct": 1.86}]}, {"code": "603259", "name": "药明康德", "hot_rank": 4, "hot_rank_chg": 31, "stock_cnt": 5802, "price": "144.30", "change": "-6.60", "market_id": "17", "circulate_market_value": "356894340000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600418", "name": "江淮汽车", "hot_rank": 5, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "22.37", "change": "9.98", "market_id": "17", "circulate_market_value": "50425966000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三部门联合调查"}, {"code": "601811", "name": "新华文轩", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5802, "price": "28.14", "change": "10.01", "market_id": "17", "circulate_market_value": "22284176000.00", "change_type": "1", "change_section": "15", "change_days": "11", "change_reason": "出版传媒"}, {"code": "002242", "name": "九阳股份", "hot_rank": 7, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "17.79", "change": "2.77", "market_id": "33", "circulate_market_value": "13551810000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600127", "name": "金健米业", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5802, "price": "14.62", "change": "8.86", "market_id": "17", "circulate_market_value": "9382870600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 9, "hot_rank_chg": -6, "stock_cnt": 5802, "price": "19.24", "change": "6.42", "market_id": "17", "circulate_market_value": "42700347000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "9.33", "change": "4.71", "market_id": "33", "circulate_market_value": "4419437100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -2.56}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "游戏", "change_pct": -2.07}, {"name": "影视", "change_pct": -1.93}, {"name": "直播/短视频", "change_pct": -1.77}, {"name": "动漫", "change_pct": -2.34}, {"name": "腾讯概念股", "change_pct": -0.83}, {"name": "传媒", "change_pct": -1.19}, {"name": "元宇宙", "change_pct": -0.99}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "IP经济/谷子经济", "change_pct": -0.98}]}, {"code": "001309", "name": "德明利", "hot_rank": 11, "hot_rank_chg": 42, "stock_cnt": 5802, "price": "206.01", "change": "-2.39", "market_id": "33", "circulate_market_value": "47789660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 12, "hot_rank_chg": 6, "stock_cnt": 5802, "price": "670.00", "change": "1.99", "market_id": "33", "circulate_market_value": "743657790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600487", "name": "亨通光电", "hot_rank": 13, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "45.68", "change": "0.40", "market_id": "17", "circulate_market_value": "112082561000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601606", "name": "长城军工", "hot_rank": 14, "hot_rank_chg": 25, "stock_cnt": 5802, "price": "31.92", "change": "9.99", "market_id": "17", "circulate_market_value": "23117371000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "弹药装备"}, {"code": "002085", "name": "万丰奥威", "hot_rank": 15, "hot_rank_chg": 40, "stock_cnt": 5802, "price": "9.91", "change": "9.99", "market_id": "33", "circulate_market_value": "21041878000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济", "xgb_concepts": [{"name": "有色 · 铝", "change_pct": 1.1}, {"name": "特斯拉", "change_pct": 1.34}, {"name": "通用航空", "change_pct": 4.48}, {"name": "锂电池", "change_pct": -0.48}, {"name": "海工装备", "change_pct": 1.93}, {"name": "有色 · 镁", "change_pct": 4.22}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "有色金属", "change_pct": 0.74}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "无人机", "change_pct": 3.37}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "新能源车零部件", "change_pct": 2.1}, {"name": "一体化压铸", "change_pct": 2.92}, {"name": "飞行汽车/eVTOL", "change_pct": 4.27}, {"name": "低空经济", "change_pct": 3.12}]}, {"code": "600693", "name": "东百集团", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "9.87", "change": "-10.03", "market_id": "17", "circulate_market_value": "8576564000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "快递物流", "change_pct": 0.55}, {"name": "新零售", "change_pct": -0.55}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "旅游", "change_pct": -0.28}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "物业管理", "change_pct": 1.69}, {"name": "免税店概念", "change_pct": 0.35}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "001696", "name": "宗申动力", "hot_rank": 17, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "15.87", "change": "9.98", "market_id": "33", "circulate_market_value": "14148320000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济"}, {"code": "600241", "name": "时代万恒", "hot_rank": 18, "hot_rank_chg": 15, "stock_cnt": 5802, "price": "14.15", "change": "1.14", "market_id": "17", "circulate_market_value": "4164374900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5802, "price": "426.98", "change": "5.40", "market_id": "17", "circulate_market_value": "12846854700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "003029", "name": "吉大正元", "hot_rank": 20, "hot_rank_chg": 29, "stock_cnt": 5802, "price": "21.99", "change": "10.01", "market_id": "33", "circulate_market_value": "3861071000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "密码安全"}, {"code": "600664", "name": "哈药股份", "hot_rank": 21, "hot_rank_chg": 1, "stock_cnt": 5802, "price": "6.32", "change": "2.10", "market_id": "17", "circulate_market_value": "15916982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "工业大麻", "change_pct": 0.57}, {"name": "中药", "change_pct": -0.19}, {"name": "保健品", "change_pct": 0.09}, {"name": "民营医院", "change_pct": 0.24}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "流感", "change_pct": -0.32}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "食品", "change_pct": -0.17}]}, {"code": "001317", "name": "三羊马", "hot_rank": 22, "hot_rank_chg": 89, "stock_cnt": 5802, "price": "57.48", "change": "-3.31", "market_id": "33", "circulate_market_value": "4914684700.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001318", "name": "阳光乳业", "hot_rank": 23, "hot_rank_chg": 7, "stock_cnt": 5802, "price": "15.27", "change": "-10.02", "market_id": "33", "circulate_market_value": "4316218200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000993", "name": "闽东电力", "hot_rank": 24, "hot_rank_chg": -10, "stock_cnt": 5802, "price": "18.20", "change": "4.24", "market_id": "33", "circulate_market_value": "8334716500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002696", "name": "百洋股份", "hot_rank": 25, "hot_rank_chg": 18, "stock_cnt": 5802, "price": "9.66", "change": "-9.97", "market_id": "33", "circulate_market_value": "3228941100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -0.22}, {"name": "饲料", "change_pct": 0.87}, {"name": "一带一路", "change_pct": 1.09}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "保健品", "change_pct": 0.09}, {"name": "山东国企改革", "change_pct": 0.5}, {"name": "污水处理", "change_pct": 0.63}, {"name": "环保", "change_pct": 0.93}, {"name": "食品", "change_pct": -0.17}, {"name": "预制菜", "change_pct": 0.3}, {"name": "国企改革", "change_pct": 0.94}, {"name": "水产养殖", "change_pct": 0.22}, {"name": "广西概念", "change_pct": 0.28}]}, {"code": "603999", "name": "读者传媒", "hot_rank": 26, "hot_rank_chg": 59, "stock_cnt": 5802, "price": "8.38", "change": "9.97", "market_id": "17", "circulate_market_value": "4826880000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "人工智能", "xgb_concepts": [{"name": "知识产权", "change_pct": -0.21}, {"name": "传媒", "change_pct": -1.19}, {"name": "NFT", "change_pct": -1.03}, {"name": "在线教育", "change_pct": -1.16}, {"name": "知识付费", "change_pct": -1.21}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 27, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "281.86", "change": "1.31", "market_id": "17", "circulate_market_value": "189048670000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600699", "name": "均胜电子", "hot_rank": 28, "hot_rank_chg": -8, "stock_cnt": 5802, "price": "20.30", "change": "10.03", "market_id": "17", "circulate_market_value": "28332112000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "特斯拉机器人"}, {"code": "001216", "name": "华瓷股份", "hot_rank": 29, "hot_rank_chg": 35, "stock_cnt": 5802, "price": "22.10", "change": "-9.54", "market_id": "33", "circulate_market_value": "5455080000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000607", "name": "华媒控股", "hot_rank": 30, "hot_rank_chg": 91, "stock_cnt": 5802, "price": "4.61", "change": "10.02", "market_id": "33", "circulate_market_value": "4080136600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "文化传媒", "xgb_concepts": [{"name": "优化生育（三孩）", "change_pct": -0.21}, {"name": "浙江国企改革", "change_pct": 0.76}, {"name": "教育", "change_pct": 0.29}, {"name": "知识产权", "change_pct": -0.21}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "传媒", "change_pct": -1.19}, {"name": "社区团购", "change_pct": 0.47}, {"name": "NFT", "change_pct": -1.03}, {"name": "数据要素", "change_pct": -0.21}, {"name": "字节跳动概念股", "change_pct": -1.73}, {"name": "国企改革", "change_pct": 0.94}, {"name": "职业教育", "change_pct": -0.71}, {"name": "在线教育", "change_pct": -1.16}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "区块链", "change_pct": -0.2}]}, {"code": "603618", "name": "杭电股份", "hot_rank": 31, "hot_rank_chg": -25, "stock_cnt": 5802, "price": "32.39", "change": "7.46", "market_id": "17", "circulate_market_value": "22393656000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002639", "name": "雪人集团", "hot_rank": 32, "hot_rank_chg": -22, "stock_cnt": 5802, "price": "15.66", "change": "1.89", "market_id": "33", "circulate_market_value": "10337245200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 33, "hot_rank_chg": -12, "stock_cnt": 5802, "price": "25.26", "change": "-2.36", "market_id": "33", "circulate_market_value": "15027987000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600668", "name": "尖峰集团", "hot_rank": 34, "hot_rank_chg": 83, "stock_cnt": 5802, "price": "8.79", "change": "10.01", "market_id": "17", "circulate_market_value": "3629396200.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "医药", "xgb_concepts": [{"name": "中药", "change_pct": -0.19}, {"name": "创新药", "change_pct": -0.65}, {"name": "水泥", "change_pct": 3.1}, {"name": "浙江国企改革", "change_pct": 0.76}, {"name": "保健品", "change_pct": 0.09}, {"name": "医药", "change_pct": -0.42}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "破净股", "change_pct": 0.79}, {"name": "食品", "change_pct": -0.17}, {"name": "国企改革", "change_pct": 0.94}, {"name": "眼科", "change_pct": 0.5}]}, {"code": "600802", "name": "福建水泥", "hot_rank": 35, "hot_rank_chg": 45, "stock_cnt": 5802, "price": "6.78", "change": "10.06", "market_id": "17", "circulate_market_value": "3106924200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "水泥熟料", "xgb_concepts": [{"name": "水泥", "change_pct": 3.1}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "605058", "name": "澳弘电子", "hot_rank": 36, "hot_rank_chg": -5, "stock_cnt": 5802, "price": "65.83", "change": "-6.61", "market_id": "17", "circulate_market_value": "9409016900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000099", "name": "中信海直", "hot_rank": 37, "hot_rank_chg": 40, "stock_cnt": 5802, "price": "14.75", "change": "9.99", "market_id": "33", "circulate_market_value": "11442609500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济"}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 38, "hot_rank_chg": -6, "stock_cnt": 5802, "price": "10.93", "change": "9.96", "market_id": "33", "circulate_market_value": "5023556900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农机", "change_pct": 1.7}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "新能源车零部件", "change_pct": 2.1}, {"name": "大农业", "change_pct": 1.03}]}, {"code": "605577", "name": "龙版传媒", "hot_rank": 39, "hot_rank_chg": 1, "stock_cnt": 5802, "price": "16.51", "change": "-3.79", "market_id": "17", "circulate_market_value": "7337777800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 40, "hot_rank_chg": -6, "stock_cnt": 5802, "price": "9.75", "change": "19.93", "market_id": "33", "circulate_market_value": "10294253800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.65}, {"name": "医疗器械", "change_pct": -0.36}, {"name": "医药", "change_pct": -0.42}, {"name": "疫苗", "change_pct": -0.46}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "干细胞", "change_pct": -0.87}, {"name": "眼科", "change_pct": 0.5}, {"name": "肿瘤疫苗", "change_pct": 0.23}]}, {"code": "601857", "name": "中国石油", "hot_rank": 41, "hot_rank_chg": 254, "stock_cnt": 5802, "price": "12.76", "change": "1.35", "market_id": "17", "circulate_market_value": "2066125700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "高股息", "change_pct": 1.0}, {"name": "央企改革", "change_pct": 1.37}, {"name": "一带一路", "change_pct": 1.09}, {"name": "石油化工", "change_pct": 1.37}, {"name": "天然气", "change_pct": 1.28}, {"name": "油气改革", "change_pct": 1.29}, {"name": "可燃冰", "change_pct": 1.21}, {"name": "中字头", "change_pct": 0.89}, {"name": "页岩气", "change_pct": 1.57}, {"name": "丁辛醇", "change_pct": 1.44}, {"name": "国企改革", "change_pct": 0.94}]}, {"code": "603197", "name": "保隆科技", "hot_rank": 42, "hot_rank_chg": 107, "stock_cnt": 5802, "price": "29.39", "change": "9.99", "market_id": "17", "circulate_market_value": "6205761000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "机器人传感器"}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 43, "hot_rank_chg": 13, "stock_cnt": 5802, "price": "19.37", "change": "-6.11", "market_id": "17", "circulate_market_value": "4090230800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002487", "name": "大金重工", "hot_rank": 44, "hot_rank_chg": -31, "stock_cnt": 5802, "price": "35.79", "change": "1.33", "market_id": "33", "circulate_market_value": "22580636000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600812", "name": "华北制药", "hot_rank": 45, "hot_rank_chg": -19, "stock_cnt": 5802, "price": "6.26", "change": "-4.72", "market_id": "17", "circulate_market_value": "10740472100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "维生素", "change_pct": 0.87}, {"name": "雄安新区", "change_pct": 0.98}, {"name": "医药", "change_pct": -0.42}, {"name": "疫苗", "change_pct": -0.46}, {"name": "化学原料药", "change_pct": -0.01}, {"name": "流感", "change_pct": -0.32}, {"name": "肝素", "change_pct": -0.54}, {"name": "眼科", "change_pct": 0.5}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 46, "hot_rank_chg": 21, "stock_cnt": 5802, "price": "14.28", "change": "6.81", "market_id": "33", "circulate_market_value": "2533386200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 47, "hot_rank_chg": 11, "stock_cnt": 5802, "price": "11.02", "change": "-8.55", "market_id": "17", "circulate_market_value": "4237714900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": -0.65}, {"name": "股权转让", "change_pct": 0.59}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "新疆概念", "change_pct": 0.95}, {"name": "医药", "change_pct": -0.42}, {"name": "流感", "change_pct": -0.32}, {"name": "国资入股", "change_pct": -0.15}, {"name": "减肥药", "change_pct": -0.22}]}, {"code": "601999", "name": "出版传媒", "hot_rank": 48, "hot_rank_chg": 71, "stock_cnt": 5802, "price": "8.25", "change": "10.00", "market_id": "17", "circulate_market_value": "4545046300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "出版发行", "xgb_concepts": [{"name": "教育", "change_pct": 0.29}, {"name": "数字经济", "change_pct": -0.0}, {"name": "知识产权", "change_pct": -0.21}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "传媒", "change_pct": -1.19}, {"name": "在线教育", "change_pct": -1.16}]}, {"code": "300045", "name": "华力创通", "hot_rank": 49, "hot_rank_chg": 34, "stock_cnt": 5802, "price": "12.70", "change": "20.04", "market_id": "33", "circulate_market_value": "6648931700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "卫星通信芯片", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": 1.01}, {"name": "数字孪生", "change_pct": 1.09}, {"name": "金融科技", "change_pct": -0.7}, {"name": "人工智能", "change_pct": -0.09}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "网络安全", "change_pct": -0.43}, {"name": "大飞机", "change_pct": 2.83}, {"name": "北斗导航", "change_pct": 2.5}, {"name": "高铁轨交", "change_pct": 1.46}, {"name": "军民融合", "change_pct": 2.25}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "军工", "change_pct": 2.36}, {"name": "无人机", "change_pct": 3.37}, {"name": "独角兽", "change_pct": 0.85}, {"name": "国产芯片", "change_pct": -0.09}, {"name": "元宇宙", "change_pct": -0.99}, {"name": "航天", "change_pct": 2.55}, {"name": "6G", "change_pct": -0.1}, {"name": "卫星互联网", "change_pct": 2.01}, {"name": "毫米波雷达", "change_pct": 0.09}, {"name": "时空大数据", "change_pct": 1.51}, {"name": "飞行汽车/eVTOL", "change_pct": 4.27}, {"name": "低空经济", "change_pct": 3.12}, {"name": "军工信息化", "change_pct": 2.62}, {"name": "征信概念", "change_pct": -1.09}]}, {"code": "002889", "name": "东方嘉盛", "hot_rank": 50, "hot_rank_chg": 73, "stock_cnt": 5802, "price": "14.31", "change": "9.99", "market_id": "33", "circulate_market_value": "3595882000.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "半导体设备服务"}, {"code": "002815", "name": "崇达技术", "hot_rank": 51, "hot_rank_chg": -15, "stock_cnt": 5802, "price": "23.47", "change": "0.95", "market_id": "33", "circulate_market_value": "18239430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000420", "name": "吉林化纤", "hot_rank": 52, "hot_rank_chg": 98, "stock_cnt": 5802, "price": "3.88", "change": "9.91", "market_id": "33", "circulate_market_value": "9540048300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济", "xgb_concepts": [{"name": "粘胶短纤", "change_pct": 2.62}, {"name": "大飞机", "change_pct": 2.83}, {"name": "风电", "change_pct": 1.32}, {"name": "碳纤维", "change_pct": 3.49}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "飞行汽车/eVTOL", "change_pct": 4.27}, {"name": "低空经济", "change_pct": 3.12}]}, {"code": "600183", "name": "生益科技", "hot_rank": 53, "hot_rank_chg": 29, "stock_cnt": 5802, "price": "114.60", "change": "-0.01", "market_id": "17", "circulate_market_value": "276386420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002531", "name": "天顺风能", "hot_rank": 54, "hot_rank_chg": -31, "stock_cnt": 5802, "price": "7.41", "change": "9.94", "market_id": "33", "circulate_market_value": "13240696300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "海工装备", "change_pct": 1.93}, {"name": "风电", "change_pct": 1.32}, {"name": "船舶", "change_pct": 3.78}]}, {"code": "002384", "name": "东山精密", "hot_rank": 55, "hot_rank_chg": -9, "stock_cnt": 5802, "price": "122.67", "change": "-1.23", "market_id": "33", "circulate_market_value": "170060090000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603200", "name": "上海洗霸", "hot_rank": 56, "hot_rank_chg": -9, "stock_cnt": 5802, "price": "55.51", "change": "4.05", "market_id": "17", "circulate_market_value": "9740900500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 57, "hot_rank_chg": 59, "stock_cnt": 5802, "price": "1329.00", "change": "1.22", "market_id": "17", "circulate_market_value": "1661358400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002917", "name": "金奥博", "hot_rank": 58, "hot_rank_chg": 116, "stock_cnt": 5802, "price": "11.98", "change": "10.01", "market_id": "33", "circulate_market_value": "3121349800.00", "change_type": "1", "change_section": "4", "change_days": "3", "change_reason": "军工并购", "xgb_concepts": [{"name": "筹码集中", "change_pct": 0.81}, {"name": "一带一路", "change_pct": 1.09}, {"name": "人工智能", "change_pct": -0.09}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "工业自动化", "change_pct": 0.76}, {"name": "军民融合", "change_pct": 2.25}, {"name": "民爆", "change_pct": 3.11}, {"name": "军工", "change_pct": 2.36}, {"name": "机器人", "change_pct": 0.93}, {"name": "智能制造", "change_pct": 0.64}, {"name": "工业互联网", "change_pct": 0.35}, {"name": "国产芯片", "change_pct": -0.09}]}, {"code": "300411", "name": "金盾股份", "hot_rank": 59, "hot_rank_chg": 42, "stock_cnt": 5802, "price": "9.60", "change": "20.00", "market_id": "33", "circulate_market_value": "2967508800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "军工通风", "xgb_concepts": [{"name": "核电", "change_pct": 1.41}, {"name": "人工智能", "change_pct": -0.09}, {"name": "高铁轨交", "change_pct": 1.46}, {"name": "军民融合", "change_pct": 2.25}, {"name": "军工", "change_pct": 2.36}, {"name": "新冠病毒防治", "change_pct": -0.18}, {"name": "核聚变", "change_pct": 1.89}, {"name": "飞行汽车/eVTOL", "change_pct": 4.27}, {"name": "低空经济", "change_pct": 3.12}, {"name": "海洋经济", "change_pct": 1.86}, {"name": "雅江电站概念股", "change_pct": 1.15}]}, {"code": "300750", "name": "宁德时代", "hot_rank": 60, "hot_rank_chg": 32, "stock_cnt": 5802, "price": "277.00", "change": "-0.54", "market_id": "33", "circulate_market_value": "1180190930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601127", "name": "赛力斯", "hot_rank": 61, "hot_rank_chg": 8, "stock_cnt": 5802, "price": "46.49", "change": "2.11", "market_id": "17", "circulate_market_value": "72394386000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002460", "name": "赣锋锂业", "hot_rank": 62, "hot_rank_chg": -21, "stock_cnt": 5802, "price": "39.29", "change": "-1.80", "market_id": "33", "circulate_market_value": "47594698000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002510", "name": "天汽模", "hot_rank": 63, "hot_rank_chg": 52, "stock_cnt": 5802, "price": "5.96", "change": "9.96", "market_id": "33", "circulate_market_value": "6049973900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济", "xgb_concepts": [{"name": "蔚来汽车概念股", "change_pct": 2.78}, {"name": "资产重组", "change_pct": 0.53}, {"name": "特斯拉", "change_pct": 1.34}, {"name": "股权转让", "change_pct": 0.59}, {"name": "通用航空", "change_pct": 4.48}, {"name": "大飞机", "change_pct": 2.83}, {"name": "军民融合", "change_pct": 2.25}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "军工", "change_pct": 2.36}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "无人机", "change_pct": 3.37}, {"name": "新能源车零部件", "change_pct": 2.1}, {"name": "低空经济", "change_pct": 3.12}]}, {"code": "600206", "name": "有研新材", "hot_rank": 64, "hot_rank_chg": -20, "stock_cnt": 5802, "price": "37.51", "change": "-5.80", "market_id": "17", "circulate_market_value": "31754215000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301308", "name": "江波龙", "hot_rank": 65, "hot_rank_chg": 43, "stock_cnt": 5802, "price": "241.65", "change": "-0.96", "market_id": "33", "circulate_market_value": "68109510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "920690", "name": "捷众科技", "hot_rank": 66, "hot_rank_chg": 186, "stock_cnt": 5802, "price": "19.24", "change": "30.00", "market_id": "151", "circulate_market_value": "1077994190.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济"}, {"code": "000592", "name": "平潭发展", "hot_rank": 67, "hot_rank_chg": -25, "stock_cnt": 5802, "price": "7.34", "change": "1.94", "market_id": "33", "circulate_market_value": "14056779000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "林业", "change_pct": 0.85}, {"name": "碳中和", "change_pct": 0.8}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "600967", "name": "内蒙一机", "hot_rank": 68, "hot_rank_chg": -14, "stock_cnt": 5802, "price": "13.89", "change": "6.60", "market_id": "17", "circulate_market_value": "23637928000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600900", "name": "长江电力", "hot_rank": 69, "hot_rank_chg": 77, "stock_cnt": 5802, "price": "29.38", "change": "-0.74", "market_id": "17", "circulate_market_value": "718876240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603096", "name": "新经典", "hot_rank": 70, "hot_rank_chg": 6, "stock_cnt": 5802, "price": "21.00", "change": "-9.68", "market_id": "17", "circulate_market_value": "3238927100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002326", "name": "永太科技", "hot_rank": 71, "hot_rank_chg": 274, "stock_cnt": 5802, "price": "16.54", "change": "1.53", "market_id": "33", "circulate_market_value": "13426660000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000887", "name": "中鼎股份", "hot_rank": 72, "hot_rank_chg": 17, "stock_cnt": 5802, "price": "17.72", "change": "9.99", "market_id": "33", "circulate_market_value": "23290647000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "飞行汽车"}, {"code": "600843", "name": "上工申贝", "hot_rank": 73, "hot_rank_chg": -10, "stock_cnt": 5802, "price": "8.94", "change": "9.96", "market_id": "17", "circulate_market_value": "4194851200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "低空经济", "xgb_concepts": [{"name": "碳纤维", "change_pct": 3.49}, {"name": "低空经济", "change_pct": 3.12}]}, {"code": "002724", "name": "海洋王", "hot_rank": 74, "hot_rank_chg": 136, "stock_cnt": 5802, "price": "7.65", "change": "10.07", "market_id": "33", "circulate_market_value": "4333558900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI照明", "xgb_concepts": [{"name": "石墨烯", "change_pct": -0.08}, {"name": "军民融合", "change_pct": 2.25}, {"name": "物联网", "change_pct": 0.51}, {"name": "LED", "change_pct": 0.08}, {"name": "军工", "change_pct": 2.36}, {"name": "智慧灯杆", "change_pct": 1.26}, {"name": "海洋经济", "change_pct": 1.86}]}, {"code": "605189", "name": "富春染织", "hot_rank": 75, "hot_rank_chg": 20, "stock_cnt": 5802, "price": "16.31", "change": "-8.63", "market_id": "17", "circulate_market_value": "3885611900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301569", "name": "联亚药业", "hot_rank": 76, "hot_rank_chg": -26, "stock_cnt": 5802, "price": "25.17", "change": "-28.33", "market_id": "33", "circulate_market_value": "2941063100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000636", "name": "风华高科", "hot_rank": 77, "hot_rank_chg": -20, "stock_cnt": 5802, "price": "40.76", "change": "-3.32", "market_id": "33", "circulate_market_value": "46771691000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000560", "name": "我爱我家", "hot_rank": 78, "hot_rank_chg": -61, "stock_cnt": 5802, "price": "3.20", "change": "3.56", "market_id": "33", "circulate_market_value": "7496602000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "人工智能", "change_pct": -0.09}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "京津冀", "change_pct": 0.85}, {"name": "装修装饰", "change_pct": 1.66}, {"name": "住房租赁", "change_pct": 3.19}, {"name": "破净股", "change_pct": 0.79}, {"name": "数字经济", "change_pct": -0.0}, {"name": "房产经纪", "change_pct": 2.52}, {"name": "物业管理", "change_pct": 1.69}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "AI大模型/智能体", "change_pct": -0.55}]}, {"code": "601138", "name": "工业富联", "hot_rank": 79, "hot_rank_chg": -42, "stock_cnt": 5802, "price": "47.78", "change": "1.88", "market_id": "17", "circulate_market_value": "948150730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 80, "hot_rank_chg": -32, "stock_cnt": 5802, "price": "65.30", "change": "-8.14", "market_id": "33", "circulate_market_value": "47357948000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000725", "name": "京东方A", "hot_rank": 81, "hot_rank_chg": -19, "stock_cnt": 5802, "price": "5.13", "change": "1.58", "market_id": "33", "circulate_market_value": "181433400000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": 0.05}, {"name": "手机产业链", "change_pct": -0.25}, {"name": "超高清视频", "change_pct": -1.11}, {"name": "苹果产业链", "change_pct": -0.29}, {"name": "电竞", "change_pct": -2.06}, {"name": "半导体", "change_pct": -0.46}, {"name": "人工智能", "change_pct": -0.09}, {"name": "互联网医疗", "change_pct": -0.28}, {"name": "VR&AR", "change_pct": -0.5}, {"name": "OLED", "change_pct": -0.56}, {"name": "京津冀", "change_pct": 0.85}, {"name": "物联网", "change_pct": 0.51}, {"name": "指纹识别", "change_pct": -0.47}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "白马股", "change_pct": 0.41}, {"name": "智能制造", "change_pct": 0.64}, {"name": "小米概念股", "change_pct": -0.38}, {"name": "国产芯片", "change_pct": -0.09}, {"name": "液晶面板/LCD", "change_pct": -0.35}, {"name": "全息概念", "change_pct": -0.15}, {"name": "理想汽车概念股", "change_pct": 2.67}, {"name": "MicroLED", "change_pct": -0.86}, {"name": "钙钛矿电池", "change_pct": 0.34}, {"name": "智能手表", "change_pct": 0.01}, {"name": "MiniLED", "change_pct": -0.63}, {"name": "传感器", "change_pct": 0.7}, {"name": "大硅片", "change_pct": -1.22}, {"name": "AI PC", "change_pct": -0.86}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "回购", "change_pct": 0.28}, {"name": "光电共封装CPO", "change_pct": -1.12}, {"name": "智能眼镜/MR头显", "change_pct": -0.62}, {"name": "玻璃基板封装", "change_pct": -0.54}]}, {"code": "000573", "name": "粤宏远A", "hot_rank": 82, "hot_rank_chg": 82, "stock_cnt": 5802, "price": "4.47", "change": "10.10", "market_id": "33", "circulate_market_value": "2827542400.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "股权收购", "xgb_concepts": [{"name": "资产重组", "change_pct": 0.53}, {"name": "锂电池", "change_pct": -0.48}, {"name": "房地产", "change_pct": 1.72}, {"name": "固废处理", "change_pct": 0.8}, {"name": "有色金属", "change_pct": 0.74}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "环保", "change_pct": 0.93}, {"name": "篮球", "change_pct": 1.67}]}, {"code": "002552", "name": "宝鼎科技", "hot_rank": 83, "hot_rank_chg": -15, "stock_cnt": 5802, "price": "42.06", "change": "-9.99", "market_id": "33", "circulate_market_value": "15499248000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 84, "hot_rank_chg": -18, "stock_cnt": 5802, "price": "306.91", "change": "0.29", "market_id": "33", "circulate_market_value": "385087270000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605136", "name": "丽人丽妆", "hot_rank": 85, "hot_rank_chg": -13, "stock_cnt": 5802, "price": "8.96", "change": "-4.68", "market_id": "17", "circulate_market_value": "3588108200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -0.49}, {"name": "新零售", "change_pct": -0.55}, {"name": "优化生育（三孩）", "change_pct": -0.21}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "预制菜", "change_pct": 0.3}, {"name": "化妆品", "change_pct": -0.42}]}, {"code": "603230", "name": "内蒙新华", "hot_rank": 86, "hot_rank_chg": 2, "stock_cnt": 5802, "price": "13.72", "change": "-5.51", "market_id": "17", "circulate_market_value": "4850335600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 87, "hot_rank_chg": 40, "stock_cnt": 5802, "price": "12.14", "change": "0.25", "market_id": "17", "circulate_market_value": "8085240000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -0.55}, {"name": "强势人气股", "change_pct": 0.1}]}, {"code": "603636", "name": "南威软件", "hot_rank": 88, "hot_rank_chg": 117, "stock_cnt": 5802, "price": "8.04", "change": "9.99", "market_id": "17", "circulate_market_value": "4666098600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "AI短剧", "xgb_concepts": [{"name": "边缘计算", "change_pct": -0.23}, {"name": "国产软件", "change_pct": -0.32}, {"name": "蚂蚁集团概念股", "change_pct": 0.15}, {"name": "共享经济", "change_pct": 1.52}, {"name": "人工智能", "change_pct": -0.09}, {"name": "网络安全", "change_pct": -0.43}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "智慧停车", "change_pct": 1.37}, {"name": "物联网", "change_pct": 0.51}, {"name": "大数据", "change_pct": -0.29}, {"name": "智慧城市", "change_pct": 0.54}, {"name": "储能", "change_pct": 0.6}, {"name": "智慧安防", "change_pct": 0.66}, {"name": "数字经济", "change_pct": -0.0}, {"name": "阿里巴巴概念股", "change_pct": -0.94}, {"name": "信创", "change_pct": -0.72}, {"name": "华为昇腾", "change_pct": 0.21}, {"name": "东数西算/算力", "change_pct": -0.35}, {"name": "电子身份证", "change_pct": 0.47}, {"name": "数据要素", "change_pct": -0.21}, {"name": "数字乡村", "change_pct": 0.41}, {"name": "智慧政务", "change_pct": -0.25}, {"name": "华为云·鲲鹏", "change_pct": -0.7}, {"name": "智慧灯杆", "change_pct": 1.26}, {"name": "算电协同", "change_pct": 0.56}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "自贸区", "change_pct": 1.02}, {"name": "AI大模型/智能体", "change_pct": -0.55}, {"name": "短剧/互动影游", "change_pct": -1.74}, {"name": "智谱AI", "change_pct": -1.08}, {"name": "DeepSeek概念股", "change_pct": -1.12}, {"name": "AI医疗", "change_pct": -0.73}, {"name": "算力一体机", "change_pct": 0.11}, {"name": "区块链", "change_pct": -0.2}]}, {"code": "600176", "name": "中国巨石", "hot_rank": 89, "hot_rank_chg": -30, "stock_cnt": 5802, "price": "33.90", "change": "-0.27", "market_id": "17", "circulate_market_value": "134636800000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 90, "hot_rank_chg": -66, "stock_cnt": 5802, "price": "14.63", "change": "2.02", "market_id": "17", "circulate_market_value": "30599262000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600178", "name": "东安动力", "hot_rank": 91, "hot_rank_chg": 89, "stock_cnt": 5802, "price": "10.25", "change": "9.98", "market_id": "17", "circulate_market_value": "4781380700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "增程动力", "xgb_concepts": [{"name": "央企改革", "change_pct": 1.37}, {"name": "股权转让", "change_pct": 0.59}, {"name": "军工集团", "change_pct": 2.86}, {"name": "汽车零部件", "change_pct": 2.38}, {"name": "军工", "change_pct": 2.36}, {"name": "新能源汽车", "change_pct": 0.76}, {"name": "振兴东北", "change_pct": 1.0}, {"name": "新能源车零部件", "change_pct": 2.1}, {"name": "理想汽车概念股", "change_pct": 2.67}, {"name": "国企改革", "change_pct": 0.94}, {"name": "华为产业链", "change_pct": -0.12}]}, {"code": "601088", "name": "中国神华", "hot_rank": 92, "hot_rank_chg": 143, "stock_cnt": 5802, "price": "50.98", "change": "0.75", "market_id": "17", "circulate_market_value": "864044920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601118", "name": "海南橡胶", "hot_rank": 93, "hot_rank_chg": -66, "stock_cnt": 5802, "price": "6.75", "change": "8.87", "market_id": "17", "circulate_market_value": "28886138000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "农业种植", "change_pct": 1.21}, {"name": "橡胶", "change_pct": 2.28}, {"name": "土地流转", "change_pct": 0.99}, {"name": "农垦", "change_pct": 0.85}, {"name": "海南概念", "change_pct": 0.8}, {"name": "自由贸易港", "change_pct": 0.77}, {"name": "海南自由贸易港", "change_pct": 0.8}, {"name": "大农业", "change_pct": 1.03}, {"name": "可降解塑料", "change_pct": 0.49}, {"name": "大消费", "change_pct": 0.97}, {"name": "免税店概念", "change_pct": 0.35}, {"name": "自贸区", "change_pct": 1.02}]}, {"code": "002172", "name": "澳洋健康", "hot_rank": 94, "hot_rank_chg": -1, "stock_cnt": 5802, "price": "5.77", "change": "-0.34", "market_id": "33", "circulate_market_value": "4414862000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "中药", "change_pct": -0.19}, {"name": "股权转让", "change_pct": 0.59}, {"name": "优化生育（三孩）", "change_pct": -0.21}, {"name": "强势人气股", "change_pct": 0.1}, {"name": "医药商业", "change_pct": -0.76}, {"name": "保健品", "change_pct": 0.09}, {"name": "民营医院", "change_pct": 0.24}, {"name": "医药", "change_pct": -0.42}, {"name": "食品", "change_pct": -0.17}, {"name": "辅助生殖", "change_pct": -0.69}, {"name": "口腔", "change_pct": -0.01}, {"name": "医美", "change_pct": -0.42}, {"name": "新冠病毒防治", "change_pct": -0.18}]}, {"code": "002614", "name": "奥佳华", "hot_rank": 95, "hot_rank_chg": 40, "stock_cnt": 5802, "price": "8.77", "change": "10.04", "market_id": "33", "circulate_market_value": "3869984500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "按摩椅", "xgb_concepts": [{"name": "医疗器械", "change_pct": -0.36}, {"name": "股权转让", "change_pct": 0.59}, {"name": "人工智能", "change_pct": -0.09}, {"name": "养老产业", "change_pct": -0.15}, {"name": "福建自贸/海西概念", "change_pct": 1.64}, {"name": "外贸受益概念", "change_pct": -0.12}, {"name": "小家电", "change_pct": 0.65}, {"name": "机器人", "change_pct": 0.93}, {"name": "家电", "change_pct": 0.55}, {"name": "RCEP概念", "change_pct": 0.42}, {"name": "血氧仪", "change_pct": 0.2}, {"name": "华为鸿蒙", "change_pct": -0.61}, {"name": "华为产业链", "change_pct": -0.12}, {"name": "自贸区", "change_pct": 1.02}, {"name": "IP经济/谷子经济", "change_pct": -0.98}]}, {"code": "002594", "name": "比亚迪", "hot_rank": 96, "hot_rank_chg": 65, "stock_cnt": 5802, "price": "82.72", "change": "0.58", "market_id": "33", "circulate_market_value": "288450320000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002949", "name": "华阳国际", "hot_rank": 97, "hot_rank_chg": 211, "stock_cnt": 5802, "price": "14.14", "change": "10.04", "market_id": "33", "circulate_market_value": "2148228500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "微短剧"}, {"code": "600722", "name": "金牛化工", "hot_rank": 98, "hot_rank_chg": 33, "stock_cnt": 5802, "price": "13.64", "change": "-0.80", "market_id": "17", "circulate_market_value": "9279560400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603533", "name": "掌阅科技", "hot_rank": 99, "hot_rank_chg": -29, "stock_cnt": 5802, "price": "27.63", "change": "-4.76", "market_id": "17", "circulate_market_value": "12126719600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002415", "name": "海康威视", "hot_rank": 100, "hot_rank_chg": 157, "stock_cnt": 5802, "price": "33.66", "change": "-0.59", "market_id": "33", "circulate_market_value": "304491510000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "603636", "name": "南威软件", "price": 8.04, "change_pct": 9.99, "reason": "1、短剧业务方面，公司首部海外AI短剧将于26年8月发行，2026年下半年预计出品25部高质量AI短剧，并按年产超100部的产能规划持续推进；\n2、公司以人工智能重构数字政府、公共安全等传统业务，推出政务专属大模型与面向C端的茶寿健康大模型；\n3、公司智算中心已落地3285万元算力租赁框架订单，并面向政企及海外文娱业务拓展算力服务;", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 1.9, "first_limit_up": 1792113900, "break_limit_up_times": 0}, {"code": "600860", "name": "京城股份", "price": 7.91, "change_pct": 10.01, "reason": "1、公司智能制造板块主要产品包括机器人集成应用和冲压连线产品等；\n2、公司拥有亚洲最大的高压储氢气瓶研发生产基地，自主研发的35MPa高压储氢气瓶已广泛应用于氢燃料电池汽车及燃料电池备用电源领域", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.61, "first_limit_up": 1792118002, "break_limit_up_times": 2}, {"code": "688592", "name": "司南导航", "price": 24.98, "change_pct": 19.98, "reason": "公司推出K8、K9、K601北斗高精度定位模块，产品已应用于无人机、精准农业、测绘等领域", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 9.54, "first_limit_up": 1792115339, "break_limit_up_times": 6}, {"code": "001358", "name": "兴欣新材", "price": 24.92, "change_pct": 10.02, "reason": "公司产品N-羟乙基哌嗪及N,N-二甲基丙酰胺是东进公司生产光刻胶剥离液的必备原材料，后者为全球主要湿电子化工品供应商；拟斥资5000万元至1亿元回购股份", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 3.01, "first_limit_up": 1792114251, "break_limit_up_times": 0}, {"code": "003029", "name": "吉大正元", "price": 21.99, "change_pct": 10.01, "reason": "国内领先的网络安全企业；公司密切关注数字货币领域发展，积极参与数字货币系统安全建设，持续研究数字货币相关安全需求，参与了人民银行数字货币研究所以及几家试点银行的研究工作", "plates": ["其他"], "limit_up_days": 2, "turnover_ratio": 21.01, "first_limit_up": 1792114209, "break_limit_up_times": 2}, {"code": "600668", "name": "尖峰集团", "price": 8.79, "change_pct": 10.01, "reason": "公司以建材和医药为主，以健康品、商贸物流、电缆等业务为辅", "plates": ["医药"], "limit_up_days": 2, "turnover_ratio": 15.01, "first_limit_up": 1792114286, "break_limit_up_times": 3}, {"code": "600843", "name": "上工申贝", "price": 8.94, "change_pct": 9.96, "reason": "1、公司计划2026年集中资源攻坚碳纤维轻型运动飞机等新项目的国产化与量产，完成MOSAIC轻型飞机研发并启动生产，实现首架两座水陆两栖轻型运动飞机的国产化落地，并启动电动三座飞机的开发工作；\n2、公司推进人工智能、机器人技术与缝制工艺结合，已在汽车座椅、沙发、鞋服等领域开展市场化推广", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 11.37, "first_limit_up": 1792120686, "break_limit_up_times": 0}, {"code": "001696", "name": "宗申动力", "price": 15.87, "change_pct": 9.98, "reason": "控股子公司宗申航发是国内首批以民营为主体，成功自主研发航空发动机的创新型企业之一；具备军工资质，主要产品400HP以下航空活塞发动机广泛应用于国内外军、民用无人机及轻型通航飞机市场", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 7.6, "first_limit_up": 1792120158, "break_limit_up_times": 0}, {"code": "600501", "name": "航天晨光", "price": 15.33, "change_pct": 9.97, "reason": "公司与国内多家发射场有业务往来，可为航天地面发射场加注供气系统配套高压储气罐等产品", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1792115737, "break_limit_up_times": 2}, {"code": "603197", "name": "保隆科技", "price": 29.39, "change_pct": 9.99, "reason": "1、全球最大的轮胎气门嘴、汽车车轮平衡块OEM和汽车排气管供应商之一；公司的空气弹簧和双目立体视觉摄像头已获得头部新势力车企的飞行汽车项目定点；\n2、公司已成立智感机器人公司，产品包括关节模组编码器、力传感器及机器人摄像头，机器人摄像头模组已获定点", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 1.76, "first_limit_up": 1792114221, "break_limit_up_times": 0}, {"code": "002767", "name": "先锋电子", "price": 18.04, "change_pct": 10.0, "reason": "1、公司为东莞市本末科技有限公司的股东；本末科技作为直驱技术领域的先行者，聚焦于机器人和核心零部件制造；\n2、公司是国内销售规模最大的智能燃气表制造商之一，合作客户超1300家，市占率居行业前列", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.79, "first_limit_up": 1792115007, "break_limit_up_times": 3}, {"code": "002933", "name": "新兴装备", "price": 27.75, "change_pct": 9.99, "reason": "1、以伺服控制技术为核心的航空装备制造商；公司的机载悬挂/发射装置、飞机信息管理与记录系统等机载设备在国内直升机市场上处于领先地位；\n2、公司已完成第一代旋转执行器试制，正在进行第一代直线执行器试制，计划2024年完成第一代智能机器人整机试制", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 2.3, "first_limit_up": 1792115139, "break_limit_up_times": 1}, {"code": "000607", "name": "华媒控股", "price": 4.61, "change_pct": 10.02, "reason": "1、公司主要从事广告策划发布、报刊发行与印刷、教育等业务，旗下杭州华媒文化发展有限公司体与水母智能合作开发 AI 漫剧，布局动漫短剧创作，依托 AI 技术完成小说到漫剧的自动化生产；\n2、公司持有杭州文化产权交易所 40% 股权，该文交所聚焦文化艺术品等资产的确权、交易与流转", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 2.21, "first_limit_up": 1792113900, "break_limit_up_times": 0}, {"code": "001319", "name": "铭科精技", "price": 21.4, "change_pct": 10.03, "reason": "1、公司是小鹏汇天的长期战略合作伙伴，为其飞行汽车提供部分模具及零部件的生产和交付；\n2、公司在东莞市塘厦镇拿地新建相关产业项目，该项目建成后主要涉及到汽车五金模具、汽车零部件及人形机器人机械手臂总成等业务", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 4.93, "first_limit_up": 1792120185, "break_limit_up_times": 2}, {"code": "002917", "name": "金奥博", "price": 11.98, "change_pct": 10.01, "reason": "民爆智能装备龙头企业，广东省机器人培育企业；公司拟收购汇维科技80%股权，进一步拓展军工装备领域相关业务布局", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 10.06, "first_limit_up": 1792114854, "break_limit_up_times": 1}, {"code": "603173", "name": "福斯达", "price": 30.05, "change_pct": 9.99, "reason": "公司主要从事深冷装备，“基于全精馏技术的场效应晶体管专用高纯制氧成套设备”荣获国内首台套称号，该超高纯氧制取技术已达国际先进水平，成套设备已在半导体领域有成功应用项目", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 1.87, "first_limit_up": 1792118497, "break_limit_up_times": 0}, {"code": "603348", "name": "文灿股份", "price": 15.31, "change_pct": 9.99, "reason": "汽车用铝合金压铸件生产商，积极关注机器人行业的发展", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.5, "first_limit_up": 1792120675, "break_limit_up_times": 1}, {"code": "600418", "name": "江淮汽车", "price": 22.37, "change_pct": 9.98, "reason": "三部门联合调查尊界事件", "plates": ["新能源汽车"], "limit_up_days": 1, "turnover_ratio": 2.89, "first_limit_up": 1792114277, "break_limit_up_times": 0}, {"code": "600178", "name": "东安动力", "price": 10.25, "change_pct": 9.98, "reason": "兵器装备集团旗下，公司为拥有发动机、新能源增程动力系统、传动系统三大平台，提供新能源动力传动系统一体化解决方案", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 4.95, "first_limit_up": 1792120766, "break_limit_up_times": 0}, {"code": "002535", "name": "林州重机", "price": 2.54, "change_pct": 9.96, "reason": "公司与中科院自动化研究所签订共建“工业机器人技术工程中心协议书”，致力于工业用智能机器人和高新技术领域的核心技术研发", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.42, "first_limit_up": 1792115691, "break_limit_up_times": 0}, {"code": "002085", "name": "万丰奥威", "price": 9.91, "change_pct": 9.99, "reason": "子公司万丰飞机签署成立合资公司战略合作，双方在eVTOL原型机开发、电池系统、工业设计、航空工程、模具及工装制造、供应链及大规模量产、航空适航认证、品牌力和B2C/B2B销售和售后网络资源等领域深度合作并为合资公司提供支持", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 3.1, "first_limit_up": 1792115043, "break_limit_up_times": 0}, {"code": "000573", "name": "粤宏远Ａ", "price": 4.47, "change_pct": 10.1, "reason": "1、公司拟不超5.5亿元收购金旺达100%股权，标的公司专注于精密传动功能部件领域生产制造，核心产品包括精密直线导轨、精密滚珠丝杠等，广泛应用于新能源、3C电子、LCD/LED面板、汽车制造装备、医疗等高端自动化领域；\n2、东莞市场多年经营的房地产企业，广东省合法产能最大的再生铅企业", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.25, "first_limit_up": 1792113900, "break_limit_up_times": 0}, {"code": "000420", "name": "吉林化纤", "price": 3.88, "change_pct": 9.92, "reason": "1、公司作为碳纤维材料龙头企业，其碳纤维产品已应用于亿航智能等 eVTOL 厂商，且与华为合作开发相关轻量化材料，在低空经济领域实现了全产业链布局；\n2、公司碳纤维材料可用于机器人制造", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 6.91, "first_limit_up": 1792126812, "break_limit_up_times": 1}, {"code": "603278", "name": "大业股份", "price": 9.91, "change_pct": 9.99, "reason": "1、公司人形机器人灵巧手用钢丝尚处于市场调研和研究开发阶段；\n2、公司投资联营企业湖北三江航天江北机械工程主要从事航天动力系统、天线罩等航天型号产品及特种压力容器产品、高端机电成套装备、先进激光应用设备等民用产品", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.75, "first_limit_up": 1792114656, "break_limit_up_times": 0}, {"code": "300581", "name": "晨曦航空", "price": 11.81, "change_pct": 20.02, "reason": "公司拥有军工保密资格单位证书，产品及服务涉及航空惯性导航、航空发动机电子及无人机领域，主要为国有大型军工企业及其他厂商配套，用户主要为国内军方", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 9.29, "first_limit_up": 1792114773, "break_limit_up_times": 1}, {"code": "601811", "name": "新华文轩", "price": 28.14, "change_pct": 10.01, "reason": "四川省出版传媒行业龙头，省内义务教育阶段学生教科书唯一供货方", "plates": ["短剧/互动影游"], "limit_up_days": 3, "turnover_ratio": 7.74, "first_limit_up": 1792115789, "break_limit_up_times": 5}, {"code": "603168", "name": "莎普爱思", "price": 6.24, "change_pct": 10.05, "reason": "白内障药物龙头，核心产品莎普爱思滴眼液属于眼科用药（抗白内障类）领域", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 6.29, "first_limit_up": 1792116522, "break_limit_up_times": 2}, {"code": "002949", "name": "华阳国际", "price": 14.14, "change_pct": 10.04, "reason": "1、公司涉及到低空经济的业务主要是关于航空小镇的相关规划设计；\n2、公司是国家高新技术企业、建筑设计行业“国家住宅产业化基地”、首批“装配式建筑产业基地”、首批“全过程工程咨询试点单位”", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 7.09, "first_limit_up": 1792115382, "break_limit_up_times": 0}, {"code": "002869", "name": "金溢科技", "price": 20.58, "change_pct": 9.99, "reason": "公司打造了完整的智能网联车路云产品体系，积极拓展低空智联等战略新业务", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 6.55, "first_limit_up": 1792117797, "break_limit_up_times": 0}, {"code": "603668", "name": "天马科技", "price": 7.55, "change_pct": 10.06, "reason": "公司位于福建省福清市，鳗鱼产业链龙头", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 10.55, "first_limit_up": 1792115546, "break_limit_up_times": 2}, {"code": "002076", "name": "星光股份", "price": 2.17, "change_pct": 10.15, "reason": "控股子公司天芯量子主营量子保密通信与AI信息安全、数据安全、云安全技术和产品开发", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 11.52, "first_limit_up": 1792115598, "break_limit_up_times": 7}, {"code": "603305", "name": "旭升集团", "price": 10.88, "change_pct": 10.01, "reason": "公司深度挖掘自身铝合金精密加工专长，结合人形机器人独特的结构与性能需求，全力投入关节壳体、躯干结构件等关键产品研发，并斩获多家海内外客户项目定点", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.03, "first_limit_up": 1792126801, "break_limit_up_times": 1}, {"code": "600825", "name": "新华传媒", "price": 15.16, "change_pct": 10.01, "reason": "公司拟发行股份购买界面财联社100%股权", "plates": ["资产重组"], "limit_up_days": 1, "turnover_ratio": 1.56, "first_limit_up": 1792113900, "break_limit_up_times": 0}, {"code": "603015", "name": "弘讯科技", "price": 10.8, "change_pct": 9.98, "reason": "1、公司持续推进自主可控芯片主要包括CPU芯片、MCU芯片、通讯芯片、ASIC芯片在人机界面、控制主机、伺服驱动器等核心产品中的规模化导入，可无缝适配边缘计算、轻量化AI算法等产业智能发展趋势；\n2、公司意大利子公司EEI参与欧洲跨国人造太阳项目", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 2.66, "first_limit_up": 1792115296, "break_limit_up_times": 1}, {"code": "603999", "name": "读者传媒", "price": 8.38, "change_pct": 9.97, "reason": "公司期刊出版发行方面长期处于行业领先地位，拥有优质IP资源，已尝试通过人工智能生成文章、创作杂志封面并开发AI应用产品", "plates": ["短剧/互动影游"], "limit_up_days": 2, "turnover_ratio": 3.06, "first_limit_up": 1792113900, "break_limit_up_times": 0}, {"code": "000576", "name": "甘化科工", "price": 8.77, "change_pct": 10.04, "reason": "1、控股子公司沈阳含能拥有军工相关资质，在钨合金预制破片领域具有相对稳定的竞争地位，与多家兵工厂建立了良好的合作关系，是部分常规炮弹及新型火箭弹预制破片的主要供应商；\n2、公司持有苏州锴威特半导体股份有限公司834.4816万股，占其总股本11.33%", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.73, "first_limit_up": 1792115352, "break_limit_up_times": 0}, {"code": "601999", "name": "出版传媒", "price": 8.25, "change_pct": 10.0, "reason": "辽宁省教材教辅出版企业；公司积极推动数智出版融合发展，应用AI图书数字人，采用“一书一模型”为纸质书配置专属AI助手，提供内容答疑、伴读与知识拓展服务，已在《数学周报》《尖子生题库》等产品落地应用", "plates": ["短剧/互动影游"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1792114200, "break_limit_up_times": 0}, {"code": "603955", "name": "大千生态", "price": 23.57, "change_pct": 9.99, "reason": "公司宠物业务已覆盖零售及服务、智能硬件、互动体验等场景，形成“消费+服务+产品”的全业务链布局", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.13, "first_limit_up": 1792117692, "break_limit_up_times": 0}, {"code": "000701", "name": "厦门信达", "price": 5.36, "change_pct": 10.06, "reason": "公司是福建省最具影响力的汽车经销商集团之一，已形成以电子信息产业为核心，汽车经销、供应链等业务共同发展的产业结构", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 5.72, "first_limit_up": 1792115910, "break_limit_up_times": 1}, {"code": "601606", "name": "长城军工", "price": 31.92, "change_pct": 9.99, "reason": "安徽省国资委旗下，公司为老牌弹药供应商", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 3.24, "first_limit_up": 1792114686, "break_limit_up_times": 0}, {"code": "000887", "name": "中鼎股份", "price": 17.72, "change_pct": 9.99, "reason": "1、公司与腾讯云签署战略合作协议，在算力集群投建与运营、算力中心液冷业务、采购腾讯云服务、AI应用合作方面展开合作，合作有效期为3年；\n2、公司设立全资子公司安徽睿思博机器人科技有限公司，推动机器人部件产品的生产配套；\n3、子公司中鼎流体及中鼎智能目前已推出系列化储能液冷机组、超算中心浸没式液冷机组、热管理控制器、温压一体传感器、冷媒流道板等产品", "plates": ["云计算数据中心"], "limit_up_days": 1, "turnover_ratio": 4.91, "first_limit_up": 1792120029, "break_limit_up_times": 1}, {"code": "000530", "name": "冰山冷热", "price": 7.62, "change_pct": 9.96, "reason": "1、冷热产业链综合方案服务提供商；掌握全球先进的二氧化碳跨临界冷热“五合一”零碳技术，为北京冬奥会多个比赛及配套冰场、哈尔滨亚冬会三个冰上场馆提供制冷设备；\n2、公司主要研究数据中心液冷的冷源部分，着重研发干冷器、氟泵系统、冷水系统，部分产品已实现小批量交付", "plates": ["其他"], "limit_up_days": 4, "turnover_ratio": 33.24, "first_limit_up": 1792117251, "break_limit_up_times": 0}, {"code": "002683", "name": "广东宏大", "price": 27.9, "change_pct": 10.02, "reason": "军工板块是公司的战略转型重点板块，孵化多个前瞻性军工项目研发平台，全资子公司明华公司拥有军工牌照", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 2.2, "first_limit_up": 1792115112, "break_limit_up_times": 0}, {"code": "300045", "name": "华力创通", "price": 12.7, "change_pct": 20.04, "reason": "公司自研的天通卫星数传终端已应用于电动垂直起降航空器（eVTOL），可在地面通信覆盖不到的场景下，实现设备实时数据回传和远程控制", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 13.66, "first_limit_up": 1792120407, "break_limit_up_times": 1}, {"code": "600699", "name": "均胜电子", "price": 20.3, "change_pct": 10.03, "reason": "1、公司与智元等国内外机器人头部客户合作，定制化主控板等产品已实现批量交付；\n2、子公司近期新获两家头部品牌主机厂客户项目定点通知，公司将为上述客户在全球范围内开发并提供一系列汽车智能化产品，包括CCU、智能网联等产品，根据客户规划，上述项目预计全生命周期订单总金额约人民币150亿元，计划从2027年开始量产", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 4.96, "first_limit_up": 1792119635, "break_limit_up_times": 17}, {"code": "002614", "name": "奥佳华", "price": 8.77, "change_pct": 10.04, "reason": "1、公司是全国最大的养老按摩器材生产制造服务商，实控人联合自然人股东折价转让10%股份；\n2、旗下AI按摩机器人运用了语音交互、人脸识别、智能生理参数检测等技术，还接入DeepSeek，打造健康生态AI大模型", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 11.14, "first_limit_up": 1792117545, "break_limit_up_times": 0}, {"code": "600802", "name": "福建水泥", "price": 6.78, "change_pct": 10.06, "reason": "公司是福建地区产能规模最大的水泥制造企业", "plates": ["福建自贸/海西概念"], "limit_up_days": 1, "turnover_ratio": 16.65, "first_limit_up": 1792116066, "break_limit_up_times": 2}, {"code": "002724", "name": "海洋王", "price": 7.65, "change_pct": 10.07, "reason": "公司是深海特种照明设备供应商，技术延展至水下机器人及探测装备，适配全海深场景‌", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 8.3, "first_limit_up": 1792114803, "break_limit_up_times": 1}, {"code": "301586", "name": "佳力奇", "price": 33, "change_pct": 20.0, "reason": "公司是作为最早进入航空复材零部件市场的民营企业之一，连续五年被航空工业下属核心飞机主机厂客户评为“优秀供应商”“金牌供应商”的唯一复材零部件领域企业，同时在民机、无人机、低空经济等领域布局", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 13.92, "first_limit_up": 1792127637, "break_limit_up_times": 1}, {"code": "603013", "name": "亚普股份", "price": 15, "change_pct": 9.97, "reason": "公司拟收购赢双科技，切入旋转变压器与特种电机领域，客户包括奇瑞、东风、比亚迪，消息称正在开发人形机器人用旋变传感器", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 1.42, "first_limit_up": 1792126801, "break_limit_up_times": 0}, {"code": "600319", "name": "亚星化学", "price": 6.9, "change_pct": 10.05, "reason": "公司以氯碱为龙头，含氯聚合物为主线，副产液氯用于生产氯化聚乙烯和聚偏二氯乙烯，副产氢气用于生产双氧水", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 5.53, "first_limit_up": 1792114930, "break_limit_up_times": 1}, {"code": "002510", "name": "天汽模", "price": 5.96, "change_pct": 9.96, "reason": "1、全球规模最大的汽车覆盖件模具生产企业，特斯拉、Rivian是公司客户之一；\n2、公司航空零部件业务订单充足，配套C919、AG600等军民机型，并获小鹏汇天等低空经济客户订单", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 6.55, "first_limit_up": 1792120527, "break_limit_up_times": 0}, {"code": "300681", "name": "英搏尔", "price": 20.84, "change_pct": 19.98, "reason": "公司的“集成芯”技术产品将电机电控深度集成，实现了电推进系统体积小、重量轻、功率密度高等特点，高度契合eVTOL 整机的需求，同时公司具备 eVTOL 产品的高质量研发及交付等体系能力，目前与亿航智能、亿维特、高域等低空经济领域多家eVTOL头部企业签署战略合作协议并获得多个项目定点", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 12.91, "first_limit_up": 1792126878, "break_limit_up_times": 8}, {"code": "603239", "name": "浙江仙通", "price": 14.43, "change_pct": 9.98, "reason": "1、公司以4000万元获浩海星空10%股权，并控股51%设立合资公司，建设机器人整机生产基地；\n2、中国本土汽车密封条行业第一梯队成员，为华为独家供货全车密封条", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 3.34, "first_limit_up": 1792127361, "break_limit_up_times": 15}, {"code": "300411", "name": "金盾股份", "price": 9.6, "change_pct": 20.0, "reason": "公司与清华大学联合研制的系列化涵道推进器取得关键进展，2款产品已完成性能测试及可靠性验证，成功完成垂直起降、空中悬停等飞行科目验证，并已设立子公司推进产业化落地", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 11.81, "first_limit_up": 1792119399, "break_limit_up_times": 0}, {"code": "605178", "name": "时空科技", "price": 61.44, "change_pct": 10.01, "reason": "公司拟收购嘉合劲威，切入存储领域", "plates": ["国产芯片"], "limit_up_days": 1, "turnover_ratio": 4.24, "first_limit_up": 1792119317, "break_limit_up_times": 0}, {"code": "000099", "name": "中信海直", "price": 14.75, "change_pct": 9.99, "reason": "实控人中信集团；公司已在多场景研究电动飞机运行的可行性，并参与eVTOL起降场建设技术团体标准制定", "plates": ["低空经济"], "limit_up_days": 1, "turnover_ratio": 6.08, "first_limit_up": 1792120590, "break_limit_up_times": 0}, {"code": "600148", "name": "长春一东", "price": 16.28, "change_pct": 10.0, "reason": "公司是中兵集团旗下上市企业，东北工业集团唯一上市平台，最终实控人为国务院国资委", "plates": ["军工"], "limit_up_days": 1, "turnover_ratio": 2.87, "first_limit_up": 1792115366, "break_limit_up_times": 1}, {"code": "002889", "name": "东方嘉盛", "price": 14.31, "change_pct": 9.99, "reason": "1、公司与国际头部芯片光刻机厂商合作，共同在深圳建设寄售维修保税仓库，为华南片区集成电路制造企业提供全天候快速响应的光刻机寄售维修服务。\n2、公司是国内领先的一体化供应链服务商；为客户提供包括原材料、零部件及产成品采购、订单及合同管理、进出口代理等在内的一体化供应链管理服务。", "plates": ["国产芯片"], "limit_up_days": 2, "turnover_ratio": 2.17, "first_limit_up": 1792113900, "break_limit_up_times": 0}];
const RISK_STOCKS = {"524505": "[立案调查] 25宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524784": "[立案调查] 26宏桂01：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524990": "[立案调查] 26宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "524583": "[立案调查] 25宏桂02：广西宏桂资本运营集团有限公司关于公司高级管理人员被立案调查并采取留", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "300208": "[立案调查] *ST中程：关于公司被立案调查的进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国"};