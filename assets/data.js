const UPDATE_TIME = "2026-10-30 21:25";
const THS_HOT = [
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
    "name": "CRO概念",
    "rise": 0.76,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "10天9次上榜",
    "rankChg": 1,
    "etfName": "生物医药ETF",
    "code": "885927"
  },
  {
    "name": "高股息精选",
    "rise": 0.16,
    "rate": 0,
    "tag": "5家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": -1,
    "etfName": "红利低波ETF",
    "code": "886072"
  },
  {
    "name": "存储芯片",
    "rise": -5.05,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "连续272天上榜",
    "rankChg": 0,
    "etfName": "半导体ETF",
    "code": "886042"
  },
  {
    "name": "超级品牌",
    "rise": 0.67,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "7天6次上榜",
    "rankChg": 0,
    "etfName": "食品饮料ETF",
    "code": "885761"
  },
  {
    "name": "黄金概念",
    "rise": -2.46,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "10天8次上榜",
    "rankChg": 1,
    "etfName": "黄金股ETF",
    "code": "885530"
  },
  {
    "name": "AI应用",
    "rise": -4.8,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续77天上榜",
    "rankChg": -1,
    "etfName": "创业板软件ETF",
    "code": "886108"
  },
  {
    "name": "人工智能",
    "rise": -4.14,
    "rate": 0,
    "tag": "8家涨停",
    "hotTag": "连续26天上榜",
    "rankChg": 0,
    "etfName": "科创创业人工智能ETF",
    "code": "885728"
  },
  {
    "name": "青蒿素",
    "rise": 1.34,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "首次上榜",
    "rankChg": 0,
    "etfName": "生物医药ETF",
    "code": "885852"
  },
  {
    "name": "芯片概念",
    "rise": -4.65,
    "rate": 0,
    "tag": "3家涨停",
    "hotTag": "连续29天上榜",
    "rankChg": 0,
    "etfName": "芯片ETF",
    "code": "885756"
  },
  {
    "name": "固态电池",
    "rise": -2.92,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续20天上榜",
    "rankChg": 0,
    "etfName": "电池ETF",
    "code": "886032"
  },
  {
    "name": "军工",
    "rise": -4.07,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "连续14天上榜",
    "rankChg": 0,
    "etfName": "军工ETF",
    "code": "885700"
  },
  {
    "name": "脑机接口",
    "rise": -2.36,
    "rate": 0,
    "tag": "1家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 0,
    "etfName": "",
    "code": "886047"
  },
  {
    "name": "工业母机",
    "rise": -3.31,
    "rate": 0,
    "tag": "2家涨停",
    "hotTag": "5天3次上榜",
    "rankChg": 3,
    "etfName": "机器人ETF",
    "code": "885930"
  }
];
const THS_EVENTS = [
  {
    "title": "摒弃短期让利换量 白酒行业修复新路径",
    "desc": "",
    "heat": 697633,
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
    "title": "药企全景披露代谢管线布局 开启三重战略转型",
    "desc": "",
    "heat": 88797,
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
    "title": "从Token到Worken，智元提出物理AI“度量衡”",
    "desc": "",
    "heat": 88111,
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
    "title": "礼来Q3业绩超预期，上调全年营收指引至910亿–920亿美元",
    "desc": "",
    "heat": 74177,
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
    "title": "日活1.68亿超四大长视频之和，红果成为国内第四大App",
    "desc": "",
    "heat": 65136,
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
    "title": "国星宇航通过港交所聆讯 在从事卫星相关业务的中国民营商业航天企业中排名第七",
    "desc": "",
    "heat": 32836,
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
    "heat": 21843,
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
    "hot_rank": 4,
    "hot_rank_chg": 9,
    "stock_cnt": 5782,
    "price": "2.83",
    "change": "10.12",
    "market_id": "33",
    "circulate_market_value": "4474148700.00",
    "change_type": "1",
    "change_section": "5",
    "change_days": "3",
    "change_reason": "“羊”字辈",
    "xgb_concepts": []
  },
  {
    "code": "002172",
    "name": "澳洋健康",
    "hot_rank": 8,
    "hot_rank_chg": 7,
    "stock_cnt": 5782,
    "price": "5.91",
    "change": "10.06",
    "market_id": "33",
    "circulate_market_value": "4521981700.00",
    "change_type": "1",
    "change_section": "3",
    "change_days": "3",
    "change_reason": "脑机接口",
    "xgb_concepts": []
  },
  {
    "code": "600261",
    "name": "阳光照明",
    "hot_rank": 12,
    "hot_rank_chg": 8,
    "stock_cnt": 5782,
    "price": "4.09",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "5460366600.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "商业航天",
    "xgb_concepts": []
  },
  {
    "code": "603703",
    "name": "盛洋科技",
    "hot_rank": 19,
    "hot_rank_chg": 20,
    "stock_cnt": 5782,
    "price": "11.95",
    "change": "10.04",
    "market_id": "17",
    "circulate_market_value": "4959036300.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "卫星通信终端",
    "xgb_concepts": []
  },
  {
    "code": "600721",
    "name": "百花医药",
    "hot_rank": 24,
    "hot_rank_chg": 65,
    "stock_cnt": 5782,
    "price": "9.83",
    "change": "9.96",
    "market_id": "17",
    "circulate_market_value": "3780103300.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "医药外包",
    "xgb_concepts": []
  },
  {
    "code": "002696",
    "name": "百洋股份",
    "hot_rank": 25,
    "hot_rank_chg": 4,
    "stock_cnt": 5782,
    "price": "11.12",
    "change": "-9.96",
    "market_id": "33",
    "circulate_market_value": "3716959200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000530",
    "name": "冰山冷热",
    "hot_rank": 27,
    "hot_rank_chg": -13,
    "stock_cnt": 5782,
    "price": "7.92",
    "change": "-3.77",
    "market_id": "33",
    "circulate_market_value": "4752924500.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600664",
    "name": "哈药股份",
    "hot_rank": 28,
    "hot_rank_chg": 15,
    "stock_cnt": 5782,
    "price": "5.55",
    "change": "4.92",
    "market_id": "17",
    "circulate_market_value": "13977730000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600838",
    "name": "上海九百",
    "hot_rank": 30,
    "hot_rank_chg": -5,
    "stock_cnt": 5782,
    "price": "12.27",
    "change": "-9.98",
    "market_id": "17",
    "circulate_market_value": "4918821900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "003032",
    "name": "传智教育",
    "hot_rank": 34,
    "hot_rank_chg": 75,
    "stock_cnt": 5782,
    "price": "9.96",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "2833436800.00",
    "change_type": "1",
    "change_section": "2",
    "change_days": "2",
    "change_reason": "三季报增长",
    "xgb_concepts": []
  },
  {
    "code": "601398",
    "name": "工商银行",
    "hot_rank": 42,
    "hot_rank_chg": -10,
    "stock_cnt": 5782,
    "price": "8.75",
    "change": "-0.34",
    "market_id": "17",
    "circulate_market_value": "2359106900000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002249",
    "name": "大洋电机",
    "hot_rank": 43,
    "hot_rank_chg": -19,
    "stock_cnt": 5782,
    "price": "7.37",
    "change": "-10.01",
    "market_id": "33",
    "circulate_market_value": "13799822000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000410",
    "name": "沈阳机床",
    "hot_rank": 47,
    "hot_rank_chg": 170,
    "stock_cnt": 5782,
    "price": "5.37",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "10584368400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "扭亏",
    "xgb_concepts": []
  },
  {
    "code": "000725",
    "name": "京东方A",
    "hot_rank": 50,
    "hot_rank_chg": 20,
    "stock_cnt": 5782,
    "price": "4.46",
    "change": "-3.67",
    "market_id": "33",
    "circulate_market_value": "157737420000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002129",
    "name": "TCL中环",
    "hot_rank": 51,
    "hot_rank_chg": 184,
    "stock_cnt": 5782,
    "price": "9.38",
    "change": "1.96",
    "market_id": "33",
    "circulate_market_value": "37892943000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000525",
    "name": "红太阳",
    "hot_rank": 52,
    "hot_rank_chg": 214,
    "stock_cnt": 5782,
    "price": "4.49",
    "change": "10.05",
    "market_id": "33",
    "circulate_market_value": "4991802400.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "百草枯",
    "xgb_concepts": []
  },
  {
    "code": "002354",
    "name": "天娱数科",
    "hot_rank": 54,
    "hot_rank_chg": -26,
    "stock_cnt": 5782,
    "price": "7.52",
    "change": "-10.05",
    "market_id": "33",
    "circulate_market_value": "12234993200.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "300030",
    "name": "阳普医疗",
    "hot_rank": 55,
    "hot_rank_chg": 134,
    "stock_cnt": 5782,
    "price": "7.31",
    "change": "20.03",
    "market_id": "33",
    "circulate_market_value": "1989930200.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "“羊”字辈",
    "xgb_concepts": []
  },
  {
    "code": "002582",
    "name": "好想你",
    "hot_rank": 58,
    "hot_rank_chg": 109,
    "stock_cnt": 5782,
    "price": "9.93",
    "change": "9.97",
    "market_id": "33",
    "circulate_market_value": "3417653600.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报扭亏",
    "xgb_concepts": []
  },
  {
    "code": "603330",
    "name": "天洋新材",
    "hot_rank": 62,
    "hot_rank_chg": -3,
    "stock_cnt": 5782,
    "price": "10.25",
    "change": "5.89",
    "market_id": "17",
    "circulate_market_value": "4434904900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600189",
    "name": "泉阳泉",
    "hot_rank": 64,
    "hot_rank_chg": 172,
    "stock_cnt": 5782,
    "price": "8.84",
    "change": "9.95",
    "market_id": "17",
    "circulate_market_value": "6322348700.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "矿泉水",
    "xgb_concepts": []
  },
  {
    "code": "601086",
    "name": "国芳集团",
    "hot_rank": 65,
    "hot_rank_chg": -12,
    "stock_cnt": 5782,
    "price": "12.24",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "8151840000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600127",
    "name": "金健米业",
    "hot_rank": 69,
    "hot_rank_chg": 44,
    "stock_cnt": 5782,
    "price": "9.54",
    "change": "-1.45",
    "market_id": "17",
    "circulate_market_value": "6122611900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600028",
    "name": "中国石化",
    "hot_rank": 70,
    "hot_rank_chg": 3,
    "stock_cnt": 5782,
    "price": "5.90",
    "change": "4.98",
    "market_id": "17",
    "circulate_market_value": "558424490000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "002343",
    "name": "慈文传媒",
    "hot_rank": 77,
    "hot_rank_chg": -20,
    "stock_cnt": 5782,
    "price": "8.07",
    "change": "-10.03",
    "market_id": "33",
    "circulate_market_value": "3822599900.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000592",
    "name": "平潭发展",
    "hot_rank": 83,
    "hot_rank_chg": 31,
    "stock_cnt": 5782,
    "price": "6.35",
    "change": "-5.79",
    "market_id": "33",
    "circulate_market_value": "12160837100.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600667",
    "name": "太极实业",
    "hot_rank": 87,
    "hot_rank_chg": -19,
    "stock_cnt": 5782,
    "price": "12.81",
    "change": "-7.11",
    "market_id": "17",
    "circulate_market_value": "26792655000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "000417",
    "name": "合百集团",
    "hot_rank": 88,
    "hot_rank_chg": 239,
    "stock_cnt": 5782,
    "price": "5.70",
    "change": "10.04",
    "market_id": "33",
    "circulate_market_value": "4440456500.00",
    "change_type": "1",
    "change_section": 1,
    "change_days": 1,
    "change_reason": "三季报大增",
    "xgb_concepts": []
  },
  {
    "code": "601956",
    "name": "东贝集团",
    "hot_rank": 93,
    "hot_rank_chg": -9,
    "stock_cnt": 5782,
    "price": "6.03",
    "change": "-10.00",
    "market_id": "17",
    "circulate_market_value": "3748348000.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  },
  {
    "code": "600715",
    "name": "文投控股",
    "hot_rank": 94,
    "hot_rank_chg": -14,
    "stock_cnt": 5782,
    "price": "2.04",
    "change": "-10.13",
    "market_id": "17",
    "circulate_market_value": "5839239400.00",
    "change_type": "",
    "change_section": "",
    "change_days": "",
    "change_reason": "",
    "xgb_concepts": []
  }
];
const RECOMMENDED = [];
const ALL_STOCKS = [{"code": "603278", "name": "大业股份", "hot_rank": 1, "hot_rank_chg": 3, "stock_cnt": 5782, "price": "19.52", "change": "9.17", "market_id": "17", "circulate_market_value": "6671143300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002724", "name": "海洋王", "hot_rank": 2, "hot_rank_chg": 4, "stock_cnt": 5782, "price": "14.72", "change": "8.71", "market_id": "33", "circulate_market_value": "8338560400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300502", "name": "新易盛", "hot_rank": 3, "hot_rank_chg": -2, "stock_cnt": 5782, "price": "196.00", "change": "-14.19", "market_id": "33", "circulate_market_value": "245925850000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002086", "name": "东方海洋", "hot_rank": 4, "hot_rank_chg": 9, "stock_cnt": 5782, "price": "2.83", "change": "10.12", "market_id": "33", "circulate_market_value": "4474148700.00", "change_type": "1", "change_section": "5", "change_days": "3", "change_reason": "“羊”字辈", "xgb_concepts": []}, {"code": "688825", "name": "长鑫科技", "hot_rank": 5, "hot_rank_chg": 4, "stock_cnt": 5782, "price": "41.80", "change": "-2.50", "market_id": "17", "circulate_market_value": "188227030000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300308", "name": "中际旭创", "hot_rank": 6, "hot_rank_chg": -4, "stock_cnt": 5782, "price": "553.00", "change": "-4.99", "market_id": "33", "circulate_market_value": "613795160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000678", "name": "襄阳轴承", "hot_rank": 7, "hot_rank_chg": -4, "stock_cnt": 5782, "price": "18.08", "change": "-3.57", "market_id": "33", "circulate_market_value": "8309781300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002172", "name": "澳洋健康", "hot_rank": 8, "hot_rank_chg": 7, "stock_cnt": 5782, "price": "5.91", "change": "10.06", "market_id": "33", "circulate_market_value": "4521981700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "脑机接口", "xgb_concepts": []}, {"code": "002242", "name": "九阳股份", "hot_rank": 9, "hot_rank_chg": -1, "stock_cnt": 5782, "price": "22.14", "change": "-3.74", "market_id": "33", "circulate_market_value": "16865491000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002384", "name": "东山精密", "hot_rank": 10, "hot_rank_chg": 2, "stock_cnt": 5782, "price": "86.06", "change": "-8.58", "market_id": "33", "circulate_market_value": "119306847000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688836", "name": "宇树科技", "hot_rank": 11, "hot_rank_chg": -6, "stock_cnt": 5782, "price": "647.05", "change": "-2.32", "market_id": "17", "circulate_market_value": "19468259000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600261", "name": "阳光照明", "hot_rank": 12, "hot_rank_chg": 8, "stock_cnt": 5782, "price": "4.09", "change": "9.95", "market_id": "17", "circulate_market_value": "5460366600.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "商业航天", "xgb_concepts": []}, {"code": "600519", "name": "贵州茅台", "hot_rank": 13, "hot_rank_chg": 9, "stock_cnt": 5782, "price": "1392.05", "change": "2.81", "market_id": "17", "circulate_market_value": "1740176100000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600825", "name": "新华传媒", "hot_rank": 14, "hot_rank_chg": -4, "stock_cnt": 5782, "price": "13.36", "change": "-9.97", "market_id": "17", "circulate_market_value": "13959702000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001219", "name": "青岛食品", "hot_rank": 15, "hot_rank_chg": 18, "stock_cnt": 5782, "price": "19.94", "change": "9.98", "market_id": "33", "circulate_market_value": "3792538200.00", "change_type": "1", "change_section": "5", "change_days": "5", "change_reason": "青啤拟入主"}, {"code": "002636", "name": "金安国纪", "hot_rank": 16, "hot_rank_chg": -5, "stock_cnt": 5782, "price": "63.68", "change": "10.00", "market_id": "33", "circulate_market_value": "46183064000.00", "change_type": "1", "change_section": "3", "change_days": "2", "change_reason": "三季报高增"}, {"code": "603131", "name": "上海沪工", "hot_rank": 17, "hot_rank_chg": 14, "stock_cnt": 5782, "price": "17.55", "change": "10.03", "market_id": "17", "circulate_market_value": "5912721700.00", "change_type": "1", "change_section": "3", "change_days": "3", "change_reason": "三季报扭亏"}, {"code": "000568", "name": "泸州老窖", "hot_rank": 18, "hot_rank_chg": 19, "stock_cnt": 5782, "price": "77.07", "change": "10.01", "market_id": "33", "circulate_market_value": "113382381000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "业绩环增"}, {"code": "603703", "name": "盛洋科技", "hot_rank": 19, "hot_rank_chg": 20, "stock_cnt": 5782, "price": "11.95", "change": "10.04", "market_id": "17", "circulate_market_value": "4959036300.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "卫星通信终端", "xgb_concepts": []}, {"code": "000995", "name": "皇台酒业", "hot_rank": 20, "hot_rank_chg": 20, "stock_cnt": 5782, "price": "14.18", "change": "10.01", "market_id": "33", "circulate_market_value": "2515645400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "白酒"}, {"code": "603986", "name": "兆易创新", "hot_rank": 21, "hot_rank_chg": -2, "stock_cnt": 5782, "price": "257.80", "change": "-6.59", "market_id": "17", "circulate_market_value": "172911180000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000858", "name": "五粮液", "hot_rank": 22, "hot_rank_chg": 5, "stock_cnt": 5782, "price": "74.70", "change": "3.35", "market_id": "33", "circulate_market_value": "289949050000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300750", "name": "宁德时代", "hot_rank": 23, "hot_rank_chg": -2, "stock_cnt": 5782, "price": "232.92", "change": "1.68", "market_id": "33", "circulate_market_value": "992382930000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600721", "name": "百花医药", "hot_rank": 24, "hot_rank_chg": 65, "stock_cnt": 5782, "price": "9.83", "change": "9.96", "market_id": "17", "circulate_market_value": "3780103300.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "医药外包", "xgb_concepts": []}, {"code": "002696", "name": "百洋股份", "hot_rank": 25, "hot_rank_chg": 4, "stock_cnt": 5782, "price": "11.12", "change": "-9.96", "market_id": "33", "circulate_market_value": "3716959200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601857", "name": "中国石油", "hot_rank": 26, "hot_rank_chg": 15, "stock_cnt": 5782, "price": "13.84", "change": "1.10", "market_id": "17", "circulate_market_value": "2241001600000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000530", "name": "冰山冷热", "hot_rank": 27, "hot_rank_chg": -13, "stock_cnt": 5782, "price": "7.92", "change": "-3.77", "market_id": "33", "circulate_market_value": "4752924500.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600664", "name": "哈药股份", "hot_rank": 28, "hot_rank_chg": 15, "stock_cnt": 5782, "price": "5.55", "change": "4.92", "market_id": "17", "circulate_market_value": "13977730000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002708", "name": "光洋股份", "hot_rank": 29, "hot_rank_chg": -13, "stock_cnt": 5782, "price": "19.02", "change": "-8.69", "market_id": "33", "circulate_market_value": "9693169300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600838", "name": "上海九百", "hot_rank": 30, "hot_rank_chg": -5, "stock_cnt": 5782, "price": "12.27", "change": "-9.98", "market_id": "17", "circulate_market_value": "4918821900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002185", "name": "华天科技", "hot_rank": 31, "hot_rank_chg": -13, "stock_cnt": 5782, "price": "15.00", "change": "-1.12", "market_id": "33", "circulate_market_value": "49946661000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001309", "name": "德明利", "hot_rank": 32, "hot_rank_chg": 4, "stock_cnt": 5782, "price": "209.71", "change": "-2.64", "market_id": "33", "circulate_market_value": "48740397000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002275", "name": "桂林三金", "hot_rank": 33, "hot_rank_chg": 168, "stock_cnt": 5782, "price": "14.98", "change": "9.98", "market_id": "33", "circulate_market_value": "8459974500.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长"}, {"code": "003032", "name": "传智教育", "hot_rank": 34, "hot_rank_chg": 75, "stock_cnt": 5782, "price": "9.96", "change": "10.05", "market_id": "33", "circulate_market_value": "2833436800.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "三季报增长", "xgb_concepts": []}, {"code": "600487", "name": "亨通光电", "hot_rank": 35, "hot_rank_chg": -5, "stock_cnt": 5782, "price": "42.42", "change": "-4.89", "market_id": "17", "circulate_market_value": "104083674000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002580", "name": "圣阳股份", "hot_rank": 36, "hot_rank_chg": 13, "stock_cnt": 5782, "price": "17.49", "change": "4.23", "market_id": "33", "circulate_market_value": "7911405600.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000831", "name": "中国稀土", "hot_rank": 37, "hot_rank_chg": 375, "stock_cnt": 5782, "price": "47.59", "change": "-3.12", "market_id": "33", "circulate_market_value": "50503498000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300394", "name": "天孚通信", "hot_rank": 38, "hot_rank_chg": -31, "stock_cnt": 5782, "price": "148.00", "change": "-8.42", "market_id": "33", "circulate_market_value": "161081430000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002432", "name": "九安医疗", "hot_rank": 39, "hot_rank_chg": 58, "stock_cnt": 5782, "price": "56.24", "change": "9.99", "market_id": "33", "circulate_market_value": "24603775000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增"}, {"code": "001318", "name": "阳光乳业", "hot_rank": 40, "hot_rank_chg": 6, "stock_cnt": 5782, "price": "14.43", "change": "6.18", "market_id": "33", "circulate_market_value": "4078783800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300207", "name": "欣旺达", "hot_rank": 41, "hot_rank_chg": 108, "stock_cnt": 5782, "price": "16.06", "change": "-4.00", "market_id": "33", "circulate_market_value": "27515107000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601398", "name": "工商银行", "hot_rank": 42, "hot_rank_chg": -10, "stock_cnt": 5782, "price": "8.75", "change": "-0.34", "market_id": "17", "circulate_market_value": "2359106900000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002249", "name": "大洋电机", "hot_rank": 43, "hot_rank_chg": -19, "stock_cnt": 5782, "price": "7.37", "change": "-10.01", "market_id": "33", "circulate_market_value": "13799822000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603200", "name": "上海洗霸", "hot_rank": 44, "hot_rank_chg": 22, "stock_cnt": 5782, "price": "51.72", "change": "10.00", "market_id": "17", "circulate_market_value": "9075830900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "固态电池"}, {"code": "002747", "name": "埃斯顿", "hot_rank": 45, "hot_rank_chg": -19, "stock_cnt": 5782, "price": "29.24", "change": "2.96", "market_id": "33", "circulate_market_value": "22934276000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600118", "name": "中国卫星", "hot_rank": 46, "hot_rank_chg": -23, "stock_cnt": 5782, "price": "55.91", "change": "0.02", "market_id": "17", "circulate_market_value": "66112968000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000410", "name": "沈阳机床", "hot_rank": 47, "hot_rank_chg": 170, "stock_cnt": 5782, "price": "5.37", "change": "10.04", "market_id": "33", "circulate_market_value": "10584368400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "扭亏", "xgb_concepts": []}, {"code": "601899", "name": "紫金矿业", "hot_rank": 48, "hot_rank_chg": 68, "stock_cnt": 5782, "price": "27.60", "change": "-1.57", "market_id": "17", "circulate_market_value": "568609490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "605058", "name": "澳弘电子", "hot_rank": 49, "hot_rank_chg": 11, "stock_cnt": 5782, "price": "50.26", "change": "10.00", "market_id": "17", "circulate_market_value": "7183612100.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "PCB"}, {"code": "000725", "name": "京东方A", "hot_rank": 50, "hot_rank_chg": 20, "stock_cnt": 5782, "price": "4.46", "change": "-3.67", "market_id": "33", "circulate_market_value": "157737420000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002129", "name": "TCL中环", "hot_rank": 51, "hot_rank_chg": 184, "stock_cnt": 5782, "price": "9.38", "change": "1.96", "market_id": "33", "circulate_market_value": "37892943000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000525", "name": "红太阳", "hot_rank": 52, "hot_rank_chg": 214, "stock_cnt": 5782, "price": "4.49", "change": "10.05", "market_id": "33", "circulate_market_value": "4991802400.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "百草枯", "xgb_concepts": []}, {"code": "600900", "name": "长江电力", "hot_rank": 53, "hot_rank_chg": 73, "stock_cnt": 5782, "price": "29.74", "change": "-0.83", "market_id": "17", "circulate_market_value": "727684790000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002354", "name": "天娱数科", "hot_rank": 54, "hot_rank_chg": -26, "stock_cnt": 5782, "price": "7.52", "change": "-10.05", "market_id": "33", "circulate_market_value": "12234993200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300030", "name": "阳普医疗", "hot_rank": 55, "hot_rank_chg": 134, "stock_cnt": 5782, "price": "7.31", "change": "20.03", "market_id": "33", "circulate_market_value": "1989930200.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "“羊”字辈", "xgb_concepts": []}, {"code": "301520", "name": "万邦医药", "hot_rank": 56, "hot_rank_chg": 7, "stock_cnt": 5782, "price": "60.06", "change": "20.00", "market_id": "33", "circulate_market_value": "2098402900.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "CRO"}, {"code": "601138", "name": "工业富联", "hot_rank": 57, "hot_rank_chg": -19, "stock_cnt": 5782, "price": "45.00", "change": "-0.49", "market_id": "17", "circulate_market_value": "892984150000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002582", "name": "好想你", "hot_rank": 58, "hot_rank_chg": 109, "stock_cnt": 5782, "price": "9.93", "change": "9.97", "market_id": "33", "circulate_market_value": "3417653600.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报扭亏", "xgb_concepts": []}, {"code": "002149", "name": "西部材料", "hot_rank": 60, "hot_rank_chg": -26, "stock_cnt": 5782, "price": "33.57", "change": "3.90", "market_id": "33", "circulate_market_value": "16386830000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "300476", "name": "胜宏科技", "hot_rank": 61, "hot_rank_chg": -44, "stock_cnt": 5782, "price": "139.04", "change": "-13.31", "market_id": "33", "circulate_market_value": "120296705000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "603330", "name": "天洋新材", "hot_rank": 62, "hot_rank_chg": -3, "stock_cnt": 5782, "price": "10.25", "change": "5.89", "market_id": "17", "circulate_market_value": "4434904900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "002164", "name": "宁波东力", "hot_rank": 63, "hot_rank_chg": -21, "stock_cnt": 5782, "price": "19.03", "change": "5.78", "market_id": "33", "circulate_market_value": "9130121000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600189", "name": "泉阳泉", "hot_rank": 64, "hot_rank_chg": 172, "stock_cnt": 5782, "price": "8.84", "change": "9.95", "market_id": "17", "circulate_market_value": "6322348700.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "矿泉水", "xgb_concepts": []}, {"code": "601086", "name": "国芳集团", "hot_rank": 65, "hot_rank_chg": -12, "stock_cnt": 5782, "price": "12.24", "change": "-10.00", "market_id": "17", "circulate_market_value": "8151840000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "300274", "name": "阳光电源", "hot_rank": 66, "hot_rank_chg": 17, "stock_cnt": 5782, "price": "65.29", "change": "-2.86", "market_id": "33", "circulate_market_value": "103645241000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002428", "name": "云南锗业", "hot_rank": 67, "hot_rank_chg": -23, "stock_cnt": 5782, "price": "69.40", "change": "1.09", "market_id": "33", "circulate_market_value": "45318721000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000596", "name": "古井贡酒", "hot_rank": 68, "hot_rank_chg": 50, "stock_cnt": 5782, "price": "95.70", "change": "10.00", "market_id": "33", "circulate_market_value": "39103020000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "中期分红"}, {"code": "600127", "name": "金健米业", "hot_rank": 69, "hot_rank_chg": 44, "stock_cnt": 5782, "price": "9.54", "change": "-1.45", "market_id": "17", "circulate_market_value": "6122611900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600028", "name": "中国石化", "hot_rank": 70, "hot_rank_chg": 3, "stock_cnt": 5782, "price": "5.90", "change": "4.98", "market_id": "17", "circulate_market_value": "558424490000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "601088", "name": "中国神华", "hot_rank": 71, "hot_rank_chg": 92, "stock_cnt": 5782, "price": "51.99", "change": "0.72", "market_id": "17", "circulate_market_value": "881163110000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601869", "name": "长飞光纤", "hot_rank": 73, "hot_rank_chg": 47, "stock_cnt": 5782, "price": "252.88", "change": "-7.57", "market_id": "17", "circulate_market_value": "102754833000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "001317", "name": "三羊马", "hot_rank": 74, "hot_rank_chg": -16, "stock_cnt": 5782, "price": "52.45", "change": "-9.69", "market_id": "33", "circulate_market_value": "4484607000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000823", "name": "超声电子", "hot_rank": 75, "hot_rank_chg": -40, "stock_cnt": 5782, "price": "17.20", "change": "4.05", "market_id": "33", "circulate_market_value": "10232833300.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600584", "name": "长电科技", "hot_rank": 76, "hot_rank_chg": -24, "stock_cnt": 5782, "price": "49.00", "change": "-5.53", "market_id": "17", "circulate_market_value": "87681314000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002343", "name": "慈文传媒", "hot_rank": 77, "hot_rank_chg": -20, "stock_cnt": 5782, "price": "8.07", "change": "-10.03", "market_id": "33", "circulate_market_value": "3822599900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603259", "name": "药明康德", "hot_rank": 78, "hot_rank_chg": -9, "stock_cnt": 5782, "price": "142.01", "change": "-0.62", "market_id": "17", "circulate_market_value": "351230530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601919", "name": "中远海控", "hot_rank": 79, "hot_rank_chg": -4, "stock_cnt": 5782, "price": "17.84", "change": "7.02", "market_id": "17", "circulate_market_value": "223120220000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688256", "name": "寒武纪", "hot_rank": 80, "hot_rank_chg": 10, "stock_cnt": 5782, "price": "880.00", "change": "-3.62", "market_id": "17", "circulate_market_value": "553391530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "688137", "name": "近岸蛋白", "hot_rank": 81, "hot_rank_chg": -30, "stock_cnt": 5782, "price": "150.80", "change": "16.45", "market_id": "17", "circulate_market_value": "10543551900.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601091", "name": "沈鼓集团", "hot_rank": 82, "hot_rank_chg": -11, "stock_cnt": 5782, "price": "17.28", "change": "0.99", "market_id": "17", "circulate_market_value": "3648899800.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "000592", "name": "平潭发展", "hot_rank": 83, "hot_rank_chg": 31, "stock_cnt": 5782, "price": "6.35", "change": "-5.79", "market_id": "33", "circulate_market_value": "12160837100.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603198", "name": "迎驾贡酒", "hot_rank": 84, "hot_rank_chg": 48, "stock_cnt": 5782, "price": "44.47", "change": "9.99", "market_id": "17", "circulate_market_value": "35576000000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "605338", "name": "巴比食品", "hot_rank": 85, "hot_rank_chg": 205, "stock_cnt": 5782, "price": "20.88", "change": "10.01", "market_id": "17", "circulate_market_value": "5002151900.00", "change_type": "1", "change_section": "2", "change_days": "2", "change_reason": "中式面点"}, {"code": "001287", "name": "中电港", "hot_rank": 86, "hot_rank_chg": 79, "stock_cnt": 5782, "price": "20.24", "change": "10.00", "market_id": "33", "circulate_market_value": "15380378000.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增"}, {"code": "600667", "name": "太极实业", "hot_rank": 87, "hot_rank_chg": -19, "stock_cnt": 5782, "price": "12.81", "change": "-7.11", "market_id": "17", "circulate_market_value": "26792655000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "000417", "name": "合百集团", "hot_rank": 88, "hot_rank_chg": 239, "stock_cnt": 5782, "price": "5.70", "change": "10.04", "market_id": "33", "circulate_market_value": "4440456500.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报大增", "xgb_concepts": []}, {"code": "000651", "name": "格力电器", "hot_rank": 89, "hot_rank_chg": 47, "stock_cnt": 5782, "price": "38.49", "change": "2.42", "market_id": "33", "circulate_market_value": "212191250000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301132", "name": "满坤科技", "hot_rank": 90, "hot_rank_chg": -4, "stock_cnt": 5782, "price": "56.08", "change": "20.01", "market_id": "33", "circulate_market_value": "5313060800.00", "change_type": "1", "change_section": 1, "change_days": 1, "change_reason": "三季报增长"}, {"code": "600522", "name": "中天科技", "hot_rank": 91, "hot_rank_chg": -29, "stock_cnt": 5782, "price": "23.17", "change": "-7.95", "market_id": "17", "circulate_market_value": "79078043000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600036", "name": "招商银行", "hot_rank": 92, "hot_rank_chg": 38, "stock_cnt": 5782, "price": "43.55", "change": "1.42", "market_id": "17", "circulate_market_value": "898390530000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601956", "name": "东贝集团", "hot_rank": 93, "hot_rank_chg": -9, "stock_cnt": 5782, "price": "6.03", "change": "-10.00", "market_id": "17", "circulate_market_value": "3748348000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "600715", "name": "文投控股", "hot_rank": 94, "hot_rank_chg": -14, "stock_cnt": 5782, "price": "2.04", "change": "-10.13", "market_id": "17", "circulate_market_value": "5839239400.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": "", "xgb_concepts": []}, {"code": "603993", "name": "洛阳钼业", "hot_rank": 95, "hot_rank_chg": 108, "stock_cnt": 5782, "price": "13.65", "change": "-2.36", "market_id": "17", "circulate_market_value": "238340500000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "600176", "name": "中国巨石", "hot_rank": 96, "hot_rank_chg": -19, "stock_cnt": 5782, "price": "27.68", "change": "-5.59", "market_id": "17", "circulate_market_value": "109933529000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "601318", "name": "中国平安", "hot_rank": 97, "hot_rank_chg": 6, "stock_cnt": 5782, "price": "52.80", "change": "-0.75", "market_id": "17", "circulate_market_value": "562851440000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002463", "name": "沪电股份", "hot_rank": 98, "hot_rank_chg": -44, "stock_cnt": 5782, "price": "87.34", "change": "-7.19", "market_id": "33", "circulate_market_value": "168307980000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "301079", "name": "邵阳液压", "hot_rank": 99, "hot_rank_chg": -54, "stock_cnt": 5782, "price": "36.79", "change": "8.21", "market_id": "33", "circulate_market_value": "2830380200.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}, {"code": "002594", "name": "比亚迪", "hot_rank": 100, "hot_rank_chg": 52, "stock_cnt": 5782, "price": "81.65", "change": "-1.03", "market_id": "33", "circulate_market_value": "284719160000.00", "change_type": "", "change_section": "", "change_days": "", "change_reason": ""}];
const LIMIT_UP_POOL = [];
const RISK_STOCKS = {"524990": "[立案调查] 26宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524505": "[立案调查] 25宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524784": "[立案调查] 26宏桂01：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "524583": "[立案调查] 25宏桂02：申万宏源证券有限公司关于广西宏桂资本运营集团有限公司高级管理人员被", "300347": "[立案调查] 泰格医药：关于公司实际控制人被中国证券监督管理委员会立案调查的进展公告", "688121": "[立案调查] *ST卓然：关于公司立案调查进展暨退市风险提示公告", "002731": "[立案调查] *ST萃华：关于立案调查进展暨未在规定期限内披露定期报告暨股票可能被终止上市的第", "603922": "[立案调查] ST金鸿顺：金鸿顺关于立案调查进展暨风险提示公告", "603199": "[立案调查] 九华旅游：九华旅游关于副总经理被立案审查调查并留置的公告", "301139": "[立案调查] 元道通信：关于立案调查进展暨风险提示的公告", "688496": "[立案调查] 清越科技：清越科技关于立案调查进展暨风险提示公告", "603008": "[立案调查] 喜临门：喜临门健康睡眠科技股份公司关于立案调查进展暨风险提示公告", "524341": "[立案调查] 25蓉环KV2：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "524488": "[立案调查] 25蓉环YK1：东方金诚国际信用评估有限公司关于成都环境投资集团有限公司副董事长", "920305": "[立案调查] [临时公告]*ST云创:关于公司股票可能被终止上市暨立案调查进展的第六次风险提示", "000638": "[立案调查] *ST万方：关于立案调查进展暨风险提示公告", "524256": "[立案调查] 25蓉环G1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "524697": "[立案调查] 26蓉环V1：关于成都环境投资集团有限公司副董事长、董事会秘书接受立案调查与留置", "920370": "[立案调查] [临时公告]新安洁:关于董事长被立案调查和留置的公告", "603169": "[立案调查] 兰石重装：兰石重装关于公司副总经理被留置并立案调查的公告", "300391": "[立案调查] *ST长药：关于立案调查进展暨风险提示公告", "300344": "[立案调查] ST立方：关于立案调查事项进展暨风险提示的公告", "600581": "[立案调查] 八一钢铁：八一钢铁关于中国证券监督管理委员会对控股股东立案调查的公告", "603388": "[立案调查] *ST元成：元成环境股份有限公司关于立案调查进展暨风险提示公告", "300379": "[立案调查] *ST东通：关于立案调查进展暨风险提示公告", "688692": "[立案调查] 达梦数据：关于公司董事兼高级副总经理被立案调查的公告", "000851": "[立案调查] *ST高鸿：关于立案调查进展暨风险提示公告", "300900": "[立案调查] 广联航空：中证鹏元关于关注广联航空工业股份有限公司控股股东、实际控制人、董事长被", "300276": "[立案调查] 三丰智能：关于公司董事被立案调查的公告", "600200": "[立案调查] *ST苏吴：江苏吴中医药发展股份有限公司关于立案调查进展暨风险提示公告", "430090": "[立案调查] [临时公告]同辉信息:关于立案调查进展暨风险提示公告", "835305": "[立案调查] [临时公告]*ST云创:关于立案调查进展暨风险提示公告", "603599": "[行政处罚事先告知书] 广信股份：关于控股股东收到行政处罚事先告知书的公告", "002535": "[行政处罚事先告知书] 林州重机：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002717": "[行政处罚事先告知书] *ST岭南：关于收到万安县住房和城乡建设局《行政处罚事先告知书》的公告", "600095": "[行政处罚事先告知书] 湘财股份：湘财股份关于子公司收到中国证券监督管理委员会湖南监管局行政处罚事先告知", "002670": "[行政处罚事先告知书] 国盛证券：关于公司及相关当事人收到《行政处罚事先告知书》及《行政监管措施事先告知", "000909": "[行政处罚事先告知书] *ST数源：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002424": "[行政处罚事先告知书] ST百灵：关于实际控制人收到《行政处罚事先告知书》的公告", "603828": "[行政处罚事先告知书] *ST利达：柯利达关于收到中国证券监督管理委员会江苏监管局《行政处罚事先告知书》", "603363": "[行政处罚事先告知书] 傲农生物：福建傲农生物科技集团股份有限公司关于公司及相关当事人收到中国证券监督管", "301117": "[行政处罚事先告知书] 佳缘科技：关于收到《行政处罚事先告知书》的公告", "600080": "[行政处罚事先告知书] ST金花：金花企业（集团）股份有限公司关于公司董事长收到中国证券监督管理委员会陕", "600299": "[行政处罚事先告知书] 安迪苏：安迪苏关于公司副总经理因非本公司事项收到行政处罚事先告知书的公告", "002779": "[行政处罚事先告知书] 中坚科技：关于收到中国证券监督管理委员会浙江监管局行政处罚事先告知书的公告", "300152": "[行政处罚事先告知书] *ST动力：关于公司及相关人员收到河北监管局行政处罚事先告知书的公告", "603773": "[行政处罚事先告知书] 沃格光电：江西沃格光电集团股份有限公司关于控股股东、实际控制人及持股5%以上股东", "002536": "[行政处罚事先告知书] 飞龙股份：关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "002108": "[行政处罚事先告知书] 沧州明珠：沧州明珠关于独立董事因非本公司事项收到《行政处罚事先告知书》的公告", "600530": "[行政处罚事先告知书] 交大昂立：关于收到《行政处罚事先告知书》的公告", "600439": "[行政处罚事先告知书] 瑞贝卡：关于收到《行政处罚事先告知书》的公告", "603300": "[行政处罚事先告知书] 海南华铁：浙江海控南科华铁数智科技股份有限公司关于收到《行政处罚事先告知书》的公", "300278": "[行政处罚事先告知书] 华昌达：关于公司董事长因非本公司事项收到《行政处罚事先告知书》的公告", "603717": "[行政处罚事先告知书] 天域生物：关于实际控制人收到中国证券监督管理委员会行政处罚事先告知书的公告", "000911": "[行政处罚事先告知书] *ST广糖：广西农投糖业集团股份有限公司关于公司及相关当事人收到《行政处罚事先告", "002528": "[行政处罚事先告知书] *ST英飞：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "600735": "[行政处罚事先告知书] ST新华锦：新华锦关于收到《行政处罚事先告知书》的公告", "300716": "[行政处罚事先告知书] *ST泉为：关于收到《行政处罚事先告知书》的公告", "002759": "[行政处罚事先告知书] 天际股份：关于收到《行政处罚事先告知书》的公告", "002342": "[行政处罚事先告知书] 巨力索具：关于收到中国证券监督管理委员会河北监管局《行政处罚事先告知书》的公告", "600525": "[行政处罚事先告知书] ST长园：关于收到《行政处罚事先告知书》的公告", "300087": "[行政处罚事先告知书] 荃银高科：关于收到《行政处罚事先告知书》的公告", "688793": "[行政处罚事先告知书] 倍轻松：关于实际控制人收到《行政处罚事先告知书》的公告", "002217": "[行政处罚事先告知书] 合力泰：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300096": "[行政处罚事先告知书] ST易联众：关于收到《行政处罚事先告知书》的公告", "688189": "[行政处罚事先告知书] 南新制药：关于收到《行政处罚事先告知书》的公告", "300831": "[行政处罚事先告知书] 派瑞股份：关于收到《行政处罚事先告知书》的公告", "000716": "[行政处罚事先告知书] 黑芝麻：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "603733": "[行政处罚事先告知书] 仙鹤股份：仙鹤股份有限公司关于实际控制人之一收到行政处罚事先告知书的公告", "605199": "[行政处罚事先告知书] ST葫芦娃：葫芦娃关于收到中国证券监督管理委员会海南监管局《行政处罚事先告知书》", "600850": "[行政处罚事先告知书] 电科数字：中电科数字技术股份有限公司关于收到中国证券监督管理委员会上海监管局《行", "300163": "[行政处罚事先告知书] 先锋新材：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "002193": "[行政处罚事先告知书] 如意集团：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "601718": "[行政处罚事先告知书] 际华集团：际华集团关于收到中国证券监督管理委员会行政处罚事先告知书的公告", "600157": "[行政处罚事先告知书] 永泰能源：永泰能源集团股份有限公司关于公司实际控制人因非本公司事项收到中国证券监", "300201": "[行政处罚事先告知书] 海伦哲：关于第一大股东之控股股东及其实际控制人因非本公司事项收到《行政处罚事先告", "000567": "[行政处罚事先告知书] 海德股份：关于公司及相关人员收到《行政处罚事先告知书》的公告", "601212": "[行政处罚事先告知书] 白银有色：白银有色集团股份有限公司关于公司董事长因非本公司事项收到《行政处罚事先", "688270": "[行政处罚事先告知书] 臻镭科技：浙江臻镭科技股份有限公司关于收到《行政处罚事先告知书》的公告", "603377": "[行政处罚事先告知书] ST东时：关于实际控制人收到北京证监局《行政处罚事先告知书》的公告", "300205": "[行政处罚事先告知书] *ST天喻：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》的公告", "600082": "[行政处罚事先告知书] 海泰发展：天津海泰科技发展股份有限公司关于收到中国证券监督管理委员会天津监管局《", "600599": "[行政处罚事先告知书] *ST熊猫：*ST熊猫关于收到中国证监会湖南监管局《行政处罚事先告知书》的公告", "600759": "[行政处罚事先告知书] 洲际油气：洲际油气股份有限公司关于公司股东收到行政处罚事先告知书的公告", "002598": "[行政处罚事先告知书] 山东章鼓：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "300081": "[行政处罚事先告知书] 恒信东方：关于收到中国证券监督管理委员会北京监管局《行政处罚事先告知书》的公告", "002159": "[行政处罚事先告知书] 三特索道：关于公司及相关责任人收到《行政处罚事先告知书》的公告", "002538": "[行政处罚事先告知书] 司尔特：关于公司及相关当事人收到中国证监会安徽监管局《行政处罚及市场禁入事先告知", "600481": "[行政处罚事先告知书] 双良节能：双良节能系统股份有限公司关于公司及控股股东收到行政处罚事先告知书的公告", "688209": "[行政处罚事先告知书] 英集芯：英集芯关于收到《行政处罚事先告知书》的公告", "300209": "[行政处罚事先告知书] 行云科技：关于股东收到《行政处罚事先告知书》的公告", "603789": "[行政处罚事先告知书] *ST星农：*ST星农关于收到《行政处罚事先告知书》的公告", "300796": "[行政处罚事先告知书] 贝斯美：关于实际控制人收到《行政处罚事先告知书》的公告", "601162": "[行政处罚事先告知书] 天风证券：天风证券股份有限公司关于收到中国证券监督管理委员会福建监管局《行政处罚", "300111": "[行政处罚事先告知书] 向日葵：关于收到《行政处罚事先告知书》的公告", "603398": "[行政处罚事先告知书] *ST沐邦：江西沐邦高科股份有限公司关于公司及相关当事人收到《行政处罚事先告知书", "688575": "[行政处罚事先告知书] 亚辉龙：关于收到行政处罚事先告知书的公告", "600753": "[行政处罚事先告知书] *ST海钦：海钦股份关于收到《行政处罚事先告知书》的公告", "002512": "[行政处罚事先告知书] 达华智能：关于收到中国证券监督管理委员会福建监管局《行政处罚事先告知书》的公告", "688005": "[行政处罚事先告知书] 容百科技：关于收到《行政处罚事先告知书》的公告", "603421": "[行政处罚事先告知书] 鼎信通讯：鼎信通讯关于公司董事兼副总经理收到行政处罚事先告知书的公告", "000821": "[行政处罚事先告知书] 京山轻机：关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》整改情况", "920198": "[行政处罚事先告知书] [临时公告]微创光电:关于公司及相关当事人收到中国证券监督管理委员会湖北监管局行", "688669": "[行政处罚事先告知书] 聚石化学：关于收到《行政处罚事先告知书》的公告", "600107": "[行政处罚事先告知书] ST尔雅：关于公司及相关人员收到《行政处罚事先告知书》的公告", "600338": "[行政处罚事先告知书] 西藏珠峰：关于公司控股股东收到中国证券监督管理委员会行政处罚事先告知书的公告", "002055": "[行政处罚事先告知书] 得润电子：关于公司及相关当事人收到《行政处罚事先告知书》的公告", "920748": "[行政处罚事先告知书] [临时公告]路桥信息:关于公司及相关当事人收到中国证券监督管理委员会厦门监管局行", "300730": "[行政处罚事先告知书] 科创信息：关于收到《行政处罚事先告知书》的公告", "300173": "[行政处罚事先告知书] 福能东方：关于收到中国证券监督管理委员会广东监管局《行政处罚事先告知书》的公告", "300594": "[行政处罚事先告知书] 朗进科技：山东朗进科技股份有限公司关于公司及相关当事人收到《行政处罚事先告知书》", "600079": "[行政处罚事先告知书] 人福医药：人福医药关于收到中国证券监督管理委员会湖北监管局《行政处罚事先告知书》", "524097": "[行政处罚事先告知书] 25一创01：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524313": "[行政处罚事先告知书] 25一创06：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "148847": "[行政处罚事先告知书] 24一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "524098": "[行政处罚事先告知书] 25一创02：东北证券股份有限公司关于第一创业证券股份有限公司全资子公司收到中国", "600745": "ST/风险警示股"};