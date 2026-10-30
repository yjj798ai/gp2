const UPDATE_TIME = "2026-10-30 09:30";
const THS_HOT = [
  {
    "name": "创新药",
    "rise": -0.56,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续149天上榜",
    "rankChg": 0,
    "etfName": "科创创新药ETF",
    "code": "886015"
  },
  {
    "name": "商业航天",
    "rise": -4.0,
    "rate": 0,
    "tag": "6家涨停",
    "hotTag": "连续248天上榜",
    "rankChg": 0,
    "etfName": "卫星ETF",
    "code": "886078"
  },
  {
    "name": "人形机器人",
    "rise": -4.2,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续11天上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886069"
  },
  {
    "name": "PCB概念",
    "rise": -3.92,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续142天上榜",
    "rankChg": 0,
    "etfName": "消费电子ETF",
    "code": "885959"
  },
  {
    "name": "共封装光学(CPO)",
    "rise": -4.91,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续319天上榜",
    "rankChg": 0,
    "etfName": "创业板人工智能ETF",
    "code": "886033"
  },
  {
    "name": "CRO概念",
    "rise": 0.76,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "白酒概念",
    "rise": 1.17,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "消费50ETF",
    "code": "885525"
  },
  {
    "name": "机器人概念",
    "rise": -3.86,
    "rate": 0,
    "tag": "7家涨停",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "885517"
  },
  {
    "name": "存储芯片",
    "rise": -5.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续272天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "886042"
  },
  {
    "name": "冰雪产业",
    "rise": -2.45,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "旅游ETF",
    "code": "885825"
  },
  {
    "name": "固态电池",
    "rise": -2.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "储能电池ETF",
    "code": "886032"
  },
  {
    "name": "AI应用",
    "rise": -4.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": 0,
    "etfName": "游戏ETF",
    "code": "886108"
  },
  {
    "name": "培育钻石",
    "rise": -2.67,
    "rate": 0,
    "tag": "",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885937"
  },
  {
    "name": "MLCC概念",
    "rise": -3.87,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续59天上榜",
    "rankChg": 0,
    "etfName": "科创半导体设备ETF",
    "code": "886112"
  },
  {
    "name": "脑机接口",
    "rise": -2.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 1,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "减肥药",
    "rise": 0.45,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "",
    "rankChg": -1,
    "etfName": "创新药ETF",
    "code": "886051"
  },
  {
    "name": "乳业",
    "rise": -0.22,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天4次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885462"
  },
  {
    "name": "减速器",
    "rise": -3.86,
    "rate": 0,
    "tag": "",
    "hotTag": "10天9次上榜",
    "rankChg": 0,
    "etfName": "机器人ETF",
    "code": "886008"
  },
  {
    "name": "ST板块",
    "rise": -2.1,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "7天7次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "885699"
  },
  {
    "name": "算力租赁",
    "rise": -5.12,
    "rate": 0,
    "tag": "",
    "hotTag": "10天10次上榜",
    "rankChg": 0,
    "etfName": "创业板算力ETF",
    "code": "886050"
  }
];
const THS_EVENTS = [
  {
    "title": "摒弃短期让利换量 白酒行业修复新路径",
    "desc": "",
    "heat": 672908,
    "direction": "白酒",
    "themes": [
      "一线酒企",
      "二线酒企",
      "三线酒企",
      "白酒"
    ],
    "stocks": [
      {
        "name": "皇台酒业",
        "code": "000995",
        "chg": 10.007758
      }
    ]
  },
  {
    "title": "从Token到Worken，智元提出物理AI“度量衡”",
    "desc": "",
    "heat": 89466,
    "direction": "物理AI",
    "themes": [
      "仿真训练",
      "多模态感知硬件",
      "算力底座",
      "物理AI",
      "人形机器人"
    ],
    "stocks": [
      {
        "name": "必易微",
        "code": "688045",
        "chg": 19.996121
      }
    ]
  },
  {
    "title": "药企全景披露代谢管线布局 开启三重战略转型",
    "desc": "",
    "heat": 87587,
    "direction": "医疗服务",
    "themes": [
      "医疗服务",
      "CRO概念",
      "细胞免疫治疗",
      "AI制药"
    ],
    "stocks": [
      {
        "name": "阳普医疗",
        "code": "300030",
        "chg": 20.032841
      }
    ]
  },
  {
    "title": "日活1.68亿超四大长视频之和，红果成为国内第四大App",
    "desc": "",
    "heat": 82696,
    "direction": "短剧",
    "themes": [
      "AI漫剧",
      "红果短剧",
      "文化传媒"
    ],
    "stocks": [
      {
        "name": "智度股份",
        "code": "000676",
        "chg": 9.983361
      }
    ]
  },
  {
    "title": "礼来Q3业绩超预期，上调全年营收指引至910亿–920亿美元",
    "desc": "",
    "heat": 71457,
    "direction": "减肥药",
    "themes": [
      "GLP-1制剂",
      "API/CDMO",
      "原料耗材",
      "减肥药"
    ],
    "stocks": [
      {
        "name": "万邦医药",
        "code": "301520",
        "chg": 20.0
      }
    ]
  },
  {
    "title": "国星宇航通过港交所聆讯 在从事卫星相关业务的中国民营商业航天企业中排名第七",
    "desc": "",
    "heat": 44821,
    "direction": "商业航天",
    "themes": [
      "火箭发射",
      "卫星测控",
      "卫星通信",
      "卫星遥感",
      "火箭回收"
    ],
    "stocks": [
      {
        "name": "盛洋科技",
        "code": "603703",
        "chg": 10.036832
      }
    ]
  },
  {
    "title": "上海拟推动自动驾驶在出租车应用",
    "desc": "",
    "heat": 20698,
    "direction": "无人驾驶",
    "themes": [
      "激光雷达",
      "车载摄像头",
      "HUD抬头显示",
      "线控系统",
      "无人驾驶"
    ],
    "stocks": [
      {
        "name": "满坤科技",
        "code": "301132",
        "chg": 20.00856
      }
    ]
  }
];
const XGT_HOT = [
  {
    "name": "白酒",
    "change": "+5.27%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "天津自贸区",
    "change": "+1.89%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "CAR-T疗法",
    "change": "+1.61%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "航运",
    "change": "+1.54%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "大消费",
    "change": "+1.36%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "黄酒",
    "change": "+1.1%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "民航",
    "change": "+1.08%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "棉花",
    "change": "+1.0%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "港口",
    "change": "+0.92%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "山东自贸区",
    "change": "+0.9%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "银行",
    "change": "+0.77%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "机场",
    "change": "+0.75%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河南自贸区",
    "change": "+0.64%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "休闲食品",
    "change": "+0.6%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "肝素",
    "change": "+0.58%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "减肥药",
    "change": "+0.56%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "河北自贸区",
    "change": "+0.55%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "医药商业",
    "change": "+0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "葡萄酒",
    "change": "+0.53%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  },
  {
    "name": "干细胞",
    "change": "+0.5%",
    "stock": "",
    "stockChange": "",
    "desc": ""
  }
];
const PREV_RECOMMENDED = [];
const CHEAP_STOCKS = [
  {
    "code": "002086",
    "name": "东方海洋",
    "hot_rank": 7,
    "hot_rank_chg": 42,
    "stock_cnt": 5797,
    "price": "2.83",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "4474148700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "“羊”字辈",
    "xgb_concepts": [
      {
        "name": "精准医疗",
        "change_pct": -0.97
      },
      {
        "name": "体外诊断",
        "change_pct": -0.88
      },
      {
        "name": "医疗器械",
        "change_pct": -1.68
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "基因测序",
        "change_pct": -1.74
      },
      {
        "name": "预制菜",
        "change_pct": -1.29
      },
      {
        "name": "低价股",
        "change_pct": -1.99
      },
      {
        "name": "水产养殖",
        "change_pct": -1.15
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.58
      },
      {
        "name": "海洋经济",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 12,
    "hot_rank_chg": -3,
    "stock_cnt": 5797,
    "price": "7.92",
    "change": "-3.77",
    "market_id": "33",
    "circulate_market_value": "4752924500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "体育产业",
        "change_pct": -3.91
      },
      {
        "name": "边缘计算",
        "change_pct": -5.33
      },
      {
        "name": "核电",
        "change_pct": -3.52
      },
      {
        "name": "海工装备",
        "change_pct": -3.12
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.83
      },
      {
        "name": "冷链",
        "change_pct": -2.42
      },
      {
        "name": "地热",
        "change_pct": -2.41
      },
      {
        "name": "储能",
        "change_pct": -3.25
      },
      {
        "name": "碳中和",
        "change_pct": -2.62
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "冰雪产业",
        "change_pct": -3.01
      },
      {
        "name": "汽车热管理",
        "change_pct": -3.36
      },
      {
        "name": "热泵",
        "change_pct": -4.17
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.51
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.42
      },
      {
        "name": "海洋经济",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 13,
    "hot_rank_chg": 83,
    "stock_cnt": 5797,
    "price": "4.09",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "5460366600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "LED",
        "change_pct": -3.75
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.29
      }
    ]
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 15,
    "hot_rank_chg": 15,
    "stock_cnt": 5797,
    "price": "5.91",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4521981700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "脑机接口",
    "xgb_concepts": [
      {
        "name": "中药",
        "change_pct": -0.03
      },
      {
        "name": "优化生育（三孩）",
        "change_pct": -1.71
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "医药商业",
        "change_pct": 0.53
      },
      {
        "name": "保健品",
        "change_pct": 0.1
      },
      {
        "name": "民营医院",
        "change_pct": -0.31
      },
      {
        "name": "医药",
        "change_pct": -0.31
      },
      {
        "name": "食品",
        "change_pct": -0.3
      },
      {
        "name": "辅助生殖",
        "change_pct": -0.85
      },
      {
        "name": "口腔",
        "change_pct": -0.94
      },
      {
        "name": "医美",
        "change_pct": -0.03
      },
      {
        "name": "新冠病毒防治",
        "change_pct": -1.58
      }
    ]
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 18,
    "hot_rank_chg": -8,
    "stock_cnt": 5797,
    "price": "12.27",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "4918821900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "上海国企改革",
        "change_pct": -2.11
      },
      {
        "name": "新零售",
        "change_pct": -2.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "物业管理",
        "change_pct": -2.6
      },
      {
        "name": "国企改革",
        "change_pct": -2.22
      },
      {
        "name": "地摊经济",
        "change_pct": -3.33
      }
    ]
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 21,
    "hot_rank_chg": -9,
    "stock_cnt": 5797,
    "price": "7.37",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "13799822000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "充电桩",
        "change_pct": -4.07
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.83
      },
      {
        "name": "军民融合",
        "change_pct": -4.25
      },
      {
        "name": "氢能源/燃料电池",
        "change_pct": -2.93
      },
      {
        "name": "风电",
        "change_pct": -2.98
      },
      {
        "name": "军工",
        "change_pct": -4.15
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.32
      },
      {
        "name": "新能源车零部件",
        "change_pct": -4.09
      },
      {
        "name": "轮边电机",
        "change_pct": -5.01
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      }
    ]
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 23,
    "hot_rank_chg": 90,
    "stock_cnt": 5797,
    "price": "11.95",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4959036300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "卫星通信终端",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.61
      },
      {
        "name": "5G",
        "change_pct": -5.1
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "云计算数据中心",
        "change_pct": -4.83
      },
      {
        "name": "LED",
        "change_pct": -3.75
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.29
      },
      {
        "name": "铜缆高速连接器",
        "change_pct": -4.95
      }
    ]
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 28,
    "hot_rank_chg": -11,
    "stock_cnt": 5797,
    "price": "11.12",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "3716959200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "动物保健",
        "change_pct": -1.1
      },
      {
        "name": "饲料",
        "change_pct": -1.62
      },
      {
        "name": "一带一路",
        "change_pct": -2.4
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "保健品",
        "change_pct": 0.1
      },
      {
        "name": "山东国企改革",
        "change_pct": -2.55
      },
      {
        "name": "污水处理",
        "change_pct": -2.85
      },
      {
        "name": "环保",
        "change_pct": -2.86
      },
      {
        "name": "食品",
        "change_pct": -0.3
      },
      {
        "name": "预制菜",
        "change_pct": -1.29
      },
      {
        "name": "国企改革",
        "change_pct": -2.22
      },
      {
        "name": "水产养殖",
        "change_pct": -1.15
      },
      {
        "name": "广西概念",
        "change_pct": -2.12
      }
    ]
  },
  {
    "code": "002031",
    "name": "巨轮智能",
    "hot_rank": 30,
    "hot_rank_chg": 217,
    "stock_cnt": 5797,
    "price": "5.22",
    "change": "2.96",
    "market_id": "33",
    "circulate_market_value": "11480806200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业自动化",
        "change_pct": -3.42
      },
      {
        "name": "轮胎",
        "change_pct": -1.19
      },
      {
        "name": "冷链",
        "change_pct": -2.42
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "工业母机",
        "change_pct": -3.23
      },
      {
        "name": "减速器",
        "change_pct": -3.31
      },
      {
        "name": "头盔",
        "change_pct": -3.25
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      }
    ]
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 32,
    "hot_rank_chg": -7,
    "stock_cnt": 5797,
    "price": "12.24",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "8151840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "新零售",
        "change_pct": -2.44
      }
    ]
  },
  {
    "code": "000559",
    "name": "万向钱潮",
    "hot_rank": 33,
    "hot_rank_chg": -13,
    "stock_cnt": 5797,
    "price": "12.60",
    "change": "-3.23",
    "market_id": "33",
    "circulate_market_value": "41921196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.36
      },
      {
        "name": "半导体",
        "change_pct": -5.14
      },
      {
        "name": "锂电池",
        "change_pct": -2.72
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "汽车零部件",
        "change_pct": -4.02
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.32
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "工业互联网",
        "change_pct": -3.97
      },
      {
        "name": "新能源车零部件",
        "change_pct": -4.09
      },
      {
        "name": "固态电池",
        "change_pct": -2.18
      },
      {
        "name": "MCU概念",
        "change_pct": -4.18
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      },
      {
        "name": "小米汽车",
        "change_pct": -3.63
      },
      {
        "name": "低空经济",
        "change_pct": -4.32
      }
    ]
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 35,
    "hot_rank_chg": -6,
    "stock_cnt": 5797,
    "price": "8.07",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "3822599900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -6.3
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "VR&AR",
        "change_pct": -5.27
      },
      {
        "name": "游戏",
        "change_pct": -6.84
      },
      {
        "name": "影视",
        "change_pct": -6.68
      },
      {
        "name": "直播/短视频",
        "change_pct": -5.49
      },
      {
        "name": "动漫",
        "change_pct": -7.81
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.04
      },
      {
        "name": "传媒",
        "change_pct": -5.71
      },
      {
        "name": "元宇宙",
        "change_pct": -5.75
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.38
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.59
      }
    ]
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 36,
    "hot_rank_chg": -13,
    "stock_cnt": 5797,
    "price": "7.52",
    "change": "-10.05",
    "market_id": "33",
    "circulate_market_value": "12234993200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.24
      },
      {
        "name": "电竞",
        "change_pct": -4.62
      },
      {
        "name": "手游",
        "change_pct": -6.3
      },
      {
        "name": "人工智能",
        "change_pct": -4.8
      },
      {
        "name": "游戏",
        "change_pct": -6.84
      },
      {
        "name": "独角兽",
        "change_pct": 0.85
      },
      {
        "name": "数字经济",
        "change_pct": -5.17
      },
      {
        "name": "腾讯概念股",
        "change_pct": -5.04
      },
      {
        "name": "传媒",
        "change_pct": -5.71
      },
      {
        "name": "快手概念股",
        "change_pct": -7.19
      },
      {
        "name": "元宇宙",
        "change_pct": -5.75
      },
      {
        "name": "虚拟数字人",
        "change_pct": -6.2
      },
      {
        "name": "东数西算/算力",
        "change_pct": -5.35
      },
      {
        "name": "web3.0",
        "change_pct": -6.55
      },
      {
        "name": "AIGC概念",
        "change_pct": -6.17
      },
      {
        "name": "数据要素",
        "change_pct": -5.8
      },
      {
        "name": "字节跳动概念股",
        "change_pct": -5.98
      },
      {
        "name": "AI营销",
        "change_pct": -6.81
      },
      {
        "name": "ChatGPT",
        "change_pct": -6.17
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.74
      },
      {
        "name": "AI大模型/智能体",
        "change_pct": -4.78
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.38
      },
      {
        "name": "多模态",
        "change_pct": -6.46
      },
      {
        "name": "AI视频",
        "change_pct": -7.24
      },
      {
        "name": "IP经济/谷子经济",
        "change_pct": -4.59
      },
      {
        "name": "小红书概念股",
        "change_pct": -6.82
      }
    ]
  },
  {
    "code": "002361",
    "name": "神剑股份",
    "hot_rank": 38,
    "hot_rank_chg": 17,
    "stock_cnt": 5797,
    "price": "9.65",
    "change": "-0.52",
    "market_id": "33",
    "circulate_market_value": "9177487500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "石墨烯",
        "change_pct": -3.24
      },
      {
        "name": "大飞机",
        "change_pct": -3.48
      },
      {
        "name": "北斗导航",
        "change_pct": -4.62
      },
      {
        "name": "高铁轨交",
        "change_pct": -3.26
      },
      {
        "name": "军民融合",
        "change_pct": -4.25
      },
      {
        "name": "磁悬浮",
        "change_pct": -3.11
      },
      {
        "name": "军工",
        "change_pct": -4.15
      },
      {
        "name": "碳纤维",
        "change_pct": -3.37
      },
      {
        "name": "无人机",
        "change_pct": -4.11
      },
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "3D打印",
        "change_pct": -3.59
      },
      {
        "name": "航天",
        "change_pct": -3.82
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.29
      },
      {
        "name": "国资入股",
        "change_pct": -1.27
      },
      {
        "name": "低空经济",
        "change_pct": -4.32
      },
      {
        "name": "海洋经济",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 40,
    "hot_rank_chg": 5,
    "stock_cnt": 5797,
    "price": "6.03",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "3748348000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "跨境电商",
        "change_pct": -3.24
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "冷链",
        "change_pct": -2.42
      },
      {
        "name": "汽车零部件",
        "change_pct": -4.02
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "白色家电",
        "change_pct": -2.75
      },
      {
        "name": "家电",
        "change_pct": -2.91
      },
      {
        "name": "拼多多概念股",
        "change_pct": -5.08
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      },
      {
        "name": "蜜雪冰城概念股",
        "change_pct": -2.42
      }
    ]
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 43,
    "hot_rank_chg": -25,
    "stock_cnt": 5797,
    "price": "8.75",
    "change": "-0.34",
    "market_id": "17",
    "circulate_market_value": "2359106900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.49
      },
      {
        "name": "高股息",
        "change_pct": 0.28
      },
      {
        "name": "银行",
        "change_pct": 0.77
      },
      {
        "name": "白马股",
        "change_pct": -0.33
      },
      {
        "name": "破净股",
        "change_pct": -1.22
      },
      {
        "name": "大金融",
        "change_pct": -0.6
      }
    ]
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 46,
    "hot_rank_chg": -14,
    "stock_cnt": 5797,
    "price": "2.04",
    "change": "-10.13",
    "market_id": "17",
    "circulate_market_value": "5839239400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "手游",
        "change_pct": -6.3
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "游戏",
        "change_pct": -6.84
      },
      {
        "name": "影视",
        "change_pct": -6.68
      },
      {
        "name": "低价股",
        "change_pct": -1.99
      },
      {
        "name": "国企改革",
        "change_pct": -2.22
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.38
      },
      {
        "name": "AI视频",
        "change_pct": -7.24
      }
    ]
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 47,
    "hot_rank_chg": 136,
    "stock_cnt": 5797,
    "price": "9.96",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "2833436800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "三季报增长",
    "xgb_concepts": [
      {
        "name": "密集调研",
        "change_pct": -2.36
      },
      {
        "name": "ST摘帽",
        "change_pct": -3.35
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "教育",
        "change_pct": -3.99
      },
      {
        "name": "阿里巴巴概念股",
        "change_pct": -5.0
      },
      {
        "name": "职业教育",
        "change_pct": -3.46
      },
      {
        "name": "在线教育",
        "change_pct": -3.32
      },
      {
        "name": "华为鸿蒙",
        "change_pct": -4.87
      },
      {
        "name": "华为产业链",
        "change_pct": -4.48
      },
      {
        "name": "短剧/互动影游",
        "change_pct": -6.38
      },
      {
        "name": "智谱AI",
        "change_pct": -5.83
      }
    ]
  },
  {
    "code": "600172",
    "name": "黄河旋风",
    "hot_rank": 50,
    "hot_rank_chg": -17,
    "stock_cnt": 5797,
    "price": "10.61",
    "change": "-7.74",
    "market_id": "17",
    "circulate_market_value": "13626196000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "工业互联网",
        "change_pct": -3.97
      },
      {
        "name": "培育钻石",
        "change_pct": -2.9
      },
      {
        "name": "金刚线",
        "change_pct": -4.08
      },
      {
        "name": "国资入股",
        "change_pct": -1.27
      },
      {
        "name": "深地经济",
        "change_pct": -3.05
      }
    ]
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 55,
    "hot_rank_chg": 84,
    "stock_cnt": 5797,
    "price": "10.25",
    "change": "5.89",
    "market_id": "17",
    "circulate_market_value": "4434904900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "股权转让",
        "change_pct": -3.44
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "光伏",
        "change_pct": -3.35
      },
      {
        "name": "无线耳机",
        "change_pct": -4.23
      },
      {
        "name": "华为产业链",
        "change_pct": -4.48
      },
      {
        "name": "光伏胶膜",
        "change_pct": -2.25
      }
    ]
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 59,
    "hot_rank_chg": -21,
    "stock_cnt": 5797,
    "price": "12.81",
    "change": "-7.11",
    "market_id": "17",
    "circulate_market_value": "26792655000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "长三角一体化",
        "change_pct": -1.73
      },
      {
        "name": "半导体",
        "change_pct": -5.14
      },
      {
        "name": "光伏",
        "change_pct": -3.35
      },
      {
        "name": "风电",
        "change_pct": -2.98
      },
      {
        "name": "江苏国企改革",
        "change_pct": -1.95
      },
      {
        "name": "国产芯片",
        "change_pct": -5.15
      },
      {
        "name": "BIPV概念",
        "change_pct": -3.0
      },
      {
        "name": "内存",
        "change_pct": -4.87
      },
      {
        "name": "国企改革",
        "change_pct": -2.22
      },
      {
        "name": "闪存",
        "change_pct": -5.21
      },
      {
        "name": "中芯国际概念股",
        "change_pct": -5.53
      }
    ]
  },
  {
    "code": "002565",
    "name": "顺灏股份",
    "hot_rank": 61,
    "hot_rank_chg": 23,
    "stock_cnt": 5797,
    "price": "8.18",
    "change": "0.49",
    "market_id": "33",
    "circulate_market_value": "8670433300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "工业大麻",
        "change_pct": -2.03
      },
      {
        "name": "电子烟",
        "change_pct": -4.27
      },
      {
        "name": "一带一路",
        "change_pct": -2.4
      },
      {
        "name": "造纸",
        "change_pct": -2.5
      },
      {
        "name": "包装印刷",
        "change_pct": -3.61
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.29
      },
      {
        "name": "太空算力",
        "change_pct": -2.35
      }
    ]
  },
  {
    "code": "603528",
    "name": "多伦科技",
    "hot_rank": 64,
    "hot_rank_chg": -16,
    "stock_cnt": 5797,
    "price": "7.18",
    "change": "-10.03",
    "market_id": "17",
    "circulate_market_value": "5068578300.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "车联网/车路云",
        "change_pct": -4.61
      },
      {
        "name": "国产软件",
        "change_pct": -5.64
      },
      {
        "name": "无人驾驶",
        "change_pct": -4.55
      },
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "人工智能",
        "change_pct": -4.8
      },
      {
        "name": "充电桩",
        "change_pct": -4.07
      },
      {
        "name": "北斗导航",
        "change_pct": -4.62
      },
      {
        "name": "智慧停车",
        "change_pct": -4.82
      },
      {
        "name": "物联网",
        "change_pct": -4.46
      },
      {
        "name": "教育",
        "change_pct": -3.99
      },
      {
        "name": "智慧城市",
        "change_pct": -4.92
      },
      {
        "name": "光伏",
        "change_pct": -3.35
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.32
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "机器视觉",
        "change_pct": -5.29
      },
      {
        "name": "智慧安防",
        "change_pct": -4.42
      },
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "国产芯片",
        "change_pct": -5.15
      },
      {
        "name": "华为昇腾",
        "change_pct": -5.63
      },
      {
        "name": "职业教育",
        "change_pct": -3.46
      },
      {
        "name": "在线教育",
        "change_pct": -3.32
      },
      {
        "name": "华为云·鲲鹏",
        "change_pct": -5.54
      },
      {
        "name": "华为产业链",
        "change_pct": -4.48
      },
      {
        "name": "汽车检测",
        "change_pct": -3.91
      }
    ]
  },
  {
    "code": "000547",
    "name": "航天发展",
    "hot_rank": 70,
    "hot_rank_chg": -4,
    "stock_cnt": 5797,
    "price": "12.26",
    "change": "-4.96",
    "market_id": "33",
    "circulate_market_value": "19482624000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "央企改革",
        "change_pct": -2.35
      },
      {
        "name": "5G",
        "change_pct": -5.1
      },
      {
        "name": "VR&AR",
        "change_pct": -5.27
      },
      {
        "name": "网络安全",
        "change_pct": -5.47
      },
      {
        "name": "军工集团",
        "change_pct": -3.97
      },
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.53
      },
      {
        "name": "大数据",
        "change_pct": -5.14
      },
      {
        "name": "军工",
        "change_pct": -4.15
      },
      {
        "name": "无人机",
        "change_pct": -4.11
      },
      {
        "name": "信创",
        "change_pct": -5.91
      },
      {
        "name": "航天",
        "change_pct": -3.82
      },
      {
        "name": "国企改革",
        "change_pct": -2.22
      },
      {
        "name": "智慧政务",
        "change_pct": -5.56
      },
      {
        "name": "卫星互联网",
        "change_pct": -4.29
      },
      {
        "name": "华为产业链",
        "change_pct": -4.48
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      },
      {
        "name": "低空经济",
        "change_pct": -4.32
      },
      {
        "name": "军工信息化",
        "change_pct": -5.1
      }
    ]
  },
  {
    "code": "002526",
    "name": "山东矿机",
    "hot_rank": 76,
    "hot_rank_chg": -19,
    "stock_cnt": 5797,
    "price": "2.95",
    "change": "-10.06",
    "market_id": "33",
    "circulate_market_value": "5225141600.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "强势人气股",
        "change_pct": -1.57
      },
      {
        "name": "机械",
        "change_pct": -2.01
      },
      {
        "name": "游戏",
        "change_pct": -6.84
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "无人机",
        "change_pct": -4.11
      },
      {
        "name": "低价股",
        "change_pct": -1.99
      },
      {
        "name": "低空经济",
        "change_pct": -4.32
      }
    ]
  },
  {
    "code": "300006",
    "name": "莱美药业",
    "hot_rank": 84,
    "hot_rank_chg": -45,
    "stock_cnt": 5797,
    "price": "9.93",
    "change": "-5.25",
    "market_id": "33",
    "circulate_market_value": "10484301500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "创新药",
        "change_pct": 0.02
      },
      {
        "name": "医疗器械",
        "change_pct": -1.68
      },
      {
        "name": "医药",
        "change_pct": -0.31
      },
      {
        "name": "疫苗",
        "change_pct": -0.08
      },
      {
        "name": "化学原料药",
        "change_pct": -0.63
      },
      {
        "name": "肝炎概念",
        "change_pct": -0.89
      },
      {
        "name": "干细胞",
        "change_pct": 0.5
      },
      {
        "name": "眼科",
        "change_pct": -1.56
      },
      {
        "name": "肿瘤疫苗",
        "change_pct": -0.86
      }
    ]
  },
  {
    "code": "603028",
    "name": "赛福天",
    "hot_rank": 87,
    "hot_rank_chg": -17,
    "stock_cnt": 5797,
    "price": "8.42",
    "change": "-10.04",
    "market_id": "17",
    "circulate_market_value": "2387619000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "电梯",
        "change_pct": -4.49
      },
      {
        "name": "光伏",
        "change_pct": -3.35
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "干细胞",
        "change_pct": 0.5
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      },
      {
        "name": "海洋经济",
        "change_pct": -2.5
      }
    ]
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 88,
    "hot_rank_chg": -23,
    "stock_cnt": 5797,
    "price": "6.35",
    "change": "-5.79",
    "market_id": "33",
    "circulate_market_value": "12160837100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "福建自贸/海西概念",
        "change_pct": -3.53
      },
      {
        "name": "林业",
        "change_pct": -4.27
      },
      {
        "name": "碳中和",
        "change_pct": -2.62
      },
      {
        "name": "自贸区",
        "change_pct": -2.08
      }
    ]
  },
  {
    "code": "002600",
    "name": "领益智造",
    "hot_rank": 93,
    "hot_rank_chg": 180,
    "stock_cnt": 5797,
    "price": "11.25",
    "change": "0.27",
    "market_id": "33",
    "circulate_market_value": "81525177000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "折叠屏",
        "change_pct": -4.46
      },
      {
        "name": "手机产业链",
        "change_pct": -4.29
      },
      {
        "name": "苹果产业链",
        "change_pct": -4.44
      },
      {
        "name": "无线充电",
        "change_pct": -3.61
      },
      {
        "name": "稀土磁材",
        "change_pct": -3.38
      },
      {
        "name": "5G",
        "change_pct": -5.1
      },
      {
        "name": "VR&AR",
        "change_pct": -5.27
      },
      {
        "name": "新能源汽车",
        "change_pct": -3.32
      },
      {
        "name": "机器人",
        "change_pct": -4.04
      },
      {
        "name": "智能制造",
        "change_pct": -3.88
      },
      {
        "name": "3D打印",
        "change_pct": -3.59
      },
      {
        "name": "小米概念股",
        "change_pct": -4.28
      },
      {
        "name": "理想汽车概念股",
        "change_pct": -4.6
      },
      {
        "name": "第三代半导体",
        "change_pct": -4.18
      },
      {
        "name": "激光雷达",
        "change_pct": -5.19
      },
      {
        "name": "减速器",
        "change_pct": -3.31
      },
      {
        "name": "无线耳机",
        "change_pct": -4.23
      },
      {
        "name": "氮化镓",
        "change_pct": -3.7
      },
      {
        "name": "AI PC",
        "change_pct": -4.96
      },
      {
        "name": "华为产业链",
        "change_pct": -4.48
      },
      {
        "name": "智能眼镜/MR头显",
        "change_pct": -4.74
      },
      {
        "name": "人形机器人",
        "change_pct": -4.2
      },
      {
        "name": "AI手机",
        "change_pct": -4.14
      },
      {
        "name": "液冷服务器",
        "change_pct": -4.51
      }
    ]
  },
  {
    "code": "601288",
    "name": "农业银行",
    "hot_rank": 98,
    "hot_rank_chg": -21,
    "stock_cnt": 5797,
    "price": "7.48",
    "change": "-1.06",
    "market_id": "17",
    "circulate_market_value": "2387946700000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": [
      {
        "name": "社保重仓",
        "change_pct": -1.49
      },
      {
        "name": "高股息",
        "change_pct": 0.28
      },
      {
        "name": "银行",
        "change_pct": 0.77
      },
      {
        "name": "破净股",
        "change_pct": -1.22
      },
      {
        "name": "大金融",
        "change_pct": -0.6
      }
    ]
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "000678", "name": "襄阳轴承", "hot_rank": 1, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "18.08", "change": "-3.57", "market_id": "33", "circulate_market_value": "8309781300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603278", "name": "大业股份", "hot_rank": 2, "hot_rank_chg": 12, "stock_cnt": 5797, "price": "19.52", "change": "9.17", "market_id": "17", "circulate_market_value": "6671143300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 3, "hot_rank_chg": 3, "stock_cnt": 5797, "price": "196.00", "change": "-14.19", "market_id": "33", "circulate_market_value": "245925850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5797, "price": "14.72", "change": "8.71", "market_id": "33", "circulate_market_value": "8338560400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 5, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "647.05", "change": "-2.32", "market_id": "17", "circulate_market_value": "19468259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": -2, "stock_cnt": 5797, "price": "553.00", "change": "-4.99", "market_id": "33", "circulate_market_value": "613795160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 7, "hot_rank_chg": 42, "stock_cnt": 5797, "price": "2.83", "change": "10.12", "market_id": "33", "circulate_market_value": "4474148700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "“羊”字辈", "xgb_concepts": [{"name": "精准医疗", "change_pct": -0.97}, {"name": "体外诊断", "change_pct": -0.88}, {"name": "医疗器械", "change_pct": -1.68}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "基因测序", "change_pct": -1.74}, {"name": "预制菜", "change_pct": -1.29}, {"name": "低价股", "change_pct": -1.99}, {"name": "水产养殖", "change_pct": -1.15}, {"name": "新冠病毒防治", "change_pct": -1.58}, {"name": "海洋经济", "change_pct": -2.5}]}, {"code": "600825", "name": "新华传媒", "hot_rank": 8, "hot_rank_chg": 0, "stock_cnt": 5797, "price": "13.36", "change": "-9.97", "market_id": "17", "circulate_market_value": "13959702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002747", "name": "埃斯顿", "hot_rank": 9, "hot_rank_chg": 50, "stock_cnt": 5797, "price": "29.24", "change": "2.96", "market_id": "33", "circulate_market_value": "22934276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002242", "name": "九阳股份", "hot_rank": 10, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "22.14", "change": "-3.74", "market_id": "33", "circulate_market_value": "16865491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 11, "hot_rank_chg": 8, "stock_cnt": 5797, "price": "55.91", "change": "0.02", "market_id": "17", "circulate_market_value": "66112968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 12, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "7.92", "change": "-3.77", "market_id": "33", "circulate_market_value": "4752924500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "体育产业", "change_pct": -3.91}, {"name": "边缘计算", "change_pct": -5.33}, {"name": "核电", "change_pct": -3.52}, {"name": "海工装备", "change_pct": -3.12}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "云计算数据中心", "change_pct": -4.83}, {"name": "冷链", "change_pct": -2.42}, {"name": "地热", "change_pct": -2.41}, {"name": "储能", "change_pct": -3.25}, {"name": "碳中和", "change_pct": -2.62}, {"name": "独角兽", "change_pct": 0.85}, {"name": "冰雪产业", "change_pct": -3.01}, {"name": "汽车热管理", "change_pct": -3.36}, {"name": "热泵", "change_pct": -4.17}, {"name": "液冷服务器", "change_pct": -4.51}, {"name": "蜜雪冰城概念股", "change_pct": -2.42}, {"name": "海洋经济", "change_pct": -2.5}]}, {"code": "600261", "name": "阳光照明", "hot_rank": 13, "hot_rank_chg": 83, "stock_cnt": 5797, "price": "4.09", "change": "9.95", "market_id": "17", "circulate_market_value": "5460366600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.57}, {"name": "LED", "change_pct": -3.75}, {"name": "卫星互联网", "change_pct": -4.29}]}, {"code": "002149", "name": "西部材料", "hot_rank": 14, "hot_rank_chg": 48, "stock_cnt": 5797, "price": "33.57", "change": "3.90", "market_id": "33", "circulate_market_value": "16386830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 15, "hot_rank_chg": 15, "stock_cnt": 5797, "price": "5.91", "change": "10.06", "market_id": "33", "circulate_market_value": "4521981700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "脑机接口", "xgb_concepts": [{"name": "中药", "change_pct": -0.03}, {"name": "优化生育（三孩）", "change_pct": -1.71}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "医药商业", "change_pct": 0.53}, {"name": "保健品", "change_pct": 0.1}, {"name": "民营医院", "change_pct": -0.31}, {"name": "医药", "change_pct": -0.31}, {"name": "食品", "change_pct": -0.3}, {"name": "辅助生殖", "change_pct": -0.85}, {"name": "口腔", "change_pct": -0.94}, {"name": "医美", "change_pct": -0.03}, {"name": "新冠病毒防治", "change_pct": -1.58}]}, {"code": "300394", "name": "天孚通信", "hot_rank": 16, "hot_rank_chg": -13, "stock_cnt": 5797, "price": "148.00", "change": "-8.42", "market_id": "33", "circulate_market_value": "161081430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002636", "name": "金安国纪", "hot_rank": 17, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "63.68", "change": "10.00", "market_id": "33", "circulate_market_value": "46183064000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "三季报高增"}, {"code": "600838", "name": "上海九百", "hot_rank": 18, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "12.27", "change": "-9.98", "market_id": "17", "circulate_market_value": "4918821900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "上海国企改革", "change_pct": -2.11}, {"name": "新零售", "change_pct": -2.44}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "物业管理", "change_pct": -2.6}, {"name": "国企改革", "change_pct": -2.22}, {"name": "地摊经济", "change_pct": -3.33}]}, {"code": "002185", "name": "华天科技", "hot_rank": 19, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "15.00", "change": "-1.12", "market_id": "33", "circulate_market_value": "0.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002708", "name": "光洋股份", "hot_rank": 20, "hot_rank_chg": -15, "stock_cnt": 5797, "price": "19.02", "change": "-8.69", "market_id": "33", "circulate_market_value": "9693169300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002249", "name": "大洋电机", "hot_rank": 21, "hot_rank_chg": -9, "stock_cnt": 5797, "price": "7.37", "change": "-10.01", "market_id": "33", "circulate_market_value": "13799822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "充电桩", "change_pct": -4.07}, {"name": "云计算数据中心", "change_pct": -4.83}, {"name": "军民融合", "change_pct": -4.25}, {"name": "氢能源/燃料电池", "change_pct": -2.93}, {"name": "风电", "change_pct": -2.98}, {"name": "军工", "change_pct": -4.15}, {"name": "新能源汽车", "change_pct": -3.32}, {"name": "新能源车零部件", "change_pct": -4.09}, {"name": "轮边电机", "change_pct": -5.01}, {"name": "人形机器人", "change_pct": -4.2}]}, {"code": "002384", "name": "东山精密", "hot_rank": 22, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "86.06", "change": "-8.58", "market_id": "33", "circulate_market_value": "119306847000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603703", "name": "盛洋科技", "hot_rank": 23, "hot_rank_chg": 90, "stock_cnt": 5797, "price": "11.95", "change": "10.04", "market_id": "17", "circulate_market_value": "4959036300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "卫星通信终端", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.61}, {"name": "5G", "change_pct": -5.1}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "云计算数据中心", "change_pct": -4.83}, {"name": "LED", "change_pct": -3.75}, {"name": "卫星互联网", "change_pct": -4.29}, {"name": "铜缆高速连接器", "change_pct": -4.95}]}, {"code": "000995", "name": "皇台酒业", "hot_rank": 24, "hot_rank_chg": 124, "stock_cnt": 5797, "price": "14.18", "change": "10.01", "market_id": "33", "circulate_market_value": "2515645400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "001219", "name": "青岛食品", "hot_rank": 25, "hot_rank_chg": 21, "stock_cnt": 5797, "price": "19.94", "change": "9.98", "market_id": "33", "circulate_market_value": "3792538200.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "青啤拟入主"}, {"code": "300476", "name": "胜宏科技", "hot_rank": 26, "hot_rank_chg": 11, "stock_cnt": 5797, "price": "139.04", "change": "-13.31", "market_id": "33", "circulate_market_value": "120296705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603131", "name": "上海沪工", "hot_rank": 27, "hot_rank_chg": 26, "stock_cnt": 5797, "price": "17.55", "change": "10.03", "market_id": "17", "circulate_market_value": "5912721700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "三季报扭亏"}, {"code": "002696", "name": "百洋股份", "hot_rank": 28, "hot_rank_chg": -11, "stock_cnt": 5797, "price": "11.12", "change": "-9.96", "market_id": "33", "circulate_market_value": "3716959200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "动物保健", "change_pct": -1.1}, {"name": "饲料", "change_pct": -1.62}, {"name": "一带一路", "change_pct": -2.4}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "保健品", "change_pct": 0.1}, {"name": "山东国企改革", "change_pct": -2.55}, {"name": "污水处理", "change_pct": -2.85}, {"name": "环保", "change_pct": -2.86}, {"name": "食品", "change_pct": -0.3}, {"name": "预制菜", "change_pct": -1.29}, {"name": "国企改革", "change_pct": -2.22}, {"name": "水产养殖", "change_pct": -1.15}, {"name": "广西概念", "change_pct": -2.12}]}, {"code": "603986", "name": "兆易创新", "hot_rank": 29, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "257.80", "change": "-6.59", "market_id": "17", "circulate_market_value": "172911180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002031", "name": "巨轮智能", "hot_rank": 30, "hot_rank_chg": 217, "stock_cnt": 5797, "price": "5.22", "change": "2.96", "market_id": "33", "circulate_market_value": "11480806200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业自动化", "change_pct": -3.42}, {"name": "轮胎", "change_pct": -1.19}, {"name": "冷链", "change_pct": -2.42}, {"name": "机器人", "change_pct": -4.04}, {"name": "智能制造", "change_pct": -3.88}, {"name": "工业母机", "change_pct": -3.23}, {"name": "减速器", "change_pct": -3.31}, {"name": "头盔", "change_pct": -3.25}, {"name": "人形机器人", "change_pct": -4.2}]}, {"code": "688825", "name": "长鑫科技", "hot_rank": 31, "hot_rank_chg": -20, "stock_cnt": 5797, "price": "41.80", "change": "-2.50", "market_id": "17", "circulate_market_value": "188227030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601086", "name": "国芳集团", "hot_rank": 32, "hot_rank_chg": -7, "stock_cnt": 5797, "price": "12.24", "change": "-10.00", "market_id": "17", "circulate_market_value": "8151840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "新零售", "change_pct": -2.44}]}, {"code": "000559", "name": "万向钱潮", "hot_rank": 33, "hot_rank_chg": -13, "stock_cnt": 5797, "price": "12.60", "change": "-3.23", "market_id": "33", "circulate_market_value": "41921196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.36}, {"name": "半导体", "change_pct": -5.14}, {"name": "锂电池", "change_pct": -2.72}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "汽车零部件", "change_pct": -4.02}, {"name": "新能源汽车", "change_pct": -3.32}, {"name": "机器人", "change_pct": -4.04}, {"name": "智能制造", "change_pct": -3.88}, {"name": "工业互联网", "change_pct": -3.97}, {"name": "新能源车零部件", "change_pct": -4.09}, {"name": "固态电池", "change_pct": -2.18}, {"name": "MCU概念", "change_pct": -4.18}, {"name": "人形机器人", "change_pct": -4.2}, {"name": "小米汽车", "change_pct": -3.63}, {"name": "低空经济", "change_pct": -4.32}]}, {"code": "600487", "name": "亨通光电", "hot_rank": 34, "hot_rank_chg": -8, "stock_cnt": 5797, "price": "42.42", "change": "-4.89", "market_id": "17", "circulate_market_value": "104083674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 35, "hot_rank_chg": -6, "stock_cnt": 5797, "price": "8.07", "change": "-10.03", "market_id": "33", "circulate_market_value": "3822599900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -6.3}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "VR&AR", "change_pct": -5.27}, {"name": "游戏", "change_pct": -6.84}, {"name": "影视", "change_pct": -6.68}, {"name": "直播/短视频", "change_pct": -5.49}, {"name": "动漫", "change_pct": -7.81}, {"name": "腾讯概念股", "change_pct": -5.04}, {"name": "传媒", "change_pct": -5.71}, {"name": "元宇宙", "change_pct": -5.75}, {"name": "短剧/互动影游", "change_pct": -6.38}, {"name": "IP经济/谷子经济", "change_pct": -4.59}]}, {"code": "002354", "name": "天娱数科", "hot_rank": 36, "hot_rank_chg": -13, "stock_cnt": 5797, "price": "7.52", "change": "-10.05", "market_id": "33", "circulate_market_value": "12234993200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.24}, {"name": "电竞", "change_pct": -4.62}, {"name": "手游", "change_pct": -6.3}, {"name": "人工智能", "change_pct": -4.8}, {"name": "游戏", "change_pct": -6.84}, {"name": "独角兽", "change_pct": 0.85}, {"name": "数字经济", "change_pct": -5.17}, {"name": "腾讯概念股", "change_pct": -5.04}, {"name": "传媒", "change_pct": -5.71}, {"name": "快手概念股", "change_pct": -7.19}, {"name": "元宇宙", "change_pct": -5.75}, {"name": "虚拟数字人", "change_pct": -6.2}, {"name": "东数西算/算力", "change_pct": -5.35}, {"name": "web3.0", "change_pct": -6.55}, {"name": "AIGC概念", "change_pct": -6.17}, {"name": "数据要素", "change_pct": -5.8}, {"name": "字节跳动概念股", "change_pct": -5.98}, {"name": "AI营销", "change_pct": -6.81}, {"name": "ChatGPT", "change_pct": -6.17}, {"name": "智能眼镜/MR头显", "change_pct": -4.74}, {"name": "AI大模型/智能体", "change_pct": -4.78}, {"name": "人形机器人", "change_pct": -4.2}, {"name": "短剧/互动影游", "change_pct": -6.38}, {"name": "多模态", "change_pct": -6.46}, {"name": "AI视频", "change_pct": -7.24}, {"name": "IP经济/谷子经济", "change_pct": -4.59}, {"name": "小红书概念股", "change_pct": -6.82}]}, {"code": "001309", "name": "德明利", "hot_rank": 37, "hot_rank_chg": -3, "stock_cnt": 5797, "price": "209.71", "change": "-2.64", "market_id": "33", "circulate_market_value": "48740397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002361", "name": "神剑股份", "hot_rank": 38, "hot_rank_chg": 17, "stock_cnt": 5797, "price": "9.65", "change": "-0.52", "market_id": "33", "circulate_market_value": "9177487500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "石墨烯", "change_pct": -3.24}, {"name": "大飞机", "change_pct": -3.48}, {"name": "北斗导航", "change_pct": -4.62}, {"name": "高铁轨交", "change_pct": -3.26}, {"name": "军民融合", "change_pct": -4.25}, {"name": "磁悬浮", "change_pct": -3.11}, {"name": "军工", "change_pct": -4.15}, {"name": "碳纤维", "change_pct": -3.37}, {"name": "无人机", "change_pct": -4.11}, {"name": "智能制造", "change_pct": -3.88}, {"name": "3D打印", "change_pct": -3.59}, {"name": "航天", "change_pct": -3.82}, {"name": "卫星互联网", "change_pct": -4.29}, {"name": "国资入股", "change_pct": -1.27}, {"name": "低空经济", "change_pct": -4.32}, {"name": "海洋经济", "change_pct": -2.5}]}, {"code": "301079", "name": "邵阳液压", "hot_rank": 39, "hot_rank_chg": 37, "stock_cnt": 5797, "price": "36.79", "change": "8.21", "market_id": "33", "circulate_market_value": "2830380200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601956", "name": "东贝集团", "hot_rank": 40, "hot_rank_chg": 5, "stock_cnt": 5797, "price": "6.03", "change": "-10.00", "market_id": "17", "circulate_market_value": "3748348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "跨境电商", "change_pct": -3.24}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "冷链", "change_pct": -2.42}, {"name": "汽车零部件", "change_pct": -4.02}, {"name": "机器人", "change_pct": -4.04}, {"name": "白色家电", "change_pct": -2.75}, {"name": "家电", "change_pct": -2.91}, {"name": "拼多多概念股", "change_pct": -5.08}, {"name": "人形机器人", "change_pct": -4.2}, {"name": "蜜雪冰城概念股", "change_pct": -2.42}]}, {"code": "301666", "name": "大普微", "hot_rank": 41, "hot_rank_chg": 81, "stock_cnt": 5797, "price": "316.76", "change": "3.18", "market_id": "33", "circulate_market_value": "11054071600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 42, "hot_rank_chg": -18, "stock_cnt": 5797, "price": "232.92", "change": "1.68", "market_id": "33", "circulate_market_value": "992382930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 43, "hot_rank_chg": -25, "stock_cnt": 5797, "price": "8.75", "change": "-0.34", "market_id": "17", "circulate_market_value": "2359106900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.49}, {"name": "高股息", "change_pct": 0.28}, {"name": "银行", "change_pct": 0.77}, {"name": "白马股", "change_pct": -0.33}, {"name": "破净股", "change_pct": -1.22}, {"name": "大金融", "change_pct": -0.6}]}, {"code": "002009", "name": "天奇股份", "hot_rank": 44, "hot_rank_chg": 248, "stock_cnt": 5797, "price": "17.23", "change": "3.79", "market_id": "33", "circulate_market_value": "6103405600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 45, "hot_rank_chg": 44, "stock_cnt": 5797, "price": "17.28", "change": "0.99", "market_id": "17", "circulate_market_value": "3648899800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600715", "name": "文投控股", "hot_rank": 46, "hot_rank_chg": -14, "stock_cnt": 5797, "price": "2.04", "change": "-10.13", "market_id": "17", "circulate_market_value": "5839239400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "手游", "change_pct": -6.3}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "游戏", "change_pct": -6.84}, {"name": "影视", "change_pct": -6.68}, {"name": "低价股", "change_pct": -1.99}, {"name": "国企改革", "change_pct": -2.22}, {"name": "短剧/互动影游", "change_pct": -6.38}, {"name": "AI视频", "change_pct": -7.24}]}, {"code": "003032", "name": "传智教育", "hot_rank": 47, "hot_rank_chg": 136, "stock_cnt": 5797, "price": "9.96", "change": "10.05", "market_id": "33", "circulate_market_value": "2833436800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长", "xgb_concepts": [{"name": "密集调研", "change_pct": -2.36}, {"name": "ST摘帽", "change_pct": -3.35}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "教育", "change_pct": -3.99}, {"name": "阿里巴巴概念股", "change_pct": -5.0}, {"name": "职业教育", "change_pct": -3.46}, {"name": "在线教育", "change_pct": -3.32}, {"name": "华为鸿蒙", "change_pct": -4.87}, {"name": "华为产业链", "change_pct": -4.48}, {"name": "短剧/互动影游", "change_pct": -6.38}, {"name": "智谱AI", "change_pct": -5.83}]}, {"code": "002639", "name": "雪人集团", "hot_rank": 48, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "13.82", "change": "-1.78", "market_id": "33", "circulate_market_value": "9122950900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600592", "name": "龙溪股份", "hot_rank": 49, "hot_rank_chg": 82, "stock_cnt": 5797, "price": "15.68", "change": "-9.94", "market_id": "17", "circulate_market_value": "6265000000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600172", "name": "黄河旋风", "hot_rank": 50, "hot_rank_chg": -17, "stock_cnt": 5797, "price": "10.61", "change": "-7.74", "market_id": "17", "circulate_market_value": "13626196000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "智能制造", "change_pct": -3.88}, {"name": "工业互联网", "change_pct": -3.97}, {"name": "培育钻石", "change_pct": -2.9}, {"name": "金刚线", "change_pct": -4.08}, {"name": "国资入股", "change_pct": -1.27}, {"name": "深地经济", "change_pct": -3.05}]}, {"code": "001318", "name": "阳光乳业", "hot_rank": 51, "hot_rank_chg": 49, "stock_cnt": 5797, "price": "14.43", "change": "6.18", "market_id": "33", "circulate_market_value": "4078783800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 52, "hot_rank_chg": 71, "stock_cnt": 5797, "price": "17.49", "change": "4.23", "market_id": "33", "circulate_market_value": "7911405600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 53, "hot_rank_chg": -2, "stock_cnt": 5797, "price": "74.70", "change": "3.35", "market_id": "33", "circulate_market_value": "289949050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601138", "name": "工业富联", "hot_rank": 54, "hot_rank_chg": -14, "stock_cnt": 5797, "price": "45.00", "change": "-0.49", "market_id": "17", "circulate_market_value": "892984150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 55, "hot_rank_chg": 84, "stock_cnt": 5797, "price": "10.25", "change": "5.89", "market_id": "17", "circulate_market_value": "4434904900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "股权转让", "change_pct": -3.44}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "光伏", "change_pct": -3.35}, {"name": "无线耳机", "change_pct": -4.23}, {"name": "华为产业链", "change_pct": -4.48}, {"name": "光伏胶膜", "change_pct": -2.25}]}, {"code": "603667", "name": "五洲新春", "hot_rank": 56, "hot_rank_chg": -29, "stock_cnt": 5797, "price": "49.32", "change": "-7.14", "market_id": "17", "circulate_market_value": "18897053000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 58, "hot_rank_chg": -15, "stock_cnt": 5797, "price": "87.34", "change": "-7.19", "market_id": "33", "circulate_market_value": "168307980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600667", "name": "太极实业", "hot_rank": 59, "hot_rank_chg": -21, "stock_cnt": 5797, "price": "12.81", "change": "-7.11", "market_id": "17", "circulate_market_value": "26792655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "长三角一体化", "change_pct": -1.73}, {"name": "半导体", "change_pct": -5.14}, {"name": "光伏", "change_pct": -3.35}, {"name": "风电", "change_pct": -2.98}, {"name": "江苏国企改革", "change_pct": -1.95}, {"name": "国产芯片", "change_pct": -5.15}, {"name": "BIPV概念", "change_pct": -3.0}, {"name": "内存", "change_pct": -4.87}, {"name": "国企改革", "change_pct": -2.22}, {"name": "闪存", "change_pct": -5.21}, {"name": "中芯国际概念股", "change_pct": -5.53}]}, {"code": "600501", "name": "航天晨光", "hot_rank": 60, "hot_rank_chg": 92, "stock_cnt": 5797, "price": "16.30", "change": "-3.49", "market_id": "17", "circulate_market_value": "6973534500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002565", "name": "顺灏股份", "hot_rank": 61, "hot_rank_chg": 23, "stock_cnt": 5797, "price": "8.18", "change": "0.49", "market_id": "33", "circulate_market_value": "8670433300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "工业大麻", "change_pct": -2.03}, {"name": "电子烟", "change_pct": -4.27}, {"name": "一带一路", "change_pct": -2.4}, {"name": "造纸", "change_pct": -2.5}, {"name": "包装印刷", "change_pct": -3.61}, {"name": "卫星互联网", "change_pct": -4.29}, {"name": "太空算力", "change_pct": -2.35}]}, {"code": "002865", "name": "钧达股份", "hot_rank": 62, "hot_rank_chg": 50, "stock_cnt": 5797, "price": "39.74", "change": "2.90", "market_id": "33", "circulate_market_value": "9093364500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 63, "hot_rank_chg": 575, "stock_cnt": 5797, "price": "56.24", "change": "9.99", "market_id": "33", "circulate_market_value": "24603775000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增"}, {"code": "603528", "name": "多伦科技", "hot_rank": 64, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "7.18", "change": "-10.03", "market_id": "17", "circulate_market_value": "5068578300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "车联网/车路云", "change_pct": -4.61}, {"name": "国产软件", "change_pct": -5.64}, {"name": "无人驾驶", "change_pct": -4.55}, {"name": "强势人气股", "change_pct": -1.57}, {"name": "人工智能", "change_pct": -4.8}, {"name": "充电桩", "change_pct": -4.07}, {"name": "北斗导航", "change_pct": -4.62}, {"name": "智慧停车", "change_pct": -4.82}, {"name": "物联网", "change_pct": -4.46}, {"name": "教育", "change_pct": -3.99}, {"name": "智慧城市", "change_pct": -4.92}, {"name": "光伏", "change_pct": -3.35}, {"name": "新能源汽车", "change_pct": -3.32}, {"name": "机器人", "change_pct": -4.04}, {"name": "机器视觉", "change_pct": -5.29}, {"name": "智慧安防", "change_pct": -4.42}, {"name": "智能制造", "change_pct": -3.88}, {"name": "国产芯片", "change_pct": -5.15}, {"name": "华为昇腾", "change_pct": -5.63}, {"name": "职业教育", "change_pct": -3.46}, {"name": "在线教育", "change_pct": -3.32}, {"name": "华为云·鲲鹏", "change_pct": -5.54}, {"name": "华为产业链", "change_pct": -4.48}, {"name": "汽车检测", "change_pct": -3.91}]}, {"code": "301313", "name": "凡拓数创", "hot_rank": 65, "hot_rank_chg": -34, "stock_cnt": 5797, "price": "59.60", "change": "-8.05", "market_id": "33", "circulate_market_value": "4688971300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605179", "name": "一鸣食品", "hot_rank": 66, "hot_rank_chg": -16, "stock_cnt": 5797, "price": "22.36", "change": "-5.93", "market_id": "17", "circulate_market_value": "8966360000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 67, "hot_rank_chg": -13, "stock_cnt": 5797, "price": "49.00", "change": "-5.53", "market_id": "17", "circulate_market_value": "87681314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600519", "name": "贵州茅台", "hot_rank": 68, "hot_rank_chg": -5, "stock_cnt": 5797, "price": "1392.05", "change": "2.81", "market_id": "17", "circulate_market_value": "1740176100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600522", "name": "中天科技", "hot_rank": 69, "hot_rank_chg": 26, "stock_cnt": 5797, "price": "23.17", "change": "-7.95", "market_id": "17", "circulate_market_value": "79078043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000547", "name": "航天发展", "hot_rank": 70, "hot_rank_chg": -4, "stock_cnt": 5797, "price": "12.26", "change": "-4.96", "market_id": "33", "circulate_market_value": "19482624000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "央企改革", "change_pct": -2.35}, {"name": "5G", "change_pct": -5.1}, {"name": "VR&AR", "change_pct": -5.27}, {"name": "网络安全", "change_pct": -5.47}, {"name": "军工集团", "change_pct": -3.97}, {"name": "福建自贸/海西概念", "change_pct": -3.53}, {"name": "大数据", "change_pct": -5.14}, {"name": "军工", "change_pct": -4.15}, {"name": "无人机", "change_pct": -4.11}, {"name": "信创", "change_pct": -5.91}, {"name": "航天", "change_pct": -3.82}, {"name": "国企改革", "change_pct": -2.22}, {"name": "智慧政务", "change_pct": -5.56}, {"name": "卫星互联网", "change_pct": -4.29}, {"name": "华为产业链", "change_pct": -4.48}, {"name": "自贸区", "change_pct": -2.08}, {"name": "低空经济", "change_pct": -4.32}, {"name": "军工信息化", "change_pct": -5.1}]}, {"code": "600183", "name": "生益科技", "hot_rank": 71, "hot_rank_chg": 1, "stock_cnt": 5797, "price": "87.00", "change": "-7.57", "market_id": "17", "circulate_market_value": "209822150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603186", "name": "华正新材", "hot_rank": 72, "hot_rank_chg": 7, "stock_cnt": 5797, "price": "147.29", "change": "-0.05", "market_id": "17", "circulate_market_value": "23093675000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002050", "name": "三花智控", "hot_rank": 73, "hot_rank_chg": 8, "stock_cnt": 5797, "price": "33.24", "change": "-3.65", "market_id": "33", "circulate_market_value": "122690336000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300223", "name": "君正股份", "hot_rank": 74, "hot_rank_chg": -32, "stock_cnt": 5797, "price": "109.61", "change": "-1.83", "market_id": "33", "circulate_market_value": "46351161000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 75, "hot_rank_chg": 3, "stock_cnt": 5797, "price": "27.68", "change": "-5.59", "market_id": "17", "circulate_market_value": "109933529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002526", "name": "山东矿机", "hot_rank": 76, "hot_rank_chg": -19, "stock_cnt": 5797, "price": "2.95", "change": "-10.06", "market_id": "33", "circulate_market_value": "5225141600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "强势人气股", "change_pct": -1.57}, {"name": "机械", "change_pct": -2.01}, {"name": "游戏", "change_pct": -6.84}, {"name": "机器人", "change_pct": -4.04}, {"name": "无人机", "change_pct": -4.11}, {"name": "低价股", "change_pct": -1.99}, {"name": "低空经济", "change_pct": -4.32}]}, {"code": "000568", "name": "泸州老窖", "hot_rank": 77, "hot_rank_chg": 301, "stock_cnt": 5797, "price": "77.07", "change": "10.01", "market_id": "33", "circulate_market_value": "113382381000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "业绩环增"}, {"code": "601857", "name": "中国石油", "hot_rank": 78, "hot_rank_chg": -34, "stock_cnt": 5797, "price": "13.84", "change": "1.10", "market_id": "17", "circulate_market_value": "2241001600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605598", "name": "上海港湾", "hot_rank": 79, "hot_rank_chg": 364, "stock_cnt": 5797, "price": "26.14", "change": "4.98", "market_id": "17", "circulate_market_value": "6296306500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 80, "hot_rank_chg": -45, "stock_cnt": 5797, "price": "52.45", "change": "-9.69", "market_id": "33", "circulate_market_value": "4484607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605488", "name": "福莱新材", "hot_rank": 81, "hot_rank_chg": -21, "stock_cnt": 5797, "price": "46.80", "change": "-1.78", "market_id": "17", "circulate_market_value": "13968801000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603198", "name": "迎驾贡酒", "hot_rank": 82, "hot_rank_chg": 976, "stock_cnt": 5797, "price": "44.47", "change": "9.99", "market_id": "17", "circulate_market_value": "35576000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "000636", "name": "风华高科", "hot_rank": 83, "hot_rank_chg": 32, "stock_cnt": 5797, "price": "32.26", "change": "-7.22", "market_id": "33", "circulate_market_value": "37018026000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300006", "name": "莱美药业", "hot_rank": 84, "hot_rank_chg": -45, "stock_cnt": 5797, "price": "9.93", "change": "-5.25", "market_id": "33", "circulate_market_value": "10484301500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "创新药", "change_pct": 0.02}, {"name": "医疗器械", "change_pct": -1.68}, {"name": "医药", "change_pct": -0.31}, {"name": "疫苗", "change_pct": -0.08}, {"name": "化学原料药", "change_pct": -0.63}, {"name": "肝炎概念", "change_pct": -0.89}, {"name": "干细胞", "change_pct": 0.5}, {"name": "眼科", "change_pct": -1.56}, {"name": "肿瘤疫苗", "change_pct": -0.86}]}, {"code": "000596", "name": "古井贡酒", "hot_rank": 85, "hot_rank_chg": 542, "stock_cnt": 5797, "price": "95.70", "change": "10.00", "market_id": "33", "circulate_market_value": "39103020000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中期分红"}, {"code": "603618", "name": "杭电股份", "hot_rank": 86, "hot_rank_chg": 1, "stock_cnt": 5797, "price": "22.24", "change": "-9.00", "market_id": "17", "circulate_market_value": "15376194000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603028", "name": "赛福天", "hot_rank": 87, "hot_rank_chg": -17, "stock_cnt": 5797, "price": "8.42", "change": "-10.04", "market_id": "17", "circulate_market_value": "2387619000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "电梯", "change_pct": -4.49}, {"name": "光伏", "change_pct": -3.35}, {"name": "机器人", "change_pct": -4.04}, {"name": "干细胞", "change_pct": 0.5}, {"name": "人形机器人", "change_pct": -4.2}, {"name": "海洋经济", "change_pct": -2.5}]}, {"code": "000592", "name": "平潭发展", "hot_rank": 88, "hot_rank_chg": -23, "stock_cnt": 5797, "price": "6.35", "change": "-5.79", "market_id": "33", "circulate_market_value": "12160837100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "福建自贸/海西概念", "change_pct": -3.53}, {"name": "林业", "change_pct": -4.27}, {"name": "碳中和", "change_pct": -2.62}, {"name": "自贸区", "change_pct": -2.08}]}, {"code": "600206", "name": "有研新材", "hot_rank": 89, "hot_rank_chg": -1, "stock_cnt": 5797, "price": "31.92", "change": "-5.06", "market_id": "17", "circulate_market_value": "27021982000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002164", "name": "宁波东力", "hot_rank": 90, "hot_rank_chg": -49, "stock_cnt": 5797, "price": "19.03", "change": "5.78", "market_id": "33", "circulate_market_value": "9130121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001287", "name": "中电港", "hot_rank": 91, "hot_rank_chg": 865, "stock_cnt": 5797, "price": "20.24", "change": "10.00", "market_id": "33", "circulate_market_value": "15380378000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增"}, {"code": "600506", "name": "统一股份", "hot_rank": 92, "hot_rank_chg": 76, "stock_cnt": 5797, "price": "17.27", "change": "-0.58", "market_id": "17", "circulate_market_value": "4311017100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002600", "name": "领益智造", "hot_rank": 93, "hot_rank_chg": 180, "stock_cnt": 5797, "price": "11.25", "change": "0.27", "market_id": "33", "circulate_market_value": "81525177000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "折叠屏", "change_pct": -4.46}, {"name": "手机产业链", "change_pct": -4.29}, {"name": "苹果产业链", "change_pct": -4.44}, {"name": "无线充电", "change_pct": -3.61}, {"name": "稀土磁材", "change_pct": -3.38}, {"name": "5G", "change_pct": -5.1}, {"name": "VR&AR", "change_pct": -5.27}, {"name": "新能源汽车", "change_pct": -3.32}, {"name": "机器人", "change_pct": -4.04}, {"name": "智能制造", "change_pct": -3.88}, {"name": "3D打印", "change_pct": -3.59}, {"name": "小米概念股", "change_pct": -4.28}, {"name": "理想汽车概念股", "change_pct": -4.6}, {"name": "第三代半导体", "change_pct": -4.18}, {"name": "激光雷达", "change_pct": -5.19}, {"name": "减速器", "change_pct": -3.31}, {"name": "无线耳机", "change_pct": -4.23}, {"name": "氮化镓", "change_pct": -3.7}, {"name": "AI PC", "change_pct": -4.96}, {"name": "华为产业链", "change_pct": -4.48}, {"name": "智能眼镜/MR头显", "change_pct": -4.74}, {"name": "人形机器人", "change_pct": -4.2}, {"name": "AI手机", "change_pct": -4.14}, {"name": "液冷服务器", "change_pct": -4.51}]}, {"code": "601919", "name": "中远海控", "hot_rank": 94, "hot_rank_chg": 304, "stock_cnt": 5797, "price": "17.84", "change": "7.02", "market_id": "17", "circulate_market_value": "223120220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301502", "name": "华阳智能", "hot_rank": 95, "hot_rank_chg": 136, "stock_cnt": 5797, "price": "67.00", "change": "-0.90", "market_id": "33", "circulate_market_value": "1585941900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603002", "name": "宏昌电子", "hot_rank": 96, "hot_rank_chg": 421, "stock_cnt": 5797, "price": "13.76", "change": "7.33", "market_id": "17", "circulate_market_value": "15604920000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600869", "name": "远东股份", "hot_rank": 97, "hot_rank_chg": 12, "stock_cnt": 5797, "price": "13.57", "change": "-4.91", "market_id": "17", "circulate_market_value": "30116617000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601288", "name": "农业银行", "hot_rank": 98, "hot_rank_chg": -21, "stock_cnt": 5797, "price": "7.48", "change": "-1.06", "market_id": "17", "circulate_market_value": "2387946700000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": [{"name": "社保重仓", "change_pct": -1.49}, {"name": "高股息", "change_pct": 0.28}, {"name": "银行", "change_pct": 0.77}, {"name": "破净股", "change_pct": -1.22}, {"name": "大金融", "change_pct": -0.6}]}, {"code": "002428", "name": "云南锗业", "hot_rank": 100, "hot_rank_chg": -26, "stock_cnt": 5797, "price": "69.40", "change": "1.09", "market_id": "33", "circulate_market_value": "45318721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [{"code": "600285", "name": "羚锐制药", "price": 22, "change_pct": 10.0, "reason": "贴膏剂龙头，国内规模最大的橡胶膏剂生产商之一，国内唯一骨架型芬太尼透皮贴剂生产厂家，主要产品包括通络祛痛膏、培元通脑胶囊、丹鹿通督片等；第三季度净利润同比增长26.71%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.57, "first_limit_up": 1793323927, "break_limit_up_times": 28}, {"code": "000596", "name": "古井贡酒", "price": 95.7, "change_pct": 10.0, "reason": "安徽地区白酒龙头，第三季度营业收入同比增长3.69%", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 2.56, "first_limit_up": 1793325249, "break_limit_up_times": 8}, {"code": "001219", "name": "青岛食品", "price": 19.94, "change_pct": 9.98, "reason": "公司主要从事饼干与花生酱等休闲食品的研产销，控股股东拟转让所持29.24%股权，实控人或变更为青岛市国资委", "plates": ["大消费"], "limit_up_days": 5, "turnover_ratio": 24.9, "first_limit_up": 1793323800, "break_limit_up_times": 3}, {"code": "001287", "name": "中电港", "price": 20.24, "change_pct": 10.0, "reason": "公司是英伟达、AMD的授权分销商之一，代理DRAM、Nand Flash等存储芯片；第三季度净利同比增长775.17%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.09, "first_limit_up": 1793323812, "break_limit_up_times": 5}, {"code": "002432", "name": "九安医疗", "price": 56.24, "change_pct": 9.99, "reason": "1、家用医疗健康电子产品龙头，前三季度归母净利润同比增长227.57%；\n2、公司间接投资Kimi、DeepSeek等多家大模型公司", "plates": ["业绩增长", "医药"], "limit_up_days": 1, "turnover_ratio": 4.37, "first_limit_up": 1793324022, "break_limit_up_times": 2}, {"code": "600510", "name": "黑牡丹", "price": 6.46, "change_pct": 10.05, "reason": "公司新型城镇化建设业务涵盖基础设施、建筑施工、保障性住房、房地产开发、物业服务及产业园区开发运营", "plates": ["房地产"], "limit_up_days": 1, "turnover_ratio": 3.25, "first_limit_up": 1793336401, "break_limit_up_times": 3}, {"code": "300030", "name": "阳普医疗", "price": 7.31, "change_pct": 20.03, "reason": "国内真空采血系统行业龙头", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 18.8, "first_limit_up": 1793326776, "break_limit_up_times": 0}, {"code": "000417", "name": "合百集团", "price": 5.7, "change_pct": 10.04, "reason": "1、安徽区域市场的零售龙头企业，第三季度净利润同比增长24524.13%；\n2、公司实缴出资2.225亿元分别参投了合肥兴泰慧科创业投资基金、合肥市国联资本股权投资基金、合肥市共创接力创业投资基金，三支基金已投资长鑫科技集团股份有限公司等;", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.1, "first_limit_up": 1793324169, "break_limit_up_times": 0}, {"code": "600721", "name": "百花医药", "price": 9.83, "change_pct": 9.96, "reason": "综合服务性CRO企业，控股股东、实际控制人拟变更为金华市国资委", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 25.31, "first_limit_up": 1793336401, "break_limit_up_times": 0}, {"code": "603703", "name": "盛洋科技", "price": 11.95, "change_pct": 10.04, "reason": "公司是DVB-NIP软硬件唯一提供商，软件已获欧洲某头部卫星运营商认可", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 1.84, "first_limit_up": 1793323500, "break_limit_up_times": 0}, {"code": "605058", "name": "澳弘电子", "price": 50.26, "change_pct": 10.0, "reason": "公司拟3.3亿元投建高端PCB定制化生产基地，产品以高性能、高可靠性的多层铝基盲孔板、阶梯槽PCB、热电分离铜基板、microled板、高多层厚铜板、多层特种线圈板、高频雷达板等高端定制化PCB产品为主", "plates": ["PCB板"], "limit_up_days": 1, "turnover_ratio": 10.68, "first_limit_up": 1793326704, "break_limit_up_times": 2}, {"code": "000995", "name": "皇台酒业", "price": 14.18, "change_pct": 10.01, "reason": "甘肃小型白酒企业；公司白酒产业拥有“皇台”和“凉州皇台”两大品牌，目前拥有“窖底原浆”、“皇台经典”等系列产品", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 28.78, "first_limit_up": 1793325264, "break_limit_up_times": 6}, {"code": "002636", "name": "金安国纪", "price": 63.68, "change_pct": 10.0, "reason": "国内覆铜板龙头，同时生产电子级玻纤布，第三季净利暴增超1000%", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 9.2, "first_limit_up": 1793325810, "break_limit_up_times": 1}, {"code": "603198", "name": "迎驾贡酒", "price": 44.47, "change_pct": 9.99, "reason": "徽酒的主要代表企业之一，第三季度净利润同比增长8.58%", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 1.11, "first_limit_up": 1793324653, "break_limit_up_times": 1}, {"code": "000410", "name": "沈阳机床", "price": 5.37, "change_pct": 10.04, "reason": "数控机床龙头，拟吸收合并沈阳优尼斯智能装备公司，后者主营产品包括机器人产品的技术开发与制造", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.38, "first_limit_up": 1793323998, "break_limit_up_times": 0}, {"code": "002088", "name": "鲁阳节能", "price": 7.74, "change_pct": 9.94, "reason": "中国陶瓷纤维龙头，间接控股股东筹划破产重组，公司实控人拟发生变更", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 3.37, "first_limit_up": 1793330259, "break_limit_up_times": 0}, {"code": "600113", "name": "浙江东日", "price": 24.62, "change_pct": 10.01, "reason": "1、公司主营农副产品批发交易市场、生鲜食材配送和豆制品生产加工，娄桥市场集群蔬果交易量占温州市区总供应量90%以上，是浙南闽北地区农产品价格形成中心；\n2、子公司培安美此前与首都医科大学开展业务洽谈，推进脑机接口技术研发与产业化", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 2.28, "first_limit_up": 1793336552, "break_limit_up_times": 0}, {"code": "000676", "name": "智度股份", "price": 6.61, "change_pct": 9.98, "reason": "公司全资子公司智度智麦专注数字品牌广告业务，第三季度净利润同比增长166.76%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.49, "first_limit_up": 1793324466, "break_limit_up_times": 0}, {"code": "002946", "name": "新乳业", "price": 15.82, "change_pct": 10.01, "reason": "公司主要从事乳制品及乳饮料的研产销，前三季净利润同比增长13.23%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.69, "first_limit_up": 1793338752, "break_limit_up_times": 0}, {"code": "002275", "name": "桂林三金", "price": 14.98, "change_pct": 9.99, "reason": "公司拥有国家中药保护品种21种，核心产品三金片、西瓜霜等产品为全国知名品牌，作用有清热泻火，消肿止痛、治疗咽炎等；第三季度净利润同比增长15.52%", "plates": ["医药", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 4.18, "first_limit_up": 1793323806, "break_limit_up_times": 0}, {"code": "605169", "name": "洪通燃气", "price": 12.78, "change_pct": 9.98, "reason": "新疆天然气专业运营商，第三季度净利润同比增长442.06%", "plates": ["业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.02, "first_limit_up": 1793323800, "break_limit_up_times": 1}, {"code": "603233", "name": "大参林", "price": 20.26, "change_pct": 9.99, "reason": "公司为华南地区医药零售龙头，第三季度净利润同比增长21.68%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 2.03, "first_limit_up": 1793329029, "break_limit_up_times": 0}, {"code": "000716", "name": "黑芝麻", "price": 5.24, "change_pct": 10.08, "reason": "1、我国糊类食品龙头企业；旗下拥有京和米业，主要生产的香米富硒米，年生产大米能力20万吨；第三季度净利润同比大增3969.87%\n2、公司拟对天臣新能源增资5亿，标的主要从事锂电池生产和销售", "plates": ["业绩增长", "大消费"], "limit_up_days": 1, "turnover_ratio": 4.15, "first_limit_up": 1793323806, "break_limit_up_times": 0}, {"code": "301132", "name": "满坤科技", "price": 56.08, "change_pct": 20.01, "reason": "公司主要产品为单/双面、多层高精密印制电路板，400G、800G高速光模块相关业务客户认证、送样、小批量出货有序开展，第三季度净利润同比增长231.24%", "plates": ["PCB板", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 17.3, "first_limit_up": 1793330802, "break_limit_up_times": 0}, {"code": "601083", "name": "锦江航运", "price": 13.93, "change_pct": 10.03, "reason": "公司主要从事国际、国内海上集装箱运输业务，多年来持续深耕东北亚、东南亚和国内航线；第三季度净利润同比增长21.8%\n", "plates": ["航运", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 10.35, "first_limit_up": 1793324157, "break_limit_up_times": 2}, {"code": "600215", "name": "派斯林", "price": 6.37, "change_pct": 10.02, "reason": "公司通过全资子公司美国万丰间接持有Paslin及其子公司全部生产经营主体100%股权；Paslin主营业务定位于工业机器人系统集成行业，主要从事智能化连接生产线", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 9.45, "first_limit_up": 1793324008, "break_limit_up_times": 2}, {"code": "603131", "name": "上海沪工", "price": 17.55, "change_pct": 10.03, "reason": "1、公司的航天业务板块由两部分构成，华宇科技为航天装备制造平台、沪航卫星科技为卫星业务平台；前三季度业绩同比扭亏：\n2、公司具备专业的商业卫星AIT生产能力，可同时在线装配多颗50KG以下的商业卫星；一季度净利润同比增长39.52%", "plates": ["航天", "业绩增长"], "limit_up_days": 3, "turnover_ratio": 3.21, "first_limit_up": 1793323500, "break_limit_up_times": 0}, {"code": "688045", "name": "必易微", "price": 61.87, "change_pct": 20.0, "reason": "1、公司主营高性能模拟及数模混合集成电路设计和销售，产品涵盖电源管理、电机驱动、电池管理、信号链及微控制器芯片；第三季度营收创历史新高，扣非后净利润同比大增4375.82%；\n2、公司推出面向服务器及数据中心等大功率应用的全栈数字电源方案，相关大功率电源、同步整流器及传感器芯片；\n3、公司在人形机器人领域已有小批量出货，产品包括磁传感器、磁编码器", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 7.05, "first_limit_up": 1793323944, "break_limit_up_times": 0}, {"code": "301187", "name": "欧圣电气", "price": 16.8, "change_pct": 20.0, "reason": "公司的护理机器人主要用于失能、失智等大小便不能自理的老人，或手术后恢复期等不方便自行解决大小便的特殊人群；第三季度净利润同比增长314.1%", "plates": ["机器人", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.15, "first_limit_up": 1793324118, "break_limit_up_times": 0}, {"code": "000525", "name": "红太阳", "price": 4.49, "change_pct": 10.05, "reason": "绿色农药全产业链公司，拥有行业内最完整、规模最大的吡啶碱产业链；第三季度净利润同比增长38.96%", "plates": ["大农业", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 6.03, "first_limit_up": 1793323947, "break_limit_up_times": 5}, {"code": "002652", "name": "扬子新材", "price": 3.91, "change_pct": 10.14, "reason": "公司有多款产品可满足于半导体洁净室的不同需求，前三季度净利润同比增长61.68%", "plates": ["国产芯片", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 5.03, "first_limit_up": 1793330922, "break_limit_up_times": 0}, {"code": "002365", "name": "永安药业", "price": 12.23, "change_pct": 9.98, "reason": "公司是牛磺酸行业龙头，前三季度净利大增348.81%", "plates": ["医药", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1793323800, "break_limit_up_times": 0}, {"code": "301520", "name": "万邦医药", "price": 60.06, "change_pct": 20.0, "reason": "公司拟3.02亿元收购赛德盛75.52%股份，落子创新药临床CRO赛道", "plates": ["医药"], "limit_up_days": 1, "turnover_ratio": 43.54, "first_limit_up": 1793336400, "break_limit_up_times": 0}, {"code": "603200", "name": "上海洗霸", "price": 51.72, "change_pct": 10.0, "reason": "公司应用于eVTOL的高比能软包锂离子固态电池已设计完成", "plates": ["其他"], "limit_up_days": 1, "turnover_ratio": 13.22, "first_limit_up": 1793336838, "break_limit_up_times": 11}, {"code": "600261", "name": "阳光照明", "price": 4.09, "change_pct": 9.95, "reason": "中国最大的节能灯生产和出口基地之一；公司使用自有资金 3,000万元参与蓝星光域（上海）航天科技有限公司融资，完成后阳光照明持有其1.0989%股权。蓝星光域成立于2021年 5月，专注于全场景激光通信解决方案，核心产品包括星载同轨/异轨激光通信终端、机载平流层激光通信终端等，主要应用于卫星间、星地间高速率通信，业务覆盖空天地海全场景空域", "plates": ["航天"], "limit_up_days": 2, "turnover_ratio": 2.51, "first_limit_up": 1793323500, "break_limit_up_times": 0}, {"code": "000568", "name": "泸州老窖", "price": 77.07, "change_pct": 10.01, "reason": "国内中高端白酒龙头企业之一，浓香白酒鼻祖，第三季度净利润环比增长111%", "plates": ["白酒"], "limit_up_days": 1, "turnover_ratio": 2.81, "first_limit_up": 1793338056, "break_limit_up_times": 0}, {"code": "600189", "name": "泉阳泉", "price": 8.84, "change_pct": 9.95, "reason": "吉林省市场占有率第一的饮用水品牌，推出白桦树汁等产品；前三季度净利增近九成", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 4.05, "first_limit_up": 1793325231, "break_limit_up_times": 0}, {"code": "002172", "name": "澳洋健康", "price": 5.91, "change_pct": 10.06, "reason": "公司计划以全资子公司澳洋老年病医院为业务主体，拟投资3500万元开展张家港澳洋老年病医院项目，以二级老年病专科医院为设计标准，计划核定床位约105张", "plates": ["医药"], "limit_up_days": 3, "turnover_ratio": 29.99, "first_limit_up": 1793327139, "break_limit_up_times": 2}, {"code": "605338", "name": "巴比食品", "price": 20.88, "change_pct": 10.01, "reason": "公司为国内中式面点速冻食品龙头，第三季度净利润同比增长10.51%", "plates": ["大消费", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.46, "first_limit_up": 1793338322, "break_limit_up_times": 6}, {"code": "603587", "name": "地素时尚", "price": 12.9, "change_pct": 9.97, "reason": "公司是国内中高端女装优质企业，泡泡玛特旗下超人气IP「Nyota」与地素时尚旗下品牌d’zzit重磅联名，“慢情绪穿搭”系列上线首日多款售罄；前三季度净利润同比增长19.78%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 1.19, "first_limit_up": 1793323933, "break_limit_up_times": 1}, {"code": "603029", "name": "天鹅股份", "price": 16.05, "change_pct": 10.01, "reason": "国内棉业机械龙头，控股股东为山东供销资本公司，实际控制人为山东省供销社；前三季度净利润同比增长28.59%", "plates": ["大农业", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 3.02, "first_limit_up": 1793323802, "break_limit_up_times": 0}, {"code": "002086", "name": "东方海洋", "price": 2.83, "change_pct": 10.12, "reason": "公司主要从事海水苗种繁育、养殖，水产品加工等，水产品加工主要包括调理食品系列、冷冻鱼片系列、海参系列加工产品等", "plates": ["大消费"], "limit_up_days": 2, "turnover_ratio": 27.18, "first_limit_up": 1793325276, "break_limit_up_times": 1}, {"code": "003032", "name": "传智教育", "price": 9.96, "change_pct": 10.06, "reason": "公司近日正式发布“AI具身智能机器人开发”新学科，首期班将于今年10月正式开班，课程覆盖工业机械臂、四足巡检机器人、人形服务机器人三类设备，并对接智元、宇树等头部厂商方案；第三季度净利润增幅达3403.46%", "plates": ["机器人", "业绩增长"], "limit_up_days": 2, "turnover_ratio": 6.64, "first_limit_up": 1793323872, "break_limit_up_times": 0}, {"code": "603273", "name": "天元智能", "price": 15.6, "change_pct": 10.01, "reason": "公司控股公司聚通领先主要业务涉及机器人集成应用、自动组网设备等", "plates": ["机器人"], "limit_up_days": 1, "turnover_ratio": 2.76, "first_limit_up": 1793324541, "break_limit_up_times": 0}, {"code": "000897", "name": "津滨发展", "price": 1.84, "change_pct": 10.18, "reason": "天津地区小地产商，前三季度净利润同比增长575.78%", "plates": ["业绩增长", "房地产"], "limit_up_days": 1, "turnover_ratio": 2.68, "first_limit_up": 1793323800, "break_limit_up_times": 0}, {"code": "600258", "name": "首旅酒店", "price": 12.43, "change_pct": 10.0, "reason": "公司为经济型连锁酒店龙头，覆盖高端、中高端、长租公寓、联盟酒店等全系列的酒店", "plates": ["大消费"], "limit_up_days": 1, "turnover_ratio": 6.52, "first_limit_up": 1793338221, "break_limit_up_times": 30}, {"code": "002582", "name": "好想你", "price": 9.93, "change_pct": 9.97, "reason": "红枣行业龙头，前三季度净利同比增长24939.49%", "plates": ["大消费", "业绩增长"], "limit_up_days": 1, "turnover_ratio": 17.72, "first_limit_up": 1793325480, "break_limit_up_times": 3}, {"code": "688066", "name": "*ST航图", "price": 5.57, "change_pct": 20.04, "reason": "公司被债权人申请重整", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 3.49, "first_limit_up": 1793323500, "break_limit_up_times": 1}, {"code": "600745", "name": "*ST闻泰", "price": 11.4, "change_pct": 10.04, "reason": "公司与荷兰安世谈判达成保密安排，正在实施供应链切换及国产产线导入", "plates": ["ST股"], "limit_up_days": 1, "turnover_ratio": 2.99, "first_limit_up": 1793323967, "break_limit_up_times": 3}];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "600745": "ST/风险警示股"};